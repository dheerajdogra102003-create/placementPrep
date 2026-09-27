# PlacementPrep — Comprehensive Design System & Style Reference Manual

> **Reference Document**: Complete extraction, categorization, and architectural specification of all design tokens, component stylesheets, layout engines, and dynamic effects across the PlacementPrep platform.

---

## 1. Design System Overview & Aesthetic Philosophy

- **Aesthetic Persona**: *Neo-Glass Cyberpunk Meets Academic Precision*.
- **Color Space**: Deep Void backgrounds (`#08090D`, `#0C0E14`), translucent glass surface layers with backdrop blur, and high-frequency neon glow accents (Cyan `#06B6D4`, Indigo `#6366F1`, Violet `#8B5CF6`, Emerald `#10B981`, Amber `#F59E0B`, Rose `#F43F5E`).
- **Typography**:
  - **Interface Font**: `Inter`, system-ui, -apple-system, sans-serif (weights: 400, 500, 600, 700, 800, 900).
  - **Code & Monospace Font**: `JetBrains Mono`, Fira Code, monospace (weights: 400, 500, 600, 700).
- **Multi-Layer Atmospheric FX**:
  1. **Dynamic Aurora Glow**: 3 radial gradient orbs flowing smoothly with `@keyframes auroraFlow`.
  2. **Cyber Grid Texture**: Fixed CSS background-image SVG grid for depth.
  3. **Analog Film-Grain Overlay**: Subtle grain texture creating texture richness.
  4. **Interactive WebGL Canvas**: Hardware-accelerated particle/constellation backdrop.
  5. **Custom Dual-Element Cursor**: Magnetic dot (`.cursor-dot`) inside smooth-interpolated ring (`.cursor-ring`).

---

## 2. Master Design Tokens (`:root` Dark & Light Themes)

### 2.1 Default Dark Theme Design Tokens (`:root, [data-theme="dark"]`)
```css
:root,
[data-theme="dark"] {
--bg-base: #08090D;
    --bg-primary: #0C0E14;
    --bg-secondary: #12151F;
    --bg-surface: rgba(20, 24, 36, 0.65);
    --bg-surface-hover: rgba(28, 34, 52, 0.85);
    --bg-elevated: #161B29;
    --bg-glass: rgba(18, 22, 33, 0.72);
    --bg-glass-card: rgba(22, 27, 41, 0.55);
    --bg-code: #0A0C12;
    
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --text-muted: #64748B;
    --text-dim: #475569;
    
    --border-color: rgba(255, 255, 255, 0.08);
    --border-subtle: rgba(255, 255, 255, 0.04);
    --border-glow: rgba(255, 255, 255, 0.16);
    --border-card-hover: rgba(255, 42, 85, 0.35);
    
    /* Signature Brand Colors & Glow Accents */
    --accent-red: #FF2A55;
    --accent-red-hover: #E6003B;
    --accent-red-glow: rgba(255, 42, 85, 0.35);
    
    --accent-pink: #F43F5E;
    --accent-purple: #8B5CF6;
    --accent-cyan: #06B6D4;
    --accent-emerald: #10B981;
    --accent-amber: #F59E0B;
    --accent-blue: #3B82F6;
    
    --success: #10B981;
    --success-glow: rgba(16, 185, 129, 0.28);
    --warning: #F59E0B;
    --danger: #EF4444;
    
    --card-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
    --card-shadow-hover: 0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 30px rgba(255, 42, 85, 0.12);
    --glow-hero: 0 0 90px rgba(255, 42, 85, 0.2);
    
    --navbar-bg: rgba(12, 14, 20, 0.78);
    --navbar-border: rgba(255, 255, 255, 0.08);
    
    --radius-xs: 4px;
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --radius-full: 9999px;
    
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
    --transition-fast: all 0.18s var(--ease-out-expo);
    --transition-base: all 0.28s var(--ease-out-expo);
    --transition-smooth: all 0.45s var(--ease-out-expo);
}
```

### 2.2 Light Theme Overrides (`[data-theme="light"]`)
```css
[data-theme="light"] {
--bg-base: #F4F6FB;
    --bg-primary: #FFFFFF;
    --bg-secondary: #F1F4F9;
    --bg-surface: rgba(255, 255, 255, 0.85);
    --bg-surface-hover: rgba(255, 255, 255, 0.98);
    --bg-elevated: #E8EEF7;
    --bg-glass: rgba(255, 255, 255, 0.85);
    --bg-glass-card: rgba(255, 255, 255, 0.75);
    --bg-code: #1E2433;
    
    --text-primary: #0F172A;
    --text-secondary: #475569;
    --text-muted: #64748B;
    --text-dim: #94A3B8;
    
    --border-color: rgba(15, 23, 42, 0.08);
    --border-subtle: rgba(15, 23, 42, 0.04);
    --border-glow: rgba(15, 23, 42, 0.14);
    --border-card-hover: rgba(255, 42, 85, 0.4);
    
    --accent-red: #E11D48;
    --accent-red-hover: #BE123C;
    --accent-red-glow: rgba(225, 29, 72, 0.25);
    
    --accent-pink: #E11D48;
    --accent-purple: #7C3AED;
    --accent-cyan: #0891B2;
    --accent-emerald: #059669;
    --accent-amber: #D97706;
    --accent-blue: #2563EB;
    
    --success: #059669;
    --success-glow: rgba(5, 150, 105, 0.2);
    --warning: #D97706;
    --danger: #DC2626;
    
    --card-shadow: 0 10px 25px -8px rgba(15, 23, 42, 0.06);
    --card-shadow-hover: 0 20px 35px -10px rgba(15, 23, 42, 0.12), 0 0 25px rgba(225, 29, 72, 0.08);
    --glow-hero: 0 0 70px rgba(225, 29, 72, 0.12);
    
    --navbar-bg: rgba(255, 255, 255, 0.88);
    --navbar-border: rgba(15, 23, 42, 0.07);
}
```

---

## 3. Domain Module Theme Matrix (10 Domain Identities)

| Module Name | Directory | Primary Accent | Accent RGB | Thematic Vibe |
|---|---|---|---|---|
| **AI & Machine Learning** | `ai_ml/` | `#6366F1` (Indigo) / `#8B5CF6` (Purple) | `99, 102, 241` | Neural Attention / Deep Tech |
| **Browser Fundamentals** | `browser_fundamental/` | `#2563EB` (Royal Blue) | `37, 99, 235` | Web Engine / Chromium Blue |
| **Cloud Computing** | `cloud_Computing/` | `#0284C7` (Sky Blue) | `2, 132, 199` | Distributed Cloud Infra |
| **Cyber Security** | `cyber_security/` | `#0D9488` (Teal) | `13, 148, 136` | Cryptographic / SecOps |
| **Git & GitHub** | `github/` | `#F05032` (Git Red-Orange) | `240, 80, 50` | Version Control / Octocat |
| **Linux Commands** | `linux_commands/` | `#10B981` (Terminal Emerald) | `16, 185, 129` | Bash Shell / Hacker Terminal |
| **MS Office Suite** | `Microsoft Office Suite Mastery/` | `#0078D4` (Office Blue) | `0, 120, 212` | Corporate Enterprise / Productivity |
| **Networking** | `networking/` | `#0D9488` (Cyan-Teal) | `13, 148, 136` | Telemetry / Packet Routing |
| **Programming Fundamentals** | `programming_fundamentals/` | `#3B82F6` (Electric Blue) | `59, 130, 246` | Compilers / Memory / OOPs |
| **Pseudocode** | `Pseudocode/` | `#0891B2` (Cyan) / `#059669` (Green) | `8, 145, 178` | Logic Tracing / MNC Algorithms |
| **DSA Interactive Mentor** | `dsa_mentor/` | `#6366F1` (Indigo) / Slate | `99, 102, 241` | IDE Workspace / Algorithm Coach |

### 3.1 Module Specific Variable Definitions

#### `ai_ml/style.css` Tokens
```css
--primary: #6366F1;
--primary-rgb: 99, 102, 241;
--primary-hover: #4F46E5;
--primary-light: #EEF2FF;
--secondary: #8B5CF6;
--cyan: #06B6D4;
--cyan-light: #ECFEFF;
--success: #10B981;
--success-bg: #ECFDF5;
--warning: #F59E0B;
--warning-bg: #FFFBEB;
--danger: #EF4444;
--danger-bg: #FEF2F2;
--bg-page: #F8FAFC;
--bg-card: #FFFFFF;
```

#### `browser_fundamental/style.css` Tokens
```css
--bg-main: #F8FAFC;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #F1F5F9;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #64748B;
--accent-cloud: #2563EB;
--accent-cloud-hover: #1D4ED8;
--accent-cloud-light: #EFF6FF;
--accent-cloud-border: #BFDBFE;
--accent-cyan: #06B6D4;
--accent-amber: #D97706;
--accent-amber-light: #FEF3C7;
--accent-purple: #7C3AED;
```

#### `cloud_Computing/style.css` Tokens
```css
--bg-main: #F8FAFC;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #F1F5F9;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #64748B;
--accent-cloud: #0284C7;
--accent-cloud-hover: #0369A1;
--accent-cloud-light: #E0F2FE;
--accent-cloud-border: #BAE6FD;
--accent-cyan: #06B6D4;
--accent-amber: #D97706;
--accent-amber-light: #FEF3C7;
--accent-purple: #7C3AED;
```

#### `cyber_security/style.css` Tokens
```css
--bg-main: #F4F7FB;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #EDF2F7;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #334155;
--text-muted: #64748B;
--accent-cyber: #0D9488;
--accent-cyber-hover: #0F766E;
--accent-cyber-light: #CCFBF1;
--accent-cyber-border: #99F6E4;
--accent-cyan: #0284C7;
--accent-emerald: #059669;
--accent-amber: #D97706;
--accent-amber-light: #FEF3C7;
```

#### `github/style.css` Tokens
```css
--bg-main: #F4F6F9;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #F1F4F8;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #334155;
--text-muted: #64748B;
--accent-git: #F05032;
--accent-git-hover: #D93B1E;
--accent-git-light: rgba(240, 80, 50, 0.1);
--accent-git-border: rgba(240, 80, 50, 0.28);
--accent-cyan: #0284C7;
--accent-emerald: #059669;
--accent-amber: #D97706;
--accent-amber-light: #FEF3C7;
```

#### `linux_commands/style.css` Tokens
```css
--bg-main: #F8FAFC;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #F1F5F9;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #64748B;
--accent-cloud: #10B981;
--accent-cloud-hover: #059669;
--accent-cloud-light: #ECFDF5;
--accent-cloud-border: #A7F3D0;
--accent-cyan: #06B6D4;
--accent-amber: #D97706;
--accent-amber-light: #FEF3C7;
--accent-purple: #8B5CF6;
```

#### `Microsoft Office Suite Mastery/style.css` Tokens
```css
--bg-main: #F8FAFC;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #F1F5F9;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #64748B;
--office-primary: #0078D4;
--office-excel: #107C41;
--office-excel-hover: #0E6B37;
--office-excel-light: #ECFDF5;
--office-word: #0078D4;
--office-word-hover: #005A9E;
--office-word-light: #EFF6FF;
--office-ppt: #D83B01;
```

#### `networking/style.css` Tokens
```css
--bg-main: #F8FAFC;
--bg-surface: #FFFFFF;
--bg-surface-elevated: #F1F5F9;
--bg-surface-alt: #E2E8F0;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #64748B;
--accent-net: #0D9488;
--accent-net-hover: #0F766E;
--accent-net-light: #CCFBF1;
--accent-net-border: #99F6E4;
--accent-cyan: #0284C7;
--accent-cyan-light: #E0F2FE;
--accent-indigo: #4F46E5;
--accent-indigo-light: #EEF2FF;
```

#### `programming_fundamentals/style.css` Tokens
```css
--bg-base: #F8FAFC;
--bg-card: #FFFFFF;
--bg-elevated: #F1F5F9;
--bg-header: rgba(255, 255, 255, 0.92);
--border-color: #E2E8F0;
--border-subtle: #EDF2F7;
--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #94A3B8;
--track-var: #7C3AED;
--track-var-light: rgba(124, 58, 237, 0.12);
--track-var-hover: #6D28D9;
--track-cond: #D946EF;
--track-cond-light: rgba(217, 70, 239, 0.12);
--track-cond-hover: #C026D3;
```

#### `Pseudocode/style.css` Tokens
```css
--font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-code: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
--bg-primary: #f0f9ff;
--bg-secondary: #ffffff;
--bg-card: #ffffff;
--bg-card-hover: #f8fafc;
--bg-code: #090e17;
--text-code: #38bdf8;
--text-primary: #0f172a;
--text-secondary: #334155;
--text-muted: #64748b;
--border-color: #cbd5e1;
--border-subtle: #e2e8f0;
--primary: #0891b2;
--primary-hover: #0e7490;
```

---

## 4. Atmospheric Background FX & Keyframe Animations

```css
.aurora-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
}

.aurora-glow-1 {
    position: absolute;
    top: -15%;
    left: 20%;
    width: 750px;
    height: 650px;
    background: radial-gradient(circle, rgba(255, 42, 85, 0.14) 0%, rgba(244, 63, 94, 0.04) 50%, transparent 70%);
    filter: blur(80px);
    animation: auroraFloat1 18s ease-in-out infinite alternate;
    border-radius: 50%;
}

.aurora-glow-2 {
    position: absolute;
    top: 25%;
    right: -10%;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 70%);
    filter: blur(90px);
    animation: auroraFloat2 22s ease-in-out infinite alternate;
    border-radius: 50%;
}

.aurora-glow-3 {
    position: absolute;
    bottom: -10%;
    left: 5%;
    width: 800px;
    height: 600px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.02) 50%, transparent 70%);
    filter: blur(95px);
    animation: auroraFloat3 26s ease-in-out infinite alternate;
    border-radius: 50%;
}

.bg-grid-pattern {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background-size: 48px 48px;
    background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse 70% 65% at 50% 30%, #000 60%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 65% at 50% 30%, #000 60%, transparent 100%);
}

.bg-grid-pattern {
    background-image: 
        linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px);
}

.film-grain-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
}

.custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
}

.cursor-dot {
    width: 7px;
    height: 7px;
    background: var(--accent-red);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px var(--accent-red);
    transition: opacity 0.2s ease, transform 0.1s ease;
}

.cursor-ring {
    position: fixed;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
    border: 1.5px solid rgba(255, 42, 85, 0.45);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: width 0.25s var(--ease-out-expo),
                height 0.25s var(--ease-out-expo),
                border-color 0.25s ease,
                background-color 0.25s ease;
}

.custom-cursor.hovered .cursor-ring {
    width: 54px;
    height: 54px;
    border-color: var(--accent-red);
    background-color: rgba(255, 42, 85, 0.08);
}

.custom-cursor.hovered .cursor-dot {
    opacity: 0.3;
}

.custom-cursor { display: none !important; }

@keyframes auroraFloat1 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(80px, 60px) scale(1.15); }
}

@keyframes auroraFloat2 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(-70px, 90px) scale(0.9); }
}

@keyframes auroraFloat3 {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(90px, -50px) scale(1.1); }
}

@keyframes logoPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.75; }
}

@keyframes beaconBlink {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
}

@keyframes marqueeSlide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

@keyframes modalIn {
    from { opacity: 0; transform: scale(0.94) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes rgbShineLoop {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

```

---

## 5. Global Layout & Component Styles (`style.css`)

### 5.1 Floating Neo-Glass Navigation
```css
.navbar {
    position: sticky;
    top: 0;
    background-color: var(--navbar-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--navbar-border);
    z-index: 1000;
    padding: 0.85rem 0;
    transition: var(--transition-base);
}

.navbar.scrolled {
    padding: 0.65rem 0;
    border-bottom-color: rgba(255, 42, 85, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    padding: 0.3rem 0.5rem;
    border-radius: var(--radius-full);
}

.nav-links {
    background: rgba(15, 23, 42, 0.03);
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.4rem 0.9rem;
    border-radius: var(--radius-full);
    transition: var(--transition-fast);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.08);
}

.nav-links a:hover,
[data-theme="light"] .nav-links a.active {
    background: rgba(15, 23, 42, 0.07);
}

.nav-pill-badge {
    background: linear-gradient(135deg, var(--accent-red), var(--accent-pink));
    color: white;
    font-size: 0.62rem;
    font-weight: 800;
    padding: 0.12rem 0.4rem;
    border-radius: var(--radius-full);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    box-shadow: 0 0 10px rgba(255, 42, 85, 0.4);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 0.65rem;
}

.nav-sync-pill {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.45rem 0.95rem;
    border-radius: var(--radius-full);
    font-size: 0.82rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: var(--transition-fast);
}

.nav-sync-pill:hover {
    border-color: var(--border-glow);
    background: var(--bg-surface-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-sync-pill.synced .sync-dot {
    background: var(--success);
    box-shadow: 0 0 10px var(--success);
}

.nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-elevated);
        border: 1px solid var(--border-color);
        border-radius: 0 0 var(--radius-lg) var(--radius-lg);
        flex-direction: column;
        padding: 1.5rem;
        gap: 0.75rem;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

.nav-links.active {
        display: flex;
    }

```

### 5.2 Cinematic Hero Section & Stats Grid
```css
.hero {
    padding: 7rem 0 5rem;
    position: relative;
    overflow: hidden;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3.5rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-left-col {
    position: relative;
    z-index: 2;
    min-width: 0;
}

.hero-right-col {
    position: relative;
    z-index: 2;
    min-width: 0;
    width: 100%;
}

.hero-content {
    max-width: 100%;
    position: relative;
    z-index: 2;
}

.hero-eyebrow-chip {
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-primary);
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    margin-bottom: 1.85rem;
    background: rgba(255, 42, 85, 0.08);
    border: 1px solid rgba(255, 42, 85, 0.25);
    padding: 0.35rem 0.95rem;
    border-radius: var(--radius-full);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(255, 42, 85, 0.1);
    animation: fadeInDown 0.6s var(--ease-out-expo) forwards;
}

.hero-eyebrow-chip .pulse-beacon {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent-red);
    box-shadow: 0 0 10px var(--accent-red);
    animation: beaconBlink 1.8s infinite;
}

.hero h1 {
    font-size: clamp(3.2rem, 7.5vw, 6.2rem);
    font-weight: 900;
    line-height: 0.96;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    text-transform: uppercase;
    margin-bottom: 1.6rem;
}

.hero-accent-text {
    background: linear-gradient(135deg, #FFFFFF 15%, var(--accent-red) 55%, var(--accent-pink) 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    filter: drop-shadow(0 0 35px rgba(255, 42, 85, 0.35));
}

.hero-accent-text {
    background: linear-gradient(135deg, #0F172A 15%, var(--accent-red) 65%, var(--accent-purple) 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: clamp(1.08rem, 1.8vw, 1.28rem);
    color: var(--text-secondary);
    line-height: 1.65;
    max-width: 680px;
    margin-bottom: 2.5rem;
    font-weight: 450;
}

.hero-ctas {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    flex-wrap: wrap;
    margin-bottom: 2.75rem;
}

.hero-search-wrapper {
    max-width: 580px;
    margin-bottom: 2rem;
    position: relative;
}

.hero-search-input {
    width: 100%;
    background: rgba(22, 27, 41, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(16px);
    border-radius: var(--radius-md);
    padding: 0.95rem 3.5rem 0.95rem 3rem;
    font-size: 0.95rem;
    color: var(--text-primary);
    font-family: inherit;
    outline: none;
    transition: var(--transition-base);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.hero-search-input {
    background: rgba(255, 255, 255, 0.85);
    border-color: rgba(15, 23, 42, 0.12);
}

.hero-search-input:focus {
    border-color: var(--accent-red);
    box-shadow: 0 0 0 3px rgba(255, 42, 85, 0.2), 0 12px 30px rgba(0, 0, 0, 0.3);
    background: var(--bg-surface-hover);
}

```

### 5.3 Button Component Hierarchy
```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    font-size: 0.88rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.85rem 1.65rem;
    border-radius: var(--radius-md);
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition-base);
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--text-primary);
    color: var(--bg-base);
    border: 1px solid var(--text-primary);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.btn-accent {
    background: linear-gradient(135deg, var(--accent-red), var(--accent-pink));
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 30px var(--accent-red-glow);
}

.btn-accent::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: skewX(-25deg);
    transition: left 0.75s ease;
}

.btn-accent:hover::before {
    left: 150%;
}

.btn-accent:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 40px rgba(255, 42, 85, 0.55);
}

.btn-secondary {
    background: var(--bg-surface);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(12px);
}

.btn-secondary:hover {
    border-color: var(--border-glow);
    background: var(--bg-surface-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn {
        width: 100%;
    }

```

### 5.4 Module Cards & Progress Ring Displays
```css
.module-card {
    background: var(--bg-glass-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 2.25rem 2rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 330px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    transform-style: preserve-3d;
    box-shadow: var(--card-shadow);
    transition: transform 0.28s var(--ease-out-expo),
                border-color 0.28s ease,
                background-color 0.28s ease,
                box-shadow 0.28s ease;
}

.module-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
        500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(255, 255, 255, 0.08),
        transparent 65%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 1;
}

.module-card:hover::before {
    opacity: 1;
}

.module-card:hover {
    background: var(--bg-surface-hover);
    border-color: var(--card-accent, var(--accent-red));
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px var(--card-glow, rgba(255, 42, 85, 0.2));
}

.module-card.hidden {
    display: none !important;
}

.module-card-top,
.module-card-body,
.module-footer {
    transform: translateZ(24px);
    transform-style: preserve-3d;
    position: relative;
    z-index: 2;
}

.module-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.module-card:hover .module-icon-wrap {
    transform: scale(1.1) translateZ(12px);
    border-color: var(--card-accent, var(--accent-red));
    box-shadow: 0 0 20px var(--card-glow, rgba(255, 42, 85, 0.3));
}

.module-card h3 {
    font-size: 1.38rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin-bottom: 0.65rem;
    line-height: 1.25;
    transition: var(--transition-fast);
}

.module-card:hover h3 {
    color: #FFFFFF;
}

.module-card p {
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.35rem;
}

.module-card:hover .open-text {
    transform: translateX(5px);
}

```

---

## 6. Shared Computer-Based Test (CBT) Exam System (`shared/cbt-exam-system.css`)

The CBT exam interface replicates TCS iON / AMCAT testing environments with dual-column layouts.

### 6.1 CBT Workspace & 2-Column Split Layout
```css
.cbt-workspace-grid,
.quiz-grid-layout,
.workspace-grid,
.quiz-container {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) 330px !important;
    gap: 24px !important;
    max-width: 1500px !important;
    width: 100% !important;
    margin: 0 auto !important;
    align-items: start !important;
    padding: 0 1.5rem !important;
    box-sizing: border-box !important;
}

.cbt-workspace-grid,
    .quiz-grid-layout,
    .workspace-grid,
    .quiz-container {
        display: block !important;
        grid-template-columns: 1fr !important;
        padding: 0 1rem !important;
        margin-bottom: 70px !important; /* Space for sticky bottom bar */
    }

```

### 6.2 Standardized 4-Option Cards & Question Palette Badges
```css
.cbt-options-list,
.options-container,
.options-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
    margin-bottom: 24px !important;
    width: 100% !important;
}

.cbt-option,
.option-btn,
.option-item,
.option-card {
    display: grid !important;
    grid-template-columns: 40px minmax(0, 1fr) !important;
    gap: 12px !important;
    align-items: start !important;
    min-height: 56px !important;
    padding: 14px 18px !important;
    border-radius: 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    text-align: left !important;
    background: var(--cbt-surface-elevated) !important;
    border: 1px solid var(--cbt-border) !important;
    color: var(--cbt-text) !important;
    cursor: pointer !important;
    transition: background-color 150ms ease, border-color 150ms ease, transform 120ms ease !important;
    user-select: none !important;
    outline: none !important;
    text-decoration: none !important;
}

.cbt-option:hover:not(:disabled):not(.locked),
.option-btn:hover:not(:disabled):not(.locked),
.option-item:hover:not(:disabled):not(.locked) {
    background: var(--cbt-surface-hover) !important;
    border-color: var(--cbt-border-hover) !important;
    transform: translateY(-1px) !important;
}

.cbt-option-letter,
.option-letter,
.opt-prefix,
.option-key {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 36px !important;
    height: 36px !important;
    border-radius: 8px !important;
    background: var(--cbt-surface) !important;
    border: 1px solid var(--cbt-border) !important;
    font-weight: 700 !important;
    font-size: 13.5px !important;
    color: var(--cbt-text) !important;
    flex-shrink: 0 !important;
    box-sizing: border-box !important;
    transition: all 150ms ease !important;
}

.cbt-option-text,
.option-text,
.opt-text {
    flex: 1 1 auto !important;
    font-size: 15px !important;
    line-height: 1.5 !important;
    color: var(--cbt-text) !important;
    padding-top: 6px !important;
    word-break: break-word !important;
}

.cbt-option.selected,
.option-btn.selected,
.option-item.selected {
    border-color: var(--cbt-primary-accent, #E60023) !important;
    background: rgba(230, 0, 35, 0.08) !important;
}

.cbt-option.selected .option-letter,
.option-btn.selected .option-letter,
.option-item.selected .opt-prefix {
    background: var(--cbt-primary-accent, #E60023) !important;
    color: #FFFFFF !important;
    border-color: var(--cbt-primary-accent, #E60023) !important;
}

.cbt-option.correct,
.option-btn.correct,
.option-item.correct {
    border-color: var(--cbt-success) !important;
    background: var(--cbt-success-bg) !important;
    color: var(--cbt-success) !important;
}

.cbt-option.correct .option-letter,
.option-btn.correct .option-letter,
.option-item.correct .opt-prefix {
    background: var(--cbt-success) !important;
    color: #FFFFFF !important;
    border-color: var(--cbt-success) !important;
}

.cbt-option.incorrect,
.cbt-option.wrong,
.option-btn.incorrect,
.option-item.wrong {
    border-color: var(--cbt-error) !important;
    background: var(--cbt-error-bg) !important;
    color: var(--cbt-error) !important;
}

.cbt-option.incorrect .option-letter,
.option-btn.incorrect .option-letter,
.option-item.wrong .opt-prefix {
    background: var(--cbt-error) !important;
    color: #FFFFFF !important;
    border-color: var(--cbt-error) !important;
}

.status-indicator-icon,
.status-icon {
    width: 32px !important;
    height: 32px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-weight: 800 !important;
    font-size: 16px !important;
    flex-shrink: 0 !important;
    background: var(--cbt-success-bg) !important;
    color: var(--cbt-success) !important;
}

.status-indicator-text h3,
.status-title {
    margin: 0 !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    color: var(--cbt-text) !important;
}

.palette-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    margin-bottom: 14px !important;
}

.palette-header h3 {
    margin: 0 !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    color: var(--cbt-text) !important;
}

.palette-legend {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px 12px !important;
    margin-bottom: 14px !important;
    padding-bottom: 12px !important;
    border-bottom: 1px solid var(--cbt-border) !important;
}

.palette-legend .dot {
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    flex-shrink: 0 !important;
}

.palette-grid {
    display: grid !important;
    grid-template-columns: repeat(5, 1fr) !important;
    gap: 8px !important;
    max-height: 380px !important;
    overflow-y: auto !important;
    padding-right: 4px !important;
    margin-bottom: 16px !important;
}

.palette-grid::-webkit-scrollbar {
    width: 4px;
}

.palette-grid::-webkit-scrollbar-thumb {
    background: var(--cbt-border);
    border-radius: 4px;
}

```

---

## 7. Shared Module Engine Styles (`shared/module-system.css`)

Handles Flashcards, Instant Practice, Explanations, and Placement Tip Badges.

### 7.1 Flashcard 3D Flip & Interactive Mode
```css
```

### 7.2 Practice Question, Feedback & Solution Drawer
```css
```

---

## 8. DSA Mentor Workspace & In-Browser IDE (`dsa_mentor/style.css`)

Split-pane code editor, terminal output, complexity indicators, and mentor hint bubbles.

### 8.1 IDE Split Panes & Editor Layout
```css
```

---

## 9. Notes & Cheatsheets Layout System (`notes/`)

Styling used across all 7 revision notes (`accenture-web-coding`, `ai-ml-dl`, `cloud-computing`, `cybersecurity`, `git-github`, `networking`, `index`).

```css
root {
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

data-theme="light"] {
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

box-sizing: border-box; margin: 0; padding: 0; }
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

Sticky Topbar */
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

```

---

## 10. Responsive Design Breakpoints & Grid Rules

| Breakpoint | Width | Strategy & Layout Modifications |
|---|---|---|
| **Desktop XL** | `> 1280px` | 3/4-Column module grid, full dual-column CBT workspace with 320px persistent palette |
| **Desktop Standard** | `1024px - 1280px` | 3-Column module cards, 280px CBT palette, full DSA split pane |
| **Tablet Landscape** | `768px - 1023px` | 2-Column module cards, collapsible CBT question palette drawer, stacked IDE view |
| **Mobile** | `< 768px` | Single-column flow, bottom-docked navigation, sliding bottom drawer for question palette, hidden custom cursor |

