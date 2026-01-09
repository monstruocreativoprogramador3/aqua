'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SectionProps } from '@/app/[lang]/dictionaries';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = ({ dict }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    const segments = pathname.split('/');

    // Replace the language segment (assuming it's the first after the slash)
    if (segments[1] === 'en' || segments[1] === 'es') {
      segments[1] = newLang;
    } else {
      segments.splice(1, 0, newLang); // insert at position 1 if not present
    }

    const newPath = segments.join('/') || '/';
    setLanguage(newLang); // Update context + localStorage
    router.push(newPath);
  };

  // Handle screen resize and scroll
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`${
          isScrolled
            ? 'fixed top-0 left-0 right-0 bg-blue-900 shadow-lg z-30'
            : 'bg-transparent'
        } flex justify-between items-center py-6 px-8 transition-all duration-300`}
      >
        <div className="text-white text-2xl lg:text-4xl font-bold">
          <Link href="/">AQUATOPIA</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {dict.navigation.map((nav, index) => (
            <Link
              href={`#${nav.link}`}
              key={index}
              className="text-white hover:text-gray-300"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleLanguage}
          title={language === 'en' ? '🇬🇧EN' : '🇪🇸ES'}
          className="text-white max-md:hidden flex items-center"
        >
          {language === 'en' ? '🇬🇧EN' : '🇪🇸ES'} <ChevronDown />
        </button>

        {/* Desktop Account Button */}
        <div className="hidden md:block"></div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Add padding when navbar is fixed to prevent content jumping */}
      {isScrolled && <div className="h-24"></div>}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-blue-700">
              <span className="text-black text-xl font-bold">
                <button
                  onClick={toggleLanguage}
                  title={language === 'en' ? '🇬🇧EN' : '🇪🇸ES'}
                  className="text-black flex items-center"
                >
                  {language === 'en' ? '🇬🇧EN' : '🇪🇸ES'} <ChevronDown />
                </button>
              </span>
              <button
                className="text-black"
                onClick={toggleSidebar}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-4 pl-5 md:hidden space-x-8">
              {dict.navigation.map((nav, index) => (
                <Link
                  href={`#${nav.link}`}
                  key={index}
                  className="text-black hover:text-blue-500"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay when sidebar is open */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
