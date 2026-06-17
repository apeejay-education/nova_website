"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Play, X } from "lucide-react";
import HeroNavbar from "./HeroNavbar";

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
      <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4">
        <div className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#0b0f1a] rounded-2xl sm:rounded-3xl flex flex-col">

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

          {/* Cinematic gradient overlay — heavier mid-section to protect typography */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />

          {/* Foreground */}
          <div className="relative z-10 flex flex-col h-full">

            <HeroNavbar onBookDemo={onBookDemo} />

            {/* Hero content */}
            <div className="flex flex-col items-center px-4 pt-6 sm:pt-8 pb-3 sm:pb-4 text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <span className="text-[13px] font-medium text-white">Cadence Nova</span>
              </div>

              {/* Headline — glassmorphism card */}
              <div className="mt-4 w-full max-w-3xl backdrop-blur-md bg-white/[0.07] border border-white/[0.12] rounded-2xl px-6 sm:px-10 py-4 sm:py-5">
                <h1
                  className="text-white"
                  style={{
                    fontSize: "clamp(32px, 7vw, 68px)",
                    lineHeight: 1.05,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
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
              </div>

              {/* Subtitle — branded Nova Blue translucent box */}
              <div className="mt-3 max-w-xl w-full backdrop-blur-sm bg-[#2563EB]/[0.18] border border-[#2563EB]/[0.32] rounded-xl px-5 py-2.5">
                <p
                  className="text-white/85"
                  style={{ fontSize: "clamp(13px, 3.2vw, 15px)" }}
                >
                  The All-In-One School ERP Built for India — Fees, Transport, AI and 5 more modules, unified.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-3 bg-white text-[#0b0f1a] rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 hover:bg-white/90 transition-colors"
                  style={{ fontSize: 14, fontWeight: 500 }}
                >
                  Book a Demo
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0b0f1a]/10 flex items-center justify-center">
                    <ChevronRight size={14} strokeWidth={2.5} />
                  </span>
                </button>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-5 py-2 sm:py-2.5 hover:bg-white/[0.18] transition-colors"
                  style={{ fontSize: 14 }}
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Play size={9} fill="white" strokeWidth={0} />
                  </span>
                  Play Exclusive Preview
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {videoModalOpen && <VideoModal onClose={() => setVideoModalOpen(false)} />}
    </>
  );
}
