/* eslint-disable no-unused-vars */
import { m } from 'framer-motion';
import sapoetronicIso from '/sapoetronic-iso.png';

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 bg-[#A9F27C]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Add md:items-center to vertically center columns on desktop */}
        <div className="grid md:grid-cols-2 items-start md:items-center">
          <m.div
            className="flex justify-center sm:mt-10 md:scale-90 lg:scale-85"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <m.img
              src={sapoetronicIso}
              alt="Sapoetronic ISO"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            />
          </m.div>
          <div className="space-y-6 sm:m-0 md:m-8 lg:m-12">
            <m.h2
              id="about-title"
              className="text-5xl font-bold text-[#1A4D1E] text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              What is Sapo?
            </m.h2>
            <m.p
              className="text-lg text-[#002901] leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              For centuries, Sapo has been a symbol of skill, luck, and friendly competition across South
              America - a traditional coin-tossing game that brings people together around laughter, challenge, and precision.
            </m.p>
            <m.p
              className="text-lg text-[#002901] leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Rooted in legend and passed down through generations, Sapo captures the spirit of community and play.
            </m.p>
            <m.p
              className="text-lg text-[#002901] leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              Sapoetronic reimagines this timeless game for the modern era - combining classic gameplay with electronic scoring, sleek design, and durable craftsmanship.
            </m.p>
            <m.p
              className="text-lg text-[#002901] leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              Whether in a bar, a backyard, or a game room, Sapoetronic keeps the tradition alive while adding a high-tech twist that makes every toss more exciting than ever.
            </m.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
