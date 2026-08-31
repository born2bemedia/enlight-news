import React from "react";
import Link from "next/link";

const ARROW = {
  accent: "/images/redesign/btn-arrow-dark.svg",
  dark: "/images/redesign/btn-arrow-light.svg",
};

function ArrowButton({
  href,
  children,
  variant = "solid",
  iconTone = "dark",
  iconPosition = "right",
  iconSrc,
  type = "button",
  disabled,
  onClick,
  className = "",
}) {
  const classes = [
    "arrow-button",
    `arrow-button--${variant}`,
    `arrow-button--icon-${iconTone}`,
    iconPosition === "left" && "arrow-button--icon-left",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const src = iconSrc || ARROW[iconTone];

  const icon = (
    <span className="arrow-button__icon">
      {src && <img src={src} alt="" width={20} height={20} />}
    </span>
  );
  const label = <span className="arrow-button__label">{children}</span>;
  const inner =
    iconPosition === "left" ? (
      <>
        {icon}
        {label}
      </>
    ) : (
      <>
        {label}
        {icon}
      </>
    );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {inner}
    </button>
  );
}

export default ArrowButton;
