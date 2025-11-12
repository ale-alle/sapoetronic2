import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { m } from 'framer-motion';

const ParallaxBand = ({
 src,
 alt,
 height = '60vh',
 speed =0.3, //0..1 (smaller = subtler/slower movement)
 overlay = true,
 overlayClassName = 'bg-[#1A4D1E]/30',
}) => {
 const ref = useRef(null);

 // Map the section's scroll progress to a gentle vertical shift
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ['start end', 'end start'], // when the band enters/leaves the viewport
 });

 const amplitude =200 * speed; // px the image moves across the band’s lifetime
 const y = useTransform(scrollYProgress, [0,1], [-amplitude, amplitude]);

 return (
 <section ref={ref} aria-label={alt} className="w-full">
 <div className="relative w-full overflow-hidden pointer-events-none" style={{ height }}>
 <m.img
 src={src}
 alt={alt}
 loading="lazy"
 className="absolute inset-0 w-full h-full object-cover select-none will-change-transform transform-gpu"
 style={{ y }}
 />
 {overlay && (
 <div
 aria-hidden="true"
 className={`absolute inset-0 ${overlayClassName}`}
 />
 )}
 </div>
 </section>
 );
};

export default ParallaxBand;