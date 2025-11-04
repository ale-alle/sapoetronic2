/* eslint-disable no-unused-vars */
import { m } from 'framer-motion';
// eslint-disable-next-line no-unused-expressions
m;
import sapoetronicIso from '/sapoetronic-iso.png';

const About = () => {
  return (
    <m.section
      id="about"
      className="px-4 sm:px-6 lg:px-8 bg-green-400"
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once: true, amount:0.2 }}
      transition={{ duration:0.6, ease: [0.22,1,0.36,1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <m.div
            className="flex justify-center scale-60"
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true, amount:0.3 }}
            transition={{ duration:0.6, ease: [0.22,1,0.36,1] }}
          >
            <m.img
              src={sapoetronicIso}
              alt="Sapoetronic ISO"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.4 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.05 }}
            />
          </m.div>
          <div className="space-y-4">
            <m.h2
              className="text-4xl font-bold text-black mb-6 text-center"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.2 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.1 }}
            >
              What is Sapo?
            </m.h2>
            <m.p
              className="text-lg text-black leading-relaxed"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.2 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.15 }}
            >
              For centuries, Sapo has been a symbol of skill, luck, and friendly competition across South
              America - a traditional coin-tossing game that brings people together around laughter, challenge, and precision.
            </m.p>
            <m.p
              className="text-lg text-black leading-relaxed"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.2 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.2 }}
            >
              Rooted in legend and passed down through generations, Sapo captures the spirit of community and play.
            </m.p>
            <m.p
              className="text-lg text-black leading-relaxed"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.2 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.25 }}
            >
              Sapoetronic reimagines this timeless game for the modern era - combining classic gameplay with electronic scoring, sleek design, and durable craftsmanship.
            </m.p>
            <m.p
              className="text-lg text-black leading-relaxed"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.2 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.3 }}
            >
              Whether in a bar, a backyard, or a game room, Sapoetronic keeps the tradition alive while adding a high-tech twist that makes every toss more exciting than ever.
            </m.p>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default About;
