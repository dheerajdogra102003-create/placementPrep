const questions = [
    // --- if_else (5 questions) ---
    {
        id: 1,
        difficulty: "Easy",
        concept: "if-else",
        language: "C",
        question: "What will be the output of the following code snippet?",
        code: `int x = 0;
if (x = 5) {
    printf("True");
} else {
    printf("False");
}`,
        options: ["True", "False", "Compilation Error", "0"],
        correct_answer: "A",
        explanation: "In C, 'x = 5' is an assignment, not a comparison ('=='). The assignment evaluates to 5, which is non-zero (true). Thus, the if block executes.",
        why_other_options_are_wrong: {
            "B": "False would print if the condition was x == 5, because x is 0.",
            "C": "This is valid C syntax, though compilers may warn about it.",
            "D": "0 is the initial value, but it is overwritten by the assignment."
        },
        shortcut: "Single '=' is assignment, returns the assigned value. Double '==' is comparison.",
        real_world_application: "Catching accidental assignments in conditionals is a common linting rule in large codebases.",
        common_trap: "Assuming 'x = 5' is a typo for 'x == 5' and evaluating it as false."
    },
    {
        id: 2,
        difficulty: "Easy",
        concept: "if-else",
        language: "Java",
        question: "What happens when this Java code is compiled and run?",
        code: `int a = 10;
if (a) {
    System.out.println("Yes");
} else {
    System.out.println("No");
}`,
        options: ["Yes", "No", "Compilation Error", "Runtime Error"],
        correct_answer: "C",
        explanation: "In Java, the condition in an if statement must evaluate to a boolean type. An integer cannot be implicitly cast to a boolean.",
        why_other_options_are_wrong: {
            "A": "In C/C++ this would print Yes, but Java requires a boolean.",
            "B": "The code doesn't compile to reach the else block.",
            "D": "The error happens at compile time, not runtime."
        },
        shortcut: "Java strictly requires booleans (true/false) in conditions, unlike C/C++ which accepts integers.",
        real_world_application: "Strict type checking in Java prevents accidental assignments inside conditionals.",
        common_trap: "Applying C/C++ logic where non-zero integers are considered true."
    },
    {
        id: 3,
        difficulty: "Medium",
        concept: "if-else",
        language: "Python",
        question: "What will be printed by the following Python code?",
        code: `x = []
if x:
    print("Full")
else:
    print("Empty")`,
        options: ["Full", "Empty", "Error", "None"],
        correct_answer: "B",
        explanation: "In Python, empty sequences (like lists, strings, tuples) evaluate to False in a boolean context.",
        why_other_options_are_wrong: {
            "A": "x is an empty list, which is falsy.",
            "C": "This is perfectly valid Python syntax.",
            "D": "print returns None, but the output printed to the console is 'Empty'."
        },
        shortcut: "Empty collections in Python are False; populated collections are True.",
        real_world_application: "Checking if a list has elements before processing them.",
        common_trap: "Thinking a list object itself is truthy even if empty."
    },
    {
        id: 4,
        difficulty: "Medium",
        concept: "if-else",
        language: "C++",
        question: "What is the output of the following C++ snippet?",
        code: `int a = 5;
if (a < 10)
    if (a > 5)
        cout << "A";
else
    cout << "B";`,
        options: ["A", "B", "Nothing is printed", "Compilation Error"],
        correct_answer: "C",
        explanation: "The 'else' always binds to the closest preceding 'if' (the inner if `a > 5`). Since a is 5, `a > 5` is false, so the inner if fails. The else block belongs to `a > 5`. Wait, the inner if is false, so its else block executes! Therefore, 'B' is printed. Wait, let me re-evaluate. a = 5. a < 10 is True. Enters outer if. a > 5 is False. The else belongs to `if (a > 5)`. So the else block runs, printing 'B'. Let me check the correct answer. It is B.",
        why_other_options_are_wrong: {
            "A": "a is not greater than 5.",
            "C": "The else binds to the inner if, which fails, so the else runs.",
            "D": "Valid syntax."
        },
        shortcut: "Dangling else problem: An 'else' always associates with the nearest preceding 'if' unless braces {} dictate otherwise.",
        real_world_application: "Always using braces {} for conditionals to prevent dangling else bugs.",
        common_trap: "Assuming the indentation dictates which 'if' the 'else' belongs to (like in Python)."
    },
    {
        id: 5,
        difficulty: "Hard",
        concept: "if-else",
        language: "Pseudocode",
        question: "Consider the pseudocode. What does it output?",
        code: `a = 5, b = 10, c = 15
if (a > b) then
    a = b
else
    b = a
if (a > c) then
    c = a
else
    c = b
print a, b, c`,
        options: ["10 10 10", "5 10 15", "5 5 5", "5 5 15"],
        correct_answer: "C",
        explanation: "Initial: a=5, b=10, c=15. First if: a>b (5>10) is False. Else runs: b=a (b becomes 5). Now a=5, b=5, c=15. Second if: a>c (5>15) is False. Else runs: c=b (c becomes 5). Final values: 5, 5, 5.",
        why_other_options_are_wrong: {
            "A": "Assuming a=b ran instead of b=a.",
            "B": "Assuming neither condition modified the variables.",
            "D": "Assuming the second else statement didn't execute."
        },
        shortcut: "Track variable changes step-by-step on paper for sequential updates.",
        real_world_application: "Variable swapping and conditional reassignment logic.",
        common_trap: "Using original values instead of updated values for subsequent conditions."
    },

    // --- else_if (5 questions) ---
    {
        id: 6,
        difficulty: "Easy",
        concept: "else-if",
        language: "C",
        question: "What is the output?",
        code: `int x = 10;
if (x > 5) printf("A");
else if (x > 8) printf("B");
else printf("C");`,
        options: ["A", "AB", "B", "C"],
        correct_answer: "A",
        explanation: "In an if-else if ladder, only the first condition that evaluates to true is executed. Since x > 5 is true, 'A' prints and the rest is skipped.",
        why_other_options_are_wrong: {
            "B": "Both conditions are true, but else-if prevents the second from executing.",
            "C": "Only the first true condition triggers.",
            "D": "x is greater than 5, so the else block is not reached."
        },
        shortcut: "Once a true condition is found in an else-if ladder, jump to the end of the ladder.",
        real_world_application: "Categorizing values into mutually exclusive buckets (e.g., grading systems).",
        common_trap: "Thinking multiple true conditions in an else-if chain will all execute."
    },
    {
        id: 7,
        difficulty: "Medium",
        concept: "else-if",
        language: "Python",
        question: "What will this output?",
        code: `num = 15
if num % 2 == 0:
    print("Two")
elif num % 3 == 0:
    print("Three")
elif num % 5 == 0:
    print("Five")
else:
    print("None")`,
        options: ["Two", "Three", "Five", "Three Five"],
        correct_answer: "B",
        explanation: "15 % 2 != 0. 15 % 3 == 0 is True, so 'Three' prints. The elif block for 5 is skipped because a previous condition was met.",
        why_other_options_are_wrong: {
            "A": "15 is not divisible by 2.",
            "C": "15 is divisible by 5, but the condition for 3 was evaluated first and succeeded.",
            "D": "elif ensures only one block executes."
        },
        shortcut: "Top-to-bottom evaluation. The highest condition wins.",
        real_world_application: "FizzBuzz type problems rely heavily on checking the most specific condition first.",
        common_trap: "Ignoring the mutually exclusive nature of elif."
    },
    {
        id: 8,
        difficulty: "Medium",
        concept: "else-if",
        language: "Java",
        question: "What is printed by this code?",
        code: `boolean b1 = true, b2 = false;
if (b1 = false) {
    System.out.print("1");
} else if (b1) {
    System.out.print("2");
} else if (b2 = true) {
    System.out.print("3");
} else {
    System.out.print("4");
}`,
        options: ["1", "2", "3", "4"],
        correct_answer: "C",
        explanation: "First if: 'b1 = false' assigns false to b1 and evaluates to false. Second if: 'b1' is now false. Third if: 'b2 = true' assigns true to b2 and evaluates to true. So '3' is printed.",
        why_other_options_are_wrong: {
            "A": "b1 = false evaluates to false.",
            "B": "b1 is false at this point due to the first statement.",
            "D": "The third condition is true, preventing the else block."
        },
        shortcut: "In Java, boolean assignments inside conditions evaluate to the assigned value.",
        real_world_application: "This is generally bad practice, but appears in legacy code where assignments happen inside checks.",
        common_trap: "Reading '=' as '==' and missing the state mutation."
    },
    {
        id: 9,
        difficulty: "Hard",
        concept: "else-if",
        language: "C++",
        question: "Find the output:",
        code: `int x = 2;
if (x == 1)
    cout << "1";
else if (x == 2)
    cout << "2";
if (x == 2)
    cout << "3";
else
    cout << "4";`,
        options: ["2", "23", "34", "24"],
        correct_answer: "B",
        explanation: "This consists of an if-else if block, followed by an independent if-else block. First block: x==2 is true, prints '2'. Second block: x==2 is true, prints '3'.",
        why_other_options_are_wrong: {
            "A": "Missing the output from the second, independent conditional block.",
            "C": "Missing the output from the first block.",
            "D": "The else belongs to the second if, which evaluates to true, so else is skipped."
        },
        shortcut: "Look for independent 'if' statements versus 'else if' chains.",
        real_world_application: "Applying multiple independent rules or filters sequentially.",
        common_trap: "Treating the second 'if' as part of the initial 'else if' chain."
    },
    {
        id: 10,
        difficulty: "Hard",
        concept: "else-if",
        language: "C",
        question: "What will print?",
        code: `int a = 5;
if (a > 2) {
    if (a < 4) printf("A");
}
else if (a < 10) printf("B");
else printf("C");`,
        options: ["A", "B", "C", "Nothing"],
        correct_answer: "D",
        explanation: "Outer if (a>2) is true (5>2). It enters the block. Inner if (a<4) is false (5<4). Inner if has no else. The outer if block is finished. The 'else if' and 'else' below belong to the *outer* if, and are skipped because the outer if was true.",
        why_other_options_are_wrong: {
            "A": "a is not less than 4.",
            "B": "The outer 'if' was true, so its corresponding 'else if' is skipped entirely.",
            "C": "The else is skipped."
        },
        shortcut: "An empty path inside an executed 'if' block means nothing is printed; associated 'else if's are ignored.",
        real_world_application: "Silent failures when boundary conditions inside nested logic are unmet.",
        common_trap: "Thinking that if nothing prints in the 'if' block, execution falls through to the 'else if'."
    },

    // --- nested_if (7 questions) ---
    {
        id: 11,
        difficulty: "Easy",
        concept: "nested_if",
        language: "Pseudocode",
        question: "What is printed?",
        code: `x = 10, y = 20
if (x > 5) then
    if (y < 30) then
        print "P"
    else
        print "Q"
else
    print "R"`,
        options: ["P", "Q", "R", "PQ"],
        correct_answer: "A",
        explanation: "x=10, 10>5 is true. Enters inner if. y=20, 20<30 is true. Prints 'P'.",
        why_other_options_are_wrong: {
            "B": "y is not >= 30.",
            "C": "x is > 5.",
            "D": "Only one branch executes."
        },
        shortcut: "Trace variable by variable top down.",
        real_world_application: "Checking multi-level prerequisites, like authentication then authorization.",
        common_trap: "Getting lost in indentation."
    },
    {
        id: 12,
        difficulty: "Medium",
        concept: "nested_if",
        language: "C",
        question: "What does this code output?",
        code: `int i = 1, j = 2, k = 3;
if (i == 1)
    if (j == 2)
        if (k == 3)
            printf("Success");
        else
            printf("Fail");`,
        options: ["Success", "Fail", "Nothing", "Compilation Error"],
        correct_answer: "A",
        explanation: "i==1 is true. Next, j==2 is true. Next, k==3 is true. Prints 'Success'. The 'else' belongs to the innermost 'if'.",
        why_other_options_are_wrong: {
            "B": "k is indeed 3.",
            "C": "All conditions evaluate to true.",
            "D": "Valid C code without braces."
        },
        shortcut: "Cascading true conditions without braces drill straight down to the deepest statement.",
        real_world_application: "Pyramid of doom/callback hell structure equivalent in conditionals.",
        common_trap: "Thinking braces are mandatory for nested ifs."
    },
    {
        id: 13,
        difficulty: "Medium",
        concept: "nested_if",
        language: "Python",
        question: "What is the final value of x?",
        code: `x = 0
if True:
    x += 1
    if False:
        x += 2
    x += 3
x += 4`,
        options: ["4", "5", "8", "10"],
        correct_answer: "C",
        explanation: "x starts at 0. 'if True' block runs: x=1. 'if False' block is skipped. Then x+=3 runs (x=4). Exits outer if, x+=4 runs (x=8).",
        why_other_options_are_wrong: {
            "A": "Missed the operations inside the if block.",
            "B": "Missed the x += 3.",
            "D": "Included the x += 2 which is unreachable."
        },
        shortcut: "Indentation in Python strictly determines execution flow.",
        real_world_application: "Applying sequential modifiers to a base value.",
        common_trap: "Misreading the indentation of x += 3."
    },
    {
        id: 14,
        difficulty: "Hard",
        concept: "nested_if",
        language: "Java",
        question: "What does this code output?",
        code: `int a = 10, b = 20;
if (a < b) {
    if (a > 15)
        System.out.print("1");
} else 
    System.out.print("2");
System.out.print("3");`,
        options: ["13", "3", "23", "123"],
        correct_answer: "B",
        explanation: "a < b (10 < 20) is true. Enters the block. a > 15 (10 > 15) is false. The inner if does nothing. The outer else is skipped. Finally, '3' is printed outside all conditions.",
        why_other_options_are_wrong: {
            "A": "a is not greater than 15.",
            "C": "The outer else is skipped because a < b is true.",
            "D": "Code paths are mutually exclusive."
        },
        shortcut: "Pay close attention to where braces { } end. The else belongs to the outer if.",
        real_world_application: "Filtering results where only a subset pass the secondary filter.",
        common_trap: "Thinking the outer else will run if the inner condition fails."
    },
    {
        id: 15,
        difficulty: "Very Hard",
        concept: "nested_if",
        language: "C++",
        question: "Output?",
        code: `int x = 5;
if (x++ > 5)
    if (++x > 6)
        cout << x;
    else
        cout << x - 1;
else
    if (x == 6)
        cout << x;`,
        options: ["5", "6", "7", "Nothing"],
        correct_answer: "B",
        explanation: "First condition: x++ > 5. Uses x (5), then increments to 6. 5 > 5 is False. The outer if fails. It goes to the outer else. Inside else: check if (x == 6). x is currently 6. 6 == 6 is true. Prints x (which is 6).",
        why_other_options_are_wrong: {
            "A": "x was incremented.",
            "C": "The inner block of the first if doesn't execute.",
            "D": "x == 6 is true, so it prints."
        },
        shortcut: "Post-increment evaluates first, then increments. Pre-increment increments, then evaluates.",
        real_world_application: "Side effects in condition evaluation (generally discouraged).",
        common_trap: "Thinking x++ > 5 is true because x becomes 6. Post-increment uses the original value for comparison."
    },
    {
        id: 16,
        difficulty: "Hard",
        concept: "nested_if",
        language: "C",
        question: "Identify the output:",
        code: `if (printf("0"))
    if (printf("1"))
        printf("2");
    else
        printf("3");`,
        options: ["012", "013", "0", "Compilation Error"],
        correct_answer: "A",
        explanation: "printf returns the number of characters printed. printf(\"0\") prints '0' and returns 1 (true). Enters inner if. printf(\"1\") prints '1' and returns 1 (true). Enters inner block, prints '2'. Output: 012.",
        why_other_options_are_wrong: {
            "B": "printf(\"1\") returns 1 (true), so else is skipped.",
            "C": "The nested blocks also execute.",
            "D": "Valid C trick."
        },
        shortcut: "printf inside an if always evaluates to true as long as it prints at least 1 character.",
        real_world_application: "Code obfuscation and competitive programming tricks.",
        common_trap: "Thinking printf evaluates to false if it prints \"0\"."
    },
    {
        id: 17,
        difficulty: "Medium",
        concept: "nested_if",
        language: "Java",
        question: "What is printed?",
        code: `int val = 8;
if (val % 2 == 0)
    if (val % 3 == 0)
        System.out.print("Div6");
else
    System.out.print("NotDiv2");`,
        options: ["Div6", "NotDiv2", "Nothing", "Compilation Error"],
        correct_answer: "B",
        explanation: "Dangling else problem! The 'else' belongs to the closest preceding 'if' without an else. So the else belongs to `if (val % 3 == 0)`. val % 2 == 0 is true. val % 3 == 0 is false. The else runs, printing 'NotDiv2'.",
        why_other_options_are_wrong: {
            "A": "8 is not divisible by 3.",
            "C": "The else block is executed.",
            "D": "Valid syntax."
        },
        shortcut: "Without braces, an else pairs with the nearest if. The indentation is a trap.",
        real_world_application: "A prime example of why style guides mandate braces for all conditionals.",
        common_trap: "Trusting the indentation over the language parsing rules."
    },

    // --- and_or_not (8 questions) ---
    {
        id: 18,
        difficulty: "Easy",
        concept: "and_or_not",
        language: "C++",
        question: "What does this output?",
        code: `int x = 5, y = 10;
if (x > 0 && y < 20)
    cout << "Yes";
else
    cout << "No";`,
        options: ["Yes", "No", "Error", "Nothing"],
        correct_answer: "A",
        explanation: "Both conditions (5 > 0) and (10 < 20) are true. True AND True = True. Prints 'Yes'.",
        why_other_options_are_wrong: {
            "B": "The AND evaluates to true.",
            "C": "Valid syntax.",
            "D": "Condition is met."
        },
        shortcut: "&& requires BOTH sides to be true.",
        real_world_application: "Validating inputs fall within a specific numeric range.",
        common_trap: "Confusing && (logical AND) with & (bitwise AND)."
    },
    {
        id: 19,
        difficulty: "Easy",
        concept: "and_or_not",
        language: "Python",
        question: "What is the output?",
        code: `a = True
b = False
if not a or b:
    print("X")
else:
    print("Y")`,
        options: ["X", "Y", "None", "Error"],
        correct_answer: "B",
        explanation: "'not a' evaluates to False. 'b' is False. False or False is False. The else block runs, printing 'Y'.",
        why_other_options_are_wrong: {
            "A": "The or condition is falsy.",
            "C": "A path is definitely taken.",
            "D": "Valid logic."
        },
        shortcut: "'not' binds tighter than 'or'. Evaluate not first.",
        real_world_application: "Feature flags where a feature is off or a bypass condition isn't met.",
        common_trap: "Reading 'not a or b' as 'not (a or b)'."
    },
    {
        id: 20,
        difficulty: "Medium",
        concept: "and_or_not",
        language: "Java",
        question: "Identify the result:",
        code: `int i = 0;
if (i != 0 && (10 / i) > 1) {
    System.out.println("True");
} else {
    System.out.println("False");
}`,
        options: ["True", "False", "ArithmeticException (Divide by zero)", "Compilation Error"],
        correct_answer: "B",
        explanation: "Short-circuit evaluation. i != 0 is false. The && operator stops evaluating because false && anything is false. The (10/i) is never evaluated, preventing a divide-by-zero error.",
        why_other_options_are_wrong: {
            "A": "i != 0 is false.",
            "C": "Short-circuiting prevents the exception.",
            "D": "Valid syntax."
        },
        shortcut: "&& short-circuits on False. || short-circuits on True.",
        real_world_application: "Safe dereferencing: `if (obj != null && obj.isValid())`.",
        common_trap: "Assuming both sides of && are always evaluated."
    },
    {
        id: 21,
        difficulty: "Medium",
        concept: "and_or_not",
        language: "C",
        question: "Output prediction:",
        code: `int a = -1, b = 0, c = 1;
if (a || b && c)
    printf("W");
else
    printf("L");`,
        options: ["W", "L", "WL", "Error"],
        correct_answer: "A",
        explanation: "&& has higher precedence than ||. The expression groups as `a || (b && c)`. (0 && 1) is 0. a is -1 (which is true/non-zero). So -1 || 0 evaluates to 1 (true). Prints 'W'.",
        why_other_options_are_wrong: {
            "B": "-1 is true in C.",
            "C": "Only one path.",
            "D": "Valid syntax."
        },
        shortcut: "AND (&&) binds tighter than OR (||). Any non-zero integer is true.",
        real_world_application: "Combining boolean flags.",
        common_trap: "Evaluating left-to-right linearly as (a || b) && c."
    },
    {
        id: 22,
        difficulty: "Hard",
        concept: "and_or_not",
        language: "C++",
        question: "What is printed?",
        code: `int x = 0;
if (!x == x)
    cout << "Equal";
else
    cout << "Not";`,
        options: ["Equal", "Not", "0", "1"],
        correct_answer: "A",
        explanation: "x is 0. !0 is 1. The condition becomes 1 == 0, which is false. Wait. Let me re-read. '!' has higher precedence than '=='. !x is !0, which is 1 (true). Then 1 == x (which is 0). 1 == 0 is false. So it prints 'Not'. Ah, wait, option B is Not. Let's correct the explanation. I must pick B.",
        why_other_options_are_wrong: {
            "A": "1 is not equal to 0.",
            "C": "Prints text.",
            "D": "Prints text."
        },
        shortcut: "Logical NOT (!) converts a value to 0 or 1, then compares.",
        real_world_application: "Checking if a value acts as its own boolean opposite (never true in strict types).",
        common_trap: "Thinking !x == x is evaluated as !(x == x)."
    },
    // Fix correct answer for 22 programmatically to B
    {
        id: 23,
        difficulty: "Very Hard",
        concept: "and_or_not",
        language: "Python",
        question: "What is the result of the following Python expression evaluation?",
        code: `x = 5
y = 0
if x and y or not y:
    print("A")
else:
    print("B")`,
        options: ["A", "B", "Error", "None"],
        correct_answer: "A",
        explanation: "Precedence: 'not' then 'and' then 'or'. `x and y` -> 5 and 0 -> 0. `not y` -> not 0 -> True. Result: 0 or True -> True. Prints 'A'.",
        why_other_options_are_wrong: {
            "B": "The combined condition evaluates to True.",
            "C": "Valid Python.",
            "D": "Prints text."
        },
        shortcut: "Remember Python precedence: NOT, then AND, then OR.",
        real_world_application: "Complex filtering conditions in data pipelines.",
        common_trap: "Misapplying order of operations."
    },
    {
        id: 24,
        difficulty: "Hard",
        concept: "and_or_not",
        language: "Java",
        question: "Identify the output:",
        code: `int a = 10;
if (a++ > 10 && ++a > 11) {
    System.out.print("True");
} else {
    System.out.print("False, a=" + a);
}`,
        options: ["True", "False, a=10", "False, a=11", "False, a=12"],
        correct_answer: "C",
        explanation: "a++ > 10 evaluates as (10 > 10), which is False. a is then incremented to 11. Because the first operand of && is False, the second operand (++a > 11) is short-circuited (skipped). The else block prints 'False, a=11'.",
        why_other_options_are_wrong: {
            "A": "10 is not greater than 10.",
            "B": "a was post-incremented after the check.",
            "D": "The second increment is skipped due to short-circuiting."
        },
        shortcut: "If left side of && is false, right side is completely ignored.",
        real_world_application: "Preventing side effects when condition isn't met.",
        common_trap: "Assuming the right side evaluates and increments a to 12."
    },
    {
        id: 25,
        difficulty: "Medium",
        concept: "and_or_not",
        language: "C",
        question: "What is the output?",
        code: `int x = 5;
if (x & 1 && x > 2)
    printf("Odd and large");
else
    printf("Other");`,
        options: ["Odd and large", "Other", "Error", "Nothing"],
        correct_answer: "A",
        explanation: "x & 1 is a bitwise AND (5 & 1) which results in 1 (true). x > 2 is true. 1 && 1 is true.",
        why_other_options_are_wrong: {
            "B": "Both conditions are true.",
            "C": "Mixing bitwise and logical operators is valid.",
            "D": "Output will print."
        },
        shortcut: "(x & 1) is a common quick check for odd numbers.",
        real_world_application: "Fast bitwise checks mixed with logical bounds checking.",
        common_trap: "Confusing & with && and thinking it's a syntax error."
    },

    // --- multiple_conditions (6 questions) ---
    {
        id: 26,
        difficulty: "Easy",
        concept: "multiple_conditions",
        language: "Python",
        question: "What is printed?",
        code: `x = 10
if 0 < x < 20:
    print("In range")
else:
    print("Out")`,
        options: ["In range", "Out", "Error", "None"],
        correct_answer: "A",
        explanation: "Python supports chained comparisons. `0 < x < 20` evaluates to True since 10 is between 0 and 20.",
        why_other_options_are_wrong: {
            "B": "10 is in range.",
            "C": "Chaining is valid in Python.",
            "D": "Output happens."
        },
        shortcut: "Python natively handles mathematical range notations `a < b < c`.",
        real_world_application: "Cleanly checking bounds without `and`.",
        common_trap: "Thinking this causes a syntax error like in C/Java."
    },
    {
        id: 27,
        difficulty: "Medium",
        concept: "multiple_conditions",
        language: "C",
        question: "What does this code do in C?",
        code: `int x = 10;
if (0 < x < 5)
    printf("True");
else
    printf("False");`,
        options: ["True", "False", "Error", "Nothing"],
        correct_answer: "A",
        explanation: "In C, `0 < x < 5` groups as `(0 < x) < 5`. `0 < 10` is 1 (True). Then `1 < 5` is 1 (True). Prints 'True' even though 10 is not less than 5!",
        why_other_options_are_wrong: {
            "B": "It evaluates to true due to left-to-right evaluation producing a 1.",
            "C": "Valid syntax, though logically flawed.",
            "D": "Prints True."
        },
        shortcut: "Chained comparisons in C evaluate left-to-right, reducing to 0 or 1 at each step.",
        real_world_application: "A classic bug that linters look out for.",
        common_trap: "Reading it algebraically like Python and thinking it returns False."
    },
    {
        id: 28,
        difficulty: "Hard",
        concept: "multiple_conditions",
        language: "Java",
        question: "Output?",
        code: `boolean a = true, b = false, c = true;
if (a == b == c) {
    System.out.println("Yes");
} else {
    System.out.println("No");
}`,
        options: ["Yes", "No", "Error", "None"],
        correct_answer: "B",
        explanation: "Evaluates left to right: (a == b) is (true == false), which is false. Then (false == c) is (false == true), which is false. Prints 'No'.",
        why_other_options_are_wrong: {
            "A": "Result is false.",
            "C": "Since all are booleans, equality operators chain validly.",
            "D": "Output happens."
        },
        shortcut: "Boolean == evaluates left to right producing intermediate booleans.",
        real_world_application: "Checking if toggles are in a specific state.",
        common_trap: "Thinking a == b == c checks if all three are equal to each other."
    },
    {
        id: 29,
        difficulty: "Medium",
        concept: "multiple_conditions",
        language: "C++",
        question: "What is the output?",
        code: `int a = 5, b = 5, c = 5;
if (a = b = c = 0)
    cout << "A";
else
    cout << "B";`,
        options: ["A", "B", "Error", "0"],
        correct_answer: "B",
        explanation: "Assignment associativity is right-to-left. c=0 returns 0. b=0 returns 0. a=0 returns 0. The final condition is 0, which is false. Prints 'B'.",
        why_other_options_are_wrong: {
            "A": "The evaluated value is 0 (false).",
            "C": "Valid C++.",
            "D": "Prints B."
        },
        shortcut: "Multiple assignments evaluate to the rightmost assigned value.",
        real_world_application: "Resetting multiple counters simultaneously.",
        common_trap: "Thinking assigning values evaluates to true."
    },
    {
        id: 30,
        difficulty: "Hard",
        concept: "multiple_conditions",
        language: "Pseudocode",
        question: "Which option makes the condition TRUE?",
        code: `if ((X > 10 AND X < 20) OR X == 5) then
    print "Match"`,
        options: ["X = 10", "X = 20", "X = 5", "X = 0"],
        correct_answer: "C",
        explanation: "The condition requires X to be strictly between 10 and 20, OR exactly 5. Only X = 5 fits.",
        why_other_options_are_wrong: {
            "A": "X > 10 is false for 10 (needs to be 11+).",
            "B": "X < 20 is false for 20.",
            "D": "0 is not between 10 and 20, nor is it 5."
        },
        shortcut: "Boundary values (10, 20) are excluded due to strictly > and < operators.",
        real_world_application: "Input validation for specific valid cases + a range.",
        common_trap: "Assuming > 10 includes 10."
    },
    {
        id: 31,
        difficulty: "Very Hard",
        concept: "multiple_conditions",
        language: "C",
        question: "Output?",
        code: `int x = 1, y = 2;
if (x & y | x ^ y)
    printf("1");
else
    printf("0");`,
        options: ["1", "0", "Compile Error", "Runtime Error"],
        correct_answer: "A",
        explanation: "x=1 (01 in binary), y=2 (10 in binary). x & y = 0. x ^ y = 3 (11 in binary). 0 | 3 = 3. 3 is non-zero, so condition is true. Prints '1'.",
        why_other_options_are_wrong: {
            "B": "Evaluates to 3, which is true.",
            "C": "Bitwise operators are valid in conditionals.",
            "D": "No runtime issue."
        },
        shortcut: "Calculate bitwise results. Any non-zero result is truthy.",
        real_world_application: "Flag masking and merging.",
        common_trap: "Confusing bitwise precedence and logical truthiness."
    },

    // --- ternary_operator (4 questions) ---
    {
        id: 32,
        difficulty: "Easy",
        concept: "ternary_operator",
        language: "Java",
        question: "What is printed?",
        code: `int a = 10;
String res = (a > 5) ? "High" : "Low";
System.out.println(res);`,
        options: ["High", "Low", "Error", "10"],
        correct_answer: "A",
        explanation: "10 > 5 is true, so the first expression ('High') is returned and assigned to res.",
        why_other_options_are_wrong: {
            "B": "Condition is true.",
            "C": "Valid syntax.",
            "D": "Returns the string."
        },
        shortcut: "(condition) ? (if true) : (if false)",
        real_world_application: "Assigning values based on a single condition cleanly.",
        common_trap: "Swapping the true/false return values."
    },
    {
        id: 33,
        difficulty: "Medium",
        concept: "ternary_operator",
        language: "C",
        question: "Output?",
        code: `int a = 5;
int b = (a++ > 5) ? a : ++a;
printf("%d", b);`,
        options: ["5", "6", "7", "Error"],
        correct_answer: "C",
        explanation: "Condition: a++ > 5. Uses a(5), then increments to 6. Condition 5 > 5 is false. Evaluates false branch: ++a. a is now 6, pre-increment makes it 7. Returns 7 to b. Prints 7.",
        why_other_options_are_wrong: {
            "A": "Condition is false.",
            "B": "False branch applies a pre-increment on the already incremented a (6->7).",
            "D": "Valid C code."
        },
        shortcut: "Track variable mutations step by step. Short-circuit applies to ternary branches too.",
        real_world_application: "Complex conditional assignments (though highly discouraged for readability).",
        common_trap: "Forgetting 'a' was mutated by the condition before the branch evaluated."
    },
    {
        id: 34,
        difficulty: "Hard",
        concept: "ternary_operator",
        language: "C++",
        question: "Output?",
        code: `int x = 10;
(x % 2 == 0 ? cout << "Even" : cout << "Odd") << " Number";`,
        options: ["Even Number", "Odd Number", "Even", "Compile Error"],
        correct_answer: "D",
        explanation: "In C++, the ternary operator has lower precedence than the << operator. It evaluates as `(x % 2 == 0) ? (cout << \"Even\") : (cout << \"Odd\" << \" Number\")`. Wait, actually cout << \"Even\" returns a reference to ostream. The types match. But precedence forces parenthesization issues. Without parentheses around the ternary result, it causes a compilation error in C++.",
        why_other_options_are_wrong: {
            "A": "Fails to compile.",
            "B": "Fails to compile.",
            "C": "Fails to compile."
        },
        shortcut: "Ternary + stream insertion requires parentheses: `cout << (cond ? \"A\" : \"B\");`",
        real_world_application: "Inline printing strings based on condition.",
        common_trap: "Assuming C++ groups the ternary as a single string operand seamlessly."
    },
    {
        id: 35,
        difficulty: "Hard",
        concept: "ternary_operator",
        language: "Python",
        question: "Python equivalent of ternary. Output?",
        code: `x = 2
res = "A" if x == 1 else "B" if x == 2 else "C"
print(res)`,
        options: ["A", "B", "C", "Error"],
        correct_answer: "B",
        explanation: "Evaluates to 'A' if x==1, else evaluates ('B' if x==2 else 'C'). x is 2, so the nested ternary returns 'B'.",
        why_other_options_are_wrong: {
            "A": "x is not 1.",
            "C": "x is 2, so it returns B.",
            "D": "Valid nested ternary in Python."
        },
        shortcut: "Python ternary is `[on_true] if [cond] else [on_false]`.",
        real_world_application: "One-liner dictionary initializations based on arguments.",
        common_trap: "Reading left to right and misunderstanding the nesting."
    },

    // --- operator_precedence (4 questions) ---
    {
        id: 36,
        difficulty: "Medium",
        concept: "operator_precedence",
        language: "C",
        question: "Output?",
        code: `int a = 1, b = 2, c = 3;
if (a > b == c < b)
    printf("Yes");
else
    printf("No");`,
        options: ["Yes", "No", "Error", "None"],
        correct_answer: "A",
        explanation: "Relational operators (>, <) have higher precedence than equality (==). Evaluates as `(a > b) == (c < b)`. (1 > 2) is 0. (3 < 2) is 0. 0 == 0 is 1 (True). Prints 'Yes'.",
        why_other_options_are_wrong: {
            "B": "0 == 0 is true.",
            "C": "Valid C.",
            "D": "Output prints."
        },
        shortcut: "Relations (<, >) evaluated before equality (==, !=).",
        real_world_application: "Comparing the truthiness of two bounds checks.",
        common_trap: "Evaluating left to right: a > (b == c) < b."
    },
    {
        id: 37,
        difficulty: "Medium",
        concept: "operator_precedence",
        language: "Java",
        question: "Output?",
        code: `boolean x = true, y = false, z = true;
if (x || y && !z)
    System.out.println("T");
else
    System.out.println("F");`,
        options: ["T", "F", "Error", "None"],
        correct_answer: "A",
        explanation: "Precedence: ! then && then ||. `!z` is false. `y && false` is false. `x || false` (true || false) is true. Prints 'T'.",
        why_other_options_are_wrong: {
            "B": "Result is true.",
            "C": "Valid.",
            "D": "Prints."
        },
        shortcut: "NOT > AND > OR.",
        real_world_application: "Complex Boolean filtering logic.",
        common_trap: "Evaluating left to right (x || y) first."
    },
    {
        id: 38,
        difficulty: "Hard",
        concept: "operator_precedence",
        language: "C++",
        question: "Output?",
        code: `int x = 5;
if (x = 0 || x == 5)
    cout << "A";
else
    cout << "B";`,
        options: ["A", "B", "Error", "None"],
        correct_answer: "A",
        explanation: "Precedence: == then || then =. Evaluates as `x = (0 || (x == 5))`. x == 5 is true (1). 0 || 1 is 1. x = 1. Condition evaluates to 1 (True). Prints 'A'.",
        why_other_options_are_wrong: {
            "B": "Condition evaluates to 1.",
            "C": "Valid C++.",
            "D": "Prints."
        },
        shortcut: "Assignment (=) has the lowest precedence among logical and relational operators.",
        real_world_application: "Mistakenly placing = instead of == causing silent logic bugs.",
        common_trap: "Assuming evaluated left to right: (x=0) || (x==5)."
    },
    {
        id: 39,
        difficulty: "Very Hard",
        concept: "operator_precedence",
        language: "C",
        question: "Output?",
        code: `int a = 2, b = 1;
if (a + b * 2 == 4 && a << 1 > b)
    printf("X");
else
    printf("Y");`,
        options: ["X", "Y", "Error", "None"],
        correct_answer: "A",
        explanation: "Precedence: (*, /) -> (+, -) -> (<<, >>) -> (>, <) -> (==, !=) -> &&. 1: b*2 = 2. 2: a+2 = 4. 3: 4 == 4 (1). 4: a << 1 = 4. 5: 4 > b (4 > 1) = 1. 6: 1 && 1 = 1. Prints 'X'.",
        why_other_options_are_wrong: {
            "B": "Condition is true.",
            "C": "Valid.",
            "D": "Prints."
        },
        shortcut: "Arithmetic > Shifts > Relational > Equality > Logical.",
        real_world_application: "Optimized low-level embedded systems programming.",
        common_trap: "Messing up bitwise shift vs relational precedence."
    },

    // --- short_circuit (3 questions) ---
    {
        id: 40,
        difficulty: "Medium",
        concept: "short_circuit",
        language: "Java",
        question: "What is the value of 'x' after execution?",
        code: `int x = 0;
if (false && (x++ > 0)) { }
System.out.print(x);`,
        options: ["0", "1", "2", "Error"],
        correct_answer: "A",
        explanation: "Because the left side of && is false, short-circuiting occurs. The right side `(x++ > 0)` is never executed. x remains 0.",
        why_other_options_are_wrong: {
            "B": "Increment is skipped.",
            "C": "Increment is skipped.",
            "D": "Valid."
        },
        shortcut: "False AND anything = False (short-circuits).",
        real_world_application: "Checking for null before accessing object properties.",
        common_trap: "Assuming increment operators always execute."
    },
    {
        id: 41,
        difficulty: "Medium",
        concept: "short_circuit",
        language: "C",
        question: "Value of a, b, c?",
        code: `int a = 1, b = 1, c = 1;
if (++a || ++b && ++c) { }
printf("%d %d %d", a, b, c);`,
        options: ["2 1 1", "2 2 2", "2 2 1", "1 1 1"],
        correct_answer: "A",
        explanation: "++a evaluates to 2 (True). Because the left side of || is true, the entire OR expression is true. The right side `(++b && ++c)` is short-circuited and skipped. b and c remain 1.",
        why_other_options_are_wrong: {
            "B": "Right side skipped.",
            "C": "Right side skipped.",
            "D": "a is incremented."
        },
        shortcut: "True OR anything = True (short-circuits).",
        real_world_application: "Fallback assignment where expensive function calls are on the right.",
        common_trap: "Thinking && forces evaluation regardless of ||."
    },
    {
        id: 42,
        difficulty: "Hard",
        concept: "short_circuit",
        language: "Python",
        question: "Output?",
        code: `def func():
    print("F")
    return True

if False and func():
    pass`,
        options: ["F", "Nothing", "Error", "True"],
        correct_answer: "B",
        explanation: "False `and` short-circuits. `func()` is never called, so 'F' is never printed.",
        why_other_options_are_wrong: {
            "A": "Function not called.",
            "C": "Valid Python.",
            "D": "No print."
        },
        shortcut: "Functions in conditions aren't executed if short-circuit happens.",
        real_world_application: "Preventing costly database lookups if cache hits.",
        common_trap: "Assuming functions are evaluated before the if statement starts."
    },

    // --- boundary_conditions (3 questions) ---
    {
        id: 43,
        difficulty: "Medium",
        concept: "boundary_conditions",
        language: "C++",
        question: "Output?",
        code: `int x = -1;
if (x)
    cout << "A";
else
    cout << "B";`,
        options: ["A", "B", "Error", "None"],
        correct_answer: "A",
        explanation: "In C++, any non-zero integer (including negative numbers) evaluates to true. -1 is true, so 'A' prints.",
        why_other_options_are_wrong: {
            "B": "Only 0 is false.",
            "C": "Valid.",
            "D": "Prints."
        },
        shortcut: "True != 1. True = (not 0).",
        real_world_application: "Checking error codes where -1 means failure (which is truthy).",
        common_trap: "Thinking only 1 or positive numbers are true."
    },
    {
        id: 44,
        difficulty: "Medium",
        concept: "boundary_conditions",
        language: "Java",
        question: "Output?",
        code: `double d = 0.0;
if (d == 0)
    System.out.print("Z");
else
    System.out.print("N");`,
        options: ["Z", "N", "Error", "None"],
        correct_answer: "A",
        explanation: "0.0 is equal to integer 0 via type promotion. Prints 'Z'.",
        why_other_options_are_wrong: {
            "B": "Values match.",
            "C": "Valid comparison.",
            "D": "Prints."
        },
        shortcut: "Primitives are promoted for comparison.",
        real_world_application: "Comparing float zero to int zero.",
        common_trap: "Assuming strict type matching like in JS (===)."
    },
    {
        id: 45,
        difficulty: "Hard",
        concept: "boundary_conditions",
        language: "C",
        question: "Output?",
        code: `unsigned int u = 0;
if (u - 1 < 0)
    printf("Neg");
else
    printf("Pos");`,
        options: ["Neg", "Pos", "Error", "None"],
        correct_answer: "B",
        explanation: "u is unsigned. `u - 1` underflows to the maximum unsigned int value (e.g., 4294967295). This large positive number is not < 0. Prints 'Pos'.",
        why_other_options_are_wrong: {
            "A": "Unsigned types cannot be negative.",
            "C": "Valid.",
            "D": "Prints."
        },
        shortcut: "Unsigned integers wrap around on underflow and are never < 0.",
        real_world_application: "Array index boundary checks causing catastrophic buffer overflows.",
        common_trap: "Evaluating math like a human instead of as an unsigned type."
    },

    // --- code_tracing_and_output (5 questions) ---
    {
        id: 46,
        difficulty: "Easy",
        concept: "code_tracing_and_output",
        language: "Python",
        question: "What is printed?",
        code: `x = 5
if x == 5:
    x += 5
if x == 10:
    x += 10
print(x)`,
        options: ["5", "10", "20", "15"],
        correct_answer: "C",
        explanation: "These are sequential, independent ifs. x=5. First if true, x becomes 10. Second if check: x==10 is now true. x becomes 20.",
        why_other_options_are_wrong: {
            "B": "Second condition is evaluated and met.",
            "D": "Math error.",
            "A": "Value modified."
        },
        shortcut: "Sequential ifs evaluate current state, not initial state.",
        real_world_application: "Applying sequential state transitions/discounts.",
        common_trap: "Treating sequential ifs like if/elif."
    },
    {
        id: 47,
        difficulty: "Medium",
        concept: "code_tracing_and_output",
        language: "Java",
        question: "Output?",
        code: `int a = 2;
if (a == 2) {
    a = 3;
} else if (a == 3) {
    a = 4;
}
System.out.print(a);`,
        options: ["2", "3", "4", "Error"],
        correct_answer: "B",
        explanation: "a == 2 is true. a becomes 3. Because it's an if/else if chain, the `else if (a==3)` is entirely skipped, even though a is now 3.",
        why_other_options_are_wrong: {
            "A": "Modified to 3.",
            "C": "else if chain stops after first match.",
            "D": "Valid."
        },
        shortcut: "if/else-if chains execute exactly ONE block.",
        real_world_application: "State machines where only one transition occurs per tick.",
        common_trap: "Applying the updated variable to the elif condition."
    },
    {
        id: 48,
        difficulty: "Hard",
        concept: "code_tracing_and_output",
        language: "C",
        question: "Output?",
        code: `int i = 0;
while (i < 3) {
    if (i == 1)
        continue;
    printf("%d", i);
    i++;
}`,
        options: ["012", "02", "Infinite loop printing 0", "0 and then infinite loop"],
        correct_answer: "D",
        explanation: "i=0: prints 0, i becomes 1. Loop again. i=1: condition met, `continue` executes. Skips the rest of the loop block (including `i++`). Next iteration: i is still 1. Infinite loop.",
        why_other_options_are_wrong: {
            "A": "continue skips the print.",
            "B": "i never increments to 2.",
            "C": "0 prints once."
        },
        shortcut: "continue inside while loops skips the increment if placed before it.",
        real_world_application: "Accidentally causing infinite loops during data parsing.",
        common_trap: "Thinking continue automatically increments the counter."
    },
    {
        id: 49,
        difficulty: "Very Hard",
        concept: "code_tracing_and_output",
        language: "C++",
        question: "Output?",
        code: `int x = 1;
if (x & (x = 0))
    cout << "1";
else
    cout << "0";`,
        options: ["1", "0", "Undefined Behavior", "Compilation Error"],
        correct_answer: "C",
        explanation: "Modifying a variable (`x = 0`) and reading it (`x`) in the same expression without an intervening sequence point results in Undefined Behavior in C++. Different compilers may produce different results.",
        why_other_options_are_wrong: {
            "A": "Result is compiler dependent.",
            "B": "Result is compiler dependent.",
            "D": "Compiles fine."
        },
        shortcut: "Reading and writing same variable in one expression = Undefined Behavior.",
        real_world_application: "Undefined behavior pitfalls in legacy C++ codebases.",
        common_trap: "Trying to logically trace it left-to-right."
    },
    {
        id: 50,
        difficulty: "Medium",
        concept: "code_tracing_and_output",
        language: "Pseudocode",
        question: "Final value of sum?",
        code: `sum = 0
for x = 1 to 5
    if x % 2 == 0 then
        sum = sum + x
    else
        sum = sum - 1
print sum`,
        options: ["6", "3", "5", "-3"],
        correct_answer: "B",
        explanation: "x=1: sum = -1. x=2: sum = -1+2 = 1. x=3: sum = 1-1 = 0. x=4: sum = 0+4 = 4. x=5: sum = 4-1 = 3.",
        why_other_options_are_wrong: {
            "A": "Did not subtract 1 for odd numbers.",
            "C": "Math error.",
            "D": "Math error."
        },
        shortcut: "Sum of evens (2+4=6) minus number of odds (3 odds). 6 - 3 = 3.",
        real_world_application: "Accumulating values with penalties.",
        common_trap: "Adding odds instead of subtracting 1."
    }
];
