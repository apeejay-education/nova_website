"use client";

import { useState } from "react";
import { Users, Banknote, Heart, Briefcase, GitBranch, Package, Check } from "lucide-react";
import { APPSTORE_MODULES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";

// ─── Per-module metadata ──────────────────────────────────────────────────────

const APP_ICONS = [Users, Banknote, Heart, Briefcase, GitBranch, Package] as const;

const MODULE_META = [
  {
    from:    "#1e3a8a",
    to:      "#0f1e55",
    bullets: [
      "Biometric & app-based staff attendance, daily",
      "Leave requests, approvals & balance tracking",
      "Performance review cycles & appraisal reports",
    ],
  },
  {
    from:    "#065f46",
    to:      "#022c22",
    bullets: [
      "One-click salary processing for all staff",
      "PF, ESI & TDS compliance built-in",
      "Digital payslips sent directly to staff phones",
    ],
  },
  {
    from:    "#581c87",
    to:      "#2e0a4f",
    bullets: [
      "Student wellness check-ins & mood tracking",
      "Counsellor session logs & follow-up reminders",
      "Early intervention alerts for at-risk students",
    ],
  },
  {
    from:    "#92400e",
    to:      "#451a03",
    bullets: [
      "Job postings & applicant pipeline in one place",
      "Interview scheduling with automated reminders",
      "Offer letters & onboarding document workflows",
    ],
  },
  {
    from:    "#1e3a8a",
    to:      "#312e81",
    bullets: [
      "Custom multi-step approval flows for any process",
      "Leave, procurement & event automation",
      "Role-based routing — zero IT configuration",
    ],
  },
  {
    from:    "#134e4a",
    to:      "#042f2e",
    bullets: [
      "Full catalogue of lab, library & office assets",
      "Issue & return tracking with digital logs",
      "Low-stock alerts & reorder management",
    ],
  },
] as const;

// ─── Header stats ─────────────────────────────────────────────────────────────

const HEADER_STATS = [
  { num: "6",      label: "Purpose-built\nadd-ons" },
  { num: "₹0",    label: "Activation fee\nper module" },
  { num: "Anytime", label: "Plug in as\nyour school grows" },
] as const;

// ─── Section ──────────────────────────────────────────────────────────────────

export default function AppStoreSection() {
  const [active,    setActive]    = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [fading,    setFading]    = useState(false);

  function handleSelect(i: number) {
    if (i === active || fading) return;
    setFading(true);
    setTimeout(() => {
      setDisplayed(i);
      setActive(i);
      setFading(false);
    }, 200);
  }

  const mod     = APPSTORE_MODULES[displayed];
  const meta    = MODULE_META[displayed];
  const ModIcon = APP_ICONS[displayed];

  return (
    <section className="bg-[#f5f2ee] py-24 px-6 overflow-hidden relative">
      <JourneyBackground tone="light" nodes={[
        { icon: "Users",     x: 4,  y: 28, delay: 0   },
        { icon: "Banknote",  x: 20, y: 80, delay: 100 },
        { icon: "Heart",     x: 42, y: 14, delay: 200 },
        { icon: "Briefcase", x: 60, y: 76, delay: 300 },
        { icon: "GitBranch", x: 78, y: 22, delay: 400 },
        { icon: "Package",   x: 94, y: 65, delay: 500 },
      ]} paths={[
        "M 4,28 C 10,50 15,68 20,80",
        "M 20,80 C 28,54 35,28 42,14",
        "M 42,14 C 50,40 55,62 60,76",
        "M 60,76 C 67,52 73,34 78,22",
        "M 78,22 C 84,40 90,55 94,65",
      ]} />
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <AnimateIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">

          {/* Left: eyebrow + headline + pull-quote */}
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold tracking-widest text-[#2563EB] uppercase mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Nova AppStore
            </p>
            <h2 className="text-[40px] lg:text-[52px] font-medium tracking-tight text-[#111827] leading-tight mb-4">
              Extend Nova for your{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                  fontStyle:  "italic",
                  fontWeight: 400,
                }}
              >
                institution.
              </span>
            </h2>
            <p
              className="text-[22px] lg:text-[26px] text-neutral-400 leading-snug"
              style={{
                fontFamily: "var(--font-cormorant), 'Georgia', serif",
                fontStyle:  "italic",
              }}
            >
              &ldquo;Your school grows. Nova grows with it.&rdquo;
            </p>
          </div>

          {/* Right: 3 stats */}
          <div className="flex items-start gap-8 shrink-0 pb-1">
            {HEADER_STATS.map(({ num, label }, i) => (
              <div key={num} className="flex items-start gap-8">
                {i > 0 && <div className="w-px h-12 bg-neutral-300 self-center" />}
                <div>
                  <div
                    className="text-[36px] font-bold text-[#111827] leading-none tabular-nums"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {num}
                  </div>
                  <p
                    className="text-[11px] text-neutral-400 mt-1.5 font-medium uppercase tracking-wider whitespace-pre-line"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* ── Featured panel ── */}
        <AnimateIn delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">

            {/* Video — large */}
            <div
              className="lg:col-span-7 rounded-2xl overflow-hidden relative"
              style={{
                background: `linear-gradient(150deg, ${meta.from}, ${meta.to})`,
                minHeight: "400px",
              }}
            >
              <video
                key={mod.id}
                className="absolute inset-0 w-full h-full object-cover"
                src={`/assets/videos/appstore-${mod.id}.mp4`}
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  <ModIcon size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px] leading-none">{mod.name}</p>
                  <p className="text-white/55 text-[11px] mt-0.5"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >ADD-ON</p>
                </div>
              </div>
            </div>

            {/* Copy panel */}
            <div
              className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-8 flex flex-col"
              style={{
                opacity:    fading ? 0 : 1,
                transform:  fading ? "translateY(6px)" : "translateY(0)",
                transition: "opacity 200ms ease-out, transform 200ms ease-out",
              }}
            >
              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
                >
                  <ModIcon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold text-[#111827] leading-tight">{mod.name}</p>
                  <span
                    className="text-[10px] font-semibold text-[#2563EB] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Add-on
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-neutral-500 leading-relaxed mb-6">
                {mod.description}
              </p>

              {/* 3 bullets */}
              <ul className="space-y-3 mb-8">
                {meta.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#2563EB]" />
                    </div>
                    <span className="text-[13px] text-[#374151] leading-snug">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA + best for */}
              <div className="mt-auto space-y-3">
                <p className="text-[12px] font-medium text-neutral-400">
                  Best for: <span className="text-[#2563EB]">{mod.bestFor}</span>
                </p>
                <a
                  href="/book-demo"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB] border border-[#2563EB]/30 rounded-xl px-5 py-2.5 hover:bg-[#2563EB]/5 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>

          </div>
        </AnimateIn>

        {/* ── Module selector strip ── */}
        <AnimateIn delay={0.14}>
          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {APPSTORE_MODULES.map((m, i) => {
              const Icon     = APP_ICONS[i];
              const isActive = i === active;
              return (
                <button
                  key={m.id}
                  onClick={() => handleSelect(i)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[#111827] text-white border-[#111827] shadow-md"
                      : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:text-neutral-700"
                  }`}
                >
                  <Icon
                    size={14}
                    className={isActive ? "text-white" : "text-[#2563EB]"}
                  />
                  {m.name}
                </button>
              );
            })}
          </div>
        </AnimateIn>

        {/* Footer link */}
        <AnimateIn delay={0.18} className="text-center mt-10">
          <a
            href="/book-demo"
            className="text-[13px] font-medium text-[#2563EB] hover:underline underline-offset-2"
          >
            Want more? Book a Demo to explore the full AppStore →
          </a>
        </AnimateIn>

      </div>
    </section>
  );
}
