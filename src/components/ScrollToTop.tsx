'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();
    const { scrollYProgress } = useScroll();
    
    // Create a circular progress indicator
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full ${
                        theme === 'dark' 
                            ? 'bg-dark-light/80 hover:bg-dark-light' 
                            : 'bg-white/80 hover:bg-white'
                    } backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-violet/20 border ${
                        theme === 'dark' ? 'border-violet/20' : 'border-gray-200'
                    } flex items-center justify-center group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet focus:ring-offset-2 ${
                        theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'
                    }`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Retour en haut de la page"
                >
                    {/* Circular progress SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 56 56"
                    >
                        <circle
                            cx="28"
                            cy="28"
                            r="26"
                            fill="none"
                            stroke={theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)'}
                            strokeWidth="2"
                        />
                        <motion.circle
                            cx="28"
                            cy="28"
                            r="26"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            style={{
                                pathLength,
                                strokeDasharray: 1,
                                strokeDashoffset: 0
                            }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    <FaArrowUp 
                        className="text-violet group-hover:text-orange transition-colors duration-300 relative z-10" 
                        aria-hidden="true"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
