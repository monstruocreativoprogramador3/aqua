import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PageIndicator = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Set up intersection observers for each section
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.5,
  });

  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.3,
  });

  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.3,
  });

  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.3,
  });

  // Update the active section based on which section is in view
  useEffect(() => {
    if (heroInView) {
      setActiveSection('hero');
    } else if (section1InView) {
      setActiveSection('section1');
    } else if (section2InView) {
      setActiveSection('section2');
    } else if (section3InView) {
      setActiveSection('section3');
    }
  }, [heroInView, section1InView, section2InView, section3InView]);

  return (
    <>
      {/* Hidden refs to detect sections */}
      <div ref={heroRef} className="hero-observer" />
      <div ref={section1Ref} className="section1-observer" />
      <div ref={section2Ref} className="section2-observer" />
      <div ref={section3Ref} className="section3-observer" />

      {/* Page indicator UI */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex items-center gap-3.5">
        <div className="flex flex-col space-y-4">
          <div
            className={`font-semibold transition-colors duration-300 ${
              activeSection === 'hero' ? 'text-white' : 'text-gray-500'
            }`}
          >
            Start
          </div>
          <div
            className={`w-8 h-8 flex items-center justify-center font-semibold transition-colors duration-300 ${
              activeSection === 'section1'
                ? 'text-white border border-white rounded-full'
                : 'text-gray-500'
            }`}
          >
            01
          </div>
          <div
            className={`w-8 h-8 flex items-center justify-center font-semibold transition-colors duration-300 ${
              activeSection === 'section2'
                ? 'text-white border border-white rounded-full'
                : 'text-gray-500'
            }`}
          >
            02
          </div>
          <div
            className={`w-8 h-8 flex items-center justify-center font-semibold transition-colors duration-300 ${
              activeSection === 'section3'
                ? 'text-white border border-white rounded-full'
                : 'text-gray-500'
            }`}
          >
            03
          </div>
        </div>
        <div className="h-44 w-px bg-white"></div>
      </div>
    </>
  );
};

export default PageIndicator;
