"""
Part 1 of Cybersecurity Notes:
- Section 1: How to Use These Notes
- Section 2: Priority Roadmap (P0, P1, P2, P3)
- Section 3: CIA Triad (P0) with mandatory table & scenarios
- Section 4: Cryptography (P0) with flow, symmetric vs asymmetric, hashing, signatures, PKI, HTTPS
- Section 5: Cyber Attacks (P0) with attack table, phishing, malware, DDoS, SQLi, XSS, social engineering
- Section 6: Firewalls & Security Devices (P0) with device table, stateful vs stateless, proxies, IDS vs IPS, VPN, antivirus
"""

def get_section_1_to_6_html():
    return """
<!-- SECTION 1 -->
<section id="sec-1" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 01 · Guide</div>
    <h2>1. How to Use These Placement Survival Notes</h2>
  </div>
  <div class="note-card">
    <p class="lead-text">
      <strong>These are NOT university semester notes.</strong> They are engineered exclusively for <strong>fresher MNC technical screening assessments and technical interviews</strong> (TCS NQT, Accenture, Infosys, Capgemini, Cognizant, Wipro, LTIMindtree, Deloitte, IBM, HCLTech, etc.).
    </p>

    <div class="grid-2-col" style="margin-top: 18px;">
      <div class="info-box">
        <h4>🎯 The 3-Phase Placement Reading Strategy</h4>
        <ol class="styled-list">
          <li><strong>Phase 1 (Comprehensive Read · 48 Hours Before Exam):</strong> Read Sections 1 through 10 once thoroughly. Focus on the <em>"Common Traps"</em> and <em>"Real-World Scenarios"</em> to build intuitive pattern recognition.</li>
          <li><strong>Phase 2 (Interview Simulation · 24 Hours Before):</strong> Practice speaking the <strong>30-Second Answers (Sec. 12)</strong> and review the <strong>80 Technical Interview Q&As (Sec. 11)</strong> aloud.</li>
          <li><strong>Phase 3 (Countdown Sprints · Final Day):</strong> Use the timed revision tracks: <strong>60-Minute (Sec. 13)</strong>, <strong>30-Minute (Sec. 14)</strong>, <strong>10-Minute (Sec. 15)</strong>, and the <strong>5-Minute Exam-Hall Cheat Sheet (Sec. 16)</strong> right before walking in.</li>
        </ol>
      </div>

      <div class="info-box accent">
        <h4>⚠️ Golden Rules for MNC Placement MCQs</h4>
        <ul class="bullet-list">
          <li><strong>Never assume:</strong> If the question doesn't state data was altered, do <em>not</em> pick Integrity. If no data was exposed to an unauthorized reader, do <em>not</em> pick Confidentiality.</li>
          <li><strong>Differentiate tools by action:</strong> An <em>IDS detects and alerts</em>; an <em>IPS drops and blocks</em>; a <em>Firewall filters traffic by policy</em>; a <em>WAF inspects HTTP/L7</em>.</li>
          <li><strong>Hashing is NOT encryption:</strong> Hashing is a one-way irreversible mathematical digest. Encryption is a two-way reversible process using keys.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2 -->
<section id="sec-2" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 02 · Roadmap</div>
    <h2>2. Priority Roadmap for MNC Technical Rounds</h2>
  </div>
  <div class="note-card">
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>Priority Level</th>
            <th>Domains &amp; Core Topics</th>
            <th>Weight in Placement Tests</th>
            <th>Preparation Mandate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="badge-priority p0">P0 · MUST KNOW</span></td>
            <td><strong>CIA Triad, Symmetric vs Asymmetric Crypto, Hashing vs Encryption, Digital Signatures, Phishing/Whaling, Virus vs Worm vs Trojan, Ransomware, SQL Injection, XSS, DoS/DDoS, Stateful Firewalls, IDS vs IPS, Forward vs Reverse Proxy, VPN</strong></td>
            <td><strong>75% - 85% of all questions</strong></td>
            <td>Zero tolerance for confusion. Must be able to answer MCQs in &lt;30 seconds and speak answers fluently in interviews.</td>
          </tr>
          <tr>
            <td><span class="badge-priority p1">P1 · HIGH VALUE</span></td>
            <td><strong>Man-in-the-Middle (ARP Spoofing, SSL Stripping), HSTS, Brute Force vs Password Spraying vs Credential Stuffing, CSRF, DOM XSS, DMZ Architecture, IPsec Modes (Transport vs Tunnel), Antivirus Heuristics vs Signatures</strong></td>
            <td><strong>12% - 18% of questions</strong></td>
            <td>Differentiates candidate from average freshers in tricky scenario elimination questions.</td>
          </tr>
          <tr>
            <td><span class="badge-priority p2">P2 · SUPPORTING</span></td>
            <td><strong>Rootkits, Logic Bombs, Data Loss Prevention (DLP), Slowloris, Honey Pots, Non-repudiation extensions, Elliptic Curve (ECC) benefits</strong></td>
            <td><strong>5% - 8% of questions</strong></td>
            <td>Useful for tie-breakers and senior technical interview rounds.</td>
          </tr>
          <tr>
            <td><span class="badge-priority p3">P3 · OPTIONAL</span></td>
            <td>Advanced cryptanalysis math, kernel rootkit hook coding, reverse engineering binaries, advanced penetration testing exploits</td>
            <td>&lt; 2% (Rarely asked to freshers)</td>
            <td>Skip during final-day revision; focus entirely on P0 and P1.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- SECTION 3 -->
<section id="sec-3" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 03 · P0 Core</div>
    <h2>3. The CIA Triad (Confidentiality, Integrity, Availability)</h2>
  </div>
  <div class="note-card">
    <div class="mnemonic-banner">
      <span class="mnemonic-icon">💡</span>
      <div>
        <strong>Final-Day Memory Trick:</strong>
        <code>C = Who can SEE (Secrecy)</code> · <code>I = Who can CHANGE (Trustworthiness)</code> · <code>A = Can I ACCESS it (Uptime)</code>
      </div>
    </div>

    <div class="table-responsive" style="margin-top: 20px;">
      <table class="data-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>20-Second Definition</th>
            <th>Real-World Example</th>
            <th>Typical Attack / Threat</th>
            <th>Primary Security Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Confidentiality</strong></td>
            <td>Ensures information is shielded from unauthorized access, reading, or disclosure.</td>
            <td>Medical patient health records, banking credit card numbers, trade secrets.</td>
            <td>Eavesdropping, packet sniffing, unauthorized data exfiltration, social engineering.</td>
            <td><strong>AES Encryption, Access Control Lists (ACLs), Role-Based Access (RBAC), MFA</strong></td>
          </tr>
          <tr>
            <td><strong>Integrity</strong></td>
            <td>Guarantees that data remains accurate, complete, and protected against unauthorized modification, tampering, or deletion.</td>
            <td>Bank balance transactions, software update binaries, contract terms.</td>
            <td>Man-in-the-Middle alteration, SQL injection data corruption, unauthorized file edits.</td>
            <td><strong>Cryptographic Hashing (SHA-256), HMAC, Digital Signatures, File Integrity Monitoring (FIM)</strong></td>
          </tr>
          <tr>
            <td><strong>Availability</strong></td>
            <td>Guarantees that systems, networks, and data remain operational, reachable, and accessible to authorized users when needed.</td>
            <td>Emergency hospital dispatch servers, payment gateway checkout portals, cloud infrastructure.</td>
            <td>DDoS volumetric floods, ransomware crypto-locking, server crashes, power failures.</td>
            <td><strong>Redundant servers, Load Balancers, DDoS scrubbing (Cloudflare/AWS Shield), UPS, RAID, Backups</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 style="margin-top: 26px; margin-bottom: 12px;">🚨 Scenario Training: How to Identify the CIA Violation Fast</h3>
    <div class="grid-2-col">
      <div class="scenario-mini-card">
        <div class="scen-title">Scenario 1: Intern views executive salary sheet</div>
        <p><strong>Impact:</strong> Data was viewed without authorization. No modification occurred. Server remained online.</p>
        <span class="scen-verdict confidentiality">Violates: Confidentiality</span>
      </div>
      <div class="scenario-mini-card">
        <div class="scen-title">Scenario 2: Wire transfer changed from $500 to $50,000</div>
        <p><strong>Impact:</strong> Transaction payload was altered in transit. Data consistency and truth destroyed.</p>
        <span class="scen-verdict integrity">Violates: Integrity</span>
      </div>
      <div class="scenario-mini-card">
        <div class="scen-title">Scenario 3: Server flooded with 10M UDP packets; crashes</div>
        <p><strong>Impact:</strong> Legitimate users cannot access their service. Hardware resources exhausted.</p>
        <span class="scen-verdict availability">Violates: Availability</span>
      </div>
      <div class="scenario-mini-card">
        <div class="scen-title">Scenario 4: Ransomware encrypts live database volumes</div>
        <p><strong>Impact:</strong> Unauthorized ciphertext transformation modifies files (Integrity) and locks users out (Availability).</p>
        <span class="scen-verdict multi">Violates: Both Integrity &amp; Availability</span>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 4 -->
<section id="sec-4" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 04 · P0 Core</div>
    <h2>4. Cryptography &amp; Public Key Infrastructure (PKI)</h2>
  </div>
  <div class="note-card">
    <div class="crypto-flow-banner">
      <span class="flow-step">Plaintext</span>
      <span class="flow-arrow">➔ [Encryption + Key] ➔</span>
      <span class="flow-step cipher">Ciphertext</span>
      <span class="flow-arrow">➔ [Decryption + Key] ➔</span>
      <span class="flow-step">Plaintext</span>
    </div>

    <h3 style="margin-top: 24px;">Core Primitives at a Glance</h3>
    <div class="grid-3-col" style="margin-top: 14px;">
      <div class="concept-card">
        <div class="concept-card-head cyan">Symmetric Encryption</div>
        <p><strong>Single shared secret key</strong> used for both encryption and decryption.</p>
        <ul class="mini-bullets">
          <li><strong>Speed:</strong> 100x to 1,000x faster than asymmetric; hardware-accelerated (AES-NI).</li>
          <li><strong>Best for:</strong> Bulk data at rest and in transit (hard drives, TLS session streams).</li>
          <li><strong>Primary Challenge:</strong> Key Distribution Problem (how to safely share the secret key).</li>
          <li><strong>Standard Algorithms:</strong> AES-128, AES-256, ChaCha20, 3DES, DES (legacy).</li>
        </ul>
      </div>

      <div class="concept-card">
        <div class="concept-card-head purple">Asymmetric Encryption</div>
        <p><strong>Mathematically linked key pair:</strong> Public Key (shared with everyone) + Private Key (kept strictly secret).</p>
        <ul class="mini-bullets">
          <li><strong>Speed:</strong> Computationally slow (modular exponentiation of 2048+ bit integers).</li>
          <li><strong>Best for:</strong> Key exchange, digital signatures, identity verification.</li>
          <li><strong>Rule of Secrecy:</strong> Encrypt with <em>Recipient's Public Key</em>; only <em>Recipient's Private Key</em> can decrypt.</li>
          <li><strong>Standard Algorithms:</strong> RSA, ECC (Elliptic Curve Cryptography), Diffie-Hellman (DH).</li>
        </ul>
      </div>

      <div class="concept-card">
        <div class="concept-card-head emerald">Cryptographic Hashing</div>
        <p><strong>One-way mathematical function</strong> mapping arbitrary input to a fixed-size digest.</p>
        <ul class="mini-bullets">
          <li><strong>Rule:</strong> Irreversible. A hash is NEVER "decrypted".</li>
          <li><strong>Avalanche Effect:</strong> Changing 1 bit in input flips &gt;50% of output bits.</li>
          <li><strong>Collision:</strong> When $H(M_1) = H(M_2)$ where $M_1 \\neq M_2$ (Pigeonhole Principle).</li>
          <li><strong>Standard Algorithms:</strong> SHA-256, SHA-3, bcrypt, Argon2 (MD5 &amp; SHA-1 are deprecated).</li>
        </ul>
      </div>
    </div>

    <div class="info-box accent" style="margin-top: 24px;">
      <h4>🔐 Modern HTTPS / TLS 1.3: The Hybrid Cryptosystem</h4>
      <p>
        Why doesn't HTTPS use RSA to encrypt the whole web page? <strong>Asymmetric encryption is far too slow for bulk gigabyte transfers.</strong><br>
        HTTPS solves this via a <strong>Hybrid Architecture</strong>:
      </p>
      <ol class="styled-list" style="margin-top: 10px;">
        <li><strong>Handshake &amp; Authentication:</strong> Client validates server's <strong>X.509 Digital Certificate</strong> signed by a trusted Certificate Authority (CA).</li>
        <li><strong>Key Exchange:</strong> Ephemeral Diffie-Hellman (ECDHE) securely establishes a temporary shared secret key, providing <strong>Perfect Forward Secrecy (PFS)</strong>.</li>
        <li><strong>Bulk Data Transfer:</strong> The high-speed symmetric session key (AES-256-GCM) encrypts all ongoing HTTP requests and responses.</li>
      </ol>
    </div>

    <h3 style="margin-top: 26px;">Digital Signatures vs Digital Certificates</h3>
    <div class="table-responsive" style="margin-top: 12px;">
      <table class="data-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Digital Signature</th>
            <th>Digital Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>What is it?</strong></td>
            <td>A mathematical stamp created by hashing data and encrypting that hash with the <strong>Sender's Private Key</strong>.</td>
            <td>An electronic identity document issued by a trusted Certificate Authority (CA) that binds a <strong>Public Key to an Entity's Identity</strong>.</td>
          </tr>
          <tr>
            <td><strong>What does it provide?</strong></td>
            <td><strong>Integrity, Authenticity, and Non-Repudiation</strong> (Sender cannot deny authoring it).</td>
            <td><strong>Trust and Identity Verification</strong> (Confirms you are really talking to google.com, not an impostor).</td>
          </tr>
          <tr>
            <td><strong>Verification Process</strong></td>
            <td>Recipient decrypts signature using the <strong>Sender's Public Key</strong> and compares the resulting hash against their own calculated hash.</td>
            <td>Client checks if the certificate was digitally signed by a Root CA present in the OS/Browser's trusted root store.</td>
          </tr>
          <tr>
            <td><strong>Standard / Format</strong></td>
            <td>RSA-PSS, ECDSA, Ed25519</td>
            <td>ITU-T X.509 v3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- SECTION 5 -->
<section id="sec-5" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 05 · P0 Core</div>
    <h2>5. Cyber Attacks &amp; Threat Identification</h2>
  </div>
  <div class="note-card">
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>Attack Name</th>
            <th>What Happens</th>
            <th>Main Target</th>
            <th>Placement Recognition Clue</th>
            <th>Primary Defence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phishing</strong></td>
            <td>Fraudulent mass emails sent indiscriminately, impersonating banks or services to trick users into revealing credentials.</td>
            <td>Human user / Credentials</td>
            <td><em>"Generic email sent to 10,000 employees asking to click login link"</em></td>
            <td>Email security filters (SPF, DKIM, DMARC), User awareness training, FIDO2 MFA.</td>
          </tr>
          <tr>
            <td><strong>Spear Phishing</strong></td>
            <td>Highly customized, targeted email attack customized with confidential research regarding the specific individual or company.</td>
            <td>Specific employee</td>
            <td><em>"Email specifically mentioning the project name and vendor contract"</em></td>
            <td>Strict dual authorization for payments, domain spoof protection, verification calls.</td>
          </tr>
          <tr>
            <td><strong>Whaling</strong></td>
            <td>Spear phishing targeted exclusively at C-level executives (CEO, CFO) or high-net-worth VIPs.</td>
            <td>C-suite / Financial funds</td>
            <td><em>"Attacker spoofs CEO demanding urgent offshore wire transfer"</em></td>
            <td>Out-of-band phone confirmation, strict multi-signature financial controls.</td>
          </tr>
          <tr>
            <td><strong>Computer Virus</strong></td>
            <td>Malicious code that <strong>attaches to a host file</strong> (like an `.exe` or macro document) and requires <strong>human execution</strong> to spread.</td>
            <td>Local host files</td>
            <td><em>"User opens an infected attachment which corrupts adjacent local programs"</em></td>
            <td>Endpoint antivirus/EDR, disabling macros, file integrity scanning.</td>
          </tr>
          <tr>
            <td><strong>Computer Worm</strong></td>
            <td><strong>Standalone, autonomous self-propagating malware</strong> that spreads across networks exploiting service vulnerabilities without user action.</td>
            <td>Network bandwidth &amp; hosts</td>
            <td><em>"Spreads across 150 subnet machines in 20 minutes without anyone opening emails"</em></td>
            <td>Network segmentation, patching network services (e.g. SMB), host firewalls.</td>
          </tr>
          <tr>
            <td><strong>Trojan Horse</strong></td>
            <td>Malware disguised as legitimate, desirable utility software (game, optimizer) while secretly installing a backdoor or spy utility.</td>
            <td>Workstation access</td>
            <td><em>"User downloads free RAM cleaner; it silently opens reverse shell port 4444"</em></td>
            <td>Application whitelisting, code signing verification, EDR behavioral monitoring.</td>
          </tr>
          <tr>
            <td><strong>Ransomware</strong></td>
            <td>Malware that encrypts victim files on disk and demands cryptocurrency payment for the private decryption key.</td>
            <td>Data availability &amp; integrity</td>
            <td><em>"Desktop wallpaper changed to ransom demand; files appended with `.locked`"</em></td>
            <td><strong>First action: Immediately isolate machine from network!</strong> Maintain offline immutable backups.</td>
          </tr>
          <tr>
            <td><strong>Spyware / Keylogger</strong></td>
            <td>Covert malware that records user keystrokes, webcam feeds, or browsing habits and exfiltrates them to attacker servers.</td>
            <td>User passwords &amp; privacy</td>
            <td><em>"Covertly records keystrokes entered into banking portal"</em></td>
            <td>Antivirus behavioral heuristics, virtual on-screen keyboards, EDR alerts.</td>
          </tr>
          <tr>
            <td><strong>DoS vs DDoS</strong></td>
            <td>Denial of Service (DoS) floods target from a single source; Distributed Denial of Service (DDoS) commands thousands of botnet machines.</td>
            <td>Service Availability</td>
            <td><em>"Thousands of compromised IoT devices flood web server with 500 Gbps traffic"</em></td>
            <td>Anycast scrubbing networks (Cloudflare/AWS Shield), upstream rate-limiting, BCP 38.</td>
          </tr>
          <tr>
            <td><strong>Man-in-the-Middle (MITM)</strong></td>
            <td>Attacker positions themselves between client and server (via ARP poisoning, rogue Wi-Fi evil twin) to intercept and tamper with traffic.</td>
            <td>Confidentiality &amp; Integrity</td>
            <td><em>"Attacker eavesdrops on communications over unencrypted public coffee shop Wi-Fi"</em></td>
            <td>End-to-end TLS encryption, HSTS preload, Dynamic ARP Inspection (DAI), 802.1X.</td>
          </tr>
          <tr>
            <td><strong>Brute Force vs Spraying</strong></td>
            <td>Brute force tests thousands of passwords on 1 user (triggers lockout). Password spraying tests 1 common password across 10,000 users.</td>
            <td>Authentication endpoints</td>
            <td><em>"10,000 login attempts testing 'Winter2026!' across 10,000 distinct accounts"</em></td>
            <td>Multi-Factor Authentication (MFA), smart IP rate limiting, CAPTCHA challenges.</td>
          </tr>
          <tr>
            <td><strong>SQL Injection (SQLi)</strong></td>
            <td>Attacker injects SQL syntax into application input fields to manipulate database query execution logic (`' OR 1=1 --`).</td>
            <td>Backend Database</td>
            <td><em>"Inputting `' OR '1'='1` bypasses login and dumps entire user table"</em></td>
            <td><strong>Parameterized Queries (Prepared Statements)</strong>, ORM frameworks, least privilege DB accounts.</td>
          </tr>
          <tr>
            <td><strong>Cross-Site Scripting (XSS)</strong></td>
            <td>Attacker injects malicious JavaScript that executes inside the victim user's web browser, stealing session cookies or redirecting users.</td>
            <td>Client Browser &amp; Session</td>
            <td><em>"Comment containing `<script>` executes in browser of anyone viewing blog post"</em></td>
            <td>Contextual HTML output encoding, <strong>HttpOnly cookie attribute</strong>, Content Security Policy (CSP).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- SECTION 6 -->
<section id="sec-6" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 06 · P0 Core</div>
    <h2>6. Firewalls, Proxies &amp; Security Devices</h2>
  </div>
  <div class="note-card">
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>Technology</th>
            <th>Primary Purpose</th>
            <th>Detects?</th>
            <th>Blocks?</th>
            <th>Typical Placement</th>
            <th>Placement Exam Keyword</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Stateless Firewall</strong></td>
            <td>Filters individual packets based purely on static L3/L4 headers (IP, Port, Protocol) in isolation without tracking session state.</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Router perimeter ACLs</td>
            <td><em>"Inspects headers in isolation; no connection state memory"</em></td>
          </tr>
          <tr>
            <td><strong>Stateful Firewall</strong></td>
            <td>Tracks active TCP 3-way handshakes in a <strong>State Table</strong>; automatically permits established inbound return traffic.</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Network boundary perimeter</td>
            <td><em>"Maintains connection state table; dynamic return ports"</em></td>
          </tr>
          <tr>
            <td><strong>Web Application Firewall (WAF)</strong></td>
            <td>Inspects <strong>Layer 7 HTTP/HTTPS payloads</strong> to detect and block web exploits (SQLi, XSS, CSRF, Path Traversal).</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>In front of web application servers</td>
            <td><em>"Layer 7 deep inspection; OWASP Top 10 mitigation"</em></td>
          </tr>
          <tr>
            <td><strong>Forward Proxy</strong></td>
            <td>Acts on behalf of <strong>internal clients</strong>; intercepts outbound web browsing, caches content, and filters unauthorized URLs.</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Internal client LAN gateway</td>
            <td><em>"Protects clients; hides internal client IPs from internet"</em></td>
          </tr>
          <tr>
            <td><strong>Reverse Proxy</strong></td>
            <td>Acts on behalf of <strong>backend web servers</strong>; handles SSL termination, load balancing, and hides internal server topology.</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>In front of backend server farm</td>
            <td><em>"Protects servers; SSL offloading; load balances requests"</em></td>
          </tr>
          <tr>
            <td><strong>Intrusion Detection (IDS)</strong></td>
            <td><strong>Passive, out-of-band monitoring</strong> (via switch SPAN port or optical TAP). Analyzes traffic copies and raises alerts.</td>
            <td><strong>Yes</strong></td>
            <td><strong>No</strong> (Alerts only)</td>
            <td>Out-of-band / SPAN mirror port</td>
            <td><em>"Passive detection; zero added latency; cannot drop packets"</em></td>
          </tr>
          <tr>
            <td><strong>Intrusion Prevention (IPS)</strong></td>
            <td><strong>Active, in-line inspection</strong>. Sits directly in traffic flow; automatically drops malicious packets and resets connections.</td>
            <td><strong>Yes</strong></td>
            <td><strong>Yes</strong> (Inline drop)</td>
            <td>In-line between router and switch</td>
            <td><em>"Active inline prevention; risk of false-positive packet drops"</em></td>
          </tr>
          <tr>
            <td><strong>Virtual Private Network (VPN)</strong></td>
            <td>Creates an encrypted, authenticated tunnel over untrusted networks (public internet/Wi-Fi) for remote workers or branch offices.</td>
            <td>No</td>
            <td>Access control</td>
            <td>Remote client to corporate gateway</td>
            <td><em>"Encrypted tunnel; IPsec / SSL; remote worker confidentiality"</em></td>
          </tr>
          <tr>
            <td><strong>Antivirus / EDR</strong></td>
            <td>Scans local filesystem and memory for malware using <strong>signatures (known hashes)</strong> and <strong>heuristics/behavioral anomaly monitoring</strong>.</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Host endpoints (laptops/servers)</td>
            <td><em>"Signature matching for known malware; behavioral for zero-days"</em></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="info-box" style="margin-top: 22px;">
      <h4>⚙️ Essential Firewall Engineering Rules</h4>
      <ul class="bullet-list">
        <li><strong>First-Match Rule:</strong> Firewalls process rules sequentially from top to bottom. The moment a packet matches a rule, evaluation stops. Specific DENY rules must always be placed <em>above</em> general ALLOW rules!</li>
        <li><strong>Implicit Deny (Default-Deny):</strong> Any packet not explicitly permitted by an earlier rule is dropped by the final catch-all rule (`DENY ALL`).</li>
        <li><strong>DMZ (Demilitarized Zone):</strong> Perimeter subnetwork where public-facing servers (Web, DNS, Proxy) reside, isolated by dual firewalls from the sensitive private internal database subnet.</li>
      </ul>
    </div>
  </div>
</section>
"""
