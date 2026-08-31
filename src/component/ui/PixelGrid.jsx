import React from "react";

// Decorative checker pattern taken verbatim from the Figma "Icon Group" rows.
const PATTERN = [
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
];

function PixelGrid({ className = "" }) {
  return (
    <div className={`pixel-grid ${className}`.trim()} aria-hidden>
      {PATTERN.map((row, rowIndex) => (
        <div className="pixel-grid__row" key={rowIndex}>
          {row.map((filled, cellIndex) => (
            <span key={cellIndex} className={filled ? "is-filled" : ""} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default PixelGrid;
