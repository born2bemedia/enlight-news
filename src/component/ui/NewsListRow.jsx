import React from "react";
import Link from "next/link";
import ReadMore from "./ReadMore";

function NewsListRow({ post }) {
  return (
    <Link href={`/news/${post.slug}`} className="news-row">
      <span className="news-row__date">{post.format_date}</span>
      <span className="news-row__content">
        <span className="news-row__title">{post.title}</span>
        {post.excerpt && (
          <span
            className="news-row__excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}
      </span>
      <ReadMore />
    </Link>
  );
}

export default NewsListRow;
