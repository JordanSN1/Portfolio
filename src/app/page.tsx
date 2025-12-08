'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
    const { theme } = useTheme();

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <main id="main-content" className={`min-h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-white'} overflow-x-hidden`} role="main">
            <Hero />
            <div className="relative">
                {/* Section dividers with gradient */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <About />
                </motion.div>
                
                <div className="section-divider my-0" />
                
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Timeline />
                </motion.div>
                
                <div className="section-divider my-0" />
                
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Projects />
                </motion.div>
                
                <div className="section-divider my-0" />
                
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Skills />
                </motion.div>
                
                <div className="section-divider my-0" />
                
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Experience />
                </motion.div>
                
                <div className="section-divider my-0" />
                
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Education />
                </motion.div>
                
                <div className="section-divider my-0" />
                
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Contact />
                </motion.div>
            </div>
        </main>
    )
} 