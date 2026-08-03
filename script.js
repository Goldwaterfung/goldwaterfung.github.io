/**
 * Minimalist Editorial PM Portfolio Script
 * Handles navigation interactions, accordion expansion, project filtering, and active scroll spy.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Mobile Menu Toggle
    // ----------------------------------------------------
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('active');
            });
        });
    }

    // ----------------------------------------------------
    // 2. Accordion Toggle for Case Study Details
    // ----------------------------------------------------
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const content = toggle.nextElementSibling;

            toggle.setAttribute('aria-expanded', !isExpanded);
            toggle.classList.toggle('active');

            if (content) {
                content.classList.toggle('open');
            }
        });
    });

    // ----------------------------------------------------
    // 3. Project Filter Buttons (Music Curation & Research)
    // ----------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectRows = document.querySelectorAll('.flat-project-row');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectRows.forEach(row => {
                const category = row.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    row.style.display = 'grid';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    // ----------------------------------------------------
    // 4. Scroll Spy - Highlight Active Navigation Link
    // ----------------------------------------------------
    const sections = document.querySelectorAll('section[id], footer[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

            if (correspondingNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
});
