import React from "react";
import InkPageHead from "@/src/component/ui/InkPageHead";
import SubmitTopicSection from "@/src/component/home/SubmitTopicSection";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";

export const metadata = {
  title: "Submit a topic | Enlight News",
  description:
    "Have a piece of crypto news? Submit it! Our team will explore your suggestion, the event, and the sentiment and publish the news ASAP!",
  openGraph: {
    title: "Submit a topic | Enlight News",
    description:
      "Have a piece of crypto news? Submit it! Our team will explore your suggestion, the event, and the sentiment and publish the news ASAP!",
    images: "https://enlight.news/images/meta.png",
  },
};

function SubmitTopic() {
  return (
    <div className="ink-page">
      <div className="ink-page__intro">
        <InkPageHead
          title="Submit topic"
          description={
            <p>
              Know a crypto story worth covering?
              <br />
              Send it to us. If it meets our editorial standards, we&apos;ll
              investigate and publish it.
            </p>
          }
        />
      </div>
      <SubmitTopicSection />
    </div>
  );
}

export default SubmitTopic;
