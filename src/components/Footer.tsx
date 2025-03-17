'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme, language } = useTheme();
    const t = translations[language];

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <footer className={`${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} border-t border-violet/10`}>
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo et Description */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold">
                            <span className="text-violet">TURN</span>
                            <span className="text-orange">ACO</span>
                        </h3>
                        <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} mt-2`}>
                            {t.footer.description}
                        </p>
                    </motion.div>

                    {/* Navigation Rapide */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-4"
                    >
                        <h4 className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold`}>{t.footer.quickNav}</h4>
                        <nav className="grid grid-cols-2 gap-2">
                            <a href="#" className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}>{t.nav.about}</a>
                            <a href="#projects" className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}>{t.nav.projects}</a>
                            <a href="#skills" className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}>{t.nav.skills}</a>
                            <a href="#experience" className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}>{t.nav.experience}</a>
                            <a href="#contact" className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}>{t.nav.contact}</a>
                        </nav>
                    </motion.div>

                    {/* Réseaux Sociaux */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-4"
                    >
                        <h4 className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold`}>{t.footer.followMe}</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/JordanSN1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jordan-turnaco-a7a3a82a1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:jordanturnaco@gmail.com"
                                className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} hover:text-violet transition-colors`}
                            >
                                <FaEnvelope className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-8 pt-8 border-t border-violet/10 text-center"
                >
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                        © {currentYear} TURNACO Jordan. {t.footer.rights}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
} 