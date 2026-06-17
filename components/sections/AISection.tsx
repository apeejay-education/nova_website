import { AI_SECTION } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#16A34A] text-xs font-semibold px-3 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
      {AI_SECTION.askNova.badge}
    </span>
  );
}

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-3 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
      {AI_SECTION.tellNova.badge}
    </span>
  );
}

function AskNovaMockup() {
  return (
    <div className="mt-5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] p-4 space-y-3">
      <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.08)] rounded-lg px-3 py-2.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#94A3B8] shrink-0">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 9.5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-[13px] text-[#CBD5E1]">Grade 9 students with fees overdue above ₹5,000</span>
        <span className="ml-auto w-4 h-4 rounded bg-[#2563EB] flex items-center justify-center text-white text-[10px] shrink-0">↵</span>
      </div>
      <div className="space-y-1.5 px-1">
        {["Aryan Sharma — ₹7,200 overdue", "Priya Nair — ₹5,800 overdue", "Rohit Gupta — ₹6,450 overdue"].map((row) => (
          <div key={row} className="flex items-center justify-between text-[13px] py-1.5 border-b border-[rgba(255,255,255,0.06)]">
            <span className="text-[#E2E8F0]">{row.split("—")[0].trim()}</span>
            <span className="text-[#F97316] font-semibold">— {row.split("—")[1].trim()}</span>
          </div>
        ))}
        <p className="text-[11px] text-[#64748B] pt-1">3 results · 0.3s</p>
      </div>
    </div>
  );
}

function TellNovaMockup() {
  return (
    <div className="mt-5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] p-4 space-y-3">
      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="bg-[#2563EB] text-white text-[13px] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
            Add Science Lab as a new course for Grade 8
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[rgba(255,255,255,0.08)] text-[#E2E8F0] text-[13px] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] space-y-1">
            <p>Done. Science Lab added to Grade 8.</p>
            <p className="text-[#94A3B8] text-[11px]">Course ID: SCI-G8-001 · Active from today</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#2563EB] text-white text-[13px] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
            Mark Rahul absent for today
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[rgba(255,255,255,0.08)] text-[#E2E8F0] text-[13px] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
            <p>Rahul Mehta marked absent · 16 Jun 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section className="bg-[#0b0f1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.25)] rounded-full px-4 py-1.5 mb-5">
            <Sparkles size={13} className="text-[#2563EB]" />
            <span className="text-[#2563EB] text-xs font-semibold tracking-wide uppercase">Nova AI</span>
          </div>
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-white leading-tight">
            {AI_SECTION.headline}
          </h2>
          <p className="mt-4 text-base text-[#94A3B8] max-w-xl mx-auto">
            {AI_SECTION.sub}
          </p>
        </AnimateIn>

        {/* Main grid: typing video left, AI cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">

          {/* Left: typing interaction video */}
          <AnimateIn delay={0.05} className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] aspect-[3/4] lg:aspect-auto lg:h-full" style={{ minHeight: 480 }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/videos/typing-command.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-sm">Natural language queries</p>
                <p className="text-[#94A3B8] text-xs mt-0.5">Type anything. Nova understands school context.</p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Ask Nova + Tell Nova cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <AnimateIn delay={0.1}>
              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-7">
                <AvailableBadge />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{AI_SECTION.askNova.headline}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{AI_SECTION.askNova.copy}</p>
                <AskNovaMockup />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-7">
                <ComingSoonBadge />
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{AI_SECTION.tellNova.headline}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{AI_SECTION.tellNova.copy}</p>
                <TellNovaMockup />
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
