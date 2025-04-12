"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RoundedCard } from "./rounded-card";
import { DictionaryProps } from "@/lib/getDictionary";
import { StaticImageData } from "next/image";

export function MissionVisionValues({
  intl,
  presidentImage,
  miniCards,
}: {
  intl: DictionaryProps;
  presidentImage: StaticImageData;
  miniCards: {
    title: string;
    description: string;
    icon: string;
    gradientColor: string;
  }[];
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={sectionRef}
      className="container px-12 flex flex-col lg:flex-row justify-between w-full gap-8"
      aria-roledescription="about page mission, vision and values section"
    >
      {/* Left column - Mission content */}
      <motion.section
        aria-roledescription="about page mission content"
        role="region"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <RoundedCard
          image={presidentImage}
          title={"Hete Odete"}
          description={intl.about.president}
          classNames="bg-gradient-cyan-purple"
          index={0}
        />

        <div className="mt-8 max-w-xl leading-relaxed text-mf-white/90 space-y-4">
          {/* Mission statement */}
          <motion.div
            className="space-y-2"
            aria-roledescription="about page mission statement"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">{intl.about.mission.title}</h3>
            <p className="text-mf-white/90">{intl.about.mission.description}</p>
          </motion.div>

          {/* Vision statement */}
          <motion.div
            className="space-y-2"
            aria-roledescription="about page vision statement"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold">{intl.about.vision.title}</h3>
            <p className="text-mf-white/90">{intl.about.vision.description}</p>
          </motion.div>

          {/* Core values */}
          <motion.div
            className="space-y-2"
            aria-roledescription="about page core values"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">{intl.about.values.title}</h3>
            <motion.ul
              className="space-y-4 ml-2 text-mf-white/90"
              variants={listVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <span className="text-mf-secondary font-bold">
                  {intl.about.values.collaboration.title}
                </span>{" "}
                {intl.about.values.collaboration.description}
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="text-mf-lightBlue font-bold">
                  {intl.about.values.inclusion.title}
                </span>{" "}
                {intl.about.values.inclusion.description}
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="text-mf-orange font-bold">
                  {intl.about.values.excellence.title}
                </span>{" "}
                {intl.about.values.excellence.description}
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="text-mf-pink font-bold">
                  {intl.about.values.innovation.title}
                </span>{" "}
                {intl.about.values.innovation.description}
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="text-mf-purple font-bold">
                  {intl.about.values.integrity.title}
                </span>{" "}
                {intl.about.values.integrity.description}
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Right column - Stats cards */}
      <motion.section
        className="sticky h-fit top-4 flex flex-col gap-4"
        aria-roledescription="about page stats cards"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {miniCards.map((card, index) => (
          <RoundedCard
            key={card.title}
            image={card.icon}
            title={card.title}
            description={card.description}
            classNames={card.gradientColor + " rounded-[40px]"}
            classNameContainer={"px-8 py-4 rounded-[40px]"}
            isIcon={true}
            index={index}
          />
        ))}
      </motion.section>
    </div>
  );
}
