'use client'

import { useState, useRef, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageDropdown() {
    const { language, toggleLanguage } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const t = translations[language];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-lighter dark:bg-white/10 hover:bg-violet/10 dark:hover:bg-violet/20 transition-colors duration-300"
            >
                <FaGlobe className="w-5 h-5 text-violet" />
                <span className="text-sm text-violet">{languages.find(lang => lang.code === language)?.flag}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-dark-lighter shadow-lg border border-violet/10 overflow-hidden z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    if (lang.code !== language) {
                                        toggleLanguage();
                                    }
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-violet/10 dark:hover:bg-violet/20 transition-colors duration-300 ${language === lang.code ? 'text-violet' : 'text-gray-600 dark:text-gray-custom'
                                    }`}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span>{lang.name}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 