'use client'

import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-lighter dark:bg-white/10 hover:bg-violet/10 dark:hover:bg-violet/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-dark"
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
            {theme === 'dark' ? (
                <FaSun className="w-5 h-5 text-violet" aria-hidden="true" />
            ) : (
                <FaMoon className="w-5 h-5 text-violet" aria-hidden="true" />
            )}
        </button>
    );
} 