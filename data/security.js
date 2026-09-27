/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: NETWORK & CYBER SECURITY
   CIA triad, attack scenarios, cryptography, OWASP Top 10 & defensive controls
   ========================================================================== */

(function () {
  window.SECURITY_QUESTIONS = [
    {
      id: 'sec-001',
      question: 'A malicious user enters `\' OR \'1\'=\'1` into the username field of an insecure web login portal. The server constructs the query: `SELECT * FROM Users WHERE username = \'\' OR \'1\'=\'1\' AND password = \'...\';` and successfully grants unauthorized administrator access. Which category of web vulnerability occurred and what is the primary defensive remedy?',
      codeSnippet: '',
      options: [
        'Cross-Site Scripting (XSS); Remediated by disabling browser cookies',
        'SQL Injection (SQLi); Remediated by using Parameterized Queries (Prepared Statements)',
        'Cross-Site Request Forgery (CSRF); Remediated by setting CORS headers to wildcard `*`',
        'Buffer Overflow; Remediated by increasing database RAM'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'debugging',
      topic: 'SQLi & XSS Prevention',
      explanation: 'This is a classic SQL Injection (SQLi) attack caused by directly concatenating unsanitized user input into dynamic SQL strings. The injected condition `\'1\'=\'1\'` evaluates to true for every row in the table, bypassing authentication. The universal industry remedy is using Parameterized Queries (Prepared Statements) or an ORM, which treats user input strictly as literal data parameters, never executable SQL commands.',
      wrongOptionExplanations: {
        '0': 'XSS involves injecting malicious client-side JavaScript into web pages viewed by other users.',
        '2': 'CSRF tricks an authenticated user into executing unwanted actions on a trusted site; setting CORS to `*` actually weakens security.',
        '3': 'Buffer overflow is a memory boundary overrun in languages like C/C++, not a relational database logic injection.'
      },
      realWorldApplication: 'SQL Injection has historically caused massive data breaches exposing hundreds of millions of user records, passwords, and credit card numbers.',
      placementTip: 'Always remember: Prepared Statements / Parameterized Queries are the primary defense against SQL Injection!'
    },
    {
      id: 'sec-002',
      question: 'During an online session on an unencrypted public airport Wi-Fi hotspot, an attacker intercepts network packets passing between a user and an unencrypted HTTP banking login portal, eavesdropping on plain-text credentials and session tokens. Which component of the CIA Triad is directly violated by this Man-in-the-Middle (MitM) attack?',
      codeSnippet: '',
      options: [
        'Confidentiality',
        'Integrity',
        'Availability',
        'Non-Repudiation'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      type: 'scenario',
      topic: 'CIA Triad & Auth',
      explanation: 'Confidentiality ensures that sensitive data is accessible and readable only by authorized individuals and systems, protected against unauthorized disclosure or eavesdropping. Intercepting and reading unencrypted plain-text login credentials is a direct breach of Confidentiality.',
      wrongOptionExplanations: {
        '1': 'Integrity refers to safeguarding data against unauthorized alteration or tampering during storage or transit.',
        '2': 'Availability guarantees that systems, networks, and applications are reliably accessible to authorized users when needed (e.g. threatened by DoS/DDoS).',
        '3': 'Non-repudiation ensures a sender cannot deny having sent a message.'
      },
      realWorldApplication: 'Enforcing HTTPS with TLS 1.3 encryption across all public network endpoints prevents packet sniffing and guarantees transport-layer confidentiality.',
      placementTip: 'CIA Triad: Eavesdropping / data theft = Confidentiality. Tampering / data modification = Integrity. Server downtime / DDoS = Availability.'
    },
    {
      id: 'sec-003',
      question: 'In asymmetric public-key cryptography (such as RSA), if Alice wants to send a confidential encrypted message to Bob such that ONLY Bob can decrypt and read it, which cryptographic key must Alice use to encrypt the message?',
      codeSnippet: '',
      options: [
        'Alice\'s Private Key',
        'Alice\'s Public Key',
        'Bob\'s Public Key',
        'Bob\'s Private Key'
      ],
      correctAnswer: 2,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Symmetric vs Asymmetric',
      explanation: 'In asymmetric encryption: Anyone can encrypt data using the recipient\'s Public Key (which is publicly shared), but ONLY the recipient\'s mathematically linked Private Key (which is kept strictly secret by Bob) can decrypt it. Therefore, Alice encrypts with Bob\'s Public Key.',
      wrongOptionExplanations: {
        '0': 'Encrypting with Alice\'s private key produces a Digital Signature (for authenticity/non-repudiation), not confidential encryption, because anyone with Alice\'s public key can decrypt it.',
        '1': 'Encrypting with Alice\'s public key would require Alice\'s private key to decrypt, which Bob does not possess.',
        '3': 'Bob\'s private key is confidential to Bob; Alice never has access to Bob\'s private key.'
      },
      realWorldApplication: 'The TLS handshake combines asymmetric cryptography (using the server\'s public certificate) to securely exchange a symmetric session key for high-speed AES payload encryption.',
      placementTip: 'Key Rule: For Confidentiality -> Encrypt with Recipient\'s Public Key. For Digital Signature (Authenticity) -> Sign with Sender\'s Private Key!'
    },
    {
      id: 'sec-004',
      question: 'An attacker floods a web application server with millions of spoofed TCP SYN connection requests from a globally distributed botnet of compromised IoT devices, exhausting all available connection backlog queue entries and rendering the server inaccessible to legitimate customers. What type of attack has occurred?',
      codeSnippet: '',
      options: [
        'Distributed Denial of Service (DDoS) SYN Flood',
        'Cross-Site Scripting (Reflected XSS)',
        'SQL Injection (Blind Boolean)',
        'Session Hijacking via Cross-Site Request Forgery'
      ],
      correctAnswer: 0,
      difficulty: 'Easy',
      type: 'scenario',
      topic: 'Firewalls & IDS/IPS',
      explanation: 'A Distributed Denial of Service (DDoS) SYN Flood leverages a botnet to send a massive barrage of initial TCP SYN packets without responding to the server\'s SYN-ACK. The server reserves memory for half-open connections in its backlog table until memory is completely exhausted, denying service to legitimate traffic and violating Availability.',
      wrongOptionExplanations: {
        '1': 'XSS executes script code inside victim browsers, not exhausting network server connection tables.',
        '2': 'SQL injection targets database query logic, not TCP connection queues.',
        '3': 'Session hijacking steals authentication tokens to impersonate a user.'
      },
      realWorldApplication: 'Edge protection services like Cloudflare and AWS Shield use SYN cookies, Anycast packet scrubbing centers, and rate limiting to mitigate multi-terabit DDoS floods.',
      placementTip: 'Resource exhaustion + multiple distributed source machines = Distributed Denial of Service (DDoS).'
    },
    {
      id: 'sec-005',
      question: 'What is the primary operational difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?',
      codeSnippet: '',
      options: [
        'An IDS is software-only, while an IPS can only be a physical hardware appliance.',
        'An IDS monitors and alerts on suspicious traffic out-of-band, whereas an IPS sits in-line and actively blocks or drops malicious traffic in real time.',
        'An IDS operates only on Layer 2, while an IPS operates only on Layer 7.',
        'An IDS inspects encrypted payloads, while an IPS can only inspect plaintext.'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'comparison',
      topic: 'Firewalls & IDS/IPS',
      explanation: 'An IDS (Intrusion Detection System) operates passively out-of-band (via network TAP or SPAN port mirror) to analyze packets, match signatures, and issue alerts without affecting packet transmission. An IPS (Intrusion Prevention System) sits directly in-line in the traffic path and can actively reset TCP connections, drop packets, and block offending IP addresses in real time.',
      wrongOptionExplanations: {
        '0': 'Both IDS and IPS can be deployed as either physical appliances, virtual appliances, or host-based software.',
        '2': 'Both systems inspect packets across multiple network layers up through Layer 7 application signatures.',
        '3': 'Neither system can natively inspect encrypted payloads without SSL/TLS termination.'
      },
      realWorldApplication: 'Modern Next-Generation Firewalls (NGFW) like Palo Alto and Fortinet integrate in-line IPS engines to automatically block exploit payloads targeting CVE vulnerabilities.',
      placementTip: 'IDS = Passive monitor & alarm (Detective control). IPS = In-line active blocker (Preventative control).'
    }
  ];
})();
