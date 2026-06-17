"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import MobileDrawer from "./MobileDrawer";

interface NavbarProps {
  onBookDemo: () => void;
  transparentOnMount?: boolean;
}

function NovaMark() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <rect width="32" height="32" rx="8" fill="#1E3A8A" />
      <path d="M9 23V9l14 14V9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar({ onBookDemo, transparentOnMount = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = transparentOnMount && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          dark
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <NovaMark />
            <span
              className={`hidden sm:block text-sm font-semibold tracking-tight transition-colors duration-300 ${
                dark ? "text-white" : "text-[#111827]"
              }`}
            >
              Cadence<span className="font-bold">Nova</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7 ml-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] transition-colors duration-300 ${
                  dark
                    ? "text-white/80 hover:text-white"
                    : "text-neutral-600 hover:text-[#111827]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="ml-auto flex items-center gap-4">
            <Link
              href="#"
              className={`hidden md:block text-[14px] transition-colors duration-300 ${
                dark ? "text-white/70 hover:text-white" : "text-neutral-600 hover:text-[#111827]"
              }`}
            >
              Login
            </Link>

            <button
              onClick={onBookDemo}
              className={`hidden md:flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-[13px] font-medium transition-colors duration-300 ${
                dark
                  ? "bg-white text-[#0b0f1a] hover:bg-white/90"
                  : "bg-[#111827] text-white hover:bg-[#1f2937]"
              }`}
            >
              Book a Demo
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  dark ? "bg-[#0b0f1a]/10" : "bg-white/20"
                }`}
              >
                <ChevronRight size={11} strokeWidth={2.5} />
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 rounded-md transition-colors ${
                dark ? "text-white hover:bg-white/10" : "text-neutral-600 hover:bg-neutral-100"
              }`}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M3 5h16M3 11h16M3 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onBookDemo={onBookDemo}
      />
    </>
  );
}
