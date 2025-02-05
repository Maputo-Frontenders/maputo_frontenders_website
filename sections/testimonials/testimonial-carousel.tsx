"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Line from './line';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  testimony: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel ({ testimonials }: TestimonialCarouselProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Referência para armazenar o intervalo

  // Função para alternar automaticamente o testemunho a cada 5 segundos
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials]);

  useEffect(() => {
    resetAutoSlide();
  }, [currentTestimonial]);

  // retorna  3 testemunhos visíveis a partir do actual com o actual no centro
  const getVisibleTestimonials = () => {
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentTestimonial + 1) % testimonials.length;

    return [
      testimonials[prevIndex],  // O anterior
      testimonials[currentTestimonial],  // O actual (no centro)
      testimonials[nextIndex]  // O próximo
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="max-w-3xl mx-auto px-4 mt-12">
      <p className="text-2xl font-bold mb-8">
        {testimonial.testimony}
      </p>

      <div className="flex justify-center items-center space-x-6 overflow-hidden no-scrollbar">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => setCurrentTestimonial((currentTestimonial + index - 1 + testimonials.length) % testimonials.length)}
              className={`rounded-full ${index === 1 ? 'border-2 border-green-500' : ''}`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={index === 1 ? 64 : 32} 
                height={index === 1 ? 64 : 32} 
                className={`rounded-full object-cover transition-all duration-300 ${index === 1 ? 'grayscale-0' : 'grayscale'}`}
              />
            </button>
            {index < visibleTestimonials.length - 1 && (
              <Line className="ml-8" />
            )}
          </div>
        ))}
      </div>

      <h3 className="mt-4 text-lg font-bold">{testimonial.name}</h3>
      <p className="text-white text-base font-light">{testimonial.role}</p>
    </div>
  );
};
