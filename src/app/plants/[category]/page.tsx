import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import {
  plantCategories,
  getCategoryBySlug,
  getAllCategorySlugs,
} from "@/data/plant-catalog";
import { siteContent } from "@/data/site-content";

const WA_MSG = encodeURIComponent(
  "Hi George, I saw your website and I\u2019m interested in visiting the nursery."
);

export function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await props.params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} | ${siteContent.business.name}`,
    description: cat.intro,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      {/* Header */}
      <header className="mb-12 sm:mb-16">
        <h1 className="font-site-heading font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-site-soil">
          {cat.name}
        </h1>
        <p className="mt-4 text-site-soil-muted text-base leading-relaxed max-w-2xl">
          {cat.intro}
        </p>
      </header>

      {/* Plant list */}
      <div className="space-y-14 sm:space-y-20">
        {cat.varieties.map((plant, i) => (
          <div
            key={plant.id}
            className={`flex flex-col gap-6 sm:gap-10 ${
              i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
            }`}
          >
            {/* Placeholder photo */}
            <div className="w-full sm:w-[280px] lg:w-[340px] flex-shrink-0">
              <div className="aspect-[4/3] rounded-lg bg-site-sage-light/30 flex items-center justify-center">
                <span className="text-site-soil-muted/50 text-sm font-medium">
                  {plant.name}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
                {plant.name}
              </h2>
              <p className="mt-2 text-site-soil-muted text-base leading-relaxed">
                {plant.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 sm:mt-24 text-center">
        <p className="font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
          Can&apos;t find what you&apos;re looking for?
        </p>
        <p className="mt-2 text-site-soil-muted text-base leading-relaxed">
          Call or WhatsApp George to ask about current availability.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`https://wa.me/${siteContent.business.whatsapp}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25d366] hover:bg-[#1fad54] text-white font-semibold px-6 py-3 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp George
          </Link>
          <Link
            href={`tel:${siteContent.business.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg bg-site-soil hover:bg-site-soil/90 text-white font-semibold px-6 py-3 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {siteContent.business.phone}
          </Link>
        </div>
      </div>
    </div>
  );
}
