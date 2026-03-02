import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Future = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center"
            style={{ background: 'linear-gradient(170deg, #0A0E18 0%, #12243A 50%, #1A1408 100%)' }}
        >
            {/* Animated background orbs */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(56,189,248,1), transparent 70%)' }}
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(250,204,21,1), transparent 70%)' }}
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
                className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(167,139,250,1), transparent 70%)' }}
            />

            <motion.div style={{ y: translateY, opacity }} className="z-10 max-w-4xl">
                <motion.span
                    className="text-[11px] font-mono uppercase tracking-[0.5em] mb-8 block"
                    style={{ color: 'var(--color-accent-gold)' }}
                >
                    Chapter 05 // Projected Horizons
                </motion.span>

                <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] mb-10"
                    style={{ color: 'var(--color-headings)' }}
                >
                    The future belongs to{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, #38BDF8, #A78BFA)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        reusable
                    </span>
                    {', '}
                    <span style={{ color: 'var(--color-accent-gold)' }}>intelligent</span>
                    {' spacecraft.'}
                </h2>

                <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-[1px]" style={{ background: 'rgba(56,189,248,0.3)' }} />
                    <span className="text-[11px] font-mono uppercase tracking-[0.3em]"
                        style={{ color: 'var(--color-muted)' }}>
                        2026 and beyond
                    </span>
                    <div className="w-16 h-[1px]" style={{ background: 'rgba(250,204,21,0.3)' }} />
                </div>
            </motion.div>

            {/* Scanline texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 2px)', backgroundSize: '100% 4px' }} />
        </section>
    );
};

export default Future;
