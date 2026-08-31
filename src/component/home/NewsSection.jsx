import React from "react";
import Image from "next/image";
import { IMAGE_QUALITY } from "../ui/imagePlaceholder";
import { getPosts } from "@/src/utils/blogUtils";
import SectionHead from "../ui/SectionHead";
import FeatureArticle from "../ui/FeatureArticle";
import InfoCard from "../ui/InfoCard";

async function NewsSection({ title, category, viewAllHref, chart }) {
  const posts = await getPosts("", 4, category, 0);

  if (posts.length === 0) return null;

  const [feature, ...cards] = posts;

  return (
    <section className="news-section">
      <div className="news-section__inner">
        <SectionHead title={title} viewAllHref={viewAllHref} />

        <div className="news-feed">
          <div className="news-feed__feature">
            <FeatureArticle post={feature} />
          </div>

          {chart && (
            <div className="news-feed__chart chart-card">
              <h3 className="chart-card__title">{chart.title}</h3>
              <div className="chart-card__image">
                <Image
                  src={chart.src}
                  alt={chart.title}
                  width={chart.width}
                  height={chart.height}
                  quality={IMAGE_QUALITY}
                  sizes="(max-width: 992px) 100vw, 33vw"
                />
              </div>
            </div>
          )}

          {cards.map((post) => (
            <InfoCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
