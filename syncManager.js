/**
 * PLACEMENTPREP - SYNC & ANALYTICS MANAGER (SyncManager)
 * Multi-device cloud sync with zero-friction username-only login
 * Google Analytics (GA4) user tracking & custom learning events
 */

(function(window) {
    'use strict';

    // Cloud KV endpoint namespace (Free HTTPS Key-Value storage, no setup required)
    // Custom namespace bucket to keep PlacementPrep users isolated
    const CLOUD_NAMESPACE = 'pprep_v1';
    const CLOUD_API_BASE = 'https://kvdb.io/A4xQ4c6nvyE99Q4R2Gf6Zt/'; // Free public bucket

    const STORAGE_KEY_USER = 'prep_username';
    const STORAGE_KEY_DATA = 'prep_user_data_cache';

    // Default User Data Schema
    function createDefaultUserData(username) {
        return {
            username: username,
            createdAt: new Date().toISOString(),
            lastSynced: new Date().toISOString(),
            stats: {
                totalAttempted: 0,
                totalCorrect: 0,
                streakDays: 1,
                lastActiveDate: new Date().toISOString().split('T')[0]
            },
            modules: {
                // e.g. programming_fundamentals: { answers: {}, bookmarks: [], bestExamScore: null }
            }
        };
    }

    class PlacementSyncManager {
        constructor() {
            this.username = localStorage.getItem(STORAGE_KEY_USER) || '';
            this.cache = this.loadLocalCache();
            this.isSyncing = false;
            this.listeners = [];

            // Auto-init GA4 and sync on startup if username exists
            if (this.username) {
                this.initGoogleAnalytics(this.username);
                this.checkAndUpdateStreak();
                this.pullFromCloud();
            }
        }

        // ==========================================
        // 1. USERNAME MANAGEMENT
        // ==========================================
        getUsername() {
            return this.username;
        }

        async setUsername(newUsername) {
            const clean = (newUsername || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
            if (!clean || clean.length < 2) {
                throw new Error('Username must be at least 2 characters (letters, numbers, underscore).');
            }

            this.username = clean;
            localStorage.setItem(STORAGE_KEY_USER, clean);

            // Notify GA4
            this.initGoogleAnalytics(clean);
            this.trackGAEvent('user_sync_login', {
                username: clean,
                login_time: new Date().toISOString()
            });

            // Fetch cloud data for this username, or init fresh
            await this.pullFromCloud();
            this.checkAndUpdateStreak();
            this.notifyListeners();
            return clean;
        }

        logout() {
            this.trackGAEvent('user_sync_logout', { username: this.username });
            this.username = '';
            localStorage.removeItem(STORAGE_KEY_USER);
            localStorage.removeItem(STORAGE_KEY_DATA);
            this.cache = null;
            this.notifyListeners();
        }

        // ==========================================
        // 2. GOOGLE ANALYTICS (GA4) INTEGRATION
        // ==========================================
        initGoogleAnalytics(username) {
            if (typeof window.gtag === 'function') {
                try {
                    // Set GA4 User ID for cross-device reporting
                    window.gtag('config', 'G-8VNQVXVYBN', {
                        'user_id': username
                    });

                    // Set persistent User Property
                    window.gtag('set', 'user_properties', {
                        'app_username': username
                    });
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
        // 3. CLOUD SYNC ENGINE (HTTPS KEY-VALUE)
        // ==========================================
        loadLocalCache() {
            try {
                const stored = localStorage.getItem(STORAGE_KEY_DATA);
                return stored ? JSON.parse(stored) : null;
            } catch (e) {
                return null;
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

        async pullFromCloud() {
            if (!this.username) return;
            this.isSyncing = true;
            this.notifyListeners();

            try {
                const key = `${CLOUD_NAMESPACE}_${this.username}`;
                const res = await fetch(`${CLOUD_API_BASE}${key}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });

                if (res.ok) {
                    const cloudData = await res.json();
                    if (cloudData && cloudData.username === this.username) {
                        // Merge cloud data with local cache (preserve higher scores/answers)
                        const merged = this.mergeData(this.cache, cloudData);
                        this.saveLocalCache(merged);
                    }
                } else if (res.status === 404) {
                    // New user on cloud - save current or default
                    if (!this.cache) {
                        this.saveLocalCache(createDefaultUserData(this.username));
                    }
                    await this.pushToCloud();
                }
            } catch (err) {
                // Offline fallback: Use local cache without blocking user
                if (!this.cache) {
                    this.saveLocalCache(createDefaultUserData(this.username));
                }
            } finally {
                this.isSyncing = false;
                this.notifyListeners();
            }
        }

        async pushToCloud() {
            if (!this.username || !this.cache) return;
            this.isSyncing = true;
            this.notifyListeners();

            try {
                const key = `${CLOUD_NAMESPACE}_${this.username}`;
                this.cache.lastSynced = new Date().toISOString();

                await fetch(`${CLOUD_API_BASE}${key}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.cache)
                });
            } catch (err) {
                // Offline fallback: will sync on next pull/push
            } finally {
                this.isSyncing = false;
                this.notifyListeners();
            }
        }

        mergeData(local, cloud) {
            if (!local) return cloud;
            if (!cloud) return local;

            const merged = { ...cloud, ...local };
            merged.stats = {
                totalAttempted: Math.max(local.stats?.totalAttempted || 0, cloud.stats?.totalAttempted || 0),
                totalCorrect: Math.max(local.stats?.totalCorrect || 0, cloud.stats?.totalCorrect || 0),
                streakDays: Math.max(local.stats?.streakDays || 1, cloud.stats?.streakDays || 1),
                lastActiveDate: local.stats?.lastActiveDate || cloud.stats?.lastActiveDate || new Date().toISOString().split('T')[0]
            };

            // Merge modules
            merged.modules = { ...(cloud.modules || {}) };
            for (const [modId, modData] of Object.entries(local.modules || {})) {
                if (!merged.modules[modId]) {
                    merged.modules[modId] = modData;
                } else {
                    merged.modules[modId].answers = {
                        ...(merged.modules[modId].answers || {}),
                        ...(modData.answers || {})
                    };
                    const bSet = new Set([...(merged.modules[modId].bookmarks || []), ...(modData.bookmarks || [])]);
                    merged.modules[modId].bookmarks = [...bSet];
                    if (modData.bestExamScore) {
                        merged.modules[modId].bestExamScore = modData.bestExamScore;
                    }
                }
            }

            return merged;
        }

        // ==========================================
        // 4. STATS & PROGRESS TRACKING API
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
                    this.trackGAEvent('streak_updated', {
                        streak_days: this.cache.stats.streakDays
                    });
                } else if (diffDays > 1) {
                    this.cache.stats.streakDays = 1;
                }
                this.cache.stats.lastActiveDate = today;
                this.saveLocalCache(this.cache);
                this.pushToCloud();
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

            // Global stats
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

            // Debounced push to cloud
            this.debounceCloudPush();
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

            // GA4 Event Tracking
            this.trackGAEvent('exam_completed', {
                module: moduleId,
                score: resultData.score,
                total_questions: resultData.total,
                accuracy_pct: resultData.accuracy,
                time_taken: resultData.timeTaken || '00:00'
            });

            this.pushToCloud();
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

            this.debounceCloudPush();
            this.notifyListeners();
            return isBookmarked;
        }

        getModuleData(moduleId) {
            if (!this.cache || !this.cache.modules[moduleId]) {
                return { answers: {}, bookmarks: [], bestExamScore: null };
            }
            return this.cache.modules[moduleId];
        }

        getGlobalStats() {
            if (!this.cache) {
                return {
                    attempted: 0,
                    correct: 0,
                    accuracy: 0,
                    streak: 1,
                    modulesCompleted: 0
                };
            }

            const attempted = this.cache.stats?.totalAttempted || 0;
            const correct = this.cache.stats?.totalCorrect || 0;
            const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
            const streak = this.cache.stats?.streakDays || 1;

            // Calculate completed modules (e.g. at least 15 questions answered or test taken)
            let completedMods = 0;
            for (const mod of Object.values(this.cache.modules || {})) {
                if (mod.bestExamScore || Object.keys(mod.answers || {}).length >= 15) {
                    completedMods++;
                }
            }

            return {
                attempted,
                correct,
                accuracy,
                streak,
                modulesCompleted: completedMods
            };
        }

        // ==========================================
        // 5. OBSERVER PATTERN & UTILS
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
            this.listeners.forEach(fn => fn(this));
        }

        debounceCloudPush() {
            clearTimeout(this._pushTimeout);
            this._pushTimeout = setTimeout(() => {
                this.pushToCloud();
            }, 3000); // Debounce 3s to avoid spamming
        }
    }

    // Expose global instance
    window.SyncManager = new PlacementSyncManager();

})(window);
