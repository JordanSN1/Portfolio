'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import Image from 'next/image';

export default function Hero() {
    const { language, theme } = useTheme();
    const t = translations[language];

    const fadeInLeft = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeIn = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.8 } }
    };

    const fadeInScale = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
    };

    return (
        <section className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-dark' : 'bg-white'} flex items-center`}>
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet/10 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange/10 rounded-full filter blur-3xl" />
            </div>

            <div className="container-custom relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="initial"
                        animate="animate"
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                            className="inline-block mb-4"
                        >
                            <span className="px-3 py-1 bg-violet/10 text-violet rounded-full text-sm">
                                {t.hero.role}
                            </span>
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                            <span className="text-dark dark:text-white">TURNACO</span>
                            <span className="text-orange block mt-2">Jordan</span>
                        </h1>

                        <p className="text-gray-custom text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="/CV TURNACO Jordan.pdf"
                                download
                                className="px-6 py-3 bg-gradient-to-r from-violet to-purple-600 hover:from-violet/90 hover:to-purple-600/90 text-white rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-violet/20 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Télécharger mon CV"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                {t.common.downloadCV.button}
                            </motion.a>
                            <motion.a
                                href="#projects"
                                className="px-6 py-3 bg-violet hover:bg-violet/90 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Voir mes projets"
                            >
                                {t.nav.projects}
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="px-6 py-3 border border-orange text-orange hover:bg-orange/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Me contacter"
                            >
                                {t.nav.contact}
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        variants={fadeInScale}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center lg:justify-end items-center order-1 lg:order-2"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96">
                            <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-violet/20">
                                <Image
                                    src="/images/TURNACOJordan.jpg"
                                    alt="TURNACO Jordan"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 to-orange/20 rounded-full pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 