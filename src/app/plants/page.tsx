import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { plantCatalog } from "@/data/plant-catalog";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Plants",
  description:
    "Browse tropical and subtropical plants at Tess Farms: mango, avocado, citrus, lychee, jackfruit, and ornamentals. South Florida grown.",
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
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    !isEven ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={plant.image}
                      alt={plant.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                      {plant.name}
                    </h2>
                    <p className="mt-3 text-site-soil leading-relaxed text-base sm:text-lg">
                      {plant.description}
                    </p>
                    <p className="mt-4 text-sm text-site-soil-muted">
                      {plant.sizes}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {plant.varieties.map((v) => (
                        <span
                          key={v}
                          className="inline-block bg-site-sage-light text-site-forest text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        );
      })}

      {/* ── Seasonal Note ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-site-forest text-white text-center">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="font-site-heading text-xl sm:text-2xl font-medium leading-relaxed">
              {plants.seasonalNote}
            </p>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="mt-6 inline-flex items-center gap-2 bg-site-terracotta text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-site-terracotta-hover"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
