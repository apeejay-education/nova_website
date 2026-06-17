"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Play, X, Sparkles } from "lucide-react";

interface HeroProps {
  onBookDemo: () => void;
}


function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          className="w-full h-full object-cover"
          src="/assets/videos/product-demo-preview.mp4"
          autoPlay
          controls
          playsInline
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}

export default function Hero({ onBookDemo }: HeroProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      {/* Full-bleed hero — video fills viewport edge-to-edge */}
      <div className="relative w-full h-screen overflow-hidden bg-[#0b0f1a]">

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/videos/hero-principal-loop.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/75" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">

          {/* Center content — pt-16 clears the fixed navbar */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-4 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span className="text-[13px] font-medium text-white">Cadence Nova</span>
            </div>

            {/* Bare headline — directly on video */}
            <h1
              className="mt-6 text-white max-w-4xl"
              style={{
                fontSize: "clamp(38px, 6.5vw, 76px)",
                lineHeight: 1.04,
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
            >
              Complete school{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                intelligence.
              </span>
              <br />
              One platform.
            </h1>

            {/* Subtitle — opaque white rounded box, dark text (Vivido-style) */}
            <div className="mt-5 bg-white/90 backdrop-blur-sm rounded-2xl px-7 py-3 shadow-sm">
              <p className="text-[#111827] text-[15px] font-medium">
                AI-powered. Blazing fast. School ERP, redefined.
              </p>
            </div>

            {/* Stat line — plain muted text, no pills */}
            <p className="mt-5 text-white/45 text-[13px] tracking-wide">
              8 Modules&nbsp;&nbsp;·&nbsp;&nbsp;AI Queries&nbsp;&nbsp;·&nbsp;&nbsp;Hotkey Enabled
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-5">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-3 bg-white text-[#0b0f1a] rounded-full pl-6 pr-2 py-2.5 hover:bg-white/90 transition-colors"
                style={{ fontSize: 14, fontWeight: 500 }}
              >
                Book a Demo
                <span className="w-7 h-7 rounded-full bg-[#0b0f1a]/10 flex items-center justify-center">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </span>
              </button>

              {/* Gradient glow play button */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-3 group"
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.55), 0 0 40px rgba(37,99,235,0.25)",
                  }}
                >
                  <Play size={16} fill="white" strokeWidth={0} className="ml-0.5" />
                </span>
                <span className="text-white/75 text-[14px] group-hover:text-white transition-colors">
                  Play Exclusive Preview
                </span>
              </button>
            </div>
          </div>

          {/* Bottom row — floating Ask Nova card + SCROLL indicator */}
          <div className="relative flex items-end px-6 sm:px-10 pb-8">

            {/* Ask Nova™ floating card — bottom left (Vivido-style feature card) */}
            <div className="hidden sm:block bg-white rounded-2xl shadow-xl p-4 max-w-[260px]">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={13} className="text-[#2563EB]" strokeWidth={2} />
                <span className="text-[13px] font-semibold text-[#111827]">Ask Nova™</span>
                <span className="ml-auto inline-flex items-center gap-1 bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Live
                </span>
              </div>
              <p className="text-[12px] text-neutral-500 leading-relaxed">
                Natural language queries across your entire school. Zero training needed.
              </p>
            </div>

            {/* SCROLL indicator — centered */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-1.5 text-white/35">
              <span className="text-[10px] tracking-[0.15em] font-medium uppercase">Scroll</span>
              <ChevronDown size={14} strokeWidth={2} />
            </div>

          </div>
        </div>
      </div>

      {videoModalOpen && <VideoModal onClose={() => setVideoModalOpen(false)} />}
    </>
  );
}
