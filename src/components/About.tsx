import { SectionProps } from '@/app/[lang]/dictionaries';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutUsSection({ dict }: SectionProps) {
  return (
    <section id="about" className="my-20 py-24">
      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left column - Content */}
          <div className="lg:w-1/2">
            <h2 className="header-title">{dict.about.title}</h2>
            <p className="mb-6 text-2xl text-foreground/70">
              {dict.about.text1}
            </p>
            <p className="mb-6 text-2xl text-foreground/70">
              {dict.about.text2}
            </p>
            <p className="mb-6 text-2xl text-foreground/70">
              {dict.about.text3}
            </p>
            <div className="border-l-4 border-blue-400 pl-6 my-10">
              <p className="text-xl italic">{dict.about.note}</p>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden ">
                <Image
                  layout="fill"
                  src="/api/placeholder/600/500"
                  alt="Aquatic engineering project"
                  className="w-full  shadow-2xl transform transition hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32">
                <svg
                  viewBox="0 0 100 100"
                  className="text-blue-400 opacity-30 w-full h-full"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-10 z-50  flex justify-center">
              <Link href={'#projects'}>
                <button
                  style={{ zIndex: 1000 }}
                  className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-mono uppercase py-3 px-8 transition duration-300 inline-flex items-center group"
                >
                  {dict.about.explore}
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
                </button>{' '}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="header-title text-center mb-24 mt-52">
            {dict.about.why.title}
          </h3>
          <ul className="grid lg:grid-cols-3 max-md:gap-8 gap-4 items-center">
            <li className="gap-3 p-8 grid bg-blue-700">
              <div className="max-lg:m-auto flex-shrink-0 mb-3 text-green-400 text-xl">
                <Image height={50} width={50} alt="icon" src={'/engr.svg'} />
              </div>
              <div>
                <span className="font-semibold text-2xl text-white">
                  {dict.about.why.card1.title}
                </span>
                <div className="text-background/80 mt-4 text-xl">
                  {' '}
                  {dict.about.why.card1.description}
                </div>
              </div>
            </li>
            <li className="gap-3 p-8 grid bg-blue-700">
              <div className="flex-shrink-0 max-lg:m-auto text-green-400 text-xl">
                <Image height={50} width={50} alt="icon" src={'/cert.svg'} />
              </div>
              <div>
                <span className="font-semibold text-2xl text-white">
                  {dict.about.why.card2.title}
                </span>
                <div className="text-background/80 mt-4 text-xl">
                  {dict.about.why.card2.description}
                </div>
              </div>
            </li>
            <li className="gap-3 p-8 grid bg-blue-700">
              <div className="flex-shrink-0 max-lg:m-auto text-green-400 text-xl">
                <Image
                  height={50}
                  width={50}
                  alt="icon"
                  src={'/fluent_point.svg'}
                />
              </div>
              <div>
                <span className="font-semibold text-2xl text-white">
                  {dict.about.why.card3.title}
                </span>
                <div className="text-background/80 mt-4 text-xl">
                  {dict.about.why.card3.description}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
