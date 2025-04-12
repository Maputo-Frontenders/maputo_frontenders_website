"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { RoundedCardAnimated } from "./rounded-card";

export function MissionVisionSection({ intl, photoHete, cardsMini }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      className="container px-12 flex flex-col lg:flex-row justify-between w-full gap-8"
      aria-roledescription="about page mission, vision and values section"
      ref={sectionRef}
    >
      {/* Left column - Mission content */}
      <motion.section
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-roledescription="about page mission content"
        role="region"
      >
        <RoundedCardAnimated
          image={photoHete}
          title={"Hete Odete"}
          description={intl.about.president}
          classNames="bg-gradient-cyan-purple"
        />

        <div className="mt-8 max-w-xl leading-relaxed text-mf-white/90 space-y-4">
          {/* Mission statement */}
          <motion.div
            className="space-y-2"
            variants={item}
            aria-roledescription="about page mission statement"
          >
            <h3 className="text-2xl font-bold">{intl.about.mission.title}</h3>
            <p className="text-mf-white/90">{intl.about.mission.description}</p>
          </motion.div>

          {/* Vision statement */}
          <motion.div
            className="space-y-2"
            variants={item}
            aria-roledescription="about page vision statement"
          >
            <h3 className="text-2xl font-bold">{intl.about.vision.title}</h3>
            <p className="text-mf-white/90">{intl.about.vision.description}</p>
          </motion.div>

          {/* Core values */}
          <motion.div
            className="space-y-2"
            variants={item}
            aria-roledescription="about page core values"
          >
            <h3 className="text-2xl font-bold">{intl.about.values.title}</h3>
            <ul className="space-y-4 ml-2 text-mf-white/90">
              <motion.li variants={item}>
                <span className="text-mf-secondary font-bold">
                  {intl.about.values.collaboration.title}
                </span>{" "}
                {intl.about.values.collaboration.description}
              </motion.li>
              <motion.li variants={item}>
                <span className="text-mf-lightBlue font-bold">
                  {intl.about.values.inclusion.title}
                </span>{" "}
                {intl.about.values.inclusion.description}
              </motion.li>
              <motion.li variants={item}>
                <span className="text-mf-orange font-bold">
                  {intl.about.values.excellence.title}
                </span>{" "}
                {intl.about.values.excellence.description}
              </motion.li>
              <motion.li variants={item}>
                <span className="text-mf-pink font-bold">
                  {intl.about.values.innovation.title}
                </span>{" "}
                {intl.about.values.innovation.description}
              </motion.li>
              <motion.li variants={item}>
                <span className="text-mf-purple font-bold">
                  {intl.about.values.integrity.title}
                </span>{" "}
                {intl.about.values.integrity.description}
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Right column - Stats cards */}
      <motion.section
        className="sticky h-fit top-4 flex flex-col gap-4"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-roledescription="about page stats cards"
      >
        {cardsMini({ intl }).map((card, index) => (
          <motion.div
            key={card.title}
            variants={item}
            custom={index}
            transition={{ delay: index * 0.1 }}
          >
            <RoundedCardAnimated
              image={card.icon}
              title={card.title}
              description={card.description}
              classNames={card.gradientColor + " rounded-[40px]"}
              classNameContainer={"px-8 py-4 rounded-[40px]"}
              isIcon={true}
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
