'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaShieldAlt, FaCode, FaMobileAlt, FaServer, FaPalette, FaLaptopCode } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
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
    category: "cyber" | "web" | "mobile" | "infrastructure" | "design" | "dev";
}

type ProjectCategory = "all" | "cyber" | "web" | "mobile" | "infrastructure" | "design" | "dev";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
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
            isPrivate: true,
            category: "mobile"
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
            isPrivate: false,
            category: "web"
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
            grade: "17/20",
            category: "web"
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
            grade: "16/20",
            category: "web"
        },
        {
            title: t.projects.projects.cosmoBazaar.title,
            description: t.projects.projects.cosmoBazaar.description,
            technologies: ["Figma", "WireFrame"],
            image: "/images/CosmoBazaar.png",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 2eme année",
            date: "Septembre 2024",
            grade: "19/20",
            category: "design"
        },
        {
            title: t.projects.projects.infrastructure.title,
            description: t.projects.projects.infrastructure.description,
            technologies: ["PFsense", "VMware", "Linux", "Cisco packet tracer"],
            image: "/images/epsi.jpg",
            context: "Cours 2eme année",
            date: "Decembre 2024",
            grade: "17/20",
            category: "infrastructure"
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
            grade: "14/20",
            category: "dev"
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
            grade: "19/20",
            category: "web"
        },
        {
            title: t.projects.projects.twitchDb.title,
            description: t.projects.projects.twitchDb.description,
            technologies: ["Mysql", "SQL"],
            image: "/images/twitch.webp",
            youtube: "https://youtube.com/watch?v=votre-video",
            context: "Cours 1ere année",
            date: "Septembre 2023",
            grade: "16.75/20",
            category: "dev"
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

    // Trier et filtrer les projets
    const filteredProjects = activeFilter === "all" 
        ? projects 
        : projects.filter(project => project.category === activeFilter);
    
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
    });

    const filterCategories: ProjectCategory[] = ["all", "cyber", "web", "mobile", "infrastructure", "design", "dev"];

    const getCategoryIcon = (category: ProjectCategory) => {
        const iconClass = "text-base";
        switch (category) {
            case "all":
                return <MdApps className={iconClass} />;
            case "cyber":
                return <FaShieldAlt className={iconClass} />;
            case "web":
                return <FaCode className={iconClass} />;
            case "mobile":
                return <FaMobileAlt className={iconClass} />;
            case "infrastructure":
                return <FaServer className={iconClass} />;
            case "design":
                return <FaPalette className={iconClass} />;
            case "dev":
                return <FaLaptopCode className={iconClass} />;
            default:
                return null;
        }
    };

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

    return (
        <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.projects.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
                        {t.projects.description}
                    </p>

                    {/* Filtres de catégories */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8" role="group" aria-label="Filtrer les projets par catégorie">
                        {filterCategories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-dark' : 'focus:ring-offset-white'} ${
                                    activeFilter === category
                                        ? 'bg-gradient-to-r from-violet to-purple-600 text-white shadow-lg shadow-violet/30'
                                        : theme === 'dark'
                                        ? 'bg-dark-light text-gray-custom hover:bg-violet/10 hover:text-violet border border-violet/20'
                                        : 'bg-white text-gray-700 hover:bg-violet/10 hover:text-violet border border-gray-200 hover:border-violet/30'
                                }`}
                                aria-pressed={activeFilter === category}
                                aria-label={`Filtrer par ${t.projects.filters[category]}`}
                            >
                                <span aria-hidden="true">{getCategoryIcon(category)}</span>
                                {t.projects.filters[category]}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto"
                    >
                    {sortedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`group ${theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'} rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/40 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col`}
                        >
                            {/* Image Container - Plus grande et mieux intégrée */}
                            <div className={`relative h-56 ${theme === 'dark' ? 'bg-gradient-to-br from-violet/5 via-dark-light to-purple-600/5' : 'bg-gradient-to-br from-violet/5 via-gray-50 to-purple-600/5'} flex items-center justify-center p-8`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                                />
                                
                                {/* Badges en haut */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                                    {project.featured && (
                                        <span className="px-3 py-1.5 bg-violet/90 backdrop-blur-xl text-white rounded-full text-xs font-bold shadow-lg border border-white/20">
                                            ⭐ {t.projects.featured}
                                        </span>
                                    )}
                                    {project.grade && (
                                        <span className="px-3 py-1.5 bg-orange/90 backdrop-blur-xl text-white rounded-full text-xs font-bold shadow-lg border border-white/20 ml-auto">
                                            📊 {project.grade}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-2`}>
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="px-2.5 py-1 bg-violet/10 text-violet rounded-lg font-medium">
                                            {project.context === "Stage" && t.projects.context.stage}
                                            {project.context === "Cours 1ere année" && t.projects.context.firstYear}
                                            {project.context === "Cours 2eme année" && t.projects.context.secondYear}
                                            {project.context === "Personnel" && t.projects.context.personal}
                                        </span>
                                        <span className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                            {project.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm mb-4 line-clamp-3 leading-relaxed`}>
                                    {project.description[0]}
                                </p>

                                {/* Technologies Grid */}
                                <div className="flex flex-wrap gap-2 mb-5 flex-grow">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1.5 text-xs font-medium rounded-lg ${theme === 'dark' ? 'bg-dark text-gray-custom' : 'bg-gray-100 text-gray-700'} border ${theme === 'dark' ? 'border-violet/20' : 'border-gray-200'} hover:border-violet hover:text-violet transition-all duration-200 h-fit`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-3 bg-gradient-to-r from-violet via-purple-600 to-violet bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 shadow-lg shadow-violet/30 hover:shadow-xl hover:shadow-violet/50 group focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
                                    aria-label={`Voir les détails du projet ${project.title}`}
                                >
                                    <span>{language === 'fr' ? 'Voir le projet' : 'View project'}</span>
                                    <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                </AnimatePresence>
            </div>

            {/* Modal détaillé pour chaque projet */}
            {selectedProject && (
                <ProjectPopup
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            )}
        </section>
    );
} 