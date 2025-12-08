'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { User, Heart, Target, Sparkles } from 'lucide-react';

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
        <section id="about" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/5 rounded-full filter blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full filter blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`inline-block px-4 py-2 ${theme === 'dark' ? 'bg-violet/10 border-violet/20' : 'bg-violet/5 border-violet/10'} border rounded-full text-violet text-sm font-medium mb-4`}
                    >
                        <Sparkles className="w-4 h-4 inline mr-2" />
                        {language === 'fr' ? 'À propos' : 'About'}
                    </motion.span>
                    <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.about.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto text-lg`}>
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
                        whileHover={{ y: -5 }}
                        className={`${
                            theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'
                        } p-8 rounded-2xl border ${
                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                        } hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm card-shine overflow-hidden`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl">
                                <User className="text-violet w-6 h-6" />
                            </div>
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
                            whileHover={{ y: -5 }}
                            className={`${
                                theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'
                            } p-8 rounded-2xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-orange/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm card-shine overflow-hidden`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-orange/20 to-pink-500/20 rounded-xl">
                                    <Heart className="text-orange w-6 h-6" />
                                </div>
                                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                    {t.about.interests.title}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {t.about.interests.items.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`${
                                            theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'
                                        } flex items-center gap-3 text-lg group`}
                                    >
                                        <span className="text-orange group-hover:translate-x-1 transition-transform">→</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Motivation Section */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className={`${
                                theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'
                            } p-8 rounded-2xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm card-shine overflow-hidden`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                                    <Target className="text-green-500 w-6 h-6" />
                                </div>
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
