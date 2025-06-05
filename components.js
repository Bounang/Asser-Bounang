// Initialisation détaillée des composants Syncfusion


// Navbar
function initNavbar() {
    const navbarObj = new ej.navigations.AppBar({
        colorMode: 'Primary',
        isSticky: true
    });
    navbarObj.appendTo('#navbar-container');
    
    // Ajouter le titre
    const navbarTitle = document.createElement('span');
    navbarTitle.className = 'navbar-title';
    navbarTitle.textContent = profileData.nom;
    document.querySelector('.e-appbar').appendChild(navbarTitle);
    
    // Ajouter le bouton de menu pour mobile
    const menuButton = document.createElement('button');
    menuButton.id = 'menu-button';
    menuButton.className = 'e-btn e-flat e-icon-btn';
    menuButton.innerHTML = '<span class="e-btn-icon e-icons e-menu"></span>';
    document.querySelector('.e-appbar').appendChild(menuButton);
    
    // Événement pour ouvrir/fermer le sidebar
    menuButton.addEventListener('click', function() {
        const sidebarObj = document.querySelector('#sidebar').ej2_instances[0];
        if (sidebarObj) {
            sidebarObj.toggle();
        }
    });
}

// Sidebar
function initSidebar() {
    const menuItems = [
        { id: 'accueil', text: 'Accueil', iconCss: 'e-icons e-home', dataSection: 'accueil' },
        { id: 'a-propos', text: 'À propos', iconCss: 'e-icons e-user', dataSection: 'a-propos' },
        { id: 'projets', text: 'Projets', iconCss: 'e-icons e-folder', dataSection: 'projets' },
        { id: 'services', text: 'Services', iconCss: 'e-icons e-service', dataSection: 'services' },
        { id: 'temoignages', text: 'Témoignages', iconCss: 'e-icons e-comment', dataSection: 'temoignages' },
        { id: 'blog', text: 'Blog', iconCss: 'e-icons e-blog', dataSection: 'blog' },
        { id: 'contact', text: 'Contact', iconCss: 'e-icons e-mail', dataSection: 'contact' }
    ];
    
    const sidebarObj = new ej.navigations.Sidebar({
        width: '250px',
        type: 'Push',
        target: '.content-wrapper',
        mediaQuery: '(max-width: 768px)',
        isOpen: window.innerWidth > 768
    });
    sidebarObj.appendTo('#sidebar');
    
    // Créer le menu
    const menuObj = new ej.navigations.Menu({
        items: menuItems,
        orientation: 'Vertical',
        cssClass: 'sidebar-menu',
        select: function(args) {
            const sectionId = args.item.id;
            activateSection(sectionId);
        }
    });
    menuObj.appendTo('#sidebar');
    
    // Ajouter les attributs data-section
    document.querySelectorAll('.sidebar-menu .e-menu-item').forEach((item, index) => {
        item.setAttribute('data-section', menuItems[index].dataSection);
    });
}

// Typewriter
function initTypewriter() {
    const typewriterTexts = [
        "Je suis " + profileData.nom,
        "Je suis " + profileData.titre,
        "Je crée des sites web modernes",
        "Je conçois des expériences utilisateur"
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = typewriterTexts[currentTextIndex];
        
        if (isDeleting) {
            document.getElementById('typewriter').textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            document.getElementById('typewriter').textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause avant de commencer à effacer
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
            typingSpeed = 500; // Pause avant de commencer à taper le nouveau texte
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Social Icons
function initSocialIcons() {
    const socialIconsContainer = document.getElementById('social-icons');
    
    profileData.reseauxSociaux.forEach(reseau => {
        const button = document.createElement('button');
        button.className = 'e-btn e-round e-icon-btn e-small';
        button.innerHTML = `<span class="e-btn-icon e-icons e-${reseau.icone}"></span>`;
        button.title = reseau.nom;
        button.addEventListener('click', function() {
            window.open(reseau.url, '_blank');
        });
        socialIconsContainer.appendChild(button);
    });
}

// Buttons
function initButtons() {
    // Bouton Contact
    const contactBtn = new ej.buttons.Button({
        cssClass: 'e-success',
        iconCss: 'e-icons e-mail'
    });
    contactBtn.appendTo('#contact-btn');
    
    document.getElementById('contact-btn').addEventListener('click', function() {
        activateSection('contact');
    });
    
    // Bouton Portfolio
    const portfolioBtn = new ej.buttons.Button({
        cssClass: 'e-info',
        iconCss: 'e-icons e-folder'
    });
    portfolioBtn.appendTo('#portfolio-btn');
    
    document.getElementById('portfolio-btn').addEventListener('click', function() {
        activateSection('projets');
    });
}

// Profile Card
function initProfileCard() {
    const cardObj = new ej.cards.Card({
        cssClass: 'profile-card',
        header: profileData.nom,
        content: `
            <div class="profile-image">
                <img src="${profileData.photo}" alt="${profileData.nom}">
            </div>
            <div class="profile-info">
                <p class="profile-title">${profileData.titre}</p>
                <p class="profile-location"><span class="e-icons e-location"></span> ${profileData.adresse}</p>
                <p class="profile-email"><span class="e-icons e-mail"></span> ${profileData.email}</p>
                <p class="profile-phone"><span class="e-icons e-phone"></span> ${profileData.telephone}</p>
            </div>
        `
    });
    cardObj.appendTo('#profile-card');
}

// About Tabs
function initAboutTabs() {
    const tabObj = new ej.navigations.Tab({
        heightAdjustMode: 'Auto',
        items: [
            {
                header: { text: 'Biographie' },
                content: `<div class="tab-content"><p>${profileData.bio}</p></div>`
            },
            {
                header: { text: 'Éducation' },
                content: `<div class="tab-content">
                    <ul>
                        <li>
                            <h4>Master en Développement Web</h4>
                            <p>Université de Paris, 2015-2017</p>
                        </li>
                        <li>
                            <h4>Licence en Informatique</h4>
                            <p>Université de Lyon, 2012-2015</p>
                        </li>
                    </ul>
                </div>`
            },
            {
                header: { text: 'Intérêts' },
                content: `<div class="tab-content">
                    <p>En dehors du développement web, je m'intéresse à :</p>
                    <ul>
                        <li>Photographie</li>
                        <li>Voyages</li>
                        <li>Nouvelles technologies</li>
                        <li>Design d'intérieur</li>
                    </ul>
                </div>`
            }
        ]
    });
    tabObj.appendTo('#about-tabs');
}

// Skills Chart
function initSkillsChart() {
    // Préparer les données pour le graphique
    const chartData = [];
    
    skillsData.forEach(categorie => {
        categorie.competences.forEach(competence => {
            chartData.push({
                x: competence.nom,
                y: competence.niveau,
                categorie: categorie.categorie
            });
        });
    });
    
    // Créer le graphique
    const chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category',
            title: 'Compétences',
            labelIntersectAction: 'Rotate45'
        },
        primaryYAxis: {
            minimum: 0,
            maximum: 100,
            interval: 20,
            title: 'Niveau de maîtrise (%)'
        },
        series: [
            {
                type: 'Column',
                dataSource: chartData,
                xName: 'x',
                yName: 'y',
                name: 'Compétences',
                cornerRadius: {
                    topLeft: 10,
                    topRight: 10
                },
                marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600',
                            color: '#ffffff'
                        }
                    }
                }
            }
        ],
        title: 'Mes compétences techniques',
        tooltip: { enable: true },
        legendSettings: { visible: false },
        palettes: ['#4472c4', '#ed7d31', '#a5a5a5', '#ffc000', '#5b9bd5', '#70ad47']
    });
    chart.appendTo('#skills-chart');
}

// Timeline
function initTimeline() {
    // Créer le conteneur de timeline
    const timelineContainer = document.getElementById('timeline');
    
    // Créer l'élément timeline
    const timelineObj = new ej.layouts.Timeline({
        items: timelineData.map(item => ({
            dotCss: 'e-icons e-dot',
            content: `
                <div class="timeline-item">
                    <div class="timeline-date">${item.periode}</div>
                    <div class="timeline-content">
                        <h4>${item.titre}</h4>
                        <h5>${item.entreprise}</h5>
                        <p>${item.description}</p>
                    </div>
                </div>
            `
        })),
        orientation: 'Vertical'
    });
    timelineObj.appendTo(timelineContainer);
}

// Projects Filter
function initProjectsFilter() {
    // Extraire les catégories uniques
    const categories = [...new Set(projectsData.map(project => project.categorie))];
    
    // Créer les éléments de filtre
    const filterContainer = document.getElementById('projects-filter');
    
    // Ajouter le bouton "Tous"
    const allButton = document.createElement('button');
    allButton.className = 'e-btn e-flat filter-btn active';
    allButton.textContent = 'Tous';
    allButton.setAttribute('data-filter', 'all');
    filterContainer.appendChild(allButton);
    
    // Ajouter les boutons de catégorie
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'e-btn e-flat filter-btn';
        button.textContent = category;
        button.setAttribute('data-filter', category);
        filterContainer.appendChild(button);
    });
    
    // Ajouter les événements de filtre
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Mettre à jour les classes actives
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filtrer les projets
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

// Fonction pour filtrer les projets
function filterProjects(filter) {
    const gridObj = document.querySelector('#projects-grid').ej2_instances[0];
    
    if (filter === 'all') {
        gridObj.dataSource = projectsData;
    } else {
        gridObj.dataSource = projectsData.filter(project => project.categorie === filter);
    }
    
    gridObj.refresh();
}

// Projects Grid
function initProjectsGrid() {
    const gridObj = new ej.layouts.Card({
        cssClass: 'projects-card',
        cardSettings: {
            cardWidth: '300px'
        }
    });
    gridObj.appendTo('#projects-grid');
    
    // Créer les cartes de projet
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'e-card project-card';
        card.innerHTML = `
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">${project.titre}</div>
                    <div class="e-card-sub-title">${project.categorie}</div>
                </div>
            </div>
            <div class="e-card-content">
                <img src="${project.image}" alt="${project.titre}" class="project-image">
                <p class="project-description">${project.description.substring(0, 100)}...</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="e-card-actions">
                <button class="e-btn e-outline-primary view-project" data-id="${project.id}">Voir détails</button>
                <a href="${project.lien}" target="_blank" class="e-btn e-primary">Visiter</a>
            </div>
        `;
        document.getElementById('projects-grid').appendChild(card);
    });
    
    // Ajouter les événements pour ouvrir la boîte de dialogue
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            openProjectDialog(projectId);
        });
    });
}

// Project Dialog
function initProjectDialog() {
    const dialogObj = new ej.popups.Dialog({
        header: 'Détails du projet',
        showCloseIcon: true,
        width: '600px',
        height: 'auto',
        isModal: true,
        visible: false,
        animationSettings: { effect: 'Zoom' }
    });
    dialogObj.appendTo('#project-dialog');
}

// Fonction pour ouvrir la boîte de dialogue du projet
function openProjectDialog(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    
    if (project) {
        const dialogObj = document.querySelector('#project-dialog').ej2_instances[0];
        
        // Mettre à jour le contenu
        dialogObj.header = project.titre;
        dialogObj.content = `
            <div class="project-dialog-content">
                <img src="${project.image}" alt="${project.titre}" class="project-dialog-image">
                <div class="project-dialog-info">
                    <p class="project-dialog-category"><strong>Catégorie:</strong> ${project.categorie}</p>
                    <p class="project-dialog-client"><strong>Client:</strong> ${project.client}</p>
                    <p class="project-dialog-date"><strong>Date:</strong> ${project.date}</p>
                    <div class="project-dialog-technologies">
                        <strong>Technologies:</strong>
                        <div class="tech-badges">
                            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <p class="project-dialog-description">${project.description}</p>
                    <a href="${project.lien}" target="_blank" class="e-btn e-primary">Visiter le projet</a>
                </div>
            </div>
        `;
        
        // Afficher la boîte de dialogue
        dialogObj.show();
    }
}

// Services Carousel
function initServicesCarousel() {
    const carouselObj = new ej.navigations.Carousel({
        items: servicesData.map(service => ({
            template: `
                <div class="service-card">
                    <div class="service-icon">
                        <span class="e-icons e-${service.icone}"></span>
                    </div>
                    <h3 class="service-title">${service.titre}</h3>
                    <p class="service-description">${service.description}</p>
                    <ul class="service-features">
                        ${service.caracteristiques.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `
        })),
        autoPlay: true,
        interval: 5000,
        showPlayButton: false,
        buttonsVisibility: 'Visible',
        cssClass: 'services-carousel'
    });
    carouselObj.appendTo('#services-carousel');
}

// Pricing Cards
function initPricingCards() {
    const pricingContainer = document.getElementById('pricing-cards');
    
    pricingData.forEach(pricing => {
        const card = document.createElement('div');
        card.className = `pricing-card ${pricing.populaire ? 'popular' : ''}`;
        
        card.innerHTML = `
            <div class="pricing-header">
                ${pricing.populaire ? '<div class="popular-badge">Populaire</div>' : ''}
                <h3 class="pricing-title">${pricing.titre}</h3>
                <div class="pricing-price">${pricing.prix}</div>
                <p class="pricing-description">${pricing.description}</p>
            </div>
            <div class="pricing-features">
                <ul>
                    ${pricing.caracteristiques.map(feature => `<li><span class="e-icons e-check"></span> ${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="pricing-action">
                <button class="e-btn ${pricing.populaire ? 'e-success' : 'e-primary'}">Choisir ce plan</button>
            </div>
        `;
        
        pricingContainer.appendChild(card);
    });
}

// Testimonials Carousel
function initTestimonialsCarousel() {
    const carouselObj = new ej.navigations.Carousel({
        items: testimonialsData.map(testimonial => ({
            template: `
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <div class="testimonial-quote">
                            <span class="e-icons e-quote"></span>
                        </div>
                        <p class="testimonial-text">${testimonial.texte}</p>
                        <div class="testimonial-rating">
                            ${generateRatingStars(testimonial.note)}
                        </div>
                    </div>
                    <div class="testimonial-author">
                        <img src="${testimonial.photo}" alt="${testimonial.nom}" class="testimonial-photo">
                        <div class="testimonial-info">
                            <h4 class="testimonial-name">${testimonial.nom}</h4>
                            <p class="testimonial-position">${testimonial.poste}</p>
                        </div>
                    </div>
                </div>
            `
        })),
        autoPlay: true,
        interval: 5000,
        showPlayButton: false,
        buttonsVisibility: 'Visible',
        cssClass: 'testimonials-carousel'
    });
    carouselObj.appendTo('#testimonials-carousel');
}

// Fonction pour générer les étoiles de notation
function generateRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="e-icons e-star-full"></span>';
    }
    
    if (hasHalfStar) {
        stars += '<span class="e-icons e-star-half"></span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="e-icons e-star-empty"></span>';
    }
    
    return stars;
}

// Blog Grid
function initBlogGrid() {
    const gridObj = new ej.layouts.Card({
        cssClass: 'blog-card',
        cardSettings: {
            cardWidth: '350px'
        }
    });
    gridObj.appendTo('#blog-grid');
    
    // Créer les cartes de blog
    blogData.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'e-card blog-card';
        card.innerHTML = `
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">${blog.titre}</div>
                </div>
            </div>
            <div class="e-card-content">
                <img src="${blog.image}" alt="${blog.titre}" class="blog-image">
                <div class="blog-meta">
                    <span class="blog-date"><span class="e-icons e-calendar"></span> ${blog.date}</span>
                    <span class="blog-category"><span class="e-icons e-tag"></span> ${blog.categorie}</span>
                </div>
                <p class="blog-excerpt">${blog.extrait}</p>
            </div>
            <div class="e-card-actions">
                <button class="e-btn e-outline-primary">Lire l'article</button>
            </div>
        `;
        document.getElementById('blog-grid').appendChild(card);
    });
}

// Blog Pagination
function initBlogPagination() {
    const pagerObj = new ej.navigations.Pager({
        pageSize: 3,
        pageCount: 2,
        totalRecordsCount: blogData.length,
        click: function(args) {
            // Logique de pagination
            const startIndex = (args.currentPage - 1) * 3;
            const endIndex = Math.min(startIndex + 3, blogData.length);
            updateBlogGrid(startIndex, endIndex);
        }
    });
    pagerObj.appendTo('#blog-pagination');
}

// Fonction pour mettre à jour la grille de blog
function updateBlogGrid(startIndex, endIndex) {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = '';
    
    const visibleBlogs = blogData.slice(startIndex, endIndex);
    
    visibleBlogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'e-card blog-card';
        card.innerHTML = `
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">${blog.titre}</div>
                </div>
            </div>
            <div class="e-card-content">
                <img src="${blog.image}" alt="${blog.titre}" class="blog-image">
                <div class="blog-meta">
                    <span class="blog-date"><span class="e-icons e-calendar"></span> ${blog.date}</span>
                    <span class="blog-category"><span class="e-icons e-tag"></span> ${blog.categorie}</span>
                </div>
                <p class="blog-excerpt">${blog.extrait}</p>
            </div>
            <div class="e-card-actions">
                <button class="e-btn e-outline-primary">Lire l'article</button>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

// Contact Card
function initContactCard() {
    const cardObj = new ej.cards.Card({
        cssClass: 'contact-info-card',
        header: 'Informations de contact',
        content: `
            <div class="contact-info-content">
                <div class="contact-info-item">
                    <span class="e-icons e-mail"></span>
                    <div class="contact-info-text">
                        <h4>Email</h4>
                        <p>${contactData.email}</p>
                    </div>
                </div>
                <div class="contact-info-item">
                    <span class="e-icons e-phone"></span>
                    <div class="contact-info-text">
                        <h4>Téléphone</h4>
                        <p>${contactData.telephone}</p>
                    </div>
                </div>
                <div class="contact-info-item">
                    <span class="e-icons e-location"></span>
                    <div class="contact-info-text">
                        <h4>Adresse</h4>
                        <p>${contactData.adresse}</p>
                    </div>
                </div>
                <div class="contact-info-item">
                    <span class="e-icons e-time"></span>
                    <div class="contact-info-text">
                        <h4>Horaires</h4>
                        <p>${contactData.horaires}</p>
                    </div>
                </div>
            </div>
            <div class="contact-social">
                <h4>Réseaux sociaux</h4>
                <div class="contact-social-icons">
                    ${contactData.reseauxSociaux.map(reseau => 
                        `<button class="e-btn e-round e-icon-btn e-small" title="${reseau.nom}">
                            <span class="e-btn-icon e-icons e-${reseau.icone}"></span>
                        </button>`
                    ).join('')}
                </div>
            </div>
        `
    });
    cardObj.appendTo('#contact-card');
}

// Map Container
function initMapContainer() {
    const mapObj = new ej.maps.Maps({
        layers: [
            {
                shapeData: new ej.maps.MapAjax('https://cdn.syncfusion.com/maps/map-data/world-map.json'),
                markerSettings: [
                    {
                        visible: true,
                        dataSource: [
                            {
                                latitude: contactData.coordonnees.lat,
                                longitude: contactData.coordonnees.lng,
                                name: 'Mon bureau'
                            }
                        ],
                        shape: 'Balloon',
                        height: 20,
                        width: 20,
                        fill: '#e91e63',
                        border: { width: 2, color: '#ffffff' }
                    }
                ]
            }
        ],
        zoomSettings: {
            enable: true,
            zoomFactor: 5
        },
        centerPosition: {
            latitude: contactData.coordonnees.lat,
            longitude: contactData.coordonnees.lng
        }
    });
    mapObj.appendTo('#map-container');
}

// Contact Form
function initContactForm() {
    // Créer le formulaire
    const formContainer = document.getElementById('contact-form-container');
    formContainer.innerHTML = `
        <form id="contact-form" class="contact-form">
            <div class="form-group">
                <div class="e-float-input">
                    <input type="text" id="name" required>
                    <span class="e-float-line"></span>
                    <label for="name">Nom</label>
                </div>
            </div>
            <div class="form-group">
                <div class="e-float-input">
                    <input type="email" id="email" required>
                    <span class="e-float-line"></span>
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="form-group">
                <div class="e-float-input">
                    <input type="text" id="subject" required>
                    <span class="e-float-line"></span>
                    <label for="subject">Sujet</label>
                </div>
            </div>
            <div class="form-group">
                <div class="e-float-input">
                    <textarea id="message" rows="5" required></textarea>
                    <span class="e-float-line"></span>
                    <label for="message">Message</label>
                </div>
            </div>
            <div class="form-group">
                <button id="submit-btn" type="submit" class="e-btn e-success">Envoyer</button>
            </div>
        </form>
    `;
    
    // Initialiser les champs flottants
    const inputElements = document.querySelectorAll('.e-float-input input, .e-float-input textarea');
    inputElements.forEach(element => {
        new ej.inputs.TextBox({
            floatLabelType: 'Auto'
        }).appendTo(element);
    });
    
    // Initialiser le bouton d'envoi
    const submitBtn = new ej.buttons.Button({
        isPrimary: true,
        iconCss: 'e-icons e-send'
    });
    submitBtn.appendTo('#submit-btn');
    
    // Ajouter l'événement d'envoi
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simuler l'envoi du formulaire
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        
        setTimeout(function() {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer';
            
            // Réinitialiser le formulaire
            document.getElementById('contact-form').reset();
            
            // Afficher une notification
            showNotification('Votre message a été envoyé avec succès !', 'success');
        }, 2000);
    });
}

// Footer Grid
function initFooterGrid() {
    const footerGrid = document.getElementById('footer-grid');
    footerGrid.innerHTML = `
        <div class="footer-column">
            <h3>À propos</h3>
            <p>Je suis un développeur web passionné, spécialisé dans la création d'expériences web modernes et interactives.</p>
        </div>
        <div class="footer-column">
            <h3>Liens rapides</h3>
            <ul>
                <li><a href="#accueil" data-section="accueil">Accueil</a></li>
                <li><a href="#a-propos" data-section="a-propos">À propos</a></li>
                <li><a href="#projets" data-section="projets">Projets</a></li>
                <li><a href="#contact" data-section="contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Contact</h3>
            <p><span class="e-icons e-mail"></span> ${contactData.email}</p>
            <p><span class="e-icons e-phone"></span> ${contactData.telephone}</p>
            <p><span class="e-icons e-location"></span> ${contactData.adresse}</p>
        </div>
        <div class="footer-column">
            <h3>Newsletter</h3>
            <div class="newsletter-form">
                <div class="e-input-group">
                    <input type="email" class="e-input" placeholder="Votre email">
                    <button class="e-btn e-primary e-input-group-icon">S'abonner</button>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter les événements de navigation
    document.querySelectorAll('#footer-grid a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            activateSection(sectionId);
        });
    });
}

// Theme Switcher
function initThemeSwitcher() {
    const switcherContainer = document.getElementById('theme-switcher');
    
    const switchObj = new ej.buttons.Switch({
        checked: document.body.classList.contains('dark-theme'),
        change: function(args) {
            toggleTheme();
        }
    });
    switchObj.appendTo(switcherContainer);
    
    // Ajouter le label
    const label = document.createElement('span');
    label.className = 'theme-label';
    label.textContent = 'Mode sombre';
    switcherContainer.appendChild(label);
    
    // Positionner le switcher
    switcherContainer.style.position = 'fixed';
    switcherContainer.style.bottom = '20px';
    switcherContainer.style.left = '20px';
    switcherContainer.style.zIndex = '1000';
    switcherContainer.style.display = 'flex';
    switcherContainer.style.alignItems = 'center';
    switcherContainer.style.gap = '10px';
    switcherContainer.style.padding = '10px';
    switcherContainer.style.borderRadius = '30px';
    switcherContainer.style.background = 'rgba(0, 0, 0, 0.1)';
}

// Scroll To Top
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top-btn';
    scrollBtn.className = 'e-btn e-round e-icon-btn';
    scrollBtn.innerHTML = '<span class="e-btn-icon e-icons e-arrow-up"></span>';
    scrollBtn.title = 'Retour en haut';
    document.getElementById('scroll-to-top').appendChild(scrollBtn);
    
    // Initialiser le bouton
    const btnObj = new ej.buttons.Button({
        cssClass: 'e-success'
    });
    btnObj.appendTo('#scroll-to-top-btn');
    
    // Ajouter l'événement de défilement
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            document.getElementById('scroll-to-top').style.display = 'block';
        } else {
            document.getElementById('scroll-to-top').style.display = 'none';
        }
    });
    
    // Ajouter l'événement de clic
    document.getElementById('scroll-to-top-btn').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Positionner le bouton
    document.getElementById('scroll-to-top').style.position = 'fixed';
    document.getElementById('scroll-to-top').style.bottom = '20px';
    document.getElementById('scroll-to-top').style.right = '20px';
    document.getElementById('scroll-to-top').style.zIndex = '1000';
    document.getElementById('scroll-to-top').style.display = 'none';
}

// Loading Indicator
function initLoadingIndicator() {
    const loadingContainer = document.getElementById('loading-indicator');
    
    const spinnerObj = new ej.popups.Spinner({
        type: 'Material',
        cssClass: 'e-spin-overlay'
    });
    spinnerObj.appendTo(loadingContainer);
    
    // Afficher le spinner au chargement
    spinnerObj.show();
    
    // Masquer le spinner après le chargement complet
    window.addEventListener('load', function() {
        setTimeout(function() {
            spinnerObj.hide();
        }, 1000);
    });
}
