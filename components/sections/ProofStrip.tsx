import { School, Handshake } from "lucide-react";
import { PROOF_STRIP } from "@/lib/constants";

const ICONS = [School, Handshake];

export default function ProofStrip() {
  return (
    <div className="bg-[#f5f2ee] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
        {PROOF_STRIP.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <div key={i} className="flex items-center gap-3 sm:px-10">
              {i > 0 && (
                <div className="hidden sm:block w-px h-8 bg-neutral-300 mx-2" aria-hidden="true" />
              )}
              <Icon size={18} className="text-[#2563EB] shrink-0" />
              <p className="text-[14px] font-medium text-[#111827]">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
