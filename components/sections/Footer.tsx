"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PRE_FOOTER, FOOTER_COLUMNS, FOOTER_COPY_RIGHT } from "@/lib/constants";

interface FooterProps {
  onBookDemo: () => void;
}

export default function Footer({ onBookDemo }: FooterProps) {
  return (
    <>
      {/* Pre-footer strip */}
      <div className="bg-white border-t border-neutral-200 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[28px] lg:text-[36px] font-medium tracking-tight text-[#111827]">
            {PRE_FOOTER.headline}
          </h2>
          <p className="mt-3 text-neutral-500 text-base">
            {PRE_FOOTER.sub}{" "}
            <span className="font-semibold text-[#111827]">{PRE_FOOTER.pricingNote}</span>
          </p>
          <div className="mt-7 flex flex-col items-center gap-3">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-7 pr-2 py-2.5 hover:bg-[#1f2937] transition-colors"
              style={{ fontSize: 15 }}
            >
              {PRE_FOOTER.cta}
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={14} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-[#0b0f1a] text-white px-6 pt-14 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Wordmark */}
          <div className="mb-10">
            <Link href="/" className="flex items-baseline gap-0.5 w-fit">
              <span className="text-white/60 font-light text-xl tracking-tight">Cadence</span>
              <span className="text-white font-bold text-xl tracking-tight">Nova</span>
            </Link>
            <p className="mt-2 text-[#4B5563] text-sm max-w-xs">
              AI-powered school management. Built for India.
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-white/80 font-medium text-sm mb-4">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#6B7280] text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#4B5563] text-xs">{FOOTER_COPY_RIGHT}</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-[#4B5563] text-xs hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#374151]">·</span>
              <Link href="#" className="text-[#4B5563] text-xs hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
