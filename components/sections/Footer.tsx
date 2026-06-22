"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FOOTER_COLUMNS, FOOTER_COPY_RIGHT } from "@/lib/constants";

function ExpressInterestForm() {
  const [name,   setName]   = useState("");
  const [email,  setEmail]  = useState("");
  const [school, setSchool] = useState("");
  const [sent,   setSent]   = useState(false);
  const [busy,   setBusy]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !school.trim()) return;
    setBusy(true);
    await new Promise(r => setTimeout(r, 800));
    setBusy(false);
    setSent(true);
  }

  const inputCls =
    "w-full rounded-xl px-4 py-3 text-[13px] text-[#0f172a] placeholder:text-neutral-400 outline-none transition-all duration-200 bg-white border border-neutral-200 focus:border-[#2563EB]/50 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.10)]";

  return (
    <div className="bg-white border-t border-neutral-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
          style={{
            background: "rgba(37,99,235,0.07)",
            border: "1px solid rgba(37,99,235,0.18)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "linear-gradient(90deg, #2563EB, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Express Interest
          </span>
        </div>

        <h2
          className="text-[24px] lg:text-[30px] font-medium tracking-tight text-[#0f172a] leading-tight"
        >
          Want to know when Nova is available for your school?
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Leave your details — we&apos;ll reach out with pricing and availability.
        </p>

        {sent ? (
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium"
            style={{
              background: "rgba(22,163,74,0.08)",
              border: "1px solid rgba(22,163,74,0.25)",
              color: "#16a34a",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Got it! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className={inputCls}
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className={inputCls}
              />
              <input
                type="text"
                placeholder="School / Organization"
                value={school}
                onChange={e => setSchool(e.target.value)}
                required
                className={inputCls}
              />
              <button
                type="submit"
                disabled={busy}
                className="shrink-0 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
                style={{
                  background: busy
                    ? "rgba(37,99,235,0.5)"
                    : "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                  boxShadow: busy ? "none" : "0 0 20px rgba(37,99,235,0.30)",
                }}
              >
                {busy ? (
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    Send
                    <ChevronRight size={13} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

interface FooterProps {
  onBookDemo: () => void;
}

export default function Footer({ onBookDemo }: FooterProps) {
  return (
    <>
      <ExpressInterestForm />

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
