import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { plantCategories } from "@/data/plant-catalog";
import { siteContent } from "@/data/site-content";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=1920&q=80";

const WA_MSG = encodeURIComponent(
  "Hi George, I saw your website and I\u2019m interested in visiting the nursery."
);

export default function HomePage() {
  const { about, business } = siteContent;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <Image
          src={HERO_PHOTO}
          alt="Lush tropical garden with dense green foliage in warm sunlight"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.14 0.02 60 / 0.88) 0%, oklch(0.14 0.02 60 / 0.5) 40%, oklch(0.14 0.02 60 / 0.15) 70%, transparent 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-4xl px-6 sm:px-10 lg:px-16 pb-14 sm:pb-20 lg:pb-24">
          <h1 className="font-site-heading font-bold text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.1] tracking-tight text-white max-w-[18ch]">
            The plants you grew up with, growing right here in Florida
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-white/90 max-w-[50ch]">
            Indian fruit trees, fragrant flowers, and kitchen-garden essentials
            raised in Central Florida soil.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${business.whatsapp}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-full text-lg font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp George
            </a>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-white/20"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Category Cards ───────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <h2 className="font-site-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-site-soil">
            What we grow
          </h2>
          <p className="mt-3 text-site-soil-muted text-base sm:text-lg max-w-[55ch] leading-relaxed">
            Stock changes with the season. Tap a category to see varieties.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {plantCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/plants/${category.slug}`}
                className="group flex flex-col items-center gap-3 rounded-2xl bg-site-cream p-6 sm:p-8 text-center transition-colors hover:bg-site-sage-light/60"
              >
                <span className="text-4xl sm:text-5xl" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="font-site-heading font-semibold text-base sm:text-lg text-site-soil group-hover:text-site-forest transition-colors">
                  {category.name}
                </span>
                <span className="text-sm text-site-sage font-semibold">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About George ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-site-cream">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden bg-site-sage-light/50 flex-shrink-0 flex items-center justify-center">
              <span className="text-site-sage text-sm font-site-body text-center px-2">
                George&apos;s photo
              </span>
            </div>
            <div>
              <h2 className="font-site-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-site-soil">
                {about.headline}
              </h2>
              <p className="mt-4 text-lg leading-[1.7] text-site-soil-muted max-w-[60ch]">
                {about.blurb}
              </p>
              <Link
                href="/about"
                className="mt-5 inline-block text-site-sage font-semibold hover:text-site-forest transition-colors underline underline-offset-2"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours & Contact ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-site-forest text-white">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="font-site-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight">
            Visit the nursery
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-[45ch] mx-auto">
            By appointment only. Call or WhatsApp to schedule.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${business.whatsapp}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-full text-lg font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp George
            </a>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-white/20"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
          <p className="mt-8 text-sm text-white/60">
            Serving {business.address.serving}
          </p>
        </div>
      </section>

      {/* ── Floating WhatsApp ─────────────────────────────── */}
      <FloatingWhatsApp phone={business.whatsapp} />

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tess Farms LLC",
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
