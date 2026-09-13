// State Engine
let allQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let markedForReview = [];
let currentMode = null; // 'practice', 'timed', 'quick', 'review'
let reviewFilter = 'all'; // 'all', 'incorrect'
let timerInterval = null;
let timeRemainingSeconds = 0;
let isTestSubmitted = false;

// DOM Elements
const els = {
    themeToggle: document.getElementById('theme-toggle'),
    modeScreen: document.getElementById('mode-selection-screen'),
    quizLayout: document.getElementById('quiz-layout'),
    resultsScreen: document.getElementById('results-screen'),
    
    // Timer
    timerDisplay: document.getElementById('timer-display'),
    timeText: document.getElementById('time-text'),
    
    // Progress
    progText: document.getElementById('progress-text'),
    progPct: document.getElementById('progress-percentage'),
    progBar: document.getElementById('progress-bar-fill'),
    
    // Flashcard
    card: document.getElementById('flashcard'),
    qNum: document.getElementById('q-number'),
    qDiff: document.getElementById('q-difficulty'),
    qCat: document.getElementById('q-category'),
    qText: document.getElementById('q-text'),
    optGrid: document.getElementById('options-grid'),
    btnMarkReview: document.getElementById('btn-mark-review'),
    
    // Feedback
    feedPanel: document.getElementById('feedback-panel'),
    feedHeader: document.getElementById('feedback-header'),
    feedText: document.getElementById('feedback-text'),
    realWorld: document.getElementById('real-world-text'),
    
    // Navigation
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnSubmitEarly: document.getElementById('btn-submit-early'),
    navGrid: document.getElementById('nav-grid'),
    
    // Modals
    submitModal: document.getElementById('submit-modal'),
    modalCancel: document.getElementById('btn-modal-cancel'),
    modalConfirm: document.getElementById('btn-modal-confirm'),
    modalUnans: document.getElementById('modal-unanswered-count'),
    
    // Results
    scoreCircle: document.getElementById('score-circle'),
    scoreText: document.getElementById('score-text'),
    perfCat: document.getElementById('perf-category'),
    statCorrect: document.getElementById('stat-correct'),
    statIncorrect: document.getElementById('stat-incorrect'),
    statUnattempted: document.getElementById('stat-unattempted'),
    statTime: document.getElementById('stat-time'),
    catAnalysis: document.getElementById('category-analysis-container'),
    strongestArea: document.getElementById('strongest-area'),
    weakestArea: document.getElementById('weakest-area'),
    
    // Result Actions
    btnReviewAll: document.getElementById('btn-review-all'),
    btnReviewIncorrect: document.getElementById('btn-review-incorrect'),
    btnRetry: document.getElementById('btn-retry')
};

// Initialize
async function init() {
    initTheme();
    setupEventListeners();
    try {
        const response = await fetch('questions.json');
        allQuestions = await response.json();
    } catch (e) {
        els.qText.textContent = "Error loading questions.json. Check file server.";
    }
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) document.body.setAttribute('data-theme', 'dark');
    
    els.themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

function setupEventListeners() {
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => startTest(card.dataset.mode));
    });
    
    els.btnPrev.addEventListener('click', () => navigate(-1));
    els.btnNext.addEventListener('click', () => navigate(1));
    els.btnSubmitEarly.addEventListener('click', confirmSubmit);
    
    els.modalCancel.addEventListener('click', () => els.submitModal.classList.add('hidden'));
    els.modalConfirm.addEventListener('click', () => {
        els.submitModal.classList.add('hidden');
        submitTest();
    });
    
    els.btnMarkReview.addEventListener('click', toggleMarkReview);
    
    els.btnReviewAll.addEventListener('click', () => startReview('all'));
    els.btnReviewIncorrect.addEventListener('click', () => startReview('incorrect'));
    els.btnRetry.addEventListener('click', () => {
        els.resultsScreen.classList.add('hidden');
        els.modeScreen.classList.add('show');
    });
}

// --------------------------------------------------------------------------
// Core Logic
// --------------------------------------------------------------------------

function startTest(mode) {
    currentMode = mode;
    isTestSubmitted = false;
    
    if (mode === 'practice' || mode === 'timed') {
        currentQuestions = [...allQuestions];
    } else if (mode === 'quick') {
        // 15 Random
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, 15);
    }
    
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    markedForReview = new Array(currentQuestions.length).fill(false);
    
    // UI Setup
    els.modeScreen.classList.remove('show');
    els.quizLayout.classList.remove('hidden');
    els.feedPanel.classList.remove('show');
    els.timerDisplay.classList.add('hidden');
    els.timerDisplay.classList.remove('warning');
    
    if (mode === 'timed') {
        startTimer(20 * 60); // 20 mins
    } else if (mode === 'quick') {
        startTimer(10 * 60); // 10 mins
    }
    
    buildNavigatorGrid();
    loadQuestion(0);
}

function buildNavigatorGrid() {
    els.navGrid.innerHTML = '';
    currentQuestions.forEach((_, idx) => {
        const cell = document.createElement('div');
        cell.className = 'nav-cell';
        cell.textContent = idx + 1;
        cell.addEventListener('click', () => {
            currentQuestionIndex = idx;
            loadQuestion(idx);
        });
        els.navGrid.appendChild(cell);
    });
}

function updateNavigatorGrid() {
    const cells = els.navGrid.children;
    for (let i = 0; i < currentQuestions.length; i++) {
        let classes = ['nav-cell'];
        if (i === currentQuestionIndex) classes.push('current');
        if (userAnswers[i] !== null) classes.push('answered');
        if (markedForReview[i]) classes.push('marked');
        
        if (currentMode === 'review' || isTestSubmitted) {
            if (userAnswers[i] === currentQuestions[i].correctAnswer) classes.push('review-correct');
            else if (userAnswers[i] !== null) classes.push('review-incorrect');
        }
        
        cells[i].className = classes.join(' ');
    }
}

function toggleMarkReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    if (markedForReview[currentQuestionIndex]) {
        els.btnMarkReview.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="text-warning"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> <span>Unmark</span>`;
    } else {
        els.btnMarkReview.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> <span>Mark</span>`;
    }
    updateNavigatorGrid();
}

function loadQuestion(index) {
    const q = currentQuestions[index];
    
    // Animate Card
    els.card.classList.remove('slide-enter', 'slide-exit');
    void els.card.offsetWidth; // trigger reflow
    els.card.classList.add('slide-enter');
    
    // Update Header
    els.progText.textContent = `Question ${index + 1} of ${currentQuestions.length}`;
    const answeredCount = userAnswers.filter(a => a !== null).length;
    els.progPct.textContent = `${Math.round((answeredCount / currentQuestions.length) * 100)}% Completed`;
    els.progBar.style.width = `${((index + 1) / currentQuestions.length) * 100}%`;
    
    els.qNum.textContent = `Q${index + 1}`;
    els.qDiff.textContent = q.difficulty;
    els.qDiff.className = `badge Difficulty-${q.difficulty.split(' ')[0]}`;
    els.qCat.textContent = formatString(q.category);
    els.qText.textContent = q.question;
    
    // Mark Review Button State
    if (markedForReview[index]) {
        els.btnMarkReview.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="text-warning"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> <span>Unmark</span>`;
    } else {
        els.btnMarkReview.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> <span>Mark</span>`;
    }
    
    // Options
    els.optGrid.innerHTML = '';
    
    // Shuffle Options (convert to array of entries)
    let optionsArray = Object.entries(q.options);
    if (!isTestSubmitted && currentMode !== 'practice') {
        optionsArray = optionsArray.sort(() => 0.5 - Math.random());
    }

    optionsArray.forEach(([key, value]) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.key = key;
        btn.innerHTML = `<span class="option-label">${key}</span> <span>${value}</span>`;
        btn.addEventListener('click', () => handleSelectOption(key));
        els.optGrid.appendChild(btn);
    });
    
    els.feedPanel.classList.remove('show');
    
    // Buttons logic
    els.btnPrev.disabled = index === 0;
    
    if (index === currentQuestions.length - 1) {
        els.btnNext.classList.add('hidden');
        els.btnSubmitEarly.classList.remove('hidden');
    } else {
        els.btnNext.classList.remove('hidden');
        els.btnSubmitEarly.classList.add('hidden');
    }
    
    // If already answered or in review mode
    if (userAnswers[index] !== null || isTestSubmitted) {
        applyAnswerState(index);
    }
    
    updateNavigatorGrid();
}

function handleSelectOption(selectedKey) {
    if (isTestSubmitted) return;
    
    if (currentMode === 'practice' && userAnswers[currentQuestionIndex] !== null) {
        return; // lock after selection in practice mode
    }
    
    userAnswers[currentQuestionIndex] = selectedKey;
    applyAnswerState(currentQuestionIndex);
    updateNavigatorGrid();
}

function applyAnswerState(index) {
    const q = currentQuestions[index];
    const selectedKey = userAnswers[index];
    const isCorrect = selectedKey === q.correctAnswer;
    const buttons = els.optGrid.querySelectorAll('.option-btn');
    
    if (currentMode === 'practice' || isTestSubmitted) {
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.className = 'option-btn'; // reset
            if (btn.dataset.key === q.correctAnswer) btn.classList.add('correct');
            else if (btn.dataset.key === selectedKey) btn.classList.add('incorrect');
        });
        
        // Show Feedback
        els.feedPanel.className = `feedback-panel show ${isCorrect ? 'correct-panel' : 'incorrect-panel'}`;
        els.feedHeader.className = `feedback-header ${isCorrect ? 'correct' : 'incorrect'}`;
        els.feedHeader.innerHTML = isCorrect ? 
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Correct!` : 
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> Incorrect`;
        els.feedText.textContent = q.explanation;
        els.realWorld.textContent = q.realWorldApplication;
        
    } else {
        // Timed / Quick modes - just select visually
        buttons.forEach(btn => {
            if (btn.dataset.key === selectedKey) btn.classList.add('selected');
            else btn.classList.remove('selected');
        });
    }
}

function navigate(dir) {
    if (dir === 1 && currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else if (dir === -1 && currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// --------------------------------------------------------------------------
// Timer
// --------------------------------------------------------------------------
function startTimer(seconds) {
    timeRemainingSeconds = seconds;
    els.timerDisplay.classList.remove('hidden');
    updateTimerDisplay();
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeRemainingSeconds--;
        updateTimerDisplay();
        
        if (timeRemainingSeconds === 120) {
            els.timerDisplay.classList.add('warning'); // 2 min warning
        }
        
        if (timeRemainingSeconds <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timeRemainingSeconds / 60).toString().padStart(2, '0');
    const s = (timeRemainingSeconds % 60).toString().padStart(2, '0');
    els.timeText.textContent = `${m}:${s}`;
}

// --------------------------------------------------------------------------
// Submission & Results
// --------------------------------------------------------------------------
function confirmSubmit() {
    if (currentMode === 'practice') {
        submitTest();
        return;
    }
    
    const unans = userAnswers.filter(a => a === null).length;
    els.modalUnans.textContent = unans;
    els.submitModal.classList.remove('hidden');
}

function submitTest() {
    if (timerInterval) clearInterval(timerInterval);
    isTestSubmitted = true;
    
    els.quizLayout.classList.add('hidden');
    els.resultsScreen.classList.remove('hidden');
    els.resultsScreen.classList.add('show');
    
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    
    const categoryStats = {};
    
    currentQuestions.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { total: 0, correct: 0 };
        categoryStats[cat].total++;
        
        if (userAnswers[i] === null) {
            unattempted++;
        } else if (userAnswers[i] === q.correctAnswer) {
            correct++;
            categoryStats[cat].correct++;
        } else {
            incorrect++;
        }
    });
    
    const pct = Math.round((correct / currentQuestions.length) * 100);
    els.scoreText.textContent = `${pct}%`;
    els.scoreCircle.style.setProperty('--progress', `${pct}%`);
    
    els.statCorrect.textContent = correct;
    els.statIncorrect.textContent = incorrect;
    els.statUnattempted.textContent = unattempted;
    
    let timeTaken = 0;
    if (currentMode === 'timed') timeTaken = (20 * 60) - timeRemainingSeconds;
    else if (currentMode === 'quick') timeTaken = (10 * 60) - timeRemainingSeconds;
    else timeTaken = 0; // untracked in practice
    
    if (timeTaken > 0) {
        const m = Math.floor(timeTaken / 60).toString().padStart(2, '0');
        const s = (timeTaken % 60).toString().padStart(2, '0');
        els.statTime.textContent = `${m}:${s}`;
    } else {
        els.statTime.textContent = 'N/A';
    }
    
    if (pct >= 90) els.perfCat.textContent = "Excellent";
    else if (pct >= 75) els.perfCat.textContent = "Strong";
    else if (pct >= 60) els.perfCat.textContent = "Needs Practice";
    else els.perfCat.textContent = "Needs Improvement";
    
    // Category Analysis
    els.catAnalysis.innerHTML = '';
    let bestCat = { name: '-', pct: -1 };
    let worstCat = { name: '-', pct: 101 };
    
    Object.entries(categoryStats).forEach(([cat, stats]) => {
        const catPct = Math.round((stats.correct / stats.total) * 100);
        const niceCat = formatString(cat);
        
        if (catPct > bestCat.pct) { bestCat.pct = catPct; bestCat.name = niceCat; }
        if (catPct < worstCat.pct) { worstCat.pct = catPct; worstCat.name = niceCat; }
        
        const row = document.createElement('div');
        row.className = 'cat-row';
        row.innerHTML = `
            <div class="cat-header"><span>${niceCat}</span> <span>${catPct}%</span></div>
            <div class="cat-bar-bg">
                <div class="cat-bar-fill ${catPct >= 75 ? 'good' : (catPct <= 50 ? 'bad' : '')}" style="width: ${catPct}%"></div>
            </div>
        `;
        els.catAnalysis.appendChild(row);
    });
    
    els.strongestArea.textContent = bestCat.name;
    els.weakestArea.textContent = worstCat.name;
}

function startReview(filter) {
    reviewFilter = filter;
    currentMode = 'review';
    els.resultsScreen.classList.add('hidden');
    els.resultsScreen.classList.remove('show');
    els.quizLayout.classList.remove('hidden');
    els.timerDisplay.classList.add('hidden');
    
    // Find first question matching filter
    let startIdx = 0;
    if (filter === 'incorrect') {
        const firstIncorrect = currentQuestions.findIndex((q, i) => userAnswers[i] !== q.correctAnswer);
        if (firstIncorrect !== -1) startIdx = firstIncorrect;
    }
    
    updateNavigatorGrid();
    currentQuestionIndex = startIdx;
    loadQuestion(startIdx);
}

// Helpers
function formatString(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Run
document.addEventListener('DOMContentLoaded', init);
