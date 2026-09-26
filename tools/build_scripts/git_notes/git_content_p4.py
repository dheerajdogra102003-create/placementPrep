# git_content_p4.py - Sections 26 to 30 of Git & GitHub Placement Notes

def get_git_part4_html():
    return r"""
    <!-- SECTION 26: GITHUB PULL REQUESTS -->
    <article class="note-section" id="sec-26">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 26</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">GitHub Pull Requests (PRs) & Code Review</h2>
      <p class="section-intro">
        A <strong>Pull Request (PR)</strong> is a GitHub collaboration mechanism where a developer proposes that the project maintainers "pull" changes from a feature branch into the target base branch (e.g., <code>main</code> or <code>develop</code>). It serves as the primary gateway for peer code reviews, automated CI/CD validation, and team discussion.
      </p>

      <div class="interactive-diagram">
        <div class="diagram-title">🔄 End-to-End Pull Request Lifecycle</div>
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-num">1</div>
            <div class="step-title">Feature Branch</div>
            <p>Developer creates feature branch, writes code, tests locally, and commits.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">2</div>
            <div class="step-title">Push to Remote</div>
            <p>Run <code>git push -u origin feature-auth</code> to upload branch to GitHub.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">3</div>
            <div class="step-title">Open PR</div>
            <p>Create PR comparing <code>feature-auth</code> into <code>main</code> with description.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">4</div>
            <div class="step-title">Review & CI</div>
            <p>Automated tests run; senior engineers comment, request changes, or approve.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">5</div>
            <div class="step-title">Merge & Delete</div>
            <p>PR is merged into <code>main</code>; feature branch safely deleted.</p>
          </div>
        </div>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🔀 3 GitHub Merge Methods</h4>
          <p><strong>1. Create a Merge Commit:</strong> Retains all individual commits and creates a 2-parent merge commit. Preserves full history.<br>
          <strong>2. Squash and Merge:</strong> Combines all branch commits into a single clean commit on <code>main</code>. Industry standard for feature branches.<br>
          <strong>3. Rebase and Merge:</strong> Replays commits linearly onto <code>main</code> without a merge commit.</p>
        </div>
        <div class="concept-card">
          <h4>🛡️ Branch Protection Rules</h4>
          <p>Enterprise repositories enforce rules on <code>main</code> before PR merges can occur:<br>
          • Require minimum 1 or 2 approving code reviews.<br>
          • Require automated status checks / unit tests to pass.<br>
          • Prohibit direct <code>git push</code> to protected branches.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap: 'git pull' vs 'Pull Request'</div>
        <div class="trap-desc">
          Freshers frequently confuse these two names because of the word "pull":<br>
          • <code>git pull</code> is a local Git CLI command (fetch + merge).<br>
          • <strong>Pull Request</strong> is a GitHub web platform feature for peer code review and collaborative merging. There is NO Git command named <code>git pull-request</code>.
        </div>
      </div>
    </article>


    <!-- SECTION 27: GITHUB ISSUES -->
    <article class="note-section" id="sec-27">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 27</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">GitHub Issues & Project Tracking</h2>
      <p class="section-intro">
        GitHub Issues act as an integrated bug tracker, task manager, and feature request board. In professional Agile and DevOps environments, every line of production code is typically traceable back to a specific GitHub Issue ID.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🏷️ Core Issue Metadata</h4>
          <p>• <strong>Labels:</strong> Categorize issues (e.g., <code>bug</code>, <code>enhancement</code>, <code>good first issue</code>, <code>documentation</code>).<br>
          • <strong>Assignees:</strong> Developers responsible for resolving the task.<br>
          • <strong>Milestones:</strong> Group issues under product release deadlines (e.g., Sprint 14, v2.1.0).<br>
          • <strong>Projects:</strong> Kanban boards (To Do, In Progress, Done) tied to issues.</p>
        </div>
        <div class="concept-card">
          <h4>🔗 Auto-Closing Issues with Git Keywords</h4>
          <p>When you reference an issue in a commit message or PR description with special keywords, GitHub automatically closes the issue upon merging into default branch:<br>
          • <code>git commit -m "Fix login timeout issue. Closes #42"</code><br>
          • Supported keywords: <code>close</code>, <code>closes</code>, <code>closed</code>, <code>fix</code>, <code>fixes</code>, <code>fixed</code>, <code>resolve</code>, <code>resolves</code>, <code>resolved</code>.</p>
        </div>
      </div>
    </article>


    <!-- SECTION 28: FORK -->
    <article class="note-section" id="sec-28">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 28</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Fork vs Clone: Open Source Contribution</h2>
      <p class="section-intro">
        A <strong>Fork</strong> is a server-side copy of someone else's GitHub repository created under your own GitHub account. It allows you to freely experiment and propose changes without affecting the original project when you do not possess write permissions.
      </p>

      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Fork</th>
              <th>Clone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Where it happens</strong></td>
              <td>Remote server (GitHub to GitHub)</td>
              <td>Remote server to Local developer machine</td>
            </tr>
            <tr>
              <td><strong>Mechanism</strong></td>
              <td>Web action on GitHub UI</td>
              <td>CLI command (<code>git clone &lt;url&gt;</code>)</td>
            </tr>
            <tr>
              <td><strong>Permissions Needed</strong></td>
              <td>None (can fork any public repository)</td>
              <td>Read permission to download code</td>
            </tr>
            <tr>
              <td><strong>Primary Purpose</strong></td>
              <td>Contribute to external projects via PR</td>
              <td>Work on code locally in your editor</td>
            </tr>
            <tr>
              <td><strong>Direct Push Ability</strong></td>
              <td>You have full write access to your forked copy</td>
              <td>Only if you have collaborator / write access</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="terminal-block">
        <div class="terminal-header">
          <div class="terminal-dots"><span class="dot-red"></span><span class="dot-yellow"></span><span class="dot-green"></span></div>
          <span class="terminal-title">bash — Syncing a Fork with Upstream</span>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <pre class="terminal-body"><code><span class="cmd-prompt">$</span> <span class="cmd-exec">git remote add upstream https://github.com/original-owner/project.git</span>
<span class="cmd-prompt">$</span> <span class="cmd-exec">git fetch upstream</span>
<span class="cmd-prompt">$</span> <span class="cmd-exec">git checkout main</span>
<span class="cmd-prompt">$</span> <span class="cmd-exec">git merge upstream/main</span>
<span class="cmd-prompt">$</span> <span class="cmd-exec">git push origin main</span></code></pre>
        <div class="terminal-expl">
          <strong>Enterprise Scenario:</strong> Keep your fork up-to-date with the main project by pulling from <code>upstream</code> and pushing to your fork's <code>origin</code>.
        </div>
      </div>
    </article>


    <!-- SECTION 29: GITHUB ACTIONS BASICS -->
    <article class="note-section" id="sec-29">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 29</span>
        <span class="sec-priority priority-p2">MEDIUM PRIORITY</span>
      </div>
      <h2 class="section-title">GitHub Actions & CI/CD Fundamentals</h2>
      <p class="section-intro">
        <strong>GitHub Actions</strong> is GitHub's built-in Continuous Integration and Continuous Delivery (CI/CD) automation platform. It allows software teams to build, test, and deploy code directly from GitHub repositories upon git triggers.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🧱 Architecture Components</h4>
          <p>• <strong>Workflows:</strong> YAML files placed strictly in <code>.github/workflows/</code>.<br>
          • <strong>Events / Triggers:</strong> Specific activities that trigger execution (e.g. <code>on: [push, pull_request]</code>).<br>
          • <strong>Jobs:</strong> A series of steps executed on the same runner VM (e.g. <code>ubuntu-latest</code>).<br>
          • <strong>Steps:</strong> Individual tasks that run shell commands or reusable actions (e.g. <code>actions/checkout@v3</code>).</p>
        </div>
        <div class="concept-card">
          <h4>💼 Why Freshers Need This in Placement</h4>
          <p>Companies like TCS, Accenture, and Deloitte ask about CI/CD pipelines in technical interviews:<br>
          • "How do you ensure broken code is not merged into production?"<br>
          • "Automated test suites run in GitHub Actions on every Pull Request, blocking merge if any unit test fails."</p>
        </div>
      </div>
    </article>


    <!-- SECTION 30: GIT WORKFLOW -->
    <article class="note-section" id="sec-30">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 30</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Professional Industry Git Workflow (A Day in the Life)</h2>
      <p class="section-intro">
        In IT companies, developers NEVER work directly on <code>main</code> or <code>master</code>. Every feature, bug fix, or hotfix follows a strict, standardized collaborative lifecycle.
      </p>

      <div class="interactive-diagram">
        <div class="diagram-title">🏢 Enterprise Feature-Branch Workflow</div>
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-num">Step 1</div>
            <div class="step-title">Sync Local Main</div>
            <code>git checkout main</code><br>
            <code>git pull origin main</code>
          </div>
          <div class="workflow-step">
            <div class="step-num">Step 2</div>
            <div class="step-title">Create Feature Branch</div>
            <code>git switch -c feature/payment-gateway</code>
          </div>
          <div class="workflow-step">
            <div class="step-num">Step 3</div>
            <div class="step-title">Develop & Test</div>
            <p>Write clean code, run test suite locally.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">Step 4</div>
            <div class="step-title">Stage & Commit</div>
            <code>git add .</code><br>
            <code>git commit -m "Add Razorpay integration"</code>
          </div>
          <div class="workflow-step">
            <div class="step-num">Step 5</div>
            <div class="step-title">Push Feature Branch</div>
            <code>git push -u origin feature/payment-gateway</code>
          </div>
          <div class="workflow-step">
            <div class="step-num">Step 6</div>
            <div class="step-title">Open PR & Review</div>
            <p>Peer review, resolve comments, CI checks green.</p>
          </div>
          <div class="workflow-step">
            <div class="step-num">Step 7</div>
            <div class="step-title">Squash & Merge</div>
            <p>Merged to main branch, delete remote feature branch.</p>
          </div>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Golden Rule of Git in Enterprise IT</div>
        <div class="trap-desc">
          <strong>"Never push directly to main, never commit secrets/credentials (.env), and always fetch/pull before starting new work."</strong> Mentioning this in HR and Technical interviews immediately sets you apart as industry-ready.
        </div>
      </div>
    </article>
    """
