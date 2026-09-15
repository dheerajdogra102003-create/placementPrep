// Variables & Data Types - 50 Placement MCQs
const questionsData = [
  {
    "id": 1,
    "question": "Which of the following is an INVALID variable identifier in C and C++?",
    "code": null,
    "options": [
      "_totalAmount",
      "count2",
      "2ndValue",
      "$salary"
    ],
    "correctAnswer": 2,
    "difficulty": "Easy",
    "topic": "Variables",
    "concept": "Variables",
    "explanation": "In C and C++, variable names must begin with an alphabet (uppercase or lowercase) or an underscore (_). They cannot begin with digits.",
    "whyCorrect": "2ndValue is INVALID because variable names cannot begin with a number.",
    "whyOthersAreWrong": {
      "0": "_totalAmount is valid because starting with an underscore is allowed.",
      "1": "count2 is valid; digits are allowed after the first character.",
      "3": "$salary is accepted by some compilers as an extension, but digits starting an identifier are strictly invalid in standard C/C++."
    },
    "realWorldApplication": "Enforcing strict identifier rules avoids parser and tokenizer collisions during lexical syntax analysis."
  },
  {
    "id": 2,
    "question": "In Python, what is the behavior regarding variable declarations and scope when rebinding global variables?",
    "code": "x = 10\ndef update():\n    x = x + 5\nupdate()",
    "options": [
      "x becomes 15 globally",
      "UnboundLocalError: cannot access local variable 'x' where it is not associated with a value",
      "x prints 10",
      "None"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Variables",
    "concept": "Variables",
    "explanation": "Because 'x' is assigned to inside the function, Python marks 'x' as local to update(). During 'x + 5', it attempts to read the local 'x' before it has been assigned, triggering an UnboundLocalError.",
    "whyCorrect": "Correct; Python parser sees an assignment to x in function scope and scopes it locally.",
    "whyOthersAreWrong": {
      "0": "Incorrect; update() does not declare 'global x'.",
      "2": "Incorrect; the function raises an exception prior to returning.",
      "3": "Incorrect; execution terminates with an error."
    },
    "realWorldApplication": "Understanding function scope prevents unintended variable shadowing and mutable state leaks in microservices."
  },
  {
    "id": 3,
    "question": "In C, what is the default initial value of an uninitialized local (automatic) integer variable compared to a static integer variable?",
    "code": null,
    "options": [
      "Both are initialized to 0",
      "Automatic has garbage value; Static is initialized to 0",
      "Automatic is 0; Static has garbage value",
      "Both retain garbage values"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Variables",
    "concept": "Variables",
    "explanation": "Automatic local variables reside on the stack frame and are not initialized automatically (retaining indeterminate/garbage values). Static variables reside in the data/BSS segment and are zero-initialized.",
    "whyCorrect": "Correct; automatic variables hold stack garbage, whereas static variables reside in BSS and default to 0.",
    "whyOthersAreWrong": {
      "0": "Incorrect; stack memory is not zeroed by default in C.",
      "2": "Inverted statement.",
      "3": "Static storage class guarantees 0 initialization."
    },
    "realWorldApplication": "Failing to initialize stack variables is a major source of security vulnerabilities and undefined program logic."
  },
  {
    "id": 4,
    "question": "In Java, what happens when an instance variable of type boolean is declared without explicit initialization?",
    "code": "class Data {\n    boolean flag;\n}",
    "options": [
      "Compilation error: variable must be initialized",
      "It defaults to null",
      "It defaults to false",
      "It defaults to true"
    ],
    "correctAnswer": 2,
    "difficulty": "Hard",
    "topic": "Variables",
    "concept": "Variables",
    "explanation": "Java initializes class field members to default values upon object instantiation. For boolean fields, the language specification mandates false.",
    "whyCorrect": "Correct; primitive boolean fields default to false.",
    "whyOthersAreWrong": {
      "0": "Only local variables in Java cause compile errors when uninitialized.",
      "1": "boolean is a primitive, not an object wrapper (Boolean), so it cannot be null.",
      "3": "Incorrect; default primitive bit pattern is zero (false)."
    },
    "realWorldApplication": "Understanding default field initialization prevents NullPointerExceptions and unpredictable initial state in enterprise beans."
  },
  {
    "id": 5,
    "question": "Which keyword in C++ makes an object immutable and enables compile-time evaluation?",
    "code": null,
    "options": [
      "volatile",
      "constexpr",
      "register",
      "extern"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Constants",
    "concept": "Constants",
    "explanation": "'constexpr' specifies that the value of an object or return value of a function can be evaluated at compile time, enforcing true compile-time constants.",
    "whyCorrect": "Correct; constexpr guarantees compile-time constant evaluation.",
    "whyOthersAreWrong": {
      "0": "volatile informs the compiler that a variable may change unexpectedly outside program control.",
      "2": "register is an obsolete hint to store variables in CPU registers.",
      "3": "extern declares external linkage."
    },
    "realWorldApplication": "Compile-time constants optimize embedded systems and high-frequency trading code by precomputing lookup tables."
  },
  {
    "id": 6,
    "question": "In C, what is the primary structural difference between defining a constant with `#define MAX 100` and `const int MAX = 100;`?",
    "code": null,
    "options": [
      "#define has strict type safety, const does not",
      "#define undergoes preprocessor textual substitution without type checks; const has type safety and memory storage",
      "const can be redefined; #define cannot",
      "There is no difference"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Constants",
    "concept": "Constants",
    "explanation": "#define is a preprocessor macro replacing tokens prior to semantic compilation without type verification. 'const int' introduces a typed identifier respected by the compiler and debugger.",
    "whyCorrect": "Correct; macros substitute text, while const enforces type safety and scope.",
    "whyOthersAreWrong": {
      "0": "Inverted; macros lack type safety.",
      "2": "Macros can be undefined and redefined with #undef.",
      "3": "They operate at distinct compilation phases."
    },
    "realWorldApplication": "Using typed constants instead of preprocessor macros simplifies debugging in IDEs and enables symbol table visibility."
  },
  {
    "id": 7,
    "question": "In Java, what is required to create a compile-time constant variable?",
    "code": null,
    "options": [
      "Only the final keyword",
      "Both static and final keywords with a primitive or String initialized at declaration",
      "volatile and transient keywords",
      "const keyword"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Constants",
    "concept": "Constants",
    "explanation": "In Java, constants are declared using 'static final'. If initialized with compile-time constant expressions, the compiler inlines their values directly at bytecode call sites.",
    "whyCorrect": "Correct; static final defines standard constants in Java.",
    "whyOthersAreWrong": {
      "0": "final alone creates an immutable instance variable, not a shared class constant.",
      "2": "volatile is used for concurrency; transient for serialization.",
      "3": "const is a reserved keyword in Java but has no functional operation."
    },
    "realWorldApplication": "Constants like error codes or mathematical constants are defined static final to conserve heap allocations across threads."
  },
  {
    "id": 8,
    "question": "In Java, what is the exact memory size and signedness of the `char` primitive type?",
    "code": null,
    "options": [
      "1 byte, signed (ASCII)",
      "2 bytes, unsigned (UTF-16 Unicode)",
      "4 bytes, signed (UTF-32)",
      "2 bytes, signed"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Data Types",
    "concept": "Data Types",
    "explanation": "Java's 'char' data type is a 16-bit (2 bytes) unsigned integer representation holding UTF-16 code units ranging from 0 ('\\u0000') to 65535 ('\\uffff').",
    "whyCorrect": "Correct; 16-bit unsigned Unicode.",
    "whyOthersAreWrong": {
      "0": "C char is 1 byte; Java char is 2 bytes.",
      "2": "Java char is not 32-bit.",
      "3": "Java char is unsigned; short is the signed 2-byte counterpart."
    },
    "realWorldApplication": "Correct character sizing avoids truncation bugs when localizing software for international scripts."
  },
  {
    "id": 9,
    "question": "In Python, which of the following built-in collection types is MUTABLE?",
    "code": null,
    "options": [
      "tuple",
      "str",
      "frozenset",
      "list"
    ],
    "correctAnswer": 3,
    "difficulty": "Easy",
    "topic": "Data Types",
    "concept": "Data Types",
    "explanation": "Python lists are mutable sequences; elements can be updated without creating a new object. Tuples, strings, and frozensets are immutable.",
    "whyCorrect": "Correct; lists support in-place item assignment.",
    "whyOthersAreWrong": {
      "0": "Tuples cannot be mutated once created.",
      "1": "Strings in Python are immutable.",
      "2": "frozenset is an immutable hashable set."
    },
    "realWorldApplication": "Choosing between tuples and lists determines whether data structures can serve as dictionary keys."
  },
  {
    "id": 10,
    "question": "What is the typical size of `long double` in 64-bit GCC compilers on x86 architectures?",
    "code": null,
    "options": [
      "4 bytes",
      "8 bytes",
      "12 or 16 bytes (extended precision)",
      "32 bytes"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Data Types",
    "concept": "Data Types",
    "explanation": "On x86 GCC, 'long double' uses 80-bit extended precision padded to 96 bits (12 bytes) on 32-bit or 128 bits (16 bytes) on 64-bit systems for ABI alignment.",
    "whyCorrect": "Correct; extended hardware precision padded to 12/16 bytes.",
    "whyOthersAreWrong": {
      "0": "4 bytes is float size.",
      "1": "8 bytes is standard double size.",
      "3": "32 bytes is beyond long double architecture definitions."
    },
    "realWorldApplication": "Extended precision is used in scientific simulations to minimize accumulated rounding errors."
  },
  {
    "id": 11,
    "question": "In Java, what will occur during the compilation and execution of this code?",
    "code": "byte b = 127;\nb++;\nSystem.out.println(b);",
    "options": [
      "Compilation error: integer overflow",
      "Prints 128",
      "Prints -128",
      "Prints 0"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Data Types",
    "concept": "Data Types",
    "explanation": "Java byte is signed 8-bit (-128 to +127). Incrementing 127 in two's complement binary gives 10000000_2, which represents -128. b++ acts as b = (byte)(b + 1).",
    "whyCorrect": "Correct; two's complement wraps from +127 to -128.",
    "whyOthersAreWrong": {
      "0": "Java does not throw compile errors on primitive overflow.",
      "1": "128 cannot fit in a signed 8-bit byte.",
      "3": "0 is not the binary outcome of 01111111 + 1."
    },
    "realWorldApplication": "Understanding integer overflow is critical in cybersecurity to avoid buffer overruns and integer truncation flaws."
  },
  {
    "id": 12,
    "question": "In C, what is the output of `sizeof('a')` versus in C++?",
    "code": null,
    "options": [
      "1 in C, and 1 in C++",
      "sizeof(int) in C, and 1 in C++",
      "1 in C, and sizeof(int) in C++",
      "Compilation error in C"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Data Types",
    "concept": "Data Types",
    "explanation": "In C, character constants like 'a' have type 'int', so sizeof('a') == sizeof(int) (usually 4). In C++, character literals have type 'char', so sizeof('a') == sizeof(char) == 1.",
    "whyCorrect": "Correct; int in C (4 bytes) and char in C++ (1 byte).",
    "whyOthersAreWrong": {
      "0": "Incorrect; C does not treat character literals as char type.",
      "2": "Inverted.",
      "3": "Both languages compile this validly."
    },
    "realWorldApplication": "Highlighting subtle differences between C and C++ compilers is critical when porting cross-language header files."
  },
  {
    "id": 13,
    "question": "What is the result of the following integer division in C?",
    "code": "float res = 7 / 2;\nprintf(\"%.1f\", res);",
    "options": [
      "3.5",
      "3.0",
      "4.0",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Type Conversion",
    "concept": "Type Conversion",
    "explanation": "Integer division 7 / 2 truncates to integer 3. Only then is 3 implicitly widened to 3.0f upon assignment to float variable 'res'.",
    "whyCorrect": "Correct; 7 / 2 yields 3, which converts to 3.0.",
    "whyOthersAreWrong": {
      "0": "To get 3.5, at least one operand must be a float (e.g. 7.0 / 2).",
      "2": "Integer division truncates towards zero, not rounding up.",
      "3": "This is completely valid C syntax."
    },
    "realWorldApplication": "Accidental integer division is a frequent bug in financial calculations like interest and tax percentage formulas."
  },
  {
    "id": 14,
    "question": "In Java, which of the following assignments will cause a COMPILATION error without explicit casting?",
    "code": null,
    "options": [
      "int a = 10; double b = a;",
      "byte a = 10; int b = a;",
      "float a = 10.5;",
      "char c = 65;"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Type Conversion",
    "concept": "Type Conversion",
    "explanation": "10.5 is a double literal in Java. Assigning a 64-bit double to a 32-bit float is a narrowing conversion that requires an explicit cast (float a = 10.5f;).",
    "whyCorrect": "Correct; double literal to float causes loss-of-precision compile error.",
    "whyOthersAreWrong": {
      "0": "Widening int to double is permitted implicitly.",
      "1": "Widening byte to int is permitted implicitly.",
      "3": "Integer constant 65 fits inside char bounds and is allowed."
    },
    "realWorldApplication": "Compiler strictness on narrowing conversions prevents accidental loss of numerical precision."
  },
  {
    "id": 15,
    "question": "In C, what is printed by the following code due to integer promotion rules?",
    "code": "#include <stdio.h>\nint main() {\n    unsigned int a = 10;\n    int b = -20;\n    if (a + b > 0)\n        printf(\"Greater\");\n    else\n        printf(\"Lesser\");\n    return 0;\n}",
    "options": [
      "Greater",
      "Lesser",
      "Equal",
      "Compilation error"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "topic": "Type Conversion",
    "concept": "Type Conversion",
    "explanation": "b (-20) is implicitly converted to an unsigned int. In two's complement, -20 becomes a very large positive number (e.g. 4294967276 on 32-bit systems). The sum is therefore greater than 0.",
    "whyCorrect": "Correct; unsigned conversion turns -20 into a large positive integer.",
    "whyOthersAreWrong": {
      "1": "Natural human arithmetic would suggest -10, but C promotion rules convert to unsigned.",
      "2": "Sum is not 0.",
      "3": "Valid C code without compile errors."
    },
    "realWorldApplication": "Unsigned/signed arithmetic bugs are notorious security hazards in network packet length validation."
  },
  {
    "id": 16,
    "question": "What is the output of this Python snippet involving implicit boolean conversion?",
    "code": "x = []\ny = [0]\nprint(bool(x), bool(y))",
    "options": [
      "False False",
      "True True",
      "False True",
      "True False"
    ],
    "correctAnswer": 2,
    "difficulty": "Hard",
    "topic": "Type Conversion",
    "concept": "Type Conversion",
    "explanation": "In Python truthiness testing, an empty list [] evaluates to False. A list containing elements (even 0) has length > 0, so it evaluates to True.",
    "whyCorrect": "Correct; bool([]) is False, bool([0]) is True.",
    "whyOthersAreWrong": {
      "0": "y is not empty, so it cannot be False.",
      "1": "x is empty, so it evaluates to False.",
      "3": "Inverted."
    },
    "realWorldApplication": "Idiomatic Python relies on truthy/falsy checks to detect empty payloads or query responses."
  },
  {
    "id": 17,
    "question": "In C++, which casting operator should be used to perform safe runtime downcasting in an inheritance hierarchy with polymorphic classes?",
    "code": null,
    "options": [
      "static_cast",
      "dynamic_cast",
      "reinterpret_cast",
      "const_cast"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Type Conversion",
    "concept": "Type Conversion",
    "explanation": "dynamic_cast safely checks polymorphic object types at runtime using RTTI. If downcasting an incompatible pointer, it returns nullptr.",
    "whyCorrect": "Correct; dynamic_cast verifies class hierarchies safely at runtime.",
    "whyOthersAreWrong": {
      "0": "static_cast performs compile-time casting without runtime validation checks.",
      "2": "reinterpret_cast performs raw bit pattern reinterpretation.",
      "3": "const_cast is exclusively used to add or strip const/volatile attributes."
    },
    "realWorldApplication": "Safe downcasting prevents memory corruption when resolving derived classes in plugin and GUI architectures."
  },
  {
    "id": 18,
    "question": "Which of the following operators is the only TERNARY operator in C, C++, and Java?",
    "code": null,
    "options": [
      "::",
      "? :",
      "->",
      "&&"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Operators",
    "concept": "Operators",
    "explanation": "The conditional operator '? :' is the only ternary operator in C, C++, and Java, evaluating expressions based on a boolean condition.",
    "whyCorrect": "Correct; the conditional ternary operator.",
    "whyOthersAreWrong": {
      "0": ":: is binary/unary scope resolution operator.",
      "2": "-> is binary member access via pointer.",
      "3": "&& is a binary logical operator."
    },
    "realWorldApplication": "Ternary operators write clean inline conditional assignments like setting default fallback values."
  },
  {
    "id": 19,
    "question": "What does the bitwise XOR operator (`^`) return for two identical bit operands?",
    "code": null,
    "options": [
      "1",
      "0",
      "-1",
      "Depends on sign"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Operators",
    "concept": "Operators",
    "explanation": "XOR returns 1 if and only if one operand bit is 1 and the other is 0. If both bits are identical (0^0 or 1^1), the result is always 0.",
    "whyCorrect": "Correct; equal bits cancel to 0.",
    "whyOthersAreWrong": {
      "0": "1 is produced when bits are distinct.",
      "2": "-1 requires all bits set to 1 in two's complement.",
      "3": "Bitwise logic does not depend on sign conventions."
    },
    "realWorldApplication": "XORing a value with itself (a ^ a = 0) is an optimal assembly instruction to clear CPU registers."
  },
  {
    "id": 20,
    "question": "What is the output of the bitwise shift operator expression in Java: `-1 >>> 24`?",
    "code": null,
    "options": [
      "-1",
      "255",
      "0",
      "-255"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Operators",
    "concept": "Operators",
    "explanation": "In Java, -1 is 0xFFFFFFFF (32 bits of 1s). The >>> operator shifts bits right, filling the left 24 bits with 0s. The remaining 8 bits are 0xFF, which is decimal 255.",
    "whyCorrect": "Correct; 0x000000FF equals 255.",
    "whyOthersAreWrong": {
      "0": "Arithmetic shift (>>) preserves sign bits, yielding -1; >>> does not.",
      "2": "Not 0, lower 8 bits remain set.",
      "3": "Unsigned shift produces non-negative numbers."
    },
    "realWorldApplication": "Unsigned shifts are essential when decoding raw network packets, cryptographic hashes, and RGBA color channels."
  },
  {
    "id": 21,
    "question": "In C and Java, what is the result of applying the modulo operator `%` to negative numbers: `-14 % 3`?",
    "code": null,
    "options": [
      "-2",
      "2",
      "1",
      "-1"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "topic": "Arithmetic Operators",
    "concept": "Arithmetic Operators",
    "explanation": "In C99, C++, and Java, integer division truncates toward zero. Modulo satisfies (a/b)*b + (a%b) == a. For -14 % 3, division is -4, so (-4)*3 + (-2) = -14. The result is -2.",
    "whyCorrect": "Correct; sign matches the dividend -14.",
    "whyOthersAreWrong": {
      "1": "Python yields 2 (floored division), but C/Java yields -2.",
      "2": "Incorrect remainder.",
      "3": "Incorrect remainder."
    },
    "realWorldApplication": "Knowing how negative remainders behave is essential in circular buffer indexing and hash table bucket allocation."
  },
  {
    "id": 22,
    "question": "What is the output of `11 // 2` in Python 3?",
    "code": null,
    "options": [
      "5.5",
      "5",
      "6",
      "Error"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Arithmetic Operators",
    "concept": "Arithmetic Operators",
    "explanation": "// is the floor division operator in Python. 11 / 2 is 5.5, and flooring 5.5 yields integer 5.",
    "whyCorrect": "Correct; floor division truncates downward.",
    "whyOthersAreWrong": {
      "0": "5.5 is produced by standard float division '/'.",
      "2": "Floor does not round up.",
      "3": "Valid Python operator."
    },
    "realWorldApplication": "Floor division is widely used in binary search algorithms to compute midpoint indices: (low + high) // 2."
  },
  {
    "id": 23,
    "question": "In C, what happens if an integer is divided by 0 at runtime?",
    "code": "int a = 5;\nint b = 0;\nint c = a / b;",
    "options": [
      "c is set to Infinity",
      "c is set to 0",
      "Undefined Behavior (typically triggers SIGFPE / program crash)",
      "Compilation error"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Arithmetic Operators",
    "concept": "Arithmetic Operators",
    "explanation": "Integer division by zero in C invokes Undefined Behavior according to ISO C standard. On standard POSIX systems, it generates a hardware trap sending signal SIGFPE and terminating the process.",
    "whyCorrect": "Correct; triggers undefined behavior/crash.",
    "whyOthersAreWrong": {
      "0": "Floating-point division by 0 yields Infinity; integer division does not.",
      "1": "Hardware does not set 0.",
      "3": "Division by variable 0 is not caught at compile time."
    },
    "realWorldApplication": "Guard clauses validating denominators before division prevent system crashes and Denial of Service."
  },
  {
    "id": 24,
    "question": "What is the output of the following arithmetic expression in Python: `2 ** 3 ** 2`?",
    "code": null,
    "options": [
      "64",
      "512",
      "36",
      "516"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Arithmetic Operators",
    "concept": "Arithmetic Operators",
    "explanation": "The exponentiation operator ** associates from right to left. 2 ** (3 ** 2) = 2 ** 9 = 512. (Evaluating left-to-right would incorrectly yield (2**3)**2 = 64).",
    "whyCorrect": "Correct; 2^(3^2) = 2^9 = 512.",
    "whyOthersAreWrong": {
      "0": "64 comes from incorrect left-to-right evaluation (8^2).",
      "2": "Incorrect arithmetic.",
      "3": "Incorrect arithmetic."
    },
    "realWorldApplication": "Right-associative power operations model exponential growth and geometric scaling equations accurately."
  },
  {
    "id": 25,
    "question": "In Java, what will `System.out.println(1.0 / 0.0);` and `System.out.println(0.0 / 0.0);` output?",
    "code": null,
    "options": [
      "ArithmeticException for both",
      "Infinity and NaN",
      "NaN and Infinity",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Arithmetic Operators",
    "concept": "Arithmetic Operators",
    "explanation": "IEEE 754 specifies that dividing a non-zero float by zero yields positive/negative Infinity, while dividing zero by zero yields NaN (Not a Number).",
    "whyCorrect": "Correct; 1.0/0.0 is Infinity, 0.0/0.0 is NaN.",
    "whyOthersAreWrong": {
      "0": "Floating-point operations do not throw ArithmeticException in Java; only integer division by 0 throws it.",
      "2": "Inverted.",
      "3": "Valid standard Java."
    },
    "realWorldApplication": "Handling IEEE 754 edge cases like NaN is critical in graphics rendering and financial charting APIs."
  },
  {
    "id": 26,
    "question": "What is the output of the chained relational comparison in Python: `1 < 3 > 2`?",
    "code": null,
    "options": [
      "True",
      "False",
      "SyntaxError",
      "TypeError"
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "topic": "Relational Operators",
    "concept": "Relational Operators",
    "explanation": "Python supports chained comparisons. `1 < 3 > 2` is equivalent to `(1 < 3) and (3 > 2)`. Both conditions are true, so it evaluates to True.",
    "whyCorrect": "Correct; both 1 < 3 and 3 > 2 are satisfied.",
    "whyOthersAreWrong": {
      "1": "Both parts evaluate to true.",
      "2": "Chaining comparison operators is valid Python syntax.",
      "3": "All operands are numbers; no type error."
    },
    "realWorldApplication": "Chained comparisons allow clean range checks like `0 <= index < len(arr)` without verbose syntax."
  },
  {
    "id": 27,
    "question": "In C, what is the output of the expression `int x = 5 > 4 > 3;`?",
    "code": null,
    "options": [
      "1",
      "0",
      "True",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Relational Operators",
    "concept": "Relational Operators",
    "explanation": "Relational operators associate left-to-right. First, (5 > 4) evaluates to 1 (true). Then (1 > 3) is evaluated, which is false (0). Thus, x becomes 0.",
    "whyCorrect": "Correct; (5 > 4) -> 1, then (1 > 3) -> 0.",
    "whyOthersAreWrong": {
      "0": "Incorrect; C does not chain comparisons mathematically.",
      "2": "C stores boolean results as integers 1 and 0, not True keywords.",
      "3": "Syntactically valid in C."
    },
    "realWorldApplication": "Recognizing that C does not support mathematical comparison chaining prevents logic bugs in validation checks."
  },
  {
    "id": 28,
    "question": "In Java, what does the following string comparison evaluate to?",
    "code": "String s1 = \"hello\";\nString s2 = new String(\"hello\");\nSystem.out.println(s1 == s2);",
    "options": [
      "true",
      "false",
      "Compilation Error",
      "NullPointerException"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Relational Operators",
    "concept": "Relational Operators",
    "explanation": "'==' checks reference equality. s1 points to the String in the constant pool, whereas s2 points to a distinct heap object instantiated via 'new'. They have different addresses, so s1 == s2 is false.",
    "whyCorrect": "Correct; distinct reference addresses in memory.",
    "whyOthersAreWrong": {
      "0": "Would be true if s1.equals(s2) were used.",
      "2": "Valid syntax.",
      "3": "Neither string reference is null."
    },
    "realWorldApplication": "Comparing strings with == instead of .equals() is one of the most common candidate traps in Java technical assessments."
  },
  {
    "id": 29,
    "question": "In JavaScript/Python conceptual comparison, what does `NaN == NaN` return?",
    "code": null,
    "options": [
      "true",
      "false",
      "undefined",
      "TypeError"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Relational Operators",
    "concept": "Relational Operators",
    "explanation": "According to IEEE 754 specification, NaN (Not a Number) compared to anythingâincluding another NaNâusing equality operators always yields false. Use isnan() to test for it.",
    "whyCorrect": "Correct; NaN is never equal to itself.",
    "whyOthersAreWrong": {
      "0": "Counter-intuitive but false by IEEE 754 specification.",
      "2": "Relational comparison yields boolean, not undefined.",
      "3": "No type error occurs."
    },
    "realWorldApplication": "Always use dedicated functions like `Double.isNaN()` or `math.isnan()` instead of equality checks to detect corrupted sensor or calculation outputs."
  },
  {
    "id": 30,
    "question": "What is 'Short-Circuit Evaluation' in logical operators?",
    "code": null,
    "options": [
      "Compiler throws an error if an expression is too long",
      "Second operand is evaluated only if the first operand does not determine the result",
      "Expressions are evaluated in reverse order",
      "Logical operators execute on hardware accelerators"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Logical Operators",
    "concept": "Logical Operators",
    "explanation": "Short-circuit evaluation means stopping evaluation as soon as the outcome is certain: for AND (&&), if the first operand is false, the whole is false. For OR (||), if the first operand is true, the whole is true.",
    "whyCorrect": "Correct; skips evaluating subsequent operands when the outcome is predetermined.",
    "whyOthersAreWrong": {
      "0": "Has nothing to do with code length.",
      "2": "Evaluation remains strictly left-to-right.",
      "3": "Standard CPU logic."
    },
    "realWorldApplication": "Used universally to prevent crashes: `if (ptr != NULL && ptr->value > 0)` avoids null pointer dereferences."
  },
  {
    "id": 31,
    "question": "What is the output of the following C code snippet?",
    "code": "#include <stdio.h>\nint main() {\n    int a = 0, b = 5;\n    if (a && ++b)\n        printf(\"True \");\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
    "options": [
      "True 0 6",
      "0 5",
      "0 6",
      "True 0 5"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Logical Operators",
    "concept": "Logical Operators",
    "explanation": "Due to short-circuiting of the logical AND operator (&&), the left side 'a' is 0 (false), so '++b' is never evaluated. b remains 5, and the if-branch is skipped. Output is '0 5'.",
    "whyCorrect": "Correct; ++b is skipped due to short circuit, leaving b as 5.",
    "whyOthersAreWrong": {
      "0": "If condition was false.",
      "2": "Assumes b was incremented, but short-circuiting prevented it.",
      "3": "If branch did not pass."
    },
    "realWorldApplication": "Understanding short-circuit side effects prevents subtle bugs when functions with side effects are placed inside conditional expressions."
  },
  {
    "id": 32,
    "question": "What will this Python expression evaluate to?",
    "code": "x = \"\" or \"Default\"\nprint(x)",
    "options": [
      "\"\"",
      "\"Default\"",
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Logical Operators",
    "concept": "Logical Operators",
    "explanation": "In Python, 'or' returns the first truthy operand or the last operand if all are falsy. An empty string \"\" is falsy, so Python continues and returns \"Default\".",
    "whyCorrect": "Correct; returns the deciding truthy operand.",
    "whyOthersAreWrong": {
      "0": "Falsy value, skipped by 'or'.",
      "2": "Python does not cast the output to boolean True.",
      "3": "\"Default\" is truthy."
    },
    "realWorldApplication": "Commonly used for concise default parameter initialization in Python: `config = user_config or default_config`."
  },
  {
    "id": 33,
    "question": "What is the output of this C code testing logical OR short-circuiting?",
    "code": "#include <stdio.h>\nint main() {\n    int x = 1, y = 1;\n    int res = (x || ++y);\n    printf(\"%d %d %d\", x, y, res);\n    return 0;\n}",
    "options": [
      "1 2 1",
      "1 1 1",
      "1 1 0",
      "1 2 0"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Logical Operators",
    "concept": "Logical Operators",
    "explanation": "x is 1 (true). Since the left side of || is true, the entire expression is known to be true (res = 1). The right side ++y is never evaluated, leaving y = 1.",
    "whyCorrect": "Correct; x=1, y=1 (short-circuited), res=1.",
    "whyOthersAreWrong": {
      "0": "Assumes y was incremented.",
      "2": "res is true (1), not 0.",
      "3": "Both y and res are incorrect here."
    },
    "realWorldApplication": "Guards against unnecessary expensive database lookups: `cache_hit || query_remote_database()`."
  },
  {
    "id": 34,
    "question": "What is the associativity of assignment operators (such as `=`, `+=`, `*=`)?",
    "code": null,
    "options": [
      "Left to Right",
      "Right to Left",
      "Non-associative",
      "Depends on compiler"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Assignment Operators",
    "concept": "Assignment Operators",
    "explanation": "Assignment operators associate from Right to Left. In `a = b = c = 10`, c is assigned 10 first, then b is assigned c's result, and finally a is assigned.",
    "whyCorrect": "Correct; Right to Left allows daisy-chained assignments.",
    "whyOthersAreWrong": {
      "0": "Arithmetic operators associate Left to Right, but assignment does not.",
      "2": "Assignment operators are fully associative.",
      "3": "Standardized across all programming languages."
    },
    "realWorldApplication": "Enables multiple variable resets in a single concise line during state reinitialization."
  },
  {
    "id": 35,
    "question": "In Java, why does `byte b = 5; b += 2;` compile successfully, while `b = b + 2;` causes a compilation error?",
    "code": null,
    "options": [
      "+= is faster in bytecode",
      "Compound assignment operators include an implicit cast to the type of the left operand",
      "Java automatically promotes literals only for +=",
      "b + 2 yields a byte automatically"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Assignment Operators",
    "concept": "Assignment Operators",
    "explanation": "Java language specification states that compound assignment `E1 += E2` automatically inserts an implicit cast: `b = (byte)(b + 2)`. In contrast, `b + 2` promotes b to an int, so assigning it back to a byte is an illegal narrowing conversion.",
    "whyCorrect": "Correct; JLS mandates implicit casting for compound assignments.",
    "whyOthersAreWrong": {
      "0": "Performance is not the syntactic reason.",
      "2": "Literals are treated normally.",
      "3": "b + 2 yields an int due to binary numeric promotion."
    },
    "realWorldApplication": "Using compound operators avoids cluttering code with explicit type-casting boilerplate in byte-manipulation tasks."
  },
  {
    "id": 36,
    "question": "What will be printed by the following C program?",
    "code": "#include <stdio.h>\nint main() {\n    int a = 10;\n    a += (a = 4);\n    printf(\"%d\", a);\n    return 0;\n}",
    "options": [
      "8",
      "14 (or undefined/unspecified depending on C standard)",
      "4",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Assignment Operators",
    "concept": "Assignment Operators",
    "explanation": "In C99 and earlier, modifying 'a' multiple times between sequence points is Undefined Behavior. In C11/C17, it is unsequenced. Most modern compilers evaluate left lvalue 'a' (10) + right side (4) = 14, but relying on this is dangerous code.",
    "whyCorrect": "Correct; evaluates to 14 or triggers unsequenced modification warning.",
    "whyOthersAreWrong": {
      "0": "Assumes a was updated to 4 on both sides.",
      "2": "Simple overwrite ignored.",
      "3": "Compilers warn, but compile it."
    },
    "realWorldApplication": "Avoid modifying and reading the same scalar variable in single compound statements to prevent compiler optimization mismatches."
  },
  {
    "id": 37,
    "question": "What is the primary difference between pre-increment (`++x`) and post-increment (`x++`)?",
    "code": null,
    "options": [
      "Pre-increment is faster; post-increment is slower",
      "Pre-increment increments value first then yields it; Post-increment yields current value first then increments",
      "Post-increment can only be applied to constants",
      "No difference in output ever"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Increment and Decrement",
    "concept": "Increment and Decrement",
    "explanation": "Pre-increment (++x) modifies the variable first and evaluates to the new value. Post-increment (x++) evaluates to the current original value first and updates memory afterwards.",
    "whyCorrect": "Correct; order of value-yielding vs increment.",
    "whyOthersAreWrong": {
      "0": "In modern compilers with primitive types, execution speeds are identical.",
      "2": "Increment operators cannot be applied to constants.",
      "3": "They produce different values inside larger expressions."
    },
    "realWorldApplication": "Array iteration loops and buffer pointers rely heavily on `buffer[index++]` to consume elements sequentially."
  },
  {
    "id": 38,
    "question": "What is the output of the following C code snippet?",
    "code": "#include <stdio.h>\nint main() {\n    int x = 5;\n    int y = x++ + ++x;\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
    "options": [
      "7 12 (or undefined behavior)",
      "6 11",
      "7 13",
      "Compilation error"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "topic": "Increment and Decrement",
    "concept": "Increment and Decrement",
    "explanation": "Evaluating `x++ + ++x` modifies 'x' twice without an intervening sequence point. This is classic Undefined Behavior in C. Common GCC outputs yield x=7, y=12 (5 + 7), but it cannot be relied upon across compilers.",
    "whyCorrect": "Correct; undefined behavior in C standard, commonly resolving to 7 12 on GCC.",
    "whyOthersAreWrong": {
      "1": "Incorrect increment count.",
      "2": "Alternative evaluation order.",
      "3": "Compilers emit a warning but compile the binary."
    },
    "realWorldApplication": "Technical placement tests test this specifically to ensure candidates avoid unsequenced side-effect anti-patterns in production."
  },
  {
    "id": 39,
    "question": "In Java, what will this code print?",
    "code": "int i = 0;\ni = i++;\nSystem.out.println(i);",
    "options": [
      "1",
      "0",
      "Compilation Error",
      "Undefined Behavior"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Increment and Decrement",
    "concept": "Increment and Decrement",
    "explanation": "In Java, evaluation order is strictly defined from left to right. i++ evaluates to 0 (old value), schedules i to become 1, and then the assignment '=' overwrites i with the evaluated result (0). Thus, i ends up as 0.",
    "whyCorrect": "Correct; i remains 0 in Java.",
    "whyOthersAreWrong": {
      "0": "1 is overwritten by the assignment of the evaluated old value 0.",
      "2": "Valid syntax.",
      "3": "Java has NO undefined behavior; semantics are strictly specified by the JLS."
    },
    "realWorldApplication": "Demonstrates that Java eliminates hardware-dependent undefined behaviors present in older C standards."
  },
  {
    "id": 40,
    "question": "In Python, why does the syntax `x++` or `++x` behave differently than in C/Java?",
    "code": "x = 5\n++x\nprint(x)",
    "options": [
      "Prints 6 because ++x increments x",
      "Prints 5 because ++ is parsed as two unary positive operators (+ +x)",
      "SyntaxError: Python does not have unary +",
      "Prints 7"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Increment and Decrement",
    "concept": "Increment and Decrement",
    "explanation": "Python does not have ++ or -- operators. The expression `++x` is parsed as `+(+(x))`, which evaluates to positive 5 without mutating x. Writing `x++` raises an immediate SyntaxError.",
    "whyCorrect": "Correct; parsed as unary + applied twice, leaving x unchanged.",
    "whyOthersAreWrong": {
      "0": "x is not incremented.",
      "2": "Python supports unary + operator.",
      "3": "Arithmetic does not increase value."
    },
    "realWorldApplication": "Prevents developers transitioning from C/Java to Python from writing ineffective `++counter` statements."
  },
  {
    "id": 41,
    "question": "What is the output of the following Java snippet?",
    "code": "int a = 1;\nint b = a++ + a++ * --a;\nSystem.out.println(\"b=\" + b + \", a=\" + a);",
    "options": [
      "b=5, a=2",
      "b=6, a=2",
      "b=4, a=2",
      "b=5, a=3"
    ],
    "correctAnswer": 0,
    "difficulty": "Hard",
    "topic": "Increment and Decrement",
    "concept": "Increment and Decrement",
    "explanation": "1) Left operand: a++ uses 1, a becomes 2. 2) Next a++ uses 2, a becomes 3. 3) Next --a decrements a to 2 and yields 2. 4) Multiplicative precedence executes: 2 * 2 = 4. 5) Addition executes: 1 + 4 = 5. Final values: b=5, a=2.",
    "whyCorrect": "Correct; b=5, a=2.",
    "whyOthersAreWrong": {
      "1": "Incorrect multiplication handling.",
      "2": "Incorrect trace of operands.",
      "3": "Final a was decremented by --a back to 2."
    },
    "realWorldApplication": "Precision code tracing under placement pressure is a hallmark test of algorithmic mental modeling."
  },
  {
    "id": 42,
    "question": "Which of the following operators has the HIGHEST precedence in C and C++?",
    "code": null,
    "options": [
      "Addition (`+`)",
      "Multiplication (`*`)",
      "Logical AND (`&&`)",
      "Postfix increment (`++`)"
    ],
    "correctAnswer": 3,
    "difficulty": "Easy",
    "topic": "Operator Precedence",
    "concept": "Operator Precedence",
    "explanation": "Postfix operators (such as postfix `++`, `--`, array subscripting `[]`, function calls `()`) share level 1 (highest priority) just below primary groupings, above arithmetic and logical operations.",
    "whyCorrect": "Correct; Postfix ++ has higher precedence than arithmetic and logical operators.",
    "whyOthersAreWrong": {
      "0": "Additive operators reside near middle precedence.",
      "1": "Multiplicative is below postfix.",
      "2": "Logical operators have very low precedence."
    },
    "realWorldApplication": "Avoids mistaken pointer increments: `*p++` retrieves *p first, then increments pointer address p."
  },
  {
    "id": 43,
    "question": "What is the output of `int x = 2 + 3 * 4 > 10;` in C and Java?",
    "code": null,
    "options": [
      "1 (true)",
      "0 (false)",
      "20",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "difficulty": "Medium",
    "topic": "Operator Precedence",
    "concept": "Operator Precedence",
    "explanation": "Precedence order: 1) Multiplication: 3 * 4 = 12. 2) Addition: 2 + 12 = 14. 3) Relational: 14 > 10 is true (1 in C, true in Java).",
    "whyCorrect": "Correct; 14 > 10 evaluates to 1/true.",
    "whyOthersAreWrong": {
      "1": "14 is greater than 10.",
      "2": "The expression ends in a boolean/relational comparison, not numeric 20.",
      "3": "Valid syntax across languages."
    },
    "realWorldApplication": "Expression compilers rely on precedence parsing tables to construct Abstract Syntax Trees (ASTs)."
  },
  {
    "id": 44,
    "question": "What is the common placement trap in the following C code snippet?",
    "code": "if (flags & 1 == 0) {\n    // do something\n}",
    "options": [
      "Syntax Error",
      "The equality operator `==` has higher precedence than bitwise `&`, so it evaluates as `flags & (1 == 0)`",
      "Bitwise & cannot be used in if statements",
      "The condition evaluates as `(flags & 1) == 0` automatically"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Operator Precedence",
    "concept": "Operator Precedence",
    "explanation": "Equality `==` binds tighter than bitwise AND `&`. Therefore, `flags & 1 == 0` evaluates as `flags & (1 == 0)` -> `flags & 0`, which is always 0 (false)! Parentheses are required: `(flags & 1) == 0`.",
    "whyCorrect": "Correct; == has higher precedence than &, leading to logic bugs.",
    "whyOthersAreWrong": {
      "0": "Code compiles with zero syntax errors.",
      "2": "Bitwise & is completely valid in boolean conditions.",
      "3": "It does not group that way without parentheses."
    },
    "realWorldApplication": "This exact precedence trap caused critical flaws in the Linux kernel and network drivers before static analysis linters were mandated."
  },
  {
    "id": 45,
    "question": "What is the output of the following C expression?",
    "code": "int a = 1, b = 2, c = 3;\nint res = a + b * c == 7 && c - b > 0;\nprintf(\"%d\", res);",
    "options": [
      "1",
      "0",
      "7",
      "Compilation Error"
    ],
    "correctAnswer": 0,
    "difficulty": "Hard",
    "topic": "Operator Precedence",
    "concept": "Operator Precedence",
    "explanation": "1) b * c = 6. 2) a + 6 = 7. 3) c - b = 1. 4) 7 == 7 is 1 (true). 5) 1 > 0 is 1 (true). 6) 1 && 1 evaluates to 1.",
    "whyCorrect": "Correct; all sub-expressions evaluate to true, yielding 1.",
    "whyOthersAreWrong": {
      "1": "Incorrect evaluation.",
      "2": "Result is logical boolean 1, not arithmetic 7.",
      "3": "Valid C code."
    },
    "realWorldApplication": "Writing clean conditions with explicit parentheses clarifies intent for team code reviews."
  },
  {
    "id": 46,
    "question": "Between Bitwise XOR (`^`), Bitwise AND (`&`), and Bitwise OR (`|`), what is their relative precedence from highest to lowest?",
    "code": null,
    "options": [
      "`&` > `^` > `|`",
      "`|` > `^` > `&`",
      "`^` > `&` > `|`",
      "They all share equal precedence"
    ],
    "correctAnswer": 0,
    "difficulty": "Hard",
    "topic": "Operator Precedence",
    "concept": "Operator Precedence",
    "explanation": "In C, C++, and Java, bitwise precedence mirrors logic: Bitwise AND (`&`) is highest, followed by Bitwise XOR (`^`), followed by Bitwise OR (`|`).",
    "whyCorrect": "Correct; AND binds tighter than XOR, which binds tighter than OR.",
    "whyOthersAreWrong": {
      "1": "Reversed order.",
      "2": "AND is higher than XOR.",
      "3": "They reside at three distinct precedence levels."
    },
    "realWorldApplication": "Manipulating hardware register bitmasks without parentheses requires exact knowledge of bitwise operator priority."
  },
  {
    "id": 47,
    "question": "Which of the following operators associates from RIGHT TO LEFT?",
    "code": null,
    "options": [
      "Arithmetic Addition (`+`)",
      "Logical OR (`||`)",
      "Unary NOT (`!`) and Unary Cast",
      "Relational Less Than (`<`)"
    ],
    "correctAnswer": 2,
    "difficulty": "Easy",
    "topic": "Operator Associativity",
    "concept": "Operator Associativity",
    "explanation": "Unary operators (such as `!`, `~`, `++`, `--`, unary `-`, type casts `(type)`) and assignment operators have right-to-left associativity. Binary arithmetic and relational operators associate left-to-right.",
    "whyCorrect": "Correct; Unary operators associate Right to Left.",
    "whyOthersAreWrong": {
      "0": "Associates Left to Right.",
      "1": "Associates Left to Right.",
      "3": "Associates Left to Right."
    },
    "realWorldApplication": "Correctly chaining pointers and dereferencing: `*++ptr` applies rightmost increment first, then dereference."
  },
  {
    "id": 48,
    "question": "What is the evaluated output of the expression `100 / 10 / 2` in C/Java due to associativity?",
    "code": null,
    "options": [
      "20",
      "5",
      "50",
      "0"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Operator Associativity",
    "concept": "Operator Associativity",
    "explanation": "Multiplicative operators associate Left to Right. Thus, `100 / 10 / 2` is evaluated as `(100 / 10) / 2` = `10 / 2` = 5. (If it associated Right to Left, it would be 100 / 5 = 20).",
    "whyCorrect": "Correct; (100 / 10) / 2 = 5.",
    "whyOthersAreWrong": {
      "0": "20 would occur if division were right-associative (100 / (10 / 2)).",
      "2": "Incorrect division.",
      "3": "Not zero."
    },
    "realWorldApplication": "Understanding left-associativity prevents calculation bugs in financial unit-rate conversions."
  },
  {
    "id": 49,
    "question": "What is the output of nested conditional ternary expressions in C/Java: `int x = 1 ? 0 ? 10 : 20 : 30;`?",
    "code": null,
    "options": [
      "10",
      "20",
      "30",
      "Compilation Error"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Operator Associativity",
    "concept": "Operator Associativity",
    "explanation": "The ternary operator associates Right to Left: `1 ? (0 ? 10 : 20) : 30`. The outer condition is 1 (true), so it evaluates the middle expression `0 ? 10 : 20`. Since 0 is false, it returns 20.",
    "whyCorrect": "Correct; evaluated as 1 ? (0 ? 10 : 20) : 30 -> 20.",
    "whyOthersAreWrong": {
      "0": "Inner condition 0 is false, so 10 is bypassed.",
      "2": "Outer condition is 1 (true), so 30 is bypassed.",
      "3": "Completely valid nested ternary syntax."
    },
    "realWorldApplication": "Nested ternaries map concise decision tables, though parentheses are encouraged for readability."
  },
  {
    "id": 50,
    "question": "In C, what does the expression `*p++` do, considering operator precedence and associativity?",
    "code": null,
    "options": [
      "Increments the value pointed to by p, then dereferences it",
      "Dereferences the original pointer address p, and increments the pointer address p",
      "Causes a compile error because two unary operators cannot touch",
      "Dereferences and increments both pointer and value"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Operator Associativity",
    "concept": "Operator Associativity",
    "explanation": "Postfix ++ has higher precedence than dereference *. Thus, `*(p++)` is evaluated. Postfix yields the current address of p for dereferencing `*`, and then increments the pointer p to point to the next memory address.",
    "whyCorrect": "Correct; yields current *p and advances pointer p.",
    "whyOthersAreWrong": {
      "0": "That behavior corresponds to `++(*p)` or `(*p)++`.",
      "2": "Valid and ubiquitous idiom in C.",
      "3": "Only the pointer address increments, not the underlying value."
    },
    "realWorldApplication": "This is the universal standard C idiom for traversing strings and copying buffers: `while (*dest++ = *src++);`."
  }
];

const questions = questionsData;
