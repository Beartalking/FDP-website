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

### Current Status — RESUME HERE
**All code work is done. The only remaining step is connecting a custom domain.**

---

## Phase 8: Custom Domain (TODO)

### Goal
Connect bearliu.com (or chosen domain) to the Vercel deployment.

### Steps

1. **In Vercel Dashboard**
   - Go to Project → Settings → Domains
   - Add your custom domain (e.g., `bearliu.com`)
   - Vercel will show the required DNS records

2. **At Domain Registrar**
   - Add an `A` record pointing to `76.76.21.21` (Vercel's IP)
   - Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`
   - Or: change nameservers to Vercel's nameservers for automatic DNS

3. **Wait for DNS Propagation**
   - Usually 5–30 minutes, can take up to 48 hours
   - Vercel will automatically provision an SSL certificate

### Verification
- Custom domain loads the site with HTTPS
- `www` subdomain redirects correctly
- SSL certificate is valid

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
- [ ] Custom domain connected

---

## Success Criteria

1. ✅ Figma MCP is configured and connected
2. ✅ Next.js project is initialized with Tailwind CSS
3. ✅ Website design matches Figma specifications
4. ✅ Responsive design works on desktop and mobile
5. ✅ Git repository is initialized and has commits
6. ✅ Website is deployed and live on Vercel
7. ✅ Automatic deployments are configured

---

## Next Steps After Deployment

- Monitor website performance and analytics
- Iterate on design based on user feedback
- Add additional features as needed
- Keep dependencies updated
- Consider adding a CMS for content management (if needed)
