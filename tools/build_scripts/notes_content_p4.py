# notes_content_p4.py - Sections 19 to 25 of AI/ML/DL Placement Notes

def get_part4_html():
    return """
    <!-- SECTION 19: NEURAL NETWORKS -->
    <article class="note-section" id="sec-19">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 19</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Neural Networks: The Perceptron & Forward Propagation</h2>
      <p class="section-intro">
        An Artificial Neural Network (ANN / Multilayer Perceptron) is a stack of interconnected layers. Each neuron performs a weighted linear sum followed by a non-linear activation function.
      </p>

      <!-- Neuron Computational Diagram -->
      <div class="diagram-container">
        <div class="diagram-title">Single Artificial Neuron Computational Architecture</div>
        <pre class="diagram-art">
Inputs (x_i)        Weights (w_i)
   x1 ------------> w1 -----\
   x2 ------------> w2 -----> [ SUMMATION ] ----> [ ACTIVATION ] ----> Output (a)
   ...                       /   z = Σ(w_i * x_i) + b    a = σ(z)
   xn ------------> wn -----/
   Bias (1) ------> b -----/
        </pre>
      </div>

      <!-- Formula Block: Parameter Counting -->
      <div class="formula-block">
        <div class="formula-name">Placement Math: Trainable Parameter Counting in Dense Layer</div>
        <div class="formula-math">Total Parameters = (Num_Inputs + 1) * Num_Neurons</div>
        <div class="formula-desc">
          Every neuron in a fully connected (Dense) layer has one incoming weight for each input feature, PLUS exactly <strong>one bias term</strong>: <code>Parameters = (Inputs * Neurons) + Neurons = (Inputs + 1) * Neurons</code>.
        </div>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>🧮 Placement Numerical Example</h4>
        <p>A hidden layer takes <strong>10 input features</strong> and contains <strong>5 neurons</strong>.<br>
        • Weights matrix shape: <code>(10, 5) &rarr; 50 weights</code>.<br>
        • Bias vector shape: <code>(5,) &rarr; 5 biases</code>.<br>
        • <strong>Total Trainable Parameters:</strong> <code>(10 + 1) * 5 = 55 parameters</code>.</p>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #11: Why Non-Linear Activation is Mandatory</div>
        <div class="trap-desc">
          "What happens if you build a 50-layer deep neural network with NO activation functions (pure linear layers)?" A linear combination of linear functions is mathematically just a single linear function: <code>W2 * (W1 * x) = (W2 * W1) * x = W_effective * x</code>. Without non-linear activations, a 50-layer deep network collapses completely into a basic single-layer Linear Regression!
        </div>
      </div>
    </article>


    <!-- SECTION 20: ACTIVATION FUNCTIONS -->
    <article class="note-section" id="sec-20">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 20</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Activation Functions: ReLU, Sigmoid, Tanh & Softmax</h2>
      <p class="section-intro">
        Activation functions introduce non-linearity, enabling networks to learn complex non-linear decision surfaces. Placement questions focus on the Vanishing Gradient problem and output layer activation selection.
      </p>

      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Activation Function</th>
              <th>Mathematical Formula</th>
              <th>Output Range</th>
              <th>Derivative Range</th>
              <th>Strengths & Placement Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ReLU (Rectified Linear Unit)</strong></td>
              <td><code>f(z) = max(0, z)</code></td>
              <td>[0, +∞)</td>
              <td>1 if z > 0, else 0</td>
              <td><strong>Default hidden layer activation!</strong> Computationally cheap (no exp), solves vanishing gradients for positive activations. Weakness: <em>Dying ReLU</em> if weights become strongly negative.</td>
            </tr>
            <tr>
              <td><strong>Sigmoid</strong></td>
              <td><code>σ(z) = 1 / (1 + e^-z)</code></td>
              <td>(0, 1)</td>
              <td>Max derivative = <strong>0.25</strong></td>
              <td>Used for <strong>Binary Classification output layers</strong>. Never use in deep hidden layers because maximum derivative is 0.25, causing severe vanishing gradients!</td>
            </tr>
            <tr>
              <td><strong>Tanh (Hyperbolic Tangent)</strong></td>
              <td><code>tanh(z) = (e^z - e^-z) / (e^z + e^-z)</code></td>
              <td>(-1, +1)</td>
              <td>Max derivative = <strong>1.0</strong></td>
              <td><strong>Zero-centered</strong> (unlike Sigmoid). Gradients do not systematically bias updates in one direction. Still suffers from vanishing gradients at large |z|.</td>
            </tr>
            <tr>
              <td><strong>Softmax</strong></td>
              <td><code>p_i = e^(z_i) / Σ(e^(z_j))</code></td>
              <td>(0, 1), sum = 1.0</td>
              <td>Multi-dimensional Jacobian</td>
              <td>Standard for <strong>Multiclass Classification output layers</strong>. Normalizes raw output logits into a valid categorical probability distribution.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Output Layer Activation Selection Guide -->
      <div class="concept-grid">
        <div class="concept-card">
          <h4>🎯 Output Layer Selection Rule 1: Binary Classification</h4>
          <p>• Output Neurons: <strong>1</strong><br>• Output Activation: <strong>Sigmoid</strong><br>• Loss Function: <strong>Binary Cross-Entropy</strong></p>
        </div>
        <div class="concept-card">
          <h4>🎯 Output Layer Selection Rule 2: Multiclass Classification</h4>
          <p>• Output Neurons: <strong>K (number of classes)</strong><br>• Output Activation: <strong>Softmax</strong><br>• Loss Function: <strong>Categorical Cross-Entropy</strong></p>
        </div>
        <div class="concept-card">
          <h4>🎯 Output Layer Selection Rule 3: Multilabel Classification</h4>
          <p>• Output Neurons: <strong>K (independent tags)</strong><br>• Output Activation: <strong>Sigmoid (independent per neuron)</strong><br>• Loss Function: <strong>Binary Cross-Entropy</strong></p>
        </div>
        <div class="concept-card">
          <h4>🎯 Output Layer Selection Rule 4: Continuous Regression</h4>
          <p>• Output Neurons: <strong>1</strong><br>• Output Activation: <strong>Linear / None (identity)</strong><br>• Loss Function: <strong>Mean Squared Error (MSE)</strong></p>
        </div>
      </div>
    </article>


    <!-- SECTION 21: LOSS FUNCTIONS -->
    <article class="note-section" id="sec-21">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 21</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Loss Functions: MSE vs Cross-Entropy</h2>
      <p class="section-intro">
        The loss function quantifies how far predicted outputs deviate from actual targets. An optimizer minimizes this loss by updating network weights.
      </p>

      <div class="formula-block">
        <div class="formula-name">Binary Cross-Entropy Loss (Log Loss)</div>
        <div class="formula-math">Loss = - (1/N) * Σ [ y_i * log(p_i) + (1 - y_i) * log(1 - p_i) ]</div>
        <div class="formula-desc">
          When actual label <code>y = 1</code>, the loss is <code>-log(p)</code>. If the model confidently predicts <code>p = 0.001</code>, <code>-log(0.001)</code> approaches infinity, punishing confidently wrong predictions with massive gradient signals!
        </div>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #12: Why MSE Fails on Classification</div>
        <div class="trap-desc">
          Why shouldn't you pair Mean Squared Error (MSE) with a Sigmoid output layer for classification? The derivative of Sigmoid is <code>σ'(z) = σ(z) * (1 - σ(z))</code>. When the model is confidently wrong (e.g. <code>y = 1</code> but predicted <code>p = 0.001</code>), the derivative <code>σ'(z) ≈ 0</code>! This creates a flat local minimum where gradients vanish right when the model needs to learn most. In contrast, Cross-Entropy derivative cancels the sigmoid term: <code>dL/dz = (p - y)</code>, maintaining strong, linear gradients!
        </div>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>💻 Categorical vs Sparse Categorical Cross-Entropy (Keras/PyTorch)</h4>
        <p>• <strong>Categorical Cross-Entropy:</strong> Expects target labels to be <em>One-Hot Encoded</em> (e.g. <code>[0, 1, 0]</code> for Class 1).<br>• <strong>Sparse Categorical Cross-Entropy:</strong> Expects target labels to be <em>Integers</em> (e.g. <code>1</code> for Class 1). Saves massive GPU memory by avoiding large sparse matrices.</p>
      </div>
    </article>


    <!-- SECTION 22: GRADIENT DESCENT & BACKPROPAGATION -->
    <article class="note-section" id="sec-22">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 22</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Gradient Descent & The Backpropagation Chain Rule</h2>
      <p class="section-intro">
        Backpropagation is the workhorse of deep learning. It applies the <strong>Chain Rule of Calculus</strong> to propagate errors backward through network layers to compute partial derivatives <code>∂Loss / ∂w</code>.
      </p>

      <div class="formula-block">
        <div class="formula-name">Single Gradient Descent Weight Update Formula</div>
        <div class="formula-math">w_new = w_old - η * (∂Loss / ∂w)</div>
        <div class="formula-desc">
          • <strong>w_old:</strong> Current weight value.<br>
          • <strong>η (Learning Rate / Alpha):</strong> Step size controlling how far weights shift along the negative gradient.<br>
          • <strong>∂Loss / ∂w:</strong> Direction and magnitude of steepest ascent. Subtracting moves toward the minimum.
        </div>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>🧮 Numerical Walkthrough</h4>
        <p>Current weight <code>w = 0.50</code>. Learning rate <code>η = 0.10</code>. Current gradient <code>∂Loss / ∂w = 0.40</code>.<br>
        <code>w_new = 0.50 - (0.10 * 0.40) = 0.50 - 0.04 = 0.46</code>.<br>
        <em>Result: The updated weight is exactly 0.46.</em></p>
      </div>

      <!-- Gradient Descent Variants -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Variant</th>
              <th>Samples Used per Weight Update</th>
              <th>Convergence Speed</th>
              <th>Gradient Trajectory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Batch Gradient Descent</strong></td>
              <td><strong>Entire dataset (N)</strong></td>
              <td>Very slow per step; fails on large datasets that don't fit in memory</td>
              <td>Smooth, deterministic, straight toward minimum</td>
            </tr>
            <tr>
              <td><strong>Stochastic GD (SGD)</strong></td>
              <td><strong>Single sample (1)</strong></td>
              <td>Very fast per step, but extremely noisy</td>
              <td>Erratic, oscillates wildly, but can escape shallow local minima</td>
            </tr>
            <tr>
              <td><strong>Mini-Batch GD</strong></td>
              <td><strong>Batch size (e.g. 32, 64, 128)</strong></td>
              <td><strong>Optimal balance!</strong> Leverages GPU matrix parallelism</td>
              <td>Slightly noisy but stable trajectory; industry standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="trap-box">
        <div class="trap-header">⚠️ Fatal Placement Trap #13: Learning Rate Pitfalls</div>
        <div class="trap-desc">
          • <strong>Learning rate too small:</strong> Training crawls at an agonizing pace; risks getting trapped in suboptimal local minima or plateaus.<br>
          • <strong>Learning rate too large:</strong> The optimizer overshoots the minimum, oscillations widen, and the training loss <strong>explodes to NaN / Infinity</strong>!
        </div>
      </div>
    </article>


    <!-- SECTION 23: CNN -->
    <article class="note-section" id="sec-23">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 23</span>
        <span class="sec-priority priority-p0">VERY HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Convolutional Neural Networks (CNNs)</h2>
      <p class="section-intro">
        CNNs process grid-structured data like images. By utilizing <strong>Local Receptive Fields</strong> and <strong>Weight Sharing</strong>, CNNs drastically reduce parameter counts while preserving translation invariance.
      </p>

      <!-- Formula Block: CNN Output Dimension -->
      <div class="formula-block">
        <div class="formula-name">CRITICAL PLACEMENT FORMULA: CNN Output Feature Map Dimension</div>
        <div class="formula-math">Output_Size = floor( (Input_Size - Filter_Size + 2 * Padding) / Stride ) + 1</div>
        <div class="formula-desc">
          Where <code>W</code> = Input dimension, <code>F</code> = Filter/Kernel size, <code>P</code> = Padding pixels added to each border, <code>S</code> = Stride.
        </div>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>🧮 Numerical Calculation Example (Asked in TCS Digital & Infosys DSE)</h4>
        <p>An input image is <code>32 x 32</code>. A convolutional layer applies a <code>5 x 5</code> kernel with <strong>stride = 1</strong> and <strong>padding = 0 (valid padding)</strong>.<br>
        <code>Output = ((32 - 5 + 2*0) / 1) + 1 = (27 / 1) + 1 = 28</code>.<br>
        <em>Result: The output feature map is exactly 28 x 28.</em></p>
      </div>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🔲 Padding: Valid vs Same</h4>
          <p>• <strong>Valid Padding (P = 0):</strong> No padding added. Feature map shrinks after every convolution.<br>• <strong>Same Padding:</strong> Adds zero-padding along borders such that output spatial dimensions exactly match input dimensions: <code>P = (F - 1) / 2</code> (when stride = 1).</p>
        </div>
        <div class="concept-card">
          <h4>🏊 Max Pooling vs Average Pooling</h4>
          <p>• <strong>Max Pooling:</strong> Extracts maximum activation in each window (e.g. 2x2 with stride 2 halves height and width). Captures dominant edges and provides spatial translation invariance.<br>• <strong>Average Pooling:</strong> Averages window values; used in final global pooling layers before classification.</p>
        </div>
      </div>
    </article>


    <!-- SECTION 24: RNN, LSTM & GRU -->
    <article class="note-section" id="sec-24">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 24</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Sequence Modeling: RNN, LSTM & GRU</h2>
      <p class="section-intro">
        Standard neural networks assume independent samples. Recurrent Neural Networks process sequential data (time-series, natural language, audio) by maintaining a cyclical <strong>hidden state</strong> that acts as memory.
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>🔄 Vanilla RNN & The Vanishing Gradient</h4>
          <p>At each time step <code>t</code>: <code>h_t = tanh(W_hh * h_(t-1) + W_xh * x_t + b)</code>. When backpropagating through time (BPTT) over 50+ time steps, repeated multiplication of weight matrices and tanh derivatives causes gradients to vanish to 0, making RNNs forget early sequence words!</p>
        </div>
        <div class="concept-card">
          <h4>⚡ LSTM (Long Short-Term Memory)</h4>
          <p>Introduces a separate <strong>Cell State (C_t)</strong> that acts as an unobstructed information highway, regulated by 3 non-linear gates:<br>
          1. <strong>Forget Gate:</strong> Decides what information to discard from cell state: <code>f_t = σ(W_f · [h_(t-1), x_t] + b_f)</code>.<br>
          2. <strong>Input Gate:</strong> Decides which new candidate values to store in cell state.<br>
          3. <strong>Output Gate:</strong> Controls what part of the cell state is output as hidden state <code>h_t</code>.</p>
        </div>
      </div>

      <!-- RNN vs LSTM vs GRU Table -->
      <div class="table-wrapper">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Architecture</th>
              <th>Internal Gating Mechanisms</th>
              <th>Memory Capability</th>
              <th>Computational Efficiency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vanilla RNN</strong></td>
              <td>No gates (simple recurring hidden state)</td>
              <td>Short-term memory only (&lt; 10 steps)</td>
              <td>Fastest training, few parameters</td>
            </tr>
            <tr>
              <td><strong>LSTM</strong></td>
              <td>3 gates (Forget, Input, Output) + Cell State</td>
              <td>Long-term memory (100+ steps)</td>
              <td>Most expressive; highest parameter count</td>
            </tr>
            <tr>
              <td><strong>GRU (Gated Recurrent Unit)</strong></td>
              <td>2 gates (Reset, Update); merges Cell & Hidden state</td>
              <td>Comparable to LSTM on most NLP tasks</td>
              <td>~25% fewer parameters than LSTM; trains faster</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>


    <!-- SECTION 25: DEEP LEARNING TRAINING -->
    <article class="note-section" id="sec-25">
      <div class="section-eyebrow">
        <span class="sec-num">SECTION 25</span>
        <span class="sec-priority priority-p1">HIGH PRIORITY</span>
      </div>
      <h2 class="section-title">Deep Learning Training: Optimizers & Regularization</h2>
      <p class="section-intro">
        Training stability in deep networks depends on proper optimizer selection (Adam vs SGD) and stabilization layers (Dropout, Batch Normalization).
      </p>

      <div class="concept-grid">
        <div class="concept-card">
          <h4>⚡ The Adam Optimizer (Adaptive Moment Estimation)</h4>
          <p>The undisputed default optimizer for deep learning. Combines two ideas:<br>
          1. <strong>Momentum:</strong> Exponential moving average of past gradients (first moment) smooths oscillations.<br>
          2. <strong>RMSprop:</strong> Exponential moving average of squared gradients (second moment) scales learning rates adaptively per parameter.</p>
        </div>
        <div class="concept-card">
          <h4>🎲 Dropout Regularization</h4>
          <p>During training, randomly zeroes out a fraction (e.g. <code>p = 0.50</code>) of neurons at each iteration. This prevents neurons from co-adapting and forces the network to learn redundant, robust internal representations.<br>
          <strong>Critical Placement Rule:</strong> <em>Dropout is active ONLY during training! During test/inference, all neurons are enabled and outputs are scaled by (1 - p).</em></p>
        </div>
      </div>

      <div class="concept-card" style="margin: 20px 0;">
        <h4>📊 Batch Normalization</h4>
        <p>Normalizes the activations of each mini-batch to have zero mean and unit variance before passing to the next layer. Solves <em>Internal Covariate Shift</em>, allows significantly higher learning rates, acts as a slight regularizer, and drastically reduces sensitivity to weight initialization.</p>
      </div>
    </article>
    """
