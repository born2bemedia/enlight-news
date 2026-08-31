import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPosts, getPost } from "@/src/utils/blogUtils";
import { BLUR_DATA_URL, IMAGE_QUALITY } from "@/src/component/ui/imagePlaceholder";
import BackButton from "@/src/component/ui/BackButton";
import ShareBar from "@/src/component/ui/ShareBar";
import SidebarArticle from "@/src/component/ui/SidebarArticle";
import RelatedNews from "@/src/component/article/RelatedNews";
import ArticleCta from "@/src/component/article/ArticleCta";
import "@/public/scss/news.scss";

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  if (!post) {
    return { title: "Article not found | Enlight News" };
  }
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
  if (!post) notFound();

  const trendingPosts = (await getPosts("", 4, "Trending", 0))
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  const shareUrl = `https://enlight.news/news/${slug}`;
  const category = post.categories?.[0] || "";

  return (
    <div className="article-page">
      <section className="article-hero">
        <div className="article-hero__head">
          <BackButton />
          <div className="article-hero__title-row">
            <h1>{post.title}</h1>
            <ShareBar
              date={post.format_date}
              url={shareUrl}
              title={post.title}
            />
          </div>
        </div>
        {post.image && (
          <div className="article-hero__image">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="100vw"
              quality={IMAGE_QUALITY}
              unoptimized
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}
      </section>

      <section className="article-main">
        <article
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        {trendingPosts.length > 0 && (
          <aside className="article-trending">
            <p className="article-trending__title">Trending</p>
            <div className="article-trending__list">
              {trendingPosts.map((item) => (
                <SidebarArticle key={item.slug} post={item} />
              ))}
            </div>
          </aside>
        )}
      </section>

      <RelatedNews category={category} excludeSlug={slug} />
      <ArticleCta />
    </div>
  );
}

export default SingleNews;
