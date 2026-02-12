"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full max-w-[960px] mx-auto px-5 md:px-8 lg:px-0">
      <div className="flex items-center justify-between h-[80px]">
        <div className="flex items-center gap-3">
          <div className="relative size-8 overflow-hidden rounded-[20px]">
            <img src="/images/avatar.svg" alt="Bear Liu" className="size-full" />
          </div>
          <span className="text-[16px] tracking-[-0.8px] text-gray-700">
            Fractional Design Partner
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
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
            href="#book"
            onClick={() => setOpen(false)}
            className="flex h-[44px] items-center justify-center rounded-lg bg-accent-yellow text-[14px] font-semibold text-[#1c190d]"
          >
            Book Intro
          </a>
        </div>
      )}
    </nav>
  );
}
