'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { User, Heart, Target } from 'lucide-react';

export default function About() {
    const { language, theme } = useTheme();
    const t = translations[language];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.about.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {t.about.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    {/* Bio Section */}
                    <motion.div
                        variants={cardVariants}
                        className={`${
                            theme === 'dark' ? 'bg-dark' : 'bg-white'
                        } p-8 rounded-xl border ${
                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                        } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <User className="text-violet w-8 h-8" />
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                Bio
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {t.about.bio.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`${
                                        theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'
                                    } text-lg leading-relaxed`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Interests Section */}
                        <motion.div
                            variants={cardVariants}
                            className={`${
                                theme === 'dark' ? 'bg-dark' : 'bg-white'
                            } p-8 rounded-xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Heart className="text-orange w-8 h-8" />
                                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                    {t.about.interests.title}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {t.about.interests.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${
                                            theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'
                                        } flex items-center gap-2 text-lg`}
                                    >
                                        <span className="text-violet">→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Motivation Section */}
                        <motion.div
                            variants={cardVariants}
                            className={`${
                                theme === 'dark' ? 'bg-dark' : 'bg-white'
                            } p-8 rounded-xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="text-green-500 w-8 h-8" />
                                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                    {t.about.motivation.title}
                                </h3>
                            </div>
                            <p
                                className={`${
                                    theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'
                                } text-lg leading-relaxed`}
                            >
                                {t.about.motivation.text}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
