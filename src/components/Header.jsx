const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-dark-green text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo placeholder */}
          <div className="flex items-center">
                      <img src="/sapoetronic-logo.png" alt="Logo" className="w-100 h-max" />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-light-green hover:scale-120 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('sapoetronic')}
              className="hover:text-light-green hover:scale-120 transition-colors duration-300 font-medium"
            >
              Sapoetronic
            </button>
            <button
              onClick={() => scrollToSection('design')}
              className="hover:text-light-green hover:scale-120 transition-colors duration-300 font-medium"
            >
              Design
            </button>
            <button
              onClick={() => scrollToSection('photos')}
              className="hover:text-light-green hover:scale-120 transition-colors duration-300 font-medium"
            >
              Photos
            </button>
            <button
              onClick={() => scrollToSection('video')}
              className="hover:text-light-green hover:scale-120 transition-colors duration-300 font-medium"
            >
              Video
            </button>
            <a
              href="mailto:rodolfo@sapoetronic.com"
              className="hover:text-light-green hover:scale-120 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
              className="text-white hover:text-light-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-light-green transition-colors duration-300 font-medium text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('sapoetronic')}
              className="hover:text-light-green transition-colors duration-300 font-medium text-left py-2"
            >
              Sapoetronic
            </button>
            <button
              onClick={() => scrollToSection('design')}
              className="hover:text-light-green transition-colors duration-300 font-medium text-left py-2"
            >
              Design
            </button>
            <button
              onClick={() => scrollToSection('photos')}
              className="hover:text-light-green transition-colors duration-300 font-medium text-left py-2"
            >
              Photos
            </button>
            <button
              onClick={() => scrollToSection('video')}
              className="hover:text-light-green transition-colors duration-300 font-medium text-left py-2"
            >
              Video
            </button>
            <a
              href="mailto:rodolfo@sapoetronic.com"
              className="hover:text-light-green transition-colors duration-300 font-medium py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
