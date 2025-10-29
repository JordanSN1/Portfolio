'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useEffect } from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    onConfirm: () => void;
    confirmText: string;
}

export default function Popup({ isOpen, onClose, title, message, onConfirm, confirmText }: PopupProps) {
    const { theme } = useTheme();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV TURNACO Jordan.pdf';
        link.download = 'CV TURNACO Jordan.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="popup-title">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className={`w-[90%] max-w-md p-6 rounded-xl ${theme === 'dark' ? 'bg-dark-light' : 'bg-white'
                                } shadow-xl`}
                        >
                            <h3 id="popup-title" className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                {title}
                            </h3>
                            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'}`}>
                                {message}
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={onClose}
                                    className={`px-4 py-2 rounded-lg ${theme === 'dark'
                                        ? 'bg-dark-lighter text-gray-custom hover:bg-dark-lighter/80'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark-light' : 'focus:ring-offset-white'}`}
                                    aria-label="Annuler et fermer"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={downloadCV}
                                    className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-violet/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark-light"
                                    aria-label="Télécharger mon CV"
                                >
                                    Télécharger le CV
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}