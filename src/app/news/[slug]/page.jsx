import React from "react";
import { getPosts, getPost } from "@/src/utils/blogUtils";
import "@/public/scss/news.scss";
import Link from "next/link";
import CategoryPosts from "@/src/component/CategoryPosts";
import LatestPostCard from "@/src/component/LatestPostCard";

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
                <img src={post.image} />
                <div className="post-content">
                  <h1>{post.title}</h1>
                  <span>{post.format_date}</span>
                  <article dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
              <div className="post-first__col-02">
                <h2>Trending</h2>
                {trendingPosts.map((post) => (
                  <LatestPostCard key={post.slug} postObject={post} />
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
