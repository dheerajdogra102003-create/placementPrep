document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
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

    // Scroll reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add slight stagger effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.module-card, .qp-card, .stat-card, .recommended-card');
    animatedElements.forEach(el => observer.observe(el));

    // ==========================================
    // SYNC MANAGER & USER PROFILE CONTROLLER
    // ==========================================
    const navSyncBtn = document.getElementById('nav-sync-btn');
    const navSyncText = document.getElementById('nav-sync-text');
    const syncModal = document.getElementById('sync-modal');
    const syncForm = document.getElementById('sync-form');
    const syncUsernameInput = document.getElementById('sync-username-input');
    const syncModalError = document.getElementById('sync-modal-error');
    const btnCloseSync = document.getElementById('btn-close-sync');
    const btnLogoutSync = document.getElementById('btn-logout-sync');
    const syncLogoutArea = document.getElementById('sync-logout-area');

    // Dashboard Stats Elements
    const statAttempted = document.getElementById('stat-attempted');
    const statCorrect = document.getElementById('stat-correct');
    const statAccuracy = document.getElementById('stat-accuracy');
    const statStreak = document.getElementById('stat-streak');
    const statCompleted = document.getElementById('stat-completed');

    function updateDashboardUI() {
        if (!window.SyncManager) return;

        const username = window.SyncManager.getUsername();
        const stats = window.SyncManager.getGlobalStats();

        // Update Navbar button
        if (navSyncBtn && navSyncText) {
            if (username) {
                navSyncText.textContent = username;
                navSyncBtn.classList.add('synced');
                navSyncBtn.title = `Synced across devices as @${username}`;
            } else {
                navSyncText.textContent = 'Sync Progress';
                navSyncBtn.classList.remove('synced');
                navSyncBtn.title = 'Click to sync your progress across devices';
            }
        }

        // Update Stats values dynamically
        if (statAttempted) statAttempted.textContent = stats.attempted;
        if (statCorrect) statCorrect.textContent = stats.correct;
        if (statAccuracy) statAccuracy.textContent = `${stats.accuracy}%`;
        if (statStreak) statStreak.textContent = stats.streak;
        if (statCompleted) statCompleted.textContent = stats.modulesCompleted;
    }

    // Modal Interaction
    if (navSyncBtn && syncModal) {
        navSyncBtn.addEventListener('click', () => {
            const currentUsername = window.SyncManager ? window.SyncManager.getUsername() : '';
            if (syncUsernameInput) {
                syncUsernameInput.value = currentUsername;
            }
            if (syncModalError) {
                syncModalError.classList.add('hidden');
                syncModalError.textContent = '';
            }

            if (currentUsername) {
                if (syncLogoutArea) syncLogoutArea.classList.remove('hidden');
            } else {
                if (syncLogoutArea) syncLogoutArea.classList.add('hidden');
            }

            syncModal.classList.remove('hidden');
            if (syncUsernameInput) syncUsernameInput.focus();
        });

        if (btnCloseSync) {
            btnCloseSync.addEventListener('click', () => {
                syncModal.classList.add('hidden');
            });
        }

        // Close on outside click
        syncModal.addEventListener('click', (e) => {
            if (e.target === syncModal) {
                syncModal.classList.add('hidden');
            }
        });

        // Form Submit: Set Username
        if (syncForm) {
            syncForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const username = syncUsernameInput.value.trim();
                const saveBtn = document.getElementById('btn-save-sync');

                try {
                    if (saveBtn) saveBtn.textContent = 'Syncing...';
                    if (window.SyncManager) {
                        await window.SyncManager.setUsername(username);
                    }
                    syncModal.classList.add('hidden');
                    updateDashboardUI();
                } catch (err) {
                    if (syncModalError) {
                        syncModalError.textContent = err.message || 'Error syncing username';
                        syncModalError.classList.remove('hidden');
                    }
                } finally {
                    if (saveBtn) saveBtn.textContent = 'Sync & Continue';
                }
            });
        }

        // Logout/Disconnect
        if (btnLogoutSync) {
            btnLogoutSync.addEventListener('click', () => {
                if (window.SyncManager) {
                    window.SyncManager.logout();
                }
                syncModal.classList.add('hidden');
                updateDashboardUI();
            });
        }
    }

    // Subscribe to SyncManager changes
    if (window.SyncManager) {
        window.SyncManager.subscribe(() => {
            updateDashboardUI();
        });
        updateDashboardUI();
    }
});
