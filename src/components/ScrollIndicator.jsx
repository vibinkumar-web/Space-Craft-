import { motion } from 'framer-motion';

const ScrollIndicator = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-[10px] uppercase tracking-[0.2em] text-body/50">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent-glow/50 to-transparent relative overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, 48],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-full h-1/3 bg-accent-glow"
                />
            </div>
        </motion.div>
    );
};

export default ScrollIndicator;
