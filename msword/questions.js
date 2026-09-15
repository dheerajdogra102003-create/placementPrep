// Microsoft Word 30 Placement MCQs
const questionsData = [
  {
    "id": 1,
    "question": "What is the primary function of the 'Format Painter' tool in MS Word?",
    "options": [
      "To copy the text from one paragraph and paste it into another.",
      "To copy the formatting (such as color, font style, and size) applied to a piece of text and apply it elsewhere.",
      "To remove all formatting from a selected block of text.",
      "To apply predefined artistic text effects like shadows and reflections."
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Core Concepts",
    "concept": "Format Painter",
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
    "id": 2,
    "question": "In MS Word, what is a 'Macro' primarily used for?",
    "options": [
      "To create large-scale charts and graphs from table data.",
      "To automatically translate documents into different languages.",
      "To record a sequence of commands and instructions to automate a repetitive task.",
      "To merge multiple Word documents into a single master PDF."
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Core Concepts",
    "concept": "Macros & Automation",
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
    "id": 3,
    "question": "Which of the following best describes 'Mail Merge'?",
    "options": [
      "A feature that connects MS Word directly to Outlook to send bulk emails without personalization.",
      "A tool that merges multiple Word documents into one file.",
      "A process that combines a main document with a data source (like Excel) to create personalized documents for multiple recipients.",
      "A tracking tool that merges comments from multiple reviewers."
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Core Concepts",
    "concept": "Mail Merge",
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
    "id": 4,
    "question": "What is the primary function of 'Styles' (e.g., Heading 1, Normal) in MS Word?",
    "options": [
      "To change the physical layout of the page (margins and orientation).",
      "To apply a consistent set of formatting choices throughout a document, enabling structural features like automatic Tables of Contents.",
      "To grammar-check documents based on stylistic guidelines (APA, MLA).",
      "To insert stylized vector graphics like flowcharts."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Core Concepts",
    "concept": "Document Styles",
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
    "id": 5,
    "question": "What is a 'Section Break' used for that a standard 'Page Break' cannot do?",
    "options": [
      "A Section Break pushes text to the next page.",
      "A Section Break allows you to have different page orientations, margins, or headers/footers within the same document.",
      "A Section Break automatically creates a new chapter in the Table of Contents.",
      "A Section Break prevents the document from being printed beyond that point."
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Core Concepts",
    "concept": "Section Breaks",
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
    "id": 6,
    "question": "What is the standard keyboard shortcut to undo the last action in MS Word?",
    "options": [
      "Ctrl + Y",
      "Ctrl + Z",
      "Ctrl + X",
      "Ctrl + U"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Core Concepts",
    "concept": "Undo Shortcut",
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
    "id": 7,
    "question": "What does the 'Track Changes' feature do in MS Word?",
    "options": [
      "It records all the network locations a document has been saved to.",
      "It monitors the total active editing time spent on a document.",
      "It marks all additions, deletions, and formatting changes made to a document so they can be reviewed and accepted/rejected later.",
      "It tracks which IP addresses or user accounts have opened the document."
    ],
    "correctAnswer": 2,
    "difficulty": "Easy",
    "topic": "Core Concepts",
    "concept": "Track Changes",
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
    "id": 8,
    "question": "What is a 'Soft Return' (Line Break) in MS Word, and how is it created?",
    "options": [
      "It creates a new paragraph; created by pressing Enter.",
      "It moves text to the next line without starting a new paragraph; created by pressing Shift + Enter.",
      "It forces text to the next page; created by pressing Ctrl + Enter.",
      "It creates a column break; created by pressing Alt + Enter."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Core Concepts",
    "concept": "Soft Return (Shift+Enter)",
    "explanation": "A soft return (Shift + Enter) moves the cursor to the next line but keeps the text within the same paragraph, preventing extra paragraph spacing from being added.",
    "whyCorrect": "Shift + Enter inserts a manual line break character (\u21b5) without triggering paragraph-after or paragraph-before spacing rules.",
    "whyOthersAreWrong": {
      "0": "Pressing Enter inserts a hard paragraph break (\u00b6) which applies paragraph spacing rules.",
      "2": "Pressing Ctrl + Enter inserts a manual page break.",
      "3": "Column breaks are inserted with Ctrl + Shift + Enter."
    },
    "realWorldApplication": "Formatting multi-line addresses or contact information blocks tightly together in a resume or invoice header."
  },
  {
    "id": 9,
    "question": "You want to create an automatic Table of Contents for your report. What is the mandatory prerequisite step before generating it?",
    "options": [
      "You must insert page numbers on every single page.",
      "You must manually type out a list of chapters on the first page.",
      "You must apply built-in Heading styles (Heading 1, Heading 2, etc.) to your chapter titles.",
      "You must insert bookmarks at the start of every page."
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Formatting & Layout",
    "concept": "Table of Contents Setup",
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
    "id": 10,
    "question": "How can you quickly insert a trademark symbol (\u2122) using AutoCorrect without accessing the 'Insert Symbol' menu?",
    "options": [
      "Type (tm) and press the spacebar.",
      "Press Ctrl + T.",
      "Type /trademark.",
      "Press Alt + M."
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "topic": "Formatting & Layout",
    "concept": "AutoCorrect Symbols",
    "explanation": "Word's AutoCorrect automatically replaces specific text patterns like (tm), (c), and (r) with their respective symbols \u2122, \u00a9, and \u00ae.",
    "whyCorrect": "The default AutoCorrect lookup dictionary maps parenthesized characters like (tm) to the Unicode \u2122 glyph upon whitespace entry.",
    "whyOthersAreWrong": {
      "1": "Ctrl + T creates a hanging indent in Word, not a trademark symbol.",
      "2": "Slash commands are used in modern collaborative markdown editors, not native Word defaults.",
      "3": "Alt + M activates the Mailings ribbon tab in the Word interface."
    },
    "realWorldApplication": "Rapidly drafting corporate press releases containing registered trademarks and copyright notices without disrupting keyboard workflow."
  },
  {
    "id": 11,
    "question": "You need to lock a document so users can only fill out designated form fields and cannot edit the surrounding text. Which feature accomplishes this?",
    "options": [
      "Save as PDF",
      "Restrict Editing -> Allow only 'Filling in forms'",
      "Mark as Final",
      "Read-Only Mode"
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Formatting & Layout",
    "concept": "Restrict Editing",
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
    "id": 12,
    "question": "You are configuring a Mail Merge document. What represents the dynamic placeholder for incoming data from your Excel spreadsheet?",
    "options": [
      "Data Tags",
      "Merge Fields (e.g., \u00abFirst_Name\u00bb)",
      "Excel Links",
      "Dynamic Variables"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Formatting & Layout",
    "concept": "Mail Merge Fields",
    "explanation": "Merge Fields act as placeholders in the Word document. During the merge, Word replaces the field (like \u00abFirst_Name\u00bb) with actual data from the corresponding column in the data source.",
    "whyCorrect": "Merge fields are enclosed in chevron delimiters (\u00ab \u00bb) and bind directly to database or spreadsheet column headers.",
    "whyOthersAreWrong": {
      "0": "'Data Tags' is not standard Microsoft Office terminology for Mail Merge data binding.",
      "2": "Excel links embed live spreadsheet tables or charts, not individual recipient mail merge tokens.",
      "3": "Dynamic Variables are programming language constructs, not Word document merge tokens."
    },
    "realWorldApplication": "Creating an automated template that generates 200 tailored client invoices with customized line items, names, and billing dates."
  },
  {
    "id": 13,
    "question": "You want to print page 1, page 3, and pages 5 through 8 of a document. How should you format the custom range in the Print dialog?",
    "options": [
      "1; 3; 5-8",
      "1, 3, 5-8",
      "1 and 3 and 5 to 8",
      "1+3+5:8"
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Formatting & Layout",
    "concept": "Print Page Ranges",
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
    "id": 14,
    "question": "What is the primary function of the 'Navigation Pane' in MS Word?",
    "options": [
      "To search the internet for definitions of technical terms.",
      "To visually map the document's heading structure, allowing you to click and jump to sections or easily reorganize chapters via drag-and-drop.",
      "To navigate between multiple open Word application windows.",
      "To track file paths when saving documents across local and network drives."
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Formatting & Layout",
    "concept": "Navigation Pane",
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
    "id": 15,
    "question": "You pasted text from a website that brought unwanted background colors, fonts, and bolding. What is the fastest way to strip all external styling to match your document?",
    "options": [
      "Highlight the text, change font color to black, and remove bold manually.",
      "Use the 'Keep Text Only' paste option, or click the 'Clear All Formatting' button.",
      "Delete the text and retype it by hand.",
      "Save the document as a plain text (.txt) file and reopen it."
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Formatting & Layout",
    "concept": "Clear Formatting",
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
    "id": 16,
    "question": "How do you create a 'Hanging Indent' where the first line is flush left, but subsequent lines are indented?",
    "options": [
      "Press Enter at the end of every line and press Space 5 times.",
      "Open Paragraph settings and under Indentation, set 'Special' to 'Hanging'.",
      "Click the 'Align Right' button.",
      "Insert a Table with hidden borders."
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Formatting & Layout",
    "concept": "Hanging Indent",
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
    "id": 17,
    "question": "You want Chapter 1 header to read 'Introduction' and Chapter 2 header to read 'System Architecture'. Changing Chapter 2 header overwrites Chapter 1. How do you resolve this?",
    "options": [
      "Headers cannot be customized per chapter; you must use floating text boxes instead.",
      "Insert a Section Break between the chapters, open the Chapter 2 header, and uncheck 'Link to Previous'.",
      "Insert a Page Break between chapters and check 'Different First Page'.",
      "Save Chapter 1 and Chapter 2 as separate Word documents."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Scenario Applications",
    "concept": "Unlink Headers Across Sections",
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
    "id": 18,
    "question": "A contract with Track Changes enabled contains dozens of red markup lines. You want to preview how the final document reads without accepting the edits permanently. What should you do?",
    "options": [
      "Click 'Accept All Changes', which permanently alters the document.",
      "Change the tracking display view from 'All Markup' to 'No Markup'.",
      "Turn off the 'Track Changes' toggle button.",
      "Save the document as a PDF to hide the markup."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Scenario Applications",
    "concept": "No Markup Preview",
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
    "id": 19,
    "question": "You realize a vendor company name 'Smitheson' was misspelled across a 200-page document and should be 'Smithson'. What is the safest and fastest way to correct all occurrences?",
    "options": [
      "Manually scroll through the document and delete the letter 'e' on each page.",
      "Run Spell Check and click 'Change All' when it flags the word.",
      "Use the 'Replace' tool (Ctrl + H), enter 'Smitheson' in 'Find what', 'Smithson' in 'Replace with', and click 'Replace All'.",
      "Use the AutoCorrect dictionary to fix past text dynamically."
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Scenario Applications",
    "concept": "Find and Replace (Ctrl+H)",
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
    "id": 20,
    "question": "An image inserted into Word behaves like a giant text character and cannot be dragged freely around the page. How do you allow free image positioning?",
    "options": [
      "Change the 'Wrap Text' setting from 'In Line with Text' to 'Square' or 'Tight'.",
      "Right-click the image and select 'Unlock'.",
      "Convert the image into a SmartArt graphic.",
      "Place the image inside a single-cell Table."
    ],
    "correctAnswer": 0,
    "difficulty": "Easy",
    "topic": "Scenario Applications",
    "concept": "Image Text Wrapping",
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
    "id": 21,
    "question": "Two team members are simultaneously editing a Word document hosted on Microsoft OneDrive. Which technology prevents them from overwriting each other's work?",
    "options": [
      "Macro Recording",
      "Document Inspector",
      "Co-authoring (Real-time collaboration)",
      "Mail Merge"
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Scenario Applications",
    "concept": "Co-authoring",
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
    "id": 22,
    "question": "You want to distribute a final proposal to external clients ensuring formatting and typography cannot shift across different computers. What is the standard format to use?",
    "options": [
      "Save as RTF (Rich Text Format).",
      "Export / Save as PDF (Portable Document Format).",
      "Password protect the .docx file.",
      "Save as a Word Template (.dotx)."
    ],
    "correctAnswer": 1,
    "difficulty": "Easy",
    "topic": "Scenario Applications",
    "concept": "PDF Export",
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
    "id": 23,
    "question": "You are unable to delete a stubborn blank page at the end of a Word document by pressing Backspace. What is the most effective troubleshooting step?",
    "options": [
      "Run an antivirus scan on the document file.",
      "Remove watermarks from the Design tab.",
      "Toggle 'Show/Hide \u00b6' (Ctrl+Shift+8) to reveal and delete hidden empty paragraph returns or page breaks.",
      "Change printer properties to force an odd page count."
    ],
    "correctAnswer": 2,
    "difficulty": "Hard",
    "topic": "Troubleshooting & Tools",
    "concept": "Show/Hide Formatting Marks",
    "explanation": "Blank pages are usually caused by hidden empty paragraphs (returns) or manual Page/Section Breaks. Toggling 'Show/Hide \u00b6' reveals these non-printing characters so they can be deleted.",
    "whyCorrect": "The Show/Hide command (Ctrl+Shift+*) renders all invisible non-printing characters (\u00b6, dots for spaces, break lines), making the culprit instantly selectable and removable.",
    "whyOthersAreWrong": {
      "0": "Antivirus software scans for malicious macro payloads, not layout formatting artifacts.",
      "1": "Watermarks sit in headers as background elements and do not push paragraphs onto new pages.",
      "3": "Printer settings do not control the internal document page count in Word's layout editor."
    },
    "realWorldApplication": "Eliminating an unwanted trailing blank page from a candidate's resume so it exports cleanly as a single page."
  },
  {
    "id": 24,
    "question": "You have a two-column newsletter layout, but need the headline title to stretch across the full width of both columns. How is this accomplished?",
    "options": [
      "Place the headline title inside the page header.",
      "Format the title as 'One Column', insert a Continuous Section Break, and format the body as 'Two Columns'.",
      "Select the headline and click 'Merge Columns'.",
      "This is impossible; column settings apply strictly to the whole page."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Troubleshooting & Tools",
    "concept": "Continuous Section Breaks",
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
    "id": 25,
    "question": "A line of text in a paragraph exhibits exaggerated, awkward gaps between words despite only having single spaces. What is the root cause?",
    "options": [
      "The font file is corrupted.",
      "The paragraph alignment is set to 'Justified', and the line has very few words, causing Word to expand spacing to touch both margins.",
      "The user accidentally pressed Tab between words.",
      "Kerning is set to maximum."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Troubleshooting & Tools",
    "concept": "Justified Alignment Spacing",
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
    "id": 26,
    "question": "When you type a URL (such as www.microsoft.com), Word automatically converts it into a clickable blue hyperlink. Where do you disable this automatic conversion?",
    "options": [
      "Design -> Page Background -> Link Colors",
      "File -> Options -> Proofing -> AutoCorrect Options -> AutoFormat As You Type",
      "Insert -> Links -> Disable Hyperlinks",
      "Review -> Language -> Unlink URLs"
    ],
    "correctAnswer": 1,
    "difficulty": "Hard",
    "topic": "Troubleshooting & Tools",
    "concept": "AutoFormat As You Type",
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
    "id": 27,
    "question": "A table extends over three pages in a document. Pages 2 and 3 do not display the column headers, making data difficult to interpret. How do you repeat them automatically?",
    "options": [
      "Manually copy and paste the header row at the top of pages 2 and 3.",
      "Select the header row, go to Table Tools Layout, and click 'Repeat Header Rows'.",
      "Insert a page break inside the table to force headers down.",
      "Convert the table to an embedded Excel spreadsheet."
    ],
    "correctAnswer": 1,
    "difficulty": "Medium",
    "topic": "Troubleshooting & Tools",
    "concept": "Repeat Header Rows",
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
    "id": 28,
    "question": "What happens if you double-click the 'Format Painter' icon instead of single-clicking it?",
    "options": [
      "It permanently deletes the source formatting.",
      "It opens the Advanced Typography dialog box.",
      "It locks the Format Painter on, allowing you to apply the formatting to multiple separate text selections until you press Esc.",
      "It applies the formatting across the entire document in one click."
    ],
    "correctAnswer": 2,
    "difficulty": "Hard",
    "topic": "Advanced & Tricky",
    "concept": "Persistent Format Painter",
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
    "id": 29,
    "question": "You want to find any word in a document that starts with 'pre' (e.g. preview, prepare, prefix). Which Advanced Find feature must be used?",
    "options": [
      "Check 'Use wildcards' and search for 'pre*'",
      "Check 'Sounds Like' and search for 'pre'",
      "Check 'Match Case' and search for 'PRE'",
      "Check 'Find Whole Words Only' and search for 'pre'"
    ],
    "correctAnswer": 0,
    "difficulty": "Hard",
    "topic": "Advanced & Tricky",
    "concept": "Wildcard Search",
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
    "id": 30,
    "question": "What happens when you apply a 'Drop Cap' to a paragraph in MS Word?",
    "options": [
      "The entire paragraph is converted into uppercase letters.",
      "The paragraph text drops down to the bottom margin of the page.",
      "The first letter of the paragraph is enlarged and drops down across two or more lines of text.",
      "A decorative caption frame is placed beneath the paragraph."
    ],
    "correctAnswer": 2,
    "difficulty": "Medium",
    "topic": "Advanced & Tricky",
    "concept": "Drop Cap",
    "explanation": "A Drop Cap is a large capital letter at the beginning of a text block that has the depth of two or more lines of regular text.",
    "whyCorrect": "Drop Cap enlarges the initial letter into a stylized display character that drops down into subsequent lines of the paragraph.",
    "whyOthersAreWrong": {
      "0": "Converting to uppercase is handled by the Change Case (Shift+F3) button.",
      "1": "Pushing text down is handled by page breaks, paragraph spacing, or vertical alignment.",
      "3": "Adding decorative captions is done via Insert > Caption."
    },
    "realWorldApplication": "Creating elegant editorial layouts, corporate newsletters, or marketing magazine articles that require an executive aesthetic."
  }
];

const questions = questionsData;
