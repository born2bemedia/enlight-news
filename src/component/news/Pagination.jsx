import React from "react";
import Link from "next/link";

function pageHref(basePath, page) {
  if (page <= 1) return basePath;
  return `${basePath}?page=${page}`;
}

function Pagination({ page, pageCount, basePath }) {
  if (!pageCount || pageCount <= 1) return null;

  return (
    <nav className="news-pagination" aria-label="Pagination">
      {page >= 2 && (
        <Link
          className="news-pagination__arrow"
          href={pageHref(basePath, page - 1)}
          aria-label="Previous page"
        >
          <img src="/images/redesign/icon-back.svg" alt="" width={20} height={20} />
        </Link>
      )}
      {Array.from({ length: pageCount }, (_, index) => {
        const number = index + 1;
        return (
          <Link
            key={number}
            href={pageHref(basePath, number)}
            className={
              number === page
                ? "news-pagination__page is-active"
                : "news-pagination__page"
            }
            aria-current={number === page ? "page" : undefined}
          >
            {number}
          </Link>
        );
      })}
      {page !== pageCount && (
        <Link
          className="news-pagination__arrow news-pagination__arrow--next"
          href={pageHref(basePath, page + 1)}
          aria-label="Next page"
        >
          <img src="/images/redesign/icon-back.svg" alt="" width={20} height={20} />
        </Link>
      )}
    </nav>
  );
}

export default Pagination;
