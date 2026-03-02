import FadeUp from '../components/FadeUp';
import img1 from '../assets/img1.jpeg';

const Evolution = () => {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-24 border-y border-white/5"
            style={{ background: 'linear-gradient(135deg, #0E1520 0%, #0A1628 100%)' }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    {/* Section label */}
                    <FadeUp>
                        <span className="text-[11px] font-mono uppercase tracking-[0.4em]"
                            style={{ color: 'var(--color-accent-teal)' }}>
                            Chapter 01 // Spacecraft Evolution
                        </span>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
                            style={{ color: 'var(--color-headings)' }}>
                            The Evolution of{' '}
                            <span style={{ color: 'var(--color-accent-glow)' }}>Spacecraft</span>
                        </h2>
                    </FadeUp>

                    <div className="space-y-6 leading-relaxed" style={{ color: 'var(--color-body)' }}>
                        <FadeUp delay={0.2}>
                            <p>
                                From primitive rocket experiments to sophisticated reusable modules, the evolution of
                                spacecraft represents humanity's relentless quest to conquer the final frontier.
                                Each iteration brought new engineering breakthroughs that define modern exploration.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <p>
                                Archival blueprints reveal meticulous planning behind every bolt and panel —
                                a roadmap of our journey into the stars, detailing the critical systems that
                                keep crews safe in the unforgiving environment of deep space.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Stats row */}
                    <FadeUp delay={0.4}>
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                            {[
                                { label: "Years of Progress", value: "66+" },
                                { label: "Crewed Missions", value: "350+" },
                                { label: "Km Travels", value: "20B+" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold font-display"
                                        style={{ color: 'var(--color-accent-gold)' }}>{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest mt-1"
                                        style={{ color: 'var(--color-muted)' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>

                <FadeUp delay={0.35} className="relative group">
                    <div
                        className="overflow-hidden rounded-2xl relative"
                        style={{ border: '1px solid rgba(56,189,248,0.2)', height: '420px' }}
                    >
                        <img
                            src={img1}
                            alt="Spacecraft Blueprint"
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Cyan overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                            style={{ background: 'var(--color-accent-glow)' }} />
                    </div>
                    {/* Corner coordinate label */}
                    <div className="absolute -bottom-5 -right-2 px-3 py-1 text-[10px] uppercase font-mono"
                        style={{ background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(56,189,248,0.5)' }}>
                        REF: SC-042 // 28.5°N 80.6°W
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default Evolution;
