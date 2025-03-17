type CategoryKey = 'programming' | 'web' | 'frameworks';
type LevelKey = 'advanced' | 'intermediate' | 'beginner';

interface Translations {
    fr: {
        nav: {
            home: string;
            about: string;
            skills: string;
            experience: string;
            projects: string;
            contact: string;
        };
        hero: {
            greeting: string;
            role: string;
            description: string;
        };
        skills: {
            title: string;
            description: string;
            categories: Record<CategoryKey, string>;
            levels: Record<LevelKey, string>;
        };
        experience: {
            title: string;
            description: string;
            internship: string;
            current: string;
            experiences: {
                flutter: {
                    title: string;
                    company: string;
                    period: string;
                    description: string[];
                    website: string;
                };
                web: {
                    title: string;
                    company: string;
                    period: string;
                    description: string[];
                    website: string;
                };
            };
        };
        projects: {
            title: string;
            description: string;
            featured: string;
            private: string;
            privateRepo: string;
            privateRepoMessage: string;
            close: string;
            github: string;
            youtube: string;
            context: {
                stage: string;
                firstYear: string;
                secondYear: string;
                personal: string;
            };
        };
        contact: {
            title: string;
            description: string;
            email: string;
            phone: string;
            location: string;
            languages: string;
            french: string;
            english: string;
            spanish: string;
            native: string;
            levelC2: string;
            levelB1: string;
        };
        footer: {
            description: string;
            quickNav: string;
            followMe: string;
            rights: string;
        };
        common: {
            close: string;
            notAvailable: {
                title: string;
                message: string;
            };
        };
    };
    en: {
        nav: {
            home: string;
            about: string;
            skills: string;
            experience: string;
            projects: string;
            contact: string;
        };
        hero: {
            greeting: string;
            role: string;
            description: string;
        };
        skills: {
            title: string;
            description: string;
            categories: Record<CategoryKey, string>;
            levels: Record<LevelKey, string>;
        };
        experience: {
            title: string;
            description: string;
            internship: string;
            current: string;
            experiences: {
                flutter: {
                    title: string;
                    company: string;
                    period: string;
                    description: string[];
                    website: string;
                };
                web: {
                    title: string;
                    company: string;
                    period: string;
                    description: string[];
                    website: string;
                };
            };
        };
        projects: {
            title: string;
            description: string;
            featured: string;
            private: string;
            privateRepo: string;
            privateRepoMessage: string;
            close: string;
            github: string;
            youtube: string;
            context: {
                stage: string;
                firstYear: string;
                secondYear: string;
                personal: string;
            };
        };
        contact: {
            title: string;
            description: string;
            email: string;
            phone: string;
            location: string;
            languages: string;
            french: string;
            english: string;
            spanish: string;
            native: string;
            levelC2: string;
            levelB1: string;
        };
        footer: {
            description: string;
            quickNav: string;
            followMe: string;
            rights: string;
        };
        common: {
            close: string;
            notAvailable: {
                title: string;
                message: string;
            };
        };
    };
}

export const translations: Translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            experience: "Expérience",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            greeting: "Bonjour, je suis",
            role: "Développeur Full Stack",
            description: "Étudiant en Bachelor Informatique avec une expertise en développement web et mobile et cybersécurité."
        },
        skills: {
            title: "Compétences",
            description: "Étudiant en Bachelor Informatique avec une expertise en développement web et mobile et cybersécurité.",
            categories: {
                programming: "Langages de Programmation",
                web: "Technologies Web",
                frameworks: "Frameworks & Outils"
            },
            levels: {
                advanced: "Avancé",
                intermediate: "Intermédiaire",
                beginner: "Débutant"
            }
        },
        experience: {
            title: "Expérience",
            description: "Mon parcours professionnel",
            internship: "Stage",
            current: "En cours",
            experiences: {
                flutter: {
                    title: "Stage Développement Flutter",
                    company: "AaliaTech",
                    period: "Décembre 2024 - Février 2025",
                    description: [
                        "Développement d'interfaces responsives et intuitives en Dart avec Flutter",
                        "Intégration de Firebase pour l'authentification et le stockage de données",
                        "Optimisation des performances et correction de bugs",
                        "Utilisation de Git pour la gestion du code et participation aux réunions techniques"
                    ],
                    website: "https://aalia.tech/"
                },
                web: {
                    title: "Stage Développeur Web",
                    company: "Minkey",
                    period: "Avril - Juin 2024",
                    description: [
                        "Amélioration de l'interface utilisateur",
                        "Optimisation des performances du site",
                        "Refonte globale de l'apparence du site web",
                        "Collaboration avec l'équipe de design"
                    ],
                    website: "https://www.minkey.fr"
                }
            }
        },
        projects: {
            title: "Projets",
            description: "Découvrez mes projets personnels et académiques",
            featured: "Featured",
            private: "Privé",
            privateRepo: "Repository Privé",
            privateRepoMessage: "Désolé, ce repository est privé. Regardez la vidéo pour en savoir plus sur le projet.",
            close: "Fermer",
            github: "GitHub",
            youtube: "YouTube",
            context: {
                stage: "Stage",
                firstYear: "Cours 1ere année",
                secondYear: "Cours 2eme année",
                personal: "Personnel"
            }
        },
        contact: {
            title: "Contact",
            description: "N'hésitez pas à me contacter",
            email: "Email",
            phone: "Téléphone",
            location: "Localisation",
            languages: "Langues",
            french: "Français",
            english: "Anglais",
            spanish: "Espagnol",
            native: "Maternel",
            levelC2: "Niveau avancé",
            levelB1: "Niveau intermédiaire"
        },
        footer: {
            description: "Développeur et cybersécurité passionné. 20 ans en recherche d'alternance pour 2025 - 2026.",
            quickNav: "Navigation Rapide",
            followMe: "Me Suivre",
            rights: "Tous droits réservés."
        },
        common: {
            close: "Fermer",
            notAvailable: {
                title: "Non disponible",
                message: "Cette fonctionnalité n'est pas encore disponible. Revenez plus tard !"
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            role: "Full Stack Developer",
            description: "Bachelor's student in Computer Science with expertise in web and mobile development and cybersecurity."
        },
        skills: {
            title: "Skills",
            description: "Bachelor's student in Computer Science with expertise in web and mobile development and cybersecurity.",
            categories: {
                programming: "Programming Languages",
                web: "Web Technologies",
                frameworks: "Frameworks & Tools"
            },
            levels: {
                advanced: "Advanced",
                intermediate: "Intermediate",
                beginner: "Beginner"
            }
        },
        experience: {
            title: "Experience",
            description: "My professional journey",
            internship: "Internship",
            current: "Current",
            experiences: {
                flutter: {
                    title: "Flutter Development Internship",
                    company: "AaliaTech",
                    period: "December 2024 - February 2025",
                    description: [
                        "Development of responsive and intuitive interfaces in Dart with Flutter",
                        "Firebase integration for authentication and data storage",
                        "Performance optimization and bug fixing",
                        "Using Git for code management and participation in technical meetings"
                    ],
                    website: "https://www.aaliatech.com"
                },
                web: {
                    title: "Web Developer Internship",
                    company: "Minkey",
                    period: "April - June 2024",
                    description: [
                        "User interface improvement",
                        "Website performance optimization",
                        "Complete website redesign",
                        "Collaboration with the design team"
                    ],
                    website: "https://www.minkey.com"
                }
            }
        },
        projects: {
            title: "Projects",
            description: "Discover my personal and academic projects",
            featured: "Featured",
            private: "Private",
            privateRepo: "Private Repository",
            privateRepoMessage: "Sorry, this repository is private. Watch the video to learn more about the project.",
            close: "Close",
            github: "GitHub",
            youtube: "YouTube",
            context: {
                stage: "Internship",
                firstYear: "First Year Course",
                secondYear: "Second Year Course",
                personal: "Personal"
            }
        },
        contact: {
            title: "Contact",
            description: "Feel free to contact me",
            email: "Email",
            phone: "Phone",
            location: "Location",
            languages: "Languages",
            french: "French",
            english: "English",
            spanish: "Spanish",
            native: "Native",
            levelC2: "Advanced",
            levelB1: "Intermediate"
        },
        footer: {
            description: "Passionate developer and cybersecurity enthusiast. 20 years old looking for an apprenticeship for 2025 - 2026.",
            quickNav: "Quick Navigation",
            followMe: "Follow Me",
            rights: "All rights reserved."
        },
        common: {
            close: "Close",
            notAvailable: {
                title: "Not available",
                message: "This feature is not available yet. Please check back later!"
            }
        }
    }
}; 