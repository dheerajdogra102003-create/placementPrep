# build_part3.py - Questions Q051 to Q075 (All Medium-Hard)
part3 = [
    # Topic 7 (cont): merge_and_merge_conflicts (9 questions: Q051-Q059)
    {
        "id": "Q051",
        "question": "A developer is merging `feature-auth` into `main`. Both branches made different changes to lines 15-20 of `server.js`. Git pauses the merge and reports a conflict. When the developer opens `server.js`, which marker represents the code that was currently on `main` before the merge was attempted?",
        "type": "conceptual",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "The code between `======` and `>>>>>>> feature-auth`",
            "B": "The code between `<<<<<<< HEAD` and `=======`",
            "C": "The code enclosed in `<!-- REMOTE START -->` and `<!-- REMOTE END -->`",
            "D": "The code marked with `git-conflict-original`"
        },
        "correct_answer": "B",
        "explanation": "In standard Git conflict markers, the section between `<<<<<<< HEAD` and `=======` represents the code on the currently checked-out branch (`HEAD`, which is `main`). The section between `=======` and `>>>>>>> feature-auth` represents the incoming code from the branch being merged.",
        "why_other_options_are_wrong": {
            "A": "The section between `=======` and `>>>>>>>` represents the incoming branch (`feature-auth`), not `HEAD`.",
            "B": "Correct: `<<<<<<< HEAD` to `=======` contains the active branch's existing code.",
            "C": "HTML comment markers are not used by Git.",
            "D": "Git uses standard diff3/conflict markers, not custom labels."
        },
        "placement_trap": "Mixing up the top section (`HEAD`) with the bottom section (incoming branch) and mistakenly discarding the wrong code during conflict resolution.",
        "real_world_use": "Essential for resolving merge conflicts accurately during team sprint integration."
    },
    {
        "id": "Q052",
        "question": "A developer has resolved the conflicting lines in `server.js` by manually editing the file and removing all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). What is the immediate next command they MUST run to notify Git that the conflict in this file has been resolved?",
        "type": "scenario_based",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "`git resolve server.js`",
            "B": "`git add server.js`",
            "C": "`git commit --resolved`",
            "D": "`git merge --continue-file server.js`"
        },
        "correct_answer": "B",
        "explanation": "In Git, staging a file with `git add <file>` marks the conflict as resolved in the index. Once all conflicted files have been staged with `git add`, the developer finishes the merge by running `git commit` (or `git merge --continue`).",
        "why_other_options_are_wrong": {
            "A": "`git resolve` is not a valid Git CLI command.",
            "B": "Correct: `git add <file>` marks the file as resolved in the staging index.",
            "C": "`--resolved` is not a valid `git commit` option.",
            "D": "`--continue-file` is not a valid option."
        },
        "placement_trap": "Looking for a specialized 'git resolve' command instead of standard `git add`.",
        "real_world_use": "Standard multi-file conflict workflow: edit file -> `git add` -> repeat for all files -> `git commit`."
    },
    {
        "id": "Q053",
        "question": "A developer starts merging `feature-billing` into `main`, but encounters dozens of complex conflicts across critical legacy files. They decide it is unsafe to proceed and want to completely abort the merge, cleanly returning the repository and working tree to the exact state before `git merge` was invoked. Which command does this?",
        "type": "troubleshooting",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "`git merge --abort`",
            "B": "`git reset --cancel`",
            "C": "`git revert MERGE_HEAD`",
            "D": "`git checkout --undo-merge`"
        },
        "correct_answer": "A",
        "explanation": "`git merge --abort` stops the in-progress merge operation and attempts to reconstruct the pre-merge state. It clears conflict markers and restores the working directory and index back to what they were before `git merge` was executed.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git merge --abort` safely cancels an ongoing conflicted merge.",
            "B": "`--cancel` is not a valid `git reset` option.",
            "C": "`git revert` cannot revert an incomplete, uncommitted merge.",
            "D": "`--undo-merge` is a fictional flag."
        },
        "placement_trap": "Attempting to manually delete conflict markers or running `git reset --hard` blindly instead of using the built-in `git merge --abort`.",
        "real_world_use": "Standard emergency rollback when an unexpected merge collision requires consulting with the original author before merging."
    },
    {
        "id": "Q054",
        "question": "A team lead enforces a policy: 'Every merge of a feature branch into `main` must produce a dedicated merge commit, even if the feature branch could be fast-forward merged.' Which command flag enforces this policy?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "`git merge --no-ff feature-branch`",
            "B": "`git merge --force-commit feature-branch`",
            "C": "`git merge --strict feature-branch`",
            "D": "`git merge --two-parent feature-branch`"
        },
        "correct_answer": "A",
        "explanation": "The `--no-ff` (no fast-forward) flag instructs Git to always create a merge commit object, even if the merge could technically be resolved as a fast-forward. This preserves the historical grouping and existence of the feature branch in the commit graph.",
        "why_other_options_are_wrong": {
            "A": "Correct: `--no-ff` disables fast-forward and forces a merge commit with 2 parents.",
            "B": "`--force-commit` is not a valid Git option.",
            "C": "`--strict` is not an option for `git merge`.",
            "D": "`--two-parent` is a fictional flag."
        },
        "placement_trap": "Inventing flags like `--force-commit` instead of the standard `--no-ff` flag.",
        "real_world_use": "Common in Git Flow enterprise workflows to ensure feature branches remain visible in `git log --graph`."
    },
    {
        "id": "Q055",
        "question": "What is the key structural difference in commit history between merging a feature branch with `git merge` versus incorporating it via `git rebase`?",
        "type": "comparison",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "`git merge` preserves original commit history and creates a merge commit with two parents; `git rebase` rewrites history by replaying feature commits linearly on top of the base branch, creating new commit SHA hashes.",
            "B": "`git merge` deletes the feature branch; `git rebase` keeps it active permanently.",
            "C": "`git rebase` can only be used on binary files; `git merge` is for code files.",
            "D": "`git rebase` automatically pushes changes to GitHub; `git merge` does not."
        },
        "correct_answer": "A",
        "explanation": "`git merge` creates a non-linear history with a dedicated merge commit joining two divergent branches, preserving original timestamps and commit SHAs. `git rebase` lifts feature commits and re-applies them one by one on top of the target branch tip, creating a completely linear history but rewriting their commit SHAs.",
        "why_other_options_are_wrong": {
            "A": "Correct: Merge preserves history with a 2-parent commit; rebase rewrites commits linearly with new SHAs.",
            "B": "Neither command automatically deletes branches.",
            "C": "Both commands handle all files; file type has zero relevance.",
            "D": "Neither command pushes to GitHub; both are purely local."
        },
        "placement_trap": "Believing rebase moves existing commit objects as-is without changing their SHA hashes.",
        "real_world_use": "The Golden Rule of Git: Never rebase branches that have already been pushed and shared with other developers."
    },
    {
        "id": "Q056",
        "question": "A developer runs `git merge feature-x` and encounters conflicts. If they run `git commit` immediately without resolving conflicts and without running `git add`, what does Git do?",
        "type": "output_or_state_prediction",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "Git automatically resolves conflicts by picking the older version.",
            "B": "Git aborts the commit and displays an error stating: `error: Committing is not possible because you have unmerged files.`",
            "C": "Git commits the files with the conflict markers left permanently in the codebase.",
            "D": "Git switches to the `main` branch."
        },
        "correct_answer": "B",
        "explanation": "Git refuses to commit while there are unmerged files (files in conflict stages 1, 2, or 3 in the index). It halts execution with: `error: Committing is not possible because you have unmerged files... fatal: Exiting because of an unresolved conflict.`",
        "why_other_options_are_wrong": {
            "A": "Git never resolves conflicts by guessing which version is older.",
            "B": "Correct: Git explicitly blocks committing until all conflicts are marked resolved via `git add`.",
            "C": "Git's internal state prevents committing unmerged files; conflict markers are only committed if a developer manually stages them with `git add` without cleaning them.",
            "D": "Git does not switch branches during an unresolved merge."
        },
        "placement_trap": "Assuming Git allows completing a merge while files are still marked as 'unmerged' in the index.",
        "real_world_use": "Prevents catastrophic syntax errors and build breaks in production pipelines."
    },
    {
        "id": "Q057",
        "question": "In a 3-way merge, which three specific commit snapshots does Git use to determine differences and automatically merge changes?",
        "type": "conceptual",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "The initial root commit, the latest commit on `main`, and the latest commit on GitHub.",
            "B": "The common ancestor commit of both branches, the tip of the current branch, and the tip of the incoming branch.",
            "C": "The three most recent commits on the current branch.",
            "D": "The working tree, the index, and the stash."
        },
        "correct_answer": "B",
        "explanation": "A 3-way merge algorithm (used when branches have diverged) compares: 1. The merge base (the most recent common ancestor commit), 2. The tip of the current branch (ours/HEAD), and 3. The tip of the branch being merged (theirs). Changes made on each branch relative to the common ancestor are combined.",
        "why_other_options_are_wrong": {
            "A": "The root commit is irrelevant if branches split later.",
            "B": "Correct: The 3 inputs are the common ancestor (merge-base) and the tips of the two diverging branches.",
            "C": "Linear historical commits on the current branch do not provide information about the incoming branch.",
            "D": "Working tree, index, and stash are local staging areas, not the 3 commits used in merge-base resolution."
        },
        "placement_trap": "Thinking 3-way merge means merging 3 different branches simultaneously (which is an 'octopus merge').",
        "real_world_use": "Core algorithm that allows Git to automatically merge different files and different lines without human intervention."
    },
    {
        "id": "Q058",
        "question": "Two developers, Alice and Bob, clone a repository. Alice edits line 10 of `utils.js`, commits, and pushes to `main`. Bob simultaneously edits line 80 of `utils.js` (a completely different function), commits locally, and then pulls from `main`. Will a merge conflict occur?",
        "type": "scenario_based",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "Yes, because any modification to the same file always triggers a conflict.",
            "B": "No, because the edits occurred in non-overlapping, distinct regions of the file, allowing Git's 3-way merge to combine them automatically.",
            "C": "Yes, because Alice's commit hash does not match Bob's commit hash.",
            "D": "No, but only if Bob is using a Linux terminal."
        },
        "correct_answer": "B",
        "explanation": "Git's merge engine operates at the hunk/line level, not the whole-file level. If two developers edit different, non-overlapping parts of the same file, Git merges them cleanly and automatically without generating conflict markers.",
        "why_other_options_are_wrong": {
            "A": "Editing the same file does NOT cause a conflict unless the edits overlap on the same lines or adjacent lines.",
            "B": "Correct: Disjoint line edits in the same file merge automatically without conflict.",
            "C": "Commit hashes never match between different commits; that is expected and does not cause conflicts.",
            "D": "Operating system has no impact on Git's merge algorithm."
        },
        "placement_trap": "Freshers often believe that modifying the same file always produces a merge conflict.",
        "real_world_use": "Allows large engineering teams to work concurrently on shared files like routes or dependency lists."
    },
    {
        "id": "Q059",
        "question": "A developer wants to inspect the common ancestor commit of two diverging branches `main` and `feature-login`. Which command finds the exact commit hash where they split?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "merge_and_merge_conflicts",
        "options": {
            "A": "`git merge-base main feature-login`",
            "B": "`git diff --ancestor main feature-login`",
            "C": "`git find-split main feature-login`",
            "D": "`git log --root main feature-login`"
        },
        "correct_answer": "A",
        "explanation": "`git merge-base <commit1> <commit2>` finds the best common ancestor commit between two branches or revisions. It outputs the exact commit SHA that Git uses as the base for three-way merges.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git merge-base` returns the common ancestor commit hash.",
            "B": "`--ancestor` is not a valid diff option.",
            "C": "`git find-split` is a fictional command.",
            "D": "`--root` displays the initial commit of a repository."
        },
        "placement_trap": "Manually scrolling through `git log` to find branch divergence instead of using `git merge-base`.",
        "real_world_use": "Used by CI/CD scripts and PR bots to calculate the exact range of commits introduced by a pull request."
    },

    # Topic 8: remote_repositories (7 questions: Q060-Q066)
    {
        "id": "Q060",
        "question": "A developer initializes a new Git repository locally with `git init`. They now want to link it to a newly created empty repository on GitHub at `https://github.com/company/core-api.git` under the conventional remote alias `origin`. Which command executes this correctly?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "`git remote add origin https://github.com/company/core-api.git`",
            "B": "`git link origin https://github.com/company/core-api.git`",
            "C": "`git remote create origin https://github.com/company/core-api.git`",
            "D": "`git connect https://github.com/company/core-api.git as origin`"
        },
        "correct_answer": "A",
        "explanation": "The command `git remote add <name> <url>` adds a new remote reference to the local repository configuration (`.git/config`). `origin` is the standard name assigned to the primary remote.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git remote add origin <url>` registers the remote repository URL under the alias `origin`.",
            "B": "`git link` is not a Git command.",
            "C": "`git remote create` is invalid syntax.",
            "D": "`git connect` is a nonexistent command."
        },
        "placement_trap": "Confusing `git clone` (which auto-names `origin`) with linking an existing local repo via `git remote add`.",
        "real_world_use": "Standard command run when publishing a local starter template or existing project to GitHub."
    },
    {
        "id": "Q061",
        "question": "A developer runs `git remote -v`. What information does this command display in the terminal?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "The version of Git installed on the remote server.",
            "B": "The names of all configured remotes along with their corresponding fetch and push URLs.",
            "C": "The list of all remote branches that have unmerged pull requests.",
            "D": "The network latency and ping response time to GitHub."
        },
        "correct_answer": "B",
        "explanation": "`git remote -v` (verbose) lists each remote alias (such as `origin`) alongside its specific URL endpoints configured for `(fetch)` and `(push)`.",
        "why_other_options_are_wrong": {
            "A": "`-v` stands for verbose, not remote server software version.",
            "B": "Correct: Displays remote names and their configured fetch and push URLs.",
            "C": "Git CLI has no concept of GitHub PR status.",
            "D": "Git does not measure or report network ping latency in `git remote`."
        },
        "placement_trap": "Assuming `git remote -v` prints Git version information (which is `git --version`).",
        "real_world_use": "Verifying whether a repository is connected via HTTPS or SSH before pushing credentials."
    },
    {
        "id": "Q062",
        "question": "A company migrates its GitHub organization from `https://github.com/old-org/app.git` to `https://github.com/new-org/app.git`. Which command updates the URL of the existing `origin` remote without breaking existing branch tracking?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "`git remote set-url origin https://github.com/new-org/app.git`",
            "B": "`git remote update-url origin https://github.com/new-org/app.git`",
            "C": "`git remote replace origin https://github.com/new-org/app.git`",
            "D": "`git config --remote origin https://github.com/new-org/app.git`"
        },
        "correct_answer": "A",
        "explanation": "`git remote set-url <name> <newurl>` updates the URL for an existing remote reference in `.git/config`, preserving all existing tracking branch relationships.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git remote set-url origin <new-url>` cleanly updates the target endpoint.",
            "B": "`update-url` is not a valid subcommand.",
            "C": "`replace` is not a valid `git remote` subcommand.",
            "D": "Direct `git config` requires exact section syntax (`remote.origin.url`), not `--remote`."
        },
        "placement_trap": "Deleting and re-adding the remote via `git remote rm` and `git remote add`, which resets tracking references unnecessarily.",
        "real_world_use": "Routine task when switching from password-deprecated HTTPS URLs to SSH URLs (`git@github.com:...`)."
    },
    {
        "id": "Q063",
        "question": "When connecting to GitHub over SSH, which file on the developer's local machine contains the public key that must be copied and added to their GitHub account settings?",
        "type": "conceptual",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "`~/.ssh/id_ed25519.pub` (or `~/.ssh/id_rsa.pub`)",
            "B": "`~/.ssh/id_ed25519` (the private key)",
            "C": "`~/.gitconfig`",
            "D": "`.git/refs/remotes/ssh.key`"
        },
        "correct_answer": "A",
        "explanation": "In asymmetric cryptography (public-key encryption), the public key (`.pub` extension, e.g. `id_ed25519.pub`) is shared with external services like GitHub. The private key (`id_ed25519` without extension) must strictly remain confidential on the local computer.",
        "why_other_options_are_wrong": {
            "A": "Correct: The public key (`.pub`) is uploaded to GitHub's SSH settings.",
            "B": "CRITICAL SECURITY ERROR: The private key must NEVER be uploaded, shared, or pasted into GitHub.",
            "C": "`~/.gitconfig` contains text configuration like name and email, not cryptographic keys.",
            "D": "SSH keys are located in the user's `~/.ssh/` directory, not inside individual project `.git` folders."
        },
        "placement_trap": "Sharing the private key instead of the public key—a serious security mistake tested in screening rounds.",
        "real_world_use": "Configuring passwordless, secure key authentication for corporate development laptops."
    },
    {
        "id": "Q064",
        "question": "A developer runs `git remote rename origin upstream`. What are the exact consequences of this command?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "It renames the remote repository on GitHub's cloud servers.",
            "B": "It renames the local alias in `.git/config` from `origin` to `upstream` and updates remote-tracking branch prefixes from `origin/*` to `upstream/*`.",
            "C": "It breaks the repository and deletes all downloaded remote commits.",
            "D": "It switches the active local branch to `upstream`."
        },
        "correct_answer": "B",
        "explanation": "`git remote rename <old> <new>` is a local configuration command. It updates the remote alias in `.git/config` and renames all remote-tracking branches in `.git/refs/remotes/<old>/` to `.git/refs/remotes/<new>/`. It has zero effect on the remote server itself.",
        "why_other_options_are_wrong": {
            "A": "Git CLI cannot rename cloud repositories on GitHub servers without using GitHub Web UI or REST APIs.",
            "B": "Correct: It renames the local remote alias and adjusts remote tracking branch namespaces.",
            "C": "No commits or objects are deleted.",
            "D": "It does not create or switch local branches."
        },
        "placement_trap": "Assuming `git remote rename` renames the repository on GitHub.",
        "real_world_use": "Refactoring remote aliases when converting a direct clone into an open-source fork/upstream workflow."
    },
    {
        "id": "Q065",
        "question": "A developer needs to push code to a client's secondary backup repository in addition to `origin`. Can a single local Git repository be configured with multiple remote repositories?",
        "type": "scenario_based",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "No, Git strictly enforces exactly one remote repository per local repository.",
            "B": "Yes, by using `git remote add <alias> <url>`, a repository can have multiple named remotes (e.g. `origin`, `backup`, `staging`, `upstream`).",
            "C": "Yes, but only if all remotes are hosted on the same physical server.",
            "D": "No, unless a separate `.git` folder is created for each remote."
        },
        "correct_answer": "B",
        "explanation": "Because Git is distributed, a single local repository can connect to arbitrarily many remote repositories. Each remote is simply assigned a unique alias (e.g., `origin`, `upstream`, `gitlab`, `production`).",
        "why_other_options_are_wrong": {
            "A": "Git has supported multiple remotes since its inception.",
            "B": "Correct: You can register multiple remotes with distinct names using `git remote add`.",
            "C": "Remotes can be on completely different services (e.g. GitHub, GitLab, private AWS CodeCommit).",
            "D": "Only one `.git` database is used; it cleanly tracks different remotes in `.git/refs/remotes/`."
        },
        "placement_trap": "Believing a project is tethered to a single remote repository.",
        "real_world_use": "Standard in open-source: `origin` points to your personal fork, while `upstream` points to the central organization repository."
    },
    {
        "id": "Q066",
        "question": "A developer wants to remove a remote named `staging-server` that is no longer needed. Which command correctly removes this remote from the local repository configuration?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "remote_repositories",
        "options": {
            "A": "`git remote remove staging-server` (or `git remote rm staging-server`)",
            "B": "`git remote delete --cloud staging-server`",
            "C": "`git disconnect staging-server`",
            "D": "`git unremote staging-server`"
        },
        "correct_answer": "A",
        "explanation": "`git remote remove <name>` (or its older alias `git remote rm <name>`) removes the specified remote reference and all associated remote-tracking branches from `.git/config` and `.git/refs/remotes/`.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git remote remove <name>` unregisters the remote locally.",
            "B": "`--cloud` is not a Git option; Git CLI does not delete remote servers.",
            "C": "`git disconnect` is not a valid Git command.",
            "D": "`git unremote` is a fake command."
        },
        "placement_trap": "Fearing that `git remote remove` will delete the code on the remote server. It only deletes the local pointer.",
        "real_world_use": "Cleaning up obsolete test servers and stale deployment endpoints from developer machines."
    },

    # Topic 9: push_pull_fetch (8 questions: Q067-Q074)
    {
        "id": "Q067",
        "question": "What is the crucial operational difference between `git fetch` and `git pull`?",
        "type": "comparison",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "`git fetch` downloads remote objects and updates remote-tracking branches without altering your working directory or local branches; `git pull` performs a `git fetch` followed immediately by `git merge`.",
            "B": "`git fetch` is used for GitHub, whereas `git pull` is used for GitLab.",
            "C": "`git fetch` automatically resolves merge conflicts; `git pull` creates them.",
            "D": "`git pull` downloads commits, while `git fetch` only downloads branch names."
        },
        "correct_answer": "A",
        "explanation": "`git fetch` downloads all new commits, refs, and files from the remote and updates remote-tracking branches (e.g., `origin/main`), but leaves your current local checked-out branch and working tree untouched. `git pull` executes `git fetch` and then immediately tries to merge (`git merge FETCH_HEAD`) into your current branch.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git pull = git fetch + git merge`. Fetch is safe and non-destructive; pull modifies local branches.",
            "B": "Both commands work on any Git remote regardless of hosting provider.",
            "C": "`git fetch` never merges, so it cannot resolve conflicts; `git pull` can trigger merge conflicts.",
            "D": "`git fetch` downloads full commit objects and blobs, not just branch names."
        },
        "placement_trap": "Thinking `git fetch` is simply an obsolete or alternative synonym for `git pull`.",
        "real_world_use": "Senior developers always `fetch` first to review incoming commits with `git log HEAD..origin/main` before merging."
    },
    {
        "id": "Q068",
        "question": "A developer creates a new local branch `feature-reports` and commits changes. When they run plain `git push`, Git returns an error: `fatal: The current branch feature-reports has no upstream branch. To push the current branch and set the remote as upstream, use...`. Which command resolves this and establishes tracking?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "`git push -u origin feature-reports`",
            "B": "`git push --all-branches`",
            "C": "`git push --force feature-reports`",
            "D": "`git branch --upstream-push origin feature-reports`"
        },
        "correct_answer": "A",
        "explanation": "The `-u` (or `--set-upstream`) flag instructs Git to push the branch to the remote repository AND configure local tracking in `.git/config`. Once set, future executions of `git push` and `git pull` while on `feature-reports` work without specifying remote or branch names.",
        "why_other_options_are_wrong": {
            "A": "Correct: `-u origin <branch>` creates the remote branch and establishes upstream tracking.",
            "B": "`--all-branches` pushes all local branches, which is dangerous and unnecessary.",
            "C": "`--force` does not establish upstream tracking if tracking is not configured.",
            "D": "`--upstream-push` is not a valid branch command."
        },
        "placement_trap": "Pushing without `-u` and then wondering why `git pull` subsequently asks for branch tracking parameters.",
        "real_world_use": "Standard initial push command whenever a developer publishes a new local feature branch to GitHub."
    },
    {
        "id": "Q069",
        "question": "A developer attempts to push their local commits to `main` using `git push origin main`, but the push is rejected with: `[rejected - non-fast-forward] error: failed to push some refs... Updates were rejected because the remote contains work that you do not have locally.` What is the correct, professional resolution?",
        "type": "troubleshooting",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "Run `git push --force origin main` to overwrite the remote commits.",
            "B": "Pull or fetch the remote commits, integrate them locally (via merge or rebase), verify tests pass, and then push.",
            "C": "Delete the local repository and clone again.",
            "D": "Wait 24 hours for GitHub to synchronize automatically."
        },
        "correct_answer": "B",
        "explanation": "A non-fast-forward rejection happens when a teammate has pushed commits to the remote branch that you do not have in your local history. Overwriting them with `--force` destroys their work. The standard practice is to run `git pull` (or `git pull --rebase`), resolve any conflicts locally, verify the build, and then run `git push origin main`.",
        "why_other_options_are_wrong": {
            "A": "FORCE PUSHING DESTROYS TEAMWORK: Using `--force` overwrites teammates' commits on shared branches.",
            "B": "Correct: Fetch/pull incoming changes, integrate them locally, test, and push.",
            "C": "Deleting the local repo destroys your unpushed commits.",
            "D": "Git never synchronizes on a timer; it requires explicit commands."
        },
        "placement_trap": "Answering `git push --force` in an MNC interview when asked how to resolve a rejected non-fast-forward push.",
        "real_world_use": "Daily team collaboration scenario where multiple engineers contribute to the same sprint branch."
    },
    {
        "id": "Q070",
        "question": "A developer runs `git pull --rebase origin main`. How does this command integrate incoming remote changes compared to standard `git pull origin main`?",
        "type": "comparison",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "Standard `git pull` creates a merge commit joining the local and remote histories; `git pull --rebase` rewinds local unpushed commits, applies incoming remote commits, and replays local commits on top, creating a clean linear history.",
            "B": "`git pull --rebase` discards all local commits and replaces them with remote commits.",
            "C": "`git pull --rebase` skips downloading files and only pulls commit messages.",
            "D": "`git pull --rebase` only pulls changes if there are zero lines of code modified."
        },
        "correct_answer": "A",
        "explanation": "Standard `git pull` executes `git merge`, creating a 3-way merge commit ('Merge branch main of...') every time remote and local have diverged. `git pull --rebase` stashes unpushed local commits, fast-forwards the local branch to match `origin/main`, and then replays each local commit on top, maintaining a completely linear commit history without merge bubbles.",
        "why_other_options_are_wrong": {
            "A": "Correct: Rebase pull replays local commits on top of fresh remote commits, eliminating unnecessary merge commits.",
            "B": "Local commits are not discarded; they are replayed on top with new SHAs.",
            "C": "Files and blobs are fully downloaded.",
            "D": "Rebase pull works on all modifications."
        },
        "placement_trap": "Confusing `git pull --rebase` with resetting local work. Rebase preserves local commits by re-applying them.",
        "real_world_use": "Enforced by many tech companies to prevent commit graphs from becoming cluttered with 'Merge branch...' noise."
    },
    {
        "id": "Q071",
        "question": "A developer wants to delete a remote branch named `feature-obsolete` directly on GitHub from their local command line. Which command accomplishes this?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "`git push origin --delete feature-obsolete`",
            "B": "`git branch -d origin/feature-obsolete`",
            "C": "`git remote rm feature-obsolete`",
            "D": "`git delete-remote origin feature-obsolete`"
        },
        "correct_answer": "A",
        "explanation": "`git push origin --delete <branch-name>` (or the older syntax `git push origin :<branch-name>`) sends a refspec deletion request to the remote server, deleting the branch on GitHub.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git push origin --delete <branch>` instructs the remote server to delete the remote branch.",
            "B": "`git branch -d` operates on local branches, not remote server branches.",
            "C": "`git remote rm` deletes an entire remote alias configuration, not an individual branch.",
            "D": "`git delete-remote` is a nonexistent command."
        },
        "placement_trap": "Running `git branch -d feature-obsolete` and assuming it automatically deletes the branch on GitHub too.",
        "real_world_use": "Branch hygiene: deleting merged feature branches on the remote after a release."
    },
    {
        "id": "Q072",
        "question": "A teammate deleted three merged branches on GitHub. However, when you run `git branch -r` locally, those three branches still appear as `origin/feature-1`, `origin/feature-2`, and `origin/feature-3`. Which command cleans up these stale tracking references?",
        "type": "troubleshooting",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "`git fetch --prune` (or `git remote prune origin`)",
            "B": "`git clean -fd`",
            "C": "`git reset --remote`",
            "D": "`git branch --purge-all`"
        },
        "correct_answer": "A",
        "explanation": "`git fetch --prune` (or `git remote prune origin`) checks the remote repository and removes any local remote-tracking references (`refs/remotes/origin/*`) for branches that no longer exist on the remote server.",
        "why_other_options_are_wrong": {
            "A": "Correct: Pruning removes stale tracking references for branches deleted on the remote.",
            "B": "`git clean -fd` cleans untracked files in the working directory; it has no effect on branch references.",
            "C": "`git reset --remote` is an invalid command.",
            "D": "`--purge-all` is a fictional flag."
        },
        "placement_trap": "Confusing working directory cleanup (`git clean`) with remote-tracking reference cleanup (`git fetch --prune`).",
        "real_world_use": "Standard maintenance in enterprise repositories where hundreds of feature branches are created and deleted weekly."
    },
    {
        "id": "Q073",
        "question": "A developer runs `git fetch origin`. Which command can they execute next to safely inspect the commits that exist on the remote `main` branch before deciding to merge them into their local `main`?",
        "type": "command_based",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "`git log HEAD..origin/main`",
            "B": "`git status --remote`",
            "C": "`git diff --online-only`",
            "D": "`git inspect origin/main`"
        },
        "correct_answer": "A",
        "explanation": "`git log HEAD..origin/main` displays all commits that are reachable from the fetched remote tracking branch `origin/main` but NOT reachable from your current local `HEAD`. This lets you inspect incoming commits, authors, and messages before merging.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git log HEAD..origin/main` shows the exact commits waiting to be merged.",
            "B": "`--remote` is not a valid option for `git status`.",
            "C": "`--online-only` is an invalid flag.",
            "D": "`git inspect` is not a Git command."
        },
        "placement_trap": "Assuming you have to merge code blindly to see what was committed.",
        "real_world_use": "Code auditing and safety verification before integrating changes in critical production codebases."
    },
    {
        "id": "Q074",
        "question": "Under what specific condition should a developer use `git push --force-with-lease` instead of standard `git push --force`?",
        "type": "scenario_based",
        "difficulty": "Medium-Hard",
        "topic": "push_pull_fetch",
        "options": {
            "A": "When they want to push without generating git commit hashes.",
            "B": "When force-pushing a rebased local branch, ensuring the push fails if someone else has pushed new commits to that remote branch in the meantime.",
            "C": "When pushing to a public repository without needing an SSH key.",
            "D": "When pushing files larger than 100MB."
        },
        "correct_answer": "B",
        "explanation": "`--force-with-lease` is a safer version of `--force`. It only overwrites the remote branch if the remote branch reference still matches the local remote-tracking reference (i.e., nobody else has pushed commits since your last fetch). If a teammate pushed new work, the push aborts, preventing accidental deletion of their commits.",
        "why_other_options_are_wrong": {
            "A": "Commit hashes are mandatory and fundamental to Git.",
            "B": "Correct: `--force-with-lease` protects against accidentally overwriting teammate commits pushed in parallel.",
            "C": "SSH/HTTPS authentication is always required regardless of push flags.",
            "D": "Large files require Git LFS, not lease flags."
        },
        "placement_trap": "Using raw `git push --force` indiscriminately, which blindly clobbers teammate work.",
        "real_world_use": "Considered an industry best practice for updating personal PR branches after an interactive rebase."
    },

    # Topic 10: clone_fork_and_pull_request (Q075 in part 3, Q076-Q080 in part 4)
    {
        "id": "Q075",
        "question": "In an open-source collaboration model on GitHub, what is the fundamental difference between 'Forking' a repository and 'Cloning' a repository?",
        "type": "comparison",
        "difficulty": "Medium-Hard",
        "topic": "clone_fork_and_pull_request",
        "options": {
            "A": "Forking creates a server-side copy of the repository under your personal GitHub account on GitHub's servers; Cloning copies a repository to your local computer's filesystem.",
            "B": "Forking is a Git CLI command; Cloning is a GitHub web browser button.",
            "C": "Forking costs money; Cloning is always free.",
            "D": "Forking deletes the original repository; Cloning preserves it."
        },
        "correct_answer": "A",
        "explanation": "Forking is a GitHub platform feature that creates an independent server-side clone of another user's or organization's repository under your own GitHub account. Cloning is a core Git operation (`git clone`) that downloads a repository from any remote server to your local development machine.",
        "why_other_options_are_wrong": {
            "A": "Correct: Fork is a remote server-side copy under your account; Clone is downloading the repo locally to your machine.",
            "B": "Inversion: `git clone` is the CLI command, while Forking is initiated via GitHub's platform.",
            "C": "Forking public repositories is 100% free on GitHub.",
            "D": "Forking leaves the upstream repository completely untouched."
        },
        "placement_trap": "Thinking `git fork` is a standard Git command (core Git has no fork command).",
        "real_world_use": "Foundational workflow for open-source contributions: Fork on GitHub -> Clone fork locally -> Push to fork -> Open Pull Request to upstream."
    }
]

print(f"Part 3 initialized with {len(part3)} questions.")
