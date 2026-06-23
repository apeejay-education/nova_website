"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, BarChart2, GraduationCap, DollarSign,
  ChevronRight, Sparkles, Clock, Lock,
  CheckCircle2, ArrowRight, Loader2,
} from "lucide-react";

const MODULES = [
  {
    icon: Globe,
    name: "CAIE Centre Administration Export",
    tag: "Cambridge-Native",
    description: "Candidate registrations in Cambridge Centre Administration format, per subject and CAIE syllabus code. Absent candidate management, special consideration requests. Your Centre Number tracked per student.",
    compliance: "CAIE Centre Admin · Cambridge Centre Number",
  },
  {
    icon: BarChart2,
    name: "A*–G Grading Engine",
    tag: "Legacy & New Syllabi",
    description: "Full A*–G grade entry and display alongside 1–9 for updated CAIE syllabi. Per-subject coursework component percentage configuration. Oral assessment and practical marking built in.",
    compliance: "CAIE IGCSE Regulations · AS & A Level",
  },
  {
    icon: GraduationCap,
    name: "Predicted Grades",
    tag: "University Applications",
    description: "Predicted grade entry alongside current grades per student. UCAS/Common App data export support. University counsellors and Principals see every student's application trajectory in one dashboard.",
    compliance: "UCAS / Common App · Cambridge A Level",
  },
  {
    icon: DollarSign,
    name: "Multi-Currency Fee Ledger",
    tag: "INR + GBP / USD",
    description: "Collect INR school tuition fees and GBP/USD CAIE examination fees in the same ledger. Per-student, per-subject CAIE exam entry fee tracking. Separate CAIE fee invoices generated automatically.",
    compliance: "CAIE Exam Entry Fees · Multi-currency",
  },
];

const BLOBS = [
  { color: "rgba(8,145,178,0.22)",  w: 500, h: 460, top: "-10%", left: "22%",  dur: 30, x: [0, -20, 16, 0], y: [0, 18, -14, 0] },
  { color: "rgba(6,78,59,0.16)",    w: 360, h: 320, top: "48%",  left: "-6%",  dur: 26, x: [0, 16, -10, 0], y: [0, -14, 20, 0] },
  { color: "rgba(103,232,249,0.08)",w: 280, h: 260, top: "28%",  left: "72%",  dur: 23, x: [0, -8, 18, 0],  y: [0, 12, -8, 0] },
];

const TEAL = "#0891B2";
const TEAL_LIGHT = "#67E8F9";

export default function IgcsePageClient() {
  const [formData, setFormData] = useState({ name: "", email: "", school: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.school) return;
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ background: "#00090c" }}>
        {BLOBS.map((b, i) => (
          <motion.div key={i} className="absolute pointer-events-none"
            style={{ width: b.w, height: b.h, top: b.top, left: b.left, borderRadius: "50%",
              background: b.color, filter: "blur(80px)" }}
            animate={{ x: b.x, y: b.y }}
            transition={{ duration: b.dur, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

          {/* Coming Soon badge */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
            style={{ background: "rgba(8,145,178,0.12)", borderColor: "rgba(8,145,178,0.35)" }}>
            <Clock className="w-3.5 h-3.5" style={{ color: TEAL_LIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: TEAL_LIGHT }}>
              Coming Soon — Cambridge IGCSE Schools
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Cambridge Centre{" "}
            <span style={{
              background: `linear-gradient(135deg, ${TEAL}, ${TEAL_LIGHT})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Administration.</span>
            <br />Simplified.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">
            CAIE export, A*–G grading, predicted grades, and multi-currency fees — Nova is being
            built natively for Cambridge International schools and IGCSE Centres in India.
          </motion.p>

          {/* Breadcrumb links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex items-center gap-4 text-sm text-white/40">
            <span>On CBSE or ICSE?</span>
            <Link href="/solutions/cbse" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              CBSE Schools <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/solutions/icse" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              ICSE Schools <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── COMING SOON OVERVIEW SECTION ── */}
      <div style={{ background: "#f7fafa" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase"
              style={{ background: "rgba(8,145,178,0.06)", borderColor: "rgba(8,145,178,0.25)", color: TEAL }}>
              <Lock className="w-3 h-3" />
              Preview — In Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E3A8A" }}>
              An ERP that speaks Cambridge
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              Cambridge schools aren't CBSE schools. Nova handles A*–G grading, CAIE syllabus codes,
              multi-currency exam fees, and international student records — natively.
            </p>
          </div>

          {/* Module cards — Coming Soon treatment */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl border p-7 overflow-hidden"
                  style={{ background: "white", borderColor: "#e5e7eb" }}>

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: "rgba(255,255,255,0.55)" }} />

                  {/* Coming Soon chip */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(8,145,178,0.10)", color: TEAL }}>
                    <Clock className="w-3 h-3" />
                    Coming Soon
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(8,145,178,0.10)" }}>
                        <Icon className="w-5 h-5" style={{ color: TEAL }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: TEAL }}>
                          {mod.tag}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{mod.name}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4 blur-[0.3px]">{mod.description}</p>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Sparkles className="w-3 h-3" />
                      <span>{mod.compliance}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cambridge Compliance Strip (grayed) */}
          <div className="rounded-2xl border p-8 mb-16 relative overflow-hidden opacity-60"
            style={{ borderColor: "rgba(8,145,178,0.2)", background: "rgba(207,250,254,0.35)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(255,255,255,0.4)" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4" style={{ color: TEAL }} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: TEAL }}>Cambridge Compliance Checklist — Coming Soon</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "CAIE Centre Administration export",
                  "Subject syllabus code configuration",
                  "A*–G and 1–9 grading engine",
                  "Per-subject coursework % config",
                  "Predicted grades (UCAS / Common App)",
                  "CAIE exam fee per student per subject",
                  "Multi-currency ledger (INR + GBP/USD)",
                  "International TC format",
                  "Passport + nationality SIS fields",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── EXPRESS INTEREST FORM ── */}
      <div className="py-20" style={{ background: "#00090c" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(8,145,178,0.12)", borderColor: "rgba(8,145,178,0.3)", color: TEAL_LIGHT }}>
              <Sparkles className="w-3.5 h-3.5" />
              Be First to Know
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cambridge schools deserve{" "}
              <span style={{
                background: `linear-gradient(135deg, ${TEAL}, ${TEAL_LIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>better tools.</span>
            </h2>
            <p className="text-white/50 mb-10 text-base">
              Express interest and we'll reach out when Nova for Cambridge IGCSE is ready — plus early-adopter pricing.
            </p>

            {status === "sent" ? (
              <div className="rounded-2xl border p-10 text-center"
                style={{ background: "rgba(8,145,178,0.08)", borderColor: "rgba(8,145,178,0.25)" }}>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: TEAL_LIGHT }} />
                <h3 className="text-xl font-bold text-white mb-2">You're on the list.</h3>
                <p className="text-white/50 text-sm">We'll be in touch when Nova for Cambridge IGCSE Schools launches.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-2xl border p-8 text-left"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>

                {/* Honeypot */}
                <input name="website" type="text" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="Mr. Arjun Sharma"
                      className="w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)" }}
                      onFocus={e => e.currentTarget.style.borderColor = TEAL}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">School Email</label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="principal@cambridgeschool.edu"
                      className="w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)" }}
                      onFocus={e => e.currentTarget.style.borderColor = TEAL}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">School Name</label>
                    <input
                      type="text" name="school" required value={formData.school} onChange={handleChange}
                      placeholder="Presidency School, Bangalore"
                      className="w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)" }}
                      onFocus={e => e.currentTarget.style.borderColor = TEAL}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={{ background: `linear-gradient(135deg, ${TEAL}, #0369A1)`, color: "white" }}>
                  {status === "sending"
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    : <><span>Express Interest</span><ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── PRICING ANCHOR ── */}
      <div className="py-16 text-center" style={{ background: "#f7fafa" }}>
        <p className="text-sm text-gray-400 mb-3">When Nova for Cambridge launches</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-base text-gray-400 line-through">$1 USD / student / month</span>
          <span className="text-3xl font-bold" style={{ color: "#1E3A8A" }}>₹35 / student / month</span>
        </div>
        <p className="text-xs text-gray-400 mb-8">Introductory launch pricing · All 8 modules included</p>
        <Link href="/book-demo"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "#1E3A8A" }}>
          On CBSE or ICSE now? Book a Demo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
