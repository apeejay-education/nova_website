import {
  GraduationCap, Wallet, CalendarCheck, Bus,
  Building2, BookOpen, Monitor, Bell, Sparkles, Zap, Layers,
} from "lucide-react";

// ─── Card 1: Blazing Fast ERP ─────────────────────────────────────────────────

function BlazingFastCard() {
  const metrics = [
    { label: "Student search",  pct: 96, ms: "0.1s" },
    { label: "Fee dashboard",   pct: 84, ms: "0.2s" },
    { label: "Attendance mark", pct: 72, ms: "0.3s" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Zap size={14} className="text-[#2563EB]" strokeWidth={2.5} />
          <span className="text-[13px] font-semibold text-[#2563EB]">Blazing Fast ERP</span>
        </div>
        <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Live
        </span>
      </div>

      <div>
        <div className="flex items-end gap-1 leading-none">
          <span className="text-[38px] font-semibold text-[#111827]">&lt;&nbsp;0.3</span>
          <span className="text-[20px] font-medium text-neutral-400 mb-1">s</span>
        </div>
        <p className="text-[12px] text-neutral-400 mt-0.5">Average response, any module</p>
      </div>

      <div className="space-y-2.5">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-500 w-28 shrink-0">{m.label}</span>
            <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#2563EB] rounded-full" style={{ width: `${m.pct}%` }} />
            </div>
            <span className="text-[11px] text-neutral-400 w-7 text-right shrink-0">{m.ms}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card 2: AI Enabled ───────────────────────────────────────────────────────

function AIEnabledCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles size={14} className="text-[#2563EB]" strokeWidth={2} />
          <span className="text-[13px] font-semibold text-[#2563EB]">AI Enabled</span>
        </div>
        <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 rounded-full px-2 py-0.5 text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Ask Nova · Live
        </span>
      </div>

      <div className="bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 flex items-center gap-2">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-neutral-400 shrink-0">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 9.5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-[13px] text-neutral-500 flex-1">Fees overdue in Grade 10</span>
        <span className="w-5 h-5 rounded-md bg-[#2563EB] flex items-center justify-center text-white text-[10px] shrink-0">↵</span>
      </div>

      <div className="bg-[#EEF4FB] rounded-xl px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[13px] font-semibold text-[#111827]">12 students found</span>
          <span className="text-[10px] text-neutral-400">0.3s</span>
        </div>
        <p className="text-[14px] font-semibold text-[#2563EB]">₹1,84,500 overdue</p>
      </div>

      <p className="text-[11px] text-neutral-400 text-center">Natural language. Zero training needed.</p>
    </div>
  );
}

// ─── Card 3: All in One Modular ───────────────────────────────────────────────

const MODULES = [
  { name: "SIS",       Icon: GraduationCap },
  { name: "Fees",      Icon: Wallet },
  { name: "Attend",    Icon: CalendarCheck },
  { name: "Transport", Icon: Bus },
  { name: "Hostel",    Icon: Building2 },
  { name: "Library",   Icon: BookOpen },
  { name: "LMS",       Icon: Monitor },
  { name: "Comms",     Icon: Bell },
] as const;

function AllInOneCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Layers size={14} className="text-[#2563EB]" strokeWidth={2} />
          <span className="text-[13px] font-semibold text-[#2563EB]">All-in-One Modular</span>
        </div>
        <span className="text-[12px] text-neutral-400">8 modules</span>
      </div>

      <div>
        <div className="text-[38px] font-semibold text-[#111827] leading-none">₹0</div>
        <p className="text-[12px] text-neutral-400 mt-0.5">hidden add-ons. Ever.</p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {MODULES.map(({ name, Icon }) => (
          <div key={name} className="flex flex-col items-center gap-1.5">
            <div className="w-9 h-9 rounded-xl bg-[#f5f2ee] flex items-center justify-center">
              <Icon size={15} className="text-[#2563EB]" strokeWidth={1.75} />
            </div>
            <span className="text-[9px] text-neutral-400 text-center leading-tight">{name}</span>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-neutral-400 text-center border-t border-neutral-100 pt-3">
        All included. One price. Always.
      </p>
    </div>
  );
}

// ─── Standalone section ───────────────────────────────────────────────────────

export default function DashboardPreview() {
  return (
    <div className="bg-[#ededed] px-3 sm:px-4 pb-3 sm:pb-4">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <BlazingFastCard />
          <AIEnabledCard />
          <AllInOneCard />
        </div>
      </div>
    </div>
  );
}
