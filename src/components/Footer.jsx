import { m } from 'framer-motion';
import { Youtube, Facebook, Instagram } from 'lucide-react';

const glowClasses =
  "hover:text-light-green hover:scale-110 hover:drop-shadow-[0_0_8px_#A3E635] transition-all duration-300";

const Footer = () => {
  return (
    <m.footer className="bg-[#1A4D1E] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <m.div
          className="
            flex flex-col items-center gap-4
            md:flex-row md:gap-0
          "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.22,
          }}
        >
          {/* Left: Copyright and Powered by */}
          <div
            className="
              order-3 w-full flex flex-col items-center justify-center
              md:order-1 md:w-1/3 md:items-center md:justify-start
              text-light-green/60 text-sm
            "
          >
            <span>
              &copy; {new Date().getFullYear()} Sapoetronic.
            </span>
            <span>
              Powered by{' '}
              <a
                href="https://tincanstudios.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-[#A9F27C]"
              >
                Tin Can Studios
              </a>
            </span>
          </div>

          {/* Center: Logo as Home Link */}
          <div
            className="
              order-2 w-full flex justify-center
              md:order-2 md:w-1/3 md:justify-center
            "
          >
            <a href="/" aria-label="Home" className={glowClasses}>
              <img
                src="/sapoetronic-icon.png"
                alt="Sapoetronic Logo"
                className="w-16 h-16"
              />
            </a>
          </div>

          {/* Right: Social Icons */}
          <div
            className="
              order-1 w-full flex justify-center items-center
              md:order-3 md:w-1/3 md:justify-center
              gap-4
            "
          >
            <a
              href="https://www.youtube.com/channel/UCAkpnWPdmxaCKrYlLBlU7FA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={glowClasses}
            >
              <Youtube size={40} />
            </a>
            <a
              href="https://www.facebook.com/sapoetronic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={glowClasses}
            >
              <Facebook size={38} />
            </a>
            {/* Uncomment to enable Instagram
            <a
              href="https://instagram.com/sapoetronic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={glowClasses}
            >
              <Instagram size={30} />
            </a>
            */}
          </div>
        </m.div>
      </div>
    </m.footer>
  );
};

export default Footer;
