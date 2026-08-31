import React from "react";
import ArrowButton from "./ArrowButton";

function SectionHead({ title, viewAllHref }) {
  return (
    <div className="section-head">
      <div className="section-head__row">
        <h2 className="section-head__title">{title}</h2>
        {viewAllHref && (
          <ArrowButton href={viewAllHref} variant="outline" iconTone="dark">
            View all
          </ArrowButton>
        )}
      </div>
      <span className="section-head__rule" />
    </div>
  );
}

export default SectionHead;
