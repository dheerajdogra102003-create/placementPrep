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
    }

    init() {
      this.bindGlobalEvents();
      this.handleRoute();
      window.addEventListener('hashchange', () => this.handleRoute());
    }

    bindGlobalEvents() {
      // Theme Toggle Buttons
      document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => window.ThemeManager.toggleTheme());
      });

      // Mobile Menu Toggle
      const mobileNavToggle = document.getElementById('mobile-nav-toggle');
      const navMenu = document.getElementById('nav-menu');
      mobileNavToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('mobile-active');
      });

      // Close mobile nav on navigation link click
      document.querySelectorAll('.nav-item-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu?.classList.remove('mobile-active');
        });
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
      const mod = this.modules.find(m => m.id === moduleId);
      if (!mod) return [];
      const varName = mod.dataVar;
      return window[varName] || [];
    }

    startQuizView(container, moduleId, mode) {
      const modId = moduleId || 'programming';
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
              Comprehensive fresher technical preparation and realistic Computer-Based Test (CBT) examination platform. Designed around hiring patterns for Accenture, TCS, Infosys, Cognizant, Wipro, and global IT service enterprises.
            </p>

            <div class="hero-cta-group">
              <a href="#modules" class="btn btn-primary btn-lg">
                <span>⚡ Explore All 12 Modules</span>
              </a>
              <button type="button" class="btn btn-glass btn-lg" id="btn-quick-cbt">
                <span>⏱️ Launch Timed Mock Test</span>
              </button>
            </div>

            <!-- Key Metrics Bar -->
            <div class="hero-stats-grid">
              <div class="stat-card">
                <div class="stat-value">12</div>
                <div class="stat-label">Specialized Modules</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">60+</div>
                <div class="stat-label">Placement MCQs</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">100%</div>
                <div class="stat-label">CBT Simulation</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">${stats.streak} Days</div>
                <div class="stat-label">Study Streak</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Showcase Section -->
        <section style="padding: 3rem 0; border-top: 1px solid var(--border-subtle);">
          <div class="container">
            <div style="text-align: center; max-width: 650px; margin: 0 auto 2.5rem;">
              <h2 style="margin-bottom: 0.75rem;">Engineered for Placement Excellence</h2>
              <p>Everything you need to master technical screening assessments with confidence.</p>
            </div>

            <div class="features-grid">
              <div class="stat-card">
                <div style="font-size: 2rem; margin-bottom: 0.75rem;">🖥️</div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Realistic CBT Examination Engine</h3>
                <p style="font-size: 0.9rem;">
                  Replicates TCS iON & AMCAT testing environments with 2-column workspace, question status palettes, countdown timer warnings, and review flags.
                </p>
              </div>

              <div class="stat-card">
                <div style="font-size: 2rem; margin-bottom: 0.75rem;">💡</div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Deep Conceptual & Distractor Explanations</h3>
                <p style="font-size: 0.9rem;">
                  Every question includes detailed solutions, distractor breakdown ("Why other options are wrong"), real-world IT context, and common placement traps.
                </p>
              </div>

              <div class="stat-card">
                <div style="font-size: 2rem; margin-bottom: 0.75rem;">📊</div>
                <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Granular Diagnostic Scorecard</h3>
                <p style="font-size: 0.9rem;">
                  Measure accuracy, review questions by difficulty, track topic-wise weak areas, and evaluate placement cutoff benchmarks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Modules Preview -->
        <section style="padding: 3rem 0 4rem; border-top: 1px solid var(--border-subtle);">
          <div class="container">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
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
        window.location.hash = '#cbt/programming';
      });
    }

    renderModulesView(container) {
      container.innerHTML = `
        <div class="container">
          <div style="margin-bottom: 2rem;">
            <h1 style="margin-bottom: 0.5rem;">Technical Preparation Modules</h1>
            <p>Select any domain to practice in Learn Mode or launch a timed CBT Examination.</p>
          </div>

          <!-- Search & Filter Controls -->
          <div class="filter-bar">
            <div class="search-input-wrapper">
              <span class="search-icon">🔍</span>
              <input type="text" 
                     id="module-search-input" 
                     class="search-input" 
                     placeholder="Search modules by name, topic, or keyword (e.g. SQL, DNS, Git, Loops)..." 
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
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <h3>No modules matched your search criteria</h3>
            <p>Try searching for a different keyword or reset filters.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = modulesList.map(mod => {
        const questions = this.getModuleQuestions(mod.id);
        const qCount = questions.length || 5;

        return `
          <article class="module-card" style="--module-accent: ${mod.accentColor}; --module-accent-light: ${mod.accentLight};">
            <div class="module-card-header">
              <div class="module-icon-wrap">${mod.icon}</div>
              <span class="module-q-count">${qCount} Questions</span>
            </div>

            <h3 class="module-title">${mod.name}</h3>
            <p class="module-desc">${mod.description}</p>

            <div class="module-topics-list">
              ${mod.topics.slice(0, 4).map(t => `<span class="module-topic-tag">${t}</span>`).join('')}
              ${mod.topics.length > 4 ? `<span class="module-topic-tag">+${mod.topics.length - 4}</span>` : ''}
            </div>

            <div class="module-card-actions">
              <a href="#practice/${mod.id}" class="btn btn-secondary btn-sm" title="Practice with instant solutions">
                <span>📖 Practice</span>
              </a>
              <a href="#cbt/${mod.id}" class="btn btn-primary btn-sm" title="Take a timed examination">
                <span>⏱️ Timed CBT</span>
              </a>
            </div>
          </article>
        `;
      }).join('');
    }

    renderAboutView(container) {
      container.innerHTML = `
        <div class="container" style="max-width: 860px; padding: 2rem 1.5rem;">
          <h1 style="margin-bottom: 1rem;">About PlacementPrep</h1>
          <p style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">
            PlacementPrep is an open, high-yield placement preparation and technical CBT examination platform built specifically for students and engineering graduates preparing for campus recruitment assessments at IT and service-based technology companies.
          </p>

          <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2.5rem;">
            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Target Corporate Recruitment Patterns</h2>
            <p style="margin-bottom: 1.25rem;">
              Our question design and test structures are inspired by verified evaluation methodologies and syllabi of major recruiters:
            </p>
            <ul style="list-style-type: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; color: var(--text-primary); font-weight: 500;">
              <li>✓ Accenture Technical Assessment</li>
              <li>✓ TCS NQT (National Qualifier Test)</li>
              <li>✓ Infosys DSE & SE Technical</li>
              <li>✓ Cognizant GenC / Elevate</li>
              <li>✓ Capgemini Pseudocode & Tech</li>
              <li>✓ Wipro Elite National Talent Hunt</li>
              <li>✓ HCLTech & Tech Mahindra</li>
              <li>✓ LTIMindtree & Deloitte USI</li>
            </ul>
            <p style="margin-top: 1.25rem; font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
              * Note: PlacementPrep practice material is company-pattern inspired and realistic fresher technical content. It is not affiliated with or endorsed as official proprietary exams of these entities.
            </p>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2.5rem;">
            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">The Two Study Modes</h2>
            
            <div style="margin-bottom: 1.5rem;">
              <h3 style="font-size: 1.1rem; color: var(--brand-primary); margin-bottom: 0.4rem;">1. Practice Mode (Instant Learning)</h3>
              <p style="font-size: 0.95rem;">
                Ideal for daily learning. Selecting an answer immediately reveals correctness, comprehensive conceptual explanation, distractor analysis explaining why other options are wrong, real-world IT enterprise use cases, and common placement trap warnings.
              </p>
            </div>

            <div>
              <h3 style="font-size: 1.1rem; color: var(--brand-cyan); margin-bottom: 0.4rem;">2. Timed CBT Mode (Real Exam Simulator)</h3>
              <p style="font-size: 0.95rem;">
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
