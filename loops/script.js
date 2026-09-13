// Global State
let currentMode = 'practice'; // 'practice', 'exam', 'review'
let currentIndex = 0;
let userAnswers = new Array(questionsData.length).fill(null);
let markedQuestions = new Set();
let timerInterval = null;
let timeRemaining = 30 * 60; // 30 minutes in seconds
let waterLevel = 0;

// DOM Elements
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

const btnPractice = document.getElementById('btn-practice');
const btnExam = document.getElementById('btn-exam');
const btnReview = document.getElementById('btn-review');

const drawerToggle = document.getElementById('drawer-toggle');
const closeDrawerBtn = document.getElementById('close-drawer');
const questionDrawer = document.getElementById('question-drawer');
const gridContainer = document.getElementById('grid-container');

const qNumber = document.getElementById('question-number');
const badgeTopic = document.getElementById('badge-topic');
const badgeDiff = document.getElementById('badge-difficulty');
const badgeLang = document.getElementById('badge-language');
const qText = document.getElementById('question-text');
const codeContainer = document.getElementById('code-container');
const codeBlock = document.getElementById('code-block');
const timerDisplay = document.getElementById('exam-timer');

const optionsGrid = document.getElementById('options-grid');
const optionBtns = document.querySelectorAll('.option-btn');

const feedbackContainer = document.getElementById('feedback-container');
const feedbackHeader = document.getElementById('feedback-header');
const feedbackTitle = document.getElementById('feedback-title');
const expText = document.getElementById('explanation-text');
const trapText = document.getElementById('trap-text');
const trickText = document.getElementById('trick-text');
const appText = document.getElementById('app-text');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSkip = document.getElementById('btn-skip');
const btnMark = document.getElementById('btn-mark');
const btnSubmitExam = document.getElementById('btn-submit-exam');
const currentScoreDisplay = document.getElementById('current-score');

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  } else {
    body.removeAttribute('data-theme');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  }
}

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  }
});

// Initialize Grid Drawer
function initGrid() {
  gridContainer.innerHTML = '';
  questionsData.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.textContent = index + 1;
    btn.addEventListener('click', () => {
      currentIndex = index;
      loadQuestion();
      questionDrawer.classList.remove('open');
    });
    gridContainer.appendChild(btn);
  });
}

function updateGridStyles() {
  const btns = gridContainer.children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = 'grid-btn';
    if (i === currentIndex) btns[i].classList.add('active');
    
    if (currentMode === 'review') {
      if (userAnswers[i] === questionsData[i].correctAnswer) {
        btns[i].classList.add('answered');
      } else if (userAnswers[i] !== null) {
        btns[i].classList.add('incorrect-review');
      } else {
        btns[i].classList.add('skipped');
      }
    } else {
      if (userAnswers[i] !== null) {
        btns[i].classList.add('answered');
      }
    }
    
    if (markedQuestions.has(i)) {
      btns[i].classList.add('marked');
    }
  }
}

drawerToggle.addEventListener('click', () => questionDrawer.classList.add('open'));
closeDrawerBtn.addEventListener('click', () => questionDrawer.classList.remove('open'));

// Load Question
function loadQuestion() {
  const q = questionsData[currentIndex];
  qNumber.textContent = `Question ${currentIndex + 1} of ${questionsData.length}`;
  badgeTopic.textContent = q.topic;
  badgeDiff.textContent = q.difficulty;
  badgeLang.textContent = q.language;
  qText.textContent = q.question;
  
  if (q.code) {
    codeContainer.classList.remove('hidden');
    codeBlock.textContent = q.code;
  } else {
    codeContainer.classList.add('hidden');
  }

  // Populate options
  optionBtns.forEach(btn => {
    const opt = btn.getAttribute('data-opt');
    const textSpan = btn.querySelector('.opt-text');
    textSpan.textContent = q.options[opt];
    btn.className = 'option-btn'; // reset classes
    btn.disabled = false;
  });

  // Update Mark status
  if (markedQuestions.has(currentIndex)) {
    btnMark.classList.add('is-marked');
    btnMark.textContent = 'Unmark';
  } else {
    btnMark.classList.remove('is-marked');
    btnMark.textContent = 'Mark for Review';
  }

  // Restore answer state if answered
  if (userAnswers[currentIndex] !== null) {
    applyAnswerState(userAnswers[currentIndex]);
  } else {
    feedbackContainer.classList.add('hidden');
  }

  // Manage Nav Buttons
  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === questionsData.length - 1;
  
  if (currentMode === 'exam' && currentIndex === questionsData.length - 1) {
    btnNext.classList.add('hidden');
    btnSubmitExam.classList.remove('hidden');
  } else {
    btnNext.classList.remove('hidden');
    btnSubmitExam.classList.add('hidden');
  }

  updateGridStyles();
}

function applyAnswerState(selectedOpt) {
  const q = questionsData[currentIndex];
  
  optionBtns.forEach(btn => {
    const opt = btn.getAttribute('data-opt');
    
    if (currentMode === 'practice' || currentMode === 'review') {
      btn.disabled = true;
      if (opt === q.correctAnswer) {
        btn.classList.add('correct');
      } else if (opt === selectedOpt && selectedOpt !== q.correctAnswer) {
        btn.classList.add('incorrect');
      }
    } else if (currentMode === 'exam') {
      if (opt === selectedOpt) {
        btn.classList.add('selected');
      }
    }
  });

  if (currentMode === 'practice' || currentMode === 'review') {
    showFeedback(selectedOpt === q.correctAnswer);
  }
}

function showFeedback(isCorrect) {
  const q = questionsData[currentIndex];
  feedbackContainer.classList.remove('hidden');
  
  if (userAnswers[currentIndex] === null) {
    // Skipped in review mode
    feedbackHeader.className = 'feedback-header info';
    feedbackTitle.textContent = `Skipped. Correct Answer: ${q.correctAnswer}`;
  } else if (isCorrect) {
    feedbackHeader.className = 'feedback-header success';
    feedbackTitle.textContent = 'Correct!';
  } else {
    feedbackHeader.className = 'feedback-header error';
    feedbackTitle.textContent = `Incorrect. Correct Answer: ${q.correctAnswer}`;
  }

  expText.textContent = q.explanation;
  trapText.textContent = q.examTrap;
  trickText.textContent = q.quickTrick;
  appText.textContent = q.realWorldApplication;
}

// Option Clicking
optionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentMode === 'review') return;
    if (currentMode === 'practice' && userAnswers[currentIndex] !== null) return;

    const opt = btn.getAttribute('data-opt');
    userAnswers[currentIndex] = opt;
    
    if (currentMode === 'practice') {
      const isCorrect = opt === questionsData[currentIndex].correctAnswer;
      if (isCorrect) {
        waterLevel = Math.min(questionsData.length, waterLevel + 1);
        updateWaterBar('pour');
        updateScoreDisplay();
      } else {
        waterLevel = Math.max(0, waterLevel - 1);
        updateWaterBar('leak');
      }
    } else if (currentMode === 'exam') {
      // Act as a normal progress bar in Exam mode
      waterLevel = userAnswers.filter(a => a !== null).length;
      updateWaterBar('pour');
    }
    
    applyAnswerState(opt);
    updateGridStyles();
  });
});

function updateScoreDisplay() {
  let score = 0;
  for (let i = 0; i < questionsData.length; i++) {
    if (userAnswers[i] === questionsData[i].correctAnswer) score++;
  }
  currentScoreDisplay.textContent = score;
}

function updateWaterBar(action) {
  const waterBar = document.getElementById('water-bar');
  const pourStream = document.getElementById('pour-stream');
  const maxWater = questionsData.length;
  const pct = Math.min(100, Math.max(0, (waterLevel / maxWater) * 100));
  
  if (waterBar) {
    waterBar.style.height = `${pct}%`;
    
    if (action === 'pour' && pourStream) {
      pourStream.classList.remove('pouring');
      void pourStream.offsetWidth; // trigger reflow
      pourStream.classList.add('pouring');
    } else if (action === 'leak') {
      createLeakDrops();
    }
  }
}

function createLeakDrops() {
  const leakContainer = document.getElementById('leak-container');
  if (!leakContainer) return;
  
  for (let i = 0; i < 3; i++) {
    const drop = document.createElement('div');
    drop.className = 'leak-drop';
    drop.style.left = `calc(50% - 6px + ${Math.random() * 8 - 4}px)`;
    drop.style.animationDelay = `${Math.random() * 0.2}s`;
    leakContainer.appendChild(drop);
    setTimeout(() => {
      if (leakContainer.contains(drop)) drop.remove();
    }, 700);
  }
}

// Navigation Actions
btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) { currentIndex--; loadQuestion(); }
});
btnNext.addEventListener('click', () => {
  if (currentIndex < questionsData.length - 1) { currentIndex++; loadQuestion(); }
});
btnSkip.addEventListener('click', () => {
  if (currentMode === 'practice' || currentMode === 'exam') {
    if (currentIndex < questionsData.length - 1) { currentIndex++; loadQuestion(); }
  }
});
btnMark.addEventListener('click', () => {
  if (markedQuestions.has(currentIndex)) {
    markedQuestions.delete(currentIndex);
  } else {
    markedQuestions.add(currentIndex);
  }
  loadQuestion();
});

// Mode Switching
function switchMode(mode) {
  currentMode = mode;
  
  // Reset States if changing to Exam/Practice
  if (mode !== 'review') {
    userAnswers.fill(null);
    markedQuestions.clear();
    currentIndex = 0;
    waterLevel = 0;
    updateWaterBar();
    updateScoreDisplay();
  }

  btnPractice.classList.toggle('active', mode === 'practice');
  btnExam.classList.toggle('active', mode === 'exam');
  btnReview.classList.toggle('active', mode === 'review');

  if (mode === 'exam') {
    timerDisplay.classList.remove('hidden');
    startTimer();
    feedbackContainer.classList.add('hidden');
  } else {
    timerDisplay.classList.add('hidden');
    clearInterval(timerInterval);
  }

  if (mode === 'review') {
    btnReview.disabled = false;
  } else {
    btnReview.disabled = true; // Review only available after exam
  }

  loadQuestion();
}

btnPractice.addEventListener('click', () => {
  if (confirm("Switch to Practice Mode? Progress will be reset.")) switchMode('practice');
});
btnExam.addEventListener('click', () => {
  if (confirm("Start Exam Mode? 30 minute timer will begin.")) switchMode('exam');
});
btnReview.addEventListener('click', () => {
  // Only accessible programmatically after exam submission
});
btnReview.disabled = true;

// Timer Logic
function startTimer() {
  clearInterval(timerInterval);
  timeRemaining = 30 * 60;
  updateTimerDisplay();
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
  const s = (timeRemaining % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${m}:${s}`;
  if (timeRemaining < 300) {
    timerDisplay.style.color = 'var(--danger-color)';
  } else {
    timerDisplay.style.color = 'var(--text-primary)';
  }
}

// Exam Submission
btnSubmitExam.addEventListener('click', () => {
  if (confirm("Are you sure you want to submit the exam?")) {
    submitExam();
  }
});

function submitExam() {
  clearInterval(timerInterval);
  updateScoreDisplay();
  
  let correct = 0, incorrect = 0, skipped = 0;
  const diffStats = { Easy: {c:0, t:0}, Medium: {c:0, t:0}, Hard: {c:0, t:0} };
  const topicStats = {};

  questionsData.forEach((q, i) => {
    const ans = userAnswers[i];
    diffStats[q.difficulty].t++;
    
    if (!topicStats[q.topic]) topicStats[q.topic] = {c:0, t:0};
    topicStats[q.topic].t++;

    if (ans === null) {
      skipped++;
    } else if (ans === q.correctAnswer) {
      correct++;
      diffStats[q.difficulty].c++;
      topicStats[q.topic].c++;
    } else {
      incorrect++;
    }
  });

  const percentage = Math.round((correct / questionsData.length) * 100);
  
  // Populate Modal
  document.getElementById('res-score').textContent = `${correct} / ${questionsData.length}`;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-incorrect').textContent = incorrect;
  document.getElementById('res-skipped').textContent = skipped;
  document.getElementById('score-percentage').textContent = `${percentage}%`;
  
  const circlePath = document.getElementById('score-circle-path');
  circlePath.style.strokeDasharray = `${percentage}, 100`;
  
  const perfLabel = document.getElementById('performance-label');
  if (percentage >= 80) {
    perfLabel.textContent = "Excellent Performance! MNC Ready.";
    circlePath.style.stroke = "var(--success-color)";
  } else if (percentage >= 60) {
    perfLabel.textContent = "Good, but needs more review.";
    circlePath.style.stroke = "var(--warning-color)";
  } else {
    perfLabel.textContent = "Needs Improvement. Practice more.";
    circlePath.style.stroke = "var(--danger-color)";
  }

  // Difficulty Stats
  const diffContainer = document.getElementById('diff-stats');
  diffContainer.innerHTML = '';
  ['Easy', 'Medium', 'Hard'].forEach(level => {
    const d = diffStats[level];
    const pct = d.t === 0 ? 0 : Math.round((d.c / d.t) * 100);
    diffContainer.innerHTML += `
      <div class="diff-bar">
        <span class="diff-label">${level}</span>
        <div class="diff-track"><div class="diff-fill" style="width: ${pct}%"></div></div>
        <span class="diff-pct">${pct}%</span>
      </div>
    `;
  });

  // Weak Topics
  const weakTopicsList = document.getElementById('weak-topics-list');
  weakTopicsList.innerHTML = '';
  const sortedTopics = Object.keys(topicStats).map(t => ({
    topic: t,
    pct: Math.round((topicStats[t].c / topicStats[t].t) * 100)
  })).sort((a, b) => a.pct - b.pct).slice(0, 3);
  
  sortedTopics.forEach(st => {
    weakTopicsList.innerHTML += `<li>${st.topic} (${st.pct}%)</li>`;
  });

  document.getElementById('results-modal').classList.add('open');
}

// Modal Actions
document.getElementById('btn-review-mistakes').addEventListener('click', () => {
  document.getElementById('results-modal').classList.remove('open');
  currentMode = 'review';
  btnPractice.classList.remove('active');
  btnExam.classList.remove('active');
  btnReview.classList.add('active');
  btnReview.disabled = false;
  timerDisplay.classList.add('hidden');
  
  // Jump to first incorrect/skipped
  currentIndex = userAnswers.findIndex((ans, i) => ans !== questionsData[i].correctAnswer);
  if (currentIndex === -1) currentIndex = 0;
  
  loadQuestion();
});

document.getElementById('btn-restart').addEventListener('click', () => {
  document.getElementById('results-modal').classList.remove('open');
  switchMode('practice');
});

// Initialization Call
initTheme();
initGrid();
loadQuestion();
