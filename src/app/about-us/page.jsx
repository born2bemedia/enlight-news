import React from "react";
import InkPageHead from "@/src/component/ui/InkPageHead";
import VisionMission from "@/src/component/about/VisionMission";
import SelectNews from "@/src/component/about/SelectNews";
import SubscribeSection from "@/src/component/home/SubscribeSection";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";
import "@/public/scss/about.scss";

export const metadata = {
  title: "About us | Enlight News",
  description:
    "Enlight News strives to deliver unbiased, informative news, analysis, research, and education for the crypto community. It is your go-to source of crypto news.",
  openGraph: {
    title: "About us | Enlight News",
    description:
      "Enlight News strives to deliver unbiased, informative news, analysis, research, and education for the crypto community. It is your go-to source of crypto news.",
    images: "https://enlight.news/images/meta.png",
  },
};

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-page__intro">
        <InkPageHead
          tone="light"
          title="About us"
          description="Stay Enlightened. Your go-to source for all things crypto: news, marketing, and regulations."
        />
      </div>
      <VisionMission />
      <SelectNews />
      <SubscribeSection />
    </div>
  );
}

export default AboutUs;
