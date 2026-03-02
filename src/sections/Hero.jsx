import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/5"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.12) 0%, transparent 60%), #070B14' }}
        >
            {/* Cross-hair decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent-glow/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-accent-glow/5 pointer-events-none" />

            <div className="z-10 text-center px-6">
                {/* Label above */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: '0.5em' }}
                    animate={{ opacity: 1, letterSpacing: '0.6em' }}
                    transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-[11px] uppercase mb-6 font-mono"
                    style={{ color: 'var(--color-accent-gold)' }}
                >
                    NASA Archival Research // Est. 1957
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-7xl md:text-9xl font-bold uppercase tracking-tighter mb-6"
                    style={{ color: 'var(--color-headings)' }}
                >
                    Space{' '}
                    <span style={{
                        WebkitTextStroke: '1px rgba(56,189,248,0.6)',
                        color: 'transparent',
                    }}>
                        Craft
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-sm md:text-lg uppercase tracking-[0.4em] font-light"
                    style={{ color: 'var(--color-body)' }}
                >
                    Exploring the Evolution Beyond Earth
                </motion.p>
            </div>

            <ScrollIndicator />

            <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #070B14, transparent)' }} />
        </section>
    );
};

export default Hero;
