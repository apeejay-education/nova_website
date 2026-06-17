import AnimateIn from "@/components/ui/AnimateIn";

export default function NovaCommandSection() {
  return (
    <section className="bg-[#070a12] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: video */}
          <AnimateIn>
            <div className="relative rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] aspect-video">
              <video
                className="w-full h-full object-cover"
                src="/assets/videos/boomerang-nova-command.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5">
                <kbd className="font-mono text-sm text-white leading-none">⌘K</kbd>
                <span className="text-white/50 text-[11px]">anywhere in Nova</span>
              </div>
            </div>
          </AnimateIn>

          {/* Right: copy */}
          <AnimateIn delay={0.15}>
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.25)] rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#2563EB] text-xs font-semibold tracking-wide uppercase">Nova Command</span>
              </div>
              <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-white leading-tight mb-4">
                Blazing fast.{" "}
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Everywhere.
                </span>
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
                Press ⌘K from anywhere in Nova. Type a student name, fee record, or staff ID — and land deep inside the right module in under a second. No menus. No clicks.
              </p>
              <ul className="space-y-4">
                {[
                  "Full-text search across all modules, instantly",
                  "Deep-link navigation — skip 5 clicks in one keystroke",
                  "Works on web, tablet, and mobile app",
                  "Live on every Nova plan — no add-on required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-[6px] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
