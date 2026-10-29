/**
 * Innova Medical Case Study
 * Interactive Spatial Affordance Master-Detail Selector
 */
document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.affordance-card'));
    const radios = Array.from(document.querySelectorAll('.affordance-radio'));

    if (!cards.length || !radios.length) return;

    // Synchronize ARIA state when radio changes
    function syncAria(selectedId) {
        cards.forEach(card => {
            const isMatch = card.getAttribute('for') === selectedId;
            card.setAttribute('aria-selected', isMatch ? 'true' : 'false');
            card.setAttribute('tabindex', isMatch ? '0' : '-1');
        });

        radios.forEach((radio, index) => {
            const panel = document.getElementById(`affordance-panel-${index + 1}`);
            if (panel) {
                panel.setAttribute('aria-hidden', radio.checked ? 'false' : 'true');
            }
        });
    }

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                syncAria(radio.id);
            }
        });
    });

    // Keyboard navigation (Enter, Space, Arrow keys)
    cards.forEach((card, index) => {
        card.addEventListener('keydown', (e) => {
            let targetIndex = null;

            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                const radioId = card.getAttribute('for');
                const radio = document.getElementById(radioId);
                if (radio && !radio.checked) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change', { bubbles: true }));
                }
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                targetIndex = (index + 1) % cards.length;
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                targetIndex = (index - 1 + cards.length) % cards.length;
            }

            if (targetIndex !== null) {
                const targetCard = cards[targetIndex];
                const radioId = targetCard.getAttribute('for');
                const radio = document.getElementById(radioId);
                if (radio) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change', { bubbles: true }));
                    targetCard.focus();
                }
            }
        });
    });

    // Initial ARIA sync
    const initialChecked = radios.find(r => r.checked) || radios[0];
    if (initialChecked) {
        syncAria(initialChecked.id);
    }

    // Section Scroll Reveal Transition
    const sections = Array.from(document.querySelectorAll('.case-section'));
    if (sections.length && 'IntersectionObserver' in window) {
        document.documentElement.classList.add('js-reveal');
        const sectionObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.05
        });
        sections.forEach(sec => sectionObserver.observe(sec));
    }
});
