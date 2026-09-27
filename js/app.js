/* ==========================================================================
   PLACEMENTPREP - APPLICATION CONTROLLER & ROUTER
   Seamless client-side routing between Home, Modules, CBT Exam, Practice & About
   ========================================================================== */

(function () {
  class AppController {
    constructor() {
      this.currentView = 'home';
      this.activeModuleId = 'programming';
      this.quizEngine = new window.QuizEngine();
      this.modules = window.MODULES_REGISTRY || [];
      this.particleNetwork = null;
    }

    init() {
      this.bindGlobalEvents();
      this.initParticles();
      this.handleRoute();
      window.addEventListener('hashchange', () => this.handleRoute());
    }

    initParticles() {
      if (window.ParticleNetwork) {
        this.particleNetwork = new window.ParticleNetwork('particle-canvas');
      }
    }

    bindGlobalEvents() {
      // Theme Toggle Buttons
      document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => window.ThemeManager.toggleTheme());
      });

      // Mobile Menu Toggle
      const mobileNavToggle = document.getElementById('mobile-nav-toggle');
      const navMenu = document.getElementById('nav-menu');
      
      const closeMobileNav = () => {
        navMenu?.classList.remove('mobile-active');
        mobileNavToggle?.setAttribute('aria-expanded', 'false');
      };

      mobileNavToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMenu?.classList.toggle('mobile-active');
        mobileNavToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close mobile nav on any navigation link click (including dropdown items)
      document.querySelectorAll('.nav-item-link, .nav-dropdown-item, .nav-dropdown-hub-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
      });

      // Close mobile nav when clicking outside
      document.addEventListener('click', (e) => {
        if (navMenu?.classList.contains('mobile-active') && !navMenu.contains(e.target) && !mobileNavToggle?.contains(e.target)) {
          closeMobileNav();
        }
      });

      // Close mobile nav on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMobileNav();
        }
      });
    }

    handleRoute() {
      const hash = window.location.hash.slice(1) || 'home';
      const parts = hash.split('/');
      const view = parts[0] || 'home';
      const param = parts[1] || '';

      this.currentView = view;
      this.updateNavActiveState(view);

      const appContainer = document.getElementById('app-view-container');
      const navbar = document.getElementById('site-navbar');
      const footer = document.getElementById('site-footer');

      // During active exam, hide main site navbar and footer to minimize distractions
      if (view === 'cbt' || view === 'practice') {
        if (navbar) navbar.style.display = 'none';
        if (footer) footer.style.display = 'none';
        this.startQuizView(appContainer, param, view);
      } else {
        if (navbar) navbar.style.display = 'block';
        if (footer) footer.style.display = 'block';

        if (view === 'modules') {
          this.renderModulesView(appContainer);
        } else if (view === 'about') {
          this.renderAboutView(appContainer);
        } else {
          this.renderHomeView(appContainer);
        }
      }

      window.scrollTo(0, 0);
    }

    updateNavActiveState(view) {
      document.querySelectorAll('.nav-item-link').forEach(link => {
        const targetView = link.getAttribute('data-view');
        link.classList.toggle('active', targetView === view);
      });
    }

    getModuleQuestions(moduleId) {
      if (window.QUESTION_BANKS && window.QUESTION_BANKS[moduleId]) {
        return window.QUESTION_BANKS[moduleId];
      }
      const mod = this.modules.find(m => m.id === moduleId);
      if (!mod) return [];
      const varName = mod.dataVar;
      return window[varName] || [];
    }

    startQuizView(container, moduleId, mode) {
      const modId = moduleId || 'programming-logic';
      const modMeta = this.modules.find(m => m.id === modId) || this.modules[0];
      const questions = this.getModuleQuestions(modMeta.id);

      if (!questions || questions.length === 0) {
        container.innerHTML = `
          <div class="container" style="padding-top: 5rem; text-align: center;">
            <h2>No questions loaded for ${modMeta.name}</h2>
            <p style="margin: 1rem 0 2rem;">Please verify data files or select another module.</p>
            <a href="#modules" class="btn btn-primary">Return to Modules</a>
          </div>
        `;
        return;
      }

      // Initialize the reusable Quiz Engine
      this.quizEngine.init(container, questions, modMeta, mode);
    }

    renderHomeView(container) {
      const stats = window.StorageManager.getGlobalStats();

      container.innerHTML = `
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="container">
            <div class="hero-pill-badge">
              <span class="hero-pill-dot"></span>
              <span>Next-Gen Placement CBT Assessment Suite</span>
            </div>

            <h1 class="hero-title">
              Prepare Smarter. Practice Better. <br>
              <span class="hero-gradient-text">Get Placement Ready.</span>
            </h1>

            <p class="hero-desc">
              High-yield technical placement preparation and realistic Computer-Based Test (CBT) examination platform designed around hiring assessment patterns of global IT service and tech enterprises.
            </p>

            <div class="hero-cta-group">
              <a href="#modules" class="btn btn-primary btn-lg">
                <span>⚡ Explore All 12 Modules</span>
              </a>
              <a href="notes.html" class="btn-glow-rgb btn-lg">
                <span>📚 Master Notes Hub (All Subjects)</span>
              </a>
              <button type="button" class="btn btn-glass btn-lg" id="btn-quick-cbt">
                <span>⏱️ Launch Timed Mock Test</span>
              </button>
            </div>

            <!-- 3D Isometric Hero Showcase Frame with Floating Telemetry Chips -->
            <div class="hero-media-wrapper">
              <div class="hero-media-frame">
                <img src="assets/images/hero-banner.jpg" 
                     alt="PlacementPrep 3D Interactive Tech Platform" 
                     class="hero-media-img"
                     loading="eager">

                <!-- Floating Telemetry Chips -->
                <div class="telemetry-chip telemetry-chip-top-left">
                  <span style="color: var(--success); font-size: 1.1rem;">★</span>
                  <span>94% Placement Score Target</span>
                </div>

                <div class="telemetry-chip telemetry-chip-bottom-right">
                  <span class="hero-pill-dot"></span>
                  <span>Live CBT Examination Simulator</span>
                </div>
              </div>
            </div>

            <!-- Key Metrics Bar -->
            <div class="hero-stats-grid">
              <div class="stat-card">
                <div class="stat-value" style="color: var(--brand-primary);">12</div>
                <div class="stat-label">Specialized Modules</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" style="color: var(--brand-cyan);">1,000</div>
                <div class="stat-label">Placement MCQs</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" style="color: var(--brand-emerald);">100%</div>
                <div class="stat-label">CBT Simulation</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" style="color: var(--brand-amber);">${stats.streak} Days</div>
                <div class="stat-label">Study Streak</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Target Company Recruitment Patterns Strip -->
        <section class="recruiter-strip">
          <div class="container">
            <div class="recruiter-strip-title">
              Targeted Hiring Patterns & Technical Syllabi
            </div>
            <div class="recruiter-badges-grid">
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #A100FF;"></span>
                <span>Accenture</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #0076CE;"></span>
                <span>TCS NQT</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #007CC3;"></span>
                <span>Infosys</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #1F70B8;"></span>
                <span>Cognizant</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #0070AD;"></span>
                <span>Capgemini</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #E84C3D;"></span>
                <span>Wipro</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #86BC25;"></span>
                <span>Deloitte</span>
              </div>
              <div class="recruiter-badge">
                <span class="recruiter-badge-dot" style="background: #ED6D00;"></span>
                <span>LTIMindtree</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Master Placement Notes Hub Showcase -->
        <section class="master-notes-showcase-section notes-showcase-bg">
          <div class="container">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 2.5rem;">
              <span class="badge-rgb" style="font-size: 0.85rem; padding: 0.35rem 1rem; border-radius: 999px; display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span>✨ MNC INTERVIEW & PLACEMENT MASTER NOTES</span>
              </span>
              <h2 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.75rem; letter-spacing: -0.02em; color: var(--text-primary);">
                Deep-Dive Subject Notes &amp; Visual Cheat Sheets
              </h2>
              <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
                Engineered with real-world analogies, ASCII/visual architecture diagrams, curated MNC interview questions, and placement traps for Accenture, TCS, Infosys, Capgemini, Cognizant &amp; Deloitte.
              </p>
            </div>

            <!-- Notes Quick Jump Grid with RGB Glow Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
              
              <!-- DBMS & SQL Master Notes Card -->
              <div class="rgb-card-wrapper">
                <div class="rgb-card-inner" style="padding: 1.75rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="font-size: 2.5rem; line-height: 1;">🗄️</span>
                    <span style="background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">117 Secs • 50 MCQs</span>
                  </div>
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #f8fafc;">DBMS &amp; SQL Masterclass</h3>
                  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 1.25rem;">
                    Relational Model, Keys, Normalization (1NF–BCNF), Execution Order, Interactive Joins Lab, ACID, 2PL, Indexing &amp; 30 SQL Challenges.
                  </p>
                  <a href="notes/dbms.html" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; background: linear-gradient(135deg, #2563eb, #0284c7);">
                    <span>Open DBMS Notes →</span>
                  </a>
                </div>
              </div>

              <!-- Cloud Computing Card -->
              <div class="rgb-card-wrapper">
                <div class="rgb-card-inner" style="padding: 1.75rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="font-size: 2.5rem; line-height: 1;">☁️</span>
                    <span style="background: rgba(56,189,248,0.15); color: #38bdf8; border: 1px solid rgba(56,189,248,0.3); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">80 Points • 60 MCQs</span>
                  </div>
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #f8fafc;">Cloud Computing</h3>
                  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 1.25rem;">
                    IaaS/PaaS/SaaS, Virtualization, Containers, Scalability vs Elasticity, Load Balancing, Serverless, IAM &amp; 30 Interview Q&amp;As.
                  </p>
                  <a href="notes/cloud-computing.html" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
                    <span>Open Cloud Notes →</span>
                  </a>
                </div>
              </div>

              <!-- Linux & Shell Card -->
              <div class="rgb-card-wrapper">
                <div class="rgb-card-inner" style="padding: 1.75rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="font-size: 2.5rem; line-height: 1;">🐧</span>
                    <span style="background: rgba(245,158,11,0.15); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">Shell • Permissions</span>
                  </div>
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #f8fafc;">Linux &amp; Command Prompt</h3>
                  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 1.25rem;">
                    Directory navigation, chmod/chown, pipes, grep, sed, awk, process management, Windows CMD comparison &amp; 50 MCQs.
                  </p>
                  <a href="notes/linux-command-prompt.html" class="btn btn-outline btn-sm" style="width: 100%; justify-content: center;">
                    <span>Open Linux Notes →</span>
                  </a>
                </div>
              </div>

              <!-- Git & GitHub Card -->
              <div class="rgb-card-wrapper">
                <div class="rgb-card-inner" style="padding: 1.75rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="font-size: 2.5rem; line-height: 1;">🐙</span>
                    <span style="background: rgba(239,68,68,0.15); color: #ef4444; border: 1px solid rgba(239,68,68,0.3); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">VCS • Branching</span>
                  </div>
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #f8fafc;">Git &amp; GitHub</h3>
                  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 1.25rem;">
                    Three-stage architecture, merge vs rebase, resolving conflicts, cherry-pick, PR lifecycle, recovery &amp; 50 MCQs.
                  </p>
                  <a href="notes/git-github.html" class="btn btn-outline btn-sm" style="width: 100%; justify-content: center;">
                    <span>Open Git Notes →</span>
                  </a>
                </div>
              </div>

              <!-- AI/ML/DL Card -->
              <div class="rgb-card-wrapper">
                <div class="rgb-card-inner" style="padding: 1.75rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="font-size: 2.5rem; line-height: 1;">🤖</span>
                    <span style="background: rgba(168,85,247,0.15); color: #c084fc; border: 1px solid rgba(168,85,247,0.3); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">GenAI • LLMs • ML</span>
                  </div>
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #f8fafc;">AI + ML + Deep Learning</h3>
                  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 1.25rem;">
                    Supervised/Unsupervised, Neural Networks, Transformers, GenAI, Overfitting vs Underfitting &amp; 50 Placement MCQs.
                  </p>
                  <a href="notes/ai-ml-dl.html" class="btn btn-outline btn-sm" style="width: 100%; justify-content: center;">
                    <span>Open AI/ML Notes →</span>
                  </a>
                </div>
              </div>

              <!-- Networking & Network Security Card -->
              <div class="rgb-card-wrapper">
                <div class="rgb-card-inner" style="padding: 1.75rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <span style="font-size: 2.5rem; line-height: 1;">🌐</span>
                    <span style="background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">97 Secs • 90 MCQs</span>
                  </div>
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #f8fafc;">Networking &amp; Security</h3>
                  <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 1.25rem;">
                    OSI 7 Layers, TCP/IP, CIDR Subnetting, CIA Triad, Firewalls, Cryptography, SQLi/XSS, Zero Trust &amp; 30 Viva Qs.
                  </p>
                  <a href="notes/networking-security.html" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
                    <span>Open Networking Notes →</span>
                  </a>
                </div>
              </div>

            </div>

            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="notes.html" class="btn-glow-rgb" style="padding: 0.75rem 2rem; font-size: 1rem;">
                <span>📚 Browse All Subject Notes in Master Hub →</span>
              </a>
            </div>
          </div>
        </section>

        <!-- Live CBT Interface Simulator Showcase -->
        <section class="cbt-showcase-section">
          <div class="container">
            <div class="cbt-showcase-grid">
              <div class="cbt-showcase-preview-frame">
                <img src="assets/images/cbt-simulator.jpg" 
                     alt="Computer-Based Test Examination Environment" 
                     class="cbt-showcase-img"
                     loading="lazy">
              </div>

              <div>
                <div class="badge badge-scenario" style="margin-bottom: 1rem;">
                  <span>CBT Engine Simulator</span>
                </div>
                <h2 style="font-size: 2rem; margin-bottom: 1.25rem; line-height: 1.25;">
                  Experience Real Exam Pressure Before Test Day
                </h2>
                <p style="color: var(--text-secondary); line-height: 1.65; margin-bottom: 2rem;">
                  Engineered to mirror high-stakes campus assessment consoles (TCS iON, AMCAT, CoCubes, and Superset) with true two-column desktop ergonomics.
                </p>

                <div class="cbt-feature-point">
                  <div class="cbt-feature-point-icon">📋</div>
                  <div>
                    <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">5-State Question Status Palette</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">
                      Instantly track Unvisited, Answered, Marked for Review, and Answered+Review questions.
                    </p>
                  </div>
                </div>

                <div class="cbt-feature-point">
                  <div class="cbt-feature-point-icon">⏱️</div>
                  <div>
                    <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">Non-Duplicating Countdown Timer</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">
                      Dynamic color warning thresholds (&lt; 5m amber, &lt; 1m pulsing red) with automated graceful submission.
                    </p>
                  </div>
                </div>

                <div class="cbt-feature-point">
                  <div class="cbt-feature-point-icon">📊</div>
                  <div>
                    <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">Granular Diagnostic Scorecard</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">
                      Accuracy analysis, time tracking, topic mastery bars, and instant full-solution review mode.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Modules Preview -->
        <section style="padding: 3rem 0 4rem; border-top: 1px solid var(--border-subtle);">
          <div class="container">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.25rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h2>Popular Preparation Modules</h2>
                <p>Start practicing high-yield technical topics immediately.</p>
              </div>
              <a href="#modules" class="btn btn-outline">View All 12 Modules →</a>
            </div>

            <div class="modules-grid" id="home-featured-modules"></div>
          </div>
        </section>
      `;

      // Render first 6 modules in preview
      const previewContainer = document.getElementById('home-featured-modules');
      if (previewContainer) {
        this.renderModuleCards(previewContainer, this.modules.slice(0, 6));
      }

      // Quick CBT button handler
      document.getElementById('btn-quick-cbt')?.addEventListener('click', () => {
        window.location.hash = '#cbt/programming-logic';
      });
    }

    renderModulesView(container) {
      container.innerHTML = `
        <div class="container">
          <div style="margin-bottom: 2.25rem;">
            <div class="hero-pill-badge" style="margin-bottom: 0.75rem;">
              <span>Curated Question Library</span>
            </div>
            <h1 style="margin-bottom: 0.5rem;">Technical Preparation Modules</h1>
            <p style="font-size: 1.1rem; color: var(--text-secondary);">
              Select any technical domain to practice in Learn Mode or launch a timed CBT Examination.
            </p>
          </div>

          <!-- Search & Filter Controls -->
          <div class="filter-bar">
            <div class="search-input-wrapper">
              <span class="search-icon">🔍</span>
              <input type="text" 
                     id="module-search-input" 
                     class="search-input" 
                     placeholder="Search modules by name, topic, or keyword (e.g. SQL, DNS, Git, Loops, XLOOKUP)..." 
                     aria-label="Search modules">
            </div>

            <div class="filter-controls">
              <select id="module-category-filter" class="filter-select" aria-label="Filter by Category">
                <option value="all">All Categories</option>
                <option value="Core Coding">Core Coding</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Data & Systems">Data & Systems</option>
                <option value="Web & Systems">Web & Systems</option>
                <option value="Practical Skills">Practical Skills</option>
                <option value="Productivity">Productivity (MS Office)</option>
              </select>
            </div>
          </div>

          <!-- Modules Grid -->
          <div class="modules-grid" id="all-modules-grid"></div>
        </div>
      `;

      const gridEl = document.getElementById('all-modules-grid');
      const searchInput = document.getElementById('module-search-input');
      const categoryFilter = document.getElementById('module-category-filter');

      const applyFilters = () => {
        const query = searchInput.value.toLowerCase().trim();
        const category = categoryFilter.value;

        const filtered = this.modules.filter(mod => {
          const matchesCategory = category === 'all' || mod.category === category;
          const matchesQuery = !query || 
            mod.name.toLowerCase().includes(query) ||
            mod.description.toLowerCase().includes(query) ||
            mod.topics.some(t => t.toLowerCase().includes(query));
          return matchesCategory && matchesQuery;
        });

        this.renderModuleCards(gridEl, filtered);
      };

      searchInput?.addEventListener('input', applyFilters);
      categoryFilter?.addEventListener('change', applyFilters);

      // Initial render
      this.renderModuleCards(gridEl, this.modules);
    }

    renderModuleCards(container, modulesList) {
      if (!container) return;

      if (modulesList.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1rem; color: var(--text-muted);">
            <div style="font-size: 3.5rem; margin-bottom: 1rem;">🔍</div>
            <h3>No modules matched your search criteria</h3>
            <p>Try searching for a different keyword or reset filters.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = modulesList.map(mod => {
        const questions = this.getModuleQuestions(mod.id);
        const qCount = (questions && questions.length) ? questions.length : (mod.questionCount || 0);

        return `
          <article class="module-card" style="--module-accent: ${mod.accentColor}; --module-accent-light: ${mod.accentLight};">
            <!-- Graphical Header Banner -->
            <div class="module-card-banner">
              <div class="module-icon-wrap">${mod.icon}</div>
              <span class="module-q-count">${qCount} Questions</span>
            </div>

            <!-- Card Body Content -->
            <div class="module-card-body">
              <div class="module-category-pill">${mod.category}</div>
              <h3 class="module-title">${mod.name}</h3>
              <p class="module-desc">${mod.description}</p>

              <div class="module-topics-list">
                ${mod.topics.slice(0, 4).map(t => `<span class="module-topic-tag">${t}</span>`).join('')}
                ${mod.topics.length > 4 ? `<span class="module-topic-tag">+${mod.topics.length - 4}</span>` : ''}
              </div>

              <div class="module-card-actions">
                ${mod.notesUrl ? `
                  <a href="${mod.notesUrl}" class="btn btn-outline btn-sm" title="Comprehensive Placement Notes" style="border-color: var(--brand-cyan); color: var(--brand-cyan);">
                    <span>📝 Notes</span>
                  </a>
                ` : ''}
                <a href="#practice/${mod.id}" class="btn btn-secondary btn-sm" title="Practice with instant solutions">
                  <span>📖 Practice</span>
                </a>
                <a href="#cbt/${mod.id}" class="btn btn-primary btn-sm" title="Take a timed examination">
                  <span>⏱️ Timed CBT</span>
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    renderAboutView(container) {
      container.innerHTML = `
        <div class="container" style="max-width: 880px; padding: 2.5rem 1.5rem;">
          <div class="hero-pill-badge" style="margin-bottom: 1rem;">
            <span>Platform Overview & Guide</span>
          </div>
          <h1 style="margin-bottom: 1.25rem;">About PlacementPrep</h1>
          <p style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2.5rem; color: var(--text-secondary);">
            PlacementPrep is an open, high-yield placement preparation and technical CBT examination platform built specifically for students and engineering graduates preparing for campus recruitment assessments at IT and service-based technology companies.
          </p>

          <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-xl); padding: 2.25rem; margin-bottom: 2.5rem; box-shadow: var(--shadow-sm);">
            <h2 style="font-size: 1.45rem; margin-bottom: 1rem;">Target Corporate Recruitment Patterns</h2>
            <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">
              Our question design and test structures are inspired by verified evaluation methodologies and syllabi of major recruiters:
            </p>
            <div class="recruiter-badges-grid" style="justify-content: flex-start; margin-bottom: 1.5rem;">
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #A100FF;"></span>Accenture Assessment</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #0076CE;"></span>TCS NQT Tech</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #007CC3;"></span>Infosys DSE / SE</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #1F70B8;"></span>Cognizant GenC</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #0070AD;"></span>Capgemini Pseudocode</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #E84C3D;"></span>Wipro Elite Tech</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #86BC25;"></span>Deloitte USI</div>
              <div class="recruiter-badge"><span class="recruiter-badge-dot" style="background: #ED6D00;"></span>LTIMindtree</div>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
              * Note: PlacementPrep practice material is company-pattern inspired and realistic fresher technical content. It is not affiliated with or endorsed as official proprietary exams of these entities.
            </p>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-xl); padding: 2.25rem; margin-bottom: 2.5rem; box-shadow: var(--shadow-sm);">
            <h2 style="font-size: 1.45rem; margin-bottom: 1.25rem;">The Two Study Modes</h2>
            
            <div style="margin-bottom: 1.75rem;">
              <h3 style="font-size: 1.15rem; color: var(--brand-primary); margin-bottom: 0.4rem;">1. Practice Mode (Instant Learning)</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                Ideal for daily learning. Selecting an answer immediately reveals correctness, comprehensive conceptual explanation, distractor analysis explaining why other options are wrong, real-world IT enterprise use cases, and common placement trap warnings.
              </p>
            </div>

            <div>
              <h3 style="font-size: 1.15rem; color: var(--brand-cyan); margin-bottom: 0.4rem;">2. Timed CBT Mode (Real Exam Simulator)</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                Replicates the exact pressure of an online assessment. Answers and solutions are strictly concealed during the test. Features real-time countdown timer with auto-submit, question status palette (Unvisited, Answered, Review), and a detailed diagnostic score card upon submission.
              </p>
            </div>
          </div>

          <div style="text-align: center;">
            <a href="#modules" class="btn btn-primary btn-lg">Start Your Placement Practice Now →</a>
          </div>
        </div>
      `;
    }
  }

  // Initialize application on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.App = new AppController();
    window.App.init();
  });
})();
