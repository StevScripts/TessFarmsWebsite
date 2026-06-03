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
              A family nursery in South Florida growing tropical plants with
              patience and care.
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
              Visit Us
            </p>
            <div className="text-sm text-white/70 leading-relaxed space-y-1.5">
              <p>{business.address.street}</p>
              <p>
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
              <a
                href={`tel:${business.phone.replace(/\D/g, "")}`}
                className="block mt-3 text-white hover:text-site-sage-light transition-colors"
              >
                {business.phone}
              </a>
              <div className="mt-4 space-y-0.5 text-white/50 text-xs">
                <p>{business.hours.weekdays}</p>
                <p>{business.hours.saturday}</p>
                <p>{business.hours.sunday}</p>
              </div>
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
