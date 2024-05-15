import React from "react";
import Link from "next/link";

function LatestPostCard({ postObject }) {
  return (
    <div >
      <Link
        href={`/news/${postObject.slug}`}
        className="featured-post"
        
      >
        <div
          className="post-thumb"
          style={{ backgroundImage: `url(${postObject.image})` }}
        ></div>
        <div className="post-inner">
          <h3>{postObject.title}</h3>
          <span>{postObject.format_date}</span>
        </div>
      </Link>
    </div>
  );
}

export default LatestPostCard;
