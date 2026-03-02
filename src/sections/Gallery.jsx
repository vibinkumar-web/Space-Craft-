import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

const blueprints = [
    { img: img1, title: "Lander Module SC-1", id: "BP-100", accent: '#38BDF8' },
    { img: img2, title: "Propulsion Core X-9", id: "BP-101", accent: '#FACC15' },
    { img: img3, title: "Navigation Console", id: "BP-102", accent: '#A78BFA' },
    { img: img1, title: "Thermal Shield V-2", id: "BP-103", accent: '#2DD4BF' },
    { img: img2, title: "Communication Array", id: "BP-104", accent: '#FB923C' },
];

const Gallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%']);

    return (
        <section ref={targetRef} className="relative h-[300vh]"
            style={{ background: '#070B14' }}>
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                {/* Header */}
                <div className="absolute top-20 left-6 md:left-24 z-10">
                    <span className="text-[11px] font-mono uppercase tracking-[0.4em] mb-3 block"
                        style={{ color: 'var(--color-accent-teal)' }}>
                        Chapter 04 // Blueprint Archive
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-1"
                        style={{ color: 'var(--color-headings)' }}>
                        Blueprint{' '}
                        <span style={{ color: 'var(--color-accent-gold)' }}>Gallery</span>
                    </h2>
                    <p className="text-sm uppercase tracking-[0.2em] italic"
                        style={{ color: 'var(--color-muted)' }}>
                        Scroll to explore archival designs
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 pt-24">
                    {blueprints.map((bp, idx) => (
                        <div
                            key={idx}
                            className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/3] group overflow-hidden rounded-xl"
                            style={{ border: `1px solid ${bp.accent}22` }}
                        >
                            <img
                                src={bp.img}
                                alt={bp.title}
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
                            />
                            {/* Color overlay on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                                style={{ background: bp.accent }} />

                            {/* Bottom info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-widest block mb-1"
                                        style={{ color: bp.accent }}>
                                        Archive ID: {bp.id}
                                    </span>
                                    <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                                        {bp.title}
                                    </h3>
                                </div>
                                {/* Color accent dot */}
                                <div className="w-3 h-3 rounded-full" style={{ background: bp.accent, boxShadow: `0 0 8px ${bp.accent}` }} />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
