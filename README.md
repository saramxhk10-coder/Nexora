# NexoraAI Website — Rebuild

Next.js + Tailwind rebuild of the NexoraAI marketing site, built from the
audit and PRD in this project. See `NexoraAI_Website_PRD.md` and
`NexoraAI_Homepage_Copy.md` for the full brief this was built against.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Easiest path: push this folder to a GitHub repo, then import it in
Vercel (vercel.com/new) — it auto-detects Next.js, no config needed.
Once deployed, point your nexoraia.store domain at the Vercel project
(Vercel's dashboard walks through the DNS records to add).

Netlify works too, with their Next.js runtime — but Vercel is the simpler
path since Next.js is a Vercel project.

## What's built

All 12 homepage sections, plus /terms and /privacy pages:

Header, Hero, Trust Bar, Live Walkthrough, The Challenge, How It Works, What
We Do, Command Center, Why Choose Us, Proof, Offer, About, Final CTA, Footer.

Real assets used throughout (your actual demo video frames), no stock
mockups. Self-hosted fonts (Bricolage Grotesque + IBM Plex Sans) — no
external font requests at runtime. Server-rendered, so it's crawlable
(fixes the original site's empty-body-on-fetch SEO issue).

## Outstanding before this goes live

1. About section copy (components/About.tsx) — still has a visible
   placeholder. Replace with 2-3 real lines about who's behind NexoraAI.
2. Terms of Service / Privacy Policy (app/terms, app/privacy) — drafted
   as real starting content, but flagged in-page as needing actual legal
   review before publishing, especially given the WhatsApp Business API and
   UAE PDPL angle.
3. Contact number — still shows the current PK number
   (+923002502926) in the footer and final CTA's WhatsApp link. Swap for a
   UAE number if/when one exists (search 923002502926 across components/
   to find every instance).
4. Brand hex codes — currently using a placeholder violet
   (#7C5CFF) and near-black (#14101C) tuned to match the current site's
   palette. Update app/globals.css :root values if your co-founder's real
   hex codes differ.
5. Lead-capture form/webhook — the CTAs currently link to a WhatsApp
   chat link or #contact anchor. If you want an actual on-site form, that's
   a small additional build (needs to know where leads should land - email,
   sheet, CRM).
6. Command Center real screenshot — currently a real structured-data card
   built from your demo video's actual data. If a real CRM/lead-sheet view
   exists later, this section is the natural place to swap it in.

## Security checklist status (from the PRD)

Handled in this build: no secrets in the repo, static/server-rendered pages
(no client-side data leakage), semantic HTML with keyboard focus states.
Still needed once a real backend/form exists: environment variables for any
API keys, rate limiting on the form endpoint, and legal review on the
disclosure pages above. Nothing in this build touches auth, admin routes, or
a database — those only become relevant if/when a client portal or admin
dashboard gets built separately.
