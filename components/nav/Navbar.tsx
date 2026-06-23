"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Command, ChevronDown, School, Globe, Building2, ArrowUpRight } from "lucide-react";
import { NAV_SOLUTION_GROUPS, NAV_RESOURCES, NAV_COMPANY, CLIENT_PORTAL_LINK } from "@/lib/constants";
import MobileDrawer from "./MobileDrawer";
import NovaLogo from "@/components/ui/NovaLogo";

interface NavbarProps {
  onBookDemo: () => void;
  transparentOnMount?: boolean;
}

const SOLUTION_ICONS: Record<string, React.ElementType> = {
  school: School,
  globe: Globe,
  building: Building2,
};

// ── Solutions mega-menu ──────────────────────────────────────────────────────

function SolutionsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 mt-2 w-[480px] rounded-2xl overflow-hidden shadow-2xl"
      style={{
        transform: "translateX(-50%)",
        background: "rgba(255,255,255,0.98)",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="px-3 py-3">
        {NAV_SOLUTION_GROUPS.map((group, gi) => (
          <div key={group.heading}>
            {gi > 0 && <div className="mx-3 my-2" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />}
            <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 px-3 pb-1.5 pt-1">
              {group.heading}
            </p>
            {group.items.map((item) => {
          const Icon = SOLUTION_ICONS[item.icon] ?? School;
          const isComingSoon = item.status === "coming-soon";
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-neutral-50 group"
            >
              <div
                className="mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: isComingSoon ? "rgba(0,0,0,0.04)" : "rgba(37,99,235,0.08)",
                  border: isComingSoon ? "1px solid rgba(0,0,0,0.07)" : "1px solid rgba(37,99,235,0.15)",
                }}
              >
                <Icon size={15} style={{ color: isComingSoon ? "#9CA3AF" : "#2563EB" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[13px] font-semibold"
                    style={{ color: isComingSoon ? "#9CA3AF" : "#111827" }}
                  >
                    {item.label}
                  </span>
                  {isComingSoon && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase"
                      style={{
                        background: "rgba(245,158,11,0.12)",
                        color: "#D97706",
                        border: "1px solid rgba(245,158,11,0.25)",
                      }}
                    >
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">{item.description}</p>
              </div>
              {!isComingSoon && (
                <ChevronRight
                  size={13}
                  className="mt-1 shrink-0 text-neutral-300 group-hover:text-[#2563EB] transition-colors"
                />
              )}
            </Link>
          );
        })}
          </div>
        ))}
      </div>
      <div
        className="px-6 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}
      >
        <p className="text-[11px] text-neutral-400">
          All modules included · Starts at{" "}
          <span className="font-semibold text-[#2563EB]">₹35/student/month</span>
        </p>
        <Link href="/pricing" onClick={onClose} className="text-[11px] font-semibold text-[#2563EB] hover:underline">
          See pricing →
        </Link>
      </div>
    </motion.div>
  );
}

// ── Simple dropdown ──────────────────────────────────────────────────────────

function SimpleDropdown({
  items,
  onClose,
}: {
  items: readonly { label: string; href: string; description: string; external?: boolean }[];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full right-0 mt-2 w-64 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.98)",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="p-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-neutral-50 group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-semibold text-neutral-700 group-hover:text-[#111827]">
                  {item.label}
                </span>
                {item.external && (
                  <ArrowUpRight size={11} className="text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                )}
              </div>
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// ── Nav link sets (shared logic, two visual variants) ────────────────────────

const NAV_STRUCTURE = [
  { key: "solutions", label: "Solutions", href: null },
  { key: "pricing",   label: "Pricing",   href: "/pricing" },
  { key: "resources", label: "Resources", href: null },
  { key: "company",   label: "Company",   href: null },
] as const;

function NavLinks({
  activeMenu,
  setActiveMenu,
  closeMenu,
  dark,
}: {
  activeMenu: string | null;
  setActiveMenu: (m: string | null) => void;
  closeMenu: () => void;
  dark: boolean;
}) {
  const baseCls = dark
    ? "text-[14px] text-white/75 hover:text-white transition-colors duration-200"
    : "text-[13.5px] text-neutral-500 hover:text-[#111827] transition-colors duration-200 font-medium";
  const chevronCls = dark ? "text-white/50" : "text-neutral-400";

  return (
    <nav className={`hidden md:flex items-center ${dark ? "gap-7 ml-10" : "gap-6 flex-1"}`}>
      {NAV_STRUCTURE.map((item) => {
        const hasDropdown = item.href === null;
        const isActive = activeMenu === item.key;
        return (
          <div key={item.key} className="relative">
            {hasDropdown ? (
              <button
                onClick={() => setActiveMenu(isActive ? null : item.key)}
                className={`flex items-center gap-1 ${baseCls}`}
              >
                {item.label}
                <ChevronDown
                  size={dark ? 13 : 12}
                  className={`${chevronCls} transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                />
              </button>
            ) : (
              <Link href={item.href!} className={baseCls}>
                {item.label}
              </Link>
            )}
            <AnimatePresence>
              {isActive && item.key === "solutions" && (
                <SolutionsMegaMenu onClose={closeMenu} />
              )}
              {isActive && item.key === "resources" && (
                <SimpleDropdown items={NAV_RESOURCES} onClose={closeMenu} />
              )}
              {isActive && item.key === "company" && (
                <SimpleDropdown items={NAV_COMPANY} onClose={closeMenu} />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

// ── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar({ onBookDemo, transparentOnMount = false }: NavbarProps) {
  const [scrolled,   setScrolled]   = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveMenu(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const dark = transparentOnMount && !scrolled;
  const closeMenu = () => setActiveMenu(null);

  return (
    <>
      <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <AnimatePresence initial={false} mode="wait">

          {/* ── TRANSPARENT STATE ── */}
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

                <NavLinks
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  closeMenu={closeMenu}
                  dark={true}
                />

                <div className="ml-auto flex items-center gap-5">
                  <button
                    onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
                    className="hidden md:flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-[12px]"
                  >
                    <Command size={12} />
                    <span className="font-mono">K</span>
                  </button>

                  <Link
                    href={CLIENT_PORTAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    Client Portal
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

          {/* ── FLOATING PILL STATE ── */}
          {!dark && (
            <motion.header
              key="pill"
              className="pointer-events-auto mt-3 w-full"
              style={{ maxWidth: 980, paddingLeft: 16, paddingRight: 16 }}
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
                <Link href="/" className="flex items-center shrink-0 mr-6">
                  <NovaLogo dark={false} />
                </Link>

                <NavLinks
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  closeMenu={closeMenu}
                  dark={false}
                />

                <div className="ml-auto flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
                    className="hidden md:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-all"
                    style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <Command size={11} />
                    <span className="font-mono text-[10px]">K</span>
                  </button>

                  <Link
                    href={CLIENT_PORTAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block text-[13px] text-neutral-500 hover:text-[#111827] transition-colors font-medium"
                  >
                    Client Portal
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
