import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { plantCatalog } from "@/data/plant-catalog";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export default function HomePage() {
  const { homepage, business } = siteContent;
  const featured = plantCatalog.filter((p) => p.featured);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-site-forest text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(68,130,100,0.4)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-32">
          <h1 className="font-site-heading font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
            {homepage.hero.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            {homepage.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-site-sage-light/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {homepage.highlights.map((h) => (
              <RevealOnScroll key={h.label}>
                <p className="font-site-heading font-bold text-4xl text-site-forest">
                  {h.stat}
                </p>
                <p className="mt-1 font-semibold text-site-soil">{h.label}</p>
                <p className="mt-1 text-sm text-site-soil-muted">{h.detail}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Plants ─────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-3xl sm:text-4xl text-site-forest">
              Plants from back home
            </h2>
            <p className="mt-3 text-site-soil-muted text-lg max-w-2xl leading-relaxed">
              The trees, flowers, and herbs that Indian families grew up with
              &mdash; hard to find at regular nurseries, thriving at Tess Farms.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((plant, i) => (
              <RevealOnScroll key={plant.id} delay={i * 80}>
                <div className="group bg-site-cream rounded-2xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg border border-site-sage-light/40">
                  <span className="text-4xl">{plant.icon}</span>
                  <h3 className="mt-4 font-site-heading font-bold text-xl text-site-forest">
                    {plant.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-site-sage">
                    {plant.tagline}
                  </p>
                  <p className="mt-3 text-site-soil-muted text-sm leading-relaxed line-clamp-3">
                    {plant.description}
                  </p>
                  {plant.varieties.length > 1 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {plant.varieties.slice(0, 4).map((v) => (
                        <span
                          key={v}
                          className="inline-block bg-site-sage-light text-site-forest text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {v}
                        </span>
                      ))}
                      {plant.varieties.length > 4 && (
                        <span className="inline-block text-site-soil-muted text-xs font-medium px-2.5 py-1">
                          +{plant.varieties.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="mt-10 text-center">
            <Link
              href="/plants"
              className="inline-flex items-center gap-2 text-site-terracotta font-semibold font-site-body hover:underline underline-offset-4"
            >
              See all {plantCatalog.length} plant categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── George's Story Teaser ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-site-heading text-2xl sm:text-3xl text-site-forest leading-snug font-medium italic">
                &ldquo;{homepage.aboutTeaser.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-site-soil-muted font-site-body">
                &mdash; {homepage.aboutTeaser.attribution}
              </p>
              <Link
                href={homepage.aboutTeaser.linkHref}
                className="mt-6 inline-flex items-center gap-2 text-site-terracotta font-semibold font-site-body hover:underline underline-offset-4"
              >
                {homepage.aboutTeaser.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-forest text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-3xl sm:text-4xl">
              Ready to grow something from home?
            </h2>
            <p className="mt-3 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
              Call or WhatsApp George to schedule a visit. He&apos;ll help you
              pick the right plants for your yard and teach you how to grow them.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
                Call {business.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Serving {business.address.serving}
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
