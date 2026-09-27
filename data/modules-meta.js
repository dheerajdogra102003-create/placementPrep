/* ==========================================================================
   PLACEMENTPREP - CENTRAL MODULES REGISTRY & METADATA
   Metadata for all 12 Technical Placement Preparation Modules (1,000 Questions)
   ========================================================================== */

(function () {
  window.MODULES_REGISTRY = [
  {
    "id": "browser",
    "name": "Browser Fundamentals",
    "category": "Web & Systems",
    "icon": "\ud83e\udded",
    "accentColor": "#2563EB",
    "accentLight": "rgba(37, 99, 235, 0.15)",
    "description": "Browser rendering architecture, DOM parsing, HTTP/HTTPS lifecycle, DNS resolution, cookies, session/local storage, headers, and security fundamentals.",
    "topics": [
      "Rendering Engine & DOM",
      "DNS & HTTP/HTTPS Handshake",
      "Cookies vs Web Storage",
      "Status Codes & Headers",
      "CORS & Same-Origin Policy",
      "Browser Caching"
    ],
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Cognizant",
      "Capgemini"
    ],
    "questionCount": 50,
    "jsonFile": "data/browser.json",
    "dataFile": "data/browser.js",
    "dataVar": "BROWSER_QUESTIONS",
    "notesUrl": "notes/browser-fundamentals.html"
  },
  {
    "id": "programming-logic",
    "name": "Programming Logic & Variables",
    "category": "Core Coding",
    "icon": "\ud83d\udcbb",
    "accentColor": "#3B82F6",
    "accentLight": "rgba(59, 130, 246, 0.15)",
    "description": "Variables, primitive data types, operator precedence, type conversions, conditional logic, nested loops, break/continue, and execution tracing.",
    "topics": [
      "Variables & Data Types",
      "Operator Precedence",
      "Conditionals & Nested If",
      "Loops & Iteration Control",
      "Infinite Loop Traps",
      "Execution Tracing"
    ],
    "targetCompanies": [
      "TCS",
      "Infosys",
      "Wipro",
      "Tech Mahindra"
    ],
    "questionCount": 150,
    "jsonFile": "data/programming-logic.json",
    "dataFile": "data/programming.js",
    "dataVar": "PROGRAMMING_LOGIC_QUESTIONS"
  },
  {
    "id": "command-prompt",
    "name": "Linux & Command Prompt",
    "category": "Practical Skills",
    "icon": "\u2328\ufe0f",
    "accentColor": "#F59E0B",
    "accentLight": "rgba(245, 158, 11, 0.15)",
    "description": "Essential CLI navigation, paths, file/folder operations, system administration, networking diagnostics (ping, ipconfig/ifconfig), and troubleshooting.",
    "topics": [
      "Directory Navigation & cd",
      "File Operations (copy, move, del)",
      "Relative vs Absolute Paths",
      "Network Utilities (ping, ipconfig)",
      "Permissions & CLI Output",
      "Troubleshooting"
    ],
    "targetCompanies": [
      "Cognizant",
      "HCLTech",
      "Accenture",
      "Wipro"
    ],
    "questionCount": 30,
    "jsonFile": "data/command-prompt.json",
    "dataFile": "data/windows.js",
    "dataVar": "COMMAND_PROMPT_QUESTIONS",
    "notesUrl": "notes/linux-command-prompt.html"
  },
  {
    "id": "office",
    "name": "Microsoft Office Suite",
    "category": "Productivity",
    "icon": "\ud83d\udcca",
    "accentColor": "#059669",
    "accentLight": "rgba(5, 150, 105, 0.15)",
    "description": "Corporate workplace productivity across Microsoft Word (styles, mail merge), Excel (VLOOKUP, IF formulas, cell referencing), and PowerPoint.",
    "topics": [
      "Excel Formulas & Functions",
      "Absolute vs Relative ($A$1)",
      "Word Styles & Mail Merge",
      "PowerPoint Master Slides",
      "Pivot Tables & Charts",
      "Error Tracing (#N/A, #REF!)"
    ],
    "targetCompanies": [
      "Deloitte",
      "Accenture",
      "Capgemini",
      "Tech Mahindra"
    ],
    "questionCount": 90,
    "jsonFile": "data/office.json",
    "dataFile": "data/office.js",
    "dataVar": "OFFICE_QUESTIONS"
  },
  {
    "id": "cloud",
    "name": "Cloud Computing",
    "category": "Infrastructure",
    "icon": "\u2601\ufe0f",
    "accentColor": "#0284C7",
    "accentLight": "rgba(2, 132, 199, 0.15)",
    "description": "IaaS, PaaS, SaaS, virtualization, Docker containers, multi-region architectures, elasticity vs scalability, serverless, and disaster recovery.",
    "topics": [
      "IaaS, PaaS, and SaaS",
      "Scalability vs Elasticity",
      "Regions & Availability Zones",
      "Containers & Kubernetes",
      "Serverless Architecture",
      "Disaster Recovery & Cost"
    ],
    "targetCompanies": [
      "Accenture",
      "LTIMindtree",
      "Cognizant",
      "Infosys"
    ],
    "questionCount": 60,
    "jsonFile": "data/cloud.json",
    "dataFile": "data/cloud.js",
    "dataVar": "CLOUD_QUESTIONS",
    "notesUrl": "notes/cloud-computing.html"
  },
  {
    "id": "networking-security",
    "name": "Networking & Security",
    "category": "Infrastructure",
    "icon": "\ud83d\udee1\ufe0f",
    "accentColor": "#10B981",
    "accentLight": "rgba(16, 185, 129, 0.15)",
    "description": "OSI 7 layers, TCP/IP, three-way handshake, DNS, routing, CIDR subnetting, CIA triad, cryptography, TLS, firewalls, and attack vector diagnosis.",
    "topics": [
      "OSI vs TCP/IP Stack",
      "TCP Handshake & Ports",
      "Subnetting & IP Addressing",
      "CIA Triad & Encryption",
      "Firewalls, IDS & IPS",
      "SQLi, XSS & MitM Attacks"
    ],
    "targetCompanies": [
      "TCS",
      "Wipro",
      "LTIMindtree",
      "Capgemini"
    ],
    "questionCount": 90,
    "jsonFile": "data/networking-security.json",
    "dataFile": "data/networking.js",
    "dataVar": "NETWORKING_SECURITY_QUESTIONS",
    "notesUrl": "notes/networking-security.html"
  },
  {
    "id": "pseudocode",
    "name": "Pseudocode & Logic",
    "category": "Core Coding",
    "icon": "\u26a1",
    "accentColor": "#8B5CF6",
    "accentLight": "rgba(139, 92, 246, 0.15)",
    "description": "High-yield pseudocode tracing, loop iteration counting, condition branching, recursion analysis, arrays, strings, bitwise logic, and complexity.",
    "topics": [
      "Code Output Prediction",
      "Loop Iteration Counting",
      "Recursion Depth & Returns",
      "Bitwise Operator Logic",
      "Array/Matrix Tracing",
      "Algorithm Complexity"
    ],
    "targetCompanies": [
      "Capgemini",
      "Accenture",
      "Cognizant",
      "TCS"
    ],
    "questionCount": 130,
    "jsonFile": "data/pseudocode.json",
    "dataFile": "data/pseudocode.js",
    "dataVar": "PSEUDOCODE_QUESTIONS"
  },
  {
    "id": "dbms",
    "name": "DBMS & SQL",
    "category": "Data & Systems",
    "icon": "\ud83d\uddc4\ufe0f",
    "accentColor": "#0284C7",
    "accentLight": "rgba(2, 132, 199, 0.15)",
    "description": "Relational data model, candidate keys, 1NF to BCNF normalization, advanced SQL queries, joins, ACID transactions, two-phase locking, and B+ trees.",
    "topics": [
      "Keys & Referential Integrity",
      "1NF, 2NF, 3NF & BCNF",
      "Complex SQL Joins & GROUP BY",
      "ACID & Recovery Logging",
      "Concurrency, Locks & Deadlocks",
      "Indexing & Query Plans"
    ],
    "targetCompanies": [
      "TCS",
      "Infosys",
      "Deloitte",
      "Tech Mahindra"
    ],
    "questionCount": 50,
    "jsonFile": "data/dbms.json",
    "dataFile": "data/dbms.js",
    "dataVar": "DBMS_QUESTIONS",
    "notesUrl": "notes/dbms.html"
  },
  {
    "id": "javascript",
    "name": "JavaScript & Web Dev",
    "category": "Core Coding",
    "icon": "\u2728",
    "accentColor": "#EAB308",
    "accentLight": "rgba(234, 179, 8, 0.15)",
    "description": "ES6+ fundamentals, hoisting, closures, event loop microtasks/macrotasks, promises, async/await, DOM events, and tricky output evaluation.",
    "topics": [
      "var vs let vs const & TDZ",
      "Closures & 'this' Binding",
      "Event Loop & Promises",
      "Async / Await Flow",
      "DOM & Event Delegation",
      "Type Coercion Gotchas"
    ],
    "targetCompanies": [
      "Accenture",
      "Cognizant",
      "LTIMindtree",
      "Infosys"
    ],
    "questionCount": 50,
    "jsonFile": "data/javascript.json",
    "dataFile": "data/javascript.js",
    "dataVar": "JAVASCRIPT_QUESTIONS"
  },
  {
    "id": "git",
    "name": "Git & GitHub",
    "category": "Software Engineering",
    "icon": "\ud83d\udc19",
    "accentColor": "#F05032",
    "accentLight": "rgba(240, 80, 50, 0.15)",
    "description": "Version control fundamentals, staging, commits, branch management, merge vs rebase, conflict resolution, reset vs revert, stash, and PR workflows.",
    "topics": [
      "Staging Area & Commits",
      "Branching & Merge Conflicts",
      "Rebase vs Merge Strategies",
      "Reset, Revert & Restore",
      "Stash & .gitignore Rules",
      "Pull Requests & Remotes"
    ],
    "targetCompanies": [
      "Deloitte",
      "TCS",
      "Accenture",
      "Capgemini"
    ],
    "questionCount": 100,
    "jsonFile": "data/git.json",
    "dataFile": "data/git.js",
    "dataVar": "GIT_QUESTIONS",
    "notesUrl": "notes/git-github.html"
  },
  {
    "id": "python",
    "name": "Python & Algorithms",
    "category": "Core Coding",
    "icon": "\ud83d\udc0d",
    "accentColor": "#306998",
    "accentLight": "rgba(48, 105, 152, 0.15)",
    "description": "Data structures, slicing, mutable default arguments, list/dict comprehensions, decorators, generators, OOP, sorting algorithms, and complexity.",
    "topics": [
      "Lists, Tuples, Sets, Dictionaries",
      "Slicing & Immutability",
      "Mutable Default Trap",
      "OOP, MRO & Magic Methods",
      "Sorting Algorithms & Timsort",
      "Two Pointers & Sliding Window"
    ],
    "targetCompanies": [
      "Infosys",
      "TCS",
      "Cognizant",
      "Wipro"
    ],
    "questionCount": 100,
    "jsonFile": "data/python.json",
    "dataFile": "data/python.js",
    "dataVar": "PYTHON_QUESTIONS"
  },
  {
    "id": "ai-ml-dl",
    "name": "AI, ML & Deep Learning",
    "category": "Advanced CS",
    "icon": "\ud83e\udd16",
    "accentColor": "#9333EA",
    "accentLight": "rgba(147, 51, 234, 0.15)",
    "description": "Supervised/unsupervised learning, bias-variance tradeoff, evaluation metrics (F1, AUC), neural networks, backpropagation, CNNs, Transformers, and LLMs.",
    "topics": [
      "Supervised vs Unsupervised",
      "Overfitting, Bias & Variance",
      "Precision, Recall & ROC-AUC",
      "Backprop & Activation Funcs",
      "CNNs, RNNs & Attention",
      "Transformers, LLMs & RAG"
    ],
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Deloitte",
      "LTIMindtree"
    ],
    "questionCount": 100,
    "jsonFile": "data/ai-ml-dl.json",
    "dataFile": "data/aiml.js",
    "dataVar": "AIML_QUESTIONS",
    "notesUrl": "notes/ai-ml-dl.html"
  }
];
})();
