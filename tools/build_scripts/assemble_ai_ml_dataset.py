import json
import os
import re

from build_ai_part import ai_questions
from build_ml_part import ml_questions
from build_ml_part2 import ml_questions_part2
from build_dl_part import dl_questions

all_questions = ai_questions + ml_questions + ml_questions_part2 + dl_questions

print(f"Total AI/ML/DL questions combined: {len(all_questions)}")
assert len(all_questions) == 100, f"Expected 100 questions, got {len(all_questions)}"

# Validation of counts
section_counts = {}
diff_counts = {}
type_counts = {}
seen_questions = set()

for idx, q in enumerate(all_questions):
    expected_id = f"AI_ML_DL_{idx+1:03d}"
    assert q["id"] == expected_id, f"ID mismatch at index {idx}: got {q['id']}, expected {expected_id}"
    
    # Check duplicate question text
    q_norm = re.sub(r'\s+', ' ', q["question"].strip().lower())
    assert q_norm not in seen_questions, f"Duplicate question text in {q['id']}"
    seen_questions.add(q_norm)
    
    # Check options
    assert set(q["options"].keys()) == {"A", "B", "C", "D"}, f"Invalid option keys in {q['id']}"
    for k, v in q["options"].items():
        assert v.strip(), f"Empty option {k} in {q['id']}"
        
    assert q["correct_answer"] in {"A", "B", "C", "D"}, f"Invalid correct answer in {q['id']}"
    assert q["explanation"].strip(), f"Empty explanation in {q['id']}"
    assert q["placement_tip"].strip(), f"Empty placement_tip in {q['id']}"
    
    # Section, Diff, Type
    sec = q["section"]
    section_counts[sec] = section_counts.get(sec, 0) + 1
    
    d = q["difficulty"]
    diff_counts[d] = diff_counts.get(d, 0) + 1
    
    qt = q["question_type"]
    type_counts[qt] = type_counts.get(qt, 0) + 1

print("\n--- Section Counts ---")
for s, c in section_counts.items():
    print(f"  {s}: {c}")

assert section_counts["Artificial Intelligence"] == 20, f"AI count is {section_counts['Artificial Intelligence']}, expected 20"
assert section_counts["Machine Learning"] == 50, f"ML count is {section_counts['Machine Learning']}, expected 50"
assert section_counts["Deep Learning"] == 30, f"DL count is {section_counts['Deep Learning']}, expected 30"

print("\n--- Difficulty Counts ---")
for d, c in diff_counts.items():
    print(f"  {d}: {c}")

assert diff_counts["Easy"] == 15, f"Easy count is {diff_counts['Easy']}, expected 15"
assert diff_counts["Medium"] == 50, f"Medium count is {diff_counts['Medium']}, expected 50"
assert diff_counts["Hard"] == 35, f"Hard count is {diff_counts['Hard']}, expected 35"

print("\n--- Question Type Counts ---")
for qt, c in sorted(type_counts.items()):
    print(f"  {qt}: {c}")

# Save JSON file
out_json = r"d:\placementPrep\ai_ml\questions.json"
with open(out_json, "w", encoding="utf-8") as f:
    json.dump(all_questions, f, indent=2, ensure_ascii=False)
print(f"\nSaved valid JSON to {out_json} (size: {os.path.getsize(out_json)} bytes)")

# Convert to web application questions.js format
COMPANY_POOLS = [
    ["TCS", "Accenture"],
    ["Capgemini", "Cognizant"],
    ["Infosys", "Wipro"],
    ["Deloitte", "LTIMindtree"],
    ["HCLTech", "Tech Mahindra"]
]

js_questions = []
for idx, q in enumerate(all_questions):
    is_scenario = (q["question_type"] in ["scenario_based", "application_based", "debugging_or_troubleshooting"])
    companies = COMPANY_POOLS[idx % len(COMPANY_POOLS)]
    
    # Extract code snippet if present in markdown format inside question
    question_text = q["question"]
    snippet = ""
    if "```python" in question_text or "```" in question_text:
        parts = question_text.split("```")
        if len(parts) >= 3:
            main_q = parts[0].strip() + "\n" + parts[2].strip()
            snippet_code = parts[1].strip()
            if snippet_code.startswith("python"):
                snippet_code = snippet_code[6:].strip()
            snippet = snippet_code
            question_text = main_q.strip()

    js_item = {
        "id": q["id"],
        "section": q["section"],
        "topic": q["topic"],
        "concept": q["concept"],
        "difficulty": q["difficulty"],
        "question_type": q["question_type"],
        "question": question_text,
        "codeSnippet": snippet,
        "options": q["options"],
        "correct_answer": q["correct_answer"],
        "explanation": q["explanation"],
        "why_other_options_are_wrong": q["why_other_options_are_wrong"],
        "placement_tip": q["placement_tip"],
        "isScenario": is_scenario,
        "company_pattern": companies
    }
    js_questions.append(js_item)

out_js = r"d:\placementPrep\ai_ml\questions.js"
with open(out_js, "w", encoding="utf-8") as f:
    f.write("/**\n * PlacementPrep - AI / Machine Learning / Deep Learning Module\n * 100 Comprehensive MNC Placement Questions (AI_ML_DL_001 - AI_ML_DL_100)\n */\n\n")
    f.write("const AI_ML_QUESTIONS = ")
    json.dump(js_questions, f, indent=4, ensure_ascii=False)
    f.write(";\n\n")
    f.write("""if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AI_ML_QUESTIONS };
}
if (typeof window !== 'undefined') {
    window.AI_ML_QUESTIONS = AI_ML_QUESTIONS;
    window.questionsData = AI_ML_QUESTIONS;
}
""")

print(f"Saved questions.js to {out_js} (size: {os.path.getsize(out_js)} bytes)")
print("ALL 100 AI/ML/DL QUESTIONS VALIDATED AND GENERATED SUCCESSFULLY!")
