import React from "react";
import TradingViewWidget from "./TradingViewWidget";

function MarketView() {
  return (
    <section className="market-view">
      <span className="market-view__glow market-view__glow--a" aria-hidden />
      <span className="market-view__glow market-view__glow--b" aria-hidden />

      <div className="market-view__inner">
        <h2 className="market-view__title">Cryptocurrency Market View</h2>
        <div className="market-view__panel">
          <TradingViewWidget />
          <p className="market-view__credit">
            <a
              href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/"
              rel="noopener nofollow"
              target="_blank"
            >
              Crypto markets
            </a>{" "}
            by TradingView
          </p>
        </div>
      </div>
    </section>
  );
}

export default MarketView;
