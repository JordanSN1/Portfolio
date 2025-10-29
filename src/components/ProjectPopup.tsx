import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaYoutube, FaTimes, FaStar, FaCalendar, FaAward } from 'react-icons/fa';
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
            // Empêcher le scroll du body quand le modal est ouvert
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className={`relative ${
                        theme === 'dark' ? 'bg-dark' : 'bg-white'
                    } rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border ${
                        theme === 'dark' ? 'border-violet/20' : 'border-gray-200'
                    }`}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                            theme === 'dark' ? 'bg-dark-light hover:bg-violet/20' : 'bg-gray-100 hover:bg-gray-200'
                        } transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'}`}
                        aria-label="Fermer la fenêtre"
                    >
                        <FaTimes className={theme === 'dark' ? 'text-white' : 'text-dark'} aria-hidden="true" />
                    </button>

                    {/* Image Header */}
                    <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Title on Image */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <h2 id="project-modal-title" className="text-3xl font-bold text-white mb-2">
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-violet/80 backdrop-blur-sm text-white rounded-full text-sm flex items-center gap-1">
                                    <FaCalendar className="text-xs" aria-hidden="true" />
                                    {project.date}
                                </span>
                                <span className="px-3 py-1 bg-orange/80 backdrop-blur-sm text-white rounded-full text-sm">
                                    {project.context}
                                </span>
                                {project.grade && (
                                    <span className="px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white rounded-full text-sm flex items-center gap-1">
                                        <FaAward className="text-xs" aria-hidden="true" />
                                        {project.grade}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* Description */}
                        <div className="mb-6">
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4 flex items-center gap-2`}>
                                <FaStar className="text-violet" aria-hidden="true" />
                                {language === 'fr' ? 'Description' : 'Description'}
                            </h3>
                            <ul className="space-y-3">
                                {project.description.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-start gap-3 ${
                                            theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'
                                        }`}
                                    >
                                        <span className="text-violet mt-1" aria-hidden="true">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                                {language === 'fr' ? 'Technologies utilisées' : 'Technologies used'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-violet/10 text-violet rounded-lg font-medium hover:bg-violet/20 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-violet/10">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-violet hover:bg-violet/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-violet/20 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                    aria-label="Voir le projet sur GitHub"
                                >
                                    <FaGithub className="text-xl" aria-hidden="true" />
                                    GitHub
                                </a>
                            )}
                            {project.youtube && (
                                <a
                                    href={project.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-red-600/20 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                    aria-label="Voir la vidéo du projet sur YouTube"
                                >
                                    <FaYoutube className="text-xl" aria-hidden="true" />
                                    {language === 'fr' ? 'Voir la vidéo' : 'Watch video'}
                                </a>
                            )}
                            {project.isPrivate && (
                                <span className={`flex items-center gap-2 px-6 py-3 ${
                                    theme === 'dark' ? 'bg-dark-light' : 'bg-gray-100'
                                } ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} rounded-lg`}>
                                    <span aria-hidden="true">🔒</span> {language === 'fr' ? 'Repository privé' : 'Private repository'}
                                </span>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
} 