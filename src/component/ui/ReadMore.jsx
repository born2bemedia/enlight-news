import React from "react";

function ReadMore({ label = "Read more" }) {
  return (
    <span className="read-more">
      <span className="read-more__label">{label}</span>
      <span className="read-more__icon">
        <img
          src="/images/redesign/arrow.svg"
          alt=""
          width={20}
          height={20}
        />
      </span>
    </span>
  );
}

export default ReadMore;
