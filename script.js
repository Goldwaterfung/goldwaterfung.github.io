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

    // ----------------------------------------------------
    // 5. Reading Progress Indicator
    // ----------------------------------------------------
    const progressBar = document.getElementById('reading-progress');

    if (progressBar) {
        let isProgressTicking = false;

        function updateReadingProgress() {
            const totalScroll = window.pageYOffset || document.documentElement.scrollTop;
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollableHeight > 0) {
                const scrollRatio = (totalScroll / scrollableHeight) * 100;
                progressBar.style.width = `${Math.min(100, Math.max(0, scrollRatio))}%`;
            }
            isProgressTicking = false;
        }

        window.addEventListener('scroll', () => {
            if (!isProgressTicking) {
                window.requestAnimationFrame(updateReadingProgress);
                isProgressTicking = true;
            }
        });

        updateReadingProgress();
    }

    // ----------------------------------------------------
    // 6. Calm Scroll Entrance Reveals
    // ----------------------------------------------------
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealTargets = document.querySelectorAll(
            '.section-grid, .flat-project-row, .flat-case-card, .timeline-row, .accordion-item, .contact-link-item'
        );

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.06
        });

        revealTargets.forEach(el => {
            el.classList.add('reveal-item');
            revealObserver.observe(el);
        });
    }

    // ----------------------------------------------------
    // 7. Media Figure Lightbox Inspection
    // ----------------------------------------------------
    const mediaImages = document.querySelectorAll(
        '.project-media-wrapper img, .research-image-gallery img, .horizontal-media-scroll img, .media-block img'
    );

    if (mediaImages.length > 0) {
        const lightbox = document.createElement('div');
        lightbox.className = 'figure-lightbox-overlay';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Diagram preview');

        const lightboxImg = document.createElement('img');
        lightboxImg.className = 'figure-lightbox-content';
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
            lightboxImg.alt = '';
            document.body.style.overflow = '';
        }

        mediaImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Expanded diagram preview';
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        lightbox.addEventListener('click', closeLightbox);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});

