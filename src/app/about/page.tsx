import { Phone, MessageCircle, Video, Users } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data/site-content";

const WA_MSG = encodeURIComponent(
  "Hi George, I saw your website and I\u2019m interested in visiting the nursery."
);

export const metadata = {
  title: "About | Tes Farms LLC",
  description:
    "Meet George, the founder of Tes Farms LLC. Learn how an educator from India built a nursery serving Indian families across Central Florida.",
};

export default function AboutPage() {
  const { business, about } = siteContent;

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className="font-site-heading font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-site-soil">
        About Tes Farms
      </h1>

      {/* ── George intro ─────────────────────────────────── */}
      <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start">
        {/* Photo placeholder */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-site-sage-light/50 flex items-center justify-center flex-shrink-0">
          <span className="text-site-sage text-sm font-site-body text-center px-2">
            George&apos;s photo
          </span>
        </div>

        <div>
          <h2 className="font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
            Meet George
          </h2>
          <p className="mt-4 text-lg leading-[1.7] text-site-soil-muted max-w-[60ch]">
            {about.blurb}
          </p>
        </div>
      </div>

      {/* ── Mission quote ────────────────────────────────── */}
      <blockquote className="mt-10 border-l-4 border-site-sage-light pl-5">
        <p className="font-site-heading italic text-lg text-site-soil/70 max-w-[55ch]">
          &ldquo;{about.mission}&rdquo;
        </p>
      </blockquote>

      {/* ── What we offer ────────────────────────────────── */}
      <h2 className="mt-14 font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
        What we offer
      </h2>
      <ul className="mt-5 space-y-3 text-lg leading-[1.7] text-site-soil-muted list-disc list-outside pl-5">
        <li>12+ mango varieties including Alphonso, Kesar, and Neelum</li>
        <li>Tropical fruit trees, citrus, berries, and spices</li>
        <li>
          Exotic Indian plants: curry leaf, jasmine, parijat, tulsi, and more
        </li>
        <li>Growing advice from someone who knows these plants personally</li>
      </ul>

      {/* ── Visit the nursery ────────────────────────────── */}
      <h2 className="mt-14 font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
        Visit the nursery
      </h2>
      <p className="mt-4 text-lg leading-[1.7] text-site-soil-muted max-w-[60ch]">
        Tes Farms operates by appointment from George&apos;s property in
        Central Florida. Call or WhatsApp to schedule a time — George will walk
        you through what&apos;s in stock and help you pick the right plants for
        your yard.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={`https://wa.me/${business.whatsapp}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] bg-[#25d366] text-white px-8 py-4 rounded-full text-lg font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp George
        </a>
        <a
          href={`tel:${business.phone.replace(/\D/g, "")}`}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] bg-site-sage-light/40 text-site-soil border border-site-sage-light px-7 py-3.5 rounded-full text-base font-semibold font-site-body transition-colors duration-200 hover:bg-site-sage-light/70"
        >
          <Phone className="w-5 h-5" />
          Call {business.phone}
        </a>
      </div>

      {/* ── Social links ─────────────────────────────────── */}
      <div className="mt-8 flex items-center gap-2 text-sm text-site-soil-muted font-site-body">
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
    </div>
  );
}
