"use client";
import React, { useState, useEffect } from 'react';
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

  // Função para alternar automaticamente o testemunho a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Alterna a cada 5 segundos
    return () => clearInterval(interval);
  }, [testimonials]);

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="max-w-3xl mx-auto px-4 mt-12">
      <p className="text-2xl font-bold mb-8">
        {testimonial.testimony}
      </p>

      <div className="flex justify-center items-center space-x-6 overflow-x-auto no-scrollbar">
        {testimonials.map((_, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => setCurrentTestimonial(index)}
              className={`rounded-full ${
                index === currentTestimonial ? 'border-2 border-green-500' : ''
              }`}
            >
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={index === currentTestimonial ? 64 : 32} 
                height={index === currentTestimonial ? 64 : 32} 
                className={`rounded-full object-cover transition-all duration-300 ${
                  index === currentTestimonial ? 'grayscale-0' : 'grayscale'
                }`}
              />
            </button>
            {index < testimonials.length - 1 && (
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

