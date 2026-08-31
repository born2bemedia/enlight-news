import React from "react";
import { getPosts, getPageCount } from "@/src/utils/blogUtils";
import { parsePageParams } from "@/src/component/news/NewsListing";
import TrendingListing from "@/src/component/news/TrendingListing";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";

export const metadata = {
  title: "Blockchain news | Enlight News",
  description:
    "Explore the latest blockchain news - technology innovations that impact the crypto market. We monitor the market for you.",
  openGraph: {
    title: "Blockchain news | Enlight News",
    description:
      "Explore the latest blockchain news - technology innovations that impact the crypto market. We monitor the market for you.",
    images: "https://enlight.news/images/meta.png",
  },
};

async function BlockchainPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const posts = await getPosts(page, 4, "Blockchain", "");
  const pageCount = await getPageCount("Blockchain");

  return (
    <TrendingListing
      title="Blockchain"
      description="Explore the latest blockchain innovations, news, and developments. Stay informed about emerging trends and breakthroughs in blockchain technology. Discover how blockchain is transforming various industries and driving innovation."
      posts={posts}
      page={page}
      pageCount={pageCount}
      basePath="/blockchain"
      moreLabel="More blockchain news"
      withExcerpt={false}
      chart={{
        src: "/images/redesign/chart-total-transactions.png",
        alt: "Total Number of Transactions",
      }}
      chartSize="lg"
    />
  );
}

export default BlockchainPage;
