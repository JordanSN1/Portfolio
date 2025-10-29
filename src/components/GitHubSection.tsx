'use client'

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { FaGithub, FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';
import Image from 'next/image';

export default function GitHubSection() {
    const { language, theme } = useTheme();

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
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
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
        <section id="github" className={`py-20 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <div className="container-custom">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaGithub className={`text-4xl ${theme === 'dark' ? 'text-white' : 'text-dark'}`} />
                        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                            {language === 'fr' ? 'Mon GitHub' : 'My GitHub'}
                        </h2>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        {language === 'fr' 
                            ? 'Découvrez mes contributions et projets open source'
                            : 'Discover my contributions and open source projects'
                        }
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="max-w-6xl mx-auto"
                >
                    {/* GitHub Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`${
                                theme === 'dark' ? 'bg-dark' : 'bg-white'
                            } p-6 rounded-xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md text-center`}
                        >
                            <FaBook className="text-violet text-3xl mx-auto mb-3" />
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-1`}>
                                15+
                            </h3>
                            <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                {language === 'fr' ? 'Projets' : 'Projects'}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`${
                                theme === 'dark' ? 'bg-dark' : 'bg-white'
                            } p-6 rounded-xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md text-center`}
                        >
                            <FaStar className="text-orange text-3xl mx-auto mb-3" />
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-1`}>
                                10+
                            </h3>
                            <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                Stars
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`${
                                theme === 'dark' ? 'bg-dark' : 'bg-white'
                            } p-6 rounded-xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md text-center`}
                        >
                            <FaCodeBranch className="text-green-500 text-3xl mx-auto mb-3" />
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-1`}>
                                50+
                            </h3>
                            <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                Commits
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`${
                                theme === 'dark' ? 'bg-dark' : 'bg-white'
                            } p-6 rounded-xl border ${
                                theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                            } hover:border-violet/30 transition-all duration-300 shadow-sm hover:shadow-md text-center`}
                        >
                            <FaGithub className="text-violet text-3xl mx-auto mb-3" />
                            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-1`}>
                                2+
                            </h3>
                            <p className={`${theme === 'dark' ? 'text-gray-custom' : 'text-gray-600'} text-sm`}>
                                {language === 'fr' ? 'Années' : 'Years'}
                            </p>
                        </motion.div>
                    </div>

                    {/* GitHub Stats Images */}
                    <motion.div
                        variants={cardVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        <div className={`${
                            theme === 'dark' ? 'bg-dark' : 'bg-white'
                        } p-6 rounded-xl border ${
                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                        }`}>
                            <Image
                                src={`https://github-readme-stats.vercel.app/api?username=xoudev&show_icons=true&theme=${theme === 'dark' ? 'radical' : 'default'}&hide_border=true&bg_color=${theme === 'dark' ? '1a1b26' : 'ffffff'}`}
                                alt="GitHub Stats"
                                width={500}
                                height={195}
                                className="w-full rounded-lg"
                            />
                        </div>

                        <div className={`${
                            theme === 'dark' ? 'bg-dark' : 'bg-white'
                        } p-6 rounded-xl border ${
                            theme === 'dark' ? 'border-violet/10' : 'border-gray-200'
                        }`}>
                            <Image
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=xoudev&layout=compact&theme=${theme === 'dark' ? 'radical' : 'default'}&hide_border=true&bg_color=${theme === 'dark' ? '1a1b26' : 'ffffff'}`}
                                alt="Top Languages"
                                width={500}
                                height={195}
                                className="w-full rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        variants={cardVariants}
                        className="text-center mt-12"
                    >
                        <motion.a
                            href="https://github.com/xoudev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet to-purple-600 hover:from-violet/90 hover:to-purple-600/90 text-white rounded-lg transition-all duration-300 shadow-lg shadow-violet/20"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaGithub className="text-2xl" />
                            <span className="font-semibold">
                                {language === 'fr' ? 'Voir mon profil GitHub' : 'View my GitHub profile'}
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
