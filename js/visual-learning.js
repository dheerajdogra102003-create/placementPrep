/**
 * ==========================================================================
 * PLACEMENTPREP - GLOBAL VISUAL LEARNING INTERACTIVE ENGINE
 * File: js/visual-learning.js
 * Purpose: Handles interactive diagrams, sliders, steppers, and challenge reveals
 * ==========================================================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initVisualLearning);

  function initVisualLearning() {
    initMiniChallengeToggles();
    initCloudScalabilitySimulator();
    initGitWorkflowSimulator();
    initDockerVsVmToggle();
    initOsiLayerInspector();
    initMlPipelineExplorer();
  }

  // -------------------------------------------------------------------------
  // 1. Mini-Challenge Click-to-Reveal
  // -------------------------------------------------------------------------
  function initMiniChallengeToggles() {
    document.querySelectorAll('.challenge-reveal-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const parent = this.closest('.mini-challenge-box');
        if (!parent) return;
        const answer = parent.querySelector('.challenge-answer');
        if (!answer) return;

        const isShown = answer.classList.contains('show');
        if (isShown) {
          answer.classList.remove('show');
          this.innerHTML = '<span>💡 Reveal Verified Answer &amp; Placement Trap</span>';
          this.setAttribute('aria-expanded', 'false');
        } else {
          answer.classList.add('show');
          this.innerHTML = '<span>🔒 Hide Answer</span>';
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 2. Interactive Cloud Scalability & Elasticity Simulator
  // -------------------------------------------------------------------------
  function initCloudScalabilitySimulator() {
    const slider = document.getElementById('cloud-traffic-slider');
    const trafficDisplay = document.getElementById('cloud-traffic-val');
    const instancesDisplay = document.getElementById('cloud-instances-val');
    const costDisplay = document.getElementById('cloud-cost-val');
    const serversContainer = document.getElementById('cloud-servers-visual');
    if (!slider || !serversContainer) return;

    function updateSimulation() {
      const traffic = parseInt(slider.value, 10);
      const instances = Math.max(1, Math.ceil(traffic / 2500));
      const hourlyCost = (instances * 0.08).toFixed(2);

      if (trafficDisplay) trafficDisplay.textContent = traffic.toLocaleString() + ' users/sec';
      if (instancesDisplay) instancesDisplay.textContent = instances + ' Auto-Scaled Instances';
      if (costDisplay) costDisplay.textContent = '$' + hourlyCost + '/hr';

      // Render server badges
      serversContainer.innerHTML = '';
      for (let i = 1; i <= instances; i++) {
        const s = document.createElement('div');
        s.style.cssText = 'background:#1E293B; border:1px solid #10B981; border-radius:6px; padding:0.4rem 0.65rem; color:#34D399; font-size:0.75rem; font-weight:700; display:flex; align-items:center; gap:0.35rem; animation:fadeIn 0.2s ease;';
        s.innerHTML = '<span style="color:#10B981;">●</span> EC2-Node-' + i;
        serversContainer.appendChild(s);
      }
    }

    slider.addEventListener('input', updateSimulation);
    updateSimulation();
  }

  // -------------------------------------------------------------------------
  // 3. Interactive Git 3-Stage Workflow Animator
  // -------------------------------------------------------------------------
  function initGitWorkflowSimulator() {
    const container = document.getElementById('git-interactive-simulator');
    if (!container) return;

    const buttons = container.querySelectorAll('.git-step-btn');
    const statusText = container.querySelector('.git-status-text');
    const commandText = container.querySelector('.git-command-text');
    const fileBoxes = container.querySelectorAll('.git-stage-lane');

    const steps = [
      {
        lane: 0,
        cmd: '$ echo "console.log(\'Hello\')" > app.js',
        desc: 'File created/modified in <strong>Working Directory</strong>. Currently Untracked by Git.',
        color: '#F87171'
      },
      {
        lane: 1,
        cmd: '$ git add app.js',
        desc: 'File indexed into <strong>Staging Area</strong>. Git snapshot prepared for next commit.',
        color: '#FBBF24'
      },
      {
        lane: 2,
        cmd: '$ git commit -m "feat: initial commit"',
        desc: 'Permanent snapshot created with SHA hash in <strong>Local Repository (HEAD)</strong>.',
        color: '#34D399'
      },
      {
        lane: 3,
        cmd: '$ git push origin main',
        desc: 'Commit uploaded to <strong>GitHub Remote Repository</strong>. Team can collaborate.',
        color: '#C084FC'
      }
    ];

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', function () {
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        if (statusText) statusText.innerHTML = steps[idx].desc;
        if (commandText) commandText.textContent = steps[idx].cmd;

        fileBoxes.forEach((lane, lIdx) => {
          if (lIdx === steps[idx].lane) {
            lane.style.borderColor = steps[idx].color;
            lane.style.background = 'rgba(255,255,255,0.06)';
          } else {
            lane.style.borderColor = 'rgba(255,255,255,0.1)';
            lane.style.background = 'transparent';
          }
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. Docker Container vs Virtual Machine Toggle
  // -------------------------------------------------------------------------
  function initDockerVsVmToggle() {
    const vmBtn = document.getElementById('toggle-show-vm');
    const dockerBtn = document.getElementById('toggle-show-docker');
    const vmView = document.getElementById('arch-view-vm');
    const dockerView = document.getElementById('arch-view-docker');
    if (!vmBtn || !dockerBtn || !vmView || !dockerView) return;

    vmBtn.addEventListener('click', function () {
      vmBtn.classList.add('active');
      dockerBtn.classList.remove('active');
      vmView.style.display = 'block';
      dockerView.style.display = 'none';
    });

    dockerBtn.addEventListener('click', function () {
      dockerBtn.classList.add('active');
      vmBtn.classList.remove('active');
      dockerView.style.display = 'block';
      vmView.style.display = 'none';
    });
  }

  // -------------------------------------------------------------------------
  // 5. Interactive OSI Layer Inspector
  // -------------------------------------------------------------------------
  function initOsiLayerInspector() {
    const layerButtons = document.querySelectorAll('.osi-layer-pill');
    const infoPanel = document.getElementById('osi-layer-info-panel');
    if (!layerButtons.length || !infoPanel) return;

    const layerData = {
      7: { name: 'Layer 7: Application', pdu: 'Data', protocols: 'HTTP, HTTPS, DNS, FTP, SMTP, SSH', role: 'Provides network services directly to end-user applications.' },
      6: { name: 'Layer 6: Presentation', pdu: 'Data (Formatted)', protocols: 'SSL/TLS, JPEG, ASCII, MPEG, JSON', role: 'Data encryption, decryption, syntax conversion, and compression.' },
      5: { name: 'Layer 5: Session', pdu: 'Data', protocols: 'RPC, PPTP, NetBIOS, Sockets', role: 'Establishes, manages, and terminates persistent network connections.' },
      4: { name: 'Layer 4: Transport', pdu: 'Segments (TCP) / Datagrams (UDP)', protocols: 'TCP (Reliable, Ports), UDP (Fast, Low latency)', role: 'End-to-end transport, port-to-port multiplexing, flow control.' },
      3: { name: 'Layer 3: Network', pdu: 'Packets', protocols: 'IPv4, IPv6, ICMP, ARP, OSPF, BGP', role: 'Logical IP addressing, routing packets across independent networks (Router).' },
      2: { name: 'Layer 2: Data Link', pdu: 'Frames', protocols: 'Ethernet 802.3, Wi-Fi 802.11, MAC, PPP', role: 'Physical MAC addressing, node-to-node frame transfer within LAN (Switch).' },
      1: { name: 'Layer 1: Physical', pdu: 'Bits (0 and 1)', protocols: 'Cat6 Cables, Fiber Optics, Radio Waves', role: 'Raw electrical pulses, light signals, radio transmission (Hub/Repeater).' }
    };

    layerButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        layerButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const num = this.getAttribute('data-layer');
        const d = layerData[num];
        if (d && infoPanel) {
          infoPanel.innerHTML = `
            <div style="font-size:1.1rem; font-weight:800; color:#38BDF8; margin-bottom:0.4rem;">${d.name}</div>
            <div style="font-size:0.9rem; color:#CBD5E1; margin-bottom:0.3rem;"><strong>PDU (Data Unit):</strong> <span style="color:#34D399; font-weight:700;">${d.pdu}</span></div>
            <div style="font-size:0.9rem; color:#CBD5E1; margin-bottom:0.4rem;"><strong>Key Protocols:</strong> ${d.protocols}</div>
            <div style="font-size:0.85rem; color:#94A3B8;">${d.role}</div>
          `;
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Machine Learning Pipeline Explorer
  // -------------------------------------------------------------------------
  function initMlPipelineExplorer() {
    const stageButtons = document.querySelectorAll('.ml-stage-btn');
    const stageDesc = document.getElementById('ml-stage-desc');
    if (!stageButtons.length || !stageDesc) return;

    const stages = {
      1: { title: 'Stage 1: Data Preprocessing & Cleaning', details: 'Handle missing values (imputation), remove duplicate records, scale features (StandardScaler, MinMaxScaler), encode categorical variables (One-Hot / Label encoding).' },
      2: { title: 'Stage 2: Feature Engineering & Selection', details: 'Create high-yield derived attributes, remove collinear features using VIF (Variance Inflation Factor), apply PCA (Principal Component Analysis) for dimensionality reduction.' },
      3: { title: 'Stage 3: Train-Test Split (80/20)', details: 'Strict isolation of training data from testing data to prevent data leakage. Stratified K-Fold cross-validation ensures balanced class distributions.' },
      4: { title: 'Stage 4: Model Training & Hyperparameter Tuning', details: 'Fit learning algorithms (Random Forest, Gradient Boosting, XGBoost) and tune hyperparameters using GridSearchCV / Optuna to minimize cost/loss function.' },
      5: { title: 'Stage 5: Evaluation & Production Deployment', details: 'Compute Confusion Matrix, Precision, Recall, ROC-AUC, and F1-score on unseen test set. Export model via ONNX/Pickle and deploy as REST API endpoint.' }
    };

    stageButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        stageButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const s = stages[this.getAttribute('data-stage')];
        if (s && stageDesc) {
          stageDesc.innerHTML = `
            <div style="font-size:1.05rem; font-weight:800; color:#C084FC; margin-bottom:0.4rem;">${s.title}</div>
            <p style="font-size:0.9rem; color:#CBD5E1; line-height:1.6; margin:0;">${s.details}</p>
          `;
        }
      });
    });
  }

})();
