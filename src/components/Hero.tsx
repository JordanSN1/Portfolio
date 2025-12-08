'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import Image from 'next/image';
import { useRef } from 'react';
import ParticlesBackground from './ParticlesBackground';
import AnimatedCounter from './AnimatedCounter';
import { FaShieldAlt, FaCode } from 'react-icons/fa';

export default function Hero() {
    const { language, theme } = useTheme();
    const t = translations[language];
    const containerRef = useRef<HTMLElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const fadeInLeft = {
        initial: { opacity: 0, x: -60 },
        animate: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            } 
        }
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            } 
        }
    };

    const fadeInScale = {
        initial: { opacity: 0, scale: 0.8, rotate: -5 },
        animate: { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            transition: { 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
            } 
        }
    };

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section 
            ref={containerRef}
            className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-dark' : 'bg-gradient-to-br from-white via-gray-50 to-violet-50'} flex items-center`}
        >
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Animated background blobs */}
            <motion.div 
                className="absolute inset-0 pointer-events-none"
                style={{ y, opacity }}
            >
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet/20 rounded-full filter blur-[100px] animate-morph" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange/15 rounded-full filter blur-[100px] animate-morph" style={{ animationDelay: '4s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full filter blur-[120px] animate-morph" style={{ animationDelay: '2s' }} />
            </motion.div>

            {/* Grid pattern overlay */}
            <div 
                className={`absolute inset-0 pointer-events-none ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.div
                            variants={fadeIn}
                            className="inline-block mb-6"
                        >
                            <span className={`px-4 py-2 ${theme === 'dark' ? 'bg-violet/10 border-violet/20' : 'bg-violet/5 border-violet/10'} border rounded-full text-violet text-sm font-medium backdrop-blur-sm flex items-center gap-2`}>
                                <FaShieldAlt className="w-4 h-4" />
                                {t.hero.role}
                            </span>
                        </motion.div>

                        <motion.h1 
                            variants={fadeInLeft}
                            className="text-5xl lg:text-7xl font-bold mb-6"
                        >
                            <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'} block`}>TURNACO</span>
                            <span className="text-gradient block mt-2">Jordan</span>
                        </motion.h1>

                        <motion.p 
                            variants={fadeIn}
                            className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed`}
                        >
                            {t.hero.description}
                        </motion.p>

                        <motion.div 
                            variants={staggerContainer}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="/CV TURNACO Jordan.pdf"
                                download
                                variants={buttonVariants}
                                className={`group px-8 py-4 bg-gradient-to-r from-violet to-purple-600 text-white rounded-xl transition-all duration-500 flex items-center gap-3 shadow-lg shadow-violet/25 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'} overflow-hidden relative`}
                                whileHover={{ scale: 1.02, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Télécharger mon CV"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-orange to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="relative z-10 font-medium">{t.common.downloadCV.button}</span>
                            </motion.a>
                            <motion.a
                                href="#projects"
                                variants={buttonVariants}
                                className={`px-8 py-4 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white border-white/10' : 'bg-dark/5 hover:bg-dark/10 text-dark border-dark/10'} border backdrop-blur-sm rounded-xl transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Voir mes projets"
                            >
                                {t.nav.projects}
                            </motion.a>
                            <motion.a
                                href="#contact"
                                variants={buttonVariants}
                                className="px-8 py-4 border-2 border-orange text-orange hover:bg-orange hover:text-white rounded-xl transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Me contacter"
                            >
                                {t.nav.contact}
                            </motion.a>
                        </motion.div>

                        {/* Social proof / stats */}
                        <motion.div 
                            variants={fadeIn}
                            className={`mt-12 pt-8 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'} flex flex-wrap gap-8 justify-center lg:justify-start`}
                        >
                            <div className="text-center lg:text-left group">
                                <div className="text-3xl font-bold text-gradient">
                                    <AnimatedCounter end={10} suffix="+" duration={2} />
                                </div>
                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'} group-hover:text-violet transition-colors`}>Projets</div>
                            </div>
                            <div className="text-center lg:text-left group">
                                <div className="text-3xl font-bold text-gradient">
                                    <AnimatedCounter end={3} suffix="+" duration={1.5} />
                                </div>
                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'} group-hover:text-violet transition-colors`}>Années d&apos;exp.</div>
                            </div>
                            <div className="text-center lg:text-left group">
                                <div className="text-3xl font-bold text-gradient">B3</div>
                                <div className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'} group-hover:text-violet transition-colors`}>Guardia</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        variants={fadeInScale}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center lg:justify-end items-center order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Decorative rings */}
                            <motion.div 
                                className="absolute -inset-4 rounded-full border-2 border-violet/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div 
                                className="absolute -inset-8 rounded-full border border-orange/10"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Floating elements */}
                            <motion.div 
                                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-violet to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet/30"
                                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FaShieldAlt className="text-white text-lg" />
                            </motion.div>
                            <motion.div 
                                className="absolute -bottom-2 -left-6 w-10 h-10 bg-gradient-to-br from-orange to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange/30"
                                animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FaCode className="text-white text-sm" />
                            </motion.div>

                            {/* Main image container */}
                            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]">
                                <div className={`w-full h-full relative rounded-full overflow-hidden border-4 ${theme === 'dark' ? 'border-violet/30' : 'border-violet/20'} shadow-2xl shadow-violet/20`}>
                                    <Image
                                        src="/images/TURNACOJordan.jpg"
                                        alt="TURNACO Jordan"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 via-transparent to-orange/20 rounded-full pointer-events-none" />
                                </div>
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet/30 to-orange/30 filter blur-3xl -z-10 scale-110" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <motion.a
                    href="#about"
                    className={`flex flex-col items-center gap-2 ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'} hover:text-violet transition-colors`}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.a>
            </motion.div>
        </section>
    );
} 