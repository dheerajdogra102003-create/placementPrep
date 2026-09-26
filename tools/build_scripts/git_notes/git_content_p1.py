# git_content_p1.py - Sections 01 to 08 of Git & GitHub Placement Notes

def get_git_part1_html():
    return r"""
    <!-- SECTION 01: GIT FUNDAMENTALS -->
    <article class="note-section" id="sec-01">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 01</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Fundamentals & The Snapshot Model</h2>
      <p class="section-intro">
        Created by Linus Torvalds in 2005, Git is a <strong>Distributed Version Control System (DVCS)</strong> designed for speed, data integrity, and non-linear workflows. In campus placement exams (TCS, Accenture, Infosys), interviewers test whether you understand how Git stores data compared to older version control systems.
      </p>

      <!-- Architecture Diagram: Delta vs Snapshot -->
      <div class="diagram-container">
        <div class="diagram-title">Fundamental Architecture: Deltas (SVN) vs Snapshots (Git)</div>
        <pre class="diagram-art">
Older VCS (SVN, CVS) - Delta / Difference-Based Storage:
Version 1: [ File A ]      [ File B ]      [ File C ]
              |               |               |
Version 2: [ Δ A1  ]       (Unchanged)     [ Δ C1  ]  <-- Stores only diffs; slow to rebuild!
              |                               |
Version 3: (Unchanged)     [ Δ B1  ]       [ Δ C2  ]

Git - Cryptographic Directed Acyclic Graph of Snapshots:
Commit 1 (9a1f): [ File A v1 ]   [ File B v1 ]   [ File C v1 ]
                        ^               ^               ^
                        |               | (Link to v1)  |
Commit 2 (4e8b): [ File A v2 ]   [     *     ]   [ File C v2 ]  <-- Unchanged files stored as pointers!
                        ^               ^               ^
                        | (Link to v2)  |               |
Commit 3 (c3d2): [     *     ]   [ File B v2 ]   [ File C v3 ]
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📸 The Snapshot Philosophy</h4>
          <p>Every time you commit, Git takes a complete picture of what all your files look like at that exact moment. To keep disk space minimal, if a file hasn't changed, Git does not store a duplicate copy—it stores a lightweight pointer to the previously stored identical blob.</p>
        </div>
        <div class="concept-card">
          <h4>🔒 Cryptographic Data Integrity (SHA-1 / SHA-256)</h4>
          <p>Everything in Git is checksummed before it is stored using a 40-character hexadecimal cryptographic hash (e.g. <code>2a4b8c9d...</code>). It is physically impossible to alter file contents or commit history without Git instantly detecting corruption.</p>
        </div>
      </div>

      <!-- Real World Scenario -->
      <div class="scenario-box">
        <div class="scenario-tag">💼 Real-World Scenario: Enterprise Offline Development</div>
        <div class="scenario-title">Developing Without Internet Connectivity</div>
        <div class="scenario-problem">
          An engineer on a flight with zero internet access needs to review commit logs, create 3 feature branches, commit code changes, and perform local diffs. Can they do this with Git?
        </div>
        <div class="scenario-solution">
          <strong>Answer: YES!</strong> Because Git is a <em>Distributed</em> VCS, the complete project history, branches, and commit graph live entirely on the engineer's local machine inside the <code>.git</code> folder. No network connection is needed until they decide to push to a remote server.
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #1</div>
        <div class="trap-desc">
          Never say "Git stores file differences (deltas) like SVN." Git stores <strong>complete snapshots</strong> with pointers to unchanged files. This is precisely why branching and switching in Git is virtually instantaneous!
        </div>
      </div>
    </article>


    <!-- SECTION 02: GIT VS GITHUB -->
    <article class="note-section" id="sec-02">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 02</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git vs GitHub (The Universal Interview Question)</h2>
      <p class="section-intro">
        Confusing Git with GitHub in an HR or technical interview is an immediate red flag. Git is a command-line software tool; GitHub is a cloud hosting platform built on top of Git.
      </p>

      <!-- Comparison Table 1: Git vs GitHub -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Git</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>What is it?</strong></td>
              <td>Open-source, command-line Version Control System software</td>
              <td>Cloud-based hosting service and collaboration platform for Git repos</td>
            </tr>
            <tr>
              <td><strong>Creator</strong></td>
              <td>Linus Torvalds (2005)</td>
              <td>Chris Wanstrath, PJ Hyett, Tom Preston-Werner (2008, acquired by Microsoft)</td>
            </tr>
            <tr>
              <td><strong>Installation</strong></td>
              <td>Installed locally on your personal computer / server</td>
              <td>Web-based platform (SaaS); accessed via browser, CLI, or API</td>
            </tr>
            <tr>
              <td><strong>Internet Requirement</strong></td>
              <td>Works 100% offline for local commits, branches, and logs</td>
              <td>Requires internet access to push, pull, fork, or view PRs</td>
            </tr>
            <tr>
              <td><strong>Core Features</strong></td>
              <td>Tracking changes, staging, committing, branching, merging</td>
              <td>Pull Requests, Issue tracking, Code review, GitHub Actions CI/CD, Project boards</td>
            </tr>
            <tr>
              <td><strong>Alternatives</strong></td>
              <td>Mercurial, Subversion (SVN), Bazaar</td>
              <td>GitLab, Bitbucket, AWS CodeCommit, Azure Repos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="memory-trick">
        <span class="memory-icon">💡</span>
        <div class="memory-content">
          <strong>Placement Memory Trick:</strong> <em>"Git is to GitHub as C++ is to Codeforces."</em> Git is the programming technology; GitHub is the cloud platform where you share and collaborate on it.
        </div>
      </div>
    </article>


    <!-- SECTION 03: VERSION CONTROL SYSTEMS -->
    <article class="note-section" id="sec-03">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 03</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Centralized (CVCS) vs Distributed (DVCS)</h2>
      <p class="section-intro">
        Understanding why the software industry transitioned from Centralized systems (SVN) to Distributed systems (Git) is tested in nearly every technical screening.
      </p>

      <!-- Comparison Table 2: CVCS vs DVCS -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Evaluation Factor</th>
              <th>Centralized VCS (SVN, CVS, Perforce)</th>
              <th>Distributed VCS (Git, Mercurial)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Repository Location</strong></td>
              <td>Single central server; developers only hold shallow working copies</td>
              <td>Every developer holds a <strong>full mirror of the repository and its entire history</strong></td>
            </tr>
            <tr>
              <td><strong>Single Point of Failure</strong></td>
              <td><strong>High Risk:</strong> If the central server crashes and lacks backups, all history is permanently lost!</td>
              <td><strong>Zero Risk:</strong> Every developer's local clone acts as a complete off-site backup.</td>
            </tr>
            <tr>
              <td><strong>Offline Capabilities</strong></td>
              <td>Severely limited (cannot commit, view logs, or branch offline)</td>
              <td>Complete independence (commit, branch, merge, diff all work offline)</td>
            </tr>
            <tr>
              <td><strong>Branching Speed</strong></td>
              <td>Slow (branches are physical directories created on central server)</td>
              <td>Instantaneous (a branch is just a 41-byte pointer to a commit hash)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 04: INSTALLATION & CONFIGURATION -->
    <article class="note-section" id="sec-04">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 04</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Installation, Config Levels & Identity Setup</h2>
      <p class="section-intro">
        Before making your first commit, Git requires your author name and email. Placement tests often ask about config priority levels: <strong>Local &gt; Global &gt; System</strong>.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. System Level (<code>--system</code>)</h4>
          <p>Applies to every user and repository on the entire operating system. Located at <code>/etc/gitconfig</code> (Linux/Mac) or <code>C:\ProgramData\Git\config</code> (Windows). Lowest priority.</p>
        </div>
        <div class="concept-card">
          <h4>2. Global Level (<code>--global</code>)</h4>
          <p>Applies to the currently logged-in operating system user across all their projects. Located at <code>~/.gitconfig</code> or <code>C:\Users\&lt;User&gt;\.gitconfig</code>. Most commonly used.</p>
        </div>
        <div class="concept-card">
          <h4>3. Local Level (<code>--local</code>)</h4>
          <p>Applies strictly to the current repository. Located inside <code>.git/config</code>. <strong>Overrides global and system settings!</strong> Used when your work email differs from your personal email.</p>
        </div>
      </div>

      <!-- Terminal Command Block -->
      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">BASH / COMMAND PROMPT</span>
          <button class="copy-btn" onclick="navigator.clipboard.writeText('git config --global user.name \"Rahul Sharma\"\ngit config --global user.email \"rahul@example.com\"\ngit config --list')">Copy</button>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git config --global user.name "Rahul Sharma"</div>
        <div class="term-cmd"><span class="prompt">$</span> git config --global user.email "rahul@example.com"</div>
        <div class="term-cmd"><span class="prompt">$</span> git config --list --show-origin</div>
        <div class="term-output">file:/C:/Users/Rahul/.gitconfig  user.name=Rahul Sharma
file:/C:/Users/Rahul/.gitconfig  user.email=rahul@example.com
file:.git/config                 core.repositoryformatversion=0</div>
        <div class="term-desc">Establishes the author identity embedded immutably into every subsequent commit checksum.</div>
      </div>
    </article>


    <!-- SECTION 05: GIT REPOSITORY -->
    <article class="note-section" id="sec-05">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 05</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Repository Anatomy & The Hidden .git Folder</h2>
      <p class="section-intro">
        Running <code>git init</code> initializes a hidden <code>.git</code> directory. Deleting this one folder permanently strips all version control capabilities and history from your project directory.
      </p>

      <div class="diagram-container">
        <div class="diagram-title">Inside the Hidden .git Directory</div>
        <pre class="diagram-art">
my-project/
├── .git/                      <-- THE HEART OF GIT (Database & Configuration)
│   ├── HEAD                   <-- Reference pointing to the currently active branch
│   ├── config                 <-- Local repo configuration file (overrides global)
│   ├── index                  <-- Binary file storing the STAGING AREA (Index)
│   ├── description            <-- Used by GitWeb software
│   ├── hooks/                 <-- Client/server hook scripts (pre-commit, post-merge)
│   ├── info/                  <-- Additional repo info (e.g. info/exclude)
│   ├── objects/               <-- OBJECT DATABASE: blobs (files), trees (dirs), commits, tags
│   └── refs/
│       ├── heads/             <-- Local branch pointers (refs/heads/main)
│       ├── remotes/           <-- Remote tracking branches (refs/remotes/origin/main)
│       └── tags/              <-- Release tag references
└── src/                       <-- YOUR WORKING DIRECTORY (Editable code files)
    └── app.js
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📦 Standard vs Bare Repository</h4>
          <p>• <strong>Standard Repository:</strong> Contains both the working directory (visible files) and the <code>.git</code> folder. Developers edit code here.<br>• <strong>Bare Repository (<code>git init --bare</code>):</strong> Contains ONLY the version database without a working directory. Used strictly on central servers (like GitHub/GitLab) as a push/pull exchange target to prevent push conflicts.</p>
        </div>
      </div>
    </article>


    <!-- SECTION 06: THREE-AREA ARCHITECTURE -->
    <article class="note-section" id="sec-06">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 06</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">The Three Areas: Working Tree, Staging & Repository</h2>
      <p class="section-intro">
        Almost every Git MCQ involves data moving across the Three States: <strong>Working Directory</strong> (Modified), <strong>Staging Area</strong> (Staged), and <strong>Local Repository</strong> (Committed).
      </p>

      <!-- Architecture Diagram -->
      <div class="diagram-container">
        <div class="diagram-title">The Three-Area Transition Flowchart</div>
        <pre class="diagram-art">
   +----------------------+     git add <file>     +----------------------+    git commit -m "..."    +----------------------+
   |  WORKING DIRECTORY   | ---------------------> |     STAGING AREA     | -----------------------> |   LOCAL REPOSITORY   |
   | (Untracked/Modified) | <--------------------- | (Index / Cache Area) | <----------------------- | (Committed Snapshots)|
   +----------------------+   git restore --staged +----------------------+     git reset --soft     +----------------------+
              |                                                                                                 |
              |                                            git clone / git pull                                 | git push
              \=================================================================================================/
                                                               |
                                                               v
                                                    +----------------------+
                                                    |  REMOTE REPOSITORY   |
                                                    |  (GitHub / GitLab)   |
                                                    +----------------------+
        </pre>
      </div>

      <!-- Comparison Table 3: Three Areas -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>Technical Identity</th>
              <th>File State</th>
              <th>How to Move Forward</th>
              <th>How to Move Backward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Working Directory</strong></td>
              <td>Visible files on disk where you write code</td>
              <td>Untracked or Modified</td>
              <td><code>git add &lt;file&gt;</code> (stages file)</td>
              <td><code>git restore &lt;file&gt;</code> (discards disk changes)</td>
            </tr>
            <tr>
              <td><strong>2. Staging Area (Index)</strong></td>
              <td>Binary <code>.git/index</code> file preparing the next commit</td>
              <td>Staged</td>
              <td><code>git commit -m "msg"</code> (commits to history)</td>
              <td><code>git restore --staged &lt;file&gt;</code> (unstages file)</td>
            </tr>
            <tr>
              <td><strong>3. Local Repository</strong></td>
              <td>Immutable object database in <code>.git/objects/</code></td>
              <td>Committed</td>
              <td><code>git push origin main</code> (sends to remote)</td>
              <td><code>git reset HEAD~1</code> (moves commit pointer back)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #2</div>
        <div class="trap-desc">
          Interview question: "If you modify a file, stage it with <code>git add</code>, and then edit the file again, what happens when you run <code>git commit</code>?"<br>
          <strong>Git commits the state of the file AT THE TIME YOU RAN <code>git add</code>!</strong> The subsequent edits in the working directory remain unstaged. To include them, you must run <code>git add</code> again before committing!
        </div>
      </div>
    </article>


    <!-- SECTION 07: BASIC GIT COMMANDS -->
    <article class="note-section" id="sec-07">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 07</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Essential Workflow Commands: init, add & commit</h2>
      <p class="section-intro">
        These three commands constitute the basic lifecycle of version control.
      </p>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">STANDARD REPO CREATION</span>
          <button class="copy-btn" onclick="navigator.clipboard.writeText('git init\ngit add index.html\ngit commit -m \"Initial commit: Add homepage structure\"')">Copy</button>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git init</div>
        <div class="term-output">Initialized empty Git repository in /home/user/portfolio/.git/</div>
        <div class="term-cmd"><span class="prompt">$</span> git add index.html style.css</div>
        <div class="term-cmd"><span class="prompt">$</span> git commit -m "feat: Add initial homepage layout"</div>
        <div class="term-output">[main (root-commit) 8f3a1d4] feat: Add initial homepage layout
 2 files changed, 142 insertions(+)
 create mode 100644 index.html
 create mode 100644 style.css</div>
        <div class="term-desc">Creates a permanent commit snapshot referenced by hash <code>8f3a1d4</code> on branch <code>main</code>.</div>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4><code>git add .</code> vs <code>git add -A</code></h4>
          <p>• In Git 2.x+, both <code>git add .</code> and <code>git add -A</code> stage new, modified, and deleted files.<br>• Difference: <code>git add .</code> stages files within the <em>current directory and subdirectories</em>; <code>git add -A</code> stages all changes across the <em>entire repository root</em> regardless of where your terminal is currently navigated.</p>
        </div>
        <div class="concept-card">
          <h4>The <code>git commit -am</code> Shortcut</h4>
          <p>Combines staging and committing into one step: <code>git commit -am "Update navbar"</code>.<br><strong>CRITICAL TRAP:</strong> This shortcut works <strong>ONLY for tracked files</strong> (files that were committed previously). It will <strong>NOT</strong> stage brand-new untracked files!</p>
        </div>
      </div>
    </article>


    <!-- SECTION 08: STATUS & LOG -->
    <article class="note-section" id="sec-08">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 08</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Inspection Commands: git status & git log</h2>
      <p class="section-intro">
        A developer should never commit blindly. <code>git status</code> reveals current workspace state; <code>git log</code> inspects repository history.
      </p>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">STATUS INTERPRETATION</span>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git status</div>
        <div class="term-output">On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   app.js               <-- GREEN: In Staging Area!

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
	modified:   style.css            <-- RED: In Working Tree, not staged!

Untracked files:
	README.md                        <-- RED: Brand-new file, never tracked!</div>
      </div>

      <!-- High-Yield git log flags -->
      <div class="concept-grid">
        <div class="concept-card">
          <h4><code>git log --oneline</code></h4>
          <p>Condenses each commit to a single line showing the abbreviated 7-character hash and the commit message. Ideal for quick terminal scanning.</p>
        </div>
        <div class="concept-card">
          <h4><code>git log --graph --oneline --all</code></h4>
          <p>Renders an ASCII branch graph showing where branches diverge and merge back together across all refs in the repo.</p>
        </div>
        <div class="concept-card">
          <h4><code>git log -p -2</code></h4>
          <p>Displays the actual patch (diff) showing exact lines added (<code>+</code>) and deleted (<code>-</code>) for the last 2 commits.</p>
        </div>
      </div>
    </article>
    """
