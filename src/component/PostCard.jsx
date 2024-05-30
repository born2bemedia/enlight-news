import React from "react";
import Link from "next/link";
import Image from "next/image";

function PostCard({ postObject }) {
  return (
    <div>
      <Link href={`/news/${postObject.slug}`} className="featured-post">
        <div className="post-thumb">
          <Image
            src={postObject.image}
            fill={true}
            placeholder="blur"
            className="image-back"
            style={{ objectFit: "cover" }}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8c+dRPQAIUQMbPYh0TwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="post-inner">
          <h3>{postObject.title}</h3>
          <span>{postObject.format_date}</span>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
