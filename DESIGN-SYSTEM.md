# bearliu.com — Design System

Extracted from the live codebase (Next.js 16 + Tailwind CSS v4) on 2026-06-03. This is the single source of truth for designing new pages (Blog, Frameworks, homepage sections) so they stay visually consistent with the existing site.

Source files: `app/globals.css` (tokens + motion), `app/page.tsx` (component patterns), `app/components/*`, `app/layout.tsx` (font + metadata).

Everything here is **real, in-use** values pulled from the code, not aspirational. When designing new surfaces, reuse these tokens and patterns; only introduce new values when a pattern genuinely doesn't exist yet.

---

## 1. Brand character

A clean, professional product-design consultancy site with a few **signature warm/confident motifs** that keep it from feeling generic:

- **Yellow highlight headings** — section titles sit inside a soft-yellow rounded box, like a marker swipe. This is the strongest brand signal.
- **Neo-brutalist hero headline** — bold black border + hard offset drop-shadow.
- **Brown pills** — small earthy tags for credentials, categories, and micro-labels.
- **Frosted glass** — semi-transparent white blur panels over imagery.
- **Duotone pricing** — a light card paired with a dark `#111317` card using paper + yellow accents.

Tone: confident, calm, premium, founder-to-founder. Not flashy, not corporate-sterile.

---

## 2. Colour tokens

Defined in `globals.css` under `@theme inline` (Tailwind v4). Use the token name (e.g. `bg-brown`, `text-gray-700`).

| Token | Hex | Role |
|---|---|---|
| `background` | `#ffffff` | Page background |
| `foreground` | `#1c1c1e` | Default text |
| `accent-yellow` | `#f2cc0d` | Primary CTA buttons, focus ring, selected state |
| `accent-yellow-light` | `#f8d74a` | Highlight behind headings, secondary CTA, dark-card accents |
| `brown` | `#7D6340` | Pills, tags, icon colour. **Darkened from `#A2845E` to pass WCAG AA (5.6:1) — do not revert.** |
| `paper` | `#fdfcf0` | Off-white text on dark card |
| `gray-900` | `#1c1c1e` | Headings, primary text |
| `gray-700` | `#4a4a4a` | Body text, secondary |
| `gray-500` | `#6f6f6f` | Muted text, captions, footer |
| `gray-100` | `#f2f2f7` | Section dividers, light panel backgrounds |
| `gray-1` | `#333333` | Dark button background |
| `dark-card` | `#111317` | Dark pricing card background |

Ad-hoc neutrals also in use (consider folding into tokens if reused): `#fafafa` (card fill), `#e5e5ea` (card border / best-for substrate), `#dddfe3` (pricing card border), `#f3f4f6` (pricing section bg), `#bebebe` (hero bottom border), `#0a0a0a`/`#1c190d` (near-black button text).

---

## 3. Typography

**Typeface:** Inter, loaded via `next/font/google` (weights subset latin, `display: swap`), CSS var `--font-inter`. Fallback stack: `ui-sans-serif, -apple-system, BlinkMacSystemFont, "SF Pro", "Segoe UI", Roboto, sans-serif`. Antialiased.

**Defining trait: tight negative letter-spacing.** Display and body text run on negative tracking; only uppercase eyebrows use positive tracking. Keep this — it's part of the feel.

| Role | Size | Weight | Line-height | Letter-spacing | Notes |
|---|---|---|---|---|---|
| Hero H1 | 32px → 48px (lg) | 600 | 40px → 56px | -1.4px | Display only, in the hero box |
| H2 (section title) | 28px | 600 | 36px | -0.6px | Usually in the yellow highlight box |
| H3 / large | 22px | 600 | 30px | -1.4px | Case-study titles, pricing titles, "What you'll notice" |
| H4 / sub | 18px | 600 | 26px | -0.8px | Feature titles, pain-point titles, Challenge/Impact |
| Body | 16px | 400 | 24px | -0.8px | Default paragraph |
| Body small | 14px | 400 | 20px | -0.6px | Descriptions, captions in cards |
| Button | 14px | 600 | 20px | 0 | All buttons |
| Label / pill | 12px | 500 | 16px | 0 | Pills, badges, meta |
| Eyebrow | 14px | 400 | — | +0.7px | UPPERCASE, e.g. "One-time" / "ONGOING" |

Token sizes live in `globals.css` (`--font-size-h2: 28px` etc.). Note: the 18px size maps to the `h4` token but is sometimes rendered in `<h3>` tags — go by visual size, not the tag.

---

## 4. Layout & spacing

- **Content max-width:** `960px`, centred (`max-w-[960px] mx-auto`). Every section obeys this. New pages should too.
- **Centred text columns inside sections:** ~`676–705px` max-width for headers and intros.
- **Horizontal padding:** `px-5 md:px-8 lg:px-0` (20px mobile / 32px tablet / 0 desktop, since the 960px container handles desktop gutters). Padded panel sections override desktop with `lg:px-[32px]`, `lg:px-[48px]`, or `lg:px-[52px]`.
- **Vertical section rhythm:** `py-10 lg:py-[40px]` (40px). Consistent across sections.
- **Breakpoints:** mobile-first. `md:` = 768px (tablet), `lg:` = 1024px (the primary desktop switch — most layout changes happen here, not at md).
- **Common gaps:** `gap-3` / `gap-4` / `gap-6` / `gap-8`; card grids `gap-6 lg:gap-[32px]`.
- **Two-column pattern:** `flex flex-col lg:flex-row gap-6 lg:gap-8` (and `flex-col-reverse` when image should lead on mobile).

---

## 5. Radius scale

| Token | Px | Used on |
|---|---|---|
| `rounded-[4px]` | 4 | Small inset images, focus ring |
| `rounded-lg` | 8 | Buttons, pills, brown tags |
| `rounded-[10px]` | 10 | Some full-width buttons |
| `rounded-xl` | 12 | Yellow highlight headings, image containers, panels |
| `rounded-2xl` | 16 | Cards, hero H1, frosted subtext box |
| `rounded-[16px]` | 16 | Hero section container (desktop) |
| `rounded-[20px]` / `rounded-full` | 20 / full | Avatars |

---

## 6. Elevation / shadows

| Purpose | Value |
|---|---|
| Hero H1 hard offset (signature) | `shadow-[4px_4px_0px_0px_#1c1c1e]` |
| Image, soft | `shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]` |
| Image, layered (floating inset) | `shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08),0px_8px_16px_0px_rgba(0,0,0,0.06)]` |
| Card hover (light) | `shadow-[0_8px_24px_rgba(0,0,0,0.08)]` |
| Card hover (dark) | `shadow-[0_8px_24px_rgba(242,204,13,0.12)]` (yellow-tinted) |
| Buttons hover | Tailwind `shadow-lg` |

Borders in use: `border-gray-100` (dividers), `border-[#e5e5ea]` (testimonial/quote cards), `border-[#dddfe3]` (pricing card), `border-[2.5px] border-gray-900` (hero H1), `border-2 border-accent-yellow` (selected state).

---

## 7. Buttons

All buttons: height `h-[44px] lg:h-[40px]` (44px mobile touch target → 40px desktop), `text-[14px] font-semibold`, centred flex, `transition-all duration-200`.

| Variant | Classes | Use |
|---|---|---|
| **Primary (yellow)** | `bg-accent-yellow text-[#0a0a0a] rounded-lg` · hover `scale-[1.02] shadow-lg brightness-95` | Main CTA ("Book your intro") |
| **Yellow-light** | `bg-accent-yellow-light text-gray-900 rounded-[10px]` · hover `brightness-95 scale-[1.02] shadow-lg` | Section CTAs (Book intro) |
| **Dark** | `bg-gray-1 text-white rounded-[10px]` · hover `bg-gray-700 scale-[1.02] shadow-lg` | Secondary ("Check an example audit") |
| **Text link** | `inline-flex items-center gap-2 text-[14px] font-semibold text-gray-900` · hover `text-accent-yellow` + arrow `translate-x-1` | "View Full Case Study" |

---

## 8. Recurring components & patterns

These are inline in `page.tsx` today (not yet extracted into reusable components). Designs for new pages should match them.

- **Yellow highlight heading (signature):** `inline-block bg-accent-yellow-light rounded-xl text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]`. Most section H2s use this.
- **Brown pill / tag:** `rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white whitespace-nowrap`. Credentials, categories, micro-labels.
- **Hero headline box (neo-brutalist):** white bg, `rounded-2xl border-[2.5px] border-gray-900 shadow-[4px_4px_0px_0px_#1c1c1e]`, large semibold text.
- **Frosted panel:** `rounded-xl bg-white/60 backdrop-blur-[5px] px-[10px] py-1`. Over imagery (hero subtext, availability chip).
- **Testimonial / quote card:** `rounded-2xl border border-[#e5e5ea] bg-[#fafafa] px-6 lg:px-8 py-6`; large brown opening quote glyph; avatar `w-9 h-9 rounded-full`; name 14px semibold + role 12px gray-500.
- **Pricing card (light):** `rounded-2xl border border-[#dddfe3] bg-white`, hover `-translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-[#c0c0c4]`. Eyebrow → title 22px → price 22px → desc → check-list → "Best for" substrate → footer CTA.
- **Pricing card (dark):** same structure on `bg-dark-card`, white/`text-paper` text, `accent-yellow-light` eyebrow, yellow-tinted hover shadow.
- **Check-list row:** `flex gap-2 items-start` + `IconCheck` (16px) + 14px text.
- **"Best for" substrate:** small note on a tinted block — `bg-[#e5e5ea]` (light) / `bg-[#4a4a4a]` (dark), `rounded-lg px-[8px] py-[10px] text-[14px]`.
- **Icon + text feature row:** brown icon (18px) in a fixed-width span + title (18px) + optional brown pill + description (14px gray-700).

---

## 9. Iconography

- **Style:** inline SVG, [Lucide](https://lucide.dev)-style line icons. `viewBox 0 0 24 24`, `fill none`, `stroke currentColor`, `strokeWidth 2`, round caps/joins. Rendered at **18×18**, coloured `text-brown` for feature/pain-point icons.
- **Check icon:** 16×16, `strokeWidth 2.5`, circle-check, inherits text colour.
- **Chevron/arrow:** 16×16, `strokeWidth 2`, animates `translate-x-1` on hover.
- Keep new icons in this line-style family (Lucide is the safe source).

---

## 10. Motion & interaction

Defined in `globals.css` + `ScrollReveal.tsx`. **All motion is gated behind `prefers-reduced-motion: reduce`** (which disables transforms/animations). Honour this in any new motion.

- **Scroll reveal** (`<ScrollReveal>` wrapper, IntersectionObserver `threshold 0.15`, `rootMargin 0 0 -40px 0`): element starts `opacity 0` + `translateY(20px)` → `.visible` transitions to full over `0.6s ease-out`. One-shot (unobserves after).
- **Stagger children** (`reveal-stagger` > `.stagger-item`): each item `translateY(16px)` → 0, `0.5s`, delay `calc(var(--stagger-index) * 100ms)`. Set `--stagger-index` inline per child.
- **Hero load** (`.hero-fade-in`): `heroFadeIn 0.7s ease-out forwards`, children staggered at 0.15 / 0.3 / 0.45s.
- **Hover vocabulary:**
  - Buttons: `scale-[1.02]` + `brightness-95` + `shadow-lg`
  - Cards: `-translate-y-1` + shadow grow
  - Images (in `group`): `group-hover:scale-105`, `duration-300`
  - Trust logos: `scale-110`, `duration-200`
  - Nav links: animated underline growing from left (`after:w-0 → hover:after:w-full`)
  - Nav logo: `scale-110`
- **Durations:** 200ms (interactive feedback), 300ms (cards/images), 600ms (reveals).

---

## 11. Navigation

`Nav.tsx` — `"use client"`, sticky.

- **Sticky glassmorphism:** `sticky top-0 z-50`; transparent at page top → on scroll (`scrollY > 10`) or mobile-menu-open becomes `bg-white/80 backdrop-blur-md border-b border-gray-100`. `transition-all duration-300`.
- **Bar height:** 80px. Container `max-w-[960px] mx-auto px-5 md:px-8 lg:px-0`.
- **Brand lockup:** avatar `size-8 rounded-[20px]` (hover `scale-110`) + wordmark **"Bear Design"** 16px `tracking-[-0.8px]` gray-700 (hover gray-900). *(Note: wordmark is currently "Bear Design"; the hub rebrand may revisit this — flag, don't assume.)*
- **Desktop links:** gap-8, `text-gray-500` hover gray-900 with animated underline, then a primary "Book Intro" button.
- **Mobile:** animated hamburger (morphs to X) → full-width vertical dropdown.

New top-level sections (Blog, Frameworks, Newsletter) will need nav entries — design how the nav scales when link count grows.

---

## 12. Accessibility (must preserve)

- **Focus ring:** `:focus-visible` → `2px solid accent-yellow`, `outline-offset 2px`, `radius 4px`.
- **Skip-to-content** link (visually hidden, appears on focus) → `#main-content`.
- **Touch targets:** 44px min on mobile (`h-[44px] lg:h-[40px]`).
- **Semantic landmarks:** `header` / `nav` / `main#main-content` / `footer`; correct heading hierarchy (no skipped levels).
- **Icon-only links** get `aria-label`; decorative imagery `aria-hidden` / empty alt.
- **Below-fold images** `loading="lazy"`.
- **Reduced motion** fully handled.
- Current Lighthouse: Performance 88, Accessibility 96, Best Practices 100, SEO 100. Don't regress.

---

## 13. Existing reusable components

| Component | Purpose |
|---|---|
| `Nav.tsx` | Sticky glassmorphic top nav (client) |
| `ScrollReveal.tsx` | Wrapper that fades/slides children in on scroll; `stagger` prop for staggered children |
| `ScaledIframe.tsx` | Responsive scaled iframe embed (used for device-frame previews); `selected` state with yellow border + badge |

Existing routes: `/` (home), `/podcast`, `/case-study/movesmethod`.

---

## 14. Notes for the new surfaces (Blog, Frameworks, homepage sections)

What to **reuse** (keep brand consistent):
- 960px container, section rhythm, the type scale + negative tracking, colour tokens.
- Yellow highlight headings for section titles; brown pills for tags/categories.
- Card patterns (border + soft hover lift), soft image shadows, the motion vocabulary.
- Inter, Lucide-style icons, the focus/skip-link/touch-target a11y baseline.

What's **open for new design** (Claude Design's brief):
- **Blog post reading layout** — long-form (≈3000-word essays) typography, plus a kit of richer in-article visual components (e.g. a metric callout, before/after, a comparison bar, lens dividers) that feel on-brand but go beyond static text. These should be reusable across teardown posts so weekly publishing stays fast.
- **Framework cards** — a card treatment for the 6-piece methodology library, and a framework detail layout.
- **Homepage hub sections** — new sections/CTAs surfacing Blog, Frameworks, and Newsletter so the homepage reads as a hub, not just a single FDP pitch.
- **Blog/Framework index** layouts (list, sorting, eventual tags).

Tech context for handoff: Tailwind CSS v4 (`@theme inline` tokens — no `tailwind.config.js`), Next.js App Router, content will render via MDX so in-article React components are possible.
