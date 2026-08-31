import React from "react";
import Link from "next/link";
import InkPageHead from "../ui/InkPageHead";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/enlight.news/",
    src: "/images/redesign/icon-instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/enlight.facebook",
    src: "/images/redesign/icon-facebook.svg",
  },
  {
    name: "X",
    href: "https://twitter.com/",
    src: "/images/redesign/icon-twitter.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/enlight-linkedin/",
    src: "/images/redesign/icon-linkedin.svg",
  },
];

function ContactSection() {
  return (
    <section className="contact-page">
      <div className="contact-page__inner">
        <InkPageHead
          title="Contact us"
          description="Get in touch with us for questions, feedback, or collaboration opportunities. We're here to help!"
        />

        <div className="contact-page__panel">
          <p className="contact-page__lead">
            Connect, collaborate, and boost your crypto project&apos;s visibility
            with our expert team.
          </p>

          <div className="contact-page__grid">
            <div className="contact-page__col">
              <div className="contact-card">
                <p className="contact-card__label">Send us a letter:</p>
                <a
                  className="contact-card__value"
                  href="mailto:info@enlight.business"
                >
                  info@enlight.business
                </a>
              </div>

              <div className="contact-card">
                <p className="contact-card__label">Talk to Enlight:</p>
                <a className="contact-card__value" href="tel:+447458149408">
                  +44 745 814 94 08
                </a>
              </div>

              <div className="contact-card">
                <p className="contact-card__label">Join us on social media:</p>
                <div className="contact-card__socials">
                  {SOCIALS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social"
                      aria-label={item.name}
                    >
                      <img src={item.src} alt="" width={20} height={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-card contact-card--address">
              <div className="contact-card__copy">
                <p className="contact-card__label">Registered address:</p>
                <p className="contact-card__value">
                  Rooms 1703-1704, 17/F, Tung Chiu Commercial Centre, 193
                  Lockhart Road, Wanchai, Hong Kong
                </p>
              </div>
              <div className="contact-map">
                <img
                  src="/images/redesign/contact-map.png"
                  alt="Map of Wanchai, Hong Kong"
                />
                <img
                  className="contact-map__pin"
                  src="/images/redesign/icon-map-pin.svg"
                  alt=""
                  width={27}
                  height={41}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
