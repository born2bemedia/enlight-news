import React from "react";
import ArrowButton from "../ui/ArrowButton";

function ArticleCta() {
  return (
    <section className="article-cta">
      <div className="article-cta__panel article-cta__panel--assist">
        <div className="article-cta__art" aria-hidden>
          <img
            className="article-cta__ellipse"
            src="/images/redesign/subscribe-ellipse.svg"
            alt=""
          />
          <img
            className="article-cta__coin"
            src="/images/redesign/subscribe-hand.png"
            alt=""
          />
        </div>
        <h2 className="article-cta__title">Need assistance?</h2>
        <ArrowButton href="/contact-us" variant="solid" iconTone="accent">
          Contact us
        </ArrowButton>
      </div>

      <div className="article-cta__panel article-cta__panel--submit">
        <div className="article-cta__art" aria-hidden>
          <img
            className="article-cta__glow"
            src="/images/redesign/dark-glow.png"
            alt=""
          />
        </div>
        <h2 className="article-cta__title">Got Insights to Share?</h2>
        <ArrowButton href="/submit-topic" variant="accent" iconTone="dark">
          Submit
        </ArrowButton>
      </div>
    </section>
  );
}

export default ArticleCta;
