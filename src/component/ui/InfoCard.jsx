import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReadMore from "./ReadMore";
import { BLUR_DATA_URL, IMAGE_QUALITY } from "./imagePlaceholder";

function InfoCard({
  post,
  withExcerpt = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw",
}) {
  return (
    <Link href={`/news/${post.slug}`} className="info-card">
      <div className="info-card__thumb">
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
      <div className="info-card__body">
        <h3 className="info-card__title">{post.title}</h3>
        {withExcerpt && post.excerpt && (
          <div
            className="info-card__excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}
        <ReadMore />
      </div>
    </Link>
  );
}

export default InfoCard;
