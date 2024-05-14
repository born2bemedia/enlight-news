import React from "react";
import "@/public/scss/about.scss";
import AboutFirst from "./_components/AboutFirst";
import AboutFourth from "./_components/AboutFourth";
import AboutLast from "./_components/AboutLast";
import AboutSecond from "./_components/AboutSecond";
import AboutThird from "./_components/AboutThird";
import SubscribeBlock from "@/src/component/SubscribeBlock";

export const metadata = {
  title: "About us | Enlight News",
  description:
    "Enlight News strives to deliver unbiased, informative news, analysis, research, and education for the crypto community. It is your go-to source of crypto news.",
  openGraph: {
    title: "About us | Enlight News",
    description:
      "Enlight News strives to deliver unbiased, informative news, analysis, research, and education for the crypto community. It is your go-to source of crypto news.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function AboutUs() {
  return (
    <>
      <div className="dark">
        <AboutFirst />
        <AboutSecond />
        <SubscribeBlock />
      </div>
    </>
  );
}

export default AboutUs;
