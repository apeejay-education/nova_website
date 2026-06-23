"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Users, BarChart2, Leaf, IndianRupee,
  CalendarCheck, Bus, BookOpen, Monitor,
  Award, ChevronRight, ChevronDown, Sparkles, MessageSquare, Zap,
  CheckCircle2, XCircle, ArrowRight, LayoutGrid, Plus, Minus,
  Camera, Play,
} from "lucide-react";

const PURPLE = "#7C3AED";
const PLIGHT = "#C4B5FD";
const DARK   = "#0b0f1a";
const CREAM  = "#f5f2ee";

function WaveDarkToCream() {
  return (
    <div className="relative overflow-hidden" style={{ height: 96, background: CREAM }}>
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="pu1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={PURPLE} stopOpacity="0.8" />
            <stop offset="100%" stopColor={PLIGHT}  stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,44 C1120,4 320,84 0,44 Z" fill={DARK} />
        <path d="M0,38 C320,78 1120,-2 1440,38 L1440,50 C1120,10 320,90 0,50 Z" fill="url(#pu1)" opacity="0.9" />
      </svg>
    </div>
  );
}

function SlashCreamToWhite() {
  return (
    <div className="relative overflow-hidden bg-white" style={{ height: 72 }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="psl1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={PURPLE} />
            <stop offset="100%" stopColor={PLIGHT}  />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,16 L0,56 Z" fill={CREAM} />
        <path d="M0,52 L1440,12 L1440,20 L0,60 Z" fill="url(#psl1)" opacity="0.65" />
      </svg>
    </div>
  );
}

function GlowLinePurple() {
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
          background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.07) 45%, transparent 70%)" }} />
      <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMid meet" fill="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="pgl1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={PURPLE} stopOpacity="0.0" />
            <stop offset="25%"  stopColor={PURPLE} stopOpacity="0.45" />
            <stop offset="75%"  stopColor={PLIGHT}  stopOpacity="0.40" />
            <stop offset="100%" stopColor={PLIGHT}  stopOpacity="0.0" />
          </linearGradient>
          <filter id="pdg1" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="0" y1="60" x2="1440" y2="60" stroke="url(#pgl1)" strokeWidth="1" />
        {CURVES.map((d, i) => (
          <path key={i} d={d} stroke={PURPLE} strokeWidth="0.8" strokeOpacity="0.30" />
        ))}
        {DOTS.map(({ x, y, r, o }, i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={PURPLE} opacity={o} filter="url(#pdg1)" />
        ))}
      </svg>
    </div>
  );
}

function WaveWhiteToDark() {
  return (
    <div className="relative overflow-hidden" style={{ height: 56, background: DARK }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="pu2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={PURPLE} stopOpacity="0.55" />
            <stop offset="100%" stopColor={PLIGHT}  stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path d="M0,56 L1440,56 L1440,0 C1080,44 360,8 0,36 Z" fill="white" />
        <path d="M0,32 C360,6 1080,40 1440,-2 L1440,6 C1080,48 360,14 0,40 Z" fill="url(#pu2)" opacity="0.65" />
      </svg>
    </div>
  );
}

function WaveDarkToWhite() {
  return (
    <div className="relative overflow-hidden bg-white" style={{ height: 56 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="pu3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={PURPLE} stopOpacity="0.55" />
            <stop offset="100%" stopColor={PLIGHT}  stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,56 C1080,20 360,52 0,28 Z" fill={DARK} />
        <path d="M0,24 C360,48 1080,16 1440,52 L1440,60 C1080,24 360,56 0,32 Z" fill="url(#pu3)" opacity="0.60" />
      </svg>
    </div>
  );
}

function ImgPlaceholder({ label, prompt, className = "" }: { label: string; prompt: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(124,58,237,0.02) 100%)",
        border: "1.5px dashed rgba(124,58,237,0.22)" }}>
      <div className="flex flex-col items-center text-center p-6">
        <Camera size={26} className="mb-3" style={{ color: "rgba(124,58,237,0.38)" }} />
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(124,58,237,0.55)" }}>{label}</p>
        <p className="text-[10px] text-neutral-400 leading-relaxed max-w-[260px]">{prompt}</p>
      </div>
    </div>
  );
}

function VideoPlaceholder({ label, prompt, dark = false }: { label: string; prompt: string; dark?: boolean }) {
  return (
    <div className="relative rounded-2xl overflow-hidden w-full aspect-video flex items-center justify-center"
      style={{ background: dark
        ? "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(11,15,26,0.85))"
        : "linear-gradient(135deg, rgba(124,58,237,0.07), rgba(124,58,237,0.02))",
        border: "1.5px dashed rgba(124,58,237,0.28)" }}>
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
          style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.30)" }}>
          <Play size={18} style={{ color: dark ? PLIGHT : PURPLE }} />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: dark ? PLIGHT : PURPLE }}>
          {label}
        </p>
        <p className={`text-[10px] leading-relaxed max-w-[300px] ${dark ? "text-white/40" : "text-neutral-400"}`}>
          {prompt}
        </p>
      </div>
    </div>
  );
}

// ─── CISCE portal hub-and-spoke SVG ──────────────────────────────────────────
const CISCE_NODES = [
  { id: "CAREERS",   cx: 400, cy: 68  },
  { id: "SUPW",      cx: 537, cy: 125 },
  { id: "ISC LOC",   cx: 594, cy: 262 },
  { id: "Reg No",    cx: 537, cy: 399 },
  { id: "TC",        cx: 400, cy: 456 },
  { id: "Practical", cx: 263, cy: 399 },
  { id: "80/20",     cx: 206, cy: 262 },
  { id: "CISCE",     cx: 263, cy: 125 },
];

function PortalHub() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="w-full max-w-md mx-auto select-none">
      <svg viewBox="100 40 600 460" fill="none" className="w-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="phub-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={PURPLE} stopOpacity="0.22" />
            <stop offset="100%" stopColor={PURPLE} stopOpacity="0.04" />
          </radialGradient>
          <filter id="pnode-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor={PURPLE} floodOpacity="0.20" />
          </filter>
        </defs>
        <circle cx="400" cy="262" r="215" stroke={PURPLE} strokeWidth="0.6" strokeOpacity="0.10" strokeDasharray="4 7" />
        <circle cx="400" cy="262" r="140" stroke={PURPLE} strokeWidth="0.6" strokeOpacity="0.07" strokeDasharray="3 9" />
        {CISCE_NODES.map((n, i) => (
          <motion.path key={n.id}
            d={`M 400,262 L ${n.cx},${n.cy}`}
            stroke={PURPLE} strokeWidth="1.4" strokeOpacity="0.30"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: "easeOut" }}
          />
        ))}
        <motion.circle cx="400" cy="262" r="56" fill="url(#phub-bg)"
          initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.05 }} />
        <circle cx="400" cy="262" r="56" stroke={PURPLE} strokeWidth="1.8" strokeOpacity="0.50" />
        <text x="400" y="257" textAnchor="middle" fill={PURPLE} fontSize="14" fontWeight="800" letterSpacing="1.5">NOVA</text>
        <text x="400" y="273" textAnchor="middle" fill={PURPLE} fontSize="8.5" opacity="0.60" fontWeight="500">All CISCE</text>
        {CISCE_NODES.map((n, i) => (
          <motion.g key={n.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.40, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <circle cx={n.cx} cy={n.cy} r="36" fill="white" stroke={PURPLE} strokeWidth="1.6" strokeOpacity="0.48"
              filter="url(#pnode-shadow)" />
            <circle cx={n.cx} cy={n.cy} r="36" fill={PURPLE} fillOpacity="0.05" />
            <text x={n.cx} y={n.cy + 5} textAnchor="middle" dominantBaseline="middle"
              fill={PURPLE} fontSize={n.id.length > 6 ? "8.5" : n.id.length > 4 ? "9.5" : "11.5"} fontWeight="800">
              {n.id}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// ─── SUPW 2-year tracking flow ────────────────────────────────────────────────
const SUPW_STEPS = [
  { label: "Student",    sub: "ISC Enrolled",      num: "01" },
  { label: "5 Criteria", sub: "Per term, per year", num: "02", highlight: true },
  { label: "Bulk Entry", sub: "Teacher dashboard",  num: "03" },
  { label: "2 Years",    sub: "Class 11 & 12",      num: "04" },
  { label: "A–E Grade",  sub: "CISCE Export",       num: "05" },
];

const CRITERIA_LABELS = ["Preparation", "Organisation", "Skills", "Research", "Interest"];

function SupwFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const W = 130, GAP = 44, CY = 72, H = 64, RX = 14;
  const total = SUPW_STEPS.length;
  const VW = total * W + (total - 1) * GAP + 60;

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${VW} 175`} fill="none" className="w-full min-w-[560px]" style={{ overflow: "visible" }}>
        <defs>
          <marker id="parr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill={PURPLE} opacity="0.45" />
          </marker>
          <linearGradient id="psgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={PURPLE} stopOpacity="0.10" />
            <stop offset="100%" stopColor={PURPLE} stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {SUPW_STEPS.slice(0, -1).map((_, i) => {
          const x1 = 30 + i * (W + GAP) + W;
          const x2 = 30 + (i + 1) * (W + GAP);
          return (
            <motion.path key={i}
              d={`M ${x1},${CY + H / 2} L ${x2 - 2},${CY + H / 2}`}
              stroke={PURPLE} strokeWidth="1.6" strokeOpacity="0.35" markerEnd="url(#parr)"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            />
          );
        })}

        {/* Criteria badges below the "5 Criteria" step */}
        {CRITERIA_LABELS.map((lbl, i) => {
          const stepX = 30 + 1 * (W + GAP);
          const bxBase = stepX + W / 2;
          const by = CY + H + 14;
          const labelW = lbl.length * 5.8 + 14;
          const offsets = [-52, -26, 0, 26, 52];
          return (
            <motion.g key={lbl}
              initial={{ opacity: 0, y: 6 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.90 + i * 0.09 }}>
              <rect x={bxBase + offsets[i] - labelW / 2} y={by} width={labelW} height={17} rx="8.5"
                fill="rgba(124,58,237,0.09)" stroke="rgba(124,58,237,0.28)" strokeWidth="0.75" />
              <text x={bxBase + offsets[i]} y={by + 12} textAnchor="middle"
                fill={PURPLE} fontSize="7.5" fontWeight="700">{lbl}</text>
            </motion.g>
          );
        })}

        {SUPW_STEPS.map((s, i) => {
          const x = 30 + i * (W + GAP);
          return (
            <motion.g key={s.num}
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.08 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}>
              <rect x={x} y={CY} width={W} height={H} rx={RX}
                fill="white" stroke={PURPLE} strokeWidth={s.highlight ? "2" : "1.4"}
                strokeOpacity={s.highlight ? "0.55" : "0.32"}
                style={{ filter: "drop-shadow(0 2px 10px rgba(124,58,237,0.13))" }} />
              <rect x={x} y={CY} width={W} height={H} rx={RX} fill="url(#psgrad)" />
              <rect x={x + 10} y={CY + 10} width={26} height={14} rx="7"
                fill={PURPLE} fillOpacity="0.10" />
              <text x={x + 23} y={CY + 21} textAnchor="middle" fill={PURPLE} fontSize="8" fontWeight="800">{s.num}</text>
              <text x={x + W / 2} y={CY + 34} textAnchor="middle" fill="#111827" fontSize="11" fontWeight="700">{s.label}</text>
              <text x={x + W / 2} y={CY + 50} textAnchor="middle" fill="#6b7280" fontSize={s.highlight ? "7.5" : "8.5"}>
                {s.sub}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

// ─── Split-world before/after backgrounds (purple right) ─────────────────────
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
        background: "radial-gradient(ellipse 70% 65% at 65% 48%, rgba(124,58,237,0.10) 0%, rgba(124,58,237,0.04) 50%, transparent 72%)"
      }} />
      <svg className="absolute right-0 top-0 h-full" style={{ width: "55%" }}
        viewBox="0 0 792 900" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
        <path d="M160,120 C260,160 380,190 520,170" stroke="rgba(124,58,237,0.14)" strokeWidth="1.5" />
        <path d="M120,260 C260,300 380,340 560,310" stroke="rgba(124,58,237,0.10)" strokeWidth="1" />
        <path d="M180,440 C310,470 450,450 600,430" stroke="rgba(124,58,237,0.09)" strokeWidth="1.5" />
        <path d="M100,620 C260,650 410,640 580,610" stroke="rgba(124,58,237,0.11)" strokeWidth="1" />
        <circle cx="520" cy="170" r="3"   fill="rgba(124,58,237,0.30)" />
        <circle cx="560" cy="310" r="2.5" fill="rgba(124,58,237,0.24)" />
        <circle cx="600" cy="430" r="3"   fill="rgba(124,58,237,0.22)" />
        <circle cx="580" cy="610" r="2"   fill="rgba(124,58,237,0.20)" />
        <circle cx="320" cy="340" r="2.5" fill="rgba(124,58,237,0.16)" />
      </svg>
    </>
  );
}

// ─── Ask Nova typewriter (ICSE query) ────────────────────────────────────────
const Q_TEXT = "Which Class 10 students have incomplete IA for CAREERS — and which subjects are holding them up?";
const R_TEXT = "23 students in Class 10 have incomplete IA. Top blockers: Environmental Science practical (18), English Literature project (9).";
const CHIPS  = ["23 students flagged", "2 subjects blocking", "CAREERS export ready"];

function AskNovaAnimated() {
  const [phase, setPhase] = useState<"idle"|"typing"|"thinking"|"responding"|"done">("idle");
  const [qText, setQText] = useState("");
  const [rText, setRText] = useState("");
  const [chips, setChips] = useState(false);
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
    }, 28);
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
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "rgba(124,58,237,0.22)", border: "1px solid rgba(124,58,237,0.38)" }}>
          <MessageSquare size={14} style={{ color: PLIGHT }} />
        </div>
        <div className="flex-1 rounded-xl px-4 py-3 min-h-[48px]"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/80 text-[14px] leading-relaxed">
            {qText}
            {phase === "typing" && (
              <span className="inline-block w-[2px] h-[14px] ml-0.5 align-middle animate-pulse"
                style={{ background: PLIGHT }} />
            )}
          </p>
        </div>
      </div>

      {(phase === "thinking" || phase === "responding" || phase === "done") && (
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `linear-gradient(135deg, ${PURPLE}, #6D28D9)` }}>
            <motion.div animate={phase === "thinking" ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1.5, repeat: phase === "thinking" ? Infinity : 0, ease: "linear" }}>
              <Sparkles size={13} className="text-white" />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="rounded-xl px-4 py-3 mb-3"
              style={{ background: "rgba(124,58,237,0.14)", border: "1px solid rgba(124,58,237,0.26)" }}>
              {phase === "thinking" ? (
                <div className="flex items-center gap-1.5 py-1">
                  {[0,1,2].map(i => (
                    <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: PLIGHT }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.22 }} />
                  ))}
                </div>
              ) : (
                <p className="text-white/85 text-[13px] leading-relaxed">
                  <span style={{ color: PLIGHT }} className="font-semibold">23 students</span>
                  {" "}in Class 10 have incomplete IA.
                  {rText.length > 55 && (
                    <> Top blockers: <span style={{ color: PLIGHT }}>Environmental Science practical</span> (18),{" "}
                    <span style={{ color: PLIGHT }}>English Literature project</span> (9).</>
                  )}
                  {phase === "responding" && (
                    <span className="inline-block w-[2px] h-[12px] ml-0.5 align-middle animate-pulse"
                      style={{ background: PLIGHT }} />
                  )}
                  {phase === "done" && (
                    <span style={{ color: "rgba(255,255,255,0.38)" }}> View list →</span>
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
  { number: "3",    label: "Assessment frameworks in one engine",     sub: "ICSE 80/20 · ISC Group I & II 80/20 · ISC Group III 50/50" },
  { number: "5",    label: "SUPW criteria tracked per student/term",  sub: "Preparation · Organisation · Skills · Research · Interest" },
  { number: "Zero", label: "Manual CAREERS portal entries",           sub: "Nova exports IA marks directly in CISCE CAREERS format" },
];

const PORTAL_LIST = [
  { id: "CAREERS",   full: "Internal Assessment Portal",         nova: "One-click IA mark export in CISCE CAREERS format — no manual portal entry" },
  { id: "SUPW",      full: "Socially Useful Productive Work",    nova: "2-year, 5-criteria tracking with bulk entry and A–E auto-grade computation" },
  { id: "ISC LOC",   full: "List of Candidates",                 nova: "Subject combination rules enforced, CISCE Reg No. auto-linked, deadline alert" },
  { id: "Reg No",    full: "CISCE Registration Number",          nova: "Stored per student, auto-linked to every assessment, export, and TC generated" },
  { id: "TC",        full: "Transfer Certificate (CISCE Format)", nova: "CISCE-specific TC auto-filled with principal workflow and digital archive" },
  { id: "Practical", full: "ISC Practical Marks",                nova: "Per-subject practical component tracked separately, combined score auto-computed" },
  { id: "Exam Fees", full: "CISCE Examination Fee Tracking",     nova: "CISCE exam fees per student, defaulter alerts before form submission deadlines" },
  { id: "80/20",     full: "Assessment Split Configuration",     nova: "Per-subject 80/20 and Group III 50/50 — configured once, calculated always" },
];

const ASSESSMENT_SPLITS = [
  { label: "ICSE (Class 10)",            ext: 80, int: 20, note: "Per-subject internal component config" },
  { label: "ISC Group I & II",           ext: 80, int: 20, note: "Theory + internal assessment per subject" },
  { label: "ISC Group III (Vocational)", ext: 50, int: 50, note: "Equal external / internal weighting" },
];

const WORKFLOW = [
  { before: "IA marks collected per subject on paper, compiled by class teacher in Excel, then typed one by one into CAREERS portal.", after: "Nova captures IA marks per subject per student. One-click export in CAREERS portal format — no copy-paste, no data entry." },
  { before: "Subject teacher configures 80/20 split manually per exam. ISC Group III 50/50 handled as a special case in a separate sheet.", after: "Each subject has its own component configuration in Nova — 80/20 or 50/50. Calculated automatically, stored against the student record." },
  { before: "SUPW tracked in a physical notebook by the class teacher. A–E grades compiled at year end — often missing for half the class.", after: "Nova tracks SUPW across all 5 criteria, term by term, for two years. Bulk entry, completion dashboard, and automatic grade computation." },
  { before: "CISCE Registration Numbers maintained in a separate Excel. Mismatches with CAREERS portal found on submission day.", after: "CISCE Reg. No. stored per student in SIS, auto-linked to every assessment, export, and certificate generated in Nova." },
  { before: "ISC practical marks tracked in subject teacher's notebook. Reconciliation with theory marks done the night before results.", after: "Practical component marks entered separately per subject in Nova. Combined score computed automatically. No last-minute reconciliation." },
];

const MODULES = [
  { icon: Users,        name: "Student Information System",  tag: "CAREERS Export Ready",    description: "One student record holds CISCE Registration Number, IA marks history, and exam fee status. Internal assessment exports go directly to CAREERS portal format — no manual portal entry.", compliance: "CISCE CAREERS · CISCE Reg. No.",    bullets: ["CAREERS portal export — IA marks in CISCE-prescribed format", "CISCE Reg. No. stored and auto-linked to all assessments", "International TC format for ICSE/ISC students"] },
  { icon: BarChart2,    name: "Assessment Engine",           tag: "80/20 & 50/50 Splits",    description: "Per-subject internal assessment configuration — not a single global formula. Every subject defines its own component breakdown. ISC Group III 50/50 natively supported alongside ICSE and ISC Group I & II 80/20.", compliance: "CISCE ISC Regulations 2025",        bullets: ["Per-subject component configuration — periodic tests, projects, practicals", "ISC Group III 50/50 and ICSE/ISC Group I & II 80/20 in one engine", "IA completion tracking — flagged when any student's component is missing"] },
  { icon: Leaf,         name: "SUPW Tracker",                tag: "Unique to Nova",           description: "Two-year SUPW tracking across all 5 criteria: Preparation, Organisation, Skills, Research, and Interest. A–E letter grading per term with bulk teacher entry. The module no competitor builds properly.", compliance: "CISCE SUPW Syllabus",              bullets: ["All 5 criteria tracked individually across 2 years", "A–E letter grading per term with bulk teacher entry", "Completion dashboard — Principal sees outstanding entries per class"] },
  { icon: IndianRupee,  name: "Fee Management",              tag: "CISCE Exam Fees",          description: "School fees and CISCE examination fee tracking in the same ledger. ISC practical examination fee handling. Defaulter alerts with instant parent notifications before exam form deadlines.", compliance: "CISCE Fee Structure",              bullets: ["CISCE examination fees tracked per student per year", "ISC practical examination fee handling built in", "Defaulter alerts before CISCE exam form submission deadlines"] },
  { icon: CalendarCheck,name: "Attendance Management",       tag: "Per-Subject Tracking",     description: "ICSE schools track attendance per subject for practical classes. Nova handles both overall and per-subject attendance, with threshold alerts and parent notifications before condonation windows close.", compliance: "CISCE Attendance Requirements",    bullets: ["Per-subject attendance tracking for ISC practical classes", "Early warning system before condonation thresholds are breached", "Automated parent WhatsApp and SMS alerts"] },
  { icon: Bus,          name: "Transport Management",        tag: "Live GPS Tracking",        description: "Real-time bus tracking, route and stop management, and parent alerts when the bus is 10 minutes away. Driver and attendant assignment with daily operational log.", compliance: "Transport Safety Compliance",       bullets: ["Live GPS with automated parent WhatsApp at 10-minute ETA", "Route and stop management with student boarding confirmation", "Driver and attendant daily assignment and incident log"] },
  { icon: BookOpen,     name: "Library Management",          tag: "OPAC + Digital Catalogue", description: "Barcode-based issue and return, overdue alerts, OPAC for students to search the catalogue, and stock audit tools for the librarian — all in Nova.", compliance: "Library Records",                    bullets: ["Barcode-based issue/return with overdue alerts via WhatsApp", "OPAC — students search the full catalogue from any device", "Librarian periodic stock audit and reconciliation reports"] },
  { icon: Monitor,      name: "Learning Management System",  tag: "Assignments & Study Material", description: "Teachers assign homework, share study material, and track submissions in Nova. Students and parents access assignments, IA results, and teacher feedback from the same app.", compliance: "Digital Learning",                  bullets: ["Homework assignment with deadline and submission tracking", "Study material upload per class and subject", "IA results and teacher feedback visible in the parent app"] },
];

const FAQS = [
  { q: "How does Nova handle the ICSE 80/20 internal/external split?", a: "Each subject in Nova has its own component configuration — you define the internal assessment percentage and what components it comprises (periodic tests, projects, practicals, notebooks). The 80/20 split is computed per student per subject. It's not a global formula you apply school-wide." },
  { q: "Can Nova export data directly in CAREERS portal format?", a: "Yes. Nova exports internal assessment marks in the CISCE CAREERS portal format. No manual data entry into the portal. CISCE Registration Numbers are stored per student and auto-linked to every export. The export includes subject-wise IA marks, component breakdown, and candidate details." },
  { q: "How does Nova track SUPW across 2 years for ISC?", a: "Nova's SUPW Tracker stores entries term by term across both ISC years. All 5 criteria are tracked individually — Preparation, Organisation, Skills, Research, and Interest. Teachers enter grades in bulk. The Principal sees a completion dashboard showing outstanding entries per class before CISCE deadlines." },
  { q: "Does Nova support ISC Group III 50/50 assessment?", a: "Yes. ISC Group III vocational subjects use a 50/50 external/internal split. Nova handles this as a separate subject-level configuration alongside the standard 80/20 for Group I and II. Both configurations run in the same assessment engine — no separate workflow needed." },
  { q: "Can Nova manage both ICSE (Class 10) and ISC (Class 11–12) students in the same school?", a: "Yes. Nova is built for schools that run both ICSE and ISC. Student records are tagged by programme and academic year. Assessment configurations are set per programme level — ICSE Class 10 has its own rules, ISC Class 11/12 have theirs. One platform, one student record, no switching between systems." },
];

const HERO_BLOBS = [
  { color: "rgba(124,58,237,0.28)", w: 480, h: 440, top: "-8%",  left: "-6%",  dur: 28, x: [0, 22, -14, 0] as number[], y: [0, -18, 14, 0] as number[] },
  { color: "rgba(124,58,237,0.14)", w: 400, h: 360, top: "40%",  left: "25%",  dur: 34, x: [0, -28, 16, 0] as number[], y: [0, 16, -22, 0] as number[] },
  { color: "rgba(196,181,253,0.10)",w: 320, h: 280, top: "15%",  left: "65%",  dur: 24, x: [0, -12, 18, 0] as number[], y: [0, 14, -10, 0] as number[] },
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function IcsePageClient() {
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openFaq,    setOpenFaq]    = useState<number | null>(null);

  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: DARK }}>
        {HERO_BLOBS.map((b, i) => (
          <motion.div key={i} className="absolute pointer-events-none rounded-full"
            style={{ width: b.w, height: b.h, top: b.top, left: b.left,
              background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
              filter: "blur(72px)" }}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.dur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{ background: "rgba(124,58,237,0.10)", border: "1px solid rgba(124,58,237,0.28)" }}>
                <Award size={11} style={{ color: PLIGHT }} />
                <span className="text-xs font-semibold tracking-widest uppercase"
                  style={{ background: `linear-gradient(90deg, ${PLIGHT}, #e9d5ff)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  ICSE Schools
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white leading-tight mb-5"
                style={{ fontSize: "clamp(30px, 3.8vw, 52px)", fontWeight: 700, letterSpacing: "-0.028em" }}>
                ICSE assessment
                <br />isn&apos;t simple.
                <br />Your ERP shouldn&apos;t
                <br />pretend it is.
                <br />
                <span style={{ background: `linear-gradient(90deg, ${PLIGHT}, #e9d5ff)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Nova doesn&apos;t.
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/50 text-[16px] leading-relaxed mb-8 max-w-lg">
                80/20 splits, ISC Group III 50/50, SUPW across 5 criteria, CAREERS portal export —
                built for CISCE-affiliated schools that are done making generic ERPs work for their board.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex items-center gap-4 flex-wrap">
                <Link href="/book-demo"
                  className="inline-flex items-center gap-2 rounded-full pl-6 pr-2.5 py-3 text-[14px] font-semibold text-[#0b0f1a] bg-white hover:bg-white/90 transition-colors">
                  Book a Demo
                  <span className="w-7 h-7 rounded-full bg-[#0b0f1a]/10 flex items-center justify-center">
                    <ChevronRight size={13} strokeWidth={2.5} />
                  </span>
                </Link>
                <Link href="/solutions/cbse"
                  className="inline-flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white/80 transition-colors">
                  Looking for CBSE? →
                </Link>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
              <VideoPlaceholder dark
                label="Hero Boomerang"
                prompt="Indian female school admin officer (late 30s, formal salwar kameez) at a wooden desk opening a register, expression shifts from concentration to quiet relief. School trophies softly blurred behind. No screens visible. No text anywhere in frame." />
            </motion.div>
          </div>
        </div>

        <WaveDarkToCream />
      </div>

      {/* ── STATS ROW ────────────────────────────────────────────────────────── */}
      <div style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="grid grid-cols-1 gap-7">
              {STATS.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.10 }}
                  className="flex items-start gap-5">
                  <div className="text-[44px] font-bold leading-none shrink-0"
                    style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
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

            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <ImgPlaceholder
                className="aspect-[4/3]"
                label="Section Photo — Teacher"
                prompt="Indian female teacher (40s) seated at a classroom desk with papers and a gradebook. Students in soft focus at wooden desks behind her, school trophies on shelf. Warm natural window light. Editorial photography. No text or signage visible anywhere in the frame." />
            </motion.div>
          </div>
        </div>
        <SlashCreamToWhite />
      </div>

      {/* ── CISCE ASSESSMENT ARCHITECTURE ───────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              8 CISCE Requirements · Zero Manual Work
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.02em" }}>
              Nova sits at the centre of every<br />CISCE compliance requirement.
            </h2>
            <p className="text-neutral-400 text-[14px] mt-3 max-w-lg mx-auto">
              Every CISCE mandate connects to Nova. IA marks, SUPW tracking, LOC export — formatted correctly, deadline-aware.
            </p>
          </div>

          {/* Hub + portal list */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
            <PortalHub />
            <div className="grid grid-cols-1 gap-3">
              {PORTAL_LIST.map((p) => (
                <motion.div key={p.id}
                  initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-xl p-4 border border-neutral-100 hover:shadow-sm transition-shadow"
                  style={{ background: "#fafafa" }}>
                  <div className="inline-flex items-center justify-center rounded-lg px-2.5 py-1 shrink-0"
                    style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.14)" }}>
                    <span className="font-bold text-[11px]"
                      style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {p.id}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-0.5">{p.full}</p>
                    <p className="text-[12px] text-neutral-600 leading-relaxed">{p.nova}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Assessment splits */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-bold tracking-widest uppercase"
                style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Assessment Framework
              </span>
              <span className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                style={{ background: "rgba(124,58,237,0.08)", color: PURPLE }}>
                Three configurations, one engine
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ASSESSMENT_SPLITS.map((split, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.10 }}
                  className="rounded-2xl border p-5" style={{ borderColor: "#e5e7eb" }}>
                  <p className="text-[11px] font-bold uppercase tracking-wider mb-4 text-neutral-400">{split.label}</p>
                  <div className="flex rounded-xl overflow-hidden h-9 mb-3">
                    <div className="flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ width: `${split.ext}%`, background: `linear-gradient(90deg, ${PURPLE}, #6D28D9)` }}>
                      {split.ext}%
                    </div>
                    <div className="flex items-center justify-center text-white text-[11px] font-bold"
                      style={{ width: `${split.int}%`, background: "linear-gradient(90deg, #2563EB, #1D4ED8)" }}>
                      {split.int}%
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] font-medium" style={{ color: PURPLE }}>Ext</span>
                    <span className="text-[10px] font-medium text-blue-600">Int</span>
                    <span className="text-[10px] text-neutral-400 ml-auto">{split.note}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SUPW flow */}
          <div className="rounded-2xl border border-neutral-100 p-8" style={{ background: "#fafafa" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold tracking-widest uppercase"
                style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                SUPW Tracking Flow
              </span>
              <span className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                style={{ background: "rgba(124,58,237,0.08)", color: PURPLE }}>
                Unique to Nova
              </span>
            </div>
            <p className="text-[13px] text-neutral-400 mb-6">
              How Nova takes an ISC student through 2 years of SUPW tracking — from enrolment to CISCE export.
            </p>
            <SupwFlow />
          </div>
        </div>
      </div>

      {/* ── GLOW-LINE ────────────────────────────────────────────────────────── */}
      <GlowLinePurple />

      {/* ── BEFORE / AFTER — split world ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6" style={{ background: CREAM }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <SplitLeft />
          <SplitRight />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The ICSE Admin Reality
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.02em" }}>
              CAREERS submission week.
              <br />Without Nova vs with Nova.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">

            {/* Without Nova */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="lg:w-[42%] shrink-0">
              <motion.div
                className="relative h-full rounded-2xl p-6 overflow-hidden cursor-default"
                style={{ background: "#faf7f2", border: "2px dashed rgba(160,140,110,0.38)",
                  boxShadow: "2px 4px 20px rgba(0,0,0,0.06)", transform: "rotate(-1.2deg)" }}
                whileHover={{ rotate: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}>
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
                    The CISCE compliance grind
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

            {/* With Nova */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="lg:flex-1">
              <div className="overflow-hidden rounded-3xl h-full"
                style={{ background: "white", border: "1px solid rgba(124,58,237,0.14)",
                  boxShadow: "0 24px 64px rgba(124,58,237,0.13), 0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.90)" }}>
                <div className="px-7 py-5" style={{ background: `linear-gradient(135deg, ${PURPLE} 0%, #6D28D9 100%)` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.22)" }}>
                      <span className="text-white font-bold text-[16px]">N</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] tracking-tight leading-tight">With Cadence Nova</p>
                      <p className="text-white/55 text-[11px]">CISCE compliance on autopilot</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Live</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  {WORKFLOW.map((r, i) => (
                    <div key={i}
                      className="group flex items-start gap-4 rounded-2xl transition-colors duration-200 hover:bg-[#f5f3ff] cursor-default"
                      style={{ padding: "12px 14px" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: "rgba(124,58,237,0.08)" }}>
                        <CheckCircle2 size={15} style={{ color: PURPLE }} />
                      </div>
                      <p className="flex-1 text-[13px] text-[#374151] leading-snug mt-0.5">{r.after}</p>
                    </div>
                  ))}
                </div>
                <div className="h-5" style={{ background: "linear-gradient(to top, rgba(124,58,237,0.04), transparent)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MODULE ACCORDION ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              8 Modules · All Included · No Add-ons
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", letterSpacing: "-0.02em" }}>
              Built for how ICSE schools actually work.
            </h2>
            <p className="text-neutral-400 text-[14px] mt-3">Click any module to see what it does for your school.</p>
          </div>

          <div className="space-y-2">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              const isOpen = openModule === i;
              return (
                <div key={i} className="rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{ borderColor: isOpen ? "rgba(124,58,237,0.28)" : "#e5e7eb",
                    background: isOpen ? "rgba(124,58,237,0.02)" : "white" }}>
                  <button className="w-full flex items-center gap-4 px-6 py-4 text-left"
                    onClick={() => setOpenModule(isOpen ? null : i)}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: isOpen ? "rgba(124,58,237,0.12)" : "rgba(124,58,237,0.06)",
                        border: `1px solid ${isOpen ? "rgba(124,58,237,0.28)" : "rgba(124,58,237,0.12)"}` }}>
                      <Icon size={18} style={{ color: PURPLE }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-[15px] text-[#111827]">{mod.name}</span>
                        <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold shrink-0"
                          style={{ background: "rgba(124,58,237,0.07)", color: PURPLE }}>{mod.tag}</span>
                      </div>
                      {!isOpen && <p className="text-[12px] text-neutral-400 mt-0.5 truncate">{mod.compliance}</p>}
                    </div>
                    <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: isOpen ? "rgba(124,58,237,0.10)" : "transparent" }}>
                      {isOpen ? <Minus size={14} style={{ color: PURPLE }} /> : <Plus size={14} className="text-neutral-400" />}
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
                                <CheckCircle2 size={13} style={{ color: PURPLE }} className="mt-0.5 shrink-0" />
                                <span className="text-[13px] text-neutral-600">{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-1.5">
                            <Sparkles size={11} style={{ color: PURPLE }} />
                            <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-300">{mod.compliance}</span>
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
                style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.14)" }}>
                <LayoutGrid size={18} style={{ color: PURPLE }} />
              </div>
              <div>
                <p className="font-semibold text-[14px] text-[#111827] mb-0.5">Need HRMS, Payroll, or Workflow automation?</p>
                <p className="text-[12px] text-neutral-400">Nova AppStore adds HRMS, Payroll, Pulse, Hire, Workflow, and Warehouse to your base platform — when you need them.</p>
              </div>
            </div>
            <Link href="/appstore"
              className="inline-flex items-center gap-1.5 shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${PURPLE}, #6D28D9)` }}>
              Explore AppStore <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── ASK NOVA ─────────────────────────────────────────────────────────── */}
      <WaveWhiteToDark />
      <div className="relative overflow-hidden" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.30)" }}>
            <Zap size={11} style={{ color: PLIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: `linear-gradient(90deg, ${PLIGHT}, #e9d5ff)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ask Nova — Live
            </span>
          </div>
          <h2 className="text-white font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.02em" }}>
            Your ICSE data.{" "}
            <span style={{ background: `linear-gradient(90deg, ${PLIGHT}, #e9d5ff)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One question away.
            </span>
          </h2>
          <p className="text-white/40 text-[14px] mb-10">Watch Nova answer a real ICSE Coordinator query — live.</p>
          <AskNovaAnimated />
        </div>
      </div>
      <WaveDarkToWhite />

      {/* ── FAQs ─────────────────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ICSE School FAQ
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 32px)", letterSpacing: "-0.02em" }}>
              Questions ICSE Principals ask us.
            </h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border overflow-hidden transition-all"
                  style={{ borderColor: isOpen ? "rgba(124,58,237,0.22)" : "#e5e7eb",
                    background: isOpen ? "rgba(124,58,237,0.02)" : "white" }}>
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

      {/* ── NOVA LOUNGE + CTA ────────────────────────────────────────────────── */}
      <div style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto px-6 pt-4 pb-24">

          <div className="mb-8">
            <VideoPlaceholder
              label="Nova Lounge Boomerang"
              prompt="Young Nova implementation consultant (male, late 20s, professional casual) seated beside an older female school coordinator (50s, formal salwar, glasses). Both pointing at something off-screen, smiling. School trophies visible behind. No screens visible. No text anywhere. Warm daylight. 4-second boomerang loop." />
          </div>

          <div className="rounded-3xl p-8"
            style={{ background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.14)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold tracking-widest uppercase"
                    style={{ background: `linear-gradient(90deg, ${PURPLE}, ${PLIGHT})`,
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
                  Our team stays on-site and remotely until every ICSE assessment workflow is live, every CAREERS export is tested,
                  and your school runs on Nova — not just handed over on go-live day.
                </p>
              </div>
              <Link href="/book-demo"
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${PURPLE}, #6D28D9)`,
                  boxShadow: `0 0 28px rgba(124,58,237,0.32)` }}>
                Book a Demo <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
