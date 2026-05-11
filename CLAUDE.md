# Forge Website

Pre-launch marketing site for **viralclips.ai**. React 19 + Vite SPA deployed on Vercel. No backend dependency on the app or API — this is the public marketing surface.

## Related Repositories

| Repo | Path | Role |
|------|------|------|
| **forge-frontend** | `../forge-frontend` | Auth-gated React app at `app.viralclips.ai`. Not consumed from here. |
| **forge-nestjs** | `../forge-nestjs` | API for the authenticated app. Not consumed from here. |
| **forge-infra** | `../forge-infra` | Terraform IaC for the app's AWS deployment. This site is on Vercel, not AWS. |

The waitlist endpoint that this site uses (`/api/waitlist`) lives **here**, not in `forge-nestjs`, so the auth-gated API stays free of public marketing concerns.

## Tech Stack

- **React 19** + TypeScript + Vite
- **Tailwind CSS v4** + Radix UI primitives
- **React Router v7**
- **sonner** for toasts (mounted once in `src/App.tsx`)
- **Biome** for lint/format
- **googleapis** (server-only, for the waitlist function)

## Deployment

- Hosted on **Vercel** with auto-deploy on push to `main`.
- `vercel.json` rewrites all non-`/api` paths to `/index.html` for SPA routing.
- Any file at `api/*.ts` becomes a Vercel **Node serverless function** automatically. No separate deploy step.

## Waitlist (`api/waitlist.ts`)

Accepts `POST { email, turnstileToken, source? }`, verifies the Cloudflare Turnstile token, appends `[timestamp, email, source]` to a Google Sheet via service account. Idempotent on email (silently succeeds for duplicates). Light in-process IP rate limit as defense-in-depth; Turnstile is the real bot protection.

The sheet is owned by the project maintainer's personal Google account; the service account is granted Editor access on the sheet.

Required env vars (see `.env.example`):

| Var | Where |
|---|---|
| `VITE_TURNSTILE_SITE_KEY` | client + server |
| `TURNSTILE_SECRET_KEY` | server only |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | server only |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | server only (literal `\n` is unescaped at runtime) |
| `GOOGLE_SHEET_ID` | server only |

Never give the server-only vars a `VITE_` prefix — Vite would leak them into the client bundle.

## Local Dev

```bash
pnpm install
cp .env.example .env
# fill in Turnstile test keys (1x000…AA) and Google credentials
vercel dev      # NOT pnpm dev — vercel dev runs the API function alongside Vite
```

Turnstile test keys (always pass, only valid in dev):

- site key: `1x00000000000000000000AA`
- secret key: `1x0000000000000000000000000000000AA`

## Key Files

- `src/pages/Landing.tsx` — landing page; the hero hosts the waitlist form
- `src/components/landing/WaitlistForm.tsx` — email + Turnstile widget, POSTs to `/api/waitlist`
- `src/components/ui/sonner.tsx` — toaster wrapper (mounted in `App.tsx`)
- `src/App.tsx` — router + global toaster
- `api/waitlist.ts` — Vercel serverless function (Turnstile verify + Sheets append)
- `vercel.json` — SPA rewrite (scoped to exclude `/api/*`)
- `tsconfig.api.json` — Node-typed TS config for the `api/` directory

## Environment Variables

`.env` is for local dev only. Production env vars live in the Vercel project settings (Dashboard → Environment Variables, or `vercel env add` via CLI). Both lockfiles (`pnpm-lock.yaml`, `package-lock.json`) are currently checked in; pnpm is the primary tool.
