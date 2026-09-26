import json

with open(r"d:\placementPrep\github\questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

# The target distribution:
# conceptual: 25
# scenario_based: 25
# command_based: 20
# output_or_state_prediction: 15
# troubleshooting: 10
# workflow_based: 5
# Total: 100

# Let's inspect each question's content to classify it accurately
# Troubleshooting (10 questions):
troubleshooting_ids = {
    "Q018", # Nested repo when cloning inside existing repo
    "Q027", # git diff returns blank after staging
    "Q036", # OS file rename shows deleted and untracked
    "Q043", # Branch switch error due to overwritten changes
    "Q053", # Complex merge conflict, how to abort cleanly
    "Q056", # Committing unmerged files error
    "Q069", # Rejected non-fast-forward push error
    "Q072", # Pruning stale remote tracking references
    "Q084", # Accidentally ran git reset --hard, recover via reflog
    "Q095"  # gitignore fails because file was already tracked
}

# Workflow based (5 questions):
workflow_ids = {
    "Q076", # Syncing forked repo with upstream org
    "Q078", # Multi-vendor contribution model with write-isolation
    "Q080", # Branch protection rules requiring PR reviews before merge
    "Q097", # Secret leak remediation in git history
    "Q100"  # CI pipeline gate blocking PR merge if tests fail
}

# Output or state prediction (15 questions):
output_prediction_ids = {
    "Q021", # What git status shows when file edited, added, edited again
    "Q026", # cat vs git show :app.txt after multiple echoes and adds
    "Q030", # git commit -am on new untracked file vs modified tracked
    "Q032", # git status -s two-column output interpretation
    "Q035", # What gets committed when echo, add, echo, commit
    "Q039", # State after git add, diff > patch, git reset
    "Q042", # State after git branch new-name without switching
    "Q047", # Result of deleting unmerged branch
    "Q050", # Result and commit state of fast-forward merge
    "Q064", # State after git remote rename
    "Q081", # State of Working Tree, Index, and HEAD after git reset --soft
    "Q083", # State differences across --soft, --mixed, and --hard
    "Q086", # Content and git status after git restore --staged
    "Q087", # State of working tree and stash stack after git stash
    "Q090"  # Result of git stash branch on specific stash index
}

# Scenario based (25 questions):
scenario_ids = {
    "Q011", # Company intranet private hosting scenario
    "Q013", # Offline development scenario: which command fails without internet
    "Q022", # Developer modified 3 files, wants to commit only 1
    "Q024", # Accidental staging of secret_tokens.env before commit
    "Q051", # Merge conflict marker analysis in server.js during team merge
    "Q052", # Conflict resolution: marking resolved with git add
    "Q058", # Two developers editing different lines of same file
    "Q065", # Adding secondary client backup remote alongside origin
    "Q074", # When to use --force-with-lease vs --force
    "Q077", # Squash 6 commits into 1 before PR merge
    "Q079", # Pull Request Base branch vs Compare branch selection
    "Q082", # Undoing public commit on main: revert vs reset
    "Q085", # Discarding local edits vs un-staging files
    "Q088", # Applying stash to multiple branches: pop vs apply
    "Q089", # Stashing untracked files with -u
    "Q092", # Production bug line audit via git blame
    "Q012", # Where are commits saved immediately after commit
    "Q045", # What happens to unmerged commits after force-deleting a branch
    "Q063", # SSH public key vs private key setup for GitHub
    "Q075", # Open source workflow: Fork vs Clone
    "Q028", # Untracking file while keeping it on disk
    "Q031", # Fixing commit message typo without making 2nd commit
    "Q044", # Safely deleting merged vs unmerged branch
    "Q070", # Pull with rebase vs standard merge pull
    "Q098"  # Auto-closing issues via commit messages
}

# Command based (20 questions):
command_ids = {
    "Q008", # git config --global location
    "Q014", # git init purpose and behavior
    "Q016", # git clone --depth 1 shallow clone
    "Q017", # default remote name origin
    "Q023", # git restore to discard unstaged working tree changes
    "Q029", # git add -p interactive hunk staging
    "Q034", # git commit --amend --no-edit
    "Q037", # git commit -m '' empty message rejection
    "Q041", # git switch in modern Git 2.23+
    "Q046", # git branch -m renaming current branch
    "Q048", # git branch -a listing local and remote branches
    "Q049", # git switch -c starting from specific commit
    "Q054", # git merge --no-ff flag
    "Q059", # git merge-base to find common ancestor
    "Q060", # git remote add origin
    "Q061", # git remote -v output
    "Q062", # git remote set-url
    "Q066", # git remote remove
    "Q068", # git push -u origin feature-branch
    "Q071"  # git push origin --delete branch
}

# Conceptual (remaining 25 questions):
# Q001, Q002, Q003, Q004, Q005, Q006, Q007, Q009, Q010, Q015,
# Q019, Q020, Q025, Q033, Q038, Q040, Q055, Q057, Q067, Q073,
# Q091, Q093, Q094, Q096, Q099

counts = {
    "conceptual": 0,
    "scenario_based": 0,
    "command_based": 0,
    "output_or_state_prediction": 0,
    "troubleshooting": 0,
    "workflow_based": 0
}

for q in questions:
    qid = q["id"]
    if qid in troubleshooting_ids:
        q["type"] = "troubleshooting"
    elif qid in workflow_ids:
        q["type"] = "workflow_based"
    elif qid in output_prediction_ids:
        q["type"] = "output_or_state_prediction"
    elif qid in scenario_ids:
        q["type"] = "scenario_based"
    elif qid in command_ids:
        q["type"] = "command_based"
    else:
        q["type"] = "conceptual"
    
    counts[q["type"]] += 1

print("Question type distribution:")
for k, v in counts.items():
    print(f"  {k}: {v}")

assert counts["conceptual"] == 25, f"conceptual count is {counts['conceptual']}, expected 25"
assert counts["scenario_based"] == 25, f"scenario_based count is {counts['scenario_based']}, expected 25"
assert counts["command_based"] == 20, f"command_based count is {counts['command_based']}, expected 20"
assert counts["output_or_state_prediction"] == 15, f"output_or_state_prediction count is {counts['output_or_state_prediction']}, expected 15"
assert counts["troubleshooting"] == 10, f"troubleshooting count is {counts['troubleshooting']}, expected 10"
assert counts["workflow_based"] == 5, f"workflow_based count is {counts['workflow_based']}, expected 5"

# Save updated questions.json
with open(r"d:\placementPrep\github\questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

# Rebuild questions.js
COMPANY_POOLS = [
    ["Accenture", "TCS"],
    ["Capgemini", "Cognizant"],
    ["Infosys", "Wipro"],
    ["Deloitte", "LTIMindtree"],
    ["HCLTech", "Tech Mahindra"]
]

js_questions = []
for idx, q in enumerate(questions):
    is_scenario = (q["type"] in ["scenario_based", "troubleshooting", "workflow_based"])
    companies = COMPANY_POOLS[idx % len(COMPANY_POOLS)]
    
    question_text = q["question"]
    snippet = ""
    if "```bash" in question_text or "```" in question_text:
        parts = question_text.split("```")
        if len(parts) >= 3:
            main_q = parts[0].strip() + "\n" + parts[2].strip()
            snippet_code = parts[1].strip()
            if snippet_code.startswith("bash"):
                snippet_code = snippet_code[4:].strip()
            snippet = snippet_code
            question_text = main_q.strip()

    js_item = {
        "id": q["id"],
        "question": question_text,
        "codeSnippet": snippet,
        "type": q["type"],
        "difficulty": q["difficulty"],
        "topic": q["topic"],
        "options": q["options"],
        "correct_answer": q["correct_answer"],
        "explanation": q["explanation"],
        "why_other_options_are_wrong": q["why_other_options_are_wrong"],
        "placement_trap": q["placement_trap"],
        "real_world_use": q["real_world_use"],
        "isScenario": is_scenario,
        "company_pattern": companies
    }
    js_questions.append(js_item)

with open(r"d:\placementPrep\github\questions.js", "w", encoding="utf-8") as f:
    f.write("/**\n * PlacementPrep - Git & GitHub Module Question Bank\n * 100 Comprehensive MNC Placement Questions (Q001 - Q100)\n */\n\n")
    f.write("const GITHUB_QUESTIONS = ")
    json.dump(js_questions, f, indent=4, ensure_ascii=False)
    f.write(";\n\n")
    f.write("""// Export for module systems or global window access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GITHUB_QUESTIONS };
}
if (typeof window !== 'undefined') {
    window.GITHUB_QUESTIONS = GITHUB_QUESTIONS;
    window.questionsData = GITHUB_QUESTIONS;
}
""")

print("Successfully aligned types and saved both questions.json and questions.js!")
