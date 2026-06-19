"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, UserPlus, Users, CalendarCheck,
  Sparkles, Zap, Lock, ShieldCheck,
  Search, ArrowRight, Clock,
  Banknote, Heart, Briefcase, GitBranch, Package,
  Building2, CheckCircle2, Bell,
} from "lucide-react";

// ─── Icon registry (serialisable from server components) ──────────────────────

const ICONS = {
  GraduationCap, UserPlus, Users, CalendarCheck,
  Sparkles, Zap, Lock, ShieldCheck,
  Search, ArrowRight, Clock,
  Banknote, Heart, Briefcase, GitBranch, Package,
  Building2, CheckCircle2, Bell,
} as const;

export type IconName = keyof typeof ICONS;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface JNode {
  icon:  IconName;
  x:     number;   // 0–100 (% of container width)
  y:     number;   // 0–100 (% of container height)
  delay: number;   // ms stagger for glow animation
}

interface Props {
  nodes: JNode[];
  paths: string[]; // SVG cubic-bezier d-strings in 0–100 coordinate space
  tone:  "dark" | "light";
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function JourneyBackground({ nodes, paths, tone }: Props) {
  const ref        = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLit(true); },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const rgb = tone === "dark" ? "255,255,255" : "30,58,138";

  const pathOpacity  = 0.07;
  const circBase     = tone === "dark" ? 0.06  : 0.05;
  const circGlow     = tone === "dark" ? 0.20  : 0.14;
  const fillBase     = 0.01;
  const fillGlow     = tone === "dark" ? 0.05  : 0.03;
  const iconBase     = tone === "dark" ? 0.06  : 0.05;
  const iconGlow     = tone === "dark" ? 0.24  : 0.17;

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Connecting paths — SVG in 0-100 percentage coordinate space */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={`rgba(${rgb},${pathOpacity})`}
            strokeWidth="0.13"
            strokeDasharray="0.55 0.85"
          />
        ))}
      </svg>

      {/* Nodes — circular HTML elements so circles stay round */}
      {nodes.map(({ icon, x, y, delay }, i) => {
        const Icon = ICONS[icon];
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center rounded-full"
            style={{
              left:       `${x}%`,
              top:        `${y}%`,
              width:      "30px",
              height:     "30px",
              transform:  "translate(-50%, -50%)",
              border:     `1px solid rgba(${rgb},${lit ? circGlow : circBase})`,
              background: `rgba(${rgb},${lit ? fillGlow : fillBase})`,
              color:      `rgba(${rgb},${lit ? iconGlow : iconBase})`,
              transition: [
                `border-color 700ms ease ${delay}ms`,
                `background   700ms ease ${delay}ms`,
                `color        700ms ease ${delay}ms`,
              ].join(", "),
            }}
          >
            <Icon size={13} strokeWidth={1.5} />
          </div>
        );
      })}
    </div>
  );
}
