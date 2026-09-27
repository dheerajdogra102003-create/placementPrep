/* ==========================================================================
   PLACEMENTPREP - LOCAL STORAGE & PROGRESS MANAGER
   ========================================================================== */

(function () {
  const PREFIX = 'placementPrep_';

  window.StorageManager = {
    // Save test result
    saveTestResult(result) {
      try {
        const history = this.getTestHistory();
        history.unshift({
          id: 'test_' + Date.now(),
          timestamp: new Date().toISOString(),
          ...result
        });
        // Keep last 50 tests
        if (history.length > 50) history.length = 50;
        localStorage.setItem(PREFIX + 'test_history', JSON.stringify(history));
        this.updateStreak();
      } catch (e) {
        console.warn('Storage save failed:', e);
      }
    },

    getTestHistory() {
      try {
        const raw = localStorage.getItem(PREFIX + 'test_history');
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    // Save bookmarks
    toggleBookmark(moduleId, questionId) {
      try {
        const bookmarks = this.getBookmarks();
        const key = `${moduleId}:${questionId}`;
        const index = bookmarks.indexOf(key);
        let bookmarked = false;
        if (index > -1) {
          bookmarks.splice(index, 1);
        } else {
          bookmarks.push(key);
          bookmarked = true;
        }
        localStorage.setItem(PREFIX + 'bookmarks', JSON.stringify(bookmarks));
        return bookmarked;
      } catch (e) {
        return false;
      }
    },

    isBookmarked(moduleId, questionId) {
      try {
        const bookmarks = this.getBookmarks();
        return bookmarks.includes(`${moduleId}:${questionId}`);
      } catch (e) {
        return false;
      }
    },

    getBookmarks() {
      try {
        const raw = localStorage.getItem(PREFIX + 'bookmarks');
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    // Daily Streak Tracker
    updateStreak() {
      try {
        const today = new Date().toISOString().split('T')[0];
        const raw = localStorage.getItem(PREFIX + 'streak');
        let streakData = raw ? JSON.parse(raw) : { currentStreak: 0, lastActiveDate: '', bestStreak: 0 };

        if (streakData.lastActiveDate === today) {
          return streakData;
        }

        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (streakData.lastActiveDate === yesterday) {
          streakData.currentStreak += 1;
        } else if (streakData.lastActiveDate !== today) {
          streakData.currentStreak = 1;
        }

        if (streakData.currentStreak > streakData.bestStreak) {
          streakData.bestStreak = streakData.currentStreak;
        }

        streakData.lastActiveDate = today;
        localStorage.setItem(PREFIX + 'streak', JSON.stringify(streakData));
        return streakData;
      } catch (e) {
        return { currentStreak: 1, bestStreak: 1 };
      }
    },

    getStreak() {
      try {
        const raw = localStorage.getItem(PREFIX + 'streak');
        return raw ? JSON.parse(raw) : { currentStreak: 1, bestStreak: 1 };
      } catch (e) {
        return { currentStreak: 1, bestStreak: 1 };
      }
    },

    // Overall aggregate stats
    getGlobalStats() {
      const history = this.getTestHistory();
      let totalTests = history.length;
      let totalQuestionsAttempted = 0;
      let totalCorrect = 0;

      history.forEach(item => {
        totalQuestionsAttempted += (item.total || 0);
        totalCorrect += (item.correct || 0);
      });

      const avgAccuracy = totalQuestionsAttempted > 0 
        ? Math.round((totalCorrect / totalQuestionsAttempted) * 100) 
        : 0;

      return {
        totalTests,
        totalQuestionsAttempted,
        totalCorrect,
        avgAccuracy,
        streak: this.getStreak().currentStreak || 1
      };
    }
  };
})();
