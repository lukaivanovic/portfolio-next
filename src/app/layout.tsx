import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import FloatingMenu from "@/components/FloatingMenu";
import Navigation from "@/components/Navigation";
import NavigationWithActiveState from "@/components/NavigationWithActiveState";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Script from "next/script";

import "./globals.css";
import Link from "next/link";
import XLogo from "@/assets/XLogo";

export const metadata: Metadata = {
  title: "Luka Ivanovic",
  description: "Luka Ivanovic's personal website",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/hls.js@latest"
          strategy="beforeInteractive"
        />
      </head>
      <body className="px-4 lg:px-8 max-w-[1512px] mx-auto grid  grid-cols-1 lg:grid-cols-[288px_1fr] gap-x-6">
        <div>
          <div className="sticky top-0 flex flex-col lg:min-h-screen gap-4 py-8">
            <div className="flex flex-col justify-between flex-1 gap-2">
              {/* <div className="flex items-center gap-4 pb-12">
                <Link href="/">
                  <Image
                    src="/logo-test.png"
                    alt="Luka Ivanovic"
                    width={200}
                    height={200}
                    className="h-8 w-auto"
                  />
                </Link>
              </div> */}

              <div className="flex flex-col gap-2">
                {/* <div className="flex flex-row gap-2">
                  <Link
                    href="/"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/playground"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    Playground
                  </Link>
                </div> */}

                <Navigation />

                <h1 className=" mt-8">
                  Design engineer looking to contribute to society through
                  software.
                </h1>
                <p className="text-secondary mb-4">
                  Previously worked with{" "}
                  <a
                    href="https://buena.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-link"
                  >
                    Buena
                  </a>
                  ,{" "}
                  <a
                    href="https://weweb.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-link"
                  >
                    WeWeb
                  </a>
                  ,{" "}
                  <a
                    href="https://weweb.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-link"
                  >
                    Daytona
                  </a>
                  ,{" "}
                  <a
                    href="https://akkio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-link"
                  >
                    Akkio
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-row gap-2">
                <Link
                  href="mailto:hi@ivanovicluka.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border-link"
                >
                  Send email
                </Link>{" "}
                <Link
                  href="https://x.com/lukaivnvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" border-link"
                >
                  <XLogo className="w-3 h-3 text-neutral-600 hover:text-neutral-900" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
