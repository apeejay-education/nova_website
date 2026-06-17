"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Play, X, Sparkles } from "lucide-react";
import Wordmark from "@/components/ui/Wordmark";

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
  const [askNovaVisible, setAskNovaVisible] = useState(true);

  return (
    <>
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

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-4 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-white/60 shrink-0" />
              <Wordmark color="#ffffff" size="sm" />
            </div>

            {/* Bare headline */}
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

            {/* Subtitle — opaque white pill, dark text (Vivido-style) */}
            <div className="mt-5 bg-white/90 backdrop-blur-sm rounded-2xl px-7 py-3 shadow-sm">
              <p className="text-[#111827] text-[15px] font-medium">
                AI-powered. Blazing fast. School ERP, redefined.
              </p>
            </div>

            {/* Stat line — glassmorphism pill */}
            <div className="mt-4 bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] rounded-full px-6 py-2">
              <p className="text-white/75 text-[13px] tracking-wide">
                8 Modules&nbsp;&nbsp;·&nbsp;&nbsp;AI Queries&nbsp;&nbsp;·&nbsp;&nbsp;Hotkey Enabled
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-6">
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

              {/* Pulsing gradient play button — icon only */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="relative w-14 h-14 flex items-center justify-center"
                aria-label="Play Exclusive Preview"
              >
                {/* Outer pulse ring 1 */}
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    opacity: 0.25,
                  }}
                />
                {/* Outer pulse ring 2 — delayed */}
                <span
                  className="absolute inset-[-6px] rounded-full animate-ping"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    opacity: 0.12,
                    animationDelay: "0.4s",
                  }}
                />
                {/* Button core */}
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
          </div>

          {/* Bottom row */}
          <div className="relative flex items-end px-6 sm:px-10 pb-8">

            {/* Ask Nova™ — glassmorphism card with close button */}
            {askNovaVisible && (
              <div className="hidden sm:block bg-white/[0.12] backdrop-blur-md border border-white/[0.20] rounded-2xl p-4 max-w-[268px]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={13} className="text-[#93c5fd]" strokeWidth={2} />
                  <span className="text-[13px] font-semibold text-white">Ask Nova™</span>
                  <span className="ml-auto inline-flex items-center gap-1 bg-green-500/20 text-green-400 rounded-full px-2 py-0.5 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Live
                  </span>
                  <button
                    onClick={() => setAskNovaVisible(false)}
                    className="ml-1.5 text-white/35 hover:text-white/70 transition-colors"
                    aria-label="Dismiss"
                  >
                    <X size={13} />
                  </button>
                </div>
                <p className="text-[12px] text-white/55 leading-relaxed">
                  Natural language queries across your entire school. Zero training needed.
                </p>
              </div>
            )}

            {/* SCROLL indicator */}
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
