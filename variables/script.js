// 50 Accenture-Calibrated Questions across all requested topics with explicit unique question_ids
        const questionsRaw = [
            // --- Variables (4) ---
            {
                question_id: 1,
                topic: "Variables",
                difficulty: "Easy",
                question: "Which of the following is an INVALID variable identifier in C and C++?",
                code: null,
                options: ["_totalAmount", "count2", "2ndValue", "$salary"],
                correct_answer: "2ndValue",
                hint: "Identifiers cannot start with a numeric digit.",
                explanation: "In C and C++, variable names must begin with an alphabet (uppercase or lowercase) or an underscore (_). They cannot begin with digits.",
                option_analysis: {
                    "A": "_totalAmount is valid because starting with an underscore is allowed.",
                    "B": "count2 is valid; digits are allowed after the first character.",
                    "C": "2ndValue is INVALID because variable names cannot begin with a number.",
                    "D": "$salary is accepted by some compilers as an extension, but digits starting an identifier are strictly invalid in standard C/C++."
                },
                real_world_application: "Enforcing strict identifier rules avoids parser and tokenizer collisions during lexical syntax analysis."
            },
            {
                question_id: 2,
                topic: "Variables",
                difficulty: "Medium",
                question: "In Python, what is the behavior regarding variable declarations and scope when rebinding global variables?",
                code: "x = 10\ndef update():\n    x = x + 5\nupdate()",
                options: [
                    "x becomes 15 globally",
                    "UnboundLocalError: cannot access local variable 'x' where it is not associated with a value",
                    "x prints 10",
                    "None"
                ],
                correct_answer: "UnboundLocalError: cannot access local variable 'x' where it is not associated with a value",
                hint: "Python treats variables assigned inside a function as local unless explicitly declared otherwise.",
                explanation: "Because 'x' is assigned to inside the function, Python marks 'x' as local to update(). During 'x + 5', it attempts to read the local 'x' before it has been assigned, triggering an UnboundLocalError.",
                option_analysis: {
                    "A": "Incorrect; update() does not declare 'global x'.",
                    "B": "Correct; Python parser sees an assignment to x in function scope and scopes it locally.",
                    "C": "Incorrect; the function raises an exception prior to returning.",
                    "D": "Incorrect; execution terminates with an error."
                },
                real_world_application: "Understanding function scope prevents unintended variable shadowing and mutable state leaks in microservices."
            },
            {
                question_id: 3,
                topic: "Variables",
                difficulty: "Medium",
                question: "In C, what is the default initial value of an uninitialized local (automatic) integer variable compared to a static integer variable?",
                code: null,
                options: [
                    "Both are initialized to 0",
                    "Automatic has garbage value; Static is initialized to 0",
                    "Automatic is 0; Static has garbage value",
                    "Both retain garbage values"
                ],
                correct_answer: "Automatic has garbage value; Static is initialized to 0",
                hint: "Memory allocated on the stack retains preexisting bits, while static memory in the BSS segment is zero-cleared by the runtime.",
                explanation: "Automatic local variables reside on the stack frame and are not initialized automatically (retaining indeterminate/garbage values). Static variables reside in the data/BSS segment and are zero-initialized.",
                option_analysis: {
                    "A": "Incorrect; stack memory is not zeroed by default in C.",
                    "B": "Correct; automatic variables hold stack garbage, whereas static variables reside in BSS and default to 0.",
                    "C": "Inverted statement.",
                    "D": "Static storage class guarantees 0 initialization."
                },
                real_world_application: "Failing to initialize stack variables is a major source of security vulnerabilities and undefined program logic."
            },
            {
                question_id: 4,
                topic: "Variables",
                difficulty: "Medium-Hard",
                question: "In Java, what happens when an instance variable of type boolean is declared without explicit initialization?",
                code: "class Data {\n    boolean flag;\n}",
                options: [
                    "Compilation error: variable must be initialized",
                    "It defaults to null",
                    "It defaults to false",
                    "It defaults to true"
                ],
                correct_answer: "It defaults to false",
                hint: "Primitive instance variables in Java receive default values; only local method variables must be explicitly initialized.",
                explanation: "Java initializes class field members to default values upon object instantiation. For boolean fields, the language specification mandates false.",
                option_analysis: {
                    "A": "Only local variables in Java cause compile errors when uninitialized.",
                    "B": "boolean is a primitive, not an object wrapper (Boolean), so it cannot be null.",
                    "C": "Correct; primitive boolean fields default to false.",
                    "D": "Incorrect; default primitive bit pattern is zero (false)."
                },
                real_world_application: "Understanding default field initialization prevents NullPointerExceptions and unpredictable initial state in enterprise beans."
            },

            // --- Constants (3) ---
            {
                question_id: 5,
                topic: "Constants",
                difficulty: "Easy",
                question: "Which keyword in C++ makes an object immutable and enables compile-time evaluation?",
                code: null,
                options: ["volatile", "constexpr", "register", "extern"],
                correct_answer: "constexpr",
                hint: "Introduced in C++11 to express constants computed directly by the compiler.",
                explanation: "'constexpr' specifies that the value of an object or return value of a function can be evaluated at compile time, enforcing true compile-time constants.",
                option_analysis: {
                    "A": "volatile informs the compiler that a variable may change unexpectedly outside program control.",
                    "B": "Correct; constexpr guarantees compile-time constant evaluation.",
                    "C": "register is an obsolete hint to store variables in CPU registers.",
                    "D": "extern declares external linkage."
                },
                real_world_application: "Compile-time constants optimize embedded systems and high-frequency trading code by precomputing lookup tables."
            },
            {
                question_id: 6,
                topic: "Constants",
                difficulty: "Medium",
                question: "In C, what is the primary structural difference between defining a constant with `#define MAX 100` and `const int MAX = 100;`?",
                code: null,
                options: [
                    "#define has strict type safety, const does not",
                    "#define undergoes preprocessor textual substitution without type checks; const has type safety and memory storage",
                    "const can be redefined; #define cannot",
                    "There is no difference"
                ],
                correct_answer: "#define undergoes preprocessor textual substitution without type checks; const has type safety and memory storage",
                hint: "One is handled before compilation begins; the other is checked by the compiler's semantic analyzer.",
                explanation: "#define is a preprocessor macro replacing tokens prior to semantic compilation without type verification. 'const int' introduces a typed identifier respected by the compiler and debugger.",
                option_analysis: {
                    "A": "Inverted; macros lack type safety.",
                    "B": "Correct; macros substitute text, while const enforces type safety and scope.",
                    "C": "Macros can be undefined and redefined with #undef.",
                    "D": "They operate at distinct compilation phases."
                },
                real_world_application: "Using typed constants instead of preprocessor macros simplifies debugging in IDEs and enables symbol table visibility."
            },
            {
                question_id: 7,
                topic: "Constants",
                difficulty: "Medium-Hard",
                question: "In Java, what is required to create a compile-time constant variable?",
                code: null,
                options: [
                    "Only the final keyword",
                    "Both static and final keywords with a primitive or String initialized at declaration",
                    "volatile and transient keywords",
                    "const keyword"
                ],
                correct_answer: "Both static and final keywords with a primitive or String initialized at declaration",
                hint: "The variable must belong to the class rather than instances, and its value must not be re-assignable.",
                explanation: "In Java, constants are declared using 'static final'. If initialized with compile-time constant expressions, the compiler inlines their values directly at bytecode call sites.",
                option_analysis: {
                    "A": "final alone creates an immutable instance variable, not a shared class constant.",
                    "B": "Correct; static final defines standard constants in Java.",
                    "C": "volatile is used for concurrency; transient for serialization.",
                    "D": "const is a reserved keyword in Java but has no functional operation."
                },
                real_world_application: "Constants like error codes or mathematical constants are defined static final to conserve heap allocations across threads."
            },

            // --- Data Types (5) ---
            {
                question_id: 8,
                topic: "Data Types",
                difficulty: "Easy",
                question: "In Java, what is the exact memory size and signedness of the `char` primitive type?",
                code: null,
                options: [
                    "1 byte, signed (ASCII)",
                    "2 bytes, unsigned (UTF-16 Unicode)",
                    "4 bytes, signed (UTF-32)",
                    "2 bytes, signed"
                ],
                correct_answer: "2 bytes, unsigned (UTF-16 Unicode)",
                hint: "Java chars represent 16-bit Unicode code units with range 0 to 65535.",
                explanation: "Java's 'char' data type is a 16-bit (2 bytes) unsigned integer representation holding UTF-16 code units ranging from 0 ('\\u0000') to 65535 ('\\uffff').",
                option_analysis: {
                    "A": "C char is 1 byte; Java char is 2 bytes.",
                    "B": "Correct; 16-bit unsigned Unicode.",
                    "C": "Java char is not 32-bit.",
                    "D": "Java char is unsigned; short is the signed 2-byte counterpart."
                },
                real_world_application: "Correct character sizing avoids truncation bugs when localizing software for international scripts."
            },
            {
                question_id: 9,
                topic: "Data Types",
                difficulty: "Easy",
                question: "In Python, which of the following built-in collection types is MUTABLE?",
                code: null,
                options: ["tuple", "str", "frozenset", "list"],
                correct_answer: "list",
                hint: "Elements can be added, modified, or removed in-place.",
                explanation: "Python lists are mutable sequences; elements can be updated without creating a new object. Tuples, strings, and frozensets are immutable.",
                option_analysis: {
                    "A": "Tuples cannot be mutated once created.",
                    "B": "Strings in Python are immutable.",
                    "C": "frozenset is an immutable hashable set.",
                    "D": "Correct; lists support in-place item assignment."
                },
                real_world_application: "Choosing between tuples and lists determines whether data structures can serve as dictionary keys."
            },
            {
                question_id: 10,
                topic: "Data Types",
                difficulty: "Medium",
                question: "What is the typical size of `long double` in 64-bit GCC compilers on x86 architectures?",
                code: null,
                options: ["4 bytes", "8 bytes", "12 or 16 bytes (extended precision)", "32 bytes"],
                correct_answer: "12 or 16 bytes (extended precision)",
                hint: "It uses the x87 80-bit floating-point format padded to 12 or 16 bytes for memory alignment.",
                explanation: "On x86 GCC, 'long double' uses 80-bit extended precision padded to 96 bits (12 bytes) on 32-bit or 128 bits (16 bytes) on 64-bit systems for ABI alignment.",
                option_analysis: {
                    "A": "4 bytes is float size.",
                    "B": "8 bytes is standard double size.",
                    "C": "Correct; extended hardware precision padded to 12/16 bytes.",
                    "D": "32 bytes is beyond long double architecture definitions."
                },
                real_world_application: "Extended precision is used in scientific simulations to minimize accumulated rounding errors."
            },
            {
                question_id: 11,
                topic: "Data Types",
                difficulty: "Medium",
                question: "In Java, what will occur during the compilation and execution of this code?",
                code: "byte b = 127;\nb++;\nSystem.out.println(b);",
                options: ["Compilation error: integer overflow", "Prints 128", "Prints -128", "Prints 0"],
                correct_answer: "Prints -128",
                hint: "A byte is signed 8-bit (-128 to 127). The ++ operator includes an implicit cast and wraps around.",
                explanation: "Java byte is signed 8-bit (-128 to +127). Incrementing 127 in two's complement binary gives 10000000_2, which represents -128. b++ acts as b = (byte)(b + 1).",
                option_analysis: {
                    "A": "Java does not throw compile errors on primitive overflow.",
                    "B": "128 cannot fit in a signed 8-bit byte.",
                    "C": "Correct; two's complement wraps from +127 to -128.",
                    "D": "0 is not the binary outcome of 01111111 + 1."
                },
                real_world_application: "Understanding integer overflow is critical in cybersecurity to avoid buffer overruns and integer truncation flaws."
            },
            {
                question_id: 12,
                topic: "Data Types",
                difficulty: "Medium-Hard",
                question: "In C, what is the output of `sizeof('a')` versus in C++?",
                code: null,
                options: [
                    "1 in C, and 1 in C++",
                    "sizeof(int) in C, and 1 in C++",
                    "1 in C, and sizeof(int) in C++",
                    "Compilation error in C"
                ],
                correct_answer: "sizeof(int) in C, and 1 in C++",
                hint: "In C, character literals are typed as int; in C++, they are of type char.",
                explanation: "In C, character constants like 'a' have type 'int', so sizeof('a') == sizeof(int) (usually 4). In C++, character literals have type 'char', so sizeof('a') == sizeof(char) == 1.",
                option_analysis: {
                    "A": "Incorrect; C does not treat character literals as char type.",
                    "B": "Correct; int in C (4 bytes) and char in C++ (1 byte).",
                    "C": "Inverted.",
                    "D": "Both languages compile this validly."
                },
                real_world_application: "Highlighting subtle differences between C and C++ compilers is critical when porting cross-language header files."
            },

            // --- Type Conversion (5) ---
            {
                question_id: 13,
                topic: "Type Conversion",
                difficulty: "Easy",
                question: "What is the result of the following integer division in C?",
                code: "float res = 7 / 2;\nprintf(\"%.1f\", res);",
                options: ["3.5", "3.0", "4.0", "Compilation Error"],
                correct_answer: "3.0",
                hint: "Both 7 and 2 are integer literals; division finishes before implicit assignment conversion to float.",
                explanation: "Integer division 7 / 2 truncates to integer 3. Only then is 3 implicitly widened to 3.0f upon assignment to float variable 'res'.",
                option_analysis: {
                    "A": "To get 3.5, at least one operand must be a float (e.g. 7.0 / 2).",
                    "B": "Correct; 7 / 2 yields 3, which converts to 3.0.",
                    "C": "Integer division truncates towards zero, not rounding up.",
                    "D": "This is completely valid C syntax."
                },
                real_world_application: "Accidental integer division is a frequent bug in financial calculations like interest and tax percentage formulas."
            },
            {
                question_id: 14,
                topic: "Type Conversion",
                difficulty: "Medium",
                question: "In Java, which of the following assignments will cause a COMPILATION error without explicit casting?",
                code: null,
                options: [
                    "int a = 10; double b = a;",
                    "byte a = 10; int b = a;",
                    "float a = 10.5;",
                    "char c = 65;"
                ],
                correct_answer: "float a = 10.5;",
                hint: "Floating-point literals with decimal points are typed as double by default in Java.",
                explanation: "10.5 is a double literal in Java. Assigning a 64-bit double to a 32-bit float is a narrowing conversion that requires an explicit cast (float a = 10.5f;).",
                option_analysis: {
                    "A": "Widening int to double is permitted implicitly.",
                    "B": "Widening byte to int is permitted implicitly.",
                    "C": "Correct; double literal to float causes loss-of-precision compile error.",
                    "D": "Integer constant 65 fits inside char bounds and is allowed."
                },
                real_world_application: "Compiler strictness on narrowing conversions prevents accidental loss of numerical precision."
            },
            {
                question_id: 15,
                topic: "Type Conversion",
                difficulty: "Medium",
                question: "In C, what is printed by the following code due to integer promotion rules?",
                code: "#include <stdio.h>\nint main() {\n    unsigned int a = 10;\n    int b = -20;\n    if (a + b > 0)\n        printf(\"Greater\");\n    else\n        printf(\"Lesser\");\n    return 0;\n}",
                options: ["Greater", "Lesser", "Equal", "Compilation error"],
                correct_answer: "Greater",
                hint: "When signed and unsigned operands of the same rank are combined, the signed operand is converted to unsigned.",
                explanation: "b (-20) is implicitly converted to an unsigned int. In two's complement, -20 becomes a very large positive number (e.g. 4294967276 on 32-bit systems). The sum is therefore greater than 0.",
                option_analysis: {
                    "A": "Correct; unsigned conversion turns -20 into a large positive integer.",
                    "B": "Natural human arithmetic would suggest -10, but C promotion rules convert to unsigned.",
                    "C": "Sum is not 0.",
                    "D": "Valid C code without compile errors."
                },
                real_world_application: "Unsigned/signed arithmetic bugs are notorious security hazards in network packet length validation."
            },
            {
                question_id: 16,
                topic: "Type Conversion",
                difficulty: "Medium-Hard",
                question: "What is the output of this Python snippet involving implicit boolean conversion?",
                code: "x = []\ny = [0]\nprint(bool(x), bool(y))",
                options: ["False False", "True True", "False True", "True False"],
                correct_answer: "False True",
                hint: "In Python, empty collections evaluate to False; non-empty collections evaluate to True regardless of contents.",
                explanation: "In Python truthiness testing, an empty list [] evaluates to False. A list containing elements (even 0) has length > 0, so it evaluates to True.",
                option_analysis: {
                    "A": "y is not empty, so it cannot be False.",
                    "B": "x is empty, so it evaluates to False.",
                    "C": "Correct; bool([]) is False, bool([0]) is True.",
                    "D": "Inverted."
                },
                real_world_application: "Idiomatic Python relies on truthy/falsy checks to detect empty payloads or query responses."
            },
            {
                question_id: 17,
                topic: "Type Conversion",
                difficulty: "Hard",
                question: "In C++, which casting operator should be used to perform safe runtime downcasting in an inheritance hierarchy with polymorphic classes?",
                code: null,
                options: ["static_cast", "dynamic_cast", "reinterpret_cast", "const_cast"],
                correct_answer: "dynamic_cast",
                hint: "This cast uses Runtime Type Information (RTTI) and returns nullptr or throws on failure.",
                explanation: "dynamic_cast safely checks polymorphic object types at runtime using RTTI. If downcasting an incompatible pointer, it returns nullptr.",
                option_analysis: {
                    "A": "static_cast performs compile-time casting without runtime validation checks.",
                    "B": "Correct; dynamic_cast verifies class hierarchies safely at runtime.",
                    "C": "reinterpret_cast performs raw bit pattern reinterpretation.",
                    "D": "const_cast is exclusively used to add or strip const/volatile attributes."
                },
                real_world_application: "Safe downcasting prevents memory corruption when resolving derived classes in plugin and GUI architectures."
            },

            // --- Operators (General) (3) ---
            {
                question_id: 18,
                topic: "Operators",
                difficulty: "Easy",
                question: "Which of the following operators is the only TERNARY operator in C, C++, and Java?",
                code: null,
                options: ["::", "? :", "->", "&&"],
                correct_answer: "? :",
                hint: "It takes three operands: condition ? expr1 : expr2.",
                explanation: "The conditional operator '? :' is the only ternary operator in C, C++, and Java, evaluating expressions based on a boolean condition.",
                option_analysis: {
                    "A": ":: is binary/unary scope resolution operator.",
                    "B": "Correct; the conditional ternary operator.",
                    "C": "-> is binary member access via pointer.",
                    "D": "&& is a binary logical operator."
                },
                real_world_application: "Ternary operators write clean inline conditional assignments like setting default fallback values."
            },
            {
                question_id: 19,
                topic: "Operators",
                difficulty: "Medium",
                question: "What does the bitwise XOR operator (`^`) return for two identical bit operands?",
                code: null,
                options: ["1", "0", "-1", "Depends on sign"],
                correct_answer: "0",
                hint: "Exclusive OR outputs 1 only when bits are different.",
                explanation: "XOR returns 1 if and only if one operand bit is 1 and the other is 0. If both bits are identical (0^0 or 1^1), the result is always 0.",
                option_analysis: {
                    "A": "1 is produced when bits are distinct.",
                    "B": "Correct; equal bits cancel to 0.",
                    "C": "-1 requires all bits set to 1 in two's complement.",
                    "D": "Bitwise logic does not depend on sign conventions."
                },
                real_world_application: "XORing a value with itself (a ^ a = 0) is an optimal assembly instruction to clear CPU registers."
            },
            {
                question_id: 20,
                topic: "Operators",
                difficulty: "Medium-Hard",
                question: "What is the output of the bitwise shift operator expression in Java: `-1 >>> 24`?",
                code: null,
                options: ["-1", "255", "0", "-255"],
                correct_answer: "255",
                hint: "The unsigned right shift operator (>>>) fills high-order bits with 0s regardless of sign.",
                explanation: "In Java, -1 is 0xFFFFFFFF (32 bits of 1s). The >>> operator shifts bits right, filling the left 24 bits with 0s. The remaining 8 bits are 0xFF, which is decimal 255.",
                option_analysis: {
                    "A": "Arithmetic shift (>>) preserves sign bits, yielding -1; >>> does not.",
                    "B": "Correct; 0x000000FF equals 255.",
                    "C": "Not 0, lower 8 bits remain set.",
                    "D": "Unsigned shift produces non-negative numbers."
                },
                real_world_application: "Unsigned shifts are essential when decoding raw network packets, cryptographic hashes, and RGBA color channels."
            },

            // --- Arithmetic Operators (5) ---
            {
                question_id: 21,
                topic: "Arithmetic Operators",
                difficulty: "Easy",
                question: "In C and Java, what is the result of applying the modulo operator `%` to negative numbers: `-14 % 3`?",
                code: null,
                options: ["-2", "2", "1", "-1"],
                correct_answer: "-2",
                hint: "In C99 and Java, the sign of the modulo result matches the sign of the numerator (dividend).",
                explanation: "In C99, C++, and Java, integer division truncates toward zero. Modulo satisfies (a/b)*b + (a%b) == a. For -14 % 3, division is -4, so (-4)*3 + (-2) = -14. The result is -2.",
                option_analysis: {
                    "A": "Correct; sign matches the dividend -14.",
                    "B": "Python yields 2 (floored division), but C/Java yields -2.",
                    "C": "Incorrect remainder.",
                    "D": "Incorrect remainder."
                },
                real_world_application: "Knowing how negative remainders behave is essential in circular buffer indexing and hash table bucket allocation."
            },
            {
                question_id: 22,
                topic: "Arithmetic Operators",
                difficulty: "Easy",
                question: "What is the output of `11 // 2` in Python 3?",
                code: null,
                options: ["5.5", "5", "6", "Error"],
                correct_answer: "5",
                hint: "// denotes floor division in Python.",
                explanation: "// is the floor division operator in Python. 11 / 2 is 5.5, and flooring 5.5 yields integer 5.",
                option_analysis: {
                    "A": "5.5 is produced by standard float division '/'.",
                    "B": "Correct; floor division truncates downward.",
                    "C": "Floor does not round up.",
                    "D": "Valid Python operator."
                },
                real_world_application: "Floor division is widely used in binary search algorithms to compute midpoint indices: (low + high) // 2."
            },
            {
                question_id: 23,
                topic: "Arithmetic Operators",
                difficulty: "Medium",
                question: "In C, what happens if an integer is divided by 0 at runtime?",
                code: "int a = 5;\nint b = 0;\nint c = a / b;",
                options: [
                    "c is set to Infinity",
                    "c is set to 0",
                    "Undefined Behavior (typically triggers SIGFPE / program crash)",
                    "Compilation error"
                ],
                correct_answer: "Undefined Behavior (typically triggers SIGFPE / program crash)",
                hint: "Unlike IEEE floating-point math, integer division by zero is undefined in hardware and standards.",
                explanation: "Integer division by zero in C invokes Undefined Behavior according to ISO C standard. On standard POSIX systems, it generates a hardware trap sending signal SIGFPE and terminating the process.",
                option_analysis: {
                    "A": "Floating-point division by 0 yields Infinity; integer division does not.",
                    "B": "Hardware does not set 0.",
                    "C": "Correct; triggers undefined behavior/crash.",
                    "D": "Division by variable 0 is not caught at compile time."
                },
                real_world_application: "Guard clauses validating denominators before division prevent system crashes and Denial of Service."
            },
            {
                question_id: 24,
                topic: "Arithmetic Operators",
                difficulty: "Medium",
                question: "What is the output of the following arithmetic expression in Python: `2 ** 3 ** 2`?",
                code: null,
                options: ["64", "512", "36", "516"],
                correct_answer: "512",
                hint: "Exponentiation operator ** in Python is right-associative.",
                explanation: "The exponentiation operator ** associates from right to left. 2 ** (3 ** 2) = 2 ** 9 = 512. (Evaluating left-to-right would incorrectly yield (2**3)**2 = 64).",
                option_analysis: {
                    "A": "64 comes from incorrect left-to-right evaluation (8^2).",
                    "B": "Correct; 2^(3^2) = 2^9 = 512.",
                    "C": "Incorrect arithmetic.",
                    "D": "Incorrect arithmetic."
                },
                real_world_application: "Right-associative power operations model exponential growth and geometric scaling equations accurately."
            },
            {
                question_id: 25,
                topic: "Arithmetic Operators",
                difficulty: "Medium-Hard",
                question: "In Java, what will `System.out.println(1.0 / 0.0);` and `System.out.println(0.0 / 0.0);` output?",
                code: null,
                options: [
                    "ArithmeticException for both",
                    "Infinity and NaN",
                    "NaN and Infinity",
                    "Compilation Error"
                ],
                correct_answer: "Infinity and NaN",
                hint: "Java adheres strictly to IEEE 754 floating-point standard for double-precision calculations.",
                explanation: "IEEE 754 specifies that dividing a non-zero float by zero yields positive/negative Infinity, while dividing zero by zero yields NaN (Not a Number).",
                option_analysis: {
                    "A": "Floating-point operations do not throw ArithmeticException in Java; only integer division by 0 throws it.",
                    "B": "Correct; 1.0/0.0 is Infinity, 0.0/0.0 is NaN.",
                    "C": "Inverted.",
                    "D": "Valid standard Java."
                },
                real_world_application: "Handling IEEE 754 edge cases like NaN is critical in graphics rendering and financial charting APIs."
            },

            // --- Relational Operators (4) ---
            {
                question_id: 26,
                topic: "Relational Operators",
                difficulty: "Easy",
                question: "What is the output of the chained relational comparison in Python: `1 < 3 > 2`?",
                code: null,
                options: ["True", "False", "SyntaxError", "TypeError"],
                correct_answer: "True",
                hint: "Python chains comparisons implicitly with logical AND.",
                explanation: "Python supports chained comparisons. `1 < 3 > 2` is equivalent to `(1 < 3) and (3 > 2)`. Both conditions are true, so it evaluates to True.",
                option_analysis: {
                    "A": "Correct; both 1 < 3 and 3 > 2 are satisfied.",
                    "B": "Both parts evaluate to true.",
                    "C": "Chaining comparison operators is valid Python syntax.",
                    "D": "All operands are numbers; no type error."
                },
                real_world_application: "Chained comparisons allow clean range checks like `0 <= index < len(arr)` without verbose syntax."
            },
            {
                question_id: 27,
                topic: "Relational Operators",
                difficulty: "Medium",
                question: "In C, what is the output of the expression `int x = 5 > 4 > 3;`?",
                code: null,
                options: ["1", "0", "True", "Compilation Error"],
                correct_answer: "0",
                hint: "Relational operators associate from left to right, returning 1 or 0.",
                explanation: "Relational operators associate left-to-right. First, (5 > 4) evaluates to 1 (true). Then (1 > 3) is evaluated, which is false (0). Thus, x becomes 0.",
                option_analysis: {
                    "A": "Incorrect; C does not chain comparisons mathematically.",
                    "B": "Correct; (5 > 4) -> 1, then (1 > 3) -> 0.",
                    "C": "C stores boolean results as integers 1 and 0, not True keywords.",
                    "D": "Syntactically valid in C."
                },
                real_world_application: "Recognizing that C does not support mathematical comparison chaining prevents logic bugs in validation checks."
            },
            {
                question_id: 28,
                topic: "Relational Operators",
                difficulty: "Medium",
                question: "In Java, what does the following string comparison evaluate to?",
                code: "String s1 = \"hello\";\nString s2 = new String(\"hello\");\nSystem.out.println(s1 == s2);",
                options: ["true", "false", "Compilation Error", "NullPointerException"],
                correct_answer: "false",
                hint: "The == relational operator compares reference memory addresses, not object contents.",
                explanation: "'==' checks reference equality. s1 points to the String in the constant pool, whereas s2 points to a distinct heap object instantiated via 'new'. They have different addresses, so s1 == s2 is false.",
                option_analysis: {
                    "A": "Would be true if s1.equals(s2) were used.",
                    "B": "Correct; distinct reference addresses in memory.",
                    "C": "Valid syntax.",
                    "D": "Neither string reference is null."
                },
                real_world_application: "Comparing strings with == instead of .equals() is one of the most common candidate traps in Java technical assessments."
            },
            {
                question_id: 29,
                topic: "Relational Operators",
                difficulty: "Medium-Hard",
                question: "In JavaScript/Python conceptual comparison, what does `NaN == NaN` return?",
                code: null,
                options: ["true", "false", "undefined", "TypeError"],
                correct_answer: "false",
                hint: "By IEEE 754 definition, NaN is not equal to any value, including itself.",
                explanation: "According to IEEE 754 specification, NaN (Not a Number) compared to anything—including another NaN—using equality operators always yields false. Use isnan() to test for it.",
                option_analysis: {
                    "A": "Counter-intuitive but false by IEEE 754 specification.",
                    "B": "Correct; NaN is never equal to itself.",
                    "C": "Relational comparison yields boolean, not undefined.",
                    "D": "No type error occurs."
                },
                real_world_application: "Always use dedicated functions like `Double.isNaN()` or `math.isnan()` instead of equality checks to detect corrupted sensor or calculation outputs."
            },

            // --- Logical Operators (4) ---
            {
                question_id: 30,
                topic: "Logical Operators",
                difficulty: "Easy",
                question: "What is 'Short-Circuit Evaluation' in logical operators?",
                code: null,
                options: [
                    "Compiler throws an error if an expression is too long",
                    "Second operand is evaluated only if the first operand does not determine the result",
                    "Expressions are evaluated in reverse order",
                    "Logical operators execute on hardware accelerators"
                ],
                correct_answer: "Second operand is evaluated only if the first operand does not determine the result",
                hint: "In A && B, if A is false, what can be deduced about the entire expression without checking B?",
                explanation: "Short-circuit evaluation means stopping evaluation as soon as the outcome is certain: for AND (&&), if the first operand is false, the whole is false. For OR (||), if the first operand is true, the whole is true.",
                option_analysis: {
                    "A": "Has nothing to do with code length.",
                    "B": "Correct; skips evaluating subsequent operands when the outcome is predetermined.",
                    "C": "Evaluation remains strictly left-to-right.",
                    "D": "Standard CPU logic."
                },
                real_world_application: "Used universally to prevent crashes: `if (ptr != NULL && ptr->value > 0)` avoids null pointer dereferences."
            },
            {
                question_id: 31,
                topic: "Logical Operators",
                difficulty: "Medium",
                question: "What is the output of the following C code snippet?",
                code: "#include <stdio.h>\nint main() {\n    int a = 0, b = 5;\n    if (a && ++b)\n        printf(\"True \");\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
                options: ["True 0 6", "0 5", "0 6", "True 0 5"],
                correct_answer: "0 5",
                hint: "Because 'a' is 0 (false), does the right side of && ever execute?",
                explanation: "Due to short-circuiting of the logical AND operator (&&), the left side 'a' is 0 (false), so '++b' is never evaluated. b remains 5, and the if-branch is skipped. Output is '0 5'.",
                option_analysis: {
                    "A": "If condition was false.",
                    "B": "Correct; ++b is skipped due to short circuit, leaving b as 5.",
                    "C": "Assumes b was incremented, but short-circuiting prevented it.",
                    "D": "If branch did not pass."
                },
                real_world_application: "Understanding short-circuit side effects prevents subtle bugs when functions with side effects are placed inside conditional expressions."
            },
            {
                question_id: 32,
                topic: "Logical Operators",
                difficulty: "Medium",
                question: "What will this Python expression evaluate to?",
                code: "x = \"\" or \"Default\"\nprint(x)",
                options: ["\"\"", "\"Default\"", "True", "False"],
                correct_answer: "\"Default\"",
                hint: "Python logical operators return the value of the operand that determined the result, not necessarily a boolean.",
                explanation: "In Python, 'or' returns the first truthy operand or the last operand if all are falsy. An empty string \"\" is falsy, so Python continues and returns \"Default\".",
                option_analysis: {
                    "A": "Falsy value, skipped by 'or'.",
                    "B": "Correct; returns the deciding truthy operand.",
                    "C": "Python does not cast the output to boolean True.",
                    "D": "\"Default\" is truthy."
                },
                real_world_application: "Commonly used for concise default parameter initialization in Python: `config = user_config or default_config`."
            },
            {
                question_id: 33,
                topic: "Logical Operators",
                difficulty: "Medium-Hard",
                question: "What is the output of this C code testing logical OR short-circuiting?",
                code: "#include <stdio.h>\nint main() {\n    int x = 1, y = 1;\n    int res = (x || ++y);\n    printf(\"%d %d %d\", x, y, res);\n    return 0;\n}",
                options: ["1 2 1", "1 1 1", "1 1 0", "1 2 0"],
                correct_answer: "1 1 1",
                hint: "In logical OR (||), if the first operand is non-zero (true), the second operand is not evaluated.",
                explanation: "x is 1 (true). Since the left side of || is true, the entire expression is known to be true (res = 1). The right side ++y is never evaluated, leaving y = 1.",
                option_analysis: {
                    "A": "Assumes y was incremented.",
                    "B": "Correct; x=1, y=1 (short-circuited), res=1.",
                    "C": "res is true (1), not 0.",
                    "D": "Both y and res are incorrect here."
                },
                real_world_application: "Guards against unnecessary expensive database lookups: `cache_hit || query_remote_database()`."
            },

            // --- Assignment Operators (3) ---
            {
                question_id: 34,
                topic: "Assignment Operators",
                difficulty: "Easy",
                question: "What is the associativity of assignment operators (such as `=`, `+=`, `*=`)?",
                code: null,
                options: ["Left to Right", "Right to Left", "Non-associative", "Depends on compiler"],
                correct_answer: "Right to Left",
                hint: "Allows expressions like `a = b = c = 10;` to assign from the rightmost variable outward.",
                explanation: "Assignment operators associate from Right to Left. In `a = b = c = 10`, c is assigned 10 first, then b is assigned c's result, and finally a is assigned.",
                option_analysis: {
                    "A": "Arithmetic operators associate Left to Right, but assignment does not.",
                    "B": "Correct; Right to Left allows daisy-chained assignments.",
                    "C": "Assignment operators are fully associative.",
                    "D": "Standardized across all programming languages."
                },
                real_world_application: "Enables multiple variable resets in a single concise line during state reinitialization."
            },
            {
                question_id: 35,
                topic: "Assignment Operators",
                difficulty: "Medium",
                question: "In Java, why does `byte b = 5; b += 2;` compile successfully, while `b = b + 2;` causes a compilation error?",
                code: null,
                options: [
                    "+= is faster in bytecode",
                    "Compound assignment operators include an implicit cast to the type of the left operand",
                    "Java automatically promotes literals only for +=",
                    "b + 2 yields a byte automatically"
                ],
                correct_answer: "Compound assignment operators include an implicit cast to the type of the left operand",
                hint: "E1 op= E2 is equivalent to E1 = (T)(E1 op E2).",
                explanation: "Java language specification states that compound assignment `E1 += E2` automatically inserts an implicit cast: `b = (byte)(b + 2)`. In contrast, `b + 2` promotes b to an int, so assigning it back to a byte is an illegal narrowing conversion.",
                option_analysis: {
                    "A": "Performance is not the syntactic reason.",
                    "B": "Correct; JLS mandates implicit casting for compound assignments.",
                    "C": "Literals are treated normally.",
                    "D": "b + 2 yields an int due to binary numeric promotion."
                },
                real_world_application: "Using compound operators avoids cluttering code with explicit type-casting boilerplate in byte-manipulation tasks."
            },
            {
                question_id: 36,
                topic: "Assignment Operators",
                difficulty: "Medium-Hard",
                question: "What will be printed by the following C program?",
                code: "#include <stdio.h>\nint main() {\n    int a = 10;\n    a += (a = 4);\n    printf(\"%d\", a);\n    return 0;\n}",
                options: [
                    "8",
                    "14 (or undefined/unspecified depending on C standard)",
                    "4",
                    "Compilation Error"
                ],
                correct_answer: "14 (or undefined/unspecified depending on C standard)",
                hint: "Modifying a variable multiple times within a single expression without a sequence point invokes unsequenced modification rules in C.",
                explanation: "In C99 and earlier, modifying 'a' multiple times between sequence points is Undefined Behavior. In C11/C17, it is unsequenced. Most modern compilers evaluate left lvalue 'a' (10) + right side (4) = 14, but relying on this is dangerous code.",
                option_analysis: {
                    "A": "Assumes a was updated to 4 on both sides.",
                    "B": "Correct; evaluates to 14 or triggers unsequenced modification warning.",
                    "C": "Simple overwrite ignored.",
                    "D": "Compilers warn, but compile it."
                },
                real_world_application: "Avoid modifying and reading the same scalar variable in single compound statements to prevent compiler optimization mismatches."
            },

            // --- Increment and Decrement Operators (5) ---
            {
                question_id: 37,
                topic: "Increment and Decrement",
                difficulty: "Easy",
                question: "What is the primary difference between pre-increment (`++x`) and post-increment (`x++`)?",
                code: null,
                options: [
                    "Pre-increment is faster; post-increment is slower",
                    "Pre-increment increments value first then yields it; Post-increment yields current value first then increments",
                    "Post-increment can only be applied to constants",
                    "No difference in output ever"
                ],
                correct_answer: "Pre-increment increments value first then yields it; Post-increment yields current value first then increments",
                hint: "Think about which action happens 'pre' (before) expression evaluation.",
                explanation: "Pre-increment (++x) modifies the variable first and evaluates to the new value. Post-increment (x++) evaluates to the current original value first and updates memory afterwards.",
                option_analysis: {
                    "A": "In modern compilers with primitive types, execution speeds are identical.",
                    "B": "Correct; order of value-yielding vs increment.",
                    "C": "Increment operators cannot be applied to constants.",
                    "D": "They produce different values inside larger expressions."
                },
                real_world_application: "Array iteration loops and buffer pointers rely heavily on `buffer[index++]` to consume elements sequentially."
            },
            {
                question_id: 38,
                topic: "Increment and Decrement",
                difficulty: "Medium",
                question: "What is the output of the following C code snippet?",
                code: "#include <stdio.h>\nint main() {\n    int x = 5;\n    int y = x++ + ++x;\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
                options: [
                    "7 12 (or undefined behavior)",
                    "6 11",
                    "7 13",
                    "Compilation error"
                ],
                correct_answer: "7 12 (or undefined behavior)",
                hint: "Modifying 'x' twice within a single unsequenced expression leads to undefined behavior according to the C standard.",
                explanation: "Evaluating `x++ + ++x` modifies 'x' twice without an intervening sequence point. This is classic Undefined Behavior in C. Common GCC outputs yield x=7, y=12 (5 + 7), but it cannot be relied upon across compilers.",
                option_analysis: {
                    "A": "Correct; undefined behavior in C standard, commonly resolving to 7 12 on GCC.",
                    "B": "Incorrect increment count.",
                    "C": "Alternative evaluation order.",
                    "D": "Compilers emit a warning but compile the binary."
                },
                real_world_application: "Technical placement tests test this specifically to ensure candidates avoid unsequenced side-effect anti-patterns in production."
            },
            {
                question_id: 39,
                topic: "Increment and Decrement",
                difficulty: "Medium",
                question: "In Java, what will this code print?",
                code: "int i = 0;\ni = i++;\nSystem.out.println(i);",
                options: ["1", "0", "Compilation Error", "Undefined Behavior"],
                correct_answer: "0",
                hint: "Unlike C, Java evaluation order is strictly defined: right-hand side post-increment evaluates to the old value first.",
                explanation: "In Java, evaluation order is strictly defined from left to right. i++ evaluates to 0 (old value), schedules i to become 1, and then the assignment '=' overwrites i with the evaluated result (0). Thus, i ends up as 0.",
                option_analysis: {
                    "A": "1 is overwritten by the assignment of the evaluated old value 0.",
                    "B": "Correct; i remains 0 in Java.",
                    "C": "Valid syntax.",
                    "D": "Java has NO undefined behavior; semantics are strictly specified by the JLS."
                },
                real_world_application: "Demonstrates that Java eliminates hardware-dependent undefined behaviors present in older C standards."
            },
            {
                question_id: 40,
                topic: "Increment and Decrement",
                difficulty: "Medium",
                question: "In Python, why does the syntax `x++` or `++x` behave differently than in C/Java?",
                code: "x = 5\n++x\nprint(x)",
                options: [
                    "Prints 6 because ++x increments x",
                    "Prints 5 because ++ is parsed as two unary positive operators (+ +x)",
                    "SyntaxError: Python does not have unary +",
                    "Prints 7"
                ],
                correct_answer: "Prints 5 because ++ is parsed as two unary positive operators (+ +x)",
                hint: "Python has no increment operators (++, --). Double plus signs are parsed as positive signs.",
                explanation: "Python does not have ++ or -- operators. The expression `++x` is parsed as `+(+(x))`, which evaluates to positive 5 without mutating x. Writing `x++` raises an immediate SyntaxError.",
                option_analysis: {
                    "A": "x is not incremented.",
                    "B": "Correct; parsed as unary + applied twice, leaving x unchanged.",
                    "C": "Python supports unary + operator.",
                    "D": "Arithmetic does not increase value."
                },
                real_world_application: "Prevents developers transitioning from C/Java to Python from writing ineffective `++counter` statements."
            },
            {
                question_id: 41,
                topic: "Increment and Decrement",
                difficulty: "Medium-Hard",
                question: "What is the output of the following Java snippet?",
                code: "int a = 1;\nint b = a++ + a++ * --a;\nSystem.out.println(\"b=\" + b + \", a=\" + a);",
                options: [
                    "b=5, a=2",
                    "b=6, a=2",
                    "b=4, a=2",
                    "b=5, a=3"
                ],
                correct_answer: "b=5, a=2",
                hint: "Trace sequentially from left to right: first a++ (uses 1, a becomes 2), second a++ (uses 2, a becomes 3), then --a (decrements to 2, uses 2). Multiplication takes precedence.",
                explanation: "1) Left operand: a++ uses 1, a becomes 2. 2) Next a++ uses 2, a becomes 3. 3) Next --a decrements a to 2 and yields 2. 4) Multiplicative precedence executes: 2 * 2 = 4. 5) Addition executes: 1 + 4 = 5. Final values: b=5, a=2.",
                option_analysis: {
                    "A": "Correct; b=5, a=2.",
                    "B": "Incorrect multiplication handling.",
                    "C": "Incorrect trace of operands.",
                    "D": "Final a was decremented by --a back to 2."
                },
                real_world_application: "Precision code tracing under placement pressure is a hallmark test of algorithmic mental modeling."
            },

            // --- Operator Precedence (5) ---
            {
                question_id: 42,
                topic: "Operator Precedence",
                difficulty: "Easy",
                question: "Which of the following operators has the HIGHEST precedence in C and C++?",
                code: null,
                options: [
                    "Addition (`+`)",
                    "Multiplication (`*`)",
                    "Logical AND (`&&`)",
                    "Postfix increment (`++`)"
                ],
                correct_answer: "Postfix increment (`++`)",
                hint: "Parentheses and postfix operators reside at the very top of operator precedence tables.",
                explanation: "Postfix operators (such as postfix `++`, `--`, array subscripting `[]`, function calls `()`) share level 1 (highest priority) just below primary groupings, above arithmetic and logical operations.",
                option_analysis: {
                    "A": "Additive operators reside near middle precedence.",
                    "B": "Multiplicative is below postfix.",
                    "C": "Logical operators have very low precedence.",
                    "D": "Correct; Postfix ++ has higher precedence than arithmetic and logical operators."
                },
                real_world_application: "Avoids mistaken pointer increments: `*p++` retrieves *p first, then increments pointer address p."
            },
            {
                question_id: 43,
                topic: "Operator Precedence",
                difficulty: "Medium",
                question: "What is the output of `int x = 2 + 3 * 4 > 10;` in C and Java?",
                code: null,
                options: ["1 (true)", "0 (false)", "20", "Compilation Error"],
                correct_answer: "1 (true)",
                hint: "Multiplication precedes Addition, which precedes Relational Greater Than.",
                explanation: "Precedence order: 1) Multiplication: 3 * 4 = 12. 2) Addition: 2 + 12 = 14. 3) Relational: 14 > 10 is true (1 in C, true in Java).",
                option_analysis: {
                    "A": "Correct; 14 > 10 evaluates to 1/true.",
                    "B": "14 is greater than 10.",
                    "C": "The expression ends in a boolean/relational comparison, not numeric 20.",
                    "D": "Valid syntax across languages."
                },
                real_world_application: "Expression compilers rely on precedence parsing tables to construct Abstract Syntax Trees (ASTs)."
            },
            {
                question_id: 44,
                topic: "Operator Precedence",
                difficulty: "Medium",
                question: "What is the common placement trap in the following C code snippet?",
                code: "if (flags & 1 == 0) {\n    // do something\n}",
                options: [
                    "Syntax Error",
                    "The equality operator `==` has higher precedence than bitwise `&`, so it evaluates as `flags & (1 == 0)`",
                    "Bitwise & cannot be used in if statements",
                    "The condition evaluates as `(flags & 1) == 0` automatically"
                ],
                correct_answer: "The equality operator `==` has higher precedence than bitwise `&`, so it evaluates as `flags & (1 == 0)`",
                hint: "Relational/Equality operators bind tighter than bitwise operators (&, |, ^).",
                explanation: "Equality `==` binds tighter than bitwise AND `&`. Therefore, `flags & 1 == 0` evaluates as `flags & (1 == 0)` -> `flags & 0`, which is always 0 (false)! Parentheses are required: `(flags & 1) == 0`.",
                option_analysis: {
                    "A": "Code compiles with zero syntax errors.",
                    "B": "Correct; == has higher precedence than &, leading to logic bugs.",
                    "C": "Bitwise & is completely valid in boolean conditions.",
                    "D": "It does not group that way without parentheses."
                },
                real_world_application: "This exact precedence trap caused critical flaws in the Linux kernel and network drivers before static analysis linters were mandated."
            },
            {
                question_id: 45,
                topic: "Operator Precedence",
                difficulty: "Medium-Hard",
                question: "What is the output of the following C expression?",
                code: "int a = 1, b = 2, c = 3;\nint res = a + b * c == 7 && c - b > 0;\nprintf(\"%d\", res);",
                options: ["1", "0", "7", "Compilation Error"],
                correct_answer: "1",
                hint: "Precedence ladder: Multiplicative (*) -> Additive (+, -) -> Relational (>) -> Equality (==) -> Logical AND (&&).",
                explanation: "1) b * c = 6. 2) a + 6 = 7. 3) c - b = 1. 4) 7 == 7 is 1 (true). 5) 1 > 0 is 1 (true). 6) 1 && 1 evaluates to 1.",
                option_analysis: {
                    "A": "Correct; all sub-expressions evaluate to true, yielding 1.",
                    "B": "Incorrect evaluation.",
                    "C": "Result is logical boolean 1, not arithmetic 7.",
                    "D": "Valid C code."
                },
                real_world_application: "Writing clean conditions with explicit parentheses clarifies intent for team code reviews."
            },
            {
                question_id: 46,
                topic: "Operator Precedence",
                difficulty: "Hard",
                question: "Between Bitwise XOR (`^`), Bitwise AND (`&`), and Bitwise OR (`|`), what is their relative precedence from highest to lowest?",
                code: null,
                options: [
                    "`&` > `^` > `|`",
                    "`|` > `^` > `&`",
                    "`^` > `&` > `|`",
                    "They all share equal precedence"
                ],
                correct_answer: "`&` > `^` > `|`",
                hint: "Think of AND as multiplication and OR as addition; XOR sits directly between them.",
                explanation: "In C, C++, and Java, bitwise precedence mirrors logic: Bitwise AND (`&`) is highest, followed by Bitwise XOR (`^`), followed by Bitwise OR (`|`).",
                option_analysis: {
                    "A": "Correct; AND binds tighter than XOR, which binds tighter than OR.",
                    "B": "Reversed order.",
                    "C": "AND is higher than XOR.",
                    "D": "They reside at three distinct precedence levels."
                },
                real_world_application: "Manipulating hardware register bitmasks without parentheses requires exact knowledge of bitwise operator priority."
            },

            // --- Operator Associativity (4) ---
            {
                question_id: 47,
                topic: "Operator Associativity",
                difficulty: "Easy",
                question: "Which of the following operators associates from RIGHT TO LEFT?",
                code: null,
                options: [
                    "Arithmetic Addition (`+`)",
                    "Logical OR (`||`)",
                    "Unary NOT (`!`) and Unary Cast",
                    "Relational Less Than (`<`)"
                ],
                correct_answer: "Unary NOT (`!`) and Unary Cast",
                hint: "Unary operators, ternary operators, and assignment operators associate right-to-left.",
                explanation: "Unary operators (such as `!`, `~`, `++`, `--`, unary `-`, type casts `(type)`) and assignment operators have right-to-left associativity. Binary arithmetic and relational operators associate left-to-right.",
                option_analysis: {
                    "A": "Associates Left to Right.",
                    "B": "Associates Left to Right.",
                    "C": "Correct; Unary operators associate Right to Left.",
                    "D": "Associates Left to Right."
                },
                real_world_application: "Correctly chaining pointers and dereferencing: `*++ptr` applies rightmost increment first, then dereference."
            },
            {
                question_id: 48,
                topic: "Operator Associativity",
                difficulty: "Medium",
                question: "What is the evaluated output of the expression `100 / 10 / 2` in C/Java due to associativity?",
                code: null,
                options: ["20", "5", "50", "0"],
                correct_answer: "5",
                hint: "Division associates from Left to Right: (100 / 10) / 2.",
                explanation: "Multiplicative operators associate Left to Right. Thus, `100 / 10 / 2` is evaluated as `(100 / 10) / 2` = `10 / 2` = 5. (If it associated Right to Left, it would be 100 / 5 = 20).",
                option_analysis: {
                    "A": "20 would occur if division were right-associative (100 / (10 / 2)).",
                    "B": "Correct; (100 / 10) / 2 = 5.",
                    "C": "Incorrect division.",
                    "D": "Not zero."
                },
                real_world_application: "Understanding left-associativity prevents calculation bugs in financial unit-rate conversions."
            },
            {
                question_id: 49,
                topic: "Operator Associativity",
                difficulty: "Medium",
                question: "What is the output of nested conditional ternary expressions in C/Java: `int x = 1 ? 0 ? 10 : 20 : 30;`?",
                code: null,
                options: ["10", "20", "30", "Compilation Error"],
                correct_answer: "20",
                hint: "The conditional ternary operator (? :) associates from Right to Left.",
                explanation: "The ternary operator associates Right to Left: `1 ? (0 ? 10 : 20) : 30`. The outer condition is 1 (true), so it evaluates the middle expression `0 ? 10 : 20`. Since 0 is false, it returns 20.",
                option_analysis: {
                    "A": "Inner condition 0 is false, so 10 is bypassed.",
                    "B": "Correct; evaluated as 1 ? (0 ? 10 : 20) : 30 -> 20.",
                    "C": "Outer condition is 1 (true), so 30 is bypassed.",
                    "D": "Completely valid nested ternary syntax."
                },
                real_world_application: "Nested ternaries map concise decision tables, though parentheses are encouraged for readability."
            },
            {
                question_id: 50,
                topic: "Operator Associativity",
                difficulty: "Medium-Hard",
                question: "In C, what does the expression `*p++` do, considering operator precedence and associativity?",
                code: null,
                options: [
                    "Increments the value pointed to by p, then dereferences it",
                    "Dereferences the original pointer address p, and increments the pointer address p",
                    "Causes a compile error because two unary operators cannot touch",
                    "Dereferences and increments both pointer and value"
                ],
                correct_answer: "Dereferences the original pointer address p, and increments the pointer address p",
                hint: "Postfix ++ has higher precedence than unary *. Postfix evaluates the current value first, then increments.",
                explanation: "Postfix ++ has higher precedence than dereference *. Thus, `*(p++)` is evaluated. Postfix yields the current address of p for dereferencing `*`, and then increments the pointer p to point to the next memory address.",
                option_analysis: {
                    "A": "That behavior corresponds to `++(*p)` or `(*p)++`.",
                    "B": "Correct; yields current *p and advances pointer p.",
                    "C": "Valid and ubiquitous idiom in C.",
                    "D": "Only the pointer address increments, not the underlying value."
                },
                real_world_application: "This is the universal standard C idiom for traversing strings and copying buffers: `while (*dest++ = *src++);`."
            }
        ];


const questionsData = questionsRaw.map(q => {
    // Find the correct answer letter
    const correctIdx = q.options.indexOf(q.correct_answer);
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[correctIdx] || 'A';
    
    // Format options as an object
    const optionsObj = {};
    q.options.forEach((opt, idx) => {
        optionsObj[letters[idx]] = opt;
    });

    // Extract language from question text if possible
    let lang = "General";
    if (q.question.includes("in C ")) lang = "C";
    else if (q.question.includes("in C++")) lang = "C++";
    else if (q.question.includes("in Java")) lang = "Java";
    else if (q.question.includes("in Python")) lang = "Python";
    
    // Combine explanation and option analysis
    let fullExp = q.explanation;
    if (q.option_analysis) {
        fullExp += "\n\nAnalysis: ";
        for (const [key, val] of Object.entries(q.option_analysis)) {
            fullExp += `\n${key}: ${val}`;
        }
    }

    return {
        id: q.question_id,
        topic: q.topic,
        difficulty: q.difficulty,
        language: lang,
        question: q.question,
        code: q.code || "",
        options: optionsObj,
        correctAnswer: correctLetter,
        explanation: fullExp,
        realWorldApplication: q.real_world_application || "",
        examTrap: q.hint || "",
        quickTrick: "Review the explanation for detailed breakdowns."
    };
});

// Global State
let currentMode = 'practice'; // 'practice', 'exam', 'review'
let currentIndex = 0;
let userAnswers = new Array(questionsData.length).fill(null);
let markedQuestions = new Set();
let timerInterval = null;
let timeRemaining = 30 * 60; // 30 minutes in seconds
let waterLevel = 0;

// DOM Elements
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

const btnPractice = document.getElementById('btn-practice');
const btnExam = document.getElementById('btn-exam');
const btnReview = document.getElementById('btn-review');

const drawerToggle = document.getElementById('drawer-toggle');
const closeDrawerBtn = document.getElementById('close-drawer');
const questionDrawer = document.getElementById('question-drawer');
const gridContainer = document.getElementById('grid-container');

const qNumber = document.getElementById('question-number');
const badgeTopic = document.getElementById('badge-topic');
const badgeDiff = document.getElementById('badge-difficulty');
const badgeLang = document.getElementById('badge-language');
const qText = document.getElementById('question-text');
const codeContainer = document.getElementById('code-container');
const codeBlock = document.getElementById('code-block');
const timerDisplay = document.getElementById('exam-timer');

const optionsGrid = document.getElementById('options-grid');
const optionBtns = document.querySelectorAll('.option-btn');

const feedbackContainer = document.getElementById('feedback-container');
const feedbackHeader = document.getElementById('feedback-header');
const feedbackTitle = document.getElementById('feedback-title');
const expText = document.getElementById('explanation-text');
const trapText = document.getElementById('trap-text');
const trickText = document.getElementById('trick-text');
const appText = document.getElementById('app-text');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSkip = document.getElementById('btn-skip');
const btnMark = document.getElementById('btn-mark');
const btnSubmitExam = document.getElementById('btn-submit-exam');
const currentScoreDisplay = document.getElementById('current-score');

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  } else {
    body.removeAttribute('data-theme');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  }
}

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  }
});

// Initialize Grid Drawer
function initGrid() {
  gridContainer.innerHTML = '';
  questionsData.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.textContent = index + 1;
    btn.addEventListener('click', () => {
      currentIndex = index;
      loadQuestion();
      questionDrawer.classList.remove('open');
    });
    gridContainer.appendChild(btn);
  });
}

function updateGridStyles() {
  const btns = gridContainer.children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = 'grid-btn';
    if (i === currentIndex) btns[i].classList.add('active');
    
    if (currentMode === 'review') {
      if (userAnswers[i] === questionsData[i].correctAnswer) {
        btns[i].classList.add('answered');
      } else if (userAnswers[i] !== null) {
        btns[i].classList.add('incorrect-review');
      } else {
        btns[i].classList.add('skipped');
      }
    } else {
      if (userAnswers[i] !== null) {
        btns[i].classList.add('answered');
      }
    }
    
    if (markedQuestions.has(i)) {
      btns[i].classList.add('marked');
    }
  }
}

drawerToggle.addEventListener('click', () => questionDrawer.classList.add('open'));
closeDrawerBtn.addEventListener('click', () => questionDrawer.classList.remove('open'));

// Load Question
function loadQuestion() {
  const q = questionsData[currentIndex];
  qNumber.textContent = `Question ${currentIndex + 1} of ${questionsData.length}`;
  badgeTopic.textContent = q.topic;
  badgeDiff.textContent = q.difficulty;
  badgeLang.textContent = q.language;
  qText.textContent = q.question;
  
  if (q.code) {
    codeContainer.classList.remove('hidden');
    codeBlock.textContent = q.code;
  } else {
    codeContainer.classList.add('hidden');
  }

  // Populate options
  optionBtns.forEach(btn => {
    const opt = btn.getAttribute('data-opt');
    const textSpan = btn.querySelector('.opt-text');
    textSpan.textContent = q.options[opt];
    btn.className = 'option-btn'; // reset classes
    btn.disabled = false;
  });

  // Update Mark status
  if (markedQuestions.has(currentIndex)) {
    btnMark.classList.add('is-marked');
    btnMark.textContent = 'Unmark';
  } else {
    btnMark.classList.remove('is-marked');
    btnMark.textContent = 'Mark for Review';
  }

  // Restore answer state if answered
  if (userAnswers[currentIndex] !== null) {
    applyAnswerState(userAnswers[currentIndex]);
  } else {
    feedbackContainer.classList.add('hidden');
  }

  // Manage Nav Buttons
  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === questionsData.length - 1;
  
  if (currentMode === 'exam' && currentIndex === questionsData.length - 1) {
    btnNext.classList.add('hidden');
    btnSubmitExam.classList.remove('hidden');
  } else {
    btnNext.classList.remove('hidden');
    btnSubmitExam.classList.add('hidden');
  }

  updateGridStyles();
}

function applyAnswerState(selectedOpt) {
  const q = questionsData[currentIndex];
  
  optionBtns.forEach(btn => {
    const opt = btn.getAttribute('data-opt');
    
    if (currentMode === 'practice' || currentMode === 'review') {
      btn.disabled = true;
      if (opt === q.correctAnswer) {
        btn.classList.add('correct');
      } else if (opt === selectedOpt && selectedOpt !== q.correctAnswer) {
        btn.classList.add('incorrect');
      }
    } else if (currentMode === 'exam') {
      if (opt === selectedOpt) {
        btn.classList.add('selected');
      }
    }
  });

  if (currentMode === 'practice' || currentMode === 'review') {
    showFeedback(selectedOpt === q.correctAnswer);
  }
}

function showFeedback(isCorrect) {
  const q = questionsData[currentIndex];
  feedbackContainer.classList.remove('hidden');
  
  if (userAnswers[currentIndex] === null) {
    // Skipped in review mode
    feedbackHeader.className = 'feedback-header info';
    feedbackTitle.textContent = `Skipped. Correct Answer: ${q.correctAnswer}`;
  } else if (isCorrect) {
    feedbackHeader.className = 'feedback-header success';
    feedbackTitle.textContent = 'Correct!';
  } else {
    feedbackHeader.className = 'feedback-header error';
    feedbackTitle.textContent = `Incorrect. Correct Answer: ${q.correctAnswer}`;
  }

  expText.textContent = q.explanation;
  trapText.textContent = q.examTrap;
  trickText.textContent = q.quickTrick;
  appText.textContent = q.realWorldApplication;
}

// Option Clicking
optionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentMode === 'review') return;
    if (currentMode === 'practice' && userAnswers[currentIndex] !== null) return;

    const opt = btn.getAttribute('data-opt');
    userAnswers[currentIndex] = opt;
    
    if (currentMode === 'practice') {
      const isCorrect = opt === questionsData[currentIndex].correctAnswer;
      if (isCorrect) {
        waterLevel = Math.min(questionsData.length, waterLevel + 1);
        updateWaterBar('pour');
        updateScoreDisplay();
      } else {
        waterLevel = Math.max(0, waterLevel - 1);
        updateWaterBar('leak');
      }
    } else if (currentMode === 'exam') {
      // Act as a normal progress bar in Exam mode
      waterLevel = userAnswers.filter(a => a !== null).length;
      updateWaterBar('pour');
    }
    
    applyAnswerState(opt);
    updateGridStyles();
  });
});

function updateScoreDisplay() {
  let score = 0;
  for (let i = 0; i < questionsData.length; i++) {
    if (userAnswers[i] === questionsData[i].correctAnswer) score++;
  }
  currentScoreDisplay.textContent = score;
}

function updateWaterBar(action) {
  const waterBar = document.getElementById('water-bar');
  const pourStream = document.getElementById('pour-stream');
  const maxWater = questionsData.length;
  const pct = Math.min(100, Math.max(0, (waterLevel / maxWater) * 100));
  
  if (waterBar) {
    waterBar.style.height = `${pct}%`;
    
    if (action === 'pour' && pourStream) {
      pourStream.classList.remove('pouring');
      void pourStream.offsetWidth; // trigger reflow
      pourStream.classList.add('pouring');
    } else if (action === 'leak') {
      createLeakDrops();
    }
  }
}

function createLeakDrops() {
  const leakContainer = document.getElementById('leak-container');
  if (!leakContainer) return;
  
  for (let i = 0; i < 3; i++) {
    const drop = document.createElement('div');
    drop.className = 'leak-drop';
    drop.style.left = `calc(50% - 6px + ${Math.random() * 8 - 4}px)`;
    drop.style.animationDelay = `${Math.random() * 0.2}s`;
    leakContainer.appendChild(drop);
    setTimeout(() => {
      if (leakContainer.contains(drop)) drop.remove();
    }, 700);
  }
}

// Navigation Actions
btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) { currentIndex--; loadQuestion(); }
});
btnNext.addEventListener('click', () => {
  if (currentIndex < questionsData.length - 1) { currentIndex++; loadQuestion(); }
});
btnSkip.addEventListener('click', () => {
  if (currentMode === 'practice' || currentMode === 'exam') {
    if (currentIndex < questionsData.length - 1) { currentIndex++; loadQuestion(); }
  }
});
btnMark.addEventListener('click', () => {
  if (markedQuestions.has(currentIndex)) {
    markedQuestions.delete(currentIndex);
  } else {
    markedQuestions.add(currentIndex);
  }
  loadQuestion();
});

// Mode Switching
function switchMode(mode) {
  currentMode = mode;
  
  // Reset States if changing to Exam/Practice
  if (mode !== 'review') {
    userAnswers.fill(null);
    markedQuestions.clear();
    currentIndex = 0;
    waterLevel = 0;
    updateWaterBar();
    updateScoreDisplay();
  }

  btnPractice.classList.toggle('active', mode === 'practice');
  btnExam.classList.toggle('active', mode === 'exam');
  btnReview.classList.toggle('active', mode === 'review');

  if (mode === 'exam') {
    timerDisplay.classList.remove('hidden');
    startTimer();
    feedbackContainer.classList.add('hidden');
  } else {
    timerDisplay.classList.add('hidden');
    clearInterval(timerInterval);
  }

  if (mode === 'review') {
    btnReview.disabled = false;
  } else {
    btnReview.disabled = true; // Review only available after exam
  }

  loadQuestion();
}

btnPractice.addEventListener('click', () => {
  if (confirm("Switch to Practice Mode? Progress will be reset.")) switchMode('practice');
});
btnExam.addEventListener('click', () => {
  if (confirm("Start Exam Mode? 30 minute timer will begin.")) switchMode('exam');
});
btnReview.addEventListener('click', () => {
  // Only accessible programmatically after exam submission
});
btnReview.disabled = true;

// Timer Logic
function startTimer() {
  clearInterval(timerInterval);
  timeRemaining = 30 * 60;
  updateTimerDisplay();
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
  const s = (timeRemaining % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${m}:${s}`;
  if (timeRemaining < 300) {
    timerDisplay.style.color = 'var(--danger-color)';
  } else {
    timerDisplay.style.color = 'var(--text-primary)';
  }
}

// Exam Submission
btnSubmitExam.addEventListener('click', () => {
  if (confirm("Are you sure you want to submit the exam?")) {
    submitExam();
  }
});

function submitExam() {
  clearInterval(timerInterval);
  updateScoreDisplay();
  
  let correct = 0, incorrect = 0, skipped = 0;
  const diffStats = { Easy: {c:0, t:0}, Medium: {c:0, t:0}, Hard: {c:0, t:0} };
  const topicStats = {};

  questionsData.forEach((q, i) => {
    const ans = userAnswers[i];
    diffStats[q.difficulty].t++;
    
    if (!topicStats[q.topic]) topicStats[q.topic] = {c:0, t:0};
    topicStats[q.topic].t++;

    if (ans === null) {
      skipped++;
    } else if (ans === q.correctAnswer) {
      correct++;
      diffStats[q.difficulty].c++;
      topicStats[q.topic].c++;
    } else {
      incorrect++;
    }
  });

  const percentage = Math.round((correct / questionsData.length) * 100);
  
  // Populate Modal
  document.getElementById('res-score').textContent = `${correct} / ${questionsData.length}`;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-incorrect').textContent = incorrect;
  document.getElementById('res-skipped').textContent = skipped;
  document.getElementById('score-percentage').textContent = `${percentage}%`;
  
  const circlePath = document.getElementById('score-circle-path');
  circlePath.style.strokeDasharray = `${percentage}, 100`;
  
  const perfLabel = document.getElementById('performance-label');
  if (percentage >= 80) {
    perfLabel.textContent = "Excellent Performance! MNC Ready.";
    circlePath.style.stroke = "var(--success-color)";
  } else if (percentage >= 60) {
    perfLabel.textContent = "Good, but needs more review.";
    circlePath.style.stroke = "var(--warning-color)";
  } else {
    perfLabel.textContent = "Needs Improvement. Practice more.";
    circlePath.style.stroke = "var(--danger-color)";
  }

  // Difficulty Stats
  const diffContainer = document.getElementById('diff-stats');
  diffContainer.innerHTML = '';
  ['Easy', 'Medium', 'Hard'].forEach(level => {
    const d = diffStats[level];
    const pct = d.t === 0 ? 0 : Math.round((d.c / d.t) * 100);
    diffContainer.innerHTML += `
      <div class="diff-bar">
        <span class="diff-label">${level}</span>
        <div class="diff-track"><div class="diff-fill" style="width: ${pct}%"></div></div>
        <span class="diff-pct">${pct}%</span>
      </div>
    `;
  });

  // Weak Topics
  const weakTopicsList = document.getElementById('weak-topics-list');
  weakTopicsList.innerHTML = '';
  const sortedTopics = Object.keys(topicStats).map(t => ({
    topic: t,
    pct: Math.round((topicStats[t].c / topicStats[t].t) * 100)
  })).sort((a, b) => a.pct - b.pct).slice(0, 3);
  
  sortedTopics.forEach(st => {
    weakTopicsList.innerHTML += `<li>${st.topic} (${st.pct}%)</li>`;
  });

  document.getElementById('results-modal').classList.add('open');
}

// Modal Actions
document.getElementById('btn-review-mistakes').addEventListener('click', () => {
  document.getElementById('results-modal').classList.remove('open');
  currentMode = 'review';
  btnPractice.classList.remove('active');
  btnExam.classList.remove('active');
  btnReview.classList.add('active');
  btnReview.disabled = false;
  timerDisplay.classList.add('hidden');
  
  // Jump to first incorrect/skipped
  currentIndex = userAnswers.findIndex((ans, i) => ans !== questionsData[i].correctAnswer);
  if (currentIndex === -1) currentIndex = 0;
  
  loadQuestion();
});

document.getElementById('btn-restart').addEventListener('click', () => {
  document.getElementById('results-modal').classList.remove('open');
  switchMode('practice');
});

// Initialization Call
initTheme();
initGrid();
loadQuestion();
