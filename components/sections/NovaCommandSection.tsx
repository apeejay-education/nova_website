"use client";

import { useState, useEffect } from "react";
import { Search, User, CreditCard, Zap, Clock, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";

// ─── Types ────────────────────────────────────────────────────────────────────

type RowIcon    = "person" | "bill" | "module";
type BadgeColor = "green" | "amber";
type Phase      = "empty" | "typing" | "results";

interface ResultRow {
  icon:            RowIcon;
  title:           string;
  titleHighlight?: string;
  badge?:          string;
  badgeColor?:     BadgeColor;
  sub:             string;
  sub2?:           string;
  module:          string;
}

interface ResultSection {
  label: string;
  rows:  ResultRow[];
}

interface QueryDef {
  query:    string;
  tabs:     string[];
  sections: ResultSection[];
}

// ─── Query data ───────────────────────────────────────────────────────────────

const QUERIES: QueryDef[] = [
  {
    query: "Rahul Sharma",
    tabs:  ["All  2", "Students  1", "Fees & Bills  1"],
    sections: [
      {
        label: "STUDENTS",
        rows: [
          {
            icon:           "person",
            title:          "Rahul Sharma",
            titleHighlight: "Rahul",
            badge:          "Active",
            badgeColor:     "green",
            sub:            "Adm: APJ-SKT-201-2026-27-1068",
            sub2:           "Father: Vijay Sharma · 9876543210",
            module:         "Students",
          },
        ],
      },
      {
        label: "FEES & BILLS",
        rows: [
          { icon: "bill", title: "SKTB-1089", badge: "Due",  badgeColor: "amber", sub: "Student: Rahul Sharma", module: "Fees & Bills" },
          { icon: "bill", title: "SKTB-1088", badge: "Paid", badgeColor: "green", sub: "Student: Rahul Sharma", module: "Fees & Bills" },
        ],
      },
    ],
  },
  {
    query: "fees overdue",
    tabs:  ["All  3", "Fees & Bills  3"],
    sections: [
      {
        label: "FEES & BILLS",
        rows: [
          { icon: "bill", title: "SKTB-1092", badge: "Due", badgeColor: "amber", sub: "Student: Aryan Mehta · ₹7,200",  module: "Fees & Bills" },
          { icon: "bill", title: "SKTB-1087", badge: "Due", badgeColor: "amber", sub: "Student: Priya Nair · ₹5,800",   module: "Fees & Bills" },
          { icon: "bill", title: "SKTB-1075", badge: "Due", badgeColor: "amber", sub: "Student: Rohit Gupta · ₹6,450", module: "Fees & Bills" },
        ],
      },
    ],
  },
  {
    query: "attendance",
    tabs:  ["All  3", "Modules  1", "Programs  2"],
    sections: [
      {
        label: "QUICK SEARCH",
        rows: [
          { icon: "module", title: "Attendance", sub: "Mark & view daily attendance", module: "Module" },
        ],
      },
      {
        label: "PROGRAMS / CLASSES",
        rows: [
          { icon: "bill", title: "Class IX-A — Attendance",  sub: "Academic Session 2025–26", module: "Programs" },
          { icon: "bill", title: "Class VII-B — Attendance", sub: "Academic Session 2025–26", module: "Programs" },
        ],
      },
    ],
  },
];

const RECENT_CHIPS = ["APJ-SKT-1066", "Rahul", "fees", "employees", "library", "attendance"];
const QUICK_CHIPS  = ["Student Admission", "Fee Collection", "Employee List", "Attendance", "Library", "Exams"];

// ─── Timing ───────────────────────────────────────────────────────────────────

const CHAR_DELAY     = 32;
const EMPTY_HOLD     = 1600;
const PRE_RESULTS    = 380;
const NAV_STEP_DELAY = 500;
const HOLD_AFTER_NAV = 900;
const FADE_DURATION  = 420;

// ─── Blurred dashboard backdrop ───────────────────────────────────────────────

function BlurredDashboard() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none bg-[#f8f9fb]" aria-hidden="true">
      {/* Sidebar */}
      <div className="absolute inset-y-0 left-0 w-14 bg-white border-r border-gray-200 flex flex-col items-center pt-3 gap-2.5">
        <div className="w-7 h-7 bg-[#2563EB] rounded-lg mb-1" />
        {[0,1,2,3,4,5,6].map((i) => (
          <div key={i} className={`w-6 h-6 rounded-md ${i === 1 ? "bg-[#2563EB]/20" : "bg-gray-100"}`} />
        ))}
      </div>
      {/* Main content */}
      <div className="absolute inset-y-0 left-14 right-0 p-3">
        {/* Top bar */}
        <div className="h-9 bg-white rounded-lg border border-gray-200 mb-3 flex items-center px-3 gap-2">
          <div className="w-20 h-3 bg-gray-100 rounded-full" />
          <div className="ml-auto flex gap-2">
            <div className="w-6 h-6 bg-gray-100 rounded-full" />
            <div className="w-6 h-6 bg-[#2563EB] rounded-full" />
          </div>
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: "Students",       val: "1,247",  color: "#2563EB" },
            { label: "Fees Collected", val: "₹8.4L",  color: "#16A34A" },
            { label: "Attendance",     val: "94.2%",  color: "#7C3AED" },
            { label: "Buses Live",     val: "12",     color: "#F59E0B" },
          ].map(({ label, val, color }) => (
            <div key={label} className="bg-white rounded-lg border border-gray-200 p-2">
              <div className="w-3 h-3 rounded-sm mb-1" style={{ background: color + "33" }} />
              <div className="text-[8px] text-gray-400 font-medium">{label}</div>
              <div className="text-[12px] font-bold text-gray-700 mt-0.5">{val}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-100 px-3 py-2 gap-4">
            {["Name", "Class", "Adm No.", "Status"].map((h) => (
              <div key={h} className="flex-1 text-[8px] text-gray-400 font-semibold uppercase">{h}</div>
            ))}
          </div>
          {[
            ["Aryan Mehta",  "IX-A",   "APJ-1066", "Active"],
            ["Priya Nair",   "VIII-B", "APJ-1054", "Active"],
            ["Rohit Gupta",  "X-C",    "APJ-1071", "Active"],
            ["Sneha Iyer",   "VII-A",  "APJ-1038", "Active"],
            ["Karan Singh",  "IX-B",   "APJ-1089", "Inactive"],
          ].map((row, i) => (
            <div key={i} className="flex border-b border-gray-50 last:border-0 px-3 py-1.5 gap-4">
              {row.map((cell, j) => (
                <div
                  key={j}
                  className={`flex-1 text-[9px] ${
                    j === 0 ? "text-gray-700 font-medium" :
                    j === 3 ? (cell === "Active" ? "text-green-600 font-medium" : "text-gray-400") :
                    "text-gray-400"
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Row icon helper ──────────────────────────────────────────────────────────

function RowIconEl({ icon }: { icon: RowIcon }) {
  if (icon === "person") return (
    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
      <User size={13} className="text-blue-500" />
    </div>
  );
  if (icon === "module") return (
    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
      <Zap size={13} className="text-amber-500" />
    </div>
  );
  return (
    <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
      <CreditCard size={12} className="text-gray-400" />
    </div>
  );
}

// ─── Animated palette ─────────────────────────────────────────────────────────

function CommandPaletteAnimated() {
  const [qIdx,         setQIdx]         = useState(0);
  const [phase,        setPhase]        = useState<Phase>("empty");
  const [typed,        setTyped]        = useState("");
  const [highlightRow, setHighlightRow] = useState(0);
  const [visible,      setVisible]      = useState(true);

  useEffect(() => {
    const q = QUERIES[qIdx];
    let cancelled = false;
    let typeIntervalId: ReturnType<typeof setInterval> | null = null;

    setTyped("");
    setPhase("empty");
    setVisible(true);
    setHighlightRow(0);

    const t0 = setTimeout(() => {
      if (cancelled) return;
      setPhase("typing");

      let charCount = 0;
      typeIntervalId = setInterval(() => {
        if (cancelled) { if (typeIntervalId) clearInterval(typeIntervalId); return; }
        charCount++;
        setTyped(q.query.slice(0, charCount));

        if (charCount >= q.query.length) {
          if (typeIntervalId) clearInterval(typeIntervalId);

          setTimeout(() => {
            if (cancelled) return;
            setPhase("results");
            setHighlightRow(0);

            const totalRows = q.sections.reduce((sum, s) => sum + s.rows.length, 0);

            for (let step = 1; step < totalRows; step++) {
              setTimeout(() => {
                if (cancelled) return;
                setHighlightRow(step);
              }, step * NAV_STEP_DELAY);
            }

            const fadeAt = (totalRows - 1) * NAV_STEP_DELAY + HOLD_AFTER_NAV;
            setTimeout(() => {
              if (cancelled) return;
              setVisible(false);
              setTimeout(() => {
                if (cancelled) return;
                setQIdx((prev) => (prev + 1) % QUERIES.length);
              }, FADE_DURATION);
            }, fadeAt);

          }, PRE_RESULTS);
        }
      }, CHAR_DELAY);
    }, EMPTY_HOLD);

    return () => {
      cancelled = true;
      clearTimeout(t0);
      if (typeIntervalId) clearInterval(typeIntervalId);
    };
  }, [qIdx]);

  const q = QUERIES[qIdx];
  const fullyTyped = typed.length >= q.query.length;

  return (
    <div>
      {/* Panel: blurred dashboard + scrim + palette */}
      <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "490px" }}>

        {/* Layer 1: blurred dashboard — always visible, never fades */}
        <div className="absolute inset-0" style={{ filter: "blur(2.5px)", opacity: 0.42 }}>
          <BlurredDashboard />
        </div>

        {/* Layer 2: dark scrim — always visible */}
        <div className="absolute inset-0 bg-gray-900/45" />

        {/* Layer 3: ⌘K indicator — always visible */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/15 rounded-lg px-2.5 py-1.5">
          <kbd className="font-mono text-[13px] font-semibold text-white leading-none">⌘K</kbd>
          <span className="text-white/50 text-[11px]">anywhere in Nova</span>
        </div>

        {/* Layer 4: palette — only this fades between queries */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 transition-opacity ease-in-out"
          style={{ opacity: visible ? 1 : 0, transitionDuration: `${FADE_DURATION}ms` }}
        >
          <div
            className="w-full bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden flex flex-col"
            style={{ maxHeight: "390px" }}
          >

            {/* Search bar */}
            <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <Search size={15} className="text-gray-400 shrink-0" />
              <span className="flex-1 text-[14px] min-h-[20px]">
                {phase === "empty" ? (
                  <span className="text-gray-400">Search students, employees, programs…</span>
                ) : (
                  <>
                    <span className="text-gray-800">{typed}</span>
                    {!fullyTyped && (
                      <span className="inline-block w-[2px] h-[14px] bg-[#2563EB] ml-px animate-pulse align-middle" />
                    )}
                  </>
                )}
              </span>
              {phase !== "empty" && (
                <span className="shrink-0 text-[11px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">ESC</span>
              )}
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">

              {/* ── Empty state ── */}
              {phase === "empty" && (
                <div className="px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Clock size={10} className="text-gray-400" />
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Recent</span>
                    <span className="ml-auto text-[10px] text-[#2563EB] font-medium cursor-default">Clear all</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {RECENT_CHIPS.map((chip) => (
                      <span key={chip} className="flex items-center gap-1 text-[11px] text-gray-600 bg-gray-100 rounded-full px-2.5 py-1 cursor-default">
                        <Clock size={9} className="text-gray-400" />
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Zap size={10} className="text-gray-400" />
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Quick Search</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pb-1">
                    {QUICK_CHIPS.map((chip) => (
                      <span key={chip} className="text-[11px] text-[#2563EB] border border-blue-200 bg-blue-50 rounded-md px-2.5 py-1 cursor-default">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Results ── */}
              {phase === "results" && (() => {
                let flatIdx = 0;
                return (
                  <div>
                    {/* Tabs */}
                    <div className="flex gap-1 px-3 py-2 border-b border-gray-100 overflow-x-auto">
                      {q.tabs.map((tab, i) => (
                        <span
                          key={tab}
                          className={`shrink-0 text-[11px] px-2.5 py-1 rounded-full font-medium cursor-default whitespace-nowrap ${
                            i === 0 ? "bg-[#2563EB] text-white" : "text-gray-500"
                          }`}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                    {/* Sections */}
                    <div className="px-3 py-2 space-y-2">
                      {q.sections.map((section) => (
                        <div key={section.label}>
                          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5 px-1">
                            {section.label}
                          </p>
                          {section.rows.map((row) => {
                            const myIdx        = flatIdx++;
                            const isHighlighted = myIdx === highlightRow;
                            return (
                              <div
                                key={`${row.title}-${myIdx}`}
                                className={`flex items-start gap-2.5 px-2 py-2 rounded-lg mb-1 cursor-default transition-colors duration-150 ${
                                  isHighlighted ? "bg-blue-50 border border-blue-200" : ""
                                }`}
                              >
                                <RowIconEl icon={row.icon} />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-[13px] font-medium text-gray-800">
                                      {row.titleHighlight ? (
                                        <>
                                          <span className="bg-yellow-200 rounded-sm px-0.5">{row.titleHighlight}</span>
                                          {row.title.slice(row.titleHighlight.length)}
                                        </>
                                      ) : row.title}
                                    </span>
                                    {row.badge && (
                                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                                        row.badgeColor === "green" ? "bg-green-100 text-green-700" :
                                        row.badgeColor === "amber" ? "bg-amber-100 text-amber-700" :
                                                                     "bg-gray-100 text-gray-600"
                                      }`}>
                                        {row.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-gray-400 truncate mt-0.5">{row.sub}</p>
                                  {row.sub2 && <p className="text-[11px] text-gray-400 truncate">{row.sub2}</p>}
                                </div>
                                <div className="flex items-center gap-1 shrink-0 self-start mt-0.5">
                                  <span className="text-[10px] text-gray-400 bg-gray-100 rounded px-1.5 py-0.5 whitespace-nowrap">
                                    {row.module}
                                  </span>
                                  {isHighlighted && <ArrowRight size={11} className="text-blue-400" />}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* Footer */}
            <div className="shrink-0 flex items-center gap-3 px-4 py-2 border-t border-gray-100 bg-gray-50/60">
              <span className="text-[10px] text-gray-400"><kbd className="font-mono">↑↓</kbd> Navigate</span>
              <span className="text-[10px] text-gray-400"><kbd className="font-mono">↵</kbd> Open</span>
              <span className="text-[10px] text-gray-400"><kbd className="font-mono">ESC</kbd> Close</span>
              <span className="ml-auto text-[10px] text-gray-400 font-medium">Cadence Search</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const RIGHT_CARDS = [
  {
    icon:  Search,
    color: "#2563EB",
    bg:    "rgba(37,99,235,0.15)",
    title: "Find anyone instantly",
    body:  "Type a student or staff name and land on their full profile in one keystroke.",
  },
  {
    icon:  CreditCard,
    color: "#F59E0B",
    bg:    "rgba(245,158,11,0.15)",
    title: "Pull up any record",
    body:  "Fee bills, transaction IDs, or admission numbers — found before you finish typing.",
  },
  {
    icon:  Zap,
    color: "#7C3AED",
    bg:    "rgba(124,58,237,0.15)",
    title: "Jump to any module",
    body:  "Navigate to Attendance, Library, or Fees without lifting your hands off the keyboard.",
  },
] as const;

export default function NovaCommandSection() {
  return (
    <section className="bg-[#070a12] py-24 px-6 overflow-hidden relative">
      <JourneyBackground tone="dark" nodes={[
        { icon: "Search",     x: 7,  y: 52, delay: 0   },
        { icon: "Zap",        x: 36, y: 18, delay: 200 },
        { icon: "ArrowRight", x: 68, y: 76, delay: 400 },
        { icon: "Clock",      x: 92, y: 32, delay: 600 },
      ]} paths={[
        "M 7,52 C 16,36 26,24 36,18",
        "M 36,18 C 48,38 58,62 68,76",
        "M 68,76 C 78,58 86,42 92,32",
      ]} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: animated palette demo */}
          <AnimateIn>
            <CommandPaletteAnimated />
          </AnimateIn>

          {/* Right: copy */}
          <AnimateIn delay={0.15}>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.18)] border border-[rgba(37,99,235,0.35)] rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#93C5FD] text-xs font-semibold tracking-wide uppercase">Nova Command</span>
              </div>

              {/* Headline */}
              <h2 className="text-[36px] lg:text-[42px] font-medium tracking-tight text-white leading-tight mb-4">
                Blazing fast.{" "}
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                    fontStyle:  "italic",
                    fontWeight: 400,
                  }}
                >
                  Everywhere.
                </span>
              </h2>

              {/* Sub */}
              <p className="text-[#94A3B8] text-base leading-relaxed mb-7">
                Press ⌘K from anywhere in Nova. Land on any student, record, or module in under a second. No menus. No clicks.
              </p>

              {/* Stat pair */}
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-[rgba(255,255,255,0.08)]">
                <div>
                  <div className="text-[44px] font-bold text-white leading-none tabular-nums">5×</div>
                  <div className="text-[13px] text-[#94A3B8] mt-1.5">faster navigation</div>
                </div>
                <div className="w-px h-14 bg-[rgba(255,255,255,0.12)]" />
                <div>
                  <div className="text-[44px] font-bold text-white leading-none tabular-nums">↓80%</div>
                  <div className="text-[13px] text-[#94A3B8] mt-1.5">fewer clicks on average</div>
                </div>
              </div>

              {/* 3 capability cards */}
              <div className="space-y-3">
                {RIGHT_CARDS.map(({ icon: Icon, color, bg, title, body }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: bg }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white mb-0.5">{title}</p>
                      <p className="text-[12px] text-[#94A3B8] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
