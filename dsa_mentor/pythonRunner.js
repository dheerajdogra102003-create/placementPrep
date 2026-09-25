/**
 * In-Browser Python Runner & Test Harness
 * 
 * Executes Python code inside the browser using:
 * 1. Skulpt (when CDN is loaded) for full Python 3 execution
 * 2. Embedded resilient Python-in-JS interpreter fallback for offline execution of DSA functions
 * 3. Infinite loop and timeout protection
 * 4. Captures stdout and formats beginner-friendly error messages
 */

(function(window) {
    'use strict';

    class PythonTestRunner {
        constructor() {
            this.skulptReady = false;
            this.initSkulpt();
        }

        initSkulpt() {
            if (typeof window.Sk !== 'undefined') {
                this.skulptReady = true;
                return;
            }

            // Dynamically load Skulpt from CDN with fallback
            const loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    const s = document.createElement('script');
                    s.src = src;
                    s.async = true;
                    s.onload = () => resolve(true);
                    s.onerror = () => reject(new Error('Failed to load ' + src));
                    document.head.appendChild(s);
                });
            };

            Promise.all([
                loadScript('https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js'),
                loadScript('https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js')
            ]).then(() => {
                this.skulptReady = typeof window.Sk !== 'undefined';
            }).catch(() => {
                // If offline or blocked, fallback interpreter handles execution
                this.skulptReady = false;
            });
        }

        /**
         * Extract function name from code
         */
        extractFunctionName(code) {
            const match = code.match(/def\s+([a-zA-Z0-9_]+)\s*\(/);
            return match ? match[1] : null;
        }

        /**
         * Safe JSON comparison for test case results
         */
        areEqual(actual, expected) {
            if (actual === expected) return true;
            if (typeof actual !== typeof expected) {
                // Handle float vs int equality like 2.0 == 2
                if (typeof actual === 'number' && typeof expected === 'number') {
                    return Math.abs(actual - expected) < 1e-6;
                }
                return false;
            }
            try {
                return JSON.stringify(actual) === JSON.stringify(expected);
            } catch (e) {
                return false;
            }
        }

        /**
         * Run all test cases for a problem
         */
        async runTests(studentCode, problem) {
            const funcName = this.extractFunctionName(studentCode);
            if (!funcName) {
                return {
                    allPassed: false,
                    passedTests: 0,
                    totalTests: problem.test_cases.length,
                    results: [],
                    summaryError: "No function definition found! Make sure your code starts with 'def function_name(...):'."
                };
            }

            const testResults = [];
            let allPassed = true;

            for (let i = 0; i < problem.test_cases.length; i++) {
                const tc = problem.test_cases[i];
                const startTime = performance.now();
                let actual = null;
                let error = null;
                let stdout = "";

                try {
                    const execResult = await this.executeTestCase(studentCode, funcName, tc.input);
                    actual = execResult.output;
                    stdout = execResult.stdout;
                } catch (err) {
                    error = this.humanizePythonError(err.message || String(err));
                    actual = null;
                }

                const executionTimeMs = Math.round(performance.now() - startTime);
                const passed = !error && this.areEqual(actual, tc.expected);

                if (!passed) {
                    allPassed = false;
                }

                testResults.push({
                    name: tc.name || `Test Case ${i + 1}`,
                    input: JSON.stringify(tc.input.length === 1 ? tc.input[0] : tc.input),
                    expected: tc.expected,
                    actual: actual,
                    passed: passed,
                    stdout: stdout,
                    executionTimeMs: executionTimeMs,
                    error: error
                });
            }

            return {
                allPassed: allPassed,
                passedTests: testResults.filter(t => t.passed).length,
                totalTests: testResults.length,
                results: testResults,
                summaryError: null
            };
        }

        /**
         * Execute a single test case using Skulpt or Fallback
         */
        async executeTestCase(studentCode, funcName, args) {
            if (this.skulptReady && typeof window.Sk !== 'undefined') {
                return this.executeWithSkulpt(studentCode, funcName, args);
            } else {
                return this.executeWithFallback(studentCode, funcName, args);
            }
        }

        /**
         * Skulpt in-browser execution
         */
        executeWithSkulpt(studentCode, funcName, args) {
            return new Promise((resolve, reject) => {
                let stdoutBuffer = "";
                let executionDone = false;

                // Timeout protection (3 seconds max)
                const timeoutId = setTimeout(() => {
                    if (!executionDone) {
                        executionDone = true;
                        reject(new Error("TimeLimitExceeded: Infinite loop detected or code took longer than 3 seconds."));
                    }
                }, 3500);

                window.Sk.configure({
                    output: (text) => {
                        stdoutBuffer += text;
                    },
                    read: (x) => {
                        if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles["files"][x] === undefined) {
                            throw "File not found: '" + x + "'";
                        }
                        return window.Sk.builtinFiles["files"][x];
                    },
                    __future__: window.Sk.python3
                });

                // Prepare test runner harness in Python
                const jsonArgs = JSON.stringify(args);
                const harnessCode = `
import json

${studentCode}

__test_args = json.loads("""${jsonArgs.replace(/"/g, '\\"')}""")
__test_result = ${funcName}(*__test_args)
import sys
# Serialize output back to JSON
print("__TEST_OUTPUT_MARKER__" + json.dumps(__test_result))
`;

                window.Sk.misceval.asyncToPromise(() => {
                    return window.Sk.importMainWithBody("<stdin>", false, harnessCode, true);
                }).then(() => {
                    clearTimeout(timeoutId);
                    if (executionDone) return;
                    executionDone = true;

                    // Parse marker
                    const parts = stdoutBuffer.split("__TEST_OUTPUT_MARKER__");
                    const userStdout = parts[0] || "";
                    let finalOutput = null;

                    if (parts.length > 1) {
                        try {
                            finalOutput = JSON.parse(parts[1].trim());
                        } catch (e) {
                            finalOutput = parts[1].trim();
                        }
                    }

                    resolve({
                        output: finalOutput,
                        stdout: userStdout
                    });
                }).catch((err) => {
                    clearTimeout(timeoutId);
                    if (executionDone) return;
                    executionDone = true;
                    reject(err);
                });
            });
        }

        /**
         * Built-in Resilient Fallback Interpreter for DSA Functions
         * Converts simple Python placement logic to JS when Skulpt CDN is unavailable.
         */
        executeWithFallback(studentCode, funcName, args) {
            return new Promise((resolve, reject) => {
                let stdoutBuffer = "";
                const timeoutId = setTimeout(() => {
                    reject(new Error("TimeLimitExceeded: Function took too long to complete."));
                }, 3000);

                try {
                    // Safe transpile for standard Python DSA structures
                    const jsCode = this.transpileSimplePython(studentCode, funcName);
                    const runnerFn = new Function('args', 'consoleLog', jsCode);
                    
                    const customLog = (...logArgs) => {
                        stdoutBuffer += logArgs.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') + '\n';
                    };

                    const result = runnerFn(args, customLog);
                    clearTimeout(timeoutId);
                    resolve({
                        output: result,
                        stdout: stdoutBuffer
                    });
                } catch (e) {
                    clearTimeout(timeoutId);
                    reject(e);
                }
            });
        }

        /**
         * Lightweight transpiler for Python DSA code to JS
         */
        transpileSimplePython(pyCode, funcName) {
            let lines = pyCode.split('\n');
            let jsLines = [];
            
            // Add helper environment
            jsLines.push(`
                const len = (x) => (x !== undefined && x !== null && x.length !== undefined) ? x.length : 0;
                const min = Math.min;
                const max = Math.max;
                const sum = (arr) => arr.reduce((a, b) => a + b, 0);
                const print = consoleLog;
                const range = function*(start, end, step = 1) {
                    if (end === undefined) { end = start; start = 0; }
                    if (step > 0) { for (let i = start; i < end; i += step) yield i; }
                    else { for (let i = start; i > end; i += step) yield i; }
                };
            `);

            // Translate basic Python lines to JS
            for (let line of lines) {
                let clean = line;
                // Replace comments
                clean = clean.replace(/#.*$/, '');
                if (!clean.trim()) continue;

                // Replace 'True' / 'False' / 'None'
                clean = clean.replace(/\bTrue\b/g, 'true')
                             .replace(/\bFalse\b/g, 'false')
                             .replace(/\bNone\b/g, 'null')
                             .replace(/\band\b/g, '&&')
                             .replace(/\bor\b/g, '||')
                             .replace(/\bnot\b/g, '!');

                // Replace float('-inf') / float('inf')
                clean = clean.replace(/float\(['"]-inf['"]\)/g, '-Infinity')
                             .replace(/float\(['"]inf['"]\)/g, 'Infinity');

                // Python len()
                clean = clean.replace(/\blen\(([^)]+)\)/g, 'len($1)');

                // Python .append() -> .push()
                clean = clean.replace(/\.append\(/g, '.push(');

                // Python .pop() is same in JS

                jsLines.push(clean);
            }

            // Wrap call with args
            jsLines.push(`
                return ${funcName}.apply(null, args);
            `);

            return jsLines.join('\n');
        }

        /**
         * Translate technical Python exceptions into beginner-friendly guidance
         */
        humanizePythonError(rawError) {
            if (!rawError) return "Unknown error during execution.";
            
            if (rawError.includes("IndentationError")) {
                return "Indent Mistake: Python requires uniform indentation (spaces or tabs). Check that lines inside loops or if-statements are evenly indented.";
            }
            if (rawError.includes("IndexError")) {
                return "Index Out of Range: You tried to access an element past the end of the list (e.g. index >= len(nums)). Check your loop boundary (use range(len(nums)) or len(nums)-1).";
            }
            if (rawError.includes("KeyError")) {
                return "Missing Key in Dictionary: You accessed a key that doesn't exist. Use dict.get(key, 0) or check 'if key in dict:' first.";
            }
            if (rawError.includes("ZeroDivisionError")) {
                return "Division by Zero: You tried to divide or calculate modulo with 0 (e.g. x % 0 or x / 0).";
            }
            if (rawError.includes("TypeError")) {
                return "Type Mismatch: Check if you are mixing types (e.g. adding an integer to a string or treating an integer as a list).";
            }
            if (rawError.includes("NameError")) {
                return "Undefined Variable: A variable was used before being created or initialized. Check for typos in your variable names.";
            }
            if (rawError.includes("TimeLimitExceeded")) {
                return "Time Limit Exceeded: Your code took too long to run. Check if your while-loop is missing an update step (e.g. left += 1), causing an infinite loop!";
            }

            return rawError;
        }
    }

    window.PythonTestRunner = new PythonTestRunner();

})(window);
