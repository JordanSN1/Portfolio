'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

interface TimelineItem {
    type: 'education' | 'work' | 'project';
    title: string;
    organization: string;
    period: string;
    description: string;
    icon: any;
}

export default function Timeline() {
    const { language, theme } = useTheme();
    const t = translations[language];

    const timelineItems: TimelineItem[] = [
        {
            type: 'work',
            title: t.experience.experiences.arvato.title,
            organization: t.experience.experiences.arvato.company,
            period: t.experience.experiences.arvato.period,
            description: t.experience.experiences.arvato.description[0],
            icon: Briefcase
        },
        {
            type: 'education',
            title: t.education.educations[0].degree,
            organization: t.education.educations[0].school,
            period: t.education.educations[0].period,
            description: t.education.educations[0].description || '',
            icon: GraduationCap
        },
        {
            type: 'work',
            title: t.experience.experiences.flutter.title,
            organization: t.experience.experiences.flutter.company,
            period: t.experience.experiences.flutter.period,
            description: t.experience.experiences.flutter.description[0],
            icon: Briefcase
        },
        {
            type: 'education',
            title: t.education.educations[1].degree,
            organization: t.education.educations[1].school,
            period: t.education.educations[1].period,
            description: t.education.educations[1].description || '',
            icon: GraduationCap
        },
        {
            type: 'work',
            title: t.experience.experiences.web.title,
            organization: t.experience.experiences.web.company,
            period: t.experience.experiences.web.period,
            description: t.experience.experiences.web.description[0],
            icon: Briefcase
        },
        {
            type: 'education',
            title: t.education.educations[2].degree,
            organization: t.education.educations[2].school,
            period: t.education.educations[2].period,
            description: t.education.educations[2].description || '',
            icon: GraduationCap
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
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

    const getIconColor = (type: string) => {
        switch (type) {
            case 'work':
                return 'text-violet';
            case 'education':
                return 'text-orange';
            case 'project':
                return 'text-green-500';
            default:
                return 'text-violet';
        }
    };

    const getLineColor = (type: string) => {
        switch (type) {
            case 'work':
                return 'border-violet';
            case 'education':
                return 'border-orange';
            case 'project':
                return 'border-green-500';
            default:
                return 'border-violet';
        }
    };

    return (
        <section id="timeline" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {language === 'fr' ? 'Mon Parcours' : 'My Journey'}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {language === 'fr' 
                            ? 'Une vue chronologique de mon parcours académique et professionnel'
                            : 'A chronological view of my academic and professional journey'
                        }
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative">
                        {/* Ligne verticale */}
                        <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${theme === 'dark' ? 'bg-violet/20' : 'bg-gray-300'}`} />

                        <div className="space-y-8">
                            {timelineItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative pl-20"
                                    >
                                        {/* Icône */}
                                        <div className={`absolute left-4 w-8 h-8 rounded-full ${
                                            theme === 'dark' ? 'bg-dark' : 'bg-white'
                                        } border-2 ${getLineColor(item.type)} flex items-center justify-center`}>
                                            <Icon className={`w-4 h-4 ${getIconColor(item.type)}`} />
                                        </div>

                                        {/* Contenu */}
                                        <div className={`${
                                            theme === 'dark' ? 'bg-dark' : 'bg-white'
                                        } p-4 md:p-6 rounded-xl border ${
                                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                                        } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md`}>
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                <div className="flex-1 min-w-0">
                                                    <h3 className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                                        {item.title}
                                                    </h3>
                                                    <p className={getIconColor(item.type) + ' font-medium text-sm md:text-base'}>
                                                        {item.organization}
                                                    </p>
                                                </div>
                                                <span className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} shrink-0`}>
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-xs md:text-sm`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
