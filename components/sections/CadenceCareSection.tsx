import { Check, X } from "lucide-react";
import { CADENCE_CARE_SECTION, CARE_TIERS } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function CadenceCareSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
            {CADENCE_CARE_SECTION.headline}
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-2xl mx-auto">
            {CADENCE_CARE_SECTION.sub}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {CARE_TIERS.map((tier) => {
            const highlighted = "highlighted" in tier && tier.highlighted;
            return (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl border-2 p-8 ${
                  highlighted
                    ? "border-[#2563EB] shadow-[0_4px_32px_rgba(37,99,235,0.10)]"
                    : "border-neutral-200"
                }`}
              >
                {highlighted && (
                  <span className="inline-block bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-[#111827] mb-1">{tier.name}</h3>
                <p className="text-[#2563EB] font-medium text-sm mb-6">{tier.premium} pricing</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => {
                    const included = "included" in feature ? feature.included : true;
                    return (
                      <li key={feature.label} className="flex items-center gap-3">
                        {included
                          ? <Check size={17} className="text-[#16A34A] shrink-0" strokeWidth={2.5} />
                          : <X size={17} className="text-neutral-300 shrink-0" strokeWidth={2.5} />
                        }
                        <span className={`text-sm ${!included ? "text-neutral-400" : "text-[#111827]"}`}>
                          {"value" in feature
                            ? <><span className="font-medium">{feature.label}:</span> {feature.value}</>
                            : feature.label
                          }
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="bg-[#f5f2ee] border-l-4 border-[#2563EB] rounded-r-2xl px-6 py-5 max-w-3xl mx-auto">
            <p className="text-[13px] font-semibold text-[#2563EB] mb-1">
              {CADENCE_CARE_SECTION.novaLounge.headline}
            </p>
            <p className="text-lg font-semibold text-[#111827] mb-2">
              {CADENCE_CARE_SECTION.novaLounge.promise}
            </p>
            <p className="text-neutral-500 leading-relaxed text-sm">
              {CADENCE_CARE_SECTION.novaLounge.copy}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
