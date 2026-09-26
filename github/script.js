/**
 * PlacementPrep - Git & GitHub Practice Module Engine
 * Dark Editorial Interactive Practice, Timed Exam & Revision Engine
 */

(function () {
    'use strict';

    // State
    const state = {
        config: {
            questionCount: 10,
            difficulty: 'Mixed',
            questionType: 'All',
            mode: 'Practice',
            topicFilter: null
        },
        session: {
            active: false,
            questions: [],
            currentIndex: 0,
            answers: {},        // questionId -> selectedIndex
            evaluated: {},      // questionId -> boolean
            bookmarks: new Set(),
            startTime: null,
            timeRemaining: 0,
            timerInterval: null,
            isTimed: false,
            isReviewMode: false,
            reviewFilter: 'all' // 'all', 'incorrect', 'bookmarked'
        }
    };

    // DOM Elements
    const elements = {
        // Sections / Views
        heroSection: document.getElementById('hero-section'),
        specsSection: document.getElementById('specs-section'),
        topicsSection: document.getElementById('topics-section'),
        configSection: document.getElementById('config-section'),
        revisionSection: document.getElementById('revision-section'),
        practiceStage: document.getElementById('practice-stage'),
        resultStage: document.getElementById('result-stage'),
        modalOverlay: document.getElementById('modal-overlay'),

        // Config buttons
        countBtns: document.querySelectorAll('[data-config="count"]'),
        diffBtns: document.querySelectorAll('[data-config="diff"]'),
        typeBtns: document.querySelectorAll('[data-config="type"]'),
        modeBtns: document.querySelectorAll('[data-config="mode"]'),
        configSummary: document.getElementById('config-summary-text'),
        startPracticeBtn: document.getElementById('start-practice-btn'),
        heroStartBtn: document.getElementById('hero-start-btn'),

        // Question Screen Elements
        questionNumber: document.getElementById('question-number-display'),
        timerBox: document.getElementById('timer-box-display'),
        timerDisplay: document.getElementById('timer-time-display'),
        progressBar: document.getElementById('practice-progress-fill'),
        difficultyBadge: document.getElementById('difficulty-badge'),
        topicBadge: document.getElementById('topic-badge'),
        typeBadge: document.getElementById('type-badge'),
        bookmarkBtn: document.getElementById('bookmark-toggle-btn'),
        questionText: document.getElementById('question-statement'),
        commandBlock: document.getElementById('command-visualizer-block'),
        commandSnippet: document.getElementById('command-snippet-code'),
        copySnippetBtn: document.getElementById('copy-snippet-btn'),
        workflowStrip: document.getElementById('workflow-visualizer-strip'),
        optionsContainer: document.getElementById('options-container'),
        explanationPane: document.getElementById('explanation-pane'),
        correctAnswerText: document.getElementById('correct-answer-text'),
        explanationWhy: document.getElementById('explanation-why-text'),
        placementTakeaway: document.getElementById('placement-takeaway-text'),
        placementTrapBox: document.getElementById('placement-trap-box'),
        placementTrapTitle: document.getElementById('placement-trap-title'),
        placementTrapDesc: document.getElementById('placement-trap-desc'),
        prevQuestionBtn: document.getElementById('prev-question-btn'),
        nextQuestionBtn: document.getElementById('next-question-btn'),
        endSessionBtn: document.getElementById('end-session-btn'),
        inlineScoreDisplay: document.getElementById('inline-score-val'),

        // Results Elements
        resultScore: document.getElementById('result-score-val'),
        resultHeadline: document.getElementById('result-headline-msg'),
        resultAccuracy: document.getElementById('result-accuracy-val'),
        resultCorrect: document.getElementById('result-correct-val'),
        resultIncorrect: document.getElementById('result-incorrect-val'),
        resultTime: document.getElementById('result-time-val'),
        strongTopicsList: document.getElementById('strong-topics-container'),
        weakTopicsList: document.getElementById('weak-topics-container'),
        reviewAllBtn: document.getElementById('review-all-btn'),
        reviewIncorrectBtn: document.getElementById('review-incorrect-btn'),
        retryPracticeBtn: document.getElementById('retry-practice-btn'),
        backHomeBtn: document.getElementById('back-home-btn'),

        // Topic Grid
        topicsGrid: document.getElementById('topics-grid-container'),

        // Navigation
        themeToggle: document.getElementById('theme-toggle'),
        navProgressPill: document.getElementById('nav-progress-text'),
        mobileMenuBtn: document.getElementById('mobile-menu-btn'),
        navLinksMenu: document.getElementById('nav-links-menu'),

        // Modals
        modalHeading: document.getElementById('modal-heading'),
        modalDesc: document.getElementById('modal-desc'),
        modalConfirmBtn: document.getElementById('modal-confirm-btn'),
        modalCancelBtn: document.getElementById('modal-cancel-btn')
    };

    // -------------------------------------------------------------
    // Initialization
    // -------------------------------------------------------------
    function init() {
        initTheme();
        renderTopicsGrid();
        updateConfigSummary();
        attachEventListeners();
        loadSavedBookmarks();
    }

    // -------------------------------------------------------------
    // Theme Management
    // -------------------------------------------------------------
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('placementPrep_theme', next);
        localStorage.setItem('placementprep-theme', next);
    }

    // -------------------------------------------------------------
    // Topic Explorer Rendering
    // -------------------------------------------------------------
    function renderTopicsGrid() {
        if (!elements.topicsGrid || typeof GITHUB_TOPICS === 'undefined') return;

        elements.topicsGrid.innerHTML = GITHUB_TOPICS.map((topic, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            let priorityBadgeClass = 'priority-medium';
            let priorityText = '📌 KNOW THIS';

            if (topic.priority === 'very_high') {
                priorityBadgeClass = 'priority-must-know';
                priorityText = '🔥 MUST KNOW';
            } else if (topic.priority === 'high') {
                priorityBadgeClass = 'priority-high';
                priorityText = '⭐ HIGH PRIORITY';
            }

            return `
                <div class="topic-item-card" data-topic-id="${topic.id}">
                    <div>
                        <div class="topic-card-header">
                            <span class="topic-order-index">${num}</span>
                            <span class="priority-pill ${priorityBadgeClass}">${priorityText}</span>
                        </div>
                        <h4 class="topic-title-text">${escapeHtml(topic.name)}</h4>
                        <p class="topic-desc-text">${escapeHtml(topic.desc)}</p>
                    </div>
                    <div class="topic-card-footer">
                        <span>${topic.count} Exam Questions</span>
                        <span class="topic-cta-link">Practice &rarr;</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // -------------------------------------------------------------
    // Configuration Setup
    // -------------------------------------------------------------
    function updateConfigSummary() {
        if (!elements.configSummary) return;
        const topicText = state.config.topicFilter
            ? `Topic: ${GITHUB_TOPICS.find(t => t.id === state.config.topicFilter)?.name || 'Custom'}`
            : 'All 14 Topics';

        elements.configSummary.innerHTML = `
            Selected: <strong>${state.config.questionCount} Questions</strong> &bull; 
            <strong>${state.config.difficulty} Difficulty</strong> &bull; 
            <strong>${state.config.questionType}</strong> &bull; 
            <strong>${state.config.mode} Mode</strong> &bull; 
            <span>${topicText}</span>
        `;
    }

    // -------------------------------------------------------------
    // Practice Session Setup
    // -------------------------------------------------------------
    function startSession(customTopicId = null) {
        if (typeof GITHUB_QUESTIONS === 'undefined' || GITHUB_QUESTIONS.length === 0) {
            alert('Questions failed to load. Please refresh.');
            return;
        }

        if (customTopicId) {
            state.config.topicFilter = customTopicId;
        }

        // Filter questions
        let pool = [...GITHUB_QUESTIONS];

        if (state.config.topicFilter) {
            pool = pool.filter(q => q.topicId === state.config.topicFilter);
        }

        if (state.config.difficulty !== 'Mixed') {
            pool = pool.filter(q => q.difficulty === state.config.difficulty);
        }

        if (state.config.questionType !== 'All') {
            if (state.config.questionType === 'Scenario Based') {
                pool = pool.filter(q => q.isScenario);
            } else if (state.config.questionType === 'Command Based') {
                pool = pool.filter(q => q.type === 'Command Based');
            } else if (state.config.questionType === 'Conceptual') {
                pool = pool.filter(q => q.type === 'Conceptual' || q.type === 'Comparison');
            } else if (state.config.questionType === 'Troubleshooting') {
                pool = pool.filter(q => q.type === 'Troubleshooting');
            }
        }

        // If filtered pool is smaller than questionCount, use entire available pool
        if (pool.length === 0) {
            alert('No questions match this specific combination of filters. Starting with Mixed pool.');
            pool = [...GITHUB_QUESTIONS];
        }

        // Shuffle pool
        shuffleArray(pool);

        // Slice to requested count
        const finalCount = Math.min(state.config.questionCount, pool.length);
        const selectedQuestions = pool.slice(0, finalCount);

        // Reset session state
        state.session.active = true;
        state.session.questions = selectedQuestions;
        state.session.currentIndex = 0;
        state.session.answers = {};
        state.session.evaluated = {};
        state.session.startTime = Date.now();
        state.session.isReviewMode = false;
        state.session.isTimed = (state.config.mode === 'Timed Test');

        // Setup timer if timed
        if (state.session.isTimed) {
            let totalSeconds = 45 * 60; // default for 60 questions
            if (finalCount <= 10) totalSeconds = 8 * 60;
            else if (finalCount <= 20) totalSeconds = 15 * 60;
            else if (finalCount <= 30) totalSeconds = 22 * 60;

            state.session.timeRemaining = totalSeconds;
            startTimer();
        } else {
            clearInterval(state.session.timerInterval);
            if (elements.timerBox) elements.timerBox.style.display = 'none';
        }

        // Switch to practice view
        showPracticeView();
        renderCurrentQuestion();
    }

    function startTimer() {
        if (!elements.timerBox || !elements.timerDisplay) return;
        elements.timerBox.style.display = 'inline-flex';
        updateTimerDisplay();

        clearInterval(state.session.timerInterval);
        state.session.timerInterval = setInterval(() => {
            state.session.timeRemaining--;
            updateTimerDisplay();

            if (state.session.timeRemaining <= 60 * 2) {
                elements.timerBox.classList.add('urgent');
            }

            if (state.session.timeRemaining <= 0) {
                clearInterval(state.session.timerInterval);
                finishSession(true); // auto submit
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        if (!elements.timerDisplay) return;
        const minutes = Math.floor(state.session.timeRemaining / 60);
        const seconds = state.session.timeRemaining % 60;
        elements.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // -------------------------------------------------------------
    // Screen / View Switchers
    // -------------------------------------------------------------
    function showPracticeView() {
        if (elements.heroSection) elements.heroSection.style.display = 'none';
        if (elements.specsSection) elements.specsSection.style.display = 'none';
        if (elements.topicsSection) elements.topicsSection.style.display = 'none';
        if (elements.configSection) elements.configSection.style.display = 'none';
        if (elements.revisionSection) elements.revisionSection.style.display = 'none';
        if (elements.resultStage) elements.resultStage.style.display = 'none';

        if (elements.practiceStage) {
            elements.practiceStage.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function showLandingView() {
        clearInterval(state.session.timerInterval);
        state.session.active = false;

        if (elements.heroSection) elements.heroSection.style.display = 'block';
        if (elements.specsSection) elements.specsSection.style.display = 'block';
        if (elements.topicsSection) elements.topicsSection.style.display = 'block';
        if (elements.configSection) elements.configSection.style.display = 'block';
        if (elements.revisionSection) elements.revisionSection.style.display = 'block';
        if (elements.practiceStage) elements.practiceStage.style.display = 'none';
        if (elements.resultStage) elements.resultStage.style.display = 'none';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showResultView() {
        clearInterval(state.session.timerInterval);
        state.session.active = false;

        if (elements.practiceStage) elements.practiceStage.style.display = 'none';
        if (elements.resultStage) {
            elements.resultStage.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // -------------------------------------------------------------
    // Question Renderer
    // -------------------------------------------------------------
    function renderCurrentQuestion() {
        const qList = state.session.questions;
        const index = state.session.currentIndex;
        const q = qList[index];

        if (!q) return;

        // Progress & Counter
        const total = qList.length;
        const currentNumber = index + 1;
        if (elements.questionNumber) {
            elements.questionNumber.innerHTML = `<strong>${currentNumber.toString().padStart(2, '0')}</strong> / ${total.toString().padStart(2, '0')}`;
        }

        const progressPercent = ((currentNumber) / total) * 100;
        if (elements.progressBar) {
            elements.progressBar.style.width = `${progressPercent}%`;
        }

        // Badges
        if (elements.difficultyBadge) {
            elements.difficultyBadge.textContent = q.difficulty.toUpperCase();
            elements.difficultyBadge.className = 'priority-pill';
            if (q.difficulty === 'Hard') elements.difficultyBadge.classList.add('priority-must-know');
            else if (q.difficulty === 'Medium') elements.difficultyBadge.classList.add('priority-high');
            else elements.difficultyBadge.classList.add('priority-medium');
        }

        if (elements.topicBadge) {
            elements.topicBadge.textContent = q.topic.toUpperCase();
        }

        if (elements.typeBadge) {
            if (q.isScenario) {
                elements.typeBadge.style.display = 'inline-flex';
                elements.typeBadge.textContent = 'SCENARIO';
                elements.typeBadge.className = 'priority-pill priority-must-know';
            } else if (q.type === 'Troubleshooting') {
                elements.typeBadge.style.display = 'inline-flex';
                elements.typeBadge.textContent = 'TROUBLESHOOTING';
                elements.typeBadge.className = 'priority-pill priority-high';
            } else if (q.type === 'Command Based') {
                elements.typeBadge.style.display = 'inline-flex';
                elements.typeBadge.textContent = 'COMMAND';
                elements.typeBadge.className = 'priority-pill priority-medium';
            } else {
                elements.typeBadge.style.display = 'none';
            }
        }

        // Bookmark state
        const isBookmarked = state.session.bookmarks.has(q.id);
        if (elements.bookmarkBtn) {
            elements.bookmarkBtn.classList.toggle('active', isBookmarked);
        }

        // Question Statement
        if (elements.questionText) {
            elements.questionText.textContent = q.question;
        }

        // Code / Terminal Visualizer
        if (elements.commandBlock && elements.commandSnippet) {
            if (q.codeSnippet) {
                elements.commandSnippet.textContent = q.codeSnippet;
                elements.commandBlock.style.display = 'block';
            } else {
                elements.commandBlock.style.display = 'none';
            }
        }

        // Git Workflow Visualizer Strip
        renderWorkflowStrip(q.workflowStage);

        // Options
        renderOptions(q);

        // Inline score
        updateInlineScore();

        // Nav Buttons state
        if (elements.prevQuestionBtn) {
            elements.prevQuestionBtn.disabled = (index === 0);
        }

        if (elements.nextQuestionBtn) {
            if (index === total - 1) {
                elements.nextQuestionBtn.textContent = 'Finish Practice &rarr;';
            } else {
                elements.nextQuestionBtn.textContent = 'Next Question &rarr;';
            }
        }

        // Explanation handling
        const alreadyAnswered = state.session.evaluated[q.id];
        if (alreadyAnswered) {
            showExplanation(q, state.session.answers[q.id]);
        } else {
            hideExplanation();
        }
    }

    function renderWorkflowStrip(stage) {
        if (!elements.workflowStrip) return;

        const stages = ['Working Directory', 'Staging Area', 'Local Repository', 'Remote Repository'];
        const activeStage = stage || 'Local Repository';

        elements.workflowStrip.innerHTML = stages.map((s, i) => {
            const isActive = (s.toLowerCase() === activeStage.toLowerCase());
            const nodeHtml = `<span class="diagram-node ${isActive ? 'active' : ''}">${s}</span>`;
            const connectorHtml = (i < stages.length - 1)
                ? `<span class="diagram-connector ${isActive ? 'active' : ''}">&rarr;</span>`
                : '';
            return nodeHtml + connectorHtml;
        }).join('');
    }

    function renderOptions(q) {
        if (!elements.optionsContainer) return;

        const keys = ['A', 'B', 'C', 'D'];
        const isAnswered = state.session.evaluated[q.id];
        const selectedIdx = state.session.answers[q.id];

        elements.optionsContainer.innerHTML = q.options.map((optText, idx) => {
            let extraClass = '';
            if (isAnswered) {
                if (idx === q.correct) {
                    extraClass = 'correct';
                } else if (idx === selectedIdx) {
                    extraClass = 'incorrect';
                }
            }

            return `
                <button type="button" class="answer-option-row ${extraClass}" data-option-index="${idx}" ${isAnswered ? 'disabled' : ''}>
                    <span class="option-index-badge">${keys[idx]}</span>
                    <span class="option-text-body">${escapeHtml(optText)}</span>
                </button>
            `;
        }).join('');
    }

    function handleOptionSelect(selectedIndex) {
        const q = state.session.questions[state.session.currentIndex];
        if (!q || state.session.evaluated[q.id]) return;

        // Record
        state.session.answers[q.id] = selectedIndex;
        state.session.evaluated[q.id] = true;

        // Highlight options
        const optionBtns = elements.optionsContainer.querySelectorAll('.answer-option-row');
        optionBtns.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correct) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex) {
                btn.classList.add('incorrect');
            }
        });

        // Show Explanation
        showExplanation(q, selectedIndex);
        updateInlineScore();
    }

    function showExplanation(q, selectedIndex) {
        if (!elements.explanationPane) return;

        const isCorrect = (selectedIndex === q.correct);
        elements.correctAnswerText.textContent = q.explanation.correctAnswer;
        elements.explanationWhy.textContent = q.explanation.why;
        elements.placementTakeaway.textContent = q.explanation.placementTakeaway;

        // Placement Trap indicator
        if (q.explanation.placementTrap && elements.placementTrapBox) {
            elements.placementTrapDesc.textContent = q.explanation.placementTrap;
            elements.placementTrapBox.style.display = 'flex';
        } else if (elements.placementTrapBox) {
            elements.placementTrapBox.style.display = 'none';
        }

        elements.explanationPane.style.display = 'flex';
    }

    function hideExplanation() {
        if (elements.explanationPane) {
            elements.explanationPane.style.display = 'none';
        }
    }

    function updateInlineScore() {
        if (!elements.inlineScoreDisplay) return;

        let correct = 0;
        let answered = 0;
        state.session.questions.forEach(q => {
            if (state.session.evaluated[q.id]) {
                answered++;
                if (state.session.answers[q.id] === q.correct) {
                    correct++;
                }
            }
        });

        elements.inlineScoreDisplay.textContent = `${correct} / ${answered}`;
        if (elements.navProgressPill) {
            elements.navProgressPill.textContent = `${correct} Correct`;
        }
    }

    // -------------------------------------------------------------
    // Session Completion & Results
    // -------------------------------------------------------------
    function finishSession(autoSubmitted = false) {
        clearInterval(state.session.timerInterval);

        const qList = state.session.questions;
        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;

        const topicPerformance = {}; // topicId -> { total: 0, correct: 0, name: '' }

        qList.forEach(q => {
            if (!topicPerformance[q.topicId]) {
                topicPerformance[q.topicId] = { total: 0, correct: 0, name: q.topic };
            }
            topicPerformance[q.topicId].total++;

            if (state.session.evaluated[q.id]) {
                if (state.session.answers[q.id] === q.correct) {
                    correctCount++;
                    topicPerformance[q.topicId].correct++;
                } else {
                    incorrectCount++;
                }
            } else {
                unansweredCount++;
            }
        });

        const totalQuestions = qList.length;
        const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
        const timeTakenSeconds = Math.round((Date.now() - state.session.startTime) / 1000);
        const mins = Math.floor(timeTakenSeconds / 60);
        const secs = timeTakenSeconds % 60;
        const formattedTime = `${mins}m ${secs}s`;

        // Render Results Screen
        if (elements.resultScore) elements.resultScore.textContent = `${correctCount}/${totalQuestions}`;
        if (elements.resultAccuracy) elements.resultAccuracy.textContent = `${accuracy}%`;
        if (elements.resultCorrect) elements.resultCorrect.textContent = correctCount;
        if (elements.resultIncorrect) elements.resultIncorrect.textContent = incorrectCount + unansweredCount;
        if (elements.resultTime) elements.resultTime.textContent = formattedTime;

        // Feedback Headline
        if (elements.resultHeadline) {
            if (accuracy >= 85) {
                elements.resultHeadline.textContent = "Exceptional! You've mastered MNC fresher placement Git expectations with flying colors.";
            } else if (accuracy >= 70) {
                elements.resultHeadline.textContent = "Solid performance! You have a firm grasp of essential Git commands and workflow concepts.";
            } else if (accuracy >= 50) {
                elements.resultHeadline.textContent = "Decent foundation, but several high-frequency placement traps tripped you up. Review below.";
            } else {
                elements.resultHeadline.textContent = "Needs dedicated revision. Focus on basic commands, merge conflicts, and reset vs revert.";
            }
        }

        // Strong vs Weak Topics
        renderTopicBreakdown(topicPerformance);

        // Switch to Results
        showResultView();
    }

    function renderTopicBreakdown(topicPerformance) {
        if (!elements.strongTopicsList || !elements.weakTopicsList) return;

        const strong = [];
        const weak = [];

        Object.keys(topicPerformance).forEach(tid => {
            const data = topicPerformance[tid];
            const pct = Math.round((data.correct / data.total) * 100);
            if (pct >= 70) {
                strong.push(`${data.name} (${pct}%)`);
            } else {
                weak.push(`${data.name} (${pct}%)`);
            }
        });

        elements.strongTopicsList.innerHTML = strong.length > 0
            ? strong.map(t => `<span class="cluster-pill strong">${escapeHtml(t)}</span>`).join('')
            : '<span style="color: var(--text-muted); font-size: 0.85rem;">None above 70% yet. Practice makes perfect!</span>';

        elements.weakTopicsList.innerHTML = weak.length > 0
            ? weak.map(t => `<span class="cluster-pill weak">${escapeHtml(t)}</span>`).join('')
            : '<span style="color: var(--soft-success); font-size: 0.85rem;">No major weak spots found! Great work.</span>';
    }

    // -------------------------------------------------------------
    // Review Mode
    // -------------------------------------------------------------
    function startReviewMode(filter = 'all') {
        state.session.isReviewMode = true;
        state.session.reviewFilter = filter;

        let reviewQuestions = [...state.session.questions];

        if (filter === 'incorrect') {
            reviewQuestions = reviewQuestions.filter(q => {
                const ans = state.session.answers[q.id];
                return ans === undefined || ans !== q.correct;
            });
        }

        if (reviewQuestions.length === 0) {
            alert('No questions to review in this category!');
            return;
        }

        state.session.questions = reviewQuestions;
        state.session.currentIndex = 0;
        showPracticeView();
        renderCurrentQuestion();
    }

    // -------------------------------------------------------------
    // Bookmarks Management
    // -------------------------------------------------------------
    function loadSavedBookmarks() {
        try {
            const saved = localStorage.getItem('placementPrep_git_bookmarks');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    state.session.bookmarks = new Set(parsed);
                }
            }
        } catch (e) {
            console.error('Failed to load bookmarks', e);
        }
    }

    function toggleBookmark() {
        const q = state.session.questions[state.session.currentIndex];
        if (!q) return;

        if (state.session.bookmarks.has(q.id)) {
            state.session.bookmarks.delete(q.id);
        } else {
            state.session.bookmarks.add(q.id);
        }

        try {
            localStorage.setItem('placementPrep_git_bookmarks', JSON.stringify([...state.session.bookmarks]));
        } catch (e) {}

        if (elements.bookmarkBtn) {
            elements.bookmarkBtn.classList.toggle('active', state.session.bookmarks.has(q.id));
        }
    }

    // -------------------------------------------------------------
    // Modal Helpers
    // -------------------------------------------------------------
    function showModal(title, desc, onConfirm) {
        if (!elements.modalOverlay) return;
        elements.modalHeading.textContent = title;
        elements.modalDesc.textContent = desc;

        elements.modalConfirmBtn.onclick = () => {
            elements.modalOverlay.classList.remove('active');
            if (onConfirm) onConfirm();
        };

        elements.modalCancelBtn.onclick = () => {
            elements.modalOverlay.classList.remove('active');
        };

        elements.modalOverlay.classList.add('active');
    }

    // -------------------------------------------------------------
    // Event Listeners
    // -------------------------------------------------------------
    function attachEventListeners() {
        // Theme toggle
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
        }

        // Mobile menu toggle
        if (elements.mobileMenuBtn && elements.navLinksMenu) {
            elements.mobileMenuBtn.addEventListener('click', () => {
                const isShown = elements.navLinksMenu.style.display === 'flex';
                elements.navLinksMenu.style.display = isShown ? 'none' : 'flex';
                if (!isShown) {
                    elements.navLinksMenu.style.flexDirection = 'column';
                    elements.navLinksMenu.style.position = 'absolute';
                    elements.navLinksMenu.style.top = '100%';
                    elements.navLinksMenu.style.left = '0';
                    elements.navLinksMenu.style.width = '100%';
                    elements.navLinksMenu.style.background = 'var(--bg-card)';
                    elements.navLinksMenu.style.padding = '1rem';
                    elements.navLinksMenu.style.borderBottom = '1px solid var(--border-subtle)';
                }
            });
        }

        // Config buttons
        elements.countBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.countBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.config.questionCount = parseInt(btn.dataset.val, 10);
                updateConfigSummary();
            });
        });

        elements.diffBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.diffBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.config.difficulty = btn.dataset.val;
                updateConfigSummary();
            });
        });

        elements.typeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.typeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.config.questionType = btn.dataset.val;
                updateConfigSummary();
            });
        });

        elements.modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.modeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.config.mode = btn.dataset.val;
                updateConfigSummary();
            });
        });

        // Launch buttons
        if (elements.startPracticeBtn) {
            elements.startPracticeBtn.addEventListener('click', () => startSession());
        }

        if (elements.heroStartBtn) {
            elements.heroStartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                startSession();
            });
        }

        // Topic click from grid
        if (elements.topicsGrid) {
            elements.topicsGrid.addEventListener('click', (e) => {
                const card = e.target.closest('.topic-item-card');
                if (card) {
                    const topicId = card.dataset.topicId;
                    startSession(topicId);
                }
            });
        }

        // Option click delegation
        if (elements.optionsContainer) {
            elements.optionsContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.answer-option-row');
                if (btn && !btn.disabled) {
                    const idx = parseInt(btn.dataset.optionIndex, 10);
                    handleOptionSelect(idx);
                }
            });
        }

        // Bookmark button
        if (elements.bookmarkBtn) {
            elements.bookmarkBtn.addEventListener('click', toggleBookmark);
        }

        // Navigation in practice
        if (elements.prevQuestionBtn) {
            elements.prevQuestionBtn.addEventListener('click', () => {
                if (state.session.currentIndex > 0) {
                    state.session.currentIndex--;
                    renderCurrentQuestion();
                }
            });
        }

        if (elements.nextQuestionBtn) {
            elements.nextQuestionBtn.addEventListener('click', () => {
                if (state.session.currentIndex < state.session.questions.length - 1) {
                    state.session.currentIndex++;
                    renderCurrentQuestion();
                } else {
                    // Last question finish
                    if (state.session.isTimed) {
                        showModal('Finish & Submit Test?', 'You have reached the final question. Are you ready to submit your test?', () => {
                            finishSession();
                        });
                    } else {
                        finishSession();
                    }
                }
            });
        }

        if (elements.endSessionBtn) {
            elements.endSessionBtn.addEventListener('click', () => {
                showModal('End Practice Session?', 'Are you sure you want to exit? Your current test results will be compiled.', () => {
                    finishSession();
                });
            });
        }

        // Copy button
        if (elements.copySnippetBtn && elements.commandSnippet) {
            elements.copySnippetBtn.addEventListener('click', () => {
                const text = elements.commandSnippet.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = elements.copySnippetBtn.textContent;
                    elements.copySnippetBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        elements.copySnippetBtn.textContent = originalText;
                    }, 1800);
                }).catch(() => {
                    elements.copySnippetBtn.textContent = 'Copied';
                });
            });
        }

        // Results Buttons
        if (elements.reviewAllBtn) {
            elements.reviewAllBtn.addEventListener('click', () => startReviewMode('all'));
        }

        if (elements.reviewIncorrectBtn) {
            elements.reviewIncorrectBtn.addEventListener('click', () => startReviewMode('incorrect'));
        }

        if (elements.retryPracticeBtn) {
            elements.retryPracticeBtn.addEventListener('click', () => startSession());
        }

        if (elements.backHomeBtn) {
            elements.backHomeBtn.addEventListener('click', showLandingView);
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (!state.session.active) return;

            // 1, 2, 3, 4 or A, B, C, D
            const key = e.key.toUpperCase();
            if (['1', 'A'].includes(key)) selectOptionByIndex(0);
            else if (['2', 'B'].includes(key)) selectOptionByIndex(1);
            else if (['3', 'C'].includes(key)) selectOptionByIndex(2);
            else if (['4', 'D'].includes(key)) selectOptionByIndex(3);
            else if (e.key === 'ArrowRight' && state.session.evaluated[state.session.questions[state.session.currentIndex]?.id]) {
                if (elements.nextQuestionBtn) elements.nextQuestionBtn.click();
            } else if (e.key === 'ArrowLeft' && state.session.currentIndex > 0) {
                if (elements.prevQuestionBtn) elements.prevQuestionBtn.click();
            }
        });
    }

    function selectOptionByIndex(idx) {
        if (!elements.optionsContainer) return;
        const btn = elements.optionsContainer.querySelector(`[data-option-index="${idx}"]`);
        if (btn && !btn.disabled) {
            handleOptionSelect(idx);
        }
    }

    // -------------------------------------------------------------
    // Utility Helpers
    // -------------------------------------------------------------
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
