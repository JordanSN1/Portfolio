import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaYoutube, FaTimes, FaLock, FaExternalLinkAlt, FaCode, FaClock, FaGraduationCap } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useEffect } from 'react';

interface ProjectPopupProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string[];
        technologies: string[];
        image: string;
        github?: string;
        youtube?: string;
        context: string;
        date: string;
        grade?: string;
        isPrivate?: boolean;
    };
}

export default function ProjectPopup({ isOpen, onClose, project }: ProjectPopupProps) {
    const { theme, language } = useTheme();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                />
                
                {/* Modal Container */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 30 }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                    className={`relative ${
                        theme === 'dark' ? 'bg-dark-light' : 'bg-white'
                    } rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border ${
                        theme === 'dark' ? 'border-violet/20' : 'border-gray-200'
                    }`}
                >
                    {/* Header with Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-dark-light/50 to-dark-light' : 'bg-gradient-to-b from-transparent via-white/50 to-white'}`} />
                        
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${
                                theme === 'dark' ? 'bg-dark/60 hover:bg-dark/80 text-white' : 'bg-white/60 hover:bg-white/80 text-dark'
                            } backdrop-blur-sm transition-all duration-200 border ${theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}
                            aria-label="Fermer"
                        >
                            <IoClose className="text-xl" />
                        </button>

                        {/* Grade badge if exists */}
                        {project.grade && (
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1.5 bg-orange text-white rounded-lg text-sm font-bold shadow-lg">
                                    {project.grade}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 -mt-8 relative">
                        {/* Title section */}
                        <div className="mb-6">
                            <h2 id="project-modal-title" className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3`}>
                                {project.title}
                            </h2>
                            
                            {/* Meta info */}
                            <div className="flex flex-wrap gap-3">
                                <span className={`inline-flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'}`}>
                                    <FaClock className="text-violet text-xs" />
                                    {project.date}
                                </span>
                                <span className={`inline-flex items-center gap-1.5 text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-500'}`}>
                                    <FaGraduationCap className="text-violet text-xs" />
                                    {project.context}
                                </span>
                            </div>
                        </div>

                        {/* Scrollable content area */}
                        <div className="max-h-[40vh] overflow-y-auto pr-2 space-y-6 custom-scrollbar">
                            {/* Description */}
                            <div>
                                <h3 className={`text-sm font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-violet' : 'text-violet'} mb-3`}>
                                    {language === 'fr' ? 'À propos' : 'About'}
                                </h3>
                                <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description.map((item, index) => (
                                        <p key={index} className="text-sm leading-relaxed">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className={`text-sm font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-violet' : 'text-violet'} mb-3 flex items-center gap-2`}>
                                    <FaCode className="text-xs" />
                                    {language === 'fr' ? 'Technologies' : 'Tech Stack'}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                                                theme === 'dark' 
                                                    ? 'bg-violet/10 text-violet border border-violet/20' 
                                                    : 'bg-violet/5 text-violet border border-violet/10'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action buttons - Fixed at bottom */}
                        <div className={`mt-6 pt-5 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-100'} flex flex-wrap gap-3`}>
                            {project.github && !project.isPrivate && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-violet hover:bg-violet/90 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet/25"
                                >
                                    <FaGithub className="text-lg" />
                                    {language === 'fr' ? 'Voir le code' : 'View Code'}
                                </a>
                            )}
                            {project.youtube && (
                                <a
                                    href={project.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
                                >
                                    <FaYoutube className="text-lg" />
                                    {language === 'fr' ? 'Vidéo' : 'Video'}
                                </a>
                            )}
                            {project.isPrivate && (
                                <div className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 ${
                                    theme === 'dark' ? 'bg-dark text-gray-custom' : 'bg-gray-100 text-gray-500'
                                } rounded-xl font-medium`}>
                                    <FaLock className="text-sm" />
                                    {language === 'fr' ? 'Privé' : 'Private'}
                                </div>
                            )}
                            {!project.github && !project.youtube && !project.isPrivate && (
                                <div className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 ${
                                    theme === 'dark' ? 'bg-dark text-gray-custom' : 'bg-gray-100 text-gray-500'
                                } rounded-xl font-medium`}>
                                    {language === 'fr' ? 'Pas de liens disponibles' : 'No links available'}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
} 