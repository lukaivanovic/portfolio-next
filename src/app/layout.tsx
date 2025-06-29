import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import FloatingMenu from "@/components/FloatingMenu";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

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
      <body>
        <Navigation />
        {children}
        <FloatingMenu />
        <Analytics />
      </body>
    </html>
  );
}
