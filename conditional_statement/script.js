// Conditional Statements Module Application Logic
(function () {
    'use strict';

    // Application State
    let allQuestions = [];       // Master list of 50 questions
    let activeQuestions = [];    // Filtered / active pool
    let currentIndex = 0;        // Current question index in active pool
    let currentMode = 'practice';// 'practice' | 'exam' | 'flashcards' | 'review'
    
    // User response state: keyed by question ID
    let userAnswers = {};        // { [qId]: selectedOptionKey ("A"|"B"|"C"|"D") }
    let markedQuestions = new Set(); // Set of question IDs
    let isAnswerSubmitted = {};  // { [qId]: boolean }

    // Exam Timer State
    const EXAM_DURATION_SECONDS = 30 * 60; // 30 minutes for 50 questions
    let examTimeRemaining = EXAM_DURATION_SECONDS;
    let timerInterval = null;
    let examStartTime = null;
    let examEndTime = null;

    // Filters for Practice Mode
    let currentConceptFilter = 'all';
    let currentLangFilter = 'all';
    let currentDiffFilter = 'all';

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
    const badgeQConcept = document.getElementById('badge-q-concept');
    const badgeQLang = document.getElementById('badge-q-lang');
    const badgeQDiff = document.getElementById('badge-q-diff');
    const btnMarkReview = document.getElementById('btn-mark-review');
    const markText = document.getElementById('mark-text');

    const questionText = document.getElementById('question-text');
    const codeContainer = document.getElementById('code-container');
    const questionCode = document.getElementById('question-code');
    const optionsContainer = document.getElementById('options-container');

    const flashcardRevealRow = document.getElementById('flashcard-reveal-row');
    const btnFlipCard = document.getElementById('btn-flip-card');

    const explanationPanel = document.getElementById('explanation-panel');
    const explanationStatusIcon = document.getElementById('explanation-status-icon');
    const explanationStatusHeading = document.getElementById('explanation-status-heading');
    const explanationStatusSub = document.getElementById('explanation-status-sub');
    const explanationSummaryText = document.getElementById('explanation-summary-text');
    const distractorSection = document.getElementById('distractor-section');
    const distractorList = document.getElementById('distractor-list');
    const boxTrap = document.getElementById('box-trap');
    const textTrap = document.getElementById('text-trap');
    const boxShortcut = document.getElementById('box-shortcut');
    const textShortcut = document.getElementById('text-shortcut');
    const boxRealWorld = document.getElementById('box-real-world');
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

    // Results screen elements
    const resultsPercentage = document.getElementById('results-percentage');
    const resultsScoreFraction = document.getElementById('results-score-fraction');
    const resultsTimeTaken = document.getElementById('results-time-taken');
    const resultsReadinessTag = document.getElementById('results-readiness-tag');
    const resultsBreakdownGrid = document.getElementById('results-breakdown-grid');
    const btnReviewAnswers = document.getElementById('btn-review-answers');
    const btnRetakeExam = document.getElementById('btn-retake-exam');

    // Helper: format concept label
    function formatConcept(c) {
        if (!c) return 'General';
        return c.replace(/_/g, ' ');
    }

    // Initialization
    function init() {
        initTheme();
        loadQuestions();
        bindEvents();
    }

    // Theme Setup
    function initTheme() {
        const savedTheme = localStorage.getItem('placementprep-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('placementprep-theme', next);
        });
    }

    // Load Questions from global `questions` array in questions.js
    function loadQuestions() {
        if (typeof questions !== 'undefined' && Array.isArray(questions) && questions.length > 0) {
            allQuestions = questions;
            console.log(`Loaded ${allQuestions.length} Conditional Statements questions from questions.js`);
        } else {
            console.error('questions variable not found in questions.js');
        }
    }

    // Event Bindings
    function bindEvents() {
        // Mode start buttons
        document.querySelectorAll('.start-mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                startMode(mode);
            });
        });

        // Navigation
        btnPrev.addEventListener('click', () => navigate(-1));
        btnNext.addEventListener('click', () => navigate(1));
        btnChangeMode.addEventListener('click', returnToModeSelect);
        btnSubmitExam.addEventListener('click', confirmSubmitExam);

        // Mark for review
        btnMarkReview.addEventListener('click', toggleMarkReview);

        // Flashcard flip
        btnFlipCard.addEventListener('click', () => {
            explanationPanel.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
        });

        // Results screen actions
        btnReviewAnswers.addEventListener('click', startReviewMode);
        btnRetakeExam.addEventListener('click', () => startMode('exam'));

        // Concept filter pills
        document.querySelectorAll('[data-filter-concept]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-concept]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentConceptFilter = e.currentTarget.dataset.filterConcept;
                applyFilters();
            });
        });

        // Language filter pills
        document.querySelectorAll('[data-filter-lang]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-lang]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentLangFilter = e.currentTarget.dataset.filterLang;
                applyFilters();
            });
        });

        // Difficulty filter pills
        document.querySelectorAll('[data-filter-diff]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-diff]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentDiffFilter = e.currentTarget.dataset.filterDiff;
                applyFilters();
            });
        });

        // Keyboard navigation
        window.addEventListener('keydown', handleKeyboardShortcuts);
    }

    // Mode Controller
    function startMode(mode) {
        currentMode = mode;
        clearInterval(timerInterval);
        timerBox.classList.add('hidden');
        timerBox.classList.remove('timer-urgent');

        userAnswers = {};
        markedQuestions.clear();
        isAnswerSubmitted = {};
        currentIndex = 0;

        screenModeSelect.classList.add('hidden');
        screenResults.classList.add('hidden');
        screenQuizWorkspace.classList.remove('hidden');

        if (mode === 'practice') {
            headerModeBadge.textContent = 'Practice Mode';
            headerModeBadge.className = 'badge mode-tag';
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            flashcardRevealRow.classList.add('hidden');
            applyFilters();
        } else if (mode === 'exam') {
            headerModeBadge.textContent = 'Placement Exam';
            headerModeBadge.className = 'badge mode-tag';
            quizFilterBar.classList.add('hidden');
            btnSubmitExam.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
            
            // Randomize questions for exam simulation
            activeQuestions = shuffleArray([...allQuestions]).map(q => ({ ...q }));

            startExamTimer();
            buildNavigatorGrid();
            renderCurrentQuestion();
        } else if (mode === 'flashcards') {
            headerModeBadge.textContent = 'Flashcard Study';
            headerModeBadge.className = 'badge mode-tag';
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            applyFilters();
        }
    }

    function returnToModeSelect() {
        if (currentMode === 'exam' && Object.keys(userAnswers).length > 0) {
            if (!confirm('Are you sure you want to exit the exam? Your current progress will be lost.')) {
                return;
            }
        }
        clearInterval(timerInterval);
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.add('hidden');
        screenModeSelect.classList.remove('hidden');
    }

    // Filter Logic for Practice Mode
    function applyFilters() {
        let filtered = [...allQuestions];

        if (currentConceptFilter !== 'all') {
            filtered = filtered.filter(q => (q.concept || '').toLowerCase().includes(currentConceptFilter.toLowerCase()));
        }

        if (currentLangFilter !== 'all') {
            filtered = filtered.filter(q => (q.language || '').toLowerCase() === currentLangFilter.toLowerCase());
        }

        if (currentDiffFilter !== 'all') {
            filtered = filtered.filter(q => (q.difficulty || '').toLowerCase() === currentDiffFilter.toLowerCase());
        }

        activeQuestions = filtered;
        currentIndex = 0;

        buildNavigatorGrid();
        renderCurrentQuestion();
    }

    // Timer Implementation
    function startExamTimer() {
        examTimeRemaining = EXAM_DURATION_SECONDS;
        examStartTime = Date.now();
        timerBox.classList.remove('hidden');
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            examTimeRemaining--;
            updateTimerDisplay();

            if (examTimeRemaining <= 300) { // 5 minutes warning
                timerBox.classList.add('timer-urgent');
            }

            if (examTimeRemaining <= 0) {
                clearInterval(timerInterval);
                autoSubmitExam();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(examTimeRemaining / 60);
        const seconds = examTimeRemaining % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function autoSubmitExam() {
        alert('Time is up! Your assessment has been automatically submitted.');
        finishExam();
    }

    function confirmSubmitExam() {
        const total = activeQuestions.length;
        const answered = Object.keys(userAnswers).length;
        const unanswered = total - answered;

        let msg = `You have answered ${answered} of ${total} questions.`;
        if (unanswered > 0) {
            msg += `\nYou still have ${unanswered} unanswered question(s).\nAre you sure you want to submit?`;
        } else {
            msg += `\nAre you ready to submit your exam?`;
        }

        if (confirm(msg)) {
            finishExam();
        }
    }

    function finishExam() {
        clearInterval(timerInterval);
        examEndTime = Date.now();
        showResultsScreen();
    }

    // Question Rendering
    function renderCurrentQuestion() {
        if (!activeQuestions || activeQuestions.length === 0) {
            questionText.textContent = 'No questions match the current filter selection.';
            codeContainer.classList.add('hidden');
            optionsContainer.innerHTML = '';
            explanationPanel.classList.add('hidden');
            return;
        }

        const q = activeQuestions[currentIndex];
        const qId = q.id;

        // Header Meta Badges
        badgeQNumber.textContent = `Q${currentIndex + 1}`;
        badgeQConcept.textContent = formatConcept(q.concept);
        badgeQLang.textContent = q.language || 'Code';

        const diff = (q.difficulty || 'Medium').toLowerCase();
        badgeQDiff.textContent = q.difficulty || 'Medium';
        badgeQDiff.className = `badge badge-diff ${diff.replace(' ', '-')}`;

        // Mark for review button state
        if (markedQuestions.has(qId)) {
            btnMarkReview.classList.add('marked');
            markText.textContent = 'Marked';
        } else {
            btnMarkReview.classList.remove('marked');
            markText.textContent = 'Mark';
        }

        // Question Title
        questionText.textContent = q.question;

        // Code block
        if (q.code && q.code.trim().length > 0) {
            questionCode.textContent = q.code;
            codeContainer.classList.remove('hidden');
        } else {
            codeContainer.classList.add('hidden');
        }

        // Render Options
        renderOptions(q);

        // Progress Bar
        const percent = Math.round(((currentIndex + 1) / activeQuestions.length) * 100);
        progressLabel.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
        progressPercent.textContent = `${percent}% Completed`;
        progressBarFill.style.width = `${percent}%`;

        // Footer buttons state
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex === activeQuestions.length - 1;

        // Flashcard mode handling
        if (currentMode === 'flashcards') {
            flashcardRevealRow.classList.remove('hidden');
            explanationPanel.classList.add('hidden');
        } else if (currentMode === 'practice' || currentMode === 'review') {
            flashcardRevealRow.classList.add('hidden');
            if (userAnswers[qId] !== undefined || currentMode === 'review') {
                showExplanationPanel(q);
            } else {
                explanationPanel.classList.add('hidden');
            }
        } else { // exam mode
            flashcardRevealRow.classList.add('hidden');
            explanationPanel.classList.add('hidden');
        }

        // Update active cell in navigator
        updateNavigatorHighlight();
        updateScoreDisplay();
    }

    function renderOptions(q) {
        optionsContainer.innerHTML = '';
        const selected = userAnswers[q.id];
        const isExam = currentMode === 'exam';
        const isReview = currentMode === 'review';
        const isPractice = currentMode === 'practice';
        const isAnswered = selected !== undefined;

        const letters = ['A', 'B', 'C', 'D'];
        
        // options is an array of 4 strings in conditional_statement
        letters.forEach((letter, idx) => {
            const optText = Array.isArray(q.options) ? q.options[idx] : q.options[letter];
            if (!optText) return;

            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.key = letter;

            const isThisCorrect = letter === q.correct_answer;
            const isThisSelected = selected === letter;

            if (isExam) {
                if (isThisSelected) {
                    btn.classList.add('selected');
                }
            } else if (isPractice || isReview) {
                if (isAnswered || isReview) {
                    btn.disabled = true;
                    if (isThisCorrect) {
                        btn.classList.add('correct');
                    } else if (isThisSelected && !isThisCorrect) {
                        btn.classList.add('incorrect');
                    }
                }
            }

            btn.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${escapeHtml(optText)}</span>
            `;

            btn.addEventListener('click', () => handleOptionClick(q, letter));
            optionsContainer.appendChild(btn);
        });
    }

    function handleOptionClick(q, selectedLetter) {
        if (currentMode === 'review') return; // Read-only in review

        const qId = q.id;
        userAnswers[qId] = selectedLetter;
        isAnswerSubmitted[qId] = true;

        if (currentMode === 'practice') {
            // Instant feedback
            renderOptions(q);
            showExplanationPanel(q);
        } else if (currentMode === 'exam') {
            // Simply mark selected
            renderOptions(q);
        } else if (currentMode === 'flashcards') {
            showExplanationPanel(q);
        }

        updateNavigatorGridCell(qId);
        updateSidebarStats();
        updateScoreDisplay();
    }

    function showExplanationPanel(q) {
        const userChoice = userAnswers[q.id];
        const isCorrect = userChoice === q.correct_answer;

        if (userChoice !== undefined) {
            if (isCorrect) {
                explanationStatusIcon.textContent = '✓';
                explanationStatusIcon.className = 'status-indicator-icon correct';
                explanationStatusHeading.textContent = 'Correct Answer!';
                explanationStatusSub.textContent = `Great job! Option ${q.correct_answer} is the correct output/result.`;
            } else {
                explanationStatusIcon.textContent = '✗';
                explanationStatusIcon.className = 'status-indicator-icon wrong';
                explanationStatusHeading.textContent = `Incorrect (Your choice: ${userChoice})`;
                explanationStatusSub.textContent = `The correct answer is Option ${q.correct_answer}.`;
            }
        } else {
            // Flashcard reveal or unattempted review
            explanationStatusIcon.textContent = 'ℹ';
            explanationStatusIcon.className = 'status-indicator-icon correct';
            explanationStatusHeading.textContent = `Correct Answer: Option ${q.correct_answer}`;
            explanationStatusSub.textContent = 'Technical explanation:';
        }

        explanationSummaryText.textContent = q.explanation;

        // Distractor breakdown ("why other options are wrong")
        distractorList.innerHTML = '';
        if (q.why_other_options_are_wrong && Object.keys(q.why_other_options_are_wrong).length > 0) {
            Object.entries(q.why_other_options_are_wrong).forEach(([optLetter, reason]) => {
                const li = document.createElement('li');
                li.className = 'distractor-item';
                li.innerHTML = `<strong>Option ${optLetter}:</strong> ${escapeHtml(reason)}`;
                distractorList.appendChild(li);
            });
            distractorSection.classList.remove('hidden');
        } else {
            distractorSection.classList.add('hidden');
        }

        // Common Trap
        if (q.common_trap && q.common_trap.trim().length > 0) {
            textTrap.textContent = q.common_trap;
            boxTrap.classList.remove('hidden');
        } else {
            boxTrap.classList.add('hidden');
        }

        // Shortcut
        if (q.shortcut && q.shortcut.trim().length > 0) {
            textShortcut.textContent = q.shortcut;
            boxShortcut.classList.remove('hidden');
        } else {
            boxShortcut.classList.add('hidden');
        }

        // Real-world application
        if (q.real_world_application && q.real_world_application.trim().length > 0) {
            textRealWorld.textContent = q.real_world_application;
            boxRealWorld.classList.remove('hidden');
        } else {
            boxRealWorld.classList.add('hidden');
        }

        explanationPanel.classList.remove('hidden');
    }

    // Navigation Handler
    function navigate(delta) {
        const newIndex = currentIndex + delta;
        if (newIndex >= 0 && newIndex < activeQuestions.length) {
            currentIndex = newIndex;
            renderCurrentQuestion();
        }
    }

    function toggleMarkReview() {
        if (!activeQuestions[currentIndex]) return;
        const qId = activeQuestions[currentIndex].id;

        if (markedQuestions.has(qId)) {
            markedQuestions.delete(qId);
            btnMarkReview.classList.remove('marked');
            markText.textContent = 'Mark';
        } else {
            markedQuestions.add(qId);
            btnMarkReview.classList.add('marked');
            markText.textContent = 'Marked';
        }

        updateNavigatorGridCell(qId);
        updateSidebarStats();
    }

    // Sidebar Question Navigator
    function buildNavigatorGrid() {
        navigatorGrid.innerHTML = '';
        activeQuestions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.className = 'nav-cell-btn';
            btn.textContent = idx + 1;
            btn.dataset.index = idx;
            btn.dataset.qid = q.id;

            btn.addEventListener('click', () => {
                currentIndex = idx;
                renderCurrentQuestion();
            });

            navigatorGrid.appendChild(btn);
        });

        updateAllNavigatorCells();
        updateSidebarStats();
    }

    function updateAllNavigatorCells() {
        activeQuestions.forEach((q, idx) => {
            updateNavigatorGridCell(q.id);
        });
        updateNavigatorHighlight();
    }

    function updateNavigatorGridCell(qId) {
        const cell = navigatorGrid.querySelector(`[data-qid="${qId}"]`);
        if (!cell) return;

        const isAnswered = userAnswers[qId] !== undefined;
        const isMarked = markedQuestions.has(qId);

        if (isAnswered) {
            cell.classList.add('answered');
        } else {
            cell.classList.remove('answered');
        }

        if (isMarked) {
            cell.classList.add('marked');
        } else {
            cell.classList.remove('marked');
        }

        // In review mode, show green/red colors
        if (currentMode === 'review') {
            const q = allQuestions.find(item => item.id === qId);
            if (q) {
                if (userAnswers[qId] === q.correct_answer) {
                    cell.classList.add('correct-rev');
                } else {
                    cell.classList.add('wrong-rev');
                }
            }
        }
    }

    function updateNavigatorHighlight() {
        navigatorGrid.querySelectorAll('.nav-cell-btn').forEach((cell, idx) => {
            if (idx === currentIndex) {
                cell.classList.add('current');
            } else {
                cell.classList.remove('current');
            }
        });
    }

    function updateSidebarStats() {
        const total = activeQuestions.length;
        const answeredCount = activeQuestions.filter(q => userAnswers[q.id] !== undefined).length;
        const markedCount = activeQuestions.filter(q => markedQuestions.has(q.id)).length;
        const remaining = total - answeredCount;

        navCountBadge.textContent = `${answeredCount} / ${total}`;
        sideStatAnswered.textContent = answeredCount;
        sideStatMarked.textContent = markedCount;
        sideStatRemaining.textContent = remaining;
    }

    function updateScoreDisplay() {
        let correctCount = 0;
        activeQuestions.forEach(q => {
            if (userAnswers[q.id] === q.correct_answer) {
                correctCount++;
            }
        });
        scoreDisplay.textContent = correctCount;
    }

    // Results Screen & Analytics
    function showResultsScreen() {
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.remove('hidden');

        const totalQuestions = activeQuestions.length;
        let totalCorrect = 0;
        const conceptStats = {};

        activeQuestions.forEach(q => {
            const c = q.concept || 'General';
            if (!conceptStats[c]) {
                conceptStats[c] = { total: 0, correct: 0 };
            }
            conceptStats[c].total++;

            const isCorrect = userAnswers[q.id] === q.correct_answer;
            if (isCorrect) {
                totalCorrect++;
                conceptStats[c].correct++;
            }
        });

        const percent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        resultsPercentage.textContent = `${percent}%`;
        resultsScoreFraction.textContent = `${totalCorrect} / ${totalQuestions}`;

        // Time spent calculation
        let timeElapsed = EXAM_DURATION_SECONDS - examTimeRemaining;
        if (timeElapsed < 0) timeElapsed = EXAM_DURATION_SECONDS;
        const elapsedMin = Math.floor(timeElapsed / 60);
        const elapsedSec = timeElapsed % 60;
        resultsTimeTaken.textContent = `${String(elapsedMin).padStart(2, '0')}:${String(elapsedSec).padStart(2, '0')}`;

        // Readiness Tag
        if (percent >= 80) {
            resultsReadinessTag.textContent = 'High Placement Probability 🚀';
            resultsReadinessTag.className = 'stat-val badge-readiness high';
        } else if (percent >= 60) {
            resultsReadinessTag.textContent = 'Good Foundation 👍';
            resultsReadinessTag.className = 'stat-val badge-readiness medium';
        } else {
            resultsReadinessTag.textContent = 'Needs Revision 📚';
            resultsReadinessTag.className = 'stat-val badge-readiness low';
        }

        // Render Concept Breakdown Cards
        resultsBreakdownGrid.innerHTML = '';
        Object.keys(conceptStats).forEach(c => {
            const stat = conceptStats[c];
            const catPct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;

            const card = document.createElement('div');
            card.className = 'breakdown-card';
            card.innerHTML = `
                <div class="breakdown-card-header">
                    <span class="breakdown-diff-dot magenta"></span>
                    <div>
                        <strong>${formatConcept(c)}</strong>
                        <p>${stat.correct} of ${stat.total} answered correctly</p>
                    </div>
                </div>
                <div class="breakdown-card-score">
                    <span>${stat.correct} / ${stat.total}</span>
                    <span class="breakdown-percent">${catPct}%</span>
                </div>
            `;
            resultsBreakdownGrid.appendChild(card);
        });
    }

    function startReviewMode() {
        currentMode = 'review';
        headerModeBadge.textContent = 'Answer Review Mode';
        headerModeBadge.className = 'badge mode-tag';
        
        screenResults.classList.add('hidden');
        screenQuizWorkspace.classList.remove('hidden');
        quizFilterBar.classList.add('hidden');
        btnSubmitExam.classList.add('hidden');
        flashcardRevealRow.classList.add('hidden');

        currentIndex = 0;
        buildNavigatorGrid();
        renderCurrentQuestion();
    }

    // Keyboard Shortcuts
    function handleKeyboardShortcuts(e) {
        if (screenQuizWorkspace.classList.contains('hidden')) return;

        // Do not trigger if typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'ArrowLeft') {
            navigate(-1);
        } else if (e.key === 'ArrowRight') {
            navigate(1);
        } else if (e.key === 'm' || e.key === 'M' || e.key === 'r' || e.key === 'R') {
            toggleMarkReview();
        } else if (e.key === ' ') {
            if (currentMode === 'flashcards') {
                e.preventDefault();
                explanationPanel.classList.toggle('hidden');
                flashcardRevealRow.classList.toggle('hidden');
            }
        } else {
            const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };
            const optLetter = keyMap[e.key];
            if (optLetter && activeQuestions[currentIndex]) {
                handleOptionClick(activeQuestions[currentIndex], optLetter);
            }
        }
    }

    // Escape HTML helper
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Utility: Fisher-Yates Array Shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
