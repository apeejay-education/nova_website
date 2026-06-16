"use client";

import { useState } from "react";
import { PageLayout, PageHero } from "@/components/ui/PageLayout";
import { MODULE_CARDS, INTEGRATION_LOGOS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/forms/BookDemoModal";
import {
  GraduationCap, Wallet, CalendarCheck, Bus, Building2,
  BookOpen, Monitor, Bell, Check,
} from "lucide-react";

const MODULE_ICONS = [GraduationCap, Wallet, CalendarCheck, Bus, Building2, BookOpen, Monitor, Bell];

const MODULE_FEATURES: Record<string, string[]> = {
  sis: [
    "Complete student profiles with photo ID",
    "Online admissions with document upload",
    "Academic history, grades, and progress tracking",
    "Parent and guardian management",
    "Custom fields and categories",
  ],
  fees: [
    "Online payments via Razorpay integration",
    "Offline (cash/cheque) collection recording",
    "Automated fee reminders via WhatsApp and SMS",
    "Live fee dues dashboard",
    "Concession and scholarship management",
  ],
  attendance: [
    "Biometric and manual attendance marking",
    "Mobile app attendance for teachers",
    "Real-time parent notifications on absence",
    "Attendance reports by class, subject, and period",
    "Leave application and approval workflow",
  ],
  transport: [
    "Live GPS tracking for all school buses",
    "Route and stop management",
    "Driver and vehicle profiles",
    "Parent alerts on pick-up and drop",
    "Transport fee linked to Fee Management",
  ],
  hostel: [
    "Room and bed allocation",
    "Mess billing and diet tracking",
    "Visitor entry and exit log",
    "Student in/out register",
    "Hostel fee linked to Fee Management",
  ],
  library: [
    "Full book and periodical catalogue",
    "Issue and return tracking",
    "Overdue alerts and fine calculation",
    "Barcode and QR code support",
    "Library usage reports",
  ],
  lms: [
    "Content upload: videos, PDFs, slides",
    "Assignments with submission and grading",
    "Quizzes with auto-scoring",
    "Student progress and completion tracking",
    "Leaderboard and engagement metrics",
  ],
  communication: [
    "Broadcast announcements to all or selected groups",
    "Push notifications to parent app",
    "Event and circular management",
    "Two-way teacher–parent messaging",
    "Noticeboard with read receipts",
  ],
};

export default function PlatformPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="The Nova Platform"
        headline="Everything your school runs on."
        sub="8 core modules. All included in base price. No hidden add-ons."
      />

      {/* Module detail sections */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {MODULE_CARDS.map((mod, i) => {
            const Icon = MODULE_ICONS[i];
            const features = MODULE_FEATURES[mod.id] ?? [];
            const isEven = i % 2 === 0;
            return (
              <div
                key={mod.id}
                className={`flex flex-col lg:flex-row gap-10 items-start p-8 rounded-2xl border border-divider ${isEven ? "bg-white" : "bg-nova-frost"}`}
              >
                {/* Icon + name */}
                <div className="lg:w-56 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-nova-frost border border-divider flex items-center justify-center mb-3">
                    <Icon size={24} className="text-nova-blue" />
                  </div>
                  <h2 className="text-lg font-bold text-nova-indigo">{mod.name}</h2>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">{mod.description}</p>
                </div>

                {/* Feature list */}
                <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check size={15} className="text-success shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm text-text-primary">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-nova-frost border-t border-divider py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-nova-indigo mb-2">Nova connects with your existing tools.</h2>
          <p className="text-text-secondary text-sm mb-8">No rip-and-replace. Nova works alongside the software your school already uses.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {INTEGRATION_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="bg-white border border-divider rounded-xl px-6 py-3 min-w-[130px] flex items-center justify-center"
              >
                <span className="text-sm font-semibold text-text-secondary">{logo.name}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
            Book a Demo
          </Button>
        </div>
      </section>

      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </PageLayout>
  );
}
