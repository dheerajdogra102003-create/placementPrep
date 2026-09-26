# notes_content_p1.py - Sections 01 to 05 of AI/ML/DL Placement Notes

def get_part1_html():
    return """
    <!-- SECTION 01: AI FUNDAMENTALS -->
    <article class="note-section" id="sec-01">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 01</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">AI Fundamentals & The AI / ML / DL Taxonomy</h2>
      <p class="section-intro">
        In technical recruitment screenings (TCS Digital, Accenture Advanced ASE, Cognizant), examiners test whether you understand the precise boundaries between Artificial Intelligence, Machine Learning, and Deep Learning—and why traditional rule-based expert systems failed at real-world scale.
      </p>

      <!-- Visual Hierarchy Diagram -->
      <div class="diagram-container">
        <div class="diagram-title">Taxonomy & Relationship Architecture</div>
        <pre class="diagram-art">
+-----------------------------------------------------------------------------------+
| ARTIFICIAL INTELLIGENCE (1950s)                                                   |
| Broadest field: Systems exhibiting human-like reasoning, logic, and planning.     |
| • Includes: Symbolic AI, Rule-Based Expert Systems, Graph Search, A*               |
|                                                                                   |
|   +-----------------------------------------------------------------------------+ |
|   | MACHINE LEARNING (1980s)                                                    | |
|   | Subfield of AI: Algorithms that learn mathematical patterns from data       | |
|   | without being explicitly programmed with deterministic if-else rules.       | |
|   | • Includes: Linear/Logistic Regression, Decision Trees, Random Forest, SVM  | |
|   |                                                                             | |
|   |   +-----------------------------------------------------------------------+ | |
|   |   | DEEP LEARNING (2010s)                                                 | | |
|   |   | Subfield of ML: Multilayer Artificial Neural Networks that perform   | | |
|   |   | automated hierarchical feature extraction directly from raw data.     | | |
|   |   | • Includes: MLP, CNNs (Computer Vision), RNNs/LSTMs, Transformers    | | |
|   |   +-----------------------------------------------------------------------+ | |
|   +-----------------------------------------------------------------------------+ |
+-----------------------------------------------------------------------------------+
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🤖 Narrow AI vs General AI</h4>
          <p><strong>Narrow AI (Weak AI):</strong> Designed and trained for one specific task (AlphaGo, facial recognition, Siri, chess engines). All deployed AI today is Narrow AI.<br><strong>General AI (AGI / Strong AI):</strong> Theoretical machine possessing human-level cognitive flexibility across any intellectual task.</p>
        </div>
        <div class="concept-card">
          <h4>📜 Symbolic / Rule-Based AI vs Statistical ML</h4>
          <p><strong>Symbolic / Rule-Based:</strong> Hand-crafted <code>IF (Symptom == Fever AND Cough) THEN Flu</code> rules created by human domain experts. Extremely brittle; cannot generalize to unprogrammed edge cases.<br><strong>Machine Learning:</strong> Feeds inputs and outcomes into an optimizer to learn statistical weight mappings automatically.</p>
        </div>
      </div>

      <!-- Comparison Table -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Artificial Intelligence</th>
              <th>Machine Learning</th>
              <th>Deep Learning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Scope</strong></td>
              <td>Umbrella discipline mimicking human intelligence</td>
              <td>Subset of AI learning from data patterns</td>
              <td>Subset of ML utilizing multilayer neural networks</td>
            </tr>
            <tr>
              <td><strong>Feature Extraction</strong></td>
              <td>Hand-crafted rules / knowledge base</td>
              <td>Manual Feature Engineering required</td>
              <td>Automatic Hierarchical Feature Learning</td>
            </tr>
            <tr>
              <td><strong>Data Requirement</strong></td>
              <td>Works on zero data (pure deterministic logic)</td>
              <td>Thousands of tabular data samples</td>
              <td>Tens of thousands to millions of high-dim samples</td>
            </tr>
            <tr>
              <td><strong>Hardware</strong></td>
              <td>Standard CPU execution</td>
              <td>Standard multi-core CPU / modest GPU</td>
              <td>Massive GPU / TPU tensor acceleration</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Real World Scenario -->
      <div class="scenario-box">
        <div class="scenario-tag">💼 Real-World Scenario: Banking Fraud Architecture</div>
        <div class="scenario-title">Rule-Based Filter vs Machine Learning Classifier</div>
        <div class="scenario-problem">
          A bank processes 20 million transactions daily. Initially, an expert system blocked cards if a transaction exceeded $5,000 outside the home city. Sophisticated attackers bypassed this by executing multiple rapid transactions of $4,990 across digital wallets.
        </div>
        <div class="scenario-solution">
          <strong>Engineering Decision:</strong> Shift from deterministic IF-THEN rules to an ML anomaly detection model (Isolation Forest / XGBoost). The ML model evaluates high-dimensional velocity features, device fingerprints, and geolocation anomalies simultaneously, catching fraudulent micro-transactions without hand-written rules.
        </div>
      </div>

      <!-- Placement Trap -->
      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #1</div>
        <div class="trap-desc">
          Never say "Deep Learning is always superior to Machine Learning." In corporate interviews, deploying a 50-layer deep neural network on a 2,000-row tabular customer churn CSV is a rookie failure. Deep Learning will heavily overfit and lacks interpretability. Tree ensembles (XGBoost, LightGBM) drastically outperform DL on small-to-medium tabular datasets!
        </div>
      </div>

      <!-- Memory Trick -->
      <div class="memory-trick">
        <span class="memory-icon">💡</span>
        <div class="memory-content">
          <strong>Placement Memory Trick:</strong> AI is the <em>goal</em> (intelligent behavior), ML is the <em>method</em> (learning from data), and DL is the <em>engine</em> (deep neural representation).
        </div>
      </div>

      <!-- Interview Q&A -->
      <div class="interview-box">
        <div class="interview-title">🎯 Top Interview Question</div>
        <div class="interview-q">"Why can't traditional Machine Learning handle raw images as effectively as Deep Learning?"</div>
        <div class="interview-a">
          Traditional ML requires manual feature extraction (e.g. SIFT, HOG, edge filters) before training. A 1080p image has over 6 million raw pixel values; passing raw pixels directly into SVM or Random Forest triggers the <em>Curse of Dimensionality</em> and destroys spatial pixel relationships. Deep Learning (CNNs) preserves 2D spatial locality and automatically learns hierarchical representations—from edges to textures to full facial features.
        </div>
      </div>
    </article>


    <!-- SECTION 02: INTELLIGENT AGENTS -->
    <article class="note-section" id="sec-02">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 02</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Intelligent Agents & The PEAS Framework</h2>
      <p class="section-intro">
        Russell & Norvig's agent framework forms the core of classical AI interview questions. An agent is anything that perceives its environment through sensors and acts upon that environment through actuators.
      </p>

      <!-- Architecture Diagram -->
      <div class="diagram-container">
        <div class="diagram-title">Agent-Environment Feedback Loop</div>
        <pre class="diagram-art">
                  +----------------------------------------------+
                  |                 ENVIRONMENT                  |
                  +----------------------------------------------+
                        |                                  ^
                        | Percepts                         | Actions
                        v                                  |
                  +-------------+                  +--------------+
                  |   SENSORS   |                  |  ACTUATORS   |
                  +-------------+                  +--------------+
                        |                                  ^
                        v                                  |
                  +-----------------------------------------------+
                  |               AGENT PROGRAM                   |
                  |  Percept History -> Decision Logic -> Action  |
                  +-----------------------------------------------+
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🎯 Rational Agent</h4>
          <p>An agent that selects whichever action maximizes its <strong>expected performance measure</strong>, given its percept history and built-in knowledge. <em>Rationality is NOT omniscience</em>—a rational agent maximizes expected success, not guaranteed perfection with future foresight.</p>
        </div>
        <div class="concept-card">
          <h4>📋 The PEAS Framework</h4>
          <p>Every AI agent environment is formally specified using <strong>P.E.A.S.</strong>:<br>
          • <strong>P</strong>erformance Measure: Objective metric of success.<br>
          • <strong>E</strong>nvironment: External world agent operates in.<br>
          • <strong>A</strong>ctuators: Mechanisms used to carry out actions.<br>
          • <strong>S</strong>ensors: Hardware/interfaces used to observe.</p>
        </div>
      </div>

      <!-- PEAS Table -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Agent Type</th>
              <th>Performance Measure (P)</th>
              <th>Environment (E)</th>
              <th>Actuators (A)</th>
              <th>Sensors (S)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Autonomous Taxi</strong></td>
              <td>Safe, fast, legal, comfortable trip; max profit</td>
              <td>Roads, pedestrians, weather, other vehicles</td>
              <td>Steering, accelerator, brake, display, horn</td>
              <td>Cameras, LiDAR, radar, GPS, speedometer</td>
            </tr>
            <tr>
              <td><strong>Medical Diagnostic AI</strong></td>
              <td>Healthy patient, minimized diagnostic cost</td>
              <td>Patient, hospital staff, medical records</td>
              <td>Display screen, prescription printer, test orders</td>
              <td>Keyboard (symptoms, lab data entry), EHR API</td>
            </tr>
            <tr>
              <td><strong>Spam Filter</strong></td>
              <td>High precision (no false blocks), high recall</td>
              <td>Email inbox, network stream</td>
              <td>Move to spam folder, deliver to inbox, tag</td>
              <td>Email parser, headers, text, IP source</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 5 Agent Types -->
      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Simple Reflex Agent</h4>
          <p>Acts solely on the <em>current percept</em> using condition-action rules: <code>IF car_in_front_brakes THEN brake()</code>. Fails completely in partially observable environments due to infinite loops.</p>
        </div>
        <div class="concept-card">
          <h4>2. Model-Based Reflex Agent</h4>
          <p>Maintains an internal <strong>state</strong> to track parts of the world it cannot see right now. Updates internal model based on how the world evolves independently and how its own actions affect the world.</p>
        </div>
        <div class="concept-card">
          <h4>3. Goal-Based Agent</h4>
          <p>Combines internal state with explicit <strong>goal information</strong>. Uses search and planning algorithms to evaluate which sequences of actions lead to the destination (e.g. GPS pathfinding).</p>
        </div>
        <div class="concept-card">
          <h4>4. Utility-Based Agent</h4>
          <p>When multiple paths achieve a goal, it computes a mathematical <strong>Utility Function</strong> to measure <em>how desirable</em> each state is (e.g. trading off travel speed vs fuel efficiency vs toll costs).</p>
        </div>
        <div class="concept-card">
          <h4>5. Learning Agent</h4>
          <p>Separated into four components: <strong>Critic</strong> (evaluates behavior against performance standard), <strong>Learning Element</strong> (makes improvements), <strong>Learning Goals</strong>, and <strong>Problem Generator</strong> (experiments with new actions).</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #2</div>
        <div class="trap-desc">
          Do not confuse an agent's <em>sensors</em> with its <em>percepts</em>. Sensors are the physical or software devices (e.g. Camera, Microphone, Keyboard). Percepts are the actual data readings received by the agent at any given instant (e.g. <code>[Red Light, Speed: 42 km/h]</code>).
        </div>
      </div>
    </article>


    <!-- SECTION 03: AI SEARCH ALGORITHMS -->
    <article class="note-section" id="sec-03">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 03</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Classical Search Algorithms & A* Pathfinding</h2>
      <p class="section-intro">
        Search algorithms find optimal sequence paths from an initial state to a goal state. Placement questions routinely test algorithm properties: <strong>Completeness</strong> (guaranteed to find a solution if one exists) and <strong>Optimality</strong> (guaranteed to find the lowest-cost path).
      </p>

      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Data Structure</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Complete?</th>
              <th>Optimal?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Breadth-First (BFS)</strong></td>
              <td>FIFO Queue</td>
              <td>O(b^d)</td>
              <td>O(b^d) (Memory bottleneck!)</td>
              <td>Yes (if b is finite)</td>
              <td>Yes (if all step costs are equal)</td>
            </tr>
            <tr>
              <td><strong>Depth-First (DFS)</strong></td>
              <td>LIFO Stack</td>
              <td>O(b^m)</td>
              <td>O(b * m) (Linear space!)</td>
              <td>No (can loop in infinite graphs)</td>
              <td>No (finds first path, not shortest)</td>
            </tr>
            <tr>
              <td><strong>Uniform Cost (UCS)</strong></td>
              <td>Priority Queue (by g(n))</td>
              <td>O(b^(1 + floor(C*/epsilon)))</td>
              <td>O(b^(1 + floor(C*/epsilon)))</td>
              <td>Yes</td>
              <td>Yes (for any positive step costs)</td>
            </tr>
            <tr>
              <td><strong>Greedy Best-First</strong></td>
              <td>Priority Queue (by h(n))</td>
              <td>O(b^m)</td>
              <td>O(b^m)</td>
              <td>No (can get stuck)</td>
              <td>No (ignores path cost already spent)</td>
            </tr>
            <tr>
              <td><strong>A* Search</strong></td>
              <td>Priority Queue (by f(n))</td>
              <td>O(b^d)</td>
              <td>O(b^d)</td>
              <td>Yes</td>
              <td>Yes (if h(n) is admissible & consistent)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- A* Search Formula -->
      <div class="formula-block">
        <div class="formula-name">A* Total Evaluation Function</div>
        <div class="formula-math">f(n) = g(n) + h(n)</div>
        <div class="formula-desc">
          • <strong>g(n):</strong> Exact cumulative path cost incurred from the start node to current node <code>n</code>.<br>
          • <strong>h(n):</strong> Heuristic estimated cost from node <code>n</code> to the goal state.<br>
          • <strong>f(n):</strong> Estimated total cost of the cheapest solution passing through node <code>n</code>.
        </div>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📐 Admissible Heuristic (Crucial Placement Rule)</h4>
          <p>A heuristic <code>h(n)</code> is <strong>admissible</strong> if it <em>never overestimates</em> the true cost to reach the goal. Formally: <code>0 &le; h(n) &le; h*(n)</code> where <code>h*(n)</code> is the true minimal cost. Example: Straight-line Euclidean distance on a roadmap is always admissible because roads can never be shorter than a straight line.</p>
        </div>
        <div class="concept-card">
          <h4>🔄 Consistent / Monotonic Heuristic</h4>
          <p>For every node <code>n</code> and every successor <code>n'</code> generated by action <code>a</code>: <code>h(n) &le; c(n, a, n') + h(n')</code>. This satisfies the triangle inequality and guarantees that A* never needs to re-open an already visited node when graph search is used.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #3</div>
        <div class="trap-desc">
          What happens if <code>h(n) = 0</code> in A*? The formula collapses to <code>f(n) = g(n)</code>, which turns A* exactly into <strong>Uniform Cost Search (Dijkstra's Algorithm)</strong>! Conversely, if <code>g(n) = 0</code>, A* becomes <strong>Greedy Best-First Search</strong>, losing its optimality guarantee.
        </div>
      </div>
    </article>


    <!-- SECTION 04: MACHINE LEARNING FUNDAMENTALS -->
    <article class="note-section" id="sec-04">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 04</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Machine Learning Paradigms & Problem Framing</h2>
      <p class="section-intro">
        Before choosing an algorithm, an engineer must frame the business problem into the correct paradigm: Supervised, Unsupervised, Semi-Supervised, or Reinforcement Learning.
      </p>

      <!-- Learning Type Decision Flowchart -->
      <div class="diagram-container">
        <div class="diagram-title">ML Learning Paradigm Decision Tree</div>
        <pre class="diagram-art">
                       DO YOU HAVE GROUND-TRUTH TARGET LABELS (y)?
                                     /             \
                                   YES              NO
                                   /                 \
                      SUPERVISED LEARNING      UNSUPERVISED LEARNING
                            /       \                    |
          Is target continuous?     Is target discrete?   Do you need inherent groupings?
                  /                         \                    |
             REGRESSION               CLASSIFICATION         CLUSTERING
       (Predict Stock Price,      (Spam vs Not Spam,      (Customer Segmentation,
        House Cost, Temperature)   Medical Tumor Stage)    Gene Expression Clusters)
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Supervised Learning</h4>
          <p>Training data contains input features (matrix <strong>X</strong>) paired with verified target labels (vector <strong>y</strong>). The model learns mapping function <code>y = f(X)</code>. Evaluated on unseen test data using ground-truth error metrics.</p>
        </div>
        <div class="concept-card">
          <h4>2. Unsupervised Learning</h4>
          <p>Training data contains only features (<strong>X</strong>) without labels (<strong>y</strong>). The algorithm discovers latent structures, densities, and clusters on its own (K-Means, PCA, Hierarchical Clustering).</p>
        </div>
        <div class="concept-card">
          <h4>3. Semi-Supervised Learning</h4>
          <p>Employed when labeling data is prohibitively expensive (e.g. professional radiologists annotating 500,000 CT scans). Uses a tiny labeled dataset (~2%) combined with a vast unlabeled dataset (~98%) via pseudo-labeling.</p>
        </div>
        <div class="concept-card">
          <h4>4. Reinforcement Learning (RL)</h4>
          <p>No static training dataset. An <strong>Agent</strong> takes <strong>Actions</strong> inside an <strong>Environment</strong>, receives state observations, and maximizes cumulative <strong>Rewards</strong> through trial and error (Markov Decision Process).</p>
        </div>
      </div>

      <div class="scenario-box">
        <div class="scenario-tag">💼 Real-World Scenario: E-Commerce Platform</div>
        <div class="scenario-title">Identifying Machine Learning Paradigms</div>
        <div class="scenario-problem">
          Amazon wants to deploy 3 systems: (1) Predict if a user will churn next month based on 5 years of recorded cancelations, (2) Group 10 million anonymous browsing visitors into 5 shopping personas, (3) Optimize a robotic warehouse packing arm.
        </div>
        <div class="scenario-solution">
          (1) <strong>Supervised Classification:</strong> Historical labeled churn outcomes exist.<br>
          (2) <strong>Unsupervised Clustering:</strong> No pre-assigned persona labels exist in visitor clickstream data.<br>
          (3) <strong>Reinforcement Learning:</strong> Physical agent interacting with packages, rewarded for packing density and penalized for dropping items.
        </div>
      </div>
    </article>


    <!-- SECTION 05: DATA PREPROCESSING -->
    <article class="note-section" id="sec-05">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 05</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Data Preprocessing & The Data Leakage Trap</h2>
      <p class="section-intro">
        "Garbage in, garbage out." Over 70% of enterprise ML engineering time is spent cleaning raw data. Placement test questions heavily target encoding strategies, feature scaling rules, and subtle data leakage bugs in scikit-learn pipelines.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🧹 Handling Missing Data</h4>
          <p>• <strong>Numerical Features:</strong> Impute with Median (robust to outliers) rather than Mean if data is skewed.<br>• <strong>Categorical Features:</strong> Impute with Mode (most frequent) or create a distinct 'Missing' category.<br>• <strong>Drop Rows:</strong> Only acceptable if missingness is completely random and &lt; 2% of the dataset.</p>
        </div>
        <div class="concept-card">
          <h4>🔢 Label vs One-Hot Encoding</h4>
          <p>• <strong>Label / Ordinal Encoding:</strong> Assigns integers (0, 1, 2). Use <em>only</em> when natural order exists (e.g. <code>Small: 0, Medium: 1, Large: 2</code>).<br>• <strong>One-Hot Encoding:</strong> Creates binary dummy columns. Use for nominal unordered data (e.g. <code>City: [Tokyo, London, NYC]</code>). Prevents the model from hallucinating that <code>NYC (2) > Tokyo (0)</code>.</p>
        </div>
      </div>

      <!-- Feature Scaling Comparison -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Technique</th>
              <th>Mathematical Formula</th>
              <th>Resulting Distribution</th>
              <th>Sensitivity to Outliers</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Standardization (StandardScaler)</strong></td>
              <td><code>z = (x - μ) / σ</code></td>
              <td>Mean = 0, Variance / Std Dev = 1</td>
              <td><strong>Robust</strong> (does not squash outliers into a narrow bound)</td>
              <td>Algorithms assuming normal distribution: PCA, Logistic Regression, Linear Regression, SVM, Neural Nets</td>
            </tr>
            <tr>
              <td><strong>Normalization (MinMaxScaler)</strong></td>
              <td><code>x_norm = (x - x_min) / (x_max - x_min)</code></td>
              <td>Strict bounded range [0, 1]</td>
              <td><strong>Highly Sensitive</strong> (outliers compress non-outlier data into tiny fractions)</td>
              <td>Image pixel processing [0, 255] &rarr; [0, 1], K-Nearest Neighbors, algorithms requiring bounded inputs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Outlier IQR Formula -->
      <div class="formula-block">
        <div class="formula-name">Outlier Detection: Tukey's IQR Method</div>
        <div class="formula-math">IQR = Q3 - Q1 &nbsp;|&nbsp; Lower Bound = Q1 - 1.5*IQR &nbsp;|&nbsp; Upper Bound = Q3 + 1.5*IQR</div>
        <div class="formula-desc">
          Any data point strictly below the Lower Bound or strictly above the Upper Bound is classified as an outlier. Unlike standard deviation thresholding, IQR uses percentiles and is completely unaffected by extreme outlier distortion.
        </div>
      </div>

      <!-- Python Pipeline Code & Data Leakage -->
      <div class="code-block">
        <div class="code-header">
          <span>Python Scikit-Learn: Correct Preprocessing Pipeline</span>
          <span>Correct vs Leaking Code</span>
        </div>
        <span class="code-comment"># ❌ CRITICAL BUG: Data Leakage (Fitting scaler on full dataset before splitting)</span><br>
        <span class="code-comment"># scaler.fit_transform(X)  <-- Test set information leaks into mean and variance!</span><br><br>
        <span class="code-comment"># ✅ CORRECT ENTERPRISE PRACTICE:</span><br>
        <span class="code-kw">from</span> sklearn.model_selection <span class="code-kw">import</span> train_test_split<br>
        <span class="code-kw">from</span> sklearn.preprocessing <span class="code-kw">import</span> StandardScaler<br><br>
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=<span class="code-str">0.2</span>, random_state=<span class="code-str">42</span>)<br>
        scaler = StandardScaler()<br>
        X_train_scaled = scaler.<span class="code-fn">fit_transform</span>(X_train)  <span class="code-comment"># Learns mu and sigma from train only</span><br>
        X_test_scaled = scaler.<span class="code-fn">transform</span>(X_test)         <span class="code-comment"># Uses train mu and sigma on test</span>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #4: The Dummy Variable Trap</div>
        <div class="trap-desc">
          When one-hot encoding a categorical feature with <code>k</code> distinct categories, you must drop one dummy column (<code>drop_first=True</code> in pandas or <code>OneHotEncoder(drop='first')</code> in scikit-learn). If you keep all <code>k</code> columns, they sum up to 1 for every row, introducing <strong>perfect multicollinearity</strong> with the intercept column and breaking Linear Regression!
        </div>
      </div>
    </article>
    """
