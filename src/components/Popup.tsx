'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { FiX } from 'react-icons/fi';
import { translations } from '@/translations';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

export default function Popup({ isOpen, onClose, title, message }: PopupProps) {
    const { theme, language } = useTheme();
    const t = translations[language];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-[100]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`relative w-full max-w-md mx-4 ${theme === 'dark' ? 'bg-dark-light' : 'bg-white'} rounded-xl shadow-lg border border-violet/10 p-6`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-gray-custom hover:text-violet transition-colors"
                            >
                                <FiX className="w-6 h-6" />
                            </button>
                        </div>
                        <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} mb-6`}>
                            {message}
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-violet hover:bg-violet/90 text-white rounded-lg transition-colors"
                            >
                                {t.common.close}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
} 