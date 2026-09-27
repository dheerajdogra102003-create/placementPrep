/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: MICROSOFT POWERPOINT
   Corporate presentations, Slide Master, animations, transitions & shortcuts
   ========================================================================== */

(function () {
  window.POWERPOINT_QUESTIONS = [
    {
      id: 'ppt-001',
      question: 'A corporate trainer needs to add the official company logo and confidentiality disclaimer to the exact same position on all 85 slides of a presentation, ensuring that individual slide editors cannot accidentally select, nudge, or delete them. What is the standard professional method to accomplish this in Microsoft PowerPoint?',
      codeSnippet: '',
      options: [
        'Copy and paste the logo manually onto all 85 slides one by one',
        'Insert the logo and disclaimer onto the top Slide Master in Slide Master View',
        'Group all 85 slides into a single SmartArt diagram',
        'Save the logo as a custom PowerPoint transition effect'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'practical',
      topic: 'Slide Master & Layouts',
      explanation: 'The Slide Master is the top hierarchy slide in the presentation template that stores information about the theme, fonts, background, and object placeholders. Any object (logo, disclaimer, footer date) placed on the top Slide Master automatically appears across all slides in the deck and is locked from accidental selection in Normal slide edit view.',
      wrongOptionExplanations: {
        '0': 'Manual copy-pasting is inefficient, error-prone, inconsistent, and leaves the logo editable/deletable on every slide.',
        '2': 'SmartArt is a diagram visualization tool for process flows and hierarchies, not presentation master templating.',
        '3': 'Transitions are visual motion effects applied between changing slides, not static graphic containers.'
      },
      realWorldApplication: 'Corporate branding guidelines require enterprise presentation templates (.potx) to maintain strict logo placement, color palettes, and header styling embedded directly in Slide Masters.',
      placementTip: 'Whenever asked about applying global changes, logos, or uneditable headers to ALL slides at once = Slide Master!'
    },
    {
      id: 'ppt-002',
      question: 'In Microsoft PowerPoint terminology, what is the precise operational distinction between a "Transition" and an "Animation"?',
      codeSnippet: '',
      options: [
        'Transitions apply motion when moving from one slide to the next; Animations apply visual motion effects to individual objects (text, images, shapes) on a single slide.',
        'Transitions apply only to video clips; Animations apply only to vector shapes.',
        'Animations run automatically; Transitions can only be triggered by mouse clicks.',
        'Transitions and Animations are synonyms and share the exact same configuration panel.'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      type: 'comparison',
      topic: 'Custom Animation Timings',
      explanation: 'A Transition controls how the screen shifts from the current slide to the incoming slide during a presentation (e.g. Fade, Push, Wipe). An Animation controls how an individual object on a specific slide enters the view, emphasis/rotates, or exits (e.g. Fly In, Pulse, Disappear).',
      wrongOptionExplanations: {
        '1': 'Transitions apply to full slide boundaries regardless of slide content; animations apply to any slide element.',
        '2': 'Both transitions and animations can be configured to trigger on mouse click OR automatically after specified duration delays.',
        '3': 'They reside on separate dedicated ribbon tabs ("Transitions" vs "Animations") in the PowerPoint UI.'
      },
      realWorldApplication: 'Effective enterprise pitch decks use subtle transitions (Fade) and timed animations to reveal talking points sequentially, preventing audience cognitive overload.',
      placementTip: 'Slide-to-Slide = Transition. Object-on-Slide = Animation.'
    },
    {
      id: 'ppt-003',
      question: 'During a live client presentation in PowerPoint Slide Show mode, which keyboard shortcut allows the presenter to temporarily blank the screen to a pure Black screen to redirect the audience\'s immediate attention to the speaker?',
      codeSnippet: '',
      options: [
        'Pressing the `B` key (or `.` period)',
        'Pressing `Ctrl + Alt + Del`',
        'Pressing `Shift + F5`',
        'Pressing `Esc`'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      type: 'practical',
      topic: 'Keyboard Shortcuts',
      explanation: 'During an active PowerPoint Slide Show: Pressing the `B` key (or `.` period) turns the screen completely Black. Pressing the `W` key (or `,` comma) turns the screen completely White. Pressing any key returns to the current slide. `Shift+F5` starts presentation from current slide, and `Esc` exits Slide Show.',
      wrongOptionExplanations: {
        '1': '`Ctrl+Alt+Del` opens the Windows security screen/Task Manager.',
        '2': '`Shift+F5` starts the slide show from the current slide.',
        '3': '`Esc` terminates the slide show and returns to the editing window.'
      },
      realWorldApplication: 'Professional presenters use `B` (Black screen) during Q&A interludes to focus executive attention entirely on verbal dialogue rather than background slides.',
      placementTip: 'Key presenter shortcuts: `B` = Black screen, `W` = White screen, `F5` = Start from beginning, `Shift+F5` = Start from current slide.'
    },
    {
      id: 'ppt-004',
      question: 'When configuring an entrance animation in PowerPoint\'s Animation Pane, which Start setting allows three bullet points to appear simultaneously along with a background diagram without requiring an additional mouse click?',
      codeSnippet: '',
      options: [
        'Start On Click',
        'Start With Previous',
        'Start After Previous',
        'Start On Double Click'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Custom Animation Timings',
      explanation: 'The three timing triggers in the Animation Pane are: (1) `On Click`: waits for user click. (2) `With Previous`: executes simultaneously at the exact same moment as the preceding animation effect. (3) `After Previous`: executes sequentially immediately after the preceding animation finishes.',
      wrongOptionExplanations: {
        '0': '`On Click` pauses and requires manual user intervention for each item.',
        '2': '`After Previous` creates a staggered sequential chain, not a simultaneous entrance.',
        '3': '`On Double Click` is not a supported animation trigger in PowerPoint.'
      },
      realWorldApplication: 'Synchronizing multi-part infographics with voiceover audio requires chaining animations using precise "With Previous" triggers and millisecond delays.',
      placementTip: 'Simultaneous animations = `Start With Previous`. Sequential chain without click = `Start After Previous`.'
    },
    {
      id: 'ppt-005',
      question: 'What is the primary operational advantage of using "Presenter View" when connecting a laptop to an external auditorium projector?',
      codeSnippet: '',
      options: [
        'It increases the projector resolution beyond physical hardware limits.',
        'The audience sees only full-screen slides on the projector, while the presenter sees private speaker notes, elapsed timer, and upcoming slide previews on the laptop screen.',
        'It automatically uploads the presentation recording to cloud storage.',
        'It translates presenter voice notes into real-time closed captions on USB drives.'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Presenter View & Controls',
      explanation: 'Presenter View utilizes dual-monitor display extension. The secondary external display (projector) shows strictly the clean, full-screen slide. The primary screen shows speaker notes, a countdown timer, preview of the upcoming next slide, thumbnail navigation, and highlighter/laser pointer tools.',
      wrongOptionExplanations: {
        '0': 'Hardware resolution is determined by the physical projector panel and GPU output capability.',
        '2': 'Presenter View is a local real-time display mode, not cloud video export.',
        '3': 'Closed captioning is an optional subtitle feature, not the primary dual-screen architectural role of Presenter View.'
      },
      realWorldApplication: 'Presenter View is standard protocol in executive briefings and keynote conferences to ensure seamless delivery without turning around to read slides.',
      placementTip: 'Dual displays: Projector = Audience Slide only. Laptop = Presenter View (notes, timer, next slide preview).'
    }
  ];
})();
