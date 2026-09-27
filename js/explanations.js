/* ==========================================================================
   PLACEMENTPREP - EXPLANATION & AI MENTOR SYSTEM
   Renders detailed answers, distractor rationales, real-world context & traps
   ========================================================================== */

(function () {
  window.ExplanationRenderer = {
    render(question, selectedAnswerIndex, isCorrect) {
      if (!question) return '';

      const letters = ['A', 'B', 'C', 'D'];
      const correctLetter = letters[question.correctAnswer] || 'A';
      const correctOptionText = question.options[question.correctAnswer] || '';

      let wrongOptionsHtml = '';
      if (question.wrongOptionExplanations) {
        let items = '';
        for (const [key, explanation] of Object.entries(question.wrongOptionExplanations)) {
          const idx = parseInt(key, 10);
          const letter = !isNaN(idx) ? letters[idx] : key;
          const optText = question.options[idx] || '';
          items += `
            <div class="wrong-option-item">
              <span class="wrong-option-key">Option ${letter}${optText ? ` ("${optText}")` : ''}:</span>
              ${explanation}
            </div>
          `;
        }
        if (items) {
          wrongOptionsHtml = `
            <div class="explanation-section wrong-options">
              <div class="explanation-section-title">
                <span>⚠️ Why Other Options Are Incorrect</span>
              </div>
              <div>${items}</div>
            </div>
          `;
        }
      }

      let realWorldHtml = '';
      if (question.realWorldApplication) {
        realWorldHtml = `
          <div class="explanation-section real-world">
            <div class="explanation-section-title">
              <span>🌐 Real-World IT & Enterprise Context</span>
            </div>
            <p>${question.realWorldApplication}</p>
          </div>
        `;
      }

      let trapHtml = '';
      if (question.placementTip || question.placementTrap) {
        const tipText = question.placementTip || question.placementTrap;
        trapHtml = `
          <div class="explanation-section placement-trap">
            <div class="explanation-section-title">
              <span>🎯 MNC Placement Trap & Interview Tip</span>
            </div>
            <p>${tipText}</p>
          </div>
        `;
      }

      return `
        <div class="explanation-card">
          <div class="explanation-header">
            <div class="explanation-title">
              <span>💡 Conceptual Analysis & Solution</span>
            </div>
            <div>
              <span class="badge ${isCorrect ? 'badge-easy' : 'badge-hard'}">
                ${isCorrect ? '✓ Correct Answer' : '✗ Incorrect Selection'}
              </span>
            </div>
          </div>

          <div style="margin-bottom: 0.85rem; font-weight: 600; color: var(--text-primary); font-size: 1rem;">
            Correct Option: 
            <span style="color: var(--success); font-family: var(--font-mono); font-weight: 800;">
              Option ${correctLetter} (${correctOptionText})
            </span>
          </div>

          <div class="explanation-body">
            ${question.explanation || 'No detailed explanation provided for this question.'}
          </div>

          ${wrongOptionsHtml}
          ${realWorldHtml}
          ${trapHtml}
        </div>
      `;
    }
  };
})();
