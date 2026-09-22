"""
Master Builder for MNC Placement Cybersecurity Final-Day Notes 2026
Outputs: d:/placementPrep/notes/cybersecurity.html
"""

import os
import sys

from cyber_notes_part1 import get_section_1_to_6_html
from cyber_notes_part2 import get_section_7_to_10_html
from cyber_notes_part3 import get_section_11_to_12_html
from cyber_notes_part4 import get_section_13_to_17_html

def build_full_notes_html():
    sec_1_6 = get_section_1_to_6_html()
    sec_7_10 = get_section_7_to_10_html()
    sec_11_12 = get_section_11_to_12_html()
    sec_13_17 = get_section_13_to_17_html()

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
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
<meta name="description" content="Cybersecurity Placement Final-Day Notes 2026 - High-yield technical revision for MNC technical tests and interviews.">
<title>Cybersecurity Placement Notes 2026 | PlacementPrep</title>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">

<style>
:root {{
  --bg: #F4F7FB;
  --card: #FFFFFF;
  --card2: #EDF2F7;
  --card3: #E2E8F0;
  --text: #0F172A;
  --muted: #64748B;
  --border: #E2E8F0;
  --teal: #0D9488;
  --teal-hover: #0F766E;
  --teal-light: rgba(13, 148, 136, 0.1);
  --cyan: #0284C7;
  --emerald: #059669;
  --amber: #D97706;
  --red: #DC2626;
  --purple: #7C3AED;
  --shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
  --radius: 18px;
  --font: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}}

body.dark {{
  --bg: #060B14;
  --card: #0B1322;
  --card2: #111C30;
  --card3: #1A2842;
  --text: #F1F5F9;
  --muted: #94A3B8;
  --border: #1E2D4A;
  --teal: #14B8A6;
  --teal-hover: #2DD4BF;
  --teal-light: rgba(20, 184, 166, 0.15);
  --cyan: #38BDF8;
  --emerald: #10B981;
  --amber: #FBBF24;
  --red: #EF4444;
  --purple: #C084FC;
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.5);
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html {{ scroll-behavior: smooth; }}
body {{
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background .25s ease, color .25s ease;
  min-height: 100vh;
}}

button, input, select {{ font: inherit; }}
button {{ cursor: pointer; }}
a {{ text-decoration: none; color: inherit; }}

/* Topbar */
.topbar {{
  position: fixed; top: 0; left: 0; right: 0; height: 68px; z-index: 1000;
  display: flex; align-items: center; padding: 0 24px;
  background: color-mix(in srgb, var(--card) 88%, transparent);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}}
.nav-left {{ display: flex; align-items: center; gap: 12px; }}
.brand {{ display: flex; align-items: center; gap: 11px; font-weight: 850; font-size: 16px; }}
.logo {{
  width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center;
  color: #fff; background: linear-gradient(135deg, #0D9488, #0284C7);
  box-shadow: 0 8px 22px rgba(13, 148, 136, .25); font-size: 20px;
}}
.brand small {{ display: block; color: var(--muted); font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }}
.nav-actions {{ margin-left: auto; display: flex; gap: 10px; align-items: center; }}
.nav-btn {{
  display: inline-flex; align-items: center; gap: 6px; padding: 0 14px; height: 40px;
  border: 1px solid var(--border); background: var(--card); color: var(--text);
  border-radius: 11px; font-size: 12px; font-weight: 700; transition: .2s;
}}
.nav-btn:hover {{ border-color: var(--teal); color: var(--teal); transform: translateY(-2px); }}
.nav-btn.primary {{
  background: linear-gradient(135deg, #0D9488, #0284C7);
  color: #fff; border: 0; box-shadow: 0 4px 16px rgba(13, 148, 136, .3);
}}
.nav-btn.primary:hover {{ opacity: .95; color: #fff; }}
.icon-btn {{
  width: 40px; height: 40px; border: 1px solid var(--border); background: var(--card);
  color: var(--text); border-radius: 11px; transition: .2s; display: grid; place-items: center; font-size: 16px;
}}
.icon-btn:hover {{ border-color: var(--teal); transform: translateY(-2px); }}

/* Layout */
.layout {{ padding-top: 68px; display: flex; }}
.sidebar {{
  position: fixed; top: 68px; left: 0; bottom: 0; width: 280px; z-index: 500;
  background: var(--card); border-right: 1px solid var(--border); padding: 20px 14px; overflow-y: auto;
}}
.side-label {{
  color: var(--muted); font-size: 10px; text-transform: uppercase; letter-spacing: 1.2px;
  font-weight: 850; padding: 10px 11px 6px;
}}
.side-search {{
  width: 100%; padding: 8px 12px; border-radius: 9px; border: 1px solid var(--border);
  background: var(--card2); color: var(--text); font-size: 12px; margin-bottom: 12px; outline: none;
}}
.side-search:focus {{ border-color: var(--teal); }}
.side-link {{
  display: flex; gap: 8px; align-items: center; padding: 8px 10px; margin: 2px 0; border-radius: 9px;
  color: var(--muted); font-size: 12px; font-weight: 600; transition: .2s; line-height: 1.3;
}}
.side-link:hover {{ background: var(--card2); color: var(--text); }}
.side-link.active {{ background: var(--teal-light); color: var(--teal); font-weight: 750; }}
.side-num {{
  width: 20px; height: 20px; border-radius: 6px; background: var(--card2);
  display: grid; place-items: center; font-size: 9px; font-family: var(--font-mono); flex: none;
}}
.side-link.active .side-num {{ background: var(--teal); color: #fff; }}

.main {{ margin-left: 280px; flex: 1; max-width: 1400px; padding: 34px clamp(18px, 4vw, 56px); }}

/* Hero */
.hero {{
  position: relative; overflow: hidden; border-radius: 28px; padding: clamp(30px, 5vw, 56px);
  background: linear-gradient(135deg, #060B14 0%, #0B1322 55%, #0F2D37 100%);
  color: #fff; box-shadow: var(--shadow); margin-bottom: 34px; border: 1px solid rgba(20, 184, 166, 0.2);
}}
.eyebrow {{
  display: inline-flex; align-items: center; gap: 7px; padding: 5px 12px; border: 1px solid rgba(20, 184, 166, 0.4);
  border-radius: 999px; background: rgba(20, 184, 166, 0.15); font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: #2DD4BF;
}}
.hero h1 {{ font-size: clamp(30px, 4.5vw, 52px); line-height: 1.08; letter-spacing: -1.8px; margin: 18px 0 14px; font-weight: 900; }}
.hero h1 span {{ color: #2DD4BF; }}
.hero p {{ max-width: 800px; color: #CBD5E1; font-size: 15px; line-height: 1.6; }}
.hero-tags {{ display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }}
.hero-tag {{ padding: 5px 10px; border-radius: 8px; background: rgba(255, 255, 255, 0.08); font-size: 11px; font-weight: 600; color: #E2E8F0; }}
.hero-bottom {{ display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }}
.hero-btn {{
  display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 11px;
  font-size: 13px; font-weight: 750; background: var(--teal); color: #fff; transition: .2s;
}}
.hero-btn:hover {{ background: var(--teal-hover); transform: translateY(-2px); }}
.hero-btn.outline {{ background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); }}
.hero-btn.outline:hover {{ background: rgba(255, 255, 255, 0.2); }}

/* Sections */
.note-section {{ margin-bottom: 48px; scroll-margin-top: 88px; }}
.sec-header {{ display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }}
.sec-badge {{
  padding: 4px 10px; border-radius: 999px; background: var(--teal-light); color: var(--teal);
  font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px;
}}
.sec-header h2 {{ font-size: 24px; font-weight: 800; letter-spacing: -0.6px; color: var(--text); }}

.note-card {{
  background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
  padding: clamp(20px, 3vw, 32px); box-shadow: var(--shadow);
}}
.lead-text {{ font-size: 15px; color: var(--text); line-height: 1.6; margin-bottom: 18px; }}

/* Tables */
.table-responsive {{ overflow-x: auto; width: 100%; margin: 16px 0; border-radius: 12px; border: 1px solid var(--border); }}
.data-table {{ width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }}
.data-table th, .data-table td {{ padding: 12px 16px; border-bottom: 1px solid var(--border); vertical-align: top; }}
.data-table th {{ background: var(--card2); font-weight: 800; color: var(--text); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }}
.data-table tbody tr:last-child td {{ border-bottom: none; }}
.data-table tbody tr:hover {{ background: var(--card2); }}
.data-table.compact th, .data-table.compact td {{ padding: 10px 12px; font-size: 12.5px; }}

/* Priority Badges */
.badge-priority {{ display: inline-block; padding: 3px 8px; border-radius: 6px; font-size: 10.5px; font-weight: 800; }}
.badge-priority.p0 {{ background: rgba(220, 38, 38, 0.15); color: var(--red); }}
.badge-priority.p1 {{ background: rgba(217, 119, 6, 0.15); color: var(--amber); }}
.badge-priority.p2 {{ background: rgba(13, 148, 136, 0.15); color: var(--teal); }}
.badge-priority.p3 {{ background: var(--card3); color: var(--muted); }}

/* Grids */
.grid-2-col {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }}
.grid-3-col {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }}
@media(max-width: 900px) {{
  .grid-2-col, .grid-3-col {{ grid-template-columns: 1fr; }}
  .sidebar {{ display: none; }}
  .main {{ margin-left: 0; padding: 24px 16px; }}
}}

/* Boxes */
.info-box {{
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 18px;
}}
.info-box.accent {{ border-color: var(--teal); background: var(--teal-light); }}
.info-box h4, .info-box h5 {{ font-size: 14px; font-weight: 800; margin-bottom: 10px; color: var(--text); }}
.styled-list {{ padding-left: 18px; font-size: 13px; line-height: 1.6; color: var(--text); }}
.styled-list li {{ margin-bottom: 8px; }}
.bullet-list {{ list-style: none; }}
.bullet-list li {{ position: relative; padding-left: 16px; margin-bottom: 8px; font-size: 13px; }}
.bullet-list li::before {{ content: "•"; position: absolute; left: 0; color: var(--teal); font-weight: bold; }}

/* Mnemonics & Banners */
.mnemonic-banner {{
  display: flex; align-items: center; gap: 12px; background: var(--teal-light);
  border: 1px solid var(--teal); border-radius: 12px; padding: 14px 18px; font-size: 14px;
}}
.mnemonic-icon {{ font-size: 22px; }}
.mnemonic-banner code {{
  background: var(--card); padding: 3px 7px; border-radius: 6px; font-family: var(--font-mono); font-weight: 700; color: var(--teal);
}}

/* Scenario Mini Cards */
.scenario-mini-card {{
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 14px;
  display: flex; flex-direction: column; justify-content: space-between;
}}
.scen-title {{ font-weight: 750; font-size: 13.5px; margin-bottom: 6px; }}
.scenario-mini-card p {{ font-size: 12.5px; color: var(--muted); margin-bottom: 10px; }}
.scen-verdict {{
  display: inline-block; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 800; align-self: flex-start;
}}
.scen-verdict.confidentiality {{ background: rgba(2, 132, 199, 0.15); color: var(--cyan); }}
.scen-verdict.integrity {{ background: rgba(16, 185, 129, 0.15); color: var(--emerald); }}
.scen-verdict.availability {{ background: rgba(220, 38, 38, 0.15); color: var(--red); }}
.scen-verdict.multi {{ background: rgba(124, 58, 237, 0.15); color: var(--purple); }}

/* Crypto Flow Banner */
.crypto-flow-banner {{
  display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px;
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 14px; font-size: 13px; font-weight: 700;
}}
.flow-step {{ padding: 6px 12px; border-radius: 8px; background: var(--card); border: 1px solid var(--border); }}
.flow-step.cipher {{ background: var(--teal-light); color: var(--teal); border-color: var(--teal); }}
.flow-arrow {{ color: var(--muted); font-size: 12px; }}

.concept-card {{
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 18px;
}}
.concept-card-head {{
  display: inline-block; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 10px;
}}
.concept-card-head.cyan {{ background: rgba(2, 132, 199, 0.15); color: var(--cyan); }}
.concept-card-head.purple {{ background: rgba(124, 58, 237, 0.15); color: var(--purple); }}
.concept-card-head.emerald {{ background: rgba(16, 185, 129, 0.15); color: var(--emerald); }}
.mini-bullets {{ list-style: none; margin-top: 10px; }}
.mini-bullets li {{ position: relative; padding-left: 14px; font-size: 12px; margin-bottom: 6px; color: var(--muted); }}
.mini-bullets li::before {{ content: "•"; position: absolute; left: 0; color: var(--teal); font-weight: bold; }}

/* Traps Grid */
.trap-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }}
@media(max-width: 800px) {{ .trap-grid {{ grid-template-columns: 1fr; }} }}
.trap-card {{
  background: var(--card2); border: 1px solid var(--border); border-left: 4px solid var(--red);
  border-radius: 10px; padding: 14px 16px; font-size: 12.5px;
}}
.trap-head {{ font-weight: 800; font-size: 13.5px; color: var(--red); margin-bottom: 6px; }}
.trap-card p {{ margin-bottom: 4px; }}

/* MCQ Patterns */
.mcq-pattern-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }}
@media(max-width: 850px) {{ .mcq-pattern-grid {{ grid-template-columns: 1fr; }} }}
.mcq-pattern-card {{
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 16px;
}}
.pattern-badge {{
  display: inline-block; padding: 3px 8px; border-radius: 6px; background: var(--teal-light);
  color: var(--teal); font-weight: 800; font-size: 11px; text-transform: uppercase; margin-bottom: 8px;
}}
.pattern-desc {{ font-size: 12.5px; color: var(--muted); margin-bottom: 12px; }}
.mcq-example {{
  background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 10px 12px; font-size: 12px; line-height: 1.5;
}}
.mcq-correct {{ color: var(--emerald); font-weight: 750; }}

/* QA Items */
.interview-subhead {{ font-size: 18px; font-weight: 800; margin-bottom: 16px; color: var(--teal); }}
.qa-accordion-list {{ display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; }}
.qa-item {{
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px;
}}
.qa-q {{ font-weight: 800; font-size: 14.5px; color: var(--text); margin-bottom: 8px; }}
.qa-a p {{ font-size: 13px; line-height: 1.6; margin-bottom: 10px; color: var(--text); }}
.qa-meta {{
  background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 8px 12px;
  font-size: 12px; line-height: 1.5; color: var(--muted);
}}
.qa-key {{ color: var(--teal); font-weight: 700; }}
.qa-trap {{ color: var(--red); font-weight: 700; }}
.qa-follow {{ color: var(--purple); font-weight: 700; }}

/* Speech Cards */
.speech-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }}
@media(max-width: 850px) {{ .speech-grid {{ grid-template-columns: 1fr; }} }}
.speech-card {{
  background: var(--card2); border: 1px solid var(--border); border-radius: 12px; padding: 18px;
}}
.speech-title {{ font-size: 14px; font-weight: 800; color: var(--teal); margin-bottom: 8px; }}
.speech-text {{ font-size: 13px; line-height: 1.6; color: var(--text); }}

/* Fast Lists */
.fast-list {{ list-style: none; font-size: 12.5px; line-height: 1.6; }}
.fast-list li {{ margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px dashed var(--border); }}
.fast-list li:last-child {{ border-bottom: none; }}

/* Rapid Table */
.rapid-fire-table {{
  display: flex; flex-direction: column; gap: 8px;
}}
.rapid-row {{
  display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;
  background: var(--card2); border: 1px solid var(--border); border-radius: 8px; font-size: 12.5px;
}}
.rapid-row span {{ color: var(--muted); }}
.rapid-row strong {{ color: var(--teal); }}

/* Exam Hall Cheat Sheet */
.highlight-card {{
  border: 2px solid var(--teal); background: var(--teal-light);
}}
.exam-hall-banner h3 {{ font-size: 18px; font-weight: 800; color: var(--teal); margin-bottom: 6px; }}
.exam-hall-banner p {{ font-size: 13px; color: var(--muted); margin-bottom: 16px; }}
.hall-cheat-grid {{ display: flex; flex-direction: column; gap: 8px; }}
.hall-item {{
  background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 8px 14px;
  font-size: 13px; font-weight: 600;
}}
.hall-item code {{ color: var(--teal); font-family: var(--font-mono); font-weight: 800; margin-right: 6px; }}

</style>
</head>

<body>

<!-- Header Navigation -->
<header class="topbar">
  <div class="nav-left">
    <a href="../index.html" class="logo" title="Back to PlacementPrep Dashboard">🛡️</a>
    <div class="brand">
      Placement<span>Prep</span>
      <small>Final-Day Cybersecurity Revision</small>
    </div>
  </div>

  <div class="nav-actions">
    <a href="../cyber_security/index.html" class="nav-btn primary">
      <span>⚡</span> Practice 100 MCQs
    </a>
    <a href="index.html" class="nav-btn">
      <span>📚</span> All Notes
    </a>
    <a href="../index.html" class="nav-btn">
      <span>←</span> Dashboard
    </a>
    <button class="icon-btn" id="themeBtn" title="Toggle theme">☾</button>
  </div>
</header>

<div class="layout">
  
  <!-- Left Navigation Sidebar -->
  <aside class="sidebar">
    <div class="side-label">Quick Jump to Section</div>
    <input type="text" id="sideFilter" class="side-search" placeholder="Search concept...">
    
    <nav id="sideNav">
      <a href="#sec-1" class="side-link active"><span class="side-num">01</span> How to Use Notes</a>
      <a href="#sec-2" class="side-link"><span class="side-num">02</span> Priority Roadmap</a>
      <a href="#sec-3" class="side-link"><span class="side-num">03</span> CIA Triad (P0)</a>
      <a href="#sec-4" class="side-link"><span class="side-num">04</span> Cryptography &amp; PKI</a>
      <a href="#sec-5" class="side-link"><span class="side-num">05</span> Cyber Attacks</a>
      <a href="#sec-6" class="side-link"><span class="side-num">06</span> Firewalls &amp; Devices</a>
      <a href="#sec-7" class="side-link"><span class="side-num">07</span> Comparison Tables</a>
      <a href="#sec-8" class="side-link"><span class="side-num">08</span> DO NOT CONFUSE</a>
      <a href="#sec-9" class="side-link"><span class="side-num">09</span> 40 Scenarios</a>
      <a href="#sec-10" class="side-link"><span class="side-num">10</span> Placement Patterns</a>
      <a href="#sec-11" class="side-link"><span class="side-num">11</span> 80 Interview Q&amp;A</a>
      <a href="#sec-12" class="side-link"><span class="side-num">12</span> 30-Second Answers</a>
      <a href="#sec-13" class="side-link"><span class="side-num">13</span> 60-Minute Sprint</a>
      <a href="#sec-14" class="side-link"><span class="side-num">14</span> 30-Minute Sprint</a>
      <a href="#sec-15" class="side-link"><span class="side-num">15</span> 10-Minute Sprint</a>
      <a href="#sec-16" class="side-link"><span class="side-num">16</span> 5-Min Exam Hall</a>
      <a href="#sec-17" class="side-link"><span class="side-num">17</span> Source Map</a>
    </nav>
  </aside>

  <!-- Main Content Area -->
  <main class="main">
    
    <!-- Hero Banner -->
    <header class="hero">
      <div class="eyebrow">⚡ Placement Survival System 2026</div>
      <h1>MNC Placement <span>Cybersecurity</span><br>Final-Day Revision Notes</h1>
      <p>
        The ultimate high-yield revision system for entry-level engineering drives. Master Network Security, the CIA Triad, Cryptography, Firewalls, Web Vulnerabilities, 40 real-world scenarios, and 80 spoke-ready technical interview answers.
      </p>

      <div class="hero-tags">
        <span class="hero-tag">Accenture</span>
        <span class="hero-tag">TCS NQT</span>
        <span class="hero-tag">Capgemini</span>
        <span class="hero-tag">Infosys</span>
        <span class="hero-tag">Wipro</span>
        <span class="hero-tag">Cognizant</span>
        <span class="hero-tag">HCLTech</span>
        <span class="hero-tag">Deloitte</span>
        <span class="hero-tag">IBM</span>
        <span class="hero-tag">LTIMindtree</span>
      </div>

      <div class="hero-bottom">
        <a href="#sec-16" class="hero-btn">🚀 5-Min Exam-Hall Cheat Sheet</a>
        <a href="#sec-12" class="hero-btn outline">🎙️ 30-Sec Interview Answers</a>
        <a href="../cyber_security/index.html" class="hero-btn outline">🎯 Practice 100 MCQs</a>
      </div>
    </header>

    <!-- SECTION CONTENT INJECTIONS -->
    {sec_1_6}
    {sec_7_10}
    {sec_11_12}
    {sec_13_17}

  </main>
</div>

<script>
// Theme Management
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('placementprep-theme') || 'dark';
if (savedTheme === 'dark') {{
  document.body.classList.add('dark');
  themeBtn.textContent = '☼';
}} else {{
  document.body.classList.remove('dark');
  themeBtn.textContent = '☾';
}}

themeBtn.addEventListener('click', () => {{
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('placementprep-theme', isDark ? 'dark' : 'light');
  themeBtn.textContent = isDark ? '☼' : '☾';
}});

// Sidebar Active Highlight on Scroll
const sections = document.querySelectorAll('.note-section');
const sideLinks = document.querySelectorAll('.side-link');

window.addEventListener('scroll', () => {{
  let currentSecId = '';
  sections.forEach(sec => {{
    const top = sec.offsetTop - 120;
    if (window.pageYOffset >= top) {{
      currentSecId = sec.getAttribute('id');
    }}
  }});

  sideLinks.forEach(link => {{
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSecId) {{
      link.classList.add('active');
    }}
  }});
}});

// Sidebar Search Filter
const sideFilter = document.getElementById('sideFilter');
sideFilter.addEventListener('input', (e) => {{
  const term = e.target.value.toLowerCase();
  sideLinks.forEach(link => {{
    const text = link.textContent.toLowerCase();
    link.style.display = text.includes(term) ? 'flex' : 'none';
  }});
}});
</script>

</body>
</html>
"""

    out_file = r"d:\placementPrep\notes\cybersecurity.html"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"Successfully written {out_file} ({os.path.getsize(out_file)} bytes)")

if __name__ == "__main__":
    build_full_notes_html()
