// Données pour le portfolio

// Données de profil
const profileData = {
    nom: "Jean Dupont",
    titre: "Développeur Web & Designer UI/UX",
    email: "contact@jeandupont.fr",
    telephone: "+33 6 12 34 56 78",
    adresse: "Paris, France",
    bio: "Développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes et réactives. Spécialisé dans les technologies JavaScript et le design UI/UX.",
    photo: "images/profile.jpg",
    reseauxSociaux: [
        { nom: "LinkedIn", url: "https://linkedin.com/in/jeandupont", icone: "linkedin" },
        { nom: "GitHub", url: "https://github.com/jeandupont", icone: "github" },
        { nom: "Twitter", url: "https://twitter.com/jeandupont", icone: "twitter" },
        { nom: "Dribbble", url: "https://dribbble.com/jeandupont", icone: "dribbble" }
    ]
};

// Données de compétences
const skillsData = [
    { categorie: "Frontend", competences: [
        { nom: "HTML/CSS", niveau: 95 },
        { nom: "JavaScript", niveau: 90 },
        { nom: "React", niveau: 85 },
        { nom: "Vue.js", niveau: 80 },
        { nom: "Angular", niveau: 75 }
    ]},
    { categorie: "Backend", competences: [
        { nom: "Node.js", niveau: 85 },
        { nom: "Express", niveau: 80 },
        { nom: "PHP", niveau: 70 },
        { nom: "Python", niveau: 65 },
        { nom: "MongoDB", niveau: 75 }
    ]},
    { categorie: "Design", competences: [
        { nom: "Figma", niveau: 90 },
        { nom: "Adobe XD", niveau: 85 },
        { nom: "Photoshop", niveau: 80 },
        { nom: "Illustrator", niveau: 75 },
        { nom: "UI/UX", niveau: 90 }
    ]}
];

// Données de parcours (timeline)
const timelineData = [
    {
        periode: "2022 - Présent",
        titre: "Développeur Frontend Senior",
        entreprise: "Tech Innovations",
        description: "Développement d'applications web complexes avec React et Vue.js. Mise en place d'architectures frontend robustes et évolutives."
    },
    {
        periode: "2019 - 2022",
        titre: "Développeur Full Stack",
        entreprise: "Digital Solutions",
        description: "Création d'applications web complètes, du backend au frontend, en utilisant Node.js, Express et React."
    },
    {
        periode: "2017 - 2019",
        titre: "Designer UI/UX & Développeur Frontend",
        entreprise: "Creative Agency",
        description: "Conception d'interfaces utilisateur et développement frontend pour divers clients dans les secteurs du e-commerce et des médias."
    },
    {
        periode: "2015 - 2017",
        titre: "Master en Développement Web",
        entreprise: "Université de Paris",
        description: "Spécialisation en technologies web modernes et design d'interface utilisateur."
    }
];

// Données de projets
const projectsData = [
    {
        id: 1,
        titre: "E-commerce Premium",
        categorie: "Web Development",
        image: "images/project1.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        description: "Plateforme e-commerce complète avec paiement en ligne, gestion des stocks et interface d'administration.",
        lien: "https://example.com/project1",
        client: "Fashion Retail",
        date: "2023"
    },
    {
        id: 2,
        titre: "Application de Gestion",
        categorie: "Web Application",
        image: "images/project2.jpg",
        technologies: ["Vue.js", "Express", "PostgreSQL"],
        description: "Système de gestion interne pour entreprise, incluant gestion des ressources humaines, projets et finances.",
        lien: "https://example.com/project2",
        client: "Corporate Services",
        date: "2022"
    },
    {
        id: 3,
        titre: "Portfolio Artistique",
        categorie: "UI/UX Design",
        image: "images/project3.jpg",
        technologies: ["HTML/CSS", "JavaScript", "Figma"],
        description: "Portfolio interactif pour artiste avec galerie dynamique et animations personnalisées.",
        lien: "https://example.com/project3",
        client: "Artiste Indépendant",
        date: "2022"
    },
    {
        id: 4,
        titre: "Plateforme Éducative",
        categorie: "Web Application",
        image: "images/project4.jpg",
        technologies: ["React", "Firebase", "Node.js"],
        description: "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi de progression.",
        lien: "https://example.com/project4",
        client: "Institut Éducatif",
        date: "2021"
    },
    {
        id: 5,
        titre: "Application Mobile Fitness",
        categorie: "Mobile App",
        image: "images/project5.jpg",
        technologies: ["React Native", "Firebase", "Redux"],
        description: "Application de suivi fitness avec plans d'entraînement personnalisés et suivi des progrès.",
        lien: "https://example.com/project5",
        client: "Fitness Center",
        date: "2021"
    },
    {
        id: 6,
        titre: "Dashboard Analytics",
        categorie: "Data Visualization",
        image: "images/project6.jpg",
        technologies: ["D3.js", "React", "Node.js"],
        description: "Tableau de bord analytique avec visualisations de données complexes et rapports personnalisables.",
        lien: "https://example.com/project6",
        client: "Data Analytics Corp",
        date: "2020"
    }
];

// Données de services
const servicesData = [
    {
        titre: "Développement Web",
        description: "Création de sites web et applications web sur mesure, responsive et optimisés pour les moteurs de recherche.",
        icone: "code",
        caracteristiques: [
            "Sites web responsive",
            "Applications web progressives",
            "Optimisation des performances",
            "SEO intégré"
        ]
    },
    {
        titre: "Design UI/UX",
        description: "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur engageantes pour web et mobile.",
        icone: "design",
        caracteristiques: [
            "Wireframing & Prototypage",
            "Design d'interface utilisateur",
            "Tests d'utilisabilité",
            "Design System"
        ]
    },
    {
        titre: "Développement Frontend",
        description: "Implémentation de designs avec les dernières technologies frontend pour des interfaces dynamiques et interactives.",
        icone: "frontend",
        caracteristiques: [
            "HTML5/CSS3 avancé",
            "JavaScript moderne",
            "Frameworks React/Vue/Angular",
            "Animations et transitions"
        ]
    },
    {
        titre: "Développement Backend",
        description: "Création d'APIs robustes et de systèmes backend évolutifs pour alimenter vos applications.",
        icone: "backend",
        caracteristiques: [
            "APIs RESTful",
            "Bases de données SQL/NoSQL",
            "Authentification & Sécurité",
            "Architecture microservices"
        ]
    }
];

// Données de tarification
const pricingData = [
    {
        titre: "Basique",
        prix: "1 500 €",
        description: "Pour les petites entreprises et startups",
        caracteristiques: [
            "Site web 5 pages",
            "Design responsive",
            "Formulaire de contact",
            "Optimisation SEO de base",
            "1 révision"
        ],
        populaire: false
    },
    {
        titre: "Standard",
        prix: "3 500 €",
        description: "Pour les entreprises en croissance",
        caracteristiques: [
            "Site web jusqu'à 10 pages",
            "Design responsive premium",
            "Intégration CMS",
            "Optimisation SEO avancée",
            "3 révisions",
            "Support 30 jours"
        ],
        populaire: true
    },
    {
        titre: "Premium",
        prix: "7 500 €",
        description: "Pour les entreprises établies",
        caracteristiques: [
            "Site web illimité",
            "Design sur mesure",
            "Fonctionnalités e-commerce",
            "Optimisation SEO complète",
            "Révisions illimitées",
            "Support 90 jours",
            "Formation utilisateur"
        ],
        populaire: false
    }
];

// Données de témoignages
const testimonialsData = [
    {
        nom: "Sophie Martin",
        poste: "Directrice Marketing, TechCorp",
        photo: "images/testimonial1.jpg",
        texte: "Jean a complètement transformé notre présence en ligne. Son expertise en design et développement nous a permis de multiplier par trois notre taux de conversion.",
        note: 5
    },
    {
        nom: "Thomas Dubois",
        poste: "Fondateur, StartupInnovation",
        photo: "images/testimonial2.jpg",
        texte: "Travailler avec Jean a été une expérience exceptionnelle. Il a su comprendre nos besoins et livrer un produit qui dépasse nos attentes.",
        note: 5
    },
    {
        nom: "Marie Leroy",
        poste: "Directrice Artistique, CreativeStudio",
        photo: "images/testimonial3.jpg",
        texte: "La créativité et les compétences techniques de Jean sont impressionnantes. Il a créé pour nous un site web qui se démarque vraiment de la concurrence.",
        note: 4.5
    },
    {
        nom: "Pierre Moreau",
        poste: "CEO, E-commerce Solutions",
        photo: "images/testimonial4.jpg",
        texte: "Notre plateforme e-commerce développée par Jean a considérablement amélioré l'expérience utilisateur et augmenté nos ventes de 45% en six mois.",
        note: 5
    }
];

// Données de blog
const blogData = [
    {
        id: 1,
        titre: "Les tendances du design web en 2025",
        extrait: "Découvrez les dernières tendances en matière de design web qui domineront l'année 2025.",
        image: "images/blog1.jpg",
        date: "15 mai 2025",
        categorie: "Design",
        auteur: "Jean Dupont"
    },
    {
        id: 2,
        titre: "Comment optimiser les performances de votre site web",
        extrait: "Guide complet pour améliorer la vitesse et les performances de votre site web.",
        image: "images/blog2.jpg",
        date: "28 avril 2025",
        categorie: "Développement",
        auteur: "Jean Dupont"
    },
    {
        id: 3,
        titre: "L'importance de l'UX dans la conversion",
        extrait: "Comment une bonne expérience utilisateur peut augmenter significativement vos taux de conversion.",
        image: "images/blog3.jpg",
        date: "10 avril 2025",
        categorie: "UX/UI",
        auteur: "Jean Dupont"
    },
    {
        id: 4,
        titre: "Introduction à React Hooks",
        extrait: "Tout ce que vous devez savoir pour commencer à utiliser les Hooks dans vos projets React.",
        image: "images/blog4.jpg",
        date: "2 avril 2025",
        categorie: "Développement",
        auteur: "Jean Dupont"
    },
    {
        id: 5,
        titre: "Les meilleures pratiques SEO en 2025",
        extrait: "Stratégies SEO actualisées pour améliorer le classement de votre site dans les moteurs de recherche.",
        image: "images/blog5.jpg",
        date: "20 mars 2025",
        categorie: "Marketing",
        auteur: "Jean Dupont"
    },
    {
        id: 6,
        titre: "Comment créer un design system efficace",
        extrait: "Guide étape par étape pour créer et maintenir un design system cohérent pour vos projets.",
        image: "images/blog6.jpg",
        date: "5 mars 2025",
        categorie: "Design",
        auteur: "Jean Dupont"
    }
];

// Données de contact
const contactData = {
    email: "contact@jeandupont.fr",
    telephone: "+33 6 12 34 56 78",
    adresse: "123 Avenue des Champs-Élysées, 75008 Paris, France",
    horaires: "Lundi - Vendredi: 9h - 18h",
    coordonnees: {
        lat: 48.8566,
        lng: 2.3522
    },
    reseauxSociaux: [
        { nom: "LinkedIn", url: "https://linkedin.com/in/jeandupont", icone: "linkedin" },
        { nom: "GitHub", url: "https://github.com/jeandupont", icone: "github" },
        { nom: "Twitter", url: "https://twitter.com/jeandupont", icone: "twitter" },
        { nom: "Instagram", url: "https://instagram.com/jeandupont", icone: "instagram" }
    ]
};
