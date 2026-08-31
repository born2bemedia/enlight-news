"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/news", label: "All news" },
  { href: "/trending", label: "Trending" },
  { href: "/bitcoin", label: "Bitcoin" },
  { href: "/ethereum", label: "Ethereum" },
  { href: "/blockchain", label: "Blockchain" },
];

function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="site-header__nav">
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "is-active" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
