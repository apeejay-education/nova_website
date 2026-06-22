"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Command } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import MobileDrawer from "./MobileDrawer";
import NovaLogo from "@/components/ui/NovaLogo";

interface NavbarProps {
  onBookDemo: () => void;
  transparentOnMount?: boolean;
}

export default function Navbar({ onBookDemo, transparentOnMount = false }: NavbarProps) {
  const [scrolled,    setScrolled]    = useState(false);
  const [drawerOpen,  setDrawerOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = transparentOnMount && !scrolled;

  return (
    <>
      {/* Fixed outer shell — always full-width, always on top */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">

        <AnimatePresence initial={false} mode="wait">

          {/* ── TRANSPARENT STATE (at top of page) ── */}
          {dark && (
            <motion.header
              key="transparent"
              className="w-full pointer-events-auto h-[72px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center">
                <Link href="/" className="flex items-center shrink-0">
                  <NovaLogo dark={true} />
                </Link>

                <nav className="hidden md:flex items-center gap-7 ml-10">
                  {NAV_ITEMS.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[14px] text-white/75 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="ml-auto flex items-center gap-5">
                  {/* ⌘K hint */}
                  <button
                    onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
                    className="hidden md:flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-[12px]"
                  >
                    <Command size={12} />
                    <span className="font-mono">K</span>
                  </button>

                  <Link href="#" className="hidden md:block text-[14px] text-white/70 hover:text-white transition-colors">
                    Login
                  </Link>

                  <button
                    onClick={onBookDemo}
                    className="hidden md:flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-[13px] font-medium bg-white text-[#0b0f1a] hover:bg-white/90 transition-colors"
                  >
                    Book a Demo
                    <span className="w-6 h-6 rounded-full bg-[#0b0f1a]/10 flex items-center justify-center">
                      <ChevronRight size={11} strokeWidth={2.5} />
                    </span>
                  </button>

                  {/* Mobile hamburger */}
                  <button
                    className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                    onClick={() => setDrawerOpen(true)}
                    aria-label="Open menu"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.header>
          )}

          {/* ── FLOATING PILL STATE (scrolled) ── */}
          {!dark && (
            <motion.header
              key="pill"
              className="pointer-events-auto mt-3 w-full"
              style={{ maxWidth: 920, paddingLeft: 16, paddingRight: 16 }}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="w-full h-14 flex items-center px-4 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0 mr-6">
                  <NovaLogo dark={false} />
                </Link>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-6 flex-1">
                  {NAV_ITEMS.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[13.5px] text-neutral-500 hover:text-[#111827] transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Right cluster */}
                <div className="ml-auto flex items-center gap-3 shrink-0">
                  {/* ⌘K pill */}
                  <button
                    onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
                    className="hidden md:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-all"
                    style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <Command size={11} />
                    <span className="font-mono text-[10px]">K</span>
                  </button>

                  <Link
                    href="#"
                    className="hidden md:block text-[13px] text-neutral-500 hover:text-[#111827] transition-colors font-medium"
                  >
                    Login
                  </Link>

                  <button
                    onClick={onBookDemo}
                    className="hidden md:flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 text-[13px] font-medium text-white transition-all hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                      boxShadow: "0 2px 12px rgba(37,99,235,0.35)",
                    }}
                  >
                    Book a Demo
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <ChevronRight size={11} strokeWidth={2.5} />
                    </span>
                  </button>

                  {/* Mobile hamburger */}
                  <button
                    className="md:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
                    onClick={() => setDrawerOpen(true)}
                    aria-label="Open menu"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.header>
          )}

        </AnimatePresence>
      </div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onBookDemo={onBookDemo}
      />
    </>
  );
}
