"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/plants", label: "Plants" },
  { href: "/visit", label: "Visit" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-site-sage-light/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Business Name */}
          <Link
            href="/"
            className="font-site-heading font-bold text-xl sm:text-2xl text-site-forest tracking-tight"
          >
            Tess Farms
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-site-body font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-site-sage"
                      : "text-site-soil-muted hover:text-site-forest"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-site-terracotta text-white px-5 py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors duration-200 hover:bg-site-terracotta-hover"
            >
              <Phone className="w-4 h-4" />
              Call us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-site-forest"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-site-sage-light/60 bg-white">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-3 rounded-lg text-lg font-site-body font-medium transition-colors ${
                    isActive
                      ? "text-site-sage bg-site-sage-light/50"
                      : "text-site-soil hover:bg-site-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+15551234567"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-site-terracotta text-white px-5 py-3 rounded-full text-base font-semibold font-site-body"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
