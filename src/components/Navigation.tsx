"use client";

import Link from "next/link";
import Logo from "@/assets/Logo";

export default function Navigation() {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="container mx-auto flex items-center justify-center text-primary mt-6">
        {/* <Logo /> */}
        <Link
          href="/"
          className="text-secondary flex flex-row items-center gap-2 uppercase font-mono text-xs"
        >
          Luka Ivanovic
        </Link>
        {/* <div className="flex gap-4">
          <a
            className="hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/ivanovicluka0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="https://x.com/lukaivnvc"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div> */}
      </div>
    </section>
  );
}
