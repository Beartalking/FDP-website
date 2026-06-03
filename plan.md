# FDP Website Implementation Plan

## Context

This plan outlines the implementation of a Fractional Design Partner (FDP) website for bearliu.com. The project starts from an empty directory and needs to be built from scratch based on a Figma design. The user needs to showcase their fractional design services with a professional, responsive website that works seamlessly on both desktop and mobile devices. The final product will be version-controlled with Git and hosted on Vercel.

**Figma Design**: https://www.figma.com/design/e01vMMOu7Blbu0WXvHpelZ/FDP---bearliu.com?node-id=51-119&t=e9Pg2OSfH4yyqa92-1

## Technology Stack

- **Framework**: Next.js 16.1.6 (React 19, App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Hosting**: Vercel
- **Version Control**: Git
- **Design Access**: Figma MCP (remote server)

---

## Phase 1: Figma MCP Setup ✅ COMPLETED

### Goal
Configure Figma MCP to access the design file and extract design specifications.

### Steps

1. **Add Figma Remote MCP Server**
   ```bash
   claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp
   ```
   - Use the remote MCP server (no local installation required)
   - Works with all Figma plans

2. **Authenticate with Figma**
   - Use `/mcp` command in Claude Code to authenticate
   - Log in to Figma account when prompted
   - Verify connection is established

3. **Access Design File**
   - Open the provided Figma URL
   - Extract design specifications:
     - Color palette and design tokens
     - Typography (fonts, sizes, weights)
     - Spacing system
     - Component structure
     - Layout breakpoints (desktop/mobile)
     - Assets (images, icons)

### Critical Files
- `~/.claude.json` or `.mcp.json` - MCP configuration

### Verification
- ✅ Successfully authenticate with Figma
- ✅ Can access and read the design file
- ✅ Design tokens are documented for implementation

### Design Tokens Extracted

**Colors:**
| Token | Hex |
|-------|-----|
| Accent Yellow | `#F2CC0D` / `#F8D74A` |
| Brown | `#A2845E` |
| Gray 900 | `#1C1C1E` |
| Gray 700 | `#4A4A4A` |
| Gray 500 | `#6F6F6F` |
| Gray 100 | `#F2F2F7` |
| Dark (card bg) | `#111317` |
| Gray 1 | `#333333` |
| Paper | `#FDFCF0` |

**Typography (SF Pro):**
| Style | Weight | Size | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| H2 | Semibold (590) | 28px | 36px | -0.6px |
| H3 | Semibold (590) | 22px | 30px | -1.4px |
| H4 | Semibold (590) | 18px | 26px | -0.8px |
| Body | Regular (400) | 16px | 24px | -0.8px |
| Body small | Regular (400) | 14px | 20px | -0.6px |
| Button | Semibold (590) | 14px | 20px | 0 |
| Label | Medium (510) | 12px | 16px | 0 |

**Page Sections Identified:**
1. Navigation header
2. Hero section (with background image)
3. Social proof / credentials badges
4. Pain points ("If you're stuck here, we should talk")
5. Strategy — Roadmap, Slack + Office Hours, Async delivery
6. Case studies — MovesMethod App MVP, Xero Guided Setup
7. Pricing — Product Audit ($600) and Fractional Partnership (from $4,000/mo)
8. CTA ("Book a 15-minute intro")
9. Footer with social links

---

## Phase 2: Project Initialization ✅ COMPLETED

### Goal
Create a new Next.js project with Tailwind CSS configured and ready for development.

### Steps

1. **Create Next.js Project**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
   ```
   - Use App Router (modern Next.js architecture)
   - Enable TypeScript for type safety
   - Include Tailwind CSS
   - Use project root as app directory
   - Configure import alias for cleaner imports

2. **Review and Configure**
   - Review generated `package.json`
   - Configure `tailwind.config.js` with custom design tokens from Figma
   - Set up `next.config.js` if needed for image optimization
   - Create `.env.local` for environment variables (if needed)

3. **Install Additional Dependencies**
   ```bash
   npm install
   ```
   - Verify all dependencies are installed
   - Consider additional packages as needed (e.g., `clsx` for conditional classes)

### Critical Files
- `package.json` - Project dependencies
- `tailwind.config.js` - Tailwind configuration with custom theme
- `next.config.js` - Next.js configuration
- `app/layout.tsx` - Root layout component
- `app/page.tsx` - Homepage component

### Verification
- ✅ `npm run dev` starts development server successfully
- ✅ Can access http://localhost:3000 (HTTP 200)
- ✅ Tailwind CSS v4 is working

---

## Phase 3: Website Implementation ✅ COMPLETED (desktop layout)

### Goal
Build the website based on the Figma design with pixel-perfect implementation for both desktop and mobile views.

### Steps

1. **Set Up Design System**
   - Extract colors, fonts, spacing from Figma
   - Configure in `tailwind.config.js` as custom theme tokens
   - Add custom fonts (if not using system fonts)
   - Create reusable utility classes

2. **Build Component Structure**
   - Analyze Figma design to identify components:
     - Header/Navigation
     - Hero section
     - Services/Features sections
     - About/Bio section
     - Portfolio/Case studies (if present)
     - Contact/CTA section
     - Footer
   - Create component files in `app/components/`

3. **Implement Responsive Layouts**
   - Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
   - Implement mobile-first approach
   - Ensure breakpoints match Figma design specifications
   - Test at common breakpoints:
     - Mobile: 375px, 414px
     - Tablet: 768px, 1024px
     - Desktop: 1440px, 1920px

4. **Add Interactivity**
   - Implement navigation menu (mobile hamburger if needed)
   - Add smooth scrolling for anchor links
   - Implement hover states and transitions
   - Add form validation (if contact form present)

5. **Optimize Assets**
   - Export images from Figma in appropriate formats
   - Use Next.js Image component for optimization
   - Implement lazy loading for images
   - Add alt text for accessibility

6. **SEO & Metadata**
   - Configure metadata in `app/layout.tsx`
   - Set up Open Graph tags
   - Add favicon and app icons
   - Create sitemap and robots.txt

### Critical Files
- `app/page.tsx` - Main homepage
- `app/components/*` - Reusable components
- `app/globals.css` - Global styles
- `tailwind.config.js` - Custom theme configuration
- `public/*` - Static assets (images, icons)

### Verification
- ✅ All 9 sections implemented (Nav, Hero, Social Proof, Pain Points, Strategy, Case Studies, Pricing, CTA, Footer)
- ✅ Assets downloaded from Figma and loaded correctly (25 images/SVGs)
- ✅ Design tokens configured in globals.css (Tailwind v4 @theme syntax)
- ✅ Inter font loaded via next/font/google
- ✅ `npm run build` passes with zero errors
- ✅ Dev server renders all content at http://localhost:3000
- ⏳ Desktop visual polish needed — minor spacing/positioning tweaks to match Figma pixel-perfect

### Status
Desktop layout complete. Proceeded to Phase 4.

---

## Phase 4: Responsive Conversion ✅ COMPLETED

### Goal
Convert the pixel-perfect desktop layout (960px) to work at mobile (375px), tablet (768px), and desktop (1024px+). Mobile-first flex/grid conversion.

**Breakpoints**: Default = mobile, `md:` = 768px, `lg:` = 1024px

### What was done

1. **Nav → client component** (`app/components/Nav.tsx`)
   - ✅ Extracted from page.tsx to `"use client"` component with `useState`
   - ✅ Hamburger menu visible below `lg:`, desktop links hidden below `lg:`
   - ✅ Mobile menu: full-width dropdown with animated hamburger icon

2. **All 9 sections converted from absolute → flex**
   - ✅ Hero: dual image (mobile portrait crop `mobile-hero.png`, desktop exact Figma crop via oversized div)
   - ✅ Social Proof: `flex-wrap` badges and logos, responsive padding
   - ✅ Pain Points: `flex-col lg:flex-row`, single column on mobile
   - ✅ Strategy: removed `h-[1426px]` + 13 absolute positions → three flex blocks with `aspect-ratio` images
   - ✅ Case Studies: `flex-col lg:flex-row`, Xero uses `flex-col-reverse`
   - ✅ Pricing: cards `flex-col lg:flex-row`, flex column card structure replaces absolute buttons
   - ✅ CTA: removed absolute centering → pure flex column
   - ✅ Footer: `flex-col md:flex-row`, responsive padding

3. **Visual fixes applied during responsive work**
   - ✅ Section rounded corners: `lg:rounded-*` only (no rounding on mobile for Hero, Strategy, Pricing)
   - ✅ Yellow substrate SVGs replaced with CSS `bg-accent-yellow-light rounded-xl` (fixed distorted corners from `preserveAspectRatio="none"`)
   - ✅ Pricing "Best for" substrates replaced with CSS backgrounds (`bg-[#e5e5ea]`, `bg-[#4a4a4a]`)
   - ✅ Touch targets: `h-[44px] lg:h-[40px]` on buttons
   - ✅ `overflow-x-hidden` on root to prevent mobile horizontal scroll

### Common patterns used
| Pattern | Classes |
|---------|---------|
| Section container | `w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 py-10 lg:py-[40px]` |
| Centered header | `max-w-[705px] mx-auto text-center` |
| Two-column | `flex flex-col lg:flex-row gap-6 lg:gap-8` |
| Reversed column | `flex flex-col-reverse lg:flex-row` |
| Responsive image | `relative w-full lg:w-[Xpx] aspect-[W/H] overflow-hidden` |
| Touch target | `h-[44px] lg:h-[40px]` |

### Files modified
- `app/page.tsx` — all 9 sections converted
- `app/components/Nav.tsx` — **new file**, client component with hamburger menu
- `public/images/mobile-hero.png` — **new file**, hand-cropped mobile hero image

---

## Phase 5: Git Version Control Setup ✅ COMPLETED

### Goal
Initialize Git repository and create proper version control foundation.

### What was done
- ✅ Git repo initialized, pushed to GitHub at `Beartalking/FDP-website`
- ✅ 7 commits on `main`, all pushed
- ✅ `.gitignore` includes node_modules, .next, .env*.local, .vercel

---

## Phase 6: Vercel Deployment ✅ COMPLETED

### Goal
Deploy the website to Vercel with automatic deployments from Git.

### What was done
- ✅ Vercel connected to GitHub repo with auto-deploy on push to `main`
- ✅ All pushes trigger automatic deployments
- ✅ Build passes cleanly (`npm run build` — zero errors)

---

## Phase 7: Polish & Links ✅ COMPLETED

### What was done

1. **Sticky nav with glassmorphism**
   - ✅ Nav sticks to top on scroll with `bg-white/80 backdrop-blur-md`
   - ✅ Transparent at page top, semi-transparent white + blur when scrolled
   - ✅ Fixed `overflow-x-hidden` on parent breaking sticky (moved to `body` in CSS)
   - ✅ Mobile menu also triggers glassmorphism background

2. **Real links wired up**
   - ✅ All "Book Intro" / "Book a 15-minute intro" CTAs → Calendly (`calendly.com/bearliu/15-mins-fdp-intro`)
   - ✅ "Check an example audit" → Notion sample audit page
   - ✅ "UX New Zealand Speaker" badge → uxnewzealand.com speaker profile
   - ✅ Footer LinkedIn → `linkedin.com/in/bearliu`
   - ✅ Footer X → `x.com/bearliu`
   - ✅ Footer email → `bear@beartalking.com` (was already correct)
   - ✅ All external links open in new tab (`target="_blank"`)

3. **Micro-interactions**
   - ✅ Trust logos: `hover:scale-110` with 200ms transition
   - ✅ Pricing cards: hover lift + shadow
   - ✅ Strategy images: hover zoom
   - ✅ Nav logo: hover scale + color change
   - ✅ Scroll-triggered reveal animations on all sections

### Current Status
**All phases complete. Website is live at bearliu.com.**

---

## Phase 8: Custom Domain ✅ COMPLETED

### What was done
- ✅ `bearliu.com` connected to Vercel deployment
- ✅ `www.bearliu.com` working (redirects or serves correctly)
- ✅ HTTPS / SSL certificate active
- ✅ Verified both domains load the site correctly

---

## Testing Checklist

### Visual
- [x] Design matches Figma specifications
- [x] Colors, fonts, spacing are accurate
- [x] Images and assets display correctly
- [x] Animations and transitions work smoothly

### Responsive
- [x] Mobile view (375px) renders correctly
- [x] Tablet view (768px) renders correctly
- [x] Desktop view (1440px+) renders correctly
- [x] No horizontal scrolling on mobile
- [x] Touch targets are appropriately sized

### Functionality
- [x] Navigation works on all devices (sticky + glassmorphism)
- [x] Links navigate correctly (all CTAs wired to real URLs)
- [x] Interactive elements respond to user input

### Accessibility
- [x] Semantic HTML landmarks (header, main, nav, footer)
- [x] Skip-to-content link for keyboard users
- [x] Focus-visible styles on all interactive elements
- [x] Correct heading hierarchy (no skipped levels)
- [x] aria-label on icon-only links
- [x] Lazy loading on below-fold images
- [ ] og:image for social sharing previews

### Performance
- [ ] Lighthouse score > 90 for Performance
- [x] Images are optimized
- [x] No console errors or warnings
- [x] Fast page load times

### Deployment
- [x] Git repository is set up correctly
- [x] Code is committed and pushed
- [x] Vercel deployment is successful
- [x] Live site is accessible
- [x] Automatic deployments work
- [x] Custom domain connected (bearliu.com + www.bearliu.com)

---

## Success Criteria

1. ✅ Figma MCP is configured and connected
2. ✅ Next.js project is initialized with Tailwind CSS
3. ✅ Website design matches Figma specifications
4. ✅ Responsive design works on desktop and mobile
5. ✅ Git repository is initialized and has commits
6. ✅ Website is deployed and live on Vercel
7. ✅ Automatic deployments are configured
8. ✅ Custom domain bearliu.com is live with HTTPS

---

## Phase 9: Accessibility Audit Fixes ✅ COMPLETED

### What was done
Used Playwright to audit bearliu.com across accessibility, SEO, performance, responsive, and semantics. Fixed all issues that don't require design/content input.

1. **Footer icon links** — Added `aria-label` to LinkedIn, X, Email links for screen readers
2. **`<main>` landmark** — Wrapped all content sections in `<main id="main-content">`
3. **Skip-to-content link** — Added visually hidden skip link in layout.tsx, styled in globals.css
4. **`:focus-visible` styles** — Added yellow outline ring for keyboard navigation
5. **Heading hierarchy** — Changed pain point H4 → H3 (was skipping H3 under H2)
6. **`<header>` wrapper** — Wrapped Nav component in semantic `<header>` element
7. **Lazy-load images** — Added `loading="lazy"` to 6 trust logo `<img>` tags

### Files modified
- `app/globals.css` — focus-visible + skip-link styles
- `app/layout.tsx` — skip-to-content link
- `app/page.tsx` — `<header>`, `<main>`, heading fix, aria-labels, lazy-load

### Still TODO (requires user input)
- [ ] Add `og:image` meta tag (needs an image asset — user is designing in Figma, two HTML drafts in `og-drafts/`)
- [ ] Investigate mobile layout collapse in Strategy + Case Studies sections (not yet checked)
- [x] ~~Lighthouse Performance score > 90~~ — reached 88, improved with WebP conversion; remaining gap is domain redirect (now fixed in Vercel)

---

## Phase 10: Branding & Content Updates ✅ COMPLETED

### What was done

1. **Branding rename** — Nav title "Fractional Design Partner" → "Bear Design", page title updated to "Bear Design — Fractional Design Partner"
2. **Hero availability** — "🟢 Accepting 2 new partners in Q1" → "Q1 fully booked · 1 spot open for Q2"
3. **Client testimonials** — Added Josh Fear testimonials (with avatar photo) to Social Proof section and Case Studies MovesMethod card; removed "Refreshing · Insightful · Efficient" tags from testimonial
4. **Nav layout fix** — `<header>` was missing `w-full`, causing nav to shrink inside `items-center` flex parent; nav now aligns with 960px content width matching hero image edges

### Files modified
- `app/components/Nav.tsx` — title text, layout fix
- `app/page.tsx` — testimonials, availability text, `<header>` w-full
- `app/layout.tsx` — metadata title update
- `public/images/josh-fear.jpg` — client avatar

---

## Phase 11: Performance & Accessibility Polish ✅ COMPLETED

### Lighthouse scores (post-optimization)
| Category | Score |
|----------|-------|
| Performance | 88 (up from ~75 pre-WebP) |
| Accessibility | 96 → expected 100 after contrast fix |
| Best Practices | 100 |
| SEO | 100 |

### What was done

1. **Hero images → WebP** — `hero-bg.jpeg` 3.5MB → 438KB WebP; `mobile-hero.png` 1.3MB → 39KB WebP
2. **Badge contrast fix** — Brown `#A2845E` (3.5:1) → `#7D6340` (5.6:1), passes WCAG AA
3. **Domain redirect fix** — Changed Vercel config: both `bearliu.com` and `www.bearliu.com` now connect to Production directly (no 307 redirect hop, saves ~790ms)

### Files modified
- `app/globals.css` — brown color token updated
- `app/page.tsx` — hero image paths to .webp
- `public/images/hero-bg.webp` — new file
- `public/images/mobile-hero.webp` — new file

---

## Phase 12: Multi-Page Expansion ✅ COMPLETED

### Goal
Grow the single landing page into a multi-route site: add a Podcast page and a full case-study page, with cross-page navigation.

### What was done

1. **Podcast page** (`app/podcast/page.tsx` + `app/data/episodes.ts`)
   - Episode list driven by `episodes.ts` data file, sorted newest-first
   - EP01 + EP02 (Felix Lee) with platform links: Spotify, Apple Podcasts, YouTube playlist, RedCircle
   - Page description and Show Info aligned with actual podcast metadata
   - `ScaledIframe.tsx` component for embedded players

2. **MovesMethod case study** (`app/case-study/movesmethod/page.tsx`)
   - Full case-study page with all assets
   - Fixed testimonial image paths to match actual filename casing

3. **Navigation**
   - Added Podcast link to Nav
   - Logo href set to `/` for cross-page navigation back to home

### Files added/modified
- `app/podcast/page.tsx` — **new**
- `app/data/episodes.ts` — **new**, episode data source
- `app/case-study/movesmethod/page.tsx` — **new**
- `app/components/ScaledIframe.tsx` — **new**
- `app/components/Nav.tsx` — Podcast link, logo href

---

## Phase 13: Vercel Analytics & Speed Insights ✅ COMPLETED

### Goal
Enable visitor/pageview tracking and real-user performance monitoring (Core Web Vitals).

### What was done
- Installed `@vercel/analytics` and `@vercel/speed-insights`
- Mounted `<Analytics />` + `<SpeedInsights />` in root `app/layout.tsx` (App Router → site-wide)
- `npm run build` passes clean (6 static routes)
- `.gitignore` cleanup: local working files (`screenshots/`, `temp/`, `reference/`, `logos/`, `lighthouse-report.json`, root logo PNGs, `.claude/`, stray `Icon` file) now ignored

### Remaining manual step (Vercel Dashboard)
- [ ] In Vercel project → **Analytics** tab → click **Enable** (the package only adds the beacon; the dashboard toggle starts collection)
- [ ] Speed Insights enables itself on first deploy with the package present; confirm data appears after visiting the site

---

## Next TODO

- [ ] **Enable Analytics in Vercel Dashboard** (manual toggle — see Phase 13)
- [ ] Add `og:image` — user designing in Figma (HTML drafts in `og-drafts/direction-a.html` and `direction-b.html`); `layout.tsx` openGraph still has no `image`
- [ ] Mobile layout audit — Strategy + Case Studies sections at 375px
- [ ] Re-run Lighthouse after Vercel redirect fix to confirm Performance > 90
- [ ] Consider Geist font switch (HTML preview was explored, user deferred decision)

---

# Phase 14: bearliu.com Hub Upgrade (Content Flywheel)

**Status:** IN PROGRESS. 14.0–14.2 done & live (2026-06-03). Email forwarding test confirmed working by Bear.

**RESUME HERE (next session):**
- 14.3 (Newsletter + Video) — ✅ DONE 2026-06-03 (lightweight links, not designed sections — those stay with Claude Design in 14.4). Added **Newsletter** (→ `https://en.bear.academy`) + **Video** (→ `https://www.youtube.com/@Bearliu`) to Nav (desktop gap-8→gap-6 to fit 7 links + mobile menu), and YouTube + Newsletter icons to both footers (homepage inline + shared `Footer.tsx`). New icons: `public/images/social/{youtube,newsletter}.svg`. **PENDING:** Bear is setting up a domain redirect for the newsletter; once done, swap `en.bear.academy` → the new domain (Bear will ping me). Build passes, 0 console errors.
- 14.4 (Framework library + homepage sections) — waiting on Claude Design's output (Bear driving, using DESIGN-SYSTEM.md).
- 14.5 (Obsidian sync script) + 14.6 (Bear Academy section) — optional, later.
- To re-port/add a teardown: `node scripts/port-teardown.mjs --report "<vault path>" --slug <slug> --date <YYYY-MM-DD> --tags "teardown,..."` then commit. Apple Health still excluded (incomplete).

## Context

Source: Bear's "Personal Strategy Recalibrate" sketch (30 May), top half. bearliu.com evolves from an FDP marketing site into a **business hub / brand / international-clients** aggregator. Six spokes off the hub:

- **Blog** (Pro insights) — flagship content = product teardown write-ups
- **Newsletter** (Report | Curation) — Substack, rebranded to bearliu.com (English)
- **Podcast** (Bear Academy) — currently the site shows "Design Founders"; converts to Bear Academy in the final phase
- **Video** (YouTube intro) — embed, not its own route
- **Framework** (Product teardown) — the 6-piece methodology library
- **Email** — hi@bearliu.com

Register: English, professional FDP voice (not the Chinese creator voice). Visual base stays consistent with the current site.

## Content sources (Obsidian — `Bear Vault/`)

- **Teardown reports** — `20_Projects/Product Teardown/N. <Name>/Teardown Report - <Name> (FDP).md`. 5 done: Linear, Arc, Dia, Raycast, Apple Health. Clean markdown (H1 + blockquote meta header + H2 lenses, ~3000 words), **no wikilinks/embeds/images** → trivial MDX port.
- **Frameworks** — `20_Projects/FDP/Methodology/*.md`. 6: Cognitive Budget Audit, Ecosystem Health Audit, Fit Audit, Habit Mortgage, Interaction Model Audit, Moving List. YAML frontmatter (`type, framework, related, cases`) + consistent sections, 350-560 words. Flywheel is pre-wired: frameworks list `cases:` (the teardowns), and teardown lenses are named after frameworks.

## Cadence & richness

Teardowns may reach **1 post/week**. Manual port is fine to start; the weekly cadence is what justifies the optional sync script later. Bear wants blog posts to feel richer than a static blog (HTML-drawn charts, light image motion) — so rendering uses **MDX** (markdown + embeddable components), not plain markdown. Visual richness should come from a **reusable component kit** (mismatch bar, before/after, metric callout, lens divider, scroll reveal), not bespoke per-post work, so weekly cadence stays feasible.

## Role split (IMPORTANT)

- **Design is owned by Claude Design, not by me.** I do NOT design the rich blog visual kit, framework cards, or homepage sections.
- **My deliverable to unblock Claude Design:** extract the existing site's Design System into an exportable doc (`DESIGN-SYSTEM.md`). Bear sends it to Claude Design as the basis.
- Claude Design designs Framework cards + homepage sections → delivers back → **I integrate/build**.
- Applying the *existing* design system to a clean reading layout (blog post typography) is not "new design" and is in my scope. New visual treatments are Claude Design's.

## Phased plan

### Phase 14.0 — Design System extraction (do first; unblocks Claude Design) ✅ DONE 2026-06-03
Produced `FDP website/DESIGN-SYSTEM.md` (exportable, code-grounded). Covers: colour tokens (brand yellow `#f2cc0d` / yellow-light `#f8d74a` / brown `#7D6340` / paper; neutrals gray-900/700/500/100/1, dark-card), typography (Inter; H2 28 / H3 22 / H4 18 / body 16 / body-sm 14 / button 14 / label 12), layout patterns (`max-w-[960px]` container, `px-5 md:px-8 lg:px-0`, touch targets `h-[44px] lg:h-[40px]`), radius, motion vocabulary (`.reveal` / `.stagger-item` / `.hero-fade-in`, reduced-motion handling), component inventory (Nav, buttons, cards, badges, pricing card, testimonial), a11y patterns (focus-visible, skip-link). Source: `app/globals.css` + patterns in `app/page.tsx`.

### Phase 14.1 — Blog MDX infra + teardown content ✅ DONE & PUBLISHED 2026-06-03 (commit 0d4cab0, live at bearliu.com/blog)
- Post-review polish: meta blockquote → clean `<ReportMeta>` labelled card (Author/For/Method; Thesis dropped as it's the excerpt); Nav wordmark "Bear Design" → "Bear Liu"; lead image gets `priority` for LCP. Bear approved publishing this base version without waiting for Claude Design's kit.
- MDX pipeline: `.mdx` files in `content/blog/`, rendered via `next-mdx-remote` v6 `compileMDX` + components map (`app/components/mdx/`). Future sync script just writes `.mdx`.
- Routes: `app/blog/page.tsx` (index, date- then teardown-number-sorted) + `app/blog/[slug]/page.tsx` (SSG, long-form reading layout on the existing design system). Data layer `app/lib/blog.ts`. Shared `app/components/Footer.tsx`. Nav gets a "Writing" link.
- **Porter script** `scripts/port-teardown.mjs` (Node + sharp): resolves Obsidian `![[img]]` embeds (incl. parent-folder 99_Assets), optimises PNG→WebP (≤1600px), pairs each image with its `*Fig N.*` caption into `<Figure>`, writes frontmatter + MDX. Seed of the Phase 14.5 sync script. Read-only on the vault.
- Ported 4 teardowns: Linear, Arc, Dia, Raycast (Apple Health excluded — incomplete per Bear). ~48 images → WebP in `public/blog/<slug>/`. `npm run build` passes, all 4 prerendered, dev verified 200 + visually checked.
- Rich chart/animation components: integrated **after** Claude Design delivers. 14.1 ships a clean, readable, on-brand version. Publish-public-now vs hold is Bear's call.
- **⚠ KNOWN ISSUE (matters for 14.4):** `next-mdx-remote` v6 on this stack (Next 16 / React 19 / Turbopack) **silently drops JSX expression attributes** (`width={1600}` → `undefined`); string attributes (`width="1600"`) survive. Worked around by emitting string attrs + coercing in `Figure`. Before Claude Design's chart components land, either keep their props as string attributes or fix the MDX pipeline (try a different MDX lib / native `@next/mdx`). Documented so it isn't rediscovered the hard way.
- Open: publish dates — all 4 set to 2026-06-03 (published as a batch); index sorts newest-teardown-first. Bear can adjust dates/order.

### Phase 14.2 — Email hi@bearliu.com ✅ DONE 2026-06-03
- Cloudflare Email Routing live: MX (route1/2/3.mx.cloudflare.net) + SPF + DKIM added to the Cloudflare zone via "Add missing records"; rule `hi@bearliu.com → bear@beartalking.com` Active. Web (Vercel A record) untouched. Verified via `dig @julio.ns.cloudflare.com`.
- Code: homepage `<title>`/OG → "Bear Liu, Fractional Design Partner"; site email (home + blog footers) → `hi@bearliu.com`.
- Bear still to research a send-from solution separately; when chosen, reconcile SPF/DKIM so forwarding + sending don't conflict.

Original plan notes below:
- **DNS confirmed (2026-06-03):** bearliu.com is registered at **Cloudflare Registrar**, so the DNS zone stays on Cloudflare nameservers (Cloudflare Registrar mandates this); the A/CNAME records were repointed to Vercel for web hosting. So the zone is Cloudflare-managed → **Email Routing is available with no DNS migration.**
- **Set up Cloudflare Email Routing** for `hi@bearliu.com` → forward to Bear's existing inbox. Email Routing adds MX (+ SPF TXT) records only; these don't touch the A/CNAME pointing web traffic at Vercel, so web and email coexist cleanly.
- Execution note: enabling Email Routing + verifying the destination address is a Cloudflare dashboard action (Cloudflare sends a confirmation link to the destination inbox — Bear clicks that). I can drive the record setup via Cloudflare API if Bear adds a scoped API token to `.env`, otherwise I provide exact dashboard steps. Destination verification is always Bear's click.
- Code: swap site email from `bear@beartalking.com` → `hi@bearliu.com` (footer + CTAs).
- Bear separately researches an economical **send-from** solution (out of my scope).
- Related (later, not this phase): bear.academy + bearwith.ai are also on Cloudflare — the sketch's bottom half wants bear.academy → forward to bearliu.com, bearwith.ai → forward to newsletter.bt.com.

### Phase 14.3 — Other sub-pages (non-design-heavy plumbing)
- Newsletter signup integration (Substack embed/link, English "Report | Curation").
- YouTube intro video embed (on home).
- (Podcast → Bear Academy conversion is NOT here — see final phase.)

### Phase 14.4 — Framework library + homepage sections (Claude Design → I integrate)
- Claude Design designs: Framework cards + `/frameworks` page + homepage sections (Newsletter CTA, Framework, Blog). I build/integrate.
- `/frameworks` index + `/frameworks/[slug]`, reuse Phase 14.1 MDX pipeline.
- Port 6 frameworks; wire framework ↔ teardown cross-links (the flywheel).
- Homepage: add Newsletter CTA section, Framework section, Blog section (small content updates to surface the spokes).

### Phase 14.5 — Obsidian → site sync script (OPTIONAL)
- For the weekly cadence: a small script reads vault MD, maps/adds frontmatter, writes `.mdx` + copies any assets into `content/`. Build only after the manual format + component kit are proven.

### Phase 14.6 — Bear Academy section (FINAL, OPTIONAL)
- Take down "Design Founders" branding/content on `/podcast` (currently `app/podcast/page.tsx` + the design-founders Apple link).
- Reuse its style/format to publish **Bear Academy** podcast content instead.

## Dependencies
- 14.0 blocks Claude Design, which blocks 14.4 integration.
- 14.1, 14.2, 14.3 can proceed in parallel while Claude Design works.
- 14.5 and 14.6 are optional and last.

## Open items to confirm at execution time
- ~~Where bearliu.com DNS is managed~~ — RESOLVED 2026-06-03: Cloudflare Registrar + Cloudflare zone, web records point to Vercel. Email Routing works without migration.
- For 14.2: whether Bear adds a scoped Cloudflare API token to `.env` (lets me set records programmatically) or wants exact dashboard steps to click himself.
- Whether to publish the blog publicly before Claude Design's rich visual layer lands, or hold.
