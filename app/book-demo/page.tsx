import type { Metadata } from "next";
import BookDemoPageClient from "./BookDemoPageClient";

export const metadata: Metadata = {
  title: "Book a Demo — Cadence Nova",
  description: "Book a personalised 30-minute demo of Cadence Nova for your school. No commitment required.",
};

export default function BookDemoPage() {
  return <BookDemoPageClient />;
}
