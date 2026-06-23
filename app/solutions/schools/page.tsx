import type { Metadata } from "next";
import SolutionsSchoolsClient from "./SolutionsSchoolsClient";

export const metadata: Metadata = {
  title: "School ERP for CBSE, ICSE, IB & Cambridge Schools — Cadence Nova",
  description: "Nova handles APAAR, OASIS, UDISE, LOC, and HPC compliance automatically. Purpose-built for CBSE, ICSE, IB, and Cambridge schools in India.",
};

export default function SolutionsSchoolsPage() {
  return <SolutionsSchoolsClient />;
}
