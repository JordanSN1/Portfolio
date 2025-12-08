'use client'

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface SplitTextRevealProps {
    text: string;
    className?: string;
    charClassName?: string;
    delay?: number;
}

export function SplitTextReveal({ text, className = '', charClassName = '', delay = 0 }: SplitTextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    const words = text.split(' ');

    return (
        <span ref={ref} className={className}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-[0.25em]">
                    {word.split('').map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            className={`inline-block ${charClassName}`}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: delay + (wordIndex * 0.1) + (charIndex * 0.03)
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
}

interface LineRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'left' | 'right';
}

export function LineReveal({ children, className = '', delay = 0, direction = 'left' }: LineRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.div
                initial={{ x: direction === 'left' ? '-100%' : '100%', opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: direction === 'left' ? '-100%' : '100%', opacity: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
