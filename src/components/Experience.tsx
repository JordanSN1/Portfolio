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
            title: t.experience.experiences.arvato.title,
            company: t.experience.experiences.arvato.company,
            period: t.experience.experiences.arvato.period,
            description: t.experience.experiences.arvato.description,
            technologies: ["ISMS", "ISO 27001", "Cybersecurity", "Risk Management"],
            website: t.experience.experiences.arvato.website
        },
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
                    className="max-w-5xl mx-auto"
                >
                    <div className="space-y-6">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={`${theme === 'dark' ? 'bg-dark/50' : 'bg-white'} p-6 md:p-8 rounded-2xl border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'} hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl relative backdrop-blur-sm`}
                            >
                                {index === 0 && (
                                    <div className="absolute top-6 right-6">
                                        <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-500 rounded-full text-xs font-semibold flex items-center gap-2 border border-green-500/20">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            {t.experience.current}
                                        </span>
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} pr-24 mb-2`}>
                                        {experience.title}
                                    </h3>
                                    <p className="text-violet font-semibold text-lg mb-1">
                                        <a
                                            href={experience.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline hover:text-violet/80 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-transparent rounded"
                                            aria-label={`Visiter le site web de ${experience.company}`}
                                        >
                                            {experience.company}
                                        </a>
                                    </p>
                                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm font-medium`}>{experience.period}</p>
                                </div>
                                <ul className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-700'} space-y-3 mb-6`}>
                                    {experience.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-sm md:text-base">
                                            <span className="text-violet mr-3 mt-1 font-bold">•</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-gradient-to-br from-violet/10 to-purple-500/10 text-violet rounded-lg text-sm font-medium border border-violet/10 hover:border-violet/30 hover:scale-105 transition-all duration-200"
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