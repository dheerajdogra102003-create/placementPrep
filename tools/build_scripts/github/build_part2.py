# build_part2.py - Questions Q021 to Q050
part2 = [
    # Topic 4 (cont): working_directory_staging_area_repository (Q021-Q029)
    {
        "id": "Q021",
        "question": "A developer modifies `index.js`, runs `git add index.js`, and then immediately makes an additional modification to `index.js` in their code editor without running `git add` again. When they execute `git status`, how will `index.js` be reported?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "It appears only under 'Changes to be committed'.",
            "B": "It appears only under 'Changes not staged for commit'.",
            "C": "It appears twice: once under 'Changes to be committed' and once under 'Changes not staged for commit'.",
            "D": "Git throws a file lock error because the file cannot exist in two states simultaneously."
        },
        "correct_answer": "C",
        "explanation": "When `git add` is executed, Git takes a snapshot of `index.js` as it was at that exact moment and places it in the staging area (index). Subsequent edits exist only in the working tree. Therefore, `git status` shows the first set of changes under 'Changes to be committed' and the newer changes under 'Changes not staged for commit'.",
        "why_other_options_are_wrong": {
            "A": "The second modification was never staged, so it cannot be included in 'Changes to be committed'.",
            "B": "The first edit was staged into the index and remains staged.",
            "C": "Correct: The file exists simultaneously in the index (staged) and in the working tree with unstaged modifications.",
            "D": "Git does not lock files; this dual state is an intended, fundamental feature of Git's three-tree architecture."
        },
        "placement_trap": "Believing `git add` tracks the file itself continuously rather than capturing a specific point-in-time snapshot of the file.",
        "real_world_use": "Happens constantly in day-to-day coding when you stage a working state, discover a quick tweak, and need to re-add before committing."
    },
    {
        "id": "Q022",
        "question": "A developer has modified three files: `auth.js`, `database.js`, and `README.md`. They want to commit ONLY the changes in `auth.js` to ensure the commit is atomic. Which sequence of commands correctly achieves this?",
        "type": "scenario_based",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "Run `git commit -a -m 'Update auth logic'`",
            "B": "Run `git add auth.js` followed by `git commit -m 'Update auth logic'`",
            "C": "Run `git add .` followed by `git commit -m 'Update auth logic' auth.js`",
            "D": "Run `git stage --all` followed by `git commit --only-modified auth.js`"
        },
        "correct_answer": "B",
        "explanation": "To make an atomic commit of a single file among multiple modified files, stage only that specific file using `git add auth.js` and then execute `git commit -m '...'`. The other modified files (`database.js` and `README.md`) remain unstaged in the working directory.",
        "why_other_options_are_wrong": {
            "A": "`git commit -a` automatically stages and commits all modified tracked files, accidentally including `database.js` and `README.md`.",
            "B": "Correct: Staging explicitly with `git add auth.js` isolates it for the subsequent commit.",
            "C": "`git add .` stages all files in the current directory and its subdirectories, polluting the staging area.",
            "D": "`git stage --all` stages everything, and `--only-modified` is not the standard safe workflow."
        },
        "placement_trap": "Freshers reflexively use `git add .` or `git commit -am` without realizing it violates atomic commit principles.",
        "real_world_use": "Standard professional practice: splitting logical changes into independent, focused commits for cleaner peer review."
    },
    {
        "id": "Q023",
        "question": "A developer modifies `config.json` in their working directory. They realize their edits broke the application and want to discard all local uncommitted modifications in `config.json`, reverting it back to the last committed state. In modern Git (version 2.23+), which command is recommended?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "`git restore config.json`",
            "B": "`git reset config.json`",
            "C": "`git revert config.json`",
            "D": "`git clean -f config.json`"
        },
        "correct_answer": "A",
        "explanation": "`git restore <file>` was introduced in Git 2.23 to specifically handle restoring working tree files from `HEAD` (or staging), replacing the overloaded `git checkout -- <file>`. It discards uncommitted changes in the working directory.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git restore config.json` discards working directory modifications, resetting the file to the index/commit version.",
            "B": "`git reset config.json` unstages a staged file; it does NOT overwrite working directory modifications.",
            "C": "`git revert` is used to create a new commit that inverts a past commit, not to discard unstaged working tree files.",
            "D": "`git clean -f` deletes untracked files, not tracked modified files."
        },
        "placement_trap": "Confusing `git restore` (discards working tree edits) with `git reset` (moves staging or pointers) and `git revert` (creates an inverse commit).",
        "real_world_use": "Quickly abandoning experimental code edits in a file without having to manually undo lines in an editor."
    },
    {
        "id": "Q024",
        "question": "A developer accidentally executed `git add secret_tokens.env`, staging the sensitive file. The commit has NOT been made yet. Which command safely un-stages the file from the index WITHOUT modifying or deleting the file in the working directory?",
        "type": "scenario_based",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "`git restore --staged secret_tokens.env`",
            "B": "`git rm -f secret_tokens.env`",
            "C": "`git revert secret_tokens.env`",
            "D": "`git clean -fd secret_tokens.env`"
        },
        "correct_answer": "A",
        "explanation": "`git restore --staged <file>` (or legacy `git reset HEAD <file>`) removes the file from the staging area/index while leaving the actual file and its contents completely untouched in your working directory.",
        "why_other_options_are_wrong": {
            "A": "Correct: `--staged` targets the index, safely un-staging the file without touching the working tree copy.",
            "B": "`git rm -f` forcefully deletes the file from both staging and disk, losing the developer's work.",
            "C": "`git revert` operates on committed history, not uncommitted staged files.",
            "D": "`git clean` removes untracked files, not staged files."
        },
        "placement_trap": "Using destructive commands like `git rm` or `git checkout` which delete file contents when only un-staging was desired.",
        "real_world_use": "Critical security step when accidentally staging credentials before committing, allowing you to add them to `.gitignore` first."
    },
    {
        "id": "Q025",
        "question": "What is the physical storage representation of the Git staging area (index) inside the `.git` folder?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "A text log file named `.git/staged.log` that lists commands run by the user.",
            "B": "A binary file located at `.git/index` that maps file paths, file permissions, timestamps, and SHA-1/SHA-256 blob hashes.",
            "C": "A directory containing plain copies of every staged file in a folder named `.git/staging/`.",
            "D": "A SQLite database embedded in `.git/database.sqlite`."
        },
        "correct_answer": "B",
        "explanation": "The staging area is physically stored in the binary file `.git/index`. It contains a sorted list of path names, mode bits, timestamps, file sizes, and the object SHA hashes of the corresponding blobs in the object database.",
        "why_other_options_are_wrong": {
            "A": "The index is a binary cache mapping paths to blob hashes, not a text log file.",
            "B": "Correct: `.git/index` is the binary staging table that tracks staged file paths and blob hashes.",
            "C": "Git does not duplicate whole files into a `.git/staging/` folder; file contents are stored as compressed blobs in `.git/objects/`.",
            "D": "Git does not use SQLite; it uses its own custom binary index format and content-addressable filesystem."
        },
        "placement_trap": "Thinking the staging area is a separate folder where staged files get physically copied.",
        "real_world_use": "Explains why `git add` creates blob objects in `.git/objects` immediately before `git commit` is even invoked."
    },
    {
        "id": "Q026",
        "question": "Consider the following terminal sequence executed in an existing Git repository:\n\n```bash\necho 'v1' > app.txt\ngit add app.txt\ngit commit -m 'Commit 1'\necho 'v2' >> app.txt\ngit add app.txt\necho 'v3' >> app.txt\n```\nWhat will `cat app.txt` and `git show :app.txt` display respectively?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "`cat` displays 'v1', `git show :app.txt` displays 'v1 v2 v3'.",
            "B": "`cat` displays 'v1\\nv2\\nv3', while `git show :app.txt` displays 'v1\\nv2'.",
            "C": "Both commands display 'v1\\nv2\\nv3'.",
            "D": "Both commands display 'v1'."
        },
        "correct_answer": "B",
        "explanation": "`cat app.txt` reads the working directory file, which has had 'v2' and 'v3' appended to 'v1'. `git show :app.txt` accesses the index (staging area) version of the file, which was captured when `git add app.txt` was executed before 'v3' was appended.",
        "why_other_options_are_wrong": {
            "A": "`cat` reads the working tree, not the first commit.",
            "B": "Correct: Working directory has 'v1\\nv2\\nv3'; index staging has 'v1\\nv2'; HEAD commit has 'v1'.",
            "C": "The index does not automatically update when the working file is modified after staging.",
            "D": "`v1` is only in the HEAD commit; the working directory and index have advanced."
        },
        "placement_trap": "Failing to realize that `:app.txt` in revision syntax queries the index/staging area directly.",
        "real_world_use": "Tracing index vs working tree states is crucial when debugging partial staging with `git add -p`."
    },
    {
        "id": "Q027",
        "question": "A developer runs `git diff` and sees no output at all. However, `git status` shows `Changes to be committed: modified: server.py`. Why did `git diff` produce no output?",
        "type": "troubleshooting",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "`git diff` requires administrator permissions to read modified Python files.",
            "B": "By default, plain `git diff` compares the Working Directory against the Staging Area; since `server.py` is staged and has no unstaged edits, the diff is empty.",
            "C": "Git automatically commits files when `git diff` is run.",
            "D": "`server.py` was ignored by a `.gitignore` entry after being staged."
        },
        "correct_answer": "B",
        "explanation": "Plain `git diff` only shows the difference between the Working Tree and the Staging Area (unstaged modifications). If all changes have been added to the staging area with `git add`, `git diff` returns blank. To inspect staged changes against the last commit, you must run `git diff --staged` (or `git diff --cached`).",
        "why_other_options_are_wrong": {
            "A": "`git diff` never requires admin permissions.",
            "B": "Correct: `git diff` shows unstaged edits. To see staged edits, run `git diff --staged`.",
            "C": "`git diff` is purely a read-only inspection tool.",
            "D": "`.gitignore` does not hide staged files from `git status` or diffs."
        },
        "placement_trap": "Assuming `git diff` shows all uncommitted changes. It only shows unstaged changes unless `--staged` is passed.",
        "real_world_use": "Reviewing exact staged changes with `git diff --staged` before executing `git commit` to verify code quality."
    },
    {
        "id": "Q028",
        "question": "Which command removes a file from tracking in the Git repository and staging area, but preserves the physical file on disk in the developer's working directory?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "`git rm -f <file>`",
            "B": "`git rm --cached <file>`",
            "C": "`git clean -d <file>`",
            "D": "`git checkout -- <file>`"
        },
        "correct_answer": "B",
        "explanation": "`git rm --cached <file>` removes the file from the index/staging area so it will no longer be tracked in future commits, but leaves the physical file intact on the local filesystem (working tree).",
        "why_other_options_are_wrong": {
            "A": "`git rm -f` deletes the file from both the repository index and the physical filesystem.",
            "B": "Correct: `--cached` operates on the index cache, untracking the file while preserving local files on disk.",
            "C": "`git clean` removes untracked files from disk, which is the opposite of preserving them.",
            "D": "`git checkout -- <file>` discards local edits by overwriting the working file with the commit version."
        },
        "placement_trap": "Running `git rm <file>` which physically deletes the file from disk, causing accidental loss of environment configs.",
        "real_world_use": "Used when a file like `.env` or IDE configuration was mistakenly committed in the past and needs to be untracked without deleting the local file."
    },
    {
        "id": "Q029",
        "question": "A developer wants to stage only specific hunks (lines) of code from a file rather than staging the entire modified file. Which interactive command enables this?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "`git add -p` (or `git add --patch`)",
            "B": "`git commit --partial`",
            "C": "`git stage --lines`",
            "D": "`git diff --stage-hunk`"
        },
        "correct_answer": "A",
        "explanation": "`git add -p` (or `--patch`) allows developers to interactively review each modified hunk in a file and choose whether to stage it (`y`), skip it (`n`), split it into smaller hunks (`s`), or edit it manually (`e`).",
        "why_other_options_are_wrong": {
            "A": "Correct: `git add -p` enables interactive patch/hunk staging.",
            "B": "`--partial` is not a valid option for `git commit`.",
            "C": "`--lines` is not a valid Git stage flag.",
            "D": "`git diff` cannot stage hunks; it only displays diffs."
        },
        "placement_trap": "Assuming Git requires staging whole files at a time.",
        "real_world_use": "Enables splitting debugging print statements or accidental edits from genuine feature code before committing."
    },

    # Topic 5: git_add_commit_status_diff (10 questions: Q030-Q039)
    {
        "id": "Q030",
        "question": "A developer modifies an existing tracked file `service.py` and creates a brand-new file `helper.py`. They then run `git commit -a -m 'Quick update'`. What happens?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "Both `service.py` and `helper.py` are committed.",
            "B": "Only `service.py` is committed; `helper.py` remains untracked.",
            "C": "The command fails with an error because `helper.py` was not added.",
            "D": "Neither file is committed because `-a` only applies to deleted files."
        },
        "correct_answer": "B",
        "explanation": "The `-a` (or `--all`) flag in `git commit` automatically stages all tracked files that have been modified or deleted. However, it will NEVER automatically stage brand-new, untracked files. `helper.py` remains untracked in the working directory.",
        "why_other_options_are_wrong": {
            "A": "`helper.py` is untracked; `-a` ignores untracked files.",
            "B": "Correct: `-a` stages modified tracked files (`service.py`), but completely ignores untracked files (`helper.py`).",
            "C": "Git does not throw an error; it simply commits the tracked files and ignores untracked ones.",
            "D": "`-a` applies to all tracked modified/deleted files, committing `service.py`."
        },
        "placement_trap": "Freshers frequently assume `git commit -am '...'` adds every file in the directory including new untracked files.",
        "real_world_use": "Common bug source where freshers commit code thinking new files were included, only for the CI pipeline to fail with missing module imports."
    },
    {
        "id": "Q031",
        "question": "A developer creates a commit with the message 'Fix user logn'. Immediately after, they notice the spelling typo in 'logn'. The commit has NOT been pushed to any remote. Which command safely fixes the commit message without creating a redundant second commit?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "`git commit --modify 'Fix user login'`",
            "B": "`git commit --amend -m 'Fix user login'`",
            "C": "`git commit --replace -m 'Fix user login'`",
            "D": "`git update-commit -m 'Fix user login'`"
        },
        "correct_answer": "B",
        "explanation": "`git commit --amend` updates the tip commit of the current branch. Providing `-m` replaces the previous commit message with the new message, replacing the previous commit object with a newly created commit object with updated metadata.",
        "why_other_options_are_wrong": {
            "A": "`--modify` is not a valid Git commit option.",
            "B": "Correct: `git commit --amend -m '...'` rewrites the latest local commit.",
            "C": "`--replace` is nonexistent in Git commit.",
            "D": "`git update-commit` is a fake command."
        },
        "placement_trap": "Creating a second commit titled 'Fix typo in last commit message' instead of amending the local commit.",
        "real_world_use": "Maintaining clean, professional Git history before submitting pull requests for code review."
    },
    {
        "id": "Q032",
        "question": "In the short output format of `git status` (`git status -s`), what do the symbols in the two status columns represent (e.g. `XY PATH`)?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "X represents the file's read/write permissions; Y represents the file's line count.",
            "B": "X (left column) represents the staging status (Index relative to HEAD); Y (right column) represents the working tree status (Working tree relative to Index).",
            "C": "X represents local branch status; Y represents remote GitHub status.",
            "D": "X represents author ID; Y represents commit count."
        },
        "correct_answer": "B",
        "explanation": "In `git status -s`, the first column `X` indicates the status of the staging area (index) compared to `HEAD`. The second column `Y` indicates the status of the working tree compared to the staging area. For example, `M ` means staged modifications, while ` M` means unstaged modifications.",
        "why_other_options_are_wrong": {
            "A": "Columns do not represent file permissions or line numbers.",
            "B": "Correct: Left column is staging/index state; right column is working directory state.",
            "C": "Neither column indicates remote branch sync state.",
            "D": "Authors and commit counts are not shown in `git status`."
        },
        "placement_trap": "Misinterpreting ` M` vs `M ` vs `MM` in `git status -s` during scripting or command-line assessments.",
        "real_world_use": "Heavily utilized in CLI prompt integrations (like Starship or Oh-My-Zsh) and custom build verification scripts."
    },
    {
        "id": "Q033",
        "question": "What is the key functional difference between `git diff HEAD` and `git diff`?",
        "type": "comparison",
        "difficulty": "Medium",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "`git diff` compares Working Tree vs Staging Area; `git diff HEAD` compares Working Tree vs the Last Commit (showing both staged and unstaged changes).",
            "B": "`git diff HEAD` shows differences with remote origin; `git diff` only checks local branches.",
            "C": "`git diff HEAD` only checks commit messages.",
            "D": "`git diff` requires an internet connection, whereas `git diff HEAD` does not."
        },
        "correct_answer": "A",
        "explanation": "`git diff` compares the working tree against the index (staging area). `git diff HEAD` compares the working tree directly against the latest commit (`HEAD`), thereby displaying all unstaged edits PLUS all staged edits together in one view.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git diff` is working tree vs index; `git diff HEAD` is working tree vs latest commit.",
            "B": "`git diff HEAD` compares to the local HEAD commit, not the remote branch (which is `origin/<branch>`).",
            "C": "Neither command checks commit messages; they inspect code diffs.",
            "D": "Both diff operations are completely local and require no network."
        },
        "placement_trap": "Believing `git diff` displays all uncommitted code. If you staged code, `git diff` hides it, while `git diff HEAD` reveals it.",
        "real_world_use": "Checking the complete delta of everything modified since the last commit before executing test suites."
    },
    {
        "id": "Q034",
        "question": "A developer runs the command `git commit --amend --no-edit`. What does this specific command achieve?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "It cancels the most recent commit and deletes the modified files.",
            "B": "It incorporates newly staged changes into the most recent commit while preserving the existing commit message without opening a text editor.",
            "C": "It locks the commit so it can never be amended or rebased in the future.",
            "D": "It pushes the latest commit to GitHub without asking for confirmation."
        },
        "correct_answer": "B",
        "explanation": "`--amend` incorporates currently staged files into the previous commit. Adding `--no-edit` instructs Git to reuse the existing commit's log message without prompting the user to edit it in an interactive editor (like Vim or Nano).",
        "why_other_options_are_wrong": {
            "A": "It does not cancel or delete files; it updates the previous commit.",
            "B": "Correct: Staged changes are absorbed into the previous commit while keeping its message unchanged.",
            "C": "Git commits cannot be locked against local amending.",
            "D": "The command is local and does not push to GitHub."
        },
        "placement_trap": "Thinking `--no-edit` clears the commit message or leaves it empty.",
        "real_world_use": "Standard developer workflow when you committed code, realized you forgot to save one file or format one line, stage it, and amend silently."
    },
    {
        "id": "Q035",
        "question": "Consider the following command sequence executed in a clean Git repository:\n\n```bash\ngit status\necho 'console.log(1);' > script.js\ngit add script.js\necho 'console.log(2);' >> script.js\ngit commit -m 'Initial script'\n```\nWhat will be committed to the repository in commit 'Initial script'?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "A file containing both `console.log(1);` and `console.log(2);`.",
            "B": "A file containing only `console.log(1);`.",
            "C": "An empty file because the second echo invalidated the staging area.",
            "D": "Nothing, because Git throws an error requiring `git add` to be rerun."
        },
        "correct_answer": "B",
        "explanation": "Git commits the snapshot that exists in the staging area (index) at the time `git commit` is called. Because `git add script.js` was executed when the file contained only `console.log(1);`, that is what was staged. The second line (`console.log(2);`) was never staged, so it remains uncommitted in the working tree.",
        "why_other_options_are_wrong": {
            "A": "`console.log(2);` was appended after `git add` and was never staged.",
            "B": "Correct: Only `console.log(1);` was staged when `git commit` occurred.",
            "C": "Appending to a working tree file does not invalidate or wipe staged blobs.",
            "D": "Git does not throw an error; it cleanly commits whatever is currently in the index."
        },
        "placement_trap": "Assuming `git commit` grabs the current file contents on disk rather than the staged index state.",
        "real_world_use": "Frequently tested in MNC written tests to evaluate whether candidates truly understand the index."
    },
    {
        "id": "Q036",
        "question": "A developer renamed `old_service.py` to `new_service.py` using their operating system file explorer (e.g. Windows Explorer). When they run `git status`, Git shows `deleted: old_service.py` and `Untracked: new_service.py`. How can they stage this rename cleanly using Git CLI so that Git registers it as a rename?",
        "type": "troubleshooting",
        "difficulty": "Medium-Hard",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "Run `git rename old_service.py new_service.py`",
            "B": "Run `git add -A` (or `git add old_service.py new_service.py`)",
            "C": "Run `git checkout --rename new_service.py`",
            "D": "Git cannot detect renames; the developer must manually edit the `.git` tree database."
        },
        "correct_answer": "B",
        "explanation": "Git does not store rename metadata explicitly in its objects; it calculates renames dynamically based on file content similarity. Staging both the deletion of the old path and the addition of the new path (e.g. via `git add -A` or staging both files) allows Git's similarity index to detect that `old_service.py` was renamed to `new_service.py`.",
        "why_other_options_are_wrong": {
            "A": "`git rename` is not a valid Git command; the command is `git mv`.",
            "B": "Correct: Staging both the deleted path and new path enables Git's similarity detector to identify the rename.",
            "C": "`git checkout --rename` is a fictional flag.",
            "D": "Git dynamically detects renames using content heuristics without needing metadata changes."
        },
        "placement_trap": "Believing `git mv` is the only way Git can recognize a rename. Git can detect renames even if done via OS explorer once both paths are staged.",
        "real_world_use": "Refactoring large codebases in IDEs where files are moved across directories without using the CLI."
    },
    {
        "id": "Q037",
        "question": "What is the effect of running `git commit -m ''` (an empty commit message) without any configuration overrides?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "Git commits the changes with a default timestamp message.",
            "B": "Git aborts the commit because an empty commit message is rejected by default.",
            "C": "Git prompts the developer for their GitHub password.",
            "D": "Git creates an untracked branch."
        },
        "correct_answer": "B",
        "explanation": "By default, Git enforces non-empty commit messages. Executing `git commit -m ''` aborts with `Aborting commit due to empty commit message.` To force an empty message, one must explicitly pass `--allow-empty-message`.",
        "why_other_options_are_wrong": {
            "A": "Git does not generate automatic timestamp commit messages.",
            "B": "Correct: Git aborts the commit immediately if the message string is empty.",
            "C": "Passwords are not requested for local commit message validation.",
            "D": "Branches are never created as a byproduct of aborted commits."
        },
        "placement_trap": "Assuming Git fills in a generic default message like 'No message'.",
        "real_world_use": "Enforces meaningful documentation in version history across enterprise projects."
    },
    {
        "id": "Q038",
        "question": "A developer runs `git diff branchA..branchB` versus `git diff branchA...branchB` (two dots vs three dots). What is the critical distinction between these two commands?",
        "type": "comparison",
        "difficulty": "Medium-Hard",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "Two dots compares the tips of both branches directly; three dots compares `branchB` against the common ancestor of both branches.",
            "B": "Two dots is for local branches; three dots is for remote branches.",
            "C": "Two dots displays file names only; three dots displays line numbers.",
            "D": "Three dots is a syntax error in Git diff."
        },
        "correct_answer": "A",
        "explanation": "In `git diff`, `branchA..branchB` shows what changed between the tip of `branchA` and the tip of `branchB`. In contrast, `branchA...branchB` (symmetric difference in diff) shows changes in `branchB` starting from the common ancestor commit of both branches, showing only what `branchB` introduced.",
        "why_other_options_are_wrong": {
            "A": "Correct: Two dots compares the two branch endpoints directly; three dots diffs from their common merge-base ancestor.",
            "B": "Both forms work equally on local or remote tracking branch references.",
            "C": "Neither form controls output formatting; flags like `--name-only` do.",
            "D": "Three dots is a valid, widely used Git diff notation (identical to what GitHub PR diff views display)."
        },
        "placement_trap": "Confusing diff dot notation with `git log` dot notation, where `..` and `...` have inverted behavioral meanings!",
        "real_world_use": "GitHub Pull Request diffs use the three-dot diff (`base...feature`) to show only the modifications made on the feature branch."
    },
    {
        "id": "Q039",
        "question": "A developer has executed the following commands:\n\n```bash\ngit add styles.css\ngit diff --staged > changes.patch\ngit reset\n```\nWhat is the state of the repository and the files after executing `git reset`?",
        "type": "command_tracing",
        "difficulty": "Medium-Hard",
        "topic": "git_add_commit_status_diff",
        "options": {
            "A": "`styles.css` modifications are deleted from the disk.",
            "B": "`styles.css` modifications are unstaged but preserved intact in the working tree, and `changes.patch` exists as an untracked file.",
            "C": "`changes.patch` is automatically committed to the repository.",
            "D": "The repository is rolled back to the initial commit."
        },
        "correct_answer": "B",
        "explanation": "Plain `git reset` (defaulting to `--mixed HEAD`) unstages all currently staged changes without touching the working tree files. Therefore, modifications in `styles.css` remain safely in the working directory. The output redirection `> changes.patch` created a new file on disk, which is untracked by Git.",
        "why_other_options_are_wrong": {
            "A": "Plain `git reset` is mixed; it never discards working tree changes (that requires `--hard`).",
            "B": "Correct: Staged changes are unstaged back to working tree, and `changes.patch` remains on disk untracked.",
            "C": "Git never commits files automatically upon reset.",
            "D": "Reset without arguments targets `HEAD` (the current commit), not the initial commit."
        },
        "placement_trap": "Assuming `git reset` destroys working tree modifications. Only `git reset --hard` destroys uncommitted working tree modifications.",
        "real_world_use": "Safely clearing the staging area when you change your mind about what to include in a commit."
    },

    # Topic 6: branches_and_branch_switching (10 questions: Q040-Q049)
    {
        "id": "Q040",
        "question": "What is a Git branch in terms of internal storage inside the `.git` directory?",
        "type": "conceptual",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "A compressed zip directory containing a full duplicate copy of all project files.",
            "B": "A simple 41-byte text file located in `.git/refs/heads/<branch-name>` containing the 40-character SHA-1 hash of its latest commit plus a newline.",
            "C": "A row in an internal SQLite database tracking branch hierarchies.",
            "D": "A background daemon thread managing code merges."
        },
        "correct_answer": "B",
        "explanation": "Git branches are exceptionally lightweight. A branch is nothing more than a movable pointer to a commit, physically stored as a small text file containing the commit SHA hash in `.git/refs/heads/`. Creating a branch requires writing 41 bytes, which is why branch creation in Git is instantaneous.",
        "why_other_options_are_wrong": {
            "A": "Older VCS systems (like SVN) duplicated directories for branches; Git never duplicates files for branches.",
            "B": "Correct: A branch is literally a 41-byte pointer file containing a commit SHA hash.",
            "C": "Git uses filesystem references, not SQLite databases.",
            "D": "Branches are static pointer references, not running background threads."
        },
        "placement_trap": "Believing creating a new branch copies or duplicates project files on disk.",
        "real_world_use": "Enables frictionless feature branching workflows where developers create dozens of short-lived branches daily."
    },
    {
        "id": "Q041",
        "question": "In Git version 2.23+, two new commands were introduced to replace the overloaded responsibilities of `git checkout`. Which command is designed specifically for creating and switching between branches?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "`git branch --jump`",
            "B": "`git switch`",
            "C": "`git restore`",
            "D": "`git navigate`"
        },
        "correct_answer": "B",
        "explanation": "Git 2.23 separated `git checkout` into two dedicated commands: `git switch` (for switching and creating branches) and `git restore` (for restoring working tree and staged files).",
        "why_other_options_are_wrong": {
            "A": "`--jump` is not a Git command or option.",
            "B": "Correct: `git switch <branch>` and `git switch -c <new-branch>` are the modern dedicated branch switching commands.",
            "C": "`git restore` handles file restoration and undoing changes, not branch switching.",
            "D": "`git navigate` is a nonexistent command."
        },
        "placement_trap": "Candidates only familiar with legacy `git checkout -b` are caught off guard when modern MNC interviewers ask for `git switch`.",
        "real_world_use": "Prevents accidental file overwrites that occurred when developers mistyped branch names with `git checkout`."
    },
    {
        "id": "Q042",
        "question": "A developer is on the `main` branch. They execute `git branch feature-payment`. What is the immediate state of their repository after this command?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "The `feature-payment` branch is created, and the developer is now switched to `feature-payment`.",
            "B": "The `feature-payment` branch is created pointing to the current commit, but `HEAD` remains on the `main` branch.",
            "C": "The files on `main` are deleted and replaced by a blank template.",
            "D": "The branch is pushed to GitHub automatically."
        },
        "correct_answer": "B",
        "explanation": "`git branch <name>` ONLY creates the branch pointer. It does NOT switch to it. The current branch remains `main`. To create and switch in one step, one must use `git switch -c <name>` or `git checkout -b <name>`.",
        "why_other_options_are_wrong": {
            "A": "`git branch <name>` does not switch branches; `HEAD` remains on `main`.",
            "B": "Correct: The pointer file is created, but `HEAD` still points to `main`.",
            "C": "Files are untouched.",
            "D": "No remote synchronization occurs."
        },
        "placement_trap": "Assuming `git branch <name>` switches to the new branch, then making commits on `main` by mistake.",
        "real_world_use": "Always verify your active branch with `git branch --show-current` or `git status` before editing code."
    },
    {
        "id": "Q043",
        "question": "A developer has unstaged modifications in `app.py`. They attempt to switch branches using `git switch main`. Under what specific condition will Git prevent the branch switch with an error?",
        "type": "troubleshooting",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "Git always blocks switching branches whenever any modified file exists.",
            "B": "Git prevents the switch if the target branch has different modifications in `app.py` that would be overwritten by the checkout.",
            "C": "Git only blocks switching if the developer has not pushed to remote origin.",
            "D": "Git blocks switching if the terminal has been open for more than 1 hour."
        },
        "correct_answer": "B",
        "explanation": "Git allows branch switching with local uncommitted changes as long as the files you have modified are identical between the current commit and the target branch commit. However, if the target branch contains different changes in that same file, Git aborts with: `error: Your local changes to the following files would be overwritten by checkout... Please commit your changes or stash them.`",
        "why_other_options_are_wrong": {
            "A": "If the modified file does not differ between the two branches, Git happily carries the dirty working tree changes over.",
            "B": "Correct: Git protects uncommitted work from being overwritten by incoming branch files.",
            "C": "Remote push status has no bearing on local branch switching safety checks.",
            "D": "Terminal session duration is completely irrelevant."
        },
        "placement_trap": "Thinking Git never allows branch switching with dirty working trees, or conversely assuming Git will always silently overwrite local edits.",
        "real_world_use": "Knowing this error triggers the immediate instinct to use `git stash` to protect in-flight changes."
    },
    {
        "id": "Q044",
        "question": "A developer wants to delete a local branch named `temp-experiment`. They run `git branch -d temp-experiment`, but Git returns the error: `error: The branch 'temp-experiment' is not fully merged.` Why did Git reject the deletion, and which command forces the deletion?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "Git requires server admin approval; run `git branch --admin-delete temp-experiment`.",
            "B": "`-d` is a safe delete that checks if commits were merged into `HEAD`; to force-delete an unmerged branch and discard its commits, use `git branch -D temp-experiment`.",
            "C": "The branch must first be renamed to `deleted-experiment`.",
            "D": "Git cannot delete branches with unmerged commits; the repository must be deleted and recloned."
        },
        "correct_answer": "B",
        "explanation": "`git branch -d` is a safeguard to prevent accidental data loss: it refuses to delete branches whose commits are not reachable from the current branch or upstream. `git branch -D` (capital D, shortcut for `--delete --force`) bypasses this check and deletes the branch pointer.",
        "why_other_options_are_wrong": {
            "A": "`--admin-delete` does not exist.",
            "B": "Correct: `-d` enforces safety; `-D` forces deletion of unmerged branches.",
            "C": "Renaming does not bypass merge checks.",
            "D": "Branches are easily force-deleted locally with `-D`."
        },
        "placement_trap": "Confusing safe delete (`-d`) with force delete (`-D`).",
        "real_world_use": "Cleaning up abandoned experimental feature spikes that will not be merged into production."
    },
    {
        "id": "Q045",
        "question": "A developer runs `git branch -D feature-x` on a branch containing commits that were never pushed or merged anywhere else. Are the commits immediately erased from disk?",
        "type": "conceptual",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "Yes, Git immediately zeroes out the disk sectors containing the commit data.",
            "B": "No, the branch pointer file is deleted, but the commit objects remain intact as 'dangling commits' in `.git/objects` and can be recovered via `git reflog` until garbage collected.",
            "C": "Yes, but they are stored in the Windows Recycle Bin.",
            "D": "No, Git automatically opens a Pull Request on GitHub to back them up."
        },
        "correct_answer": "B",
        "explanation": "Deleting a branch simply deletes the reference pointer file in `.git/refs/heads/`. The underlying commit and tree objects still reside in `.git/objects`. They become 'unreachable' (or dangling) and are recoverable via `git reflog` until Git's garbage collection (`git gc`) prunes them after 30-90 days.",
        "why_other_options_are_wrong": {
            "A": "Git objects are never immediately zeroed out upon branch deletion.",
            "B": "Correct: The commit objects persist on disk and can be retrieved using `git reflog`.",
            "C": "Git objects are inside `.git` and are not sent to the OS Recycle Bin.",
            "D": "Git CLI has no automatic PR creation mechanism."
        },
        "placement_trap": "Assuming deleting a branch instantly destroys all commit data forever.",
        "real_world_use": "Life-saving knowledge when a developer or teammate accidentally deletes the wrong feature branch locally."
    },
    {
        "id": "Q046",
        "question": "A developer is currently on `feature-ui`. They want to rename this branch to `feature-user-interface`. Which command achieves this?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "`git branch -m feature-user-interface`",
            "B": "`git rename-branch feature-user-interface`",
            "C": "`git switch --rename feature-user-interface`",
            "D": "`git branch -r feature-user-interface`"
        },
        "correct_answer": "A",
        "explanation": "`git branch -m <new-name>` (or `--move`) renames the currently checked-out branch. To rename a branch without checking it out first, use `git branch -m <old-name> <new-name>`.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git branch -m <new-name>` moves/renames the current branch.",
            "B": "`git rename-branch` is a nonexistent command.",
            "C": "`git switch --rename` is not valid.",
            "D": "`-r` lists remote-tracking branches, it does not rename branches."
        },
        "placement_trap": "Thinking branch renaming requires deleting the old branch and creating a new one.",
        "real_world_use": "Aligning branch names with team Jira ticket conventions (e.g., renaming `login` to `PROJ-1042-login`)."
    },
    {
        "id": "Q047",
        "question": "Consider this sequence of commands:\n\n```bash\ngit switch -c dev\necho 'feature code' > feature.txt\ngit add feature.txt\ngit commit -m 'Add feature'\ngit switch main\ngit branch -d dev\n```\nWhat will be the result of the final command `git branch -d dev`?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "`dev` is deleted successfully because it only contains one commit.",
            "B": "`git branch -d dev` fails with an error stating the branch is not fully merged into `main`.",
            "C": "`main` is deleted instead because `HEAD` is on `main`.",
            "D": "Git merges `dev` into `main` automatically before deleting it."
        },
        "correct_answer": "B",
        "explanation": "`dev` contains a new commit ('Add feature') that has not been merged into `main`. Because `-d` performs a safe delete check against `HEAD` (which is `main`), Git refuses to delete `dev` to protect the unmerged commit from being orphaned.",
        "why_other_options_are_wrong": {
            "A": "The number of commits does not matter; if any commit is unmerged, `-d` blocks deletion.",
            "B": "Correct: Safe delete fails because commit 'Add feature' is not reachable from `main`.",
            "C": "Git never deletes the currently checked-out branch `main`.",
            "D": "Git never merges branches implicitly during a delete command."
        },
        "placement_trap": "Thinking `-d` merges code automatically before deletion.",
        "real_world_use": "Protects developers from accidentally wiping unmerged feature work when switching branches."
    },
    {
        "id": "Q048",
        "question": "A developer runs `git branch -a`. What does the `-a` flag display?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "Only local branches that have active pull requests.",
            "B": "Both local branches and remote-tracking branches (e.g. `remotes/origin/main`).",
            "C": "All files that have been staged across all branches.",
            "D": "All Git configuration variables."
        },
        "correct_answer": "B",
        "explanation": "`git branch -a` (or `--all`) lists both local branches in `.git/refs/heads/` and remote-tracking branch references cached locally in `.git/refs/remotes/`.",
        "why_other_options_are_wrong": {
            "A": "Git CLI has no native awareness of web Pull Requests.",
            "B": "Correct: `-a` lists all local and remote-tracking branches.",
            "C": "Branch commands list branch references, not staged files.",
            "D": "`git config --list` lists configuration variables."
        },
        "placement_trap": "Assuming `-a` queries the remote server live over the internet. It lists local and *cached* remote-tracking references.",
        "real_world_use": "Finding whether a teammate's branch was fetched onto your local machine."
    },
    {
        "id": "Q049",
        "question": "A developer wants to create a new branch called `bugfix-12` and switch to it immediately, starting from a specific commit hash `a1b2c3d` rather than `HEAD`. Which modern command executes this correctly?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "branches_and_branch_switching",
        "options": {
            "A": "`git switch -c bugfix-12 a1b2c3d`",
            "B": "`git branch bugfix-12 --start a1b2c3d`",
            "C": "`git restore -b bugfix-12 a1b2c3d`",
            "D": "`git checkout bugfix-12 --at a1b2c3d`"
        },
        "correct_answer": "A",
        "explanation": "In `git switch`, the `-c` (or `--create`) option accepts an optional starting point commit or branch: `git switch -c <new-branch> <start-point>`. This creates `bugfix-12` pointing to `a1b2c3d` and checks it out immediately.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git switch -c <name> <start-point>` creates and checks out the branch at that exact commit.",
            "B": "`--start` is not a valid Git option.",
            "C": "`git restore` is for files, not branch creation.",
            "D": "`--at` is not a valid checkout syntax."
        },
        "placement_trap": "Checking out the commit first into detached HEAD and then branching, rather than doing it cleanly in one command.",
        "real_world_use": "Branching off a specific production release tag or hotfix commit to resolve urgent client bugs."
    },

    # Topic 7: merge_and_merge_conflicts (Q050 in part 2, Q051-Q059 in part 3)
    {
        "id": "Q050",
        "question": "What is the technical definition of a 'Fast-Forward' merge in Git?",
        "type": "conceptual",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "Git compresses all commits on the feature branch into a single commit and deletes the feature branch.",
            "B": "When the target branch has no new commits since the feature branch was created, Git simply moves the target branch pointer forward to the tip of the feature branch without creating a new merge commit.",
            "C": "Git bypasses merge conflict markers and automatically accepts all incoming changes.",
            "D": "Git uploads all commits directly to GitHub Actions for accelerated compilation."
        },
        "correct_answer": "B",
        "explanation": "A fast-forward merge occurs when there is a linear path from the current branch tip to the target branch tip (i.e., no diverging commits exist on the current branch). Git does not need to perform a three-way merge or create a dedicated merge commit; it simply advances the branch pointer forward.",
        "why_other_options_are_wrong": {
            "A": "Compressing commits into one is a 'squash' merge (`git merge --squash`), not a fast-forward.",
            "B": "Correct: Fast-forward simply moves the pointer forward along a linear commit chain without a new commit.",
            "C": "Fast-forwards cannot have conflicts because there are no diverging commits.",
            "D": "Fast-forward has nothing to do with cloud compilation."
        },
        "placement_trap": "Expecting a merge commit to be created during every merge. Fast-forward merges create zero merge commits unless `--no-ff` is specified.",
        "real_world_use": "Common in feature branches rebased onto `main` before merging to keep history strictly linear."
    }
]

print(f"Part 2 initialized with {len(part2)} questions.")
