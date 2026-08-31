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
    src: "/images/redesign/chart-bitcoin-dynamics.png",
    width: 428,
    height: 243,
  },
  ethereum: {
    title: "Ethereum Dynamics",
    src: "/images/redesign/chart-ethereum-dynamics.png",
    width: 442,
    height: 242,
  },
  blockchain: {
    title: "Total Number of Transactions",
    src: "/images/redesign/chart-total-transactions.png",
    width: 1144,
    height: 702,
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
