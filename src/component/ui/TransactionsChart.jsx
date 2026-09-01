"use client";
import React, { useMemo, useState } from "react";
import data from "@/src/data/n-transactions-total.json";

const RANGES = [
  { id: "1M", label: "1M", ms: 30 * 24 * 60 * 60 * 1000 },
  { id: "3M", label: "3M", ms: 90 * 24 * 60 * 60 * 1000 },
  { id: "6M", label: "6M", ms: 180 * 24 * 60 * 60 * 1000 },
  { id: "1Y", label: "1Y", ms: 365 * 24 * 60 * 60 * 1000 },
  { id: "3Y", label: "3Y", ms: 3 * 365 * 24 * 60 * 60 * 1000 },
  { id: "All", label: "All", ms: Infinity },
];

const WIDTH = 640;
const HEIGHT = 220;
const PAD = { top: 16, right: 52, bottom: 28, left: 52 };

function sliceSeries(points, rangeMs) {
  if (!points?.length) return [];
  if (!Number.isFinite(rangeMs)) return points;
  const end = points[points.length - 1].x;
  const start = end - rangeMs;
  return points.filter((point) => point.x >= start);
}

function scale(points, key, size) {
  const values = points.map((point) => point[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return {
    min,
    max,
    at: (value) => size - ((value - min) / span) * size,
  };
}

function toPath(points, xAt, yAt) {
  return points
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command}${xAt(point.x).toFixed(2)} ${yAt(point.y).toFixed(2)}`;
    })
    .join(" ");
}

function formatCount(value) {
  if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  return Math.round(value).toLocaleString("en-US");
}

function formatUsd(value) {
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
  return `$${Math.round(value)}`;
}

function formatDate(ms) {
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function TransactionsChart({ compact = false }) {
  const [range, setRange] = useState("1M");
  const rangeMs = RANGES.find((item) => item.id === range)?.ms ?? Infinity;

  const chart = useMemo(() => {
    const txs = sliceSeries(data["n-transactions-total"], rangeMs);
    const prices = sliceSeries(data["market-price"], rangeMs);
    if (txs.length < 2) return null;

    const innerW = WIDTH - PAD.left - PAD.right;
    const innerH = HEIGHT - PAD.top - PAD.bottom;
    const minX = Math.min(txs[0].x, prices[0]?.x ?? txs[0].x);
    const maxX = Math.max(txs[txs.length - 1].x, prices[prices.length - 1]?.x ?? txs[0].x);
    const xSpan = maxX - minX || 1;
    const xAt = (x) => PAD.left + ((x - minX) / xSpan) * innerW;
    const txScale = scale(txs, "y", innerH);
    const priceScale = prices.length ? scale(prices, "y", innerH) : txScale;
    const yTx = (y) => PAD.top + txScale.at(y);
    const yPrice = (y) => PAD.top + priceScale.at(y);

    return {
      txPath: toPath(txs, xAt, yTx),
      pricePath: prices.length ? toPath(prices, xAt, yPrice) : "",
      txTicks: [txScale.max, (txScale.max + txScale.min) / 2, txScale.min],
      priceTicks: [priceScale.max, (priceScale.min + priceScale.max) / 2, priceScale.min],
      xLabels: [
        { x: PAD.left, label: formatDate(minX) },
        { x: WIDTH - PAD.right, label: formatDate(maxX) },
      ],
    };
  }, [rangeMs]);

  return (
    <div className={`tx-chart${compact ? " tx-chart--compact" : ""}`}>
      {!compact && (
        <div className="tx-chart__head">
          <h3>Total Number of Transactions</h3>
          <p>The total number of transactions on the blockchain.</p>
        </div>
      )}

      <div className="tx-chart__ranges" role="tablist" aria-label="Chart range">
        {RANGES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={range === item.id}
            className={range === item.id ? "is-active" : undefined}
            onClick={() => setRange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="tx-chart__legend">
        <span className="tx-chart__swatch tx-chart__swatch--price" />
        Market Price (USD)
        <span className="tx-chart__swatch tx-chart__swatch--tx" />
        Total Transactions
      </div>

      {chart && (
        <svg
          className="tx-chart__svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label="Total blockchain transactions and market price"
        >
          {chart.txTicks.map((tick, index) => {
            const y =
              PAD.top +
              ((HEIGHT - PAD.top - PAD.bottom) * index) / (chart.txTicks.length - 1);
            return (
              <g key={`grid-${index}`}>
                <line
                  x1={PAD.left}
                  x2={WIDTH - PAD.right}
                  y1={y}
                  y2={y}
                  className="tx-chart__grid"
                />
                <text x={8} y={y + 4} className="tx-chart__tick">
                  {formatCount(tick)}
                </text>
                <text x={WIDTH - 8} y={y + 4} className="tx-chart__tick tx-chart__tick--end">
                  {formatUsd(chart.priceTicks[index])}
                </text>
              </g>
            );
          })}
          {chart.pricePath && (
            <path d={chart.pricePath} className="tx-chart__line tx-chart__line--price" />
          )}
          <path d={chart.txPath} className="tx-chart__line tx-chart__line--tx" />
          {chart.xLabels.map((item, index) => (
            <text
              key={`x-${item.label}`}
              x={item.x}
              y={HEIGHT - 6}
              className={`tx-chart__tick${index === chart.xLabels.length - 1 ? " tx-chart__tick--end" : ""}`}
            >
              {item.label}
            </text>
          ))}
        </svg>
      )}
    </div>
  );
}

export default TransactionsChart;
