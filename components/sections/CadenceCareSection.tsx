import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export default function CadenceCareSection() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-[#0b0f1a]">

      {/* Full-bleed background video — desaturated/cinematic */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-35 grayscale"
        src="/assets/videos/nova-lounge-team.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/60 via-[#0b0f1a]/30 to-[#0b0f1a]/80" />

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
