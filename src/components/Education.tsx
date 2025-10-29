'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/translations';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
    degree: string;
    school: string;
    period: string;
    description?: string;
}

interface CertificationItem {
    name: string;
    organization: string;
    date?: string;
}

export default function Education() {
    const { language, theme } = useTheme();
    const t = translations[language];

    const educations: EducationItem[] = t.education.educations;
    const certifications: CertificationItem[] = t.education.certifications;

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

    return (
        <section id="education" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-4`}>
                        {t.education.title}
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {t.education.description}
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Section Formations */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl">
                                <GraduationCap className="text-violet w-7 h-7" />
                            </div>
                            <h3 className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                {t.education.educationSection}
                            </h3>
                        </div>
                        <div className="space-y-5">
                            {educations.map((education, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className={`${
                                        theme === 'dark' ? 'bg-dark/50' : 'bg-white'
                                    } p-6 md:p-8 rounded-2xl border ${
                                        theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                                    } hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl relative backdrop-blur-sm`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <h4 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                                    {education.degree}
                                                </h4>
                                                {index === 0 && (
                                                    <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-500 rounded-full text-xs font-semibold flex items-center gap-2 whitespace-nowrap shrink-0 border border-green-500/20">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                        En cours
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-violet font-semibold text-base md:text-lg">{education.school}</p>
                                        </div>
                                        <span className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} shrink-0 font-medium`}>
                                            {education.period}
                                        </span>
                                    </div>
                                    {education.description && (
                                        <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-700'} mt-3 text-sm md:text-base leading-relaxed`}>
                                            {education.description}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section Certifications */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gradient-to-br from-violet/20 to-purple-500/20 rounded-xl">
                                <Award className="text-violet w-7 h-7" />
                            </div>
                            <h3 className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                                {t.education.certificationsSection}
                            </h3>
                        </div>
                        {certifications.length === 0 ? (
                            <motion.div
                                variants={cardVariants}
                                className={`${
                                    theme === 'dark' ? 'bg-dark/50' : 'bg-white'
                                } p-8 rounded-2xl border ${
                                    theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                                } text-center shadow-lg backdrop-blur-sm`}
                            >
                                <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-base`}>
                                    {t.education.noCertifications}
                                </p>
                            </motion.div>
                        ) : (
                            <div className="space-y-5">
                                {certifications.map((certification, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        className={`${
                                            theme === 'dark' ? 'bg-dark/50' : 'bg-white'
                                        } p-6 md:p-8 rounded-2xl border ${
                                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                                        } hover:border-violet/30 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div className="flex-1">
                                                <h4 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-2`}>
                                                    {certification.name}
                                                </h4>
                                                <p className="text-violet font-semibold text-base md:text-lg">{certification.organization}</p>
                                            </div>
                                            {certification.date && (
                                                <span className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} whitespace-nowrap font-medium`}>
                                                    {certification.date}
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
