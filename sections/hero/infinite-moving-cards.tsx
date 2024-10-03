"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Img1 from "@/public/hero/img1.png";
import Img2 from "@/public/hero/img2.png";
import Img3 from "@/public/hero/img3.png";
import Img4 from "@/public/hero/img4.png";
import Img5 from "@/public/hero/img5.png";
import Img6 from "@/public/hero/img6.png";
import Img7 from "@/public/hero/img7.png";
import Img8 from "@/public/hero/img8.png";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex gap-4 h-[416px] ">
          <div className="flex flex-col gap-4 ">
            <Image
              src={Img1}
              alt=""
              className=" w-[300px] h-[200px] rounded-lg object-cover"
            />
            <Image
              src={Img2}
              alt=""
              className=" w-[300px] h-[200px] rounded-lg object-cover"
            />
          </div>
          <Image
            src={Img3}
            alt=""
            className=" w-[600px] h-[416px] rounded-lg object-cover"
          />
          <Image
            src={Img4}
            alt=""
            className=" w-[300px] h-[416px] rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4">
            <Image
              src={Img5}
              alt=""
              className=" w-[300px] h-[200px] rounded-lg object-cover"
            />
            <Image
              src={Img6}
              alt=""
              className=" w-[300px] h-[200px] rounded-lg object-cover"
            />
          </div>
          <Image
            src={Img7}
            alt=""
            className=" w-[600px] h-[416px] rounded-lg object-cover"
          />
          <Image
            src={Img8}
            alt=""
            className=" w-[300px] h-[416px] rounded-lg object-cover"
          />
        </div>
      </ul>
    </div>
  );
};
