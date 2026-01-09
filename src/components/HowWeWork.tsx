'use client';
import { SectionProps } from '@/app/[lang]/dictionaries';
import Link from 'next/link';
import React, { useState } from 'react';

export default function HowWeWorkSection({ dict }: SectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-we-work" className="py-24 min-h-screen">
      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Section Number */}

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column - Content */}
          <div className="lg:w-6/12 flex items-start">
            <div>
              <h2 className="header-title">{dict.howwework.title}</h2>
              <div className="w-16 h-px my-6 bg-yellow-500"></div>

              <p className="mb-10 text-2xl">{dict.howwework.description}</p>
            </div>
          </div>

          {/* Right column - Process Steps */}
          <div className="lg:w-7/12">
            <div className="relative">
              <div
                className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {dict.howwework.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative ml-8 transition-all duration-300 cursor-pointer group`}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div
                      className={`
                        absolute -left-10 flex items-center justify-center w-8 h-8 rounded-full ring-8
                        ${
                          activeStep === index
                            ? 'bg-blue-500 ring-blue-900'
                            : 'bg-gray-800 ring-gray-700 group-hover:bg-blue-400'
                        }
                        transition-all duration-300
                      `}
                    >
                      <span className="text-white font-medium">
                        {index + 1}
                      </span>
                    </div>

                    <div
                      className={`
                        p-6 shadow-lg transition-all duration-300
                        ${
                          activeStep === index
                            ? 'bg-blue-900 border-l-2 border-blue-400'
                            : 'bg-gray-800 bg-opacity-50 border-l-2 border-gray-700 group-hover:border-blue-400'
                        }
                      `}
                    >
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-background/90 mt-4 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-36 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-6">
            {dict.howwework.ready.title}
          </h3>
          <p className="text-foreground/80 mb-8 text-2xl">
            {dict.howwework.ready.description}
          </p>
          <Link href={'#contact'}>
            <button className="bg-blue-700 hover:bg-blue-900 font-mono text-white font-bold py-4 px-8 transition duration-300 inline-flex items-center group">
              {dict.howwework.ready.cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
