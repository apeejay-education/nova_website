"use client";

import { ChevronRight, Play } from "lucide-react";
import SeamlessVideo from "@/components/ui/SeamlessVideo";
import NovaHeroDashboard from "@/components/hero/NovaHeroDashboard";

interface HeroProps {
  onBookDemo: () => void;
  onWatchVideo: () => void;
}

export default function Hero({ onBookDemo, onWatchVideo }: HeroProps) {
  return (
    <>
      <div className="relative w-full bg-[#0b0f1a]">

        {/* Background video — constrained to 100vh */}
        <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: "100vh" }}>
          <SeamlessVideo src="/assets/videos/hero-principal-loop.mp4" />

          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />

          {/* Radial vignette — darkens the zone behind the headline text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(0,0,0,0.52) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col">

          {/* Center content */}
          <div className="flex flex-col items-center px-6 pt-40 text-center">

            {/* Canonical headline */}
            <h1
              className="text-white max-w-5xl"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.03em",
                textShadow: "0 2px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.30)",
              }}
            >
              School management.
              <br />
              School{" "}
              <span className="relative inline-block">
                {/* Subtle warm highlight behind "intelligence" */}
                <span
                  className="absolute rounded-lg pointer-events-none"
                  style={{
                    inset: "-3px -6px",
                    background: "linear-gradient(90deg, rgba(233,30,140,0.18) 0%, rgba(249,115,22,0.18) 100%)",
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    background: "linear-gradient(90deg, #E91E8C, #F97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    position: "relative",
                  }}
                >
                  intelligence.
                </span>
              </span>
              <br />
              One platform.
            </h1>

            {/* Stat line — frosted glass pill */}
            <div className="mt-14 bg-white/[0.12] backdrop-blur-sm border border-white/[0.20] rounded-full px-6 py-2.5">
              <p className="text-white/75 text-[12px] tracking-widest uppercase">
                8 Modules&nbsp;&nbsp;·&nbsp;&nbsp;AI Queries&nbsp;&nbsp;·&nbsp;&nbsp;Hotkey Enabled
              </p>
            </div>

            {/* CTAs — above the dashboard, visible at the fold */}
            <div className="flex items-center gap-6 mt-12">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-3 bg-white text-[#0b0f1a] rounded-full pl-7 pr-2.5 py-3 hover:bg-white/90 transition-colors"
                style={{ fontSize: 15, fontWeight: 500 }}
              >
                Book a Demo
                <span className="w-8 h-8 rounded-full bg-[#0b0f1a]/10 flex items-center justify-center">
                  <ChevronRight size={15} strokeWidth={2.5} />
                </span>
              </button>

              {/* Pulsing gradient play button */}
              <button
                onClick={onWatchVideo}
                className="relative w-14 h-14 flex items-center justify-center"
                aria-label="Play Exclusive Preview"
              >
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", opacity: 0.25 }}
                />
                <span
                  className="absolute inset-[-6px] rounded-full animate-ping"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", opacity: 0.12, animationDelay: "0.4s" }}
                />
                <span
                  className="relative w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                    boxShadow: "0 0 24px rgba(124,58,237,0.60), 0 0 48px rgba(37,99,235,0.28)",
                  }}
                >
                  <Play size={18} fill="white" strokeWidth={0} className="ml-0.5" />
                </span>
              </button>
            </div>

            {/* Product preview — dashboard flows past 100vh fold */}
            <div className="mt-20 w-full mb-16">
              <NovaHeroDashboard />
            </div>
          </div>

          {/* Wave divider — dark hero → white next section */}
          <div className="relative bg-white overflow-hidden" style={{ height: 96 }}>
            <svg
              viewBox="0 0 1440 96"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hero-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <path d="M0,0 L1440,0 L1440,52 C1120,92 320,8 0,52 Z" fill="#0b0f1a" />
              <path
                d="M0,46 C320,2 1120,86 1440,46 L1440,58 C1120,98 320,14 0,58 Z"
                fill="url(#hero-wave-grad)"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
