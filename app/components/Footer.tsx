// Shared footer for sub-pages (blog index + posts). Mirrors the homepage
// footer. Email swap to hi@bearliu.com happens in Phase 14.2.
export default function Footer() {
  return (
    <footer className="w-full max-w-[960px] flex flex-col md:flex-row items-center justify-between gap-4 px-5 md:px-8 lg:px-[60px] py-6 lg:py-8">
      <p className="text-[16px] leading-6 tracking-[-0.8px] text-gray-500">
        © 2026 Bearliu.com. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/bearliu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="size-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img src="/images/social/linkedin.svg" alt="" className="size-6" />
        </a>
        <a href="https://x.com/bearliu" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="size-6 hover:opacity-70 transition-opacity">
          <img src="/images/social/x.svg" alt="" className="size-6" />
        </a>
        <a href="mailto:bear@beartalking.com" aria-label="Email" className="size-6 hover:opacity-70 transition-opacity">
          <img src="/images/social/email.svg" alt="" className="size-6" />
        </a>
      </div>
    </footer>
  );
}
