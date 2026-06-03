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
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden">
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
        <div className="relative z-10 w-full max-w-4xl px-5 sm:px-8 pb-10 sm:pb-14">
          <h1 className="font-site-heading font-bold text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.1] tracking-tight text-white max-w-[18ch]">
            The plants you grew up with, growing right here in Florida
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/90 max-w-[50ch]">
            Indian fruit trees, fragrant flowers, and kitchen-garden essentials
            raised in Central Florida soil.
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors duration-200 hover:bg-white/20 min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Category Cards ───────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
            What we grow
          </h2>
          <p className="mt-1.5 text-site-soil-muted text-sm sm:text-base max-w-[55ch]">
            Stock changes with the season. Tap a category to see varieties.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {plantCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/plants/${category.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl bg-site-cream p-4 sm:p-5 text-center transition-colors hover:bg-site-sage-light/60"
              >
                <span className="text-3xl sm:text-4xl" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="font-site-heading font-semibold text-sm sm:text-base text-site-soil group-hover:text-site-forest transition-colors">
                  {category.name}
                </span>
                <span className="text-xs text-site-sage font-semibold">
                  {category.varieties.length} varieties &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About George ─────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-site-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
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
                className="mt-3 inline-block text-site-sage font-semibold text-sm hover:text-site-forest transition-colors underline underline-offset-2"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours & Contact ──────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-site-forest text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <h2 className="font-site-heading font-bold text-xl sm:text-2xl">
            Visit the nursery
          </h2>
          <p className="mt-2 text-base text-white/85 max-w-[45ch] mx-auto">
            By appointment only. Call or WhatsApp to schedule.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-2.5 justify-center">
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors duration-200 hover:bg-white/20 min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
          <p className="mt-5 text-xs text-white/60">
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
