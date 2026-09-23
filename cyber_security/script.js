// Cyber Security Module - Application Logic & State Management
(function () {
    'use strict';

    const MODULE_ID = 'cyber_security';

    // Application State
    let allQuestions = [];       // Master list of 100 questions
    let activeQuestions = [];    // Filtered / shuffled active pool
    let currentIndex = 0;        // Current question index in active pool
    let currentMode = 'practice';// 'practice' | 'exam' | 'flashcards' | 'review'
    
    // User response state: keyed by question ID
    let userAnswers = {};        // { [qId]: 'A' | 'B' | 'C' | 'D' }
    let markedQuestions = new Set(); // Set of marked question IDs
    let isAnswerSubmitted = {};  // { [qId]: boolean }

    // Exam Timer State
    const EXAM_DURATION_SECONDS = 45 * 60; // 45 minutes
    let examTimeRemaining = EXAM_DURATION_SECONDS;
    let timerInterval = null;
    let examStartTime = null;
    let examEndTime = null;

    // Filters for Practice Mode
    let currentTopicFilter = 'all';
    let currentDiffFilter = 'all';
    let currentTypeFilter = 'all';

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
    const filterTopic = document.getElementById('filter-topic');
    const filterDiff = document.getElementById('filter-diff');
    const filterType = document.getElementById('filter-type');
    const btnChangeMode = document.getElementById('btn-change-mode');

    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressLabel = document.getElementById('question-progress-label');
    const progressPercent = document.getElementById('question-progress-percent');

    const badgeQNumber = document.getElementById('badge-q-number');
    const badgeQTopic = document.getElementById('badge-q-topic');
    const badgeQDiff = document.getElementById('badge-q-diff');
    const badgeQType = document.getElementById('badge-q-type');
    const badgeSourceStatus = document.getElementById('badge-source-status');
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
    const explanationRealWorld = document.getElementById('explanation-real-world');

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSubmitExam = document.getElementById('btn-submit-exam');

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
    const statNetScore = document.getElementById('stat-net-score');
    const statNetPercent = document.getElementById('stat-net-percent');
    const statCryptoScore = document.getElementById('stat-crypto-score');
    const statCryptoPercent = document.getElementById('stat-crypto-percent');
    const statAttacksScore = document.getElementById('stat-attacks-score');
    const statAttacksPercent = document.getElementById('stat-attacks-percent');
    const statDevicesScore = document.getElementById('stat-devices-score');
    const statDevicesPercent = document.getElementById('stat-devices-percent');

    const statMediumScore = document.getElementById('stat-medium-score');
    const statMedhardScore = document.getElementById('stat-medhard-score');
    const statHardScore = document.getElementById('stat-hard-score');
    const statScenarioScore = document.getElementById('stat-scenario-score');

    const btnReviewAnswers = document.getElementById('btn-review-answers');
    const btnRetakeExam = document.getElementById('btn-retake-exam');
    const btnBackHome = document.getElementById('btn-back-home');

    // Initialization
    function init() {
        initTheme();
        loadQuestions();
        bindEvents();
        initSyncManager();
    }

    // Theme Setup
    function initTheme() {
        const savedTheme = localStorage.getItem('placementprep-theme') || 
                           localStorage.getItem('placementPrep_theme') || 
                           localStorage.getItem('theme') || 
                           localStorage.getItem('prep_theme') || 
                           'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('placementprep-theme', next);
            localStorage.setItem('placementPrep_theme', next);
            localStorage.setItem('theme', next);
            localStorage.setItem('prep_theme', next);
        });
    }

    // Initialize SyncManager
    function initSyncManager() {
        if (window.SyncManager) {
            const modData = window.SyncManager.getModuleData(MODULE_ID);
            if (modData && modData.answers) {
                // Restore saved practice answers if present
                for (const [qId, ans] of Object.entries(modData.answers)) {
                    if (ans && ans.selected) {
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
                        if (ans && ans.selected) {
                            userAnswers[qId] = ans.selected;
                            isAnswerSubmitted[qId] = true;
                        }
                    }
                }
                if (fresh && Array.isArray(fresh.bookmarks)) {
                    fresh.bookmarks.forEach(id => markedQuestions.add(id));
                }
                if (currentMode === 'practice' || currentMode === 'flashcards') {
                    renderQuestion();
                }
            });
        }
    }

    // Load Questions from embedded questions.js or fallback fetch
    function loadQuestions() {
        if (typeof questionsData !== 'undefined' && Array.isArray(questionsData) && questionsData.length > 0) {
            allQuestions = questionsData;
            console.log(`Loaded ${allQuestions.length} Cyber Security questions from questions.js`);
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
        // Mode Selection Cards
        document.querySelectorAll('.start-mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.getAttribute('data-mode');
                startMode(mode);
            });
        });

        // Filter dropdowns
        if (filterTopic) filterTopic.addEventListener('change', handleFiltersChange);
        if (filterDiff) filterDiff.addEventListener('change', handleFiltersChange);
        if (filterType) filterType.addEventListener('change', handleFiltersChange);

        // Navigation
        btnPrev.addEventListener('click', goToPreviousQuestion);
        btnNext.addEventListener('click', goToNextQuestion);
        btnSubmitExam.addEventListener('click', promptSubmitExam);
        btnChangeMode.addEventListener('click', returnToModeSelect);

        // Mark for Review
        btnMarkReview.addEventListener('click', toggleMarkCurrentQuestion);

        // Flashcard Flip
        btnFlipCard.addEventListener('click', flipFlashcard);

        // Results Actions
        btnReviewAnswers.addEventListener('click', startReviewMode);
        btnRetakeExam.addEventListener('click', () => startMode('exam'));
        btnBackHome.addEventListener('click', returnToModeSelect);

        // Global Keyboard Shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }

    // Start Mode
    function startMode(mode) {
        currentMode = mode;
        currentIndex = 0;

        // Reset state for new exams
        if (mode === 'exam') {
            userAnswers = {};
            isAnswerSubmitted = {};
            markedQuestions.clear();
            examStartTime = Date.now();
            examTimeRemaining = EXAM_DURATION_SECONDS;
            startExamTimer();
            // Shuffle a 60-question mock exam from allQuestions
            activeQuestions = shuffleArray([...allQuestions]).slice(0, 60);
        } else {
            stopExamTimer();
            activeQuestions = [...allQuestions];
            applyFilters();
        }

        updateHeaderUI();
        showScreen('quiz');
        renderQuestion();
        buildNavigator();
        updateScoreDisplay();
    }

    // Header UI updates
    function updateHeaderUI() {
        if (currentMode === 'practice') {
            headerModeBadge.textContent = 'Practice Mode';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            flashcardRevealRow.classList.add('hidden');
        } else if (currentMode === 'exam') {
            headerModeBadge.textContent = 'MNC Exam Mode';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.remove('hidden');
            quizFilterBar.classList.add('hidden');
            btnSubmitExam.classList.remove('hidden');
            flashcardRevealRow.classList.add('hidden');
        } else if (currentMode === 'flashcards') {
            headerModeBadge.textContent = 'Flashcard Mode';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.remove('hidden');
            btnSubmitExam.classList.add('hidden');
            flashcardRevealRow.classList.remove('hidden');
        } else if (currentMode === 'review') {
            headerModeBadge.textContent = 'Exam Review';
            headerModeBadge.className = 'badge mode-tag';
            timerBox.classList.add('hidden');
            quizFilterBar.classList.add('hidden');
            btnSubmitExam.classList.add('hidden');
            flashcardRevealRow.classList.add('hidden');
        }
    }

    // Filter Logic
    function handleFiltersChange() {
        currentTopicFilter = filterTopic.value;
        currentDiffFilter = filterDiff.value;
        currentTypeFilter = filterType.value;
        applyFilters();
        currentIndex = 0;
        renderQuestion();
        buildNavigator();
    }

    function applyFilters() {
        if (currentMode === 'exam') return;

        activeQuestions = allQuestions.filter(q => {
            const matchesTopic = (currentTopicFilter === 'all') || (q.topic === currentTopicFilter);
            const matchesDiff = (currentDiffFilter === 'all') || (q.difficulty === currentDiffFilter);
            const matchesType = (currentTypeFilter === 'all') || (q.question_type === currentTypeFilter);
            return matchesTopic && matchesDiff && matchesType;
        });

        if (activeQuestions.length === 0) {
            activeQuestions = [...allQuestions];
            alert('No questions matched the selected combination of filters. Resetting to all questions.');
            if (filterTopic) filterTopic.value = 'all';
            if (filterDiff) filterDiff.value = 'all';
            if (filterType) filterType.value = 'all';
            currentTopicFilter = 'all';
            currentDiffFilter = 'all';
            currentTypeFilter = 'all';
        }
    }

    // Render Current Question
    function renderQuestion() {
        if (activeQuestions.length === 0) return;

        const q = activeQuestions[currentIndex];
        const total = activeQuestions.length;

        // Progress Bar
        const progressVal = Math.round(((currentIndex + 1) / total) * 100);
        progressBarFill.style.width = `${progressVal}%`;
        progressLabel.textContent = `Question ${currentIndex + 1} of ${total}`;
        progressPercent.textContent = `${progressVal}% Completed`;

        // Badges
        badgeQNumber.textContent = `Q${q.id}`;
        badgeQTopic.textContent = q.topic;
        badgeQDiff.textContent = q.difficulty;
        badgeQDiff.className = `badge badge-diff ${q.difficulty.toLowerCase().replace('-', '')}`;
        badgeQType.textContent = q.question_type;
        badgeSourceStatus.textContent = q.source_status || 'PATTERN-BASED';

        // Target Companies Pills
        companiesPillList.innerHTML = '';
        const companies = q.company_pattern || ['Generic MNC'];
        companies.forEach(comp => {
            const span = document.createElement('span');
            span.className = 'company-pill';
            span.textContent = comp;
            companiesPillList.appendChild(span);
        });

        // Mark Button
        if (markedQuestions.has(q.id)) {
            btnMarkReview.classList.add('marked');
            markText.textContent = 'Marked';
        } else {
            btnMarkReview.classList.remove('marked');
            markText.textContent = 'Mark';
        }

        // Question Text
        questionText.textContent = q.question;

        // Render Options
        optionsContainer.innerHTML = '';
        const hasAnswered = isAnswerSubmitted[q.id] || false;
        const selectedKey = userAnswers[q.id];

        ['A', 'B', 'C', 'D'].forEach(letter => {
            const optText = q.options[letter];
            if (!optText) return;

            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.setAttribute('data-key', letter);

            // Structure
            const letterBox = document.createElement('span');
            letterBox.className = 'option-letter';
            letterBox.textContent = letter;

            const textBox = document.createElement('span');
            textBox.className = 'option-text';
            textBox.textContent = optText;

            btn.appendChild(letterBox);
            btn.appendChild(textBox);

            // States
            if (currentMode === 'practice' || currentMode === 'review' || currentMode === 'flashcards') {
                if (hasAnswered) {
                    btn.disabled = true;
                    if (letter === q.correct_answer) {
                        btn.classList.add('correct');
                    } else if (letter === selectedKey) {
                        btn.classList.add('incorrect');
                    }
                } else if (selectedKey === letter) {
                    btn.classList.add('selected');
                }
            } else if (currentMode === 'exam') {
                if (selectedKey === letter) {
                    btn.classList.add('selected');
                }
            }

            btn.addEventListener('click', () => selectOption(letter));
            optionsContainer.appendChild(btn);
        });

        // Flashcards mode
        if (currentMode === 'flashcards') {
            if (hasAnswered) {
                btnFlipCard.textContent = 'Explanation Revealed (Press Space to Toggle)';
            } else {
                btnFlipCard.textContent = 'Reveal Answer & Explanation (Press Space)';
            }
        }

        // Render Explanation Panel
        if ((currentMode === 'practice' || currentMode === 'review' || currentMode === 'flashcards') && hasAnswered) {
            renderExplanation(q, selectedKey || q.correct_answer);
            explanationPanel.classList.remove('hidden');
        } else {
            explanationPanel.classList.add('hidden');
        }

        // Footer buttons state
        btnPrev.disabled = (currentIndex === 0);
        btnNext.disabled = (currentIndex === total - 1);

        // Update active highlight in navigator
        updateNavigatorActive();
        updateScoreDisplay();
    }

    // Select Option
    function selectOption(letter) {
        const q = activeQuestions[currentIndex];

        if (currentMode === 'practice') {
            if (isAnswerSubmitted[q.id]) return; // Already answered

            userAnswers[q.id] = letter;
            isAnswerSubmitted[q.id] = true;

            const isCorrect = (letter === q.correct_answer);

            // Record to SyncManager if present
            if (window.SyncManager) {
                window.SyncManager.recordAnswer(MODULE_ID, q.id, { selected: letter, isCorrect: isCorrect });
            }

            renderQuestion();
            updateNavigatorState(q.id);
        } else if (currentMode === 'exam') {
            userAnswers[q.id] = letter;
            isAnswerSubmitted[q.id] = true;
            renderQuestion();
            updateNavigatorState(q.id);
        } else if (currentMode === 'flashcards') {
            if (isAnswerSubmitted[q.id]) return; // Already answered

            userAnswers[q.id] = letter;
            isAnswerSubmitted[q.id] = true;

            const isCorrect = (letter === q.correct_answer);

            // Record to SyncManager if present
            if (window.SyncManager) {
                window.SyncManager.recordAnswer(MODULE_ID, q.id, { selected: letter, isCorrect: isCorrect });
            }

            renderQuestion();
            updateNavigatorState(q.id);
        }
    }

    // Render Detailed Explanation
    function renderExplanation(q, selectedKey) {
        const isCorrect = (selectedKey === q.correct_answer);

        if (isCorrect) {
            explanationStatusIcon.textContent = '✓';
            explanationStatusIcon.className = 'status-indicator-icon correct';
            explanationStatusHeading.textContent = 'Correct Answer!';
            explanationStatusSub.textContent = `Accurately identified ${q.subtopic}.`;
        } else {
            explanationStatusIcon.textContent = '✕';
            explanationStatusIcon.className = 'status-indicator-icon incorrect';
            explanationStatusHeading.textContent = `Incorrect (Correct was Option ${q.correct_answer})`;
            explanationStatusSub.textContent = `Carefully review the distractor breakdown below:`;
        }

        explanationSummaryText.textContent = q.explanation;
        explanationWhyCorrect.textContent = q.options[q.correct_answer] + ' — ' + (q.why_other_options_are_wrong[q.correct_answer] || q.explanation);

        // Distractor analysis for all 4 options
        explanationWhyOthers.innerHTML = '';
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const item = document.createElement('div');
            item.className = 'distractor-item';
            const reason = q.why_other_options_are_wrong[opt] || 'N/A';
            item.innerHTML = `<strong>Option [${opt}]:</strong> ${reason}`;
            explanationWhyOthers.appendChild(item);
        });

        // Real-world practical application
        explanationRealWorld.textContent = q.real_world_application || 'Standard enterprise defense protocol.';
    }

    // Flashcard Flip
    function flipFlashcard() {
        const q = activeQuestions[currentIndex];
        if (!q) return;

        if (!isAnswerSubmitted[q.id]) {
            isAnswerSubmitted[q.id] = true;
            renderQuestion();
            updateNavigatorState(q.id);
        } else {
            // Already submitted: toggle explanation panel visibility
            if (explanationPanel.classList.contains('hidden')) {
                explanationPanel.classList.remove('hidden');
                btnFlipCard.textContent = 'Explanation Revealed (Press Space to Hide)';
            } else {
                explanationPanel.classList.add('hidden');
                btnFlipCard.textContent = 'Show Explanation (Press Space to Show)';
            }
        }
    }

    // Build Navigator Grid
    function buildNavigator() {
        navigatorGrid.innerHTML = '';
        activeQuestions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.className = 'nav-grid-item';
            btn.textContent = idx + 1;
            btn.setAttribute('data-idx', idx);
            btn.setAttribute('data-qid', q.id);

            btn.addEventListener('click', () => {
                currentIndex = idx;
                renderQuestion();
            });

            navigatorGrid.appendChild(btn);
        });

        updateNavigatorState();
    }

    // Update Navigator Styles
    function updateNavigatorState(updatedQId) {
        let answeredCount = 0;
        let markedCount = 0;

        activeQuestions.forEach((q, idx) => {
            const btn = navigatorGrid.children[idx];
            if (!btn) return;

            btn.className = 'nav-grid-item';

            if (idx === currentIndex) {
                btn.classList.add('current');
            }

            if (isAnswerSubmitted[q.id]) {
                btn.classList.add('answered');
                answeredCount++;

                if (currentMode === 'review') {
                    if (userAnswers[q.id] === q.correct_answer) {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('incorrect');
                    }
                }
            }

            if (markedQuestions.has(q.id)) {
                btn.classList.add('marked');
                markedCount++;
            }
        });

        navCountBadge.textContent = `${answeredCount} / ${activeQuestions.length}`;
        sideStatAnswered.textContent = answeredCount;
        sideStatMarked.textContent = markedCount;
        sideStatRemaining.textContent = activeQuestions.length - answeredCount;
    }

    function updateNavigatorActive() {
        Array.from(navigatorGrid.children).forEach((btn, idx) => {
            if (idx === currentIndex) {
                btn.classList.add('current');
                btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                btn.classList.remove('current');
            }
        });
    }

    // Toggle Bookmark
    function toggleMarkCurrentQuestion() {
        const q = activeQuestions[currentIndex];
        if (markedQuestions.has(q.id)) {
            markedQuestions.delete(q.id);
        } else {
            markedQuestions.add(q.id);
        }

        if (window.SyncManager) {
            window.SyncManager.toggleBookmark(MODULE_ID, q.id);
        }

        renderQuestion();
        updateNavigatorState();
    }

    // Previous / Next Navigation
    function goToPreviousQuestion() {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    }

    function goToNextQuestion() {
        if (currentIndex < activeQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    }

    // Exam Timer
    function startExamTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            examTimeRemaining--;
            if (examTimeRemaining <= 0) {
                clearInterval(timerInterval);
                alert('Time expired! Your exam will now be submitted automatically.');
                submitExam();
            } else {
                updateTimerDisplay();
            }
        }, 1000);
        updateTimerDisplay();
    }

    function stopExamTimer() {
        clearInterval(timerInterval);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(examTimeRemaining / 60);
        const seconds = examTimeRemaining % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Submit Exam
    function promptSubmitExam() {
        const total = activeQuestions.length;
        const answered = Object.keys(userAnswers).length;
        const unanswered = total - answered;

        let msg = `You have answered ${answered} of ${total} questions.`;
        if (unanswered > 0) {
            msg += `\nWarning: ${unanswered} question(s) remain unanswered.`;
        }
        msg += '\nAre you sure you want to finish and submit the exam?';

        if (confirm(msg)) {
            submitExam();
        }
    }

    function submitExam() {
        stopExamTimer();
        examEndTime = Date.now();

        // Calculate Scores
        let correctCount = 0;
        let netScore = 0, netTotal = 0;
        let cryptoScore = 0, cryptoTotal = 0;
        let attacksScore = 0, attacksTotal = 0;
        let devicesScore = 0, devicesTotal = 0;

        let medScore = 0, medTotal = 0;
        let medhardScore = 0, medhardTotal = 0;
        let hardScore = 0, hardTotal = 0;
        let scenarioScore = 0, scenarioTotal = 0;

        activeQuestions.forEach(q => {
            const isCorrect = (userAnswers[q.id] === q.correct_answer);
            if (isCorrect) correctCount++;

            // Domain breakdown
            if (q.topic === 'Network Security') { netTotal++; if (isCorrect) netScore++; }
            else if (q.topic === 'Cryptography') { cryptoTotal++; if (isCorrect) cryptoScore++; }
            else if (q.topic === 'Cyber Attacks') { attacksTotal++; if (isCorrect) attacksScore++; }
            else if (q.topic === 'Firewalls & Security Devices') { devicesTotal++; if (isCorrect) devicesScore++; }

            // Difficulty breakdown
            if (q.difficulty === 'Medium') { medTotal++; if (isCorrect) medScore++; }
            else if (q.difficulty === 'Medium-Hard') { medhardTotal++; if (isCorrect) medhardScore++; }
            else if (q.difficulty === 'Hard') { hardTotal++; if (isCorrect) hardScore++; }

            // Type breakdown
            if (q.question_type === 'Scenario-Based') { scenarioTotal++; if (isCorrect) scenarioScore++; }
        });

        const totalQ = activeQuestions.length;
        const pct = Math.round((correctCount / totalQ) * 100);

        // Populate Results Screen
        resultsPercentage.textContent = `${pct}%`;
        resultsScoreFraction.textContent = `${correctCount} / ${totalQ}`;

        const elapsedSeconds = Math.floor(((examEndTime || Date.now()) - (examStartTime || Date.now())) / 1000);
        const elMin = Math.floor(elapsedSeconds / 60);
        const elSec = elapsedSeconds % 60;
        resultsTimeTaken.textContent = `${String(elMin).padStart(2, '0')}:${String(elSec).padStart(2, '0')}`;

        // Readiness Verdict
        if (pct >= 85) {
            resultsReadinessTag.textContent = 'Top MNC Tier-1 Ready (Distinction)';
            resultsReadinessTag.style.background = 'var(--success-bg)';
            resultsReadinessTag.style.color = 'var(--success-text)';
        } else if (pct >= 70) {
            resultsReadinessTag.textContent = 'Placement Competitive (Solid Pass)';
            resultsReadinessTag.style.background = 'var(--accent-cyber-light)';
            resultsReadinessTag.style.color = 'var(--accent-cyber)';
        } else {
            resultsReadinessTag.textContent = 'Needs Deep Revision (Below Cutoff)';
            resultsReadinessTag.style.background = 'var(--error-bg)';
            resultsReadinessTag.style.color = 'var(--error-text)';
        }

        // Domain breakdown DOM
        statNetScore.textContent = `${netScore} / ${netTotal}`;
        statNetPercent.textContent = netTotal > 0 ? `${Math.round((netScore/netTotal)*100)}%` : '0%';

        statCryptoScore.textContent = `${cryptoScore} / ${cryptoTotal}`;
        statCryptoPercent.textContent = cryptoTotal > 0 ? `${Math.round((cryptoScore/cryptoTotal)*100)}%` : '0%';

        statAttacksScore.textContent = `${attacksScore} / ${attacksTotal}`;
        statAttacksPercent.textContent = attacksTotal > 0 ? `${Math.round((attacksScore/attacksTotal)*100)}%` : '0%';

        statDevicesScore.textContent = `${devicesScore} / ${devicesTotal}`;
        statDevicesPercent.textContent = devicesTotal > 0 ? `${Math.round((devicesScore/devicesTotal)*100)}%` : '0%';

        // Difficulty breakdown DOM
        statMediumScore.textContent = `${medScore} / ${medTotal}`;
        statMedhardScore.textContent = `${medhardScore} / ${medhardTotal}`;
        statHardScore.textContent = `${hardScore} / ${hardTotal}`;
        statScenarioScore.textContent = `${scenarioScore} / ${scenarioTotal}`;

        // Record in SyncManager
        if (window.SyncManager) {
            window.SyncManager.recordExamResult(MODULE_ID, {
                score: correctCount,
                total: totalQ,
                percentage: pct,
                date: new Date().toISOString()
            });
        }

        showScreen('results');
    }

    // Start Review Mode
    function startReviewMode() {
        currentMode = 'review';
        currentIndex = 0;
        updateHeaderUI();
        showScreen('quiz');
        renderQuestion();
        buildNavigator();
    }

    // Return to Mode Selection
    function returnToModeSelect() {
        stopExamTimer();
        showScreen('mode-select');
    }

    // Screen Switcher Helper
    function showScreen(screen) {
        screenModeSelect.classList.add('hidden');
        screenQuizWorkspace.classList.add('hidden');
        screenResults.classList.add('hidden');

        if (screen === 'mode-select') {
            screenModeSelect.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (screen === 'quiz') {
            screenQuizWorkspace.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (screen === 'results') {
            screenResults.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Update Global Score Display
    function updateScoreDisplay() {
        let correct = 0;
        Object.entries(userAnswers).forEach(([qId, ans]) => {
            const q = allQuestions.find(item => String(item.id) === String(qId));
            if (q && q.correct_answer === ans) {
                correct++;
            }
        });
        scoreDisplay.textContent = correct;
    }

    // Keyboard Shortcuts
    function handleKeyboardShortcuts(e) {
        if (screenQuizWorkspace.classList.contains('hidden')) return;

        const key = e.key.toUpperCase();

        if (['A', 'B', 'C', 'D'].includes(key)) {
            selectOption(key);
        } else if (e.key === '1') {
            selectOption('A');
        } else if (e.key === '2') {
            selectOption('B');
        } else if (e.key === '3') {
            selectOption('C');
        } else if (e.key === '4') {
            selectOption('D');
        } else if (e.key === 'ArrowLeft') {
            goToPreviousQuestion();
        } else if (e.key === 'ArrowRight') {
            goToNextQuestion();
        } else if (e.key === 'm' || e.key === 'M') {
            toggleMarkCurrentQuestion();
        } else if (e.code === 'Space' && currentMode === 'flashcards') {
            e.preventDefault();
            flipFlashcard();
        }
    }

    // Shuffle Utility
    function shuffleArray(arr) {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Execute on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
