import React from "react";
import { getPosts } from "@/src/utils/blogUtils";
import SectionHead from "../ui/SectionHead";
import NewsListRow from "../ui/NewsListRow";

async function AllNewsSection() {
  const posts = await getPosts("", 6, "", 0);

  if (posts.length === 0) return null;

  return (
    <section className="news-section">
      <div className="news-section__inner">
        <SectionHead title="All news" viewAllHref="/news" />

        <div className="news-list">
          {posts.map((post) => (
            <NewsListRow key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllNewsSection;
