# Script to add education and certifications sections to translations

with open('src/translations/index.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find where to insert education and certifications in the interface (after experience)
education_interface = """        education: {
            title: string;
            description: string;
            current: string;
            schools: {
                guardia: {
                    name: string;
                    degree: string;
                    period: string;
                    description: string[];
                };
                epsi: {
                    name: string;
                    degree: string;
                    period: string;
                    description: string[];
                };
            };
        };
        certifications: {
            title: string;
            description: string;
            noCertifications: string;
            comingSoon: string;
        };
"""

# French education and certifications data
fr_education = """        education: {
            title: "Formation",
            description: "Mon parcours académique",
            current: "En cours",
            schools: {
                guardia: {
                    name: "Guardia Cybersecurity School",
                    degree: "Bachelor Cybersécurité & Infrastructure - 3ème année",
                    period: "2025 - 2026",
                    description: [
                        "Spécialisation en cybersécurité et gestion des infrastructures",
                        "Apprentissage des normes de sécurité (ISO 27001, RGPD)",
                        "Gestion des systèmes d'information sécurisés",
                        "Analyse et réponse aux incidents de sécurité"
                    ]
                },
                epsi: {
                    name: "EPSI",
                    degree: "Bachelor Informatique - 1ère et 2ème année",
                    period: "2023 - 2025",
                    description: [
                        "Fondamentaux de l'informatique et de la programmation",
                        "Développement web et mobile (React, Flutter, PHP)",
                        "Gestion de bases de données et réseaux",
                        "Méthodologies Agile et gestion de projets"
                    ]
                }
            }
        },
        certifications: {
            title: "Certifications",
            description: "Mes certifications professionnelles",
            noCertifications: "Aucune certification pour le moment",
            comingSoon: "Des certifications en cybersécurité sont prévues prochainement..."
        },
"""

# English education and certifications data
en_education = """        education: {
            title: "Education",
            description: "My academic background",
            current: "Current",
            schools: {
                guardia: {
                    name: "Guardia Cybersecurity School",
                    degree: "Bachelor in Cybersecurity & Infrastructure - 3rd year",
                    period: "2025 - 2026",
                    description: [
                        "Specialization in cybersecurity and infrastructure management",
                        "Learning security standards (ISO 27001, GDPR)",
                        "Secure information systems management",
                        "Security incident analysis and response"
                    ]
                },
                epsi: {
                    name: "EPSI",
                    degree: "Bachelor in Computer Science - 1st and 2nd year",
                    period: "2023 - 2025",
                    description: [
                        "Fundamentals of computer science and programming",
                        "Web and mobile development (React, Flutter, PHP)",
                        "Database management and networks",
                        "Agile methodologies and project management"
                    ]
                }
            }
        },
        certifications: {
            title: "Certifications",
            description: "My professional certifications",
            noCertifications: "No certifications yet",
            comingSoon: "Cybersecurity certifications are planned soon..."
        },
"""

# Add apprenticeship field to experience
fr_apprenticeship = """            apprenticeship: "Alternance",
"""

en_apprenticeship = """            apprenticeship: "Apprenticeship",
"""

# Arvato experience French
fr_arvato = """                arvato: {
                    title: "Apprenti Système de Management de la Sécurité de l'Information",
                    company: "Arvato",
                    period: "Septembre 2025 - Présent",
                    description: [
                        "Mise en œuvre et maintenance du Système de Management de la Sécurité de l'Information (SMSI)",
                        "Participation à l'analyse des risques et vulnérabilités",
                        "Contribution à la conformité aux normes ISO 27001",
                        "Support aux audits de sécurité et amélioration continue des processus"
                    ],
                    website: "https://www.arvato.com"
                },
"""

# Arvato experience English
en_arvato = """                arvato: {
                    title: "Information Security Management System Apprentice",
                    company: "Arvato",
                    period: "September 2025 - Present",
                    description: [
                        "Implementation and maintenance of Information Security Management System (ISMS)",
                        "Participation in risk and vulnerability analysis",
                        "Contribution to ISO 27001 compliance",
                        "Support for security audits and continuous process improvement"
                    ],
                    website: "https://www.arvato.com"
                },
"""

# Process the file
output = []
i = 0
while i < len(lines):
    line = lines[i]
    output.append(line)
    
    # Add education/certifications to interface after experience section
    if '            };' in line and i + 1 < len(lines) and '        };' in lines[i+1] and i + 2 < len(lines) and '        projects: {' in lines[i+2]:
        output.append(lines[i+1])  # Add the closing }
        i += 1
        output.append(education_interface)
        i += 1
        continue
    
    # Add apprenticeship field in French experience
    if line.strip() == 'current: "En cours",' and 'experience' in ''.join(lines[max(0,i-10):i]):
        output.append(fr_apprenticeship)
        i += 1
        continue
        
    # Add Arvato in French experiences
    if line.strip() == 'experiences: {' and 'fr:' in ''.join(lines[max(0,i-50):i]):
        output.append(fr_arvato)
        i += 1
        continue
        
    # Add French education and certifications before projects
    if line.strip() == 'projects: {' and 'fr:' in ''.join(lines[max(0,i-100):i]) and 'education' not in ''.join(lines[max(0,i-50):i]):
        output.insert(len(output)-1, fr_education)
        i += 1
        continue
        
    # Add apprenticeship field in English experience
    if line.strip() == 'current: "Current",' and 'experience' in ''.join(lines[max(0,i-10):i]):
        output.append(en_apprenticeship)
        i += 1
        continue
        
    # Add Arvato in English experiences
    if line.strip() == 'experiences: {' and 'en:' in ''.join(lines[max(0,i-50):i]):
        output.append(en_arvato)
        i += 1
        continue
        
    # Add English education and certifications before projects
    if line.strip() == 'projects: {' and 'en:' in ''.join(lines[max(0,i-100):i]) and 'education' not in ''.join(lines[max(0,i-50):i]):
        output.insert(len(output)-1, en_education)
        i += 1
        continue
    
    i += 1

# Write the output
with open('src/translations/index.ts', 'w', encoding='utf-8') as f:
    f.writelines(output)

print("Education and certifications added successfully!")
