"use client";

import { useRef } from "react";
import { CalendarCheck, Building2, Monitor, Bell, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const CAROUSEL_ITEMS = [
  {
    time: "7:45 AM",
    name: "Admissions & SIS",
    micro: "Every student. Every detail. One profile.",
    video: "/assets/videos/boomerang-admission.mp4",
    bg: null,
    Icon: null,
  },
  {
    time: "9:00 AM",
    name: "Fee Management",
    micro: "Collect fees in seconds. Track everything.",
    video: "/assets/videos/boomerang-fees.mp4",
    bg: null,
    Icon: null,
  },
  {
    time: "10:30 AM",
    name: "Transport",
    micro: "GPS-tracked buses. Live parent alerts.",
    video: "/assets/videos/boomerang-transport.mp4",
    bg: null,
    Icon: null,
  },
  {
    time: "2:00 PM",
    name: "Campus Life",
    micro: "Library, hostel, labs — all connected.",
    video: "/assets/videos/boomerang-library.mp4",
    bg: null,
    Icon: null,
  },
  {
    time: "8:30 AM",
    name: "Attendance",
    micro: "Mark 400 students in under 30 seconds.",
    video: null,
    bg: "from-amber-950/80 to-amber-900/50",
    Icon: CalendarCheck,
  },
  {
    time: "5:00 PM",
    name: "Hostel",
    micro: "Room allocation, food, laundry — unified.",
    video: null,
    bg: "from-blue-950/80 to-blue-900/50",
    Icon: Building2,
  },
  {
    time: "4:30 PM",
    name: "LMS",
    micro: "Assignments, lessons, grades — digital-first.",
    video: null,
    bg: "from-violet-950/80 to-violet-900/50",
    Icon: Monitor,
  },
  {
    time: "6:00 PM",
    name: "Communication",
    micro: "SMS, app push, email — one click.",
    video: null,
    bg: "from-emerald-950/80 to-emerald-900/50",
    Icon: Bell,
  },
] as const;

export default function PlatformSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-24 overflow-hidden">
      {/* Header */}
      <AnimateIn className="text-center px-6 mb-12">
        <p className="text-[11px] font-semibold tracking-widest text-[#2563EB] uppercase mb-3">Core Platform</p>
        <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
          A day in the life of{" "}
          <span
            style={{
              fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            your school.
          </span>
        </h2>
        <p className="mt-3 text-base text-neutral-500 max-w-xl mx-auto">
          Everything runs on Nova — from the first bell to the last bus home.
        </p>
      </AnimateIn>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-6 px-6"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {CAROUSEL_ITEMS.map((item, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] sm:w-[320px] rounded-2xl overflow-hidden border border-neutral-200 bg-white flex flex-col"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Visual */}
              <div className="relative w-full aspect-[4/3] bg-[#0b0f1a] overflow-hidden">
                {item.video ? (
                  <video
                    className="w-full h-full object-cover"
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.bg} flex items-center justify-center`}>
                    {item.Icon && <item.Icon size={48} className="text-white/20" strokeWidth={1} />}
                  </div>
                )}
                {/* Time badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/40 backdrop-blur-sm border border-white/10 text-white/80 text-[11px] font-medium rounded-full px-3 py-1">
                    {item.time}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-[#111827] leading-snug">{item.name}</h3>
                <p className="text-[13px] text-neutral-500 mt-1">{item.micro}</p>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div className="shrink-0 w-2" />
        </div>

        {/* Scroll controls */}
        <div className="flex items-center gap-2 px-6 mt-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-[#111827] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronRight size={16} className="rotate-180" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-[#111827] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
          <span className="text-[12px] text-neutral-400 ml-2">Scroll to explore all 8 modules</span>
        </div>
      </div>
    </section>
  );
}
