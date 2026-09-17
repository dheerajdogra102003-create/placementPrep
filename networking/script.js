// Networking Module Application Logic
(function () {
    'use strict';

    // Application State
    let allQuestions = [];          // Master list of 60 questions
    let activeQuestions = [];       // Active working pool
    let currentIndex = 0;           // Index in activeQuestions
    let currentMode = 'practice';   // 'practice' | 'exam' | 'flashcards' | 'review'

    // User Response State
    let userAnswers = {};           // { [qId]: selectedOptionIndex (0-3) }
    let markedQuestions = new Set();// Set of bookmarked question IDs
    let isAnswerSubmitted = {};     // { [qId]: boolean }

    // Exam Timer State (45 minutes = 2700s)
    const EXAM_DURATION_SECONDS = 45 * 60;
    let examTimeRemaining = EXAM_DURATION_SECONDS;
    let timerInterval = null;
    let examStartTime = null;

    // Filter states
    let currentTypeFilter = 'all';
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
    const badgeQType = document.getElementById('badge-q-type');
    const badgeQDiff = document.getElementById('badge-q-diff');
    const badgeQTopic = document.getElementById('badge-q-topic');
    const btnMarkReview = document.getElementById('btn-mark-review');
    const markText = document.getElementById('mark-text');
    const sourceNoteText = document.getElementById('source-note-text');

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    const flashcardRevealRow = document.getElementById('flashcard-reveal-row');
    const btnFlipCard = document.getElementById('btn-flip-card');

    const explanationPanel = document.getElementById('explanation-panel');
    const explanationStatusIconBox = document.getElementById('explanation-status-icon-box');
    const explanationStatusIcon = document.getElementById('explanation-status-icon');
    const explanationStatusHeading = document.getElementById('explanation-status-heading');
    const explanationStatusSub = document.getElementById('explanation-status-sub');
    const explanationSummaryText = document.getElementById('explanation-summary-text');
    const explanationWhyCorrect = document.getElementById('explanation-why-correct');
    const explanationDistractorList = document.getElementById('explanation-distractor-list');
    const explanationRealWorld = document.getElementById('explanation-real-world');
    const explanationPlacementTip = document.getElementById('explanation-placement-tip');

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnRetryQ = document.getElementById('btn-retry-q');
    const btnSubmitExam = document.getElementById('btn-submit-exam');
    const btnChangeMode = document.getElementById('btn-change-mode');

    const navigatorGrid = document.getElementById('navigator-grid');
    const navCountBadge = document.getElementById('nav-count-badge');
    const sideStatAnswered = document.getElementById('side-stat-answered');
    const sideStatMarked = document.getElementById('side-stat-marked');
    const sideStatRemaining = document.getElementById('side-stat-remaining');

    // Results screen elements
    const resultsHeadline = document.getElementById('results-headline');
    const resultsSubtext = document.getElementById('results-subtext');
    const resultsPercentage = document.getElementById('results-percentage');
    const resultsScoreFraction = document.getElementById('results-score-fraction');
    const resultsCorrectCount = document.getElementById('results-correct-count');
    const resultsIncorrectCount = document.getElementById('results-incorrect-count');
    const resultsTimeTaken = document.getElementById('results-time-taken');
    const resultsReadinessTag = document.getElementById('results-readiness-tag');
    const statScenarioScore = document.getElementById('stat-scenario-score');
    const statScenarioPercent = document.getElementById('stat-scenario-percent');
    const statTrickyScore = document.getElementById('stat-tricky-score');
    const statTrickyPercent = document.getElementById('stat-tricky-percent');
    const statComparisonScore = document.getElementById('stat-comparison-score');
    const statComparisonPercent = document.getElementById('stat-comparison-percent');
    const statEasyScore = document.getElementById('stat-easy-score');
    const statMediumScore = document.getElementById('stat-medium-score');
    const statHardScore = document.getElementById('stat-hard-score');
    const topicPerformanceContainer = document.getElementById('topic-performance-container');
    const btnReviewAnswers = document.getElementById('btn-review-answers');
    const btnRetakeExam = document.getElementById('btn-retake-exam');

    // Initialize application
    function init() {
        initTheme();
        loadBookmarks();
        loadQuestions();
        bindEvents();
    }

    // Theme Management
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('placementPrep_theme', next);
            });
        }
    }

    // Load Bookmarks from localStorage
    function loadBookmarks() {
        try {
            const saved = localStorage.getItem('networking_bookmarks');
            if (saved) {
                const arr = JSON.parse(saved);
                markedQuestions = new Set(arr);
            }
        } catch (e) {
            console.error('Failed to load bookmarks', e);
        }
    }

    function saveBookmarks() {
        try {
            localStorage.setItem('networking_bookmarks', JSON.stringify([...markedQuestions]));
        } catch (e) {
            console.error('Failed to save bookmarks', e);
        }
    }

    // Load Questions Data
    function loadQuestions() {
        if (window.NETWORKING_QUESTIONS && Array.isArray(window.NETWORKING_QUESTIONS) && window.NETWORKING_QUESTIONS.length > 0) {
            allQuestions = window.NETWORKING_QUESTIONS;
            onQuestionsLoaded();
        } else if (typeof questionsData !== 'undefined' && Array.isArray(questionsData) && questionsData.length > 0) {
            allQuestions = questionsData;
            onQuestionsLoaded();
        } else {
            // Fallback fetch
            fetch('questions.json')
                .then(res => res.json())
                .then(data => {
                    allQuestions = data;
                    onQuestionsLoaded();
                })
                .catch(err => {
                    console.error('Error loading questions.json:', err);
                    if (questionText) questionText.textContent = 'Failed to load questions. Please verify questions.json exists.';
                });
        }
    }

    function onQuestionsLoaded() {
        console.log(`Loaded ${allQuestions.length} Networking questions.`);
    }

    // Event Bindings
    function bindEvents() {
        // Start Mode Buttons
        document.querySelectorAll('.start-mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.getAttribute('data-mode');
                startMode(mode);
            });
        });

        // Change Mode Button
        if (btnChangeMode) {
            btnChangeMode.addEventListener('click', () => {
                if (currentMode === 'exam') {
                    if (confirm('Are you sure you want to exit the exam? Current progress will be lost.')) {
                        stopTimer();
                        showScreen('select');
                    }
                } else {
                    showScreen('select');
                }
            });
        }

        // Navigation
        if (btnPrev) btnPrev.addEventListener('click', goToPreviousQuestion);
        if (btnNext) btnNext.addEventListener('click', goToNextQuestion);
        if (btnRetryQ) btnRetryQ.addEventListener('click', retryCurrentQuestion);

        // Bookmark toggle
        if (btnMarkReview) {
            btnMarkReview.addEventListener('click', toggleBookmark);
        }

        // Flashcard Flip
        if (btnFlipCard) {
            btnFlipCard.addEventListener('click', revealFlashcard);
        }

        // Submit Exam or Practice
        if (btnSubmitExam) {
            btnSubmitExam.addEventListener('click', () => {
                const total = activeQuestions.length;
                const answered = Object.keys(userAnswers).length;
                const unanswered = total - answered;
                let msg = currentMode === 'exam'
                    ? 'Are you sure you want to finish and submit your exam?'
                    : 'Are you ready to finish your practice session and view your overall score & review report?';
                if (unanswered > 0) {
                    msg = `You have answered ${answered} of ${total} questions (${unanswered} unattempted).\n` + msg;
                }
                if (confirm(msg)) {
                    finishExam();
                }
            });
        }

        // Results buttons
        if (btnReviewAnswers) {
            btnReviewAnswers.addEventListener('click', () => {
                startMode('review');
            });
        }

        if (btnRetakeExam) {
            btnRetakeExam.addEventListener('click', () => {
                startMode('exam');
            });
        }

        // Filter Pills
        document.querySelectorAll('[data-filter-type]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-type]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentTypeFilter = e.currentTarget.getAttribute('data-filter-type');
                applyFilters();
            });
        });

        document.querySelectorAll('[data-filter-diff]').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('[data-filter-diff]').forEach(p => p.classList.remove('active'));
                e.currentTarget.classList.add('active');
                currentDiffFilter = e.currentTarget.getAttribute('data-filter-diff');
                applyFilters();
            });
        });

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => {
            if (!screenQuizWorkspace || screenQuizWorkspace.classList.contains('hidden')) return;

            if (e.key === 'ArrowLeft') {
                goToPreviousQuestion();
            } else if (e.key === 'ArrowRight') {
                goToNextQuestion();
            } else if (e.key === ' ' && currentMode === 'flashcards') {
                e.preventDefault();
                revealFlashcard();
            } else if (['1', '2', '3', '4'].includes(e.key)) {
                const optIndex = parseInt(e.key, 10) - 1;
                selectOption(optIndex);
            }
        });
    }

    // Screen Transitions
    function showScreen(screen) {
        screenModeSelect.classList.add('hidden');
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.add('hidden');

        if (screen === 'select') {
            screenModeSelect.classList.remove('hidden');
            if (timerBox) timerBox.classList.add('hidden');
            if (headerModeBadge) headerModeBadge.textContent = 'Module Overview';
        } else if (screen === 'workspace') {
            screenQuizWorkspace.classList.remove('hidden');
        } else if (screen === 'results') {
            screenResults.classList.remove('hidden');
            if (timerBox) timerBox.classList.add('hidden');
            if (headerModeBadge) headerModeBadge.textContent = 'Exam Results';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Start a Mode
    function startMode(mode) {
        currentMode = mode;
        currentIndex = 0;
        if (mode !== 'review') {
            userAnswers = {};
            isAnswerSubmitted = {};
        }

        if (headerModeBadge) {
            if (mode === 'practice') headerModeBadge.textContent = 'Interactive Practice';
            else if (mode === 'exam') headerModeBadge.textContent = 'Timed Exam (45m)';
            else if (mode === 'flashcards') headerModeBadge.textContent = 'Flashcard Study';
            else if (mode === 'review') headerModeBadge.textContent = 'Review Explanations';
        }

        // Show/hide exam vs practice UI elements
        if (mode === 'exam') {
            if (quizFilterBar) quizFilterBar.classList.add('hidden');
            if (btnSubmitExam) {
                btnSubmitExam.classList.remove('hidden');
                btnSubmitExam.className = 'btn btn-danger nav-btn';
                btnSubmitExam.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Submit Exam`;
            }
            if (btnRetryQ) btnRetryQ.classList.add('hidden');
            if (flashcardRevealRow) flashcardRevealRow.classList.add('hidden');
            if (timerBox) timerBox.classList.remove('hidden');

            // Randomized order for exam
            activeQuestions = shuffleArray([...allQuestions]).map(q => randomizeOptions(q));
            startTimer();
        } else {
            if (quizFilterBar) quizFilterBar.classList.remove('hidden');
            if (btnSubmitExam) {
                if (mode === 'review') {
                    btnSubmitExam.classList.add('hidden');
                } else {
                    btnSubmitExam.classList.remove('hidden');
                    btnSubmitExam.className = 'btn btn-accent nav-btn';
                    btnSubmitExam.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Finish &amp; View Review`;
                }
            }
            if (timerBox) timerBox.classList.add('hidden');
            stopTimer();

            if (mode === 'flashcards') {
                if (flashcardRevealRow) flashcardRevealRow.classList.remove('hidden');
                if (btnRetryQ) btnRetryQ.classList.add('hidden');
            } else {
                if (flashcardRevealRow) flashcardRevealRow.classList.add('hidden');
            }

            // Normal active pool with active filters
            if (mode !== 'review') {
                applyFilters();
            }
        }

        showScreen('workspace');
        renderQuestion();
        renderNavigator();
        updateScore();
    }

    // Helper: Randomize options while keeping correct index mapping
    function randomizeOptions(q) {
        const copy = JSON.parse(JSON.stringify(q));
        const originalOptions = [...copy.options];
        const correctAnswerText = copy.correct_answer;

        // Shuffle options
        const shuffled = shuffleArray(originalOptions);
        copy.options = shuffled;
        copy.correct_option_index = shuffled.indexOf(correctAnswerText);
        return copy;
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Filter active questions in Practice/Review mode
    function applyFilters() {
        let pool = [...allQuestions];

        if (currentTypeFilter !== 'all') {
            pool = pool.filter(q => q.question_type === currentTypeFilter);
        }

        if (currentDiffFilter !== 'all') {
            pool = pool.filter(q => q.difficulty.toLowerCase() === currentDiffFilter.toLowerCase());
        }

        activeQuestions = pool;
        currentIndex = 0;
        renderQuestion();
        renderNavigator();
    }

    // Timer Logic for Exam Mode
    function startTimer() {
        stopTimer();
        examTimeRemaining = EXAM_DURATION_SECONDS;
        examStartTime = Date.now();
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            examTimeRemaining--;
            updateTimerDisplay();

            if (examTimeRemaining <= 0) {
                stopTimer();
                alert('Time has expired! Submitting your exam automatically.');
                finishExam();
            }
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function updateTimerDisplay() {
        if (!timerDisplay) return;
        const minutes = Math.floor(examTimeRemaining / 60);
        const seconds = examTimeRemaining % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (examTimeRemaining <= 300) { // Under 5 mins
            timerBox.classList.add('warning');
        } else {
            timerBox.classList.remove('warning');
        }
    }

    // Render Current Question
    function renderQuestion() {
        if (!activeQuestions || activeQuestions.length === 0) {
            if (questionText) questionText.textContent = 'No questions match the selected filter criteria.';
            if (optionsContainer) optionsContainer.innerHTML = '';
            if (explanationPanel) explanationPanel.classList.add('hidden');
            return;
        }

        const q = activeQuestions[currentIndex];
        const qId = q.id;

        // Progress
        if (progressLabel) progressLabel.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
        const pct = Math.round(((currentIndex + 1) / activeQuestions.length) * 100);
        if (progressPercent) progressPercent.textContent = `${pct}% Completed`;
        if (progressBarFill) progressBarFill.style.width = `${pct}%`;

        // Badges
        if (badgeQNumber) badgeQNumber.textContent = `Q${q.id}`;
        
        if (badgeQType) {
            badgeQType.textContent = q.question_type;
            badgeQType.className = 'badge';
            if (q.question_type === 'Scenario-Based') badgeQType.classList.add('badge-scenario');
            else if (q.question_type === 'Tricky') badgeQType.classList.add('badge-tricky');
            else if (q.question_type === 'Comparison') badgeQType.classList.add('badge-comparison');
            else badgeQType.classList.add('badge-concept');
        }

        if (badgeQDiff) {
            badgeQDiff.textContent = q.difficulty;
            badgeQDiff.className = `badge badge-diff ${q.difficulty.toLowerCase()}`;
        }

        if (badgeQTopic) badgeQTopic.textContent = q.topic;

        // Source note
        if (sourceNoteText) {
            sourceNoteText.textContent = q.source_note || `${q.source_type} (2026 Focus)`;
        }

        // Bookmark button
        updateBookmarkUI(qId);

        // Question Title
        if (questionText) {
            questionText.textContent = q.question;
        }

        // Render 4 Options
        renderOptions(q);

        // Explanation & Feedback State
        const isAnswered = userAnswers[qId] !== undefined;
        const isSubmitted = isAnswerSubmitted[qId] === true;

        if (currentMode === 'exam') {
            // Never show explanation in exam mode
            if (explanationPanel) explanationPanel.classList.add('hidden');
            if (btnRetryQ) btnRetryQ.classList.add('hidden');
        } else if (currentMode === 'flashcards') {
            if (isSubmitted) {
                renderExplanation(q, userAnswers[qId]);
                if (explanationPanel) explanationPanel.classList.remove('hidden');
            } else {
                if (explanationPanel) explanationPanel.classList.add('hidden');
            }
        } else { // practice or review
            if (isAnswered || currentMode === 'review') {
                renderExplanation(q, userAnswers[qId]);
                if (explanationPanel) explanationPanel.classList.remove('hidden');
                if (btnRetryQ && currentMode === 'practice') btnRetryQ.classList.remove('hidden');
            } else {
                if (explanationPanel) explanationPanel.classList.add('hidden');
                if (btnRetryQ) btnRetryQ.classList.add('hidden');
            }
        }

        // Navigation button states
        if (btnPrev) btnPrev.disabled = currentIndex === 0;
        if (btnNext) {
            if (currentIndex === activeQuestions.length - 1) {
                if (currentMode === 'review') {
                    btnNext.className = 'btn btn-secondary nav-btn';
                    btnNext.innerHTML = `Back to Report <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                } else if (currentMode === 'exam') {
                    btnNext.className = 'btn btn-danger nav-btn';
                    btnNext.innerHTML = `Submit Exam <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                } else {
                    btnNext.className = 'btn btn-primary nav-btn';
                    btnNext.innerHTML = `Finish &amp; View Review <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                }
            } else {
                btnNext.className = 'btn btn-primary nav-btn';
                btnNext.innerHTML = `Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
            }
        }

        updateNavigatorActiveState();
    }

    // Render Options
    function renderOptions(q) {
        if (!optionsContainer) return;
        optionsContainer.innerHTML = '';

        const letters = ['A', 'B', 'C', 'D'];
        const qId = q.id;
        const selectedIdx = userAnswers[qId];
        const hasAnswered = selectedIdx !== undefined;

        q.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.setAttribute('type', 'button');
            btn.setAttribute('data-option-index', idx);

            const letter = document.createElement('span');
            letter.className = 'option-letter';
            letter.textContent = letters[idx];

            const text = document.createElement('span');
            text.className = 'option-text';
            text.textContent = optText;

            btn.appendChild(letter);
            btn.appendChild(text);

            // Styling based on state
            if (currentMode === 'exam') {
                if (selectedIdx === idx) {
                    btn.classList.add('selected');
                }
            } else if (currentMode === 'practice' || currentMode === 'review') {
                if (hasAnswered || currentMode === 'review') {
                    btn.disabled = true;
                    if (idx === q.correct_option_index) {
                        btn.classList.add('correct');
                    } else if (idx === selectedIdx) {
                        btn.classList.add('incorrect');
                    }
                }
            }

            btn.addEventListener('click', () => {
                selectOption(idx);
            });

            optionsContainer.appendChild(btn);
        });
    }

    // Option Selection Handler
    function selectOption(optionIndex) {
        if (!activeQuestions || activeQuestions.length === 0) return;
        const q = activeQuestions[currentIndex];
        const qId = q.id;

        // In practice mode, prevent changing answer once chosen (unless retry clicked)
        if (currentMode === 'practice' && userAnswers[qId] !== undefined) {
            return;
        }

        userAnswers[qId] = optionIndex;
        isAnswerSubmitted[qId] = true;

        if (currentMode === 'exam') {
            // Update selected class on buttons
            document.querySelectorAll('.option-btn').forEach((btn, idx) => {
                if (idx === optionIndex) btn.classList.add('selected');
                else btn.classList.remove('selected');
            });
        } else {
            // Practice or flashcard mode: immediately show correct/incorrect
            renderQuestion();
        }

        updateScore();
        renderNavigator();
    }

    // Render Detailed Explanation Panel
    function renderExplanation(q, selectedIdx) {
        const isCorrect = selectedIdx === q.correct_option_index;
        const letters = ['A', 'B', 'C', 'D'];

        if (isCorrect) {
            explanationStatusIconBox.className = 'status-indicator-icon correct';
            explanationStatusIcon.textContent = '✓';
            explanationStatusHeading.textContent = 'Correct Answer!';
            explanationStatusSub.textContent = 'Excellent! Here is the detailed architectural breakdown:';
        } else if (selectedIdx !== undefined) {
            explanationStatusIconBox.className = 'status-indicator-icon incorrect';
            explanationStatusIcon.textContent = '✕';
            explanationStatusHeading.textContent = `Incorrect. Correct Option is (${letters[q.correct_option_index]})`;
            explanationStatusSub.textContent = 'Carefully review the technical rationale below:';
        } else {
            // Review without answering
            explanationStatusIconBox.className = 'status-indicator-icon correct';
            explanationStatusIcon.textContent = 'ℹ';
            explanationStatusHeading.textContent = `Answer: Option (${letters[q.correct_option_index]}) - ${q.correct_answer}`;
            explanationStatusSub.textContent = 'Concept and distractor explanation:';
        }

        explanationSummaryText.textContent = q.explanation;
        explanationWhyCorrect.textContent = q.why_other_options_are_wrong[letters[q.correct_option_index]] || q.explanation;

        // Render distractor explanations
        explanationDistractorList.innerHTML = '';
        letters.forEach((l, idx) => {
            if (idx !== q.correct_option_index && q.why_other_options_are_wrong[l]) {
                const item = document.createElement('div');
                item.className = 'distractor-item';
                item.innerHTML = `<strong>Option ${l}:</strong> ${q.why_other_options_are_wrong[l]}`;
                explanationDistractorList.appendChild(item);
            }
        });

        if (explanationRealWorld) {
            explanationRealWorld.textContent = q.real_world_example || 'Applied across standard enterprise network architectures.';
        }

        if (explanationPlacementTip) {
            explanationPlacementTip.textContent = q.placement_tip || 'Always identify the operating OSI layer first to eliminate wrong options.';
        }
    }

    // Flashcard Reveal Button
    function revealFlashcard() {
        if (!activeQuestions || activeQuestions.length === 0) return;
        const q = activeQuestions[currentIndex];
        isAnswerSubmitted[q.id] = true;
        renderExplanation(q, userAnswers[q.id]);
        if (explanationPanel) explanationPanel.classList.remove('hidden');
    }

    // Retry Question in Practice Mode
    function retryCurrentQuestion() {
        if (!activeQuestions || activeQuestions.length === 0) return;
        const q = activeQuestions[currentIndex];
        delete userAnswers[q.id];
        delete isAnswerSubmitted[q.id];
        renderQuestion();
        renderNavigator();
        updateScore();
    }

    // Bookmark Toggle
    function toggleBookmark() {
        if (!activeQuestions || activeQuestions.length === 0) return;
        const qId = activeQuestions[currentIndex].id;

        if (markedQuestions.has(qId)) {
            markedQuestions.delete(qId);
        } else {
            markedQuestions.add(qId);
        }

        saveBookmarks();
        updateBookmarkUI(qId);
        renderNavigator();
    }

    function updateBookmarkUI(qId) {
        if (!btnMarkReview) return;
        const isMarked = markedQuestions.has(qId);
        if (isMarked) {
            btnMarkReview.classList.add('active');
            if (markText) markText.textContent = 'Marked';
        } else {
            btnMarkReview.classList.remove('active');
            if (markText) markText.textContent = 'Mark';
        }
    }

    // Navigation: Next & Previous
    function goToNextQuestion() {
        if (currentIndex < activeQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            const answered = Object.keys(userAnswers).length;
            const total = activeQuestions.length;
            const unanswered = total - answered;

            if (currentMode === 'exam') {
                let msg = `You have reached the end of the exam (${answered}/${total} questions answered). Submit now to view your diagnostic report?`;
                if (unanswered > 0) {
                    msg = `You have reached the end of the exam. ${unanswered} question(s) remain unanswered.\nAre you sure you want to submit now?`;
                }
                if (confirm(msg)) {
                    finishExam();
                }
            } else if (currentMode === 'review') {
                if (confirm('You have reached the end of the review. Return to the assessment report?')) {
                    showScreen('results');
                }
            } else { // practice or flashcards
                let msg = `You have reached the end of your practice session! You answered ${answered} of ${total} questions.\nWould you like to finish and view your overall performance review & score report?`;
                if (confirm(msg)) {
                    finishExam();
                }
            }
        }
    }

    function goToPreviousQuestion() {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    }

    // Update Live Score Counter
    function updateScore() {
        if (!scoreDisplay) return;
        let score = 0;
        Object.entries(userAnswers).forEach(([qId, ansIdx]) => {
            const q = allQuestions.find(item => item.id === parseInt(qId, 10));
            if (q && q.correct_option_index === ansIdx) {
                score++;
            }
        });
        scoreDisplay.textContent = score;
    }

    // Navigator Sidebar Rendering
    function renderNavigator() {
        if (!navigatorGrid) return;
        navigatorGrid.innerHTML = '';

        let answeredCount = 0;
        let markedCount = 0;

        activeQuestions.forEach((q, idx) => {
            const bubble = document.createElement('button');
            bubble.className = 'nav-bubble';
            bubble.textContent = idx + 1;
            bubble.setAttribute('type', 'button');
            bubble.setAttribute('title', `Question ${idx + 1}: ${q.concept}`);

            const qId = q.id;
            const isAnswered = userAnswers[qId] !== undefined;
            const isMarked = markedQuestions.has(qId);

            if (isAnswered) {
                answeredCount++;
                bubble.classList.add('answered');

                // In practice or review mode, color green or red
                if (currentMode === 'practice' || currentMode === 'review') {
                    if (userAnswers[qId] === q.correct_option_index) {
                        bubble.classList.add('correct');
                    } else {
                        bubble.classList.add('incorrect');
                    }
                }
            }

            if (isMarked) {
                markedCount++;
                bubble.classList.add('marked');
            }

            if (idx === currentIndex) {
                bubble.classList.add('current');
            }

            bubble.addEventListener('click', () => {
                currentIndex = idx;
                renderQuestion();
            });

            navigatorGrid.appendChild(bubble);
        });

        // Navigator Stats
        if (navCountBadge) navCountBadge.textContent = `${answeredCount} / ${activeQuestions.length}`;
        if (sideStatAnswered) sideStatAnswered.textContent = answeredCount;
        if (sideStatMarked) sideStatMarked.textContent = markedCount;
        if (sideStatRemaining) sideStatRemaining.textContent = activeQuestions.length - answeredCount;
    }

    function updateNavigatorActiveState() {
        document.querySelectorAll('.nav-bubble').forEach((b, idx) => {
            if (idx === currentIndex) b.classList.add('current');
            else b.classList.remove('current');
        });
    }

    // Finish Exam & Generate Detailed Diagnostic Report
    function finishExam() {
        stopTimer();

        let correct = 0;
        let incorrect = 0;
        let scenarioCorrect = 0;
        let scenarioTotal = 0;
        let trickyCorrect = 0;
        let trickyTotal = 0;
        let comparisonCorrect = 0;
        let comparisonTotal = 0;
        let easyCorrect = 0;
        let easyTotal = 0;
        let mediumCorrect = 0;
        let mediumTotal = 0;
        let hardCorrect = 0;
        let hardTotal = 0;

        const topicStats = {};

        activeQuestions.forEach(q => {
            const qId = q.id;
            const chosen = userAnswers[qId];
            const isCorr = chosen === q.correct_option_index;

            // Track topic
            if (!topicStats[q.topic]) {
                topicStats[q.topic] = { total: 0, correct: 0 };
            }
            topicStats[q.topic].total++;

            // Question types
            if (q.question_type === 'Scenario-Based') scenarioTotal++;
            if (q.question_type === 'Tricky') trickyTotal++;
            if (q.question_type === 'Comparison') comparisonTotal++;

            // Difficulty
            if (q.difficulty === 'Easy') easyTotal++;
            if (q.difficulty === 'Medium') mediumTotal++;
            if (q.difficulty === 'Hard') hardTotal++;

            if (isCorr) {
                correct++;
                topicStats[q.topic].correct++;
                if (q.question_type === 'Scenario-Based') scenarioCorrect++;
                if (q.question_type === 'Tricky') trickyCorrect++;
                if (q.question_type === 'Comparison') comparisonCorrect++;

                if (q.difficulty === 'Easy') easyCorrect++;
                if (q.difficulty === 'Medium') mediumCorrect++;
                if (q.difficulty === 'Hard') hardCorrect++;
            } else if (chosen !== undefined) {
                incorrect++;
            }
        });

        const totalQ = activeQuestions.length;
        const accuracy = totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0;

        // Calculate time taken
        const secondsSpent = EXAM_DURATION_SECONDS - examTimeRemaining;
        const mins = Math.floor(secondsSpent / 60);
        const secs = secondsSpent % 60;
        const timeTakenStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        // Populate Results Screen
        if (resultsHeadline) {
            resultsHeadline.textContent = currentMode === 'exam'
                ? 'Networking Placement Diagnostic Report'
                : 'Practice Session Assessment & Review';
        }
        if (resultsSubtext) {
            resultsSubtext.textContent = currentMode === 'exam'
                ? 'Comprehensive score analysis against 2026 MNC technical benchmarks.'
                : 'Overall performance breakdown and question review for your practice session.';
        }
        if (resultsPercentage) resultsPercentage.textContent = `${accuracy}%`;
        if (resultsScoreFraction) resultsScoreFraction.textContent = `${correct} / ${totalQ}`;
        if (resultsCorrectCount) resultsCorrectCount.textContent = correct;
        if (resultsIncorrectCount) resultsIncorrectCount.textContent = incorrect;
        if (resultsTimeTaken) resultsTimeTaken.textContent = timeTakenStr;

        // Placement Readiness Tag
        if (resultsReadinessTag) {
            resultsReadinessTag.className = 'stat-val badge-readiness';
            if (accuracy >= 80) {
                resultsReadinessTag.textContent = 'Placement Ready (Top MNC Tier)';
                resultsReadinessTag.classList.add('ready');
            } else if (accuracy >= 60) {
                resultsReadinessTag.textContent = 'Moderately Prepared (Passing Tier)';
                resultsReadinessTag.classList.add('moderate');
            } else {
                resultsReadinessTag.textContent = 'Needs Revision (Reinforce Core)';
                resultsReadinessTag.classList.add('needs-work');
            }
        }

        // Subcategory counts
        if (statScenarioScore) statScenarioScore.textContent = `${scenarioCorrect} / ${scenarioTotal}`;
        if (statScenarioPercent) statScenarioPercent.textContent = `${scenarioTotal > 0 ? Math.round((scenarioCorrect / scenarioTotal) * 100) : 0}%`;

        if (statTrickyScore) statTrickyScore.textContent = `${trickyCorrect} / ${trickyTotal}`;
        if (statTrickyPercent) statTrickyPercent.textContent = `${trickyTotal > 0 ? Math.round((trickyCorrect / trickyTotal) * 100) : 0}%`;

        if (statComparisonScore) statComparisonScore.textContent = `${comparisonCorrect} / ${comparisonTotal}`;
        if (statComparisonPercent) statComparisonPercent.textContent = `${comparisonTotal > 0 ? Math.round((comparisonCorrect / comparisonTotal) * 100) : 0}%`;

        if (statEasyScore) statEasyScore.textContent = `${easyCorrect} / ${easyTotal}`;
        if (statMediumScore) statMediumScore.textContent = `${mediumCorrect} / ${mediumTotal}`;
        if (statHardScore) statHardScore.textContent = `${hardCorrect} / ${hardTotal}`;

        // Render Topic Performance Bars
        if (topicPerformanceContainer) {
            topicPerformanceContainer.innerHTML = '';
            Object.entries(topicStats).forEach(([topicName, data]) => {
                const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                const item = document.createElement('div');
                item.className = 'topic-perf-item';
                item.innerHTML = `
                    <span style="min-width: 180px; font-weight: 600;">${topicName}</span>
                    <div class="topic-perf-bar-track">
                        <div class="topic-perf-bar-fill" style="width: ${pct}%;"></div>
                    </div>
                    <span style="min-width: 70px; text-align: right; font-weight: 700; font-family: var(--font-mono);">${data.correct}/${data.total} (${pct}%)</span>
                `;
                topicPerformanceContainer.appendChild(item);
            });
        }

        showScreen('results');
    }

    // Run initialization on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
