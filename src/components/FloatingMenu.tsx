"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingMenu() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900/80 backdrop-blur-sm rounded-full px-1 py-1 flex gap-2">
      <Link
        href="/"
        className={`px-4 py-1 rounded-full transition-colors ${
          pathname === "/"
            ? "bg-white text-neutral-900"
            : "text-neutral-300 hover:text-white"
        }`}
      >
        Home
      </Link>
      <Link
        href="/playground"
        className={`px-4 py-1 rounded-full transition-colors ${
          pathname === "/playground"
            ? "bg-white text-neutral-900"
            : "text-neutral-300 hover:text-white"
        }`}
      >
        Craft
      </Link>
      <Link
        href="https://x.com/lukaivnvc"
        className="px-4 py-1 rounded-full transition-colors text-neutral-300 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      <Link
        href="mailto:hi@ivanovicluka.co"
        className="px-4 py-1 rounded-full transition-colors text-neutral-300 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </Link>
    </div>
  );
}
