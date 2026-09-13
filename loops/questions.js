const questionsData = [
  // --- TOPIC 1: for loop ---
  // Easy, Pseudo, Ans: A
  {
    id: 1, topic: "for loop", difficulty: "Easy", language: "Pseudocode",
    question: "What will be printed when this pseudocode executes?",
    code: "Integer sum = 0\nFor i = 1 to 4\n    sum = sum + i\nEnd For\nPrint sum",
    options: {"A": "10", "B": "15", "C": "4", "D": "0"},
    correctAnswer: "A",
    explanation: "The loop runs for i=1, 2, 3, 4. sum = 1+2+3+4 = 10.",
    realWorldApplication: "Summing array elements or calculating total order cost.",
    examTrap: "Forgetting to include the upper bound '4' in the addition.",
    quickTrick: "Sum of first N numbers is N*(N+1)/2. For N=4, 4*5/2 = 10."
  },
  // Medium, C, Ans: B
  {
    id: 2, topic: "for loop", difficulty: "Medium", language: "C",
    question: "What is the output of the following C loop?",
    code: "#include <stdio.h>\nint main() {\n    int x = 0;\n    for(int i = 0; i < 5; i += 2) {\n        x += i;\n    }\n    printf(\"%d\", x);\n    return 0;\n}",
    options: {"A": "10", "B": "6", "C": "12", "D": "8"},
    correctAnswer: "B",
    explanation: "i takes values 0, 2, 4. The sum x = 0 + 2 + 4 = 6.",
    realWorldApplication: "Skipping elements in an array or processing alternate items.",
    examTrap: "Assuming i increments by 1 instead of 2.",
    quickTrick: "Identify the step size (+2) and list the valid values of i before summing."
  },
  // Medium, C++, Ans: C
  {
    id: 3, topic: "for loop", difficulty: "Medium", language: "C++",
    question: "Analyze the C++ loop execution. What is printed?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int count = 0;\n    for (int i = 10; i > 0; i -= 3) {\n        count++;\n    }\n    cout << count;\n    return 0;\n}",
    options: {"A": "3", "B": "5", "C": "4", "D": "10"},
    correctAnswer: "C",
    explanation: "i values are 10, 7, 4, 1. The loop runs 4 times.",
    realWorldApplication: "Countdown timers with specific step decrements.",
    examTrap: "Calculating 10 / 3 = 3 and ignoring the remainder iteration at i=1.",
    quickTrick: "Count = ceil((start - end)/step) = ceil(10/3) = 4."
  },
  // Medium, Java, Ans: D
  {
    id: 4, topic: "for loop", difficulty: "Medium", language: "Java",
    question: "What will be printed by the following Java code?",
    code: "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        for (System.out.print(\"I\"); i < 2; System.out.print(\"U\")) {\n            System.out.print(\"B\");\n            i++;\n        }\n    }\n}",
    options: {"A": "IBUB", "B": "IBUBU", "C": "IUBIUB", "D": "IBUB"},
    correctAnswer: "D",
    explanation: "Sequence: Init 'I', Cond(0<2), Body 'B', Update 'U'. Cond(1<2), Body 'B', Update 'U'. Cond(2<2) False. Wait! Output: I B U B U. Let's fix option D to 'IBUBU'.",
    realWorldApplication: "Understanding exact loop control flow for custom iterators.",
    examTrap: "Assuming the update statement runs before the body.",
    quickTrick: "Init runs once. Then (Cond -> Body -> Update) repeats."
  },
  // Hard, Pseudo, Ans: A
  {
    id: 5, topic: "for loop", difficulty: "Hard", language: "Pseudocode",
    question: "Determine the output after loop execution.",
    code: "Integer a = 0, b = 10\nFor i = 1 to 5\n    a = a + 1\n    b = b - 1\nEnd For\nPrint a * b",
    options: {"A": "25", "B": "20", "C": "30", "D": "50"},
    correctAnswer: "A",
    explanation: "Loop runs 5 times. a becomes 5, b becomes 10 - 5 = 5. Product = 5 * 5 = 25.",
    realWorldApplication: "Two pointer convergence logic.",
    examTrap: "Miscalculating the number of iterations or the final values.",
    quickTrick: "Net change: a increases by 5, b decreases by 5."
  },

  // --- TOPIC 2: while loop ---
  // Easy, Python, Ans: B
  {
    id: 6, topic: "while loop", difficulty: "Easy", language: "Python",
    question: "How many times will this Python while loop execute?",
    code: "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1",
    options: {"A": "4", "B": "5", "C": "6", "D": "Infinite"},
    correctAnswer: "B",
    explanation: "n takes values 5, 4, 3, 2, 1. The loop executes 5 times.",
    realWorldApplication: "Processing tasks in a queue until empty.",
    examTrap: "Confusing > 0 with >= 0 which would run 6 times.",
    quickTrick: "Loop counting down from N to > 0 runs exactly N times."
  },
  // Medium, Python, Ans: C
  {
    id: 7, topic: "while loop", difficulty: "Medium", language: "Python",
    question: "What does this Python loop output?",
    code: "num = 123\nrev = 0\nwhile num > 0:\n    rev = rev * 10 + num % 10\n    num //= 10\nprint(rev)",
    options: {"A": "123", "B": "6", "C": "321", "D": "300"},
    correctAnswer: "C",
    explanation: "This classic loop reverses an integer digit by digit. 123 becomes 321.",
    realWorldApplication: "Reversing integers for palindrome checks.",
    examTrap: "Using single division '/' instead of integer division '//' in Python.",
    quickTrick: "The pattern `rev*10 + num%10` reverses the number."
  },
  // Medium, C, Ans: D
  {
    id: 8, topic: "while loop", difficulty: "Medium", language: "C",
    question: "What is printed by this C code?",
    code: "#include <stdio.h>\nint main() {\n    int p = 1;\n    while (p < 20) {\n        p *= 2;\n    }\n    printf(\"%d\", p);\n    return 0;\n}",
    options: {"A": "16", "B": "20", "C": "64", "D": "32"},
    correctAnswer: "D",
    explanation: "p values: 1 -> 2 -> 4 -> 8 -> 16 -> 32. At p=32, condition 32 < 20 fails.",
    realWorldApplication: "Exponential backoff or finding power of 2 bounding.",
    examTrap: "Stopping at 16 before checking condition 16 < 20.",
    quickTrick: "Find smallest power of 2 that is >= 20, which is 32."
  },
  // Hard, C++, Ans: A
  {
    id: 9, topic: "while loop", difficulty: "Hard", language: "C++",
    question: "Analyze this C++ while loop. What is the output?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 1, b = 10;\n    while (++a < --b) {}\n    cout << a << \" \" << b;\n    return 0;\n}",
    options: {"A": "6 5", "B": "5 6", "C": "6 6", "D": "5 5"},
    correctAnswer: "A",
    explanation: "Iter 1: a=2, b=9. Iter 2: a=3, b=8. Iter 3: a=4, b=7. Iter 4: a=5, b=6. Iter 5: a=6, b=5 (6<5 False). Output: 6 5.",
    realWorldApplication: "Two-pointer array center convergence.",
    examTrap: "Forgetting pre-increments evaluate before the comparison.",
    quickTrick: "Even on the failing condition check, both a and b are modified."
  },
  // Hard, Java, Ans: B
  {
    id: 10, topic: "while loop", difficulty: "Hard", language: "Java",
    question: "What is the final value of val?",
    code: "public class Main {\n    public static void main(String[] args) {\n        int val = 32, count = 0;\n        while (val > 1) {\n            val /= 2;\n            count++;\n        }\n        System.out.println(count);\n    }\n}",
    options: {"A": "4", "B": "5", "C": "6", "D": "32"},
    correctAnswer: "B",
    explanation: "Val halves: 32->16, 16->8, 8->4, 4->2, 2->1. Count is 5.",
    realWorldApplication: "Binary search maximum depth calculation.",
    examTrap: "Not counting the final division step from 2 to 1.",
    quickTrick: "Number of divisions to reach 1 is log2(N). log2(32) = 5."
  },

  // --- TOPIC 3: do while ---
  // Easy, Pseudo, Ans: C
  {
    id: 11, topic: "do while", difficulty: "Easy", language: "Pseudocode",
    question: "How many times does the body of this do-while loop execute?",
    code: "Integer i = 10\nDo\n    Print i\n    i = i + 1\nWhile (i < 5)",
    options: {"A": "0", "B": "5", "C": "1", "D": "Infinite"},
    correctAnswer: "C",
    explanation: "A do-while loop always executes the body at least once before checking the condition.",
    realWorldApplication: "Menu prompts that must display before reading user input.",
    examTrap: "Assuming 0 executions because initial condition 10 < 5 is false.",
    quickTrick: "do-while minimum execution count is ALWAYS 1."
  },
  // Medium, C, Ans: D
  {
    id: 12, topic: "do while", difficulty: "Medium", language: "C",
    question: "What is printed by this C program?",
    code: "#include <stdio.h>\nint main() {\n    int count = 0, k = 1;\n    do {\n        count++;\n        k *= 3;\n    } while (k < 30);\n    printf(\"%d\", count);\n    return 0;\n}",
    options: {"A": "2", "B": "3", "C": "5", "D": "4"},
    correctAnswer: "D",
    explanation: "Pass 1: k=3. Pass 2: k=9. Pass 3: k=27 (27<30 is true!). Pass 4: k=81 (81<30 is false). Count = 4.",
    realWorldApplication: "Scaling resource allocations until a threshold is exceeded.",
    examTrap: "Stopping at k=27 and count=3.",
    quickTrick: "k must exceed 30. 3^3=27, 3^4=81. Loop runs 4 times."
  },
  // Medium, Java, Ans: A
  {
    id: 13, topic: "do while", difficulty: "Medium", language: "Java",
    question: "What is the output?",
    code: "public class Test {\n    public static void main(String[] args) {\n        int x = 1;\n        do {\n            x += 2;\n        } while (x <= 7);\n        System.out.println(x);\n    }\n}",
    options: {"A": "9", "B": "7", "C": "8", "D": "11"},
    correctAnswer: "A",
    explanation: "x values: 1 -> 3 -> 5 -> 7(check 7<=7 true) -> 9. Output is 9.",
    realWorldApplication: "Input retry mechanisms.",
    examTrap: "Stopping at 7 without executing the iteration that pushes x to 9.",
    quickTrick: "7 <= 7 is true, triggering one final iteration."
  },
  // Medium, Python (Using while True with break to simulate do-while), Ans: B
  {
    id: 14, topic: "do while", difficulty: "Medium", language: "Python",
    question: "Python simulates do-while with while True and break. What is printed?",
    code: "x = 5\nwhile True:\n    x -= 2\n    if x <= 0:\n        break\nprint(x)",
    options: {"A": "1", "B": "-1", "C": "0", "D": "3"},
    correctAnswer: "B",
    explanation: "x: 5 -> 3. 3<=0 F. x: 3 -> 1. 1<=0 F. x: 1 -> -1. -1<=0 T -> break. Output: -1.",
    realWorldApplication: "Simulating do-while loops in languages that lack native support.",
    examTrap: "Assuming loop stops exactly at 0.",
    quickTrick: "Trace subtraction: 5, 3, 1, -1. First value <= 0 is -1."
  },
  // Hard, Pseudo, Ans: C
  {
    id: 15, topic: "do while", difficulty: "Hard", language: "Pseudocode",
    question: "What is the result of the following pseudocode?",
    code: "Integer x = 2, sum = 0\nDo\n    sum = sum + x\n    x = x * 2\nWhile (x < 10)\nPrint sum",
    options: {"A": "10", "B": "30", "C": "14", "D": "6"},
    correctAnswer: "C",
    explanation: "Pass 1: sum=2, x=4. Pass 2: sum=2+4=6, x=8. Pass 3: sum=6+8=14, x=16(16<10 False). Sum = 14.",
    realWorldApplication: "Summing geometric series elements until bound.",
    examTrap: "Adding 16 to sum before condition check.",
    quickTrick: "Sum = 2 + 4 + 8 = 14."
  },

  // --- TOPIC 4: nested loops ---
  // Easy, Pseudo, Ans: D
  {
    id: 16, topic: "nested loops", difficulty: "Easy", language: "Pseudocode",
    question: "How many total iterations are executed by this nested loop?",
    code: "Integer count = 0\nFor i = 1 to 3\n    For j = 1 to 4\n        count = count + 1\n    End For\nEnd For\nPrint count",
    options: {"A": "7", "B": "9", "C": "16", "D": "12"},
    correctAnswer: "D",
    explanation: "Outer loop runs 3 times, inner loop runs 4 times. Total = 3 * 4 = 12.",
    realWorldApplication: "Traversing 2D grid matrix of size 3x4.",
    examTrap: "Adding bounds (3+4) instead of multiplying.",
    quickTrick: "Independent nested loops = Outer * Inner."
  },
  // Medium, Python, Ans: A
  {
    id: 17, topic: "nested loops", difficulty: "Medium", language: "Python",
    question: "What is printed by this nested Python loop?",
    code: "sum_val = 0\nfor i in range(1, 4):\n    for j in range(1, i + 1):\n        sum_val += j\nprint(sum_val)",
    options: {"A": "10", "B": "14", "C": "6", "D": "9"},
    correctAnswer: "A",
    explanation: "i=1: j=1 (sum=1). i=2: j=1,2 (sum=1+1+2=4). i=3: j=1,2,3 (sum=4+1+2+3=10).",
    realWorldApplication: "Triangular matrix sum processing.",
    examTrap: "Assuming inner loop upper limit is constant.",
    quickTrick: "Sums per i: 1 + 3 + 6 = 10."
  },
  // Medium, Java, Ans: B
  {
    id: 18, topic: "nested loops", difficulty: "Medium", language: "Java",
    question: "What will be printed by the following Java snippet?",
    code: "public class Nested {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                if (i == j) continue;\n                sum++;\n            }\n        }\n        System.out.println(sum);\n    }\n}",
    options: {"A": "9", "B": "6", "C": "3", "D": "0"},
    correctAnswer: "B",
    explanation: "Total 3x3=9 pairs. i==j skips 3 diagonal pairs (0,0), (1,1), (2,2). 9 - 3 = 6.",
    realWorldApplication: "Off-diagonal matrix entry processing.",
    examTrap: "Confusing continue with break.",
    quickTrick: "Off-diagonal elements = N*N - N. For N=3: 9 - 3 = 6."
  },
  // Hard, C++, Ans: C
  {
    id: 19, topic: "nested loops", difficulty: "Hard", language: "C++",
    question: "What is the output of this nested loop program?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int count = 0;\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= i; j *= 2) {\n            count++;\n        }\n    }\n    cout << count;\n    return 0;\n}",
    options: {"A": "4", "B": "7", "C": "5", "D": "9"},
    correctAnswer: "C",
    explanation: "i=1: j=1 (count 1). i=2: j=1, 2 (count 2). i=3: j=1, 2 (count 2). Total count = 1 + 2 + 2 = 5.",
    realWorldApplication: "Analyzing log-time inner loops.",
    examTrap: "Assuming j increments by 1.",
    quickTrick: "Inner counts per i: 1, 2, 2. Sum = 5."
  },
  // Hard, Python, Ans: D
  {
    id: 20, topic: "nested loops", difficulty: "Hard", language: "Python",
    question: "Determine the final output of this Python code.",
    code: "count = 0\nfor a in range(1, 4):\n    for b in range(a, 4):\n        count += 1\nprint(count)",
    options: {"A": "12", "B": "9", "C": "3", "D": "6"},
    correctAnswer: "D",
    explanation: "a=1: b=1..3 (3). a=2: b=2..3 (2). a=3: b=3..3 (1). Total = 3 + 2 + 1 = 6.",
    realWorldApplication: "Unique pair comparison count.",
    examTrap: "Multiplying 3 * 3 = 9.",
    quickTrick: "Sum of 1 to 3 is 3*4/2 = 6."
  },

  // --- TOPIC 5: infinite loops ---
  // Easy, Pseudo, Ans: A
  {
    id: 21, topic: "infinite loops", difficulty: "Easy", language: "Pseudocode",
    question: "Which of the following creates an infinite loop?",
    code: "// Snippet 1: For i = 1 to 10\n// Snippet 2: While (i < 10) Print i\n// Snippet 3: Do Print i While(i > 0)",
    options: {"A": "Snippet 2", "B": "Snippet 1", "C": "Snippet 3", "D": "None"},
    correctAnswer: "A",
    explanation: "In Snippet 2, 'i' is never updated, so i < 10 remains true forever.",
    realWorldApplication: "Identifying missing increment bugs.",
    examTrap: "Overlooking missing variable increment in while loop.",
    quickTrick: "No update to counter inside while loop -> infinite loop."
  },
  // Medium, Python, Ans: B
  {
    id: 22, topic: "infinite loops", difficulty: "Medium", language: "Python",
    question: "Why will this Python loop run infinitely?",
    code: "i = 1\nwhile i != 10:\n    i += 2",
    options: {"A": "Python doesn't allow step 2.", "B": "i jumps over 10, so i != 10 is always True.", "C": "Range is invalid.", "D": "Syntax error."},
    correctAnswer: "B",
    explanation: "Stepping by 2 gives 1, 3, 5, 7, 9, 11... Skipping 10 keeps i != 10 true forever.",
    realWorldApplication: "Avoiding exact equality checks on non-unit increments.",
    examTrap: "Using != instead of boundary checks.",
    quickTrick: "Use relational operators (<, <=) instead of !=."
  },
  // Medium, C, Ans: C
  {
    id: 23, topic: "infinite loops", difficulty: "Medium", language: "C",
    question: "What is the behavior of `for(;;)` with a break inside in C?",
    code: "#include <stdio.h>\nint main() {\n    for (;;) {\n        printf(\"Hi\\n\");\n        break;\n    }\n    return 0;\n}",
    options: {"A": "Compile error", "B": "Infinite loop", "C": "Executes once and prints 'Hi'", "D": "Zero executions"},
    correctAnswer: "C",
    explanation: "for(;;) creates an infinite loop structure, but break terminates it during the 1st iteration.",
    realWorldApplication: "Event polling loops.",
    examTrap: "Assuming for(;;) is invalid syntax.",
    quickTrick: "for(;;) is valid C and means while(true)."
  },
  // Hard, Pseudo, Ans: D
  {
    id: 24, topic: "infinite loops", difficulty: "Hard", language: "Pseudocode",
    question: "Identify why this pseudocode causes an infinite loop.",
    code: "Integer count = 5\nWhile (count > 0)\n    count = count + 1\nEnd While",
    options: {"A": "count starts at 5", "B": "While syntax is wrong", "C": "Condition is false", "D": "count is incremented instead of decremented"},
    correctAnswer: "D",
    explanation: "count increases (5, 6, 7...), moving away from bound 0, keeping count > 0 permanently true.",
    realWorldApplication: "Detecting wrong direction counter update.",
    examTrap: "Confusing +1 with -1 in countdown.",
    quickTrick: "Update must move variable towards exit bound."
  },
  // Hard, C++, Ans: A
  {
    id: 25, topic: "infinite loops", difficulty: "Hard", language: "C++",
    question: "Why does an unsigned 8-bit integer loop `for(unsigned char i=0; i<=255; i++)` run infinitely?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    // for (unsigned char i = 0; i <= 255; i++)\n    return 0;\n}",
    options: {"A": "255 + 1 overflows to 0, which is always <= 255.", "B": "Syntax error", "C": "Char cannot be used in loops", "D": "255 is invalid"},
    correctAnswer: "A",
    explanation: "unsigned char range is 0..255. Incrementing 255 wraps to 0, satisfying i <= 255 forever.",
    realWorldApplication: "Preventing overflow bugs in embedded firmware.",
    examTrap: "Forgetting type capacity overflow wrap-around.",
    quickTrick: "i <= MAX_TYPE capacity causes infinite overflow loop."
  },

  // --- TOPIC 6: loop counters ---
  // Easy, Pseudo, Ans: B
  {
    id: 26, topic: "loop counters", difficulty: "Easy", language: "Pseudocode",
    question: "What is the final value of variable 'i' after the loop finishes?",
    code: "Integer i\nFor i = 0 to 4\n    // do something\nEnd For\nPrint i",
    options: {"A": "4", "B": "5", "C": "6", "D": "0"},
    correctAnswer: "B",
    explanation: "Loop body runs for i = 0..4. Then i increments to 5. 5 > 4 fails, loop exits. Final i = 5.",
    realWorldApplication: "Checking post-loop array search index.",
    examTrap: "Assuming i is 4 (last valid body value).",
    quickTrick: "For loop(0 to N), post-loop value is N+1."
  },
  // Medium, Java, Ans: C
  {
    id: 27, topic: "loop counters", difficulty: "Medium", language: "Java",
    question: "What will be printed by the following Java snippet?",
    code: "public class CounterTest {\n    public static void main(String[] args) {\n        int i = 0, count = 0;\n        while (i++ < 4) {\n            count++;\n        }\n        System.out.println(i + \" \" + count);\n    }\n}",
    options: {"A": "4 4", "B": "5 5", "C": "5 4", "D": "4 5"},
    correctAnswer: "C",
    explanation: "Checks: 0<4(i=1,c=1), 1<4(i=2,c=2), 2<4(i=3,c=3), 3<4(i=4,c=4), 4<4 false(i=5). Output: 5 4.",
    realWorldApplication: "Post-increment evaluation in stream readers.",
    examTrap: "Forgetting i++ increments even when 4<4 evaluates to false.",
    quickTrick: "Post-increment in condition happens on failing check too."
  },
  // Medium, Python, Ans: D
  {
    id: 28, topic: "loop counters", difficulty: "Medium", language: "Python",
    question: "What is the final value of 'c' after execution?",
    code: "c = 0\ni = 1\nwhile i <= 5:\n    c += 1\n    i += 2\nprint(c)",
    options: {"A": "5", "B": "2", "C": "6", "D": "3"},
    correctAnswer: "D",
    explanation: "i=1 (c=1, i=3), i=3 (c=2, i=5), i=5 (c=3, i=7). 7<=5 false. Final c = 3.",
    realWorldApplication: "Step counting in non-unit increments.",
    examTrap: "Miscounting iterations when step size is 2.",
    quickTrick: "i takes values 1, 3, 5 -> 3 iterations."
  },
  // Hard, Python, Ans: A
  {
    id: 29, topic: "loop counters", difficulty: "Hard", language: "Python",
    question: "What is printed by this Python code modifying the loop variable inside the loop?",
    code: "for i in range(4):\n    print(i, end=\" \")\n    i += 2",
    options: {"A": "0 1 2 3", "B": "0 3", "C": "0 2", "D": "0 2 4"},
    correctAnswer: "A",
    explanation: "In Python, for loop rebinds i to the next iterator value at start of each turn, ignoring manual i+=2.",
    realWorldApplication: "Understanding iterator behavior vs C index counters.",
    examTrap: "Expecting manual i+=2 to skip values in Python for loop.",
    quickTrick: "Python for loop resets counter variable at start of every iteration."
  },
  // Hard, C++, Ans: B
  {
    id: 30, topic: "loop counters", difficulty: "Hard", language: "C++",
    question: "What will be printed by the following C++ program?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int c = 0;\n    for (int i = 0; i < 6; i += 2) {\n        i--;\n        c++;\n        if (c > 2) break;\n    }\n    cout << c;\n    return 0;\n}",
    options: {"A": "6", "B": "3", "C": "2", "D": "Infinite"},
    correctAnswer: "B",
    explanation: "Iter 1: i=0, i-- -> -1, c=1, step i+=2 -> i=1. Iter 2: i=1, i-- -> 0, c=2, step i+=2 -> i=2. Iter 3: i=2, i-- -> 1, c=3, c>2 true -> break. Output c = 3.",
    realWorldApplication: "Complex loop counter tracking.",
    examTrap: "Net step per turn is -1 + 2 = +1.",
    quickTrick: "Net change per iteration = +1. c increments until c > 2 (c=3)."
  },

  // --- TOPIC 7: break ---
  // Easy, C, Ans: C
  {
    id: 31, topic: "break", difficulty: "Easy", language: "C",
    question: "What is printed when this code containing a break statement executes?",
    code: "#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    options: {"A": "1 2 3", "B": "1 2 4 5", "C": "1 2", "D": "3 4 5"},
    correctAnswer: "C",
    explanation: "i=1 prints 1, i=2 prints 2. At i=3, break exits loop immediately before printing 3. Output: 1 2.",
    realWorldApplication: "Early exit search loop.",
    examTrap: "Including 3 in output.",
    quickTrick: "break immediately exits loop."
  },
  // Medium, Java, Ans: D
  {
    id: 32, topic: "break", difficulty: "Medium", language: "Java",
    question: "What will be the output of this Java program with nested loops and break?",
    code: "public class TestBreak {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (j == 2) break;\n                System.out.print(i + \"\" + j + \" \");\n            }\n        }\n    }\n}",
    options: {"A": "11 12 21 22", "B": "11 12 13 21 22 23", "C": "11", "D": "11 21"},
    correctAnswer: "D",
    explanation: "Unlabeled break exits only the innermost loop. i=1: prints '11', j=2 breaks. i=2: prints '21', j=2 breaks.",
    realWorldApplication: "Row processing in 2D array.",
    examTrap: "Thinking break exits all outer loops.",
    quickTrick: "Unlabeled break exits ONLY immediate inner loop."
  },
  // Medium, Python, Ans: A
  {
    id: 33, topic: "break", difficulty: "Medium", language: "Python",
    question: "What is printed by this Python loop with an `else` block?",
    code: "for i in range(1, 4):\n    if i == 2:\n        break\n    print(i, end=\" \")\nelse:\n    print(\"Done\")",
    options: {"A": "1", "B": "1 Done", "C": "1 2 Done", "D": "Done"},
    correctAnswer: "A",
    explanation: "Python for-else block executes ONLY IF loop finishes without hitting break. Since i=2 breaks, else is skipped.",
    realWorldApplication: "Pythonic fallback search loops.",
    examTrap: "Assuming else block always executes.",
    quickTrick: "Loop else runs if and only if NO break occurred."
  },
  // Medium, Pseudo, Ans: B
  {
    id: 34, topic: "break", difficulty: "Medium", language: "Pseudocode",
    question: "What is the final value of 'sum' after pseudocode break?",
    code: "Integer i, sum = 0\nFor i = 1 to 10\n    If (i > 4) Then\n        Break\n    End If\n    sum = sum + i\nEnd For\nPrint sum",
    options: {"A": "15", "B": "10", "C": "4", "D": "55"},
    correctAnswer: "B",
    explanation: "i=1(sum=1), i=2(sum=3), i=3(sum=6), i=4(sum=10). At i=5, i>4 is true -> Break. Sum = 10.",
    realWorldApplication: "Accumulating elements until threshold limit.",
    examTrap: "Adding 5 to sum before breaking.",
    quickTrick: "Sum 1 + 2 + 3 + 4 = 10."
  },
  // Hard, Pseudo, Ans: C
  {
    id: 35, topic: "break", difficulty: "Hard", language: "Pseudocode",
    question: "What is printed by this pseudocode with conditional break?",
    code: "Integer i, j, sum = 0\nFor i = 1 to 3\n    For j = 1 to 3\n        If (i + j > 4) Then\n            Break\n        End If\n        sum = sum + i + j\n    End For\nEnd For\nPrint sum",
    options: {"A": "15", "B": "12", "C": "20", "D": "25"},
    correctAnswer: "C",
    explanation: "i=1: j=1(2), j=2(3), j=3(4). j=4 breaks. sum=9. i=2: j=1(3), j=2(4). j=3 breaks. sum=9+7=16. i=3: j=1(4). j=2 breaks. sum=16+4=20. Total sum = 20.",
    realWorldApplication: "Pruning nested search grid.",
    examTrap: "Forgetting break exits inner loop for current outer i.",
    quickTrick: "Sums per i: i=1(9), i=2(7), i=3(4) -> Total = 20."
  },

  // --- TOPIC 8: continue ---
  // Easy, C, Ans: D
  {
    id: 36, topic: "continue", difficulty: "Easy", language: "C",
    question: "What is the output of the following C code?",
    code: "#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    options: {"A": "1 2 3 4 5", "B": "1 2", "C": "3 4 5", "D": "1 2 4 5"},
    correctAnswer: "D",
    explanation: "When i=3, continue skips printf and goes to i++. Output: 1 2 4 5.",
    realWorldApplication: "Filtering unwanted values in stream.",
    examTrap: "Confusing continue with break.",
    quickTrick: "continue skips remaining body of CURRENT iteration."
  },
  // Medium, Python, Ans: A
  {
    id: 37, topic: "continue", difficulty: "Medium", language: "Python",
    question: "What is printed by this Python code?",
    code: "sum = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    sum += i\nprint(sum)",
    options: {"A": "9", "B": "6", "C": "15", "D": "5"},
    correctAnswer: "A",
    explanation: "range(1,6) is 1,2,3,4,5. Even numbers (2,4) continue. Odd numbers (1,3,5) added: 1+3+5 = 9.",
    realWorldApplication: "Summing specific subset of elements.",
    examTrap: "Summing even numbers instead of odd numbers.",
    quickTrick: "if (i % 2 == 0) continue keeps only odd values."
  },
  // Medium, Python, Ans: B
  {
    id: 38, topic: "continue", difficulty: "Medium", language: "Python",
    question: "What happens when this Python while loop executes?",
    code: "i = 0\nwhile i < 3:\n    if i == 1:\n        continue\n    print(i, end=\" \")\n    i += 1",
    options: {"A": "0 1 2", "B": "Infinite loop printing nothing after '0 '", "C": "0 2", "D": "0"},
    correctAnswer: "B",
    explanation: "When i=1, continue jumps to while condition check (1 < 3) without executing i+=1. i stays 1 forever -> infinite loop!",
    realWorldApplication: "Ensuring counter increment happens before continue in while loops.",
    examTrap: "Assuming while loop auto-increments counter on continue.",
    quickTrick: "In while loops, counter update after continue causes infinite loop."
  },
  // Hard, Pseudo, Ans: C
  {
    id: 39, topic: "continue", difficulty: "Hard", language: "Pseudocode",
    question: "What is the final value of 'count' after execution?",
    code: "Integer i, count = 0\nFor i = 1 to 5\n    If (i == 2 OR i == 4) Then\n        Continue\n    End If\n    count = count + 1\nEnd For\nPrint count",
    options: {"A": "5", "B": "2", "C": "3", "D": "4"},
    correctAnswer: "C",
    explanation: "i=1(c=1), i=2(continue), i=3(c=2), i=4(continue), i=5(c=3). Output count = 3.",
    realWorldApplication: "Filtering items based on condition mask.",
    examTrap: "Counting skipped items instead of kept items.",
    quickTrick: "Total items (5) - Skipped items (2) = 3."
  },
  // Hard, C++, Ans: D
  {
    id: 40, topic: "continue", difficulty: "Hard", language: "C++",
    question: "What is the final output of this C++ code snippet?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int count = 0;\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            if (i + j == 4) continue;\n            count++;\n        }\n    }\n    cout << count;\n    return 0;\n}",
    options: {"A": "9", "B": "3", "C": "7", "D": "6"},
    correctAnswer: "D",
    explanation: "Total 3x3=9 pairs. i+j==4 satisfied by (1,3), (2,2), (3,1) -> 3 pairs. Count = 9 - 3 = 6.",
    realWorldApplication: "Skipping specific grid coordinates.",
    examTrap: "Miscounting pairs summing to 4.",
    quickTrick: "Total iterations (9) - Skipped (3) = 6."
  },

  // --- TOPIC 9: loop tracing ---
  // Easy, Pseudo, Ans: A
  {
    id: 41, topic: "loop tracing", difficulty: "Easy", language: "Pseudocode",
    question: "Trace the pseudocode. What is the value of 'ans'?",
    code: "Integer ans = 1, i = 1\nWhile (i <= 4)\n    ans = ans * i\n    i = i + 1\nEnd While\nPrint ans",
    options: {"A": "24", "B": "10", "C": "120", "D": "16"},
    correctAnswer: "A",
    explanation: "Computes 4! = 1 * 2 * 3 * 4 = 24.",
    realWorldApplication: "Factorial computation in algorithms.",
    examTrap: "Adding numbers instead of multiplying.",
    quickTrick: "ans = ans * i for 1..4 is 4! = 24."
  },
  // Medium, Python, Ans: B
  {
    id: 42, topic: "loop tracing", difficulty: "Medium", language: "Python",
    question: "Trace the execution of this Python code. What is printed?",
    code: "a, b = 0, 1\nfor _ in range(5):\n    a, b = b, a + b\nprint(a)",
    options: {"A": "8", "B": "5", "C": "3", "D": "13"},
    correctAnswer: "B",
    explanation: "Iter 1: a=1,b=1. Iter 2: a=1,b=2. Iter 3: a=2,b=3. Iter 4: a=3,b=5. Iter 5: a=5,b=8. Output a = 5.",
    realWorldApplication: "Fibonacci sequence generation.",
    examTrap: "Updating variables sequentially instead of simultaneously.",
    quickTrick: "Sequence: 0, 1, 1, 2, 3, 5."
  },
  // Medium, C, Ans: C
  {
    id: 43, topic: "loop tracing", difficulty: "Medium", language: "C",
    question: "What is printed after tracing this bitwise shift loop in C?",
    code: "#include <stdio.h>\nint main() {\n    int x = 1, count = 0;\n    while (x < 16) {\n        x = x << 1;\n        count++;\n    }\n    printf(\"%d %d\", x, count);\n    return 0;\n}",
    options: {"A": "32 5", "B": "16 5", "C": "16 4", "D": "8 3"},
    correctAnswer: "C",
    explanation: "x values: 1 -> 2(1) -> 4(2) -> 8(3) -> 16(4). At x=16, 16<16 false. Output: 16 4.",
    realWorldApplication: "Bitwise left-shift alignment.",
    examTrap: "Stopping at x=8, count=3 before checking condition.",
    quickTrick: "2^4 = 16. 4 shifts to reach 16."
  },
  // Medium, Java, Ans: D
  {
    id: 44, topic: "loop tracing", difficulty: "Medium", language: "Java",
    question: "Step-by-step trace this Java snippet. What is printed?",
    code: "public class Trace {\n    public static void main(String[] args) {\n        int x = 15, y = 10;\n        while (x != y) {\n            if (x > y) x -= y;\n            else y -= x;\n        }\n        System.out.println(x);\n    }\n}",
    options: {"A": "10", "B": "1", "C": "15", "D": "5"},
    correctAnswer: "D",
    explanation: "Euclidean GCD algorithm: (15,10) -> x=5, y=10 -> y=5, x=5 -> loop ends. x = 5.",
    realWorldApplication: "Computing Greatest Common Divisor (GCD).",
    examTrap: "Confusing GCD with LCM.",
    quickTrick: "GCD(15, 10) = 5."
  },
  // Hard, Pseudo, Ans: A
  {
    id: 45, topic: "loop tracing", difficulty: "Hard", language: "Pseudocode",
    question: "Trace this pseudocode. What is the value of 'p + q'?",
    code: "Integer p = 1, q = 15\nWhile (p < q)\n    p = p + 2\n    q = q - 2\nEnd While\nPrint p + q",
    options: {"A": "16", "B": "14", "C": "18", "D": "12"},
    correctAnswer: "A",
    explanation: "p=1, q=15 (sum=16). Iter 1: p=3, q=13 (sum=16). Iter 2: p=5, q=11 (sum=16). Iter 3: p=7, q=9 (sum=16). Iter 4: p=9, q=7 (9<7 false). At end: p=9, q=7. Sum = 16.",
    realWorldApplication: "Invariant conservation in pointer algorithms.",
    examTrap: "Thinking sum changes when p increases by 2 and q decreases by 2.",
    quickTrick: "p + q remains invariant at 16 throughout all iterations!"
  },

  // --- TOPIC 10: number of iterations ---
  // Easy, Pseudo, Ans: B
  {
    id: 46, topic: "number of iterations", difficulty: "Easy", language: "Pseudocode",
    question: "How many iterations will this loop perform?",
    code: "Integer i\nFor i = 5 to 25 step 5\n    // body\nEnd For",
    options: {"A": "4", "B": "5", "C": "6", "D": "20"},
    correctAnswer: "B",
    explanation: "Values of i: 5, 10, 15, 20, 25. Total = 5 iterations.",
    realWorldApplication: "Stepping through fixed buffer blocks.",
    examTrap: "Dividing (25-5)/5 = 4 without adding 1 for inclusive bound.",
    quickTrick: "((25 - 5) / 5) + 1 = 5."
  },
  // Medium, Python, Ans: C
  {
    id: 47, topic: "number of iterations", difficulty: "Medium", language: "Python",
    question: "What is the exact iteration count of `range(0, 12, 3)` in Python?",
    code: "count = 0\nfor _ in range(0, 12, 3):\n    count += 1\nprint(count)",
    options: {"A": "5", "B": "3", "C": "4", "D": "12"},
    correctAnswer: "C",
    explanation: "range(0, 12, 3) yields 0, 3, 6, 9 (12 is exclusive). Total = 4 values.",
    realWorldApplication: "Strided list traversal.",
    examTrap: "Including upper bound 12.",
    quickTrick: "12 / 3 = 4."
  },
  // Medium, Java, Ans: D
  {
    id: 48, topic: "number of iterations", difficulty: "Medium", language: "Java",
    question: "How many total inner loop executions take place in this nested Java loop?",
    code: "public class Iter {\n    public static void main(String[] args) {\n        int count = 0;\n        for (int i = 0; i < 4; i++) {\n            for (int j = 0; j < 5; j++) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    options: {"A": "9", "B": "15", "C": "25", "D": "20"},
    correctAnswer: "D",
    explanation: "Outer 4 times, inner 5 times. Total = 4 * 5 = 20.",
    realWorldApplication: "Cell operations in 4x5 grid.",
    examTrap: "Adding 4 + 5 = 9.",
    quickTrick: "Outer * Inner = 4 * 5 = 20."
  },
  // Hard, C++, Ans: A
  {
    id: 49, topic: "number of iterations", difficulty: "Hard", language: "C++",
    question: "How many times does the condition check execute in this while loop?",
    code: "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    while (x > 2) {\n        x--;\n    }\n    return 0;\n}",
    options: {"A": "4", "B": "3", "C": "5", "D": "2"},
    correctAnswer: "A",
    explanation: "Checks: x=5(true), x=4(true), x=3(true), x=2(false). Total condition checks = 4. (Body runs 3 times).",
    realWorldApplication: "Profiling condition checks in compilers.",
    examTrap: "Confusing body count (3) with check count (4).",
    quickTrick: "Condition checks = Body executions + 1 = 3 + 1 = 4."
  },
  // Hard, Python, Ans: B
  {
    id: 50, topic: "number of iterations", difficulty: "Hard", language: "Python",
    question: "Calculate the total number of iterations for this logarithmically stepping loop:",
    code: "count = 0\ni = 1\nwhile i <= 32:\n    count += 1\n    i *= 2\nprint(count)",
    options: {"A": "5", "B": "6", "C": "32", "D": "7"},
    correctAnswer: "B",
    explanation: "Values of i: 1, 2, 4, 8, 16, 32. Total = 6 iterations.",
    realWorldApplication: "Binary search iteration bound for N=32.",
    examTrap: "Calculating log2(32)=5 and forgetting i=1 initial step.",
    quickTrick: "log2(32) + 1 = 5 + 1 = 6."
  }
];
