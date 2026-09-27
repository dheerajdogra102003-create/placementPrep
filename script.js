/**
 * PlacementPrep - Ultra-Modern Visual & Interactive Engine
 * Features:
 *   - Constellation Node Particle Canvas with Dynamic Physics & Mouse Attraction
 *   - Dynamic 3D Perspective Tilt & Mouse Spotlight Sheen
 *   - Real-Time Module Search & Multi-Category Filtering (Ctrl + K)
 *   - Animated Performance Telemetry Counters
 *   - Smooth Custom Cursor Physics
 *   - Seamless SyncManager & Theme Management
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // =========================================================================
    // 1. DYNAMIC CONSTELLATION & PARTICLE VISUAL CANVAS
    // =========================================================================
    const canvas = document.getElementById('webgl-canvas');
    if (canvas && !prefersReducedMotion) {
        initParticleCanvas(canvas);
    }

    function initParticleCanvas(cvs) {
        const ctx = cvs.getContext('2d');
        if (!ctx) return;

        let width = cvs.width = window.innerWidth;
        let height = cvs.height = window.innerHeight;

        let mouse = { x: width * 0.5, y: height * 0.3, active: false, radius: 140 };

        window.addEventListener('resize', () => {
            width = cvs.width = window.innerWidth;
            height = cvs.height = window.innerHeight;
            initParticles();
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        });

        window.addEventListener('mouseleave', () => {
            mouse.active = false;
        });

        // Particle System Configuration
        let particles = [];
        const particleCount = Math.min(Math.floor((width * height) / 14000), 75);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.55;
                this.vy = (Math.random() - 0.5) * 0.55;
                this.radius = Math.random() * 2 + 1;
                this.baseAlpha = Math.random() * 0.45 + 0.2;
                this.color = Math.random() > 0.4 ? '255, 42, 85' : (Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212');
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Screen bounce
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                if (mouse.active) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        this.x -= Math.cos(angle) * force * 2.2;
                        this.y -= Math.sin(angle) * force * 2.2;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.baseAlpha})`;
                ctx.shadowColor = `rgba(${this.color}, 0.8)`;
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        let animId;
        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby particles with glowing lines
            const maxDistance = 145;
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const lineAlpha = (1 - dist / maxDistance) * 0.18;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 42, 85, ${lineAlpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(animate);
        }
        animate();

        // Pause animation when tab is inactive to save battery
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animId);
            } else {
                animate();
            }
        });
    }

    // =========================================================================
    // 2. DYNAMIC 3D PERSPECTIVE TILT & SPOTLIGHT SHEEN
    // =========================================================================
    if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const interactiveCards = document.querySelectorAll('.module-card, .qp-card, .stat-card, .bento-card, .recommended-card');

        interactiveCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotX = ((y - centerY) / centerY) * -5.5;
                const rotY = ((x - centerX) / centerX) * 5.5;

                card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px) scale3d(1.012, 1.012, 1.012)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // =========================================================================
    // 3. CUSTOM TRAILING CURSOR (Desktop Only)
    // =========================================================================
    const cursor = document.getElementById('custom-cursor');
    if (cursor && !prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const dot = cursor.querySelector('.cursor-dot');
        const ring = cursor.querySelector('.cursor-ring');

        let targetX = -100, targetY = -100;
        let ringX = -100, ringY = -100;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (dot) {
                dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
            }
        });

        function animateRing() {
            ringX += (targetX - ringX) * 0.18;
            ringY += (targetY - ringY) * 0.18;
            if (ring) {
                ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            }
            requestAnimationFrame(animateRing);
        }
        animateRing();

        const hoverTargets = document.querySelectorAll('a, button, .module-card, .qp-card, .stat-card, .bento-card, input');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    }

    // =========================================================================
    // 4. NAVBAR SCROLL ENHANCEMENT
    // =========================================================================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 25) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // =========================================================================
    // 5. REAL-TIME MODULE SEARCH & CATEGORY FILTERING
    // =========================================================================
    const heroSearchInput = document.getElementById('hero-module-search');
    const matrixSearchInput = document.getElementById('module-filter-input');
    const categoryTabs = document.querySelectorAll('.cat-tab');
    const moduleCards = document.querySelectorAll('.module-card');

    let currentCategory = 'all';
    let currentQuery = '';

    function filterModules() {
        const query = currentQuery.toLowerCase().trim();

        moduleCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category') || '';
            const cardKeywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText;
            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesQuery = !query || cardKeywords.toLowerCase().includes(query);

            if (matchesCategory && matchesQuery) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Category Tabs click
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-category') || 'all';
            filterModules();
        });
    });

    // Search input sync
    function handleSearchInput(e) {
        currentQuery = e.target.value;
        if (heroSearchInput && e.target !== heroSearchInput) heroSearchInput.value = currentQuery;
        if (matrixSearchInput && e.target !== matrixSearchInput) matrixSearchInput.value = currentQuery;
        filterModules();
    }

    if (heroSearchInput) {
        heroSearchInput.addEventListener('input', handleSearchInput);
        heroSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const modulesSec = document.getElementById('modules');
                if (modulesSec) modulesSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (matrixSearchInput) {
        matrixSearchInput.addEventListener('input', handleSearchInput);
    }

    // Keyboard shortcut: Ctrl + K or '/' to focus search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
            e.preventDefault();
            if (heroSearchInput) {
                heroSearchInput.focus();
                heroSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // =========================================================================
    // 6. THEME TOGGLE (Dark / Light)
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'dark';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', nextTheme);
                localStorage.setItem('placementPrep_theme', nextTheme);
                localStorage.setItem('placementprep-theme', nextTheme);
                localStorage.setItem('theme', nextTheme);
            });
        }
    }
    initTheme();

    // =========================================================================
    // 7. MOBILE NAVIGATION OVERLAY
    // =========================================================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // =========================================================================
    // 8. QUICK PRACTICE INTERACTION
    // =========================================================================
    const qpCards = document.querySelectorAll('.qp-card');
    qpCards.forEach(card => {
        card.addEventListener('click', () => {
            const modulesSection = document.getElementById('modules');
            if (modulesSection) {
                modulesSection.scrollIntoView({ behavior: 'smooth' });
                // Briefly highlight first 2 coding modules
                const firstCard = document.querySelector('.module-card');
                if (firstCard) {
                    firstCard.style.outline = '2px solid var(--accent-red)';
                    setTimeout(() => { firstCard.style.outline = 'none'; }, 1600);
                }
            }
        });
    });

    // =========================================================================
    // 9. SYNC MANAGER & USER TELEMETRY
    // =========================================================================
    const navSyncBtn = document.getElementById('nav-sync-btn');
    const navSyncText = document.getElementById('nav-sync-text');
    const calloutSyncBtn = document.getElementById('callout-sync-btn');
    const syncModal = document.getElementById('sync-modal');
    const syncForm = document.getElementById('sync-form');
    const syncUsernameInput = document.getElementById('sync-username-input');
    const syncModalError = document.getElementById('sync-modal-error');
    const btnCloseSync = document.getElementById('btn-close-sync');
    const btnLogoutSync = document.getElementById('btn-logout-sync');
    const syncLogoutArea = document.getElementById('sync-logout-area');
    const syncCloudStatusBadge = document.getElementById('sync-cloud-status-badge');

    // Stats
    const statAttempted = document.getElementById('stat-attempted');
    const statCorrect = document.getElementById('stat-correct');
    const statAccuracy = document.getElementById('stat-accuracy');
    const statStreak = document.getElementById('stat-streak');
    const statCompleted = document.getElementById('stat-completed');

    function animateNumber(el, targetVal, isPct = false) {
        if (!el) return;
        const current = parseInt(el.textContent) || 0;
        const target = parseInt(targetVal) || 0;
        if (target === current) {
            el.textContent = isPct ? `${target}%` : target;
            return;
        }

        const duration = 800;
        const startTime = performance.now();

        function updateCount(time) {
            const progress = Math.min((time - startTime) / duration, 1);
            const val = Math.floor(current + (target - current) * progress);
            el.textContent = isPct ? `${val}%` : val;
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        }
        requestAnimationFrame(updateCount);
    }

    function updateDashboardUI() {
        if (!window.SyncManager) return;

        const username = window.SyncManager.getUsername();
        const stats = window.SyncManager.getGlobalStats();

        // Update Navbar button
        if (navSyncBtn && navSyncText) {
            if (username) {
                navSyncText.textContent = `@${username}`;
                navSyncBtn.classList.add('synced');
                navSyncBtn.title = `Synced across devices as @${username}`;
            } else {
                navSyncText.textContent = 'Sync Progress';
                navSyncBtn.classList.remove('synced');
                navSyncBtn.title = 'Click to sync your progress across devices';
            }
        }

        // Animated stats
        animateNumber(statAttempted, stats.attempted);
        animateNumber(statCorrect, stats.correct);
        animateNumber(statAccuracy, stats.accuracy, true);
        animateNumber(statStreak, stats.streak);
        animateNumber(statCompleted, stats.modulesCompleted);
    }

    function refreshModalData() {
        if (!window.SyncManager) return;
        const currentUsername = window.SyncManager.getUsername();
        if (syncUsernameInput) syncUsernameInput.value = currentUsername;

        if (syncCloudStatusBadge) {
            if (window.SyncManager.cloudConnected) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟢 Cloud Connected';
            } else if (currentUsername) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟡 Cloud Sync Active';
            } else {
                syncCloudStatusBadge.className = 'sync-status-badge local';
                syncCloudStatusBadge.textContent = '☁️ Cloud Ready';
            }
        }

        if (syncLogoutArea) {
            if (currentUsername) syncLogoutArea.classList.remove('hidden');
            else syncLogoutArea.classList.add('hidden');
        }
    }

    function openSyncModal() {
        if (!syncModal) return;
        refreshModalData();
        if (syncModalError) {
            syncModalError.classList.add('hidden');
            syncModalError.textContent = '';
        }
        syncModal.classList.remove('hidden');
    }

    if (navSyncBtn) navSyncBtn.addEventListener('click', openSyncModal);
    if (calloutSyncBtn) calloutSyncBtn.addEventListener('click', openSyncModal);

    if (btnCloseSync) {
        btnCloseSync.addEventListener('click', () => {
            syncModal.classList.add('hidden');
        });
    }

    if (syncModal) {
        syncModal.addEventListener('click', (e) => {
            if (e.target === syncModal) {
                syncModal.classList.add('hidden');
            }
        });
    }

    if (syncForm) {
        syncForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = syncUsernameInput.value.trim();
            const saveBtn = document.getElementById('btn-save-sync');

            try {
                if (saveBtn) saveBtn.textContent = 'Saving...';
                if (window.SyncManager) {
                    await window.SyncManager.setUsername(username);
                }
                syncModal.classList.add('hidden');
                updateDashboardUI();
                if (window.SyncManager) window.SyncManager.showToast(`Saved & synced as @${username}!`);
            } catch (err) {
                if (syncModalError) {
                    syncModalError.textContent = err.message || 'Error saving user';
                    syncModalError.classList.remove('hidden');
                }
            } finally {
                if (saveBtn) saveBtn.textContent = 'Save & Connect';
            }
        });
    }

    if (btnLogoutSync) {
        btnLogoutSync.addEventListener('click', () => {
            if (window.SyncManager) {
                window.SyncManager.logout();
            }
            syncModal.classList.add('hidden');
            updateDashboardUI();
        });
    }

    if (window.SyncManager) {
        window.SyncManager.subscribe(() => {
            updateDashboardUI();
        });
        updateDashboardUI();
    }

    // =========================================================================
    // 10. HERO READINESS MATRIX - SIMULATED LIVE STUDENT COUNTER
    // =========================================================================
    initHeroReadinessCounter();

    function initHeroReadinessCounter() {
        const liveCountEl = document.getElementById('hero-live-count');
        if (!liveCountEl) return;

        let currentCount = 1248;
        setInterval(() => {
            // Gentle fluctuation between 1,230 and 1,270
            const delta = Math.floor(Math.random() * 5) - 2;
            currentCount = Math.max(1230, Math.min(1270, currentCount + delta));
            liveCountEl.textContent = currentCount.toLocaleString();
        }, 3500);
    }
});
