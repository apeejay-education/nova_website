"use client";

import { useState, useEffect } from "react";
import {
  Search, Bell, LayoutDashboard, Users, CreditCard, ClipboardList,
  MessageSquare, BookOpen, Bus, Building2, BookMarked, Briefcase,
  Activity, UserPlus, Command, TrendingUp, UserX, Clock, Inbox,
  CheckCircle,
} from "lucide-react";

// ─── Query data ───────────────────────────────────────────────────────────────

const QUERIES = [
  {
    prompt: "Show attendance for Class 10-A today",
    result: "38 / 42 present",
    detail: "Rahul Sharma, Priya Mehta + 2 more absent today",
    tag: "Attendance",
    tagColor: "#7C3AED",
  },
  {
    prompt: "How much fees collected this month?",
    result: "₹1.2Cr collected",
    detail: "₹18.6L outstanding · 94 overdue bills",
    tag: "Fees",
    tagColor: "#16A34A",
  },
  {
    prompt: "List new admissions this week",
    result: "14 new admissions",
    detail: "8 General · 4 OBC · 2 SC/ST",
    tag: "Admissions",
    tagColor: "#2563EB",
  },
];

// Which widget to highlight for each query index
const HIGHLIGHT_MAP: Record<number, string> = {
  0: "attendance",
  1: "fees",
  2: "students",
};

const HOLD_MS  = 2800;
const FADE_MS  = 500;

// ─── Nav data ─────────────────────────────────────────────────────────────────

const CORE_NAV = [
  { label: "Students",       icon: Users },
  { label: "Fees & Billing", icon: CreditCard },
  { label: "Attendance",     icon: ClipboardList },
  { label: "Communication",  icon: MessageSquare },
  { label: "Library",        icon: BookOpen },
  { label: "Transport",      icon: Bus },
  { label: "Hostel",         icon: Building2 },
  { label: "LMS",            icon: BookMarked },
];

const APPSTORE_NAV = [
  { label: "HRMS & Payroll", icon: Briefcase },
  { label: "Pulse",          icon: Activity },
  { label: "Hire",           icon: UserPlus },
];

// ─── Widget data ──────────────────────────────────────────────────────────────

const ATT_BARS = [88, 92, 95, 91, 94, 89, 94];
const ATT_DAYS = ["M", "T", "W", "T", "F", "S", "T"];

const CATEGORIES = [
  { label: "General", pct: 79, count: "17,434" },
  { label: "OBC",     pct: 3,  count: "581" },
  { label: "SC/ST",   pct: 2,  count: "378" },
];

const STAT_CARDS = [
  { label: "Absent Today",       value: "284",   sub: "2.4% of total",        icon: UserX,   color: "#EF4444" },
  { label: "Buses Live",         value: "12/14", sub: "2 in maintenance",     icon: Bus,     color: "#F59E0B" },
  { label: "Library Overdue",    value: "34",    sub: "books not returned",   icon: Clock,   color: "#7C3AED" },
  { label: "Pending Admissions", value: "8",     sub: "applications waiting", icon: Inbox,   color: "#2563EB" },
];

// ─── Flanking decorative elements ────────────────────────────────────────────

const STAT_CALLOUTS = [
  { icon: CheckCircle, value: "94.2%",  label: "Attendance today",   sub: "Across all classes",         color: "#7C3AED", bg: "rgba(124,58,237,0.10)" },
  { icon: Users,       value: "22,847", label: "Students enrolled",  sub: "Academic year 2025–26",      color: "#2563EB", bg: "rgba(37,99,235,0.10)"  },
  { icon: TrendingUp,  value: "₹1.2 Cr",label: "Fees this month",   sub: "Collected across all gateways", color: "#16A34A", bg: "rgba(22,163,74,0.10)" },
];

const FEATURE_CHIPS = [
  { key: "⌘K", label: "Nova Command", desc: "Navigate anything with your keyboard",   color: "#2563EB" },
  { key: "AI",  label: "Ask Nova",     desc: "Natural language queries on live data",  color: "#7C3AED" },
];

// ─── Widget border helper ─────────────────────────────────────────────────────

const HIGHLIGHT_COLORS: Record<string, string> = {
  attendance: "#7C3AED",
  fees:       "#16A34A",
  students:   "#2563EB",
};

function cardStyle(name: string, active: string | null): React.CSSProperties {
  if (active !== name) return { borderColor: "#e2e8f0" };
  const c = HIGHLIGHT_COLORS[name];
  return {
    borderColor: c,
    boxShadow: `0 0 0 1px ${c}, 0 0 18px ${c}30`,
    transition: "border-color 0.5s, box-shadow 0.5s",
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props { showPalette?: boolean; }

export default function NovaHeroDashboard({ showPalette = true }: Props) {
  const [qIdx, setQIdx]       = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setQIdx(i => (i + 1) % QUERIES.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);
    return () => clearInterval(id);
  }, []);

  const q               = QUERIES[qIdx];
  const activeHighlight = visible ? HIGHLIGHT_MAP[qIdx] : null;

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 select-none pointer-events-none hidden md:flex items-start justify-center">

      {/* ── Left stat callouts ── */}
      <div className="hidden lg:flex flex-col gap-3 pt-8 pr-5 w-48 shrink-0">
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
            <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2.5" style={{ background: bg }}>
              <Icon size={14} style={{ color }} />
            </div>
            <div className="text-[18px] font-bold text-white leading-none">{value}</div>
            <div className="text-[11px] font-medium text-white/70 mt-1">{label}</div>
            <div className="text-[10px] text-white/35 mt-0.5">{sub}</div>
          </div>
        ))}
      </div>

      {/* ── Dashboard card + palette ── */}
      <div className="relative flex-1 min-w-0 max-w-5xl px-6 xl:px-0">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.80)",
          border: "1px solid rgba(255,255,255,0.65)",
          boxShadow: "0 25px 80px -12px rgba(0,0,0,0.28), 0 0 0 1px rgba(0,0,0,0.04)",
          backdropFilter: "blur(18px)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center gap-3 px-3 py-2 border-b border-black/[0.06] bg-white/50">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          >
            <span className="text-white text-[9px] font-bold">N</span>
          </div>
          <span className="text-[11px] font-semibold text-[#0f172a] mr-1">Nova</span>
          <div className="flex-1 flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-2.5 py-1.5">
            <Search size={10} className="text-[#94a3b8] shrink-0" />
            <span className="text-[10px] text-[#94a3b8] flex-1">Search students, fees, reports…</span>
            <span className="text-[9px] text-[#94a3b8] bg-white border border-[#e2e8f0] rounded px-1.5 py-0.5 font-mono">⌘K</span>
          </div>
          <div className="flex items-center gap-2 ml-1">
            <Bell size={12} className="text-[#94a3b8]" />
            <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">AP</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex" style={{ height: 460 }}>

          {/* Sidebar */}
          <div className="w-48 shrink-0 bg-[#0f172a] flex flex-col overflow-hidden">
            {/* School identity */}
            <div className="px-3 pt-3 pb-2.5 border-b border-white/[0.07]">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white text-[10px] font-bold"
                  style={{ background: "linear-gradient(135deg, #E91E8C, #F97316)" }}
                >
                  E
                </div>
                <div className="min-w-0">
                  <div className="text-white text-[10px] font-semibold leading-tight truncate">Einstein-81</div>
                  <div className="text-white/40 text-[8px] truncate">Public School</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-2 py-1.5 overflow-hidden">
              {/* Dashboard */}
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#2563EB] text-white text-[10px] font-medium mb-0.5">
                <LayoutDashboard size={11} strokeWidth={2} />
                Dashboard
              </div>

              {/* Core Platform */}
              <p className="text-[7px] font-semibold tracking-widest uppercase text-white/25 px-2.5 pt-2 pb-0.5">
                Core Platform
              </p>
              {CORE_NAV.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] text-white/50">
                  <Icon size={11} strokeWidth={1.5} />
                  {label}
                </div>
              ))}

              {/* AppStore */}
              <p className="text-[7px] font-semibold tracking-widest uppercase text-white/25 px-2.5 pt-2 pb-0.5">
                AppStore
              </p>
              {APPSTORE_NAV.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] text-white/35">
                  <Icon size={11} strokeWidth={1.5} />
                  {label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col bg-white/80 overflow-hidden">
            {/* Welcome bar */}
            <div className="px-4 pt-2.5 pb-2 flex items-center justify-between border-b border-[#f1f5f9]">
              <div>
                <div className="text-[12px] font-semibold text-[#0f172a]">Welcome back, Principal</div>
                <div className="text-[10px] text-[#94a3b8]">Einstein-81 Public School · 2025–26</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[9px] text-[#64748b] border border-[#e2e8f0] rounded-md px-2 py-1">Reorder</div>
                <div className="text-[9px] text-white rounded-md px-2 py-1" style={{ background: "#2563EB" }}>+ Widget</div>
              </div>
            </div>

            {/* Widgets */}
            <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">

              {/* Row 1 — large widgets */}
              <div className="grid grid-cols-3 gap-2.5 flex-1 min-h-0">

                {/* Students */}
                <div
                  className="rounded-xl border p-3 flex flex-col overflow-hidden bg-white transition-all duration-500"
                  style={cardStyle("students", activeHighlight)}
                >
                  <div className="text-[10px] font-semibold text-[#0f172a] mb-1">Students</div>
                  <div className="text-[20px] font-bold text-[#0f172a] leading-none">22,847</div>
                  <div className="text-[9px] text-[#94a3b8] mb-2.5">Enrolled · 2025–26</div>
                  <div className="mb-2">
                    <div className="flex justify-between text-[8px] text-[#64748b] mb-1">
                      <span>Female 49%</span><span>Male 51%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#EC4899]" style={{ width: "49%" }} />
                      <div className="h-full bg-[#2563EB]" style={{ width: "51%" }} />
                    </div>
                  </div>
                  <div className="space-y-1.5 flex-1">
                    {CATEGORIES.map(({ label, pct, count }) => (
                      <div key={label}>
                        <div className="flex justify-between text-[8px] text-[#64748b] mb-0.5">
                          <span>{label}</span><span>{count}</span>
                        </div>
                        <div className="h-1 rounded-full bg-[#f1f5f9] overflow-hidden">
                          <div className="h-full rounded-full bg-[#2563EB]/60" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attendance */}
                <div
                  className="rounded-xl border p-3 flex flex-col overflow-hidden bg-white transition-all duration-500"
                  style={cardStyle("attendance", activeHighlight)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[10px] font-semibold text-[#0f172a]">Attendance</div>
                    <div className="flex items-center gap-0.5 text-[8px] text-[#16A34A]">
                      <TrendingUp size={8} /><span>+2.1%</span>
                    </div>
                  </div>
                  <div className="text-[20px] font-bold text-[#0f172a] leading-none">94.2%</div>
                  <div className="text-[9px] text-[#94a3b8] mb-auto">Today · all classes</div>
                  <div className="mt-3 flex items-end gap-1" style={{ height: 56 }}>
                    {ATT_BARS.map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                        <div
                          className="w-full rounded-sm"
                          style={{ height: `${(val / 100) * 44}px`, background: i === 6 ? "#2563EB" : "#BFDBFE" }}
                        />
                        <span className="text-[7px] text-[#94a3b8]">{ATT_DAYS[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fees */}
                <div
                  className="rounded-xl border p-3 flex flex-col overflow-hidden bg-white transition-all duration-500"
                  style={cardStyle("fees", activeHighlight)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[10px] font-semibold text-[#0f172a]">Fees</div>
                    <div className="text-[8px] text-[#64748b]">This month</div>
                  </div>
                  <div className="text-[20px] font-bold text-[#0f172a] leading-none">₹1.2Cr</div>
                  <div className="text-[9px] text-[#94a3b8] mb-2">Collected</div>
                  <div className="bg-[#FEF3C7] rounded-lg px-2.5 py-2 mb-2">
                    <div className="text-[8px] text-[#92400E] font-medium">Outstanding</div>
                    <div className="text-[13px] font-bold text-[#92400E] leading-tight">₹18.6L</div>
                    <div className="text-[8px] text-[#92400E]/70">94 overdue bills</div>
                  </div>
                  <div className="space-y-1 flex-1">
                    {[
                      { name: "RazorPay", amt: "₹45.2L", color: "#2563EB" },
                      { name: "CCAvenue", amt: "₹38.4L", color: "#7C3AED" },
                      { name: "Offline",  amt: "₹36.4L", color: "#16A34A" },
                    ].map(({ name, amt, color }) => (
                      <div key={name} className="flex items-center justify-between text-[9px]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                          <span className="text-[#64748b]">{name}</span>
                        </div>
                        <span className="font-medium text-[#0f172a]">{amt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 — small stat cards */}
              <div className="grid grid-cols-4 gap-2.5 shrink-0">
                {STAT_CARDS.map(({ label, value, sub, icon: Icon, color }) => (
                  <div key={label} className="rounded-xl border border-[#e2e8f0] bg-white p-2.5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: color + "18" }}>
                        <Icon size={10} style={{ color }} />
                      </div>
                      <span className="text-[8px] text-[#94a3b8] truncate">{label}</span>
                    </div>
                    <div className="text-[14px] font-bold text-[#0f172a] leading-none">{value}</div>
                    <div className="text-[8px] text-[#94a3b8] mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── ⌘K Palette ── */}
      {showPalette && (
        <div
          className="absolute left-6 right-6 flex justify-center"
          style={{ top: "16%", pointerEvents: "none" }}
        >
          <div
            className="w-[480px] rounded-2xl overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
              background: "rgba(15, 23, 42, 0.94)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07]">
              <Command size={13} className="text-[#2563EB] shrink-0" />
              <span className="flex-1 text-[12px] text-white font-medium">{q.prompt}</span>
              <kbd className="text-[9px] text-white/25 font-mono bg-white/[0.05] border border-white/[0.10] rounded px-1.5 py-0.5">ESC</kbd>
            </div>
            <div className="px-4 py-3">
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                >
                  <span className="text-white text-[9px] font-bold">N</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-semibold text-white leading-tight">{q.result}</div>
                  <div className="text-[10px] text-white/45 mt-0.5">{q.detail}</div>
                </div>
                <div
                  className="shrink-0 text-[9px] font-medium px-2 py-0.5 rounded-full mt-0.5"
                  style={{ background: q.tagColor + "22", color: q.tagColor }}
                >
                  {q.tag}
                </div>
              </div>
            </div>
            <div className="px-4 pb-3 flex gap-1.5">
              {["Attendance", "Fees", "Students", "Admissions"].map((chip, i) => (
                <div
                  key={chip}
                  className="text-[9px] text-white/35 border border-white/[0.07] rounded-full px-2.5 py-1"
                  style={{ opacity: i === 0 ? 0.85 : 0.45 }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      </div>{/* end dashboard + palette wrapper */}

      {/* ── Right feature chips ── */}
      <div className="hidden lg:flex flex-col gap-3 pt-8 pl-5 w-48 shrink-0">
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
            backdropFilter: "blur(12px)",
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
  );
}
