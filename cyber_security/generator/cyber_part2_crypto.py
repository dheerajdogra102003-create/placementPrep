"""
Part 2: Cryptography Questions (IDs 16-45, 30 Questions)
Strictly adheres to:
- Symmetric vs Asymmetric (AES, RSA, ECC, 3DES, DES)
- Performance & Math (why symmetric is 1000x faster, modular arithmetic vs substitution-permutation)
- Key Management (Diffie-Hellman key exchange, key distribution)
- Public vs Private Key (encryption vs signature roles)
- Encryption vs Hashing (one-way vs two-way)
- Hash collisions (pigeonhole principle, MD5/SHA-1 deprecated)
- Password storage (rainbow tables, salt, bcrypt, Argon2)
- Digital signatures (hash + sender private key = integrity + authenticity + non-repudiation)
- Digital certificates (X.509, CAs, trust chain, self-signed warnings)
- Real-world HTTPS/TLS handshake reasoning (hybrid cryptography)
- Cryptographic primitive selection in real enterprise situations
"""

def get_questions_part2_cryptography():
    return [
        {
            "id": 16,
            "question": "A junior cloud developer needs to store user account passwords in a PostgreSQL database. They propose encrypting each password using AES-256 with a secret key stored in an environment variable so the backend can decrypt and verify it during login. Why is this architecture fundamentally flawed from a security standpoint?",
            "options": {
                "A": "AES-256 is deprecated and easily brute-forced by modern quantum computing algorithms.",
                "B": "Passwords should never be encrypted with a reversible algorithm; they must be hashed with a salted, computationally expensive one-way function.",
                "C": "PostgreSQL cannot store AES-256 ciphertext without corrupting binary column indexes.",
                "D": "AES-256 is an asymmetric algorithm and requires an RSA public key to decrypt."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Encryption vs Hashing (Password Storage)",
            "difficulty": "Medium-Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Accenture-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Encryption is a two-way (reversible) function intended for data that must be read again. Passwords must never be reversible: if the database or environment key is compromised, every password is exposed. Passwords must be hashed using a slow, salted one-way key-derivation function (such as bcrypt, Argon2, or PBKDF2).",
            "why_other_options_are_wrong": {
                "A": "AES-256 remains the global gold standard for symmetric encryption and is not deprecated or broken.",
                "B": "Correct: Reversible encryption creates a catastrophic single point of failure if the key is leaked; one-way hashing with salt is mandatory.",
                "C": "Relational databases easily store ciphertext using BYTEA or Base64-encoded VARCHAR columns.",
                "D": "AES is a symmetric block cipher, not an asymmetric algorithm."
            },
            "real_world_application": "Storing user authentication credentials securely complying with OWASP Top 10 Identification and Authentication Failures."
        },
        {
            "id": 17,
            "question": "In modern HTTPS (TLS 1.3), why does the browser not use asymmetric encryption (like RSA) to encrypt the entire stream of web traffic, choosing instead to use RSA/ECC only during the initial handshake and AES for bulk data transfer?",
            "options": {
                "A": "Asymmetric encryption has a strict mathematical restriction that prevents it from encrypting data larger than 64 kilobytes.",
                "B": "Symmetric algorithms like AES are computationally 100 to 1,000 times faster and can be hardware-accelerated directly on modern CPU chipsets (AES-NI).",
                "C": "Asymmetric encryption does not provide confidentiality; it only provides digital signature verification.",
                "D": "Web browsers are prohibited by international export regulations from performing asymmetric operations continuously."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Hybrid Cryptosystem & Computational Efficiency",
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Asymmetric cryptography involves heavy mathematical operations (modular exponentiation of multi-thousand-bit integers), making it orders of magnitude slower than symmetric block ciphers like AES, which use lightweight bitwise substitution and permutation networks optimized in hardware (AES-NI). Hybrid cryptography leverages asymmetric speed for key exchange and symmetric speed for payload transfer.",
            "why_other_options_are_wrong": {
                "A": "While RSA has plaintext size limits based on its key size (e.g. 245 bytes for 2048-bit RSA with OAEP), streaming chunks is theoretically possible but computationally prohibitive.",
                "B": "Correct: Symmetric encryption is drastically faster and hardware-accelerated, making it the only feasible choice for high-throughput bulk streams.",
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
                "B": "Alice's Public Key",
                "C": "Bob's Public Key",
                "D": "Bob's Private Key"
            },
            "correct_answer": "C",
            "topic": "Cryptography",
            "subtopic": "Public Key vs Private Key Operations",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Wipro-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In asymmetric encryption for confidentiality, the sender encrypts the plaintext using the recipient's publicly available key (Bob's Public Key). Only the corresponding private key, held exclusively by Bob (Bob's Private Key), can decrypt the resulting ciphertext.",
            "why_other_options_are_wrong": {
                "A": "Encrypting with Alice's Private Key creates a digital signature, not confidentiality, because anyone with Alice's Public Key can decrypt it.",
                "B": "Encrypting with Alice's Public Key means only Alice could decrypt it with her own private key; Bob would never be able to read it.",
                "C": "Correct: Plaintext encrypted with Bob's Public Key can only be unlocked by Bob's secret Private Key.",
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
            "company_pattern": ["Accenture-style", "LTIMindtree-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "C": "MD5 is extremely fast, allowing attackers to use precomputed rainbow tables and GPU clusters calculating billions of hashes per second to instantly reverse common passwords.",
                "D": "MD5 requires an active network connection to a Certificate Authority to verify hashes."
            },
            "correct_answer": "C",
            "topic": "Cryptography",
            "subtopic": "Hashing Vulnerabilities & Rainbow Tables",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "MD5 was designed to be fast and lightweight for checksums, not secure password storage. Because it lacks a salt and has no computational work factor, modern GPUs can compute over 50 billion MD5 hashes per second, cracking unsalted passwords in seconds via rainbow tables and brute-force dictionaries.",
            "why_other_options_are_wrong": {
                "A": "MD5 always produces a fixed 128-bit (32 hexadecimal character) digest.",
                "B": "Cryptographic hashes are one-way lossy mathematical operations and cannot be 'inverted' mathematically; cracking is done via brute-force or precomputed lookups.",
                "C": "Correct: Extreme speed and lack of salting enable near-instantaneous rainbow table and GPU brute-force attacks.",
                "D": "Hash functions are standalone local mathematical algorithms that require no CAs or networks."
            },
            "real_world_application": "Migrating legacy MD5 user authentication tables to Argon2id or PBKDF2 with unique 16-byte salts."
        },
        {
            "id": 21,
            "question": "What is the specific cryptographic role of adding a unique 'Salt' to each user's password prior to hashing with a function like bcrypt?",
            "options": {
                "A": "It converts the symmetric hash into an asymmetric public-private key pair.",
                "B": "It encrypts the password ciphertext so only the database administrator can view it in cleartext.",
                "C": "It ensures that two users with identical passwords will have completely different hash values, rendering precomputed rainbow tables useless.",
                "D": "It compresses the password to guarantee it fits within an 8-bit memory register."
            },
            "correct_answer": "C",
            "topic": "Cryptography",
            "subtopic": "Password Salting Mechanics",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Cognizant-style", "HCLTech-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A salt is a cryptographically random value generated uniquely for each user and concatenated with their password before hashing. Even if 1,000 users have the password 'Password123!', each will have a completely different stored hash, completely defeating precomputed rainbow tables.",
            "why_other_options_are_wrong": {
                "A": "Salting does not turn a hash into asymmetric cryptography.",
                "B": "Salts do not make the hash reversible; DBAs still cannot read the cleartext password.",
                "C": "Correct: Unique salts prevent identical hashes for identical passwords and neutralize precomputed lookup tables.",
                "D": "Salts increase the string length, not compress it into an 8-bit register."
            },
            "real_world_application": "Implementation of Django, Spring Security, or Devise user credential storage frameworks."
        },
        {
            "id": 22,
            "question": "Two distinct plaintexts, $M_1$ and $M_2$ (where $M_1 \\neq M_2$), produce the exact same cryptographic hash digest: $H(M_1) = H(M_2)$. What is this phenomenon called, and which mathematical concept guarantees that collisions must theoretically exist for any fixed-length hash function?",
            "options": {
                "A": "Ciphertext Malleability, governed by Fermat's Little Theorem",
                "B": "Avalanche Effect, governed by the Central Limit Theorem",
                "C": "Hash Collision, governed by the Pigeonhole Principle",
                "D": "Quantum Decoherence, governed by Heisenberg's Uncertainty Principle"
            },
            "correct_answer": "C",
            "topic": "Cryptography",
            "subtopic": "Hash Collisions & Pigeonhole Principle",
            "difficulty": "Medium-Hard",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Deloitte-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "When two distinct inputs produce the identical output digest, it is called a Hash Collision. Because a hash function maps an infinite set of possible input messages to a finite number of output digests (e.g., $2^{256}$ for SHA-256), the Pigeonhole Principle mathematically dictates that collisions must exist.",
            "why_other_options_are_wrong": {
                "A": "Malleability refers to the ability of an attacker to alter the ciphertext so it decrypts to a predictable plaintext.",
                "B": "The Avalanche Effect is a desirable property where changing a single bit in the input radically changes at least 50% of the output bits.",
                "C": "Correct: A collision occurs when two inputs yield the same output; the Pigeonhole Principle proves its inevitability due to domain vs codomain size.",
                "D": "Decoherence is a quantum physics concept, completely unrelated to deterministic hash mappings."
            },
            "real_world_application": "Deprecating SHA-1 in Git and digital certificates after Google and CWI demonstrated the SHAttered collision in 2017."
        },
        {
            "id": 23,
            "question": "A user navigates to an internal enterprise web portal and receives a prominent browser warning: 'Your connection is not private (NET::ERR_CERT_AUTHORITY_INVALID)'. The server admin explains: 'The website is using an SSL certificate generated locally with OpenSSL by our IT team.' Why does the browser reject this certificate?",
            "options": {
                "A": "The certificate is unencrypted and transmits cleartext HTTP across the internet.",
                "B": "The certificate is self-signed and its root signature does not chain up to any trusted Certificate Authority (CA) in the operating system's root trust store.",
                "C": "OpenSSL certificates only function on Linux operating systems and fail on Windows or macOS.",
                "D": "The server failed to provide its private key directly to the browser during the ClientHello phase."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Digital Certificates & Trust Chains",
            "difficulty": "Medium-Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["TCS-style", "Infosys-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Web browsers validate an X.509 digital certificate by checking if it was signed by an entity listed in the operating system/browser's pre-installed Root Certificate Authority store. A self-signed certificate has no trusted third-party guarantor, so the browser flags it as untrusted to protect the user from potential Man-in-the-Middle attacks.",
            "why_other_options_are_wrong": {
                "A": "The certificate does enable TLS encryption; the warning is about identity trust, not lack of cryptographic ciphers.",
                "B": "Correct: Without a trusted CA signature chaining to the root store, browsers cannot verify the authenticity of the server's identity.",
                "C": "X.509 standards are platform-agnostic and work across all operating systems.",
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
                "C": "Diffie-Hellman Key Exchange",
                "D": "One-Time Pad (OTP)"
            },
            "correct_answer": "C",
            "topic": "Cryptography",
            "subtopic": "Key Exchange & Diffie-Hellman",
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Capgemini-style", "Accenture-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "The Diffie-Hellman (DH) key exchange (and its elliptic curve variant ECDH) is a fundamental cryptographic protocol that allows two parties to agree on a shared secret over an insecure medium without any prior shared secrets, using discrete logarithm / elliptic curve mathematics.",
            "why_other_options_are_wrong": {
                "A": "AES requires both parties to already possess the shared symmetric key beforehand.",
                "B": "SHA-512 is a one-way hashing function, not a key agreement protocol.",
                "C": "Correct: Diffie-Hellman solves the key distribution problem over public networks without sending the secret itself.",
                "D": "A One-Time Pad requires physical pre-distribution of truly random key material equal in length to the message."
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
            "company_pattern": ["Wipro-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "company_pattern": ["IBM-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Static RSA key exchange does not provide Perfect Forward Secrecy (PFS); if the server's private key is stolen in the future, past recorded encrypted sessions can be decrypted.",
                "B": "AES-128 is mathematically uncrackable only when paired with Diffie-Hellman.",
                "C": "Static RSA causes browser crashes on all mobile operating systems.",
                "D": "Diffie-Hellman completely removes the need for digital certificates and Certificate Authorities."
            },
            "correct_answer": "A",
            "topic": "Cryptography",
            "subtopic": "Perfect Forward Secrecy (PFS)",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Accenture-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In static RSA key exchange, the client encrypts the premaster secret with the server's static public key. If an adversary records all encrypted traffic today and steals the server's private key two years later, they can decrypt all historical recorded traffic. Ephemeral Diffie-Hellman (ECDHE) generates fresh temporary keys for each session, guaranteeing Perfect Forward Secrecy (PFS).",
            "why_other_options_are_wrong": {
                "A": "Correct: PFS ensures that compromise of long-term server private keys does not compromise past session keys.",
                "B": "AES-128's cryptographic strength is independent of the key exchange algorithm.",
                "C": "Browsers support static RSA; it is deprecated for security reasons, not client crash bugs.",
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
                "C": "Advanced Encryption Standard (AES)",
                "D": "Salsa20"
            },
            "correct_answer": "C",
            "topic": "Cryptography",
            "subtopic": "Block vs Stream Ciphers",
            "difficulty": "Medium",
            "question_type": "Comparison",
            "company_pattern": ["Infosys-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "AES operates on fixed-size blocks of plaintext (specifically 128-bit blocks) using substitution-permutation networks, making it a classic Block Cipher. In contrast, RC4, ChaCha20, and Salsa20 generate continuous keystreams combined bitwise via XOR with plaintext, classifying them as Stream Ciphers.",
            "why_other_options_are_wrong": {
                "A": "RC4 is a well-known (and now deprecated) stream cipher.",
                "B": "ChaCha20 is a high-speed stream cipher widely used in modern TLS 1.3 and WireGuard.",
                "C": "Correct: AES processes data in discrete 128-bit blocks, making it a block cipher.",
                "D": "Salsa20 is the precursor stream cipher developed by Daniel J. Bernstein upon which ChaCha20 is based."
            },
            "real_world_application": "Understanding why block ciphers require modes of operation (CBC, GCM, CTR) and padding (PKCS#7)."
        },
        {
            "id": 29,
            "question": "An engineer encrypts a high-resolution bitmap image using AES in Electronic Codebook (ECB) mode. To their surprise, although the pixel data is encrypted, the distinct visual outline of the image subject is still clearly visible in the output image! What is the fundamental flaw of AES-ECB mode?",
            "options": {
                "A": "ECB mode does not use an encryption key and only performs base64 encoding.",
                "B": "ECB encrypts each identical 16-byte block of plaintext into the exact same block of ciphertext, leaking data patterns.",
                "C": "ECB mode inverts the bits of the image header, rendering the pixels into an ASCII art representation.",
                "D": "ECB mode is an asymmetric cipher and requires an elliptic curve initialization vector."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Block Cipher Modes & ECB Flaw",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "In Electronic Codebook (ECB) mode, each plaintext block is encrypted independently with the key without any feedback or Initialization Vector (IV). Consequently, identical plaintext blocks produce identical ciphertext blocks, preserving structural patterns (famously demonstrated by the ECB Penguin).",
            "why_other_options_are_wrong": {
                "A": "ECB uses a standard secret key; it is a genuine encryption mode, not simple encoding.",
                "B": "Correct: The lack of diffusion/randomization across blocks causes repeated plaintext blocks to yield identical ciphertext blocks.",
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
            "company_pattern": ["Capgemini-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "HMAC requires a shared secret key combined with the message, providing both integrity AND origin authenticity, whereas an unkeyed hash only verifies integrity.",
                "C": "SHA-256 provides encryption for confidentiality, while HMAC provides decryption.",
                "D": "HMAC can only be calculated on hardware smart cards, while SHA-256 runs in software."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "HMAC vs Unkeyed Hash",
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["Infosys-style", "LTIMindtree-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "An unkeyed hash (SHA-256) can be computed by anyone who possesses the message. If an attacker modifies both the message and recomputes the hash, the recipient cannot detect tampering. An HMAC combines the message with a shared secret key ($K$), ensuring that only someone with the secret key could have produced the MAC, verifying both authenticity and integrity.",
            "why_other_options_are_wrong": {
                "A": "HMAC output length matches the underlying hash (e.g., HMAC-SHA256 produces 256 bits).",
                "B": "Correct: HMAC incorporates a secret key, ensuring authenticity and integrity simultaneously.",
                "C": "Neither HMAC nor SHA-256 provides confidentiality (encryption); both are hashing primitives.",
                "D": "Both algorithms run efficiently in software on any modern CPU architecture."
            },
            "real_world_application": "Signing REST API webhooks (such as Stripe and GitHub webhooks) using HMAC-SHA256 signatures."
        },
        {
            "id": 32,
            "question": "An enterprise banking application requires storing customer credit card numbers on disk to process recurring monthly subscriptions. Which cryptographic primitive and approach is legally compliant under PCI DSS requirements?",
            "options": {
                "A": "One-way hashing using SHA-256 with a static salt",
                "B": "Strong symmetric encryption such as AES-256 with rigorous key rotation and access controls",
                "C": "Obfuscating strings using Base64 encoding",
                "D": "Compressing data with gzip and hiding the database behind an internal IP address"
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Cryptographic Primitive Selection",
            "difficulty": "Medium",
            "question_type": "Application-Based",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Credit card Primary Account Numbers (PAN) must be retrievable to execute monthly recurring payments, so one-way hashing cannot be used. PCI DSS mandates strong two-way encryption (AES-256, RSA) with cryptographic keys stored separately from the data in a dedicated Key Management Service (KMS) or Hardware Security Module (HSM).",
            "why_other_options_are_wrong": {
                "A": "Hashing is irreversible; the merchant would be unable to retrieve the credit card number to charge the card next month.",
                "B": "Correct: Reversible data at rest requires strong authenticated symmetric encryption (AES-256) with strict key management.",
                "C": "Base64 is a reversible encoding scheme with zero security; it provides no encryption whatsoever.",
                "D": "Security through obscurity and compression violates core PCI DSS standards."
            },
            "real_world_application": "AWS KMS / HashiCorp Vault tokenization and envelope encryption for payment gateway backends."
        },
        {
            "id": 33,
            "question": "A student in an interview is asked: 'Can RSA be used to sign a document if the document size is 4 gigabytes?' How should the candidate accurately answer?",
            "options": {
                "A": "No, RSA has a strict mathematical limit of 245 bytes and cannot sign any file larger than a single paragraph.",
                "B": "Yes, by first hashing the 4 GB file into a fixed-length digest (e.g., 32 bytes via SHA-256) and then signing that digest with the RSA private key.",
                "C": "Yes, but the system must partition the 4 GB file into 16-megabyte blocks and encrypt every individual block with the RSA private key.",
                "D": "No, digital signatures can only be applied to plain ASCII text files under 1 megabyte."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Digital Signature Performance & Hashing",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Deloitte-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Digital signatures are practically never applied directly to raw data. Instead, the data of arbitrary size (whether 4 KB or 40 GB) is hashed into a tiny, fixed-size digest (e.g. 256 bits), and only that digest is encrypted with the signer's RSA private key. This is blindingly fast and mathematically sound.",
            "why_other_options_are_wrong": {
                "A": "While RSA plaintext input is limited by key modulus, hashing the file first solves this limitation universally.",
                "B": "Correct: Signing the cryptographic hash of the document signs the entire document efficiently and securely.",
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
            "company_pattern": ["Wipro-style", "HCLTech-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Side-Channel / Traffic Analysis",
                "B": "Hash Collision Preimage Attack",
                "C": "SQL Injection Analysis",
                "D": "Buffer Overflow Exploitation"
            },
            "correct_answer": "A",
            "topic": "Cryptography",
            "subtopic": "Traffic Analysis & Metadata Leakage",
            "difficulty": "Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["IBM-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Traffic Analysis is an intelligence and cryptographic evaluation technique that deduces information from patterns in communication (timing, packet sizing, volume, endpoints) even when the payload itself remains fully encrypted and unreadable.",
            "why_other_options_are_wrong": {
                "A": "Correct: Inferring user activity from metadata, timing, and packet lengths without decrypting the payload is traffic analysis.",
                "B": "Preimage attacks attempt to find an input that produces a specific hash output.",
                "C": "SQL injection attacks the database layer via application input fields, not network timing metadata.",
                "D": "Buffer overflows exploit memory management flaws in compiled binaries (like C/C++)."
            },
            "real_world_application": "Why Tor uses fixed 512-byte cells and packet padding to obscure traffic analysis against nation-state surveillance."
        },
        {
            "id": 36,
            "question": "A legacy company still uses the Data Encryption Standard (DES) with a 56-bit key to encrypt internal payroll files. A cryptanalyst points out that DES is fundamentally broken today. What is the exact reason for DES's obsolescence?",
            "options": {
                "A": "A fatal flaw in its S-box construction allows decryption without any computations.",
                "B": "Its 56-bit key space ($2^{56} \\approx 7.2 \\times 10^{16}$ keys) is small enough that modern distributed computing or specialized FPGA hardware can brute-force the entire key space in hours.",
                "C": "DES was mathematically proven to generate identical ciphertext for every plaintext block.",
                "D": "DES only works on 8-bit CPUs and cannot execute on 64-bit operating systems."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Symmetric Key Length & Exhaustive Search",
            "difficulty": "Medium-Hard",
            "question_type": "Direct Conceptual",
            "company_pattern": ["TCS-style", "Capgemini-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "A 56-bit key space consists of only $2^{56}$ possible combinations. With modern hardware, custom FPGA rigs (like the EFF Deep Crack machine or modern cloud instances) can test billions of keys per second, exhausting the entire keyspace in under a day, rendering DES completely obsolete.",
            "why_other_options_are_wrong": {
                "A": "The DES S-boxes were actually designed with subtle resistance against differential cryptanalysis.",
                "B": "Correct: 56 bits is far too short to withstand modern exhaustive brute-force search; AES with 128 or 256 bits is required.",
                "C": "DES generates pseudorandom ciphertext like any valid Feistel cipher.",
                "D": "DES algorithms can be implemented in software on any CPU bit-width."
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
            "difficulty": "Medium-Hard",
            "question_type": "Comparison",
            "company_pattern": ["Accenture-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
            "difficulty": "Medium",
            "question_type": "Direct Conceptual",
            "company_pattern": ["Infosys-style", "Cognizant-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "B": "The browser uses DigiCert's Public Key (pre-installed in the browser's trust store) to verify the CA's digital signature embedded on the server's certificate.",
                "C": "The browser sends the raw server certificate to Google's search engine via an HTTP GET request.",
                "D": "The browser re-encrypts the server certificate with AES-128 and compares checksum lengths."
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Certificate Signature Verification",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "The issuing CA signs the certificate by hashing the certificate body and encrypting the hash with the CA's Private Key. The browser, possessing the CA's Public Key in its trusted root store, decrypts the signature to extract the hash and validates it against its own computed hash of the certificate.",
            "why_other_options_are_wrong": {
                "A": "Clients never receive or decrypt server private keys.",
                "B": "Correct: Digital signature verification uses the issuing CA's trusted public key to validate the certificate's cryptographic signature.",
                "C": "Trust validation is performed locally using mathematical signature checks, not web search engine queries.",
                "D": "AES symmetric encryption is unrelated to X.509 certificate signature validation."
            },
            "real_world_application": "The foundational chain of trust establishing lock icons on all modern web browsers."
        },
        {
            "id": 40,
            "question": "An attacker performs a 'Birthday Attack' against a legacy hash function that outputs an 80-bit digest. According to the Birthday Paradox in probability theory, roughly how many randomly generated messages must the attacker hash before having a 50% probability of finding a collision?",
            "options": {
                "A": "$2^{80}$ messages",
                "B": "$2^{40}$ messages",
                "C": "$80^2 = 6,400$ messages",
                "D": "$2 \\times 80 = 160$ messages"
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Birthday Attack & Hash Collision Complexity",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["Deloitte-style", "IBM-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "The Birthday Paradox shows that finding ANY two items that share a value is vastly easier than finding a match for one specific targeted value. For an $n$-bit hash function, finding a collision requires testing approximately $\\sqrt{2^n} = 2^{n/2}$ inputs. For an 80-bit hash, $2^{80/2} = 2^{40}$ operations are sufficient to achieve a 50% collision probability.",
            "why_other_options_are_wrong": {
                "A": "Testing $2^{80}$ inputs is the complexity for a Preimage attack (matching a specific pre-selected hash target), not a collision attack.",
                "B": "Correct: The square root of the keyspace ($2^{n/2}$) is the classical complexity of a birthday collision attack ($2^{40}$).",
                "C": "Polynomial or quadratic multiplications of the bit length are mathematically invalid for exponential keyspaces.",
                "D": "Simple multiplication ignores the exponential nature of binary state spaces."
            },
            "real_world_application": "Why SHA-256 uses 256 bits, guaranteeing that even with a Birthday Attack, an attacker still needs $2^{128}$ operations (computationally impossible today)."
        },
        {
            "id": 41,
            "question": "A company wants to send automated system alert SMS messages to field technicians. The messages contain no private or sensitive information (e.g., 'Pump 4 pressure at 120 PSI'), but it is critical that no unauthorized rogue device can spoof alerts or modify the pressure readings. Which cryptographic service is required?",
            "options": {
                "A": "Confidentiality without Integrity",
                "B": "Integrity and Authenticity without Confidentiality",
                "C": "Non-repudiation and Confidentiality without Integrity",
                "D": "Availability and Secrecy without Authentication"
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Security Objective Trade-offs",
            "difficulty": "Medium-Hard",
            "question_type": "Application-Based",
            "company_pattern": ["Capgemini-style", "Wipro-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Because the content is public and non-sensitive, encryption for Confidentiality is unnecessary. However, because spoofing (faking the sender) and tampering (altering pressure numbers) must be prevented, the solution requires Message Authentication and Integrity (e.g., via an attached HMAC or digital signature).",
            "why_other_options_are_wrong": {
                "A": "Confidentiality hides data; it does not stop an attacker from flipping bits or sending fake messages.",
                "B": "Correct: Authenticity confirms the alert originated from the real sensor system, and Integrity confirms the readings were not altered in flight.",
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
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
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
                "A": "Length Extension Attack",
                "B": "Buffer Underrun Attack",
                "C": "Rowhammer Bit Flipping",
                "D": "Cross-Site Script Inclusion"
            },
            "correct_answer": "A",
            "topic": "Cryptography",
            "subtopic": "Length Extension Attacks on Merkle-Damgård",
            "difficulty": "Hard",
            "question_type": "Conceptual Trap",
            "company_pattern": ["IBM-style", "Deloitte-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Hash functions based on the Merkle–Damgård construction (MD5, SHA-1, SHA-256, SHA-512) output the internal state of the hash engine as the final digest. Because of this, an attacker can use the hash as an initial state to append extra data and calculate a valid hash for the extended message. This is why HMAC (`HMAC = H(K \\oplus opad \\parallel H(K \\oplus ipad \\parallel M))`) was invented.",
            "why_other_options_are_wrong": {
                "A": "Correct: Length Extension Attacks affect Merkle-Damgård hashes when naïve secret-prefix constructions are used instead of HMAC.",
                "B": "Buffer underrun is a memory pointer vulnerability, not a cryptographic hash property.",
                "C": "Rowhammer is a hardware DRAM electrical disturbance attack flipping physical memory bits.",
                "D": "XSSI is a browser JavaScript vulnerability exploiting script tag inclusion."
            },
            "real_world_application": "Flickr API vulnerability in 2009 where API authentication tokens were forged using length extension attacks."
        },
        {
            "id": 44,
            "question": "An IT department deploys full-disk encryption (BitLocker) on all company laptops using AES-XTS. An employee's laptop is stolen while powered OFF. Assuming the thief does not possess the user's PIN or recovery key and cannot crack the password, what can the thief extract from the hard drive?",
            "options": {
                "A": "All plaintext files stored in the root `C:\\` directory",
                "B": "Only unreadable pseudorandom ciphertext, resulting in zero accessible data",
                "C": "All user passwords and cached browser cookies",
                "D": "The Windows registry and system event logs in cleartext"
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Data at Rest Encryption",
            "difficulty": "Medium",
            "question_type": "Application-Based",
            "company_pattern": ["Cognizant-style", "LTIMindtree-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Full Disk Encryption (FDE) encrypts all sectors of the storage volume at rest. When the machine is powered off, the cryptographic keys are not loaded into volatile RAM. A thief removing the hard drive sees only raw ciphertext indistinguishable from random noise, protecting Confidentiality.",
            "why_other_options_are_wrong": {
                "A": "Root directories and OS binaries are fully encrypted along with user files.",
                "B": "Correct: At-rest volume encryption prevents unauthorized reads when the decryption key is absent.",
                "C": "Cached credentials and registry hives are stored on the encrypted volume and remain inaccessible.",
                "D": "Registry hives are encrypted alongside all other disk sectors."
            },
            "real_world_application": "Meeting HIPAA and GDPR regulatory safe-harbor standards against breach notifications when encrypted laptops are lost or stolen."
        },
        {
            "id": 45,
            "question": "Which of the following represents the correct sequence of actions when an application sends an encrypted, authenticated email using S/MIME or PGP?",
            "options": {
                "A": "1. Encrypt payload with sender's public key -> 2. Sign with recipient's private key",
                "B": "1. Hash payload -> 2. Encrypt hash with sender's private key (Signature) -> 3. Generate symmetric session key -> 4. Encrypt payload with session key -> 5. Encrypt session key with recipient's public key",
                "C": "1. Encrypt payload with CA's private key -> 2. Decrypt with sender's private key",
                "D": "1. Encode with Base64 -> 2. Transmit via plain HTTP -> 3. Decrypt with sender's public key"
            },
            "correct_answer": "B",
            "topic": "Cryptography",
            "subtopic": "Comprehensive Hybrid Cryptography Workflow",
            "difficulty": "Hard",
            "question_type": "Scenario-Based",
            "company_pattern": ["Accenture-style", "TCS-style"],
            "source_status": "PATTERN-BASED",
            "source": None,
            "explanation": "Secure hybrid messaging (PGP / S/MIME): The sender hashes the message and encrypts the hash with their own private key (creating the digital signature for authenticity). Next, a random symmetric session key is generated to encrypt the message bulk payload (for speed). Finally, this session key is encrypted with the recipient's public key (so only the recipient can decrypt the session key).",
            "why_other_options_are_wrong": {
                "A": "Senders cannot sign with a recipient's private key; private keys are strictly secret to their owners.",
                "B": "Correct: This is the exact textbook standard workflow for hybrid asymmetric/symmetric signed and encrypted email.",
                "C": "CAs do not encrypt user email payloads with CA private keys.",
                "D": "Base64 over HTTP provides zero confidentiality or integrity."
            },
            "real_world_application": "Sending end-to-end encrypted emails via S/MIME in Microsoft Outlook and PGP/GnuPG."
        }
    ]

print("Part 2 (Cryptography) ready - 30 questions")
