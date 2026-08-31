"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { href: "/news", label: "All news" },
  { href: "/trending", label: "Trending" },
  { href: "/bitcoin", label: "Bitcoin" },
  { href: "/ethereum", label: "Ethereum" },
  { href: "/blockchain", label: "Blockchain" },
];

const COMPANY = [
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact us" },
  { href: "/submit-topic", label: "Submit topic" },
];

function SiteMenu({ ink = false }) {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      <button
        type="button"
        className="site-menu__toggle"
        aria-label={opened ? "Close menu" : "Open menu"}
        aria-expanded={opened}
        onClick={() => setOpened((prev) => !prev)}
      >
        {opened ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 5L5 19M5 5l14 14"
              stroke={ink ? "#F0F0F7" : "#212135"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <img
            src={
              ink
                ? "/images/redesign/menu-light.svg"
                : "/images/redesign/menu.svg"
            }
            alt=""
            width={24}
            height={24}
          />
        )}
      </button>

      <div className={`site-menu__drawer ${opened ? "is-open" : ""}`}>
        <div className="site-menu__group">
          <span className="site-menu__label">Pages</span>
          {PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="site-menu__group">
          <span className="site-menu__label">Company</span>
          {COMPANY.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SiteMenu;
