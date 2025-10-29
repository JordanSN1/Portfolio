import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'Jordan Turnaco - Étudiant en Cybersécurité | Portfolio',
    description: 'Portfolio de Jordan Turnaco, étudiant en 3ème année de Bachelor Cybersécurité à Guardia Cybersecurity School. Spécialisé en sécurité des systèmes d\'information, développement web et infrastructure réseau.',
    keywords: ['Jordan Turnaco', 'Cybersécurité', 'Développeur', 'Portfolio', 'Guardia', 'EPSI', 'Arvato', 'Sécurité informatique', 'ISMS'],
    authors: [{ name: 'Jordan Turnaco' }],
    creator: 'Jordan Turnaco',
    publisher: 'Jordan Turnaco',
    icons: {
        icon: '/images/logo.webp',
        apple: '/images/logo.webp',
    },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        alternateLocale: 'en_US',
        url: 'https://xoudev.github.io/Portfolio/',
        siteName: 'Jordan Turnaco Portfolio',
        title: 'Jordan Turnaco - Étudiant en Cybersécurité',
        description: 'Portfolio professionnel de Jordan Turnaco, étudiant en cybersécurité et développeur full-stack. Découvrez mes projets et compétences.',
        images: [
            {
                url: '/images/TURNACOJordan.jpg',
                width: 1200,
                height: 630,
                alt: 'Jordan Turnaco',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jordan Turnaco - Étudiant en Cybersécurité',
        description: 'Portfolio professionnel de Jordan Turnaco, étudiant en cybersécurité et développeur full-stack.',
        images: ['/images/TURNACOJordan.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'votre-code-verification-google',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#8b5cf6" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
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
                    <ScrollProgress />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
} 