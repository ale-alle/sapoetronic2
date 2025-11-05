import { m } from 'framer-motion';
// eslint-disable-next-line no-unused-expressions
m;

const Footer = () => {
  return (
    <m.footer
      className="bg-dark-green text-white py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Description */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            <div className="flex items-center mb-4">
              <img
                src="/sapoetronic-icon.png"
                alt="Sapoetronic Logo"
                className="w-20 h-max"
              />
              <img
                src="/sapoetronic-logo.png"
                alt="Sapoetronic Logo"
                className="w-max h-10"
              />
            </div>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18,
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:rodolfo@sapoetronic.com"
                className="flex items-center text-light-green/80 hover:text-light-green transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                rodolfo@sapoetronic.com
              </a>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          className="border-t border-light-green/20 pt-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.22,
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-green/60 text-sm">
              &copy; {new Date().getFullYear()} Sapoetronic.com. All rights
              reserved.
            </p>
          </div>
        </m.div>
      </div>
    </m.footer>
  );
};

export default Footer;
