import json

with open('questions.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

for q in qs:
    print(f"{q['id']} | {q['section'][:4]} | {q['difficulty'][:4]} | {q['question_type'][:10]} | {q['topic']} | {q['concept']}")
