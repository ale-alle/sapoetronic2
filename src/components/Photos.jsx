/* eslint-disable no-unused-vars */
import { m } from 'framer-motion';
// eslint-disable-next-line no-unused-expressions
m;

const Photos = () => {
 const IMAGES = [
 "/spinner.jpg",
 "/sapo-front.jpg",
 "/sapo.JPG",
 "/sapo-scoreboard.jpg",
 "/tokens.jpg",
 "/sapo-scorecard.jpg",
 ];

 return (
 <section
 id="photos"
 className="py-16 px-8 sm:px-20 lg:px-20 bg-[#A9F27C]"
 >
 <div className="max-w-7xl mx-auto">
 <m.h2
 className="text-5xl font-bold text-[#1A4D1E] mb-16 text-center"
 initial={{ opacity:0, y:24 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true, amount:0.2 }}
 transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.1 }}
 >
 Photos
 </m.h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {IMAGES.map((src, idx) => (
 <m.div
 key={idx}
 className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
 initial={{ opacity:0, y:24 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true, amount:0.2 }}
 transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.18 + idx *0.06 }}
 >
 <div className="aspect-video bg-gray-100">
 <img
 src={src}
 alt={`Photo gallery ${idx +1}`}
 className="w-full h-full object-cover"
 loading="lazy"
 />
 </div>
 </m.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Photos;
