"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BookDemoForm from "./BookDemoForm";

interface BookDemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ open, onClose }: BookDemoModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (open) setTimeout(() => panelRef.current?.focus(), 80);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">

          {/* Fade backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(5,8,18,0.80)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Book a Demo"
            tabIndex={-1}
            className="relative w-full max-w-[520px] rounded-3xl outline-none overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(20,26,44,0.98) 0%, rgba(11,15,26,0.99) 100%)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07), 0 0 60px rgba(37,99,235,0.10)",
            }}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gradient accent top edge */}
            <div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, #2563EB 30%, #7C3AED 70%, transparent)" }}
            />
            {/* Soft inner glow */}
            <div
              className="absolute inset-x-0 top-0 h-32 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)" }}
            />

            {/* Header */}
            <div className="relative px-7 pt-7 pb-5 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", boxShadow: "0 0 16px rgba(37,99,235,0.40)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
                    <path d="M29.3,11.5 A13,13 0 1 1 29.3,24.5" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <line x1="13" y1="12" x2="13" y2="24" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="23" y1="12" x2="23" y2="24" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="13" y1="12" x2="23" y2="24" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[17px] font-semibold text-white leading-tight">Book a Demo</h2>
                  <p className="text-[11px] text-white/55 mt-0.5">30-min walkthrough, tailored to your school</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors mt-0.5 hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Close"
              >
                <X size={14} className="text-white/50" />
              </button>
            </div>

            {/* Form */}
            <div className="px-7 pb-7 overflow-y-auto" style={{ maxHeight: "calc(90dvh - 130px)" }}>
              <BookDemoForm onSuccess={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
