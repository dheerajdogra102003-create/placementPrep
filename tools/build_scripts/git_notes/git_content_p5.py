# git_content_p5.py - Master Toolkits: Scenarios, Traps, Tables, Cheat Sheet, Interview Q&As, Last-Hour Revision

def get_git_part5_html():
    return r"""
    <!-- MASTER COMPARISON TABLES SECTION -->
    <article class="note-section" id="master-comparisons">
      <div class="section-eyebrow">
        <span class="sec-num">MASTER TOOLKIT</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">12+ Master Git & GitHub Comparison Tables</h2>
      <p class="section-intro">
        Service-based and product-based IT recruitment exams rely heavily on difference-based MCQs. Master these 13 definitive comparison tables.
      </p>

      <!-- Table 1: Git vs GitHub -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">1. Git vs GitHub</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Dimension</th><th>Git</th><th>GitHub</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Definition</strong></td><td>Open-source Distributed Version Control CLI Tool</td><td>Cloud-based web hosting service for Git repositories</td></tr>
            <tr><td><strong>Creator & Year</strong></td><td>Linus Torvalds (2005)</td><td>Tom Preston-Werner, Chris Wanstrath, PJ Hyett (2008)</td></tr>
            <tr><td><strong>Installation</strong></td><td>Installed locally on personal computer</td><td>Hosted in cloud (accessed via web browser or CLI)</td></tr>
            <tr><td><strong>Internet Requirement</strong></td><td>100% offline functionality for local commits/branches</td><td>Requires internet connection to push/pull/browse</td></tr>
            <tr><td><strong>User Interface</strong></td><td>Primarily Command Line Interface (CLI)</td><td>Graphical Web UI, Desktop client, REST API</td></tr>
            <tr><td><strong>Key Capabilities</strong></td><td>Branching, committing, staging, merging, history</td><td>Pull requests, issue tracking, forks, Actions CI/CD</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 2: Git vs GitHub vs GitLab vs Bitbucket -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">2. Git vs GitHub vs GitLab vs Bitbucket</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Feature</th><th>Git</th><th>GitHub (Microsoft)</th><th>GitLab</th><th>Bitbucket (Atlassian)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Nature</strong></td><td>Core VCS Engine</td><td>Cloud Hosting & Community</td><td>Complete DevOps Lifecycle Platform</td><td>Enterprise VCS Platform</td></tr>
            <tr><td><strong>CI/CD</strong></td><td>None (VCS only)</td><td>GitHub Actions</td><td>GitLab CI/CD (native built-in)</td><td>Bitbucket Pipelines</td></tr>
            <tr><td><strong>Ecosystem</strong></td><td>Runs anywhere</td><td>Largest open-source community</td><td>Strong self-hosted enterprise adoption</td><td>Seamless Jira & Confluence integration</td></tr>
            <tr><td><strong>Private Repos</strong></td><td>Local filesystem</td><td>Unlimited free private repos</td><td>Unlimited free private repos</td><td>Free for up to 5 users</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 3: Working Directory vs Staging Area vs Repository -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">3. Working Directory vs Staging Area vs Local Repository</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Dimension</th><th>Working Directory</th><th>Staging Area (Index)</th><th>Local Repository (.git)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Location</strong></td><td>Actual project folder on disk</td><td>Binary file at <code>.git/index</code></td><td>Object database inside <code>.git/objects/</code></td></tr>
            <tr><td><strong>State of Code</strong></td><td>Untracked or modified files (raw edits)</td><td>Curated snapshot prepared for commit</td><td>Permanently committed, immutable snapshots</td></tr>
            <tr><td><strong>Command to Populate</strong></td><td>Manual typing in code editor</td><td><code>git add &lt;file&gt;</code></td><td><code>git commit -m "..."</code></td></tr>
            <tr><td><strong>Safety Level</strong></td><td>Unsafe (unsaved changes can be lost)</td><td>Staged but not permanent</td><td>Completely safe (retrievable in history)</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 4: git add vs git commit -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">4. git add vs git commit</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Aspect</th><th>git add</th><th>git commit</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Target</strong></td><td>Moves changes from Working Dir to Staging Area</td><td>Moves changes from Staging Area to Repository</td></tr>
            <tr><td><strong>Permanent?</strong></td><td>No, staging state can be un-staged</td><td>Yes, creates immutable snapshot with SHA-1 hash</td></tr>
            <tr><td><strong>Requires Message?</strong></td><td>No</td><td>Yes, meaningful commit message is mandatory</td></tr>
            <tr><td><strong>Exam Question</strong></td><td>"Does git add save a version in history?" (NO)</td><td>"Which command creates a commit hash?" (git commit)</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 5: git push vs git pull -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">5. git push vs git pull</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Parameter</th><th>git push</th><th>git pull</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Direction</strong></td><td>Local Repository ➔ Remote Repository</td><td>Remote Repository ➔ Local Working Tree</td></tr>
            <tr><td><strong>Purpose</strong></td><td>Upload committed local changes to team server</td><td>Download and integrate team's changes locally</td></tr>
            <tr><td><strong>Risk of Conflict</strong></td><td>Fails if remote has newer commits (rejected)</td><td>Can trigger merge conflicts during merge step</td></tr>
            <tr><td><strong>Typical Flags</strong></td><td><code>-u</code> (set upstream), <code>--force</code> (dangerous)</td><td><code>--rebase</code>, <code>--ff-only</code></td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 6: git pull vs git fetch -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">6. git pull vs git fetch</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Criterion</th><th>git fetch</th><th>git pull</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Operation</strong></td><td>Read-only network download</td><td>Download + local branch merge</td></tr>
            <tr><td><strong>Modifies Working Tree?</strong></td><td>NO (100% safe to run anytime)</td><td>YES (updates working tree files immediately)</td></tr>
            <tr><td><strong>Can Cause Conflict?</strong></td><td>NO</td><td>YES (if remote changes clash with local)</td></tr>
            <tr><td><strong>Formula</strong></td><td><code>git fetch</code></td><td><code>git fetch + git merge</code></td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 7: git clone vs git pull -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">7. git clone vs git pull</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Dimension</th><th>git clone</th><th>git pull</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Precondition</strong></td><td>Empty directory (no Git repo required)</td><td>Must be inside an initialized Git repo</td></tr>
            <tr><td><strong>Frequency</strong></td><td>Executed once per project onboarding</td><td>Executed multiple times daily during development</td></tr>
            <tr><td><strong>Creates Repository?</strong></td><td>Yes, initializes <code>.git</code> and sets <code>origin</code></td><td>No, operates within existing repository</td></tr>
            <tr><td><strong>Downloads</strong></td><td>All branches, complete history, all tags</td><td>Only commits for current active tracking branch</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 8: git branch vs git switch -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">8. git branch vs git switch</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Aspect</th><th>git branch &lt;name&gt;</th><th>git switch &lt;name&gt;</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Action</strong></td><td>Creates branch but leaves HEAD on current branch</td><td>Moves HEAD to specified branch</td></tr>
            <tr><td><strong>Combined Command</strong></td><td><code>git checkout -b &lt;name&gt;</code></td><td><code>git switch -c &lt;name&gt;</code></td></tr>
            <tr><td><strong>Modern Practice</strong></td><td>Use for listing/deleting branches (<code>git branch -d</code>)</td><td>Use for navigating branches (clearer intent)</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 9: git checkout vs git switch -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">9. git checkout vs git switch</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Dimension</th><th>git checkout</th><th>git switch</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Purpose</strong></td><td>Overloaded (switches branches OR restores files)</td><td>Dedicated strictly to switching branches</td></tr>
            <tr><td><strong>Introduced In</strong></td><td>Git 1.0 (original legacy command)</td><td>Git 2.23 (modern split into switch & restore)</td></tr>
            <tr><td><strong>Accidental File Loss Risk</strong></td><td>High (<code>git checkout -- file</code> discards edits)</td><td>Zero (switch cannot discard file modifications)</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 10: git reset vs git revert -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">10. git reset vs git revert</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Attribute</th><th>git reset</th><th>git revert</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Mechanism</strong></td><td>Moves branch pointer backward in time</td><td>Appends brand-new inverted commit at tip</td></tr>
            <tr><td><strong>History Alteration</strong></td><td>Rewrites history (orphans older commits)</td><td>Preserves history linearly (no history loss)</td></tr>
            <tr><td><strong>Safe for Shared Branches?</strong></td><td>NO! Breaks teammate repos if pushed</td><td>YES! 100% safe for shared public branches</td></tr>
            <tr><td><strong>Placement Rule</strong></td><td>"Use reset for private local unpushed commits"</td><td>"Use revert for public pushed production commits"</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 11: git stash vs git commit -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">11. git stash vs git commit</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Feature</th><th>git stash</th><th>git commit</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Purpose</strong></td><td>Temporary clipboard for incomplete WIP code</td><td>Permanent snapshot recorded in project history</td></tr>
            <tr><td><strong>Visible in git log?</strong></td><td>No (stored in stash stack <code>git stash list</code>)</td><td>Yes (permanent commit hash in history)</td></tr>
            <tr><td><strong>Requires Clean Logic?</strong></td><td>No, can save broken syntax half-written</td><td>Yes, should represent a complete logical change</td></tr>
            <tr><td><strong>Restoration</strong></td><td><code>git stash pop</code> applies and deletes</td><td>Always remains part of branch history</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 12: Fork vs Clone -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">12. Fork vs Clone</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Dimension</th><th>Fork</th><th>Clone</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Where it occurs</strong></td><td>GitHub Cloud Server</td><td>Local Personal Computer</td></tr>
            <tr><td><strong>Parent Relationship</strong></td><td>Retains link to upstream original repo</td><td>Points to origin URL</td></tr>
            <tr><td><strong>Permissions</strong></td><td>No write access to original needed</td><td>Read access needed; write access needed to push</td></tr>
            <tr><td><strong>Key Goal</strong></td><td>Propose Pull Request to open source project</td><td>Download code locally for daily editing</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Table 13: Merge vs Pull Request -->
      <h3 style="color: var(--accent-orange); margin: 2rem 0 1rem;">13. git merge vs Pull Request</h3>
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr><th>Dimension</th><th>git merge</th><th>GitHub Pull Request (PR)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Tool</strong></td><td>Git Command Line Interface (CLI)</td><td>GitHub Web Platform Feature</td></tr>
            <tr><td><strong>Peer Review</strong></td><td>No code review or approval workflow</td><td>Mandatory discussions, approvals, and checklists</td></tr>
            <tr><td><strong>Automation</strong></td><td>Manual local operation</td><td>Automated CI/CD test suite execution</td></tr>
            <tr><td><strong>Execution</strong></td><td>Combines branches directly on local machine</td><td>Merges on remote server upon reviewer approval</td></tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- 30+ REAL WORLD BUSINESS SCENARIOS -->
    <article class="note-section" id="master-scenarios">
      <div class="section-eyebrow">
        <span class="sec-num">SCENARIO BANK</span>
        <span class="sec-priority priority-p0">30+ PRODUCTION SCENARIOS</span>
      </div>
      <h2 class="section-title">30+ Real-World Production & Interview Scenarios</h2>
      <p class="section-intro">
        Service-based IT firms (TCS, Infosys, Cognizant, Wipro, Accenture) test scenario troubleshooting. Below are 30 realistic engineering situations with question, exact command, detailed reasoning, and placement exam takeaways.
      </p>

      <div class="scenario-grid">
        <!-- Scenario 1 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 01 • UNSTAGING</div>
          <div class="scenario-problem">A developer modified <code>app.py</code> and <code>database.py</code>, ran <code>git add .</code>, but realizes <code>database.py</code> has hardcoded passwords that must NOT be committed.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command unstages <code>database.py</code> while preserving the local edits?</div>
          <div class="scenario-ans"><code>git restore --staged database.py</code> (or legacy <code>git reset HEAD database.py</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>restore --staged</code> moves the file from the Staging Area back to the Working Directory without altering file contents on disk.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Never use <code>git checkout database.py</code> here—that would destroy your unsaved code!</div>
        </div>

        <!-- Scenario 2 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 02 • EMERGENCY BRANCH SWITCH</div>
          <div class="scenario-problem">You are halfway through writing a new feature on <code>feature-cart</code> when a critical production bug arrives on <code>main</code>. Your feature code does not compile yet.</div>
          <div class="scenario-question"><strong>Q:</strong> How do you switch to <code>main</code> immediately without losing half-written work or creating a broken commit?</div>
          <div class="scenario-ans"><code>git stash</code> ➔ <code>git switch main</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Stashing safely hides all staged and unstaged modifications on an internal stack, restoring a clean working tree so Git allows branch switching.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> When bug fix is done, return via <code>git switch feature-cart</code> and run <code>git stash pop</code>.</div>
        </div>

        <!-- Scenario 3 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 03 • AMENDING LAST COMMIT</div>
          <div class="scenario-problem">You committed your work with <code>git commit -m "Add user auth"</code>, but immediately realize you forgot to include <code>auth_helper.py</code> in the commit.</div>
          <div class="scenario-question"><strong>Q:</strong> How do you add the missing file into the previous commit without creating an extra "oops" commit?</div>
          <div class="scenario-ans"><code>git add auth_helper.py</code> ➔ <code>git commit --amend --no-edit</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>--amend</code> rewrites the topmost commit snapshot, incorporating newly staged files and reusing the same commit message.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Only amend commits that have NOT yet been pushed to a remote repository.</div>
        </div>

        <!-- Scenario 4 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 04 • UNDOING A PUSHED COMMIT</div>
          <div class="scenario-problem">A bad commit with hash <code>c4f1a23</code> was pushed to the shared team branch <code>develop</code>, causing the CI pipeline to fail for all 20 engineers.</div>
          <div class="scenario-question"><strong>Q:</strong> What is the safest, standard way to undo this bad commit?</div>
          <div class="scenario-ans"><code>git revert c4f1a23</code> ➔ <code>git push origin develop</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>git revert</code> creates a new forward-moving commit that applies the exact inverse changes. It leaves the public history intact.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Never use <code>git reset</code> on public/shared branches—it causes divergent histories for teammates.</div>
        </div>

        <!-- Scenario 5 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 05 • DISCARDING LOCAL UNCOMMITTED EDITS</div>
          <div class="scenario-problem">You experimented with a new CSS library in <code>styles.css</code>, broke the UI completely, and want to abandon all changes and return to the last committed state.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command discards all uncommitted modifications in <code>styles.css</code>?</div>
          <div class="scenario-ans"><code>git restore styles.css</code> (or legacy <code>git checkout -- styles.css</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>git restore</code> without <code>--staged</code> copies the clean version from the staging area / HEAD directly into your working directory.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> This action is irreversible. Local uncommitted changes are permanently lost.</div>
        </div>

        <!-- Scenario 6 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 06 • INSPECTING REMOTE COMMITS SAFELY</div>
          <div class="scenario-problem">A colleague pushed 5 commits to <code>main</code> on GitHub. You want to see their commit messages and diffs without modifying your local working files.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command fetches changes from the remote without auto-merging into your local branch?</div>
          <div class="scenario-ans"><code>git fetch origin</code> followed by <code>git log HEAD..origin/main</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>git fetch</code> downloads remote objects into <code>origin/main</code> without touching your active local working directory.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> <code>git pull</code> would have triggered an immediate merge attempt. Fetch is read-only.</div>
        </div>

        <!-- Scenario 7 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 07 • MERGE CONFLICT RESOLUTION</div>
          <div class="scenario-problem">During <code>git merge feature</code>, Git aborts with <code>CONFLICT (content): Merge conflict in server.js</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> What are the exact steps required to complete the merge?</div>
          <div class="scenario-ans">1. Open <code>server.js</code> ➔ 2. Resolve conflict markers ➔ 3. <code>git add server.js</code> ➔ 4. <code>git commit</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Staging resolved files with <code>git add</code> informs Git that conflicts have been rectified. A final commit records the merge.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Do not pass <code>-m "..."</code> to merge commits unless necessary; Git supplies a standard default message.</div>
        </div>

        <!-- Scenario 8 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 08 • SOFT RESET VS HARD RESET</div>
          <div class="scenario-problem">You committed 3 commits locally. You want to un-commit them to combine them into one commit, but you must NOT lose your written code.</div>
          <div class="scenario-question"><strong>Q:</strong> Which reset flag should you execute?</div>
          <div class="scenario-ans"><code>git reset --soft HEAD~3</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>--soft</code> rewinds HEAD by 3 commits while keeping all changed files staged in the index, ready for a fresh consolidated commit.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> <code>--hard</code> would have destroyed all 3 commits' code permanently!</div>
        </div>

        <!-- Scenario 9 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 09 • CHECKING WHO WROTE A BUGGY LINE</div>
          <div class="scenario-problem">A bug was identified on line 142 of <code>payment.py</code>. The team lead needs to know who authored that line, when, and in which commit.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command displays line-by-line commit authorship metadata?</div>
          <div class="scenario-ans"><code>git blame payment.py -L 142,142</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>git blame</code> annotates every line of a file with commit SHA, author name, timestamp, and line content.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> High-frequency MNC interview question: "How to find who modified line X?" ➔ <code>git blame</code>.</div>
        </div>

        <!-- Scenario 10 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 10 • ABORTING A PROBLEMATIC MERGE</div>
          <div class="scenario-problem">You executed <code>git merge bugfix</code> and were confronted by 15 complicated conflict files. You want to abort completely and return to pre-merge state.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command safely terminates the in-progress merge conflict?</div>
          <div class="scenario-ans"><code>git merge --abort</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Restores the working tree and index back to the exact commit state prior to running <code>git merge</code>.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Works similarly for rebases: <code>git rebase --abort</code>.</div>
        </div>

        <!-- Scenario 11 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 11 • RECOVERING A "DELETED" ACCIDENTAL RESET</div>
          <div class="scenario-problem">A fresher ran <code>git reset --hard HEAD~1</code> by mistake and panicked because their commit disappeared from <code>git log</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> Can the "lost" commit be recovered, and if so, how?</div>
          <div class="scenario-ans">Yes! Run <code>git reflog</code> to find the orphaned commit SHA, then <code>git reset --hard &lt;SHA&gt;</code>.</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Git keeps an internal journal (<code>reflog</code>) of every HEAD movement for 30–90 days before garbage collection runs.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> <code>git reflog</code> is Git's ultimate safety net for recovering lost commits.</div>
        </div>

        <!-- Scenario 12 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 12 • PUSH REJECTED (NON-FAST-FORWARD)</div>
          <div class="scenario-problem">You run <code>git push origin main</code> and receive <code>[rejected - non-fast-forward] Updates were rejected because the remote contains work that you do not have locally</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> What is the professional industry resolution?</div>
          <div class="scenario-ans"><code>git pull origin main</code> (resolve any conflicts, if any) ➔ <code>git push origin main</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Git protects remote branches from being overwritten. You must integrate teammates' remote commits before pushing your own.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Never use <code>--force</code> to bypass this error on shared branches!</div>
        </div>

        <!-- Scenario 13 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 13 • CREATING AND SWITCHING BRANCH AT ONCE</div>
          <div class="scenario-problem">You need to start work on <code>user-dashboard</code> and want to create the branch and switch to it in a single command.</div>
          <div class="scenario-question"><strong>Q:</strong> Which modern command accomplishes this?</div>
          <div class="scenario-ans"><code>git switch -c user-dashboard</code> (or legacy <code>git checkout -b user-dashboard</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>switch -c</code> (create) creates the new pointer and moves HEAD to it instantaneously.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Modern interviews favor <code>switch -c</code> over <code>checkout -b</code>.</div>
        </div>

        <!-- Scenario 14 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 14 • DELETING A MERGED FEATURE BRANCH</div>
          <div class="scenario-problem">Your feature branch <code>feature-login</code> has been approved and merged into <code>main</code>. You want to clean up your local branch list.</div>
          <div class="scenario-question"><strong>Q:</strong> Which safe command deletes the merged local branch?</div>
          <div class="scenario-ans"><code>git branch -d feature-login</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Lowercase <code>-d</code> performs a safety check and deletes only if changes are fully merged. Uppercase <code>-D</code> forces deletion regardless.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> You cannot delete the branch you are currently standing on. Switch to <code>main</code> first.</div>
        </div>

        <!-- Scenario 15 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 15 • IGNORING SENSITIVE FILES AFTER INITIAL COMMIT</div>
          <div class="scenario-problem">A developer accidentally committed <code>config.env</code> containing API keys. They added <code>config.env</code> to <code>.gitignore</code>, but Git still tracks modifications.</div>
          <div class="scenario-question"><strong>Q:</strong> Why does Git still track the file, and how to fix it?</div>
          <div class="scenario-ans">Run <code>git rm --cached config.env</code> ➔ <code>git commit -m "Stop tracking config.env"</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>.gitignore</code> only prevents untracked files from being staged. Files already in the index must be removed via <code>--cached</code>.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> <code>--cached</code> removes from Git index while preserving file in working directory.</div>
        </div>

        <!-- Scenario 16 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 16 • VIEWING UNSTAGED VS STAGED CHANGES</div>
          <div class="scenario-problem">You made changes to <code>index.html</code>. Some lines are staged with <code>git add</code>, and some lines are still unstaged. You want to view ONLY the staged differences.</div>
          <div class="scenario-question"><strong>Q:</strong> Which git diff command shows only staged changes?</div>
          <div class="scenario-ans"><code>git diff --staged</code> (or synonym <code>git diff --cached</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Plain <code>git diff</code> compares Working Tree vs Staging Area. <code>--staged</code> compares Staging Area vs last commit (HEAD).</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Frequently asked MCQ distinction in Cognizant & Wipro tests.</div>
        </div>

        <!-- Scenario 17 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 17 • CHERRY-PICKING A SINGLE COMMIT</div>
          <div class="scenario-problem">A critical bugfix commit <code>e7a9b1c</code> was committed on an experimental branch. You need that single fix on <code>main</code> without merging the experimental branch.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command copies a specific commit from one branch onto another?</div>
          <div class="scenario-ans">On <code>main</code>: <code>git cherry-pick e7a9b1c</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>git cherry-pick</code> applies the changes introduced by a specific existing commit, generating a new commit on current branch.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> The cherry-picked commit gets a brand-new SHA hash because its commit parent is different.</div>
        </div>

        <!-- Scenario 18 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 18 • CONTRIBUTING TO AN OPEN-SOURCE PROJECT</div>
          <div class="scenario-problem">You want to contribute a bugfix to the public <code>kubernetes</code> repository, but you do not have collaborator write permissions.</div>
          <div class="scenario-question"><strong>Q:</strong> What is the standard contribution workflow?</div>
          <div class="scenario-ans">Fork repo on GitHub ➔ Clone your fork ➔ Branch & commit ➔ Push to your fork ➔ Open Pull Request to upstream.</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Forking provides you with a server-side copy where you have full write access to publish your proposal.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Direct push to original repository is blocked by permission denial (HTTP 403).</div>
        </div>

        <!-- Scenario 19 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 19 • COMPACT SINGLE-LINE LOG VIEW</div>
          <div class="scenario-problem">The default <code>git log</code> output takes up too much terminal space with author, date, and full hash. You want a clean, one-line summary of recent history.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command provides a condensed graph visualization?</div>
          <div class="scenario-ans"><code>git log --oneline --graph --all</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>--oneline</code> truncates hash to 7 characters and shows commit message. <code>--graph</code> draws ASCII branch diagrams.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Memorize this command for live coding / pair programming rounds.</div>
        </div>

        <!-- Scenario 20 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 20 • CLEANING UNTRACKED JUNK FILES</div>
          <div class="scenario-problem">Your project directory has 20 untracked temporary log files and build artifacts not yet tracked by Git. You want to delete them in one shot.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command removes untracked files from the working directory?</div>
          <div class="scenario-ans"><code>git clean -fd</code> (dry-run first: <code>git clean -nd</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>-f</code> (force) deletes untracked files; <code>-d</code> removes untracked directories as well.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Always run with <code>-n</code> (dry run) first to preview what would be permanently deleted.</div>
        </div>

        <!-- Scenario 21 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 21 • SQUASHING 5 COMMITS INTO 1 BEFORE PR</div>
          <div class="scenario-problem">You made 5 messy local commits ("wip", "fixed typo", "trying again"). Team lead requests a single clean commit before merging your PR.</div>
          <div class="scenario-question"><strong>Q:</strong> How do you combine the last 5 commits interactively?</div>
          <div class="scenario-ans"><code>git rebase -i HEAD~5</code> (mark commits 2–5 with <code>squash</code> or <code>s</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Interactive rebase squashes multiple commits into their predecessor, prompting for a consolidated commit message.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Alternatively, GitHub PRs offer "Squash and Merge" button in web UI.</div>
        </div>

        <!-- Scenario 22 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 22 • SEARCHING HISTORY FOR A DELETED FUNCTION</div>
          <div class="scenario-problem">A developer deleted a function <code>calculateTax()</code> 2 months ago. You need to locate which commit deleted it.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command searches commit diffs for occurrences of a specific string?</div>
          <div class="scenario-ans"><code>git log -S "calculateTax"</code> (Git pickaxe search)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> The <code>-S</code> option looks for commits that introduced or removed an instance of the specified string.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Extremely powerful interview answer for "How to find who deleted code?"</div>
        </div>

        <!-- Scenario 23 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 23 • RENAMING A BRANCH LOCALLY & REMOTELY</div>
          <div class="scenario-problem">You named a branch <code>bug-fix</code>, but company convention requires <code>fix/issue-302</code>. You already pushed <code>bug-fix</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> How do you rename both locally and remotely?</div>
          <div class="scenario-ans"><code>git branch -m fix/issue-302</code> ➔ <code>git push -u origin fix/issue-302</code> ➔ <code>git push origin --delete bug-fix</code></div>
          <div class="scenario-reason"><strong>Reasoning:</strong> <code>-m</code> renames current local branch. Then push new name and delete stale remote branch.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Remotes do not automatically update branch names when local branches are renamed.</div>
        </div>

        <!-- Scenario 24 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 24 • SETTING UPSTREAM TRACKING FOR FIRST PUSH</div>
          <div class="scenario-problem">You created a new local branch <code>feature-search</code>. When you type <code>git push</code>, Git warns <code>fatal: The current branch has no upstream branch</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> What flag sets the upstream remote-tracking reference?</div>
          <div class="scenario-ans"><code>git push -u origin feature-search</code> (or <code>--set-upstream</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> The <code>-u</code> flag links local <code>feature-search</code> to <code>origin/feature-search</code> so future pushes require only <code>git push</code>.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Every placement exam checks understanding of upstream branch tracking.</div>
        </div>

        <!-- Scenario 25 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 25 • DETACHED HEAD STATE RECOVERY</div>
          <div class="scenario-problem">A developer checked out a commit hash <code>git checkout a1b2c3d</code>, made 2 commits, and realized they are in "detached HEAD" state.</div>
          <div class="scenario-question"><strong>Q:</strong> How do they preserve these 2 commits before switching back to <code>main</code>?</div>
          <div class="scenario-ans"><code>git switch -c recovered-work</code> (creates and moves a named branch pointer to current HEAD)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> In detached HEAD, commits are not pointed to by any branch. Giving them a named branch prevents garbage collection.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> If you switch away without creating a branch, those commits become orphaned.</div>
        </div>

        <!-- Scenario 26 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 26 • APPLYING STASH TO A DIFFERENT BRANCH</div>
          <div class="scenario-problem">You stashed work on <code>branch-A</code> with <code>git stash</code>, but realize those changes actually belong on <code>branch-B</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> Can you apply that stash to <code>branch-B</code>?</div>
          <div class="scenario-ans">Yes! Run <code>git switch branch-B</code> followed by <code>git stash pop</code>.</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Git stashes are global to the local repository, not tied exclusively to the branch where they were created.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Stash is repository-wide clipboard, allowing easy transfer of uncommitted work across branches.</div>
        </div>

        <!-- Scenario 27 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 27 • RESTORING A SINGLE DELETED FILE</div>
          <div class="scenario-problem">You accidentally deleted <code>utils.js</code> from your file explorer, but you haven't committed the deletion yet.</div>
          <div class="scenario-question"><strong>Q:</strong> Which command restores the deleted file back into your working directory?</div>
          <div class="scenario-ans"><code>git restore utils.js</code> (or <code>git checkout HEAD -- utils.js</code>)</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Copies the pristine version of <code>utils.js</code> recorded in the latest commit back onto the file system.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Much faster than re-cloning or copying from backup folders!</div>
        </div>

        <!-- Scenario 28 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 28 • AUTO-MERGING SUCCEEDS WITHOUT CONFLICT</div>
          <div class="scenario-problem">Developer 1 modified lines 10-20 of <code>report.py</code>. Developer 2 modified lines 80-90 of the same file on another branch. Both merge into <code>main</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> Will this cause a merge conflict?</div>
          <div class="scenario-ans">No! Git's 3-way merge algorithm automatically integrates edits in non-overlapping line ranges.</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Merge conflicts occur ONLY when both branches modify the EXACT same lines or delete files edited by the other.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Modifying the same file does NOT automatically mean a conflict. Conflict requires overlapping lines.</div>
        </div>

        <!-- Scenario 29 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 29 • FAST-FORWARD MERGE CRITERIA</div>
          <div class="scenario-problem">Branch <code>feature</code> was branched off commit C2 on <code>main</code>. Since then, NO new commits were added to <code>main</code>. <code>feature</code> has commits C3 and C4.</div>
          <div class="scenario-question"><strong>Q:</strong> What type of merge will occur when merging <code>feature</code> into <code>main</code>?</div>
          <div class="scenario-ans">A Fast-Forward Merge (no merge commit created; <code>main</code> pointer simply jumps to C4).</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Because no divergent commits exist on <code>main</code>, Git simply slides the branch pointer forward linearly.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> To force a merge commit even when fast-forward is possible, use <code>git merge --no-ff</code>.</div>
        </div>

        <!-- Scenario 30 -->
        <div class="scenario-card">
          <div class="scenario-meta">SCENARIO 30 • PRODUCTION HOTFIX DEPLOYMENT</div>
          <div class="scenario-problem">A live payment bug is discovered in production. Developers are currently working on 10 half-done features in <code>develop</code>.</div>
          <div class="scenario-question"><strong>Q:</strong> How do you ship a hotfix without deploying half-done features?</div>
          <div class="scenario-ans">Branch <code>hotfix/payment</code> directly off production <code>main</code> ➔ fix & test ➔ merge into <code>main</code> and tag release ➔ merge back into <code>develop</code>.</div>
          <div class="scenario-reason"><strong>Reasoning:</strong> Branching directly off production <code>main</code> guarantees that experimental code from <code>develop</code> is not bundled into the emergency release.</div>
          <div class="scenario-tip">💡 <strong>Placement Tip:</strong> Classic Git-Flow branching model question asked in senior fresher interviews.</div>
        </div>
      </div>
    </article>


    <!-- 35+ FATAL PLACEMENT TRAPS -->
    <article class="note-section" id="master-traps">
      <div class="section-eyebrow">
        <span class="sec-num">EXAM PITFALLS</span>
        <span class="sec-priority priority-p0">35+ FATAL TRAPS</span>
      </div>
      <h2 class="section-title">35+ Fatal Placement Traps & Misconceptions</h2>
      <p class="section-intro">
        Placement exam papers intentionally craft multiple-choice options around common beginner misunderstandings. Memorize these 35 fatal traps to avoid negative markings.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>Trap 1: Git and GitHub are synonyms</h4>
          <p><strong>Reality:</strong> Git is a local command-line version control system. GitHub is an external web cloud host owned by Microsoft. Git works 100% offline without GitHub.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 2: 'git add' creates a commit</h4>
          <p><strong>Reality:</strong> <code>git add</code> only copies modified files to the Staging Area (index). It creates zero commits in repository history.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 3: 'git commit' uploads code to GitHub</h4>
          <p><strong>Reality:</strong> Commits exist strictly on your local disk in <code>.git/objects</code>. Only running <code>git push</code> transfers commits to GitHub.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 4: 'git pull' is identical to 'git fetch'</h4>
          <p><strong>Reality:</strong> <code>git pull</code> performs <code>git fetch + git merge</code>. Fetch downloads objects without modifying your local working tree.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 5: Pull Request is a Git CLI command</h4>
          <p><strong>Reality:</strong> There is NO <code>git pull-request</code> command. Pull Request is a collaborative code-review feature on GitHub/GitLab web UI.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 6: A branch is a duplicate physical folder on disk</h4>
          <p><strong>Reality:</strong> A Git branch is merely a 41-byte text file containing a 40-character SHA-1 hash pointer. It takes virtually zero disk space.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 7: 'git reset --hard' can be undone with 'git undo'</h4>
          <p><strong>Reality:</strong> Uncommitted working tree edits destroyed by <code>--hard</code> are permanently gone forever. Only committed states might be found in <code>reflog</code>.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 8: 'git revert' modifies existing history</h4>
          <p><strong>Reality:</strong> <code>git revert</code> NEVER modifies existing history. It appends a brand-new commit that undoes the targeted commit's changes.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 9: 'git clone' copies only the current branch</h4>
          <p><strong>Reality:</strong> Clone downloads the ENTIRE repository history, all branches, all tags, and the full commit tree.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 10: Modifying the same file always causes a conflict</h4>
          <p><strong>Reality:</strong> Conflicts occur ONLY when two branches alter the exact same lines. Edits in different lines merge automatically without issue.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 11: .gitignore ignores already-committed files</h4>
          <p><strong>Reality:</strong> <code>.gitignore</code> only prevents untracked files from being staged. Tracked files must be removed with <code>git rm --cached</code> first.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 12: 'git stash' is tied to one branch only</h4>
          <p><strong>Reality:</strong> Stashes are global to the local repository. You can stash on <code>branch-A</code> and pop on <code>branch-B</code>.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 13: Fast-forward merges create a merge commit</h4>
          <p><strong>Reality:</strong> Fast-forward merges do NOT create a merge commit. They simply advance the branch pointer forward.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 14: You can delete the branch you are standing on</h4>
          <p><strong>Reality:</strong> Git prevents <code>git branch -d &lt;curr&gt;</code>. You must checkout a different branch first before deleting.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 15: Commits store only file deltas/diffs</h4>
          <p><strong>Reality:</strong> Git commits store snapshots of the complete project tree (via trees and blobs), not just line deltas like SVN.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 16: 'git push' automatically uploads tags</h4>
          <p><strong>Reality:</strong> Tags are not transferred by default. You must run <code>git push origin &lt;tag&gt;</code> or <code>git push origin --tags</code>.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 17: Fork and clone are identical operations</h4>
          <p><strong>Reality:</strong> Fork is server-side (GitHub to GitHub). Clone is server-to-client (GitHub to local machine).</p>
        </div>
        <div class="concept-card">
          <h4>Trap 18: 'HEAD' is always a branch</h4>
          <p><strong>Reality:</strong> HEAD is a pointer. It usually points to a branch reference, but in "detached HEAD" state it points directly to a commit SHA.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 19: 'git checkout' only switches branches</h4>
          <p><strong>Reality:</strong> In legacy Git, <code>git checkout</code> was also used to discard file edits (<code>git checkout -- file</code>). Git 2.23 introduced <code>switch</code> and <code>restore</code> to split these roles.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 20: 'git reset --soft' discards your code</h4>
          <p><strong>Reality:</strong> <code>--soft</code> keeps all code intact and stages it in the index. Only the commit pointer moves backward.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 21: 'git merge --abort' deletes all your commits</h4>
          <p><strong>Reality:</strong> It only halts an active conflicted merge and restores the pre-merge status. Your preexisting commits are 100% safe.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 22: You can push to a remote without write access</h4>
          <p><strong>Reality:</strong> Pushing without write permissions triggers HTTP 403 Forbidden. You must fork and submit a PR instead.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 23: 'git log' displays commits from all branches by default</h4>
          <p><strong>Reality:</strong> <code>git log</code> displays history reachable only from the CURRENT branch. Use <code>git log --all</code> to inspect all branches.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 24: 'origin' is a hardcoded Git keyword</h4>
          <p><strong>Reality:</strong> <code>origin</code> is simply a conventional default alias for the primary remote URL. It could be named anything (e.g. <code>myremote</code>).</p>
        </div>
        <div class="concept-card">
          <h4>Trap 25: Git requires an active server connection to commit</h4>
          <p><strong>Reality:</strong> Git is fully distributed. You can create branches, commit, tag, and inspect logs on an airplane with no internet.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 26: Staged files are automatically saved upon editor crash</h4>
          <p><strong>Reality:</strong> <code>git add</code> records the file snapshot at the exact moment the command ran. Edits made after <code>git add</code> remain unstaged.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 27: 'git init' inside an existing Git repo is required for subfolders</h4>
          <p><strong>Reality:</strong> NEVER run <code>git init</code> inside subdirectories of an existing repo unless you deliberately intend to create nested submodules.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 28: Merging deletes the source branch</h4>
          <p><strong>Reality:</strong> Merging combines histories but leaves both branch pointers existing. You must explicitly delete branches with <code>git branch -d</code>.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 29: 'git diff' shows all modifications</h4>
          <p><strong>Reality:</strong> <code>git diff</code> only shows unstaged changes. Use <code>git diff --staged</code> to inspect what has been added to index.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 30: 'git branch -D' and '-d' are the same</h4>
          <p><strong>Reality:</strong> <code>-d</code> checks for merge status before deleting. <code>-D</code> is an alias for <code>--delete --force</code> and destroys unmerged work.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 31: Commits can be modified after push safely</h4>
          <p><strong>Reality:</strong> Amending or rebasing pushed commits alters SHA hashes, causing divergence for any team member who pulled the original.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 32: 'git cherry-pick' merges an entire branch</h4>
          <p><strong>Reality:</strong> Cherry-pick copies ONLY the single specific commit specified by hash, not the whole branch.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 33: A commit message can be empty</h4>
          <p><strong>Reality:</strong> Git aborts commit creation if message is empty, unless explicitly overridden with <code>--allow-empty-message</code>.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 34: Deleting .git directory retains project history</h4>
          <p><strong>Reality:</strong> Deleting <code>.git/</code> permanently vaporizes all commits, branches, stashes, and version history. Only working files remain as untracked files.</p>
        </div>
        <div class="concept-card">
          <h4>Trap 35: Rebase and merge produce the same commit graph</h4>
          <p><strong>Reality:</strong> Merge creates a non-linear graph with a 2-parent merge commit. Rebase creates a strictly linear 1-parent sequence by rewriting base commits.</p>
        </div>
      </div>
    </article>


    <!-- INTERACTIVE COMMAND CHEAT SHEET -->
    <article class="note-section" id="master-cheatsheet">
      <div class="section-eyebrow">
        <span class="sec-num">COMMAND REFERENCE</span>
        <span class="sec-priority priority-p0">CLI CHEAT SHEET</span>
      </div>
      <h2 class="section-title">Categorized Git Command Cheat Sheet</h2>
      <p class="section-intro">
        Every essential command organized into 15 logical developer categories for rapid exam recall and terminal reference.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>⚙️ 1. Setup & Configuration</h4>
          <code>git config --global user.name "John Doe"</code><br>
          <code>git config --global user.email "john@domain.com"</code><br>
          <code>git config --list</code><br>
          <code>git --version</code>
        </div>
        <div class="concept-card">
          <h4>📁 2. Repository Initialization</h4>
          <code>git init</code> (initialize local repo)<br>
          <code>git clone &lt;url&gt;</code> (download remote repo)<br>
          <code>git clone --depth 1 &lt;url&gt;</code> (shallow clone)
        </div>
        <div class="concept-card">
          <h4>🔍 3. Status & Inspection</h4>
          <code>git status</code> (show modified/staged files)<br>
          <code>git status -s</code> (short, concise format)<br>
          <code>git diff</code> (unstaged modifications)<br>
          <code>git diff --staged</code> (staged modifications)
        </div>
        <div class="concept-card">
          <h4>📥 4. Staging Area (Index)</h4>
          <code>git add &lt;file&gt;</code> (stage single file)<br>
          <code>git add .</code> (stage all current directory changes)<br>
          <code>git add -A</code> (stage all workspace modifications)<br>
          <code>git add -p</code> (stage changes interactively by hunk)
        </div>
        <div class="concept-card">
          <h4>💾 5. Commit Operations</h4>
          <code>git commit -m "Message"</code> (commit staged code)<br>
          <code>git commit -am "Message"</code> (stage tracked & commit)<br>
          <code>git commit --amend</code> (update latest commit)
        </div>
        <div class="concept-card">
          <h4>📜 6. History & Logs</h4>
          <code>git log</code> (full commit history)<br>
          <code>git log --oneline</code> (compact 7-char hash list)<br>
          <code>git log --graph --oneline --all</code> (visual ASCII branch tree)<br>
          <code>git log -p -2</code> (show diffs for last 2 commits)
        </div>
        <div class="concept-card">
          <h4>🌿 7. Branch Management</h4>
          <code>git branch</code> (list local branches)<br>
          <code>git branch -a</code> (list local and remote branches)<br>
          <code>git branch &lt;name&gt;</code> (create new branch)<br>
          <code>git branch -d &lt;name&gt;</code> (delete merged branch)<br>
          <code>git branch -D &lt;name&gt;</code> (force delete branch)
        </div>
        <div class="concept-card">
          <h4>🔀 8. Navigation & Switching</h4>
          <code>git switch &lt;name&gt;</code> (switch branch - modern)<br>
          <code>git switch -c &lt;name&gt;</code> (create and switch - modern)<br>
          <code>git checkout &lt;name&gt;</code> (switch branch - legacy)<br>
          <code>git checkout -b &lt;name&gt;</code> (create & switch - legacy)
        </div>
        <div class="concept-card">
          <h4>🤝 9. Merging & Integration</h4>
          <code>git merge &lt;branch&gt;</code> (merge branch into active)<br>
          <code>git merge --no-ff &lt;branch&gt;</code> (force merge commit)<br>
          <code>git merge --abort</code> (abort in-progress conflicted merge)<br>
          <code>git cherry-pick &lt;commit&gt;</code> (apply specific commit)
        </div>
        <div class="concept-card">
          <h4>🌐 10. Remote Repositories</h4>
          <code>git remote -v</code> (list remote aliases and URLs)<br>
          <code>git remote add origin &lt;url&gt;</code> (add remote target)<br>
          <code>git remote rename &lt;old&gt; &lt;new&gt;</code> (rename remote)<br>
          <code>git remote remove origin</code> (delete remote target)
        </div>
        <div class="concept-card">
          <h4>⬆️ 11. Push & Publish</h4>
          <code>git push origin &lt;branch&gt;</code> (upload commits)<br>
          <code>git push -u origin &lt;branch&gt;</code> (push and track upstream)<br>
          <code>git push origin --delete &lt;branch&gt;</code> (delete remote branch)<br>
          <code>git push origin --tags</code> (push all local tags)
        </div>
        <div class="concept-card">
          <h4>⬇️ 12. Fetch & Pull</h4>
          <code>git fetch origin</code> (download remote objects safely)<br>
          <code>git fetch --prune</code> (remove dead remote-tracking branches)<br>
          <code>git pull origin &lt;branch&gt;</code> (fetch + merge into active)<br>
          <code>git pull --rebase</code> (fetch + rebase onto remote)
        </div>
        <div class="concept-card">
          <h4>⏪ 13. Undoing & Reverting</h4>
          <code>git restore &lt;file&gt;</code> (discard local modifications)<br>
          <code>git restore --staged &lt;file&gt;</code> (unstage file)<br>
          <code>git reset --soft HEAD~1</code> (uncommit, keep staged)<br>
          <code>git reset --hard HEAD~1</code> (destroy commit & edits)<br>
          <code>git revert &lt;commit&gt;</code> (append safe undo commit)
        </div>
        <div class="concept-card">
          <h4>📦 14. Stashing (WIP Clipboard)</h4>
          <code>git stash</code> (save uncommitted work)<br>
          <code>git stash pop</code> (apply top stash and remove)<br>
          <code>git stash apply</code> (apply top stash and retain in list)<br>
          <code>git stash list</code> (view all stashed items)<br>
          <code>git stash drop</code> (delete specific stash)
        </div>
        <div class="concept-card">
          <h4>🏷️ 15. Tags & Releases</h4>
          <code>git tag</code> (list all tags)<br>
          <code>git tag &lt;name&gt;</code> (create lightweight tag)<br>
          <code>git tag -a &lt;name&gt; -m "msg"</code> (create annotated tag)<br>
          <code>git show &lt;tag&gt;</code> (view tag metadata and commit)
        </div>
      </div>
    </article>


    <!-- 16 SPOKEN INTERVIEW Q&AS -->
    <article class="note-section" id="master-interview">
      <div class="section-eyebrow">
        <span class="sec-num">INTERVIEW READY</span>
        <span class="sec-priority priority-p0">SPOKEN Q&A BANK</span>
      </div>
      <h2 class="section-title">16 High-Yield Spoken Interview Questions & Answers</h2>
      <p class="section-intro">
        These are direct questions asked in MNC technical interviews (Accenture, TCS, Cognizant, Infosys, Deloitte). Use these polished, professional answers.
      </p>

      <div class="interview-accordion">
        <div class="interview-item">
          <div class="interview-q">1. What is Git and how does it differ from traditional SVN?</div>
          <div class="interview-a">"Git is a Distributed Version Control System where every developer clones a full local copy of the repository, including entire project history. Unlike Centralized VCS like SVN which requires a constant connection to a central server, Git operations like committing, branching, and viewing logs are executed 100% locally and offline with lightning speed."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">2. What is the fundamental difference between Git and GitHub?</div>
          <div class="interview-a">"Git is the local command-line version control engine that records code revisions. GitHub is a cloud-based hosting service for Git repositories that provides collaborative features on top of Git, such as Pull Requests, Issue Tracking, Team Permissions, and GitHub Actions CI/CD pipelines."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">3. What is a commit in Git?</div>
          <div class="interview-a">"A commit is an immutable snapshot of the entire project repository at a specific point in time. Each commit is identified by a unique 40-character SHA-1 hash and records author information, timestamp, parent commit reference, and pointer to the project directory tree."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">4. What is the Git Staging Area and why is it necessary?</div>
          <div class="interview-a">"The Staging Area, also known as the Index, is an intermediate holding zone between the working directory and the permanent repository. It enables developers to curate precise, logical commits by choosing exactly which modified files—or even specific hunks of code—to bundle into the next commit, rather than committing all unvetted file edits at once."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">5. What is a Git branch and what is its internal storage overhead?</div>
          <div class="interview-a">"A Git branch is simply a lightweight, movable pointer to the latest commit in a sequence of history. Internally, a branch is stored as a 41-byte plain text file containing a 40-character SHA hash. Because it is just a pointer, creating, switching, and deleting branches in Git requires nearly zero disk space and takes instantaneous milliseconds."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">6. What is the difference between git fetch and git pull?</div>
          <div class="interview-a">"Git fetch downloads new commits, files, and branches from the remote repository into local remote-tracking branches (like origin/main) without altering your active working tree files. Git pull, on the other hand, performs git fetch and immediately executes git merge into your current branch, which can potentially cause unexpected merge conflicts."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">7. What is the difference between git reset and git revert?</div>
          <div class="interview-a">"Git reset rewinds the branch pointer backward, effectively erasing commits from the branch's forward history. It is ideal for cleaning up private, unpushed local work. Git revert creates a brand-new commit that applies the inverse changes of an older commit, keeping history linear and intact. Git revert is the only safe approach for undoing commits on public or shared team branches."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">8. What causes a Merge Conflict and how do you resolve it?</div>
          <div class="interview-a">"A merge conflict occurs when two branches make competing modifications to the same lines of code in the same file, or when one branch deletes a file that another branch modified. Git halts the merge and places conflict markers (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;) in the file. To resolve it, the engineer manually edits the file to keep desired code, removes the markers, stages the file with git add, and runs git commit."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">9. What is Git Stash and when would you use it?</div>
          <div class="interview-a">"Git stash is a temporary storage shelf that shelves uncommitted modified and staged code, restoring the working directory to a clean HEAD state. It is primarily used when you are in the middle of incomplete work on a feature branch and an urgent bug requires you to switch branches immediately without committing broken, half-written code."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">10. What is the difference between git switch and git checkout?</div>
          <div class="interview-a">"Historically, git checkout was overloaded to both switch branches and restore/discard file modifications. To prevent accidental code loss, Git 2.23 introduced git switch exclusively for navigating and creating branches, and git restore exclusively for discarding or unstaging file modifications."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">11. What is a Pull Request (PR)?</div>
          <div class="interview-a">"A Pull Request is a collaborative GitHub feature where a developer asks the project maintainers to review code committed on a feature branch and merge it into the target base branch. It serves as the hub for peer code reviews, continuous integration test checks, and architectural discussions before production deployment."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">12. What is the difference between Fork and Clone?</div>
          <div class="interview-a">"A fork is a remote, server-side copy of someone else's GitHub repository created under your personal GitHub profile, enabling you to modify the project without direct write access. A clone is a local copy of a remote repository downloaded directly onto your local physical computer via the git clone command."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">13. What is 'origin' and 'HEAD' in Git?</div>
          <div class="interview-a">"'origin' is the default alias name that Git automatically assigns to the primary remote repository URL from which a project was cloned. 'HEAD' is a special pointer symbol representing the current active snapshot or branch you are currently standing on in your working directory."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">14. What is a Fast-Forward Merge?</div>
          <div class="interview-a">"A fast-forward merge occurs when there are no divergent commits on the target branch since the feature branch was created. Because history is linear, Git does not need to create a dedicated merge commit; it simply advances the target branch pointer forward to point to the latest commit of the feature branch."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">15. What is git reflog and how does it save lost commits?</div>
          <div class="interview-a">"Git reflog (reference log) records an internal journal of every movement of the HEAD pointer in your local repository, including commits abandoned via git reset or branch deletions. If you accidentally run git reset --hard, you can check git reflog to identify the orphaned commit hash and reset back to it."</div>
        </div>
        <div class="interview-item">
          <div class="interview-q">16. What is the difference between git reset --soft, --mixed, and --hard?</div>
          <div class="interview-a">"git reset --soft moves HEAD back while keeping all changes staged in the index ready for commit. git reset --mixed (the default) moves HEAD and unstages changes, keeping modifications safely in the working directory. git reset --hard moves HEAD, clears the staging index, and permanently discards all working tree modifications."</div>
        </div>
      </div>
    </article>


    <!-- LAST-HOUR REVISION: GIT IN 15 MINUTES -->
    <article class="note-section last-hour-section" id="master-lasthour">
      <div class="section-eyebrow">
        <span class="sec-num">LAST-HOUR REVISION</span>
        <span class="sec-priority priority-p0">⚡ GIT IN 15 MINUTES</span>
      </div>
      <h2 class="section-title">Last-Hour Placement Revision: Git in 15 Minutes</h2>
      <p class="section-intro">
        Standing outside the exam hall or 15 minutes before your interview? This ultra-condensed review covers the 20 absolute essential commands, top 10 comparisons, and core workflow equations.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🚀 Top 20 Must-Know Commands</h4>
          <ol style="margin-left: 1.2rem; font-size: 0.9rem; line-height: 1.6;">
            <li><code>git init</code> : Initialize repository in current folder</li>
            <li><code>git clone &lt;url&gt;</code> : Download full remote repository</li>
            <li><code>git status</code> : Inspect working tree and staging state</li>
            <li><code>git add .</code> : Stage all modified/untracked files</li>
            <li><code>git commit -m "msg"</code> : Save staged snapshot permanently</li>
            <li><code>git log --oneline</code> : View compact commit history</li>
            <li><code>git branch</code> : List all local branches</li>
            <li><code>git switch -c &lt;name&gt;</code> : Create and switch to new branch</li>
            <li><code>git merge &lt;branch&gt;</code> : Combine branch into active branch</li>
            <li><code>git branch -d &lt;name&gt;</code> : Safely delete merged branch</li>
            <li><code>git remote -v</code> : List remote target URLs</li>
            <li><code>git push -u origin &lt;branch&gt;</code> : Push and track upstream</li>
            <li><code>git fetch origin</code> : Download remote changes (safe)</li>
            <li><code>git pull origin &lt;branch&gt;</code> : Fetch + auto-merge</li>
            <li><code>git diff --staged</code> : View differences staged for commit</li>
            <li><code>git restore &lt;file&gt;</code> : Discard local uncommitted edits</li>
            <li><code>git restore --staged &lt;file&gt;</code> : Unstage file</li>
            <li><code>git reset --soft HEAD~1</code> : Undo commit, keep staged</li>
            <li><code>git revert &lt;commit&gt;</code> : Undo commit safely with new commit</li>
            <li><code>git stash / pop</code> : Temporarily store & restore WIP edits</li>
          </ol>
        </div>

        <div class="concept-card">
          <h4>🧠 Top 10 Rapid Memory Tricks</h4>
          <p>• <strong>add</strong> = Prepare snapshot for staging.<br>
          • <strong>commit</strong> = Save permanent snapshot with hash.<br>
          • <strong>push</strong> = Upload commits to remote server.<br>
          • <strong>fetch</strong> = Download remote objects without merging.<br>
          • <strong>pull</strong> = <code>git fetch + git merge</code>.<br>
          • <strong>clone</strong> = Download entire repo and history once.<br>
          • <strong>reset</strong> = Rewind history (safe for local private commits).<br>
          • <strong>revert</strong> = Append undo commit (safe for public branches).<br>
          • <strong>stash</strong> = Clipboard for unfinished work.<br>
          • <strong>fork</strong> = Server-side copy on GitHub for open source.</p>
        </div>
      </div>

      <div class="interactive-diagram" style="margin-top: 2rem;">
        <div class="diagram-title">⚡ 5-Step Merge Conflict Checklist</div>
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <div class="step-title">Conflict Alert</div>
            <p>Git halts merge: <code>CONFLICT in file.txt</code>.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">2</div>
            <div class="step-title">Open File</div>
            <p>Locate <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">3</div>
            <div class="step-title">Edit Code</div>
            <p>Keep correct logic; delete conflict markers.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">4</div>
            <div class="step-title">Stage</div>
            <p>Mark resolved by running <code>git add file.txt</code>.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">5</div>
            <div class="step-title">Commit</div>
            <p>Finish resolution with <code>git commit</code>.</p>
          </div>
        </div>
      </div>
    </article>
    """
