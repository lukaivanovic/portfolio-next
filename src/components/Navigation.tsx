"use client";

import Link from "next/link";
import Logo from "@/assets/Logo";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row  items-center justify-between gap-1">
      <Link
        href="/"
        className={`hover:text-neutral-900 flex flex-row items-center gap-1 ${
          pathname === "/"
            ? "text-neutral-400"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="m20 24l-10-8l10-8z"
            strokeWidth="1"
            stroke="currentColor"
          />
        </svg>
        Projects
      </Link>
      <Link
        href="/playground"
        className={`flex flex-row items-center gap-1 ${
          pathname === "/playground"
            ? "text-neutral-400"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
      >
        Playground
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="m12 8l10 8l-10 8z"
            strokeWidth="1"
            stroke="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
}
