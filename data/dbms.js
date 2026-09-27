/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: DBMS & SQL
   Normalization, ACID, complex SQL outputs, candidate keys & transactions
   ========================================================================== */

(function () {
  window.DBMS_QUESTIONS = [
    {
      id: 'dbms-001',
      question: 'Consider a relation `R(A, B, C, D)` with functional dependencies: `A -> B`, `B -> C`, and `C -> D`. Which of the following is the candidate key and what is the highest normal form satisfied by relation R?',
      codeSnippet: '',
      options: [
        'Candidate key is {A, B}; Relation is in 2NF',
        'Candidate key is {A}; Relation is in 2NF but not 3NF',
        'Candidate key is {A}; Relation is in 3NF and BCNF',
        'Candidate key is {D}; Relation is in 1NF only'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Normalization (1NF-BCNF)',
      explanation: 'Closure of `A+` is `{A, B, C, D}`, making `A` the only candidate key. Prime attribute is `A`; non-prime attributes are `B, C, D`. Relation is in 1NF (atomic) and 2NF (no partial dependency since key is single attribute `A`). However, `B -> C` and `C -> D` are transitive dependencies where non-prime attributes determine other non-prime attributes. Hence, R violates 3NF.',
      wrongOptionExplanations: {
        '0': '`A` alone determines all attributes, so `{A, B}` is a superkey, not a minimal candidate key.',
        '2': 'Violates 3NF due to transitive dependencies `A -> B -> C` and `B -> C -> D`.',
        '3': '`D` cannot determine any attribute other than itself.'
      },
      realWorldApplication: 'Transitive dependencies cause update and deletion anomalies in relational enterprise schemas, leading to data inconsistency in microservice reporting tables.',
      placementTip: 'MNC shortcut: If the candidate key is a single attribute (like A), partial dependency is impossible, so it is automatically at least in 2NF!'
    },
    {
      id: 'dbms-002',
      question: 'Evaluate the following SQL query executed on an `Employees` table. What is the fundamental difference between `WHERE` and `HAVING` clauses illustrated here?',
      codeSnippet: 'SELECT department_id, COUNT(*) as emp_count, AVG(salary) as avg_sal\nFROM Employees\nWHERE status = \'ACTIVE\'\nGROUP BY department_id\nHAVING COUNT(*) >= 5;',
      options: [
        'WHERE and HAVING are completely interchangeable; HAVING is syntactic sugar.',
        'WHERE filters individual rows before aggregation; HAVING filters aggregated groups created by GROUP BY.',
        'WHERE works only on numeric data; HAVING works only on strings.',
        'HAVING executes before WHERE in the logical SQL query processing order.'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'comparison',
      topic: 'GROUP BY & HAVING',
      explanation: 'In the logical SQL execution pipeline: `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY`. The `WHERE` clause filters individual rows before grouping occurs. `HAVING` filters the grouped summary buckets after aggregate functions (`COUNT(*)`, `AVG()`) have been calculated.',
      wrongOptionExplanations: {
        '0': 'They are not interchangeable; aggregate functions like `COUNT(*)` cannot be evaluated inside a `WHERE` clause.',
        '2': 'Both clauses support all standard data types and expressions.',
        '3': 'Logical SQL order executes `WHERE` before `GROUP BY`, and `HAVING` executes after `GROUP BY`.'
      },
      realWorldApplication: 'Understanding SQL execution order prevents catastrophic performance degradation in enterprise analytics queries processing millions of records.',
      placementTip: 'Never put an aggregate function like `SUM()` or `COUNT()` in the `WHERE` clause! Always filter aggregates in `HAVING`.'
    },
    {
      id: 'dbms-003',
      question: 'Given two tables `Orders` (10 rows) and `Customers` (10 rows), a query executes: `SELECT * FROM Orders LEFT JOIN Customers ON Orders.customer_id = Customers.id;`. If exactly 3 orders do not match any customer ID, what will be the total number of rows returned?',
      codeSnippet: '',
      options: [
        '7 rows',
        '10 rows',
        '13 rows',
        '3 rows'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'code_output',
      topic: 'Complex SQL Joins',
      explanation: 'A `LEFT JOIN` guarantees that every record from the left table (`Orders`) is preserved in the output. For matching records (7 rows), customer columns are populated. For non-matching records (3 rows), customer columns contain `NULL`. The total number of rows returned is exactly 10.',
      wrongOptionExplanations: {
        '0': '7 rows would be returned by an `INNER JOIN`, which discards non-matching rows.',
        '2': 'A `FULL OUTER JOIN` would return extra rows if there were unmatched customers, but this is a `LEFT JOIN` on 10 orders.',
        '3': '3 rows would be returned if querying `WHERE Customers.id IS NULL`.'
      },
      realWorldApplication: '`LEFT JOIN` is standard when querying transactional ledgers where historical entries must be retained even if customer profile accounts were deactivated or purged.',
      placementTip: 'Left Join preserves ALL rows of the Left table regardless of matching. Output row count is at least the size of the left table.'
    },
    {
      id: 'dbms-004',
      question: 'Which ACID property guarantees that in the event of an unexpected server crash or power failure midway through a multi-step banking fund transfer, either all changes are permanently saved or the database remains untouched?',
      codeSnippet: '',
      options: [
        'Consistency',
        'Atomicity',
        'Isolation',
        'Durability'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'ACID & Transactions',
      explanation: 'Atomicity (the "All-or-Nothing" principle) guarantees that a transaction composed of multiple operations is treated as a single atomic unit. If any step fails or crash occurs before `COMMIT`, the DBMS undoes all partial writes via rollback logs.',
      wrongOptionExplanations: {
        '0': 'Consistency ensures data transitions from one valid state satisfying all schema constraints to another.',
        '2': 'Isolation guarantees concurrent transactions execute without interfering with one another.',
        '3': 'Durability ensures committed transactions survive system crashes via write-ahead logging (WAL).'
      },
      realWorldApplication: 'Financial transactions debiting one bank account and crediting another rely on transactional atomicity to prevent phantom money creation or loss.',
      placementTip: 'MNC keywords: "All-or-nothing" / "half-completed rollback" = Atomicity. "Survives crash after commit" = Durability.'
    },
    {
      id: 'dbms-005',
      question: 'Under Two-Phase Locking (2PL) protocol, what characterizes the "Shrinking Phase" of a database transaction?',
      codeSnippet: '',
      options: [
        'The transaction may acquire new shared locks but release exclusive locks.',
        'The transaction releases locks and cannot acquire any new locks of any kind.',
        'The transaction is aborted and rolled back to reduce memory footprint.',
        'The transaction shrinks its log file size in the transaction journal.'
      ],
      correctAnswer: 1,
      difficulty: 'Hard',
      type: 'conceptual',
      topic: 'Locks & Concurrency',
      explanation: 'Two-Phase Locking has two distinct phases: (1) Growing Phase: Transaction may obtain locks but may not release any lock. (2) Shrinking Phase: Once the first lock is released, the transaction enters the shrinking phase where it may only release locks and can NEVER acquire any new lock. This guarantees serializability.',
      wrongOptionExplanations: {
        '0': 'Acquiring any lock in the shrinking phase is strictly forbidden by 2PL rules.',
        '2': 'Shrinking phase is normal execution release, not an abort or rollback.',
        '3': 'Locking protocol governs concurrency control, not storage compression.'
      },
      realWorldApplication: 'Strict 2PL is implemented by database engines like PostgreSQL and MySQL InnoDB to ensure serializable isolation levels and prevent dirty reads and lost updates.',
      placementTip: '2PL rule: Once you release your first lock, you can never obtain another lock! Growing = Acquire only; Shrinking = Release only.'
    }
  ];
})();
