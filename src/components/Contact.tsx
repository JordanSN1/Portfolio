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
        <section id="contact" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/5 rounded-full filter blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full filter blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`inline-block px-4 py-2 ${theme === 'dark' ? 'bg-violet/10 border-violet/20' : 'bg-violet/5 border-violet/10'} border rounded-full text-violet text-sm font-medium mb-4`}
                    >
                        <FaEnvelope className="w-4 h-4 inline mr-2" />
                        {language === 'fr' ? 'Contact' : 'Get in touch'}
                    </motion.span>
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
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'} card-shine overflow-hidden`}
                            aria-label="M'appeler au 06 12 30 20 68"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300"
                            >
                                <FaPhone className="text-violet text-xl" aria-hidden="true" />
                            </motion.div>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1 group-hover:text-violet transition-colors`}>
                                    {t.contact.phone}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                    06 12 30 20 68
                                </p>
                            </div>
                            <svg className="w-5 h-5 text-violet opacity-0 group-hover:opacity-100 ml-auto transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="mailto:jordan.turnaco@protonmail.com"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'} card-shine overflow-hidden`}
                            aria-label="M'envoyer un email à jordan.turnaco@protonmail.com"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300"
                            >
                                <FaEnvelope className="text-violet text-xl" aria-hidden="true" />
                            </motion.div>
                            <div className="text-left flex-1 min-w-0">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1 group-hover:text-violet transition-colors`}>
                                    {t.contact.email}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm truncate`}>
                                    jordan.turnaco@protonmail.com
                                </p>
                            </div>
                            <svg className="w-5 h-5 text-violet opacity-0 group-hover:opacity-100 ml-auto transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>

                        <motion.div
                            variants={cardVariants}
                            className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm`}
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
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'} card-shine overflow-hidden`}
                            aria-label="Visiter mon profil LinkedIn"
                        >
                            <motion.div
                                variants={iconVariants}
                                className="p-4 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300"
                            >
                                <FaLinkedin className="text-violet text-xl" aria-hidden="true" />
                            </motion.div>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-base mb-1 group-hover:text-violet transition-colors`}>
                                    LinkedIn
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                    Jordan TURNACO
                                </p>
                            </div>
                            <svg className="w-5 h-5 text-violet opacity-0 group-hover:opacity-100 ml-auto transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
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
                                whileHover={{ scale: 1.05, y: -3 }}
                                className={`px-6 py-4 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm hover:border-violet/30 transition-all duration-300`}
                            >
                                <span className="text-violet font-bold text-lg mb-1 block">FR</span>
                                <span className="text-violet font-semibold block">{t.contact.french}</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>{t.contact.native}</span>
                            </motion.span>
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className={`px-6 py-4 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm hover:border-violet/30 transition-all duration-300`}
                            >
                                <span className="text-orange font-bold text-lg mb-1 block">EN</span>
                                <span className="text-violet font-semibold block">{t.contact.english}</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>C1 - B2</span>
                            </motion.span>
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className={`px-6 py-4 ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} shadow-lg backdrop-blur-sm hover:border-violet/30 transition-all duration-300`}
                            >
                                <span className="text-pink-500 font-bold text-lg mb-1 block">ES</span>
                                <span className="text-violet font-semibold block">{t.contact.spanish}</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>B1</span>
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
