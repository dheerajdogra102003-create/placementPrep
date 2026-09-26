/**
 * PlacementPrep - GitHub & Git Practice Module
 * 60 High-Yield MNC Fresher Placement Questions
 * 
 * Distribution:
 * - 18 Easy (30%)
 * - 24 Medium (40%)
 * - 18 Hard (30%)
 * - 18 Scenario-Based (30%)
 * 
 * Structure:
 * Exactly 4 options per question, exactly 1 correct answer.
 * Structured explanations with:
 * - Correct Answer
 * - Why?
 * - Placement Takeaway
 * - Placement Trap (where relevant)
 */

const GITHUB_TOPICS = [
    { id: "git_vs_github", name: "Git Fundamentals", priority: "high", icon: "git", count: 4, desc: "Distributed VCS architecture, snapshots vs deltas, and Git vs GitHub core distinctions." },
    { id: "repository_basics", name: "Repository Basics", priority: "medium", icon: "repository", count: 4, desc: "Repository initialization, cloning, shallow clones, and config scopes." },
    { id: "essential_commands", name: "Essential Commands", priority: "very_high", icon: "terminal", count: 8, desc: "High-frequency commands: status, log, diff, add, mv, and log visual formatting." },
    { id: "working_staging_repo", name: "Working Directory & Staging", priority: "very_high", icon: "layers", count: 5, desc: "The three-tree architecture: Working Tree, Index/Staging, and HEAD repository state." },
    { id: "commits_history", name: "Commits & History", priority: "high", icon: "commit", count: 4, desc: "Atomic commits, commit SHA hashes, amending messages, and log inspection." },
    { id: "branching", name: "Branching", priority: "very_high", icon: "git-branch", count: 7, desc: "Branch creation, switching, HEAD pointer, branch deletion, and modern switch command." },
    { id: "merge_conflicts", name: "Merge & Conflicts", priority: "very_high", icon: "merge", count: 6, desc: "Fast-forward vs 3-way merges, conflict markers, resolution steps, aborting merges, and merge vs rebase." },
    { id: "push_pull_fetch", name: "Push, Pull & Fetch", priority: "very_high", icon: "upload-download", count: 6, desc: "Remote tracking, fetch vs pull differences, upstream setup, and handling rejected non-fast-forward pushes." },
    { id: "fork_pull_requests", name: "Fork & Pull Requests", priority: "high", icon: "pull-request", count: 4, desc: "Forking vs cloning, upstream synchronization, and open-source Pull Request workflows." },
    { id: "gitignore_security", name: ".gitignore & Security", priority: "high", icon: "file-minus", count: 4, desc: "Ignore patterns, untracking committed files with git rm --cached, and credential leak mitigation." },
    { id: "issues_collaboration", name: "GitHub Issues & Collaboration", priority: "medium", icon: "issue", count: 2, desc: "Automated issue closing via commit keywords and branch protection rules." },
    { id: "github_actions", name: "GitHub Actions Basics", priority: "medium", icon: "workflow", count: 2, desc: "CI/CD workflow definitions (.github/workflows), triggers, jobs, and steps." },
    { id: "reset_revert", name: "Reset vs Revert", priority: "high", icon: "undo", count: 4, desc: "Soft vs Mixed vs Hard reset, safe revert for shared history, and reflog recovery." }
];

const GITHUB_QUESTIONS = [
    // ---------------------------------------------------------
    // 1. GIT VS GITHUB FUNDAMENTALS (4 Questions)
    // ---------------------------------------------------------
    {
        id: 1,
        topic: "Git Fundamentals",
        topicId: "git_vs_github",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "In an MNC technical screening round, the interviewer asks: 'What is the primary technical difference between Git and GitHub?' Which statement is accurate?",
        options: [
            "Git is a command-line tool, whereas GitHub is an open-source Git operating system installed on servers.",
            "Git is a local/distributed Version Control System; GitHub is a cloud-based hosting service and collaboration platform for Git repositories.",
            "Git can only track text files, while GitHub is required to track images and binary files.",
            "Git requires an active internet connection to commit code, whereas GitHub allows offline commits."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Git is a local/distributed VCS; GitHub is a cloud-based hosting and collaboration platform.",
            why: "Git is the distributed version control engine installed on your machine that manages file versions locally. GitHub is a web-based service providing remote hosting, code reviews, PRs, issue tracking, and CI/CD pipelines.",
            placementTakeaway: "Remember: Git is the tool (engine); GitHub is the platform (cloud service). Git works 100% offline without GitHub.",
            placementTrap: "Many freshers mistakenly think Git and GitHub are the same product or that Git requires GitHub to record commits."
        }
    },
    {
        id: 2,
        topic: "Git Fundamentals",
        topicId: "git_vs_github",
        difficulty: "Medium",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "Why is Git classified as a 'Distributed Version Control System' (DVCS), unlike Centralized systems such as SVN (Subversion)?",
        options: [
            "Git stores files across distributed blockchain nodes for tamper-proof security.",
            "Every developer's local machine contains a complete copy of the repository, including full commit history and branches.",
            "Git distributes tasks automatically across cloud CPU clusters during code compilation.",
            "Git requires at least three independent server nodes before allowing any commit to be accepted."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Every developer's local clone contains the complete repository and entire historical record.",
            why: "In centralized systems (CVCS like SVN), only the central server has history; if the server goes down, developers cannot commit or review logs. In Git (DVCS), every clone has full history, allowing offline branching, committing, and logging.",
            placementTakeaway: "DVCS means 'Local is King'. You can view history, branch, commit, and diff without any network access.",
            placementTrap: "Confusing distributed version control with distributed cloud computing or microservices."
        }
    },
    {
        id: 3,
        topic: "Git Fundamentals",
        topicId: "git_vs_github",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "What is the purpose of the hidden `.git` folder located in the root directory of a project?",
        options: [
            "It stores developer login credentials and GitHub API authentication tokens.",
            "It houses the entire Git database, object store, commit logs, references, configuration, and index for that repository.",
            "It is a temporary cache folder that is automatically deleted when the terminal window closes.",
            "It contains compiled binaries generated by GitHub Actions runners."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It houses the entire Git database, metadata, object store, commit logs, and configuration.",
            why: "The `.git` directory is what makes a regular folder a Git repository. Deleting `.git` permanently deletes all commit history, branches, and version tracking from that local project.",
            placementTakeaway: "If you delete `.git`, your project reverts to a standard unversioned directory of flat files.",
            placementTrap: "Candidates sometimes confuse `.git` (repository database) with `.gitignore` (ignore rules)."
        }
    },
    {
        id: 4,
        topic: "Git Fundamentals",
        topicId: "git_vs_github",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Local Repository",
        question: "A fresher developer is working while traveling without internet access. They tell their team lead: 'I cannot create feature branches or record commits until we reach the client office and connect to GitHub.' How should the team lead respond?",
        options: [
            "'You are correct; branches require GitHub servers to allocate unique branch IDs.'",
            "'You can create branches and commit locally in Git; you only need network connectivity later when pushing commits to GitHub.'",
            "'You can commit locally, but branch creation requires a handshake with GitHub's remote API.'",
            "'You can write code, but Git will discard your local history if your machine reboots before syncing to GitHub.'"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "You can create branches and commit locally in Git; internet is only needed when pushing to GitHub.",
            why: "Git is fully distributed. Creating branches (`git branch`), switching (`git switch`), viewing logs (`git log`), and committing (`git commit`) are purely local file operations within `.git`.",
            placementTakeaway: "Interviewers frequently test this to see if you understand that Git operations are local until `push` or `fetch`.",
            placementTrap: "Believing that GitHub owns your commit history. GitHub is merely a remote backup and sharing host."
        }
    },

    // ---------------------------------------------------------
    // 2. REPOSITORY BASICS (4 Questions)
    // ---------------------------------------------------------
    {
        id: 5,
        topic: "Repository Basics",
        topicId: "repository_basics",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ cd my-web-app\n$ # Which command initializes a new local Git repository here?",
        question: "Which command initializes a new, empty Git repository inside an existing local project folder?",
        options: [
            "git create",
            "git start",
            "git init",
            "git repo --new"
        ],
        correct: 2,
        explanation: {
            correctAnswer: "git init",
            why: "`git init` creates the hidden `.git` directory inside the current folder, initializing the object database and default branch (usually `main` or `master`).",
            placementTakeaway: "`git init` is the foundational command to transform any existing directory into a version-controlled repo.",
            placementTrap: "Selecting `git clone` or `git start`. Remember: `git init` creates new local repos; `git clone` copies existing remote ones."
        }
    },
    {
        id: 6,
        topic: "Repository Basics",
        topicId: "repository_basics",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Remote Repository",
        codeSnippet: "$ git clone https://github.com/company/crm-core.git custom-client-app",
        question: "What is the exact outcome of running the command shown above?",
        options: [
            "It creates a remote branch named 'custom-client-app' on GitHub without downloading files.",
            "It clones the remote repository and puts the files into a local folder named 'custom-client-app' instead of the default 'crm-core'.",
            "It fails with a syntax error because git clone does not accept a second positional parameter.",
            "It clones the repository into 'crm-core' and copies build artifacts into 'custom-client-app'."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It clones the repo into a local directory named 'custom-client-app'.",
            why: "Syntax: `git clone <url> [directory]`. Passing an optional target directory name overrides the default folder name derived from the repo URL.",
            placementTakeaway: "Knowing how to clone into a custom directory is a frequent practical command question in TCS and Cognizant assessments.",
            placementTrap: "Assuming `git clone` always creates a folder with the repository's GitHub name."
        }
    },
    {
        id: 7,
        topic: "Repository Basics",
        topicId: "repository_basics",
        difficulty: "Medium",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Local Repository",
        codeSnippet: "$ git config --global user.name \"Aarav Sharma\"\n$ git config --global user.email \"aarav@company.com\"\n$ cd personal-project\n$ git config user.email \"aarav.dev@gmail.com\"",
        question: "A developer configures their Git settings as shown above. When they commit inside `personal-project`, which email will appear as the author in the commit log?",
        options: [
            "aarav@company.com because --global always overrides local repository settings.",
            "aarav.dev@gmail.com because repository-level (local) config overrides global config.",
            "Git will throw an error due to conflicting email definitions.",
            "Both emails will be combined separated by a comma."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "aarav.dev@gmail.com because local config overrides global config.",
            why: "Git configuration precedence order is: Local (`.git/config`) > Global (`~/.gitconfig`) > System (`/etc/gitconfig`). Local overrides Global.",
            placementTakeaway: "Rule: Most specific wins. Local repo config always supersedes user-wide global config.",
            placementTrap: "Thinking `--global` means 'mandatory and unalterable'. It only provides defaults when no local config exists."
        }
    },
    {
        id: 8,
        topic: "Repository Basics",
        topicId: "repository_basics",
        difficulty: "Hard",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Remote Repository",
        codeSnippet: "$ git clone --depth 1 https://github.com/enterprise/legacy-monorepo.git",
        question: "A company's repository is 15 GB due to 10 years of commit history. A fresher on a slow connection needs to fix an urgent bug. Why does the DevOps lead advise them to use the command above?",
        options: [
            "It compresses all files using maximum zip compression on the client machine.",
            "It performs a 'shallow clone', fetching only the latest commit snapshot without the entire 10-year history, saving gigabytes of bandwidth and time.",
            "It clones only the README.md and package.json files.",
            "It runs the clone in a detached background daemon thread."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It performs a shallow clone, fetching only the latest commit snapshot without full history.",
            why: "`--depth 1` creates a shallow clone containing only the tip commit of the default branch. This drastically reduces download size for CI/CD and emergency fixes in massive repos.",
            placementTakeaway: "`--depth 1` is an interview favorite for CI/CD pipeline optimization and shallow clone questions in MNCs.",
            placementTrap: "Believing that shallow clones cannot be updated later. (You can run `git fetch --unshallow` when needed)."
        }
    },

    // ---------------------------------------------------------
    // 3. ESSENTIAL GIT COMMANDS (8 Questions)
    // ---------------------------------------------------------
    {
        id: 9,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Working Directory",
        codeSnippet: "$ git status",
        question: "What information does the `git status` command provide?",
        options: [
            "The network ping latency and connection speed to the remote GitHub server.",
            "The current branch, untracked files, changes staged for commit, and modified files not yet staged.",
            "A chronological list of previous commit messages and their author names.",
            "A comparison of differences between the local branch and all GitHub forks."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "The current branch, untracked files, changes staged for commit, and changes not staged.",
            why: "`git status` is the primary inspection tool for the working tree and staging area (Index). It reports what branch you are on and which files are modified, untracked, or staged.",
            placementTakeaway: "`git status` is the single most frequently run command in day-to-day Git usage.",
            placementTrap: "Confusing `git status` (current working state) with `git log` (historical commits)."
        }
    },
    {
        id: 10,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ git log --oneline",
        question: "How does the `--oneline` flag change the output of the `git log` command?",
        options: [
            "It shows only commits made on the `main` branch line and ignores all other branches.",
            "It condenses each commit into a single line displaying the abbreviated SHA-1 hash and commit subject.",
            "It prints the diff of the first line of code changed in each file.",
            "It forces the output to be transmitted over a single network socket connection."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It condenses each commit into a single line with an abbreviated SHA hash and commit message.",
            why: "By default, `git log` prints author, date, full 40-char SHA, and multi-line message. `--oneline` provides a high-density, compact summary ideal for quick review.",
            placementTakeaway: "Essential for terminal fluency: `git log --oneline -n 5` shows the last 5 commits clearly.",
            placementTrap: "Thinking `--oneline` restricts logging to a single commit rather than formatting all commits on one line each."
        }
    },
    {
        id: 11,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Medium",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Staging Area",
        codeSnippet: "$ git diff\n$ git diff --staged",
        question: "In technical interviews at Accenture and Capgemini, candidates are often asked: What is the fundamental difference between `git diff` and `git diff --staged` (or `--cached`)?",
        options: [
            "`git diff` compares local with remote; `git diff --staged` compares staging with working directory.",
            "`git diff` shows unstaged modifications in the working tree; `git diff --staged` shows changes that have been added to the staging area waiting to be committed.",
            "`git diff` only checks file permissions; `git diff --staged` checks file contents.",
            "They are exact synonyms with identical outputs under all conditions."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git diff shows unstaged changes; git diff --staged shows staged changes waiting to be committed.",
            why: "`git diff` compares Working Directory against Staging Area (Index). `git diff --staged` (or `--cached`) compares Staging Area against the latest commit (HEAD).",
            placementTakeaway: "Golden Rule: Check `git diff` BEFORE `git add`; check `git diff --staged` BEFORE `git commit`.",
            placementTrap: "Assuming running `git diff` after `git add .` will show the changes. `git diff` will output nothing because changes are now staged!"
        }
    },
    {
        id: 12,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Staging Area",
        codeSnippet: "$ git add .",
        question: "When executed in the root directory of a project, what does the command `git add .` do?",
        options: [
            "It permanently deletes all untracked files from the hard drive.",
            "It adds all new, modified, and tracked deleted files in the current directory and subdirectories to the staging area.",
            "It commits all files immediately to the local repository with an auto-generated timestamp.",
            "It uploads all files directly to the remote GitHub main branch."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It stages all new, modified, and tracked files in the current directory tree for the next commit.",
            why: "The `.` represents the current directory. In modern Git (version 2.x+), `git add .` stages new files, modifications, and deletions from the current folder down.",
            placementTakeaway: "`git add` moves changes from the Working Directory into the Staging Area (Index). It does NOT commit.",
            placementTrap: "Confusing 'staging' (`git add`) with 'committing' (`git commit`)."
        }
    },
    {
        id: 13,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Working Directory",
        question: "What is the recommended Git command to rename a tracked file `oldController.js` to `newController.js` so that Git tracks the rename cleanly?",
        options: [
            "git rename oldController.js newController.js",
            "git mv oldController.js newController.js",
            "git update oldController.js -> newController.js",
            "git file-rename oldController.js newController.js"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git mv oldController.js newController.js",
            why: "`git mv` renames the file in the working directory AND stages the deletion of the old path and addition of the new path in one atomic step.",
            placementTakeaway: "`git mv` is equivalent to: `mv old new` followed by `git add new` and `git rm old`.",
            placementTrap: "Selecting `git rename`, which does not exist in standard Git CLI."
        }
    },
    {
        id: 14,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Hard",
        type: "Output Prediction",
        isScenario: false,
        workflowStage: "Staging Area",
        codeSnippet: "$ echo \"console.log('v1');\" > app.js\n$ git add app.js\n$ echo \"console.log('v2');\" >> app.js\n$ git diff",
        question: "Given the sequence of bash commands above, what will `git diff` display?",
        options: [
            "Both v1 and v2 lines as newly added.",
            "Nothing at all, because app.js was already added with `git add`.",
            "Only the newly appended line (+console.log('v2');), because it is in the working directory and not yet staged.",
            "An error indicating that app.js is in an invalid staging state."
        ],
        correct: 2,
        explanation: {
            correctAnswer: "Only the line (+console.log('v2');) because it is unstaged in the working directory.",
            why: "The first line `v1` was staged via `git add`. The second line `v2` was written to `app.js` after staging. `git diff` inspects differences between working directory and staging area, so it only sees `v2`.",
            placementTakeaway: "A file can be partially staged and partially unstaged at the same time!",
            placementTrap: "Thinking a file is either 100% staged or 100% unstaged. Git stages snapshots of content, not file handles."
        }
    },
    {
        id: 15,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Staging Area",
        codeSnippet: "Modified files:\n- auth.js (security fix)\n- profile.css (styling tweak)\n- readme.md (documentation)",
        question: "A developer modifies three files as shown above, but team guidelines require atomic commits (one logical change per commit). What is the correct command sequence to commit only the security fix first?",
        options: [
            "git commit -a -m \"Fix auth security\"",
            "git add auth.js && git commit -m \"Fix auth security\"",
            "git commit --only auth.js --ignore-others",
            "git push origin auth.js -m \"Fix auth security\""
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git add auth.js && git commit -m \"Fix auth security\"",
            why: "Staging allows granular control over what goes into each commit. By staging only `auth.js` with `git add auth.js`, the other modified files remain safely in the working directory for subsequent commits.",
            placementTakeaway: "The purpose of the Staging Area is specifically to build crafted, atomic commits.",
            placementTrap: "Using `git commit -a -m \"...\"` which automatically stages ALL modified tracked files, violating the atomic commit requirement!"
        }
    },
    {
        id: 16,
        topic: "Essential Commands",
        topicId: "essential_commands",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ git log --graph --oneline --all",
        question: "What is the primary benefit of running `git log --graph --oneline --all` in a terminal?",
        options: [
            "It generates a PNG image file containing an architectural diagram of the system.",
            "It prints an ASCII text-based visual branch graph showing branch divergences, merges, and commits across all local and remote branches.",
            "It checks code quality and plots cyclomatic complexity metrics over time.",
            "It lists all files currently locked by other team members on GitHub."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It displays an ASCII-art visual graph showing branches, merges, and commits across the entire repo.",
            why: "The `--graph` flag draws an ASCII branch tree on the left margin, `--oneline` keeps each commit compact, and `--all` includes commits from all branches (not just the current HEAD).",
            placementTakeaway: "This is the most powerful native CLI visualization trick in Git; MNC interviewers love asking for it.",
            placementTrap: "Assuming Git CLI cannot visualize branch graphs without a GUI tool like GitKraken or GitHub Desktop."
        }
    },

    // ---------------------------------------------------------
    // 4. WORKING DIRECTORY & STAGING (5 Questions)
    // ---------------------------------------------------------
    {
        id: 17,
        topic: "Working Directory & Staging",
        topicId: "working_staging_repo",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Working Directory",
        question: "Which of the following represents the correct sequential path a file's content takes in the standard Git lifecycle?",
        options: [
            "Remote Repository -> Staging Area -> Working Directory",
            "Working Directory -> Staging Area (Index) -> Local Repository (HEAD)",
            "Staging Area -> Working Directory -> Remote Repository",
            "Local Repository -> Working Directory -> Staging Area"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Working Directory -> Staging Area (Index) -> Local Repository (HEAD)",
            why: "1. You edit files in the Working Directory. 2. You stage them with `git add` into the Staging Area (Index). 3. You commit them with `git commit` into the Local Repository.",
            placementTakeaway: "The 'Three Trees of Git' (Working Tree, Index, HEAD) is a core conceptual question in technical placements.",
            placementTrap: "Skipping the staging area and assuming files go directly from the working directory into commits."
        }
    },
    {
        id: 18,
        topic: "Working Directory & Staging",
        topicId: "working_staging_repo",
        difficulty: "Medium",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Staging Area",
        codeSnippet: "$ git add secrets.json\n# Developer realized secrets.json should not be staged!",
        question: "A developer accidentally runs `git add secrets.json`. Which modern command will safely UNSTAGE the file without erasing their edits in the working directory?",
        options: [
            "git delete --staged secrets.json",
            "git restore --staged secrets.json",
            "git remove secrets.json",
            "git drop secrets.json"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git restore --staged secrets.json",
            why: "`git restore --staged <file>` copies the file from HEAD to the Staging Area, removing it from staging while leaving your edits in the working directory intact. (Older equivalent: `git reset HEAD <file>`).",
            placementTakeaway: "Git 2.23 introduced `git restore` to make undoing working tree and staging changes clean and intuitive.",
            placementTrap: "Running `git rm secrets.json` or `git checkout secrets.json` which could delete your edits from disk!"
        }
    },
    {
        id: 19,
        topic: "Working Directory & Staging",
        topicId: "working_staging_repo",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Working Directory",
        codeSnippet: "$ # Discard all unstaged modifications in tracked files",
        question: "Which command discards all unstaged local changes in tracked files, reverting them back to the state of the last commit?",
        options: [
            "git restore .",
            "git erase --all",
            "git revert --force",
            "git discard ."
        ],
        correct: 0,
        explanation: {
            correctAnswer: "git restore .",
            why: "`git restore .` (or historically `git checkout -- .`) wipes out unstaged modifications in all tracked files across the current directory, restoring them to HEAD.",
            placementTakeaway: "Caution: This operation is destructive for unstaged changes; you cannot recover discarded unstaged edits via Git.",
            placementTrap: "Selecting `git revert`, which creates a new commit inverting historical commits, rather than discarding unstaged working files."
        }
    },
    {
        id: 20,
        topic: "Working Directory & Staging",
        topicId: "working_staging_repo",
        difficulty: "Hard",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Working Directory",
        question: "You are midway through editing code on `feature-payment` with uncommitted changes. Your manager asks you to urgently switch to `main` to test a bug. Git blocks checkout because your changes would be overwritten. What is the cleanest solution?",
        options: [
            "Delete your local repository and clone fresh from GitHub.",
            "Run `git stash` to shelve uncommitted work onto a dirty working directory stack, switch to main, and later return and run `git stash pop`.",
            "Run `git reset --hard` to wipe all progress and start fresh later.",
            "Create a dummy commit with message 'asdf' and push it directly to production main."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Use `git stash` to temporarily save changes, switch branches, then `git stash pop` when back.",
            why: "`git stash` takes uncommitted changes (both staged and unstaged), saves them on an internal stack, and reverts your working tree to a clean HEAD state, enabling seamless branch switching.",
            placementTakeaway: "Stashing is the gold-standard workflow in software companies when interrupted by high-priority tasks.",
            placementTrap: "Making junk commits on the branch or discarding work with `git reset --hard`."
        }
    },
    {
        id: 21,
        topic: "Working Directory & Staging",
        topicId: "working_staging_repo",
        difficulty: "Hard",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Working Directory",
        codeSnippet: "$ git stash list\nstash@{0}: WIP on feature-auth: 4a2e1d Add login\nstash@{1}: WIP on bugfix: 8c3b9f Fix typo",
        question: "A developer has multiple stashes stored as shown above. How can they inspect the exact file diffs contained inside `stash@{0}` WITHOUT applying or popping it?",
        options: [
            "git stash open stash@{0}",
            "git stash show -p stash@{0}",
            "git stash read stash@{0}",
            "git diff --stash-only 0"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git stash show -p stash@{0}",
            why: "`git stash show` summarizes modified files in a stash. Adding the `-p` (or `--patch`) flag shows the full unified diff of the stashed contents.",
            placementTakeaway: "Checking stashes before popping prevents unintended merge conflicts.",
            placementTrap: "Using `git stash pop` immediately, which modifies the working directory and drops the stash from the list."
        }
    },

    // ---------------------------------------------------------
    // 5. COMMITS & HISTORY (4 Questions)
    // ---------------------------------------------------------
    {
        id: 22,
        topic: "Commits",
        topicId: "commits_history",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ git commit -m \"Fix null pointer exception in payment gateway\"",
        question: "What does the `-m` flag signify in the command `git commit -m \"...\"`?",
        options: [
            "It runs a mandatory unit test suite before committing.",
            "It specifies the commit log message inline directly from the terminal without opening an external text editor (like vim or nano).",
            "It merges the commit directly into the master branch.",
            "It marks the commit as a 'Major' version release."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It allows providing the commit message inline directly in the command.",
            why: "Without `-m`, Git launches the default system text editor (such as Vim, Nano, or VS Code) prompting the user to write a commit message.",
            placementTakeaway: "Always provide clear, imperative commit messages in MNC projects (e.g. 'Fix login redirect bug').",
            placementTrap: "Thinking `-m` means 'merge' or 'main'."
        }
    },
    {
        id: 23,
        topic: "Commits",
        topicId: "commits_history",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ git add forgottenFile.js\n$ git commit --amend --no-edit",
        question: "What is the exact effect of executing the two commands shown above?",
        options: [
            "It creates a duplicate commit with a blank message.",
            "It includes forgottenFile.js into the most recent commit, keeping the previous commit message without creating an extra new commit.",
            "It undoes the previous commit and deletes forgottenFile.js permanently.",
            "It sends forgottenFile.js to GitHub without author metadata."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It amends the previous commit to include the staged file without changing the commit message.",
            why: "`--amend` combines staged changes with the immediately preceding commit, producing a new commit object that replaces the old one. `--no-edit` retains the existing message.",
            placementTakeaway: "`--amend` is the standard tool to fix a commit right after making it (e.g., missed file, typo).",
            placementTrap: "CRITICAL: Never amend commits that have already been pushed to a shared public branch, as it rewrites history!"
        }
    },
    {
        id: 24,
        topic: "Commits",
        topicId: "commits_history",
        difficulty: "Medium",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "How does Git uniquely identify every commit object in its repository history?",
        options: [
            "Sequential auto-incrementing integers (e.g., Commit #1, Commit #2, Commit #3).",
            "A cryptographic 40-character hexadecimal SHA-1 hash generated from the tree, parent commit, author, timestamp, and message.",
            "The author's operating system MAC address combined with their GitHub username.",
            "A randomized UUID assigned by GitHub's central load balancer."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "A 40-character hexadecimal cryptographic hash calculated from the commit's contents and metadata.",
            why: "Git uses content-addressable storage. Any change to code, author name, timestamp, or parent commit will result in a completely different SHA hash, guaranteeing data integrity.",
            placementTakeaway: "Because of cryptographic hashing, Git is an append-only verifiable Directed Acyclic Graph (DAG).",
            placementTrap: "Thinking Git uses sequential version numbers like database primary keys (1, 2, 3...)."
        }
    },
    {
        id: 25,
        topic: "Commits",
        topicId: "commits_history",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Local Repository",
        question: "A fresher committed with the message `git commit -m \"Fix typo in autth\"`. Before pushing to GitHub, they notice the spelling mistake 'autth'. What is the cleanest, professional way to correct the message without creating a new commit?",
        options: [
            "Delete the repository and re-type the commit.",
            "Run `git commit --amend -m \"Fix typo in auth\"`.",
            "Run `git revert HEAD` followed by `git commit -m \"Fix typo in auth\"`.",
            "Push to GitHub and edit the message on github.com."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Run `git commit --amend -m \"Fix typo in auth\"`",
            why: "Since the commit is still purely local (not pushed yet), amending the message is safe, clean, and produces a single tidy commit in history.",
            placementTakeaway: "Clean commit history is valued in MNC technical rounds. Amending before pushing is best practice.",
            placementTrap: "Making a second commit saying 'Fixed typo in commit message', which litters project history."
        }
    },

    // ---------------------------------------------------------
    // 6. BRANCHING (7 Questions)
    // ---------------------------------------------------------
    {
        id: 26,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "Which single command creates a new branch named `feature-login` AND immediately switches your working tree to it?",
        options: [
            "git branch --create feature-login",
            "git checkout -b feature-login",
            "git goto -new feature-login",
            "git make-branch feature-login"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git checkout -b feature-login (or git switch -c feature-login)",
            why: "The `-b` flag tells `git checkout` to create the branch if it doesn't exist and switch to it in one command. (In newer Git versions, `git switch -c feature-login` does the same).",
            placementTakeaway: "`git checkout -b <name>` is one of the most tested commands across TCS, Infosys, and Wipro exams.",
            placementTrap: "Running `git branch feature-login` alone only creates the branch—it does NOT switch to it."
        }
    },
    {
        id: 27,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "Which command lists BOTH local branches and remote-tracking branches in the terminal?",
        options: [
            "git branch -a",
            "git branch --remote-only",
            "git list --branches",
            "git show-branches -all"
        ],
        correct: 0,
        explanation: {
            correctAnswer: "git branch -a",
            why: "`-a` stands for 'all'. It outputs local branches (in green/standard text) and remote tracking branches (prefixed with `remotes/origin/` in red).",
            placementTakeaway: "Use `git branch -a` to verify if a colleague's newly pushed branch is visible on your machine.",
            placementTrap: "`git branch` without flags only lists local branches."
        }
    },
    {
        id: 28,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Medium",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "In Git architecture, what does the special pointer `HEAD` represent?",
        options: [
            "The very first initial commit ever created in the repository's history.",
            "A pointer to the currently checked-out branch reference or current commit in the working tree.",
            "The root directory path on the local operating system.",
            "The primary administrator of the GitHub organization."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "A pointer referencing the current active branch or commit in your working directory.",
            why: "When you switch branches, `HEAD` moves to point to the new branch reference. When you make a commit, the new commit becomes the child of whatever `HEAD` was pointing to.",
            placementTakeaway: "Think of `HEAD` as 'YOU ARE HERE' on a shopping mall directory map.",
            placementTrap: "Confusing `HEAD` (current commit/branch) with `origin/main` (remote branch pointer)."
        }
    },
    {
        id: 29,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ git branch -d feature-search\nerror: The branch 'feature-search' is not fully merged.\nIf you are sure you want to delete it, run 'git branch -D feature-search'.",
        question: "What is the key functional difference between `git branch -d` and `git branch -D`?",
        options: [
            "`-d` deletes remote branches; `-D` deletes local branches.",
            "`-d` performs a safe deletion (refusing to delete if the branch has unmerged commits); `-D` forces deletion regardless of merge status.",
            "`-d` deletes only commit logs; `-D` deletes the underlying files from disk.",
            "`-d` is deprecated in Git 2.0 and replaced by `-D`."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "`-d` is safe delete (checks for merge); `-D` is force delete (`--delete --force`).",
            why: "`git branch -d` acts as a safety guardrail preventing accidental loss of unmerged code. `-D` overrides this check when you deliberately want to abandon experimental code.",
            placementTakeaway: "Capitalized flags in Git commands often denote 'force' (e.g. `-D` = `--delete --force`).",
            placementTrap: "Believing `-d` will delete unmerged work without warning."
        }
    },
    {
        id: 30,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Medium",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Local Repository",
        question: "A developer is currently on branch `feature-auth` and realizes the team naming convention requires it to be named `feature-user-auth`. How can they rename the current active branch?",
        options: [
            "git rename-branch feature-user-auth",
            "git branch -m feature-user-auth",
            "git checkout -rename feature-user-auth",
            "git branch --update-name feature-user-auth"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git branch -m feature-user-auth",
            why: "The `-m` (move/rename) flag renames a branch. When called with a single argument on the active branch, it renames the current branch to that new name.",
            placementTakeaway: "Syntax: `git branch -m <old-name> <new-name>` or just `git branch -m <new-name>` if already on it.",
            placementTrap: "Trying to delete the branch while currently on it (Git will block you from deleting the checked-out branch)."
        }
    },
    {
        id: 31,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Hard",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Working Directory",
        codeSnippet: "$ git switch main\nerror: Your local changes to the following files would be overwritten by checkout:\n    config.json\nPlease commit your changes or stash them before you switch branches.\nAborting",
        question: "Why did Git abort the branch switch above instead of silently overwriting `config.json`?",
        options: [
            "Git crashed because the hard drive filesystem is read-only.",
            "Git enforces safety: `config.json` has uncommitted modifications locally that differ from `config.json` on the target branch `main`, so switching would cause data loss.",
            "`main` is a protected branch that can never be checked out locally.",
            "The user has insufficient sudo administrator privileges."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Git protects your uncommitted work from being overwritten by incoming files from the target branch.",
            why: "If a file with uncommitted local changes differs between the current branch and target branch, Git protects you by refusing checkout until you either commit or stash.",
            placementTakeaway: "Solution: Either `git stash`, commit the change, or discard it with `git restore config.json` before switching.",
            placementTrap: "Assuming Git will automatically merge uncommitted changes into the new branch without error."
        }
    },
    {
        id: 32,
        topic: "Branching",
        topicId: "branching",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "Starting in Git 2.23, why did the Git team introduce the two separate commands `git switch` and `git restore` to supplement `git checkout`?",
        options: [
            "Because `git checkout` was written in an obsolete language that modern operating systems cannot compile.",
            "`git checkout` was overloaded with too many unrelated responsibilities (switching branches AND restoring files); splitting them improves clarity and safety.",
            "`git switch` only works on GitHub Enterprise servers.",
            "`git restore` is only used for cloud backups."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "`git checkout` was heavily overloaded; splitting it into `switch` (branches) and `restore` (files) provides clear, safe separation.",
            why: "Historically `git checkout` was used to switch branches, create branches, and discard modified working files. A small typo could accidentally discard code. Now `git switch` handles branches and `git restore` handles files.",
            placementTakeaway: "MNC interviewers ask this to test if your Git knowledge is up to date with modern best practices.",
            placementTrap: "Thinking `git checkout` is removed. It is still fully supported for backwards compatibility."
        }
    },

    // ---------------------------------------------------------
    // 7. MERGE & CONFLICTS (6 Questions)
    // ---------------------------------------------------------
    {
        id: 33,
        topic: "Merge & Conflicts",
        topicId: "merge_conflicts",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        codeSnippet: "$ git checkout main\n$ git merge feature-ticket\nUpdating 3a1b2c..8d7e6f\nFast-forward\n server.js | 4 ++--\n 1 file changed, 2 insertions(+), 2 deletions(-)",
        question: "When does Git perform a 'Fast-forward' merge as shown above instead of creating a 3-way merge commit?",
        options: [
            "Only when the merge operation executes in under 100 milliseconds.",
            "When the target branch (`main`) has had no new commits since the feature branch was branched off, allowing Git to simply move the branch pointer forward.",
            "Only when merging code written in C++ or Go.",
            "When the developer passes the `--force` flag."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "When no new commits have occurred on the target branch since the branch diverged.",
            why: "Because history is linear and uninterrupted, Git does not need to reconcile diverging files; it simply advances the `main` pointer forward to match the tip of `feature-ticket`.",
            placementTakeaway: "Fast-forward creates no extra merge commit. If you want an explicit merge commit anyway, use `git merge --no-ff`.",
            placementTrap: "Believing every single `git merge` command creates a merge commit."
        }
    },
    {
        id: 34,
        topic: "Merge & Conflicts",
        topicId: "merge_conflicts",
        difficulty: "Medium",
        type: "Output Prediction",
        isScenario: false,
        workflowStage: "Working Directory",
        codeSnippet: "<<<<<<< HEAD\nconst API_URL = \"https://prod.api.com\";\n=======\nconst API_URL = \"https://staging.api.com\";\n>>>>>>> feature-env",
        question: "During a merge conflict, Git injects standard conflict markers as shown above. Which portion represents the changes present on the CURRENT branch you are on?",
        options: [
            "The code between `=======` and `>>>>>>> feature-env`",
            "The code between `<<<<<<< HEAD` and `=======`",
            "Both sections combined sequentially",
            "Neither; conflict markers only show remote GitHub changes"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "The content between `<<<<<<< HEAD` and `=======` represents the current branch.",
            why: "`HEAD` always denotes your current checked-out branch. The bottom section (between `=======` and `>>>>>>> feature-env`) shows the incoming changes from the branch being merged.",
            placementTakeaway: "Top = Ours (HEAD); Bottom = Theirs (Incoming). The `=======` is the divider.",
            placementTrap: "Inverting 'HEAD' and the incoming branch name during conflict resolution."
        }
    },
    {
        id: 35,
        topic: "Merge & Conflicts",
        topicId: "merge_conflicts",
        difficulty: "Medium",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Staging Area",
        question: "What is the correct sequential procedure a developer must follow to successfully resolve a merge conflict in Git?",
        options: [
            "1. Run `git push --force` -> 2. Delete the remote branch -> 3. Re-clone repository.",
            "1. Manually edit conflicting files to keep desired code -> 2. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) -> 3. Run `git add <file>` -> 4. Run `git commit`.",
            "1. Run `git clean -fd` -> 2. Run `git merge --skip` -> 3. Restart computer.",
            "1. Rename conflicting files with a `.bak` extension -> 2. Run `git commit --ignore-conflicts`."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Edit files, remove conflict markers, stage with git add, then finalize with git commit.",
            why: "Git pauses the merge when conflicts arise. You decide the correct code, delete all markers, stage the resolved file (`git add`), and complete the merge with `git commit`.",
            placementTakeaway: "Running `git add` on a conflicted file signals to Git: 'I have verified and resolved this conflict'.",
            placementTrap: "Forgetting to delete the marker lines (`<<<<<<<`, `=======`), causing syntax errors in production build!"
        }
    },
    {
        id: 36,
        topic: "Merge & Conflicts",
        topicId: "merge_conflicts",
        difficulty: "Hard",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Working Directory",
        codeSnippet: "$ git merge feature-complex\nAuto-merging router.js\nCONFLICT (content): Merge conflict in router.js\nAutomatic merge failed; fix conflicts and then commit the result.",
        question: "A fresher encounters 25 merge conflicts while attempting a merge and panics. What command safely stops the merge and reverts the repository back to the exact clean state before `git merge` was executed?",
        options: [
            "git merge --cancel",
            "git merge --abort",
            "git merge --rollback",
            "git undo merge"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git merge --abort",
            why: "`git merge --abort` immediately terminates the in-progress merge conflict state and restores the working directory to the pre-merge commit.",
            placementTakeaway: "Never panic during conflicts; `git merge --abort` is your emergency exit button.",
            placementTrap: "Running `git reset --hard` blindly, which might discard unrelated uncommitted changes."
        }
    },
    {
        id: 37,
        topic: "Merge & Conflicts",
        topicId: "merge_conflicts",
        difficulty: "Hard",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "What is the primary architectural difference between `git merge` and `git rebase`, and why is rebasing a shared public branch considered dangerous?",
        options: [
            "`git merge` deletes commits, while `git rebase` duplicates them on GitHub.",
            "`git merge` preserves true historical timeline and creates a merge commit; `git rebase` rewrites commit history by replaying commits atop another base, which disrupts teammates if already pushed.",
            "`git merge` is only for JavaScript projects; `git rebase` is for Python and Java projects.",
            "There is no difference; they are different compiler flags for the same Git C-library function."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Merge preserves history with a merge commit; rebase rewrites commit history by replaying commits atop a new base.",
            why: "Rebasing creates brand-new commit SHAs for existing commits. If other developers have already based work on the old commits, their history will diverge completely, causing chaos.",
            placementTakeaway: "The Golden Rule of Rebasing: Never rebase commits that have been pushed to a shared public branch (like `main`).",
            placementTrap: "Confusing the clean linear aesthetic of rebase with historical preservation of merge."
        }
    },
    {
        id: 38,
        topic: "Merge & Conflicts",
        topicId: "merge_conflicts",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Working Directory",
        question: "Developer A and Developer B both branched from `main` at 9:00 AM. At 11:00 AM, Developer A modified lines 15-20 of `utils.js` and merged into `main`. At 11:30 AM, Developer B modified lines 80-85 of the same `utils.js` and attempts to merge. Will a merge conflict occur?",
        options: [
            "Yes, because two people touched the same file name, which automatically triggers a conflict in Git.",
            "No, Git's 3-way merge algorithm will automatically resolve it cleanly because the modifications occurred on different, non-overlapping lines.",
            "Yes, because Developer B committed after Developer A.",
            "No, because Git automatically discards Developer A's previous changes."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "No, Git will auto-merge cleanly because modifications were on different lines.",
            why: "Git resolves non-overlapping line edits in the same file automatically using 3-way merge logic. Conflicts ONLY occur when the same lines (or directly adjacent lines) are modified differently.",
            placementTakeaway: "Touching the same file does NOT guarantee a conflict. Only conflicting edits on the SAME lines do.",
            placementTrap: "Believing that any concurrent edit to a single file causes a merge conflict."
        }
    },

    // ---------------------------------------------------------
    // 8. PUSH, PULL, FETCH & REMOTE (6 Questions)
    // ---------------------------------------------------------
    {
        id: 39,
        topic: "Push, Pull & Fetch",
        topicId: "push_pull_fetch",
        difficulty: "Easy",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Remote Repository",
        codeSnippet: "$ git remote -v\norigin  https://github.com/company/portal.git (fetch)\norigin  https://github.com/company/portal.git (push)",
        question: "What does the `-v` flag display when running `git remote -v`?",
        options: [
            "The version number of the Git software installed on the machine.",
            "The verbose output showing the remote nickname alongside the exact fetch and push URLs.",
            "The volume capacity remaining on the GitHub remote server.",
            "The validation checksum of the repository's SSL certificates."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Verbose output displaying remote names and their configured fetch/push URLs.",
            why: "`git remote` lists only names (e.g. `origin`). Adding `-v` (verbose) lists the full remote URL associated with reading (fetch) and writing (push).",
            placementTakeaway: "Essential diagnostic command when pushing to the wrong repo or troubleshooting 403 errors.",
            placementTrap: "Confusing `git remote -v` with `git --version`."
        }
    },
    {
        id: 40,
        topic: "Push, Pull & Fetch",
        topicId: "push_pull_fetch",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Remote Repository",
        question: "What is the single most important technical difference between `git fetch` and `git pull`?",
        options: [
            "`git fetch` uploads local files to GitHub; `git pull` downloads them.",
            "`git fetch` downloads remote changes into remote-tracking branches without modifying your local working branch; `git pull` does a fetch AND immediately merges those changes into your current branch.",
            "`git fetch` requires administrative sudo access; `git pull` is for guest users.",
            "There is no difference; `git fetch` was renamed to `git pull` in 2021."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git fetch downloads without merging; git pull fetches and automatically merges (`pull = fetch + merge`).",
            why: "`git fetch` updates `origin/main` safely in the background, letting you inspect differences before merging. `git pull` runs `git fetch` followed immediately by `git merge FETCH_HEAD`.",
            placementTakeaway: "The #1 most asked Git question across all Indian IT placement drives: `git pull = git fetch + git merge`.",
            placementTrap: "Freshers often believe `git fetch` alters their working directory files. It does not touch your working tree."
        }
    },
    {
        id: 41,
        topic: "Push, Pull & Fetch",
        topicId: "push_pull_fetch",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Remote Repository",
        codeSnippet: "$ git push -u origin feature-cart",
        question: "What is the specific purpose of the `-u` (or `--set-upstream`) flag in the command above?",
        options: [
            "It forces an unauthenticated push bypassing password checks.",
            "It links the local branch to the remote branch on `origin`, so future pushes and pulls on this branch only require typing `git push` or `git pull`.",
            "It automatically upgrades Git to the newest upstream version.",
            "It unlocks the remote repository for public read access."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It establishes tracking between the local branch and remote branch for future shorthand commands.",
            why: "Without `-u`, Git doesn't know where to push next time. With `-u`, Git records upstream tracking in `.git/config`, enabling convenient `git push` and `git pull` without parameters.",
            placementTakeaway: "First push of a new branch: always use `git push -u origin <branch-name>`.",
            placementTrap: "Thinking `-u` stands for 'user' or 'urgent'."
        }
    },
    {
        id: 42,
        topic: "Push, Pull & Fetch",
        topicId: "push_pull_fetch",
        difficulty: "Medium",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Remote Repository",
        codeSnippet: "! [rejected]        main -> main (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/org/repo.git'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally.",
        question: "A fresher tries to push to `main` and receives the error shown above. What is the root cause, and what is the standard placement-recommended resolution?",
        options: [
            "Cause: Remote GitHub repo is full. Resolution: Delete past commits on GitHub.",
            "Cause: Teammates pushed new commits to remote that the developer does not have locally. Resolution: Run `git pull` (or `git pull --rebase`), resolve any conflicts locally, then push.",
            "Cause: GitHub rejected the password. Resolution: Re-install Git CLI.",
            "Cause: The developer's branch is corrupted. Resolution: Run `git push --force` to overwrite the remote."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "The remote has commits you lack locally; resolve by running `git pull`, integrating changes, then pushing.",
            why: "Git prevents accidental data loss. If someone else pushed to remote `main`, your push is non-fast-forward. You must download and integrate their work before Git permits you to push yours.",
            placementTakeaway: "Never run `git push --force` on shared company branches! Always pull, integrate, and then push.",
            placementTrap: "Blindly using `--force` to make the error go away, which destroys your teammate's pushed commits!"
        }
    },
    {
        id: 43,
        topic: "Push, Pull & Fetch",
        topicId: "push_pull_fetch",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: false,
        workflowStage: "Remote Repository",
        question: "Before merging incoming changes from teammates into your production branch, you want to inspect exactly which commits they made on `origin/main` without affecting your local code. What is the professional command sequence?",
        options: [
            "git pull --dry-run && git inspect",
            "git fetch origin && git log HEAD..origin/main --oneline",
            "git clone origin/main temp-folder",
            "git merge origin/main --preview"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git fetch origin && git log HEAD..origin/main --oneline",
            why: "`git fetch origin` gets remote updates without touching your working tree. `git log HEAD..origin/main` lists all commits that exist on remote that are not yet in your local branch.",
            placementTakeaway: "Professional development workflow: Fetch first, review differences, then merge.",
            placementTrap: "Running `git pull`, which immediately forces a merge without giving you a chance to review incoming code."
        }
    },
    {
        id: 44,
        topic: "Push, Pull & Fetch",
        topicId: "push_pull_fetch",
        difficulty: "Hard",
        type: "Troubleshooting",
        isScenario: false,
        workflowStage: "Remote Repository",
        question: "If a developer must update a private personal feature branch after an interactive rebase, why is `git push --force-with-lease` preferred over `git push --force`?",
        options: [
            "`--force-with-lease` is 10 times faster because it skips checksum validation.",
            "`--force-with-lease` checks if anyone else has pushed new commits to the remote branch since your last fetch; if so, it aborts instead of blindly overwriting their work.",
            "`--force-with-lease` sends an SMS notification to the repository administrator.",
            "`--force-with-lease` encrypts the commits with RSA keys during transmission."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "It verifies no one else updated the remote branch before forcing, preventing accidental destruction of others' commits.",
            why: "`--force` destroys whatever is on remote indiscriminately. `--force-with-lease` only forces if the remote ref matches what you expected. If a teammate pushed in the interim, it safely rejects.",
            placementTakeaway: "Senior engineers and MNC tech leads look for candidates who know `--force-with-lease`.",
            placementTrap: "Thinking `--force` and `--force-with-lease` are identical. The 'lease' check is a vital safety net."
        }
    },

    // ---------------------------------------------------------
    // 9. FORK & PULL REQUESTS (4 Questions)
    // ---------------------------------------------------------
    {
        id: 45,
        topic: "Fork & Pull Requests",
        topicId: "fork_pull_requests",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Remote Repository",
        question: "What is the fundamental difference between 'Forking' and 'Cloning' in the GitHub ecosystem?",
        options: [
            "Forking is for private repos; Cloning is for public repos.",
            "Forking creates a server-side remote copy of someone else's repository under your own GitHub account; Cloning creates a local copy of a repository on your personal computer.",
            "Forking requires Git CLI commands; Cloning can only be done in a web browser.",
            "Forking is a paid enterprise feature; Cloning is free."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Fork creates a remote copy under your GitHub account; Clone creates a local copy on your computer.",
            why: "Forking happens on GitHub's servers (server-to-server). Cloning transfers the repository from the remote server (GitHub) to your local disk (server-to-client).",
            placementTakeaway: "Classic MNC interview question: 'Fork is GitHub-specific (remote); Clone is a native Git command (local)'.",
            placementTrap: "Looking for a `git fork` command in the Git CLI. (Forking is a GitHub platform feature, not a core Git command)."
        }
    },
    {
        id: 46,
        topic: "Fork & Pull Requests",
        topicId: "fork_pull_requests",
        difficulty: "Medium",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Remote Repository",
        question: "You want to contribute a bugfix to a popular open-source repository on GitHub where you DO NOT have direct push/write permissions. What is the standard contribution workflow?",
        options: [
            "1. Email the zip file to the repo owner -> 2. Wait for confirmation.",
            "1. Fork the repo to your GitHub account -> 2. Clone your fork locally -> 3. Create a feature branch and commit fix -> 4. Push to your fork -> 5. Open a Pull Request to original repo.",
            "1. Clone original repo -> 2. Force push directly to `origin main` using an SSH token.",
            "1. Post the code snippet as an issue comment on GitHub."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Fork -> Clone fork -> Branch & commit -> Push to fork -> Submit Pull Request (PR).",
            why: "Since you lack write permissions on the original repo, you make changes in your own fork. A Pull Request asks the original maintainers to 'pull' your proposed changes into their codebase.",
            placementTakeaway: "The Forking Workflow is the universal standard for open-source and large enterprise contributions.",
            placementTrap: "Attempting to push directly to third-party repos, which fails with `403 Forbidden`."
        }
    },
    {
        id: 47,
        topic: "Fork & Pull Requests",
        topicId: "fork_pull_requests",
        difficulty: "Medium",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Remote Repository",
        codeSnippet: "$ git remote add upstream https://github.com/original-org/core-project.git",
        question: "In the open-source fork workflow, why do developers configure a second remote conventionally named `upstream` as shown above?",
        options: [
            "To send daily automated backup snapshots to Google Drive.",
            "To track and sync new changes from the original base repository into their local fork as the project evolves.",
            "To grant their local team members SSH root access.",
            "To deploy the code automatically to AWS Elastic Beanstalk."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "To fetch updates from the original parent repository and keep your fork up to date.",
            why: "`origin` points to your personal GitHub fork. `upstream` points to the authoritative central repository you forked from. Running `git fetch upstream` keeps you synchronized with parent project changes.",
            placementTakeaway: "`origin` = my fork; `upstream` = original parent repository.",
            placementTrap: "Assuming forks automatically stay in sync with the upstream repository without manual or automated sync."
        }
    },
    {
        id: 48,
        topic: "Fork & Pull Requests",
        topicId: "fork_pull_requests",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Remote Repository",
        question: "A developer submits a Pull Request on GitHub. The senior reviewer requests two code changes before approving. How should the developer update the active Pull Request?",
        options: [
            "Close the Pull Request, delete the fork, and open a brand-new Pull Request.",
            "Make the requested changes locally on the same feature branch, commit them, and push to their remote branch; GitHub automatically updates the PR with new commits.",
            "Directly edit the code on the reviewer's laptop.",
            "A Pull Request cannot be modified once opened; it must be rejected."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Commit changes on the same branch and push; the open PR updates automatically in real-time.",
            why: "A Pull Request tracks a branch reference, not static code. Any new commits pushed to that feature branch on the head repository automatically appear in the active PR discussion thread.",
            placementTakeaway: "PRs are dynamic living conversations. Just push to the same branch to resolve review feedback.",
            placementTrap: "Opening duplicate PRs for review changes, which annoys reviewers and scatters comments."
        }
    },

    // ---------------------------------------------------------
    // 10. .GITIGNORE & SECURITY (4 Questions)
    // ---------------------------------------------------------
    {
        id: 49,
        topic: ".gitignore",
        topicId: "gitignore_security",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Working Directory",
        codeSnippet: "# .gitignore example\nnode_modules/\n.env\ndist/\n*.log",
        question: "What is the primary role of the `.gitignore` file in a project root?",
        options: [
            "It instructs the Git compiler to skip syntax checking on specified file extensions.",
            "It tells Git which intentional untracked files, build artifacts, sensitive keys, and dependencies to ignore so they are never staged or committed.",
            "It hides files from being seen in the local Windows File Explorer or Mac Finder.",
            "It permanently deletes matching files when `git push` is invoked."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Specifies files and patterns that Git should ignore and never track in version control.",
            why: "Dependencies (`node_modules`), secrets (`.env`), build outputs (`dist/`, `target/`), and temporary logs must never be committed to repos.",
            placementTakeaway: "Every production project requires a well-maintained `.gitignore` checked into Git.",
            placementTrap: "Thinking `.gitignore` only applies to GitHub. It prevents `git status` and `git add` locally from tracking them."
        }
    },
    {
        id: 50,
        topic: ".gitignore",
        topicId: "gitignore_security",
        difficulty: "Medium",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Staging Area",
        codeSnippet: "$ git commit -m \"Add config with API keys\"\n# Later, developer adds '.env' to .gitignore\n$ echo \"DATABASE_URL=xyz\" >> .env\n$ git status\nmodified:   .env",
        question: "A developer committed a `.env` file last week. Today they added `.env` to `.gitignore`, but `git status` STILL shows `.env` as modified. Why?",
        options: [
            "Because `.gitignore` has a 24-hour cache delay on modern operating systems.",
            "Because `.gitignore` only applies to UNTRACKED files; since .env was already committed and tracked in the Git index, Git continues tracking it.",
            "Because `.gitignore` must be written in XML format to work on `.env` files.",
            "Because the file name starts with a dot."
        ],
        correct: 1,
        explanation: {
            correctAnswer: ".gitignore only ignores untracked files. Files already tracked in the index must be untracked explicitly.",
            why: "This is one of the most common placement gotchas: `.gitignore` prevents new files from being tracked. It does NOT retroactively untrack files already in the Git repository database.",
            placementTakeaway: "Adding a file to `.gitignore` does not remove it from Git if it was already committed.",
            placementTrap: "Believing `.gitignore` automatically deletes or untracks existing historical files."
        }
    },
    {
        id: 51,
        topic: ".gitignore",
        topicId: "gitignore_security",
        difficulty: "Hard",
        type: "Command Based",
        isScenario: false,
        workflowStage: "Staging Area",
        question: "Continuing from the previous situation, what is the exact command to tell Git to stop tracking `.env` without deleting the file from your local hard drive?",
        options: [
            "git rm .env",
            "git rm --cached .env",
            "git delete --keep-local .env",
            "git unstage --force .env"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git rm --cached .env",
            why: "`git rm --cached <file>` removes the file from the Git index (staging area/repository tracking) while preserving the physical file untouched in your working directory.",
            placementTakeaway: "`--cached` means 'remove from Git tracking only, keep on disk'. Follow up with `git commit -m \"Untrack .env\"`.",
            placementTrap: "Running `git rm .env` without `--cached`, which deletes your actual `.env` file and credentials from disk!"
        }
    },
    {
        id: 52,
        topic: "GitHub Security Basics",
        topicId: "gitignore_security",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Remote Repository",
        question: "A fresher accidentally pushes a live AWS Secret Access Key to a public GitHub repository. They quickly push a new commit removing the key from the code. Why is this action INSUFFICIENT, and what MUST be done immediately?",
        options: [
            "It is sufficient; once a commit is replaced, previous commits are inaccessible on GitHub.",
            "It is insufficient because the secret remains permanently visible in the repository's public commit history; the AWS key must be REVOKED and rotated immediately in the AWS console.",
            "It is insufficient because GitHub requires paying a fine before deleting keys.",
            "It is sufficient as long as the repository is marked as private within 10 minutes."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "The secret remains in commit history; the credential must be immediately revoked and rotated at the provider.",
            why: "Git retains all historical commit snapshots. Automated scraping bots scan GitHub commits within seconds. Even if you push a commit deleting the file, the key can be viewed in commit history or raw tree objects. The credential is compromised and must be revoked immediately.",
            placementTakeaway: "Golden Rule of Security: A pushed secret is a burned secret. Always revoke/rotate immediately at the root provider.",
            placementTrap: "Thinking that deleting code in a subsequent commit wipes it from Git's historical logs."
        }
    },

    // ---------------------------------------------------------
    // 11. GITHUB ISSUES & COLLABORATION (2 Questions)
    // ---------------------------------------------------------
    {
        id: 53,
        topic: "GitHub Issues",
        topicId: "issues_collaboration",
        difficulty: "Medium",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Remote Repository",
        codeSnippet: "$ git commit -m \"Fix navbar rendering glitch. Closes #42\"",
        question: "When the commit shown above is merged into the default branch on GitHub, what automatic action occurs?",
        options: [
            "GitHub sends an automated email warning to developer #42.",
            "GitHub automatically marks Issue #42 as closed and links the resolving commit in the issue timeline.",
            "GitHub creates 42 duplicate test branches.",
            "The commit message is rejected because special symbol '#' is restricted in GitHub."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "GitHub automatically closes Issue #42 and links the resolving commit.",
            why: "GitHub recognizes special trigger keywords in commit messages and PR descriptions: `Closes #42`, `Fixes #42`, `Resolves #42`. When merged to default branch, the referenced issue is automatically closed.",
            placementTakeaway: "Using `Fixes #X` or `Closes #X` in PRs is standard professional etiquette across all software companies.",
            placementTrap: "Thinking issues must always be manually clicked closed in the browser UI."
        }
    },
    {
        id: 54,
        topic: "GitHub Issues",
        topicId: "issues_collaboration",
        difficulty: "Medium",
        type: "Scenario Based",
        isScenario: false,
        workflowStage: "Remote Repository",
        question: "In an enterprise project at Deloitte or TCS, why do tech leads enable 'Branch Protection Rules' on the `main` branch?",
        options: [
            "To prevent junior developers from cloning the repository to their computers.",
            "To block direct `git push` to `main`, requiring all code to pass automated CI tests and receive mandatory peer code reviews via Pull Requests before merging.",
            "To automatically encrypt all files using AES-256 upon branch checkout.",
            "To restrict developers from using any IDE other than VS Code."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "To prevent direct pushes and enforce pull request reviews and passing CI checks before merging.",
            why: "Branch protection safeguards production stability. It ensures nobody (even senior leads) can accidentally push untested code or force-push to `main` without review.",
            placementTakeaway: "Branch protection is a fundamental pillar of modern enterprise software governance.",
            placementTrap: "Believing branch protection is about file access permissions on the local developer machine."
        }
    },

    // ---------------------------------------------------------
    // 12. GITHUB ACTIONS BASICS (2 Questions)
    // ---------------------------------------------------------
    {
        id: 55,
        topic: "GitHub Actions Basics",
        topicId: "github_actions",
        difficulty: "Medium",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Remote Repository",
        question: "In which directory must CI/CD workflow YAML files be stored in a repository for GitHub Actions to automatically detect and run them?",
        options: [
            "`.github/workflows/`",
            "`.actions/ci/`",
            "`config/github-actions/`",
            "`.git/hooks/workflows/`"
        ],
        correct: 0,
        explanation: {
            correctAnswer: "`.github/workflows/`",
            why: "GitHub Actions strictly requires workflow configuration files (with `.yml` or `.yaml` extensions) to reside in the `.github/workflows/` directory in the repository root.",
            placementTakeaway: "Example path: `.github/workflows/main.yml`. Must know for MNC technical screening.",
            placementTrap: "Placing workflows inside `.git/` (which is never pushed to remote) or `.github/actions/`."
        }
    },
    {
        id: 56,
        topic: "GitHub Actions Basics",
        topicId: "github_actions",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Remote Repository",
        codeSnippet: "name: Node.js CI\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - name: Run Tests\n      run: npm test",
        question: "Based on the GitHub Actions workflow snippet shown above, what triggers this CI pipeline to execute?",
        options: [
            "Every 24 hours at midnight via a cron scheduler.",
            "Whenever code is pushed directly to the `main` branch OR whenever a Pull Request targeting the `main` branch is opened or updated.",
            "Only when a developer manually clicks the 'Run' button inside GitHub Settings.",
            "Whenever a new release tag is created by the repo administrator."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "Whenever code is pushed to `main` or a Pull Request targeting `main` is opened/updated.",
            why: "The `on:` block defines event triggers. Here, `push: branches: [main]` and `pull_request: branches: [main]` specify the exact events that spin up the `ubuntu-latest` runner.",
            placementTakeaway: "Automated test execution on PR creation guarantees buggy code is caught before merge.",
            placementTrap: "Confusing event-driven workflow triggers with scheduled cron triggers (`schedule:`)."
        }
    },

    // ---------------------------------------------------------
    // 13. RESET, REVERT & UNDO (4 Questions)
    // ---------------------------------------------------------
    {
        id: 57,
        topic: "Reset vs Revert",
        topicId: "reset_revert",
        difficulty: "Easy",
        type: "Conceptual",
        isScenario: false,
        workflowStage: "Local Repository",
        question: "What is the core conceptual difference between `git reset` and `git revert`?",
        options: [
            "`git reset` deletes the repository; `git revert` clones it again.",
            "`git reset` moves the branch pointer backward in time (rewriting history); `git revert` records a brand-new commit that applies the exact inverse of a previous commit (preserving history).",
            "`git reset` can only be run on GitHub; `git revert` is run on GitLab.",
            "`git reset` is for uncommitted code; `git revert` is for stashed code."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "reset rewrites history by moving the branch pointer back; revert safely creates a new inverse commit.",
            why: "Because `git revert` does not rewrite existing history, it is safe to use on public shared branches. `git reset` rewrites history and should only be used on private local commits.",
            placementTakeaway: "Rule of thumb: Use `reset` for local private experiments; use `revert` for shared public branches.",
            placementTrap: "Using `git reset` on commits already pushed to remote `main`, causing team desynchronization."
        }
    },
    {
        id: 58,
        topic: "Reset vs Revert",
        topicId: "reset_revert",
        difficulty: "Medium",
        type: "Comparison",
        isScenario: false,
        workflowStage: "Staging Area",
        question: "What happens to your modified files when you run `git reset --soft HEAD~1` compared to `git reset --hard HEAD~1`?",
        options: [
            "`--soft` deletes the files; `--hard` saves them to desktop.",
            "`--soft` undoes the commit but leaves all your changes staged in the Index; `--hard` undoes the commit AND wipes out all changes from both staging and working directory.",
            "`--soft` only changes the commit author; `--hard` changes the timestamp.",
            "`--soft` requires internet connection; `--hard` runs offline."
        ],
        correct: 1,
        explanation: {
            correctAnswer: "`--soft` keeps changes staged in the index; `--hard` completely obliterates changes from disk.",
            why: "Three reset modes: 1. `--soft` (HEAD moves, index & working tree kept). 2. `--mixed` (default: HEAD moves, index reset, working tree kept). 3. `--hard` (HEAD, index, and working tree all wiped clean).",
            placementTakeaway: "`git reset --soft HEAD~1` is the best way to uncommit and restructure your staged changes.",
            placementTrap: "`--hard` is completely irreversible for uncommitted/unstaged working changes. Treat with extreme caution!"
        }
    },
    {
        id: 59,
        topic: "Reset vs Revert",
        topicId: "reset_revert",
        difficulty: "Hard",
        type: "Scenario Based",
        isScenario: true,
        workflowStage: "Remote Repository",
        question: "A commit `f4a8b2c` was merged and pushed to the shared team branch `main` 3 hours ago, but QA discovers it breaks the payment gateway. Which command should the team lead execute to undo this commit safely on `main`?",
        options: [
            "git reset --hard HEAD~1 followed by git push --force",
            "git revert f4a8b2c followed by git push",
            "git delete commit f4a8b2c",
            "git checkout f4a8b2c --destroy"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git revert f4a8b2c followed by git push",
            why: "Because the commit is already shared on the remote `main` branch, running `git reset` and force-pushing would rewrite history for the entire company. `git revert` safely creates a forward-moving commit that undoes `f4a8b2c` without disrupting colleagues.",
            placementTakeaway: "Always use `git revert` on public/shared branches. This is a classic MNC technical lead interview question.",
            placementTrap: "Proposing `git reset --hard` on a shared production branch."
        }
    },
    {
        id: 60,
        topic: "Reset vs Revert",
        topicId: "reset_revert",
        difficulty: "Hard",
        type: "Troubleshooting",
        isScenario: true,
        workflowStage: "Local Repository",
        codeSnippet: "$ git reset --hard HEAD~1\n# Developer suddenly realizes they needed that commit!",
        question: "A developer accidentally ran `git reset --hard HEAD~1` and believes their unpushed commit is gone forever. Which powerful Git command acts as a safety log recording every movement of `HEAD`, allowing them to find the lost commit hash and recover it?",
        options: [
            "git history --recover",
            "git reflog",
            "git restore --lost-found",
            "git undo-history"
        ],
        correct: 1,
        explanation: {
            correctAnswer: "git reflog",
            why: "`git reflog` (reference log) records every time the `HEAD` pointer moves (branch checkout, reset, commit, rebase). Even if a commit was dropped from branch history via hard reset, its SHA remains in reflog for at least 30-90 days until garbage collection.",
            placementTakeaway: "To recover: 1. Run `git reflog` to find the lost SHA -> 2. Run `git reset --hard <lost-SHA>` or `git checkout -b recovery-branch <lost-SHA>`.",
            placementTrap: "Assuming `git log` can show lost commits. `git log` only traces current branch ancestry; `git reflog` traces local HEAD pointer history!"
        }
    }
];

// Export for module systems or global window access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GITHUB_TOPICS, GITHUB_QUESTIONS };
}
