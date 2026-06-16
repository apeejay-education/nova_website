"use client";

import { useState } from "react";
import { PageLayout } from "@/components/ui/PageLayout";
import Button from "@/components/ui/Button";
import BookDemoModal from "@/components/forms/BookDemoModal";
import { Play, Clock, MonitorPlay } from "lucide-react";

const WALKTHROUGH_SECTIONS = [
  { time: "0:00", label: "Dashboard overview" },
  { time: "0:30", label: "Fee management live" },
  { time: "1:10", label: "Transport & GPS tracking" },
  { time: "1:45", label: "Ask Nova — AI queries" },
  { time: "2:15", label: "Nova Command ⌘K" },
  { time: "2:40", label: "LMS and parent app" },
  { time: "2:55", label: "Outro" },
];

export default function SeeNovaPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <div className="bg-nova-night min-h-[calc(100vh-64px)] py-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Headline */}
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-nova-blue mb-4">
              See Nova
            </p>
            <h1 className="text-[36px] lg:text-[48px] font-extrabold text-white leading-tight mb-4">
              Nova in 3 minutes.
            </h1>
            <p className="text-lg text-[#CBD5E1] max-w-xl mx-auto">
              A complete walkthrough — from the dashboard to AI-powered queries.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(37,99,235,0.20)] border border-[rgba(37,99,235,0.30)] flex items-center justify-center mx-auto mb-4">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <p className="text-white font-semibold mb-1">Video coming soon</p>
              <p className="text-[#64748B] text-sm">Currently in production. Book a live demo instead.</p>
            </div>
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }}
            />
          </div>

          {/* Walkthrough sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MonitorPlay size={18} className="text-nova-blue" />
                <h2 className="text-white font-semibold">What you&apos;ll see</h2>
              </div>
              <ul className="space-y-2">
                {WALKTHROUGH_SECTIONS.map((s) => (
                  <li key={s.time} className="flex items-center gap-3">
                    <span className="text-[#64748B] font-mono text-xs w-10 shrink-0">{s.time}</span>
                    <span className="text-[#CBD5E1] text-sm">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-nova-blue" />
                  <h2 className="text-white font-semibold">Prefer a live demo?</h2>
                </div>
                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  Skip the recording and get a personalised 30-minute walkthrough tailored to your school&apos;s size and structure. Our team will focus on the modules that matter most to you.
                </p>
              </div>
              <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
                Book a Live Demo
              </Button>
            </div>
          </div>

        </div>
      </div>

      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </PageLayout>
  );
}
