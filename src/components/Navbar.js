import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItemClass = (section) =>
    `text-2xl font-medium ${
      activeSection === section ? 'text-green-400' : 'text-white hover:text-green-400'
    }`;

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section based on scroll position
      const sections = ['home', 'services', 'internships', 'projects', 'workshops', 'contact'];
      let current = 'home';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (window.scrollY >= offsetTop - 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-500 w-6 h-6 rotate-45"></div>
            <span className="text-2xl font-bold text-white">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className={navItemClass('home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className={navItemClass('services')}>
                Services
              </a>
            </li>
            <li>
              <a href="#internships" className={navItemClass('internships')}>
                Internships
              </a>
            </li>
            <li>
              <a href="#projects" className={navItemClass('projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#workshops" className={navItemClass('workshops')}>
                Workshops
              </a>
            </li>
            <li>
              <a href="#contact" className={navItemClass('contact')}>
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col mt-4 gap-4 md:hidden text-center">
            {['home', 'contact', 'services', 'internships', 'workshops', 'projects'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className={navItemClass(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
