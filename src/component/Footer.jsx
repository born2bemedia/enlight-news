import React from "react";
import Link from "next/link";
import "@/public/scss/footer.scss";

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

const LEGAL = [
  { href: "/terms-of-use", label: "Terms and Conditions", short: "Terms" },
  { href: "/privacy-policy", label: "Privacy Policy", short: "Privacy" },
  { href: "/cookie-policy", label: "Cookie Policy", short: "Cookie" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__logo">
            <img
              src="/images/redesign/logo-footer.svg"
              alt="Enlight News"
              width={240}
              height={72}
            />
          </Link>
          <p className="site-footer__tagline">
            Stay Enlightened. Your go-to source for all things crypto: news,
            marketing, and regulations.
          </p>
        </div>

        <div className="site-footer__columns">
          <div className="footer-col">
            <span className="footer-col__label">Pages</span>
            <nav className="footer-col__links">
              {PAGES.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <span className="footer-col__label">Company</span>
            <nav className="footer-col__links">
              {COMPANY.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <span className="footer-col__label">Contacts</span>
            <div className="footer-col__contacts">
              <a href="mailto:info@enlight.news" className="footer-contact">
                <span className="footer-contact__icon footer-contact__icon--mail">
                  <img
                    src="/images/redesign/icon-mail.svg"
                    alt=""
                    width={15}
                    height={10}
                  />
                </span>
                <span>info@enlight.news</span>
              </a>

              <a href="tel:+447458149408" className="footer-contact">
                <span className="footer-contact__icon footer-contact__icon--phone">
                  <img
                    src="/images/redesign/icon-phone.svg"
                    alt=""
                    width={19}
                    height={20}
                  />
                </span>
                <span>+44 745 814 94 08</span>
              </a>

              <p className="footer-contact footer-contact--static">
                <span className="footer-contact__icon footer-contact__icon--address">
                  <img
                    src="/images/redesign/icon-address.svg"
                    alt=""
                    width={12}
                    height={16}
                  />
                </span>
                <span>
                  Rooms 1703-1704, 17/F, Tung Chiu Commercial Centre, 193
                  Lockhart Road, Wanchai, Hong Kong
                </span>
              </p>
            </div>
          </div>
        </div>

        <span className="site-footer__rule" />

        <div className="site-footer__bottom">
          <nav className="site-footer__legal">
            {LEGAL.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="label-full">{item.label}</span>
                <span className="label-short">{item.short}</span>
              </Link>
            ))}
          </nav>
          <p className="site-footer__copyright">
            All Rights Reserved © Marketera HK
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
