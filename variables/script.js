// Variables & Data Types Placement Application Logic
(function () {
    'use strict';

    // Application State
    let allQuestions = [];          // Master list of 50 questions
    let activeQuestions = [];       // Filtered / active pool
    let currentIndex = 0;           // Current question index in active pool
    let currentMode = 'practice';   // 'practice' | 'exam' | 'flashcards' | 'review'

    // User responses: keyed by question id
    let userAnswers = {};           // { [qId]: selectedOptionIndex (0, 1, 2, 3) }
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
    const badgeQConcept = document.getElementById('badge-q-concept');
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
    const distractorSection = document.getElementById('distractor-section');
    const distractorList = document.getElementById('distractor-list');
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
        } else if (typeof questions !== 'undefined' && Array.isArray(questions) && questions.length > 0) {
            allQuestions = questions;
        } else {
            console.error('No question bank found in questions.js');
        }
        console.log(`Loaded ${allQuestions.length} Variables & Data Types questions.`);
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

        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }

    // Mode Switching
    function startMode(mode) {
        currentMode = mode;
        userAnswers = {};
        markedQuestions.clear();
        isAnswerSubmitted = {};
        currentIndex = 0;

        // Reset filter pills
        currentTopicFilter = 'all';
        currentDiffFilter = 'all';
        document.querySelectorAll('[data-filter-topic]').forEach(p => p.classList.toggle('active', p.dataset.filterTopic === 'all'));
        document.querySelectorAll('[data-filter-diff]').forEach(p => p.classList.toggle('active', p.dataset.filterDiff === 'all'));

        // Screens transition
        screenModeSelect.classList.add('hidden');
        screenResults.classList.add('hidden');
        screenQuizWorkspace.classList.remove('hidden');

        // Mode specific UI configuration
        if (mode === 'practice') {
            headerModeBadge.textContent = 'Practice Mode';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            stopTimer();

            activeQuestions = [...allQuestions];
        } else if (mode === 'exam') {
            headerModeBadge.textContent = 'Timed Exam';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.remove('hidden');
            quizFilterBar.classList.add('hidden');
            btnSubmitExam.classList.remove('hidden');

            activeQuestions = shuffleArray([...allQuestions]);
            startTimer(EXAM_DURATION_SECONDS);
        } else if (mode === 'flashcards') {
            headerModeBadge.textContent = 'Flashcards';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            stopTimer();

            activeQuestions = [...allQuestions];
        }

        buildNavigatorGrid();
        renderCurrentQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function returnToModeSelect() {
        stopTimer();
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.add('hidden');
        screenModeSelect.classList.remove('hidden');
        headerModeBadge.textContent = 'Placement Prep';
        timerBox.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Filter Logic for Practice & Flashcards
    function applyFilters() {
        activeQuestions = allQuestions.filter(q => {
            const matchesTopic = currentTopicFilter === 'all' || q.topic === currentTopicFilter;
            const matchesDiff = currentDiffFilter === 'all' || q.difficulty.toLowerCase() === currentDiffFilter.toLowerCase();
            return matchesTopic && matchesDiff;
        });

        if (activeQuestions.length === 0) {
            activeQuestions = [...allQuestions];
        }

        currentIndex = 0;
        buildNavigatorGrid();
        renderCurrentQuestion();
    }

    // Render Question
    function renderCurrentQuestion() {
        if (!activeQuestions || activeQuestions.length === 0) return;

        const q = activeQuestions[currentIndex];
        const qId = q.id;

        // Progress bar & label
        const pct = Math.round(((currentIndex + 1) / activeQuestions.length) * 100);
        progressBarFill.style.width = `${pct}%`;
        progressLabel.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
        progressPercent.textContent = `${pct}%`;

        // Badges
        badgeQNumber.textContent = `Q ${currentIndex + 1}`;
        badgeQTopic.textContent = q.topic;
        badgeQConcept.textContent = q.concept || q.topic;
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

        // Render Code block if present
        if (q.code && q.code.trim().length > 0) {
            questionCode.textContent = q.code;
            codeContainer.classList.remove('hidden');
        } else {
            codeContainer.classList.add('hidden');
            questionCode.textContent = '';
        }

        // Render Options
        optionsContainer.innerHTML = '';
        const hasAnswered = userAnswers.hasOwnProperty(qId);
        const selectedOptIdx = userAnswers[qId];

        q.options.forEach((optText, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
            const optBtn = document.createElement('button');
            optBtn.className = 'option-btn';
            optBtn.setAttribute('data-option-index', optIndex);

            optBtn.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${escapeHtml(optText)}</span>
            `;

            // State Styling
            if (currentMode === 'exam') {
                if (hasAnswered && selectedOptIdx === optIndex) {
                    optBtn.classList.add('selected');
                }
                optBtn.addEventListener('click', () => handleExamOptionClick(qId, optIndex));
            } else if (currentMode === 'practice') {
                if (hasAnswered) {
                    optBtn.disabled = true;
                    if (optIndex === q.correctAnswer) {
                        optBtn.classList.add('correct');
                    } else if (selectedOptIdx === optIndex) {
                        optBtn.classList.add('incorrect');
                    }
                } else {
                    optBtn.addEventListener('click', () => handlePracticeOptionClick(q, optIndex));
                }
            } else if (currentMode === 'flashcards') {
                optBtn.addEventListener('click', () => {
                    revealExplanation(q, optIndex);
                });
            } else if (currentMode === 'review') {
                optBtn.disabled = true;
                if (optIndex === q.correctAnswer) {
                    optBtn.classList.add('correct');
                } else if (selectedOptIdx === optIndex) {
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
                renderExplanation(q, selectedOptIdx);
                explanationPanel.classList.remove('hidden');
            } else {
                explanationPanel.classList.add('hidden');
            }
        } else if (currentMode === 'review') {
            flashcardRevealRow.classList.add('hidden');
            renderExplanation(q, selectedOptIdx);
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
    function handleExamOptionClick(qId, optIndex) {
        userAnswers[qId] = optIndex;
        renderCurrentQuestion();
    }

    function handlePracticeOptionClick(q, optIndex) {
        userAnswers[q.id] = optIndex;
        isAnswerSubmitted[q.id] = true;
        renderCurrentQuestion();
        updateScoreHeader();
    }

    function revealExplanation(q, optIndex) {
        userAnswers[q.id] = optIndex;
        flashcardRevealRow.classList.add('hidden');
        renderExplanation(q, optIndex);
        explanationPanel.classList.remove('hidden');
        updateSidebarStats();
        highlightCurrentNavCell();
    }

    // Explanation Rendering
    function renderExplanation(q, selectedOptIndex) {
        const isCorrect = selectedOptIndex === q.correctAnswer;
        const correctLetter = String.fromCharCode(65 + q.correctAnswer);
        const correctText = q.options[q.correctAnswer];

        if (isCorrect) {
            explanationStatusIcon.className = 'status-indicator-icon correct';
            explanationStatusIcon.textContent = '✓';
            explanationStatusHeading.textContent = 'Correct Answer!';
            explanationStatusSub.textContent = `Option ${correctLetter} (${correctText}) is correct.`;
        } else {
            explanationStatusIcon.className = 'status-indicator-icon wrong';
            explanationStatusIcon.textContent = '✕';
            explanationStatusHeading.textContent = 'Incorrect Choice';
            explanationStatusSub.textContent = `Correct: Option ${correctLetter} (${correctText})`;
        }

        explanationSummaryText.textContent = q.explanation || `Concept: ${q.concept}. Variables, scopes, and operators are fundamental to MNC technical rounds.`;
        explanationWhyCorrect.textContent = q.whyCorrect || `${correctText} is the correct evaluation.`;

        // Distractor Breakdown
        distractorList.innerHTML = '';
        if (q.whyOthersAreWrong && Object.keys(q.whyOthersAreWrong).length > 0) {
            for (const [key, value] of Object.entries(q.whyOthersAreWrong)) {
                const optIdx = parseInt(key, 10);
                const letter = String.fromCharCode(65 + optIdx);
                const optName = q.options[optIdx] || `Option ${letter}`;

                const item = document.createElement('div');
                item.className = 'distractor-item';
                item.innerHTML = `<strong>Option ${letter} (${escapeHtml(optName)}):</strong> ${escapeHtml(value)}`;
                distractorList.appendChild(item);
            }
            distractorSection.classList.remove('hidden');
        } else {
            distractorSection.classList.add('hidden');
        }

        textRealWorld.textContent = q.realWorldApplication || `Understanding ${q.concept || 'variables and scoping'} is essential for writing robust, leak-free code in enterprise systems.`;
    }

    // Sidebar Navigator Grid Builder (1 to 50)
    function buildNavigatorGrid() {
        navigatorGrid.innerHTML = '';
        navCountBadge.textContent = `${activeQuestions.length} Questions`;

        activeQuestions.forEach((q, idx) => {
            const cell = document.createElement('button');
            cell.className = 'nav-cell-btn';
            cell.textContent = idx + 1;
            cell.title = `Question ${idx + 1}: ${q.concept || q.topic}`;
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
        stopTimer();
        examEndTime = new Date();
        showResults();
    }

    function showResults() {
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.remove('hidden');

        // Calculate score
        let total = activeQuestions.length;
        let correct = 0;

        activeQuestions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correct++;
            }
        });

        const pct = Math.round((correct / total) * 100);
        resultsPercentage.textContent = `${pct}%`;
        resultsScoreFraction.textContent = `${correct} / ${total}`;

        // Time spent
        let durationSec = EXAM_DURATION_SECONDS - examTimeRemaining;
        if (examStartTime && examEndTime) {
            durationSec = Math.round((examEndTime - examStartTime) / 1000);
        }
        const m = Math.floor(durationSec / 60);
        const s = durationSec % 60;
        resultsTimeTaken.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        // Placement Readiness Verdict
        if (pct >= 80) {
            resultsReadinessTag.textContent = 'Placement Ready 🚀';
            resultsReadinessTag.className = 'stat-val badge-readiness high';
        } else if (pct >= 60) {
            resultsReadinessTag.textContent = 'Good Foundation 👍';
            resultsReadinessTag.className = 'stat-val badge-readiness medium';
        } else {
            resultsReadinessTag.textContent = 'Needs Revision 📚';
            resultsReadinessTag.className = 'stat-val badge-readiness low';
        }

        renderResultsBreakdown();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderResultsBreakdown() {
        resultsBreakdownGrid.innerHTML = '';

        // Difficulty groups
        const diffMap = {
            'Easy': { correct: 0, total: 0 },
            'Medium': { correct: 0, total: 0 },
            'Hard': { correct: 0, total: 0 }
        };

        // Topic groups
        const topicMap = {};

        activeQuestions.forEach(q => {
            const isCorr = userAnswers[q.id] === q.correctAnswer;
            
            // Diff tally
            const diffKey = q.difficulty;
            if (diffMap[diffKey]) {
                diffMap[diffKey].total++;
                if (isCorr) diffMap[diffKey].correct++;
            }

            // Topic tally
            const topKey = q.topic;
            if (!topicMap[topKey]) {
                topicMap[topKey] = { correct: 0, total: 0 };
            }
            topicMap[topKey].total++;
            if (isCorr) topicMap[topKey].correct++;
        });

        // Render Difficulty Cards
        Object.entries(diffMap).forEach(([diffName, data]) => {
            if (data.total === 0) return;
            const card = document.createElement('div');
            card.className = 'breakdown-card';
            const pct = Math.round((data.correct / data.total) * 100);

            let dotColor = 'green';
            if (diffName === 'Medium') dotColor = 'amber';
            if (diffName === 'Hard') dotColor = 'red';

            card.innerHTML = `
                <div class="breakdown-card-header">
                    <span class="breakdown-diff-dot ${dotColor}"></span>
                    <div>
                        <strong>${diffName} Questions</strong>
                        <p>${data.total} questions in test</p>
                    </div>
                </div>
                <div class="breakdown-card-score">
                    <span>${data.correct} / ${data.total}</span>
                    <span class="breakdown-percent">${pct}%</span>
                </div>
            `;
            resultsBreakdownGrid.appendChild(card);
        });

        // Render Topic Cards
        Object.entries(topicMap).forEach(([topName, data]) => {
            const card = document.createElement('div');
            card.className = 'breakdown-card';
            const pct = Math.round((data.correct / data.total) * 100);

            card.innerHTML = `
                <div class="breakdown-card-header">
                    <span class="breakdown-diff-dot var"></span>
                    <div>
                        <strong>${topName}</strong>
                        <p>${data.total} questions</p>
                    </div>
                </div>
                <div class="breakdown-card-score">
                    <span>${data.correct} / ${data.total}</span>
                    <span class="breakdown-percent">${pct}%</span>
                </div>
            `;
            resultsBreakdownGrid.appendChild(card);
        });
    }

    function startReviewMode() {
        currentMode = 'review';
        currentIndex = 0;
        screenResults.classList.add('hidden');
        screenQuizWorkspace.classList.remove('hidden');
        headerModeBadge.textContent = 'Review Answers';
        headerModeBadge.className = 'badge mode-tag';
        timerBox.classList.add('hidden');
        quizFilterBar.classList.add('hidden');
        btnSubmitExam.classList.add('hidden');

        buildNavigatorGrid();
        renderCurrentQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Exam Timer Engine (30 Minutes for 50 Questions)
    function startTimer(seconds) {
        stopTimer();
        examTimeRemaining = seconds;
        examStartTime = new Date();
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            examTimeRemaining--;
            updateTimerDisplay();

            if (examTimeRemaining <= 300) { // under 5 min
                timerBox.classList.add('urgent');
            }

            if (examTimeRemaining <= 0) {
                stopTimer();
                alert('Time has expired! Submitting your exam automatically.');
                submitExam();
            }
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timerBox.classList.remove('urgent');
    }

    function updateTimerDisplay() {
        const m = Math.floor(examTimeRemaining / 60);
        const s = examTimeRemaining % 60;
        timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    // Keyboard Shortcuts Support
    function handleKeyboardShortcuts(e) {
        if (screenQuizWorkspace.classList.contains('hidden')) return;

        if (e.key === 'ArrowLeft') {
            navigate(-1);
        } else if (e.key === 'ArrowRight') {
            navigate(1);
        } else if (['1', '2', '3', '4'].includes(e.key)) {
            const idx = parseInt(e.key, 10) - 1;
            selectOptionByIndex(idx);
        } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
            const code = e.key.toUpperCase().charCodeAt(0) - 65;
            selectOptionByIndex(code);
        } else if (e.key.toLowerCase() === 'm' || e.key.toLowerCase() === 'r') {
            toggleMarkReview();
        } else if (e.key === ' ' && currentMode === 'flashcards') {
            e.preventDefault();
            btnFlipCard.click();
        }
    }

    function selectOptionByIndex(index) {
        const optionBtns = optionsContainer.querySelectorAll('.option-btn');
        if (optionBtns[index] && !optionBtns[index].disabled) {
            optionBtns[index].click();
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
