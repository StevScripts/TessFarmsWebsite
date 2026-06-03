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
  title: "Tess Farms LLC \u2014 Indian Fruit Trees & Plants in Central Florida",
  description:
    "Alphonso mango, curry leaf, jasmine, guava, parijat & more. Indian plants grown in Central Florida. Serving Lake Nona, St. Cloud, Kissimmee & Orlando.",
  keywords: [
    "Indian plants Florida",
    "Alphonso mango tree Florida",
    "curry leaf plant Orlando",
    "jasmine plant Central Florida",
    "Indian nursery Orlando",
    "Tess Farms",
    "mango tree Kissimmee",
    "parijat plant Florida",
    "guava tree Lake Nona",
  ],
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
