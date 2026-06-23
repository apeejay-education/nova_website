import type { Metadata } from "next";
import IcsePageClient from "./IcsePageClient";

export const metadata: Metadata = {
  title: "School ERP for ICSE Schools — Cadence Nova",
  description: "CAREERS portal export, 80/20 assessment splits, SUPW tracker — Nova is built natively for CISCE-affiliated ICSE and ISC schools.",
};

export default function IcsePage() {
  return <IcsePageClient />;
}
