import { siteContent } from "@/data/site-content";

export function SiteFooter() {
  const { business } = siteContent;

  return (
    <footer className="bg-site-forest text-white/90">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-site-heading font-bold text-base text-white">
              Tes Farms LLC
            </p>
            <p className="text-xs text-white/60 mt-1">
              {business.hours.note} &middot; {business.address.serving}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/70">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center px-3 py-2.5 min-h-[44px] rounded-lg hover:text-white hover:bg-white/10 transition-colors"
            >
              {business.phone}
            </a>
            <a
              href={business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2.5 min-h-[44px] rounded-lg hover:text-white hover:bg-white/10 transition-colors"
            >
              YouTube
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2.5 min-h-[44px] rounded-lg hover:text-white hover:bg-white/10 transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Tes Farms LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
