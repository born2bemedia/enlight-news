import React from "react";
import ContactSection from "@/src/component/contact/ContactSection";
import SubscribeSection from "@/src/component/home/SubscribeSection";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";
import "@/public/scss/contacts.scss";

export const metadata = {
  title: "Contact us | Enlight News",
  description:
    "Enlight News is a go-to source for all news about crypto. Read the analytics on the latest crypto events. Contact us to suggest news, discuss cooperation, or give your feedback!",
  openGraph: {
    title: "Contact us | Enlight News",
    description:
      "Enlight News is a go-to source for all news about crypto. Read the analytics on the latest crypto events. Contact us to suggest news, discuss cooperation, or give your feedback!",
    images: "https://enlight.news/images/meta.png",
  },
};

function ContactsPage() {
  return (
    <div className="ink-page">
      <ContactSection />
      <SubscribeSection />
    </div>
  );
}

export default ContactsPage;
