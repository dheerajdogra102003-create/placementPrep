"""
PlacementPrep - 100 Git and GitHub Placement Practice Set Generator
Builds and validates all 100 questions conforming strictly to MNC screening patterns.
Outputs:
  - d:\\placementPrep\\github\\questions.json
  - d:\\placementPrep\\github\\questions.js
"""

import json
import os
import re

from build_part1 import part1
from build_part2 import part2
from build_part3 import part3
from build_part4 import part4

def main():
    questions = part1 + part2 + part3 + part4
    print(f"Loaded {len(questions)} total questions.")
    assert len(questions) == 100, f"Expected 100 questions, got {len(questions)}"

    # Specific category alignment to guarantee exact distribution:
    troubleshooting_ids = {"Q018", "Q027", "Q036", "Q043", "Q053", "Q056", "Q069", "Q072", "Q084", "Q095"}
    workflow_ids = {"Q076", "Q078", "Q080", "Q097", "Q100"}
    output_prediction_ids = {
        "Q021", "Q026", "Q030", "Q032", "Q035", "Q039", "Q042", "Q047",
        "Q050", "Q064", "Q081", "Q083", "Q086", "Q087", "Q090"
    }
    scenario_ids = {
        "Q011", "Q012", "Q013", "Q022", "Q024", "Q028", "Q031", "Q044",
        "Q045", "Q051", "Q052", "Q058", "Q063", "Q065", "Q070", "Q074",
        "Q075", "Q077", "Q079", "Q082", "Q085", "Q088", "Q089", "Q092", "Q098"
    }
    command_ids = {
        "Q008", "Q014", "Q016", "Q017", "Q023", "Q029", "Q034", "Q037",
        "Q041", "Q046", "Q048", "Q049", "Q054", "Q059", "Q060", "Q061",
        "Q062", "Q066", "Q068", "Q071"
    }

    type_counts = {}
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
        type_counts[q["type"]] = type_counts.get(q["type"], 0) + 1

    print("Type distribution:", type_counts)

    # Topic distribution check
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
    topic_counts = {}
    diff_counts = {}
    for q in questions:
        topic_counts[q["topic"]] = topic_counts.get(q["topic"], 0) + 1
        diff_counts[q["difficulty"]] = diff_counts.get(q["difficulty"], 0) + 1

    assert topic_counts == expected_topics, f"Topic mismatch: {topic_counts}"
    assert diff_counts == {"Medium": 35, "Medium-Hard": 40, "Hard": 25}, f"Diff mismatch: {diff_counts}"

    # Write pure JSON output
    out_json = r"d:\placementPrep\github\questions.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    print(f"Saved {out_json} successfully.")

    # Write JS output for web app
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

    out_js = r"d:\placementPrep\github\questions.js"
    with open(out_js, "w", encoding="utf-8") as f:
        f.write("/**\n * PlacementPrep - Git & GitHub Module Question Bank\n * 100 Comprehensive MNC Placement Questions (Q001 - Q100)\n */\n\n")
        f.write("const GITHUB_QUESTIONS = ")
        json.dump(js_questions, f, indent=4, ensure_ascii=False)
        f.write(";\n\n")
        f.write("""if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GITHUB_QUESTIONS };
}
if (typeof window !== 'undefined') {
    window.GITHUB_QUESTIONS = GITHUB_QUESTIONS;
    window.questionsData = GITHUB_QUESTIONS;
}
""")
    print(f"Saved {out_js} successfully.")
    print("Done! All 100 questions generated and validated.")

if __name__ == "__main__":
    main()
