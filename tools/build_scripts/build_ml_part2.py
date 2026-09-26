# build_ml_part2.py - Questions AI_ML_DL_051 to AI_ML_DL_070 (Machine Learning Part 2 - 20 questions)

ml_questions_part2 = [
    # 9. Dimensionality Reduction (2 questions: 051-052)
    {
        "id": "AI_ML_DL_051",
        "section": "Machine Learning",
        "topic": "Dimensionality Reduction",
        "concept": "Principal Component Analysis (PCA)",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "What is the primary objective of Principal Component Analysis (PCA), and how are the principal components oriented relative to one another?",
        "options": {
            "A": "PCA finds orthogonal (mutually perpendicular) axes that maximize the variance of projected data, with the first component capturing the largest possible variance.",
            "B": "PCA groups data points into clusters by minimizing Euclidean distances to centroids.",
            "C": "PCA removes rows with missing values and converts text to uppercase.",
            "D": "PCA randomly deletes 50% of the columns to speed up training."
        },
        "correct_answer": "A",
        "explanation": "PCA is an unsupervised linear transformation technique. It finds orthogonal axes (eigenvectors of the covariance matrix) where the first principal component aligns with the direction of maximum variance, the second component captures the highest remaining orthogonal variance, and so on, eliminating feature collinearity.",
        "why_other_options_are_wrong": {
            "B": "Centroid distance minimization describes K-Means clustering, not PCA.",
            "C": "PCA is a linear algebraic projection technique, not a text cleaner or row-dropping utility.",
            "D": "PCA transforms features into linear combinations rather than arbitrarily discarding raw columns."
        },
        "placement_tip": "PCA = Orthogonal transformation maximizing variance. Components are mutually uncorrelated (r = 0)."
    },
    {
        "id": "AI_ML_DL_052",
        "section": "Machine Learning",
        "topic": "Dimensionality Reduction",
        "concept": "Explained Variance Ratio in PCA",
        "difficulty": "Hard",
        "question_type": "code_or_pseudocode",
        "question": "A data scientist fits PCA on a 100-feature dataset in scikit-learn:\n\n```python\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=3)\npca.fit(X_scaled)\nprint(pca.explained_variance_ratio_)\n# Output: [0.55, 0.25, 0.10]\n```\nWhat percentage of the dataset's total variance is retained by projecting the data down to these 3 principal components?",
        "options": {
            "A": "10%",
            "B": "90%",
            "C": "55%",
            "D": "3%"
        },
        "correct_answer": "B",
        "explanation": "The cumulative explained variance is the sum of the individual ratios: `0.55 + 0.25 + 0.10 = 0.90` (or 90%). This means projecting the 100 dimensions down to just 3 principal components preserves 90% of the original dataset's informational variance.",
        "why_other_options_are_wrong": {
            "A": "10% is only the variance of the third individual component.",
            "C": "55% is only the variance captured by the first component.",
            "D": "3% is confusing the component count (3) with a variance percentage."
        },
        "placement_tip": "Cumulative explained variance = Sum of `explained_variance_ratio_`. Used to pick `n_components` (e.g. retain >= 95%)."
    },

    # 10. Model Evaluation (5 questions: 053-057)
    {
        "id": "AI_ML_DL_053",
        "section": "Machine Learning",
        "topic": "Model Evaluation",
        "concept": "Accuracy Paradox in Imbalanced Data",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "A credit card transaction dataset contains 99,000 legitimate transactions and 1,000 fraudulent transactions (1% fraud). A naive 'dummy' classifier simply predicts 'Legitimate' for every single transaction. What is the accuracy of this useless model, and why is accuracy an inappropriate metric here?",
        "options": {
            "A": "Accuracy is 50%; accuracy is fine because it divides correct predictions by total predictions.",
            "B": "Accuracy is 99%; accuracy is dangerously misleading for imbalanced data because a model that detects zero frauds still achieves 99% accuracy.",
            "C": "Accuracy is 1%; the model fails completely.",
            "D": "Accuracy cannot be calculated when fraud exists."
        },
        "correct_answer": "B",
        "explanation": "Because 99,000 out of 100,000 samples are legitimate, predicting legitimate for all records yields `99,000 / 100,000 = 99.0%` accuracy. However, its Recall for fraud is 0.0%, meaning every single fraud is missed. In severe class imbalance, accuracy is meaningless; Precision, Recall, PR-AUC, and F1-Score must be used.",
        "why_other_options_are_wrong": {
            "A": "The model correctly classifies all 99,000 legitimate transactions, so accuracy is 99%, not 50%.",
            "C": "1% is the error rate (1,000 missed frauds), not the overall accuracy.",
            "D": "Accuracy is mathematically well-defined on all confusion matrices (`(TP + TN) / Total`)."
        },
        "placement_tip": "The Accuracy Paradox: Highly imbalanced data yields 99% accuracy while solving 0% of the actual business problem."
    },
    {
        "id": "AI_ML_DL_054",
        "section": "Machine Learning",
        "topic": "Model Evaluation",
        "concept": "Precision vs Recall Calculation",
        "difficulty": "Medium",
        "question_type": "calculation_based",
        "question": "A binary spam filter classification confusion matrix shows:\n- True Positives (TP) = 80 (Spam correctly flagged)\n- False Positives (FP) = 20 (Legitimate emails falsely marked as spam)\n- False Negatives (FN) = 20 (Spam emails missed)\n- True Negatives (TN) = 880 (Legitimate emails correctly allowed)\n\nWhat is the Precision of this model?",
        "options": {
            "A": "0.80 (80%)",
            "B": "0.88 (88%)",
            "C": "0.50 (50%)",
            "D": "0.96 (96%)"
        },
        "correct_answer": "A",
        "explanation": "Precision formula: `Precision = TP / (TP + FP)`. Here: `Precision = 80 / (80 + 20) = 80 / 100 = 0.80` (80%). Out of all emails the model flagged as spam, 80% were actually spam.",
        "why_other_options_are_wrong": {
            "B": "0.88 is `TN / (TN + FP) = 880 / 1000` (Specificity).",
            "C": "0.50 is an arithmetic error.",
            "D": "0.96 is overall accuracy: `(80 + 880) / 1000 = 960 / 1000 = 0.96`."
        },
        "placement_tip": "Precision = `TP / (TP + FP)` (Quality of positive predictions). Recall = `TP / (TP + FN)` (Quantity of actual positives caught)."
    },
    {
        "id": "AI_ML_DL_055",
        "section": "Machine Learning",
        "topic": "Model Evaluation",
        "concept": "F1-Score Harmonic Mean",
        "difficulty": "Medium",
        "question_type": "calculation_based",
        "question": "A fraud detection model achieves a Precision of 0.60 and a Recall of 0.60. What is its F1-Score, computed using the harmonic mean formula `F1 = 2 * (Precision * Recall) / (Precision + Recall)`?",
        "options": {
            "A": "0.36",
            "B": "0.60",
            "C": "1.20",
            "D": "0.0"
        },
        "correct_answer": "B",
        "explanation": "When Precision equals Recall, their harmonic mean equals that same value: `F1 = 2 * (0.60 * 0.60) / (0.60 + 0.60) = 2 * (0.36) / 1.20 = 0.72 / 1.20 = 0.60`.",
        "why_other_options_are_wrong": {
            "A": "0.36 is `Precision * Recall`, missing the rest of the formula.",
            "C": "1.20 is `Precision + Recall`.",
            "D": "F1 is zero only when either Precision or Recall is zero."
        },
        "placement_tip": "F1-Score is the harmonic mean of Precision and Recall. It penalizes extreme imbalances between the two metrics."
    },
    {
        "id": "AI_ML_DL_056",
        "section": "Machine Learning",
        "topic": "Model Evaluation",
        "concept": "ROC-AUC Curve Interpretation",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "What does the Area Under the Receiver Operating Characteristic Curve (ROC-AUC score) quantify for a binary classifier across all possible classification thresholds?",
        "options": {
            "A": "The training loss of a neural network after 100 epochs.",
            "B": "The probability that the classifier will rank a randomly chosen positive instance higher than a randomly chosen negative instance.",
            "C": "The percentage of features that have zero correlation with the target.",
            "D": "The ratio of decision trees to support vectors."
        },
        "correct_answer": "B",
        "explanation": "The ROC curve plots True Positive Rate (Recall) vs False Positive Rate (1 - Specificity) across all decision thresholds. The Area Under the Curve (AUC) is equal to the probability that the model evaluates a randomly selected positive sample with a higher predicted probability than a randomly selected negative sample. A random coin-flip classifier has AUC = 0.5; a perfect classifier has AUC = 1.0.",
        "why_other_options_are_wrong": {
            "A": "ROC-AUC is an evaluation metric independent of training loss functions.",
            "C": "Feature correlation is measured by Pearson/Spearman coefficients, not ROC-AUC.",
            "D": "ROC-AUC is a model-agnostic classification ranking metric."
        },
        "placement_tip": "ROC-AUC: 0.5 = Random Guessing; 1.0 = Perfect Ranking. Threshold-independent ranking capability."
    },
    {
        "id": "AI_ML_DL_057",
        "section": "Machine Learning",
        "topic": "Model Evaluation",
        "concept": "Scikit-Learn Confusion Matrix Code",
        "difficulty": "Hard",
        "question_type": "code_or_pseudocode",
        "question": "In scikit-learn, what is the default arrangement of cells in the 2D array returned by `confusion_matrix(y_true, y_pred)` for binary classification (labels 0 and 1)?",
        "options": {
            "A": "`[[True Negatives, False Positives], [False Negatives, True Positives]]`",
            "B": "`[[True Positives, False Negatives], [False Positives, True Negatives]]`",
            "C": "`[[True Positives, True Negatives], [False Positives, False Negatives]]`",
            "D": "`[[Accuracy, Precision], [Recall, F1]]`"
        },
        "correct_answer": "A",
        "explanation": "In scikit-learn, `confusion_matrix(y_true, y_pred)` puts True labels on rows and Predicted labels on columns. By default (class 0 = negative, class 1 = positive): row 0 is actual negatives `[TN, FP]` and row 1 is actual positives `[FN, TP]`. Top-left is TN, bottom-right is TP.",
        "why_other_options_are_wrong": {
            "B": "This is a common medical textbook convention, but scikit-learn standard format places TN in `[0, 0]` and TP in `[1, 1]`.",
            "C": "Confusion matrices place predictions on columns and truth on rows, not grouping true counts on top.",
            "D": "A confusion matrix reports raw sample counts, not aggregated summary ratios."
        },
        "placement_tip": "Scikit-Learn Confusion Matrix format: `[[TN, FP], [FN, TP]]`. Top-left = TN, Bottom-right = TP."
    },

    # 11. Overfitting and Underfitting (2 questions: 058-059)
    {
        "id": "AI_ML_DL_058",
        "section": "Machine Learning",
        "topic": "Overfitting and Underfitting",
        "concept": "Bias-Variance Tradeoff",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In machine learning statistical learning theory, what is the 'Bias-Variance Tradeoff'?",
        "options": {
            "A": "High Bias causes Underfitting (model makes overly simplistic assumptions, performing poorly on both train and test data); High Variance causes Overfitting (model memorizes training noise, performing great on train but poorly on test).",
            "B": "Bias measures GPU memory; Variance measures CPU clock speed.",
            "C": "High Bias means the model is too complex, while High Variance means the model is too simple.",
            "D": "Bias and Variance always decrease simultaneously when model complexity increases."
        },
        "correct_answer": "A",
        "explanation": "Bias is error due to overly simplistic assumptions (underfitting, e.g. fitting a straight line to quadratic data). Variance is error due to excessive sensitivity to small fluctuations in training data (overfitting, e.g. a degree-20 polynomial). As model complexity increases, bias decreases while variance increases.",
        "why_other_options_are_wrong": {
            "B": "Bias and variance are mathematical statistical error components, not hardware metrics.",
            "C": "Inverts the definitions: High Bias = Too Simple (Underfitting); High Variance = Too Complex (Overfitting).",
            "D": "They act in opposition: increasing complexity lowers bias but raises variance."
        },
        "placement_tip": "High Bias = Underfitting (Oversimplified). High Variance = Overfitting (Memorizing noise)."
    },
    {
        "id": "AI_ML_DL_059",
        "section": "Machine Learning",
        "topic": "Overfitting and Underfitting",
        "concept": "Diagnosing Learning Curves",
        "difficulty": "Hard",
        "question_type": "debugging_or_troubleshooting",
        "question": "A machine learning engineer plots the learning curves (Loss vs Epochs / Training Size) for a deep neural network. The training loss continues dropping close to 0.0, but the validation loss stops improving and begins steadily climbing upward after epoch 15. What is happening, and how should it be resolved?",
        "options": {
            "A": "The model is underfitting; increase the learning rate and remove all regularization.",
            "B": "The model has begun Overfitting after epoch 15; apply Early Stopping at epoch 15, add Dropout/L2 regularization, or gather more training data.",
            "C": "The GPU has run out of VRAM.",
            "D": "The dataset has zero categorical features."
        },
        "correct_answer": "B",
        "explanation": "When training loss keeps falling while validation loss diverges and increases, the model has exhausted generalizable patterns and has begun memorizing idiosyncratic noise in the training set (Overfitting). Early stopping terminates training right at the minimum of validation loss before divergence occurs.",
        "why_other_options_are_wrong": {
            "A": "Underfitting occurs when both training and validation losses remain unacceptably high and fail to decrease.",
            "C": "VRAM exhaustion crashes the process with an explicit CUDA OOM error, rather than producing smooth diverging loss plots.",
            "D": "Categorical feature presence has no bearing on validation loss curve divergence."
        },
        "placement_tip": "Diverging curves (Train loss down, Val loss up) = OVERFITTING! Fix with Early Stopping, Regularization, or Dropout."
    },

    # 12. Data Preprocessing (4 questions: 060-063)
    {
        "id": "AI_ML_DL_060",
        "section": "Machine Learning",
        "topic": "Data Preprocessing",
        "concept": "StandardScaler vs MinMaxScaler",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "What is the mathematical difference between `StandardScaler` (Z-score standardization) and `MinMaxScaler` in scikit-learn?",
        "options": {
            "A": "`StandardScaler` transforms features to have Mean = 0 and Standard Deviation = 1 (`z = (x - μ) / σ`); `MinMaxScaler` scales features into a fixed bounded range, typically `[0, 1]` (`x_norm = (x - min) / (max - min)`).",
            "B": "`StandardScaler` only works on text; `MinMaxScaler` only works on dates.",
            "C": "`MinMaxScaler` handles extreme outliers without distortion, whereas `StandardScaler` crashes on outliers.",
            "D": "`StandardScaler` rounds all numbers to binary integers 0 and 1."
        },
        "correct_answer": "A",
        "explanation": "`StandardScaler` standardizes by centering at mean 0 with unit variance, leaving the range unbounded. `MinMaxScaler` compresses the data into a bounded range (default `[0, 1]`). If extreme outliers exist, `MinMaxScaler` compresses the inlier data into a tiny squished sub-range, making `StandardScaler` (or `RobustScaler`) preferable.",
        "why_other_options_are_wrong": {
            "B": "Both scalers operate strictly on continuous numerical arrays.",
            "C": "Inversion: `MinMaxScaler` is highly vulnerable to outliers because extreme min/max values squish all normal points.",
            "D": "StandardScaler outputs continuous real numbers (positive and negative z-scores)."
        },
        "placement_tip": "StandardScaler: Mean=0, Std=1 (unbounded). MinMaxScaler: Bounded in [0, 1] (sensitive to outliers)."
    },
    {
        "id": "AI_ML_DL_061",
        "section": "Machine Learning",
        "topic": "Data Preprocessing",
        "concept": "One-Hot Encoding vs Label Encoding",
        "difficulty": "Medium",
        "question_type": "scenario_based",
        "question": "A dataset contains an unordered categorical column `City` with values `['Tokyo', 'Paris', 'New York']`. A junior developer applies `LabelEncoder`, assigning `Tokyo = 1, Paris = 2, New York = 3`, and feeds it into a Linear Regression model. What erroneous assumption does this inject into the model?",
        "options": {
            "A": "The linear model will interpret a false mathematical ordering and distance, falsely assuming `New York (3)` is three times the magnitude of `Tokyo (1)` and that `Paris` is halfway between them.",
            "B": "The model will crash with a memory segmentation fault.",
            "C": "The linear regression will automatically convert into a Decision Tree.",
            "D": "Label encoding is the only legal way to handle nominal variables in scikit-learn."
        },
        "correct_answer": "A",
        "explanation": "Nominal categorical variables have no intrinsic ranking. Assigning arbitrary integers (1, 2, 3) induces a false numerical ordering that linear, distance-based, and neural models will treat as scalar magnitudes (`3 > 2 > 1`). Unordered nominal features must be One-Hot Encoded (creating binary indicator columns). Label Encoding is strictly reserved for ordinal variables (`Low=1, Med=2, High=3`) or target labels `y`.",
        "why_other_options_are_wrong": {
            "B": "The code runs without syntax error, producing mathematically flawed predictions silently.",
            "C": "Linear models do not transform into decision trees.",
            "D": "One-Hot Encoding (`pd.get_dummies` or `OneHotEncoder`) is the standard practice for nominal features."
        },
        "placement_tip": "Unordered nominal categories -> ONE-HOT ENCODING. Ordered categories (S, M, L) -> ORDINAL/LABEL ENCODING."
    },
    {
        "id": "AI_ML_DL_062",
        "section": "Machine Learning",
        "topic": "Data Preprocessing",
        "concept": "Dummy Variable Trap",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "When one-hot encoding a categorical feature with `k` distinct categories for a Linear or Logistic Regression model with an intercept, why must one category be dropped (`drop_first=True` / `k-1` dummy variables)?",
        "options": {
            "A": "To prevent the Dummy Variable Trap (perfect multicollinearity), where the `k` indicator columns sum to 1.0, creating a linear dependency with the constant intercept term.",
            "B": "To reduce disk space by 90%.",
            "C": "Because Python arrays cannot hold more than 3 columns.",
            "D": "To force the model to predict the dropped category 0% of the time."
        },
        "correct_answer": "A",
        "explanation": "If a feature has 3 categories (e.g. Red, Green, Blue) and all 3 are one-hot encoded: `Red + Green + Blue = 1`. In linear regression, the constant intercept column also equals 1. This creates an exact linear combination (perfect multicollinearity), making the `(X^T X)` matrix singular and non-invertible. Dropping one baseline category (`k-1`) resolves the dependency.",
        "why_other_options_are_wrong": {
            "B": "Dropping one column out of dozens yields negligible disk savings.",
            "C": "Python and numpy arrays easily hold millions of columns.",
            "D": "The dropped category serves as the baseline comparison reference when all other indicators are 0."
        },
        "placement_tip": "Dummy Variable Trap: Always use `k-1` dummies in linear models with an intercept to prevent singular matrix errors."
    },
    {
        "id": "AI_ML_DL_063",
        "section": "Machine Learning",
        "topic": "Data Preprocessing",
        "concept": "Outlier Detection with IQR",
        "difficulty": "Hard",
        "question_type": "calculation_based",
        "question": "A feature has a 25th percentile (Q1) of 20 and a 75th percentile (Q3) of 50. Using Tukey's Interquartile Range (IQR) rule, what is the lower boundary threshold below which any data point is mathematically classified as an outlier?",
        "options": {
            "A": "-25",
            "B": "5",
            "C": "30",
            "D": "0"
        },
        "correct_answer": "A",
        "explanation": "Step 1: Calculate IQR: `IQR = Q3 - Q1 = 50 - 20 = 30`. Step 2: Compute lower outlier bound: `Lower = Q1 - (1.5 * IQR) = 20 - (1.5 * 30) = 20 - 45 = -25`. Any data value below -25 is flagged as an outlier.",
        "why_other_options_are_wrong": {
            "B": "5 is `20 - (0.5 * 30)`.",
            "C": "30 is the IQR itself (`Q3 - Q1`).",
            "D": "0 is arbitrary zero clipping."
        },
        "placement_tip": "Tukey's IQR Outlier Formula: `Lower = Q1 - 1.5*IQR`, `Upper = Q3 + 1.5*IQR`. Used in standard box plots."
    },

    # 13. Train-Test and Validation (3 questions: 064-066)
    {
        "id": "AI_ML_DL_064",
        "section": "Machine Learning",
        "topic": "Train-Test and Validation",
        "concept": "Data Leakage",
        "difficulty": "Hard",
        "question_type": "debugging_or_troubleshooting",
        "question": "Look at the following Python data preparation pipeline:\n\n```python\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X) # Fitting on full dataset\nX_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2)\n```\nWhat critical methodological error (data leakage) was committed here?",
        "options": {
            "A": "`StandardScaler` was fitted on the entire dataset `X` prior to splitting, leaking the global mean and standard deviation of the test set into the training set.",
            "B": "`test_size=0.2` is an illegal parameter in scikit-learn.",
            "C": "The code will fail with an indentation error.",
            "D": "`X` must be converted to binary strings before scaling."
        },
        "correct_answer": "A",
        "explanation": "This is a classic Data Leakage bug. Fitting transformers (scalers, encoders, imputers) on the whole dataset before splitting allows information from the test set (its mean and variance) to contaminate the training space. The correct workflow is: split first, then `scaler.fit_transform(X_train)`, and finally `scaler.transform(X_test)`.",
        "why_other_options_are_wrong": {
            "B": "`test_size=0.2` (80/20 train/test split) is the most standard valid configuration.",
            "C": "The syntax is valid Python and will run without runtime exception, silently corrupting the validation integrity.",
            "D": "StandardScaler expects real numerical arrays, never binary strings."
        },
        "placement_tip": "DATA LEAKAGE TRAP: NEVER fit scalers on full data! Always split first: `fit_transform` on train, `transform` on test."
    },
    {
        "id": "AI_ML_DL_065",
        "section": "Machine Learning",
        "topic": "Train-Test and Validation",
        "concept": "Stratified K-Fold Cross-Validation",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "Why is `StratifiedKFold` strongly preferred over standard `KFold` cross-validation when evaluating models on imbalanced classification datasets?",
        "options": {
            "A": "`StratifiedKFold` ensures that each fold contains roughly the same percentage of each target class as the complete original dataset.",
            "B": "`StratifiedKFold` removes all negative classes to speed up training.",
            "C": "`StratifiedKFold` creates 100 times more data rows through duplication.",
            "D": "`StratifiedKFold` converts decision trees into neural networks."
        },
        "correct_answer": "A",
        "explanation": "In standard random K-Fold, a rare class (e.g. 1% fraud) might randomly receive zero fraud cases in a specific fold, making validation in that fold impossible or wildly biased. Stratified K-Fold preserves the exact class percentage across every single fold (e.g. 1% fraud in every fold).",
        "why_other_options_are_wrong": {
            "B": "Removing negative classes destroys the classification problem definition.",
            "C": "Stratification splits existing indices; it does not synthesize or duplicate rows.",
            "D": "Splitting strategies are model-agnostic and do not alter model architectures."
        },
        "placement_tip": "Classification with imbalanced targets -> Always use STRATIFIED K-Fold cross-validation!"
    },
    {
        "id": "AI_ML_DL_066",
        "section": "Machine Learning",
        "topic": "Train-Test and Validation",
        "concept": "Train vs Validation vs Test Sets",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "Why is it vital in enterprise machine learning to maintain three distinct data splits—Training Set, Validation Set, and Test Set—rather than just Train and Test?",
        "options": {
            "A": "Training set learns model weights; Validation set tunes hyperparameters and guides architecture choices; Test set provides an unbiased final evaluation of generalization on untouched data.",
            "B": "The Test set is used to compute training gradients.",
            "C": "The Validation set is where data is permanently deleted.",
            "D": "Three sets are mandatory because Python cannot divide numbers by two."
        },
        "correct_answer": "A",
        "explanation": "If a data scientist repeatedly evaluates model hyperparameters (like tree depth or learning rate) on the test set, information leaks into their tuning choices, causing 'overfitting to the test set'. The Validation set is used for iterative tuning and model selection. The Test set remains strictly locked until the final model is chosen to assess real-world generalization.",
        "why_other_options_are_wrong": {
            "B": "Gradients are computed strictly on the Training set.",
            "C": "Validation data is active evaluation data, not deleted data.",
            "D": "Data splitting proportions are design choices, not mathematical limitations."
        },
        "placement_tip": "Train = Fit weights; Validation = Tune hyperparameters; Test = Unbiased final exam."
    },

    # 14. Feature Engineering (2 questions: 067-068)
    {
        "id": "AI_ML_DL_067",
        "section": "Machine Learning",
        "topic": "Feature Engineering",
        "concept": "Feature Selection vs Feature Extraction",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "What is the primary difference between Feature Selection and Feature Extraction?",
        "options": {
            "A": "Feature Selection selects a subset of the original features without altering them; Feature Extraction transforms the data into new, lower-dimensional composite features (e.g. PCA, autoencoders).",
            "B": "Feature Selection creates non-linear polynomials; Feature Extraction deletes rows.",
            "C": "Feature Selection only works on audio files; Feature Extraction is for video.",
            "D": "Feature Selection requires GPUs; Feature Extraction runs on paper."
        },
        "correct_answer": "A",
        "explanation": "Feature Selection filters the original feature set (e.g. SelectKBest, recursive feature elimination), keeping original column names and interpretability. Feature Extraction projects original features into a new coordinate space, creating transformed composite features (e.g. Principal Components), which reduces dimensionality but loses direct original interpretability.",
        "why_other_options_are_wrong": {
            "B": "Polynomial expansion is feature generation, not selection.",
            "C": "Both techniques are universally applied across tabular, text, image, and audio domains.",
            "D": "Both are mathematical algorithms executable on standard CPUs."
        },
        "placement_tip": "Feature Selection = Pick best existing columns. Feature Extraction = Create new transformed composite columns."
    },
    {
        "id": "AI_ML_DL_068",
        "section": "Machine Learning",
        "topic": "Feature Engineering",
        "concept": "Domain-Specific Feature Engineering",
        "difficulty": "Hard",
        "question_type": "application_based",
        "question": "In a taxi fare prediction problem, the raw dataset contains a timestamp column: `pickup_datetime = '2026-10-15 18:30:00'`. Feeding this raw string directly into a machine learning model will fail. Which engineered features would extract maximum predictive value for fare pricing?",
        "options": {
            "A": "Extract `HourOfDay` (peak rush hour), `DayOfWeek` (weekday vs weekend), and a binary `IsHoliday` flag.",
            "B": "Compute the MD5 hash of the string and treat it as a continuous float.",
            "C": "Delete the timestamp column because time has no correlation with traffic or fares.",
            "D": "Convert each character in the timestamp into its Unicode integer value and sum them."
        },
        "correct_answer": "A",
        "explanation": "Timestamps carry rich cyclical and human behavioral patterns. Extracting discrete domain features like Hour of Day (rush hour surge pricing), Day of Week (weekend vs weekday travel), and Holiday indicators allows linear, tree, and neural models to capture real pricing dynamics directly.",
        "why_other_options_are_wrong": {
            "B": "MD5 hashes destroy cyclical time relationships and produce arbitrary chaotic pseudorandom numbers.",
            "C": "Time of day is one of the single most influential factors in traffic congestion and fare surging.",
            "D": "Summing Unicode values produces nonsensical garbage features."
        },
        "placement_tip": "Datetime feature engineering: Decompose into Hour, DayOfWeek, Month, IsWeekend, and IsHoliday."
    },

    # 15. Ensemble Learning (2 questions: 069-070)
    {
        "id": "AI_ML_DL_069",
        "section": "Machine Learning",
        "topic": "Ensemble Learning",
        "concept": "Bagging vs Boosting",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "What is the core architectural difference in model training between Bagging (e.g. Random Forest) and Boosting (e.g. AdaBoost, Gradient Boosting, XGBoost)?",
        "options": {
            "A": "Bagging trains base models independently in parallel; Boosting trains base models sequentially, where each new model is trained to correct the errors/residuals of the previous models.",
            "B": "Bagging requires internet access, whereas Boosting runs completely offline.",
            "C": "Boosting uses majority voting; Bagging only works on text files.",
            "D": "Bagging increases bias, while Boosting increases variance."
        },
        "correct_answer": "A",
        "explanation": "In Bagging (Bootstrap Aggregation), base learners are trained in parallel on independent bootstrap samples to reduce model variance. In Boosting, weak base learners (e.g. shallow decision trees) are trained sequentially in a chain, where each subsequent learner focuses specifically on instances misclassified by earlier learners (reducing model bias).",
        "why_other_options_are_wrong": {
            "B": "Both ensemble methods are pure mathematical algorithms operating offline on local machines.",
            "C": "Bagging uses majority voting/averaging; Boosting computes weighted additive combinations.",
            "D": "Inversion: Bagging primarily reduces Variance (prevents overfitting); Boosting primarily reduces Bias."
        },
        "placement_tip": "Bagging = Parallel base learners (Reduces Variance). Boosting = Sequential error-correcting learners (Reduces Bias)."
    },
    {
        "id": "AI_ML_DL_070",
        "section": "Machine Learning",
        "topic": "Ensemble Learning",
        "concept": "XGBoost Optimizations",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "Why has Extreme Gradient Boosting (XGBoost) become the dominant competitive algorithm for structured tabular data in industry and Kaggle competitions compared to basic Gradient Boosting?",
        "options": {
            "A": "XGBoost incorporates second-order Taylor expansion gradients (Hessians), built-in L1/L2 regularization to prevent overfitting, parallelized tree construction, and native handling of missing values.",
            "B": "XGBoost replaces decision trees with convolutional image filters.",
            "C": "XGBoost guarantees zero memory usage during model fitting.",
            "D": "XGBoost only trains on quantum computers."
        },
        "correct_answer": "A",
        "explanation": "XGBoost introduces several major algorithmic and computational enhancements over standard GBM: 1. Uses both first derivative (gradient) and second derivative (Hessian) for more accurate descent, 2. Adds built-in L1 and L2 regularization to tree leaf weights, 3. Features a fast histogram-based split finder supporting parallel CPU execution, and 4. Learns default split directions for missing values natively.",
        "why_other_options_are_wrong": {
            "B": "XGBoost is a gradient-boosted decision tree library, not a convolutional neural network.",
            "C": "XGBoost utilizes RAM cache and memory buffers for pre-sorted histograms.",
            "D": "XGBoost runs on standard x86/ARM CPUs and NVIDIA GPUs."
        },
        "placement_tip": "XGBoost advantages: 2nd-order Taylor gradients (Hessians), built-in L1/L2 regularization, parallel tree building, handles missing values."
    }
]

print(f"ML Part 2 generated with {len(ml_questions_part2)} questions.")
