"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import MobileStickyCTA from "./MobileStickyCTA";
import BookDemoModal from "@/components/forms/BookDemoModal";

export default function NavbarWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <>
      {/* Homepage has its own pill navbar inside the hero — hide the global fixed one */}
      {!isHomepage && <Navbar onBookDemo={() => setModalOpen(true)} />}
      <MobileStickyCTA onBookDemo={() => setModalOpen(true)} />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
