/**
 * AI DSA Mentor & Placement Coach - Persistent Storage & Adaptive Learning Engine
 * 
 * Features:
 * - 22-Phase Structured Roadmap Tracking (Phases 0 to 21)
 * - Strict prerequisite gating: No jumping ahead without foundations or test-out
 * - Mastery levels: Not Started -> Learning -> Practicing -> Developing -> Strong -> Mastered
 * - 14-Step Daily Learning Algorithm
 * - Spaced repetition revision & recurring mistake tracker
 * - Multi-device cloud sync with SyncManager
 */

(function(window) {
    'use strict';

    const DSA_STORAGE_KEY = 'prep_dsa_state_v2';

    const MASTERY_LEVELS = [
        "Not Started",
        "Learning",
        "Practicing",
        "Developing",
        "Strong",
        "Mastered"
    ];

    function createDefaultPhasesMastery() {
        const phases = {};
        for (let i = 0; i <= 21; i++) {
            const pid = `phase_${i}`;
            phases[pid] = {
                status: i === 0 || i === 1 ? "Practicing" : "Not Started",
                problemsSolved: [],
                independentCount: 0,
                testedOut: i <= 1,
                lastAttemptDate: null
            };
        }
        return phases;
    }

    function getDefaultDSAState() {
        return {
            version: "2.0",
            profile: {
                name: "Student",
                education: "BCA graduate, currently pursuing MCA",
                language: "Python",
                targetCompanies: ["TCS", "Accenture", "Capgemini", "Wipro", "Cognizant", "Infosys"],
                sessionDuration: 30
            },
            currentPosition: {
                phase: "phase_1",
                topic: "Counting & Conditionals",
                difficulty: "Very Easy",
                lastProblemId: "p1_1"
            },
            phasesMastery: createDefaultPhasesMastery(),
            skillScores: {
                problem_understanding: 3.0,
                logic_building: 2.5,
                dry_run: 2.0,
                pattern_recognition: 2.0,
                coding: 3.0,
                debugging: 2.0,
                optimization: 1.5
            },
            attempts: [],
            mistakes: [],
            topicProgress: {},
            revisionItems: [],
            notes: [
                {
                    id: "note_welcome",
                    category: "personal_rules",
                    title: "Core Problem Solving Checklist",
                    content: "1. Understand input & output.\n2. Trace 3 items manually on paper.\n3. Identify the pattern before typing.\n4. Dry-run variables line by line.",
                    created_at: new Date().toISOString()
                }
            ],
            sessions: [],
            settings: {
                preferred_language: "Python",
                ai_api_key: "",
                ai_provider: "heuristic",
                theme: "light"
            }
        };
    }

    class DSAStorageEngine {
        constructor() {
            this.state = this.loadState();
            if (window.SyncManager) {
                window.SyncManager.addListener(() => {
                    this.syncWithSyncManager(false);
                });
            }
        }

        loadState() {
            try {
                const localStr = localStorage.getItem(DSA_STORAGE_KEY) || localStorage.getItem('prep_dsa_state_v1');
                let loaded = localStr ? JSON.parse(localStr) : null;

                if (!loaded && window.SyncManager && window.SyncManager.cache?.modules?.dsa_mentor) {
                    loaded = window.SyncManager.cache.modules.dsa_mentor;
                }

                if (!loaded) {
                    loaded = getDefaultDSAState();
                    this.saveState(loaded);
                } else if (!loaded.phasesMastery) {
                    loaded.phasesMastery = createDefaultPhasesMastery();
                    this.saveState(loaded);
                }

                return loaded;
            } catch (e) {
                console.warn("[DSAStorage] Error loading state:", e);
                return getDefaultDSAState();
            }
        }

        saveState(newState) {
            if (newState) this.state = newState;
            try {
                localStorage.setItem(DSA_STORAGE_KEY, JSON.stringify(this.state));
                this.syncWithSyncManager(true);
            } catch (e) {
                console.error("[DSAStorage] Save error:", e);
            }
        }

        syncWithSyncManager(shouldPushToCloud = true) {
            if (!window.SyncManager) return;
            try {
                const cache = window.SyncManager.loadLocalCache();
                if (!cache.modules) cache.modules = {};

                if (shouldPushToCloud) {
                    cache.modules.dsa_mentor = this.state;
                    window.SyncManager.saveLocalCache(cache);
                    window.SyncManager.pushToCloud();
                } else if (cache.modules.dsa_mentor) {
                    const cloudDSA = cache.modules.dsa_mentor;
                    if (cloudDSA.attempts && cloudDSA.attempts.length >= this.state.attempts.length) {
                        this.state = cloudDSA;
                        localStorage.setItem(DSA_STORAGE_KEY, JSON.stringify(this.state));
                    }
                }
            } catch (err) {
                console.warn("[DSAStorage] Sync error:", err);
            }
        }

        // ==========================================
        // PREREQUISITES & PHASE UNLOCKING
        // ==========================================
        isPhaseUnlocked(phaseId) {
            if (!this.state.phasesMastery) this.state.phasesMastery = createDefaultPhasesMastery();
            
            // Phase 0 and 1 are always unlocked
            if (phaseId === "phase_0" || phaseId === "phase_1") return true;

            const roadmapPhase = (window.DSA_ROADMAP_PHASES || []).find(p => p.id === phaseId);
            if (!roadmapPhase) return true;

            // Check if student has tested out of this phase
            if (this.state.phasesMastery[phaseId]?.testedOut) return true;

            // Check if all prerequisites have reached at least "Practicing"
            const prereqs = roadmapPhase.prerequisites || [];
            if (prereqs.length === 0) return true;

            for (let req of prereqs) {
                const reqStatus = this.state.phasesMastery[req]?.status || "Not Started";
                const isPassing = reqStatus === "Practicing" || reqStatus === "Developing" || reqStatus === "Strong" || reqStatus === "Mastered" || this.state.phasesMastery[req]?.testedOut;
                if (!isPassing) return false;
            }

            return true;
        }

        testOutPhase(phaseId) {
            if (!this.state.phasesMastery[phaseId]) {
                this.state.phasesMastery[phaseId] = { status: "Practicing", problemsSolved: [], testedOut: true };
            }
            this.state.phasesMastery[phaseId].testedOut = true;
            this.state.phasesMastery[phaseId].status = "Developing";
            this.saveState();
        }

        // ==========================================
        // 14-STEP DAILY LEARNING ALGORITHM
        // ==========================================
        runDailyLearningAlgorithm() {
            const allProblems = window.DSA_PROBLEMS || [];
            const todayStr = new Date().toISOString().split('T')[0];

            // Step 1: Check student's current position
            const currentPhase = this.state.currentPosition?.phase || "phase_1";

            // Step 2 & 3: Check revision items due
            const dueRevisions = (this.state.revisionItems || []).filter(r => r.next_revision_date <= todayStr);
            if (dueRevisions.length > 0) {
                const revProb = allProblems.find(p => p.id === dueRevisions[0].problem_id);
                if (revProb) {
                    return {
                        action: "revision",
                        problem: revProb,
                        title: "Spaced Revision Due Today",
                        reason: `Due for spaced repetition review (Cycle ${dueRevisions[0].revision_count || 1}).`
                    };
                }
            }

            // Step 2b: Check recurring mistakes
            const recurringMistakes = (this.state.mistakes || []).filter(m => m.count >= 2 && !m.resolved);
            if (recurringMistakes.length > 0) {
                const mistakeProblem = allProblems.find(p => p.id === recurringMistakes[0].problem_id);
                if (mistakeProblem) {
                    return {
                        action: "mistake_drill",
                        problem: mistakeProblem,
                        title: "Recurring Mistake Drill",
                        reason: `Targeted practice to fix recurring '${recurringMistakes[0].mistake_type}' error.`
                    };
                }
            }

            // Step 5 & 6: Find next unattempted problem in unlocked roadmap phases
            const solvedIds = new Set((this.state.attempts || []).filter(a => a.result === 'passed').map(a => a.problem_id));
            
            for (let phase of (window.DSA_ROADMAP_PHASES || [])) {
                if (this.isPhaseUnlocked(phase.id)) {
                    const phaseProbs = allProblems.filter(p => p.phase === phase.id);
                    const unattempted = phaseProbs.find(p => !solvedIds.has(p.id));
                    if (unattempted) {
                        return {
                            action: "new_problem",
                            problem: unattempted,
                            title: `Roadmap: ${phase.name}`,
                            reason: `Next progressive problem in your unlocked curriculum.`
                        };
                    }
                }
            }

            // Fallback: Default to problem 1
            return {
                action: "standard",
                problem: allProblems[0],
                title: "Foundation Reinforcement",
                reason: "Solidify core patterns and independent logic."
            };
        }

        // ==========================================
        // ATTEMPTS & PROGRESS ENGINE
        // ==========================================
        recordAttempt(data) {
            const attempt = {
                id: "att_" + Date.now(),
                problem_id: data.problem_id,
                started_at: data.started_at || new Date().toISOString(),
                completed_at: new Date().toISOString(),
                time_taken_seconds: data.time_taken_seconds || 60,
                solved_independently: data.hints_used === 0 && !data.solution_seen && data.all_passed,
                solved_with_hint: data.hints_used > 0 && !data.solution_seen && data.all_passed,
                solution_seen: !!data.solution_seen,
                hints_used: data.hints_used || 0,
                mistake_type: data.mistake_type || null,
                code_submission: data.code_submission || "",
                result: data.all_passed ? "passed" : "failed"
            };

            this.state.attempts.push(attempt);

            const problem = (window.DSA_PROBLEMS || []).find(p => p.id === data.problem_id);
            if (problem) {
                // Update Phase Mastery
                const phaseId = problem.phase;
                if (!this.state.phasesMastery[phaseId]) {
                    this.state.phasesMastery[phaseId] = { status: "Learning", problemsSolved: [], independentCount: 0 };
                }
                const pm = this.state.phasesMastery[phaseId];
                if (attempt.result === 'passed') {
                    if (!pm.problemsSolved.includes(problem.id)) {
                        pm.problemsSolved.push(problem.id);
                    }
                    if (attempt.solved_independently) {
                        pm.independentCount = (pm.independentCount || 0) + 1;
                    }

                    // Calculate phase status
                    if (pm.independentCount >= 2) pm.status = "Mastered";
                    else if (pm.independentCount >= 1) pm.status = "Strong";
                    else if (pm.problemsSolved.length >= 2) pm.status = "Developing";
                    else pm.status = "Practicing";
                }

                // Update topic statistics
                const topic = problem.topic;
                if (!this.state.topicProgress[topic]) {
                    this.state.topicProgress[topic] = {
                        attempted: 0,
                        independent_solves: 0,
                        hint_solves: 0,
                        solution_seen: 0
                    };
                }
                const tp = this.state.topicProgress[topic];
                tp.attempted += 1;
                if (attempt.solved_independently) tp.independent_solves += 1;
                else if (attempt.solved_with_hint) tp.hint_solves += 1;
                else if (attempt.solution_seen) tp.solution_seen += 1;
            }

            // Record mistake if failed
            if (attempt.mistake_type) {
                this.recordMistake(attempt.problem_id, attempt.mistake_type, data.mistake_description);
            }

            // Schedule spaced repetition revision
            this.scheduleRevision(attempt.problem_id, attempt.solved_independently);

            // Update skill scores
            this.updateSkillScores(attempt);

            this.saveState();
            return attempt;
        }

        recordMistake(problemId, mistakeType, description) {
            const existing = this.state.mistakes.find(m => m.mistake_type === mistakeType && !m.resolved);
            if (existing) {
                existing.count = (existing.count || 1) + 1;
                existing.last_seen = new Date().toISOString();
                existing.recent_problem_id = problemId;
                if (description) existing.description = description;
            } else {
                this.state.mistakes.push({
                    id: "mst_" + Date.now(),
                    problem_id: problemId,
                    mistake_type: mistakeType,
                    description: description || `Mistake during: ${mistakeType}`,
                    date: new Date().toISOString(),
                    last_seen: new Date().toISOString(),
                    count: 1,
                    resolved: false
                });
            }
        }

        scheduleRevision(problemId, wasIndependent) {
            let item = this.state.revisionItems.find(r => r.problem_id === problemId);
            const now = new Date();
            let daysToAdd = wasIndependent ? 3 : 1;

            if (!item) {
                item = {
                    id: "rev_" + Date.now(),
                    problem_id: problemId,
                    revision_count: 0,
                    status: "scheduled"
                };
                this.state.revisionItems.push(item);
            } else {
                item.revision_count = (item.revision_count || 0) + 1;
                const intervals = [1, 3, 7, 14, 30];
                daysToAdd = intervals[Math.min(item.revision_count, intervals.length - 1)];
            }

            const nextDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
            item.next_revision_date = nextDate.toISOString().split('T')[0];
        }

        updateSkillScores(attempt) {
            const s = this.state.skillScores;
            if (attempt.solved_independently) {
                s.logic_building = Math.min(5, (s.logic_building || 2) + 0.2);
                s.coding = Math.min(5, (s.coding || 2) + 0.2);
                s.problem_understanding = Math.min(5, (s.problem_understanding || 3) + 0.1);
            } else if (attempt.solved_with_hint) {
                s.pattern_recognition = Math.min(5, (s.pattern_recognition || 2) + 0.15);
            }
            for (let k in s) {
                s[k] = Math.round(s[k] * 10) / 10;
            }
        }

        getDashboardMetrics() {
            const attempts = this.state.attempts || [];
            const total = attempts.length;
            const independent = attempts.filter(a => a.solved_independently).length;
            const withHints = attempts.filter(a => a.solved_with_hint).length;
            const solutionSeen = attempts.filter(a => a.solution_seen).length;
            const solveRate = total > 0 ? Math.round((independent / total) * 100) : 0;

            const todayStr = new Date().toISOString().split('T')[0];
            const revisionDue = (this.state.revisionItems || []).filter(r => r.next_revision_date <= todayStr);
            const recurringMistakes = (this.state.mistakes || []).filter(m => m.count >= 2 && !m.resolved);

            const streak = window.SyncManager ? window.SyncManager.getGlobalStats().streak : 1;

            return {
                totalAttempted: total,
                independentSolves: independent,
                hintSolves: withHints,
                solutionSeen: solutionSeen,
                independentSolveRate: solveRate,
                streakDays: streak,
                revisionDueCount: revisionDue.length,
                recurringMistakesCount: recurringMistakes.length,
                currentPhase: this.state.currentPosition?.phase || "phase_1",
                currentTopic: this.state.currentPosition?.topic || "Counting",
                skillScores: this.state.skillScores || {}
            };
        }

        addNote(category, title, content) {
            const note = {
                id: "note_" + Date.now(),
                category: category || "concept_notes",
                title: title.trim(),
                content: content.trim(),
                created_at: new Date().toISOString()
            };
            this.state.notes.unshift(note);
            this.saveState();
            return note;
        }

        deleteNote(id) {
            this.state.notes = this.state.notes.filter(n => n.id !== id);
            this.saveState();
        }

        exportStateJSON() {
            return JSON.stringify({
                app: "AI_DSA_Mentor",
                roadmap_version: "22_phases",
                exported_at: new Date().toISOString(),
                state: this.state
            }, null, 2);
        }

        importStateJSON(jsonStr) {
            try {
                const parsed = JSON.parse(jsonStr);
                const incoming = parsed.state || parsed;
                if (!incoming || !incoming.profile || !incoming.attempts) {
                    throw new Error("Invalid DSA State JSON format.");
                }
                this.state = incoming;
                this.saveState();
                return { success: true, message: `Restored ${incoming.attempts.length} attempts.` };
            } catch (err) {
                return { success: false, error: err.message };
            }
        }
    }

    window.DSAStorage = new DSAStorageEngine();

})(window);
