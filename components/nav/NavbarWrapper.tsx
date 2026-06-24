"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import MobileStickyCTA from "./MobileStickyCTA";
import BookDemoModal from "@/components/forms/BookDemoModal";

export default function NavbarWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = pathname === "/" || pathname.startsWith("/solutions/");

  return (
    <>
      <Navbar
        onBookDemo={() => setModalOpen(true)}
        transparentOnMount={hasDarkHero}
      />
      <MobileStickyCTA onBookDemo={() => setModalOpen(true)} />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
