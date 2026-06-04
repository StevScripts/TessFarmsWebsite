import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { plantCategories } from "@/data/plant-catalog";
import { siteContent } from "@/data/site-content";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

const WA_MSG = encodeURIComponent(
  "Hi George, I saw your website and I\u2019m interested in visiting the nursery."
);

/** Hand-picked plants to feature per category for recognition */
const FEATURED: Record<string, string[]> = {
  mangoes: ["Alphonso", "Kesar", "Kent", "Nam Doc Mai", "Coconut Cream"],
  avocados: ["Brogdon", "Choquette", "Day", "Super Hass"],
  "fruit-trees": ["Lychee", "Jackfruit", "Guava", "Sapodilla (Chikoo)", "Dragon Fruit"],
  "berries-nuts-spices": ["Turmeric", "Moringa (Drumstick)", "Black Pepper", "Tamarind"],
  "citrus-trees": ["Meyer Lemon", "Kumquat", "Key Lime"],
  "exotic-indian-plants": ["Curry Leaf", "Jasmine (Mysore Mallige)", "Parijat (Night Jasmine)", "Tulsi (Holy Basil)"],
};

export default function HomePage() {
  const { about, business } = siteContent;

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ── Header ─────────────────────────────────────── */}
        <header className="pt-10 sm:pt-14 pb-8">
          <h1 className="font-site-heading font-bold text-2xl sm:text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] text-site-soil max-w-[22ch]">
            The plants you grew up with, growing right here in Florida
          </h1>
          <p className="mt-3 text-base sm:text-lg text-site-soil-muted leading-relaxed max-w-[58ch]">
            Alphonso mango, curry leaf, jasmine, parijat, and 80+ more varieties.
            Raised in Central Florida soil by George, an educator and grower
            serving the Indian community for over five years.
          </p>
          <p className="mt-1.5 text-sm text-site-sage font-medium">
            Serving Lake Nona, St. Cloud, Kissimmee &amp; surrounding communities
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
            <a
              href={`https://wa.me/${business.whatsapp}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54] min-h-[44px]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp George
            </a>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-site-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors duration-200 hover:bg-site-forest/90 min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
        </header>

        {/* ── Plant categories ───────────────────────────── */}
        <section className="pb-10 sm:pb-14 space-y-3">
          {plantCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/plants/${cat.slug}`}
              className="group block rounded-xl bg-site-cream px-5 py-4 transition-colors hover:bg-site-sage-light/50"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-site-heading font-semibold text-base sm:text-[0.9375rem] text-site-soil group-hover:text-site-forest transition-colors">
                  {cat.name}
                  <span className="ml-2 text-xs text-site-sage font-medium">
                    {cat.varieties.length} varieties
                  </span>
                </h2>
                <span className="text-xs text-site-sage font-semibold whitespace-nowrap">
                  View all &rarr;
                </span>
              </div>
              <p className="mt-1 text-sm text-site-soil-muted leading-relaxed">
                {(FEATURED[cat.slug] || []).join(" \u00b7 ")}
              </p>
            </Link>
          ))}
        </section>

        {/* ── About George ───────────────────────────────── */}
        <section className="pb-10 sm:pb-14 border-t border-site-sage-light/40 pt-8">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-site-sage-light/50 flex-shrink-0 flex items-center justify-center">
              <span className="text-site-sage text-xs font-site-body text-center px-1">
                George&apos;s photo
              </span>
            </div>
            <div>
              <h2 className="font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
                {about.headline}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-site-soil-muted max-w-[60ch]">
                {about.blurb}
              </p>
              <Link
                href="/about"
                className="mt-3 inline-block text-site-forest font-semibold text-sm hover:underline underline-offset-2 transition-colors"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ────────────────────────────────── */}
        <section className="pb-10 sm:pb-14">
          <div className="rounded-xl bg-site-forest px-6 py-6 text-white">
            <p className="font-site-heading font-semibold text-base sm:text-lg">
              Visit the nursery
            </p>
            <p className="mt-1 text-sm text-white/80">
              By appointment only. Call or WhatsApp to schedule a time.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`https://wa.me/${business.whatsapp}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors hover:bg-[#1fad54] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp George
              </a>
              <a
                href={`tel:${business.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors hover:bg-white/20 min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                {business.phone}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── Floating WhatsApp ─────────────────────────────── */}
      <FloatingWhatsApp phone={business.whatsapp} />

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tes Farms LLC",
            url: "https://tessfarms.com",
            description:
              "Indian plants and tropical fruit trees in Central Florida. Alphonso mango, curry leaf, jasmine, guava, and more.",
            telephone: business.phone,
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 28.3747,
                longitude: -81.2603,
              },
              geoRadius: "80000",
            },
            sameAs: [
              business.social.youtube,
              business.social.facebook,
            ],
          }),
        }}
      />
    </>
  );
}
