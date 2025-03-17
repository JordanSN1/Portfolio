'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
    website: string;
}

export default function Experience() {
    const { language, theme } = useTheme();
    const t = translations[language];

    const experiences: Experience[] = [
        {
            title: t.experience.experiences.flutter.title,
            company: t.experience.experiences.flutter.company,
            period: t.experience.experiences.flutter.period,
            description: t.experience.experiences.flutter.description,
            technologies: ["Flutter", "Dart", "Firebase", "Git"],
            website: t.experience.experiences.flutter.website
        },
        {
            title: t.experience.experiences.web.title,
            company: t.experience.experiences.web.company,
            period: t.experience.experiences.web.period,
            description: t.experience.experiences.web.description,
            technologies: ["HTML", "CSS", "JavaScript"],
            website: t.experience.experiences.web.website
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

    const timelineDotVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
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

    return (
        <section id="experience" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.experience.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {t.experience.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={`${theme === 'dark' ? 'bg-dark' : 'bg-white'} p-6 rounded-xl border border-violet/10 hover:border-violet/30 transition-all duration-300`}
                            >
                                <motion.div variants={cardVariants} className="mb-4">
                                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                        {experience.title}
                                    </h3>
                                    <p className="text-violet">
                                        <a
                                            href={experience.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {experience.company}
                                        </a>
                                    </p>
                                    <p className="text-gray-custom text-sm">{experience.period}</p>
                                </motion.div>
                                <ul className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} space-y-2 mb-4`}>
                                    {experience.description.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-violet mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-violet/10 text-violet rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 