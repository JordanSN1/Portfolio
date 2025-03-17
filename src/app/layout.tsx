import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'Turnaco Jordan - Portfolio',
    icons: {
        icon: '/images/logo.webp',
    },
    description: 'Portfolio personnel présentant mes projets et compétences',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        try {
                            if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                document.documentElement.classList.add('dark');
                            }
                        } catch (e) {}
                    `
                }} />
            </head>
            <body className={`${inter.variable} font-sans bg-white dark:bg-dark text-dark dark:text-white transition-colors duration-300`}>
                <ThemeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
} 