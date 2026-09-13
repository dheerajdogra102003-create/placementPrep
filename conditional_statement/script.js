// State
let appState = {
    mode: 'dashboard', // dashboard, practice, quiz, results
    currentQuestions: [],
    currentIndex: 0,
    userAnswers: {}, // key: index, value: selectedOption
    score: 0,
    timer: 0,
    timerInterval: null,
    markedForReview: new Set(),
    quizSubmitted: false
};

// DOM Elements
const views = {
    dashboard: document.getElementById('view-dashboard'),
    question: document.getElementById('view-question'),
    results: document.getElementById('view-results')
};

const navBtns = {
    dashboard: document.getElementById('nav-dashboard'),
    practice: document.getElementById('nav-practice'),
    quiz: document.getElementById('nav-quiz')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateDashboardStats();
    attachEventListeners();
});

function attachEventListeners() {
    navBtns.dashboard.addEventListener('click', () => switchMode('dashboard'));
    navBtns.practice.addEventListener('click', () => startPracticeMode(questions));
    navBtns.quiz.addEventListener('click', () => startQuizMode());

    document.getElementById('btn-start-practice').addEventListener('click', () => startPracticeMode(questions));
    document.getElementById('btn-start-quiz').addEventListener('click', () => startQuizMode());
    document.getElementById('btn-start-hard').addEventListener('click', () => {
        const hardQs = questions.filter(q => q.difficulty === 'Hard' || q.difficulty === 'Very Hard');
        startPracticeMode(hardQs);
    });
    document.getElementById('btn-review-marked').addEventListener('click', () => {
        if(appState.markedForReview.size === 0) return alert('No questions marked for review.');
        const markedQs = questions.filter(q => appState.markedForReview.has(q.id));
        startPracticeMode(markedQs);
    });

    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-prev').addEventListener('click', prevQuestion);
    document.getElementById('btn-show-explanation').addEventListener('click', showExplanation);
    document.getElementById('btn-mark-review').addEventListener('click', toggleMarkReview);
    document.getElementById('btn-submit-quiz').addEventListener('click', submitQuiz);

    document.getElementById('btn-back-dashboard').addEventListener('click', () => switchMode('dashboard'));
    document.getElementById('btn-review-test').addEventListener('click', () => {
        switchMode('question');
        renderQuestion();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (appState.mode === 'practice' || appState.mode === 'quiz') {
            if (e.key === 'ArrowRight') nextQuestion();
            if (e.key === 'ArrowLeft') prevQuestion();
            if (e.key.toLowerCase() === 'r') toggleMarkReview();
            if (['1', '2', '3', '4'].includes(e.key)) {
                const optionsMap = ['A', 'B', 'C', 'D'];
                selectOption(optionsMap[parseInt(e.key) - 1]);
            }
        }
    });
}

function switchMode(mode) {
    appState.mode = mode;
    Object.values(views).forEach(v => v.classList.remove('active'));
    Object.values(navBtns).forEach(b => b.classList.remove('active'));
    
    if (mode === 'dashboard') {
        views.dashboard.classList.add('active');
        navBtns.dashboard.classList.add('active');
        updateDashboardStats();
        clearInterval(appState.timerInterval);
    } else if (mode === 'practice' || mode === 'quiz') {
        views.question.classList.add('active');
        if (mode === 'practice') navBtns.practice.classList.add('active');
        if (mode === 'quiz') navBtns.quiz.classList.add('active');
    } else if (mode === 'results') {
        views.results.classList.add('active');
    }
}

function startPracticeMode(questionSet) {
    appState.currentQuestions = questionSet;
    appState.currentIndex = 0;
    appState.userAnswers = {};
    appState.quizSubmitted = false;
    document.getElementById('timer-display').classList.add('hidden');
    document.getElementById('btn-submit-quiz').classList.add('hidden');
    document.getElementById('btn-show-explanation').classList.remove('hidden');
    switchMode('practice');
    renderQuestion();
}

function startQuizMode() {
    // 20 random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    appState.currentQuestions = shuffled.slice(0, 20);
    appState.currentIndex = 0;
    appState.userAnswers = {};
    appState.quizSubmitted = false;
    
    document.getElementById('timer-display').classList.remove('hidden');
    document.getElementById('btn-submit-quiz').classList.remove('hidden');
    document.getElementById('btn-show-explanation').classList.add('hidden');
    
    startTimer(20 * 60); // 20 minutes
    switchMode('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = appState.currentQuestions[appState.currentIndex];
    
    document.getElementById('q-number').innerText = `Question ${appState.currentIndex + 1} of ${appState.currentQuestions.length}`;
    document.getElementById('q-difficulty').innerText = q.difficulty;
    document.getElementById('q-difficulty').setAttribute('data-level', q.difficulty);
    document.getElementById('q-concept').innerText = q.concept;
    document.getElementById('q-language').innerText = q.language;
    document.getElementById('q-text').innerText = q.question;

    const codeContainer = document.getElementById('q-code-container');
    if (q.code) {
        document.getElementById('q-code').innerText = q.code;
        codeContainer.classList.remove('hidden');
    } else {
        codeContainer.classList.add('hidden');
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((opt, idx) => {
        const letter = letters[idx];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="opt-letter">${letter}</span> ${opt}`;
        btn.onclick = () => selectOption(letter);
        
        // Restore state
        const savedAnswer = appState.userAnswers[appState.currentIndex];
        if (savedAnswer === letter) {
            btn.classList.add('selected');
        }

        // Show correct/incorrect if practice mode and answered, OR if quiz submitted
        if ((appState.mode === 'practice' && savedAnswer) || appState.quizSubmitted) {
            if (letter === q.correct_answer) btn.classList.add('correct');
            else if (savedAnswer === letter) btn.classList.add('incorrect');
            btn.disabled = true; // disable after answer shown
        }
        
        optionsContainer.appendChild(btn);
    });

    const markBtn = document.getElementById('btn-mark-review');
    if (appState.markedForReview.has(q.id)) markBtn.classList.add('marked');
    else markBtn.classList.remove('marked');

    document.getElementById('btn-prev').disabled = appState.currentIndex === 0;
    
    // In practice mode, next is disabled until answered, unless just reviewing
    if(appState.mode === 'practice') {
        document.getElementById('btn-next').disabled = false;
        // auto show explanation if answered
        if (appState.userAnswers[appState.currentIndex]) {
            showExplanation();
        } else {
            hideExplanation();
        }
    } else { // quiz mode
        hideExplanation();
        if (appState.quizSubmitted) {
            showExplanation();
        }
    }
}

function selectOption(letter) {
    if (appState.quizSubmitted) return;
    if (appState.mode === 'practice' && appState.userAnswers[appState.currentIndex]) return; // already answered
    
    appState.userAnswers[appState.currentIndex] = letter;
    
    // Save attempt logic for dashboard stats
    let progress = JSON.parse(localStorage.getItem('mncProgress')) || { attempted: 0, correct: 0, incorrect: 0, weak: {} };
    progress.attempted++;
    const q = appState.currentQuestions[appState.currentIndex];
    
    if (letter === q.correct_answer) progress.correct++;
    else {
        progress.incorrect++;
        progress.weak[q.concept] = (progress.weak[q.concept] || 0) + 1;
    }
    localStorage.setItem('mncProgress', JSON.stringify(progress));

    renderQuestion(); // Re-render to show selection styling
}

function nextQuestion() {
    if (appState.currentIndex < appState.currentQuestions.length - 1) {
        appState.currentIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (appState.currentIndex > 0) {
        appState.currentIndex--;
        renderQuestion();
    }
}

function showExplanation() {
    const q = appState.currentQuestions[appState.currentIndex];
    const userAns = appState.userAnswers[appState.currentIndex];
    
    const panel = document.getElementById('explanation-panel');
    const status = document.getElementById('exp-status');
    
    if (userAns) {
        if (userAns === q.correct_answer) {
            status.innerText = "Correct!";
            status.className = "status-correct";
        } else {
            status.innerText = "Incorrect";
            status.className = "status-incorrect";
        }
    } else {
        status.innerText = "Explanation";
        status.className = "";
    }

    document.getElementById('exp-correct-ans').innerText = `Option ${q.correct_answer}`;
    document.getElementById('exp-reasoning').innerText = q.explanation;
    
    const wrongList = document.getElementById('exp-wrong-options');
    wrongList.innerHTML = '';
    ['A', 'B', 'C', 'D'].forEach(opt => {
        if (opt !== q.correct_answer && q.why_other_options_are_wrong[opt]) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${opt}:</strong> ${q.why_other_options_are_wrong[opt]}`;
            wrongList.appendChild(li);
        }
    });

    document.getElementById('exp-trap').innerText = q.common_trap;
    document.getElementById('exp-shortcut').innerText = q.shortcut;

    panel.classList.remove('hidden');
    
    // Highlight options
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(btn => {
        btn.disabled = true;
        const letter = btn.innerText.trim().charAt(0);
        if (letter === q.correct_answer) btn.classList.add('correct');
        else if (userAns === letter) btn.classList.add('incorrect');
    });
}

function hideExplanation() {
    document.getElementById('explanation-panel').classList.add('hidden');
}

function toggleMarkReview() {
    const q = appState.currentQuestions[appState.currentIndex];
    if (appState.markedForReview.has(q.id)) {
        appState.markedForReview.delete(q.id);
    } else {
        appState.markedForReview.add(q.id);
    }
    
    let marks = Array.from(appState.markedForReview);
    localStorage.setItem('mncMarked', JSON.stringify(marks));
    
    renderQuestion();
}

function startTimer(seconds) {
    appState.timer = seconds;
    updateTimerDisplay();
    clearInterval(appState.timerInterval);
    appState.timerInterval = setInterval(() => {
        appState.timer--;
        updateTimerDisplay();
        if (appState.timer <= 0) {
            clearInterval(appState.timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(appState.timer / 60).toString().padStart(2, '0');
    const s = (appState.timer % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
}

function submitQuiz() {
    clearInterval(appState.timerInterval);
    appState.quizSubmitted = true;
    
    let score = 0;
    appState.currentQuestions.forEach((q, idx) => {
        if (appState.userAnswers[idx] === q.correct_answer) score++;
    });
    
    const accuracy = Math.round((score / appState.currentQuestions.length) * 100) || 0;
    let level = "Needs significant preparation";
    if (accuracy >= 90) level = "Excellent — placement ready";
    else if (accuracy >= 75) level = "Strong — minor improvement needed";
    else if (accuracy >= 60) level = "Average — more practice required";
    else if (accuracy >= 40) level = "Weak — revise concepts and practice";

    document.getElementById('res-score').innerText = `${score} / ${appState.currentQuestions.length}`;
    document.getElementById('res-level').innerText = level;
    document.getElementById('res-accuracy').innerText = `${accuracy}%`;
    
    const timeUsed = (20 * 60) - appState.timer;
    const m = Math.floor(timeUsed / 60).toString().padStart(2, '0');
    const s = (timeUsed % 60).toString().padStart(2, '0');
    document.getElementById('res-time').innerText = `${m}:${s}`;
    
    switchMode('results');
}

function loadProgress() {
    let marks = JSON.parse(localStorage.getItem('mncMarked')) || [];
    appState.markedForReview = new Set(marks);
}

function updateDashboardStats() {
    const progress = JSON.parse(localStorage.getItem('mncProgress')) || { attempted: 0, correct: 0, incorrect: 0, weak: {} };
    
    document.getElementById('stat-attempted').innerText = `${progress.attempted} / 50`;
    
    const accuracy = progress.attempted ? Math.round((progress.correct / progress.attempted) * 100) : 0;
    document.getElementById('stat-accuracy').innerText = `${accuracy}%`;
    
    document.getElementById('stat-marked').innerText = appState.markedForReview.size;

    let weakest = "None";
    let maxWrong = 0;
    for (const [concept, count] of Object.entries(progress.weak)) {
        if (count > maxWrong) {
            maxWrong = count;
            weakest = concept;
        }
    }
    document.getElementById('stat-weakest').innerText = maxWrong > 0 ? weakest : "None";
}
