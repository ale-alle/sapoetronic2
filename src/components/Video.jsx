/* eslint-disable no-unused-vars */
import { m } from 'framer-motion';
// eslint-disable-next-line no-unused-expressions
m;

const Video = () => {
  return (
    <m.section
      id="video"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#A9F27C]"
    >
      <div className="max-w-7xl mx-auto">
        <m.h2
          className="text-5xl font-bold text-[#1A4D1E] mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          Video
        </m.h2>
        <m.p
          className="text-lg text-[#002901] text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
        >
          Check out Sapoetronic&apos;s latest video to see it in action!
        </m.p>
        <div className="flex justify-center">
          <m.div
            className="bg-[#6BA548] rounded-lg p-4 shadow-lg w-full"
            style={{ maxWidth: 600 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PfQ6oQsELKU?rel=0"
                title="Sapoetronic - YouTube video"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </m.div>
        </div>
      </div>
    </m.section>
  );
};

export default Video;
