import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLUR_DATA_URL, IMAGE_QUALITY } from "./imagePlaceholder";

function FeatureArticle({ post, sizes = "(max-width: 992px) 100vw, 66vw" }) {
  return (
    <Link href={`/news/${post.slug}`} className="feature-article">
      <div className="feature-article__info">
        <span className="feature-article__date">{post.format_date}</span>
        <div className="feature-article__content">
          <h3 className="feature-article__title">{post.title}</h3>
          {post.excerpt && (
            <div
              className="feature-article__excerpt"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          )}
        </div>
      </div>
      <div className="feature-article__thumb">
        {post.image && (
          <Image
            src={post.image}
            alt=""
            fill
            sizes={sizes}
            quality={IMAGE_QUALITY}
            unoptimized
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </Link>
  );
}

export default FeatureArticle;
