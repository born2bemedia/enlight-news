import React from "react";
import { getPosts } from "@/src/utils/blogUtils";
import SectionHead from "../ui/SectionHead";
import InfoCard from "../ui/InfoCard";

async function AttentionSection() {
  const posts = await getPosts("", 3, "Trending", 0);

  if (posts.length === 0) return null;

  return (
    <section className="news-section">
      <div className="news-section__inner">
        <SectionHead title="Need your attention" />

        <div className="attention-feed">
          {posts.map((post) => (
            <InfoCard key={post.slug} post={post} withExcerpt />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AttentionSection;
