"use client";

import { useState } from "react";
import { Users, Banknote, Heart, Briefcase, GitBranch, Package } from "lucide-react";
import { APPSTORE_MODULES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

const APP_ICONS = [Users, Banknote, Heart, Briefcase, GitBranch, Package] as const;

const BENTO_SPANS = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
] as const;

export default function AppStoreSection() {
  const [active, setActive] = useState(0);
  const mod = APPSTORE_MODULES[active];
  const ActiveIcon = APP_ICONS[active];

  return (
    <section className="bg-[#f5f2ee] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <AnimateIn className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-widest text-[#2563EB] uppercase mb-3">Nova AppStore</p>
          <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
            Extend Nova for your{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              institution.
            </span>
          </h2>
          <p className="mt-3 text-base text-neutral-500 max-w-lg mx-auto">
            Add purpose-built modules on top of your core plan — only what you need.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">

            {/* Bento grid */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-3" style={{ gridTemplateRows: "140px 140px 140px" }}>
              {APPSTORE_MODULES.map((m, i) => {
                const Icon = APP_ICONS[i];
                const isActive = i === active;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActive(i)}
                    className={`${BENTO_SPANS[i]} rounded-2xl p-5 text-left flex flex-col justify-between transition-all duration-200 border-2 ${
                      isActive
                        ? "bg-[#111827] border-[#111827] shadow-lg scale-[1.01]"
                        : "bg-white border-transparent hover:border-neutral-200"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive ? "bg-white/15" : "bg-[#f5f2ee]"}`}>
                      <Icon size={18} className={isActive ? "text-white" : "text-[#2563EB]"} />
                    </div>
                    <div>
                      <p className={`text-[14px] font-semibold leading-snug ${isActive ? "text-white" : "text-[#111827]"}`}>
                        {m.name}
                      </p>
                      <p className={`text-[11px] mt-0.5 ${isActive ? "text-white/50" : "text-neutral-400"}`}>
                        Add-on
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Contextual panel */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-white border border-neutral-200 flex flex-col">
              <div className="aspect-video bg-[#111827] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/appstore-contextual.jpg"
                  alt={mod.name}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ActiveIcon size={16} className="text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">{mod.name}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <p className="text-[13px] text-neutral-500 leading-relaxed">{mod.description}</p>
                <p className="text-xs font-medium text-[#2563EB]">Best for: {mod.bestFor}</p>
              </div>
            </div>

          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
