import type { Metadata, Viewport } from "next";
import { Bitter, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-site-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-site-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tess Farms LLC \u2014 Tropical Plants in South Florida",
    template: "%s | Tess Farms LLC",
  },
  description:
    "A family nursery in South Florida specializing in mango, avocado, citrus, lychee, and tropical plants. Visit us in Homestead.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tess Farms LLC",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4a7c59",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${sourceSans.variable} font-site-body bg-site-cream text-site-soil`}
      >
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
