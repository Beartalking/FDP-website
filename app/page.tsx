import Image from "next/image";

/* ── Inline SVG Icons (replacing SF Symbols) ── */
const IconCompass = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" stroke="none" />
  </svg>
);

const IconGear = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const IconWrench = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
  </svg>
);

const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);

const IconPuzzle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.969a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
  </svg>
);

const IconClipboard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
  </svg>
);

const IconChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" />
  </svg>
);

const IconVideo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const painPoints = [
  {
    Icon: IconCompass,
    title: "The Roadmap Fog",
    desc: "You have a vision, but your product roadmap is a list of features rather than a cohesive strategy.",
  },
  {
    Icon: IconGear,
    title: "Developer Friction",
    desc: 'Your engineering team is slowed down by vague designs or constant back-and-forth on "how this should work."',
  },
  {
    Icon: IconWrench,
    title: "The Design-Debt Trap",
    desc: "Your MVP was built fast, but now the UI is getting messy and it\u2019s starting to hurt user trust.",
  },
  {
    Icon: IconTarget,
    title: "Decision Fatigue",
    desc: "You\u2019re a founder making every small design call yourself, and it\u2019s pulling you away from high-level growth.",
  },
  {
    Icon: IconPuzzle,
    title: "Pretty but Broken",
    desc: "Your product looks \u201Cokay,\u201D but users aren\u2019t moving through the core loops the way you expected.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      {/* ===== NAVIGATION ===== */}
      <nav className="flex w-full max-w-[960px] items-center justify-between py-2 h-[80px]">
        <div className="flex items-center gap-3">
          <div className="relative size-8 overflow-hidden rounded-[20px]">
            <img src="/images/avatar.svg" alt="Bear Liu" className="size-full" />
          </div>
          <span className="text-[16px] tracking-[-0.8px] text-gray-700">
            Fractional Design Partner
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#strategy" className="text-[16px] tracking-[-0.8px] text-gray-500 hover:text-gray-900 transition-colors">
            Strategy
          </a>
          <a href="#work" className="text-[16px] tracking-[-0.8px] text-gray-500 hover:text-gray-900 transition-colors">
            Work
          </a>
          <a href="#pricing" className="text-[16px] tracking-[-0.8px] text-gray-500 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a
            href="#book"
            className="flex h-[44px] w-[120px] items-center justify-center rounded-lg bg-accent-yellow text-[14px] font-semibold text-[#1c190d] hover:brightness-95 transition"
          >
            Book Intro
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative w-full max-w-[960px] h-[439px] overflow-hidden rounded-[16px] border-b border-[#bebebe]">
        <div className="absolute left-0 top-[-288px] w-[1240px] h-[828px]">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Bear Liu speaking at a conference"
            fill
            className="object-cover -scale-y-100 rotate-180"
            priority
          />
        </div>
        <div className="absolute left-[52px] top-[40px]">
          <h1 className="bg-white rounded-2xl border-[2.5px] border-gray-900 shadow-[4px_4px_0px_0px_#1c1c1e] text-[48px] font-semibold leading-[56px] tracking-[-1.4px] text-gray-900 px-[24px] pt-[4px] pb-[14px]">
            Think like a partner.<br />
            Execute fractionally.
          </h1>
        </div>
        <div className="absolute left-[52px] top-[188px] w-[445px] rounded-xl bg-white/60 backdrop-blur-[5px] px-[10px] py-2">
          <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-900">
            I help early-stage teams make clear product design decisions and ship
            with momentum, without hiring a full-time designer.
          </p>
        </div>
        <a
          href="#book"
          className="absolute left-[52px] top-[297px] flex h-[40px] w-[216px] items-center justify-center rounded-lg bg-accent-yellow text-[14px] font-semibold text-[#0a0a0a] hover:brightness-95 transition"
        >
          Book your intro
        </a>
        <div className="absolute left-[52px] top-[377px] rounded-xl bg-white/60 backdrop-blur-[5px] px-[10px] py-1">
          <span className="text-[12px] font-medium text-black">
            🟢 Accepting 2 new partners in Q1
          </span>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="relative w-full max-w-[960px] h-[340px] overflow-hidden border-b border-gray-100 bg-white">
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[676px] flex flex-col gap-4 items-center">
          <h2 className="text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 text-center w-full">
            Backed by Experience, Trusted by Leaders.
          </h2>
          <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-900 w-full">
            I&apos;ve worked on complex product and growth-related design at
            Xero, spoken at UX New Zealand, and partnered with teams across
            different stages and industries.
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[172px] flex items-center gap-[26px]">
          <span className="rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white whitespace-nowrap">
            Ex-Xero Product Designer
          </span>
          <span className="rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white whitespace-nowrap">
            UX New Zealand Speaker
          </span>
          <span className="rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white whitespace-nowrap">
            B2C &amp; B2B Experience
          </span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[240px] flex items-center gap-[43px] h-[58px]">
          <span className="text-[22px] font-semibold tracking-[-1.4px] text-gray-700 shrink-0 whitespace-nowrap">
            Trusted by
          </span>
          <img src="/images/trust-logos/xero.svg" alt="Xero" className="h-[55px] w-[55px] shrink-0" />
          <img src="/images/trust-logos/uxnz.svg" alt="UX New Zealand" className="h-[52px] w-[68px] shrink-0" />
          <img src="/images/trust-logos/logo3.svg" alt="Partner" className="h-[55px] w-[55px] shrink-0" />
          <img src="/images/trust-logos/logo4.svg" alt="Fisher & Paykel" className="h-[16px] w-[132px] shrink-0" />
          <img src="/images/trust-logos/logo5.svg" alt="Vodafone" className="h-[55px] w-[49px] shrink-0" />
          <img src="/images/trust-logos/logo6.svg" alt="Les Mills" className="h-[16px] w-[163px] shrink-0" />
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="relative w-full max-w-[960px] h-[474px] overflow-hidden bg-white">
        {/* Left side */}
        <div className="absolute left-[85px] top-[40px] w-[328px]">
          <div className="relative inline-block">
            <img
              src="/images/substrates/stuck.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            />
            <h2 className="relative text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
              If you&apos;re stuck here,<br />
              we should talk
            </h2>
          </div>
          <p className="mt-6 text-[16px] leading-6 tracking-[-0.8px] text-gray-700">
            <strong>Foundership is hard</strong>. I step in when you need more
            than a freelancer, but aren&apos;t ready for a full-time Design Lead.
          </p>
        </div>
        <div className="absolute left-[85px] top-[220px]">
          <div className="relative inline-block">
            <img
              src="/images/substrates/best-for.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            />
            <p className="relative text-[12px] font-medium text-gray-700 leading-4 px-[8px] py-[2px]">
              <strong>Best for</strong>: pre-seed to Series A, 1–5 person teams
              <br />
              shipping weekly.
            </p>
          </div>
        </div>

        {/* Right side — pain point cards */}
        <div className="absolute right-[60px] top-[40px] w-[396px] flex flex-col gap-4">
          {painPoints.map((item) => (
            <div key={item.title} className="flex gap-2 items-start w-full">
              <span className="w-[26px] flex items-center justify-center text-brown shrink-0 mt-[4px]">
                <item.Icon />
              </span>
              <div className="w-[360px]">
                <h4 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STRATEGY ===== */}
      <section
        id="strategy"
        className="relative w-full max-w-[960px] h-[1426px] overflow-hidden rounded-xl bg-gray-100"
      >
        {/* Header */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[705px] text-center">
          <div className="relative inline-block">
            <img
              src="/images/substrates/strategy.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            />
            <h2 className="relative text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
              A Seamless Extension of Your Team.
            </h2>
          </div>
          <p className="mt-4 text-[16px] leading-6 tracking-[-0.8px] text-gray-700">
            I integrate into your Slack and workflows, providing full
            transparency from roadmap to delivery.
          </p>
        </div>

        {/* Feature 1: Roadmap — icon + text at left, image at right */}
        <span className="absolute left-[55px] top-[245px] -translate-y-1/2 text-brown">
          <IconClipboard />
        </span>
        <div className="absolute left-[91px] top-[232px] w-[298px]">
          <h3 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
            Roadmap
          </h3>
          <span className="mt-1 inline-block rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
            Align direction and priorities
          </span>
          <p className="mt-1 text-[14px] leading-5 tracking-[-0.6px] text-gray-700 w-[287px]">
            We turn goals, constraints, and trade-offs into a clear plan your
            team can align on and your developers can execute.
          </p>
        </div>
        <div className="absolute left-[416px] top-[175px] w-[489px] h-[283px] rounded-xl shadow-[3px_3px_9px_0px_rgba(25,35,174,0.1)] overflow-hidden">
          <Image
            src="/images/strategy/roadmap.png"
            alt="Product roadmap example"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Feature 2: Slack + Office Hours — images at left, text at right */}
        <div className="absolute left-[48px] top-[526px] w-[339px] h-[280px] overflow-hidden">
          <Image
            src="/images/strategy/slack-1.png"
            alt="Slack collaboration example"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute left-[217px] top-[637px] w-[303px] h-[189px] rounded-[4px] shadow-[2px_2px_7px_0px_rgba(28,110,217,0.1),10px_7px_12px_0px_rgba(28,110,217,0.09),22px_17px_16px_0px_rgba(28,110,217,0.05)]">
          <div className="relative w-full h-full overflow-hidden rounded-[4px]">
            <Image
              src="/images/strategy/slack-2.png"
              alt="Slack conversation detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <span className="absolute left-[556px] top-[641px] -translate-y-1/2 text-brown">
          <IconChat />
        </span>
        <div className="absolute left-[592px] top-[628px] w-[298px]">
          <h3 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
            Slack + Office Hours
          </h3>
          <span className="mt-1 inline-block rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
            Unblock decisions fast
          </span>
          <p className="mt-1 text-[14px] leading-5 tracking-[-0.6px] text-gray-700 w-[287px]">
            I work inside your day-to-day channel to clarify decisions, reduce
            back-and-forth, and prevent small issues turning into big rework.
          </p>
        </div>

        {/* Feature 3: Async delivery — icon + text at left, image at right */}
        <span className="absolute left-[79px] top-[1044px] -translate-y-1/2 text-brown">
          <IconVideo />
        </span>
        <div className="absolute left-[112px] top-[1031px] w-[275px]">
          <h3 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
            Async delivery
          </h3>
          <span className="mt-1 inline-block rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
            Save meetings, keep clarity
          </span>
          <p className="mt-1 text-[14px] leading-5 tracking-[-0.6px] text-gray-700 w-[275px]">
            Weekly design updates with short walkthrough videos, so you and your
            devs can review and move forward on your own time.
          </p>
        </div>
        <div className="absolute left-[416px] top-[946px] w-[489px] h-[318px] rounded-xl shadow-[3px_3px_9px_0px_rgba(25,35,174,0.1)] overflow-hidden">
          <Image
            src="/images/strategy/async-loom.png"
            alt="Loom video walkthrough preview"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* What you'll notice */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[1316px] w-[678px] text-center">
          <h3 className="text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-gray-900">
            What you&apos;ll notice
          </h3>
          <p className="mt-4 text-[16px] leading-6 tracking-[-0.8px] text-gray-900">
            <strong>Clearer decisions</strong>, smoother collaboration, steadier
            shipping, and{" "}
            <strong>less energy wasted on uncertainty</strong>.
          </p>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section id="work" className="relative w-full max-w-[960px] h-[863px] bg-white overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] text-center">
          <div className="relative inline-block">
            <img
              src="/images/substrates/work.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            />
            <h2 className="relative text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
              Strategic Impact, Visualized.
            </h2>
          </div>
        </div>

        {/* Case Study 1: MovesMethod */}
        <div className="absolute left-[139px] top-[108px] w-[688px] h-[338px]">
          <div className="absolute left-[-75px] top-0 w-[368px] h-[374px] overflow-hidden">
            <Image
              src="/images/case-studies/movesmethod.png"
              alt="MovesMethod App MVP screens"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-[266px] top-0 w-[422px] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="self-start rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
                Fitness &amp; health
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-gray-900">
                  MovesMethod App MVP
                </h3>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  Turned a messy proof of concept into a premium, shippable app
                  in 8 weeks.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[176px] flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                  Challenge
                </h4>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  There was no real app yet. The &quot;POC&quot; was
                  inconsistent, key flows weren&apos;t functional end to end, and
                  there was no clear brand system.
                </p>
              </div>
              <div className="w-[223px] flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                  Impact
                </h4>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  Defined MVP scope fast, rebuilt the UX + design system, and
                  shipped the first release in 2 months. Backed the roadmap with
                  a four-digit community survey, and unlocked the next conversion
                  win: stronger social proof (
                  <strong>2,000+ Trustpilot reviews at 4.8</strong>).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2: Xero */}
        <div className="absolute left-[139px] top-[486px] w-[688px] h-[338px]">
          <div className="flex flex-col gap-8 w-[422px]">
            <div className="flex flex-col gap-4">
              <span className="self-start rounded-lg bg-brown px-[10px] py-1 text-[12px] font-medium text-white">
                Fintech, SaaS
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-gray-900">
                  Xero Guided Setup (Mobile)
                </h3>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  Unified Xero&apos;s mobile onboarding across app + web to lift
                  conversion and reduce early churn.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[176px] flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                  Challenge
                </h4>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  Major drop after sign-up (94% not buying). Post-purchase
                  onboarding was not getting users to first value.
                </p>
              </div>
              <div className="w-[239px] flex flex-col gap-2">
                <h4 className="text-[18px] font-semibold leading-[26px] tracking-[-0.8px] text-gray-900">
                  Impact
                </h4>
                <p className="text-[14px] leading-5 tracking-[-0.6px] text-gray-700">
                  Defined a measurable conversion and retention goal for mobile
                  onboarding, mapped the end-to-end funnel, and redesigned the
                  post-purchase setup so new users could reach &quot;first
                  value&quot; faster. Delivered a cohesive app + web experience
                  ready for build.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-[432px] top-[63px] w-[336px] h-[269px] overflow-hidden">
            <Image
              src="/images/case-studies/xero.png"
              alt="Xero Guided Setup mobile screens"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section
        id="pricing"
        className="relative w-full max-w-[960px] h-[772px] overflow-hidden rounded-xl bg-[#f3f4f6]"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[705px] text-center">
          <div className="relative inline-block">
            <img
              src="/images/substrates/pricing.svg"
              alt=""
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            />
            <h2 className="relative text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900 px-[14px] py-[4px]">
              Simple, Transparent Investment.
            </h2>
          </div>
          <p className="mt-4 text-[16px] leading-6 tracking-[-0.8px] text-gray-700">
            Most teams begin with a Product Audit or a monthly fractional
            partnership. Scope is defined around your stage and goals.
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[178px] flex gap-[32px] w-[896px] h-[554px]">
          {/* Product Audit Card */}
          <div className="relative w-[432px] rounded-2xl border border-[#dddfe3] bg-white">
            <div className="px-8 pt-8">
              <span className="text-[14px] font-normal uppercase tracking-[0.7px] text-gray-900">
                One-time
              </span>
              <h3 className="mt-3 text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-gray-900">
                Product Audit
              </h3>
              <p className="mt-2 text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-gray-900">
                $600 USD
              </p>
              <p className="mt-6 text-[16px] leading-6 tracking-[-0.8px] text-gray-700">
                A fast external review to surface friction points and
                priorities, with clear recommendations on what to fix first.
              </p>
              <div className="mt-6 flex flex-col gap-4 text-[14px] leading-5 tracking-[-0.6px] text-gray-900">
                <div className="flex gap-2 items-start">
                  <span className="text-gray-900 shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>
                    A structured walkthrough of your product from a new-user
                    perspective
                  </span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-gray-900 shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>Key friction points and priority fixes</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-gray-900 shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>
                    A short action plan: what to change first and why
                  </span>
                </div>
              </div>
              <div className="relative inline-block mt-6">
                <img
                  src="/images/substrates/audit-best.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full"
                  aria-hidden="true"
                />
                <p className="relative text-[14px] leading-5 tracking-[-0.6px] text-gray-900 px-[8px] py-[10px]">
                  <strong>Best for</strong>: founders who want clarity before
                  committing to ongoing work
                </p>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <a
                href="#"
                className="flex h-[40px] w-full items-center justify-center rounded-[10px] bg-gray-1 text-[14px] font-semibold text-white hover:bg-gray-700 transition-colors"
              >
                Check an example audit
              </a>
            </div>
          </div>

          {/* Fractional Partnership Card */}
          <div className="relative w-[432px] rounded-2xl bg-dark-card">
            <div className="px-8 pt-8">
              <span className="text-[14px] font-normal uppercase tracking-[0.7px] text-accent-yellow-light">
                ONGOING
              </span>
              <h3 className="mt-3 text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-white">
                Fractional Partnership
              </h3>
              <p className="mt-2 text-[22px] font-semibold leading-[30px] tracking-[-1.4px] text-white">
                From $4,000 USD/month
              </p>
              <p className="mt-6 text-[16px] leading-6 tracking-[-0.8px] text-white">
                Ongoing partner-style support across product decisions and
                execution, helping you run a real roadmap, design, and shipping
                cadence.
              </p>
              <div className="mt-6 flex flex-col gap-4 text-[14px] leading-5 tracking-[-0.6px] text-paper">
                <div className="flex gap-2 items-start">
                  <span className="text-paper shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>
                    Roadmap and priority decisions with clear trade-offs
                  </span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-paper shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>Design execution with developer-ready delivery</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-paper shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>Slack collaboration + weekly office hours</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-paper shrink-0 mt-[2px]"><IconCheck /></span>
                  <span>A steady cadence that keeps shipping moving</span>
                </div>
              </div>
              <div className="relative inline-block mt-6">
                <img
                  src="/images/substrates/partner-best.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full"
                  aria-hidden="true"
                />
                <p className="relative text-[14px] leading-5 tracking-[-0.6px] text-white px-[8px] py-[10px]">
                  <strong>Best for</strong>: teams who need a Design Lead
                  mindset without hiring full-time
                </p>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <a
                href="#book"
                className="flex h-[40px] w-full items-center justify-center rounded-[10px] bg-accent-yellow-light text-[14px] font-semibold text-gray-900 hover:brightness-95 transition"
              >
                Book a 15-minute intro
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        id="book"
        className="relative w-full max-w-[960px] h-[260px] bg-white border-b border-gray-100"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[705px] flex flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-semibold leading-9 tracking-[-0.6px] text-gray-900">
            Book a 15-minute intro to see if it&apos;s worth it
          </h2>
          <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-700 w-[525px]">
            Share your current stage and your bottleneck. I&apos;ll help you
            quickly assess what matters most and how we&apos;d start.
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[180px] w-[524px]">
          <a
            href="#"
            className="flex h-[40px] w-full items-center justify-center rounded-[10px] bg-accent-yellow-light text-[14px] font-semibold text-gray-900 hover:brightness-95 transition"
          >
            Book a 15-minute intro
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full max-w-[960px] h-[96px] flex items-center justify-between px-[60px]">
        <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-500">
          © 2026 Bearliu.com. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="size-6 flex items-center justify-center hover:opacity-70 transition-opacity">
            <img src="/images/social/linkedin.svg" alt="LinkedIn" className="size-6" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="size-6 hover:opacity-70 transition-opacity">
            <img src="/images/social/x.svg" alt="X" className="size-6" />
          </a>
          <a href="mailto:bear@beartalking.com" className="size-6 hover:opacity-70 transition-opacity">
            <img src="/images/social/email.svg" alt="Email" className="size-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}
