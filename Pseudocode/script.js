/**
 * MNC Placement Programming Fundamentals, Conditionals and Loops Module
 * PlacementPrep 2026
 */

(function () {
    'use strict';

    const MODULE_ID = 'pseudocode';

    // Application State
    let allQuestions = [];          // 100 questions from questions.js or questions.json
    let activeQuestions = [];       // Filtered active subset
    let currentIndex = 0;           // Index in activeQuestions
    let currentMode = 'practice';   // 'practice' | 'exam' | 'flashcards' | 'review'

    // User Response State
    let userAnswers = {};           // { [questionId]: selectedOptionIndex (0-3) }
    let markedQuestions = new Set();// Set of question IDs bookmarked
    let isAnswerSubmitted = {};     // { [questionId]: boolean } (in practice mode)
    let isCardFlipped = false;

    // Exam Timer State (60 minutes = 3600 seconds)
    const EXAM_DURATION_SECONDS = 60 * 60;
    let examTimeRemaining = EXAM_DURATION_SECONDS;
    let timerInterval = null;
    let examStartTime = null;

    // Filters
    let currentTypeFilter = 'all';
    let currentTopicFilter = 'all';
    let currentDiffFilter = 'all';

    // DOM Elements Cache
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
    const pseudocodeDisplay = document.getElementById('pseudocode-display');
    const optionsContainer = document.getElementById('options-container');

    const flashcardRevealRow = document.getElementById('flashcard-reveal-row');
    const explanationPanel = document.getElementById('explanation-panel');
    const explanationStatusIconBox = document.getElementById('explanation-status-icon-box');
    const explanationStatusIcon = document.getElementById('explanation-status-icon');
    const explanationStatusHeading = document.getElementById('explanation-status-heading');
    const explanationStatusSub = document.getElementById('explanation-status-sub');
    const explanationSummaryText = document.getElementById('explanation-summary-text');
    const explanationTraceBox = document.getElementById('explanation-trace-box');
    const explanationDistractorList = document.getElementById('explanation-distractor-list');
    const explanationTrapText = document.getElementById('explanation-trap-text');
    const explanationTipText = document.getElementById('explanation-tip-text');

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnRetryQ = document.getElementById('btn-retry-q');
    const btnSubmitExam = document.getElementById('btn-submit-exam');

    const navigatorGrid = document.getElementById('navigator-grid');
    const navCountBadge = document.getElementById('nav-count-badge');
    const sideStatAnswered = document.getElementById('side-stat-answered');
    const sideStatMarked = document.getElementById('side-stat-marked');
    const sideStatRemaining = document.getElementById('side-stat-remaining');

    // Diagnostic elements
    const resultsPercentage = document.getElementById('results-percentage');
    const resultsScoreFraction = document.getElementById('results-score-fraction');
    const resultsScoreCircle = document.getElementById('results-score-circle');
    const resultsHeadline = document.getElementById('results-headline');
    const resultsReadinessTag = document.getElementById('results-readiness-tag');
    const resultsCorrectCount = document.getElementById('results-correct-count');
    const resultsIncorrectCount = document.getElementById('results-incorrect-count');
    const resultsUnattemptedCount = document.getElementById('results-unattempted-count');
    const resultsTimeTaken = document.getElementById('results-time-taken');

    // Theme initialization
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 
                           localStorage.getItem('placementprep-theme') || 
                           localStorage.getItem('theme') || 
                           localStorage.getItem('prep_theme') || 
                           'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', nextTheme);
                localStorage.setItem('placementPrep_theme', nextTheme);
                localStorage.setItem('placementprep-theme', nextTheme);
                localStorage.setItem('theme', nextTheme);
                localStorage.setItem('prep_theme', nextTheme);
            });
        }
    }

    // SyncManager Integration - Restore saved answers & bookmarks
    function initSyncManager() {
        if (!window.SyncManager) return;
        const modData = window.SyncManager.getModuleData(MODULE_ID);
        if (modData && modData.answers) {
            for (const [qId, ans] of Object.entries(modData.answers)) {
                if (ans && ans.selected !== undefined) {
                    userAnswers[qId] = ans.selected;
                    isAnswerSubmitted[qId] = true;
                }
            }
        }
        if (modData && Array.isArray(modData.bookmarks)) {
            modData.bookmarks.forEach(id => markedQuestions.add(id));
        }

        // Real-time sync updates
        window.SyncManager.subscribe(() => {
            const fresh = window.SyncManager.getModuleData(MODULE_ID);
            if (fresh && fresh.answers) {
                for (const [qId, ans] of Object.entries(fresh.answers)) {
                    if (ans && ans.selected !== undefined) {
                        userAnswers[qId] = ans.selected;
                        isAnswerSubmitted[qId] = true;
                    }
                }
            }
            if (fresh && Array.isArray(fresh.bookmarks)) {
                fresh.bookmarks.forEach(id => markedQuestions.add(id));
            }
            updateNavigatorGrid();
            updateScoreHeader();
        });
    }

    // Load questions from window.PSEUDOCODE_DATA, window.PSEUDOCODE_QUESTIONS or questions.json fallback
    async function loadQuestionsData() {
        let rawList = null;
        if (window.PSEUDOCODE_DATA && Array.isArray(window.PSEUDOCODE_DATA.questions)) {
            rawList = window.PSEUDOCODE_DATA.questions;
        } else if (window.PSEUDOCODE_QUESTIONS && Array.isArray(window.PSEUDOCODE_QUESTIONS) && window.PSEUDOCODE_QUESTIONS.length > 0) {
            rawList = window.PSEUDOCODE_QUESTIONS;
        } else {
            try {
                const resp = await fetch('questions.json');
                if (!resp.ok) throw new Error('HTTP ' + resp.status);
                const data = await resp.json();
                rawList = Array.isArray(data) ? data : (data.questions || []);
            } catch (err) {
                console.error('Failed to load questions:', err);
                if (pseudocodeDisplay) {
                    pseudocodeDisplay.textContent = '// Error loading questions.json. Please ensure file exists.';
                }
                return;
            }
        }

        const letters = ['A', 'B', 'C', 'D'];
        allQuestions = (rawList || []).map((q, idx) => {
            const letter = q.correct_answer || (Array.isArray(q.options) ? letters[q.correct_option_index] : 'A');
            const optIdx = typeof q.correct_option_index === 'number' ? q.correct_option_index : letters.indexOf(letter);
            return {
                ...q,
                question_text: q.question_text || q.question || '',
                question: q.question || q.question_text || '',
                correct_answer: letter,
                correct_letter: letter,
                correct_option_index: optIdx >= 0 ? optIdx : 0
            };
        });

        initNavigatorGrid();
    }

    // Initialize Navigator Grid (1..100)
    function initNavigatorGrid() {
        if (!navigatorGrid) return;
        navigatorGrid.innerHTML = '';
        const total = allQuestions.length || 100;
        if (navCountBadge) navCountBadge.textContent = total + ' Qs';

        for (let i = 0; i < total; i++) {
            const chip = document.createElement('button');
            chip.className = 'palette-chip';
            chip.textContent = i + 1;
            chip.dataset.index = i;
            chip.addEventListener('click', () => {
                jumpToQuestion(i);
            });
            navigatorGrid.appendChild(chip);
        }
    }

    // Update Navigator Palette states
    function updateNavigatorGrid() {
        if (!navigatorGrid) return;
        const chips = navigatorGrid.querySelectorAll('.palette-chip');
        let answeredCount = 0;
        let markedCount = 0;

        chips.forEach((chip, idx) => {
            const q = activeQuestions[idx] || allQuestions[idx];
            if (!q) return;

            chip.classList.remove('current', 'answered', 'flagged');

            if (idx === currentIndex) {
                chip.classList.add('current');
            }

            const qId = q.id;
            if (userAnswers[qId] !== undefined) {
                chip.classList.add('answered');
                answeredCount++;
            }
            if (markedQuestions.has(qId)) {
                chip.classList.add('flagged');
                markedCount++;
            }
        });

        const totalActive = activeQuestions.length;
        if (sideStatAnswered) sideStatAnswered.textContent = answeredCount;
        if (sideStatMarked) sideStatMarked.textContent = markedCount;
        if (sideStatRemaining) sideStatRemaining.textContent = Math.max(0, totalActive - answeredCount);
    }

    // Switch Screen helper
    function showScreen(screenId) {
        [screenModeSelect, screenQuizWorkspace, screenResults].forEach(screen => {
            if (screen) screen.classList.remove('active');
        });
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Start Mode
    function startMode(mode) {
        currentMode = mode;
        clearInterval(timerInterval);

        // Reset state for new session
        userAnswers = {};
        isAnswerSubmitted = {};
        currentIndex = 0;
        isCardFlipped = false;

        // Apply mode configurations
        if (currentMode === 'practice') {
            headerModeBadge.textContent = 'Practice Mode';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
            btnRetryQ.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            activeQuestions = [...allQuestions];
        } else if (currentMode === 'exam') {
            headerModeBadge.textContent = 'Placement Exam (60m)';
            timerBox.classList.remove('hidden');
            quizFilterBar.classList.add('hidden');
            flashcardRevealRow.classList.add('hidden');
            btnRetryQ.classList.add('hidden');
            btnSubmitExam.classList.remove('hidden');
            activeQuestions = [...allQuestions]; // 100 questions
            startExamTimer();
        } else if (currentMode === 'flashcards') {
            headerModeBadge.textContent = 'Mental Flashcards';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            flashcardRevealRow.classList.remove('hidden');
            btnRetryQ.classList.add('hidden');
            btnSubmitExam.classList.add('hidden');
            activeQuestions = [...allQuestions];
        } else if (currentMode === 'review') {
            headerModeBadge.textContent = 'Exam Solutions Review';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
            btnRetryQ.classList.add('hidden');
            btnSubmitExam.classList.add('hidden');
            activeQuestions = [...allQuestions];
        }

        updateScoreHeader();
        showScreen('screen-quiz-workspace');
        renderQuestion();
    }

    // 60-Minute Countdown Timer
    function startExamTimer() {
        examTimeRemaining = EXAM_DURATION_SECONDS;
        examStartTime = Date.now();
        updateTimerDisplay();

        timerInterval = setInterval(() => {
            examTimeRemaining--;
            updateTimerDisplay();

            if (examTimeRemaining <= 300) { // 5 minutes left
                timerBox.classList.add('warning');
            }

            if (examTimeRemaining <= 0) {
                clearInterval(timerInterval);
                alert('Time expired! Your assessment will now be automatically evaluated.');
                submitExam();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const mins = Math.floor(examTimeRemaining / 60);
        const secs = examTimeRemaining % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Filter by style
    function applyTypeFilter(type) {
        currentTypeFilter = type;
        document.querySelectorAll('[data-filter-type]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filterType === type);
        });
        filterQuestions();
    }

    // Filter by topic
    function applyTopicFilter(topic) {
        currentTopicFilter = topic;
        document.querySelectorAll('[data-filter-topic]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filterTopic === topic);
        });
        filterQuestions();
    }

    // Filter by difficulty
    function applyDiffFilter(diff) {
        currentDiffFilter = diff;
        document.querySelectorAll('[data-filter-diff]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filterDiff === diff);
        });
        filterQuestions();
    }

    function filterQuestions() {
        activeQuestions = allQuestions.filter(q => {
            let qType = (q.question_type || '').toLowerCase();
            let targetType = currentTypeFilter.toLowerCase();
            let matchesType = (currentTypeFilter === 'all') || (qType === targetType);
            if (!matchesType && targetType === 'find_final_value' && qType === 'final_return_value') matchesType = true;
            if (!matchesType && targetType === 'iteration_counting' && (qType === 'call_count' || qType === 'recursion_depth')) matchesType = true;
            if (!matchesType && targetType === 'error_identification' && (qType === 'termination_analysis' || qType === 'infinite_recursion' || qType === 'stack_analysis')) matchesType = true;

            const matchesTopic = currentTopicFilter === 'all' || q.topic === currentTopicFilter;
            let matchesDiff = true;

            if (currentDiffFilter === 'Bookmarked') {
                matchesDiff = markedQuestions.has(q.id);
            } else if (currentDiffFilter !== 'all') {
                matchesDiff = q.difficulty.toLowerCase() === currentDiffFilter.toLowerCase();
            }

            return matchesType && matchesTopic && matchesDiff;
        });

        if (activeQuestions.length === 0) {
            alert('No questions match the selected filter combination.');
            activeQuestions = [...allQuestions];
            currentTypeFilter = 'all';
            currentTopicFilter = 'all';
            currentDiffFilter = 'all';
            document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.toggle('active', b.dataset.filterType === 'all'));
            document.querySelectorAll('[data-filter-topic]').forEach(b => b.classList.toggle('active', b.dataset.filterTopic === 'all'));
            document.querySelectorAll('[data-filter-diff]').forEach(b => b.classList.toggle('active', b.dataset.filterDiff === 'all'));
        }

        currentIndex = 0;
        renderQuestion();
    }

    // Render Current Question
    function renderQuestion() {
        const q = activeQuestions[currentIndex];
        if (!q) return;

        const totalActive = activeQuestions.length;
        const currentNum = currentIndex + 1;

        // Progress bar
        progressLabel.textContent = `Question ${currentNum} of ${totalActive}`;
        const pct = Math.round((currentNum / totalActive) * 100);
        progressPercent.textContent = `${pct}% Complete`;
        progressBarFill.style.width = `${pct}%`;

        // Badges
        badgeQNumber.textContent = q.id || q.question_id || `Q${currentIndex + 1}`;
        badgeQType.textContent = (q.question_type || '').replace(/_/g, ' ');
        badgeQDiff.textContent = q.difficulty;
        badgeQDiff.className = `badge badge-diff-${(q.difficulty || '').toLowerCase().replace(/\s+/g, '_')}`;
        const topicLower = (q.topic || '').toLowerCase();
        const topicClass = topicLower.includes('fundamental') ? 'badge-topic-fundamentals'
            : topicLower.includes('conditional') ? 'badge-topic-conditionals'
            : topicLower.includes('loop') ? 'badge-topic-loops'
            : topicLower.includes('recursion') ? 'badge-topic-recursion'
            : '';
        badgeQTopic.className = `badge badge-topic-tag ${topicClass}`;
        badgeQTopic.textContent = `${q.topic} • ${q.subtopic || ''}`;

        // Source note
        sourceNoteText.textContent = q.source_note || `${q.source_type} Pattern`;

        // Bookmark button
        const isMarked = markedQuestions.has(q.id);
        btnMarkReview.classList.toggle('bookmarked', isMarked);
        markText.textContent = isMarked ? 'Bookmarked' : 'Bookmark';

        // Question text & pseudocode snippet
        questionText.textContent = q.question_text || q.question || '';
        const snippet = q.code || q.pseudocode || '';
        if (snippet.trim()) {
            pseudocodeDisplay.parentElement.classList.remove('hidden');
            pseudocodeDisplay.textContent = snippet;
        } else {
            pseudocodeDisplay.parentElement.classList.add('hidden');
        }

        // Buttons state
        btnPrev.disabled = (currentIndex === 0);
        btnNext.disabled = (currentIndex === totalActive - 1);

        // Flashcard mode handling
        if (currentMode === 'flashcards' && !isCardFlipped) {
            optionsContainer.classList.add('hidden');
            explanationPanel.classList.add('hidden');
            flashcardRevealRow.classList.remove('hidden');
        } else {
            optionsContainer.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
            renderOptions(q);
        }

        updateNavigatorGrid();
    }

    // Render Options
    function renderOptions(q) {
        optionsContainer.innerHTML = '';
        const isExam = (currentMode === 'exam');
        const isReview = (currentMode === 'review');
        const selectedOpt = userAnswers[q.id];
        const isSubmitted = isAnswerSubmitted[q.id] || isReview;

        const letters = ['A', 'B', 'C', 'D'];

        const optEntries = Array.isArray(q.options)
            ? q.options.map((optText, optIdx) => ({ letter: letters[optIdx], text: optText, idx: optIdx }))
            : letters.map((l, optIdx) => ({ letter: l, text: q.options[l] || '', idx: optIdx }));

        optEntries.forEach(({ letter, text, idx }) => {
            const optBtn = document.createElement('button');
            optBtn.className = 'option-btn';

            if (selectedOpt === idx) {
                optBtn.classList.add('selected');
            }

            // In practice mode (after submit) or review mode, show correct/wrong highlighting
            if (isSubmitted && !isExam) {
                if (idx === q.correct_option_index) {
                    optBtn.classList.add('correct');
                } else if (selectedOpt === idx) {
                    optBtn.classList.add('wrong');
                }
            }

            optBtn.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${escapeHtml(text)}</span>
            `;

            optBtn.addEventListener('click', () => {
                handleOptionSelect(q, idx);
            });

            optionsContainer.appendChild(optBtn);
        });

        // Explanation panel visibility
        if ((isSubmitted && !isExam) || isReview) {
            showExplanation(q, selectedOpt);
        } else {
            explanationPanel.classList.add('hidden');
        }
    }

    // Option Selection Handler
    function handleOptionSelect(q, optIdx) {
        if (currentMode === 'review') return; // Read-only in review

        userAnswers[q.id] = optIdx;

        if (currentMode === 'practice') {
            isAnswerSubmitted[q.id] = true;
            const isCorrect = (optIdx === q.correct_option_index);
            if (window.SyncManager) {
                window.SyncManager.recordAnswer(MODULE_ID, q.id, { selected: optIdx, isCorrect: isCorrect });
            }
            updateScoreHeader();
            renderQuestion();
        } else if (currentMode === 'exam') {
            // Instant selection in exam without showing explanation
            renderQuestion();
        }
    }

    // Flip Flashcard
    function flipFlashcard() {
        isCardFlipped = true;
        const q = activeQuestions[currentIndex];
        optionsContainer.classList.remove('hidden');
        flashcardRevealRow.classList.add('hidden');
        renderOptions(q);
        showExplanation(q, q.correct_option_index);
    }

    // Show Explanation
    function showExplanation(q, selectedOpt) {
        explanationPanel.classList.remove('hidden');

        const isCorrect = (selectedOpt === q.correct_option_index);
        if (isCorrect) {
            explanationStatusIconBox.className = 'exp-status-icon correct';
            explanationStatusIcon.textContent = '✓';
            explanationStatusHeading.textContent = 'Correct Answer!';
            explanationStatusSub.textContent = 'Variable states & logic trace match placement standards.';
        } else {
            explanationStatusIconBox.className = 'exp-status-icon wrong';
            explanationStatusIcon.textContent = '✕';
            explanationStatusHeading.textContent = 'Incorrect Choice';
            explanationStatusSub.textContent = `Correct option is ${q.correct_letter || ['A', 'B', 'C', 'D'][q.correct_option_index]} (${q.correct_answer}).`;
        }

        explanationSummaryText.textContent = q.explanation;
        explanationTraceBox.textContent = q.trace || q.explanation;

        // Distractor analysis
        explanationDistractorList.innerHTML = '';
        if (q.why_other_options_are_wrong) {
            ['A', 'B', 'C', 'D'].forEach(letter => {
                const reason = q.why_other_options_are_wrong[letter];
                if (reason) {
                    const li = document.createElement('li');
                    li.className = 'distractor-item';
                    li.innerHTML = `<strong>Option ${letter}:</strong> ${escapeHtml(reason)}`;
                    explanationDistractorList.appendChild(li);
                }
            });
        }

        explanationTrapText.textContent = q.placement_tip || 'Verify boundary conditions, step size, and operator precedence.';
        explanationTipText.textContent = q.placement_tip || 'Step through variable reassignments on a scratchpad during assessments.';
    }

    // Retrying current question (Practice Mode)
    function retryCurrentQuestion() {
        const q = activeQuestions[currentIndex];
        if (!q) return;
        delete userAnswers[q.id];
        delete isAnswerSubmitted[q.id];
        updateScoreHeader();
        renderQuestion();
    }

    // Navigation: Next / Previous / Jump
    function nextQuestion() {
        if (currentIndex < activeQuestions.length - 1) {
            currentIndex++;
            isCardFlipped = false;
            renderQuestion();
        }
    }

    function prevQuestion() {
        if (currentIndex > 0) {
            currentIndex--;
            isCardFlipped = false;
            renderQuestion();
        }
    }

    function jumpToQuestion(index) {
        if (index >= 0 && index < activeQuestions.length) {
            currentIndex = index;
            isCardFlipped = false;
            renderQuestion();
        }
    }

    // Bookmark Toggle
    function toggleBookmark() {
        const q = activeQuestions[currentIndex];
        if (!q) return;

        if (markedQuestions.has(q.id)) {
            markedQuestions.delete(q.id);
        } else {
            markedQuestions.add(q.id);
        }

        if (window.SyncManager) {
            window.SyncManager.toggleBookmark(MODULE_ID, q.id);
        }

        renderQuestion();
    }

    // Update Score in Header
    function updateScoreHeader() {
        let correct = 0;
        allQuestions.forEach(q => {
            if (userAnswers[q.id] === q.correct_option_index) {
                correct++;
            }
        });
        if (scoreDisplay) scoreDisplay.textContent = correct;
    }

    // Submit Exam & Generate Diagnostic Breakdown
    function submitExam() {
        clearInterval(timerInterval);

        const totalQs = allQuestions.length;
        let correctCount = 0;
        let incorrectCount = 0;
        let unattemptedCount = 0;

        // Categorized stats by Core Topic
        const topicStats = {
            'Programming Fundamentals': { total: 0, correct: 0 },
            'Conditional Statements': { total: 0, correct: 0 },
            'Loops': { total: 0, correct: 0 },
            'Recursion': { total: 0, correct: 0 }
        };

        // Categorized stats by Assessment Style
        const styleStats = {
            'output_tracing': { total: 0, correct: 0 },
            'logic_analysis': { total: 0, correct: 0 },
            'scenario_based': { total: 0, correct: 0 },
            'iteration_counting': { total: 0, correct: 0 },
            'find_final_value': { total: 0, correct: 0 },
            'error_identification': { total: 0, correct: 0 },
            'concept_application': { total: 0, correct: 0 },
            'direct_conceptual': { total: 0, correct: 0 }
        };

        const diffStats = {
            'Medium': { total: 0, correct: 0 },
            'Hard': { total: 0, correct: 0 },
            'Very Hard': { total: 0, correct: 0 }
        };

        allQuestions.forEach(q => {
            const userAns = userAnswers[q.id];
            const isCorrect = (userAns === q.correct_option_index);

            if (userAns === undefined) {
                unattemptedCount++;
            } else if (isCorrect) {
                correctCount++;
            } else {
                incorrectCount++;
            }

            // Topic stats
            if (topicStats[q.topic]) {
                topicStats[q.topic].total++;
                if (isCorrect) topicStats[q.topic].correct++;
            }

            // Style stats (normalize recursion types to 8 primary styles)
            let qType = (q.question_type || '').toLowerCase();
            if (qType === 'final_return_value') qType = 'find_final_value';
            if (qType === 'call_count' || qType === 'recursion_depth') qType = 'iteration_counting';
            if (qType === 'termination_analysis' || qType === 'infinite_recursion' || qType === 'stack_analysis') qType = 'error_identification';

            if (styleStats[qType]) {
                styleStats[qType].total++;
                if (isCorrect) styleStats[qType].correct++;
            }

            // Difficulty stats
            const diff = q.difficulty;
            if (diffStats[diff]) {
                diffStats[diff].total++;
                if (isCorrect) diffStats[diff].correct++;
            }
        });

        const scorePercent = Math.round((correctCount / totalQs) * 100);

        // Update Results UI
        resultsPercentage.textContent = `${scorePercent}%`;
        resultsScoreFraction.textContent = `${correctCount}/${totalQs}`;
        resultsScoreCircle.style.setProperty('--percent', scorePercent);

        resultsCorrectCount.textContent = correctCount;
        resultsIncorrectCount.textContent = incorrectCount;
        resultsUnattemptedCount.textContent = unattemptedCount;

        // Time calculation
        const timeSpent = EXAM_DURATION_SECONDS - examTimeRemaining;
        const mins = Math.floor(timeSpent / 60);
        const secs = timeSpent % 60;
        const formattedTime = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        resultsTimeTaken.textContent = formattedTime;

        // Record exam result in SyncManager
        if (window.SyncManager) {
            window.SyncManager.recordExamResult(MODULE_ID, {
                score: correctCount,
                total: totalQs,
                accuracy: scorePercent,
                timeTaken: formattedTime
            });
        }

        // Readiness Tag
        if (scorePercent >= 75) {
            resultsHeadline.textContent = 'Outstanding! Placement Assessment Cleared';
            resultsReadinessTag.textContent = 'Top MNC Tier-1 Placement Ready';
            resultsReadinessTag.style.background = 'var(--accent-emerald-light)';
            resultsReadinessTag.style.color = 'var(--accent-emerald)';
        } else if (scorePercent >= 50) {
            resultsHeadline.textContent = 'Good Effort! Solid Foundation';
            resultsReadinessTag.textContent = 'Review Tricky Boundary & Increment Traps';
            resultsReadinessTag.style.background = 'var(--accent-amber-light)';
            resultsReadinessTag.style.color = 'var(--accent-amber)';
        } else {
            resultsHeadline.textContent = 'Needs Review on Operator & Loop Logic';
            resultsReadinessTag.textContent = 'Practice Trace Tables & Type Conversions';
            resultsReadinessTag.style.background = 'var(--accent-rose-light)';
            resultsReadinessTag.style.color = 'var(--accent-rose)';
        }

        // Fill Topic diagnostic bars
        updateBreakdownRow('stat-fund-score', 'bar-fund', topicStats['Programming Fundamentals']);
        updateBreakdownRow('stat-cond-score', 'bar-cond', topicStats['Conditional Statements']);
        updateBreakdownRow('stat-loop-score', 'bar-loop', topicStats['Loops']);
        updateBreakdownRow('stat-rec-score', 'bar-rec', topicStats['Recursion']);

        // Fill Style diagnostic bars
        updateBreakdownRow('stat-output-score', 'bar-output-pred', styleStats['output_tracing']);
        updateBreakdownRow('stat-logic-score', 'bar-logic-analysis', styleStats['logic_analysis']);
        updateBreakdownRow('stat-scenario-score', 'bar-scenario', styleStats['scenario_based']);
        updateBreakdownRow('stat-iter-score', 'bar-iter-counting', styleStats['iteration_counting']);
        updateBreakdownRow('stat-value-score', 'bar-final-value', styleStats['find_final_value']);
        updateBreakdownRow('stat-error-score', 'bar-error', styleStats['error_identification']);
        updateBreakdownRow('stat-app-score', 'bar-app', styleStats['concept_application']);
        updateBreakdownRow('stat-concept-score', 'bar-concept', styleStats['direct_conceptual']);

        // Fill difficulty bars
        updateBreakdownRow('stat-medium-score', 'bar-medium', diffStats['Medium']);
        updateBreakdownRow('stat-hard-score', 'bar-hard', diffStats['Hard']);
        updateBreakdownRow('stat-veryhard-score', 'bar-veryhard', diffStats['Very Hard']);

        showScreen('screen-results');
    }

    function updateBreakdownRow(labelId, barId, statObj) {
        const label = document.getElementById(labelId);
        const bar = document.getElementById(barId);
        if (!label || !bar) return;

        const total = statObj.total || 1;
        const correct = statObj.correct || 0;
        const pct = Math.round((correct / total) * 100);

        label.textContent = `${correct} / ${statObj.total} (${pct}%)`;
        bar.style.width = `${pct}%`;
    }

    // Review submitted exam
    function reviewSubmittedExam() {
        startMode('review');
    }

    // Helper: Escape HTML
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // Expose public API for HTML onclick events
    window.PseudocodeApp = {
        startMode,
        showModeSelect: () => showScreen('screen-mode-select'),
        applyTypeFilter,
        applyTopicFilter,
        applyDiffFilter,
        prevQuestion,
        nextQuestion,
        retryCurrentQuestion,
        toggleBookmark,
        flipFlashcard,
        submitExam,
        reviewSubmittedExam
    };

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initSyncManager();
        loadQuestionsData();
    });

})();
