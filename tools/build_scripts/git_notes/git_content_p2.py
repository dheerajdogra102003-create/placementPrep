# git_content_p2.py - Sections 09 to 15 of Git & GitHub Placement Notes

def get_git_part2_html():
    return r"""
    <!-- SECTION 09: COMMIT & HEAD -->
    <article class="note-section" id="sec-09">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 09</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">The Commit Object & The HEAD Pointer</h2>
      <p class="section-intro">
        A commit in Git is an immutable snapshot object containing: (1) Tree hash representing file hierarchy, (2) Parent commit hash(es), (3) Author & Committer metadata with timestamp, (4) Commit message.
      </p>

      <div class="diagram-container">
        <div class="diagram-title">Commit Node Chain with HEAD Reference</div>
        <pre class="diagram-art">
   [ Commit A (1a2b) ] <--- [ Commit B (3c4d) ] <--- [ Commit C (5e6f) ]
        (Root)               parent: 1a2b               parent: 3c4d
                                                              ^
                                                              |
                                                         [ main ]  <-- Branch Pointer
                                                              ^
                                                              |
                                                           [ HEAD ] <-- "You Are Here"
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📍 What is HEAD?</h4>
          <p><strong>HEAD</strong> is a special pointer/reference that indicates your <em>currently active branch and commit</em>. Under normal conditions, HEAD points to a branch name (e.g. <code>HEAD -> main</code>), and the branch name points to the latest commit.</p>
        </div>
        <div class="concept-card">
          <h4>👻 The "Detached HEAD" State</h4>
          <p>Occurs when you checkout a specific commit hash directly (e.g. <code>git checkout 3c4d</code>) instead of a branch. HEAD points directly to a commit, not a branch. <strong>Warning:</strong> Any new commits made in a detached HEAD state will become orphaned and garbage collected if you switch branches without creating a new branch pointer!</p>
        </div>
      </div>
    </article>


    <!-- SECTION 10: BRANCHING -->
    <article class="note-section" id="sec-10">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 10</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Git Branching: Lightweight Pointers</h2>
      <p class="section-intro">
        In Git, a branch is NOT a separate physical folder copy. A branch is simply an ultra-lightweight, 41-byte movable pointer referencing a specific commit SHA-1 hash.
      </p>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">BRANCH MANAGEMENT COMMANDS</span>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git branch feature-login              <span class="code-comment"># Creates branch, stays on main</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git switch feature-login              <span class="code-comment"># Switches HEAD to feature-login</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git switch -c feature-signup          <span class="code-comment"># Recommended: Create & switch in 1 step</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git branch -d feature-login           <span class="code-comment"># Safe delete (only if already merged)</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git branch -D feature-abandoned       <span class="code-comment"># Force delete (even with unmerged work!)</span></div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #3: Deleting the Active Branch</div>
        <div class="trap-desc">
          You <strong>cannot delete the branch you are currently on</strong>! If you run <code>git branch -d feature-x</code> while on <code>feature-x</code>, Git will abort with: <code>error: Cannot delete branch 'feature-x' checked out at ...</code>. You must first switch to another branch (e.g. <code>git switch main</code>) before deleting it.
        </div>
      </div>
    </article>


    <!-- SECTION 11: MERGING -->
    <article class="note-section" id="sec-11">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 11</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Merging: Fast-Forward vs Three-Way Merge</h2>
      <p class="section-intro">
        Merging integrates independent development histories. Placement exams test whether you understand the exact conditions triggering a <strong>Fast-Forward merge</strong> versus a <strong>Three-Way merge</strong>.
      </p>

      <!-- Architecture Diagram: FF vs 3-Way -->
      <div class="diagram-container">
        <div class="diagram-title">Fast-Forward Merge vs Three-Way Merge</div>
        <pre class="diagram-art">
Case 1: Fast-Forward Merge (No Divergence)
Before:   main: C1 <--- C2
                         \
            feature:      C3 <--- C4 (HEAD)
Command:  git switch main; git merge feature
After:    main & feature: C1 <--- C2 <--- C3 <--- C4 (HEAD)
Effect:   Git simply moves the 'main' pointer forward! NO merge commit created.

Case 2: Three-Way Merge (Diverged History)
Before:             C3 <--- C4 (feature)
                   /
          C1 <--- C2 (Common Ancestor)
                   \
                    C5 <--- C6 (main, HEAD)
Command:  git merge feature
After:    Creates a brand-new MERGE COMMIT (C7) with TWO PARENTS (C6 and C4)!
        </pre>
      </div>

      <!-- Comparison Table 4: FF vs 3-Way -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Fast-Forward Merge</th>
              <th>Three-Way Merge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Condition</strong></td>
              <td>Target branch (main) has NO new commits since feature branch was created.</td>
              <td>Both branches have progressed with new commits since their common ancestor.</td>
            </tr>
            <tr>
              <td><strong>Merge Commit Created?</strong></td>
              <td><strong>NO.</strong> Merely moves the branch pointer forward.</td>
              <td><strong>YES.</strong> Automatically creates a special merge commit with 2 parents.</td>
            </tr>
            <tr>
              <td><strong>Can Conflicts Occur?</strong></td>
              <td><strong>NO.</strong> Impossible because history is strictly linear.</td>
              <td><strong>YES.</strong> Conflicts occur if both branches modified overlapping lines.</td>
            </tr>
            <tr>
              <td><strong>Override Flag</strong></td>
              <td>Can force a merge commit using <code>git merge --no-ff</code></td>
              <td>Default behavior when branches diverge.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 12: MERGE CONFLICTS -->
    <article class="note-section" id="sec-12">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 12</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Merge Conflicts: Anatomy & Resolution Workflow</h2>
      <p class="section-intro">
        A merge conflict is NOT an error. It occurs when Git encounters competing modifications on the exact same lines of the same file across both branches, and refuses to guess which author's change to keep.
      </p>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">CONFLICT MARKERS IN CODE FILE</span>
        </div>
        <div class="term-output">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (current branch, e.g. main)
const API_URL = "https://api.production.company.com/v1";
=======
const API_URL = "https://api.staging.company.com/v2";
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-payments (incoming branch)</div>
        <div class="term-desc">
          • <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>: Starts changes from the branch you are currently on.<br>
          • <code>=======</code>: Separator line dividing the two competing versions.<br>
          • <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; branch-name</code>: Ends incoming changes from the branch being merged.
        </div>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>🛠️ The 5-Step Conflict Resolution Protocol</h4>
        <p>1. <strong>Identify:</strong> Run <code>git status</code> to see conflicting files under <em>"both modified"</em>.<br>
        2. <strong>Edit:</strong> Open the file, discuss with teammates, delete the conflict markers, and keep the desired code.<br>
        3. <strong>Stage:</strong> Run <code>git add &lt;resolved-file&gt;</code> to mark the conflict as resolved.<br>
        4. <strong>Commit:</strong> Run <code>git commit</code> (no message needed; Git generates a default merge message).<br>
        5. <strong>Abort Option:</strong> If things go wrong, run <code>git merge --abort</code> to safely revert back to pre-merge state.</p>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #4</div>
        <div class="trap-desc">
          Interview question: "After manually resolving a merge conflict and removing conflict markers, what is the mandatory command you must run before committing?"<br>
          <strong>You MUST run <code>git add &lt;file&gt;</code>!</strong> Running <code>git add</code> tells Git: "I have reviewed and resolved this conflict." If you try running <code>git commit</code> without staging, Git will reject it!
        </div>
      </div>
    </article>


    <!-- SECTION 13: REMOTE REPOSITORY -->
    <article class="note-section" id="sec-13">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 13</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Remote Repositories & The 'origin' Convention</h2>
      <p class="section-intro">
        A remote repository is a version of your project hosted on the internet or local network (e.g. on GitHub). <code>origin</code> is not a keyword—it is simply the default alias Git assigns to the remote URL.
      </p>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">REMOTE CONFIGURATION COMMANDS</span>
          <button class="copy-btn" onclick="navigator.clipboard.writeText('git remote add origin https://github.com/user/repo.git\ngit remote -v')">Copy</button>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git remote add origin https://github.com/rahul/placement-prep.git</div>
        <div class="term-cmd"><span class="prompt">$</span> git remote -v</div>
        <div class="term-output">origin  https://github.com/rahul/placement-prep.git (fetch)
origin  https://github.com/rahul/placement-prep.git (push)</div>
        <div class="term-desc">Maps the human-friendly shorthand alias <code>origin</code> to the full HTTPS / SSH repository URL.</div>
      </div>
    </article>


    <!-- SECTION 14: PUSH & PULL -->
    <article class="note-section" id="sec-14">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 14</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Git Push & Pull: Upstream Tracking (-u)</h2>
      <p class="section-intro">
        <code>git push</code> transfers local commits to the remote repository. <code>git pull</code> downloads remote commits and merges them immediately into your active branch.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🚀 Upstream Tracking (<code>-u</code> / <code>--set-upstream</code>)</h4>
          <p>The first time you push a new branch, you run: <code>git push -u origin feature-x</code>.<br>
          The <code>-u</code> flag links your local branch to the remote branch <code>origin/feature-x</code>. For all future pushes and pulls on this branch, you can simply type <code>git push</code> or <code>git pull</code> without typing the remote name!</p>
        </div>
        <div class="concept-card">
          <h4>🛑 Push Rejected (Non-Fast-Forward)</h4>
          <p>If another teammate pushed commits to <code>origin/main</code> while you were working, running <code>git push</code> will fail with: <code>[rejected - non-fast-forward]</code>.<br>
          <strong>Resolution:</strong> You must first run <code>git pull</code> to fetch and integrate their changes locally, resolve any merge conflicts, and then run <code>git push</code>.</p>
        </div>
      </div>
    </article>


    <!-- SECTION 15: GIT FETCH -->
    <article class="note-section" id="sec-15">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 15</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Fetch & Remote-Tracking Branches</h2>
      <p class="section-intro">
        <code>git fetch</code> downloads new commits, files, and refs from the remote repository, but <strong>does NOT integrate them into your working files</strong>. It updates your <em>remote-tracking branches</em> (e.g. <code>origin/main</code>).
      </p>

      <div class="diagram-container">
        <div class="diagram-title">What Git Fetch Does Under the Hood</div>
        <pre class="diagram-art">
   Local 'main':              C1 <--- C2 (HEAD)  <-- Working files completely untouched!
                                      \
   Remote-Tracking 'origin/main':      C3 <--- C4  <-- Updated by 'git fetch' from GitHub!
        </pre>
      </div>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">FETCH & INSPECT WORKFLOW</span>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git fetch origin</div>
        <div class="term-cmd"><span class="prompt">$</span> git log main..origin/main --oneline  <span class="code-comment"># View incoming commits before merging!</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git diff main origin/main            <span class="code-comment"># Inspect exact code diffs!</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git merge origin/main                <span class="code-comment"># Merge only after you verify it's safe!</span></div>
      </div>
    </article>
    """
