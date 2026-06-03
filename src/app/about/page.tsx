import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tess Farms LLC, a family-run plant nursery in South Florida growing tropical fruit trees with care and patience.",
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-12 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h1 className="font-site-heading font-bold text-4xl sm:text-5xl text-site-forest leading-tight">
              {about.headline}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-site-soil-muted max-w-2xl leading-relaxed">
              {about.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Photo + Story ───────────────────────────────────── */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=960&q=80"
                  alt="Nursery rows of young tropical trees in morning light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                  {about.philosophy.headline}
                </h2>
                <p className="mt-4 text-site-soil leading-relaxed text-base sm:text-lg">
                  {about.philosophy.text}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest text-center">
              What we stand for
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {about.values.map((value, i) => (
              <RevealOnScroll key={value.title} delay={i * 100}>
                <div className="text-center sm:text-left">
                  <h3 className="font-site-heading font-bold text-xl text-site-forest">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-site-soil-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest mb-10">
              Around the nursery
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=640&q=80",
                alt: "Tropical greenhouse with rows of potted plants stretching into the distance",
              },
              {
                src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=640&q=80",
                alt: "Young fruit trees growing in containers under shade cloth",
              },
              {
                src: "https://images.unsplash.com/photo-1501004318855-ed801e3e4dbb?auto=format&fit=crop&w=640&q=80",
                alt: "Close-up of rich potting soil with newly planted seedlings",
              },
            ].map((photo, i) => (
              <RevealOnScroll key={photo.src} delay={i * 80}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
