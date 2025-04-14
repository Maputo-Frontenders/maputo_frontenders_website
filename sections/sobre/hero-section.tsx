"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ParserToHtml } from "@/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { DictionaryProps } from "@/lib/getDictionary";
import { ROUTES } from "@/utils/routes";

export function HeroSection({
  intl,
  backgroundImages,
}: {
  intl: DictionaryProps;
  backgroundImages: any;
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="relative" ref={sectionRef}>
      <div className="-z-50">
        <Image
          src={backgroundImages.blur}
          alt="Background Blur"
          className="absolute -z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-roledescription="background decorative elements"
        />
        <div>
          <Image
            src={backgroundImages.square}
            alt="Background Square"
            className="hidden md:block absolute -z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full"
            aria-roledescription="background decorative elements"
          />
        </div>
        <Image
          src={backgroundImages.radial}
          alt="Background Radial"
          className="absolute -z-50 top-full left-1/2 -translate-x-1/2 translate-y-1/2 w-full opacity-75"
          aria-roledescription="background decorative elements"
        />
      </div>

      <div className="overflow-x-hidden w-full px-4 text-mf-white z-50">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - History text with fade in animation */}
          <motion.div
            className="container max-w-3xl lg:pl-10 xl:pl-10 2xl:pl-36 3xl:max-w-4xl 3xl:pl-56 mt-8 flex flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Breadcrumbs
              items={[
                { title: intl.navigation.home, href: ROUTES.HOME },
                { title: intl.navigation.about, href: ROUTES.ABOUT },
              ]}
              aria-roledescription="breadcrumbs"
            />

            <div
              className="flex flex-col gap-8"
              aria-roledescription="about page history content"
            >
              <motion.div
                className="text-5xl font-bold leading-snug"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1>
                  {intl.about.history.title}{" "}
                  <span className="bg-gradient-cyan-orange text-transparent bg-clip-text">
                    {intl.about.history.subtitle}
                  </span>{" "}
                  <br />
                </h1>
              </motion.div>

              <motion.div
                className="leading-relaxed text-mf-white/90 space-y-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p>{ParserToHtml(intl.about.history.founders)}</p>
                <p className="hidden lg:block">
                  {ParserToHtml(intl.about.history.origin)}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Images gallery with staggered animation */}
          <motion.div
            className="relative mx-auto lg:ml-auto lg:mt-24"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="[mask-image:linear-gradient(to_right,transparent,white_0%,white_60%,transparent)] flex gap-4 h-[500px] -mx-4 lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Image
                  src={backgroundImages.img4}
                  alt="Image 4"
                  className="w-[380px] h-[500px] rounded-lg object-cover"
                  aria-roledescription="about page image 4"
                />
              </motion.div>
              <div className="xl:flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <Image
                    src={backgroundImages.img5}
                    alt="Image 5"
                    className="w-[380px] h-[250px] rounded-lg object-cover"
                    aria-roledescription="about page image 5"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <Image
                    src={backgroundImages.img6}
                    alt="Image 6"
                    className="w-[380px] h-[250px] rounded-lg object-cover"
                    aria-roledescription="about page image 6"
                  />
                </motion.div>
              </div>
            </div>
            {/* Mobile-only text */}
            <motion.div
              className="container max-w-3xl lg:pl-10 xl:pl-10 2xl:pl-36 3xl:max-w-4xl 3xl:pl-56 mt-8 flex flex-col gap-8 lg:hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <p>{ParserToHtml(intl.about.history.origin)}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
