import { Rocket, Shield, Navigation, Wind } from 'lucide-react';
import FadeUp from '../components/FadeUp';

const components = [
    {
        title: "Propulsion Systems",
        icon: Rocket,
        description: "Advanced rocket engines utilizing chemical, ionic, or nuclear thermal propulsion to escape Earth's gravity well.",
        details: "Thrust: 35MN // Cryogenic LOX/CH₄",
        accent: '#38BDF8',       // cyan
        glow: 'rgba(56,189,248,0.08)',
        border: 'rgba(56,189,248,0.15)',
        hoverBorder: 'rgba(56,189,248,0.45)',
    },
    {
        title: "Heat Shields",
        icon: Shield,
        description: "Multi-layered thermal protection designed to withstand reentry temperatures exceeding 3000°C.",
        details: "Material: PICA-X // 15.2cm thick",
        accent: '#FB923C',       // amber/orange
        glow: 'rgba(251,146,60,0.08)',
        border: 'rgba(251,146,60,0.15)',
        hoverBorder: 'rgba(251,146,60,0.45)',
    },
    {
        title: "Navigation Systems",
        icon: Navigation,
        description: "High-precision inertial guidance and star-tracking sensors for autonomous deep-space maneuvers.",
        details: "Accuracy: 0.001 Arcsec // 4× Redundant",
        accent: '#A78BFA',       // violet
        glow: 'rgba(167,139,250,0.08)',
        border: 'rgba(167,139,250,0.15)',
        hoverBorder: 'rgba(167,139,250,0.45)',
    },
    {
        title: "Life Support",
        icon: Wind,
        description: "Closed-loop environmental control managing oxygen production, CO₂ removal, and thermal regulation.",
        details: "O₂ Recovery: 98% // Crew: 7 max",
        accent: '#2DD4BF',       // teal
        glow: 'rgba(45,212,191,0.08)',
        border: 'rgba(45,212,191,0.15)',
        hoverBorder: 'rgba(45,212,191,0.45)',
    },
];

const ComponentCard = ({ item, index }) => {
    const Icon = item.icon;
    return (
        <FadeUp delay={index * 0.12}>
            <div
                className="p-8 group h-full relative overflow-hidden rounded-xl transition-all duration-500 cursor-default"
                style={{
                    background: `linear-gradient(135deg, ${item.glow} 0%, rgba(14,21,32,0.6) 100%)`,
                    border: `1px solid ${item.border}`,
                    backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${item.hoverBorder}`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${item.glow}`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.border = `1px solid ${item.border}`;
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                {/* Blueprint icon ghost */}
                <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.12] transition-opacity duration-700">
                    <Icon size={110} strokeWidth={0.5} style={{ color: item.accent }} />
                </div>

                <div className="relative z-10">
                    {/* Icon badge */}
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                        style={{ background: `${item.accent}18`, color: item.accent }}
                    >
                        <Icon size={22} />
                    </div>

                    <h3
                        className="text-xl font-bold uppercase tracking-tight mb-3 transition-colors duration-300"
                        style={{ color: 'var(--color-headings)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = item.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-headings)')}
                    >
                        {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-body)' }}>
                        {item.description}
                    </p>

                    <div className="pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: `${item.accent}99` }}>
                            {item.details}
                        </span>
                    </div>
                </div>
            </div>
        </FadeUp>
    );
};

const Components = () => (
    <section
        className="py-24 px-6 md:px-12 lg:px-24"
        style={{ background: 'linear-gradient(180deg, #0E1520 0%, #0A0E18 100%)' }}
    >
        <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-16">
                <span className="text-[11px] font-mono uppercase tracking-[0.4em] mb-4 block"
                    style={{ color: 'var(--color-accent-violet)' }}>
                    Chapter 03 // Engineering Archive
                </span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-3"
                    style={{ color: 'var(--color-headings)' }}>
                    Spacecraft{' '}
                    <span style={{ color: 'var(--color-accent-glow)' }}>Components</span>
                </h2>
                <p className="text-sm uppercase tracking-[0.2em]"
                    style={{ color: 'var(--color-muted)' }}>
                    The core systems of interstellar travel
                </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {components.map((item, idx) => (
                    <ComponentCard key={idx} item={item} index={idx} />
                ))}
            </div>
        </div>
    </section>
);

export default Components;
