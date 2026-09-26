import json
import re

# Load all 100 questions from questions.json
with open('questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} questions")
