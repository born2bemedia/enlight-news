import React from "react";
import { getPosts } from "@/src/utils/blogUtils";
import Link from "next/link";
import PostCard from "./PostCard";

async function CategoryPosts({ categoryTitle, category }) {
  let categoryPosts;
  let url;
  if (category == "all") {
    categoryPosts = await getPosts("", 3, "", 0);
    url = "news";
  } else {
    categoryPosts = await getPosts("", 3, category, 0);
    url = category.toLowerCase();
  }

  return (
    <section className="category-wrap">
      <div className="_container">
        <div className="category-wrap__top">
          <h2>{categoryTitle}</h2>
          <Link href={`/${url}`}>
            View all
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15.9999" cy="16.0001" r="11.3592" fill="#0F0F0F" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 32C24.8364 32 32 24.8364 32 16C32 7.16364 24.8364 0 16 0C7.16364 0 0 7.16364 0 16C0 24.8364 7.16364 32 16 32ZM12.7898 20.7898C12.5249 21.0641 12.3783 21.4316 12.3816 21.8129C12.3849 22.1943 12.5379 22.5591 12.8075 22.8288C13.0772 23.0985 13.442 23.2515 13.8234 23.2548C14.2048 23.2581 14.5722 23.1115 14.8465 22.8465L20.6647 17.0284C20.9374 16.7556 21.0906 16.3857 21.0906 16C21.0906 15.6143 20.9374 15.2444 20.6647 14.9716L14.8465 9.15345C14.5722 8.8885 14.2048 8.74189 13.8234 8.7452C13.442 8.74851 13.0772 8.90149 12.8075 9.17117C12.5379 9.44086 12.3849 9.80568 12.3816 10.1871C12.3783 10.5684 12.5249 10.9359 12.7898 11.2102L17.5796 16L12.7898 20.7898Z"
                fill="#97D80F"
              />
            </svg>
          </Link>
        </div>
        <div className="category-wrap__body">
          {categoryPosts.map((post) => (
            <div>
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="featured-post"
              >
                <div
                  className="post-thumb"
                 
                >
                  <div className="image-back" style={{ backgroundImage: `url(${post.image})` }}></div>
                </div>
                <div className="post-inner">
                  <h3>{post.title}</h3>
                  <span>{post.format_date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryPosts;
