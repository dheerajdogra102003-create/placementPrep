/**
 * DSA Quest - Static Content Data Architecture
 * Pure static data for GitHub Pages deployment:
 * 1. 22-Phase Interactive Journey Roadmap
 * 2. In-Depth Interactive Topic Lessons with Step-by-Step Visualizer
 * 3. Pattern Lab Recognition Quizzes
 * 4. Practice Arena Problems with 5-Level Hints
 * 5. Daily Challenges
 * 6. Placement Arena Company Sets
 * 7. Gamified Achievements
 */

const DSA_QUEST_DATA = {
    // =========================================================================
    // 1. ROADMAP (22 PHASES)
    // =========================================================================
    phases: [
        {
            id: 0,
            name: "Programming Foundation",
            icon: "🚀",
            badge: "Level 1",
            summary: "Variables, conditions, loops, collections, and tracing.",
            topics: [
                "Variables & Data Types",
                "Operators & Precedence",
                "Conditionals (if/elif/else)",
                "Loops (for, while, range)",
                "Functions & Scope",
                "Lists, Tuples, Sets, Dictionaries",
                "Strings & Indexing",
                "Python Built-ins (len, min, max, sum)"
            ]
        },
        {
            id: 1,
            name: "Problem Solving & Complexity",
            icon: "🧠",
            badge: "Level 2",
            summary: "Big O, brute force thinking, dry-runs, and edge cases.",
            topics: [
                "Big O Notation",
                "O(1), O(log N), O(N), O(N²)",
                "Brute Force Thinking",
                "Optimization Strategies",
                "Pattern Recognition Clues",
                "Dry Runs & Variable Tracing",
                "Edge Case Identification"
            ]
        },
        {
            id: 2,
            name: "Arrays",
            icon: "📦",
            badge: "Level 3",
            summary: "Single traversal, max/min, second largest, and in-place manipulation.",
            topics: [
                "Array Traversal",
                "Maximum and Minimum",
                "Second Largest Element",
                "Reverse Array In-Place",
                "Duplicate Detection",
                "Frequency Counting",
                "Array Rotation",
                "Prefix Sum Basics"
            ]
        },
        {
            id: 3,
            name: "Strings",
            icon: "🔤",
            badge: "Level 4",
            summary: "Character frequencies, palindromes, anagrams, and substrings.",
            topics: [
                "Character Frequency",
                "Valid Palindrome",
                "Valid Anagram",
                "Duplicate Characters",
                "Substring Basics",
                "String Inward Traversal"
            ]
        },
        {
            id: 4,
            name: "Searching",
            icon: "🔎",
            badge: "Level 5",
            summary: "Linear search, binary search, first/last occurrence, and rotated arrays.",
            topics: [
                "Linear Search",
                "Binary Search (O(log N))",
                "First & Last Occurrence",
                "Rotated Sorted Array Search",
                "Binary Search on Answer"
            ]
        },
        {
            id: 5,
            name: "Sorting",
            icon: "⚡",
            badge: "Level 6",
            summary: "Bubble, selection, insertion, merge sort, and sort-then-solve patterns.",
            topics: [
                "Bubble Sort",
                "Selection Sort",
                "Insertion Sort",
                "Merge Sort Concept",
                "Quick Sort Concept",
                "Sorting-Based Problem Solving"
            ]
        },
        {
            id: 6,
            name: "Hashing",
            icon: "🗂️",
            badge: "Level 7",
            summary: "Hash tables, sets, complement lookup, and frequency counting.",
            topics: [
                "Dictionary & Set Internals",
                "Frequency Map Pattern",
                "Seen Set for Duplicates",
                "Two Sum Complement Lookup",
                "Duplicate Detection",
                "Longest Consecutive Sequence"
            ]
        },
        {
            id: 7,
            name: "Two Pointers",
            icon: "👉",
            badge: "Level 8",
            summary: "Opposite ends, sorted array pairs, and slow/fast pointers.",
            topics: [
                "Left and Right Pointers",
                "Pair Problems on Sorted Arrays",
                "Two Sum II",
                "Reverse Array In-Place",
                "Container With Most Water",
                "Three Sum Introduction"
            ]
        },
        {
            id: 8,
            name: "Sliding Window",
            icon: "🪟",
            badge: "Level 9",
            summary: "Fixed and variable contiguous subarrays and substrings.",
            topics: [
                "Fixed Window Pattern",
                "Variable Window Pattern",
                "Max Sum Subarray of Size K",
                "Longest Substring Without Repeating",
                "Minimum Size Subarray Sum"
            ]
        },
        {
            id: 9,
            name: "Stack",
            icon: "📚",
            badge: "Level 10",
            summary: "LIFO, parentheses validation, and monotonic stacks.",
            topics: [
                "LIFO Principle",
                "Valid Parentheses Matching",
                "Monotonic Stack Concept",
                "Next Greater Element",
                "Daily Temperatures"
            ]
        },
        {
            id: 10,
            name: "Queue",
            icon: "🚶",
            badge: "Level 11",
            summary: "FIFO, collections.deque, simulation, and BFS introduction.",
            topics: [
                "FIFO Principle",
                "Queue via collections.deque",
                "Queue Simulation",
                "BFS Queue Introduction"
            ]
        },
        {
            id: 11,
            name: "Recursion",
            icon: "🔁",
            badge: "Level 12",
            summary: "Base cases, call stack, Fibonacci, and recursion trees.",
            topics: [
                "Base Case & Recursive Case",
                "Call Stack & Tracing",
                "Factorial & Fibonacci",
                "Recursion Trees"
            ]
        },
        {
            id: 12,
            name: "Linked List",
            icon: "🔗",
            badge: "Level 13",
            summary: "Nodes, pointers, reverse list, middle node, and cycle detection.",
            topics: [
                "Node & Head Pointer",
                "Traversal & Insertion",
                "Reverse Linked List",
                "Middle of Linked List",
                "Fast & Slow Pointers (Floyd's Cycle)"
            ]
        },
        {
            id: 13,
            name: "Trees",
            icon: "🌳",
            badge: "Level 14",
            summary: "Hierarchical data, DFS (preorder, inorder, postorder), and BFS.",
            topics: [
                "Binary Tree Structure",
                "Preorder, Inorder, Postorder",
                "Level Order Traversal (BFS)",
                "Maximum Depth / Height",
                "Invert Binary Tree"
            ]
        },
        {
            id: 14,
            name: "Binary Search Tree",
            icon: "🌲",
            badge: "Level 15",
            summary: "BST invariant, search, validate BST, and LCA.",
            topics: [
                "BST Property (Left < Root < Right)",
                "Search & Insert in BST",
                "Validate BST",
                "Lowest Common Ancestor"
            ]
        },
        {
            id: 15,
            name: "Heap & Priority Queue",
            icon: "⛰️",
            badge: "Level 16",
            summary: "Min-heap, max-heap, Top K problems, and heapq in Python.",
            topics: [
                "Min Heap & Max Heap",
                "Python heapq",
                "Top K Frequent Elements",
                "Kth Largest Element"
            ]
        },
        {
            id: 16,
            name: "Greedy",
            icon: "🎯",
            badge: "Level 17",
            summary: "Local optimal choice, activity selection, and jump game.",
            topics: [
                "Greedy Choice Property",
                "Activity Selection / Intervals",
                "Jump Game",
                "Fractional Knapsack"
            ]
        },
        {
            id: 17,
            name: "Backtracking",
            icon: "🧩",
            badge: "Level 18",
            summary: "State-space tree, choose, explore, and undo.",
            topics: [
                "Decision Trees",
                "Subsets & Combinations",
                "Permutations",
                "N-Queens Concept"
            ]
        },
        {
            id: 18,
            name: "Graphs",
            icon: "🕸️",
            badge: "Level 19",
            summary: "Adjacency lists, BFS, DFS, number of islands, and cycles.",
            topics: [
                "Vertices & Edges",
                "Adjacency List Representation",
                "BFS & DFS Graph Traversal",
                "Number of Islands (Grid BFS/DFS)",
                "Cycle Detection Basics"
            ]
        },
        {
            id: 19,
            name: "Dynamic Programming",
            icon: "🧠",
            badge: "Level 20",
            summary: "Overlapping subproblems, memoization, and 1D/2D tabulation.",
            topics: [
                "Overlapping Subproblems",
                "Memoization vs Tabulation",
                "1D DP (Climbing Stairs, House Robber)",
                "0/1 Knapsack Introduction"
            ]
        },
        {
            id: 20,
            name: "Placement Patterns",
            icon: "🎓",
            badge: "Level 21",
            summary: "High-yield patterns for TCS, Accenture, Capgemini, Cognizant, Wipro.",
            topics: [
                "Frequency Pattern",
                "Prefix Sum & Sliding Window",
                "Two Pointers & In-Place Swaps",
                "Binary Search Variations",
                "Stack & Parentheses Drills"
            ]
        },
        {
            id: 21,
            name: "Interview Ready",
            icon: "🏆",
            badge: "Final Boss",
            summary: "60-second approach pitch, talking out loud, dry-runs, and edge cases.",
            topics: [
                "Explain Approach Before Coding",
                "Brute Force vs Optimized",
                "Verbal Dry-Run on Edge Cases",
                "Handling Interviewer Follow-Ups"
            ]
        }
    ],

    // =========================================================================
    // 2. INTERACTIVE TOPIC LESSONS (WITH STEP-BY-STEP VISUALIZER)
    // =========================================================================
    lessons: {
        two_pointers: {
            title: "Two Pointers Technique",
            phaseId: 7,
            badge: "Essential Placement Pattern",
            what: "The Two Pointers technique uses two integer variables representing indices that traverse a data structure (typically an array or string) simultaneously.",
            why: "In brute-force searching, checking every pair requires two nested loops taking O(N²) time. Two pointers reduce this to a single O(N) linear pass by intelligently narrowing down the search window from both ends.",
            analogy: "Imagine two people standing at opposite ends of a long hallway looking for each other. Instead of one person walking to everyone in the hall, both walk toward each other simultaneously until they meet in the middle!",
            syntax: `# Python Two Pointers Template
left = 0
right = len(nums) - 1

while left < right:
    current_sum = nums[left] + nums[right]
    if current_sum == target:
        return [left, right]
    elif current_sum < target:
        left += 1   # Need a larger sum
    else:
        right -= 1  # Need a smaller sum`,
            visualizerData: {
                title: "Two Sum on Sorted Array (Target = 9)",
                array: [2, 3, 5, 7, 11],
                steps: [
                    { left: 0, right: 4, sum: "2 + 11 = 13", action: "13 > 9 (Too big!) Move right pointer left ←", note: "Decreasing right makes the sum smaller." },
                    { left: 0, right: 3, sum: "2 + 7 = 9", action: "🎉 9 == 9 (Target found!) Indices: [0, 3]", note: "Done in just 2 comparisons instead of 10!" }
                ]
            },
            commonPatterns: "Opposite-direction (Sorted arrays, Palindromes), Same-direction (Move Zeroes, Fast & Slow cycle detection).",
            commonMistakes: "Using `left <= right` on pair problems (allows element to pair with itself), forgetting to sort the array first.",
            timeComplexity: "O(N) single pass.",
            spaceComplexity: "O(1) auxiliary variables."
        },
        sliding_window: {
            title: "Sliding Window Pattern",
            phaseId: 8,
            badge: "High-Frequency MNC Pattern",
            what: "A technique used to perform operations on a contiguous segment (window) of an array or string, sliding it forward one element at a time.",
            why: "Recalculating sum or count for every k-length segment takes O(N × K) time. A sliding window adds the incoming element and subtracts the outgoing element in O(1) time, bringing total time down to O(N).",
            analogy: "Think of a magnifying glass with width K sliding across a row of numbers. When you slide right, you don't re-read all numbers—you just drop the number sliding out on the left and look at the new number entering on the right!",
            syntax: `# Fixed-Size Sliding Window
window_sum = sum(nums[:k])
max_sum = window_sum

for i in range(k, len(nums)):
    window_sum += nums[i] - nums[i - k]  # Add incoming, subtract outgoing
    max_sum = max(max_sum, window_sum)`,
            visualizerData: {
                title: "Max Sum Subarray of Size K=3",
                array: [2, 1, 5, 1, 3, 2],
                steps: [
                    { left: 0, right: 2, sum: "2 + 1 + 5 = 8", action: "Initial Window [2, 1, 5]", note: "max_sum = 8" },
                    { left: 1, right: 3, sum: "8 + 1 - 2 = 7", action: "Slide window: Add 1, drop 2", note: "max_sum remains 8" },
                    { left: 2, right: 4, sum: "7 + 3 - 1 = 9", action: "Slide window: Add 3, drop 1", note: "New maximum: max_sum = 9!" },
                    { left: 3, right: 5, sum: "9 + 2 - 5 = 6", action: "Slide window: Add 2, drop 5", note: "max_sum remains 9" }
                ]
            },
            commonPatterns: "Fixed-size window (size K), Variable-size window (Longest substring without repeating characters).",
            commonMistakes: "Recomputing `sum(nums[i:i+k])` inside the loop (defeats the purpose of the pattern).",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        },
        hashing_basics: {
            title: "Hashing & Frequency Maps",
            phaseId: 6,
            badge: "Instant O(1) Lookup",
            what: "Using hash tables (Python dictionaries and sets) to store key-value pairs or unique elements for constant time O(1) lookup.",
            why: "Searching an unsorted list takes O(N). If you need to search multiple times, nesting loops causes O(N²). A hash map lets you remember previously visited elements for instant O(1) verification.",
            analogy: "Think of a student roll-number register. Instead of asking every person in the hall if their roll number is 42, you open the index directly to roll 42 in 1 second!",
            syntax: `# Frequency Map Template
counts = {}
for item in items:
    counts[item] = counts.get(item, 0) + 1

# Complement Lookup
seen = {}
for i, num in enumerate(nums):
    diff = target - num
    if diff in seen:
        return [seen[diff], i]
    seen[num] = i`,
            visualizerData: {
                title: "Two Sum Complement Lookup (Target = 9)",
                array: [2, 7, 11, 15],
                steps: [
                    { left: 0, right: 0, sum: "num = 2, need 9 - 2 = 7", action: "7 in seen? No. Store seen[2] = 0", note: "Dictionary state: {2: 0}" },
                    { left: 1, right: 1, sum: "num = 7, need 9 - 7 = 2", action: "2 in seen? YES! (index 0)", note: "Target pair found: indices [0, 1] in O(N) time!" }
                ]
            },
            commonPatterns: "Complement lookup, Character frequency counting, Duplicate detection via sets.",
            commonMistakes: "Adding element to dictionary before checking for complement (causes element to pair with itself).",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)"
        }
    },

    // =========================================================================
    // 3. PATTERN LAB (INTERACTIVE PATTERN IDENTIFICATION QUIZ)
    // =========================================================================
    patternLabQuizzes: [
        {
            id: "pl_1",
            scenario: "You are given an array of integers that is already sorted in non-decreasing order. You need to find if there exist two numbers whose sum equals target.",
            clues: ["The input array is already sorted.", "Looking for a pair from opposite boundaries.", "No extra memory allowed."],
            options: ["Two Pointers", "Sliding Window", "Monotonic Stack", "Dynamic Programming"],
            correct: "Two Pointers",
            explanation: "When an array is already sorted and you are searching for pairs, Two Pointers (left at 0, right at end) solves it in O(N) time and O(1) space by shrinking boundaries."
        },
        {
            id: "pl_2",
            scenario: "Given an integer array, find the maximum sum of any contiguous subarray of fixed length K.",
            clues: ["Contiguous subarray segment.", "Fixed length K.", "Subarrays overlap heavily."],
            options: ["Sliding Window", "Binary Search", "Backtracking", "Graph BFS"],
            correct: "Sliding Window",
            explanation: "Because the window size K is fixed and contiguous, sliding the window forward by adding incoming and subtracting outgoing elements avoids O(N*K) brute force."
        },
        {
            id: "pl_3",
            scenario: "Given a string of brackets '()[]{}', determine if the brackets close in the correct order.",
            clues: ["Most recently opened bracket must close first.", "Nested structure.", "LIFO processing."],
            options: ["Stack", "Queue", "Two Pointers", "Greedy"],
            correct: "Stack",
            explanation: "Brackets operate in Last-In First-Out order. The most recently opened bracket must match the incoming closing bracket, which is the definition of a Stack."
        },
        {
            id: "pl_4",
            scenario: "Given a list of numbers, return true if any number appears more than once, in O(N) time.",
            clues: ["Checking for duplicates.", "Instant membership test.", "Need to remember visited numbers."],
            options: ["Frequency Map / Set", "Two Pointers", "Binary Search", "Divide & Conquer"],
            correct: "Frequency Map / Set",
            explanation: "A Hash Set provides O(1) membership check. As you traverse, if the number is already in the set, a duplicate is confirmed."
        },
        {
            id: "pl_5",
            scenario: "You have an array sorted in ascending order and need to find the index of a target value in O(log N) time.",
            clues: ["Array is sorted.", "Halving the search space each step.", "O(log N) required."],
            options: ["Binary Search", "Linear Traversal", "Two Pointers", "Sliding Window"],
            correct: "Binary Search",
            explanation: "Binary search compares the middle element to the target, eliminating half of the remaining elements each step, resulting in O(log N) complexity."
        }
    ],

    // =========================================================================
    // 4. PRACTICE ARENA PROBLEMS (WITH 5-LEVEL PROGRESSIVE HINTS)
    // =========================================================================
    problems: [
        {
            id: "prob_1",
            title: "Count Even Numbers",
            topic: "Arrays",
            difficulty: "Easy",
            pattern: "Traversal & Counting",
            companies: ["Accenture", "TCS", "Capgemini", "Cognizant"],
            description: "Given a list of integers `nums`, count and return how many numbers in the list are even.",
            expectedThinking: "Iterate through each number, test if `num % 2 == 0`, increment a counter, and return the counter after the loop.",
            hints: [
                "Hint 1: What is the input? A list of integers. What is the output? A single integer representing count.",
                "Hint 2: In Python, what arithmetic operator gives you the remainder of division? (Hint: `%`)",
                "Hint 3: A number is even if `num % 2 == 0`.",
                "Hint 4: Initialize a variable `count = 0` before your loop. Increment `count += 1` inside an `if` block.",
                "Hint 5: Solution:\n```python\ndef count_even(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count += 1\n    return count\n```"
            ],
            solution: "def count_even(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count += 1\n    return count",
            complexity: "Time: O(N) | Space: O(1)"
        },
        {
            id: "prob_2",
            title: "Find Second Largest Element",
            topic: "Arrays",
            difficulty: "Easy",
            pattern: "Two Variable Tracking",
            companies: ["TCS", "Cognizant", "Accenture", "Infosys"],
            description: "Given an array of integers `nums`, find and return the second largest distinct element. If no second largest exists, return -1.",
            expectedThinking: "Track `first` (largest) and `second` (second largest) in one pass without sorting.",
            hints: [
                "Hint 1: Sorting takes O(N log N). Can we find the second largest in a single linear O(N) pass?",
                "Hint 2: When a new number is greater than your current largest, what happens to the previous largest?",
                "Hint 3: The previous largest demotes to second largest! Set `second = first` before updating `first = num`.",
                "Hint 4: What if `num` is strictly between `second` and `first`? Update `second = num`.",
                "Hint 5: Solution:\n```python\ndef second_largest(nums):\n    first = second = float('-inf')\n    for n in nums:\n        if n > first:\n            second = first\n            first = n\n        elif n > second and n != first:\n            second = n\n    return second if second != float('-inf') else -1\n```"
            ],
            solution: "def second_largest(nums):\n    first = second = float('-inf')\n    for n in nums:\n        if n > first:\n            second = first\n            first = n\n        elif n > second and n != first:\n            second = n\n    return second if second != float('-inf') else -1",
            complexity: "Time: O(N) | Space: O(1)"
        },
        {
            id: "prob_3",
            title: "Valid Palindrome",
            topic: "Strings",
            difficulty: "Easy",
            pattern: "Two Pointers (Inward)",
            companies: ["Accenture", "TCS", "Wipro", "Capgemini"],
            description: "Determine if a phrase is a palindrome, ignoring non-alphanumeric characters and letter case.",
            expectedThinking: "Filter out non-alphanumeric characters, convert to lowercase, and check if opposite ends match inward.",
            hints: [
                "Hint 1: How do you check if a character is a letter or number in Python? Use `char.isalnum()`.",
                "Hint 2: Standardize case by calling `.lower()` on each character.",
                "Hint 3: Use two pointers: `left = 0` and `right = len(cleaned) - 1`. Compare inwards.",
                "Hint 4: If `cleaned[left] != cleaned[right]`, return False immediately.",
                "Hint 5: Solution:\n```python\ndef is_palindrome(s):\n    cl = [c.lower() for c in s if c.isalnum()]\n    l, r = 0, len(cl) - 1\n    while l < r:\n        if cl[l] != cl[r]: return False\n        l += 1; r -= 1\n    return True\n```"
            ],
            solution: "def is_palindrome(s):\n    cl = [c.lower() for c in s if c.isalnum()]\n    l, r = 0, len(cl) - 1\n    while l < r:\n        if cl[l] != cl[r]: return False\n        l += 1; r -= 1\n    return True",
            complexity: "Time: O(N) | Space: O(N)"
        },
        {
            id: "prob_4",
            title: "Two Sum - Target Pair",
            topic: "Hashing",
            difficulty: "Easy",
            pattern: "Complement Lookup",
            companies: ["TCS", "Accenture", "Capgemini", "Wipro", "Cognizant", "Infosys"],
            description: "Given an array `nums` and integer `target`, return the indices of two numbers that add up to `target`.",
            expectedThinking: "Instead of nested loops O(N²), store each number in a dictionary and look for `target - num` in O(1).",
            hints: [
                "Hint 1: For any number `x`, what number must you pair with it? `complement = target - x`.",
                "Hint 2: Can we remember numbers we have already seen so far?",
                "Hint 3: Use a dictionary `{number: index}`.",
                "Hint 4: For each index and number: check if `target - num in seen`. If yes, return indices!",
                "Hint 5: Solution:\n```python\ndef two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        comp = target - n\n        if comp in seen:\n            return [seen[comp], i]\n        seen[n] = i\n    return []\n```"
            ],
            solution: "def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        comp = target - n\n        if comp in seen:\n            return [seen[comp], i]\n        seen[n] = i\n    return []",
            complexity: "Time: O(N) | Space: O(N)"
        },
        {
            id: "prob_5",
            title: "Binary Search",
            topic: "Searching",
            difficulty: "Easy",
            pattern: "Divide & Conquer",
            companies: ["TCS", "Accenture", "Cognizant", "Capgemini", "Infosys"],
            description: "Given a sorted ascending integer list `nums` and target, return its index or -1 in O(log N) time.",
            expectedThinking: "Compare target with mid element. Halve the search space each step.",
            hints: [
                "Hint 1: The array is sorted. Looking at the middle element divides remaining items into two halves.",
                "Hint 2: If `nums[mid] < target`, target must be in the right half: `low = mid + 1`.",
                "Hint 3: Use loop condition `while low <= high:`.",
                "Hint 4: Compute `mid = (low + high) // 2` inside the loop.",
                "Hint 5: Solution:\n```python\ndef binary_search(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1\n```"
            ],
            solution: "def binary_search(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
            complexity: "Time: O(log N) | Space: O(1)"
        },
        {
            id: "prob_6",
            title: "Max Sum Subarray of Size K",
            topic: "Sliding Window",
            difficulty: "Medium",
            pattern: "Fixed Sliding Window",
            companies: ["TCS", "Accenture", "Cognizant", "Capgemini"],
            description: "Given an array `nums` and integer `k`, find the maximum sum of any contiguous subarray of size `k`.",
            expectedThinking: "Compute initial sum of first k elements. Slide by adding incoming and subtracting outgoing.",
            hints: [
                "Hint 1: Don't recalculate sum from scratch inside a loop.",
                "Hint 2: When the window slides right, only 2 numbers change: 1 enters, 1 leaves.",
                "Hint 3: `window_sum += nums[i] - nums[i - k]`.",
                "Hint 4: Keep a running `max_sum = max(max_sum, window_sum)`.",
                "Hint 5: Solution:\n```python\ndef max_sub_array_of_size_k(nums, k):\n    ws = sum(nums[:k])\n    ms = ws\n    for i in range(k, len(nums)):\n        ws += nums[i] - nums[i - k]\n        if ws > ms: ms = ws\n    return ms\n```"
            ],
            solution: "def max_sub_array_of_size_k(nums, k):\n    ws = sum(nums[:k])\n    ms = ws\n    for i in range(k, len(nums)):\n        ws += nums[i] - nums[i - k]\n        if ws > ms: ms = ws\n    return ms",
            complexity: "Time: O(N) | Space: O(1)"
        },
        {
            id: "prob_7",
            title: "Valid Parentheses",
            topic: "Stack",
            difficulty: "Easy",
            pattern: "LIFO Stack Matching",
            companies: ["TCS", "Accenture", "Cognizant", "Capgemini", "Infosys", "Wipro"],
            description: "Given a string `s` containing '()[]{}', determine if brackets are matched and closed in correct order.",
            expectedThinking: "Push opening brackets. Pop and verify match when closing bracket arrives.",
            hints: [
                "Hint 1: The most recently opened bracket must be closed first (LIFO).",
                "Hint 2: Use a Python list as a stack: `stack.append()` and `stack.pop()`.",
                "Hint 3: Map closing brackets to opening brackets: `{')':'(', '}':'{', ']':'['}`.",
                "Hint 4: Check if stack is empty before popping to avoid IndexError.",
                "Hint 5: Solution:\n```python\ndef is_valid(s):\n    st = []\n    m = {')':'(', '}':'{', ']':'['}\n    for c in s:\n        if c in m:\n            if not st or st.pop() != m[c]: return False\n        else: st.append(c)\n    return len(st) == 0\n```"
            ],
            solution: "def is_valid(s):\n    st = []\n    m = {')':'(', '}':'{', ']':'['}\n    for c in s:\n        if c in m:\n            if not st or st.pop() != m[c]: return False\n        else: st.append(c)\n    return len(st) == 0",
            complexity: "Time: O(N) | Space: O(N)"
        },
        {
            id: "prob_8",
            title: "Climbing Stairs",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            pattern: "1D Dynamic Programming",
            companies: ["Accenture", "TCS", "Cognizant", "Capgemini", "Infosys"],
            description: "You are climbing a staircase with `n` steps. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top?",
            expectedThinking: "To reach step n, you could have hopped from step n-1 or n-2. ways(n) = ways(n-1) + ways(n-2).",
            hints: [
                "Hint 1: If you are at step n, what were the only two possible steps you jumped from?",
                "Hint 2: You could only come from step (n-1) or (n-2).",
                "Hint 3: This follows the Fibonacci recurrence relation!",
                "Hint 4: Use bottom-up iteration with two variables to avoid exponential recursion.",
                "Hint 5: Solution:\n```python\ndef climb_stairs(n):\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b\n```"
            ],
            solution: "def climb_stairs(n):\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    return b",
            complexity: "Time: O(N) | Space: O(1)"
        }
    ],

    // =========================================================================
    // 5. DAILY CHALLENGES
    // =========================================================================
    dailyChallenges: [
        {
            dayNumber: 1,
            title: "Two Sum on Sorted Array",
            topic: "Two Pointers",
            difficulty: "Easy",
            pattern: "Opposite Pointers",
            motivation: "🔥 Keep your streak alive! Master two-pointer pair elimination.",
            problemId: "prob_4"
        },
        {
            dayNumber: 2,
            title: "Valid Parentheses Matching",
            topic: "Stack",
            difficulty: "Easy",
            pattern: "LIFO Matching",
            motivation: "⚡ One problem closer to placement readiness! Master the stack pattern.",
            problemId: "prob_7"
        },
        {
            dayNumber: 3,
            title: "Sliding Window Maximum Sum",
            topic: "Sliding Window",
            difficulty: "Medium",
            pattern: "Fixed Window",
            motivation: "🧠 Train the pattern, not just the answer! Subarray optimization.",
            problemId: "prob_6"
        }
    ],

    // =========================================================================
    // 6. ACHIEVEMENTS
    // =========================================================================
    achievements: [
        { id: "first_step", title: "🚀 First Step", desc: "Complete your first topic in the roadmap", icon: "🚀" },
        { id: "streak_3", title: "🔥 3-Day Streak", desc: "Practice consistently for 3 days", icon: "🔥" },
        { id: "ten_problems", title: "⚡ 10 Problems Solved", desc: "Solve 10 practice arena problems", icon: "⚡" },
        { id: "pattern_hunter", title: "🧠 Pattern Hunter", desc: "Correctly identify 5 patterns in Pattern Lab", icon: "🧠" },
        { id: "array_master", title: "📚 Array Master", desc: "Complete all Array problems", icon: "📚" },
        { id: "tree_climber", title: "🌳 Tree Climber", desc: "Complete Trees phase in roadmap", icon: "🌳" },
        { id: "placement_ready", title: "🏆 Placement Ready", desc: "Complete a mock placement arena challenge", icon: "🏆" }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DSA_QUEST_DATA };
}
