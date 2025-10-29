'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';

export default function Contact() {
    const { language, theme } = useTheme();
    const t = translations[language];

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

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.contact.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {t.contact.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        <motion.a
                            href="tel:+33612302068"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'}`}
                            aria-label="M'appeler au 06 12 30 20 68"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl"
                            >
                                <FaPhone className="text-violet text-xl" aria-hidden="true" />
                            </motion.div>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1`}>
                                    {t.contact.phone}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                    06 12 30 20 68
                                </p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="mailto:jordan.turnaco@protonmail.com"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'}`}
                            aria-label="M'envoyer un email à jordan.turnaco@protonmail.com"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl"
                            >
                                <FaEnvelope className="text-violet text-xl" aria-hidden="true" />
                            </motion.div>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1`}>
                                    {t.contact.email}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm break-all`}>
                                    jordan.turnaco@protonmail.com
                                </p>
                            </div>
                        </motion.a>

                        <motion.div
                            variants={cardVariants}
                            className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm`}
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl"
                            >
                                <FaMapMarkerAlt className="text-violet text-xl" />
                            </motion.div>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1`}>
                                    {t.contact.location}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                    Ile-de-France
                                </p>
                            </div>
                        </motion.div>

                        <motion.a
                            href="https://www.linkedin.com/in/jordan-turnaco"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'}`}
                            aria-label="Visiter mon profil LinkedIn"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl"
                            >
                                <FaLinkedin className="text-violet text-xl" aria-hidden="true" />
                            </motion.div>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1`}>
                                    LinkedIn
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                    Jordan TURNACO
                                </p>
                            </div>
                        </motion.a>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        className="mt-16 text-center"
                    >
                        <motion.h3
                            variants={cardVariants}
                            className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-8`}
                        >
                            {t.contact.languages}
                        </motion.h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-5 py-3 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm`}
                            >
                                <span className="text-violet font-semibold">{t.contact.french}:</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} ml-2`}>{t.contact.native}</span>
                            </motion.span>
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-5 py-3 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm`}
                            >
                                <span className="text-violet font-semibold">{t.contact.english}:</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} ml-2`}>C1 - B2</span>
                            </motion.span>
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-5 py-3 ${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm`}
                            >
                                <span className="text-violet font-semibold">{t.contact.spanish}:</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} ml-2`}>B1</span>
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
