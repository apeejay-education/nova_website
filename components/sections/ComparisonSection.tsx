"use client";

import { motion } from "framer-motion";
import {
  Package, Sparkles, MessageSquare, Command,
  HeartHandshake, DollarSign, Smartphone,
  CheckCircle2, XCircle,
  GraduationCap, BookOpen, Bus, Bell, Users,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { COMPARISON_SECTION, COMPARISON_ROWS } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

const FEATURE_ICONS: LucideIcon[] = [
  Package, Sparkles, MessageSquare, Command,
  HeartHandshake, DollarSign, Smartphone,
];

const FLOAT_ICONS: { Icon: LucideIcon; style: CSSProperties; delay: number }[] = [
  { Icon: GraduationCap, style: { top: "8%",  right: -20 }, delay: 0.1 },
  { Icon: BookOpen,      style: { top: "28%", left:  -20 }, delay: 0.3 },
  { Icon: Bus,           style: { top: "50%", right: -20 }, delay: 0.5 },
  { Icon: Bell,          style: { top: "70%", left:  -20 }, delay: 0.7 },
  { Icon: Users,         style: { top: "88%", right: -20 }, delay: 0.9 },
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#f5f2ee] py-24 px-6 relative overflow-hidden">

      {/* ── Split-world background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Left half: fragmented / broken world */}
        <svg
          className="absolute left-0 top-0 h-full"
          style={{ width: "50%" }}
          viewBox="0 0 720 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <line x1="80"  y1="80"  x2="220" y2="160" stroke="rgba(160,140,110,0.18)" strokeWidth="1.5" strokeDasharray="8 6" />
          <line x1="260" y1="50"  x2="380" y2="130" stroke="rgba(160,140,110,0.12)" strokeWidth="1"   strokeDasharray="4 9" />
          <line x1="100" y1="220" x2="280" y2="330" stroke="rgba(160,140,110,0.16)" strokeWidth="1.5" strokeDasharray="7 5" />
          <line x1="350" y1="200" x2="460" y2="290" stroke="rgba(160,140,110,0.10)" strokeWidth="1"   strokeDasharray="3 8" />
          <line x1="50"  y1="400" x2="190" y2="490" stroke="rgba(160,140,110,0.18)" strokeWidth="1.5" strokeDasharray="8 5" />
          <line x1="220" y1="440" x2="400" y2="560" stroke="rgba(160,140,110,0.12)" strokeWidth="1"   strokeDasharray="5 7" />
          <line x1="310" y1="620" x2="510" y2="730" stroke="rgba(160,140,110,0.14)" strokeWidth="1"   strokeDasharray="4 6" />
          <line x1="90"  y1="660" x2="210" y2="760" stroke="rgba(160,140,110,0.10)" strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M190,270 L230,250 L260,278 L222,300 Z" stroke="rgba(160,140,110,0.14)" strokeWidth="1" fill="none" />
          <path d="M410,460 L452,440 L466,470 L426,492 Z" stroke="rgba(160,140,110,0.12)" strokeWidth="1" fill="none" />
          <path d="M75,580 L108,564 L122,588 L88,604 Z"   stroke="rgba(160,140,110,0.10)" strokeWidth="1" fill="none" />
          <path d="M510,110 L530,126 L518,148 L544,164"   stroke="rgba(160,140,110,0.12)" strokeWidth="1.5" fill="none" />
          <path d="M580,310 L598,332 L578,352 L602,374"   stroke="rgba(160,140,110,0.10)" strokeWidth="1"   fill="none" />
          <path d="M540,520 L562,542 L544,565 L570,582"   stroke="rgba(160,140,110,0.12)" strokeWidth="1.5" fill="none" />
          <circle cx="155" cy="130" r="3"   fill="rgba(160,140,110,0.22)" />
          <circle cx="390" cy="215" r="2"   fill="rgba(160,140,110,0.16)" />
          <circle cx="270" cy="360" r="3.5" fill="rgba(160,140,110,0.18)" />
          <circle cx="490" cy="360" r="2.5" fill="rgba(160,140,110,0.12)" />
          <circle cx="180" cy="530" r="2"   fill="rgba(160,140,110,0.16)" />
          <circle cx="460" cy="590" r="3"   fill="rgba(160,140,110,0.10)" />
          <circle cx="330" cy="710" r="2.5" fill="rgba(160,140,110,0.18)" />
        </svg>

        {/* Right half: blue-purple radial glow */}
        <div
          className="absolute right-0 top-0 w-3/5 h-full"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 65% 48%, rgba(37,99,235,0.07) 0%, rgba(124,58,237,0.04) 50%, transparent 72%)",
          }}
        />

        {/* Right half: flowing organic curves */}
        <svg
          className="absolute right-0 top-0 h-full"
          style={{ width: "55%" }}
          viewBox="0 0 792 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path d="M160,120 C260,160 380,190 520,170" stroke="rgba(37,99,235,0.12)"  strokeWidth="1.5" />
          <path d="M120,260 C260,300 380,340 560,310" stroke="rgba(124,58,237,0.10)" strokeWidth="1"   />
          <path d="M180,440 C310,470 450,450 600,430" stroke="rgba(37,99,235,0.08)"  strokeWidth="1.5" />
          <path d="M100,620 C260,650 410,640 580,610" stroke="rgba(124,58,237,0.10)" strokeWidth="1"   />
          <path d="M200,780 C360,805 490,794 640,764" stroke="rgba(37,99,235,0.08)"  strokeWidth="1"   />
          <circle cx="520" cy="170" r="3"   fill="rgba(37,99,235,0.28)" />
          <circle cx="560" cy="310" r="2.5" fill="rgba(124,58,237,0.24)" />
          <circle cx="600" cy="430" r="3"   fill="rgba(37,99,235,0.20)" />
          <circle cx="580" cy="610" r="2"   fill="rgba(124,58,237,0.20)" />
          <circle cx="320" cy="340" r="2.5" fill="rgba(37,99,235,0.14)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <AnimateIn className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.20)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "linear-gradient(90deg, #2563EB, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nova vs Traditional ERP
            </span>
          </div>
          <h2
            className="tracking-tight leading-tight"
            style={{ fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 500, color: "#0f172a" }}
          >
            Why schools are moving to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nova.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#64748b]">{COMPARISON_SECTION.sub}</p>
        </AnimateIn>

        {/* ── Platform cards ── */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* ── Traditional ERP — 38% — newspaper/legacy ── */}
          <AnimateIn delay={0.1} className="lg:w-[38%] shrink-0">
            <motion.div
              className="relative h-full rounded-2xl p-6 overflow-hidden cursor-default"
              style={{
                background: "#faf7f2",
                border: "2px dashed rgba(160,140,110,0.38)",
                boxShadow: "2px 4px 20px rgba(0,0,0,0.06)",
                transform: "rotate(-1.2deg)",
              }}
              whileHover={{ rotate: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
            >
              {/* LEGACY watermark */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                aria-hidden="true"
                style={{
                  fontSize: 80,
                  fontWeight: 900,
                  color: "rgba(120,100,75,0.04)",
                  letterSpacing: "0.12em",
                  transform: "rotate(-14deg)",
                }}
              >
                LEGACY
              </div>

              {/* Card header */}
              <div className="mb-5 pb-4" style={{ borderBottom: "1px dashed rgba(160,140,110,0.30)" }}>
                <p
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: "rgba(140,115,85,0.58)" }}
                >
                  Traditional ERP
                </p>
                <p className="text-[15px] font-medium mt-1" style={{ color: "rgba(90,70,50,0.62)" }}>
                  The old way of managing schools
                </p>
              </div>

              {/* Feature rows */}
              <div className="space-y-2">
                {COMPARISON_ROWS.map((row) => (
                  <div
                    key={row.feature}
                    className="flex items-start gap-3 rounded-xl"
                    style={{
                      padding: "12px 14px",
                      background: "rgba(160,140,110,0.07)",
                      border: "1px solid rgba(160,140,110,0.14)",
                    }}
                  >
                    <XCircle size={15} className="shrink-0 mt-0.5" style={{ color: "rgba(190,100,80,0.48)" }} />
                    <div>
                      <p className="text-[14px] font-bold leading-snug" style={{ color: "rgba(100,80,55,0.72)" }}>
                        {row.feature}
                      </p>
                      <p className="text-[12px] mt-1 leading-snug" style={{ color: "rgba(120,100,75,0.48)" }}>
                        {row.traditional}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Aged corner stamp */}
              <div
                className="absolute bottom-4 right-4 text-[9px] font-bold tracking-widest uppercase pointer-events-none"
                style={{ color: "rgba(160,140,110,0.22)", transform: "rotate(-5deg)" }}
              >
                Est. 2005
              </div>
            </motion.div>
          </AnimateIn>

          {/* ── Cadence Nova — ~60% — premium glowing ── */}
          <AnimateIn delay={0.2} className="lg:flex-1">
            <div className="relative h-full">

              {/* Floating ecosystem icons */}
              {FLOAT_ICONS.map(({ Icon, style: floatStyle, delay: d }, i) => (
                <motion.div
                  key={i}
                  className="absolute z-20 hidden lg:flex items-center justify-center rounded-xl"
                  style={{
                    ...floatStyle,
                    width: 40, height: 40,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(240,245,255,0.92))",
                    border: "1px solid rgba(37,99,235,0.16)",
                    boxShadow: "0 4px 16px rgba(37,99,235,0.14)",
                    backdropFilter: "blur(8px)",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + d, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon size={17} style={{ color: "#2563EB" }} />
                </motion.div>
              ))}

              {/* Main card */}
              <div
                className="overflow-hidden rounded-3xl h-full"
                style={{
                  background: "white",
                  border: "1px solid rgba(37,99,235,0.13)",
                  boxShadow:
                    "0 24px 64px rgba(37,99,235,0.12), 0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.90)",
                }}
              >
                {/* Gradient header banner */}
                <div
                  className="px-8 py-5"
                  style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.22)",
                      }}
                    >
                      <span className="text-white font-bold text-[16px]">N</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-[17px] tracking-tight leading-tight">
                        Cadence Nova
                      </p>
                      <p className="text-white/55 text-[12px]">The complete school intelligence platform</p>
                    </div>
                    <div
                      className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.22)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Live</span>
                    </div>
                  </div>
                </div>

                {/* Feature rows */}
                <div className="p-5 space-y-1">
                  {COMPARISON_ROWS.map((row, i) => {
                    const FeatureIcon = FEATURE_ICONS[i] ?? Package;
                    return (
                      <div
                        key={row.feature}
                        className="group flex items-start gap-4 rounded-2xl transition-colors duration-200 hover:bg-[#f0f5ff] cursor-default"
                        style={{ padding: "14px 16px" }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                          style={{
                            background: "linear-gradient(135deg, rgba(37,99,235,0.10), rgba(124,58,237,0.10))",
                          }}
                        >
                          <FeatureIcon size={16} style={{ color: "#2563EB" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[15px] font-bold text-[#0f172a]">{row.feature}</p>
                          <p className="text-[13px] text-[#475569] mt-1 leading-snug">{row.nova}</p>
                        </div>
                        <CheckCircle2 size={17} className="shrink-0 mt-1" style={{ color: "#2563EB" }} />
                      </div>
                    );
                  })}
                </div>

                {/* Bottom glow */}
                <div
                  className="h-6 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(37,99,235,0.04), transparent)" }}
                />
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
