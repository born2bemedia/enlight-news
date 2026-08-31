"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ArrowButton from "./ArrowButton";

function BackButton() {
  const router = useRouter();

  return (
    <ArrowButton
      variant="outline-dark"
      iconTone="none"
      iconPosition="left"
      iconSrc="/images/redesign/icon-back.svg"
      onClick={() => router.back()}
    >
      Back
    </ArrowButton>
  );
}

export default BackButton;
