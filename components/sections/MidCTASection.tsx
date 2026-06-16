"use client";

import { ChevronRight } from "lucide-react";
import { MID_CTA_SECTION } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

interface MidCTASectionProps {
  onBookDemo: () => void;
}

export default function MidCTASection({ onBookDemo }: MidCTASectionProps) {
  return (
    <section className="bg-[#f5f2ee] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateIn>
          <h2
            className="text-[32px] lg:text-[40px] font-medium tracking-tight text-[#111827] leading-tight"
          >
            {MID_CTA_SECTION.headline}
            <br />
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {MID_CTA_SECTION.headlineLine2}
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-xl mx-auto">
            {MID_CTA_SECTION.sub}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-7 pr-2 py-2.5 hover:bg-[#1f2937] transition-colors"
              style={{ fontSize: 15 }}
            >
              {MID_CTA_SECTION.cta}
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={14} strokeWidth={2.5} />
              </span>
            </button>
            <p className="text-neutral-400 text-sm">
              or call us at{" "}
              <a href={`tel:${MID_CTA_SECTION.phone}`} className="text-[#111827] underline underline-offset-2">
                {MID_CTA_SECTION.phone}
              </a>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
