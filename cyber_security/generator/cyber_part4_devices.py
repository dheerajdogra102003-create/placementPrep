"""
Part 4: Firewalls & Security Devices Questions (IDs 81-100, 20 Questions)
Strictly adheres to:
- Firewalls: Stateless packet filtering vs Stateful inspection vs NGFW (L7)
- Proxy servers: Forward proxy (client protection) vs Reverse proxy (server protection & SSL termination)
- IDS vs IPS (Passive SPAN/TAP detection vs Inline active prevention & packet dropping)
- VPNs: IPsec vs SSL/TLS VPN, remote worker tunneling, confidentiality over untrusted public Wi-Fi
- Antivirus & EDR: Signature-based detection vs Heuristics & Behavioral anomaly detection
- Device selection in enterprise scenarios, network topology placement, preventive vs detective controls
"""

def get_questions_part4_firewalls_security_devices():
    return [
        {
            "id": 81,
            "question": "A network engineer needs to configure a security device at the corporate boundary. The device must track whether an incoming TCP packet is part of an existing, legitimate connection initiated by an internal employee or if it is an unsolicited external packet attempting to breach the network. Which type of firewall is required?",
            "options": {
                "A": "Stateless Packet-Filtering Firewall",
                "B": "Stateful Inspection Firewall",
                "C": "Circuit-Level Gateway operating without state tables",
                "D": "Static IP Router"
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Stateful vs Stateless Firewalls",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A Stateful Inspection Firewall maintains an internal State Table tracking active connections (TCP 3-way handshakes, sequence numbers, source/destination ports). When an internal host initiates an outbound request, the state table dynamically permits the corresponding inbound return traffic, while blocking unsolicited incoming connection attempts from the outside.",
            "why_other_options_are_wrong": {
                "A": "A Stateless firewall inspects packets in isolation based purely on static header rules, completely unaware of whether a packet belongs to an ongoing session.",
                "B": "Correct: Stateful firewalls maintain connection state tables to automatically track and permit legitimate return traffic.",
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
            "difficulty": "Medium",
            "question_type": "Comparison",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Virtual Private Network (VPN)",
                "B": "Stateless Packet Sniffer",
                "C": "Network Address Translation (NAT)",
                "D": "Dynamic Host Configuration Protocol (DHCP)"
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "VPN Architecture & Remote Access",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Capgemini-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A Virtual Private Network (VPN) creates an encrypted, authenticated tunnel across the public internet between a remote client and the corporate gateway. It encapsulates and encrypts all traffic, ensuring confidentiality and integrity over untrusted public networks.",
            "why_other_options_are_wrong": {
                "A": "Correct: VPN provides secure, encrypted tunneling for remote workers connecting to internal enterprise subnets.",
                "B": "Packet sniffers (like Wireshark) capture and inspect packets; they provide no remote access or encryption.",
                "C": "NAT translates private IPs to public IPs at a router; it provides no encryption or remote user authentication.",
                "D": "DHCP dynamically assigns local IP configuration settings on a local LAN."
            },
            "real_world_application": "Deploying enterprise IPsec / OpenVPN / Cisco AnyConnect SSL VPN client solutions for remote workforce access."
        },
        {
            "id": 84,
            "question": "An IT team places a proxy server in front of their internal web servers. The proxy receives all incoming client requests from the public internet, performs SSL/TLS decryption (SSL offloading), checks for malicious payloads, balances traffic across three backend application servers, and hides the real internal IP addresses of the application servers. What specific type of proxy is this?",
            "options": {
                "A": "Forward Proxy",
                "B": "Reverse Proxy",
                "C": "Open SOCKS4 Proxy",
                "D": "Transparent Client Proxy"
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Forward vs Reverse Proxy",
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["Accenture-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A Reverse Proxy sits in front of backend web servers, acting on behalf of the servers. It shields the internal servers from direct exposure, terminates SSL/TLS, provides load balancing, and caches content. In contrast, a Forward Proxy sits in front of internal clients to control and filter their outbound internet access.",
            "why_other_options_are_wrong": {
                "A": "A Forward Proxy sits on the client side to protect users and control outbound internet browsing.",
                "B": "Correct: A Reverse Proxy faces the public internet to protect and balance traffic for backend server clusters.",
                "C": "An Open SOCKS proxy relays arbitrary client traffic without HTTP awareness or server shielding.",
                "D": "A transparent client proxy intercepts outbound client traffic without client configuration."
            },
            "real_world_application": "Deploying Nginx, HAProxy, or Cloudflare as a reverse proxy in front of backend microservice clusters."
        },
        {
            "id": 85,
            "question": "A traditional stateless firewall rule base evaluates rules from top to bottom. Consider the following rules:\n1. `ALLOW TCP from ANY to ANY port 80`\n2. `DENY TCP from 198.51.100.50 to ANY port 80`\n3. `DENY ALL`\nAn attacker sends an HTTP packet on port 80 from the blocked IP address `198.51.100.50`. What action does the firewall take, and why?",
            "options": {
                "A": "The packet is dropped because Rule 2 explicitly denies that specific IP address.",
                "B": "The packet is permitted because firewalls follow a 'First-Match' evaluation logic, and Rule 1 matches the packet first.",
                "C": "The firewall crashes because the two rules represent a syntax conflict.",
                "D": "The packet is quarantined in a sandbox for 24 hours before being dropped."
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Firewall Rule Evaluation Order (First-Match)",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["TCS-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Firewalls evaluate rules sequentially from top to bottom and terminate processing on the 'First Match'. Because Rule 1 allows all traffic on port 80 from ANY source, the packet matches Rule 1 immediately and is permitted through. Rule 2 is never evaluated. Specific DENY rules must always be placed ABOVE general ALLOW rules.",
            "why_other_options_are_wrong": {
                "A": "Incorrect trap: Rule 2 is unreachable for port 80 traffic because Rule 1 already intercepted and permitted it.",
                "B": "Correct: First-match logic dictates that the general permit rule at line 1 allows the packet before reaching the deny rule at line 2.",
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
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["Deloitte-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Signature-based detection cannot detect Zero-Day malware or polymorphic malware whose binary hash has never been seen or cataloged before.",
                "B": "Signatures only function on text files and cannot inspect compiled binary `.exe` files.",
                "C": "Signature detection causes 100% CPU utilization on all modern multi-core computers.",
                "D": "Signature detection requires an active satellite link to the manufacturer's laboratory."
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Antivirus: Signatures vs Heuristics",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Infosys-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Signature-based detection relies on matching known static byte patterns or cryptographic file hashes (MD5/SHA-256) of previously analyzed malware. It is completely blind to new 'Zero-Day' threats and polymorphic malware that dynamically mutates its code on each infection. Heuristic and behavioral engines are required to detect suspicious activities.",
            "why_other_options_are_wrong": {
                "A": "Correct: Signatures rely on known samples; unknown zero-days and mutating polymorphic binaries easily evade static signatures.",
                "B": "Signatures were originally designed specifically for compiled binary executables.",
                "C": "Hash lookups are computationally lightweight and fast (O(1) table lookup).",
                "D": "Antivirus clients store local signature definition databases and update via standard internet connections."
            },
            "real_world_application": "Deploying modern Endpoint Detection and Response (EDR) platforms like CrowdStrike Falcon and Microsoft Defender for Endpoint."
        },
        {
            "id": 88,
            "question": "A network security architect is designing the security layout for an enterprise that hosts an external-facing public e-commerce web portal and a private backend database containing customer credit card details. Where should the web servers and database servers be placed?",
            "options": {
                "A": "Both the web servers and database servers should be placed directly on the public internet with public IP addresses.",
                "B": "The web servers should be placed in a Demilitarized Zone (DMZ), while the database servers should be placed in a restricted internal private network behind a second firewall.",
                "C": "Both web servers and database servers should be placed in the DMZ with all ports open to ensure fast query latency.",
                "D": "Database servers should be placed in the DMZ, while web servers should be placed on employee desktop LAN subnets."
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "DMZ Architecture & Network Segmentation",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Capgemini-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In a classic multi-tiered DMZ (Demilitarized Zone) architecture, public-facing services (web/proxy servers) reside in the DMZ, accessible from the untrusted internet. The critical data repositories (databases) reside in a separate, isolated internal zone protected by an inner firewall that permits connections ONLY from the specific web servers on database port 3306/5432.",
            "why_other_options_are_wrong": {
                "A": "Exposing production databases directly to the public internet violates basic security principles.",
                "B": "Correct: DMZ for public-facing web tier, isolated internal network for database tier, enforcing strict defense-in-depth.",
                "C": "Placing databases in the DMZ exposes core sensitive assets if the DMZ perimeter is compromised.",
                "D": "Reversing the placement compromises internal employee subnets and exposes databases to external web attacks."
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
            "difficulty": "Medium",
            "question_type": "Comparison",
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "company_pattern": ["Infosys-style", "HCLTech-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "It bypasses the local content filter because the firewall only sees an outbound connection to the proxy's IP address rather than the blocked destination URL.",
                "B": "It immediately grants the employee domain administrator privileges on the local Active Directory.",
                "C": "It converts all HTTP traffic into unencrypted ARP broadcast requests.",
                "D": "It permanently disables the employee's local operating system firewall."
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Forward Proxy & Filter Circumvention",
            "difficulty": "Medium-Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["Accenture-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A forward proxy accepts client requests and forwards them to the destination on the client's behalf. To an internal firewall or content filter, the employee is merely connecting to the proxy server's IP address. If the proxy connection is encrypted (HTTPS/SSH tunnel), the firewall cannot see the ultimate destination URL.",
            "why_other_options_are_wrong": {
                "A": "Correct: Routing through an external forward proxy obfuscates the destination from basic perimeter URL filters.",
                "B": "Network proxy routing has zero effect on Windows Active Directory user group privileges.",
                "C": "ARP operates strictly within the local Layer 2 broadcast domain and cannot route across the internet.",
                "D": "Connecting to a proxy does not alter local OS firewall service settings."
            },
            "real_world_application": "Enterprise deployment of Deep Packet Inspection (DPI) and blocking known anonymizer/proxy IP categories."
        },
        {
            "id": 92,
            "question": "A bank's internal network policy strictly states: 'Default-Deny' (Implicit Deny). What does this foundational firewall architecture rule mandate?",
            "options": {
                "A": "All traffic is automatically permitted unless it matches a specific deny rule at the top.",
                "B": "All traffic is denied by default unless there is an explicit, matching allow rule that permits it.",
                "C": "Only users with root administrator passwords are permitted to browse websites.",
                "D": "The firewall automatically denies all packets on weekends and holidays."
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Implicit Deny (Default-Deny) Principle",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["TCS-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "The principle of Default-Deny (Implicit Deny) states that anything that is not explicitly permitted must be forbidden. In firewalls, this is implemented as an invisible or explicit rule at the very bottom of the rule base: `DENY ALL TRAFFIC`. Only explicitly justified business ports/protocols are granted pass-through.",
            "why_other_options_are_wrong": {
                "A": "Allowing all traffic by default (Default-Allow / Implicit Permit) is an insecure anti-pattern.",
                "B": "Correct: Implicit Deny ensures that any packet not specifically authorized by an existing rule is dropped.",
                "C": "Firewall rules evaluate network packet attributes (IP, Port, Protocol), not OS user account passwords.",
                "D": "Default-deny applies 24/7 to packet evaluation logic, not calendar dates."
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
            "company_pattern": ["IBM-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "A Full Tunnel routes ALL client traffic (both corporate intranet and general public internet browsing) through the encrypted VPN tunnel, whereas a Split Tunnel routes ONLY internal corporate traffic through the VPN while sending public internet browsing directly out the local Wi-Fi.",
                "B": "A Full Tunnel operates at 10 Gigabit speeds, while a Split Tunnel operates at dial-up speeds.",
                "C": "A Split Tunnel encrypts traffic with AES, while a Full Tunnel uses unencrypted plaintext.",
                "D": "A Full Tunnel requires two separate physical network cables plugged into the iPad."
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "VPN Tunneling: Full vs Split Tunnel",
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In a Full Tunnel VPN, all traffic from the client is redirected through the corporate VPN gateway, allowing corporate security devices to inspect and filter all traffic. In a Split Tunnel VPN, only traffic destined for internal corporate IP subnets traverses the VPN; internet-bound traffic exits locally, saving corporate bandwidth but exposing the device to untrusted local network risks.",
            "why_other_options_are_wrong": {
                "A": "Correct: Full tunnel forces 100% of device traffic through corporate security; split tunnel bifurcates corporate vs local internet traffic.",
                "B": "Both tunneling modes operate over existing client network link speeds.",
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
                "B": "No, because stateful firewalls automatically record the outgoing connection state and dynamically permit the corresponding inbound return traffic belonging to established sessions.",
                "C": "Yes, but only if the external web server is using an RSA certificate.",
                "D": "No, because TCP port 443 is a broadcast port and does not require two-way communication."
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Stateful Connection Tracking & Dynamic Return Ports",
            "difficulty": "Medium-Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "This is the primary operational advantage of stateful inspection. When an internal client initiates an outbound connection, the firewall creates an entry in its state table (recording source IP, ephemeral port, destination IP, port 443, and TCP sequence numbers). Return packets matching this state entry are automatically permitted back through without needing any inbound permit rule.",
            "why_other_options_are_wrong": {
                "A": "Opening an explicit inbound rule from ANY to ANY destroys perimeter security and is only required on archaic stateless packet filters.",
                "B": "Correct: Stateful firewalls dynamically track outbound sessions and permit established return traffic automatically.",
                "C": "The certificate cipher suite is an application-layer detail that has no bearing on L4 state table tracking.",
                "D": "TCP is a strictly unicast, bidirectional, connection-oriented protocol."
            },
            "real_world_application": "Simplifying enterprise firewall policy management by only defining outbound egress rules for client subnets."
        },
        {
            "id": 96,
            "question": "A security analyst reviews an intrusion detection alert: 'Signature SID 201842: Possible Metasploit Meterpreter Reverse TCP Payload'. Upon investigating, the analyst finds that a system administrator was conducting an authorized internal penetration test against an isolated test environment. How is this alert categorized in security monitoring terminology?",
            "options": {
                "A": "True Positive",
                "B": "False Positive",
                "C": "True Negative",
                "D": "False Negative"
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "SOC Alert Terminology (True/False Positives)",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Deloitte-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A True Positive occurs when a security device alerts on actual malicious activity or exploit code that was genuinely present on the wire. Even though the test was authorized, the Meterpreter exploit payload was genuinely transmitted and accurately identified by the IDS. (A False Positive occurs when benign traffic, like normal database queries, is mistakenly flagged as an attack).",
            "why_other_options_are_wrong": {
                "A": "Correct: The attack payload was genuinely present and correctly identified, making it a True Positive (even if authorized).",
                "B": "Incorrect trap: An alert is only a False Positive if the signature triggered on benign, non-exploit data.",
                "C": "A True Negative means no attack occurred and no alert was generated.",
                "D": "A False Negative means an attack occurred but the security device failed to detect it."
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
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Capgemini-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Transport Mode encrypts only the payload leaving the original IP header visible (used host-to-host), while Tunnel Mode encrypts the entire original IP packet (header and payload) and wraps it inside a brand-new outer IP header (used gateway-to-gateway).",
                "B": "Transport Mode uses asymmetric RSA, while Tunnel Mode uses symmetric AES.",
                "C": "Transport Mode is only compatible with wireless 5G connections.",
                "D": "Tunnel Mode does not provide encryption and only provides routing."
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "IPsec Modes: Transport vs Tunnel",
            "difficulty": "Hard",
            "question_type": "Comparison",
            "company_pattern": ["TCS-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In IPsec Transport Mode, only the transport-layer payload is encrypted; the original IP header remains exposed, making it suitable for end-to-end host communication. In Tunnel Mode, the entire original IP packet (including internal source and destination IPs) is encrypted and encapsulated into a new outer IP header between VPN gateways, hiding internal network topologies.",
            "why_other_options_are_wrong": {
                "A": "Correct: Transport encrypts payload only; Tunnel encrypts the entire original packet and adds a new outer IP header for site-to-site connectivity.",
                "B": "Both modes use identical cryptographic ciphers (ESP with AES-GCM or AES-CBC).",
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
                "B": "Web Application Firewall (WAF) / Bot Management solution utilizing CAPTCHA, JavaScript behavioral fingerprinting, and IP reputation rate limiting",
                "C": "Local Loopback Adapter",
                "D": "Replacing optical patch cables with Cat6 copper cabling"
            },
            "correct_answer": "B",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Bot Management & WAF Rate Limiting",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Accenture-style", "LTIMindtree-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Credential stuffing uses valid HTTP requests that pass standard syntax checks. A WAF with Bot Management detects automated client traits (lack of mouse movements, headless browser fingerprints, rapid iteration) and enforces challenges (like Cloudflare Turnstile / CAPTCHA) and rate limiting.",
            "why_other_options_are_wrong": {
                "A": "Stateless filters cannot detect distributed botnet IP rotations or measure request rate frequencies per endpoint.",
                "B": "Correct: Modern WAFs with Bot Management evaluate behavioral telemetry and challenge automated botnets.",
                "C": "Loopback adapters are internal software host interfaces (127.0.0.1).",
                "D": "Physical cables have no relationship to application-layer botnet defenses."
            },
            "real_world_application": "Deploying Cloudflare Bot Management or AWS WAF Bot Control to mitigate account takeover (ATO) attacks."
        },
        {
            "id": 100,
            "question": "An enterprise security architecture integrates: 1. A Next-Gen Firewall (NGFW) at the perimeter, 2. An in-line IPS, 3. A Reverse Proxy WAF in front of web applications, 4. Host-based Endpoint Detection and Response (EDR) on all servers, and 5. Database activity monitoring with transparent encryption. If an external attacker discovers a zero-day vulnerability that bypasses the perimeter firewall, which security principle guarantees that the attacker is still detected and blocked by subsequent layers?",
            "options": {
                "A": "Defense in Depth (Layered Security)",
                "B": "Security through Obscurity",
                "C": "Kerckhoffs's Principle",
                "D": "The Principle of Open Design"
            },
            "correct_answer": "A",
            "topic": "Firewalls & Security Devices",
            "subtopic": "Defense in Depth & Holistic Enterprise Defense",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Accenture-style", "TCS-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Defense in Depth (Layered Defense) ensures that multiple diverse security controls are layered throughout an information system. If a single defensive barrier fails (such as an exploit bypassing a perimeter firewall), subsequent barriers (IPS, WAF, EDR, database access controls) prevent the adversary from achieving their objective.",
            "why_other_options_are_wrong": {
                "A": "Correct: Layering overlapping independent defensive controls to eliminate single points of security failure is Defense in Depth.",
                "B": "Security through obscurity relies on keeping system flaws secret rather than implementing robust layered controls.",
                "C": "Kerckhoffs's Principle applies specifically to cryptosystem key secrecy.",
                "D": "The Principle of Open Design states that security should not depend on keeping algorithms secret."
            },
            "real_world_application": "Enterprise Zero Trust and Defense-in-Depth architectural design required by NIST SP 800-207."
        }
    ]

print("Part 4 (Firewalls & Security Devices) ready - 20 questions")
