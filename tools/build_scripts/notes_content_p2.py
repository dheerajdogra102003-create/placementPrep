# notes_content_p2.py - Sections 06 to 14 of AI/ML/DL Placement Notes

def get_part2_html():
    return """
    <!-- SECTION 06: REGRESSION -->
    <article class="note-section" id="sec-06">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 06</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Regression: Linear, Multiple & Logistic</h2>
      <p class="section-intro">
        Regression models continuous target variables. Placement exams frequently test cost function derivatives, multicollinearity, R-squared interpretation, and the classification nature of Logistic Regression.
      </p>

      <!-- Formula Block: Linear Regression -->
      <div class="formula-block">
        <div class="formula-name">Simple Linear Regression Model</div>
        <div class="formula-math">y_hat = w1 * x + w0 &nbsp;|&nbsp; Cost Function (MSE) = (1/n) * Σ(y_i - y_hat_i)^2</div>
        <div class="formula-desc">
          • <strong>w1 (Slope / Weight):</strong> Indicates the rate of change in target <code>y</code> for every 1-unit increase in feature <code>x</code>.<br>
          • <strong>w0 (Intercept / Bias):</strong> The predicted value of <code>y</code> when all input features are zero.<br>
          • <strong>Ordinary Least Squares (OLS):</strong> Closed-form analytical solution finding weights that minimize the sum of squared residuals: <code>w = (X^T * X)^(-1) * X^T * y</code>.
        </div>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📈 R-Squared (Coefficient of Determination)</h4>
          <p>Measures the proportion of variance in the dependent variable explained by independent features: <code>R^2 = 1 - (SS_res / SS_tot)</code>.<br>• <strong>R^2 = 1.0:</strong> Perfect model predictions.<br>• <strong>R^2 = 0.0:</strong> Performs no better than predicting the simple mean <code>y_bar</code>.<br>• <strong>R^2 &lt; 0.0:</strong> Model is worse than a horizontal line predicting the average!</p>
        </div>
        <div class="concept-card">
          <h4>⚠️ Adjusted R-Squared</h4>
          <p>Standard R-squared <em>always increases or stays constant</em> when adding new features, even completely useless random noise. <strong>Adjusted R-squared</strong> penalizes the addition of non-informative variables: <code>Adj_R^2 = 1 - [(1 - R^2)*(n - 1) / (n - k - 1)]</code> where <code>k</code> is the number of features.</p>
        </div>
      </div>

      <!-- Logistic Regression Sigmoid -->
      <div class="formula-block">
        <div class="formula-name">Logistic Regression Sigmoid Function</div>
        <div class="formula-math">p(y = 1 | x) = σ(z) = 1 / (1 + e^(-z)) &nbsp; where &nbsp; z = w^T * x + b</div>
        <div class="formula-desc">
          Squashes any continuous real number from <code>(-∞, +∞)</code> into a valid probability bounded strictly between <code>(0, 1)</code>. The log-odds (logit) is linear: <code>ln(p / (1 - p)) = w^T * x + b</code>.
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #5: "Regression" in Logistic Regression</div>
        <div class="trap-desc">
          Despite containing "Regression" in its name, <strong>Logistic Regression is a CLASSIFICATION algorithm</strong>. It uses a sigmoid function to output class probabilities and applies a decision threshold (default 0.50) to classify instances into discrete categories (0 or 1).
        </div>
      </div>

      <!-- Linear vs Logistic Comparison Table -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Linear Regression</th>
              <th>Logistic Regression</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Target Variable (y)</strong></td>
              <td>Continuous real numbers (e.g. Salary: $65,000)</td>
              <td>Discrete categorical classes (e.g. Default: 0 or 1)</td>
            </tr>
            <tr>
              <td><strong>Output Range</strong></td>
              <td>(-∞, +∞) unbounded</td>
              <td>Bounded between [0, 1] (Probability)</td>
            </tr>
            <tr>
              <td><strong>Cost Function</strong></td>
              <td>Mean Squared Error (Convex surface)</td>
              <td>Binary Cross-Entropy / Log Loss (Convex surface)</td>
            </tr>
            <tr>
              <td><strong>Decision Boundary</strong></td>
              <td>Continuous fitting hyperplane</td>
              <td>Linear hyperplane separating positive & negative classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 07: CLASSIFICATION -->
    <article class="note-section" id="sec-07">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 07</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Classification Paradigms & Decision Boundaries</h2>
      <p class="section-intro">
        Classification maps input features to categorical outcomes. Freshers must distinguish between binary, multiclass, and multilabel classification, and understand how decision thresholds affect real-world outcomes.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Binary Classification</h4>
          <p>Two mutually exclusive classes (e.g. Spam vs Not Spam, Fraud vs Legitimate). Model outputs <code>P(y=1)</code>. If <code>P &ge; threshold</code> &rarr; Class 1, else Class 0.</p>
        </div>
        <div class="concept-card">
          <h4>2. Multiclass Classification</h4>
          <p>More than two classes, but each sample belongs to <em>exactly one</em> class (e.g. MNIST digit 0-9, Animal [Cat, Dog, Bird]). Handled via <strong>One-vs-Rest (OvR)</strong> or <strong>Softmax</strong>.</p>
        </div>
        <div class="concept-card">
          <h4>3. Multilabel Classification</h4>
          <p>Each sample can belong to <em>multiple classes simultaneously</em> (e.g. Movie tags: <code>[Action, Sci-Fi, Adventure]</code>). Requires independent binary sigmoid activations for each label rather than Softmax.</p>
        </div>
      </div>

      <!-- One-vs-Rest vs One-vs-One -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Number of Models for K Classes</th>
              <th>How it Operates</th>
              <th>Best Used For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>One-vs-Rest (OvR / OvA)</strong></td>
              <td><strong>K</strong> binary models</td>
              <td>Model 1 trains Class 1 vs (All others combined). Picks class with highest probability.</td>
              <td>Default in scikit-learn for Logistic Regression; fast & highly scalable</td>
            </tr>
            <tr>
              <td><strong>One-vs-One (OvO)</strong></td>
              <td><strong>K * (K - 1) / 2</strong> binary models</td>
              <td>Trains a classifier for every pairwise combination (Cat vs Dog, Dog vs Bird). Majority vote wins.</td>
              <td>Default for Support Vector Machines (SVC); good when algorithm scales poorly with sample size</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Real World Scenario: Threshold Tuning -->
      <div class="scenario-box">
        <div class="scenario-tag">💼 Real-World Scenario: Cancer Biopsy Diagnostic Threshold</div>
        <div class="scenario-title">Why the 0.50 Probability Threshold is Wrong for High-Stakes ML</div>
        <div class="scenario-problem">
          A machine learning model outputs probability of malignancy for tumor scans. A patient has a predicted probability of 0.35. Under default 0.50 thresholding, the model outputs "Benign", missing a fatal cancer.
        </div>
        <div class="scenario-solution">
          <strong>Clinical Engineering Action:</strong> Lower the decision threshold from 0.50 to <strong>0.15 or 0.20</strong>. This prioritizes <strong>Recall (Sensitivity)</strong> to catch every potential malignant tumor, even if it generates more false alarms (biopsy follow-ups) that can easily be cleared later.
        </div>
      </div>
    </article>


    <!-- SECTION 08: DECISION TREES -->
    <article class="note-section" id="sec-08">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 08</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Decision Trees: Splitting, Gini & Entropy</h2>
      <p class="section-intro">
        Decision Trees split datasets into subsets using feature thresholds. Placement interviews focus heavily on mathematical splitting criteria: Gini Impurity (CART algorithm) vs Entropy / Information Gain (ID3 algorithm).
      </p>

      <!-- Formula Block: Gini & Entropy -->
      <div class="formula-block">
        <div class="formula-name">Mathematical Impurity Criteria</div>
        <div class="formula-math">
          Gini Impurity = 1 - Σ(p_i^2) &nbsp;|&nbsp; Entropy H(S) = - Σ [p_i * log2(p_i)]<br>
          Information Gain(S, A) = H(S) - Σ (|S_v| / |S|) * H(S_v)
        </div>
        <div class="formula-desc">
          • <strong>Pure Node:</strong> All samples belong to a single class &rarr; <code>Gini = 0.0</code> and <code>Entropy = 0.0</code>.<br>
          • <strong>Maximum Impurity (Binary):</strong> Equal 50/50 class split &rarr; <code>Gini = 0.50</code> and <code>Entropy = 1.0</code>.
        </div>
      </div>

      <!-- Calculation Example -->
      <div class="concept-card" style="margin: 20px 0;">
        <h4>🧮 Placement Numerical Problem: Calculate Gini Impurity</h4>
        <p>A parent node contains 10 samples: <strong>6 Class A</strong> and <strong>4 Class B</strong>.<br>
        1. Class probabilities: <code>p(A) = 6/10 = 0.6</code>, <code>p(B) = 4/10 = 0.4</code>.<br>
        2. Apply Gini formula: <code>Gini = 1 - (0.6^2 + 0.4^2) = 1 - (0.36 + 0.16) = 1 - 0.52 = 0.48</code>.<br>
        <em>Result: The Gini Impurity is exactly 0.48.</em></p>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🌲 Advantages of Decision Trees</h4>
          <p>• Highly interpretable ("white box" models).<br>• <strong>Completely scale-invariant:</strong> Feature scaling (StandardScaler / MinMaxScaler) is NOT required.<br>• Handles mixed categorical and numerical features effortlessly.</p>
        </div>
        <div class="concept-card">
          <h4>⚠️ The Overfitting Hazard & Pruning</h4>
          <p>Unconstrained trees grow until every training point is in a pure leaf node, achieving 100% training accuracy but disastrous test generalization.<br>• <strong>Pre-pruning:</strong> Set <code>max_depth</code>, <code>min_samples_split</code>, <code>min_samples_leaf</code>.<br>• <strong>Post-pruning:</strong> Cost-complexity pruning (ccp_alpha).</p>
        </div>
      </div>
    </article>


    <!-- SECTION 09: RANDOM FOREST -->
    <article class="note-section" id="sec-09">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 09</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Random Forest & Bootstrap Aggregation</h2>
      <p class="section-intro">
        A single decision tree has high variance (overfits). Random Forest eliminates this weakness by combining hundreds of decorrelated decision trees via <strong>Bagging</strong> and <strong>Feature Randomness</strong>.
      </p>

      <div class="diagram-container">
        <div class="diagram-title">Random Forest Architecture</div>
        <pre class="diagram-art">
                                     ORIGINAL TRAINING DATASET
                                                |
               +--------------------------------+-------------------------------+
               |                                |                               |
      Bootstrap Sample 1               Bootstrap Sample 2              Bootstrap Sample B
    (Random sample with replacement) (Random sample with replacement)(Random sample with replacement)
               |                                |                               |
       Random Subspace                  Random Subspace                  Random Subspace
    (Subset of sqrt(p) features)     (Subset of sqrt(p) features)     (Subset of sqrt(p) features)
               |                                |                               |
        Decision Tree 1                  Decision Tree 2                  Decision Tree B
               |                                |                               |
          Prediction 1                     Prediction 2                     Prediction B
               +--------------------------------+-------------------------------+
                                                |
                                        MAJORITY VOTING (Classification)
                                              or AVERAGE (Regression)
                                                |
                                         FINAL PREDICTION
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Bootstrap Sampling</h4>
          <p>If dataset has <code>N</code> samples, each tree is trained on a sample of size <code>N</code> drawn <strong>with replacement</strong>. Mathematically, approximately <strong>63.2%</strong> of unique samples are included, leaving ~<strong>36.8%</strong> unselected (Out-of-Bag samples).</p>
        </div>
        <div class="concept-card">
          <h4>2. Feature Subsampling (Decorrelation)</h4>
          <p>At every split, each tree only chooses from a random subset of features (typically <code>sqrt(total_features)</code> for classification). This prevents dominant strong features from creating identical correlated trees.</p>
        </div>
      </div>

      <!-- Out of Bag Score -->
      <div class="formula-block">
        <div class="formula-name">Out-of-Bag (OOB) Evaluation Score</div>
        <div class="formula-math">OOB Score ≈ Cross-Validation Score (Without extra validation sets!)</div>
        <div class="formula-desc">
          Because each sample is omitted from ~36.8% of the trees, its prediction can be evaluated using only the trees that never saw it during training! This provides an unbiased out-of-sample performance estimate for free.
        </div>
      </div>
    </article>


    <!-- SECTION 10: KNN -->
    <article class="note-section" id="sec-10">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 10</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">K-Nearest Neighbors (KNN)</h2>
      <p class="section-intro">
        KNN is a non-parametric, instance-based <strong>lazy learner</strong>. It stores the entire training dataset in memory and performs zero mathematical computations until prediction time.
      </p>

      <div class="formula-block">
        <div class="formula-name">Distance Metrics</div>
        <div class="formula-math">
          Euclidean Distance = sqrt( Σ (x_i - y_i)^2 ) &nbsp;|&nbsp; Manhattan Distance = Σ |x_i - y_i|
        </div>
        <div class="formula-desc">
          Calculates geometric distance between query sample and all training points in feature space.
        </div>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🎯 Choice of K & Bias-Variance Tradeoff</h4>
          <p>• <strong>K = 1:</strong> Low bias, <em>extremely high variance</em> (overfits to every outlier noise point; decision boundary is jagged).<br>• <strong>K = Large (e.g. 50):</strong> High bias, <em>low variance</em> (underfits; smooth boundary; majority class dominates).<br>• <strong>Tie-breaker:</strong> For binary classification, always choose an <strong>odd K</strong> (3, 5, 7) to prevent 50/50 ties.</p>
        </div>
        <div class="concept-card">
          <h4>📏 Why Feature Scaling is Mandatory for KNN</h4>
          <p>Consider two features: <code>Age (20-60)</code> and <code>Annual Income ($20,000 - $200,000)</code>. In Euclidean distance, the income difference squared (billions) will completely dominate the age difference (hundreds), rendering Age statistically invisible! You <strong>must</strong> scale features before KNN.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #6: KNN Computational Complexity</div>
        <div class="trap-desc">
          Interview question: "What is the training time of KNN vs test time?" Training time is <strong>O(1)</strong> (simply stores data). Test time is <strong>O(N * d)</strong> per query sample, where N is dataset size and d is feature dimension! This makes KNN completely impractical for real-time inference on large production datasets.
        </div>
      </div>
    </article>


    <!-- SECTION 11: SVM -->
    <article class="note-section" id="sec-11">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 11</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Support Vector Machines (SVM) & The Kernel Trick</h2>
      <p class="section-intro">
        SVM finds the optimal hyperplane that separates classes with the <strong>Maximum Geometric Margin</strong>. Points lying directly on the margin boundaries are the <em>Support Vectors</em>.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🛡️ Support Vectors</h4>
          <p>The critical training samples closest to the decision hyperplane. <em>Only support vectors determine the position of the hyperplane</em>; all other training points can be removed from the dataset without altering the boundary!</p>
        </div>
        <div class="concept-card">
          <h4>🎛️ The Regularization Parameter C</h4>
          <p>• <strong>Large C:</strong> High penalty for misclassification. Strict narrow margin &rarr; Low bias, High variance (overfits).<br>• <strong>Small C:</strong> Tolerates more margin violations. Wider margin &rarr; High bias, Low variance (resilient to noise).</p>
        </div>
      </div>

      <div class="formula-block">
        <div class="formula-name">The Kernel Trick</div>
        <div class="formula-math">K(x, z) = Φ(x) · Φ(z) &nbsp;|&nbsp; RBF Kernel = exp(-γ * ||x - z||^2)</div>
        <div class="formula-desc">
          When data is non-linearly separable in current dimension, the Kernel Trick maps features into an infinite-dimensional Hilbert space where a linear hyperplane exists, <em>without ever explicitly calculating coordinates in that high-dimensional space</em>!
        </div>
      </div>
    </article>


    <!-- SECTION 12: CLUSTERING -->
    <article class="note-section" id="sec-12">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 12</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Clustering: K-Means & Hierarchical</h2>
      <p class="section-intro">
        Unsupervised grouping of unlabeled data based on feature similarity. Placement questions test the 4 iterative steps of K-Means, the Elbow Method using inertia, and K-Means assumptions.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🔄 4 Steps of K-Means</h4>
          <p>1. <strong>Initialization:</strong> Pick <code>K</code> random initial centroids (use <em>K-Means++</em> for smart distant initialization).<br>
          2. <strong>Assignment:</strong> Assign every sample to its nearest centroid (Euclidean distance).<br>
          3. <strong>Update:</strong> Recompute each centroid as the arithmetic mean of all samples assigned to it.<br>
          4. <strong>Convergence:</strong> Repeat steps 2-3 until centroid positions stop shifting.</p>
        </div>
        <div class="concept-card">
          <h4>📉 The Elbow Method (Inertia)</h4>
          <p><strong>Inertia (WCSS):</strong> Within-Cluster Sum of Squares. As <code>K</code> increases, inertia strictly decreases. Plot Inertia vs <code>K</code>; the point where the rate of decrease abruptly bends into an arm elbow indicates the optimal balance between cluster compactness and model complexity.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #7: K-Means Cluster Shape Assumption</div>
        <div class="trap-desc">
          K-Means assumes clusters are <strong>spherical (isotropic)</strong> and of roughly equal size/density. It fails drastically on non-convex geometric shapes (like concentric circles, moons, or elongated strips). For arbitrary shapes, use <strong>DBSCAN</strong> (Density-Based Spatial Clustering).
        </div>
      </div>
    </article>


    <!-- SECTION 13: PCA -->
    <article class="note-section" id="sec-13">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 13</span>
        <span class="sec-priority priority-p2">MEDIUM-HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Principal Component Analysis (PCA)</h2>
      <p class="section-intro">
        PCA is an unsupervised linear dimensionality reduction technique that projects high-dimensional data onto orthogonal axes (Principal Components) that maximize explained variance.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>📐 Principal Components</h4>
          <p>• <strong>PC1:</strong> Linear combination of features that captures the <em>maximum possible variance</em> in the dataset.<br>
          • <strong>PC2:</strong> Captures the second highest variance, strictly <strong>orthogonal (90 degrees, zero covariance)</strong> to PC1.<br>
          • Derived from the eigenvectors of the dataset's covariance matrix; eigenvalues quantify variance.</p>
        </div>
        <div class="concept-card">
          <h4>📊 Explained Variance Ratio</h4>
          <p>In scikit-learn, <code>pca.explained_variance_ratio_</code> outputs the percentage of total variance captured by each component. Engineers retain components until cumulative explained variance exceeds 90-95%.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #8: Feature Selection vs Feature Extraction</div>
        <div class="trap-desc">
          PCA is <strong>Feature Extraction</strong>, NOT Feature Selection! Feature selection simply keeps a subset of existing columns (e.g. keeping 5 out of 20 columns). PCA creates brand new synthesized mathematical axes. Once transformed into Principal Components, the original feature identities (like "Age" or "Income") lose direct interpretability!
        </div>
      </div>
    </article>


    <!-- SECTION 14: ENSEMBLE LEARNING -->
    <article class="note-section" id="sec-14">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 14</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Ensemble Learning: Bagging vs Boosting & XGBoost</h2>
      <p class="section-intro">
        Ensemble methods combine multiple base models to produce a single superior predictive system. Understanding the difference between parallel reduction of variance (Bagging) and sequential reduction of bias (Boosting) is tested in nearly every MNC interview.
      </p>

      <!-- Bagging vs Boosting Table -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Bagging (Bootstrap Aggregation)</th>
              <th>Boosting</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Base Model Training</strong></td>
              <td><strong>Parallel</strong> & independent models</td>
              <td><strong>Sequential</strong> (each model learns from previous errors)</td>
            </tr>
            <tr>
              <td><strong>Sample Weights</strong></td>
              <td>Uniform random sampling with replacement</td>
              <td>Increases weight of misclassified samples (AdaBoost)</td>
            </tr>
            <tr>
              <td><strong>Primary Objective</strong></td>
              <td>Reduces <strong>Variance</strong> (prevents overfitting)</td>
              <td>Reduces <strong>Bias</strong> (converts weak learners to strong learner)</td>
            </tr>
            <tr>
              <td><strong>Base Learners</strong></td>
              <td>Deep, fully grown trees (high variance, low bias)</td>
              <td>Shallow trees / stumps (high bias, low variance)</td>
            </tr>
            <tr>
              <td><strong>Exemplar Algorithms</strong></td>
              <td>Random Forest, Extra Trees</td>
              <td>AdaBoost, Gradient Boosting, XGBoost, LightGBM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>⚡ Why XGBoost Dominates Tabular Machine Learning</h4>
        <p>Extreme Gradient Boosting (XGBoost) improves on traditional Gradient Boosting through:<br>
        1. <strong>Built-in Regularization:</strong> Penalizes tree complexity with L1 (alpha) and L2 (lambda) terms on leaf weights.<br>
        2. <strong>Second-Order Taylor Expansion:</strong> Uses both first derivatives (gradients) and second derivatives (Hessians) of the loss function.<br>
        3. <strong>Hardware Optimization:</strong> Parallel tree construction across CPU cores, block compression, and smart handling of sparse missing values.</p>
      </div>
    </article>
    """
