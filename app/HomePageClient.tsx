"use client";

import { useState } from "react";
import Hero from "@/components/hero/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import PlatformSection from "@/components/sections/PlatformSection";
import AISection from "@/components/sections/AISection";
import AppStoreSection from "@/components/sections/AppStoreSection";
import CadenceCareSection from "@/components/sections/CadenceCareSection";
import MidCTASection from "@/components/sections/MidCTASection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import Footer from "@/components/sections/Footer";
import BookDemoModal from "@/components/forms/BookDemoModal";

export default function HomePageClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Hero onBookDemo={openModal} />
      <ProofStrip />
      <PlatformSection />
      <AISection />
      <AppStoreSection />
      <CadenceCareSection />
      <MidCTASection onBookDemo={openModal} />
      <ComparisonSection />
      <Footer onBookDemo={openModal} />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
