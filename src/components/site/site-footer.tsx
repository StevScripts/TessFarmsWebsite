import Link from "next/link";
import { siteContent } from "@/data/site-content";

export function SiteFooter() {
  const { business } = siteContent;

  return (
    <footer className="bg-site-forest text-white/90">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-site-heading font-bold text-xl text-white mb-3">
              Tess Farms LLC
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Indian plants and tropical fruit trees grown in Central Florida.
              Bringing the plants of home to families across Orlando.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-site-body font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
              Explore
            </p>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/plants", label: "What We Grow" },
                { href: "/visit", label: "Visit the Nursery" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-site-body font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <div className="text-sm text-white/70 leading-relaxed space-y-2">
              <a
                href={`tel:${business.phone.replace(/\D/g, "")}`}
                className="block text-white hover:text-site-sage-light transition-colors"
              >
                {business.phone}
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors"
              >
                WhatsApp George
              </a>
              <div className="flex gap-4 mt-3">
                <a
                  href={business.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-xs"
                >
                  YouTube
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-xs"
                >
                  Facebook
                </a>
              </div>
              <p className="mt-3 text-white/40 text-xs">
                Serving {business.address.serving}
              </p>
              <p className="text-white/40 text-xs">
                {business.hours.note} &mdash; {business.hours.detail}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Tess Farms LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
