"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Img1 from "@/assets/hero/img1.jpeg";
import Img2 from "@/assets/hero/img2.jpeg";
import Img3 from "@/assets/hero/img3.jpeg";
import Img4 from "@/assets/hero/img4.jpeg";
import Img5 from "@/assets/hero/img5.png";
import Img6 from "@/assets/hero/img6.jpeg";
import Img7 from "@/assets/hero/img7.jpeg";
import Img8 from "@/assets/hero/img8.jpeg";

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
  const scrollerRef = React.useRef<HTMLDivElement>(null);

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
      <div
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
              alt="Family event picture"
              className=" w-[300px] h-[200px] rounded-lg object-cover"
              width={300}
              height={200}
              priority
            />
            <Image
              src={Img2}
              alt="Girls coders having fun at the event"
              className=" w-[300px] h-[200px] rounded-lg object-cover"
              width={300}
              height={200}
              priority
            />
          </div>
          <Image
            src={Img3}
            alt="People coding together - Code In The Dark"
            className=" w-[600px] h-[416px] rounded-lg object-cover"
            width={600}
            height={416}
            priority
          />
          <Image
            src={Img4}
            alt="Girl with mask coding - Code In The Dark"
            className=" w-[300px] h-[416px] rounded-lg object-cover"
            width={300}
            height={416}
            priority
          />
          <div className="flex flex-col gap-4">
            <Image
              src={Img5}
              alt="Family event picture"
              className=" w-[300px] h-[200px] rounded-lg object-cover"
              width={300}
              height={200}
              priority
            />
            <Image
              src={Img6}
              alt="Boy coding on Code In The Dark"
              className=" w-[300px] h-[200px] rounded-lg object-cover"
              width={300}
              height={200}
              priority
            />
          </div>
          <Image
            src={Img7}
            alt="Family event picture"
            className=" w-[600px] h-[416px] rounded-lg object-cover"
            width={600}
            height={416}
            priority
          />
          <Image
            src={Img8}
            alt="People coding together - Code In The Dark"
            className=" w-[300px] h-[416px] rounded-lg object-cover"
            width={300}
            height={416}
            priority
          />
        </div>
      </div>
    </div>
  );
};
