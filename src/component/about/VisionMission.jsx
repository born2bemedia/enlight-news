import React from "react";

function VisionMission() {
  return (
    <section className="about-split">
      <div className="about-split__panel about-split__panel--vision">
        <img
          className="about-split__art"
          src="/images/redesign/about-vision-coin.png"
          alt=""
        />
        <h2 className="about-split__title">Vision:</h2>
        <p className="about-split__copy">
          To provide reliable and accessible crypto news, market insights and
          blockchain knowledge.
        </p>
      </div>
      <div className="about-split__panel about-split__panel--mission">
        <img
          className="about-split__art"
          src="/images/redesign/about-mission-cubes.png"
          alt=""
        />
        <h2 className="about-split__title">Mission:</h2>
        <p className="about-split__copy">
          To deliver timely news, expert analysis and practical insights that
          help readers understand the crypto industry.
        </p>
      </div>
    </section>
  );
}

export default VisionMission;
