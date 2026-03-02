import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, duration = 0.8, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom premium ease-out
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeUp;
