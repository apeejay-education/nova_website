"use client";

import { useState } from "react";
import Hero from "@/components/hero/Hero";
import PlatformSection from "@/components/sections/PlatformSection";
import AISection from "@/components/sections/AISection";
import NovaCommandSection from "@/components/sections/NovaCommandSection";
import AppStoreSection from "@/components/sections/AppStoreSection";
import CadenceCareSection from "@/components/sections/CadenceCareSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import Footer from "@/components/sections/Footer";
import BookDemoModal from "@/components/forms/BookDemoModal";
import VideoModal from "@/components/hero/VideoModal";
import CommandPalette from "@/components/ui/CommandPalette";

function WaveDividerDarkToLight() {
  return (
    <div className="relative bg-[#0b0f1a] overflow-hidden" style={{ height: 96 }}>
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="platform-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#E91E8C" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,44 C1120,4 320,84 0,44 Z" fill="white" />
        <path
          d="M0,38 C320,78 1120,-2 1440,38 L1440,50 C1120,10 320,90 0,50 Z"
          fill="url(#platform-wave-grad)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

function SlashDividerDarkToWarm() {
  return (
    <div className="relative bg-[#f5f2ee] overflow-hidden" style={{ height: 80 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="slash-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,18 L0,62 Z" fill="#0b0f1a" />
        <path d="M0,58 L1440,14 L1440,22 L0,66 Z" fill="url(#slash-grad)" opacity="0.85" />
      </svg>
    </div>
  );
}

function GlowLineDivider() {
  const DOTS = [
    { x: 118,  y: 42,  r: 2.5, c: "#2563EB", o: 0.90 },
    { x: 288,  y: 22,  r: 1.5, c: "#7C3AED", o: 0.55 },
    { x: 432,  y: 58,  r: 3.0, c: "#7C3AED", o: 0.85 },
    { x: 582,  y: 28,  r: 1.8, c: "#2563EB", o: 0.60 },
    { x: 722,  y: 68,  r: 1.5, c: "#7C3AED", o: 0.45 },
    { x: 862,  y: 46,  r: 2.5, c: "#7C3AED", o: 0.80 },
    { x: 1022, y: 26,  r: 2.0, c: "#2563EB", o: 0.65 },
    { x: 1182, y: 54,  r: 3.0, c: "#2563EB", o: 0.90 },
    { x: 1342, y: 36,  r: 1.5, c: "#7C3AED", o: 0.50 },
    { x: 198,  y: 108, r: 2.0, c: "#7C3AED", o: 0.70 },
    { x: 378,  y: 128, r: 2.5, c: "#2563EB", o: 0.85 },
    { x: 558,  y: 110, r: 1.5, c: "#7C3AED", o: 0.50 },
    { x: 752,  y: 132, r: 3.0, c: "#2563EB", o: 0.90 },
    { x: 922,  y: 114, r: 2.0, c: "#7C3AED", o: 0.70 },
    { x: 1102, y: 130, r: 2.5, c: "#2563EB", o: 0.80 },
    { x: 1282, y: 106, r: 1.5, c: "#7C3AED", o: 0.50 },
  ];
  const CURVES = [
    `M118,42 C240,50 350,55 432,58`,
    `M432,58 C540,62 640,66 722,68`,
    `M722,68 C800,60 860,52 862,46`,
    `M862,46 C930,36 980,30 1022,26`,
    `M1022,26 C1100,32 1140,42 1182,54`,
    `M1182,54 C1260,44 1310,38 1342,36`,
    `M198,108 C270,116 330,122 378,128`,
    `M378,128 C460,128 520,118 558,110`,
    `M558,110 C640,108 700,120 752,132`,
    `M752,132 C830,130 880,122 922,114`,
    `M922,114 C1000,112 1060,122 1102,130`,
    `M1102,130 C1180,128 1240,116 1282,106`,
    `M288,22 C480,60 620,110 752,132`,
    `M582,28 C540,60 460,100 378,128`,
    `M862,46 C960,80 1040,110 1102,130`,
    `M1342,36 C1320,60 1300,86 1282,106`,
  ];

  return (
    <div className="relative bg-[#0b0f1a] overflow-hidden" style={{ height: 160 }} aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600, height: 160,
          background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, rgba(37,99,235,0.06) 45%, transparent 70%)",
        }}
      />
      <svg viewBox="0 0 1440 160" preserveAspectRatio="xMidYMid meet" fill="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="cline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#2563EB" stopOpacity="0.0" />
            <stop offset="25%"  stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="75%"  stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
          </linearGradient>
          <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <line x1="0" y1="80" x2="1440" y2="80" stroke="url(#cline-grad)" strokeWidth="1" />
        {CURVES.map((d, i) => (
          <path key={i} d={d} stroke={i < 6 ? "#2563EB" : "#7C3AED"} strokeWidth="0.75" strokeOpacity={i >= 12 ? 0.18 : 0.28} />
        ))}
        {DOTS.map(({ x, y, r, c, o }, i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={c} opacity={o} filter="url(#dot-glow)" />
        ))}
      </svg>
    </div>
  );
}

function WaveDividerWarmToWhite() {
  return (
    <div className="relative overflow-hidden bg-white" style={{ height: 80 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="warm-white-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,44 C1120,4 320,84 0,44 Z" fill="#f5f2ee" />
        <path
          d="M0,38 C320,78 1120,-2 1440,38 L1440,50 C1120,10 320,90 0,50 Z"
          fill="url(#warm-white-wave-grad)"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

function WaveDividerDarkToWarm() {
  return (
    <div className="relative overflow-hidden" style={{ height: 96, background: "#f5f2ee" }}>
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dark-warm-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,44 C1120,4 320,84 0,44 Z" fill="#0b0f1a" />
        <path
          d="M0,38 C320,78 1120,-2 1440,38 L1440,50 C1120,10 320,90 0,50 Z"
          fill="url(#dark-warm-wave-grad)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

function SlashDividerWarmToDark() {
  return (
    <div className="relative bg-[#0b0f1a] overflow-hidden" style={{ height: 80 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="warm-dark-slash-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M0,0 L1440,0 L1440,18 L0,62 Z" fill="#f5f2ee" />
        <path d="M0,58 L1440,14 L1440,22 L0,66 Z" fill="url(#warm-dark-slash-grad)" opacity="0.85" />
      </svg>
    </div>
  );
}

export default function HomePageClient() {
  const [demoOpen,  setDemoOpen]  = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* Global ⌘K command palette */}
      <CommandPalette
        onBookDemo={() => setDemoOpen(true)}
        onWatchVideo={() => setVideoOpen(true)}
      />

      <Hero
        onBookDemo={() => setDemoOpen(true)}
        onWatchVideo={() => setVideoOpen(true)}
      />

      <div id="section-platform"><PlatformSection /></div>
      <WaveDividerDarkToLight />
      <div id="section-ai"><AISection /></div>
      <GlowLineDivider />
      <div id="section-nova-command"><NovaCommandSection /></div>
      <SlashDividerDarkToWarm />
      <div id="section-appstore"><AppStoreSection /></div>
      <SlashDividerWarmToDark />
      <div id="section-cadence-care"><CadenceCareSection onBookDemo={() => setDemoOpen(true)} /></div>
      <WaveDividerDarkToWarm />
      <ComparisonSection />
      <WaveDividerWarmToWhite />
      <IntegrationsSection />
      <Footer onBookDemo={() => setDemoOpen(true)} />

      {/* Floating ⌘K hint — fixed bottom-right */}
      <button
        onClick={() => { /* opens palette via keyboard only — this is just a hint */ }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-medium select-none pointer-events-none"
        style={{
          background: "rgba(11,15,26,0.85)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          color: "rgba(255,255,255,0.55)",
          boxShadow: "0 4px 24px rgba(37,99,235,0.15)",
        }}
        aria-hidden="true"
        tabIndex={-1}
      >
        <kbd
          className="inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
        >
          ⌘K
        </kbd>
        <span>Explore Nova</span>
      </button>

      <BookDemoModal open={demoOpen}  onClose={() => setDemoOpen(false)} />
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  );
}
