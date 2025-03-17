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
                        className="text-center lg:text-left"
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
                                href="#projects"
                                className="px-6 py-3 bg-violet hover:bg-violet/90 text-white rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {t.nav.projects}
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="px-6 py-3 border border-orange text-orange hover:bg-orange/10 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
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
                        className="hidden lg:block"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="aspect-square relative rounded-full overflow-hidden border-4 border-violet/20">
                                <Image
                                    src="/images/TURNACOJordan.jpg"
                                    alt="TURNACO Jordan"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 to-orange/20 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 