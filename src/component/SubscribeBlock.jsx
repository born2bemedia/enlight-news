"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubscribeForm from "./SubscribeForm";

function SubscribeBlock() {
  return (
    <section className="subscribe-block">
      <div className="_container">
        <div className="subscribe-block__body">
          <RevealWrapper origin="bottom" delay={0} className="image-wrap">
            <Image
              src={"/images/home/third-block-image.webp"}
              width={592}
              height={510}
            />
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <h2>
            Get the latest crypto <br/>news right in your inbox
            </h2>
          </RevealWrapper>

          <RevealWrapper origin="bottom" delay={0}>
            <SubscribeForm />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default SubscribeBlock;
