"use client";

import { useState } from "react";
import { Phone, MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { plantCategories } from "@/data/plant-catalog";

const WA_MSG = encodeURIComponent(
  "Hi George, I saw your website and I\u2019m interested in visiting the nursery."
);

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Plants",
    href: "/plants/mangoes",
    children: plantCategories.map((c) => ({
      label: c.name,
      href: `/plants/${c.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [plantsOpen, setPlantsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-site-sage-light/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-site-heading font-bold text-lg sm:text-xl text-site-forest tracking-tight"
          >
            Tess Farms
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-site-soil hover:text-site-forest transition-colors rounded-lg hover:bg-site-sage-light/30">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    <div className="bg-white rounded-xl shadow-lg border border-site-sage-light/40 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-site-soil hover:bg-site-sage-light/30 hover:text-site-forest transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-site-soil hover:text-site-forest transition-colors rounded-lg hover:bg-site-sage-light/30"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA buttons + mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:14076199561"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full text-site-forest hover:bg-site-sage-light/50 transition-colors"
              aria-label="Call George"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/14076199561?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-site-soil hover:bg-site-sage-light/50 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-site-sage-light/40 bg-white">
          <div className="px-5 py-3 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setPlantsOpen(!plantsOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-site-soil rounded-lg hover:bg-site-sage-light/30 transition-colors min-h-[44px]"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${plantsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {plantsOpen && (
                    <div className="pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-3 text-base text-site-soil-muted hover:text-site-forest rounded-lg hover:bg-site-sage-light/30 transition-colors min-h-[44px]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-site-soil rounded-lg hover:bg-site-sage-light/30 transition-colors min-h-[44px]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
