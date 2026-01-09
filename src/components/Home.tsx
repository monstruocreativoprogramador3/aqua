'use client';
import { FaArrowRight } from 'react-icons/fa';
import React, { useRef } from 'react';
import { DictType } from '@/app/[lang]/dictionaries';
import Link from 'next/link';

export default function HomeComponent({ dict }: { dict: DictType }) {
  const heroRef = useRef(null);

  return (
    <div
      ref={heroRef}
      className="flex flex-col max-sm:items-start max-sm:justify-start items-center justify-center pt-16 pb-32 text-center md:min-h-screen"
    >
      <div className="px-3">
        <h1 className="text-white text-4xl lg:text-7xl font-bold max-w-3xl mb-8">
          {dict.hero.title}
        </h1>
      </div>
      <div className="max-sm:text-sm flex items-center space-x-2 mb-6">
        <span className="text-yellow-300 uppercase font-medium tracking-widest font-mono">
          {dict.hero.description}
        </span>
      </div>

      <div className="mt-8">
        <Link
          href={'#contact'}
          className="flex items-center text-white space-x-2 cursor-pointer hover:text-gray-300 transition-colors font-mono"
          // onClick={scrollToFirstSection}
        >
          <span>{dict.hero.button}</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
