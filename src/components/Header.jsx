import { useRef, useEffect } from 'react';

const HEADER_OFFSET = 80; // Adjust as needed

const Header = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Hide menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      const menu = menuRef.current;
      const button = buttonRef.current;
      if (
        menu &&
        !menu.classList.contains('hidden') &&
        !menu.contains(e.target) &&
        !button.contains(e.target)
      ) {
        menu.classList.add('hidden');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'about-title' ? 150 : HEADER_OFFSET;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    // Hide mobile menu after click (optional UX)
    const menu = menuRef.current;
    if (menu && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
    }
  };

  return (
      <header className="bg-[#1A4D1E] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/sapoetronic-logo.png" alt="Logo" className="w-70 h-max mx-auto" />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex space-x-8">
            <button
              type="button"
              onClick={() => scrollToSection('about-title')}
              className="cursor-pointer font-medium text-lg transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_10px_rgba(255,255,120,0.6)]"
            >
              What is Sapo?
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sapoetronic')}
              className="cursor-pointer font-medium text-lg transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_10px_rgba(255,255,120,0.6)]"
            >
              Sapoetronic
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('photos')}
              className="cursor-pointer font-medium text-lg transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_10px_rgba(255,255,120,0.6)]"
            >
              Photos
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('video')}
              className="cursor-pointer font-medium text-lg transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_10px_rgba(255,255,120,0.6)]"
            >
              Video
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer font-medium text-lg transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_10px_rgba(255,255,120,0.6)]"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              type="button"
              aria-label="Open menu"
              onClick={() => {
                const menu = menuRef.current;
                menu.classList.toggle('hidden');
              }}
              className="ml-2 text-white hover:text-light-green cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className="hidden fixed top-16 right-4 bg-dark-green z-50 rounded-lg shadow-lg md:hidden"
          style={{ minWidth: '160px', width: 'max-content' }}
        >
          <div className="flex flex-col space-y-2 p-4">
            <button
              type="button"
              onClick={() => scrollToSection('about-title')}
              className="cursor-pointer font-medium text-left transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_8px_rgba(255,255,120,0.6)]"
            >
              What is Sapo?
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('sapoetronic')}
              className="cursor-pointer font-medium text-left py-2 transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_8px_rgba(255,255,120,0.6)]"
            >
              Sapoetronic
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('photos')}
              className="cursor-pointer font-medium text-left py-2 transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_8px_rgba(255,255,120,0.6)]"
            >
              Photos
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('video')}
              className="cursor-pointer font-medium text-left py-2 transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_8px_rgba(255,255,120,0.6)]"
            >
              Video
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer font-medium text-left py-2 transition duration-300 hover:text-light-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-green rounded hover:[text-shadow:0_0_8px_rgba(255,255,120,0.6)]"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
