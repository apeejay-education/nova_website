"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Play, X } from "lucide-react";
import Wordmark from "@/components/ui/Wordmark";
import SeamlessVideo from "@/components/ui/SeamlessVideo";

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
      <div className="relative w-full h-screen overflow-hidden bg-[#0b0f1a]">

        {/* Background video */}
        <SeamlessVideo src="/assets/videos/hero-principal-loop.mp4" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/88" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-4 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-white/60 shrink-0" />
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                Cadence Nova
              </span>
            </div>

            {/* Bare headline */}
            <h1
              className="mt-10 text-white max-w-4xl"
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

            {/* Stat line — glassmorphism pill */}
            <div className="mt-10 bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] rounded-full px-6 py-2.5">
              <p className="text-white/70 text-[13px] tracking-widest uppercase">
                8 Modules&nbsp;&nbsp;·&nbsp;&nbsp;AI Queries&nbsp;&nbsp;·&nbsp;&nbsp;Hotkey Enabled
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex items-center gap-6">
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

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-1.5 pb-8 text-white/35">
            <span className="text-[10px] tracking-[0.15em] font-medium uppercase">Scroll</span>
            <ChevronDown size={14} strokeWidth={2} />
          </div>
        </div>
      </div>

      {videoModalOpen && <VideoModal onClose={() => setVideoModalOpen(false)} />}
    </>
  );
}
