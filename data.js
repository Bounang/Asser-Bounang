// Données pour le portfolio

// Données de profil
const profileData = {
    nom: "BOUNANG ZADBE Asser",
    titre: "Informaticien & Développeur Web",
    email: "bounangasser9@gmail.com",
    telephone: "(+237) 6 55 83 33 65 / 6 52 83 40 33",
    adresse: "Douala, Cameroun",
    bio: "Développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes et réactives. Spécialisé dans les technologies JavaScript et .NET",
    photo: "img/profile.jpg",
    reseauxSociaux: [
        { nom: "LinkedIn", url: "https://linkedin.com/in/asser-bounang-zadbe-8a2a39131", icone: "linkedin" },
        { nom: "GitHub", url: "https://github.com/Bounang", icone: "github" },
        { nom: "Twitter", url: "https://x.com/AsserZadbe", icone: "twitter" },
    ]
};

// Données de compétences
const skillsData = [
    { categorie: "Frontend", competences: [
        { nom: "HTML/CSS", niveau: 95 },
        { nom: "JavaScript", niveau: 90 },
        { nom: "React", niveau: 85 },
        { nom: "Razor", niveau: 80 },
        { nom: "Syncfusion", niveau: 75 }
    ]},
    { categorie: "Backend", competences: [
        { nom: ".NET Core", niveau: 95 },
        { nom: "Python", niveau: 90 },
        { nom: "PHP", niveau: 85 },
        { nom: "Django", niveau: 80 },
        { nom: "MySQL", niveau: 80 },
        { nom: "SQL Server", niveau: 80 },
        { nom: "PostgrSQL", niveau: 70 },
        { nom: "Node.js", niveau: 70 },
        { nom: "Express", niveau: 70 }     
    ]},
    { categorie: "Design", competences: [
        { nom: "Figma", niveau: 50 },
        { nom: "UI/UX", niveau: 50 }
    ]}
];

// Données de parcours (timeline)
const timelineData = [
    {
        periode: "2023 - Présent",
        titre: "Master en Informatique de Gestion",
        entreprise: "Université de Douala",
        description: "Formation avancée en gestion des systèmes d'information, développement web et mobile, avec un accent sur les technologies émergentes et l'IA."
    },
    {
        periode: "2021 - 2022",
        titre: "Développeur Full Stack",
        entreprise: "Université de Douala",
        description: "Création d'applications web complètes, du backend au frontend, en utilisant C#, .NET et Xamarin.Forms."
    },
    {
        periode: "2019 - 2021",
        titre: "DUT en Informatique",
        entreprise: "Université de Douala",
        description: "Formation approfondie en développement web, bases de données et programmation orientée objet."
    },
    {
        periode: "2009 - 2018",
        titre: "Baccalaureat Technique",
        entreprise: "CEFTI de Douala",
        description: "Spécialisation en Electronique."
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
        lien: " ",
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
        lien: " ",
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
        lien: " ",
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
        lien: " ",
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
        lien: " ",
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
        lien: " ",
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
        photo: "img/testimonial1.jpg",
        texte: "Jean a complètement transformé notre présence en ligne. Son expertise en design et développement nous a permis de multiplier par trois notre taux de conversion.",
        note: 5
    },
    {
        nom: "Thomas Dubois",
        poste: "Fondateur, StartupInnovation",
        photo: "img/testimonial2.jpg",
        texte: "Travailler avec Jean a été une expérience exceptionnelle. Il a su comprendre nos besoins et livrer un produit qui dépasse nos attentes.",
        note: 5
    },
    {
        nom: "Marie Leroy",
        poste: "Directrice Artistique, CreativeStudio",
        photo: "img/testimonial3.jpg",
        texte: "La créativité et les compétences techniques de Jean sont impressionnantes. Il a créé pour nous un site web qui se démarque vraiment de la concurrence.",
        note: 4.5
    },
    {
        nom: "Pierre Moreau",
        poste: "CEO, E-commerce Solutions",
        photo: "img/testimonial4.jpg",
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
        auteur: "Bounang Zasdbe Asser"
    },
    {
        id: 2,
        titre: "Comment optimiser les performances de votre site web",
        extrait: "Guide complet pour améliorer la vitesse et les performances de votre site web.",
        image: "images/blog2.jpg",
        date: "28 avril 2025",
        categorie: "Développement",
        auteur: "Bounang Zasdbe Asser"
    },
    {
        id: 3,
        titre: "L'importance de l'UX dans la conversion",
        extrait: "Comment une bonne expérience utilisateur peut augmenter significativement vos taux de conversion.",
        image: "images/blog3.jpg",
        date: "10 avril 2025",
        categorie: "UX/UI",
        auteur: "Bounang Zasdbe Asser"
    },
    {
        id: 4,
        titre: "Introduction à React Hooks",
        extrait: "Tout ce que vous devez savoir pour commencer à utiliser les Hooks dans vos projets React.",
        image: "images/blog4.jpg",
        date: "2 avril 2025",
        categorie: "Développement",
        auteur: "Bounang Zasdbe Asser"
    },
    {
        id: 5,
        titre: "Les meilleures pratiques SEO en 2025",
        extrait: "Stratégies SEO actualisées pour améliorer le classement de votre site dans les moteurs de recherche.",
        image: "images/blog5.jpg",
        date: "20 mars 2025",
        categorie: "Marketing",
        auteur: "Bounang Zasdbe Asser"
    },
    {
        id: 6,
        titre: "Comment créer un design system efficace",
        extrait: "Guide étape par étape pour créer et maintenir un design system cohérent pour vos projets.",
        image: "images/blog6.jpg",
        date: "5 mars 2025",
        categorie: "Design",
        auteur: "Bounang Zasdbe Asser"
    }
];

// Données de contact
const contactData = {
    email: "bounangasser9@gmail.com",
    telephone: "(+237) 6 55 83 33 65 / 6 52 83 40 33",
    adresse: "Yassa - Bwang Bakoko, Douala, Cameroun",
    horaires: "Lundi - Vendredi: 9h - 18h",
    coordonnees: {
        lat: 3.98091,
        lng: 9.82179
    },
    reseauxSociaux: [
        { nom: "LinkedIn", url: "https://linkedin.com/in/asser-bounang-zadbe-8a2a39131", icone: "linkedin" },
        { nom: "GitHub", url: "https://github.com/Bounang", icone: "github" },
        { nom: "Twitter", url: "https://x.com/AsserZadbe", icone: "twitter" },
        { nom: "Instagram", url: "https://instagram.com/asser-bounang", icone: "instagram" }
    ]
};
