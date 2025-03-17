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
    const { language } = useTheme()
    const t = translations[language]

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            setScrolled(offset > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.projects, href: '#projects' },
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
            className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 px-6 py-4 rounded-2xl border border-violet/20 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-lg' : 'bg-transparent'}`}
        >
            <nav className="flex items-center justify-between">
                <Link href="#hero" className="text-white font-bold text-xl flex items-center gap-2">
                    <Image
                        src="/images/logo.webp"
                        alt="Logo Portfolio"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-custom hover:text-violet transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageDropdown />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-custom hover:text-violet transition-colors"
                >
                    {isOpen ? (
                        <FiX className="w-6 h-6" />
                    ) : (
                        <FiMenu className="w-6 h-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="md:hidden border-t border-violet/20"
                    >
                        <div className="container-custom py-4">
                            <div className="flex flex-col space-y-4">
                                {menuItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-custom hover:text-violet transition-colors px-4 py-2 rounded-lg hover:bg-dark/50"
                                        onClick={() => setIsOpen(false)}
                                        variants={menuItemVariants}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <div className="pt-4 flex items-center justify-center gap-4">
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