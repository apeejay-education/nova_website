"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users, CalendarCheck, IndianRupee, GraduationCap,
  BookOpen, BarChart2, Leaf, FileText, TrendingUp,
  FlaskConical, ChevronRight, Sparkles, Shield,
  MessageSquare, Zap,
} from "lucide-react";

// ── Board data ───────────────────────────────────────────────────────────────

type BoardStatus = "live" | "coming-soon";

interface ModuleSpot {
  icon: React.ElementType;
  name: string;
  boardLabel: string;
  description: string;
  compliance: string;
}

interface ComplianceItem {
  label: string;
  desc: string;
}

interface BoardData {
  id: string;
  label: string;
  status: BoardStatus;
  tagline: string;
  modules: ModuleSpot[];
  compliance: ComplianceItem[];
}

const BOARDS: BoardData[] = [
  {
    id: "cbse",
    label: "CBSE",
    status: "live",
    tagline: "Built for India's largest curriculum board",
    modules: [
      {
        icon: Users,
        name: "Student Information System",
        boardLabel: "APAAR & UDISE Ready",
        description: "Bulk APAAR ID capture with consent tracking. UDISE+ data export with Aadhaar mismatch validator — eliminating the 30–40% error rate schools face today.",
        compliance: "APAAR · UDISE+ · PEN",
      },
      {
        icon: CalendarCheck,
        name: "Attendance",
        boardLabel: "75% Rule — Enforced",
        description: "Auto-flag at 80% (before the threshold) and 75%. CBSE-compliant condonation format for Regional Office. Parent WhatsApp alert before the window closes.",
        compliance: "CBSE Bye-Laws 13 & 14",
      },
      {
        icon: IndianRupee,
        name: "Fee Management",
        boardLabel: "Zero Setup Fee",
        description: "Online + offline collections, defaulter identification, and instant parent notifications. Live fee dashboard for your accounts team.",
        compliance: "CBSE Financial Disclosure",
      },
      {
        icon: GraduationCap,
        name: "Holistic Progress Cards",
        boardLabel: "NEP 2020 Native",
        description: "5-domain HPC built from the ground up — not bolted on. Cognitive, Social-Emotional, Physical, Creative, Values. Bulk teacher entry. Principal completion dashboard.",
        compliance: "NEP 2020 · CCE · HPC",
      },
    ],
    compliance: [
      { label: "OASIS Annual Export", desc: "Staff, infrastructure & financials in CBSE-prescribed format" },
      { label: "LOC Submission", desc: "Subject combination validation + APAAR link for Class 10 & 12" },
      { label: "APAAR Consent Tracking", desc: "Bulk capture, REFUSED/NOGEN audit trail, UIDAI correction status" },
      { label: "SARAS Readiness", desc: "Year-round affiliation compliance documentation dashboard" },
      { label: "CBSE Circular Alerts", desc: "Auto-notify relevant staff when a new circular affects their domain" },
    ],
  },
  {
    id: "icse",
    label: "ICSE",
    status: "live",
    tagline: "The only ERP with native ICSE assessment architecture",
    modules: [
      {
        icon: Users,
        name: "Student Information System",
        boardLabel: "CAREERS Export Ready",
        description: "Internal assessment marks export directly in CISCE CAREERS format. No copy-paste. No manual entry into the portal. Candidate registration workflow built in.",
        compliance: "CISCE CAREERS",
      },
      {
        icon: BarChart2,
        name: "Assessment Engine",
        boardLabel: "80/20 & 50/50 Splits",
        description: "Per-subject internal assessment configuration — not a global formula. ICSE 80/20 for all subjects. ISC Group III 50/50 for vocational. Both handled natively.",
        compliance: "CISCE ISC Regulations 2025",
      },
      {
        icon: Leaf,
        name: "SUPW Tracker",
        boardLabel: "Unique to Nova",
        description: "Two-year SUPW tracking across 5 criteria: Preparation, Organisation, Skills, Research, Interest. A–E letter grading. The module no other ERP builds.",
        compliance: "CISCE SUPW Syllabus",
      },
      {
        icon: IndianRupee,
        name: "Fee Management",
        boardLabel: "CISCE Exam Fees",
        description: "School fees + CISCE examination fee tracking per student. Defaulter alerts. ISC practical examination fee handling.",
        compliance: "CISCE Fee Structure",
      },
    ],
    compliance: [
      { label: "CAREERS Portal Export", desc: "Internal marks in CISCE-compatible format — submission ready" },
      { label: "SUPW Module", desc: "5-criteria, 2-year assessment — the compliance gap no competitor fills" },
      { label: "Subject-wise 80/20 Config", desc: "Each subject has its own internal assessment component breakdown" },
      { label: "ISC Practical Marks", desc: "Theory and practical marks managed and reported separately" },
      { label: "CISCE TC Format", desc: "Transfer certificates in CISCE-prescribed format with CISCE Reg. No." },
    ],
  },
  {
    id: "ib",
    label: "IB",
    status: "coming-soon",
    tagline: "IB Diploma · MYP · PYP — purpose-built",
    modules: [
      {
        icon: Users,
        name: "Student Information System",
        boardLabel: "IBIS Export",
        description: "Student data and IA marks export in IB Information System (IBIS) format. HL/SL subject designation and subject group validation per student.",
        compliance: "IBIS · IBO",
      },
      {
        icon: BookOpen,
        name: "CAS Tracker",
        boardLabel: "Creativity · Activity · Service",
        description: "Log CAS experiences, track reflections, monitor completion. Alerts for students falling behind. IB Coordinator dashboard with school-wide CAS status.",
        compliance: "IB DP CAS Requirements",
      },
      {
        icon: FileText,
        name: "EE & TOK Management",
        boardLabel: "Bonus Points Matrix",
        description: "Extended Essay supervisor matching, draft submission tracking, TOK Exhibition + Essay grades. Automatic bonus point calculation (TOK × EE matrix).",
        compliance: "IB DP Core",
      },
      {
        icon: TrendingUp,
        name: "Predicted Grades",
        boardLabel: "University Applications",
        description: "Predicted grade entry per subject. Live diploma total projection (max 45). UCAS and Common App data export for university counsellors.",
        compliance: "IB DP · UCAS",
      },
    ],
    compliance: [
      { label: "IBIS Export", desc: "Candidate data and IA marks in IBO-compatible format" },
      { label: "CAS Completion Dashboard", desc: "IB Coordinator view of every student's CAS status" },
      { label: "IA Marks Pipeline", desc: "Internal assessment from first draft to moderation submission" },
      { label: "Predicted Grade Reports", desc: "Per-student DP score projection for university applications" },
      { label: "MYP Criteria Assessment", desc: "A–D criteria scoring with automatic 1–7 grade conversion" },
    ],
  },
  {
    id: "cambridge",
    label: "Cambridge",
    status: "coming-soon",
    tagline: "IGCSE · AS & A Level — Centre Admin ready",
    modules: [
      {
        icon: Users,
        name: "Student Information System",
        boardLabel: "CAIE Centre Admin",
        description: "Candidate data export in Cambridge Centre Administration format. Centre Number and Candidate Number management. Subject-level CAIE syllabus code mapping.",
        compliance: "CAIE",
      },
      {
        icon: FileText,
        name: "Coursework & IA",
        boardLabel: "Per-Syllabus Config",
        description: "Coursework percentage configurable per CAIE syllabus code. Internal assessment marks export for IBO moderation. Oral exam scheduling for modern languages.",
        compliance: "CAIE Syllabus Codes",
      },
      {
        icon: FlaskConical,
        name: "Practical Marks",
        boardLabel: "Theory + Practical Split",
        description: "Practical examination marks managed separately from theory. Lab record completion tracking per student. External vs. internal examiner mark management.",
        compliance: "CAIE Assessment",
      },
      {
        icon: TrendingUp,
        name: "Predicted Grades",
        boardLabel: "A* to G Scale",
        description: "Predicted grade entry in IGCSE A*–G scale (and 1–9 for updated syllabi). AS & A Level predicted grades for UCAS applications.",
        compliance: "UCAS · University",
      },
    ],
    compliance: [
      { label: "CAIE Export Format", desc: "Candidate registrations for Cambridge Centre Administration" },
      { label: "Syllabus Code Mapping", desc: "Per-subject CAIE codes configured in student records" },
      { label: "CAIE Examination Fees", desc: "Per-student, per-subject GBP/USD examination fee tracking" },
      { label: "A*–G Grade Engine", desc: "Full Cambridge grading scale with coursework components" },
      { label: "Predicted Grades + UCAS", desc: "University application support for A Level students" },
    ],
  },
];

// ── Animated blobs ───────────────────────────────────────────────────────────

const BLOBS = [
  { color: "rgba(37,99,235,0.28)", w: 500, h: 450, top: "-10%", left: "-8%", dur: 28, x: [0, 25, -15, 0], y: [0, -20, 15, 0] },
  { color: "rgba(124,58,237,0.18)", w: 420, h: 380, top: "35%", left: "22%", dur: 36, x: [0, -30, 18, 0], y: [0, 18, -25, 0] },
  { color: "rgba(79,70,229,0.14)", w: 360, h: 320, top: "60%", left: "-5%", dur: 30, x: [0, 18, -12, 0], y: [0, 28, -8, 0] },
];

// ── Main component ───────────────────────────────────────────────────────────

export default function SolutionsSchoolsClient() {
  const [activeBoard, setActiveBoard] = useState("cbse");

  // Handle #ib hash from nav
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#ib") {
      setActiveBoard("ib");
    }
  }, []);

  const board = BOARDS.find((b) => b.id === activeBoard) ?? BOARDS[0];

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ background: "#0b0f1a" }}>
        {BLOBS.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: blob.w, height: blob.h,
              top: blob.top, left: blob.left,
              background: `radial-gradient(ellipse at center, ${blob.color} 0%, transparent 70%)`,
              filter: "blur(72px)",
            }}
            animate={{ x: blob.x, y: blob.y }}
            transition={{ duration: blob.dur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{ background: "rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.28)" }}>
            <Shield size={11} style={{ color: "#93C5FD" }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: "linear-gradient(90deg, #60A5FA, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Compliance — Handled
            </span>
          </div>

          {/* Portal names — the hook */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {["APAAR", "OASIS", "UDISE+", "LOC", "HPC", "CAREERS", "SUPW"].map((portal) => (
              <span key={portal}
                className="rounded-full px-4 py-1.5 text-[13px] font-bold tracking-wide"
                style={{
                  background: "rgba(37,99,235,0.12)",
                  border: "1px solid rgba(37,99,235,0.30)",
                  color: "#93C5FD",
                }}>
                {portal}
              </span>
            ))}
          </div>

          <h1 className="text-white leading-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, letterSpacing: "-0.025em" }}>
            Every government mandate.
            <br />
            <span style={{
              background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Handled automatically.
            </span>
          </h1>

          <p className="text-white/50 text-[16px] leading-relaxed max-w-2xl mx-auto mb-10">
            Nova is the only school ERP built natively for CBSE, ICSE, IB, and Cambridge boards — not configured around them.
            Your compliance is not a feature. It's the foundation.
          </p>

          {/* Stats strip */}
          <div className="inline-flex items-center divide-x divide-white/10 rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
            {[
              { n: "8", label: "Gov't portals covered" },
              { n: "4", label: "Curriculum boards" },
              { n: "0", label: "Setup fee" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-3 text-center">
                <p className="text-white font-bold text-xl">{s.n}</p>
                <p className="text-white/45 text-[11px] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave to white */}
        <div className="relative overflow-hidden bg-white" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <path d="M0,0 L1440,0 L1440,40 C1080,68 360,8 0,40 Z" fill="#0b0f1a" />
          </svg>
        </div>
      </div>

      {/* ── BOARD TABS + CONTENT ── */}
      <div className="bg-white pb-0">
        <div className="max-w-6xl mx-auto px-6">

          {/* Tab bar */}
          <div className="flex items-center gap-2 pt-4 pb-8 overflow-x-auto">
            {BOARDS.map((b) => {
              const isActive = activeBoard === b.id;
              const isSoon = b.status === "coming-soon";
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveBoard(b.id)}
                  className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #2563EB, #7C3AED)"
                      : isSoon ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.06)",
                    color: isActive ? "white" : isSoon ? "#9CA3AF" : "#374151",
                    boxShadow: isActive ? "0 2px 16px rgba(37,99,235,0.35)" : "none",
                    border: isSoon && !isActive ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  {b.label}
                  {isSoon && !isActive && (
                    <span className="rounded-full px-1.5 py-0.5 text-[9px] font-bold tracking-wide uppercase"
                      style={{ background: "rgba(245,158,11,0.15)", color: "#D97706" }}>
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeBoard}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Board tagline */}
            <p className="text-[13px] font-semibold tracking-widest uppercase mb-8"
              style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {board.tagline}
            </p>

            {/* Coming Soon overlay for IB/Cambridge */}
            {board.status === "coming-soon" ? (
              <div className="rounded-3xl p-16 text-center mb-16"
                style={{ background: "rgba(0,0,0,0.02)", border: "1.5px dashed rgba(0,0,0,0.10)" }}>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
                  style={{ background: "rgba(245,158,11,0.10)", border: "1px solid rgba(245,158,11,0.25)" }}>
                  <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "#D97706" }}>Coming Soon</span>
                </div>
                <h2 className="text-[28px] font-semibold text-[#111827] leading-tight mb-3">
                  {board.label} support is in development.
                </h2>
                <p className="text-neutral-500 text-[15px] max-w-lg mx-auto mb-8">
                  We're building native {board.label} compliance — {board.tagline.toLowerCase()}.
                  Leave your details and be first to know when it's live.
                </p>
                <Link href="/book-demo"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", boxShadow: "0 0 24px rgba(37,99,235,0.30)" }}>
                  Express Interest
                  <ChevronRight size={14} />
                </Link>

                {/* Preview modules (grayed) */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left opacity-40 pointer-events-none">
                  {board.modules.map((mod) => (
                    <div key={mod.name} className="rounded-2xl p-5 bg-neutral-50 border border-neutral-100">
                      <div className="flex items-start gap-3">
                        <mod.icon size={18} className="text-neutral-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-neutral-600 text-[13px]">{mod.name}</p>
                          <p className="text-neutral-400 text-[12px] mt-1">{mod.boardLabel}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* 2×2 Module grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                  {board.modules.map((mod) => (
                    <div key={mod.name}
                      className="rounded-2xl p-6 border transition-shadow hover:shadow-md"
                      style={{ background: "white", borderColor: "rgba(0,0,0,0.07)" }}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
                          <mod.icon size={18} style={{ color: "#2563EB" }} />
                        </div>
                        <span className="rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide"
                          style={{ background: "rgba(37,99,235,0.07)", color: "#2563EB" }}>
                          {mod.boardLabel}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[#111827] text-[15px] mb-2">{mod.name}</h3>
                      <p className="text-neutral-500 text-[13px] leading-relaxed mb-3">{mod.description}</p>
                      {mod.compliance && (
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-300">
                          {mod.compliance}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Compliance callout strip */}
                <div className="rounded-2xl p-6 mb-16"
                  style={{ background: "rgba(37,99,235,0.03)", border: "1px solid rgba(37,99,235,0.12)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={14} style={{ color: "#2563EB" }} />
                    <p className="text-[11px] font-bold tracking-widest uppercase"
                      style={{ color: "#2563EB" }}>
                      {board.label} Compliance — Covered
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {board.compliance.map((item) => (
                      <div key={item.label} className="flex items-start gap-2.5">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }} />
                        <div>
                          <p className="text-[13px] font-semibold text-[#111827]">{item.label}</p>
                          <p className="text-[12px] text-neutral-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── ASK NOVA SECTION ── */}
      <div className="relative overflow-hidden" style={{ background: "#0b0f1a" }}>
        {/* Wave from white */}
        <div className="relative overflow-hidden" style={{ height: 64, background: "white" }}>
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <path d="M0,0 L1440,0 L1440,64 C1080,20 360,56 0,20 Z" fill="#0b0f1a" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.28)" }}>
            <Zap size={11} style={{ color: "#93C5FD" }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: "linear-gradient(90deg, #60A5FA, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ask Nova — Live
            </span>
          </div>

          <h2 className="text-white font-semibold leading-tight mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.02em" }}>
            Your school data.<br />
            <span style={{ background: "linear-gradient(90deg, #60A5FA, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One question away.
            </span>
          </h2>

          <p className="text-white/50 text-[15px] mb-10 max-w-xl mx-auto">
            Type anything. Nova searches across every module — attendance, fees, transport, hostel — and answers instantly.
          </p>

          {/* Query demo card */}
          <div className="rounded-2xl p-6 mb-4 text-left max-w-2xl mx-auto"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
            <div className="flex items-start gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)" }}>
                <MessageSquare size={14} style={{ color: "#93C5FD" }} />
              </div>
              <div className="flex-1 rounded-xl px-4 py-3"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-white/80 text-[14px] leading-relaxed">
                  Show me Class 12 students below 75% attendance who also have pending fees — send their parents a WhatsApp.
                </p>
              </div>
            </div>

            {/* Response */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}>
                <Sparkles size={13} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="rounded-xl px-4 py-3 mb-3"
                  style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)" }}>
                  <p className="text-white/85 text-[13px] leading-relaxed">
                    Found <span className="text-[#93C5FD] font-semibold">14 students</span> in Class 12 with attendance below 75% and outstanding fees.
                    Draft WhatsApp sent to all 14 parents. <span className="text-white/50">View list →</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {["14 students flagged", "WhatsApp drafted", "Fees: ₹4.2L outstanding"].map((chip) => (
                    <span key={chip} className="rounded-full px-3 py-1 text-[11px] font-medium"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/30 text-[12px]">
            Ask Nova · Natural language · Crosses all modules · No report builder needed
          </p>
        </div>

        {/* Wave to white */}
        <div className="relative overflow-hidden bg-white" style={{ height: 64 }}>
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <path d="M0,0 L1440,0 L1440,64 C1080,20 360,56 0,20 Z" fill="#0b0f1a" />
          </svg>
        </div>
      </div>

      {/* ── NOVA LOUNGE + CTA ── */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-4 pb-24">

          {/* Nova Lounge card */}
          <div className="rounded-3xl p-8 mb-8"
            style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.14)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold tracking-widest uppercase"
                    style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Nova Lounge
                  </span>
                  <span className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                    style={{ background: "rgba(22,163,74,0.12)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.20)" }}>
                    WSUYD
                  </span>
                </div>
                <h3 className="text-[#111827] font-semibold text-[18px] leading-tight mb-1">
                  We Stay Until You're Done.
                </h3>
                <p className="text-neutral-500 text-[13px] leading-relaxed">
                  70% of school ERP implementations fail. Nova Lounge means our team stays on-site and remotely
                  until every staff member is trained, every module is live, and your school is running — not just handed over.
                </p>
              </div>
              <Link href="/book-demo"
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", boxShadow: "0 0 24px rgba(37,99,235,0.30)" }}>
                Book a Demo
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Price anchor */}
          <div className="text-center">
            <p className="text-neutral-400 text-[13px] mb-1">
              <span className="line-through mr-2">$1 / student / month</span>
              <span className="text-[#2563EB] font-semibold">₹35 / student / month</span>
              {" "}· Introductory launch pricing · All 8 modules included
            </p>
            <p className="text-neutral-300 text-[11px]">No setup fee. No add-ons. No surprise invoices.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
