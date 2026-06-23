"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { NAV_SOLUTIONS } from "@/lib/constants";

interface HeroNavbarProps {
  onBookDemo: () => void;
}

// Nova geometric mark — abstract "N" built from 2 diagonal bars
function NovaMark() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
      <rect width="32" height="32" rx="8" fill="#1E3A8A" />
      <path d="M9 23V9l14 14V9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroNavbar({ onBookDemo }: HeroNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center pt-4 sm:pt-6 px-3 sm:px-4">
      <div className="relative bg-white rounded-full shadow-sm border border-neutral-200 pl-2 pr-2 py-2 w-full max-w-[760px]">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-1 shrink-0">
            <NovaMark />
            <span className="hidden sm:block text-sm font-semibold text-[#111827] tracking-tight">
              Cadence<span className="font-bold">Nova</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link href="/platform" className="flex items-center gap-0.5 text-[14px] text-neutral-700 hover:text-[#111827] transition-colors">
              Platform
              <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#111827] inline-block" />
            </Link>
            <Link href="/appstore" className="text-[14px] text-neutral-700 hover:text-[#111827] transition-colors">
              AppStore
            </Link>
            <Link href="/cadence-care" className="text-[14px] text-neutral-700 hover:text-[#111827] transition-colors">
              Cadence Care
            </Link>
            <Link href="/pricing" className="flex items-center gap-0.5 text-[14px] font-medium text-[#2563EB]">
              Pricing
              <ChevronDown size={14} strokeWidth={3.5} className="text-[#2563EB]" />
            </Link>
          </nav>

          {/* Right cluster */}
          <div className="ml-auto flex items-center gap-2">
            <Link
              href="#"
              className="hidden md:block text-[14px] text-neutral-700 hover:text-[#111827] transition-colors px-3"
            >
              Login
            </Link>
            <button
              onClick={onBookDemo}
              className="flex items-center gap-2 bg-[#111827] text-white rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 text-[13px] font-medium hover:bg-[#1f2937] transition-colors"
            >
              <span className="hidden sm:inline">Book a Demo</span>
              <span className="sm:hidden">Book demo</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ChevronRight size={11} strokeWidth={2.5} />
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-1 p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-3 z-20">
            <nav className="flex flex-col gap-1">
              {NAV_SOLUTIONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-[#111827] hover:bg-neutral-50 rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-neutral-500 hover:text-[#111827] hover:bg-neutral-50 rounded-xl transition-colors"
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
