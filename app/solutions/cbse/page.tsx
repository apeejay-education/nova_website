import type { Metadata } from "next";
import CbsePageClient from "./CbsePageClient";

export const metadata: Metadata = {
  title: "School ERP for CBSE Schools — Cadence Nova",
  description: "APAAR ID, OASIS, UDISE+, LOC, HPC — Nova handles every CBSE mandate automatically. Built natively for CBSE-affiliated schools in India.",
};

export default function CbsePage() {
  return <CbsePageClient />;
}
