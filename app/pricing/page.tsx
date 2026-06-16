"use client";

import { useState } from "react";
import { PageLayout, PageHero } from "@/components/ui/PageLayout";
import { PRICING_PAGE, CARE_TIERS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/forms/BookDemoModal";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Pricing"
        headline={PRICING_PAGE.headline}
        sub={PRICING_PAGE.sub}
      />

      {/* Price card */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex flex-col items-center bg-nova-frost border border-divider rounded-2xl px-12 py-10 mb-8">
            <p className="text-sm font-medium text-text-secondary mb-2">Starting at</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[56px] font-extrabold text-nova-indigo leading-none">{PRICING_PAGE.price}</span>
              <span className="text-xl font-medium text-text-secondary">{PRICING_PAGE.priceUnit}</span>
            </div>
            <p className="text-sm text-text-secondary mt-3">{PRICING_PAGE.minimumCommitment}</p>
          </div>

          <p className="text-success font-semibold mb-8">{PRICING_PAGE.trustLine}</p>

          <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
            {PRICING_PAGE.cta}
          </Button>
        </div>
      </section>

      {/* Included modules checklist */}
      <section className="bg-nova-frost py-16 px-6 border-t border-divider">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-nova-indigo text-center mb-8">
            Everything included in the base price.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRICING_PAGE.includedModules.map((mod) => (
              <div key={mod} className="flex items-center gap-3 bg-white rounded-xl border border-divider px-5 py-3.5">
                <Check size={18} className="text-success shrink-0" strokeWidth={2.5} />
                <span className="font-medium text-text-primary">{mod}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-text-secondary mt-6 font-medium">
            All 8 modules. One platform. No add-ons required.
          </p>

          <div className="text-center mt-4">
            <Link href="/appstore" className="inline-flex items-center gap-1.5 text-nova-blue font-medium hover:underline underline-offset-2 text-sm">
              {PRICING_PAGE.appStoreLink}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cadence Care upsell */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-nova-indigo">Need more? Add Cadence Care.</h2>
            <p className="mt-3 text-text-secondary">Our managed service layer for schools that want a dedicated partner.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CARE_TIERS.map((tier) => {
              const highlighted = "highlighted" in tier && tier.highlighted;
              return (
                <div
                  key={tier.name}
                  className={`rounded-2xl border-2 p-8 ${highlighted ? "border-nova-blue bg-nova-frost" : "border-divider bg-white"}`}
                >
                  <h3 className="text-lg font-bold text-nova-indigo mb-1">{tier.name}</h3>
                  <p className="text-nova-blue font-semibold text-sm mb-6">{tier.premium} pricing</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => {
                      const isIncluded = "included" in feature ? feature.included : true;
                      return (
                        <li key={feature.label} className="flex items-center gap-2 text-sm text-text-primary">
                          <Check size={15} className={isIncluded ? "text-success shrink-0" : "text-[#D1D5DB] shrink-0"} strokeWidth={2.5} />
                          {"value" in feature
                            ? <span><span className="font-medium">{feature.label}:</span> {feature.value}</span>
                            : feature.label
                          }
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-xs text-text-secondary italic">Ask about Care in your demo.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </PageLayout>
  );
}
