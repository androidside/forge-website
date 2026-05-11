import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_MAX_LENGTH = 254;
const SHEET_TAB = "Signups";
const TURNSTILE_VERIFY_URL =
	"https://challenges.cloudflare.com/turnstile/v0/siteverify";

type WaitlistError =
	| "method_not_allowed"
	| "invalid_body"
	| "invalid_email"
	| "bot_check_failed"
	| "rate_limited"
	| "server_error";

const rateLimitWindow = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

function fail(res: VercelResponse, status: number, error: WaitlistError) {
	return res.status(status).json({ ok: false, error });
}

function clientIp(req: VercelRequest): string {
	const xff = req.headers["x-forwarded-for"];
	const raw = Array.isArray(xff) ? xff[0] : xff ?? "";
	return raw.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const recent = (rateLimitWindow.get(ip) ?? []).filter(
		(t) => now - t < RATE_LIMIT_WINDOW_MS,
	);
	if (recent.length >= RATE_LIMIT_MAX) {
		rateLimitWindow.set(ip, recent);
		return true;
	}
	recent.push(now);
	rateLimitWindow.set(ip, recent);
	return false;
}

async function verifyTurnstile(token: string, remoteip: string): Promise<boolean> {
	const secret = process.env.TURNSTILE_SECRET_KEY;
	if (!secret) return false;
	const body = new URLSearchParams({ secret, response: token, remoteip });
	const r = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
	if (!r.ok) return false;
	const data = (await r.json()) as { success?: boolean };
	return data.success === true;
}

function getSheetsClient() {
	const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
	const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
	if (!email || !rawKey) throw new Error("missing_google_credentials");
	const privateKey = rawKey.replace(/\\n/g, "\n");
	const auth = new google.auth.JWT({
		email,
		key: privateKey,
		scopes: ["https://www.googleapis.com/auth/spreadsheets"],
	});
	return google.sheets({ version: "v4", auth });
}

async function emailExists(
	sheets: ReturnType<typeof getSheetsClient>,
	spreadsheetId: string,
	email: string,
): Promise<boolean> {
	const resp = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: `${SHEET_TAB}!B:B`,
	});
	const rows = resp.data.values ?? [];
	const needle = email.toLowerCase();
	for (let i = 1; i < rows.length; i++) {
		const cell = (rows[i]?.[0] ?? "").toString().trim().toLowerCase();
		if (cell === needle) return true;
	}
	return false;
}

async function appendSignup(
	sheets: ReturnType<typeof getSheetsClient>,
	spreadsheetId: string,
	email: string,
	source: string,
): Promise<void> {
	await sheets.spreadsheets.values.append({
		spreadsheetId,
		range: `${SHEET_TAB}!A:C`,
		valueInputOption: "RAW",
		requestBody: {
			values: [[new Date().toISOString(), email, source]],
		},
	});
}

export default async function handler(
	req: VercelRequest,
	res: VercelResponse,
) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return fail(res, 405, "method_not_allowed");
	}

	const ip = clientIp(req);
	if (isRateLimited(ip)) return fail(res, 429, "rate_limited");

	const body = (req.body ?? {}) as {
		email?: unknown;
		turnstileToken?: unknown;
		source?: unknown;
	};
	const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
	const token =
		typeof body.turnstileToken === "string" ? body.turnstileToken : "";
	const source =
		typeof body.source === "string" && body.source.length <= 64
			? body.source
			: "landing-hero";

	if (!rawEmail || !token) return fail(res, 400, "invalid_body");

	const email = rawEmail.toLowerCase();
	if (email.length > EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(email)) {
		return fail(res, 400, "invalid_email");
	}

	const turnstileOk = await verifyTurnstile(token, ip);
	if (!turnstileOk) return fail(res, 403, "bot_check_failed");

	try {
		const spreadsheetId = process.env.GOOGLE_SHEET_ID;
		if (!spreadsheetId) throw new Error("missing_sheet_id");
		const sheets = getSheetsClient();
		const exists = await emailExists(sheets, spreadsheetId, email);
		if (exists) return res.status(200).json({ ok: true, duplicate: true });
		await appendSignup(sheets, spreadsheetId, email, source);
		return res.status(200).json({ ok: true });
	} catch (err) {
		console.error("waitlist append failed", err);
		return fail(res, 500, "server_error");
	}
}
