import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Calendar, ShoppingBag } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Schedule a visit to Tess Farms in Central Florida. Call or WhatsApp George to browse Indian plants, get growing advice, and take your plants home.",
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

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {visit.howItWorks.map((step, i) => {
              const icons = [MessageCircle, Calendar, ShoppingBag];
              const Icon = icons[i];
              return (
                <RevealOnScroll key={step.step} delay={i * 100}>
                  <div className="bg-site-cream rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-site-sage-light rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-site-sage" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-site-sage uppercase tracking-wider">
                          Step {step.step}
                        </p>
                        <h2 className="font-site-heading font-bold text-lg text-site-forest">
                          {step.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-site-soil-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                Get in touch
              </h2>
              <p className="mt-4 text-site-soil leading-relaxed text-base sm:text-lg">
                The easiest way to reach George is WhatsApp. You can also call
                directly. Let him know what plants you&apos;re looking for and
                he&apos;ll let you know what&apos;s in stock.
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
                  className="inline-flex items-center justify-center gap-2 bg-site-terracotta text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-site-terracotta-hover"
                >
                  <Phone className="w-5 h-5" />
                  {business.phone}
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Serving Area ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-12 h-12 bg-site-sage-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-site-sage" />
              </div>
              <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                Serving Central Florida
              </h2>
              <p className="mt-4 text-lg text-site-soil-muted">
                {visit.servingAreas}
              </p>
              <p className="mt-3 text-sm text-site-soil-muted">
                The nursery is appointment-only from George&apos;s property.
                Call or WhatsApp for the address when scheduling your visit.
              </p>
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
