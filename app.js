// Pour la version CDN que nous utilisons actuellement, utilisez cette syntaxe :
ej.base.registerLicense('YOUR_LICENSE_KEY');

// Initialisation des composants Syncfusion pour le portfolio
import '@syncfusion/ej2-base/styles/material.css';

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser tous les composants
    initNavbar();
    initSidebar();
    initTypewriter();
    initSocialIcons();
    initButtons();
    initProfileCard();
    initAboutTabs();
    initSkillsChart();
    initTimeline();
    initProjectsFilter();
    initProjectsGrid();
    initProjectDialog();
    initServicesCarousel();
    initPricingCards();
    initTestimonialsCarousel();
    initBlogGrid();
    initBlogPagination();
    initContactCard();
    initMapContainer();
    initContactForm();
    initFooterGrid();
    initThemeSwitcher();
    initScrollToTop();
    initLoadingIndicator();
    
    // Activer la section active par défaut
    activateSection('accueil');
    
    // Initialiser les événements de navigation
    initNavigation();
});

// Fonction pour activer une section
function activateSection(sectionId) {
    // Désactiver toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Activer la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Mettre à jour la navigation
        document.querySelectorAll('.e-sidebar-item').forEach(item => {
            item.classList.remove('e-active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('e-active');
            }
        });
        
        // Fermer le sidebar sur mobile
        if (window.innerWidth < 768) {
            const sidebarObj = document.querySelector('#sidebar').ej2_instances[0];
            if (sidebarObj && sidebarObj.isOpen) {
                sidebarObj.hide();
            }
        }
        
        // Scroll vers le haut
        window.scrollTo(0, 0);
    }
}

// Initialiser les événements de navigation
function initNavigation() {
    // Gérer les clics sur les liens de navigation
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            activateSection(sectionId);
            
            // Mettre à jour l'URL sans recharger la page
            history.pushState(null, null, '#' + sectionId);
        });
    });
    
    // Gérer la navigation par URL
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            activateSection(hash);
        } else {
            activateSection('accueil');
        }
    });
    
    // Vérifier l'URL au chargement
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        activateSection(hash);
    }
}

// Fonction pour afficher une notification
function showNotification(message, type = 'success') {
    const notificationObj = new ej.notifications.Toast({
        title: type === 'success' ? 'Succès' : 'Information',
        content: message,
        showProgressBar: true,
        position: { X: 'Right', Y: 'Top' },
        timeOut: 3000,
        cssClass: `e-toast-${type}`
    });
    
    notificationObj.appendTo('#notification');
    notificationObj.show();
}

// Fonction pour basculer le thème
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Fonction pour charger le thème depuis le localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Appliquer le thème au chargement
loadTheme();
