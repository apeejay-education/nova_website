"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command, Calendar, Play, Mail,
  Cpu, Sparkles, Terminal, Package, Heart,
  DollarSign, FileText, Phone, ArrowRight,
} from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  sub: string;
  icon: React.ElementType;
  action: "book-demo" | "video" | "scroll" | "navigate" | "external";
  target?: string;
  shortcut?: string;
  color?: string;
}

const COMMAND_GROUPS: { group: string; items: CommandItem[] }[] = [
  {
    group: "Quick Actions",
    items: [
      {
        id: "book-demo",
        label: "Book a Demo",
        sub: "30-min walkthrough, tailored to your school",
        icon: Calendar,
        action: "book-demo",
        shortcut: "↵",
        color: "#2563EB",
      },
      {
        id: "watch-video",
        label: "Watch Product Video",
        sub: "See Nova in action — 3 min overview",
        icon: Play,
        action: "video",
        color: "#7C3AED",
      },
      {
        id: "contact-sales",
        label: "Contact Sales",
        sub: "Talk to our team directly",
        icon: Mail,
        action: "external",
        target: "mailto:nova@cadenceinfotech.com",
        color: "#16A34A",
      },
    ],
  },
  {
    group: "Explore Nova",
    items: [
      {
        id: "core-platform",
        label: "Core Platform",
        sub: "8 modules — SIS, Fees, Attendance & more",
        icon: Cpu,
        action: "scroll",
        target: "section-platform",
        color: "#2563EB",
      },
      {
        id: "nova-ai",
        label: "Nova AI",
        sub: "Ask Nova — natural language queries on live data",
        icon: Sparkles,
        action: "scroll",
        target: "section-ai",
        color: "#7C3AED",
      },
      {
        id: "nova-command",
        label: "Nova Command ⌘K",
        sub: "Keyboard-first navigation for power users",
        icon: Terminal,
        action: "scroll",
        target: "section-nova-command",
        color: "#2563EB",
      },
      {
        id: "appstore",
        label: "Nova AppStore",
        sub: "HRMS, Payroll, Pulse, Hire and more",
        icon: Package,
        action: "scroll",
        target: "section-appstore",
        color: "#7C3AED",
      },
      {
        id: "cadence-care",
        label: "Cadence Care",
        sub: "Managed onboarding & support — Standard & Pro",
        icon: Heart,
        action: "scroll",
        target: "section-cadence-care",
        color: "#E91E8C",
      },
    ],
  },
  {
    group: "Other Pages",
    items: [
      {
        id: "pricing",
        label: "Pricing",
        sub: "From ₹35/student/month",
        icon: DollarSign,
        action: "navigate",
        target: "/pricing",
        color: "#16A34A",
      },
      {
        id: "resources",
        label: "Resources",
        sub: "Guides, case studies, webinars",
        icon: FileText,
        action: "navigate",
        target: "/resources",
        color: "#64748B",
      },
      {
        id: "contact",
        label: "Contact",
        sub: "Get in touch with our team",
        icon: Phone,
        action: "navigate",
        target: "/contact",
        color: "#64748B",
      },
    ],
  },
];

interface Props {
  onBookDemo: () => void;
  onWatchVideo: () => void;
}

export default function CommandPalette({ onBookDemo, onWatchVideo }: Props) {
  const [open, setOpen]         = useState(false);
  const [query, setQuery]       = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef                = useRef<HTMLInputElement>(null);
  const router                  = useRouter();

  // ⌘K / Ctrl+K to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const filteredGroups = COMMAND_GROUPS.map(g => ({
    ...g,
    items: g.items.filter(
      item =>
        !query ||
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.sub.toLowerCase().includes(query.toLowerCase()),
    ),
  })).filter(g => g.items.length > 0);

  const flatItems = filteredGroups.flatMap(g => g.items);

  // Build id→globalIndex map fresh each render
  const idxMap = new Map<string, number>();
  flatItems.forEach((item, i) => idxMap.set(item.id, i));

  useEffect(() => { setActiveIdx(0); }, [query]);

  const execute = useCallback((item: CommandItem) => {
    setOpen(false);
    switch (item.action) {
      case "book-demo":
        setTimeout(onBookDemo, 160);
        break;
      case "video":
        setTimeout(onWatchVideo, 160);
        break;
      case "scroll":
        setTimeout(() => {
          document.getElementById(item.target!)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 160);
        break;
      case "navigate":
        router.push(item.target!);
        break;
      case "external":
        window.location.href = item.target!;
        break;
    }
  }, [onBookDemo, onWatchVideo, router]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, flatItems.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && flatItems[activeIdx]) { e.preventDefault(); execute(flatItems[activeIdx]); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flatItems, activeIdx, execute]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[110] flex items-start justify-center pt-[14vh] px-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
          />

          {/* Palette panel */}
          <motion.div
            className="relative w-full max-w-[560px] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "rgba(11, 15, 26, 0.97)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.70), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 80px rgba(37,99,235,0.12)",
              backdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Search bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07] shrink-0">
              <Command size={14} className="text-[#2563EB] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search Nova — features, pages, actions…"
                className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/30 outline-none"
              />
              <kbd className="text-[9px] text-white/20 font-mono bg-white/[0.05] border border-white/[0.08] rounded px-1.5 py-0.5 shrink-0">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="overflow-y-auto py-1" style={{ maxHeight: 380 }}>
              {flatItems.length === 0 ? (
                <p className="px-4 py-8 text-center text-[12px] text-white/30">
                  No results for &ldquo;{query}&rdquo;
                </p>
              ) : (
                filteredGroups.map(({ group, items }) => (
                  <div key={group}>
                    <p className="px-4 pt-3 pb-1 text-[9px] font-semibold tracking-widest uppercase text-white/25">
                      {group}
                    </p>
                    {items.map(item => {
                      const Icon     = item.icon;
                      const gIdx     = idxMap.get(item.id)!;
                      const isActive = gIdx === activeIdx;
                      return (
                        <button
                          key={item.id}
                          onMouseEnter={() => setActiveIdx(gIdx)}
                          onClick={() => execute(item)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                          style={{ background: isActive ? "rgba(255,255,255,0.055)" : "transparent" }}
                        >
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: (item.color ?? "#2563EB") + "22" }}
                          >
                            <Icon size={13} style={{ color: item.color ?? "#2563EB" }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[12px] font-medium text-white leading-tight">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-white/38 mt-0.5 truncate">
                              {item.sub}
                            </div>
                          </div>
                          {item.shortcut ? (
                            <kbd className="text-[9px] text-white/30 bg-white/[0.05] border border-white/[0.08] rounded px-1.5 py-0.5 font-mono shrink-0">
                              {item.shortcut}
                            </kbd>
                          ) : isActive ? (
                            <ArrowRight size={12} className="text-white/30 shrink-0" />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-white/[0.07] flex items-center gap-4 shrink-0">
              {[
                { key: "↑↓", label: "navigate" },
                { key: "↵",  label: "select"   },
                { key: "ESC",label: "close"     },
              ].map(({ key, label }) => (
                <span key={label} className="text-[9px] text-white/20 flex items-center gap-1">
                  <kbd className="bg-white/[0.05] border border-white/[0.08] rounded px-1 py-0.5 font-mono">
                    {key}
                  </kbd>
                  {label}
                </span>
              ))}
              <span className="ml-auto text-[9px] text-white/15 font-medium tracking-wide">
                Cadence Nova
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
