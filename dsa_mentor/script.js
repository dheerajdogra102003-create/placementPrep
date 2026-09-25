/**
 * DSA Quest - Application Controller
 * 100% Static Frontend for GitHub Pages.
 * Handles:
 * 1. 8-View SPA Navigation (Home, Roadmap, Learn, Pattern Lab, Practice, Daily, Placement, Progress)
 * 2. LocalStorage Persistence (phases, topics, problems, streak, pattern scores, achievements)
 * 3. Interactive Pointer Stepper Visualizer (Two Pointers & Sliding Window)
 * 4. Pattern Recognition Lab with instant feedback
 * 5. Practice Arena with 5-Level Progressive Hint Ladders
 * 6. Daily Challenge & Streak Engine
 * 7. Placement Arena Company Tracks
 * 8. Gamified Achievements & Progress Dashboards
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // =========================================================================
    // 1. STATE & STORAGE MANAGEMENT
    // =========================================================================
    const STORAGE_KEY = 'dsa_quest_state_v1';

    const defaultState = {
        completedPhases: [],
        completedTopics: [],
        completedProblems: [],
        patternScore: 0,
        patternAnswered: {},
        streak: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        unlockedAchievements: [],
        currentPhase: 0,
        theme: 'light'
    };

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return defaultState;
            const parsed = JSON.parse(raw);
            return { ...defaultState, ...parsed };
        } catch (e) {
            console.warn('Failed to parse DSA Quest state from localStorage:', e);
            return defaultState;
        }
    }

    let state = loadState();

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            updateGlobalUI();
        } catch (e) {
            console.error('Error saving state:', e);
        }
    }

    // Update streak on daily visit
    function checkDailyStreak() {
        const today = new Date().toISOString().split('T')[0];
        if (state.lastActiveDate !== today) {
            const lastDate = new Date(state.lastActiveDate);
            const currentDate = new Date(today);
            const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                state.streak += 1;
            } else if (diffDays > 1) {
                state.streak = 1;
            }
            state.lastActiveDate = today;
            saveState();
        }
    }
    checkDailyStreak();

    // =========================================================================
    // 2. THEME ENGINE
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    function initTheme() {
        const savedTheme = localStorage.getItem('dsa_quest_theme') || localStorage.getItem('placementPrep_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        state.theme = savedTheme;
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌓';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const nextTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('dsa_quest_theme', nextTheme);
            localStorage.setItem('placementPrep_theme', nextTheme);
            themeToggleBtn.innerHTML = nextTheme === 'dark' ? '☀️' : '🌓';
            showToast(`Theme switched to ${nextTheme} mode`, 'info');
        });
    }
    initTheme();

    // =========================================================================
    // 3. TOAST NOTIFICATIONS
    // =========================================================================
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'success') {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'quest-toast';
        toast.style.cssText = `
            background: var(--bg-card);
            color: var(--text-primary);
            border-left: 4px solid ${type === 'success' ? 'var(--success)' : type === 'warning' ? 'var(--warning)' : 'var(--accent)'};
            border: 1px solid var(--border-color);
            border-left-width: 4px;
            padding: 0.85rem 1.25rem;
            border-radius: var(--radius-sm);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            font-size: 0.88rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: fadeIn 0.2s ease-out;
            max-width: 360px;
        `;
        toast.innerHTML = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    // =========================================================================
    // 4. VIEW NAVIGATION
    // =========================================================================
    const views = document.querySelectorAll('.quest-view');
    const menuButtons = document.querySelectorAll('.menu-item-btn, .mobile-nav-btn');
    const currentViewTitle = document.getElementById('current-view-title');

    const viewTitles = {
        'view-home': 'Home',
        'view-roadmap': 'Roadmap',
        'view-learn': 'Interactive Lessons',
        'view-patterns': 'Pattern Recognition Lab',
        'view-practice': 'Practice Arena',
        'view-daily': 'Daily Challenge',
        'view-placement': 'Placement Arena',
        'view-progress': 'Progress & Achievements'
    };

    function switchView(viewId) {
        // Toggle view visibility
        views.forEach(v => {
            if (v.id === viewId) {
                v.classList.add('active');
            } else {
                v.classList.remove('active');
            }
        });

        // Update active class on nav buttons
        menuButtons.forEach(btn => {
            if (btn.getAttribute('data-view') === viewId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update topbar breadcrumb
        if (currentViewTitle && viewTitles[viewId]) {
            currentViewTitle.textContent = viewTitles[viewId];
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update state current view triggers
        if (viewId === 'view-progress') {
            renderProgressView();
        } else if (viewId === 'view-roadmap') {
            renderRoadmap();
        }
    }

    // Wire up sidebar and mobile nav buttons
    menuButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetView = btn.getAttribute('data-view');
            if (targetView) {
                switchView(targetView);
            }
        });
    });

    // Wire up all in-page links with data-switch-view
    document.addEventListener('click', (e) => {
        const switchBtn = e.target.closest('[data-switch-view]');
        if (switchBtn) {
            e.preventDefault();
            const target = switchBtn.getAttribute('data-switch-view');
            if (target) {
                switchView(target);
                const lessonKey = switchBtn.getAttribute('data-lesson-key');
                if (lessonKey) {
                    loadLesson(lessonKey);
                }
            }
        }
    });

    // =========================================================================
    // 5. ACHIEVEMENTS CHECKER
    // =========================================================================
    function checkAchievements() {
        if (!window.DSA_QUEST_DATA) return;
        const achievements = DSA_QUEST_DATA.achievements;
        let newUnlocked = false;

        achievements.forEach(ach => {
            if (state.unlockedAchievements.includes(ach.id)) return;

            let conditionMet = false;
            switch (ach.id) {
                case 'first_step':
                    conditionMet = state.completedTopics.length > 0 || state.completedPhases.length > 0;
                    break;
                case 'streak_3':
                    conditionMet = state.streak >= 3;
                    break;
                case 'ten_problems':
                    conditionMet = state.completedProblems.length >= 8;
                    break;
                case 'pattern_hunter':
                    conditionMet = state.patternScore >= 4;
                    break;
                case 'array_master':
                    const arrayProblems = DSA_QUEST_DATA.problems.filter(p => p.topic === 'Arrays');
                    conditionMet = arrayProblems.every(p => state.completedProblems.includes(p.id));
                    break;
                case 'tree_climber':
                    conditionMet = state.completedPhases.includes(13);
                    break;
                case 'placement_ready':
                    conditionMet = state.completedProblems.length >= 6;
                    break;
            }

            if (conditionMet) {
                state.unlockedAchievements.push(ach.id);
                newUnlocked = true;
                showToast(`🏆 Achievement Unlocked: <strong>${ach.title}</strong>!`, 'warning');
            }
        });

        if (newUnlocked) {
            saveState();
        }
    }

    // =========================================================================
    // 6. GLOBAL TOPBAR & SIDEBAR UI SYNC
    // =========================================================================
    function updateGlobalUI() {
        const topbarStreakCount = document.getElementById('topbar-streak-count');
        const topbarSolvedCount = document.getElementById('topbar-solved-count');
        const sidebarStreakText = document.getElementById('sidebar-streak-text');
        const sidebarPhaseText = document.getElementById('sidebar-phase-text');

        if (topbarStreakCount) topbarStreakCount.textContent = state.streak;
        if (topbarSolvedCount) topbarSolvedCount.textContent = state.completedProblems.length;
        if (sidebarStreakText) sidebarStreakText.textContent = `${state.streak} Day Streak`;
        if (sidebarPhaseText) sidebarPhaseText.textContent = `Phase ${state.currentPhase}: Foundation`;

        checkAchievements();
    }

    // =========================================================================
    // 7. ROADMAP ENGINE
    // =========================================================================
    const roadmapContainer = document.getElementById('roadmap-timeline-container');
    const roadmapProgressBar = document.getElementById('roadmap-progress-bar');
    const roadmapCompletionPercent = document.getElementById('roadmap-completion-percent');
    const roadmapCompletedCount = document.getElementById('roadmap-completed-count');

    function renderRoadmap() {
        if (!roadmapContainer || !window.DSA_QUEST_DATA) return;
        const phases = DSA_QUEST_DATA.phases;

        const completedCount = state.completedPhases.length;
        const totalPhases = phases.length;
        const percent = Math.round((completedCount / totalPhases) * 100);

        if (roadmapProgressBar) roadmapProgressBar.style.width = `${percent}%`;
        if (roadmapCompletionPercent) roadmapCompletionPercent.textContent = `${percent}%`;
        if (roadmapCompletedCount) roadmapCompletedCount.textContent = `${completedCount} of ${totalPhases} Phases Mastered`;

        roadmapContainer.innerHTML = phases.map(phase => {
            const isCompleted = state.completedPhases.includes(phase.id);
            const isActive = phase.id === state.currentPhase;

            const topicsHtml = phase.topics.map(topic => {
                const isTopicDone = state.completedTopics.includes(topic);
                return `
                    <span class="topic-tag-chip" style="${isTopicDone ? 'background: var(--success-bg); color: var(--success); font-weight: 600;' : ''}">
                        ${isTopicDone ? '✓ ' : ''}${topic}
                    </span>
                `;
            }).join('');

            return `
                <div class="phase-journey-card ${isCompleted ? 'completed' : ''} ${isActive ? 'active-phase' : ''}" data-phase-id="${phase.id}">
                    <div class="phase-node-bullet">
                        ${isCompleted ? '✓' : phase.icon}
                    </div>
                    <div class="phase-content-box">
                        <div class="phase-box-top">
                            <div>
                                <span class="phase-badge-pill">${phase.badge}</span>
                                <h3 style="font-size: 1.15rem; font-weight: 800; margin-top: 0.35rem;">Phase ${phase.id}: ${phase.name}</h3>
                            </div>
                            <button class="btn-outline toggle-phase-btn" data-phase-id="${phase.id}" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">
                                ${isCompleted ? 'Completed ✓' : 'Mark Complete'}
                            </button>
                        </div>
                        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${phase.summary}</p>
                        <div class="phase-topics-pills">
                            ${topicsHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Wire up phase completion toggles
        roadmapContainer.querySelectorAll('.toggle-phase-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const phaseId = parseInt(btn.getAttribute('data-phase-id'), 10);
                if (state.completedPhases.includes(phaseId)) {
                    state.completedPhases = state.completedPhases.filter(id => id !== phaseId);
                    showToast(`Phase ${phaseId} unmarked`, 'info');
                } else {
                    state.completedPhases.push(phaseId);
                    if (state.currentPhase <= phaseId && phaseId < 21) {
                        state.currentPhase = phaseId + 1;
                    }
                    showToast(`🎉 Phase ${phaseId} Mastered! Keep going!`, 'success');
                }
                saveState();
                renderRoadmap();
            });
        });
    }

    // =========================================================================
    // 8. INTERACTIVE LESSON & VISUALIZER STEPPER
    // =========================================================================
    let currentLessonKey = 'two_pointers';
    let currentStepIdx = 0;
    const lessonContainer = document.getElementById('lesson-content-container');
    const lessonChips = document.querySelectorAll('[data-lesson]');

    function loadLesson(lessonKey) {
        if (!window.DSA_QUEST_DATA || !DSA_QUEST_DATA.lessons[lessonKey]) return;
        currentLessonKey = lessonKey;
        currentStepIdx = 0;

        lessonChips.forEach(chip => {
            if (chip.getAttribute('data-lesson') === lessonKey) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });

        renderLessonContent();
    }

    function renderLessonContent() {
        if (!lessonContainer || !window.DSA_QUEST_DATA) return;
        const lesson = DSA_QUEST_DATA.lessons[currentLessonKey];
        if (!lesson) return;

        const visData = lesson.visualizerData;
        const step = visData.steps[currentStepIdx] || visData.steps[0];

        // Generate Array cells with pointer markings
        const arrayCellsHtml = visData.array.map((val, idx) => {
            let pointerClass = '';
            if (idx === step.left && idx === step.right) {
                pointerClass = 'pointer-left pointer-right';
            } else if (idx === step.left) {
                pointerClass = 'pointer-left';
            } else if (idx === step.right) {
                pointerClass = 'pointer-right';
            }

            return `
                <div class="array-cell ${pointerClass}">
                    <span class="cell-idx">idx ${idx}</span>
                    <span>${val}</span>
                </div>
            `;
        }).join('');

        lessonContainer.innerHTML = `
            <div class="lesson-header">
                <div>
                    <span class="hero-tag">${lesson.badge}</span>
                    <h2 style="font-size: 1.6rem; font-weight: 800; margin-top: 0.35rem;">${lesson.title}</h2>
                </div>
                <button class="btn-accent" data-switch-view="view-practice" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
                    Practice Pattern ➔
                </button>
            </div>

            <!-- What & Why -->
            <div class="lesson-section">
                <div class="lesson-section-title">💡 What is it?</div>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${lesson.what}</p>
            </div>

            <div class="lesson-section">
                <div class="lesson-section-title">⚡ Why do we need it?</div>
                <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${lesson.why}</p>
            </div>

            <!-- Real World Analogy -->
            <div class="lesson-section">
                <div class="lesson-section-title">🌍 Real-World Analogy</div>
                <div class="lesson-analogy-box">
                    "${lesson.analogy}"
                </div>
            </div>

            <!-- Interactive Stepper Visualizer -->
            <div class="lesson-section">
                <div class="lesson-section-title">🎬 Interactive Pointer Stepper &amp; Dry Run</div>
                <div class="visualizer-stage">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: 700; font-size: 0.95rem;">${visData.title}</span>
                        <span class="phase-badge-pill">Step ${currentStepIdx + 1} of ${visData.steps.length}</span>
                    </div>

                    <div class="visualizer-array">
                        ${arrayCellsHtml}
                    </div>

                    <!-- Step state note -->
                    <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-sm); margin-top: 2rem;">
                        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
                            Calculation: <span style="font-family: 'JetBrains Mono', monospace; color: var(--accent);">${step.sum}</span>
                        </div>
                        <div style="font-size: 0.88rem; font-weight: 600; margin-top: 0.25rem;">
                            Action: ${step.action}
                        </div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                            💡 Note: ${step.note}
                        </div>
                    </div>

                    <div class="visualizer-stepper-ctrls">
                        <button class="btn-outline" id="btn-vis-prev" ${currentStepIdx === 0 ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
                            ◀ Previous Step
                        </button>
                        <button class="btn-outline" id="btn-vis-reset">
                            ↺ Reset Stepper
                        </button>
                        <button class="btn-accent" id="btn-vis-next" ${currentStepIdx === visData.steps.length - 1 ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
                            Next Step ▶
                        </button>
                    </div>
                </div>
            </div>

            <!-- Syntax Code Block -->
            <div class="lesson-section">
                <div class="lesson-section-title">🐍 Python Syntax Template</div>
                <pre class="code-snippet"><code>${lesson.syntax}</code></pre>
            </div>

            <!-- Complexity & Mistakes -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                <div class="stat-quest-card">
                    <div>
                        <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.25rem;">⏱️ Time Complexity</div>
                        <div style="font-size: 0.85rem; color: var(--accent); font-weight: 600;">${lesson.timeComplexity}</div>
                    </div>
                </div>
                <div class="stat-quest-card">
                    <div>
                        <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.25rem;">💾 Space Complexity</div>
                        <div style="font-size: 0.85rem; color: var(--accent); font-weight: 600;">${lesson.spaceComplexity}</div>
                    </div>
                </div>
            </div>

            <div class="lesson-section" style="margin-top: 1.5rem;">
                <div class="lesson-section-title">⚠️ Common Mistakes to Avoid</div>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${lesson.commonMistakes}</p>
            </div>
        `;

        // Wire up visualizer buttons
        const btnNext = document.getElementById('btn-vis-next');
        const btnPrev = document.getElementById('btn-vis-prev');
        const btnReset = document.getElementById('btn-vis-reset');

        if (btnNext) {
            btnNext.addEventListener('click', () => {
                if (currentStepIdx < visData.steps.length - 1) {
                    currentStepIdx++;
                    renderLessonContent();
                }
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                if (currentStepIdx > 0) {
                    currentStepIdx--;
                    renderLessonContent();
                }
            });
        }

        if (btnReset) {
            btnReset.addEventListener('click', () => {
                currentStepIdx = 0;
                renderLessonContent();
            });
        }
    }

    lessonChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const key = chip.getAttribute('data-lesson');
            if (key) loadLesson(key);
        });
    });

    // =========================================================================
    // 9. PATTERN LAB ENGINE
    // =========================================================================
    let currentQuizIndex = 0;
    const quizQuestionTracker = document.getElementById('quiz-question-tracker');
    const quizScoreDisplay = document.getElementById('quiz-score');
    const quizScenarioText = document.getElementById('quiz-scenario-text');
    const quizCluesList = document.getElementById('quiz-clues-list');
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    const quizExplanationBox = document.getElementById('quiz-explanation-box');
    const quizFeedbackTitle = document.getElementById('quiz-feedback-title');
    const quizFeedbackText = document.getElementById('quiz-feedback-text');
    const btnNextQuiz = document.getElementById('btn-next-quiz');

    function renderPatternQuiz() {
        if (!window.DSA_QUEST_DATA || !DSA_QUEST_DATA.patternLabQuizzes) return;
        const quizzes = DSA_QUEST_DATA.patternLabQuizzes;
        if (currentQuizIndex >= quizzes.length) {
            currentQuizIndex = 0;
        }

        const quiz = quizzes[currentQuizIndex];
        if (quizQuestionTracker) quizQuestionTracker.textContent = `Scenario ${currentQuizIndex + 1} of ${quizzes.length}`;
        if (quizScoreDisplay) quizScoreDisplay.textContent = state.patternScore;

        if (quizScenarioText) quizScenarioText.textContent = quiz.scenario;

        if (quizCluesList) {
            quizCluesList.innerHTML = quiz.clues.map(c => `<li>${c}</li>`).join('');
        }

        if (quizExplanationBox) {
            quizExplanationBox.classList.remove('show');
        }

        if (quizOptionsContainer) {
            quizOptionsContainer.innerHTML = quiz.options.map(opt => {
                return `<button class="pattern-opt-btn" data-pattern="${opt}">${opt}</button>`;
            }).join('');

            quizOptionsContainer.querySelectorAll('.pattern-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => handleQuizOptionClick(btn, quiz));
            });
        }
    }

    function handleQuizOptionClick(selectedBtn, quiz) {
        const selected = selectedBtn.getAttribute('data-pattern');
        const isCorrect = selected === quiz.correct;

        // Disable all buttons in grid
        quizOptionsContainer.querySelectorAll('.pattern-opt-btn').forEach(b => {
            b.disabled = true;
            if (b.getAttribute('data-pattern') === quiz.correct) {
                b.classList.add('correct');
            } else if (b === selectedBtn && !isCorrect) {
                b.classList.add('wrong');
            }
        });

        if (isCorrect) {
            if (!state.patternAnswered[quiz.id]) {
                state.patternScore += 1;
                state.patternAnswered[quiz.id] = true;
                saveState();
            }
            if (quizScoreDisplay) quizScoreDisplay.textContent = state.patternScore;
            if (quizFeedbackTitle) {
                quizFeedbackTitle.textContent = "🎉 Correct Pattern!";
                quizFeedbackTitle.style.color = "var(--success)";
            }
        } else {
            if (quizFeedbackTitle) {
                quizFeedbackTitle.textContent = "❌ Not Quite!";
                quizFeedbackTitle.style.color = "var(--danger)";
            }
        }

        if (quizFeedbackText) {
            quizFeedbackText.innerHTML = `
                <p><strong>Correct Pattern:</strong> ${quiz.correct}</p>
                <p style="margin-top: 0.35rem;">${quiz.explanation}</p>
            `;
        }

        if (quizExplanationBox) {
            quizExplanationBox.classList.add('show');
        }
    }

    if (btnNextQuiz) {
        btnNextQuiz.addEventListener('click', () => {
            currentQuizIndex = (currentQuizIndex + 1) % DSA_QUEST_DATA.patternLabQuizzes.length;
            renderPatternQuiz();
        });
    }

    // =========================================================================
    // 10. PRACTICE ARENA ENGINE
    // =========================================================================
    const practiceProblemsContainer = document.getElementById('practice-problems-list');
    const searchInput = document.getElementById('practice-search-input');
    let currentTopicFilter = 'all';
    let currentDifficultyFilter = 'all';

    function renderPracticeProblems() {
        if (!practiceProblemsContainer || !window.DSA_QUEST_DATA) return;
        const problems = DSA_QUEST_DATA.problems;
        const query = (searchInput?.value || '').toLowerCase().trim();

        const filtered = problems.filter(p => {
            const matchesTopic = currentTopicFilter === 'all' || p.topic === currentTopicFilter;
            const matchesDifficulty = currentDifficultyFilter === 'all' || p.difficulty === currentDifficultyFilter;
            const matchesSearch = query === '' ||
                p.title.toLowerCase().includes(query) ||
                p.topic.toLowerCase().includes(query) ||
                p.pattern.toLowerCase().includes(query) ||
                p.companies.some(c => c.toLowerCase().includes(query));

            return matchesTopic && matchesDifficulty && matchesSearch;
        });

        if (filtered.length === 0) {
            practiceProblemsContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem; background: var(--bg-card); border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
                    <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
                    <div style="font-size: 1.1rem; font-weight: 700;">No problems found</div>
                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">Try adjusting your filters or search keywords.</div>
                </div>
            `;
            return;
        }

        practiceProblemsContainer.innerHTML = filtered.map(prob => {
            const isSolved = state.completedProblems.includes(prob.id);
            const difficultyBadgeClass = prob.difficulty === 'Easy' ? 'badge-easy' : prob.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard';

            const companiesHtml = prob.companies.map(c => `
                <span style="font-size: 0.72rem; background: var(--bg-secondary); border: 1px solid var(--border-subtle); padding: 0.15rem 0.45rem; border-radius: 4px; color: var(--text-secondary);">
                    ${c}
                </span>
            `).join('');

            return `
                <div class="problem-quest-card ${isSolved ? 'solved-card' : ''}" id="card-${prob.id}" style="${isSolved ? 'border-left: 4px solid var(--success);' : ''}">
                    <div class="problem-card-top">
                        <div>
                            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem;">
                                <span class="badge-tag ${difficultyBadgeClass}">${prob.difficulty}</span>
                                <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent);">Pattern: ${prob.pattern}</span>
                                <span style="font-size: 0.78rem; color: var(--text-muted);">| ${prob.topic}</span>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: 800;">${prob.title}</h3>
                        </div>

                        <button class="btn-outline toggle-solved-btn" data-problem-id="${prob.id}" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; display: flex; align-items: center; gap: 0.35rem; ${isSolved ? 'color: var(--success); border-color: var(--success);' : ''}">
                            <span>${isSolved ? '✓ Solved' : 'Mark Solved'}</span>
                        </button>
                    </div>

                    <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0.75rem 0 1rem; line-height: 1.55;">
                        ${prob.description}
                    </p>

                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 1rem;">
                        <span style="font-size: 0.72rem; color: var(--text-muted); align-self: center; margin-right: 0.25rem;">Recruitment:</span>
                        ${companiesHtml}
                    </div>

                    <!-- Collapsible Expected Thinking -->
                    <details style="margin-bottom: 0.85rem; font-size: 0.88rem; background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                        <summary style="font-weight: 700; cursor: pointer; color: var(--text-primary);">
                            🧠 Expected Algorithmic Thinking
                        </summary>
                        <p style="margin-top: 0.5rem; color: var(--text-secondary);">${prob.expectedThinking}</p>
                    </details>

                    <!-- 5-Level Progressive Hint Drawer -->
                    <div class="hint-level-drawer">
                        <div style="font-size: 0.82rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-muted);">
                            💡 5-Level Progressive Hint Ladder (No instant spoilers!):
                        </div>
                        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                            <button class="hint-trigger-btn" data-prob-id="${prob.id}" data-hint-idx="0">Hint 1: Input</button>
                            <button class="hint-trigger-btn" data-prob-id="${prob.id}" data-hint-idx="1">Hint 2: Pattern</button>
                            <button class="hint-trigger-btn" data-prob-id="${prob.id}" data-hint-idx="2">Hint 3: Data Structure</button>
                            <button class="hint-trigger-btn" data-prob-id="${prob.id}" data-hint-idx="3">Hint 4: Algorithm</button>
                            <button class="hint-trigger-btn" data-prob-id="${prob.id}" data-hint-idx="4" style="border-color: var(--accent); color: var(--accent);">Hint 5: Solution Code</button>
                        </div>
                        <div class="hint-content-box" id="hint-display-${prob.id}">
                            <!-- Injected on hint click -->
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle); font-size: 0.78rem; color: var(--text-muted);">
                        <span>${prob.complexity}</span>
                        <span>Entry-Level Placement Standard</span>
                    </div>
                </div>
            `;
        }).join('');

        // Wire up hint buttons
        practiceProblemsContainer.querySelectorAll('.hint-trigger-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const probId = btn.getAttribute('data-prob-id');
                const hintIdx = parseInt(btn.getAttribute('data-hint-idx'), 10);
                const prob = problems.find(p => p.id === probId);
                const displayBox = document.getElementById(`hint-display-${probId}`);

                if (prob && displayBox) {
                    displayBox.classList.add('open');
                    displayBox.innerHTML = `
                        <div style="font-weight: 700; color: var(--accent); margin-bottom: 0.3rem;">Level ${hintIdx + 1} Hint:</div>
                        <div style="white-space: pre-wrap; font-family: ${hintIdx === 4 ? 'monospace' : 'inherit'}; font-size: 0.85rem;">${prob.hints[hintIdx]}</div>
                    `;
                }
            });
        });

        // Wire up mark solved buttons
        practiceProblemsContainer.querySelectorAll('.toggle-solved-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const probId = btn.getAttribute('data-problem-id');
                if (state.completedProblems.includes(probId)) {
                    state.completedProblems = state.completedProblems.filter(id => id !== probId);
                    showToast('Problem unmarked', 'info');
                } else {
                    state.completedProblems.push(probId);
                    showToast('🎉 Problem Solved! Awesome work!', 'success');
                }
                saveState();
                renderPracticeProblems();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderPracticeProblems();
        });
    }

    // Filter Chips
    document.querySelectorAll('.filter-chip[data-filter-type]').forEach(chip => {
        chip.addEventListener('click', () => {
            const filterType = chip.getAttribute('data-filter-type');
            const val = chip.getAttribute('data-filter-val');

            document.querySelectorAll(`.filter-chip[data-filter-type="${filterType}"]`).forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            if (filterType === 'topic') {
                currentTopicFilter = val;
            } else if (filterType === 'difficulty') {
                currentDifficultyFilter = val;
            }

            renderPracticeProblems();
        });
    });

    // =========================================================================
    // 11. DAILY CHALLENGE ENGINE
    // =========================================================================
    const dailyChallengeBox = document.getElementById('daily-challenge-box');
    const dailyStreakDisplay = document.getElementById('daily-streak-display');
    const dailyStatusDisplay = document.getElementById('daily-status-display');

    function renderDailyChallenge() {
        if (!dailyChallengeBox || !window.DSA_QUEST_DATA) return;
        const challenges = DSA_QUEST_DATA.dailyChallenges;
        // Cycle challenge by day of month
        const dayOfMonth = new Date().getDate();
        const challenge = challenges[dayOfMonth % challenges.length] || challenges[0];

        const matchedProb = DSA_QUEST_DATA.problems.find(p => p.id === challenge.problemId);
        const isSolved = state.completedProblems.includes(challenge.problemId);

        if (dailyStreakDisplay) dailyStreakDisplay.textContent = `${state.streak} Day${state.streak > 1 ? 's' : ''}`;
        if (dailyStatusDisplay) dailyStatusDisplay.textContent = isSolved ? 'Completed ✓' : 'In Progress';

        dailyChallengeBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                    <span class="hero-tag">🔥 Day ${challenge.dayNumber} Challenge</span>
                    <h2 style="font-size: 1.6rem; font-weight: 800; margin-top: 0.35rem;">${challenge.title}</h2>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.25rem;">
                        <span class="badge-tag badge-easy">${challenge.difficulty}</span>
                        <span style="font-size: 0.8rem; color: var(--accent); font-weight: 700;">Pattern: ${challenge.pattern}</span>
                    </div>
                </div>

                <div class="quest-pill" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
                    Streak: 🔥 ${state.streak} Days
                </div>
            </div>

            <div style="font-style: italic; background: var(--bg-surface); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; border-left: 3px solid var(--accent); font-size: 0.92rem;">
                "${challenge.motivation}"
            </div>

            ${matchedProb ? `
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
                    ${matchedProb.description}
                </p>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn-accent" data-switch-view="view-practice" id="btn-solve-daily">
                        <span>Solve in Practice Arena</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                    <button class="btn-outline toggle-solved-btn" data-problem-id="${matchedProb.id}">
                        ${isSolved ? '✓ Marked as Completed' : 'Complete Today\'s Challenge'}
                    </button>
                </div>
            ` : ''}
        `;

        const dailySolveBtn = dailyChallengeBox.querySelector('.toggle-solved-btn');
        if (dailySolveBtn) {
            dailySolveBtn.addEventListener('click', () => {
                if (!state.completedProblems.includes(challenge.problemId)) {
                    state.completedProblems.push(challenge.problemId);
                    showToast('🎉 Daily Challenge Completed! Streak sustained!', 'success');
                    saveState();
                    renderDailyChallenge();
                }
            });
        }
    }

    // =========================================================================
    // 12. PLACEMENT ARENA ENGINE
    // =========================================================================
    const placementContainer = document.getElementById('placement-companies-grid');

    const placementCompaniesData = [
        {
            name: "Accenture",
            logo: "🅰️",
            focus: "Arrays, Strings, Frequency Map",
            description: "High emphasis on single pass linear scans, counting odd/even characters, and in-place array manipulation.",
            rounds: "2 Coding Questions (45 mins)"
        },
        {
            name: "TCS (Ninja / Digital)",
            logo: "🇹",
            focus: "Sorting, Two Pointers, Hashing",
            description: "Binary search on rotated arrays, pair sums, substring anagrams, and basic recursive series.",
            rounds: "2 Coding Questions (Digital / Prime)"
        },
        {
            name: "Capgemini",
            logo: "🇨",
            focus: "Strings, Stacks, Searching",
            description: "Parentheses validation, palindrome checking, second largest element, and matrix diagonals.",
            rounds: "Technical Assessment Round"
        },
        {
            name: "Cognizant (GenC / Elevate)",
            logo: "🔷",
            focus: "Sliding Window, Prefix Sum, DP Basics",
            description: "Maximum contiguous sum of size K, Fibonacci stair climbing, and duplicate detection.",
            rounds: "Skill-based Coding Challenge"
        },
        {
            name: "Infosys (SP / DSE)",
            logo: "🇮",
            focus: "Greedy, Sliding Window, Two Pointers",
            description: "Interval selection, contiguous subarray metrics, and string deduplication.",
            rounds: "Infosys HackWithInfy / SP Track"
        },
        {
            name: "Wipro (Elite / Turbo)",
            logo: "🇼",
            focus: "Traversal, Math & Logic, Hashing",
            description: "Two Sum, array rotation, prime counting, and dictionary complement lookups.",
            rounds: "National Qualifier Coding"
        }
    ];

    function renderPlacementArena() {
        if (!placementContainer) return;
        placementContainer.innerHTML = placementCompaniesData.map(c => `
            <div class="company-arena-card" data-company="${c.name}">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="font-size: 2rem;">${c.logo}</div>
                    <span class="phase-badge-pill">${c.rounds}</span>
                </div>
                <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.25rem;">${c.name} Track</h3>
                <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent); margin-bottom: 0.65rem;">
                    Key Patterns: ${c.focus}
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
                    ${c.description}
                </p>
                <button class="btn-accent practice-company-btn" data-company-name="${c.name}" style="width: 100%; justify-content: center; font-size: 0.85rem; padding: 0.55rem;">
                    Practice ${c.name} Problems ➔
                </button>
            </div>
        `).join('');

        placementContainer.querySelectorAll('.practice-company-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const comp = btn.getAttribute('data-company-name');
                if (searchInput) searchInput.value = comp;
                switchView('view-practice');
                renderPracticeProblems();
            });
        });
    }

    // =========================================================================
    // 13. PROGRESS VIEW & ACHIEVEMENTS RENDERER
    // =========================================================================
    const achievementsContainer = document.getElementById('achievements-cards-container');
    const progressTopicsCount = document.getElementById('progress-topics-count');
    const progressProblemsCount = document.getElementById('progress-problems-count');
    const progressStreakCount = document.getElementById('progress-streak-count');
    const progressPatternsCount = document.getElementById('progress-patterns-count');
    const overallReadinessPercent = document.getElementById('overall-readiness-percent');
    const overallReadinessFill = document.getElementById('overall-readiness-fill');
    const btnResetProgress = document.getElementById('btn-reset-progress');
    const btnExportProgress = document.getElementById('btn-export-progress');

    function renderProgressView() {
        if (!window.DSA_QUEST_DATA) return;

        // Metric numbers
        if (progressTopicsCount) progressTopicsCount.textContent = state.completedPhases.length;
        if (progressProblemsCount) progressProblemsCount.textContent = state.completedProblems.length;
        if (progressStreakCount) progressStreakCount.textContent = state.streak;
        if (progressPatternsCount) progressPatternsCount.textContent = state.patternScore;

        // Readiness calculation
        const totalPossibleScore = (DSA_QUEST_DATA.phases.length * 2) + (DSA_QUEST_DATA.problems.length * 5) + 20;
        const currentScore = (state.completedPhases.length * 2) + (state.completedProblems.length * 5) + (state.patternScore * 4);
        const readiness = Math.min(100, Math.round((currentScore / totalPossibleScore) * 100));

        if (overallReadinessPercent) overallReadinessPercent.textContent = `${readiness}%`;
        if (overallReadinessFill) overallReadinessFill.style.width = `${readiness}%`;

        // Render Achievements Grid
        if (achievementsContainer) {
            achievementsContainer.innerHTML = DSA_QUEST_DATA.achievements.map(ach => {
                const isUnlocked = state.unlockedAchievements.includes(ach.id);
                return `
                    <div class="achievement-card ${isUnlocked ? 'unlocked' : ''}">
                        <div class="achievement-icon">${ach.icon}</div>
                        <div>
                            <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
                                <span>${ach.title}</span>
                                ${isUnlocked ? '<span style="font-size: 0.72rem; color: var(--warning); background: var(--warning-bg); padding: 0.1rem 0.4rem; border-radius: 4px;">UNLOCKED</span>' : ''}
                            </div>
                            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                                ${ach.desc}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    if (btnResetProgress) {
        btnResetProgress.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all your local DSA Quest progress? This cannot be undone.')) {
                state = { ...defaultState };
                saveState();
                showToast('Local progress reset successfully', 'info');
                renderRoadmap();
                renderPracticeProblems();
                renderProgressView();
                renderPatternQuiz();
                renderDailyChallenge();
            }
        });
    }

    if (btnExportProgress) {
        btnExportProgress.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `dsa_quest_backup_${new Date().toISOString().split('T')[0]}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast('Progress JSON exported to downloads!', 'success');
        });
    }

    // =========================================================================
    // 14. INITIAL BOOTSTRAP
    // =========================================================================
    renderRoadmap();
    loadLesson('two_pointers');
    renderPatternQuiz();
    renderPracticeProblems();
    renderDailyChallenge();
    renderPlacementArena();
    renderProgressView();
    updateGlobalUI();
});
