with open('ai-ml-dl.html', 'r', encoding='utf-8') as f:
    content = f.read()

print(f"File size: {len(content):,} characters")
print(f"Sections (<article class='note-section'): {content.count('class=\"note-section\"')}")
print(f"Traps (class='trap-box'): {content.count('class=\"trap-box\"')}")
print(f"Scenarios (class='scenario-box'): {content.count('class=\"scenario-box\"')}")
print(f"Comparison Tables (class='comp-table'): {content.count('class=\"comp-table\"')}")
print(f"Formula Blocks (class='formula-block'): {content.count('class=\"formula-block\"')}")
print(f"Interview Boxes (class='interview-box'): {content.count('class=\"interview-box\"')}")
print(f"Memory Tricks (class='memory-trick'): {content.count('class=\"memory-trick\"')}")
