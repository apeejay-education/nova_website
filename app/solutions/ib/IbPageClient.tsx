"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass, BarChart3, GraduationCap, BookOpen,
  ChevronRight, Sparkles, Clock, Lock,
  CheckCircle2, ArrowRight, Loader2,
} from "lucide-react";

const MODULES = [
  {
    icon: Compass,
    name: "CAS Tracker",
    tag: "The Coordinator's Relief",
    description: "Log Creativity, Activity, and Service experiences per student. Completion dashboards, reflection entries, and automated advisor alerts — the single most painful IB admin task, solved.",
    compliance: "IB DP Core · CAS Framework",
  },
  {
    icon: BarChart3,
    name: "IA Pipeline",
    tag: "Draft → Submitted",
    description: "Track every Internal Assessment from first draft to IBIS submission. Per-subject IA completion status across all DP1 and DP2 students. Six-week-out risk alerts.",
    compliance: "IBO Internal Assessment · IBIS Export",
  },
  {
    icon: GraduationCap,
    name: "Predicted Grade Dashboard",
    tag: "Max 45 at a Glance",
    description: "Enter predicted grades (1–7) per subject per student. Diploma total calculated automatically — including TOK/EE bonus points matrix. University counsellors and Principals in one view.",
    compliance: "IB DP Scoring · TOK/EE Bonus Points",
  },
  {
    icon: BookOpen,
    name: "Extended Essay",
    tag: "Supervisor to IBIS",
    description: "Assign EE supervisors, track research questions, log draft submissions and feedback. EE predicted grade feeds directly into the diploma total. Built for EE Coordinators.",
    compliance: "IB DP Extended Essay · IBIS",
  },
];

const BLOBS = [
  { color: "rgba(217,119,6,0.22)",  w: 520, h: 480, top: "-12%", left: "18%",  dur: 32, x: [0, -22, 14, 0], y: [0, 20, -14, 0] },
  { color: "rgba(120,53,15,0.18)",  w: 360, h: 320, top: "50%",  left: "-8%",  dur: 27, x: [0, 18, -12, 0], y: [0, -16, 22, 0] },
  { color: "rgba(251,191,36,0.10)", w: 300, h: 280, top: "30%",  left: "70%",  dur: 22, x: [0, -10, 20, 0], y: [0, 14, -8, 0] },
];

const AMBER = "#D97706";
const AMBER_LIGHT = "#FCD34D";

export default function IbPageClient() {
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
      <div className="relative overflow-hidden" style={{ background: "#0c0a00" }}>
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
            style={{ background: "rgba(217,119,6,0.12)", borderColor: "rgba(217,119,6,0.35)" }}>
            <Clock className="w-3.5 h-3.5" style={{ color: AMBER_LIGHT }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: AMBER_LIGHT }}>
              Coming Soon — IB World Schools
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            IB's most complex{" "}
            <span style={{
              background: `linear-gradient(135deg, ${AMBER}, ${AMBER_LIGHT})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>workflows.</span>
            <br />Finally, an ERP that gets them.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">
            CAS tracker, IA pipeline, predicted diploma scores, EE supervision — built for IB Coordinators,
            not just school admins. Nova is coming to India's ~240 IB World Schools.
          </motion.p>

          {/* Breadcrumb links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex items-center gap-4 text-sm text-white/40">
            <span>Already on CBSE or ICSE?</span>
            <Link href="/solutions/cbse" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              CBSE Schools <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/solutions/icse" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              ICSE Schools <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── COMING SOON OVERLAY SECTION ── */}
      <div style={{ background: "#fafaf7" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase"
              style={{ background: "rgba(217,119,6,0.06)", borderColor: "rgba(217,119,6,0.25)", color: AMBER }}>
              <Lock className="w-3 h-3" />
              Preview — In Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E3A8A" }}>
              Built specifically for IB programmes
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              No generic school ERP handles IB's unique assessment architecture. Nova is designed from the ground up for DP, MYP, and PYP workflows.
            </p>
          </div>

          {/* Module cards — grayed out / Coming Soon treatment */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl border p-7 overflow-hidden"
                  style={{ background: "white", borderColor: "#e5e7eb" }}>

                  {/* Subtle Coming Soon overlay */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(0.5px)" }} />

                  {/* Coming Soon chip */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(217,119,6,0.10)", color: AMBER }}>
                    <Clock className="w-3 h-3" />
                    Coming Soon
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(217,119,6,0.10)" }}>
                        <Icon className="w-5 h-5" style={{ color: AMBER }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: AMBER }}>
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

          {/* IB Compliance Strip (grayed) */}
          <div className="rounded-2xl border p-8 mb-16 relative overflow-hidden opacity-60"
            style={{ borderColor: "rgba(217,119,6,0.2)", background: "rgba(254,243,199,0.4)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(0.5px)" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-4 h-4" style={{ color: AMBER }} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: AMBER }}>IB Compliance Checklist — Coming Soon</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "IBIS export (candidate data + IA marks)",
                  "CAS completion dashboard",
                  "Predicted diploma total (max 45)",
                  "TOK Exhibition + Essay tracking",
                  "EE supervisor assignment",
                  "Multi-currency (USD/CHF IBO fees)",
                  "MYP criteria assessment (A–D, 1–7)",
                  "PYP portfolio management",
                  "Mixed-programme students (IB + CBSE)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── EXPRESS INTEREST FORM ── */}
      <div className="py-20" style={{ background: "#0c0a00" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(217,119,6,0.12)", borderColor: "rgba(217,119,6,0.3)", color: AMBER_LIGHT }}>
              <Sparkles className="w-3.5 h-3.5" />
              Be First to Know
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your IB school deserves{" "}
              <span style={{
                background: `linear-gradient(135deg, ${AMBER}, ${AMBER_LIGHT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>a better ERP.</span>
            </h2>
            <p className="text-white/50 mb-10 text-base">
              Express interest and we'll reach out when Nova for IB is ready — plus early-adopter pricing.
            </p>

            {status === "sent" ? (
              <div className="rounded-2xl border p-10 text-center"
                style={{ background: "rgba(217,119,6,0.08)", borderColor: "rgba(217,119,6,0.25)" }}>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
                <h3 className="text-xl font-bold text-white mb-2">You're on the list.</h3>
                <p className="text-white/50 text-sm">We'll be in touch when Nova for IB World Schools launches.</p>
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
                      placeholder="Dr. Priya Mehta"
                      className="w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)",
                        outline: "none" }}
                      onFocus={e => e.currentTarget.style.borderColor = AMBER}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">School Email</label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="principal@ibschool.edu"
                      className="w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)" }}
                      onFocus={e => e.currentTarget.style.borderColor = AMBER}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">School Name</label>
                    <input
                      type="text" name="school" required value={formData.school} onChange={handleChange}
                      placeholder="The Heritage School, Gurgaon"
                      className="w-full px-4 py-3 rounded-xl border text-white text-sm placeholder-white/25 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)" }}
                      onFocus={e => e.currentTarget.style.borderColor = AMBER}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                    />
                  </div>
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={{ background: `linear-gradient(135deg, ${AMBER}, #B45309)`, color: "white" }}>
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
      <div className="py-16 text-center" style={{ background: "#fafaf7" }}>
        <p className="text-sm text-gray-400 mb-3">When Nova for IB launches</p>
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
