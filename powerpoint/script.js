// State
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let reviewMode = false;

// DOM Elements
const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    progressText: document.getElementById('progress-text'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    card: document.getElementById('flashcard'),
    qNumber: document.getElementById('q-number'),
    qDifficulty: document.getElementById('q-difficulty'),
    qCategory: document.getElementById('q-category'),
    qText: document.getElementById('q-text'),
    optionsGrid: document.getElementById('options-grid'),
    feedbackPanel: document.getElementById('feedback-panel'),
    feedbackHeader: document.getElementById('feedback-header'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    realWorldText: document.getElementById('real-world-text'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    resultsScreen: document.getElementById('results-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    scoreText: document.getElementById('score-text'),
    scoreCircle: document.getElementById('score-circle'),
    statCorrect: document.getElementById('stat-correct'),
    statIncorrect: document.getElementById('stat-incorrect'),
    perfCategory: document.getElementById('perf-category'),
    btnRetry: document.getElementById('btn-retry'),
    btnReview: document.getElementById('btn-review')
};

// Initialization
function init() {
    initTheme();
    loadQuestion(0);
    setupEventListeners();
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    elements.themeToggle.addEventListener('click', () => {
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
    elements.btnPrev.addEventListener('click', () => navigate(-1));
    elements.btnNext.addEventListener('click', () => {
        if (currentQuestionIndex === questions.length - 1) {
            showResults();
        } else {
            navigate(1);
        }
    });
    
    elements.btnRetry.addEventListener('click', () => {
        userAnswers = new Array(questions.length).fill(null);
        currentQuestionIndex = 0;
        reviewMode = false;
        elements.resultsScreen.classList.remove('show');
        elements.quizScreen.style.display = 'block';
        loadQuestion(0);
    });
    
    elements.btnReview.addEventListener('click', () => {
        reviewMode = true;
        currentQuestionIndex = 0;
        elements.resultsScreen.classList.remove('show');
        elements.quizScreen.style.display = 'block';
        loadQuestion(0);
    });
}

function navigate(direction) {
    // Add exit animation
    elements.card.classList.remove('slide-enter');
    elements.card.classList.add(direction > 0 ? 'slide-exit-left' : 'slide-exit-right');
    
    setTimeout(() => {
        currentQuestionIndex += direction;
        loadQuestion(currentQuestionIndex);
        
        // Prepare enter animation
        elements.card.classList.remove('slide-exit-left', 'slide-exit-right');
        elements.card.classList.add('slide-enter');
    }, 200);
}

function formatString(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function loadQuestion(index) {
    const q = questions[index];
    
    // Update Progress
    elements.progressText.textContent = `Question ${index + 1} of ${questions.length}`;
    elements.progressBarFill.style.width = `${((index + 1) / questions.length) * 100}%`;
    
    // Update Meta
    elements.qNumber.textContent = `Q${index + 1}`;
    elements.qDifficulty.textContent = formatString(q.difficulty);
    elements.qDifficulty.className = `badge difficulty-${q.difficulty.split(' ')[0]}`;
    elements.qCategory.textContent = formatString(q.category);
    
    // Update Text
    elements.qText.textContent = q.question;
    
    // Build Options
    elements.optionsGrid.innerHTML = '';
    for (const [key, value] of Object.entries(q.options)) {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.key = key;
        btn.innerHTML = `
            <span class="option-label">${key}</span>
            <span class="option-text">${value}</span>
        `;
        
        btn.addEventListener('click', () => handleSelectOption(key));
        elements.optionsGrid.appendChild(btn);
    }
    
    // Reset State
    elements.feedbackPanel.classList.remove('show');
    elements.btnPrev.disabled = index === 0;
    
    // If returning to answered question
    if (userAnswers[index] !== null) {
        restoreAnswerState(index);
    } else {
        elements.btnNext.disabled = true;
        elements.btnNext.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    }
}

function handleSelectOption(selectedKey) {
    if (userAnswers[currentQuestionIndex] !== null && !reviewMode) return; // Prevent multiple selection unless resetting (not implemented)
    
    if (!reviewMode) {
        userAnswers[currentQuestionIndex] = selectedKey;
    }
    
    restoreAnswerState(currentQuestionIndex);
}

function restoreAnswerState(index) {
    const q = questions[index];
    const selectedKey = userAnswers[index];
    const isCorrect = selectedKey === q.correctAnswer;
    
    // Disable all options and style them
    const buttons = elements.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.className = 'option-btn'; // Reset classes
        
        if (btn.dataset.key === q.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.dataset.key === selectedKey) {
            btn.classList.add('incorrect');
        }
    });
    
    // Show Feedback
    elements.feedbackPanel.className = `feedback-panel show ${isCorrect ? 'correct-panel' : 'incorrect-panel'}`;
    elements.feedbackHeader.className = `feedback-header ${isCorrect ? 'correct' : 'incorrect'}`;
    elements.feedbackHeader.innerHTML = isCorrect ? 
        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Correct!` : 
        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> Incorrect`;
        
    elements.feedbackText.textContent = q.explanation;
    elements.realWorldText.textContent = q.realWorldApplication;
    
    // Enable Next
    elements.btnNext.disabled = false;
    if (index === questions.length - 1) {
        elements.btnNext.innerHTML = 'Finish <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="5 12 19 12"></polyline><polyline points="12 5 19 12 12 19"></polyline></svg>';
    } else {
        elements.btnNext.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    }
}

function showResults() {
    elements.quizScreen.style.display = 'none';
    elements.resultsScreen.classList.add('show');
    
    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) correctCount++;
    }
    
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    elements.scoreText.textContent = `${percentage}%`;
    elements.scoreCircle.style.setProperty('--progress', `${percentage}%`);
    
    elements.statCorrect.textContent = correctCount;
    elements.statIncorrect.textContent = questions.length - correctCount;
    
    let category = "Needs Improvement";
    if (percentage >= 90) category = "Excellent";
    else if (percentage >= 75) category = "Strong";
    else if (percentage >= 60) category = "Needs Practice";
    
    elements.perfCategory.textContent = category;
}

// Start
document.addEventListener('DOMContentLoaded', init);
