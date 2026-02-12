# FDP Website — Fractional Design Partner

A single-page marketing website for Bear Liu's Fractional Design Partner service.

**Live site**: Deployed on Vercel (auto-deploys on push to `main`)
**Repo**: [github.com/Beartalking/FDP-website](https://github.com/Beartalking/FDP-website)

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router, React 19, Turbopack)
- **Styling**: Tailwind CSS v4 (uses `@theme inline` in `globals.css`, no `tailwind.config.js`)
- **Font**: Inter (loaded via `next/font/google`)
- **Hosting**: Vercel (connected to GitHub, auto-deploys on push)
- **Design**: [Figma file](https://www.figma.com/design/e01vMMOu7Blbu0WXvHpelZ/FDP---bearliu.com?node-id=51-119)

## Project Structure

```
app/
  layout.tsx          # Root layout (Inter font, metadata)
  page.tsx            # All 9 sections of the site
  globals.css         # Tailwind v4 theme tokens + animations
  icon.svg            # Favicon
  components/
    Nav.tsx            # Sticky nav with glassmorphism (client component)
    ScrollReveal.tsx   # Scroll-triggered reveal animation wrapper
public/
  images/
    hero-bg.jpeg       # Desktop hero background
    mobile-hero.png    # Mobile hero (portrait crop)
    avatar.svg         # Bear's avatar in nav
    strategy/          # Roadmap, Slack, Loom screenshots
    case-studies/      # MovesMethod, Xero screenshots
    trust-logos/       # Xero, UXNZ, Fisher & Paykel, etc.
    social/            # LinkedIn, X, email icons
    substrates/        # Decorative background elements
plan.md               # Full implementation plan with progress
```

## Page Sections

1. **Navigation** — Sticky glassmorphism nav, hamburger on mobile, "Book Intro" CTA
2. **Hero** — Conference photo background, headline, CTA button
3. **Social Proof** — Credentials badges, trust logos (Xero, UXNZ, Fisher & Paykel, etc.)
4. **Pain Points** — 5 cards: "If you're stuck here, we should talk"
5. **Strategy** — Roadmap, Slack + Office Hours, Async delivery
6. **Case Studies** — MovesMethod App MVP, Xero Guided Setup
7. **Pricing** — Product Audit ($600) and Fractional Partnership (from $4,000/mo)
8. **CTA** — "Book a 15-minute intro" with Calendly link
9. **Footer** — Copyright, LinkedIn, X, email

## Key Links (wired in the site)

| What | URL |
|------|-----|
| Book Intro CTA | https://calendly.com/bearliu/15-mins-fdp-intro |
| Sample Audit | https://www.notion.so/bearliu/Sample-Product-Audit-2e301940987e801abc0de8ded40f12f7 |
| UX NZ Speaker | https://www.uxnewzealand.com/past-speakers/bear-liu-a |
| LinkedIn | https://www.linkedin.com/in/bearliu/ |
| X (Twitter) | https://x.com/bearliu |
| Email | bear@beartalking.com |

## How to Develop

```bash
cd "FDP website"
npm install        # First time only
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build (run before pushing to verify)
```

## How to Update & Deploy

1. Open terminal, navigate to `/Users/bearliu/Desktop/ClaudeCode`
2. Run `claude` to start Claude Code
3. Describe what you want to change (e.g., "Update the pricing to $900 on the FDP website")
4. Review the changes, then say "commit and push" — Vercel auto-deploys

Or manually:
```bash
cd "FDP website"
# make your edits
git add <files>
git commit -m "Description of change"
git push origin main
# Vercel deploys automatically within ~30 seconds
```

## Remaining TODO

- [ ] **Connect custom domain** — In Vercel dashboard: Settings > Domains. Then add DNS records at your registrar (`A` record > `76.76.21.21`, `CNAME www` > `cname.vercel-dns.com`)

## Design Tokens

Defined in `app/globals.css` under `@theme inline`:

| Token | Value |
|-------|-------|
| Accent Yellow | `#F2CC0D` / `#F8D74A` (light) |
| Brown | `#A2845E` |
| Gray 900 | `#1C1C1E` |
| Gray 700 | `#4A4A4A` |
| Gray 500 | `#6F6F6F` |
| Gray 100 | `#F2F2F7` |
| Dark Card | `#111317` |
| Paper | `#FDFCF0` |

## Key Technical Decisions

- **Tailwind v4**: Theme tokens live in `globals.css` with `@theme inline` (not a config file)
- **Sticky nav**: Uses a full-width outer `<div>` wrapper; `overflow-x-hidden` is on `<body>` (not on any parent div) to avoid breaking `position: sticky`
- **All external links**: Open in new tab with `target="_blank" rel="noopener noreferrer"`
- **Responsive breakpoints**: Default = mobile, `md:` = 768px, `lg:` = 1024px
- **Directory name has a space**: Always quote the path as `"FDP website"` in terminal commands
