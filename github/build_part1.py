# build_part1.py - Questions Q001 to Q025
part1 = [
    # Topic 1: Git fundamentals (8 questions: Q001-Q008)
    {
        "id": "Q001",
        "question": "In a technical screening interview for an associate software engineer role, the interviewer asks: 'How does Git internally store file changes across consecutive commits compared to traditional version control systems like CVS or SVN?' What is the technically precise answer?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "Git stores full delta diffs (line-by-line differences) between consecutive versions to minimize disk usage.",
            "B": "Git stores a snapshot of what all files look like at that moment, linking unmodified files to their identical previous stored blob.",
            "C": "Git compresses all files into a single zip archive per branch and updates an index table of timestamps.",
            "D": "Git transmits changes to a central cloud server which generates a patch file stored in a relational database."
        },
        "correct_answer": "B",
        "explanation": "Git models data as a series of snapshots rather than file-based delta diffs. If a file has not changed in a commit, Git does not store the file again; it simply creates a reference link to the identical blob object already stored.",
        "why_other_options_are_wrong": {
            "A": "Delta-based difference storage is the mechanism used by older centralized systems like SVN and CVS, not Git's fundamental snapshot model.",
            "B": "Correct: Git stores snapshots of the project state and points to unchanged blobs to remain fast and efficient.",
            "C": "Git uses an object database (blobs, trees, commits, tags) compressed with zlib, not monolithic zip archives per branch.",
            "D": "Git is a distributed VCS that works entirely offline without requiring a central cloud server to generate patches."
        },
        "placement_trap": "Freshers frequently assume Git saves storage by saving line-by-line diffs like SVN, whereas Git's core architecture is based on cryptographic snapshots and object hashes.",
        "real_world_use": "Understanding Git's snapshot model helps developers reason about branch switching speed, disk consumption, and why commits are immutable snapshots."
    },
    {
        "id": "Q002",
        "question": "A candidate is asked why Git is categorized as a Distributed Version Control System (DVCS) while SVN is a Centralized Version Control System (CVCS). Which operational advantage best illustrates this architectural distinction?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "Git requires an active network connection to authenticate commit author signatures.",
            "B": "Every cloned local repository has a complete mirror of the project history, allowing offline branching, committing, and log inspection.",
            "C": "Git automatically synchronizes local branch states with peer developers on the local area network using multicast.",
            "D": "Git centralizes all repository history exclusively in the remote origin repository to prevent local tampering."
        },
        "correct_answer": "B",
        "explanation": "In a distributed VCS, every developer's local machine contains the full historical repository database. As a result, actions such as viewing logs, creating branches, making commits, and inspecting diffs execute instantaneously and offline without contacting any central server.",
        "why_other_options_are_wrong": {
            "A": "Git commits and author signatures are generated locally without contacting network authentication servers.",
            "B": "Correct: DVCS allows full autonomy on local machines because each clone holds the entire commit graph and object database.",
            "C": "Git never pushes or syncs changes automatically over LAN multicast; synchronization requires explicit remote commands like fetch or push.",
            "D": "Centralizing history on a single remote server is the definition of CVCS (such as Subversion), which is the exact opposite of Git."
        },
        "placement_trap": "Assuming DVCS implies peer-to-peer automatic file synchronization rather than local independence with complete local commit history.",
        "real_world_use": "Enables distributed enterprise teams to work uninterrupted during network outages or flights and commit atomic changes locally before pushing."
    },
    {
        "id": "Q003",
        "question": "What is the primary technical role of the hidden `.git` folder located in the root directory of a project?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "It acts as a temporary cache directory that is deleted when the terminal session ends.",
            "B": "It contains the entire Git database including object store, commit history, refs, HEAD pointer, index staging file, and configuration.",
            "C": "It stores credentials and API tokens required to connect to the GitHub remote repository.",
            "D": "It contains the build artifacts and compiled binaries produced by GitHub Actions runners."
        },
        "correct_answer": "B",
        "explanation": "The `.git` directory contains all metadata, commit history, object database (blobs, trees, commits), ref pointers (branches, tags), the staging index file, and local repository configurations. Deleting `.git` converts the project back into an untracked regular folder.",
        "why_other_options_are_wrong": {
            "A": "The `.git` directory is persistent; it is never deleted automatically when terminal sessions close.",
            "B": "Correct: The `.git` folder is the repository itself; the files outside it constitute the working tree.",
            "C": "GitHub credentials are stored in secure credential helpers (e.g. Git Credential Manager or SSH keys), not plain inside `.git`.",
            "D": "Compiled artifacts belong to build directories (such as `target/` or `dist/`) and should be added to `.gitignore`, not stored in `.git`."
        },
        "placement_trap": "Many candidates think project files in the folder are the repository, whereas the project files are just the working tree; `.git` is the actual Git repository.",
        "real_world_use": "Backing up or transferring the `.git` folder preserves 100% of the project's commit history, branch structure, and tags."
    },
    {
        "id": "Q004",
        "question": "Which cryptographic hash algorithm was historically used as the default in Git to identify commits and tree objects, and what does a 40-character commit identifier represent?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "MD5 checksum representing the chronological timestamp when the commit was created.",
            "B": "SHA-1 hash computed from the commit content, author, committer, commit message, and parent commit hashes.",
            "C": "AES-256 encryption key used to protect the privacy of the source code files.",
            "D": "Base64 encoded string representing the file path of the repository on the developer's computer."
        },
        "correct_answer": "B",
        "explanation": "Git historically uses SHA-1 (producing a 40-character hexadecimal string) to uniquely address objects in its content-addressable storage. The commit hash is determined by hashing its snapshot tree, parent hashes, author info, committer info, and message, making history tamper-evident.",
        "why_other_options_are_wrong": {
            "A": "MD5 is not used by Git, and commit IDs represent content and ancestry, not merely a timestamp.",
            "B": "Correct: Git computes a SHA-1 (and in newer versions SHA-256) checksum across commit metadata, parent links, and content.",
            "C": "SHA-1 is a one-way hashing function for integrity and content addressing, not a symmetric encryption key.",
            "D": "Commit hashes are independent of local file paths, enabling different machines to agree on identical commit hashes."
        },
        "placement_trap": "Believing commit IDs are random serial numbers or timestamps rather than deterministic content hashes.",
        "real_world_use": "Enables cryptographic integrity checks where any tampering with past commit messages or code alters every downstream SHA."
    },
    {
        "id": "Q005",
        "question": "What is the technical definition and purpose of the `HEAD` pointer in Git?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "It is an alias for the latest commit on the remote `origin/main` branch.",
            "B": "It is a symbolic reference that points to the currently checked-out branch or commit in your working directory.",
            "C": "It is a permanent pointer to the initial root commit of the repository.",
            "D": "It is a background daemon process that monitors files for unsaved changes."
        },
        "correct_answer": "B",
        "explanation": "`HEAD` is a reference file inside `.git/HEAD` that indicates what you currently have checked out. Typically it points symbolically to a branch ref (e.g. `ref: refs/heads/main`), which in turn points to the latest commit on that branch.",
        "why_other_options_are_wrong": {
            "A": "The latest commit on remote main is tracked by `refs/remotes/origin/main`, not local `HEAD`.",
            "B": "Correct: `HEAD` tracks where the developer is currently located in the commit graph.",
            "C": "The root commit has no parent; `HEAD` moves with every checkout, commit, or reset.",
            "D": "`HEAD` is a static or symbolic text reference file, not an active background daemon process."
        },
        "placement_trap": "Confusing `HEAD` with the `main` branch or assuming `HEAD` always represents the remote repository's tip.",
        "real_world_use": "Understanding `HEAD` is crucial when navigating branches, examining detached HEAD states, or executing resets."
    },
    {
        "id": "Q006",
        "question": "Which statement accurately describes what occurs when a repository enters a 'Detached HEAD' state?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "The `.git` folder has suffered file corruption and local commits cannot be read.",
            "B": "The `HEAD` pointer is pointing directly to a specific commit SHA or tag rather than to a named local branch reference.",
            "C": "The local repository has been disconnected from its GitHub remote repository due to network failure.",
            "D": "The current branch was deleted by another developer on the remote server."
        },
        "correct_answer": "B",
        "explanation": "A 'Detached HEAD' state occurs when you checkout a specific commit SHA, a remote branch, or a tag (e.g., `git checkout <commit-hash>`). `HEAD` points directly to the commit object rather than through a named branch reference. New commits made in this state won't update any branch.",
        "why_other_options_are_wrong": {
            "A": "Detached HEAD is a completely normal, valid Git state and does not indicate database corruption.",
            "B": "Correct: In detached HEAD, `HEAD` points directly to a commit hash instead of a branch pointer.",
            "C": "Detached HEAD is entirely a local pointer state and has nothing to do with internet or remote connectivity.",
            "D": "Remote branch deletions do not cause your current local checked-out branch to enter detached HEAD."
        },
        "placement_trap": "Freshers panic thinking 'Detached HEAD' is a fatal error or repository crash, when it simply means you checked out a commit directly.",
        "real_world_use": "Common during release tag verification, bisecting bugs, or inspecting historical application states."
    },
    {
        "id": "Q007",
        "question": "What is the difference between a Git 'blob' and a Git 'tree' object in Git's internal object store?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "A blob stores file contents, whereas a tree stores directory structures, file names, and permissions pointing to blobs or subtrees.",
            "B": "A blob stores commit metadata, while a tree stores binary images.",
            "C": "A blob is a branch pointer, while a tree is a merge conflict marker.",
            "D": "A blob contains delta differences, while a tree stores full files."
        },
        "correct_answer": "A",
        "explanation": "In Git's object model, a 'blob' (binary large object) stores pure file content stripped of its filename and permissions. A 'tree' object represents a directory, mapping filenames, modes, and permissions to their corresponding blob SHAs or sub-tree SHAs.",
        "why_other_options_are_wrong": {
            "A": "Correct: Blobs hold pure file data; trees hold directory hierarchy, filenames, and file modes.",
            "B": "Commit objects hold commit metadata (author, committer, message, parents), not blobs.",
            "C": "Branch pointers are references in `.git/refs/heads/`, not blob objects.",
            "D": "Blobs store full file contents compressed with zlib, not deltas."
        },
        "placement_trap": "Assuming blobs store filenames; two identical files with different names in different folders share the exact same blob SHA!",
        "real_world_use": "Explains why renaming a file without changing content does not create a new blob, making renames lightweight."
    },
    {
        "id": "Q008",
        "question": "A developer runs `git config --global user.name 'DevUser'` and `git config --global user.email 'dev@company.com'`. Where are these configuration settings physically stored on a Windows machine?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "Git fundamentals",
        "options": {
            "A": "Inside the project's `.git/config` file.",
            "B": "Inside the user's home directory in a file named `.gitconfig` (e.g. `C:\\Users\\<Username>\\.gitconfig`).",
            "C": "Inside the Windows Registry under `HKEY_LOCAL_MACHINE\\Software\\Git`.",
            "D": "Inside the cloud profile on GitHub servers."
        },
        "correct_answer": "B",
        "explanation": "The `--global` flag writes settings to the current operating system user's home directory file (`~/.gitconfig`). The `--local` flag writes to the repository's `.git/config`, and `--system` writes to Git's system-wide installation config.",
        "why_other_options_are_wrong": {
            "A": "`.git/config` stores `--local` configuration specific to that single repository.",
            "B": "Correct: `--global` settings reside in `~/.gitconfig` in the active user's home folder.",
            "C": "Git uses plain text configuration files across all platforms, not the Windows Registry.",
            "D": "`git config` is a local Git utility and does not update GitHub account profile settings."
        },
        "placement_trap": "Thinking `--global` applies to every machine on the company network or updates GitHub profile data online.",
        "real_world_use": "Essential when setting up corporate laptops with work email addresses across all repositories."
    },

    # Topic 2: Git vs GitHub (5 questions: Q009-Q013)
    {
        "id": "Q009",
        "question": "During a technical interview, the candidate is asked: 'Can a developer use Git to create branches, make commits, and resolve merge conflicts without having an account on GitHub or any internet connection?' What is the correct response?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git vs GitHub",
        "options": {
            "A": "No, because Git depends on GitHub APIs to validate branch permissions and commit hashes.",
            "B": "Yes, because Git is a standalone local command-line tool that performs all version control operations locally.",
            "C": "No, because commits can only be recorded when validated by remote GitHub Actions.",
            "D": "Yes, but only if an SVN server is acting as an active local proxy."
        },
        "correct_answer": "B",
        "explanation": "Git is an open-source version control system installed locally. It requires neither GitHub nor an active network connection to initialize repositories, stage changes, commit, branch, merge, or inspect history. GitHub is merely a cloud hosting platform for Git repositories.",
        "why_other_options_are_wrong": {
            "A": "Git does not communicate with GitHub APIs for local branch creation or commit hashing.",
            "B": "Correct: Git functions 100% offline on any local filesystem without external services.",
            "C": "GitHub Actions is an optional cloud CI/CD tool; local commits do not require it.",
            "D": "Git has no dependency on SVN or proxy servers."
        },
        "placement_trap": "Confusing Git the tool with GitHub the web service—one of the most common fresher interview mistakes.",
        "real_world_use": "Allows secure development in air-gapped defense or banking environments without public internet access."
    },
    {
        "id": "Q010",
        "question": "Which of the following capabilities is a native feature of Git itself, rather than an exclusive service provided by GitHub or similar cloud forge platforms?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git vs GitHub",
        "options": {
            "A": "Pull Requests for peer code review and branch protection policies.",
            "B": "Three-way file merging and conflict marker generation.",
            "C": "Issue tracking boards, project roadmaps, and bug assignments.",
            "D": "Repository web UI with team member access role management."
        },
        "correct_answer": "B",
        "explanation": "Three-way merging, conflict detection, and generating conflict markers are native core functions of the Git command-line engine (`git merge`). Pull Requests, Issue trackers, and Web RBAC permissions are platform features provided by GitHub, GitLab, and Bitbucket.",
        "why_other_options_are_wrong": {
            "A": "Pull Requests do not exist in core Git; Git uses email patches (`git format-patch` / `git am`) for remote reviews.",
            "B": "Correct: 3-way merge is built directly into Git's C source code and operates locally.",
            "C": "Issue tracking is a web hosting platform feature, not a Git CLI feature.",
            "D": "Web role-based access control is implemented by the hosting platform, not Git itself."
        },
        "placement_trap": "Assuming 'Pull Request' is a Git command because developers use it every day on GitHub.",
        "real_world_use": "Interviewers frequently test whether candidates know where Git ends and GitHub begins."
    },
    {
        "id": "Q011",
        "question": "A team lead says: 'We need to host our company's proprietary repositories on our own private intranet servers rather than GitHub.' Which statement is true regarding Git's capability in this scenario?",
        "type": "scenario_based",
        "difficulty": "Medium",
        "topic": "Git vs GitHub",
        "options": {
            "A": "Git cannot function without GitHub's proprietary cloud backend infrastructure.",
            "B": "Git repositories can be hosted on any private Linux/Windows server via SSH, bare Git repositories, or self-hosted platforms like GitLab or GitHub Enterprise.",
            "C": "Git requires a paid commercial license to run on non-GitHub servers.",
            "D": "Git only supports peer-to-peer USB transfers if not connected to GitHub."
        },
        "correct_answer": "B",
        "explanation": "Git is free, open source (GPL-2.0), and protocol-agnostic. A remote Git repository can simply be a 'bare' repository hosted on any server reachable via SSH, HTTPS, or a shared network drive.",
        "why_other_options_are_wrong": {
            "A": "Git was created in 2005 for the Linux kernel years before GitHub was founded in 2008.",
            "B": "Correct: Git supports any SSH server, local network share, or private enterprise forge.",
            "C": "Git is open-source software and completely free for personal and enterprise use.",
            "D": "Git supports standard networking protocols including HTTPS, SSH, and `git://`."
        },
        "placement_trap": "Believing enterprise companies are locked into GitHub to use Git.",
        "real_world_use": "Many banking and defense clients mandate self-hosted GitLab, Bitbucket Server, or internal bare Git servers."
    },
    {
        "id": "Q012",
        "question": "When a developer commits changes using `git commit -m 'Implement authentication'`, where are the committed changes saved immediately after command execution?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "Git vs GitHub",
        "options": {
            "A": "Directly into the remote GitHub repository under the active branch.",
            "B": "Only in the local repository database inside the `.git` folder on their computer.",
            "C": "In both the local repository and the remote GitHub repository simultaneously.",
            "D": "In a temporary staging server hosted on the cloud."
        },
        "correct_answer": "B",
        "explanation": "`git commit` is strictly a local operation. It creates a commit object in the local `.git/objects` directory and advances the local branch reference. The changes never leave the developer's computer until an explicit `git push` command is executed.",
        "why_other_options_are_wrong": {
            "A": "Committing never transfers data to the remote; `git push` is required to upload commits to GitHub.",
            "B": "Correct: `git commit` writes only to the local repository database.",
            "C": "Git does not perform implicit remote synchronization upon committing.",
            "D": "No cloud staging server is involved during a local commit."
        },
        "placement_trap": "Freshers often tell interviewers that `git commit` pushes changes directly to GitHub.",
        "real_world_use": "Allows developers to create clean, granular, atomic commits locally without spamming team remote branches."
    },
    {
        "id": "Q013",
        "question": "A developer loses internet connection while working on a feature. Which of the following operations will FAIL until the internet connection is restored?",
        "type": "scenario_based",
        "difficulty": "Medium",
        "topic": "Git vs GitHub",
        "options": {
            "A": "`git commit -m 'Fix login validation'`",
            "B": "`git diff HEAD~1`",
            "C": "`git push origin feature-login`",
            "D": "`git switch -c feature-oauth`"
        },
        "correct_answer": "C",
        "explanation": "`git push` requires communicating over the network with the remote server hosting the repository. In contrast, `git commit`, `git diff`, and `git switch` read and write exclusively to the local `.git` repository and succeed with no internet.",
        "why_other_options_are_wrong": {
            "A": "`git commit` writes objects locally and requires zero network connectivity.",
            "B": "`git diff` compares local snapshots stored in the local object database.",
            "C": "Correct: `git push` must transmit packfiles over HTTPS or SSH to the remote server, which fails without internet.",
            "D": "`git switch -c` creates a local branch reference file locally without network access."
        },
        "placement_trap": "Thinking all Git commands fail if offline. Only `push`, `pull`, `fetch`, and `clone` require network access.",
        "real_world_use": "Critical for developers working in transit or during network outages."
    },

    # Topic 3: repository_initialization_and_cloning (6 questions: Q014-Q019)
    {
        "id": "Q014",
        "question": "A developer runs `git init` in a new folder called `project`. What does this command actually do?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "repository_initialization_and_cloning",
        "options": {
            "A": "It creates a new repository on GitHub and prompts for user credentials.",
            "B": "It initializes an empty local Git repository by creating the hidden `.git` directory with default subdirectories and template files.",
            "C": "It stages and commits all existing files in the folder automatically.",
            "D": "It links the local folder to a pre-existing remote server specified by the OS."
        },
        "correct_answer": "B",
        "explanation": "`git init` creates an empty local Git repository. Specifically, it builds the `.git` directory containing `objects/`, `refs/`, `HEAD`, and a skeleton `config` file. It does not touch GitHub or stage any files.",
        "why_other_options_are_wrong": {
            "A": "`git init` is purely local and has no knowledge of GitHub or remote hosting.",
            "B": "Correct: `git init` sets up the internal `.git` structure in the directory.",
            "C": "Files in the directory remain untracked; `git add` must be run explicitly to stage them.",
            "D": "No remote link is established; a remote must be added manually with `git remote add`."
        },
        "placement_trap": "Thinking `git init` creates a repository on GitHub or automatically commits existing files.",
        "real_world_use": "The starting point when converting an existing code directory into a version-controlled project."
    },
    {
        "id": "Q015",
        "question": "What is the primary difference between running `git init` versus `git clone <url>` when starting work on a project?",
        "type": "comparison",
        "difficulty": "Medium",
        "topic": "repository_initialization_and_cloning",
        "options": {
            "A": "`git init` creates a brand-new local repository with no history, while `git clone` copies an existing remote repository, its entire commit history, and sets up remote tracking.",
            "B": "`git init` connects to GitHub, whereas `git clone` only works locally.",
            "C": "`git clone` requires root administrator privileges on the client machine.",
            "D": "`git init` can only be executed once per computer."
        },
        "correct_answer": "A",
        "explanation": "`git init` is used to create a new, empty repository from scratch locally. `git clone` downloads an existing repository from a remote location, checks out the default branch into a working tree, downloads all historical commits, and configures `origin` as the default remote.",
        "why_other_options_are_wrong": {
            "A": "Correct: `git init` is for blank local projects; `git clone` copies a complete remote repository with history and remote tracking.",
            "B": "`git init` is strictly local, while `git clone` connects to a remote server.",
            "C": "Neither command requires administrative/root privileges; they operate in user space.",
            "D": "`git init` can be run in as many distinct folders as desired."
        },
        "placement_trap": "Running `git init` inside a folder after already running `git clone` in it—an unnecessary rookie error.",
        "real_world_use": "Onboarding freshers onto an ongoing enterprise project always starts with `git clone`."
    },
    {
        "id": "Q016",
        "question": "A developer wants to clone only the latest commit of a massive 15GB repository to save time and bandwidth during a CI/CD build. Which command accomplishes this?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "repository_initialization_and_cloning",
        "options": {
            "A": "`git clone --depth 1 <repository-url>`",
            "B": "`git clone --single-commit <repository-url>`",
            "C": "`git clone --fast <repository-url>`",
            "D": "`git clone --no-history <repository-url>`"
        },
        "correct_answer": "A",
        "explanation": "A shallow clone is created using `git clone --depth <n>`, which truncates the history to the specified number of revisions. `--depth 1` downloads only the most recent commit of the default branch, significantly reducing clone duration and storage.",
        "why_other_options_are_wrong": {
            "A": "Correct: `--depth 1` creates a shallow clone with a history truncated to 1 commit.",
            "B": "`--single-commit` is not a valid Git clone flag.",
            "C": "`--fast` is a nonexistent flag in Git.",
            "D": "`--no-history` is not a valid Git option."
        },
        "placement_trap": "Inventing fictional flags like `--fast` or `--latest` instead of standard `--depth 1`.",
        "real_world_use": "Widely used in automated Jenkins and GitHub Actions pipelines to deploy code quickly without downloading years of historical blobs."
    },
    {
        "id": "Q017",
        "question": "When a repository is cloned via `git clone https://github.com/org/repo.git custom_folder`, what is the name of the default remote automatically configured by Git?",
        "type": "command_based",
        "difficulty": "Medium",
        "topic": "repository_initialization_and_cloning",
        "options": {
            "A": "`master`",
            "B": "`upstream`",
            "C": "`origin`",
            "D": "`github`"
        },
        "correct_answer": "C",
        "explanation": "By Git standard convention, when you clone a repository, Git automatically names the remote repository pointer `origin`. It points to the URL from which the repository was cloned.",
        "why_other_options_are_wrong": {
            "A": "`master` (or `main`) is the default branch name, not the remote name.",
            "B": "`upstream` is the conventional name given manually to the original source repo when working with forks.",
            "C": "Correct: Git by default assigns the alias `origin` to the cloned remote.",
            "D": "`github` is not the default remote name; it is always `origin` regardless of whether hosted on GitHub, GitLab, or Bitbucket."
        },
        "placement_trap": "Confusing the branch name `main`/`master` with the remote name `origin`.",
        "real_world_use": "Standard in all scripts: `git push origin <branch>` refers to the repository you cloned from."
    },
    {
        "id": "Q018",
        "question": "A developer runs `git clone` inside an existing local Git repository directory that already contains a `.git` folder. What problematic situation occurs?",
        "type": "troubleshooting",
        "difficulty": "Medium",
        "topic": "repository_initialization_and_cloning",
        "options": {
            "A": "Git merges the two repositories automatically and pushes the combination to GitHub.",
            "B": "A nested Git repository is created, causing Git to treat the inner folder as a submodule or untracked directory unless properly managed.",
            "C": "The operating system automatically deletes the outer repository's commit history.",
            "D": "The clone operation overwrites the outer `.git` directory without warning."
        },
        "correct_answer": "B",
        "explanation": "Cloning one repository inside an existing working tree creates a nested Git repository. The parent repository will see the inner repository folder as an untracked directory or gitlink and will not track the files inside it unless configured as a submodule.",
        "why_other_options_are_wrong": {
            "A": "Git never merges separate repository histories automatically.",
            "B": "Correct: Nested repositories cause tracking confusion and require submodules or moving the folder outside.",
            "C": "The OS does not touch or delete parent `.git` folders during cloning.",
            "D": "The clone creates its own `.git` inside the inner subfolder; it does not overwrite the parent `.git`."
        },
        "placement_trap": "Accidentally cloning projects inside existing workspaces, wondering why parent `git add .` ignores the inner files.",
        "real_world_use": "Common fresher mistake when setting up multiple microservices in one workspace."
    },
    {
        "id": "Q019",
        "question": "What is the difference between a standard Git repository and a 'bare' Git repository initialized with `git init --bare`?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "repository_initialization_and_cloning",
        "options": {
            "A": "A bare repository has no working directory; it contains only the versioning database files normally found inside `.git`.",
            "B": "A bare repository only stores text files and rejects binary files like images.",
            "C": "A bare repository cannot receive pushes from remote clients.",
            "D": "A bare repository is stored in memory and vanishes when the server reboots."
        },
        "correct_answer": "A",
        "explanation": "A bare repository (`git init --bare`) contains strictly the version control data (the contents of a `.git` folder) without a checked-out working tree. It is intended purely as a central sharing hub on servers where developers push and fetch, preventing conflicts from direct file editing on the server.",
        "why_other_options_are_wrong": {
            "A": "Correct: Bare repositories have no working tree files and are used strictly as central remote endpoints.",
            "B": "Bare repositories store all types of files (binary and text) identical to regular repositories.",
            "C": "Bare repositories are specifically designed to receive pushes; pushing to a checked-out non-bare repo is restricted by default.",
            "D": "Bare repositories are fully persisted on disk like any other repository."
        },
        "placement_trap": "Trying to edit source code directly inside a bare repository where no working tree files exist.",
        "real_world_use": "Every remote repository on GitHub, GitLab, or corporate Git servers is stored as a bare repository."
    },

    # Topic 4: working_directory_staging_area_repository (10 questions: Q020-Q029)
    # Q020 is Medium; Q021-Q029 will progress from Medium to Medium-Hard.
    {
        "id": "Q020",
        "question": "Git organizes files across 'Three Trees' or areas on your local machine. What is the correct logical flow that changes follow from editing to permanent history?",
        "type": "conceptual",
        "difficulty": "Medium",
        "topic": "working_directory_staging_area_repository",
        "options": {
            "A": "Remote Repository -> Staging Area -> Working Directory",
            "B": "Working Directory -> Staging Area (Index) -> Local Repository (HEAD)",
            "C": "Staging Area -> Working Directory -> Commit Graph",
            "D": "Working Directory -> Local Repository -> Staging Area"
        },
        "correct_answer": "B",
        "explanation": "The three areas in Git are: 1. Working Directory (sandbox where files are edited), 2. Staging Area/Index (pre-commit snapshot drafter), and 3. Local Repository (committed snapshots recorded permanently in the `.git` database).",
        "why_other_options_are_wrong": {
            "A": "Remote to Staging to Working is an inverted flow.",
            "B": "Correct: Edits begin in the Working Directory, move to Staging via `git add`, and are committed to Local Repository via `git commit`.",
            "C": "Staging cannot precede the Working Directory where files are physically typed and edited.",
            "D": "Commits come after staging, not before."
        },
        "placement_trap": "Skipping the staging area in mental models and assuming files go directly from the editor to the repository.",
        "real_world_use": "Allows crafting clean, cohesive commits by staging only relevant files or lines rather than dumping all working edits."
    }
]

print(f"Part 1 initialized with {len(part1)} questions.")
