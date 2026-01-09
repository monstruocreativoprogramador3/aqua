'use client';
import { useRef } from 'react';
import { SectionProps } from '@/app/[lang]/dictionaries';
import ContentSection from './ContentSection';

const ProjectGallery = ({ dict }: SectionProps) => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Array of refs to easily map them to sections
  const sectionRefs = [section1Ref, section2Ref, section3Ref];

  return (
    <div id="projects" className="content-sections mt-20">
      <div className="container mx-auto">
        <h2 className="header-title">{dict.projects.title}</h2>
      </div>
      {dict.projects.data.map((section, index) => (
        <div
          key={index}
          ref={sectionRefs[index]}
          className={`section-${index + 1}-wrapper`}
          id={`section-${index + 1}`}
        >
          <ContentSection {...section} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
