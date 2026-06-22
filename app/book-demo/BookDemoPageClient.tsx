"use client";

import { motion } from "framer-motion";
import BookDemoForm from "@/components/forms/BookDemoForm";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const MODULES = [
  "SIS", "Fees", "Attendance", "Transport",
  "Hostel", "Library", "LMS", "Communication",
];

const AI_FEATURES = [
  { label: "Ask Nova", status: "Live" },
  { label: "Tell Nova", status: "Soon" },
  { label: "Nova Command ⌘K", status: "Live" },
];

const STEPS = [
  {
    n: "01",
    title: "Book your slot",
    body: "Pick a 30-minute window that works for you. We'll send a calendar invite instantly.",
  },
  {
    n: "02",
    title: "See Nova live",
    body: "Our product team walks through modules tailored to your school's size and structure.",
  },
  {
    n: "03",
    title: "Get your quote",
    body: "We price based on your exact student count. Starts at ₹35/student/month.",
  },
];

const BLOBS = [
  {
    color: "rgba(37,99,235,0.30)",
    width: 520,
    height: 480,
    top: "-15%",
    left: "-12%",
    duration: 26,
    x: [0, 30, -20, 0],
    y: [0, -25, 18, 0],
  },
  {
    color: "rgba(124,58,237,0.22)",
    width: 460,
    height: 420,
    top: "30%",
    left: "20%",
    duration: 34,
    x: [0, -35, 20, 0],
    y: [0, 20, -30, 0],
  },
  {
    color: "rgba(79,70,229,0.18)",
    width: 380,
    height: 360,
    top: "55%",
    left: "-8%",
    duration: 28,
    x: [0, 20, -15, 0],
    y: [0, 30, -10, 0],
  },
];

export default function BookDemoPageClient() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ── LEFT PANEL ───────────────────────────────────────────── */}
      <div
        className="relative flex-1 lg:max-w-[52%] overflow-hidden flex flex-col justify-center px-10 py-24 lg:py-32"
        style={{ background: "#0b0f1a" }}
      >
        {/* Animated gradient mesh blobs */}
        {BLOBS.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: blob.width,
              height: blob.height,
              top: blob.top,
              left: blob.left,
              background: `radial-gradient(ellipse at center, ${blob.color} 0%, transparent 70%)`,
              filter: "blur(72px)",
            }}
            animate={{ x: blob.x, y: blob.y }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Star-field speckles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[
            { t: "12%", l: "18%", s: 1.5, o: 0.45 },
            { t: "28%", l: "72%", s: 1, o: 0.30 },
            { t: "45%", l: "35%", s: 2, o: 0.35 },
            { t: "62%", l: "82%", s: 1.5, o: 0.40 },
            { t: "78%", l: "15%", s: 1, o: 0.25 },
            { t: "88%", l: "60%", s: 2, o: 0.38 },
            { t: "18%", l: "55%", s: 1.5, o: 0.28 },
            { t: "55%", l: "90%", s: 1, o: 0.22 },
          ].map((s, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                top: s.t, left: s.l,
                width: s.s, height: s.s,
                background: i % 2 === 0 ? "#93C5FD" : "#C4B5FD",
                opacity: s.o,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{
              background: "rgba(37,99,235,0.10)",
              border: "1px solid rgba(37,99,235,0.28)",
            }}
          >
            <Sparkles size={11} style={{ color: "#93C5FD" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Book a Demo
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 600, letterSpacing: "-0.025em" }}
          >
            See{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nova
            </span>{" "}
            live,<br />
            built for your school.
          </h1>
          <p className="text-white/50 text-[15px] leading-relaxed mb-10">
            A 30-minute walkthrough tailored to your school's size, structure, and priorities.
            No commitment required.
          </p>

          {/* Module chips */}
          <div className="mb-3">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-3">
              8 modules · all included
            </p>
            <div className="flex flex-wrap gap-2">
              {MODULES.map(mod => (
                <span
                  key={mod}
                  className="rounded-full px-3 py-1.5 text-[11px] font-medium"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>

          {/* AI feature chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {AI_FEATURES.map(f => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium"
                style={{
                  background: "rgba(37,99,235,0.10)",
                  border: "1px solid rgba(37,99,235,0.28)",
                  color: "#93C5FD",
                }}
              >
                <Zap size={9} />
                {f.label}
                <span
                  className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold leading-none"
                  style={{
                    background: f.status === "Live"
                      ? "rgba(22,163,74,0.20)"
                      : "rgba(245,158,11,0.20)",
                    color: f.status === "Live" ? "#4ADE80" : "#FCD34D",
                    border: `1px solid ${f.status === "Live" ? "rgba(74,222,128,0.30)" : "rgba(252,211,77,0.30)"}`,
                  }}
                >
                  {f.status}
                </span>
              </span>
            ))}
          </div>

          {/* 3-step process */}
          <div className="space-y-5 mb-10">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex gap-4 items-start">
                <div
                  className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-bold"
                  style={{
                    background: "rgba(37,99,235,0.14)",
                    border: "1px solid rgba(37,99,235,0.30)",
                    color: "#93C5FD",
                  }}
                >
                  {step.n}
                </div>
                <div className="pt-1">
                  <p className="text-white text-[13px] font-semibold leading-tight mb-0.5">{step.title}</p>
                  <p className="text-white/45 text-[12px] leading-relaxed">{step.body}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <ArrowRight size={12} className="shrink-0 mt-3 text-white/15" />
                )}
              </div>
            ))}
          </div>

          {/* Nova Lounge card */}
          <div
            className="rounded-2xl px-5 py-4"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.25)",
              boxShadow: "0 0 32px rgba(37,99,235,0.10)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-[11px] font-bold tracking-wide uppercase"
                style={{
                  background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nova Lounge
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                style={{ background: "rgba(22,163,74,0.18)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.25)" }}
              >
                WSUYD
              </span>
            </div>
            <p className="text-white/55 text-[12px] leading-relaxed">
              We Stay Until You&apos;re Done. Our team remains on-site and remotely until
              your school is fully live — not just go-live day.
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ──────────────────────────────────────────── */}
      <div
        className="flex-1 flex items-center justify-center px-6 py-16 lg:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0d1530 0%, #1a0f3d 45%, #0b1020 100%)",
        }}
      >
        {/* Subtle right-panel glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 60% 35%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Frosted glass card */}
        <div
          className="relative z-10 w-full max-w-md rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 0 0 1px rgba(124,58,237,0.08), 0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Card header */}
          <div className="mb-6">
            <h2
              className="text-white leading-tight mb-1.5"
              style={{ fontSize: "clamp(20px, 2vw, 24px)", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Book your demo
            </h2>
            <p className="text-white/40 text-[13px]">
              No commitment required. We&apos;ll confirm within 4 hours.
            </p>
          </div>

          {/* The form */}
          <BookDemoForm />
        </div>
      </div>

    </div>
  );
}
