/**
 * PLACEMENTPREP - PROFESSIONAL CBT EXAMINATION CONTROLLER
 * Global, Reusable CBT Shell Engine for All Learning & Question Modules
 * 
 * Manages:
 * - Desktop Two-Column Layout (Question Workspace + Dedicated Sticky Palette)
 * - Mobile Overlay / Bottom-Sheet Palette (eliminates huge permanent stacked grids)
 * - Sticky Mobile Bottom Navigation (Previous | Questions | Next)
 * - Standardized Answer Option Component Alignment
 * - AI Explanation & Placement Trap Layouts
 * - Standardized Examination Submit Confirmation Modal
 */

(function (window, document) {
    'use strict';

    const CBTExamShell = {
        initialized: false,
        activeModule: null,
        sheetOpen: false,
        confirmOpen: false,

        /**
         * Initialize CBT Examination Engine
         */
        init: function () {
            if (this.initialized) return;
            this.initialized = true;

            this.setupMobileBottomBar();
            this.setupMobileBottomSheet();
            this.setupSubmitConfirmation();
            this.observeDOMChanges();
            this.syncPaletteStats();

            // Window resize handler
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1000 && this.sheetOpen) {
                    this.closeBottomSheet();
                }
            });
        },

        /**
         * Detects existing navigation buttons in the active module
         */
        getNavButtons: function () {
            const prevBtn = document.getElementById('btn-prev') || 
                            document.getElementById('btn-prev-q') || 
                            document.querySelector('.btn-prev');

            const nextBtn = document.getElementById('btn-next') || 
                            document.getElementById('btn-next-q') || 
                            document.querySelector('.btn-next');

            const submitBtn = document.getElementById('btn-submit-exam') || 
                              document.getElementById('btn-submit') || 
                              document.querySelector('.btn-submit-exam') ||
                              document.querySelector('.btn-primary-action[onclick*="submit"]');

            const reviewBtn = document.getElementById('btn-mark-review') || 
                              document.getElementById('btn-review-mark') || 
                              document.getElementById('btn-bookmark-q') ||
                              document.querySelector('.btn-bookmark');

            return { prevBtn, nextBtn, submitBtn, reviewBtn };
        },

        /**
         * Creates Sticky Mobile Bottom Bar (<1000px)
         */
        setupMobileBottomBar: function () {
            if (document.querySelector('.cbt-mobile-bottom-bar')) return;

            const bar = document.createElement('nav');
            bar.className = 'cbt-mobile-bottom-bar';
            bar.setAttribute('aria-label', 'Mobile CBT Navigation');
            bar.innerHTML = `
                <button type="button" class="cbt-btn-nav cbt-btn-prev" id="cbt-mobile-prev" aria-label="Previous question">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <span>Prev</span>
                </button>
                <button type="button" class="cbt-btn-nav cbt-btn-palette-trigger" id="cbt-mobile-palette-btn" aria-label="Open Question Palette">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <span id="cbt-mobile-q-label">Questions</span>
                </button>
                <button type="button" class="cbt-btn-nav cbt-btn-next" id="cbt-mobile-next" aria-label="Next question">
                    <span>Next</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            `;

            document.body.appendChild(bar);

            // Delegate Prev click
            document.getElementById('cbt-mobile-prev').addEventListener('click', () => {
                const { prevBtn } = this.getNavButtons();
                if (prevBtn && !prevBtn.disabled && prevBtn.offsetParent !== null) {
                    prevBtn.click();
                }
                this.updateMobileProgress();
            });

            // Delegate Next click
            document.getElementById('cbt-mobile-next').addEventListener('click', () => {
                const { nextBtn } = this.getNavButtons();
                if (nextBtn && !nextBtn.disabled && nextBtn.offsetParent !== null) {
                    nextBtn.click();
                }
                this.updateMobileProgress();
            });

            // Open palette bottom sheet
            document.getElementById('cbt-mobile-palette-btn').addEventListener('click', () => {
                this.openBottomSheet();
            });
        },

        /**
         * Creates Mobile Bottom Sheet for Question Palette (<1000px)
         */
        setupMobileBottomSheet: function () {
            if (document.querySelector('.cbt-bottom-sheet')) return;

            // 1. Backdrop
            const backdrop = document.createElement('div');
            backdrop.className = 'cbt-sheet-backdrop';
            backdrop.id = 'cbt-sheet-backdrop';
            document.body.appendChild(backdrop);

            // 2. Sheet Container
            const sheet = document.createElement('div');
            sheet.className = 'cbt-bottom-sheet';
            sheet.id = 'cbt-bottom-sheet';
            sheet.setAttribute('role', 'dialog');
            sheet.setAttribute('aria-modal', 'true');
            sheet.innerHTML = `
                <div class="cbt-sheet-header">
                    <div>
                        <h3>Question Palette</h3>
                        <span id="cbt-sheet-counter" style="font-size:12px;font-family:'JetBrains Mono',monospace;color:var(--cbt-text-secondary);">Question Navigator</span>
                    </div>
                    <button type="button" class="cbt-sheet-close-btn" id="cbt-sheet-close" aria-label="Close question palette">✕</button>
                </div>
                <div class="cbt-sheet-body">
                    <!-- Legend -->
                    <div class="cbt-palette-legend">
                        <div class="legend-pill"><span class="legend-dot unvisited"></span>Unvisited</div>
                        <div class="legend-pill"><span class="legend-dot answered"></span>Answered</div>
                        <div class="legend-pill"><span class="legend-dot marked"></span>Marked</div>
                        <div class="legend-pill"><span class="legend-dot current"></span>Current</div>
                    </div>

                    <!-- 5-column palette grid -->
                    <div class="cbt-sheet-grid" id="cbt-sheet-grid"></div>

                    <!-- Quick counts in sheet -->
                    <div class="cbt-palette-stats">
                        <div class="cbt-stat-mini">
                            <span class="stat-mini-label">Answered</span>
                            <span id="cbt-sheet-answered" class="stat-mini-val" style="color:var(--cbt-success);">0</span>
                        </div>
                        <div class="cbt-stat-mini">
                            <span class="stat-mini-label">Marked</span>
                            <span id="cbt-sheet-marked" class="stat-mini-val" style="color:var(--cbt-warning);">0</span>
                        </div>
                        <div class="cbt-stat-mini">
                            <span class="stat-mini-label">Remaining</span>
                            <span id="cbt-sheet-remaining" class="stat-mini-val">0</span>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(sheet);

            // Close actions
            backdrop.addEventListener('click', () => this.closeBottomSheet());
            document.getElementById('cbt-sheet-close').addEventListener('click', () => this.closeBottomSheet());
        },

        /**
         * Open Bottom Sheet and sync palette buttons
         */
        openBottomSheet: function () {
            this.syncBottomSheetGrid();
            document.getElementById('cbt-sheet-backdrop').classList.add('active');
            document.getElementById('cbt-bottom-sheet').classList.add('active');
            this.sheetOpen = true;
            document.body.style.overflow = 'hidden';
        },

        /**
         * Close Bottom Sheet
         */
        closeBottomSheet: function () {
            const backdrop = document.getElementById('cbt-sheet-backdrop');
            const sheet = document.getElementById('cbt-bottom-sheet');
            if (backdrop) backdrop.classList.remove('active');
            if (sheet) sheet.classList.remove('active');
            this.sheetOpen = false;
            document.body.style.overflow = '';
        },

        /**
         * Synchronizes Desktop & Mobile Palette Buttons
         */
        syncBottomSheetGrid: function () {
            const sheetGrid = document.getElementById('cbt-sheet-grid');
            if (!sheetGrid) return;

            // Find existing palette container
            const existingPaletteGrid = document.getElementById('navigator-grid') || 
                                        document.getElementById('palette-grid') ||
                                        document.querySelector('.cbt-palette-grid') ||
                                        document.querySelector('.navigator-grid');

            if (!existingPaletteGrid) return;

            sheetGrid.innerHTML = '';
            const existingButtons = existingPaletteGrid.querySelectorAll('button, div.nav-grid-item, div.palette-item');

            existingButtons.forEach((btn, index) => {
                const sheetBtn = document.createElement('button');
                sheetBtn.type = 'button';
                sheetBtn.className = 'cbt-palette-btn ' + (btn.className || '');
                sheetBtn.textContent = btn.textContent.trim() || (index + 1);

                sheetBtn.addEventListener('click', () => {
                    btn.click();
                    this.closeBottomSheet();
                    this.updateMobileProgress();
                });

                sheetGrid.appendChild(sheetBtn);
            });

            this.syncPaletteStats();
        },

        /**
         * Sync Live Palette Statistics (Answered, Marked, Remaining)
         */
        syncPaletteStats: function () {
            const paletteGrid = document.getElementById('navigator-grid') || 
                                document.getElementById('palette-grid') || 
                                document.getElementById('cbt-sheet-grid');

            if (!paletteGrid) return;

            const total = paletteGrid.querySelectorAll('button, .nav-grid-item').length;
            const answered = paletteGrid.querySelectorAll('.answered').length;
            const marked = paletteGrid.querySelectorAll('.marked, .review').length;
            const remaining = Math.max(0, total - answered);

            // Update Desktop Stats
            const dAns = document.getElementById('side-stat-answered');
            const dMark = document.getElementById('side-stat-marked');
            const dRem = document.getElementById('side-stat-remaining');
            if (dAns) dAns.textContent = answered;
            if (dMark) dMark.textContent = marked;
            if (dRem) dRem.textContent = remaining;

            // Update Mobile Sheet Stats
            const mAns = document.getElementById('cbt-sheet-answered');
            const mMark = document.getElementById('cbt-sheet-marked');
            const mRem = document.getElementById('cbt-sheet-remaining');
            if (mAns) mAns.textContent = answered;
            if (mMark) mMark.textContent = marked;
            if (mRem) mRem.textContent = remaining;

            const counterBadge = document.getElementById('nav-count-badge');
            if (counterBadge) counterBadge.textContent = `${answered} / ${total}`;

            const sheetCounter = document.getElementById('cbt-sheet-counter');
            if (sheetCounter) sheetCounter.textContent = `${answered} of ${total} Answered`;

            // Mobile button label
            const mobileLabel = document.getElementById('cbt-mobile-q-label');
            if (mobileLabel) {
                const curText = document.getElementById('question-progress-label')?.textContent || 
                                document.getElementById('current-q-num')?.textContent;
                mobileLabel.textContent = curText ? `Q ${curText.replace(/\D+/g, ' ').trim().split(' ')[0] || ''}` : 'Questions';
            }
        },

        /**
         * Update progress label in mobile bottom bar
         */
        updateMobileProgress: function () {
            setTimeout(() => this.syncPaletteStats(), 100);
        },

        /**
         * Setup CBT Submit Confirmation Dialog
         */
        setupSubmitConfirmation: function () {
            if (document.querySelector('.cbt-confirm-backdrop')) return;

            const backdrop = document.createElement('div');
            backdrop.className = 'cbt-confirm-backdrop';
            backdrop.id = 'cbt-confirm-backdrop';
            backdrop.innerHTML = `
                <div class="cbt-confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="cbt-confirm-heading">
                    <h3 id="cbt-confirm-heading" class="cbt-confirm-title">Submit Examination</h3>
                    <p class="cbt-confirm-desc">Are you sure you want to finish and submit your exam? Check your progress breakdown below:</p>
                    
                    <div class="cbt-confirm-stats">
                        <div>
                            <div class="cbt-confirm-stat-num" id="cbt-modal-answered" style="color:var(--cbt-success);">0</div>
                            <div class="cbt-confirm-stat-label">Answered</div>
                        </div>
                        <div>
                            <div class="cbt-confirm-stat-num" id="cbt-modal-unanswered" style="color:var(--cbt-error);">0</div>
                            <div class="cbt-confirm-stat-label">Unanswered</div>
                        </div>
                        <div>
                            <div class="cbt-confirm-stat-num" id="cbt-modal-marked" style="color:var(--cbt-warning);">0</div>
                            <div class="cbt-confirm-stat-label">Marked Review</div>
                        </div>
                    </div>

                    <div class="cbt-confirm-actions">
                        <button type="button" class="cbt-confirm-btn cancel" id="cbt-modal-btn-cancel">Continue Test</button>
                        <button type="button" class="cbt-confirm-btn submit" id="cbt-modal-btn-submit">Submit Test</button>
                    </div>
                </div>
            `;

            document.body.appendChild(backdrop);

            // Hook Submit button click across modules
            document.addEventListener('click', (e) => {
                const target = e.target.closest('#btn-submit-exam, #btn-submit, .btn-submit-exam, #cbt-mobile-submit');
                if (target && !this.confirmOpen && !target.hasAttribute('data-cbt-confirmed')) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    this.openSubmitConfirm(target);
                }
            }, true);

            document.getElementById('cbt-modal-btn-cancel').addEventListener('click', () => {
                this.closeSubmitConfirm();
            });

            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) this.closeSubmitConfirm();
            });
        },

        /**
         * Open Submit Confirmation Modal
         */
        openSubmitConfirm: function (triggerBtn) {
            this.pendingSubmitBtn = triggerBtn;

            // Calculate live stats
            const paletteGrid = document.getElementById('navigator-grid') || 
                                document.getElementById('palette-grid') || 
                                document.getElementById('cbt-sheet-grid');

            const total = paletteGrid ? paletteGrid.querySelectorAll('button, .nav-grid-item').length : 100;
            const answered = paletteGrid ? paletteGrid.querySelectorAll('.answered').length : 0;
            const marked = paletteGrid ? paletteGrid.querySelectorAll('.marked, .review').length : 0;
            const unanswered = Math.max(0, total - answered);

            document.getElementById('cbt-modal-answered').textContent = answered;
            document.getElementById('cbt-modal-unanswered').textContent = unanswered;
            document.getElementById('cbt-modal-marked').textContent = marked;

            const submitConfirmBtn = document.getElementById('cbt-modal-btn-submit');
            submitConfirmBtn.onclick = () => {
                this.closeSubmitConfirm();
                if (this.pendingSubmitBtn) {
                    this.pendingSubmitBtn.setAttribute('data-cbt-confirmed', 'true');
                    this.pendingSubmitBtn.click();
                    setTimeout(() => this.pendingSubmitBtn?.removeAttribute('data-cbt-confirmed'), 500);
                }
            };

            document.getElementById('cbt-confirm-backdrop').classList.add('active');
            this.confirmOpen = true;
        },

        /**
         * Close Submit Confirmation Modal
         */
        closeSubmitConfirm: function () {
            const backdrop = document.getElementById('cbt-confirm-backdrop');
            if (backdrop) backdrop.classList.remove('active');
            this.confirmOpen = false;
        },

        /**
         * Observers DOM mutations to enforce option grid and palette states dynamically
         */
        observeDOMChanges: function () {
            const observer = new MutationObserver(() => {
                this.standardizeOptionElements();
                this.syncPaletteStats();
            });

            const quizSection = document.getElementById('screen-quiz-workspace') || 
                                document.getElementById('screen-workspace') || 
                                document.body;

            observer.observe(quizSection, { childList: true, subtree: true });
            this.standardizeOptionElements();
        },

        /**
         * Standardizes Answer Option Elements across all modules
         */
        standardizeOptionElements: function () {
            // Find option elements and ensure proper prefix classes
            document.querySelectorAll('.option-btn, .option-item, .option-card').forEach(opt => {
                if (!opt.classList.contains('cbt-option')) {
                    opt.classList.add('cbt-option');
                }

                // Ensure letter prefix has standard class
                const letter = opt.querySelector('.option-letter, .opt-prefix, .option-key');
                if (letter && !letter.classList.contains('cbt-option-letter')) {
                    letter.classList.add('cbt-option-letter');
                }

                // Ensure text has standard class
                const text = opt.querySelector('.option-text, .opt-text');
                if (text && !text.classList.contains('cbt-option-text')) {
                    text.classList.add('cbt-option-text');
                }
            });
        }
    };

    // Expose to window
    window.CBTExamShell = CBTExamShell;

    // Auto-init on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => CBTExamShell.init());
    } else {
        CBTExamShell.init();
    }

})(window, document);
