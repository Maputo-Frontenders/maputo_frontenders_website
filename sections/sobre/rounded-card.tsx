"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function RoundedCard({
  image,
  title,
  description,
  classNames,
  classNameContainer,
  isIcon,
  index = 0,
}: {
  isIcon?: boolean;
  image: any;
  title: string;
  description: string;
  classNames?: string;
  classNameContainer?: string;
  index?: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className={cn("rounded-full p-[2px] h-fit w-fit", classNames)}
      role="listitem"
      aria-roledescription="card"
      aria-label={title}
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div
        className={cn(
          "flex items-center gap-2 w-fit h-fit rounded-full bg-mf-background px-2 pr-8 py-2",
          classNameContainer,
          isIcon && "items-start"
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
        >
          <Image
            src={image}
            alt={title}
            className={cn(" rounded-full", isIcon ? "w-8 h-8" : "w-12 h-12")}
            aria-roledescription="card image"
          />
        </motion.div>

        <motion.div
          className={cn("flex flex-col ", isIcon && "gap-2")}
          aria-roledescription="card content"
          initial={{ opacity: 0, x: 5 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        >
          <h4 className="font-semibold" aria-roledescription="card title">
            {title}
          </h4>
          <p
            className="text-mf-white/75 max-w-48 text-sm"
            aria-roledescription="card description"
          >
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
