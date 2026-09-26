# notes_content_p3.py - Sections 15 to 18 of AI/ML/DL Placement Notes

def get_part3_html():
    return """
    <!-- SECTION 15: MODEL EVALUATION -->
    <article class="note-section" id="sec-15">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 15</span>
        <span class="sec-priority priority-p0">EXTREMELY HIGH PRIORITY (P0)</span>
      </div>
      <h2 class="section-title">Model Evaluation: Confusion Matrix & Metrics</h2>
      <p class="section-intro">
        More students fail technical placement rounds on Metric Selection than any other ML topic. Interviewers love presenting scenarios with severe class imbalance (fraud, medical diagnosis, click-through rate) to see if you instinctively reach for Accuracy or properly select Precision, Recall, or F1-Score.
      </p>

      <!-- Confusion Matrix Diagram -->
      <div class="diagram-container">
        <div class="diagram-title">Scikit-Learn Standard 2x2 Confusion Matrix Layout</div>
        <pre class="diagram-art">
                                      PREDICTED CLASS
                               Negative (0)         Positive (1)
                        +--------------------+--------------------+
           Negative (0) | True Negative (TN) | False Positive(FP) |  <-- Actual Negatives
ACTUAL CLASS            |  (Correct Rejection)|    (Type I Error)  |
                        +--------------------+--------------------+
           Positive (1) | False Negative(FN) | True Positive (TP) |  <-- Actual Positives
                        |   (Type II Error)  |     (Hit/Catch)    |
                        +--------------------+--------------------+
        </pre>
      </div>

      <!-- Formula Grid -->
      <div class="concept-grid">
        <div class="formula-block">
          <div class="formula-name">Accuracy</div>
          <div class="formula-math">(TP + TN) / (TP + TN + FP + FN)</div>
          <div class="formula-desc">Ratio of all correct predictions to total samples. <em>Only valid on balanced datasets!</em></div>
        </div>
        <div class="formula-block">
          <div class="formula-name">Precision (Positive Predictive Value)</div>
          <div class="formula-math">TP / (TP + FP)</div>
          <div class="formula-desc"><em>"Of all samples we predicted as positive, how many were truly positive?"</em> Priority when False Positives are expensive.</div>
        </div>
        <div class="formula-block">
          <div class="formula-name">Recall (Sensitivity / True Positive Rate)</div>
          <div class="formula-math">TP / (TP + FN)</div>
          <div class="formula-desc"><em>"Of all actual positives that exist in reality, how many did we successfully catch?"</em> Priority when False Negatives are fatal.</div>
        </div>
        <div class="formula-block">
          <div class="formula-name">F1-Score (Harmonic Mean)</div>
          <div class="formula-math">2 * (Precision * Recall) / (Precision + Recall)</div>
          <div class="formula-desc">Harmonic mean balances Precision and Recall. Unlike arithmetic mean, it severely penalizes extreme imbalances (e.g. Precision=0.99, Recall=0.01 &rarr; F1 ≈ 0.02).</div>
        </div>
      </div>

      <!-- Real World Metric Selection Table -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Business Scenario</th>
              <th>Dangerous Error</th>
              <th>Critical Target Metric</th>
              <th>Reasoning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Spam Filter</strong></td>
              <td><strong>False Positive (FP):</strong> Legitimate job offer sent to Spam</td>
              <td><strong>PRECISION</strong></td>
              <td>Users tolerate seeing a few spam emails in the inbox, but missing an important client email in Spam is unacceptable.</td>
            </tr>
            <tr>
              <td><strong>Cancer Detection</strong></td>
              <td><strong>False Negative (FN):</strong> Patient with cancer told they are healthy</td>
              <td><strong>RECALL</strong></td>
              <td>A false alarm can be cleared by further tests. A missed cancer diagnosis leads to patient death.</td>
            </tr>
            <tr>
              <td><strong>Credit Card Fraud</strong></td>
              <td><strong>False Negative (FN):</strong> $10,000 fraudulent charge approved</td>
              <td><strong>RECALL / PR-AUC</strong></td>
              <td>Missing fraud directly costs the bank money. False alarms trigger a simple 5-second SMS check.</td>
            </tr>
            <tr>
              <td><strong>Loan Approval (Conservative Bank)</strong></td>
              <td><strong>False Positive (FP):</strong> Approving loan to someone who defaults</td>
              <td><strong>PRECISION</strong></td>
              <td>Bank prefers denying risky applicants rather than losing principal capital.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ROC-AUC vs PR-AUC -->
      <div class="concept-grid">
        <div class="concept-card">
          <h4>📈 ROC-AUC (Receiver Operating Characteristic)</h4>
          <p>Plots <strong>True Positive Rate (Recall)</strong> vs <strong>False Positive Rate (1 - Specificity)</strong> across all classification thresholds from 0.0 to 1.0.<br>• <strong>AUC = 1.0:</strong> Perfect separation.<br>• <strong>AUC = 0.50:</strong> Random coin toss.<br>• Represents probability that model ranks a random positive higher than a random negative.</p>
        </div>
        <div class="concept-card">
          <h4>📊 Precision-Recall Curve (PR-AUC)</h4>
          <p>On heavily imbalanced datasets (e.g. 99.9% negative, 0.1% positive), the massive number of True Negatives artificially inflates the denominator of FPR, making ROC-AUC look deceptively optimistic (~0.98). <strong>Always evaluate PR-AUC (Precision vs Recall) on severe class imbalances!</strong></p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #9: The Accuracy Paradox</div>
        <div class="trap-desc">
          In a credit card transaction dataset with 99,900 legitimate transactions and 100 fraudulent transactions, a "dumb" model that always outputs "Legitimate" (Class 0) achieves an astonishing <strong>99.9% Accuracy</strong>! Yet it has caught exactly <strong>0 frauds (Recall = 0.0%)</strong>, rendering it 100% useless in production. Never judge imbalanced models by accuracy!
        </div>
      </div>
    </article>


    <!-- SECTION 16: OVERFITTING, UNDERFITTING & REGULARIZATION -->
    <article class="note-section" id="sec-16">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 16</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Bias-Variance Tradeoff & Regularization (L1 / L2)</h2>
      <p class="section-intro">
        Every machine learning model aims to minimize generalization error. Generalization error is decomposed mathematically into: <code>Total Error = Bias^2 + Variance + Irreducible Error</code>.
      </p>

      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Condition</th>
              <th>Bias Level</th>
              <th>Variance Level</th>
              <th>Training Error</th>
              <th>Validation Error</th>
              <th>How to Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Underfitting</strong></td>
              <td><strong>High Bias</strong> (Over-simplified model assumptions)</td>
              <td>Low Variance</td>
              <td><strong>High</strong></td>
              <td><strong>High</strong> (closely matches train error)</td>
              <td>Increase model complexity, add polynomial/interaction features, decrease regularization</td>
            </tr>
            <tr>
              <td><strong>Good Fit</strong></td>
              <td>Low Bias</td>
              <td>Low Variance</td>
              <td>Low</td>
              <td>Low (slight healthy gap)</td>
              <td>Optimal production state</td>
            </tr>
            <tr>
              <td><strong>Overfitting</strong></td>
              <td>Low Bias</td>
              <td><strong>High Variance</strong> (Memorized training noise)</td>
              <td><strong>Near Zero</strong></td>
              <td><strong>High & Diverging</strong></td>
              <td>Add L1/L2 regularization, get more data, apply dropout, prune trees, reduce features</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- L1 vs L2 Regularization Comparison -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>L1 Regularization (Lasso)</th>
              <th>L2 Regularization (Ridge)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Penalty Term Added</strong></td>
              <td><code>λ * Σ |w_i|</code> (Sum of absolute weights)</td>
              <td><code>λ * Σ (w_i^2)</code> (Sum of squared weights)</td>
            </tr>
            <tr>
              <td><strong>Weight Shrinkage</strong></td>
              <td>Drives non-essential weights <strong>strictly to zero</strong></td>
              <td>Shrinks weights <strong>asymptotically toward zero</strong> (never exactly zero)</td>
            </tr>
            <tr>
              <td><strong>Feature Selection?</strong></td>
              <td><strong>YES (Sparse models)</strong> - eliminates useless features</td>
              <td>NO - retains all features with small weights</td>
            </tr>
            <tr>
              <td><strong>Geometry of Constraint</strong></td>
              <td>Diamond / Polyhedron with sharp corners on axes</td>
              <td>Circular / Spherical hyperspace</td>
            </tr>
            <tr>
              <td><strong>Handling Collinear Features</strong></td>
              <td>Arbitrarily picks one feature and zeroes the other</td>
              <td>Distributes weights equally among collinear features</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>⏳ Early Stopping</h4>
        <p>A simple, universal regularization technique. During iterative gradient descent, monitor the validation loss at every epoch. When validation loss stops decreasing and begins to diverge upward for <code>patience</code> epochs, halt training immediately and save the checkpoint with the lowest validation loss.</p>
      </div>
    </article>


    <!-- SECTION 17: TRAIN, VALIDATION & TEST -->
    <article class="note-section" id="sec-17">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 17</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Train, Validation & Test Protocol</h2>
      <p class="section-intro">
        Why do enterprise workflows require three separate dataset splits instead of just two? If you tune hyperparameters using the test set, you introduce optimization bias and invalidate final benchmark credibility.
      </p>

      <div class="diagram-container">
        <div class="diagram-title">The Three-Way Split Workflow</div>
        <pre class="diagram-art">
+-----------------------------------------------------------------------------------+
| FULL ENTERPRISE DATASET (100%)                                                    |
+-----------------------------------------------------------------------------------+
|                          |                                   |                    |
|   TRAINING SET (~70%)    |      VALIDATION SET (~15%)        |   TEST SET (~15%)  |
|                          |                                   |                    |
| Used to compute loss and | Used to evaluate hyperparameters  | Locked in a vault! |
| optimize internal model  | (tree depth, C, learning rate) and| Evaluated ONCE at  |
| weights (w, b).          | select the best model candidate.  | final deployment.  |
+--------------------------+-----------------------------------+--------------------+
        </pre>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🔄 K-Fold Cross-Validation</h4>
          <p>Splits training data into <code>K</code> equal folds (typically K=5 or 10). Trains on <code>K-1</code> folds, evaluates on the 1 holdout fold, and repeats <code>K</code> times so every sample is evaluated once. The final score is the average across all folds, reducing evaluation variance on smaller datasets.</p>
        </div>
        <div class="concept-card">
          <h4>⚖️ Stratified K-Fold (Mandatory for Imbalanced Data)</h4>
          <p>Standard random K-Fold can accidentally create a fold with zero positive samples in rare classes (e.g. 1% fraud). <strong>StratifiedKFold</strong> guarantees that each fold contains the <em>exact same percentage proportion</em> of target classes as the complete dataset.</p>
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #10: Time-Series Leakage</div>
        <div class="trap-desc">
          Never use standard random <code>train_test_split</code> on time-series or financial data! If you randomly shuffle stock prices or user transactions, the model learns from future data points to predict the past. Always use <strong>TimeSeriesSplit</strong> (walk-forward validation) where training data strictly precedes validation data chronologically.
        </div>
      </div>
    </article>


    <!-- SECTION 18: FEATURE ENGINEERING -->
    <article class="note-section" id="sec-18">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 18</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Feature Engineering: Creation, Selection & Transformation</h2>
      <p class="section-intro">
        "Applied machine learning is basically feature engineering." Feature engineering transforms raw attributes into high-signal representations that make learning trivial for downstream algorithms.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>1. Temporal Feature Extraction</h4>
          <p>Never pass raw timestamps like <code>"2026-09-26 20:30:15"</code> directly into a model. Extract cyclical and categorical components: <code>HourOfDay (0-23)</code>, <code>DayOfWeek (Mon-Sun)</code>, <code>IsWeekend (0/1)</code>, <code>IsHoliday (0/1)</code>.</p>
        </div>
        <div class="concept-card">
          <h4>2. Interaction Terms & Ratios</h4>
          <p>Create domain-specific ratios that linear models cannot compute on their own: <code>DebtToIncomeRatio = TotalDebt / AnnualIncome</code>, <code>PricePerSquareFoot = HousePrice / SqFt</code>.</p>
        </div>
        <div class="concept-card">
          <h4>3. Feature Selection Strategies</h4>
          <p>• <strong>Filter Methods:</strong> Fast, model-agnostic correlation (Pearson, Spearman) or Mutual Information.<br>• <strong>Wrapper Methods:</strong> Recursive Feature Elimination (RFE) using a base estimator.<br>• <strong>Embedded Methods:</strong> Feature importances from Random Forest or L1 Lasso shrinkage.</p>
        </div>
      </div>
    </article>
    """
