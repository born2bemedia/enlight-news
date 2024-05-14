import Image from "next/image";
import "@/public/scss/home.scss";
import HomeFirst from "../component/home/HomeFirst";
import HomeSecond from "../component/home/HomeSecond";
import HomeFourth from "../component/home/HomeFourth";
import HomeSixth from "../component/home/HomeSixth";
import HomeThird from "../component/home/HomeThird";
import HomeEight from "../component/home/HomeEight";
import HomeNine from "../component/home/HomeNine";
import HomeLast from "../component/home/HomeLast";
import HomeFifth from "../component/home/HomeFifth";
import HomeSeven from "../component/home/HomeSeven";
import CategoryPosts from "../component/CategoryPosts";
import SubscribeBlock from "../component/SubscribeBlock";

export default function Home() {
  return (
    <>
      <HomeFirst />
      <CategoryPosts categoryTitle="Trending" category="Trending" />
      <SubscribeBlock />
      <CategoryPosts categoryTitle="Bitcoin" category="Bitcoin" />
      <CategoryPosts categoryTitle="Ethereum" category="Ethereum" />
      <CategoryPosts categoryTitle="Blockchain" category="Blockchain" />
    </>
  );
}
