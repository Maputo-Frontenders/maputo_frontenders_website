"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Line from "./line";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  image: StaticImageData;
  testimony: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(nextTestimonial, 10000);
  }, [nextTestimonial]);

  const resetAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoSlide]);

  useEffect(() => {
    resetAutoSlide();
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetAutoSlide, startAutoSlide]);

  const getVisibleTestimonials = () => {
    const prevIndex =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentTestimonial + 1) % testimonials.length;

    return [
      testimonials[prevIndex],
      testimonials[currentTestimonial],
      testimonials[nextIndex],
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  const testimonial = testimonials[currentTestimonial];

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="max-w-3xl mx-auto px-4"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials carousel"
    >
      <div
        className="h-56 mb-8 overflow-hidden flex items-center justify-center"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium text-center my-auto"
            role="blockquote"
          >
            {testimonial?.testimony}
          </motion.p>
        </AnimatePresence>
      </div>

      <div
        className="flex justify-center items-center space-x-6 overflow-hidden no-scrollbar"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center">
            <motion.button
              onClick={() =>
                setCurrentTestimonial(
                  (currentTestimonial + index - 1 + testimonials.length) %
                    testimonials.length
                )
              }
              className={`rounded-full ${
                index === 1 ? "border-2 border-mf-turquoise" : ""
              }`}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: index === 1 ? 1 : 0.8,
                transition: { duration: 0.3 },
              }}
              role="tab"
              aria-selected={index === 1}
              aria-label={`View testimonial from ${testimonial?.name}`}
              tabIndex={index === 1 ? 0 : -1}
            >
              <Image
                src={testimonial?.image}
                alt={`${testimonial?.name}, ${testimonial?.role}`}
                width={index === 1 ? 64 : 32}
                height={index === 1 ? 64 : 32}
                className={`rounded-full object-cover transition-all duration-300 ${
                  index === 1 ? "grayscale-0" : "grayscale"
                }`}
              />
            </motion.button>
            {index < visibleTestimonials.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                aria-hidden="true"
              >
                <Line className="ml-8" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="text-center"
          key={currentTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
        >
          <h3
            className="mt-4 font-bold"
            id={`testimonial-author-${currentTestimonial}`}
          >
            {testimonial?.name}
          </h3>
          <p className="text-white text-sm font-light">{testimonial?.role}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

TestimonialCarousel.defaultProps = {
  testimonials: [],
};
