import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import JourneyBackground from "@/components/ui/JourneyBackground";
import SeamlessVideo from "@/components/ui/SeamlessVideo";

export default function CadenceCareSection() {
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
        <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Cadence Care · Nova Lounge</span>
        </div>

        <blockquote
          className="text-white font-medium tracking-tight leading-tight"
          style={{ fontSize: "clamp(24px, 4.5vw, 50px)" }}
        >
          We don&apos;t hand over software.{" "}
          <span
            style={{
              fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            We deploy infrastructure.
          </span>{" "}
          Our team stays on-site until your entire school is live.
        </blockquote>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cadence-care"
            className="inline-flex items-center gap-2 text-white/75 text-sm font-medium border border-white/20 rounded-full px-6 py-2.5 hover:bg-white/10 transition-colors"
          >
            Explore Cadence Care
            <span className="text-white/35">→</span>
          </Link>
          <p className="text-white/25 text-xs">Standard (+50%) · Pro (+100%) of base plan</p>
        </div>
      </AnimateIn>

    </section>
  );
}
