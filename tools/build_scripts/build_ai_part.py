# build_ai_part.py - Questions AI_ML_DL_001 to AI_ML_DL_020 (Artificial Intelligence - 20 questions)
# Topics:
# AI Fundamentals (5): AI_ML_DL_001 - 005
# Intelligent Agents (4): AI_ML_DL_006 - 009
# Search Algorithms (5): AI_ML_DL_010 - 014
# AI Reasoning (3): AI_ML_DL_015 - 017
# AI Applications (3): AI_ML_DL_018 - 020

ai_questions = [
    # AI Fundamentals (5 questions)
    {
        "id": "AI_ML_DL_001",
        "section": "Artificial Intelligence",
        "topic": "AI Fundamentals",
        "concept": "AI vs ML vs DL",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "Which of the following statements most accurately defines the hierarchical relationship between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL)?",
        "options": {
            "A": "AI, ML, and DL are independent, competing technologies developed for completely disjoint problem spaces.",
            "B": "AI is the broad field of creating intelligent machines; ML is a subset of AI that learns patterns from data; DL is a subset of ML based on multi-layered artificial neural networks.",
            "C": "Deep Learning is the umbrella category containing Machine Learning, which in turn contains Artificial Intelligence.",
            "D": "Machine Learning deals exclusively with structured tabular data, while Artificial Intelligence deals exclusively with computer vision."
        },
        "correct_answer": "B",
        "explanation": "Artificial Intelligence is the broad superset encompassing any technique that enables machines to mimic human intelligence. Machine Learning is a specific branch of AI where statistical algorithms learn rules directly from data. Deep Learning is a specialized sub-branch of ML utilizing deep, multi-layered neural networks inspired by biological brains.",
        "why_other_options_are_wrong": {
            "A": "They are not disjoint; they form a nested Venn-diagram hierarchy: DL ⊂ ML ⊂ AI.",
            "C": "This inverts the true hierarchy; AI is the broadest discipline, not Deep Learning.",
            "D": "AI and ML both handle structured, semi-structured, and unstructured data across vision, NLP, and tabular domains."
        },
        "placement_tip": "Remember the nested concentric circle model: AI (outermost) -> ML (middle) -> DL (innermost)."
    },
    {
        "id": "AI_ML_DL_002",
        "section": "Artificial Intelligence",
        "topic": "AI Fundamentals",
        "concept": "Narrow AI vs General AI",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "Virtual assistants like Apple Siri, chess engines like Stockfish, and autonomous driving autopilots are all real-world examples of which classification of Artificial Intelligence?",
        "options": {
            "A": "Artificial General Intelligence (AGI)",
            "B": "Artificial Super Intelligence (ASI)",
            "C": "Artificial Narrow Intelligence (ANI / Weak AI)",
            "D": "Universal Cognitive Intelligence (UCI)"
        },
        "correct_answer": "C",
        "explanation": "Artificial Narrow Intelligence (Weak AI) refers to AI systems designed, trained, and optimized to execute a specific, bounded task (e.g. playing chess, driving, or transcribing audio). All current production AI systems in existence today operate as Narrow AI.",
        "why_other_options_are_wrong": {
            "A": "Artificial General Intelligence (AGI) refers to theoretical systems with human-level cognitive flexibility across all domains, which does not yet exist.",
            "B": "Artificial Super Intelligence (ASI) refers to theoretical future systems surpassing all human cognitive abilities.",
            "D": "Universal Cognitive Intelligence is a fabricated term."
        },
        "placement_tip": "Every AI deployed in industry today (including LLMs like ChatGPT and vision models) is categorized technically as Narrow AI."
    },
    {
        "id": "AI_ML_DL_003",
        "section": "Artificial Intelligence",
        "topic": "AI Fundamentals",
        "concept": "Turing Test",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In classic AI evaluation, what is the primary objective of Alan Turing's 'Imitation Game' (Turing Test)?",
        "options": {
            "A": "To measure the arithmetic computation speed of an electronic computer against an analog calculator.",
            "B": "To determine whether a machine can exhibit conversational behavior indistinguishable from that of a human evaluator in a blind text conversation.",
            "C": "To verify that a neural network has zero mathematical loss during gradient descent.",
            "D": "To test whether an AI robot can physically navigate through an obstacle course."
        },
        "correct_answer": "B",
        "explanation": "The Turing Test assesses operational intelligence. A human judge conducts natural language text conversations with two unseen entities (one human, one machine). If the interrogator cannot reliably tell which participant is the machine, the machine passes the test.",
        "why_other_options_are_wrong": {
            "A": "Computation speed benchmarks raw hardware throughput, not intelligence or behavioral indistinguishability.",
            "C": "Gradient descent and neural network loss functions were formulated decades after Turing's 1950 paper.",
            "D": "Physical mobility and robotics are evaluated by embodied AI navigation benchmarks, not the classic Turing Test."
        },
        "placement_tip": "The Turing Test measures human-like behavioral indistinguishability, not conscious self-awareness or raw processing speed."
    },
    {
        "id": "AI_ML_DL_004",
        "section": "Artificial Intelligence",
        "topic": "AI Fundamentals",
        "concept": "AI Knowledge Bases vs Traditional Databases",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "What is the key functional difference between a traditional relational database (RDBMS) and an AI Knowledge Base used in automated reasoning systems?",
        "options": {
            "A": "An RDBMS stores facts explicitly and queries return only stored data; an AI Knowledge Base combines facts with inference rules to deduce new implicit knowledge not explicitly stored.",
            "B": "An RDBMS cannot store text strings, whereas a Knowledge Base can.",
            "C": "A Knowledge Base requires quantum computing hardware to run SQL queries.",
            "D": "An RDBMS operates without an operating system, whereas a Knowledge Base requires Linux."
        },
        "correct_answer": "A",
        "explanation": "A traditional RDBMS stores explicit tables of records and retrieves only what was explicitly inserted. An AI Knowledge Base is paired with an Inference Engine (using forward/backward chaining or ontology reasoning) to infer and synthesize new truths from established rules and facts.",
        "why_other_options_are_wrong": {
            "A": "Correct: Inference engines allow knowledge bases to deduce implicit facts from explicit premises.",
            "B": "Relational databases routinely store text strings (VARCHAR, TEXT) and structured schemas.",
            "C": "Knowledge bases run on standard classical von Neumann computing architectures.",
            "D": "Both software systems run on standard commodity operating systems."
        },
        "placement_tip": "Knowledge Base = Facts + Rules; Inference Engine = Logic deduction mechanism that produces new knowledge."
    },
    {
        "id": "AI_ML_DL_005",
        "section": "Artificial Intelligence",
        "topic": "AI Fundamentals",
        "concept": "Symbolic AI vs Connectionist AI",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "During a technical interview at an IT service MNC, the interviewer asks: 'How does Symbolic AI (Good Old-Fashioned AI / GOFAI) differ fundamentally from Connectionist AI (Neural Networks)?' What is the correct response?",
        "options": {
            "A": "Symbolic AI operates on explicit, human-readable logic rules and symbols; Connectionist AI learns distributed statistical representations across interconnected nodes from raw numerical data.",
            "B": "Symbolic AI requires petabytes of training images, whereas Connectionist AI uses if-else statements exclusively.",
            "C": "Symbolic AI is non-deterministic and black-box, while Connectionist AI is 100% mathematically transparent.",
            "D": "Connectionist AI was abandoned in 1960 and is no longer used in modern computing."
        },
        "correct_answer": "A",
        "explanation": "Symbolic AI (GOFAI) is top-down: humans manually encode explicit symbols, ontologies, and formal logic rules (e.g. Prolog, expert systems). Connectionist AI (Neural Networks) is bottom-up: models learn distributed statistical weights across layers of artificial neurons directly from training data.",
        "why_other_options_are_wrong": {
            "B": "Connectionist AI (deep learning) requires massive image/text training datasets, while Symbolic AI relies on codified rules.",
            "C": "Symbolic AI is transparent (white-box logic paths); Deep Neural Networks are famously black-box representations.",
            "D": "Connectionist AI is the dominant paradigm powering modern deep learning and generative AI today."
        },
        "placement_tip": "Symbolic AI = Explicit human rules & logic trees; Connectionist AI = Statistical weights & neural activation patterns."
    },

    # Intelligent Agents (4 questions)
    {
        "id": "AI_ML_DL_006",
        "section": "Artificial Intelligence",
        "topic": "Intelligent Agents",
        "concept": "PEAS Framework",
        "difficulty": "Easy",
        "question_type": "conceptual",
        "question": "In Artificial Intelligence agent design, what does the acronym PEAS stand for when formally specifying the task environment of an agent?",
        "options": {
            "A": "Performance measure, Environment, Actuators, Sensors",
            "B": "Process, Entity, Action, System",
            "C": "Prediction, Error, Accuracy, Score",
            "D": "Program, Engine, Architecture, Storage"
        },
        "correct_answer": "A",
        "explanation": "The PEAS framework formalizes task environments: Performance measure (criteria for success), Environment (the external world the agent operates in), Actuators (mechanisms used to execute actions, e.g. wheels, robotic arms, screen displays), and Sensors (devices used to perceive states, e.g. cameras, LIDAR, keyboard inputs).",
        "why_other_options_are_wrong": {
            "B": "Process, Entity, Action, System is not an AI specification framework.",
            "C": "Prediction, Error, Accuracy, Score refers to ML validation metrics, not agent task environments.",
            "D": "Program, Engine, Architecture, Storage refers to computer engineering components."
        },
        "placement_tip": "High-frequency MNC exam question: P = Performance, E = Environment, A = Actuators, S = Sensors."
    },
    {
        "id": "AI_ML_DL_007",
        "section": "Artificial Intelligence",
        "topic": "Intelligent Agents",
        "concept": "Rational Agent Definition",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "In AI terminology according to Russell & Norvig, what defines a 'Rational Agent'?",
        "options": {
            "A": "An agent that is omniscient and always knows the future outcome of all possible events with 100% certainty.",
            "B": "An agent that selects actions expected to maximize its performance measure, given its percept sequence and built-in knowledge.",
            "C": "An agent that always mimics human behavior, including human emotional and cognitive biases.",
            "D": "An agent that executes every calculation in zero milliseconds using heuristic pruning."
        },
        "correct_answer": "B",
        "explanation": "A rational agent is one that does the right thing: for each possible percept sequence, it selects an action that is expected to maximize its performance measure, based on the evidence provided by the percept sequence and whatever built-in knowledge the agent possesses. Rationality is about expected success, not omniscience.",
        "why_other_options_are_wrong": {
            "A": "Rationality does NOT mean omniscience; an agent can be rational while having incomplete knowledge of the environment.",
            "C": "Rationality means doing the logically optimal action, whereas humans often make irrational, emotionally biased choices.",
            "D": "Execution latency does not define philosophical rationality."
        },
        "placement_tip": "Omniscience is knowing the actual outcome in advance; Rationality is maximizing expected success given current percepts."
    },
    {
        "id": "AI_ML_DL_008",
        "section": "Artificial Intelligence",
        "topic": "Intelligent Agents",
        "concept": "Agent Environment Properties",
        "difficulty": "Medium",
        "question_type": "application_based",
        "question": "Consider a standard game of Chess played by two algorithms. How is the chess environment classified across the standard AI environment dimensions?",
        "options": {
            "A": "Partially observable, Stochastic, Continuous, Dynamic",
            "B": "Fully observable, Deterministic, Discrete, Static",
            "C": "Fully observable, Stochastic, Continuous, Sequential",
            "D": "Partially observable, Deterministic, Discrete, Episodic"
        },
        "correct_answer": "B",
        "explanation": "Chess is: 1. Fully observable (both players see the entire board state at all times), 2. Deterministic (a given move results in an exact, predictable board state with no dice/chance), 3. Discrete (a finite set of distinct moves and board squares), and 4. Static (the board state does not change while the agent is deciding its move). It is also sequential (current moves affect future states).",
        "why_other_options_are_wrong": {
            "A": "Partially observable and continuous describe real-world driving or poker, not board chess.",
            "C": "Chess is discrete (distinct board coordinates and steps), not continuous.",
            "D": "Poker is partially observable (hidden cards); chess has zero hidden information."
        },
        "placement_tip": "Chess = Fully observable, deterministic, static, discrete, sequential. Poker = Partially observable, stochastic."
    },
    {
        "id": "AI_ML_DL_009",
        "section": "Artificial Intelligence",
        "topic": "Intelligent Agents",
        "concept": "Agent Architectures",
        "difficulty": "Hard",
        "question_type": "comparison",
        "question": "An automated thermostat turns on heating when the current room temperature drops below 18°C, regardless of historical temperature readings or time of day. Which agent architecture does this device exemplify?",
        "options": {
            "A": "Simple Reflex Agent",
            "B": "Model-based Reflex Agent",
            "C": "Goal-based Agent",
            "D": "Utility-based Agent"
        },
        "correct_answer": "A",
        "explanation": "A Simple Reflex Agent selects actions based solely on the current percept (condition-action rules: IF temperature < 18 THEN heater ON), ignoring the rest of the percept history. Model-based agents maintain internal state/history, Goal-based agents evaluate future objectives, and Utility-based agents measure degrees of happiness/trade-offs.",
        "why_other_options_are_wrong": {
            "B": "Model-based reflex agents maintain internal state to track unobserved aspects of the environment.",
            "C": "Goal-based agents plan search sequences towards an explicit target goal state.",
            "D": "Utility-based agents optimize continuous utility/preference functions with multiple competing trade-offs."
        },
        "placement_tip": "Simple Reflex Agent operates on condition-action rules using ONLY the current percept without internal memory."
    },

    # Search Algorithms (5 questions)
    {
        "id": "AI_ML_DL_010",
        "section": "Artificial Intelligence",
        "topic": "Search Algorithms",
        "concept": "Breadth-First Search vs Depth-First Search",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "In an unweighted graph search with uniform step costs, which search algorithm is guaranteed to find the shallowest goal node (optimal shortest path) and what queue data structure does it use?",
        "options": {
            "A": "Depth-First Search (DFS) using a LIFO Stack",
            "B": "Breadth-First Search (BFS) using a FIFO Queue",
            "C": "Depth-Limited Search using a Priority Queue",
            "D": "Iterative Deepening using an Array Heap"
        },
        "correct_answer": "B",
        "explanation": "Breadth-First Search (BFS) explores all nodes at depth `d` before proceeding to depth `d+1`. When all step costs are equal, BFS is both complete (guaranteed to find a solution if one exists) and optimal (finds the shallowest path). It is implemented using a First-In-First-Out (FIFO) queue.",
        "why_other_options_are_wrong": {
            "A": "DFS uses a LIFO stack and can get trapped in infinite depth loops; it is neither complete in infinite spaces nor optimal.",
            "C": "Depth-Limited Search uses a stack and stops at an arbitrary depth limit, which can miss goals beyond that limit.",
            "D": "Iterative Deepening repeatedly runs depth-first searches, using LIFO stacks."
        },
        "placement_tip": "BFS uses FIFO queue (optimal for unweighted graphs); DFS uses LIFO stack (memory efficient O(bm), but not optimal)."
    },
    {
        "id": "AI_ML_DL_011",
        "section": "Artificial Intelligence",
        "topic": "Search Algorithms",
        "concept": "A* Search and Evaluation Function",
        "difficulty": "Medium",
        "question_type": "calculation_based",
        "question": "In the A* search algorithm, the total evaluation function for a node `n` is computed as `f(n) = g(n) + h(n)`. If node X has an actual path cost from the start node `g(X) = 14`, and an estimated heuristic cost to the goal `h(X) = 9`, what is the evaluation value `f(X)`?",
        "options": {
            "A": "5",
            "B": "23",
            "C": "126",
            "D": "1.55"
        },
        "correct_answer": "B",
        "explanation": "In A* search, `f(n) = g(n) + h(n)`, where `g(n)` is the exact cost to reach node `n` from the start node, and `h(n)` is the estimated cost from node `n` to the goal. For node X: `f(X) = 14 + 9 = 23`.",
        "why_other_options_are_wrong": {
            "A": "5 is the difference `14 - 9`, not the sum.",
            "C": "126 is the product `14 * 9`.",
            "D": "1.55 is the quotient `14 / 9`."
        },
        "placement_tip": "Remember: `g(n)` is past cost incurred; `h(n)` is future estimated cost; `f(n)` is estimated total cost."
    },
    {
        "id": "AI_ML_DL_012",
        "section": "Artificial Intelligence",
        "topic": "Search Algorithms",
        "concept": "Heuristic Admissibility",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "For the A* search algorithm to be guaranteed optimal in a tree search problem, what mathematical property must the heuristic function `h(n)` strictly satisfy?",
        "options": {
            "A": "The heuristic must be monotonic and always return negative values.",
            "B": "The heuristic must be admissible, meaning `h(n)` never overestimates the true cost to reach the goal (i.e. `0 <= h(n) <= h*(n)`).",
            "C": "The heuristic must equal exactly the square root of the number of child nodes.",
            "D": "The heuristic must overestimate the path cost by at least 20% to prevent underfitting."
        },
        "correct_answer": "B",
        "explanation": "An admissible heuristic is one that never overestimates the cost to reach the goal (it is optimistic). If `h(n)` is admissible, A* tree search will never overlook an optimal path in favor of a suboptimal one, guaranteeing an optimal solution. For graph search, the heuristic must also be consistent (monotonic).",
        "why_other_options_are_wrong": {
            "A": "Heuristic costs in distance metrics are non-negative (`h(n) >= 0`), never negative.",
            "C": "Child node count has no direct relationship to true path distances.",
            "D": "Overestimating the true cost (`h(n) > h*(n)`) breaks admissibility and can cause A* to return suboptimal paths."
        },
        "placement_tip": "Admissible heuristic = Never overestimates (`h(n) <= true cost`). Guarantees A* optimality in tree search."
    },
    {
        "id": "AI_ML_DL_013",
        "section": "Artificial Intelligence",
        "topic": "Search Algorithms",
        "concept": "Uniform Cost Search",
        "difficulty": "Hard",
        "question_type": "scenario_based",
        "question": "A GPS navigation engine must find the lowest fuel consumption route between two cities on a map with varying road toll costs and distances. All edge weights are positive. Which uninformed search algorithm is guaranteed to find the minimum-cost route?",
        "options": {
            "A": "Depth-First Search (DFS)",
            "B": "Uniform-Cost Search (UCS / Dijkstra's Algorithm variant)",
            "C": "Greedy Best-First Search",
            "D": "Random Walk Search"
        },
        "correct_answer": "B",
        "explanation": "Uniform-Cost Search (UCS) expands nodes in order of their cumulative path cost `g(n)` using a priority queue. It is equivalent to Dijkstra's algorithm and is guaranteed to find the optimal path in graphs with arbitrary positive edge costs when no heuristic is available.",
        "why_other_options_are_wrong": {
            "A": "DFS does not consider edge weights and plunges down arbitrary deep branches, finding non-optimal paths.",
            "C": "Greedy Best-First Search is an informed search algorithm that only looks at `h(n)` and frequently chooses suboptimal paths.",
            "D": "Random Walk provides no guarantees of optimality or timely termination."
        },
        "placement_tip": "UCS expands nodes by lowest path cost `g(n)`. When all edge costs are identical, UCS behaves identically to BFS."
    },
    {
        "id": "AI_ML_DL_014",
        "section": "Artificial Intelligence",
        "topic": "Search Algorithms",
        "concept": "Minimax with Alpha-Beta Pruning",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "In two-player zero-sum adversarial games (like Chess or Tic-Tac-Toe), what is the primary benefit of applying Alpha-Beta Pruning to the Minimax search tree?",
        "options": {
            "A": "It converts the deterministic game into a stochastic game.",
            "B": "It prunes away branches that cannot possibly influence the final minimax decision, allowing the algorithm to search twice as deep in the same amount of time without altering the optimal outcome.",
            "C": "It replaces tree search with a pre-computed lookup table.",
            "D": "It forces the opponent to make a random blunder on their turn."
        },
        "correct_answer": "B",
        "explanation": "Alpha-Beta pruning computes the exact same optimal decision as standard Minimax, but prunes branches that are mathematically proven to be worse than an already examined option (alpha/beta bounds). With optimal move ordering, it reduces the effective branching factor from `b` to `sqrt(b)`, doubling the searchable depth.",
        "why_other_options_are_wrong": {
            "A": "Alpha-Beta pruning does not change the game mechanics or inject randomness.",
            "C": "It is an on-the-fly tree search optimization, not an offline lookup table.",
            "D": "Adversarial game search assumes the opponent will always play their optimal move."
        },
        "placement_tip": "Alpha-Beta Pruning returns the EXACT same numerical result as Minimax while evaluating significantly fewer nodes."
    },

    # AI Reasoning (3 questions)
    {
        "id": "AI_ML_DL_015",
        "section": "Artificial Intelligence",
        "topic": "AI Reasoning",
        "concept": "Forward Chaining vs Backward Chaining",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "In classical rule-based expert systems, what is the fundamental difference between Forward Chaining and Backward Chaining inference strategies?",
        "options": {
            "A": "Forward chaining is data-driven (starts from known facts and applies rules to deduce new facts); Backward chaining is goal-driven (starts with a hypothesis/goal and searches backward for supporting facts).",
            "B": "Forward chaining is for neural networks; Backward chaining is for linear regression.",
            "C": "Forward chaining only works with boolean false values.",
            "D": "Backward chaining deletes facts from memory once they are verified."
        },
        "correct_answer": "A",
        "explanation": "Forward Chaining starts with available initial facts in the working memory and fires condition-action rules whose IF conditions are met, generating new conclusions (bottom-up/data-driven). Backward Chaining starts with a target hypothesis/query and works in reverse to verify if supporting premises exist in the knowledge base (top-down/goal-driven).",
        "why_other_options_are_wrong": {
            "A": "Correct: Forward chaining is data-driven; backward chaining is goal-driven.",
            "B": "Both chaining strategies are core techniques in symbolic AI and expert systems, not backprop in neural nets.",
            "C": "Forward chaining evaluates both true and false truth values in proposition logic.",
            "D": "Neither strategy destroys the integrity of the knowledge base during inference."
        },
        "placement_tip": "Forward Chaining = Data-driven (Facts -> Conclusion). Backward Chaining = Goal-driven (Hypothesis -> Supporting Facts)."
    },
    {
        "id": "AI_ML_DL_016",
        "section": "Artificial Intelligence",
        "topic": "AI Reasoning",
        "concept": "Propositional vs First-Order Logic",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "Why is First-Order Logic (FOL / Predicate Logic) significantly more expressive than Propositional Logic in knowledge representation?",
        "options": {
            "A": "Propositional logic only supports binary digits 0 and 1, whereas First-Order Logic runs on floating-point numbers.",
            "B": "First-Order Logic introduces objects, relations (predicates), functions, and quantifiers (Universal ∀ and Existential ∃), allowing general rules about classes of entities.",
            "C": "Propositional logic requires backpropagation, while First-Order Logic does not.",
            "D": "First-Order Logic cannot represent negation or implication."
        },
        "correct_answer": "B",
        "explanation": "Propositional logic only declares atomic propositions (e.g. `P`, `Q`) that are either true or false. First-Order Logic (FOL) adds ontological commitments: the world consists of Objects (people, numbers), Relations/Predicates (`FatherOf(x, y)`), and Quantifiers (`∀x` for all, `∃x` for there exists), allowing compact expression of general rules like 'All humans are mortal' (`∀x (Human(x) -> Mortal(x))`).",
        "why_other_options_are_wrong": {
            "A": "Both are formal symbolic logic systems operating on truth values, not floating-point arithmetic.",
            "C": "Neither formal logic system uses backpropagation.",
            "D": "FOL fully supports all standard boolean connectives including negation (¬) and implication (->)."
        },
        "placement_tip": "First-Order Logic = Objects + Relations + Functions + Quantifiers (∀, ∃). Much more expressive than Propositional Logic."
    },
    {
        "id": "AI_ML_DL_017",
        "section": "Artificial Intelligence",
        "topic": "AI Reasoning",
        "concept": "Expert Systems Components",
        "difficulty": "Hard",
        "question_type": "conceptual",
        "question": "A medical diagnostic expert system (like MYCIN) consists of two decoupled components: the 'Knowledge Base' and the 'Inference Engine'. What is the primary software engineering advantage of separating these two components?",
        "options": {
            "A": "It allows domain experts to add, update, or modify medical rules without rewriting or recompiling the underlying reasoning code.",
            "B": "It eliminates the need for computer RAM during patient diagnoses.",
            "C": "It guarantees that the system achieves 100% precision on all unseen viral diseases.",
            "D": "It automatically converts Python code into assembly language."
        },
        "correct_answer": "A",
        "explanation": "Separating knowledge (domain rules and facts) from the reasoning mechanism (the inference engine) is a foundational software design principle of expert systems. It means non-programmer domain experts (e.g. doctors, lawyers) can edit the knowledge base as new discoveries emerge without modifying the reasoning engine.",
        "why_other_options_are_wrong": {
            "A": "Correct: Decoupling domain facts from reasoning code allows modular maintenance and continuous updates.",
            "B": "RAM is always required to store working facts and active rule stacks.",
            "C": "No diagnostic system can guarantee 100% precision across all unknown future diseases.",
            "D": "Expert systems are logic architectures, not code compilers."
        },
        "placement_tip": "Modularity: Knowledge Base contains domain expertise; Inference Engine is domain-independent logic processing."
    },

    # AI Applications (3 questions)
    {
        "id": "AI_ML_DL_018",
        "section": "Artificial Intelligence",
        "topic": "AI Applications",
        "concept": "Recommendation Systems",
        "difficulty": "Medium",
        "question_type": "comparison",
        "question": "What is the primary difference between Collaborative Filtering and Content-Based Filtering in modern e-commerce recommendation systems?",
        "options": {
            "A": "Collaborative filtering recommends items based on the preferences and ratings of similar users; Content-based filtering recommends items that share attributes with items the user liked in the past.",
            "B": "Collaborative filtering requires no user interaction history; Content-based filtering requires at least 1 million users.",
            "C": "Content-based filtering cannot handle text descriptions of products.",
            "D": "Collaborative filtering is only used for physical books, while Content-based filtering is for digital music."
        },
        "correct_answer": "A",
        "explanation": "Collaborative Filtering leverages crowd wisdom: 'Users who bought what you bought also enjoyed X' (user-item interaction matrix). Content-Based Filtering inspects item metadata: 'Since you watched an Action movie directed by Christopher Nolan, here is another Action movie directed by him' (item-attribute similarity).",
        "why_other_options_are_wrong": {
            "A": "Correct: Collaborative filtering uses user-user or item-item interaction matrices; Content-based filtering uses item features and user profiles.",
            "B": "Collaborative filtering suffers from the 'Cold Start' problem precisely because it requires user interaction history.",
            "C": "Content-based filtering relies heavily on text descriptions, keywords, and TF-IDF/embeddings.",
            "D": "Both techniques are universally applied across video streaming, music, retail, and news."
        },
        "placement_tip": "Collaborative = Similarity between user behavior patterns. Content-Based = Similarity between item features."
    },
    {
        "id": "AI_ML_DL_019",
        "section": "Artificial Intelligence",
        "topic": "AI Applications",
        "concept": "Rule-Based vs AI Chatbots",
        "difficulty": "Medium",
        "question_type": "conceptual",
        "question": "Why do modern conversational AI chatbots powered by Large Language Models (LLMs) significantly outperform legacy rule-based pattern matching chatbots (such as ELIZA)?",
        "options": {
            "A": "Rule-based bots can only recognize exact keyword matches and decision trees; LLMs understand linguistic context, semantic meaning, and intent via deep transformer self-attention.",
            "B": "Rule-based bots require a GPU supercomputer, whereas LLMs run inside standard CPU registers.",
            "C": "Legacy bots are completely non-deterministic, while LLMs follow fixed hardcoded regex rules.",
            "D": "LLMs store exact pre-written responses for every possible English sentence ever uttered."
        },
        "correct_answer": "A",
        "explanation": "Rule-based systems (like ELIZA or AIML) rely on rigid regular expressions, scripted keywords, and fixed decision trees; if a user enters a slightly rephrased query, the bot fails. Modern LLM chatbots use attention-based transformer neural architectures trained on billions of tokens to comprehend semantics, idioms, context, and complex reasoning.",
        "why_other_options_are_wrong": {
            "B": "Inversion: LLMs require powerful GPU accelerators, whereas rule-based regex bots run on minimal CPU.",
            "C": "Rule-based bots follow hardcoded regex; LLMs generate probabilistic token distributions.",
            "D": "LLMs do not store pre-written sentences; they generate dynamic responses via predictive token probability distributions."
        },
        "placement_tip": "Rule-based = Keyword pattern matching & rigid trees. Modern Conversational AI = Semantic context & deep transformer attention."
    },
    {
        "id": "AI_ML_DL_020",
        "section": "Artificial Intelligence",
        "topic": "AI Applications",
        "concept": "Computer Vision Pipeline",
        "difficulty": "Hard",
        "question_type": "workflow_based",
        "question": "In an autonomous vehicle's real-time computer vision perception stack, what is the logical progression of tasks required to detect a pedestrian and determine whether they are inside the vehicle's driving path?",
        "options": {
            "A": "Sensor Image Capture -> Preprocessing (Denoising/Normalization) -> Object Detection (Bounding Boxes & Class Labels) -> Semantic Segmentation / Depth Estimation -> Trajectory & Collision Prediction",
            "B": "Collision Prediction -> Image Capture -> Sensor Calibration -> Pixel Rendering",
            "C": "Data Leakage Inspection -> Feature Selection -> Output Classification -> Image Compression",
            "D": "Softmax Activation -> Backpropagation -> Gradient Descent -> Image Capture"
        },
        "correct_answer": "A",
        "explanation": "A computer vision perception pipeline follows a structured physical-to-semantic progression: 1. Raw sensor frames are captured by cameras/LIDAR, 2. Preprocessed (resized, normalized, denoised), 3. Object detection models identify pedestrians and place bounding boxes, 4. Segmentation/depth estimation determines distance, and 5. Trajectory prediction determines collision risk.",
        "why_other_options_are_wrong": {
            "B": "Collision prediction is the final safety decision, which cannot occur before sensors even capture images.",
            "C": "Feature selection and data leakage are tabular training concepts, not an embedded perception pipeline.",
            "D": "Backpropagation and gradient descent occur during offline training, not real-time inference on the vehicle."
        },
        "placement_tip": "Sensors -> Preprocessing -> Feature Extraction/Detection -> Depth/Tracking -> Decision Action."
    }
]

print(f"AI Part generated with {len(ai_questions)} questions.")
