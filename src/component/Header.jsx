
import React from "react";
import Link from "next/link";
import "@/public/scss/header.scss";
import MobileMenu from "./MobileMenu";

import ServicesDropdown from "./ServicesDropdown";

function Header() {
  

  return (
    <header>
      <div className="_container">
        <div className="head-wrap">
          <Link href="/">
            <img alt="logo" src="/logo.svg" />
          </Link>

          <nav className="categories"> 
            <Link href="/news">All news</Link>
            <Link href="/trending">Trending</Link>
            <Link href="/bitcoin">Bitcoin</Link>
            <Link href="/ethereum">Ethereum</Link>
            <Link href="/blockchain">Blockchain</Link>
          </nav>

          <nav>
            <Link href="/about-us">About us</Link>
            <Link href="#">Submit topic</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          
        </div>
      </div>
    </header>
  );
}

export default Header;
