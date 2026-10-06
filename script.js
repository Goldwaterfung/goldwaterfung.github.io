/**
 * Minimalist Editorial Portfolio Script
 * Handles navigation interactions, case study switching, scroll spy, and media lightbox inspection.
 */

document.addEventListener('DOMContentLoaded', () => {
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
            if (heroCanvas && heroCanvas.querySelector('canvas')) {
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

    const stagedImmersiveVideos = Array.from(document.querySelectorAll('video[data-immersive-video]'));
    const immersiveSection = document.getElementById('immersive');
    let stage2Started = false;

    function loadStage2Sequence() {
        if (stage2Started) return;
        stage2Started = true;
        // Chapter 0 first for instant play, then stagger 1/2 to avoid bandwidth burst
        if (stagedImmersiveVideos[0]) ensureVideoSource(stagedImmersiveVideos[0]);
        idleRun(() => {
            if (stagedImmersiveVideos[1]) ensureVideoSource(stagedImmersiveVideos[1]);
            idleRun(() => {
                if (stagedImmersiveVideos[2]) ensureVideoSource(stagedImmersiveVideos[2]);
            }, 900);
        }, 700);
    }

    // Default path: wait for Stage 1 hero, then load Stage 2
    waitForHeroReady().then(loadStage2Sequence);

    // Fast-scroll escape hatch: if user reaches immersive before hero is ready, load immediately
    if (immersiveSection && 'IntersectionObserver' in window && stagedImmersiveVideos.length > 0) {
        const fastScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadStage2Sequence();
                    fastScrollObserver.disconnect();
                }
            });
        }, { root: null, rootMargin: '600px 0px', threshold: 0 });
        fastScrollObserver.observe(immersiveSection);
    }

    // Stage 3: below-fold case-study video only when near viewport
    const stage3Videos = Array.from(document.querySelectorAll('video[data-stage="3"]'));
    if (stage3Videos.length > 0 && 'IntersectionObserver' in window) {
        const stage3Observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    ensureVideoSource(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '800px 0px', threshold: 0 });
        stage3Videos.forEach((v) => stage3Observer.observe(v));
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
        const journeyMedia = window.matchMedia('(max-width: 900px)');
        const isMobileJourney = () => journeyMedia.matches;

        // Single reusable mobile bottom-sheet (see #journey-modal in index.html).
        const journeyModal = document.getElementById('journey-modal');
        const journeyModalPanel = journeyModal ? journeyModal.querySelector('.journey-modal-panel') : null;
        const journeyModalTime = document.getElementById('journey-modal-time');
        const journeyModalRole = document.getElementById('journey-modal-role');
        const journeyModalOrg = document.getElementById('journey-modal-org');
        const journeyModalDesc = document.getElementById('journey-modal-desc');
        const journeyModalCount = document.getElementById('journey-modal-count');
        const journeyModalPrev = document.getElementById('journey-modal-prev');
        const journeyModalNext = document.getElementById('journey-modal-next');
        const journeyModalClose = journeyModal ? journeyModal.querySelector('[data-journey-close].journey-modal-close') : null;
        let journeyModalOpen = false;
        let journeyModalHideTimer = null;
        let journeyLastTrigger = null;
        let journeyPrevBodyOverflow = '';

        function focusStationNode(index) {
            const nodes = document.querySelectorAll('#journey-3d-canvas g[role="button"]');
            const node = nodes[index];
            if (node && typeof node.focus === 'function') {
                try { node.focus({ preventScroll: true }); } catch (e) { node.focus(); }
            }
        }

        function fillJourneyModal(index) {
            const card = stationCards[index];
            if (!card || !journeyModal) return false;
            const text = (sel) => {
                const el = card.querySelector(sel);
                return el ? el.textContent.trim() : '';
            };
            if (journeyModalTime) journeyModalTime.textContent = text('.journey-card-time');
            if (journeyModalRole) journeyModalRole.textContent = text('.journey-card-role');
            if (journeyModalOrg) journeyModalOrg.textContent = text('.journey-card-org');
            if (journeyModalDesc) journeyModalDesc.textContent = text('.journey-card-desc');
            if (journeyModalCount) journeyModalCount.textContent = `${index + 1} / ${totalStations}`;
            if (journeyModalPrev) journeyModalPrev.disabled = index <= 0;
            if (journeyModalNext) journeyModalNext.disabled = index >= totalStations - 1;
            return true;
        }

        function openJourneyModal(index) {
            if (index < 0 || index >= totalStations) return;
            if (!journeyModal || !journeyModalPanel) return;
            currentStationIndex = index;
            stationCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            window.dispatchEvent(new CustomEvent('journey-set-station', {
                detail: { index }
            }));
            if (!fillJourneyModal(index)) return;

            if (!journeyModalOpen) {
                journeyLastTrigger = document.activeElement;
                journeyPrevBodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
            if (journeyModalHideTimer !== null) {
                window.clearTimeout(journeyModalHideTimer);
                journeyModalHideTimer = null;
            }
            journeyModal.hidden = false;
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                    journeyModal.classList.add('open');
                });
            });
            journeyModalOpen = true;
            if (journeyModalClose) {
                window.setTimeout(() => journeyModalClose.focus({ preventScroll: true }), 60);
            } else {
                window.setTimeout(() => journeyModalPanel.focus && journeyModalPanel.focus({ preventScroll: true }), 60);
            }
        }

        function closeJourneyModal(returnFocus = true) {
            if (!journeyModal || !journeyModalOpen) return;
            journeyModalOpen = false;
            journeyModal.classList.remove('open');
            if (journeyModalHideTimer !== null) {
                window.clearTimeout(journeyModalHideTimer);
            }
            journeyModalHideTimer = window.setTimeout(() => {
                journeyModal.hidden = true;
                journeyModalHideTimer = null;
            }, 240);
            document.body.style.overflow = journeyPrevBodyOverflow;
            if (returnFocus) {
                if (journeyLastTrigger && document.contains(journeyLastTrigger)) {
                    try { journeyLastTrigger.focus({ preventScroll: true }); } catch (e) { journeyLastTrigger.focus(); }
                } else {
                    focusStationNode(currentStationIndex);
                }
                journeyLastTrigger = null;
            }
        }

        function setStation(index, scrollToCard = false) {
            if (index < 0 || index >= totalStations) return;
            currentStationIndex = index;

            stationCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });

            window.dispatchEvent(new CustomEvent('journey-set-station', {
                detail: { index }
            }));

            // Inline cards are display:none on mobile (modal is the UI), so never scroll there.
            if (scrollToCard && !isMobileJourney() && stationCards[index]) {
                stationCards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }

        // Click on station cards activates that station (desktop only; hidden on mobile)
        stationCards.forEach((card, idx) => {
            card.addEventListener('click', () => {
                if (isMobileJourney()) {
                    openJourneyModal(idx);
                } else {
                    setStation(idx, false);
                }
            });
        });

        // Listen to SVG station click events. Only explicit user selections
        // may recenter the page: scroll-driven syncs (scroll-scrub) must never
        // trigger programmatic scrolling or they fight the user's own scroll.
        // A card already near the viewport center is also left alone.
        function isCardCentered(card) {
            const rect = card.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const cardCenter = rect.top + rect.height / 2;
            return Math.abs(cardCenter - viewportCenter) < window.innerHeight * 0.2;
        }

        window.addEventListener('journey-active-station-changed', (e) => {
            const idx = e.detail?.index;
            const source = e.detail?.source;
            if (typeof idx === 'number' && idx >= 0 && idx < totalStations) {
                if (source === 'svg-click') {
                    // Mobile: tap station -> bottom-sheet. Desktop: sync + recenter card.
                    if (isMobileJourney()) {
                        openJourneyModal(idx);
                        return;
                    }
                    if (idx !== currentStationIndex) {
                        const card = stationCards[idx];
                        setStation(idx, card ? !isCardCentered(card) : true);
                    }
                    return;
                }
                if (idx !== currentStationIndex) {
                    setStation(idx, false);
                }
            }
        });

        // Modal controls: backdrop/close, prev/next, Escape, minimal focus trap.
        if (journeyModal) {
            journeyModal.querySelectorAll('[data-journey-close]').forEach((el) => {
                el.addEventListener('click', () => closeJourneyModal(true));
            });
            if (journeyModalPrev) {
                journeyModalPrev.addEventListener('click', () => {
                    if (currentStationIndex > 0) openJourneyModal(currentStationIndex - 1);
                });
            }
            if (journeyModalNext) {
                journeyModalNext.addEventListener('click', () => {
                    if (currentStationIndex < totalStations - 1) openJourneyModal(currentStationIndex + 1);
                });
            }
            document.addEventListener('keydown', (e) => {
                if (!journeyModalOpen) return;
                if (e.key === 'Escape') {
                    e.preventDefault();
                    closeJourneyModal(true);
                    return;
                }
                if (e.key === 'Tab' && journeyModalPanel) {
                    const focusables = Array.from(
                        journeyModalPanel.querySelectorAll('button:not([disabled])')
                    ).filter((el) => el.offsetParent !== null);
                    if (focusables.length === 0) return;
                    const first = focusables[0];
                    const last = focusables[focusables.length - 1];
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            });
            // Leaving mobile viewport with an open sheet: close and restore scroll.
            const handleJourneyMediaChange = (ev) => {
                if (!ev.matches) closeJourneyModal(false);
            };
            if (typeof journeyMedia.addEventListener === 'function') {
                journeyMedia.addEventListener('change', handleJourneyMediaChange);
            } else if (typeof journeyMedia.addListener === 'function') {
                journeyMedia.addListener(handleJourneyMediaChange);
            }
        }

        // IntersectionObserver to sync active station as user scrolls naturally.
        // When several cards intersect the band at once (dense spacing, fast
        // scroll), activate only the one nearest the viewport center and apply
        // it once per frame so the active index can't flap back and forth.
        // Desktop only: mobile cards are display:none and the modal owns state.
        let cardObserver = null;
        if ('IntersectionObserver' in window) {
            let observerTicking = false;
            let latestEntries = [];

            function applyNearestStation() {
                observerTicking = false;
                if (isMobileJourney()) {
                    latestEntries = [];
                    return;
                }
                const viewportCenter = window.innerHeight / 2;
                let bestIdx = -1;
                let bestDistance = Infinity;

                latestEntries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const stationIdx = parseInt(entry.target.getAttribute('data-station') || '0', 10);
                    if (isNaN(stationIdx)) return;
                    const rect = entry.boundingClientRect;
                    const cardCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(cardCenter - viewportCenter);
                    if (distance < bestDistance) {
                        bestDistance = distance;
                        bestIdx = stationIdx;
                    }
                });

                latestEntries = [];
                if (bestIdx >= 0 && bestIdx !== currentStationIndex) {
                    currentStationIndex = bestIdx;
                    stationCards.forEach((card, i) => {
                        card.classList.toggle('active', i === bestIdx);
                    });
                    window.dispatchEvent(new CustomEvent('journey-set-station', {
                        detail: { index: bestIdx }
                    }));
                }
            }

            cardObserver = new IntersectionObserver((entries) => {
                if (isMobileJourney()) return;
                latestEntries = entries;
                if (!observerTicking) {
                    observerTicking = true;
                    window.requestAnimationFrame(applyNearestStation);
                }
            }, {
                root: null,
                rootMargin: '-20% 0px -40% 0px',
                threshold: 0.2
            });

            if (!isMobileJourney()) {
                stationCards.forEach((card) => cardObserver.observe(card));
            }
            const handleObserverMedia = (ev) => {
                if (!cardObserver) return;
                try { cardObserver.disconnect(); } catch (e) {}
                if (!ev.matches) {
                    stationCards.forEach((card) => cardObserver.observe(card));
                }
            };
            if (typeof journeyMedia.addEventListener === 'function') {
                journeyMedia.addEventListener('change', handleObserverMedia);
            } else if (typeof journeyMedia.addListener === 'function') {
                journeyMedia.addListener(handleObserverMedia);
            }
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
        { kicker: 'FAMILIARIZATION', title: '1. Hear the Space' },
        { kicker: 'CONGRUENT SCENE + AUDIO ONLY SCENE', title: '2. Baseline Gameplay' },
        { kicker: 'INCONGRUENT', title: '3. Audiovisual Conflict' }
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
            immersivePlay.innerHTML = video.paused
                ? '<i class="fa-solid fa-play" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-pause" aria-hidden="true"></i>';
            immersivePlay.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video');
        }
        if (immersiveMute) {
            immersiveMute.innerHTML = video.muted
                ? '<i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-volume-high" aria-hidden="true"></i>';
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
    const immersiveViewport = document.querySelector('.immersive-viewport');
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

