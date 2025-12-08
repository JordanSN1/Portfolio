'use client'

import { motion } from 'framer-motion';
import { FaPython, FaPhp, FaLinux, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiVuedotjs, SiDart, SiC, SiMysql, SiNextdotjs, SiFirebase, SiVmware, SiPfsense, SiCisco, SiSharp, SiWireshark, SiKalilinux, SiKubernetes, SiJenkins, SiGitlab, SiAnsible, SiTerraform, SiSonarqube } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaShieldAlt, FaBug, FaKey, FaNetworkWired, FaTools, FaDownload, FaEye, FaCode } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { useState } from 'react';
import Popup from './Popup';

type CategoryKey = 'development' | 'cybersecurity' | 'devsecops' | 'tools';
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
            category: "development",
            icon: <FaCode className="w-8 h-8 text-violet" />,
            description: t.skills.categories.development,
            technologies: [
                { name: t.skills.technologies.development.python, icon: <FaPython />, level: "intermediate" },
                { name: t.skills.technologies.development.javascript, icon: <SiJavascript />, level: "intermediate" },
                { name: t.skills.technologies.development.php, icon: <FaPhp />, level: "intermediate" },
                { name: t.skills.technologies.development.dart, icon: <SiDart />, level: "intermediate" },
                { name: t.skills.technologies.development.react, icon: <SiReact />, level: "intermediate" },
                { name: t.skills.technologies.development.nextjs, icon: <SiNextdotjs />, level: "intermediate" },
                { name: t.skills.technologies.development.mysql, icon: <SiMysql />, level: "intermediate" }
            ]
        },
        {
            category: "cybersecurity",
            icon: <FaShieldAlt className="w-8 h-8 text-violet" />,
            description: t.skills.categories.cybersecurity,
            technologies: [
                { name: t.skills.technologies.cybersecurity.pentesting, icon: <FaBug />, level: "intermediate" },
                { name: t.skills.technologies.cybersecurity.wireshark, icon: <SiWireshark />, level: "intermediate" },
                { name: t.skills.technologies.cybersecurity.burpsuite, icon: <FaKey />, level: "beginner" },
                { name: t.skills.technologies.cybersecurity.metasploit, icon: <FaTools />, level: "beginner" },
                { name: t.skills.technologies.cybersecurity.nmap, icon: <FaNetworkWired />, level: "intermediate" },
                { name: t.skills.technologies.cybersecurity.kalilinux, icon: <SiKalilinux />, level: "intermediate" },
                { name: t.skills.technologies.cybersecurity.osint, icon: <FaEye />, level: "intermediate" }
            ]
        },
        {
            category: "devsecops",
            icon: <FaDocker className="w-8 h-8 text-violet" />,
            description: t.skills.categories.devsecops,
            technologies: [
                { name: t.skills.technologies.devsecops.docker, icon: <FaDocker />, level: "intermediate" },
                { name: t.skills.technologies.devsecops.kubernetes, icon: <SiKubernetes />, level: "beginner" },
                { name: t.skills.technologies.devsecops.jenkins, icon: <SiJenkins />, level: "beginner" },
                { name: t.skills.technologies.devsecops.gitlab, icon: <SiGitlab />, level: "intermediate" },
                { name: t.skills.technologies.devsecops.ansible, icon: <SiAnsible />, level: "beginner" },
                { name: t.skills.technologies.devsecops.terraform, icon: <SiTerraform />, level: "beginner" }
            ]
        },
        {
            category: "tools",
            icon: <FaTools className="w-8 h-8 text-violet" />,
            description: t.skills.categories.tools,
            technologies: [
                { name: t.skills.technologies.tools.git, icon: <FaGitAlt />, level: "intermediate" },
                { name: t.skills.technologies.tools.linux, icon: <FaLinux />, level: "intermediate" },
                { name: t.skills.technologies.tools.vmware, icon: <SiVmware />, level: "intermediate" },
                { name: t.skills.technologies.tools.pfsense, icon: <SiPfsense />, level: "beginner" },
                { name: t.skills.technologies.tools.cisco, icon: <SiCisco />, level: "beginner" },
                { name: t.skills.technologies.tools.firebase, icon: <SiFirebase />, level: "intermediate" },
                { name: t.skills.technologies.tools.nodejs, icon: <FaNodeJs />, level: "intermediate" }
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
        <section id="skills" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-dark' : 'bg-gray-50'}`}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet/5 rounded-full filter blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-orange/5 rounded-full filter blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`inline-block px-4 py-2 ${theme === 'dark' ? 'bg-violet/10 border-violet/20' : 'bg-violet/5 border-violet/10'} border rounded-full text-violet text-sm font-medium mb-4 gap-2 items-center`}
                    >
                        <FaCode className="w-4 h-4 inline mr-2" />
                        {language === 'fr' ? 'Compétences' : 'Skills'}
                    </motion.span>
                    <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.skills.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto text-lg`}>
                        {t.skills.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
                >
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className={`group relative ${
                                theme === 'dark' ? 'bg-dark-light/50' : 'bg-white'
                            } p-8 rounded-2xl transition-all duration-500 card-shine overflow-hidden`}
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet/20 via-transparent to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            <div className={`absolute inset-[1px] rounded-2xl ${theme === 'dark' ? 'bg-dark-light' : 'bg-white'} -z-10`} />
                            
                            {/* Border */}
                            <div className={`absolute inset-0 rounded-2xl border ${theme === 'dark' ? 'border-violet/10 group-hover:border-violet/30' : 'border-gray-200 group-hover:border-violet/30'} transition-all duration-500 pointer-events-none`} />
                            
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet to-orange rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className={`flex items-center gap-4 mb-6 pb-4 border-b ${theme === 'dark' ? 'border-violet/10' : 'border-gray-100'}`}
                            >
                                <motion.div 
                                    variants={iconVariants}
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="p-4 bg-gradient-to-br from-violet/10 to-purple-500/10 rounded-xl border border-violet/10"
                                >
                                    {category.icon}
                                </motion.div>
                                <div>
                                    <motion.h3
                                        variants={skillItemVariants}
                                        className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} group-hover:text-violet transition-colors duration-300`}
                                    >
                                        {t.skills.categories[category.category]}
                                    </motion.h3>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="flex flex-wrap gap-3"
                            >
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        variants={levelBadgeVariants}
                                        custom={techIndex}
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${
                                            theme === 'dark' ? 'bg-dark/50' : 'bg-gray-50'
                                        } border ${
                                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                                        } hover:border-violet/50 hover:shadow-lg hover:shadow-violet/10 transition-all duration-300 cursor-default group/tech`}
                                    >
                                        <motion.span
                                            variants={iconVariants}
                                            className="text-violet text-xl group-hover/tech:scale-110 group-hover/tech:rotate-12 transition-transform duration-300"
                                        >
                                            {tech.icon}
                                        </motion.span>
                                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-custom group-hover/tech:text-white' : 'text-gray-700 group-hover/tech:text-dark'} transition-colors duration-300`}>
                                            {tech.name}
                                        </span>
                                        {/* Level indicator */}
                                        <span className={`w-2 h-2 rounded-full ${
                                            tech.level === 'advanced' ? 'bg-green-500' :
                                            tech.level === 'intermediate' ? 'bg-violet' : 'bg-orange'
                                        }`} title={t.skills.levels[tech.level]} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 