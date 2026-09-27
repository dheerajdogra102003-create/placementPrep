/* ==========================================================================
   PLACEMENTPREP - QUESTION PALETTE STATE MANAGER
   Handles 5 standardized exam states with visual symbols and counts
   ========================================================================== */

(function () {
  class QuestionPaletteManager {
    constructor(containerElement, totalQuestions, onSelectQuestion) {
      this.container = containerElement;
      this.total = totalQuestions;
      this.onSelect = onSelectQuestion || (() => {});
      this.states = {}; // { [index]: 'unvisited' | 'current' | 'answered' | 'review' | 'answered-review' }
      this.currentIndex = 0;

      // Initialize all questions as 'unvisited'
      for (let i = 0; i < this.total; i++) {
        this.states[i] = 'unvisited';
      }
      this.states[0] = 'current';
    }

    setQuestionState(index, state) {
      if (index >= 0 && index < this.total) {
        this.states[index] = state;
      }
    }

    setCurrentQuestion(newIndex) {
      this.currentIndex = newIndex;
      this.render();
    }

    updateQuestionStatus(index, hasAnswer, isMarkedForReview) {
      if (hasAnswer && isMarkedForReview) {
        this.states[index] = 'answered-review';
      } else if (isMarkedForReview) {
        this.states[index] = 'review';
      } else if (hasAnswer) {
        this.states[index] = 'answered';
      } else {
        // If visited but not answered and not marked
        this.states[index] = 'unvisited'; // or visited-unanswered
      }
    }

    getCounts() {
      let answered = 0;
      let review = 0;
      let answeredReview = 0;
      let unvisited = 0;

      for (let i = 0; i < this.total; i++) {
        const s = this.states[i];
        if (s === 'answered') answered++;
        else if (s === 'review') review++;
        else if (s === 'answered-review') answeredReview++;
        else unvisited++;
      }

      const notAnswered = this.total - (answered + answeredReview);
      return { answered, notAnswered, review, answeredReview, unvisited };
    }

    render() {
      if (!this.container) return;

      const counts = this.getCounts();

      let html = `
        <div class="cbt-legend-card">
          <div class="cbt-legend-title">Question Status Palette</div>
          <div class="cbt-legend-grid">
            <div class="cbt-legend-item">
              <span class="cbt-legend-badge state-answered">${counts.answered}</span>
              <span>Answered</span>
            </div>
            <div class="cbt-legend-item">
              <span class="cbt-legend-badge state-unvisited">${counts.unvisited}</span>
              <span>Not Visited</span>
            </div>
            <div class="cbt-legend-item">
              <span class="cbt-legend-badge state-review">${counts.review}</span>
              <span>Review</span>
            </div>
            <div class="cbt-legend-item">
              <span class="cbt-legend-badge state-answered-review">${counts.answeredReview}</span>
              <span>Ans + Review</span>
            </div>
          </div>
        </div>

        <div class="cbt-palette-grid-wrapper">
          <div class="cbt-palette-header">
            <span>Select Question</span>
            <span style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.8rem;">
              Total: ${this.total}
            </span>
          </div>
          <div class="cbt-palette-grid">
      `;

      for (let i = 0; i < this.total; i++) {
        let stateClass = 'state-' + (this.states[i] || 'unvisited');
        if (i === this.currentIndex) {
          stateClass += ' state-current';
        }

        html += `
          <button type="button" 
                  class="cbt-palette-btn ${stateClass}" 
                  data-q-idx="${i}"
                  aria-label="Go to Question ${i + 1}"
                  title="Question ${i + 1}">
            ${i + 1}
          </button>
        `;
      }

      html += `
          </div>
        </div>
      `;

      this.container.innerHTML = html;

      // Attach click listeners to all buttons
      const buttons = this.container.querySelectorAll('.cbt-palette-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.getAttribute('data-q-idx'), 10);
          if (!isNaN(idx)) {
            this.onSelect(idx);
          }
        });
      });
    }
  }

  window.QuestionPaletteManager = QuestionPaletteManager;
})();
