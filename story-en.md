# How I Built My Business Landing Page in One Day Using AI as My Dev Partner

## Why I needed this site

In 2025, I left Xero after five years as a Product Designer and started working as a Fractional Design Partner. The short version: I embed into founder-led teams as an external design partner, helping with product decisions and design execution. Not one-off UI deliverables, but upstream work on user journeys, conversion, and retention, identifying the highest-leverage improvements and then shipping them.

Once the service model was running, I needed a proper landing page. Not a personal portfolio site, but a commercial page that answers three questions for potential clients: what problems I solve, how we work together, and what it costs.

The Figma design had been ready for weeks. What held me back was development. Hiring a developer felt disproportionate for a single page. Building it myself meant working outside my core skillset. Figma Sites was an option I had tried, but the limitations around animation and responsive behaviour were clear.

Then I tried Claude Code, and the whole equation changed.

## One day, empty folder to live site

The entire website went from zero to live in a single day. Not a marathon session. Normal working hours, with a lunch break, a swim in the ocean, and a school pickup in between. The actual time spent working with the AI was roughly four hours.

Some context on what I started with: a completed Figma design for desktop only (960px wide). No mobile layout. No animations. If I had built this with Figma Sites, including mobile adjustments and animation setup, I would estimate seven to eight hours minimum.

## The process, step by step

### 9:30 AM — Planning first, not coding

I opened Claude Code in the terminal, dropped in my Figma design link, and said: "Build me a website based on this design."

The first thing Claude did was not write code. It created a phased implementation plan, breaking the project into six stages: connect Figma MCP, initialise the project, implement the page, add responsive layout, set up Git, and deploy to Vercel.

This matters. It did not jump straight into producing code. It thought about the whole picture first. After 16 years of product design, I know how much "plan before you build" is worth. Seeing the AI demonstrate that same discipline made me confident we could work together.

Quick tip: in Claude Code's terminal, Shift + Tab switches to Plan Mode.

### 9:30–9:35 — Connecting to the Figma design

Through Figma's MCP (Model Context Protocol), Claude accessed my design file directly, extracting colours, fonts, spacing parameters, and downloading image assets. Within a few minutes, it had pulled out a complete set of design tokens covering the colour palette, greyscale values, type scale, and line heights.

The significance here: the most tedious part of design-to-development handoff, manually translating design specs into code, was skipped entirely.

### 9:35–9:55 — Project setup and desktop layout

Claude scaffolded the project with Next.js and Tailwind CSS, then began implementing section by section. The site has nine sections: navigation, hero, social proof (client logos), pain points, service strategy (roadmap, Slack collaboration, async delivery), case studies (MovesMethod, Xero), pricing, CTA, and footer.

In under 20 minutes, the full desktop layout was rendered. All 25 images and SVG assets were extracted from Figma and loaded correctly. I opened localhost:3000 in the browser, and the page was already viewable.

### Afternoon — Desktop refinement

After lunch, I took my laptop to a café and continued. Comparing the local build against the Figma original, there were still adjustments needed: image rendering, shadows, border styles, spacing, and positioning. The workflow was straightforward. I took a screenshot of the Figma design, sent it to Claude, pointed out what needed fixing, and it made the corrections. It felt like doing a Design QA session with a developer sitting next to me.

One interesting observation here: tasks that feel slow for humans, like replacing every icon with SF Symbols across the entire site, the AI completed in a second. But precise visual adjustments, like getting an image's exact position and size right, it would burn through tokens going back and forth. In those cases, it was faster for me to crop the image myself and hand it over.

### Afternoon — Responsive conversion

This was the largest chunk of work. The design was built at 960px desktop width, but the site needed to work at mobile (375px) and tablet (768px) as well.

Claude converted all nine sections from absolute positioning to Flexbox layouts and added responsive breakpoints. Some of the key changes:

The hero section uses different background images on desktop and mobile, with a portrait crop for smaller screens. The navigation was extracted into a standalone client component with a hamburger menu. The strategy section originally had 13 absolutely positioned elements, all replaced with three flex containers using aspect-ratio for image proportions. The pricing cards reflow from a horizontal to vertical stack, with touch targets sized to 44px for mobile.

Along the way, a visual issue got fixed as well: the yellow highlight backgrounds were originally SVGs with `preserveAspectRatio="none"`, which caused corner distortion at different widths. Claude replaced them with CSS background colours and border-radius. Cleaner and easier to maintain.

### Evening — Animation and micro-interactions

With the layout complete, I wanted to add some polish. Claude added scroll-triggered reveal animations (each section fades in and shifts up as it enters the viewport), a staggered hero load animation (title, description, then button appearing in sequence), hover effects on cards and images (scale, shadow, translate), and a subtle logo hover scale on the navigation.

All restrained. No gratuitous motion. Just enough to make the page feel considered.

### Evening — Sticky navigation with glassmorphism

I wanted the nav to stick to the top on scroll so the CTA button is always accessible. Claude implemented a sticky header with a glassmorphism effect: transparent at the top of the page, transitioning to a semi-transparent white with backdrop blur on scroll. Similar to what you see on Apple and Stripe's sites.

This is where I hit the first real bug. The sticky positioning did not work. I took a screenshot and shared it with Claude. It inspected the code and identified the root cause in seconds: a parent `<div>` had `overflow-x-hidden` set, which breaks `position: sticky` per the CSS specification. The fix was simple: move the overflow property to the `<body>` element instead.

That kind of debugging would have cost me 30 minutes to an hour of searching. Claude found it in seconds. This is one of the highest-value aspects of AI-assisted development.

### Evening — Real links and deployment

The final step was wiring up all links to real destinations: CTA buttons to my Calendly booking page, the audit example to a Notion page, and social links to my LinkedIn, X, and email.

All code was committed to GitHub, which triggered an automatic Vercel deployment. Within seconds, the site was live. I configured a custom domain (bearliu.com) in the Vercel dashboard, updated the DNS records, and waited a few minutes for the SSL certificate to provision.

By 10 PM, bearliu.com was live and fully functional.

## Issues encountered and how they were resolved

The process was not entirely smooth. A few problems worth documenting:

**Directory name with a space.** The project folder was called "FDP website". `create-next-app` does not accept directory names with spaces. Claude worked around it by using the `--name` flag to specify a space-free package name. Every terminal command afterwards required quoted paths.

**Tailwind CSS v4 configuration change.** Tailwind v4 moved theme configuration from `tailwind.config.js` to an `@theme inline` syntax directly in CSS files. Claude used the correct approach from the start, with no backtracking.

**Sticky nav failure.** The `overflow-x-hidden` issue described above. The CSS specification states that any ancestor element between a sticky element and its scroll container with `overflow: hidden/auto/scroll` will break sticky behaviour. A well-known gotcha.

**SVG background scaling distortion.** The yellow highlight backgrounds used SVGs with `preserveAspectRatio="none"`, causing corner distortion at different widths. Claude replaced them with CSS `background-color` and `border-radius`. Better result, better maintainability.

All of these issues were diagnosed and resolved by Claude autonomously.

## Final result

- **Live site**: bearliu.com
- **Repository**: On my Github
- **Total time**: approximately one day (intermittent work, roughly four hours of active collaboration)
- **Stack**: Next.js 16 + Tailwind CSS v4 + Vercel
- **External dependencies**: none. No UI libraries, no component frameworks.

## What I learnt from this project

A few observations from reflecting on the process:

**Designers building production sites is now practical.** Previously, "designer who codes" meant acquiring substantial engineering knowledge. With tools like Claude Code, I only needed to know what I wanted and be able to read code well enough to review it. The actual engineering execution was handled by the AI.

**The Figma-to-code pipeline works.** Claude read the Figma design file directly, extracted design tokens and assets, and translated them into working code. The most laborious part of the design-development handoff was eliminated. I have seen scepticism online about Figma MCP's effectiveness. In my experience, at least 95% of the design was implemented correctly on the first pass. The remaining work was minor refinement. I was satisfied with the result.

**Debugging speed is transformative.** The sticky nav issue would have taken me 30 to 60 minutes to diagnose through search. Claude identified the root cause in seconds. Its understanding of CSS specifications runs deeper than most practitioners. This matters because, for many designers, the blocker to building things is not writing code itself. It is getting stuck when something breaks and not knowing how to investigate. AI largely removes that obstacle.

**Iteration is near-instant.** "Add a hover effect", "swap this link", "make the nav sticky". Each request was essentially done the moment I described it. That feedback loop is faster than any traditional design-to-development workflow I have experienced.

**Human judgement remains essential.** Throughout the process, my role was to decide what the site needed and in what order, assess design fidelity, test interactions, provide real business links, and set the quality bar. The AI executes. I direct.

**AI has clear strengths and limitations.** Bulk operations like icon replacement, code restructuring, and CSS debugging are fast and accurate. But precise visual tweaks, like getting an image to exactly the right position and size, caused the AI to iterate inefficiently. In those situations, manually preparing the asset and handing it over was faster. Knowing when to let the AI work and when to step in yourself is the core skill of AI-assisted development.

## What this means for my work

Stepping back to the bigger picture: my Fractional Design Partner service is fundamentally about providing founders and small teams with the combination of product judgement and execution capability. Completing a full design-to-deployment project in one day, with AI as my development partner, is a demonstration of exactly that principle. You do not need to do everything yourself. You need the right tools and the right collaboration model.

This site is now the starting point of my client acquisition pipeline. Prospective clients find me through LinkedIn, X, or referrals, land on bearliu.com, see what I can help with, how we would work together, and what it costs, then book a 15-minute intro call. The entire funnel is clear, controllable, and iterable.

And this project itself became content. A designer using AI to ship a commercial website in one day is exactly the kind of real-world case study I build my practice around: integrating AI into actual work, then documenting and sharing the process.

If there is one takeaway: for independent designers and small teams, AI is not a replacement. It is what lets one person accomplish what previously required a small team. The prerequisite is knowing what you want. The AI handles the rest.
