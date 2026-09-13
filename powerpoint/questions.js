const questions = [
    // --- Theoretical Conceptual (8) ---
    {
        id: 1,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "easy placement",
        question: "Which of the following views is BEST suited for rearranging the sequence of slides in a presentation?",
        options: {
            A: "Normal View",
            B: "Slide Sorter View",
            C: "Reading View",
            D: "Slide Master View"
        },
        correctAnswer: "B",
        explanation: "Slide Sorter View displays thumbnail versions of all slides, allowing easy drag-and-drop reordering.",
        realWorldApplication: "Used when finalizing the flow of a corporate presentation before a meeting."
    },
    {
        id: 2,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "What is the primary function of the 'Slide Master' in PowerPoint?",
        options: {
            A: "To control the overarching theme, layout, background, and fonts for all slides in the presentation.",
            B: "To lock the presentation with a password to prevent unauthorized editing.",
            C: "To serve as the primary presenter view during a live slideshow.",
            D: "To automatically generate summary slides based on presentation content."
        },
        correctAnswer: "A",
        explanation: "Slide Master controls the default design of your slides. Changes made here reflect across all slides using that layout.",
        realWorldApplication: "Ensuring brand consistency across a company's 100+ slide investor deck."
    },
    {
        id: 3,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "In PowerPoint, what does the '.potx' file extension represent?",
        options: {
            A: "PowerPoint Open XML Slide Show",
            B: "PowerPoint Macro-Enabled Presentation",
            C: "PowerPoint Open XML Template",
            D: "PowerPoint Add-in File"
        },
        correctAnswer: "C",
        explanation: "The '.potx' extension is used for PowerPoint Templates, which provide a starting point for creating new, consistently formatted presentations.",
        realWorldApplication: "Creating a standard corporate template that employees use to create new presentations."
    },
    {
        id: 4,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "Which feature allows you to display a slide during a presentation without it appearing in the default printed handouts?",
        options: {
            A: "Hide Slide",
            B: "Custom Slide Show",
            C: "Invisible Transition",
            D: "Slide Master exclusion"
        },
        correctAnswer: "A",
        explanation: "Hiding a slide keeps it in the file but skips it during the normal slideshow and standard handout printing unless specifically requested.",
        realWorldApplication: "Keeping backup data slides available in case the client asks specific questions, without cluttering the main presentation."
    },
    {
        id: 5,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "moderate-hard placement",
        question: "What is the difference between a 'Transition' and an 'Animation' in PowerPoint?",
        options: {
            A: "Transitions apply to individual objects on a slide; Animations apply to how the slide enters the screen.",
            B: "Transitions apply to how a slide enters the screen; Animations apply to individual objects on the slide.",
            C: "Transitions are used for video files; Animations are used for GIF images.",
            D: "There is no difference; they are interchangeable terms in newer versions of PowerPoint."
        },
        correctAnswer: "B",
        explanation: "Transitions dictate the movement from one slide to the next. Animations dictate the movement of elements (text, images, shapes) within a single slide.",
        realWorldApplication: "Using a smooth 'Fade' transition between slides while using a 'Wipe' animation to reveal bullet points one by one."
    },
    {
        id: 6,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "moderate placement",
        question: "Which of the following is NOT a default animation category in MS PowerPoint?",
        options: {
            A: "Entrance",
            B: "Emphasis",
            C: "Exit",
            D: "Transformation"
        },
        correctAnswer: "D",
        explanation: "The default animation categories are Entrance, Emphasis, Exit, and Motion Paths. Transformation (Morph) is a Slide Transition, not an Animation category.",
        realWorldApplication: "Designing complex infographic animations using entrance and motion paths."
    },
    {
        id: 7,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "easy placement",
        question: "What keyboard shortcut is universally used to start a slideshow from the very first slide?",
        options: {
            A: "F5",
            B: "Shift + F5",
            C: "Ctrl + S",
            D: "Alt + F4"
        },
        correctAnswer: "A",
        explanation: "Pressing F5 starts the presentation from the beginning. Shift + F5 starts it from the current slide.",
        realWorldApplication: "Quickly launching a presentation when stepping up to the podium."
    },
    {
        id: 8,
        topic: "MS PowerPoint",
        category: "theoretical_conceptual",
        difficulty: "moderate-hard placement",
        question: "How does the 'Morph' transition work in PowerPoint?",
        options: {
            A: "It randomly applies different transitions between all slides.",
            B: "It animates smooth movement of common objects from one slide to the next.",
            C: "It converts text into 3D shapes automatically.",
            D: "It changes the slide background color gradually over time."
        },
        correctAnswer: "B",
        explanation: "Morph creates seamless animations by recognizing identical objects on two consecutive slides and smoothly moving/resizing them to their new positions/states.",
        realWorldApplication: "Creating cinematic, engaging presentations without complex timeline animations."
    },

    // --- Technical Application (8) ---
    {
        id: 9,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "You want to embed a custom font in your PowerPoint file so it displays correctly on a computer that doesn't have that font installed. What is the limitation of doing this?",
        options: {
            A: "Embedded fonts only work if the target computer is running Windows 11.",
            B: "You cannot embed fonts; you must save the presentation as a PDF.",
            C: "Only TrueType and OpenType fonts can be embedded, and file size will increase.",
            D: "Embedding fonts automatically converts the presentation to read-only mode."
        },
        correctAnswer: "C",
        explanation: "PowerPoint allows embedding of TrueType and OpenType fonts to maintain design fidelity, but this increases the file size.",
        realWorldApplication: "Sending a brand-compliant pitch deck to a client who might not have your company's custom corporate font."
    },
    {
        id: 10,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "Which tool allows you to copy the formatting (color, font, style) of a shape and instantly apply it to another shape?",
        options: {
            A: "Format Painter",
            B: "Style Copier",
            C: "Design Ideas",
            D: "SmartArt"
        },
        correctAnswer: "A",
        explanation: "The Format Painter (brush icon) copies all formatting from one object and applies it to another. Double-clicking it allows multiple applications.",
        realWorldApplication: "Quickly standardizing the look of multiple disparate text boxes added to a slide during a brainstorming session."
    },
    {
        id: 11,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "moderate-hard placement",
        question: "You are exporting a presentation as a video (MP4). Which elements will NOT be included in the final exported video?",
        options: {
            A: "Slide transitions and animations",
            B: "Embedded audio narrations",
            C: "Live external hyperlinked web pages",
            D: "Laser pointer gestures recorded during timing"
        },
        correctAnswer: "C",
        explanation: "A video file is static media; it cannot contain clickable hyperlinks or dynamically load live external web pages.",
        realWorldApplication: "Converting a training module into a video for YouTube; you must ensure links are written out as text, not clickable buttons."
    },
    {
        id: 12,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "hard placement",
        question: "How can you ensure that an embedded Excel chart in PowerPoint updates automatically when the original Excel file is modified?",
        options: {
            A: "Copy the chart and use 'Paste Special -> Paste Link'.",
            B: "Save the PowerPoint file in the same folder as the Excel file.",
            C: "Use the 'Group' function to bind the chart to the slide.",
            D: "Charts embedded from Excel always update automatically by default."
        },
        correctAnswer: "A",
        explanation: "'Paste Link' establishes a dynamic connection to the source file. Standard pasting embeds a static snapshot or a separate copy of the data.",
        realWorldApplication: "Creating a monthly financial report deck that automatically updates its charts when the finance team updates the master spreadsheet."
    },
    {
        id: 13,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "You need to present a slideshow across two screens (one for the audience, one for your notes). Which feature enables this?",
        options: {
            A: "Screen Mirroring",
            B: "Presenter View",
            C: "Dual Monitor Slide Show",
            D: "Extended Display Mode"
        },
        correctAnswer: "B",
        explanation: "Presenter View displays the current slide to the audience on one monitor, while showing speaker notes, the next slide, and a timer to the presenter on another.",
        realWorldApplication: "Delivering a keynote speech while secretly referencing speaker notes and timing on a laptop screen."
    },
    {
        id: 14,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "moderate-hard placement",
        question: "In the Animation Pane, what does the 'Start With Previous' option do?",
        options: {
            A: "It triggers the animation simultaneously with the animation immediately preceding it.",
            B: "It forces the animation to play on the previous slide.",
            C: "It requires the user to click the 'Previous' button on the clicker.",
            D: "It deletes the current animation and restores the previous one."
        },
        correctAnswer: "A",
        explanation: "'Start With Previous' groups animations to happen at the exact same time, creating complex, synchronized effects.",
        realWorldApplication: "Making a title text fade in exactly while a background shape expands."
    },
    {
        id: 15,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "moderate placement",
        question: "What is the purpose of 'SmartArt' in PowerPoint?",
        options: {
            A: "To automatically correct spelling and grammar errors in visual text.",
            B: "To convert bulleted lists or raw text into visually appealing, structured diagrams (like flowcharts or hierarchies).",
            C: "To insert royalty-free stock images from the internet.",
            D: "To analyze data sets and automatically select the best chart type."
        },
        correctAnswer: "B",
        explanation: "SmartArt is a tool used to visually communicate information, easily converting text into processes, cycles, lists, and hierarchical diagrams.",
        realWorldApplication: "Quickly visualizing a company's organizational chart without manually drawing and aligning individual boxes."
    },
    {
        id: 16,
        topic: "MS PowerPoint",
        category: "technical_application",
        difficulty: "hard placement",
        question: "To trigger an animation only when a specific shape on the slide is clicked, what feature must you use?",
        options: {
            A: "Action Buttons",
            B: "Hyperlinks",
            C: "Animation Triggers",
            D: "Slide Master Hooks"
        },
        correctAnswer: "C",
        explanation: "Animation Triggers allow you to set an animation to run only when a specific object (like a button or picture) on the slide is clicked during the presentation.",
        realWorldApplication: "Creating an interactive quiz slide where clicking an answer reveals a 'Correct' or 'Incorrect' popup."
    },

    // --- Scenario Based (6) ---
    {
        id: 17,
        topic: "MS PowerPoint",
        category: "scenario_based",
        difficulty: "moderate-hard placement",
        question: "You have a 50-slide presentation. You need to present to two different audiences: Audience A needs slides 1-20 and 40-50. Audience B needs slides 1-10 and 21-39. What is the most efficient way to manage this without creating two separate files?",
        options: {
            A: "Use the 'Hide Slide' feature right before each presentation.",
            B: "Create two 'Custom Slide Shows' within the single file.",
            C: "Use Slide Sections and collapse the ones you don't need.",
            D: "Export the slides to PDF and combine them in a PDF editor."
        },
        correctAnswer: "B",
        explanation: "Custom Slide Shows allow you to create distinct, named sequences of slides from the same master presentation file.",
        realWorldApplication: "A sales manager maintaining one master pitch deck but running different customized versions for enterprise vs. small-business clients."
    },
    {
        id: 18,
        topic: "MS PowerPoint",
        category: "scenario_based",
        difficulty: "moderate placement",
        question: "Your company has updated its official logo. You need to replace the old logo with the new one on all 80 slides of your presentation. The logo is located in the top right corner. What is the fastest method?",
        options: {
            A: "Use the 'Find and Replace' tool to swap the image files.",
            B: "Delete the old logo on slide 1, paste the new one, and copy-paste it 79 times.",
            C: "Go to the Slide Master, replace the logo on the master layout, and close master view.",
            D: "Select all slides in the thumbnail pane, right-click, and select 'Update Pictures'."
        },
        correctAnswer: "C",
        explanation: "Elements placed on the Slide Master automatically propagate to all slides that use that layout. Modifying the master updates the entire presentation instantly.",
        realWorldApplication: "Executing a corporate rebranding update across dozens of template decks instantly."
    },
    {
        id: 19,
        topic: "MS PowerPoint",
        category: "scenario_based",
        difficulty: "hard placement",
        question: "During a live presentation, a client asks a question related to a slide you showed 15 slides ago. You are currently on Slide 45. What is the most professional way to jump exactly to Slide 30 without rapidly clicking the 'Back' button 15 times?",
        options: {
            A: "Press the 'Home' key and click forward 30 times.",
            B: "Press 'Esc' to exit the presentation, scroll to the slide, and restart.",
            C: "Type '30' on the keyboard and press 'Enter'.",
            D: "Right-click and select 'Rewind'."
        },
        correctAnswer: "C",
        explanation: "During a slideshow, typing the slide number and pressing Enter instantly jumps to that specific slide without breaking the presentation flow.",
        realWorldApplication: "Seamlessly navigating large decks during Q&A sessions in board meetings."
    },
    {
        id: 20,
        topic: "MS PowerPoint",
        category: "scenario_based",
        difficulty: "moderate placement",
        question: "You are presenting at a conference without an internet connection. Your slide contains a YouTube video link. What will happen when you click it during the slideshow?",
        options: {
            A: "PowerPoint will play a cached low-resolution version of the video.",
            B: "The link will fail to load since it requires a live internet connection to stream.",
            C: "PowerPoint will automatically skip the slide.",
            D: "The presentation will crash and close."
        },
        correctAnswer: "B",
        explanation: "Linked web videos (like YouTube) require active internet to stream. To play videos offline, the video file must be physically downloaded and embedded into the slide.",
        realWorldApplication: "Preparing for off-site client presentations where Wi-Fi access is restricted or unreliable."
    },
    {
        id: 21,
        topic: "MS PowerPoint",
        category: "scenario_based",
        difficulty: "moderate-hard placement",
        question: "Your PowerPoint file is 150MB due to multiple high-resolution photographs, making it too large to email. How can you drastically reduce the file size within PowerPoint?",
        options: {
            A: "Save the presentation as a .ppsx file instead of .pptx.",
            B: "Select a picture, go to Picture Format, and use the 'Compress Pictures' tool to apply lower resolution to all images.",
            C: "Change the slide size from Widescreen (16:9) to Standard (4:3).",
            D: "Use the 'Remove Background' tool on every image."
        },
        correctAnswer: "B",
        explanation: "The 'Compress Pictures' feature allows you to reduce the resolution (e.g., to 150ppi for web) and delete cropped areas of all pictures in the file simultaneously, drastically cutting file size.",
        realWorldApplication: "Optimizing a visually heavy marketing deck so it can bypass corporate email attachment limits (usually 20-25MB)."
    },
    {
        id: 22,
        topic: "MS PowerPoint",
        category: "scenario_based",
        difficulty: "moderate placement",
        question: "You want to run a presentation loop continuously at a kiosk on a trade show floor unattended. What setting must you configure?",
        options: {
            A: "Set Up Slide Show -> Browsed at a kiosk (full screen)",
            B: "Transitions -> Advance Slide -> On Mouse Click",
            C: "Animations -> Loop until next slide",
            D: "Slide Show -> Record Slide Show"
        },
        correctAnswer: "A",
        explanation: "'Browsed at a kiosk' loops the presentation continuously and disables keyboard/mouse clicks to advance slides, preventing users from altering the presentation.",
        realWorldApplication: "Setting up a continuous promotional video loop on a monitor at a corporate booth."
    },

    // --- Problem Solving (5) ---
    {
        id: 23,
        topic: "MS PowerPoint",
        category: "problem_solving",
        difficulty: "hard placement",
        question: "You have 5 rectangles stacked on top of each other. The red rectangle is at the very back (bottom layer). The blue rectangle is at the very front. You want the red rectangle to be immediately behind the blue rectangle. Which command sequence on the red rectangle achieves this directly?",
        options: {
            A: "Bring to Front",
            B: "Bring Forward (click once)",
            C: "Bring to Front, then Send Backward (click once)",
            D: "Send to Back"
        },
        correctAnswer: "C",
        explanation: "Bringing it to the Front places it in front of the blue rectangle. Sending it backward once drops it exactly one layer down, immediately behind the blue rectangle.",
        realWorldApplication: "Managing complex overlapping vector graphics or UI mockups designed directly in PowerPoint."
    },
    {
        id: 24,
        topic: "MS PowerPoint",
        category: "problem_solving",
        difficulty: "moderate-hard placement",
        question: "A user complains that their audio file only plays while Slide 1 is active and stops when transitioning to Slide 2. How do you make the background music play across the entire presentation?",
        options: {
            A: "Copy and paste the audio file onto every slide.",
            B: "Select the audio icon, go to Playback, and check 'Play across slides'.",
            C: "Export the presentation as a video and add the audio track in a video editor.",
            D: "Increase the volume of the audio file."
        },
        correctAnswer: "B",
        explanation: "The 'Play across slides' option (or selecting 'Play in Background') tells PowerPoint to detach the audio from the slide transition trigger and loop it globally.",
        realWorldApplication: "Adding corporate background music to an automated photo slideshow."
    },
    {
        id: 25,
        topic: "MS PowerPoint",
        category: "problem_solving",
        difficulty: "moderate placement",
        question: "You drew a perfect circle, but when you resize it by dragging a corner handle, it stretches into an oval. How can you resize it while maintaining its perfect circular proportions?",
        options: {
            A: "Hold down the 'Ctrl' key while dragging the corner handle.",
            B: "Hold down the 'Alt' key while dragging the corner handle.",
            C: "Hold down the 'Shift' key while dragging the corner handle.",
            D: "Right-click the shape and select 'Lock Aspect Ratio' before dragging."
        },
        correctAnswer: "C",
        explanation: "Holding the Shift key while resizing (or drawing) shapes constrains their proportions (aspect ratio), keeping circles round and squares square.",
        realWorldApplication: "Resizing profile pictures or icon assets without distorting them."
    },
    {
        id: 26,
        topic: "MS PowerPoint",
        category: "problem_solving",
        difficulty: "hard placement",
        question: "You are trying to align three text boxes perfectly to the left edge of the slide, but dragging them manually is imprecise. What is the most accurate approach?",
        options: {
            A: "Turn on gridlines and visually match them to a line.",
            B: "Select all three, go to Align, choose 'Align Left'.",
            C: "Select all three, go to Align, ensure 'Align to Slide' is checked, then choose 'Align Left'.",
            D: "Use the 'Group' function, then manually drag the entire group."
        },
        correctAnswer: "C",
        explanation: "Standard 'Align Left' aligns the objects to the leftmost object in the selection. To align them to the edge of the slide itself, 'Align to Slide' must be checked first.",
        realWorldApplication: "Creating pixel-perfect layouts for professional corporate templates where margins must be strictly respected."
    },
    {
        id: 27,
        topic: "MS PowerPoint",
        category: "problem_solving",
        difficulty: "moderate-hard placement",
        question: "You have a bulleted list with 4 points. You want each point to appear one-by-one upon a mouse click. You apply a 'Fade' animation to the text box, but all 4 points appear at once. What went wrong?",
        options: {
            A: "You need to apply a separate animation to each individual line of text.",
            B: "In the Effect Options for the animation, the sequence is set to 'As One Object' instead of 'By Paragraph'.",
            C: "The text box is grouped with a shape.",
            D: "Fade animations do not support sequential loading; you must use 'Appear'."
        },
        correctAnswer: "B",
        explanation: "By default, text box animations apply to the whole object. Changing Effect Options to 'By Paragraph' animates each bullet point sequentially on click.",
        realWorldApplication: "Controlling the flow of information during a pitch so the audience doesn't read ahead."
    },

    // --- Tricky Exam Questions (3) ---
    {
        id: 28,
        topic: "MS PowerPoint",
        category: "tricky_exam_questions",
        difficulty: "hard placement",
        question: "Which of the following describes the behavior of saving a file as '.ppsx' instead of '.pptx'?",
        options: {
            A: "It compresses the file to a smaller size for email.",
            B: "It forces the file to open directly in Slide Show view, bypassing the editing interface.",
            C: "It saves the file in an older format compatible with PowerPoint 2003.",
            D: "It creates a read-only PDF version of the presentation."
        },
        correctAnswer: "B",
        explanation: "A .ppsx file is a PowerPoint Show. Double-clicking it automatically launches the presentation in full screen, which is great for end-users who just need to view it.",
        realWorldApplication: "Sending a final interactive deck to a client so they immediately see the polished presentation, not the messy editing view."
    },
    {
        id: 29,
        topic: "MS PowerPoint",
        category: "tricky_exam_questions",
        difficulty: "hard placement",
        question: "What does pressing the 'B' key do during an active PowerPoint Slide Show?",
        options: {
            A: "Jumps back to the previous slide.",
            B: "Bolds the text currently highlighted on screen.",
            C: "Turns the entire screen black to draw audience focus back to the speaker.",
            D: "Opens the 'Bookmarks' menu."
        },
        correctAnswer: "C",
        explanation: "Pressing 'B' blanks the screen to black (and 'W' blanks it to white). This is a professional technique to instantly remove visual distractions.",
        realWorldApplication: "When a speaker goes on an important tangent and wants the audience to look at them, not the slide."
    },
    {
        id: 30,
        topic: "MS PowerPoint",
        category: "tricky_exam_questions",
        difficulty: "hard placement",
        question: "If you apply an animation to an object on a Slide Master layout, how does it affect the slides in your presentation?",
        options: {
            A: "The animation will only play once at the very beginning of the presentation.",
            B: "The animation will play on every single slide that uses that specific layout.",
            C: "Slide Masters cannot contain animations, only static design elements.",
            D: "The animation will override any custom animations you add to individual slides later."
        },
        correctAnswer: "B",
        explanation: "Animations placed on the Slide Master are applied universally to all slides utilizing that layout. They play underneath any custom animations added at the slide level.",
        realWorldApplication: "Creating a subtle, consistent animated corporate logo that fades in on the corner of every content slide."
    }
];
