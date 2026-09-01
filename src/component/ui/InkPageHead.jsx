import React from "react";
import ChartMedia from "./ChartMedia";

function InkPageHead({
  title,
  description,
  chart,
  chartSize = "sm",
  tone = "ink",
}) {
  const chartClass = [
    "ink-page-head__chart",
    `ink-page-head__chart--${chartSize}`,
    chart?.widget && "ink-page-head__chart--widget",
    chart?.widget === "transactions" && "ink-page-head__chart--tx",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={`ink-page-head${tone === "light" ? " ink-page-head--light" : ""}`}
    >
      <div className={`ink-page-head__top${chart ? " ink-page-head__top--split" : ""}`}>
        <div className="ink-page-head__copy">
          <h1 className="ink-page-head__title">{title}</h1>
          {description && (
            <div className="ink-page-head__intro">
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}
        </div>
        {chart && (
          <div className={chartClass}>
            <ChartMedia chart={chart} />
          </div>
        )}
      </div>
      <span className="ink-page-head__rule" />
    </header>
  );
}

export default InkPageHead;
