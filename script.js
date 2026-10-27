/**
 * Minimalist Editorial Portfolio Script
 * Handles navigation interactions, case study switching, scroll spy, and media lightbox inspection.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inline SVG icons (no icon CDN). Same shapes as the static HTML.
    const ICON_PLAY = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5 L19 12 L8 19 Z" fill="currentColor"/></svg>';
    const ICON_PAUSE = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5" width="3.4" height="14" rx="1" fill="currentColor"/><rect x="13.6" y="5" width="3.4" height="14" rx="1" fill="currentColor"/></svg>';
    const ICON_VOL_ON = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9 L4 15 L8 15 L13 19 L13 5 L8 9 Z" fill="currentColor"/><path d="M16 9 Q18.5 12 16 15 M18.5 6.5 Q23 12 18.5 17.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    const ICON_VOL_OFF = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9 L4 15 L8 15 L13 19 L13 5 L8 9 Z" fill="currentColor"/><path d="M16.5 10.5 L21.5 15.5 M21.5 10.5 L16.5 15.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    // ----------------------------------------------------
    // 0. Staged Asset Loading: Stage 1 (3D hero) -> Stage 2 (immersive) -> Stage 3 (rest)
    // Stage 1 is prioritized via <modulepreload>/<preload> in <head>.
    // This controller holds back Stage 2/3 video fetches until Stage 1 is ready.
    // ----------------------------------------------------
    function ensureVideoSource(video) {
        if (!video || video.dataset.loaded === 'true') return;
        const srcEl = video.querySelector('source[data-src]');
        if (srcEl && !srcEl.getAttribute('src')) {
            srcEl.setAttribute('src', srcEl.getAttribute('data-src'));
            video.load();
            video.dataset.loaded = 'true';
        } else if (!srcEl && video.getAttribute('data-src') && !video.getAttribute('src')) {
            video.setAttribute('src', video.getAttribute('data-src'));
            video.load();
            video.dataset.loaded = 'true';
        }
    }

    function waitForHeroReady(timeoutMs = 3500) {
        return new Promise((resolve) => {
            const heroCanvas = document.getElementById('hero-3d-canvas');
            if (!heroCanvas || heroCanvas.querySelector('canvas')) {
                resolve();
                return;
            }
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                resolve();
            };
            // Resolve early as soon as hero WebGL canvas mounts
            if (heroCanvas && 'MutationObserver' in window) {
                const mo = new MutationObserver(() => {
                    if (heroCanvas.querySelector('canvas')) {
                        mo.disconnect();
                        finish();
                    }
                });
                mo.observe(heroCanvas, { childList: true, subtree: true });
                setTimeout(() => mo.disconnect(), timeoutMs);
            }
            if (document.readyState === 'complete') {
                setTimeout(finish, 600);
            } else {
                window.addEventListener('load', () => setTimeout(finish, 600), { once: true });
            }
            setTimeout(finish, timeoutMs);
        });
    }

    function idleRun(fn, delay = 800) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(fn, { timeout: delay + 1500 });
        } else {
            setTimeout(fn, delay);
        }
    }

    // Stage 2: 3D Room preview (directly after hero)
    const splatSection = document.getElementById('splat-room');
    const splatVideoEl = document.getElementById('splat-video');
    let stage2Done = false;
    let stage3Started = false;

    function loadStage2Splat() {
        if (stage2Done) return;
        stage2Done = true;
        if (splatVideoEl) ensureVideoSource(splatVideoEl);
        // Once 3D room video source is set, queue Stage 3 (VR sequence) during idle time
        idleRun(loadStage3VRSequence, 600);
    }

    // Stage 3: Immersive VR research chapters (following 3D room)
    const stagedImmersiveVideos = Array.from(document.querySelectorAll('#immersive video[data-immersive-video]'));
    const immersiveSection = document.getElementById('immersive');

    function loadStage3VRSequence() {
        if (stage3Started) return;
        stage3Started = true;
        // Chapter 0 first for instant play, then stagger 1 and 2 to avoid bandwidth bursts
        if (stagedImmersiveVideos[0]) ensureVideoSource(stagedImmersiveVideos[0]);
        idleRun(() => {
            if (stagedImmersiveVideos[1]) ensureVideoSource(stagedImmersiveVideos[1]);
            idleRun(() => {
                if (stagedImmersiveVideos[2]) ensureVideoSource(stagedImmersiveVideos[2]);
            }, 900);
        }, 700);
    }

    // Default path: wait for Stage 1 hero, then load Stage 2 (3D room)
    waitForHeroReady().then(loadStage2Splat);

    // Fast-scroll escape hatches: if user scrolls quickly into either section
    if (splatSection && 'IntersectionObserver' in window && splatVideoEl) {
        const splatScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadStage2Splat();
                    splatScrollObserver.disconnect();
                }
            });
        }, { root: null, rootMargin: '600px 0px', threshold: 0 });
        splatScrollObserver.observe(splatSection);
    }

    if (immersiveSection && 'IntersectionObserver' in window && stagedImmersiveVideos.length > 0) {
        const immersiveScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadStage3VRSequence();
                    immersiveScrollObserver.disconnect();
                }
            });
        }, { root: null, rootMargin: '600px 0px', threshold: 0 });
        immersiveScrollObserver.observe(immersiveSection);
    }

    // MRKE Showcase video: lazy load and play only when approaching viewport
    const mrkeVideo = document.getElementById('mrke-showcase-video');
    if (mrkeVideo && 'IntersectionObserver' in window) {
        const mrkeObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    ensureVideoSource(mrkeVideo);
                    const playPromise = mrkeVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                    }
                } else if (mrkeVideo.dataset.loaded === 'true') {
                    mrkeVideo.pause();
                }
            });
        }, { root: null, rootMargin: '300px 0px', threshold: 0.1 });
        mrkeObserver.observe(mrkeVideo);
    } else if (mrkeVideo) {
        ensureVideoSource(mrkeVideo);
    }

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

    // Vestibular-safe anchor jumps: instant cut, no smooth travel.
    // Layout stays single-page; only the header motion is removed.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'auto', block: 'start' });
                    if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', targetId);
                    }
                    // Move keyboard focus without triggering a second scroll
                    if (!targetEl.hasAttribute('tabindex')) {
                        targetEl.setAttribute('tabindex', '-1');
                    }
                    try { targetEl.focus({ preventScroll: true }); } catch (err) { targetEl.focus(); }
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

    let cachedHeaderHeight = 70;
    let cachedCaseTop = 0;
    let cachedCaseScrollable = 0;
    let cachedNavSections = [];

    function updateCachedLayout() {
        const header = document.querySelector('.header');
        cachedHeaderHeight = header ? Math.round(header.getBoundingClientRect().height) : 70;
        const screenHeight = window.innerHeight;
        const availableHeight = screenHeight - cachedHeaderHeight;

        const verticalPadding = Math.max(16, Math.min(36, Math.round(availableHeight * 0.035)));
        document.documentElement.style.setProperty('--case-padding-top', `${verticalPadding}px`);
        document.documentElement.style.setProperty('--case-padding-bottom', `${verticalPadding}px`);

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
    // 5. Unified High-Performance Scroll Frame Loop (Zero Layout Thrashing)
    // ----------------------------------------------------
    let isScrollTicking = false;

    function onScrollFrame() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Navigation scroll spy highlighting (zero layout querying, pure arithmetic)
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
    // 6. Immersive VR Chapter Switcher (post-hero showcase)
    // ----------------------------------------------------
    const immersiveSlides = document.querySelectorAll('.immersive-slide');
    const immersiveDescs = document.querySelectorAll('[data-chapter-desc]');
    const immersiveCounter = document.getElementById('immersive-counter');
    const immersiveKicker = document.getElementById('immersive-kicker');
    const immersiveTitle = document.getElementById('immersive-title');
    const immersivePrev = document.getElementById('immersive-prev');
    const immersiveNext = document.getElementById('immersive-next');
    const immersiveCenter = document.getElementById('immersive-center');
    const immersivePlay = document.getElementById('immersive-play');
    const immersiveMute = document.getElementById('immersive-mute');
    const immersiveChapters = [
        { kicker: 'Familiarization', title: '1. Hear the Space' },
        { kicker: 'Congruent scene and audio only scene', title: '2. Baseline Gameplay' },
        { kicker: 'Incongruent scene', title: '3. Audiovisual Conflict' }
    ];
    let immersiveIndex = 0;

    function setImmersiveChapter(index) {
        if (immersiveSlides.length === 0) return;
        const total = immersiveSlides.length;
        immersiveIndex = ((index % total) + total) % total;

        immersiveSlides.forEach((slide, i) => {
            const isActive = i === immersiveIndex;
            slide.classList.toggle('active', isActive);
            const video = slide.querySelector('video');
            if (isActive) {
                // Stage 2 on-demand: user navigation always wins over staging
                ensureVideoSource(video);
                // Preload the next chapter so arrow/swipe feels instant
                const nextSlide = immersiveSlides[(immersiveIndex + 1) % total];
                const nextVideo = nextSlide ? nextSlide.querySelector('video') : null;
                if (nextVideo) ensureVideoSource(nextVideo);
            } else if (video && !video.paused) {
                video.pause();
            }
        });
        immersiveDescs.forEach((desc, i) => {
            desc.classList.toggle('active', i === immersiveIndex);
        });
        if (immersiveCounter) {
            immersiveCounter.textContent = `${immersiveIndex + 1} / ${total}`;
        }
        const chapter = immersiveChapters[immersiveIndex];
        if (chapter) {
            if (immersiveKicker) immersiveKicker.textContent = chapter.kicker;
            if (immersiveTitle) immersiveTitle.textContent = chapter.title;
        }
        syncImmersiveButtons();
    }

    function getActiveImmersiveVideo() {
        const slide = immersiveSlides[immersiveIndex];
        return slide ? slide.querySelector('video') : null;
    }

    function syncImmersiveButtons() {
        const video = getActiveImmersiveVideo();
        if (!video) return;
        if (immersivePlay) {
            immersivePlay.innerHTML = video.paused ? ICON_PLAY : ICON_PAUSE;
            immersivePlay.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video');
        }
        if (immersiveMute) {
            immersiveMute.innerHTML = video.muted ? ICON_VOL_OFF : ICON_VOL_ON;
            immersiveMute.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
        }
        if (immersiveCenter) {
            immersiveCenter.classList.toggle('is-playing', !video.paused);
        }
    }

    if (immersivePlay) immersivePlay.addEventListener('click', (e) => {
        e.stopPropagation();
        const video = getActiveImmersiveVideo();
        if (!video) return;
        ensureVideoSource(video);
        if (video.paused) video.play().catch(() => {});
        else video.pause();
    });
    if (immersiveMute) immersiveMute.addEventListener('click', (e) => {
        e.stopPropagation();
        const video = getActiveImmersiveVideo();
        if (!video) return;
        ensureVideoSource(video);
        video.muted = !video.muted;
        syncImmersiveButtons();
    });
    immersiveSlides.forEach((slide) => {
        const video = slide.querySelector('video');
        if (!video) return;
        video.addEventListener('play', syncImmersiveButtons);
        video.addEventListener('pause', syncImmersiveButtons);
        video.addEventListener('volumechange', syncImmersiveButtons);
        video.addEventListener('ended', syncImmersiveButtons);
        video.addEventListener('click', () => {
            ensureVideoSource(video);
            if (video.paused) video.play().catch(() => {});
            else video.pause();
        });
    });
    syncImmersiveButtons();

    if (immersivePrev) immersivePrev.addEventListener('click', () => setImmersiveChapter(immersiveIndex - 1));
    if (immersiveNext) immersiveNext.addEventListener('click', () => setImmersiveChapter(immersiveIndex + 1));
    document.addEventListener('keydown', (e) => {
        const section = document.getElementById('immersive');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView) return;
        if (e.key === 'ArrowLeft') setImmersiveChapter(immersiveIndex - 1);
        if (e.key === 'ArrowRight') setImmersiveChapter(immersiveIndex + 1);
    });
    // Touch swipe on viewport
    const immersiveViewport = document.querySelector('#immersive .immersive-viewport');
    if (immersiveViewport) {
        let touchStartX = 0;
        immersiveViewport.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });
        immersiveViewport.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 40) {
                setImmersiveChapter(immersiveIndex + (dx < 0 ? 1 : -1));
            }
        }, { passive: true });
    }

    // ----------------------------------------------------
    // 6b. Gaussian Splatting Room Showcase (single scene, own wiring)
    // ----------------------------------------------------
    const splatVideo = document.getElementById('splat-video');
    const splatCenter = document.getElementById('splat-center');
    const splatPlay = document.getElementById('splat-play');
    const splatMute = document.getElementById('splat-mute');

    function syncSplatButtons() {
        if (!splatVideo) return;
        if (splatPlay) {
            splatPlay.innerHTML = splatVideo.paused ? ICON_PLAY : ICON_PAUSE;
            splatPlay.setAttribute('aria-label', splatVideo.paused ? 'Play video' : 'Pause video');
        }
        if (splatMute) {
            splatMute.innerHTML = splatVideo.muted ? ICON_VOL_OFF : ICON_VOL_ON;
            splatMute.setAttribute('aria-label', splatVideo.muted ? 'Unmute video' : 'Mute video');
        }
        if (splatCenter) {
            splatCenter.classList.toggle('is-playing', !splatVideo.paused);
        }
    }

    function toggleSplatPlayback() {
        if (!splatVideo) return;
        ensureVideoSource(splatVideo);
        if (splatVideo.paused) splatVideo.play().catch(() => {});
        else splatVideo.pause();
    }

    if (splatVideo) {
        if (splatPlay) splatPlay.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSplatPlayback();
        });
        if (splatMute) splatMute.addEventListener('click', (e) => {
            e.stopPropagation();
            ensureVideoSource(splatVideo);
            splatVideo.muted = !splatVideo.muted;
            syncSplatButtons();
        });
        splatVideo.addEventListener('play', syncSplatButtons);
        splatVideo.addEventListener('pause', syncSplatButtons);
        splatVideo.addEventListener('volumechange', syncSplatButtons);
        splatVideo.addEventListener('ended', syncSplatButtons);
        splatVideo.addEventListener('click', toggleSplatPlayback);
        syncSplatButtons();
    }

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

    // ----------------------------------------------------
    // 9. Immersive Case Study Modal
    // ----------------------------------------------------
    const caseModal = document.getElementById('case-study-modal');
    const caseModalScroll = document.getElementById('case-modal-scroll');
    const caseModalBody = document.getElementById('case-modal-body');

    if (caseModal && caseModalScroll && caseModalBody) {
        let caseModalOpen = false;
        let caseModalTimer = null;
        let caseLastTrigger = null;
        let casePrevOverflow = '';
        const caseCache = new Map();

        function normalizeCaseUrl(rawUrl) {
            if (!rawUrl) return '';
            let url = rawUrl.trim();
            const hashIndex = url.indexOf('#');
            if (hashIndex !== -1) url = url.substring(0, hashIndex);
            const queryIndex = url.indexOf('?');
            if (queryIndex !== -1) url = url.substring(0, queryIndex);
            url = url.replace(/^\.\//, '').replace(/^\//, '');
            if (!url.startsWith('cases/')) {
                url = 'cases/' + url;
            }
            return url;
        }

        function extractSlug(url) {
            return url.replace(/^(\.\.\/|\/)?cases\//, '').replace(/\.html$/, '');
        }

        async function fetchCaseContent(url) {
            if (caseCache.has(url)) {
                return caseCache.get(url);
            }
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Failed to load case study (${res.status})`);
            }
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = doc.querySelector('main.case-container') || doc.body;

            // Extract case-specific stylesheets from doc
            const stylesheets = [];
            doc.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
                let href = link.getAttribute('href');
                if (!href) return;
                // Exclude stylesheets already loaded globally by index.html
                if (href.includes('fonts.css') || href.includes('style.css') || href.endsWith('case.css')) {
                    return;
                }
                // Normalize to root context: e.g. 'mrke-3d.css' -> 'cases/mrke-3d.css'
                if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('/')) {
                    if (href.startsWith('../')) {
                        href = href.replace(/^\.\.\//, '');
                    } else if (!href.startsWith('cases/')) {
                        href = 'cases/' + href.replace(/^\.\//, '');
                    }
                }
                stylesheets.push(href);
            });

            // Extract case-specific external scripts (e.g. cases/innova-medical.js)
            const scripts = [];
            doc.querySelectorAll('script[src]').forEach(script => {
                let src = script.getAttribute('src');
                if (!src) return;
                if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('/')) {
                    if (src.startsWith('../')) {
                        src = src.replace(/^\.\.\//, '');
                    } else if (!src.startsWith('cases/')) {
                        src = 'cases/' + src.replace(/^\.\//, '');
                    }
                }
                scripts.push(src);
            });

            // Rewrite relative ../assets/ paths to assets/ for root index context
            mainContent.querySelectorAll('img, video, source').forEach(el => {
                ['src', 'data-src', 'poster'].forEach(attr => {
                    const val = el.getAttribute(attr);
                    if (val && val.startsWith('../assets/')) {
                        el.setAttribute(attr, val.replace(/^\.\.\/assets\//, 'assets/'));
                    }
                });
            });

            // Adjust internal links
            mainContent.querySelectorAll('a').forEach(a => {
                const href = a.getAttribute('href');
                if (!href) return;
                if (href.includes('index.html') || a.classList.contains('back-link')) {
                    a.setAttribute('data-case-close', '');
                } else if (href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('//')) {
                    a.setAttribute('data-case-url', normalizeCaseUrl(href));
                }
            });

            const processedData = {
                html: mainContent.innerHTML,
                stylesheets: stylesheets,
                scripts: scripts
            };
            caseCache.set(url, processedData);
            return processedData;
        }

        async function openCaseModal(rawUrl, triggerEl = null) {
            const url = normalizeCaseUrl(rawUrl);
            if (!url) return;

            if (!caseModalOpen) {
                caseLastTrigger = triggerEl || document.activeElement;
                casePrevOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }

            if (caseModalTimer !== null) {
                window.clearTimeout(caseModalTimer);
                caseModalTimer = null;
            }

            caseModal.hidden = false;
            caseModal.setAttribute('aria-hidden', 'false');
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                    caseModal.classList.add('open');
                });
            });
            caseModalOpen = true;

            const closeBtn = caseModal.querySelector('.case-modal-close-btn');
            if (closeBtn) {
                window.setTimeout(() => closeBtn.focus({ preventScroll: true }), 60);
            }

            const slug = extractSlug(url);
            if (window.location.hash !== `#case-${slug}`) {
                history.pushState({ caseModalOpen: true, caseUrl: url }, '', `#case-${slug}`);
            }

            if (!caseCache.has(url)) {
                caseModalBody.innerHTML = `
                    <div class="case-modal-loading">
                        <div class="case-modal-spinner" aria-hidden="true"></div>
                        <span>Loading case study...</span>
                    </div>
                `;
            }

            caseModalScroll.scrollTop = 0;

            try {
                const caseData = await fetchCaseContent(url);

                // Clean up previous case-specific dynamic stylesheets and scripts
                document.querySelectorAll('link[data-case-dynamic-style]').forEach(el => el.remove());
                document.querySelectorAll('script[data-case-dynamic-script]').forEach(el => el.remove());

                // Inject current case-specific stylesheets
                if (caseData.stylesheets && caseData.stylesheets.length > 0) {
                    caseData.stylesheets.forEach(sheetHref => {
                        const linkEl = document.createElement('link');
                        linkEl.rel = 'stylesheet';
                        linkEl.href = sheetHref;
                        linkEl.setAttribute('data-case-dynamic-style', '');
                        document.head.appendChild(linkEl);
                    });
                }

                caseModalBody.innerHTML = caseData.html;
                caseModalScroll.scrollTop = 0;

                // Inject current case-specific scripts
                if (caseData.scripts && caseData.scripts.length > 0) {
                    caseData.scripts.forEach(scriptSrc => {
                        const scriptEl = document.createElement('script');
                        scriptEl.src = scriptSrc;
                        scriptEl.setAttribute('data-case-dynamic-script', '');
                        document.body.appendChild(scriptEl);
                    });
                }

                caseModalBody.querySelectorAll('video[autoplay]').forEach(video => {
                    video.play().catch(() => {});
                });
            } catch (err) {
                caseModalBody.innerHTML = `
                    <div class="case-modal-loading">
                        <p>Unable to load case study.</p>
                        <a href="${url}" class="case-modal-back-btn" style="margin-top:1rem;">Open in new window</a>
                    </div>
                `;
            }
        }

        function closeCaseModal(updateHistory = true) {
            if (!caseModalOpen) return;

            caseModalBody.querySelectorAll('video').forEach(video => {
                try { video.pause(); } catch (e) {}
            });

            // Clean up injected case stylesheets and scripts
            document.querySelectorAll('link[data-case-dynamic-style]').forEach(el => el.remove());
            document.querySelectorAll('script[data-case-dynamic-script]').forEach(el => el.remove());

            caseModalOpen = false;
            caseModal.classList.remove('open');
            caseModal.setAttribute('aria-hidden', 'true');

            if (caseModalTimer !== null) {
                window.clearTimeout(caseModalTimer);
            }
            caseModalTimer = window.setTimeout(() => {
                caseModal.hidden = true;
                caseModalBody.innerHTML = '';
                caseModalTimer = null;
            }, 260);

            document.body.style.overflow = casePrevOverflow;

            if (updateHistory && window.location.hash.startsWith('#case-')) {
                history.pushState(null, '', window.location.pathname + window.location.search + '#showcases');
            }

            if (caseLastTrigger && document.contains(caseLastTrigger)) {
                try { caseLastTrigger.focus({ preventScroll: true }); } catch (e) { caseLastTrigger.focus(); }
            }
            caseLastTrigger = null;
        }

        document.addEventListener('click', (e) => {
            const closeTarget = e.target.closest('[data-case-close]');
            if (closeTarget && caseModal.contains(closeTarget)) {
                e.preventDefault();
                closeCaseModal(true);
                return;
            }

            const siblingLink = e.target.closest('[data-case-url]');
            if (siblingLink && caseModal.contains(siblingLink)) {
                e.preventDefault();
                const targetUrl = siblingLink.getAttribute('data-case-url');
                openCaseModal(targetUrl, siblingLink);
                return;
            }

            const caseLink = e.target.closest('a[href*="cases/"]');
            if (caseLink && !caseModal.contains(caseLink)) {
                const href = caseLink.getAttribute('href');
                if (href && href.includes('cases/') && href.endsWith('.html')) {
                    e.preventDefault();
                    openCaseModal(href, caseLink);
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && caseModalOpen) {
                closeCaseModal(true);
            }
        });

        window.addEventListener('popstate', (e) => {
            if (caseModalOpen) {
                closeCaseModal(false);
            } else if (e.state && e.state.caseModalOpen && e.state.caseUrl) {
                openCaseModal(e.state.caseUrl);
            }
        });

        if (window.location.hash && window.location.hash.startsWith('#case-')) {
            const slug = window.location.hash.replace('#case-', '');
            const targetUrl = `cases/${slug}.html`;
            openCaseModal(targetUrl);
        }
    }
});

