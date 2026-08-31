import React from "react";

function InkPageHead({
  title,
  description,
  chart,
  chartSize = "sm",
  tone = "ink",
}) {
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
          <div className={`ink-page-head__chart ink-page-head__chart--${chartSize}`}>
            <img src={chart.src} alt={chart.alt || chart.title || ""} />
          </div>
        )}
      </div>
      <span className="ink-page-head__rule" />
    </header>
  );
}

export default InkPageHead;
