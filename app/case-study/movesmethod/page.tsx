import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../../components/Nav";
import ScrollReveal from "../../components/ScrollReveal";
import ScaledIframe from "../../components/ScaledIframe";

const IMG_BASE = "/images/case-studies/movesmethod";

export const metadata: Metadata = {
  title: "MovesMethod Case Study — Bear Design",
  description:
    "How I took a stalled fitness app from engineering-complete to App Store in 3 months as a Fractional Design Partner.",
  openGraph: {
    title: "MovesMethod Case Study — Bear Design",
    description:
      "How I took a stalled fitness app from engineering-complete to App Store in 3 months as a Fractional Design Partner.",
    url: "https://bearliu.com/case-study/movesmethod",
    type: "article",
  },
};

/* ── Placeholder image component ── */
function Placeholder({
  label,
  aspect = "video",
  dark = false,
}: {
  label: string;
  aspect?: "video" | "square" | "wide" | "tall";
  dark?: boolean;
}) {
  const aspectMap = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[2/1]",
    tall: "aspect-[3/4]",
  };
  return (
    <div
      className={`w-full ${aspectMap[aspect]} rounded-2xl flex items-center justify-center text-center px-6 ${
        dark
          ? "bg-[#1c1c1e] text-gray-500"
          : "bg-gray-100 text-gray-400 border border-gray-200"
      }`}
    >
      <span className="text-[13px] leading-5 font-medium">{label}</span>
    </div>
  );
}

/* ── Quote card component ── */
function QuoteCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-2xl bg-[#fafafa] border border-[#e5e5ea] px-6 py-6 md:px-8 md:py-8">
      <p className="text-[16px] md:text-[18px] leading-7 tracking-[-0.4px] text-gray-700 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-4 text-[13px] font-semibold text-gray-500 tracking-[-0.2px]">
        — {name}, {role}
      </p>
    </div>
  );
}

/* ── Before/After comparison component ── */
function BeforeAfter({
  title,
  number,
  beforeText,
  afterText,
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
}: {
  title: string;
  number: string;
  beforeText: string;
  afterText: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-baseline gap-3">
        <span className="text-[13px] font-semibold text-accent-yellow tracking-wide">
          {number}
        </span>
        <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before */}
        <div className="flex flex-col gap-3">
          <span className="self-start rounded-md bg-red-50 border border-red-200 px-2.5 py-0.5 text-[11px] font-semibold text-red-600 uppercase tracking-wider">
            Before
          </span>
          <p className="text-[14px] leading-[22px] tracking-[-0.3px] text-gray-600">
            {beforeText}
          </p>
          {beforeImage ? (
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src={beforeImage}
                alt={beforeLabel}
                width={960}
                height={540}
                className="w-full h-auto"
              />
            </div>
          ) : (
            <Placeholder label={beforeLabel} />
          )}
        </div>

        {/* After */}
        <div className="flex flex-col gap-3">
          <span className="self-start rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
            After
          </span>
          <p className="text-[14px] leading-[22px] tracking-[-0.3px] text-gray-600">
            {afterText}
          </p>
          {afterImage ? (
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src={afterImage}
                alt={afterLabel}
                width={960}
                height={540}
                className="w-full h-auto"
              />
            </div>
          ) : (
            <Placeholder label={afterLabel} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Section wrapper ── */
function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full ${dark ? "bg-[#1c1c1e]" : "bg-white"} ${className}`}
    >
      <div className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0">
        {children}
      </div>
    </section>
  );
}

export default function MovesMethodCaseStudy() {
  return (
    <div className="flex flex-col items-center bg-white">
      {/* ===== NAVIGATION ===== */}
      <header className="w-full">
        <Nav />
      </header>

      <main id="main-content" className="w-full">
        {/* ===== SECTION 1: HERO ===== */}
        <section className="relative w-full min-h-[70vh] md:min-h-[75vh] bg-[#1c1c1e] overflow-hidden">
          {/* Full-bleed background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={`${IMG_BASE}/hero-video-poster.jpg`}
          >
            <source src={`${IMG_BASE}/hero-video.mp4`} type="video/mp4" />
          </video>

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] via-[#1c1c1e]/70 to-transparent" />

          {/* Content on top */}
          <div className="relative z-10 w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 pt-12 pb-16 md:pt-20 md:pb-24">
            {/* Back link */}
            <a
              href="/#work"
              className="inline-flex items-center gap-2 text-[13px] text-gray-400 hover:text-white transition-colors mb-10 md:mb-14"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Work
            </a>

            <div className="hero-fade-in">
              <span className="inline-block rounded-lg bg-accent-yellow px-3 py-1 text-[12px] font-semibold text-[#1c190d] mb-5">
                Fitness & Health · iOS
              </span>
            </div>

            <h1 className="hero-fade-in text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.1] tracking-[-1.5px] text-white max-w-[720px]">
              MovesMethod App MVP
            </h1>

            <p className="hero-fade-in mt-4 text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.5px] text-gray-300 max-w-[600px]">
              Same team. Same codebase. Completely different product.
            </p>

            {/* Meta info */}
            <div className="hero-fade-in mt-10 flex flex-wrap gap-x-8 gap-y-4 text-[13px] text-gray-500">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Role
                </span>
                <span className="text-white/90">
                  Lead Designer / Fractional Design Partner
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Timeline
                </span>
                <span className="text-white/90">Dec 2025 – Mar 2026</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Platform
                </span>
                <span className="text-white/90">iOS (native)</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Team
                </span>
                <span className="text-white/90">
                  1 founder, 3 engineers, 1 design partner
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: THE OVERVIEW ===== */}
        <Section className="py-16 md:py-24">
          <ScrollReveal>
            <div className="max-w-[680px]">
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                MovesMethod is a fast-growing fitness and mobility brand with a
                community of 192.1K members, expanding into a dedicated iOS app.
              </p>
              <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                When I joined the project, the app had already been built. A
                previous designer had delivered the UI. The engineering team had
                written working code. But after months of work, the product
                still couldn&apos;t launch.
              </p>
              <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                I came in as a Fractional Design Partner, responsible for
                product direction, design systems, UX strategy, and getting this
                app from &ldquo;engineering complete&rdquo; to the App Store.
              </p>
            </div>
          </ScrollReveal>
        </Section>

        {/* ===== SECTION 2: THE TRANSFORMATION ===== */}
        <Section className="py-16 md:py-24 bg-[#fafafa]" id="transformation">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="inline-block bg-accent-yellow-light rounded-xl text-[24px] md:text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
                The Transformation
              </h2>
              <p className="mt-4 text-[15px] text-gray-500 max-w-[480px] mx-auto">
                Side-by-side comparisons. The full scope of change in 15
                seconds.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-16 md:gap-20">
            <ScrollReveal>
              <BeforeAfter
                number="01"
                title="Onboarding"
                beforeText="19 steps mixing setup, marketing surveys, and a premature rating request — all before the user sees any value."
                afterText="Streamlined flow: Profile → Goals → Plan. Low-value steps moved to post-activation surfaces."
                beforeImage={`${IMG_BASE}/onboarding-before.avif`}
                afterImage={`${IMG_BASE}/onboarding-after.avif`}
                beforeLabel="Before — 19-step onboarding flow"
                afterLabel="After — Streamlined Profile → Goals → Plan"
              />
            </ScrollReveal>

            <ScrollReveal>
              <BeforeAfter
                number="02"
                title="Information Architecture"
                beforeText="Dashboard crammed with features, promotions, AI chat, social content, and settings on a single surface. No hierarchy."
                afterText="Section-based modular layout. Each feature in its own card. New features plug in without redesign."
                beforeImage={`${IMG_BASE}/ia-before.avif`}
                afterImage={`${IMG_BASE}/ia-after.avif`}
                beforeLabel="Before — Cluttered dashboard, no hierarchy"
                afterLabel="After — Section-based modular layout"
              />
            </ScrollReveal>

            <ScrollReveal>
              <BeforeAfter
                number="03"
                title="Progression System"
                beforeText="Martial arts belt metaphor, using one sport to explain another. Cluttered visuals, high cognitive load."
                afterText="Clean level system benchmarked against Nike Running Club and Strava. Instantly intuitive, easy to maintain."
                beforeImage={`${IMG_BASE}/progression-before.avif`}
                afterImage={`${IMG_BASE}/progression-after.avif`}
                beforeLabel="Before — Belt system with mixed metaphors"
                afterLabel="After — Clean numeric level system"
              />
            </ScrollReveal>

            <ScrollReveal>
              <BeforeAfter
                number="04"
                title="Visual Direction"
                beforeText="Light UI with inconsistent colour usage and no connection to MovesMethod's existing product lines."
                afterText="Dark UI aligned with brand identity. Single-mode strategy eliminated dual-theme dev overhead."
                beforeImage={`${IMG_BASE}/visual-before.avif`}
                afterImage={`${IMG_BASE}/visual-after.avif`}
                beforeLabel="Before — Inconsistent light UI"
                afterLabel="After — Cohesive dark UI, brand-aligned"
              />
            </ScrollReveal>

            <ScrollReveal>
              <BeforeAfter
                number="05"
                title="Design System"
                beforeText="No system. Every screen built ad hoc — inconsistent typography, spacing, and components."
                afterText="Complete design system: SF Pro, SF Symbols, colour tokens, component library, documented patterns and guidelines."
                beforeImage={`${IMG_BASE}/designsystem-before.avif`}
                afterImage={`${IMG_BASE}/designsystem-after.avif`}
                beforeLabel="Before — No shared components, ad hoc screens"
                afterLabel="After — Full design system overview"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="mt-16 md:mt-20 text-center text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.3px] text-gray-700 max-w-[600px] mx-auto font-medium">
              What changed? Not the engineer. Not the codebase. Not the
              founder&apos;s vision.{" "}
              <span className="text-gray-900">
                The design leadership changed.
              </span>
            </p>
          </ScrollReveal>
        </Section>

        {/* ===== SECTION 3: THE DIAGNOSIS ===== */}
        <Section className="py-16 md:py-24" id="diagnosis">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="inline-block bg-accent-yellow-light rounded-xl text-[24px] md:text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
                The Diagnosis
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-[680px] mx-auto flex flex-col gap-5">
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                Before touching any design tool, I conducted a full UX audit —
                walking through the entire app as a first-time user and
                recording a detailed video review for the founder.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                The previous design had been built without a mobile-first
                mindset. No design system, no scalable component logic, no
                coherent visual language. Edge cases like error states, empty
                states, and subscription lifecycle were entirely undesigned.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                The core issue: this was a product that lacked system thinking.
                Launching it as-is would accelerate failure, not validate the
                idea.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                I documented findings into a structured assessment and proposed
                a 3-month UX plan: redesign onboarding first (biggest
                conversion impact), then rebuild the IA, then establish the UI
                system.
              </p>
            </div>
          </ScrollReveal>

          {/* UX Audit Video */}
          <ScrollReveal>
            <div className="mt-12 max-w-[680px] mx-auto">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#1c1c1e]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/a8quVX4VyM0"
                  title="UX Audit Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
              <p className="mt-3 text-[13px] text-gray-400 text-center">
                Full UX audit walkthrough recorded for the founder
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 max-w-[680px] mx-auto rounded-2xl overflow-hidden">
              <Image
                src={`${IMG_BASE}/ux-audit-artefact.avif`}
                alt="UX audit — Structured findings and 3-month UX plan"
                width={960}
                height={540}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 max-w-[680px] mx-auto rounded-2xl overflow-hidden">
              <Image
                src={`${IMG_BASE}/Testimonial1.avif`}
                alt="Josh Fear testimonial about the Notion breakdown"
                width={960}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </Section>

        {/* ===== SECTION 3.5: WHY THIS NEEDED MORE THAN A DESIGNER ===== */}
        <Section className="py-16 md:py-24 bg-[#fafafa]">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto flex flex-col gap-5">
              <h2 className="text-[22px] md:text-[26px] font-semibold leading-[1.2] tracking-[-1px] text-gray-900">
                Why This Needed More Than a Designer
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                The team had already tried hiring a designer. They got
                deliverables, built what was designed, and ended up with
                something they couldn&apos;t use.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                The founder screened eight designers. Full-time was too
                expensive and unnecessary for the stage. An agency felt too
                detached. What he needed was senior-level product judgment two
                to three days a week — not just pixel output.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-900 font-medium">
                That&apos;s what a Fractional Design Partner does. I don&apos;t
                take briefs. I write them.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 max-w-[680px] mx-auto">
              <QuoteCard
                quote="I've never done anything like this before, so I wanted someone with visual experience actually doing it so I can bypass mistakes, speed up the process, and do it with more quality. MovesMethod is quite a big brand. I didn't want to just put anything out there that I designed myself."
                name="Josh Fear"
                role="Founder, MovesMethod"
              />
            </div>
          </ScrollReveal>
        </Section>

        {/* ===== SECTION 4: BUILDING THE FOUNDATION ===== */}
        <Section className="py-16 md:py-24" id="foundation">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="inline-block bg-accent-yellow-light rounded-xl text-[24px] md:text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
                Building the Foundation
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-[680px] mx-auto flex flex-col gap-16 md:gap-20">
            {/* Dark UI decision */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  The Dark UI Decision
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  Shifting from light to dark was a product decision, not an
                  aesthetic one: brand alignment (professional fitness software +
                  unified product line), development efficiency (one colour mode,
                  not two), and early lock-in (preventing weeks of downstream
                  back-and-forth). The team agreed immediately. One conversation
                  that unlocked the entire visual direction.
                </p>
              </div>
            </ScrollReveal>

            {/* Section architecture */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  Section Architecture
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  The most important structural decision. A section-based,
                  card-driven layout where each feature occupies its own
                  section. New features are added by inserting a section. No
                  existing screens need redesigning.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  To help the team understand, I created a wireframe of the
                  ideal future state with all possible features mapped out, then
                  filtered down to MVP scope.
                </p>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/wireframe.avif`}
                  alt="Wireframe — Ideal state vs MVP scope"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            {/* Design system */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  Typography, Iconography & Design System
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  SF Pro + SF Symbols as the native iOS foundation. Complete
                  design system documented: colour tokens, spacing, components,
                  patterns.
                </p>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/designsystem-showcase.avif`}
                  alt="Design system — Components, colour tokens, typography scale"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            {/* Progression */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  Simplifying the Progression System
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  Replaced the belt metaphor with numeric levels after
                  benchmarking against Nike Running Club and Strava. For users:
                  instantly intuitive. For the team: dramatically simpler to
                  build and maintain.
                </p>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/competitive-benchmark.avif`}
                  alt="Competitive benchmark — NRC & Strava vs MovesMethod levels"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* ===== SECTION 5: DESIGNING THE FULL EXPERIENCE ===== */}
        <Section className="py-16 md:py-24 bg-[#fafafa]" id="experience">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="inline-block bg-accent-yellow-light rounded-xl text-[24px] md:text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
                Designing the Full Experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-[680px] mx-auto flex flex-col gap-16 md:gap-20">
            {/* Core product loop */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  Core Product Loop: Three Pillars
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  <strong>Mobility Testing</strong> creates awareness — users
                  see exactly where they need to improve.{" "}
                  <strong>Workout Flow</strong> creates the habit through
                  structured daily sessions.{" "}
                  <strong>Gamification</strong> sustains motivation with a
                  level-based incentive system reinforcing the daily loop.
                </p>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/core-loop.avif`}
                  alt="Core loop — Mobility Test, Workout, Level Up"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            {/* Mobility Insight Report */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  Mobility Insight Report
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  High information density: users need to understand what their
                  results mean, what ideal looks like, and what to do next. I
                  explored three interaction approaches and built working
                  prototypes of each using Claude Code:
                </p>
                <div className="mt-2 flex flex-col gap-2 text-[15px] leading-[1.6] tracking-[-0.3px] text-gray-600">
                  <p>
                    <span className="font-medium text-gray-800">1.</span>{" "}
                    Vertical scrolling — natural but loses context in dense data
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">2.</span>{" "}
                    Horizontal swipe pagination — each insight gets a full
                    screen, no interference
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">3.</span>{" "}
                    Expandable cards — compact but restricts display area
                  </p>
                </div>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  The team chose horizontal swipe after tapping through all
                  three variants in a single session. A decision that would have
                  taken days with static mockups.
                </p>
              </div>

              {/* 3 interactive prototype variants — scaled to fit */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <ScaledIframe
                  src="https://effulgent-parfait-ad0c8b.netlify.app/a-long-scroll"
                  title="Prototype — Vertical scroll"
                  label="Vertical Scroll"
                />
                <ScaledIframe
                  src="https://effulgent-parfait-ad0c8b.netlify.app/b-swipeable-cards"
                  title="Prototype — Horizontal swipe"
                  label="Horizontal Swipe ✓"
                  selected
                />
                <ScaledIframe
                  src="https://effulgent-parfait-ad0c8b.netlify.app/c-collapsible"
                  title="Prototype — Expandable cards"
                  label="Expandable Cards"
                />
              </div>
            </ScrollReveal>

            {/* Final Insight Report */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                  Final Insight Report
                </h3>
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/final-insight-report.avif`}
                  alt="Final Insight Report — Horizontal swipe experience"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            {/* Edge case coverage */}
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] tracking-[-1px] text-gray-900">
                  Complete Coverage
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                  Every error state, empty state, loading state, share flow, and
                  subscription lifecycle state. Designed and documented.
                </p>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/complete-coverage.avif`}
                  alt="Complete coverage — Error states, empty states, loading, share flows, subscription lifecycle"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* ===== SECTION 6: AI AS A MULTIPLIER ===== */}
        <Section className="py-16 md:py-24" id="ai">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto flex flex-col gap-6">
              <h2 className="inline-block self-start bg-accent-yellow-light rounded-xl text-[24px] md:text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
                AI as a Multiplier
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                AI was part of my workflow. It was never in charge of my
                decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                  <h4 className="text-[14px] font-semibold text-emerald-700 mb-2">
                    Where AI made me faster
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-emerald-800/80">
                    Copy and microcopy iteration, rapid prototyping (three
                    Insight Report variants built with Claude Code connected to
                    Figma MCP), and accessibility auditing.
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-5">
                  <h4 className="text-[14px] font-semibold text-amber-700 mb-2">
                    Where AI can&apos;t help yet
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-amber-800/80">
                    Diagnosing why a product isn&apos;t working, making
                    structural architecture decisions, knowing which edge cases
                    to design for, and earning stakeholder trust.
                  </p>
                </div>
              </div>

              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-900 font-medium mt-2">
                AI is a speed multiplier for execution. The thinking that
                determines what gets executed? That&apos;s still the job.
              </p>
            </div>
          </ScrollReveal>
        </Section>

        {/* ===== SECTION 7: LEADING THE PRODUCT PROCESS ===== */}
        <Section className="py-16 md:py-24 bg-[#fafafa]" id="process">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="inline-block bg-accent-yellow-light rounded-xl text-[24px] md:text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
                Leading the Product Process
              </h2>
              <p className="mt-4 text-[15px] text-gray-500 max-w-[520px] mx-auto">
                For a small team with a first-time software founder, the process
                itself needed design.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-[680px] mx-auto flex flex-col gap-12">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white border border-gray-200 p-5">
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-2">
                    Scope Management
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-gray-600">
                    Separated MVP and post-MVP work directly in the Figma file.
                    One delivery page for confirmed scope, another for
                    designed-but-deferred features.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-5">
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-2">
                    Notion Roadmap
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-gray-600">
                    The team always knew what was in progress, what came next,
                    and what was deliberately deferred.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-5">
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-2">
                    Team Retrospective
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-gray-600">
                    After the MVP push, I facilitated a retro. Standard for
                    mature teams, new for this one.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-5">
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-2">
                    Engineering-ready Specs
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-gray-600">
                    Every design included interaction logic, conditional states,
                    and coded component examples. Figma as the single source of
                    truth.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/notion-roadmap.avif`}
                  alt="Notion roadmap — Project board showing task status and phases"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/Testimonial2.avif`}
                  alt="Josh Fear testimonial about bridging the gap"
                  width={960}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                That bridge role — connecting the founder&apos;s vision to the
                engineering team&apos;s implementation — is the invisible work
                that most design portfolios never show. But it&apos;s often the
                work that matters most.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/figma-file.avif`}
                  alt="Figma file — MVP page vs Post-MVP page"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* ===== SECTION 8: WHAT THIS PROJECT PROVES ===== */}
        <Section className="py-16 md:py-24" id="proves">
          <ScrollReveal>
            <div className="max-w-[680px] mx-auto flex flex-col gap-5">
              <h2 className="text-[24px] md:text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-gray-900">
                What This Project Proves
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                MovesMethod was never an engineering problem. The code worked
                from day one.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                It was a product design leadership problem — the kind that
                surfaces when a team has built something functional but
                hasn&apos;t shaped it into something users can understand,
                trust, and commit to.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-700">
                The founder had the vision and the community. The engineering
                team had the technical ability. What was missing was someone to
                sit between product thinking and execution.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.7] tracking-[-0.3px] text-gray-900 font-medium">
                That&apos;s the work I did. And it&apos;s the work I do as a
                Fractional Design Partner.
              </p>
              <div className="mt-4 rounded-xl bg-accent-yellow/10 border border-accent-yellow/30 px-5 py-4">
                <p className="text-[15px] md:text-[16px] leading-[1.6] tracking-[-0.3px] text-gray-900 font-semibold">
                  The app has been submitted to the App Store and is currently
                  under review, ready to serve a community of 192.1K members.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Section>

        {/* ===== SECTION 9: IN THE FOUNDER'S WORDS ===== */}
        <section className="w-full bg-[#1c1c1e]">
          <div className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0 py-16 md:py-24">
            <ScrollReveal>
              <div className="max-w-[680px] mx-auto text-center flex flex-col items-center gap-8">
                <h2 className="text-[24px] md:text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-white">
                  In the Founder&apos;s Words
                </h2>

                <p className="text-[15px] leading-[1.6] text-gray-400">
                  When I asked the founder to describe working together in three
                  words:
                </p>

                {/* Three words */}
                <div className="flex flex-wrap justify-center gap-4">
                  {["Refreshing", "Insightful", "Efficient"].map((word) => (
                    <span
                      key={word}
                      className="rounded-xl bg-accent-yellow px-5 py-2 text-[18px] md:text-[22px] font-bold tracking-[-0.5px] text-[#1c190d]"
                    >
                      {word}
                    </span>
                  ))}
                </div>

                <p className="text-[16px] md:text-[18px] leading-[1.7] text-gray-400 italic max-w-[560px]">
                  &ldquo;Refreshing, because it&apos;s been so much easier to
                  work with you than the previous designers we had. Insightful:
                  I&apos;ve learned a lot from seeing how you work and how you
                  present ideas. And efficient.&rdquo;
                </p>

                <div className="w-full h-px bg-gray-700/50 my-4" />

                <p className="text-[18px] md:text-[20px] leading-[1.6] text-white italic max-w-[560px]">
                  &ldquo;I definitely think it&apos;s worth it. I don&apos;t
                  really have a bad thing to say. If there&apos;s anything that
                  could be better, it would literally just be:{" "}
                  <span className="text-accent-yellow font-semibold not-italic">
                    I&apos;d have you full time if I could.
                  </span>
                  &rdquo;
                </p>

                <p className="text-[13px] font-semibold text-gray-500 tracking-[-0.2px]">
                  — Josh Fear, Founder, MovesMethod
                </p>
              </div>
            </ScrollReveal>

            {/* Closing hero */}
            <ScrollReveal>
              <div className="mt-16 rounded-2xl overflow-hidden">
                <Image
                  src={`${IMG_BASE}/closing-hero.avif`}
                  alt="MovesMethod — Shipped product"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <Section className="py-16 md:py-20">
          <div className="text-center flex flex-col items-center gap-6">
            <p className="text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.3px] text-gray-700">
              Need this kind of design leadership for your product?
            </p>
            <a
              href="https://calendly.com/bearliu/15-mins-fdp-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[48px] px-8 items-center justify-center rounded-lg bg-accent-yellow text-[15px] font-semibold text-[#1c190d] hover:brightness-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
            >
              Book a 15-min Intro
            </a>
            <p className="text-[13px] text-gray-400 tracking-[-0.2px]">
              Bear Liu · Fractional Design Partner ·{" "}
              <a
                href="/"
                className="underline hover:text-gray-600 transition-colors"
              >
                bearliu.com
              </a>
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
