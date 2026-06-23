import type { Metadata } from "next";
import IbPageClient from "./IbPageClient";

export const metadata: Metadata = {
  title: "School ERP for IB World Schools — Cadence Nova",
  description: "CAS tracker, IA pipeline, predicted grades, EE supervision — Nova is designed for IB DP, MYP, and PYP schools. Coming soon to India's IB World Schools.",
};

export default function IbPage() {
  return <IbPageClient />;
}
