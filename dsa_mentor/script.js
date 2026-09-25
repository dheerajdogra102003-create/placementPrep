/**
 * AI DSA Mentor & Placement Coach - Application Controller
 * Handles 22-phase roadmap, prerequisite checks, 14-step daily learning algorithm,
 * practice studio, Python test execution, mentor interactions, and command palette.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // App State
    let currentProblem = null;
    let currentTestResults = null;
    let practiceStartTime = null;
    let sessionTimerInterval = null;
    let sessionRemainingSeconds = 30 * 60;

    // Cache Elements
    const views = document.querySelectorAll('.app-view');
    const navTabs = document.querySelectorAll('.dsa-nav-tab');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const cmdPaletteOverlay = document.getElementById('cmd-palette-overlay');
    const cmdInput = document.getElementById('cmd-palette-input');
    const cmdResultsList = document.getElementById('cmd-results-list');
    const openCmdBtn = document.getElementById('open-cmd-palette');
    const toastContainer = document.getElementById('toast-container');

    // Practice Elements
    const codeTextarea = document.getElementById('code-editor-textarea');
    const lineNumbersDiv = document.getElementById('editor-line-numbers');
    const btnRunCode = document.getElementById('btn-run-code');
    const btnSubmitCode = document.getElementById('btn-submit-code');
    const btnResetCode = document.getElementById('btn-reset-code');
    const testResultsContainer = document.getElementById('test-results-container');
    const mentorChatStream = document.getElementById('mentor-chat-stream');
    const studentThinkingInput = document.getElementById('student-thinking-input');
    const btnSendThinking = document.getElementById('btn-send-thinking');

    // =========================================================================
    // 1. THEME INITIALIZATION
    // =========================================================================
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', nextTheme);
                localStorage.setItem('placementPrep_theme', nextTheme);
                localStorage.setItem('placementprep-theme', nextTheme);
            });
        }
    }
    initTheme();

    // =========================================================================
    // 2. VIEW NAVIGATION
    // =========================================================================
    function switchView(viewId) {
        views.forEach(v => v.classList.remove('active'));
        navTabs.forEach(t => t.classList.remove('active'));

        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.add('active');

        const activeTab = document.querySelector(`.dsa-nav-tab[data-view="${viewId}"]`);
        if (activeTab) activeTab.classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (viewId === 'view-dashboard') renderDashboard();
        else if (viewId === 'view-roadmap') renderRoadmap();
        else if (viewId === 'view-mistakes') renderMistakes();
        else if (viewId === 'view-revision') renderRevision();
        else if (viewId === 'view-analytics') renderAnalytics();
        else if (viewId === 'view-notes') renderNotes();
        else if (viewId === 'view-placement') renderPlacementMode();
        else if (viewId === 'view-settings') renderSettings();
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const vId = e.currentTarget.getAttribute('data-view');
            if (vId) switchView(vId);
        });
    });

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-switch-view]');
        if (btn) {
            const target = btn.getAttribute('data-switch-view');
            if (target) switchView(target);
        }
    });

    function showToast(message, icon = 'ℹ️', duration = 3000) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 250);
        }, duration);
    }

    // =========================================================================
    // 3. DASHBOARD & 14-STEP LEARNING ALGORITHM
    // =========================================================================
    function renderDashboard() {
        if (!window.DSAStorage) return;
        const metrics = window.DSAStorage.getDashboardMetrics();
        const dailyRecommendation = window.DSAStorage.runDailyLearningAlgorithm();

        const elRate = document.getElementById('dash-solve-rate');
        const elAttempted = document.getElementById('dash-attempted');
        const elStreak = document.getElementById('dash-streak');
        const elRevision = document.getElementById('dash-revision-due');
        const elWeakest = document.getElementById('dash-weakest-pattern');

        if (elRate) elRate.textContent = `${metrics.independentSolveRate}%`;
        if (elAttempted) elAttempted.textContent = metrics.totalAttempted;
        if (elStreak) elStreak.textContent = `${metrics.streakDays}d`;
        if (elRevision) elRevision.textContent = metrics.revisionDueCount;
        if (elWeakest) elWeakest.textContent = metrics.currentTopic;

        // Skills Bars
        const skillsContainer = document.getElementById('dash-skills-list');
        if (skillsContainer && metrics.skillScores) {
            skillsContainer.innerHTML = '';
            const labels = {
                problem_understanding: "Problem Understanding",
                logic_building: "Logic Building",
                dry_run: "Dry-Run Tracing",
                pattern_recognition: "Pattern Recognition",
                coding: "Python Coding",
                debugging: "Debugging",
                optimization: "Time & Space Complexity"
            };

            for (let [k, score] of Object.entries(metrics.skillScores)) {
                const percent = Math.min(100, Math.round((score / 5) * 100));
                const item = document.createElement('div');
                item.className = 'skill-item';
                item.innerHTML = `
                    <div class="skill-header">
                        <span>${labels[k] || k}</span>
                        <span>${score.toFixed(1)} / 5.0</span>
                    </div>
                    <div class="skill-track">
                        <div class="skill-fill" style="width: ${percent}%;"></div>
                    </div>
                `;
                skillsContainer.appendChild(item);
            }
        }

        // Daily Algorithm Recommendation Box
        const recBox = document.getElementById('dash-recommended-box');
        if (recBox && dailyRecommendation && dailyRecommendation.problem) {
            const p = dailyRecommendation.problem;
            recBox.innerHTML = `
                <div>
                    <div class="problem-badge-row" style="margin-bottom: 0.35rem;">
                        <span class="badge badge-easy">${p.difficulty}</span>
                        <span class="badge badge-pattern">${p.pattern}</span>
                        <span style="font-size: 0.75rem; color: var(--accent-primary); font-weight: 600;">⭐ ${dailyRecommendation.title}</span>
                    </div>
                    <h3 style="font-size: 1.15rem; font-weight: 700;">${p.title}</h3>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">${dailyRecommendation.reason}</p>
                </div>
                <button class="btn btn-primary" id="btn-start-recommended" data-problem-id="${p.id}">
                    <span>Start Practice</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            `;

            document.getElementById('btn-start-recommended')?.addEventListener('click', () => {
                loadProblemIntoPractice(p);
            });
        }
    }

    // =========================================================================
    // 4. PRACTICE STUDIO
    // =========================================================================
    function loadProblemIntoPractice(problem) {
        currentProblem = problem;
        currentTestResults = null;
        practiceStartTime = performance.now();
        window.DSAMentorEngine?.resetHints(problem.id);

        switchView('view-practice');

        document.getElementById('practice-problem-title').textContent = problem.title;
        document.getElementById('practice-difficulty-badge').textContent = problem.difficulty;
        document.getElementById('practice-pattern-badge').textContent = problem.pattern;
        document.getElementById('practice-description').textContent = problem.description;
        document.getElementById('practice-input-format').textContent = problem.input_format;
        document.getElementById('practice-output-format').textContent = problem.output_format;

        const phaseObj = (window.DSA_ROADMAP_PHASES || []).find(ph => ph.id === problem.phase);
        document.getElementById('practice-phase-name').textContent = phaseObj ? phaseObj.name : problem.phase;

        const tagsContainer = document.getElementById('practice-company-tags');
        if (tagsContainer) {
            tagsContainer.innerHTML = (problem.companies || []).map(c => `<span class="company-pill">${c}</span>`).join('');
        }

        const examplesContainer = document.getElementById('practice-examples-container');
        if (examplesContainer) {
            examplesContainer.innerHTML = (problem.examples || []).map((ex, i) => `
                <div class="example-card">
                    <strong>Example ${i + 1}:</strong><br>
                    <strong>Input:</strong> ${ex.input}<br>
                    <strong>Output:</strong> ${ex.output}<br>
                    ${ex.explanation ? `<strong>Explanation:</strong> ${ex.explanation}` : ''}
                </div>
            `).join('');
        }

        const constraintsList = document.getElementById('practice-constraints-list');
        if (constraintsList) {
            constraintsList.innerHTML = (problem.constraints || []).map(c => `<li>${c}</li>`).join('');
        }

        if (codeTextarea) {
            codeTextarea.value = problem.starter_code;
            updateLineNumbers();
        }

        if (testResultsContainer) {
            testResultsContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem; padding: 1rem; text-align: center;">Click <strong>Run Code</strong> to execute test cases against your Python function.</div>`;
        }

        if (mentorChatStream) {
            mentorChatStream.innerHTML = '';
            addMentorBubble(`👋 Hello! I am your AI DSA Mentor for **${problem.title}**.\n\nTake a moment to read the examples. **Before writing code**, tell me: what is the pattern or steps in plain English? Or click **'Pattern Questions'**!`);
        }

        switchStudioBottomTab('tab-tests');
    }

    function updateLineNumbers() {
        if (!codeTextarea || !lineNumbersDiv) return;
        const lineCount = codeTextarea.value.split('\n').length;
        let numbersHtml = '';
        for (let i = 1; i <= Math.max(lineCount, 12); i++) {
            numbersHtml += `${i}<br>`;
        }
        lineNumbersDiv.innerHTML = numbersHtml;
    }

    if (codeTextarea) {
        codeTextarea.addEventListener('input', updateLineNumbers);
        codeTextarea.addEventListener('scroll', () => {
            if (lineNumbersDiv) lineNumbersDiv.scrollTop = codeTextarea.scrollTop;
        });

        codeTextarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = codeTextarea.selectionStart;
                const end = codeTextarea.selectionEnd;
                codeTextarea.value = codeTextarea.value.substring(0, start) + "    " + codeTextarea.value.substring(end);
                codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 4;
                updateLineNumbers();
            }
        });
    }

    btnResetCode?.addEventListener('click', () => {
        if (currentProblem && codeTextarea) {
            if (confirm("Reset code back to starter template?")) {
                codeTextarea.value = currentProblem.starter_code;
                updateLineNumbers();
                showToast("Code reset.", "🔄");
            }
        }
    });

    btnRunCode?.addEventListener('click', async () => {
        if (!currentProblem || !codeTextarea) return;
        btnRunCode.disabled = true;
        btnRunCode.innerHTML = `<span>Running...</span>`;

        switchStudioBottomTab('tab-tests');
        testResultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center;"><div class="stat-pill">⏳ Executing Python tests in browser...</div></div>`;

        try {
            const results = await window.PythonTestRunner.runTests(codeTextarea.value, currentProblem);
            currentTestResults = results;
            renderTestResults(results);

            if (results.allPassed) {
                showToast(`🎉 All tests passed! Ready to submit.`, "✅");
                addMentorBubble(`🎯 **Awesome job!** All test cases passed cleanly! Click **Submit** to lock your mastery.`);
            } else {
                showToast(`${results.passedTests}/${results.totalTests} tests passed. Check failed cases.`, "⚠️");
                addMentorBubble(`💡 Some test cases failed. Click **'Debug My Error'** or ask for a progressive hint!`);
            }
        } catch (err) {
            testResultsContainer.innerHTML = `<div class="tc-card failed"><strong>Error:</strong> ${err.message}</div>`;
        } finally {
            btnRunCode.disabled = false;
            btnRunCode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Run Code</span>`;
        }
    });

    btnSubmitCode?.addEventListener('click', async () => {
        if (!currentProblem || !codeTextarea) return;
        btnSubmitCode.disabled = true;
        btnSubmitCode.innerHTML = `<span>Submitting...</span>`;

        try {
            const results = await window.PythonTestRunner.runTests(codeTextarea.value, currentProblem);
            currentTestResults = results;
            renderTestResults(results);

            const timeTakenSec = practiceStartTime ? Math.round((performance.now() - practiceStartTime) / 1000) : 60;
            const hintsUsed = window.DSAMentorEngine.getUnlockedHintLevel(currentProblem.id);

            const attempt = window.DSAStorage.recordAttempt({
                problem_id: currentProblem.id,
                time_taken_seconds: timeTakenSec,
                hints_used: hintsUsed,
                solution_seen: hintsUsed === 5,
                all_passed: results.allPassed,
                code_submission: codeTextarea.value,
                mistake_type: results.allPassed ? null : "logic mistake"
            });

            if (results.allPassed) {
                showReviewModal(currentProblem, attempt);
            } else {
                alert(`⚠️ Not all tests passed (${results.passedTests}/${results.totalTests}). Fix errors before submitting.`);
            }
        } catch (e) {
            alert("Submission error: " + e.message);
        } finally {
            btnSubmitCode.disabled = false;
            btnSubmitCode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Submit</span>`;
        }
    });

    function renderTestResults(res) {
        if (!testResultsContainer) return;
        if (res.summaryError) {
            testResultsContainer.innerHTML = `<div class="tc-card failed"><strong>Error:</strong> ${res.summaryError}</div>`;
            return;
        }

        let html = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <strong>Test Results: ${res.passedTests} / ${res.totalTests} Passed</strong>
                <span class="badge ${res.allPassed ? 'badge-easy' : 'badge-hard'}">${res.allPassed ? 'Passed' : 'Failed'}</span>
            </div>
        `;

        res.results.forEach((tc) => {
            html += `
                <div class="tc-card ${tc.passed ? 'passed' : 'failed'}">
                    <div style="display: flex; justify-content: space-between;">
                        <strong>${tc.name}</strong>
                        <span style="font-weight: 700; color: ${tc.passed ? 'var(--accent-green)' : 'var(--accent-red)'}">
                            ${tc.passed ? '✓ PASSED' : '✗ FAILED'} (${tc.executionTimeMs}ms)
                        </span>
                    </div>
                    <div style="font-family: monospace; font-size: 0.8rem; margin-top: 0.35rem;">
                        <strong>Input:</strong> ${tc.input}<br>
                        <strong>Expected:</strong> ${JSON.stringify(tc.expected)}<br>
                        <strong>Output:</strong> ${JSON.stringify(tc.actual)}
                        ${tc.error ? `<br><strong style="color: var(--accent-red)">Error:</strong> ${tc.error}` : ''}
                        ${tc.stdout ? `<br><strong>stdout:</strong> ${tc.stdout}` : ''}
                    </div>
                </div>
            `;
        });

        testResultsContainer.innerHTML = html;
    }

    function switchStudioBottomTab(tabId) {
        document.querySelectorAll('.bottom-tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.bottom-tab-content').forEach(c => c.classList.remove('active'));

        const targetBtn = document.querySelector(`.bottom-tab[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(tabId);
        if (targetBtn) targetBtn.classList.add('active');
        if (targetContent) targetContent.classList.add('active');
    }

    document.querySelectorAll('.bottom-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tId = e.currentTarget.getAttribute('data-tab');
            if (tId) switchStudioBottomTab(tId);
        });
    });

    // =========================================================================
    // 5. MENTOR CHAT & PATTERN TRAINING
    // =========================================================================
    function addMentorBubble(markdownText) {
        if (!mentorChatStream) return;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble mentor';
        let parsed = markdownText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code style="background: rgba(0,0,0,0.15); padding: 0.1rem 0.3rem; border-radius: 3px;">$1</code>')
            .replace(/\n/g, '<br>');
        bubble.innerHTML = parsed;
        mentorChatStream.appendChild(bubble);
        mentorChatStream.scrollTop = mentorChatStream.scrollHeight;
    }

    function addStudentBubble(text) {
        if (!mentorChatStream) return;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble student';
        bubble.textContent = text;
        mentorChatStream.appendChild(bubble);
        mentorChatStream.scrollTop = mentorChatStream.scrollHeight;
    }

    async function handleMentorQuery(mode, userMessage = "") {
        if (!currentProblem) return;
        switchStudioBottomTab('tab-mentor');

        if (userMessage) addStudentBubble(userMessage);

        const typingBubble = document.createElement('div');
        typingBubble.className = 'chat-bubble mentor';
        typingBubble.innerHTML = '<em>Mentor is analyzing... 🤖</em>';
        mentorChatStream.appendChild(typingBubble);
        mentorChatStream.scrollTop = mentorChatStream.scrollHeight;

        try {
            const resp = await window.DSAMentorEngine.queryMentor({
                mode: mode,
                problem: currentProblem,
                studentCode: codeTextarea?.value || "",
                userMessage: userMessage,
                testResults: currentTestResults
            });
            typingBubble.remove();
            addMentorBubble(resp.text);
        } catch (e) {
            typingBubble.remove();
            addMentorBubble(`Error: ${e.message}`);
        }
    }

    document.querySelectorAll('.mentor-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            const action = e.currentTarget.getAttribute('data-action');
            if (action === 'get_hint') handleMentorQuery('hint');
            else if (action === 'im_stuck') handleMentorQuery('stuck');
            else if (action === 'pattern_guide') handleMentorQuery('pattern');
            else if (action === 'dry_run') handleMentorQuery('dry_run');
            else if (action === 'complexity') handleMentorQuery('complexity');
            else if (action === 'interview_pitch') handleMentorQuery('interview');
            else if (action === 'debug_error') handleMentorQuery('debug_error');
        });
    });

    btnSendThinking?.addEventListener('click', () => {
        if (!studentThinkingInput) return;
        const text = studentThinkingInput.value.trim();
        if (!text) return;
        studentThinkingInput.value = '';
        handleMentorQuery('pattern', text);
    });

    studentThinkingInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') btnSendThinking?.click();
    });

    // =========================================================================
    // 6. REVIEW MODAL
    // =========================================================================
    function showReviewModal(problem, attempt) {
        const modal = document.getElementById('review-modal');
        if (!modal) return;

        document.getElementById('review-problem-title').textContent = problem.title;
        document.getElementById('review-pattern-name').textContent = problem.pattern;
        document.getElementById('review-time-complexity').textContent = problem.time_complexity;
        document.getElementById('review-space-complexity').textContent = problem.space_complexity;
        document.getElementById('review-explanation').textContent = problem.explanation;
        document.getElementById('review-solution-code').textContent = problem.solution_code;

        modal.classList.remove('hidden');

        document.getElementById('btn-close-review')?.addEventListener('click', () => {
            modal.classList.add('hidden');
            switchView('view-dashboard');
        }, { once: true });

        document.getElementById('btn-add-review-to-notes')?.addEventListener('click', () => {
            window.DSAStorage.addNote(
                "concept_notes",
                `${problem.title} (${problem.pattern})`,
                `Pattern: ${problem.pattern}\nTime: ${problem.time_complexity}\nSpace: ${problem.space_complexity}\n\nTakeaway: ${problem.explanation}`
            );
            showToast("Saved to Notes!", "📝");
        }, { once: true });

        document.getElementById('btn-next-after-review')?.addEventListener('click', () => {
            modal.classList.add('hidden');
            const daily = window.DSAStorage.runDailyLearningAlgorithm();
            if (daily?.problem) loadProblemIntoPractice(daily.problem);
            else switchView('view-dashboard');
        }, { once: true });
    }

    // =========================================================================
    // 7. ROADMAP VIEW WITH 22 PHASES & PREREQUISITE LOCKING
    // =========================================================================
    function renderRoadmap() {
        const container = document.getElementById('roadmap-phases-container');
        if (!container || !window.DSA_ROADMAP_PHASES) return;

        const phases = window.DSA_ROADMAP_PHASES;
        const attempts = window.DSAStorage?.state?.attempts || [];
        const solvedIds = new Set(attempts.filter(a => a.result === 'passed').map(a => a.problem_id));

        container.innerHTML = phases.map(phase => {
            const isUnlocked = window.DSAStorage.isPhaseUnlocked(phase.id);
            const phaseStatus = window.DSAStorage.state.phasesMastery?.[phase.id]?.status || "Not Started";
            const phaseProbs = (window.DSA_PROBLEMS || []).filter(p => p.phase === phase.id);
            const solvedCount = phaseProbs.filter(p => solvedIds.has(p.id)).length;

            return `
                <div class="roadmap-phase-card" style="opacity: ${isUnlocked ? '1' : '0.75'}; border-color: ${isUnlocked ? 'var(--border-color)' : 'var(--border-subtle)'};">
                    <div class="phase-header">
                        <div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <h3 style="font-size: 1.1rem; font-weight: 700;">Phase ${phase.number}: ${phase.name}</h3>
                                ${!isUnlocked ? '<span class="badge" style="background: rgba(230,0,35,0.1); color: var(--accent-red);">🔒 Prerequisite Locked</span>' : ''}
                            </div>
                            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">${phase.goal}</p>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="badge ${phaseStatus === 'Mastered' ? 'badge-easy' : 'badge-pattern'}">
                                ${phaseStatus}
                            </span>
                            ${!isUnlocked ? `
                                <button class="btn btn-secondary btn-test-out" data-phase-id="${phase.id}" style="font-size: 0.75rem; padding: 0.25rem 0.55rem;">
                                    ⚡ Test Out
                                </button>
                            ` : ''}
                        </div>
                    </div>

                    <!-- Topics Tags -->
                    <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
                        ${(phase.topics || []).map(t => `<span class="company-pill">${t}</span>`).join('')}
                    </div>

                    <!-- Problems Grid -->
                    ${phaseProbs.length > 0 ? `
                        <div class="phase-topics-grid">
                            ${phaseProbs.map(p => {
                                const isSolved = solvedIds.has(p.id);
                                return `
                                    <div class="topic-box ${isSolved ? 'completed' : ''}" data-problem-id="${p.id}" data-phase-id="${phase.id}">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                                            <span class="badge badge-easy" style="font-size: 0.68rem;">${p.difficulty}</span>
                                            <span>${isSolved ? '✅' : (isUnlocked ? '⏳' : '🔒')}</span>
                                        </div>
                                        <strong style="font-size: 0.9rem;">${p.title}</strong>
                                        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">${p.pattern}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    ` : `
                        <div style="font-size: 0.8rem; color: var(--text-muted); padding: 0.5rem; background: var(--bg-surface-secondary); border-radius: var(--radius-sm);">
                            Theory &amp; Concept Mastery: Practice unlocked after completing prerequisite problem sets.
                        </div>
                    `}
                </div>
            `;
        }).join('');

        // Problem Box Click Handlers with Prerequisite Guard
        container.querySelectorAll('.topic-box').forEach(box => {
            box.addEventListener('click', () => {
                const phaseId = box.getAttribute('data-phase-id');
                const isUnlocked = window.DSAStorage.isPhaseUnlocked(phaseId);

                if (!isUnlocked) {
                    if (confirm(`🔒 Phase is locked! Prerequisite phases must be completed first.\n\nDo you want to Test Out of prerequisites to unlock this phase right now?`)) {
                        window.DSAStorage.testOutPhase(phaseId);
                        showToast(`Phase unlocked via Test-Out!`, "⚡");
                        renderRoadmap();
                    }
                    return;
                }

                const pid = box.getAttribute('data-problem-id');
                const prob = window.DSA_PROBLEMS.find(p => p.id === pid);
                if (prob) loadProblemIntoPractice(prob);
            });
        });

        // Test-Out Buttons
        container.querySelectorAll('.btn-test-out').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const phId = btn.getAttribute('data-phase-id');
                if (confirm(`⚡ Test Out of Phase Prerequisites:\nAre you ready to unlock this phase?`)) {
                    window.DSAStorage.testOutPhase(phId);
                    showToast(`Phase unlocked!`, "🎉");
                    renderRoadmap();
                }
            });
        });
    }

    // =========================================================================
    // 8. MISTAKES, REVISION, ANALYTICS, NOTES, SETTINGS
    // =========================================================================
    function renderMistakes() {
        const container = document.getElementById('mistakes-list-container');
        if (!container || !window.DSAStorage) return;

        const mistakes = window.DSAStorage.state.mistakes || [];
        if (mistakes.length === 0) {
            container.innerHTML = `<div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);"><div style="font-size: 2.5rem;">🎉</div><h3>No mistakes recorded yet!</h3><p style="font-size: 0.85rem;">Solve problems and the mentor tracks syntax and logic traps here.</p></div>`;
            return;
        }

        container.innerHTML = mistakes.map(m => {
            const prob = window.DSA_PROBLEMS?.find(p => p.id === m.problem_id);
            return `
                <div class="mistake-card">
                    <div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
                            <strong style="text-transform: capitalize; color: var(--accent-red);">${m.mistake_type}</strong>
                            ${m.count >= 2 ? `<span class="mistake-badge-recurring">⚠️ RECURRING (${m.count}x)</span>` : ''}
                        </div>
                        <p style="font-size: 0.85rem; color: var(--text-secondary);">${m.description}</p>
                    </div>
                    ${prob ? `<button class="btn btn-secondary btn-retry-mistake" data-problem-id="${prob.id}">Practice Drill</button>` : ''}
                </div>
            `;
        }).join('');

        container.querySelectorAll('.btn-retry-mistake').forEach(btn => {
            btn.addEventListener('click', () => {
                const p = window.DSA_PROBLEMS.find(x => x.id === btn.getAttribute('data-problem-id'));
                if (p) loadProblemIntoPractice(p);
            });
        });
    }

    function renderRevision() {
        const container = document.getElementById('revision-items-container');
        if (!container || !window.DSAStorage) return;

        const revItems = window.DSAStorage.state.revisionItems || [];
        const todayStr = new Date().toISOString().split('T')[0];

        if (revItems.length === 0) {
            container.innerHTML = `<div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);"><div style="font-size: 2.5rem;">📚</div><h3>Revision queue is empty</h3><p style="font-size: 0.85rem;">Solved problems are scheduled for spaced repetition at 1d, 3d, 7d, 14d.</p></div>`;
            return;
        }

        container.innerHTML = revItems.map(item => {
            const prob = window.DSA_PROBLEMS?.find(p => p.id === item.problem_id);
            const isDue = item.next_revision_date <= todayStr;
            return `
                <div class="mistake-card" style="border-left-color: ${isDue ? 'var(--accent-amber)' : 'var(--accent-primary)'};">
                    <div>
                        <strong>${prob ? prob.title : item.problem_id}</strong>
                        <span class="badge ${isDue ? 'badge-hard' : 'badge-pattern'}">${isDue ? 'Due Today' : item.next_revision_date}</span>
                    </div>
                    ${prob ? `<button class="btn btn-primary btn-start-revision" data-problem-id="${prob.id}">Review</button>` : ''}
                </div>
            `;
        }).join('');

        container.querySelectorAll('.btn-start-revision').forEach(btn => {
            btn.addEventListener('click', () => {
                const p = window.DSA_PROBLEMS.find(x => x.id === btn.getAttribute('data-problem-id'));
                if (p) loadProblemIntoPractice(p);
            });
        });
    }

    function renderAnalytics() {
        const metrics = window.DSAStorage?.getDashboardMetrics();
        if (!metrics) return;
        document.getElementById('analytics-solve-rate').textContent = `${metrics.independentSolveRate}%`;
        document.getElementById('analytics-attempted').textContent = metrics.totalAttempted;
        document.getElementById('analytics-independent').textContent = metrics.independentSolves;
        document.getElementById('analytics-hints').textContent = metrics.hintSolves;
        document.getElementById('analytics-solutions-seen').textContent = metrics.solutionSeen;
    }

    function renderPlacementMode() {
        document.querySelectorAll('.company-track-card').forEach(card => {
            card.onclick = () => {
                const comp = card.getAttribute('data-company');
                const matched = (window.DSA_PROBLEMS || []).filter(p => (p.companies || []).includes(comp));
                if (matched.length > 0) {
                    loadProblemIntoPractice(matched[0]);
                    showToast(`Loaded ${comp} coding challenge!`, "🎯");
                }
            };
        });
    }

    function renderNotes() {
        const container = document.getElementById('notes-grid-container');
        if (!container || !window.DSAStorage) return;
        const notes = window.DSAStorage.state.notes || [];
        container.innerHTML = notes.map(n => `
            <div class="action-card" style="margin-bottom: 0.85rem;">
                <div style="display: flex; justify-content: space-between;">
                    <span class="badge badge-pattern">${n.category.replace('_', ' ')}</span>
                    <button class="btn-delete-note" data-id="${n.id}" style="border:none;background:none;color:var(--accent-red);cursor:pointer;">Delete</button>
                </div>
                <h4 style="margin: 0.4rem 0;">${n.title}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); white-space: pre-line;">${n.content}</p>
            </div>
        `).join('');

        container.querySelectorAll('.btn-delete-note').forEach(btn => {
            btn.onclick = () => {
                window.DSAStorage.deleteNote(btn.getAttribute('data-id'));
                renderNotes();
                showToast("Note deleted.", "🗑️");
            };
        });
    }

    document.getElementById('btn-add-new-note')?.addEventListener('click', () => {
        const title = prompt("Note Title (e.g. 'Binary Search Invariant'):");
        if (!title) return;
        const content = prompt("Content / Key points:");
        if (!content) return;
        window.DSAStorage.addNote("concept_notes", title, content);
        renderNotes();
        showToast("Note saved!", "📝");
    });

    function renderSettings() {
        const state = window.DSAStorage?.state;
        if (!state) return;
        const inputKey = document.getElementById('setting-ai-api-key');
        if (inputKey) inputKey.value = state.settings.ai_api_key || "";
        const inputName = document.getElementById('setting-student-name');
        if (inputName) inputName.value = state.profile.name || "Student";
    }

    document.getElementById('btn-save-settings')?.addEventListener('click', () => {
        const state = window.DSAStorage?.state;
        if (!state) return;
        const inputKey = document.getElementById('setting-ai-api-key');
        const inputName = document.getElementById('setting-student-name');
        if (inputKey) state.settings.ai_api_key = inputKey.value.trim();
        if (inputName) state.profile.name = inputName.value.trim();
        window.DSAStorage.saveState();
        showToast("Settings saved!", "💾");
    });

    document.getElementById('btn-export-state')?.addEventListener('click', () => {
        const jsonStr = window.DSAStorage.exportStateJSON();
        navigator.clipboard.writeText(jsonStr).then(() => {
            showToast("DSA state JSON copied to clipboard!", "📋");
        }).catch(() => {
            prompt("Your exported state JSON:", jsonStr);
        });
    });

    document.getElementById('btn-import-state')?.addEventListener('click', () => {
        const input = prompt("Paste exported DSA state JSON:");
        if (!input) return;
        const res = window.DSAStorage.importStateJSON(input);
        if (res.success) {
            showToast("State restored!", "🎉");
            setTimeout(() => location.reload(), 600);
        } else {
            alert(res.error);
        }
    });

    // =========================================================================
    // 9. EXTENDED COMMAND PALETTE
    // =========================================================================
    const COMMANDS = [
        { cmd: "start", label: "Start today's DSA session", action: () => { switchView('view-dashboard'); renderDashboard(); } },
        { cmd: "next", label: "Tell me exactly what to practice next", action: () => { const d = window.DSAStorage.runDailyLearningAlgorithm(); if (d?.problem) loadProblemIntoPractice(d.problem); } },
        { cmd: "learn", label: "Teach the current roadmap concept", action: () => handleMentorQuery('learn') },
        { cmd: "practice", label: "Give a problem for current topic", action: () => { const d = window.DSAStorage.runDailyLearningAlgorithm(); if (d?.problem) loadProblemIntoPractice(d.problem); } },
        { cmd: "hint", label: "Give only the next hint", action: () => handleMentorQuery('hint') },
        { cmd: "solution", label: "Show simplest solution", action: () => handleMentorQuery('hint') },
        { cmd: "dryrun", label: "Dry-run the solution step-by-step", action: () => handleMentorQuery('dry_run') },
        { cmd: "debug", label: "Help debug my code", action: () => handleMentorQuery('debug_error') },
        { cmd: "pattern", label: "Help identify the pattern", action: () => handleMentorQuery('pattern') },
        { cmd: "complexity", label: "Analyze time and space complexity", action: () => handleMentorQuery('complexity') },
        { cmd: "interview", label: "Start DSA interview practice (60s pitch)", action: () => handleMentorQuery('interview') },
        { cmd: "revision", label: "Give revision problems queue", action: () => switchView('view-revision') },
        { cmd: "weakness", label: "Show my weakest topics and patterns", action: () => switchView('view-analytics') },
        { cmd: "roadmap", label: "Show complete 22-phase roadmap", action: () => switchView('view-roadmap') },
        { cmd: "progress", label: "Show my progress dashboard", action: () => switchView('view-dashboard') },
        { cmd: "timed", label: "Start timed placement practice", action: () => switchView('view-placement') },
        { cmd: "placement", label: "Start placement-focused practice", action: () => switchView('view-placement') },
        { cmd: "export_state", label: "Export DSA progress as compact JSON", action: () => document.getElementById('btn-export-state')?.click() },
        { cmd: "import_state", label: "Restore DSA progress from JSON", action: () => document.getElementById('btn-import-state')?.click() }
    ];

    function openCommandPalette() {
        if (!cmdPaletteOverlay) return;
        cmdPaletteOverlay.classList.remove('hidden');
        if (cmdInput) {
            cmdInput.value = '';
            cmdInput.focus();
        }
        renderCommandResults('');
    }

    function closeCommandPalette() {
        cmdPaletteOverlay?.classList.add('hidden');
    }

    function renderCommandResults(query) {
        if (!cmdResultsList) return;
        const q = query.toLowerCase().trim().replace(/^\//, '');
        const filtered = COMMANDS.filter(c => c.cmd.includes(q) || c.label.toLowerCase().includes(q));

        if (filtered.length === 0) {
            cmdResultsList.innerHTML = `<li style="padding: 1rem; color: var(--text-muted); text-align: center;">No matching command. Try /start, /learn, /pattern, /roadmap...</li>`;
            return;
        }

        cmdResultsList.innerHTML = filtered.map((c, idx) => `
            <li class="cmd-item ${idx === 0 ? 'selected' : ''}" data-cmd="${c.cmd}">
                <div>
                    <span class="kbd-shortcut" style="margin-right: 0.5rem;">/${c.cmd}</span>
                    <span>${c.label}</span>
                </div>
                <span style="font-size: 0.72rem; color: var(--text-muted);">↵ Run</span>
            </li>
        `).join('');

        cmdResultsList.querySelectorAll('.cmd-item').forEach(item => {
            item.onclick = () => {
                closeCommandPalette();
                const found = COMMANDS.find(c => c.cmd === item.getAttribute('data-cmd'));
                if (found) {
                    found.action();
                    showToast(`Ran /${found.cmd}`, "⚡");
                }
            };
        });
    }

    openCmdBtn?.addEventListener('click', openCommandPalette);
    cmdPaletteOverlay?.addEventListener('click', (e) => {
        if (e.target === cmdPaletteOverlay) closeCommandPalette();
    });

    cmdInput?.addEventListener('input', (e) => renderCommandResults(e.target.value));
    cmdInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const sel = cmdResultsList?.querySelector('.cmd-item.selected');
            if (sel) {
                closeCommandPalette();
                const found = COMMANDS.find(c => c.cmd === sel.getAttribute('data-cmd'));
                if (found) {
                    found.action();
                    showToast(`Ran /${found.cmd}`, "⚡");
                }
            }
        } else if (e.key === 'Escape') {
            closeCommandPalette();
        }
    });

    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (cmdPaletteOverlay && !cmdPaletteOverlay.classList.contains('hidden')) closeCommandPalette();
            else openCommandPalette();
        }
    });

    // Session Timer
    setInterval(() => {
        sessionRemainingSeconds--;
        if (sessionRemainingSeconds <= 0) sessionRemainingSeconds = 30 * 60;
        const timerPill = document.getElementById('nav-session-timer');
        if (timerPill) {
            const m = Math.floor(sessionRemainingSeconds / 60);
            const s = sessionRemainingSeconds % 60;
            timerPill.textContent = `⏱️ ${m}:${s < 10 ? '0' : ''}${s}`;
        }
    }, 1000);

    // Initial load
    renderDashboard();
});
