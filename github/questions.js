/**
 * PlacementPrep - Git & GitHub Module Question Bank
 * 100 Comprehensive MNC Placement Questions (Q001 - Q100)
 */

const GITHUB_QUESTIONS = [
    {
        "id": "Q001",
        "question": "In a technical screening interview for an associate software engineer role, the interviewer asks: 'How does Git internally store file changes across consecutive commits compared to traditional version control systems like CVS or SVN?' What is the technically precise answer?",
        "codeSnippet": "",
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
        "real_world_use": "Understanding Git's snapshot model helps developers reason about branch switching speed, disk consumption, and why commits are immutable snapshots.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q002",
        "question": "A candidate is asked why Git is categorized as a Distributed Version Control System (DVCS) while SVN is a Centralized Version Control System (CVCS). Which operational advantage best illustrates this architectural distinction?",
        "codeSnippet": "",
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
        "real_world_use": "Enables distributed enterprise teams to work uninterrupted during network outages or flights and commit atomic changes locally before pushing.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q003",
        "question": "What is the primary technical role of the hidden `.git` folder located in the root directory of a project?",
        "codeSnippet": "",
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
        "real_world_use": "Backing up or transferring the `.git` folder preserves 100% of the project's commit history, branch structure, and tags.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q004",
        "question": "Which cryptographic hash algorithm was historically used as the default in Git to identify commits and tree objects, and what does a 40-character commit identifier represent?",
        "codeSnippet": "",
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
        "real_world_use": "Enables cryptographic integrity checks where any tampering with past commit messages or code alters every downstream SHA.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q005",
        "question": "What is the technical definition and purpose of the `HEAD` pointer in Git?",
        "codeSnippet": "",
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
        "real_world_use": "Understanding `HEAD` is crucial when navigating branches, examining detached HEAD states, or executing resets.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q006",
        "question": "Which statement accurately describes what occurs when a repository enters a 'Detached HEAD' state?",
        "codeSnippet": "",
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
        "real_world_use": "Common during release tag verification, bisecting bugs, or inspecting historical application states.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q007",
        "question": "What is the difference between a Git 'blob' and a Git 'tree' object in Git's internal object store?",
        "codeSnippet": "",
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
        "real_world_use": "Explains why renaming a file without changing content does not create a new blob, making renames lightweight.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q008",
        "question": "A developer runs `git config --global user.name 'DevUser'` and `git config --global user.email 'dev@company.com'`. Where are these configuration settings physically stored on a Windows machine?",
        "codeSnippet": "",
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
        "real_world_use": "Essential when setting up corporate laptops with work email addresses across all repositories.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q009",
        "question": "During a technical interview, the candidate is asked: 'Can a developer use Git to create branches, make commits, and resolve merge conflicts without having an account on GitHub or any internet connection?' What is the correct response?",
        "codeSnippet": "",
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
        "real_world_use": "Allows secure development in air-gapped defense or banking environments without public internet access.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q010",
        "question": "Which of the following capabilities is a native feature of Git itself, rather than an exclusive service provided by GitHub or similar cloud forge platforms?",
        "codeSnippet": "",
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
        "real_world_use": "Interviewers frequently test whether candidates know where Git ends and GitHub begins.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q011",
        "question": "A team lead says: 'We need to host our company's proprietary repositories on our own private intranet servers rather than GitHub.' Which statement is true regarding Git's capability in this scenario?",
        "codeSnippet": "",
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
        "real_world_use": "Many banking and defense clients mandate self-hosted GitLab, Bitbucket Server, or internal bare Git servers.",
        "isScenario": true,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q012",
        "question": "When a developer commits changes using `git commit -m 'Implement authentication'`, where are the committed changes saved immediately after command execution?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Allows developers to create clean, granular, atomic commits locally without spamming team remote branches.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q013",
        "question": "A developer loses internet connection while working on a feature. Which of the following operations will FAIL until the internet connection is restored?",
        "codeSnippet": "",
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
        "real_world_use": "Critical for developers working in transit or during network outages.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q014",
        "question": "A developer runs `git init` in a new folder called `project`. What does this command actually do?",
        "codeSnippet": "",
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
        "real_world_use": "The starting point when converting an existing code directory into a version-controlled project.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q015",
        "question": "What is the primary difference between running `git init` versus `git clone <url>` when starting work on a project?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Onboarding freshers onto an ongoing enterprise project always starts with `git clone`.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q016",
        "question": "A developer wants to clone only the latest commit of a massive 15GB repository to save time and bandwidth during a CI/CD build. Which command accomplishes this?",
        "codeSnippet": "",
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
        "real_world_use": "Widely used in automated Jenkins and GitHub Actions pipelines to deploy code quickly without downloading years of historical blobs.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q017",
        "question": "When a repository is cloned via `git clone https://github.com/org/repo.git custom_folder`, what is the name of the default remote automatically configured by Git?",
        "codeSnippet": "",
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
        "real_world_use": "Standard in all scripts: `git push origin <branch>` refers to the repository you cloned from.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q018",
        "question": "A developer runs `git clone` inside an existing local Git repository directory that already contains a `.git` folder. What problematic situation occurs?",
        "codeSnippet": "",
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
        "real_world_use": "Common fresher mistake when setting up multiple microservices in one workspace.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q019",
        "question": "What is the difference between a standard Git repository and a 'bare' Git repository initialized with `git init --bare`?",
        "codeSnippet": "",
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
        "real_world_use": "Every remote repository on GitHub, GitLab, or corporate Git servers is stored as a bare repository.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q020",
        "question": "Git organizes files across 'Three Trees' or areas on your local machine. What is the correct logical flow that changes follow from editing to permanent history?",
        "codeSnippet": "",
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
        "real_world_use": "Allows crafting clean, cohesive commits by staging only relevant files or lines rather than dumping all working edits.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q021",
        "question": "A developer modifies `index.js`, runs `git add index.js`, and then immediately makes an additional modification to `index.js` in their code editor without running `git add` again. When they execute `git status`, how will `index.js` be reported?",
        "codeSnippet": "",
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
        "real_world_use": "Happens constantly in day-to-day coding when you stage a working state, discover a quick tweak, and need to re-add before committing.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q022",
        "question": "A developer has modified three files: `auth.js`, `database.js`, and `README.md`. They want to commit ONLY the changes in `auth.js` to ensure the commit is atomic. Which sequence of commands correctly achieves this?",
        "codeSnippet": "",
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
        "real_world_use": "Standard professional practice: splitting logical changes into independent, focused commits for cleaner peer review.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q023",
        "question": "A developer modifies `config.json` in their working directory. They realize their edits broke the application and want to discard all local uncommitted modifications in `config.json`, reverting it back to the last committed state. In modern Git (version 2.23+), which command is recommended?",
        "codeSnippet": "",
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
        "real_world_use": "Quickly abandoning experimental code edits in a file without having to manually undo lines in an editor.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q024",
        "question": "A developer accidentally executed `git add secret_tokens.env`, staging the sensitive file. The commit has NOT been made yet. Which command safely un-stages the file from the index WITHOUT modifying or deleting the file in the working directory?",
        "codeSnippet": "",
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
        "real_world_use": "Critical security step when accidentally staging credentials before committing, allowing you to add them to `.gitignore` first.",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q025",
        "question": "What is the physical storage representation of the Git staging area (index) inside the `.git` folder?",
        "codeSnippet": "",
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
        "real_world_use": "Explains why `git add` creates blob objects in `.git/objects` immediately before `git commit` is even invoked.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q026",
        "question": "Consider the following terminal sequence executed in an existing Git repository:\nWhat will `cat app.txt` and `git show :app.txt` display respectively?",
        "codeSnippet": "echo 'v1' > app.txt\ngit add app.txt\ngit commit -m 'Commit 1'\necho 'v2' >> app.txt\ngit add app.txt\necho 'v3' >> app.txt",
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
        "real_world_use": "Tracing index vs working tree states is crucial when debugging partial staging with `git add -p`.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q027",
        "question": "A developer runs `git diff` and sees no output at all. However, `git status` shows `Changes to be committed: modified: server.py`. Why did `git diff` produce no output?",
        "codeSnippet": "",
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
        "real_world_use": "Reviewing exact staged changes with `git diff --staged` before executing `git commit` to verify code quality.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q028",
        "question": "Which command removes a file from tracking in the Git repository and staging area, but preserves the physical file on disk in the developer's working directory?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Used when a file like `.env` or IDE configuration was mistakenly committed in the past and needs to be untracked without deleting the local file.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q029",
        "question": "A developer wants to stage only specific hunks (lines) of code from a file rather than staging the entire modified file. Which interactive command enables this?",
        "codeSnippet": "",
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
        "real_world_use": "Enables splitting debugging print statements or accidental edits from genuine feature code before committing.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q030",
        "question": "A developer modifies an existing tracked file `service.py` and creates a brand-new file `helper.py`. They then run `git commit -a -m 'Quick update'`. What happens?",
        "codeSnippet": "",
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
        "real_world_use": "Common bug source where freshers commit code thinking new files were included, only for the CI pipeline to fail with missing module imports.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q031",
        "question": "A developer creates a commit with the message 'Fix user logn'. Immediately after, they notice the spelling typo in 'logn'. The commit has NOT been pushed to any remote. Which command safely fixes the commit message without creating a redundant second commit?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Maintaining clean, professional Git history before submitting pull requests for code review.",
        "isScenario": true,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q032",
        "question": "In the short output format of `git status` (`git status -s`), what do the symbols in the two status columns represent (e.g. `XY PATH`)?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Heavily utilized in CLI prompt integrations (like Starship or Oh-My-Zsh) and custom build verification scripts.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q033",
        "question": "What is the key functional difference between `git diff HEAD` and `git diff`?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Checking the complete delta of everything modified since the last commit before executing test suites.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q034",
        "question": "A developer runs the command `git commit --amend --no-edit`. What does this specific command achieve?",
        "codeSnippet": "",
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
        "real_world_use": "Standard developer workflow when you committed code, realized you forgot to save one file or format one line, stage it, and amend silently.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q035",
        "question": "Consider the following command sequence executed in a clean Git repository:\nWhat will be committed to the repository in commit 'Initial script'?",
        "codeSnippet": "git status\necho 'console.log(1);' > script.js\ngit add script.js\necho 'console.log(2);' >> script.js\ngit commit -m 'Initial script'",
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
        "real_world_use": "Frequently tested in MNC written tests to evaluate whether candidates truly understand the index.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q036",
        "question": "A developer renamed `old_service.py` to `new_service.py` using their operating system file explorer (e.g. Windows Explorer). When they run `git status`, Git shows `deleted: old_service.py` and `Untracked: new_service.py`. How can they stage this rename cleanly using Git CLI so that Git registers it as a rename?",
        "codeSnippet": "",
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
        "real_world_use": "Refactoring large codebases in IDEs where files are moved across directories without using the CLI.",
        "isScenario": true,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q037",
        "question": "What is the effect of running `git commit -m ''` (an empty commit message) without any configuration overrides?",
        "codeSnippet": "",
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
        "real_world_use": "Enforces meaningful documentation in version history across enterprise projects.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q038",
        "question": "A developer runs `git diff branchA..branchB` versus `git diff branchA...branchB` (two dots vs three dots). What is the critical distinction between these two commands?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "GitHub Pull Request diffs use the three-dot diff (`base...feature`) to show only the modifications made on the feature branch.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q039",
        "question": "A developer has executed the following commands:\nWhat is the state of the repository and the files after executing `git reset`?",
        "codeSnippet": "git add styles.css\ngit diff --staged > changes.patch\ngit reset",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Safely clearing the staging area when you change your mind about what to include in a commit.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q040",
        "question": "What is a Git branch in terms of internal storage inside the `.git` directory?",
        "codeSnippet": "",
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
        "real_world_use": "Enables frictionless feature branching workflows where developers create dozens of short-lived branches daily.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q041",
        "question": "In Git version 2.23+, two new commands were introduced to replace the overloaded responsibilities of `git checkout`. Which command is designed specifically for creating and switching between branches?",
        "codeSnippet": "",
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
        "real_world_use": "Prevents accidental file overwrites that occurred when developers mistyped branch names with `git checkout`.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q042",
        "question": "A developer is on the `main` branch. They execute `git branch feature-payment`. What is the immediate state of their repository after this command?",
        "codeSnippet": "",
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
        "real_world_use": "Always verify your active branch with `git branch --show-current` or `git status` before editing code.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q043",
        "question": "A developer has unstaged modifications in `app.py`. They attempt to switch branches using `git switch main`. Under what specific condition will Git prevent the branch switch with an error?",
        "codeSnippet": "",
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
        "real_world_use": "Knowing this error triggers the immediate instinct to use `git stash` to protect in-flight changes.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q044",
        "question": "A developer wants to delete a local branch named `temp-experiment`. They run `git branch -d temp-experiment`, but Git returns the error: `error: The branch 'temp-experiment' is not fully merged.` Why did Git reject the deletion, and which command forces the deletion?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Cleaning up abandoned experimental feature spikes that will not be merged into production.",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q045",
        "question": "A developer runs `git branch -D feature-x` on a branch containing commits that were never pushed or merged anywhere else. Are the commits immediately erased from disk?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Life-saving knowledge when a developer or teammate accidentally deletes the wrong feature branch locally.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q046",
        "question": "A developer is currently on `feature-ui`. They want to rename this branch to `feature-user-interface`. Which command achieves this?",
        "codeSnippet": "",
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
        "real_world_use": "Aligning branch names with team Jira ticket conventions (e.g., renaming `login` to `PROJ-1042-login`).",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q047",
        "question": "Consider this sequence of commands:\nWhat will be the result of the final command `git branch -d dev`?",
        "codeSnippet": "git switch -c dev\necho 'feature code' > feature.txt\ngit add feature.txt\ngit commit -m 'Add feature'\ngit switch main\ngit branch -d dev",
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
        "real_world_use": "Protects developers from accidentally wiping unmerged feature work when switching branches.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q048",
        "question": "A developer runs `git branch -a`. What does the `-a` flag display?",
        "codeSnippet": "",
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
        "real_world_use": "Finding whether a teammate's branch was fetched onto your local machine.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q049",
        "question": "A developer wants to create a new branch called `bugfix-12` and switch to it immediately, starting from a specific commit hash `a1b2c3d` rather than `HEAD`. Which modern command executes this correctly?",
        "codeSnippet": "",
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
        "real_world_use": "Branching off a specific production release tag or hotfix commit to resolve urgent client bugs.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q050",
        "question": "What is the technical definition of a 'Fast-Forward' merge in Git?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Common in feature branches rebased onto `main` before merging to keep history strictly linear.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q051",
        "question": "A developer is merging `feature-auth` into `main`. Both branches made different changes to lines 15-20 of `server.js`. Git pauses the merge and reports a conflict. When the developer opens `server.js`, which marker represents the code that was currently on `main` before the merge was attempted?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Essential for resolving merge conflicts accurately during team sprint integration.",
        "isScenario": true,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q052",
        "question": "A developer has resolved the conflicting lines in `server.js` by manually editing the file and removing all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). What is the immediate next command they MUST run to notify Git that the conflict in this file has been resolved?",
        "codeSnippet": "",
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
        "real_world_use": "Standard multi-file conflict workflow: edit file -> `git add` -> repeat for all files -> `git commit`.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q053",
        "question": "A developer starts merging `feature-billing` into `main`, but encounters dozens of complex conflicts across critical legacy files. They decide it is unsafe to proceed and want to completely abort the merge, cleanly returning the repository and working tree to the exact state before `git merge` was invoked. Which command does this?",
        "codeSnippet": "",
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
        "real_world_use": "Standard emergency rollback when an unexpected merge collision requires consulting with the original author before merging.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q054",
        "question": "A team lead enforces a policy: 'Every merge of a feature branch into `main` must produce a dedicated merge commit, even if the feature branch could be fast-forward merged.' Which command flag enforces this policy?",
        "codeSnippet": "",
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
        "real_world_use": "Common in Git Flow enterprise workflows to ensure feature branches remain visible in `git log --graph`.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q055",
        "question": "What is the key structural difference in commit history between merging a feature branch with `git merge` versus incorporating it via `git rebase`?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "The Golden Rule of Git: Never rebase branches that have already been pushed and shared with other developers.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q056",
        "question": "A developer runs `git merge feature-x` and encounters conflicts. If they run `git commit` immediately without resolving conflicts and without running `git add`, what does Git do?",
        "codeSnippet": "",
        "type": "troubleshooting",
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
        "real_world_use": "Prevents catastrophic syntax errors and build breaks in production pipelines.",
        "isScenario": true,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q057",
        "question": "In a 3-way merge, which three specific commit snapshots does Git use to determine differences and automatically merge changes?",
        "codeSnippet": "",
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
        "real_world_use": "Core algorithm that allows Git to automatically merge different files and different lines without human intervention.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q058",
        "question": "Two developers, Alice and Bob, clone a repository. Alice edits line 10 of `utils.js`, commits, and pushes to `main`. Bob simultaneously edits line 80 of `utils.js` (a completely different function), commits locally, and then pulls from `main`. Will a merge conflict occur?",
        "codeSnippet": "",
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
        "real_world_use": "Allows large engineering teams to work concurrently on shared files like routes or dependency lists.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q059",
        "question": "A developer wants to inspect the common ancestor commit of two diverging branches `main` and `feature-login`. Which command finds the exact commit hash where they split?",
        "codeSnippet": "",
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
        "real_world_use": "Used by CI/CD scripts and PR bots to calculate the exact range of commits introduced by a pull request.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q060",
        "question": "A developer initializes a new Git repository locally with `git init`. They now want to link it to a newly created empty repository on GitHub at `https://github.com/company/core-api.git` under the conventional remote alias `origin`. Which command executes this correctly?",
        "codeSnippet": "",
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
        "real_world_use": "Standard command run when publishing a local starter template or existing project to GitHub.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q061",
        "question": "A developer runs `git remote -v`. What information does this command display in the terminal?",
        "codeSnippet": "",
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
        "real_world_use": "Verifying whether a repository is connected via HTTPS or SSH before pushing credentials.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q062",
        "question": "A company migrates its GitHub organization from `https://github.com/old-org/app.git` to `https://github.com/new-org/app.git`. Which command updates the URL of the existing `origin` remote without breaking existing branch tracking?",
        "codeSnippet": "",
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
        "real_world_use": "Routine task when switching from password-deprecated HTTPS URLs to SSH URLs (`git@github.com:...`).",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q063",
        "question": "When connecting to GitHub over SSH, which file on the developer's local machine contains the public key that must be copied and added to their GitHub account settings?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Configuring passwordless, secure key authentication for corporate development laptops.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q064",
        "question": "A developer runs `git remote rename origin upstream`. What are the exact consequences of this command?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Refactoring remote aliases when converting a direct clone into an open-source fork/upstream workflow.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q065",
        "question": "A developer needs to push code to a client's secondary backup repository in addition to `origin`. Can a single local Git repository be configured with multiple remote repositories?",
        "codeSnippet": "",
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
        "real_world_use": "Standard in open-source: `origin` points to your personal fork, while `upstream` points to the central organization repository.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q066",
        "question": "A developer wants to remove a remote named `staging-server` that is no longer needed. Which command correctly removes this remote from the local repository configuration?",
        "codeSnippet": "",
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
        "real_world_use": "Cleaning up obsolete test servers and stale deployment endpoints from developer machines.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q067",
        "question": "What is the crucial operational difference between `git fetch` and `git pull`?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Senior developers always `fetch` first to review incoming commits with `git log HEAD..origin/main` before merging.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q068",
        "question": "A developer creates a new local branch `feature-reports` and commits changes. When they run plain `git push`, Git returns an error: `fatal: The current branch feature-reports has no upstream branch. To push the current branch and set the remote as upstream, use...`. Which command resolves this and establishes tracking?",
        "codeSnippet": "",
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
        "real_world_use": "Standard initial push command whenever a developer publishes a new local feature branch to GitHub.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q069",
        "question": "A developer attempts to push their local commits to `main` using `git push origin main`, but the push is rejected with: `[rejected - non-fast-forward] error: failed to push some refs... Updates were rejected because the remote contains work that you do not have locally.` What is the correct, professional resolution?",
        "codeSnippet": "",
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
        "real_world_use": "Daily team collaboration scenario where multiple engineers contribute to the same sprint branch.",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q070",
        "question": "A developer runs `git pull --rebase origin main`. How does this command integrate incoming remote changes compared to standard `git pull origin main`?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Enforced by many tech companies to prevent commit graphs from becoming cluttered with 'Merge branch...' noise.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q071",
        "question": "A developer wants to delete a remote branch named `feature-obsolete` directly on GitHub from their local command line. Which command accomplishes this?",
        "codeSnippet": "",
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
        "real_world_use": "Branch hygiene: deleting merged feature branches on the remote after a release.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q072",
        "question": "A teammate deleted three merged branches on GitHub. However, when you run `git branch -r` locally, those three branches still appear as `origin/feature-1`, `origin/feature-2`, and `origin/feature-3`. Which command cleans up these stale tracking references?",
        "codeSnippet": "",
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
        "real_world_use": "Standard maintenance in enterprise repositories where hundreds of feature branches are created and deleted weekly.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q073",
        "question": "A developer runs `git fetch origin`. Which command can they execute next to safely inspect the commits that exist on the remote `main` branch before deciding to merge them into their local `main`?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Code auditing and safety verification before integrating changes in critical production codebases.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q074",
        "question": "Under what specific condition should a developer use `git push --force-with-lease` instead of standard `git push --force`?",
        "codeSnippet": "",
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
        "real_world_use": "Considered an industry best practice for updating personal PR branches after an interactive rebase.",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q075",
        "question": "In an open-source collaboration model on GitHub, what is the fundamental difference between 'Forking' a repository and 'Cloning' a repository?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Foundational workflow for open-source contributions: Fork on GitHub -> Clone fork locally -> Push to fork -> Open Pull Request to upstream.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q076",
        "question": "A developer forks an open-source repository `upstream-org/project` to their personal GitHub account `dev-user/project`, clones their fork locally, and develops a feature. Two weeks later, before submitting a Pull Request, they find that `upstream-org/project` has moved ahead with 30 new commits on `main`. Which sequence of commands correctly synchronizes their local `main` with the original upstream project?",
        "codeSnippet": "",
        "type": "workflow_based",
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
        "real_world_use": "Every open-source contributor and enterprise developer working across fork boundaries uses this upstream sync pattern.",
        "isScenario": true,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q077",
        "question": "A contributor submits a Pull Request on GitHub. The repository maintainer leaves a review comment: 'Please squash your 6 small commits into a single cohesive commit before we merge.' Which local Git tool and command enables the contributor to combine these 6 commits?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Standard pre-merge code review requirement in enterprise repos to maintain a clean Git history.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q078",
        "question": "A software company wants external vendor contractors to contribute bug fixes to their private repository, but company policy strictly forbids granting vendor developers direct write (push) access to the repository. Which GitHub workflow model satisfies this security requirement?",
        "codeSnippet": "",
        "type": "workflow_based",
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
        "real_world_use": "Core security architecture for GitHub open-source ecosystems and multi-vendor enterprise contracts.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q079",
        "question": "In GitHub Pull Request terminology, what is the critical difference between the 'Base Branch' and the 'Compare Branch'?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Configuring correct PR targets across environments (e.g. merging to `develop` vs `staging` vs `main`).",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q080",
        "question": "What occurs when a repository administrator enables 'Branch Protection Rules' on the `main` branch with 'Require pull request reviews before merging' enabled?",
        "codeSnippet": "",
        "type": "workflow_based",
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
        "real_world_use": "Standard SOC2, ISO, and enterprise compliance policy implemented across all major software engineering companies.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q081",
        "question": "A developer runs `git reset --soft HEAD~1`. What are the exact states of the Working Directory, the Staging Area (Index), and the `HEAD` commit history?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Used when you committed too early and want to add more staged files or rewrite the commit with fresh files included.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q082",
        "question": "A developer needs to undo a commit that was already pushed to the shared public `main` branch three days ago, which other team members have already pulled. Why is `git revert <commit-hash>` the only safe approach instead of `git reset --hard`?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Standard production incident remediation: rolling back a buggy release commit on `main` via `git revert`.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q083",
        "question": "Compare the three flags of `git reset`: `--soft`, `--mixed`, and `--hard`. Which statement accurately characterizes what each flag modifies?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "One of the top 3 most frequently asked technical Git questions in MNC interviews (TCS, Accenture, Infosys).",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q084",
        "question": "A developer runs `git reset --hard HEAD~1` by mistake and loses an important unpushed commit containing 500 lines of code. They panic, thinking their code is lost forever. How can they recover the commit?",
        "codeSnippet": "",
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
        "real_world_use": "Rescuing accidentally dropped branches or mistyped hard resets in high-pressure developer environments.",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q085",
        "question": "What is the difference in behavior and scope between `git restore <file>` and `git restore --staged <file>` in modern Git?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Safely managing staging area contents vs working tree file experiments.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q086",
        "question": "Consider the following terminal sequence:\nWhat is the exact content of `test.txt` in the working directory, and what will `git status` report for `test.txt`?",
        "codeSnippet": "echo 'feature' > test.txt\ngit add test.txt\ngit commit -m 'Add test'\necho 'bug' >> test.txt\ngit add test.txt\necho 'extra' >> test.txt\ngit restore --staged test.txt",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Command sequence tracing questions are standard filters in Capgemini, TCS Digital, and Accenture assessments.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q087",
        "question": "A developer is halfway through implementing a feature when an urgent production bug report arrives. Their working tree has uncommitted modifications that they cannot commit yet. They run `git stash`. What does Git do with their uncommitted modifications?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Context switching between feature development and urgent production hotfix triage.",
        "isScenario": false,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q088",
        "question": "What is the critical operational difference between `git stash pop` and `git stash apply`?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Using `apply` when you want to apply the same stash across multiple distinct branches.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q089",
        "question": "A developer created brand-new files `test.py` and `mock.json` which are untracked (never added to Git). When they run plain `git stash`, they notice that `test.py` and `mock.json` are STILL present in their working directory. Why did this happen, and which command stashes them?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Stashing full feature scaffolds including new boilerplate files before switching to investigate bugs.",
        "isScenario": true,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q090",
        "question": "A developer has 3 stashes on their stash list (`stash@{0}`, `stash@{1}`, `stash@{2}`). They want to create a brand-new branch named `recovered-experiment` that starts from the commit where `stash@{1}` was created, apply `stash@{1}`, and drop it from the stash list. Which single command executes this?",
        "codeSnippet": "",
        "type": "output_or_state_prediction",
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
        "real_world_use": "Safely reviving an abandoned exploratory stash created weeks ago without polluting active branches.",
        "isScenario": false,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q091",
        "question": "Which combination of `git log` formatting flags produces a compact, single-line-per-commit visual representation of branch ancestry, merge bubbles, and branch pointers in the terminal?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "The most popular custom Git alias (`git config --global alias.lg ...`) used by professional software engineers.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q092",
        "question": "A production bug was introduced into `auth.py`. A developer needs to inspect the file line by line to determine who wrote each line, which commit introduced it, and at what timestamp. Which command provides this line-by-line authorship audit?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Tracking down the context and PR discussions behind legacy edge-case handling in production code.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q093",
        "question": "A developer needs to search through the entire commit history of a repository to find every commit where a specific function name, `calculateTaxRate`, was either added or deleted. Which command executes this search efficiently?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Finding exactly when a removed function was deprecated and which PR removed it.",
        "isScenario": false,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q094",
        "question": "What is the critical architectural difference between the information stored in `git log` versus the information stored in `git reflog`?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Key interview question distinguishing candidates with genuine practical debugging skills from those who only read tutorials.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q095",
        "question": "A developer adds `.env` to their project's `.gitignore` file. However, whenever they modify `.env`, `git status` continues to show `.env` under 'Changes not staged for commit'. Why does `.gitignore` fail to ignore the file?",
        "codeSnippet": "",
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
        "real_world_use": "Encountered constantly when junior developers commit local config files and later attempt to ignore them.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    },
    {
        "id": "Q096",
        "question": "A team wants to ignore all `.log` files in the `logs/` directory, EXCEPT for `important.log` which must be tracked. Which `.gitignore` pattern correctly accomplishes this negative pattern rule?",
        "codeSnippet": "",
        "type": "conceptual",
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
        "real_world_use": "Ignoring generated test reports or log directories while preserving sample template configurations in source control.",
        "isScenario": false,
        "company_pattern": [
            "Accenture",
            "TCS"
        ]
    },
    {
        "id": "Q097",
        "question": "A developer accidentally committed a production database password inside `config/secrets.json` three commits ago, and pushed it to a public GitHub repository. They immediately create a new commit removing the password and delete the file. Why is the password STILL compromised?",
        "codeSnippet": "",
        "type": "workflow_based",
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
        "real_world_use": "Critical security principle: leaked credentials in Git must be assumed compromised and revoked immediately.",
        "isScenario": true,
        "company_pattern": [
            "Capgemini",
            "Cognizant"
        ]
    },
    {
        "id": "Q098",
        "question": "A developer wants GitHub to automatically close Issue #42 when their Pull Request is merged into the default branch. Which commit message or PR description phrase achieves this automated linking?",
        "codeSnippet": "",
        "type": "scenario_based",
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
        "real_world_use": "Standard agile issue tracking automation across software engineering teams.",
        "isScenario": true,
        "company_pattern": [
            "Infosys",
            "Wipro"
        ]
    },
    {
        "id": "Q099",
        "question": "Where must continuous integration (CI) workflow configuration files be located in a repository for GitHub Actions to automatically detect and run them?",
        "codeSnippet": "",
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
        "real_world_use": "Automating test runs, linting checks, Docker builds, and cloud deployments on every Pull Request.",
        "isScenario": false,
        "company_pattern": [
            "Deloitte",
            "LTIMindtree"
        ]
    },
    {
        "id": "Q100",
        "question": "A development team wants to ensure that a Pull Request cannot be merged into `main` unless all automated tests in the GitHub Actions CI pipeline pass successfully. Which GitHub feature must the team configure?",
        "codeSnippet": "",
        "type": "workflow_based",
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
        "real_world_use": "Fundamental DevSecOps quality barrier protecting enterprise production branches from regressions and outages.",
        "isScenario": true,
        "company_pattern": [
            "HCLTech",
            "Tech Mahindra"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GITHUB_QUESTIONS };
}
if (typeof window !== 'undefined') {
    window.GITHUB_QUESTIONS = GITHUB_QUESTIONS;
    window.questionsData = GITHUB_QUESTIONS;
}
