import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { plantCatalog } from "@/data/plant-catalog";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export default function HomePage() {
  const { homepage, business } = siteContent;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80"
          alt="Rows of tropical plants in a sunlit nursery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 w-full mx-auto max-w-6xl px-5 sm:px-8 pb-16 sm:pb-24">
          <h1 className="font-site-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-2xl">
            {homepage.hero.headline}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
            {homepage.hero.subheadline}
          </p>
          <Link
            href={homepage.hero.ctaHref}
            className="mt-8 inline-flex items-center gap-2 bg-site-terracotta text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-site-terracotta-hover"
          >
            {homepage.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── What We Grow ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-3xl sm:text-4xl text-site-forest">
              What we grow
            </h2>
            <p className="mt-3 text-site-soil-muted text-lg max-w-2xl leading-relaxed">
              Tropical and subtropical fruit trees raised in South Florida's climate.
              Each one grown with time and care.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plantCatalog.map((plant, i) => (
              <RevealOnScroll key={plant.id} delay={i * 80}>
                <Link
                  href="/plants"
                  className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={plant.image}
                    alt={plant.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-site-heading font-bold text-xl text-white">
                      {plant.name}
                    </p>
                    <p className="text-sm text-white/70 mt-0.5">
                      {plant.varieties.length} varieties available
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll className="mt-10 text-center">
            <Link
              href="/plants"
              className="inline-flex items-center gap-2 text-site-terracotta font-semibold font-site-body hover:underline underline-offset-4"
            >
              See all plants
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── About Teaser ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=960&q=80"
                  alt="Hands tending to young plants in rich soil at a nursery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
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
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Visit CTA ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-forest text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-3xl sm:text-4xl">
              Come see what&apos;s growing
            </h2>
            <p className="mt-3 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
              The best way to pick your plants is in person. Walk the rows, ask
              questions, and find exactly what your yard needs.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-site-sage-light mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-white/90">{business.address.street}</p>
                  <p className="text-sm text-white/90">
                    {business.address.city}, {business.address.state}{" "}
                    {business.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-site-sage-light mt-0.5 shrink-0" />
                <div className="text-sm text-white/90 space-y-0.5">
                  <p>{business.hours.weekdays}</p>
                  <p>{business.hours.saturday}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-site-sage-light mt-0.5 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            <Link
              href="/visit"
              className="mt-10 inline-flex items-center gap-2 bg-site-terracotta text-white px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-site-terracotta-hover"
            >
              Plan your visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
