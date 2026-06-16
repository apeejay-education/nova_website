import { COMPARISON_SECTION, COMPARISON_ROWS, INTEGRATION_LOGOS, type ComparisonStatus } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

function StatusIcon({ status, text }: { status: ComparisonStatus; text: string }) {
  const config = {
    check:   { symbol: "✓", color: "text-[#16A34A]" },
    cross:   { symbol: "✗", color: "text-[#EF4444]" },
    warning: { symbol: "⚠", color: "text-[#D97706]" },
  }[status];

  return (
    <span className="flex items-start gap-1.5">
      <span className={`font-bold shrink-0 ${config.color}`}>{config.symbol}</span>
      <span className="text-sm text-[#111827]">{text}</span>
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="bg-[#f5f2ee] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
            {COMPARISON_SECTION.headline}
          </h2>
          <p className="mt-4 text-base text-neutral-500">{COMPARISON_SECTION.sub}</p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-neutral-200 border-t-[3px] border-t-[#2563EB] shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0b0f1a] text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold w-[38%]">Feature</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold w-[31%]">Cadence Nova</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold w-[31%]">Traditional ERP</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f8f6]"}>
                    <td className="px-6 py-3.5 text-sm font-medium text-[#111827]">{row.feature}</td>
                    <td className="px-6 py-3.5"><StatusIcon status={row.novaStatus} text={row.nova} /></td>
                    <td className="px-6 py-3.5"><StatusIcon status={row.traditionalStatus} text={row.traditional} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-3">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.feature} className="border border-neutral-200 rounded-2xl overflow-hidden">
                <div className="bg-[#0b0f1a] px-4 py-2.5">
                  <p className="text-white font-semibold text-sm">{row.feature}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-neutral-200 bg-white">
                  <div className="px-4 py-3">
                    <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wide mb-1.5">Nova</p>
                    <StatusIcon status={row.novaStatus} text={row.nova} />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide mb-1.5">Traditional</p>
                    <StatusIcon status={row.traditionalStatus} text={row.traditional} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2} className="mt-12 border-t border-neutral-300 pt-10 text-center">
          <p className="text-sm font-medium text-neutral-500 mb-6">
            Nova connects with the tools your school already uses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {INTEGRATION_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center bg-white border border-neutral-200 rounded-xl px-5 py-2.5 min-w-[120px]"
              >
                <span className="text-sm font-medium text-neutral-500">{logo.name}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
