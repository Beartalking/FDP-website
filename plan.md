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

### Current Status — RESUME HERE
**Next step: Fix desktop visual details before moving to Phase 4 (responsive).**

Compare the live site against the Figma design (node 51:119, fileKey e01vMMOu7Blbu0WXvHpelZ) and fix:
- Substrate highlight positioning/sizing
- Section spacing and padding
- Image cropping/positioning (especially Strategy section)
- Hero background image framing
- Any font weight/tracking differences
- Any other visual discrepancies

After desktop is pixel-perfect, proceed to Phase 4 for responsive breakpoints.

---

## Phase 4: Responsive Testing

### Goal
Thoroughly test the website on desktop and mobile viewports to ensure consistent experience.

### Steps

1. **Desktop Testing**
   - Test at 1440px (standard desktop)
   - Test at 1920px (large desktop)
   - Verify layout doesn't break at wide viewports
   - Check text readability and spacing
   - Test all interactive elements

2. **Mobile Testing**
   - Test at 375px (iPhone SE/small phones)
   - Test at 414px (iPhone Pro/standard phones)
   - Verify touch targets are appropriately sized (min 44x44px)
   - Test navigation menu functionality
   - Ensure no horizontal scrolling
   - Check font sizes are readable on small screens

3. **Tablet Testing**
   - Test at 768px (iPad portrait)
   - Test at 1024px (iPad landscape)
   - Verify layout transitions smoothly between breakpoints

4. **Cross-Browser Testing**
   - Test in Chrome (primary)
   - Test in Safari (especially on mobile)
   - Test in Firefox
   - Verify consistent rendering

5. **Performance Testing**
   - Run Lighthouse audit
   - Check page load times
   - Verify images are optimized
   - Ensure good Core Web Vitals scores

### Verification Tools
- Browser DevTools responsive mode
- Lighthouse performance audit
- Manual testing at different viewport sizes
- Check for layout shifts and performance issues

---

## Phase 5: Git Version Control Setup

### Goal
Initialize Git repository and create proper version control foundation.

### Steps

1. **Initialize Git Repository**
   ```bash
   git init
   ```

2. **Create .gitignore**
   - Ensure Next.js defaults are included:
     ```
     node_modules/
     .next/
     .env*.local
     .vercel
     out/
     ```

3. **Make Initial Commit**
   ```bash
   git add .
   git commit -m "Initial commit: FDP website setup with Next.js and Tailwind CSS"
   ```

4. **Create GitHub Repository** (recommended)
   - Create new repository on GitHub
   - Link local repository:
     ```bash
     git remote add origin <repository-url>
     git branch -M main
     git push -u origin main
     ```

### Critical Files
- `.gitignore` - Files to exclude from version control
- `.git/` - Git repository data

### Verification
- `git status` shows clean working tree
- `git log` shows initial commit
- Remote repository is connected (if using GitHub)

---

## Phase 6: Vercel Deployment

### Goal
Deploy the website to Vercel with automatic deployments from Git.

### Steps

1. **Prepare for Deployment**
   - Ensure `package.json` has correct build script
   - Test production build locally:
     ```bash
     npm run build
     npm run start
     ```
   - Verify build completes without errors

2. **Deploy to Vercel**

   **Option A: Using Vercel CLI**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

   **Option B: Using Vercel Dashboard**
   - Visit https://vercel.com
   - Click "Add New" → "Project"
   - Import Git repository (if using GitHub)
   - Configure project settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Configure Custom Domain** (optional)
   - Add custom domain in Vercel dashboard
   - Update DNS records at domain registrar
   - Wait for DNS propagation

4. **Set Up Automatic Deployments**
   - Connect Vercel to Git repository
   - Enable automatic deployments on push to main branch
   - Preview deployments for pull requests

### Critical Configuration
- Vercel project settings
- Environment variables (if any)
- Custom domain DNS settings (if applicable)

### Verification
- Website is live at Vercel URL
- All pages load correctly
- Assets are served properly
- Custom domain works (if configured)
- Automatic deployments trigger on git push

---

## Testing Checklist

### Visual
- [ ] Design matches Figma specifications
- [ ] Colors, fonts, spacing are accurate
- [ ] Images and assets display correctly
- [ ] Animations and transitions work smoothly

### Responsive
- [ ] Mobile view (375px) renders correctly
- [ ] Tablet view (768px) renders correctly
- [ ] Desktop view (1440px+) renders correctly
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are appropriately sized

### Functionality
- [ ] Navigation works on all devices
- [ ] Links navigate correctly
- [ ] Forms submit successfully (if present)
- [ ] Interactive elements respond to user input

### Performance
- [ ] Lighthouse score > 90 for Performance
- [ ] Images are optimized
- [ ] No console errors or warnings
- [ ] Fast page load times

### Deployment
- [ ] Git repository is set up correctly
- [ ] Code is committed and pushed
- [ ] Vercel deployment is successful
- [ ] Live site is accessible
- [ ] Automatic deployments work

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
