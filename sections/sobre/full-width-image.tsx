"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaticImageData } from "next/image";

export function FullWidthImage({
  image,
  alt = "Full width image",
}: {
  image: StaticImageData;
  alt: string;
}) {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={imageRef}
      className="w-full md:h-[500px] overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 1.05 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          aria-roledescription="about page full-width image"
        />
      </motion.div>
    </motion.div>
  );
}
