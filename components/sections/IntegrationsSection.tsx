"use client";

import { useState } from "react";
import {
  CreditCard, Users, MessageSquare, Briefcase,
  Monitor, BarChart3, Fingerprint, type LucideIcon,
} from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";

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
      <JourneyBackground tone="light" nodes={[
        { icon: "Zap",          x: 5,  y: 30, delay: 0   },
        { icon: "GitBranch",    x: 28, y: 72, delay: 150 },
        { icon: "Package",      x: 52, y: 18, delay: 300 },
        { icon: "ArrowRight",   x: 76, y: 65, delay: 450 },
        { icon: "CheckCircle2", x: 94, y: 35, delay: 600 },
      ]} paths={[
        "M 5,30 C 14,48 21,62 28,72",
        "M 28,72 C 38,52 45,30 52,18",
        "M 52,18 C 62,36 70,54 76,65",
        "M 76,65 C 83,52 89,42 94,35",
      ]} />

      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <AnimateIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">
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
                      ? "bg-[#0b0f1a] text-white border-[#0b0f1a] shadow-md"
                      : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:text-neutral-700"
                  }`}
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
