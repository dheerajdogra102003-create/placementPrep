/**
 * AI DSA Mentor Engine - Adaptive Learning & Pattern Recognition Coach
 * 
 * Features:
 * - 5-Level Progressive Hint System
 * - Pattern Recognition Training Protocol
 * - Live Google Gemini API Integration + Offline Heuristic Fallback
 * - Commands: learn, pattern, complexity, interview, dryrun, debug, hint
 */

(function(window) {
    'use strict';

    const PATTERN_RECOGNITION_QUESTIONS = [
        { q: "Is the input array already sorted?", clue: "Consider Binary Search or Two Pointers (opposite ends)." },
        { q: "Is the problem asking about a contiguous subarray or substring?", clue: "Consider Sliding Window or Prefix Sum." },
        { q: "Do I need to count frequencies or find duplicates?", clue: "Consider a Hash Map (dictionary) or Hash Set." },
        { q: "Do I need to find pairs that sum to a target?", clue: "Consider Complement Lookup with a Hash Map or Two Pointers." },
        { q: "Do items need to be matched or processed in reverse order (LIFO)?", clue: "Consider a Stack." },
        { q: "Do I repeatedly need to extract the minimum or maximum element?", clue: "Consider a Heap (Priority Queue)." },
        { q: "Does the problem have overlapping subproblems and optimal substructure?", clue: "Consider Dynamic Programming (Memoization or Tabulation)." }
    ];

    class DSAMentorEngine {
        constructor() {
            this.hintLevelsUnlocked = {};
        }

        getUnlockedHintLevel(problemId) {
            return this.hintLevelsUnlocked[problemId] || 0;
        }

        unlockNextHint(problem) {
            const current = this.getUnlockedHintLevel(problem.id);
            const nextLevel = Math.min(5, current + 1);
            this.hintLevelsUnlocked[problem.id] = nextLevel;
            return {
                level: nextLevel,
                content: problem.hints[`level_${nextLevel}`] || "No further hints available.",
                isCompleteSolution: nextLevel === 5
            };
        }

        resetHints(problemId) {
            this.hintLevelsUnlocked[problemId] = 0;
        }

        async queryMentor({ mode, problem, studentCode, userMessage, testResults }) {
            const apiKey = window.DSAStorage?.state?.settings?.ai_api_key;

            if (apiKey && apiKey.trim().length > 10) {
                try {
                    return await this.callGeminiAPI({ apiKey, mode, problem, studentCode, userMessage, testResults });
                } catch (e) {
                    console.warn("[DSAMentor] Live API error, using heuristic fallback:", e);
                }
            }

            return this.getHeuristicMentorResponse({ mode, problem, studentCode, userMessage, testResults });
        }

        async callGeminiAPI({ apiKey, mode, problem, studentCode, userMessage, testResults }) {
            const systemPrompt = `You are an Interactive DSA Mentor, Practice Coach, and Placement Preparation Guide.
Your student is a beginner BCA graduate pursuing MCA in Python, aiming for campus placements (TCS, Accenture, Capgemini, Cognizant, Wipro, Infosys).

CORE RULES:
1. Act as a mentor, not a solution generator. Never immediately dump the full solution code.
2. Teach concepts, patterns, recognition clues, and complexity.
3. Keep responses concise, clear, and mobile-friendly (under 120 words).
4. Emphasize manual problem-solving: understand -> small example -> brute force -> pattern -> dry run.

CONTEXT:
- Problem: "${problem.title}" (${problem.difficulty})
- Pattern: ${problem.pattern}
- Student's current Python code:
\`\`\`python
${studentCode || "(no code written yet)"}
\`\`\`
- Mode requested: ${mode}
- Student says: "${userMessage || ''}"
`;

            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ role: "user", parts: [{ text: systemPrompt + "\n\nMode: " + mode + "\nUser question: " + (userMessage || 'Guide me') }] }],
                    generationConfig: { temperature: 0.3, maxOutputTokens: 350 }
                })
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!reply) throw new Error("Empty response");

            return { source: "gemini", text: reply };
        }

        getHeuristicMentorResponse({ mode, problem, studentCode, userMessage, testResults }) {
            let responseText = "";

            switch (mode) {
                case "pattern":
                    responseText = `### 🔍 Pattern Recognition Training:
Before writing code, ask yourself these diagnostic questions:
1. **Is the input array sorted?** ${problem.pattern.includes('Binary') || problem.pattern.includes('Two Pointers') ? '👉 **Yes!** This points directly to Binary Search or Two Pointers.' : 'Not necessarily.'}
2. **What information must we remember?** ${problem.pattern.includes('Hash') ? '👉 We need instant lookup: use a dictionary or set.' : 'A single accumulator or boundary tracker.'}
3. **Primary Pattern for this problem:** **${problem.pattern}**.

*Try explaining why this pattern fits this problem in your own words!*`;
                    break;

                case "learn":
                    responseText = `### 📖 Concept Lesson: ${problem.topic}
**Pattern:** ${problem.pattern}

**Why it matters in placement coding rounds:**
${problem.explanation}

*Try solving a small 3-item list on paper right now!*`;
                    break;

                case "interview":
                    responseText = `### 🎙️ Mock Placement Interview Mode:
**Interviewer:** *"Can you walk me through your high-level approach to solve '${problem.title}' before writing any code?"*

👉 **Your Task:**
1. State the brute force approach and its time complexity.
2. State your optimized idea and why the pattern **${problem.pattern}** was chosen.
3. State your target time and space complexity: **${problem.time_complexity}** and **${problem.space_complexity}**.

*Type your 60-second explanation in the box below!*`;
                    break;

                case "complexity":
                    responseText = `### ⏱️ Complexity Breakdown for "${problem.title}":
* **Time Complexity:** \`${problem.time_complexity}\`
* **Space Complexity:** \`${problem.space_complexity}\`
* **Why:** We traverse the input once without nested loops, making this optimal for placement tests.`;
                    break;

                case "dry_run":
                    if (problem.dry_run_example && problem.dry_run_example.length > 0) {
                        const steps = problem.dry_run_example.map((s, idx) => `* **Step ${idx + 1}:** ${JSON.stringify(s)}`).join('\n');
                        responseText = `### 📝 Step-by-Step Dry Run:\n${steps}\n\nNotice how the tracker variables update predictably on each loop step!`;
                    } else {
                        responseText = "Draw a table with columns for `index`, `current value`, and your `tracker variables`. Trace with 3 numbers.";
                    }
                    break;

                case "stuck":
                    responseText = `**Don't worry, getting stuck is where real learning happens!**
1. **Input & Output:** What exact data type goes in, and what comes out?
2. **Small Manual Example:** If you had only pen and paper, what would you write down?
3. **What variable changes in the loop?**

Click **"Get Progressive Hint"** for Level 1!`;
                    break;

                case "debug_error":
                    if (testResults && testResults.results) {
                        const failed = testResults.results.find(r => !r.passed);
                        if (failed) {
                            responseText = failed.error ?
                                `### ⚠️ Debug Clue:\nError: **${failed.error}**\nCheck indentation, variable names, and loop boundaries!` :
                                `### 🧪 Test Mismatch on: \`${failed.input}\`\n* Expected: \`${JSON.stringify(failed.expected)}\`\n* Returned: \`${JSON.stringify(failed.actual)}\`\nDid your return statement trigger prematurely inside the loop?`;
                        } else {
                            responseText = "All test cases passed! Clean solution.";
                        }
                    } else {
                        responseText = "Click **Run Code** first so I can inspect the test execution output!";
                    }
                    break;

                case "hint":
                default:
                    const hint = this.unlockNextHint(problem);
                    responseText = `### 💡 Hint Level ${hint.level} of 5:
${hint.content}
${hint.level < 5 ? `*(Request Level ${hint.level + 1} next if still stuck)*` : `*(Complete code unlocked)*`}`;
                    break;
            }

            return { source: "heuristic", text: responseText };
        }
    }

    window.DSAMentorEngine = new DSAMentorEngine();

})(window);
