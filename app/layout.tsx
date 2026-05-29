import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "./components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BPI Mold Solutions",
  description:
    "Professional mold inspection, mold removal, remediation, air quality testing, and emergency mold services throughout New York State.",
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
      <body className="min-h-full flex flex-col">
        <SiteNav />

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white px-6 py-10">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-slate-500">
              © 2026 BPI Mold Solutions. All rights reserved.
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Serving Staten Island, Brooklyn, Manhattan, Queens, Bronx, Long Island & New York State
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}