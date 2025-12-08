'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme, language } = useTheme();
    const t = translations[language];

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const socialLinks = [
        { href: "https://github.com/xoudev", icon: FaGithub, label: "GitHub" },
        { href: "https://www.linkedin.com/in/jordan-turnaco-a7a3a82a1/", icon: FaLinkedin, label: "LinkedIn" },
        { href: "mailto:jordan.turnaco@protonmail.com", icon: FaEnvelope, label: "Email" },
    ];

    return (
        <footer className={`relative ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'} overflow-hidden`} role="contentinfo">
            {/* Decorative gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
            
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-violet/5 rounded-full filter blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-orange/5 rounded-full filter blur-3xl" />
            </div>

            <div className="container-custom py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Logo et Description */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="md:col-span-5 space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-violet/20">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    <span className="text-violet">TURN</span>
                                    <span className="text-orange">ACO</span>
                                </h3>
                                <p className={`text-xs ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'}`}>
                                    Cybersecurity Student
                                </p>
                            </div>
                        </div>
                        <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm leading-relaxed max-w-md`}>
                            {t.footer.description}
                        </p>
                        
                        {/* Social links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                                    rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                    className={`group w-11 h-11 rounded-xl flex items-center justify-center ${
                                        theme === 'dark' 
                                            ? 'bg-dark hover:bg-violet/20' 
                                            : 'bg-white hover:bg-violet/10'
                                    } border ${
                                        theme === 'dark' ? 'border-white/5' : 'border-gray-200'
                                    } transition-all duration-300 hover:border-violet/30 hover:shadow-lg hover:shadow-violet/10`}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} group-hover:text-violet transition-colors`} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Rapide */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="md:col-span-3"
                    >
                        <h4 className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold mb-5 text-sm uppercase tracking-wider`}>
                            {t.footer.quickNav}
                        </h4>
                        <nav className="space-y-3" aria-label="Navigation rapide">
                            {[
                                { href: "#about", label: t.nav.about },
                                { href: "#projects", label: t.nav.projects },
                                { href: "#skills", label: t.nav.skills },
                                { href: "#experience", label: t.nav.experience },
                                { href: "#education", label: t.nav.education },
                                { href: "#contact", label: t.nav.contact },
                            ].map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className={`block text-sm ${
                                        theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'
                                    } hover:text-violet transition-colors duration-200 hover:translate-x-1 transform`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="md:col-span-4"
                    >
                        <h4 className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold mb-5 text-sm uppercase tracking-wider`}>
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                <span className="text-violet font-medium">Email:</span><br />
                                jordan.turnaco@protonmail.com
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                <span className="text-violet font-medium">Location:</span><br />
                                Ile-de-France, France
                            </p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                <span className="text-violet font-medium">Status:</span><br />
                                <span className="inline-flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    {language === 'fr' ? 'Disponible pour un stage' : 'Available for internship'}
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-12 pt-8 border-t border-violet/10 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                        © {currentYear} TURNACO Jordan. {t.footer.rights}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} italic`}>
                        {language === 'fr' ? '"Le meilleur mot de passe ? Celui que même toi tu oublies"' : '"The best password? The one even you forget"'} 🔐
                    </p>
                </motion.div>
            </div>
        </footer>
    );
} 