/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: COMPUTER NETWORKS
   Protocol stacks, packet flows, DNS resolution & network troubleshooting
   ========================================================================== */

(function () {
  window.NETWORKING_QUESTIONS = [
    {
      id: 'net-001',
      question: 'A network administrator notices that client workstations inside an office can successfully load an internal portal by typing its direct IP address `http://192.168.10.45`, but the browser reports "Server Not Found" when navigating to `http://intranet.corp.local`. Which network service is malfunctioning and should be investigated first?',
      codeSnippet: '',
      options: [
        'DHCP (Dynamic Host Configuration Protocol)',
        'DNS (Domain Name System)',
        'Default Gateway / Router',
        'ARP (Address Resolution Protocol)'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'scenario',
      topic: 'DNS Lookup Hierarchy',
      explanation: 'Because direct IP connectivity succeeds, routing, physical cabling, and HTTP web server ports are completely functional. The failure to resolve the human-readable hostname `intranet.corp.local` into an IP address points directly to a DNS resolver failure, misconfigured DNS IP, or missing DNS A-record.',
      wrongOptionExplanations: {
        '0': 'If DHCP had failed, the workstation would not have received an IP address and could not communicate via IP either.',
        '2': 'The router/gateway is routing packets properly as proven by successful direct IP navigation.',
        '3': 'ARP resolves IP to MAC locally, which is functioning since IP communication works.'
      },
      realWorldApplication: 'DNS outages represent one of the most frequent causes of widespread enterprise and cloud application downtime (e.g. AWS Route 53 or internal Active Directory DNS misconfigurations).',
      placementTip: 'Classic MNC troubleshooting pattern: Can reach via IP but not domain name = ALWAYS a DNS issue!'
    },
    {
      id: 'net-002',
      question: 'During the standard TCP Three-Way Handshake between a client and web server, which sequence of control flags is exchanged to establish a reliable connection?',
      codeSnippet: '',
      options: [
        'Client: ACK -> Server: SYN -> Client: ACK',
        'Client: SYN -> Server: SYN-ACK -> Client: ACK',
        'Client: FIN -> Server: ACK -> Client: FIN-ACK',
        'Client: PSH -> Server: URG -> Client: ACK'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'TCP vs UDP Flow',
      explanation: 'TCP connection establishment follows: (1) Client sends `SYN` (synchronize sequence number). (2) Server responds with `SYN-ACK` (synchronize and acknowledge client sequence). (3) Client responds with `ACK` (acknowledge server sequence). The connection is then in the `ESTABLISHED` state.',
      wrongOptionExplanations: {
        '0': 'Connection cannot start with `ACK`; client must initiate with `SYN`.',
        '2': '`FIN` flags are used for connection termination (teardown), not establishment.',
        '3': '`PSH` (push) and `URG` (urgent) are data transfer flags, not connection establishment flags.'
      },
      realWorldApplication: 'Understanding TCP handshake states (SYN_SENT, SYN_RECV, ESTABLISHED) is essential for identifying SYN Flood DDoS attacks and tuning load balancer keep-alive timeouts.',
      placementTip: 'Remember the sequence: SYN (1), SYN-ACK (2), ACK (3). Client initiates, server confirms and asks, client confirms.'
    },
    {
      id: 'net-003',
      question: 'An enterprise subnets the network `192.168.1.0/26`. What is the subnet mask, total number of IP addresses per subnet, and the maximum number of usable host IP addresses in each subnet?',
      codeSnippet: '',
      options: [
        'Subnet mask: 255.255.255.192; Total IPs: 64; Usable hosts: 62',
        'Subnet mask: 255.255.255.128; Total IPs: 128; Usable hosts: 126',
        'Subnet mask: 255.255.255.224; Total IPs: 32; Usable hosts: 30',
        'Subnet mask: 255.255.255.240; Total IPs: 16; Usable hosts: 14'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Subnetting & CIDR',
      explanation: 'In CIDR notation `/26`, 26 bits are network bits and `32 - 26 = 6` bits are host bits. The 4th octet has 2 network bits: `11000000 = 128 + 64 = 192`. Thus, subnet mask is `255.255.255.192`. Total IPs = `2^6 = 64`. Usable hosts = `2^6 - 2 = 62` (subtracting network ID and broadcast address).',
      wrongOptionExplanations: {
        '1': '`/25` corresponds to mask `255.255.255.128` with 62 usable hosts.',
        '2': '`/27` corresponds to mask `255.255.255.224` with 30 usable hosts.',
        '3': '`/28` corresponds to mask `255.255.255.240` with 14 usable hosts.'
      },
      realWorldApplication: 'Cloud Virtual Private Clouds (AWS VPC, Azure VNet) require network engineers to calculate CIDR blocks to avoid overlapping subnets across microservices.',
      placementTip: 'Formula: Usable hosts = `2^(32 - CIDR) - 2`. Always subtract 2 for the Network ID and Broadcast IP!'
    },
    {
      id: 'net-004',
      question: 'Which Layer of the OSI Reference Model is responsible for end-to-end process-to-process communication, port addressing, flow control, and segment reassembly?',
      codeSnippet: '',
      options: [
        'Network Layer (Layer 3)',
        'Data Link Layer (Layer 2)',
        'Transport Layer (Layer 4)',
        'Session Layer (Layer 5)'
      ],
      correctAnswer: 2,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'OSI 7-Layer Model',
      explanation: 'The Transport Layer (Layer 4) handles process-to-process delivery using port numbers (e.g., port 80 for HTTP, port 443 for HTTPS). It segments data, performs error checking, manages flow control, and reassembles incoming packets into sequential streams.',
      wrongOptionExplanations: {
        '0': 'Network layer (Layer 3) handles host-to-host IP routing and logical addressing.',
        '1': 'Data Link layer (Layer 2) handles hop-to-hop framing and physical MAC addresses.',
        '3': 'Session layer (Layer 5) manages dialogue control and session token persistence.'
      },
      realWorldApplication: 'Layer 4 Load Balancers (like AWS NLB) operate at this layer to route raw TCP/UDP packets by port number with minimal CPU latency.',
      placementTip: 'MNC mnemonic: Host-to-Host = Layer 3 (IP). Process-to-Process / Port-to-Port = Layer 4 (TCP/UDP).'
    },
    {
      id: 'net-005',
      question: 'A real-time multiplayer video game and VoIP voice calling application require minimal transmission latency and can tolerate occasional lost packets without retransmissions. Which transport protocol is specifically chosen for this requirement?',
      codeSnippet: '',
      options: [
        'TCP (Transmission Control Protocol)',
        'UDP (User Datagram Protocol)',
        'SCTP (Stream Control Transmission Protocol)',
        'ICMP (Internet Control Message Protocol)'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'comparison',
      topic: 'TCP vs UDP Flow',
      explanation: 'UDP is a connectionless, lightweight, unreliable protocol with no handshake, no acknowledgments, and no retransmissions. For live streaming, VoIP, and gaming, a delayed retransmitted packet is useless; speed and continuous delivery take precedence over guaranteed reliability.',
      wrongOptionExplanations: {
        '0': 'TCP imposes connection handshake, retransmissions, and head-of-line blocking, which introduces unacceptable latency spikes for live audio/gaming.',
        '2': 'SCTP provides multi-streaming with congestion control, heavier than raw UDP.',
        '3': 'ICMP is a network layer diagnostic and error-reporting protocol (used by `ping`), not an application transport protocol.'
      },
      realWorldApplication: 'Real-time media protocols like WebRTC, DNS queries, and modern HTTP/3 (QUIC) are built directly on top of UDP for zero-RTT performance.',
      placementTip: 'Reliable + Ordered = TCP (Email, HTTP, File Transfer). Fast + Unreliable + Real-Time = UDP (VoIP, Gaming, DNS).'
    }
  ];
})();
