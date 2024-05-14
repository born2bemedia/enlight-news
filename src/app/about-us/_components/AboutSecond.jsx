"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function AboutSecond() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  /*useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && blockRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const blockRect = blockRef.current.getBoundingClientRect();

        if (sectionRect.top >= 0) {
          // Section has not been reached, block is in default state
          setblockClass("");
        } else if (sectionRect.bottom <= window.innerHeight) {
          // Bottom of the section is at or above the bottom of the viewport
          setblockClass("is-absolute");
        } else if (
          sectionRect.top < 0 &&
          sectionRect.bottom > window.innerHeight
        ) {
          // Section is partially in view, block should be fixed
          setblockClass("is-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/

  return (
    <>
      <section className="about-second" ref={sectionRef}>
        <div className="_container">
          <div className="about-second__body">
            <div className="about-second__col-01">
              <h2 className="mobile-header">
                How we <br />
                select news
              </h2>
              <div className={`fixed-block ${blockClass}`} ref={blockRef}>
                <h2>
                  How we <br />
                  select news
                </h2>
                <div className="image-wrap">
                  <div>
                    <Image
                      style={{
                        animation: `floatAnimation 5s infinite ease-in-out`,
                        animationDelay: "0s",
                      }}
                      src={"/images/home/home-third.webp"}
                      width={472}
                      height={528}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="about-second__col-02">
              <div className="how">
                <div className="how__item">
                  <h4>
                    <span>01</span>
                    <span>Monitoring and Research</span>
                  </h4>
                  <p>
                    We analyse your audience's online searches to determine
                    their interests. This helps us tailor content that resonates
                    with them.
                  </p>
                </div>
                <div className="how__item">
                  <h4>
                    <span>02</span>
                    <span>Verification Process</span>
                  </h4>
                  <p>
                    Our team conducts thorough research to verify the
                    authenticity and significance of the news using multiple
                    credible sources.
                  </p>
                </div>
                <div className="how__item">
                  <h4>
                    <span>03</span>
                    <span>Expert Consultation</span>
                  </h4>
                  <p>
                    We consult industry experts to provide valuable insights and
                    perspectives on the news, ensuring accuracy and relevance.
                  </p>
                </div>
                <div className="how__item">
                  <h4>
                    <span>04</span>
                    <span>Selection Criteria</span>
                  </h4>
                  <p>
                    News is selected based on its importance, relevance, and
                    potential impact on our audience, getting covered the most
                    significant crypto changes.
                  </p>
                </div>
                <div className="how__item">
                  <h4>
                    <span>05</span>
                    <span>Editorial Oversight</span>
                  </h4>
                  <p>
                    Before publication, all news articles undergo a rigorous
                    editorial process to ensure accuracy, truthfulness, and
                    adherence to the highest journalistic standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSecond;
