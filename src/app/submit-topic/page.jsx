import React from "react";
import "@/public/scss/submit-topic.scss";
import SubmitTopicBlock from "./_components/SubmitTopicBlock";

export const metadata = {
  title: "Submit a topic | Enlight News",
  description:
    "Have a piece of crypto news? Submit it! Our team will explore your suggestion, the event, and the sentiment and publish the news ASAP!",
  openGraph: {
    title: "Submit a topic | Enlight News",
    description:
      "Have a piece of crypto news? Submit it! Our team will explore your suggestion, the event, and the sentiment and publish the news ASAP!",
    images: "https://enlight.systems/images/meta.png",
  },
};

function SubmitTopic() {
  return (
    <>
      <div className="dark">
        <SubmitTopicBlock />
      </div>
    </>
  );
}

export default SubmitTopic;
