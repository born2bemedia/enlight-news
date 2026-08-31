import React from "react";
import { getPosts, getPageCount } from "@/src/utils/blogUtils";
import { parsePageParams } from "@/src/component/news/NewsListing";
import TrendingListing from "@/src/component/news/TrendingListing";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";

export const metadata = {
  title: "Bitcoin news | Enlight News",
  description:
    "Explore the latest Bitcoin news, including price shifts, events, and changes impacting the cryptocurrency. We analyse market sentiment for you.",
  openGraph: {
    title: "Bitcoin news | Enlight News",
    description:
      "Explore the latest Bitcoin news, including price shifts, events, and changes impacting the cryptocurrency. We analyse market sentiment for you.",
    images: "https://enlight.news/images/meta.png",
  },
};

async function BitcoinPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const posts = await getPosts(page, 4, "Bitcoin", "");
  const pageCount = await getPageCount("Bitcoin");

  return (
    <TrendingListing
      title="Bitcoin"
      description="Discover everything about Bitcoin: the latest news, price movements, mining updates, and market analysis. Stay informed with our comprehensive coverage of the world's leading cryptocurrency. Explore Bitcoin's evolution and its impact on the financial landscape."
      posts={posts}
      page={page}
      pageCount={pageCount}
      basePath="/bitcoin"
      moreLabel="More Bitcoin news"
      withExcerpt={false}
      chart={{
        src: "/images/redesign/chart-bitcoin-dynamics.png",
        alt: "Bitcoin Dynamics",
      }}
    />
  );
}

export default BitcoinPage;
