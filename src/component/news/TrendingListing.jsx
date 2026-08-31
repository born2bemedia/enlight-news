import React from "react";
import FeatureArticle from "../ui/FeatureArticle";
import InfoCard from "../ui/InfoCard";
import NewsListRow from "../ui/NewsListRow";
import ArrowButton from "../ui/ArrowButton";
import InkPageHead from "../ui/InkPageHead";

function TrendingListing({
  title,
  description,
  posts,
  page,
  pageCount,
  basePath,
  moreLabel = "More trending news",
  layout = "cards",
  withExcerpt = true,
  chart,
  chartSize,
}) {
  const [featured, ...rest] = posts;
  const hasMore = pageCount > page;
  const moreHref = `${basePath}?page=${page + 1}`;

  return (
    <section className="ink-listing">
      <div className="ink-listing__inner">
        <InkPageHead
          title={title}
          description={description}
          chart={chart}
          chartSize={chartSize}
        />

        {featured ? (
          <div className="ink-listing__feed">
            {layout === "list" ? (
              <>
                <FeatureArticle post={featured} sizes="100vw" />
                {rest.length > 0 && (
                  <div className="news-list">
                    {rest.map((post) => (
                      <NewsListRow key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="trending-feed">
                <div className="trending-feed__feature">
                  <FeatureArticle post={featured} sizes="100vw" />
                </div>
                {rest.map((post) => (
                  <InfoCard
                    key={post.slug}
                    post={post}
                    withExcerpt={withExcerpt}
                  />
                ))}
              </div>
            )}

            {hasMore && (
              <div className="ink-listing__more">
                <ArrowButton href={moreHref} variant="solid" iconTone="dark">
                  {moreLabel}
                </ArrowButton>
              </div>
            )}
          </div>
        ) : (
          <p className="ink-listing__empty">No articles yet.</p>
        )}
      </div>
    </section>
  );
}

export default TrendingListing;
