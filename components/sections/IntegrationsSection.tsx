"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard, Users, MessageSquare, Briefcase,
  Monitor, BarChart3, Fingerprint, type LucideIcon,
} from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const TOKEN = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN ?? "";

interface Integration {
  name: string;
  domain: string;
}

interface Category {
  label:        string;
  icon:         LucideIcon;
  integrations: Integration[];
}

const CATEGORIES: Category[] = [
  {
    label: "Payments",
    icon:  CreditCard,
    integrations: [
      { name: "Razorpay", domain: "razorpay.com"  },
      { name: "PayU",     domain: "payu.in"        },
      { name: "Paytm",    domain: "paytm.com"      },
      { name: "CCAvenue", domain: "ccavenue.com"   },
      { name: "Easebuzz", domain: "easebuzz.io"    },
      { name: "PhonePe",  domain: "phonepe.com"    },
    ],
  },
  {
    label: "CRM & Admissions",
    icon:  Users,
    integrations: [
      { name: "LeadSquared", domain: "leadsquared.com" },
      { name: "Meritto",     domain: "meritto.com"     },
      { name: "Zoho CRM",    domain: "zoho.com"        },
    ],
  },
  {
    label: "Communication",
    icon:  MessageSquare,
    integrations: [
      { name: "WATI",    domain: "wati.io"    },
      { name: "Interakt",domain: "interakt.co"},
      { name: "MSG91",   domain: "msg91.com"  },
      { name: "Twilio",  domain: "twilio.com" },
      { name: "Brevo",   domain: "brevo.com"  },
    ],
  },
  {
    label: "HRMS & Payroll",
    icon:  Briefcase,
    integrations: [
      { name: "Frappe HRMS", domain: "frappe.io"     },
      { name: "Keka",        domain: "keka.com"       },
      { name: "GreytHR",     domain: "greythr.com"    },
      { name: "Darwinbox",   domain: "darwinbox.com"  },
      { name: "Zoho People", domain: "zoho.com"       },
    ],
  },
  {
    label: "Collaboration",
    icon:  Monitor,
    integrations: [
      { name: "Google Workspace", domain: "workspace.google.com" },
      { name: "Microsoft Teams",  domain: "microsoft.com"        },
      { name: "Zoom",             domain: "zoom.us"              },
      { name: "Moodle",           domain: "moodle.org"           },
    ],
  },
  {
    label: "Accounting",
    icon:  BarChart3,
    integrations: [
      { name: "Tally",      domain: "tallysolutions.com"    },
      { name: "Zoho Books", domain: "zoho.com"              },
      { name: "QuickBooks", domain: "quickbooks.intuit.com" },
    ],
  },
  {
    label: "Biometrics",
    icon:  Fingerprint,
    integrations: [
      { name: "ZKTeco",    domain: "zkteco.com"    },
      { name: "eSSL",      domain: "essl.co.in"   },
      { name: "Hikvision", domain: "hikvision.com" },
    ],
  },
];

const TOTAL = CATEGORIES.reduce((n, c) => n + c.integrations.length, 0);

// ─── Radar background ─────────────────────────────────────────────────────────

const CX = 720, CY = 380;

// Integer coordinates — avoids any floating-point divergence between Node and browser
const RADIAL_LINES = [
  { x2: 1620, y2:  380, stroke: "rgba(37,99,235,0.022)"  }, //   0°
  { x2: 1499, y2:  830, stroke: "rgba(124,58,237,0.018)" }, //  30°
  { x2: 1170, y2: 1159, stroke: "rgba(37,99,235,0.022)"  }, //  60°
  { x2:  720, y2: 1280, stroke: "rgba(124,58,237,0.018)" }, //  90°
  { x2:  270, y2: 1159, stroke: "rgba(37,99,235,0.022)"  }, // 120°
  { x2:  -59, y2:  830, stroke: "rgba(124,58,237,0.018)" }, // 150°
  { x2: -180, y2:  380, stroke: "rgba(37,99,235,0.022)"  }, // 180°
  { x2:  -59, y2:  -70, stroke: "rgba(124,58,237,0.018)" }, // 210°
  { x2:  270, y2: -399, stroke: "rgba(37,99,235,0.022)"  }, // 240°
  { x2:  720, y2: -520, stroke: "rgba(124,58,237,0.018)" }, // 270°
  { x2: 1170, y2: -399, stroke: "rgba(37,99,235,0.022)"  }, // 300°
  { x2: 1499, y2:  -70, stroke: "rgba(124,58,237,0.018)" }, // 330°
];

const INTERSECTION_NODES = [
  // 0° (right)
  { cx: 920, cy: 380, fill: "rgba(37,99,235,0.10)",  key: "0-0" },
  { cx: 1060, cy: 380, fill: "rgba(124,58,237,0.08)", key: "0-1" },
  { cx: 1200, cy: 380, fill: "rgba(37,99,235,0.10)",  key: "0-2" },
  // 90° (bottom)
  { cx: 720, cy: 580, fill: "rgba(124,58,237,0.08)", key: "1-0" },
  { cx: 720, cy: 720, fill: "rgba(37,99,235,0.10)",  key: "1-1" },
  { cx: 720, cy: 860, fill: "rgba(124,58,237,0.08)", key: "1-2" },
  // 180° (left)
  { cx: 520, cy: 380, fill: "rgba(37,99,235,0.10)",  key: "2-0" },
  { cx: 380, cy: 380, fill: "rgba(124,58,237,0.08)", key: "2-1" },
  { cx: 240, cy: 380, fill: "rgba(37,99,235,0.10)",  key: "2-2" },
  // 270° (top)
  { cx: 720, cy: 180, fill: "rgba(124,58,237,0.08)", key: "3-0" },
  { cx: 720, cy:  40, fill: "rgba(37,99,235,0.10)",  key: "3-1" },
  { cx: 720, cy: -100, fill: "rgba(124,58,237,0.08)", key: "3-2" },
];

const PULSE_RINGS = [
  { delay: 0,    color: "rgba(37,99,235,0.22)"  },
  { delay: 1.12, color: "rgba(124,58,237,0.18)" },
  { delay: 2.24, color: "rgba(37,99,235,0.16)"  },
  { delay: 3.36, color: "rgba(124,58,237,0.14)" },
];

function RadarBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* Central radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 640, height: 640,
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.025) 0%, rgba(124,58,237,0.012) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Central content shield — white vignette that keeps text zone clean */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900, height: 900,
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 22%, rgba(255,255,255,0.70) 42%, rgba(255,255,255,0) 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Static rings + radial lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Radial dotted lines */}
        {RADIAL_LINES.map(({ x2, y2, stroke }, i) => (
          <line
            key={i}
            x1={CX} y1={CY}
            x2={x2} y2={y2}
            stroke={stroke}
            strokeWidth="1"
            strokeDasharray="3 13"
          />
        ))}

        {/* Static depth rings */}
        <circle cx={CX} cy={CY} r="200" stroke="rgba(37,99,235,0.035)"  strokeWidth="1" />
        <circle cx={CX} cy={CY} r="340" stroke="rgba(124,58,237,0.025)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r="480" stroke="rgba(37,99,235,0.018)"  strokeWidth="1" />
        <circle cx={CX} cy={CY} r="620" stroke="rgba(124,58,237,0.012)" strokeWidth="1" />

        {/* Intersection nodes — ring × line dots */}
        {INTERSECTION_NODES.map(({ cx, cy, fill, key }) => (
          <circle key={key} cx={cx} cy={cy} r="2.5" fill={fill} />
        ))}
      </svg>

      {/* Pulsing rings */}
      {PULSE_RINGS.map(({ delay, color }, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 130, height: 130, border: `1.5px solid ${color}` }}
          animate={{ scale: [1, 5.5], opacity: [0, 0.28, 0] }}
          transition={{ duration: 7, delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

// ─── Logo card ────────────────────────────────────────────────────────────────

function LogoCard({ name, domain }: Integration) {
  const [errored, setErrored] = useState(false);
  const src = `https://img.logo.dev/${domain}?token=${TOKEN}&size=128&format=png`;

  return (
    <div className="group w-36 flex flex-col items-center gap-3 bg-white border border-neutral-200 rounded-2xl p-5 hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-200 cursor-default">
      <div className="w-12 h-12 flex items-center justify-center">
        {errored ? (
          <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
            <span className="text-lg font-bold text-neutral-400">{name[0]}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <span className="text-[13px] font-medium text-neutral-600 text-center leading-tight group-hover:text-[#111827] transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function IntegrationsSection() {
  const [active,    setActive]    = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [fading,    setFading]    = useState(false);

  function handleSelect(i: number) {
    if (i === active || fading) return;
    setFading(true);
    setTimeout(() => {
      setDisplayed(i);
      setActive(i);
      setFading(false);
    }, 180);
  }

  const current = CATEGORIES[displayed];

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <RadarBackground />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <AnimateIn className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.20)",
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
              Integrations
            </span>
          </div>
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
            Nova connects with the tools{" "}
            <br className="hidden sm:block" />
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                fontStyle:  "italic",
                fontWeight: 400,
              }}
            >
              your school already uses.
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-xl mx-auto">
            {TOTAL}+ API-based integrations across {CATEGORIES.length} categories.
            No switching costs, no rip-and-replace.
          </p>
        </AnimateIn>

        {/* ── Category tabs ── */}
        <AnimateIn delay={0.08}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((cat, i) => {
              const Icon     = cat.icon;
              const isActive = i === active;
              return (
                <button
                  key={cat.label}
                  onClick={() => handleSelect(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "text-white border-transparent shadow-md"
                      : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:text-neutral-700"
                  }`}
                  style={isActive ? { background: "linear-gradient(135deg, #1d4ed8, #6d28d9)" } : undefined}
                >
                  <Icon
                    size={14}
                    className={isActive ? "text-white" : "text-[#2563EB]"}
                  />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimateIn>

        {/* ── Logo grid ── */}
        <AnimateIn delay={0.12}>
          <div
            style={{
              opacity:    fading ? 0 : 1,
              transform:  fading ? "translateY(6px)" : "translateY(0)",
              transition: "opacity 180ms ease-out, transform 180ms ease-out",
            }}
          >
            {/* Active category label */}
            <div className="flex items-center gap-2.5 mb-5">
              {(() => {
                const Icon = current.icon;
                return (
                  <div className="w-7 h-7 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#2563EB]" />
                  </div>
                );
              })()}
              <span className="text-[13px] font-semibold text-[#111827]">{current.label}</span>
              <span className="text-[11px] text-neutral-400 font-medium">
                {current.integrations.length} integration{current.integrations.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-3">
              {current.integrations.map((integration) => (
                <LogoCard key={integration.name} {...integration} />
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* ── Footer note ── */}
        <AnimateIn delay={0.18} className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            Don&apos;t see a tool you use?{" "}
            <a
              href="/book-demo"
              className="text-[#2563EB] underline underline-offset-2 hover:text-[#1d4ed8] transition-colors"
            >
              Talk to us — we can integrate it.
            </a>
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
