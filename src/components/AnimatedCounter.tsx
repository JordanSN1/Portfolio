'use client'

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

interface CounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2, className = '' }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTime: number;
            let animationFrame: number;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                
                // Easing function for smooth deceleration
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                setCount(Math.floor(easeOutQuart * end));
                
                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }
        
        if (!isInView) {
            hasAnimated.current = false;
            setCount(0);
        }
    }, [isInView, end, duration]);

    return (
        <motion.span
            ref={ref}
            className={`tabular-nums ${className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {prefix}{count}{suffix}
        </motion.span>
    );
}
