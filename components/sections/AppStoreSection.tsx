import { Users, Banknote, Heart, Briefcase, GitBranch, Package, ArrowRight } from "lucide-react";
import { APPSTORE_SECTION, APPSTORE_MODULES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

const APP_ICONS = [Users, Banknote, Heart, Briefcase, GitBranch, Package];

export default function AppStoreSection() {
  return (
    <section className="bg-[#f5f2ee] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
            {APPSTORE_SECTION.headline}
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-xl mx-auto">
            {APPSTORE_SECTION.sub}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {APPSTORE_MODULES.map((mod, i) => {
            const Icon = APP_ICONS[i];
            return (
              <div
                key={mod.id}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f2ee] flex items-center justify-center">
                    <Icon size={20} className="text-[#2563EB]" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span className="text-[11px] font-medium text-neutral-500">Add-on</span>
                  </div>
                </div>
                <h3 className="text-[14px] font-semibold text-[#111827]">{mod.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">{mod.description}</p>
                <p className="text-xs font-medium text-[#2563EB]">Best for: {mod.bestFor}</p>
              </div>
            );
          })}
        </AnimateIn>

        <AnimateIn delay={0.2} className="text-center mt-10">
          <a href="/book-demo" className="inline-flex items-center gap-1.5 text-[#2563EB] font-medium hover:underline underline-offset-2">
            {APPSTORE_SECTION.linkText}
            <ArrowRight size={16} />
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
