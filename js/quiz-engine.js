/* ==========================================================================
   PLACEMENTPREP - REUSABLE CBT & PRACTICE QUIZ ENGINE
   Unified engine powering all 12 modules for practice, CBT, and review
   ========================================================================== */

(function () {
  class QuizEngine {
    constructor() {
      this.questions = [];
      this.moduleMeta = {};
      this.mode = 'cbt'; // 'cbt' | 'practice' | 'review'
      this.currentIndex = 0;
      this.userAnswers = {}; // { [index]: selectedOptionIndex }
      this.markedForReview = {}; // { [index]: boolean }
      this.timer = null;
      this.palette = null;
      this.isSubmitted = false;
      this.timeSpentFormatted = '00:00';
      this.timeSpentSeconds = 0;
      this.lastResult = null;

      // DOM Elements cache
      this.container = null;
    }

    init(containerElement, questions, moduleMeta, mode = 'cbt', options = {}) {
      this.container = containerElement;
      this.questions = questions || [];
      this.moduleMeta = moduleMeta || { name: 'Placement Practice', id: 'practice' };
      this.mode = mode;
      this.options = options || {};
      this.fullBank = options.fullBank || questions;
      this.currentIndex = 0;
      this.userAnswers = {};
      this.markedForReview = {};
      this.isSubmitted = false;

      // Stop any existing timer
      if (this.timer) {
        this.timer.stop();
        this.timer = null;
      }

      // Configure timer for CBT mode (calibrated based on tier pacing)
      if (this.mode === 'cbt') {
        const durationSeconds = options.durationSeconds || (this.questions.length * 60);
        this.durationSeconds = durationSeconds;
        this.timer = new window.CBTTimer(
          durationSeconds,
          (formattedTime, remaining, warningState) => {
            const timerEl = document.getElementById('cbt-timer-display');
            const timerBox = document.getElementById('cbt-timer-box');
            if (timerEl) timerEl.textContent = formattedTime;
            if (timerBox) {
              timerBox.className = `cbt-timer-box timer-${warningState}`;
            }
          },
          () => {
            // Auto submit on expire
            alert('Time has expired! Your examination is being automatically submitted.');
            this.submitExam();
          }
        );
      }

      this.renderLayout();
      this.timer?.start();
    }

    renderLayout() {
      if (!this.container) return;

      const isCBT = this.mode === 'cbt';
      const isPractice = this.mode === 'practice';
      const isReview = this.mode === 'review';

      const durationMinutes = Math.round((this.durationSeconds || (this.questions.length * 60)) / 60);
      const modeTitle = isPractice 
        ? 'Interactive Practice Mode' 
        : isReview 
          ? 'Exam Solution Review' 
          : `Timed CBT Speed Drill • ${this.questions.length} Questions (${durationMinutes} Mins • 40/40/20)`;

      this.container.innerHTML = `
        <div class="cbt-shell">
          <!-- CBT Top Navigation Header -->
          <header class="cbt-header">
            <div class="cbt-header-left">
              <button type="button" class="cbt-back-btn" id="btn-cbt-exit" aria-label="Exit Exam">
                <span>← Exit</span>
              </button>
              <div class="cbt-exam-title-wrap">
                <div class="cbt-exam-title">${this.moduleMeta.name || 'Technical Examination'}</div>
                <div class="cbt-exam-subtitle">${modeTitle} • MNC Fresher Pattern</div>
              </div>
            </div>

            <div class="cbt-header-right">
              ${isCBT ? `
                <div class="cbt-timer-box" id="cbt-timer-box" title="Remaining Exam Time">
                  <span class="cbt-timer-icon">⏱</span>
                  <span id="cbt-timer-display">--:--</span>
                </div>
              ` : `
                <div class="badge badge-topic">
                  <span>${isPractice ? 'Instant Feedback' : 'Review Mode'}</span>
                </div>
              `}

              <!-- Mobile Palette Toggle -->
              <button type="button" class="cbt-palette-drawer-toggle" id="btn-palette-toggle" aria-label="Toggle Question Palette">
                <span>Palette</span>
              </button>
            </div>
          </header>

          <!-- Mobile Drawer Backdrop Overlay -->
          <div class="cbt-mobile-drawer-overlay" id="palette-drawer-overlay"></div>

          <!-- Main Dual-Column CBT Workspace -->
          <div class="cbt-workspace-grid">
            <!-- Left Column: Question Prompt, Options & Controls -->
            <main class="cbt-question-pane" id="cbt-question-pane" role="region" aria-label="Current Question Area">
              <div id="cbt-question-content"></div>
              
              <!-- Bottom Exam Action Dock -->
              <div class="cbt-action-dock">
                <div class="cbt-dock-left">
                  <button type="button" class="btn btn-outline btn-sm" id="btn-cbt-prev">
                    <span>← Previous</span>
                  </button>
                  ${isCBT ? `
                    <button type="button" class="btn btn-outline btn-sm" id="btn-cbt-clear">
                      <span>Clear Response</span>
                    </button>
                  ` : ''}
                </div>

                <div class="cbt-dock-right">
                  ${isCBT ? `
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-cbt-review">
                      <span id="btn-cbt-review-text">⭐ Mark for Review</span>
                    </button>
                    <button type="button" class="btn btn-primary btn-sm" id="btn-cbt-next">
                      <span>Save & Next →</span>
                    </button>
                    <button type="button" class="btn btn-cyan btn-sm" id="btn-cbt-submit">
                      <span>Submit Exam</span>
                    </button>
                  ` : `
                    <button type="button" class="btn btn-primary btn-sm" id="btn-cbt-next">
                      <span>Next Question →</span>
                    </button>
                    ${isReview ? `
                      <button type="button" class="btn btn-cyan btn-sm" id="btn-cbt-exit-review">
                        <span>Done Reviewing</span>
                      </button>
                    ` : ''}
                  `}
                </div>
              </div>
            </main>

            <!-- Right Column: Question Status Palette & Profile -->
            <aside class="cbt-palette-pane" id="cbt-palette-pane" role="complementary" aria-label="Question Navigation Palette">
              <!-- Mobile Drawer Header with Close Button -->
              <div class="cbt-palette-drawer-header">
                <span class="cbt-palette-drawer-title">Question Palette</span>
                <button type="button" class="cbt-palette-close-btn" id="btn-close-palette-drawer" aria-label="Close Question Palette">✕</button>
              </div>

              <div class="cbt-candidate-info">
                <div class="cbt-candidate-avatar">ST</div>
                <div class="cbt-candidate-meta">
                  <div class="cbt-candidate-name">Candidate Assessment</div>
                  <div class="cbt-candidate-roll">ID: PREP-${Date.now().toString().slice(-6)}</div>
                </div>
              </div>

              <!-- Question Grid Container -->
              <div id="cbt-palette-container"></div>
            </aside>
          </div>
        </div>

        <!-- Submit Confirmation Modal -->
        <div class="modal-backdrop" id="cbt-submit-modal" aria-hidden="true" role="dialog">
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title">Confirm Exam Submission</div>
              <button type="button" class="modal-close-btn" id="btn-close-modal">✕</button>
            </div>
            <div class="modal-body" id="modal-submit-summary">
              Are you sure you want to finish and submit your test?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline" id="btn-cancel-submit">Return to Test</button>
              <button type="button" class="btn btn-cyan" id="btn-confirm-submit">Yes, Submit Test</button>
            </div>
          </div>
        </div>
      `;

      // Initialize Question Palette
      const paletteContainer = document.getElementById('cbt-palette-container');
      this.palette = new window.QuestionPaletteManager(
        paletteContainer,
        this.questions.length,
        (selectedIdx) => {
          this.goToQuestion(selectedIdx);
          this.closeMobileDrawer();
        }
      );

      this.attachEventListeners();
      this.renderCurrentQuestion();
    }

    attachEventListeners() {
      // Exit button
      document.getElementById('btn-cbt-exit')?.addEventListener('click', () => {
        if (this.mode === 'cbt' && !this.isSubmitted) {
          if (confirm('Are you sure you want to exit? Your exam progress will not be saved.')) {
            this.timer?.stop();
            window.location.hash = '#modules';
          }
        } else {
          this.timer?.stop();
          window.location.hash = '#modules';
        }
      });

      // Next & Previous buttons
      document.getElementById('btn-cbt-next')?.addEventListener('click', () => this.nextQuestion());
      document.getElementById('btn-cbt-prev')?.addEventListener('click', () => this.prevQuestion());

      // Clear Response
      document.getElementById('btn-cbt-clear')?.addEventListener('click', () => this.clearResponse());

      // Mark for Review
      document.getElementById('btn-cbt-review')?.addEventListener('click', () => this.toggleMarkForReview());

      // Submit modal trigger
      document.getElementById('btn-cbt-submit')?.addEventListener('click', () => this.openSubmitModal());

      // Modal buttons
      document.getElementById('btn-close-modal')?.addEventListener('click', () => this.closeSubmitModal());
      document.getElementById('btn-cancel-submit')?.addEventListener('click', () => this.closeSubmitModal());
      document.getElementById('btn-confirm-submit')?.addEventListener('click', () => {
        this.closeSubmitModal();
        this.submitExam();
      });

      // Exit review mode
      document.getElementById('btn-cbt-exit-review')?.addEventListener('click', () => {
        if (this.lastResult) {
          this.renderResultPage(this.lastResult);
        } else {
          window.location.hash = '#modules';
        }
      });

      // Mobile Drawer Toggle & Close
      const paletteToggle = document.getElementById('btn-palette-toggle');
      const drawerOverlay = document.getElementById('palette-drawer-overlay');
      const drawerCloseBtn = document.getElementById('btn-close-palette-drawer');
      paletteToggle?.addEventListener('click', () => this.toggleMobileDrawer());
      drawerOverlay?.addEventListener('click', () => this.closeMobileDrawer());
      drawerCloseBtn?.addEventListener('click', () => this.closeMobileDrawer());
    }

    toggleMobileDrawer() {
      const pane = document.getElementById('cbt-palette-pane');
      const overlay = document.getElementById('palette-drawer-overlay');
      pane?.classList.toggle('mobile-open');
      overlay?.classList.toggle('active');
    }

    closeMobileDrawer() {
      const pane = document.getElementById('cbt-palette-pane');
      const overlay = document.getElementById('palette-drawer-overlay');
      pane?.classList.remove('mobile-open');
      overlay?.classList.remove('active');
    }

    renderCurrentQuestion() {
      const q = this.questions[this.currentIndex];
      const contentEl = document.getElementById('cbt-question-content');
      if (!q || !contentEl) return;

      const letters = ['A', 'B', 'C', 'D'];
      const selectedAnswer = this.userAnswers[this.currentIndex];
      const isReviewOrPractice = this.mode === 'practice' || this.mode === 'review';
      const isAnswered = selectedAnswer !== undefined;

      // Update palette state
      this.palette.setCurrentQuestion(this.currentIndex);

      // Bookmark / Review state
      const isMarked = !!this.markedForReview[this.currentIndex];
      const reviewBtnText = document.getElementById('btn-cbt-review-text');
      if (reviewBtnText) {
        reviewBtnText.textContent = isMarked ? 'Marked for Review' : 'Mark for Review';
      }

      // Format code block if present
      let codeSnippetHtml = '';
      if (q.codeSnippet && q.codeSnippet.trim()) {
        codeSnippetHtml = `
          <div class="code-block" aria-label="Code Snippet">
            <code>${this.escapeHtml(q.codeSnippet)}</code>
          </div>
        `;
      }

      // Generate Option Cards
      let optionsHtml = '';
      q.options.forEach((optText, optIdx) => {
        const letter = letters[optIdx] || optIdx + 1;
        let optClasses = 'cbt-option-item';

        if (selectedAnswer === optIdx) {
          optClasses += ' selected';
        }

        // Highlight correct/incorrect in practice or review mode
        if (isReviewOrPractice && isAnswered) {
          if (optIdx === q.correctAnswer) {
            optClasses += ' correct';
          } else if (selectedAnswer === optIdx) {
            optClasses += ' incorrect';
          }
        }

        optionsHtml += `
          <div class="${optClasses}" data-opt-idx="${optIdx}" role="button" tabindex="0" aria-label="Option ${letter}: ${this.escapeHtml(optText)}">
            <div class="cbt-option-circle">${letter}</div>
            <div class="cbt-option-text">${this.escapeHtml(optText)}</div>
          </div>
        `;
      });

      // Explanation in practice mode (if answered) or review mode
      let explanationHtml = '';
      if (isReviewOrPractice && isAnswered) {
        const isCorrect = selectedAnswer === q.correctAnswer;
        explanationHtml = window.ExplanationRenderer.render(q, selectedAnswer, isCorrect);
      }

      contentEl.innerHTML = `
        <div class="cbt-question-header">
          <div class="cbt-q-number-box">
            <span class="cbt-q-current">Question ${this.currentIndex + 1}</span>
            <span style="color: var(--text-muted); font-size: 0.9rem;">of ${this.questions.length}</span>
          </div>

          <div class="cbt-q-meta-badges">
            ${q.cbtTier === 'foundational' 
              ? `<span class="badge badge-tier-foundational" title="Foundational / Direct Conceptual Recall (~45s target pace)">🟢 Foundational Recall (~45s)</span>`
              : q.cbtTier === 'highDifficulty'
                ? `<span class="badge badge-tier-high" title="High-Difficulty Edge Case / Multi-Step (~90s target pace)">🔴 Advanced Edge Case (~90s)</span>`
                : `<span class="badge badge-tier-application" title="Application & Moderate Problem-Solving (~60s target pace)">🟡 Application (~60s)</span>`}
            <span class="badge badge-topic">${q.topic || 'General'}</span>
            <span class="badge badge-scenario">${q.type || 'MCQ'}</span>
            <button type="button" class="cbt-bookmark-btn ${window.StorageManager.isBookmarked(this.moduleMeta.id, q.id) ? 'active' : ''}" id="btn-bookmark-q" title="Bookmark Question">
              <span>★</span>
            </button>
          </div>
        </div>

        <div class="cbt-question-text">
          ${this.escapeHtml(q.question)}
        </div>

        ${codeSnippetHtml}

        <div class="cbt-options-list" id="cbt-options-container">
          ${optionsHtml}
        </div>

        <div id="cbt-explanation-wrapper">
          ${explanationHtml}
        </div>
      `;

      // Attach option click handlers
      const optionElements = contentEl.querySelectorAll('.cbt-option-item');
      optionElements.forEach(el => {
        el.addEventListener('click', () => {
          if (this.mode === 'review') return; // Cannot change answers in review mode
          const idx = parseInt(el.getAttribute('data-opt-idx'), 10);
          this.selectOption(idx);
        });
      });

      // Bookmark button
      const bookmarkBtn = contentEl.querySelector('#btn-bookmark-q');
      bookmarkBtn?.addEventListener('click', () => {
        const bookmarked = window.StorageManager.toggleBookmark(this.moduleMeta.id, q.id);
        bookmarkBtn.classList.toggle('active', bookmarked);
      });

      // Update button labels on first/last question
      const prevBtn = document.getElementById('btn-cbt-prev');
      const nextBtn = document.getElementById('btn-cbt-next');
      if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
      if (nextBtn && this.currentIndex === this.questions.length - 1) {
        nextBtn.innerHTML = this.mode === 'cbt' ? '<span>Review & Finish</span>' : '<span>Finish Practice</span>';
      } else if (nextBtn) {
        nextBtn.innerHTML = this.mode === 'cbt' ? '<span>Save & Next →</span>' : '<span>Next Question →</span>';
      }
    }

    selectOption(optIdx) {
      this.userAnswers[this.currentIndex] = optIdx;

      // Update palette
      const isMarked = !!this.markedForReview[this.currentIndex];
      this.palette.updateQuestionStatus(this.currentIndex, true, isMarked);

      // Re-render current question
      this.renderCurrentQuestion();
    }

    clearResponse() {
      delete this.userAnswers[this.currentIndex];
      const isMarked = !!this.markedForReview[this.currentIndex];
      this.palette.updateQuestionStatus(this.currentIndex, false, isMarked);
      this.renderCurrentQuestion();
    }

    toggleMarkForReview() {
      const currentMark = !!this.markedForReview[this.currentIndex];
      this.markedForReview[this.currentIndex] = !currentMark;

      const hasAnswer = this.userAnswers[this.currentIndex] !== undefined;
      this.palette.updateQuestionStatus(this.currentIndex, hasAnswer, !currentMark);

      this.renderCurrentQuestion();
    }

    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        // Set previous question state in palette
        const hasAnswer = this.userAnswers[this.currentIndex] !== undefined;
        const isMarked = !!this.markedForReview[this.currentIndex];
        this.palette.updateQuestionStatus(this.currentIndex, hasAnswer, isMarked);

        this.currentIndex++;
        this.renderCurrentQuestion();
      } else {
        // Reached end of questions
        if (this.mode === 'cbt') {
          this.openSubmitModal();
        } else {
          this.submitExam();
        }
      }
    }

    prevQuestion() {
      if (this.currentIndex > 0) {
        const hasAnswer = this.userAnswers[this.currentIndex] !== undefined;
        const isMarked = !!this.markedForReview[this.currentIndex];
        this.palette.updateQuestionStatus(this.currentIndex, hasAnswer, isMarked);

        this.currentIndex--;
        this.renderCurrentQuestion();
      }
    }

    goToQuestion(index) {
      if (index >= 0 && index < this.questions.length) {
        const hasAnswer = this.userAnswers[this.currentIndex] !== undefined;
        const isMarked = !!this.markedForReview[this.currentIndex];
        this.palette.updateQuestionStatus(this.currentIndex, hasAnswer, isMarked);

        this.currentIndex = index;
        this.renderCurrentQuestion();
        this.closeMobileDrawer();
      }
    }

    openSubmitModal() {
      const modal = document.getElementById('cbt-submit-modal');
      const summaryEl = document.getElementById('modal-submit-summary');
      if (!modal || !summaryEl) return;

      const counts = this.palette.getCounts();
      const timeRemaining = this.timer ? this.timer.getFormattedTime() : 'N/A';

      summaryEl.innerHTML = `
        <p style="margin-bottom: 1rem; color: var(--text-primary); font-weight: 600;">
          Are you ready to submit your assessment? Check your attempt status below:
        </p>
        <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.9rem;">
          <div>Total Questions: <strong>${this.questions.length}</strong></div>
          <div>Answered: <strong style="color: var(--success);">${counts.answered + counts.answeredReview}</strong></div>
          <div>Marked for Review: <strong style="color: var(--warning);">${counts.review + counts.answeredReview}</strong></div>
          <div>Not Visited / Empty: <strong style="color: var(--danger);">${counts.unvisited + counts.notAnswered}</strong></div>
          <div style="grid-column: span 2; border-top: 1px solid var(--border-subtle); padding-top: 0.5rem; font-family: var(--font-mono);">
            Time Remaining: <strong>${timeRemaining}</strong>
          </div>
        </div>
      `;

      modal.classList.add('active');
    }

    closeSubmitModal() {
      const modal = document.getElementById('cbt-submit-modal');
      modal?.classList.remove('active');
    }

    submitExam() {
      this.isSubmitted = true;
      if (this.timer) {
        this.timeSpentFormatted = this.timer.getFormattedTimeSpent();
        this.timeSpentSeconds = this.timer.getTimeSpentSeconds();
        this.timer.stop();
      }

      // Evaluate score using ScoringEngine
      const result = window.ScoringEngine.evaluate(
        this.questions,
        this.userAnswers,
        this.timeSpentSeconds,
        this.timeSpentFormatted
      );

      this.lastResult = result;

      // Save to storage
      window.StorageManager.saveTestResult({
        moduleId: this.moduleMeta.id,
        moduleName: this.moduleMeta.name,
        mode: this.mode,
        ...result
      });

      this.renderResultPage(result);
    }

    renderResultPage(result) {
      if (!this.container) return;

      // Trigger celebratory confetti physics if passed
      if (result && result.passed && window.CelebrationConfetti) {
        window.CelebrationConfetti.trigger();
      }

      this.container.innerHTML = `
        <div class="site-wrapper">
          <header class="cbt-header">
            <div class="cbt-header-left">
              <button type="button" class="cbt-back-btn" id="btn-result-back">
                <span>← Back to Modules</span>
              </button>
              <div class="cbt-exam-title-wrap">
                <div class="cbt-exam-title">${this.moduleMeta.name} Assessment Result</div>
                <div class="cbt-exam-subtitle">MNC Placement Diagnostic Report</div>
              </div>
            </div>
          </header>

          <main class="main-content" style="padding-top: 2rem;">
            ${window.ScoringEngine.renderScoreCard(result, this.moduleMeta.name)}
          </main>
        </div>
      `;

      document.getElementById('btn-result-back')?.addEventListener('click', () => {
        window.location.hash = '#modules';
      });

      document.getElementById('btn-result-home')?.addEventListener('click', () => {
        window.location.hash = '#home';
      });

      document.getElementById('btn-result-retake')?.addEventListener('click', () => {
        if (this.mode === 'cbt' && window.CBTAssembler && this.fullBank) {
          const freshExam = window.CBTAssembler.assemble(this.fullBank, this.questions.length);
          this.init(this.container, freshExam.questions, this.moduleMeta, 'cbt', {
            durationSeconds: freshExam.durationSeconds,
            fullBank: this.fullBank
          });
        } else {
          this.init(this.container, this.questions, this.moduleMeta, this.mode, this.options);
        }
      });

      document.getElementById('btn-result-review')?.addEventListener('click', () => {
        this.startReviewMode();
      });
    }

    startReviewMode() {
      this.mode = 'review';
      this.currentIndex = 0;
      this.renderLayout();
    }

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  window.QuizEngine = QuizEngine;
})();
