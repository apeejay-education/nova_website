import type { Metadata } from "next";
import { PageLayout } from "@/components/ui/PageLayout";
import BookDemoForm from "@/components/forms/BookDemoForm";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo — Cadence Nova",
  description: "Book a personalised 30-minute demo of Cadence Nova for your school. No commitment required.",
};

const TRUST_POINTS = [
  "30-minute walkthrough tailored to your school",
  "See fees, transport, and AI features live",
  "No commitment required",
  "Confirmation within 4 hours",
  "We stay until your school is fully live",
];

export default function BookDemoPage() {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-64px)] bg-nova-frost py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — value props */}
            <div>
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-nova-blue mb-4">
                Book a Demo
              </p>
              <h1 className="text-[36px] lg:text-[44px] font-extrabold text-nova-indigo leading-tight mb-4">
                See Nova in action.
              </h1>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                A 30-minute personalised walkthrough built around your school's size, structure, and priorities.
              </p>

              <ul className="space-y-3 mb-10">
                {TRUST_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-success" strokeWidth={3} />
                    </div>
                    <span className="text-text-primary">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white border-l-4 border-nova-indigo rounded-r-xl px-5 py-4">
                <p className="text-sm font-semibold text-nova-indigo mb-0.5">Nova Lounge</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We Stay Until You&apos;re Done. Our team stays on-site and remotely until your school is fully live — not just go-live day.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl shadow-sm border border-divider p-8">
              <h2 className="text-xl font-bold text-nova-indigo mb-1">Book your demo</h2>
              <p className="text-sm text-text-secondary mb-6">No commitment required. We&apos;ll confirm within 4 hours.</p>
              <BookDemoForm />
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
