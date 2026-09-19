// Microsoft Office Suite (Excel, Word, PowerPoint) - Consolidated Application Logic
(function () {
    'use strict';

    // Master Question Pools & State
    let allQuestions = [];          // Master list of 90 questions
    let activeQuestions = [];       // Filtered active pool
    let currentIndex = 0;           // Index in activeQuestions
    let currentMode = 'practice';   // 'practice' | 'exam' | 'flashcards' | 'review'

    // User responses & progress
    let userAnswers = {};           // { [qId]: selectedOptionIndex (0..3) }
    let markedQuestions = new Set();// Set of question IDs flagged for review
    let isAnswerSubmitted = {};     // { [qId]: boolean }

    // Active Filters
    let currentAppFilter = 'all';   // 'all' | 'excel' | 'word' | 'powerpoint'
    let currentDiffFilter = 'all';  // 'all' | 'Easy' | 'Medium' | 'Hard'
    let paletteAppFilter = 'all';   // Filter for sidebar palette view

    // Exam Timers
    let examTimeRemaining = 45 * 60; // 45 minutes default for 90 questions
    let timerInterval = null;
    let examStartTime = null;
    let examEndTime = null;

    // DOM Elements
    const screenModeSelect = document.getElementById('screen-mode-select');
    const screenQuizWorkspace = document.getElementById('screen-quiz-workspace');
    const screenResults = document.getElementById('screen-results');

    const headerModeBadge = document.getElementById('header-mode-badge');
    const timerBox = document.getElementById('timer-box');
    const timerDisplay = document.getElementById('timer-display');
    const scoreDisplay = document.getElementById('score-value');
    const themeToggleBtn = document.getElementById('theme-toggle');

    const quizFilterBar = document.getElementById('quiz-filter-bar');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressLabel = document.getElementById('question-progress-label');
    const progressPercent = document.getElementById('question-progress-percent');

    const badgeQNumber = document.getElementById('badge-q-number');
    const badgeQApp = document.getElementById('badge-q-app');
    const badgeQTopic = document.getElementById('badge-q-topic');
    const badgeQDiff = document.getElementById('badge-q-diff');
    const btnMarkReview = document.getElementById('btn-mark-review');
    const markText = document.getElementById('mark-text');

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    const flashcardRevealRow = document.getElementById('flashcard-reveal-row');
    const btnFlipCard = document.getElementById('btn-flip-card');

    const explanationPanel = document.getElementById('explanation-panel');
    const explanationStatusIcon = document.getElementById('explanation-status-icon');
    const explanationStatusHeading = document.getElementById('explanation-status-heading');
    const explanationStatusSub = document.getElementById('explanation-status-sub');
    const explanationSummaryText = document.getElementById('explanation-summary-text');
    const explanationWhyCorrect = document.getElementById('explanation-why-correct');
    const whyCorrectBlock = document.getElementById('why-correct-block');
    const distractorSection = document.getElementById('distractor-section');
    const distractorList = document.getElementById('distractor-list');
    const realWorldBlock = document.getElementById('real-world-block');
    const textRealWorld = document.getElementById('text-real-world');

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSubmitExam = document.getElementById('btn-submit-exam');
    const btnChangeMode = document.getElementById('btn-change-mode');

    const navigatorGrid = document.getElementById('navigator-grid');
    const navCountBadge = document.getElementById('nav-count-badge');
    const sideStatAnswered = document.getElementById('side-stat-answered');
    const sideStatMarked = document.getElementById('side-stat-marked');
    const sideStatRemaining = document.getElementById('side-stat-remaining');

    // Results screen
    const resultsPercentage = document.getElementById('results-percentage');
    const resultsScoreFraction = document.getElementById('results-score-fraction');
    const resultsTimeTaken = document.getElementById('results-time-taken');
    const resultsReadinessTag = document.getElementById('results-readiness-tag');
    const appBreakdownGrid = document.getElementById('app-breakdown-grid');
    const diffBreakdownGrid = document.getElementById('diff-breakdown-grid');
    const btnReviewAnswers = document.getElementById('btn-review-answers');
    const btnRetakeExam = document.getElementById('btn-retake-exam');

    // Init function
    function init() {
        initTheme();
        loadQuestions();
        checkUrlParams();
        bindEvents();
        updateScorePill();
    }

    // Theme initialization
    function initTheme() {
        const savedTheme = localStorage.getItem('placementprep-theme') || localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'light';
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('placementprep-theme', next);
                localStorage.setItem('theme', next);
            });
        }
    }

    // Load questions from questionsData
    function loadQuestions() {
        if (typeof questionsData !== 'undefined' && Array.isArray(questionsData) && questionsData.length > 0) {
            allQuestions = questionsData;
        } else if (typeof questions !== 'undefined' && Array.isArray(questions) && questions.length > 0) {
            allQuestions = questions;
        } else {
            console.error('No question bank found in questions.js');
            return;
        }
        activeQuestions = [...allQuestions];
    }

    // URL parameter parsing (supports ?app=excel|word|powerpoint and ?mode=practice|exam|flashcards)
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const appParam = params.get('app');
        const modeParam = params.get('mode');

        if (appParam && ['excel', 'word', 'powerpoint'].includes(appParam.toLowerCase())) {
            currentAppFilter = appParam.toLowerCase();
            paletteAppFilter = currentAppFilter;

            // Highlight corresponding hero pills and filter buttons
            document.querySelectorAll('.app-pill-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.appTarget === currentAppFilter);
            });
            document.querySelectorAll('.filter-pill[data-filter-app]').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filterApp === currentAppFilter);
            });
            document.querySelectorAll('.pal-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.palFilter === currentAppFilter);
            });
        }

        if (modeParam && ['practice', 'exam', 'flashcards'].includes(modeParam.toLowerCase())) {
            startMode(modeParam.toLowerCase());
        }
    }

    // Event Bindings
    function bindEvents() {
        // Welcome Screen Mode Cards
        document.querySelectorAll('.start-mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                startMode(mode);
            });
        });

        // Quick App Filter on Welcome Screen
        document.querySelectorAll('.app-pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.appTarget;
                setAppFilter(target);
            });
        });

        // Workspace Filter Pills (App)
        document.querySelectorAll('.filter-pill[data-filter-app]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.filterApp;
                setAppFilter(target);
            });
        });

        // Workspace Filter Pills (Difficulty)
        document.querySelectorAll('.filter-pill[data-filter-diff]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const diff = e.currentTarget.dataset.filterDiff;
                setDiffFilter(diff);
            });
        });

        // Palette App Tabs
        document.querySelectorAll('.pal-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.pal-tab').forEach(t => t.classList.remove('active'));
                e.currentTarget.classList.add('active');
                paletteAppFilter = e.currentTarget.dataset.palFilter;
                renderPalette();
            });
        });

        // Navigation Controls
        btnPrev.addEventListener('click', () => navigateQuestion(-1));
        btnNext.addEventListener('click', () => navigateQuestion(1));
        btnChangeMode.addEventListener('click', returnToModeSelect);
        btnMarkReview.addEventListener('click', toggleFlagReview);

        // Flashcard Flip
        if (btnFlipCard) {
            btnFlipCard.addEventListener('click', flipFlashcard);
        }

        // Exam Submission
        btnSubmitExam.addEventListener('click', confirmSubmitExam);

        // Results Actions
        btnReviewAnswers.addEventListener('click', () => {
            currentMode = 'review';
            showScreen(screenQuizWorkspace);
            headerModeBadge.textContent = 'Review Mode';
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            btnNext.classList.remove('hidden');
            currentIndex = 0;
            renderCurrentQuestion();
            renderPalette();
        });

        btnRetakeExam.addEventListener('click', () => {
            startMode('exam');
        });

        // Global Keyboard Shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }

    // Set App Filter
    function setAppFilter(app) {
        currentAppFilter = app;
        paletteAppFilter = app;

        // Sync buttons
        document.querySelectorAll('.app-pill-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.appTarget === app);
        });
        document.querySelectorAll('.filter-pill[data-filter-app]').forEach(b => {
            b.classList.toggle('active', b.dataset.filterApp === app);
        });
        document.querySelectorAll('.pal-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.palFilter === app);
        });

        applyFilters();
    }

    // Set Difficulty Filter
    function setDiffFilter(diff) {
        currentDiffFilter = diff;
        document.querySelectorAll('.filter-pill[data-filter-diff]').forEach(b => {
            b.classList.toggle('active', b.dataset.filterDiff === diff);
        });
        applyFilters();
    }

    // Apply Filters to active questions
    function applyFilters() {
        if (currentMode === 'exam') {
            // In exam mode, app filtering applies if selected before start, otherwise test all
            activeQuestions = allQuestions.filter(q => {
                return currentAppFilter === 'all' || q.appKey === currentAppFilter;
            });
        } else {
            activeQuestions = allQuestions.filter(q => {
                const matchApp = (currentAppFilter === 'all') || (q.appKey === currentAppFilter);
                const matchDiff = (currentDiffFilter === 'all') || (q.difficulty.toLowerCase() === currentDiffFilter.toLowerCase());
                return matchApp && matchDiff;
            });
        }

        if (activeQuestions.length === 0) {
            activeQuestions = [...allQuestions];
        }

        currentIndex = 0;
        renderCurrentQuestion();
        renderPalette();
        updateStats();
    }

    // Start Mode
    function startMode(mode) {
        currentMode = mode;
        clearInterval(timerInterval);

        // Reset response state
        userAnswers = {};
        markedQuestions.clear();
        isAnswerSubmitted = {};

        // Setup question pool
        if (mode === 'exam') {
            // If user selected an app filter beforehand, respect it
            if (currentAppFilter !== 'all') {
                activeQuestions = allQuestions.filter(q => q.appKey === currentAppFilter);
                examTimeRemaining = 20 * 60; // 20 mins for 30 questions
            } else {
                activeQuestions = [...allQuestions];
                examTimeRemaining = 45 * 60; // 45 mins for 90 questions
            }
            // Shuffle questions for authentic exam simulation
            activeQuestions.sort(() => Math.random() - 0.5);

            headerModeBadge.textContent = 'Timed Exam Mode';
            headerModeBadge.className = 'badge mode-tag';
            quizFilterBar.classList.add('hidden');
            timerBox.classList.remove('hidden');
            btnSubmitExam.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');

            startExamTimer();
        } else if (mode === 'flashcards') {
            applyFilters();
            headerModeBadge.textContent = 'Flashcard Mode';
            headerModeBadge.className = 'badge mode-tag';
            quizFilterBar.classList.remove('hidden');
            timerBox.classList.add('hidden');
            btnSubmitExam.classList.add('hidden');
            flashcardRevealRow.classList.remove('hidden');
        } else { // practice
            applyFilters();
            headerModeBadge.textContent = 'Practice Mode';
            headerModeBadge.className = 'badge mode-tag';
            quizFilterBar.classList.remove('hidden');
            timerBox.classList.add('hidden');
            btnSubmitExam.classList.add('hidden');
            flashcardRevealRow.classList.add('hidden');
        }

        currentIndex = 0;
        showScreen(screenQuizWorkspace);
        renderCurrentQuestion();
        renderPalette();
        updateStats();
        updateScorePill();
    }

    // Screen display switcher
    function showScreen(screenToShow) {
        [screenModeSelect, screenQuizWorkspace, screenResults].forEach(s => s.classList.add('hidden'));
        screenToShow.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function returnToModeSelect() {
        if (currentMode === 'exam' && examTimeRemaining > 0 && Object.keys(userAnswers).length > 0) {
            if (!confirm('Are you sure you want to exit the exam? Your current progress will be lost.')) {
                return;
            }
        }
        clearInterval(timerInterval);
        showScreen(screenModeSelect);
        headerModeBadge.textContent = 'Practice Mode';
        timerBox.classList.add('hidden');
    }

    // Exam Timer
    function startExamTimer() {
        examStartTime = new Date();
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            examTimeRemaining--;
            updateTimerDisplay();

            if (examTimeRemaining <= 300) { // 5 mins warning
                timerBox.classList.add('timer-warning');
            }

            if (examTimeRemaining <= 0) {
                clearInterval(timerInterval);
                alert('Time is up! Your exam will now be submitted.');
                finishExam();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const mins = Math.floor(examTimeRemaining / 60);
        const secs = examTimeRemaining % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Render Current Question
    function renderCurrentQuestion() {
        if (activeQuestions.length === 0) return;

        const q = activeQuestions[currentIndex];
        const total = activeQuestions.length;

        // Progress bar
        progressLabel.textContent = `Question ${currentIndex + 1} of ${total}`;
        const pct = Math.round(((currentIndex + 1) / total) * 100);
        progressPercent.textContent = `${pct}%`;
        progressBarFill.style.width = `${pct}%`;

        // Meta badges
        badgeQNumber.textContent = `Q${q.id}`;
        
        // App badge
        badgeQApp.textContent = q.app;
        badgeQApp.className = `badge badge-app-${q.appKey}`;

        badgeQTopic.textContent = q.topic;
        
        badgeQDiff.textContent = q.difficulty;
        badgeQDiff.className = `badge badge-diff-${q.difficulty.toLowerCase()}`;

        // Flag button
        if (markedQuestions.has(q.id)) {
            btnMarkReview.classList.add('marked');
            markText.textContent = 'Flagged';
        } else {
            btnMarkReview.classList.remove('marked');
            markText.textContent = 'Flag';
        }

        // Question text
        questionText.textContent = q.question;

        // Options rendering
        optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        const selectedOpt = userAnswers[q.id];
        const submitted = isAnswerSubmitted[q.id];

        if (currentMode === 'flashcards') {
            optionsContainer.classList.add('hidden');
        } else {
            optionsContainer.classList.remove('hidden');
            q.options.forEach((optText, optIdx) => {
                const optEl = document.createElement('div');
                optEl.className = 'option-item';
                optEl.setAttribute('role', 'radio');
                optEl.setAttribute('tabindex', '0');

                if (selectedOpt === optIdx) {
                    optEl.classList.add('selected');
                }

                // In practice/review or when submitted, show correct/incorrect state
                if (currentMode === 'practice' || currentMode === 'review') {
                    if (submitted || currentMode === 'review') {
                        optEl.classList.add('disabled');
                        if (optIdx === q.correctAnswer) {
                            optEl.classList.add('correct');
                        } else if (selectedOpt === optIdx) {
                            optEl.classList.add('incorrect');
                        }
                    }
                }

                optEl.innerHTML = `
                    <div class="option-letter">${letters[optIdx]}</div>
                    <div class="option-label">${escapeHtml(optText)}</div>
                `;

                optEl.addEventListener('click', () => selectOption(optIdx));
                optionsContainer.appendChild(optEl);
            });
        }

        // Explanation panel rendering
        if ((currentMode === 'practice' && submitted) || currentMode === 'review') {
            showExplanationPanel(q, selectedOpt);
        } else {
            explanationPanel.classList.add('hidden');
        }

        // Navigation button states
        btnPrev.disabled = (currentIndex === 0);
        if (currentIndex === total - 1) {
            btnNext.innerHTML = `Finish <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
        } else {
            btnNext.innerHTML = `Next <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
        }
    }

    // Select Option
    function selectOption(optIdx) {
        const q = activeQuestions[currentIndex];

        if (currentMode === 'exam') {
            userAnswers[q.id] = optIdx;
            isAnswerSubmitted[q.id] = true;
            renderCurrentQuestion();
            renderPalette();
            updateStats();
            updateScorePill();
        } else if (currentMode === 'practice') {
            if (isAnswerSubmitted[q.id]) return; // already locked

            userAnswers[q.id] = optIdx;
            isAnswerSubmitted[q.id] = true;
            renderCurrentQuestion();
            renderPalette();
            updateStats();
            updateScorePill();
        }
    }

    // Show Explanation Panel
    function showExplanationPanel(q, selectedOpt) {
        explanationPanel.classList.remove('hidden');

        const isCorrect = (selectedOpt === q.correctAnswer);

        if (isCorrect) {
            explanationStatusIcon.className = 'status-icon correct';
            explanationStatusIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
            explanationStatusHeading.textContent = 'Correct Answer!';
            explanationStatusSub.textContent = `Excellent job mastering this ${q.app} concept.`;
        } else {
            explanationStatusIcon.className = 'status-icon incorrect';
            explanationStatusIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
            explanationStatusHeading.textContent = 'Incorrect Choice';
            explanationStatusSub.textContent = `Correct option was: Option ${['A', 'B', 'C', 'D'][q.correctAnswer]} - ${q.options[q.correctAnswer]}`;
        }

        explanationSummaryText.textContent = q.explanation || 'No summary available.';

        if (q.whyCorrect) {
            whyCorrectBlock.classList.remove('hidden');
            explanationWhyCorrect.textContent = q.whyCorrect;
        } else {
            whyCorrectBlock.classList.add('hidden');
        }

        // Distractors
        if (q.whyOthersAreWrong && Object.keys(q.whyOthersAreWrong).length > 0) {
            distractorSection.classList.remove('hidden');
            distractorList.innerHTML = '';
            for (const [key, reason] of Object.entries(q.whyOthersAreWrong)) {
                const li = document.createElement('li');
                const idx = parseInt(key, 10);
                const letter = ['A', 'B', 'C', 'D'][idx] || key;
                li.innerHTML = `<strong>Option ${letter}:</strong> ${escapeHtml(reason)}`;
                distractorList.appendChild(li);
            }
        } else {
            distractorSection.classList.add('hidden');
        }

        // Real-world
        if (q.realWorldApplication) {
            realWorldBlock.classList.remove('hidden');
            textRealWorld.textContent = q.realWorldApplication;
        } else {
            realWorldBlock.classList.add('hidden');
        }
    }

    // Flashcard Flip
    function flipFlashcard() {
        const q = activeQuestions[currentIndex];
        if (explanationPanel.classList.contains('hidden')) {
            showExplanationPanel(q, q.correctAnswer);
            explanationStatusHeading.textContent = `Correct: Option ${['A', 'B', 'C', 'D'][q.correctAnswer]} (${q.options[q.correctAnswer]})`;
            explanationStatusSub.textContent = `Key concept for ${q.app}`;
            btnFlipCard.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg> Hide Explanation`;
        } else {
            explanationPanel.classList.add('hidden');
            btnFlipCard.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg> Reveal Explanation (Space)`;
        }
    }

    // Navigate Questions
    function navigateQuestion(direction) {
        const target = currentIndex + direction;
        if (target >= 0 && target < activeQuestions.length) {
            currentIndex = target;
            renderCurrentQuestion();
            renderPalette();
        } else if (target >= activeQuestions.length) {
            if (currentMode === 'exam') {
                confirmSubmitExam();
            } else {
                alert('You have reached the end of this question set!');
            }
        }
    }

    // Toggle Review Flag
    function toggleFlagReview() {
        const q = activeQuestions[currentIndex];
        if (markedQuestions.has(q.id)) {
            markedQuestions.delete(q.id);
        } else {
            markedQuestions.add(q.id);
        }
        renderCurrentQuestion();
        renderPalette();
        updateStats();
    }

    // Render Palette Grid
    function renderPalette() {
        navigatorGrid.innerHTML = '';

        // Filter palette questions based on paletteAppFilter
        const displayed = activeQuestions.filter(q => {
            return paletteAppFilter === 'all' || q.appKey === paletteAppFilter;
        });

        navCountBadge.textContent = `${displayed.length} Questions`;

        displayed.forEach(q => {
            const bubble = document.createElement('button');
            bubble.className = 'nav-bubble';
            bubble.textContent = q.id;
            bubble.setAttribute('aria-label', `Question ${q.id} (${q.app})`);

            const isCurrent = (activeQuestions[currentIndex] && activeQuestions[currentIndex].id === q.id);
            const isAnswered = userAnswers[q.id] !== undefined;
            const isMarked = markedQuestions.has(q.id);

            if (isCurrent) bubble.classList.add('current');
            if (isAnswered) bubble.classList.add('answered');
            if (isMarked) bubble.classList.add('marked');

            bubble.addEventListener('click', () => {
                const targetIdx = activeQuestions.findIndex(item => item.id === q.id);
                if (targetIdx !== -1) {
                    currentIndex = targetIdx;
                    renderCurrentQuestion();
                    renderPalette();
                }
            });

            navigatorGrid.appendChild(bubble);
        });
    }

    // Update Sidebar & Score Stats
    function updateStats() {
        const answeredCount = Object.keys(userAnswers).length;
        const markedCount = markedQuestions.size;
        const remainingCount = Math.max(0, activeQuestions.length - answeredCount);

        sideStatAnswered.textContent = answeredCount;
        sideStatMarked.textContent = markedCount;
        sideStatRemaining.textContent = remainingCount;
    }

    function updateScorePill() {
        let score = 0;
        for (const [qid, ansIdx] of Object.entries(userAnswers)) {
            const q = allQuestions.find(item => item.id === parseInt(qid, 10));
            if (q && q.correctAnswer === ansIdx) {
                score++;
            }
        }
        scoreDisplay.textContent = score;
    }

    // Exam Submission Confirmation
    function confirmSubmitExam() {
        const answeredCount = Object.keys(userAnswers).length;
        const total = activeQuestions.length;
        const unanswered = total - answeredCount;

        let msg = `Are you sure you want to submit your assessment?\n\nAnswered: ${answeredCount} / ${total}`;
        if (unanswered > 0) {
            msg += `\nUnanswered: ${unanswered} question(s).`;
        }

        if (confirm(msg)) {
            finishExam();
        }
    }

    // Finish Exam & Show Analytics
    function finishExam() {
        clearInterval(timerInterval);
        examEndTime = new Date();

        let totalCorrect = 0;
        const totalQuestions = activeQuestions.length;

        // Application metrics
        const appStats = {
            excel: { total: 0, correct: 0, title: '📗 MS Excel' },
            word: { total: 0, correct: 0, title: '📘 MS Word' },
            powerpoint: { total: 0, correct: 0, title: '📙 MS PowerPoint' }
        };

        // Difficulty metrics
        const diffStats = {
            easy: { total: 0, correct: 0 },
            medium: { total: 0, correct: 0 },
            hard: { total: 0, correct: 0 }
        };

        activeQuestions.forEach(q => {
            const isCorrect = (userAnswers[q.id] === q.correctAnswer);
            if (isCorrect) totalCorrect++;

            // App breakdown
            if (appStats[q.appKey]) {
                appStats[q.appKey].total++;
                if (isCorrect) appStats[q.appKey].correct++;
            }

            // Diff breakdown
            const diffKey = q.difficulty.toLowerCase();
            if (diffStats[diffKey]) {
                diffStats[diffKey].total++;
                if (isCorrect) diffStats[diffKey].correct++;
            }
        });

        const overallPercent = Math.round((totalCorrect / totalQuestions) * 100);

        // Results Card Populate
        resultsPercentage.textContent = `${overallPercent}%`;
        resultsScoreFraction.textContent = `${totalCorrect} / ${totalQuestions}`;

        // Elapsed Time
        const elapsedSecs = examStartTime ? Math.round((examEndTime - examStartTime) / 1000) : 0;
        const eMins = Math.floor(elapsedSecs / 60);
        const eSecs = elapsedSecs % 60;
        resultsTimeTaken.textContent = `${eMins}m ${eSecs}s`;

        // Readiness Assessment
        if (overallPercent >= 80) {
            resultsReadinessTag.className = 'readiness-badge readiness-ready';
            resultsReadinessTag.textContent = 'Placement Ready (Exceptional)';
        } else if (overallPercent >= 60) {
            resultsReadinessTag.className = 'readiness-badge readiness-moderate';
            resultsReadinessTag.textContent = 'Moderate Readiness (Revise Weak Areas)';
        } else {
            resultsReadinessTag.className = 'readiness-badge readiness-needs-work';
            resultsReadinessTag.textContent = 'Needs Practice (Review Concepts)';
        }

        // App Breakdown Grid
        appBreakdownGrid.innerHTML = '';
        for (const [key, data] of Object.entries(appStats)) {
            if (data.total === 0) continue;
            const pct = Math.round((data.correct / data.total) * 100);
            const card = document.createElement('div');
            card.className = `app-stat-card ${key}`;
            card.innerHTML = `
                <div class="app-stat-head">
                    <span class="app-stat-title">${data.title}</span>
                    <span class="app-stat-score">${data.correct} / ${data.total} (${pct}%)</span>
                </div>
                <div class="app-stat-bar-track">
                    <div class="app-stat-bar-fill" style="width: ${pct}%;"></div>
                </div>
                <div class="app-stat-meta">${pct >= 75 ? 'Strong Competency' : (pct >= 50 ? 'Average - Review Shortcuts' : 'Needs Practice')}</div>
            `;
            appBreakdownGrid.appendChild(card);
        }

        // Diff Breakdown Grid
        diffBreakdownGrid.innerHTML = '';
        ['easy', 'medium', 'hard'].forEach(diff => {
            const data = diffStats[diff];
            if (data.total === 0) return;
            const pct = Math.round((data.correct / data.total) * 100);
            const card = document.createElement('div');
            card.className = `diff-card ${diff}`;
            card.innerHTML = `
                <div class="diff-card-title">${diff.toUpperCase()}</div>
                <div class="diff-card-score">${data.correct} / ${data.total}</div>
                <div class="diff-card-percent">${pct}% Accuracy</div>
            `;
            diffBreakdownGrid.appendChild(card);
        });

        showScreen(screenResults);
    }

    // Keyboard Shortcuts
    function handleKeyboardShortcuts(e) {
        if (!screenQuizWorkspace || screenQuizWorkspace.classList.contains('hidden')) return;

        // Option selection 1-4
        if (['1', '2', '3', '4'].includes(e.key)) {
            const optIdx = parseInt(e.key, 10) - 1;
            selectOption(optIdx);
        } else if (e.key === 'n' || e.key === 'N' || e.key === 'ArrowRight') {
            navigateQuestion(1);
        } else if (e.key === 'p' || e.key === 'P' || e.key === 'ArrowLeft') {
            navigateQuestion(-1);
        } else if (e.key === 'f' || e.key === 'F') {
            toggleFlagReview();
        } else if (e.key === ' ' && currentMode === 'flashcards') {
            e.preventDefault();
            flipFlashcard();
        }
    }

    // Utility
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
