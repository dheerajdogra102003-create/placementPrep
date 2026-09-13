const questions = [
    // --- Theoretical Conceptual (8) ---
    {
        id: 1,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "easy placement",
        question: "What is the primary function of the 'Format Painter' tool in MS Word?",
        options: {
            A: "To copy the text from one paragraph and paste it into another.",
            B: "To copy the formatting (such as color, font style, and size) applied to a piece of text and apply it to elsewhere.",
            C: "To remove all formatting from a selected block of text.",
            D: "To apply predefined artistic text effects like shadows and reflections."
        },
        correctAnswer: "B",
        explanation: "The Format Painter copies formatting from one object or text block and applies it to another, saving time when standardizing styles.",
        realWorldApplication: "Quickly applying the exact heading style from Chapter 1 to the heading of Chapter 2 without manually setting font sizes and colors."
    },
    {
        id: 2,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "In MS Word, what is a 'Macro' primarily used for?",
        options: {
            A: "To create large-scale charts and graphs from table data.",
            B: "To automatically translate documents into different languages.",
            C: "To record a sequence of commands and instructions to automate a repetitive task.",
            D: "To merge multiple Word documents into a single master PDF."
        },
        correctAnswer: "C",
        explanation: "A macro is a recorded series of commands and keystrokes that you can trigger with a single click or keyboard shortcut to automate repetitive tasks.",
        realWorldApplication: "Automating the process of inserting a company header, formatting the title, and adding a standard footer to daily report templates."
    },
    {
        id: 3,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "Which of the following best describes 'Mail Merge'?",
        options: {
            A: "A feature that connects MS Word directly to Outlook to send bulk emails without personalization.",
            B: "A tool that merges multiple Word documents into one file.",
            C: "A process that combines a main document with a data source (like Excel) to create personalized documents for multiple recipients.",
            D: "A tracking tool that merges comments from multiple reviewers."
        },
        correctAnswer: "C",
        explanation: "Mail Merge takes a template document and injects data from a spreadsheet or database to generate personalized letters, envelopes, or emails.",
        realWorldApplication: "Generating 500 personalized interview offer letters where the name, date, and salary fields change for each candidate."
    },
    {
        id: 4,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "What is the function of 'Styles' in MS Word?",
        options: {
            A: "To change the physical layout of the page (margins, orientation).",
            B: "To apply a consistent set of formatting choices consistently throughout a document, enabling structural features like automatic Tables of Contents.",
            C: "To grammar-check documents based on different stylistic guidelines (APA, MLA).",
            D: "To insert stylized smart graphics like flowcharts."
        },
        correctAnswer: "B",
        explanation: "Styles (like Heading 1, Normal) ensure consistent formatting and allow Word to understand the document structure, which is required for navigation panes and automatic Tables of Contents.",
        realWorldApplication: "Formatting a 100-page software documentation manual so that all subheadings match perfectly and auto-populate the index."
    },
    {
        id: 5,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "moderate-hard placement",
        question: "What is a 'Section Break' used for that a 'Page Break' cannot do?",
        options: {
            A: "A Section Break pushes text to the next page.",
            B: "A Section Break allows you to have different page orientations, margins, or headers/footers within the same document.",
            C: "A Section Break automatically creates a new chapter in the Table of Contents.",
            D: "A Section Break prevents the document from being printed beyond that point."
        },
        correctAnswer: "B",
        explanation: "While a Page Break just starts a new page, a Section Break divides the document into independent formatting zones, allowing different page layouts or headers in each section.",
        realWorldApplication: "Having the first 5 pages of a report in Portrait orientation, and the 6th page in Landscape orientation to fit a wide data table."
    },
    {
        id: 6,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "easy placement",
        question: "What is the standard keyboard shortcut to undo the last action in MS Word?",
        options: {
            A: "Ctrl + Y",
            B: "Ctrl + Z",
            C: "Ctrl + X",
            D: "Ctrl + U"
        },
        correctAnswer: "B",
        explanation: "Ctrl + Z is the universal shortcut to Undo. Ctrl + Y is Redo, Ctrl + X is Cut, and Ctrl + U is Underline.",
        realWorldApplication: "Quickly reverting a formatting mistake instead of trying to manually change the font back to its previous state."
    },
    {
        id: 7,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "What does the 'Track Changes' feature do?",
        options: {
            A: "It records all the locations a document has been saved to on a network.",
            B: "It monitors the time spent editing a document.",
            C: "It marks all additions, deletions, and formatting changes made to a document so they can be reviewed and accepted/rejected later.",
            D: "It tracks which users have opened the document."
        },
        correctAnswer: "C",
        explanation: "Track Changes visually logs every edit made to a document, allowing authors and reviewers to collaborate, see exactly what changed, and approve or reject edits.",
        realWorldApplication: "A senior developer reviewing a junior's technical spec document and suggesting wording edits before final approval."
    },
    {
        id: 8,
        topic: "MS Word",
        category: "theoretical_conceptual",
        difficulty: "moderate-hard placement",
        question: "What is a 'Soft Return' (Line Break) in MS Word, and how is it created?",
        options: {
            A: "It creates a new paragraph; created by pressing Enter.",
            B: "It moves text to the next line without starting a new paragraph; created by pressing Shift + Enter.",
            C: "It forces text to the next page; created by pressing Ctrl + Enter.",
            D: "It creates a column break; created by pressing Alt + Enter."
        },
        correctAnswer: "B",
        explanation: "A soft return (Shift + Enter) moves the cursor to the next line but keeps the text within the same paragraph, preventing extra paragraph spacing from being added.",
        realWorldApplication: "Keeping an address block tightly spaced together while the rest of the document uses double paragraph spacing."
    },

    // --- Technical Application (8) ---
    {
        id: 9,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "You want to create an automatic Table of Contents for your report. What is the mandatory prerequisite step before generating it?",
        options: {
            A: "You must insert page numbers on every page.",
            B: "You must manually type out a list of chapters on the first page.",
            C: "You must apply built-in Heading styles (Heading 1, Heading 2, etc.) to your chapter titles.",
            D: "You must insert bookmarks at the start of every page."
        },
        correctAnswer: "C",
        explanation: "Word generates the Table of Contents by scanning the document for text formatted with Heading styles. Without Headings, it won't know what to include.",
        realWorldApplication: "Structuring a 50-page requirements document so the TOC automatically updates when sections are added or moved."
    },
    {
        id: 10,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "How can you insert a trademark symbol (™) using AutoCorrect without accessing the 'Insert Symbol' menu?",
        options: {
            A: "Type (tm) and press the spacebar.",
            B: "Press Ctrl + T.",
            C: "Type /trademark.",
            D: "Press Alt + M."
        },
        correctAnswer: "A",
        explanation: "Word's AutoCorrect automatically replaces specific text patterns like (tm), (c), and (r) with their respective symbols ™, ©, and ®.",
        realWorldApplication: "Quickly typing out corporate product names that require trademark symbols without breaking typing flow."
    },
    {
        id: 11,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "moderate-hard placement",
        question: "You need to lock a document so users can only fill out specific form fields and cannot edit the surrounding text. Which feature accomplishes this?",
        options: {
            A: "Save as PDF",
            B: "Restrict Editing -> Allow only 'Filling in forms'",
            C: "Mark as Final",
            D: "Read-Only Mode"
        },
        correctAnswer: "B",
        explanation: "The 'Restrict Editing' pane allows you to lock the document structure while explicitly permitting users to only interact with designated form fields.",
        realWorldApplication: "Distributing a standardized HR employee intake form where candidates can only type their answers in specific boxes."
    },
    {
        id: 12,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "hard placement",
        question: "You are setting up a Mail Merge. What represents the placeholder for data coming from your Excel spreadsheet?",
        options: {
            A: "Data Tags",
            B: "Merge Fields (e.g., «First_Name»)",
            C: "Excel Links",
            D: "Dynamic Variables"
        },
        correctAnswer: "B",
        explanation: "Merge Fields act as placeholders in the Word document. During the merge, Word replaces the field (like «First_Name») with actual data from the corresponding column in the data source.",
        realWorldApplication: "Creating a template for generating customized weekly performance reports for 200 different sales agents."
    },
    {
        id: 13,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "You want to print a document, but you only want to print pages 1, 3, and a range from 5 to 8. How should you format this in the print dialog box?",
        options: {
            A: "1; 3; 5-8",
            B: "1, 3, 5-8",
            C: "1 and 3 and 5 to 8",
            D: "1+3+5:8"
        },
        correctAnswer: "B",
        explanation: "In the page range box, commas separate individual pages, and hyphens define a continuous range.",
        realWorldApplication: "Printing only the summary, the financial table, and the appendices of a massive corporate report to save paper."
    },
    {
        id: 14,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "moderate-hard placement",
        question: "What is the purpose of the 'Navigation Pane' in MS Word?",
        options: {
            A: "To search the internet for definitions of words.",
            B: "To visually map the document's heading structure, allowing you to click and jump to sections or easily reorganize chapters via drag-and-drop.",
            C: "To navigate between multiple open Word windows.",
            D: "To track file paths when saving documents to a network drive."
        },
        correctAnswer: "B",
        explanation: "The Navigation Pane displays the document structure (based on Heading styles), allowing easy navigation, searching, and structural reorganization.",
        realWorldApplication: "Reviewing a dense API specification document and quickly jumping between endpoint descriptions."
    },
    {
        id: 15,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "You pasted text from a website and it brought over unwanted background colors, fonts, and bolding. What is the fastest way to strip this formatting and match your document?",
        options: {
            A: "Highlight the text, change the font color to black, and remove the bold setting manually.",
            B: "Use the 'Keep Text Only' paste option, or click the 'Clear All Formatting' eraser icon.",
            C: "Delete the text, type it out manually.",
            D: "Save the document as a plain text (.txt) file and reopen it."
        },
        correctAnswer: "B",
        explanation: "Pasting with 'Keep Text Only' or using 'Clear All Formatting' instantly strips external HTML/CSS styles and forces the text to adopt the destination's default paragraph style.",
        realWorldApplication: "Aggregating research notes from various websites into a clean, uniformly formatted whitepaper."
    },
    {
        id: 16,
        topic: "MS Word",
        category: "technical_application",
        difficulty: "hard placement",
        question: "How do you create a hanging indent, where the first line of a paragraph is flush left, but subsequent lines are indented?",
        options: {
            A: "Press 'Enter' at the end of every line and press 'Space' 5 times.",
            B: "Open Paragraph settings and under Indentation, set 'Special' to 'Hanging'.",
            C: "Use the 'Align Right' button.",
            D: "Insert a Table with hidden borders."
        },
        correctAnswer: "B",
        explanation: "A hanging indent is properly created via Paragraph formatting settings, which automatically manages word wrapping without manual spaces or line breaks.",
        realWorldApplication: "Properly formatting a References or Bibliography section according to APA/MLA academic or corporate standards."
    },

    // --- Scenario Based (6) ---
    {
        id: 17,
        topic: "MS Word",
        category: "scenario_based",
        difficulty: "moderate-hard placement",
        question: "You are writing a manual. You want the header of Chapter 1 to say 'Introduction' and the header of Chapter 2 to say 'System Architecture'. However, when you change the header on page 10 (Chapter 2), it overwrites the header on page 1. How do you fix this?",
        options: {
            A: "You cannot have different headers; you must use text boxes instead.",
            B: "Insert a Section Break between the chapters, enter the Chapter 2 header, and uncheck 'Link to Previous'.",
            C: "Insert a Page Break between the chapters and check 'Different First Page'.",
            D: "Save Chapter 1 and Chapter 2 as separate Word files."
        },
        correctAnswer: "B",
        explanation: "Headers are linked across sections by default. To have unique headers, you must separate the content with a Section Break and explicitly break the link by unchecking 'Link to Previous'.",
        realWorldApplication: "Creating professional technical manuals where the header reflects the current chapter being read."
    },
    {
        id: 18,
        topic: "MS Word",
        category: "scenario_based",
        difficulty: "moderate placement",
        question: "A client sent you a contract with 'Track Changes' enabled. There are dozens of red cross-outs and underlined additions. You want to see how the final document will read without the distracting markup. What should you do?",
        options: {
            A: "Click 'Accept All Changes', which permanently alters the document.",
            B: "Change the tracking view from 'All Markup' to 'No Markup'.",
            C: "Turn off the 'Track Changes' button.",
            D: "Save the document as a PDF to hide the markup."
        },
        correctAnswer: "B",
        explanation: "Switching the view to 'No Markup' allows you to read the clean, final version of the text without permanently accepting or losing the tracked edit history.",
        realWorldApplication: "Proofreading a heavily edited legal agreement for readability before officially accepting the lawyer's revisions."
    },
    {
        id: 19,
        topic: "MS Word",
        category: "scenario_based",
        difficulty: "hard placement",
        question: "You are finalizing a 200-page document. You discover you misspelled the CEO's last name 'Smithson' as 'Smitheson' throughout the entire text. What is the safest and fastest way to fix this?",
        options: {
            A: "Read through the document manually and delete the 'e' each time.",
            B: "Run Spell Check and click 'Change All' when it flags 'Smitheson'.",
            C: "Use the 'Replace' tool (Ctrl + H), type 'Smitheson' in 'Find what', 'Smithson' in 'Replace with', and click 'Replace All'.",
            D: "Use the 'AutoCorrect' feature to fix it dynamically."
        },
        correctAnswer: "C",
        explanation: "The Find and Replace tool is designed specifically for making bulk text corrections instantly and accurately across an entire document.",
        realWorldApplication: "Fixing a deprecated API endpoint name across a massive technical specification document right before publication."
    },
    {
        id: 20,
        topic: "MS Word",
        category: "scenario_based",
        difficulty: "moderate placement",
        question: "You have an image placed in your document, but you can't seem to drag it freely around the page; it acts like a giant text character. How do you allow the image to be moved anywhere?",
        options: {
            A: "Change the 'Wrap Text' setting from 'In Line with Text' to 'Square' or 'Tight'.",
            B: "Right-click the image and select 'Unlock'.",
            C: "Convert the image to a SmartArt graphic.",
            D: "Put the image inside a Table."
        },
        correctAnswer: "A",
        explanation: "Images are inserted 'In Line with Text' by default, meaning they behave like text characters. Changing text wrapping allows the image to float freely on the page.",
        realWorldApplication: "Designing a marketing flyer where a company logo needs to sit perfectly in the top right corner outside of normal margins."
    },
    {
        id: 21,
        topic: "MS Word",
        category: "scenario_based",
        difficulty: "moderate-hard placement",
        question: "Your team is collaborating on a Word document stored on OneDrive. Two people are editing it simultaneously. What feature ensures you don't overwrite each other's work?",
        options: {
            A: "Macro Recording",
            B: "Document Inspector",
            C: "Co-authoring (Real-time collaboration)",
            D: "Mail Merge"
        },
        correctAnswer: "C",
        explanation: "Co-authoring allows multiple users to work on a cloud-hosted Word document simultaneously, showing where each person is typing in real-time.",
        realWorldApplication: "A project manager and a tech lead simultaneously writing different sections of a project proposal before a strict deadline."
    },
    {
        id: 22,
        topic: "MS Word",
        category: "scenario_based",
        difficulty: "moderate placement",
        question: "You want to send a Word document to a client, but you want to ensure they cannot easily alter the text and that it looks exactly the same regardless of what fonts they have installed. What is the standard practice?",
        options: {
            A: "Save it as an RTF (Rich Text Format).",
            B: "Save/Export it as a PDF (Portable Document Format).",
            C: "Password protect the .docx file.",
            D: "Embed the fonts and save it as a template (.dotx)."
        },
        correctAnswer: "B",
        explanation: "PDFs preserve formatting, fonts, and layout exactly as designed and prevent accidental edits by the recipient.",
        realWorldApplication: "Sending a final invoice or an official signed contract to a vendor."
    },

    // --- Problem Solving (5) ---
    {
        id: 23,
        topic: "MS Word",
        category: "problem_solving",
        difficulty: "hard placement",
        question: "You are trying to delete a blank page at the end of your document, but pressing Backspace isn't working. What is the most likely hidden culprit, and how do you find it?",
        options: {
            A: "A virus has corrupted the file; run an antivirus scan.",
            B: "There is an invisible watermark pushing the page down; remove the watermark.",
            C: "There are hidden paragraph marks or a page break; turn on 'Show/Hide ¶' to see and delete them.",
            D: "The printer settings require an even number of pages."
        },
        correctAnswer: "C",
        explanation: "Blank pages are usually caused by hidden empty paragraphs (returns) or manual Page/Section Breaks. Toggling 'Show/Hide ¶' reveals these non-printing characters so they can be deleted.",
        realWorldApplication: "Cleaning up formatting artifacts in a resume so it prints perfectly on one page."
    },
    {
        id: 24,
        topic: "MS Word",
        category: "problem_solving",
        difficulty: "moderate-hard placement",
        question: "You have a two-column layout, but you want the title of the document to span completely across the top of both columns. How is this achieved?",
        options: {
            A: "Type the title in the header area.",
            B: "Format the title text as 'One Column', insert a Continuous Section Break, and format the rest as 'Two Columns'.",
            C: "Use the 'Merge Columns' button on the title paragraph.",
            D: "This is impossible; columns apply to the entire document page."
        },
        correctAnswer: "B",
        explanation: "Section breaks allow different layouts on the same page. A continuous break allows the title to be 1-column, and the text immediately below it to split into 2-columns.",
        realWorldApplication: "Formatting a scientific research paper or a newsletter with a unified headline and a double-column body."
    },
    {
        id: 25,
        topic: "MS Word",
        category: "problem_solving",
        difficulty: "moderate placement",
        question: "Your paragraph has a weird gap between two words that stretches across the whole line, even though there is only one space between them. What is causing this?",
        options: {
            A: "The font is corrupted.",
            B: "The paragraph alignment is set to 'Justified', and the line has very few words, causing Word to stretch the spacing to reach the margins.",
            C: "You accidentally pressed the 'Tab' key.",
            D: "The kerning setting is set to maximum."
        },
        correctAnswer: "B",
        explanation: "Justified alignment forces text to touch both the left and right margins by expanding the spaces between words, which looks awkward on short lines.",
        realWorldApplication: "Troubleshooting awkward typography in a formal block-justified legal document."
    },
    {
        id: 26,
        topic: "MS Word",
        category: "problem_solving",
        difficulty: "hard placement",
        question: "When you type a web URL (like www.google.com) and press space, Word automatically turns it into a clickable blue hyperlink. You want to disable this automatic behavior completely. Where do you go?",
        options: {
            A: "Design -> Page Background -> Link Colors",
            B: "File -> Options -> Proofing -> AutoCorrect Options -> AutoFormat As You Type",
            C: "Insert -> Links -> Disable Hyperlinks",
            D: "Review -> Language -> Unlink URLs"
        },
        correctAnswer: "B",
        explanation: "Word's AutoFormat As You Type settings control automatic behaviors like converting URLs to hyperlinks, creating automatic bulleted lists, and changing straight quotes to smart quotes.",
        realWorldApplication: "Writing code documentation where URLs should remain plain text strings so they can be easily copied into a terminal without triggering browser launches."
    },
    {
        id: 27,
        topic: "MS Word",
        category: "problem_solving",
        difficulty: "moderate-hard placement",
        question: "You have a massive table that spans across three pages. When you look at pages 2 and 3, you cannot tell what the data in each column represents because the column headers are only on page 1. How do you fix this?",
        options: {
            A: "Manually copy and paste the header row at the top of the table on pages 2 and 3.",
            B: "Select the header row, go to Table Layout, and click 'Repeat Header Rows'.",
            C: "Insert a page break inside the table to force headers down.",
            D: "You must convert the table to Excel; Word cannot do this."
        },
        correctAnswer: "B",
        explanation: "'Repeat Header Rows' dynamically repeats the selected top row(s) at the top of every new page the table flows onto, preventing manual formatting nightmares if the table shifts.",
        realWorldApplication: "Presenting a 10-page inventory list where every page needs 'Item ID', 'Description', and 'Quantity' at the top for readability."
    },

    // --- Tricky Exam Questions (3) ---
    {
        id: 28,
        topic: "MS Word",
        category: "tricky_exam_questions",
        difficulty: "hard placement",
        question: "What does the 'Format Painter' do if you double-click the icon instead of single-clicking it?",
        options: {
            A: "It permanently deletes the source formatting.",
            B: "It opens the Advanced Formatting dialog box.",
            C: "It locks the Format Painter on, allowing you to apply the formatting to multiple separate areas until you press Esc.",
            D: "It paints the formatting across the entire document instantly."
        },
        correctAnswer: "C",
        explanation: "A single click applies the format once and turns off. A double click locks the tool, allowing continuous application across non-contiguous text blocks.",
        realWorldApplication: "Applying a specific warning style to five different, scattered paragraphs throughout a safety manual."
    },
    {
        id: 29,
        topic: "MS Word",
        category: "tricky_exam_questions",
        difficulty: "hard placement",
        question: "You want to search a document for any word that begins with 'pre' (like preview, prepare). Which advanced Find feature should you use?",
        options: {
            A: "Use Wildcards and search for 'pre*'",
            B: "Use Sounds Like and search for 'pre'",
            C: "Use Match Case and search for 'PRE'",
            D: "Use Find Whole Words Only and search for 'pre'"
        },
        correctAnswer: "A",
        explanation: "Enabling 'Use wildcards' in Advanced Find allows you to use asterisks (*) to represent any string of characters, so 'pre*' finds any word starting with those letters.",
        realWorldApplication: "Performing complex text extraction or auditing across massive data dumps pasted into Word."
    },
    {
        id: 30,
        topic: "MS Word",
        category: "tricky_exam_questions",
        difficulty: "hard placement",
        question: "What happens if you apply a 'Drop Cap' to a paragraph?",
        options: {
            A: "The entire paragraph becomes capitalized.",
            B: "The paragraph text is dropped to the bottom of the page.",
            C: "The first letter of the paragraph is enlarged and drops down two or more lines of text, commonly seen in novels.",
            D: "A decorative caption is added beneath the paragraph."
        },
        correctAnswer: "C",
        explanation: "A Drop Cap is a large capital letter at the beginning of a text block that has the depth of two or more lines of regular text.",
        realWorldApplication: "Formatting a company newsletter or magazine article to give it a professional, editorial aesthetic."
    }
];
