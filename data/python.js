/* PlacementPrep Question Bank: Python & Algorithms (100 questions) */
window.PYTHON_QUESTIONS = [
  {
    "id": "py-001",
    "module": "Programming Fundamentals / Python",
    "topic": "Data Types & Identity",
    "subtopic": "is vs ==",
    "difficulty": "medium",
    "type": "output",
    "question": "What will be the output of the following Python code?",
    "codeSnippet": "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b, a is b)",
    "options": [
      "True True",
      "True False",
      "False True",
      "False False"
    ],
    "correctAnswer": 1,
    "explanation": "The `==` operator compares the values/contents of the two lists, so `a == b` is True. The `is` operator checks object identity (whether both refer to the exact same memory address). Since two distinct list instances were created, `a is b` evaluates to False.",
    "wrongOptionExplanations": {
      "0": "'is' checks memory location (`id()`), and separate list literals occupy distinct memory addresses.",
      "2": "The contents are identical, so `==` is True.",
      "3": "Values are equal, so `==` cannot be False."
    },
    "realWorldApplication": "Ensures correct object comparison when filtering collections or checking singleton states (e.g. `if x is None:`) in enterprise Python backends.",
    "placementTrap": "Always use `==` for value equality and reserve `is` for identity checks like `x is None`!"
  },
  {
    "id": "py-002",
    "module": "Programming Fundamentals / Python",
    "topic": "Data Types & Identity",
    "subtopic": "Integer Caching",
    "difficulty": "hard",
    "type": "output",
    "question": "What does the following snippet print in standard CPython?",
    "codeSnippet": "x = 256\ny = 256\nz = 257\nw = 257\nprint(x is y, z is w)",
    "options": [
      "True True",
      "True False",
      "False False",
      "False True"
    ],
    "correctAnswer": 1,
    "explanation": "CPython pre-allocates and caches an array of integer objects in the range -5 to 256. Any integer in that range shares the same cached singleton instance, making `256 is 256` True. Integers outside this range (like 257) are instantiated as distinct heap objects during independent interactive assignments, making `z is w` False.",
    "wrongOptionExplanations": {
      "0": "257 is outside the pre-cached integer range [-5, 256].",
      "2": "256 falls within CPython's small integer cache and shares identity.",
      "3": "CPython caches lower integers, not higher."
    },
    "realWorldApplication": "Explains subtle memory management optimizations in Python runtime and why identity comparisons should not replace `==` for numbers.",
    "placementTrap": "Never rely on `is` for numerical comparisons because caching behavior is an internal CPython implementation detail!"
  },
  {
    "id": "py-003",
    "module": "Programming Fundamentals / Python",
    "topic": "Strings",
    "subtopic": "String Slicing with Step",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the output of the following string slicing operation?",
    "codeSnippet": "s = 'PLACEMENT'\nprint(s[1:7:2])",
    "options": [
      "'LCM'",
      "'LAM'",
      "'LCE'",
      "'PAC'"
    ],
    "correctAnswer": 0,
    "explanation": "Slicing syntax is `s[start:stop:step]`. Index 1 is 'L', stop is 7 ('N', excluded). Stepping by 2 selects index 1 ('L'), index 3 ('C'), and index 5 ('M'). The result is 'LCM'.",
    "wrongOptionExplanations": {
      "1": "Index 3 is 'C', not 'A'.",
      "2": "Index 5 is 'M', not 'E'.",
      "3": "Starts at index 1 ('L'), not index 0 ('P')."
    },
    "realWorldApplication": "Used extensively in text preprocessing, log parsing, and bioinformatics sequence analysis.",
    "placementTrap": "Remember that the `stop` index is non-inclusive (exclusive) in Python slicing!"
  },
  {
    "id": "py-004",
    "module": "Programming Fundamentals / Python",
    "topic": "Strings",
    "subtopic": "Reverse String Slicing",
    "difficulty": "easy",
    "type": "output",
    "question": "What does the expression `s[::-1]` evaluate to if `s = 'Python'`?",
    "codeSnippet": "s = 'Python'\nprint(s[::-1])",
    "options": [
      "'Python'",
      "'nohtyP'",
      "''",
      "SyntaxError"
    ],
    "correctAnswer": 1,
    "explanation": "A slice with a step of `-1` and omitted start/stop indices reverses the entire sequence from right to left, outputting `'nohtyP'`.",
    "wrongOptionExplanations": {
      "0": "A positive step of 1 keeps the string unchanged.",
      "2": "Omitting start and stop defaults to the complete sequence.",
      "3": "Negative stepping is valid Python syntax."
    },
    "realWorldApplication": "The standard Pythonic one-liner for reversing strings and palindromic validation algorithms.",
    "placementTrap": "`s[::-1]` creates a shallow copy reversed; it does not mutate the original string in place!"
  },
  {
    "id": "py-005",
    "module": "Programming Fundamentals / Python",
    "topic": "Strings",
    "subtopic": "String Immutability",
    "difficulty": "easy",
    "type": "output",
    "question": "What happens when executing the following code?",
    "codeSnippet": "s = 'hello'\ns[0] = 'H'",
    "options": [
      "The string becomes 'Hello'.",
      "TypeError: 'str' object does not support item assignment",
      "ValueError: string is immutable",
      "IndexError: string assignment out of range"
    ],
    "correctAnswer": 1,
    "explanation": "Strings in Python are immutable data types. Once created, individual characters cannot be modified in place. Attempting to assign a new character to an indexed position raises a `TypeError`.",
    "wrongOptionExplanations": {
      "0": "Strings cannot be modified in place; a new string must be created via slicing or `.replace()`.",
      "2": "The raised exception is TypeError, not ValueError.",
      "3": "Index 0 is within bounds, but assignment is forbidden."
    },
    "realWorldApplication": "Guarantees that strings can safely be used as dictionary keys and set members because their hash value never changes.",
    "placementTrap": "To modify a string in Python, create a new string: `s = 'H' + s[1:]`!"
  },
  {
    "id": "py-006",
    "module": "Programming Fundamentals / Python",
    "topic": "Strings",
    "subtopic": "Split and Join",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed by the following string manipulation code?",
    "codeSnippet": "words = ['Cloud', 'DevOps', 'AI']\nresult = '-'.join(words).split('-')\nprint(result)",
    "options": [
      "'Cloud-DevOps-AI'",
      "['Cloud', 'DevOps', 'AI']",
      "['Cloud-DevOps-AI']",
      "TypeError: list has no attribute join"
    ],
    "correctAnswer": 1,
    "explanation": "`-'.join(words)` creates the string `'Cloud-DevOps-AI'`. Calling `.split('-')` on that string splits on hyphens and returns the original list `['Cloud', 'DevOps', 'AI']`.",
    "wrongOptionExplanations": {
      "0": "Calling `.split('-')` turns the joined string back into a list.",
      "2": "The string was split by hyphen into 3 separate items.",
      "3": "`join` is a string method called on `'-'`, not on the list."
    },
    "realWorldApplication": "Serialization, CSV record processing, and URL slug generation in web frameworks.",
    "placementTrap": "Remember syntax: `delimiter.join(iterable)`. You call `join` on the separator string, NOT on the list!"
  },
  {
    "id": "py-007",
    "module": "Programming Fundamentals / Python",
    "topic": "Strings",
    "subtopic": "String find vs index",
    "difficulty": "medium",
    "type": "comparison",
    "question": "How does `str.find('x')` differ from `str.index('x')` when the substring is NOT found?",
    "codeSnippet": "",
    "options": [
      "`find()` raises a ValueError; `index()` returns -1.",
      "`find()` returns -1; `index()` raises a ValueError.",
      "Both return -1.",
      "Both raise a KeyError."
    ],
    "correctAnswer": 1,
    "explanation": "`str.find(sub)` searches for a substring and returns `-1` if it is not found. `str.index(sub)` performs the same search but raises a `ValueError: substring not found` if the substring is missing.",
    "wrongOptionExplanations": {
      "0": "This is backwards: `find` returns -1; `index` raises an exception.",
      "2": "`index` throws an exception, it does not return -1.",
      "3": "KeyError is for dictionaries, not string search methods."
    },
    "realWorldApplication": "Choosing `find()` avoids wrapping simple string lookups in `try...except` blocks.",
    "placementTrap": "Using `str.index()` without checking substring presence will crash with an unhandled ValueError!"
  },
  {
    "id": "py-008",
    "module": "Programming Fundamentals / Python",
    "topic": "Strings",
    "subtopic": "f-string formatting",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the output of the following formatted string?",
    "codeSnippet": "val = 3.14159\nprint(f'{val:.2f}')",
    "options": [
      "'3.14159'",
      "'3.14'",
      "'3.1'",
      "'3.15'"
    ],
    "correctAnswer": 1,
    "explanation": "The format specifier `:.2f` rounds and formats a floating-point number to two decimal places. 3.14159 rounds to `'3.14'`.",
    "wrongOptionExplanations": {
      "0": "The specifier truncates/rounds to 2 decimal places.",
      "2": "One decimal place would be `:.1f`.",
      "3": "Rounding 3.141 is 3.14, not 3.15."
    },
    "realWorldApplication": "Formatting currency amounts and scientific numbers in enterprise dashboards and PDF invoices.",
    "placementTrap": "f-strings (`f'{expr}'`) evaluate expressions at runtime inside curly braces."
  },
  {
    "id": "py-009",
    "module": "Programming Fundamentals / Python",
    "topic": "Data Types",
    "subtopic": "NoneType and Truthiness",
    "difficulty": "easy",
    "type": "output",
    "question": "Which of the following values evaluates to `True` in a Python boolean condition?",
    "codeSnippet": "",
    "options": [
      "`[]` (empty list)",
      "`{}` (empty dictionary)",
      "`0.0` (zero float)",
      "`' '` (string containing a single space)"
    ],
    "correctAnswer": 3,
    "explanation": "In Python, empty sequences (`\"\"`, `[]`, `()`), empty mappings (`{}`), zero numeric values (`0`, `0.0`, `0j`), and `None` evaluate to `False`. A string with even a single whitespace character `' '` has a length of 1 and is truthy.",
    "wrongOptionExplanations": {
      "0": "An empty list has length 0 and is falsy.",
      "1": "An empty dictionary is falsy.",
      "2": "Numeric zero in any precision is falsy."
    },
    "realWorldApplication": "Writing clean idiomatic guard clauses like `if users:` instead of `if len(users) > 0:`.",
    "placementTrap": "A string containing only whitespace (`' '`) is TRUTHY because its length is non-zero!"
  },
  {
    "id": "py-010",
    "module": "Programming Fundamentals / Python",
    "topic": "Data Types",
    "subtopic": "Tuple with Single Element",
    "difficulty": "medium",
    "type": "output",
    "question": "What are the types of `t1` and `t2` in the following code?",
    "codeSnippet": "t1 = (42)\nt2 = (42,)\nprint(type(t1), type(t2))",
    "options": [
      "<class 'tuple'> <class 'tuple'>",
      "<class 'int'> <class 'tuple'>",
      "<class 'int'> <class 'int'>",
      "<class 'tuple'> <class 'int'>"
    ],
    "correctAnswer": 1,
    "explanation": "Parentheses around an expression without a trailing comma are treated as mathematical grouping parentheses, so `(42)` evaluates to an integer `int`. To define a single-element tuple, a trailing comma is required: `(42,)` is a `tuple`.",
    "wrongOptionExplanations": {
      "0": "`t1` lacks a comma and is treated as an integer.",
      "2": "`t2` has a trailing comma, making it a tuple.",
      "3": "This is inverted."
    },
    "realWorldApplication": "Defines database query parameter tuples (e.g. `cursor.execute('SELECT * FROM users WHERE id = %s', (user_id,))`).",
    "placementTrap": "The comma creates the tuple, NOT the parentheses! `42,` without parentheses is also a valid tuple!"
  },
  {
    "id": "py-011",
    "module": "Programming Fundamentals / Python",
    "topic": "Lists",
    "subtopic": "append vs extend",
    "difficulty": "easy",
    "type": "output",
    "question": "What does `lst` contain after executing the following statements?",
    "codeSnippet": "lst = [1, 2]\nlst.append([3, 4])\nlst.extend([5, 6])\nprint(lst)",
    "options": [
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, [3, 4], 5, 6]",
      "[1, 2, [3, 4], [5, 6]]",
      "[1, 2, 3, 4, [5, 6]]"
    ],
    "correctAnswer": 1,
    "explanation": "`append()` adds its argument as a single element to the end of the list, resulting in `[1, 2, [3, 4]]`. `extend()` iterates over its iterable argument and appends each element individually, adding `5` and `6` as separate items: `[1, 2, [3, 4], 5, 6]`.",
    "wrongOptionExplanations": {
      "0": "`append([3, 4])` does not unpack the nested list.",
      "2": "`extend([5, 6])` unpacks elements rather than adding a nested list.",
      "3": "Reversed the behaviors of append and extend."
    },
    "realWorldApplication": "Preventing unintended nested list structures when aggregating paginated API results.",
    "placementTrap": "`append(iterable)` adds 1 single element (the iterable itself); `extend(iterable)` unpacks and adds all elements!"
  },
  {
    "id": "py-012",
    "module": "Programming Fundamentals / Python",
    "topic": "Lists",
    "subtopic": "List Multiplication Gotcha",
    "difficulty": "hard",
    "type": "output",
    "question": "What is printed after executing the following nested list operations?",
    "codeSnippet": "matrix = [[0] * 2] * 2\nmatrix[0][0] = 99\nprint(matrix)",
    "options": [
      "[[99, 0], [0, 0]]",
      "[[99, 0], [99, 0]]",
      "[[99, 99], [0, 0]]",
      "[[0, 0], [0, 0]]"
    ],
    "correctAnswer": 1,
    "explanation": "List multiplication `[[0] * 2] * 2` creates an outer list containing two references to the **exact same inner list** in memory. Mutating `matrix[0][0]` mutates that single shared inner list, reflecting the change in both `matrix[0]` and `matrix[1]`.",
    "wrongOptionExplanations": {
      "0": "Independent inner lists require list comprehensions: `[[0]*2 for _ in range(2)]`.",
      "2": "Index 0 is modified in both rows, not index 1.",
      "3": "The list was mutated; it does not remain all zeros."
    },
    "realWorldApplication": "Initializing 2D dynamic programming matrices and game grids correctly using list comprehensions.",
    "placementTrap": "NEVER initialize 2D matrices using `[[0]*n]*m`! Use `[[0]*n for _ in range(m)]` to generate distinct rows!"
  },
  {
    "id": "py-013",
    "module": "Programming Fundamentals / Python",
    "topic": "Lists",
    "subtopic": "sort() vs sorted()",
    "difficulty": "easy",
    "type": "comparison",
    "question": "What is the difference between `list.sort()` and `sorted(list)` in Python?",
    "codeSnippet": "",
    "options": [
      "`list.sort()` returns a new sorted list; `sorted()` sorts in place.",
      "`list.sort()` sorts the list in place and returns `None`; `sorted()` returns a brand new sorted list leaving the original unchanged.",
      "Both sort in place and return `None`.",
      "Both return a new sorted list."
    ],
    "correctAnswer": 1,
    "explanation": "`list.sort()` is an in-place mutating method that modifies the original list and returns `None`. `sorted(iterable)` is a built-in function that accepts any iterable and returns a new sorted list without modifying the input.",
    "wrongOptionExplanations": {
      "0": "This is backwards: `.sort()` is in place; `sorted()` creates a new list.",
      "2": "`sorted()` returns the newly sorted list, not None.",
      "3": "`.sort()` returns None."
    },
    "realWorldApplication": "Using `sorted()` when preserving raw order is necessary (e.g. maintaining immutable historical audit logs).",
    "placementTrap": "Assigning `x = lst.sort()` sets `x` to `None`! This is one of the most common beginner traps."
  },
  {
    "id": "py-014",
    "module": "Programming Fundamentals / Python",
    "topic": "Tuples",
    "subtopic": "Tuple Packing and Unpacking",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the output of the following tuple unpacking code?",
    "codeSnippet": "a, *b, c = [10, 20, 30, 40, 50]\nprint(a, b, c)",
    "options": [
      "10 [20, 30, 40] 50",
      "10 20 50",
      "[10] [20, 30, 40] [50]",
      "10 (20, 30, 40) 50"
    ],
    "correctAnswer": 0,
    "explanation": "In extended iterable unpacking (PEP 3132), `a` captures the first element (10), `c` captures the last element (50), and `*b` captures all intermediate elements as a list: `[20, 30, 40]`.",
    "wrongOptionExplanations": {
      "1": "`*b` captures all middle elements, not just the first.",
      "2": "`a` and `c` capture individual values, not single-item lists.",
      "3": "`*b` unpacks intermediate elements into a list, not a tuple."
    },
    "realWorldApplication": "Extracting header, body lines, and footer from CSV data files cleanly in one line.",
    "placementTrap": "The starred target (`*rest`) in unpacking always evaluates to a LIST, even when unpacking tuples or generators!"
  },
  {
    "id": "py-015",
    "module": "Programming Fundamentals / Python",
    "topic": "Sets",
    "subtopic": "Set Operations",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed by the following set operations?",
    "codeSnippet": "s1 = {1, 2, 3, 4}\ns2 = {3, 4, 5, 6}\nprint(s1 & s2, s1 - s2)",
    "options": [
      "{3, 4} {1, 2}",
      "{1, 2, 3, 4, 5, 6} {1, 2}",
      "{3, 4} {5, 6}",
      "{1, 2} {3, 4}"
    ],
    "correctAnswer": 0,
    "explanation": "The `&` operator computes set intersection (elements present in both sets: `{3, 4}`). The `-` operator computes set difference (elements in `s1` that are not in `s2`: `{1, 2}`).",
    "wrongOptionExplanations": {
      "1": "The union operator is `|`, not `&`.",
      "2": "`s1 - s2` removes `s2` elements from `s1`, leaving `{1, 2}` (not `{5, 6}`).",
      "3": "Reversed the positions of intersection and difference."
    },
    "realWorldApplication": "Finding common friends in social networks or computing delta changes between database tables.",
    "placementTrap": "Set difference `s1 - s2` is NOT commutative: `s1 - s2 != s2 - s1`!"
  },
  {
    "id": "py-016",
    "module": "Programming Fundamentals / Python",
    "topic": "Sets",
    "subtopic": "Hashable Requirement for Sets",
    "difficulty": "medium",
    "type": "output",
    "question": "What happens when attempting to add a list to a set in Python?",
    "codeSnippet": "s = set()\ns.add([1, 2, 3])",
    "options": [
      "The list is added to the set.",
      "TypeError: unhashable type: 'list'",
      "ValueError: invalid set element",
      "The list is converted into a tuple automatically."
    ],
    "correctAnswer": 1,
    "explanation": "Set elements must be hashable so the set can compute bucket positions via hashing. Because Python lists are mutable, their contents and hash values can change, making them unhashable. Attempting to add a list raises `TypeError: unhashable type: 'list'`.",
    "wrongOptionExplanations": {
      "0": "Mutable collections cannot be members of a set.",
      "2": "The error raised is TypeError, not ValueError.",
      "3": "Python never performs implicit type conversion to tuples here."
    },
    "realWorldApplication": "Understanding hashability ensures keys in hash-based data structures remain invariant throughout execution.",
    "placementTrap": "To store sequences in a set, use immutable TUPLES `(1, 2, 3)` or `frozenset` instead of lists!"
  },
  {
    "id": "py-017",
    "module": "Programming Fundamentals / Python",
    "topic": "Dictionaries",
    "subtopic": "dict.get() with Default",
    "difficulty": "easy",
    "type": "output",
    "question": "What is printed by the following dictionary lookup?",
    "codeSnippet": "data = {'name': 'Alice'}\nprint(data.get('age', 25), data.get('city'))",
    "options": [
      "25 None",
      "25 KeyError",
      "KeyError None",
      "25 ''"
    ],
    "correctAnswer": 0,
    "explanation": "`dict.get(key, default)` returns the value for `key` if present, or `default` if the key is missing. For `'age'`, it returns 25. If no default is provided and the key is missing (as with `'city'`), `get()` returns `None` without raising a `KeyError`.",
    "wrongOptionExplanations": {
      "1": "`get()` never raises a KeyError.",
      "2": "`data.get('age', 25)` successfully returns 25.",
      "3": "The default fallback is `None`, not an empty string."
    },
    "realWorldApplication": "Safely querying optional configuration settings and HTTP header values without throwing exceptions.",
    "placementTrap": "Direct indexing `data['age']` throws `KeyError`, while `data.get('age')` safely returns `None`!"
  },
  {
    "id": "py-018",
    "module": "Programming Fundamentals / Python",
    "topic": "Dictionaries",
    "subtopic": "Dictionary Keys Mutability",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Which of the following can be used as a key in a Python dictionary?",
    "codeSnippet": "",
    "options": [
      "`['user', 1]` (a list)",
      "`{'id': 1}` (a dictionary)",
      "`('user', 1)` (a tuple of immutables)",
      "`{'role'}` (a set)"
    ],
    "correctAnswer": 2,
    "explanation": "Dictionary keys must be hashable, meaning their hash value remains constant throughout their lifetime. Immutable objects like strings, numbers, and tuples containing only immutable types are hashable. Lists, dictionaries, and sets are mutable and therefore unhashable.",
    "wrongOptionExplanations": {
      "0": "Lists are mutable and unhashable.",
      "1": "Dictionaries are mutable and cannot be keys.",
      "3": "Sets are mutable; only `frozenset` is hashable."
    },
    "realWorldApplication": "Using composite tuples `(x, y)` as coordinates when building adjacency matrices or spatial hash maps.",
    "placementTrap": "A tuple containing a mutable object (e.g. `(1, [2, 3])`) is NOT hashable and cannot be a dict key!"
  },
  {
    "id": "py-019",
    "module": "Programming Fundamentals / Python",
    "topic": "Dictionaries",
    "subtopic": "setdefault vs get",
    "difficulty": "medium",
    "type": "output",
    "question": "What does the following snippet print?",
    "codeSnippet": "d = {'a': 1}\nv1 = d.setdefault('a', 10)\nv2 = d.setdefault('b', 20)\nprint(v1, v2, d['b'])",
    "options": [
      "10 20 20",
      "1 20 20",
      "1 20 KeyError",
      "10 20 KeyError"
    ],
    "correctAnswer": 1,
    "explanation": "`setdefault(key, default)` returns the existing value if `key` is already in the dictionary (so `d.setdefault('a', 10)` returns `1` without changing `'a'`). If the key is missing, it inserts the key with the default value and returns it (`d.setdefault('b', 20)` inserts `'b': 20` and returns `20`).",
    "wrongOptionExplanations": {
      "0": "'a' was already present with value 1, so 10 is ignored.",
      "2": "'b' was inserted into `d`, so `d['b']` returns 20 without error.",
      "3": "'a' retains 1 and 'b' is present."
    },
    "realWorldApplication": "Grouping items into lists without importing `defaultdict` (e.g. `groups.setdefault(cat, []).append(item)`).",
    "placementTrap": "`setdefault` modifies the dictionary if the key is missing, whereas `get` is strictly read-only!"
  },
  {
    "id": "py-020",
    "module": "Programming Fundamentals / Python",
    "topic": "Dictionaries",
    "subtopic": "Dictionary Comprehension",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the output of the following dictionary comprehension?",
    "codeSnippet": "squares = {x: x * x for x in range(1, 4)}\nprint(squares)",
    "options": [
      "{1: 1, 2: 4, 3: 9}",
      "[1, 4, 9]",
      "{1, 4, 9}",
      "{1: 2, 2: 4, 3: 6}"
    ],
    "correctAnswer": 0,
    "explanation": "The dictionary comprehension iterates over `range(1, 4)` (values 1, 2, 3), creating key-value pairs `{x: x*x}`. The result is `{1: 1, 2: 4, 3: 9}`.",
    "wrongOptionExplanations": {
      "1": "Square brackets denote a list, not a dictionary.",
      "2": "Curly braces without colons denote a set.",
      "3": "The expression computes square `x * x`, not `x * 2`."
    },
    "realWorldApplication": "Inverting key-value mappings or indexing database records by ID in memory.",
    "placementTrap": "`{k: v for ...}` creates a dictionary; `{v for ...}` creates a set!"
  },
  {
    "id": "py-021",
    "module": "Programming Fundamentals / Python",
    "topic": "Functions",
    "subtopic": "Mutable Default Argument Trap",
    "difficulty": "hard",
    "type": "output",
    "question": "What is the output of the following Python code?",
    "codeSnippet": "def append_to(val, lst=[]):\n    lst.append(val)\n    return lst\n\nprint(append_to(1))\nprint(append_to(2))",
    "options": [
      "[1] and [2]",
      "[1] and [1, 2]",
      "[1, 2] and [1, 2]",
      "[1] and [[1], 2]"
    ],
    "correctAnswer": 1,
    "explanation": "Default parameter values are evaluated **once at function definition time**, not each time the function is called. The default list `lst=[]` is created once in memory. Both calls without a second argument share and mutate this same list object, producing `[1]` then `[1, 2]`.",
    "wrongOptionExplanations": {
      "0": "Default arguments are not re-created on each call.",
      "2": "The first call produces `[1]`, not `[1, 2]`.",
      "3": "Append adds elements directly to the list, not nested lists."
    },
    "realWorldApplication": "One of the most famous Python placement traps; avoiding shared state bugs in API request handlers.",
    "placementTrap": "Always use `None` as the default for mutable arguments: `def fn(lst=None): if lst is None: lst = []`!"
  },
  {
    "id": "py-022",
    "module": "Programming Fundamentals / Python",
    "topic": "Memory & Copying",
    "subtopic": "Shallow vs Deep Copy",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed after executing the following copy operation?",
    "codeSnippet": "import copy\na = [[1, 2], [3, 4]]\nb = copy.copy(a)\nb[0][0] = 99\nprint(a[0][0])",
    "options": [
      "1",
      "99",
      "IndexError",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "`copy.copy()` performs a shallow copy. It creates a new outer list `b`, but the elements inside `b` are references to the exact same inner lists contained in `a`. Modifying `b[0][0]` mutates the shared inner list, changing `a[0][0]` to 99.",
    "wrongOptionExplanations": {
      "0": "A deep copy (`copy.deepcopy()`) is required to clone nested lists independently.",
      "2": "Indices are valid.",
      "3": "Integer 99 was assigned, not None."
    },
    "realWorldApplication": "Deep cloning complex nested configuration dictionaries or tree data structures safely.",
    "placementTrap": "Use `copy.deepcopy()` if you need completely independent copies of nested mutable objects!"
  },
  {
    "id": "py-023",
    "module": "Programming Fundamentals / Python",
    "topic": "Memory & Copying",
    "subtopic": "Pass-by-Object-Reference",
    "difficulty": "medium",
    "type": "output",
    "question": "What does the following snippet print?",
    "codeSnippet": "def modify(nums, val):\n    nums.append(val)\n    nums = [100, 200]\n\nx = [1, 2]\nmodify(x, 3)\nprint(x)",
    "options": [
      "[1, 2, 3]",
      "[100, 200]",
      "[1, 2]",
      "[1, 2, 3, 100, 200]"
    ],
    "correctAnswer": 0,
    "explanation": "Python uses **pass-by-object-reference**. Calling `nums.append(val)` mutates the existing list object in place, so `x` becomes `[1, 2, 3]`. The subsequent assignment `nums = [100, 200]` merely rebinds the local variable `nums` to a new object, leaving the caller's variable `x` pointing to `[1, 2, 3]`.",
    "wrongOptionExplanations": {
      "1": "Reassigning a local parameter inside a function does not rebind the caller's variable.",
      "2": "The in-place mutation `.append(3)` took effect.",
      "3": "Rebinding does not concatenate lists."
    },
    "realWorldApplication": "Understanding when functions cause external side effects on caller collections.",
    "placementTrap": "In-place method calls (`.append()`, `.pop()`) mutate the caller's object; reassignment (`nums = ...`) only rebinds the local name!"
  },
  {
    "id": "py-024",
    "module": "Programming Fundamentals / Python",
    "topic": "Comprehensions",
    "subtopic": "Nested List Comprehension",
    "difficulty": "medium",
    "type": "output",
    "question": "What is the output of the following nested comprehension?",
    "codeSnippet": "matrix = [[1, 2], [3, 4]]\nflat = [num for row in matrix for num in row]\nprint(flat)",
    "options": [
      "[[1, 2], [3, 4]]",
      "[1, 2, 3, 4]",
      "[1, 3, 2, 4]",
      "[[1, 3], [2, 4]]"
    ],
    "correctAnswer": 1,
    "explanation": "In a list comprehension, the `for` clauses follow the same order as nested for-loops: `for row in matrix:` followed by `for num in row:`. This flattens the 2D matrix into `[1, 2, 3, 4]`.",
    "wrongOptionExplanations": {
      "0": "The comprehension unpacks numbers into a flat list.",
      "2": "Row-major order processes row 0 ([1, 2]) then row 1 ([3, 4]), not transposed.",
      "3": "It flattens into a 1D list, not a 2D matrix."
    },
    "realWorldApplication": "Flattening 2D arrays, image pixel matrices, and nested database batch records.",
    "placementTrap": "The order of loops in a comprehension matches standard nested loops: outer loop first, inner loop second!"
  },
  {
    "id": "py-025",
    "module": "Programming Fundamentals / Python",
    "topic": "Comprehensions",
    "subtopic": "Generator Expression vs List Comprehension",
    "difficulty": "medium",
    "type": "comparison",
    "question": "What is the primary operational difference between `[x for x in range(1000000)]` and `(x for x in range(1000000))`?",
    "codeSnippet": "",
    "options": [
      "The list comprehension creates a tuple; the generator creates a list.",
      "The list comprehension builds the entire 1,000,000-item list in memory at once; the generator expression yields items lazily on demand, consuming minimal memory.",
      "The generator expression executes faster than the list comprehension.",
      "There is no difference; parentheses are optional."
    ],
    "correctAnswer": 1,
    "explanation": "List comprehensions `[...]` evaluate eagerly and construct the full list in RAM immediately. Generator expressions `(...)` evaluate lazily, returning a generator iterator that computes values one at a time via the iterator protocol, using negligible memory regardless of stream size.",
    "wrongOptionExplanations": {
      "0": "Parentheses produce a generator object, NOT a tuple. Tuples require `tuple(...)`.",
      "2": "List comprehensions are often slightly faster for small collections due to C optimizations, but generators prevent OOM errors on large data.",
      "3": "Parentheses create a generator, brackets create a list."
    },
    "realWorldApplication": "Streaming gigabytes of log files or massive database query results without exhausting server RAM.",
    "placementTrap": "Parentheses `(x for x in ...)` create a GENERATOR, not a tuple! To create a tuple comprehension, use `tuple(x for x in ...)`."
  },
  {
    "id": "py-026",
    "module": "Programming Fundamentals / Python",
    "topic": "Lists",
    "subtopic": "List Slicing Assignment",
    "difficulty": "hard",
    "type": "output",
    "question": "What is the output of the following slice assignment?",
    "codeSnippet": "nums = [1, 2, 3, 4, 5]\nnums[1:4] = [20, 30]\nprint(nums)",
    "options": [
      "[1, 20, 30, 4, 5]",
      "[1, 20, 30, 5]",
      "[1, [20, 30], 5]",
      "[1, 2, 3, 20, 30, 5]"
    ],
    "correctAnswer": 1,
    "explanation": "Slice assignment replaces the sliced slice `nums[1:4]` (which contains `[2, 3, 4]`, 3 elements) with the elements of the assigned iterable `[20, 30]`. The list adjusts its size dynamically: `[1] + [20, 30] + [5] = [1, 20, 30, 5]`.",
    "wrongOptionExplanations": {
      "0": "Indices 1 through 3 (three elements: 2, 3, 4) are replaced, not just two.",
      "2": "Slice assignment unpacks the iterable; it does not insert a nested list.",
      "3": "The original sliced elements are replaced, not retained."
    },
    "realWorldApplication": "In-place subarray replacement in high-performance array algorithms.",
    "placementTrap": "Slice assignment `nums[1:4] = ...` can expand or shrink the list because it replaces the entire range!"
  },
  {
    "id": "py-027",
    "module": "Programming Fundamentals / Python",
    "topic": "Lists",
    "subtopic": "List remove vs pop vs del",
    "difficulty": "medium",
    "type": "comparison",
    "question": "Which statement correctly compares `remove()`, `pop()`, and `del` in Python?",
    "codeSnippet": "",
    "options": [
      "`remove(x)` removes by index; `pop(i)` removes by value.",
      "`remove(x)` removes the first occurrence of a value; `pop(i)` removes and returns the item at index `i` (defaulting to last); `del lst[i]` deletes by index without returning.",
      "`del` only works on entire lists; it cannot delete individual elements.",
      "`pop()` raises a ValueError if the index is invalid."
    ],
    "correctAnswer": 1,
    "explanation": "`lst.remove(x)` searches for value `x` and removes its first occurrence (raises `ValueError` if not found). `lst.pop(i)` removes and returns the item at index `i` (default -1, raises `IndexError` if out of bounds). `del lst[i]` removes the item at index `i` without returning a value.",
    "wrongOptionExplanations": {
      "0": "This is backwards: `remove` takes a value; `pop` takes an index.",
      "2": "`del lst[i]` can delete specific indices or slices.",
      "3": "`pop()` raises IndexError for invalid indices, not ValueError."
    },
    "realWorldApplication": "Implementing stack operations (`pop()`) and cleanly removing stale cache items.",
    "placementTrap": "`remove(val)` deletes by VALUE (raises ValueError if absent); `pop(idx)` deletes by INDEX (raises IndexError if absent)!"
  },
  {
    "id": "py-028",
    "module": "Programming Fundamentals / Python",
    "topic": "Sets",
    "subtopic": "Set Comprehension",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the output of the following set comprehension?",
    "codeSnippet": "result = {x % 3 for x in [1, 2, 3, 4, 5, 6]}\nprint(sorted(list(result)))",
    "options": [
      "[0, 1, 2]",
      "[1, 2, 0, 1, 2, 0]",
      "[1, 2, 3]",
      "[0, 1, 2, 3]"
    ],
    "correctAnswer": 0,
    "explanation": "Computing modulo 3 on `[1, 2, 3, 4, 5, 6]` yields `1, 2, 0, 1, 2, 0`. Because sets automatically eliminate duplicate values, the unique elements are `{0, 1, 2}`. Sorted as a list, this outputs `[0, 1, 2]`.",
    "wrongOptionExplanations": {
      "1": "Sets do not retain duplicate values.",
      "2": "Modulo 3 can never produce 3; valid remainders are 0, 1, 2.",
      "3": "3 is not a valid remainder modulo 3."
    },
    "realWorldApplication": "Extracting unique residue classes, distinct user role IDs, or unique categories from raw transactional data.",
    "placementTrap": "Set comprehensions `{expr for ...}` automatically deduplicate results!"
  },
  {
    "id": "py-029",
    "module": "Programming Fundamentals / Python",
    "topic": "Tuples",
    "subtopic": "Named Tuples",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Why are `collections.namedtuple` often used instead of regular classes or dictionaries for data-only records?",
    "codeSnippet": "",
    "options": [
      "They allow mutable modifications while saving CPU cycles.",
      "They provide memory-efficient, immutable records with named field access (`point.x`) while retaining tuple indexing, unpacking, and zero class boilerplate overhead.",
      "They can only store string values.",
      "They automatically serialize data to SQL databases."
    ],
    "correctAnswer": 1,
    "explanation": "`namedtuple` creates tuple subclasses where fields can be accessed by attribute name (`p.x`) as well as index (`p[0]`). They are immutable, support unpacking, and consume the same lightweight memory footprint as standard tuples without `__dict__` overhead.",
    "wrongOptionExplanations": {
      "0": "Named tuples are strictly immutable, not mutable.",
      "2": "They can store values of any data type.",
      "3": "They are in-memory data structures, not ORM mappers."
    },
    "realWorldApplication": "Returning clean, lightweight structured records from functions without creating full custom class definitions.",
    "placementTrap": "`namedtuple` instances are IMMUTABLE just like standard tuples; you cannot reassign `p.x = 10`!"
  },
  {
    "id": "py-030",
    "module": "Programming Fundamentals / Python",
    "topic": "Memory",
    "subtopic": "id() and Memory Addresses",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What does the built-in `id(obj)` function return in CPython?",
    "codeSnippet": "",
    "options": [
      "The hash value of the object.",
      "The memory address (integer) of the object in CPython's heap.",
      "The number of active references to the object.",
      "The data type identifier of the object."
    ],
    "correctAnswer": 1,
    "explanation": "In CPython, `id(obj)` returns an integer representing the memory address where the object is allocated. The `is` operator evaluates to True if and only if `id(a) == id(b)`.",
    "wrongOptionExplanations": {
      "0": "`hash(obj)` returns the hash value, which is completely distinct from `id()`.",
      "2": "`sys.getrefcount(obj)` returns the reference count.",
      "3": "`type(obj)` returns the object's class/type."
    },
    "realWorldApplication": "Debugging memory leaks and verifying whether data transformations are operating in-place or creating new objects.",
    "placementTrap": "`is` compares `id()` values; `==` calls the object's `__eq__()` method to compare values!"
  },
  {
    "id": "py-031",
    "module": "Programming Fundamentals / Python",
    "topic": "Functions",
    "subtopic": "*args and **kwargs",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed when executing the following function call?",
    "codeSnippet": "def demo(*args, **kwargs):\n    return len(args), len(kwargs)\n\nprint(demo(1, 2, 3, a='x', b='y'))",
    "options": [
      "(3, 2)",
      "(5, 0)",
      "(2, 3)",
      "(3, 3)"
    ],
    "correctAnswer": 0,
    "explanation": "`*args` collects positional arguments into a tuple (`args = (1, 2, 3)`, length 3). `**kwargs` collects keyword arguments into a dictionary (`kwargs = {'a': 'x', 'b': 'y'}`, length 2). Returns `(3, 2)`.",
    "wrongOptionExplanations": {
      "1": "Keyword arguments are routed to `kwargs`, not `args`.",
      "2": "There are 3 positional arguments and 2 keyword arguments, not vice versa.",
      "3": "There are only 2 keyword arguments (`a` and `b`)."
    },
    "realWorldApplication": "Writing flexible decorators, API wrappers, and factory methods that accept arbitrary parameters.",
    "placementTrap": "`*args` is a TUPLE, while `**kwargs` is a DICTIONARY!"
  },
  {
    "id": "py-032",
    "module": "Programming Fundamentals / Python",
    "topic": "Scope",
    "subtopic": "LEGB Rule and nonlocal Keyword",
    "difficulty": "hard",
    "type": "output",
    "question": "What is the output of the following nested function?",
    "codeSnippet": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x = 20\n    inner()\n    return x\nprint(outer())",
    "options": [
      "10",
      "20",
      "UnboundLocalError",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "The `nonlocal` keyword allows `inner()` to rebind variables in the nearest enclosing (non-global) scope. Setting `x = 20` inside `inner()` mutates the variable `x` declared in `outer()`, so `outer()` returns 20.",
    "wrongOptionExplanations": {
      "0": "Without `nonlocal`, `x = 20` would create a local variable in `inner()`, leaving outer's `x` as 10.",
      "2": "`x` is properly bound via `nonlocal`.",
      "3": "outer() explicitly returns `x` (20)."
    },
    "realWorldApplication": "Managing state in closures, state machines, and customized generator functions.",
    "placementTrap": "`global` binds to the top-level module scope; `nonlocal` binds to the nearest enclosing function scope!"
  },
  {
    "id": "py-033",
    "module": "Programming Fundamentals / Python",
    "topic": "Scope",
    "subtopic": "UnboundLocalError",
    "difficulty": "hard",
    "type": "output",
    "question": "What happens when the following code is executed?",
    "codeSnippet": "x = 5\ndef test():\n    print(x)\n    x = 10\ntest()",
    "options": [
      "Prints 5 then assigns 10.",
      "UnboundLocalError: cannot access local variable 'x' where it is not associated with a value",
      "Prints 10.",
      "Prints None."
    ],
    "correctAnswer": 1,
    "explanation": "Because `x = 10` appears inside `test()`, Python designates `x` as a **local** variable for the entire function scope during compilation. When `print(x)` is reached before the local assignment, Python attempts to read the local variable before it is initialized, raising an `UnboundLocalError`.",
    "wrongOptionExplanations": {
      "0": "Python does not fall back to the global variable if a local assignment exists later in the function.",
      "2": "The print statement executes before `x = 10`.",
      "3": "An exception is raised before any print occurs."
    },
    "realWorldApplication": "Understanding variable scoping mechanics prevents unexpected runtime crashes when refactoring function bodies.",
    "placementTrap": "If a variable is assigned ANYWHERE inside a function, it is treated as LOCAL throughout the entire function unless declared `global`!"
  },
  {
    "id": "py-034",
    "module": "Programming Fundamentals / Python",
    "topic": "Built-ins",
    "subtopic": "zip() Function",
    "difficulty": "easy",
    "type": "output",
    "question": "What does `list(zip([1, 2], ['a', 'b', 'c']))` evaluate to?",
    "codeSnippet": "print(list(zip([1, 2], ['a', 'b', 'c'])))",
    "options": [
      "[(1, 'a'), (2, 'b'), (None, 'c')]",
      "[(1, 'a'), (2, 'b')]",
      "[1, 'a', 2, 'b']",
      "ValueError: iterables have different lengths"
    ],
    "correctAnswer": 1,
    "explanation": "By default, `zip()` pairs elements from each iterable until the **shortest** iterable is exhausted. Since `[1, 2]` has length 2, `zip` stops after 2 pairs, yielding `[(1, 'a'), (2, 'b')]` and discarding extra elements from longer iterables.",
    "wrongOptionExplanations": {
      "0": "Padding missing elements with None is done by `itertools.zip_longest()`, not standard `zip()`.",
      "2": "zip generates a sequence of 2-element tuples, not a flat list.",
      "3": "zip does not raise an error on mismatched lengths (unless `strict=True` is passed in Python 3.10+)."
    },
    "realWorldApplication": "Pairing column headers with row values to construct database records or dictionary lookups.",
    "placementTrap": "In Python 3.10+, pass `strict=True` to `zip()` if you want it to raise a ValueError when iterable lengths differ!"
  },
  {
    "id": "py-035",
    "module": "Programming Fundamentals / Python",
    "topic": "Built-ins",
    "subtopic": "enumerate() Function",
    "difficulty": "easy",
    "type": "output",
    "question": "What is printed by the following code snippet?",
    "codeSnippet": "for i, val in enumerate(['a', 'b'], start=1):\n    print(i, val, end=' ')",
    "options": [
      "0 a 1 b",
      "1 a 2 b",
      "1 b 2 a",
      "TypeError: start is not a valid argument"
    ],
    "correctAnswer": 1,
    "explanation": "`enumerate(iterable, start=N)` yields pairs of `(index, item)`, starting the index counter at `start` (default 0). With `start=1`, it yields `(1, 'a')` followed by `(2, 'b')`.",
    "wrongOptionExplanations": {
      "0": "Default start is 0, but `start=1` was explicitly specified.",
      "2": "The items retain their original iteration order.",
      "3": "`start` is a valid keyword argument for `enumerate()`."
    },
    "realWorldApplication": "Creating 1-based numbered menus, ranked leaderboards, and formatted output displays.",
    "placementTrap": "Use `enumerate(seq)` instead of manual counter variables `i = 0; i += 1`!"
  },
  {
    "id": "py-036",
    "module": "Programming Fundamentals / Python",
    "topic": "Built-ins",
    "subtopic": "any() and all() with Falsy Values",
    "difficulty": "medium",
    "type": "output",
    "question": "What does `print(any([0, False, '']), all([1, True, 'hello']))` output?",
    "codeSnippet": "print(any([0, False, '']), all([1, True, 'hello']))",
    "options": [
      "False True",
      "True True",
      "False False",
      "True False"
    ],
    "correctAnswer": 0,
    "explanation": "`any()` returns True if at least one element in the iterable is truthy; since `0`, `False`, and `\"\"` are all falsy, `any(...)` returns `False`. `all()` returns True if every element is truthy; since `1`, `True`, and `'hello'` are all truthy, `all(...)` returns `True`.",
    "wrongOptionExplanations": {
      "1": "`any` requires at least one truthy value, but all items in the first list are falsy.",
      "2": "`all` correctly evaluates to True because every element is truthy.",
      "3": "Both evaluations are reversed."
    },
    "realWorldApplication": "Short-circuit boolean validation across permission rule sets and form validator pipelines.",
    "placementTrap": "Mnemonic: `any()` is equivalent to chaining `or`; `all()` is equivalent to chaining `and`! Note: `all([])` is True (vacuous truth)!"
  },
  {
    "id": "py-037",
    "module": "Programming Fundamentals / Python",
    "topic": "Built-ins",
    "subtopic": "map and filter with Lambda",
    "difficulty": "medium",
    "type": "output",
    "question": "What is the output of the following functional expression?",
    "codeSnippet": "nums = [1, 2, 3, 4, 5]\nres = list(map(lambda x: x * 2, filter(lambda x: x % 2 != 0, nums)))\nprint(res)",
    "options": [
      "[2, 6, 10]",
      "[4, 8]",
      "[2, 4, 6, 8, 10]",
      "[1, 3, 5]"
    ],
    "correctAnswer": 0,
    "explanation": "First, `filter(lambda x: x % 2 != 0, nums)` filters for odd numbers: `[1, 3, 5]`. Next, `map(lambda x: x * 2, ...)` doubles each filtered element, producing `1*2=2`, `3*2=6`, `5*2=10`. The result is `[2, 6, 10]`.",
    "wrongOptionExplanations": {
      "1": "That would be doubling the even numbers.",
      "2": "That doubles all numbers without filtering.",
      "3": "That is the output of filter alone without the map transformation."
    },
    "realWorldApplication": "Pipelining data transformations in functional data analysis workflows.",
    "placementTrap": "In modern Python, list comprehensions `[x * 2 for x in nums if x % 2 != 0]` are generally preferred over map/filter for readability!"
  },
  {
    "id": "py-038",
    "module": "Programming Fundamentals / Python",
    "topic": "Built-ins",
    "subtopic": "sorted() with Custom Key",
    "difficulty": "medium",
    "type": "output",
    "question": "What is the output of sorting words by length in descending order?",
    "codeSnippet": "words = ['banana', 'pie', 'apple']\nprint(sorted(words, key=len, reverse=True))",
    "options": [
      "['pie', 'apple', 'banana']",
      "['banana', 'apple', 'pie']",
      "['apple', 'banana', 'pie']",
      "['banana', 'pie', 'apple']"
    ],
    "correctAnswer": 1,
    "explanation": "`key=len` sorts elements by the return value of `len()`: 'banana' has length 6, 'apple' has length 5, and 'pie' has length 3. With `reverse=True`, it sorts in descending order: `['banana', 'apple', 'pie']`.",
    "wrongOptionExplanations": {
      "0": "That is ascending order by length (`reverse=False`).",
      "2": "Alphabetical sorting, not length-based.",
      "3": "Original order was not preserved."
    },
    "realWorldApplication": "Custom sorting in search engines, ranking products by rating or distance.",
    "placementTrap": "Python's Timsort algorithm is **stable**: elements with identical keys maintain their relative original order!"
  },
  {
    "id": "py-039",
    "module": "Programming Fundamentals / Python",
    "topic": "Functions",
    "subtopic": "Lambda Functions Limitation",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "Which of the following is a syntactic restriction of Python `lambda` functions?",
    "codeSnippet": "",
    "options": [
      "They can only accept a single argument.",
      "They cannot contain statements (such as `return`, `for`, `while`, or `try/except`) and must consist of a single expression.",
      "They cannot return numeric values.",
      "They cannot be assigned to variables."
    ],
    "correctAnswer": 1,
    "explanation": "Python `lambda` functions are restricted to a single syntactic expression. They automatically return the result of that expression and cannot contain multi-line statements, loops, assignments, or exception handling blocks.",
    "wrongOptionExplanations": {
      "0": "Lambdas can accept multiple arguments (e.g. `lambda a, b: a + b`).",
      "2": "Lambdas can return any valid Python data type.",
      "3": "Lambdas can be assigned to variables, though PEP 8 discourages this in favor of `def`."
    },
    "realWorldApplication": "Writing quick one-line callback functions for `sorted()`, `map()`, and GUI event handlers.",
    "placementTrap": "If your logic requires `if...else` statements, use a conditional expression `x if cond else y` inside the lambda!"
  },
  {
    "id": "py-040",
    "module": "Programming Fundamentals / Python",
    "topic": "Functions",
    "subtopic": "First-Class Functions",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed when executing the following higher-order function code?",
    "codeSnippet": "def apply_fn(f, val):\n    return f(val)\n\nprint(apply_fn(lambda x: x ** 3, 3))",
    "options": [
      "9",
      "27",
      "TypeError: functions cannot be arguments",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, functions are first-class citizens. They can be passed as arguments, assigned to variables, and returned from other functions. Passing the lambda cubing function and 3 computes `3 ** 3 = 27`.",
    "wrongOptionExplanations": {
      "0": "3 cubed is 27, not 9 (which is 3 squared or 3*3).",
      "2": "Functions are first-class objects and can freely be passed as arguments.",
      "3": "The return value 27 is printed."
    },
    "realWorldApplication": "Building flexible plugin architectures, middleware chains, and functional pipelines.",
    "placementTrap": "`f` is a reference to the function; `f()` invokes the function!"
  },
  {
    "id": "py-041",
    "module": "Programming Fundamentals / Python",
    "topic": "Exceptions",
    "subtopic": "try-except-else-finally Flow",
    "difficulty": "hard",
    "type": "output",
    "question": "What is the exact execution output of the following try-except block?",
    "codeSnippet": "def test():\n    try:\n        print('A', end=' ')\n        return 'RET'\n    finally:\n        print('B', end=' ')\n\nprint(test())",
    "options": [
      "A RET B",
      "A B RET",
      "A B",
      "RET A B"
    ],
    "correctAnswer": 1,
    "explanation": "The `try` block executes and prints `'A'`. Even though a `return` statement is encountered, the `finally` block is **guaranteed to execute before the function actually returns**. Thus `'B'` is printed next, followed by the caller printing the returned string `'RET'`. Output is `A B RET`.",
    "wrongOptionExplanations": {
      "0": "`finally` executes before control is returned to the caller.",
      "2": "The returned value is printed by `print(test())`.",
      "3": "Statements execute in chronological program order."
    },
    "realWorldApplication": "Ensuring critical resources (file handles, network sockets, database locks) are released even during returns or exceptions.",
    "placementTrap": "The `finally` block ALWAYS executes before a function returns, even if `return` is called inside `try`!"
  },
  {
    "id": "py-042",
    "module": "Programming Fundamentals / Python",
    "topic": "Exceptions",
    "subtopic": "The else Clause in try-except",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "When does the `else` clause in a `try...except...else...finally` block execute?",
    "codeSnippet": "",
    "options": [
      "Only when an exception was raised and caught by an `except` block.",
      "Only when NO exceptions were raised in the `try` block.",
      "It executes unconditionally on every run.",
      "Only when a timeout occurs."
    ],
    "correctAnswer": 1,
    "explanation": "The `else` block executes if and only if the `try` block completed successfully without raising any exceptions. It is best practice to place code that should only run if the `try` block succeeded into the `else` clause, keeping the `try` block minimal.",
    "wrongOptionExplanations": {
      "0": "The `except` block handles raised exceptions; `else` only runs if no exceptions occurred.",
      "2": "`finally` executes unconditionally, not `else`.",
      "3": "It is not related to timeouts."
    },
    "realWorldApplication": "Avoiding catching unintended exceptions in code that should only execute after successful validation.",
    "placementTrap": "Use `else` for code that should run ONLY when `try` succeeded, preventing accidental exception masking!"
  },
  {
    "id": "py-043",
    "module": "Programming Fundamentals / Python",
    "topic": "Exceptions",
    "subtopic": "Custom Exception Inheritance",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What base class must a custom exception class inherit from in Python?",
    "codeSnippet": "",
    "options": [
      "`object`",
      "`Exception` (or `BaseException`)",
      "`Error`",
      "`Runtime`"
    ],
    "correctAnswer": 1,
    "explanation": "Custom user-defined exceptions must inherit from `Exception` (or a subclass of `Exception`). While `BaseException` is the root of the hierarchy, standard exceptions inherit from `Exception` so they can be caught by `except Exception:` without catching system exits or KeyboardInterrupt.",
    "wrongOptionExplanations": {
      "0": "Inheriting from `object` will raise a TypeError when raised (`exceptions must derive from BaseException`).",
      "2": "There is no built-in base class named `Error`.",
      "3": "`Runtime` is not an exception base class."
    },
    "realWorldApplication": "Designing domain-specific exceptions (e.g. `PaymentFailedException`, `UserNotFoundError`) in microservice architectures.",
    "placementTrap": "Never inherit custom exceptions directly from `BaseException`! Always inherit from `Exception`!"
  },
  {
    "id": "py-044",
    "module": "Programming Fundamentals / Python",
    "topic": "Context Managers",
    "subtopic": "with Statement and Dunder Methods",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Which two magic (dunder) methods must an object implement to support the `with` statement context management protocol?",
    "codeSnippet": "",
    "options": [
      "`__init__` and `__del__`",
      "`__enter__` and `__exit__`",
      "`__open__` and `__close__`",
      "`__start__` and `__stop__`"
    ],
    "correctAnswer": 1,
    "explanation": "The Python context management protocol requires `__enter__(self)` and `__exit__(self, exc_type, exc_val, exc_tb)`. When entering a `with` block, `__enter__` is called; when exiting (even via an exception), `__exit__` is called to clean up resources.",
    "wrongOptionExplanations": {
      "0": "`__init__` is for initialization, and `__del__` is for garbage collection finalization.",
      "2": "`open` and `close` are conventional method names, not context manager magic methods.",
      "3": "`start` and `stop` are thread control methods."
    },
    "realWorldApplication": "Automating database connection pooling, thread locking (`with lock:`), and file I/O safety.",
    "placementTrap": "The `__exit__` method can suppress exceptions by returning `True`!"
  },
  {
    "id": "py-045",
    "module": "Programming Fundamentals / Python",
    "topic": "Generators",
    "subtopic": "yield Keyword and State Preservation",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What happens to a function's local execution state when it encounters a `yield` statement?",
    "codeSnippet": "",
    "options": [
      "The function terminates permanently and frees all memory.",
      "The yielded value is returned, and execution is paused, preserving the local variable state and instruction pointer until the next call to `next()`.",
      "A new process is spawned.",
      "The function restarts from line 1."
    ],
    "correctAnswer": 1,
    "explanation": "A `yield` statement turns a function into a generator. When `yield` is reached, it produces a value to the caller and freezes execution, retaining all local variables and execution state in memory until the generator is resumed by `next()`.",
    "wrongOptionExplanations": {
      "0": "Permanent termination is the behavior of `return`, not `yield`.",
      "2": "Generators do not spawn OS processes.",
      "3": "Execution resumes immediately after the `yield` statement, not from the beginning."
    },
    "realWorldApplication": "Streaming large dataset rows one-by-one from database cursors without loading entire tables into RAM.",
    "placementTrap": "Calling a generator function does NOT execute its body immediately; it returns a generator object!"
  },
  {
    "id": "py-046",
    "module": "Programming Fundamentals / Python",
    "topic": "Generators",
    "subtopic": "StopIteration Exception",
    "difficulty": "medium",
    "type": "output",
    "question": "What happens when `next()` is called on a generator that has no more values to yield?",
    "codeSnippet": "def gen():\n    yield 1\ng = gen()\nnext(g)\nnext(g)",
    "options": [
      "Returns `None`",
      "Raises `StopIteration`",
      "Returns `1` again",
      "Raises `IndexError`"
    ],
    "correctAnswer": 1,
    "explanation": "When a generator reaches the end of its function body without yielding another value, it signals completion by raising the `StopIteration` exception. `for` loops automatically handle this exception to terminate iteration cleanly.",
    "wrongOptionExplanations": {
      "0": "`next()` raises an exception unless a default fallback is supplied (`next(g, None)`).",
      "2": "Generators do not automatically cycle or restart.",
      "3": "StopIteration is the protocol signal, not IndexError."
    },
    "realWorldApplication": "Understanding how the underlying iterator protocol coordinates with `for` loops and comprehensions.",
    "placementTrap": "You can provide a default value to prevent the exception: `next(gen, 'default_val')`!"
  },
  {
    "id": "py-047",
    "module": "Programming Fundamentals / Python",
    "topic": "Iterators",
    "subtopic": "iter() and next() Protocol",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What is the difference between an **iterable** and an **iterator** in Python?",
    "codeSnippet": "",
    "options": [
      "They are identical terms.",
      "An iterable is any object capable of returning its members one at a time (implements `__iter__`); an iterator is the object that produces values via `__next__` and maintains state.",
      "An iterator is a list; an iterable is a tuple.",
      "Iterables can only be iterated over once."
    ],
    "correctAnswer": 1,
    "explanation": "An **iterable** is any collection (like `list`, `str`, `dict`) that implements `__iter__()` to return an iterator. An **iterator** is a stateful object that implements both `__iter__()` and `__next__()`, remembering its current position and producing the next value on each `__next__()` call.",
    "wrongOptionExplanations": {
      "0": "They are distinct roles in the iteration protocol.",
      "2": "Lists and tuples are both iterables, not iterators.",
      "3": "Iterators are single-use streams; many iterables (like lists) can be iterated multiple times."
    },
    "realWorldApplication": "Implementing custom streaming data pipelines and infinite sequence generators.",
    "placementTrap": "Calling `iter(lst)` returns a new iterator for that list. A list is an iterable, NOT an iterator!"
  },
  {
    "id": "py-048",
    "module": "Programming Fundamentals / Python",
    "topic": "Generators",
    "subtopic": "Generator Expression Memory",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the output of `type((x for x in range(5)))` in Python?",
    "codeSnippet": "print(type((x for x in range(5))))",
    "options": [
      "<class 'tuple'>",
      "<class 'generator'>",
      "<class 'list'>",
      "<class 'iterator'>"
    ],
    "correctAnswer": 1,
    "explanation": "Parentheses enclosing a comprehension syntax create a generator expression, which produces an instance of `<class 'generator'>`. To create a tuple, you must pass the generator to the `tuple()` constructor.",
    "wrongOptionExplanations": {
      "0": "A tuple is created via `tuple(...)` or comma syntax `(1, 2)`, not bare comprehension parentheses.",
      "2": "List comprehensions use square brackets `[...]`.",
      "3": "A generator is an iterator, but its concrete type is `'generator'`."
    },
    "realWorldApplication": "Creating memory-efficient pipelines where intermediate data structures are not materialized in memory.",
    "placementTrap": "Do not confuse `(x for x in ...)` with a tuple! It is a generator!"
  },
  {
    "id": "py-049",
    "module": "Programming Fundamentals / Python",
    "topic": "Exceptions",
    "subtopic": "Reraising Exceptions with raise",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the purpose of using a bare `raise` statement inside an `except` block?",
    "codeSnippet": "try:\n    perform_action()\nexcept Exception:\n    log_error()\n    raise",
    "options": [
      "It ignores the error and continues execution.",
      "It re-raises the active exception being handled, preserving the original traceback.",
      "It converts the exception into a warning.",
      "It terminates the entire operating system."
    ],
    "correctAnswer": 1,
    "explanation": "A bare `raise` statement with no arguments re-raises the exception that is currently being handled in the active `except` block, preserving the original stack trace for debugging while allowing intermediate logging or cleanup.",
    "wrongOptionExplanations": {
      "0": "Ignoring an error is done via `pass`, not `raise`.",
      "2": "Warnings use the `warnings` module.",
      "3": "It raises the Python exception up the call stack, not terminating the OS."
    },
    "realWorldApplication": "Logging errors in middleware layers before propagating them up to global error handlers.",
    "placementTrap": "A bare `raise` preserves the original traceback. Writing `raise e` in Python 3 can sometimes obscure the original point of failure!"
  },
  {
    "id": "py-050",
    "module": "Programming Fundamentals / Python",
    "topic": "Functions",
    "subtopic": "Recursion Depth Limit",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What exception is raised when a recursive Python function exceeds the maximum recursion depth?",
    "codeSnippet": "",
    "options": [
      "MemoryError",
      "RecursionError",
      "StackOverflowError",
      "SystemError"
    ],
    "correctAnswer": 1,
    "explanation": "Python protects against C call-stack overflows by enforcing a maximum recursion depth (default 1000). When a recursive function fails to hit its base case and exceeds this limit, Python raises a `RecursionError` (a subclass of `RuntimeError`).",
    "wrongOptionExplanations": {
      "0": "MemoryError occurs when RAM is completely exhausted.",
      "2": "StackOverflowError is the Java exception; Python uses `RecursionError`.",
      "3": "SystemError is for internal interpreter bugs."
    },
    "realWorldApplication": "Setting `sys.setrecursionlimit()` when solving deep tree or graph traversal problems in competitive programming.",
    "placementTrap": "Python does NOT perform automatic Tail Call Optimization (TCO)! Deep recursion will trigger `RecursionError`."
  },
  {
    "id": "py-051",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "Class vs Instance Variables",
    "difficulty": "hard",
    "type": "output",
    "question": "What is printed by the following code snippet?",
    "codeSnippet": "class Dog:\n    species = 'Canine'\n    def __init__(self, name):\n        self.name = name\n\nd1 = Dog('Buddy')\nd2 = Dog('Max')\nd1.species = 'Feline'\nprint(d1.species, d2.species, Dog.species)",
    "options": [
      "Feline Canine Canine",
      "Feline Feline Feline",
      "Canine Canine Canine",
      "Feline Canine Feline"
    ],
    "correctAnswer": 0,
    "explanation": "Assigning `d1.species = 'Feline'` creates a new **instance attribute** on `d1` that shadows the class attribute. It does not alter the class variable on `Dog` or other instances. Thus `d1.species` is 'Feline', while `d2.species` and `Dog.species` remain 'Canine'.",
    "wrongOptionExplanations": {
      "1": "Modifying via an instance (`d1.attr = ...`) does not mutate the class attribute.",
      "2": "d1 was assigned an instance variable, so it does not remain 'Canine'.",
      "3": "Dog.species is unchanged."
    },
    "realWorldApplication": "Preventing unintended shared state bugs in multi-tenant SaaS backend service objects.",
    "placementTrap": "To modify a class variable for ALL instances, mutate it on the class itself: `Dog.species = 'Feline'`!"
  },
  {
    "id": "py-052",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "self Parameter",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "Why is `self` explicitly defined as the first parameter of instance methods in Python classes?",
    "codeSnippet": "",
    "options": [
      "`self` is a required language keyword that allocates memory.",
      "It represents the specific instance of the class upon which the method is called, allowing access to instance attributes and methods.",
      "`self` converts the method into a static method.",
      "`self` is required by the garbage collector to destroy objects."
    ],
    "correctAnswer": 1,
    "explanation": "In Python, `self` is not a keyword (it is a naming convention) representing the instance calling the method. When `obj.method(arg)` is executed, Python automatically translates it into `Class.method(obj, arg)`.",
    "wrongOptionExplanations": {
      "0": "`self` is a convention, not a reserved keyword (any valid identifier could be used).",
      "2": "Static methods use `@staticmethod` and do NOT take `self`.",
      "3": "Garbage collection is managed automatically via reference counting and cyclic GC."
    },
    "realWorldApplication": "Underpins all object-oriented programming, instance state encapsulation, and method routing in Python.",
    "placementTrap": "Forgetting `self` in method definitions results in `TypeError: method() takes 0 positional arguments but 1 was given`!"
  },
  {
    "id": "py-053",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "__new__ vs __init__",
    "difficulty": "hard",
    "type": "comparison",
    "question": "What is the difference between `__new__` and `__init__` in Python object construction?",
    "codeSnippet": "",
    "options": [
      "`__new__` initializes the instance; `__init__` creates and allocates the instance.",
      "`__new__` is the static constructor that creates and returns a new instance; `__init__` is the initializer that configures attributes on the newly created instance.",
      "`__new__` is only called for subclasses of Exception.",
      "There is no difference; they are aliases."
    ],
    "correctAnswer": 1,
    "explanation": "`__new__(cls, ...)` is the true constructor method that actually creates and returns the object in memory. `__init__(self, ...)` receives the newly created instance and initializes its state attributes. `__new__` runs first, followed by `__init__`.",
    "wrongOptionExplanations": {
      "0": "This is completely reversed: `__new__` creates; `__init__` initializes.",
      "2": "`__new__` is called on every class instantiation.",
      "3": "They serve distinct roles in the two-step instantiation lifecycle."
    },
    "realWorldApplication": "Implementing the Singleton design pattern, immutable subclasses (like subclassing `tuple`), and metaclasses.",
    "placementTrap": "If `__new__` does not return an instance of `cls`, the `__init__` method will NOT be executed!"
  },
  {
    "id": "py-054",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "__str__ vs __repr__",
    "difficulty": "medium",
    "type": "comparison",
    "question": "Which statement correctly distinguishes `__str__` from `__repr__` in Python?",
    "codeSnippet": "",
    "options": [
      "`__str__` is intended for developers for debugging; `__repr__` is for end users.",
      "`__str__` returns an informal, user-friendly string; `__repr__` returns an unambiguous, formal string often representing code to recreate the object.",
      "`__repr__` is called by `print()`; `__str__` is called by the REPL console.",
      "`__repr__` only works on numbers."
    ],
    "correctAnswer": 1,
    "explanation": "`__str__` aims to be readable for end users (invoked by `str(obj)` and `print()`). `__repr__` aims to be unambiguous and information-rich for developers during debugging (invoked in the interactive REPL and by `repr(obj)`). If `__str__` is not defined, Python falls back to `__repr__`.",
    "wrongOptionExplanations": {
      "0": "This is backwards: `__repr__` is for developers; `__str__` is for end users.",
      "2": "`print()` invokes `__str__` first; REPL invokes `__repr__`.",
      "3": "Both methods apply to all Python objects."
    },
    "realWorldApplication": "Creating informative model classes in Django or SQLAlchemy to make debugging and log inspections clear.",
    "placementTrap": "Rule of thumb: The output of `__repr__` should ideally look like valid Python code to recreate the object: `Point(x=1, y=2)`!"
  },
  {
    "id": "py-055",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "super() and Method Overriding",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed by the following inheritance example?",
    "codeSnippet": "class A:\n    def greet(self):\n        return 'Hello from A'\n\nclass B(A):\n    def greet(self):\n        return super().greet() + ' and B'\n\nprint(B().greet())",
    "options": [
      "'Hello from A'",
      "'Hello from A and B'",
      "'Hello from B'",
      "AttributeError: super object has no attribute greet"
    ],
    "correctAnswer": 1,
    "explanation": "`super().greet()` delegates to the parent class `A`'s implementation, returning `'Hello from A'`. Class `B` concatenates `' and B'`, returning `'Hello from A and B'`.",
    "wrongOptionExplanations": {
      "0": "Class B overrides greet() and appends additional text.",
      "2": "The super call incorporates A's greeting.",
      "3": "A has a valid `greet` method, so no AttributeError occurs."
    },
    "realWorldApplication": "Extending framework base classes (e.g. overriding `save()` in Django models while calling `super().save()`).",
    "placementTrap": "`super()` cleanly resolves method lookup order according to the class MRO!"
  },
  {
    "id": "py-056",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "Method Resolution Order (MRO)",
    "difficulty": "hard",
    "type": "output",
    "question": "In multiple inheritance with the Diamond problem (classes A, B(A), C(A), D(B, C)), which order does Python use to resolve methods?",
    "codeSnippet": "",
    "options": [
      "Depth-First Search without ordering: D -> B -> A -> C",
      "C3 Linearization algorithm: D -> B -> C -> A",
      "Breadth-First Search: D -> A -> B -> C",
      "Random resolution order"
    ],
    "correctAnswer": 1,
    "explanation": "Python uses the **C3 Linearization** algorithm to compute a deterministic Method Resolution Order (MRO). In a diamond hierarchy `D(B, C)`, subclass methods always take precedence over base class methods, resolving: `D -> B -> C -> A -> object`.",
    "wrongOptionExplanations": {
      "0": "Depth-first would incorrectly visit base A before sibling C.",
      "2": "Breadth-first does not satisfy monotonic class precedence.",
      "3": "MRO is strictly deterministic and inspected via `Class.__mro__`."
    },
    "realWorldApplication": "Designing mixin architectures and multi-tenant plugin engines without ambiguous method collisions.",
    "placementTrap": "You can inspect any class's exact lookup order by calling `Class.mro()` or accessing `Class.__mro__`!"
  },
  {
    "id": "py-057",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "Name Mangling with Double Underscores",
    "difficulty": "medium",
    "type": "output",
    "question": "What happens when accessing `obj.__secret` from outside the class?",
    "codeSnippet": "class Vault:\n    def __init__(self):\n        self.__secret = 1234\n\nv = Vault()\nprint(v.__secret)",
    "options": [
      "Prints 1234.",
      "AttributeError: 'Vault' object has no attribute '__secret'",
      "SecurityError: private attribute access denied",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "Identifiers with two leading underscores (e.g. `__secret`) undergo **name mangling**. The interpreter rewrites the attribute name to `_ClassName__attribute` (i.e. `_Vault__secret`) to prevent accidental overrides in subclasses, raising an `AttributeError` when accessed directly as `__secret`.",
    "wrongOptionExplanations": {
      "0": "Name mangling prevents direct external access under the unmangled name.",
      "2": "Python does not have a `SecurityError` for private attributes.",
      "3": "An exception is raised; it does not evaluate to None."
    },
    "realWorldApplication": "Preventing attribute name collisions when authoring reusable libraries and framework base classes.",
    "placementTrap": "Name mangling is NOT real security; the variable can still be accessed as `v._Vault__secret`!"
  },
  {
    "id": "py-058",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "classmethod vs staticmethod",
    "difficulty": "medium",
    "type": "comparison",
    "question": "What is the difference between `@classmethod` and `@staticmethod` in Python?",
    "codeSnippet": "",
    "options": [
      "`@classmethod` receives the class object (`cls`) as its first parameter; `@staticmethod` receives neither `self` nor `cls`.",
      "`@classmethod` can only be called on instances; `@staticmethod` can only be called on classes.",
      "`@staticmethod` can access instance variables; `@classmethod` cannot.",
      "They are completely identical."
    ],
    "correctAnswer": 0,
    "explanation": "A `@classmethod` receives the class (`cls`) as its implicit first argument, allowing it to modify class state or serve as alternative constructors. A `@staticmethod` receives neither `self` nor `cls`; it behaves like a regular function scoped within the class namespace.",
    "wrongOptionExplanations": {
      "1": "Both can be called on either the class or an instance.",
      "2": "Neither method has access to instance variables (`self`).",
      "3": "They differ in the implicit first argument passed by Python runtime."
    },
    "realWorldApplication": "Using `@classmethod` for factory constructors (`Date.from_string(...)`); using `@staticmethod` for isolated utility helpers.",
    "placementTrap": "`@classmethod` passes `cls` automatically; `@staticmethod` passes NO implicit first argument!"
  },
  {
    "id": "py-059",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "@property Decorator",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What is the main benefit of using the `@property` decorator in Python classes?",
    "codeSnippet": "",
    "options": [
      "It allows methods to run asynchronously.",
      "It allows a method to be accessed like an attribute (e.g. `obj.area` instead of `obj.area()`), enabling getters, setters, and data validation without breaking existing APIs.",
      "It prevents the class from being inherited.",
      "It automatically saves the object to disk."
    ],
    "correctAnswer": 1,
    "explanation": "The `@property` decorator turns a method into a getter. It allows developers to add computed logic or validation while presenting a clean, non-callable attribute interface (`circle.radius`), maintaining backward compatibility with code that accessed attributes directly.",
    "wrongOptionExplanations": {
      "0": "Asynchronous methods use `async def`, not `@property`.",
      "2": "Classes remain inheritable.",
      "3": "It does not provide disk persistence."
    },
    "realWorldApplication": "Enforcing data validation (e.g., ensuring `temperature` is above absolute zero) while keeping attribute-style syntax.",
    "placementTrap": "Pairs with `@prop.setter` to create controlled setters: `@radius.setter def radius(self, val): ...`!"
  },
  {
    "id": "py-060",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "__call__ Magic Method",
    "difficulty": "medium",
    "type": "output",
    "question": "What does implementing `__call__` on a class allow an instance to do?",
    "codeSnippet": "class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, val):\n        return self.factor * val\n\nm = Multiplier(3)\nprint(m(5))",
    "options": [
      "Raises TypeError: object is not callable",
      "Prints 15",
      "Prints 3",
      "Prints None"
    ],
    "correctAnswer": 1,
    "explanation": "The `__call__` method allows an instance of a class to be invoked directly as if it were a function. Calling `m(5)` invokes `m.__call__(5)`, which returns `3 * 5 = 15`.",
    "wrongOptionExplanations": {
      "0": "`__call__` makes the instance callable, preventing a TypeError.",
      "2": "It executes the multiplication with 5.",
      "3": "15 is computed and returned."
    },
    "realWorldApplication": "Creating stateful callable objects, custom decorators, and closure-like services with persistent configuration.",
    "placementTrap": "Implementing `__call__` makes `callable(instance)` evaluate to `True`!"
  },
  {
    "id": "py-061",
    "module": "Programming Fundamentals / Python",
    "topic": "Decorators",
    "subtopic": "Decorator Mechanism",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In Python, what is the syntactic equivalent of applying `@my_decorator` above a function definition `def greet(): pass`?",
    "codeSnippet": "",
    "options": [
      "`greet = my_decorator(greet)`",
      "`my_decorator = greet(my_decorator)`",
      "`greet = my_decorator() + greet`",
      "`greet = eval(my_decorator)`"
    ],
    "correctAnswer": 0,
    "explanation": "The `@decorator` syntax is syntactic sugar for passing the decorated function as an argument to the decorator and rebinding the function name to the return value: `greet = my_decorator(greet)`.",
    "wrongOptionExplanations": {
      "1": "The decorator accepts the function, not the reverse.",
      "2": "Addition syntax is invalid for functions.",
      "3": "Decorators do not involve `eval`."
    },
    "realWorldApplication": "Logging, authentication checks, caching, and rate limiting in web frameworks like Flask and FastAPI.",
    "placementTrap": "A decorator is simply a callable that takes a function as an argument and returns a new callable!"
  },
  {
    "id": "py-062",
    "module": "Programming Fundamentals / Python",
    "topic": "Decorators",
    "subtopic": "functools.wraps",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Why should `@functools.wraps(func)` be used inside a custom decorator wrapper?",
    "codeSnippet": "",
    "options": [
      "To speed up function execution.",
      "To preserve the original function's metadata, such as its name (`__name__`), docstring (`__doc__`), and module.",
      "To make the function thread-safe.",
      "To allow the function to accept infinite arguments."
    ],
    "correctAnswer": 1,
    "explanation": "When a decorator wraps a function, the wrapper function replaces the original. Without `@wraps`, the decorated function takes on the wrapper's identity (`__name__` becomes `'wrapper'`). `@functools.wraps(func)` copies the original function's metadata, keeping introspection, debugging tools, and documentation generators accurate.",
    "wrongOptionExplanations": {
      "0": "It does not alter runtime execution speed.",
      "2": "Thread safety requires explicit locks, not wraps.",
      "3": "Argument handling is determined by `*args, **kwargs`."
    },
    "realWorldApplication": "Ensuring auto-generated Swagger API documentation displays original endpoint names rather than generic wrapper names.",
    "placementTrap": "Always decorate your internal wrapper with `@functools.wraps(func)` to prevent losing `__name__`!"
  },
  {
    "id": "py-063",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "Duck Typing Principle",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What philosophy is expressed by the Python phrase: 'If it walks like a duck and quacks like a duck, it is a duck'?",
    "codeSnippet": "",
    "options": [
      "Every class must inherit from a Duck interface.",
      "An object's suitability is determined by the presence of specific methods and properties, rather than its explicit class inheritance or type.",
      "All objects must be strictly checked with `isinstance()` before use.",
      "Type annotations are mandatory in all files."
    ],
    "correctAnswer": 1,
    "explanation": "**Duck typing** means Python focuses on what an object can do (its interface and behavior) rather than what explicit class it inherits from. If an object has a `.read()` method, it can be used anywhere a file-like stream is expected, without needing to inherit from `io.IOBase`.",
    "wrongOptionExplanations": {
      "0": "Python does not require explicit interface inheritance for duck typing.",
      "2": "Duck typing discourages excessive `isinstance()` checks in favor of behavioral compatibility.",
      "3": "Type annotations are optional hints in Python."
    },
    "realWorldApplication": "Enabling polymorphic functions that accept lists, sets, generators, or custom iterables interchangeably.",
    "placementTrap": "Duck typing pairs with EAFP: 'Easier to ask for forgiveness than permission' (using `try/except` instead of rigid type checks)."
  },
  {
    "id": "py-064",
    "module": "Programming Fundamentals / Python",
    "topic": "OOP",
    "subtopic": "__slots__ Optimization",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "What is the primary benefit of declaring `__slots__` in a Python class?",
    "codeSnippet": "class Point:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y",
    "options": [
      "It prevents methods from being added to the class.",
      "It eliminates the default `__dict__` dictionary for each instance, significantly reducing memory consumption and preventing arbitrary dynamic attribute additions.",
      "It automatically encrypts attribute values in RAM.",
      "It enables GPU acceleration for the class."
    ],
    "correctAnswer": 1,
    "explanation": "By default, Python stores instance attributes in a per-instance `__dict__` dictionary. Defining `__slots__` allocates a fixed array of references for the specified attributes instead, saving significant memory when creating millions of small instances.",
    "wrongOptionExplanations": {
      "0": "Methods can still be defined on the class as usual.",
      "2": "Attributes are stored in plain memory, not encrypted.",
      "3": "It is a CPython memory optimization, unrelated to GPUs."
    },
    "realWorldApplication": "Optimizing micro-objects in high-throughput data processing, 3D graphics nodes, and network packet parsers.",
    "placementTrap": "Instances of classes with `__slots__` cannot have arbitrary new attributes assigned dynamically at runtime!"
  },
  {
    "id": "py-065",
    "module": "Programming Fundamentals / Python",
    "topic": "Functions",
    "subtopic": "Keyword-Only Arguments",
    "difficulty": "medium",
    "type": "output",
    "question": "How can a Python function enforce that certain arguments MUST be passed using keywords rather than positionally?",
    "codeSnippet": "",
    "options": [
      "By using the `keyword` decorator.",
      "By placing a bare asterisk `*` in the parameter list before the keyword-only parameters.",
      "By prefixing parameter names with `$()`.",
      "By capitalizing parameter names."
    ],
    "correctAnswer": 1,
    "explanation": "A bare `*` in a function signature indicates the end of positional arguments. Any arguments defined after the `*` (e.g. `def connect(host, port, *, timeout=30):`) are **keyword-only arguments** and will raise a `TypeError` if passed positionally.",
    "wrongOptionExplanations": {
      "0": "There is no built-in `keyword` decorator.",
      "2": "`$` is not valid Python parameter syntax.",
      "3": "Casing has no effect on parameter passing requirements."
    },
    "realWorldApplication": "Designing robust public APIs where boolean flags (like `def sort(*, reverse=True)`) must be explicit to avoid ambiguous positional calls.",
    "placementTrap": "`def f(a, *, b):` -> `f(1, 2)` raises `TypeError`; `f(1, b=2)` is required!"
  },
  {
    "id": "py-066",
    "module": "Programming Fundamentals / Python",
    "topic": "Searching",
    "subtopic": "Binary Search Precondition",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What fundamental precondition MUST be satisfied by a collection before Binary Search can be applied?",
    "codeSnippet": "",
    "options": [
      "The elements must all be positive integers.",
      "The collection must be sorted in ascending or descending order with random-access indexing.",
      "The collection must contain an odd number of items.",
      "The collection cannot contain duplicate values."
    ],
    "correctAnswer": 1,
    "explanation": "Binary Search relies on dividing the search space in half based on comparing the target with the median element. This halving strategy is only valid if the collection is **monotonically sorted**.",
    "wrongOptionExplanations": {
      "0": "Binary search works on any comparable data types (strings, floats, negative numbers).",
      "2": "It works on collections of any length (odd or even).",
      "3": "Binary search works with duplicate values (though returning the exact index may vary)."
    },
    "realWorldApplication": "Accelerating database index lookups and finding record boundaries in $O(\\log n)$ time.",
    "placementTrap": "Applying Binary Search on an unsorted array produces completely incorrect, invalid results!"
  },
  {
    "id": "py-067",
    "module": "Programming Fundamentals / Python",
    "topic": "Searching",
    "subtopic": "Binary Search Trace",
    "difficulty": "medium",
    "type": "output",
    "question": "How many comparisons are made to find the target `7` in the sorted list `[1, 3, 5, 7, 9, 11, 13]` using standard Binary Search?",
    "codeSnippet": "",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "The list has length 7 (indices 0 to 6). Initial middle index is `(0 + 6) // 2 = 3`. The element at index 3 is `7`, which matches the target on the very **first comparison**.",
    "wrongOptionExplanations": {
      "1": "Target is situated exactly at the middle index, requiring only 1 step.",
      "2": "3 steps would occur for elements near the boundaries (like 1 or 13).",
      "3": "4 is the worst-case number of comparisons $\\lfloor\\log_2 7\\rfloor + 1 = 3$."
    },
    "realWorldApplication": "Demonstrates best-case $O(1)$ time complexity when the target sits at the midpoint.",
    "placementTrap": "Always calculate the midpoint carefully: `mid = (low + high) // 2`!"
  },
  {
    "id": "py-068",
    "module": "Programming Fundamentals / Python",
    "topic": "Searching",
    "subtopic": "Binary Search Worst Case",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the worst-case time complexity of Binary Search on a sorted array of $n$ elements?",
    "codeSnippet": "",
    "options": [
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n)$",
      "$O(n \\log n)$"
    ],
    "correctAnswer": 1,
    "explanation": "In each iteration, Binary Search cuts the remaining search space in half ($n, n/2, n/4, \\dots, 1$). The maximum number of divisions before reaching size 1 is $\\log_2 n$, giving a worst-case time complexity of $O(\\log n)$.",
    "wrongOptionExplanations": {
      "0": "$O(1)$ is the best-case time complexity (when target is at the midpoint).",
      "2": "$O(n)$ is the complexity of Linear Search.",
      "3": "$O(n \\log n)$ is the complexity of efficient sorting algorithms, not search."
    },
    "realWorldApplication": "Allows searching through a billion records in at most ~30 comparisons.",
    "placementTrap": "Binary search requires $O(1)$ auxiliary space when implemented iteratively!"
  },
  {
    "id": "py-069",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Bubble Sort Pass 1 Trace",
    "difficulty": "medium",
    "type": "output",
    "question": "What is the state of the list `[5, 1, 4, 2, 8]` after the FIRST complete pass of Bubble Sort?",
    "codeSnippet": "",
    "options": [
      "[1, 2, 4, 5, 8]",
      "[1, 4, 2, 5, 8]",
      "[1, 5, 4, 2, 8]",
      "[5, 4, 2, 1, 8]"
    ],
    "correctAnswer": 1,
    "explanation": "In Pass 1, adjacent pairs are swapped if left > right: (5,1)->swap `[1,5,4,2,8]`; (5,4)->swap `[1,4,5,2,8]`; (5,2)->swap `[1,4,2,5,8]`; (5,8)->no swap `[1,4,2,5,8]`. The largest element (8) has bubbled to the final position.",
    "wrongOptionExplanations": {
      "0": "That is the fully sorted array after all passes.",
      "2": "That is only after the first pair comparison.",
      "3": "Incorrect comparison ordering."
    },
    "realWorldApplication": "Tracing sorting pass mechanics in placement online assessments.",
    "placementTrap": "After $k$ passes of Bubble Sort, the $k$ largest elements are guaranteed to be in their final sorted positions!"
  },
  {
    "id": "py-070",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Optimized Bubble Sort Best Case",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What is the best-case time complexity of an optimized Bubble Sort (using a swapped boolean flag) on an already sorted array?",
    "codeSnippet": "",
    "options": [
      "$O(n^2)$",
      "$O(n \\log n)$",
      "$O(n)$",
      "$O(1)$"
    ],
    "correctAnswer": 2,
    "explanation": "With an early-exit optimization flag, Bubble Sort scans through the array once. If no adjacent elements required swapping during the first pass, the flag indicates the array is already sorted and terminates, taking $O(n)$ time.",
    "wrongOptionExplanations": {
      "0": "Unoptimized Bubble Sort takes $O(n^2)$ even on sorted arrays, but the question specifies the optimized version.",
      "1": "Merge sort takes $O(n \\log n)$ in best case.",
      "3": "A full scan of $n$ elements requires at least $O(n)$ comparisons."
    },
    "realWorldApplication": "Recognizing when simple sorting routines are sufficient for nearly-sorted telemetry data.",
    "placementTrap": "Standard unoptimized bubble sort is always $O(n^2)$; only the flag-optimized version achieves $O(n)$ best case!"
  },
  {
    "id": "py-071",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Selection Sort Mechanism",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What distinguishes Selection Sort from Bubble Sort regarding the number of memory write (swap) operations?",
    "codeSnippet": "",
    "options": [
      "Selection Sort makes $O(n^2)$ swaps, whereas Bubble Sort makes $O(n)$ swaps.",
      "Selection Sort performs at most $O(n)$ swaps (exactly one swap per outer pass), whereas Bubble Sort can perform up to $O(n^2)$ swaps.",
      "Selection Sort never swaps any elements.",
      "Bubble Sort does not swap elements."
    ],
    "correctAnswer": 1,
    "explanation": "Selection Sort scans the unsorted subarray to find the minimum element and performs **at most one swap per outer pass**, resulting in at most $O(n)$ swaps total. Bubble Sort swaps adjacent elements whenever they are out of order, leading to up to $O(n^2)$ swaps in the worst case.",
    "wrongOptionExplanations": {
      "0": "This is completely backwards.",
      "2": "Selection sort swaps the found minimum into the current index.",
      "3": "Bubble sort swaps adjacent elements extensively."
    },
    "realWorldApplication": "Useful in flash memory or EEPROM systems where memory writes are physically expensive and degrade hardware lifespan.",
    "placementTrap": "Even though Selection Sort minimizes swaps to $O(n)$, its comparison count is ALWAYS $O(n^2)$ regardless of initial order!"
  },
  {
    "id": "py-072",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Insertion Sort Ideal Scenario",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "Under which condition does Insertion Sort achieve its optimal $O(n)$ running time?",
    "codeSnippet": "",
    "options": [
      "When the input array is sorted in reverse order.",
      "When the input array is already sorted or nearly sorted.",
      "When all elements are negative.",
      "When the array size is a power of 2."
    ],
    "correctAnswer": 1,
    "explanation": "Insertion Sort takes each element and shifts larger elements to the right. If the array is already sorted, each element is compared once with its immediate left predecessor and remains in place, executing in linear $O(n)$ time.",
    "wrongOptionExplanations": {
      "0": "Reverse sorted order is the WORST case for Insertion Sort ($O(n^2)$).",
      "2": "Sign of elements does not impact comparison operations.",
      "3": "Power of 2 is relevant for divide-and-conquer, not insertion sort."
    },
    "realWorldApplication": "Used as the base sorting routine for small partitions in hybrid algorithms like Timsort.",
    "placementTrap": "Insertion sort is exceptionally fast on very small lists ($n < 32$) and nearly-sorted streams!"
  },
  {
    "id": "py-073",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Merge Sort Characteristics",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Which of the following is true regarding standard Merge Sort on arrays?",
    "codeSnippet": "",
    "options": [
      "It is an in-place sort requiring $O(1)$ auxiliary space.",
      "It is a stable divide-and-conquer sorting algorithm with $O(n \\log n)$ time complexity across all cases (best, average, and worst), but requires $O(n)$ auxiliary space.",
      "Its worst-case time complexity is $O(n^2)$.",
      "It is an unstable sorting algorithm."
    ],
    "correctAnswer": 1,
    "explanation": "Merge Sort recursively divides the array into halves until singletons remain, then merges sorted subarrays. It consistently guarantees $O(n \\log n)$ time across best, average, and worst cases, is **stable** (preserves original order of duplicates), and requires $O(n)$ additional memory for merging buffers.",
    "wrongOptionExplanations": {
      "0": "Standard array merge sort requires $O(n)$ auxiliary buffer space.",
      "2": "Merge sort NEVER degrades to $O(n^2)$; its worst case is strictly $O(n \\log n)$.",
      "3": "Merge sort is stable because equal elements from the left subarray are picked before right elements."
    },
    "realWorldApplication": "Preferred for sorting linked lists (where merging requires $O(1)$ extra space) and external sorting of terabyte-scale disk files.",
    "placementTrap": "Merge Sort time is ALWAYS $O(n \\log n)$ regardless of initial array ordering!"
  },
  {
    "id": "py-074",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Quick Sort Worst Case Trigger",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "When does Quick Sort using the first element as pivot degrade to its worst-case time complexity of $O(n^2)$?",
    "codeSnippet": "",
    "options": [
      "When all elements are randomly distributed.",
      "When the input array is already sorted (in ascending or descending order).",
      "When the array contains distinct odd numbers.",
      "When the array length is a prime number."
    ],
    "correctAnswer": 1,
    "explanation": "If the first element is selected as pivot on an already sorted array, the partition splits the problem into one subproblem of size 0 and one of size $n - 1$. This unbalanced partitioning produces a recursion tree of depth $n$, resulting in $\\sum_{i=1}^n i = O(n^2)$ total comparisons.",
    "wrongOptionExplanations": {
      "0": "Random distributions yield balanced partitions with average time $O(n \\log n)$.",
      "2": "Values being odd does not affect partitioning.",
      "3": "Prime lengths have no bearing on recursion depth."
    },
    "realWorldApplication": "Using randomized pivots or 'median-of-three' pivot selection in production libraries to protect against $O(n^2)$ degradation.",
    "placementTrap": "Choosing a bad pivot turns Quick Sort from $O(n \\log n)$ into $O(n^2)$!"
  },
  {
    "id": "py-075",
    "module": "Programming Fundamentals / Python",
    "topic": "Sorting",
    "subtopic": "Python Timsort Algorithm",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What sorting algorithm is natively implemented by Python's `list.sort()` and `sorted()`?",
    "codeSnippet": "",
    "options": [
      "Pure Quick Sort",
      "Heap Sort",
      "Timsort (a hybrid of Merge Sort and Insertion Sort)",
      "Bubble Sort"
    ],
    "correctAnswer": 2,
    "explanation": "Python uses **Timsort**, an adaptive, stable hybrid sorting algorithm developed by Tim Peters. It divides data into natural sequential 'runs', sorts small runs using Binary Insertion Sort, and merges them using Merge Sort, achieving $O(n)$ best case and $O(n \\log n)$ worst case.",
    "wrongOptionExplanations": {
      "0": "Pure Quick Sort is not stable and degrades to $O(n^2)$.",
      "1": "Heap sort is not stable.",
      "3": "Bubble sort is too inefficient ($O(n^2)$)."
    },
    "realWorldApplication": "The standard sorting engine across Python and Java standard library collections (`java.util.Arrays.sort` for objects).",
    "placementTrap": "Timsort is STABLE: equal elements maintain their original relative order!"
  },
  {
    "id": "py-076",
    "module": "Programming Fundamentals / Python",
    "topic": "Recursion",
    "subtopic": "Fibonacci Recursion Tree Complexity",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the time complexity of naive recursive Fibonacci `def fib(n): return fib(n-1) + fib(n-2)` without memoization?",
    "codeSnippet": "",
    "options": [
      "$O(n)$",
      "$O(n \\log n)$",
      "$O(2^n)$",
      "$O(n^2)$"
    ],
    "correctAnswer": 2,
    "explanation": "The naive recursive implementation branches into two recursive calls for every node, producing a binary call tree of depth $n$. The total number of recursive function calls is approximately $2^n$ (specifically $O(1.618^n)$, the golden ratio), which is exponential $O(2^n)$.",
    "wrongOptionExplanations": {
      "0": "$O(n)$ requires dynamic programming or iterative computation.",
      "1": "Divide and conquer like merge sort is $O(n \\log n)$.",
      "3": "Polynomial $O(n^2)$ is significantly faster than exponential $O(2^n)$."
    },
    "realWorldApplication": "Illustrates the necessity of Dynamic Programming and memoization (`@lru_cache`) to avoid redundant subproblem recomputation.",
    "placementTrap": "Computing `fib(50)` naively makes over a quadrillion function calls and will freeze your system!"
  },
  {
    "id": "py-077",
    "module": "Programming Fundamentals / Python",
    "topic": "Recursion",
    "subtopic": "Memoization with lru_cache",
    "difficulty": "easy",
    "type": "output",
    "question": "How does applying `@functools.lru_cache(maxsize=None)` affect naive recursive Fibonacci?",
    "codeSnippet": "",
    "options": [
      "It raises a MemoryError.",
      "It reduces the time complexity from exponential $O(2^n)$ to linear $O(n)$ by caching results of subproblems.",
      "It converts the function into an iterative while loop.",
      "It runs the calculations on multiple threads."
    ],
    "correctAnswer": 1,
    "explanation": "`@lru_cache` stores the return value of each `fib(k)` call in a lookup dictionary. When a previously computed subproblem is encountered, it returns the cached result in $O(1)$ time, visiting each of the $n$ distinct states once for a total time of $O(n)$.",
    "wrongOptionExplanations": {
      "0": "Memory usage is modest ($O(n)$ dictionary entries), not exhausting RAM.",
      "2": "Execution remains recursive, but call branches are pruned by cache lookups.",
      "3": "It is single-threaded caching, not multi-threaded."
    },
    "realWorldApplication": "Accelerating expensive API lookups, mathematical recursive functions, and database query caches.",
    "placementTrap": "One line `@lru_cache` turns exponential algorithms into linear ones!"
  },
  {
    "id": "py-078",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Two Pointer Palindrome",
    "difficulty": "easy",
    "type": "output",
    "question": "What is the time and space complexity of checking if a string of length $n$ is a palindrome using two pointers converging from both ends?",
    "codeSnippet": "",
    "options": [
      "Time: $O(n)$, Auxiliary Space: $O(1)$",
      "Time: $O(n^2)$, Auxiliary Space: $O(n)$",
      "Time: $O(1)$, Auxiliary Space: $O(n)$",
      "Time: $O(\\log n)$, Auxiliary Space: $O(1)$"
    ],
    "correctAnswer": 0,
    "explanation": "The two-pointer technique places `left = 0` and `right = n - 1`, comparing characters and moving inward. It performs at most $n/2$ comparisons ($O(n)$ time) and only stores two pointer integer variables, using $O(1)$ extra memory.",
    "wrongOptionExplanations": {
      "1": "Checking does not require nested loops ($O(n^2)$).",
      "2": "You must inspect up to $n/2$ characters, which cannot be $O(1)$ time.",
      "3": "You cannot determine a palindrome in logarithmic time because every character could potentially invalidate it."
    },
    "realWorldApplication": "Memory-efficient text validation and bioinformatics DNA sequence palindromic loop detection.",
    "placementTrap": "String slicing `s == s[::-1]` takes $O(n)$ space because it creates a new reversed string; two pointers take $O(1)$ space!"
  },
  {
    "id": "py-079",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Anagram Checking with Counter",
    "difficulty": "medium",
    "type": "output",
    "question": "What is printed by the following anagram validation code?",
    "codeSnippet": "from collections import Counter\ns1 = 'silent'\ns2 = 'listen'\nprint(Counter(s1) == Counter(s2))",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "`Counter('silent')` and `Counter('listen')` both construct frequency dictionaries mapping each character to its occurrence count (`{'s':1, 'i':1, 'l':1, 'e':1, 'n':1, 't':1}`). Comparing the two Counter objects checks equality of character frequencies, which are identical, printing `True`.",
    "wrongOptionExplanations": {
      "1": "'silent' and 'listen' contain the exact same characters with the same frequencies.",
      "2": "Counter supports equality comparison via `==`.",
      "3": "Returns boolean True."
    },
    "realWorldApplication": "Plagiarism detection, anagram puzzle solvers, and genome sequence motif matching.",
    "placementTrap": "Frequency counting with `Counter` is $O(n)$ time, which is faster than sorting both strings ($O(n \\log n)$)!"
  },
  {
    "id": "py-080",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Binary Search Finding First Occurrence",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "When an array contains duplicate elements (e.g. `[1, 2, 2, 2, 3]`), how does modified Binary Search find the **first** occurrence of `2`?",
    "codeSnippet": "",
    "options": [
      "By terminating immediately when `arr[mid] == 2`.",
      "When `arr[mid] == target`, save `mid` as candidate and continue searching in the left half (`high = mid - 1`).",
      "By switching to a linear search from index 0.",
      "By sorting the array in reverse."
    ],
    "correctAnswer": 1,
    "explanation": "To find the first (leftmost) occurrence, when `arr[mid] == target`, you record `mid` as the best answer seen so far, but you do NOT return immediately. You shrink the search space to the left by setting `high = mid - 1` to check if another matching element exists earlier.",
    "wrongOptionExplanations": {
      "0": "Standard binary search terminates immediately, which could hit any arbitrary duplicate occurrence.",
      "2": "Switching to linear search degrades worst-case time to $O(n)$.",
      "3": "Reversing does not guarantee finding the first occurrence in $O(\\log n)$."
    },
    "realWorldApplication": "`bisect.bisect_left` in Python's standard library implements this exact logic.",
    "placementTrap": "`bisect_left` finds the leftmost insertion index; `bisect_right` finds the rightmost insertion index!"
  },
  {
    "id": "py-081",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Two Pointer Two-Sum on Sorted Array",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Given a sorted array of numbers, how does the Two-Pointer approach find two numbers that sum to a target in $O(n)$ time?",
    "codeSnippet": "",
    "options": [
      "Compute all $n^2$ pairs using nested loops.",
      "Place pointers at start (`left = 0`) and end (`right = n-1`). If `sum < target`, increment `left`; if `sum > target`, decrement `right`; stop when `sum == target`.",
      "Sort the array again using Quick Sort.",
      "Convert the array to a binary tree."
    ],
    "correctAnswer": 1,
    "explanation": "Since the array is sorted, if `arr[left] + arr[right] < target`, the sum is too small, so increasing `left` is the only way to increase the sum. If the sum is too large, decreasing `right` reduces the sum. This examines each element at most once in $O(n)$ time and $O(1)$ space.",
    "wrongOptionExplanations": {
      "0": "Nested loops take $O(n^2)$ time.",
      "2": "The array is already sorted; re-sorting is redundant.",
      "3": "Building a tree takes extra space and time."
    },
    "realWorldApplication": "Optimal financial portfolio matching and pairs trading algorithms.",
    "placementTrap": "The Two-Pointer approach for Two Sum ONLY works if the array is already sorted! For unsorted arrays, use a Hash Map!"
  },
  {
    "id": "py-082",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Sliding Window Maximum Sum",
    "difficulty": "medium",
    "type": "output",
    "question": "What is the maximum sum of any contiguous subarray of size 3 in `[2, 1, 5, 1, 3, 2]`?",
    "codeSnippet": "",
    "options": [
      "8",
      "9",
      "7",
      "11"
    ],
    "correctAnswer": 1,
    "explanation": "Subarrays of size 3: `[2, 1, 5]` = 8; `[1, 5, 1]` = 7; `[5, 1, 3]` = 9; `[1, 3, 2]` = 6. The maximum sum is 9 (`[5, 1, 3]`).",
    "wrongOptionExplanations": {
      "0": "8 is the sum of the first window `[2, 1, 5]`.",
      "2": "7 is the sum of `[1, 5, 1]`.",
      "3": "No contiguous 3-element window sums to 11."
    },
    "realWorldApplication": "Real-time network packet burst monitoring, calculating moving averages in trading algorithms.",
    "placementTrap": "Instead of summing all 3 elements from scratch each time ($O(n \\cdot k)$), slide the window by subtracting the outgoing element and adding the incoming element in $O(1)$!"
  },
  {
    "id": "py-083",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Prefix Sum Array",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the advantage of precomputing a Prefix Sum array `P` where `P[i] = arr[0] + ... + arr[i]`?",
    "codeSnippet": "",
    "options": [
      "It allows any range sum query `sum(arr[L...R])` to be answered in $O(1)$ time as `P[R] - P[L-1]`.",
      "It sorts the array in $O(n)$ time.",
      "It finds the maximum element in $O(1)$ time.",
      "It reduces array memory usage by half."
    ],
    "correctAnswer": 0,
    "explanation": "After an $O(n)$ precomputation, any subsequent contiguous range sum from index $L$ to $R$ can be calculated in $O(1)$ time via simple subtraction: `sum = P[R] - P[L-1]` (or `P[R]` if $L=0$), eliminating repeated loops over ranges.",
    "wrongOptionExplanations": {
      "1": "Prefix sum does not sort the array.",
      "2": "Finding maximums requires a Segment Tree or Sparse Table, not simple prefix sums.",
      "3": "Prefix sum arrays consume an additional $O(n)$ memory."
    },
    "realWorldApplication": "Geographic information systems (GIS) querying population within coordinate ranges, financial quarterly revenue intervals.",
    "placementTrap": "Prefix sums allow millions of range sum queries to execute in $O(1)$ time instead of $O(n)$ per query!"
  },
  {
    "id": "py-084",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Boyer-Moore Majority Vote",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "What does the Boyer-Moore Voting Algorithm find in $O(n)$ time and $O(1)$ auxiliary space?",
    "codeSnippet": "",
    "options": [
      "The longest common subsequence.",
      "The majority element in an array (an element that appears strictly more than $n/2$ times), if one exists.",
      "The shortest path between two graph nodes.",
      "The prime factors of all numbers in the array."
    ],
    "correctAnswer": 1,
    "explanation": "The Boyer-Moore Voting Algorithm maintains a `candidate` and a `count`. When `count == 0`, a new candidate is chosen. Matching elements increment `count`, while differing elements decrement `count`. If a majority element exists (frequency $> n/2$), it is guaranteed to survive as the candidate.",
    "wrongOptionExplanations": {
      "0": "Longest common subsequence requires $O(n \\cdot m)$ dynamic programming.",
      "2": "Shortest path uses Dijkstra or BFS.",
      "3": "Factorization requires mathematical sieves."
    },
    "realWorldApplication": "Real-time consensus protocols, streaming analytics identifying dominant network traffic origins.",
    "placementTrap": "Boyer-Moore only guarantees correctness if a true majority element (appearing $> n/2$ times) actually exists!"
  },
  {
    "id": "py-085",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Kadane's Algorithm",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What problem is solved by Kadane's Algorithm in $O(n)$ time and $O(1)$ space?",
    "codeSnippet": "",
    "options": [
      "Finding the maximum sum contiguous subarray in a 1D array of numbers.",
      "Finding the shortest cycle in a directed graph.",
      "Finding the median of two sorted arrays.",
      "Matrix multiplication."
    ],
    "correctAnswer": 0,
    "explanation": "Kadane's Algorithm computes the maximum contiguous subarray sum in linear time. At each index, it decides whether to extend the current running subarray (`current_sum + num`) or start a fresh subarray at the current number (`num`), updating `max_sum = max(max_sum, current_sum)`.",
    "wrongOptionExplanations": {
      "1": "Graph cycle detection uses Tarjan's or BFS/DFS.",
      "2": "Median of two sorted arrays uses binary search in $O(\\log(m+n))$.",
      "3": "Matrix multiplication uses Strassen's or standard $O(n^3)$."
    },
    "realWorldApplication": "Algorithmic trading finding optimal buy-sell profit windows, image processing feature extraction.",
    "placementTrap": "If all numbers in the array are negative, Kadane's algorithm must return the largest single negative number!"
  },
  {
    "id": "py-086",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Floyd's Cycle-Finding Algorithm",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In Floyd's Tortoise and Hare algorithm, how do two pointers detect a cycle in a linked list?",
    "codeSnippet": "",
    "options": [
      "Both pointers advance at 1 step per turn from opposite ends.",
      "A slow pointer moves 1 node per step while a fast pointer moves 2 nodes per step; if a cycle exists, the fast pointer will eventually catch and meet the slow pointer.",
      "The fast pointer deletes nodes as it traverses.",
      "The slow pointer counts the total nodes."
    ],
    "correctAnswer": 1,
    "explanation": "Because the fast pointer moves at twice the speed of the slow pointer, the distance between them increases by 1 node per iteration within the cycle. Therefore, the fast pointer is mathematically guaranteed to lap and collide with the slow pointer inside the loop without infinite looping.",
    "wrongOptionExplanations": {
      "0": "Opposite-end pointers require bidirectional traversal, impossible in singly linked lists.",
      "2": "Cycle detection does not mutate or delete list nodes.",
      "3": "Counting nodes cannot detect a cycle and would loop indefinitely."
    },
    "realWorldApplication": "Detecting infinite routing loops in network packet forwarding tables and circular deadlocks in resource allocation graphs.",
    "placementTrap": "Floyd's cycle detection uses $O(1)$ auxiliary space, whereas using a hash set uses $O(n)$ space!"
  },
  {
    "id": "py-087",
    "module": "Programming Fundamentals / Python",
    "topic": "Data Structures",
    "subtopic": "Valid Parentheses with Stack",
    "difficulty": "easy",
    "type": "output",
    "question": "Which data structure is most suitable for validating whether a string containing brackets `()[]{}` has balanced and properly nested brackets?",
    "codeSnippet": "",
    "options": [
      "Queue (FIFO)",
      "Stack (LIFO)",
      "Binary Search Tree",
      "Linked List without tail"
    ],
    "correctAnswer": 1,
    "explanation": "A **Stack (LIFO)** is ideal because the most recently opened bracket must be the first one closed. When an opening bracket is encountered, it is pushed onto the stack. When a closing bracket is found, it must match the bracket popped from the top of the stack.",
    "wrongOptionExplanations": {
      "0": "Queues process items in arrival order (FIFO), failing to match innermost nested brackets first.",
      "2": "Search trees are for ordered data lookups, not bracket matching.",
      "3": "A raw linked list without LIFO discipline is inefficient."
    },
    "realWorldApplication": "Compiler syntax parsers, JSON validators, and IDE syntax highlighters.",
    "placementTrap": "If the string ends and the stack is not empty, brackets are unbalanced (e.g. `'(('`)!"
  },
  {
    "id": "py-088",
    "module": "Programming Fundamentals / Python",
    "topic": "Data Structures",
    "subtopic": "Queue using deque vs list",
    "difficulty": "medium",
    "type": "comparison",
    "question": "Why should `collections.deque` be used instead of a standard Python `list` to implement a First-In-First-Out (FIFO) Queue?",
    "codeSnippet": "",
    "options": [
      "`list.pop(0)` takes $O(1)$ time, but deque takes $O(n)$.",
      "`list.pop(0)` takes $O(n)$ time because all remaining elements must be shifted in memory, whereas `deque.popleft()` takes $O(1)$ time.",
      "`list` can only hold integers, while `deque` holds any object.",
      "`deque` automatically sorts elements."
    ],
    "correctAnswer": 1,
    "explanation": "A Python `list` is a contiguous dynamic array. Removing the first element via `list.pop(0)` requires shifting all $n - 1$ remaining elements one position to the left in memory, taking $O(n)$ time. `collections.deque` is a doubly linked list of fixed-size blocks, providing guaranteed $O(1)$ appends and pops from both ends.",
    "wrongOptionExplanations": {
      "0": "This is completely backwards.",
      "2": "Both `list` and `deque` can store arbitrary object types.",
      "3": "`deque` does not sort elements; it maintains insertion order."
    },
    "realWorldApplication": "High-throughput task queues, Breadth-First Search (BFS) graph traversals, and packet buffers.",
    "placementTrap": "NEVER use `list.pop(0)` inside a loop! It turns $O(n)$ algorithms into $O(n^2)$! Always use `collections.deque`!"
  },
  {
    "id": "py-089",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Binary Tree Traversal Orders",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In a Binary Search Tree (BST), which tree traversal order visits node values in strictly **sorted ascending order**?",
    "codeSnippet": "",
    "options": [
      "Pre-order Traversal (Root, Left, Right)",
      "In-order Traversal (Left, Root, Right)",
      "Post-order Traversal (Left, Right, Root)",
      "Level-order Traversal (Breadth-First)"
    ],
    "correctAnswer": 1,
    "explanation": "By BST definition, all values in the left subtree are smaller than the root, and all values in the right subtree are larger. **In-order traversal** visits the left subtree, then the root, then the right subtree, naturally printing keys in sorted ascending order.",
    "wrongOptionExplanations": {
      "0": "Pre-order visits the root first, useful for cloning/serializing trees.",
      "2": "Post-order visits children before parents, useful for deleting or freeing tree nodes.",
      "3": "Level-order visits nodes level by level horizontally."
    },
    "realWorldApplication": "Extracting sorted data from database index B-trees and validating BST property integrity.",
    "placementTrap": "In-order traversal of a BST ALWAYS yields sorted keys!"
  },
  {
    "id": "py-090",
    "module": "Programming Fundamentals / Python",
    "topic": "Algorithms",
    "subtopic": "Two-Sum using Hash Map",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "How can the Two-Sum problem (finding two indices that sum to target) be solved in $O(n)$ time on an **unsorted** array?",
    "codeSnippet": "",
    "options": [
      "By sorting the array first and using two pointers.",
      "By iterating through the array while storing each element's complement (`target - num`) in a Hash Map to check for existence in $O(1)$ average time.",
      "By testing all pairs with nested loops.",
      "By computing the factorial of the target."
    ],
    "correctAnswer": 1,
    "explanation": "As you iterate through the array, for each number you check if its complement (`target - num`) already exists in the hash map. If so, you return their indices. If not, you insert the current number and index into the map. This achieves $O(n)$ time and $O(n)$ space in a single pass.",
    "wrongOptionExplanations": {
      "0": "Sorting takes $O(n \\log n)$ time and loses original index positions unless stored as pairs.",
      "2": "Testing all pairs takes $O(n^2)$ time.",
      "3": "Factorials are completely unrelated to two-sum."
    },
    "realWorldApplication": "The canonical tech interview problem assessing hash map lookup efficiency over brute-force search.",
    "placementTrap": "A single pass Hash Map checks `target - x in seen` in $O(1)$ average time!"
  },
  {
    "id": "py-091",
    "module": "Programming Fundamentals / Python",
    "topic": "Complexity",
    "subtopic": "in Operator List vs Set",
    "difficulty": "easy",
    "type": "comparison",
    "question": "What is the average time complexity of checking membership (`x in collection`) for a Python `list` versus a `set`?",
    "codeSnippet": "",
    "options": [
      "List: $O(1)$, Set: $O(n)$",
      "List: $O(n)$, Set: $O(1)$",
      "List: $O(\\log n)$, Set: $O(1)$",
      "Both are $O(1)$"
    ],
    "correctAnswer": 1,
    "explanation": "A Python `list` requires linear search, inspecting each element sequentially until a match is found ($O(n)$ average and worst case). A `set` is implemented as a hash table, where membership is determined by hashing `x` and checking the bucket in $O(1)$ average time.",
    "wrongOptionExplanations": {
      "0": "This is completely backwards.",
      "2": "Lists are unsorted by default and cannot use $O(\\log n)$ binary search.",
      "3": "Lists do not have $O(1)$ lookup time."
    },
    "realWorldApplication": "Dramatically accelerating deduplication filters and lookup tables across millions of customer IDs.",
    "placementTrap": "Replacing `item in large_list` with `item in large_set` can speed up programs by a factor of 10,000x!"
  },
  {
    "id": "py-092",
    "module": "Programming Fundamentals / Python",
    "topic": "Complexity",
    "subtopic": "List append vs insert(0)",
    "difficulty": "medium",
    "type": "comparison",
    "question": "What is the time complexity of `list.append(val)` compared to `list.insert(0, val)` in Python?",
    "codeSnippet": "",
    "options": [
      "`append()` is $O(1)$ amortized; `insert(0)` is $O(n)$.",
      "`append()` is $O(n)$; `insert(0)` is $O(1)$.",
      "Both are $O(1)$.",
      "Both are $O(n)$."
    ],
    "correctAnswer": 0,
    "explanation": "`list.append()` places the element at the pre-allocated end of the array buffer in $O(1)$ amortized time. `list.insert(0, val)` inserts at the front, requiring every existing element in the list to be shifted one position to the right in RAM, taking $O(n)$ time.",
    "wrongOptionExplanations": {
      "1": "This is backwards: appending at the end is fast; inserting at index 0 shifts memory.",
      "2": "`insert(0)` must shift all elements and cannot be $O(1)$.",
      "3": "Append uses over-allocation to achieve $O(1)$ amortized time."
    },
    "realWorldApplication": "Preventing performance bottlenecks in high-frequency data ingestion loops.",
    "placementTrap": "Repeatedly calling `lst.insert(0, x)` inside a loop of size $n$ creates an accidental $O(n^2)$ algorithm!"
  },
  {
    "id": "py-093",
    "module": "Programming Fundamentals / Python",
    "topic": "Complexity",
    "subtopic": "Dictionary Lookup Worst Case",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "While average dictionary lookup in Python is $O(1)$, what is the theoretical worst-case time complexity, and when does it occur?",
    "codeSnippet": "",
    "options": [
      "$O(\\log n)$, when the dictionary contains string keys.",
      "$O(n)$, when many distinct keys produce identical hash values (catastrophic hash collision).",
      "$O(n^2)$, when the dictionary size is prime.",
      "$O(1)$ is guaranteed in all cases."
    ],
    "correctAnswer": 1,
    "explanation": "If a poorly distributed hash function maps multiple distinct keys to the exact same hash bucket (hash collisions), Python's open addressing resolution must probe through collision chains, degrading lookup to $O(n)$ linear scan time.",
    "wrongOptionExplanations": {
      "0": "Hash tables do not use tree searches ($O(\\log n)$).",
      "2": "Worst case is linear $O(n)$, not quadratic.",
      "3": "$O(1)$ is the average case, not a hard mathematical guarantee for worst case."
    },
    "realWorldApplication": "Understanding HashDoS security vulnerabilities where attackers craft adversarial keys to overwhelm server CPU.",
    "placementTrap": "CPython randomizes string hash seeds on startup (`PYTHONHASHSEED`) specifically to defend against Hash collision DoS attacks!"
  },
  {
    "id": "py-094",
    "module": "Programming Fundamentals / Python",
    "topic": "Complexity",
    "subtopic": "String Concatenation in Loops",
    "difficulty": "medium",
    "type": "comparison",
    "question": "Why is `s = ''.join(str_list)` substantially faster than repeated string concatenation `s += char` in a loop?",
    "codeSnippet": "",
    "options": [
      "`str.join()` uses multi-core threading.",
      "Because strings are immutable, `s += char` allocates a brand new string and copies all previous characters on every iteration ($O(n^2)$ total), while `join()` calculates the total length once and copies characters in a single pass ($O(n)$).",
      "`+=` converts strings to floats.",
      "`join()` is implemented in assembly language while `+=` is in Python."
    ],
    "correctAnswer": 1,
    "explanation": "Python strings cannot be modified in place. Each `s += char` must allocate a new string in memory and copy all existing characters, producing $1 + 2 + 3 + ... + n = O(n^2)$ work. `str.join()` precomputes the required buffer size and allocates memory exactly once, performing the entire operation in linear $O(n)$ time.",
    "wrongOptionExplanations": {
      "0": "Join is single-threaded C code in CPython.",
      "2": "String concatenation never converts strings to floats.",
      "3": "Both are implemented in C, but their algorithmic time complexities ($O(n)$ vs $O(n^2)$) differ fundamentally."
    },
    "realWorldApplication": "Constructing large SQL queries, CSV reports, and HTML email templates efficiently.",
    "placementTrap": "Always collect string fragments in a list and call `''.join(lst)` at the end instead of concatenating with `+=` in loops!"
  },
  {
    "id": "py-095",
    "module": "Programming Fundamentals / Python",
    "topic": "Complexity",
    "subtopic": "Recursion Space Complexity",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What determines the auxiliary space complexity of a recursive algorithm?",
    "codeSnippet": "",
    "options": [
      "The total number of loop iterations inside the function.",
      "The maximum depth of the call stack (the maximum height of the recursion tree).",
      "The number of global variables in the file.",
      "The size of the hard drive."
    ],
    "correctAnswer": 1,
    "explanation": "Each recursive call allocates a new stack frame in memory storing local variables and return addresses. The maximum auxiliary memory used concurrently corresponds directly to the maximum height of the recursion tree (the deepest active call chain).",
    "wrongOptionExplanations": {
      "0": "Stack frames accumulate along call depth, not within loop iterations.",
      "2": "Global variables exist once in module scope, independent of recursion depth.",
      "3": "RAM stack frames are allocated in memory, not disk space."
    },
    "realWorldApplication": "Analyzing whether tree algorithms consume $O(h)$ space where $h$ is tree height (e.g. $O(\\log n)$ for balanced trees vs $O(n)$ for skewed trees).",
    "placementTrap": "Even if an algorithm does not allocate any new data structures, recursive call stack frames still consume $O(depth)$ memory!"
  },
  {
    "id": "py-096",
    "module": "Programming Fundamentals / Python",
    "topic": "Bit Manipulation",
    "subtopic": "Power of Two Check",
    "difficulty": "hard",
    "type": "output",
    "question": "What does the expression `(n > 0) and (n & (n - 1) == 0)` determine for an integer `n`?",
    "codeSnippet": "",
    "options": [
      "Whether `n` is an odd number.",
      "Whether `n` is a power of 2.",
      "Whether `n` is a prime number.",
      "Whether `n` is divisible by 10."
    ],
    "correctAnswer": 1,
    "explanation": "A power of two in binary has exactly one `1` bit (e.g. $8 = 1000_2$). Subtracting 1 flips all bits up to that bit ($7 = 0111_2$). Performing bitwise AND between them yields 0: `1000 & 0111 == 0000`. If `n > 0` and `n & (n - 1) == 0`, `n` is strictly a power of 2.",
    "wrongOptionExplanations": {
      "0": "Checking for odd numbers uses `n & 1 == 1`.",
      "2": "Primes cannot be determined by a single bitwise operation.",
      "3": "Divisibility by 10 uses modulo: `n % 10 == 0`."
    },
    "realWorldApplication": "High-performance memory allocation buffer sizing, hash table bucket growth algorithms.",
    "placementTrap": "`n & (n - 1)` clears the lowest set bit of `n` in $O(1)$ time!"
  },
  {
    "id": "py-097",
    "module": "Programming Fundamentals / Python",
    "topic": "Bit Manipulation",
    "subtopic": "Single Number using XOR",
    "difficulty": "medium",
    "type": "output",
    "question": "In an array where every element appears twice except for one unique element, how does bitwise XOR (`^`) find the unique number in $O(n)$ time and $O(1)$ space?",
    "codeSnippet": "",
    "options": [
      "By XORing all elements together; duplicate pairs cancel each other out ($x \\oplus x = 0$), leaving only the unique element ($0 \\oplus u = u$).",
      "By multiplying all elements by 2.",
      "By taking the square root of the sum.",
      "By sorting the bits."
    ],
    "correctAnswer": 0,
    "explanation": "Bitwise XOR is commutative and associative, with the properties: $x \\oplus x = 0$ (self-inverse) and $x \\oplus 0 = x$ (identity). XORing every number in the array reduces all paired numbers to 0, leaving strictly the single non-duplicate number: `result ^= num`.",
    "wrongOptionExplanations": {
      "1": "Multiplication cannot cancel duplicate elements in place.",
      "2": "Square roots do not isolate unique elements.",
      "3": "XOR operates directly on raw integer bits without sorting."
    },
    "realWorldApplication": "Classic placement interview algorithm; cryptographic hash checksum verification and error-detection parity bits.",
    "placementTrap": "XOR properties: $A \\oplus A = 0$, $A \\oplus 0 = A$, and $A \\oplus B \\oplus A = B$!"
  },
  {
    "id": "py-098",
    "module": "Programming Fundamentals / Python",
    "topic": "Python Runtime",
    "subtopic": "Global Interpreter Lock (GIL)",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the impact of CPython's Global Interpreter Lock (GIL) on multi-threaded programs?",
    "codeSnippet": "",
    "options": [
      "It prevents multiple threads from performing network I/O concurrently.",
      "It ensures that only one native CPU thread executes Python bytecode at a time, preventing multi-threaded CPU-bound tasks from running in parallel across multiple CPU cores.",
      "It encrypts all thread memory buffers.",
      "It shuts down the interpreter after 10 seconds."
    ],
    "correctAnswer": 1,
    "explanation": "The GIL is a mutex that protects CPython's memory management (especially reference counting) from race conditions. Because only one thread holds the GIL to execute bytecode at any instant, multi-threading cannot achieve true CPU parallelism on multi-core processors for CPU-bound computations.",
    "wrongOptionExplanations": {
      "0": "I/O-bound threads release the GIL during network/disk waiting, allowing concurrent I/O.",
      "2": "The GIL is a concurrency lock, not an encryption system.",
      "3": "The GIL has no time limit."
    },
    "realWorldApplication": "Understanding when to use the `multiprocessing` module or native C extensions instead of `threading` for CPU-intensive tasks.",
    "placementTrap": "For CPU-bound tasks in Python, use `multiprocessing` (separate processes with separate GILs); for I/O-bound tasks, use `threading` or `asyncio`!"
  },
  {
    "id": "py-099",
    "module": "Programming Fundamentals / Python",
    "topic": "Concurrency",
    "subtopic": "multiprocessing vs threading",
    "difficulty": "medium",
    "type": "comparison",
    "question": "Which Python module should be selected to parallelize a heavy mathematical calculation across all available CPU cores?",
    "codeSnippet": "",
    "options": [
      "`threading`",
      "`multiprocessing`",
      "`asyncio`",
      "`time`"
    ],
    "correctAnswer": 1,
    "explanation": "Because `multiprocessing` spawns separate OS processes, each process has its own dedicated Python interpreter and memory space with its own GIL. This allows CPU-bound calculations to achieve true hardware parallelism across multiple CPU cores.",
    "wrongOptionExplanations": {
      "0": "`threading` is constrained by the GIL and cannot achieve parallel CPU execution in CPython.",
      "2": "`asyncio` is single-threaded cooperative multitasking, designed for I/O concurrency, not CPU parallelism.",
      "3": "`time` is for clock timing, not task concurrency."
    },
    "realWorldApplication": "Image rendering pipelines, machine learning training data preprocessing, and scientific simulations.",
    "placementTrap": "Use `multiprocessing` for CPU-bound tasks; use `threading` or `asyncio` for network/disk I/O!"
  },
  {
    "id": "py-100",
    "module": "Programming Fundamentals / Python",
    "topic": "Performance",
    "subtopic": "List vs Generator Memory Profiling",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "Why does `sys.getsizeof([x for x in range(100000)])` return megabytes of RAM while `sys.getsizeof((x for x in range(100000)))` returns only ~100 bytes?",
    "codeSnippet": "",
    "options": [
      "The generator compresses numbers into a zip archive.",
      "The list allocates memory for all 100,000 integer pointers immediately, while the generator is an iterator object maintaining only the state required to generate the next item on demand.",
      "Lists store numbers as 64-bit strings.",
      "Generators store data on the hard drive."
    ],
    "correctAnswer": 1,
    "explanation": "A list comprehension materializes the entire collection in memory at once, allocating memory for every element. A generator expression stores only a small state machine containing the current step and bytecode pointer, yielding values lazily one at a time and requiring constant $O(1)$ memory regardless of collection size.",
    "wrongOptionExplanations": {
      "0": "Generators compute values dynamically via code, not compression archives.",
      "2": "Lists store native integer pointers, not strings.",
      "3": "Generators operate entirely in RAM."
    },
    "realWorldApplication": "Processing multi-gigabyte log files and streaming database cursors on memory-constrained servers without crashing with `MemoryError`.",
    "placementTrap": "Generators offer lazy evaluation: they compute values only when requested, saving massive amounts of memory!"
  }
];
if (!window.QUESTION_BANKS) window.QUESTION_BANKS = {};
window.QUESTION_BANKS['python'] = window.PYTHON_QUESTIONS;
