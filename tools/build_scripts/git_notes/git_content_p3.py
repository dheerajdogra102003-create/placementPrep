# git_content_p3.py - Sections 16 to 25 of Git & GitHub Placement Notes

def get_git_part3_html():
    return r"""
    <!-- SECTION 16: CLONE -->
    <article class="note-section" id="sec-16">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 16</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Clone: Mirroring Remote Repositories</h2>
      <p class="section-intro">
        <code>git clone &lt;url&gt;</code> is the standard onboarding command. It downloads the complete repository history, creates a local working directory, configures the remote alias <code>origin</code>, and sets up upstream tracking for the default branch automatically.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📥 What Clone Does Automatically</h4>
          <p>1. Creates a local folder matching project name.<br>
          2. Runs <code>git init</code> and pulls full <code>.git</code> object database.<br>
          3. Sets up <code>origin</code> pointing to the clone URL.<br>
          4. Checks out a fresh working tree copy of the default branch (<code>main</code>).</p>
        </div>
      </div>
    </article>


    <!-- SECTION 17: PULL VS FETCH -->
    <article class="note-section" id="sec-17">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 17</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Git Pull vs Git Fetch (Crucial Placement Concept)</h2>
      <p class="section-intro">
        "What is the exact mathematical difference between git pull and git fetch?" This question appears in almost every Accenture, TCS, and Cognizant technical test.
      </p>

      <!-- Formula Block: Pull = Fetch + Merge -->
      <div class="formula-block">
        <div class="formula-name">The Core Git Equation</div>
        <div class="formula-math">git pull = git fetch + git merge</div>
        <div class="formula-desc">
          <code>git pull</code> is literally a convenience wrapper. It first executes <code>git fetch</code> to download new remote commits into remote-tracking branches (<code>origin/main</code>), and immediately executes <code>git merge origin/main</code> into your current active local branch.
        </div>
      </div>

      <!-- Comparison Table 5: Pull vs Fetch -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Git Fetch</th>
              <th>Git Pull</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Action</strong></td>
              <td>Downloads new remote commits to local repository only</td>
              <td>Downloads remote commits AND merges them into current working branch</td>
            </tr>
            <tr>
              <td><strong>Working Tree Impact</strong></td>
              <td><strong>Completely Safe:</strong> Working files remain untouched</td>
              <td><strong>Direct Modification:</strong> Files update immediately; can trigger merge conflicts!</td>
            </tr>
            <tr>
              <td><strong>Can Trigger Merge Conflicts?</strong></td>
              <td><strong>NO.</strong> Never causes conflicts.</td>
              <td><strong>YES.</strong> Conflicts occur if local commits clash with incoming remote commits.</td>
            </tr>
            <tr>
              <td><strong>Best Practice Use</strong></td>
              <td>Inspect remote work before deciding to integrate</td>
              <td>Fast daily synchronization when you know branches won't conflict</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 18: CHECKOUT VS SWITCH -->
    <article class="note-section" id="sec-18">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 18</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Checkout vs Switch vs Restore (Git 2.23+ Split)</h2>
      <p class="section-intro">
        Historically, <code>git checkout</code> was notoriously overloaded: it was used to switch branches, create branches, and discard file changes. In Git 2.23 (2019), Git split these responsibilities into two dedicated, unambiguous commands: <strong>git switch</strong> and <strong>git restore</strong>.
      </p>

      <!-- Comparison Table 6: Checkout vs Switch vs Restore -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Intent / Action</th>
              <th>Old Overloaded Command</th>
              <th>Modern Best Practice (Git 2.23+)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Switch to existing branch</td>
              <td><code>git checkout feature</code></td>
              <td><code>git switch feature</code></td>
            </tr>
            <tr>
              <td>Create & switch to new branch</td>
              <td><code>git checkout -b feature</code></td>
              <td><code>git switch -c feature</code></td>
            </tr>
            <tr>
              <td>Discard working tree changes in file</td>
              <td><code>git checkout -- app.js</code></td>
              <td><code>git restore app.js</code></td>
            </tr>
            <tr>
              <td>Unstage a file from Staging Area</td>
              <td><code>git reset HEAD app.js</code></td>
              <td><code>git restore --staged app.js</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 19: GIT RESTORE -->
    <article class="note-section" id="sec-19">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 19</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Restore: Safely Undoing Uncommitted Changes</h2>
      <p class="section-intro">
        <code>git restore</code> restores specified paths in the working tree or staging area with some contents from a restore source (default is HEAD).
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Discard Working Tree Changes</h4>
          <p>Command: <code>git restore index.html</code><br>
          Reverts <code>index.html</code> in your working directory back to the state of the last commit (or staging area). <strong>Warning:</strong> Any uncommitted edits are permanently lost!</p>
        </div>
        <div class="concept-card">
          <h4>2. Unstage a Staged File</h4>
          <p>Command: <code>git restore --staged index.html</code><br>
          Removes <code>index.html</code> from the Staging Area, keeping your actual file edits in the working directory intact!</p>
        </div>
      </div>
    </article>


    <!-- SECTION 20: GIT RESET -->
    <article class="note-section" id="sec-20">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 20</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Git Reset: Soft, Mixed & Hard Explained</h2>
      <p class="section-intro">
        <code>git reset</code> moves the current branch HEAD backward to an earlier commit. How it treats the Staging Area and Working Directory depends strictly on the mode flag.
      </p>

      <div class="diagram-container">
        <div class="diagram-title">Git Reset Modes Impact Matrix</div>
        <pre class="diagram-art">
Command                     HEAD Moved?    Staging Area Updated?    Working Directory Modified?
-------------------------------------------------------------------------------------------------
git reset --soft HEAD~1         YES               NO                       NO (Files stay staged!)
git reset --mixed HEAD~1 (def)  YES              YES (Files unstaged)      NO (Code remains on disk!)
git reset --hard HEAD~1         YES              YES (Discarded)          YES (DANGEROUS: Code deleted!)
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. <code>git reset --soft HEAD~1</code></h4>
          <p>Moves HEAD back 1 commit. Leaves Staging Area and Working Directory untouched. All changes from that undone commit remain staged, ready to be recommitted immediately (e.g. to fix a commit message or combine commits).</p>
        </div>
        <div class="concept-card">
          <h4>2. <code>git reset --mixed HEAD~1</code> (Default)</h4>
          <p>Moves HEAD back 1 commit AND resets the Staging Area. Your code edits remain safe in your Working Directory, but are now marked as "unstaged" (red in <code>git status</code>).</p>
        </div>
        <div class="concept-card">
          <h4>3. <code>git reset --hard HEAD~1</code> (DANGER!)</h4>
          <p>Moves HEAD, wipes the Staging Area, AND <strong>destroys all working directory changes</strong> to match that target commit! Any uncommitted work on disk is permanently wiped out.</p>
        </div>
      </div>
    </article>


    <!-- SECTION 21: GIT REVERT -->
    <article class="note-section" id="sec-21">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 21</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Git Revert: The Safe Forward-Undo</h2>
      <p class="section-intro">
        Unlike <code>git reset</code> which rewrites history by deleting commits, <code>git revert</code> creates a <strong>brand-new commit</strong> that applies the exact inverse mathematical diff of an earlier commit.
      </p>

      <div class="diagram-container">
        <div class="diagram-title">Git Revert Timeline Architecture</div>
        <pre class="diagram-art">
Before: C1 <--- C2 (introduced critical bug!) <--- C3 (HEAD)

Command: git revert C2

After:  C1 <--- C2 <--- C3 <--- C4 [Revert "C2"] (HEAD)
                                  ^
                                  |-- Brand-new commit that deletes whatever C2 added!
        </pre>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>🛡️ Why Revert is Mandatory on Shared Remote Branches</h4>
        <p>If you push commit C2 to <code>origin/main</code> and teammates have already pulled it, running <code>git reset</code> locally will rewrite history. When you force push, you break everyone else's local repo! <strong>Running <code>git revert C2</code> safely adds a new commit C4 that everyone can pull cleanly without history conflicts.</strong></p>
      </div>
    </article>


    <!-- SECTION 22: RESET VS REVERT -->
    <article class="note-section" id="sec-22">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 22</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Git Reset vs Git Revert: Master Decision Guide</h2>
      <p class="section-intro">
        This is arguably the #1 most frequently asked Git question across all IT MNC recruitment interviews.
      </p>

      <!-- Comparison Table 7: Reset vs Revert -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Git Reset</th>
              <th>Git Revert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mechanism</strong></td>
              <td>Moves the branch pointer backward, effectively erasing commits from active history</td>
              <td>Creates a <strong>brand-new commit</strong> that inverses the changes of a target commit</td>
            </tr>
            <tr>
              <td><strong>History Preserved?</strong></td>
              <td><strong>NO.</strong> Rewrites commit history.</td>
              <td><strong>YES.</strong> 100% preserves linear history; shows a complete audit trail.</td>
            </tr>
            <tr>
              <td><strong>Safe for Shared Remote Branches?</strong></td>
              <td><strong>NO (High Risk).</strong> Requires dangerous <code>git push --force</code>.</td>
              <td><strong>YES (100% Safe).</strong> Standard forward commit; teammate pull works seamlessly.</td>
            </tr>
            <tr>
              <td><strong>Where to Use</strong></td>
              <td>Private local commits that have NEVER been pushed to remote</td>
              <td>Public shared commits that have already been pushed to GitHub</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="memory-trick">
        <span class="memory-icon">💡</span>
        <div class="memory-content">
          <strong>Placement Memory Rule:</strong> <em>"Private local mistakes? Use RESET. Public shared mistakes? Use REVERT."</em>
        </div>
      </div>
    </article>


    <!-- SECTION 23: GIT STASH -->
    <article class="note-section" id="sec-23">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 23</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Stash: Temporary Clipboard for Dirty Work</h2>
      <p class="section-intro">
        When you are halfway through a feature and your manager demands an urgent production hotfix, Git will refuse to let you switch branches with uncommitted conflicts. <code>git stash</code> takes your uncommitted modifications and shelves them on an internal stack.
      </p>

      <div class="terminal-block">
        <div class="terminal-head">
          <div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div>
          <span class="terminal-tag">STASH LIFECYCLE</span>
        </div>
        <div class="term-cmd"><span class="prompt">$</span> git stash save "wip: shopping cart"    <span class="code-comment"># Cleans working directory; stores state</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git switch hotfix-bug                 <span class="code-comment"># Now free to switch branches safely!</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git switch feature-cart               <span class="code-comment"># Return after hotfix is merged</span></div>
        <div class="term-cmd"><span class="prompt">$</span> git stash pop                         <span class="code-comment"># Restores changes AND removes from stack</span></div>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4><code>git stash pop</code> vs <code>git stash apply</code></h4>
          <p>• <code>git stash pop</code>: Applies the stashed changes to your working tree AND <strong>deletes</strong> it from the stash list.<br>• <code>git stash apply</code>: Applies the stashed changes to your working tree but <strong>keeps</strong> the stash item saved in the list for reuse.</p>
        </div>
      </div>
    </article>


    <!-- SECTION 24: GIT DIFF -->
    <article class="note-section" id="sec-24">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 24</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Git Diff: Inspecting Exact Code Changes</h2>
      <p class="section-intro">
        <code>git diff</code> reveals granular line-by-line differences. In technical exams, candidates must know what each variation compares.
      </p>

      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Command</th>
              <th>What it Compares</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>git diff</code></td>
              <td><strong>Working Directory</strong> vs <strong>Staging Area</strong> (unstaged edits)</td>
            </tr>
            <tr>
              <td><code>git diff --staged</code> (or <code>--cached</code>)</td>
              <td><strong>Staging Area</strong> vs <strong>Last Commit (HEAD)</strong> (what will be committed)</td>
            </tr>
            <tr>
              <td><code>git diff HEAD</code></td>
              <td><strong>Working Directory</strong> vs <strong>Last Commit (HEAD)</strong> (all uncommitted edits)</td>
            </tr>
            <tr>
              <td><code>git diff branch1..branch2</code></td>
              <td>Compares tips of two branches</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 25: GIT TAGS -->
    <article class="note-section" id="sec-25">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 25</span>
        <span class="sec-priority priority-p2">MEDIUM PRIORITY</span>
      </div>
      <h2 class="section-title">Git Tags: Release Markers & Versioning</h2>
      <p class="section-intro">
        Tags are static reference markers permanently pointing to specific release milestones (e.g. <code>v1.0.0</code>). Unlike branches, tags never move forward when new commits are created.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Lightweight Tag</h4>
          <p>Simply a named pointer to a commit hash: <code>git tag v1.0.0</code>. Stores no extra metadata.</p>
        </div>
        <div class="concept-card">
          <h4>2. Annotated Tag (Recommended)</h4>
          <p>Stored as a full object in the Git database containing tagger name, email, date, GPG signature, and tagging message: <code>git tag -a v1.0.0 -m "Release version 1.0.0"</code>.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #5: Pushing Tags</div>
        <div class="trap-desc">
          By default, <code>git push</code> does NOT transfer tags to remote servers! You must explicitly push tags using <code>git push origin v1.0.0</code> or push all local tags using <code>git push origin --tags</code>.
        </div>
      </div>
    </article>
    """
