document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization & toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 
                           localStorage.getItem('placementprep-theme') || 
                           localStorage.getItem('theme') || 
                           localStorage.getItem('prep_theme') || 
                           'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', nextTheme);
                localStorage.setItem('placementPrep_theme', nextTheme);
                localStorage.setItem('placementprep-theme', nextTheme);
                localStorage.setItem('theme', nextTheme);
                localStorage.setItem('prep_theme', nextTheme);
            });
        }
    }
    initTheme();

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

    // Modal Elements
    const syncCloudStatusBadge = document.getElementById('sync-cloud-status-badge');

    function refreshModalData() {
        if (!window.SyncManager) return;
        const currentUsername = window.SyncManager.getUsername();
        if (syncUsernameInput) syncUsernameInput.value = currentUsername;

        // Cloud status badge
        if (syncCloudStatusBadge) {
            if (window.SyncManager.cloudConnected) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟢 Cloud Connected';
            } else if (currentUsername) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟡 Syncing...';
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

    if (navSyncBtn && syncModal) {
        navSyncBtn.addEventListener('click', openSyncModal);

        if (btnCloseSync) {
            btnCloseSync.addEventListener('click', () => {
                syncModal.classList.add('hidden');
                sessionStorage.setItem('prep_sync_prompted', 'true');
            });
        }

        // Close on outside click
        syncModal.addEventListener('click', (e) => {
            if (e.target === syncModal) {
                syncModal.classList.add('hidden');
                sessionStorage.setItem('prep_sync_prompted', 'true');
            }
        });

        // Form Submit: Set Username
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
                    sessionStorage.setItem('prep_sync_prompted', 'true');
                    updateDashboardUI();
                    window.SyncManager.showToast(`Saved as @${username}!`);
                } catch (err) {
                    if (syncModalError) {
                        syncModalError.textContent = err.message || 'Error saving user';
                        syncModalError.classList.remove('hidden');
                    }
                } finally {
                    if (saveBtn) saveBtn.textContent = 'Save';
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

        // Prompt new users on first visit if not logged in
        if (!window.SyncManager.getUsername() && !sessionStorage.getItem('prep_sync_prompted')) {
            setTimeout(() => {
                openSyncModal();
            }, 650);
        }
    }
});
