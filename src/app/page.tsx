'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
    const { theme } = useTheme();

    return (
        <main className={`min-h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
            <Hero />
            <div className="space-y-20 py-20">
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </div>
        </main>
    )
} 