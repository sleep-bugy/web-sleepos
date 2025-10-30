// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Active Nav Link Highlighting ---
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop().split('#')[0];
        if (currentPath === linkPath || (currentPath === 'index.html' && linkPath === '')) {
            link.classList.add('active');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            // Handle root path for index.html
            link.classList.add('active');
        }
    });

    // --- Scroll Reveal Animation ---
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

    // --- Device Search/Filter (for perangkat.html) ---
    const deviceSearchInput = document.getElementById('deviceSearch');
    if (deviceSearchInput) {
        deviceSearchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const deviceCards = document.querySelectorAll('.device-card');

            deviceCards.forEach(card => {
                const deviceName = card.querySelector('h2').textContent.toLowerCase();
                const codename = card.querySelector('.codename').textContent.toLowerCase();
                card.style.display = (deviceName.includes(searchTerm) || codename.includes(searchTerm)) ? 'block' : 'none';
            });
        });
    }
});