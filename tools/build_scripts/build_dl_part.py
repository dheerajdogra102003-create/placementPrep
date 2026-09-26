# build_dl_part.py - Questions AI_ML_DL_071 to AI_ML_DL_100 (Deep Learning - 30 questions)
# Covers 8 Deep Learning topics with calculations, architectures, code, and troubleshooting.

dl_questions = [
    # 1. Neural Network Fundamentals (5 questions: 071-075)
    {
        "id": "AI_ML_DL_071",
        "section": "Deep Learning",
        "topic": "Neural Network Fundamentals",
        "concept": "Perceptron Computation",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "What mathematical operations are performed inside a single artificial neuron (perceptron) to produce its scalar output from inputs `[x1, x2, ..., xn]`?",
        "options": {
            "A": "Compute the linear weighted sum plus bias `z = Σ(w_i * x_i) + b`, then pass `z` through a non-linear activation function `a = f(z)`.",
            "B": "Compute the determinant of the input matrix and divide by the learning rate.",
            "C": "Perform K-Means clustering across all inputs.",
            "D": "Sort the input values in ascending order and take the median."
        },
        "correct_answer": "A",
        "explanation": "A standard artificial neuron performs two fundamental steps: 1. Linear combination: dot product of input vector `x` with weight vector `w` plus scalar bias `b` (`z = w·x + b`), and 2. Non-linear activation: applying an activation function `f(z)` (such as ReLU, Sigmoid) to introduce non-linearity.",
        "why_other_options_are_wrong": {
            "B": "Individual neurons compute dot products, not matrix determinants.",
            "C": "Clustering is an unsupervised grouping technique, not neuron forward propagation.",
            "D": "Median filtering is an image processing filter, not the mathematical foundation of neural perceptrons."
        },
        "placement_tip": "Core neuron equation: `z = w·x + b` (linear step), followed by `a = f(z)` (activation step)."
    },
    {
        "id": "AI_ML_DL_072",
        "section": "Deep Learning",
        "topic": "Neural Network Fundamentals",
        "concept": "Parameter Counting in Dense Layer",
        "difficulty": "Medium",
        "question_type": "calculation_based",
        "question": "A fully connected (Dense) hidden layer has 10 input features and 20 output neurons. If each neuron has its own independent bias term, what is the total number of trainable parameters in this layer?",
        "options": {
            "A": "200",
            "B": "220",
            "C": "30",
            "D": "210"
        },
        "correct_answer": "B",
        "explanation": "Each of the 20 neurons connects to all 10 inputs, requiring `10 * 20 = 200` weights. In addition, each of the 20 neurons has exactly 1 bias parameter: `20` biases. Total trainable parameters = `(inputs * outputs) + outputs = 200 + 20 = 220`.",
        "why_other_options_are_wrong": {
            "A": "200 counts only the weights (`10 * 20`), forgetting the 20 bias parameters.",
            "C": "30 is `10 + 20` (sum of input and output dimensions).",
            "D": "210 assumes only 10 biases exist."
        },
        "placement_tip": "Dense layer parameter formula: `(Input_Dim * Output_Neurons) + Output_Neurons` (Weights + Biases)."
    },
    {
        "id": "AI_ML_DL_073",
        "section": "Deep Learning",
        "topic": "Neural Network Fundamentals",
        "concept": "Why Deep Neural Networks Need Non-Linearity",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "What happens if a 50-layer deep neural network is constructed without any non-linear activation functions (or uses only linear activation `f(x) = x` at every layer)?",
        "options": {
            "A": "The network will automatically achieve 100% test accuracy on non-linear computer vision problems.",
            "B": "The entire 50-layer network mathematically collapses into a single-layer linear model (`y = W_composite * x + b_composite`), incapable of learning non-linear decision boundaries.",
            "C": "The network will crash with a division-by-zero error on the first forward pass.",
            "D": "The weights will grow to infinity within the first two epochs."
        },
        "correct_answer": "B",
        "explanation": "A linear combination of linear functions is always strictly linear: `W2 * (W1 * x + b1) + b2 = (W2 * W1) * x + (W2 * b1 + b2)`. No matter how many layers are stacked, without non-linear activations, the multi-layer network is mathematically identical to a single-layer linear regression model.",
        "why_other_options_are_wrong": {
            "A": "Without non-linearity, the network cannot learn even a simple XOR gate, let alone computer vision.",
            "C": "Matrix multiplication of linear layers executes without division errors.",
            "D": "Linear layers do not automatically explode to infinity unless learning rates are excessively high."
        },
        "placement_tip": "Without non-linear activations, stacking 100 dense layers is mathematically equivalent to 1 single linear layer!"
    },
    {
        "id": "AI_ML_DL_074",
        "section": "Deep Learning",
        "topic": "Neural Network Fundamentals",
        "concept": "Role of the Bias Term",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "In the linear equation `z = w*x + b` inside an artificial neuron, what is the specific role of the bias term `b`?",
        "options": {
            "A": "The bias shifts the activation function curve horizontally along the axis, allowing the neuron to output non-zero values even when all input features `x` are zero.",
            "B": "The bias is a hyperparameter that controls how fast the GPU fans spin.",
            "C": "The bias normalizes the inputs to have zero standard deviation.",
            "D": "The bias prevents the code from having syntax errors."
        },
        "correct_answer": "A",
        "explanation": "Without a bias term (`z = w*x`), the decision boundary is strictly forced to pass through the origin `(0, 0)`. The bias `b` acts as an offset that shifts the activation threshold horizontally, enabling the model to fit patterns that do not intersect the origin.",
        "why_other_options_are_wrong": {
            "B": "Hardware cooling is managed by GPU firmware, completely unrelated to mathematical bias terms.",
            "C": "Input normalization is performed by StandardScaler or Batch Normalization, not scalar neuron bias.",
            "D": "Bias is a mathematical parameter learned during training, not a syntax validator."
        },
        "placement_tip": "Bias allows the decision boundary to shift away from the origin `(0, 0)`. Analogous to the intercept `c` in `y = mx + c`."
    },
    {
        "id": "AI_ML_DL_075",
        "section": "Deep Learning",
        "topic": "Neural Network Fundamentals",
        "concept": "Forward Propagation Workflow",
        "difficulty": "Medium",
        "question_type": "workflow_based",
        "question": "During the forward propagation pass of training a Multilayer Perceptron (MLP), what is the correct chronological sequence of events?",
        "options": {
            "A": "Input features entered -> Layer-by-layer linear combination & activation -> Output layer prediction generated -> Loss function computes error against ground truth.",
            "B": "Loss computed -> Weights updated via SGD -> Inputs entered -> Gradients calculated.",
            "C": "Backpropagation runs -> Weights initialized -> Features predicted -> Confusion matrix built.",
            "D": "Feature scaling -> Weights zeroed out -> Dropout removed -> Test score computed."
        },
        "correct_answer": "A",
        "explanation": "Forward propagation flows from inputs to output: 1. Features are fed into input layer, 2. Each hidden layer computes `a^[l] = g^[l](W^[l] * a^[l-1] + b^[l])`, 3. The output layer generates predictions `y_hat`, and 4. The Loss Function compares `y_hat` to ground-truth `y` to compute the scalar loss.",
        "why_other_options_are_wrong": {
            "B": "Loss cannot be computed before inputs are passed forward to generate predictions.",
            "C": "Backpropagation requires forward loss to already be calculated to compute gradients in reverse.",
            "D": "Weights are never set to zero (zero initialization breaks symmetry in deep networks)."
        },
        "placement_tip": "Forward Pass: Inputs -> Hidden Layers -> Outputs -> Loss. Backward Pass: Loss -> Gradients -> Weight Updates."
    },

    # 2. Activation Functions (5 questions: 076-080)
    {
        "id": "AI_ML_DL_076",
        "section": "Deep Learning",
        "topic": "Activation Functions",
        "concept": "ReLU (Rectified Linear Unit)",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "What is the mathematical definition of the Rectified Linear Unit (ReLU) activation function, and why is it the default choice for hidden layers in modern deep networks?",
        "options": {
            "A": "`f(x) = max(0, x)`; it is computationally trivial to compute and does not saturate for positive values, alleviating the vanishing gradient problem.",
            "B": "`f(x) = 1 / (1 + e^-x)`; it squashes all values between 0 and 1.",
            "C": "`f(x) = x^3`; it cubes all inputs.",
            "D": "`f(x) = log(x)`; it calculates natural logarithms."
        },
        "correct_answer": "A",
        "explanation": "ReLU is defined as `f(x) = max(0, x)`. If `x < 0`, output is 0 (derivative is 0). If `x >= 0`, output is `x` (derivative is 1). Because the derivative is a constant 1 for all positive values, gradients do not diminish as they backpropagate through dozens of layers, solving the vanishing gradient issue of Sigmoid.",
        "why_other_options_are_wrong": {
            "B": "`1 / (1 + e^-x)` is the Sigmoid function, which suffers from severe vanishing gradients in deep networks.",
            "C": "Cubic functions cause runaway gradient explosion.",
            "D": "Logarithms are undefined for negative numbers and zero."
        },
        "placement_tip": "ReLU `max(0, x)`: Derivative is 1 for `x > 0`. Fast computation and avoids vanishing gradients."
    },
    {
        "id": "AI_ML_DL_077",
        "section": "Deep Learning",
        "topic": "Activation Functions",
        "concept": "Vanishing Gradient Problem with Sigmoid",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "Why does using the Sigmoid activation function `σ(z)` in hidden layers of very deep neural networks cause the 'Vanishing Gradient Problem' during backpropagation?",
        "options": {
            "A": "The maximum derivative of the Sigmoid function is only 0.25 (at z=0); multiplying many fractional derivatives (`< 0.25`) across layers via the chain rule causes gradients to decay exponentially toward zero for early layers.",
            "B": "The Sigmoid function derivative is always negative.",
            "C": "Sigmoid output values exceed 1,000,000, causing integer overflow.",
            "D": "Sigmoid functions can only run on CPU, not GPU."
        },
        "correct_answer": "A",
        "explanation": "The derivative of Sigmoid is `σ'(z) = σ(z) * (1 - σ(z))`. Its maximum possible value is `0.5 * (1 - 0.5) = 0.25`. By the chain rule, gradients backpropagating through `L` hidden layers are multiplied: `0.25 * 0.25 * 0.25...`. By layer 5 or 10, the gradient is practically zero, preventing early layers from updating their weights.",
        "why_other_options_are_wrong": {
            "B": "Sigmoid derivative is strictly positive everywhere (`0 < σ'(z) <= 0.25`).",
            "C": "Sigmoid is strictly bounded between 0 and 1, so it never overflows to millions.",
            "D": "Sigmoid is easily vectorized and accelerated on GPUs."
        },
        "placement_tip": "Max Sigmoid derivative is 0.25. Repeated multiplication through layers shrinks gradients to 0 -> Vanishing Gradient!"
    },
    {
        "id": "AI_ML_DL_078",
        "section": "Deep Learning",
        "topic": "Activation Functions",
        "concept": "Dying ReLU Problem",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "What is the 'Dying ReLU' problem in deep neural network training, and which activation function was designed to resolve it?",
        "options": {
            "A": "When a large gradient update shifts a neuron's weights such that it outputs negative values for all training samples, its derivative becomes permanently 0.0, permanently freezing the neuron; Leaky ReLU (or Parametric ReLU) fixes this by allowing a small non-zero slope (`α * x`) for `x < 0`.",
            "B": "When ReLU neurons run out of memory and crash Python; Softmax fixes it.",
            "C": "When ReLU output approaches infinity; Sigmoid fixes it.",
            "D": "When all weights are initialized to 1.0."
        },
        "correct_answer": "A",
        "explanation": "For any input `x < 0`, ReLU has an exact derivative of 0. If a neuron's weights get knocked into a state where it is negative across the entire dataset, zero gradient flows through it forever (`0 * gradient = 0`), rendering the neuron permanently inactive ('dead'). Leaky ReLU fixes this by defining `f(x) = x` if `x > 0`, and `f(x) = 0.01 * x` if `x <= 0`.",
        "why_other_options_are_wrong": {
            "B": "Dying ReLU is a mathematical zero-gradient lock, not an OS memory crash.",
            "C": "ReLU outputs for negative numbers are zero, not infinity.",
            "D": "Initializing weights to 1.0 causes symmetry breaking problems, not the dying ReLU phenomenon."
        },
        "placement_tip": "Dying ReLU: Gradient is 0 for `x < 0`. Fix: Leaky ReLU (`0.01 * x` for negative inputs) or ELU."
    },
    {
        "id": "AI_ML_DL_079",
        "section": "Deep Learning",
        "topic": "Activation Functions",
        "concept": "Output Layer Activation Selection",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "You are designing the final output layer of three different neural networks:\n1. Predicting a patient's Blood Pressure (continuous positive number)\n2. Predicting whether an image contains a Cat or Not (binary)\n3. Classifying a handwritten digit among 10 mutually exclusive classes (0 through 9)\n\nWhich activation functions should be placed on the output layer for 1, 2, and 3 respectively?",
        "options": {
            "A": "1: Linear (or ReLU), 2: Sigmoid, 3: Softmax",
            "B": "1: Softmax, 2: Linear, 3: Sigmoid",
            "C": "1: Sigmoid, 2: Tanh, 3: Linear",
            "D": "1: Tanh, 2: Softmax, 3: Sigmoid"
        },
        "correct_answer": "A",
        "explanation": "1. Regression targets require continuous unbounded (or positive) output -> Linear (or ReLU). 2. Binary classification requires a single probability between 0 and 1 -> Sigmoid. 3. Multiclass mutually exclusive classification requires normalized probabilities across `K` classes that sum to 1.0 -> Softmax.",
        "why_other_options_are_wrong": {
            "B": "Softmax is for multiclass classification, not continuous blood pressure regression.",
            "C": "Sigmoid outputs `[0, 1]`, which cannot predict blood pressures like 120 or 140.",
            "D": "Tanh outputs `[-1, +1]`, which is inappropriate for continuous positive regression."
        },
        "placement_tip": "GOLDEN RULE: Regression -> Linear; Binary Classification -> Sigmoid; Multi-class -> Softmax."
    },
    {
        "id": "AI_ML_DL_080",
        "section": "Deep Learning",
        "topic": "Activation Functions",
        "concept": "Tanh vs Sigmoid",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "Why is the Hyperbolic Tangent (Tanh) activation function generally preferred over the Sigmoid activation function in hidden layers of shallow neural networks?",
        "options": {
            "A": "Tanh is zero-centered with an output range of `[-1, +1]`, which prevents systematic zig-zagging in gradient updates compared to strictly positive `[0, 1]` Sigmoid outputs.",
            "B": "Tanh never requires backpropagation.",
            "C": "Tanh cannot be computed by computers because it uses imaginary numbers.",
            "D": "Tanh derivative is always greater than 10."
        },
        "correct_answer": "A",
        "explanation": "Sigmoid outputs are strictly positive `(0, 1)`, which causes all gradients entering a neuron's weights to have the same sign (all positive or all negative), leading to inefficient zig-zagging during gradient descent. Tanh outputs `(-1, +1)` and is zero-centered, ensuring mean activations are close to 0 and stabilizing weight updates.",
        "why_other_options_are_wrong": {
            "B": "All neural networks trained via gradient descent require backpropagation.",
            "C": "Tanh is a standard real-valued hyperbolic trigonometric function: `(e^z - e^-z) / (e^z + e^-z)`.",
            "D": "Maximum Tanh derivative is 1.0 (at z=0), never 10."
        },
        "placement_tip": "Tanh is zero-centered `[-1, +1]`, making optimization easier than non-zero-centered Sigmoid `[0, 1]`."
    },

    # 3. Backpropagation (4 questions: 081-084)
    {
        "id": "AI_ML_DL_081",
        "section": "Deep Learning",
        "topic": "Backpropagation",
        "concept": "Chain Rule of Calculus",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "Which fundamental mathematical theorem enables the Backpropagation algorithm to calculate the gradient of the total loss with respect to weights located deep in the earliest layers of a neural network?",
        "options": {
            "A": "The Chain Rule of Differential Calculus (`dL/dw = (dL/da) * (da/dz) * (dz/dw)`)",
            "B": "Pythagorean Theorem",
            "C": "Central Limit Theorem",
            "D": "Bayes' Theorem"
        },
        "correct_answer": "A",
        "explanation": "A neural network is a composite nested function: `Loss(f_L(f_L-1(...f_1(x))))`. The Chain Rule allows computing the partial derivative of the scalar loss with respect to any intermediate weight by multiplying local derivatives step-by-step from the output back to the input layer.",
        "why_other_options_are_wrong": {
            "B": "Pythagoras computes right-triangle hypotenuses, not composite derivatives.",
            "C": "Central Limit Theorem explains why sample means approach normal distributions.",
            "D": "Bayes theorem inverts conditional probabilities, not calculus derivatives."
        },
        "placement_tip": "Backpropagation is simply an efficient computational implementation of the multivariate Chain Rule."
    },
    {
        "id": "AI_ML_DL_082",
        "section": "Deep Learning",
        "topic": "Backpropagation",
        "concept": "Weight Update Formula in Gradient Descent",
        "difficulty": "Easy",
        "question_type": "calculation_based",
        "question": "In standard gradient descent, a weight currently has value `w = 4.0`. The calculated gradient of the loss with respect to this weight is `dL/dw = 3.0`, and the learning rate is `η = 0.1`. What is the updated weight value after one gradient descent step using `w_new = w_old - η * (dL/dw)`?",
        "options": {
            "A": "4.3",
            "B": "3.7",
            "C": "1.2",
            "D": "0.3"
        },
        "correct_answer": "B",
        "explanation": "Apply the gradient descent update equation: `w_new = w_old - η * (dL/dw) = 4.0 - (0.1 * 3.0) = 4.0 - 0.3 = 3.7`.",
        "why_other_options_are_wrong": {
            "A": "4.3 is gradient ascent (`4.0 + 0.3`), which maximizes loss rather than minimizing it.",
            "C": "1.2 is `4.0 * 0.3`.",
            "D": "0.3 is the step size (`η * dL/dw`), forgetting to subtract it from `w_old`."
        },
        "placement_tip": "Always SUBTRACT the step: `w_new = w_old - learning_rate * gradient`. (Minus sign moves downhill towards minimum)."
    },
    {
        "id": "AI_ML_DL_083",
        "section": "Deep Learning",
        "topic": "Backpropagation",
        "concept": "Effect of Learning Rate Too Large vs Too Small",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "What happens during neural network training if the learning rate is set (1) Too high, versus (2) Too low?",
        "options": {
            "A": "(1) The loss oscillates wildly or diverges to infinity (overshooting the minimum); (2) Training converges excessively slowly and risks getting trapped in suboptimal plateaus.",
            "B": "(1) Training is instantaneous and perfect; (2) The GPU explodes.",
            "C": "(1) Weights become zero; (2) Model overfits immediately.",
            "D": "Learning rate has no effect on convergence speed."
        },
        "correct_answer": "A",
        "explanation": "If the learning rate is too large, the optimizer takes massive steps, bouncing across the loss valley and overshooting the minimum, causing loss divergence (NaN values). If the learning rate is too small, weight updates are microscopic, requiring thousands of unnecessary epochs and potentially stalling on flat plateaus.",
        "why_other_options_are_wrong": {
            "B": "High learning rates destabilize training rather than making it perfect.",
            "C": "High learning rate causes numerical explosion/divergence, not automatic zeroing.",
            "D": "Learning rate is arguably the single most important hyperparameter in deep learning optimization."
        },
        "placement_tip": "High Learning Rate -> Divergence/Oscillation. Low Learning Rate -> Painfully slow convergence / stalling."
    },
    {
        "id": "AI_ML_DL_084",
        "section": "Deep Learning",
        "topic": "Backpropagation",
        "concept": "Vanishing vs Exploding Gradients",
        "difficulty": "Hard",
        "question_type": "debugging_or_troubleshooting",
        "question": "While training an 80-layer deep network, the training loss suddenly becomes `NaN` (Not a Number) at epoch 4, and terminal logs show weights exceeding `10^38`. What numerical stability failure occurred, and what is the standard fix?",
        "options": {
            "A": "Exploding Gradients; resolved by Gradient Clipping, proper weight initialization (He/Xavier), and Batch Normalization.",
            "B": "Vanishing Gradients; resolved by increasing the learning rate by 100x.",
            "C": "Underfitting; resolved by removing all activation functions.",
            "D": "The dataset has too many training rows."
        },
        "correct_answer": "A",
        "explanation": "When gradients are greater than 1.0 and compounded across deep layers, backpropagation multiplies them repeatedly, leading to exponential growth (`g^L`). This causes Exploding Gradients, resulting in float overflow and `NaN` weights. Standard remedies: 1. Gradient Clipping (capping gradients at a maximum threshold, e.g. `clipnorm=1.0`), 2. He/Xavier weight initialization, and 3. Batch Normalization.",
        "why_other_options_are_wrong": {
            "B": "Vanishing gradients cause weights to freeze at zero updates, not explode into `NaN` overflows.",
            "C": "Removing activation functions collapses the model to linear regression, not solving gradient explosion.",
            "D": "More training rows stabilizes gradient estimations rather than causing numerical overflow."
        },
        "placement_tip": "Loss = NaN and weights blow up -> EXPLODING GRADIENTS! Fix with Gradient Clipping and Batch Normalization."
    },

    # 4. Loss Functions (3 questions: 085-087)
    {
        "id": "AI_ML_DL_085",
        "section": "Deep Learning",
        "topic": "Loss Functions",
        "concept": "Binary Cross-Entropy Loss",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In a binary classification neural network with a Sigmoid output neuron producing predicted probability `p`, what is the mathematical formula for Binary Cross-Entropy (Log Loss) for a true label `y ∈ {0, 1}`?",
        "options": {
            "A": "`L = -[y * log(p) + (1 - y) * log(1 - p)]`",
            "B": "`L = (y - p)^2`",
            "C": "`L = max(0, 1 - y * p)`",
            "D": "`L = |y - p|`"
        },
        "correct_answer": "A",
        "explanation": "Binary Cross-Entropy is derived from maximum likelihood estimation: `L = -[y * log(p) + (1 - y) * log(1 - p)]`. If `y = 1`, the loss reduces to `-log(p)` (punishing low confidence with infinite loss as `p -> 0`). If `y = 0`, it reduces to `-log(1 - p)`.",
        "why_other_options_are_wrong": {
            "B": "`L = (y - p)^2` is Mean Squared Error, which is non-convex when paired with Sigmoid outputs.",
            "C": "`max(0, 1 - y*p)` is Hinge Loss used in Support Vector Machines.",
            "D": "`|y - p|` is Mean Absolute Error (L1 loss)."
        },
        "placement_tip": "Binary Cross Entropy = `-[y*log(p) + (1-y)*log(1-p)]`. Heavily penalizes confident wrong predictions!"
    },
    {
        "id": "AI_ML_DL_086",
        "section": "Deep Learning",
        "topic": "Loss Functions",
        "concept": "Categorical vs Sparse Categorical Cross-Entropy",
        "difficulty": "Medium",
        "question_type": "code_or_pseudocode",
        "question": "In Keras / TensorFlow, what is the exact difference between `categorical_crossentropy` and `sparse_categorical_crossentropy` loss functions?",
        "options": {
            "A": "`categorical_crossentropy` expects target labels to be One-Hot Encoded (e.g. `[0, 1, 0]`); `sparse_categorical_crossentropy` expects targets to be plain integer class indices (e.g. `1`).",
            "B": "`sparse_categorical_crossentropy` only works on datasets with missing values.",
            "C": "`categorical_crossentropy` is for regression, while sparse is for clustering.",
            "D": "`sparse_categorical_crossentropy` is 10 times slower and obsolete."
        },
        "correct_answer": "A",
        "explanation": "Both loss functions calculate identical cross-entropy mathematics. The only difference is the data format of the target label `y`: if labels are one-hot encoded vectors (e.g. `[[1, 0, 0], [0, 1, 0]]`), use `categorical_crossentropy`. If labels are integer IDs (e.g. `[0, 1]`), use `sparse_categorical_crossentropy` (saving significant memory).",
        "why_other_options_are_wrong": {
            "B": "Neither loss function tolerates missing NaN values.",
            "C": "Both are classification loss functions paired with Softmax output layers.",
            "D": "Sparse cross-entropy is computationally faster and uses significantly less RAM by avoiding one-hot expansion."
        },
        "placement_tip": "One-hot target labels `[0, 1, 0]` -> `categorical_crossentropy`. Integer targets `0, 1, 2` -> `sparse_categorical_crossentropy`."
    },
    {
        "id": "AI_ML_DL_087",
        "section": "Deep Learning",
        "topic": "Loss Functions",
        "concept": "MSE vs Cross-Entropy for Classification",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "Why is Mean Squared Error (MSE) strongly discouraged as the loss function for classification models with Sigmoid output layers, in favor of Cross-Entropy?",
        "options": {
            "A": "Combining MSE with Sigmoid creates a non-convex loss surface with many local minima, and causes gradient saturation (vanishing gradients) when predictions are confidently wrong.",
            "B": "MSE can only output negative numbers.",
            "C": "Cross-Entropy runs on GPUs, while MSE runs only on quantum processors.",
            "D": "MSE requires the target labels to be complex numbers."
        },
        "correct_answer": "A",
        "explanation": "When MSE is paired with Sigmoid, the gradient contains the derivative `σ'(z)`. When the model is confidently wrong (e.g. `y = 1`, but `p = 0.001`), `σ'(z)` is near zero, causing gradient updates to stall right when the model needs to learn the most. In contrast, Cross-Entropy's derivative cancels out the sigmoid derivative (`p - y`), producing steep, clean gradients proportional to the error.",
        "why_other_options_are_wrong": {
            "B": "Squared errors are mathematically non-negative (`>= 0`).",
            "C": "Both loss functions are simple vector operations that execute on standard hardware.",
            "D": "MSE operates on standard real-valued vectors."
        },
        "placement_tip": "MSE + Sigmoid = Non-convex & saturated gradient when wrong! Cross-Entropy + Sigmoid = Convex & fast learning."
    },

    # 5. CNN (5 questions: 088-092)
    {
        "id": "AI_ML_DL_088",
        "section": "Deep Learning",
        "topic": "CNN",
        "concept": "CNN Output Dimension Formula",
        "difficulty": "Hard",
        "question_type": "calculation_based",
        "question": "An input grayscale image has dimensions `32 x 32`. A convolutional layer applies a `5 x 5` filter with a stride of `1` and padding of `0` (valid padding). What are the height and width of the resulting feature map using the formula `Output = ((W - K + 2P) / S) + 1`?",
        "options": {
            "A": "28 x 28",
            "B": "32 x 32",
            "C": "26 x 26",
            "D": "30 x 30"
        },
        "correct_answer": "A",
        "explanation": "Formula: `O = ((W - K + 2*P) / S) + 1`. Here: `W = 32`, `K = 5`, `P = 0`, `S = 1`. Compute: `O = ((32 - 5 + 0) / 1) + 1 = (27 / 1) + 1 = 27 + 1 = 28`. The output feature map is `28 x 28`.",
        "why_other_options_are_wrong": {
            "B": "32 x 32 would require 'same' padding (`P = 2`).",
            "C": "26 x 26 is `((32 - 7) + 1)` (a 7x7 filter).",
            "D": "30 x 30 is `((32 - 3) + 1)` (a 3x3 filter)."
        },
        "placement_tip": "CRITICAL CNN FORMULA: `Output_Size = ((Input_Size - Kernel_Size + 2*Padding) / Stride) + 1`."
    },
    {
        "id": "AI_ML_DL_089",
        "section": "Deep Learning",
        "topic": "CNN",
        "concept": "Max Pooling Layer Purpose",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "What is the primary function of a Max Pooling layer (e.g. `2x2` pooling with stride `2`) in a Convolutional Neural Network?",
        "options": {
            "A": "To downsample feature maps (reducing spatial dimensions by 50%), which reduces computation and parameters while providing translational invariance.",
            "B": "To increase the number of color channels from 3 to 64.",
            "C": "To train weights via backpropagation using Adam optimizer.",
            "D": "To invert the colors of the image."
        },
        "correct_answer": "A",
        "explanation": "Max Pooling slides a window (e.g. `2x2`) over feature maps and extracts the maximum value, discarding 75% of spatial data. This downsampling reduces computational overhead, controls overfitting, and gives the network translational invariance (a cat feature detected in the corner is retained regardless of small pixel shifts). Note that pooling layers contain ZERO trainable parameters.",
        "why_other_options_are_wrong": {
            "B": "Channel depth is changed by the number of convolutional filters, not pooling layers.",
            "C": "Max pooling has zero learned weights or parameters; it is a fixed mathematical operation.",
            "D": "Color inversion is a data augmentation technique, not a neural layer."
        },
        "placement_tip": "Pooling layers: 1. Reduce spatial dimensions, 2. Provide translation invariance, 3. Have ZERO trainable parameters!"
    },
    {
        "id": "AI_ML_DL_090",
        "section": "Deep Learning",
        "topic": "CNN",
        "concept": "Weight Sharing in CNNs vs Fully Connected",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "Why are Convolutional layers vastly superior to Dense (Fully Connected) layers when processing high-resolution images (e.g. 1000 x 1000 pixels)?",
        "options": {
            "A": "CNNs use Parameter Sharing (the same small kernel filter slides across the entire image) and Local Receptive Fields, drastically reducing the number of parameters compared to Dense layers which would require billions of weights.",
            "B": "Dense layers cannot process pixels that are black or white.",
            "C": "CNNs do not use floating-point numbers.",
            "D": "Dense layers are only compatible with audio files."
        },
        "correct_answer": "A",
        "explanation": "A 1000x1000 RGB image has 3,000,000 values. Connecting this to a single dense layer of 1,000 neurons requires `3,000,000 * 1,000 = 3 billion` weights (instant out-of-memory). A CNN uses a tiny filter (e.g. `3x3x3 = 27` weights) shared across all pixel patches, reducing parameters by a factor of millions while preserving 2D spatial relationships.",
        "why_other_options_are_wrong": {
            "B": "Dense layers process any numerical pixel values.",
            "C": "CNNs rely heavily on IEEE-754 floating-point operations.",
            "D": "Dense layers process tabular, text, and audio embeddings routinely."
        },
        "placement_tip": "Two CNN pillars: 1. Parameter Sharing (shared kernel weights), 2. Local Receptive Fields (spatial locality)."
    },
    {
        "id": "AI_ML_DL_091",
        "section": "Deep Learning",
        "topic": "CNN",
        "concept": "Valid vs Same Padding",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In convolutional layers, what is the operational difference between `padding='valid'` and `padding='same'`?",
        "options": {
            "A": "`valid` applies zero padding, causing spatial dimensions to shrink after convolution; `same` pads the image border with zeros such that the output feature map has the exact same spatial dimensions as the input (when stride=1).",
            "B": "`valid` is for training; `same` is for testing.",
            "C": "`same` deletes the center pixels of the image.",
            "D": "`valid` converts 2D images into 1D vectors."
        },
        "correct_answer": "A",
        "explanation": "`padding='valid'` means no padding (`P=0`). The filter only visits fully valid interior positions, causing the output size to shrink by `(kernel_size - 1)`. `padding='same'` computes padding `P = (K - 1) / 2` so that when `Stride = 1`, the output feature map matches the input dimensions exactly.",
        "why_other_options_are_wrong": {
            "B": "Both padding modes are applied identically during training and inference.",
            "C": "Padding adds pixels to the external borders, never deleting central data.",
            "D": "Flatten layers convert 2D feature maps to 1D vectors, not valid padding."
        },
        "placement_tip": "`padding='valid'` = No padding (shrinks image). `padding='same'` = Zero-padding (preserves dimensions when stride=1)."
    },
    {
        "id": "AI_ML_DL_092",
        "section": "Deep Learning",
        "topic": "CNN",
        "concept": "Calculating CNN Layer Parameters",
        "difficulty": "Hard",
        "question_type": "calculation_based",
        "question": "A convolutional layer takes an RGB color image (3 input channels) and applies 16 filters, each of size `3 x 3`. Each filter has 1 bias term. How many total trainable parameters exist in this convolutional layer?",
        "options": {
            "A": "448",
            "B": "144",
            "C": "432",
            "D": "48"
        },
        "correct_answer": "A",
        "explanation": "Each filter must span all input channels: `Filter_weights = Kernel_H * Kernel_W * Channels = 3 * 3 * 3 = 27` weights per filter. Adding 1 bias per filter = `27 + 1 = 28` parameters per filter. With 16 filters: `Total = 16 * 28 = 448` parameters.",
        "why_other_options_are_wrong": {
            "B": "144 is `16 * (3 * 3)`, completely ignoring the 3 color channels and biases.",
            "C": "432 is `16 * (3 * 3 * 3)`, forgetting the 16 bias parameters.",
            "D": "48 is `16 * 3`."
        },
        "placement_tip": "Conv2D Parameters = `Filters * (Kernel_H * Kernel_W * Input_Channels + 1)`."
    },

    # 6. RNN and Sequence Models (3 questions: 093-095)
    {
        "id": "AI_ML_DL_093",
        "section": "Deep Learning",
        "topic": "RNN and Sequence Models",
        "concept": "Recurrent Hidden State",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "How does a standard Recurrent Neural Network (RNN) process sequential data (like time-series or sentences) differently from a feedforward network?",
        "options": {
            "A": "An RNN maintains a cyclical 'hidden state' memory vector `h_t` that is updated at each timestep using both the current input `x_t` and the previous hidden state `h_{t-1}`.",
            "B": "An RNN executes only once on the entire text string as a single integer.",
            "C": "An RNN reverses the alphabet of the input string.",
            "D": "An RNN cannot process words with more than 5 letters."
        },
        "correct_answer": "A",
        "explanation": "Feedforward networks assume inputs are independent. RNNs process sequential tokens step-by-step: at timestep `t`, the network computes `h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b)`. The hidden state `h_t` acts as an internal working memory that carries context forward across the sequence.",
        "why_other_options_are_wrong": {
            "B": "RNNs process sequences iteratively across timesteps `t = 1...T`.",
            "C": "String reversal is an explicit data transformation, not RNN architecture.",
            "D": "RNNs handle arbitrary sequence lengths through temporal parameter sharing."
        },
        "placement_tip": "RNN key equation: `h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b)`. Loops memory from past step into current step."
    },
    {
        "id": "AI_ML_DL_094",
        "section": "Deep Learning",
        "topic": "RNN and Sequence Models",
        "concept": "LSTM Gating Mechanisms",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "Standard RNNs fail on long sentences due to vanishing gradients across long time horizons. Long Short-Term Memory (LSTM) networks resolve this using an explicit Cell State (`C_t`) controlled by three gates. What are these three gates and their functions?",
        "options": {
            "A": "Forget Gate (decides what information to discard from cell state), Input Gate (decides what new information to store), Output Gate (decides what to output as hidden state).",
            "B": "Start Gate, Middle Gate, Stop Gate.",
            "C": "Push Gate, Pop Gate, Shift Gate.",
            "D": "Encoder Gate, Decoder Gate, Attention Gate."
        },
        "correct_answer": "A",
        "explanation": "LSTM replaces the simple recurrent unit with a memory cell governed by 3 sigmoid gates: 1. Forget gate `f_t`: removes irrelevant past history, 2. Input gate `i_t`: determines what newly incoming information to record into the cell state, and 3. Output gate `o_t`: filters the cell state to produce the next hidden state `h_t`. The additive cell state allows gradients to flow unimpeded.",
        "why_other_options_are_wrong": {
            "B": "Start, Middle, and Stop are not LSTM gating components.",
            "C": "Push, Pop, and Shift describe hardware stack registers.",
            "D": "Encoder, Decoder, and Attention describe the Transformer architecture, not the internal gates of an LSTM cell."
        },
        "placement_tip": "Three LSTM Gates: Forget Gate (discard past), Input Gate (write new), Output Gate (read out)."
    },
    {
        "id": "AI_ML_DL_095",
        "section": "Deep Learning",
        "topic": "RNN and Sequence Models",
        "concept": "GRU vs LSTM",
        "difficulty": "Hard",
        "question_type": "comparison",
        "question": "How does a Gated Recurrent Unit (GRU) simplify the LSTM architecture while retaining comparable performance on sequential tasks?",
        "options": {
            "A": "GRU eliminates the separate Cell State, merges the Forget and Input gates into a single 'Update Gate', and adds a 'Reset Gate', resulting in fewer parameters and faster training.",
            "B": "GRU removes all weights and uses only linear regression.",
            "C": "GRU cannot run on text data, only on images.",
            "D": "GRU adds 5 additional gates to make the network deeper."
        },
        "correct_answer": "A",
        "explanation": "GRU (Cho et al., 2014) streamlines the LSTM cell: it combines the cell state and hidden state into a unified state, and reduces the gating mechanism to just two gates: an Update Gate (governing how much past state to keep) and a Reset Gate (governing how much past state to forget). With ~25% fewer parameters, it trains faster than LSTM.",
        "why_other_options_are_wrong": {
            "B": "GRU maintains non-linear recurrent weight matrices.",
            "C": "GRU is widely used in NLP, audio transcription, and time-series forecasting.",
            "D": "GRU reduces complexity from 3 gates to 2 gates, not adding 5 gates."
        },
        "placement_tip": "GRU has 2 gates (Reset Gate and Update Gate) and NO separate cell state. Faster to train than LSTM."
    },

    # 7. Regularization in Deep Learning (2 questions: 096-097)
    {
        "id": "AI_ML_DL_096",
        "section": "Deep Learning",
        "topic": "Regularization in Deep Learning",
        "concept": "Dropout Regularization",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "How does Dropout (e.g. `Dropout(0.50)`) prevent overfitting during neural network training, and how does its behavior change during test/inference time?",
        "options": {
            "A": "During training, it randomly zeroes out 50% of neuron activations on each forward pass, preventing co-adaptation of features; during inference/testing, all neurons are active and outputs are scaled accordingly.",
            "B": "It permanently deletes 50% of the weights from the model file on disk.",
            "C": "It drops 50% of the training images before training starts.",
            "D": "It runs during testing to randomly flip 50% of predictions."
        },
        "correct_answer": "A",
        "explanation": "During training, Dropout temporarily deactivates a random fraction `p` of neurons on each iteration. This prevents neurons from co-adapting (relying too heavily on specific peer neurons), forcing the network to learn robust, redundant representations (acting like an implicit ensemble of sub-networks). During testing, dropout is disabled and all neurons fire, with outputs scaled by `(1 - p)`.",
        "why_other_options_are_wrong": {
            "B": "Weights are never deleted permanently from disk; dropout is an on-the-fly mask applied to activations during training passes.",
            "C": "Dropout operates on hidden layer neuron activations, not on training dataset samples.",
            "D": "Dropout is turned OFF during test/inference time to ensure deterministic predictions."
        },
        "placement_tip": "Dropout is ACTIVE during training (masks neurons to prevent co-adaptation), but DISABLED during testing!"
    },
    {
        "id": "AI_ML_DL_097",
        "section": "Deep Learning",
        "topic": "Regularization in Deep Learning",
        "concept": "Batch Normalization",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "What primary problem does Batch Normalization (BatchNorm) solve in deep neural networks, and where is it typically inserted?",
        "options": {
            "A": "It mitigates internal covariate shift by normalizing the layer inputs across the mini-batch to have mean 0 and variance 1, inserted typically between linear transformations and activation functions.",
            "B": "It deletes batches that have high loss values.",
            "C": "It converts 32-bit floats into 8-bit integers.",
            "D": "It replaces all activation functions with Sigmoid."
        },
        "correct_answer": "A",
        "explanation": "As weights update during training, the distribution of inputs to deeper layers continuously shifts (Internal Covariate Shift), forcing layers to adapt to moving targets. BatchNorm normalizes activations over the mini-batch: `x_hat = (x - μ_B) / sqrt(σ_B^2 + ε)`, and then applies learnable scale and shift parameters (`γ * x_hat + β`). This accelerates training speed, enables higher learning rates, and acts as mild regularization.",
        "why_other_options_are_wrong": {
            "B": "BatchNorm normalizes data across all batches; it never deletes batches.",
            "C": "Float quantization (FP32 to INT8) is post-training model compression, not BatchNorm.",
            "D": "BatchNorm is applied alongside non-linear activations like ReLU, not replacing them."
        },
        "placement_tip": "Batch Normalization: Normalizes mini-batch to mean 0, variance 1. Stabilizes training and allows higher learning rates."
    },

    # 8. Training Neural Networks (3 questions: 098-100)
    {
        "id": "AI_ML_DL_098",
        "section": "Deep Learning",
        "topic": "Training Neural Networks",
        "concept": "Epoch vs Batch Size vs Iteration",
        "difficulty": "Easy",
        "question_type": "calculation_based",
        "question": "A training dataset contains 10,000 samples. If the model is trained with a `batch_size = 50`, how many iterations (gradient updates) occur during a single complete `epoch`?",
        "options": {
            "A": "200 iterations",
            "B": "500 iterations",
            "C": "50 iterations",
            "D": "10,000 iterations"
        },
        "correct_answer": "A",
        "explanation": "An 'epoch' is one complete pass through the entire training dataset. The number of iterations (batches) per epoch is `Total_Samples / Batch_Size = 10,000 / 50 = 200` iterations.",
        "why_other_options_are_wrong": {
            "B": "500 is `10,000 / 20`.",
            "C": "50 is the batch size itself.",
            "D": "10,000 would be the iteration count only if `batch_size = 1` (pure Stochastic Gradient Descent)."
        },
        "placement_tip": "Epoch = 1 full pass through all data. Iterations per epoch = `Total_Samples / Batch_Size`."
    },
    {
        "id": "AI_ML_DL_099",
        "section": "Deep Learning",
        "topic": "Training Neural Networks",
        "concept": "Batch vs Stochastic vs Mini-Batch Gradient Descent",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "Compare Batch Gradient Descent, Stochastic Gradient Descent (SGD), and Mini-Batch Gradient Descent. Why is Mini-Batch Gradient Descent the universal industry standard?",
        "options": {
            "A": "Batch GD computes gradients on all dataset samples (slow, huge memory); Pure SGD updates on 1 sample (noisy, erratic); Mini-Batch GD balances efficiency and stability by computing gradients on small batches (e.g. 32 to 256 samples), leveraging GPU parallel vectorization.",
            "B": "Mini-Batch GD requires zero matrix multiplications.",
            "C": "Pure SGD is only used on quantum supercomputers.",
            "D": "Batch GD runs 1,000 times faster than Mini-Batch GD on GPUs."
        },
        "correct_answer": "A",
        "explanation": "1. Batch GD computes the exact gradient over all `N` samples per step (prohibitively slow and memory-intensive for large datasets). 2. Pure SGD computes gradients on 1 sample at a time (noisy, fluctuates wildly, cannot utilize GPU matrix parallelism). 3. Mini-Batch GD takes small chunks (32, 64, 128), offering smooth convergence, regularizing noise, and hardware-accelerated parallel GPU execution.",
        "why_other_options_are_wrong": {
            "B": "Mini-batch matrix multiplications are the fundamental workload executed on GPUs.",
            "C": "SGD is a simple textbook optimization algorithm executable on any hardware.",
            "D": "Batch GD is much slower than Mini-Batch because processing millions of samples per update is inefficient."
        },
        "placement_tip": "Mini-Batch GD (typical sizes 32, 64, 128) is the universal industry standard for GPU parallel efficiency."
    },
    {
        "id": "AI_ML_DL_100",
        "section": "Deep Learning",
        "topic": "Training Neural Networks",
        "concept": "Adam Optimizer Mechanics",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "Why has the Adam (Adaptive Moment Estimation) optimizer become the default optimization algorithm in deep learning compared to standard Stochastic Gradient Descent (SGD)?",
        "options": {
            "A": "Adam combines the benefits of Momentum (exponential moving average of past gradients to accelerate through plateaus) and RMSProp (adapts individual learning rates for each parameter based on historical squared gradients).",
            "B": "Adam eliminates the need for computing loss functions.",
            "C": "Adam guarantees that training reaches global zero error in exactly 1 epoch.",
            "D": "Adam replaces backpropagation with random search."
        },
        "correct_answer": "A",
        "explanation": "Adam maintains two moving averages: 1. First moment `m_t` (mean of past gradients, providing Momentum to escape saddle points and smooth oscillation), and 2. Second moment `v_t` (uncentered variance of past gradients, like RMSProp, automatically scaling learning rates so frequent features get smaller updates and rare features get larger updates). It also includes bias correction for zero initialization.",
        "why_other_options_are_wrong": {
            "B": "Adam requires loss computation on every batch to calculate gradient vectors.",
            "C": "No optimizer can guarantee reaching the global minimum in 1 epoch on non-convex loss surfaces.",
            "D": "Adam relies strictly on backpropagation gradients."
        },
        "placement_tip": "Adam = Momentum (1st moment, tracks velocity) + RMSProp (2nd moment, adaptive per-parameter learning rate)."
    }
]

print(f"Deep Learning Part generated with {len(dl_questions)} questions.")
