/* ==========================================================================
   PLACEMENTPREP - SCORING & PERFORMANCE ANALYZER
   Evaluates exam attempts, computes accuracy, topic breakdown, and score card
   ========================================================================== */

(function () {
  window.ScoringEngine = {
    evaluate(questions, userAnswers, timeSpentSeconds, timeSpentFormatted) {
      let correct = 0;
      let incorrect = 0;
      let unattempted = 0;

      const topicStats = {}; // { [topic]: { total: 0, correct: 0 } }
      const diffStats = {
        easy: { total: 0, correct: 0 },
        medium: { total: 0, correct: 0 },
        hard: { total: 0, correct: 0 }
      };

      questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const topic = q.topic || 'General';
        const diff = (q.difficulty || 'medium').toLowerCase();

        if (!topicStats[topic]) {
          topicStats[topic] = { total: 0, correct: 0 };
        }
        topicStats[topic].total++;

        if (diffStats[diff]) {
          diffStats[diff].total++;
        }

        if (userAns === undefined || userAns === null) {
          unattempted++;
        } else if (userAns === q.correctAnswer) {
          correct++;
          topicStats[topic].correct++;
          if (diffStats[diff]) diffStats[diff].correct++;
        } else {
          incorrect++;
        }
      });

      const total = questions.length;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
      const passed = accuracy >= 70; // Standard 70% MNC placement threshold

      return {
        total,
        correct,
        incorrect,
        unattempted,
        accuracy,
        passed,
        timeSpentSeconds,
        timeSpentFormatted: timeSpentFormatted || '00:00',
        topicStats,
        diffStats
      };
    },

    renderScoreCard(result, moduleName, onReviewClick, onRetakeClick, onHomeClick) {
      let topicRows = '';
      for (const [topic, stat] of Object.entries(result.topicStats)) {
        const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
        const color = pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning)' : 'var(--danger)';
        topicRows += `
          <div style="margin-bottom: 0.85rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.3rem;">
              <span style="font-weight: 600; color: var(--text-primary);">${topic}</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: ${color};">${stat.correct}/${stat.total} (${pct}%)</span>
            </div>
            <div style="height: 6px; background: var(--bg-surface); border-radius: var(--radius-full); overflow: hidden;">
              <div style="height: 100%; width: ${pct}%; background: ${color}; border-radius: var(--radius-full);"></div>
            </div>
          </div>
        `;
      }

      return `
        <div class="result-container">
          <div class="result-card">
            <div class="result-status-badge ${result.passed ? 'passed' : 'failed'}">
              ${result.passed ? '★ Assessment Cleared (70%+ Target)' : '▲ Benchmark Not Met (Review Required)'}
            </div>

            <div style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600;">
              ${moduleName} — Final CBT Score
            </div>

            <div class="result-score-highlight">
              ${result.correct}<span> / ${result.total}</span>
            </div>

            <div class="result-summary-text">
              You scored <strong>${result.accuracy}%</strong> accuracy across ${result.total} questions in 
              <strong>${result.timeSpentFormatted}</strong>.
              ${result.passed 
                ? 'Strong placement readiness demonstrated. Consistent performance aligns with MNC technical cutoff expectations.' 
                : 'Focus on revision topics below and retake the timed test to build speed and accuracy.'}
            </div>

            <div class="result-stats-row">
              <div class="result-stat-box">
                <div class="result-stat-number" style="color: var(--success);">${result.correct}</div>
                <div class="result-stat-label">Correct</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-number" style="color: var(--danger);">${result.incorrect}</div>
                <div class="result-stat-label">Incorrect</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-number" style="color: var(--text-muted);">${result.unattempted}</div>
                <div class="result-stat-label">Unattempted</div>
              </div>
              <div class="result-stat-box">
                <div class="result-stat-number" style="color: var(--brand-primary);">${result.accuracy}%</div>
                <div class="result-stat-label">Accuracy</div>
              </div>
            </div>

            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; text-align: left; margin-bottom: 2rem;">
              <h4 style="margin-bottom: 1.25rem; font-size: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                <span>📊 Topic Mastery Breakdown</span>
              </h4>
              ${topicRows || '<p style="color: var(--text-muted); font-size: 0.9rem;">No topic breakdown available.</p>'}
            </div>

            <div class="result-actions">
              <button type="button" class="btn btn-primary btn-lg" id="btn-result-review">
                <span>🔍 Review All Questions & Solutions</span>
              </button>
              <button type="button" class="btn btn-secondary btn-lg" id="btn-result-retake">
                <span>🔄 Retake Exam</span>
              </button>
              <button type="button" class="btn btn-outline btn-lg" id="btn-result-home">
                <span>🏠 Return to Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }
  };
})();
