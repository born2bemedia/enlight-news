import { getPosts } from "@/src/utils/blogUtils";
import Link from "next/link";
import React from "react";
import FeaturedPostCard from "../FeaturedPostCard";
import LatestPostCard from "../LatestPostCard";

async function HomeFirst() {
  const lastPosts = await getPosts(1, 1, "", 0);
  const nextPosts = await getPosts(1, 3, "", 1);
  return (
    <section className="home-first">
      <div className="_container">
        <div className="home-first__body">
          <div className="home-first__col-01">
            {lastPosts.map((post) => (
                <FeaturedPostCard key={post.slug} postObject = {post} />
              ))}
          </div>
          <div className="home-first__col-02">
            <h2>Latest</h2>
            {nextPosts.map((post) => (
                <LatestPostCard key={post.slug} postObject = {post} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFirst;
