"use client";

import { useState, useEffect } from "react";
import { Sparkles, Lock, Zap, GraduationCap, ShieldCheck } from "lucide-react";
import { AI_SECTION } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";

// ─── Animated query data ──────────────────────────────────────────────────────

type QueryItem =
  | { type: "list";   query: string; rows: { name: string; value: string }[]; meta: string }
  | { type: "table";  query: string; rows: { name: string; value: string }[]; meta: string }
  | { type: "stat";   query: string; stat: string; statLabel: string; sub: string; meta: string }
  | { type: "status"; query: string; details: string[]; meta: string };

const QUERIES: QueryItem[] = [
  {
    type:  "list",
    query: "Grade 9 students with fees overdue above ₹5,000",
    rows:  [
      { name: "Aryan Sharma", value: "₹7,200 overdue" },
      { name: "Priya Nair",   value: "₹5,800 overdue" },
      { name: "Rohit Gupta",  value: "₹6,450 overdue" },
    ],
    meta: "3 results · 0.3s",
  },
  {
    type:  "table",
    query: "Classes with attendance below 85% this week",
    rows:  [
      { name: "Class VII-B", value: "81%" },
      { name: "Class IX-A",  value: "83%" },
    ],
    meta: "2 classes · 0.2s",
  },
  {
    type:      "stat",
    query:     "New admissions confirmed for 2025–26",
    stat:      "67",
    statLabel: "Confirmed",
    sub:       "89 applications still pending",
    meta:      "Admissions · 0.1s",
  },
  {
    type:    "status",
    query:   "Show Route C bus status",
    details: ["Route C · Delayed 14 min", "29 students on board", "ETA 8:52 AM"],
    meta:    "Transport · live",
  },
];

const CHAR_DELAY   = 28;
const PRE_RESULTS  = 380;
const HOLD_RESULTS = 2600;
const FADE_OUT     = 480;

const SUGGESTED_QUERIES = [
  "Who hasn't paid fees this month?",
  "Top 5 absent students",
  "Bus Route B ETA",
];

// ─── Animated query component ─────────────────────────────────────────────────

function AskNovaAnimated() {
  const [idx,         setIdx]         = useState(0);
  const [typed,       setTyped]       = useState("");
  const [showResults, setShowResults] = useState(false);
  const [visible,     setVisible]     = useState(true);

  useEffect(() => {
    const q = QUERIES[idx];
    let cancelled = false;

    setTyped("");
    setShowResults(false);
    setVisible(true);

    let charCount = 0;
    const typeTimer = setInterval(() => {
      if (cancelled) { clearInterval(typeTimer); return; }
      charCount++;
      setTyped(q.query.slice(0, charCount));
      if (charCount < q.query.length) return;

      clearInterval(typeTimer);

      const t1 = setTimeout(() => {
        if (cancelled) return;
        setShowResults(true);

        const t2 = setTimeout(() => {
          if (cancelled) return;
          setVisible(false);

          const t3 = setTimeout(() => {
            if (cancelled) return;
            setIdx((prev) => (prev + 1) % QUERIES.length);
          }, FADE_OUT);

          return () => clearTimeout(t3);
        }, HOLD_RESULTS);

        return () => clearTimeout(t2);
      }, PRE_RESULTS);

      return () => clearTimeout(t1);
    }, CHAR_DELAY);

    return () => { cancelled = true; clearInterval(typeTimer); };
  }, [idx]);

  const q = QUERIES[idx];
  const fullyTyped = typed.length >= q.query.length;

  return (
    <div
      className="transition-opacity ease-in-out"
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_OUT}ms` }}
    >
      {/* Search bar */}
      <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.08)] rounded-lg px-3 py-2.5 mb-3">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-[#94A3B8] shrink-0">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 9.5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="flex-1 text-[13px] text-[#CBD5E1] min-h-[18px]">
          {typed}
          <span className="inline-block w-[1.5px] h-[13px] bg-[#2563EB] ml-px animate-pulse align-middle" />
        </span>
        {fullyTyped && (
          <span className="shrink-0 w-5 h-5 rounded bg-[#2563EB] flex items-center justify-center text-white text-[10px]">
            ↵
          </span>
        )}
      </div>

      {/* Results */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: showResults ? "220px" : "0px", opacity: showResults ? 1 : 0 }}
      >
        <div className="rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] p-3">

          {(q.type === "list" || q.type === "table") && (
            <div>
              {q.rows.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.06)] last:border-0 text-[13px]">
                  <span className="text-[#E2E8F0]">{r.name}</span>
                  <span className={`font-semibold ${q.type === "list" ? "text-[#F97316]" : "text-[#60A5FA]"}`}>
                    {q.type === "list" ? `— ${r.value}` : r.value}
                  </span>
                </div>
              ))}
              {/* FIX: was #475569 — invisible on dark */}
              <p className="text-[11px] text-[#94A3B8] pt-2">{q.meta}</p>
            </div>
          )}

          {q.type === "stat" && (
            <div className="text-center py-2">
              <div className="text-[44px] font-bold text-[#2563EB] leading-none tabular-nums">{q.stat}</div>
              <div className="text-[14px] font-medium text-[#E2E8F0] mt-1.5">{q.statLabel}</div>
              {/* FIX: was #64748B — barely visible */}
              <div className="text-[12px] text-[#94A3B8] mt-1">{q.sub}</div>
              <p className="text-[11px] text-[#94A3B8] mt-2">{q.meta}</p>
            </div>
          )}

          {q.type === "status" && (
            <div className="space-y-2 py-1">
              {q.details.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px]">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-amber-400" : "bg-[#64748B]"}`} />
                  <span className={i === 0 ? "text-[#FCD34D]" : "text-[#E2E8F0]"}>{d}</span>
                </div>
              ))}
              <p className="text-[11px] text-[#94A3B8] pt-1">{q.meta}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ─── Left panel ───────────────────────────────────────────────────────────────

function AskNovaPanel() {
  return (
    <div
      className="h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 40px rgba(37,99,235,0.10)",
      }}
    >
      {/* Header */}
      <div className="shrink-0 flex items-center gap-2.5 px-4 py-3 border-b border-[rgba(255,255,255,0.08)]">
        <Sparkles size={13} className="text-[#2563EB]" />
        <span className="text-[13px] font-semibold text-white">Ask Nova</span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-green-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Query label */}
      <div className="shrink-0 px-4 pt-3 pb-1">
        {/* FIX: was #475569 — invisible on dark */}
        <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-semibold">
          Natural Language Query
        </p>
      </div>

      {/* Animated area — natural height, no stretch */}
      <div className="shrink-0 px-4 pb-3">
        <AskNovaAnimated />
      </div>

      {/* Flex spacer pushes chips + footer to bottom */}
      <div className="flex-1" />

      {/* FIX: "Try asking" chips fill empty space */}
      <div className="shrink-0 px-4 pb-4">
        <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-semibold mb-2.5">
          Try asking
        </p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUERIES.map((chip) => (
            <span
              key={chip}
              className="text-[11px] text-[#94A3B8] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-full px-3 py-1.5 cursor-default"
            >
              &ldquo;{chip}&rdquo;
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 px-4 py-3 border-t border-[rgba(255,255,255,0.08)]">
        {/* FIX: was #334155 — invisible on dark */}
        <p className="text-[11px] text-[#94A3B8]">
          No SQL. No filters. No report builder. Just ask.
        </p>
      </div>
    </div>
  );
}

// ─── Trust tiles (right panel) ───────────────────────────────────────────────

const TRUST_TILES = [
  {
    icon:  Lock,
    color: "#2563EB",
    bg:    "rgba(37,99,235,0.15)",
    title: "Your Data, Only Yours",
    body:  "Runs entirely on your ERP. Student data is never sent to any external AI service.",
  },
  {
    icon:  Zap,
    color: "#F59E0B",
    bg:    "rgba(245,158,11,0.15)",
    title: "Grounded Answers",
    body:  "Every result cites the exact record in your system. No hallucinations, no guesses.",
  },
  {
    icon:  GraduationCap,
    color: "#7C3AED",
    bg:    "rgba(124,58,237,0.15)",
    title: "School Context Built-in",
    body:  "Understands Indian curriculum, class structures, fee terms, and hostel workflows.",
  },
  {
    icon:  ShieldCheck,
    color: "#16A34A",
    bg:    "rgba(22,163,74,0.15)",
    title: "DPDP Ready",
    body:  "Compliant with India's Digital Personal Data Protection Act 2023 from day one.",
  },
] as const;

// ─── Section ──────────────────────────────────────────────────────────────────

export default function AISection() {
  return (
    <section className="bg-[#0b0f1a] py-24 px-6 relative overflow-hidden">
      <JourneyBackground tone="dark" nodes={[
        { icon: "Sparkles",   x: 5,  y: 35, delay: 0   },
        { icon: "Zap",        x: 32, y: 72, delay: 150 },
        { icon: "Lock",       x: 68, y: 18, delay: 300 },
        { icon: "ShieldCheck",x: 92, y: 62, delay: 450 },
      ]} paths={[
        "M 5,35 C 14,55 24,66 32,72",
        "M 32,72 C 44,48 56,30 68,18",
        "M 68,18 C 77,36 85,52 92,62",
      ]} />
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateIn className="text-center mb-14">
          {/* FIX: was text-[#2563EB] on near-black bg — too dark. Now #93C5FD (blue-300) */}
          <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.18)] border border-[rgba(37,99,235,0.35)] rounded-full px-4 py-1.5 mb-5">
            <Sparkles size={13} className="text-[#93C5FD]" />
            <span className="text-[#93C5FD] text-xs font-semibold tracking-wide uppercase">Nova AI</span>
          </div>
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-white leading-tight">
            {AI_SECTION.headline}
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] max-w-xl mx-auto">
            {AI_SECTION.sub}
          </p>
        </AnimateIn>

        {/* 50/50 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

          {/* Left: animated Ask Nova panel */}
          <AnimateIn delay={0.05} className="min-h-[480px]">
            <AskNovaPanel />
          </AnimateIn>

          {/* Right: trust card */}
          <AnimateIn delay={0.12}>
            <div
              className="h-full rounded-2xl p-7 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#16A34A] text-xs font-semibold px-3 py-1 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                {AI_SECTION.askNova.badge}
              </span>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Built for schools. Built to be trusted.
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                Ask Nova is AI that school leaders can actually rely on — accurate, private, and designed around how Indian schools work.
              </p>

              {/* 2×2 tile grid */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                {TRUST_TILES.map(({ icon: Icon, color, bg, title, body }) => (
                  <div
                    key={title}
                    className="rounded-xl p-4 flex flex-col gap-2.5"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: bg }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white leading-snug mb-1">{title}</p>
                      {/* FIX: was #64748B — barely visible. Now #94A3B8 */}
                      <p className="text-[12px] text-[#94A3B8] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust footer */}
              {/* FIX: was #334155 — invisible. Now #94A3B8 */}
              <p className="mt-5 text-[11px] text-[#94A3B8] border-t border-[rgba(255,255,255,0.08)] pt-4">
                On-premise &amp; cloud deployments available &nbsp;·&nbsp; Data never leaves your school network
              </p>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
