
import React from "react";
import Link from "next/link";

function FeaturedPostCard({ postObject }) {
  return (
    <>
      <div>
        <Link
          href={`/news/${postObject.slug}`}
          className="featured-post"
          style={{ backgroundImage: `url(${postObject.image})` }}
        >
          <div className="post-inner">
            <h3>{postObject.title}</h3>
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: postObject.excerpt }}
            />
            <span>{postObject.format_date}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FeaturedPostCard;
