const questions = [
  // EASY
  {
    id: 1,
    question: "What is the intersection of a row and a column in an Excel worksheet called?",
    options: ["Table", "Cell", "Grid", "Range"],
    correctAnswer: 1,
    difficulty: "Easy",
    topic: "Excel Basics",
    concept: "Cells",
    explanation: "A cell is the fundamental building block of a worksheet where data is entered.",
    whyCorrect: "The intersection of a horizontal row and a vertical column forms a single rectangle called a cell.",
    whyOthersAreWrong: {
      0: "A table is a collection of related data organized in rows and columns, not a single intersection.",
      2: "Grid refers to the overall layout of lines forming the cells, not the individual intersection itself.",
      3: "A range is a group or block of multiple cells, not a single intersection."
    }
  },
  {
    id: 2,
    question: "Which symbol must always be used to begin a formula in Excel?",
    options: ["#", "@", "=", "+"],
    correctAnswer: 2,
    difficulty: "Easy",
    topic: "Formulas and Operators",
    concept: "Formula begins with =",
    explanation: "Excel requires a specific character to recognize that the contents of a cell are a formula and not just text.",
    whyCorrect: "An equal sign (=) at the start of a cell tells Excel to calculate the formula that follows.",
    whyOthersAreWrong: {
      0: "The hash symbol (#) is typically seen in error messages (like #VALUE!).",
      1: "The '@' symbol is used in some specific modern dynamic array functions and table references, but not to start a general formula.",
      3: "While starting with '+' sometimes works for backward compatibility with older spreadsheet software, '=' is the standard and correct way."
    }
  },
  {
    id: 3,
    question: "What is the keyboard shortcut to save an existing Excel workbook?",
    options: ["Ctrl+P", "Ctrl+C", "Ctrl+Z", "Ctrl+S"],
    correctAnswer: 3,
    difficulty: "Easy",
    topic: "Excel Shortcuts",
    concept: "Ctrl+S",
    explanation: "Shortcuts are key combinations that perform common tasks quickly.",
    whyCorrect: "Ctrl+S is the universal shortcut in Windows for saving a document.",
    whyOthersAreWrong: {
      0: "Ctrl+P opens the Print dialog.",
      1: "Ctrl+C is used to copy selected data.",
      2: "Ctrl+Z undoes the last action."
    }
  },
  {
    id: 4,
    question: "Where does the Name Box appear in the Excel interface?",
    options: ["To the left of the formula bar", "At the bottom of the worksheet", "Inside the Ribbon", "On the status bar"],
    correctAnswer: 0,
    difficulty: "Easy",
    topic: "Excel Basics",
    concept: "Name box",
    explanation: "The Name Box is a UI element that shows the reference of the active cell or named range.",
    whyCorrect: "The Name Box is located on the formula bar level, immediately to the left of the formula input area.",
    whyOthersAreWrong: {
      1: "The bottom of the worksheet contains sheet tabs and the status bar.",
      2: "The Ribbon is at the top and contains tabs with various commands, not the Name Box.",
      3: "The status bar at the very bottom shows quick aggregates (sum, count) and view options."
    }
  },
  {
    id: 5,
    question: "Which feature combines multiple selected cells into one larger cell and centers the content?",
    options: ["Wrap Text", "Group Cells", "Merge and Center", "Combine Cells"],
    correctAnswer: 2,
    difficulty: "Easy",
    topic: "Data Entry and Formatting",
    concept: "Merge and Center",
    explanation: "This is a common formatting tool used for creating headers spanning multiple columns.",
    whyCorrect: "Merge and Center combines the selected cells into a single cell and centers the text horizontally.",
    whyOthersAreWrong: {
      0: "Wrap Text makes text flow onto multiple lines within the same cell, rather than merging cells.",
      1: "Group Cells is used to outline and collapse rows/columns, not format individual cells.",
      3: "Combine Cells is not standard Excel terminology for this specific formatting feature."
    }
  },
  {
    id: 6,
    question: "Which function calculates the arithmetic mean of a range of numerical values?",
    options: ["SUM", "AVERAGE", "MEAN", "MEDIAN"],
    correctAnswer: 1,
    difficulty: "Easy",
    topic: "Basic Functions",
    concept: "AVERAGE",
    explanation: "The arithmetic mean is calculated by adding all numbers and dividing by the count of numbers.",
    whyCorrect: "The AVERAGE function in Excel directly calculates the arithmetic mean of the provided arguments.",
    whyOthersAreWrong: {
      0: "SUM only adds the numbers together; it does not divide by the count.",
      2: "MEAN is not a valid standard Excel function name for arithmetic mean.",
      3: "MEDIAN finds the middle value of a dataset, which is different from the average/mean."
    }
  },
  {
    id: 7,
    question: "If a cell contains text that is too long to fit horizontally and you want it to display on multiple lines within the same cell, which option should you use?",
    options: ["Merge and Center", "AutoFit Column Width", "Wrap Text", "Shrink to Fit"],
    correctAnswer: 2,
    difficulty: "Easy",
    topic: "Data Entry and Formatting",
    concept: "Wrap Text",
    explanation: "This formatting option affects how text overflowing a cell's boundaries is displayed.",
    whyCorrect: "Wrap Text forces long text to break into multiple lines so it remains visible without widening the column.",
    whyOthersAreWrong: {
      0: "Merge and Center combines adjacent cells rather than wrapping text within one cell.",
      1: "AutoFit Column Width changes the column size, but doesn't put text on multiple lines.",
      3: "Shrink to Fit reduces the font size until the text fits on one line."
    }
  },
  {
    id: 8,
    question: "What is the correct cell address for the cell located in the third column and fourth row?",
    options: ["3D", "4C", "C4", "D3"],
    correctAnswer: 2,
    difficulty: "Easy",
    topic: "Excel Basics",
    concept: "Cell address",
    explanation: "Excel cell addresses are constructed using column letters followed by row numbers.",
    whyCorrect: "The third column is 'C' (A, B, C) and the fourth row is '4'. Therefore, the address is C4.",
    whyOthersAreWrong: {
      0: "Row/column references must start with a letter. '3D' implies row 3, column D.",
      1: "The column letter always precedes the row number. '4C' is incorrect formatting.",
      3: "D3 refers to the fourth column (D) and third row (3)."
    }
  },
  {
    id: 9,
    question: "Which function returns the lowest value in a range of cells?",
    options: ["LOW", "BOTTOM", "MIN", "SMALL"],
    correctAnswer: 2,
    difficulty: "Easy",
    topic: "Basic Functions",
    concept: "MIN",
    explanation: "Excel has specific statistical functions to find extremes in a dataset.",
    whyCorrect: "The MIN function evaluates a range and returns the smallest numerical value.",
    whyOthersAreWrong: {
      0: "LOW is not an Excel function.",
      1: "BOTTOM is not an Excel function.",
      3: "SMALL returns the k-th smallest value, requiring a second argument (like SMALL(range, 2) for the 2nd smallest)."
    }
  },
  {
    id: 10,
    question: "What is the keyboard shortcut to select all cells in a worksheet?",
    options: ["Ctrl+A", "Ctrl+S", "Ctrl+X", "Ctrl+F"],
    correctAnswer: 0,
    difficulty: "Easy",
    topic: "Excel Shortcuts",
    concept: "Ctrl+A",
    explanation: "This shortcut is commonly used to apply formatting to an entire sheet or copy everything.",
    whyCorrect: "Ctrl+A selects all cells in the worksheet (or all cells in a contiguous data table if the cursor is inside one).",
    whyOthersAreWrong: {
      1: "Ctrl+S saves the workbook.",
      2: "Ctrl+X cuts the selected data.",
      3: "Ctrl+F opens the Find dialog."
    }
  },
  // MEDIUM
  {
    id: 11,
    question: "Which of the following represents an Absolute Cell Reference in Excel?",
    options: ["A1", "$A$1", "A$1", "$A1"],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Cell References",
    concept: "Absolute reference",
    explanation: "Cell references can be relative, absolute, or mixed to control how they change when copied.",
    whyCorrect: "$A$1 is an absolute reference. The $ sign locks both the column (A) and row (1) so it won't change when copied.",
    whyOthersAreWrong: {
      0: "A1 is a relative reference; both column and row will change when copied.",
      2: "A$1 is a mixed reference where only the row is locked.",
      3: "$A1 is a mixed reference where only the column is locked."
    }
  },
  {
    id: 12,
    question: "If you need to count how many cells in a range contain any type of data (text, numbers, or errors) and are not empty, which function should you use?",
    options: ["COUNT", "COUNTIF", "COUNTA", "COUNTBLANK"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Basic Functions",
    concept: "COUNTA",
    explanation: "Different count functions exist depending on the specific type of data you want to tally.",
    whyCorrect: "COUNTA counts all non-empty cells in a range, regardless of data type (text, numbers, booleans, errors).",
    whyOthersAreWrong: {
      0: "COUNT only counts cells that contain numbers.",
      1: "COUNTIF counts cells that meet a specific single condition.",
      3: "COUNTBLANK counts only the empty cells."
    }
  },
  {
    id: 13,
    question: "What is the correct syntax for an IF function?",
    options: [
      "=IF(logical_test, value_if_true)",
      "=IF(logical_test, value_if_true, value_if_false)",
      "=IF(value_if_true, logical_test, value_if_false)",
      "=IF(logical_test)"
    ],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Conditional Functions",
    concept: "IF",
    explanation: "The IF function requires a test and specifies what to do if the test passes or fails.",
    whyCorrect: "The correct syntax has three parts: =IF(logical_test, value_if_true, value_if_false).",
    whyOthersAreWrong: {
      0: "This is missing the 'value_if_false' argument, meaning it will just return 'FALSE' if the condition isn't met.",
      2: "The arguments are in the wrong order; the logical test must come first.",
      3: "This syntax is incomplete and will result in an error."
    }
  },
  {
    id: 14,
    question: "In the formula =5+2*3, what will be the result based on Excel's operator precedence?",
    options: ["21", "10", "11", "30"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Formulas and Operators",
    concept: "Operator precedence",
    explanation: "Excel follows standard mathematical order of operations (PEMDAS/BODMAS).",
    whyCorrect: "Multiplication happens before addition. 2*3=6, then 5+6=11.",
    whyOthersAreWrong: {
      0: "21 would be the result if addition happened first (5+2 = 7, 7*3 = 21).",
      1: "10 is numerically unrelated to the operations.",
      3: "30 is an incorrect calculation."
    }
  },
  {
    id: 15,
    question: "You have a large dataset and want the top row (headers) to remain visible while scrolling down. Which feature accomplishes this?",
    options: ["Split Window", "Lock Cells", "Freeze Panes", "Protect Sheet"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Excel Data Tools",
    concept: "Freeze Panes",
    explanation: "This is a view setting, not a data alteration.",
    whyCorrect: "Freeze Panes allows you to keep specific rows or columns visible when scrolling through a worksheet.",
    whyOthersAreWrong: {
      0: "Split Window creates independent scrolling areas, which is different from locking a header in place.",
      1: "Lock Cells prevents data from being edited, but doesn't affect scrolling visibility.",
      3: "Protect Sheet restricts user actions (like editing or formatting) on the sheet."
    }
  },
  {
    id: 16,
    question: "Which feature can automatically extract the first names from a column of full names by recognizing the pattern you type in the adjacent column?",
    options: ["AutoFill", "Text to Columns", "Flash Fill", "Find and Replace"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Excel Data Tools",
    concept: "Flash Fill",
    explanation: "This tool automatically fills in values when it senses a pattern.",
    whyCorrect: "Flash Fill (Ctrl+E) senses data patterns (like extracting first names) and automatically fills the rest of the column.",
    whyOthersAreWrong: {
      0: "AutoFill copies data or continues simple series (like days of the week), but cannot intelligently extract parts of strings.",
      1: "Text to Columns splits data using a delimiter, but Flash Fill is the feature that recognizes patterns as you type.",
      3: "Find and Replace changes specific text strings but doesn't extract data based on patterns."
    }
  },
  {
    id: 17,
    question: "If you have a list of 100 employee names, but 5 of them are accidentally entered twice, which tool quickly eliminates the duplicates?",
    options: ["Filter", "Data Validation", "Remove Duplicates", "Conditional Formatting"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Excel Data Tools",
    concept: "Remove Duplicates",
    explanation: "This tool is found on the Data tab and cleans up datasets.",
    whyCorrect: "Remove Duplicates identifies identical rows in the selected range and permanently deletes the extra copies.",
    whyOthersAreWrong: {
      0: "Filter can temporarily hide duplicates (using Advanced Filter), but doesn't remove them directly.",
      1: "Data Validation restricts what can be entered into a cell; it doesn't clean existing data.",
      3: "Conditional Formatting can highlight duplicates, but it does not remove them."
    }
  },
  {
    id: 18,
    question: "To restrict users to only enter a date between Jan 1, 2024 and Dec 31, 2024 into a cell, you should use:",
    options: ["Data Validation", "Format Cells", "Conditional Formatting", "Protect Sheet"],
    correctAnswer: 0,
    difficulty: "Medium",
    topic: "Excel Data Tools",
    concept: "Data Validation",
    explanation: "This feature controls what type of data or values are allowed in a cell.",
    whyCorrect: "Data Validation allows you to set specific rules (like a date range) that must be met for data to be entered in a cell.",
    whyOthersAreWrong: {
      1: "Format Cells changes how data looks (e.g., displaying a number as a date), but doesn't restrict what is typed.",
      2: "Conditional Formatting changes cell appearance based on values, but does not stop invalid data entry.",
      3: "Protect Sheet locks cells entirely from editing, rather than allowing restricted data entry."
    }
  },
  {
    id: 19,
    question: "When creating a chart to show the trend of sales over 12 months, which chart type is generally best suited?",
    options: ["Pie chart", "Line chart", "Scatter plot", "Doughnut chart"],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Charts",
    concept: "Line chart",
    explanation: "Different charts visualize different types of data relationships.",
    whyCorrect: "A Line chart is specifically designed to show trends over time (continuous data) by connecting data points with a line.",
    whyOthersAreWrong: {
      0: "A Pie chart shows parts of a whole (percentages) for a single moment, not trends over time.",
      2: "A Scatter plot shows the relationship between two numerical variables, not typically a single trend over time.",
      3: "A Doughnut chart is a variation of a pie chart and also shows parts of a whole."
    }
  },
  {
    id: 20,
    question: "What does the keyboard shortcut F2 do in Excel?",
    options: ["Opens the Save As dialog", "Enters edit mode for the active cell", "Creates a chart", "Opens the Find dialog"],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Excel Shortcuts",
    concept: "F2",
    explanation: "This is one of the most frequently used shortcuts for data entry.",
    whyCorrect: "Pressing F2 puts the active cell into edit mode and places the cursor at the end of the cell's contents.",
    whyOthersAreWrong: {
      0: "F12 opens the Save As dialog.",
      2: "F11 creates a chart in a new sheet.",
      3: "Ctrl+F opens the Find dialog."
    }
  },
  {
    id: 21,
    question: "You want to count how many employees in a list belong to the 'Sales' department. Which function is appropriate?",
    options: ["SUMIF", "COUNT", "COUNTA", "COUNTIF"],
    correctAnswer: 3,
    difficulty: "Medium",
    topic: "Conditional Functions",
    concept: "COUNTIF",
    explanation: "This requires counting cells based on a specific text criterion.",
    whyCorrect: "COUNTIF counts the number of cells within a range that meet a single specific condition (e.g., equals 'Sales').",
    whyOthersAreWrong: {
      0: "SUMIF adds numerical values based on a condition; it doesn't count instances.",
      1: "COUNT only counts cells with numbers.",
      2: "COUNTA counts all non-empty cells, regardless of department."
    }
  },
  {
    id: 22,
    question: "What does the AND() function do in Excel?",
    options: [
      "Joins two text strings together",
      "Returns TRUE if all arguments evaluate to TRUE",
      "Returns TRUE if at least one argument evaluates to TRUE",
      "Adds two numbers together"
    ],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "Conditional Functions",
    concept: "AND",
    explanation: "AND is a logical function often used within IF statements.",
    whyCorrect: "The AND function evaluates multiple conditions and returns TRUE only if every single condition is met.",
    whyOthersAreWrong: {
      0: "The CONCATENATE function or the ampersand (&) operator joins text strings.",
      2: "This describes the OR function.",
      3: "The SUM function or the plus (+) operator adds numbers."
    }
  },
  {
    id: 23,
    question: "If the formula =A$1+B2 is copied from cell C2 and pasted into cell C3, what will the formula become in C3?",
    options: ["=A$1+B3", "=A$2+B3", "=A$1+B2", "=B$1+C3"],
    correctAnswer: 0,
    difficulty: "Medium",
    topic: "Cell References",
    concept: "Mixed reference",
    explanation: "Consider how absolute ($) and relative references change when moving down one row.",
    whyCorrect: "Moving down one row changes relative row numbers by +1. B2 becomes B3. The A$1 reference has the row (1) locked, so it remains A$1.",
    whyOthersAreWrong: {
      1: "The $ before the 1 prevents it from changing to a 2.",
      2: "The relative reference B2 must change when copied down.",
      3: "The column references (A, B) do not change because the formula is copied to the same column (C)."
    }
  },
  {
    id: 24,
    question: "Which operation allows you to perform a calculation (like adding 10%) on a range of numbers without writing a separate formula, by using Paste Special?",
    options: ["Values", "Formats", "Multiply/Add operation", "Transpose"],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Data Entry and Formatting",
    concept: "Copy and paste",
    explanation: "Paste Special has mathematical operation capabilities.",
    whyCorrect: "Paste Special -> Operation allows you to Add, Subtract, Multiply, or Divide the copied value into the destination cells.",
    whyOthersAreWrong: {
      0: "Paste Values only strips formatting and formulas, replacing them with the raw result.",
      1: "Paste Formats only applies the visual styling (colors, borders).",
      3: "Transpose switches rows to columns and vice versa."
    }
  },
  {
    id: 25,
    question: "How do you apply a filter to your data in Excel?",
    options: [
      "Select Data tab > Filter",
      "Select Insert tab > Filter",
      "Select View tab > Filter",
      "Select Review tab > Filter"
    ],
    correctAnswer: 0,
    difficulty: "Medium",
    topic: "Sorting and Filtering",
    concept: "Filter",
    explanation: "Filtering is considered a data manipulation task.",
    whyCorrect: "The Filter tool is located on the Data tab (and also on the Home tab under Sort & Filter).",
    whyOthersAreWrong: {
      1: "Insert is used for adding objects like charts, tables, and pictures.",
      2: "View handles zoom, page layout, and freezing panes.",
      3: "Review handles spell check, comments, and sheet protection."
    }
  },
  // HARD
  {
    id: 26,
    question: "Evaluate this formula: =IF(A1>90, \"A\", IF(A1>80, \"B\", \"C\")). If A1 contains the value 85, what is the result?",
    options: ["A", "B", "C", "FALSE"],
    correctAnswer: 1,
    difficulty: "Hard",
    topic: "Conditional Functions",
    concept: "IF",
    explanation: "This is a nested IF statement. Excel evaluates it from left to right, stopping at the first TRUE condition.",
    whyCorrect: "A1 (85) is not >90, so the first test is FALSE. It moves to the second test: A1 (85) > 80 is TRUE. Therefore, it returns 'B'.",
    whyOthersAreWrong: {
      0: "A1 is 85, which is not greater than 90.",
      2: "'C' would only be returned if both A1>90 and A1>80 were FALSE (e.g., A1 is 75).",
      3: "The formula is fully enclosed and has a final 'value_if_false' ('C'), so it will never return FALSE."
    }
  },
  {
    id: 27,
    question: "You want to sum the total sales in column C (C2:C10) only for records where the region in column A (A2:A10) is 'North'. What is the correct formula?",
    options: [
      "=SUMIF(C2:C10, \"North\", A2:A10)",
      "=SUMIF(A2:A10, C2:C10, \"North\")",
      "=SUMIF(A2:A10, \"North\", C2:C10)",
      "=SUM(A2:A10, \"North\", C2:C10)"
    ],
    correctAnswer: 2,
    difficulty: "Hard",
    topic: "Conditional Functions",
    concept: "SUMIF",
    explanation: "The SUMIF function syntax is =SUMIF(range, criteria, [sum_range]).",
    whyCorrect: "Range to check is A2:A10. Criteria is 'North'. Range to sum is C2:C10. Hence, =SUMIF(A2:A10, \"North\", C2:C10).",
    whyOthersAreWrong: {
      0: "The criteria range and sum range are swapped.",
      1: "The arguments are out of order.",
      3: "SUM cannot accept conditional logic like 'North' in this way."
    }
  },
  {
    id: 28,
    question: "In Excel, what is the result of the formula =4*2^2+8/2?",
    options: ["20", "68", "36", "16"],
    correctAnswer: 0,
    difficulty: "Hard",
    topic: "Formulas and Operators",
    concept: "Operator precedence",
    explanation: "Excel calculates based on Exponents first, then Multiplication/Division, then Addition/Subtraction.",
    whyCorrect: "Exponents first: 2^2 = 4. Equation is now 4*4+8/2. Multiplication/Division next: 4*4 = 16, and 8/2 = 4. Addition last: 16+4 = 20.",
    whyOthersAreWrong: {
      1: "If calculated strictly left to right without precedence: 4*2=8, 8^2=64, 64+8=72, 72/2=36. None of these mistake paths easily yield 68.",
      2: "Calculated left to right: (4*2)=8, 8^2=64. 64+8=72. 72/2=36.",
      3: "A miscalculation of the mathematical steps."
    }
  },
  {
    id: 29,
    question: "If you want to allow a user to sort a table by 'Department' first, and then by 'Salary' within each department, how do you accomplish this?",
    options: [
      "Click Filter, sort Department, then click Filter on Salary",
      "Use the Custom Sort dialog to add multiple levels of sorting",
      "It is impossible to sort by more than one column in Excel",
      "Apply the SORT function twice in the same cell"
    ],
    correctAnswer: 1,
    difficulty: "Hard",
    topic: "Sorting and Filtering",
    concept: "Multiple-column sorting",
    explanation: "Standard sorting buttons only sort by one column at a time.",
    whyCorrect: "The Custom Sort feature (Data > Sort) allows you to add multiple 'levels' (e.g., Sort by Department, Then by Salary).",
    whyOthersAreWrong: {
      0: "Sorting Salary using quick filters will override the previous Department sort.",
      2: "Excel fully supports multi-level sorting.",
      3: "The SORT function cannot be applied 'twice in the same cell' in this manner for standard table sorting."
    }
  },
  {
    id: 30,
    question: "Evaluate: =IF(OR(A1>50, B1>50), \"Pass\", \"Fail\"). If A1=40 and B1=60, what is the result?",
    options: ["Pass", "Fail", "TRUE", "Error"],
    correctAnswer: 0,
    difficulty: "Hard",
    topic: "Conditional Functions",
    concept: "OR",
    explanation: "The OR function returns TRUE if ANY of its conditions are true.",
    whyCorrect: "A1>50 is FALSE. B1>50 is TRUE. Since one is TRUE, the OR function evaluates to TRUE. The IF function then returns the 'value_if_true', which is 'Pass'.",
    whyOthersAreWrong: {
      1: "Fail would only be returned if BOTH A1 and B1 were 50 or less.",
      2: "TRUE is evaluated internally, but the IF function replaces it with the text 'Pass'.",
      3: "The formula syntax is completely valid."
    }
  }
];

let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;

// DOM Elements
const elements = {
  themeToggle: document.getElementById('theme-toggle'),
  body: document.body,
  
  // Header
  progressText: document.getElementById('progress-text'),
  progressBar: document.getElementById('progress-bar-fill'),
  scoreDisplay: document.getElementById('score-display'),
  
  // Card elements
  questionNumber: document.getElementById('question-number'),
  difficultyBadge: document.getElementById('difficulty-badge'),
  topicBadge: document.getElementById('topic-badge'),
  conceptBadge: document.getElementById('concept-badge'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  
  // Explanation area
  explanationArea: document.getElementById('explanation-area'),
  statusIcon: document.getElementById('status-icon'),
  statusText: document.getElementById('status-text'),
  explanationText: document.getElementById('explanation-text'),
  whyCorrectText: document.getElementById('why-correct'),
  whyOthersText: document.getElementById('why-others'),
  
  // Controls
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  
  // Completion
  flashcardArea: document.getElementById('flashcard-area'),
  completionArea: document.getElementById('completion-area'),
  finalScore: document.getElementById('final-score'),
  finalPercentage: document.getElementById('final-percentage'),
  finalCorrect: document.getElementById('final-correct'),
  finalWrong: document.getElementById('final-wrong'),
  finalAttempted: document.getElementById('final-attempted'),
  performanceMessage: document.getElementById('performance-message'),
  restartBtn: document.getElementById('restart-btn')
};

// Initialize
function init() {
  loadTheme();
  loadQuestion();
  setupEventListeners();
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    elements.body.classList.add('dark-mode');
  }
}

function setupEventListeners() {
  elements.themeToggle.addEventListener('click', () => {
    elements.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', elements.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  elements.prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  });

  elements.nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      showCompletionScreen();
    }
  });

  elements.restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    questions.forEach(q => delete q.userAnswer); // Reset answers
    elements.completionArea.classList.add('hidden');
    elements.flashcardArea.classList.remove('hidden');
    loadQuestion();
  });
}

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  
  // Update header
  elements.progressText.textContent = \`Question \${currentQuestionIndex + 1} of \${questions.length}\`;
  elements.progressBar.style.width = \`\${((currentQuestionIndex) / questions.length) * 100}%\`;
  elements.scoreDisplay.textContent = \`Score: \${score}\`;
  
  // Update badges & question
  elements.questionNumber.textContent = \`Q\${q.id}\`;
  elements.difficultyBadge.textContent = q.difficulty;
  elements.difficultyBadge.className = \`badge diff-\${q.difficulty.toLowerCase()}\`;
  elements.topicBadge.textContent = q.topic;
  elements.conceptBadge.textContent = q.concept;
  elements.questionText.textContent = q.question;
  
  // Clear and populate options
  elements.optionsContainer.innerHTML = '';
  q.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = \`<span class="option-letter">\${String.fromCharCode(65 + index)}</span> <span class="option-text">\${optionText}</span>\`;
    
    // If already answered, show state
    if (q.userAnswer !== undefined) {
      btn.disabled = true;
      if (index === q.correctAnswer) {
        btn.classList.add('correct');
      } else if (index === q.userAnswer) {
        btn.classList.add('wrong');
      }
    } else {
      btn.addEventListener('click', () => selectOption(index));
    }
    
    elements.optionsContainer.appendChild(btn);
  });
  
  // Handle explanation visibility and nav buttons
  if (q.userAnswer !== undefined) {
    showExplanation(q, q.userAnswer === q.correctAnswer);
    elements.nextBtn.disabled = false;
  } else {
    elements.explanationArea.classList.add('hidden');
    elements.nextBtn.disabled = true; // Wait for answer before allowing next
  }
  
  elements.prevBtn.disabled = currentQuestionIndex === 0;
  
  // Update next button text on last question
  if (currentQuestionIndex === questions.length - 1 && q.userAnswer !== undefined) {
    elements.nextBtn.textContent = 'Finish';
  } else {
    elements.nextBtn.textContent = 'Next';
  }
}

function selectOption(selectedIndex) {
  const q = questions[currentQuestionIndex];
  q.userAnswer = selectedIndex;
  
  const isCorrect = selectedIndex === q.correctAnswer;
  if (isCorrect) {
    score += 1;
    correctCount++;
  } else {
    wrongCount++;
  }
  
  // Update UI for all options
  const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctAnswer) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('wrong');
    }
  });
  
  elements.scoreDisplay.textContent = \`Score: \${score}\`;
  elements.progressBar.style.width = \`\${((currentQuestionIndex + 1) / questions.length) * 100}%\`;
  
  showExplanation(q, isCorrect);
  
  elements.nextBtn.disabled = false;
  if (currentQuestionIndex === questions.length - 1) {
    elements.nextBtn.textContent = 'Finish';
  }
}

function showExplanation(q, isCorrect) {
  elements.explanationArea.classList.remove('hidden');
  
  if (isCorrect) {
    elements.explanationArea.className = 'explanation-area success';
    elements.statusIcon.innerHTML = '✓';
    elements.statusText.textContent = 'Correct!';
  } else {
    elements.explanationArea.className = 'explanation-area error';
    elements.statusIcon.innerHTML = '✗';
    elements.statusText.textContent = 'Incorrect';
  }
  
  elements.explanationText.textContent = q.explanation;
  elements.whyCorrectText.textContent = \`Why Correct: \${q.whyCorrect}\`;
  
  elements.whyOthersText.innerHTML = '<strong>Why others are wrong:</strong><br>';
  for (const [key, value] of Object.entries(q.whyOthersAreWrong)) {
    const letter = String.fromCharCode(65 + parseInt(key));
    elements.whyOthersText.innerHTML += \`<div><strong>Option \${letter}:</strong> \${value}</div>\`;
  }
}

function showCompletionScreen() {
  elements.flashcardArea.classList.add('hidden');
  elements.completionArea.classList.remove('hidden');
  
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  
  elements.finalScore.textContent = \`\${score} / \${total}\`;
  elements.finalPercentage.textContent = \`\${percentage}%\`;
  elements.finalCorrect.textContent = correctCount;
  elements.finalWrong.textContent = wrongCount;
  elements.finalAttempted.textContent = correctCount + wrongCount;
  
  let msg = '';
  if (percentage >= 90) msg = "Excellent! You are highly prepared for Excel placement questions.";
  else if (percentage >= 70) msg = "Good job! You have a solid grasp of Excel basics and formulas.";
  else if (percentage >= 50) msg = "Fair attempt. Review the explanations to strengthen your concepts.";
  else msg = "Keep practicing! Excel is crucial for many roles. Review the concepts and try again.";
  
  elements.performanceMessage.textContent = msg;
}

// Start
document.addEventListener('DOMContentLoaded', init);
