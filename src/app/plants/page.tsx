import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { plantCatalog } from "@/data/plant-catalog";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Plants",
  description:
    "Browse Indian plants at Tess Farms: Alphonso mango, curry leaf, jasmine, guava, parijat, sapodilla (chiku), fig, papaya & more. Central Florida grown.",
};

export default function PlantsPage() {
  const { plants, business } = siteContent;

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-12 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h1 className="font-site-heading font-bold text-4xl sm:text-5xl text-site-forest leading-tight">
              {plants.headline}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-site-soil-muted max-w-2xl leading-relaxed">
              {plants.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Plant Sections ──────────────────────────────────── */}
      {plantCatalog.map((plant, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={plant.id}
            className={`py-16 sm:py-20 ${isEven ? "bg-white" : "bg-site-sage-light/30"}`}
          >
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <RevealOnScroll>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{plant.icon}</span>
                    <div>
                      <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                        {plant.name}
                      </h2>
                      <p className="text-sm font-medium text-site-sage">
                        {plant.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-site-soil leading-relaxed text-base sm:text-lg">
                    {plant.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {plant.varieties.map((v) => (
                      <span
                        key={v}
                        className="inline-block bg-site-sage-light text-site-forest text-sm font-medium px-3 py-1.5 rounded-full"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        );
      })}

      {/* ── Seasonal Note + CTA ───────────────────────────── */}
      <section className="py-16 sm:py-20 bg-site-forest text-white text-center">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="font-site-heading text-xl sm:text-2xl font-medium leading-relaxed">
              {plants.seasonalNote}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-green-700"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp George
              </a>
              <a
                href={`tel:${business.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-white/20"
              >
                <Phone className="w-5 h-5" />
                {business.phone}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
