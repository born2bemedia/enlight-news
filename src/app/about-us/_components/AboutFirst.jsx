"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

function AboutFirst() {
  return (
    <section className="about-hero">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h2>About us</h2>
        </RevealWrapper>
        <RevealWrapper origin="bottom" delay={0}>
          <h3>
            Stay Enlightened. Your go-to source for all things crypto: news,
            marketing, and regulations.
          </h3>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="about-hero__body"
        >
          <div className="offer">
            <img src="/images/services/offer1.svg" />
            <h4>Vision</h4>
            <p>
              Enlight News aims to be the go-to source for reliable, insightful,
              and up-to-date information on cryptocurrency markets, regulations,
              and blockchain technology. We strive to demystify the complex
              world of crypto, making it accessible to everyone.
            </p>
          </div>
          <div className="offer">
            <img src="/images/services/offer2.svg" />
            <h4>Mission</h4>
            <p>
              Our mission is to provide comprehensive coverage of the crypto
              market, offering in-depth analysis, breaking news, and expert
              insights. We are committed to helping our readers stay informed,
              navigate regulatory changes, and understand the evolving landscape
              of blockchain technology.
            </p>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default AboutFirst;
