# verify_stats.py
import re

with open(r'd:\placementPrep\notes\git-github.html', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.findall(r'id="sec-(\d+)"', text)
scenarios = re.findall(r'SCENARIO \d+', text)
traps = re.findall(r'Trap \d+', text)
tables = re.findall(r'<table', text)
interviews = re.findall(r'class="interview-q"', text)

print(f"Total HTML Size: {len(text):,} bytes ({len(text)/1024:.1f} KB)")
print(f"Total Lines: {len(text.splitlines()):,}")
print(f"Numbered Sections (sec-01 to sec-30): {len(sections)}")
print(f"Scenarios Count: {len(scenarios)}")
print(f"Placement Traps Count: {len(traps)}")
print(f"Comparison Tables Count: {len(tables)}")
print(f"Interview Q&As Count: {len(interviews)}")
