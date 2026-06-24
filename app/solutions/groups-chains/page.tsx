import type { Metadata } from "next";
import GroupsPageClient from "./GroupsPageClient";

export const metadata: Metadata = {
  title: "School ERP for Groups & Chains — Cadence Nova",
  description: "One dashboard for every campus. Consolidated financials, cross-campus HR, fee template engine, and campus onboarding — built for school groups that outgrew single-school ERPs.",
};

export default function GroupsPage() {
  return <GroupsPageClient />;
}
