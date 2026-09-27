/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: MICROSOFT EXCEL
   Formulas, lookup functions, cell referencing, pivot tables & error analysis
   ========================================================================== */

(function () {
  window.EXCEL_QUESTIONS = [
    {
      id: 'excel-001',
      question: 'Cell `C1` contains the formula `=A$1 * $B1`. If this formula is copied and pasted into cell `D3`, what formula will be evaluated in `D3`?',
      codeSnippet: '',
      options: [
        '=B$1 * $B3',
        '=B$3 * $C3',
        '=A$1 * $B1',
        '=B$1 * $C3'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      type: 'formula_output',
      topic: 'Absolute vs Relative Refs',
      explanation: 'In Excel, the `$` locks the row or column immediately following it. Starting at `C1`: moving to `D3` shifts 1 column to the right and 2 rows down. For `A$1`: column `A` is relative so it shifts +1 column to `B`; row `1` has `$1` so it is locked and stays `1` -> becomes `B$1`. For `$B1`: column has `$B` so it is locked and stays `B`; row `1` is relative so it shifts +2 rows down to `3` -> becomes `$B3`. The resulting formula is `=B$1 * $B3`.',
      wrongOptionExplanations: {
        '1': 'Fails to recognize that `$1` locks row 1 in the first term.',
        '2': 'Assumes both cell references were fully absolute (`$A$1 * $B$1`), which is incorrect.',
        '3': 'Fails to recognize that `$B` locks column B in the second term.'
      },
      realWorldApplication: 'Mixed cell referencing (`$A1` and `A$1`) is the core mechanism used to construct two-dimensional financial sensitivity tables and currency exchange conversion matrices.',
      placementTip: 'MNC classic formula question: The `$` locks whatever follows it immediately. `$A1` locks Column A. `A$1` locks Row 1. `$A$1` locks both.'
    },
    {
      id: 'excel-002',
      question: 'Evaluate the following Excel formula: `=COUNTIF(A1:A5, ">50") + SUMIF(A1:A5, "<30")` given the numbers in range `A1:A5` are `[10, 60, 20, 80, 5]`:',
      codeSnippet: '',
      options: [
        '37',
        '35',
        '2',
        '40'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      type: 'formula_output',
      topic: 'Nested IF & SUMIF/COUNTIF',
      explanation: '`COUNTIF(A1:A5, ">50")`: checks values greater than 50. In `[10, 60, 20, 80, 5]`, 60 and 80 are > 50, so count is `2`. `SUMIF(A1:A5, "<30")`: sums values strictly less than 30. In `[10, 60, 20, 80, 5]`, values < 30 are `10 + 20 + 5 = 35`. Total evaluation: `2 + 35 = 37`.',
      wrongOptionExplanations: {
        '1': 'Calculated only the SUMIF result (35) while forgetting to add the COUNTIF result (2).',
        '2': 'Calculated only the COUNTIF result (2).',
        '3': 'Included 50 or miscalculated the conditional sum.'
      },
      realWorldApplication: 'Conditional aggregations (`COUNTIF`, `SUMIFS`, `AVERAGEIFS`) are standard for financial KPI dashboards, employee attendance reports, and regional sales quota calculations.',
      placementTip: 'Be alert: `COUNTIF` returns the NUMBER of matching items; `SUMIF` returns the SUM of values of matching items.'
    },
    {
      id: 'excel-003',
      question: 'Why has `XLOOKUP` largely superseded the legacy `VLOOKUP` function in modern enterprise financial modeling?',
      codeSnippet: '',
      options: [
        'XLOOKUP requires columns to be sorted in ascending order, whereas VLOOKUP does not.',
        'XLOOKUP can look to the left (lookup column does not have to be the first column), defaults to exact match, and does not break when new columns are inserted.',
        'VLOOKUP cannot handle numbers, while XLOOKUP can only handle text.',
        'XLOOKUP is restricted to working inside Pivot Tables only.'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'comparison',
      topic: 'VLOOKUP & XLOOKUP',
      explanation: '`VLOOKUP` suffered from major historical limitations: the lookup key had to be strictly in the leftmost column of the range, it required hardcoded column index numbers (which break whenever columns are inserted/deleted), and it defaulted to approximate match (`TRUE`), causing common lookup bugs. `XLOOKUP` solves all of these by accepting separate lookup and return vectors, searching left or right, defaulting to exact match, and offering native `if_not_found` error handling.',
      wrongOptionExplanations: {
        '0': 'VLOOKUP required sorting for approximate matches; XLOOKUP does not require sorting for exact lookups.',
        '2': 'Both functions handle all standard Excel data types (numbers, dates, text, booleans).',
        '3': 'XLOOKUP is a standard worksheet formula available anywhere in modern Excel, not restricted to Pivot Tables.'
      },
      realWorldApplication: 'Migrating legacy financial spreadsheets from VLOOKUP to XLOOKUP prevents critical formula breakage when operational teams add metadata columns to source databases.',
      placementTip: 'VLOOKUP weakness: cannot look left, breaks on column insert, defaults to approximate. XLOOKUP strength: looks any direction, column-independent, defaults to exact match.'
    },
    {
      id: 'excel-004',
      question: 'A financial analyst opens an Excel spreadsheet and discovers the error `#REF!` appearing in multiple summary total cells. What is the specific root cause of a `#REF!` error in Excel?',
      codeSnippet: '',
      options: [
        'A cell is attempting to divide a number by zero or an empty cell.',
        'A formula contains an invalid cell reference, typically because the row, column, or worksheet referred to by the formula was deleted.',
        'The formula name was misspelled (e.g. `=SMM(A1:A5)` instead of `=SUM(A1:A5)`).',
        'The column is too narrow to display the full numeric value.'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'debugging',
      topic: 'Error Codes (#N/A, #REF!)',
      explanation: '`#REF!` stands for "Invalid Reference". It occurs when a formula refers to a cell that no longer exists—most commonly caused when rows, columns, or entire worksheets that were referenced in the formula were permanently deleted.',
      wrongOptionExplanations: {
        '0': 'Dividing by zero causes `#DIV/0!`.',
        '2': 'Misspelling a function name causes `#NAME?`.',
        '3': 'A column that is too narrow displays a string of hash symbols `######`, not `#REF!`.'
      },
      realWorldApplication: 'Automated audit scripts flag `#REF!` errors as critical integrity defects before submitting quarterly SEC or investor financial filings.',
      placementTip: 'Excel Error Registry: `#REF!` = Deleted cell reference. `#NAME?` = Misspelled formula name. `#VALUE!` = Wrong data type in formula. `#N/A` = Lookup value not found.'
    },
    {
      id: 'excel-005',
      question: 'Which of the following describes the core functionality of a "Pivot Table" in Microsoft Excel?',
      codeSnippet: '',
      options: [
        'A tool that automatically formats spreadsheet borders with alternating colors.',
        'An interactive reporting tool that rapidly aggregates, groups, sorts, filters, and cross-tabulates large datasets without writing complex formulas.',
        'A macro script that converts Excel spreadsheets into Adobe PDF files.',
        'A hardware accelerator card that speeds up Excel workbook calculations.'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Pivot Tables & Summaries',
      explanation: 'A Pivot Table is Excel\'s premier data analysis engine. It allows users to take flat relational tables with thousands of rows and instantly summarize them by dragging fields into Rows, Columns, Values, and Filters, computing sums, counts, and averages dynamically without manual formula authoring.',
      wrongOptionExplanations: {
        '0': 'Alternating row colors is achieved via "Format as Table" or conditional formatting.',
        '2': 'Converting to PDF is done via "Save As" or "Export", not Pivot Tables.',
        '3': 'Pivot Tables are a native software feature of Excel, not hardware devices.'
      },
      realWorldApplication: 'Business intelligence analysts use Pivot Tables to generate sales performance matrices, churn analysis by demographic cohort, and monthly expense variances.',
      placementTip: 'Key Pivot Table components to remember: Rows (categorical grouping), Columns (cross-tab grouping), Values (aggregated metric, e.g. Sum/Count), Filters (slicers).'
    }
  ];
})();
