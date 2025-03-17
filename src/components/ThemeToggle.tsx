'use client'

import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-lighter dark:bg-white/10 hover:bg-violet/10 dark:hover:bg-violet/20 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <FaSun className="w-5 h-5 text-violet" />
            ) : (
                <FaMoon className="w-5 h-5 text-violet" />
            )}
        </button>
    );
} 