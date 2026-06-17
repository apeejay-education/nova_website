import { School, Handshake } from "lucide-react";
import { PROOF_STRIP } from "@/lib/constants";

const ICONS = [School, Handshake];

export default function ProofStrip() {
  return (
    <div className="bg-[#0b0f1a] py-5 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch gap-3">
        {PROOF_STRIP.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={i}
              className="flex-1 flex items-center gap-3 backdrop-blur-sm bg-white/[0.06] border border-white/[0.10] rounded-2xl px-6 py-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[#2563EB]" strokeWidth={1.75} />
              </div>
              <p
                className="text-white/80 font-medium"
                style={{
                  fontSize: "clamp(13px, 2.5vw, 15px)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
