import React from "react";
import "@/public/scss/contacts.scss";
import ContactBlock from "./_components/ContactBlock";

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
    <>
      <div className="dark">
        <ContactBlock />
      </div>
    </>
  );
}

export default ContactsPage;
