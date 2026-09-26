# generate_git_notes.py
# Assembles the comprehensive Git & GitHub notes module into d:\placementPrep\notes\git-github.html

import os
from git_css import get_git_notes_css
from git_content_p1 import get_git_part1_html
from git_content_p2 import get_git_part2_html
from git_content_p3 import get_git_part3_html
from git_content_p4 import get_git_part4_html
from git_content_p5 import get_git_part5_html

def build_git_notes_page():
    css = get_git_notes_css()
    part1 = get_git_part1_html()
    part2 = get_git_part2_html()
    part3 = get_git_part3_html()
    part4 = get_git_part4_html()
    part5 = get_git_part5_html()

    html = f"""<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <script>
    (function () {{
      const theme = localStorage.getItem('placementPrep_theme');
      if (theme === 'light') {{
        document.documentElement.setAttribute('data-theme', 'light');
      }} else {{
        document.documentElement.setAttribute('data-theme', 'dark');
      }}
    }})();
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Git & GitHub Placement Revision Notes | PlacementPrep</title>
  <meta name="description" content="Comprehensive, interactive Git and GitHub revision notes for fresher technical placement exams and MNC interviews. 30 sections, 30+ scenarios, 35+ traps, 13 comparison tables.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
{css}
  </style>
</head>
<body>
  <!-- READING PROGRESS BAR -->
  <div class="progress-bar-container">
    <div class="progress-bar" id="progressBar"></div>
  </div>

  <!-- STICKY TOPBAR -->
  <header class="topbar">
    <div class="nav-left">
      <a href="index.html" class="logo-icon" title="Notes Hub">🐙</a>
      <div class="brand">
        Placement<span>Prep</span>
        <small>Git &amp; GitHub Notes</small>
      </div>
    </div>

    <div class="nav-actions">
      <a href="index.html" class="nav-btn">
        <span>←</span> <span class="hide-mobile">Notes Hub</span>
      </a>
      <a href="../github/index.html" class="nav-btn primary">
        <span>💻</span> <span>Practice App</span>
      </a>
      <button class="nav-btn last-hour-btn" id="lastHourToggle" onclick="toggleLastHourMode()" title="Toggle Last-Hour High-Yield Mode">
        <span>⚡</span> <span>Last-Hour Mode</span>
      </button>
      <a href="#master-interview" class="nav-btn">
        <span>🎙️</span> <span class="hide-mobile">Interview Q&amp;A</span>
      </a>
      <button class="icon-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle Light/Dark Theme">
        🌓
      </button>
    </div>
  </header>

  <!-- MAIN LAYOUT CONTAINER (SIDEBAR + MAIN STREAM) -->
  <div class="layout-container">

    <!-- STICKY TOC SIDEBAR -->
    <aside class="sidebar" id="sidebar">
      <input type="text" id="tocFilter" class="sidebar-search" placeholder="Filter 30 topics, traps..." oninput="filterTOC()">

      <nav class="toc-nav" id="tocList">
        <div class="toc-group-title">Part 1: Core Architecture</div>
        <a href="#sec-01" class="toc-link" data-title="git fundamentals dvcs"><span class="toc-num">01. Git Fundamentals</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-02" class="toc-link" data-title="git vs github"><span class="toc-num">02. Git vs GitHub</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-03" class="toc-link" data-title="version control systems cvcs dvcs"><span class="toc-num">03. VCS (CVCS vs DVCS)</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-04" class="toc-link" data-title="installation and configuration global local"><span class="toc-num">04. Installation &amp; Config</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-05" class="toc-link" data-title="git repository .git"><span class="toc-num">05. Git Repository (.git)</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-06" class="toc-link" data-title="three areas working directory staging repository"><span class="toc-num">06. Three-Area Architecture</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-07" class="toc-link" data-title="basic commands init add commit"><span class="toc-num">07. Basic Commands</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-08" class="toc-link" data-title="git status git log"><span class="toc-num">08. Status &amp; Log</span> <span class="toc-badge">P0</span></a>

        <div class="toc-group-title">Part 2: Branching &amp; Merging</div>
        <a href="#sec-09" class="toc-link" data-title="commit anatomy head sha"><span class="toc-num">09. Commit Anatomy &amp; HEAD</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-10" class="toc-link" data-title="branching pointers switch checkout"><span class="toc-num">10. Branching Mechanics</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-11" class="toc-link" data-title="merging fast-forward 3-way"><span class="toc-num">11. Merging Types</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-12" class="toc-link" data-title="merge conflicts markers resolution"><span class="toc-num">12. Merge Conflicts</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-13" class="toc-link" data-title="remote repository origin"><span class="toc-num">13. Remote Repositories</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-14" class="toc-link" data-title="git push git pull upstream"><span class="toc-num">14. Git Push &amp; Pull</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-15" class="toc-link" data-title="git fetch remote-tracking"><span class="toc-num">15. Git Fetch</span> <span class="toc-badge">P1</span></a>

        <div class="toc-group-title">Part 3: Advanced Operations</div>
        <a href="#sec-16" class="toc-link" data-title="git clone onboarding"><span class="toc-num">16. Git Clone</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-17" class="toc-link" data-title="pull vs fetch equation"><span class="toc-num">17. Pull vs Fetch</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-18" class="toc-link" data-title="checkout vs switch"><span class="toc-num">18. Checkout vs Switch</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-19" class="toc-link" data-title="git restore unstaging"><span class="toc-num">19. Git Restore</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-20" class="toc-link" data-title="git reset soft mixed hard"><span class="toc-num">20. Git Reset</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-21" class="toc-link" data-title="git revert safe undo"><span class="toc-num">21. Git Revert</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-22" class="toc-link" data-title="reset vs revert comparison"><span class="toc-num">22. Reset vs Revert</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-23" class="toc-link" data-title="git stash wip"><span class="toc-num">23. Git Stash</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-24" class="toc-link" data-title="git diff staged unstaged"><span class="toc-num">24. Git Diff</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-25" class="toc-link" data-title="git tags releases"><span class="toc-num">25. Git Tags</span> <span class="toc-badge">P2</span></a>

        <div class="toc-group-title">Part 4: Enterprise Workflows</div>
        <a href="#sec-26" class="toc-link" data-title="github pull requests code review"><span class="toc-num">26. GitHub Pull Requests</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-27" class="toc-link" data-title="github issues keywords"><span class="toc-num">27. GitHub Issues</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-28" class="toc-link" data-title="fork vs clone open source"><span class="toc-num">28. Fork vs Clone</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-29" class="toc-link" data-title="github actions ci cd"><span class="toc-num">29. GitHub Actions</span> <span class="toc-badge">P2</span></a>
        <a href="#sec-30" class="toc-link" data-title="enterprise git workflow"><span class="toc-num">30. Enterprise Workflow</span> <span class="toc-badge">P0</span></a>

        <div class="toc-group-title">Master Placement Toolkits</div>
        <a href="#master-comparisons" class="toc-link" data-title="13 comparison tables matrix"><span class="toc-num">📊 13 Comparison Tables</span> <span class="toc-badge">P0</span></a>
        <a href="#master-scenarios" class="toc-link" data-title="30 real world scenarios problem solving"><span class="toc-num">🛠️ 30+ Scenarios</span> <span class="toc-badge">P0</span></a>
        <a href="#master-traps" class="toc-link" data-title="35 fatal placement traps exam pitfalls"><span class="toc-num">⚠️ 35+ Fatal Traps</span> <span class="toc-badge">P0</span></a>
        <a href="#master-cheatsheet" class="toc-link" data-title="cli command cheat sheet reference"><span class="toc-num">📋 Command Reference</span> <span class="toc-badge">P0</span></a>
        <a href="#master-interview" class="toc-link" data-title="16 interview questions spoken answers"><span class="toc-num">🎙️ 16 Interview Q&amp;As</span> <span class="toc-badge">P0</span></a>
        <a href="#master-lasthour" class="toc-link" data-title="last hour revision 15 minutes"><span class="toc-num">⚡ Git in 15 Minutes</span> <span class="toc-badge">P0</span></a>
      </nav>
    </aside>

    <!-- MAIN CONTENT STREAM -->
    <main class="content-area">

      <!-- HERO SECTION -->
      <section class="notes-hero">
        <div class="hero-chip">MNC TECHNICAL RECRUITMENT • PLACEMENT PREPARATION</div>
        <h1><span>GIT &amp; GITHUB</span> REVISION NOTES</h1>
        <p>
          Understand the workflow. Master the commands. Crack technical interviews. From your first commit to collaborative enterprise pull requests. Structured with 30 comprehensive sections, 30+ real production scenarios, 35+ fatal exam traps, 13 side-by-side comparison tables, and a 15-minute last-hour revision cram mode for TCS, Accenture, Cognizant, Infosys, and Deloitte.
        </p>

        <!-- Metric Badges -->
        <div class="hero-metrics">
          <span class="metric-pill">Sections: <strong>30</strong></span>
          <span class="metric-pill">Scenarios: <strong>30+</strong></span>
          <span class="metric-pill">Placement Traps: <strong>35+</strong></span>
          <span class="metric-pill">Comparison Tables: <strong>13+</strong></span>
          <span class="metric-pill">Interview Q&amp;As: <strong>16</strong></span>
        </div>

        <!-- Action CTAs -->
        <div class="hero-actions">
          <a href="#sec-01" class="nav-btn primary">Start Learning</a>
          <a href="#master-lasthour" class="nav-btn last-hour-btn">⚡ Git in 15 Minutes</a>
          <a href="#master-scenarios" class="nav-btn">🛠️ 30+ Scenarios</a>
          <a href="../github/index.html" class="nav-btn" style="border-color: var(--git-orange); color: var(--git-orange);">💻 Practice App</a>
        </div>
      </section>

{part1}
{part2}
{part3}
{part4}
{part5}

      <!-- FOOTER -->
      <footer style="margin-top: 5rem; padding: 3rem 0; border-top: 1px solid var(--border); text-align: center;">
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">
          PlacementPrep — Designed for Fresher Technical Recruitment (Accenture, TCS, Cognizant, Infosys, Deloitte, Wipro).
        </p>
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
          <a href="index.html" style="color: var(--git-orange); text-decoration: none; font-weight: 600;">← All Notes Modules</a>
          <a href="../github/index.html" style="color: var(--git-orange); text-decoration: none; font-weight: 600;">💻 Practice Git MCQs</a>
          <a href="#progressBar" style="color: var(--text-muted); text-decoration: none;">↑ Back to Top</a>
        </div>
      </footer>
    </main>
  </div>

  <!-- FLOATING BACK TO TOP BUTTON -->
  <button class="back-top-btn" id="backTopBtn" onclick="window.scrollTo({{ top: 0, behavior: 'smooth' }})" title="Back to top">↑</button>

  <!-- JAVASCRIPT -->
  <script>
    // 1. Reading Progress Bar & Back to Top visibility
    window.addEventListener('scroll', () => {{
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = progress + '%';

      const backBtn = document.getElementById('backTopBtn');
      if (backBtn) {{
        if (window.pageYOffset > 400) {{
          backBtn.classList.add('visible');
        }} else {{
          backBtn.classList.remove('visible');
        }}
      }}
    }});

    // 2. Active Section Highlight in Sidebar
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('.toc-link').forEach(link => {{
            if (link.getAttribute('href') === '#' + id) {{
              link.classList.add('active');
            }} else {{
              link.classList.remove('active');
            }}
          }});
        }}
      }});
    }}, {{ rootMargin: '-100px 0px -70% 0px' }});

    document.querySelectorAll('.note-section').forEach(sec => observer.observe(sec));

    // 3. Filter Table of Contents
    function filterTOC() {{
      const query = (document.getElementById('tocFilter').value || '').toLowerCase();
      const links = document.querySelectorAll('.toc-link');
      links.forEach(link => {{
        const title = link.getAttribute('data-title') || '';
        const text = link.textContent.toLowerCase();
        if (title.includes(query) || text.includes(query)) {{
          link.style.display = 'flex';
        }} else {{
          link.style.display = 'none';
        }}
      }});
    }}

    // 4. Copy Code Snippet
    function copyCode(btn) {{
      const block = btn.closest('.terminal-block');
      if (!block) return;
      const code = block.querySelector('code') || block.querySelector('.term-cmd');
      const textToCopy = (code ? code.innerText : '').replace(/\\$/g, '').trim();
      navigator.clipboard.writeText(textToCopy).then(() => {{
        const orig = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.color = 'var(--git-orange)';
        setTimeout(() => {{
          btn.innerText = orig;
          btn.style.color = '';
        }}, 2000);
      }});
    }}

    // 5. Toggle Last-Hour Mode
    let lastHourActive = false;
    function toggleLastHourMode() {{
      lastHourActive = !lastHourActive;
      const btn = document.getElementById('lastHourToggle');
      if (lastHourActive) {{
        if (btn) {{
          btn.classList.add('active');
          btn.innerHTML = '<span>✓</span> <span>Last-Hour Active</span>';
        }}
        const target = document.getElementById('master-lasthour');
        if (target) {{
          target.scrollIntoView({{ behavior: 'smooth' }});
          target.style.boxShadow = '0 0 35px rgba(240, 80, 50, 0.4)';
          setTimeout(() => {{ target.style.boxShadow = ''; }}, 2500);
        }}
      }} else {{
        if (btn) {{
          btn.classList.remove('active');
          btn.innerHTML = '<span>⚡</span> <span>Last-Hour Mode</span>';
        }}
      }}
    }}

    // 6. Theme Toggle (Sync with placementPrep_theme)
    function toggleTheme() {{
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('placementPrep_theme', next);
    }}
  </script>
</body>
</html>
"""
    # Write directly to d:\placementPrep\notes\git-github.html
    target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "notes", "git-github.html"))
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Successfully generated Git & GitHub Notes at: {target_path}")

if __name__ == "__main__":
    build_git_notes_page()
