"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "./ContactForm";

function ContactBlock() {
  const [tab, setTab] = useState("tab1");
  const [contactFormSent, setContactFormSent] = useState(false);

  const handleFormSend = () => {
    setContactFormSent(!contactFormSent);
  };

  const tabClick = (tabId) => {
    setTab(tabId);
  };

  return (
    <section className="contact-block">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h1>Contact us</h1>
        </RevealWrapper>
        <RevealWrapper origin="bottom" delay={0}>
          <h3>
            Get in touch with us for questions, feedback, or collaboration
            opportunities. <br />
            We're here to help!
          </h3>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="contact-block__body"
        >
          <div className="contact-left">
            <Link href="mailto:info@enlight.business">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_9_808)">
                  <path
                    d="M20.2728 7.98832L12.5008 14.8369L4.7272 7.98822C4.41767 7.71552 3.94586 7.74549 3.67326 8.05482C3.40077 8.36425 3.43044 8.83607 3.73997 9.10876L12.0073 16.3925C12.1484 16.5167 12.3247 16.5788 12.5009 16.5788C12.6772 16.5788 12.8536 16.5167 12.9947 16.3924L21.2603 9.10866C21.5696 8.83607 21.5994 8.36415 21.3268 8.05472C21.054 7.74559 20.5823 7.71572 20.2728 7.98832Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M22.2599 4.81494H2.7401C1.50496 4.81494 0.5 5.8198 0.5 7.05504V18.9029C0.5 20.1381 1.50496 21.143 2.7401 21.143H22.2599C23.495 21.143 24.5 20.1381 24.5 18.9029V7.05504C24.5 5.8199 23.495 4.81494 22.2599 4.81494ZM23.0066 18.9029C23.0066 19.3145 22.6717 19.6496 22.2599 19.6496H2.7401C2.32832 19.6496 1.9934 19.3145 1.9934 18.9029V7.05504C1.9934 6.64336 2.32832 6.30834 2.7401 6.30834H22.2599C22.6717 6.30834 23.0066 6.64336 23.0066 7.05504V18.9029Z"
                    fill="#97D80F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_808">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.979004)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>
                <span>Email: </span>info@enlight.business
              </span>
            </Link>
            <Link href="tel:+447458149408">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M20.6869 4.12296C18.6594 2.09541 15.9635 0.978891 13.0962 0.979004C12.6264 0.979004 12.2457 1.35984 12.2457 1.82958C12.2457 2.29933 12.6265 2.68016 13.0962 2.68016C15.5092 2.68004 17.7777 3.61965 19.484 5.32591C21.1903 7.03216 22.1299 9.30082 22.1298 11.7139C22.1298 12.1836 22.5105 12.5644 22.9804 12.5644C23.4502 12.5644 23.831 12.1836 23.831 11.714C23.8311 8.84639 22.7146 6.15051 20.6869 4.12296Z"
                  fill="#97D80F"
                />
                <path
                  d="M17.188 11.7139C17.188 12.1837 17.5688 12.5645 18.0387 12.5644C18.5084 12.5644 18.8891 12.1835 18.8891 11.7138C18.8889 8.52017 16.2902 5.9216 13.0964 5.92114C13.0962 5.92114 13.0965 5.92114 13.0964 5.92114C12.6266 5.92114 12.2458 6.30186 12.2457 6.77161C12.2457 7.24135 12.6264 7.62218 13.0961 7.6223C15.3522 7.62264 17.1877 9.45807 17.188 11.7139Z"
                  fill="#97D80F"
                />
                <path
                  d="M15.3058 16.0509C14.0093 15.9837 13.3488 16.9479 13.0321 17.4111C12.7668 17.7989 12.8661 18.3281 13.2539 18.5934C13.6416 18.8587 14.1709 18.7593 14.4362 18.3716C14.8105 17.8244 14.98 17.7383 15.21 17.7492C15.9461 17.8357 18.8455 19.9603 19.1358 20.6247C19.2086 20.8203 19.2059 21.0121 19.1278 21.2454C18.8234 22.1488 18.3195 22.7837 17.6703 23.0813C17.0536 23.364 16.2975 23.3384 15.4842 23.0074C12.4474 21.7697 9.79431 20.0423 7.59869 17.8732C7.59778 17.8723 7.59688 17.8715 7.59608 17.8706C5.43153 15.6772 3.70736 13.0275 2.47164 9.99532C2.14059 9.18137 2.11496 8.42515 2.39769 7.80854C2.69528 7.15938 3.33015 6.6555 4.23279 6.35144C4.46687 6.27296 4.6583 6.27047 4.85212 6.3426C5.51886 6.63395 7.64337 9.53317 7.72911 10.261C7.74136 10.4997 7.6546 10.6691 7.10785 11.0427C6.71999 11.3076 6.6203 11.8369 6.88534 12.2247C7.15027 12.6126 7.67944 12.7122 8.06742 12.4472C8.53081 12.1308 9.4948 11.4721 9.42789 10.1712C9.35417 8.81233 6.7108 5.21371 5.44775 4.7493C4.88603 4.53994 4.29516 4.53631 3.69091 4.73909C2.33135 5.19693 1.34944 6.01325 0.851345 7.09973C0.368217 8.15376 0.383528 9.37666 0.896142 10.6369C2.21862 13.8818 4.06891 16.721 6.39552 19.076C6.40119 19.0817 6.40697 19.0874 6.41287 19.093C8.76614 21.4153 11.6021 23.2622 14.8427 24.5831C15.4916 24.847 16.1307 24.9791 16.7418 24.9791C17.3173 24.9791 17.8682 24.862 18.3792 24.6277C19.4658 24.1298 20.282 23.148 20.7402 21.7875C20.9425 21.1844 20.9393 20.5937 20.7315 20.0346C20.2655 18.7682 16.6669 16.1248 15.3058 16.0509Z"
                  fill="#97D80F"
                />
              </svg>
              <span>
                <span>Phone: </span>+44 745 814 94 08
              </span>
            </Link>

            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.4983 0C7.3987 0 3.25 4.14925 3.25 9.2494C3.25 12.8937 4.77572 16.58 7.66224 19.9099C9.81817 22.397 11.9548 23.8061 12.0447 23.8649C12.1825 23.955 12.3404 24 12.4984 24C12.6563 24 12.8142 23.955 12.9521 23.8649C13.0419 23.8061 15.1789 22.397 17.3348 19.91C20.2215 16.58 21.7474 12.8937 21.7474 9.2494C21.7473 4.14925 17.5981 0 12.4983 0ZM12.4983 22.1529C10.7974 20.8854 4.90815 16.0074 4.90815 9.2494C4.90815 5.06356 8.31301 1.65815 12.4983 1.65815C16.6839 1.65815 20.0891 5.06356 20.0891 9.2494C20.0891 16.0074 14.1993 20.8854 12.4983 22.1529Z"
                  fill="#97D80F"
                />
                <path
                  d="M12.4988 5.5769C10.4748 5.5769 8.82812 7.22367 8.82812 9.24794C8.82812 11.2717 10.4748 12.9181 12.4988 12.9181C14.5229 12.9181 16.1694 11.2717 16.1694 9.24794C16.1694 7.22378 14.5228 5.5769 12.4988 5.5769ZM12.4988 11.2599C11.3891 11.2599 10.4863 10.3574 10.4863 9.24794C10.4863 8.13798 11.3891 7.23506 12.4988 7.23506C13.6085 7.23506 14.5113 8.13798 14.5113 9.24794C14.5113 10.3574 13.6085 11.2599 12.4988 11.2599Z"
                  fill="#97D80F"
                />
              </svg>
              <span>
                <span>Address: </span>
              </span>
            </Link>
            <p>
              Rooms 1703-1704, 17/F, Tung Chiu Commercial Centre, 193 Lockhart
              Road, Wanchai, Hong Kong
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9865063466395!2d114.17189917511763!3d22.27850097970229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005b91e96cbb%3A0x2f4771b67527c85e!2sTung%20Chiu%20Commercial%20Centre!5e0!3m2!1sen!2sua!4v1713946938566!5m2!1sen!2sua"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-right">
            <div className="right-top">
              {!contactFormSent ? (
                <ContactForm handleFormSend={() => handleFormSend()} />
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
                    You have subscribed <br />
                    to our newsletter successfully!
                  </h2>
                  <p>
                    Please check your inbox for a greeting email from Enlight!
                  </p>
                </div>
              )}
            </div>
            <div className="right-bottom">
              <p>Join us on social media</p>
              <div className="soc">
                <Link href="#" target="_blank">
                  <img src="/images/soc-temp.svg" />
                </Link>
                <Link href="#" target="_blank">
                  <img src="/images/soc-temp.svg" />
                </Link>
                <Link href="#" target="_blank">
                  <img src="/images/soc-temp.svg" />
                </Link>
              </div>
            </div>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default ContactBlock;
