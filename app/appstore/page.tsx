"use client";

import { useState } from "react";
import { PageLayout, PageHero } from "@/components/ui/PageLayout";
import { APPSTORE_MODULES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/forms/BookDemoModal";
import { Users, Banknote, Heart, Briefcase, GitBranch, Package, Check } from "lucide-react";

const APP_ICONS = [Users, Banknote, Heart, Briefcase, GitBranch, Package];

const APP_FEATURES: Record<string, string[]> = {
  hrms: [
    "Staff attendance with biometric and mobile",
    "Leave application and approval workflow",
    "Performance appraisal and review cycles",
    "Staff profiles with documents and contracts",
    "Department and role management",
  ],
  payroll: [
    "Automated monthly salary processing",
    "PF, ESI, TDS compliance built in",
    "Digital payslip generation and distribution",
    "Reimbursement and advance management",
    "Salary register and audit reports",
  ],
  pulse: [
    "Student wellness check-ins and mood tracking",
    "Counsellor session notes and history",
    "Referral workflow for at-risk students",
    "Confidential case management",
    "Wellness analytics for school leadership",
  ],
  hire: [
    "Job posting and application tracking",
    "Interview scheduling and feedback",
    "Offer letter generation",
    "Onboarding checklist and document collection",
    "Hiring pipeline reports",
  ],
  workflow: [
    "Custom multi-step approval flows",
    "Leave, procurement, and event workflows",
    "Email and push notifications at each stage",
    "Escalation rules and SLA tracking",
    "Workflow analytics and bottleneck reports",
  ],
  warehouse: [
    "Lab equipment and asset catalogue",
    "Stationery and consumables tracking",
    "Issue and return management",
    "Low-stock alerts and reorder triggers",
    "Asset depreciation and audit trail",
  ],
};

export default function AppStorePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Nova AppStore"
        headline="Your school grows. Nova grows with it."
        sub="Start with the 8 core modules. Add powerful capabilities as your institution scales."
      />

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {APPSTORE_MODULES.map((mod, i) => {
              const Icon = APP_ICONS[i];
              const features = APP_FEATURES[mod.id] ?? [];
              return (
                <div key={mod.id} className="border border-divider rounded-2xl p-7 bg-white hover:shadow-[0_4px_24px_rgba(30,58,138,0.08)] transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-nova-frost flex items-center justify-center">
                      <Icon size={22} className="text-nova-blue" />
                    </div>
                    <span className="text-xs font-semibold text-nova-blue bg-nova-frost border border-[#BFDBFE] px-3 py-1 rounded-full">
                      Add-on
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-nova-indigo mb-1">{mod.name}</h2>
                  <p className="text-sm text-text-secondary mb-1">{mod.description}</p>
                  <p className="text-xs font-medium text-nova-blue mb-5">Best for: {mod.bestFor}</p>
                  <ul className="space-y-2">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check size={14} className="text-success shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-text-primary">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <p className="text-text-secondary mb-4">Explore the AppStore in your demo — our team will walk you through the modules relevant to your school.</p>
            <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>Book a Demo</Button>
          </div>
        </div>
      </section>

      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </PageLayout>
  );
}
