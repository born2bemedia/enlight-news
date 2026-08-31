import React from "react";
import Image from "next/image";
import { IMAGE_QUALITY } from "../ui/imagePlaceholder";

function MarketView() {
  return (
    <section className="market-view">
      <span className="market-view__glow market-view__glow--a" aria-hidden />
      <span className="market-view__glow market-view__glow--b" aria-hidden />

      <div className="market-view__inner">
        <h2 className="market-view__title">Cryptocurrency Market View</h2>
        <div className="market-view__panel">
          <Image
            src="/images/redesign/chart-market-overview.png"
            alt="Cryptocurrency market overview chart"
            width={995}
            height={637}
            quality={IMAGE_QUALITY}
            sizes="(max-width: 992px) 100vw, 995px"
          />
        </div>
      </div>
    </section>
  );
}

export default MarketView;
