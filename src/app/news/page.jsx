import React from "react";
import { getPosts, getPageCount } from "@/src/utils/blogUtils";
import Link from "next/link";
import "@/public/scss/news.scss";
import PostCard from "@/src/component/PostCard";

export const metadata = {
  title: "All crypto news | Enlight News",
  description:
    "Stay up-to-date on crypto market news with Enlight .news - Analysis and expert insights on Bitcoin, Ethereum, Blockchain, regulations, and compliance.",
  openGraph: {
    title: "All crypto news | Enlight News",
    description:
      "Stay up-to-date on crypto market news with Enlight .news - Analysis and expert insights on Bitcoin, Ethereum, Blockchain, regulations, and compliance.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function parsePageParams(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}

async function AllNews({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const posts = await getPosts(page, 4, "", "");
  const pageCount = await getPageCount();

  return (
    <>
      <section className="news-wrap">
        <div className="_container">
          <div className="news-wrap__top">
            <h2>All news</h2>
            <p>
              Explore the latest news on cryptocurrency markets, regulations,
              and compliance. Stay ahead with our up-to-date coverage and gain
              valuable insights into the ever-evolving world of
              cryptocurrencies.
            </p>
          </div>
          <div className="news-wrap__body">
            {posts.map((post) => (
              <PostCard key={post.slug} postObject={post} />
            ))}
          </div>
          <div className="pagination">
            {page >= 2 && (
              <Link
                className="arrow"
                href={`/news/?page=${page - 1}`}
                title="prev-page"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16.0002"
                    cy="15.9999"
                    r="11.3592"
                    transform="rotate(180 16.0002 15.9999)"
                    fill="#0F0F0F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 -1.39876e-06C7.16364 -6.26265e-07 6.26265e-07 7.16364 1.39876e-06 16C2.17126e-06 24.8364 7.16364 32 16 32C24.8364 32 32 24.8364 32 16C32 7.16363 24.8364 -2.17126e-06 16 -1.39876e-06ZM19.2102 11.2102C19.4751 10.9358 19.6218 10.5684 19.6184 10.1871C19.6151 9.80567 19.4621 9.44086 19.1925 9.17117C18.9228 8.90149 18.558 8.74851 18.1766 8.7452C17.7952 8.74189 17.4278 8.8885 17.1535 9.15345L11.3353 14.9716C11.0626 15.2444 10.9094 15.6143 10.9094 16C10.9094 16.3857 11.0626 16.7556 11.3353 17.0284L17.1535 22.8465C17.4278 23.1115 17.7952 23.2581 18.1766 23.2548C18.558 23.2515 18.9228 23.0985 19.1925 22.8288C19.4622 22.5591 19.6151 22.1943 19.6184 21.8129C19.6218 21.4316 19.4751 21.0641 19.2102 20.7898L14.4204 16L19.2102 11.2102Z"
                    fill="#97D80F"
                  />
                </svg>
              </Link>
            )}
            {Array.from({ length: pageCount }, (_, index) => (
              <Link
                className={index + 1 == page ? "active" : ""}
                key={index + 1}
                href={`/news/?page=${index + 1}`}
                title={index + 1}
              >
                {index + 1}
              </Link>
            ))}
            {page !== pageCount && (
              <Link
                className="arrow"
                href={`/news/?page=${page + 1}`}
                title="next-page"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15.9998"
                    cy="16.0001"
                    r="11.3592"
                    fill="#0F0F0F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 32C24.8364 32 32 24.8364 32 16C32 7.16364 24.8364 0 16 0C7.16364 0 0 7.16364 0 16C0 24.8364 7.16364 32 16 32ZM12.7898 20.7898C12.5249 21.0641 12.3783 21.4316 12.3816 21.8129C12.3849 22.1943 12.5379 22.5591 12.8075 22.8288C13.0772 23.0985 13.442 23.2515 13.8234 23.2548C14.2048 23.2581 14.5722 23.1115 14.8465 22.8465L20.6647 17.0284C20.9374 16.7556 21.0906 16.3857 21.0906 16C21.0906 15.6143 20.9374 15.2444 20.6647 14.9716L14.8465 9.15345C14.5722 8.8885 14.2048 8.74189 13.8234 8.7452C13.442 8.74851 13.0772 8.90149 12.8075 9.17117C12.5379 9.44086 12.3849 9.80568 12.3816 10.1871C12.3783 10.5684 12.5249 10.9359 12.7898 11.2102L17.5796 16L12.7898 20.7898Z"
                    fill="#97D80F"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllNews;
