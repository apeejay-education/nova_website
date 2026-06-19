import {
  Package, Sparkles, MessageSquare, Command,
  HeartHandshake, DollarSign, Smartphone,
  CheckCircle2, XCircle, AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import { COMPARISON_SECTION, COMPARISON_ROWS, type ComparisonStatus } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";

const FEATURE_ICONS: LucideIcon[] = [
  Package, Sparkles, MessageSquare, Command,
  HeartHandshake, DollarSign, Smartphone,
];

const STATUS_CONFIG: Record<ComparisonStatus, { Icon: LucideIcon; color: string }> = {
  check:   { Icon: CheckCircle2,  color: "text-emerald-400" },
  cross:   { Icon: XCircle,       color: "text-red-400"     },
  warning: { Icon: AlertTriangle, color: "text-amber-400"   },
};

function StatusCell({ status, text, nova = false }: {
  status: ComparisonStatus; text: string; nova?: boolean;
}) {
  const { Icon, color } = STATUS_CONFIG[status];
  return (
    <span className="flex items-start gap-2">
      <Icon size={15} className={`shrink-0 mt-0.5 ${color}`} />
      <span className={`text-[13px] leading-snug ${nova ? "text-white/80" : "text-white/40"}`}>
        {text}
      </span>
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="bg-[#0b0f1a] py-24 px-6 relative overflow-hidden">
      <JourneyBackground tone="dark" nodes={[
        { icon: "Users",         x: 5,  y: 38, delay: 0   },
        { icon: "GraduationCap", x: 25, y: 18, delay: 150 },
        { icon: "Zap",           x: 50, y: 70, delay: 300 },
        { icon: "CalendarCheck", x: 74, y: 22, delay: 450 },
        { icon: "ShieldCheck",   x: 93, y: 58, delay: 600 },
      ]} paths={[
        "M 5,38 C 12,28 18,22 25,18",
        "M 25,18 C 36,38 44,58 50,70",
        "M 50,70 C 60,50 67,34 74,22",
        "M 74,22 C 81,36 88,50 93,58",
      ]} />

      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <AnimateIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">
              Nova vs Traditional ERP
            </span>
          </div>
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-white leading-tight">
            {COMPARISON_SECTION.headline}
          </h2>
          <p className="mt-4 text-base text-white/45">{COMPARISON_SECTION.sub}</p>
        </AnimateIn>

        {/* ── Column headers ── */}
        <AnimateIn delay={0.08}>
          <div className="hidden md:grid grid-cols-[2fr_1.6fr_1.6fr] px-5 pb-3">
            <span />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#60A5FA]" />
              <span className="text-[13px] font-bold text-[#60A5FA] uppercase tracking-wider">
                Cadence Nova
              </span>
            </div>
            <span className="text-[13px] font-semibold text-white/60 uppercase tracking-wider">
              Traditional ERP
            </span>
          </div>
        </AnimateIn>

        {/* ── Rows ── */}
        <AnimateIn delay={0.1}>
          <div className="space-y-2">
            {COMPARISON_ROWS.map((row, i) => {
              const FeatureIcon = FEATURE_ICONS[i] ?? Package;
              return (
                <div
                  key={row.feature}
                  className="group rounded-2xl bg-white/[0.04] border border-white/[0.07] px-5 py-4 cursor-default transition-all duration-200 hover:bg-white/[0.08] hover:-translate-y-0.5 hover:border-white/[0.15] hover:shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                >
                  {/* Desktop: 3-column grid */}
                  <div className="hidden md:grid grid-cols-[2fr_1.6fr_1.6fr] items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/30 transition-colors duration-200">
                        <FeatureIcon size={15} className="text-[#60A5FA]" />
                      </div>
                      <span className="text-[14px] font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                        {row.feature}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-xl transition-colors duration-200 group-hover:bg-[#2563EB]/10">
                      <StatusCell status={row.novaStatus} text={row.nova} nova />
                    </div>
                    <div className="px-3 py-1">
                      <StatusCell status={row.traditionalStatus} text={row.traditional} />
                    </div>
                  </div>

                  {/* Mobile: stacked */}
                  <div className="md:hidden">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-[#2563EB]/20 flex items-center justify-center shrink-0">
                        <FeatureIcon size={13} className="text-[#60A5FA]" />
                      </div>
                      <span className="text-[14px] font-semibold text-white/85">{row.feature}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#2563EB]/10 rounded-xl px-3 py-2.5">
                        <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wide mb-1">Nova</p>
                        <StatusCell status={row.novaStatus} text={row.nova} nova />
                      </div>
                      <div className="px-3 py-2.5">
                        <p className="text-[10px] font-bold text-white/25 uppercase tracking-wide mb-1">Traditional</p>
                        <StatusCell status={row.traditionalStatus} text={row.traditional} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
