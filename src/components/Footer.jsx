const Footer = () => {
  return (
    <footer className="bg-dark-green text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
                          <img src="/sapoetronic-icon.png" alt="Sapoetronic Logo" className="w-20 h-max" />
              <span className="ml-3 text-xl font-semibold">Sapoetronic</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:rodolfo@sapoetronic.com" 
                className="flex items-center text-light-green/80 hover:text-light-green transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rodolfo@sapoetronic.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light-green/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-green/60 text-sm">
              &copy; {new Date().getFullYear()} Sapoetronic.com. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-light-green/60 hover:text-light-green text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-light-green/60 hover:text-light-green text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
