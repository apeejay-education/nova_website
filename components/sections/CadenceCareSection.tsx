import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";
import SeamlessVideo from "@/components/ui/SeamlessVideo";

interface CadenceCareSectionProps {
  onBookDemo: () => void;
}

export default function CadenceCareSection({ onBookDemo }: CadenceCareSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-[#0b0f1a]">

      {/* Full-bleed background video — desaturated/cinematic */}
      <SeamlessVideo
        src="/assets/videos/nova-lounge-team.mp4"
        className="opacity-35 grayscale"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/60 via-[#0b0f1a]/30 to-[#0b0f1a]/80" />

      <JourneyBackground tone="dark" nodes={[
        { icon: "Building2",    x: 6,  y: 22, delay: 0   },
        { icon: "Users",        x: 26, y: 72, delay: 200 },
        { icon: "GraduationCap",x: 52, y: 18, delay: 400 },
        { icon: "ShieldCheck",  x: 76, y: 68, delay: 600 },
        { icon: "CheckCircle2", x: 93, y: 30, delay: 800 },
      ]} paths={[
        "M 6,22 C 14,44 20,60 26,72",
        "M 26,72 C 36,50 44,30 52,18",
        "M 52,18 C 62,38 70,56 76,68",
        "M 76,68 C 83,52 89,38 93,30",
      ]} />

      {/* Content */}
      <AnimateIn className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Badge — blue-purple treatment */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{
            background: "rgba(37,99,235,0.10)",
            border: "1px solid rgba(37,99,235,0.30)",
            boxShadow: "0 0 24px rgba(37,99,235,0.12)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Cadence Care · Nova Lounge
          </span>
        </div>

        <blockquote
          className="text-white font-medium tracking-tight leading-tight"
          style={{ fontSize: "clamp(24px, 4.5vw, 50px)" }}
        >
          We don&apos;t hand over software.{" "}
          <span className="relative inline">
            {/* Subtle blue-purple highlight behind the italic phrase */}
            <span
              className="absolute rounded-lg pointer-events-none"
              style={{
                inset: "-3px -6px",
                background: "linear-gradient(90deg, rgba(37,99,235,0.18) 0%, rgba(124,58,237,0.18) 100%)",
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
              }}
            >
              We deploy infrastructure.
            </span>
          </span>{" "}
          Our team stays on-site until your entire school is live.
        </blockquote>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2.5 rounded-full pl-6 pr-2 py-2.5 text-[14px] font-medium text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
              boxShadow: "0 0 32px rgba(37,99,235,0.35), 0 4px 16px rgba(0,0,0,0.30)",
            }}
          >
            Book a Demo
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ChevronRight size={13} strokeWidth={2.5} />
            </span>
          </button>

          {/* Secondary link */}
          <Link
            href="/cadence-care"
            className="text-white/50 text-sm font-medium hover:text-white/75 transition-colors"
          >
            Explore Cadence Care →
          </Link>
        </div>
      </AnimateIn>

    </section>
  );
}
