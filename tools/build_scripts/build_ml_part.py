# build_ml_part.py - Questions AI_ML_DL_021 to AI_ML_DL_070 (Machine Learning - 50 questions)
# Covers 15 ML topics with code, calculation, scenario, and conceptual questions.

ml_questions = [
    # 1. ML Fundamentals (5 questions: 021-025)
    {
        "id": "AI_ML_DL_021",
        "section": "Machine Learning",
        "topic": "ML Fundamentals",
        "concept": "Supervised vs Unsupervised Learning",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "A banking institution wants to build two machine learning systems: (1) A system to predict whether a loan applicant will default (based on historical loans with known repayment outcomes), and (2) A system to group credit card customers into behavioral spending segments with no pre-assigned labels. Which paradigm does each task represent?",
        "options": {
            "A": "(1) Unsupervised Learning, (2) Supervised Learning",
            "B": "(1) Supervised Learning, (2) Unsupervised Learning",
            "C": "Both are Reinforcement Learning tasks",
            "D": "Both are Semi-Supervised Classification tasks"
        },
        "correct_answer": "B",
        "explanation": "Task 1 has labeled historical outcomes (default: Yes/No), which is the definition of Supervised Learning (specifically binary classification). Task 2 has unlabeled customer data and seeks inherent groupings without ground-truth labels, which is Unsupervised Learning (clustering).",
        "why_other_options_are_wrong": {
            "A": "Inverts the definitions; loan default has explicit target labels, making it supervised.",
            "C": "Reinforcement learning involves an agent interacting with an environment to maximize cumulative reward, which is not applicable here.",
            "D": "Neither task involves combining a tiny labeled set with massive unlabeled data for semi-supervised training."
        },
        "placement_tip": "If ground-truth target labels (y) exist in training data -> Supervised. If discovering hidden groupings without labels -> Unsupervised."
    },
    {
        "id": "AI_ML_DL_022",
        "section": "Machine Learning",
        "topic": "ML Fundamentals",
        "concept": "Features vs Labels",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "In a tabular dataset used to predict housing prices with columns `[SquareFootage, Bedrooms, Bathrooms, ZipCode, SalePrice]`, what are `SquareFootage, Bedrooms, Bathrooms, ZipCode` and `SalePrice` formally termed in machine learning parlance?",
        "options": {
            "A": "`SquareFootage...` are Hyperparameters; `SalePrice` is a Loss Function.",
            "B": "`SquareFootage...` are Features (independent variables X); `SalePrice` is the Target/Label (dependent variable y).",
            "C": "`SquareFootage...` are Weights; `SalePrice` is the Bias term.",
            "D": "`SquareFootage...` are Clusters; `SalePrice` is a Centroid."
        },
        "correct_answer": "B",
        "explanation": "The inputs used to make predictions (`SquareFootage`, `Bedrooms`, etc.) are Features (input matrix X). The outcome variable being predicted (`SalePrice`) is the Target variable or Label (ground-truth vector y).",
        "why_other_options_are_wrong": {
            "A": "Hyperparameters are external model configurations (like tree depth or learning rate), not dataset columns.",
            "C": "Weights and bias are internal mathematical parameters learned by the model during training.",
            "D": "Clusters and centroids belong to K-Means clustering, not supervised tabular regression schemas."
        },
        "placement_tip": "Input matrix = Features (X); Predicted output = Label / Target (y)."
    },
    {
        "id": "AI_ML_DL_023",
        "section": "Machine Learning",
        "topic": "ML Fundamentals",
        "concept": "Regression vs Classification",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "What is the primary technical distinction between a Regression task and a Classification task in Supervised Learning?",
        "options": {
            "A": "Regression predicts a continuous quantitative numerical value; Classification predicts a discrete categorical class label.",
            "B": "Regression only works on images, whereas Classification only works on numbers.",
            "C": "Regression models never have errors, while Classification models always have errors.",
            "D": "Classification requires neural networks, whereas Regression cannot use neural networks."
        },
        "correct_answer": "A",
        "explanation": "In supervised learning, if the target variable `y` is continuous (e.g. salary, temperature, stock price), the problem is Regression. If the target `y` belongs to discrete classes or categories (e.g. spam/not spam, disease type A/B/C), it is Classification.",
        "why_other_options_are_wrong": {
            "B": "Both regression and classification can take images, text, audio, or numbers as inputs.",
            "C": "All real-world statistical models incur residual errors.",
            "D": "Neural networks can be configured for regression (linear output with MSE loss) or classification (Softmax with cross-entropy)."
        },
        "placement_tip": "Continuous numeric target = Regression. Discrete category/class target = Classification."
    },
    {
        "id": "AI_ML_DL_024",
        "section": "Machine Learning",
        "topic": "ML Fundamentals",
        "concept": "Reinforcement Learning Components",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In Reinforcement Learning (RL), which tuple of components represents the core Markov Decision Process (MDP) interaction loop?",
        "options": {
            "A": "Agent, Environment, State, Action, Reward",
            "B": "Features, Labels, Weights, Biases, Epochs",
            "C": "Centroid, Cluster, Inertia, Silhouette, Distance",
            "D": "Token, Attention, Transformer, Prompt, Context"
        },
        "correct_answer": "A",
        "explanation": "In RL, an Agent observes the current State `S` of an Environment, selects an Action `A` according to its policy, transitions to a new state `S'`, and receives a scalar numerical Reward `R`. The goal is to maximize cumulative future discounted reward.",
        "why_other_options_are_wrong": {
            "B": "Features, labels, and weights define classical supervised parametric learning.",
            "C": "Centroids and inertia describe unsupervised clustering (K-Means).",
            "D": "Tokens, attention, and transformers describe natural language processing architectures."
        },
        "placement_tip": "RL is defined by an Agent taking Actions in an Environment to transition States and maximize Rewards."
    },
    {
        "id": "AI_ML_DL_025",
        "section": "Machine Learning",
        "topic": "ML Fundamentals",
        "concept": "Semi-Supervised Learning Use Case",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "A hospital has 500,000 medical X-ray scans, but professional radiologists have only had time to manually label 1,000 of them. Manual labeling is extremely expensive and time-consuming. Which machine learning paradigm is specifically suited to leverage both the small labeled set and the vast unlabeled pool?",
        "options": {
            "A": "Semi-Supervised Learning",
            "B": "Pure K-Means Clustering",
            "C": "Simple Linear Regression",
            "D": "Exhaustive Breadth-First Search"
        },
        "correct_answer": "A",
        "explanation": "Semi-Supervised Learning combines a small amount of labeled data with a large amount of unlabeled data during training. Techniques like pseudo-labeling, self-training, or contrastive pre-training leverage the structural distribution of the unlabeled data to dramatically boost performance over training on the 1,000 labels alone.",
        "why_other_options_are_wrong": {
            "B": "Pure clustering ignores the valuable 1,000 verified medical labels completely.",
            "C": "Linear regression cannot handle complex raw X-ray pixel inputs directly without severe underfitting.",
            "D": "Breadth-first search is a graph traversal algorithm, not an image classification learning paradigm."
        },
        "placement_tip": "Tiny labeled dataset + massive unlabeled dataset = Semi-Supervised Learning (common in healthcare and speech)."
    },

    # 2. Regression (5 questions: 026-030)
    {
        "id": "AI_ML_DL_026",
        "section": "Machine Learning",
        "topic": "Regression",
        "concept": "Simple Linear Regression Prediction",
        "difficulty": "Easy",
        "question_type": "calculation_based",
        "question": "A trained simple linear regression model is expressed by the equation: `y = 2.5 * x + 10`. If an input instance has feature value `x = 6`, what is the predicted target value `y`?",
        "options": {
            "A": "15.0",
            "B": "25.0",
            "C": "21.0",
            "D": "35.0"
        },
        "correct_answer": "B",
        "explanation": "Substitute `x = 6` into the linear equation: `y = (2.5 * 6) + 10 = 15.0 + 10 = 25.0`.",
        "why_other_options_are_wrong": {
            "A": "15.0 is `2.5 * 6`, forgetting to add the intercept/bias term (10).",
            "C": "21.0 is an arithmetic error.",
            "D": "35.0 is `(2.5 * 10) + 10`."
        },
        "placement_tip": "Linear formula: `y = m*x + c` (or `y = w*x + b`). Always multiply slope by feature before adding intercept."
    },
    {
        "id": "AI_ML_DL_027",
        "section": "Machine Learning",
        "topic": "Regression",
        "concept": "Mean Squared Error Cost Function",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "Why is the Mean Squared Error (MSE) cost function squared (`(y_actual - y_pred)^2`) rather than taking the simple sum of raw errors (`(y_actual - y_pred)`) in Ordinary Least Squares regression?",
        "options": {
            "A": "Squaring ensures positive and negative errors do not cancel each other out, penalizes larger outliers more heavily, and provides a smooth differentiable convex curve for gradient descent.",
            "B": "Squaring converts categorical text variables into integers.",
            "C": "Squaring removes the need for an intercept term.",
            "D": "Squaring guarantees that the R-squared score is always exactly 1.0."
        },
        "correct_answer": "A",
        "explanation": "If raw errors were summed, positive errors (+5) and negative errors (-5) would cancel out to 0, falsely indicating a perfect fit. Squaring ensures all errors are positive, heavily penalizes large mistakes (an error of 10 costs 100, error of 2 costs 4), and yields a continuous, convex parabola whose derivative is easily computed for optimization.",
        "why_other_options_are_wrong": {
            "B": "Loss functions evaluate numerical predictions; categorical variables must already be encoded before model fitting.",
            "C": "The bias/intercept term is still required to shift the regression line vertically.",
            "D": "R-squared depends on data variance and residuals, and is rarely exactly 1.0 on real data."
        },
        "placement_tip": "Squaring prevents negative/positive error cancellation and penalizes large outlier errors quadratically."
    },
    {
        "id": "AI_ML_DL_028",
        "section": "Machine Learning",
        "topic": "Regression",
        "concept": "R-squared Interpretation",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "A data scientist evaluates a multiple linear regression model on a test set and obtains a Coefficient of Determination (R² score) of 0.82. What does this metric mean in business terms?",
        "options": {
            "A": "The model made accurate predictions on exactly 82 out of 100 test samples.",
            "B": "82% of the variance in the target variable is explained by the independent features in the model.",
            "C": "The model has an 18% false positive rate.",
            "D": "The learning rate was set to 0.82 during model training."
        },
        "correct_answer": "B",
        "explanation": "R² (Coefficient of Determination) measures the proportion of variance in the dependent variable that is predictable from the independent variables. An R² of 0.82 means 82% of the total variance in the target is accounted for by the regression model (relative to a simple horizontal mean baseline).",
        "why_other_options_are_wrong": {
            "A": "R² is not classification accuracy; regression targets are continuous, not binary counts of correct/incorrect.",
            "C": "False positive rate applies to binary classification confusion matrices, not continuous regression.",
            "D": "Learning rate is an optimization hyperparameter, completely unrelated to the R² evaluation metric."
        },
        "placement_tip": "R² = Explained Variance / Total Variance. It is NOT accuracy percentage."
    },
    {
        "id": "AI_ML_DL_029",
        "section": "Machine Learning",
        "topic": "Regression",
        "concept": "Multicollinearity",
        "difficulty": "Hard",
        "question_type": "scenario_based",
        "question": "In a linear regression model predicting house prices, two features—`SquareMeters` and `SquareFeet`—are both included. Because `1 sq meter = 10.764 sq feet`, these two columns have a correlation of r = 1.0. What statistical pathology does this introduce into the linear regression model?",
        "options": {
            "A": "Underfitting due to insufficient feature variance.",
            "B": "Perfect Multicollinearity, leading to unstable coefficient estimates with inflated standard errors and inability to invert the `(X^T X)` matrix.",
            "C": "Vanishing gradient problem in the output neuron.",
            "D": "The model automatically converts into a classification tree."
        },
        "correct_answer": "B",
        "explanation": "When two or more features are perfectly collinear, the feature matrix `X` is not full rank, making `(X^T X)` singular (non-invertible) in closed-form OLS `w = (X^T X)^(-1) X^T y`. In numerical solvers, it causes extreme coefficient instability, massive standard errors, and erratic predictions.",
        "why_other_options_are_wrong": {
            "A": "Multicollinearity is a redundancy issue, not an issue of insufficient variance.",
            "C": "Vanishing gradients occur in deep neural networks with saturating activations, not Ordinary Least Squares.",
            "D": "Linear regression models never morph into decision trees."
        },
        "placement_tip": "Multicollinearity = Highly correlated independent variables. Detected via Variance Inflation Factor (VIF > 5 or 10)."
    },
    {
        "id": "AI_ML_DL_030",
        "section": "Machine Learning",
        "topic": "Regression",
        "concept": "L1 (Lasso) vs L2 (Ridge) Regularization",
        "difficulty": "Hard",
        "question_type": "comparison",
        "question": "What is the critical difference between L1 Regularization (Lasso) and L2 Regularization (Ridge) regarding feature selection in regression models?",
        "options": {
            "A": "Lasso (L1) adds the absolute sum of weights to the loss, driving less important feature coefficients to exactly zero (performing automatic feature selection); Ridge (L2) adds squared weights, shrinking coefficients close to zero but never exactly zero.",
            "B": "Ridge (L2) sets coefficients to zero, whereas Lasso (L1) increases coefficients to infinity.",
            "C": "Lasso can only be used with categorical targets; Ridge is for continuous targets.",
            "D": "Ridge regularization eliminates the need for gradient descent."
        },
        "correct_answer": "A",
        "explanation": "Lasso adds an L1 penalty `λ * Σ|w_i|`, creating diamond-shaped geometric constraint corners that force non-contributing coefficients to become exactly 0.0, yielding a sparse model with automatic feature selection. Ridge adds an L2 penalty `λ * Σ(w_i^2)`, shrinking coefficients asymptotically towards zero but preserving all features.",
        "why_other_options_are_wrong": {
            "B": "Inverts the true behavior: L1 (Lasso) produces exact zeros; L2 (Ridge) shrinks smoothly without exact zeros.",
            "C": "Both Ridge and Lasso are regression regularization techniques for continuous targets (and can be applied to logistic regression).",
            "D": "Ridge regression still requires numerical optimization or matrix inversion."
        },
        "placement_tip": "L1 Lasso = Absolute weights -> Exact Zeros (Feature Selection). L2 Ridge = Squared weights -> Smooth Shrinkage."
    },

    # 3. Classification (4 questions: 031-034)
    {
        "id": "AI_ML_DL_031",
        "section": "Machine Learning",
        "topic": "Classification",
        "concept": "Logistic Regression Sigmoid Function",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "Despite containing 'Regression' in its name, Logistic Regression is fundamentally a classification algorithm. How does it convert raw linear outputs `z = w*x + b` into valid probabilities between 0 and 1?",
        "options": {
            "A": "By applying the Sigmoid (Logistic) activation function `σ(z) = 1 / (1 + e^(-z))`.",
            "B": "By rounding all numbers to the nearest multiple of 10.",
            "C": "By dividing the prediction by the total number of features.",
            "D": "By passing the output through a ReLU activation function."
        },
        "correct_answer": "A",
        "explanation": "Logistic regression computes a linear combination `z = w*x + b` and passes `z` through the Sigmoid activation function `σ(z) = 1 / (1 + e^(-z))`. The sigmoid curve maps any real-valued number from `-∞` to `+∞` into a bounded probability output between `(0, 1)`.",
        "why_other_options_are_wrong": {
            "B": "Rounding to multiples of 10 cannot produce fractional probabilities in the range `[0, 1]`.",
            "C": "Dividing by feature count does not bound numbers between 0 and 1.",
            "D": "ReLU outputs `[0, ∞)` and is unbounded on the positive axis, making it invalid for probabilities."
        },
        "placement_tip": "Logistic Regression uses Sigmoid `1 / (1 + e^-z)` to map linear values into `(0, 1)` probabilities."
    },
    {
        "id": "AI_ML_DL_032",
        "section": "Machine Learning",
        "topic": "Classification",
        "concept": "Classification Decision Threshold",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "A cancer detection model outputs the probability that a biopsy sample is malignant. By default, the decision threshold is 0.50. Why might a hospital's lead oncologist decide to lower the classification threshold to 0.20?",
        "options": {
            "A": "To maximize precision at the cost of missing true cancer cases.",
            "B": "To increase Recall (sensitivity), ensuring almost all true cancer cases are flagged for further testing, even if it increases false alarms (false positives).",
            "C": "To speed up the GPU inference time of the model.",
            "D": "To force the model to behave like an unsupervised K-Means cluster."
        },
        "correct_answer": "B",
        "explanation": "In medical screening, a False Negative (missing a patient who has cancer) is fatal, while a False Positive (calling a healthy patient in for a biopsy) causes mild anxiety but saves lives. Lowering the decision threshold from 0.50 to 0.20 makes the model more aggressive, drastically increasing Recall (Sensitivity).",
        "why_other_options_are_wrong": {
            "A": "Lowering the threshold decreases precision because more negative cases are flagged as positive.",
            "C": "Changing a scalar comparison threshold (`p > 0.20`) has zero effect on GPU execution speed.",
            "D": "Threshold adjustments have no relation to clustering."
        },
        "placement_tip": "High-risk scenarios (Cancer, Fraud): Lower threshold to maximize RECALL (minimize False Negatives)."
    },
    {
        "id": "AI_ML_DL_033",
        "section": "Machine Learning",
        "topic": "Classification",
        "concept": "Scikit-Learn Classification Code",
        "difficulty": "Medium",
        "question_type": "code_or_pseudocode",
        "question": "Consider the following Python snippet using scikit-learn:\n\n```python\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nprobs = model.predict_proba(X_test)\n```\nWhat is the shape and structure of the returned `probs` array if `X_test` contains 100 samples and there are 2 classes (0 and 1)?",
        "options": {
            "A": "A 1D array of length 100 containing boolean True/False values.",
            "B": "A 2D array of shape `(100, 2)` where row `i` contains `[P(class=0), P(class=1)]` summing to 1.0.",
            "C": "A single scalar float representing overall training accuracy.",
            "D": "A 3D tensor of shape `(100, 2, 2)`."
        },
        "correct_answer": "B",
        "explanation": "`predict_proba()` returns a 2D numpy array of shape `(n_samples, n_classes)`. For 100 test samples and binary classification, it returns shape `(100, 2)` where each row contains the predicted probabilities for class 0 and class 1, which sum to 1.0.",
        "why_other_options_are_wrong": {
            "A": "`model.predict()` returns discrete 1D predicted class labels (0 or 1), not `predict_proba()`.",
            "C": "`model.score(X_test, y_test)` returns scalar accuracy, not `predict_proba()`.",
            "D": "Standard scikit-learn tabular classifiers do not return 3D tensors."
        },
        "placement_tip": "`predict_proba()` -> `(n_samples, n_classes)`. `probs[:, 1]` extracts positive class probability for ROC-AUC."
    },
    {
        "id": "AI_ML_DL_034",
        "section": "Machine Learning",
        "topic": "Classification",
        "concept": "Multiclass Strategies (One-vs-Rest)",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "How does the 'One-vs-Rest' (OvR / One-vs-All) strategy enable a purely binary classifier (like basic Logistic Regression or binary SVM) to classify an instance across 5 distinct categories (Cat, Dog, Bird, Fish, Horse)?",
        "options": {
            "A": "It trains 5 separate binary models, where each model evaluates one specific class versus all other four classes combined.",
            "B": "It trains 10 pairwise models comparing every class against every other class.",
            "C": "It averages the ASCII values of the class names.",
            "D": "It randomly picks one of the five classes on each prediction."
        },
        "correct_answer": "A",
        "explanation": "In One-vs-Rest (OvR), for `K` classes, exactly `K` binary classifiers are trained. Classifier 1 learns Cat vs [Not Cat], Classifier 2 learns Dog vs [Not Dog], etc. During prediction, the instance is passed through all `K` models and the class with the highest confidence score is selected.",
        "why_other_options_are_wrong": {
            "B": "Training pairwise models (`K*(K-1)/2 = 10` models) is the One-vs-One (OvO) strategy, not One-vs-Rest.",
            "C": "Machine learning classifiers learn statistical weights, not ASCII character sums.",
            "D": "OvR is deterministic and picks the highest predicted probability."
        },
        "placement_tip": "For K classes: One-vs-Rest (OvR) trains K models. One-vs-One (OvO) trains K*(K-1)/2 models."
    },

    # 4. Decision Trees (4 questions: 035-038)
    {
        "id": "AI_ML_DL_035",
        "section": "Machine Learning",
        "topic": "Decision Trees",
        "concept": "Gini Impurity Calculation",
        "difficulty": "Hard",
        "question_type": "calculation_based",
        "question": "A decision tree node contains 10 data samples: 6 belonging to Class A and 4 belonging to Class B. The formula for Gini Impurity is `Gini = 1 - Σ(p_i^2)`. What is the exact Gini impurity of this node?",
        "options": {
            "A": "0.0",
            "B": "0.48",
            "C": "0.52",
            "D": "1.0"
        },
        "correct_answer": "B",
        "explanation": "Compute class probabilities: `p(A) = 6/10 = 0.6`, `p(B) = 4/10 = 0.4`. Then apply formula: `Gini = 1 - (0.6^2 + 0.4^2) = 1 - (0.36 + 0.16) = 1 - 0.52 = 0.48`.",
        "why_other_options_are_wrong": {
            "A": "0.0 indicates a perfectly pure node (100% of samples belong to one class).",
            "C": "0.52 is `0.6^2 + 0.4^2`, forgetting to subtract from 1.",
            "D": "1.0 is an impossible Gini value for binary classification (maximum binary Gini is 0.50 at a 50/50 split)."
        },
        "placement_tip": "Maximum binary Gini impurity is 0.50 (equal split 50/50). Pure node Gini is 0.0."
    },
    {
        "id": "AI_ML_DL_036",
        "section": "Machine Learning",
        "topic": "Decision Trees",
        "concept": "Information Gain and Entropy",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In the ID3 decision tree algorithm, what is 'Information Gain' and how is it used to choose the best feature to split a node?",
        "options": {
            "A": "Information Gain is the reduction in Entropy achieved by splitting the dataset on a feature; the algorithm chooses the feature with the highest Information Gain.",
            "B": "Information Gain is the execution speed of the CPU during matrix multiplication.",
            "C": "Information Gain is the ratio of training data to testing data.",
            "D": "Information Gain measures how many missing values exist in a column."
        },
        "correct_answer": "A",
        "explanation": "Entropy measures uncertainty or disorder in a dataset. Information Gain is the difference between the parent node's entropy and the weighted average entropy of the child nodes after splitting: `Gain = Entropy(parent) - Entropy(children)`. The decision tree selects the feature that yields the maximum Information Gain.",
        "why_other_options_are_wrong": {
            "B": "Information Gain is an information theory metric, not hardware clock speed.",
            "C": "Dataset split ratio is a preprocessing configuration, completely separate from node purity.",
            "D": "Information Gain assumes complete or imputed data and measures label impurity."
        },
        "placement_tip": "Information Gain = Parent Entropy - Children Entropy. High Information Gain = Cleanest split."
    },
    {
        "id": "AI_ML_DL_037",
        "section": "Machine Learning",
        "topic": "Decision Trees",
        "concept": "Decision Tree Overfitting and Pruning",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "A junior data scientist trains an unconstrained `DecisionTreeClassifier(max_depth=None)` on a training set. The model achieves 100% accuracy on the training data, but drops to 61% accuracy on the test set. Which regularization hyperparameter should be tuned to stop the tree from overfitting?",
        "options": {
            "A": "Set `max_depth` to a smaller value (e.g. 5) and increase `min_samples_split`.",
            "B": "Increase `max_depth` to 1000.",
            "C": "Multiply all input numbers by 100.",
            "D": "Delete the testing set and evaluate only on training data."
        },
        "correct_answer": "A",
        "explanation": "Unconstrained decision trees grow until every leaf is pure, memorizing noise and outlier points (severe overfitting / high variance). Limiting tree complexity via pre-pruning hyperparameters like restricting `max_depth`, increasing `min_samples_split`, or increasing `min_samples_leaf` forces the tree to learn generalizable rules.",
        "why_other_options_are_wrong": {
            "B": "Increasing `max_depth` exacerbates overfitting by allowing deeper memorization.",
            "C": "Decision trees are invariant to monotonic feature scaling; multiplying by 100 has zero effect.",
            "D": "Evaluating only on training data conceals the overfitting without fixing the generalization failure."
        },
        "placement_tip": "To prevent Decision Tree overfitting: Reduce `max_depth`, Increase `min_samples_split` / `min_samples_leaf`."
    },
    {
        "id": "AI_ML_DL_038",
        "section": "Machine Learning",
        "topic": "Decision Trees",
        "concept": "Scale Invariance of Decision Trees",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "Why do Decision Tree algorithms (and tree-based ensembles like Random Forest) NOT require feature scaling (such as StandardScaler or MinMaxScaler)?",
        "options": {
            "A": "Because trees internally convert all numbers into complex numbers.",
            "B": "Because tree splitting evaluates monotonic ordering and individual feature thresholds (`X_i <= threshold`) one feature at a time, making splits invariant to linear or monotonic scale transformations.",
            "C": "Because decision trees only accept binary categorical inputs.",
            "D": "Because decision trees run on GPUs that automatically scale tensors."
        },
        "correct_answer": "B",
        "explanation": "Tree splits operate along orthogonal feature axes: `Feature_A <= 50,000`. If `Feature_A` is divided by 1,000 (rescaled to 50), the split simply occurs at `<= 50`. The ordering of values remains identical, producing the exact same information gain and identical splits. Unlike distance-based models (KNN, SVM), trees are scale-invariant.",
        "why_other_options_are_wrong": {
            "A": "Trees operate on standard real-valued numbers.",
            "C": "Decision trees natively handle continuous numerical features through threshold testing.",
            "D": "Hardware architecture does not alter mathematical scale sensitivity."
        },
        "placement_tip": "Tree models do NOT require feature scaling! Distance models (KNN, SVM, K-Means) and Gradient Descent DO."
    },

    # 5. Random Forest (3 questions: 039-041)
    {
        "id": "AI_ML_DL_039",
        "section": "Machine Learning",
        "topic": "Random Forest",
        "concept": "Bagging and Bootstrap Aggregation",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "What is 'Bootstrap Aggregation' (Bagging) as implemented in the Random Forest algorithm?",
        "options": {
            "A": "Training individual base decision trees on random subsets of training data sampled with replacement, and aggregating their predictions via majority voting or averaging.",
            "B": "Sequentially training trees where each tree corrects the residual errors of the previous tree.",
            "C": "Replacing all decision trees with a single linear regression equation.",
            "D": "Downloading pre-trained weights from the cloud via a bootstrap script."
        },
        "correct_answer": "A",
        "explanation": "Bagging (Bootstrap Aggregation) creates multiple subsets of the training set by sampling `N` instances with replacement (bootstrap sample). An independent decision tree is trained on each sample. During inference, their predictions are aggregated (majority voting for classification, mean averaging for regression) to drastically reduce model variance.",
        "why_other_options_are_wrong": {
            "B": "Sequentially training trees on previous residual errors is Boosting (Gradient Boosting / XGBoost), not Bagging.",
            "C": "Random Forest is an ensemble of many decision trees, not a single linear model.",
            "D": "Bootstrap is a statistical resampling technique, not an internet downloading script."
        },
        "placement_tip": "Bagging = Bootstrap sampling (with replacement) + Aggregation (Voting/Mean). Reduces Variance."
    },
    {
        "id": "AI_ML_DL_040",
        "section": "Machine Learning",
        "topic": "Random Forest",
        "concept": "Feature Randomness in Random Forest",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "How does Random Forest improve upon standard Bagged Decision Trees to ensure individual trees are decorrelated?",
        "options": {
            "A": "By forcing all trees to share the exact same root node.",
            "B": "By considering only a random subset of features (typically `sqrt(total_features)`) at each node split, preventing dominant strong features from creating identical trees.",
            "C": "By training trees on different programming languages.",
            "D": "By deleting 50% of the training rows permanently."
        },
        "correct_answer": "B",
        "explanation": "In standard bagging, if one feature is overwhelmingly predictive, almost all individual trees will choose that same feature for their top split, making the trees correlated. Random Forest injects feature randomness: at each split, the tree selects from a random subset of `m` features (default `sqrt(p)` for classification). This decorrelates the trees, maximizing ensemble variance reduction.",
        "why_other_options_are_wrong": {
            "A": "Sharing the same root node would increase correlation between trees, destroying the ensemble benefit.",
            "C": "Ensemble diversity is statistical and algorithmic, not related to programming syntax.",
            "D": "Rows are sampled with replacement, not permanently erased."
        },
        "placement_tip": "Random Forest = Bagging (random row sampling) + Random feature subspace selection at each split."
    },
    {
        "id": "AI_ML_DL_041",
        "section": "Machine Learning",
        "topic": "Random Forest",
        "concept": "Out-of-Bag (OOB) Score",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "What is the 'Out-of-Bag' (OOB) evaluation score in Random Forest, and why is it useful?",
        "options": {
            "A": "It is the percentage of training memory saved by garbage collection.",
            "B": "Because each bootstrap sample leaves out roughly 36.8% of training samples (the out-of-bag instances), these unseen samples can be used to evaluate the model without needing a separate validation set.",
            "C": "It measures how quickly trees are pruned after training completes.",
            "D": "It calculates the distance between tree leaves."
        },
        "correct_answer": "B",
        "explanation": "When sampling `N` items with replacement, the probability of an item NOT being chosen is `(1 - 1/N)^N ≈ 1/e ≈ 36.8%`. For each tree, ~37% of data is 'out-of-bag'. Evaluating each sample on only the trees that did not train on it yields the OOB score, providing an unbiased validation estimate without setting aside a validation split.",
        "why_other_options_are_wrong": {
            "A": "OOB is an accuracy validation metric, not an OS memory management tool.",
            "C": "Random Forests generally grow trees deep without pruning.",
            "D": "OOB evaluates validation accuracy, not tree leaf distance."
        },
        "placement_tip": "OOB evaluation acts as built-in cross-validation (~36.8% of samples are unseen by each individual tree)."
    },

    # 6. KNN (3 questions: 042-044)
    {
        "id": "AI_ML_DL_042",
        "section": "Machine Learning",
        "topic": "KNN",
        "concept": "Euclidean Distance Calculation",
        "difficulty": "Easy",
        "question_type": "calculation_based",
        "question": "Two data points in a 2-dimensional feature space are `P1 = (2, 3)` and `P2 = (5, 7)`. What is the Euclidean distance between `P1` and `P2`?",
        "options": {
            "A": "7.0",
            "B": "5.0",
            "C": "25.0",
            "D": "3.5"
        },
        "correct_answer": "B",
        "explanation": "Euclidean distance formula: `d = sqrt((x2 - x1)^2 + (y2 - y1)^2)`. Here: `d = sqrt((5 - 2)^2 + (7 - 3)^2) = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5.0`.",
        "why_other_options_are_wrong": {
            "A": "7.0 is the Manhattan distance: `|5-2| + |7-3| = 3 + 4 = 7`.",
            "C": "25.0 is the squared distance before taking the square root.",
            "D": "3.5 is an arithmetic error."
        },
        "placement_tip": "Euclidean distance is the straight-line Pythagorean distance: `sqrt(dx^2 + dy^2)`. (3-4-5 right triangle)."
    },
    {
        "id": "AI_ML_DL_043",
        "section": "Machine Learning",
        "topic": "KNN",
        "concept": "Choice of K and Bias-Variance Tradeoff",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In the K-Nearest Neighbors (KNN) classification algorithm, what is the consequence of choosing an extremely small value of K (e.g. `K = 1`) versus a very large value of K (e.g. `K = N`, total samples)?",
        "options": {
            "A": "`K = 1` leads to High Variance (overfitting, highly sensitive to noise); `K = N` leads to High Bias (underfitting, always predicting the majority class).",
            "B": "`K = 1` always underfits; `K = N` always overfits.",
            "C": "The value of K has zero effect on the decision boundary.",
            "D": "`K = 1` converts the algorithm into Linear Regression."
        },
        "correct_answer": "A",
        "explanation": "At `K = 1`, the decision boundary wraps tightly around every single training sample including noise and outliers, resulting in High Variance (overfitting). As `K` increases, boundaries become smoother. At `K = N`, every neighbor is included, so the model simply outputs the global majority class everywhere (High Bias / underfitting).",
        "why_other_options_are_wrong": {
            "B": "Inverts the relationship: Small K = Overfitting (High Variance); Large K = Underfitting (High Bias).",
            "C": "K directly dictates decision boundary smoothness and model complexity.",
            "D": "KNN remains a non-parametric neighbor algorithm regardless of K."
        },
        "placement_tip": "Small K (K=1) = Overfitting (Complex boundary, High Variance). Large K = Underfitting (Smooth, High Bias)."
    },
    {
        "id": "AI_ML_DL_044",
        "section": "Machine Learning",
        "topic": "KNN",
        "concept": "Why KNN Requires Feature Scaling",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "A developer trains a KNN model on customer data with two features: `Age` (ranging from 18 to 70) and `AnnualIncome` (ranging from $20,000 to $250,000). The developer forgets to scale the features. What catastrophic failure occurs during neighbor distance calculation?",
        "options": {
            "A": "The distance metric will be overwhelmingly dominated by `AnnualIncome` because its numeric scale is thousands of times larger than `Age`, rendering `Age` completely ineffective.",
            "B": "The code will throw a `ZeroDivisionError`.",
            "C": "The KNN model will automatically delete the `Age` column.",
            "D": "KNN will run 1000 times faster."
        },
        "correct_answer": "A",
        "explanation": "KNN computes geometric distance (e.g. Euclidean). A difference of 10 years in age yields `(10)^2 = 100`, while a difference of $5,000 in income yields `(5000)^2 = 25,000,000`. The income feature completely drowns out age simply due to arbitrary measurement units. Feature scaling (e.g. `StandardScaler`) is mandatory for distance-based algorithms.",
        "why_other_options_are_wrong": {
            "B": "Computing distances with large numbers does not cause division by zero.",
            "C": "Scikit-learn algorithms never drop columns autonomously.",
            "D": "Scale differences have no effect on algorithmic time complexity."
        },
        "placement_tip": "MANDATORY RULE: Any distance-based algorithm (KNN, K-Means, SVM) MUST undergo Feature Scaling first!"
    },

    # 7. SVM (3 questions: 045-047)
    {
        "id": "AI_ML_DL_045",
        "section": "Machine Learning",
        "topic": "SVM",
        "concept": "Support Vectors and Maximum Margin",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "What is the primary optimization objective of a linear Support Vector Machine (SVM) classifier, and what are 'Support Vectors'?",
        "options": {
            "A": "To find a decision boundary (hyperplane) that maximizes the geometric margin (separation distance) between the nearest data points of opposing classes; the nearest data points on the margin boundaries are the Support Vectors.",
            "B": "To pass a line through the center of every data point with zero residual variance.",
            "C": "To group data points into 10 clusters using centroid updates.",
            "D": "To calculate the probability that an email is spam using Bayes theorem."
        },
        "correct_answer": "A",
        "explanation": "SVM is a maximum-margin classifier. It searches for the optimal hyperplane that separates classes with the maximum possible margin distance. The critical data points lying right on the edge of the margin gutters are called Support Vectors; if any other data points are moved, the boundary does not change, making SVM robust.",
        "why_other_options_are_wrong": {
            "B": "Passing through every point is interpolation/overfitting, not classification margin maximization.",
            "C": "Centroid updates describe K-Means clustering.",
            "D": "Bayes theorem is the foundation of Naive Bayes, not Support Vector Machines."
        },
        "placement_tip": "SVM maximizes the margin (gutter width). Only the Support Vectors determine the decision boundary!"
    },
    {
        "id": "AI_ML_DL_046",
        "section": "Machine Learning",
        "topic": "SVM",
        "concept": "Kernel Trick",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "In Support Vector Machines, what is the 'Kernel Trick' (e.g. RBF / Polynomial Kernel) and why is it computationally revolutionary?",
        "options": {
            "A": "It maps linearly non-separable input data into a higher-dimensional space where a linear hyperplane can separate the classes, without ever explicitly computing the coordinates in that high-dimensional space.",
            "B": "It replaces floating-point calculations with integer bitshifts.",
            "C": "It removes all outliers automatically before fitting.",
            "D": "It converts the SVM into a deep convolutional neural network."
        },
        "correct_answer": "A",
        "explanation": "If data is not linearly separable in 2D, mapping it to a higher dimension (e.g. 3D or infinite-D) can make it linearly separable. Computing high-dimensional coordinates is computationally prohibitive. The 'Kernel Trick' uses a kernel function `K(x, z)` that computes the dot product in high-dimensional space directly using low-dimensional inputs, avoiding expensive coordinate transformations.",
        "why_other_options_are_wrong": {
            "B": "Kernel methods use dot products and exponentials, not integer bitshifts.",
            "C": "Kernels do not remove outliers; soft-margin SVM handles outliers via hyperparameter `C`.",
            "D": "SVM with kernels remains a convex optimization problem, completely distinct from CNNs."
        },
        "placement_tip": "Kernel Trick computes inner products in high-dimensional feature space WITHOUT explicitly transforming data."
    },
    {
        "id": "AI_ML_DL_047",
        "section": "Machine Learning",
        "topic": "SVM",
        "concept": "SVM Hyperparameter C",
        "difficulty": "Hard",
        "question_type": "scenario_based",
        "question": "In scikit-learn's `SVC(C=...)`, what is the effect of setting a very large value of `C` versus a small value of `C`?",
        "options": {
            "A": "Large `C` heavily penalizes misclassifications, leading to a narrower margin and potential overfitting; Small `C` tolerates more margin violations, yielding a wider margin and higher bias.",
            "B": "Large `C` forces the model to ignore all features; Small `C` creates 100 clusters.",
            "C": "Large `C` speeds up training time by 90%.",
            "D": "The `C` parameter has zero effect on the margin width."
        },
        "correct_answer": "A",
        "explanation": "In soft-margin SVM, `C` is the regularization hyperparameter controlling the trade-off between margin width and classification errors. Large `C` assigns a severe penalty to margin violations, forcing a hard, narrow margin (risk of Overfitting / High Variance). Small `C` allows more slack/violations, creating a wider, softer margin (risk of Underfitting / High Bias).",
        "why_other_options_are_wrong": {
            "B": "`C` does not drop features or create clusters.",
            "C": "Large `C` often increases optimization convergence time because the solver must satisfy stricter constraints.",
            "D": "`C` is the primary hyperparameter governing margin slackness."
        },
        "placement_tip": "Large C = Strict penalty, Narrow margin, Overfitting risk. Small C = Soft penalty, Wide margin, Underfitting risk."
    },

    # 8. Clustering (3 questions: 048-050)
    {
        "id": "AI_ML_DL_048",
        "section": "Machine Learning",
        "topic": "Clustering",
        "concept": "K-Means Algorithm Steps",
        "difficulty": "Medium",
        "question_type": "workflow_based",
        "question": "What is the correct iterative sequence of steps executed by the standard K-Means clustering algorithm after initial centroid initialization?",
        "options": {
            "A": "1. Assign each data point to its closest centroid -> 2. Recompute centroids as the mean of all points assigned to that cluster -> 3. Repeat until centroids stop moving (convergence).",
            "B": "1. Compute gradients -> 2. Update weights via backpropagation -> 3. Evaluate Cross-Entropy loss.",
            "C": "1. Split nodes by Gini impurity -> 2. Prune leaves -> 3. Calculate Information Gain.",
            "D": "1. Measure correlation matrix -> 2. Invert covariance matrix -> 3. Drop negative eigenvalues."
        },
        "correct_answer": "A",
        "explanation": "K-Means (Lloyd's algorithm) alternates between two steps: 1. Assignment step: every data point is assigned to its nearest centroid based on Euclidean distance, and 2. Update step: the centroid positions are recalculated as the geometric mean (average coordinates) of all points currently assigned to that cluster. This repeats until convergence.",
        "why_other_options_are_wrong": {
            "B": "Backpropagation and cross-entropy belong to neural network training.",
            "C": "Gini impurity and pruning belong to decision trees.",
            "D": "Covariance inversion and eigenvalues belong to Principal Component Analysis (PCA)."
        },
        "placement_tip": "K-Means = Assignment (to nearest centroid) -> Update (centroid = mean of cluster points) -> Repeat."
    },
    {
        "id": "AI_ML_DL_049",
        "section": "Machine Learning",
        "topic": "Clustering",
        "concept": "Elbow Method and Inertia",
        "difficulty": "Medium",
        "question_type": "application_based",
        "question": "How does a data scientist use the 'Elbow Method' to select the optimal number of clusters (K) in K-Means clustering?",
        "options": {
            "A": "By plotting K against Within-Cluster Sum of Squares (Inertia) and selecting the 'elbow' point where the rate of decrease abruptly bends and levels off.",
            "B": "By choosing the K value where training accuracy reaches 100%.",
            "C": "By selecting K equal to the number of columns in the dataset.",
            "D": "By running random forest on the clusters until the loss reaches zero."
        },
        "correct_answer": "A",
        "explanation": "Inertia (Within-Cluster Sum of Squares) measures how tightly packed clusters are. As K increases, inertia naturally decreases (reaching 0 when K = N). The Elbow Method plots Inertia vs K; the optimal K is the 'elbow' point where adding more clusters yields diminishing returns in inertia reduction.",
        "why_other_options_are_wrong": {
            "B": "K-Means is unsupervised; there are no ground-truth target labels to compute 'accuracy'.",
            "C": "Cluster count depends on data density and business needs, not the number of feature columns.",
            "D": "Random forest is a supervised algorithm, not used to determine K-Means cluster counts."
        },
        "placement_tip": "Elbow Method: Plot Inertia (WCSS) vs K. Choose the inflection point ('elbow') where decrease slows down."
    },
    {
        "id": "AI_ML_DL_050",
        "section": "Machine Learning",
        "topic": "Clustering",
        "concept": "K-Means Weaknesses",
        "difficulty": "Hard",
        "question_type": "scenario_based",
        "question": "A data science team attempts to use K-Means to cluster geospatial delivery points that form concentric rings and irregular crescent-moon shapes. The K-Means algorithm fails completely. What fundamental assumption of K-Means causes this failure?",
        "options": {
            "A": "K-Means assumes clusters are spherical, convex, and of isotropic variance, making it incapable of discovering arbitrary non-globular or entangled shapes.",
            "B": "K-Means cannot run on floating-point numbers.",
            "C": "K-Means requires all data points to have negative coordinates.",
            "D": "K-Means can only handle exactly two clusters."
        },
        "correct_answer": "A",
        "explanation": "K-Means assigns points strictly based on Euclidean distance to nearest centroid, which creates linear Voronoi cell boundaries. Consequently, K-Means inherently assumes clusters are spherical/convex blobs. For non-globular shapes (concentric rings, spirals, crescents), density-based algorithms like DBSCAN or Spectral Clustering must be used.",
        "why_other_options_are_wrong": {
            "B": "K-Means is designed specifically for continuous real-valued floating-point features.",
            "C": "K-Means works on arbitrary coordinate ranges (positive and negative).",
            "D": "K-Means can be configured for any number of clusters `K >= 1`."
        },
        "placement_tip": "K-Means assumes spherical/convex clusters. For non-linear, irregular, or crescent shapes -> Use DBSCAN!"
    }
]

print(f"ML Part 1 generated with {len(ml_questions)} questions.")
