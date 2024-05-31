import React from "react";
import { getPosts, getPost } from "@/src/utils/blogUtils";
import "@/public/scss/news.scss";
import Link from "next/link";
import CategoryPosts from "@/src/component/CategoryPosts";
import LatestPostCard from "@/src/component/LatestPostCard";
import Image from "next/image";

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  //console.log(post);
  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: post.image,
    },
  };
}

async function SingleNews({ params: { slug } }) {
  const post = await getPost(slug);
  const trendingPosts = await getPosts("", 3, "Trending", 0);
  return (
    <>
      <div className="single-post">
        <section className="post-first">
          <div className="_container">
            <div className="post-first__body">
              <div className="post-first__col-01">
                <div className="post-thumb">
                  <Image
                    src={post.image}
                    fill={true}
                    placeholder="blur"
                    className="image-back"
                    style={{ objectFit: "cover" }}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8c+dRPQAIUQMbPYh0TwAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="post-content">
                  <h1>{post.title}</h1>
                  <span>{post.format_date}</span>
                  <article dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
              <div className="post-first__col-02">
                <h2>Trending</h2>
                {trendingPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="featured-post"
                  >
                    <div className="post-thumb">
                      <Image
                        src={post.image}
                        fill={true}
                        placeholder="blur"
                        className="image-back"
                        style={{ objectFit: "cover" }}
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
        <CategoryPosts
          categoryTitle={"Related news"}
          category={post.categories[0]}
        />
      </div>
    </>
  );
}

export default SingleNews;
