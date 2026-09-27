/**
 * PLACEMENTPREP - UNIFIED MODULE LANDING PAGE SYSTEM
 * Unified, Data-Driven UI/UX Engine for All Learning Modules
 * 
 * Provides consistent layout, navigation, topic selection, activity cards,
 * theme management, and event routing across all placement modules.
 */

(function (window, document) {
    'use strict';

    // =========================================================================
    // 1. DATA MODEL REGISTRY (Data-Driven Module Configs)
    // =========================================================================
    const MODULE_REGISTRY = {
        programming_fundamentals: {
            moduleId: 'programming_fundamentals',
            moduleName: 'Programming Fundamentals',
            accent: '#7C3AED',
            accentName: 'purple',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
            shortDescription: 'Variables, Conditionals & Loops across C, C++, Java, Python & Pseudocode',
            heroDescription: 'The complete placement practice suite combining <strong>Variables & Data Types</strong>, <strong>Conditional Statements</strong>, and <strong>Loops & Iteration</strong> across C, C++, Java, Python, and Pseudocode. Built for MNC screening tests (TCS, Infosys, Wipro, Cognizant, Accenture & Capgemini).',
            topics: [
                { id: 'all', name: 'All Tracks (150)' },
                { id: 'Variables & Data Types', name: '📦 Variables & Types (50)' },
                { id: 'Conditional Statements', name: '🔀 Conditionals (50)' },
                { id: 'Loops & Iteration', name: '🔁 Loops & Iteration (50)' }
            ],
            heroBadges: ['Variables & Types', 'Conditionals', 'Loops & Iteration'],
            questionCount: 150,
            trackCount: 3,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            languages: '5 Programming Languages',
            notesRoute: '../notes/index.html',
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Learn at your pace with immediate answer checking, code syntax highlighting, detailed reasoning, why other options are wrong, and exam traps.',
                perks: [
                    'Instant correct/incorrect verification',
                    'Full code line tracing & pro-tips',
                    'Filter by Track, Language & Difficulty'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Test Simulation',
                timeLimit: '30 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Experience real placement screening conditions. 30 randomized questions across all tracks, a 30-minute timer, question palette, and detailed diagnostic breakdown.',
                perks: [
                    '30-minute countdown with timer alerts',
                    'Question navigation & mark for review',
                    'Track-by-track diagnostic score report'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid recall drills for quick syntax rules, scope boundaries, loop termination pitfalls, and operator precedence tricks right before interviews.',
                perks: [
                    'Smooth 3D flip card animation',
                    'High-speed revision without distractions',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        networking: {
            moduleId: 'networking',
            moduleName: 'Networking',
            accent: '#0EA5E9',
            accentName: 'cyan',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8"/><path d="M12 12v4"/></svg>`,
            shortDescription: 'OSI 7-Layer, TCP/IP, Protocols, Routing & Subnetting',
            heroDescription: 'Master OSI 7-layer architecture, TCP/IP protocols, 3-way handshakes, routing & switching devices, and <strong>18 realistic enterprise scenarios</strong> reported in <strong>2026 technical assessments</strong> for <strong>TCS NQT, Accenture, Capgemini, Cognizant, Infosys, Wipro, LTIMindtree & Deloitte</strong>.',
            topics: [
                { id: 'all', name: 'All Topics (60)' },
                { id: 'OSI Model', name: '🌐 OSI 7-Layers' },
                { id: 'TCP/IP & Transport', name: '⚡ TCP/IP & Handshake' },
                { id: 'IP Addressing', name: '🔢 IP & Subnetting' },
                { id: 'Application Protocols', name: '🛡️ Protocols (HTTP/DNS)' }
            ],
            heroBadges: ['OSI 7-Layers', 'TCP/IP Architecture', 'Subnetting & Routing', 'Enterprise Scenarios'],
            questionCount: 60,
            trackCount: 6,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            notesRoute: '../notes/networking.html',
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced learning with immediate answer feedback, in-depth architectural reasoning, distractor analysis ("Why Others Failed"), and placement interview tips.',
                perks: [
                    'Instant correct/incorrect verification',
                    'Detailed breakdown of every option',
                    'Filter by Scenarios, Tricky, or Difficulty'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: '2026 MNC Exam',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute simulation with 60 questions, randomized options, real-time question palette, auto-submit on timeout, and detailed diagnostics.',
                perks: [
                    '45:00 countdown timer with auto-submit',
                    'Question & option randomization',
                    'Diagnostic scorecard & performance metrics'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid recall drills for OSI layer port numbers, header fields, TCP flags, subnet masks, and protocol routing differences before interviews.',
                perks: [
                    'Smooth 3D flip card animation',
                    'Fast protocol & port recall',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        cloud_computing: {
            moduleId: 'cloud_computing',
            moduleName: 'Cloud Computing',
            accent: '#6366F1',
            accentName: 'indigo',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
            shortDescription: 'AWS, Azure, GCP, IaaS/PaaS/SaaS, Virtualization & IAM',
            heroDescription: 'Master essential cloud architecture concepts, IaaS/PaaS/SaaS, Virtualization, Cloud Storage, IAM, and <strong>18 realistic company placement scenarios</strong> designed for <strong>Accenture, TCS, Capgemini, Cognizant, Infosys & Wipro</strong> technical rounds.',
            topics: [
                { id: 'all', name: 'All Topics (60)' },
                { id: 'Cloud Architecture', name: '☁️ Cloud Architecture' },
                { id: 'Cloud Infrastructure', name: '🏗️ IaaS / PaaS / SaaS' },
                { id: 'Virtualization & Containers', name: '📦 Virtualization' },
                { id: 'Cloud Security & IAM', name: '🔐 IAM & Security' }
            ],
            heroBadges: ['AWS & Azure Core', 'IaaS vs PaaS vs SaaS', 'Virtualization & Containers', 'Cloud IAM'],
            questionCount: 60,
            trackCount: 5,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced learning with instant answer feedback, in-depth architectural explanations, and interview tips. Filter by scenario or difficulty.',
                perks: [
                    'Instant correct/wrong verification',
                    'Detailed "Why Correct" & "Why Others Failed"',
                    'Filter scenarios or regular questions'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Simulation',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute exam simulation with 60 questions, randomized options, one attempt per question, and full analytics upon submission.',
                perks: [
                    '45:00 live countdown with auto-submit',
                    'Question & option randomization',
                    'Comprehensive diagnostic report & review'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Fast revision cards for cloud deployment models, hypervisor types, autoscaling triggers, and SLA availability calculations.',
                perks: [
                    'Smooth 3D flip card animation',
                    'Rapid deployment model review',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        github: {
            moduleId: 'github',
            moduleName: 'Git & GitHub',
            accent: '#F59E0B',
            accentName: 'orange',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
            shortDescription: 'Version control, branching, merge vs rebase, reflog & conflicts',
            heroDescription: 'Master Git Architecture, Three Trees, CLI Commands, Branching, Merges & Conflict Resolution, Remote Collaboration, Reset vs Revert, and <strong>25 realistic enterprise scenarios</strong> modeled for technical assessments at <strong>Accenture, TCS, Capgemini, Infosys, Wipro, Cognizant, HCLTech, Deloitte, IBM & LTIMindtree</strong>.',
            topics: [
                { id: 'all', name: 'All Topics (100)' },
                { id: 'Git fundamentals', name: '🌿 Git Architecture' },
                { id: 'branches_and_branch_switching', name: '🔀 Branching & Checkout' },
                { id: 'git_add_commit_status_diff', name: '📝 Commit, Diff & Status' },
                { id: 'clone_fork_and_pull_request', name: '🌐 Remotes & PRs' }
            ],
            heroBadges: ['Merge vs Rebase', 'Three-Tree Architecture', 'Reflog & Reset', 'Workplace Scenarios'],
            questionCount: 100,
            trackCount: 5,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced learning with immediate answer verification, deep-dive architectural reasoning, comprehensive distractor analysis, and high-yield MNC placement takeaways.',
                perks: [
                    'Instant correct/wrong verification',
                    'Detailed "Why Correct" & "Placement Traps"',
                    'Filter by Domain, Question Type, or Difficulty'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: '2026 MNC Exam',
                timeLimit: '60 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 60-minute exam simulation with 100 randomized questions, real-time question palette, auto-submit on timeout, and diagnostic score breakdown by Git domain.',
                perks: [
                    '60:00 countdown timer with auto-submit',
                    'Randomized order & palette tracking',
                    'Detailed domain diagnostics & readiness scorecard'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid recall drills for CLI command flags, cherry-pick syntax, detached HEAD recovery, and merge conflict resolution commands.',
                perks: [
                    'Smooth 3D flip card animation',
                    'High-speed command syntax review',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        cyber_security: {
            moduleId: 'cyber_security',
            moduleName: 'Cyber Security',
            accent: '#E60023',
            accentName: 'red',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
            shortDescription: 'Cryptography, Network Attacks, Firewalls, XSS & SQLi Defense',
            heroDescription: 'Master Network Security, Cryptography, Cyber Attacks, Firewalls, and <strong>35 realistic enterprise scenarios</strong> modeled for technical assessments at <strong>Accenture, TCS, Capgemini, Infosys, Wipro, Cognizant, HCLTech, Deloitte, IBM & LTIMindtree</strong>.',
            topics: [
                { id: 'all', name: 'All Topics (100)' },
                { id: 'Network Security', name: '🛡️ Network Security' },
                { id: 'Cryptography', name: '🔑 Cryptography & Ciphers' },
                { id: 'Cyber Attacks', name: '⚠️ Attacks (XSS/SQLi)' },
                { id: 'Firewalls & Security Devices', name: '🧱 Firewalls & IDS/IPS' }
            ],
            heroBadges: ['Symmetric vs Asymmetric', 'SQL Injection & XSS', 'Firewalls & Packet Filtering', '35 Enterprise Scenarios'],
            questionCount: 100,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            notesRoute: '../notes/cybersecurity.html',
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced learning with immediate answer feedback, deep-dive architectural reasoning, comprehensive distractor analysis (Options A, B, C, D), and practical real-world applications.',
                perks: [
                    'Instant correct/wrong verification',
                    'Detailed "Why Correct" & "Why Other Options Failed"',
                    'Filter by Topic, Question Type, or Difficulty'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: '2026 MNC Exam',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute timed simulation with 100 questions, randomized order, auto-submission upon timeout, and comprehensive performance analytics.',
                perks: [
                    '45:00 countdown timer with auto-submit',
                    'Randomized question order & palette tracking',
                    'Domain-wise readiness scorecard'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'High-speed retention cards for asymmetric encryption algorithms, hashing functions (SHA/MD5), port numbers, and authentication protocols.',
                perks: [
                    'Smooth 3D flip card animation',
                    'High-speed cipher & port revision',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        pseudocode: {
            moduleId: 'pseudocode',
            moduleName: 'Pseudocode & Logic',
            accent: '#F59E0B',
            accentName: 'amber',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
            shortDescription: 'Loop traps, recursion call stacks, operator precedence & bitwise logic',
            heroDescription: 'Comprehensive <strong>130-Question Assessment Bank</strong> designed for <strong>2026 Campus Placements</strong>. Master code tracing, loop unwinding, operator traps, recursion trees, bitwise manipulation, and array logic asked in top tech assessments.',
            topics: [
                { id: 'all', name: 'All Topics (130)' },
                { id: 'Programming Fundamentals', name: '⚙️ Core Logic' },
                { id: 'Conditional Statements', name: '🔀 Branching Traps' },
                { id: 'Loops', name: '🔁 Loop Unwinding' },
                { id: 'Recursion', name: '🌳 Recursion Trees' }
            ],
            heroBadges: ['Accenture Pattern', 'Capgemini Exceller', 'Bitwise XOR Traps', 'Recursion Stacks'],
            questionCount: 130,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
                desc: 'Instant step-by-step logic tracing, variable tracking tables, placement traps, and distractor breakdowns on every question.',
                perks: [
                    'Instant feedback with complete code trace',
                    'Filter by Topic, Style & Difficulty',
                    'Bookmark tricky questions for quick revision'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: '60 Mins',
                timeLimit: '60 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Real exam countdown simulation with 30-60 randomized questions, time management tracking, and in-depth diagnostic scorecard.',
                perks: [
                    '60:00 timed exam environment',
                    'Accenture & Capgemini pattern simulation',
                    'Post-exam answer review & error analysis'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid revision for operator precedence tables, bitwise manipulation tricks, and loop termination rules.',
                perks: [
                    'Smooth 3D flip card animation',
                    'Fast formula & syntax recall',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        dbms: {
            moduleId: 'dbms',
            moduleName: 'DBMS',
            accent: '#3B82F6',
            accentName: 'blue',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
            shortDescription: 'SQL, Normalization, Transactions, Indexing & Concurrency',
            heroDescription: 'Master SQL queries, joins, ACID properties, indexing algorithms, B+ Trees, and enterprise database scenarios tested in campus interviews.',
            topics: [
                { id: 'all', name: 'All Topics (150)' },
                { id: 'SQL', name: '💾 SQL Queries & Joins' },
                { id: 'Normalization', name: '📐 Normalization (1NF-BCNF)' },
                { id: 'Transactions', name: '⚡ Transactions & ACID' },
                { id: 'Indexing', name: '🗂️ Indexing & B+ Trees' }
            ],
            heroBadges: ['SQL Joins & Group By', 'Normalization & Normal Forms', 'ACID Transactions', 'Indexing & B+ Trees'],
            questionCount: 150,
            trackCount: 5,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Practice SQL queries, query execution plans, schema normalization, and isolation levels with instant verification.',
                perks: [
                    'Instant correct/incorrect verification',
                    'Detailed query logic & trap analysis',
                    'Filter by SQL, Schema & Difficulty'
                ],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Screening',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute timed exam with 30-50 high-yield questions covering joins, subqueries, and concurrency control.',
                perks: [
                    '45:00 countdown timer with auto-submit',
                    'Full question palette & navigation',
                    'Topic-wise score report & analytics'
                ],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Quick revision cards for functional dependencies, normal form definitions, and lock-based protocols.',
                perks: [
                    'Smooth 3D flip card animation',
                    'High-speed formula & syntax review',
                    'Supports Spacebar / arrow navigation'
                ],
                cta: 'Open Flashcards'
            }
        },

        web_development: {
            moduleId: 'web_development',
            moduleName: 'Web Development',
            accent: '#D53A8E',
            accentName: 'pink',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
            shortDescription: 'HTML5, CSS3, Responsive Design, DOM Manipulation & Web APIs',
            heroDescription: 'Placement-focused practice covering <strong>HTML5 Semantics</strong>, <strong>Modern CSS3 Flexbox & Grid</strong>, <strong>DOM Tree APIs</strong>, and <strong>Web Performance</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (120)' },
                { id: 'HTML5', name: '🌐 HTML5 Semantics' },
                { id: 'CSS3', name: '🎨 CSS3 Flexbox & Grid' },
                { id: 'DOM', name: '⚡ DOM & Web APIs' },
                { id: 'Responsive', name: '📱 Responsive Layouts' }
            ],
            heroBadges: ['Semantic HTML', 'CSS Grid & Flexbox', 'DOM Traversal', 'Web Performance'],
            questionCount: 120,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced learning with immediate feedback, CSS box-model breakdowns, and interview trick questions.',
                perks: ['Instant correct/wrong feedback', 'CSS selector precedence breakdown', 'Filter by topic & difficulty'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Screening',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute exam simulation with 45 questions, palette navigation, and frontend readiness scorecard.',
                perks: ['45:00 countdown with auto-submit', 'Randomized question set', 'Frontend topic scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid revision for HTTP status codes, CSS specificity calculations, and event bubbling mechanics.',
                perks: ['Smooth 3D flip card animation', 'CSS property & status code review', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        },

        javascript: {
            moduleId: 'javascript',
            moduleName: 'JavaScript',
            accent: '#F59E0B',
            accentName: 'amber',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg>`,
            shortDescription: 'Closures, Event Loop, Promises, Prototypes, Scope & ES6+',
            heroDescription: 'Placement-focused practice covering <strong>Closures & Lexical Scope</strong>, <strong>Asynchronous Event Loop</strong>, <strong>Prototypes & Inheritance</strong>, and <strong>Modern ES6+ Features</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (140)' },
                { id: 'Closures', name: '🔒 Closures & Scope' },
                { id: 'Async', name: '⏱️ Event Loop & Promises' },
                { id: 'Prototypes', name: '🧬 Prototypes & this' },
                { id: 'ES6', name: '✨ Modern ES6+' }
            ],
            heroBadges: ['Event Loop & Microtasks', 'Closures & Scope Chain', 'this Binding & Call/Apply', 'Promise Chaining'],
            questionCount: 140,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Trace console.log outputs, hoisting anomalies, and asynchronous execution order with step-by-step reasoning.',
                perks: ['Step-by-step console output tracing', 'Deep-dive on microtasks & macrotasks', 'Filter by core concepts'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Screening',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute test covering 50 tricky JavaScript interview output-prediction and concept questions.',
                perks: ['45:00 countdown timer with auto-submit', 'Randomized output-tracing questions', 'Readiness score analysis'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'High-speed drills for type coercion rules, Array higher-order methods, and ES6 syntax shortcuts.',
                perks: ['Smooth 3D flip card animation', 'Type coercion & falsy values review', 'Supports Spacebar / arrows'],
                cta: 'Open Flashcards'
            }
        },

        operating_systems: {
            moduleId: 'operating_systems',
            moduleName: 'Operating Systems',
            accent: '#10B981',
            accentName: 'green',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
            shortDescription: 'CPU Scheduling, Memory Management, Virtual Memory, Deadlocks & File Systems',
            heroDescription: 'Placement-focused practice covering <strong>CPU Scheduling Algorithms</strong>, <strong>Paging & Segmentation</strong>, <strong>Banker Algorithm & Deadlock Avoidance</strong>, and <strong>Process Synchronization</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (130)' },
                { id: 'Scheduling', name: '⚡ CPU Scheduling' },
                { id: 'Memory', name: '🧠 Paging & Virtual Memory' },
                { id: 'Deadlocks', name: '🔒 Deadlocks & Semaphores' },
                { id: 'FileSystems', name: '📁 File Systems & I/O' }
            ],
            heroBadges: ['Round Robin & SRTF', 'Paging & TLB Hit Ratios', 'Banker Algorithm', 'Semaphores & Mutex'],
            questionCount: 130,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Step-by-step Gantt charts, page replacement FIFO/LRU simulations, and deadlock prevention checks with full explanations.',
                perks: ['Gantt chart calculation tracing', 'Page fault count verification', 'Filter by scheduling & memory'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Screening',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute timed test with 40 questions covering numerical turnaround time and memory allocation problems.',
                perks: ['45:00 countdown timer with auto-submit', 'Numerical and conceptual balance', 'Domain diagnostics report'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Fast revision cards for 4 Coffman deadlock conditions, page replacement rules, and disk scheduling algorithms.',
                perks: ['Smooth 3D flip card animation', 'Coffman conditions & definitions', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        },

        computer_fundamentals: {
            moduleId: 'computer_fundamentals',
            moduleName: 'Computer Fundamentals',
            accent: '#475569',
            accentName: 'slate',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
            shortDescription: 'Computer Architecture, Number Systems, Cache Hierarchy & Logic Gates',
            heroDescription: 'Placement-focused practice covering <strong>Von Neumann Architecture</strong>, <strong>Binary & Two’s Complement</strong>, <strong>L1/L2/L3 Cache Memory</strong>, and <strong>Boolean Logic</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (100)' },
                { id: 'Architecture', name: '🖥️ Architecture & CPU' },
                { id: 'NumberSystems', name: '🔢 Number Systems & 2’s Comp' },
                { id: 'MemoryHierarchy', name: '⚡ Cache & RAM' },
                { id: 'LogicGates', name: '🔲 Logic Gates & Boolean' }
            ],
            heroBadges: ['Cache Mapping', 'Two’s Complement', 'Von Neumann vs Harvard', 'Bus Architecture'],
            questionCount: 100,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced questions on bitwise shifts, hexadecimal representations, and memory latency calculations.',
                perks: ['Instant calculation breakdowns', 'Boolean algebra simplification steps', 'Filter by topic'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Screening',
                timeLimit: '30 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Fast-paced 30-minute exam simulating IT services fundamental aptitude and hardware architecture rounds.',
                perks: ['30:00 live countdown timer', '30 questions randomized', 'Performance analytics scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Quick recall cards for power of 2 values, logic gate truth tables, and bus bandwidth formulas.',
                perks: ['Smooth 3D flip card animation', 'Truth tables & powers of 2', 'Keyboard friendly'],
                cta: 'Open Flashcards'
            }
        },

        aptitude: {
            moduleId: 'aptitude',
            moduleName: 'Aptitude',
            accent: '#0D9488',
            accentName: 'teal',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>`,
            shortDescription: 'Quantitative Aptitude, Logical Reasoning, Permutations & Data Interpretation',
            heroDescription: 'Placement-focused practice covering <strong>Time & Work</strong>, <strong>Speed & Distance</strong>, <strong>Probability & Combinatorics</strong>, and <strong>Syllogisms & Puzzles</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (160)' },
                { id: 'Arithmetic', name: '📊 Time, Speed & Work' },
                { id: 'Algebra', name: '📐 Percentages & Profit' },
                { id: 'Reasoning', name: '🧩 Logical & Syllogisms' },
                { id: 'DataInterp', name: '📈 Data Interpretation' }
            ],
            heroBadges: ['TCS NQT Pattern', 'Infosys Reasoning', 'Shortcuts & Tricks', 'Speed Math Formulas'],
            questionCount: 160,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Step-by-step mathematical derivations with speed-trick shortcuts and time-saving mental math tips.',
                perks: ['Shortcut formulas & trick solutions', 'Step-by-step working out', 'Filter by quantitative & logical'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'TCS / Infy Pattern',
                timeLimit: '60 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 60-minute full placement aptitude simulation with sectional timing and negative marking calculation.',
                perks: ['60:00 countdown timer with section tracking', 'High-frequency MNC aptitude questions', 'Accuracy & speed analysis'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Speed formula recall for geometric progressions, compound interest formulas, and calendar calculations.',
                perks: ['Smooth 3D flip card animation', 'Instant formula revision cards', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        },

        interview_preparation: {
            moduleId: 'interview_preparation',
            moduleName: 'Interview Preparation',
            accent: '#6366F1',
            accentName: 'indigo',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
            shortDescription: 'Technical Interview Questions, System Design Basics, HR Rounds & STAR Method',
            heroDescription: 'Placement-focused practice covering <strong>Core CS Interview Questions</strong>, <strong>STAR Method for HR Rounds</strong>, <strong>System Design Fundamentals</strong>, and <strong>Behavioral Scenarios</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (120)' },
                { id: 'Technical', name: '💻 Technical Deep-Dives' },
                { id: 'SystemDesign', name: '📐 System Design Basics' },
                { id: 'HR', name: '🤝 HR & STAR Framework' },
                { id: 'Puzzles', name: '🧩 Interview Puzzles' }
            ],
            heroBadges: ['STAR Method Framework', 'System Scalability Basics', 'Core CS Red Flags', 'Salary & Offer Etiquette'],
            questionCount: 120,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Detailed response frameworks, interviewer green flags vs red flags, and bulletproof project explanations.',
                perks: ['Interviewer rubric and scoring criteria', 'Model answers using STAR technique', 'Filter by round & company'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'Mock Interview',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Simulated 45-minute technical & behavioral round with timed situational questions and dilemma evaluations.',
                perks: ['45:00 countdown timer with scenario prompts', 'Behavioral situational analysis', 'Interview readiness scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Quick revision cards for behavioral answer templates, "Tell me about yourself" hooks, and project highlights.',
                perks: ['Smooth 3D flip card animation', 'STAR answer formula prompts', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        },

        ai_ml: {
            moduleId: 'ai_ml',
            moduleName: 'AI & Machine Learning',
            accent: '#06B6D4',
            accentName: 'cyan',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.31 2.01 6.16 4.9 7.37L9 22h6l.1-4.63C17.99 16.16 20 13.31 20 10a8 8 0 0 0-8-8z"></path></svg>`,
            shortDescription: 'Supervised Learning, Loss Functions, Gradient Descent, Neural Nets & Evaluation Metrics',
            heroDescription: 'Placement-focused practice covering <strong>Linear & Logistic Regression</strong>, <strong>Decision Trees & Random Forests</strong>, <strong>Neural Network Architectures</strong>, and <strong>Model Evaluation Metrics</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (100)' },
                { id: 'Supervised', name: '📊 Supervised Algorithms' },
                { id: 'NeuralNets', name: '🧠 Neural Networks & Backprop' },
                { id: 'Evaluation', name: '🎯 Metrics (Precision/Recall/F1)' },
                { id: 'Unsupervised', name: '🔍 Clustering & PCA' }
            ],
            heroBadges: ['Bias vs Variance', 'Confusion Matrix & ROC', 'Gradient Descent Optimization', 'Overfitting & Regularization'],
            questionCount: 100,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced questions on hyperparameter tuning, loss function tradeoffs, and model performance.',
                perks: ['Mathematical derivation breakdowns', 'Visual intuition on decision boundaries', 'Filter by algorithm type'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'MNC Screening',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute exam with 40 questions covering ML theory, code snippets, and metric calculations.',
                perks: ['45:00 live countdown with auto-submit', 'Scenario and numerical problems', 'Domain diagnostic scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid revision cards for activation functions (ReLU, Sigmoid, Softmax), optimizer properties, and metric formulas.',
                perks: ['Smooth 3D flip card animation', 'Activation function comparison', 'Keyboard friendly'],
                cta: 'Open Flashcards'
            }
        },

        linux_commands: {
            moduleId: 'linux_commands',
            moduleName: 'Linux Commands',
            accent: '#D97706',
            accentName: 'amber',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-6-6-6"></path><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
            shortDescription: 'File permissions, process management, text processing (grep/sed/awk) & shell basics',
            heroDescription: 'Placement-focused practice covering <strong>File Hierarchy & Permissions (chmod/chown)</strong>, <strong>Process Signals (kill/ps/top)</strong>, <strong>Piping & Text Filters (grep/awk/sed)</strong>, and <strong>Networking CLI Tools</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (30)' },
                { id: 'Permissions', name: '🔐 chmod & Octal Rights' },
                { id: 'Processes', name: '⚡ ps, top & Signals' },
                { id: 'TextProcessing', name: '📄 grep, awk & sed' },
                { id: 'NetworkingCLI', name: '🌐 netstat, curl & ssh' }
            ],
            heroBadges: ['Octal Permission Calculations', 'Pipes & Redirections', 'grep Regex Patterns', 'Process Signals (SIGTERM/SIGKILL)'],
            questionCount: 30,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Practice CLI command output interpretation, piped command chaining, and file permission setups.',
                perks: ['Octal permission step calculation', 'Detailed explanation of CLI flags', 'Filter by core command group'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'CLI Screening',
                timeLimit: '30 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 30-minute exam with 30 questions testing production Linux troubleshooting skills.',
                perks: ['30:00 live countdown with auto-submit', 'Randomized command-chain questions', 'CLI readiness scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid recall cards for commonly forgotten CLI flags (-rf, -la, -exec, -o), octal codes (755, 644), and regex shortcuts.',
                perks: ['Smooth 3D flip card animation', 'Octal permission & flag review', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        },

        browser_fundamental: {
            moduleId: 'browser_fundamental',
            moduleName: 'Browser Fundamentals',
            accent: '#2563EB',
            accentName: 'blue',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
            shortDescription: 'Rendering Pipeline, DOM Construction, Critical Rendering Path, HTTP Caching & Storage',
            heroDescription: 'Placement-focused practice covering <strong>Critical Rendering Path (CRP)</strong>, <strong>Reflow vs Repaint</strong>, <strong>Browser Storage (Cookies/LocalStorage/IndexedDB)</strong>, and <strong>CORS & Security Policies</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (30)' },
                { id: 'RenderingPipeline', name: '🎨 DOM, CSSOM & Render Tree' },
                { id: 'ReflowRepaint', name: '⚡ Reflow vs Repaint' },
                { id: 'BrowserStorage', name: '💾 Cookies, Storage & IndexedDB' },
                { id: 'Security', name: '🛡️ CORS, CSP & SOP' }
            ],
            heroBadges: ['Critical Rendering Path', 'Reflow vs Repaint Triggers', 'Same-Origin Policy & CORS', 'HTTP Cache-Control Headers'],
            questionCount: 30,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Self-paced questions on render-blocking resources, async vs defer script tags, and cookie security flags.',
                perks: ['Detailed explanation of browser internals', 'Async vs Defer script loading diagrams', 'Filter by core browser topics'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'Frontend Prep',
                timeLimit: '30 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 30-minute test covering 30 browser architecture questions asked in product frontend interviews.',
                perks: ['30:00 live countdown with auto-submit', 'Randomized question set', 'Browser engineering scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Rapid revision cards for HTTP cache headers (ETag, Cache-Control), cookie flags (HttpOnly, SameSite, Secure), and storage limits.',
                perks: ['Smooth 3D flip card animation', 'Cookie flags & storage limits review', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        },

        office_suite: {
            moduleId: 'office_suite',
            moduleName: 'Microsoft Office Suite',
            accent: '#0284C7',
            accentName: 'sky',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
            shortDescription: 'Excel Formulas (VLOOKUP/XLOOKUP/INDEX-MATCH), Pivot Tables, Word & PowerPoint Shortcuts',
            heroDescription: 'Placement-focused practice covering <strong>Excel Lookup Functions (XLOOKUP/VLOOKUP)</strong>, <strong>Pivot Tables & Data Summarization</strong>, <strong>Conditional Formatting</strong>, and <strong>Corporate Document Standards</strong> designed around technical screening and interview preparation.',
            topics: [
                { id: 'all', name: 'All Topics (90)' },
                { id: 'ExcelLookups', name: '📊 XLOOKUP & INDEX-MATCH' },
                { id: 'PivotTables', name: '📈 Pivot Tables & Charts' },
                { id: 'Formulas', name: '🔢 IF, COUNTIF & SUMIFS' },
                { id: 'Shortcuts', name: '⚡ Essential Shortcuts' }
            ],
            heroBadges: ['VLOOKUP vs XLOOKUP', 'Pivot Table Grouping', 'INDEX + MATCH Combinations', 'Data Validation Rules'],
            questionCount: 90,
            trackCount: 4,
            difficultyLevels: ['Easy', 'Medium', 'Hard'],
            practice: {
                title: 'Interactive Practice',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
                desc: 'Practice real enterprise spreadsheet tasks with instant syntax breakdown and error (#N/A, #REF!) troubleshooting.',
                perks: ['Formula syntax step breakdown', 'Common Excel error resolution guides', 'Filter by Excel, Word, or PPT'],
                cta: 'Start Practice'
            },
            timedExam: {
                title: 'Placement Timed Exam',
                badge: 'Aptitude & Skills',
                timeLimit: '45 Mins',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                desc: 'Strict 45-minute exam with 45 questions simulating MNC corporate literacy and spreadsheet screening tests.',
                perks: ['45:00 countdown timer with auto-submit', 'Randomized formula scenario questions', 'Corporate readiness scorecard'],
                cta: 'Start Timed Exam'
            },
            flashcards: {
                title: 'Flashcard Study',
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                desc: 'Speed drills for keyboard shortcuts (F4 absolute reference, Ctrl+Shift+L filters, Alt+= AutoSum) and syntax recall.',
                perks: ['Smooth 3D flip card animation', 'Essential Windows & Mac shortcut cards', 'Keyboard navigation enabled'],
                cta: 'Open Flashcards'
            }
        }
    };

    // =========================================================================
    // 2. TEMPLATE BUILDER FUNCTIONS
    // =========================================================================

    /**
     * Builds Section 1: Top Navigation Bar HTML
     */
    function buildHeaderHTML(config) {
        const notesBtn = config.notesRoute 
            ? `<a href="${config.notesRoute}" class="notes-nav-btn" title="Read Module Placement Notes">📖 Study Notes</a>` 
            : '';

        return `
        <div class="header-container">
            <div class="header-left">
                <a href="../index.html" class="back-link" aria-label="Return to PlacementPrep Dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <span>Dashboard</span>
                </a>
                <div class="header-divider"></div>
                <div class="module-title-area">
                    <div class="topic-tag">
                        ${config.icon}
                        <span>${config.moduleName}</span>
                    </div>
                    <span id="header-mode-badge" class="badge mode-tag">Practice Mode</span>
                </div>
            </div>

            <div class="header-center">
                <!-- Exam Timer -->
                <div id="timer-box" class="timer-box hidden" aria-live="polite">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span id="timer-display" class="timer-text">${config.timedExam.timeLimit || '30:00'}</span>
                </div>
            </div>

            <div class="header-right">
                ${notesBtn}
                <button id="sound-toggle" class="sound-toggle-pill sound-on" aria-label="Toggle sound FX" title="Click to turn sound ON or OFF">
                    <svg id="sound-icon-on" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                    <span id="sound-toggle-text">Sound: ON</span>
                </button>

                <button id="nav-sync-btn" class="nav-sync-pill" aria-label="Sync user progress" title="Sync progress across devices">
                    <span class="sync-dot"></span>
                    <span id="nav-sync-text">Sync</span>
                </button>

                <div id="score-counter" class="score-pill">
                    Score: <strong id="score-value">0</strong>
                </div>

                <button id="theme-toggle" class="icon-btn theme-toggle" aria-label="Toggle dark mode" title="Toggle dark/light mode">
                    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
                    </svg>
                </button>
            </div>
        </div>
        `;
    }

    /**
     * Builds Section 2 & 3: Hero Section & Topic Track Selector HTML
     */
    function buildHeroHTML(config) {
        // Hero badges
        const badgesHtml = (config.heroBadges || []).map(b => `
            <span class="track-hero-pill">
                ${config.icon}
                <span>${b}</span>
            </span>
        `).join('');

        // Spec pills (Statistics Banner)
        const specHtml = `
            <div class="spec-pill"><span class="pill-dot" style="background:${config.accent};"></span> ${config.questionCount} Placement MCQs</div>
            <div class="spec-pill"><span class="pill-dot amber"></span> ${config.trackCount} Core Tracks</div>
            <div class="spec-pill"><span class="pill-dot green"></span> ${config.difficultyLevels.join(', ')}</div>
            <div class="spec-pill"><span class="pill-dot blue"></span> ${config.timedExam.timeLimit || '30 Min'} Exam</div>
        `;

        // Topic track buttons
        const trackButtonsHtml = (config.topics || []).map((t, idx) => `
            <button class="track-pill-btn ${idx === 0 ? 'active' : ''}" data-track-target="${t.id}">
                ${t.name}
            </button>
        `).join('');

        return `
        <div class="welcome-hero">
            <div class="track-hero-pills">
                ${badgesHtml}
            </div>

            <h1>${config.moduleName} Mastery</h1>
            <p class="hero-desc">
                ${config.heroDescription}
            </p>

            <div class="exam-spec-banner">
                ${specHtml}
            </div>

            <!-- Section 3: Reusable Segmented Topic Selector -->
            <div class="track-quick-filter-container">
                <span class="filter-headline">Focus Practice Track:</span>
                <div class="track-filter-buttons">
                    ${trackButtonsHtml}
                </div>
            </div>
        </div>
        `;
    }

    /**
     * Builds Section 4: 3 Primary Activity Cards HTML
     */
    function buildActivityCardsHTML(config) {
        const c1 = config.practice;
        const c2 = config.timedExam;
        const c3 = config.flashcards;

        return `
        <div class="modes-grid">
            <!-- Card 1: Interactive Practice -->
            <div class="mode-card" data-mode="practice">
                <div class="mode-icon-wrapper" style="color:${config.accent}; border-color:${config.accent}40; background:${config.accent}15;">
                    ${c1.iconSvg}
                </div>
                <h3>${c1.title}</h3>
                <p>${c1.desc}</p>
                <ul class="mode-perks">
                    ${c1.perks.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <button class="btn btn-primary start-mode-btn" data-mode="practice">${c1.cta}</button>
            </div>

            <!-- Card 2: Placement Timed Exam -->
            <div class="mode-card highlighted" data-mode="exam">
                <div class="mode-badge-hot">${c2.badge}</div>
                <div class="mode-icon-wrapper amber">
                    ${c2.iconSvg}
                </div>
                <h3>${c2.title}</h3>
                <p>${c2.desc}</p>
                <ul class="mode-perks">
                    ${c2.perks.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <button class="btn btn-accent start-mode-btn" data-mode="exam">${c2.cta}</button>
            </div>

            <!-- Card 3: Flashcard Study -->
            <div class="mode-card" data-mode="flashcards">
                <div class="mode-icon-wrapper purple">
                    ${c3.iconSvg}
                </div>
                <h3>${c3.title}</h3>
                <p>${c3.desc}</p>
                <ul class="mode-perks">
                    ${c3.perks.map(p => `<li>${p}</li>`).join('')}
                </ul>
                <button class="btn btn-secondary start-mode-btn" data-mode="flashcards">${c3.cta}</button>
            </div>
        </div>
        `;
    }

    // =========================================================================
    // 3. CORE MODULE SYSTEM CONTROLLER
    // =========================================================================
    const ModuleSystem = {
        registry: MODULE_REGISTRY,

        /**
         * Detects current module from URL or folder path
         */
        detectModuleId: function () {
            // Check query param first (?mod=dbms or ?module=dbms)
            const params = new URLSearchParams(window.location.search);
            const queryMod = params.get('mod') || params.get('module') || params.get('id');
            if (queryMod && MODULE_REGISTRY[queryMod.toLowerCase()]) {
                return queryMod.toLowerCase();
            }

            const path = window.location.pathname.toLowerCase();
            for (const key of Object.keys(MODULE_REGISTRY)) {
                if (path.includes(key) || path.includes(key.replace('_', ''))) {
                    return key;
                }
            }
            if (path.includes('cloud')) return 'cloud_computing';
            if (path.includes('prog')) return 'programming_fundamentals';
            if (path.includes('cyber')) return 'cyber_security';
            if (path.includes('pseudo')) return 'pseudocode';
            if (path.includes('office')) return 'office_suite';
            if (path.includes('linux')) return 'linux_commands';
            if (path.includes('browser')) return 'browser_fundamental';
            if (path.includes('ai') || path.includes('ml')) return 'ai_ml';
            if (path.includes('git')) return 'github';
            if (path.includes('netw')) return 'networking';
            if (path.includes('dbms') || path.includes('sql')) return 'dbms';
            if (path.includes('apt')) return 'aptitude';
            if (path.includes('interv')) return 'interview_preparation';
            if (path.includes('os') || path.includes('operat')) return 'operating_systems';
            if (path.includes('js') || path.includes('java_script')) return 'javascript';
            if (path.includes('web')) return 'web_development';
            if (path.includes('fund')) return 'computer_fundamentals';
            return 'programming_fundamentals';
        },

        /**
         * Returns configuration for a moduleId
         */
        getConfig: function (moduleId) {
            return MODULE_REGISTRY[moduleId] || MODULE_REGISTRY.programming_fundamentals;
        },

        /**
         * Injects CSS variables for the module accent into document root
         */
        applyTheme: function (config) {
            const root = document.documentElement;
            root.style.setProperty('--module-accent', config.accent);
            root.style.setProperty('--module-accent-light', `${config.accent}14`);
            root.style.setProperty('--module-accent-border', `${config.accent}40`);
            root.style.setProperty('--module-accent-glow', `${config.accent}33`);
            document.body.classList.add('module-page-body');
        },

        /**
         * Wires up event listeners for the unified header and landing view
         */
        bindEvents: function (config) {
            // Track filter buttons
            document.querySelectorAll('.track-pill-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.track-pill-btn').forEach(b => b.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    const targetTrack = e.currentTarget.getAttribute('data-track-target');

                    // Dispatch custom event for module controllers
                    window.dispatchEvent(new CustomEvent('module:track-selected', { detail: { track: targetTrack } }));

                    // Trigger matching workspace track filter if exists
                    const wsTrackBtn = document.querySelector(`[data-filter-track="${targetTrack}"]`);
                    if (wsTrackBtn) wsTrackBtn.click();
                });
            });

            // Start Mode Buttons
            document.querySelectorAll('.start-mode-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const mode = e.currentTarget.getAttribute('data-mode');
                    window.dispatchEvent(new CustomEvent('module:mode-selected', { detail: { mode } }));
                });
            });

            // Theme toggle listener
            const themeBtn = document.getElementById('theme-toggle');
            if (themeBtn && !themeBtn._boundUnified) {
                themeBtn._boundUnified = true;
                themeBtn.addEventListener('click', () => {
                    const current = document.documentElement.getAttribute('data-theme') || 'light';
                    const next = current === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('placementPrep_theme', next);
                    localStorage.setItem('theme', next);
                });
            }
        },

        /**
         * Renders the complete unified module landing view into the page
         */
        render: function (moduleIdOrConfig) {
            const config = typeof moduleIdOrConfig === 'string' 
                ? this.getConfig(moduleIdOrConfig) 
                : (moduleIdOrConfig || this.getConfig(this.detectModuleId()));

            this.applyTheme(config);

            // 1. Render Top Navigation Bar if header container exists
            const headerEl = document.querySelector('.app-header') || document.querySelector('header');
            if (headerEl) {
                headerEl.innerHTML = buildHeaderHTML(config);
            }

            // 2. Render Landing Screen (#screen-mode-select)
            const landingSection = document.getElementById('screen-mode-select');
            if (landingSection) {
                landingSection.innerHTML = buildHeroHTML(config) + buildActivityCardsHTML(config);
            }

            // 3. Bind interactions
            this.bindEvents(config);
        },

        /**
         * Auto-initialize on DOM ready
         */
        init: function (moduleId) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.render(moduleId));
            } else {
                this.render(moduleId);
            }
        }
    };

    // Expose to window
    window.ModuleSystem = ModuleSystem;

})(window, document);
