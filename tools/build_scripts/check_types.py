import json
from collections import Counter

data = json.load(open('questions.json', encoding='utf-8'))
types = Counter(q['question_type'] for q in data)
print("Current question types:", types)
