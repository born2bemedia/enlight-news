import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/src/utils/blogUtils";
import SidebarArticle from "../ui/SidebarArticle";
import { BLUR_DATA_URL, IMAGE_QUALITY } from "../ui/imagePlaceholder";

async function Hero() {
  const [featured] = await getPosts("", 1, "", 0);
  const trending = await getPosts("", 3, "Trending", 0);
  const latest = await getPosts("", 3, "", 1);

  if (!featured) return null;

  return (
    <section className="hero">
      <div className="hero__inner">
        <Link href={`/news/${featured.slug}`} className="hero__feature">
          {featured.image && (
            <Image
              src={featured.image}
              alt=""
              fill
              priority
              sizes="(max-width: 992px) 100vw, 70vw"
              quality={IMAGE_QUALITY}
              unoptimized
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: "cover" }}
            />
          )}
          <div className="hero__feature-body">
            <h1 className="hero__feature-title">{featured.title}</h1>
            {featured.excerpt && (
              <div
                className="hero__feature-excerpt"
                dangerouslySetInnerHTML={{ __html: featured.excerpt }}
              />
            )}
          </div>
        </Link>

        <aside className="hero__sidebar">
          {trending.length > 0 && (
            <div className="hero__group">
              <h2 className="hero__group-title">Trending</h2>
              <div className="hero__group-list">
                {trending.map((post) => (
                  <SidebarArticle key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}

          {latest.length > 0 && (
            <div className="hero__group">
              <h2 className="hero__group-title">Latest</h2>
              <div className="hero__group-list">
                {latest.map((post) => (
                  <SidebarArticle key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

export default Hero;
