import React from "react";
import NewsListRow from "../ui/NewsListRow";
import Pagination from "./Pagination";
import ArticleCta from "../article/ArticleCta";

export function parsePageParams(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue, 10);
    if (isFinite(page) && page > 0) return page;
  }
  return 1;
}

function NewsListing({ title, description, posts, page, pageCount, basePath }) {
  return (
    <>
      <section className="news-listing">
        <div className="news-listing__inner">
          <div className="section-head">
            <div className="section-head__row">
              <h1 className="section-head__title">{title}</h1>
            </div>
            {description && (
              <p className="news-listing__intro">{description}</p>
            )}
            <span className="section-head__rule" />
          </div>

          {posts.length > 0 ? (
            <div className="news-list">
              {posts.map((post) => (
                <NewsListRow key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="news-listing__empty">No articles yet.</p>
          )}

          <Pagination page={page} pageCount={pageCount} basePath={basePath} />
        </div>
      </section>
      <ArticleCta />
    </>
  );
}

export default NewsListing;
