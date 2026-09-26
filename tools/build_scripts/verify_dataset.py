import json
from collections import Counter

data = json.load(open('questions.json', encoding='utf-8'))

print("=== FINAL DATASET VALIDATION REPORT ===")
print(f"Total Questions: {len(data)}")
assert len(data) == 100

# Section checks
sections = Counter(q['section'] for q in data)
print("\nSections:")
for k, v in sections.items():
    print(f"  {k}: {v}")
assert sections["Artificial Intelligence"] == 20
assert sections["Machine Learning"] == 50
assert sections["Deep Learning"] == 30

# Difficulty checks
diffs = Counter(q['difficulty'] for q in data)
print("\nDifficulties:")
for k, v in diffs.items():
    print(f"  {k}: {v}")
assert diffs["Easy"] == 15
assert diffs["Medium"] == 50
assert diffs["Hard"] == 35

# Question Mix checks
mix = Counter(q['question_type'] for q in data)
print("\nQuestion Mix:")
for k, v in sorted(mix.items()):
    print(f"  {k}: {v}")
assert mix["conceptual"] == 30
assert mix["scenario_based"] == 25
assert mix["application_based"] == 15
assert mix["code_or_pseudocode"] == 10
assert mix["output_or_prediction"] == 5
assert mix["calculation_based"] == 10
assert mix["debugging_or_troubleshooting"] == 5

# Option and explanation checks
for q in data:
    assert set(q['options'].keys()) == {"A", "B", "C", "D"}
    assert q['correct_answer'] in {"A", "B", "C", "D"}
    assert len(q['why_other_options_are_wrong']) == 3
    for opt in ["A", "B", "C", "D"]:
        if opt != q['correct_answer']:
            assert opt in q['why_other_options_are_wrong'], f"Missing why-wrong explanation for {opt} in {q['id']}"
    assert len(q['explanation']) > 15
    assert len(q['placement_tip']) > 10

print("\nALL ASSERTIONS PASSED WITH 100% ACCURACY!")
