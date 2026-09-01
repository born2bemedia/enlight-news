import React from "react";
import { getPosts } from "@/src/utils/blogUtils";
import SectionHead from "../ui/SectionHead";
import InfoCard from "../ui/InfoCard";

async function RelatedNews({ category, excludeSlug }) {
  const posts = (await getPosts("", 8, category || "", 0))
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section className="news-section">
      <div className="news-section__inner">
        <SectionHead title="Related news" />
        <div className="related-feed">
          {posts.map((post) => (
            <InfoCard
              key={post.slug}
              post={post}
              withExcerpt
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedNews;
