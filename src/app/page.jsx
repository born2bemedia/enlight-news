import "@/public/scss/home.scss";
import Hero from "../component/home/Hero";
import SubscribeSection from "../component/home/SubscribeSection";
import MarketView from "../component/home/MarketView";
import NewsSection from "../component/home/NewsSection";
import SubmitTopicSection from "../component/home/SubmitTopicSection";
import AttentionSection from "../component/home/AttentionSection";
import AllNewsSection from "../component/home/AllNewsSection";

const CHARTS = {
  bitcoin: {
    title: "Bitcoin Dynamics",
    widget: "bitcoin",
    width: "100%",
  },
  ethereum: {
    title: "Ethereum Dynamics",
    widget: "ethereum",
    width: "100%",
  },
  blockchain: {
    title: "Total Number of Transactions",
    widget: "transactions",
    compact: true,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SubscribeSection />
      <MarketView />
      <NewsSection
        title="Bitcoin"
        category="Bitcoin"
        viewAllHref="/bitcoin"
        chart={CHARTS.bitcoin}
      />
      <NewsSection
        title="Ethereum"
        category="Ethereum"
        viewAllHref="/ethereum"
        chart={CHARTS.ethereum}
      />
      <SubmitTopicSection />
      <NewsSection
        title="Blockchain"
        category="Blockchain"
        viewAllHref="/blockchain"
        chart={CHARTS.blockchain}
      />
      <AttentionSection />
      <AllNewsSection />
    </>
  );
}
