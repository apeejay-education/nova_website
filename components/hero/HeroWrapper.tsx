"use client";

import { useState } from "react";
import Hero from "./Hero";
import BookDemoModal from "@/components/forms/BookDemoModal";
import VideoModal from "@/components/hero/VideoModal";

export default function HeroWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Hero
        onBookDemo={() => setModalOpen(true)}
        onWatchVideo={() => setVideoOpen(true)}
      />
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  );
}
