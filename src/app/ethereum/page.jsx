import React from "react";
import { getPosts, getPageCount } from "@/src/utils/blogUtils";
import { parsePageParams } from "@/src/component/news/NewsListing";
import TrendingListing from "@/src/component/news/TrendingListing";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";

export const metadata = {
  title: "Ethereum news | Enlight News",
  description:
    "Explore the latest Ethereum news, including price shifts, events and changes, and technology and blockchain innovations impacting the cryptocurrency.",
  openGraph: {
    title: "Ethereum news | Enlight News",
    description:
      "Explore the latest Ethereum news, including price shifts, events and changes, and technology and blockchain innovations impacting the cryptocurrency.",
    images: "https://enlight.news/images/meta.png",
  },
};

async function EthereumPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const posts = await getPosts(page, 4, "Ethereum", "");
  const pageCount = await getPageCount("Ethereum");

  return (
    <TrendingListing
      title="Ethereum"
      description="Discover the latest news, updates, and developments in the Ethereum ecosystem. Stay informed about Ethereum's price, DeFi projects, and technological advancements. Explore the future of decentralised finance with Ethereum."
      posts={posts}
      page={page}
      pageCount={pageCount}
      basePath="/ethereum"
      moreLabel="More Ethereum news"
      withExcerpt={false}
      chart={{
        widget: "ethereum",
        width: "352",
        height: "200",
      }}
    />
  );
}

export default EthereumPage;
