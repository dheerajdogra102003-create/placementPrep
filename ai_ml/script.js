/**
 * PlacementPrep - AI, Machine Learning & Deep Learning Practice Engine
 * Interactive logic for Practice, 60m Exam Simulation, Flashcards, and Revision Cheatsheet
 */

// Application State
let currentMode = 'welcome'; // 'welcome' | 'practice' | 'exam' | 'flashcards'
let allQuestions = [];
let filteredQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // { questionId: 'A' | 'B' | 'C' | 'D' }
let bookmarkedIds = new Set();
let examTimerInterval = null;
let examTimeRemaining = 3600; // 60 minutes in seconds
let examStartTime = null;
let examSubmitted = false;

// DOM Elements
const screenWelcome = document.getElementById('screen-welcome');
const screenWorkspace = document.getElementById('screen-workspace');
const screenFlashcards = document.getElementById('screen-flashcards');
const screenResults = document.getElementById('screen-results');

const headerModeBadge = document.getElementById('header-mode-badge');
const timerBox = document.getElementById('timer-box');
const timerDisplay = document.getElementById('timer-display');
const scoreValue = document.getElementById('score-value');
const themeToggleBtn = document.getElementById('theme-toggle');

const filterSection = document.getElementById('filter-section');
const filterDifficulty = document.getElementById('filter-difficulty');
const filterType = document.getElementById('filter-type');
const searchInput = document.getElementById('search-input');

const qIdTag = document.getElementById('q-id-tag');
const qSectionTag = document.getElementById('q-section-tag');
const qTopicTag = document.getElementById('q-topic-tag');
const qDiffTag = document.getElementById('q-diff-tag');
const qTypeTag = document.getElementById('q-type-tag');
const btnBookmark = document.getElementById('btn-bookmark');
const qText = document.getElementById('q-text');
const codeSnippetBox = document.getElementById('code-snippet-box');
const codeSnippetText = document.getElementById('code-snippet-text');
const optionsContainer = document.getElementById('options-container');

const explanationBox = document.getElementById('explanation-box');
const expText = document.getElementById('exp-text');
const distractorsList = document.getElementById('distractors-list');
const placementTipText = document.getElementById('placement-tip-text');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const paletteGrid = document.getElementById('palette-grid');
const paletteCounter = document.getElementById('palette-counter');
const answeredCount = document.getElementById('answered-count');
const examSubmitBox = document.getElementById('exam-submit-box');

// Flashcards Elements
const fcTopic = document.getElementById('fc-topic');
const fcPrompt = document.getElementById('fc-prompt');
const fcAnswer = document.getElementById('fc-answer');
const fcCounter = document.getElementById('fc-counter');
let flashcardIndex = 0;
let flashcardFlipped = false;

// Notes Modal
const notesModal = document.getElementById('notes-modal');
const btnOpenNotes = document.getElementById('btn-open-notes');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Load question dataset
    if (typeof AI_ML_QUESTIONS !== 'undefined') {
        allQuestions = AI_ML_QUESTIONS;
    } else if (typeof window.questionsData !== 'undefined') {
        allQuestions = window.questionsData;
    } else {
        console.error("Dataset not loaded!");
        return;
    }

    // Load saved bookmarks from localStorage
    try {
        const savedBookmarks = JSON.parse(localStorage.getItem('ai_ml_bookmarks') || '[]');
        bookmarkedIds = new Set(savedBookmarks);
    } catch (e) {
        bookmarkedIds = new Set();
    }

    filteredQuestions = [...allQuestions];

    // Theme Toggle Handler
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('placementPrep_theme', nextTheme);
        localStorage.setItem('placementprep-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    });

    // Notes Modal Listeners
    if (btnOpenNotes) {
        btnOpenNotes.addEventListener('click', openNotesModal);
    }
    
    // Close modal on click outside
    if (notesModal) {
        notesModal.addEventListener('click', (e) => {
            if (e.target === notesModal) {
                closeNotesModal();
            }
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (currentMode === 'practice' || currentMode === 'exam') {
            if (e.key === 'ArrowLeft' && !btnPrev.disabled) {
                navigatePrev();
            } else if (e.key === 'ArrowRight' && !btnNext.disabled) {
                navigateNext();
            } else if (['1', '2', '3', '4'].includes(e.key)) {
                const optLetters = ['A', 'B', 'C', 'D'];
                const selectedOpt = optLetters[parseInt(e.key) - 1];
                selectOption(selectedOpt);
            }
        } else if (currentMode === 'flashcards') {
            if (e.key === ' ' || e.key === 'Enter') {
                flipFlashcard();
            } else if (e.key === 'ArrowLeft') {
                prevFlashcard();
            } else if (e.key === 'ArrowRight') {
                nextFlashcard();
            }
        }
    });
});

// --- Mode Switching ---
function startMode(mode) {
    currentMode = mode;
    examSubmitted = false;

    // Hide all screens
    screenWelcome.classList.add('hidden');
    screenWorkspace.classList.add('hidden');
    screenFlashcards.classList.add('hidden');
    screenResults.classList.add('hidden');

    if (mode === 'practice') {
        headerModeBadge.textContent = 'Practice Mode';
        headerModeBadge.className = 'badge mode-tag';
        timerBox.classList.add('hidden');
        examSubmitBox.classList.add('hidden');
        screenWorkspace.classList.remove('hidden');
        
        applyFilters();
        renderCurrentQuestion();
        renderPalette();
        updateScore();
    } else if (mode === 'exam') {
        headerModeBadge.textContent = 'Exam Mode (60m)';
        headerModeBadge.className = 'badge mode-tag';
        timerBox.classList.remove('hidden');
        examSubmitBox.classList.remove('hidden');
        screenWorkspace.classList.remove('hidden');

        // Reset answers & filters for clean exam session
        userAnswers = {};
        filterSection.value = 'all';
        filterDifficulty.value = 'all';
        filterType.value = 'all';
        searchInput.value = '';
        filteredQuestions = [...allQuestions];
        currentIndex = 0;

        startExamTimer();
        renderCurrentQuestion();
        renderPalette();
        updateScore();
    } else if (mode === 'flashcards') {
        headerModeBadge.textContent = 'Flashcards';
        timerBox.classList.add('hidden');
        screenFlashcards.classList.remove('hidden');
        flashcardIndex = 0;
        flashcardFlipped = false;
        renderFlashcard();
    }
}

// --- Question Rendering ---
function renderCurrentQuestion() {
    if (filteredQuestions.length === 0) {
        qText.innerHTML = "<em>No questions match the current filter criteria.</em>";
        optionsContainer.innerHTML = "";
        codeSnippetBox.classList.add('hidden');
        explanationBox.classList.add('hidden');
        return;
    }

    const q = filteredQuestions[currentIndex];

    // Header Tags
    qIdTag.textContent = q.id;
    qSectionTag.textContent = q.section;
    qTopicTag.textContent = q.topic;
    qDiffTag.textContent = q.difficulty;
    qDiffTag.className = `tag-badge tag-diff-${q.difficulty}`;
    qTypeTag.textContent = formatQuestionType(q.question_type);

    // Bookmark State
    if (bookmarkedIds.has(q.id)) {
        btnBookmark.classList.add('active');
        btnBookmark.innerHTML = '★ Bookmarked';
    } else {
        btnBookmark.classList.remove('active');
        btnBookmark.innerHTML = '☆ Bookmark';
    }

    // Question Text
    qText.textContent = q.question;

    // Code Snippet
    if (q.codeSnippet && q.codeSnippet.trim().length > 0) {
        codeSnippetText.textContent = q.codeSnippet;
        codeSnippetBox.classList.remove('hidden');
    } else {
        codeSnippetBox.classList.add('hidden');
    }

    // Options Rendering
    optionsContainer.innerHTML = '';
    const selectedAns = userAnswers[q.id];
    const isAnswered = selectedAns !== undefined;

    const optionKeys = ['A', 'B', 'C', 'D'];
    optionKeys.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.onclick = () => selectOption(opt);

        if (currentMode === 'practice' || examSubmitted) {
            if (isAnswered) {
                if (opt === q.correct_answer) {
                    btn.classList.add('correct');
                } else if (opt === selectedAns) {
                    btn.classList.add('wrong');
                }
            }
        } else if (currentMode === 'exam') {
            if (opt === selectedAns) {
                btn.classList.add('selected');
            }
        }

        btn.innerHTML = `
            <span class="opt-letter">${opt}</span>
            <span class="option-text">${escapeHtml(q.options[opt])}</span>
        `;
        optionsContainer.appendChild(btn);
    });

    // Explanation Panel
    if ((currentMode === 'practice' && isAnswered) || examSubmitted) {
        expText.textContent = q.explanation;
        
        // Distractor Breakdown
        distractorsList.innerHTML = '';
        if (q.why_other_options_are_wrong) {
            for (const [wrongOpt, reason] of Object.entries(q.why_other_options_are_wrong)) {
                const item = document.createElement('div');
                item.className = 'distractor-item';
                item.innerHTML = `<strong>Option ${wrongOpt}:</strong> ${escapeHtml(reason)}`;
                distractorsList.appendChild(item);
            }
        }

        // Placement Tip
        placementTipText.textContent = q.placement_tip;
        explanationBox.classList.remove('hidden');
    } else {
        explanationBox.classList.add('hidden');
    }

    // Update Navigation Buttons
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === filteredQuestions.length - 1;
    
    // Update Counter & Palette
    paletteCounter.textContent = `${currentIndex + 1} / ${filteredQuestions.length}`;
    updatePaletteActiveState();
}

function selectOption(opt) {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentIndex];

    // In practice mode, allow changing or re-checking
    userAnswers[q.id] = opt;
    
    renderCurrentQuestion();
    renderPalette();
    updateScore();
}

function clearCurrentAnswer() {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentIndex];
    delete userAnswers[q.id];
    renderCurrentQuestion();
    renderPalette();
    updateScore();
}

function toggleBookmarkCurrent() {
    if (filteredQuestions.length === 0) return;
    const q = filteredQuestions[currentIndex];
    if (bookmarkedIds.has(q.id)) {
        bookmarkedIds.delete(q.id);
    } else {
        bookmarkedIds.add(q.id);
    }
    try {
        localStorage.setItem('ai_ml_bookmarks', JSON.stringify([...bookmarkedIds]));
    } catch (e) {}
    
    renderCurrentQuestion();
    renderPalette();
}

// --- Navigation ---
function navigatePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        renderCurrentQuestion();
    }
}

function navigateNext() {
    if (currentIndex < filteredQuestions.length - 1) {
        currentIndex++;
        renderCurrentQuestion();
    }
}

function jumpToQuestion(qIndex) {
    if (qIndex >= 0 && qIndex < filteredQuestions.length) {
        currentIndex = qIndex;
        renderCurrentQuestion();
    }
}

// --- Question Palette ---
function renderPalette() {
    paletteGrid.innerHTML = '';
    let answered = 0;

    filteredQuestions.forEach((q, idx) => {
        const item = document.createElement('button');
        item.className = 'palette-item';
        item.textContent = (idx + 1);
        item.title = `${q.id}: ${q.topic} (${q.difficulty})`;
        item.onclick = () => jumpToQuestion(idx);

        const ans = userAnswers[q.id];
        if (ans !== undefined) {
            answered++;
            if (currentMode === 'practice' || examSubmitted) {
                if (ans === q.correct_answer) {
                    item.classList.add('correct');
                } else {
                    item.classList.add('wrong');
                }
            } else if (currentMode === 'exam') {
                item.classList.add('active');
            }
        }

        if (bookmarkedIds.has(q.id)) {
            item.classList.add('bookmarked');
        }

        if (idx === currentIndex) {
            item.classList.add('active');
        }

        paletteGrid.appendChild(item);
    });

    answeredCount.textContent = answered;
}

function updatePaletteActiveState() {
    const items = paletteGrid.querySelectorAll('.palette-item');
    items.forEach((item, idx) => {
        if (idx === currentIndex) {
            item.classList.add('active');
        } else {
            // Keep active class only if it represents answered in exam mode
            if (currentMode !== 'exam' || !userAnswers[filteredQuestions[idx]?.id]) {
                item.classList.remove('active');
            }
        }
    });
}

function updateScore() {
    let correct = 0;
    for (const q of allQuestions) {
        if (userAnswers[q.id] === q.correct_answer) {
            correct++;
        }
    }
    scoreValue.textContent = correct;
}

// --- Filtering ---
function applyFilters() {
    const sec = filterSection.value;
    const diff = filterDifficulty.value;
    const qType = filterType.value;
    const search = searchInput.value.trim().toLowerCase();

    filteredQuestions = allQuestions.filter(q => {
        if (sec !== 'all' && q.section !== sec) return false;
        if (diff !== 'all' && q.difficulty !== diff) return false;
        if (qType !== 'all' && q.question_type !== qType) return false;
        if (search.length > 0) {
            const haystack = `${q.question} ${q.concept} ${q.topic} ${q.id} ${q.explanation}`.toLowerCase();
            if (!haystack.includes(search)) return false;
        }
        return true;
    });

    currentIndex = 0;
    renderCurrentQuestion();
    renderPalette();
}

// --- Exam Simulation ---
function startExamTimer() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    examTimeRemaining = 3600; // 60 minutes
    examStartTime = Date.now();
    updateTimerDisplay();

    examTimerInterval = setInterval(() => {
        examTimeRemaining--;
        updateTimerDisplay();

        if (examTimeRemaining <= 0) {
            clearInterval(examTimerInterval);
            alert("Time is up! Submitting your MNC technical assessment now.");
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerDisplay.textContent = formatted;

    if (examTimeRemaining < 300) { // Under 5 minutes
        timerBox.classList.add('urgent');
    } else {
        timerBox.classList.remove('urgent');
    }
}

function finishExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    examSubmitted = true;
    timerBox.classList.add('hidden');

    const totalTimeSpent = Math.floor((Date.now() - examStartTime) / 1000);
    const spentMins = Math.floor(totalTimeSpent / 60);
    const spentSecs = totalTimeSpent % 60;

    // Calculate Scores
    let totalCorrect = 0;
    let aiCorrect = 0, mlCorrect = 0, dlCorrect = 0;

    allQuestions.forEach(q => {
        const isCorrect = userAnswers[q.id] === q.correct_answer;
        if (isCorrect) {
            totalCorrect++;
            if (q.section === 'Artificial Intelligence') aiCorrect++;
            else if (q.section === 'Machine Learning') mlCorrect++;
            else if (q.section === 'Deep Learning') dlCorrect++;
        }
    });

    // Populate Results Screen
    document.getElementById('results-score-big').textContent = totalCorrect;
    document.getElementById('res-ai-score').textContent = `${aiCorrect} / 20`;
    document.getElementById('res-ml-score').textContent = `${mlCorrect} / 50`;
    document.getElementById('res-dl-score').textContent = `${dlCorrect} / 30`;
    document.getElementById('res-accuracy').textContent = `${Math.round((totalCorrect / 100) * 100)}%`;
    document.getElementById('res-time-taken').textContent = `${spentMins}m ${spentSecs}s`;

    const verdictMsg = document.getElementById('results-verdict-msg');
    if (totalCorrect >= 70) {
        verdictMsg.textContent = "Outstanding Performance! Strong recommendation for Top MNC Technical Recruitment.";
        verdictMsg.style.color = "var(--success)";
    } else if (totalCorrect >= 50) {
        verdictMsg.textContent = "Cleared Technical Cutoff. Focus on weak ML/DL areas to improve ranking.";
        verdictMsg.style.color = "var(--warning)";
    } else {
        verdictMsg.textContent = "Cutoff missed. Review the Placement Cheatsheet and practice question explanations.";
        verdictMsg.style.color = "var(--danger)";
    }

    screenWorkspace.classList.add('hidden');
    screenResults.classList.remove('hidden');
}

function reviewExamAnswers() {
    screenResults.classList.add('hidden');
    screenWorkspace.classList.remove('hidden');
    headerModeBadge.textContent = 'Exam Review';
    renderCurrentQuestion();
    renderPalette();
}

// --- Flashcards ---
function renderFlashcard() {
    if (allQuestions.length === 0) return;
    const q = allQuestions[flashcardIndex];

    fcTopic.textContent = `${q.section} • ${q.topic}`;
    fcPrompt.textContent = q.question;
    fcAnswer.innerHTML = `<strong>Correct Answer (${q.correct_answer}):</strong> ${escapeHtml(q.options[q.correct_answer])}<br><br><small>${escapeHtml(q.explanation)}</small>`;
    
    if (flashcardFlipped) {
        fcPrompt.classList.add('hidden');
        fcAnswer.classList.remove('hidden');
    } else {
        fcPrompt.classList.remove('hidden');
        fcAnswer.classList.add('hidden');
    }

    fcCounter.textContent = `${flashcardIndex + 1} / ${allQuestions.length}`;
}

function flipFlashcard() {
    flashcardFlipped = !flashcardFlipped;
    renderFlashcard();
}

function prevFlashcard() {
    if (flashcardIndex > 0) {
        flashcardIndex--;
        flashcardFlipped = false;
        renderFlashcard();
    }
}

function nextFlashcard() {
    if (flashcardIndex < allQuestions.length - 1) {
        flashcardIndex++;
        flashcardFlipped = false;
        renderFlashcard();
    }
}

// --- Notes Modal ---
function openNotesModal() {
    notesModal.classList.remove('hidden');
}

function closeNotesModal() {
    notesModal.classList.add('hidden');
}

// --- Copy Snippet ---
function copySnippetCode() {
    const text = codeSnippetText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Code snippet copied to clipboard!");
    });
}

// --- Helper Functions ---
function formatQuestionType(type) {
    if (!type) return 'Question';
    return type.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
