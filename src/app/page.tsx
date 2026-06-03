import { Phone, MessageCircle, Calendar, ShoppingBag, Video, Users } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { plantCatalog } from "@/data/plant-catalog";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

export default function HomePage() {
  const { homepage, about, visit, business } = siteContent;
  const featured = plantCatalog.filter((p) => p.featured);
  const remaining = plantCatalog.filter((p) => !p.featured);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="hero" className="relative bg-site-forest text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(68,130,100,0.4)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <h1 className="font-site-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl">
                {homepage.hero.headline}
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                {homepage.hero.subheadline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
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

            {/* George's Photo Placeholder */}
            <div className="mt-10 lg:mt-0 flex-shrink-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-2xl bg-white/10 overflow-hidden">
                  <Image
                    src="/george-placeholder.jpg"
                    alt="George, founder of Tess Farms"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
                    unoptimized
                  />
                  {/* Fallback if image doesn't exist yet */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white/40">
                      <span className="text-6xl block mb-2">🌿</span>
                      <span className="text-sm font-site-body">George&apos;s photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <section className="bg-white border-b border-site-sage-light/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {homepage.highlights.map((h) => (
              <div key={h.label}>
                <p className="font-site-heading font-bold text-2xl sm:text-4xl text-site-forest">
                  {h.stat}
                </p>
                <p className="mt-1 font-semibold text-site-soil text-sm sm:text-base">{h.label}</p>
                <p className="mt-0.5 text-xs sm:text-sm text-site-soil-muted hidden sm:block">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About George ──────────────────────────────────── */}
      <section id="about" className="py-16 sm:py-24 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-site-sage uppercase tracking-wider font-site-body mb-3">
                Meet George
              </p>
              <h2 className="font-site-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-site-forest leading-tight">
                {about.headline}
              </h2>
              <p className="mt-5 text-site-soil leading-relaxed text-base sm:text-lg">
                {about.intro}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-12 max-w-3xl">
              <h3 className="font-site-heading font-bold text-xl sm:text-2xl text-site-forest">
                {about.story.headline}
              </h3>
              <p className="mt-3 text-site-soil leading-relaxed text-base sm:text-lg">
                {about.story.text}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-12 max-w-3xl">
              <h3 className="font-site-heading font-bold text-xl sm:text-2xl text-site-forest">
                {about.educator.headline}
              </h3>
              <p className="mt-3 text-site-soil leading-relaxed text-base sm:text-lg">
                {about.educator.text}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-12 flex items-center gap-4 text-sm text-site-soil-muted font-site-body">
              <span>Follow George:</span>
              <a
                href={business.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-site-forest transition-colors"
              >
                <Video className="w-4 h-4" />
                YouTube
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-site-forest transition-colors"
              >
                <Users className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Mission Quote ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <RevealOnScroll>
            <blockquote className="font-site-heading text-xl sm:text-2xl lg:text-3xl text-site-forest leading-snug font-medium italic">
              &ldquo;{about.mission}&rdquo;
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── What We Grow ──────────────────────────────────── */}
      <section id="plants" className="py-16 sm:py-24 bg-site-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-site-forest">
              Plants from back home
            </h2>
            <p className="mt-3 text-site-soil-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              The trees, flowers, and herbs that Indian families grew up with.
              Stock changes with the season; call or WhatsApp for current availability.
            </p>
          </RevealOnScroll>

          {/* Featured plants — larger cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featured.map((plant, i) => (
              <RevealOnScroll key={plant.id} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg border border-site-sage-light/40">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">{plant.icon}</span>
                    <div>
                      <h3 className="font-site-heading font-bold text-lg sm:text-xl text-site-forest">
                        {plant.name}
                      </h3>
                      <p className="text-sm font-medium text-site-sage">
                        {plant.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-site-soil-muted text-sm sm:text-base leading-relaxed">
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

          {/* Remaining plants — compact list */}
          <RevealOnScroll>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {remaining.map((plant) => (
                <div
                  key={plant.id}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-site-sage-light/30"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{plant.icon}</span>
                  <div>
                    <h3 className="font-site-heading font-bold text-base text-site-forest">
                      {plant.name}
                    </h3>
                    <p className="text-sm text-site-soil-muted leading-relaxed mt-0.5">
                      {plant.tagline}
                    </p>
                    {plant.varieties.length > 0 && plant.varieties[0] !== plant.name && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {plant.varieties.map((v) => (
                          <span
                            key={v}
                            className="inline-block bg-site-sage-light text-site-forest text-xs font-medium px-2 py-0.5 rounded-full"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section id="visit" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-site-forest text-center">
              How to visit
            </h2>
            <p className="mt-3 text-site-soil-muted text-center text-base sm:text-lg max-w-xl mx-auto">
              {visit.intro}
            </p>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {visit.howItWorks.map((step, i) => {
              const icons = [MessageCircle, Calendar, ShoppingBag];
              const Icon = icons[i];
              return (
                <RevealOnScroll key={step.step} delay={i * 100}>
                  <div className="bg-site-cream rounded-2xl p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 bg-site-sage-light rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-site-sage" />
                    </div>
                    <p className="mt-3 text-xs font-semibold text-site-sage uppercase tracking-wider font-site-body">
                      Step {step.step}
                    </p>
                    <h3 className="mt-1 font-site-heading font-bold text-lg text-site-forest">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-site-soil-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-site-forest text-white">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-2xl sm:text-3xl lg:text-4xl">
              Ready to grow something from home?
            </h2>
            <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
              Call or WhatsApp George to schedule a visit. He&apos;ll help you
              pick the right plants for your yard and teach you how to grow them.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
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
            <p className="mt-6 text-sm text-white/50">
              Serving {business.address.serving}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Floating WhatsApp ──────────────────────────────── */}
      <FloatingWhatsApp phone={business.whatsapp} />

      {/* ── JSON-LD ────────────────────────────────────────── */}
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
