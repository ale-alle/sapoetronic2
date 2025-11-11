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
 <m.section
 id="photos"
 className="py-16 px-4 sm:px-6 lg:px-8 bg-[#A9F27C]"
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
 </m.section>
 );
};

export default Photos;
