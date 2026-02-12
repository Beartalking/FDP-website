"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
    <nav className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0">
      <div className="flex items-center justify-between h-[80px]">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative size-8 overflow-hidden rounded-[20px] transition-transform duration-200 group-hover:scale-110">
            <img src="/images/avatar.svg" alt="Bear Liu" className="size-full" />
          </div>
          <span className="text-[16px] tracking-[-0.8px] text-gray-700 transition-colors duration-200 group-hover:text-gray-900">
            Fractional Design Partner
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#strategy" className="relative text-[16px] tracking-[-0.8px] text-gray-500 hover:text-gray-900 transition-colors after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full">
            Strategy
          </a>
          <a href="#work" className="relative text-[16px] tracking-[-0.8px] text-gray-500 hover:text-gray-900 transition-colors after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full">
            Work
          </a>
          <a href="#pricing" className="relative text-[16px] tracking-[-0.8px] text-gray-500 hover:text-gray-900 transition-colors after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full">
            Pricing
          </a>
          <a
            href="https://calendly.com/bearliu/15-mins-fdp-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[44px] w-[120px] items-center justify-center rounded-lg bg-accent-yellow text-[14px] font-semibold text-[#1c190d] hover:brightness-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
          >
            Book Intro
          </a>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-gray-900 transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-gray-900 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-gray-900 transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden flex flex-col gap-4 pb-6">
          <a href="#strategy" onClick={() => setOpen(false)} className="text-[16px] tracking-[-0.8px] text-gray-700 py-2">
            Strategy
          </a>
          <a href="#work" onClick={() => setOpen(false)} className="text-[16px] tracking-[-0.8px] text-gray-700 py-2">
            Work
          </a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-[16px] tracking-[-0.8px] text-gray-700 py-2">
            Pricing
          </a>
          <a
            href="https://calendly.com/bearliu/15-mins-fdp-intro"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex h-[44px] items-center justify-center rounded-lg bg-accent-yellow text-[14px] font-semibold text-[#1c190d]"
          >
            Book Intro
          </a>
        </div>
      )}
    </nav>
    </div>
  );
}
