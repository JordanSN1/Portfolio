'use client'

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Main progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet via-purple-500 to-orange origin-left z-[100]"
                style={{ scaleX }}
            />
            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-violet via-purple-500 to-orange origin-left z-[99] blur-sm opacity-50"
                style={{ scaleX }}
            />
        </>
    );
}
