/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: GIT & GITHUB
   Industry scenario-based version control & collaborative workflow questions
   ========================================================================== */

(function () {
  window.GIT_QUESTIONS = [
    {
      id: 'git-001',
      question: 'A software engineer has modified three files (`auth.js`, `db.js`, `styles.css`) in their local working directory, but only wants to record the changes of `auth.js` in the upcoming commit. Which sequence of commands correctly achieves this?',
      codeSnippet: '',
      options: [
        'git commit -a -m "Update auth logic"',
        'git add auth.js && git commit -m "Update auth logic"',
        'git commit auth.js -a -m "Update auth logic"',
        'git stage --all && git commit -m "Update auth logic"'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'scenario',
      topic: 'Staging & Commits',
      explanation: 'In Git, staging area (index) provides granular control. Running `git add auth.js` stages specifically that file into index, leaving `db.js` and `styles.css` in the unstaged working tree. `git commit` then creates a snapshot of only what was staged.',
      wrongOptionExplanations: {
        '0': '`git commit -a` automatically stages and commits all modified tracked files, including `db.js` and `styles.css`.',
        '2': '`-a` overrides specific files and commits all modified tracked files in the repo.',
        '3': '`git stage --all` (or `git add -A`) stages all 3 modified files.'
      },
      realWorldApplication: 'Atomic commits are a fundamental requirement in enterprise CI/CD workflows so that single bug fixes or features can be cleanly cherry-picked or reverted without collateral changes.',
      placementTip: 'MNC interview favorite: Never use `-a` when asked to commit selective files. Staging is the intermediate gatekeeper in Git.'
    },
    {
      id: 'git-002',
      question: 'A developer has completed a feature on branch `feature-payment`. The team lead requires the feature commits to be integrated on top of the latest `main` branch such that the project history remains linear with no merge-commit bubble. Which command should the developer execute on `feature-payment`?',
      codeSnippet: '',
      options: [
        'git merge main',
        'git rebase main',
        'git checkout main && git merge --no-ff feature-payment',
        'git cherry-pick main'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'comparison',
      topic: 'Rebase vs Merge',
      explanation: 'Running `git rebase main` while on `feature-payment` re-applies each commit of `feature-payment` on top of the latest commit of `main`. This produces a clean, linear git history without generating an extraneous 3-way merge commit.',
      wrongOptionExplanations: {
        '0': '`git merge main` creates a non-linear 3-way merge commit join.',
        '2': '`--no-ff` (no fast-forward) explicitly forces the creation of a merge commit bubble, which is the opposite of linear history.',
        '3': '`cherry-pick` copies a specific single commit, not an entire branch rebase.'
      },
      realWorldApplication: 'Large engineering organizations (like Google and Meta) enforce trunk-based development with linear rebased histories to simplify bisecting regressions and automated rollbacks.',
      placementTip: 'Rule of thumb: `merge` preserves full historical timeline with merge bubbles; `rebase` rewrites local commit bases to maintain a single straight line.'
    },
    {
      id: 'git-003',
      question: 'A commit containing a critical security regression was pushed to production remote branch `main`. Team policy strictly prohibits force-pushing (`git push --force`) or rewriting shared public commit history. What is the safest way to undo this commit?',
      codeSnippet: '',
      options: [
        'git reset --hard HEAD~1 && git push origin main',
        'git revert <commit-hash> && git push origin main',
        'git checkout HEAD~1 && git push origin main',
        'git rm -r . && git commit -m "Undo"'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'scenario',
      topic: 'Reset vs Revert',
      explanation: '`git revert <commit-hash>` creates an entirely new commit that applies inverse diffs of the specified commit. Because it appends new history rather than deleting existing commits, it works safely on shared public branches without requiring destructive force-pushes.',
      wrongOptionExplanations: {
        '0': '`git reset --hard` rewrites history locally and requires a rejected/dangerous `--force` push to update remote `main`.',
        '2': 'Checking out detached HEAD does not update the branch ref pointer on remote.',
        '3': '`git rm -r .` deletes every file in the repository, disastrously wiping out the codebase.'
      },
      realWorldApplication: 'Public branch integrity: `git revert` is the standard DevOps procedure for rolling back faulty production deployments while preserving audit trails for compliance.',
      placementTip: 'Golden Rule: Use `git reset` on local unpushed commits; use `git revert` on public shared remote branches.'
    },
    {
      id: 'git-004',
      question: 'While actively coding a feature, you are urgently instructed to switch branches to fix a live production bug. You are not ready to commit your half-finished work. Which Git command temporarily shelves your uncommitted changes without losing them?',
      codeSnippet: '',
      options: [
        'git clean -fd',
        'git stash',
        'git checkout -- .',
        'git branch -d temp'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Stash & .gitignore',
      explanation: '`git stash` takes your uncommitted modifications (both staged and unstaged files) and saves them onto a stack of incomplete changes, reverting your working directory to match the clean `HEAD` commit. You can restore them later using `git stash pop`.',
      wrongOptionExplanations: {
        '0': '`git clean -fd` permanently and irrecoverably deletes untracked files and directories.',
        '2': '`git checkout -- .` permanently discards all unstaged working tree modifications.',
        '3': 'Deleting a branch does not save uncommitted working tree changes.'
      },
      realWorldApplication: 'Context switching between feature development, code reviews, and emergency production hotfixes requires frequent use of `git stash` and `git stash pop`.',
      placementTip: '`git stash` stores dirty state on a LIFO stack. Remember `git stash list` views stored stashes and `git stash pop` restores the top stash.'
    },
    {
      id: 'git-005',
      question: 'You notice that a sensitive file named `.env` was committed and pushed to GitHub three commits ago, even though you just added `.env` to `.gitignore`. Why does `.env` still get tracked by Git in subsequent commits?',
      codeSnippet: '',
      options: [
        '.gitignore only accepts uppercase filenames',
        'Files that were already tracked prior to being added to .gitignore must be untracked using `git rm --cached`',
        '.gitignore requires git daemon restart to take effect',
        '.gitignore only works for files located in subdirectories'
      ],
      correctAnswer: 1,
      difficulty: 'Hard',
      type: 'debugging',
      topic: 'Stash & .gitignore',
      explanation: '`.gitignore` prevents *untracked* files from being added to the Git index. If a file is already tracked in repository history, adding its path to `.gitignore` does not untrack it. You must explicitly remove it from the index via `git rm --cached .env`.',
      wrongOptionExplanations: {
        '0': '`.gitignore` is case-sensitive according to the underlying filesystem and supports any filename.',
        '2': 'Git is a decentralized command-line tool, not a running background daemon requiring restart.',
        '3': '`.gitignore` works seamlessly at repository root and in all nested directory levels.'
      },
      realWorldApplication: 'Accidentally tracking `.env` or credential files is one of the leading causes of enterprise cloud API key leaks on GitHub. Removing from cache and rotating keys is mandatory.',
      placementTip: 'Frequent interview trap: `.gitignore` ignores UNTRACKED files only. Already tracked files must be removed with `git rm --cached <file>`.'
    }
  ];
})();
