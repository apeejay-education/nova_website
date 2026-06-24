"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Building2, BarChart2, Zap,
  LayoutGrid, IndianRupee, Copy, Users, Shield,
  ChevronRight, ChevronDown, Sparkles, MessageSquare,
  Plus, Minus, Camera, Play, CheckCircle2, XCircle, ArrowRight,
} from "lucide-react";
import Footer from "@/components/sections/Footer";
import BookDemoModal from "@/components/forms/BookDemoModal";

// ─── colour tokens ────────────────────────────────────────────────────────────
const TEAL   = "#0D9488";
const TLIGHT = "#5EEAD4";
const DARK   = "#0b0f1a";
const CREAM  = "#f5f2ee";

// ─── teal wave divider (dark → cream) ────────────────────────────────────────
function WaveDarkToCream() {
  return (
    <div className="relative overflow-hidden" style={{ height: 96, background: CREAM }}>
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={TEAL}   stopOpacity="0.8" />
            <stop offset="100%" stopColor={TLIGHT} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,44 C1120,4 320,84 0,44 Z" fill={DARK} />
        <path d="M0,38 C320,78 1120,-2 1440,38 L1440,50 C1120,10 320,90 0,50 Z" fill="url(#tg1)" opacity="0.9" />
      </svg>
    </div>
  );
}

// ─── slash divider (cream → white) ───────────────────────────────────────────
function SlashCreamToWhite() {
  return (
    <div className="relative overflow-hidden bg-white" style={{ height: 72 }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="tg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={TEAL}   />
            <stop offset="100%" stopColor={TLIGHT} />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,16 L0,56 Z" fill={CREAM} />
        <path d="M0,52 L1440,12 L1440,20 L0,60 Z" fill="url(#tg2)" opacity="0.65" />
      </svg>
    </div>
  );
}

// ─── teal glow-line divider ──────────────────────────────────────────────────
function GlowLineTeal() {
  const DOTS = [
    { x: 118,  y: 50,  r: 2.5, o: 0.90 },
    { x: 288,  y: 28,  r: 1.5, o: 0.55 },
    { x: 432,  y: 64,  r: 3.0, o: 0.85 },
    { x: 582,  y: 34,  r: 1.8, o: 0.60 },
    { x: 722,  y: 74,  r: 1.5, o: 0.45 },
    { x: 862,  y: 52,  r: 2.5, o: 0.80 },
    { x: 1022, y: 32,  r: 2.0, o: 0.65 },
    { x: 1182, y: 60,  r: 3.0, o: 0.90 },
    { x: 1342, y: 42,  r: 1.5, o: 0.50 },
  ];
  const CURVES = [
    "M118,50 C240,56 350,61 432,64",
    "M432,64 C540,68 640,72 722,74",
    "M722,74 C800,66 860,58 862,52",
    "M862,52 C930,42 980,36 1022,32",
    "M1022,32 C1100,38 1140,48 1182,60",
    "M1182,60 C1260,50 1310,44 1342,42",
  ];
  return (
    <div className="relative overflow-hidden" style={{ height: 120, background: DARK }} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: 600, height: 120,
          background: "radial-gradient(ellipse at 50% 50%, rgba(13,148,136,0.15) 0%, rgba(13,148,136,0.06) 45%, transparent 70%)" }} />
      <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMid meet" fill="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="tgl1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={TEAL}   stopOpacity="0.0" />
            <stop offset="25%"  stopColor={TEAL}   stopOpacity="0.45" />
            <stop offset="75%"  stopColor={TLIGHT} stopOpacity="0.40" />
            <stop offset="100%" stopColor={TLIGHT} stopOpacity="0.0" />
          </linearGradient>
          <filter id="tdg1" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="0" y1="60" x2="1440" y2="60" stroke="url(#tgl1)" strokeWidth="1" />
        {CURVES.map((d, i) => (
          <path key={i} d={d} stroke={TEAL} strokeWidth="0.8" strokeOpacity="0.30" />
        ))}
        {DOTS.map(({ x, y, r, o }, i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={TEAL} opacity={o} filter="url(#tdg1)" />
        ))}
      </svg>
    </div>
  );
}

// ─── wave divider (white → dark) ─────────────────────────────────────────────
function WaveWhiteToDark() {
  return (
    <div className="relative overflow-hidden" style={{ height: 56, background: DARK }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="tg3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={TEAL}   stopOpacity="0.55" />
            <stop offset="100%" stopColor={TLIGHT} stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path d="M0,56 L1440,56 L1440,0 C1080,44 360,8 0,36 Z" fill="white" />
        <path d="M0,32 C360,6 1080,40 1440,-2 L1440,6 C1080,48 360,14 0,40 Z" fill="url(#tg3)" opacity="0.65" />
      </svg>
    </div>
  );
}

// ─── Image / video placeholder helpers ──────────────────────────────────────
function VideoPlaceholder({ label, prompt, dark = false }: { label: string; prompt: string; dark?: boolean }) {
  return (
    <div className="relative rounded-2xl overflow-hidden w-full aspect-video flex items-center justify-center"
      style={{ background: dark
        ? "linear-gradient(135deg, rgba(13,148,136,0.12), rgba(11,15,26,0.85))"
        : "linear-gradient(135deg, rgba(13,148,136,0.07), rgba(13,148,136,0.02))",
        border: "1.5px dashed rgba(13,148,136,0.28)" }}>
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
          style={{ background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.30)" }}>
          <Play size={18} style={{ color: dark ? TLIGHT : TEAL }} />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: dark ? TLIGHT : TEAL }}>
          {label}
        </p>
        <p className={`text-[10px] leading-relaxed max-w-[300px] ${dark ? "text-white/40" : "text-neutral-400"}`}>
          {prompt}
        </p>
      </div>
    </div>
  );
}

// ─── Campus hub-and-spoke SVG ────────────────────────────────────────────────
const CAMPUS_NODES = [
  { id: "Delhi",     cx: 400, cy: 68  },
  { id: "Mumbai",    cx: 537, cy: 125 },
  { id: "Pune",      cx: 594, cy: 262 },
  { id: "Jaipur",    cx: 537, cy: 399 },
  { id: "Chennai",   cx: 400, cy: 456 },
  { id: "Kolkata",   cx: 263, cy: 399 },
  { id: "Hyderabad", cx: 206, cy: 262 },
  { id: "Noida",     cx: 263, cy: 125 },
];

function CampusHub() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="w-full max-w-md mx-auto select-none">
      <svg viewBox="100 40 600 460" fill="none" className="w-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="thub-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={TEAL}  stopOpacity="0.22" />
            <stop offset="100%" stopColor={TEAL}  stopOpacity="0.04" />
          </radialGradient>
          <filter id="thub-glow">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="tnode-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor={TEAL} floodOpacity="0.20" />
          </filter>
        </defs>

        {/* Concentric rings */}
        <circle cx="400" cy="262" r="215" stroke={TEAL} strokeWidth="0.6" strokeOpacity="0.10" strokeDasharray="4 7" />
        <circle cx="400" cy="262" r="140" stroke={TEAL} strokeWidth="0.6" strokeOpacity="0.07" strokeDasharray="3 9" />

        {/* Spoke lines — animated */}
        {CAMPUS_NODES.map((n, i) => (
          <motion.path key={n.id}
            d={`M 400,262 L ${n.cx},${n.cy}`}
            stroke={TEAL} strokeWidth="1.4" strokeOpacity="0.30"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: "easeOut" }}
          />
        ))}

        {/* Centre glow */}
        <motion.circle cx="400" cy="262" r="56" fill="url(#thub-bg)"
          initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.05 }} />
        <circle cx="400" cy="262" r="56" stroke={TEAL} strokeWidth="1.8" strokeOpacity="0.50" />
        <text x="400" y="257" textAnchor="middle" fill={TEAL} fontSize="14" fontWeight="800" letterSpacing="1.5">NOVA</text>
        <text x="400" y="273" textAnchor="middle" fill={TEAL} fontSize="8.5" opacity="0.60" fontWeight="500">All Campuses</text>

        {/* Campus nodes */}
        {CAMPUS_NODES.map((n, i) => (
          <motion.g key={n.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.40, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <circle cx={n.cx} cy={n.cy} r="36" fill="white" stroke={TEAL} strokeWidth="1.6" strokeOpacity="0.48"
              filter="url(#tnode-shadow)" />
            <circle cx={n.cx} cy={n.cy} r="36" fill={TEAL} fillOpacity="0.05" />
            <text x={n.cx} y={n.cy + 5} textAnchor="middle" dominantBaseline="middle"
              fill={TEAL} fontSize={n.id.length > 6 ? "8.5" : "10"} fontWeight="800">
              {n.id}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// ─── Split-world before/after backgrounds ────────────────────────────────────
function SplitLeft() {
  return (
    <svg className="absolute left-0 top-0 h-full" style={{ width: "50%" }}
      viewBox="0 0 720 900" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
      <line x1="80"  y1="80"  x2="220" y2="160" stroke="rgba(160,140,110,0.18)" strokeWidth="1.5" strokeDasharray="8 6" />
      <line x1="260" y1="50"  x2="380" y2="130" stroke="rgba(160,140,110,0.12)" strokeWidth="1"   strokeDasharray="4 9" />
      <line x1="100" y1="220" x2="280" y2="330" stroke="rgba(160,140,110,0.16)" strokeWidth="1.5" strokeDasharray="7 5" />
      <line x1="350" y1="200" x2="460" y2="290" stroke="rgba(160,140,110,0.10)" strokeWidth="1"   strokeDasharray="3 8" />
      <line x1="50"  y1="400" x2="190" y2="490" stroke="rgba(160,140,110,0.18)" strokeWidth="1.5" strokeDasharray="8 5" />
      <line x1="220" y1="440" x2="400" y2="560" stroke="rgba(160,140,110,0.12)" strokeWidth="1"   strokeDasharray="5 7" />
      <line x1="310" y1="620" x2="510" y2="730" stroke="rgba(160,140,110,0.14)" strokeWidth="1"   strokeDasharray="4 6" />
      <path d="M190,270 L230,250 L260,278 L222,300 Z" stroke="rgba(160,140,110,0.14)" strokeWidth="1" fill="none" />
      <path d="M410,460 L452,440 L466,470 L426,492 Z" stroke="rgba(160,140,110,0.12)" strokeWidth="1" fill="none" />
      <circle cx="155" cy="130" r="3"   fill="rgba(160,140,110,0.22)" />
      <circle cx="390" cy="215" r="2"   fill="rgba(160,140,110,0.16)" />
      <circle cx="270" cy="360" r="3.5" fill="rgba(160,140,110,0.18)" />
      <circle cx="180" cy="530" r="2"   fill="rgba(160,140,110,0.16)" />
    </svg>
  );
}

function SplitRight() {
  return (
    <>
      <div className="absolute right-0 top-0 w-3/5 h-full" style={{
        background: "radial-gradient(ellipse 70% 65% at 65% 48%, rgba(13,148,136,0.10) 0%, rgba(13,148,136,0.04) 50%, transparent 72%)"
      }} />
      <svg className="absolute right-0 top-0 h-full" style={{ width: "55%" }}
        viewBox="0 0 792 900" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
        <path d="M160,120 C260,160 380,190 520,170" stroke="rgba(13,148,136,0.14)" strokeWidth="1.5" />
        <path d="M120,260 C260,300 380,340 560,310" stroke="rgba(13,148,136,0.10)" strokeWidth="1" />
        <path d="M180,440 C310,470 450,450 600,430" stroke="rgba(13,148,136,0.09)" strokeWidth="1.5" />
        <path d="M100,620 C260,650 410,640 580,610" stroke="rgba(13,148,136,0.11)" strokeWidth="1" />
        <circle cx="520" cy="170" r="3"   fill="rgba(13,148,136,0.30)" />
        <circle cx="560" cy="310" r="2.5" fill="rgba(13,148,136,0.24)" />
        <circle cx="600" cy="430" r="3"   fill="rgba(13,148,136,0.22)" />
        <circle cx="580" cy="610" r="2"   fill="rgba(13,148,136,0.20)" />
        <circle cx="320" cy="340" r="2.5" fill="rgba(13,148,136,0.16)" />
      </svg>
    </>
  );
}

// ─── Ask Nova typewriter ──────────────────────────────────────────────────────
const Q_TEXT = "Which 3 campuses have the highest outstanding fee dues this month — and what is the combined group exposure?";
const R_TEXT = "Pune leads with ₹14.2L outstanding (312 students). Chennai ₹11.8L (267 students). Noida ₹9.4L (198 students). Combined group exposure: ₹35.4 lakhs.";
const CHIPS  = ["₹35.4L combined", "777 students flagged", "3 campuses"];

function AskNovaAnimated() {
  const [phase, setPhase] = useState<"idle"|"typing"|"thinking"|"responding"|"done">("idle");
  const [qText, setQText] = useState("");
  const [rText, setRText] = useState("");
  const [chips,  setChips]  = useState(false);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => { if (inView && phase === "idle") setPhase("typing"); }, [inView, phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setQText(Q_TEXT.slice(0, i));
      if (i >= Q_TEXT.length) { clearInterval(id); setPhase("thinking"); }
    }, 26);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "thinking") return;
    const id = setTimeout(() => setPhase("responding"), 1100);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "responding") return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setRText(R_TEXT.slice(0, i));
      if (i >= R_TEXT.length) { clearInterval(id); setPhase("done"); setTimeout(() => setChips(true), 280); }
    }, 20);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <div ref={ref} className="rounded-2xl p-6 text-left max-w-2xl mx-auto"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>

      {/* User query */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "rgba(13,148,136,0.22)", border: `1px solid rgba(13,148,136,0.38)` }}>
          <MessageSquare size={14} style={{ color: TLIGHT }} />
        </div>
        <div className="flex-1 rounded-xl px-4 py-3 min-h-[48px]"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/80 text-[14px] leading-relaxed">
            {qText}
            {phase === "typing" && (
              <span className="inline-block w-[2px] h-[14px] ml-0.5 align-middle animate-pulse"
                style={{ background: TLIGHT }} />
            )}
          </p>
        </div>
      </div>

      {/* Nova response */}
      {(phase === "thinking" || phase === "responding" || phase === "done") && (
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `linear-gradient(135deg, ${TEAL}, #0f766e)` }}>
            <motion.div animate={phase === "thinking" ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1.5, repeat: phase === "thinking" ? Infinity : 0, ease: "linear" }}>
              <Sparkles size={13} className="text-white" />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="rounded-xl px-4 py-3 mb-3"
              style={{ background: "rgba(13,148,136,0.14)", border: "1px solid rgba(13,148,136,0.26)" }}>
              {phase === "thinking" ? (
                <div className="flex items-center gap-1.5 py-1">
                  {[0,1,2].map(i => (
                    <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: TLIGHT }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.22 }} />
                  ))}
                </div>
              ) : (
                <p className="text-white/85 text-[13px] leading-relaxed">
                  Pune leads with{" "}
                  <span style={{ color: TLIGHT }} className="font-semibold">₹14.2L outstanding</span>
                  {" "}(312 students). Chennai ₹11.8L (267 students). Noida ₹9.4L (198 students).
                  {rText.length > 140 && <> Combined group exposure: <span style={{ color: TLIGHT }} className="font-semibold">₹35.4 lakhs</span>.</>}
                  {phase === "responding" && (
                    <span className="inline-block w-[2px] h-[12px] ml-0.5 align-middle animate-pulse"
                      style={{ background: TLIGHT }} />
                  )}
                  {phase === "done" && (
                    <span style={{ color: "rgba(255,255,255,0.38)" }}> View campuses →</span>
                  )}
                </p>
              )}
            </div>

            <AnimatePresence>
              {chips && (
                <div className="flex flex-wrap gap-2">
                  {CHIPS.map((chip, i) => (
                    <motion.span key={chip}
                      initial={{ opacity: 0, scale: 0.80, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: i * 0.11, type: "spring", stiffness: 320, damping: 20 }}
                      className="rounded-full px-3 py-1 text-[11px] font-medium"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.52)",
                        border: "1px solid rgba(255,255,255,0.09)" }}>
                      {chip}
                    </motion.span>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Static data ──────────────────────────────────────────────────────────────
const STATS = [
  { number: "8",    label: "Boards managed in one group account",     sub: "CBSE · ICSE · IB · Cambridge · State · Pre-Primary · Vocational · Open" },
  { number: "1",    label: "Login for your entire group",             sub: "Group Director sees all campuses — no switching, no calling principals" },
  { number: "Zero", label: "Manual monthly rollup calls",             sub: "Fee collection, attendance, outcomes — live on the Group Dashboard" },
];

const WORKFLOW = [
  { before: "Group Director calls each principal every Monday morning to collect attendance, fee outstanding, and exam results. Numbers arrive by Tuesday afternoon.", after: "Nova Group Dashboard shows all campuses live — enrollment, attendance %, collections, and outstanding dues for every campus. No calls." },
  { before: "Transferring a teacher between campuses means a chain of emails, risk of losing service records, and a month of HR paperwork.", after: "Nova's cross-campus HR module handles the full transfer workflow — service continuity maintained, salary records updated, access rights transferred." },
  { before: "Opening a new campus is a 6-month ERP setup project — fee structures, timetables, and policies entered from scratch every time.", after: "Nova clones any existing campus in days — fee structures, academic calendar, timetable framework, and branding settings replicated in one click." },
  { before: "The CFO pulls fee collection data from separate spreadsheets for each campus monthly. Consolidation takes 3 days and is still error-prone.", after: "Nova generates consolidated fee P&L across all campuses in one click. Outstanding dues, collections, and projections rolled up in real time." },
  { before: "Each campus runs different fee slabs for the same categories. Group-level pricing policy is impossible to enforce without manual audits.", after: "Group-level fee templates define the standard. Campus admins apply permitted overrides. Group Finance sees every deviation instantly." },
];

const MODULES = [
  { icon: LayoutGrid,   name: "Group Command Dashboard",    tag: "Live · All Campuses",          description: "Real-time KPIs across every campus — enrollment, attendance, fee collection, and outstanding dues — on a single screen. Drill down to any campus in one click. No calls, no spreadsheets.", bullets: ["Live enrollment and attendance across all campuses", "Fee collection vs. target with campus-wise breakdown", "Drill-down from group view to campus to student in one click"] },
  { icon: IndianRupee,  name: "Consolidated Financials",    tag: "Group CFO View",               description: "Roll-up P&L, receivables, and budgets across every campus. Generate consolidated fee statements, outstanding reports, and campus-wise performance — all from one account. Audit-ready, always.", bullets: ["Consolidated fee P&L across all campuses in one click", "Campus-wise collection vs. target and outstanding dues", "Audit-ready reports for group-level financial review"] },
  { icon: Copy,         name: "Fee Template Engine",        tag: "Define Once. Push Everywhere.", description: "Define fee structures at group level. Push to all campuses with one click. Allow campus-level overrides within permitted limits. Replicate entire fee configurations when onboarding a new campus.", bullets: ["Group-level fee structure with per-campus override controls", "One-click replication to new campuses on onboarding", "Group Finance sees every campus deviation instantly"] },
  { icon: Users,        name: "Cross-Campus HR",            tag: "Staff Transfers & Records",    description: "Single employee master with campus-wise assignment. Transfer workflows preserve service continuity — payroll, leave balance, and reporting line all updated automatically. No record loss across campuses.", bullets: ["Single employee record across all campus assignments", "Transfer workflow with automatic service continuity", "Cross-campus payroll and leave balance portability"] },
  { icon: Building2,    name: "Campus Onboarding",          tag: "Clone. Configure. Launch.",    description: "Launch a new campus on Nova in days, not months. Clone policies, fee structures, timetable frameworks, and branding from any existing campus. Configure campus-specific overrides. Go live.", bullets: ["Clone existing campus — policies, fees, branding, timetable", "Campus-specific overrides applied after template load", "New campus live on Nova in days, not months"] },
  { icon: Shield,       name: "Policy & Branding Enforcement", tag: "Group-level Standards",    description: "Push academic calendar, examination schedule, and branding settings from group level to all campuses. Ensure consistency across every school in the network without micromanaging each principal.", bullets: ["Group-level academic calendar pushed to all campuses", "Brand standards enforced — logo, colour, communication templates", "Examination schedule and policy sync across the network"] },
];

const FAQS = [
  { q: "Can Nova manage campuses on different boards (CBSE and ICSE) under the same group account?", a: "Yes. Nova is board-aware at the campus level — each campus runs its own board configuration (CBSE, ICSE, IB, Cambridge, State). The Group Dashboard rolls up data across all boards. CBSE portals, CISCE CAREERS exports, and other board-specific features remain active per campus. The Group Director sees everything in one view without needing to understand each board's compliance separately." },
  { q: "How does the Group Dashboard work — is it a separate portal?", a: "It is the same Nova login. Group Admins see a group-level view by default — all campuses, all KPIs. They can drill into any campus with one click and see the full campus view. Campus Admins see only their own campus. Role-based access is configured at group setup and can be adjusted per user." },
  { q: "Can we set different fee structures for different campuses but still see consolidated collection?", a: "Yes. The Fee Template Engine lets you define a group-level structure with permitted variance limits. Campus admins configure their own slabs within those limits. The Group Finance view shows collections and outstanding dues consolidated — with campus-wise drill-down and variance flags." },
  { q: "How long does it take to onboard a new campus into an existing Nova group account?", a: "Typically 3–7 working days with Nova Lounge support. The Campus Onboarding module clones policies, fee structures, timetable frameworks, and branding from an existing campus. Campus-specific details (staff, students, rooms) are then uploaded. The Cadence Care team stays on-site until the campus is fully operational." },
  { q: "What happens when a staff member transfers between campuses — are their records preserved?", a: "Yes. Nova's cross-campus HR module treats every employee as a single record across the group. A transfer workflow moves the campus assignment, updates reporting lines, transfers leave balances, and maintains the full service history. Payroll for the new campus picks up seamlessly from the effective transfer date." },
];

const HERO_CHIPS = [
  { icon: Building2,  text: "Multi-campus Command Centre" },
  { icon: BarChart2,  text: "Live Cross-campus Rollups" },
  { icon: Zap,        text: "New Campus Onboarding in Days" },
];

const HERO_BLOBS = [
  { color: "rgba(13,148,136,0.28)",  w: 480, h: 440, top: "-8%",  left: "-6%",  dur: 28, x: [0,22,-14,0] as number[], y: [0,-18,14,0] as number[] },
  { color: "rgba(13,148,136,0.14)",  w: 400, h: 360, top: "40%",  left: "25%",  dur: 34, x: [0,-28,16,0] as number[], y: [0,16,-22,0] as number[] },
  { color: "rgba(94,234,212,0.10)",  w: 320, h: 280, top: "15%",  left: "65%",  dur: 24, x: [0,-12,18,0] as number[], y: [0,14,-10,0] as number[] },
];

// Top 3 capabilities for the "Group Command Centre" feature grid
const TOP_CAPS = [MODULES[0], MODULES[1], MODULES[4]];

// ─── Main component ───────────────────────────────────────────────────────────
export default function GroupsPageClient() {
  const [openModule,  setOpenModule]  = useState<number | null>(null);
  const [openFaq,     setOpenFaq]     = useState<number | null>(null);
  const [modalOpen,   setModalOpen]   = useState(false);

  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: DARK }}>
        {/* Background boomerang video */}
        <video
          autoPlay muted loop playsInline
          poster="/assets/images/hero-groups-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.82 }}
          preload="metadata"
        >
          <source src="/assets/videos/hero-groups.webm" type="video/webm" />
          <source src="/assets/videos/hero-groups.mp4" type="video/mp4" />
        </video>

        {/* Vignette overlay — dark edges, video breathes through center */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 45%, rgba(11,15,26,0.30) 0%, rgba(11,15,26,0.72) 100%)"
        }} />

        {/* Ambient blobs */}
        {HERO_BLOBS.map((b, i) => (
          <motion.div key={i} className="absolute pointer-events-none rounded-full"
            style={{ width: b.w, height: b.h, top: b.top, left: b.left,
              background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
              filter: "blur(72px)" }}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.dur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />
        ))}

        {/* Text content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(13,148,136,0.12)", border: "1px solid rgba(13,148,136,0.30)" }}>
            <Building2 size={11} style={{ color: TLIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: `linear-gradient(90deg, ${TLIGHT}, #ccfbf1)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Groups &amp; Chains
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white max-w-5xl mx-auto mb-5"
            style={{ fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.03em",
              textShadow: "0 2px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.30)" }}>
            One screen.
            <br />Every school.
            <br />
            <span className="relative inline-block">
              <span className="absolute rounded-lg pointer-events-none" aria-hidden="true"
                style={{ inset: "-3px -6px", background: "linear-gradient(90deg, rgba(13,148,136,0.22) 0%, rgba(94,234,212,0.18) 100%)" }} />
              <span style={{ fontFamily: "var(--font-instrument-serif), 'Georgia', serif", fontStyle: "italic", fontWeight: 400,
                background: `linear-gradient(90deg, ${TLIGHT}, #ccfbf1)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", position: "relative" }}>
                That&apos;s Nova.
              </span>
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            Built for groups that outgrew single-school ERPs. Every campus, every board, one command centre.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap justify-center mb-10">
            <Link href="/book-demo"
              className="inline-flex items-center gap-2 rounded-full pl-6 pr-2.5 py-3 text-[14px] font-semibold text-[#0b0f1a] bg-white hover:bg-white/90 transition-colors">
              Book a Demo
              <span className="w-7 h-7 rounded-full bg-[#0b0f1a]/10 flex items-center justify-center">
                <ChevronRight size={13} strokeWidth={2.5} />
              </span>
            </Link>
            <Link href="/solutions/cbse"
              className="inline-flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white/80 transition-colors">
              Looking for a single school? →
            </Link>
          </motion.div>

          {/* Glassmorphism value-prop chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {HERO_CHIPS.map((chip, i) => {
              const ChipIcon = chip.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.10 }}
                  className="flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  <ChipIcon size={12} style={{ color: TLIGHT }} />
                  <span className="text-white/75 text-[12px] font-medium">{chip.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <WaveDarkToCream />
      </div>

      {/* ── STATS ROW ────────────────────────────────────────────────────────── */}
      <div style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Stats */}
            <div className="grid grid-cols-1 gap-7">
              {STATS.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.10 }}
                  className="flex items-start gap-5">
                  <div className="text-[44px] font-bold leading-none shrink-0"
                    style={{ background: `linear-gradient(90deg, ${TEAL}, ${TLIGHT})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.number}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[#111827] mb-0.5">{s.label}</div>
                    <div className="text-[12px] text-neutral-400 leading-relaxed">{s.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CampusHub SVG */}
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <CampusHub />
            </motion.div>
          </div>
        </div>
        <SlashCreamToWhite />
      </div>

      {/* ── GROUP COMMAND CENTRE — 3-COL FEATURE GRID ───────────────────────── */}
      <div className="relative overflow-hidden bg-white">
        {/* Dot grid decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.035]">
            <defs>
              <pattern id="tg-dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill={TEAL} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tg-dot-grid)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, white 75%)" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${TEAL}, ${TLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Group Command Centre
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.02em" }}>
              Run the group from one screen.<br />Drill into any campus in one click.
            </h2>
            <p className="text-neutral-400 text-[14px] mt-3 max-w-lg mx-auto">
              The three capabilities that make Nova different from single-school ERPs stitched together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TOP_CAPS.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.10 }}
                  className="rounded-2xl p-6 border border-neutral-100 hover:shadow-sm transition-shadow"
                  style={{ background: "#fafafa" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.16)" }}>
                    <Icon size={20} style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[#111827] mb-2">{cap.name}</h3>
                  <p className="text-[12.5px] text-neutral-500 leading-relaxed">
                    {cap.description.split(".").slice(0, 2).join(".") + "."}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── GLOW-LINE DIVIDER ────────────────────────────────────────────────── */}
      <GlowLineTeal />

      {/* ── BEFORE / AFTER — split world ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6" style={{ background: CREAM }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <SplitLeft />
          <SplitRight />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${TEAL}, ${TLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The Group Director Reality
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.02em" }}>
              Monday morning rollup calls.
              <br />Without Nova vs with Nova.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">

            {/* Without Nova — tilted, dashed, sepia */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="lg:w-[42%] shrink-0">
              <motion.div
                className="relative h-full rounded-2xl p-6 overflow-hidden cursor-default"
                style={{ background: "#faf7f2", border: "2px dashed rgba(160,140,110,0.38)",
                  boxShadow: "2px 4px 20px rgba(0,0,0,0.06)", transform: "rotate(-1.2deg)" }}
                whileHover={{ rotate: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}>
                {/* CHAOS watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  aria-hidden="true"
                  style={{ fontSize: 72, fontWeight: 900, color: "rgba(120,100,75,0.04)",
                    letterSpacing: "0.1em", transform: "rotate(-14deg)" }}>
                  CHAOS
                </div>
                <div className="mb-4 pb-4" style={{ borderBottom: "1px dashed rgba(160,140,110,0.30)" }}>
                  <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(140,115,85,0.58)" }}>
                    Without Nova
                  </p>
                  <p className="text-[14px] font-medium mt-1" style={{ color: "rgba(90,70,50,0.62)" }}>
                    Spreadsheets, phone calls, copy-paste
                  </p>
                </div>
                <div className="space-y-2">
                  {WORKFLOW.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl"
                      style={{ padding: "10px 12px", background: "rgba(160,140,110,0.07)",
                        border: "1px solid rgba(160,140,110,0.14)" }}>
                      <XCircle size={14} className="shrink-0 mt-0.5" style={{ color: "rgba(190,100,80,0.50)" }} />
                      <p className="text-[12px] leading-snug" style={{ color: "rgba(100,80,55,0.72)" }}>{r.before}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* With Nova — premium glowing */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="lg:flex-1">
              <div className="overflow-hidden rounded-3xl h-full"
                style={{ background: "white", border: "1px solid rgba(13,148,136,0.14)",
                  boxShadow: "0 24px 64px rgba(13,148,136,0.13), 0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.90)" }}>
                {/* Gradient header */}
                <div className="px-7 py-5" style={{ background: `linear-gradient(135deg, ${TEAL} 0%, #0f766e 100%)` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.22)" }}>
                      <span className="text-white font-bold text-[16px]">N</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] tracking-tight leading-tight">With Cadence Nova</p>
                      <p className="text-white/55 text-[11px]">Group operations on autopilot</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Live</span>
                    </div>
                  </div>
                </div>
                {/* Rows */}
                <div className="p-5 space-y-1">
                  {WORKFLOW.map((r, i) => (
                    <div key={i}
                      className="group flex items-start gap-4 rounded-2xl transition-colors duration-200 hover:bg-[#ecfdf5] cursor-default"
                      style={{ padding: "12px 14px" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: "rgba(13,148,136,0.08)" }}>
                        <CheckCircle2 size={15} style={{ color: TEAL }} />
                      </div>
                      <p className="flex-1 text-[13px] text-[#374151] leading-snug mt-0.5">{r.after}</p>
                    </div>
                  ))}
                </div>
                <div className="h-5" style={{ background: "linear-gradient(to top, rgba(13,148,136,0.04), transparent)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GLOW-LINE DIVIDER ────────────────────────────────────────────────── */}
      <GlowLineTeal />

      {/* ── MODULE ACCORDION ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white">
        {/* Dot grid decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.035]">
            <defs>
              <pattern id="tg-dot-grid-2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill={TEAL} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tg-dot-grid-2)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, white 75%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${TEAL}, ${TLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              6 Group-level Modules · Built In
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", letterSpacing: "-0.02em" }}>
              Built for how school groups actually work.
            </h2>
            <p className="text-neutral-400 text-[14px] mt-3">Click any module to explore its group-level capabilities.</p>
          </div>

          <div className="space-y-2">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              const isOpen = openModule === i;
              return (
                <div key={i} className="rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{ borderColor: isOpen ? "rgba(13,148,136,0.28)" : "#e5e7eb",
                    background: isOpen ? "rgba(13,148,136,0.02)" : "white" }}>
                  <button className="w-full flex items-center gap-4 px-6 py-4 text-left"
                    onClick={() => setOpenModule(isOpen ? null : i)}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: isOpen ? "rgba(13,148,136,0.12)" : "rgba(13,148,136,0.06)",
                        border: `1px solid ${isOpen ? "rgba(13,148,136,0.28)" : "rgba(13,148,136,0.12)"}` }}>
                      <Icon size={18} style={{ color: TEAL }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-[15px] text-[#111827]">{mod.name}</span>
                        <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold shrink-0"
                          style={{ background: "rgba(13,148,136,0.07)", color: TEAL }}>{mod.tag}</span>
                      </div>
                      {!isOpen && <p className="text-[12px] text-neutral-400 mt-0.5 truncate">{mod.bullets[0]}</p>}
                    </div>
                    <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: isOpen ? "rgba(13,148,136,0.10)" : "transparent" }}>
                      {isOpen ? <Minus size={14} style={{ color: TEAL }} /> : <Plus size={14} className="text-neutral-400" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden">
                        <div className="px-6 pb-5 pt-1 border-t border-neutral-100">
                          <p className="text-[13px] text-neutral-500 leading-relaxed mb-4">{mod.description}</p>
                          <ul className="space-y-2 mb-4">
                            {mod.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-2">
                                <CheckCircle2 size={13} style={{ color: TEAL }} className="mt-0.5 shrink-0" />
                                <span className="text-[13px] text-neutral-600">{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-1.5">
                            <Sparkles size={11} style={{ color: TEAL }} />
                            <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-300">{mod.tag}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── APPSTORE BANNER ──────────────────────────────────────────────────── */}
      <div style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(13,148,136,0.07)", border: "1px solid rgba(13,148,136,0.14)" }}>
                <LayoutGrid size={18} style={{ color: TEAL }} />
              </div>
              <div>
                <p className="font-semibold text-[14px] text-[#111827] mb-0.5">Need HRMS, Payroll, or Workflow automation across the group?</p>
                <p className="text-[12px] text-neutral-400">Nova AppStore adds HRMS, Payroll, Pulse, Hire, Workflow, and Warehouse — group-aware from day one.</p>
              </div>
            </div>
            <Link href="/appstore"
              className="inline-flex items-center gap-1.5 shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${TEAL}, #0f766e)` }}>
              Explore AppStore <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── ASK NOVA ─────────────────────────────────────────────────────────── */}
      <WaveWhiteToDark />
      <div className="relative overflow-hidden" style={{ background: DARK }}>
        {/* Ambient glow blobs */}
        <div className="absolute pointer-events-none rounded-full" style={{ width: 560, height: 480, top: "-15%", left: "-8%", background: "radial-gradient(ellipse at center, rgba(13,148,136,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute pointer-events-none rounded-full" style={{ width: 440, height: 380, top: "30%", right: "-10%", background: "radial-gradient(ellipse at center, rgba(94,234,212,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute pointer-events-none" style={{ inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,148,136,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(13,148,136,0.12)", border: "1px solid rgba(13,148,136,0.30)" }}>
            <Zap size={11} style={{ color: TLIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: `linear-gradient(90deg, ${TLIGHT}, #ccfbf1)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ask Nova — Live
            </span>
          </div>
          <h2 className="text-white font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.02em" }}>
            Your whole group.{" "}
            <span style={{ background: `linear-gradient(90deg, ${TLIGHT}, #ccfbf1)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One question away.
            </span>
          </h2>
          <p className="text-white/40 text-[14px] mb-10">Watch Nova answer a real Group Director query — live.</p>
          <AskNovaAnimated />
        </div>
      </div>

      {/* ── NOVA LOUNGE + CTA ────────────────────────────────────────────────── */}
      <WaveDarkToCream />
      <div className="relative overflow-hidden" style={{ background: CREAM }}>
        {/* Subtle radial glow */}
        <div className="absolute pointer-events-none" style={{ inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(13,148,136,0.05) 0%, transparent 65%)" }} />
        <div className="max-w-4xl mx-auto px-6 pt-4 pb-24 relative z-10">

          <div className="mb-8 rounded-2xl overflow-hidden w-full aspect-video">
            <video
              autoPlay muted loop playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/nova-lounge.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-3xl p-8"
            style={{ background: "rgba(13,148,136,0.04)", border: "1px solid rgba(13,148,136,0.14)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold tracking-widest uppercase"
                    style={{ background: `linear-gradient(90deg, ${TEAL}, ${TLIGHT})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Nova Lounge
                  </span>
                  <span className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                    style={{ background: "rgba(22,163,74,0.12)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.20)" }}>
                    WSUYD
                  </span>
                </div>
                <h3 className="text-[#111827] font-bold text-[18px] leading-tight mb-1">We Stay Until You&apos;re Done.</h3>
                <p className="text-neutral-500 text-[13px] leading-relaxed">
                  Our team stays on-site and remotely until every campus in your group is live on Nova, every Group Director,
                  Principal, and Campus Admin is trained — not just handed over on go-live day.
                </p>
              </div>
              <Link href="/book-demo"
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${TEAL}, #0f766e)`,
                  boxShadow: `0 0 28px rgba(13,148,136,0.32)` }}>
                Book a Demo <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
                style={{ background: `linear-gradient(90deg, ${TEAL}, ${TLIGHT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Groups &amp; Chains FAQ
              </p>
              <h2 className="text-[#111827] font-bold leading-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 32px)", letterSpacing: "-0.02em" }}>
                Questions Group Directors ask us.
              </h2>
            </div>
            <div className="space-y-2 max-w-3xl mx-auto">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="rounded-2xl border overflow-hidden transition-all"
                    style={{ borderColor: isOpen ? "rgba(13,148,136,0.24)" : "#e5e7eb",
                      background: isOpen ? "rgba(13,148,136,0.02)" : "white" }}>
                    <button className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : i)}>
                      <span className="font-semibold text-[14px] text-[#111827]">{faq.q}</span>
                      <ChevronDown size={16} className="shrink-0 text-neutral-400 transition-transform"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden">
                          <div className="px-6 pb-5 border-t border-neutral-100">
                            <p className="text-[13px] text-neutral-500 leading-relaxed pt-4">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer onBookDemo={() => setModalOpen(true)} />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
