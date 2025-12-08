'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'
import ThemeToggle from './ThemeToggle'
import LanguageDropdown from './LanguageDropdown'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const { language, theme } = useTheme()
    const t = translations[language]

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            setScrolled(offset > 50)

            // Détecter la section active
            const sections = ['about', 'timeline', 'projects', 'skills', 'experience', 'education', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 150 && rect.bottom >= 150
                }
                return false
            })
            if (current) {
                setActiveSection(current)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { name: t.nav.about, href: '#about' },
        { name: language === 'fr' ? 'Parcours' : 'Journey', href: '#timeline' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.education, href: '#education' },
        { name: t.nav.contact, href: '#contact' },
    ]

    const navVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    }

    const menuVariants = {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.3 }
    }

    const menuItemVariants = {
        initial: { x: -20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.3 }
    }

    return (
        <motion.header
            className={`fixed top-2 md:top-4 left-0 right-0 mx-auto w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-7xl z-50 px-4 md:px-6 py-3 md:py-4 rounded-2xl transition-all duration-500 ${
                scrolled || isOpen 
                    ? `${theme === 'dark' ? 'bg-dark/80' : 'bg-white/80'} backdrop-blur-xl shadow-lg shadow-violet/5 border ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200/50'}` 
                    : 'bg-transparent border border-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            role="banner"
        >
            <nav className="flex items-center justify-between" role="navigation" aria-label="Navigation principale">
                <Link 
                    href="#hero" 
                    className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-bold text-lg md:text-xl flex items-center gap-2 group`}
                    aria-label="Retour à l'accueil"
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/images/logo.webp"
                            alt="Logo Portfolio Jordan Turnaco"
                            width={32}
                            height={32}
                            className="rounded-full md:w-10 md:h-10 ring-2 ring-violet/20 group-hover:ring-violet/50 transition-all duration-300"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-1 xl:space-x-2" role="menubar">
                    {menuItems.map((item) => {
                        const sectionId = item.href.replace('#', '')
                        const isActive = activeSection === sectionId
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                aria-current={isActive ? 'page' : undefined}
                                className={`relative px-4 py-2 rounded-xl transition-all duration-300 text-sm xl:text-base font-medium ${
                                    isActive 
                                        ? `text-violet ${theme === 'dark' ? 'bg-violet/10' : 'bg-violet/5'}` 
                                        : `${theme === 'dark' ? 'text-gray-custom hover:text-white' : 'text-gray-600 hover:text-dark'} hover:bg-violet/5`
                                }`}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div 
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet rounded-full"
                                        layoutId="activeIndicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                    <div className={`flex items-center gap-2 xl:gap-3 ml-4 pl-4 border-l ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                        <ThemeToggle />
                        <LanguageDropdown />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`lg:hidden ${theme === 'dark' ? 'text-gray-custom hover:text-violet' : 'text-gray-600 hover:text-violet'} transition-colors p-2 rounded-xl ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
                    aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? (
                            <FiX className="w-6 h-6" aria-hidden="true" />
                        ) : (
                            <FiMenu className="w-6 h-6" aria-hidden="true" />
                        )}
                    </motion.div>
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`lg:hidden border-t ${theme === 'dark' ? 'border-violet/20' : 'border-gray-200'} mt-3 overflow-hidden`}
                        role="menu"
                    >
                        <div className="py-4">
                            <div className="flex flex-col space-y-1">
                                {menuItems.map((item, index) => {
                                    const sectionId = item.href.replace('#', '')
                                    const isActive = activeSection === sectionId
                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            role="menuitem"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`${
                                                isActive 
                                                    ? `text-violet ${theme === 'dark' ? 'bg-violet/10' : 'bg-violet/5'}` 
                                                    : `${theme === 'dark' ? 'text-gray-custom hover:text-violet' : 'text-gray-600 hover:text-violet'}`
                                            } transition-all duration-300 px-4 py-3 rounded-xl ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-100'} text-sm font-medium`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </motion.a>
                                    )
                                })}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className={`pt-4 mt-2 flex items-center justify-center gap-4 border-t ${theme === 'dark' ? 'border-violet/10' : 'border-gray-200'}`}
                                >
                                    <ThemeToggle />
                                    <LanguageDropdown />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
} 