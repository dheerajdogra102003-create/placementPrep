/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: PROGRAMMING FUNDAMENTALS
   Placement-oriented, MNC-pattern inspired technical questions
   ========================================================================== */

(function () {
  window.PROGRAMMING_QUESTIONS = [
    {
      id: 'prog-001',
      question: 'Examine the following C/C++ style code snippet and predict its exact printed output:',
      codeSnippet: '#include <stdio.h>\nint main() {\n    int a = 5, b = 2;\n    int res = a > b ? a++ * 2 : ++b * 3;\n    printf("%d, %d", res, a);\n    return 0;\n}',
      options: [
        '10, 5',
        '10, 6',
        '12, 6',
        '11, 6'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'code_output',
      topic: 'Operators & Precedence',
      explanation: 'In the ternary expression `a > b ? a++ * 2 : ++b * 3`, the condition `5 > 2` evaluates to true. The true branch `a++ * 2` is evaluated. Post-increment `a++` provides its current value (5) for multiplication (`5 * 2 = 10`), and then increments `a` to 6. Therefore, `res` is 10 and `a` becomes 6.',
      wrongOptionExplanations: {
        '0': 'Incorrect because it assumes `a` was not incremented after the expression evaluated.',
        '2': 'Incorrect because it confuses post-increment `a++` with pre-increment `++a`. If it were `++a * 2`, the result would be `6 * 2 = 12`.',
        '3': 'Incorrect calculation resulting from mixing up precedence and increment timing.'
      },
      realWorldApplication: 'Post-increment vs pre-increment side-effects frequently cause subtle off-by-one errors and memory-access bugs in low-level drivers, cyclic buffers, and iterator loops.',
      placementTip: 'High-frequency MNC pattern: Post-increment yields old value, then updates operand; pre-increment updates first, then yields new value.'
    },
    {
      id: 'prog-002',
      question: 'Consider the recursive function below. What will be the return value of `mystery(4, 3)`?',
      codeSnippet: 'int mystery(int a, int b) {\n    if (b == 0) return 0;\n    if (b % 2 == 0) \n        return mystery(a + a, b / 2);\n    return mystery(a + a, b / 2) + a;\n}',
      options: [
        '7',
        '12',
        '64',
        '16'
      ],
      correctAnswer: 1,
      difficulty: 'Hard',
      type: 'code_tracing',
      topic: 'Recursion & Stack',
      explanation: 'This function implements Russian Peasant (binary) multiplication of `a * b`. For `mystery(4, 3)`: b is odd (3), so returns `mystery(8, 1) + 4`. For `mystery(8, 1)`: b is odd (1), so returns `mystery(16, 0) + 8`. For `mystery(16, 0)`: b == 0, returns 0. Backtracking: 0 + 8 + 4 = 12.',
      wrongOptionExplanations: {
        '0': 'Incorrectly adds only `a + b` (4 + 3 = 7).',
        '2': 'Confuses repeated addition with exponential multiplication (`4^3 = 64`).',
        '3': 'Misses the recursive accumulator step for odd remainders.'
      },
      realWorldApplication: 'Binary exponentiation and fast multiplication algorithms form the computational backbone of cryptographic key generation (e.g., RSA modular exponentiation).',
      placementTip: 'Whenever you see `b / 2` and `a + a`, suspect binary multiplication or exponentiation. Trace recursion with a small call stack diagram.'
    },
    {
      id: 'prog-003',
      question: 'What is the time complexity of the following nested loop construct in terms of Big-O notation?',
      codeSnippet: 'void process(int n) {\n    for (int i = 1; i <= n; i *= 2) {\n        for (int j = 1; j <= i; j++) {\n            printf("*");\n        }\n    }\n}',
      options: [
        'O(n^2)',
        'O(n log n)',
        'O(n)',
        'O(log n)'
      ],
      correctAnswer: 2,
      difficulty: 'Hard',
      type: 'conceptual',
      topic: 'Complexity Basics',
      explanation: 'The outer loop runs for `i = 1, 2, 4, 8, ..., 2^k <= n`. The inner loop executes `i` times. The total operations equal the geometric series sum: `1 + 2 + 4 + 8 + ... + n = 2n - 1 = O(n)`. Many freshers mistakenly assume `O(n log n)`.',
      wrongOptionExplanations: {
        '0': 'Incorrect; this would require both loops to run from 1 to `n` independently.',
        '1': 'A classic trap: while outer loop runs `log n` times, the inner loop sum is `1 + 2 + 4 + ... + n = 2n - 1`, which is strictly linear `O(n)`.',
        '3': 'Underestimates the inner loop contributions.'
      },
      realWorldApplication: 'Analyzing geometric progression complexities is critical for understanding dynamic array amortized resizing (like `std::vector` in C++ or `ArrayList` in Java).',
      placementTip: 'Sum of geometric series `1 + 2 + 4 + ... + n = 2n - 1 = O(n)`. Do not just multiply outer bounds by inner bounds without checking progression!'
    },
    {
      id: 'prog-004',
      question: 'Which of the following array operations in memory will trigger undefined behavior in standard C/C++?',
      codeSnippet: 'int arr[5] = {10, 20, 30, 40, 50};\nint *ptr = arr + 5;\nprintf("%d", *ptr);',
      options: [
        'Creating a pointer pointing one element past the end (`arr + 5`)',
        'Dereferencing the past-the-end pointer (`*ptr`)',
        'Passing `arr` without an ampersand operator',
        'Assigning array base address to `int *`'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'debugging',
      topic: 'Arrays & Pointers',
      explanation: 'In C/C++, pointing one past the end of an array (`arr + 5`) is explicitly valid and well-defined (commonly used as end-iterators). However, dereferencing (`*ptr`) or reading/writing that memory location is an illegal out-of-bounds access that causes Undefined Behavior.',
      wrongOptionExplanations: {
        '0': 'Pointing one past the end is legal in ANSI C and C++ standards for iterator bounds.',
        '2': 'Arrays decay to pointers automatically when used in expressions.',
        '3': 'Assigning `arr` to `int *` is standard pointer assignment.'
      },
      realWorldApplication: 'Off-by-one pointer dereferencing causes buffer over-read/overwrite vulnerabilities, which account for severe CVE security exploits in networking stacks and OS kernels.',
      placementTip: 'Remember: Pointing to `arr + n` is valid; dereferencing `*(arr + n)` is undefined behavior!'
    },
    {
      id: 'prog-005',
      question: 'What will be the output of the following loop containing `break` and `continue` statements?',
      codeSnippet: 'int count = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    if (i == 5) break;\n    count += i;\n}\nprintf("%d", count);',
      options: [
        '7',
        '10',
        '3',
        '6'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      type: 'code_tracing',
      topic: 'Nested Loops',
      explanation: 'Trace iterations: `i=1`: count += 1 (count=1). `i=2`: count += 2 (count=3). `i=3`: condition `i==3` matches, `continue` skips to increment. `i=4`: count += 4 (count=7). `i=5`: condition `i==5` matches, `break` immediately terminates loop. Final count = 7.',
      wrongOptionExplanations: {
        '1': 'Sum of 1+2+3+4 = 10, incorrectly ignoring both `continue` and `break`.',
        '2': 'Stops after `i=2` without executing `i=4`.',
        '3': 'Calculates 1+2+3 = 6, failing to skip 3 via `continue`.'
      },
      realWorldApplication: 'Flow control keywords `break` and `continue` are central to early loop termination in packet filters, search scanners, and input validators.',
      placementTip: '`continue` skips the remainder of current iteration and jumps to increment/condition; `break` exits the nearest enclosing loop completely.'
    }
  ];
})();
