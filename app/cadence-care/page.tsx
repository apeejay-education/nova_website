"use client";

import { useState } from "react";
import { PageLayout, PageHero } from "@/components/ui/PageLayout";
import { CADENCE_CARE_SECTION, CARE_TIERS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/forms/BookDemoModal";
import { Check, X, Shield, Users, Wrench, CalendarCheck } from "lucide-react";

const WSUYD_POINTS = [
  {
    icon: Users,
    title: "Staff training on-site",
    desc: "We don't hand over a manual. Our team trains every staff member who will use Nova — admin, teachers, hostel staff, transport coordinators.",
  },
  {
    icon: Shield,
    title: "Data migration included",
    desc: "Existing student records, fee histories, attendance data — migrated into Nova. No extra charge, no data loss.",
  },
  {
    icon: Wrench,
    title: "Configuration for your school",
    desc: "Nova is configured to your school's specific fee structure, academic calendar, and workflows before go-live.",
  },
  {
    icon: CalendarCheck,
    title: "We stay until you're confident",
    desc: "Not just go-live day. Our team stays — remotely and on-site — until every department is running on Nova independently.",
  },
];

export default function CadenceCarePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Cadence Care"
        headline={CADENCE_CARE_SECTION.headline}
        sub={CADENCE_CARE_SECTION.sub}
      />

      {/* WSUYD section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-nova-indigo">
              Nova Lounge: We Stay Until You&apos;re Done.
            </h2>
            <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
              {CADENCE_CARE_SECTION.novaLounge.copy}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {WSUYD_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-nova-frost border border-divider rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-white border border-divider flex items-center justify-center mb-4">
                    <Icon size={20} className="text-nova-blue" />
                  </div>
                  <h3 className="font-bold text-nova-indigo mb-1.5">{point.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Tier comparison */}
          <h2 className="text-2xl font-bold text-nova-indigo text-center mb-8">Choose your Care tier.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {CARE_TIERS.map((tier) => {
              const highlighted = "highlighted" in tier && tier.highlighted;
              return (
                <div
                  key={tier.name}
                  className={`rounded-2xl border-2 p-8 ${highlighted ? "border-nova-blue shadow-[0_4px_32px_rgba(37,99,235,0.12)] bg-white" : "border-divider bg-white"}`}
                >
                  {highlighted && (
                    <span className="inline-block bg-nova-blue text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-nova-indigo mb-1">{tier.name}</h3>
                  <p className="text-nova-blue font-semibold text-sm mb-6">{tier.premium} on base subscription</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => {
                      const included = "included" in feature ? feature.included : true;
                      return (
                        <li key={feature.label} className="flex items-start gap-3">
                          {included
                            ? <Check size={18} className="text-success shrink-0 mt-0.5" strokeWidth={2.5} />
                            : <X size={18} className="text-[#D1D5DB] shrink-0 mt-0.5" strokeWidth={2.5} />
                          }
                          <span className={`text-sm ${!included ? "text-text-secondary" : "text-text-primary"}`}>
                            {"value" in feature
                              ? <><span className="font-medium">{feature.label}:</span> {feature.value}</>
                              : feature.label
                            }
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-xs text-text-secondary italic">Ask about Care pricing in your demo.</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </PageLayout>
  );
}
