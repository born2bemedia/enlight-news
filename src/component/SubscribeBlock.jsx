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
          <div className="image-wrap">
            <Image
              src={"/images/home/third-block-image.webp"}
              width={592}
              height={510}
            />
          </div>
          <div>
            <h2>
              Get the latest crypto <br />
              news right in your inbox
            </h2>
          </div>

          <div>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeBlock;
