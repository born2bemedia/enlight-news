"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/public/scss/header.scss";
import SiteMenu from "./SiteMenu";
import HeaderNav from "./HeaderNav";

const INK_PREFIXES = [
  "/trending",
  "/bitcoin",
  "/ethereum",
  "/blockchain",
  "/submit-topic",
  "/contact-us",
];

function isInkPath(pathname) {
  if (pathname === "/news") return true;
  return INK_PREFIXES.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}

function Header() {
  const pathname = usePathname();
  const ink = isInkPath(pathname);

  useEffect(() => {
    document.body.classList.toggle("page-ink", ink);
    return () => document.body.classList.remove("page-ink");
  }, [ink]);

  return (
    <header className={`site-header${ink ? " site-header--ink" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo">
          <img
            src={
              ink
                ? "/images/redesign/logo-header-light.svg"
                : "/images/redesign/logo-header.svg"
            }
            alt="Enlight News"
            width={107}
            height={32}
          />
        </Link>

        <div className="site-header__actions">
          <HeaderNav />
          <SiteMenu ink={ink} />
        </div>
      </div>
    </header>
  );
}

export default Header;
