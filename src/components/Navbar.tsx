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
    const { language } = useTheme()
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
            className={`fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-7xl z-50 px-3 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-violet/20 transition-all duration-300 ${scrolled || isOpen ? 'bg-dark/95 backdrop-blur-lg' : 'bg-transparent'}`}
            role="banner"
        >
            <nav className="flex items-center justify-between" role="navigation" aria-label="Navigation principale">
                <Link 
                    href="#hero" 
                    className="text-white font-bold text-lg md:text-xl flex items-center gap-2"
                    aria-label="Retour à l'accueil"
                >
                    <Image
                        src="/images/logo.webp"
                        alt="Logo Portfolio Jordan Turnaco"
                        width={32}
                        height={32}
                        className="rounded-full md:w-10 md:h-10"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8" role="menubar">
                    {menuItems.map((item) => {
                        const sectionId = item.href.replace('#', '')
                        const isActive = activeSection === sectionId
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                role="menuitem"
                                aria-current={isActive ? 'page' : undefined}
                                className={`transition-colors relative group text-sm xl:text-base ${
                                    isActive ? 'text-violet' : 'text-gray-custom hover:text-violet'
                                }`}
                            >
                                {item.name}
                                <span 
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                    aria-hidden="true"
                                />
                            </Link>
                        )
                    })}
                    <div className="flex items-center gap-2 xl:gap-4">
                        <ThemeToggle />
                        <LanguageDropdown />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-gray-custom hover:text-violet transition-colors p-2"
                    aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? (
                        <FiX className="w-6 h-6" aria-hidden="true" />
                    ) : (
                        <FiMenu className="w-6 h-6" aria-hidden="true" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="lg:hidden border-t border-violet/20 mt-3"
                        role="menu"
                    >
                        <div className="py-4">
                            <div className="flex flex-col space-y-2">
                                {menuItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        role="menuitem"
                                        className="text-gray-custom hover:text-violet transition-colors px-3 py-2 rounded-lg hover:bg-dark/50 text-sm"
                                        onClick={() => setIsOpen(false)}
                                        variants={menuItemVariants}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <div className="pt-3 flex items-center justify-center gap-4">
                                    <ThemeToggle />
                                    <LanguageDropdown />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
} 