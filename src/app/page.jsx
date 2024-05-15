import Image from "next/image";
import "@/public/scss/home.scss";
import HomeFirst from "../component/home/HomeFirst";
import CategoryPosts from "../component/CategoryPosts";
import SubscribeBlock from "../component/SubscribeBlock";
import HomeSubmit from "../component/home/HomeSubmit";

export default function Home() {
  return (
    <>
      <HomeFirst />
      <CategoryPosts categoryTitle="Trending" category="Trending" />
      <SubscribeBlock />
      <CategoryPosts categoryTitle="Bitcoin" category="Bitcoin" />
      <CategoryPosts categoryTitle="Ethereum" category="Ethereum" />
      <HomeSubmit />
      <CategoryPosts categoryTitle="Blockchain" category="Blockchain" />
      <CategoryPosts categoryTitle="All news" category="all" />
    </>
  );
}
