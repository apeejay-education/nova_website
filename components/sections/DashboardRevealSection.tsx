"use client";

import { TrendingUp, Users, CheckCircle, Command, Sparkles } from "lucide-react";
import NovaHeroDashboard from "@/components/hero/NovaHeroDashboard";

const STAT_CALLOUTS = [
  {
    icon: CheckCircle,
    value: "94.2%",
    label: "Attendance today",
    sub: "Across all classes",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.10)",
  },
  {
    icon: Users,
    value: "22,847",
    label: "Students enrolled",
    sub: "Academic year 2025–26",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.10)",
  },
  {
    icon: TrendingUp,
    value: "₹1.2 Cr",
    label: "Fees this month",
    sub: "Collected across all gateways",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.10)",
  },
];

const FEATURE_CHIPS = [
  {
    key: "⌘K",
    label: "Nova Command",
    desc: "Navigate anything with your keyboard",
    color: "#2563EB",
  },
  {
    key: "AI",
    label: "Ask Nova",
    desc: "Natural language queries on live data",
    color: "#7C3AED",
  },
];

export default function DashboardRevealSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0f1a] via-[#111827] to-white">

      {/* Subtle grid texture on dark area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-0 pb-24">

        {/* Dashboard + floating elements */}
        <div className="relative flex items-start justify-center gap-0">

          {/* Left stat callouts */}
          <div className="hidden xl:flex flex-col gap-3 pt-16 pr-6 w-52 shrink-0">
            {STAT_CALLOUTS.map(({ icon: Icon, value, label, sub, color, bg }) => (
              <div
                key={label}
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center mb-2.5"
                  style={{ background: bg }}
                >
                  <Icon size={14} style={{ color }} />
                </div>
                <div className="text-[18px] font-bold text-white leading-none">{value}</div>
                <div className="text-[11px] font-medium text-white/70 mt-1">{label}</div>
                <div className="text-[10px] text-white/35 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>

          {/* Dashboard card — full, no palette */}
          <div className="flex-1 min-w-0 max-w-5xl">
            <NovaHeroDashboard showPalette={false} />
          </div>

          {/* Right feature chips */}
          <div className="hidden xl:flex flex-col gap-3 pt-16 pl-6 w-52 shrink-0">
            {FEATURE_CHIPS.map(({ key, label, desc, color }) => (
              <div
                key={label}
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center rounded-lg px-2.5 py-1 mb-2.5 text-[11px] font-bold font-mono"
                  style={{ background: color + "22", color }}
                >
                  {key}
                </div>
                <div className="text-[13px] font-semibold text-white leading-tight">{label}</div>
                <div className="text-[10px] text-white/40 mt-1 leading-relaxed">{desc}</div>
              </div>
            ))}

            {/* Live badge */}
            <div
              className="rounded-2xl p-4 flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#16A34A] shrink-0 animate-pulse" />
              <div>
                <div className="text-[11px] font-medium text-white/80">Live data</div>
                <div className="text-[10px] text-white/35">Updates in real-time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <div className="text-center mt-14 pb-2">
          <h2
            className="text-[#0f172a]"
            style={{
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Your entire school,{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              at a glance.
            </span>
          </h2>
          <p className="mt-3 text-[#64748b] text-[15px] max-w-lg mx-auto">
            One dashboard. Every metric that matters. No spreadsheets, no guesswork.
          </p>
        </div>

      </div>
    </section>
  );
}
