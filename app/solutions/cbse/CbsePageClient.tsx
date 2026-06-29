"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Users, CalendarCheck, IndianRupee, GraduationCap,
  Bus, Home, BookOpen, Monitor,
  Shield, ChevronRight, ChevronDown, Sparkles, MessageSquare, Zap,
  CheckCircle2, XCircle, ArrowRight, LayoutGrid, Plus, Minus,
  Camera, Play, Globe, Lock, BarChart2,
} from "lucide-react";
import Footer from "@/components/sections/Footer";
import BookDemoModal from "@/components/forms/BookDemoModal";

// ─── colour tokens ────────────────────────────────────────────────────────────
const BLUE  = "#2563EB";
const BLIGHT = "#93C5FD";
const DARK  = "#0b0f1a";
const CREAM = "#f5f2ee";

// ─── CBSE-blue wave divider (dark → cream) ────────────────────────────────────
function WaveDarkToCream() {
  return (
    <div className="relative overflow-hidden" style={{ height: 96, background: CREAM }}>
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="w1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={BLUE}   stopOpacity="0.8" />
            <stop offset="100%" stopColor={BLIGHT} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,44 C1120,4 320,84 0,44 Z" fill={DARK} />
        <path d="M0,38 C320,78 1120,-2 1440,38 L1440,50 C1120,10 320,90 0,50 Z" fill="url(#w1)" opacity="0.9" />
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
          <linearGradient id="sl1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={BLUE}   />
            <stop offset="100%" stopColor={BLIGHT} />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,16 L0,56 Z" fill={CREAM} />
        <path d="M0,52 L1440,12 L1440,20 L0,60 Z" fill="url(#sl1)" opacity="0.65" />
      </svg>
    </div>
  );
}

// ─── CBSE glow-line divider (blue-only, no purple) ────────────────────────────
function GlowLineBlue() {
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
          background: "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.06) 45%, transparent 70%)" }} />
      <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMid meet" fill="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="gl1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={BLUE}   stopOpacity="0.0" />
            <stop offset="25%"  stopColor={BLUE}   stopOpacity="0.45" />
            <stop offset="75%"  stopColor={BLIGHT} stopOpacity="0.40" />
            <stop offset="100%" stopColor={BLIGHT} stopOpacity="0.0" />
          </linearGradient>
          <filter id="dg1" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="0" y1="60" x2="1440" y2="60" stroke="url(#gl1)" strokeWidth="1" />
        {CURVES.map((d, i) => (
          <path key={i} d={d} stroke={BLUE} strokeWidth="0.8" strokeOpacity="0.30" />
        ))}
        {DOTS.map(({ x, y, r, o }, i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={BLUE} opacity={o} filter="url(#dg1)" />
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
          <linearGradient id="w2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={BLUE}   stopOpacity="0.55" />
            <stop offset="100%" stopColor={BLIGHT} stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path d="M0,56 L1440,56 L1440,0 C1080,44 360,8 0,36 Z" fill="white" />
        <path d="M0,32 C360,6 1080,40 1440,-2 L1440,6 C1080,48 360,14 0,40 Z" fill="url(#w2)" opacity="0.65" />
      </svg>
    </div>
  );
}

// ─── wave divider (dark → white) ─────────────────────────────────────────────
function WaveDarkToWhite() {
  return (
    <div className="relative overflow-hidden bg-white" style={{ height: 56 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="w3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={BLUE}   stopOpacity="0.55" />
            <stop offset="100%" stopColor={BLIGHT} stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,56 C1080,20 360,52 0,28 Z" fill={DARK} />
        <path d="M0,24 C360,48 1080,16 1440,52 L1440,60 C1080,24 360,56 0,32 Z" fill="url(#w3)" opacity="0.60" />
      </svg>
    </div>
  );
}

// ─── Image / boomerang placeholder ──────────────────────────────────────────
function ImgPlaceholder({ label, prompt, className = "" }: { label: string; prompt: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(37,99,235,0.02) 100%)",
        border: "1.5px dashed rgba(37,99,235,0.22)" }}>
      <div className="flex flex-col items-center text-center p-6">
        <Camera size={26} className="mb-3" style={{ color: "rgba(37,99,235,0.38)" }} />
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(37,99,235,0.55)" }}>{label}</p>
        <p className="text-[10px] text-neutral-400 leading-relaxed max-w-[260px]">{prompt}</p>
      </div>
    </div>
  );
}

function VideoPlaceholder({ label, prompt, dark = false }: { label: string; prompt: string; dark?: boolean }) {
  return (
    <div className="relative rounded-2xl overflow-hidden w-full aspect-video flex items-center justify-center"
      style={{ background: dark
        ? "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(11,15,26,0.85))"
        : "linear-gradient(135deg, rgba(37,99,235,0.07), rgba(37,99,235,0.02))",
        border: "1.5px dashed rgba(37,99,235,0.28)" }}>
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
          style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.30)" }}>
          <Play size={18} style={{ color: dark ? BLIGHT : BLUE }} />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: dark ? BLIGHT : BLUE }}>
          {label}
        </p>
        <p className={`text-[10px] leading-relaxed max-w-[300px] ${dark ? "text-white/40" : "text-neutral-400"}`}>
          {prompt}
        </p>
      </div>
    </div>
  );
}

// ─── Portal hub-and-spoke SVG ─────────────────────────────────────────────────
const HUB_NODES = [
  { id: "APAAR",  cx: 400, cy: 68  },
  { id: "OASIS",  cx: 541, cy: 122 },
  { id: "UDISE+", cx: 598, cy: 262 },
  { id: "LOC",    cx: 541, cy: 402 },
  { id: "HPC",    cx: 400, cy: 456 },
  { id: "SARAS",  cx: 259, cy: 402 },
  { id: "TC",     cx: 202, cy: 262 },
  { id: "75%",    cx: 259, cy: 122 },
];

function PortalHub() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="w-full max-w-md mx-auto select-none">
      <svg viewBox="100 40 600 460" fill="none" className="w-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="hub-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={BLUE}  stopOpacity="0.22" />
            <stop offset="100%" stopColor={BLUE}  stopOpacity="0.04" />
          </radialGradient>
          <filter id="hub-glow">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="node-shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor={BLUE} floodOpacity="0.20" />
          </filter>
        </defs>

        {/* Concentric rings */}
        <circle cx="400" cy="262" r="215" stroke={BLUE} strokeWidth="0.6" strokeOpacity="0.10" strokeDasharray="4 7" />
        <circle cx="400" cy="262" r="140" stroke={BLUE} strokeWidth="0.6" strokeOpacity="0.07" strokeDasharray="3 9" />

        {/* Spoke lines — animated */}
        {HUB_NODES.map((n, i) => (
          <motion.path key={n.id}
            d={`M 400,262 L ${n.cx},${n.cy}`}
            stroke={BLUE} strokeWidth="1.4" strokeOpacity="0.30"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: "easeOut" }}
          />
        ))}

        {/* Centre glow */}
        <motion.circle cx="400" cy="262" r="56" fill="url(#hub-bg)"
          initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.05 }} />
        <circle cx="400" cy="262" r="56" stroke={BLUE} strokeWidth="1.8" strokeOpacity="0.50" />
        <text x="400" y="257" textAnchor="middle" fill={BLUE} fontSize="14" fontWeight="800" letterSpacing="1.5">NOVA</text>
        <text x="400" y="273" textAnchor="middle" fill={BLUE} fontSize="8.5" opacity="0.60" fontWeight="500">All portals</text>

        {/* Portal nodes */}
        {HUB_NODES.map((n, i) => (
          <motion.g key={n.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.40, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <circle cx={n.cx} cy={n.cy} r="36" fill="white" stroke={BLUE} strokeWidth="1.6" strokeOpacity="0.48"
              filter="url(#node-shadow)" />
            <circle cx={n.cx} cy={n.cy} r="36" fill={BLUE} fillOpacity="0.05" />
            <text x={n.cx} y={n.cy + 5} textAnchor="middle" dominantBaseline="middle"
              fill={BLUE} fontSize={n.id.length > 4 ? "9.5" : "11.5"} fontWeight="800">
              {n.id}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// ─── APAAR compliance flow ────────────────────────────────────────────────────
const APAAR_STEPS = [
  { label: "Student",    sub: "SIS Record",          num: "01" },
  { label: "Aadhaar",   sub: "PEN Seeding",          num: "02" },
  { label: "Consent",   sub: "GIVEN / REFUSED / NOGEN", num: "03", highlight: true },
  { label: "CBSE Sync", sub: "OASIS Export",         num: "04" },
  { label: "Audit",     sub: "Inspection Ready",     num: "05" },
];

function ApaarFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const W = 130, GAP = 44, CY = 72, H = 64, RX = 14;
  const total = APAAR_STEPS.length;
  const svgW = total * W + (total - 1) * GAP;
  const VW = svgW + 60;

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${VW} 160`} fill="none" className="w-full min-w-[560px]" style={{ overflow: "visible" }}>
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill={BLUE} opacity="0.45" />
          </marker>
          <linearGradient id="sgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={BLUE} stopOpacity="0.10" />
            <stop offset="100%" stopColor={BLUE} stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Connector arrows */}
        {APAAR_STEPS.slice(0, -1).map((_, i) => {
          const x1 = 30 + i * (W + GAP) + W;
          const x2 = 30 + (i + 1) * (W + GAP);
          return (
            <motion.path key={i}
              d={`M ${x1},${CY + H / 2} L ${x2 - 2},${CY + H / 2}`}
              stroke={BLUE} strokeWidth="1.6" strokeOpacity="0.35" markerEnd="url(#arr)"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            />
          );
        })}

        {/* Consent outcome badges */}
        {["GIVEN", "REFUSED", "NOGEN"].map((lbl, i) => {
          const bx = 30 + 2 * (W + GAP) + W / 2;
          const by = CY + H + 12;
          const offsets = [-38, 0, 38];
          const colors: Record<string, { bg: string; border: string; text: string }> = {
            GIVEN:   { bg: "rgba(22,163,74,0.10)",   border: "rgba(22,163,74,0.30)",   text: "#16a34a" },
            REFUSED: { bg: "rgba(239,68,68,0.10)",   border: "rgba(239,68,68,0.28)",   text: "#dc2626" },
            NOGEN:   { bg: "rgba(245,158,11,0.10)",  border: "rgba(245,158,11,0.28)",  text: "#d97706" },
          };
          const c = colors[lbl];
          return (
            <motion.g key={lbl}
              initial={{ opacity: 0, y: 5 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85 + i * 0.10 }}>
              <rect x={bx + offsets[i] - 22} y={by} width={44} height={17} rx="8.5"
                fill={c.bg} stroke={c.border} strokeWidth="0.75" />
              <text x={bx + offsets[i]} y={by + 12} textAnchor="middle"
                fill={c.text} fontSize="7.5" fontWeight="700">{lbl}</text>
            </motion.g>
          );
        })}

        {/* Step cards */}
        {APAAR_STEPS.map((s, i) => {
          const x = 30 + i * (W + GAP);
          return (
            <motion.g key={s.num}
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.08 + i * 0.11, ease: [0.22, 1, 0.36, 1] }}>
              <rect x={x} y={CY} width={W} height={H} rx={RX}
                fill="white" stroke={BLUE} strokeWidth={s.highlight ? "2" : "1.4"}
                strokeOpacity={s.highlight ? "0.55" : "0.32"}
                style={{ filter: "drop-shadow(0 2px 10px rgba(37,99,235,0.13))" }} />
              <rect x={x} y={CY} width={W} height={H} rx={RX} fill="url(#sgrad)" />
              {/* Step pill */}
              <rect x={x + 10} y={CY + 10} width={26} height={14} rx="7"
                fill={BLUE} fillOpacity="0.10" />
              <text x={x + 23} y={CY + 21} textAnchor="middle" fill={BLUE} fontSize="8" fontWeight="800">{s.num}</text>
              {/* Label */}
              <text x={x + W / 2} y={CY + 34} textAnchor="middle" fill="#111827" fontSize="11" fontWeight="700">{s.label}</text>
              <text x={x + W / 2} y={CY + 50} textAnchor="middle" fill="#6b7280" fontSize={s.highlight ? "7" : "8.5"}>
                {s.sub}
              </text>
            </motion.g>
          );
        })}
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
        background: "radial-gradient(ellipse 70% 65% at 65% 48%, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0.04) 50%, transparent 72%)"
      }} />
      <svg className="absolute right-0 top-0 h-full" style={{ width: "55%" }}
        viewBox="0 0 792 900" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
        <path d="M160,120 C260,160 380,190 520,170" stroke="rgba(37,99,235,0.14)" strokeWidth="1.5" />
        <path d="M120,260 C260,300 380,340 560,310" stroke="rgba(37,99,235,0.10)" strokeWidth="1" />
        <path d="M180,440 C310,470 450,450 600,430" stroke="rgba(37,99,235,0.09)" strokeWidth="1.5" />
        <path d="M100,620 C260,650 410,640 580,610" stroke="rgba(37,99,235,0.11)" strokeWidth="1" />
        <circle cx="520" cy="170" r="3"   fill="rgba(37,99,235,0.30)" />
        <circle cx="560" cy="310" r="2.5" fill="rgba(37,99,235,0.24)" />
        <circle cx="600" cy="430" r="3"   fill="rgba(37,99,235,0.22)" />
        <circle cx="580" cy="610" r="2"   fill="rgba(37,99,235,0.20)" />
        <circle cx="320" cy="340" r="2.5" fill="rgba(37,99,235,0.16)" />
      </svg>
    </>
  );
}

// ─── Ask Nova typewriter ──────────────────────────────────────────────────────
const Q_TEXT = "Show me Class 12 students below 75% attendance who also have pending fees — send their parents a WhatsApp.";
const R_TEXT = "Found 14 students in Class 12 below 75% attendance with outstanding fees. WhatsApp drafted for all 14 parents.";
const CHIPS  = ["14 students flagged", "WhatsApp drafted", "₹4.2L outstanding"];

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
          style={{ background: "rgba(37,99,235,0.22)", border: `1px solid rgba(37,99,235,0.38)` }}>
          <MessageSquare size={14} style={{ color: BLIGHT }} />
        </div>
        <div className="flex-1 rounded-xl px-4 py-3 min-h-[48px]"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/80 text-[14px] leading-relaxed">
            {qText}
            {phase === "typing" && (
              <span className="inline-block w-[2px] h-[14px] ml-0.5 align-middle animate-pulse"
                style={{ background: BLIGHT }} />
            )}
          </p>
        </div>
      </div>

      {/* Nova response */}
      {(phase === "thinking" || phase === "responding" || phase === "done") && (
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `linear-gradient(135deg, ${BLUE}, #1d4ed8)` }}>
            <motion.div animate={phase === "thinking" ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1.5, repeat: phase === "thinking" ? Infinity : 0, ease: "linear" }}>
              <Sparkles size={13} className="text-white" />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="rounded-xl px-4 py-3 mb-3"
              style={{ background: "rgba(37,99,235,0.14)", border: "1px solid rgba(37,99,235,0.26)" }}>
              {phase === "thinking" ? (
                <div className="flex items-center gap-1.5 py-1">
                  {[0,1,2].map(i => (
                    <motion.div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: BLIGHT }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.22 }} />
                  ))}
                </div>
              ) : (
                <p className="text-white/85 text-[13px] leading-relaxed">
                  Found{" "}
                  <span style={{ color: BLIGHT }} className="font-semibold">14 students</span>
                  {" "}in Class 12 below 75% attendance with outstanding fees.
                  {rText.length > 70 && <> WhatsApp drafted for all 14 parents.</>}
                  {phase === "responding" && (
                    <span className="inline-block w-[2px] h-[12px] ml-0.5 align-middle animate-pulse"
                      style={{ background: BLIGHT }} />
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
  { number: "8",     label: "Government portals automated",            sub: "APAAR · OASIS · UDISE+ · LOC · HPC · SARAS · TC · 75%" },
  { number: "3 hrs", label: "Returned to every class teacher, weekly", sub: "No more manual registers, format copying, or portal data entry" },
  { number: "Zero",  label: "Missed CBSE compliance deadlines",        sub: "Deadline alerts, validator checks, and auto-export built in" },
];

const PORTAL_LIST = [
  { id: "APAAR",  full: "Academic Bank of Credits ID",          nova: "Bulk capture, consent tracking, REFUSED/NOGEN audit trail" },
  { id: "OASIS",  full: "Online Affiliated School Info System", nova: "Annual export in CBSE-prescribed format with data validator" },
  { id: "UDISE+", full: "Unified District Info System",         nova: "PEN tracking + Aadhaar mismatch validator — cuts 30–40% errors" },
  { id: "LOC",    full: "List of Candidates",                   nova: "Subject combination rules enforced, APAAR linked, deadline alerts" },
  { id: "HPC",    full: "Holistic Progress Card (NEP 2020)",    nova: "5-domain assessment — Cognitive, Social, Physical, Creative, Values" },
  { id: "SARAS",  full: "Affiliation Automation System",        nova: "Year-round compliance-readiness dashboard for affiliation renewal" },
  { id: "TC",     full: "Transfer Certificate (Appendix-V)",    nova: "Auto-fill PEN & Affiliation No., principal workflow, digital archive" },
  { id: "75%",    full: "Attendance Threshold Rule",            nova: "Early warning at 80%, CBSE condonation format, parent WhatsApp" },
];

const WORKFLOW = [
  { before: "Admin checks APAAR IDs one by one in the government portal. Consent tracking is a separate spreadsheet.", after: "Nova bulk-captures APAAR IDs via CSV. Consent tracked per student — REFUSED/NOGEN audit trail ready for inspection." },
  { before: "Teacher prints attendance register, counts absences by hand. Students below 75% discovered the day the deadline passes.", after: "Nova flags students at 80% — before the legal threshold. WhatsApp sent to parents automatically." },
  { before: "LOC prepared in Excel, subject combinations checked manually. Errors discovered after portal submission.", after: "Nova enforces CBSE subject combination rules at selection time. APAAR IDs auto-linked. One-click export." },
  { before: "HPC filled on printed sheets by 40 class teachers. Compiled by admin, typed into portal over three days.", after: "Bulk teacher entry, student self-assessment, portfolio upload. Principal sees completion per class in real time." },
  { before: "UDISE+ data pulled from 4 different registers. PEN and Aadhaar mismatches found only after rejection.", after: "Nova's PEN tracker + Aadhaar mismatch validator runs before export — catching 30–40% of errors proactively." },
];

const MODULES = [
  { icon: Users,        name: "Student Information System",  tag: "APAAR & UDISE Ready",        description: "One student record holds APAAR ID with consent status, PEN for UDISE+, and a name/DOB mismatch validator that catches errors before they reach any government portal.", compliance: "APAAR · UDISE+ · PEN · OASIS",      bullets: ["Bulk APAAR ID capture with REFUSED/NOGEN audit trail", "UDISE+ annual export with built-in data completeness validator", "CBSE Appendix-V TC auto-fill with principal digital sign-off"] },
  { icon: CalendarCheck,name: "Attendance Management",       tag: "75% Rule — Enforced",         description: "Nova flags students at 80% before the legal threshold and auto-generates CBSE-compliant condonation formats for the Regional Office. WhatsApp sent before the window closes.", compliance: "CBSE Bye-Laws 13 & 14",              bullets: ["Early warning at 80% — not just at the 75% breach point", "CBSE Regional Office condonation format auto-generated", "WhatsApp and SMS to parents before condonation deadline"] },
  { icon: IndianRupee,  name: "Fee Management",              tag: "CBSE Financial Disclosure",   description: "Online and offline fee collections with real-time reconciliation, defaulter identification, and parent notifications. CBSE financial disclosure records auto-maintained for OASIS.", compliance: "CBSE Financial Disclosure · OASIS", bullets: ["Online + offline collections with real-time reconciliation", "CBSE financial disclosure format auto-populated for OASIS", "Defaulter alerts with one-tap parent WhatsApp from the dashboard"] },
  { icon: GraduationCap,name: "Holistic Progress Cards",     tag: "NEP 2020 — Native",           description: "All 5 NEP 2020 domains built natively. Bulk teacher entry, student self-assessment, portfolio evidence upload, and a Principal completion dashboard before report card day.", compliance: "NEP 2020 · CCE · HPC",              bullets: ["All 5 domains: Cognitive, Social-Emotional, Physical, Creative, Values", "Student self-assessment and peer assessment built in", "Portfolio evidence upload with Principal sign-off dashboard"] },
  { icon: Bus,          name: "Transport Management",        tag: "Live GPS Tracking",           description: "Real-time bus tracking, route and stop management, and parent alerts when the bus is 10 minutes away. Driver and attendant assignment with daily log.", compliance: "Transport Safety Compliance",       bullets: ["Live GPS with automated parent WhatsApp at 10-minute ETA", "Route and stop management with student boarding confirmation", "Driver and attendant daily assignment, attendance, and incident log"] },
  { icon: Home,         name: "Hostel Management",           tag: "Warden Dashboard",            description: "Room allocation, student in/out log, warden dashboards, and parent notifications. Mess attendance and dietary preferences tracked alongside residential records.", compliance: "Hostel Safety & Residential Records", bullets: ["Room allocation with live occupancy dashboard", "Student in/out log with automated parent notifications", "Mess attendance and dietary preference management"] },
  { icon: BookOpen,     name: "Library Management",          tag: "OPAC + Digital Catalogue",    description: "Barcode-based issue and return, overdue alerts, OPAC for students to search the catalogue, and stock audit tools for the librarian.", compliance: "Library Records",                    bullets: ["Barcode-based issue/return with overdue alerts via WhatsApp", "OPAC — students search the full catalogue from any device", "Librarian periodic stock audit and reconciliation reports"] },
  { icon: Monitor,      name: "Learning Management System",  tag: "Assignments & Study Material", description: "Teachers assign homework, share study material, and track submissions in Nova. Students and parents access assignments, results, and teacher feedback from the same app.", compliance: "CBSE Digital Learning Guidelines",  bullets: ["Homework assignment with deadline and submission tracking", "Study material upload per class and subject", "Assessment results and teacher feedback in the parent app"] },
];

const FAQS = [
  { q: "Does Nova handle APAAR bulk consent capture?",                      a: "Yes. Nova captures APAAR IDs in bulk — via CSV upload or direct SIS sync. Consent status is tracked per student, including REFUSED and NOGEN cases, with a full audit trail for CBSE inspection readiness." },
  { q: "How does Nova generate the LOC without errors?",                    a: "Nova enforces CBSE subject combination rules at the point of student subject selection — not at submission time. APAAR IDs are auto-linked per candidate, and a deadline countdown with a data completeness check runs continuously." },
  { q: "Can Nova generate the CBSE attendance condonation format automatically?", a: "Yes. When a student breaches 75% attendance, Nova auto-generates the CBSE Regional Office condonation format with the student's attendance record, reason category, and principal certification. No manual formatting." },
  { q: "Does Nova support UDISE+ data export?",                             a: "Yes. Nova exports UDISE+ data in the prescribed annual format. A built-in validator cross-checks PEN numbers against Aadhaar records before export, catching 30–40% of mismatches that cause portal rejection." },
  { q: "How does Nova handle NEP 2020 Holistic Progress Cards?",            a: "Nova's HPC module is built natively for all 5 NEP 2020 domains. Teachers enter assessments in bulk, students complete self-assessments from the student app, and the Principal sees a real-time completion dashboard per class." },
];

const HERO_CHIPS = [
  { icon: Shield,        text: "CBSE Compliant" },
  { icon: GraduationCap, text: "NEP 2020 Ready" },
  { icon: Lock,          text: "DPDP Compliant" },
  { icon: Globe,         text: "India-Hosted" },
];

const HERO_BLOBS = [
  { color: "rgba(37,99,235,0.28)", w: 480, h: 440, top: "-8%",  left: "-6%",  dur: 28, x: [0, 22, -14, 0] as number[], y: [0, -18, 14, 0] as number[] },
  { color: "rgba(37,99,235,0.14)", w: 400, h: 360, top: "40%",  left: "25%",  dur: 34, x: [0, -28, 16, 0] as number[], y: [0, 16, -22, 0] as number[] },
  { color: "rgba(96,165,250,0.10)",w: 320, h: 280, top: "15%",  left: "65%",  dur: 24, x: [0, -12, 18, 0] as number[], y: [0, 14, -10, 0] as number[] },
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function CbsePageClient() {
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
          poster="/assets/images/hero-cbse-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.82 }}
          preload="metadata"
        >
          <source src="/assets/videos/hero-cbse.webm" type="video/webm" />
          <source src="/assets/videos/hero-cbse.mp4" type="video/mp4" />
        </video>

        {/* Vignette overlay — dark edges, video breathes through center */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 45%, rgba(11,15,26,0.30) 0%, rgba(11,15,26,0.72) 100%)"
        }} />

        {/* Ambient blobs — visible when video not yet loaded */}
        {HERO_BLOBS.map((b, i) => (
          <motion.div key={i} className="absolute pointer-events-none rounded-full"
            style={{ width: b.w, height: b.h, top: b.top, left: b.left,
              background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
              filter: "blur(72px)" }}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.dur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />
        ))}

        {/* Text content — centered, cinematic */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.30)" }}>
            <Shield size={11} style={{ color: BLIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: `linear-gradient(90deg, ${BLIGHT}, #e0f2fe)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              CBSE Schools
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white max-w-5xl mx-auto mb-5"
            style={{ fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.03em",
              textShadow: "0 2px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.30)" }}>
            Built for Indian schools.
            <br />Built for this decade.
            <br />
            <span className="relative inline-block">
              <span className="absolute rounded-lg pointer-events-none" aria-hidden="true"
                style={{ inset: "-3px -6px", background: "linear-gradient(90deg, rgba(37,99,235,0.22) 0%, rgba(147,197,253,0.18) 100%)" }} />
              <span style={{ fontFamily: "var(--font-instrument-serif), 'Georgia', serif", fontStyle: "italic", fontWeight: 400,
                background: `linear-gradient(90deg, ${BLIGHT}, #e0f2fe)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", position: "relative" }}>
                That&apos;s Nova.
              </span>
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto">
            CBSE compliant. NEP 2020 ready. DPDP aligned. Data hosted in India. One platform that covers it all.
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
            <Link href="/solutions/icse"
              className="inline-flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white/80 transition-colors">
              Looking for ICSE? →
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
                  <ChipIcon size={12} style={{ color: BLIGHT }} />
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
                    style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
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

            {/* Teacher image placeholder */}
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/cbse-stats-teacher.jpg"
                  alt="School administrator at desk"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <SlashCreamToWhite />
      </div>

      {/* ── NEP 2020 SECTION ─────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.18)" }}>
              <GraduationCap size={11} style={{ color: BLUE }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE }}>
                NEP 2020 — Built In, Not Bolted On
              </span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[#111827] font-bold leading-tight mb-3"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.02em" }}>
              Nova is built around<br />the three pillars NEP 2020 demands.
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-[15px] max-w-xl mx-auto">
              Not a compliance add-on. Nova's core modules reflect how NEP 2020 defines student development.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                tag: "Nursery → Grade 12",
                title: "Student Portfolio",
                body: "Every activity, award, and assessment tagged to a student's record from day one. Builds automatically across years. Exportable as a CV-ready PDF. Shareable as a unique student URL — school-sponsored while enrolled.",
                badge: "Portfolio Builder",
              },
              {
                icon: BarChart2,
                tag: "All 5 NEP Domains",
                title: "Holistic Progress Reports",
                body: "Beyond marks. All 5 NEP 2020 domains assessed per student — Cognitive, Social-Emotional, Physical, Creative, and Values. Co-curricular tagging, teacher observations, and student self-assessment in one report card.",
                badge: "HPC Native",
              },
              {
                icon: CheckCircle2,
                tag: "Outcome-Mapped",
                title: "Competency-Based Assessment",
                body: "Grade what students know, not just what they score. Every assessment in Nova maps to learning outcomes — not just marks. Periodic test, project, and practical scores feed into a competency profile per student.",
                badge: "Assessment Engine",
              },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  className="rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow"
                  style={{ background: "#fafafa", border: "1px solid rgba(37,99,235,0.10)" }}>
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.16)" }}>
                      <CardIcon size={20} style={{ color: BLUE }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1"
                      style={{ background: "rgba(37,99,235,0.07)", color: BLUE }}>
                      {card.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#111827] font-bold text-[18px] mb-2">{card.title}</h3>
                    <p className="text-neutral-500 text-[13px] leading-relaxed">{card.body}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-neutral-100">
                    <span className="text-[11px] font-semibold tracking-wide" style={{ color: BLUE }}>
                      {card.badge} →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── COMPLIANCE PORTAL HUB ────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              8 Government Portals · Zero Manual Work
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.02em" }}>
              Nova sits at the centre of every<br />CBSE compliance requirement.
            </h2>
            <p className="text-neutral-400 text-[14px] mt-3 max-w-lg mx-auto">
              Every government portal connects to Nova. Data flows out once — formatted correctly, validated, deadline-aware.
            </p>
          </div>

          {/* Hub-and-spoke + portal list side by side */}
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
                    style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)" }}>
                    <span className="font-bold text-[11px]"
                      style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
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

          {/* APAAR flow + admin photo */}
          <div className="rounded-2xl border border-neutral-100 p-8" style={{ background: "#fafafa" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold tracking-widest uppercase"
                style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                APAAR Compliance Flow
              </span>
              <span className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                style={{ background: "rgba(37,99,235,0.08)", color: BLUE }}>
                Most critical mandate
              </span>
            </div>
            <p className="text-[13px] text-neutral-400 mb-6">
              How Nova takes a student from raw SIS record to CBSE inspection-ready APAAR audit trail — automatically.
            </p>
            <ApaarFlow />
          </div>
        </div>
      </div>

      {/* ── GLOW-LINE DIVIDER ────────────────────────────────────────────────── */}
      <GlowLineBlue />

      {/* ── BEFORE / AFTER — split world ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6" style={{ background: CREAM }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <SplitLeft />
          <SplitRight />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The CBSE Admin Reality
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", letterSpacing: "-0.02em" }}>
              Board exam season.
              <br />Without Nova vs with Nova.
            </h2>
          </div>

          {/* Two-column card layout — same visual grammar as homepage ComparisonSection */}
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
                    The CBSE compliance grind
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
                style={{ background: "white", border: "1px solid rgba(37,99,235,0.14)",
                  boxShadow: "0 24px 64px rgba(37,99,235,0.13), 0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.90)" }}>
                {/* Gradient header */}
                <div className="px-7 py-5" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #1d4ed8 100%)` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.22)" }}>
                      <span className="text-white font-bold text-[16px]">N</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] tracking-tight leading-tight">With Cadence Nova</p>
                      <p className="text-white/55 text-[11px]">CBSE compliance on autopilot</p>
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
                      className="group flex items-start gap-4 rounded-2xl transition-colors duration-200 hover:bg-[#eff6ff] cursor-default"
                      style={{ padding: "12px 14px" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: "rgba(37,99,235,0.08)" }}>
                        <CheckCircle2 size={15} style={{ color: BLUE }} />
                      </div>
                      <p className="flex-1 text-[13px] text-[#374151] leading-snug mt-0.5">{r.after}</p>
                    </div>
                  ))}
                </div>
                <div className="h-5" style={{ background: "linear-gradient(to top, rgba(37,99,235,0.04), transparent)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MODULE ACCORDION ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white">
        {/* Dot grid decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.035]">
            <defs>
              <pattern id="cbse-dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cbse-dot-grid)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, white 75%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              8 Modules · All Included · No Add-ons
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", letterSpacing: "-0.02em" }}>
              Built for how CBSE schools actually work.
            </h2>
            <p className="text-neutral-400 text-[14px] mt-3">Click any module to explore its CBSE-specific capabilities.</p>
          </div>

          <div className="space-y-2">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              const isOpen = openModule === i;
              return (
                <div key={i} className="rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{ borderColor: isOpen ? "rgba(37,99,235,0.28)" : "#e5e7eb",
                    background: isOpen ? "rgba(37,99,235,0.02)" : "white" }}>
                  <button className="w-full flex items-center gap-4 px-6 py-4 text-left"
                    onClick={() => setOpenModule(isOpen ? null : i)}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: isOpen ? "rgba(37,99,235,0.12)" : "rgba(37,99,235,0.06)",
                        border: `1px solid ${isOpen ? "rgba(37,99,235,0.28)" : "rgba(37,99,235,0.12)"}` }}>
                      <Icon size={18} style={{ color: BLUE }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-[15px] text-[#111827]">{mod.name}</span>
                        <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold shrink-0"
                          style={{ background: "rgba(37,99,235,0.07)", color: BLUE }}>{mod.tag}</span>
                      </div>
                      {!isOpen && <p className="text-[12px] text-neutral-400 mt-0.5 truncate">{mod.compliance}</p>}
                    </div>
                    <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: isOpen ? "rgba(37,99,235,0.10)" : "transparent" }}>
                      {isOpen ? <Minus size={14} style={{ color: BLUE }} /> : <Plus size={14} className="text-neutral-400" />}
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
                                <CheckCircle2 size={13} style={{ color: BLUE }} className="mt-0.5 shrink-0" />
                                <span className="text-[13px] text-neutral-600">{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-1.5">
                            <Sparkles size={11} style={{ color: BLUE }} />
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
                style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)" }}>
                <LayoutGrid size={18} style={{ color: BLUE }} />
              </div>
              <div>
                <p className="font-semibold text-[14px] text-[#111827] mb-0.5">Need HRMS, Payroll, or Workflow automation?</p>
                <p className="text-[12px] text-neutral-400">Nova AppStore adds HRMS, Payroll, Pulse, Hire, Workflow, and Warehouse to your base platform — when you need them.</p>
              </div>
            </div>
            <Link href="/appstore"
              className="inline-flex items-center gap-1.5 shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${BLUE}, #1d4ed8)` }}>
              Explore AppStore <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── ASK NOVA ─────────────────────────────────────────────────────────── */}
      <WaveWhiteToDark />
      <div className="relative overflow-hidden" style={{ background: DARK }}>
        {/* Ambient glow blobs */}
        <div className="absolute pointer-events-none rounded-full" style={{ width: 560, height: 480, top: "-15%", left: "-8%", background: "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute pointer-events-none rounded-full" style={{ width: 440, height: 380, top: "30%", right: "-10%", background: "radial-gradient(ellipse at center, rgba(96,165,250,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute pointer-events-none" style={{ inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.30)" }}>
            <Zap size={11} style={{ color: BLIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase"
              style={{ background: `linear-gradient(90deg, ${BLIGHT}, #e0f2fe)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Ask Nova — Live
            </span>
          </div>
          <h2 className="text-white font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.02em" }}>
            Your CBSE data.{" "}
            <span style={{ background: `linear-gradient(90deg, ${BLIGHT}, #e0f2fe)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One question away.
            </span>
          </h2>
          <p className="text-white/40 text-[14px] mb-10">Watch Nova answer a real CBSE Principal query — live.</p>
          <AskNovaAnimated />
        </div>
      </div>
      <WaveDarkToWhite />

      {/* ── FAQs ─────────────────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              CBSE School FAQ
            </p>
            <h2 className="text-[#111827] font-bold leading-tight"
              style={{ fontSize: "clamp(22px, 2.8vw, 32px)", letterSpacing: "-0.02em" }}>
              Questions CBSE Principals ask us.
            </h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border overflow-hidden transition-all"
                  style={{ borderColor: isOpen ? "rgba(37,99,235,0.24)" : "#e5e7eb",
                    background: isOpen ? "rgba(37,99,235,0.02)" : "white" }}>
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

      {/* ── DPDP & TRUST STRIP ───────────────────────────────────────────────── */}
      <div className="bg-white py-10 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {[
              { icon: Globe,        label: "India-Hosted Servers",   sub: "Data never leaves Indian soil" },
              { icon: Lock,         label: "DPDP Compliant",         sub: "Digital Personal Data Protection Act" },
              { icon: Shield,       label: "256-bit Encrypted",      sub: "End-to-end data security" },
              { icon: CheckCircle2, label: "99.9% Uptime SLA",       sub: "Enterprise-grade reliability" },
            ].map((item, i) => {
              const TrustIcon = item.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)" }}>
                    <TrustIcon size={16} style={{ color: BLUE }} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#111827] leading-none mb-0.5">{item.label}</p>
                    <p className="text-[11px] text-neutral-400">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <WaveWhiteToDark />

      {/* ── NOVA LOUNGE + CTA ────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: CREAM }}>
        {/* Subtle radial glow */}
        <div className="absolute pointer-events-none" style={{ inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(37,99,235,0.05) 0%, transparent 65%)" }} />
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
            style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.14)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold tracking-widest uppercase"
                    style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLIGHT})`,
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
                  Our team stays on-site and remotely until every CBSE compliance workflow is live, every staff member
                  is trained, and your school runs on Nova — not just handed over on go-live day.
                </p>
              </div>
              <Link href="/book-demo"
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${BLUE}, #1d4ed8)`,
                  boxShadow: `0 0 28px rgba(37,99,235,0.32)` }}>
                Book a Demo <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer onBookDemo={() => setModalOpen(true)} />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
