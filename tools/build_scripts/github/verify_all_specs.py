import json
import re

with open(r"d:\placementPrep\github\questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} questions from questions.json.")
assert len(questions) == 100, f"Expected 100 questions, got {len(questions)}"

# Required concepts from prompt
required_concepts = [
    "git init",
    "git clone",
    "git status",
    "git add",
    "git commit",
    "git log",
    "git diff",
    "git branch",
    "git switch",
    "git checkout",
    "git merge",
    "merge conflict",
    "git remote",
    "git push",
    "git pull",
    "git fetch",
    "origin",
    "upstream",
    "fork",
    "pull request",
    "working directory",
    "staging area",
    "local repository",
    "remote repository",
    "HEAD",
    "commit",
    "branch",
    "git reset",
    "git revert",
    "git restore",
    "git stash",
    ".gitignore",
    "commit history"
]

all_text = ""
seen_questions = set()
topic_counts = {}
diff_counts = {}
type_counts = {}

for idx, q in enumerate(questions):
    qid = f"Q{idx+1:03d}"
    assert q["id"] == qid, f"ID mismatch: got {q['id']}, expected {qid}"
    
    # Check duplicate question texts
    q_norm = re.sub(r'\s+', ' ', q["question"].strip().lower())
    assert q_norm not in seen_questions, f"Duplicate question text in {qid}"
    seen_questions.add(q_norm)
    
    # Check options
    assert set(q["options"].keys()) == {"A", "B", "C", "D"}, f"Invalid option keys in {qid}"
    for opt_k, opt_v in q["options"].items():
        assert opt_v.strip(), f"Empty option {opt_k} in {qid}"
    
    # Check correct answer
    assert q["correct_answer"] in {"A", "B", "C", "D"}, f"Invalid correct answer in {qid}"
    
    # Check explanations
    assert q["explanation"].strip(), f"Empty explanation in {qid}"
    assert set(q["why_other_options_are_wrong"].keys()) == {"A", "B", "C", "D"}, f"Invalid why_other_options_are_wrong in {qid}"
    for k, v in q["why_other_options_are_wrong"].items():
        assert v.strip(), f"Empty wrong explanation for {k} in {qid}"
        
    assert q["placement_trap"].strip(), f"Empty placement_trap in {qid}"
    assert q["real_world_use"].strip(), f"Empty real_world_use in {qid}"
    
    # Aggregations
    t = q["topic"]
    topic_counts[t] = topic_counts.get(t, 0) + 1
    
    d = q["difficulty"]
    diff_counts[d] = diff_counts.get(d, 0) + 1
    
    qt = q["type"]
    type_counts[qt] = type_counts.get(qt, 0) + 1
    
    all_text += " " + q["question"] + " " + q["explanation"] + " " + q["placement_trap"] + " " + " ".join(q["options"].values())

# Topic validation
expected_topics = {
    "Git fundamentals": 8,
    "Git vs GitHub": 5,
    "repository_initialization_and_cloning": 6,
    "working_directory_staging_area_repository": 10,
    "git_add_commit_status_diff": 10,
    "branches_and_branch_switching": 10,
    "merge_and_merge_conflicts": 10,
    "remote_repositories": 7,
    "push_pull_fetch": 8,
    "clone_fork_and_pull_request": 6,
    "reset_revert_and_restore": 6,
    "stash": 4,
    "log_history_and_commit_inspection": 4,
    "gitignore": 3,
    "github_workflow": 3
}
assert topic_counts == expected_topics, f"Topic counts mismatch: {topic_counts}"

# Difficulty validation
assert diff_counts == {"Medium": 35, "Medium-Hard": 40, "Hard": 25}, f"Difficulty counts mismatch: {diff_counts}"

# Progression validation
for i in range(0, 20):
    assert questions[i]["difficulty"] == "Medium"
for i in range(20, 50):
    assert questions[i]["difficulty"] in ["Medium", "Medium-Hard"]
for i in range(50, 75):
    assert questions[i]["difficulty"] == "Medium-Hard"
for i in range(75, 100):
    assert questions[i]["difficulty"] == "Hard"

# Type distribution validation
expected_types = {
    "conceptual": 25,
    "scenario_based": 25,
    "command_based": 20,
    "output_or_state_prediction": 15,
    "troubleshooting": 10,
    "workflow_based": 5
}
assert type_counts == expected_types, f"Type counts mismatch: {type_counts}"

# Concept coverage
missing_concepts = []
all_text_lower = all_text.lower()
for c in required_concepts:
    if c.lower() not in all_text_lower:
        missing_concepts.append(c)

print(f"Missing concepts: {missing_concepts}")
assert len(missing_concepts) == 0, f"Some required concepts are missing: {missing_concepts}"

print("All 13 validation criteria successfully passed 100%!")
