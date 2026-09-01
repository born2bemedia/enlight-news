"use client";
import React, { useEffect, useRef, memo } from "react";

const WIDGET_CONFIG = {
  defaultColumn: "overview",
  screener_type: "crypto_mkt",
  displayCurrency: "USD",
  colorTheme: "dark",
  isTransparent: false,
  locale: "en",
  width: "100%",
  height: 550,
};

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    el.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    el.appendChild(widget);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(WIDGET_CONFIG);
    el.appendChild(script);

    return () => {
      el.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}

export default memo(TradingViewWidget);
