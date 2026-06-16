import {
  GraduationCap, Wallet, CalendarCheck, Bus,
  Building2, BookOpen, Monitor, Bell,
} from "lucide-react";
import { PLATFORM_SECTION, MODULE_CARDS } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

const MODULE_ICONS = [GraduationCap, Wallet, CalendarCheck, Bus, Building2, BookOpen, Monitor, Bell];

export default function PlatformSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-14">
          <h2
            className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight"
          >
            {PLATFORM_SECTION.headline}
            <br />
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {PLATFORM_SECTION.headlineLine2}
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULE_CARDS.map((mod, i) => {
            const Icon = MODULE_ICONS[i];
            return (
              <div
                key={mod.id}
                className="bg-white border border-neutral-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f5f2ee] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <h3 className="text-[14px] font-semibold text-[#111827] mb-1.5">{mod.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{mod.description}</p>
              </div>
            );
          })}
        </AnimateIn>

        <AnimateIn delay={0.2} className="text-center mt-10">
          <p className="text-neutral-500 font-medium">{PLATFORM_SECTION.footerCopy}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
