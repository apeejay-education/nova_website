import { PageLayout, PageHero } from "@/components/ui/PageLayout";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Resources"
        headline="Insights for school leaders."
        sub="Articles, guides, and product updates from the Cadence team."
      />
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-nova-frost border border-divider rounded-2xl px-8 py-12">
            <p className="text-2xl font-bold text-nova-indigo mb-3">Blog coming soon.</p>
            <p className="text-text-secondary mb-6">
              Our full blog lives at{" "}
              <Link
                href="https://cadenceinfotech.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nova-blue hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                cadenceinfotech.com/blog
                <ArrowUpRight size={14} />
              </Link>
            </p>
            <p className="text-sm text-text-secondary">
              Nova-specific resources will be published here after launch.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
