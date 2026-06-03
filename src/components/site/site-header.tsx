"use client";

import { Phone, MessageCircle } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-site-sage-light/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a
            href="#hero"
            className="font-site-heading font-bold text-lg sm:text-xl text-site-forest tracking-tight"
          >
            Tess Farms
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:14076199561"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full text-site-forest hover:bg-site-sage-light/50 transition-colors"
              aria-label="Call George"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/14076199561"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-sm font-semibold font-site-body transition-colors duration-200 hover:bg-[#1fad54]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
