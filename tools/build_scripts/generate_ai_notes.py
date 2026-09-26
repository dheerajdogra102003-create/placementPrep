# generate_ai_notes.py - Assembles ai-ml-dl.html

from notes_css import get_notes_css
from notes_content_p1 import get_part1_html
from notes_content_p2 import get_part2_html
from notes_content_p3 import get_part3_html
from notes_content_p4 import get_part4_html
from notes_content_p5 import get_part5_html

css_content = get_notes_css()
p1 = get_part1_html()
p2 = get_part2_html()
p3 = get_part3_html()
p4 = get_part4_html()
p5 = get_part5_html()

full_html = f"""<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <script>
    (function () {{
      const theme = localStorage.getItem('placementPrep_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    }})();
  </script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VNQVXVYBN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-8VNQVXVYBN');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="AI, Machine Learning & Deep Learning Placement Revision Notes 2026 - Comprehensive high-yield technical notes, algorithms, math formulas, scenarios, and traps for MNC recruitment.">
  <title>AI, Machine Learning & Deep Learning Notes 2026 | PlacementPrep</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  
  <style>
{css_content}
  </style>
</head>
<body>

  <!-- Topbar -->
  <header class="topbar">
    <div class="nav-left">
      <a href="index.html" class="logo-icon" title="Notes Hub">🤖</a>
      <div class="brand">
        Placement<span>Prep</span>
        <small>AI / ML / DL Placement Notes</small>
      </div>
    </div>

    <div class="nav-actions">
      <a href="index.html" class="nav-btn">
        <span>←</span> <span class="hide-mobile">Notes Hub</span>
      </a>
      <a href="../ai_ml/index.html" class="nav-btn primary">
        <span>⚔️</span> <span>Practice 100 MCQs</span>
      </a>
      <button class="nav-btn last-hour-btn" id="lastHourBtn" title="Toggle Last-Hour High-Yield Mode">
        <span>⚡</span> <span>Last-Hour Mode</span>
      </button>
      <button class="icon-btn" id="themeBtn" title="Toggle dark/light theme">☾</button>
    </div>
  </header>

  <!-- Reading Progress Bar -->
  <div class="progress-bar-container">
    <div class="progress-bar" id="progressBar"></div>
  </div>

  <div class="layout-container">
    
    <!-- Sidebar / TOC -->
    <aside class="sidebar" id="sidebar">
      <input type="text" id="tocSearch" class="sidebar-search" placeholder="Search 25+ topics, math, traps..." oninput="filterTOC()">
      
      <nav class="toc-nav" id="tocNav">
        <div class="toc-group-title">Part 1: Artificial Intelligence</div>
        <a href="#sec-01" class="toc-link"><span>01. AI Fundamentals</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-02" class="toc-link"><span>02. Intelligent Agents</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-03" class="toc-link"><span>03. AI Search & A*</span> <span class="toc-badge">P1</span></a>

        <div class="toc-group-title">Part 2: Machine Learning Models</div>
        <a href="#sec-04" class="toc-link"><span>04. ML Paradigms</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-05" class="toc-link"><span>05. Data Preprocessing</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-06" class="toc-link"><span>06. Regression Models</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-07" class="toc-link"><span>07. Classification</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-08" class="toc-link"><span>08. Decision Trees</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-09" class="toc-link"><span>09. Random Forest</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-10" class="toc-link"><span>10. KNN (Nearest Neighbors)</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-11" class="toc-link"><span>11. Support Vector Machines</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-12" class="toc-link"><span>12. Clustering (K-Means)</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-13" class="toc-link"><span>13. PCA (Dimensionality)</span> <span class="toc-badge">P2</span></a>
        <a href="#sec-14" class="toc-link"><span>14. Ensemble & XGBoost</span> <span class="toc-badge">P1</span></a>

        <div class="toc-group-title">Part 3: Evaluation & Validation</div>
        <a href="#sec-15" class="toc-link"><span>15. Model Evaluation</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-16" class="toc-link"><span>16. Overfitting & L1/L2</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-17" class="toc-link"><span>17. Train / Val / Test</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-18" class="toc-link"><span>18. Feature Engineering</span> <span class="toc-badge">P1</span></a>

        <div class="toc-group-title">Part 4: Deep Learning</div>
        <a href="#sec-19" class="toc-link"><span>19. Neural Networks & Perceptron</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-20" class="toc-link"><span>20. Activation Functions</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-21" class="toc-link"><span>21. Loss Functions</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-22" class="toc-link"><span>22. Gradient Descent & Backprop</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-23" class="toc-link"><span>23. CNNs (Computer Vision)</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-24" class="toc-link"><span>24. RNN, LSTM & GRU</span> <span class="toc-badge">P1</span></a>
        <a href="#sec-25" class="toc-link"><span>25. Deep Learning Training</span> <span class="toc-badge">P1</span></a>

        <div class="toc-group-title">Master Placement Toolkits</div>
        <a href="#sec-algo-guide" class="toc-link"><span>⭐ Algorithm Selection Guide</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-traps" class="toc-link"><span>⚠️ 40 Fatal Placement Traps</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-scenarios" class="toc-link"><span>💼 30 Real-World Scenarios</span> <span class="toc-badge">P0</span></a>
        <a href="#sec-last-hour" class="toc-link"><span>⚡ 50 Exam Hall Takeaways</span> <span class="toc-badge">P0</span></a>
      </nav>
    </aside>

    <!-- Main Content Stream -->
    <main class="content-area">
      
      <!-- Notes Hero -->
      <section class="notes-hero">
        <div class="hero-chip">MNC Campus Recruitment 2026 Edition</div>
        <h1>AI, Machine Learning &amp;<br><span>Deep Learning Placement Notes</span></h1>
        <p>
          A battle-tested revision system designed for fresher technical examinations across TCS, Accenture, Infosys, Capgemini, Cognizant, Wipro, and Deloitte. Master algorithm intuition, core formulas, confusion matrix calculations, trade-offs, and fatal interview traps.
        </p>

        <div class="hero-metrics">
          <div class="metric-pill">Chapters: <strong>25 Major Sections</strong></div>
          <div class="metric-pill">Traps: <strong>40 Fatal Exam Pitfalls</strong></div>
          <div class="metric-pill">Scenarios: <strong>30 Enterprise Dilemmas</strong></div>
          <div class="metric-pill">Tables: <strong>15 Detailed Comparisons</strong></div>
        </div>

        <div class="hero-actions">
          <a href="#sec-01" class="nav-btn primary">Start Chapter 1 &darr;</a>
          <a href="#sec-last-hour" class="nav-btn last-hour-btn">⚡ 15-Minute Exam Cheat Sheet</a>
          <a href="../ai_ml/index.html" class="nav-btn">⚔️ Test Yourself: 100 MCQs</a>
        </div>
      </section>

      <!-- Part 1 Content -->
      {p1}

      <!-- Part 2 Content -->
      {p2}

      <!-- Part 3 Content -->
      {p3}

      <!-- Part 4 Content -->
      {p4}

      <!-- Part 5 Content -->
      {p5}

    </main>
  </div>

  <!-- Floating Back to Top Button -->
  <button class="back-top-btn" id="backTopBtn" title="Back to top" onclick="window.scrollTo({{ top: 0, behavior: 'smooth' }})">↑</button>

  <!-- Interactive Client-side Script -->
  <script>
    // Theme Toggle
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.addEventListener('click', () => {{
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      themeBtn.textContent = nextTheme === 'dark' ? '☾' : '☼';
      localStorage.setItem('placementPrep_theme', nextTheme);
      localStorage.setItem('placementprep-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    }});
    
    // Set initial theme icon
    const initTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeBtn.textContent = initTheme === 'dark' ? '☾' : '☼';

    // Reading Progress & Back to Top
    const progressBar = document.getElementById('progressBar');
    const backTopBtn = document.getElementById('backTopBtn');
    
    window.addEventListener('scroll', () => {{
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      progressBar.style.width = `${{progress}}%`;
      
      if (window.scrollY > 400) {{
        backTopBtn.classList.add('visible');
      }} else {{
        backTopBtn.classList.remove('visible');
      }}
    }});

    // TOC Active Scroll Spying
    const sections = document.querySelectorAll('.note-section');
    const tocLinks = document.querySelectorAll('.toc-link');

    window.addEventListener('scroll', () => {{
      let currentSecId = '';
      sections.forEach(sec => {{
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {{
          currentSecId = sec.getAttribute('id');
        }}
      }});

      tocLinks.forEach(link => {{
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${{currentSecId}}`) {{
          link.classList.add('active');
        }}
      }});
    }});

    // TOC Search Filter
    function filterTOC() {{
      const query = document.getElementById('tocSearch').value.toLowerCase().trim();
      tocLinks.forEach(link => {{
        const text = link.textContent.toLowerCase();
        if (text.includes(query) || query === '') {{
          link.style.display = 'flex';
        }} else {{
          link.style.display = 'none';
        }}
      }});
    }}

    // Last-Hour Mode Toggle
    const lastHourBtn = document.getElementById('lastHourBtn');
    let lastHourActive = false;
    lastHourBtn.addEventListener('click', () => {{
      lastHourActive = !lastHourActive;
      lastHourBtn.classList.toggle('active', lastHourActive);
      
      if (lastHourActive) {{
        // Scroll directly to the Last-Hour section
        document.getElementById('sec-last-hour').scrollIntoView({{ behavior: 'smooth' }});
      }}
    }});
  </script>
</body>
</html>
"""

output_path = r"d:\placementPrep\notes\ai-ml-dl.html"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_html)

print(f"Generated {output_path} successfully! File size: {len(full_html.encode('utf-8'))} bytes.")
