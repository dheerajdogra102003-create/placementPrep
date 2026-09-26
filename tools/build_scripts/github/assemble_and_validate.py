import json
import os
import sys

from build_part1 import part1
from build_part2 import part2
from build_part3 import part3
from build_part4 import part4

all_questions = part1 + part2 + part3 + part4

print(f"Total questions loaded: {len(all_questions)}")
assert len(all_questions) == 100, f"Expected 100 questions, got {len(all_questions)}"

# Validation
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

actual_topics = {}
actual_diffs = {"Medium": 0, "Medium-Hard": 0, "Hard": 0}
actual_types = {}
ids_seen = set()

required_fields = [
    "id", "question", "type", "difficulty", "topic",
    "options", "correct_answer", "explanation",
    "why_other_options_are_wrong", "placement_trap", "real_world_use"
]

for idx, q in enumerate(all_questions):
    expected_id = f"Q{idx+1:03d}"
    assert q["id"] == expected_id, f"Question at index {idx} has id {q['id']}, expected {expected_id}"
    assert q["id"] not in ids_seen, f"Duplicate id: {q['id']}"
    ids_seen.add(q["id"])

    for f in required_fields:
        assert f in q and q[f], f"Missing or empty field '{f}' in {q['id']}"

    assert list(q["options"].keys()) == ["A", "B", "C", "D"], f"Options must be A, B, C, D in {q['id']}"
    for opt_key, opt_val in q["options"].items():
        assert opt_val.strip(), f"Empty option {opt_key} in {q['id']}"

    assert q["correct_answer"] in ["A", "B", "C", "D"], f"Invalid correct_answer in {q['id']}"

    assert list(q["why_other_options_are_wrong"].keys()) == ["A", "B", "C", "D"], f"why_other_options_are_wrong keys must be A, B, C, D in {q['id']}"
    for opt_k, exp_v in q["why_other_options_are_wrong"].items():
        assert exp_v.strip(), f"Empty wrong option explanation for {opt_k} in {q['id']}"

    # Counts
    t = q["topic"]
    actual_topics[t] = actual_topics.get(t, 0) + 1
    
    d = q["difficulty"]
    actual_diffs[d] = actual_diffs.get(d, 0) + 1
    
    qt = q["type"]
    actual_types[qt] = actual_types.get(qt, 0) + 1

# Check topics
print("\n--- Topic Validation ---")
for t, expected_count in expected_topics.items():
    actual_count = actual_topics.get(t, 0)
    print(f"{t}: {actual_count}/{expected_count}")
    assert actual_count == expected_count, f"Topic '{t}' has count {actual_count}, expected {expected_count}"

# Check difficulties
print("\n--- Difficulty Validation ---")
print(f"Medium: {actual_diffs.get('Medium', 0)}/35 (35%)")
print(f"Medium-Hard: {actual_diffs.get('Medium-Hard', 0)}/40 (40%)")
print(f"Hard: {actual_diffs.get('Hard', 0)}/25 (25%)")
assert actual_diffs.get('Medium', 0) == 35, f"Medium count is {actual_diffs.get('Medium', 0)}, expected 35"
assert actual_diffs.get('Medium-Hard', 0) == 40, f"Medium-Hard count is {actual_diffs.get('Medium-Hard', 0)}, expected 40"
assert actual_diffs.get('Hard', 0) == 25, f"Hard count is {actual_diffs.get('Hard', 0)}, expected 25"

# Check progression
for i in range(0, 20):
    assert all_questions[i]["difficulty"] == "Medium", f"Q{i+1:03d} should be Medium"
for i in range(20, 50):
    assert all_questions[i]["difficulty"] in ["Medium", "Medium-Hard"], f"Q{i+1:03d} should be Medium or Medium-Hard"
for i in range(50, 75):
    assert all_questions[i]["difficulty"] == "Medium-Hard", f"Q{i+1:03d} should be Medium-Hard"
for i in range(75, 100):
    assert all_questions[i]["difficulty"] == "Hard", f"Q{i+1:03d} should be Hard"

print("\nDifficulty progression verified: Q001-Q020 Medium, Q021-Q050 Medium/Med-Hard, Q051-Q075 Med-Hard, Q076-Q100 Hard.")

print("\n--- Question Types ---")
for qt, count in sorted(actual_types.items()):
    print(f"Type '{qt}': {count}")

# Save JSON file
out_json = r"d:\placementPrep\github\questions.json"
with open(out_json, "w", encoding="utf-8") as f:
    json.dump(all_questions, f, indent=2, ensure_ascii=False)
print(f"\nWrote valid JSON to {out_json} (size: {os.path.getsize(out_json)} bytes)")

# Convert to questions.js format
# In addition to the exact schema, we map code snippets, isScenario, and topic labels nicely
js_questions = []
COMPANY_POOLS = [
    ["Accenture", "TCS"],
    ["Capgemini", "Cognizant"],
    ["Infosys", "Wipro"],
    ["Deloitte", "LTIMindtree"],
    ["HCLTech", "Tech Mahindra"]
]

for idx, q in enumerate(all_questions):
    is_scenario = (q["type"] in ["scenario", "scenario_based", "troubleshooting", "workflow"])
    companies = COMPANY_POOLS[idx % len(COMPANY_POOLS)]
    
    # Extract code snippet if present in markdown format inside question
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

out_js = r"d:\placementPrep\github\questions.js"
with open(out_js, "w", encoding="utf-8") as f:
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

print(f"Wrote questions.js to {out_js} (size: {os.path.getsize(out_js)} bytes)")
print("ALL 100 QUESTIONS VALIDATED AND GENERATED SUCCESSFULLY!")
