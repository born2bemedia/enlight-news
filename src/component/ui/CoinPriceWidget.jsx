"use client";
import React, { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://static.coinstats.app/widgets/v6/coin-price.js";

const ATTRS = {
  background: "#1C1B1B",
  "text-color": "#FFFFFF",
  "status-up-color": "#6CCF59",
  "status-down-color": "#FF3535",
  "border-color": "#FFFFFF26",
  "rank-text-color": "#FFA959",
  theme: "dark",
};

let scriptPromise;

function loadCoinStatsScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.customElements?.get("cs-coin-price")) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = undefined;
      reject(new Error("CoinStats script failed"));
    };
    document.body.appendChild(script);
  });

  return scriptPromise;
}

function CoinPriceWidget({
  coin = "bitcoin",
  currency = "USD",
  width,
  height,
}) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;

    loadCoinStatsScript()
      .then(() => {
        if (cancelled || !hostRef.current) return;

        host.innerHTML = "";
        const widget = document.createElement("cs-coin-price");
        Object.entries(ATTRS).forEach(([name, value]) => {
          widget.setAttribute(name, value);
        });
        widget.setAttribute("coin", coin);
        widget.setAttribute("currency", currency);
        if (width) widget.setAttribute("width", String(width));
        if (height) widget.setAttribute("height", String(height));
        host.appendChild(widget);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      if (host) host.innerHTML = "";
    };
  }, [coin, currency, width, height]);

  return <div className="coin-price-widget" ref={hostRef} />;
}

export default CoinPriceWidget;
