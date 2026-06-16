"use client";

import Button from "@/components/ui/Button";

interface MobileStickyCTAProps {
  onBookDemo: () => void;
}

export default function MobileStickyCTA({ onBookDemo }: MobileStickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 py-3 bg-white border-t border-divider shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <Button variant="primary" fullWidth onClick={onBookDemo}>
        Book a Demo
      </Button>
    </div>
  );
}
