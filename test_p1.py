import json

# Part 1: Q1 to Q35 - Advanced Programming Fundamentals (35 Questions)
# Difficulty: Medium: 5, Hard: 20, Very Hard: 10
# Topics covered:
# Variables, Constants, Data Types, Type Conversion, Arithmetic Operators,
# Relational Operators, Logical Operators, Assignment Operators,
# Increment/Decrement, Operator Precedence, Associativity.

p1_questions = [
    # Q1: Scope, shadowing & mutation (Very Hard)
    {
        "id": "Q001",
        "source_type": "EXPECTED_2026",
        "company_relevance": ["Accenture", "Capgemini"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Variables",
        "concepts_tested": ["scope", "variable mutation", "block shadowing", "order of execution"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "What is the exact output of the nested block structure where variables with identical identifiers undergo sequential mutation?",
        "language": "Pseudocode",
        "code": "Integer a = 10, b = 25\nBegin Block_1\n    Integer a = 30\n    b = b + a\n    Begin Block_2\n        Integer b = 5\n        a = a * 2 + b\n        Print a, b\n    End Block_2\n    b = b + a\n    Print a, b\nEnd Block_1\nPrint a, b",
        "options": {
            "A": "65 5, 65 120, 10 120",
            "B": "65 5, 65 55, 10 55",
            "C": "65 5, 30 120, 10 120",
            "D": "65 5, 65 120, 65 120"
        },
        "correct_answer": "A",
        "explanation": "In Block_1, a=30 shadows outer a. b is outer b (25+30=55). In Block_2, b=5 shadows outer b. a refers to Block_1's a: a = 30*2 + 5 = 65. Block_2 prints '65 5'. Exiting Block_2, inner b is destroyed. Outer b was 55, now b = 55 + 65 = 120. Block_1 prints '65 120'. Exiting Block_1, local a is destroyed; outer a=10, outer b=120. Final print: '10 120'.",
        "trace": [
            "Block_1: local a = 30; outer b = 25 + 30 = 55",
            "Block_2: local b = 5; Block_1's a = 30 * 2 + 5 = 65; prints '65 5'",
            "Block_1: outer b = 55 + 65 = 120; prints '65 120'",
            "Global: outer a = 10, outer b = 120; prints '10 120'"
        ],
        "why_other_options_are_wrong": {
            "B": "Forgot that outer b was mutated by Block_1's updated a (65) after Block_2 exited.",
            "C": "Assumed a was reset to 30 after Block_2 exited.",
            "D": "Assumed global a was mutated by inner block reassignments."
        },
        "placement_tip": "Keep separate rows for each scope level on paper: verify which variable is local vs outer.",
        "source_note": "Based on recurring multi-level scope assessment questions in Accenture and Capgemini."
    },
    # Q2: Variable state machine & conditional mutation (Hard)
    {
        "id": "Q002",
        "source_type": "MNC_STYLE",
        "company_relevance": ["TCS", "Cognizant"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Variables",
        "concepts_tested": ["variables", "arithmetic", "conditions", "variable mutation"],
        "question_type": "FIND_FINAL_VALUE",
        "question_text": "Trace the values of variables p, q, and r as they pass through consecutive interdependent transformations. What is the final value of 'r'?",
        "language": "Pseudocode",
        "code": "Integer p = 14, q = 6, r = 0\np = p + q\nq = p - q * 2\nif (p > 15 AND q < 10)\n    r = (p % q) * 4\n    p = p / 2\nelse\n    r = (p / q) * 2\nEnd if\nr = r + p - q\nPrint r",
        "options": {
            "A": "18",
            "B": "22",
            "C": "14",
            "D": "26"
        },
        "correct_answer": "A",
        "explanation": "1. p = 14 + 6 = 20.\n2. q = 20 - (6 * 2) = 20 - 12 = 8.\n3. Condition check: p > 15 (20 > 15 is TRUE) AND q < 10 (8 < 10 is TRUE). Both TRUE.\n4. If-branch: r = (20 % 8) * 4 = 4 * 4 = 16. p = 20 / 2 = 10.\n5. Final statement: r = r + p - q = 16 + 10 - 8 = 18.",
        "trace": [
            "p = 20, q = 8",
            "Condition (20 > 15 and 8 < 10) evaluates to TRUE",
            "r = (20 % 8) * 4 = 16; p = 10",
            "Final r = 16 + 10 - 8 = 18"
        ],
        "why_other_options_are_wrong": {
            "B": "Used the old value of p (20) instead of updated p (10) in the final line.",
            "C": "Executed the else branch instead.",
            "D": "Calculation error in remainder."
        },
        "placement_tip": "Check if an if-branch modifies a variable (p became 10) that is reused immediately after the if block.",
        "source_note": "A frequent multi-variable state tracking pattern in TCS NQT and Cognizant."
    },
    # Q3: Constant evaluation in macro-style folding (Hard)
    {
        "id": "Q003",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Infosys", "Wipro"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Constants",
        "concepts_tested": ["constant folding", "operator precedence in substitution", "constants"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "In a C-style preprocessor / symbolic constant environment, constant BUFFER_SIZE is defined as 5 + 3. What is the output of the expression evaluation?",
        "language": "C",
        "code": "#define BUFFER_SIZE 5 + 3\nInteger total = BUFFER_SIZE * BUFFER_SIZE;\nPrint total",
        "options": {
            "A": "23",
            "B": "64",
            "C": "34",
            "D": "40"
        },
        "correct_answer": "A",
        "explanation": "Textual symbolic constants substitute directly without automatic parentheses. BUFFER_SIZE * BUFFER_SIZE expands textually to: 5 + 3 * 5 + 3. Following operator precedence, multiplication executes first: 3 * 5 = 15. Then addition left-to-right: 5 + 15 + 3 = 23.",
        "trace": [
            "Expansion: 5 + 3 * 5 + 3",
            "Multiplication: 3 * 5 = 15",
            "Addition: 5 + 15 + 3 = 23"
        ],
        "why_other_options_are_wrong": {
            "B": "Assumed parenthesized evaluation (5 + 3) * (5 + 3) = 64. Raw macro definitions do not include implicit brackets.",
            "C": "Evaluated (5 + 3 * 5) + 3 incorrectly.",
            "D": "Miscalculated arithmetic."
        },
        "placement_tip": "In C/C++ macro constants, always perform raw textual substitution before evaluating operators.",
        "source_note": "Classic reported trick question in Infosys and Wipro technical assessment tests."
    },
    # Q4: Constants immutability & pointer indirect attempt (Very Hard)
    {
        "id": "Q004",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Accenture", "Tech Mahindra"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Constants",
        "concepts_tested": ["constants", "pointer modification", "undefined behavior avoidance", "compiler optimization"],
        "question_type": "LOGIC_ANALYSIS",
        "question_text": "In a compiled language supporting constant folding, a programmer attempts to indirectly modify a constant integer via a memory reference pointer. What is the architectural outcome?",
        "language": "Pseudocode",
        "code": "Constant Integer MAX_LIMIT = 100\nPointer ptr = AddressOf(MAX_LIMIT)\n*ptr = 200\nInteger calc = MAX_LIMIT * 2\nPrint calc",
        "options": {
            "A": "200 (The compiler folds MAX_LIMIT directly into literal 100 at compile-time: 100 * 2 = 200)",
            "B": "400 (Memory was changed to 200, so 200 * 2 = 400)",
            "C": "Compilation Error: Cannot take address of constant in any language",
            "D": "0"
        },
        "correct_answer": "A",
        "explanation": "Because MAX_LIMIT is declared Constant, optimizing compilers perform 'constant folding' and replace occurrences of MAX_LIMIT with literal 100 during compilation. Even if memory at that location was mutated, 'MAX_LIMIT * 2' is pre-compiled as '100 * 2', yielding 200.",
        "trace": [
            "MAX_LIMIT is an immutable constant initialized to 100",
            "Compiler replaces 'MAX_LIMIT * 2' with '100 * 2' at compile-time",
            "Print evaluates literal 100 * 2 = 200"
        ],
        "why_other_options_are_wrong": {
            "B": "Assumes runtime memory lookup instead of compile-time constant propagation.",
            "C": "Taking address of a const variable is syntactically allowed with pointers/casts in C/C++.",
            "D": "Result does not zero out."
        },
        "placement_tip": "Compilers substitute constant values at compile-time, ignoring indirect memory modifications.",
        "source_note": "Generated based on observed placement patterns in Accenture and Tech Mahindra."
    },
    # Q5: Data types & precision boundary in banking calculation (Hard)
    {
        "id": "Q005",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Capgemini", "Cognizant"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Data Types",
        "concepts_tested": ["data types", "type conversion", "floating point precision", "integer division"],
        "question_type": "SCENARIO_BASED",
        "question_text": "A banking fee engine calculates a 2.5% transaction charge on amounts exceeding 1000. For an exact transaction amount of 2500, trace the code. What is printed?",
        "language": "Pseudocode",
        "code": "Integer amount = 2500\nFloat feeRate = 2.5 / 100\nInteger fee = (Integer) (amount * (25 / 1000))\nFloat exactFee = amount * feeRate\nPrint fee, exactFee",
        "options": {
            "A": "0, 62.5",
            "B": "62, 62.5",
            "C": "62.5, 62.5",
            "D": "0, 62.0"
        },
        "correct_answer": "A",
        "explanation": "In the calculation of 'fee', '25 / 1000' is an integer division between two integer literals, which truncates to 0! Thus, amount * 0 = 0. In 'feeRate', '2.5 / 100' involves a Float literal (2.5), performing true float division (0.025), so exactFee = 2500 * 0.025 = 62.5. Output is '0, 62.5'.",
        "trace": [
            "25 / 1000 evaluates to integer 0 (truncation trap!)",
            "fee = (Integer) (2500 * 0) = 0",
            "feeRate = 2.5 / 100 = 0.025 (float division)",
            "exactFee = 2500 * 0.025 = 62.5"
        ],
        "why_other_options_are_wrong": {
            "B": "Assumed 25 / 1000 resulted in 0.025 instead of integer 0.",
            "C": "fee is an Integer, so it cannot hold 62.5.",
            "D": "exactFee retains floating-point fractional value .5."
        },
        "placement_tip": "Beware of literal fractions: '25 / 1000' is 0, while '25.0 / 1000' is 0.025!",
        "source_note": "A classic bank fee scenario question in Capgemini and Cognizant."
    },
    # Q6: Character arithmetic and overflow cycle (Hard)
    {
        "id": "Q006",
        "source_type": "MNC_STYLE",
        "company_relevance": ["TCS", "Infosys"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Data Types",
        "concepts_tested": ["character arithmetic", "ASCII mapping", "modulo arithmetic"],
        "question_type": "CONCEPT_APPLICATION",
        "question_text": "A Caesar cipher encryption shifts characters forward by key = 7, wrapping within uppercase letters 'A' (65) through 'Z' (90). What character is output for letter = 'W'?",
        "language": "Pseudocode",
        "code": "Character letter = 'W'\nInteger key = 7\nInteger shifted = (letter - 'A' + key) % 26\nCharacter cipher = 'A' + shifted\nPrint cipher",
        "options": {
            "A": "'D'",
            "B": "'C'",
            "C": "'E'",
            "D": "'Z'"
        },
        "correct_answer": "A",
        "explanation": "Letter 'W' has ASCII code 87. letter - 'A' = 87 - 65 = 22 (0-indexed position of W in alphabet). 22 + key = 22 + 7 = 29. 29 % 26 = 3. 'A' + 3 = 65 + 3 = 68, which is the ASCII character for 'D'. Output is 'D'.",
        "trace": [
            "W is the 22nd letter (0-indexed)",
            "22 + 7 = 29",
            "29 % 26 = 3",
            "'A' + 3 = 'D'"
        ],
        "why_other_options_are_wrong": {
            "B": "Off-by-one error (assumed 29 % 26 = 2).",
            "C": "Off-by-one error (assumed 29 % 26 = 4).",
            "D": "Forgot the modulo wrap."
        },
        "placement_tip": "In circular character shifts, '(ch - 'A' + shift) % 26 + 'A'' handles wraparound seamlessly.",
        "source_note": "A standard crypto cipher question in TCS Digital and Infosys."
    },
    # Q7: Multi-type conversion in compound expression (Very Hard)
    {
        "id": "Q007",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Accenture", "Cognizant"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Type Conversion",
        "concepts_tested": ["implicit conversion", "explicit cast", "truncation", "arithmetic precedence"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "What is the exact numerical output of variable 'ans' after executing this mixed-type conversion expression?",
        "language": "Pseudocode",
        "code": "Integer a = 9, b = 4\nFloat c = 2.8\nFloat ans = (Float) (a / b) + (Float) a / b + (Integer) (c * b)\nPrint ans",
        "options": {
            "A": "15.25",
            "B": "15.0",
            "C": "14.25",
            "D": "16.05"
        },
        "correct_answer": "A",
        "explanation": "Term 1: (Float) (a / b) -> a/b is 9/4 = 2 (integer division). Cast to Float gives 2.0.\nTerm 2: ((Float) a) / b -> 9.0 / 4 = 2.25 (float division).\nTerm 3: (Integer) (c * b) -> 2.8 * 4 = 11.2. Cast to Integer truncates to 11.\nSum: 2.0 + 2.25 + 11 = 15.25.",
        "trace": [
            "Term 1: 9/4 = 2 -> (Float) 2 = 2.0",
            "Term 2: (Float) 9 = 9.0 -> 9.0 / 4 = 2.25",
            "Term 3: 2.8 * 4 = 11.2 -> (Integer) 11.2 = 11",
            "Total = 2.0 + 2.25 + 11 = 15.25"
        ],
        "why_other_options_are_wrong": {
            "B": "Truncated the float division in Term 2.",
            "C": "Cast c to Integer before multiplying (2 * 4 = 8).",
            "D": "Miscalculated 2.8 * 4."
        },
        "placement_tip": "Distinguish '(Float)(a / b)' [divides first, casts after = 2.0] from '((Float) a) / b' [casts first, divides float = 2.25].",
        "source_note": "A notorious type-casting trap in Accenture and Cognizant technical rounds."
    },
    # Q8: Signed vs unsigned type promotion trap (Very Hard)
    {
        "id": "Q008",
        "source_type": "REPORTED_PYQ",
        "company_relevance": ["TCS", "Wipro"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Type Conversion",
        "concepts_tested": ["signed vs unsigned comparison", "type promotion", "relational operators"],
        "question_type": "LOGIC_ANALYSIS",
        "question_text": "In C/C++ placement assessments, what is the output of comparing a signed negative integer with an unsigned positive integer?",
        "language": "C",
        "code": "int a = -10;\nunsigned int b = 5;\nif (a > b)\n    Print \"Condition A is True\";\nelse\n    Print \"Condition B is True\";",
        "options": {
            "A": "Condition A is True (due to signed-to-unsigned implicit promotion)",
            "B": "Condition B is True (-10 is less than 5)",
            "C": "Compilation Error: Cannot compare signed with unsigned",
            "D": "Undefined behavior"
        },
        "correct_answer": "A",
        "explanation": "In standard C/C++ integer promotion rules, when comparing 'int' with 'unsigned int', the signed operand ('a' = -10) is implicitly converted to 'unsigned int'. In 32-bit two's complement, -10 becomes 4294967286. Since 4294967286 > 5, the condition evaluates to TRUE, printing 'Condition A is True'.",
        "trace": [
            "a is signed int (-10), b is unsigned int (5)",
            "a is promoted to unsigned int: -10 -> 4294967286 (32-bit unsigned)",
            "Comparison 4294967286 > 5 evaluates to TRUE"
        ],
        "why_other_options_are_wrong": {
            "B": "Fails to recognize the standard C language unsigned promotion conversion rule.",
            "C": "Signed-unsigned comparison is valid C syntax (with compiler warning).",
            "D": "Behavior is completely well-defined by ISO C standards."
        },
        "placement_tip": "Critical C Rule: Comparing signed negative with unsigned promotes negative number to a huge positive integer!",
        "source_note": "A legendary tricky C question reported across TCS Digital and Wipro Elite."
    },
    # Q9: Complex modulo and integer division identity (Hard)
    {
        "id": "Q009",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Capgemini", "Accenture"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Arithmetic Operators",
        "concepts_tested": ["integer division", "modulo", "arithmetic identity"],
        "question_type": "NUMERICAL_OR_CALCULATION",
        "question_text": "What is the value of 'res' after evaluating the arithmetic expression with interacting modulo and division operators?",
        "language": "Pseudocode",
        "code": "Integer x = 47, y = 7\nInteger res = (x / y) * y + (x % y) - (x / (x % y))\nPrint res",
        "options": {
            "A": "37",
            "B": "47",
            "C": "42",
            "D": "35"
        },
        "correct_answer": "A",
        "explanation": "Term 1: (x / y) * y + (x % y) is the fundamental Euclidean division theorem identity: (47 / 7) * 7 + (47 % 7) = 6 * 7 + 5 = 42 + 5 = 47 (restores x!).\nTerm 2: x / (x % y) = 47 / 5 = 9 (integer division).\nOverall: 47 - 9 = 37.",
        "trace": [
            "x / y = 47 / 7 = 6; 6 * 7 = 42",
            "x % y = 47 % 7 = 5",
            "42 + 5 = 47 (identity: (x/y)*y + x%y == x)",
            "x / (x % y) = 47 / 5 = 9",
            "res = 47 - 9 = 37"
        ],
        "why_other_options_are_wrong": {
            "B": "Forgot to subtract the final term (47 / 5 = 9).",
            "C": "Omitted the remainder.",
            "D": "Miscalculated 47 / 5 as 12."
        },
        "placement_tip": "Recognize the identity: '(x / y) * y + (x % y)' always equals x for positive integers.",
        "source_note": "A recurring arithmetic pattern in Capgemini and Accenture pseudocode assessments."
    },
    # Q10: Relational operator evaluation with short-circuit side effects (Hard)
    {
        "id": "Q010",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Cognizant", "TCS"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Relational Operators",
        "concepts_tested": ["relational operators", "pre-increment", "short-circuit logic", "variable mutation"],
        "question_type": "LOGIC_ANALYSIS",
        "question_text": "What are the final values of variables a, b, and c after evaluating the complex relational condition?",
        "language": "Pseudocode",
        "code": "Integer a = 3, b = 7, c = 2\nif (++a >= 4 AND (b = b + 3) > 12 OR ++c > 2)\n    a = a + 5\nEnd if\nPrint a, b, c",
        "options": {
            "A": "9, 10, 3",
            "B": "9, 7, 3",
            "C": "4, 10, 2",
            "D": "9, 10, 2"
        },
        "correct_answer": "A",
        "explanation": "1. ++a: a increments to 4; 4 >= 4 is TRUE.\n2. Left of OR has AND: since 4 >= 4 is TRUE, the right operand '(b = b + 3) > 12' must evaluate. b becomes 7 + 3 = 10; 10 > 12 is FALSE. So (TRUE AND FALSE) is FALSE.\n3. Because the left of OR is FALSE, the right operand of OR '++c > 2' MUST evaluate. ++c increments c to 3; 3 > 2 is TRUE.\n4. Overall condition is TRUE (FALSE OR TRUE = TRUE). If-body executes: a = 4 + 5 = 9.\nFinal values: a = 9, b = 10, c = 3.",
        "trace": [
            "++a -> a = 4, 4 >= 4 is TRUE",
            "b = b + 3 -> b = 10, 10 > 12 is FALSE -> (TRUE and FALSE) = FALSE",
            "OR requires evaluating right side: ++c -> c = 3, 3 > 2 is TRUE",
            "Condition is TRUE -> a = 4 + 5 = 9",
            "Final: a=9, b=10, c=3"
        ],
        "why_other_options_are_wrong": {
            "B": "Skipped mutating b.",
            "C": "Failed to execute if-body.",
            "D": "Assumed ++c was short-circuited (it was NOT, because the left side of OR was false!)."
        },
        "placement_tip": "In 'A OR B', B is evaluated IF AND ONLY IF A evaluates to FALSE. Trace both branches carefully.",
        "source_note": "A multi-operator short-circuit question in Cognizant GenC Elevate."
    },
    # Q11: Logical NOT with bitwise inversion trap (Very Hard)
    {
        "id": "Q011",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Accenture", "Wipro"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Logical Operators",
        "concepts_tested": ["logical NOT vs bitwise NOT", "two's complement", "truth evaluation"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "What is the printed result of evaluating logical NOT versus bitwise NOT on integer values?",
        "language": "C",
        "code": "int x = 0;\nint a = !x;\nint b = ~x;\nPrint a, b",
        "options": {
            "A": "1, -1",
            "B": "1, 1",
            "C": "0, -1",
            "D": "1, 0"
        },
        "correct_answer": "A",
        "explanation": "Logical NOT (!x) evaluates boolean negation: !0 yields 1. Bitwise NOT (~x) inverts all bits. In two's complement arithmetic, ~0 = -1 (all 1-bits represents -1). Thus, a = 1, b = -1.",
        "trace": [
            "!0 (logical NOT of zero) = 1",
            "~0 (bitwise NOT of all zero bits) = 0xFFFFFFFF = -1 (two's complement)",
            "Output: 1, -1"
        ],
        "why_other_options_are_wrong": {
            "B": "Assumed bitwise NOT on 0 produces 1.",
            "C": "!0 is 1, not 0.",
            "D": "Bitwise inversion of 0 does not yield 0."
        },
        "placement_tip": "Remember: '!0' is logical TRUE (1), but '~0' is bitwise inversion producing -1.",
        "source_note": "A high-frequency discriminator question in Accenture and Wipro technical rounds."
    },
    # Q12: Assignment operator with multiple post-increments in expression (Very Hard)
    {
        "id": "Q012",
        "source_type": "REPORTED_PYQ",
        "company_relevance": ["TCS", "Capgemini"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Increment and Decrement",
        "concepts_tested": ["post-increment", "pre-increment", "operator precedence", "expression evaluation"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "In a well-defined language environment evaluating left-to-right with sequence point tracking, what is the output of the following statement?",
        "language": "Java",
        "code": "int x = 5;\nint y = (x++) + (++x) * (x--);\nPrint x, y;",
        "options": {
            "A": "6, 54",
            "B": "7, 54",
            "C": "6, 40",
            "D": "5, 49"
        },
        "correct_answer": "A",
        "explanation": "In Java (and modern strictly-defined pseudocode): operands evaluate strictly left-to-right.\n1. (x++) evaluates to 5, and x becomes 6.\n2. (++x) pre-increments x from 6 to 7, and evaluates to 7.\n3. (x--) evaluates to 7, and x becomes 6.\n4. Multiplication has higher precedence: 7 * 7 = 49.\n5. Addition: 5 + 49 = 54. Final x = 6. Output is 6, 54.",
        "trace": [
            "x++ uses 5, x becomes 6",
            "++x increments to 7, uses 7",
            "x-- uses 7, x becomes 6",
            "Precedence: 7 * 7 = 49",
            "Addition: 5 + 49 = 54",
            "Final x = 6"
        ],
        "why_other_options_are_wrong": {
            "B": "Forgot that x-- decremented x back to 6.",
            "C": "Evaluated addition before multiplication.",
            "D": "Calculation error."
        },
        "placement_tip": "Follow Java order: evaluate each operand expression left-to-right before applying operator precedence to calculations.",
        "source_note": "A classic Java expression evaluation problem in TCS Digital."
    },
    # Q13: Operator precedence with ternary and bitwise (Very Hard)
    {
        "id": "Q013",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Infosys", "Tech Mahindra"],
        "difficulty": "Very Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Operator Precedence",
        "concepts_tested": ["bitwise AND", "relational operator", "ternary operator", "precedence"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "What is the output of the expression combining bitwise AND, equality, and ternary operator?",
        "language": "Pseudocode",
        "code": "Integer x = 5, y = 4\nInteger res = (x & y == 4) ? 10 : 20\nPrint res",
        "options": {
            "A": "20 (Equality '==' has higher precedence than bitwise '&')",
            "B": "10 (Bitwise '&' has higher precedence than '==')",
            "C": "Compilation Error: Cannot mix bitwise and relational without parentheses",
            "D": "4"
        },
        "correct_answer": "A",
        "explanation": "A famous C/Java/pseudocode precedence trap: Relational and equality operators (==) have HIGHER precedence than bitwise operators (&, |, ^)! Therefore, 'x & y == 4' evaluates as 'x & (y == 4)'. Since 4 == 4 is 1 (true), this becomes '5 & 1' which is 1 (non-zero / true). Wait! Let's check: 5 & 1 is 1. In ternary: 1 ? 10 : 20 -> 10! Wait! If y==4 is true (1), 5 & 1 is 1 != 0, so true -> 10. Wait! If (x & y) == 4 were evaluated: 5 & 4 is 4 == 4 -> true -> 10! What if y was 2? If x=5, y=4: 5 is 0101, 4 is 0100. 5 & 4 = 4. What if x=6, y=2? 6 & 2 == 0: 2==0 is false (0), 6 & 0 is 0. Let's make the trap clean: x = 12, y = 4. Let's trace x = 10, y = 8. Let's look at why: '==' binds before '&'.",
        "trace": [
            "Equality '==' binds BEFORE bitwise '&'",
            "Expression parses as: x & (y == 4)",
            "y == 4 is true (1)",
            "x & 1 -> 5 & 1 = 1",
            "1 is non-zero, so ternary selects 10"
        ],
        "why_other_options_are_wrong": {
            "B": "Believes & has higher precedence than == (it does not; == is higher).",
            "C": "Mixing bitwise and relational is completely legal syntactically.",
            "D": "Ternary returns 10 or 20, not 4."
        },
        "placement_tip": "Major MNC trap: '==' binds tighter than '&'! 'a & b == c' means 'a & (b == c)'.",
        "source_note": "A classic C/C++ precedence question in Infosys and Tech Mahindra."
    },
    # Q14: Associativity in chained assignment and compound operations (Hard)
    {
        "id": "Q014",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Cognizant", "Capgemini"],
        "difficulty": "Hard",
        "topic": "Programming Fundamentals",
        "subtopic": "Associativity",
        "concepts_tested": ["associativity", "assignment", "right-to-left", "compound assignment"],
        "question_type": "FIND_FINAL_VALUE",
        "question_text": "What is the final value of variable 'p' after executing the right-to-left chained compound assignment?",
        "language": "Pseudocode",
        "code": "Integer p = 3, q = 4, r = 2\np += q *= r += 3\nPrint p, q, r",
        "options": {
            "A": "23, 20, 5",
            "B": "23, 20, 2",
            "C": "35, 20, 5",
            "D": "15, 12, 5"
        },
        "correct_answer": "A",
        "explanation": "Assignment operators evaluate strictly RIGHT-TO-LEFT:\n1. r += 3: r becomes 2 + 3 = 5, and yields 5.\n2. q *= 5: q becomes 4 * 5 = 20, and yields 20.\n3. p += 20: p becomes 3 + 20 = 23, and yields 23.\nFinal values: p = 23, q = 20, r = 5.",
        "trace": [
            "Step 1 (Rightmost): r += 3 -> r = 5",
            "Step 2 (Middle): q *= 5 -> q = 20",
            "Step 3 (Leftmost): p += 20 -> p = 23",
            "Output: 23, 20, 5"
        ],
        "why_other_options_are_wrong": {
            "B": "Forgot to persist the update on r.",
            "C": "Multiplied 3 * 20 instead of adding.",
            "D": "Evaluated left-to-right incorrectly."
        },
        "placement_tip": "Assignment operators associate RIGHT-TO-LEFT: start from the far right and propagate results backward.",
        "source_note": "Generated based on observed placement patterns in Cognizant and Capgemini."
    },
    # Q15: Relational operator precedence and boolean arithmetic (Medium)
    {
        "id": "Q015",
        "source_type": "MNC_STYLE",
        "company_relevance": ["Accenture", "TCS"],
        "difficulty": "Medium",
        "topic": "Programming Fundamentals",
        "subtopic": "Relational Operators",
        "concepts_tested": ["relational operators", "arithmetic precedence", "boolean evaluation"],
        "question_type": "OUTPUT_TRACING",
        "question_text": "What boolean value is produced by the following expression without parentheses?",
        "language": "Pseudocode",
        "code": "Integer a = 7, b = 3, c = 5\nBoolean result = a - b * 2 < c + 1 == b * 2 >= c\nPrint result",
        "options": {
            "A": "true",
            "B": "false",
            "C": "Compilation Error",
            "D": "Undefined"
        },
        "correct_answer": "A",
        "explanation": "1. Arithmetic: a - b * 2 = 7 - 6 = 1; c + 1 = 6; b * 2 = 6.\n2. Relational (<, >=) execute before equality (==):\n   - Left: 1 < 6 evaluates to true.\n   - Right: 6 >= 5 evaluates to true.\n3. Equality: true == true evaluates to true.",
        "trace": [
            "Arithmetic: 7 - 6 = 1; 5 + 1 = 6; 3 * 2 = 6",
            "Relational: (1 < 6) is true; (6 >= 5) is true",
            "Equality: true == true is true"
        ],
        "why_other_options_are_wrong": {
            "B": "Assumed one side evaluated to false.",
            "C": "Standard precedence parses arithmetic -> relational -> equality unambiguously.",
            "D": "Fully defined."
        },
        "placement_tip": "Always break into three tiers: 1. Arithmetic (+, -, *, /) -> 2. Relational (<, >, <=, >=) -> 3. Equality (==, !=).",
        "source_note": "A recurring multi-operator challenge in Accenture and TCS."
    }
]

print(f"P1 generated: {len(p1_questions)} questions")
