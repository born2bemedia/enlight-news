import { getPosts } from "@/src/utils/blogUtils";
import Link from "next/link";
import React from "react";
import FeaturedPostCard from "../FeaturedPostCard";
import LatestPostCard from "../LatestPostCard";
import Image from "next/image";

async function HomeFirst() {
  const lastPosts = await getPosts("", 1, "", 0);
  const nextPosts = await getPosts("", 3, "", 1);
  return (
    <section className="home-first">
      <div className="_container">
        <div className="home-first__body">
          <div className="home-first__col-01">
            {lastPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="featured-post"
              >
                <Image
                  src={post.image}
                  fill={true}
                  placeholder="blur"
                  className="image-back"
                  style={{objectFit: "cover"}}
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8c+dRPQAIUQMbPYh0TwAAAABJRU5ErkJggg=="
                />
                <div className="post-inner">
                  <h3>{post.title}</h3>
                  <div
                    className="excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <span>{post.format_date}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="home-first__col-02">
            <h2>Latest</h2>
            {nextPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="featured-post"
              >
                <div className="post-thumb">
                  <Image
                    src={post.image}
                    fill={true}
                    style={{objectFit: "cover"}}
                    placeholder="blur"
                    className="image-back"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8c+dRPQAIUQMbPYh0TwAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="post-inner">
                  <h3>{post.title}</h3>
                  <span>{post.format_date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFirst;
