"use client";
import React, { useState } from "react";

const ICONS = [
  {
    name: "Instagram",
    src: "/images/redesign/icon-instagram.svg",
    width: 16,
    height: 16,
    kind: "copy",
  },
  {
    name: "LinkedIn",
    src: "/images/redesign/icon-linkedin.svg",
    width: 20,
    height: 20,
    kind: "linkedin",
  },
  {
    name: "Facebook",
    src: "/images/redesign/icon-facebook.svg",
    width: 11,
    height: 17,
    kind: "facebook",
  },
  {
    name: "X",
    src: "/images/redesign/icon-twitter.svg",
    width: 17,
    height: 15,
    kind: "twitter",
  },
];

function shareHref(kind, url, title) {
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title || "");
  if (kind === "linkedin") {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;
  }
  if (kind === "facebook") {
    return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
  }
  if (kind === "twitter") {
    return `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`;
  }
  return url;
}

function ShareBar({ date, url, title }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="share-bar">
      <div className="share-chip">
        <img
          src="/images/redesign/icon-calendar.svg"
          alt=""
          width={20}
          height={20}
        />
        <span>{date}</span>
      </div>
      <div className="share-chip share-chip--socials">
        <span>Share on</span>
        {ICONS.map((icon) =>
          icon.kind === "copy" ? (
            <button
              key={icon.name}
              type="button"
              className="share-chip__icon"
              onClick={copyLink}
              aria-label={copied ? "Link copied" : "Copy link"}
              title={copied ? "Copied" : "Copy link"}
            >
              <img
                src={icon.src}
                alt=""
                width={icon.width}
                height={icon.height}
              />
            </button>
          ) : (
            <a
              key={icon.name}
              className="share-chip__icon"
              href={shareHref(icon.kind, url, title)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Share on ${icon.name}`}
            >
              <img
                src={icon.src}
                alt=""
                width={icon.width}
                height={icon.height}
              />
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default ShareBar;
