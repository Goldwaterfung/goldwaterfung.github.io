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

    // Explicit smooth scrolling for in-page anchor links without global CSS scroll-behavior physics conflict
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                    if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', targetId);
                    }
                }
            }
        });
    });

    // ----------------------------------------------------
    // 2. Cached Layout Metrics (Decoupled from Scroll Events)
    // ----------------------------------------------------
    const caseStudiesSection = document.getElementById('case-studies');
    const caseSlides = document.querySelectorAll('.case-slide');
    const caseDots = document.querySelectorAll('.case-indicator-dot');
    const sections = document.querySelectorAll('section[id], footer[id]');
    const progressBar = document.getElementById('reading-progress');

    let cachedHeaderHeight = 70;
    let cachedCaseTop = 0;
    let cachedCaseScrollable = 0;
    let cachedScrollableHeight = 0;
    let cachedNavSections = [];

    function updateCachedLayout() {
        const header = document.querySelector('.header');
        cachedHeaderHeight = header ? Math.round(header.getBoundingClientRect().height) : 70;
        const screenHeight = window.innerHeight;
        const availableHeight = screenHeight - cachedHeaderHeight;

        const verticalPadding = Math.max(16, Math.min(36, Math.round(availableHeight * 0.035)));
        document.documentElement.style.setProperty('--case-padding-top', `${verticalPadding}px`);
        document.documentElement.style.setProperty('--case-padding-bottom', `${verticalPadding}px`);

        cachedScrollableHeight = document.documentElement.scrollHeight - screenHeight;

        if (caseStudiesSection) {
            cachedCaseTop = caseStudiesSection.offsetTop;
            const caseHeight = caseStudiesSection.offsetHeight;
            cachedCaseScrollable = caseHeight - screenHeight;
        }

        cachedNavSections = Array.from(sections).map(sec => {
            const id = sec.getAttribute('id');
            return {
                id,
                top: sec.offsetTop - 120,
                bottom: sec.offsetTop - 120 + sec.offsetHeight,
                link: document.querySelector(`.nav-menu a[href*="#${id}"]`)
            };
        }).filter(item => item.link !== null);
    }

    updateCachedLayout();
    window.addEventListener('resize', updateCachedLayout, { passive: true });
    window.addEventListener('orientationchange', updateCachedLayout, { passive: true });
    window.addEventListener('journey-layout-updated', updateCachedLayout, { passive: true });

    // ----------------------------------------------------
    // 3. Immersive Pinned Case Studies Controller
    // ----------------------------------------------------
    let currentSlideIndex = 0;
    const totalSlides = caseSlides.length;

    function setSlide(index, smoothScroll = false) {
        if (index < 0 || index >= totalSlides) return;
        currentSlideIndex = index;

        caseSlides.forEach((slide, i) => {
            slide.classList.remove('active', 'past', 'future', 'stack-1', 'stack-2', 'stack-3');
            if (i === index) {
                slide.classList.add('active');
            } else if (i < index) {
                slide.classList.add('past');
            } else {
                const depth = i - index;
                if (depth === 1) {
                    slide.classList.add('stack-1');
                } else if (depth === 2) {
                    slide.classList.add('stack-2');
                } else {
                    slide.classList.add('stack-3');
                }
            }
        });

        caseDots.forEach((dot, i) => {
            const isActive = i === index;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        if (smoothScroll && window.innerWidth > 960 && caseStudiesSection && cachedCaseScrollable > 0) {
            const targetY = cachedCaseTop - cachedHeaderHeight + (index / (totalSlides - 1)) * cachedCaseScrollable;
            window.scrollTo({
                top: targetY,
                behavior: 'smooth'
            });
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

    // Initialize slide deck state
    if (caseSlides.length > 0) {
        setSlide(0, false);
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
    // 5. Unified High-Performance Scroll Frame Loop (Zero Layout Thrashing)
    // ----------------------------------------------------
    let isScrollTicking = false;

    function onScrollFrame() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // 1. Reading progress indicator (zero forced layout)
        if (progressBar && cachedScrollableHeight > 0) {
            const scrollRatio = Math.min(1, Math.max(0, scrollY / cachedScrollableHeight));
            progressBar.style.transform = `scaleX(${scrollRatio})`;
        }

        // 2. Navigation scroll spy highlighting (zero layout querying, pure arithmetic)
        let activeNav = null;
        for (let i = 0; i < cachedNavSections.length; i++) {
            const item = cachedNavSections[i];
            if (scrollY >= item.top && scrollY <= item.bottom) {
                activeNav = item;
            }
        }
        if (activeNav) {
            navLinks.forEach(link => {
                const isTarget = link === activeNav.link;
                if (link.classList.contains('active') !== isTarget) {
                    link.classList.toggle('active', isTarget);
                }
            });
        }

        // 3. Case studies slides controller (pure arithmetic, zero getBoundingClientRect calls)
        if (caseStudiesSection && totalSlides > 0 && window.innerWidth > 960 && cachedCaseScrollable > 0) {
            const scrolled = scrollY - cachedCaseTop + cachedHeaderHeight;
            if (scrolled >= 0 && scrolled <= cachedCaseScrollable) {
                const progress = scrolled / cachedCaseScrollable;
                const slideIdx = Math.min(totalSlides - 1, Math.floor(progress * totalSlides));
                if (slideIdx !== currentSlideIndex) {
                    setSlide(slideIdx, false);
                }
            } else if (scrolled < 0) {
                if (currentSlideIndex !== 0) {
                    setSlide(0, false);
                }
            } else if (scrolled > cachedCaseScrollable) {
                if (currentSlideIndex !== totalSlides - 1) {
                    setSlide(totalSlides - 1, false);
                }
            }
        }

        isScrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!isScrollTicking) {
            window.requestAnimationFrame(onScrollFrame);
            isScrollTicking = true;
        }
    }, { passive: true });

    onScrollFrame();



    // ----------------------------------------------------
    // 7. Calm Scroll Entrance Reveals
    // ----------------------------------------------------
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const projectRows = document.querySelectorAll('.flat-project-grid .flat-project-row');
        projectRows.forEach((row, idx) => {
            row.style.setProperty('--row-index', idx);
        });

        const revealTargets = document.querySelectorAll(
            '#projects .section-meta, .flat-project-row, .timeline-row, .contact-link-item'
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

