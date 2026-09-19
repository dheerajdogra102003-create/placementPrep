// Microsoft Office Suite (Excel, Word, PowerPoint) - 90 Placement MCQs\nconst questionsData = [
  {
    "id": 1,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Basics",
    "concept": "Cells",
    "difficulty": "Easy",
    "question": "What is the intersection of a row and a column in an Excel worksheet called?",
    "options": [
      "Table",
      "Cell",
      "Grid",
      "Range"
    ],
    "correctAnswer": 1,
    "explanation": "A cell is the fundamental building block of a worksheet where data is entered.",
    "whyCorrect": "The intersection of a horizontal row and a vertical column forms a single rectangle called a cell.",
    "whyOthersAreWrong": {
      "0": "A table is a collection of related data organized in rows and columns, not a single intersection.",
      "2": "Grid refers to the overall layout of lines forming the cells, not the individual intersection itself.",
      "3": "A range is a group or block of multiple cells, not a single intersection."
    },
    "realWorldApplication": ""
  },
  {
    "id": 2,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Formulas and Operators",
    "concept": "Formula begins with =",
    "difficulty": "Easy",
    "question": "Which symbol must always be used to begin a formula in Excel?",
    "options": [
      "#",
      "@",
      "=",
      "+"
    ],
    "correctAnswer": 2,
    "explanation": "Excel requires a specific character to recognize that the contents of a cell are a formula and not just text.",
    "whyCorrect": "An equal sign (=) at the start of a cell tells Excel to calculate the formula that follows.",
    "whyOthersAreWrong": {
      "0": "The hash symbol (#) is typically seen in error messages (like #VALUE!).",
      "1": "The '@' symbol is used in some specific modern dynamic array functions and table references, but not to start a general formula.",
      "3": "While starting with '+' sometimes works for backward compatibility with older spreadsheet software, '=' is the standard and correct way."
    },
    "realWorldApplication": ""
  },
  {
    "id": 3,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Shortcuts",
    "concept": "Ctrl+S",
    "difficulty": "Easy",
    "question": "What is the keyboard shortcut to save an existing Excel workbook?",
    "options": [
      "Ctrl+P",
      "Ctrl+C",
      "Ctrl+Z",
      "Ctrl+S"
    ],
    "correctAnswer": 3,
    "explanation": "Shortcuts are key combinations that perform common tasks quickly.",
    "whyCorrect": "Ctrl+S is the universal shortcut in Windows for saving a document.",
    "whyOthersAreWrong": {
      "0": "Ctrl+P opens the Print dialog.",
      "1": "Ctrl+C is used to copy selected data.",
      "2": "Ctrl+Z undoes the last action."
    },
    "realWorldApplication": ""
  },
  {
    "id": 4,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Basics",
    "concept": "Name box",
    "difficulty": "Easy",
    "question": "Where does the Name Box appear in the Excel interface?",
    "options": [
      "To the left of the formula bar",
      "At the bottom of the worksheet",
      "Inside the Ribbon",
      "On the status bar"
    ],
    "correctAnswer": 0,
    "explanation": "The Name Box is a UI element that shows the reference of the active cell or named range.",
    "whyCorrect": "The Name Box is located on the formula bar level, immediately to the left of the formula input area.",
    "whyOthersAreWrong": {
      "1": "The bottom of the worksheet contains sheet tabs and the status bar.",
      "2": "The Ribbon is at the top and contains tabs with various commands, not the Name Box.",
      "3": "The status bar at the very bottom shows quick aggregates (sum, count) and view options."
    },
    "realWorldApplication": ""
  },
  {
    "id": 5,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Data Entry and Formatting",
    "concept": "Merge and Center",
    "difficulty": "Easy",
    "question": "Which feature combines multiple selected cells into one larger cell and centers the content?",
    "options": [
      "Wrap Text",
      "Group Cells",
      "Merge and Center",
      "Combine Cells"
    ],
    "correctAnswer": 2,
    "explanation": "This is a common formatting tool used for creating headers spanning multiple columns.",
    "whyCorrect": "Merge and Center combines the selected cells into a single cell and centers the text horizontally.",
    "whyOthersAreWrong": {
      "0": "Wrap Text makes text flow onto multiple lines within the same cell, rather than merging cells.",
      "1": "Group Cells is used to outline and collapse rows/columns, not format individual cells.",
      "3": "Combine Cells is not standard Excel terminology for this specific formatting feature."
    },
    "realWorldApplication": ""
  },
  {
    "id": 6,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Basic Functions",
    "concept": "AVERAGE",
    "difficulty": "Easy",
    "question": "Which function calculates the arithmetic mean of a range of numerical values?",
    "options": [
      "SUM",
      "AVERAGE",
      "MEAN",
      "MEDIAN"
    ],
    "correctAnswer": 1,
    "explanation": "The arithmetic mean is calculated by adding all numbers and dividing by the count of numbers.",
    "whyCorrect": "The AVERAGE function in Excel directly calculates the arithmetic mean of the provided arguments.",
    "whyOthersAreWrong": {
      "0": "SUM only adds the numbers together; it does not divide by the count.",
      "2": "MEAN is not a valid standard Excel function name for arithmetic mean.",
      "3": "MEDIAN finds the middle value of a dataset, which is different from the average/mean."
    },
    "realWorldApplication": ""
  },
  {
    "id": 7,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Data Entry and Formatting",
    "concept": "Wrap Text",
    "difficulty": "Easy",
    "question": "If a cell contains text that is too long to fit horizontally and you want it to display on multiple lines within the same cell, which option should you use?",
    "options": [
      "Merge and Center",
      "AutoFit Column Width",
      "Wrap Text",
      "Shrink to Fit"
    ],
    "correctAnswer": 2,
    "explanation": "This formatting option affects how text overflowing a cell's boundaries is displayed.",
    "whyCorrect": "Wrap Text forces long text to break into multiple lines so it remains visible without widening the column.",
    "whyOthersAreWrong": {
      "0": "Merge and Center combines adjacent cells rather than wrapping text within one cell.",
      "1": "AutoFit Column Width changes the column size, but doesn't put text on multiple lines.",
      "3": "Shrink to Fit reduces the font size until the text fits on one line."
    },
    "realWorldApplication": ""
  },
  {
    "id": 8,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Basics",
    "concept": "Cell address",
    "difficulty": "Easy",
    "question": "What is the correct cell address for the cell located in the third column and fourth row?",
    "options": [
      "3D",
      "4C",
      "C4",
      "D3"
    ],
    "correctAnswer": 2,
    "explanation": "Excel cell addresses are constructed using column letters followed by row numbers.",
    "whyCorrect": "The third column is 'C' (A, B, C) and the fourth row is '4'. Therefore, the address is C4.",
    "whyOthersAreWrong": {
      "0": "Row/column references must start with a letter. '3D' implies row 3, column D.",
      "1": "The column letter always precedes the row number. '4C' is incorrect formatting.",
      "3": "D3 refers to the fourth column (D) and third row (3)."
    },
    "realWorldApplication": ""
  },
  {
    "id": 9,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Basic Functions",
    "concept": "MIN",
    "difficulty": "Easy",
    "question": "Which function returns the lowest value in a range of cells?",
    "options": [
      "LOW",
      "BOTTOM",
      "MIN",
      "SMALL"
    ],
    "correctAnswer": 2,
    "explanation": "Excel has specific statistical functions to find extremes in a dataset.",
    "whyCorrect": "The MIN function evaluates a range and returns the smallest numerical value.",
    "whyOthersAreWrong": {
      "0": "LOW is not an Excel function.",
      "1": "BOTTOM is not an Excel function.",
      "3": "SMALL returns the k-th smallest value, requiring a second argument (like SMALL(range, 2) for the 2nd smallest)."
    },
    "realWorldApplication": ""
  },
  {
    "id": 10,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Shortcuts",
    "concept": "Ctrl+A",
    "difficulty": "Easy",
    "question": "What is the keyboard shortcut to select all cells in a worksheet?",
    "options": [
      "Ctrl+A",
      "Ctrl+S",
      "Ctrl+X",
      "Ctrl+F"
    ],
    "correctAnswer": 0,
    "explanation": "This shortcut is commonly used to apply formatting to an entire sheet or copy everything.",
    "whyCorrect": "Ctrl+A selects all cells in the worksheet (or all cells in a contiguous data table if the cursor is inside one).",
    "whyOthersAreWrong": {
      "1": "Ctrl+S saves the workbook.",
      "2": "Ctrl+X cuts the selected data.",
      "3": "Ctrl+F opens the Find dialog."
    },
    "realWorldApplication": ""
  },
  {
    "id": 11,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Cell References",
    "concept": "Absolute reference",
    "difficulty": "Medium",
    "question": "Which of the following represents an Absolute Cell Reference in Excel?",
    "options": [
      "A1",
      "$A$1",
      "A$1",
      "$A1"
    ],
    "correctAnswer": 1,
    "explanation": "Cell references can be relative, absolute, or mixed to control how they change when copied.",
    "whyCorrect": "$A$1 is an absolute reference. The $ sign locks both the column (A) and row (1) so it won't change when copied.",
    "whyOthersAreWrong": {
      "0": "A1 is a relative reference; both column and row will change when copied.",
      "2": "A$1 is a mixed reference where only the row is locked.",
      "3": "$A1 is a mixed reference where only the column is locked."
    },
    "realWorldApplication": ""
  },
  {
    "id": 12,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Basic Functions",
    "concept": "COUNTA",
    "difficulty": "Medium",
    "question": "If you need to count how many cells in a range contain any type of data (text, numbers, or errors) and are not empty, which function should you use?",
    "options": [
      "COUNT",
      "COUNTIF",
      "COUNTA",
      "COUNTBLANK"
    ],
    "correctAnswer": 2,
    "explanation": "Different count functions exist depending on the specific type of data you want to tally.",
    "whyCorrect": "COUNTA counts all non-empty cells in a range, regardless of data type (text, numbers, booleans, errors).",
    "whyOthersAreWrong": {
      "0": "COUNT only counts cells that contain numbers.",
      "1": "COUNTIF counts cells that meet a specific single condition.",
      "3": "COUNTBLANK counts only the empty cells."
    },
    "realWorldApplication": ""
  },
  {
    "id": 13,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Conditional Functions",
    "concept": "IF",
    "difficulty": "Medium",
    "question": "What is the correct syntax for an IF function?",
    "options": [
      "=IF(logical_test, value_if_true)",
      "=IF(logical_test, value_if_true, value_if_false)",
      "=IF(value_if_true, logical_test, value_if_false)",
      "=IF(logical_test)"
    ],
    "correctAnswer": 1,
    "explanation": "The IF function requires a test and specifies what to do if the test passes or fails.",
    "whyCorrect": "The correct syntax has three parts: =IF(logical_test, value_if_true, value_if_false).",
    "whyOthersAreWrong": {
      "0": "This is missing the 'value_if_false' argument, meaning it will just return 'FALSE' if the condition isn't met.",
      "2": "The arguments are in the wrong order; the logical test must come first.",
      "3": "This syntax is incomplete and will result in an error."
    },
    "realWorldApplication": ""
  },
  {
    "id": 14,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Formulas and Operators",
    "concept": "Operator precedence",
    "difficulty": "Medium",
    "question": "In the formula =5+2*3, what will be the result based on Excel's operator precedence?",
    "options": [
      "21",
      "10",
      "11",
      "30"
    ],
    "correctAnswer": 2,
    "explanation": "Excel follows standard mathematical order of operations (PEMDAS/BODMAS).",
    "whyCorrect": "Multiplication happens before addition. 2*3=6, then 5+6=11.",
    "whyOthersAreWrong": {
      "0": "21 would be the result if addition happened first (5+2 = 7, 7*3 = 21).",
      "1": "10 is numerically unrelated to the operations.",
      "3": "30 is an incorrect calculation."
    },
    "realWorldApplication": ""
  },
  {
    "id": 15,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Data Tools",
    "concept": "Freeze Panes",
    "difficulty": "Medium",
    "question": "You have a large dataset and want the top row (headers) to remain visible while scrolling down. Which feature accomplishes this?",
    "options": [
      "Split Window",
      "Lock Cells",
      "Freeze Panes",
      "Protect Sheet"
    ],
    "correctAnswer": 2,
    "explanation": "This is a view setting, not a data alteration.",
    "whyCorrect": "Freeze Panes allows you to keep specific rows or columns visible when scrolling through a worksheet.",
    "whyOthersAreWrong": {
      "0": "Split Window creates independent scrolling areas, which is different from locking a header in place.",
      "1": "Lock Cells prevents data from being edited, but doesn't affect scrolling visibility.",
      "3": "Protect Sheet restricts user actions (like editing or formatting) on the sheet."
    },
    "realWorldApplication": ""
  },
  {
    "id": 16,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Data Tools",
    "concept": "Flash Fill",
    "difficulty": "Medium",
    "question": "Which feature can automatically extract the first names from a column of full names by recognizing the pattern you type in the adjacent column?",
    "options": [
      "AutoFill",
      "Text to Columns",
      "Flash Fill",
      "Find and Replace"
    ],
    "correctAnswer": 2,
    "explanation": "This tool automatically fills in values when it senses a pattern.",
    "whyCorrect": "Flash Fill (Ctrl+E) senses data patterns (like extracting first names) and automatically fills the rest of the column.",
    "whyOthersAreWrong": {
      "0": "AutoFill copies data or continues simple series (like days of the week), but cannot intelligently extract parts of strings.",
      "1": "Text to Columns splits data using a delimiter, but Flash Fill is the feature that recognizes patterns as you type.",
      "3": "Find and Replace changes specific text strings but doesn't extract data based on patterns."
    },
    "realWorldApplication": ""
  },
  {
    "id": 17,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Data Tools",
    "concept": "Remove Duplicates",
    "difficulty": "Medium",
    "question": "If you have a list of 100 employee names, but 5 of them are accidentally entered twice, which tool quickly eliminates the duplicates?",
    "options": [
      "Filter",
      "Data Validation",
      "Remove Duplicates",
      "Conditional Formatting"
    ],
    "correctAnswer": 2,
    "explanation": "This tool is found on the Data tab and cleans up datasets.",
    "whyCorrect": "Remove Duplicates identifies identical rows in the selected range and permanently deletes the extra copies.",
    "whyOthersAreWrong": {
      "0": "Filter can temporarily hide duplicates (using Advanced Filter), but doesn't remove them directly.",
      "1": "Data Validation restricts what can be entered into a cell; it doesn't clean existing data.",
      "3": "Conditional Formatting can highlight duplicates, but it does not remove them."
    },
    "realWorldApplication": ""
  },
  {
    "id": 18,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Data Tools",
    "concept": "Data Validation",
    "difficulty": "Medium",
    "question": "To restrict users to only enter a date between Jan 1, 2024 and Dec 31, 2024 into a cell, you should use:",
    "options": [
      "Data Validation",
      "Format Cells",
      "Conditional Formatting",
      "Protect Sheet"
    ],
    "correctAnswer": 0,
    "explanation": "This feature controls what type of data or values are allowed in a cell.",
    "whyCorrect": "Data Validation allows you to set specific rules (like a date range) that must be met for data to be entered in a cell.",
    "whyOthersAreWrong": {
      "1": "Format Cells changes how data looks (e.g., displaying a number as a date), but doesn't restrict what is typed.",
      "2": "Conditional Formatting changes cell appearance based on values, but does not stop invalid data entry.",
      "3": "Protect Sheet locks cells entirely from editing, rather than allowing restricted data entry."
    },
    "realWorldApplication": ""
  },
  {
    "id": 19,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Charts",
    "concept": "Line chart",
    "difficulty": "Medium",
    "question": "When creating a chart to show the trend of sales over 12 months, which chart type is generally best suited?",
    "options": [
      "Pie chart",
      "Line chart",
      "Scatter plot",
      "Doughnut chart"
    ],
    "correctAnswer": 1,
    "explanation": "Different charts visualize different types of data relationships.",
    "whyCorrect": "A Line chart is specifically designed to show trends over time (continuous data) by connecting data points with a line.",
    "whyOthersAreWrong": {
      "0": "A Pie chart shows parts of a whole (percentages) for a single moment, not trends over time.",
      "2": "A Scatter plot shows the relationship between two numerical variables, not typically a single trend over time.",
      "3": "A Doughnut chart is a variation of a pie chart and also shows parts of a whole."
    },
    "realWorldApplication": ""
  },
  {
    "id": 20,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Excel Shortcuts",
    "concept": "F2",
    "difficulty": "Medium",
    "question": "What does the keyboard shortcut F2 do in Excel?",
    "options": [
      "Opens the Save As dialog",
      "Enters edit mode for the active cell",
      "Creates a chart",
      "Opens the Find dialog"
    ],
    "correctAnswer": 1,
    "explanation": "This is one of the most frequently used shortcuts for data entry.",
    "whyCorrect": "Pressing F2 puts the active cell into edit mode and places the cursor at the end of the cell's contents.",
    "whyOthersAreWrong": {
      "0": "F12 opens the Save As dialog.",
      "2": "F11 creates a chart in a new sheet.",
      "3": "Ctrl+F opens the Find dialog."
    },
    "realWorldApplication": ""
  },
  {
    "id": 21,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Conditional Functions",
    "concept": "COUNTIF",
    "difficulty": "Medium",
    "question": "You want to count how many employees in a list belong to the 'Sales' department. Which function is appropriate?",
    "options": [
      "SUMIF",
      "COUNT",
      "COUNTA",
      "COUNTIF"
    ],
    "correctAnswer": 3,
    "explanation": "This requires counting cells based on a specific text criterion.",
    "whyCorrect": "COUNTIF counts the number of cells within a range that meet a single specific condition (e.g., equals 'Sales').",
    "whyOthersAreWrong": {
      "0": "SUMIF adds numerical values based on a condition; it doesn't count instances.",
      "1": "COUNT only counts cells with numbers.",
      "2": "COUNTA counts all non-empty cells, regardless of department."
    },
    "realWorldApplication": ""
  },
  {
    "id": 22,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Conditional Functions",
    "concept": "AND",
    "difficulty": "Medium",
    "question": "What does the AND() function do in Excel?",
    "options": [
      "Joins two text strings together",
      "Returns TRUE if all arguments evaluate to TRUE",
      "Returns TRUE if at least one argument evaluates to TRUE",
      "Adds two numbers together"
    ],
    "correctAnswer": 1,
    "explanation": "AND is a logical function often used within IF statements.",
    "whyCorrect": "The AND function evaluates multiple conditions and returns TRUE only if every single condition is met.",
    "whyOthersAreWrong": {
      "0": "The CONCATENATE function or the ampersand (&) operator joins text strings.",
      "2": "This describes the OR function.",
      "3": "The SUM function or the plus (+) operator adds numbers."
    },
    "realWorldApplication": ""
  },
  {
    "id": 23,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Cell References",
    "concept": "Mixed reference",
    "difficulty": "Medium",
    "question": "If the formula =A$1+B2 is copied from cell C2 and pasted into cell C3, what will the formula become in C3?",
    "options": [
      "=A$1+B3",
      "=A$2+B3",
      "=A$1+B2",
      "=B$1+C3"
    ],
    "correctAnswer": 0,
    "explanation": "Consider how absolute ($) and relative references change when moving down one row.",
    "whyCorrect": "Moving down one row changes relative row numbers by +1. B2 becomes B3. The A$1 reference has the row (1) locked, so it remains A$1.",
    "whyOthersAreWrong": {
      "1": "The $ before the 1 prevents it from changing to a 2.",
      "2": "The relative reference B2 must change when copied down.",
      "3": "The column references (A, B) do not change because the formula is copied to the same column (C)."
    },
    "realWorldApplication": ""
  },
  {
    "id": 24,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Data Entry and Formatting",
    "concept": "Copy and paste",
    "difficulty": "Medium",
    "question": "Which operation allows you to perform a calculation (like adding 10%) on a range of numbers without writing a separate formula, by using Paste Special?",
    "options": [
      "Values",
      "Formats",
      "Multiply/Add operation",
      "Transpose"
    ],
    "correctAnswer": 2,
    "explanation": "Paste Special has mathematical operation capabilities.",
    "whyCorrect": "Paste Special -> Operation allows you to Add, Subtract, Multiply, or Divide the copied value into the destination cells.",
    "whyOthersAreWrong": {
      "0": "Paste Values only strips formatting and formulas, replacing them with the raw result.",
      "1": "Paste Formats only applies the visual styling (colors, borders).",
      "3": "Transpose switches rows to columns and vice versa."
    },
    "realWorldApplication": ""
  },
  {
    "id": 25,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Sorting and Filtering",
    "concept": "Filter",
    "difficulty": "Medium",
    "question": "How do you apply a filter to your data in Excel?",
    "options": [
      "Select Data tab > Filter",
      "Select Insert tab > Filter",
      "Select View tab > Filter",
      "Select Review tab > Filter"
    ],
    "correctAnswer": 0,
    "explanation": "Filtering is considered a data manipulation task.",
    "whyCorrect": "The Filter tool is located on the Data tab (and also on the Home tab under Sort & Filter).",
    "whyOthersAreWrong": {
      "1": "Insert is used for adding objects like charts, tables, and pictures.",
      "2": "View handles zoom, page layout, and freezing panes.",
      "3": "Review handles spell check, comments, and sheet protection."
    },
    "realWorldApplication": ""
  },
  {
    "id": 26,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Conditional Functions",
    "concept": "IF",
    "difficulty": "Hard",
    "question": "Evaluate this formula: =IF(A1>90, \"A\", IF(A1>80, \"B\", \"C\")). If A1 contains the value 85, what is the result?",
    "options": [
      "A",
      "B",
      "C",
      "FALSE"
    ],
    "correctAnswer": 1,
    "explanation": "This is a nested IF statement. Excel evaluates it from left to right, stopping at the first TRUE condition.",
    "whyCorrect": "A1 (85) is not >90, so the first test is FALSE. It moves to the second test: A1 (85) > 80 is TRUE. Therefore, it returns 'B'.",
    "whyOthersAreWrong": {
      "0": "A1 is 85, which is not greater than 90.",
      "2": "'C' would only be returned if both A1>90 and A1>80 were FALSE (e.g., A1 is 75).",
      "3": "The formula is fully enclosed and has a final 'value_if_false' ('C'), so it will never return FALSE."
    },
    "realWorldApplication": ""
  },
  {
    "id": 27,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Conditional Functions",
    "concept": "SUMIF",
    "difficulty": "Hard",
    "question": "You want to sum the total sales in column C (C2:C10) only for records where the region in column A (A2:A10) is 'North'. What is the correct formula?",
    "options": [
      "=SUMIF(C2:C10, \"North\", A2:A10)",
      "=SUMIF(A2:A10, C2:C10, \"North\")",
      "=SUMIF(A2:A10, \"North\", C2:C10)",
      "=SUM(A2:A10, \"North\", C2:C10)"
    ],
    "correctAnswer": 2,
    "explanation": "The SUMIF function syntax is =SUMIF(range, criteria, [sum_range]).",
    "whyCorrect": "Range to check is A2:A10. Criteria is 'North'. Range to sum is C2:C10. Hence, =SUMIF(A2:A10, \"North\", C2:C10).",
    "whyOthersAreWrong": {
      "0": "The criteria range and sum range are swapped.",
      "1": "The arguments are out of order.",
      "3": "SUM cannot accept conditional logic like 'North' in this way."
    },
    "realWorldApplication": ""
  },
  {
    "id": 28,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Formulas and Operators",
    "concept": "Operator precedence",
    "difficulty": "Hard",
    "question": "In Excel, what is the result of the formula =4*2^2+8/2?",
    "options": [
      "20",
      "68",
      "36",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "Excel calculates based on Exponents first, then Multiplication/Division, then Addition/Subtraction.",
    "whyCorrect": "Exponents first: 2^2 = 4. Equation is now 4*4+8/2. Multiplication/Division next: 4*4 = 16, and 8/2 = 4. Addition last: 16+4 = 20.",
    "whyOthersAreWrong": {
      "1": "If calculated strictly left to right without precedence: 4*2=8, 8^2=64, 64+8=72, 72/2=36. None of these mistake paths easily yield 68.",
      "2": "Calculated left to right: (4*2)=8, 8^2=64. 64+8=72. 72/2=36.",
      "3": "A miscalculation of the mathematical steps."
    },
    "realWorldApplication": ""
  },
  {
    "id": 29,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Sorting and Filtering",
    "concept": "Multiple-column sorting",
    "difficulty": "Hard",
    "question": "If you want to allow a user to sort a table by 'Department' first, and then by 'Salary' within each department, how do you accomplish this?",
    "options": [
      "Click Filter, sort Department, then click Filter on Salary",
      "Use the Custom Sort dialog to add multiple levels of sorting",
      "It is impossible to sort by more than one column in Excel",
      "Apply the SORT function twice in the same cell"
    ],
    "correctAnswer": 1,
    "explanation": "Standard sorting buttons only sort by one column at a time.",
    "whyCorrect": "The Custom Sort feature (Data > Sort) allows you to add multiple 'levels' (e.g., Sort by Department, Then by Salary).",
    "whyOthersAreWrong": {
      "0": "Sorting Salary using quick filters will override the previous Department sort.",
      "2": "Excel fully supports multi-level sorting.",
      "3": "The SORT function cannot be applied 'twice in the same cell' in this manner for standard table sorting."
    },
    "realWorldApplication": ""
  },
  {
    "id": 30,
    "app": "Excel",
    "appKey": "excel",
    "topic": "Conditional Functions",
    "concept": "OR",
    "difficulty": "Hard",
    "question": "Evaluate: =IF(OR(A1>50, B1>50), \"Pass\", \"Fail\"). If A1=40 and B1=60, what is the result?",
    "options": [
      "Pass",
      "Fail",
      "TRUE",
      "Error"
    ],
    "correctAnswer": 0,
    "explanation": "The OR function returns TRUE if ANY of its conditions are true.",
    "whyCorrect": "A1>50 is FALSE. B1>50 is TRUE. Since one is TRUE, the OR function evaluates to TRUE. The IF function then returns the 'value_if_true', which is 'Pass'.",
    "whyOthersAreWrong": {
      "1": "Fail would only be returned if BOTH A1 and B1 were 50 or less.",
      "2": "TRUE is evaluated internally, but the IF function replaces it with the text 'Pass'.",
      "3": "The formula syntax is completely valid."
    },
    "realWorldApplication": ""
  },
  {
    "id": 31,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Format Painter",
    "difficulty": "Easy",
    "question": "What is the primary function of the 'Format Painter' tool in MS Word?",
    "options": [
      "To copy the text from one paragraph and paste it into another.",
      "To copy the formatting (such as color, font style, and size) applied to a piece of text and apply it elsewhere.",
      "To remove all formatting from a selected block of text.",
      "To apply predefined artistic text effects like shadows and reflections."
    ],
    "correctAnswer": 1,
    "explanation": "The Format Painter copies formatting from one object or text block and applies it to another, saving time when standardizing styles.",
    "whyCorrect": "Format Painter captures all font styling, size, color, and paragraph properties and replicates them directly onto targeted text.",
    "whyOthersAreWrong": {
      "0": "Copying and pasting text is performed using Copy (Ctrl+C) and Paste (Ctrl+V), not Format Painter.",
      "2": "Removing formatting is performed using the 'Clear All Formatting' eraser button (Ctrl+Spacebar).",
      "3": "Predefined artistic text effects are found under 'Text Effects and Typography'."
    },
    "realWorldApplication": "Quickly applying the exact heading style from Chapter 1 to the heading of Chapter 2 without manually setting font sizes, weights, and colors."
  },
  {
    "id": 32,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Macros & Automation",
    "difficulty": "Medium",
    "question": "In MS Word, what is a 'Macro' primarily used for?",
    "options": [
      "To create large-scale charts and graphs from table data.",
      "To automatically translate documents into different languages.",
      "To record a sequence of commands and instructions to automate a repetitive task.",
      "To merge multiple Word documents into a single master PDF."
    ],
    "correctAnswer": 2,
    "explanation": "A macro is a recorded series of commands and keystrokes written in VBA (Visual Basic for Applications) that you can trigger with a single click or keyboard shortcut to automate repetitive tasks.",
    "whyCorrect": "Macros record multiple user actions into an executable script, dramatically reducing human error on routine document formatting.",
    "whyOthersAreWrong": {
      "0": "Charts and graphs are created via the Insert > Chart ribbon or linked Excel workbooks.",
      "1": "Translating documents is handled by the Review > Translate service.",
      "3": "Combining documents into a PDF is handled via PDF export or document merging tools."
    },
    "realWorldApplication": "Automating the process of inserting a company header, formatting the title, and adding a standard legal disclaimer to daily report templates."
  },
  {
    "id": 33,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Mail Merge",
    "difficulty": "Medium",
    "question": "Which of the following best describes 'Mail Merge'?",
    "options": [
      "A feature that connects MS Word directly to Outlook to send bulk emails without personalization.",
      "A tool that merges multiple Word documents into one file.",
      "A process that combines a main document with a data source (like Excel) to create personalized documents for multiple recipients.",
      "A tracking tool that merges comments from multiple reviewers."
    ],
    "correctAnswer": 2,
    "explanation": "Mail Merge takes a template document and injects data from a spreadsheet or database to generate personalized letters, envelopes, or emails.",
    "whyCorrect": "It replaces merge field placeholders with specific record data from an external dataset (e.g. CSV or Excel) for each recipient.",
    "whyOthersAreWrong": {
      "0": "Mail Merge is specifically designed for personalized outputs, not static unpersonalized bulk emails.",
      "1": "Merging multiple Word files into one is achieved via Insert > Object > Text from File.",
      "3": "Combining reviewer feedback is performed using Review > Compare > Combine Documents."
    },
    "realWorldApplication": "Generating 500 personalized interview offer letters where candidate names, interview slots, and department details change dynamically."
  },
  {
    "id": 34,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Document Styles",
    "difficulty": "Medium",
    "question": "What is the primary function of 'Styles' (e.g., Heading 1, Normal) in MS Word?",
    "options": [
      "To change the physical layout of the page (margins and orientation).",
      "To apply a consistent set of formatting choices throughout a document, enabling structural features like automatic Tables of Contents.",
      "To grammar-check documents based on stylistic guidelines (APA, MLA).",
      "To insert stylized vector graphics like flowcharts."
    ],
    "correctAnswer": 1,
    "explanation": "Styles (like Heading 1, Normal) ensure consistent formatting and allow Word to understand the document structure, which is required for navigation panes and automatic Tables of Contents.",
    "whyCorrect": "Styles establish semantic hierarchy across sections, enabling automated table of contents generation and global theme modifications.",
    "whyOthersAreWrong": {
      "0": "Page margins and orientation are configured in the Layout tab under Page Setup.",
      "2": "Grammar and style checking are handled by the Editor / Proofing engine.",
      "3": "Flowcharts and diagrams are inserted via SmartArt or Shapes."
    },
    "realWorldApplication": "Formatting a 100-page software documentation manual so that all subheadings match brand guidelines and auto-populate the document outline."
  },
  {
    "id": 35,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Section Breaks",
    "difficulty": "Hard",
    "question": "What is a 'Section Break' used for that a standard 'Page Break' cannot do?",
    "options": [
      "A Section Break pushes text to the next page.",
      "A Section Break allows you to have different page orientations, margins, or headers/footers within the same document.",
      "A Section Break automatically creates a new chapter in the Table of Contents.",
      "A Section Break prevents the document from being printed beyond that point."
    ],
    "correctAnswer": 1,
    "explanation": "While a Page Break just starts a new page, a Section Break divides the document into independent formatting zones, allowing different page layouts or headers in each section.",
    "whyCorrect": "Section Breaks partition the document so that properties like page orientation (portrait vs landscape), column counts, and header links can vary independently.",
    "whyOthersAreWrong": {
      "0": "Both page breaks and 'Next Page' section breaks advance text, but layout partitioning is unique to section breaks.",
      "2": "Tables of Contents rely on Heading styles, not section break insertion.",
      "3": "Print ranges are determined in the Print dialog, not by break markers."
    },
    "realWorldApplication": "Having the first 5 pages of a technical proposal in Portrait orientation, and page 6 in Landscape orientation to display a wide database architecture diagram."
  },
  {
    "id": 36,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Undo Shortcut",
    "difficulty": "Easy",
    "question": "What is the standard keyboard shortcut to undo the last action in MS Word?",
    "options": [
      "Ctrl + Y",
      "Ctrl + Z",
      "Ctrl + X",
      "Ctrl + U"
    ],
    "correctAnswer": 1,
    "explanation": "Ctrl + Z is the universal shortcut to Undo. Ctrl + Y is Redo, Ctrl + X is Cut, and Ctrl + U is Underline.",
    "whyCorrect": "Ctrl + Z pops the most recent action off the application undo stack.",
    "whyOthersAreWrong": {
      "0": "Ctrl + Y is Redo or Repeat action.",
      "2": "Ctrl + X cuts the selected text to the clipboard.",
      "3": "Ctrl + U applies or removes text underlining."
    },
    "realWorldApplication": "Instantly reversing an accidental paragraph deletion or incorrect paste without disrupting your typing rhythm."
  },
  {
    "id": 37,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Track Changes",
    "difficulty": "Easy",
    "question": "What does the 'Track Changes' feature do in MS Word?",
    "options": [
      "It records all the network locations a document has been saved to.",
      "It monitors the total active editing time spent on a document.",
      "It marks all additions, deletions, and formatting changes made to a document so they can be reviewed and accepted/rejected later.",
      "It tracks which IP addresses or user accounts have opened the document."
    ],
    "correctAnswer": 2,
    "explanation": "Track Changes visually logs every edit made to a document, allowing authors and reviewers to collaborate, see exactly what changed, and approve or reject edits.",
    "whyCorrect": "It records every insertion, deletion, and formatting update with color-coded author markup balloons or inline strikethroughs.",
    "whyOthersAreWrong": {
      "0": "File paths and versions are managed through OneDrive version history or Windows file properties.",
      "1": "Total editing time is tracked passively under File > Info > Properties.",
      "3": "Document access auditing is performed at the enterprise cloud or file server level."
    },
    "realWorldApplication": "A lead software architect reviewing a junior engineer's functional specification document and suggesting revisions before client sign-off."
  },
  {
    "id": 38,
    "app": "Word",
    "appKey": "word",
    "topic": "Core Concepts",
    "concept": "Soft Return (Shift+Enter)",
    "difficulty": "Medium",
    "question": "What is a 'Soft Return' (Line Break) in MS Word, and how is it created?",
    "options": [
      "It creates a new paragraph; created by pressing Enter.",
      "It moves text to the next line without starting a new paragraph; created by pressing Shift + Enter.",
      "It forces text to the next page; created by pressing Ctrl + Enter.",
      "It creates a column break; created by pressing Alt + Enter."
    ],
    "correctAnswer": 1,
    "explanation": "A soft return (Shift + Enter) moves the cursor to the next line but keeps the text within the same paragraph, preventing extra paragraph spacing from being added.",
    "whyCorrect": "Shift + Enter inserts a manual line break character (u21b5) without triggering paragraph-after or paragraph-before spacing rules.",
    "whyOthersAreWrong": {
      "0": "Pressing Enter inserts a hard paragraph break (u00b6) which applies paragraph spacing rules.",
      "2": "Pressing Ctrl + Enter inserts a manual page break.",
      "3": "Column breaks are inserted with Ctrl + Shift + Enter."
    },
    "realWorldApplication": "Formatting multi-line addresses or contact information blocks tightly together in a resume or invoice header."
  },
  {
    "id": 39,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Table of Contents Setup",
    "difficulty": "Medium",
    "question": "You want to create an automatic Table of Contents for your report. What is the mandatory prerequisite step before generating it?",
    "options": [
      "You must insert page numbers on every single page.",
      "You must manually type out a list of chapters on the first page.",
      "You must apply built-in Heading styles (Heading 1, Heading 2, etc.) to your chapter titles.",
      "You must insert bookmarks at the start of every page."
    ],
    "correctAnswer": 2,
    "explanation": "Word generates the Table of Contents by scanning the document for text formatted with Heading styles. Without Headings, it won't know what to include.",
    "whyCorrect": "The automated Table of Contents engine indexes Heading 1, Heading 2, and Heading 3 paragraphs and maps their corresponding page coordinates.",
    "whyOthersAreWrong": {
      "0": "While page numbers will appear in the TOC, inserting them beforehand is not the structural requirement for TOC generation.",
      "1": "Manually typing headings defeats the purpose of an automated, self-updating TOC.",
      "3": "Bookmarks can create manual hyperlinks, but the built-in TOC feature uses heading outline levels."
    },
    "realWorldApplication": "Structuring a 50-page enterprise software requirements specification so the TOC updates automatically whenever sections shift."
  },
  {
    "id": 40,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "AutoCorrect Symbols",
    "difficulty": "Easy",
    "question": "How can you quickly insert a trademark symbol (u2122) using AutoCorrect without accessing the 'Insert Symbol' menu?",
    "options": [
      "Type (tm) and press the spacebar.",
      "Press Ctrl + T.",
      "Type /trademark.",
      "Press Alt + M."
    ],
    "correctAnswer": 0,
    "explanation": "Word's AutoCorrect automatically replaces specific text patterns like (tm), (c), and (r) with their respective symbols u2122, u00a9, and u00ae.",
    "whyCorrect": "The default AutoCorrect lookup dictionary maps parenthesized characters like (tm) to the Unicode u2122 glyph upon whitespace entry.",
    "whyOthersAreWrong": {
      "1": "Ctrl + T creates a hanging indent in Word, not a trademark symbol.",
      "2": "Slash commands are used in modern collaborative markdown editors, not native Word defaults.",
      "3": "Alt + M activates the Mailings ribbon tab in the Word interface."
    },
    "realWorldApplication": "Rapidly drafting corporate press releases containing registered trademarks and copyright notices without disrupting keyboard workflow."
  },
  {
    "id": 41,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Restrict Editing",
    "difficulty": "Medium",
    "question": "You need to lock a document so users can only fill out designated form fields and cannot edit the surrounding text. Which feature accomplishes this?",
    "options": [
      "Save as PDF",
      "Restrict Editing -> Allow only 'Filling in forms'",
      "Mark as Final",
      "Read-Only Mode"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Restrict Editing' pane allows you to lock the document structure while explicitly permitting users to only interact with designated form fields.",
    "whyCorrect": "'Filling in forms' protection freezes all static boilerplate text and unlocks only Content Controls or legacy form fields for input.",
    "whyOthersAreWrong": {
      "0": "Saving as a standard PDF still allows PDF editors to annotate or OCR the text, and doesn't configure interactive Word form fields.",
      "2": "'Mark as Final' is an advisory status that can be dismissed with a single click by any user.",
      "3": "Read-Only mode prevents users from entering form data altogether unless saved as a new copy."
    },
    "realWorldApplication": "Distributing standardized HR employee onboarding forms where candidates must input personal details without modifying contractual clauses."
  },
  {
    "id": 42,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Mail Merge Fields",
    "difficulty": "Hard",
    "question": "You are configuring a Mail Merge document. What represents the dynamic placeholder for incoming data from your Excel spreadsheet?",
    "options": [
      "Data Tags",
      "Merge Fields (e.g., u00abFirst_Nameu00bb)",
      "Excel Links",
      "Dynamic Variables"
    ],
    "correctAnswer": 1,
    "explanation": "Merge Fields act as placeholders in the Word document. During the merge, Word replaces the field (like u00abFirst_Nameu00bb) with actual data from the corresponding column in the data source.",
    "whyCorrect": "Merge fields are enclosed in chevron delimiters (u00ab u00bb) and bind directly to database or spreadsheet column headers.",
    "whyOthersAreWrong": {
      "0": "'Data Tags' is not standard Microsoft Office terminology for Mail Merge data binding.",
      "2": "Excel links embed live spreadsheet tables or charts, not individual recipient mail merge tokens.",
      "3": "Dynamic Variables are programming language constructs, not Word document merge tokens."
    },
    "realWorldApplication": "Creating an automated template that generates 200 tailored client invoices with customized line items, names, and billing dates."
  },
  {
    "id": 43,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Print Page Ranges",
    "difficulty": "Easy",
    "question": "You want to print page 1, page 3, and pages 5 through 8 of a document. How should you format the custom range in the Print dialog?",
    "options": [
      "1; 3; 5-8",
      "1, 3, 5-8",
      "1 and 3 and 5 to 8",
      "1+3+5:8"
    ],
    "correctAnswer": 1,
    "explanation": "In the page range box, commas separate individual pages, and hyphens define a continuous range.",
    "whyCorrect": "Commas delineate distinct non-contiguous page numbers while hyphens represent contiguous ranges (from 5 through 8 inclusive).",
    "whyOthersAreWrong": {
      "0": "Semicolons are not recognized as page separators in the Windows print dialog.",
      "2": "Natural language strings like 'and' or 'to' cause invalid input syntax errors.",
      "3": "Colons and plus signs are spreadsheet formula operators, not print range delimiters."
    },
    "realWorldApplication": "Printing only the executive summary, client invoice, and appendices from a 200-page corporate financial audit."
  },
  {
    "id": 44,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Navigation Pane",
    "difficulty": "Hard",
    "question": "What is the primary function of the 'Navigation Pane' in MS Word?",
    "options": [
      "To search the internet for definitions of technical terms.",
      "To visually map the document's heading structure, allowing you to click and jump to sections or easily reorganize chapters via drag-and-drop.",
      "To navigate between multiple open Word application windows.",
      "To track file paths when saving documents across local and network drives."
    ],
    "correctAnswer": 1,
    "explanation": "The Navigation Pane displays the document structure (based on Heading styles), allowing easy navigation, searching, and structural reorganization.",
    "whyCorrect": "The Headings tab in the Navigation Pane displays an interactive outline where dragging a heading relocates that entire chapter and its body text.",
    "whyOthersAreWrong": {
      "0": "Searching definitions online is handled by the Smart Lookup / Search feature.",
      "2": "Switching between open windows is handled by the View tab ('Switch Windows') or Windows taskbar (Alt+Tab).",
      "3": "File path inspection is located under File > Info."
    },
    "realWorldApplication": "Reviewing an extensive API documentation draft and dragging Chapter 4 ahead of Chapter 3 with all nested subheadings updated instantly."
  },
  {
    "id": 45,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Clear Formatting",
    "difficulty": "Easy",
    "question": "You pasted text from a website that brought unwanted background colors, fonts, and bolding. What is the fastest way to strip all external styling to match your document?",
    "options": [
      "Highlight the text, change font color to black, and remove bold manually.",
      "Use the 'Keep Text Only' paste option, or click the 'Clear All Formatting' button.",
      "Delete the text and retype it by hand.",
      "Save the document as a plain text (.txt) file and reopen it."
    ],
    "correctAnswer": 1,
    "explanation": "Pasting with 'Keep Text Only' or using 'Clear All Formatting' instantly strips external HTML/CSS styles and forces the text to adopt the destination's default paragraph style.",
    "whyCorrect": "The 'Clear All Formatting' command (or Ctrl+Spacebar) removes all character formatting overrides, returning the text to the document's Normal style.",
    "whyOthersAreWrong": {
      "0": "Manual adjustment takes significant time and often misses hidden web styles like line heights or span backgrounds.",
      "2": "Retyping long sections of research data is completely inefficient and error-prone.",
      "3": "Converting the entire document to .txt strips formatting from every page, destroying tables and images."
    },
    "realWorldApplication": "Compiling research findings from diverse web sources into a clean, uniform company whitepaper adhering to brand typography."
  },
  {
    "id": 46,
    "app": "Word",
    "appKey": "word",
    "topic": "Formatting & Layout",
    "concept": "Hanging Indent",
    "difficulty": "Hard",
    "question": "How do you create a 'Hanging Indent' where the first line is flush left, but subsequent lines are indented?",
    "options": [
      "Press Enter at the end of every line and press Space 5 times.",
      "Open Paragraph settings and under Indentation, set 'Special' to 'Hanging'.",
      "Click the 'Align Right' button.",
      "Insert a Table with hidden borders."
    ],
    "correctAnswer": 1,
    "explanation": "A hanging indent is properly created via Paragraph formatting settings, which automatically manages word wrapping without manual spaces or line breaks.",
    "whyCorrect": "Setting Special Indentation to 'Hanging' (or pressing Ctrl+T) offsets all wrapped lines in the paragraph while keeping line 1 against the margin.",
    "whyOthersAreWrong": {
      "0": "Hard-coding spaces breaks responsive reflow if fonts, page sizes, or margins change.",
      "2": "Align Right moves all lines to the right margin, failing the hanging indent format.",
      "3": "Tables add unnecessary structural overhead and make bibliography screen readers fail accessibility tests."
    },
    "realWorldApplication": "Correctly formatting academic and corporate citations, references, and bibliographies according to APA, IEEE, or MLA guidelines."
  },
  {
    "id": 47,
    "app": "Word",
    "appKey": "word",
    "topic": "Scenario Applications",
    "concept": "Unlink Headers Across Sections",
    "difficulty": "Medium",
    "question": "You want Chapter 1 header to read 'Introduction' and Chapter 2 header to read 'System Architecture'. Changing Chapter 2 header overwrites Chapter 1. How do you resolve this?",
    "options": [
      "Headers cannot be customized per chapter; you must use floating text boxes instead.",
      "Insert a Section Break between the chapters, open the Chapter 2 header, and uncheck 'Link to Previous'.",
      "Insert a Page Break between chapters and check 'Different First Page'.",
      "Save Chapter 1 and Chapter 2 as separate Word documents."
    ],
    "correctAnswer": 1,
    "explanation": "Headers are linked across sections by default. To have unique headers, you must separate the content with a Section Break and explicitly break the link by unchecking 'Link to Previous'.",
    "whyCorrect": "Unchecking 'Link to Previous' on Section 2 severs header inheritance, allowing Section 2 to maintain independent header text and numbering.",
    "whyOthersAreWrong": {
      "0": "Word fully supports multi-section header customization natively without floating text boxes.",
      "2": "'Different First Page' only modifies page 1 of that section, not subsequent chapters.",
      "3": "Splitting documents into multiple files breaks unified pagination and automated Table of Contents generation."
    },
    "realWorldApplication": "Creating professional corporate reports and published books where headers display dynamic chapter names across sections."
  },
  {
    "id": 48,
    "app": "Word",
    "appKey": "word",
    "topic": "Scenario Applications",
    "concept": "No Markup Preview",
    "difficulty": "Medium",
    "question": "A contract with Track Changes enabled contains dozens of red markup lines. You want to preview how the final document reads without accepting the edits permanently. What should you do?",
    "options": [
      "Click 'Accept All Changes', which permanently alters the document.",
      "Change the tracking display view from 'All Markup' to 'No Markup'.",
      "Turn off the 'Track Changes' toggle button.",
      "Save the document as a PDF to hide the markup."
    ],
    "correctAnswer": 1,
    "explanation": "Switching the view to 'No Markup' allows you to read the clean, final version of the text without permanently accepting or losing the tracked edit history.",
    "whyCorrect": "'No Markup' displays the text with all suggested changes incorporated visually while preserving the underlying revision history for future review.",
    "whyOthersAreWrong": {
      "0": "Accepting all changes destroys reviewer history permanently, preventing further editorial audit.",
      "2": "Turning off Track Changes only stops recording new changes; it does not hide existing markup.",
      "3": "Exporting to PDF with markup visible will bake the red lines directly into the exported PDF."
    },
    "realWorldApplication": "Proofreading a 30-page commercial vendor agreement for flow and tone before presenting it to corporate legal counsel for formal review."
  },
  {
    "id": 49,
    "app": "Word",
    "appKey": "word",
    "topic": "Scenario Applications",
    "concept": "Find and Replace (Ctrl+H)",
    "difficulty": "Medium",
    "question": "You realize a vendor company name 'Smitheson' was misspelled across a 200-page document and should be 'Smithson'. What is the safest and fastest way to correct all occurrences?",
    "options": [
      "Manually scroll through the document and delete the letter 'e' on each page.",
      "Run Spell Check and click 'Change All' when it flags the word.",
      "Use the 'Replace' tool (Ctrl + H), enter 'Smitheson' in 'Find what', 'Smithson' in 'Replace with', and click 'Replace All'.",
      "Use the AutoCorrect dictionary to fix past text dynamically."
    ],
    "correctAnswer": 2,
    "explanation": "The Find and Replace tool (Ctrl + H) is designed specifically for making bulk text corrections instantly and accurately across an entire document.",
    "whyCorrect": "Ctrl + H searches the entire document string buffer and substitutes every instance atomically in seconds.",
    "whyOthersAreWrong": {
      "0": "Manual inspection across 200 pages guarantees human oversight and takes hours.",
      "1": "Spell Check might not flag proper nouns or names if they are already in the custom dictionary.",
      "3": "AutoCorrect triggers only during live keystroke entry; it does not retroactively scan existing text."
    },
    "realWorldApplication": "Correcting a modified client legal entity name or deprecated API endpoint across hundreds of pages before product launch."
  },
  {
    "id": 50,
    "app": "Word",
    "appKey": "word",
    "topic": "Scenario Applications",
    "concept": "Image Text Wrapping",
    "difficulty": "Easy",
    "question": "An image inserted into Word behaves like a giant text character and cannot be dragged freely around the page. How do you allow free image positioning?",
    "options": [
      "Change the 'Wrap Text' setting from 'In Line with Text' to 'Square' or 'Tight'.",
      "Right-click the image and select 'Unlock'.",
      "Convert the image into a SmartArt graphic.",
      "Place the image inside a single-cell Table."
    ],
    "correctAnswer": 0,
    "explanation": "Images are inserted 'In Line with Text' by default, meaning they behave like text characters. Changing text wrapping allows the image to float freely on the page.",
    "whyCorrect": "Selecting 'Square', 'Tight', or 'In Front of Text' decouples the graphic from the baseline font stream, enabling free drag-and-drop placement.",
    "whyOthersAreWrong": {
      "1": "There is no general 'Unlock' context menu option for inline graphics in Microsoft Word.",
      "2": "SmartArt is intended for organizational charts and process diagrams, not arbitrary image wrapping.",
      "3": "Placing the image in a table restricts it to the table grid cell boundaries rather than allowing free canvas movement."
    },
    "realWorldApplication": "Positioning a corporate logo or promotional graphic precisely into the top right margin of a marketing brochure."
  },
  {
    "id": 51,
    "app": "Word",
    "appKey": "word",
    "topic": "Scenario Applications",
    "concept": "Co-authoring",
    "difficulty": "Medium",
    "question": "Two team members are simultaneously editing a Word document hosted on Microsoft OneDrive. Which technology prevents them from overwriting each other's work?",
    "options": [
      "Macro Recording",
      "Document Inspector",
      "Co-authoring (Real-time collaboration)",
      "Mail Merge"
    ],
    "correctAnswer": 2,
    "explanation": "Co-authoring allows multiple users to work on a cloud-hosted Word document simultaneously, showing where each person is typing in real-time.",
    "whyCorrect": "Co-authoring locks individual paragraphs at sub-document levels and synchronizes delta updates via cloud delta-sync engines.",
    "whyOthersAreWrong": {
      "0": "Macro recording automates VBA keystrokes and has no collaborative locking capabilities.",
      "1": "Document Inspector inspects files for hidden metadata, personal data, and comments before sharing.",
      "3": "Mail Merge merges data sources into letter templates."
    },
    "realWorldApplication": "A project manager and a software engineer co-writing distinct sections of an RFP proposal minutes before an RFP deadline."
  },
  {
    "id": 52,
    "app": "Word",
    "appKey": "word",
    "topic": "Scenario Applications",
    "concept": "PDF Export",
    "difficulty": "Easy",
    "question": "You want to distribute a final proposal to external clients ensuring formatting and typography cannot shift across different computers. What is the standard format to use?",
    "options": [
      "Save as RTF (Rich Text Format).",
      "Export / Save as PDF (Portable Document Format).",
      "Password protect the .docx file.",
      "Save as a Word Template (.dotx)."
    ],
    "correctAnswer": 1,
    "explanation": "PDFs preserve formatting, fonts, and layout exactly as designed and prevent accidental edits by the recipient.",
    "whyCorrect": "PDF freezes rasterized layouts, embedded vector curves, and font definitions into an unalterable print-ready standard.",
    "whyOthersAreWrong": {
      "0": "RTF strips modern advanced Word formatting and may render differently across third-party processors.",
      "2": "A password-protected .docx still depends on local fonts installed on the client machine, which can distort layout.",
      "3": "A .dotx template prompts the recipient to generate a new editable Word document, risking accidental tampering."
    },
    "realWorldApplication": "Submitting finalized commercial price bids, employment contracts, and NDA documents to external enterprise clients."
  },
  {
    "id": 53,
    "app": "Word",
    "appKey": "word",
    "topic": "Troubleshooting & Tools",
    "concept": "Show/Hide Formatting Marks",
    "difficulty": "Hard",
    "question": "You are unable to delete a stubborn blank page at the end of a Word document by pressing Backspace. What is the most effective troubleshooting step?",
    "options": [
      "Run an antivirus scan on the document file.",
      "Remove watermarks from the Design tab.",
      "Toggle 'Show/Hide u00b6' (Ctrl+Shift+8) to reveal and delete hidden empty paragraph returns or page breaks.",
      "Change printer properties to force an odd page count."
    ],
    "correctAnswer": 2,
    "explanation": "Blank pages are usually caused by hidden empty paragraphs (returns) or manual Page/Section Breaks. Toggling 'Show/Hide u00b6' reveals these non-printing characters so they can be deleted.",
    "whyCorrect": "The Show/Hide command (Ctrl+Shift+*) renders all invisible non-printing characters (u00b6, dots for spaces, break lines), making the culprit instantly selectable and removable.",
    "whyOthersAreWrong": {
      "0": "Antivirus software scans for malicious macro payloads, not layout formatting artifacts.",
      "1": "Watermarks sit in headers as background elements and do not push paragraphs onto new pages.",
      "3": "Printer settings do not control the internal document page count in Word's layout editor."
    },
    "realWorldApplication": "Eliminating an unwanted trailing blank page from a candidate's resume so it exports cleanly as a single page."
  },
  {
    "id": 54,
    "app": "Word",
    "appKey": "word",
    "topic": "Troubleshooting & Tools",
    "concept": "Continuous Section Breaks",
    "difficulty": "Medium",
    "question": "You have a two-column newsletter layout, but need the headline title to stretch across the full width of both columns. How is this accomplished?",
    "options": [
      "Place the headline title inside the page header.",
      "Format the title as 'One Column', insert a Continuous Section Break, and format the body as 'Two Columns'.",
      "Select the headline and click 'Merge Columns'.",
      "This is impossible; column settings apply strictly to the whole page."
    ],
    "correctAnswer": 1,
    "explanation": "Section breaks allow different layouts on the same page. A continuous break allows the title to be 1-column, and the text immediately below it to split into 2-columns.",
    "whyCorrect": "A Continuous Section Break splits page formatting without forcing a page eject, enabling mixed 1-column and 2-column designs on the same page.",
    "whyOthersAreWrong": {
      "0": "Headers repeat on every page and cannot serve as a one-time article headline on page 1.",
      "2": "'Merge Columns' is a table operation, not a paragraph column formatting tool.",
      "3": "Word natively supports mixed column layouts on a single page through continuous section breaks."
    },
    "realWorldApplication": "Formatting academic journal papers or company technical newsletters featuring a full-width title followed by a dual-column research body."
  },
  {
    "id": 55,
    "app": "Word",
    "appKey": "word",
    "topic": "Troubleshooting & Tools",
    "concept": "Justified Alignment Spacing",
    "difficulty": "Medium",
    "question": "A line of text in a paragraph exhibits exaggerated, awkward gaps between words despite only having single spaces. What is the root cause?",
    "options": [
      "The font file is corrupted.",
      "The paragraph alignment is set to 'Justified', and the line has very few words, causing Word to expand spacing to touch both margins.",
      "The user accidentally pressed Tab between words.",
      "Kerning is set to maximum."
    ],
    "correctAnswer": 1,
    "explanation": "Justified alignment forces text to touch both the left and right margins by expanding the spaces between words, which looks awkward on short lines.",
    "whyCorrect": "Full justification (Ctrl+J) stretches word spacing across the line; if a line ends with a manual line break (Shift+Enter) rather than a natural wrap, gaps become severe.",
    "whyOthersAreWrong": {
      "0": "Font corruption causes missing glyphs or substitution boxes (tofu), not proportional word spacing expansion.",
      "2": "Tab keys create rigid tab-stop leaps rather than proportional spacing stretching across all words.",
      "3": "Kerning adjusts letter-spacing within a word, not the whitespace between separate words."
    },
    "realWorldApplication": "Formatting legal contracts and corporate governance publications with clean block justification and proper hyphenation."
  },
  {
    "id": 56,
    "app": "Word",
    "appKey": "word",
    "topic": "Troubleshooting & Tools",
    "concept": "AutoFormat As You Type",
    "difficulty": "Hard",
    "question": "When you type a URL (such as www.microsoft.com), Word automatically converts it into a clickable blue hyperlink. Where do you disable this automatic conversion?",
    "options": [
      "Design -> Page Background -> Link Colors",
      "File -> Options -> Proofing -> AutoCorrect Options -> AutoFormat As You Type",
      "Insert -> Links -> Disable Hyperlinks",
      "Review -> Language -> Unlink URLs"
    ],
    "correctAnswer": 1,
    "explanation": "Word's AutoFormat As You Type settings control automatic behaviors like converting URLs to hyperlinks, creating automatic bulleted lists, and changing straight quotes to smart quotes.",
    "whyCorrect": "Under Proofing > AutoCorrect Options > 'AutoFormat As You Type', unchecking 'Internet and network paths with hyperlinks' stops automatic hyperlink creation.",
    "whyOthersAreWrong": {
      "0": "Design tab manages visual theme palettes and page backgrounds.",
      "2": "The Insert tab allows inserting manual links, but doesn't manage live keystroke replacement rules.",
      "3": "The Review tab controls proofing dictionaries and translations."
    },
    "realWorldApplication": "Writing code documentation and server configuration manuals where raw URLs should remain plain text without clickable redirects."
  },
  {
    "id": 57,
    "app": "Word",
    "appKey": "word",
    "topic": "Troubleshooting & Tools",
    "concept": "Repeat Header Rows",
    "difficulty": "Medium",
    "question": "A table extends over three pages in a document. Pages 2 and 3 do not display the column headers, making data difficult to interpret. How do you repeat them automatically?",
    "options": [
      "Manually copy and paste the header row at the top of pages 2 and 3.",
      "Select the header row, go to Table Tools Layout, and click 'Repeat Header Rows'.",
      "Insert a page break inside the table to force headers down.",
      "Convert the table to an embedded Excel spreadsheet."
    ],
    "correctAnswer": 1,
    "explanation": "'Repeat Header Rows' dynamically repeats the selected top row(s) at the top of every new page the table flows onto, preventing manual formatting nightmares if the table shifts.",
    "whyCorrect": "'Repeat Header Rows' automatically re-renders the table header across page boundaries and updates dynamically if rows are added or deleted above.",
    "whyOthersAreWrong": {
      "0": "Manually pasting rows fractures the table and breaks if any edits shift table rows up or down.",
      "2": "Inserting page breaks creates disconnected split tables rather than a unified flowing data set.",
      "3": "Embedded Excel objects add heavy performance overhead and do not wrap across multiple Word pages naturally."
    },
    "realWorldApplication": "Formatting a 10-page enterprise software asset ledger or product pricing table so every page displays clear column designations."
  },
  {
    "id": 58,
    "app": "Word",
    "appKey": "word",
    "topic": "Advanced & Tricky",
    "concept": "Persistent Format Painter",
    "difficulty": "Hard",
    "question": "What happens if you double-click the 'Format Painter' icon instead of single-clicking it?",
    "options": [
      "It permanently deletes the source formatting.",
      "It opens the Advanced Typography dialog box.",
      "It locks the Format Painter on, allowing you to apply the formatting to multiple separate text selections until you press Esc.",
      "It applies the formatting across the entire document in one click."
    ],
    "correctAnswer": 2,
    "explanation": "A single click applies the format once and turns off. A double click locks the tool, allowing continuous application across non-contiguous text blocks.",
    "whyCorrect": "Double-clicking locks the brush cursor active, permitting multiple disparate text highlights until the user presses Esc or clicks the icon again.",
    "whyOthersAreWrong": {
      "0": "Format Painter never destroys or clears source formatting.",
      "1": "The Font dialog (Ctrl+D) opens typography settings, not the Format Painter button.",
      "3": "Applying formatting across an entire document requires selecting all (Ctrl+A) or editing the Normal style."
    },
    "realWorldApplication": "Formatting warning callouts or parameter definitions scattered across 10 non-contiguous sections in a user manual without re-clicking the button."
  },
  {
    "id": 59,
    "app": "Word",
    "appKey": "word",
    "topic": "Advanced & Tricky",
    "concept": "Wildcard Search",
    "difficulty": "Hard",
    "question": "You want to find any word in a document that starts with 'pre' (e.g. preview, prepare, prefix). Which Advanced Find feature must be used?",
    "options": [
      "Check 'Use wildcards' and search for 'pre*'",
      "Check 'Sounds Like' and search for 'pre'",
      "Check 'Match Case' and search for 'PRE'",
      "Check 'Find Whole Words Only' and search for 'pre'"
    ],
    "correctAnswer": 0,
    "explanation": "Enabling 'Use wildcards' in Advanced Find allows you to use asterisks (*) to represent any string of characters, so 'pre*' finds any word starting with those letters.",
    "whyCorrect": "Enabling 'Use wildcards' turns on regex-like pattern matching where asterisk (*) matches zero or more trailing characters.",
    "whyOthersAreWrong": {
      "1": "'Sounds Like' uses phonetic Soundex matching for homophones (like 'there' and 'their').",
      "2": "'Match Case' matches exact uppercase/lowercase strings but does not match variable suffixes.",
      "3": "'Find Whole Words Only' excludes words like 'preview' because it specifically looks for the standalone isolated word 'pre'."
    },
    "realWorldApplication": "Auditing a massive codebase manual to find all occurrences of functions prefixed with 'get' or 'pre' across thousands of lines."
  },
  {
    "id": 60,
    "app": "Word",
    "appKey": "word",
    "topic": "Advanced & Tricky",
    "concept": "Drop Cap",
    "difficulty": "Medium",
    "question": "What happens when you apply a 'Drop Cap' to a paragraph in MS Word?",
    "options": [
      "The entire paragraph is converted into uppercase letters.",
      "The paragraph text drops down to the bottom margin of the page.",
      "The first letter of the paragraph is enlarged and drops down across two or more lines of text.",
      "A decorative caption frame is placed beneath the paragraph."
    ],
    "correctAnswer": 2,
    "explanation": "A Drop Cap is a large capital letter at the beginning of a text block that has the depth of two or more lines of regular text.",
    "whyCorrect": "Drop Cap enlarges the initial letter into a stylized display character that drops down into subsequent lines of the paragraph.",
    "whyOthersAreWrong": {
      "0": "Converting to uppercase is handled by the Change Case (Shift+F3) button.",
      "1": "Pushing text down is handled by page breaks, paragraph spacing, or vertical alignment.",
      "3": "Adding decorative captions is done via Insert > Caption."
    },
    "realWorldApplication": "Creating elegant editorial layouts, corporate newsletters, or marketing magazine articles that require an executive aesthetic."
  },
  {
    "id": 61,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Easy",
    "question": "Which of the following views is BEST suited for rearranging the sequence of slides in a presentation?",
    "options": [
      "Normal View",
      "Slide Sorter View",
      "Reading View",
      "Slide Master View"
    ],
    "correctAnswer": 1,
    "explanation": "Slide Sorter View displays thumbnail versions of all slides, allowing easy drag-and-drop reordering.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Used when finalizing the flow of a corporate presentation before a meeting."
  },
  {
    "id": 62,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "What is the primary function of the 'Slide Master' in PowerPoint?",
    "options": [
      "To control the overarching theme, layout, background, and fonts for all slides in the presentation.",
      "To lock the presentation with a password to prevent unauthorized editing.",
      "To serve as the primary presenter view during a live slideshow.",
      "To automatically generate summary slides based on presentation content."
    ],
    "correctAnswer": 0,
    "explanation": "Slide Master controls the default design of your slides. Changes made here reflect across all slides using that layout.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Ensuring brand consistency across a company's 100+ slide investor deck."
  },
  {
    "id": 63,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "In PowerPoint, what does the '.potx' file extension represent?",
    "options": [
      "PowerPoint Open XML Slide Show",
      "PowerPoint Macro-Enabled Presentation",
      "PowerPoint Open XML Template",
      "PowerPoint Add-in File"
    ],
    "correctAnswer": 2,
    "explanation": "The '.potx' extension is used for PowerPoint Templates, which provide a starting point for creating new, consistently formatted presentations.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Creating a standard corporate template that employees use to create new presentations."
  },
  {
    "id": 64,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "Which feature allows you to display a slide during a presentation without it appearing in the default printed handouts?",
    "options": [
      "Hide Slide",
      "Custom Slide Show",
      "Invisible Transition",
      "Slide Master exclusion"
    ],
    "correctAnswer": 0,
    "explanation": "Hiding a slide keeps it in the file but skips it during the normal slideshow and standard handout printing unless specifically requested.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Keeping backup data slides available in case the client asks specific questions, without cluttering the main presentation."
  },
  {
    "id": 65,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "What is the difference between a 'Transition' and an 'Animation' in PowerPoint?",
    "options": [
      "Transitions apply to individual objects on a slide; Animations apply to how the slide enters the screen.",
      "Transitions apply to how a slide enters the screen; Animations apply to individual objects on the slide.",
      "Transitions are used for video files; Animations are used for GIF images.",
      "There is no difference; they are interchangeable terms in newer versions of PowerPoint."
    ],
    "correctAnswer": 1,
    "explanation": "Transitions dictate the movement from one slide to the next. Animations dictate the movement of elements (text, images, shapes) within a single slide.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Using a smooth 'Fade' transition between slides while using a 'Wipe' animation to reveal bullet points one by one."
  },
  {
    "id": 66,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "Which of the following is NOT a default animation category in MS PowerPoint?",
    "options": [
      "Entrance",
      "Emphasis",
      "Exit",
      "Transformation"
    ],
    "correctAnswer": 3,
    "explanation": "The default animation categories are Entrance, Emphasis, Exit, and Motion Paths. Transformation (Morph) is a Slide Transition, not an Animation category.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Designing complex infographic animations using entrance and motion paths."
  },
  {
    "id": 67,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Easy",
    "question": "What keyboard shortcut is universally used to start a slideshow from the very first slide?",
    "options": [
      "F5",
      "Shift + F5",
      "Ctrl + S",
      "Alt + F4"
    ],
    "correctAnswer": 0,
    "explanation": "Pressing F5 starts the presentation from the beginning. Shift + F5 starts it from the current slide.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Quickly launching a presentation when stepping up to the podium."
  },
  {
    "id": 68,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Theoretical Conceptual",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "How does the 'Morph' transition work in PowerPoint?",
    "options": [
      "It randomly applies different transitions between all slides.",
      "It animates smooth movement of common objects from one slide to the next.",
      "It converts text into 3D shapes automatically.",
      "It changes the slide background color gradually over time."
    ],
    "correctAnswer": 1,
    "explanation": "Morph creates seamless animations by recognizing identical objects on two consecutive slides and smoothly moving/resizing them to their new positions/states.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Creating cinematic, engaging presentations without complex timeline animations."
  },
  {
    "id": 69,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "You want to embed a custom font in your PowerPoint file so it displays correctly on a computer that doesn't have that font installed. What is the limitation of doing this?",
    "options": [
      "Embedded fonts only work if the target computer is running Windows 11.",
      "You cannot embed fonts; you must save the presentation as a PDF.",
      "Only TrueType and OpenType fonts can be embedded, and file size will increase.",
      "Embedding fonts automatically converts the presentation to read-only mode."
    ],
    "correctAnswer": 2,
    "explanation": "PowerPoint allows embedding of TrueType and OpenType fonts to maintain design fidelity, but this increases the file size.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Sending a brand-compliant pitch deck to a client who might not have your company's custom corporate font."
  },
  {
    "id": 70,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "Which tool allows you to copy the formatting (color, font, style) of a shape and instantly apply it to another shape?",
    "options": [
      "Format Painter",
      "Style Copier",
      "Design Ideas",
      "SmartArt"
    ],
    "correctAnswer": 0,
    "explanation": "The Format Painter (brush icon) copies all formatting from one object and applies it to another. Double-clicking it allows multiple applications.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Quickly standardizing the look of multiple disparate text boxes added to a slide during a brainstorming session."
  },
  {
    "id": 71,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "You are exporting a presentation as a video (MP4). Which elements will NOT be included in the final exported video?",
    "options": [
      "Slide transitions and animations",
      "Embedded audio narrations",
      "Live external hyperlinked web pages",
      "Laser pointer gestures recorded during timing"
    ],
    "correctAnswer": 2,
    "explanation": "A video file is static media; it cannot contain clickable hyperlinks or dynamically load live external web pages.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Converting a training module into a video for YouTube; you must ensure links are written out as text, not clickable buttons."
  },
  {
    "id": 72,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "How can you ensure that an embedded Excel chart in PowerPoint updates automatically when the original Excel file is modified?",
    "options": [
      "Copy the chart and use 'Paste Special -> Paste Link'.",
      "Save the PowerPoint file in the same folder as the Excel file.",
      "Use the 'Group' function to bind the chart to the slide.",
      "Charts embedded from Excel always update automatically by default."
    ],
    "correctAnswer": 0,
    "explanation": "'Paste Link' establishes a dynamic connection to the source file. Standard pasting embeds a static snapshot or a separate copy of the data.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Creating a monthly financial report deck that automatically updates its charts when the finance team updates the master spreadsheet."
  },
  {
    "id": 73,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "You need to present a slideshow across two screens (one for the audience, one for your notes). Which feature enables this?",
    "options": [
      "Screen Mirroring",
      "Presenter View",
      "Dual Monitor Slide Show",
      "Extended Display Mode"
    ],
    "correctAnswer": 1,
    "explanation": "Presenter View displays the current slide to the audience on one monitor, while showing speaker notes, the next slide, and a timer to the presenter on another.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Delivering a keynote speech while secretly referencing speaker notes and timing on a laptop screen."
  },
  {
    "id": 74,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "In the Animation Pane, what does the 'Start With Previous' option do?",
    "options": [
      "It triggers the animation simultaneously with the animation immediately preceding it.",
      "It forces the animation to play on the previous slide.",
      "It requires the user to click the 'Previous' button on the clicker.",
      "It deletes the current animation and restores the previous one."
    ],
    "correctAnswer": 0,
    "explanation": "'Start With Previous' groups animations to happen at the exact same time, creating complex, synchronized effects.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Making a title text fade in exactly while a background shape expands."
  },
  {
    "id": 75,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "What is the purpose of 'SmartArt' in PowerPoint?",
    "options": [
      "To automatically correct spelling and grammar errors in visual text.",
      "To convert bulleted lists or raw text into visually appealing, structured diagrams (like flowcharts or hierarchies).",
      "To insert royalty-free stock images from the internet.",
      "To analyze data sets and automatically select the best chart type."
    ],
    "correctAnswer": 1,
    "explanation": "SmartArt is a tool used to visually communicate information, easily converting text into processes, cycles, lists, and hierarchical diagrams.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Quickly visualizing a company's organizational chart without manually drawing and aligning individual boxes."
  },
  {
    "id": 76,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Technical Application",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "To trigger an animation only when a specific shape on the slide is clicked, what feature must you use?",
    "options": [
      "Action Buttons",
      "Hyperlinks",
      "Animation Triggers",
      "Slide Master Hooks"
    ],
    "correctAnswer": 2,
    "explanation": "Animation Triggers allow you to set an animation to run only when a specific object (like a button or picture) on the slide is clicked during the presentation.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Creating an interactive quiz slide where clicking an answer reveals a 'Correct' or 'Incorrect' popup."
  },
  {
    "id": 77,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Scenario Based",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "You have a 50-slide presentation. You need to present to two different audiences: Audience A needs slides 1-20 and 40-50. Audience B needs slides 1-10 and 21-39. What is the most efficient way to manage this without creating two separate files?",
    "options": [
      "Use the 'Hide Slide' feature right before each presentation.",
      "Create two 'Custom Slide Shows' within the single file.",
      "Use Slide Sections and collapse the ones you don't need.",
      "Export the slides to PDF and combine them in a PDF editor."
    ],
    "correctAnswer": 1,
    "explanation": "Custom Slide Shows allow you to create distinct, named sequences of slides from the same master presentation file.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "A sales manager maintaining one master pitch deck but running different customized versions for enterprise vs. small-business clients."
  },
  {
    "id": 78,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Scenario Based",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "Your company has updated its official logo. You need to replace the old logo with the new one on all 80 slides of your presentation. The logo is located in the top right corner. What is the fastest method?",
    "options": [
      "Use the 'Find and Replace' tool to swap the image files.",
      "Delete the old logo on slide 1, paste the new one, and copy-paste it 79 times.",
      "Go to the Slide Master, replace the logo on the master layout, and close master view.",
      "Select all slides in the thumbnail pane, right-click, and select 'Update Pictures'."
    ],
    "correctAnswer": 2,
    "explanation": "Elements placed on the Slide Master automatically propagate to all slides that use that layout. Modifying the master updates the entire presentation instantly.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Executing a corporate rebranding update across dozens of template decks instantly."
  },
  {
    "id": 79,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Scenario Based",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "During a live presentation, a client asks a question related to a slide you showed 15 slides ago. You are currently on Slide 45. What is the most professional way to jump exactly to Slide 30 without rapidly clicking the 'Back' button 15 times?",
    "options": [
      "Press the 'Home' key and click forward 30 times.",
      "Press 'Esc' to exit the presentation, scroll to the slide, and restart.",
      "Type '30' on the keyboard and press 'Enter'.",
      "Right-click and select 'Rewind'."
    ],
    "correctAnswer": 2,
    "explanation": "During a slideshow, typing the slide number and pressing Enter instantly jumps to that specific slide without breaking the presentation flow.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Seamlessly navigating large decks during Q&A sessions in board meetings."
  },
  {
    "id": 80,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Scenario Based",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "You are presenting at a conference without an internet connection. Your slide contains a YouTube video link. What will happen when you click it during the slideshow?",
    "options": [
      "PowerPoint will play a cached low-resolution version of the video.",
      "The link will fail to load since it requires a live internet connection to stream.",
      "PowerPoint will automatically skip the slide.",
      "The presentation will crash and close."
    ],
    "correctAnswer": 1,
    "explanation": "Linked web videos (like YouTube) require active internet to stream. To play videos offline, the video file must be physically downloaded and embedded into the slide.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Preparing for off-site client presentations where Wi-Fi access is restricted or unreliable."
  },
  {
    "id": 81,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Scenario Based",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "Your PowerPoint file is 150MB due to multiple high-resolution photographs, making it too large to email. How can you drastically reduce the file size within PowerPoint?",
    "options": [
      "Save the presentation as a .ppsx file instead of .pptx.",
      "Select a picture, go to Picture Format, and use the 'Compress Pictures' tool to apply lower resolution to all images.",
      "Change the slide size from Widescreen (16:9) to Standard (4:3).",
      "Use the 'Remove Background' tool on every image."
    ],
    "correctAnswer": 1,
    "explanation": "The 'Compress Pictures' feature allows you to reduce the resolution (e.g., to 150ppi for web) and delete cropped areas of all pictures in the file simultaneously, drastically cutting file size.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Optimizing a visually heavy marketing deck so it can bypass corporate email attachment limits (usually 20-25MB)."
  },
  {
    "id": 82,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Scenario Based",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "You want to run a presentation loop continuously at a kiosk on a trade show floor unattended. What setting must you configure?",
    "options": [
      "Set Up Slide Show -> Browsed at a kiosk (full screen)",
      "Transitions -> Advance Slide -> On Mouse Click",
      "Animations -> Loop until next slide",
      "Slide Show -> Record Slide Show"
    ],
    "correctAnswer": 0,
    "explanation": "'Browsed at a kiosk' loops the presentation continuously and disables keyboard/mouse clicks to advance slides, preventing users from altering the presentation.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Setting up a continuous promotional video loop on a monitor at a corporate booth."
  },
  {
    "id": 83,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Problem Solving",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "You have 5 rectangles stacked on top of each other. The red rectangle is at the very back (bottom layer). The blue rectangle is at the very front. You want the red rectangle to be immediately behind the blue rectangle. Which command sequence on the red rectangle achieves this directly?",
    "options": [
      "Bring to Front",
      "Bring Forward (click once)",
      "Bring to Front, then Send Backward (click once)",
      "Send to Back"
    ],
    "correctAnswer": 2,
    "explanation": "Bringing it to the Front places it in front of the blue rectangle. Sending it backward once drops it exactly one layer down, immediately behind the blue rectangle.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Managing complex overlapping vector graphics or UI mockups designed directly in PowerPoint."
  },
  {
    "id": 84,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Problem Solving",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "A user complains that their audio file only plays while Slide 1 is active and stops when transitioning to Slide 2. How do you make the background music play across the entire presentation?",
    "options": [
      "Copy and paste the audio file onto every slide.",
      "Select the audio icon, go to Playback, and check 'Play across slides'.",
      "Export the presentation as a video and add the audio track in a video editor.",
      "Increase the volume of the audio file."
    ],
    "correctAnswer": 1,
    "explanation": "The 'Play across slides' option (or selecting 'Play in Background') tells PowerPoint to detach the audio from the slide transition trigger and loop it globally.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Adding corporate background music to an automated photo slideshow."
  },
  {
    "id": 85,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Problem Solving",
    "concept": "MS PowerPoint",
    "difficulty": "Medium",
    "question": "You drew a perfect circle, but when you resize it by dragging a corner handle, it stretches into an oval. How can you resize it while maintaining its perfect circular proportions?",
    "options": [
      "Hold down the 'Ctrl' key while dragging the corner handle.",
      "Hold down the 'Alt' key while dragging the corner handle.",
      "Hold down the 'Shift' key while dragging the corner handle.",
      "Right-click the shape and select 'Lock Aspect Ratio' before dragging."
    ],
    "correctAnswer": 2,
    "explanation": "Holding the Shift key while resizing (or drawing) shapes constrains their proportions (aspect ratio), keeping circles round and squares square.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Resizing profile pictures or icon assets without distorting them."
  },
  {
    "id": 86,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Problem Solving",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "You are trying to align three text boxes perfectly to the left edge of the slide, but dragging them manually is imprecise. What is the most accurate approach?",
    "options": [
      "Turn on gridlines and visually match them to a line.",
      "Select all three, go to Align, choose 'Align Left'.",
      "Select all three, go to Align, ensure 'Align to Slide' is checked, then choose 'Align Left'.",
      "Use the 'Group' function, then manually drag the entire group."
    ],
    "correctAnswer": 2,
    "explanation": "Standard 'Align Left' aligns the objects to the leftmost object in the selection. To align them to the edge of the slide itself, 'Align to Slide' must be checked first.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Creating pixel-perfect layouts for professional corporate templates where margins must be strictly respected."
  },
  {
    "id": 87,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Problem Solving",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "You have a bulleted list with 4 points. You want each point to appear one-by-one upon a mouse click. You apply a 'Fade' animation to the text box, but all 4 points appear at once. What went wrong?",
    "options": [
      "You need to apply a separate animation to each individual line of text.",
      "In the Effect Options for the animation, the sequence is set to 'As One Object' instead of 'By Paragraph'.",
      "The text box is grouped with a shape.",
      "Fade animations do not support sequential loading; you must use 'Appear'."
    ],
    "correctAnswer": 1,
    "explanation": "By default, text box animations apply to the whole object. Changing Effect Options to 'By Paragraph' animates each bullet point sequentially on click.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Controlling the flow of information during a pitch so the audience doesn't read ahead."
  },
  {
    "id": 88,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Tricky Exam Questions",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "Which of the following describes the behavior of saving a file as '.ppsx' instead of '.pptx'?",
    "options": [
      "It compresses the file to a smaller size for email.",
      "It forces the file to open directly in Slide Show view, bypassing the editing interface.",
      "It saves the file in an older format compatible with PowerPoint 2003.",
      "It creates a read-only PDF version of the presentation."
    ],
    "correctAnswer": 1,
    "explanation": "A .ppsx file is a PowerPoint Show. Double-clicking it automatically launches the presentation in full screen, which is great for end-users who just need to view it.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Sending a final interactive deck to a client so they immediately see the polished presentation, not the messy editing view."
  },
  {
    "id": 89,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Tricky Exam Questions",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "What does pressing the 'B' key do during an active PowerPoint Slide Show?",
    "options": [
      "Jumps back to the previous slide.",
      "Bolds the text currently highlighted on screen.",
      "Turns the entire screen black to draw audience focus back to the speaker.",
      "Opens the 'Bookmarks' menu."
    ],
    "correctAnswer": 2,
    "explanation": "Pressing 'B' blanks the screen to black (and 'W' blanks it to white). This is a professional technique to instantly remove visual distractions.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "When a speaker goes on an important tangent and wants the audience to look at them, not the slide."
  },
  {
    "id": 90,
    "app": "PowerPoint",
    "appKey": "powerpoint",
    "topic": "Tricky Exam Questions",
    "concept": "MS PowerPoint",
    "difficulty": "Hard",
    "question": "If you apply an animation to an object on a Slide Master layout, how does it affect the slides in your presentation?",
    "options": [
      "The animation will only play once at the very beginning of the presentation.",
      "The animation will play on every single slide that uses that specific layout.",
      "Slide Masters cannot contain animations, only static design elements.",
      "The animation will override any custom animations you add to individual slides later."
    ],
    "correctAnswer": 1,
    "explanation": "Animations placed on the Slide Master are applied universally to all slides utilizing that layout. They play underneath any custom animations added at the slide level.",
    "whyCorrect": "",
    "whyOthersAreWrong": {},
    "realWorldApplication": "Creating a subtle, consistent animated corporate logo that fades in on the corner of every content slide."
  }
];\n\n// Alias for cross-compatibility\nconst questions = questionsData;\n