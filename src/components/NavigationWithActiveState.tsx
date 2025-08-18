"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationWithActiveState() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      <NavigationItem pathname={pathname} href="/" name="Home" />
      <NavigationItem
        pathname={pathname}
        href="/playground"
        name="Playground"
      />
    </div>
  );
}

function NavigationItem({
  pathname,
  href,
  name,
}: {
  pathname: string;
  href: string;
  name: string;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        pathname === href
          ? "bg-white text-neutral-900"
          : "text-neutral-600 hover:text-neutral-900"
      }`}
    >
      {name}
    </Link>
  );
}
