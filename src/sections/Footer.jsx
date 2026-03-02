import FadeUp from '../components/FadeUp';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-accent-glow/20 relative">
            {/* Subtle glow on top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-accent-glow shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

            <div className="container mx-auto px-6 flex flex-col items-center">
                <FadeUp>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-[1px] bg-white/20" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-body/50">Space Craft Archive</span>
                        <div className="w-10 h-[1px] bg-white/20" />
                    </div>
                </FadeUp>

                <FadeUp delay={0.2} className="text-center mb-8">
                    <p className="text-sm text-body/80 tracking-wide font-light">
                        Designed with heritage. Built with modern technology.
                    </p>
                </FadeUp>

                <FadeUp delay={0.4}>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest font-mono text-body/40">
                        <span className="hover:text-accent-glow cursor-pointer transition-colors">Documentation</span>
                        <span className="hover:text-accent-glow cursor-pointer transition-colors">Archival API</span>
                        <span className="hover:text-accent-glow cursor-pointer transition-colors">Privacy Policy</span>
                    </div>
                </FadeUp>

                <div className="mt-12 text-[9px] font-mono text-body/20 uppercase tracking-[0.3em]">
                    &copy; 2026 NASA ARCHIVAL RETRIEVAL SYSTEM // ASSET-ID-429
                </div>
            </div>
        </footer>
    );
};

export default Footer;
