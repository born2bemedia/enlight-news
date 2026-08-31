import React from "react";
import { getPosts, getPageCount } from "@/src/utils/blogUtils";
import { parsePageParams } from "@/src/component/news/NewsListing";
import TrendingListing from "@/src/component/news/TrendingListing";
import "@/public/scss/news.scss";
import "@/public/scss/home.scss";

export const metadata = {
  title: "Trending crypto news | Enlight News",
  description:
    "Stay up to date with the latest trends and developments in the crypto market. From breaking news on regulations and compliance requirements to in-depth analysis of market trends, our Trending News page keeps you informed about the ever-evolving world of cryptocurrencies.",
  openGraph: {
    title: "Trending crypto news | Enlight News",
    description:
      "Stay up to date with the latest trends and developments in the crypto market. From breaking news on regulations and compliance requirements to in-depth analysis of market trends, our Trending News page keeps you informed about the ever-evolving world of cryptocurrencies.",
    images: "https://enlight.news/images/meta.png",
  },
};

async function TrendingPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const posts = await getPosts(page, 4, "Trending", "");
  const pageCount = await getPageCount("Trending");

  return (
    <TrendingListing
      title="Trending"
      description="Stay up to date with the latest trends and developments in the crypto market. From breaking news on regulations and compliance requirements to in-depth analysis of market trends, our Trending News page keeps you informed about the ever-evolving world of cryptocurrencies."
      posts={posts}
      page={page}
      pageCount={pageCount}
      basePath="/trending"
    />
  );
}

export default TrendingPage;
