import re

# Read the original file
with open('src/translations/index.ts.bak', 'r', encoding='utf-8') as f:
    content = f.read()

# Update French hero description
content = content.replace(
    'description: "Étudiant en Bachelor Informatique en recherche d\'alternance en cybersécurité et infrastructure réseau."',
    'description: "Apprenti en Système de Management de la Sécurité de l\'Information chez Arvato. Étudiant en 3ème année à Guardia Cybersecurity School."'
)

# Update English hero description  
content = content.replace(
    'description: "Bachelor\'s student in Computer Science looking for an apprenticeship in cybersecurity and network infrastructure."',
    'description: "Information Security Management System Apprentice at Arvato. 3rd year student at Guardia Cybersecurity School."'
)

# Update French footer description
content = content.replace(
    'description: "Étudiant passionné par la cybersécurité et les réseaux. 20 ans en recherche d\'alternance pour 2025 - 2026."',
    'description: "Étudiant passionné par la cybersécurité et les réseaux. Actuellement en alternance chez Arvato en tant qu\'Apprenti SMSI."'
)

# Update English footer description
content = content.replace(
    'description: "Student passionate about cybersecurity and networks. 20 years old looking for an apprenticeship for 2025 - 2026."',
    'description: "Student passionate about cybersecurity and networks. Currently apprentice at Arvato as ISMS Apprentice."'
)

# Write the updated content
with open('src/translations/index.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translations updated successfully!")
