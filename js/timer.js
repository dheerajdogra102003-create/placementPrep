/* ==========================================================================
   PLACEMENTPREP - CBT TIMER ENGINE
   High-reliability, non-duplicating countdown timer with auto-submit
   ========================================================================== */

(function () {
  class CBTTimer {
    constructor(durationSeconds, onTick, onExpire) {
      this.totalDuration = durationSeconds;
      this.remainingSeconds = durationSeconds;
      this.onTick = onTick || (() => {});
      this.onExpire = onExpire || (() => {});
      this.intervalId = null;
      this.isRunning = false;
    }

    start() {
      // Prevent duplicate timer intervals
      this.stop();

      this.isRunning = true;
      this.onTick(this.getFormattedTime(), this.remainingSeconds, this.getWarningState());

      this.intervalId = setInterval(() => {
        if (!this.isRunning) return;

        this.remainingSeconds--;

        if (this.remainingSeconds <= 0) {
          this.remainingSeconds = 0;
          this.stop();
          this.onTick(this.getFormattedTime(), 0, 'critical');
          this.onExpire();
        } else {
          this.onTick(this.getFormattedTime(), this.remainingSeconds, this.getWarningState());
        }
      }, 1000);
    }

    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.isRunning = false;
    }

    getTimeSpentSeconds() {
      return this.totalDuration - this.remainingSeconds;
    }

    getFormattedTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    getFormattedTimeSpent() {
      const spent = this.getTimeSpentSeconds();
      const minutes = Math.floor(spent / 60);
      const seconds = spent % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    getWarningState() {
      // Critical warning: less than 60 seconds
      if (this.remainingSeconds <= 60) {
        return 'critical';
      }
      // Amber warning: less than 5 minutes (300 seconds)
      if (this.remainingSeconds <= 300) {
        return 'warning';
      }
      return 'normal';
    }
  }

  window.CBTTimer = CBTTimer;
})();
