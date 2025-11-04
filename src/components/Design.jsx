import { m } from 'framer-motion';
// eslint-disable-next-line no-unused-expressions
m;

const Design = () => {
 return (
 <m.section
 id="design"
 className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
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
 Design
 </m.h2>
 <div className="space-y-8">
 <m.p
 className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
 initial={{ opacity:0, y:24 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true, amount:0.2 }}
 transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.15 }}
 >
 Our design philosophy centers on creating visually stunning and functionally exceptional 
 experiences that resonate with your audience.
 </m.p>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {['Brand Identity', 'Web Design', 'UI/UX Design', 'Graphic Design'].map((item, index) => (
 <m.div
 key={index}
 className="bg-light-green rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
 initial={{ opacity:0, y:24 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true, amount:0.2 }}
 transition={{ duration:0.6, ease: [0.22,1,0.36,1], delay:0.18 + index *0.08 }}
 >
 <div className="aspect-square bg-dark-green/10 rounded-lg mb-4 flex items-center justify-center">
 <svg className="w-12 h-12 text-dark-green" fill="none" stroke="currentColor" viewBox="002424">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M45a110011-1h4a1100111v7a11001-11H5a11001-1-1V5zM145a110011-1h4a1100111v7a11001-11h-4a11001-1-1V5zM416a110011-1h4a1100111v3a11001-11H5a11001-1-1v-3zM1416a110011-1h4a1100111v3a11001-11h-4a11001-1-1v-3z" />
 </svg>
 </div>
 <h3 className="text-xl font-semibold text-dark-green text-center">{item}</h3>
 </m.div>
 ))}
 </div>
 </div>
 </div>
 </m.section>
 );
};

export default Design;
