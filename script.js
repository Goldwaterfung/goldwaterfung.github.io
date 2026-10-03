/**
 * Minimalist Editorial Portfolio Script
 * Handles navigation interactions, case study switching, scroll spy, and media lightbox inspection.
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
    // 2. Dynamic Case Slide Padding Calculation
    // ----------------------------------------------------
    function calculateStageMetrics() {
        const header = document.querySelector('.header');
        const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 70;
        const screenHeight = window.innerHeight;
        const availableHeight = screenHeight - headerHeight;

        // Proportional top and bottom padding based on available height.
        // Stage height itself is handled by CSS dvh units, no JS pixel injection needed.
        const verticalPadding = Math.max(16, Math.min(36, Math.round(availableHeight * 0.035)));

        document.documentElement.style.setProperty('--case-padding-top', `${verticalPadding}px`);
        document.documentElement.style.setProperty('--case-padding-bottom', `${verticalPadding}px`);
    }

    calculateStageMetrics();
    window.addEventListener('resize', calculateStageMetrics, { passive: true });
    window.addEventListener('orientationchange', calculateStageMetrics, { passive: true });

    // ----------------------------------------------------
    // 3. Immersive Pinned Case Studies Scroll & Snap Controller
    // ----------------------------------------------------
    const caseStudiesSection = document.getElementById('case-studies');
    const caseSlides = document.querySelectorAll('.case-slide');
    const caseDots = document.querySelectorAll('.case-indicator-dot');

    if (caseStudiesSection && caseSlides.length > 0) {
        let currentSlideIndex = 0;
        const totalSlides = caseSlides.length;

        function setSlide(index, smoothScroll = false) {
            if (index < 0 || index >= totalSlides) return;
            currentSlideIndex = index;

            caseSlides.forEach((slide, i) => {
                slide.classList.remove('active', 'past', 'future');
                if (i === index) {
                    slide.classList.add('active');
                } else if (i < index) {
                    slide.classList.add('past');
                } else {
                    slide.classList.add('future');
                }
            });

            caseDots.forEach((dot, i) => {
                const isActive = i === index;
                dot.classList.toggle('active', isActive);
                dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            if (smoothScroll && window.innerWidth > 960) {
                const sectionTop = caseStudiesSection.offsetTop;
                const header = document.querySelector('.header');
                const headerOffset = header ? header.getBoundingClientRect().height : 70;
                const scrollable = caseStudiesSection.offsetHeight - window.innerHeight;
                if (scrollable > 0) {
                    const targetY = sectionTop - headerOffset + (index / (totalSlides - 1)) * scrollable;
                    window.scrollTo({
                        top: targetY,
                        behavior: 'smooth'
                    });
                }
            }
        }

        // Indicator dot click listeners
        caseDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-slide-index'), 10);
                if (!isNaN(idx)) {
                    setSlide(idx, true);
                }
            });
        });

        // Trackpad / mouse scroll controller on desktop
        function onCaseScroll() {
            if (window.innerWidth <= 960) return;
            const rect = caseStudiesSection.getBoundingClientRect();
            const header = document.querySelector('.header');
            const headerOffset = header ? header.getBoundingClientRect().height : 70;
            const scrollable = caseStudiesSection.offsetHeight - window.innerHeight;

            if (scrollable <= 0) return;

            const scrolled = -rect.top + headerOffset;
            if (scrolled >= 0 && scrolled <= scrollable) {
                const progress = scrolled / scrollable;
                const slideIdx = Math.min(totalSlides - 1, Math.floor(progress * totalSlides));
                if (slideIdx !== currentSlideIndex) {
                    setSlide(slideIdx, false);
                }
            } else if (scrolled < 0) {
                if (currentSlideIndex !== 0) {
                    setSlide(0, false);
                }
            } else if (scrolled > scrollable) {
                if (currentSlideIndex !== totalSlides - 1) {
                    setSlide(totalSlides - 1, false);
                }
            }
        }

        window.addEventListener('scroll', onCaseScroll, { passive: true });
        onCaseScroll();
    }

    // ----------------------------------------------------
    // 4. Vertical Transit Map Journey Controller
    // ----------------------------------------------------
    const journeySection = document.getElementById('experience');
    const stationCards = document.querySelectorAll('.journey-card');

    if (journeySection && stationCards.length > 0) {
        let currentStationIndex = 0;
        const totalStations = stationCards.length;

        function setStation(index, scrollToCard = false) {
            if (index < 0 || index >= totalStations) return;
            currentStationIndex = index;

            stationCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });

            window.dispatchEvent(new CustomEvent('journey-set-station', {
                detail: { index }
            }));

            if (scrollToCard && stationCards[index]) {
                stationCards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }

        // Click on station cards activates that station
        stationCards.forEach((card, idx) => {
            card.addEventListener('click', () => {
                setStation(idx, false);
            });
        });

        // Listen to SVG station click events
        window.addEventListener('journey-active-station-changed', (e) => {
            const idx = e.detail?.index;
            if (typeof idx === 'number' && idx !== currentStationIndex && idx >= 0 && idx < totalStations) {
                setStation(idx, true);
            }
        });

        // IntersectionObserver to sync active station as user scrolls naturally
        if ('IntersectionObserver' in window) {
            const cardObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const stationIdx = parseInt(entry.target.getAttribute('data-station') || '0', 10);
                        if (!isNaN(stationIdx) && stationIdx !== currentStationIndex) {
                            currentStationIndex = stationIdx;
                            stationCards.forEach((card, i) => {
                                card.classList.toggle('active', i === stationIdx);
                            });
                            window.dispatchEvent(new CustomEvent('journey-set-station', {
                                detail: { index: stationIdx }
                            }));
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: '-20% 0px -40% 0px',
                threshold: 0.2
            });

            stationCards.forEach((card) => cardObserver.observe(card));
        }

        setStation(0, false);
    }

    // ----------------------------------------------------
    // 5. Scroll Spy - Highlight Active Navigation Link
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

    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

    // ----------------------------------------------------
    // 6. Reading Progress Indicator (GPU Accelerated)
    // ----------------------------------------------------
    const progressBar = document.getElementById('reading-progress');

    if (progressBar) {
        let isProgressTicking = false;

        function updateReadingProgress() {
            const totalScroll = window.pageYOffset || document.documentElement.scrollTop;
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollableHeight > 0) {
                const scrollRatio = Math.min(1, Math.max(0, totalScroll / scrollableHeight));
                progressBar.style.transform = `scaleX(${scrollRatio})`;
            }
            isProgressTicking = false;
        }

        window.addEventListener('scroll', () => {
            if (!isProgressTicking) {
                window.requestAnimationFrame(updateReadingProgress);
                isProgressTicking = true;
            }
        }, { passive: true });

        updateReadingProgress();
    }



    // ----------------------------------------------------
    // 7. Calm Scroll Entrance Reveals
    // ----------------------------------------------------
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealTargets = document.querySelectorAll(
            '.flat-project-row, .timeline-row, .contact-link-item'
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
            rootMargin: '0px 0px -20px 0px',
            threshold: 0.01
        });

        revealTargets.forEach(el => {
            el.classList.add('reveal-item');
            revealObserver.observe(el);
        });
    }

    // ----------------------------------------------------
    // 8. Media Figure Lightbox Inspection
    // ----------------------------------------------------
    const mediaImages = document.querySelectorAll(
        '.project-media-wrapper img, .research-image-gallery img, .horizontal-media-scroll img, .media-block img, .three-images-col img, .case-vertical-device-img'
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

