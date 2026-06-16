"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

export default function MobileDrawer({ open, onClose, onBookDemo }: MobileDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-divider">
          <span className="text-nova-indigo font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-nova-frost transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-3 py-3 text-base font-medium text-text-primary hover:text-nova-indigo hover:bg-nova-frost rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                onClick={onClose}
                className="block px-3 py-3 text-base font-medium text-text-secondary hover:text-nova-indigo hover:bg-nova-frost rounded-lg transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Book a Demo — pinned to bottom */}
        <div className="px-6 pb-8 pt-4 border-t border-divider">
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
