# git_css.py - CSS styling for Git & GitHub Placement Notes

def get_git_notes_css():
    return """
:root {
  --bg: #0D0D0D;
  --bg-secondary: #121212;
  --card: #181818;
  --card-elevated: #222222;
  --card-subtle: #161616;
  --border: #2A2A2A;
  --border-hover: #3E3E3E;
  --text-primary: #F5F5F0;
  --text-secondary: #A6A6A0;
  --text-muted: #70706C;
  --git-orange: #F05032;
  --git-orange-light: rgba(240, 80, 50, 0.14);
  --git-orange-glow: rgba(240, 80, 50, 0.3);
  --primary: #F05032;
  --primary-light: rgba(240, 80, 50, 0.14);
  --primary-glow: rgba(240, 80, 50, 0.3);
  --cyan: #06B6D4;
  --cyan-light: rgba(6, 182, 212, 0.14);
  --accent-red: #E60023;
  --accent-red-light: rgba(230, 0, 35, 0.12);
  --success: #10B981;
  --success-light: rgba(16, 185, 129, 0.12);
  --warning: #F59E0B;
  --warning-light: rgba(245, 158, 11, 0.12);
  --terminal-bg: #0A0A0A;
  --terminal-text: #E7E7E2;
  --shadow: 0 14px 40px rgba(0, 0, 0, 0.5);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --font: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

[data-theme="light"] {
  --bg: #F8FAFC;
  --bg-secondary: #F1F5F9;
  --card: #FFFFFF;
  --card-elevated: #F8FAFC;
  --card-subtle: #F1F5F9;
  --border: #E2E8F0;
  --border-hover: #CBD5E1;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --git-orange: #E03E1E;
  --git-orange-light: rgba(224, 62, 30, 0.1);
  --git-orange-glow: rgba(224, 62, 30, 0.2);
  --primary: #E03E1E;
  --primary-light: rgba(224, 62, 30, 0.1);
  --primary-glow: rgba(224, 62, 30, 0.2);
  --cyan: #0284C7;
  --cyan-light: rgba(2, 132, 199, 0.08);
  --accent-red: #DC2626;
  --accent-red-light: rgba(220, 38, 38, 0.08);
  --success: #059669;
  --success-light: rgba(5, 150, 105, 0.08);
  --warning: #D97706;
  --warning-light: rgba(217, 119, 6, 0.08);
  --terminal-bg: #0F172A;
  --terminal-text: #F8FAFC;
  --shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text-primary);
  line-height: 1.65;
  transition: background .25s ease, color .25s ease;
  min-height: 100vh;
}

button, input, select { font: inherit; }
button { cursor: pointer; }
a { text-decoration: none; color: inherit; }

/* Sticky Topbar */
.topbar {
  position: fixed; top: 0; left: 0; right: 0; height: 68px; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between; padding: 0 24px;
  background: color-mix(in srgb, var(--card) 85%, transparent);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-left { display: flex; align-items: center; gap: 14px; }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 850; font-size: 16px; }
.logo-icon {
  width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center;
  color: #fff; background: linear-gradient(135deg, var(--git-orange), #EA4335);
  box-shadow: 0 8px 22px var(--git-orange-glow); font-size: 18px;
}
.brand small {
  display: block; color: var(--text-muted); font-size: 10px; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase;
}

.nav-actions { display: flex; align-items: center; gap: 10px; }
.nav-btn {
  display: inline-flex; align-items: center; gap: 6px; padding: 0 14px; height: 40px;
  border: 1px solid var(--border); background: var(--card); color: var(--text-primary);
  border-radius: var(--radius-sm); font-size: 12px; font-weight: 700; transition: .2s;
}
.nav-btn:hover { border-color: var(--git-orange); color: var(--git-orange); transform: translateY(-1px); }
.nav-btn.primary {
  background: linear-gradient(135deg, var(--git-orange), #EA4335);
  color: #fff; border: 0; box-shadow: 0 4px 16px var(--git-orange-glow);
}
.nav-btn.primary:hover { opacity: .95; color: #fff; }

.nav-btn.last-hour-btn {
  background: var(--accent-red-light);
  color: var(--accent-red);
  border-color: var(--accent-red);
}
.nav-btn.last-hour-btn.active {
  background: var(--accent-red);
  color: #fff;
}

.icon-btn {
  width: 40px; height: 40px; border: 1px solid var(--border); background: var(--card);
  color: var(--text-primary); border-radius: var(--radius-sm); transition: .2s;
  display: grid; place-items: center; font-size: 16px;
}
.icon-btn:hover { border-color: var(--git-orange); color: var(--git-orange); }

/* Progress Bar */
.progress-bar-container {
  position: fixed; top: 68px; left: 0; right: 0; height: 3px; z-index: 999;
}
.progress-bar {
  height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--git-orange), #EA4335, var(--cyan));
  transition: width 0.1s ease;
}

/* Page Layout */
.layout-container {
  max-width: 1440px; margin: 0 auto; padding: 90px 24px 60px;
  display: grid; grid-template-columns: 290px 1fr; gap: 36px;
  align-items: start;
}

/* Sidebar TOC */
.sidebar {
  position: sticky; top: 88px; max-height: calc(100vh - 108px);
  display: flex; flex-direction: column; gap: 12px;
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow);
}

.sidebar-search {
  padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);
  background: var(--bg-secondary); color: var(--text-primary); font-size: 13px;
  outline: none; width: 100%;
}
.sidebar-search:focus { border-color: var(--git-orange); }

.toc-nav {
  overflow-y: auto; padding-right: 6px; display: flex; flex-direction: column; gap: 4px;
}
.toc-group-title {
  font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;
  color: var(--text-muted); margin: 12px 0 4px; padding-left: 8px;
}
.toc-link {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px; border-radius: 6px; font-size: 12.5px; color: var(--text-secondary);
  transition: .15s; font-weight: 500;
}
.toc-link:hover {
  background: var(--git-orange-light); color: var(--git-orange); transform: translateX(2px);
}
.toc-link.active {
  background: var(--git-orange-light); color: var(--git-orange); font-weight: 700;
  border-left: 3px solid var(--git-orange);
}
.toc-badge {
  font-size: 9px; padding: 2px 5px; border-radius: 4px;
  background: var(--bg-secondary); color: var(--text-muted); font-weight: 700;
}

/* Content Area */
.content-area {
  min-width: 0; display: flex; flex-direction: column; gap: 48px;
}

/* Hero */
.notes-hero {
  background: linear-gradient(135deg, var(--card) 0%, var(--bg-secondary) 100%);
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: clamp(28px, 4vw, 44px); box-shadow: var(--shadow);
  position: relative; overflow: hidden;
}
.notes-hero::after {
  content: ""; position: absolute; top: -50%; right: -20%; width: 400px; height: 400px;
  background: radial-gradient(circle, var(--git-orange-glow) 0%, transparent 70%);
  pointer-events: none;
}

.hero-chip {
  display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px;
  border-radius: 9999px; background: var(--git-orange-light); color: var(--git-orange);
  font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .8px;
  margin-bottom: 16px;
}

.notes-hero h1 {
  font-size: clamp(28px, 4vw, 42px); font-weight: 900; line-height: 1.15;
  margin-bottom: 12px; letter-spacing: -1px;
}
.notes-hero h1 span {
  background: linear-gradient(135deg, var(--git-orange) 0%, #F59E0B 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

.notes-hero p {
  font-size: 15px; color: var(--text-secondary); max-width: 820px;
  margin-bottom: 24px; line-height: 1.6;
}

.hero-metrics {
  display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;
}
.metric-pill {
  display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px;
  background: var(--card-elevated); border: 1px solid var(--border);
  border-radius: 9999px; font-size: 12px; font-weight: 600; color: var(--text-secondary);
}
.metric-pill strong { color: var(--git-orange); font-weight: 800; }

.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* Chapter / Note Section */
.note-section {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: clamp(24px, 3.5vw, 40px);
  box-shadow: var(--shadow); transition: border-color .2s;
  scroll-margin-top: 88px;
}
.note-section:hover { border-color: var(--border-hover); }

.section-eyebrow {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; margin-bottom: 12px;
}
.sec-num {
  font-size: 12px; font-weight: 800; color: var(--git-orange);
  font-family: var(--font-mono); letter-spacing: 1px;
}
.sec-priority {
  font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 9999px;
  text-transform: uppercase; letter-spacing: .5px;
}
.priority-p0 { background: var(--accent-red-light); color: var(--accent-red); }
.priority-p1 { background: var(--git-orange-light); color: var(--git-orange); }
.priority-p2 { background: var(--cyan-light); color: var(--cyan); }

.section-title {
  font-size: clamp(22px, 3vw, 28px); font-weight: 800; margin-bottom: 12px;
  letter-spacing: -.5px; color: var(--text-primary);
}

.section-intro {
  font-size: 15px; color: var(--text-secondary); line-height: 1.65;
  margin-bottom: 24px;
}

/* Concept Cards */
.concept-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px; margin: 20px 0;
}
.concept-card {
  background: var(--bg-secondary); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 18px;
}
.concept-card h4 {
  font-size: 14px; font-weight: 700; color: var(--text-primary);
  margin-bottom: 6px; display: flex; align-items: center; gap: 6px;
}
.concept-card p {
  font-size: 13px; color: var(--text-secondary); line-height: 1.55;
}

/* Visual ASCII / Architecture Diagram */
.diagram-container {
  background: var(--terminal-bg); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 20px; margin: 20px 0;
  overflow-x: auto;
}
.diagram-title {
  font-size: 11px; font-weight: 800; text-transform: uppercase;
  letter-spacing: .8px; color: var(--git-orange); margin-bottom: 12px;
  display: flex; align-items: center; gap: 6px;
}
.diagram-art {
  font-family: var(--font-mono); font-size: 12px; line-height: 1.45;
  color: #E2E8F0; white-space: pre; margin: 0;
}

/* Interactive Terminal Command Block */
.terminal-block {
  background: var(--terminal-bg); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 16px 20px; margin: 20px 0;
  font-family: var(--font-mono); position: relative; overflow-x: auto;
}
.terminal-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid #222;
}
.terminal-dots { display: flex; gap: 6px; }
.t-dot { width: 10px; height: 10px; border-radius: 50%; }
.t-red { background: #FF5F56; }
.t-yellow { background: #FFBD2E; }
.t-green { background: #27C93F; }
.terminal-tag { font-size: 10.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }

.copy-btn {
  background: #1F2937; border: 1px solid #374151; color: #9CA3AF;
  font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 4px;
  transition: .15s;
}
.copy-btn:hover { background: var(--git-orange); color: #fff; border-color: var(--git-orange); }

.term-cmd {
  color: #F8FAFC; font-size: 13.5px; font-weight: 600; margin-bottom: 6px;
  display: flex; align-items: center; gap: 8px;
}
.term-cmd .prompt { color: var(--git-orange); user-select: none; }
.term-output {
  color: #94A3B8; font-size: 12px; line-height: 1.5; white-space: pre-wrap; margin-top: 6px;
}
.term-desc {
  font-family: var(--font); font-size: 12.5px; color: var(--text-secondary);
  margin-top: 10px; padding-top: 8px; border-top: 1px dashed #222; line-height: 1.5;
}

/* Comparison Tables */
.table-wrapper {
  overflow-x: auto; margin: 24px 0; border: 1px solid var(--border);
  border-radius: var(--radius-md);
}
.comp-table {
  width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;
}
.comp-table th {
  background: var(--bg-secondary); padding: 12px 16px; font-weight: 700;
  color: var(--text-primary); border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.comp-table td {
  padding: 12px 16px; border-bottom: 1px solid var(--border);
  color: var(--text-secondary); vertical-align: top; line-height: 1.5;
}
.comp-table tr:last-child td { border-bottom: 0; }
.comp-table tr:hover td { background: var(--git-orange-light); }

/* Real-World Scenario Box */
.scenario-box {
  background: var(--card-elevated); border-left: 4px solid var(--cyan);
  border-radius: 0 var(--radius-md) var(--radius-md) 0; padding: 20px;
  margin: 20px 0;
}
.scenario-tag {
  font-size: 11px; font-weight: 800; text-transform: uppercase;
  letter-spacing: .8px; color: var(--cyan); margin-bottom: 6px;
  display: flex; align-items: center; gap: 6px;
}
.scenario-title {
  font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;
}
.scenario-problem {
  font-size: 13px; color: var(--text-secondary); margin-bottom: 10px; line-height: 1.55;
}
.scenario-solution {
  font-size: 13px; color: var(--text-primary); background: var(--bg-secondary);
  padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border);
  line-height: 1.55;
}
.scenario-solution strong { color: var(--success); }

/* Fatal Placement Trap Box */
.trap-box {
  background: var(--accent-red-light); border-left: 4px solid var(--accent-red);
  border-radius: 0 var(--radius-md) var(--radius-md) 0; padding: 18px 20px;
  margin: 20px 0;
}
.trap-header {
  font-size: 12px; font-weight: 900; text-transform: uppercase;
  letter-spacing: .8px; color: var(--accent-red); margin-bottom: 6px;
  display: flex; align-items: center; gap: 6px;
}
.trap-desc {
  font-size: 13.5px; color: var(--text-primary); font-weight: 500; line-height: 1.55;
}

/* Quick Memory Trick Pill */
.memory-trick {
  background: var(--git-orange-light); border: 1px dashed var(--git-orange);
  border-radius: var(--radius-md); padding: 14px 18px; margin: 18px 0;
  display: flex; align-items: flex-start; gap: 12px;
}
.memory-icon { font-size: 18px; line-height: 1; flex-shrink: 0; }
.memory-content { font-size: 13px; color: var(--text-primary); line-height: 1.5; }
.memory-content strong { color: var(--git-orange); }

/* Top Interview Q&A Box */
.interview-box {
  background: var(--bg-secondary); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 18px; margin: 20px 0;
}
.interview-title {
  font-size: 11px; font-weight: 800; text-transform: uppercase;
  letter-spacing: .8px; color: var(--warning); margin-bottom: 6px;
  display: flex; align-items: center; gap: 6px;
}
.interview-q {
  font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;
}
.interview-a {
  font-size: 13px; color: var(--text-secondary); line-height: 1.55;
}

/* Last-Minute Checklist / Card */
.checklist-card {
  background: var(--bg-secondary); border-radius: var(--radius-md);
  padding: 18px; margin-top: 20px; border: 1px solid var(--border);
}
.checklist-title {
  font-size: 12px; font-weight: 800; text-transform: uppercase;
  color: var(--text-primary); margin-bottom: 10px; letter-spacing: .5px;
}
.checklist-items { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.checklist-items li {
  font-size: 13px; color: var(--text-secondary); display: flex;
  align-items: flex-start; gap: 8px; line-height: 1.5;
}
.checklist-items li::before {
  content: "⚡"; color: var(--git-orange); flex-shrink: 0; font-size: 12px;
}

/* Floating Back-to-Top Button */
.back-top-btn {
  position: fixed; bottom: 24px; right: 24px; width: 44px; height: 44px;
  border-radius: 50%; background: var(--card); border: 1px solid var(--border);
  color: var(--text-primary); display: grid; place-items: center; font-size: 18px;
  box-shadow: var(--shadow); z-index: 99; transition: .2s; opacity: 0; pointer-events: none;
}
.back-top-btn.visible { opacity: 1; pointer-events: auto; }
.back-top-btn:hover { background: var(--git-orange); color: #fff; transform: translateY(-3px); }

/* Responsive Adjustments */
@media (max-width: 1080px) {
  .layout-container { grid-template-columns: 1fr; gap: 24px; }
  .sidebar { display: none; }
}

@media (max-width: 640px) {
  .topbar { padding: 0 16px; }
  .layout-container { padding: 80px 14px 40px; }
  .notes-hero { padding: 20px 16px; }
  .note-section { padding: 20px 16px; }
  .hide-mobile { display: none; }
}
"""
