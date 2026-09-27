/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: JAVASCRIPT & WEB DEVELOPMENT
   Closures, event loop, hoisting, DOM manipulation, asynchronous output
   ========================================================================== */

(function () {
  window.JAVASCRIPT_QUESTIONS = [
    {
      id: 'js-001',
      question: 'Predict the exact console output order of the following JavaScript code snippet evaluating the Event Loop:',
      codeSnippet: 'console.log("1");\nsetTimeout(() => {\n    console.log("2");\n}, 0);\nPromise.resolve().then(() => {\n    console.log("3");\n});\nconsole.log("4");',
      options: [
        '1, 2, 3, 4',
        '1, 4, 3, 2',
        '1, 4, 2, 3',
        '1, 3, 4, 2'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'code_output',
      topic: 'Event Loop & Async',
      explanation: 'Execution priority: (1) Synchronous code runs immediately on Call Stack: prints "1" and then "4". (2) `Promise.then` callback is queued into the Microtask Queue. (3) `setTimeout` callback is queued into the Macrotask (Task) Queue. (4) Once the Call Stack is empty, the Event Loop drains ALL Microtasks first: prints "3". (5) Next event loop tick picks up the Macrotask: prints "2". Output: 1, 4, 3, 2.',
      wrongOptionExplanations: {
        '0': 'Incorrectly assumes asynchronous callbacks execute synchronously inline.',
        '2': 'Confuses task queue priorities: Microtasks (`Promise.then`, `queueMicrotask`) ALWAYS execute before Macrotasks (`setTimeout`, `setInterval`).',
        '3': 'Prints "3" before synchronous "4", which violates sequential Call Stack execution.'
      },
      realWorldApplication: 'Understanding microtask vs macrotask queuing is critical for avoiding race conditions in state updates, async data fetching, and animation rendering in React/Vue apps.',
      placementTip: 'Event Loop Order: Synchronous Code (Call Stack) -> Microtasks (Promises/queueMicrotask) -> Macrotasks (setTimeout/setInterval/DOM events).'
    },
    {
      id: 'js-002',
      question: 'What is the output of the following asynchronous loop when executed in modern JavaScript?',
      codeSnippet: 'for (var i = 0; i < 3; i++) {\n    setTimeout(() => {\n        console.log(i);\n    }, 100);\n}',
      options: [
        '0, 1, 2',
        '3, 3, 3',
        'undefined, undefined, undefined',
        '0, 1, 2, 3'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'code_output',
      topic: 'Hoisting & Scope',
      explanation: 'Variables declared with `var` are function-scoped (or globally scoped), NOT block-scoped. All three timer callbacks close over the exact same single variable binding `i`. By the time the 100ms timer expires and the callbacks execute, the synchronous loop has already completed, and `i` equals 3. Therefore, "3" is logged three times. (Using `let i = 0` would create a new lexical block binding per iteration, outputting 0, 1, 2).',
      wrongOptionExplanations: {
        '0': 'This would be the output if `let i = 0` was used, which has block-scope bindings.',
        '2': '`i` is initialized as a number and ends at 3, never undefined.',
        '3': 'The loop condition stops when `i < 3` is false; there are only 3 timer callbacks.'
      },
      realWorldApplication: 'Scope binding pitfalls in loops frequently cause UI click listeners to inadvertently pass the final index or wrong ID of an item in rendered lists.',
      placementTip: 'Classic MNC placement interview question: `var` in loop with `setTimeout` prints the final value `N` times; `let` prints `0, 1, 2... N-1`.'
    },
    {
      id: 'js-003',
      question: 'Consider the closure below. What will be the output of calling `createCounter()`?',
      codeSnippet: 'function createCounter() {\n    let count = 0;\n    return {\n        increment: () => ++count,\n        decrement: () => --count,\n        getCount: () => count\n    };\n}\nconst c1 = createCounter();\nconst c2 = createCounter();\nc1.increment();\nc1.increment();\nc2.increment();\nconsole.log(c1.getCount() + ", " + c2.getCount());',
      options: [
        '3, 3',
        '2, 1',
        '2, 0',
        '1, 1'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'code_output',
      topic: 'Closures & Callbacks',
      explanation: 'Each invocation of `createCounter()` creates an entirely independent lexical environment and closure scope with its own distinct `count` variable in memory. `c1` increments its private counter twice (`count = 2`). `c2` increments its separate counter once (`count = 1`). Output: `2, 1`.',
      wrongOptionExplanations: {
        '0': 'Assumes `count` is a shared global variable; closures maintain isolated private state.',
        '2': 'Assumes `c2` was not incremented, but `c2.increment()` was called once.',
        '3': 'Underestimates `c1` increments.'
      },
      realWorldApplication: 'Closures provide data encapsulation and private variables in JavaScript module patterns, state stores (Redux), and custom React hooks (like `useState`).',
      placementTip: 'Every function call creates a new execution context with its own fresh lexical environment.'
    },
    {
      id: 'js-004',
      question: 'You have a dynamically generated HTML table with 1,000 rows. Clicking any row should highlight it. Instead of attaching 1,000 separate `click` event listeners to each individual `<tr>` element (which wastes memory), you attach a single listener to the parent `<table>` element and inspect `e.target`. What is this architectural pattern called?',
      codeSnippet: '',
      options: [
        'Event Capturing',
        'Event Delegation',
        'Event Throttling',
        'Event Debouncing'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'DOM Manipulation',
      explanation: 'Event Delegation takes advantage of Event Bubbling. Because DOM events bubble upwards from target elements through their parent ancestors, a single event listener attached to a common parent element (`<table>`) can intercept and handle events triggered on any child (`<tr>` or `<td>`), saving significant memory and automatically supporting dynamically inserted rows.',
      wrongOptionExplanations: {
        '0': 'Event Capturing (trickling) is the first phase where the event descends from window down to target, before bubbling.',
        '2': 'Throttling limits the execution rate of a function over time (e.g. scroll handlers).',
        '3': 'Debouncing delays execution until a pause in user activity (e.g. search input typeahead).'
      },
      realWorldApplication: 'Event delegation is used by UI frameworks and large data tables to eliminate DOM memory leaks and support dynamic infinite scroll lists.',
      placementTip: 'Parent element listening for child events using bubbling = Event Delegation!'
    },
    {
      id: 'js-005',
      question: 'What is the return value of evaluating the following `reduce` operation on the array `[10, 20, 30]`?',
      codeSnippet: 'const numbers = [10, 20, 30];\nconst result = numbers.reduce((acc, curr, index) => {\n    return acc + curr * index;\n}, 0);\nconsole.log(result);',
      options: [
        '60',
        '80',
        '100',
        '0'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'code_tracing',
      topic: 'Array Map/Filter/Reduce',
      explanation: 'Initial accumulator `acc = 0`. Step 1 (`index = 0, curr = 10`): `0 + 10 * 0 = 0`. Step 2 (`index = 1, curr = 20`): `0 + 20 * 1 = 20`. Step 3 (`index = 2, curr = 30`): `20 + 30 * 2 = 20 + 60 = 80`. Final result is 80.',
      wrongOptionExplanations: {
        '0': '60 is simple sum `10 + 20 + 30`, ignoring the multiplication by `index`.',
        '2': 'Calculation error resulting from 1-based indexing assumption.',
        '3': 'Assumes multiplying by first index `0` zeroes out subsequent accumulated sums.'
      },
      realWorldApplication: '`Array.prototype.reduce` is the most versatile functional programming method in JavaScript, used to build lookup maps, compute weighted averages, and transform data streams.',
      placementTip: 'Pay close attention to initial value in `reduce` and note that array indices in JavaScript are strictly 0-indexed: `index = 0, 1, 2...`.'
    }
  ];
})();
