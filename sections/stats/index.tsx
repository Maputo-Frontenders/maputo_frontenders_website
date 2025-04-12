"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { cards } from "./data";
import { DictionaryProps } from "@/lib/getDictionary";
import { ParserToHtml } from "@/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  intl: DictionaryProps;
};

export function ImpactSection({ intl }: Props) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full text-mf-white space-y-4 container"
      id="impacto"
      aria-labelledby="impact-section-title"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
    >
      <motion.h2
        id="impact-section-title"
        className="uppercase text-sm text-center text-mf-orange"
        variants={item}
      >
        {intl.stats.title}
      </motion.h2>

      <div className="space-y-10">
        <div className="flex flex-col items-center gap-2">
          <motion.h3 className="text-2xl font-bold text-center" variants={item}>
            {ParserToHtml(intl.stats.subtitle, [
              "class",
              "bg-gradient-to-r from-mf-secondProposal via-mf-lightBlue to-mf-purple text-transparent bg-clip-text",
            ])}
          </motion.h3>
          <motion.p
            className="max-w-[650px] text-center text-sm"
            variants={item}
          >
            {intl.stats.description}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10"
          role="list"
          aria-label={intl.stats.title}
          variants={item}
        >
          {cards({ intl }).map((card, index) => (
            <ImpactCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              classNames={card.gradientColor}
              key={card.title}
              index={index}
              inView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ImpactCard({
  icon,
  title,
  description,
  classNames,
  index,
  inView,
}: {
  icon: any;
  title: string;
  description: string;
  classNames?: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className={cn("rounded-lg p-[2px]", classNames)}
      role="listitem"
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <div className="flex w-full h-full bg-mf-background rounded-md p-9 px-12 pb-12 flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image src={icon} alt={`${title} icon`} aria-hidden="true" />
          <h4 id={`impact-card-${index}`} className="font-semibold text-xl">
            {title}
          </h4>
        </div>
        <p
          className="text-sm leading-6 text-mf-white/75"
          aria-labelledby={`impact-card-${index}`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
