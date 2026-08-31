import React from "react";
import Link from "next/link";

function SidebarArticle({ post }) {
  return (
    <Link href={`/news/${post.slug}`} className="sidebar-article">
      <span className="sidebar-article__rule" />
      <span className="sidebar-article__info">
        <span className="sidebar-article__date">{post.format_date}</span>
        <span className="sidebar-article__title">{post.title}</span>
      </span>
    </Link>
  );
}

export default SidebarArticle;
