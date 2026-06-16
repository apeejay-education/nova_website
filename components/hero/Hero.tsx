"use client";

import { ChevronRight } from "lucide-react";
import HeroNavbar from "./HeroNavbar";
import DashboardPreview from "./DashboardPreview";

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4">
      {/* Hero container — clips all children including dashboard overflow */}
      <div className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl flex flex-col">

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle white overlay */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Foreground — stacks vertically, fills container height */}
        <div className="relative z-10 flex flex-col h-full">

          {/* Pill navbar */}
          <HeroNavbar onBookDemo={onBookDemo} />

          {/* Hero content */}
          <div className="flex flex-col items-center px-4 pt-8 sm:pt-12 pb-6 sm:pb-8 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span className="text-[13px] font-medium text-[#111827]">Cadence Nova</span>
            </div>

            {/* Headline */}
            <h1
              className="mt-5 sm:mt-6 max-w-4xl"
              style={{
                fontSize: "clamp(34px, 7.5vw, 72px)",
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

            {/* Subtitle */}
            <p
              className="mt-4 sm:mt-5 text-neutral-700 px-2 max-w-2xl"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)" }}
            >
              The All-In-One School ERP Built for India — Fees, Transport, AI and 5 more modules, unified.
            </p>

            {/* CTA */}
            <button
              onClick={onBookDemo}
              className="mt-6 sm:mt-7 inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 hover:bg-[#1f2937] transition-colors"
              style={{ fontSize: 14 }}
            >
              Book a Demo
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={14} strokeWidth={2.5} />
              </span>
            </button>
          </div>

          {/* Dashboard — fills remaining height and bleeds off the bottom */}
          <DashboardPreview />

        </div>
      </div>
    </div>
  );
}
