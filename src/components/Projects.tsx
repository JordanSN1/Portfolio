'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaLock } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import ProjectPopup from './ProjectPopup';

interface Project {
    title: string;
    description: string[];
    technologies: string[];
    image: string;
    featured?: boolean;
    github?: string;
    youtube?: string;
    grade?: string;
    context: "Stage" | "Cours 1ere année" | "Cours 2eme année" | "Personnel";
    date: string;
    isPrivate?: boolean;
}

export default function Projects() {
    const [showPrivateModal, setShowPrivateModal] = useState(false);
    const [showNotAvailableModal, setShowNotAvailableModal] = useState(false);
    const { language, theme } = useTheme();
    const t = translations[language];

    const projects: Project[] = [
        {
            title: t.projects.projects.cyberlearnApp.title,
            description: t.projects.projects.cyberlearnApp.description,
            technologies: ["React-Native", "Firebase"],
            image: "/images/Log_pricipal_large.png",
            featured: true,
            github: "https://github.com/ilyas-design/CyberLearnApp.git",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 2eme année",
            date: "Septembre 2024 - Mars 2025",
            grade: "18/20",
            isPrivate: true
        },
        {
            title: t.projects.projects.cyberlearnWeb.title,
            description: t.projects.projects.cyberlearnWeb.description,
            technologies: ["NextJS", "Node.js", "Firebase", "Typescript"],
            image: "/images/Log_pricipal_large.png",
            featured: true,
            github: "https://github.com/JordanSN1/cyberlearn-project.git",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 2eme année",
            date: "Mars 2025",
            grade: "Nds",
            isPrivate: false
        },
        {
            title: t.projects.projects.phantomBurger.title,
            description: t.projects.projects.phantomBurger.description,
            technologies: ["HTML", "CSS", "JavaScript", "PHP"],
            image: "/images/phantomBurgerlogo.png",
            github: "https://github.com/JordanSN1/ProjetTMA.git",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 2eme année",
            date: "Novembre 2024",
            grade: "17/20"
        },
        {
            title: t.projects.projects.epsiZone.title,
            description: t.projects.projects.epsiZone.description,
            technologies: ["HTML", "CSS", "JavaScript"],
            image: "/images/EPSIZONE-1-blanc.png",
            github: "https://github.com/JordanSN1/WorkShop-EpsiZone.git",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 2eme année",
            date: "Septembre 2024",
            grade: "16/20"
        },
        {
            title: t.projects.projects.cosmoBazaar.title,
            description: t.projects.projects.cosmoBazaar.description,
            technologies: ["Figma", "WireFrame"],
            image: "/images/CosmoBazaar.png",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 2eme année",
            date: "Septembre 2024",
            grade: "19/20"
        },
        {
            title: t.projects.projects.infrastructure.title,
            description: t.projects.projects.infrastructure.description,
            technologies: ["PFsense", "VMware", "Linux", "Cisco packet tracer"],
            image: "/images/epsi.jpg",
            context: "Cours 2eme année",
            date: "Decembre 2024",
            grade: "17/20"
        },
        {
            title: t.projects.projects.pythonApp.title,
            description: t.projects.projects.pythonApp.description,
            technologies: ["Python", "Mysql"],
            image: "/images/python.webp",
            github: "https://github.com/JordanSN1/ProjetObjetPython.git",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 1ere année",
            date: "Janvier 2024",
            grade: "14/20"
        },
        {
            title: t.projects.projects.smartBike.title,
            description: t.projects.projects.smartBike.description,
            technologies: ["HTML", "CSS", "JavaScript", "PHP"],
            image: "/images/smartvelo.png",
            github: "hvotre-username",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 1ere année",
            date: "Decembre 2023",
            grade: "19/20"
        },
        {
            title: t.projects.projects.twitchDb.title,
            description: t.projects.projects.twitchDb.description,
            technologies: ["Mysql", "SQL"],
            image: "/images/twitch.webp",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 1ere année",
            date: "Septembre 2023",
            grade: "16.75/20"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
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

    const techBadgeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Fonction pour convertir la date en objet Date pour le tri
    const parseDate = (dateStr: string) => {
        const months: { [key: string]: number } = {
            'Janvier': 1, 'Février': 2, 'Mars': 3, 'Avril': 4, 'Mai': 5, 'Juin': 6,
            'Juillet': 7, 'Août': 8, 'Septembre': 9, 'Octobre': 10, 'Novembre': 11, 'Décembre': 12
        };
        const [month, year] = dateStr.split(' ');
        return new Date(parseInt(year), months[month], 1);
    };

    // Trier les projets par date
    const sortedProjects = [...projects].sort((a, b) => {
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
    });

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    const handleGithubClick = (project: Project) => {
        if (project.isPrivate) {
            setShowPrivateModal(true);
        } else if (!project.github || project.github.includes('votre-username')) {
            setShowNotAvailableModal(true);
        } else {
            window.open(project.github, '_blank');
        }
    };

    const handleYoutubeClick = (project: Project) => {
        if (!project.youtube || project.youtube.includes('votre-video')) {
            setShowNotAvailableModal(true);
        } else {
            window.open(project.youtube, '_blank');
        }
    };

    return (
        <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.projects.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {t.projects.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid gap-8 md:grid-cols-2"
                >
                    {sortedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`group relative ${theme === 'dark' ? 'bg-dark' : 'bg-white'} rounded-xl overflow-hidden border border-violet/10 hover:border-violet/30 transition-all duration-300`}
                        >
                            <div className={`relative h-80 overflow-hidden ${theme === 'dark' ? 'bg-dark-light' : 'bg-gray-50'}`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    style={{ padding: '2rem' }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-${theme === 'dark' ? 'dark/90' : 'white/90'} to-transparent`} />
                                {project.featured && (
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-violet text-white rounded-full text-sm">
                                        {t.projects.featured}
                                    </span>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                        {project.title}
                                    </h3>
                                    {project.grade && (
                                        <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-sm">
                                            {project.grade}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-violet text-sm">
                                        {project.context === "Stage" && t.projects.context.stage}
                                        {project.context === "Cours 1ere année" && t.projects.context.firstYear}
                                        {project.context === "Cours 2eme année" && t.projects.context.secondYear}
                                        {project.context === "Personnel" && t.projects.context.personal}
                                    </span>
                                    <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>•</span>
                                    <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>{project.date}</span>
                                </div>
                                <ul className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} mb-4 space-y-2`}>
                                    {project.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-violet mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-violet/10 text-violet rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <button
                                            onClick={() => handleGithubClick(project)}
                                            className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-custom hover:text-violet' : 'text-gray-600 hover:text-violet'} transition-colors`}
                                        >
                                            <FaGithub className="text-xl" />
                                            <span>{t.projects.github}</span>
                                            {project.isPrivate && (
                                                <FaLock className="text-sm" />
                                            )}
                                        </button>
                                    )}
                                    {project.youtube && (
                                        <button
                                            onClick={() => handleYoutubeClick(project)}
                                            className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-custom hover:text-violet' : 'text-gray-600 hover:text-violet'} transition-colors`}
                                        >
                                            <FaYoutube className="text-xl" />
                                            <span>{t.projects.youtube}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal pour les repos privés */}
            <ProjectPopup
                isOpen={showPrivateModal}
                onClose={() => setShowPrivateModal(false)}
                title={t.projects.privateRepo}
                message={t.projects.privateRepoMessage}
            />

            {/* Modal pour les liens non disponibles */}
            <ProjectPopup
                isOpen={showNotAvailableModal}
                onClose={() => setShowNotAvailableModal(false)}
                title={t.common.notAvailable.title}
                message={t.common.notAvailable.message}
            />
        </section>
    );
} 