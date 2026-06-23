import type { Metadata } from "next";
import IgcsePageClient from "./IgcsePageClient";

export const metadata: Metadata = {
  title: "School ERP for Cambridge IGCSE Schools — Cadence Nova",
  description: "CAIE Centre Administration export, A*–G grading, predicted grades, multi-currency fees — Nova is being built for Cambridge International schools in India.",
};

export default function IgcsePage() {
  return <IgcsePageClient />;
}
