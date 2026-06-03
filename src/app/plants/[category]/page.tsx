import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import {
  getCategoryBySlug,
  getAllCategorySlugs,
} from "@/data/plant-catalog";
import { siteContent } from "@/data/site-content";

const WA_MSG = encodeURIComponent(
  "Hi George, I\u2019m interested in learning more about your plants."
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
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-soil">
            {cat.name}
          </h1>
          <p className="mt-1.5 text-site-soil-muted text-sm sm:text-base leading-relaxed max-w-[65ch]">
            {cat.intro}
          </p>
        </div>

        {/* Variety grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cat.varieties.map((plant) => (
            <div
              key={plant.id}
              className="rounded-xl bg-site-cream px-4 py-3.5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-site-heading font-semibold text-[0.9375rem] text-site-soil leading-snug">
                  {plant.name}
                </h2>
                {plant.season && (
                  <span className="text-xs text-site-sage font-medium whitespace-nowrap">
                    {plant.season}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[0.8125rem] text-site-soil-muted leading-relaxed">
                {plant.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-xl bg-site-forest px-6 py-6 text-center text-white">
          <p className="font-site-heading font-semibold text-base sm:text-lg">
            Interested in {cat.name.toLowerCase()}?
          </p>
          <p className="mt-1 text-sm text-white/80">
            Call or WhatsApp George for availability and pricing.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
              href={`https://wa.me/${siteContent.business.whatsapp}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors hover:bg-[#1fad54] min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp George
            </a>
            <a
              href="tel:14076199561"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors hover:bg-white/20 min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              (407) 619-9561
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
