import React from "react";

const STEPS = [
  {
    title: "Monitoring and Research",
    copy: "We continuously monitor major events and developments in the cryptocurrency and blockchain space.",
  },
  {
    title: "Verification Process",
    copy: "Our team conducts thorough research to verify the authenticity and significance of the news using multiple credible sources.",
  },
  {
    title: "Expert Consultation",
    copy: "We consult industry experts to provide valuable insights and perspectives on the news, ensuring accuracy and relevance.",
  },
  {
    title: "Selection Criteria",
    copy: "News is selected based on its importance, relevance, and potential impact on our audience, getting covered the most significant crypto changes.",
  },
  {
    title: "Editorial Oversight",
    copy: "Before publication, all news articles undergo a rigorous editorial process to ensure accuracy, truthfulness, and adherence to the highest journalistic standards.",
  },
];

function SelectNews() {
  return (
    <section className="about-select">
      <span className="about-select__glow" aria-hidden />
      <h2 className="about-select__title">How we select news</h2>
      <div className="about-select__grid">
        {STEPS.map((step) => (
          <article className="about-select__card" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SelectNews;
