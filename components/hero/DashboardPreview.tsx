"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, ChevronDown, X } from "lucide-react";
import Gauge from "./Gauge";

// ─── Card 1: Fee Collection ───────────────────────────────────────────────────

function FeeCard() {
  const [activeToggle, setActiveToggle] = useState<"online" | "cash">("online");
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#2563EB]">Fee Collection</span>
        <span className="text-[13px] text-neutral-500">This Month</span>
      </div>

      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[28px] font-semibold text-[#111827] leading-none">₹2,84,500</span>
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-[11px] font-medium">
            <TrendingUp size={11} strokeWidth={2.5} />
            +₹24K (9%)
          </span>
        </div>
        <p className="text-[12px] text-neutral-400 mt-1">Compared to last month</p>
      </div>

      <div className="text-center">
        <p className="text-[12px] text-neutral-500 font-medium">Monthly target achieved</p>
      </div>

      <div className="flex justify-center">
        <Gauge value={85} color="#2563EB" showLabels min="₹0" max="₹3L" />
      </div>

      {/* Toggle */}
      <div className="bg-neutral-100 rounded-full p-1 flex">
        {(["online", "cash"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveToggle(t)}
            className={`flex-1 py-1.5 rounded-full text-[12px] font-medium capitalize transition-all ${
              activeToggle === t ? "bg-white shadow-sm text-[#111827]" : "text-neutral-500"
            }`}
          >
            {t === "online" ? "Online" : "Cash"}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Card 2: Settings / Targets ──────────────────────────────────────────────

function SettingsCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      {/* Dropdown fields */}
      {[
        { label: "Show figures for", value: "This month" },
        { label: "Compare period by", value: "Month-to-date (MTD)" },
      ].map((f) => (
        <div key={f.label}>
          <p className="text-[12px] text-neutral-700 mb-1">{f.label}</p>
          <button className="w-full flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-[#111827] hover:border-neutral-300 transition-colors">
            {f.value}
            <ChevronDown size={14} className="text-neutral-400 shrink-0" />
          </button>
        </div>
      ))}

      {/* Number inputs */}
      {[
        { label: "Fee target (This month)", value: "3,00,000" },
        { label: "Fee target (This year)", value: "36,00,000" },
      ].map((f) => (
        <div key={f.label}>
          <p className="text-[12px] text-neutral-700 mb-1">{f.label}</p>
          <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 gap-2">
            <span className="text-neutral-400 text-[13px]">₹</span>
            <span className="text-[13px] text-[#111827]">{f.value}</span>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="flex items-center gap-3 pt-1">
        <button className="bg-[#2563EB] text-white text-[13px] font-medium rounded-lg px-5 py-2 hover:bg-[#1D4ED8] transition-colors">
          Save
        </button>
        <button className="text-[13px] text-neutral-500 underline underline-offset-2">Cancel</button>
        <button className="ml-auto text-neutral-400 hover:text-neutral-600 transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ─── Card 3: Attendance ───────────────────────────────────────────────────────

function AttendanceCard() {
  const [activeToggle, setActiveToggle] = useState<"present" | "absent">("present");
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#2563EB]">Attendance</span>
        <span className="text-[13px] text-neutral-500">today</span>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <span className="text-[28px] font-semibold text-[#111827] leading-none">92%</span>
          <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px] font-medium">
            <TrendingUp size={11} strokeWidth={2.5} />
            +2%
          </span>
        </div>
        <p className="text-[12px] text-neutral-400 mt-1">Compared to yesterday</p>
      </div>

      <div className="flex justify-center">
        <Gauge value={92} color="#9ca3af" showLabels={false} />
      </div>

      {/* Toggle */}
      <div className="bg-neutral-100 rounded-full p-1 flex">
        {(["present", "absent"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveToggle(t)}
            className={`flex-1 py-1.5 rounded-full text-[12px] font-medium capitalize transition-all ${
              activeToggle === t ? "bg-white shadow-sm text-[#111827]" : "text-neutral-500"
            }`}
          >
            {t === "present" ? "Present" : "Absent"}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Dashboard container ──────────────────────────────────────────────────────

export default function DashboardPreview() {
  return (
    <div className="w-full flex-1 flex flex-col justify-end px-3 sm:px-4 mt-6 sm:mt-8">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <FeeCard />
          <SettingsCard />
          <AttendanceCard />
        </div>
      </div>
    </div>
  );
}
