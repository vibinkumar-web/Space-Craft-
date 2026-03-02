import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import FadeUp from '../components/FadeUp';

const milestones = [
    {
        year: "1957",
        title: "Sputnik",
        tag: "Soviet Union",
        description: "The first artificial satellite marks the beginning of the space age — a tiny metal sphere that changed everything.",
        accentColor: '#38BDF8',     // cyan
        tagColor: '#2DD4BF',        // teal
    },
    {
        year: "1969",
        title: "Apollo 11",
        tag: "NASA / USA",
        description: "Humanity's first steps on another world. Armstrong and Aldrin's lunar EVA remains the most defining feat of engineering.",
        accentColor: '#FACC15',     // gold
        tagColor: '#FB923C',        // amber
    },
    {
        year: "1998",
        title: "Space Station",
        tag: "International",
        description: "Assembly begins on a permanent orbital laboratory — a symbol of global cooperation in low Earth orbit.",
        accentColor: '#A78BFA',     // violet
        tagColor: '#38BDF8',        // cyan
    },
    {
        year: "2020+",
        title: "Reusable Era",
        tag: "Commercial / SpaceX",
        description: "Reusable boosters land themselves back for the first time, collapsing the cost of access to orbit.",
        accentColor: '#2DD4BF',     // teal
        tagColor: '#A78BFA',        // violet
    },
];

const Milestone = ({ milestone, index }) => (
    <div className={`relative flex items-start gap-8 mb-20 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Spacer on wide screens */}
        <div className="md:w-5/12 hidden md:block" />

        {/* Dot on the center line */}
        <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
            <div
                className="w-4 h-4 rounded-full"
                style={{
                    background: milestone.accentColor,
                    boxShadow: `0 0 14px ${milestone.accentColor}80`,
                    border: '2px solid rgba(7,11,20,1)',
                }}
            />
        </div>

        <FadeUp delay={0.15} className="w-full md:w-5/12 pl-10 md:pl-0">
            <div
                className="glass-card p-8 group transition-all duration-500 hover:shadow-lg"
                style={{ '--glow': milestone.accentColor }}
            >
                {/* Tag */}
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3 block"
                    style={{ color: milestone.tagColor }}>
                    {milestone.tag}
                </span>
                {/* Year + Title */}
                <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-3xl font-bold font-display"
                        style={{ color: milestone.accentColor }}>
                        {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight"
                        style={{ color: 'var(--color-headings)' }}>
                        {milestone.title}
                    </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-body)' }}>
                    {milestone.description}
                </p>
                {/* Bottom glow line */}
                <div className="mt-6 h-[2px] rounded-full opacity-30"
                    style={{ background: `linear-gradient(to right, ${milestone.accentColor}, transparent)` }} />
            </div>
        </FadeUp>
    </div>
);

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={containerRef}
            className="py-24 px-6 md:px-12 lg:px-24 border-y border-white/5"
            style={{ background: 'linear-gradient(180deg, #070B14 0%, #0C1020 50%, #070B14 100%)' }}
        >
            <div className="max-w-7xl mx-auto">
                <FadeUp className="text-center mb-20">
                    <span className="text-[11px] font-mono uppercase tracking-[0.4em] mb-4 block"
                        style={{ color: 'var(--color-accent-amber)' }}>
                        Chapter 02 // Historical Record
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-3"
                        style={{ color: 'var(--color-headings)' }}>
                        Spaceflight{' '}
                        <span style={{ color: 'var(--color-accent-gold)' }}>Timeline</span>
                    </h2>
                    <p className="text-sm uppercase tracking-[0.2em]" style={{ color: 'var(--color-muted)' }}>
                        Key milestones in human exploration
                    </p>
                </FadeUp>

                <div className="relative">
                    {/* Static track */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px]"
                        style={{ background: 'rgba(255,255,255,0.06)', transform: 'translateX(-50%)' }} />
                    {/* Animated progress */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px]"
                        css={{ transform: 'translateX(-50%)' }}
                        initial={{ scaleY: 0 }}
                    >
                        <div style={{
                            width: '1px',
                            height: '100%',
                            background: 'linear-gradient(to bottom, #38BDF8, #FACC15, #A78BFA, #2DD4BF)',
                        }} />
                    </motion.div>

                    <div className="relative z-10">
                        {milestones.map((ms, idx) => (
                            <Milestone key={idx} milestone={ms} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
