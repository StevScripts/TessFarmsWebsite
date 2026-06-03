import type { Metadata } from "next";
import { MessageCircle, Video, Users } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet George, founder of Tess Farms. An Indian immigrant, educator, and plant grower bringing the trees and flowers of home to Central Florida families.",
};

export default function AboutPage() {
  const { about, business } = siteContent;

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-12 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <h1 className="font-site-heading font-bold text-4xl sm:text-5xl text-site-forest leading-tight max-w-2xl">
              {about.headline}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-site-soil-muted max-w-2xl leading-relaxed">
              {about.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── From backyard to nursery ──────────────────────── */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                {about.story.headline}
              </h2>
              <p className="mt-4 text-site-soil leading-relaxed text-base sm:text-lg">
                {about.story.text}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Educator ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-site-sage-light/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <h2 className="font-site-heading font-bold text-2xl sm:text-3xl text-site-forest">
                {about.educator.headline}
              </h2>
              <p className="mt-4 text-site-soil leading-relaxed text-base sm:text-lg">
                {about.educator.text}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold text-site-sage uppercase tracking-wider mb-4">
                Our mission
              </p>
              <blockquote className="font-site-heading text-2xl sm:text-3xl text-site-forest leading-snug font-medium italic">
                &ldquo;{about.mission}&rdquo;
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Connect ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-site-forest text-white text-center">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-site-heading font-bold text-2xl sm:text-3xl">
              Follow George&apos;s journey
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              George shares growing tips, plant care guides, and nursery updates
              on YouTube and Facebook.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={business.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-red-700"
              >
                <Video className="w-5 h-5" />
                YouTube
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-blue-700"
              >
                <Users className="w-5 h-5" />
                Facebook
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-green-700"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
