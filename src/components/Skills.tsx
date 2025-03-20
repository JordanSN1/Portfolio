'use client'

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaFigma, FaNodeJs, FaLinux, FaServer, FaNetworkWired, FaCode, FaTools, FaDownload } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { SiJavascript, SiReact, SiVuedotjs, SiDjango, SiSymfony, SiDart, SiC, SiMysql, SiNextdotjs, SiFirebase, SiVmware, SiPfsense, SiCisco, SiSharp } from 'react-icons/si';
import { TbBrandFramerMotion, TbWorld } from 'react-icons/tb';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { useState } from 'react';
import Popup from './Popup';

type CategoryKey = 'programming' | 'web' | 'frameworks';
type LevelKey = 'advanced' | 'intermediate' | 'beginner';

interface Technology {
    name: string;
    icon: JSX.Element;
    level: LevelKey;
}

interface SkillCategory {
    category: CategoryKey;
    icon: JSX.Element;
    description: string;
    technologies: Technology[];
}

export default function Skills() {
    const { language, theme } = useTheme();
    const t = translations[language];
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    const skills: SkillCategory[] = [
        {
            category: "programming",
            icon: <FaCode className="w-8 h-8 text-violet" />,
            description: t.skills.categories.programming,
            technologies: [
                { name: t.skills.technologies.programming.python, icon: <FaPython />, level: "intermediate" },
                { name: t.skills.technologies.programming.javascript, icon: <SiJavascript />, level: "intermediate" },
                { name: t.skills.technologies.programming.c, icon: <SiC />, level: "beginner" },
                { name: t.skills.technologies.programming.dart, icon: <SiDart />, level: "intermediate" },
                { name: t.skills.technologies.programming.php, icon: <FaPhp />, level: "intermediate" },
                { name: t.skills.technologies.programming.csharp, icon: <SiSharp />, level: "beginner" }
            ]
        },
        {
            category: "web",
            icon: <TbWorld className="w-8 h-8 text-violet" />,
            description: t.skills.categories.web,
            technologies: [
                { name: t.skills.technologies.web.html, icon: <FaHtml5 />, level: "advanced" },
                { name: t.skills.technologies.web.css, icon: <FaCss3Alt />, level: "advanced" },
                { name: t.skills.technologies.web.react, icon: <SiReact />, level: "intermediate" },
                { name: t.skills.technologies.web.vue, icon: <SiVuedotjs />, level: "beginner" },
                { name: t.skills.technologies.web.nextjs, icon: <SiNextdotjs />, level: "intermediate" },
                { name: t.skills.technologies.web.mysql, icon: <SiMysql />, level: "intermediate" },
                { name: t.skills.technologies.web.django, icon: <SiDjango />, level: "beginner" },
                { name: t.skills.technologies.web.symfony, icon: <SiSymfony />, level: "beginner" }
            ]
        },
        {
            category: "frameworks",
            icon: <FaTools className="w-8 h-8 text-violet" />,
            description: t.skills.categories.frameworks,
            technologies: [
                { name: t.skills.technologies.frameworks.flutter, icon: <FaFlutter />, level: "intermediate" },
                { name: t.skills.technologies.frameworks.nodejs, icon: <FaNodeJs />, level: "intermediate" },
                { name: t.skills.technologies.frameworks.firebase, icon: <SiFirebase />, level: "intermediate" },
                { name: t.skills.technologies.frameworks.framerMotion, icon: <TbBrandFramerMotion />, level: "intermediate" },
                { name: t.skills.technologies.frameworks.figma, icon: <FaFigma />, level: "intermediate" },
                { name: t.skills.technologies.frameworks.linux, icon: <FaLinux />, level: "intermediate" },
                { name: t.skills.technologies.frameworks.vmware, icon: <SiVmware />, level: "beginner" },
                { name: t.skills.technologies.frameworks.pfsense, icon: <SiPfsense />, level: "beginner" },
                { name: t.skills.technologies.frameworks.cisco, icon: <SiCisco />, level: "beginner" }
            ]
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
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0.8, rotate: -90 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const skillItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    const levelBadgeVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const handleDownloadCV = () => {
        setShowDownloadModal(true);
    };

    const confirmDownload = () => {
        window.open('/cv.pdf', '_blank');
        setShowDownloadModal(false);
    };

    return (
        <section id="skills" className="py-20 bg-white dark:bg-dark-light">
            <div className="container-custom">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">{t.skills.title}</h2>
                    <p className="text-gray-custom max-w-2xl mx-auto mb-8">
                        {t.skills.description}
                    </p>
                    <button
                        onClick={handleDownloadCV}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-violet hover:bg-violet/90 text-white rounded-lg transition-all duration-300"
                    >
                        <FaDownload />
                        <span>{t.common.downloadCV.button}</span>
                    </button>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white dark:bg-dark p-6 rounded-xl border border-violet/10 hover:border-violet/30 transition-all duration-300"
                        >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="flex items-center gap-4 mb-6"
                            >
                                <motion.div variants={iconVariants}>
                                    {category.icon}
                                </motion.div>
                                <div>
                                    <motion.h3
                                        variants={skillItemVariants}
                                        className="text-xl font-bold text-dark dark:text-white"
                                    >
                                        {t.skills.categories[category.category]}
                                    </motion.h3>
                                    <motion.p
                                        variants={skillItemVariants}
                                        className="text-gray-custom text-sm"
                                    >
                                        {category.description}
                                    </motion.p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="space-y-4"
                            >
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        variants={skillItemVariants}
                                        custom={techIndex}
                                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-lighter rounded-lg hover:bg-violet/5 transition-all duration-300"
                                    >
                                        <motion.div
                                            variants={skillItemVariants}
                                            className="flex items-center gap-3"
                                        >
                                            <motion.span
                                                variants={iconVariants}
                                                className="text-violet text-xl"
                                            >
                                                {tech.icon}
                                            </motion.span>
                                            <span className="text-gray-custom">{tech.name}</span>
                                        </motion.div>
                                        <motion.span
                                            variants={levelBadgeVariants}
                                            className={`text-xs px-2 py-1 bg-violet/10 text-violet rounded-full
                                                }`}
                                        >
                                            {t.skills.levels[tech.level]}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal de téléchargement du CV */}
            <Popup
                isOpen={showDownloadModal}
                onClose={() => setShowDownloadModal(false)}
                title={t.common.downloadCV.title}
                message={t.common.downloadCV.message}
                onConfirm={confirmDownload}
                confirmText={t.common.downloadCV.button}
            />
        </section>
    );
} 