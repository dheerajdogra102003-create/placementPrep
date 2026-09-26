# build_part4.py - Questions Q076 to Q100 (All Hard)
part4 = [
    # Topic 10 (cont): clone_fork_and_pull_request (5 questions: Q076-Q080)
    {
        "id": "Q076",
        "question": "A developer forks an open-source repository `upstream-org/project` to their personal GitHub account `dev-user/project`, clones their fork locally, and develops a feature. Two weeks later, before submitting a Pull Request, they find that `upstream-org/project` has moved ahead with 30 new commits on `main`. Which sequence of commands correctly synchronizes their local `main` with the original upstream project?",
        "type": "workflow",
        "difficulty": "Hard",
        "topic": "clone_fork_and_pull_request",
        "options": {
            "A": "Run `git remote add upstream https://github.com/upstream-org/project.git`, then `git fetch upstream`, switch to local `main`, and run `git merge upstream/main`.",
            "B": "Run `git clone --update upstream-org/project` inside their local folder.",
            "C": "Run `git push --sync upstream-org/project main`.",
            "D": "Delete their personal fork on GitHub and create a new fork from scratch."
        },
        "correct_answer": "A",
        "explanation": "To sync a local clone with the original project: 1. Add the upstream remote reference with `git remote add upstream <upstream-url>`, 2. Download the latest commits using `git fetch upstream`, 3. Switch to your local `main` branch (`git switch main`), and 4. Merge incoming upstream commits via `git merge upstream/main` (or rebase). Finally, push the updated `main` to your personal fork (`origin`).",
        "why_other_options_are_wrong": {
            "A": "Correct: Standard upstream synchronization workflow for forked open-source projects.",
            "B": "`git clone --update` is a nonexistent command.",
            "C": "`git push --sync` is invalid syntax; you cannot push into an upstream repo without write permissions.",
            "D": "Deleting the fork destroys in-progress branches, open PRs, and history."
        },
        "placement_trap": "Assuming pulling from `origin` fetches changes from the original repository. `origin` points to your personal fork, not the upstream organization repository!",
        "real_world_use": "Every open-source contributor and enterprise developer working across fork boundaries uses this upstream sync pattern."
    },
    {
        "id": "Q077",
        "question": "A contributor submits a Pull Request on GitHub. The repository maintainer leaves a review comment: 'Please squash your 6 small commits into a single cohesive commit before we merge.' Which local Git tool and command enables the contributor to combine these 6 commits?",
        "type": "scenario",
        "difficulty": "Hard",
        "topic": "clone_fork_and_pull_request",
        "options": {
            "A": "`git compress -n 6`",
            "B": "`git rebase -i HEAD~6`",
            "C": "`git merge --squash-only HEAD~6`",
            "D": "`git commit --combine 6`"
        },
        "correct_answer": "B",
        "explanation": "Interactive rebase (`git rebase -i HEAD~6`) opens an editor listing the last 6 commits. By changing the command from `pick` to `squash` (or `s`) on the bottom 5 commits, Git melds those 5 commits into the first commit, prompting for a single combined commit message. After completing the rebase, the contributor force-pushes with `--force-with-lease` to update the PR.",
        "why_other_options_are_wrong": {
            "A": "`git compress` is not a valid Git command.",
            "B": "Correct: `git rebase -i HEAD~6` allows squashing, rewording, dropping, or reordering commits interactively.",
            "C": "`--squash-only` is not a valid merge option.",
            "D": "`--combine` is not a valid commit flag."
        },
        "placement_trap": "Attempting to undo commits manually with hard resets rather than using interactive rebase (`git rebase -i`).",
        "real_world_use": "Standard pre-merge code review requirement in enterprise repos to maintain a clean Git history."
    },
    {
        "id": "Q078",
        "question": "A software company wants external vendor contractors to contribute bug fixes to their private repository, but company policy strictly forbids granting vendor developers direct write (push) access to the repository. Which GitHub workflow model satisfies this security requirement?",
        "type": "workflow",
        "difficulty": "Hard",
        "topic": "clone_fork_and_pull_request",
        "options": {
            "A": "Grant vendors temporary Admin access and revoke it after each commit.",
            "B": "The Fork and Pull Request model: Vendors fork the repository to their own accounts/organization, develop in their forks, and submit Pull Requests to the parent repository where internal staff review and merge.",
            "C": "Vendors commit directly to `main` using shared corporate service account passwords.",
            "D": "Vendors must email zip files of modified code to the team lead."
        },
        "correct_answer": "B",
        "explanation": "The Fork and Pull Request workflow allows external contributors to propose changes without granting write permissions to the main codebase. Contributors push branches to their personal forks on GitHub and submit PRs. Repository maintainers review diffs, trigger CI/CD checks, and merge accepted changes safely.",
        "why_other_options_are_wrong": {
            "A": "Granting admin access violates least privilege and allows deletion of branches or settings.",
            "B": "Correct: Forking + Pull Requests provides complete write-isolation while enabling frictionless peer review.",
            "C": "Shared service accounts violate audit compliance and security protocols.",
            "D": "Emailing zip archives abandons version control, lineage, and automated CI pipelines."
        },
        "placement_trap": "Assuming Pull Requests require direct push/write permissions on the target repository.",
        "real_world_use": "Core security architecture for GitHub open-source ecosystems and multi-vendor enterprise contracts."
    },
    {
        "id": "Q079",
        "question": "In GitHub Pull Request terminology, what is the critical difference between the 'Base Branch' and the 'Compare Branch'?",
        "type": "conceptual",
        "difficulty": "Hard",
        "topic": "clone_fork_and_pull_request",
        "options": {
            "A": "The 'Base Branch' is the target branch into which changes will be merged (e.g. `main`); the 'Compare Branch' is the feature branch containing the new commits to be reviewed.",
            "B": "The 'Base Branch' is the local branch on your laptop; the 'Compare Branch' is the branch on GitHub.",
            "C": "The 'Base Branch' contains deleted files; the 'Compare Branch' contains added files.",
            "D": "There is no difference; they are interchangeable aliases."
        },
        "correct_answer": "A",
        "explanation": "When opening a Pull Request, Git/GitHub compares two references: `base: main` <- `compare: feature-branch`. The 'Base' is the destination branch that receives the code. The 'Compare' is the source branch hosting your proposed commits.",
        "why_other_options_are_wrong": {
            "A": "Correct: Base is the destination/target branch; Compare is the feature branch containing incoming commits.",
            "B": "Both branches in a GitHub PR exist remotely on GitHub servers.",
            "C": "Base and Compare represent branch pointers, not file addition/deletion categories.",
            "D": "Inverting Base and Compare tries to merge `main` into your feature branch in reverse!"
        },
        "placement_trap": "Accidentally selecting `feature-branch` as Base and `main` as Compare, attempting to merge production into the feature in the wrong direction.",
        "real_world_use": "Configuring correct PR targets across environments (e.g. merging to `develop` vs `staging` vs `main`)."
    },
    {
        "id": "Q080",
        "question": "What occurs when a repository administrator enables 'Branch Protection Rules' on the `main` branch with 'Require pull request reviews before merging' enabled?",
        "type": "conceptual",
        "difficulty": "Hard",
        "topic": "clone_fork_and_pull_request",
        "options": {
            "A": "Developers can no longer push directly to `main` via `git push origin main`; all modifications must be proposed via a branch PR and approved by designated reviewers before merging.",
            "B": "Git prevents any developer from cloning the `main` branch locally.",
            "C": "All commits on `main` are encrypted and hidden from non-admin developers.",
            "D": "The repository is locked against all read and write operations on weekends."
        },
        "correct_answer": "A",
        "explanation": "Branch protection rules enforce quality gates on critical branches. Direct pushes (`git push origin main`) and force pushes are blocked. Changes can only enter `main` through Pull Requests that pass required status checks (tests, linters) and receive approved peer reviews.",
        "why_other_options_are_wrong": {
            "A": "Correct: Direct pushes are blocked; PRs and mandatory peer reviews become required.",
            "B": "Cloning and reading the branch remain fully allowed for authorized repository readers.",
            "C": "Branch protection controls write/merge permissions, not commit encryption.",
            "D": "Protection rules do not impose temporal schedule locks."
        },
        "placement_trap": "Freshers attempt to `git push origin main` on their first day and get rejected because branch protection blocks direct pushes.",
        "real_world_use": "Standard SOC2, ISO, and enterprise compliance policy implemented across all major software engineering companies."
    },

    # Topic 11: reset_revert_and_restore (6 questions: Q081-Q086)
    {
        "id": "Q081",
        "question": "A developer runs `git reset --soft HEAD~1`. What are the exact states of the Working Directory, the Staging Area (Index), and the `HEAD` commit history?",
        "type": "command_tracing",
        "difficulty": "Hard",
        "topic": "reset_revert_and_restore",
        "options": {
            "A": "`HEAD` moves back 1 commit; the changes from the undone commit remain staged in the Index; the Working Directory is completely untouched.",
            "B": "`HEAD` moves back 1 commit; both Index and Working Directory are wiped clean.",
            "C": "`HEAD` stays in place; only the working directory files are modified.",
            "D": "`HEAD` moves forward 1 commit into the future."
        },
        "correct_answer": "A",
        "explanation": "`git reset --soft <commit>` only moves the `HEAD` branch pointer to the target commit. It does NOT touch the index (staging area) or the working tree. Consequently, all changes introduced by the undone commit remain staged in the index ready to be recommitted immediately.",
        "why_other_options_are_wrong": {
            "A": "Correct: `--soft` moves HEAD pointer only; index stays staged; working tree is untouched.",
            "B": "Wiping both index and working tree is the behavior of `--hard`, not `--soft`.",
            "C": "Reset always moves the HEAD pointer reference.",
            "D": "Reset moves backward to ancestral commits, not forward."
        },
        "placement_trap": "Confusing `--soft` with `--mixed` (default) and `--hard`. Soft preserves changes in staging!",
        "real_world_use": "Used when you committed too early and want to add more staged files or rewrite the commit with fresh files included."
    },
    {
        "id": "Q082",
        "question": "A developer needs to undo a commit that was already pushed to the shared public `main` branch three days ago, which other team members have already pulled. Why is `git revert <commit-hash>` the only safe approach instead of `git reset --hard`?",
        "type": "scenario",
        "difficulty": "Hard",
        "topic": "reset_revert_and_restore",
        "options": {
            "A": "`git reset` cannot be executed once internet access is detected.",
            "B": "`git reset --hard` rewrites history by deleting the commit, which breaks teammates' repository graphs upon their next pull; `git revert` creates a new forward commit that applies the inverse diff, safely preserving historical continuity.",
            "C": "`git revert` converts the repository into a private repository.",
            "D": "`git reset` requires repository owner root passwords."
        },
        "correct_answer": "B",
        "explanation": "`git reset` removes commits from branch history, requiring a dangerous force-push (`--force`) that diverges from teammates' cloned histories and causes massive merge headaches. `git revert` creates a brand-new commit that records the exact inverse changes (additions become deletions), leaving past history untouched and allowing teammates to pull cleanly.",
        "why_other_options_are_wrong": {
            "A": "`git reset` operates locally regardless of network connection.",
            "B": "Correct: Revert safely rolls back changes by creating a new forward commit without rewriting shared historical SHAs.",
            "C": "Revert has zero influence on repository visibility settings.",
            "D": "Password authentication is handled by Git remote helpers, not local reset commands."
        },
        "placement_trap": "Choosing `git reset --hard` to undo public shared commits—a classic placement interview failure trap.",
        "real_world_use": "Standard production incident remediation: rolling back a buggy release commit on `main` via `git revert`."
    },
    {
        "id": "Q083",
        "question": "Compare the three flags of `git reset`: `--soft`, `--mixed`, and `--hard`. Which statement accurately characterizes what each flag modifies?",
        "type": "comparison",
        "difficulty": "Hard",
        "topic": "reset_revert_and_restore",
        "options": {
            "A": "`--soft` moves HEAD only; `--mixed` moves HEAD and updates Index (staging); `--hard` moves HEAD, updates Index, and overwrites the Working Directory with the target snapshot.",
            "B": "`--soft` deletes files; `--mixed` renames files; `--hard` encrypts files.",
            "C": "`--hard` only resets remote branches; `--soft` only resets local branches.",
            "D": "`--mixed` is only supported on Linux; Windows only supports `--hard`."
        },
        "correct_answer": "A",
        "explanation": "1. `--soft`: Moves `HEAD` pointer only. Index and Working Directory are untouched. 2. `--mixed` (default): Moves `HEAD` and resets the Index (staging area) to match target commit; Working Directory is untouched. 3. `--hard`: Moves `HEAD`, resets Index, and overwrites the Working Directory, permanently discarding uncommitted local changes.",
        "why_other_options_are_wrong": {
            "A": "Correct: Precise definition of the three reset modes across HEAD, Index, and Working Tree.",
            "B": "Reset flags do not delete, rename, or encrypt files.",
            "C": "All three flags operate locally on the currently checked-out branch.",
            "D": "Git commands and flags are cross-platform across Linux, macOS, and Windows."
        },
        "placement_trap": "Assuming `--mixed` discards working tree changes. Only `--hard` modifies the working tree!",
        "real_world_use": "One of the top 3 most frequently asked technical Git questions in MNC interviews (TCS, Accenture, Infosys)."
    },
    {
        "id": "Q084",
        "question": "A developer runs `git reset --hard HEAD~1` by mistake and loses an important unpushed commit containing 500 lines of code. They panic, thinking their code is lost forever. How can they recover the commit?",
        "type": "troubleshooting",
        "difficulty": "Hard",
        "topic": "reset_revert_and_restore",
        "options": {
            "A": "Run `git reflog` to find the commit SHA where `HEAD` was prior to the reset, and then execute `git reset --hard <lost-SHA>` or create a branch at that SHA.",
            "B": "The code is completely unrecoverable because `--hard` immediately overwrites raw disk sectors.",
            "C": "Contact GitHub customer support to retrieve the local commit from their server logs.",
            "D": "Run `git undo --all`."
        },
        "correct_answer": "A",
        "explanation": "`git reflog` (reference log) records every movement of `HEAD` on the local machine (commits, checkouts, resets, rebases). Even after a hard reset, the commit object remains in `.git/objects` for 30-90 days until garbage collection. Finding the pre-reset SHA in `git reflog` and running `git reset --hard <SHA>` or `git switch -c recovery <SHA>` recovers 100% of the committed work.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git reflog` is the ultimate safety net for recovering lost commits and pointer states.",
            "B": "Commit objects are immutable blobs and persist on disk until `git gc` runs.",
            "C": "GitHub servers have no knowledge of unpushed local commits.",
            "D": "`git undo` is not a valid Git command."
        },
        "placement_trap": "Believing `git reset --hard` instantly deletes commits from the Git object store.",
        "real_world_use": "Rescuing accidentally dropped branches or mistyped hard resets in high-pressure developer environments."
    },
    {
        "id": "Q085",
        "question": "What is the difference in behavior and scope between `git restore <file>` and `git restore --staged <file>` in modern Git?",
        "type": "comparison",
        "difficulty": "Hard",
        "topic": "reset_revert_and_restore",
        "options": {
            "A": "`git restore <file>` discards changes in the working directory by overwriting it with the staging index version; `git restore --staged <file>` removes the file from the staging index by copying the version from `HEAD` while preserving your working directory edits.",
            "B": "`git restore <file>` deletes the file from disk; `--staged` renames it.",
            "C": "`git restore --staged` uploads the file to GitHub.",
            "D": "`git restore <file>` only works on deleted files; `--staged` works on modified files."
        },
        "correct_answer": "A",
        "explanation": "`git restore <file>` targets the working directory, reverting unstaged modifications to match the staging area (destructive to uncommitted local edits). `git restore --staged <file>` targets the staging index, un-staging changes by copying the state from `HEAD` into the index while leaving the working directory completely untouched (non-destructive).",
        "why_other_options_are_wrong": {
            "A": "Correct: Accurately distinguishes between working tree restoration vs staging area un-staging.",
            "B": "Neither command deletes or renames files.",
            "C": "Restore operations are strictly local.",
            "D": "Both commands handle modified, added, and deleted files."
        },
        "placement_trap": "Accidentally running `git restore <file>` instead of `git restore --staged <file>`, which wipes away working directory edits permanently.",
        "real_world_use": "Safely managing staging area contents vs working tree file experiments."
    },
    {
        "id": "Q086",
        "question": "Consider the following terminal sequence:\n\n```bash\necho 'feature' > test.txt\ngit add test.txt\ngit commit -m 'Add test'\necho 'bug' >> test.txt\ngit add test.txt\necho 'extra' >> test.txt\ngit restore --staged test.txt\n```\nWhat is the exact content of `test.txt` in the working directory, and what will `git status` report for `test.txt`?",
        "type": "command_tracing",
        "difficulty": "Hard",
        "topic": "reset_revert_and_restore",
        "options": {
            "A": "Content is 'feature\\nbug\\nextra'; `git status` reports `test.txt` as modified and unstaged.",
            "B": "Content is 'feature'; `git status` reports working tree clean.",
            "C": "Content is 'feature\\nbug'; `git status` reports `test.txt` as staged.",
            "D": "`test.txt` is deleted from disk."
        },
        "correct_answer": "A",
        "explanation": "`git restore --staged test.txt` resets the index version of `test.txt` back to `HEAD` (which contains 'feature'). Crucially, `--staged` never touches the working directory on disk, so the working tree file still contains 'feature\\nbug\\nextra'. Because the working tree now differs from the index (which has 'feature'), `git status` reports `test.txt` under 'Changes not staged for commit' (modified).",
        "why_other_options_are_wrong": {
            "A": "Correct: Working directory retains all edits ('feature\\nbug\\nextra'), while staging is reset to HEAD, leaving all edits unstaged.",
            "B": "Working directory was not restored, only staging was.",
            "C": "Staging was explicitly cleared by `--staged`.",
            "D": "No files were deleted."
        },
        "placement_trap": "Assuming un-staging a file modifies or deletes lines in the physical working tree file.",
        "real_world_use": "Command sequence tracing questions are standard filters in Capgemini, TCS Digital, and Accenture assessments."
    },

    # Topic 12: stash (4 questions: Q087-Q090)
    {
        "id": "Q087",
        "question": "A developer is halfway through implementing a feature when an urgent production bug report arrives. Their working tree has uncommitted modifications that they cannot commit yet. They run `git stash`. What does Git do with their uncommitted modifications?",
        "type": "conceptual",
        "difficulty": "Hard",
        "topic": "stash",
        "options": {
            "A": "It permanently discards the changes and reverts the files to `HEAD`.",
            "B": "It saves the dirty state of the working directory and index onto a storage stack in `.git/refs/stash`, reverting the working directory to match the clean `HEAD` commit.",
            "C": "It pushes the uncommitted modifications to a hidden branch on GitHub.",
            "D": "It creates a zip file in the root project folder named `stash.zip`."
        },
        "correct_answer": "B",
        "explanation": "`git stash` takes your uncommitted modifications (both staged and unstaged tracked changes), creates special stash commit objects on a stack (`refs/stash`), and resets your working tree and index to match `HEAD`. This leaves you with a clean working directory to switch branches and fix hotfixes.",
        "why_other_options_are_wrong": {
            "A": "Modifications are safely stored, not discarded.",
            "B": "Correct: Stash saves uncommitted edits to a local storage stack and restores a clean working tree.",
            "C": "Stashing is purely local; no changes are uploaded to GitHub.",
            "D": "Git uses its internal object database, not plain zip archives."
        },
        "placement_trap": "Thinking `git stash` creates a regular branch or pushes to GitHub.",
        "real_world_use": "Context switching between feature development and urgent production hotfix triage."
    },
    {
        "id": "Q088",
        "question": "What is the critical operational difference between `git stash pop` and `git stash apply`?",
        "type": "comparison",
        "difficulty": "Hard",
        "topic": "stash",
        "options": {
            "A": "`git stash pop` applies the stashed changes to your working tree and immediately removes them from the stash stack; `git stash apply` applies the changes but preserves the stash entry on the stack for future use.",
            "B": "`git stash pop` is for tracked files; `git stash apply` is for untracked files.",
            "C": "`git stash apply` deletes the entire stash history.",
            "D": "`git stash pop` requires a remote internet connection."
        },
        "correct_answer": "A",
        "explanation": "`git stash apply` takes the top stash (`stash@{0}`) and restores its changes into the working directory while keeping `stash@{0}` in the stash list. `git stash pop` applies the changes AND immediately removes (drops) that stash entry from the stack if the apply succeeds without conflicts.",
        "why_other_options_are_wrong": {
            "A": "Correct: Pop = Apply + Drop; Apply = Restore without dropping from the stack.",
            "B": "Both operate on the stash stack; untracked file handling is configured during stashing via `-u`.",
            "C": "Apply does not delete any stash; `git stash clear` deletes stash history.",
            "D": "Stashing is completely local and offline."
        },
        "placement_trap": "Assuming `apply` and `pop` are identical, leading to duplicate stash clutter or accidental loss of stash references.",
        "real_world_use": "Using `apply` when you want to apply the same stash across multiple distinct branches."
    },
    {
        "id": "Q089",
        "question": "A developer created brand-new files `test.py` and `mock.json` which are untracked (never added to Git). When they run plain `git stash`, they notice that `test.py` and `mock.json` are STILL present in their working directory. Why did this happen, and which command stashes them?",
        "type": "troubleshooting",
        "difficulty": "Hard",
        "topic": "stash",
        "options": {
            "A": "Python and JSON files cannot be stashed.",
            "B": "By default, `git stash` only stashes tracked files; to stash untracked files as well, they must use `git stash -u` (or `git stash --include-untracked`).",
            "C": "The files must be uploaded to GitHub first.",
            "D": "The developer must rename the files to start with `.stash`."
        },
        "correct_answer": "B",
        "explanation": "Plain `git stash` ignores untracked files and files ignored by `.gitignore`. To include new, untracked files in the stash and clean the working directory completely, use `git stash -u` (or `--include-untracked`). To include ignored files as well, use `git stash -a` (or `--all`).",
        "why_other_options_are_wrong": {
            "A": "Git is filetype-agnostic.",
            "B": "Correct: Standard stash ignores untracked files; `-u` includes them.",
            "C": "Stashing does not involve GitHub.",
            "D": "File naming has no effect on stashing rules."
        },
        "placement_trap": "Running `git stash`, switching branches, and being surprised that untracked files carried over and corrupted the other branch.",
        "real_world_use": "Stashing full feature scaffolds including new boilerplate files before switching to investigate bugs."
    },
    {
        "id": "Q090",
        "question": "A developer has 3 stashes on their stash list (`stash@{0}`, `stash@{1}`, `stash@{2}`). They want to create a brand-new branch named `recovered-experiment` that starts from the commit where `stash@{1}` was created, apply `stash@{1}`, and drop it from the stash list. Which single command executes this?",
        "type": "command_based",
        "difficulty": "Hard",
        "topic": "stash",
        "options": {
            "A": "`git stash branch recovered-experiment stash@{1}`",
            "B": "`git switch -c recovered-experiment && git stash pop stash@{1}`",
            "C": "`git stash create recovered-experiment stash@{1}`",
            "D": "`git checkout -b recovered-experiment --stash stash@{1}`"
        },
        "correct_answer": "A",
        "explanation": "`git stash branch <branchname> [<stash>]` checks out the commit where the stash was originally created, creates a new branch named `<branchname>`, applies the stashed work onto it, and if successful, drops the stash. This prevents conflicts that occur when applying an old stash to a modified branch.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git stash branch <name> <stash>` creates a branch from the stash's parent commit and applies it cleanly.",
            "B": "Manually switching branches might apply the stash onto a completely different commit with severe conflicts.",
            "C": "`git stash create` is a low-level plumbing command that creates a stash dangling object without storing it.",
            "D": "`--stash` is not a valid checkout option."
        },
        "placement_trap": "Attempting to apply an old stash on a modern branch with conflicting files instead of using `git stash branch`.",
        "real_world_use": "Safely reviving an abandoned exploratory stash created weeks ago without polluting active branches."
    },

    # Topic 13: log_history_and_commit_inspection (4 questions: Q091-Q094)
    {
        "id": "Q091",
        "question": "Which combination of `git log` formatting flags produces a compact, single-line-per-commit visual representation of branch ancestry, merge bubbles, and branch pointers in the terminal?",
        "type": "command_based",
        "difficulty": "Hard",
        "topic": "log_history_and_commit_inspection",
        "options": {
            "A": "`git log --oneline --graph --all --decorate`",
            "B": "`git log --compact-tree`",
            "C": "`git log --simple --branches`",
            "D": "`git log --visualize-history`"
        },
        "correct_answer": "A",
        "explanation": "`git log --oneline --graph --all --decorate` is the industry-standard CLI combination: `--oneline` compresses each commit to its short SHA and subject line; `--graph` draws an ASCII art DAG of branch splits and merges; `--all` shows all branches/tags; and `--decorate` annotates commit lines with branch and HEAD pointers.",
        "why_other_options_are_wrong": {
            "A": "Correct: Standard flags for comprehensive terminal visual graph inspection.",
            "B": "`--compact-tree` is a fictional flag.",
            "C": "`--simple` is not a valid log option.",
            "D": "`--visualize-history` is nonexistent in Git."
        },
        "placement_trap": "Memorizing GUI tools only and being unable to construct visual branch graphs from the raw terminal during live coding rounds.",
        "real_world_use": "The most popular custom Git alias (`git config --global alias.lg ...`) used by professional software engineers."
    },
    {
        "id": "Q092",
        "question": "A production bug was introduced into `auth.py`. A developer needs to inspect the file line by line to determine who wrote each line, which commit introduced it, and at what timestamp. Which command provides this line-by-line authorship audit?",
        "type": "command_based",
        "difficulty": "Hard",
        "topic": "log_history_and_commit_inspection",
        "options": {
            "A": "`git blame auth.py`",
            "B": "`git inspect auth.py`",
            "C": "`git audit --lines auth.py`",
            "D": "`git history --who auth.py`"
        },
        "correct_answer": "A",
        "explanation": "`git blame <file>` annotates every line in a given file with the commit hash, author name, and date of the last commit that modified that specific line. It is the primary tool for investigating when and why a line was added or altered.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git blame` provides exact line-by-line commit authorship metadata.",
            "B": "`git inspect` is not a Git command.",
            "C": "`git audit` is not a Git command.",
            "D": "`git history` is not a built-in Git command."
        },
        "placement_trap": "Assuming `git blame` is an informal joke term; it is the official, built-in Git command for file annotation.",
        "real_world_use": "Tracking down the context and PR discussions behind legacy edge-case handling in production code."
    },
    {
        "id": "Q093",
        "question": "A developer needs to search through the entire commit history of a repository to find every commit where a specific function name, `calculateTaxRate`, was either added or deleted. Which command executes this search efficiently?",
        "type": "command_based",
        "difficulty": "Hard",
        "topic": "log_history_and_commit_inspection",
        "options": {
            "A": "`git log -S 'calculateTaxRate'` (pickaxe search)",
            "B": "`git grep --all-commits 'calculateTaxRate'`",
            "C": "`git find-code 'calculateTaxRate'`",
            "D": "`git log --contains 'calculateTaxRate'`"
        },
        "correct_answer": "A",
        "explanation": "The `-S <string>` option (known as Git's 'pickaxe' search) searches through the commit history and displays only the commits that changed the number of occurrences of the specified string (i.e., added or removed that string in a diff).",
        "why_other_options_are_wrong": {
            "A": "Correct: `git log -S <string>` finds commits that introduced or deleted the code snippet.",
            "B": "`git grep` searches the working directory or a specific tree snapshot, but lacks an `--all-commits` option to scan history.",
            "C": "`git find-code` is not a command.",
            "D": "`--contains` is used with `git branch` or `git tag` to filter by commit ancestry, not code strings."
        },
        "placement_trap": "Confusing `git log -S` (searches code changes across history) with `git grep` (searches current files).",
        "real_world_use": "Finding exactly when a removed function was deprecated and which PR removed it."
    },
    {
        "id": "Q094",
        "question": "What is the critical architectural difference between the information stored in `git log` versus the information stored in `git reflog`?",
        "type": "comparison",
        "difficulty": "Hard",
        "topic": "log_history_and_commit_inspection",
        "options": {
            "A": "`git log` displays the commit history reachable from the current branch following parent commit pointers; `git reflog` is a purely local chronological record tracking every time the `HEAD` pointer moved on this specific machine.",
            "B": "`git log` is stored on the local computer; `git reflog` is stored on GitHub servers.",
            "C": "`git reflog` only tracks deleted files; `git log` only tracks added files.",
            "D": "`git log` requires root access; `git reflog` does not."
        },
        "correct_answer": "A",
        "explanation": "`git log` traverses the directed acyclic graph (DAG) of commits reachable from the checked-out branch. If you reset or rebase, dropped commits disappear from `git log`. In contrast, `git reflog` is a local audit log that records every movement of `HEAD` (commits, checkouts, resets, pulls). It is never pushed to remotes and allows recovering commits orphaned from branch history.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git log` traces branch ancestry; `git reflog` tracks local HEAD pointer movements.",
            "B": "`git reflog` is private to the local machine and is never transmitted to GitHub.",
            "C": "Both commands deal with commits and pointers, not file tracking filters.",
            "D": "Neither command requires administrative/root privileges."
        },
        "placement_trap": "Believing `git reflog` is shared across git clones or pushed to GitHub.",
        "real_world_use": "Key interview question distinguishing candidates with genuine practical debugging skills from those who only read tutorials."
    },

    # Topic 14: gitignore (3 questions: Q095-Q097)
    {
        "id": "Q095",
        "question": "A developer adds `.env` to their project's `.gitignore` file. However, whenever they modify `.env`, `git status` continues to show `.env` under 'Changes not staged for commit'. Why does `.gitignore` fail to ignore the file?",
        "type": "troubleshooting",
        "difficulty": "Hard",
        "topic": "gitignore",
        "options": {
            "A": "Files starting with a dot cannot be ignored by Git.",
            "B": "The file `.env` was already tracked by Git in a previous commit; `.gitignore` only prevents untracked files from being staged.",
            "C": "`.gitignore` only works if the repository is hosted on GitHub Enterprise.",
            "D": "The `.gitignore` file must be compiled into binary format using `git compile-ignore`."
        },
        "correct_answer": "B",
        "explanation": "A fundamental rule of Git is that `.gitignore` patterns only apply to untracked files. If a file was already added or committed to the repository in the past, Git continues tracking changes to it regardless of what is added to `.gitignore`. To stop tracking it, the file must be removed from the index using `git rm --cached .env`.",
        "why_other_options_are_wrong": {
            "A": "Git handles dotfiles seamlessly.",
            "B": "Correct: `.gitignore` only applies to untracked files; tracked files must be removed from cache via `git rm --cached`.",
            "C": "`.gitignore` is a core local Git feature independent of hosting.",
            "D": "`.gitignore` is a plain text file interpreted at runtime without compilation."
        },
        "placement_trap": "Adding already-committed files to `.gitignore` and wondering why Git refuses to ignore them.",
        "real_world_use": "Encountered constantly when junior developers commit local config files and later attempt to ignore them."
    },
    {
        "id": "Q096",
        "question": "A team wants to ignore all `.log` files in the `logs/` directory, EXCEPT for `important.log` which must be tracked. Which `.gitignore` pattern correctly accomplishes this negative pattern rule?",
        "type": "command_based",
        "difficulty": "Hard",
        "topic": "gitignore",
        "options": {
            "A": "Line 1: `logs/*.log`\nLine 2: `!logs/important.log`",
            "B": "Line 1: `exclude logs/*.log`\nLine 2: `include logs/important.log`",
            "C": "`logs/*.log -except important.log`",
            "D": "`ignore logs/*.log unless important.log`"
        },
        "correct_answer": "A",
        "explanation": "In `.gitignore` syntax, an exclamation mark (`!`) negates a pattern. A file matching a negation pattern will be tracked even if an earlier line matched it. Therefore, `logs/*.log` ignores all logs, and `!logs/important.log` re-includes `important.log`.",
        "why_other_options_are_wrong": {
            "A": "Correct: An exclamation mark (`!`) serves as the official negation prefix in `.gitignore`.",
            "B": "`exclude` and `include` are not valid `.gitignore` syntax.",
            "C": "`-except` is invalid syntax.",
            "D": "`unless` is not recognized by Git."
        },
        "placement_trap": "Negating a file inside an already-ignored folder (e.g. `logs/` followed by `!logs/important.log` will fail because Git does not re-enter ignored directories). Negating wildcards like `logs/*.log` works.",
        "real_world_use": "Ignoring generated test reports or log directories while preserving sample template configurations in source control."
    },
    {
        "id": "Q097",
        "question": "A developer accidentally committed a production database password inside `config/secrets.json` three commits ago, and pushed it to a public GitHub repository. They immediately create a new commit removing the password and delete the file. Why is the password STILL compromised?",
        "type": "scenario",
        "difficulty": "Hard",
        "topic": "gitignore",
        "options": {
            "A": "GitHub stores deleted files in a public Recycle Bin visible on the organization profile page.",
            "B": "The password remains permanently visible in the repository's commit history (`git log`, commit diffs, and historical tree blobs); anyone can checkout the earlier commit or view the commit SHA on GitHub.",
            "C": "The file was automatically emailed to all GitHub followers.",
            "D": "Git converts all deleted passwords into environment variables."
        },
        "correct_answer": "B",
        "explanation": "Git preserves complete historical snapshots. Deleting a secret in a subsequent commit does NOT remove it from past commits. The secret remains fully accessible in the commit history, reflogs, and raw commit pages on GitHub. Automated bots scan GitHub public feeds within seconds to exploit leaked credentials. The credentials must be invalidated/rotated immediately, and tools like `git filter-repo` or BFG Repo-Cleaner used to scrub history.",
        "why_other_options_are_wrong": {
            "A": "GitHub does not have a public Recycle Bin; the secret is accessible directly via commit history.",
            "B": "Correct: Previous commits preserve the historical snapshot containing the credential.",
            "C": "GitHub does not email deleted code to followers.",
            "D": "Git does not manipulate OS environment variables."
        },
        "placement_trap": "Believing deleting sensitive data in a new commit eliminates it from Git history.",
        "real_world_use": "Critical security principle: leaked credentials in Git must be assumed compromised and revoked immediately."
    },

    # Topic 15: github_workflow (3 questions: Q098-Q100)
    {
        "id": "Q098",
        "question": "A developer wants GitHub to automatically close Issue #42 when their Pull Request is merged into the default branch. Which commit message or PR description phrase achieves this automated linking?",
        "type": "command_based",
        "difficulty": "Hard",
        "topic": "github_workflow",
        "options": {
            "A": "`Closes #42` (or `Fixes #42` / `Resolves #42`)",
            "B": "`Link to issue 42`",
            "C": "`Remove issue #42`",
            "D": "`@github close 42`"
        },
        "correct_answer": "A",
        "explanation": "GitHub recognizes special trigger keywords in commit messages and PR descriptions: `close`, `closes`, `closed`, `fix`, `fixes`, `fixed`, `resolve`, `resolves`, `resolved` followed by the issue number (e.g. `Fixes #42`). When the PR is merged into default branch, GitHub automatically closes the referenced issue.",
        "why_other_options_are_wrong": {
            "A": "Correct: Standard GitHub closing keywords (`Fixes #<number>`, `Closes #<number>`, `Resolves #<number>`).",
            "B": "`Link to` references the issue but does not trigger automatic closure.",
            "C": "`Remove issue` is not a recognized trigger phrase.",
            "D": "`@github` bot mentions do not close issues."
        },
        "placement_trap": "Using informal phrases like 'Done with #42' which creates a hyperlink but fails to auto-close the issue on merge.",
        "real_world_use": "Standard agile issue tracking automation across software engineering teams."
    },
    {
        "id": "Q099",
        "question": "Where must continuous integration (CI) workflow configuration files be located in a repository for GitHub Actions to automatically detect and run them?",
        "type": "conceptual",
        "difficulty": "Hard",
        "topic": "github_workflow",
        "options": {
            "A": "Inside the root directory in a file named `actions.json`",
            "B": "Inside the directory `.github/workflows/` with `.yml` or `.yaml` file extensions",
            "C": "Inside `.git/hooks/ci.sh`",
            "D": "In the user's home directory under `.actions/config`"
        },
        "correct_answer": "B",
        "explanation": "GitHub Actions workflows are defined in YAML format and must strictly reside in the `.github/workflows/` directory relative to the repository root (e.g. `.github/workflows/ci.yml`). GitHub's parser automatically detects workflow definitions in this folder and executes them based on configured triggers (like `on: [push, pull_request]`).",
        "why_other_options_are_wrong": {
            "A": "`actions.json` in root is not the standard GitHub Actions configuration format.",
            "B": "Correct: `.github/workflows/*.yml` is the mandatory path and format for GitHub Actions.",
            "C": "`.git/hooks/` stores local client-side git hooks, which are never pushed to GitHub.",
            "D": "Home directory configurations have no bearing on repository CI pipelines."
        },
        "placement_trap": "Placing workflow YAML files directly inside `.github/` without the required `workflows/` subfolder.",
        "real_world_use": "Automating test runs, linting checks, Docker builds, and cloud deployments on every Pull Request."
    },
    {
        "id": "Q100",
        "question": "A development team wants to ensure that a Pull Request cannot be merged into `main` unless all automated tests in the GitHub Actions CI pipeline pass successfully. Which GitHub feature must the team configure?",
        "type": "workflow",
        "difficulty": "Hard",
        "topic": "github_workflow",
        "options": {
            "A": "Enable 'Require status checks to pass before merging' within the repository's Branch Protection Rules for `main`.",
            "B": "Add `exit 1` to the repository's `.gitignore` file.",
            "C": "Make the repository public so everyone can inspect test results.",
            "D": "Instruct developers to only push code between 9 AM and 5 PM."
        },
        "correct_answer": "A",
        "explanation": "Under GitHub repository Settings -> Branches -> Branch Protection Rules for `main`, administrators can enable 'Require status checks to pass before merging' and select the specific GitHub Actions test job. GitHub will then block the 'Merge' button on all PRs until the CI runner reports a successful exit code (green checkmark).",
        "why_other_options_are_wrong": {
            "A": "Correct: Mandatory status checks in branch protection rules strictly prevent broken code from being merged.",
            "B": "`.gitignore` controls untracked file patterns and has zero interaction with CI test execution.",
            "C": "Repository visibility (public/private) does not enforce test success gates.",
            "D": "Time restrictions do not validate code correctness."
        },
        "placement_trap": "Assuming CI tools block merges by default without explicit branch protection rule enforcement.",
        "real_world_use": "Fundamental DevSecOps quality barrier protecting enterprise production branches from regressions and outages."
    }
]

print(f"Part 4 initialized with {len(part4)} questions.")
