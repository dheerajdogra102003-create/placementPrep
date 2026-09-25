/**
 * AI DSA Mentor & Placement Coach - Complete 22-Phase Roadmap & Problem Bank
 * 
 * Covering Phases 0 to 21:
 * - Phase 0: Programming Foundation Verification
 * - Phase 1: Algorithmic Thinking & Complexity
 * - Phase 2: Arrays & Lists
 * - Phase 3: Strings
 * - Phase 4: Searching
 * - Phase 5: Sorting
 * - Phase 6: Hashing
 * - Phase 7: Two Pointers
 * - Phase 8: Sliding Window
 * - Phase 9: Stack
 * - Phase 10: Queue
 * - Phase 11: Recursion
 * - Phase 12: Linked List
 * - Phase 13: Binary Trees
 * - Phase 14: Binary Search Tree
 * - Phase 15: Heap & Priority Queue
 * - Phase 16: Greedy Algorithms
 * - Phase 17: Backtracking
 * - Phase 18: Graphs
 * - Phase 19: Dynamic Programming
 * - Phase 20: Placement-Focused Problem Solving
 * - Phase 21: DSA Interview Readiness
 */

const DSA_ROADMAP_PHASES = [
    {
        id: "phase_0",
        number: 0,
        name: "Programming Foundation Verification",
        level: "Foundation",
        goal: "Ensure comfortable writing and tracing of basic Python code before serious DSA.",
        prerequisites: [],
        topics: [
            "Variables & Data Types",
            "Operators (Arithmetic, Logical, Comparison)",
            "Conditionals (if, elif, else)",
            "Loops (for, while, range)",
            "Functions & Return Values",
            "Python Collections (list, tuple, dict, set)",
            "Strings & Slicing",
            "Basic Builtins (len, min, max, sum)"
        ],
        masteryTest: "Output prediction, loop tracing, and simple debugging."
    },
    {
        id: "phase_1",
        number: 1,
        name: "Algorithmic Thinking and Complexity",
        level: "Beginner Problem Solving",
        goal: "Think about brute force, Big-O time and space complexity before coding.",
        prerequisites: ["phase_0"],
        topics: [
            "What is an Algorithm?",
            "Brute Force Thinking",
            "Time Complexity & Big O",
            "Space Complexity",
            "O(1), O(log N), O(N), O(N log N), O(N²)",
            "Best, Average, Worst Case",
            "Sequential vs Nested Loops Complexity"
        ],
        masteryTest: "Complexity analysis and 13-step framework adherence."
    },
    {
        id: "phase_2",
        number: 2,
        name: "Arrays and Lists",
        level: "Core DSA",
        goal: "Master single traversal, accumulator, index manipulation, and boundary checks.",
        prerequisites: ["phase_1"],
        topics: [
            "Array Traversal (Forward & Reverse)",
            "Linear Searching",
            "Maximum and Minimum",
            "Second Largest Element",
            "Counting & Frequency",
            "Remove Duplicates",
            "Reverse Array In-Place",
            "Move Zeroes to End",
            "Rotate Array"
        ],
        masteryTest: "Solve second largest and move zeroes independently without syntax errors."
    },
    {
        id: "phase_3",
        number: 3,
        name: "Strings",
        level: "Core DSA",
        goal: "Master character traversal, two-pointer inward checks, and frequency maps.",
        prerequisites: ["phase_2"],
        topics: [
            "Character Traversal & Indexing",
            "String Slicing",
            "Valid Palindrome",
            "Valid Anagram",
            "First Non-Repeating Character",
            "Remove Duplicate Characters",
            "Reverse Words in String",
            "Longest Common Prefix"
        ],
        masteryTest: "Solve palindrome and anagram in O(N) time."
    },
    {
        id: "phase_4",
        number: 4,
        name: "Searching",
        level: "Pattern Recognition",
        goal: "Master Divide & Conquer on sorted spaces and binary search boundary conditions.",
        prerequisites: ["phase_2"],
        topics: [
            "Linear Search vs Binary Search",
            "Binary Search Halving Logic",
            "Left, Right, Mid calculation",
            "Search Space Reduction",
            "First & Last Occurrence",
            "Search Insert Position",
            "Search in Rotated Sorted Array"
        ],
        masteryTest: "Implement O(log N) binary search without infinite loops."
    },
    {
        id: "phase_5",
        number: 5,
        name: "Sorting",
        level: "Pattern Recognition",
        goal: "Understand comparison sorting, stability, and 'sort-then-solve' strategies.",
        prerequisites: ["phase_2"],
        topics: [
            "Why Sorting Helps Problem Solving",
            "Bubble Sort (Swap passes)",
            "Selection Sort (Min finding)",
            "Insertion Sort (Card placing)",
            "Merge Sort Concept (Divide & Merge)",
            "Quick Sort Concept (Partition & Pivot)",
            "Sort for Pair & Duplicate Problems"
        ],
        masteryTest: "Explain time complexities of merge sort vs bubble sort."
    },
    {
        id: "phase_6",
        number: 6,
        name: "Hashing",
        level: "Core DSA",
        goal: "Trade extra memory for instant O(1) lookup to eliminate nested loops.",
        prerequisites: ["phase_2"],
        topics: [
            "Hash Table Concept",
            "Python dict & set Internals",
            "O(1) Membership Lookup",
            "Frequency Maps",
            "Duplicate Detection",
            "Two Sum Complement Lookup",
            "Subarray Frequency Problems"
        ],
        masteryTest: "Solve Two Sum in O(N) using dictionary complement search."
    },
    {
        id: "phase_7",
        number: 7,
        name: "Two Pointers",
        level: "Pattern Recognition",
        goal: "Search from both ends or slide same-direction pointers to optimize search spaces.",
        prerequisites: ["phase_2", "phase_5"],
        topics: [
            "Opposite Direction Pointers (Left/Right)",
            "Same Direction Pointers (Fast/Slow)",
            "Pointer Movement Conditions",
            "Two Sum on Sorted Array",
            "Container with Most Water",
            "Remove Duplicates in-place",
            "Three Sum Introduction"
        ],
        masteryTest: "Recognize sorted array clues and implement Two Pointers in O(N)."
    },
    {
        id: "phase_8",
        number: 8,
        name: "Sliding Window",
        level: "Pattern Recognition",
        goal: "Maintain state across contiguous subarrays/substrings without recomputation.",
        prerequisites: ["phase_7"],
        topics: [
            "Fixed-Size Window Pattern",
            "Variable-Size Window (Expand / Shrink)",
            "Window State Maintenance",
            "Max Sum Subarray of Size K",
            "Longest Substring Without Repeating Characters",
            "Minimum Size Subarray Sum"
        ],
        masteryTest: "Slide fixed and dynamic windows in O(N) time."
    },
    {
        id: "phase_9",
        number: 9,
        name: "Stack",
        level: "Intermediate DSA",
        goal: "Apply Last-In First-Out (LIFO) matching, parsing, and monotonic tracking.",
        prerequisites: ["phase_2"],
        topics: [
            "LIFO Principle & Operations (push, pop, peek)",
            "Stack via Python List",
            "Matching & Balanced Parentheses",
            "Undo / Redo Processing",
            "Monotonic Stack Concept",
            "Next Greater Element"
        ],
        masteryTest: "Solve Valid Parentheses and handle empty stack edge cases."
    },
    {
        id: "phase_10",
        number: 10,
        name: "Queue",
        level: "Intermediate DSA",
        goal: "Apply First-In First-Out (FIFO) processing and understand BFS queues.",
        prerequisites: ["phase_9"],
        topics: [
            "FIFO Principle",
            "Enqueue & Dequeue",
            "Queue using collections.deque",
            "Queue Simulation",
            "BFS Queue Introduction"
        ],
        masteryTest: "Explain FIFO vs LIFO and implement deque operations."
    },
    {
        id: "phase_11",
        number: 11,
        name: "Recursion",
        level: "Intermediate DSA",
        goal: "Deconstruct problems into base cases, subproblems, and trace the call stack.",
        prerequisites: ["phase_0", "phase_1"],
        topics: [
            "Base Case vs Recursive Step",
            "Call Stack & Stack Overflow",
            "Tracing Recursion Trees",
            "Factorial & Fibonacci",
            "Recursive Array & String Traversal",
            "Sum of Digits via Recursion"
        ],
        masteryTest: "Write base cases correctly without causing infinite recursion."
    },
    {
        id: "phase_12",
        number: 12,
        name: "Linked List",
        level: "Intermediate DSA",
        goal: "Master pointer manipulation, dummy nodes, and slow/fast pointer techniques.",
        prerequisites: ["phase_2"],
        topics: [
            "Node Structure & Head Pointer",
            "Traversal, Insertion & Deletion",
            "Reverse a Linked List",
            "Middle of the Linked List",
            "Fast and Slow Pointers (Floyd's Cycle)",
            "Merge Two Sorted Lists"
        ],
        masteryTest: "Reverse a linked list without losing node references."
    },
    {
        id: "phase_13",
        number: 13,
        name: "Binary Trees",
        level: "Intermediate DSA",
        goal: "Understand hierarchical data structures and depth-first/breadth-first tree traversals.",
        prerequisites: ["phase_11", "phase_10"],
        topics: [
            "Root, Leaf, Height, and Depth",
            "Preorder, Inorder, Postorder (DFS)",
            "Level Order Traversal (BFS)",
            "Maximum Depth of Binary Tree",
            "Invert / Flip Binary Tree",
            "Same Tree Verification"
        ],
        masteryTest: "Implement recursive tree traversals and calculate height."
    },
    {
        id: "phase_14",
        number: 14,
        name: "Binary Search Tree",
        level: "Intermediate DSA",
        goal: "Exploit the BST ordering property for efficient searching and validation.",
        prerequisites: ["phase_13"],
        topics: [
            "BST Property (Left < Root < Right)",
            "Search in BST",
            "Insert into BST",
            "Validate BST",
            "Lowest Common Ancestor in BST",
            "Kth Smallest Element in BST"
        ],
        masteryTest: "Validate a BST using valid min/max range constraints."
    },
    {
        id: "phase_15",
        number: 15,
        name: "Heap and Priority Queue",
        level: "Advanced DSA",
        goal: "Quickly access extreme values (Min/Max) for Top-K problems using heapq.",
        prerequisites: ["phase_13"],
        topics: [
            "Min Heap & Max Heap Properties",
            "Python heapq Module (heappush, heappop)",
            "Kth Largest Element in an Array",
            "Top K Frequent Elements",
            "Merge K Sorted Lists Concept"
        ],
        masteryTest: "Solve Top K problems in O(N log K) time using a min-heap."
    },
    {
        id: "phase_16",
        number: 16,
        name: "Greedy Algorithms",
        level: "Advanced DSA",
        goal: "Recognize when making locally optimal choices produces the global optimum.",
        prerequisites: ["phase_5"],
        topics: [
            "Greedy Choice Property",
            "When Greedy Works vs Why It Fails",
            "Activity Selection / Interval Scheduling",
            "Jump Game",
            "Fractional Knapsack"
        ],
        masteryTest: "Sort intervals and select non-overlapping activities."
    },
    {
        id: "phase_17",
        number: 17,
        name: "Backtracking",
        level: "Advanced DSA",
        goal: "Explore state-space decision trees with Choose -> Explore -> Unchoose.",
        prerequisites: ["phase_11"],
        topics: [
            "Decision Trees & Exhaustive Search",
            "Choose, Explore, Undo (Backtrack)",
            "Generate Subsets",
            "Generate Permutations",
            "Combination Sum"
        ],
        masteryTest: "Generate all subsets without duplicate branches."
    },
    {
        id: "phase_18",
        number: 18,
        name: "Graphs",
        level: "Advanced DSA",
        goal: "Model pairwise relationships and traverse graphs using visited sets.",
        prerequisites: ["phase_10", "phase_13"],
        topics: [
            "Vertices, Edges, Directed vs Undirected",
            "Adjacency List Representation",
            "BFS Traversal (Queue + Visited)",
            "DFS Traversal (Recursion + Visited)",
            "Number of Islands (Grid BFS/DFS)",
            "Cycle Detection in Undirected Graph"
        ],
        masteryTest: "Traverse a graph or 2D grid without infinite cycles."
    },
    {
        id: "phase_19",
        number: 19,
        name: "Dynamic Programming",
        level: "Advanced DSA",
        goal: "Identify overlapping subproblems and build optimal solutions via memoization and tabulation.",
        prerequisites: ["phase_11", "phase_6"],
        topics: [
            "Overlapping Subproblems & Optimal Substructure",
            "Top-Down Memoization vs Bottom-Up Tabulation",
            "State Definition & State Transition",
            "1D DP: Climbing Stairs, House Robber",
            "Coin Change",
            "0/1 Knapsack Concept"
        ],
        masteryTest: "Formulate DP recurrence relation and solve Climbing Stairs & House Robber."
    },
    {
        id: "phase_20",
        number: 20,
        name: "Placement-Focused Problem Solving",
        level: "Placement DSA",
        goal: "Synthesize all patterns under timed test conditions for TCS, Accenture, Capgemini, Cognizant, Wipro & Infosys.",
        prerequisites: ["phase_6", "phase_7", "phase_8"],
        topics: [
            "TCS NQT Coding Patterns",
            "Accenture Technical Assessment Drills",
            "Capgemini Pseudocode & Coding",
            "Cognizant Automata Patterns",
            "Wipro NLTH Challenge",
            "Output Prediction & Code Debugging"
        ],
        masteryTest: "Solve mixed timed placement questions within 20 minutes."
    },
    {
        id: "phase_21",
        number: 21,
        name: "DSA Interview Readiness",
        level: "Interview Readiness",
        goal: "Explain solutions out loud in 60 seconds, discuss tradeoffs, handle edge cases, and adapt to interviewer follow-ups.",
        prerequisites: ["phase_20"],
        topics: [
            "60-Second Approach Pitch (Brute Force to Optimal)",
            "Talking Out Loud While Coding",
            "Explaining Time & Space Complexity",
            "Verbal Dry-Running on Edge Cases",
            "Handling Follow-Up Variations Gracefully"
        ],
        masteryTest: "Complete a mock interview presentation without jumping straight into code."
    }
];

// Curated Problem Bank mapped across all roadmap phases
const DSA_PROBLEMS = [
    // PHASE 0: FOUNDATION
    {
        id: "p0_1",
        phase: "phase_0",
        title: "Sum of List Elements",
        topic: "Loops & Accumulation",
        pattern: "Accumulator Pattern",
        difficulty: "Very Easy",
        companies: ["TCS NQT", "Infosys", "Wipro"],
        description: "Given a list of integers `nums`, calculate and return the sum of all elements without using Python's built-in `sum()` function.",
        input_format: "nums: List[int]",
        output_format: "int - the total sum.",
        examples: [
            { input: "nums = [1, 2, 3, 4, 5]", output: "15", explanation: "1 + 2 + 3 + 4 + 5 = 15" },
            { input: "nums = [10, -2, 5]", output: "13", explanation: "10 + (-2) + 5 = 13" },
            { input: "nums = []", output: "0", explanation: "Empty list sum is 0." }
        ],
        constraints: ["0 <= len(nums) <= 10^4", "-10^4 <= nums[i] <= 10^4"],
        starter_code: `def calculate_sum(nums):\n    # TODO: Initialize accumulator variable\n    # Loop and add each element\n    pass\n`,
        solution_code: `def calculate_sum(nums):\n    total = 0\n    for num in nums:\n        total += num\n    return total\n`,
        explanation: "Initialize total = 0. Iterate through every number and accumulate the sum. Return total after the loop.",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "What initial value should your total variable have before the loop starts?",
            level_2: "Use a simple for-loop: `for num in nums: total += num`.",
            level_3: "Pattern: Accumulator pattern. Return total outside the loop.",
            level_4: "total = 0; for n in nums: total += n; return total",
            level_5: "def calculate_sum(nums):\n    total = 0\n    for num in nums:\n        total += num\n    return total"
        },
        test_cases: [
            { name: "Positive numbers", input: [[1, 2, 3, 4, 5]], expected: 15 },
            { name: "Negative numbers", input: [[10, -2, 5]], expected: 13 },
            { name: "Empty list", input: [[]], expected: 0 },
            { name: "Single number", input: [[42]], expected: 42 }
        ],
        dry_run_example: [
            { step: "Init", total: "0" },
            { step: "add 1", total: "1" },
            { step: "add 2", total: "3" },
            { step: "add 3", total: "6" }
        ]
    },

    // PHASE 1: ALGORITHMIC THINKING & BASIC PROBLEM SOLVING
    {
        id: "p1_1",
        phase: "phase_1",
        title: "Count Even Numbers",
        topic: "Counting & Conditionals",
        pattern: "Traversal & Counter",
        difficulty: "Very Easy",
        companies: ["Accenture", "TCS NQT", "Cognizant", "Capgemini"],
        description: "Given a list of integers `nums`, count and return how many numbers in the list are even.",
        input_format: "nums: List[int]",
        output_format: "int - count of even integers.",
        examples: [
            { input: "nums = [12, 5, 8, 3, 14, 7]", output: "3", explanation: "12, 8, and 14 are even." },
            { input: "nums = [1, 3, 5, 7]", output: "0", explanation: "No even numbers." }
        ],
        constraints: ["0 <= len(nums) <= 10^5", "-10^9 <= nums[i] <= 10^9"],
        starter_code: `def count_even(nums):\n    # TODO: Initialize count\n    # Check num % 2 == 0\n    pass\n`,
        solution_code: `def count_even(nums):\n    count = 0\n    for num in nums:\n        if num % 2 == 0:\n            count += 1\n    return count\n`,
        explanation: "Check each number with modulo `% 2 == 0`. Increment count and return it after checking all elements.",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "What arithmetic operator checks divisibility by 2 in Python?",
            level_2: "A number is even if `num % 2 == 0`.",
            level_3: "Pattern: Traversal and conditional counter.",
            level_4: "count = 0; for n in nums: if n % 2 == 0: count += 1; return count",
            level_5: "def count_even(nums):\n    count = 0\n    for num in nums:\n        if num % 2 == 0:\n            count += 1\n    return count"
        },
        test_cases: [
            { name: "Mixed numbers", input: [[12, 5, 8, 3, 14, 7]], expected: 3 },
            { name: "All odd", input: [[1, 3, 5, 7]], expected: 0 },
            { name: "Includes zero and negatives", input: [[0, -2, -4]], expected: 3 }
        ],
        dry_run_example: [
            { step: "12", check: "even", count: "1" },
            { step: "5", check: "odd", count: "1" },
            { step: "8", check: "even", count: "2" }
        ]
    },

    // PHASE 2: ARRAYS & LISTS
    {
        id: "p2_1",
        phase: "phase_2",
        title: "Find Second Largest Element",
        topic: "Traversal & State Tracking",
        pattern: "Two Variable Tracking",
        difficulty: "Easy",
        companies: ["TCS NQT", "Cognizant", "Accenture", "Infosys"],
        description: "Given a list of integers `nums`, find and return the second largest distinct element. If no second largest exists, return -1.",
        input_format: "nums: List[int]",
        output_format: "int - second largest distinct number, or -1.",
        examples: [
            { input: "nums = [12, 35, 1, 10, 34, 1]", output: "34", explanation: "Largest is 35, second largest is 34." },
            { input: "nums = [10, 10, 10]", output: "-1", explanation: "All elements equal, so -1." }
        ],
        constraints: ["1 <= len(nums) <= 10^5", "-10^9 <= nums[i] <= 10^9"],
        starter_code: `def second_largest(nums):\n    # TODO: Track largest (first) and second largest in one pass\n    pass\n`,
        solution_code: `def second_largest(nums):\n    first = float('-inf')\n    second = float('-inf')\n    for num in nums:\n        if num > first:\n            second = first\n            first = num\n        elif num > second and num != first:\n            second = num\n    return second if second != float('-inf') else -1\n`,
        explanation: "Keep track of `first` and `second`. When a number exceeds `first`, demote `first` into `second` and update `first = num`. If `num` is strictly between `second` and `first`, update `second = num`.",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "When a new largest number is found, what happens to your previous largest?",
            level_2: "The old largest becomes the new second largest!",
            level_3: "Pattern: State tracking with two variables. Initialize both to `float('-inf')`.",
            level_4: "if num > first: second = first; first = num; elif num > second and num != first: second = num",
            level_5: "def second_largest(nums):\n    first = second = float('-inf')\n    for num in nums:\n        if num > first:\n            second = first\n            first = num\n        elif num > second and num != first:\n            second = num\n    return second if second != float('-inf') else -1"
        },
        test_cases: [
            { name: "Standard case", input: [[12, 35, 1, 10, 34, 1]], expected: 34 },
            { name: "All duplicate values", input: [[10, 10, 10]], expected: -1 },
            { name: "Two elements", input: [[5, 2]], expected: 2 }
        ],
        dry_run_example: [
            { num: "12", first: "12", second: "-inf" },
            { num: "35", first: "35", second: "12" },
            { num: "34", first: "35", second: "34" }
        ]
    },
    {
        id: "p2_2",
        phase: "phase_2",
        title: "Move Zeroes to End",
        topic: "In-Place Modification",
        pattern: "Slow & Fast Pointer",
        difficulty: "Easy",
        companies: ["TCS NQT", "Cognizant", "Capgemini", "Infosys"],
        description: "Given an integer list `nums`, move all zeroes to the end while maintaining the relative order of the non-zero elements in-place.",
        input_format: "nums: List[int]",
        output_format: "List[int] in-place",
        examples: [
            { input: "nums = [0, 1, 0, 3, 12]", output: "[1, 3, 12, 0, 0]", explanation: "Non-zeros 1, 3, 12 shifted forward." }
        ],
        constraints: ["1 <= len(nums) <= 10^4"],
        starter_code: `def move_zeroes(nums):\n    # TODO: Pack non-zeros to the front\n    return nums\n`,
        solution_code: `def move_zeroes(nums):\n    insert_pos = 0\n    for num in nums:\n        if num != 0:\n            nums[insert_pos] = num\n            insert_pos += 1\n    while insert_pos < len(nums):\n        nums[insert_pos] = 0\n        insert_pos += 1\n    return nums\n`,
        explanation: "Use an `insert_pos` pointer. Iterate and copy non-zeros to `nums[insert_pos]`, then fill remainder with zeros.",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "Can you place each non-zero number at the front one by one?",
            level_2: "Maintain an `insert_pos` pointer starting at 0.",
            level_3: "Pattern: Fast and slow write pointer.",
            level_4: "for x in nums: if x != 0: nums[pos] = x; pos += 1; then fill zeros from pos to end",
            level_5: "def move_zeroes(nums):\n    pos = 0\n    for x in nums:\n        if x != 0:\n            nums[pos] = x\n            pos += 1\n    while pos < len(nums):\n        nums[pos] = 0\n        pos += 1\n    return nums"
        },
        test_cases: [
            { name: "Standard case", input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
            { name: "No zeros", input: [[1, 2, 3]], expected: [1, 2, 3] },
            { name: "All zeros", input: [[0, 0, 0]], expected: [0, 0, 0] }
        ],
        dry_run_example: [
            { step: "See 1", array: "[1, 1, 0, 3, 12]", pos: "1" },
            { step: "See 3", array: "[1, 3, 0, 3, 12]", pos: "2" },
            { step: "See 12", array: "[1, 3, 12, 3, 12]", pos: "3" },
            { step: "Zero fill", array: "[1, 3, 12, 0, 0]", pos: "5" }
        ]
    },

    // PHASE 3: STRINGS
    {
        id: "p3_1",
        phase: "phase_3",
        title: "Valid Palindrome",
        topic: "String Cleaning & Inward Traversal",
        pattern: "Two Pointers (Inward)",
        difficulty: "Easy",
        companies: ["Accenture", "TCS NQT", "Wipro", "Capgemini"],
        description: "Given a string `s`, return `True` if it is a palindrome after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, or `False` otherwise.",
        input_format: "s: str",
        output_format: "bool",
        examples: [
            { input: 's = "A man, a plan, a canal: Panama"', output: "True", explanation: '"amanaplanacanalpanama" is a palindrome.' },
            { input: 's = "race a car"', output: "False", explanation: '"raceacar" is not a palindrome.' }
        ],
        constraints: ["1 <= len(s) <= 2 * 10^5"],
        starter_code: `def is_palindrome(s):\n    # TODO: Clean string, check left and right matching\n    pass\n`,
        solution_code: `def is_palindrome(s):\n    cleaned = [c.lower() for c in s if c.isalnum()]\n    left, right = 0, len(cleaned) - 1\n    while left < right:\n        if cleaned[left] != cleaned[right]:\n            return False\n        left += 1\n        right -= 1\n    return True\n`,
        explanation: "Filter characters using `c.isalnum()` and `c.lower()`. Compare opposite ends using inward two pointers.",
        time_complexity: "O(N)",
        space_complexity: "O(N)",
        hints: {
            level_1: "How do you ignore punctuation and spaces in Python? (`char.isalnum()`)",
            level_2: "Convert to lowercase with `.lower()`.",
            level_3: "Pattern: Two Pointers from both ends.",
            level_4: "cleaned = [c.lower() for c in s if c.isalnum()]; left, right = 0, len(cleaned)-1; while left < right: if cleaned[left] != cleaned[right]: return False",
            level_5: "def is_palindrome(s):\n    cl = [c.lower() for c in s if c.isalnum()]\n    l, r = 0, len(cl) - 1\n    while l < r:\n        if cl[l] != cl[r]: return False\n        l += 1; r -= 1\n    return True"
        },
        test_cases: [
            { name: "Palindrome phrase", input: ["A man, a plan, a canal: Panama"], expected: true },
            { name: "Non-palindrome", input: ["race a car"], expected: false },
            { name: "Empty string", input: [" "], expected: true }
        ],
        dry_run_example: [
            { l: "0 (a)", r: "20 (a)", match: "Yes" },
            { l: "1 (m)", r: "19 (m)", match: "Yes" }
        ]
    },

    // PHASE 4: SEARCHING
    {
        id: "p4_1",
        phase: "phase_4",
        title: "Binary Search",
        topic: "Divide & Conquer Search",
        pattern: "Binary Search",
        difficulty: "Easy",
        companies: ["TCS NQT", "Accenture", "Cognizant", "Capgemini", "Wipro", "Infosys"],
        description: "Given a sorted ascending integer list `nums` and an integer `target`, search for `target`. Return its index if found, otherwise `-1`. Must run in O(log n).",
        input_format: "nums: List[int] (sorted), target: int",
        output_format: "int - index of target, or -1.",
        examples: [
            { input: "nums = [-1, 0, 3, 5, 9, 12], target = 9", output: "4", explanation: "9 is at index 4." },
            { input: "nums = [-1, 0, 3, 5, 9, 12], target = 2", output: "-1", explanation: "2 is not in list." }
        ],
        constraints: ["1 <= len(nums) <= 10^4", "nums is sorted in ascending order."],
        starter_code: `def binary_search(nums, target):\n    # TODO: low, high pointers. Calculate mid\n    pass\n`,
        solution_code: `def binary_search(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n`,
        explanation: "Cut search space in half each iteration by comparing target with nums[mid]. Runs in O(log N).",
        time_complexity: "O(log N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "Since the array is sorted, how can looking at the middle element eliminate half the numbers?",
            level_2: "If `nums[mid] < target`, the target cannot be to the left of mid.",
            level_3: "Pattern: Binary Search with `low <= high`.",
            level_4: "mid = (low + high) // 2; if nums[mid] == target: return mid; elif nums[mid] < target: low = mid + 1; else: high = mid - 1",
            level_5: "def binary_search(nums, target):\n    l, h = 0, len(nums) - 1\n    while l <= h:\n        m = (l + h) // 2\n        if nums[m] == target: return m\n        elif nums[m] < target: l = m + 1\n        else: h = m - 1\n    return -1"
        },
        test_cases: [
            { name: "Target found", input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
            { name: "Target missing", input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 }
        ],
        dry_run_example: [
            { low: "0", high: "5", mid: "2", val: "3", action: "3 < 9 -> low = 3" },
            { low: "3", high: "5", mid: "4", val: "9", action: "9 == 9 -> Return 4" }
        ]
    },

    // PHASE 6: HASHING
    {
        id: "p6_1_hash",
        phase: "phase_6",
        title: "Two Sum - Target Pair",
        topic: "Complement Lookup",
        pattern: "Hash Map Complement",
        difficulty: "Easy",
        companies: ["Accenture", "TCS NQT", "Capgemini", "Wipro", "Cognizant", "Infosys"],
        description: "Given a list of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        input_format: "nums: List[int], target: int",
        output_format: "List[int] - [index1, index2]",
        examples: [
            { input: "nums = [2, 7, 11, 15], target = 9", output: "[0, 1]", explanation: "nums[0] + nums[1] = 9" }
        ],
        constraints: ["2 <= len(nums) <= 10^4"],
        starter_code: `def two_sum(nums, target):\n    # TODO: Use dictionary for complement lookup\n    pass\n`,
        solution_code: `def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen:\n            return [seen[comp], i]\n        seen[num] = i\n    return []\n`,
        explanation: "Store visited numbers in a dictionary `{number: index}`. For each number, check if `target - num` exists in O(1).",
        time_complexity: "O(N)",
        space_complexity: "O(N)",
        hints: {
            level_1: "For any number x, what exact value is needed to reach target? (target - x)",
            level_2: "Store already seen numbers in a dictionary to look them up instantly.",
            level_3: "Pattern: Hash map complement lookup.",
            level_4: "seen = {}; for i, n in enumerate(nums): if target - n in seen: return [seen[target-n], i]; seen[n] = i",
            level_5: "def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        c = target - n\n        if c in seen: return [seen[c], i]\n        seen[n] = i\n    return []"
        },
        test_cases: [
            { name: "Pair found", input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { name: "Duplicate components", input: [[3, 3], 6], expected: [0, 1] }
        ],
        dry_run_example: [
            { i: "0", num: "2", comp: "7", in_dict: "No", dict: "{2: 0}" },
            { i: "1", num: "7", comp: "2", in_dict: "Yes (index 0)", return: "[0, 1]" }
        ]
    },

    // PHASE 8: SLIDING WINDOW
    {
        id: "p8_1_sw",
        phase: "phase_8",
        title: "Max Sum Subarray of Size K",
        topic: "Fixed Window",
        pattern: "Sliding Window",
        difficulty: "Easy+",
        companies: ["TCS NQT", "Accenture", "Cognizant", "Capgemini"],
        description: "Given a list of integers `nums` and a positive integer `k`, find the maximum sum of any contiguous subarray of size `k`.",
        input_format: "nums: List[int], k: int",
        output_format: "int - maximum subarray sum",
        examples: [
            { input: "nums = [2, 1, 5, 1, 3, 2], k = 3", output: "9", explanation: "[5, 1, 3] has sum 9." }
        ],
        constraints: ["1 <= k <= len(nums) <= 10^5"],
        starter_code: `def max_sub_array_of_size_k(nums, k):\n    # TODO: Calculate first window, then slide\n    pass\n`,
        solution_code: `def max_sub_array_of_size_k(nums, k):\n    window_sum = sum(nums[:k])\n    max_sum = window_sum\n    for i in range(k, len(nums)):\n        window_sum += nums[i] - nums[i - k]\n        if window_sum > max_sum:\n            max_sum = window_sum\n    return max_sum\n`,
        explanation: "Calculate initial window sum. Slide by adding incoming element `nums[i]` and subtracting outgoing `nums[i - k]` in O(1) per step.",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "When moving the window 1 step forward, which element enters and which leaves?",
            level_2: "`window_sum += nums[i] - nums[i - k]`.",
            level_3: "Pattern: Fixed-size sliding window.",
            level_4: "curr = sum(nums[:k]); ans = curr; for i in range(k, len(nums)): curr += nums[i] - nums[i-k]; ans = max(ans, curr)",
            level_5: "def max_sub_array_of_size_k(nums, k):\n    ws = sum(nums[:k]); ms = ws\n    for i in range(k, len(nums)):\n        ws += nums[i] - nums[i - k]\n        if ws > ms: ms = ws\n    return ms"
        },
        test_cases: [
            { name: "Standard case", input: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
            { name: "Small k", input: [[2, 3, 4, 1, 5], 2], expected: 7 }
        ],
        dry_run_example: [
            { window: "[2, 1, 5]", sum: "8", max: "8" },
            { window: "[1, 5, 1]", sum: "7", max: "8" },
            { window: "[5, 1, 3]", sum: "9", max: "9" }
        ]
    },

    // PHASE 9: STACK
    {
        id: "p9_1",
        phase: "phase_9",
        title: "Valid Parentheses",
        topic: "LIFO Bracket Matching",
        pattern: "Stack",
        difficulty: "Easy",
        companies: ["TCS NQT", "Accenture", "Cognizant", "Capgemini", "Infosys", "Wipro"],
        description: "Given a string `s` containing '()[]{}', determine if the bracket string is valid.",
        input_format: "s: str",
        output_format: "bool",
        examples: [
            { input: 's = "()[]{}"', output: "True", explanation: "All match in order." },
            { input: 's = "(]"', output: "False", explanation: "Mismatched closing bracket." }
        ],
        constraints: ["1 <= len(s) <= 10^4"],
        starter_code: `def is_valid_parentheses(s):\n    # TODO: Push opening brackets to stack, pop when closing\n    pass\n`,
        solution_code: `def is_valid_parentheses(s):\n    stack = []\n    bracket_map = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in bracket_map:\n            top = stack.pop() if stack else '#'\n            if top != bracket_map[char]:\n                return False\n        else:\n            stack.append(char)\n    return len(stack) == 0\n`,
        explanation: "Push opening brackets to stack. When closing bracket arrives, pop top and check match. Stack must be empty at end.",
        time_complexity: "O(N)",
        space_complexity: "O(N)",
        hints: {
            level_1: "Which bracket closes first: the one opened first, or the one opened most recently?",
            level_2: "LIFO: The most recent bracket closes first. Use a stack list.",
            level_3: "Pattern: Stack with dictionary map for closing to opening brackets.",
            level_4: "stack = []; for c in s: if c in map: if not stack or stack.pop() != map[c]: return False else: stack.append(c)",
            level_5: "def is_valid_parentheses(s):\n    st = []; m = {')':'(', '}':'{', ']':'['}\n    for c in s:\n        if c in m:\n            if not st or st.pop() != m[c]: return False\n        else: st.append(c)\n    return len(st) == 0"
        },
        test_cases: [
            { name: "Valid brackets", input: ["()[]{}"], expected: true },
            { name: "Invalid bracket", input: ["(]"], expected: false },
            { name: "Nested valid", input: ["{[]}"], expected: true }
        ],
        dry_run_example: [
            { char: "{", stack: "['{']" },
            { char: "[", stack: "['{', '[']" },
            { char: "]", pop: "[ (matches)", stack: "['{']" }
        ]
    },

    // PHASE 11: RECURSION
    {
        id: "p11_1_rec",
        phase: "phase_11",
        title: "Fibonacci Number",
        topic: "Recursion & Subproblems",
        pattern: "State Transition",
        difficulty: "Easy",
        companies: ["TCS NQT", "Accenture", "Cognizant", "Wipro"],
        description: "Given `n`, calculate F(n) where F(0)=0, F(1)=1, and F(n)=F(n-1)+F(n-2).",
        input_format: "n: int",
        output_format: "int",
        examples: [
            { input: "n = 4", output: "3", explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3." }
        ],
        constraints: ["0 <= n <= 30"],
        starter_code: `def fib(n):\n    # TODO: Base cases n <= 1\n    pass\n`,
        solution_code: `def fib(n):\n    if n <= 0: return 0\n    if n == 1: return 1\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n`,
        explanation: "Calculate iteratively in O(N) using two variables a and b representing previous subproblem answers.",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "What are the base cases? What are F(0) and F(1)?",
            level_2: "Each step only needs the previous two numbers: a, b = b, a + b.",
            level_3: "Pattern: Fibonacci recurrence with O(1) space.",
            level_4: "if n <= 1: return n; a, b = 0, 1; for i in range(2, n+1): a, b = b, a + b; return b",
            level_5: "def fib(n):\n    if n <= 1: return n\n    a, b = 0, 1\n    for _ in range(2, n + 1): a, b = b, a + b\n    return b"
        },
        test_cases: [
            { name: "Base case 0", input: [0], expected: 0 },
            { name: "Base case 1", input: [1], expected: 1 },
            { name: "n = 4", input: [4], expected: 3 },
            { name: "n = 10", input: [10], expected: 55 }
        ],
        dry_run_example: [
            { step: "n=2", val: "1" },
            { step: "n=3", val: "2" },
            { step: "n=4", val: "3" }
        ]
    },

    // PHASE 19: DYNAMIC PROGRAMMING
    {
        id: "p19_1",
        phase: "phase_19",
        title: "Climbing Stairs",
        topic: "Overlapping Subproblems",
        pattern: "1D Dynamic Programming",
        difficulty: "Easy+",
        companies: ["Accenture", "TCS NQT", "Cognizant", "Capgemini", "Infosys"],
        description: "It takes `n` steps to reach the top. Each time you can climb either 1 or 2 steps. In how many distinct ways can you climb to the top?",
        input_format: "n: int",
        output_format: "int - number of ways",
        examples: [
            { input: "n = 3", output: "3", explanation: "(1+1+1), (1+2), (2+1)" }
        ],
        constraints: ["1 <= n <= 45"],
        starter_code: `def climb_stairs(n):\n    # TODO: To reach step n, you came from step n-1 or n-2\n    pass\n`,
        solution_code: `def climb_stairs(n):\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b\n`,
        explanation: "To reach step n, you hop from step (n-1) or (n-2). So ways(n) = ways(n-1) + ways(n-2).",
        time_complexity: "O(N)",
        space_complexity: "O(1)",
        hints: {
            level_1: "If you're at step n, which previous two steps could you have jumped from?",
            level_2: "You could have only hopped from step (n-1) or step (n-2).",
            level_3: "Pattern: Dynamic Programming (Fibonacci recurrence).",
            level_4: "if n <= 2: return n; a, b = 1, 2; for i in range(3, n+1): a, b = b, a + b; return b",
            level_5: "def climb_stairs(n):\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1): a, b = b, a + b\n    return b"
        },
        test_cases: [
            { name: "2 steps", input: [2], expected: 2 },
            { name: "3 steps", input: [3], expected: 3 },
            { name: "4 steps", input: [4], expected: 5 }
        ],
        dry_run_example: [
            { step: "n=1", ways: "1" },
            { step: "n=2", ways: "2" },
            { step: "n=3", ways: "3" }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DSA_ROADMAP_PHASES, DSA_PROBLEMS };
}
