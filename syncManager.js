/**
 * PLACEMENTPREP - SYNC & ANALYTICS MANAGER (SyncManager)
 * Multi-device sync:
 * 1. Instant QR Code & Transfer Link (Zero setup, 100% reliable cross-device sync)
 * 2. Continuous Cloud Sync via free Firebase Realtime Database REST API
 * 3. Local offline resilience & instant caching
 * 4. Google Analytics (GA4 - G-8VNQVXVYBN) telemetry
 */

(function(window) {
    'use strict';

    const STORAGE_KEY_USER = 'prep_username';
    const STORAGE_KEY_DATA = 'prep_user_data_cache';
    const STORAGE_KEY_FIREBASE = 'prep_firebase_url';
    const DEFAULT_FIREBASE_URL = 'https://placementprep-acaf7-default-rtdb.asia-southeast1.firebasedatabase.app';

    // Default User Data Schema
    function createDefaultUserData(username) {
        return {
            username: username || 'guest',
            createdAt: new Date().toISOString(),
            lastSynced: new Date().toISOString(),
            stats: {
                totalAttempted: 0,
                totalCorrect: 0,
                streakDays: 1,
                lastActiveDate: new Date().toISOString().split('T')[0]
            },
            modules: {}
        };
    }

    class PlacementSyncManager {
        constructor() {
            this.username = localStorage.getItem(STORAGE_KEY_USER) || '';
            this.firebaseUrl = localStorage.getItem(STORAGE_KEY_FIREBASE) || DEFAULT_FIREBASE_URL;
            this.cache = this.loadLocalCache();
            this.isSyncing = false;
            this.cloudConnected = false;
            this.listeners = [];

            // Auto-detect incoming session transfer via ?sync= URL parameter
            this.checkUrlForSyncImport();

            // Auto-init GA4 and sync on startup if username exists
            if (this.username) {
                this.initGoogleAnalytics(this.username);
                this.checkAndUpdateStreak();
                if (this.firebaseUrl) {
                    this.pullFromCloud();
                }
            }
        }

        // ==========================================
        // 1. USERNAME & FIREBASE CONFIG
        // ==========================================
        getUsername() {
            return this.username;
        }

        getFirebaseUrl() {
            return this.firebaseUrl;
        }

        setFirebaseUrl(url) {
            let clean = (url || '').trim();
            if (clean && !clean.startsWith('http://') && !clean.startsWith('https://')) {
                clean = 'https://' + clean;
            }
            // Remove trailing slash
            clean = clean.replace(/\/+$/, '');
            this.firebaseUrl = clean;
            if (clean) {
                localStorage.setItem(STORAGE_KEY_FIREBASE, clean);
                this.pullFromCloud();
            } else {
                localStorage.removeItem(STORAGE_KEY_FIREBASE);
                this.cloudConnected = false;
            }
            this.notifyListeners();
            return clean;
        }

        async setUsername(newUsername) {
            const clean = (newUsername || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
            if (!clean || clean.length < 2) {
                throw new Error('Username must be at least 2 characters (letters, numbers, underscore).');
            }

            this.username = clean;
            localStorage.setItem(STORAGE_KEY_USER, clean);

            if (!this.cache) {
                this.cache = createDefaultUserData(clean);
            } else {
                this.cache.username = clean;
            }
            this.saveLocalCache(this.cache);

            // Notify GA4
            this.initGoogleAnalytics(clean);
            this.trackGAEvent('user_sync_login', {
                username: clean,
                login_time: new Date().toISOString()
            });

            // If Firebase URL is configured, pull & push
            if (this.firebaseUrl) {
                await this.pullFromCloud();
            }

            this.checkAndUpdateStreak();
            this.notifyListeners();
            return clean;
        }

        logout() {
            this.trackGAEvent('user_sync_logout', { username: this.username });
            this.username = '';
            localStorage.removeItem(STORAGE_KEY_USER);
            this.notifyListeners();
        }

        // ==========================================
        // 2. GOOGLE ANALYTICS (GA4) INTEGRATION
        // ==========================================
        initGoogleAnalytics(username) {
            if (typeof window.gtag === 'function') {
                try {
                    window.gtag('config', 'G-8VNQVXVYBN', { 'user_id': username });
                    window.gtag('set', 'user_properties', { 'app_username': username });
                } catch (e) {
                    console.warn('[SyncManager] GA4 config warning:', e);
                }
            }
        }

        trackGAEvent(eventName, eventParams = {}) {
            if (typeof window.gtag === 'function') {
                try {
                    const payload = {
                        username: this.username || 'guest',
                        ...eventParams
                    };
                    window.gtag('event', eventName, payload);
                } catch (e) {
                    // Fail silently
                }
            }
        }

        // ==========================================
        // 3. INSTANT QR CODE & TRANSFER SYSTEM
        // ==========================================
        exportTransferPayload() {
            if (!this.cache && !this.username) return '';
            const payload = {
                u: this.username || 'guest',
                s: this.cache?.stats || {},
                m: this.cache?.modules || {},
                fb: this.firebaseUrl || '',
                ts: Date.now()
            };
            try {
                const jsonStr = JSON.stringify(payload);
                return btoa(unescape(encodeURIComponent(jsonStr)));
            } catch (e) {
                console.error('[SyncManager] Payload encode error:', e);
                return '';
            }
        }

        importTransferPayload(base64Str) {
            try {
                const jsonStr = decodeURIComponent(escape(atob(base64Str.trim())));
                const payload = JSON.parse(jsonStr);
                if (!payload || !payload.u) throw new Error('Invalid transfer format');

                const incomingData = {
                    username: payload.u,
                    createdAt: new Date().toISOString(),
                    lastSynced: new Date().toISOString(),
                    stats: payload.s || { totalAttempted: 0, totalCorrect: 0, streakDays: 1, lastActiveDate: new Date().toISOString().split('T')[0] },
                    modules: payload.m || {}
                };

                // Merge incoming data with local cache (preserve union of answers/scores)
                const merged = this.mergeData(this.cache, incomingData);
                this.username = payload.u;
                localStorage.setItem(STORAGE_KEY_USER, payload.u);
                
                if (payload.fb) {
                    this.firebaseUrl = payload.fb;
                    localStorage.setItem(STORAGE_KEY_FIREBASE, payload.fb);
                }

                this.saveLocalCache(merged);
                this.initGoogleAnalytics(this.username);
                this.trackGAEvent('session_imported', { username: this.username });
                this.notifyListeners();

                return {
                    success: true,
                    username: payload.u,
                    attempted: merged.stats.totalAttempted,
                    correct: merged.stats.totalCorrect
                };
            } catch (err) {
                console.error('[SyncManager] Failed to import transfer payload:', err);
                return { success: false, error: err.message };
            }
        }

        getTransferUrl() {
            const payload = this.exportTransferPayload();
            if (!payload) return '';

            let baseUrl = window.location.origin + window.location.pathname;
            // If running on local filesystem (file://), target the public GitHub Pages deployment so phone can open it
            if (window.location.protocol === 'file:' || !window.location.origin || window.location.origin === 'null') {
                const isSubdir = window.location.pathname.includes('programming_fundamentals');
                baseUrl = 'https://dheerajdogra102003-create.github.io/placementPrep/' + (isSubdir ? 'programming_fundamentals/index.html' : 'index.html');
            }

            return `${baseUrl}?sync=${encodeURIComponent(payload)}`;
        }

        getQRCodeUrl() {
            const transferUrl = this.getTransferUrl();
            if (!transferUrl) return '';
            return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(transferUrl)}`;
        }

        checkUrlForSyncImport() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const syncData = urlParams.get('sync');
                if (syncData) {
                    const result = this.importTransferPayload(syncData);
                    if (result.success) {
                        // Strip query parameter cleanly from browser bar without reload
                        const cleanUrl = window.location.origin + window.location.pathname;
                        window.history.replaceState({}, document.title, cleanUrl);
                        this.showToast(`🎉 Session restored! Logged in as @${result.username} (${result.attempted} questions synced)`);
                    }
                }
            } catch (e) {
                console.warn('[SyncManager] URL sync check error:', e);
            }
        }

        // ==========================================
        // 4. CLOUD BACKEND (FIREBASE REALTIME DB)
        // ==========================================
        async pullFromCloud() {
            if (!this.username || !this.firebaseUrl) return;
            this.isSyncing = true;
            this.notifyListeners();

            try {
                const endpoint = `${this.firebaseUrl}/users/${encodeURIComponent(this.username)}.json`;
                const res = await fetch(endpoint, { method: 'GET' });

                if (res.ok) {
                    const cloudData = await res.json();
                    if (cloudData) {
                        const merged = this.mergeData(this.cache, cloudData);
                        this.saveLocalCache(merged);
                        this.cloudConnected = true;
                    } else {
                        // Document doesn't exist yet on cloud, push local
                        await this.pushToCloud();
                        this.cloudConnected = true;
                    }
                } else {
                    this.cloudConnected = false;
                }
            } catch (err) {
                console.warn('[SyncManager] Cloud pull error (operating offline):', err);
                this.cloudConnected = false;
            } finally {
                this.isSyncing = false;
                this.notifyListeners();
            }
        }

        async pushToCloud() {
            if (!this.username || !this.firebaseUrl || !this.cache) return;
            this.isSyncing = true;
            this.notifyListeners();

            try {
                const endpoint = `${this.firebaseUrl}/users/${encodeURIComponent(this.username)}.json`;
                this.cache.lastSynced = new Date().toISOString();

                const res = await fetch(endpoint, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.cache)
                });

                if (res.ok) {
                    this.cloudConnected = true;
                } else {
                    this.cloudConnected = false;
                }
            } catch (err) {
                console.warn('[SyncManager] Cloud push error:', err);
                this.cloudConnected = false;
            } finally {
                this.isSyncing = false;
                this.notifyListeners();
            }
        }

        // ==========================================
        // 5. CACHE & DATA MERGING
        // ==========================================
        loadLocalCache() {
            try {
                const stored = localStorage.getItem(STORAGE_KEY_DATA);
                return stored ? JSON.parse(stored) : createDefaultUserData(this.username);
            } catch (e) {
                return createDefaultUserData(this.username);
            }
        }

        saveLocalCache(data) {
            this.cache = data;
            try {
                localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
            } catch (e) {
                console.warn('[SyncManager] Local storage save warning', e);
            }
        }

        mergeData(local, incoming) {
            if (!local) return incoming;
            if (!incoming) return local;

            const merged = { ...local, ...incoming };
            const lStats = local.stats || {};
            const iStats = incoming.stats || {};

            merged.stats = {
                totalAttempted: Math.max(lStats.totalAttempted || 0, iStats.totalAttempted || 0),
                totalCorrect: Math.max(lStats.totalCorrect || 0, iStats.totalCorrect || 0),
                streakDays: Math.max(lStats.streakDays || 1, iStats.streakDays || 1),
                lastActiveDate: lStats.lastActiveDate || iStats.lastActiveDate || new Date().toISOString().split('T')[0]
            };

            // Deep merge modules
            merged.modules = { ...(local.modules || {}) };
            for (const [modId, modData] of Object.entries(incoming.modules || {})) {
                if (!modData) continue;

                // Normalize incoming answers if Firebase stored numeric keys as array
                let incAnswers = modData.answers || {};
                if (Array.isArray(incAnswers)) {
                    const ansObj = {};
                    incAnswers.forEach((val, idx) => {
                        if (val) ansObj[idx] = val;
                    });
                    incAnswers = ansObj;
                }

                if (!merged.modules[modId]) {
                    merged.modules[modId] = {
                        ...modData,
                        answers: incAnswers,
                        bookmarks: Array.isArray(modData.bookmarks) ? modData.bookmarks : []
                    };
                } else {
                    let localAnswers = merged.modules[modId].answers || {};
                    if (Array.isArray(localAnswers)) {
                        const ansObj = {};
                        localAnswers.forEach((val, idx) => {
                            if (val) ansObj[idx] = val;
                        });
                        localAnswers = ansObj;
                    }

                    merged.modules[modId].answers = {
                        ...localAnswers,
                        ...incAnswers
                    };

                    const bSet = new Set([
                        ...(merged.modules[modId].bookmarks || []),
                        ...(modData.bookmarks || [])
                    ]);
                    merged.modules[modId].bookmarks = [...bSet];

                    if (modData.bestExamScore) {
                        const prevScore = merged.modules[modId].bestExamScore?.score || 0;
                        if ((modData.bestExamScore.score || 0) >= prevScore) {
                            merged.modules[modId].bestExamScore = modData.bestExamScore;
                        }
                    }
                }
            }

            // Recalculate true global attempted & correct from modules
            let calcAttempted = 0;
            let calcCorrect = 0;
            for (const mod of Object.values(merged.modules)) {
                if (!mod || !mod.answers) continue;
                const ansList = Array.isArray(mod.answers) ? mod.answers.filter(Boolean) : Object.values(mod.answers);
                for (const ans of ansList) {
                    if (ans && (ans.selected !== undefined)) {
                        calcAttempted++;
                        if (ans.isCorrect) calcCorrect++;
                    }
                }
            }
            if (calcAttempted > 0) {
                merged.stats.totalAttempted = Math.max(merged.stats.totalAttempted, calcAttempted);
                merged.stats.totalCorrect = Math.max(merged.stats.totalCorrect, calcCorrect);
            }

            return merged;
        }

        // ==========================================
        // 6. STREAK & DATA RECORDING API
        // ==========================================
        checkAndUpdateStreak() {
            if (!this.cache) {
                this.cache = createDefaultUserData(this.username || 'guest');
            }

            const today = new Date().toISOString().split('T')[0];
            const lastDate = this.cache.stats.lastActiveDate;

            if (lastDate !== today) {
                const diffTime = Math.abs(new Date(today) - new Date(lastDate));
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    this.cache.stats.streakDays += 1;
                    this.trackGAEvent('streak_updated', { streak_days: this.cache.stats.streakDays });
                } else if (diffDays > 1) {
                    this.cache.stats.streakDays = 1;
                }
                this.cache.stats.lastActiveDate = today;
                this.saveLocalCache(this.cache);
                if (this.firebaseUrl) this.pushToCloud();
            }
        }

        recordAnswer(moduleId, questionId, details = {}) {
            if (!this.cache) {
                this.cache = createDefaultUserData(this.username || 'guest');
            }

            if (!this.cache.modules[moduleId]) {
                this.cache.modules[moduleId] = { answers: {}, bookmarks: [] };
            }

            const isNewAttempt = !this.cache.modules[moduleId].answers[questionId];
            this.cache.modules[moduleId].answers[questionId] = {
                selected: details.selected,
                isCorrect: details.isCorrect,
                answeredAt: new Date().toISOString()
            };

            if (isNewAttempt) {
                this.cache.stats.totalAttempted += 1;
                if (details.isCorrect) {
                    this.cache.stats.totalCorrect += 1;
                }
            }

            this.saveLocalCache(this.cache);

            // GA4 Event Tracking
            this.trackGAEvent('question_answered', {
                module: moduleId,
                question_id: questionId,
                track: details.track || 'General',
                language: details.language || 'Core',
                difficulty: details.difficulty || 'Medium',
                is_correct: details.isCorrect ? 1 : 0
            });

            // Push to Firebase if configured
            if (this.firebaseUrl) {
                this.debounceCloudPush();
            }
            this.notifyListeners();
        }

        recordExamResult(moduleId, resultData = {}) {
            if (!this.cache) {
                this.cache = createDefaultUserData(this.username || 'guest');
            }

            if (!this.cache.modules[moduleId]) {
                this.cache.modules[moduleId] = { answers: {}, bookmarks: [] };
            }

            this.cache.modules[moduleId].bestExamScore = {
                score: resultData.score,
                total: resultData.total,
                accuracy: resultData.accuracy,
                date: new Date().toISOString()
            };

            this.saveLocalCache(this.cache);

            this.trackGAEvent('exam_completed', {
                module: moduleId,
                score: resultData.score,
                total_questions: resultData.total,
                accuracy_pct: resultData.accuracy,
                time_taken: resultData.timeTaken || '00:00'
            });

            if (this.firebaseUrl) this.pushToCloud();
            this.notifyListeners();
        }

        toggleBookmark(moduleId, questionId) {
            if (!this.cache) {
                this.cache = createDefaultUserData(this.username || 'guest');
            }

            if (!this.cache.modules[moduleId]) {
                this.cache.modules[moduleId] = { answers: {}, bookmarks: [] };
            }

            const bm = this.cache.modules[moduleId].bookmarks || [];
            const idx = bm.indexOf(questionId);
            let isBookmarked = false;

            if (idx > -1) {
                bm.splice(idx, 1);
            } else {
                bm.push(questionId);
                isBookmarked = true;
            }

            this.cache.modules[moduleId].bookmarks = bm;
            this.saveLocalCache(this.cache);

            this.trackGAEvent('bookmark_toggled', {
                module: moduleId,
                question_id: questionId,
                bookmarked: isBookmarked ? 1 : 0
            });

            if (this.firebaseUrl) this.debounceCloudPush();
            this.notifyListeners();
            return isBookmarked;
        }

        getModuleData(moduleId) {
            if (!this.cache || !this.cache.modules || !this.cache.modules[moduleId]) {
                return { answers: {}, bookmarks: [], bestExamScore: null };
            }
            return this.cache.modules[moduleId];
        }

        getGlobalStats() {
            if (!this.cache) {
                return { attempted: 0, correct: 0, accuracy: 0, streak: 1, modulesCompleted: 0 };
            }

            const attempted = this.cache.stats?.totalAttempted || 0;
            const correct = this.cache.stats?.totalCorrect || 0;
            const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
            const streak = this.cache.stats?.streakDays || 1;

            let completedMods = 0;
            for (const mod of Object.values(this.cache.modules || {})) {
                if (mod.bestExamScore || Object.keys(mod.answers || {}).length >= 15) {
                    completedMods++;
                }
            }

            return { attempted, correct, accuracy, streak, modulesCompleted: completedMods };
        }

        // ==========================================
        // 7. OBSERVER & TOAST NOTIFICATIONS
        // ==========================================
        subscribe(callback) {
            if (typeof callback === 'function') {
                this.listeners.push(callback);
            }
            return () => {
                this.listeners = this.listeners.filter(l => l !== callback);
            };
        }

        notifyListeners() {
            this.listeners.forEach(fn => {
                try { fn(this); } catch(e) { console.error(e); }
            });
        }

        debounceCloudPush() {
            clearTimeout(this._pushTimeout);
            this._pushTimeout = setTimeout(() => {
                this.pushToCloud();
            }, 2500);
        }

        showToast(message) {
            let toast = document.getElementById('sync-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'sync-toast';
                toast.style.cssText = `
                    position: fixed;
                    bottom: 24px;
                    left: 50%;
                    transform: translateX(-50%) translateY(100px);
                    background: #0F172A;
                    color: #FFFFFF;
                    padding: 12px 24px;
                    border-radius: 9999px;
                    font-size: 0.92rem;
                    font-weight: 600;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                    pointer-events: none;
                `;
                document.body.appendChild(toast);
            }
            toast.textContent = message;
            requestAnimationFrame(() => {
                toast.style.transform = 'translateX(-50%) translateY(0)';
            });
            clearTimeout(this._toastTimeout);
            this._toastTimeout = setTimeout(() => {
                toast.style.transform = 'translateX(-50%) translateY(100px)';
            }, 4500);
        }
    }

    // Expose global instance
    window.SyncManager = new PlacementSyncManager();

})(window);
