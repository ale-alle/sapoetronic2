import { m } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <m.section
    id="contact"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-[#6BA548]"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <m.h2
        className="text-3xl font-bold text-dark-green mb-2 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        Seeking Investor Partners
      </m.h2>
      <m.p
        className="text-base text-[#002901] mb-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      >
        Sapoetronic is looking for visionary investor partners to help us grow. If you&rsquo;re interested in joining our journey, please reach out using the form below!
      </m.p>
      <ContactForm />
    </div>
  </m.section>
);

export default ContactSection;