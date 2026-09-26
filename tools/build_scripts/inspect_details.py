import json

data = json.load(open('questions.json', encoding='utf-8'))

for q in data:
    txt = q['question']
    has_code = "```" in txt or "code" in txt.lower() or "def " in txt or "import " in txt
    print(f"{q['id']} | curr_type: {q['question_type']} | topic: {q['topic']} | code: {has_code}")
