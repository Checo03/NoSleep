// NoSleep Studio - Main JavaScript
// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('NoSleep Studio loaded');

    // ── Page Loader ─────────────────────────────────────────────
    const loader = document.getElementById('page-loader');
    if (loader) {
        const MIN_DURATION = 1200;
        const startTime = Date.now();

        function hideLoader() {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, MIN_DURATION - elapsed);
            setTimeout(function () {
                loader.classList.add('loader-hidden');
            }, remaining);
        }

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader);
        }
    }

    // ── Scroll Reveal con IntersectionObserver ──────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target); // solo una vez
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── Hamburger menu toggle ───────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navLeft = document.querySelector('.nav-left');
    if (hamburger && navLeft) {
        hamburger.addEventListener('click', function() {
            const isOpen = navLeft.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });
    }

    // ── Ícono de búsqueda ───────────────────────────────────────
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            console.log('Search clicked');
        });
    }

    // ── Header shrink on scroll ─────────────────────────────────
    const headerEl = document.querySelector('.header');
    function onScrollHeader() {
        if (headerEl) headerEl.classList.toggle('shrunk', window.scrollY > 30);
    }
    window.addEventListener('scroll', onScrollHeader, { passive: true });

    // ── Smooth scroll ───────────────────────────────────────────
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // ── Carrusel Proyectos ───────────────────────────────────
    const track    = document.getElementById('carruselTrack');
    const dots     = document.querySelectorAll('.dot');
    const prevBtn  = document.getElementById('prevSlide');
    const nextBtn  = document.getElementById('nextSlide');

    if (track) {
        const slides   = track.querySelectorAll('.carrusel-slide');
        const total    = slides.length;
        let current    = 0;
        let autoTimer;

        function goTo(index) {
            current = (index + total) % total;
            track.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
        }

        function startAuto() {
            autoTimer = setInterval(() => goTo(current + 1), 4000);
        }

        function resetAuto() {
            clearInterval(autoTimer);
            startAuto();
        }

        prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
        nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
        dots.forEach(dot => {
            dot.addEventListener('click', () => { goTo(+dot.dataset.index); resetAuto(); });
        });

        // Swipe en mobile
        let touchStartX = 0;
        track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        track.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) { diff > 0 ? goTo(current + 1) : goTo(current - 1); resetAuto(); }
        });

        startAuto();
    }
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLeft && navLeft.classList.remove('nav-open');
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

