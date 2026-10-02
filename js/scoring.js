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

      const tierStats = {
        foundational: { total: 0, correct: 0, targetPacing: '45s', weight: '40%', label: 'Foundational Recall' },
        application: { total: 0, correct: 0, targetPacing: '60s', weight: '40%', label: 'Application & Problem-Solving' },
        highDifficulty: { total: 0, correct: 0, targetPacing: '90s', weight: '20%', label: 'High-Difficulty Edge Cases' }
      };

      questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const topic = q.topic || 'General';
        const diff = (q.difficulty || 'medium').toLowerCase();
        const tier = q.cbtTier || (diff === 'easy' ? 'foundational' : diff === 'hard' ? 'highDifficulty' : 'application');

        if (!topicStats[topic]) {
          topicStats[topic] = { total: 0, correct: 0 };
        }
        topicStats[topic].total++;

        if (diffStats[diff]) {
          diffStats[diff].total++;
        }

        if (tierStats[tier]) {
          tierStats[tier].total++;
        }

        if (userAns === undefined || userAns === null) {
          unattempted++;
        } else if (userAns === q.correctAnswer) {
          correct++;
          topicStats[topic].correct++;
          if (diffStats[diff]) diffStats[diff].correct++;
          if (tierStats[tier]) tierStats[tier].correct++;
        } else {
          incorrect++;
        }
      });

      const total = questions.length;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
      const passed = accuracy >= 70; // Standard 70% MNC placement threshold

      const avgSecondsPerQ = total > 0 && timeSpentSeconds > 0 ? Math.round(timeSpentSeconds / total) : 0;
      let pacingRating = 'Optimal';
      let pacingBadgeClass = 'badge-easy';
      if (avgSecondsPerQ <= 45) {
        pacingRating = 'Blitz Speed (~' + avgSecondsPerQ + 's/q)';
        pacingBadgeClass = 'badge-easy';
      } else if (avgSecondsPerQ <= 60) {
        pacingRating = 'Target Speed (~' + avgSecondsPerQ + 's/q)';
        pacingBadgeClass = 'badge-easy';
      } else if (avgSecondsPerQ <= 75) {
        pacingRating = 'Moderate Pace (~' + avgSecondsPerQ + 's/q)';
        pacingBadgeClass = 'badge-medium';
      } else {
        pacingRating = 'Time Heavy (~' + avgSecondsPerQ + 's/q)';
        pacingBadgeClass = 'badge-hard';
      }

      return {
        total,
        correct,
        incorrect,
        unattempted,
        accuracy,
        passed,
        timeSpentSeconds,
        timeSpentFormatted: timeSpentFormatted || '00:00',
        avgSecondsPerQ,
        pacingRating,
        pacingBadgeClass,
        topicStats,
        diffStats,
        tierStats
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

      const tiers = [
        { key: 'foundational', icon: '', name: 'Foundational Recall', target: '40% (~45s/Q)', color: 'var(--brand-emerald)', desc: 'Direct conceptual recall & syntax foundations' },
        { key: 'application', icon: '', name: 'Application & Problem-Solving', target: '40% (~60s/Q)', color: 'var(--brand-amber)', desc: 'Practical scenarios, commands & moderate logic' },
        { key: 'highDifficulty', icon: '', name: 'High-Difficulty Multi-Step', target: '20% (~90s/Q)', color: 'var(--brand-rose)', desc: 'Multi-step tracing, edge cases & deep complexity' }
      ];

      let tierCardsHtml = '';
      tiers.forEach(t => {
        const stat = result.tierStats && result.tierStats[t.key] ? result.tierStats[t.key] : { total: 0, correct: 0 };
        const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
        const statusColor = pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning)' : 'var(--danger)';
        const statusFeedback = pct >= 70 
          ? 'Strong mastery demonstrated' 
          : pct >= 40 
            ? 'Moderate — review edge cases' 
            : 'Focus area for drill revision';

        tierCardsHtml += `
          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
                  <span>${t.icon}</span>
                  <span>${t.name}</span>
                </div>
                <span class="badge" style="background: rgba(255,255,255,0.06); font-family: var(--font-mono); font-size: 0.72rem;">${t.target}</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.85rem; line-height: 1.4;">${t.desc}</div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.4rem;">
                <span style="font-size: 1.35rem; font-weight: 800; font-family: var(--font-mono); color: ${statusColor};">
                  ${stat.correct} <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">/ ${stat.total}</span>
                </span>
                <span style="font-weight: 700; font-size: 0.9rem; color: ${statusColor};">${pct}%</span>
              </div>
              <div style="height: 6px; background: var(--bg-surface); border-radius: var(--radius-full); overflow: hidden; margin-bottom: 0.45rem;">
                <div style="height: 100%; width: ${pct}%; background: ${statusColor}; border-radius: var(--radius-full);"></div>
              </div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">${statusFeedback}</div>
            </div>
          </div>
        `;
      });

      return `
        <div class="result-container">
          <div class="result-card">
            <div class="result-status-badge ${result.passed ? 'passed' : 'failed'}">
              ${result.passed ? '★ Assessment Cleared (70%+ MNC Cutoff)' : '▲ Benchmark Not Met (Review Required)'}
            </div>

            <div style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600;">
              ${moduleName} — Speed Drill Diagnostic Report
            </div>

            <div class="result-score-highlight">
              ${result.correct}<span> / ${result.total}</span>
            </div>

            <div class="result-summary-text">
              You scored <strong>${result.accuracy}%</strong> accuracy across ${result.total} calibrated questions in 
              <strong>${result.timeSpentFormatted}</strong> (Avg pacing: <strong>${result.avgSecondsPerQ}s / question</strong>).
              ${result.passed 
                ? 'Strong placement readiness demonstrated. Consistent accuracy under timed speed drill constraints aligns with MNC technical expectations.' 
                : 'Focus on revision topics below and retake the timed test to build speed and accuracy.'}
            </div>

            <!-- Primary 4-Box Metric Row -->
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

            <!-- Calibrated 40-40-20 Tier Diagnostic Breakdown -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; text-align: left; margin-bottom: 2rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
                <h4 style="margin: 0; font-size: 1.05rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                  <span>Calibrated 40% - 40% - 20% Tier Breakdown</span>
                </h4>
                <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; color: var(--text-muted);">
                  <span>Speed Diagnostic:</span>
                  <span class="badge ${result.pacingBadgeClass}" style="text-transform: none;">${result.pacingRating}</span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                ${tierCardsHtml}
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem;">
                <strong>Exam Pacing Calibration:</strong> Foundational questions test instantaneous recall (~45s); Application tests syntax &amp; parameter reasoning (~60s); High-Difficulty questions test multi-step tracing &amp; edge conditions (~90s).
              </div>
            </div>

            <!-- Topic Mastery Breakdown -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; text-align: left; margin-bottom: 2rem;">
              <h4 style="margin-bottom: 1.25rem; font-size: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
                <span>Topic Mastery Breakdown</span>
              </h4>
              ${topicRows || '<p style="color: var(--text-muted); font-size: 0.9rem;">No topic breakdown available.</p>'}
            </div>

            <div class="result-actions">
              <button type="button" class="btn btn-primary btn-lg" id="btn-result-review">
                <span>Review All Questions &amp; Solutions</span>
              </button>
              <button type="button" class="btn btn-secondary btn-lg" id="btn-result-retake">
                <span>Retake Speed Drill</span>
              </button>
              <button type="button" class="btn btn-outline btn-lg" id="btn-result-home">
                <span>Return to Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }
  };
})();

