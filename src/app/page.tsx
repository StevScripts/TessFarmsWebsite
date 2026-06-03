import { Phone, MessageCircle, Video, Users } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { plantCatalog } from "@/data/plant-catalog";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=1920&q=80";
const CTA_PHOTO =
  "https://images.unsplash.com/photo-1602298674761-700e96568f5f?auto=format&fit=crop&w=1920&q=80";

const WA_MSG = encodeURIComponent("Hi George, I saw your website and I\u2019m interested in visiting the nursery.");

export default function HomePage() {
  const { homepage, about, visit, business } = siteContent;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-[85vh] flex items-end overflow-hidden">
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
            {homepage.hero.headline}
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-white/90 max-w-[50ch]">
            Alphonso mango, curry leaf, jasmine, and more. Indian plants raised
            in Central Florida soil by George, an educator and grower serving the
            community for over five years.
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

      {/* ── About George ─────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-cream">
        <div className="max-w-3xl px-6 sm:px-10 lg:px-16">
          <RevealOnScroll>
            {/* TODO: Replace with a real photo of George in his nursery */}
            <div className="mb-8 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-site-sage-light/50 flex items-center justify-center">
              <span className="text-site-sage text-sm font-site-body text-center px-2">George&apos;s photo</span>
            </div>
            <h2 className="font-site-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-site-soil">
              {about.headline}
            </h2>
            <p className="mt-5 text-lg leading-[1.7] text-site-soil-muted max-w-[60ch]">
              {about.blurb}
            </p>
            <p className="mt-6 font-site-heading italic text-lg leading-snug text-site-soil/70 max-w-[55ch]">
              &ldquo;{about.mission}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-site-soil-muted font-site-body">
              <a
                href={business.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 min-h-[44px] rounded-lg hover:text-site-soil hover:bg-site-sage-light/40 transition-colors"
              >
                <Video className="w-5 h-5" />
                George&apos;s growing tips
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 min-h-[44px] rounded-lg hover:text-site-soil hover:bg-site-sage-light/40 transition-colors"
              >
                <Users className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── What We Grow ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-site-soil">
              What we grow
            </h2>
            <p className="mt-3 text-site-soil-muted text-base sm:text-lg max-w-[55ch] leading-relaxed">
              Stock changes with the season. Call or WhatsApp George for what&apos;s available.
            </p>
          </RevealOnScroll>

          <div className="mt-12 sm:mt-16 space-y-14 sm:space-y-20">
            {plantCatalog.map((plant, i) => (
              <RevealOnScroll key={plant.id} delay={i * 60}>
                <div className={`flex flex-col ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 sm:gap-10 items-start`}>
                  <div className="w-full sm:w-[280px] lg:w-[340px] flex-shrink-0">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={plant.photo}
                        alt={plant.photoAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 340px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
                      {plant.name}
                    </h3>
                    <p className="mt-2 text-site-soil-muted text-base leading-relaxed max-w-[50ch]">
                      {plant.tagline}
                    </p>
                    {plant.varieties.length > 1 && (
                      <p className="mt-3 text-base text-site-soil-muted/80 font-site-body">
                        <span className="font-semibold text-site-sage">Varieties:</span>{" "}
                        {plant.varieties.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="mt-14 text-site-soil-muted text-base leading-relaxed max-w-[55ch]">
              George also grows guava, parijat (night jasmine), fig, sapodilla,
              papaya, and more. The list changes with the seasons.{" "}
              <a
                href={`https://wa.me/${business.whatsapp}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-site-sage font-semibold hover:text-site-forest transition-colors underline underline-offset-2"
              >
                Ask George what&apos;s in stock
              </a>
              .
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Good to Know ──────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-site-cream">
        <div className="max-w-3xl px-6 sm:px-10 lg:px-16">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-site-soil">
              Good to know
            </h2>
            <dl className="mt-8 space-y-6">
              {siteContent.faq.map((item) => (
                <div key={item.q}>
                  <dt className="font-site-body font-semibold text-base text-site-soil">
                    {item.q}
                  </dt>
                  <dd className="mt-1.5 text-base leading-relaxed text-site-soil-muted max-w-[55ch]">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-site-soil-muted">
              Serving {business.address.serving}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src={CTA_PHOTO}
          alt="Dense tropical garden foliage bathed in warm light"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.14 0.02 60 / 0.85) 0%, oklch(0.14 0.02 60 / 0.7) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl px-6 sm:px-10 text-center">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-white">
              Ready to grow something from home?
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed max-w-[45ch] mx-auto">
              Call or WhatsApp George to schedule a visit. He&apos;ll help you
              pick the right plants for your yard and teach you how to grow them.
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
                Call {business.phone}
              </a>
            </div>
          </RevealOnScroll>
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
