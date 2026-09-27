/* ==========================================================================
   PLACEMENTPREP - CENTRAL MODULES REGISTRY & METADATA
   Metadata for all 12 Technical Placement Preparation Modules
   ========================================================================== */

(function () {
  window.MODULES_REGISTRY = [
    {
      id: 'programming',
      name: 'Programming Fundamentals',
      category: 'Core Coding',
      icon: '💻',
      accentColor: '#3B82F6',
      accentLight: 'rgba(59, 130, 246, 0.15)',
      description: 'Variables, operator precedence, control flow, recursion, code-tracing, memory layout, and output prediction for fresher technical assessments.',
      topics: ['Operator Precedence', 'Nested Loops', 'Recursion & Stack', 'Arrays & Pointers', 'Output Prediction', 'Complexity Basics'],
      dataVar: 'PROGRAMMING_QUESTIONS',
      dataFile: 'data/programming.js'
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'Software Engineering',
      icon: '🐙',
      accentColor: '#F05032',
      accentLight: 'rgba(240, 80, 50, 0.15)',
      description: 'Repository management, branching workflows, cherry-pick, merge vs rebase, conflict resolution, and enterprise scenario-based problem solving.',
      topics: ['Staging & Commits', 'Branching & Merging', 'Rebase vs Merge', 'Reset & Revert', 'Stash & .gitignore', 'Workflows'],
      dataVar: 'GIT_QUESTIONS',
      dataFile: 'data/git.js'
    },
    {
      id: 'dbms',
      name: 'DBMS & SQL',
      category: 'Data & Systems',
      icon: '🗄️',
      accentColor: '#0284C7',
      accentLight: 'rgba(2, 132, 199, 0.15)',
      description: 'Relational algebra, candidate keys, 1NF to BCNF normalization, SQL queries, aggregate joins, subqueries, ACID properties, and concurrency control.',
      topics: ['Normalization (1NF-BCNF)', 'Candidate Keys', 'Complex SQL Joins', 'GROUP BY & HAVING', 'ACID & Transactions', 'Locks & Concurrency'],
      dataVar: 'DBMS_QUESTIONS',
      dataFile: 'data/dbms.js'
    },
    {
      id: 'networking',
      name: 'Computer Networks',
      category: 'Infrastructure',
      icon: '🌐',
      accentColor: '#0D9488',
      accentLight: 'rgba(13, 148, 136, 0.15)',
      description: 'OSI and TCP/IP protocol stacks, TCP three-way handshake, DNS resolution, Subnetting, IPv4/IPv6, and real-world packet flow troubleshooting.',
      topics: ['OSI 7-Layer Model', 'TCP vs UDP Flow', 'DNS Lookup Hierarchy', 'Subnetting & CIDR', 'HTTP/HTTPS Handshake', 'Network Troubleshooting'],
      dataVar: 'NETWORKING_QUESTIONS',
      dataFile: 'data/networking.js'
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      category: 'Infrastructure',
      icon: '☁️',
      accentColor: '#0284C7',
      accentLight: 'rgba(2, 132, 199, 0.15)',
      description: 'IaaS/PaaS/SaaS architectures, high availability, auto-scaling, fault tolerance, multi-region deployments, serverless, and disaster recovery strategies.',
      topics: ['Cloud Service Models', 'Scalability vs Elasticity', 'Regions & Availability Zones', 'Containers & Serverless', 'Cloud Security & IAM', 'Disaster Recovery'],
      dataVar: 'CLOUD_QUESTIONS',
      dataFile: 'data/cloud.js'
    },
    {
      id: 'security',
      name: 'Network & Cyber Security',
      category: 'Infrastructure',
      icon: '🛡️',
      accentColor: '#10B981',
      accentLight: 'rgba(16, 185, 129, 0.15)',
      description: 'CIA triad, symmetric/asymmetric cryptography, TLS certificates, SQL injection, XSS vulnerabilities, firewalls, and attack vector diagnosis.',
      topics: ['CIA Triad & Auth', 'Symmetric vs Asymmetric', 'SQLi & XSS Prevention', 'Firewalls & IDS/IPS', 'Phishing & MitM', 'Digital Certificates'],
      dataVar: 'SECURITY_QUESTIONS',
      dataFile: 'data/security.js'
    },
    {
      id: 'browser',
      name: 'Browser Fundamentals',
      category: 'Web & Systems',
      icon: '🧭',
      accentColor: '#2563EB',
      accentLight: 'rgba(37, 99, 235, 0.15)',
      description: 'Browser internal architecture, DOM tree parsing, Critical Rendering Path, HTTP status codes, cookies, session storage, and DevTools debugging.',
      topics: ['Critical Rendering Path', 'DOM & CSSOM Construction', 'Cookies vs Web Storage', 'HTTP Response Codes', 'CORS & Same-Origin', 'Browser Caching'],
      dataVar: 'BROWSER_QUESTIONS',
      dataFile: 'data/browser.js'
    },
    {
      id: 'windows',
      name: 'Windows & CLI Mastery',
      category: 'Practical Skills',
      icon: '⌨️',
      accentColor: '#F59E0B',
      accentLight: 'rgba(245, 158, 11, 0.15)',
      description: 'Command Prompt & PowerShell practical utilities, path variables, process diagnostics, ping, ipconfig, network verification, and file manipulation.',
      topics: ['Directory & File Commands', 'ipconfig & Network Diag', 'Relative vs Absolute Paths', 'Environment Variables', 'Batch Scripting Basics', 'Process Management'],
      dataVar: 'WINDOWS_QUESTIONS',
      dataFile: 'data/windows.js'
    },
    {
      id: 'javascript',
      name: 'JavaScript & Web Dev',
      category: 'Core Coding',
      icon: '⚡',
      accentColor: '#EAB308',
      accentLight: 'rgba(234, 179, 8, 0.15)',
      description: 'Scope, closures, hoisting, asynchronous event loop, DOM manipulation, promises, array methods, and tricky JavaScript code-output evaluation.',
      topics: ['Hoisting & Scope', 'Closures & Callbacks', 'Event Loop & Async', 'DOM Manipulation', 'Array Map/Filter/Reduce', 'Output Prediction'],
      dataVar: 'JAVASCRIPT_QUESTIONS',
      dataFile: 'data/javascript.js'
    },
    {
      id: 'powerpoint',
      name: 'Microsoft PowerPoint',
      category: 'Productivity',
      icon: '📊',
      accentColor: '#D97706',
      accentLight: 'rgba(217, 119, 6, 0.15)',
      description: 'Slide master customization, transitions, custom animation timings, presentation views, chart integrations, and corporate delivery shortcuts.',
      topics: ['Slide Master & Layouts', 'Custom Animation Timings', 'Presenter View & Controls', 'Object Hierarchy & Grouping', 'Keyboard Shortcuts', 'Export & Media'],
      dataVar: 'POWERPOINT_QUESTIONS',
      dataFile: 'data/powerpoint.js'
    },
    {
      id: 'word',
      name: 'Microsoft Word',
      category: 'Productivity',
      icon: '📝',
      accentColor: '#2563EB',
      accentLight: 'rgba(37, 99, 235, 0.15)',
      description: 'Document styling hierarchies, paragraph flow, page breaks vs section breaks, mail merge automation, track changes, and reference management.',
      topics: ['Styles & Formatting', 'Section vs Page Breaks', 'Mail Merge Workflows', 'Track Changes & Review', 'Table Layout & Formats', 'Shortcuts & Navigation'],
      dataVar: 'WORD_QUESTIONS',
      dataFile: 'data/word.js'
    },
    {
      id: 'excel',
      name: 'Microsoft Excel',
      category: 'Productivity',
      icon: '📈',
      accentColor: '#059669',
      accentLight: 'rgba(5, 150, 105, 0.15)',
      description: 'Cell referencing ($A$1 vs A1), VLOOKUP, XLOOKUP, INDEX-MATCH, nested IF conditions, Pivot Tables, conditional formatting, and formula debugging.',
      topics: ['Absolute vs Relative Refs', 'VLOOKUP & XLOOKUP', 'Nested IF & SUMIF/COUNTIF', 'Pivot Tables & Summaries', 'Error Codes (#N/A, #REF!)', 'Data Validation'],
      dataVar: 'EXCEL_QUESTIONS',
      dataFile: 'data/excel.js'
    }
  ];
})();
