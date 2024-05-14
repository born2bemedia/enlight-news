"use client";
import ContactForm from "@/src/component/ContactForm";
import { RevealWrapper, RevealList } from "next-reveal";
import { useState } from "react";

function QuickContactBlock() {
  const [formSent, setFormSent] = useState(false);

  const handleFormReset = () => {
    setFormSent(!formSent);
  };

  return (
    <>
      <section className="contact-block">
        <div className="_container">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              Have a question? <br />
              Submit your request!
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <h3>
              Encounter any challenges while setting up your dashboard or
              customising modules? Need assistance getting started <br />
              or choosing the perfect dashboard for your needs? Use our Quick
              Contact form to submit your question directly to <br />a dedicated
              specialist. Skip the general queue and get quick, personalised
              support. Please follow the steps below.
            </h3>
          </RevealWrapper>
          <div className="contact-block__body">
            {!formSent ? (
              <ContactForm handleFormReset={() => handleFormReset()} />
            ) : (
              <div className="form-sent">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.8055 36.7867L49.3815 23.0533C53.3815 11.0587 55.3815 5.06133 52.2135 1.896C49.0481 -1.26934 43.0508 0.727997 31.0535 4.728L17.3228 9.304C7.64279 12.5307 2.80279 14.1467 1.42946 16.512C0.787094 17.6175 0.44873 18.8734 0.44873 20.152C0.44873 21.4306 0.787094 22.6865 1.42946 23.792C2.80279 26.16 7.64279 27.7733 17.3228 31.0027C18.5228 31.4027 19.8748 31.1147 20.7735 30.2267L35.4561 15.68C35.6491 15.4704 35.8826 15.3021 36.1425 15.1854C36.4024 15.0686 36.6833 15.0058 36.9681 15.0007C37.253 14.9956 37.5359 15.0483 37.7998 15.1557C38.0638 15.263 38.3031 15.4228 38.5035 15.6254C38.7039 15.8279 38.8611 16.069 38.9656 16.3341C39.0702 16.5991 39.1199 16.8826 39.1117 17.1674C39.1035 17.4522 39.0377 17.7324 38.9181 17.991C38.7986 18.2496 38.6278 18.4813 38.4161 18.672L23.9735 32.9813C23.4917 33.4737 23.1559 34.09 23.0034 34.7618C22.8508 35.4336 22.8876 36.1345 23.1095 36.7867C26.3361 46.4667 27.9521 51.3093 30.3175 52.6853C31.4236 53.3274 32.6798 53.6656 33.9588 53.6656C35.2378 53.6656 36.494 53.3274 37.6001 52.6853C39.9655 51.3093 41.5761 46.4693 44.8055 36.7867Z"
                    fill="#97D80F"
                  />
                </svg>
                <h2>
                  Your request has been <br />
                  successfully submitted.
                </h2>
                <p>
                  Our team will review it shortly. Thank you for choosing
                  Enlight.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default QuickContactBlock;
