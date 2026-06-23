"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { NAV_SOLUTIONS, NAV_RESOURCES, NAV_COMPANY, CLIENT_PORTAL_LINK } from "@/lib/constants";
import Button from "@/components/ui/Button";
import NovaLogo from "@/components/ui/NovaLogo";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

function AccordionSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <li>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-[#111827] hover:bg-neutral-50 rounded-lg transition-colors"
      >
        {label}
        <ChevronDown
          size={16}
          className={`text-neutral-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pl-4 pb-2 space-y-0.5">
          {children}
        </div>
      )}
    </li>
  );
}

export default function MobileDrawer({ open, onClose, onBookDemo }: MobileDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-100">
          <NovaLogo dark={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-0.5">

            <AccordionSection label="Solutions">
              {NAV_SOLUTIONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[13px] font-medium text-neutral-600">{item.label}</span>
                  {item.status === "coming-soon" && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase"
                      style={{
                        background: "rgba(245,158,11,0.12)",
                        color: "#D97706",
                        border: "1px solid rgba(245,158,11,0.25)",
                      }}
                    >
                      Soon
                    </span>
                  )}
                </Link>
              ))}
            </AccordionSection>

            <li>
              <Link
                href="/pricing"
                onClick={onClose}
                className="block px-3 py-3 text-base font-medium text-[#111827] hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Pricing
              </Link>
            </li>

            <AccordionSection label="Resources">
              {NAV_RESOURCES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[13px] font-medium text-neutral-600">{item.label}</span>
                  {item.external && <ArrowUpRight size={11} className="text-neutral-400" />}
                </Link>
              ))}
            </AccordionSection>

            <AccordionSection label="Company">
              {NAV_COMPANY.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[13px] font-medium text-neutral-600">{item.label}</span>
                  {item.external && <ArrowUpRight size={11} className="text-neutral-400" />}
                </Link>
              ))}
            </AccordionSection>

            <li>
              <Link
                href={CLIENT_PORTAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-3 text-base font-medium text-neutral-500 hover:text-[#111827] hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Client Portal
                <ArrowUpRight size={14} className="text-neutral-400" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Book a Demo — pinned to bottom */}
        <div className="px-6 pb-8 pt-4 border-t border-neutral-100">
          <Button
            variant="primary"
            fullWidth
            onClick={() => { onClose(); onBookDemo(); }}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </>
  );
}
