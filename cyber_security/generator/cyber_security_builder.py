"""
Master Builder for MNC Placement Cybersecurity Question Bank 2026 (100 Questions)
"""

import json
import os
import sys

from cyber_part2_crypto import get_questions_part2_cryptography
from cyber_part3_attacks import get_questions_part3_cyber_attacks
from cyber_part4_devices import get_questions_part4_firewalls_security_devices
from cyber_balancer import balance_and_tune

def get_questions_part1_network_security():
    """15 questions for Network Security (IDs 1-15)"""
    return [
        {
            "id": 1,
            "question": "A database administrator at a financial services firm accidentally discovers that junior software engineers have read-only access to customer salary records and Social Security numbers, even though their job roles only require access to mock staging data. Which core pillar of the CIA Triad has been compromised?",
            "options": {
                "A": "Integrity",
                "B": "Confidentiality",
                "C": "Availability",
                "D": "Non-repudiation"
            },
            "correct_answer": "B",
            "topic": "Network Security",
            "subtopic": "Confidentiality & Access Control",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Confidentiality ensures that sensitive information is shielded from unauthorized entities, processes, and individuals. Because junior engineers were able to view sensitive production data outside their authorization boundary, confidentiality was violated even if no data was modified.",
            "why_other_options_are_wrong": {
                "A": "Integrity relates to preventing unauthorized modification, alteration, or tampering with data, which did not occur here.",
                "B": "Correct: Unauthorized disclosure or access to restricted sensitive records violates confidentiality.",
                "C": "Availability ensures systems and data remain operational and accessible to authorized users when needed.",
                "D": "Non-repudiation guarantees that an entity cannot deny the authenticity of their signature or transmission."
            },
            "real_world_application": "Enforcing Principle of Least Privilege (PoLP) and Role-Based Access Control (RBAC) in AWS IAM and SQL databases."
        },
        {
            "id": 2,
            "question": "During a routine audit of an e-commerce order processing pipeline, engineers discover that an attacker intercepted API requests in transit and altered the price parameter from $499.00 to $4.99 before the transaction reached the payment gateway. Which security attribute was directly breached?",
            "options": {
                "A": "Integrity",
                "B": "Confidentiality",
                "C": "Availability",
                "D": "Authenticity"
            },
            "correct_answer": "A",
            "topic": "Network Security",
            "subtopic": "Data Integrity & Tampering",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Integrity involves maintaining the consistency, accuracy, and trustworthiness of data over its entire lifecycle. Altering transaction values or payload parameters in transit without authorization is a direct violation of data integrity.",
            "why_other_options_are_wrong": {
                "A": "Correct: Tampering with or modifying data in flight directly violates integrity.",
                "B": "Confidentiality prevents unauthorized reading/exposure; while the attacker may have read the packet, the critical security breach cited is unauthorized alteration.",
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
            "company_pattern": ["Capgemini-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "C": "Non-repudiation using asymmetric digital signatures",
                "D": "Integrity using SHA-256 hashing alone without keys"
            },
            "correct_answer": "C",
            "topic": "Network Security",
            "subtopic": "Non-repudiation & CIA Extensions",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Deloitte-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Non-repudiation prevents an individual from denying the authenticity or origin of a transmitted message. It is achieved using asymmetric digital signatures because only the private key owner could have produced the valid signature verifiable by their public key.",
            "why_other_options_are_wrong": {
                "A": "Symmetric encryption shares a single secret key between parties, so either party could have created the ciphertext, failing non-repudiation.",
                "B": "Clustering provides high availability and fault tolerance, but does not prove who authorized a transaction.",
                "C": "Correct: Non-repudiation via asymmetric digital signatures binds the transaction uniquely to the sender's private key.",
                "D": "Unkeyed SHA-256 provides integrity verification if the hash is trusted, but cannot prove who authored the original data."
            },
            "real_world_application": "SWIFT wire transfers and digital legal contracts requiring RSA/ECDSA digital signatures to prevent legal repudiation."
        },
        {
            "id": 5,
            "question": "A financial auditor claims that 'Encrypting a database with AES-GCM guarantees Confidentiality, Integrity, and Availability simultaneously.' How should a senior security engineer evaluate this claim?",
            "options": {
                "A": "The claim is entirely accurate because authenticated encryption (AEAD) covers all three CIA triad components.",
                "B": "The claim is false because encryption only guarantees Confidentiality; it has zero impact on Integrity or Availability.",
                "C": "The claim is partially false because AES-GCM provides Confidentiality and Integrity, but does not guarantee Availability against deletion or hardware loss.",
                "D": "The claim is false because AES-GCM provides only Availability and Integrity, requiring RSA for Confidentiality."
            },
            "correct_answer": "C",
            "topic": "Network Security",
            "subtopic": "CIA Trade-offs & Cryptographic Limits",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "AES-GCM is an Authenticated Encryption with Associated Data (AEAD) mode that guarantees confidentiality (via counter mode encryption) and integrity/authenticity (via GMAC authentication tags). However, cryptography cannot guarantee Availability: if an attacker wipes the disk, drops packets, or deletes the encrypted file, the system becomes unavailable.",
            "why_other_options_are_wrong": {
                "A": "Incorrect trap: AEAD modes do not protect against denial-of-service, data deletion, or physical hardware outages.",
                "B": "Incorrect: GCM mode specifically embeds an authentication tag that detects tampering, thereby ensuring integrity.",
                "C": "Correct: Cryptography handles confidentiality and integrity, while availability requires redundant hardware, backups, and failover.",
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
            "company_pattern": ["Deloitte-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "Integrity and Availability are both compromised, while Confidentiality may or may not be breached depending on data exfiltration.",
                "C": "Availability is compromised, but Integrity is perfectly preserved because the files are encrypted with valid mathematics.",
                "D": "Neither Integrity nor Availability is compromised since backups exist in cold storage."
            },
            "correct_answer": "B",
            "topic": "Network Security",
            "subtopic": "Incident-based Reasoning (Ransomware)",
            "difficulty": "Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["LTIMindtree-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Unauthorized encryption of data is unauthorized modification, which fundamentally breaches Integrity. Furthermore, legitimate users are locked out of accessing the active files, breaching Availability. Confidentiality is breached only if the attacker exfiltrated the data (double extortion) prior to encryption.",
            "why_other_options_are_wrong": {
                "A": "Ransomware encryption does not automatically mean data was published or read; Availability and Integrity are certainly breached.",
                "B": "Correct: Unauthorized ciphertext transformation breaches Integrity and denies service (Availability); exfiltration determines Confidentiality impact.",
                "C": "Incorrect trap: Unauthorized modification of plaintext into unreadable ciphertext is a direct destruction of authorized integrity.",
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
                "C": "Availability",
                "D": "Authenticity"
            },
            "correct_answer": "C",
            "topic": "Network Security",
            "subtopic": "High Availability & Disaster Recovery",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Infosys-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Dual data centers, automated failover, redundant ISPs, and UPS battery systems are designed to eliminate single points of failure, ensuring that network applications remain operational and reachable around the clock, safeguarding Availability.",
            "why_other_options_are_wrong": {
                "A": "Redundancy alone does not prevent unauthorized data modification or race conditions.",
                "B": "Redundant data centers do not encrypt or protect data against unauthorized eavesdropping.",
                "C": "Correct: Eliminating downtime and hardware failure points directly enforces the Availability pillar.",
                "D": "Authenticity requires cryptographic certificates, signatures, or multi-factor identity controls."
            },
            "real_world_application": "Meeting high service-level agreements (SLA 99.999% 'five nines') for enterprise cloud applications."
        },
        {
            "id": 9,
            "question": "A network security analyst reviews an incident where an external attacker exploited an unauthenticated endpoint to download an unencrypted CSV export containing 200,000 customer email addresses and hashed passwords. The database contents were untouched and the application remained fully online. Which CIA property was exclusively violated?",
            "options": {
                "A": "Availability",
                "B": "Confidentiality",
                "C": "Integrity",
                "D": "Non-repudiation"
            },
            "correct_answer": "B",
            "topic": "Network Security",
            "subtopic": "Data Breach Classification",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["HCLTech-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Because customer data was exposed to an unauthorized third party, Confidentiality was violated. Because the database was untouched and data remained unmodified, Integrity was preserved. Because the server remained responsive and online, Availability was preserved.",
            "why_other_options_are_wrong": {
                "A": "The application experienced zero downtime and remained accessible, preserving Availability.",
                "B": "Correct: The unauthorized leakage/download of sensitive customer data is a strict Confidentiality breach.",
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
            "company_pattern": ["Accenture-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "Encrypting server hard drives with a single master private key stored exclusively on a physical smart card with no escrow or backup",
                "C": "Installing an Intrusion Detection System in passive listening mode on a switch port analyzer (SPAN)",
                "D": "Restricting database read privileges using Role-Based Access Control (RBAC)"
            },
            "correct_answer": "B",
            "topic": "Network Security",
            "subtopic": "CIA Trade-offs & Key Custody",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Deloitte-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "If drive encryption is implemented without key escrow, backup keys, or recovery procedures to maximize confidentiality, losing or damaging that single smart card permanently renders the encrypted data unrecoverable, destroying Availability.",
            "why_other_options_are_wrong": {
                "A": "Salting and hashing passwords securely protects credentials without impacting password verification availability.",
                "B": "Correct: Extreme confidentiality controls without key management redundancy introduce a single point of failure for availability.",
                "C": "A passive SPAN port copies traffic out-of-band; it cannot drop packets or degrade network availability.",
                "D": "Well-designed RBAC enforces proper access boundaries without obstructing legitimate authorized tasks."
            },
            "real_world_application": "Enterprise Key Management Systems (KMS) implementing M-of-N split-key recovery (Shamir's Secret Sharing)."
        },
        {
            "id": 12,
            "question": "A security operations team observes an alert where an unauthorized user repeatedly attempted to modify system log files in `/var/log/secure` to erase evidence of a brute-force login attempt. The operating system prevented the write because the log directory was configured with the immutable append-only attribute (`chattr +a`). Which security objective was preserved by this control?",
            "options": {
                "A": "Integrity",
                "B": "Confidentiality",
                "C": "Availability",
                "D": "Scalability"
            },
            "correct_answer": "A",
            "topic": "Network Security",
            "subtopic": "Audit Log Integrity & Non-repudiation",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Making audit logs append-only guarantees that existing records cannot be edited, overwritten, or deleted by intruders, preserving the historical truth and integrity of forensic evidence.",
            "why_other_options_are_wrong": {
                "A": "Correct: Protecting logs from alteration or erasure directly preserves forensic data integrity.",
                "B": "Append-only permissions do not hide the contents of log files from users who have read access.",
                "C": "While it prevents deletion, the core purpose of securing audit trails against alteration is proving forensic integrity.",
                "D": "Scalability refers to handling growing workloads, completely unrelated to file permission attributes."
            },
            "real_world_application": "Configuring WORM (Write Once, Read Many) storage for compliance with SEC Rule 17a-4 and PCI DSS log retention standards."
        },
        {
            "id": 13,
            "question": "In the context of the CIA Triad, which of the following is classified as a Detective Control rather than a Preventive or Corrective Control?",
            "options": {
                "A": "Network layer end-to-end IPsec tunnel encryption",
                "B": "Restoring database snapshots from an off-site cold storage vault following a disaster",
                "C": "Continuous file integrity monitoring (FIM) that alerts when system configuration files are modified",
                "D": "Hardening default router credentials and disabling Telnet in favor of SSH"
            },
            "correct_answer": "C",
            "topic": "Network Security",
            "subtopic": "Security Control Classifications",
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Detective controls identify, log, and alert on security incidents or policy violations as they occur or after they have occurred. File Integrity Monitoring (FIM tools like Tripwire or OSSEC) detects modifications by comparing file hashes against known baselines.",
            "why_other_options_are_wrong": {
                "A": "IPsec encryption is a Preventive control designed to stop eavesdroppers before they can inspect data in flight.",
                "B": "Restoring backups is a Corrective control designed to recover systems after damage or data loss has occurred.",
                "C": "Correct: File Integrity Monitoring inspects and alerts on anomalies, making it a classic Detective control.",
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
            "company_pattern": ["Tech Mahindra-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "Defense in Depth (Layered Defense)",
                "C": "Shannon's Maxim",
                "D": "Moore's Law of Cryptography"
            },
            "correct_answer": "B",
            "topic": "Network Security",
            "subtopic": "Defense in Depth",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Defense in Depth states that multiple layers of security controls (perimeter, network, host, application, and data) must be established so that if one layer fails (e.g., firewall bypass or insider threat), secondary defenses prevent a catastrophic breach.",
            "why_other_options_are_wrong": {
                "A": "Kerckhoffs's Principle states that a cryptosystem should be secure even if everything about the system, except the key, is public knowledge.",
                "B": "Correct: Relying exclusively on perimeter firewalls ignores Defense in Depth, leaving internal assets vulnerable to insiders or lateral movement.",
                "C": "Shannon's Maxim is the cryptographic restatement of Kerckhoffs's principle: 'The enemy knows the system.'",
                "D": "Moore's Law relates to semiconductor transistor density over time, not layered security architecture."
            },
            "real_world_application": "Zero Trust Architecture (ZTA) assuming that perimeter defenses can be breached and enforcing identity verification on every request."
        }
    ]

def assemble_and_validate():
    part1 = get_questions_part1_network_security()
    part2 = get_questions_part2_cryptography()
    part3 = get_questions_part3_cyber_attacks()
    part4 = get_questions_part4_firewalls_security_devices()

    all_questions = part1 + part2 + part3 + part4
    assert len(all_questions) == 100, f"Expected 100 questions, got {len(all_questions)}"

    # Apply balancer
    balanced_questions = balance_and_tune(all_questions)

    # Validate distributions
    topics = {}
    diffs = {}
    qtypes = {}
    answers = {}

    for q in balanced_questions:
        t = q["topic"]
        topics[t] = topics.get(t, 0) + 1
        d = q["difficulty"]
        diffs[d] = diffs.get(d, 0) + 1
        qt = q["question_type"]
        qtypes[qt] = qtypes.get(qt, 0) + 1
        ans = q["correct_answer"]
        answers[ans] = answers.get(ans, 0) + 1

    print("\n--- Balanced Distributions ---")
    print(f"Topics: {topics}")
    print(f"Difficulties: {diffs}")
    print(f"Question Types: {qtypes}")
    print(f"Answers: {answers}")

    assert topics == {
        "Network Security": 15,
        "Cryptography": 30,
        "Cyber Attacks": 35,
        "Firewalls & Security Devices": 20
    }, f"Topic count mismatch: {topics}"

    assert diffs == {
        "Medium": 20,
        "Medium-Hard": 45,
        "Hard": 35
    }, f"Difficulty mismatch: {diffs}"

    assert qtypes == {
        "Scenario-Based": 35,
        "Application-Based": 20,
        "Direct Conceptual": 15,
        "Conceptual Trap": 15,
        "Comparison": 10,
        "Log or Event Analysis": 5
    }, f"Question type mismatch: {qtypes}"

    assert answers == {
        "A": 25,
        "B": 25,
        "C": 25,
        "D": 25
    }, f"Answer balance mismatch: {answers}"

    # Verify options text matches why_other_options_are_wrong keys
    for q in balanced_questions:
        assert set(q["options"].keys()) == {"A", "B", "C", "D"}
        assert set(q["why_other_options_are_wrong"].keys()) == {"A", "B", "C", "D"}
        assert q["correct_answer"] in ["A", "B", "C", "D"]

    # Write files
    target_dir = os.path.join(os.path.dirname(__file__), "cyber_security")
    os.makedirs(target_dir, exist_ok=True)

    json_path = os.path.join(target_dir, "questions.json")
    js_path = os.path.join(target_dir, "questions.js")

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(balanced_questions, f, indent=2, ensure_ascii=False)
    print(f"\nWritten {json_path} ({os.path.getsize(json_path)} bytes)")

    with open(js_path, "w", encoding="utf-8") as f:
        f.write("// MNC Placement Cybersecurity Question Bank 2026 (100 Questions)\n")
        f.write("// Auto-generated & validated for placement preparation\n")
        f.write("const questionsData = ")
        json.dump(balanced_questions, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        f.write("if (typeof module !== 'undefined' && module.exports) { module.exports = questionsData; }\n")
    print(f"Written {js_path} ({os.path.getsize(js_path)} bytes)")

    print("\nSUCCESS! All 100 questions validated and saved.")

if __name__ == "__main__":
    assemble_and_validate()
