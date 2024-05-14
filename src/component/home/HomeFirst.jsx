import { getPosts } from "@/src/utils/blogUtils";
import Link from "next/link";
import React from "react";

async function HomeFirst() {
  const lastPosts = await getPosts(1, 1, "", 0);
  const nextPosts = await getPosts(1, 3, "", 1);
  return (
    <section className="home-first">
      <div className="_container">
        <div className="home-first__body">
          <div className="home-first__col-01">
            {lastPosts.map((post) => (
                <Link href={`/news/${post.slug}`} className="featured-post" key={post.slug} style={{ backgroundImage: `url(${post.image})` }}>
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
                <Link href={`/news/${post.slug}`} className="featured-post" key={post.slug} >
                    <div className="post-thumb" style={{ backgroundImage: `url(${post.image})` }}></div>
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
