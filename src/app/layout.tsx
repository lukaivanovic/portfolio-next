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
      <body className="px-4 lg:px-8 max-w-[1480px] mx-auto grid  grid-cols-1 lg:grid-cols-[260px_1fr] gap-x-20">
        <div>
          <div className="sticky top-0 flex flex-col lg:min-h-screen gap-4 py-8">
            <div>
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
                <Link
                  href="/"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Home
                </Link>
                <Link
                  href="/playground"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Playground
                </Link>
                <Link
                  href="https://x.com/lukaivnvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Twitter
                </Link>
                <Link
                  href="mailto:hi@ivanovicluka.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Contact
                </Link>
              </div>

              <h1 className="mb-4 mt-8">
                Design engineer looking to contribute to society through
                software.
              </h1>
              <p className="text-secondary mb-4">
                Currently working with{" "}
                <a
                  href="https://buena.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors underline underline-offset-4 decoration-dotted decoration-text-secondary hover:text-primary"
                >
                  Buena
                </a>{" "}
                on transforming the property management industry.
              </p>
              <p className="text-secondary mb-4">
                Previously worked with{" "}
                <a
                  href="https://weweb.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors underline underline-offset-4 decoration-dotted decoration-text-secondary hover:text-primary"
                >
                  WeWeb
                </a>
                ,{" "}
                <a
                  href="https://weweb.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors underline underline-offset-4 decoration-dotted decoration-text-secondary hover:text-primary"
                >
                  Daytona
                </a>
                ,{" "}
                <a
                  href="https://akkio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors underline underline-offset-4 decoration-dotted decoration-text-secondary hover:text-primary"
                >
                  Akkio
                </a>
                .
              </p>
              <p className="text-secondary">
                In my free time I like to experiment with shaders, 3D,
                interactions, animations.
              </p>
            </div>
          </div>
        </div>
        <div className="py-8">
          {/* <Navigation /> */}
          {children}
          {/* <FloatingMenu /> */}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
