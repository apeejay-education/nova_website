"use client";

import { useState } from "react";
import Hero from "./Hero";
import BookDemoModal from "@/components/forms/BookDemoModal";

export default function HeroWrapper() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Hero onBookDemo={() => setModalOpen(true)} />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
