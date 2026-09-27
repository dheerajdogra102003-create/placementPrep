/* PlacementPrep Question Bank: AI, ML & Deep Learning (100 questions) */
window.AIML_QUESTIONS = [
  {
    "id": "aiml-001",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Fundamentals",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "Which of the following statements most accurately defines the hierarchical relationship between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL)?",
    "codeSnippet": "",
    "options": [
      "AI, ML, and DL are independent, competing technologies developed for completely disjoint problem spaces.",
      "AI is the broad field of creating intelligent machines; ML is a subset of AI that learns patterns from data; DL is a subset of ML based on multi-layered artificial neural networks.",
      "Deep Learning is the umbrella category containing Machine Learning, which in turn contains Artificial Intelligence.",
      "Machine Learning deals exclusively with structured tabular data, while Artificial Intelligence deals exclusively with computer vision."
    ],
    "correctAnswer": 1,
    "explanation": "Artificial Intelligence is the broad superset encompassing any technique that enables machines to mimic human intelligence. Machine Learning is a specific branch of AI where statistical algorithms learn rules directly from data. Deep Learning is a specialized sub-branch of ML utilizing deep, multi-layered neural networks inspired by biological brains.",
    "wrongOptionExplanations": {
      "0": "They are not disjoint; they form a nested Venn-diagram hierarchy: DL \u2282 ML \u2282 AI.",
      "2": "This inverts the true hierarchy; AI is the broadest discipline, not Deep Learning.",
      "3": "AI and ML both handle structured, semi-structured, and unstructured data across vision, NLP, and tabular domains."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Remember the nested concentric circle model: AI (outermost) -> ML (middle) -> DL (innermost)."
  },
  {
    "id": "aiml-002",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Fundamentals",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "Virtual assistants like Apple Siri, chess engines like Stockfish, and autonomous driving autopilots are all real-world examples of which classification of Artificial Intelligence?",
    "codeSnippet": "",
    "options": [
      "Artificial General Intelligence (AGI)",
      "Artificial Super Intelligence (ASI)",
      "Artificial Narrow Intelligence (ANI / Weak AI)",
      "Universal Cognitive Intelligence (UCI)"
    ],
    "correctAnswer": 2,
    "explanation": "Artificial Narrow Intelligence (Weak AI) refers to AI systems designed, trained, and optimized to execute a specific, bounded task (e.g. playing chess, driving, or transcribing audio). All current production AI systems in existence today operate as Narrow AI.",
    "wrongOptionExplanations": {
      "0": "Artificial General Intelligence (AGI) refers to theoretical systems with human-level cognitive flexibility across all domains, which does not yet exist.",
      "1": "Artificial Super Intelligence (ASI) refers to theoretical future systems surpassing all human cognitive abilities.",
      "3": "Universal Cognitive Intelligence is a fabricated term."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Every AI deployed in industry today (including LLMs like ChatGPT and vision models) is categorized technically as Narrow AI."
  },
  {
    "id": "aiml-003",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Fundamentals",
    "difficulty": "medium",
    "type": "application_based",
    "question": "In classic AI evaluation, what is the primary objective of Alan Turing's 'Imitation Game' (Turing Test)?",
    "codeSnippet": "",
    "options": [
      "To measure the arithmetic computation speed of an electronic computer against an analog calculator.",
      "To determine whether a machine can exhibit conversational behavior indistinguishable from that of a human evaluator in a blind text conversation.",
      "To verify that a neural network has zero mathematical loss during gradient descent.",
      "To test whether an AI robot can physically navigate through an obstacle course."
    ],
    "correctAnswer": 1,
    "explanation": "The Turing Test assesses operational intelligence. A human judge conducts natural language text conversations with two unseen entities (one human, one machine). If the interrogator cannot reliably tell which participant is the machine, the machine passes the test.",
    "wrongOptionExplanations": {
      "0": "Computation speed benchmarks raw hardware throughput, not intelligence or behavioral indistinguishability.",
      "2": "Gradient descent and neural network loss functions were formulated decades after Turing's 1950 paper.",
      "3": "Physical mobility and robotics are evaluated by embodied AI navigation benchmarks, not the classic Turing Test."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "The Turing Test measures human-like behavioral indistinguishability, not conscious self-awareness or raw processing speed."
  },
  {
    "id": "aiml-004",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Fundamentals",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the key functional difference between a traditional relational database (RDBMS) and an AI Knowledge Base used in automated reasoning systems?",
    "codeSnippet": "",
    "options": [
      "An RDBMS stores facts explicitly and queries return only stored data; an AI Knowledge Base combines facts with inference rules to deduce new implicit knowledge not explicitly stored.",
      "An RDBMS cannot store text strings, whereas a Knowledge Base can.",
      "A Knowledge Base requires quantum computing hardware to run SQL queries.",
      "An RDBMS operates without an operating system, whereas a Knowledge Base requires Linux."
    ],
    "correctAnswer": 0,
    "explanation": "A traditional RDBMS stores explicit tables of records and retrieves only what was explicitly inserted. An AI Knowledge Base is paired with an Inference Engine (using forward/backward chaining or ontology reasoning) to infer and synthesize new truths from established rules and facts.",
    "wrongOptionExplanations": {
      "1": "Relational databases routinely store text strings (VARCHAR, TEXT) and structured schemas.",
      "2": "Knowledge bases run on standard classical von Neumann computing architectures.",
      "3": "Both software systems run on standard commodity operating systems."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Knowledge Base = Facts + Rules; Inference Engine = Logic deduction mechanism that produces new knowledge."
  },
  {
    "id": "aiml-005",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Fundamentals",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "During a technical interview at an IT service MNC, the interviewer asks: 'How does Symbolic AI (Good Old-Fashioned AI / GOFAI) differ fundamentally from Connectionist AI (Neural Networks)?' What is the correct response?",
    "codeSnippet": "",
    "options": [
      "Symbolic AI operates on explicit, human-readable logic rules and symbols; Connectionist AI learns distributed statistical representations across interconnected nodes from raw numerical data.",
      "Symbolic AI requires petabytes of training images, whereas Connectionist AI uses if-else statements exclusively.",
      "Symbolic AI is non-deterministic and black-box, while Connectionist AI is 100% mathematically transparent.",
      "Connectionist AI was abandoned in 1960 and is no longer used in modern computing."
    ],
    "correctAnswer": 0,
    "explanation": "Symbolic AI (GOFAI) is top-down: humans manually encode explicit symbols, ontologies, and formal logic rules (e.g. Prolog, expert systems). Connectionist AI (Neural Networks) is bottom-up: models learn distributed statistical weights across layers of artificial neurons directly from training data.",
    "wrongOptionExplanations": {
      "1": "Connectionist AI (deep learning) requires massive image/text training datasets, while Symbolic AI relies on codified rules.",
      "2": "Symbolic AI is transparent (white-box logic paths); Deep Neural Networks are famously black-box representations.",
      "3": "Connectionist AI is the dominant paradigm powering modern deep learning and generative AI today."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Symbolic AI = Explicit human rules & logic trees; Connectionist AI = Statistical weights & neural activation patterns."
  },
  {
    "id": "aiml-006",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Intelligent Agents",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "In Artificial Intelligence agent design, what does the acronym PEAS stand for when formally specifying the task environment of an agent?",
    "codeSnippet": "",
    "options": [
      "Performance measure, Environment, Actuators, Sensors",
      "Process, Entity, Action, System",
      "Prediction, Error, Accuracy, Score",
      "Program, Engine, Architecture, Storage"
    ],
    "correctAnswer": 0,
    "explanation": "The PEAS framework formalizes task environments: Performance measure (criteria for success), Environment (the external world the agent operates in), Actuators (mechanisms used to execute actions, e.g. wheels, robotic arms, screen displays), and Sensors (devices used to perceive states, e.g. cameras, LIDAR, keyboard inputs).",
    "wrongOptionExplanations": {
      "1": "Process, Entity, Action, System is not an AI specification framework.",
      "2": "Prediction, Error, Accuracy, Score refers to ML validation metrics, not agent task environments.",
      "3": "Program, Engine, Architecture, Storage refers to computer engineering components."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "High-frequency MNC exam question: P = Performance, E = Environment, A = Actuators, S = Sensors."
  },
  {
    "id": "aiml-007",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Intelligent Agents",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In AI terminology according to Russell & Norvig, what defines a 'Rational Agent'?",
    "codeSnippet": "",
    "options": [
      "An agent that is omniscient and always knows the future outcome of all possible events with 100% certainty.",
      "An agent that selects actions expected to maximize its performance measure, given its percept sequence and built-in knowledge.",
      "An agent that always mimics human behavior, including human emotional and cognitive biases.",
      "An agent that executes every calculation in zero milliseconds using heuristic pruning."
    ],
    "correctAnswer": 1,
    "explanation": "A rational agent is one that does the right thing: for each possible percept sequence, it selects an action that is expected to maximize its performance measure, based on the evidence provided by the percept sequence and whatever built-in knowledge the agent possesses. Rationality is about expected success, not omniscience.",
    "wrongOptionExplanations": {
      "0": "Rationality does NOT mean omniscience; an agent can be rational while having incomplete knowledge of the environment.",
      "2": "Rationality means doing the logically optimal action, whereas humans often make irrational, emotionally biased choices.",
      "3": "Execution latency does not define philosophical rationality."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Omniscience is knowing the actual outcome in advance; Rationality is maximizing expected success given current percepts."
  },
  {
    "id": "aiml-008",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Intelligent Agents",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "Consider a standard game of Chess played by two algorithms. How is the chess environment classified across the standard AI environment dimensions?",
    "codeSnippet": "",
    "options": [
      "Partially observable, Stochastic, Continuous, Dynamic",
      "Fully observable, Deterministic, Discrete, Static",
      "Fully observable, Stochastic, Continuous, Sequential",
      "Partially observable, Deterministic, Discrete, Episodic"
    ],
    "correctAnswer": 1,
    "explanation": "Chess is: 1. Fully observable (both players see the entire board state at all times), 2. Deterministic (a given move results in an exact, predictable board state with no dice/chance), 3. Discrete (a finite set of distinct moves and board squares), and 4. Static (the board state does not change while the agent is deciding its move). It is also sequential (current moves affect future states).",
    "wrongOptionExplanations": {
      "0": "Partially observable and continuous describe real-world driving or poker, not board chess.",
      "2": "Chess is discrete (distinct board coordinates and steps), not continuous.",
      "3": "Poker is partially observable (hidden cards); chess has zero hidden information."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Chess = Fully observable, deterministic, static, discrete, sequential. Poker = Partially observable, stochastic."
  },
  {
    "id": "aiml-009",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Intelligent Agents",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "An automated thermostat turns on heating when the current room temperature drops below 18\u00b0C, regardless of historical temperature readings or time of day. Which agent architecture does this device exemplify?",
    "codeSnippet": "",
    "options": [
      "Simple Reflex Agent",
      "Model-based Reflex Agent",
      "Goal-based Agent",
      "Utility-based Agent"
    ],
    "correctAnswer": 0,
    "explanation": "A Simple Reflex Agent selects actions based solely on the current percept (condition-action rules: IF temperature < 18 THEN heater ON), ignoring the rest of the percept history. Model-based agents maintain internal state/history, Goal-based agents evaluate future objectives, and Utility-based agents measure degrees of happiness/trade-offs.",
    "wrongOptionExplanations": {
      "1": "Model-based reflex agents maintain internal state to track unobserved aspects of the environment.",
      "2": "Goal-based agents plan search sequences towards an explicit target goal state.",
      "3": "Utility-based agents optimize continuous utility/preference functions with multiple competing trade-offs."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Simple Reflex Agent operates on condition-action rules using ONLY the current percept without internal memory."
  },
  {
    "id": "aiml-010",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Search Algorithms",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In an unweighted graph search with uniform step costs, which search algorithm is guaranteed to find the shallowest goal node (optimal shortest path) and what queue data structure does it use?",
    "codeSnippet": "",
    "options": [
      "Depth-First Search (DFS) using a LIFO Stack",
      "Breadth-First Search (BFS) using a FIFO Queue",
      "Depth-Limited Search using a Priority Queue",
      "Iterative Deepening using an Array Heap"
    ],
    "correctAnswer": 1,
    "explanation": "Breadth-First Search (BFS) explores all nodes at depth `d` before proceeding to depth `d+1`. When all step costs are equal, BFS is both complete (guaranteed to find a solution if one exists) and optimal (finds the shallowest path). It is implemented using a First-In-First-Out (FIFO) queue.",
    "wrongOptionExplanations": {
      "0": "DFS uses a LIFO stack and can get trapped in infinite depth loops; it is neither complete in infinite spaces nor optimal.",
      "2": "Depth-Limited Search uses a stack and stops at an arbitrary depth limit, which can miss goals beyond that limit.",
      "3": "Iterative Deepening repeatedly runs depth-first searches, using LIFO stacks."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "BFS uses FIFO queue (optimal for unweighted graphs); DFS uses LIFO stack (memory efficient O(bm), but not optimal)."
  },
  {
    "id": "aiml-011",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Search Algorithms",
    "difficulty": "medium",
    "type": "calculation_based",
    "question": "In the A* search algorithm, the total evaluation function for a node `n` is computed as `f(n) = g(n) + h(n)`. If node X has an actual path cost from the start node `g(X) = 14`, and an estimated heuristic cost to the goal `h(X) = 9`, what is the evaluation value `f(X)`?",
    "codeSnippet": "",
    "options": [
      "5",
      "23",
      "126",
      "1.55"
    ],
    "correctAnswer": 1,
    "explanation": "In A* search, `f(n) = g(n) + h(n)`, where `g(n)` is the exact cost to reach node `n` from the start node, and `h(n)` is the estimated cost from node `n` to the goal. For node X: `f(X) = 14 + 9 = 23`.",
    "wrongOptionExplanations": {
      "0": "5 is the difference `14 - 9`, not the sum.",
      "2": "126 is the product `14 * 9`.",
      "3": "1.55 is the quotient `14 / 9`."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Remember: `g(n)` is past cost incurred; `h(n)` is future estimated cost; `f(n)` is estimated total cost."
  },
  {
    "id": "aiml-012",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Search Algorithms",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "For the A* search algorithm to be guaranteed optimal in a tree search problem, what mathematical property must the heuristic function `h(n)` strictly satisfy?",
    "codeSnippet": "",
    "options": [
      "The heuristic must be monotonic and always return negative values.",
      "The heuristic must be admissible, meaning `h(n)` never overestimates the true cost to reach the goal (i.e. `0 <= h(n) <= h*(n)`).",
      "The heuristic must equal exactly the square root of the number of child nodes.",
      "The heuristic must overestimate the path cost by at least 20% to prevent underfitting."
    ],
    "correctAnswer": 1,
    "explanation": "An admissible heuristic is one that never overestimates the cost to reach the goal (it is optimistic). If `h(n)` is admissible, A* tree search will never overlook an optimal path in favor of a suboptimal one, guaranteeing an optimal solution. For graph search, the heuristic must also be consistent (monotonic).",
    "wrongOptionExplanations": {
      "0": "Heuristic costs in distance metrics are non-negative (`h(n) >= 0`), never negative.",
      "2": "Child node count has no direct relationship to true path distances.",
      "3": "Overestimating the true cost (`h(n) > h*(n)`) breaks admissibility and can cause A* to return suboptimal paths."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Admissible heuristic = Never overestimates (`h(n) <= true cost`). Guarantees A* optimality in tree search."
  },
  {
    "id": "aiml-013",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Search Algorithms",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "A GPS navigation engine must find the lowest fuel consumption route between two cities on a map with varying road toll costs and distances. All edge weights are positive. Which uninformed search algorithm is guaranteed to find the minimum-cost route?",
    "codeSnippet": "",
    "options": [
      "Depth-First Search (DFS)",
      "Uniform-Cost Search (UCS / Dijkstra's Algorithm variant)",
      "Greedy Best-First Search",
      "Random Walk Search"
    ],
    "correctAnswer": 1,
    "explanation": "Uniform-Cost Search (UCS) expands nodes in order of their cumulative path cost `g(n)` using a priority queue. It is equivalent to Dijkstra's algorithm and is guaranteed to find the optimal path in graphs with arbitrary positive edge costs when no heuristic is available.",
    "wrongOptionExplanations": {
      "0": "DFS does not consider edge weights and plunges down arbitrary deep branches, finding non-optimal paths.",
      "2": "Greedy Best-First Search is an informed search algorithm that only looks at `h(n)` and frequently chooses suboptimal paths.",
      "3": "Random Walk provides no guarantees of optimality or timely termination."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "UCS expands nodes by lowest path cost `g(n)`. When all edge costs are identical, UCS behaves identically to BFS."
  },
  {
    "id": "aiml-014",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "Search Algorithms",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "In two-player zero-sum adversarial games (like Chess or Tic-Tac-Toe), what is the primary benefit of applying Alpha-Beta Pruning to the Minimax search tree?",
    "codeSnippet": "",
    "options": [
      "It converts the deterministic game into a stochastic game.",
      "It prunes away branches that cannot possibly influence the final minimax decision, allowing the algorithm to search twice as deep in the same amount of time without altering the optimal outcome.",
      "It replaces tree search with a pre-computed lookup table.",
      "It forces the opponent to make a random blunder on their turn."
    ],
    "correctAnswer": 1,
    "explanation": "Alpha-Beta pruning computes the exact same optimal decision as standard Minimax, but prunes branches that are mathematically proven to be worse than an already examined option (alpha/beta bounds). With optimal move ordering, it reduces the effective branching factor from `b` to `sqrt(b)`, doubling the searchable depth.",
    "wrongOptionExplanations": {
      "0": "Alpha-Beta pruning does not change the game mechanics or inject randomness.",
      "2": "It is an on-the-fly tree search optimization, not an offline lookup table.",
      "3": "Adversarial game search assumes the opponent will always play their optimal move."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Alpha-Beta Pruning returns the EXACT same numerical result as Minimax while evaluating significantly fewer nodes."
  },
  {
    "id": "aiml-015",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Reasoning",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In classical rule-based expert systems, what is the fundamental difference between Forward Chaining and Backward Chaining inference strategies?",
    "codeSnippet": "",
    "options": [
      "Forward chaining is data-driven (starts from known facts and applies rules to deduce new facts); Backward chaining is goal-driven (starts with a hypothesis/goal and searches backward for supporting facts).",
      "Forward chaining is for neural networks; Backward chaining is for linear regression.",
      "Forward chaining only works with boolean false values.",
      "Backward chaining deletes facts from memory once they are verified."
    ],
    "correctAnswer": 0,
    "explanation": "Forward Chaining starts with available initial facts in the working memory and fires condition-action rules whose IF conditions are met, generating new conclusions (bottom-up/data-driven). Backward Chaining starts with a target hypothesis/query and works in reverse to verify if supporting premises exist in the knowledge base (top-down/goal-driven).",
    "wrongOptionExplanations": {
      "1": "Both chaining strategies are core techniques in symbolic AI and expert systems, not backprop in neural nets.",
      "2": "Forward chaining evaluates both true and false truth values in proposition logic.",
      "3": "Neither strategy destroys the integrity of the knowledge base during inference."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Forward Chaining = Data-driven (Facts -> Conclusion). Backward Chaining = Goal-driven (Hypothesis -> Supporting Facts)."
  },
  {
    "id": "aiml-016",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Reasoning",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Why is First-Order Logic (FOL / Predicate Logic) significantly more expressive than Propositional Logic in knowledge representation?",
    "codeSnippet": "",
    "options": [
      "Propositional logic only supports binary digits 0 and 1, whereas First-Order Logic runs on floating-point numbers.",
      "First-Order Logic introduces objects, relations (predicates), functions, and quantifiers (Universal \u2200 and Existential \u2203), allowing general rules about classes of entities.",
      "Propositional logic requires backpropagation, while First-Order Logic does not.",
      "First-Order Logic cannot represent negation or implication."
    ],
    "correctAnswer": 1,
    "explanation": "Propositional logic only declares atomic propositions (e.g. `P`, `Q`) that are either true or false. First-Order Logic (FOL) adds ontological commitments: the world consists of Objects (people, numbers), Relations/Predicates (`FatherOf(x, y)`), and Quantifiers (`\u2200x` for all, `\u2203x` for there exists), allowing compact expression of general rules like 'All humans are mortal' (`\u2200x (Human(x) -> Mortal(x))`).",
    "wrongOptionExplanations": {
      "0": "Both are formal symbolic logic systems operating on truth values, not floating-point arithmetic.",
      "2": "Neither formal logic system uses backpropagation.",
      "3": "FOL fully supports all standard boolean connectives including negation (\u00ac) and implication (->)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "First-Order Logic = Objects + Relations + Functions + Quantifiers (\u2200, \u2203). Much more expressive than Propositional Logic."
  },
  {
    "id": "aiml-017",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Reasoning",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "A medical diagnostic expert system (like MYCIN) consists of two decoupled components: the 'Knowledge Base' and the 'Inference Engine'. What is the primary software engineering advantage of separating these two components?",
    "codeSnippet": "",
    "options": [
      "It allows domain experts to add, update, or modify medical rules without rewriting or recompiling the underlying reasoning code.",
      "It eliminates the need for computer RAM during patient diagnoses.",
      "It guarantees that the system achieves 100% precision on all unseen viral diseases.",
      "It automatically converts Python code into assembly language."
    ],
    "correctAnswer": 0,
    "explanation": "Separating knowledge (domain rules and facts) from the reasoning mechanism (the inference engine) is a foundational software design principle of expert systems. It means non-programmer domain experts (e.g. doctors, lawyers) can edit the knowledge base as new discoveries emerge without modifying the reasoning engine.",
    "wrongOptionExplanations": {
      "1": "RAM is always required to store working facts and active rule stacks.",
      "2": "No diagnostic system can guarantee 100% precision across all unknown future diseases.",
      "3": "Expert systems are logic architectures, not code compilers."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Modularity: Knowledge Base contains domain expertise; Inference Engine is domain-independent logic processing."
  },
  {
    "id": "aiml-018",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Applications",
    "difficulty": "medium",
    "type": "application_based",
    "question": "What is the primary difference between Collaborative Filtering and Content-Based Filtering in modern e-commerce recommendation systems?",
    "codeSnippet": "",
    "options": [
      "Collaborative filtering recommends items based on the preferences and ratings of similar users; Content-based filtering recommends items that share attributes with items the user liked in the past.",
      "Collaborative filtering requires no user interaction history; Content-based filtering requires at least 1 million users.",
      "Content-based filtering cannot handle text descriptions of products.",
      "Collaborative filtering is only used for physical books, while Content-based filtering is for digital music."
    ],
    "correctAnswer": 0,
    "explanation": "Collaborative Filtering leverages crowd wisdom: 'Users who bought what you bought also enjoyed X' (user-item interaction matrix). Content-Based Filtering inspects item metadata: 'Since you watched an Action movie directed by Christopher Nolan, here is another Action movie directed by him' (item-attribute similarity).",
    "wrongOptionExplanations": {
      "1": "Collaborative filtering suffers from the 'Cold Start' problem precisely because it requires user interaction history.",
      "2": "Content-based filtering relies heavily on text descriptions, keywords, and TF-IDF/embeddings.",
      "3": "Both techniques are universally applied across video streaming, music, retail, and news."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Collaborative = Similarity between user behavior patterns. Content-Based = Similarity between item features."
  },
  {
    "id": "aiml-019",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Applications",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "Why do modern conversational AI chatbots powered by Large Language Models (LLMs) significantly outperform legacy rule-based pattern matching chatbots (such as ELIZA)?",
    "codeSnippet": "",
    "options": [
      "Rule-based bots can only recognize exact keyword matches and decision trees; LLMs understand linguistic context, semantic meaning, and intent via deep transformer self-attention.",
      "Rule-based bots require a GPU supercomputer, whereas LLMs run inside standard CPU registers.",
      "Legacy bots are completely non-deterministic, while LLMs follow fixed hardcoded regex rules.",
      "LLMs store exact pre-written responses for every possible English sentence ever uttered."
    ],
    "correctAnswer": 0,
    "explanation": "Rule-based systems (like ELIZA or AIML) rely on rigid regular expressions, scripted keywords, and fixed decision trees; if a user enters a slightly rephrased query, the bot fails. Modern LLM chatbots use attention-based transformer neural architectures trained on billions of tokens to comprehend semantics, idioms, context, and complex reasoning.",
    "wrongOptionExplanations": {
      "1": "Inversion: LLMs require powerful GPU accelerators, whereas rule-based regex bots run on minimal CPU.",
      "2": "Rule-based bots follow hardcoded regex; LLMs generate probabilistic token distributions.",
      "3": "LLMs do not store pre-written sentences; they generate dynamic responses via predictive token probability distributions."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Rule-based = Keyword pattern matching & rigid trees. Modern Conversational AI = Semantic context & deep transformer attention."
  },
  {
    "id": "aiml-020",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Artificial Intelligence",
    "subtopic": "AI Applications",
    "difficulty": "hard",
    "type": "application_based",
    "question": "In an autonomous vehicle's real-time computer vision perception stack, what is the logical progression of tasks required to detect a pedestrian and determine whether they are inside the vehicle's driving path?",
    "codeSnippet": "",
    "options": [
      "Sensor Image Capture -> Preprocessing (Denoising/Normalization) -> Object Detection (Bounding Boxes & Class Labels) -> Semantic Segmentation / Depth Estimation -> Trajectory & Collision Prediction",
      "Collision Prediction -> Image Capture -> Sensor Calibration -> Pixel Rendering",
      "Data Leakage Inspection -> Feature Selection -> Output Classification -> Image Compression",
      "Softmax Activation -> Backpropagation -> Gradient Descent -> Image Capture"
    ],
    "correctAnswer": 0,
    "explanation": "A computer vision perception pipeline follows a structured physical-to-semantic progression: 1. Raw sensor frames are captured by cameras/LIDAR, 2. Preprocessed (resized, normalized, denoised), 3. Object detection models identify pedestrians and place bounding boxes, 4. Segmentation/depth estimation determines distance, and 5. Trajectory prediction determines collision risk.",
    "wrongOptionExplanations": {
      "1": "Collision prediction is the final safety decision, which cannot occur before sensors even capture images.",
      "2": "Feature selection and data leakage are tabular training concepts, not an embedded perception pipeline.",
      "3": "Backpropagation and gradient descent occur during offline training, not real-time inference on the vehicle."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Sensors -> Preprocessing -> Feature Extraction/Detection -> Depth/Tracking -> Decision Action."
  },
  {
    "id": "aiml-021",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "ML Fundamentals",
    "difficulty": "easy",
    "type": "scenario_based",
    "question": "A banking institution wants to build two machine learning systems: (1) A system to predict whether a loan applicant will default (based on historical loans with known repayment outcomes), and (2) A system to group credit card customers into behavioral spending segments with no pre-assigned labels. Which paradigm does each task represent?",
    "codeSnippet": "",
    "options": [
      "(1) Unsupervised Learning, (2) Supervised Learning",
      "(1) Supervised Learning, (2) Unsupervised Learning",
      "Both are Reinforcement Learning tasks",
      "Both are Semi-Supervised Classification tasks"
    ],
    "correctAnswer": 1,
    "explanation": "Task 1 has labeled historical outcomes (default: Yes/No), which is the definition of Supervised Learning (specifically binary classification). Task 2 has unlabeled customer data and seeks inherent groupings without ground-truth labels, which is Unsupervised Learning (clustering).",
    "wrongOptionExplanations": {
      "0": "Inverts the definitions; loan default has explicit target labels, making it supervised.",
      "2": "Reinforcement learning involves an agent interacting with an environment to maximize cumulative reward, which is not applicable here.",
      "3": "Neither task involves combining a tiny labeled set with massive unlabeled data for semi-supervised training."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "If ground-truth target labels (y) exist in training data -> Supervised. If discovering hidden groupings without labels -> Unsupervised."
  },
  {
    "id": "aiml-022",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "ML Fundamentals",
    "difficulty": "easy",
    "type": "code_or_pseudocode",
    "question": "In a tabular dataset used to predict housing prices with columns `[SquareFootage, Bedrooms, Bathrooms, ZipCode, SalePrice]`, what are `SquareFootage, Bedrooms, Bathrooms, ZipCode` and `SalePrice` formally termed in machine learning parlance?",
    "codeSnippet": "",
    "options": [
      "`SquareFootage...` are Hyperparameters; `SalePrice` is a Loss Function.",
      "`SquareFootage...` are Features (independent variables X); `SalePrice` is the Target/Label (dependent variable y).",
      "`SquareFootage...` are Weights; `SalePrice` is the Bias term.",
      "`SquareFootage...` are Clusters; `SalePrice` is a Centroid."
    ],
    "correctAnswer": 1,
    "explanation": "The inputs used to make predictions (`SquareFootage`, `Bedrooms`, etc.) are Features (input matrix X). The outcome variable being predicted (`SalePrice`) is the Target variable or Label (ground-truth vector y).",
    "wrongOptionExplanations": {
      "0": "Hyperparameters are external model configurations (like tree depth or learning rate), not dataset columns.",
      "2": "Weights and bias are internal mathematical parameters learned by the model during training.",
      "3": "Clusters and centroids belong to K-Means clustering, not supervised tabular regression schemas."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Input matrix = Features (X); Predicted output = Label / Target (y)."
  },
  {
    "id": "aiml-023",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "ML Fundamentals",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What is the primary technical distinction between a Regression task and a Classification task in Supervised Learning?",
    "codeSnippet": "",
    "options": [
      "Regression predicts a continuous quantitative numerical value; Classification predicts a discrete categorical class label.",
      "Regression only works on images, whereas Classification only works on numbers.",
      "Regression models never have errors, while Classification models always have errors.",
      "Classification requires neural networks, whereas Regression cannot use neural networks."
    ],
    "correctAnswer": 0,
    "explanation": "In supervised learning, if the target variable `y` is continuous (e.g. salary, temperature, stock price), the problem is Regression. If the target `y` belongs to discrete classes or categories (e.g. spam/not spam, disease type A/B/C), it is Classification.",
    "wrongOptionExplanations": {
      "1": "Both regression and classification can take images, text, audio, or numbers as inputs.",
      "2": "All real-world statistical models incur residual errors.",
      "3": "Neural networks can be configured for regression (linear output with MSE loss) or classification (Softmax with cross-entropy)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Continuous numeric target = Regression. Discrete category/class target = Classification."
  },
  {
    "id": "aiml-024",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "ML Fundamentals",
    "difficulty": "medium",
    "type": "application_based",
    "question": "In Reinforcement Learning (RL), which tuple of components represents the core Markov Decision Process (MDP) interaction loop?",
    "codeSnippet": "",
    "options": [
      "Agent, Environment, State, Action, Reward",
      "Features, Labels, Weights, Biases, Epochs",
      "Centroid, Cluster, Inertia, Silhouette, Distance",
      "Token, Attention, Transformer, Prompt, Context"
    ],
    "correctAnswer": 0,
    "explanation": "In RL, an Agent observes the current State `S` of an Environment, selects an Action `A` according to its policy, transitions to a new state `S'`, and receives a scalar numerical Reward `R`. The goal is to maximize cumulative future discounted reward.",
    "wrongOptionExplanations": {
      "1": "Features, labels, and weights define classical supervised parametric learning.",
      "2": "Centroids and inertia describe unsupervised clustering (K-Means).",
      "3": "Tokens, attention, and transformers describe natural language processing architectures."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "RL is defined by an Agent taking Actions in an Environment to transition States and maximize Rewards."
  },
  {
    "id": "aiml-025",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "ML Fundamentals",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "A hospital has 500,000 medical X-ray scans, but professional radiologists have only had time to manually label 1,000 of them. Manual labeling is extremely expensive and time-consuming. Which machine learning paradigm is specifically suited to leverage both the small labeled set and the vast unlabeled pool?",
    "codeSnippet": "",
    "options": [
      "Semi-Supervised Learning",
      "Pure K-Means Clustering",
      "Simple Linear Regression",
      "Exhaustive Breadth-First Search"
    ],
    "correctAnswer": 0,
    "explanation": "Semi-Supervised Learning combines a small amount of labeled data with a large amount of unlabeled data during training. Techniques like pseudo-labeling, self-training, or contrastive pre-training leverage the structural distribution of the unlabeled data to dramatically boost performance over training on the 1,000 labels alone.",
    "wrongOptionExplanations": {
      "1": "Pure clustering ignores the valuable 1,000 verified medical labels completely.",
      "2": "Linear regression cannot handle complex raw X-ray pixel inputs directly without severe underfitting.",
      "3": "Breadth-first search is a graph traversal algorithm, not an image classification learning paradigm."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Tiny labeled dataset + massive unlabeled dataset = Semi-Supervised Learning (common in healthcare and speech)."
  },
  {
    "id": "aiml-026",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Regression",
    "difficulty": "easy",
    "type": "calculation_based",
    "question": "A trained simple linear regression model is expressed by the equation: `y = 2.5 * x + 10`. If an input instance has feature value `x = 6`, what is the predicted target value `y`?",
    "codeSnippet": "",
    "options": [
      "15.0",
      "25.0",
      "21.0",
      "35.0"
    ],
    "correctAnswer": 1,
    "explanation": "Substitute `x = 6` into the linear equation: `y = (2.5 * 6) + 10 = 15.0 + 10 = 25.0`.",
    "wrongOptionExplanations": {
      "0": "15.0 is `2.5 * 6`, forgetting to add the intercept/bias term (10).",
      "2": "21.0 is an arithmetic error.",
      "3": "35.0 is `(2.5 * 10) + 10`."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Linear formula: `y = m*x + c` (or `y = w*x + b`). Always multiply slope by feature before adding intercept."
  },
  {
    "id": "aiml-027",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Regression",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Why is the Mean Squared Error (MSE) cost function squared (`(y_actual - y_pred)^2`) rather than taking the simple sum of raw errors (`(y_actual - y_pred)`) in Ordinary Least Squares regression?",
    "codeSnippet": "",
    "options": [
      "Squaring ensures positive and negative errors do not cancel each other out, penalizes larger outliers more heavily, and provides a smooth differentiable convex curve for gradient descent.",
      "Squaring converts categorical text variables into integers.",
      "Squaring removes the need for an intercept term.",
      "Squaring guarantees that the R-squared score is always exactly 1.0."
    ],
    "correctAnswer": 0,
    "explanation": "If raw errors were summed, positive errors (+5) and negative errors (-5) would cancel out to 0, falsely indicating a perfect fit. Squaring ensures all errors are positive, heavily penalizes large mistakes (an error of 10 costs 100, error of 2 costs 4), and yields a continuous, convex parabola whose derivative is easily computed for optimization.",
    "wrongOptionExplanations": {
      "1": "Loss functions evaluate numerical predictions; categorical variables must already be encoded before model fitting.",
      "2": "The bias/intercept term is still required to shift the regression line vertically.",
      "3": "R-squared depends on data variance and residuals, and is rarely exactly 1.0 on real data."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Squaring prevents negative/positive error cancellation and penalizes large outlier errors quadratically."
  },
  {
    "id": "aiml-028",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Regression",
    "difficulty": "medium",
    "type": "application_based",
    "question": "A data scientist evaluates a multiple linear regression model on a test set and obtains a Coefficient of Determination (R\u00b2 score) of 0.82. What does this metric mean in business terms?",
    "codeSnippet": "",
    "options": [
      "The model made accurate predictions on exactly 82 out of 100 test samples.",
      "82% of the variance in the target variable is explained by the independent features in the model.",
      "The model has an 18% false positive rate.",
      "The learning rate was set to 0.82 during model training."
    ],
    "correctAnswer": 1,
    "explanation": "R\u00b2 (Coefficient of Determination) measures the proportion of variance in the dependent variable that is predictable from the independent variables. An R\u00b2 of 0.82 means 82% of the total variance in the target is accounted for by the regression model (relative to a simple horizontal mean baseline).",
    "wrongOptionExplanations": {
      "0": "R\u00b2 is not classification accuracy; regression targets are continuous, not binary counts of correct/incorrect.",
      "2": "False positive rate applies to binary classification confusion matrices, not continuous regression.",
      "3": "Learning rate is an optimization hyperparameter, completely unrelated to the R\u00b2 evaluation metric."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "R\u00b2 = Explained Variance / Total Variance. It is NOT accuracy percentage."
  },
  {
    "id": "aiml-029",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Regression",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "In a linear regression model predicting house prices, two features\u2014`SquareMeters` and `SquareFeet`\u2014are both included. Because `1 sq meter = 10.764 sq feet`, these two columns have a correlation of r = 1.0. What statistical pathology does this introduce into the linear regression model?",
    "codeSnippet": "",
    "options": [
      "Underfitting due to insufficient feature variance.",
      "Perfect Multicollinearity, leading to unstable coefficient estimates with inflated standard errors and inability to invert the `(X^T X)` matrix.",
      "Vanishing gradient problem in the output neuron.",
      "The model automatically converts into a classification tree."
    ],
    "correctAnswer": 1,
    "explanation": "When two or more features are perfectly collinear, the feature matrix `X` is not full rank, making `(X^T X)` singular (non-invertible) in closed-form OLS `w = (X^T X)^(-1) X^T y`. In numerical solvers, it causes extreme coefficient instability, massive standard errors, and erratic predictions.",
    "wrongOptionExplanations": {
      "0": "Multicollinearity is a redundancy issue, not an issue of insufficient variance.",
      "2": "Vanishing gradients occur in deep neural networks with saturating activations, not Ordinary Least Squares.",
      "3": "Linear regression models never morph into decision trees."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Multicollinearity = Highly correlated independent variables. Detected via Variance Inflation Factor (VIF > 5 or 10)."
  },
  {
    "id": "aiml-030",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Regression",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "What is the critical difference between L1 Regularization (Lasso) and L2 Regularization (Ridge) regarding feature selection in regression models?",
    "codeSnippet": "",
    "options": [
      "Lasso (L1) adds the absolute sum of weights to the loss, driving less important feature coefficients to exactly zero (performing automatic feature selection); Ridge (L2) adds squared weights, shrinking coefficients close to zero but never exactly zero.",
      "Ridge (L2) sets coefficients to zero, whereas Lasso (L1) increases coefficients to infinity.",
      "Lasso can only be used with categorical targets; Ridge is for continuous targets.",
      "Ridge regularization eliminates the need for gradient descent."
    ],
    "correctAnswer": 0,
    "explanation": "Lasso adds an L1 penalty `\u03bb * \u03a3|w_i|`, creating diamond-shaped geometric constraint corners that force non-contributing coefficients to become exactly 0.0, yielding a sparse model with automatic feature selection. Ridge adds an L2 penalty `\u03bb * \u03a3(w_i^2)`, shrinking coefficients asymptotically towards zero but preserving all features.",
    "wrongOptionExplanations": {
      "1": "Inverts the true behavior: L1 (Lasso) produces exact zeros; L2 (Ridge) shrinks smoothly without exact zeros.",
      "2": "Both Ridge and Lasso are regression regularization techniques for continuous targets (and can be applied to logistic regression).",
      "3": "Ridge regression still requires numerical optimization or matrix inversion."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "L1 Lasso = Absolute weights -> Exact Zeros (Feature Selection). L2 Ridge = Squared weights -> Smooth Shrinkage."
  },
  {
    "id": "aiml-031",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Classification",
    "difficulty": "easy",
    "type": "code_or_pseudocode",
    "question": "Despite containing 'Regression' in its name, Logistic Regression is fundamentally a classification algorithm. How does it convert raw linear outputs `z = w*x + b` into valid probabilities between 0 and 1?",
    "codeSnippet": "",
    "options": [
      "By applying the Sigmoid (Logistic) activation function `\u03c3(z) = 1 / (1 + e^(-z))`.",
      "By rounding all numbers to the nearest multiple of 10.",
      "By dividing the prediction by the total number of features.",
      "By passing the output through a ReLU activation function."
    ],
    "correctAnswer": 0,
    "explanation": "Logistic regression computes a linear combination `z = w*x + b` and passes `z` through the Sigmoid activation function `\u03c3(z) = 1 / (1 + e^(-z))`. The sigmoid curve maps any real-valued number from `-\u221e` to `+\u221e` into a bounded probability output between `(0, 1)`.",
    "wrongOptionExplanations": {
      "1": "Rounding to multiples of 10 cannot produce fractional probabilities in the range `[0, 1]`.",
      "2": "Dividing by feature count does not bound numbers between 0 and 1.",
      "3": "ReLU outputs `[0, \u221e)` and is unbounded on the positive axis, making it invalid for probabilities."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Logistic Regression uses Sigmoid `1 / (1 + e^-z)` to map linear values into `(0, 1)` probabilities."
  },
  {
    "id": "aiml-032",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Classification",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "A cancer detection model outputs the probability that a biopsy sample is malignant. By default, the decision threshold is 0.50. Why might a hospital's lead oncologist decide to lower the classification threshold to 0.20?",
    "codeSnippet": "",
    "options": [
      "To maximize precision at the cost of missing true cancer cases.",
      "To increase Recall (sensitivity), ensuring almost all true cancer cases are flagged for further testing, even if it increases false alarms (false positives).",
      "To speed up the GPU inference time of the model.",
      "To force the model to behave like an unsupervised K-Means cluster."
    ],
    "correctAnswer": 1,
    "explanation": "In medical screening, a False Negative (missing a patient who has cancer) is fatal, while a False Positive (calling a healthy patient in for a biopsy) causes mild anxiety but saves lives. Lowering the decision threshold from 0.50 to 0.20 makes the model more aggressive, drastically increasing Recall (Sensitivity).",
    "wrongOptionExplanations": {
      "0": "Lowering the threshold decreases precision because more negative cases are flagged as positive.",
      "2": "Changing a scalar comparison threshold (`p > 0.20`) has zero effect on GPU execution speed.",
      "3": "Threshold adjustments have no relation to clustering."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "High-risk scenarios (Cancer, Fraud): Lower threshold to maximize RECALL (minimize False Negatives)."
  },
  {
    "id": "aiml-033",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Classification",
    "difficulty": "medium",
    "type": "output_or_prediction",
    "question": "Consider the following Python snippet using scikit-learn:\n\n```python\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nprobs = model.predict_proba(X_test)\n```\nWhat is the shape and structure of the returned `probs` array if `X_test` contains 100 samples and there are 2 classes (0 and 1)?",
    "codeSnippet": "",
    "options": [
      "A 1D array of length 100 containing boolean True/False values.",
      "A 2D array of shape `(100, 2)` where row `i` contains `[P(class=0), P(class=1)]` summing to 1.0.",
      "A single scalar float representing overall training accuracy.",
      "A 3D tensor of shape `(100, 2, 2)`."
    ],
    "correctAnswer": 1,
    "explanation": "`predict_proba()` returns a 2D numpy array of shape `(n_samples, n_classes)`. For 100 test samples and binary classification, it returns shape `(100, 2)` where each row contains the predicted probabilities for class 0 and class 1, which sum to 1.0.",
    "wrongOptionExplanations": {
      "0": "`model.predict()` returns discrete 1D predicted class labels (0 or 1), not `predict_proba()`.",
      "2": "`model.score(X_test, y_test)` returns scalar accuracy, not `predict_proba()`.",
      "3": "Standard scikit-learn tabular classifiers do not return 3D tensors."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "`predict_proba()` -> `(n_samples, n_classes)`. `probs[:, 1]` extracts positive class probability for ROC-AUC."
  },
  {
    "id": "aiml-034",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Classification",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "How does the 'One-vs-Rest' (OvR / One-vs-All) strategy enable a purely binary classifier (like basic Logistic Regression or binary SVM) to classify an instance across 5 distinct categories (Cat, Dog, Bird, Fish, Horse)?",
    "codeSnippet": "",
    "options": [
      "It trains 5 separate binary models, where each model evaluates one specific class versus all other four classes combined.",
      "It trains 10 pairwise models comparing every class against every other class.",
      "It averages the ASCII values of the class names.",
      "It randomly picks one of the five classes on each prediction."
    ],
    "correctAnswer": 0,
    "explanation": "In One-vs-Rest (OvR), for `K` classes, exactly `K` binary classifiers are trained. Classifier 1 learns Cat vs [Not Cat], Classifier 2 learns Dog vs [Not Dog], etc. During prediction, the instance is passed through all `K` models and the class with the highest confidence score is selected.",
    "wrongOptionExplanations": {
      "1": "Training pairwise models (`K*(K-1)/2 = 10` models) is the One-vs-One (OvO) strategy, not One-vs-Rest.",
      "2": "Machine learning classifiers learn statistical weights, not ASCII character sums.",
      "3": "OvR is deterministic and picks the highest predicted probability."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "For K classes: One-vs-Rest (OvR) trains K models. One-vs-One (OvO) trains K*(K-1)/2 models."
  },
  {
    "id": "aiml-035",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Decision Trees",
    "difficulty": "hard",
    "type": "calculation_based",
    "question": "A decision tree node contains 10 data samples: 6 belonging to Class A and 4 belonging to Class B. The formula for Gini Impurity is `Gini = 1 - \u03a3(p_i^2)`. What is the exact Gini impurity of this node?",
    "codeSnippet": "",
    "options": [
      "0.0",
      "0.48",
      "0.52",
      "1.0"
    ],
    "correctAnswer": 1,
    "explanation": "Compute class probabilities: `p(A) = 6/10 = 0.6`, `p(B) = 4/10 = 0.4`. Then apply formula: `Gini = 1 - (0.6^2 + 0.4^2) = 1 - (0.36 + 0.16) = 1 - 0.52 = 0.48`.",
    "wrongOptionExplanations": {
      "0": "0.0 indicates a perfectly pure node (100% of samples belong to one class).",
      "2": "0.52 is `0.6^2 + 0.4^2`, forgetting to subtract from 1.",
      "3": "1.0 is an impossible Gini value for binary classification (maximum binary Gini is 0.50 at a 50/50 split)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Maximum binary Gini impurity is 0.50 (equal split 50/50). Pure node Gini is 0.0."
  },
  {
    "id": "aiml-036",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Decision Trees",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In the ID3 decision tree algorithm, what is 'Information Gain' and how is it used to choose the best feature to split a node?",
    "codeSnippet": "",
    "options": [
      "Information Gain is the reduction in Entropy achieved by splitting the dataset on a feature; the algorithm chooses the feature with the highest Information Gain.",
      "Information Gain is the execution speed of the CPU during matrix multiplication.",
      "Information Gain is the ratio of training data to testing data.",
      "Information Gain measures how many missing values exist in a column."
    ],
    "correctAnswer": 0,
    "explanation": "Entropy measures uncertainty or disorder in a dataset. Information Gain is the difference between the parent node's entropy and the weighted average entropy of the child nodes after splitting: `Gain = Entropy(parent) - Entropy(children)`. The decision tree selects the feature that yields the maximum Information Gain.",
    "wrongOptionExplanations": {
      "1": "Information Gain is an information theory metric, not hardware clock speed.",
      "2": "Dataset split ratio is a preprocessing configuration, completely separate from node purity.",
      "3": "Information Gain assumes complete or imputed data and measures label impurity."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Information Gain = Parent Entropy - Children Entropy. High Information Gain = Cleanest split."
  },
  {
    "id": "aiml-037",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Decision Trees",
    "difficulty": "medium",
    "type": "debugging_or_troubleshooting",
    "question": "A junior data scientist trains an unconstrained `DecisionTreeClassifier(max_depth=None)` on a training set. The model achieves 100% accuracy on the training data, but drops to 61% accuracy on the test set. Which regularization hyperparameter should be tuned to stop the tree from overfitting?",
    "codeSnippet": "",
    "options": [
      "Set `max_depth` to a smaller value (e.g. 5) and increase `min_samples_split`.",
      "Increase `max_depth` to 1000.",
      "Multiply all input numbers by 100.",
      "Delete the testing set and evaluate only on training data."
    ],
    "correctAnswer": 0,
    "explanation": "Unconstrained decision trees grow until every leaf is pure, memorizing noise and outlier points (severe overfitting / high variance). Limiting tree complexity via pre-pruning hyperparameters like restricting `max_depth`, increasing `min_samples_split`, or increasing `min_samples_leaf` forces the tree to learn generalizable rules.",
    "wrongOptionExplanations": {
      "1": "Increasing `max_depth` exacerbates overfitting by allowing deeper memorization.",
      "2": "Decision trees are invariant to monotonic feature scaling; multiplying by 100 has zero effect.",
      "3": "Evaluating only on training data conceals the overfitting without fixing the generalization failure."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "To prevent Decision Tree overfitting: Reduce `max_depth`, Increase `min_samples_split` / `min_samples_leaf`."
  },
  {
    "id": "aiml-038",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Decision Trees",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "Why do Decision Tree algorithms (and tree-based ensembles like Random Forest) NOT require feature scaling (such as StandardScaler or MinMaxScaler)?",
    "codeSnippet": "",
    "options": [
      "Because trees internally convert all numbers into complex numbers.",
      "Because tree splitting evaluates monotonic ordering and individual feature thresholds (`X_i <= threshold`) one feature at a time, making splits invariant to linear or monotonic scale transformations.",
      "Because decision trees only accept binary categorical inputs.",
      "Because decision trees run on GPUs that automatically scale tensors."
    ],
    "correctAnswer": 1,
    "explanation": "Tree splits operate along orthogonal feature axes: `Feature_A <= 50,000`. If `Feature_A` is divided by 1,000 (rescaled to 50), the split simply occurs at `<= 50`. The ordering of values remains identical, producing the exact same information gain and identical splits. Unlike distance-based models (KNN, SVM), trees are scale-invariant.",
    "wrongOptionExplanations": {
      "0": "Trees operate on standard real-valued numbers.",
      "2": "Decision trees natively handle continuous numerical features through threshold testing.",
      "3": "Hardware architecture does not alter mathematical scale sensitivity."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Tree models do NOT require feature scaling! Distance models (KNN, SVM, K-Means) and Gradient Descent DO."
  },
  {
    "id": "aiml-039",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Random Forest",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is 'Bootstrap Aggregation' (Bagging) as implemented in the Random Forest algorithm?",
    "codeSnippet": "",
    "options": [
      "Training individual base decision trees on random subsets of training data sampled with replacement, and aggregating their predictions via majority voting or averaging.",
      "Sequentially training trees where each tree corrects the residual errors of the previous tree.",
      "Replacing all decision trees with a single linear regression equation.",
      "Downloading pre-trained weights from the cloud via a bootstrap script."
    ],
    "correctAnswer": 0,
    "explanation": "Bagging (Bootstrap Aggregation) creates multiple subsets of the training set by sampling `N` instances with replacement (bootstrap sample). An independent decision tree is trained on each sample. During inference, their predictions are aggregated (majority voting for classification, mean averaging for regression) to drastically reduce model variance.",
    "wrongOptionExplanations": {
      "1": "Sequentially training trees on previous residual errors is Boosting (Gradient Boosting / XGBoost), not Bagging.",
      "2": "Random Forest is an ensemble of many decision trees, not a single linear model.",
      "3": "Bootstrap is a statistical resampling technique, not an internet downloading script."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Bagging = Bootstrap sampling (with replacement) + Aggregation (Voting/Mean). Reduces Variance."
  },
  {
    "id": "aiml-040",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Random Forest",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "How does Random Forest improve upon standard Bagged Decision Trees to ensure individual trees are decorrelated?",
    "codeSnippet": "",
    "options": [
      "By forcing all trees to share the exact same root node.",
      "By considering only a random subset of features (typically `sqrt(total_features)`) at each node split, preventing dominant strong features from creating identical trees.",
      "By training trees on different programming languages.",
      "By deleting 50% of the training rows permanently."
    ],
    "correctAnswer": 1,
    "explanation": "In standard bagging, if one feature is overwhelmingly predictive, almost all individual trees will choose that same feature for their top split, making the trees correlated. Random Forest injects feature randomness: at each split, the tree selects from a random subset of `m` features (default `sqrt(p)` for classification). This decorrelates the trees, maximizing ensemble variance reduction.",
    "wrongOptionExplanations": {
      "0": "Sharing the same root node would increase correlation between trees, destroying the ensemble benefit.",
      "2": "Ensemble diversity is statistical and algorithmic, not related to programming syntax.",
      "3": "Rows are sampled with replacement, not permanently erased."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Random Forest = Bagging (random row sampling) + Random feature subspace selection at each split."
  },
  {
    "id": "aiml-041",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Random Forest",
    "difficulty": "hard",
    "type": "code_or_pseudocode",
    "question": "What is the 'Out-of-Bag' (OOB) evaluation score in Random Forest, and why is it useful?",
    "codeSnippet": "",
    "options": [
      "It is the percentage of training memory saved by garbage collection.",
      "Because each bootstrap sample leaves out roughly 36.8% of training samples (the out-of-bag instances), these unseen samples can be used to evaluate the model without needing a separate validation set.",
      "It measures how quickly trees are pruned after training completes.",
      "It calculates the distance between tree leaves."
    ],
    "correctAnswer": 1,
    "explanation": "When sampling `N` items with replacement, the probability of an item NOT being chosen is `(1 - 1/N)^N \u2248 1/e \u2248 36.8%`. For each tree, ~37% of data is 'out-of-bag'. Evaluating each sample on only the trees that did not train on it yields the OOB score, providing an unbiased validation estimate without setting aside a validation split.",
    "wrongOptionExplanations": {
      "0": "OOB is an accuracy validation metric, not an OS memory management tool.",
      "2": "Random Forests generally grow trees deep without pruning.",
      "3": "OOB evaluates validation accuracy, not tree leaf distance."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "OOB evaluation acts as built-in cross-validation (~36.8% of samples are unseen by each individual tree)."
  },
  {
    "id": "aiml-042",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "KNN",
    "difficulty": "easy",
    "type": "calculation_based",
    "question": "Two data points in a 2-dimensional feature space are `P1 = (2, 3)` and `P2 = (5, 7)`. What is the Euclidean distance between `P1` and `P2`?",
    "codeSnippet": "",
    "options": [
      "7.0",
      "5.0",
      "25.0",
      "3.5"
    ],
    "correctAnswer": 1,
    "explanation": "Euclidean distance formula: `d = sqrt((x2 - x1)^2 + (y2 - y1)^2)`. Here: `d = sqrt((5 - 2)^2 + (7 - 3)^2) = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5.0`.",
    "wrongOptionExplanations": {
      "0": "7.0 is the Manhattan distance: `|5-2| + |7-3| = 3 + 4 = 7`.",
      "2": "25.0 is the squared distance before taking the square root.",
      "3": "3.5 is an arithmetic error."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Euclidean distance is the straight-line Pythagorean distance: `sqrt(dx^2 + dy^2)`. (3-4-5 right triangle)."
  },
  {
    "id": "aiml-043",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "KNN",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In the K-Nearest Neighbors (KNN) classification algorithm, what is the consequence of choosing an extremely small value of K (e.g. `K = 1`) versus a very large value of K (e.g. `K = N`, total samples)?",
    "codeSnippet": "",
    "options": [
      "`K = 1` leads to High Variance (overfitting, highly sensitive to noise); `K = N` leads to High Bias (underfitting, always predicting the majority class).",
      "`K = 1` always underfits; `K = N` always overfits.",
      "The value of K has zero effect on the decision boundary.",
      "`K = 1` converts the algorithm into Linear Regression."
    ],
    "correctAnswer": 0,
    "explanation": "At `K = 1`, the decision boundary wraps tightly around every single training sample including noise and outliers, resulting in High Variance (overfitting). As `K` increases, boundaries become smoother. At `K = N`, every neighbor is included, so the model simply outputs the global majority class everywhere (High Bias / underfitting).",
    "wrongOptionExplanations": {
      "1": "Inverts the relationship: Small K = Overfitting (High Variance); Large K = Underfitting (High Bias).",
      "2": "K directly dictates decision boundary smoothness and model complexity.",
      "3": "KNN remains a non-parametric neighbor algorithm regardless of K."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Small K (K=1) = Overfitting (Complex boundary, High Variance). Large K = Underfitting (Smooth, High Bias)."
  },
  {
    "id": "aiml-044",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "KNN",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "A developer trains a KNN model on customer data with two features: `Age` (ranging from 18 to 70) and `AnnualIncome` (ranging from $20,000 to $250,000). The developer forgets to scale the features. What catastrophic failure occurs during neighbor distance calculation?",
    "codeSnippet": "",
    "options": [
      "The distance metric will be overwhelmingly dominated by `AnnualIncome` because its numeric scale is thousands of times larger than `Age`, rendering `Age` completely ineffective.",
      "The code will throw a `ZeroDivisionError`.",
      "The KNN model will automatically delete the `Age` column.",
      "KNN will run 1000 times faster."
    ],
    "correctAnswer": 0,
    "explanation": "KNN computes geometric distance (e.g. Euclidean). A difference of 10 years in age yields `(10)^2 = 100`, while a difference of $5,000 in income yields `(5000)^2 = 25,000,000`. The income feature completely drowns out age simply due to arbitrary measurement units. Feature scaling (e.g. `StandardScaler`) is mandatory for distance-based algorithms.",
    "wrongOptionExplanations": {
      "1": "Computing distances with large numbers does not cause division by zero.",
      "2": "Scikit-learn algorithms never drop columns autonomously.",
      "3": "Scale differences have no effect on algorithmic time complexity."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "MANDATORY RULE: Any distance-based algorithm (KNN, K-Means, SVM) MUST undergo Feature Scaling first!"
  },
  {
    "id": "aiml-045",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "SVM",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What is the primary optimization objective of a linear Support Vector Machine (SVM) classifier, and what are 'Support Vectors'?",
    "codeSnippet": "",
    "options": [
      "To find a decision boundary (hyperplane) that maximizes the geometric margin (separation distance) between the nearest data points of opposing classes; the nearest data points on the margin boundaries are the Support Vectors.",
      "To pass a line through the center of every data point with zero residual variance.",
      "To group data points into 10 clusters using centroid updates.",
      "To calculate the probability that an email is spam using Bayes theorem."
    ],
    "correctAnswer": 0,
    "explanation": "SVM is a maximum-margin classifier. It searches for the optimal hyperplane that separates classes with the maximum possible margin distance. The critical data points lying right on the edge of the margin gutters are called Support Vectors; if any other data points are moved, the boundary does not change, making SVM robust.",
    "wrongOptionExplanations": {
      "1": "Passing through every point is interpolation/overfitting, not classification margin maximization.",
      "2": "Centroid updates describe K-Means clustering.",
      "3": "Bayes theorem is the foundation of Naive Bayes, not Support Vector Machines."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "SVM maximizes the margin (gutter width). Only the Support Vectors determine the decision boundary!"
  },
  {
    "id": "aiml-046",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "SVM",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "In Support Vector Machines, what is the 'Kernel Trick' (e.g. RBF / Polynomial Kernel) and why is it computationally revolutionary?",
    "codeSnippet": "",
    "options": [
      "It maps linearly non-separable input data into a higher-dimensional space where a linear hyperplane can separate the classes, without ever explicitly computing the coordinates in that high-dimensional space.",
      "It replaces floating-point calculations with integer bitshifts.",
      "It removes all outliers automatically before fitting.",
      "It converts the SVM into a deep convolutional neural network."
    ],
    "correctAnswer": 0,
    "explanation": "If data is not linearly separable in 2D, mapping it to a higher dimension (e.g. 3D or infinite-D) can make it linearly separable. Computing high-dimensional coordinates is computationally prohibitive. The 'Kernel Trick' uses a kernel function `K(x, z)` that computes the dot product in high-dimensional space directly using low-dimensional inputs, avoiding expensive coordinate transformations.",
    "wrongOptionExplanations": {
      "1": "Kernel methods use dot products and exponentials, not integer bitshifts.",
      "2": "Kernels do not remove outliers; soft-margin SVM handles outliers via hyperparameter `C`.",
      "3": "SVM with kernels remains a convex optimization problem, completely distinct from CNNs."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Kernel Trick computes inner products in high-dimensional feature space WITHOUT explicitly transforming data."
  },
  {
    "id": "aiml-047",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "SVM",
    "difficulty": "hard",
    "type": "code_or_pseudocode",
    "question": "In scikit-learn's `SVC(C=...)`, what is the effect of setting a very large value of `C` versus a small value of `C`?",
    "codeSnippet": "",
    "options": [
      "Large `C` heavily penalizes misclassifications, leading to a narrower margin and potential overfitting; Small `C` tolerates more margin violations, yielding a wider margin and higher bias.",
      "Large `C` forces the model to ignore all features; Small `C` creates 100 clusters.",
      "Large `C` speeds up training time by 90%.",
      "The `C` parameter has zero effect on the margin width."
    ],
    "correctAnswer": 0,
    "explanation": "In soft-margin SVM, `C` is the regularization hyperparameter controlling the trade-off between margin width and classification errors. Large `C` assigns a severe penalty to margin violations, forcing a hard, narrow margin (risk of Overfitting / High Variance). Small `C` allows more slack/violations, creating a wider, softer margin (risk of Underfitting / High Bias).",
    "wrongOptionExplanations": {
      "1": "`C` does not drop features or create clusters.",
      "2": "Large `C` often increases optimization convergence time because the solver must satisfy stricter constraints.",
      "3": "`C` is the primary hyperparameter governing margin slackness."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Large C = Strict penalty, Narrow margin, Overfitting risk. Small C = Soft penalty, Wide margin, Underfitting risk."
  },
  {
    "id": "aiml-048",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Clustering",
    "difficulty": "medium",
    "type": "application_based",
    "question": "What is the correct iterative sequence of steps executed by the standard K-Means clustering algorithm after initial centroid initialization?",
    "codeSnippet": "",
    "options": [
      "1. Assign each data point to its closest centroid -> 2. Recompute centroids as the mean of all points assigned to that cluster -> 3. Repeat until centroids stop moving (convergence).",
      "1. Compute gradients -> 2. Update weights via backpropagation -> 3. Evaluate Cross-Entropy loss.",
      "1. Split nodes by Gini impurity -> 2. Prune leaves -> 3. Calculate Information Gain.",
      "1. Measure correlation matrix -> 2. Invert covariance matrix -> 3. Drop negative eigenvalues."
    ],
    "correctAnswer": 0,
    "explanation": "K-Means (Lloyd's algorithm) alternates between two steps: 1. Assignment step: every data point is assigned to its nearest centroid based on Euclidean distance, and 2. Update step: the centroid positions are recalculated as the geometric mean (average coordinates) of all points currently assigned to that cluster. This repeats until convergence.",
    "wrongOptionExplanations": {
      "1": "Backpropagation and cross-entropy belong to neural network training.",
      "2": "Gini impurity and pruning belong to decision trees.",
      "3": "Covariance inversion and eigenvalues belong to Principal Component Analysis (PCA)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "K-Means = Assignment (to nearest centroid) -> Update (centroid = mean of cluster points) -> Repeat."
  },
  {
    "id": "aiml-049",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Clustering",
    "difficulty": "medium",
    "type": "application_based",
    "question": "How does a data scientist use the 'Elbow Method' to select the optimal number of clusters (K) in K-Means clustering?",
    "codeSnippet": "",
    "options": [
      "By plotting K against Within-Cluster Sum of Squares (Inertia) and selecting the 'elbow' point where the rate of decrease abruptly bends and levels off.",
      "By choosing the K value where training accuracy reaches 100%.",
      "By selecting K equal to the number of columns in the dataset.",
      "By running random forest on the clusters until the loss reaches zero."
    ],
    "correctAnswer": 0,
    "explanation": "Inertia (Within-Cluster Sum of Squares) measures how tightly packed clusters are. As K increases, inertia naturally decreases (reaching 0 when K = N). The Elbow Method plots Inertia vs K; the optimal K is the 'elbow' point where adding more clusters yields diminishing returns in inertia reduction.",
    "wrongOptionExplanations": {
      "1": "K-Means is unsupervised; there are no ground-truth target labels to compute 'accuracy'.",
      "2": "Cluster count depends on data density and business needs, not the number of feature columns.",
      "3": "Random forest is a supervised algorithm, not used to determine K-Means cluster counts."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Elbow Method: Plot Inertia (WCSS) vs K. Choose the inflection point ('elbow') where decrease slows down."
  },
  {
    "id": "aiml-050",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Clustering",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "A data science team attempts to use K-Means to cluster geospatial delivery points that form concentric rings and irregular crescent-moon shapes. The K-Means algorithm fails completely. What fundamental assumption of K-Means causes this failure?",
    "codeSnippet": "",
    "options": [
      "K-Means assumes clusters are spherical, convex, and of isotropic variance, making it incapable of discovering arbitrary non-globular or entangled shapes.",
      "K-Means cannot run on floating-point numbers.",
      "K-Means requires all data points to have negative coordinates.",
      "K-Means can only handle exactly two clusters."
    ],
    "correctAnswer": 0,
    "explanation": "K-Means assigns points strictly based on Euclidean distance to nearest centroid, which creates linear Voronoi cell boundaries. Consequently, K-Means inherently assumes clusters are spherical/convex blobs. For non-globular shapes (concentric rings, spirals, crescents), density-based algorithms like DBSCAN or Spectral Clustering must be used.",
    "wrongOptionExplanations": {
      "1": "K-Means is designed specifically for continuous real-valued floating-point features.",
      "2": "K-Means works on arbitrary coordinate ranges (positive and negative).",
      "3": "K-Means can be configured for any number of clusters `K >= 1`."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "K-Means assumes spherical/convex clusters. For non-linear, irregular, or crescent shapes -> Use DBSCAN!"
  },
  {
    "id": "aiml-051",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Dimensionality Reduction",
    "difficulty": "medium",
    "type": "application_based",
    "question": "What is the primary objective of Principal Component Analysis (PCA), and how are the principal components oriented relative to one another?",
    "codeSnippet": "",
    "options": [
      "PCA finds orthogonal (mutually perpendicular) axes that maximize the variance of projected data, with the first component capturing the largest possible variance.",
      "PCA groups data points into clusters by minimizing Euclidean distances to centroids.",
      "PCA removes rows with missing values and converts text to uppercase.",
      "PCA randomly deletes 50% of the columns to speed up training."
    ],
    "correctAnswer": 0,
    "explanation": "PCA is an unsupervised linear transformation technique. It finds orthogonal axes (eigenvectors of the covariance matrix) where the first principal component aligns with the direction of maximum variance, the second component captures the highest remaining orthogonal variance, and so on, eliminating feature collinearity.",
    "wrongOptionExplanations": {
      "1": "Centroid distance minimization describes K-Means clustering, not PCA.",
      "2": "PCA is a linear algebraic projection technique, not a text cleaner or row-dropping utility.",
      "3": "PCA transforms features into linear combinations rather than arbitrarily discarding raw columns."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "PCA = Orthogonal transformation maximizing variance. Components are mutually uncorrelated (r = 0)."
  },
  {
    "id": "aiml-052",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Dimensionality Reduction",
    "difficulty": "hard",
    "type": "output_or_prediction",
    "question": "A data scientist fits PCA on a 100-feature dataset in scikit-learn:\n\n```python\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=3)\npca.fit(X_scaled)\nprint(pca.explained_variance_ratio_)\n# Output: [0.55, 0.25, 0.10]\n```\nWhat percentage of the dataset's total variance is retained by projecting the data down to these 3 principal components?",
    "codeSnippet": "",
    "options": [
      "10%",
      "90%",
      "55%",
      "3%"
    ],
    "correctAnswer": 1,
    "explanation": "The cumulative explained variance is the sum of the individual ratios: `0.55 + 0.25 + 0.10 = 0.90` (or 90%). This means projecting the 100 dimensions down to just 3 principal components preserves 90% of the original dataset's informational variance.",
    "wrongOptionExplanations": {
      "0": "10% is only the variance of the third individual component.",
      "2": "55% is only the variance captured by the first component.",
      "3": "3% is confusing the component count (3) with a variance percentage."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Cumulative explained variance = Sum of `explained_variance_ratio_`. Used to pick `n_components` (e.g. retain >= 95%)."
  },
  {
    "id": "aiml-053",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Model Evaluation",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "A credit card transaction dataset contains 99,000 legitimate transactions and 1,000 fraudulent transactions (1% fraud). A naive 'dummy' classifier simply predicts 'Legitimate' for every single transaction. What is the accuracy of this useless model, and why is accuracy an inappropriate metric here?",
    "codeSnippet": "",
    "options": [
      "Accuracy is 50%; accuracy is fine because it divides correct predictions by total predictions.",
      "Accuracy is 99%; accuracy is dangerously misleading for imbalanced data because a model that detects zero frauds still achieves 99% accuracy.",
      "Accuracy is 1%; the model fails completely.",
      "Accuracy cannot be calculated when fraud exists."
    ],
    "correctAnswer": 1,
    "explanation": "Because 99,000 out of 100,000 samples are legitimate, predicting legitimate for all records yields `99,000 / 100,000 = 99.0%` accuracy. However, its Recall for fraud is 0.0%, meaning every single fraud is missed. In severe class imbalance, accuracy is meaningless; Precision, Recall, PR-AUC, and F1-Score must be used.",
    "wrongOptionExplanations": {
      "0": "The model correctly classifies all 99,000 legitimate transactions, so accuracy is 99%, not 50%.",
      "2": "1% is the error rate (1,000 missed frauds), not the overall accuracy.",
      "3": "Accuracy is mathematically well-defined on all confusion matrices (`(TP + TN) / Total`)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "The Accuracy Paradox: Highly imbalanced data yields 99% accuracy while solving 0% of the actual business problem."
  },
  {
    "id": "aiml-054",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Model Evaluation",
    "difficulty": "medium",
    "type": "calculation_based",
    "question": "A binary spam filter classification confusion matrix shows:\n- True Positives (TP) = 80 (Spam correctly flagged)\n- False Positives (FP) = 20 (Legitimate emails falsely marked as spam)\n- False Negatives (FN) = 20 (Spam emails missed)\n- True Negatives (TN) = 880 (Legitimate emails correctly allowed)\n\nWhat is the Precision of this model?",
    "codeSnippet": "",
    "options": [
      "0.80 (80%)",
      "0.88 (88%)",
      "0.50 (50%)",
      "0.96 (96%)"
    ],
    "correctAnswer": 0,
    "explanation": "Precision formula: `Precision = TP / (TP + FP)`. Here: `Precision = 80 / (80 + 20) = 80 / 100 = 0.80` (80%). Out of all emails the model flagged as spam, 80% were actually spam.",
    "wrongOptionExplanations": {
      "1": "0.88 is `TN / (TN + FP) = 880 / 1000` (Specificity).",
      "2": "0.50 is an arithmetic error.",
      "3": "0.96 is overall accuracy: `(80 + 880) / 1000 = 960 / 1000 = 0.96`."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Precision = `TP / (TP + FP)` (Quality of positive predictions). Recall = `TP / (TP + FN)` (Quantity of actual positives caught)."
  },
  {
    "id": "aiml-055",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Model Evaluation",
    "difficulty": "medium",
    "type": "calculation_based",
    "question": "A fraud detection model achieves a Precision of 0.60 and a Recall of 0.60. What is its F1-Score, computed using the harmonic mean formula `F1 = 2 * (Precision * Recall) / (Precision + Recall)`?",
    "codeSnippet": "",
    "options": [
      "0.36",
      "0.60",
      "1.20",
      "0.0"
    ],
    "correctAnswer": 1,
    "explanation": "When Precision equals Recall, their harmonic mean equals that same value: `F1 = 2 * (0.60 * 0.60) / (0.60 + 0.60) = 2 * (0.36) / 1.20 = 0.72 / 1.20 = 0.60`.",
    "wrongOptionExplanations": {
      "0": "0.36 is `Precision * Recall`, missing the rest of the formula.",
      "2": "1.20 is `Precision + Recall`.",
      "3": "F1 is zero only when either Precision or Recall is zero."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "F1-Score is the harmonic mean of Precision and Recall. It penalizes extreme imbalances between the two metrics."
  },
  {
    "id": "aiml-056",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Model Evaluation",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "What does the Area Under the Receiver Operating Characteristic Curve (ROC-AUC score) quantify for a binary classifier across all possible classification thresholds?",
    "codeSnippet": "",
    "options": [
      "The training loss of a neural network after 100 epochs.",
      "The probability that the classifier will rank a randomly chosen positive instance higher than a randomly chosen negative instance.",
      "The percentage of features that have zero correlation with the target.",
      "The ratio of decision trees to support vectors."
    ],
    "correctAnswer": 1,
    "explanation": "The ROC curve plots True Positive Rate (Recall) vs False Positive Rate (1 - Specificity) across all decision thresholds. The Area Under the Curve (AUC) is equal to the probability that the model evaluates a randomly selected positive sample with a higher predicted probability than a randomly selected negative sample. A random coin-flip classifier has AUC = 0.5; a perfect classifier has AUC = 1.0.",
    "wrongOptionExplanations": {
      "0": "ROC-AUC is an evaluation metric independent of training loss functions.",
      "2": "Feature correlation is measured by Pearson/Spearman coefficients, not ROC-AUC.",
      "3": "ROC-AUC is a model-agnostic classification ranking metric."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "ROC-AUC: 0.5 = Random Guessing; 1.0 = Perfect Ranking. Threshold-independent ranking capability."
  },
  {
    "id": "aiml-057",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Model Evaluation",
    "difficulty": "hard",
    "type": "output_or_prediction",
    "question": "In scikit-learn, what is the default arrangement of cells in the 2D array returned by `confusion_matrix(y_true, y_pred)` for binary classification (labels 0 and 1)?",
    "codeSnippet": "",
    "options": [
      "`[[True Negatives, False Positives], [False Negatives, True Positives]]`",
      "`[[True Positives, False Negatives], [False Positives, True Negatives]]`",
      "`[[True Positives, True Negatives], [False Positives, False Negatives]]`",
      "`[[Accuracy, Precision], [Recall, F1]]`"
    ],
    "correctAnswer": 0,
    "explanation": "In scikit-learn, `confusion_matrix(y_true, y_pred)` puts True labels on rows and Predicted labels on columns. By default (class 0 = negative, class 1 = positive): row 0 is actual negatives `[TN, FP]` and row 1 is actual positives `[FN, TP]`. Top-left is TN, bottom-right is TP.",
    "wrongOptionExplanations": {
      "1": "This is a common medical textbook convention, but scikit-learn standard format places TN in `[0, 0]` and TP in `[1, 1]`.",
      "2": "Confusion matrices place predictions on columns and truth on rows, not grouping true counts on top.",
      "3": "A confusion matrix reports raw sample counts, not aggregated summary ratios."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Scikit-Learn Confusion Matrix format: `[[TN, FP], [FN, TP]]`. Top-left = TN, Bottom-right = TP."
  },
  {
    "id": "aiml-058",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Overfitting and Underfitting",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In machine learning statistical learning theory, what is the 'Bias-Variance Tradeoff'?",
    "codeSnippet": "",
    "options": [
      "High Bias causes Underfitting (model makes overly simplistic assumptions, performing poorly on both train and test data); High Variance causes Overfitting (model memorizes training noise, performing great on train but poorly on test).",
      "Bias measures GPU memory; Variance measures CPU clock speed.",
      "High Bias means the model is too complex, while High Variance means the model is too simple.",
      "Bias and Variance always decrease simultaneously when model complexity increases."
    ],
    "correctAnswer": 0,
    "explanation": "Bias is error due to overly simplistic assumptions (underfitting, e.g. fitting a straight line to quadratic data). Variance is error due to excessive sensitivity to small fluctuations in training data (overfitting, e.g. a degree-20 polynomial). As model complexity increases, bias decreases while variance increases.",
    "wrongOptionExplanations": {
      "1": "Bias and variance are mathematical statistical error components, not hardware metrics.",
      "2": "Inverts the definitions: High Bias = Too Simple (Underfitting); High Variance = Too Complex (Overfitting).",
      "3": "They act in opposition: increasing complexity lowers bias but raises variance."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "High Bias = Underfitting (Oversimplified). High Variance = Overfitting (Memorizing noise)."
  },
  {
    "id": "aiml-059",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Overfitting and Underfitting",
    "difficulty": "hard",
    "type": "debugging_or_troubleshooting",
    "question": "A machine learning engineer plots the learning curves (Loss vs Epochs / Training Size) for a deep neural network. The training loss continues dropping close to 0.0, but the validation loss stops improving and begins steadily climbing upward after epoch 15. What is happening, and how should it be resolved?",
    "codeSnippet": "",
    "options": [
      "The model is underfitting; increase the learning rate and remove all regularization.",
      "The model has begun Overfitting after epoch 15; apply Early Stopping at epoch 15, add Dropout/L2 regularization, or gather more training data.",
      "The GPU has run out of VRAM.",
      "The dataset has zero categorical features."
    ],
    "correctAnswer": 1,
    "explanation": "When training loss keeps falling while validation loss diverges and increases, the model has exhausted generalizable patterns and has begun memorizing idiosyncratic noise in the training set (Overfitting). Early stopping terminates training right at the minimum of validation loss before divergence occurs.",
    "wrongOptionExplanations": {
      "0": "Underfitting occurs when both training and validation losses remain unacceptably high and fail to decrease.",
      "2": "VRAM exhaustion crashes the process with an explicit CUDA OOM error, rather than producing smooth diverging loss plots.",
      "3": "Categorical feature presence has no bearing on validation loss curve divergence."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Diverging curves (Train loss down, Val loss up) = OVERFITTING! Fix with Early Stopping, Regularization, or Dropout."
  },
  {
    "id": "aiml-060",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Data Preprocessing",
    "difficulty": "medium",
    "type": "code_or_pseudocode",
    "question": "What is the mathematical difference between `StandardScaler` (Z-score standardization) and `MinMaxScaler` in scikit-learn?",
    "codeSnippet": "",
    "options": [
      "`StandardScaler` transforms features to have Mean = 0 and Standard Deviation = 1 (`z = (x - \u03bc) / \u03c3`); `MinMaxScaler` scales features into a fixed bounded range, typically `[0, 1]` (`x_norm = (x - min) / (max - min)`).",
      "`StandardScaler` only works on text; `MinMaxScaler` only works on dates.",
      "`MinMaxScaler` handles extreme outliers without distortion, whereas `StandardScaler` crashes on outliers.",
      "`StandardScaler` rounds all numbers to binary integers 0 and 1."
    ],
    "correctAnswer": 0,
    "explanation": "`StandardScaler` standardizes by centering at mean 0 with unit variance, leaving the range unbounded. `MinMaxScaler` compresses the data into a bounded range (default `[0, 1]`). If extreme outliers exist, `MinMaxScaler` compresses the inlier data into a tiny squished sub-range, making `StandardScaler` (or `RobustScaler`) preferable.",
    "wrongOptionExplanations": {
      "1": "Both scalers operate strictly on continuous numerical arrays.",
      "2": "Inversion: `MinMaxScaler` is highly vulnerable to outliers because extreme min/max values squish all normal points.",
      "3": "StandardScaler outputs continuous real numbers (positive and negative z-scores)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "StandardScaler: Mean=0, Std=1 (unbounded). MinMaxScaler: Bounded in [0, 1] (sensitive to outliers)."
  },
  {
    "id": "aiml-061",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Data Preprocessing",
    "difficulty": "medium",
    "type": "code_or_pseudocode",
    "question": "A dataset contains an unordered categorical column `City` with values `['Tokyo', 'Paris', 'New York']`. A junior developer applies `LabelEncoder`, assigning `Tokyo = 1, Paris = 2, New York = 3`, and feeds it into a Linear Regression model. What erroneous assumption does this inject into the model?",
    "codeSnippet": "",
    "options": [
      "The linear model will interpret a false mathematical ordering and distance, falsely assuming `New York (3)` is three times the magnitude of `Tokyo (1)` and that `Paris` is halfway between them.",
      "The model will crash with a memory segmentation fault.",
      "The linear regression will automatically convert into a Decision Tree.",
      "Label encoding is the only legal way to handle nominal variables in scikit-learn."
    ],
    "correctAnswer": 0,
    "explanation": "Nominal categorical variables have no intrinsic ranking. Assigning arbitrary integers (1, 2, 3) induces a false numerical ordering that linear, distance-based, and neural models will treat as scalar magnitudes (`3 > 2 > 1`). Unordered nominal features must be One-Hot Encoded (creating binary indicator columns). Label Encoding is strictly reserved for ordinal variables (`Low=1, Med=2, High=3`) or target labels `y`.",
    "wrongOptionExplanations": {
      "1": "The code runs without syntax error, producing mathematically flawed predictions silently.",
      "2": "Linear models do not transform into decision trees.",
      "3": "One-Hot Encoding (`pd.get_dummies` or `OneHotEncoder`) is the standard practice for nominal features."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Unordered nominal categories -> ONE-HOT ENCODING. Ordered categories (S, M, L) -> ORDINAL/LABEL ENCODING."
  },
  {
    "id": "aiml-062",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Data Preprocessing",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "When one-hot encoding a categorical feature with `k` distinct categories for a Linear or Logistic Regression model with an intercept, why must one category be dropped (`drop_first=True` / `k-1` dummy variables)?",
    "codeSnippet": "",
    "options": [
      "To prevent the Dummy Variable Trap (perfect multicollinearity), where the `k` indicator columns sum to 1.0, creating a linear dependency with the constant intercept term.",
      "To reduce disk space by 90%.",
      "Because Python arrays cannot hold more than 3 columns.",
      "To force the model to predict the dropped category 0% of the time."
    ],
    "correctAnswer": 0,
    "explanation": "If a feature has 3 categories (e.g. Red, Green, Blue) and all 3 are one-hot encoded: `Red + Green + Blue = 1`. In linear regression, the constant intercept column also equals 1. This creates an exact linear combination (perfect multicollinearity), making the `(X^T X)` matrix singular and non-invertible. Dropping one baseline category (`k-1`) resolves the dependency.",
    "wrongOptionExplanations": {
      "1": "Dropping one column out of dozens yields negligible disk savings.",
      "2": "Python and numpy arrays easily hold millions of columns.",
      "3": "The dropped category serves as the baseline comparison reference when all other indicators are 0."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Dummy Variable Trap: Always use `k-1` dummies in linear models with an intercept to prevent singular matrix errors."
  },
  {
    "id": "aiml-063",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Data Preprocessing",
    "difficulty": "hard",
    "type": "calculation_based",
    "question": "A feature has a 25th percentile (Q1) of 20 and a 75th percentile (Q3) of 50. Using Tukey's Interquartile Range (IQR) rule, what is the lower boundary threshold below which any data point is mathematically classified as an outlier?",
    "codeSnippet": "",
    "options": [
      "-25",
      "5",
      "30",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: Calculate IQR: `IQR = Q3 - Q1 = 50 - 20 = 30`. Step 2: Compute lower outlier bound: `Lower = Q1 - (1.5 * IQR) = 20 - (1.5 * 30) = 20 - 45 = -25`. Any data value below -25 is flagged as an outlier.",
    "wrongOptionExplanations": {
      "1": "5 is `20 - (0.5 * 30)`.",
      "2": "30 is the IQR itself (`Q3 - Q1`).",
      "3": "0 is arbitrary zero clipping."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Tukey's IQR Outlier Formula: `Lower = Q1 - 1.5*IQR`, `Upper = Q3 + 1.5*IQR`. Used in standard box plots."
  },
  {
    "id": "aiml-064",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Train-Test and Validation",
    "difficulty": "hard",
    "type": "debugging_or_troubleshooting",
    "question": "Look at the following Python data preparation pipeline:\n\n```python\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X) # Fitting on full dataset\nX_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2)\n```\nWhat critical methodological error (data leakage) was committed here?",
    "codeSnippet": "",
    "options": [
      "`StandardScaler` was fitted on the entire dataset `X` prior to splitting, leaking the global mean and standard deviation of the test set into the training set.",
      "`test_size=0.2` is an illegal parameter in scikit-learn.",
      "The code will fail with an indentation error.",
      "`X` must be converted to binary strings before scaling."
    ],
    "correctAnswer": 0,
    "explanation": "This is a classic Data Leakage bug. Fitting transformers (scalers, encoders, imputers) on the whole dataset before splitting allows information from the test set (its mean and variance) to contaminate the training space. The correct workflow is: split first, then `scaler.fit_transform(X_train)`, and finally `scaler.transform(X_test)`.",
    "wrongOptionExplanations": {
      "1": "`test_size=0.2` (80/20 train/test split) is the most standard valid configuration.",
      "2": "The syntax is valid Python and will run without runtime exception, silently corrupting the validation integrity.",
      "3": "StandardScaler expects real numerical arrays, never binary strings."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "DATA LEAKAGE TRAP: NEVER fit scalers on full data! Always split first: `fit_transform` on train, `transform` on test."
  },
  {
    "id": "aiml-065",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Train-Test and Validation",
    "difficulty": "medium",
    "type": "code_or_pseudocode",
    "question": "Why is `StratifiedKFold` strongly preferred over standard `KFold` cross-validation when evaluating models on imbalanced classification datasets?",
    "codeSnippet": "",
    "options": [
      "`StratifiedKFold` ensures that each fold contains roughly the same percentage of each target class as the complete original dataset.",
      "`StratifiedKFold` removes all negative classes to speed up training.",
      "`StratifiedKFold` creates 100 times more data rows through duplication.",
      "`StratifiedKFold` converts decision trees into neural networks."
    ],
    "correctAnswer": 0,
    "explanation": "In standard random K-Fold, a rare class (e.g. 1% fraud) might randomly receive zero fraud cases in a specific fold, making validation in that fold impossible or wildly biased. Stratified K-Fold preserves the exact class percentage across every single fold (e.g. 1% fraud in every fold).",
    "wrongOptionExplanations": {
      "1": "Removing negative classes destroys the classification problem definition.",
      "2": "Stratification splits existing indices; it does not synthesize or duplicate rows.",
      "3": "Splitting strategies are model-agnostic and do not alter model architectures."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Classification with imbalanced targets -> Always use STRATIFIED K-Fold cross-validation!"
  },
  {
    "id": "aiml-066",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Train-Test and Validation",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "Why is it vital in enterprise machine learning to maintain three distinct data splits\u2014Training Set, Validation Set, and Test Set\u2014rather than just Train and Test?",
    "codeSnippet": "",
    "options": [
      "Training set learns model weights; Validation set tunes hyperparameters and guides architecture choices; Test set provides an unbiased final evaluation of generalization on untouched data.",
      "The Test set is used to compute training gradients.",
      "The Validation set is where data is permanently deleted.",
      "Three sets are mandatory because Python cannot divide numbers by two."
    ],
    "correctAnswer": 0,
    "explanation": "If a data scientist repeatedly evaluates model hyperparameters (like tree depth or learning rate) on the test set, information leaks into their tuning choices, causing 'overfitting to the test set'. The Validation set is used for iterative tuning and model selection. The Test set remains strictly locked until the final model is chosen to assess real-world generalization.",
    "wrongOptionExplanations": {
      "1": "Gradients are computed strictly on the Training set.",
      "2": "Validation data is active evaluation data, not deleted data.",
      "3": "Data splitting proportions are design choices, not mathematical limitations."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Train = Fit weights; Validation = Tune hyperparameters; Test = Unbiased final exam."
  },
  {
    "id": "aiml-067",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Feature Engineering",
    "difficulty": "medium",
    "type": "application_based",
    "question": "What is the primary difference between Feature Selection and Feature Extraction?",
    "codeSnippet": "",
    "options": [
      "Feature Selection selects a subset of the original features without altering them; Feature Extraction transforms the data into new, lower-dimensional composite features (e.g. PCA, autoencoders).",
      "Feature Selection creates non-linear polynomials; Feature Extraction deletes rows.",
      "Feature Selection only works on audio files; Feature Extraction is for video.",
      "Feature Selection requires GPUs; Feature Extraction runs on paper."
    ],
    "correctAnswer": 0,
    "explanation": "Feature Selection filters the original feature set (e.g. SelectKBest, recursive feature elimination), keeping original column names and interpretability. Feature Extraction projects original features into a new coordinate space, creating transformed composite features (e.g. Principal Components), which reduces dimensionality but loses direct original interpretability.",
    "wrongOptionExplanations": {
      "1": "Polynomial expansion is feature generation, not selection.",
      "2": "Both techniques are universally applied across tabular, text, image, and audio domains.",
      "3": "Both are mathematical algorithms executable on standard CPUs."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Feature Selection = Pick best existing columns. Feature Extraction = Create new transformed composite columns."
  },
  {
    "id": "aiml-068",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Feature Engineering",
    "difficulty": "hard",
    "type": "application_based",
    "question": "In a taxi fare prediction problem, the raw dataset contains a timestamp column: `pickup_datetime = '2026-10-15 18:30:00'`. Feeding this raw string directly into a machine learning model will fail. Which engineered features would extract maximum predictive value for fare pricing?",
    "codeSnippet": "",
    "options": [
      "Extract `HourOfDay` (peak rush hour), `DayOfWeek` (weekday vs weekend), and a binary `IsHoliday` flag.",
      "Compute the MD5 hash of the string and treat it as a continuous float.",
      "Delete the timestamp column because time has no correlation with traffic or fares.",
      "Convert each character in the timestamp into its Unicode integer value and sum them."
    ],
    "correctAnswer": 0,
    "explanation": "Timestamps carry rich cyclical and human behavioral patterns. Extracting discrete domain features like Hour of Day (rush hour surge pricing), Day of Week (weekend vs weekday travel), and Holiday indicators allows linear, tree, and neural models to capture real pricing dynamics directly.",
    "wrongOptionExplanations": {
      "1": "MD5 hashes destroy cyclical time relationships and produce arbitrary chaotic pseudorandom numbers.",
      "2": "Time of day is one of the single most influential factors in traffic congestion and fare surging.",
      "3": "Summing Unicode values produces nonsensical garbage features."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Datetime feature engineering: Decompose into Hour, DayOfWeek, Month, IsWeekend, and IsHoliday."
  },
  {
    "id": "aiml-069",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Ensemble Learning",
    "difficulty": "medium",
    "type": "application_based",
    "question": "What is the core architectural difference in model training between Bagging (e.g. Random Forest) and Boosting (e.g. AdaBoost, Gradient Boosting, XGBoost)?",
    "codeSnippet": "",
    "options": [
      "Bagging trains base models independently in parallel; Boosting trains base models sequentially, where each new model is trained to correct the errors/residuals of the previous models.",
      "Bagging requires internet access, whereas Boosting runs completely offline.",
      "Boosting uses majority voting; Bagging only works on text files.",
      "Bagging increases bias, while Boosting increases variance."
    ],
    "correctAnswer": 0,
    "explanation": "In Bagging (Bootstrap Aggregation), base learners are trained in parallel on independent bootstrap samples to reduce model variance. In Boosting, weak base learners (e.g. shallow decision trees) are trained sequentially in a chain, where each subsequent learner focuses specifically on instances misclassified by earlier learners (reducing model bias).",
    "wrongOptionExplanations": {
      "1": "Both ensemble methods are pure mathematical algorithms operating offline on local machines.",
      "2": "Bagging uses majority voting/averaging; Boosting computes weighted additive combinations.",
      "3": "Inversion: Bagging primarily reduces Variance (prevents overfitting); Boosting primarily reduces Bias."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Bagging = Parallel base learners (Reduces Variance). Boosting = Sequential error-correcting learners (Reduces Bias)."
  },
  {
    "id": "aiml-070",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Machine Learning",
    "subtopic": "Ensemble Learning",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "Why has Extreme Gradient Boosting (XGBoost) become the dominant competitive algorithm for structured tabular data in industry and Kaggle competitions compared to basic Gradient Boosting?",
    "codeSnippet": "",
    "options": [
      "XGBoost incorporates second-order Taylor expansion gradients (Hessians), built-in L1/L2 regularization to prevent overfitting, parallelized tree construction, and native handling of missing values.",
      "XGBoost replaces decision trees with convolutional image filters.",
      "XGBoost guarantees zero memory usage during model fitting.",
      "XGBoost only trains on quantum computers."
    ],
    "correctAnswer": 0,
    "explanation": "XGBoost introduces several major algorithmic and computational enhancements over standard GBM: 1. Uses both first derivative (gradient) and second derivative (Hessian) for more accurate descent, 2. Adds built-in L1 and L2 regularization to tree leaf weights, 3. Features a fast histogram-based split finder supporting parallel CPU execution, and 4. Learns default split directions for missing values natively.",
    "wrongOptionExplanations": {
      "1": "XGBoost is a gradient-boosted decision tree library, not a convolutional neural network.",
      "2": "XGBoost utilizes RAM cache and memory buffers for pre-sorted histograms.",
      "3": "XGBoost runs on standard x86/ARM CPUs and NVIDIA GPUs."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "XGBoost advantages: 2nd-order Taylor gradients (Hessians), built-in L1/L2 regularization, parallel tree building, handles missing values."
  },
  {
    "id": "aiml-071",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Neural Network Fundamentals",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What mathematical operations are performed inside a single artificial neuron (perceptron) to produce its scalar output from inputs `[x1, x2, ..., xn]`?",
    "codeSnippet": "",
    "options": [
      "Compute the linear weighted sum plus bias `z = \u03a3(w_i * x_i) + b`, then pass `z` through a non-linear activation function `a = f(z)`.",
      "Compute the determinant of the input matrix and divide by the learning rate.",
      "Perform K-Means clustering across all inputs.",
      "Sort the input values in ascending order and take the median."
    ],
    "correctAnswer": 0,
    "explanation": "A standard artificial neuron performs two fundamental steps: 1. Linear combination: dot product of input vector `x` with weight vector `w` plus scalar bias `b` (`z = w\u00b7x + b`), and 2. Non-linear activation: applying an activation function `f(z)` (such as ReLU, Sigmoid) to introduce non-linearity.",
    "wrongOptionExplanations": {
      "1": "Individual neurons compute dot products, not matrix determinants.",
      "2": "Clustering is an unsupervised grouping technique, not neuron forward propagation.",
      "3": "Median filtering is an image processing filter, not the mathematical foundation of neural perceptrons."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Core neuron equation: `z = w\u00b7x + b` (linear step), followed by `a = f(z)` (activation step)."
  },
  {
    "id": "aiml-072",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Neural Network Fundamentals",
    "difficulty": "medium",
    "type": "calculation_based",
    "question": "A fully connected (Dense) hidden layer has 10 input features and 20 output neurons. If each neuron has its own independent bias term, what is the total number of trainable parameters in this layer?",
    "codeSnippet": "",
    "options": [
      "200",
      "220",
      "30",
      "210"
    ],
    "correctAnswer": 1,
    "explanation": "Each of the 20 neurons connects to all 10 inputs, requiring `10 * 20 = 200` weights. In addition, each of the 20 neurons has exactly 1 bias parameter: `20` biases. Total trainable parameters = `(inputs * outputs) + outputs = 200 + 20 = 220`.",
    "wrongOptionExplanations": {
      "0": "200 counts only the weights (`10 * 20`), forgetting the 20 bias parameters.",
      "2": "30 is `10 + 20` (sum of input and output dimensions).",
      "3": "210 assumes only 10 biases exist."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Dense layer parameter formula: `(Input_Dim * Output_Neurons) + Output_Neurons` (Weights + Biases)."
  },
  {
    "id": "aiml-073",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Neural Network Fundamentals",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "What happens if a 50-layer deep neural network is constructed without any non-linear activation functions (or uses only linear activation `f(x) = x` at every layer)?",
    "codeSnippet": "",
    "options": [
      "The network will automatically achieve 100% test accuracy on non-linear computer vision problems.",
      "The entire 50-layer network mathematically collapses into a single-layer linear model (`y = W_composite * x + b_composite`), incapable of learning non-linear decision boundaries.",
      "The network will crash with a division-by-zero error on the first forward pass.",
      "The weights will grow to infinity within the first two epochs."
    ],
    "correctAnswer": 1,
    "explanation": "A linear combination of linear functions is always strictly linear: `W2 * (W1 * x + b1) + b2 = (W2 * W1) * x + (W2 * b1 + b2)`. No matter how many layers are stacked, without non-linear activations, the multi-layer network is mathematically identical to a single-layer linear regression model.",
    "wrongOptionExplanations": {
      "0": "Without non-linearity, the network cannot learn even a simple XOR gate, let alone computer vision.",
      "2": "Matrix multiplication of linear layers executes without division errors.",
      "3": "Linear layers do not automatically explode to infinity unless learning rates are excessively high."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Without non-linear activations, stacking 100 dense layers is mathematically equivalent to 1 single linear layer!"
  },
  {
    "id": "aiml-074",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Neural Network Fundamentals",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "In the linear equation `z = w*x + b` inside an artificial neuron, what is the specific role of the bias term `b`?",
    "codeSnippet": "",
    "options": [
      "The bias shifts the activation function curve horizontally along the axis, allowing the neuron to output non-zero values even when all input features `x` are zero.",
      "The bias is a hyperparameter that controls how fast the GPU fans spin.",
      "The bias normalizes the inputs to have zero standard deviation.",
      "The bias prevents the code from having syntax errors."
    ],
    "correctAnswer": 0,
    "explanation": "Without a bias term (`z = w*x`), the decision boundary is strictly forced to pass through the origin `(0, 0)`. The bias `b` acts as an offset that shifts the activation threshold horizontally, enabling the model to fit patterns that do not intersect the origin.",
    "wrongOptionExplanations": {
      "1": "Hardware cooling is managed by GPU firmware, completely unrelated to mathematical bias terms.",
      "2": "Input normalization is performed by StandardScaler or Batch Normalization, not scalar neuron bias.",
      "3": "Bias is a mathematical parameter learned during training, not a syntax validator."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Bias allows the decision boundary to shift away from the origin `(0, 0)`. Analogous to the intercept `c` in `y = mx + c`."
  },
  {
    "id": "aiml-075",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Neural Network Fundamentals",
    "difficulty": "medium",
    "type": "code_or_pseudocode",
    "question": "During the forward propagation pass of training a Multilayer Perceptron (MLP), what is the correct chronological sequence of events?",
    "codeSnippet": "",
    "options": [
      "Input features entered -> Layer-by-layer linear combination & activation -> Output layer prediction generated -> Loss function computes error against ground truth.",
      "Loss computed -> Weights updated via SGD -> Inputs entered -> Gradients calculated.",
      "Backpropagation runs -> Weights initialized -> Features predicted -> Confusion matrix built.",
      "Feature scaling -> Weights zeroed out -> Dropout removed -> Test score computed."
    ],
    "correctAnswer": 0,
    "explanation": "Forward propagation flows from inputs to output: 1. Features are fed into input layer, 2. Each hidden layer computes `a^[l] = g^[l](W^[l] * a^[l-1] + b^[l])`, 3. The output layer generates predictions `y_hat`, and 4. The Loss Function compares `y_hat` to ground-truth `y` to compute the scalar loss.",
    "wrongOptionExplanations": {
      "1": "Loss cannot be computed before inputs are passed forward to generate predictions.",
      "2": "Backpropagation requires forward loss to already be calculated to compute gradients in reverse.",
      "3": "Weights are never set to zero (zero initialization breaks symmetry in deep networks)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Forward Pass: Inputs -> Hidden Layers -> Outputs -> Loss. Backward Pass: Loss -> Gradients -> Weight Updates."
  },
  {
    "id": "aiml-076",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Activation Functions",
    "difficulty": "easy",
    "type": "conceptual",
    "question": "What is the mathematical definition of the Rectified Linear Unit (ReLU) activation function, and why is it the default choice for hidden layers in modern deep networks?",
    "codeSnippet": "",
    "options": [
      "`f(x) = max(0, x)`; it is computationally trivial to compute and does not saturate for positive values, alleviating the vanishing gradient problem.",
      "`f(x) = 1 / (1 + e^-x)`; it squashes all values between 0 and 1.",
      "`f(x) = x^3`; it cubes all inputs.",
      "`f(x) = log(x)`; it calculates natural logarithms."
    ],
    "correctAnswer": 0,
    "explanation": "ReLU is defined as `f(x) = max(0, x)`. If `x < 0`, output is 0 (derivative is 0). If `x >= 0`, output is `x` (derivative is 1). Because the derivative is a constant 1 for all positive values, gradients do not diminish as they backpropagate through dozens of layers, solving the vanishing gradient issue of Sigmoid.",
    "wrongOptionExplanations": {
      "1": "`1 / (1 + e^-x)` is the Sigmoid function, which suffers from severe vanishing gradients in deep networks.",
      "2": "Cubic functions cause runaway gradient explosion.",
      "3": "Logarithms are undefined for negative numbers and zero."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "ReLU `max(0, x)`: Derivative is 1 for `x > 0`. Fast computation and avoids vanishing gradients."
  },
  {
    "id": "aiml-077",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Activation Functions",
    "difficulty": "hard",
    "type": "conceptual",
    "question": "Why does using the Sigmoid activation function `\u03c3(z)` in hidden layers of very deep neural networks cause the 'Vanishing Gradient Problem' during backpropagation?",
    "codeSnippet": "",
    "options": [
      "The maximum derivative of the Sigmoid function is only 0.25 (at z=0); multiplying many fractional derivatives (`< 0.25`) across layers via the chain rule causes gradients to decay exponentially toward zero for early layers.",
      "The Sigmoid function derivative is always negative.",
      "Sigmoid output values exceed 1,000,000, causing integer overflow.",
      "Sigmoid functions can only run on CPU, not GPU."
    ],
    "correctAnswer": 0,
    "explanation": "The derivative of Sigmoid is `\u03c3'(z) = \u03c3(z) * (1 - \u03c3(z))`. Its maximum possible value is `0.5 * (1 - 0.5) = 0.25`. By the chain rule, gradients backpropagating through `L` hidden layers are multiplied: `0.25 * 0.25 * 0.25...`. By layer 5 or 10, the gradient is practically zero, preventing early layers from updating their weights.",
    "wrongOptionExplanations": {
      "1": "Sigmoid derivative is strictly positive everywhere (`0 < \u03c3'(z) <= 0.25`).",
      "2": "Sigmoid is strictly bounded between 0 and 1, so it never overflows to millions.",
      "3": "Sigmoid is easily vectorized and accelerated on GPUs."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Max Sigmoid derivative is 0.25. Repeated multiplication through layers shrinks gradients to 0 -> Vanishing Gradient!"
  },
  {
    "id": "aiml-078",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Activation Functions",
    "difficulty": "hard",
    "type": "debugging_or_troubleshooting",
    "question": "What is the 'Dying ReLU' problem in deep neural network training, and which activation function was designed to resolve it?",
    "codeSnippet": "",
    "options": [
      "When a large gradient update shifts a neuron's weights such that it outputs negative values for all training samples, its derivative becomes permanently 0.0, permanently freezing the neuron; Leaky ReLU (or Parametric ReLU) fixes this by allowing a small non-zero slope (`\u03b1 * x`) for `x < 0`.",
      "When ReLU neurons run out of memory and crash Python; Softmax fixes it.",
      "When ReLU output approaches infinity; Sigmoid fixes it.",
      "When all weights are initialized to 1.0."
    ],
    "correctAnswer": 0,
    "explanation": "For any input `x < 0`, ReLU has an exact derivative of 0. If a neuron's weights get knocked into a state where it is negative across the entire dataset, zero gradient flows through it forever (`0 * gradient = 0`), rendering the neuron permanently inactive ('dead'). Leaky ReLU fixes this by defining `f(x) = x` if `x > 0`, and `f(x) = 0.01 * x` if `x <= 0`.",
    "wrongOptionExplanations": {
      "1": "Dying ReLU is a mathematical zero-gradient lock, not an OS memory crash.",
      "2": "ReLU outputs for negative numbers are zero, not infinity.",
      "3": "Initializing weights to 1.0 causes symmetry breaking problems, not the dying ReLU phenomenon."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Dying ReLU: Gradient is 0 for `x < 0`. Fix: Leaky ReLU (`0.01 * x` for negative inputs) or ELU."
  },
  {
    "id": "aiml-079",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Activation Functions",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "You are designing the final output layer of three different neural networks:\n1. Predicting a patient's Blood Pressure (continuous positive number)\n2. Predicting whether an image contains a Cat or Not (binary)\n3. Classifying a handwritten digit among 10 mutually exclusive classes (0 through 9)\n\nWhich activation functions should be placed on the output layer for 1, 2, and 3 respectively?",
    "codeSnippet": "",
    "options": [
      "1: Linear (or ReLU), 2: Sigmoid, 3: Softmax",
      "1: Softmax, 2: Linear, 3: Sigmoid",
      "1: Sigmoid, 2: Tanh, 3: Linear",
      "1: Tanh, 2: Softmax, 3: Sigmoid"
    ],
    "correctAnswer": 0,
    "explanation": "1. Regression targets require continuous unbounded (or positive) output -> Linear (or ReLU). 2. Binary classification requires a single probability between 0 and 1 -> Sigmoid. 3. Multiclass mutually exclusive classification requires normalized probabilities across `K` classes that sum to 1.0 -> Softmax.",
    "wrongOptionExplanations": {
      "1": "Softmax is for multiclass classification, not continuous blood pressure regression.",
      "2": "Sigmoid outputs `[0, 1]`, which cannot predict blood pressures like 120 or 140.",
      "3": "Tanh outputs `[-1, +1]`, which is inappropriate for continuous positive regression."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "GOLDEN RULE: Regression -> Linear; Binary Classification -> Sigmoid; Multi-class -> Softmax."
  },
  {
    "id": "aiml-080",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Activation Functions",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Why is the Hyperbolic Tangent (Tanh) activation function generally preferred over the Sigmoid activation function in hidden layers of shallow neural networks?",
    "codeSnippet": "",
    "options": [
      "Tanh is zero-centered with an output range of `[-1, +1]`, which prevents systematic zig-zagging in gradient updates compared to strictly positive `[0, 1]` Sigmoid outputs.",
      "Tanh never requires backpropagation.",
      "Tanh cannot be computed by computers because it uses imaginary numbers.",
      "Tanh derivative is always greater than 10."
    ],
    "correctAnswer": 0,
    "explanation": "Sigmoid outputs are strictly positive `(0, 1)`, which causes all gradients entering a neuron's weights to have the same sign (all positive or all negative), leading to inefficient zig-zagging during gradient descent. Tanh outputs `(-1, +1)` and is zero-centered, ensuring mean activations are close to 0 and stabilizing weight updates.",
    "wrongOptionExplanations": {
      "1": "All neural networks trained via gradient descent require backpropagation.",
      "2": "Tanh is a standard real-valued hyperbolic trigonometric function: `(e^z - e^-z) / (e^z + e^-z)`.",
      "3": "Maximum Tanh derivative is 1.0 (at z=0), never 10."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Tanh is zero-centered `[-1, +1]`, making optimization easier than non-zero-centered Sigmoid `[0, 1]`."
  },
  {
    "id": "aiml-081",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Backpropagation",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Which fundamental mathematical theorem enables the Backpropagation algorithm to calculate the gradient of the total loss with respect to weights located deep in the earliest layers of a neural network?",
    "codeSnippet": "",
    "options": [
      "The Chain Rule of Differential Calculus (`dL/dw = (dL/da) * (da/dz) * (dz/dw)`)",
      "Pythagorean Theorem",
      "Central Limit Theorem",
      "Bayes' Theorem"
    ],
    "correctAnswer": 0,
    "explanation": "A neural network is a composite nested function: `Loss(f_L(f_L-1(...f_1(x))))`. The Chain Rule allows computing the partial derivative of the scalar loss with respect to any intermediate weight by multiplying local derivatives step-by-step from the output back to the input layer.",
    "wrongOptionExplanations": {
      "1": "Pythagoras computes right-triangle hypotenuses, not composite derivatives.",
      "2": "Central Limit Theorem explains why sample means approach normal distributions.",
      "3": "Bayes theorem inverts conditional probabilities, not calculus derivatives."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Backpropagation is simply an efficient computational implementation of the multivariate Chain Rule."
  },
  {
    "id": "aiml-082",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Backpropagation",
    "difficulty": "easy",
    "type": "calculation_based",
    "question": "In standard gradient descent, a weight currently has value `w = 4.0`. The calculated gradient of the loss with respect to this weight is `dL/dw = 3.0`, and the learning rate is `\u03b7 = 0.1`. What is the updated weight value after one gradient descent step using `w_new = w_old - \u03b7 * (dL/dw)`?",
    "codeSnippet": "",
    "options": [
      "4.3",
      "3.7",
      "1.2",
      "0.3"
    ],
    "correctAnswer": 1,
    "explanation": "Apply the gradient descent update equation: `w_new = w_old - \u03b7 * (dL/dw) = 4.0 - (0.1 * 3.0) = 4.0 - 0.3 = 3.7`.",
    "wrongOptionExplanations": {
      "0": "4.3 is gradient ascent (`4.0 + 0.3`), which maximizes loss rather than minimizing it.",
      "2": "1.2 is `4.0 * 0.3`.",
      "3": "0.3 is the step size (`\u03b7 * dL/dw`), forgetting to subtract it from `w_old`."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Always SUBTRACT the step: `w_new = w_old - learning_rate * gradient`. (Minus sign moves downhill towards minimum)."
  },
  {
    "id": "aiml-083",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Backpropagation",
    "difficulty": "medium",
    "type": "scenario_based",
    "question": "What happens during neural network training if the learning rate is set (1) Too high, versus (2) Too low?",
    "codeSnippet": "",
    "options": [
      "(1) The loss oscillates wildly or diverges to infinity (overshooting the minimum); (2) Training converges excessively slowly and risks getting trapped in suboptimal plateaus.",
      "(1) Training is instantaneous and perfect; (2) The GPU explodes.",
      "(1) Weights become zero; (2) Model overfits immediately.",
      "Learning rate has no effect on convergence speed."
    ],
    "correctAnswer": 0,
    "explanation": "If the learning rate is too large, the optimizer takes massive steps, bouncing across the loss valley and overshooting the minimum, causing loss divergence (NaN values). If the learning rate is too small, weight updates are microscopic, requiring thousands of unnecessary epochs and potentially stalling on flat plateaus.",
    "wrongOptionExplanations": {
      "1": "High learning rates destabilize training rather than making it perfect.",
      "2": "High learning rate causes numerical explosion/divergence, not automatic zeroing.",
      "3": "Learning rate is arguably the single most important hyperparameter in deep learning optimization."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "High Learning Rate -> Divergence/Oscillation. Low Learning Rate -> Painfully slow convergence / stalling."
  },
  {
    "id": "aiml-084",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Backpropagation",
    "difficulty": "hard",
    "type": "debugging_or_troubleshooting",
    "question": "While training an 80-layer deep network, the training loss suddenly becomes `NaN` (Not a Number) at epoch 4, and terminal logs show weights exceeding `10^38`. What numerical stability failure occurred, and what is the standard fix?",
    "codeSnippet": "",
    "options": [
      "Exploding Gradients; resolved by Gradient Clipping, proper weight initialization (He/Xavier), and Batch Normalization.",
      "Vanishing Gradients; resolved by increasing the learning rate by 100x.",
      "Underfitting; resolved by removing all activation functions.",
      "The dataset has too many training rows."
    ],
    "correctAnswer": 0,
    "explanation": "When gradients are greater than 1.0 and compounded across deep layers, backpropagation multiplies them repeatedly, leading to exponential growth (`g^L`). This causes Exploding Gradients, resulting in float overflow and `NaN` weights. Standard remedies: 1. Gradient Clipping (capping gradients at a maximum threshold, e.g. `clipnorm=1.0`), 2. He/Xavier weight initialization, and 3. Batch Normalization.",
    "wrongOptionExplanations": {
      "1": "Vanishing gradients cause weights to freeze at zero updates, not explode into `NaN` overflows.",
      "2": "Removing activation functions collapses the model to linear regression, not solving gradient explosion.",
      "3": "More training rows stabilizes gradient estimations rather than causing numerical overflow."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Loss = NaN and weights blow up -> EXPLODING GRADIENTS! Fix with Gradient Clipping and Batch Normalization."
  },
  {
    "id": "aiml-085",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Loss Functions",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In a binary classification neural network with a Sigmoid output neuron producing predicted probability `p`, what is the mathematical formula for Binary Cross-Entropy (Log Loss) for a true label `y \u2208 {0, 1}`?",
    "codeSnippet": "",
    "options": [
      "`L = -[y * log(p) + (1 - y) * log(1 - p)]`",
      "`L = (y - p)^2`",
      "`L = max(0, 1 - y * p)`",
      "`L = |y - p|`"
    ],
    "correctAnswer": 0,
    "explanation": "Binary Cross-Entropy is derived from maximum likelihood estimation: `L = -[y * log(p) + (1 - y) * log(1 - p)]`. If `y = 1`, the loss reduces to `-log(p)` (punishing low confidence with infinite loss as `p -> 0`). If `y = 0`, it reduces to `-log(1 - p)`.",
    "wrongOptionExplanations": {
      "1": "`L = (y - p)^2` is Mean Squared Error, which is non-convex when paired with Sigmoid outputs.",
      "2": "`max(0, 1 - y*p)` is Hinge Loss used in Support Vector Machines.",
      "3": "`|y - p|` is Mean Absolute Error (L1 loss)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Binary Cross Entropy = `-[y*log(p) + (1-y)*log(1-p)]`. Heavily penalizes confident wrong predictions!"
  },
  {
    "id": "aiml-086",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Loss Functions",
    "difficulty": "medium",
    "type": "code_or_pseudocode",
    "question": "In Keras / TensorFlow, what is the exact difference between `categorical_crossentropy` and `sparse_categorical_crossentropy` loss functions?",
    "codeSnippet": "",
    "options": [
      "`categorical_crossentropy` expects target labels to be One-Hot Encoded (e.g. `[0, 1, 0]`); `sparse_categorical_crossentropy` expects targets to be plain integer class indices (e.g. `1`).",
      "`sparse_categorical_crossentropy` only works on datasets with missing values.",
      "`categorical_crossentropy` is for regression, while sparse is for clustering.",
      "`sparse_categorical_crossentropy` is 10 times slower and obsolete."
    ],
    "correctAnswer": 0,
    "explanation": "Both loss functions calculate identical cross-entropy mathematics. The only difference is the data format of the target label `y`: if labels are one-hot encoded vectors (e.g. `[[1, 0, 0], [0, 1, 0]]`), use `categorical_crossentropy`. If labels are integer IDs (e.g. `[0, 1]`), use `sparse_categorical_crossentropy` (saving significant memory).",
    "wrongOptionExplanations": {
      "1": "Neither loss function tolerates missing NaN values.",
      "2": "Both are classification loss functions paired with Softmax output layers.",
      "3": "Sparse cross-entropy is computationally faster and uses significantly less RAM by avoiding one-hot expansion."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "One-hot target labels `[0, 1, 0]` -> `categorical_crossentropy`. Integer targets `0, 1, 2` -> `sparse_categorical_crossentropy`."
  },
  {
    "id": "aiml-087",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Loss Functions",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "Why is Mean Squared Error (MSE) strongly discouraged as the loss function for classification models with Sigmoid output layers, in favor of Cross-Entropy?",
    "codeSnippet": "",
    "options": [
      "Combining MSE with Sigmoid creates a non-convex loss surface with many local minima, and causes gradient saturation (vanishing gradients) when predictions are confidently wrong.",
      "MSE can only output negative numbers.",
      "Cross-Entropy runs on GPUs, while MSE runs only on quantum processors.",
      "MSE requires the target labels to be complex numbers."
    ],
    "correctAnswer": 0,
    "explanation": "When MSE is paired with Sigmoid, the gradient contains the derivative `\u03c3'(z)`. When the model is confidently wrong (e.g. `y = 1`, but `p = 0.001`), `\u03c3'(z)` is near zero, causing gradient updates to stall right when the model needs to learn the most. In contrast, Cross-Entropy's derivative cancels out the sigmoid derivative (`p - y`), producing steep, clean gradients proportional to the error.",
    "wrongOptionExplanations": {
      "1": "Squared errors are mathematically non-negative (`>= 0`).",
      "2": "Both loss functions are simple vector operations that execute on standard hardware.",
      "3": "MSE operates on standard real-valued vectors."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "MSE + Sigmoid = Non-convex & saturated gradient when wrong! Cross-Entropy + Sigmoid = Convex & fast learning."
  },
  {
    "id": "aiml-088",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "CNN",
    "difficulty": "hard",
    "type": "calculation_based",
    "question": "An input grayscale image has dimensions `32 x 32`. A convolutional layer applies a `5 x 5` filter with a stride of `1` and padding of `0` (valid padding). What are the height and width of the resulting feature map using the formula `Output = ((W - K + 2P) / S) + 1`?",
    "codeSnippet": "",
    "options": [
      "28 x 28",
      "32 x 32",
      "26 x 26",
      "30 x 30"
    ],
    "correctAnswer": 0,
    "explanation": "Formula: `O = ((W - K + 2*P) / S) + 1`. Here: `W = 32`, `K = 5`, `P = 0`, `S = 1`. Compute: `O = ((32 - 5 + 0) / 1) + 1 = (27 / 1) + 1 = 27 + 1 = 28`. The output feature map is `28 x 28`.",
    "wrongOptionExplanations": {
      "1": "32 x 32 would require 'same' padding (`P = 2`).",
      "2": "26 x 26 is `((32 - 7) + 1)` (a 7x7 filter).",
      "3": "30 x 30 is `((32 - 3) + 1)` (a 3x3 filter)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "CRITICAL CNN FORMULA: `Output_Size = ((Input_Size - Kernel_Size + 2*Padding) / Stride) + 1`."
  },
  {
    "id": "aiml-089",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "CNN",
    "difficulty": "easy",
    "type": "application_based",
    "question": "What is the primary function of a Max Pooling layer (e.g. `2x2` pooling with stride `2`) in a Convolutional Neural Network?",
    "codeSnippet": "",
    "options": [
      "To downsample feature maps (reducing spatial dimensions by 50%), which reduces computation and parameters while providing translational invariance.",
      "To increase the number of color channels from 3 to 64.",
      "To train weights via backpropagation using Adam optimizer.",
      "To invert the colors of the image."
    ],
    "correctAnswer": 0,
    "explanation": "Max Pooling slides a window (e.g. `2x2`) over feature maps and extracts the maximum value, discarding 75% of spatial data. This downsampling reduces computational overhead, controls overfitting, and gives the network translational invariance (a cat feature detected in the corner is retained regardless of small pixel shifts). Note that pooling layers contain ZERO trainable parameters.",
    "wrongOptionExplanations": {
      "1": "Channel depth is changed by the number of convolutional filters, not pooling layers.",
      "2": "Max pooling has zero learned weights or parameters; it is a fixed mathematical operation.",
      "3": "Color inversion is a data augmentation technique, not a neural layer."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Pooling layers: 1. Reduce spatial dimensions, 2. Provide translation invariance, 3. Have ZERO trainable parameters!"
  },
  {
    "id": "aiml-090",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "CNN",
    "difficulty": "medium",
    "type": "application_based",
    "question": "Why are Convolutional layers vastly superior to Dense (Fully Connected) layers when processing high-resolution images (e.g. 1000 x 1000 pixels)?",
    "codeSnippet": "",
    "options": [
      "CNNs use Parameter Sharing (the same small kernel filter slides across the entire image) and Local Receptive Fields, drastically reducing the number of parameters compared to Dense layers which would require billions of weights.",
      "Dense layers cannot process pixels that are black or white.",
      "CNNs do not use floating-point numbers.",
      "Dense layers are only compatible with audio files."
    ],
    "correctAnswer": 0,
    "explanation": "A 1000x1000 RGB image has 3,000,000 values. Connecting this to a single dense layer of 1,000 neurons requires `3,000,000 * 1,000 = 3 billion` weights (instant out-of-memory). A CNN uses a tiny filter (e.g. `3x3x3 = 27` weights) shared across all pixel patches, reducing parameters by a factor of millions while preserving 2D spatial relationships.",
    "wrongOptionExplanations": {
      "1": "Dense layers process any numerical pixel values.",
      "2": "CNNs rely heavily on IEEE-754 floating-point operations.",
      "3": "Dense layers process tabular, text, and audio embeddings routinely."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Two CNN pillars: 1. Parameter Sharing (shared kernel weights), 2. Local Receptive Fields (spatial locality)."
  },
  {
    "id": "aiml-091",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "CNN",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "In convolutional layers, what is the operational difference between `padding='valid'` and `padding='same'`?",
    "codeSnippet": "",
    "options": [
      "`valid` applies zero padding, causing spatial dimensions to shrink after convolution; `same` pads the image border with zeros such that the output feature map has the exact same spatial dimensions as the input (when stride=1).",
      "`valid` is for training; `same` is for testing.",
      "`same` deletes the center pixels of the image.",
      "`valid` converts 2D images into 1D vectors."
    ],
    "correctAnswer": 0,
    "explanation": "`padding='valid'` means no padding (`P=0`). The filter only visits fully valid interior positions, causing the output size to shrink by `(kernel_size - 1)`. `padding='same'` computes padding `P = (K - 1) / 2` so that when `Stride = 1`, the output feature map matches the input dimensions exactly.",
    "wrongOptionExplanations": {
      "1": "Both padding modes are applied identically during training and inference.",
      "2": "Padding adds pixels to the external borders, never deleting central data.",
      "3": "Flatten layers convert 2D feature maps to 1D vectors, not valid padding."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "`padding='valid'` = No padding (shrinks image). `padding='same'` = Zero-padding (preserves dimensions when stride=1)."
  },
  {
    "id": "aiml-092",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "CNN",
    "difficulty": "hard",
    "type": "output_or_prediction",
    "question": "A convolutional layer takes an RGB color image (3 input channels) and applies 16 filters, each of size `3 x 3`. Each filter has 1 bias term. How many total trainable parameters exist in this convolutional layer?",
    "codeSnippet": "",
    "options": [
      "448",
      "144",
      "432",
      "48"
    ],
    "correctAnswer": 0,
    "explanation": "Each filter must span all input channels: `Filter_weights = Kernel_H * Kernel_W * Channels = 3 * 3 * 3 = 27` weights per filter. Adding 1 bias per filter = `27 + 1 = 28` parameters per filter. With 16 filters: `Total = 16 * 28 = 448` parameters.",
    "wrongOptionExplanations": {
      "1": "144 is `16 * (3 * 3)`, completely ignoring the 3 color channels and biases.",
      "2": "432 is `16 * (3 * 3 * 3)`, forgetting the 16 bias parameters.",
      "3": "48 is `16 * 3`."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Conv2D Parameters = `Filters * (Kernel_H * Kernel_W * Input_Channels + 1)`."
  },
  {
    "id": "aiml-093",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "RNN and Sequence Models",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "How does a standard Recurrent Neural Network (RNN) process sequential data (like time-series or sentences) differently from a feedforward network?",
    "codeSnippet": "",
    "options": [
      "An RNN maintains a cyclical 'hidden state' memory vector `h_t` that is updated at each timestep using both the current input `x_t` and the previous hidden state `h_{t-1}`.",
      "An RNN executes only once on the entire text string as a single integer.",
      "An RNN reverses the alphabet of the input string.",
      "An RNN cannot process words with more than 5 letters."
    ],
    "correctAnswer": 0,
    "explanation": "Feedforward networks assume inputs are independent. RNNs process sequential tokens step-by-step: at timestep `t`, the network computes `h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b)`. The hidden state `h_t` acts as an internal working memory that carries context forward across the sequence.",
    "wrongOptionExplanations": {
      "1": "RNNs process sequences iteratively across timesteps `t = 1...T`.",
      "2": "String reversal is an explicit data transformation, not RNN architecture.",
      "3": "RNNs handle arbitrary sequence lengths through temporal parameter sharing."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "RNN key equation: `h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b)`. Loops memory from past step into current step."
  },
  {
    "id": "aiml-094",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "RNN and Sequence Models",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "Standard RNNs fail on long sentences due to vanishing gradients across long time horizons. Long Short-Term Memory (LSTM) networks resolve this using an explicit Cell State (`C_t`) controlled by three gates. What are these three gates and their functions?",
    "codeSnippet": "",
    "options": [
      "Forget Gate (decides what information to discard from cell state), Input Gate (decides what new information to store), Output Gate (decides what to output as hidden state).",
      "Start Gate, Middle Gate, Stop Gate.",
      "Push Gate, Pop Gate, Shift Gate.",
      "Encoder Gate, Decoder Gate, Attention Gate."
    ],
    "correctAnswer": 0,
    "explanation": "LSTM replaces the simple recurrent unit with a memory cell governed by 3 sigmoid gates: 1. Forget gate `f_t`: removes irrelevant past history, 2. Input gate `i_t`: determines what newly incoming information to record into the cell state, and 3. Output gate `o_t`: filters the cell state to produce the next hidden state `h_t`. The additive cell state allows gradients to flow unimpeded.",
    "wrongOptionExplanations": {
      "1": "Start, Middle, and Stop are not LSTM gating components.",
      "2": "Push, Pop, and Shift describe hardware stack registers.",
      "3": "Encoder, Decoder, and Attention describe the Transformer architecture, not the internal gates of an LSTM cell."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Three LSTM Gates: Forget Gate (discard past), Input Gate (write new), Output Gate (read out)."
  },
  {
    "id": "aiml-095",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "RNN and Sequence Models",
    "difficulty": "hard",
    "type": "application_based",
    "question": "How does a Gated Recurrent Unit (GRU) simplify the LSTM architecture while retaining comparable performance on sequential tasks?",
    "codeSnippet": "",
    "options": [
      "GRU eliminates the separate Cell State, merges the Forget and Input gates into a single 'Update Gate', and adds a 'Reset Gate', resulting in fewer parameters and faster training.",
      "GRU removes all weights and uses only linear regression.",
      "GRU cannot run on text data, only on images.",
      "GRU adds 5 additional gates to make the network deeper."
    ],
    "correctAnswer": 0,
    "explanation": "GRU (Cho et al., 2014) streamlines the LSTM cell: it combines the cell state and hidden state into a unified state, and reduces the gating mechanism to just two gates: an Update Gate (governing how much past state to keep) and a Reset Gate (governing how much past state to forget). With ~25% fewer parameters, it trains faster than LSTM.",
    "wrongOptionExplanations": {
      "1": "GRU maintains non-linear recurrent weight matrices.",
      "2": "GRU is widely used in NLP, audio transcription, and time-series forecasting.",
      "3": "GRU reduces complexity from 3 gates to 2 gates, not adding 5 gates."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "GRU has 2 gates (Reset Gate and Update Gate) and NO separate cell state. Faster to train than LSTM."
  },
  {
    "id": "aiml-096",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Regularization in Deep Learning",
    "difficulty": "medium",
    "type": "code_or_pseudocode",
    "question": "How does Dropout (e.g. `Dropout(0.50)`) prevent overfitting during neural network training, and how does its behavior change during test/inference time?",
    "codeSnippet": "",
    "options": [
      "During training, it randomly zeroes out 50% of neuron activations on each forward pass, preventing co-adaptation of features; during inference/testing, all neurons are active and outputs are scaled accordingly.",
      "It permanently deletes 50% of the weights from the model file on disk.",
      "It drops 50% of the training images before training starts.",
      "It runs during testing to randomly flip 50% of predictions."
    ],
    "correctAnswer": 0,
    "explanation": "During training, Dropout temporarily deactivates a random fraction `p` of neurons on each iteration. This prevents neurons from co-adapting (relying too heavily on specific peer neurons), forcing the network to learn robust, redundant representations (acting like an implicit ensemble of sub-networks). During testing, dropout is disabled and all neurons fire, with outputs scaled by `(1 - p)`.",
    "wrongOptionExplanations": {
      "1": "Weights are never deleted permanently from disk; dropout is an on-the-fly mask applied to activations during training passes.",
      "2": "Dropout operates on hidden layer neuron activations, not on training dataset samples.",
      "3": "Dropout is turned OFF during test/inference time to ensure deterministic predictions."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Dropout is ACTIVE during training (masks neurons to prevent co-adaptation), but DISABLED during testing!"
  },
  {
    "id": "aiml-097",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Regularization in Deep Learning",
    "difficulty": "hard",
    "type": "scenario_based",
    "question": "What primary problem does Batch Normalization (BatchNorm) solve in deep neural networks, and where is it typically inserted?",
    "codeSnippet": "",
    "options": [
      "It mitigates internal covariate shift by normalizing the layer inputs across the mini-batch to have mean 0 and variance 1, inserted typically between linear transformations and activation functions.",
      "It deletes batches that have high loss values.",
      "It converts 32-bit floats into 8-bit integers.",
      "It replaces all activation functions with Sigmoid."
    ],
    "correctAnswer": 0,
    "explanation": "As weights update during training, the distribution of inputs to deeper layers continuously shifts (Internal Covariate Shift), forcing layers to adapt to moving targets. BatchNorm normalizes activations over the mini-batch: `x_hat = (x - \u03bc_B) / sqrt(\u03c3_B^2 + \u03b5)`, and then applies learnable scale and shift parameters (`\u03b3 * x_hat + \u03b2`). This accelerates training speed, enables higher learning rates, and acts as mild regularization.",
    "wrongOptionExplanations": {
      "1": "BatchNorm normalizes data across all batches; it never deletes batches.",
      "2": "Float quantization (FP32 to INT8) is post-training model compression, not BatchNorm.",
      "3": "BatchNorm is applied alongside non-linear activations like ReLU, not replacing them."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Batch Normalization: Normalizes mini-batch to mean 0, variance 1. Stabilizes training and allows higher learning rates."
  },
  {
    "id": "aiml-098",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Training Neural Networks",
    "difficulty": "easy",
    "type": "output_or_prediction",
    "question": "A training dataset contains 10,000 samples. If the model is trained with a `batch_size = 50`, how many iterations (gradient updates) occur during a single complete `epoch`?",
    "codeSnippet": "",
    "options": [
      "200 iterations",
      "500 iterations",
      "50 iterations",
      "10,000 iterations"
    ],
    "correctAnswer": 0,
    "explanation": "An 'epoch' is one complete pass through the entire training dataset. The number of iterations (batches) per epoch is `Total_Samples / Batch_Size = 10,000 / 50 = 200` iterations.",
    "wrongOptionExplanations": {
      "1": "500 is `10,000 / 20`.",
      "2": "50 is the batch size itself.",
      "3": "10,000 would be the iteration count only if `batch_size = 1` (pure Stochastic Gradient Descent)."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Epoch = 1 full pass through all data. Iterations per epoch = `Total_Samples / Batch_Size`."
  },
  {
    "id": "aiml-099",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Training Neural Networks",
    "difficulty": "medium",
    "type": "conceptual",
    "question": "Compare Batch Gradient Descent, Stochastic Gradient Descent (SGD), and Mini-Batch Gradient Descent. Why is Mini-Batch Gradient Descent the universal industry standard?",
    "codeSnippet": "",
    "options": [
      "Batch GD computes gradients on all dataset samples (slow, huge memory); Pure SGD updates on 1 sample (noisy, erratic); Mini-Batch GD balances efficiency and stability by computing gradients on small batches (e.g. 32 to 256 samples), leveraging GPU parallel vectorization.",
      "Mini-Batch GD requires zero matrix multiplications.",
      "Pure SGD is only used on quantum supercomputers.",
      "Batch GD runs 1,000 times faster than Mini-Batch GD on GPUs."
    ],
    "correctAnswer": 0,
    "explanation": "1. Batch GD computes the exact gradient over all `N` samples per step (prohibitively slow and memory-intensive for large datasets). 2. Pure SGD computes gradients on 1 sample at a time (noisy, fluctuates wildly, cannot utilize GPU matrix parallelism). 3. Mini-Batch GD takes small chunks (32, 64, 128), offering smooth convergence, regularizing noise, and hardware-accelerated parallel GPU execution.",
    "wrongOptionExplanations": {
      "1": "Mini-batch matrix multiplications are the fundamental workload executed on GPUs.",
      "2": "SGD is a simple textbook optimization algorithm executable on any hardware.",
      "3": "Batch GD is much slower than Mini-Batch because processing millions of samples per update is inefficient."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Mini-Batch GD (typical sizes 32, 64, 128) is the universal industry standard for GPU parallel efficiency."
  },
  {
    "id": "aiml-100",
    "module": "AI + Machine Learning + Deep Learning",
    "topic": "Deep Learning",
    "subtopic": "Training Neural Networks",
    "difficulty": "hard",
    "type": "application_based",
    "question": "Why has the Adam (Adaptive Moment Estimation) optimizer become the default optimization algorithm in deep learning compared to standard Stochastic Gradient Descent (SGD)?",
    "codeSnippet": "",
    "options": [
      "Adam combines the benefits of Momentum (exponential moving average of past gradients to accelerate through plateaus) and RMSProp (adapts individual learning rates for each parameter based on historical squared gradients).",
      "Adam eliminates the need for computing loss functions.",
      "Adam guarantees that training reaches global zero error in exactly 1 epoch.",
      "Adam replaces backpropagation with random search."
    ],
    "correctAnswer": 0,
    "explanation": "Adam maintains two moving averages: 1. First moment `m_t` (mean of past gradients, providing Momentum to escape saddle points and smooth oscillation), and 2. Second moment `v_t` (uncentered variance of past gradients, like RMSProp, automatically scaling learning rates so frequent features get smaller updates and rare features get larger updates). It also includes bias correction for zero initialization.",
    "wrongOptionExplanations": {
      "1": "Adam requires loss computation on every batch to calculate gradient vectors.",
      "2": "No optimizer can guarantee reaching the global minimum in 1 epoch on non-convex loss surfaces.",
      "3": "Adam relies strictly on backpropagation gradients."
    },
    "realWorldApplication": "Applied in production recommendation systems, predictive churn modeling, and automated vision/NLP pipelines.",
    "placementTrap": "Adam = Momentum (1st moment, tracks velocity) + RMSProp (2nd moment, adaptive per-parameter learning rate)."
  }
];
if (!window.QUESTION_BANKS) window.QUESTION_BANKS = {};
window.QUESTION_BANKS['ai-ml-dl'] = window.AIML_QUESTIONS;
