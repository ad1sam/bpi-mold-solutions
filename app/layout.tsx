import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StickyCtaBar } from "./components/StickyCtaBar";
import {
  absoluteUrl,
  BRAND_IMAGE,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mold Removal & Remediation NYC | BPI Mold Solutions",
    template: "%s | BPI Mold Solutions",
  },
  description:
    "BPI Mold Solutions provides mold inspection, mold removal, mold remediation, air quality testing, emergency mold services, commercial mold services, and water-damage prevention across New York City and Long Island.",
  keywords: [
    "mold inspection NYC",
    "mold removal NYC",
    "mold remediation NYC",
    "air quality testing NYC",
    "emergency mold services NYC",
    "commercial mold remediation NYC",
    "water damage prevention",
    ...SERVICE_AREAS,
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Mold Removal & Remediation NYC | BPI Mold Solutions",
    description:
      "Licensed, certified, and insured mold remediation services for homes and businesses across New York City and Long Island.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(BRAND_IMAGE.url),
        width: BRAND_IMAGE.width,
        height: BRAND_IMAGE.height,
        alt: BRAND_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mold Removal & Remediation NYC | BPI Mold Solutions",
    description:
      "Mold inspection, removal, remediation, air quality testing, emergency response, and moisture prevention across NYC and Long Island.",
    images: [absoluteUrl(BRAND_IMAGE.url)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: SITE_NAME,
  category: "home services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <main className="flex-1">
          {children}
        </main>

        <StickyCtaBar />

        <footer className="border-t border-slate-200 bg-white px-6 py-10">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-slate-500">
              © 2026 BPI Mold Solutions. All rights reserved.
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Serving Staten Island, Brooklyn, Manhattan, Queens, Bronx, and Long Island
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
