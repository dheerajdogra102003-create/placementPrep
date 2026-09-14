// Cloud Computing Module Application Logic
(function () {
    'use strict';

    // Application State
    let allQuestions = [];       // Master list of 60 questions
    let activeQuestions = [];    // Filtered / shuffled active pool
    let currentIndex = 0;        // Current question index in active pool
    let currentMode = 'practice';// 'practice' | 'exam' | 'flashcards' | 'review'
    
    // User response state: keyed by question ID
    let userAnswers = {};        // { [qId]: selectedOptionKey }
    let markedQuestions = new Set(); // Set of question IDs
    let isAnswerSubmitted = {};  // { [qId]: boolean }

    // Exam Timer State
    const EXAM_DURATION_SECONDS = 45 * 60; // 45 minutes
    let examTimeRemaining = EXAM_DURATION_SECONDS;
    let timerInterval = null;
    let examStartTime = null;
    let examEndTime = null;

    // Filters for Practice Mode
    let currentTypeFilter = 'all'; // 'all' | 'scenario' | 'regular'
    let currentDiffFilter = 'all'; // 'all' | 'Easy' | 'Medium' | 'Hard'

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
    const badgeQType = document.getElementById('badge-q-type');
    const badgeQDiff = document.getElementById('badge-q-diff');
    const badgeQTopic = document.getElementById('badge-q-topic');
    const btnMarkReview = document.getElementById('btn-mark-review');
    const markText = document.getElementById('mark-text');
    const companiesPillList = document.getElementById('companies-pill-list');

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
    const explanationWhyOthers = document.getElementById('explanation-why-others');
    const explanationInterviewTip = document.getElementById('explanation-interview-tip');

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
    const statScenarioScore = document.getElementById('stat-scenario-score');
    const statScenarioPercent = document.getElementById('stat-scenario-percent');
    const statRegularScore = document.getElementById('stat-regular-score');
    const statRegularPercent = document.getElementById('stat-regular-percent');
    const statEasyScore = document.getElementById('stat-easy-score');
    const statMediumScore = document.getElementById('stat-medium-score');
    const statHardScore = document.getElementById('stat-hard-score');
    const btnReviewAnswers = document.getElementById('btn-review-answers');
    const btnRetakeExam = document.getElementById('btn-retake-exam');

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

    // Load Questions from embedded questions.js or fallback fetch
    function loadQuestions() {
        if (typeof questionsData !== 'undefined' && Array.isArray(questionsData) && questionsData.length > 0) {
            allQuestions = questionsData;
            console.log(`Loaded ${allQuestions.length} Cloud Computing questions from questions.js`);
        } else {
            fetch('questions.json')
                .then(res => res.json())
                .then(data => {
                    allQuestions = data;
                    console.log(`Loaded ${allQuestions.length} questions via fetch`);
                })
                .catch(err => {
                    console.error('Failed to load questions.json', err);
                });
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

        // Filter pills in Practice Mode
        document.querySelectorAll('[data-filter-type]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-type]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentTypeFilter = e.currentTarget.dataset.filterType;
                applyFilters();
            });
        });

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
            headerModeBadge.className = 'badge mode-tag' + ' mode-exam';
            quizFilterBar.classList.add('hidden');
            btnSubmitExam.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
            
            // Randomize questions for exam simulation
            activeQuestions = shuffleArray([...allQuestions]).map(q => {
                // Return a copy with randomized option order if desired, while preserving keys
                return { ...q };
            });

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

    // Filter Logic for Practice Mode
    function applyFilters() {
        let filtered = [...allQuestions];

        if (currentTypeFilter === 'scenario') {
            filtered = filtered.filter(q => q.type === 'scenario');
        } else if (currentTypeFilter === 'regular') {
            filtered = filtered.filter(q => q.type === 'regular');
        }

        if (currentDiffFilter !== 'all') {
            filtered = filtered.filter(q => q.difficulty.toLowerCase() === currentDiffFilter.toLowerCase());
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
        alert('Time is up! Your placement assessment has been automatically submitted.');
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
            optionsContainer.innerHTML = '';
            explanationPanel.classList.add('hidden');
            return;
        }

        const q = activeQuestions[currentIndex];
        const qId = q.id;

        // Header Meta Badges
        badgeQNumber.textContent = `Q${currentIndex + 1}`;
        
        if (q.type === 'scenario') {
            badgeQType.textContent = '⚡ Scenario-Based';
            badgeQType.className = 'badge badge-scenario';
        } else {
            badgeQType.textContent = 'Conceptual / Regular';
            badgeQType.className = 'badge badge-regular';
        }

        badgeQDiff.textContent = q.difficulty;
        badgeQDiff.className = `badge badge-diff ${q.difficulty.toLowerCase()}`;
        badgeQTopic.textContent = q.topic;

        // Mark for review button state
        if (markedQuestions.has(qId)) {
            btnMarkReview.classList.add('marked');
            markText.textContent = 'Marked';
        } else {
            btnMarkReview.classList.remove('marked');
            markText.textContent = 'Mark';
        }

        // Target Companies Pills
        companiesPillList.innerHTML = '';
        if (q.targetCompanies && q.targetCompanies.length > 0) {
            q.targetCompanies.forEach(comp => {
                const span = document.createElement('span');
                span.className = 'company-mini-tag';
                span.textContent = comp;
                companiesPillList.appendChild(span);
            });
        }

        // Question Title
        questionText.textContent = q.question;

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
        letters.forEach(letter => {
            const optText = q.options[letter];
            if (!optText) return;

            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.key = letter;

            const isThisCorrect = letter === q.correctAnswer;
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
                <span class="option-text">${optText}</span>
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
        const isCorrect = userChoice === q.correctAnswer;

        if (userChoice !== undefined) {
            if (isCorrect) {
                explanationStatusIcon.textContent = '✓';
                explanationStatusIcon.className = 'status-indicator-icon correct';
                explanationStatusHeading.textContent = 'Correct Answer!';
                explanationStatusSub.textContent = `Excellent! Option ${q.correctAnswer} is the appropriate cloud architecture solution.`;
            } else {
                explanationStatusIcon.textContent = '✗';
                explanationStatusIcon.className = 'status-indicator-icon wrong';
                explanationStatusHeading.textContent = `Incorrect (Your choice: ${userChoice})`;
                explanationStatusSub.textContent = `The correct answer is Option ${q.correctAnswer}. Let's examine why:`;
            }
        } else {
            // Flashcard reveal or unattempted review
            explanationStatusIcon.textContent = 'ℹ';
            explanationStatusIcon.className = 'status-indicator-icon correct';
            explanationStatusHeading.textContent = `Correct Answer: Option ${q.correctAnswer}`;
            explanationStatusSub.textContent = 'Technical breakdown and rationale:';
        }

        explanationSummaryText.textContent = q.explanation;
        explanationWhyCorrect.textContent = q.whyCorrect;
        explanationWhyOthers.textContent = q.whyOthersIncorrect;
        explanationInterviewTip.textContent = q.interviewTip;

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
                if (userAnswers[qId] === q.correctAnswer) {
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
            if (userAnswers[q.id] === q.correctAnswer) {
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
        let scenarioCorrect = 0;
        let scenarioTotal = 0;
        let regularCorrect = 0;
        let regularTotal = 0;
        let easyCorrect = 0;
        let easyTotal = 0;
        let mediumCorrect = 0;
        let mediumTotal = 0;
        let hardCorrect = 0;
        let hardTotal = 0;

        activeQuestions.forEach(q => {
            const isCorrect = userAnswers[q.id] === q.correctAnswer;
            if (isCorrect) totalCorrect++;

            if (q.type === 'scenario') {
                scenarioTotal++;
                if (isCorrect) scenarioCorrect++;
            } else {
                regularTotal++;
                if (isCorrect) regularCorrect++;
            }

            const diff = q.difficulty.toLowerCase();
            if (diff === 'easy') {
                easyTotal++;
                if (isCorrect) easyCorrect++;
            } else if (diff === 'medium') {
                mediumTotal++;
                if (isCorrect) mediumCorrect++;
            } else if (diff === 'hard') {
                hardTotal++;
                if (isCorrect) hardCorrect++;
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

        // Breakdowns
        statScenarioScore.textContent = `${scenarioCorrect} / ${scenarioTotal}`;
        const scenarioPct = scenarioTotal > 0 ? Math.round((scenarioCorrect / scenarioTotal) * 100) : 0;
        statScenarioPercent.textContent = `${scenarioPct}% accuracy`;

        statRegularScore.textContent = `${regularCorrect} / ${regularTotal}`;
        const regularPct = regularTotal > 0 ? Math.round((regularCorrect / regularTotal) * 100) : 0;
        statRegularPercent.textContent = `${regularPct}% accuracy`;

        statEasyScore.textContent = `${easyCorrect} / ${easyTotal}`;
        statMediumScore.textContent = `${mediumCorrect} / ${mediumTotal}`;
        statHardScore.textContent = `${hardCorrect} / ${hardTotal}`;
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
        } else if (e.key === 'm' || e.key === 'M') {
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
