"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="container mx-auto flex items-start justify-between text-primary mt-6">
        <Link
          href="/"
          className="text-primary flex flex-row items-center gap-2"
        >
          Home
        </Link>
        <div className="flex gap-4">
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
        </div>
      </div>
    </section>
  );
}
