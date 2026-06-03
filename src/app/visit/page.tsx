import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Tess Farms in Homestead, FL. Find our hours, location, directions, and contact info. Walk-ins welcome during business hours.",
};

export default function VisitPage() {
  const { visit, business } = siteContent;

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-12 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h1 className="font-site-heading font-bold text-4xl sm:text-5xl text-site-forest leading-tight">
              {visit.headline}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-site-soil-muted max-w-2xl leading-relaxed">
              {visit.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Info Grid ───────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address */}
            <RevealOnScroll>
              <div className="bg-site-cream rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-site-sage-light rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-site-sage" />
                  </div>
                  <h2 className="font-site-heading font-bold text-lg text-site-forest">
                    Location
                  </h2>
                </div>
                <p className="text-site-soil leading-relaxed">
                  {business.address.street}
                </p>
                <p className="text-site-soil">
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-site-terracotta font-semibold text-sm hover:underline underline-offset-4"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get directions
                </a>
              </div>
            </RevealOnScroll>

            {/* Hours */}
            <RevealOnScroll delay={100}>
              <div className="bg-site-cream rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-site-sage-light rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-site-sage" />
                  </div>
                  <h2 className="font-site-heading font-bold text-lg text-site-forest">
                    Hours
                  </h2>
                </div>
                <div className="space-y-1.5 text-site-soil">
                  <p>{business.hours.weekdays}</p>
                  <p>{business.hours.saturday}</p>
                  <p className="text-site-soil-muted">{business.hours.sunday}</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Phone */}
            <RevealOnScroll delay={200}>
              <div className="bg-site-cream rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-site-sage-light rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-site-sage" />
                  </div>
                  <h2 className="font-site-heading font-bold text-lg text-site-forest">
                    Call us
                  </h2>
                </div>
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-2xl font-site-heading font-bold text-site-forest hover:text-site-sage transition-colors"
                >
                  {business.phone}
                </a>
                <p className="mt-2 text-sm text-site-soil-muted">
                  {visit.mapNote}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Directions + Photo ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                  Finding us
                </h2>
                <p className="mt-4 text-site-soil leading-relaxed text-base sm:text-lg">
                  {visit.directions}
                </p>
                <p className="mt-3 text-site-soil-muted text-sm">
                  {visit.mapNote}
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=960&q=80"
                  alt="Gravel path leading to a plant nursery entrance with green signage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Map Embed ───────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <RevealOnScroll>
            <div className="rounded-2xl overflow-hidden border border-site-sage-light">
              <div className="aspect-[16/9] sm:aspect-[21/9] bg-site-sage-light/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-site-sage mx-auto mb-2" />
                  <p className="text-site-soil-muted text-sm">
                    Interactive map coming soon
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-site-terracotta font-semibold text-sm hover:underline underline-offset-4"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── JSON-LD Structured Data ─────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tess Farms LLC",
            description:
              "A family nursery in South Florida specializing in tropical fruit trees.",
            telephone: business.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: business.address.street,
              addressLocality: business.address.city,
              addressRegion: business.address.state,
              postalCode: business.address.zip,
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "15:00",
              },
            ],
          }),
        }}
      />
    </>
  );
}
