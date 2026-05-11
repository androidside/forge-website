import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/design-system/button/Button";

const TURNSTILE_SCRIPT_SRC =
	"https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileRenderOptions = {
	sitekey: string;
	callback: (token: string) => void;
	"error-callback"?: () => void;
	"expired-callback"?: () => void;
	theme?: "light" | "dark" | "auto";
	size?: "normal" | "compact" | "flexible" | "invisible";
};

declare global {
	interface Window {
		turnstile?: {
			render: (
				container: HTMLElement,
				options: TurnstileRenderOptions,
			) => string;
			execute: (widgetId: string) => void;
			reset: (widgetId?: string) => void;
		};
	}
}

function ensureTurnstileScript(): Promise<void> {
	if (typeof window === "undefined") return Promise.resolve();
	if (window.turnstile) return Promise.resolve();
	const existing = document.querySelector<HTMLScriptElement>(
		`script[src^="${TURNSTILE_SCRIPT_SRC.split("?")[0]}"]`,
	);
	if (existing) {
		return new Promise((resolve) => {
			if (window.turnstile) return resolve();
			existing.addEventListener("load", () => resolve(), { once: true });
		});
	}
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = TURNSTILE_SCRIPT_SRC;
		script.async = true;
		script.defer = true;
		script.addEventListener("load", () => resolve(), { once: true });
		script.addEventListener(
			"error",
			() => reject(new Error("turnstile_load_failed")),
			{ once: true },
		);
		document.head.appendChild(script);
	});
}

type WaitlistFormProps = {
	source?: string;
	id?: string;
};

export function WaitlistForm({
	source = "landing-hero",
	id,
}: WaitlistFormProps) {
	const [email, setEmail] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const widgetContainerRef = useRef<HTMLDivElement | null>(null);
	const widgetIdRef = useRef<string | null>(null);
	const tokenResolverRef = useRef<{
		resolve: (token: string) => void;
		reject: (err: Error) => void;
	} | null>(null);

	const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as
		| string
		| undefined;

	useEffect(() => {
		if (!siteKey || !widgetContainerRef.current) return;
		let cancelled = false;
		ensureTurnstileScript()
			.then(() => {
				if (cancelled || !window.turnstile || !widgetContainerRef.current) {
					return;
				}
				widgetIdRef.current = window.turnstile.render(
					widgetContainerRef.current,
					{
						sitekey: siteKey,
						size: "invisible",
						theme: "dark",
						callback: (t: string) => {
							tokenResolverRef.current?.resolve(t);
							tokenResolverRef.current = null;
						},
						"expired-callback": () => {
							tokenResolverRef.current?.reject(new Error("expired"));
							tokenResolverRef.current = null;
						},
						"error-callback": () => {
							tokenResolverRef.current?.reject(new Error("error"));
							tokenResolverRef.current = null;
						},
					},
				);
			})
			.catch(() => {
				toast.error("Couldn't load the bot check. Please refresh the page.");
			});
		return () => {
			cancelled = true;
		};
	}, []);

	function fetchTurnstileToken(): Promise<string> {
		const widgetId = widgetIdRef.current;
		if (!widgetId || !window.turnstile) {
			return Promise.reject(new Error("widget_not_ready"));
		}
		return new Promise<string>((resolve, reject) => {
			const timeout = setTimeout(() => {
				tokenResolverRef.current = null;
				reject(new Error("timeout"));
			}, 30_000);
			tokenResolverRef.current = {
				resolve: (t) => {
					clearTimeout(timeout);
					resolve(t);
				},
				reject: (err) => {
					clearTimeout(timeout);
					reject(err);
				},
			};
			window.turnstile?.reset(widgetId);
			window.turnstile?.execute(widgetId);
		});
	}

	const canSubmit = !!email && !submitting && !submitted;

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!canSubmit) return;
		setSubmitting(true);
		try {
			let token: string;
			try {
				token = await fetchTurnstileToken();
			} catch {
				toast.error("Bot check failed. Please try again.");
				setSubmitting(false);
				return;
			}
			const res = await fetch("/api/waitlist", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, turnstileToken: token, source }),
			});
			const data = (await res.json().catch(() => ({}))) as {
				ok?: boolean;
				error?: string;
			};
			if (res.ok && data.ok) {
				toast.success("You're on the list! We'll be in touch.");
				setSubmitted(true);
				setEmail("");
			} else if (data.error === "invalid_email") {
				toast.error("That email doesn't look right. Mind checking it?");
			} else if (data.error === "bot_check_failed") {
				toast.error("Bot check failed. Please try again.");
			} else if (data.error === "rate_limited") {
				toast.error("Too many attempts. Try again in a minute.");
			} else {
				toast.error("Something went wrong. Please try again.");
			}
		} catch {
			toast.error("Network error. Please try again.");
		} finally {
			setSubmitting(false);
		}
	}

	if (!siteKey) {
		return (
			<div className="max-w-xl mx-auto text-zinc-500 text-sm">
				Waitlist is being configured. Check back shortly.
			</div>
		);
	}

	return (
		<form
			id={id}
			onSubmit={onSubmit}
			className="flex flex-col gap-4 items-center max-w-xl mx-auto"
		>
			<div className="flex flex-col sm:flex-row gap-4 w-full">
				<input
					type="email"
					required
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="you@example.com"
					disabled={submitting || submitted}
					className="flex-1 px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all disabled:opacity-60"
				/>
				<Button
					type="submit"
					variant="primary"
					size="lg"
					disabled={!canSubmit}
					isLoading={submitting}
					className="flex items-center gap-2 whitespace-nowrap px-8 py-4 text-lg"
				>
					<span>{submitted ? "You're in" : "Join Waitlist"}</span>
					{!submitted && <ArrowRight className="w-5 h-5" />}
				</Button>
			</div>
			<div ref={widgetContainerRef} aria-hidden="true" />
		</form>
	);
}
