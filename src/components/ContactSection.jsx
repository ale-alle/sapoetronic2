import { m } from "framer-motion";
import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const glowClasses =
  "hover:text-light-green hover:scale-110 hover:drop-shadow-[0_0_8px_#A3E635] transition-all duration-300";

const ContactSection = () => (
  <m.section
    id="contact"
    className="py-16 px-4 sm:px-6 lg:px-8 bg-[#6BA548]"
    >
    <m.h2
        className="text-5xl font-bold text-yellow-100 mb-16 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
        }}
    >
        Contact Us
    </m.h2>
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <m.h2
        className="text-3xl font-bold text-[#1A4D1E] mb-4 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        Now Seeking Investor Partners!
      </m.h2>
      <m.p
        className="text-base text-[#002901] mb-10 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        Sapoetronic is looking for visionary investor partners to help us grow. If you&rsquo;re interested in joining our journey, please reach out using the form below!
      </m.p>
      <ContactForm />
      </div>
    {/* Animated Email Link */}
    <m.div
      className="flex justify-center mt-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
    <a
      href="mailto:rodolfo@sapoetronic.com"
      className={`flex items-center gap-2 text-[#002901] text-lg font-medium ${glowClasses}`}
    >
      <Mail size={30} strokeWidth={2} />
      rodolfo@sapoetronic.com
    </a>
    </m.div>
  </m.section>
);

export default ContactSection;