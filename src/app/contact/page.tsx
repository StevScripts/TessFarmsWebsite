import { Phone, MessageCircle, Video, Users } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data/site-content";

const WA_MSG = encodeURIComponent(
  "Hi George, I saw your website and I\u2019m interested in visiting the nursery."
);

export const metadata = {
  title: "Contact | Tes Farms LLC",
  description:
    "Call or WhatsApp George at Tes Farms LLC. By-appointment nursery in Central Florida specializing in Indian plants and tropical fruit trees.",
};

export default function ContactPage() {
  const { business } = siteContent;

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className="font-site-heading font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-site-soil">
        Contact Us
      </h1>
      <p className="mt-5 text-lg leading-[1.7] text-site-soil-muted max-w-[60ch]">
        The best way to reach George is by WhatsApp or phone. He&apos;ll answer
        your questions about plants, availability, and scheduling a visit.
      </p>

      {/* ── CTAs ─────────────────────────────────────────── */}
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

      {/* ── Details ───────────────────────────────────────── */}
      <h2 className="mt-14 font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
        Details
      </h2>
      <dl className="mt-5 space-y-4 text-lg leading-[1.7] text-site-soil-muted">
        <div>
          <dt className="font-semibold text-site-soil">Phone</dt>
          <dd>
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="min-h-[44px] inline-flex items-center underline underline-offset-2 hover:text-site-soil transition-colors"
            >
              {business.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-site-soil">Hours</dt>
          <dd>{business.hours.note}</dd>
        </div>
        <div>
          <dt className="font-semibold text-site-soil">Serving</dt>
          <dd>{business.address.serving}</dd>
        </div>
      </dl>

      {/* ── Follow along ─────────────────────────────────── */}
      <h2 className="mt-14 font-site-heading font-bold text-xl sm:text-2xl text-site-soil">
        Follow along
      </h2>
      <div className="mt-5 flex items-center gap-2 text-sm text-site-soil-muted font-site-body">
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
