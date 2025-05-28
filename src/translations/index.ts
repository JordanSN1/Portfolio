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
            technologies: {
                programming: {
                    python: string;
                    php: string;
                    javascript: string;
                    csharp: string;
                    java: string;
                    c: string;
                    dart: string;
                };
                web: {
                    html: string;
                    css: string;
                    react: string;
                    vue: string;
                    nextjs: string;
                    django: string;
                    symfony: string;
                    mysql: string;
                };
                frameworks: {
                    flutter: string;
                    nodejs: string;
                    firebase: string;
                    framerMotion: string;
                    figma: string;
                    linux: string;
                    vmware: string;
                    pfsense: string;
                    cisco: string;
                };
            };
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
            projects: {
                cyberlearnApp: {
                    title: string;
                    description: string[];
                };
                cyberlearnWeb: {
                    title: string;
                    description: string[];
                };
                phantomBurger: {
                    title: string;
                    description: string[];
                };
                epsiZone: {
                    title: string;
                    description: string[];
                };
                cosmoBazaar: {
                    title: string;
                    description: string[];
                };
                infrastructure: {
                    title: string;
                    description: string[];
                };
                pythonApp: {
                    title: string;
                    description: string[];
                };
                smartBike: {
                    title: string;
                    description: string[];
                };
                twitchDb: {
                    title: string;
                    description: string[];
                };
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
            downloadCV: {
                title: string;
                message: string;
                button: string;
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
            technologies: {
                programming: {
                    python: string;
                    php: string;
                    javascript: string;
                    csharp: string;
                    c: string;
                    dart: string;
                    java: string;
                };
                web: {
                    html: string;
                    css: string;
                    react: string;
                    vue: string;
                    nextjs: string;
                    django: string;
                    symfony: string;
                    mysql: string;
                };
                frameworks: {
                    flutter: string;
                    nodejs: string;
                    firebase: string;
                    framerMotion: string;
                    figma: string;
                    linux: string;
                    vmware: string;
                    pfsense: string;
                    cisco: string;
                };
            };
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
            projects: {
                cyberlearnApp: {
                    title: string;
                    description: string[];
                };
                cyberlearnWeb: {
                    title: string;
                    description: string[];
                };
                phantomBurger: {
                    title: string;
                    description: string[];
                };
                epsiZone: {
                    title: string;
                    description: string[];
                };
                cosmoBazaar: {
                    title: string;
                    description: string[];
                };
                infrastructure: {
                    title: string;
                    description: string[];
                };
                pythonApp: {
                    title: string;
                    description: string[];
                };
                smartBike: {
                    title: string;
                    description: string[];
                };
                twitchDb: {
                    title: string;
                    description: string[];
                };
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
            downloadCV: {
                title: string;
                message: string;
                button: string;
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
            role: "Étudiant en Cybersécurité & Réseaux",
            description: "Étudiant en Bachelor Informatique en recherche d'alternance en cybersécurité et infrastructure réseau."
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
            },
            technologies: {
                programming: {
                    python: "Python",
                    php: "PHP",
                    javascript: "JavaScript",
                    csharp: "C#",
                    java: "Java",
                    c: "C",
                    dart: "Dart"
                },
                web: {
                    html: "HTML",
                    css: "CSS",
                    react: "React",
                    vue: "Vue.js",
                    nextjs: "Next.js",
                    django: "Django",
                    symfony: "Symfony",
                    mysql: "MySQL"
                },
                frameworks: {
                    flutter: "Flutter",
                    nodejs: "Node.js",
                    firebase: "Firebase",
                    framerMotion: "Framer Motion",
                    figma: "Figma",
                    linux: "Linux",
                    vmware: "VMware",
                    pfsense: "pfSense",
                    cisco: "Cisco"
                }
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
            },
            projects: {
                cyberlearnApp: {
                    title: "CyberLearn - Application mobile",
                    description: [
                        "Application mobile de cours pour particulier sur la cybersécurité et nouvelle technologie",
                        "Stockage des données sur Firebase",
                        "Interface utilisateur intuitive et responsive"
                    ]
                },
                cyberlearnWeb: {
                    title: "CyberLearn - Site web",
                    description: [
                        "Site web pour la présentation du projet CyberLearn, il sert egalement de plateforme web pour l'application mobile",
                        "Systeme de cours dynamique",
                        "Interface utilisateur moderne et responsive"
                    ]
                },
                phantomBurger: {
                    title: "PhantomBurger - Site web",
                    description: [
                        "Site web pour un restaurant",
                        "Système de réservation en ligne",
                        "Interface d'administration intégrée"
                    ]
                },
                epsiZone: {
                    title: "EPSI Zone - Workshop",
                    description: [
                        "Développement d'une application web pour le workshop de l'EPSI, vis la vie d'un étudiant",
                        "Intégration d'une mini visite virtuelle via vidéo",
                        "Interface utilisateur responsive"
                    ]
                },
                cosmoBazaar: {
                    title: "CosmoBazaar - Site web",
                    description: [
                        "Site web concu pour un projet de debut d'année en UX/UI",
                        "Interface en ligne de commande",
                        "Interface utilisateur responsive, et design moderne , UX/UI friendly"
                    ]
                },
                infrastructure: {
                    title: "Infrastructure de serveurs pour entreprise",
                    description: [
                        "Configuration d'un cluster de serveurs",
                        "Mise en place de la haute disponibilité",
                        "Serveurs, VM, VPN, etc..."
                    ]
                },
                pythonApp: {
                    title: "Application console en python pour gestion d'un centre de recherche",
                    description: [
                        "Application console en python pour gestion d'un centre de recherche",
                        "Interface en ligne de commande"
                    ]
                },
                smartBike: {
                    title: "Smart Bike - Site web",
                    description: [
                        "Site web pour un projet a l'apprentisage de PHP I",
                        "Interface en ligne de commande",
                        "Interface utilisateur responsive, et design moderne"
                    ]
                },
                twitchDb: {
                    title: "Base de données Twitch",
                    description: [
                        "Base de données pour un projet a l'apprentisage de SQL",
                        "Recreation d'une base de données de twitch",
                        "60 tables"
                    ]
                }
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
            description: "Étudiant passionné par la cybersécurité et les réseaux. 20 ans en recherche d'alternance pour 2025 - 2026.",
            quickNav: "Navigation Rapide",
            followMe: "Me Suivre",
            rights: "Tous droits réservés."
        },
        common: {
            close: "Fermer",
            notAvailable: {
                title: "Non disponible",
                message: "Cette fonctionnalité n'est pas encore disponible. Revenez plus tard !"
            },
            downloadCV: {
                title: "Télécharger le CV",
                message: "Voulez-vous télécharger mon CV au format PDF ?",
                button: "Télécharger"
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
            role: "Cybersecurity & Network Student",
            description: "Bachelor's student in Computer Science looking for an apprenticeship in cybersecurity and network infrastructure."
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
            },
            technologies: {
                programming: {
                    python: "Python",
                    php: "PHP",
                    javascript: "JavaScript",
                    csharp: "C#",
                    c: "C",
                    dart: "Dart",
                    java: "Java"
                },
                web: {
                    html: "HTML",
                    css: "CSS",
                    react: "React",
                    vue: "Vue.js",
                    nextjs: "Next.js",
                    django: "Django",
                    symfony: "Symfony",
                    mysql: "MySQL"
                },
                frameworks: {
                    flutter: "Flutter",
                    nodejs: "Node.js",
                    firebase: "Firebase",
                    framerMotion: "Framer Motion",
                    figma: "Figma",
                    linux: "Linux",
                    vmware: "VMware",
                    pfsense: "pfSense",
                    cisco: "Cisco"
                }
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
            },
            projects: {
                cyberlearnApp: {
                    title: "CyberLearn - Mobile App",
                    description: [
                        "Mobile application for cybersecurity and new technology courses for individuals",
                        "Data storage on Firebase",
                        "Intuitive and responsive user interface"
                    ]
                },
                cyberlearnWeb: {
                    title: "CyberLearn - Website",
                    description: [
                        "Website for presenting the CyberLearn project, also serving as a web platform for the mobile app",
                        "Dynamic course system",
                        "Modern and responsive user interface"
                    ]
                },
                phantomBurger: {
                    title: "PhantomBurger - Website",
                    description: [
                        "Website for a restaurant",
                        "Online reservation system",
                        "Integrated admin interface"
                    ]
                },
                epsiZone: {
                    title: "EPSI Zone - Workshop",
                    description: [
                        "Development of a web application for the EPSI workshop, experience student life",
                        "Integration of a mini virtual tour via video",
                        "Responsive user interface"
                    ]
                },
                cosmoBazaar: {
                    title: "CosmoBazaar - Website",
                    description: [
                        "Website designed for a UX/UI beginning of year project",
                        "Online ordering interface",
                        "Responsive user interface with modern design, UX/UI friendly"
                    ]
                },
                infrastructure: {
                    title: "Enterprise Server Infrastructure",
                    description: [
                        "Server cluster configuration",
                        "High availability setup",
                        "Servers, VMs, VPN, etc..."
                    ]
                },
                pythonApp: {
                    title: "Python Console Application for Research Center Management",
                    description: [
                        "Python console application for research center management",
                        "Command line interface"
                    ]
                },
                smartBike: {
                    title: "Smart Bike - Website",
                    description: [
                        "Website for a PHP I learning project",
                        "Online ordering interface",
                        "Responsive user interface with modern design"
                    ]
                },
                twitchDb: {
                    title: "Twitch Database",
                    description: [
                        "Database for a SQL learning project",
                        "Recreation of a Twitch database",
                        "60 tables"
                    ]
                }
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
            description: "Student passionate about cybersecurity and networks. 20 years old looking for an apprenticeship for 2025 - 2026.",
            quickNav: "Quick Navigation",
            followMe: "Follow Me",
            rights: "All rights reserved."
        },
        common: {
            close: "Close",
            notAvailable: {
                title: "Not available",
                message: "This feature is not available yet. Please check back later!"
            },
            downloadCV: {
                title: "Download CV",
                message: "Would you like to download my CV in PDF format?",
                button: "Download"
            }
        }
    }
}; 