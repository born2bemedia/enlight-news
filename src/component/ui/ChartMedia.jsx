import React from "react";
import Image from "next/image";
import { IMAGE_QUALITY } from "./imagePlaceholder";
import CoinPriceWidget from "./CoinPriceWidget";
import TransactionsChart from "./TransactionsChart";

function ChartMedia({ chart, imageSizes = "(max-width: 992px) 100vw, 33vw" }) {
  if (!chart) return null;

  if (chart.widget === "transactions") {
    return <TransactionsChart compact={chart.compact} />;
  }

  if (chart.widget) {
    return (
      <CoinPriceWidget
        coin={chart.widget}
        width={chart.width}
        height={chart.height}
      />
    );
  }

  if (chart.src && chart.width && chart.height) {
    return (
      <Image
        src={chart.src}
        alt={chart.alt || chart.title || ""}
        width={chart.width}
        height={chart.height}
        quality={IMAGE_QUALITY}
        sizes={imageSizes}
      />
    );
  }

  if (chart.src) {
    return <img src={chart.src} alt={chart.alt || chart.title || ""} />;
  }

  return null;
}

export default ChartMedia;
