'use client'

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaPython, FaPhp, FaFigma, FaNodeJs, FaLinux, FaServer, FaNetworkWired, FaCode, FaTools } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { SiJavascript, SiReact, SiVuedotjs, SiDjango, SiSymfony, SiDart, SiC, SiMysql, SiNextdotjs, SiFirebase, SiVmware, SiPfsense, SiCisco, SiSharp } from 'react-icons/si';
import { TbBrandFramerMotion, TbWorld } from 'react-icons/tb';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';

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

const skills: SkillCategory[] = [
    {
        category: "programming",
        icon: <FaCode className="w-8 h-8 text-violet" />,
        description: "Maîtrise des langages fondamentaux",
        technologies: [
            { name: "Python", icon: <FaPython />, level: "advanced" },
            { name: "JavaScript", icon: <SiJavascript />, level: "advanced" },
            { name: "C", icon: <SiC />, level: "beginner" },
            { name: "Dart", icon: <SiDart />, level: "beginner" },
            { name: "PHP", icon: <FaPhp />, level: "intermediate" },
            { name: "SQL", icon: <SiMysql />, level: "advanced" },
            { name: "C#", icon: <SiSharp />, level: "beginner" }
        ]
    },
    {
        category: "web",
        icon: <TbWorld className="w-8 h-8 text-violet" />,
        description: "Développement d'applications web modernes",
        technologies: [
            { name: "HTML5", icon: <FaHtml5 />, level: "advanced" },
            { name: "CSS3", icon: <FaCss3Alt />, level: "advanced" },
            { name: "React", icon: <SiReact />, level: "advanced" },
            { name: "React Native", icon: <SiReact />, level: "intermediate" },
            { name: "Vue.js", icon: <SiVuedotjs />, level: "beginner" },
            { name: "Node.js", icon: <FaNodeJs />, level: "intermediate" },
            { name: "Next.js", icon: <SiNextdotjs />, level: "intermediate" },
            { name: "Firebase", icon: <SiFirebase />, level: "intermediate" }
        ]
    },
    {
        category: "frameworks",
        icon: <FaTools className="w-8 h-8 text-violet" />,
        description: "Frameworks et outils de développement",
        technologies: [
            { name: "Django", icon: <SiDjango />, level: "beginner" },
            { name: "Symfony", icon: <SiSymfony />, level: "beginner" },
            { name: "Flutter", icon: <FaFlutter />, level: "intermediate" },
            { name: "Framer Motion", icon: <TbBrandFramerMotion />, level: "intermediate" },
            { name: "MySQL", icon: <SiMysql />, level: "advanced" },
            { name: "Figma", icon: <FaFigma />, level: "intermediate" },
            { name: "PFsense", icon: <SiPfsense />, level: "beginner" },
            { name: "VMware", icon: <SiVmware />, level: "intermediate" },
            { name: "Linux", icon: <FaLinux />, level: "intermediate" },
            { name: "Cisco", icon: <SiCisco />, level: "beginner" }
        ]
    }
];

export default function Skills() {
    const { language } = useTheme();
    const t = translations[language];

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

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    const skillItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const levelBadgeVariants = {
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

    return (
        <section id="skills" className="py-20 bg-white dark:bg-dark-light">
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">{t.skills.title}</h2>
                    <p className="text-gray-custom max-w-2xl mx-auto">
                        {t.skills.description}
                    </p>
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
                                            className="text-xs px-2 py-1 bg-violet/10 text-violet rounded-full"
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
        </section>
    );
} 