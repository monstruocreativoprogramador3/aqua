import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OurServicesSection({ dict }: SectionProps) {
  return (
    <section id="our-services" className="py-24 min-h-screen">
      <div className="relative container mx-auto px-4 max-w-6xl">
        <h2 className="header-title">{dict.services.title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Design & 3D Modeling */}
          <div className="bg-blue-50  overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-60">
              <Image
                src="/service-1.jpeg"
                height={600}
                width={400}
                alt="3D modeling and technical design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0"></div>
            </div>

            <div className="p-8 flex-grow">
              <h3 className="text-3xl font-bold mb-6">
                {dict.services.card1.title}
              </h3>
              <p className="mb-6 text-xl">{dict.services.card1.description}</p>

              <div className="space-y-3 mb-8 text-lg">
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">-</span>
                  <span className="">{dict.services.card1.item1}</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0  mr-2">-</span>
                  <span className="">{dict.services.card1.item2}</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">-</span>
                  <span className="">{dict.services.card1.item3}</span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-foreground/10">
              <Link href={'#contact'}>
                <button className="hover:text-blue-800 text-lg cursor-pointer font-medium flex items-center transition-colors duration-300">
                  {dict.services.button}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
                </button>{' '}
              </Link>
            </div>
          </div>

          {/* Equipment Selection & Supply */}
          <div className="bg-blue-50 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-60">
              <Image
                src="/service-2.jpg"
                alt="Equipment selection and supply"
                height={600}
                width={400}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0"></div>
            </div>

            <div className="p-8 flex-grow">
              <h3 className="text-3xl font-bold mb-6">
                {dict.services.card2.title}
              </h3>
              <p className="mb-6 text-xl">{dict.services.card2.description}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">-</span>
                  <span className="text-lg">{dict.services.card2.item1}</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">-</span>
                  <span className="text-lg">{dict.services.card2.item2}</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">-</span>
                  <span className="text-lg">{dict.services.card2.item3}</span>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-foreground/10">
              <Link href={'#contact'}>
                <button className="hover:text-blue-100 font-medium flex items-center transition-colors duration-300">
                  {dict.services.button}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
        </div>
        {/* Request Quote CTA */}
        <div className="mt-20 max-w-3xl bg-blue-700 mx-auto">
          <div className="bg-opacity-20 p-8 border border-blue-500 shadow-lg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 opacity-20"></div>
            <div className="absolute -bottom-30 -left-12 w-60 h-60 bg-blue-200 opacity-15"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-3/4">
                <h3 className="text-2xl text-white font-bold mb-3">
                  {dict.services.cta.title}
                </h3>
                <p className="font-mono text-background/80">
                  {dict.services.cta.description}
                </p>
              </div>

              <div className="md:w-1/4 flex justify-center">
                <Link href={'#contact'}>
                  <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 font-mono font-bold py-4 px-8 transition duration-300 inline-flex items-center group whitespace-nowrap">
                    <span className="mr-2">👉</span>
                    {dict.services.cta.button}
                    <span className="flex-shrink-0 ml-2">-&gt;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
