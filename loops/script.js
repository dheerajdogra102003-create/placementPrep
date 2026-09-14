// Loops & Iteration Application Logic
(function () {
    'use strict';

    // Application State
    let allQuestions = [];          // Master list of 50 questions
    let activeQuestions = [];       // Filtered / active pool
    let currentIndex = 0;           // Current question index in active pool
    let currentMode = 'practice';   // 'practice' | 'exam' | 'flashcards' | 'review'

    // User responses: keyed by question id
    let userAnswers = {};           // { [qId]: selectedOptionKey ('A'|'B'|'C'|'D') }
    let markedQuestions = new Set();// Set of question IDs
    let isAnswerSubmitted = {};     // { [qId]: boolean }

    // Exam Timer State (30 minutes for 50 questions)
    const EXAM_DURATION_SECONDS = 30 * 60;
    let examTimeRemaining = EXAM_DURATION_SECONDS;
    let timerInterval = null;
    let examStartTime = null;
    let examEndTime = null;

    // Filters for Practice & Flashcards
    let currentTopicFilter = 'all';
    let currentDiffFilter = 'all';
    let currentLangFilter = 'all';

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
    const badgeQTopic = document.getElementById('badge-q-topic');
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
    const explanationWhyCorrect = document.getElementById('explanation-why-correct');

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

    // Initialization
    function init() {
        initTheme();
        loadQuestions();
        bindEvents();
    }

    // Theme Setup (shares placementprep-theme key)
    function initTheme() {
        const savedTheme = localStorage.getItem('placementprep-theme') || localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('placementprep-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // Load Questions from questions.js
    function loadQuestions() {
        if (typeof questionsData !== 'undefined' && Array.isArray(questionsData) && questionsData.length > 0) {
            allQuestions = questionsData;
        } else {
            console.error('No question bank found in questions.js');
        }
        console.log(`Loaded ${allQuestions.length} Loops & Iteration questions.`);
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

        // Results actions
        btnReviewAnswers.addEventListener('click', startReviewMode);
        btnRetakeExam.addEventListener('click', () => startMode('exam'));

        // Topic filter pills
        document.querySelectorAll('[data-filter-topic]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-topic]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentTopicFilter = e.currentTarget.dataset.filterTopic;
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

        // Language filter pills
        document.querySelectorAll('[data-filter-lang]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-lang]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentLangFilter = e.currentTarget.dataset.filterLang;
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

            // Randomized clone for exam simulation
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
            if (!confirm('Are you sure you want to exit the exam? Your current exam progress will be lost.')) {
                return;
            }
        }
        clearInterval(timerInterval);
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.add('hidden');
        screenModeSelect.classList.remove('hidden');
    }

    // Filter Logic for Practice & Flashcards
    function applyFilters() {
        activeQuestions = allQuestions.filter(q => {
            const matchesTopic = currentTopicFilter === 'all' || q.topic === currentTopicFilter;
            const matchesDiff = currentDiffFilter === 'all' || q.difficulty.toLowerCase() === currentDiffFilter.toLowerCase();
            const matchesLang = currentLangFilter === 'all' || (q.language && q.language.toLowerCase() === currentLangFilter.toLowerCase());
            return matchesTopic && matchesDiff && matchesLang;
        });

        if (activeQuestions.length === 0) {
            alert('No questions match the selected filter criteria.');
            currentTopicFilter = 'all';
            currentDiffFilter = 'all';
            currentLangFilter = 'all';
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            document.querySelector('[data-filter-topic="all"]')?.classList.add('active');
            document.querySelector('[data-filter-diff="all"]')?.classList.add('active');
            document.querySelector('[data-filter-lang="all"]')?.classList.add('active');
            activeQuestions = [...allQuestions];
        }

        currentIndex = 0;
        buildNavigatorGrid();
        renderCurrentQuestion();
    }

    // Timer Implementation (30:00 Countdown)
    function startExamTimer() {
        examTimeRemaining = EXAM_DURATION_SECONDS;
        examStartTime = new Date();
        timerBox.classList.remove('hidden');
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            examTimeRemaining--;
            updateTimerDisplay();

            if (examTimeRemaining <= 180) { // under 3 minutes
                timerBox.classList.add('timer-urgent');
            }

            if (examTimeRemaining <= 0) {
                clearInterval(timerInterval);
                alert('Time is up! Submitting your exam automatically.');
                submitExam();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(examTimeRemaining / 60);
        const seconds = examTimeRemaining % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Render Question & Flashcard
    function renderCurrentQuestion() {
        if (!activeQuestions || activeQuestions.length === 0) return;

        const q = activeQuestions[currentIndex];
        const qId = q.id;

        // Update Progress
        const currentNum = currentIndex + 1;
        const totalNum = activeQuestions.length;
        progressLabel.textContent = `Question ${currentNum} of ${totalNum}`;
        const pct = Math.round((currentNum / totalNum) * 100);
        progressPercent.textContent = `${pct}% Completed`;
        progressBarFill.style.width = `${(currentNum / totalNum) * 100}%`;

        // Update Meta Badges
        badgeQNumber.textContent = `Q${currentNum}`;
        badgeQTopic.textContent = q.topic || 'Loops';
        badgeQLang.textContent = q.language || 'Code';
        badgeQDiff.textContent = q.difficulty;
        badgeQDiff.className = `badge badge-diff ${q.difficulty.toLowerCase()}`;

        // Bookmark status
        if (markedQuestions.has(qId)) {
            btnMarkReview.classList.add('marked');
            markText.textContent = 'Marked';
        } else {
            btnMarkReview.classList.remove('marked');
            markText.textContent = 'Mark';
        }

        // Render Question Text
        questionText.textContent = q.question;

        // Render Code Snippet if present
        if (q.code && q.code.trim()) {
            questionCode.textContent = q.code;
            codeContainer.classList.remove('hidden');
        } else {
            codeContainer.classList.add('hidden');
        }

        // Render Options
        optionsContainer.innerHTML = '';
        const hasAnswered = userAnswers.hasOwnProperty(qId);
        const selectedOpt = userAnswers[qId];

        ['A', 'B', 'C', 'D'].forEach(letter => {
            const optText = q.options[letter];
            if (optText === undefined) return;

            const optBtn = document.createElement('button');
            optBtn.className = 'option-btn';
            optBtn.setAttribute('data-option-key', letter);

            optBtn.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${escapeHtml(optText)}</span>
            `;

            // State Styling
            if (currentMode === 'exam') {
                if (hasAnswered && selectedOpt === letter) {
                    optBtn.classList.add('selected');
                }
                optBtn.addEventListener('click', () => handleExamOptionClick(qId, letter));
            } else if (currentMode === 'practice') {
                if (hasAnswered) {
                    optBtn.disabled = true;
                    if (letter === q.correctAnswer) {
                        optBtn.classList.add('correct');
                    } else if (selectedOpt === letter) {
                        optBtn.classList.add('incorrect');
                    }
                } else {
                    optBtn.addEventListener('click', () => handlePracticeOptionClick(q, letter));
                }
            } else if (currentMode === 'flashcards') {
                optBtn.addEventListener('click', () => {
                    revealExplanation(q, letter);
                });
            } else if (currentMode === 'review') {
                optBtn.disabled = true;
                if (letter === q.correctAnswer) {
                    optBtn.classList.add('correct');
                } else if (selectedOpt === letter) {
                    optBtn.classList.add('incorrect');
                }
            }

            optionsContainer.appendChild(optBtn);
        });

        // Explanation / Flashcard Panel handling
        if (currentMode === 'flashcards') {
            explanationPanel.classList.add('hidden');
            flashcardRevealRow.classList.remove('hidden');
        } else if (currentMode === 'practice') {
            flashcardRevealRow.classList.add('hidden');
            if (hasAnswered) {
                renderExplanation(q, selectedOpt);
                explanationPanel.classList.remove('hidden');
            } else {
                explanationPanel.classList.add('hidden');
            }
        } else if (currentMode === 'review') {
            flashcardRevealRow.classList.add('hidden');
            renderExplanation(q, selectedOpt);
            explanationPanel.classList.remove('hidden');
        } else {
            flashcardRevealRow.classList.add('hidden');
            explanationPanel.classList.add('hidden');
        }

        // Navigation button states
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex === activeQuestions.length - 1;

        // Update score & sidebar
        updateSidebarStats();
        highlightCurrentNavCell();
    }

    // Option Click Handlers
    function handleExamOptionClick(qId, optKey) {
        userAnswers[qId] = optKey;
        renderCurrentQuestion();
    }

    function handlePracticeOptionClick(q, optKey) {
        userAnswers[q.id] = optKey;
        isAnswerSubmitted[q.id] = true;
        renderCurrentQuestion();
        updateScoreHeader();
    }

    function revealExplanation(q, optKey) {
        userAnswers[q.id] = optKey;
        flashcardRevealRow.classList.add('hidden');
        renderExplanation(q, optKey);
        explanationPanel.classList.remove('hidden');
        updateSidebarStats();
        highlightCurrentNavCell();
    }

    // Explanation Rendering
    function renderExplanation(q, selectedOpt) {
        const isCorrect = selectedOpt === q.correctAnswer;
        const correctText = q.options[q.correctAnswer];

        if (isCorrect) {
            explanationStatusIcon.className = 'status-indicator-icon correct';
            explanationStatusIcon.textContent = '✓';
            explanationStatusHeading.textContent = 'Correct Answer!';
            explanationStatusSub.textContent = `Option ${q.correctAnswer} is right.`;
        } else {
            explanationStatusIcon.className = 'status-indicator-icon wrong';
            explanationStatusIcon.textContent = '✕';
            explanationStatusHeading.textContent = 'Incorrect Choice';
            explanationStatusSub.textContent = `Correct: Option ${q.correctAnswer} (${correctText})`;
        }

        explanationSummaryText.textContent = `Topic: ${q.topic} | Language: ${q.language || 'Standard'}. Trace the condition checks and body iterations step-by-step.`;
        explanationWhyCorrect.textContent = q.explanation || 'Option ' + q.correctAnswer + ' is the correct answer according to loop logic.';

        // Exam Trap Box
        if (q.examTrap && q.examTrap.trim()) {
            textTrap.textContent = q.examTrap;
            boxTrap.classList.remove('hidden');
        } else {
            boxTrap.classList.add('hidden');
        }

        // Quick Trick / Shortcut Box
        if (q.quickTrick && q.quickTrick.trim()) {
            textShortcut.textContent = q.quickTrick;
            boxShortcut.classList.remove('hidden');
        } else {
            boxShortcut.classList.add('hidden');
        }

        // Real-world box
        if (q.realWorldApplication && q.realWorldApplication.trim()) {
            textRealWorld.textContent = q.realWorldApplication;
            boxRealWorld.classList.remove('hidden');
        } else {
            boxRealWorld.classList.add('hidden');
        }
    }

    // Sidebar Navigator Grid Builder
    function buildNavigatorGrid() {
        navigatorGrid.innerHTML = '';
        navCountBadge.textContent = `${activeQuestions.length} Questions`;

        activeQuestions.forEach((q, idx) => {
            const cell = document.createElement('button');
            cell.className = 'nav-cell-btn';
            cell.textContent = idx + 1;
            cell.title = `Question ${idx + 1}: ${q.topic}`;
            cell.setAttribute('data-index', idx);

            cell.addEventListener('click', () => {
                currentIndex = idx;
                renderCurrentQuestion();
            });

            navigatorGrid.appendChild(cell);
        });

        updateSidebarStats();
    }

    function updateSidebarStats() {
        let answeredCount = 0;
        let markedCount = 0;

        activeQuestions.forEach((q, idx) => {
            const cell = navigatorGrid.children[idx];
            if (!cell) return;

            const isAnswered = userAnswers.hasOwnProperty(q.id);
            const isMarked = markedQuestions.has(q.id);

            cell.className = 'nav-cell-btn';

            if (currentMode === 'review') {
                const isCorrect = userAnswers[q.id] === q.correctAnswer;
                if (isCorrect) {
                    cell.classList.add('correct-rev');
                } else {
                    cell.classList.add('wrong-rev');
                }
            } else {
                if (isAnswered) {
                    cell.classList.add('answered');
                    answeredCount++;
                }
                if (isMarked) {
                    cell.classList.add('marked');
                    markedCount++;
                }
            }
        });

        const remainingCount = activeQuestions.length - answeredCount;
        sideStatAnswered.textContent = answeredCount;
        sideStatMarked.textContent = markedCount;
        sideStatRemaining.textContent = Math.max(0, remainingCount);

        updateScoreHeader();
    }

    function highlightCurrentNavCell() {
        const cells = navigatorGrid.querySelectorAll('.nav-cell-btn');
        cells.forEach((cell, idx) => {
            if (idx === currentIndex) {
                cell.classList.add('current');
            } else {
                cell.classList.remove('current');
            }
        });
    }

    function updateScoreHeader() {
        let correct = 0;
        Object.keys(userAnswers).forEach(qId => {
            const q = allQuestions.find(item => item.id == qId);
            if (q && userAnswers[qId] === q.correctAnswer) {
                correct++;
            }
        });
        scoreDisplay.textContent = correct;
    }

    // Toggle Mark Question for Review
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

        updateSidebarStats();
        highlightCurrentNavCell();
    }

    // Navigation
    function navigate(delta) {
        const nextIdx = currentIndex + delta;
        if (nextIdx >= 0 && nextIdx < activeQuestions.length) {
            currentIndex = nextIdx;
            renderCurrentQuestion();
        }
    }

    // Submit Exam & Diagnostics
    function confirmSubmitExam() {
        const answeredCount = Object.keys(userAnswers).length;
        const total = activeQuestions.length;
        const unanswered = total - answeredCount;

        let msg = `Are you sure you want to submit your exam?\n\n• Answered: ${answeredCount}/${total}\n• Unanswered: ${unanswered}`;
        if (unanswered > 0) {
            msg += `\n\nWarning: Unanswered questions will receive 0 marks.`;
        }

        if (confirm(msg)) {
            submitExam();
        }
    }

    function submitExam() {
        clearInterval(timerInterval);
        examEndTime = new Date();

        // Calculate time taken
        let timeTakenSeconds = EXAM_DURATION_SECONDS - examTimeRemaining;
        if (examStartTime && examEndTime) {
            timeTakenSeconds = Math.round((examEndTime - examStartTime) / 1000);
        }
        const mins = Math.floor(timeTakenSeconds / 60);
        const secs = timeTakenSeconds % 60;
        const formattedTime = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        // Calculate Total Score & Breakdown
        let correctCount = 0;
        const topicStats = {};
        const langStats = {};
        const diffStats = {
            Easy: { total: 0, correct: 0 },
            Medium: { total: 0, correct: 0 },
            Hard: { total: 0, correct: 0 }
        };

        activeQuestions.forEach(q => {
            // Topic stats
            const topicKey = q.topic || 'General';
            if (!topicStats[topicKey]) {
                topicStats[topicKey] = { total: 0, correct: 0 };
            }
            topicStats[topicKey].total++;

            // Language stats
            const langKey = q.language || 'Other';
            if (!langStats[langKey]) {
                langStats[langKey] = { total: 0, correct: 0 };
            }
            langStats[langKey].total++;

            // Difficulty stats
            const diffKey = q.difficulty || 'Medium';
            if (diffStats[diffKey]) {
                diffStats[diffKey].total++;
            }

            // Check correctness
            if (userAnswers[q.id] === q.correctAnswer) {
                correctCount++;
                topicStats[topicKey].correct++;
                langStats[langKey].correct++;
                if (diffStats[diffKey]) {
                    diffStats[diffKey].correct++;
                }
            }
        });

        const totalQ = activeQuestions.length;
        const percentage = Math.round((correctCount / totalQ) * 100);

        // Update Results UI
        resultsPercentage.textContent = `${percentage}%`;
        resultsScoreFraction.textContent = `${correctCount} / ${totalQ}`;
        resultsTimeTaken.textContent = formattedTime;

        // Readiness Tag
        resultsReadinessTag.className = 'stat-val badge-readiness';
        if (percentage >= 80) {
            resultsReadinessTag.textContent = 'Placement Ready (High)';
            resultsReadinessTag.classList.add('high');
        } else if (percentage >= 50) {
            resultsReadinessTag.textContent = 'Needs Practice (Medium)';
            resultsReadinessTag.classList.add('medium');
        } else {
            resultsReadinessTag.textContent = 'Critical Revision Needed';
            resultsReadinessTag.classList.add('low');
        }

        // Render Topic & Difficulty & Language Breakdowns
        resultsBreakdownGrid.innerHTML = '';

        // Difficulty Cards
        ['Easy', 'Medium', 'Hard'].forEach(diff => {
            const data = diffStats[diff];
            if (!data || data.total === 0) return;
            const diffPct = Math.round((data.correct / data.total) * 100);
            const dotColor = diff === 'Easy' ? 'green' : (diff === 'Medium' ? 'amber' : 'red');

            const card = document.createElement('div');
            card.className = 'breakdown-card';
            card.innerHTML = `
                <div class="breakdown-card-header">
                    <span class="breakdown-diff-dot ${dotColor}"></span>
                    <div>
                        <strong>${diff} Questions</strong>
                        <p>${data.total} questions</p>
                    </div>
                </div>
                <div class="breakdown-card-score">
                    <span>${data.correct} / ${data.total}</span>
                    <span class="breakdown-percent">${diffPct}%</span>
                </div>
            `;
            resultsBreakdownGrid.appendChild(card);
        });

        // Topic Cards
        Object.keys(topicStats).forEach(topic => {
            const data = topicStats[topic];
            const topicPct = Math.round((data.correct / data.total) * 100);

            const card = document.createElement('div');
            card.className = 'breakdown-card';
            card.innerHTML = `
                <div class="breakdown-card-header">
                    <span class="breakdown-diff-dot flame"></span>
                    <div>
                        <strong>${topic}</strong>
                        <p>${data.total} questions</p>
                    </div>
                </div>
                <div class="breakdown-card-score">
                    <span>${data.correct} / ${data.total}</span>
                    <span class="breakdown-percent">${topicPct}%</span>
                </div>
            `;
            resultsBreakdownGrid.appendChild(card);
        });

        // Language Cards
        Object.keys(langStats).forEach(lang => {
            const data = langStats[lang];
            const langPct = Math.round((data.correct / data.total) * 100);

            const card = document.createElement('div');
            card.className = 'breakdown-card';
            card.innerHTML = `
                <div class="breakdown-card-header">
                    <span class="breakdown-diff-dot purple"></span>
                    <div>
                        <strong>${lang}</strong>
                        <p>${data.total} questions</p>
                    </div>
                </div>
                <div class="breakdown-card-score">
                    <span>${data.correct} / ${data.total}</span>
                    <span class="breakdown-percent">${langPct}%</span>
                </div>
            `;
            resultsBreakdownGrid.appendChild(card);
        });

        // Switch to Screen 3
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Review Mode
    function startReviewMode() {
        currentMode = 'review';
        currentIndex = 0;
        headerModeBadge.textContent = 'Exam Review';
        headerModeBadge.className = 'badge mode-tag';
        timerBox.classList.add('hidden');
        btnSubmitExam.classList.add('hidden');
        quizFilterBar.classList.add('hidden');

        screenResults.classList.add('hidden');
        screenQuizWorkspace.classList.remove('hidden');

        buildNavigatorGrid();
        renderCurrentQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Keyboard Shortcuts
    function handleKeyboardShortcuts(e) {
        if (screenQuizWorkspace.classList.contains('hidden')) return;

        if (e.key === 'ArrowLeft') {
            navigate(-1);
        } else if (e.key === 'ArrowRight') {
            navigate(1);
        } else if (['1', '2', '3', '4'].includes(e.key)) {
            const keys = ['A', 'B', 'C', 'D'];
            const idx = parseInt(e.key, 10) - 1;
            selectOptionByKey(keys[idx]);
        } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
            selectOptionByKey(e.key.toUpperCase());
        } else if (e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'r') {
            toggleMarkReview();
        } else if (e.key === ' ' && currentMode === 'flashcards') {
            e.preventDefault();
            btnFlipCard.click();
        }
    }

    function selectOptionByKey(key) {
        const optBtn = optionsContainer.querySelector(`[data-option-key="${key}"]`);
        if (optBtn && !optBtn.disabled) {
            optBtn.click();
        }
    }

    // Utility: Shuffle
    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Utility: Escape HTML
    function escapeHtml(text) {
        if (typeof text !== 'string') return text;
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
