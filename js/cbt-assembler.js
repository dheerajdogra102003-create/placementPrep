/* ==========================================================================
   PLACEMENTPREP - CBT TEST CALIBRATOR & QUESTION ASSEMBLER
   Calibrates 30–40 question speed drills for all 12 modules:
   - 40% Foundational / Direct conceptual recall (~45s per Q)
   - 40% Application & Moderate problem-solving (~60s per Q)
   - 20% High-difficulty edge cases / Multi-step questions (~90s per Q)
   ========================================================================== */

(function () {
  class CBTAssemblerEngine {
    constructor() {
      this.DEFAULT_COUNT = 30; // Standard 30-question speed drill
      this.MIN_COUNT = 30;
      this.MAX_COUNT = 40;
    }

    /**
     * Categorizes any question into one of three standardized difficulty tiers
     * @param {Object} q Question object
     * @returns {'foundational' | 'application' | 'highDifficulty'}
     */
    classifyQuestion(q) {
      const diff = (q.difficulty || 'medium').toLowerCase();
      const type = (q.type || 'mcq').toLowerCase();

      // Explicit direct conceptual indicators (even in complex banks like pseudocode/git)
      if (type === 'direct_conceptual' || type === 'concept_application' || type === 'definition' || type === 'syntax' || type === 'direct') {
        return 'foundational';
      }

      // Explicit advanced edge cases, multi-step tracing, recursion, troubleshooting
      if (
        type === 'output_tracing' ||
        type === 'find_final_value' ||
        type === 'recursion_depth' ||
        type === 'stack_analysis' ||
        type === 'iteration_counting' ||
        type === 'troubleshooting' ||
        type === 'output_or_state_prediction' ||
        type === 'edge_case' ||
        type === 'multi_step'
      ) {
        return 'highDifficulty';
      }

      // Application & moderate problem-solving types
      if (type === 'scenario_based' || type === 'logic_analysis' || type === 'error_identification' || type === 'practical' || type === 'comparison' || type === 'command_based') {
        if (diff === 'hard') return 'highDifficulty';
        return 'application';
      }

      // Fallback by question difficulty tag
      if (diff === 'easy') {
        return 'foundational';
      } else if (diff === 'hard') {
        return 'highDifficulty';
      }

      return 'application';
    }

    /**
     * Target time in seconds per question for the assigned tier
     * @param {'foundational' | 'application' | 'highDifficulty'} tier
     * @returns {number} Target duration in seconds
     */
    getTierPacing(tier) {
      switch (tier) {
        case 'foundational':
          return 45; // ~45s for quick conceptual recall
        case 'highDifficulty':
          return 90; // ~90s for multi-step reasoning
        case 'application':
        default:
          return 60; // ~60s for moderate application
      }
    }

    /**
     * Human-readable label for tier badge
     */
    getTierLabel(tier) {
      switch (tier) {
        case 'foundational':
          return 'Foundational Recall';
        case 'highDifficulty':
          return 'Advanced Edge Case';
        case 'application':
        default:
          return 'Application & Problem-Solving';
      }
    }

    /**
     * Fast pseudo-random Fisher-Yates shuffle
     */
    shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    /**
     * Assembles a strictly calibrated exam from any module's question bank
     * @param {Array} questions Full module question bank
     * @param {number} requestedCount 30, 35, or 40 (clamped between 30 and 40)
     * @returns {Object} { questions, totalCount, durationSeconds, durationMinutes, distribution }
     */
    assemble(questions, requestedCount = 30) {
      if (!questions || !questions.length) {
        return {
          questions: [],
          totalCount: 0,
          durationSeconds: 1800,
          durationMinutes: 30,
          distribution: { foundational: 0, application: 0, highDifficulty: 0 }
        };
      }

      // Clamp between 30 and 40, not exceeding bank size if bank < 30
      const maxPossible = Math.min(this.MAX_COUNT, questions.length);
      const minPossible = Math.min(this.MIN_COUNT, questions.length);
      const count = Math.max(minPossible, Math.min(maxPossible, requestedCount));

      // Separate into pools
      const poolFoundational = [];
      const poolApplication = [];
      const poolHigh = [];

      questions.forEach(q => {
        const tier = this.classifyQuestion(q);
        if (tier === 'foundational') poolFoundational.push(q);
        else if (tier === 'highDifficulty') poolHigh.push(q);
        else poolApplication.push(q);
      });

      // Target breakdown: 40% Foundational, 40% Application, 20% High-Difficulty
      const wantFoundational = Math.round(count * 0.40);
      const wantHigh = Math.round(count * 0.20);
      const wantApplication = count - wantFoundational - wantHigh;

      // Shuffle pools for fresh retakes
      const shuffFoundational = this.shuffleArray(poolFoundational);
      const shuffApp = this.shuffleArray(poolApplication);
      const shuffHigh = this.shuffleArray(poolHigh);

      const selFoundational = [];
      const selApp = [];
      const selHigh = [];

      // 1. Select Foundational
      while (selFoundational.length < wantFoundational && shuffFoundational.length > 0) {
        selFoundational.push(shuffFoundational.shift());
      }
      // If deficit in foundational, pull from application
      while (selFoundational.length < wantFoundational && shuffApp.length > 0) {
        selFoundational.push(shuffApp.shift());
      }

      // 2. Select High-Difficulty
      while (selHigh.length < wantHigh && shuffHigh.length > 0) {
        selHigh.push(shuffHigh.shift());
      }
      // If deficit in high, pull from application
      while (selHigh.length < wantHigh && shuffApp.length > 0) {
        selHigh.push(shuffApp.shift());
      }

      // 3. Select Application
      while (selApp.length < wantApplication && shuffApp.length > 0) {
        selApp.push(shuffApp.shift());
      }
      // If deficit in application, pull from remaining foundational or high
      while (selApp.length < wantApplication && shuffFoundational.length > 0) {
        selApp.push(shuffFoundational.shift());
      }
      while (selApp.length < wantApplication && shuffHigh.length > 0) {
        selApp.push(shuffHigh.shift());
      }

      // Final top-up if any pool was completely exhausted
      const allSelectedIds = new Set([
        ...selFoundational.map(q => q.id),
        ...selApp.map(q => q.id),
        ...selHigh.map(q => q.id)
      ]);

      const leftover = questions.filter(q => !allSelectedIds.has(q.id));
      const shuffLeftover = this.shuffleArray(leftover);

      while (selFoundational.length + selApp.length + selHigh.length < count && shuffLeftover.length > 0) {
        const item = shuffLeftover.shift();
        const tier = this.classifyQuestion(item);
        if (tier === 'foundational') selFoundational.push(item);
        else if (tier === 'highDifficulty') selHigh.push(item);
        else selApp.push(item);
      }

      // Tag questions with assigned CBT Tier metadata and target pacing
      const formatQuestion = (q, tierKey, sectionIndex, sectionName) => ({
        ...q,
        cbtTier: tierKey,
        cbtTierLabel: this.getTierLabel(tierKey),
        cbtSectionIndex: sectionIndex,
        cbtSectionName: sectionName,
        cbtPacingSeconds: this.getTierPacing(tierKey)
      });

      const formattedFoundational = selFoundational.map(q =>
        formatQuestion(q, 'foundational', 1, 'Section 1: Foundational / Direct Recall')
      );
      const formattedApp = selApp.map(q =>
        formatQuestion(q, 'application', 2, 'Section 2: Application & Problem-Solving')
      );
      const formattedHigh = selHigh.map(q =>
        formatQuestion(q, 'highDifficulty', 3, 'Section 3: High-Difficulty Edge Cases')
      );

      // Section-based ordered assembly: Foundational -> Application -> High-Difficulty
      const assembledQuestions = [
        ...formattedFoundational,
        ...formattedApp,
        ...formattedHigh
      ];

      // Exact calibrated test duration based on per-question tier pacing:
      // ~45s for Foundational, ~60s for Application, ~90s for High Difficulty
      const calculatedDurationSeconds = assembledQuestions.reduce(
        (acc, q) => acc + (q.cbtPacingSeconds || 60),
        0
      );

      // Clean round to minutes (e.g. 1800s -> 30 mins, 2100s -> 35 mins, 2400s -> 40 mins)
      const durationMinutes = Math.round(calculatedDurationSeconds / 60);
      const durationSeconds = durationMinutes * 60;

      return {
        questions: assembledQuestions,
        totalCount: assembledQuestions.length,
        durationSeconds,
        durationMinutes,
        distribution: {
          foundational: formattedFoundational.length,
          application: formattedApp.length,
          highDifficulty: formattedHigh.length,
          foundationalPct: Math.round((formattedFoundational.length / assembledQuestions.length) * 100),
          applicationPct: Math.round((formattedApp.length / assembledQuestions.length) * 100),
          highDifficultyPct: Math.round((formattedHigh.length / assembledQuestions.length) * 100)
        }
      };
    }
  }

  window.CBTAssembler = new CBTAssemblerEngine();
})();
