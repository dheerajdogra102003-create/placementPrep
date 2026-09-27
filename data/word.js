/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: MICROSOFT WORD
   Document layout, styles, section breaks, mail merge & collaboration
   ========================================================================== */

(function () {
  window.WORD_QUESTIONS = [
    {
      id: 'word-001',
      question: 'A technical writer is formatting a 50-page software documentation report. The cover page must have NO header or footer, pages 2-5 (Executive Summary) must have Roman numeral page numbers (i, ii, iii), and pages 6 onwards must have regular Arabic numerals starting at 1 in Landscape orientation. Which Word feature is strictly required to enable different page orientations and distinct numbering formats in the same document?',
      codeSnippet: '',
      options: [
        'Page Breaks',
        'Section Breaks (Next Page) with "Link to Previous" disabled in Headers/Footers',
        'Paragraph Spacing adjustments',
        'Custom Bookmarks and Hyperlinks'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'practical',
      topic: 'Section vs Page Breaks',
      explanation: 'In Microsoft Word, a simple "Page Break" only moves text to the next page while keeping all page setup properties uniform. "Section Breaks" divide the document into independent formatting zones. By inserting "Section Break (Next Page)" and unlinking "Link to Previous" in the Header/Footer tools, each section can have independent orientation (Portrait vs Landscape), distinct margins, and independent page numbering sequences.',
      wrongOptionExplanations: {
        '0': 'Page Breaks cannot alter page orientation (Portrait to Landscape) or reset page numbering schemes.',
        '2': 'Paragraph spacing adjusts vertical gap between text blocks, not document layout structures.',
        '3': 'Bookmarks create navigational anchors, not section formatting partitions.'
      },
      realWorldApplication: 'Publishing formal corporate reports, RFP proposals, and academic theses requires Section Breaks to isolate front-matter, multi-column wide charts, and appendixes.',
      placementTip: 'Whenever you need DIFFERENT orientation, margins, or page numbering styles in the SAME Word document = SECTION BREAKS with "Link to Previous" turned off!'
    },
    {
      id: 'word-002',
      question: 'In the Microsoft Word "Mail Merge" process used to generate customized offer letters for 500 campus placement candidates, what is the document containing the standard boilerplate text and placeholder fields (such as `<<Candidate_Name>>` and `<<Offered_CTC>>`) called?',
      codeSnippet: '',
      options: [
        'Data Source',
        'Main Document (or Form Letter)',
        'Merged Document',
        'Catalog Template'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Mail Merge Workflows',
      explanation: 'Mail Merge involves three components: (1) Main Document (the template containing static body text and variable merge fields). (2) Data Source (the structured database, Excel spreadsheet, or Access table containing individual candidate records). (3) Merged Document (the final generated output containing a customized page for each recipient).',
      wrongOptionExplanations: {
        '0': 'The Data Source is the spreadsheet or database table holding candidate records.',
        '2': 'The Merged Document is the final generated output after the merge finishes.',
        '3': 'Catalog/Directory is a specific layout type that prints multiple records on a single page.'
      },
      realWorldApplication: 'HR departments automate thousands of personalized employee contracts, dividend slips, and onboarding packets using Mail Merge connected to SQL/Excel backends.',
      placementTip: 'Mail Merge Trinity: Main Document (Template) + Data Source (Excel/DB) = Merged Document (Final Output).'
    },
    {
      id: 'word-003',
      question: 'When multiple software architects collaborate on an architecture specification in Microsoft Word, which feature highlights all text deletions with strikethroughs, insertions in color, and tracks who authored each modification for approval?',
      codeSnippet: '',
      options: [
        'Compare Documents only',
        'Track Changes (found on the Review tab)',
        'AutoCorrect Rules',
        'Inspect Document'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Track Changes & Review',
      explanation: '"Track Changes" (shortcut `Ctrl + Shift + E` or via Review tab) monitors every edit made to the document. Deletions, additions, and formatting changes are marked with distinct author markup and revision bars, allowing the document owner to selectively "Accept" or "Reject" each change individually or in bulk.',
      wrongOptionExplanations: {
        '0': 'Compare Documents is a retrospective tool that compares two separate saved files, not real-time editing markup.',
        '2': 'AutoCorrect automatically fixes common spelling typos as you type.',
        '3': 'Inspect Document checks for hidden metadata, personal comments, and accessibility issues prior to sharing.'
      },
      realWorldApplication: 'Legal contracts and enterprise SLAs undergo rigorous redlining using Track Changes during negotiation cycles between corporate counsel teams.',
      placementTip: 'Review tab -> Track Changes (`Ctrl+Shift+E`). Accept/Reject controls finalize changes.'
    },
    {
      id: 'word-004',
      question: 'Why is using built-in Paragraph Styles (`Heading 1`, `Heading 2`, `Normal`) strongly preferred in professional document design over manually highlighting text and increasing font size?',
      codeSnippet: '',
      options: [
        'Manual font sizing increases the file size by 1000%.',
        'Styles automatically enable generating an automatic Table of Contents, provide Navigation Pane jumping, and permit global styling updates across the entire document with one click.',
        'Word prevents printing any document that does not use Styles.',
        'Styles are mandatory for spell check to operate.'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Styles & Formatting',
      explanation: 'Styles provide structural hierarchy and semantic meaning. Applying `Heading 1` and `Heading 2` allows Word\'s Table of Contents engine to automatically generate and update page numbers, enables the Navigation Pane for instant document jumping, ensures screen reader accessibility, and lets you update the font/color of all headings simultaneously by modifying the style definition.',
      wrongOptionExplanations: {
        '0': 'Manual inline formatting adds minimal byte overhead, not 1000%.',
        '2': 'Word allows printing any document regardless of formatting approach.',
        '3': 'Spell checking checks text tokens independently of applied paragraph styles.'
      },
      realWorldApplication: 'Standardizing corporate whitepapers and technical manuals across teams requires master style sets to guarantee unified branding and automated TOC indexing.',
      placementTip: 'Heading Styles = Automatic Table of Contents (`References -> Table of Contents`) + Navigation Pane outline.'
    },
    {
      id: 'word-005',
      question: 'Which keyboard shortcut in Microsoft Word inserts a standard Hard Page Break at the current cursor position?',
      codeSnippet: '',
      options: [
        'Shift + Enter',
        'Ctrl + Enter',
        'Alt + Enter',
        'Ctrl + Shift + Enter'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'practical',
      topic: 'Shortcuts & Navigation',
      explanation: 'Pressing `Ctrl + Enter` inserts a Page Break in Microsoft Word. In contrast, `Shift + Enter` inserts a Line Break (soft break without starting a new paragraph), and `Ctrl + Shift + Enter` splits a table or inserts a Column Break in multi-column layouts.',
      wrongOptionExplanations: {
        '0': '`Shift + Enter` inserts a soft line break within the current paragraph.',
        '2': '`Alt + Enter` repeats the last action in Word (or new line inside a cell in Excel).',
        '3': '`Ctrl + Shift + Enter` inserts a column break or splits a table.'
      },
      realWorldApplication: 'Using `Ctrl + Enter` to force page starts prevents messy layout shifts that occur when users press "Enter" repeatedly to push text down.',
      placementTip: 'Never press Enter 10 times to reach the next page! Use `Ctrl + Enter` for a clean Page Break.'
    }
  ];
})();
