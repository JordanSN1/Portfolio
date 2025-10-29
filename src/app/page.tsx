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

    return (
        <main id="main-content" className={`min-h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`} role="main">
            <Hero />
            <div className="space-y-20 py-20">
                <About />
                <Timeline />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Contact />
            </div>
        </main>
    )
} 