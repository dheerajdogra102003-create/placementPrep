/**
 * PROGRAMMING FUNDAMENTALS - APPLICATION CONTROLLER
 * Tracks: Variables & Data Types | Conditional Statements | Loops & Iteration
 * 150 Placement MCQs | Practice | Timed MNC Exam | Flashcards
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. STATE INITIALIZATION
    // ==========================================
    const state = {
        allQuestions: Array.isArray(questionsData) ? questionsData : [],
        filteredQuestions: [],
        currentIndex: 0,
        currentMode: 'practice', // 'practice' | 'exam' | 'flashcards'
        
        // Filters
        filterTrack: 'all',
        filterLang: 'all',
        filterDiff: 'all',
        filterBookmarksOnly: false,

        // User Data Initialized from SyncManager + LocalStorage
        userAnswers: (() => {
            let answers = {};
            if (window.SyncManager) {
                answers = window.SyncManager.getModuleData('programming_fundamentals').answers || {};
            }
            try {
                const localAnswers = JSON.parse(localStorage.getItem('prog_user_answers') || '{}');
                answers = { ...localAnswers, ...answers };
            } catch (e) {}
            return answers;
        })(),
        bookmarks: (() => {
            let bookmarks = [];
            if (window.SyncManager) {
                bookmarks = window.SyncManager.getModuleData('programming_fundamentals').bookmarks || [];
            }
            try {
                const localBm = JSON.parse(localStorage.getItem('prog_bookmarks') || '[]');
                bookmarks = [...new Set([...localBm, ...bookmarks])];
            } catch (e) {}
            return new Set(bookmarks);
        })(),
        score: 0,

        // Exam Mode State
        examQuestions: [],
        examTimerInterval: null,
        examSecondsLeft: 30 * 60, // 30 minutes
        examStartTime: null,
        examMarkedReview: new Set(),
        examSubmitted: false,

        // Flashcards
        fcIndex: 0,
        fcFlipped: false,

        // Audio & UI
        soundEnabled: localStorage.getItem('prog_sound') !== 'false',
        paletteOpen: false
    };

    // ==========================================
    // 2. DOM CACHE
    // ==========================================
    const dom = {
        // Screens
        screenModeSelect: document.getElementById('screen-mode-select'),
        screenQuizWorkspace: document.getElementById('screen-quiz-workspace'),
        screenFlashcards: document.getElementById('screen-flashcards'),
        modalExamResults: document.getElementById('modal-exam-results'),

        // Header controls
        headerModeBadge: document.getElementById('header-mode-badge'),
        timerBox: document.getElementById('timer-box'),
        timerDisplay: document.getElementById('timer-display'),
        scoreValue: document.getElementById('score-value'),
        soundToggle: document.getElementById('sound-toggle'),
        soundIconOn: document.getElementById('sound-icon-on'),
        soundIconOff: document.getElementById('sound-icon-off'),
        soundToggleText: document.getElementById('sound-toggle-text'),
        wsSoundToggle: document.getElementById('ws-sound-toggle'),
        wsSoundIcon: document.getElementById('ws-sound-icon'),
        wsSoundText: document.getElementById('ws-sound-text'),
        themeToggle: document.getElementById('theme-toggle'),

        // Workspace elements
        qTrackBadge: document.getElementById('q-track-badge'),
        qConceptBadge: document.getElementById('q-concept-badge'),
        qLangBadge: document.getElementById('q-lang-badge'),
        qDiffBadge: document.getElementById('q-diff-badge'),
        currentQNum: document.getElementById('current-q-num'),
        totalQNum: document.getElementById('total-q-num'),
        btnBookmarkQ: document.getElementById('btn-bookmark-q'),
        qProgressBar: document.getElementById('q-progress-bar'),
        qText: document.getElementById('q-text'),
        qCodeContainer: document.getElementById('q-code-container'),
        codeLangLabel: document.getElementById('code-lang-label'),
        qCodeContent: document.getElementById('q-code-content'),
        btnCopyCode: document.getElementById('btn-copy-code'),
        optionsGrid: document.getElementById('options-grid'),
        
        // Workspace Controls
        btnPrevQ: document.getElementById('btn-prev-q'),
        btnNextQ: document.getElementById('btn-next-q'),
        btnShowExpl: document.getElementById('btn-show-expl'),
        btnReviewMark: document.getElementById('btn-review-mark'),
        btnSubmitExam: document.getElementById('btn-submit-exam'),
        btnTogglePalette: document.getElementById('btn-toggle-palette'),
        btnChangeMode: document.getElementById('btn-change-mode'),
        btnToggleBookmarks: document.getElementById('btn-toggle-bookmarks'),
        bookmarkCountBadge: document.getElementById('bookmark-count-badge'),

        // Explanation Drawer
        explanationBox: document.getElementById('explanation-box'),
        explStatusBanner: document.getElementById('expl-status-banner'),
        explStatusIcon: document.getElementById('expl-status-icon'),
        explStatusTitle: document.getElementById('expl-status-title'),
        explText: document.getElementById('expl-text'),
        explWhyOthersContainer: document.getElementById('expl-why-others-container'),
        explWhyOthersList: document.getElementById('expl-why-others-list'),
        explTrapBox: document.getElementById('expl-trap-box'),
        explTrapText: document.getElementById('expl-trap-text'),
        explAppBox: document.getElementById('expl-app-box'),
        explAppText: document.getElementById('expl-app-text'),

        // Palette
        questionPalette: document.getElementById('question-palette'),
        paletteGrid: document.getElementById('palette-grid'),
        btnClosePalette: document.getElementById('btn-close-palette'),
        quizContainer: document.querySelector('.quiz-container'),

        // Flashcards
        flashcard: document.getElementById('flashcard'),
        fcCurrentIndex: document.getElementById('fc-current-index'),
        fcTotalCount: document.getElementById('fc-total-count'),
        fcTrack: document.getElementById('fc-track'),
        fcLang: document.getElementById('fc-lang'),
        fcQuestion: document.getElementById('fc-question'),
        fcCode: document.getElementById('fc-code'),
        fcCorrectOpt: document.getElementById('fc-correct-opt'),
        fcAnswerText: document.getElementById('fc-answer-text'),
        fcExplanation: document.getElementById('fc-explanation'),
        fcTrap: document.getElementById('fc-trap'),
        btnFcPrev: document.getElementById('btn-fc-prev'),
        btnFcNext: document.getElementById('btn-fc-next'),
        btnFcFlip: document.getElementById('btn-fc-flip'),
        btnExitFc: document.getElementById('btn-exit-fc')
    };

    // ==========================================
    // 3. SOUND SYNTHESIZER (WEB AUDIO API)
    // ==========================================
    let audioCtx = null;
    function getAudioContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function playTone(frequencies, duration = 0.15, type = 'sine') {
        if (!state.soundEnabled) return;
        try {
            const ctx = getAudioContext();
            frequencies.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

                gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + duration);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(ctx.currentTime + i * 0.08);
                osc.stop(ctx.currentTime + i * 0.08 + duration);
            });
        } catch (e) {
            // Audio context not allowed or supported
        }
    }

    function soundCorrect() {
        playTone([523.25, 659.25, 783.99], 0.25, 'triangle'); // C5, E5, G5 major chord
    }

    function soundWrong() {
        playTone([220, 196], 0.25, 'sawtooth'); // Low descending buzz
    }

    function soundClick() {
        playTone([440], 0.05, 'sine');
    }

    // ==========================================
    // 4. THEME & SOUND CONTROLLER
    // ==========================================
    function initTheme() {
        const savedTheme = localStorage.getItem('prep_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    dom.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('prep_theme', newTheme);
        soundClick();
    });

    function toggleSound() {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('prog_sound', state.soundEnabled);
        updateSoundIcons();
        if (state.soundEnabled) soundCorrect();
    }

    if (dom.soundToggle) dom.soundToggle.addEventListener('click', toggleSound);
    if (dom.wsSoundToggle) dom.wsSoundToggle.addEventListener('click', toggleSound);

    function updateSoundIcons() {
        const isEnabled = state.soundEnabled;

        // Header Toggle Pill
        if (dom.soundToggle) {
            dom.soundToggle.className = `sound-toggle-pill ${isEnabled ? 'sound-on' : 'sound-off'}`;
            dom.soundToggle.title = isEnabled ? 'Sound is ON (Click to Mute)' : 'Sound is OFF (Click to Unmute)';
        }
        if (dom.soundIconOn && dom.soundIconOff) {
            if (isEnabled) {
                dom.soundIconOn.classList.remove('hidden');
                dom.soundIconOff.classList.add('hidden');
            } else {
                dom.soundIconOn.classList.add('hidden');
                dom.soundIconOff.classList.remove('hidden');
            }
        }
        if (dom.soundToggleText) {
            dom.soundToggleText.textContent = isEnabled ? 'Sound: ON' : 'Sound: OFF';
        }

        // Workspace Filter Bar Toggle Pill
        if (dom.wsSoundToggle) {
            dom.wsSoundToggle.className = `filter-pill btn-sound-filter ${isEnabled ? 'sound-on' : 'sound-off'}`;
            dom.wsSoundToggle.title = isEnabled ? 'Sound is ON (Click to Mute)' : 'Sound is OFF (Click to Unmute)';
        }
        if (dom.wsSoundIcon) {
            dom.wsSoundIcon.textContent = isEnabled ? '🔊' : '🔇';
        }
        if (dom.wsSoundText) {
            dom.wsSoundText.textContent = isEnabled ? 'Sound: ON' : 'Sound: OFF';
        }
    }

    // ==========================================
    // 5. FILTERING & QUESTION MANAGEMENT
    // ==========================================
    function applyFilters() {
        let list = [...state.allQuestions];

        if (state.currentMode === 'exam') {
            state.filteredQuestions = state.examQuestions;
            return;
        }

        // Track Filter
        if (state.filterTrack !== 'all') {
            list = list.filter(q => q.track === state.filterTrack);
        }

        // Language Filter
        if (state.filterLang !== 'all') {
            list = list.filter(q => q.language.toLowerCase() === state.filterLang.toLowerCase());
        }

        // Difficulty Filter
        if (state.filterDiff !== 'all') {
            list = list.filter(q => q.difficulty.toLowerCase() === state.filterDiff.toLowerCase());
        }

        // Bookmarks Only Filter
        if (state.filterBookmarksOnly) {
            list = list.filter(q => state.bookmarks.has(q.id));
        }

        state.filteredQuestions = list;
        state.currentIndex = 0;
        updateBookmarkBadge();
    }

    function updateBookmarkBadge() {
        dom.bookmarkCountBadge.textContent = state.bookmarks.size;
    }

    // ==========================================
    // 6. SCREEN ROUTING
    // ==========================================
    function switchScreen(screen) {
        dom.screenModeSelect.classList.add('hidden');
        dom.screenQuizWorkspace.classList.add('hidden');
        dom.screenFlashcards.classList.add('hidden');
        dom.modalExamResults.classList.add('hidden');

        if (screen === 'select') {
            dom.screenModeSelect.classList.remove('hidden');
            dom.headerModeBadge.textContent = 'Mode Select';
            dom.timerBox.classList.add('hidden');
            clearInterval(state.examTimerInterval);
        } else if (screen === 'workspace') {
            dom.screenQuizWorkspace.classList.remove('hidden');
            dom.headerModeBadge.textContent = state.currentMode === 'exam' ? 'MNC Timed Exam' : 'Interactive Practice';
        } else if (screen === 'flashcards') {
            dom.screenFlashcards.classList.remove('hidden');
            dom.headerModeBadge.textContent = 'Flashcard Study';
            dom.timerBox.classList.add('hidden');
        }
    }

    // Start Mode Handler
    document.querySelectorAll('.start-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            startMode(mode);
        });
    });

    function startMode(mode) {
        soundClick();
        state.currentMode = mode;

        if (mode === 'practice') {
            applyFilters();
            switchScreen('workspace');
            dom.timerBox.classList.add('hidden');
            dom.btnReviewMark.classList.add('hidden');
            dom.btnSubmitExam.classList.add('hidden');
            document.getElementById('quiz-filter-bar').classList.remove('hidden');
            renderQuestion();
            renderPalette();
        } else if (mode === 'exam') {
            initExam();
            switchScreen('workspace');
            dom.timerBox.classList.remove('hidden');
            dom.btnReviewMark.classList.remove('hidden');
            dom.btnSubmitExam.classList.remove('hidden');
            document.getElementById('quiz-filter-bar').classList.add('hidden');
            renderQuestion();
            renderPalette();
        } else if (mode === 'flashcards') {
            applyFilters();
            switchScreen('flashcards');
            state.fcIndex = 0;
            renderFlashcard();
        }
    }

    dom.btnChangeMode.addEventListener('click', () => {
        soundClick();
        if (state.currentMode === 'exam' && !state.examSubmitted) {
            if (confirm('Are you sure you want to exit the exam? Your progress will be reset.')) {
                clearInterval(state.examTimerInterval);
                switchScreen('select');
            }
        } else {
            switchScreen('select');
        }
    });

    dom.btnExitFc.addEventListener('click', () => {
        soundClick();
        switchScreen('select');
    });

    // Landing Page Track Focus Buttons
    document.querySelectorAll('.track-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.track-pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterTrack = btn.getAttribute('data-track-target');
            soundClick();
        });
    });

    // ==========================================
    // 7. QUESTION RENDERING (PRACTICE & EXAM)
    // ==========================================
    function renderQuestion() {
        if (state.filteredQuestions.length === 0) {
            dom.qText.innerHTML = '<span style="color: var(--text-muted);">No questions match your current filters. Try selecting "All" or adding bookmarks.</span>';
            dom.optionsGrid.innerHTML = '';
            dom.qCodeContainer.classList.add('hidden');
            dom.explanationBox.classList.add('hidden');
            dom.currentQNum.textContent = '0';
            dom.totalQNum.textContent = '0';
            return;
        }

        const q = state.filteredQuestions[state.currentIndex];
        dom.currentQNum.textContent = (state.currentIndex + 1);
        dom.totalQNum.textContent = state.filteredQuestions.length;

        // Progress bar
        const progressPct = ((state.currentIndex + 1) / state.filteredQuestions.length) * 100;
        dom.qProgressBar.style.width = `${progressPct}%`;

        // Metadata badges
        dom.qTrackBadge.textContent = q.track;
        dom.qTrackBadge.className = 'badge badge-track';
        if (q.track === 'Conditional Statements') dom.qTrackBadge.classList.add('track-cond');
        if (q.track === 'Loops & Iteration') dom.qTrackBadge.classList.add('track-loop');

        dom.qConceptBadge.textContent = q.concept;
        dom.qLangBadge.textContent = q.language;
        dom.qDiffBadge.textContent = q.difficulty;
        dom.qDiffBadge.className = `badge badge-diff diff-${q.difficulty.toLowerCase().replace(/\s+/g, '')}`;

        // Bookmark state
        if (state.bookmarks.has(q.id)) {
            dom.btnBookmarkQ.classList.add('bookmarked');
        } else {
            dom.btnBookmarkQ.classList.remove('bookmarked');
        }

        // Question text
        dom.qText.textContent = q.question;

        // Code block
        if (q.code && q.code.trim().length > 0) {
            dom.qCodeContainer.classList.remove('hidden');
            dom.codeLangLabel.textContent = q.language;
            dom.qCodeContent.textContent = q.code;
        } else {
            dom.qCodeContainer.classList.add('hidden');
        }

        // Render Options
        renderOptions(q);

        // Previous / Next Buttons
        dom.btnPrevQ.disabled = state.currentIndex === 0;
        dom.btnNextQ.disabled = state.currentIndex === state.filteredQuestions.length - 1;

        // Mark for review button text in exam mode
        if (state.currentMode === 'exam') {
            if (state.examMarkedReview.has(q.id)) {
                dom.btnReviewMark.classList.add('active');
                dom.btnReviewMark.style.borderColor = '#F59E0B';
                dom.btnReviewMark.style.color = '#F59E0B';
            } else {
                dom.btnReviewMark.classList.remove('active');
                dom.btnReviewMark.style.borderColor = '';
                dom.btnReviewMark.style.color = '';
            }
        }

        // Explanation Box Visibility
        const userAnswer = state.userAnswers[q.id];
        if (state.currentMode === 'practice' && userAnswer) {
            showExplanation(q, userAnswer);
            dom.btnShowExpl.classList.remove('hidden');
        } else {
            dom.explanationBox.classList.add('hidden');
            dom.btnShowExpl.classList.add('hidden');
        }

        updatePaletteSelection();
    }

    function renderOptions(q) {
        dom.optionsGrid.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        const existingAnswer = state.userAnswers[q.id];

        letters.forEach(letter => {
            const optText = q.options[letter];
            if (!optText) return;

            const optItem = document.createElement('div');
            optItem.className = 'option-item';
            optItem.setAttribute('data-opt', letter);

            optItem.innerHTML = `
                <span class="opt-prefix">${letter}</span>
                <span class="opt-text">${escapeHtml(optText)}</span>
            `;

            if (state.currentMode === 'practice') {
                if (existingAnswer) {
                    optItem.classList.add('locked');
                    if (letter === q.correctAnswer) {
                        optItem.classList.add('correct');
                    }
                    if (letter === existingAnswer.selected && !existingAnswer.isCorrect) {
                        optItem.classList.add('wrong');
                    }
                }
            } else if (state.currentMode === 'exam') {
                if (existingAnswer && existingAnswer.selected === letter) {
                    optItem.classList.add('selected');
                }
            }

            optItem.addEventListener('click', () => {
                handleOptionClick(q, letter);
            });

            dom.optionsGrid.appendChild(optItem);
        });
    }

    function handleOptionClick(q, selectedLetter) {
        if (state.currentMode === 'practice') {
            if (state.userAnswers[q.id]) return; // Already answered

            const isCorrect = (selectedLetter === q.correctAnswer);
            state.userAnswers[q.id] = { selected: selectedLetter, isCorrect };
            localStorage.setItem('prog_user_answers', JSON.stringify(state.userAnswers));

            if (window.SyncManager) {
                window.SyncManager.recordAnswer('programming_fundamentals', q.id, {
                    selected: selectedLetter,
                    isCorrect: isCorrect,
                    track: q.track,
                    language: q.language,
                    difficulty: q.difficulty
                });
            }

            if (isCorrect) {
                state.score += 1;
                soundCorrect();
            } else {
                soundWrong();
            }
            updateScoreBadge();

            renderOptions(q);
            showExplanation(q, { selected: selectedLetter, isCorrect });
            dom.btnShowExpl.classList.remove('hidden');
            updatePaletteSelection();

        } else if (state.currentMode === 'exam') {
            soundClick();
            state.userAnswers[q.id] = { selected: selectedLetter };
            renderOptions(q);
            updatePaletteSelection();
        }
    }

    function showExplanation(q, answer) {
        dom.explanationBox.classList.remove('hidden');

        if (answer.isCorrect) {
            dom.explStatusBanner.className = 'expl-status-banner correct';
            dom.explStatusIcon.textContent = '✓';
            dom.explStatusTitle.textContent = `Correct! Option ${q.correctAnswer} is the right answer.`;
        } else {
            dom.explStatusBanner.className = 'expl-status-banner wrong';
            dom.explStatusIcon.textContent = '✗';
            dom.explStatusTitle.textContent = `Incorrect. You chose ${answer.selected}. Correct answer is Option ${q.correctAnswer}.`;
        }

        dom.explText.textContent = q.explanation || 'No detailed explanation provided.';

        // Distractor breakdown
        if (q.whyOthersAreWrong && Object.keys(q.whyOthersAreWrong).length > 0) {
            dom.explWhyOthersContainer.classList.remove('hidden');
            dom.explWhyOthersList.innerHTML = '';
            for (const [key, val] of Object.entries(q.whyOthersAreWrong)) {
                const li = document.createElement('li');
                li.innerHTML = `<strong>Option ${key}:</strong> ${escapeHtml(val)}`;
                dom.explWhyOthersList.appendChild(li);
            }
        } else {
            dom.explWhyOthersContainer.classList.add('hidden');
        }

        // Trap & Pro Tip
        if (q.commonTrap || q.quickTrick) {
            dom.explTrapBox.classList.remove('hidden');
            dom.explTrapText.innerHTML = `<strong>Trap:</strong> ${escapeHtml(q.commonTrap || '')}<br><br><strong>Pro-Tip:</strong> ${escapeHtml(q.quickTrick || '')}`;
        } else {
            dom.explTrapBox.classList.add('hidden');
        }

        // Real World App
        if (q.realWorldApplication) {
            dom.explAppBox.classList.remove('hidden');
            dom.explAppText.textContent = q.realWorldApplication;
        } else {
            dom.explAppBox.classList.add('hidden');
        }
    }

    dom.btnShowExpl.addEventListener('click', () => {
        dom.explanationBox.classList.toggle('hidden');
        soundClick();
    });

    // Navigation Buttons
    dom.btnPrevQ.addEventListener('click', () => {
        if (state.currentIndex > 0) {
            state.currentIndex--;
            soundClick();
            renderQuestion();
        }
    });

    dom.btnNextQ.addEventListener('click', () => {
        if (state.currentIndex < state.filteredQuestions.length - 1) {
            state.currentIndex++;
            soundClick();
            renderQuestion();
        }
    });

    // Bookmark Toggle
    dom.btnBookmarkQ.addEventListener('click', () => {
        const q = state.filteredQuestions[state.currentIndex];
        if (!q) return;

        if (state.bookmarks.has(q.id)) {
            state.bookmarks.delete(q.id);
            dom.btnBookmarkQ.classList.remove('bookmarked');
        } else {
            state.bookmarks.add(q.id);
            dom.btnBookmarkQ.classList.add('bookmarked');
        }

        localStorage.setItem('prog_bookmarks', JSON.stringify([...state.bookmarks]));
        if (window.SyncManager) {
            window.SyncManager.toggleBookmark('programming_fundamentals', q.id);
        }
        updateBookmarkBadge();
        soundClick();
    });

    // Copy Code Snippet
    dom.btnCopyCode.addEventListener('click', () => {
        const text = dom.qCodeContent.textContent;
        navigator.clipboard.writeText(text).then(() => {
            dom.btnCopyCode.querySelector('span').textContent = 'Copied!';
            setTimeout(() => {
                dom.btnCopyCode.querySelector('span').textContent = 'Copy';
            }, 1800);
        });
        soundClick();
    });

    // ==========================================
    // 8. QUESTION PALETTE
    // ==========================================
    dom.btnTogglePalette.addEventListener('click', () => {
        state.paletteOpen = !state.paletteOpen;
        if (state.paletteOpen) {
            dom.questionPalette.classList.remove('hidden');
            dom.quizContainer.classList.add('palette-open');
        } else {
            dom.questionPalette.classList.add('hidden');
            dom.quizContainer.classList.remove('palette-open');
        }
        soundClick();
    });

    dom.btnClosePalette.addEventListener('click', () => {
        state.paletteOpen = false;
        dom.questionPalette.classList.add('hidden');
        dom.quizContainer.classList.remove('palette-open');
        soundClick();
    });

    function renderPalette() {
        dom.paletteGrid.innerHTML = '';
        state.filteredQuestions.forEach((q, idx) => {
            const item = document.createElement('div');
            item.className = 'palette-item';
            item.textContent = idx + 1;
            item.setAttribute('data-idx', idx);

            const ans = state.userAnswers[q.id];
            if (ans && ans.selected) {
                item.classList.add('answered');
            }
            if (state.currentMode === 'exam' && state.examMarkedReview.has(q.id)) {
                item.classList.add('review');
            }
            if (idx === state.currentIndex) {
                item.classList.add('current');
            }

            item.addEventListener('click', () => {
                state.currentIndex = idx;
                soundClick();
                renderQuestion();
            });

            dom.paletteGrid.appendChild(item);
        });
    }

    function updatePaletteSelection() {
        document.querySelectorAll('.palette-item').forEach((item, idx) => {
            const q = state.filteredQuestions[idx];
            if (!q) return;

            item.className = 'palette-item';
            const ans = state.userAnswers[q.id];
            if (ans && ans.selected) {
                item.classList.add('answered');
            }
            if (state.currentMode === 'exam' && state.examMarkedReview.has(q.id)) {
                item.classList.add('review');
            }
            if (idx === state.currentIndex) {
                item.classList.add('current');
            }
        });
    }

    // ==========================================
    // 9. TIMED PLACEMENT EXAM SIMULATION
    // ==========================================
    function initExam() {
        clearInterval(state.examTimerInterval);
        state.examSubmitted = false;
        state.examMarkedReview.clear();
        state.userAnswers = {}; // Fresh answers for test
        state.examSecondsLeft = 30 * 60;
        state.examStartTime = Date.now();

        // Sample 30 balanced questions: 10 Variables, 10 Conditionals, 10 Loops
        const varQs = shuffleArray(state.allQuestions.filter(q => q.track === 'Variables & Data Types')).slice(0, 10);
        const condQs = shuffleArray(state.allQuestions.filter(q => q.track === 'Conditional Statements')).slice(0, 10);
        const loopQs = shuffleArray(state.allQuestions.filter(q => q.track === 'Loops & Iteration')).slice(0, 10);

        state.examQuestions = shuffleArray([...varQs, ...condQs, ...loopQs]);
        state.filteredQuestions = state.examQuestions;
        state.currentIndex = 0;

        startExamTimer();
    }

    function startExamTimer() {
        updateTimerDisplay();
        state.examTimerInterval = setInterval(() => {
            state.examSecondsLeft--;
            updateTimerDisplay();

            if (state.examSecondsLeft <= 300) {
                dom.timerBox.classList.add('timer-urgent');
            }

            if (state.examSecondsLeft <= 0) {
                clearInterval(state.examTimerInterval);
                submitExam(true);
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const mins = Math.floor(state.examSecondsLeft / 60);
        const secs = state.examSecondsLeft % 60;
        dom.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    dom.btnReviewMark.addEventListener('click', () => {
        const q = state.filteredQuestions[state.currentIndex];
        if (!q) return;

        if (state.examMarkedReview.has(q.id)) {
            state.examMarkedReview.delete(q.id);
        } else {
            state.examMarkedReview.add(q.id);
        }
        soundClick();
        renderQuestion();
    });

    dom.btnSubmitExam.addEventListener('click', () => {
        soundClick();
        const answeredCount = Object.keys(state.userAnswers).length;
        const total = state.examQuestions.length;
        if (confirm(`You have answered ${answeredCount} of ${total} questions. Do you want to submit your exam?`)) {
            submitExam(false);
        }
    });

    function submitExam(autoSubmit = false) {
        clearInterval(state.examTimerInterval);
        state.examSubmitted = true;

        let totalCorrect = 0;
        const trackStats = {
            'Variables & Data Types': { correct: 0, total: 0 },
            'Conditional Statements': { correct: 0, total: 0 },
            'Loops & Iteration': { correct: 0, total: 0 }
        };

        state.examQuestions.forEach(q => {
            const track = q.track;
            if (trackStats[track]) trackStats[track].total++;

            const ans = state.userAnswers[q.id];
            if (ans && ans.selected === q.correctAnswer) {
                totalCorrect++;
                if (trackStats[track]) trackStats[track].correct++;
                ans.isCorrect = true;
            } else if (ans) {
                ans.isCorrect = false;
            }
        });

        // Compute Metrics
        const totalQs = state.examQuestions.length;
        const accuracy = totalQs > 0 ? Math.round((totalCorrect / totalQs) * 100) : 0;
        const elapsedSecs = 30 * 60 - state.examSecondsLeft;
        const elapsedMins = Math.floor(elapsedSecs / 60);
        const elapsedRemainSecs = elapsedSecs % 60;
        const timeFormatted = `${elapsedMins}m ${elapsedRemainSecs}s`;

        // Percentile / Rating
        let rating = 'Needs Practice';
        if (accuracy >= 85) rating = 'MNC Ready (Elite)';
        else if (accuracy >= 70) rating = 'Placement Qualified';
        else if (accuracy >= 50) rating = 'Average Foundation';

        // Render in Modal
        document.getElementById('res-score').textContent = `${totalCorrect} / ${totalQs}`;
        document.getElementById('res-accuracy').textContent = `${accuracy}%`;
        document.getElementById('res-time').textContent = timeFormatted;
        document.getElementById('res-percentile').textContent = rating;

        // Render Track Bars
        for (const [track, st] of Object.entries(trackStats)) {
            const pct = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
            if (track === 'Variables & Data Types') {
                document.getElementById('bar-var-text').textContent = `${st.correct} / ${st.total} (${pct}%)`;
                document.getElementById('bar-var-fill').style.width = `${pct}%`;
            } else if (track === 'Conditional Statements') {
                document.getElementById('bar-cond-text').textContent = `${st.correct} / ${st.total} (${pct}%)`;
                document.getElementById('bar-cond-fill').style.width = `${pct}%`;
            } else if (track === 'Loops & Iteration') {
                document.getElementById('bar-loop-text').textContent = `${st.correct} / ${st.total} (${pct}%)`;
                document.getElementById('bar-loop-fill').style.width = `${pct}%`;
            }
        }

        dom.modalExamResults.classList.remove('hidden');
        if (window.SyncManager) {
            window.SyncManager.recordExamResult('programming_fundamentals', {
                score: totalCorrect,
                total: totalQs,
                accuracy: accuracy,
                timeTaken: timeFormatted
            });
        }
        if (accuracy >= 70) soundCorrect();
        else soundWrong();
    }

    // Modal Actions
    document.getElementById('btn-results-review').addEventListener('click', () => {
        soundClick();
        dom.modalExamResults.classList.add('hidden');
        state.currentMode = 'practice'; // Allow reviewing with explanations
        dom.headerModeBadge.textContent = 'Exam Review';
        dom.btnSubmitExam.classList.add('hidden');
        state.currentIndex = 0;
        renderQuestion();
        renderPalette();
    });

    document.getElementById('btn-results-retry').addEventListener('click', () => {
        soundClick();
        dom.modalExamResults.classList.add('hidden');
        startMode('exam');
    });

    document.getElementById('btn-results-home').addEventListener('click', () => {
        soundClick();
        dom.modalExamResults.classList.add('hidden');
        switchScreen('select');
    });

    // ==========================================
    // 10. FLASHCARD STUDY MODE
    // ==========================================
    function renderFlashcard() {
        if (state.filteredQuestions.length === 0) return;
        const q = state.filteredQuestions[state.fcIndex];

        state.fcFlipped = false;
        dom.flashcard.classList.remove('flipped');

        dom.fcCurrentIndex.textContent = state.fcIndex + 1;
        dom.fcTotalCount.textContent = state.filteredQuestions.length;

        // Front
        dom.fcTrack.textContent = q.track;
        dom.fcLang.textContent = q.language;
        dom.fcQuestion.textContent = q.question;

        if (q.code && q.code.trim().length > 0) {
            dom.fcCode.classList.remove('hidden');
            dom.fcCode.querySelector('code').textContent = q.code;
        } else {
            dom.fcCode.classList.add('hidden');
        }

        // Back
        dom.fcCorrectOpt.textContent = q.correctAnswer;
        dom.fcAnswerText.textContent = `Option ${q.correctAnswer}: ${q.options[q.correctAnswer] || ''}`;
        dom.fcExplanation.textContent = q.explanation;
        dom.fcTrap.textContent = q.commonTrap ? `⚠️ Trap: ${q.commonTrap}` : '';

        dom.btnFcPrev.disabled = state.fcIndex === 0;
        dom.btnFcNext.disabled = state.fcIndex === state.filteredQuestions.length - 1;
    }

    dom.flashcard.addEventListener('click', () => {
        state.fcFlipped = !state.fcFlipped;
        dom.flashcard.classList.toggle('flipped', state.fcFlipped);
        soundClick();
    });

    dom.btnFcFlip.addEventListener('click', () => {
        state.fcFlipped = !state.fcFlipped;
        dom.flashcard.classList.toggle('flipped', state.fcFlipped);
        soundClick();
    });

    dom.btnFcPrev.addEventListener('click', () => {
        if (state.fcIndex > 0) {
            state.fcIndex--;
            soundClick();
            renderFlashcard();
        }
    });

    dom.btnFcNext.addEventListener('click', () => {
        if (state.fcIndex < state.filteredQuestions.length - 1) {
            state.fcIndex++;
            soundClick();
            renderFlashcard();
        }
    });

    // Flashcard Track Filter Buttons
    document.querySelectorAll('[data-fc-track]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-fc-track]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterTrack = btn.getAttribute('data-fc-track');
            applyFilters();
            state.fcIndex = 0;
            soundClick();
            renderFlashcard();
        });
    });

    // ==========================================
    // 11. WORKSPACE FILTERS
    // ==========================================
    // Track Filters
    document.querySelectorAll('[data-filter-track]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-filter-track]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterTrack = btn.getAttribute('data-filter-track');
            soundClick();
            applyFilters();
            renderQuestion();
            renderPalette();
        });
    });

    // Language Filters
    document.querySelectorAll('[data-filter-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-filter-lang]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterLang = btn.getAttribute('data-filter-lang');
            soundClick();
            applyFilters();
            renderQuestion();
            renderPalette();
        });
    });

    // Difficulty Filters
    document.querySelectorAll('[data-filter-diff]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-filter-diff]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterDiff = btn.getAttribute('data-filter-diff');
            soundClick();
            applyFilters();
            renderQuestion();
            renderPalette();
        });
    });

    // Bookmark Filter Toggle
    dom.btnToggleBookmarks.addEventListener('click', () => {
        state.filterBookmarksOnly = !state.filterBookmarksOnly;
        dom.btnToggleBookmarks.classList.toggle('active', state.filterBookmarksOnly);
        soundClick();
        applyFilters();
        renderQuestion();
        renderPalette();
    });

    // ==========================================
    // 12. KEYBOARD SHORTCUTS
    // ==========================================
    window.addEventListener('keydown', (e) => {
        // Space to flip in flashcards
        if (e.code === 'Space' && state.currentMode === 'flashcards' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            dom.btnFcFlip.click();
            return;
        }

        // Arrow keys for Next / Prev
        if (e.code === 'ArrowRight') {
            if (state.currentMode === 'flashcards') dom.btnFcNext.click();
            else if (!dom.btnNextQ.disabled) dom.btnNextQ.click();
        } else if (e.code === 'ArrowLeft') {
            if (state.currentMode === 'flashcards') dom.btnFcPrev.click();
            else if (!dom.btnPrevQ.disabled) dom.btnPrevQ.click();
        }

        // 1-4 or A-D for options
        if (['1', '2', '3', '4', 'a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key) && state.currentMode !== 'flashcards') {
            const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D' };
            const letter = keyMap[e.key] || e.key.toUpperCase();
            const optElem = document.querySelector(`.option-item[data-opt="${letter}"]`);
            if (optElem) optElem.click();
        }
    });

    // ==========================================
    // 13. UTILITY FUNCTIONS
    // ==========================================
    function updateScoreBadge() {
        dom.scoreValue.textContent = state.score;
    }

    function shuffleArray(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // ==========================================
    // 14. SYNC CONTROLLER & MODAL
    // ==========================================
    const navSyncBtn = document.getElementById('nav-sync-btn');
    const navSyncText = document.getElementById('nav-sync-text');
    const syncModal = document.getElementById('sync-modal');
    const syncForm = document.getElementById('sync-form');
    const syncUsernameInput = document.getElementById('sync-username-input');
    const syncModalError = document.getElementById('sync-modal-error');
    const btnCloseSync = document.getElementById('btn-close-sync');
    const btnLogoutSync = document.getElementById('btn-logout-sync');
    const syncLogoutArea = document.getElementById('sync-logout-area');

    function updateSyncUI() {
        if (!window.SyncManager || !navSyncBtn || !navSyncText) return;
        const username = window.SyncManager.getUsername();
        if (username) {
            navSyncText.textContent = username;
            navSyncBtn.classList.add('synced');
            navSyncBtn.title = `Synced across devices as @${username}`;
        } else {
            navSyncText.textContent = 'Sync Progress';
            navSyncBtn.classList.remove('synced');
            navSyncBtn.title = 'Click to sync your progress across devices';
        }
    }

    if (window.SyncManager) {
        window.SyncManager.subscribe(() => {
            updateSyncUI();
            const modData = window.SyncManager.getModuleData('programming_fundamentals');
            if (modData && modData.answers) {
                state.userAnswers = { ...state.userAnswers, ...modData.answers };
                state.score = Object.values(state.userAnswers).filter(a => a.isCorrect).length;
                updateScoreBadge();
            }
            if (modData && modData.bookmarks) {
                state.bookmarks = new Set([...state.bookmarks, ...modData.bookmarks]);
                updateBookmarkBadge();
            }
        });
    }

    // Modal Elements
    const syncCloudStatusBadge = document.getElementById('sync-cloud-status-badge');

    function refreshModalData() {
        if (!window.SyncManager) return;
        const currentUsername = window.SyncManager.getUsername();
        if (syncUsernameInput) syncUsernameInput.value = currentUsername;

        // Cloud status badge
        if (syncCloudStatusBadge) {
            if (window.SyncManager.cloudConnected) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟢 Cloud Connected';
            } else if (currentUsername) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟡 Syncing...';
            } else {
                syncCloudStatusBadge.className = 'sync-status-badge local';
                syncCloudStatusBadge.textContent = '☁️ Cloud Ready';
            }
        }

        if (syncLogoutArea) {
            if (currentUsername) syncLogoutArea.classList.remove('hidden');
            else syncLogoutArea.classList.add('hidden');
        }
    }

    function openSyncModal() {
        if (!syncModal) return;
        refreshModalData();
        if (syncModalError) {
            syncModalError.classList.add('hidden');
            syncModalError.textContent = '';
        }
        syncModal.classList.remove('hidden');
    }

    if (navSyncBtn && syncModal) {
        navSyncBtn.addEventListener('click', openSyncModal);

        if (btnCloseSync) {
            btnCloseSync.addEventListener('click', () => {
                syncModal.classList.add('hidden');
                sessionStorage.setItem('prep_sync_prompted', 'true');
            });
        }

        syncModal.addEventListener('click', (e) => {
            if (e.target === syncModal) {
                syncModal.classList.add('hidden');
                sessionStorage.setItem('prep_sync_prompted', 'true');
            }
        });

        // Form Submit: Set Username
        if (syncForm) {
            syncForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const username = syncUsernameInput.value.trim();
                const saveBtn = document.getElementById('btn-save-sync');
                try {
                    if (saveBtn) saveBtn.textContent = 'Saving...';
                    if (window.SyncManager) {
                        await window.SyncManager.setUsername(username);
                    }
                    syncModal.classList.add('hidden');
                    sessionStorage.setItem('prep_sync_prompted', 'true');
                    updateSyncUI();
                    window.SyncManager.showToast(`Saved as @${username}!`);
                } catch (err) {
                    if (syncModalError) {
                        syncModalError.textContent = err.message || 'Error saving user';
                        syncModalError.classList.remove('hidden');
                    }
                } finally {
                    if (saveBtn) saveBtn.textContent = 'Save & Sync';
                }
            });
        }

        if (btnLogoutSync) {
            btnLogoutSync.addEventListener('click', () => {
                if (window.SyncManager) {
                    window.SyncManager.logout();
                }
                syncModal.classList.add('hidden');
                updateSyncUI();
            });
        }
    }

    // Init Application
    initTheme();
    updateSoundIcons();
    updateBookmarkBadge();
    updateSyncUI();
    applyFilters();

    // Auto-prompt on first visit if no username set
    if (window.SyncManager && !window.SyncManager.getUsername() && !sessionStorage.getItem('prep_sync_prompted')) {
        setTimeout(() => {
            openSyncModal();
        }, 650);
    }
});

