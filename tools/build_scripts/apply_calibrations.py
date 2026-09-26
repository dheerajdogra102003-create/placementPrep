import json
import os
import re

with open('questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Define exact type mappings
TYPE_MAP = {
    # 10 Calculation questions
    "AI_ML_DL_011": "calculation_based",
    "AI_ML_DL_026": "calculation_based",
    "AI_ML_DL_035": "calculation_based",
    "AI_ML_DL_042": "calculation_based",
    "AI_ML_DL_054": "calculation_based",
    "AI_ML_DL_055": "calculation_based",
    "AI_ML_DL_063": "calculation_based",
    "AI_ML_DL_072": "calculation_based",
    "AI_ML_DL_082": "calculation_based",
    "AI_ML_DL_088": "calculation_based",

    # 5 Output or Prediction questions
    "AI_ML_DL_033": "output_or_prediction",
    "AI_ML_DL_052": "output_or_prediction",
    "AI_ML_DL_057": "output_or_prediction",
    "AI_ML_DL_092": "output_or_prediction",
    "AI_ML_DL_098": "output_or_prediction",

    # 5 Debugging or Troubleshooting questions
    "AI_ML_DL_037": "debugging_or_troubleshooting",
    "AI_ML_DL_059": "debugging_or_troubleshooting",
    "AI_ML_DL_064": "debugging_or_troubleshooting",
    "AI_ML_DL_078": "debugging_or_troubleshooting",
    "AI_ML_DL_084": "debugging_or_troubleshooting",

    # 10 Code or Pseudocode questions
    "AI_ML_DL_022": "code_or_pseudocode",
    "AI_ML_DL_031": "code_or_pseudocode",
    "AI_ML_DL_041": "code_or_pseudocode",
    "AI_ML_DL_047": "code_or_pseudocode",
    "AI_ML_DL_060": "code_or_pseudocode",
    "AI_ML_DL_061": "code_or_pseudocode",
    "AI_ML_DL_065": "code_or_pseudocode",
    "AI_ML_DL_075": "code_or_pseudocode",
    "AI_ML_DL_086": "code_or_pseudocode",
    "AI_ML_DL_096": "code_or_pseudocode",

    # 25 Scenario-based questions
    "AI_ML_DL_005": "scenario_based",
    "AI_ML_DL_008": "scenario_based",
    "AI_ML_DL_009": "scenario_based",
    "AI_ML_DL_013": "scenario_based",
    "AI_ML_DL_017": "scenario_based",
    "AI_ML_DL_019": "scenario_based",
    "AI_ML_DL_021": "scenario_based",
    "AI_ML_DL_025": "scenario_based",
    "AI_ML_DL_029": "scenario_based",
    "AI_ML_DL_030": "scenario_based",
    "AI_ML_DL_032": "scenario_based",
    "AI_ML_DL_034": "scenario_based",
    "AI_ML_DL_040": "scenario_based",
    "AI_ML_DL_044": "scenario_based",
    "AI_ML_DL_050": "scenario_based",
    "AI_ML_DL_053": "scenario_based",
    "AI_ML_DL_056": "scenario_based",
    "AI_ML_DL_062": "scenario_based",
    "AI_ML_DL_066": "scenario_based",
    "AI_ML_DL_070": "scenario_based",
    "AI_ML_DL_079": "scenario_based",
    "AI_ML_DL_083": "scenario_based",
    "AI_ML_DL_087": "scenario_based",
    "AI_ML_DL_094": "scenario_based",
    "AI_ML_DL_097": "scenario_based",

    # 15 Application-based questions
    "AI_ML_DL_003": "application_based",
    "AI_ML_DL_018": "application_based",
    "AI_ML_DL_020": "application_based",
    "AI_ML_DL_024": "application_based",
    "AI_ML_DL_028": "application_based",
    "AI_ML_DL_048": "application_based",
    "AI_ML_DL_049": "application_based",
    "AI_ML_DL_051": "application_based",
    "AI_ML_DL_067": "application_based",
    "AI_ML_DL_068": "application_based",
    "AI_ML_DL_069": "application_based",
    "AI_ML_DL_089": "application_based",
    "AI_ML_DL_090": "application_based",
    "AI_ML_DL_095": "application_based",
    "AI_ML_DL_100": "application_based",

    # 30 Conceptual questions (the remaining)
    "AI_ML_DL_001": "conceptual",
    "AI_ML_DL_002": "conceptual",
    "AI_ML_DL_004": "conceptual",
    "AI_ML_DL_006": "conceptual",
    "AI_ML_DL_007": "conceptual",
    "AI_ML_DL_010": "conceptual",
    "AI_ML_DL_012": "conceptual",
    "AI_ML_DL_014": "conceptual",
    "AI_ML_DL_015": "conceptual",
    "AI_ML_DL_016": "conceptual",
    "AI_ML_DL_023": "conceptual",
    "AI_ML_DL_027": "conceptual",
    "AI_ML_DL_036": "conceptual",
    "AI_ML_DL_038": "conceptual",
    "AI_ML_DL_039": "conceptual",
    "AI_ML_DL_043": "conceptual",
    "AI_ML_DL_045": "conceptual",
    "AI_ML_DL_046": "conceptual",
    "AI_ML_DL_058": "conceptual",
    "AI_ML_DL_071": "conceptual",
    "AI_ML_DL_073": "conceptual",
    "AI_ML_DL_074": "conceptual",
    "AI_ML_DL_076": "conceptual",
    "AI_ML_DL_077": "conceptual",
    "AI_ML_DL_080": "conceptual",
    "AI_ML_DL_081": "conceptual",
    "AI_ML_DL_085": "conceptual",
    "AI_ML_DL_091": "conceptual",
    "AI_ML_DL_093": "conceptual",
    "AI_ML_DL_099": "conceptual",
}

# Apply mappings
for q in questions:
    qid = q["id"]
    if qid in TYPE_MAP:
        q["question_type"] = TYPE_MAP[qid]

# Verify counts
type_counts = {}
for q in questions:
    t = q["question_type"]
    type_counts[t] = type_counts.get(t, 0) + 1

print("Updated Question Type Counts:")
for k, v in sorted(type_counts.items()):
    print(f"  {k}: {v}")

assert type_counts["conceptual"] == 30
assert type_counts["scenario_based"] == 25
assert type_counts["application_based"] == 15
assert type_counts["code_or_pseudocode"] == 10
assert type_counts["output_or_prediction"] == 5
assert type_counts["calculation_based"] == 10
assert type_counts["debugging_or_troubleshooting"] == 5

# Save back to questions.json
with open('questions.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

# Re-run assemble_ai_ml_dataset.py logic to update questions.js
COMPANY_POOLS = [
    ["TCS", "Accenture"],
    ["Capgemini", "Cognizant"],
    ["Infosys", "Wipro"],
    ["Deloitte", "LTIMindtree"],
    ["HCLTech", "Tech Mahindra"]
]

js_questions = []
for idx, q in enumerate(questions):
    is_scenario = (q["question_type"] in ["scenario_based", "application_based", "debugging_or_troubleshooting"])
    companies = COMPANY_POOLS[idx % len(COMPANY_POOLS)]
    
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

out_js = r"questions.js"
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

print("Successfully written questions.json and questions.js with verified 100% exact question mix!")
