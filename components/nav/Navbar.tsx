"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import MobileDrawer from "./MobileDrawer";

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-sm transition-all duration-200 ${
          scrolled ? "border-b border-divider" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

          {/* Wordmark */}
          <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
            <span className="text-nova-indigo font-light text-xl tracking-tight">Cadence</span>
            <span className="text-nova-indigo font-extrabold text-xl tracking-tight">Nova</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#374151] hover:text-[#111827] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="#" className="text-sm font-medium text-[#374151] hover:text-[#111827] transition-colors">
              Login
            </Link>
            <button
              onClick={onBookDemo}
              className="bg-[#111827] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1f2937] transition-colors"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[#374151] hover:bg-nova-frost transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
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
