import React from "react";
import { getPosts, getPageCount } from "@/src/utils/blogUtils";
import { parsePageParams } from "@/src/component/news/NewsListing";
import TrendingListing from "@/src/component/news/TrendingListing";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";

export const metadata = {
  title: "All crypto news | Enlight News",
  description:
    "Stay up-to-date on crypto market news with Enlight .news - Analysis and expert insights on Bitcoin, Ethereum, Blockchain, regulations, and compliance.",
  openGraph: {
    title: "All crypto news | Enlight News",
    description:
      "Stay up-to-date on crypto market news with Enlight .news - Analysis and expert insights on Bitcoin, Ethereum, Blockchain, regulations, and compliance.",
    images: "https://enlight.news/images/meta.png",
  },
};

const PER_PAGE = 7;

async function AllNews({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const posts = await getPosts(page, PER_PAGE, "", "");
  const pageCount = await getPageCount("", PER_PAGE);

  return (
    <TrendingListing
      title="All news"
      description="Explore the latest news on cryptocurrency markets, regulations, and compliance. Stay ahead with our up-to-date coverage and gain valuable insights into the ever-evolving world of cryptocurrencies."
      posts={posts}
      page={page}
      pageCount={pageCount}
      basePath="/news"
      moreLabel="More news"
      layout="list"
    />
  );
}

export default AllNews;
