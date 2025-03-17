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
                    className="max-w-2xl mx-auto"
                >
                    <div className="grid gap-6 md:grid-cols-2">
                        <motion.a
                            href="tel:+33612302068"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10 hover:border-violet/30 transition-all duration-300`}
                        >
                            <motion.span
                                variants={iconVariants}
                                className="text-violet text-2xl"
                            >
                                <FaPhone />
                            </motion.span>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-medium`}>
                                    {t.contact.phone}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                    06 12 30 20 68
                                </p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="mailto:jordanturnaco@gmail.com"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10 hover:border-violet/30 transition-all duration-300`}
                        >
                            <motion.span
                                variants={iconVariants}
                                className="text-violet text-2xl"
                            >
                                <FaEnvelope />
                            </motion.span>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-medium`}>
                                    {t.contact.email}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                    jordanturnaco@gmail.com
                                </p>
                            </div>
                        </motion.a>

                        <motion.div
                            variants={cardVariants}
                            className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10`}
                        >
                            <motion.span
                                variants={iconVariants}
                                className="text-violet text-2xl"
                            >
                                <FaMapMarkerAlt />
                            </motion.span>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-medium`}>
                                    {t.contact.location}
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                    Thorigny-sur-marne, 77400
                                </p>
                            </div>
                        </motion.div>

                        <motion.a
                            href="https://www.linkedin.com/in/jordan-turnaco"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10 hover:border-violet/30 transition-all duration-300`}
                        >
                            <motion.span
                                variants={iconVariants}
                                className="text-violet text-2xl"
                            >
                                <FaLinkedin />
                            </motion.span>
                            <div className="text-left">
                                <p className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-medium`}>
                                    LinkedIn
                                </p>
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                    Jordan TURNACO
                                </p>
                            </div>
                        </motion.a>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        className="mt-12 text-center"
                    >
                        <motion.h3
                            variants={cardVariants}
                            className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}
                        >
                            {t.contact.languages}
                        </motion.h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                                className={`px-4 py-2 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10`}
                            >
                                <span className="text-violet font-medium">{t.contact.french}:</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} ml-2`}>{t.contact.native}</span>
                            </motion.span>
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                                className={`px-4 py-2 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10`}
                            >
                                <span className="text-violet font-medium">{t.contact.english}:</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} ml-2`}>C2</span>
                            </motion.span>
                            <motion.span
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                                className={`px-4 py-2 ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} rounded-lg border border-violet/10`}
                            >
                                <span className="text-violet font-medium">{t.contact.spanish}:</span>
                                <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} ml-2`}>B1</span>
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
