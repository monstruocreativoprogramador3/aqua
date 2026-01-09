'use client';
import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

const industriesData = [
  {
    icon: '🏛️',
    image: '/municipalities.jpg',
  },
  {
    icon: '🏨',
    image: '/resort.jpg',
  },
  {
    icon: '🏊',
    image: '/water-park.jpg',
  },
  {
    icon: '🏫',
    image: '/outdoor-pool.jpg',
  },
  {
    icon: '💧',
    image: '/water-treatment.jpeg',
  },
];
export default function WhoWeServeSection({ dict }: SectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const industries = useMemo(() => industriesData, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    let currentIndex = activeSlide;

    const interval = setInterval(() => {
      currentIndex += 1;
      if (currentIndex >= industries.length) {
        setActiveSlide(0);
        return;
      }
      setActiveSlide(currentIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [industries, activeSlide]);

  return (
    <section
      id="who-we-serve"
      className="min-h-screen py-12 flex items-center bg-white"
    >
      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Section Number */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Content */}
          <div className="">
            <h2 className="header-title">{dict.serve.title}</h2>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-16 h-px bg-yellow-500"></div>
              <span className="text-yellow-500 font-mono uppercase font-medium tracking-widest">
                {dict.serve.tag}
              </span>
            </div>

            <p className="text-foreground/80 mb-12 text-2xl">
              {dict.serve.description}
            </p>

            <div className="space-y-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex items-start p-4 hover:bg-gray-100  transition-all duration-300 ${
                    activeSlide === index
                      ? 'bg-gray-200 border-l-4 border-blue-400'
                      : 'border border-foreground/5'
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="text-3xl mr-4">{industry.icon}</span>
                  <div>
                    <h4 className="text-2xl font-semibold text-blue-600">
                      {dict.serve.industries[index].title}
                    </h4>
                    <p className="text-foreground/80 text-xl">
                      — {dict.serve.industries[index].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image Carousel */}
          <div className="w-full h-full grid items-center mt-12 lg:mt-0">
            <div className="relative bg-gray-800 w-full p-6 shadow-2xl">
              <div className="overflow-hidden ">
                {/* Carousel */}
                <div className="relative h-96">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`absolute cursor-pointer inset-0 transition-opacity duration-500 ${
                        activeSlide === index
                          ? 'opacity-100'
                          : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        layout="fill"
                        src={industry.image}
                        alt={`${industry.image} project`}
                        className="w-full h-full object-cover "
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div> */}
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="text-3xl mb-2">{industry.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute cursor-pointer rounded-full top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-100 p-2 ll text-white transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute  cursor-pointer rounded-full top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-100 p-2 ll text-white transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`cursor rounded-full pointer w-3 h-3 ll transition-all duration-300 ${
                      activeSlide === index ? 'bg-blue-400 w-6' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
