import { m } from 'framer-motion';
import { Plug, Hammer, Lightbulb } from 'lucide-react';

const Sapoetronic = () => {
  return (
    <m.section
      id="sapoetronic"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-green"
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once: true, amount:0.2 }}
      transition={{ duration:0.6, ease: [0.22,1,0.36,1] }}
    >
      <div className="max-w-7xl mx-auto">
        <m.h2
          className="text-4xl font-bold text-dark-green mb-6 text-center"
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true, amount:0.2 }}
          transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.1 }}
        >
          Sapoetronic
        </m.h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <m.div
              className="text-center"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.3 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.12 }}
            >
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Plug size={34} color="white" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green mb-2">New Electronic Design</h3>
              <p className="text-gray-600">
                Our innovative electronic system brings the classic Sapo game into the digital age with automatic scoring,
                LED feedback, and precision sensors that track every toss in real time.
              </p>
            </m.div>

            <m.div
              className="text-center"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.3 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.2 }}
            >
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer size={34} color="white" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green mb-2">Modern Construction</h3>
              <p className="text-gray-600">
                Built with high-quality materials and a sleek, durable finish, Sapoetronic is engineered to perform in any
                setting - from game rooms to event spaces - while maintaining the charm of traditional craftsmanship.
              </p>
            </m.div>

            <m.div
              className="text-center"
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount:0.3 }}
              transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.28 }}
            >
              <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={34} color="white" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green mb-2">Innovation</h3>
              <p className="text-gray-600">
                Sapoetronic combines heritage and technology, reinventing a centuries-old pastime with smart features,
                interactive design, and modern engineering that redefine how the game is played and experienced.
              </p>
            </m.div>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default Sapoetronic;
