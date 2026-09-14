const questionsData = [
  {
    "id": 1,
    "type": "scenario",
    "topic": "Cloud Service Models",
    "subtopic": "PaaS Selection",
    "difficulty": "Easy",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Cognizant",
      "Infosys"
    ],
    "question": "A startup development team wants to launch a Node.js web application. The developers want to focus solely on writing and deploying code without having to configure operating systems, install runtime patches, or manage underlying server hardware. Which cloud service model is most appropriate for this requirement?",
    "options": {
      "A": "Infrastructure as a Service (IaaS)",
      "B": "Platform as a Service (PaaS)",
      "C": "Software as a Service (SaaS)",
      "D": "Function as a Service (FaaS)"
    },
    "correctAnswer": "B",
    "explanation": "Platform as a Service (PaaS) provides developers with a pre-configured hardware and software platform, including operating systems, runtimes, and databases, allowing developers to focus solely on application development and deployment.",
    "whyCorrect": "With PaaS (such as AWS Elastic Beanstalk, Azure App Service, or Google App Engine), the cloud provider manages the OS, server hardware, networking, and runtime environments. Developers just upload application code.",
    "whyOthersIncorrect": "IaaS requires managing the OS and system patches; SaaS provides fully finished software for end-users (e.g., Microsoft 365); FaaS is for event-triggered micro-functions rather than a standard complete web app runtime.",
    "interviewTip": "In placement interviews, remember the responsibility division: IaaS = Provider manages hardware/virtualization; PaaS = Provider manages hardware, OS, and runtimes; SaaS = Provider manages everything including the app."
  },
  {
    "id": 2,
    "type": "scenario",
    "topic": "Cloud Service Models",
    "subtopic": "IaaS Migration",
    "difficulty": "Medium",
    "targetCompanies": [
      "Capgemini",
      "Wipro",
      "TCS",
      "Cognizant"
    ],
    "question": "An enterprise has a legacy Windows-based CRM application that requires custom kernel modifications, specialized network drivers, and strict control over OS-level administrative configurations. Which cloud service model should the enterprise choose for migration?",
    "options": {
      "A": "Software as a Service (SaaS)",
      "B": "Platform as a Service (PaaS)",
      "C": "Infrastructure as a Service (IaaS)",
      "D": "Database as a Service (DBaaS)"
    },
    "correctAnswer": "C",
    "explanation": "Infrastructure as a Service (IaaS) provides virtualized computing resources (VMs, storage, and networks) over the internet, giving the customer root/administrative control over the guest OS and runtime configuration.",
    "whyCorrect": "IaaS (like Amazon EC2, Azure VMs, or Google Compute Engine) grants complete administrative and root control over the operating system, allowing the installation of legacy drivers and custom OS configurations.",
    "whyOthersIncorrect": "PaaS abstracts away OS access, preventing custom kernel modifications; SaaS provides zero infrastructure access; DBaaS is strictly a managed database service.",
    "interviewTip": "When interviewers ask 'Which model offers maximum customer control over the OS?', the answer is always IaaS."
  },
  {
    "id": 3,
    "type": "scenario",
    "topic": "Deployment Models",
    "subtopic": "Hybrid Cloud",
    "difficulty": "Medium",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Capgemini",
      "Infosys"
    ],
    "question": "A national retail bank must keep sensitive customer financial records and PII inside its on-premises data center due to strict government regulations. However, it wants to run compute-intensive seasonal marketing analytics and fraud-detection AI models using public cloud elasticity. Which cloud deployment model should the bank adopt?",
    "options": {
      "A": "Public Cloud",
      "B": "Private Cloud",
      "C": "Hybrid Cloud",
      "D": "Community Cloud"
    },
    "correctAnswer": "C",
    "explanation": "A Hybrid Cloud bridges an organization's on-premises private infrastructure with one or more public cloud services, allowing data and apps to be shared securely between them.",
    "whyCorrect": "Hybrid Cloud allows the bank to fulfill regulatory mandates by keeping sensitive data strictly on-premises in a private cloud while bursting analytics workloads to the public cloud for scalable processing.",
    "whyOthersIncorrect": "Public Cloud alone violates regulatory compliance for storing PII on-premises; Private Cloud lacks public cloud elasticity and requires massive CapEx; Community Cloud is shared among organizations with common concerns.",
    "interviewTip": "Companies in banking, healthcare, and insurance almost always favor Hybrid Cloud in real-world MNC interviews because of data residency laws."
  },
  {
    "id": 4,
    "type": "scenario",
    "topic": "Deployment Models",
    "subtopic": "Community Cloud",
    "difficulty": "Hard",
    "targetCompanies": [
      "Cognizant",
      "Wipro",
      "Infosys"
    ],
    "question": "Several state healthcare organizations and research hospitals want to collaborate on cancer genomics. They require a shared cloud platform that complies with strict medical data protocols (such as HIPAA), shares infrastructure costs, but is isolated from general commercial public users. Which cloud deployment model best fits this use case?",
    "options": {
      "A": "Public Cloud",
      "B": "Community Cloud",
      "C": "Private Cloud",
      "D": "Distributed Cloud"
    },
    "correctAnswer": "B",
    "explanation": "A Community Cloud is shared by several organizations with shared concerns, such as mission, security requirements, policy, and compliance considerations, either managed internally or by a third party.",
    "whyCorrect": "Community Cloud specifically addresses scenarios where multiple distinct entities share identical regulatory, mission, or security requirements and pool their investments into a semi-private shared cloud.",
    "whyOthersIncorrect": "Public Cloud is open to general public tenancy and lacks dedicated group isolation; Private Cloud is restricted to a single organization; Distributed Cloud refers to geographic dispersion of services rather than multi-org tenancy governance.",
    "interviewTip": "NIST defines 4 deployment models: Public, Private, Hybrid, and Community Cloud. Notice how Community Cloud is the only one shared among multiple organizations with shared missions."
  },
  {
    "id": 5,
    "type": "scenario",
    "topic": "Scalability & Elasticity",
    "subtopic": "Sudden Traffic Spikes",
    "difficulty": "Easy",
    "targetCompanies": [
      "Accenture",
      "Capgemini",
      "TCS",
      "Cognizant"
    ],
    "question": "An e-commerce platform normally serves 5,000 active shoppers. However, during a 24-hour flash sale, user traffic is predicted to suddenly spike to over 120,000 concurrent shoppers. Which cloud capability allows the system to automatically provision new server instances during the peak and tear them down once traffic subsides?",
    "options": {
      "A": "Static Vertical Scaling",
      "B": "Dynamic Elasticity & Auto Scaling",
      "C": "Data Replication",
      "D": "Cold Standby Redundancy"
    },
    "correctAnswer": "B",
    "explanation": "Elasticity combined with Auto Scaling enables a cloud infrastructure to dynamically acquire resources (scale out) when demand spikes and automatically release them (scale in) when demand decreases, optimizing cost and availability.",
    "whyCorrect": "Auto Scaling monitors system metrics (CPU utilization, request count) and automatically launches additional compute instances horizontally, shutting them down when no longer needed.",
    "whyOthersIncorrect": "Static Vertical Scaling requires manual server resizing and downtime; Data Replication copies data across databases but does not scale compute web servers; Cold Standby is a manual disaster recovery strategy with significant latency.",
    "interviewTip": "Remember the distinction: Scalability is the ability to handle growth; Elasticity is the ability to adapt automatically in real-time to both growth and reduction."
  },
  {
    "id": 6,
    "type": "scenario",
    "topic": "Scalability & Elasticity",
    "subtopic": "Horizontal vs Vertical Scaling",
    "difficulty": "Medium",
    "targetCompanies": [
      "Infosys",
      "Wipro",
      "TCS"
    ],
    "question": "A video transcoding service is running out of memory and CPU power on its single heavy database server. The administrator increases the instance type from 4 vCPUs / 16GB RAM to 16 vCPUs / 64GB RAM. This action is an example of which type of scaling?",
    "options": {
      "A": "Horizontal Scaling (Scale Out)",
      "B": "Vertical Scaling (Scale Up)",
      "C": "Horizontal Scaling (Scale In)",
      "D": "Diagonal Elasticity"
    },
    "correctAnswer": "B",
    "explanation": "Vertical Scaling (Scaling Up) refers to adding more power (CPU, RAM, disk capacity) to an existing single machine, whereas Horizontal Scaling (Scaling Out) involves adding more server instances to the resource pool.",
    "whyCorrect": "Increasing the hardware specs (CPU/RAM) of the existing server without adding additional servers is the textbook definition of Vertical Scaling (Scale Up).",
    "whyOthersIncorrect": "Horizontal scaling involves launching additional duplicate servers behind a load balancer. Scale In refers to removing instances when load declines. Diagonal elasticity is not a standard industry term.",
    "interviewTip": "Scale Up = Bigger machine (has hard hardware limits and usually causes downtime). Scale Out = More machines (the true essence of cloud computing)."
  },
  {
    "id": 7,
    "type": "scenario",
    "topic": "Load Balancing & High Availability",
    "subtopic": "Application Server Failure",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Cognizant",
      "Capgemini"
    ],
    "question": "An online banking web application is deployed on three identical cloud virtual machines. Suddenly, one of the virtual machines suffers an operating system kernel crash. What cloud component automatically detects this failure via health checks and stops routing traffic to the failed instance, ensuring zero user disruption?",
    "options": {
      "A": "Network Address Translation (NAT) Gateway",
      "B": "Cloud Load Balancer",
      "C": "Domain Name Registrar",
      "D": "Internet Gateway"
    },
    "correctAnswer": "B",
    "explanation": "A Cloud Load Balancer distributes incoming network or application traffic across multiple target instances and continuously performs health checks. If an instance fails a health check, traffic is diverted to healthy instances automatically.",
    "whyCorrect": "Load Balancers use periodic health check pings (e.g., HTTP GET /health). When a server crashes or fails to respond with HTTP 200, the load balancer marks it unhealthy and routes requests only to the remaining healthy servers.",
    "whyOthersIncorrect": "NAT Gateways translate IP addresses for private subnet outbound requests; Domain Name Registrars sell and manage domain registrations; Internet Gateways provide connectivity between a VPC and the public internet.",
    "interviewTip": "Always link High Availability (HA) with two things: redundant instances across multiple Availability Zones, fronted by a Load Balancer with active health checks."
  },
  {
    "id": 8,
    "type": "scenario",
    "topic": "Load Balancing & High Availability",
    "subtopic": "Multi-AZ High Availability",
    "difficulty": "Hard",
    "targetCompanies": [
      "Wipro",
      "Infosys",
      "Capgemini"
    ],
    "question": "A financial client requires an SLA of 99.99% application uptime. The solution architect wants to protect the application against physical facility disasters such as power grid failures, floods, or structural damage to an entire single building. What deployment strategy should the architect implement?",
    "options": {
      "A": "Deploy multiple instances inside the exact same Availability Zone on different racks",
      "B": "Deploy redundant instances across multiple distinct Availability Zones (Multi-AZ) within a region",
      "C": "Increase the CPU and RAM of the existing server inside the primary data center",
      "D": "Take manual snapshots of the hard drive every 24 hours"
    },
    "correctAnswer": "B",
    "explanation": "An Availability Zone (AZ) consists of one or more discrete data centers with redundant power, networking, and connectivity. Deploying across multiple AZs ensures that if one data center fails physically, instances in other AZs continue operating.",
    "whyCorrect": "Multi-AZ architecture isolates failure domains. Each AZ is physically separated by kilometers to avoid correlated failures (fires, power cuts) while maintaining low single-digit millisecond latency between them.",
    "whyOthersIncorrect": "A single AZ fails if that data center loses power or connectivity; increasing CPU/RAM does not protect against physical facility failure; manual daily snapshots result in up to 24 hours of data loss and high downtime.",
    "interviewTip": "In cloud architecture, a Region consists of multiple isolated Availability Zones (AZs). High Availability within a region is achieved via Multi-AZ."
  },
  {
    "id": 9,
    "type": "scenario",
    "topic": "Cloud Storage",
    "subtopic": "Object Storage Selection",
    "difficulty": "Easy",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Cognizant",
      "Infosys"
    ],
    "question": "A social media platform needs to store over 50 million user-uploaded profile photos, videos, and PDF invoices. These files do not require a traditional file system hierarchy, must be accessible globally via RESTful HTTP/HTTPS URLs, and require 99.999999999% (11 9's) data durability. Which type of cloud storage should be chosen?",
    "options": {
      "A": "Block Storage (e.g., AWS EBS / Azure Disk)",
      "B": "Object Storage (e.g., AWS S3 / Azure Blob / Google Cloud Storage)",
      "C": "File Storage (e.g., AWS EFS / Azure Files)",
      "D": "Ephemeral / Instance Store Storage"
    },
    "correctAnswer": "B",
    "explanation": "Object Storage stores data as discrete objects containing the data payload, unique identifier, and customizable metadata. It is massively scalable, accessible via HTTP/HTTPS APIs, and designed for extreme durability.",
    "whyCorrect": "Unstructured media files (photos, videos, PDFs) accessible over the web via REST APIs are the primary use case for Object Storage (like Amazon S3, Google Cloud Storage, or Azure Blob Storage).",
    "whyOthersIncorrect": "Block storage is designed for OS boot disks and low-latency databases attached to a single VM; File storage is hierarchical NFS/SMB for shared server access; Ephemeral storage is wiped upon VM shutdown.",
    "interviewTip": "Key indicator words: 'HTTP/HTTPS URLs', 'REST API', 'metadata', 'unstructured data', '11 9's durability' -> Always points to Object Storage."
  },
  {
    "id": 10,
    "type": "scenario",
    "topic": "Cloud Storage",
    "subtopic": "Block Storage for Databases",
    "difficulty": "Medium",
    "targetCompanies": [
      "Capgemini",
      "Wipro",
      "TCS"
    ],
    "question": "A high-performance relational database (PostgreSQL) running on a cloud virtual machine requires ultra-low latency, high IOPS (Input/Output Operations Per Second), and random read/write access directly to raw disk sectors. Which storage type is the most suitable?",
    "options": {
      "A": "Object Storage",
      "B": "Block Storage",
      "C": "Cold Archive Storage (e.g., Glacier)",
      "D": "Content Delivery Network (CDN) Cache"
    },
    "correctAnswer": "B",
    "explanation": "Block Storage divides data into evenly sized blocks with individual addresses. It acts like a raw, unformatted physical hard drive attached directly to a virtual machine via high-speed storage fabric.",
    "whyCorrect": "Relational transactional databases require block-level access to read and modify specific disk blocks without having to rewrite an entire file, delivering the necessary high IOPS and microsecond latency.",
    "whyOthersIncorrect": "Object storage requires rewriting the entire object for any modification and has higher latency; Archive storage takes minutes to hours to retrieve data; CDN is for caching static web assets, not database read/writes.",
    "interviewTip": "Block Storage = Hard disk for a VM (OS boot volumes, databases). Object Storage = Web-scale files (images, backups). File Storage = Shared network drive (NFS/SMB)."
  },
  {
    "id": 11,
    "type": "scenario",
    "topic": "Cloud Security & IAM",
    "subtopic": "Principle of Least Privilege",
    "difficulty": "Medium",
    "targetCompanies": [
      "Accenture",
      "Infosys",
      "TCS",
      "Cognizant"
    ],
    "question": "A new summer intern joins a cloud development team. The intern only needs to read and download training datasets stored in a single cloud storage bucket named 'company-training-data'. The intern must not be able to modify files, delete files, or view other buckets in the organization. What security practice should the cloud administrator follow?",
    "options": {
      "A": "Grant the intern root/administrator credentials with an agreement not to touch other resources",
      "B": "Apply an IAM policy following the Principle of Least Privilege with read-only permissions specifically scoped to 'company-training-data'",
      "C": "Make the 'company-training-data' bucket public so everyone on the internet can read it without logging in",
      "D": "Share the senior developer's login credentials and enable two-factor authentication"
    },
    "correctAnswer": "B",
    "explanation": "The Principle of Least Privilege (PoLP) dictates that a user, process, or program should be granted only the minimum permissions necessary to perform its intended job function, and nothing more.",
    "whyCorrect": "Creating an IAM role/policy granting strictly 's3:GetObject' or read-only access to only that specified resource ARN ensures the intern cannot delete data or access sensitive company files.",
    "whyOthersIncorrect": "Granting root access violates all security standards; making buckets public exposes company data to the world; credential sharing breaks auditability and violates IAM policies.",
    "interviewTip": "MNC placement interviews heavily emphasize the 'Principle of Least Privilege'. Whenever a question asks how to grant permissions to a junior or service, look for Least Privilege."
  },
  {
    "id": 12,
    "type": "scenario",
    "topic": "Cloud Security & IAM",
    "subtopic": "Secret Management & IAM Roles",
    "difficulty": "Hard",
    "targetCompanies": [
      "Capgemini",
      "Wipro",
      "Accenture"
    ],
    "question": "A backend application running on a virtual machine needs to write log files into a cloud object storage bucket. The junior developer proposes embedding the Cloud Root Access Key and Secret Key directly inside the application's source code file. Why is this a severe security hazard, and what is the cloud best practice?",
    "options": {
      "A": "Root keys slow down network throughput; the developer should use FTP instead.",
      "B": "Hardcoded credentials can leak through source control; the instance should instead assume a temporary IAM Role / Instance Profile.",
      "C": "Hardcoding keys causes compilation errors; the developer should encrypt them with Base64.",
      "D": "Root keys expire every 10 minutes automatically; the developer should disable expiration."
    },
    "correctAnswer": "B",
    "explanation": "Hardcoding cloud credentials in code exposes the entire account to compromise if pushed to GitHub or public repositories. The industry standard is to assign an IAM Role (or Managed Identity) directly to the VM, which delivers rotating temporary credentials automatically.",
    "whyCorrect": "IAM Roles / Instance Profiles use the cloud metadata service to provide temporary, automatically rotated security credentials, eliminating static secrets in source code.",
    "whyOthersIncorrect": "Root keys do not affect network throughput; Base64 is simple encoding, not encryption, and can be trivially decoded; Root keys do not automatically expire after 10 minutes.",
    "interviewTip": "Never hardcode secrets. Always use IAM Roles / Instance Profiles for cloud workloads and Secrets Manager for database passwords."
  },
  {
    "id": 13,
    "type": "scenario",
    "topic": "Cloud Networking",
    "subtopic": "NAT Gateway for Private Subnets",
    "difficulty": "Medium",
    "targetCompanies": [
      "TCS",
      "Cognizant",
      "Capgemini",
      "Infosys"
    ],
    "question": "A company has database servers hosted in a Private Subnet inside its Virtual Private Cloud (VPC) to keep them inaccessible from the public internet. However, these database servers need to periodically download security patches and OS updates from external software repositories. Which cloud networking component should be deployed?",
    "options": {
      "A": "Public Elastic IP assigned directly to each database server",
      "B": "NAT Gateway (Network Address Translation) placed in a Public Subnet",
      "C": "Attach an Internet Gateway directly to the Private Subnet",
      "D": "Remove the subnet routing table"
    },
    "correctAnswer": "B",
    "explanation": "A NAT Gateway allows instances in a private subnet to initiate outbound traffic to the internet (e.g., for software patches) while blocking the outside internet from initiating incoming connections to those private instances.",
    "whyCorrect": "NAT translates the private IP addresses of the internal servers to the public IP of the NAT Gateway, facilitating outbound-only connections and maintaining strict inbound isolation.",
    "whyOthersIncorrect": "Assigning public IPs directly exposes the databases to direct internet attacks; connecting an Internet Gateway directly to the private subnet turns it into a public subnet; removing route tables breaks all networking.",
    "interviewTip": "VPC question staple: Private subnet needs outbound internet access only = NAT Gateway. Public subnet needs bi-directional internet access = Internet Gateway (IGW)."
  },
  {
    "id": 14,
    "type": "scenario",
    "topic": "Cloud Networking",
    "subtopic": "Global Latency & CDN",
    "difficulty": "Medium",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Wipro"
    ],
    "question": "A media streaming company has its primary origin web servers located in Mumbai. Users in London and New York complain that streaming static movie posters, CSS, and video teasers takes several seconds to load. Which cloud solution will most effectively minimize latency for these global users?",
    "options": {
      "A": "Increase the server's hard drive size from HDD to SSD in Mumbai",
      "B": "Implement a Content Delivery Network (CDN) with Edge Locations near London and New York",
      "C": "Configure a NAT Gateway inside the Mumbai VPC",
      "D": "Switch the web server operating system from Linux to Windows"
    },
    "correctAnswer": "B",
    "explanation": "A Content Delivery Network (CDN), such as Amazon CloudFront or Cloudflare, caches static and streaming web assets at globally distributed Edge Locations closer to end-users, drastically reducing network round-trip time (RTT) and latency.",
    "whyCorrect": "Instead of traversing intercontinental undersea fiber cables for every image request, the user downloads the cached asset directly from an Edge Location in their local city.",
    "whyOthersIncorrect": "Upgrading disk in Mumbai does not solve geographic network latency across oceans; NAT Gateways handle private subnet outbound routing, not content delivery; changing OS has zero impact on distance latency.",
    "interviewTip": "Speeding up static content delivery globally = CDN (Edge Locations / Points of Presence)."
  },
  {
    "id": 15,
    "type": "scenario",
    "topic": "Virtualization & Containers",
    "subtopic": "VM vs Container Selection",
    "difficulty": "Medium",
    "targetCompanies": [
      "Capgemini",
      "Cognizant",
      "Infosys"
    ],
    "question": "A software company wants to package 40 distinct microservices. They want fast boot times (under 2 seconds), high density on host machines, minimal memory footprint, and identical runtime environments from developer laptops to production. However, they do not need separate guest operating systems for each microservice. Which technology should they choose?",
    "options": {
      "A": "Type-1 Hypervisor Virtual Machines",
      "B": "Docker Containers orchestrated with Kubernetes",
      "C": "Physical Bare-metal Servers for each microservice",
      "D": "Type-2 Hypervisor VMs (VirtualBox)"
    },
    "correctAnswer": "B",
    "explanation": "Containers virtualize at the operating system level, sharing the host OS kernel while providing isolated user-space environments. This makes them lightweight, fast to start, and highly portable compared to VMs.",
    "whyCorrect": "Containers package application code and dependencies without bundling a full guest OS, resulting in megabyte-sized images that launch in seconds and share host kernel memory efficiently.",
    "whyOthersIncorrect": "Virtual Machines require a complete guest OS per instance, consuming gigabytes of RAM and taking minutes to boot; physical servers for each microservice would result in massive hardware wastage and huge CapEx.",
    "interviewTip": "Containers share the host OS kernel (OS-level virtualization). VMs virtualize physical hardware and each run a full guest OS (hardware-level virtualization)."
  },
  {
    "id": 16,
    "type": "scenario",
    "topic": "Serverless",
    "subtopic": "Event-Driven Thumbnail Generation",
    "difficulty": "Medium",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Wipro",
      "Infosys"
    ],
    "question": "A real estate portal allows agents to upload property pictures. Whenever a photo is uploaded to cloud storage, the system needs to run a Python script for 3 seconds to generate a thumbnail. Uploads are unpredictable\u2014sometimes 2,000 photos arrive in an hour, and other times zero photos arrive for 8 hours. What is the most cost-effective compute solution?",
    "options": {
      "A": "Keep an EC2 virtual machine running 24/7 constantly polling the storage bucket",
      "B": "Use a Serverless Function (FaaS, e.g., AWS Lambda) triggered directly by the bucket upload event",
      "C": "Deploy a dedicated physical on-premises server with a GPU",
      "D": "Use a heavy Kubernetes cluster running 24/7 with 10 worker nodes"
    },
    "correctAnswer": "B",
    "explanation": "Function as a Service (FaaS) executes code only in response to events (such as an S3 PutObject event) and bills strictly for the execution duration in milliseconds. When no events occur, zero servers run and cost is $0.",
    "whyCorrect": "Serverless Functions eliminate idle costs completely. The function only spins up when a photo is uploaded, processes for 3 seconds, and immediately terminates. Zero cost during idle hours.",
    "whyOthersIncorrect": "A 24/7 virtual machine or Kubernetes cluster charges continuously even when no photos are uploaded; a dedicated physical server requires large upfront capital and ongoing maintenance.",
    "interviewTip": "Serverless = Pay-per-execution, event-driven, zero idle cost, automatic scaling without server management."
  },
  {
    "id": 17,
    "type": "scenario",
    "topic": "Disaster Recovery",
    "subtopic": "RPO and RTO Targets",
    "difficulty": "Hard",
    "targetCompanies": [
      "Capgemini",
      "TCS",
      "Cognizant"
    ],
    "question": "In a cloud disaster recovery contract, an e-commerce firm specifies: 'In the event of a catastrophic regional failure, our database cannot lose more than 5 minutes worth of transaction data, and our customer portal must be fully operational in a backup region within 30 minutes.' What are the industry terms for these two specific metrics?",
    "options": {
      "A": "RTO is 5 minutes; RPO is 30 minutes",
      "B": "RPO is 5 minutes; RTO is 30 minutes",
      "C": "SLA is 5 minutes; SLO is 30 minutes",
      "D": "MTBF is 5 minutes; MTTR is 30 minutes"
    },
    "correctAnswer": "B",
    "explanation": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time. Recovery Time Objective (RTO) defines the maximum acceptable duration of system downtime before service restoration.",
    "whyCorrect": "Tolerating at most 5 minutes of lost data = RPO (Recovery Point Objective). Restoring the system within 30 minutes = RTO (Recovery Time Objective).",
    "whyOthersIncorrect": "Option A reverses the definitions; SLA and SLO describe overall service availability commitments; MTBF is Mean Time Between Failures and MTTR is Mean Time to Repair.",
    "interviewTip": "Easy memory trick: RPO = Point in time (Data Loss). RTO = Time taken to restore (Downtime)."
  },
  {
    "id": 18,
    "type": "scenario",
    "topic": "Cloud Migration & Architecture",
    "subtopic": "Rehosting (Lift and Shift)",
    "difficulty": "Hard",
    "targetCompanies": [
      "Accenture",
      "Infosys",
      "Cognizant",
      "TCS"
    ],
    "question": "A manufacturing enterprise needs to urgently evacuate an on-premises data center whose lease expires in 60 days. They have 80 custom enterprise legacy applications with zero documentation. The management insists on moving all applications to the cloud immediately with exact binary compatibility and without changing a single line of application source code. Which migration strategy (from the 6 R's of cloud migration) should they execute?",
    "options": {
      "A": "Re-architecting / Refactoring",
      "B": "Rehosting (Lift and Shift)",
      "C": "Repurchasing (Drop and Shop)",
      "D": "Retiring"
    },
    "correctAnswer": "B",
    "explanation": "Rehosting (also known as Lift and Shift) involves copying existing servers, applications, and operating systems directly from on-premises virtual machines to cloud virtual machines (IaaS) without modifying application code.",
    "whyCorrect": "Lift and shift is the fastest migration strategy with the lowest immediate risk, making it ideal for tight deadlines (like lease expirations) where code changes are impossible.",
    "whyOthersIncorrect": "Refactoring requires redesigning code for cloud-native architectures which takes months; Repurchasing means switching to a commercial SaaS product; Retiring means decommissioning the software.",
    "interviewTip": "The 6 R's of Cloud Migration: Rehost (Lift & Shift), Replatform (Lift & Reshape), Repurchase (Drop & Shop), Refactor (Re-architect), Retain (Do nothing), Retire (Decommission)."
  },
  {
    "id": 19,
    "type": "regular",
    "topic": "Cloud Characteristics",
    "subtopic": "NIST Essential Characteristics",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Cognizant",
      "Infosys"
    ],
    "question": "According to the official NIST (National Institute of Standards and Technology) definition, which of the following is NOT one of the five essential characteristics of cloud computing?",
    "options": {
      "A": "On-demand self-service",
      "B": "Rapid elasticity",
      "C": "Manual physical hardware provisioning",
      "D": "Resource pooling"
    },
    "correctAnswer": "C",
    "explanation": "The five essential characteristics defined by NIST are: 1. On-demand self-service, 2. Broad network access, 3. Resource pooling, 4. Rapid elasticity, and 5. Measured service. Manual provisioning is the exact opposite of cloud computing.",
    "whyCorrect": "Manual hardware provisioning contradicts the automation and agility of cloud computing. Cloud computing enables automated self-service provisioning.",
    "whyOthersIncorrect": "On-demand self-service, Rapid elasticity, and Resource pooling are official core NIST characteristics.",
    "interviewTip": "Memorize the 5 NIST Cloud Characteristics: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service."
  },
  {
    "id": 20,
    "type": "regular",
    "topic": "Cloud Characteristics",
    "subtopic": "Measured Service",
    "difficulty": "Easy",
    "targetCompanies": [
      "Accenture",
      "Capgemini",
      "Wipro"
    ],
    "question": "Which essential cloud characteristic ensures that cloud systems automatically control and optimize resource use by leveraging a metering capability (e.g., storage, processing, bandwidth, and active user accounts), enabling a pay-as-you-go billing model?",
    "options": {
      "A": "Measured Service",
      "B": "Broad Network Access",
      "C": "High Availability",
      "D": "Fault Tolerance"
    },
    "correctAnswer": "A",
    "explanation": "Measured Service means resource usage is monitored, controlled, and reported, providing transparency for both the provider and consumer of the utilized service.",
    "whyCorrect": "Measured service is the foundation of utility computing and pay-as-you-go pricing, where consumers are billed strictly for the compute seconds, gigabytes, and bandwidth consumed.",
    "whyOthersIncorrect": "Broad network access means capabilities are accessible over the network via standard mechanisms; High Availability and Fault Tolerance are architectural qualities, not part of the 5 NIST characteristics.",
    "interviewTip": "Whenever you see 'pay-as-you-go', 'metering', or 'billing per minute/GB', NIST maps this to Measured Service."
  },
  {
    "id": 21,
    "type": "regular",
    "topic": "Cloud Characteristics",
    "subtopic": "Multi-Tenancy & Resource Pooling",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Cognizant",
      "Infosys"
    ],
    "question": "The concept where a cloud provider serves multiple customers from the same physical hardware resources while dynamically assigning and reassigning resources according to consumer demand without customers seeing each other's data is called:",
    "options": {
      "A": "Single-Tenancy",
      "B": "Multi-Tenancy and Resource Pooling",
      "C": "Edge Computing",
      "D": "Hardware Colocation"
    },
    "correctAnswer": "B",
    "explanation": "Resource Pooling allows providers to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to demand.",
    "whyCorrect": "Multi-tenancy enables economies of scale, allowing diverse customers to securely share physical CPU, memory, and networking isolated via hypervisors.",
    "whyOthersIncorrect": "Single-tenancy reserves physical servers for only one tenant (dedicated hosts); Edge computing processes data near the source; Colocation is renting rack space in a data center for your own hardware.",
    "interviewTip": "Multi-tenancy = Multiple customers sharing underlying physical hardware securely through virtualization boundaries."
  },
  {
    "id": 22,
    "type": "regular",
    "topic": "Cloud Service Models",
    "subtopic": "Shared Responsibility Model",
    "difficulty": "Easy",
    "targetCompanies": [
      "Capgemini",
      "Accenture",
      "TCS"
    ],
    "question": "In the Cloud Shared Responsibility Model for an Infrastructure as a Service (IaaS) deployment, who is responsible for applying operating system security patches to the virtual machine?",
    "options": {
      "A": "The Cloud Provider exclusively",
      "B": "The Customer exclusively",
      "C": "Neither, patches are unnecessary in the cloud",
      "D": "The hardware manufacturer"
    },
    "correctAnswer": "B",
    "explanation": "In IaaS, the cloud provider manages security 'OF' the cloud (physical data centers, physical servers, host virtualization). The customer is responsible for security 'IN' the cloud, which includes the guest operating system, updates, patches, and application software.",
    "whyCorrect": "Because the customer has root administrative control of the VM's OS in IaaS, patching and configuring that OS is strictly the customer's responsibility.",
    "whyOthersIncorrect": "The provider only manages OS patching in PaaS and SaaS models; unpatched systems are dangerous vulnerabilities; hardware manufacturers do not manage cloud virtual machines.",
    "interviewTip": "Rule of thumb: Security OF the cloud (Hardware, Facilities, Hypervisors) = Provider. Security IN the cloud (Data, OS, Firewalls, IAM) = Customer."
  },
  {
    "id": 23,
    "type": "regular",
    "topic": "Cloud Service Models",
    "subtopic": "SaaS Examples",
    "difficulty": "Easy",
    "targetCompanies": [
      "Infosys",
      "Wipro",
      "TCS"
    ],
    "question": "Which of the following is a classic example of Software as a Service (SaaS)?",
    "options": {
      "A": "Amazon EC2",
      "B": "Google Kubernetes Engine (GKE)",
      "C": "Google Workspace (Gmail / Google Docs)",
      "D": "Azure Virtual Machines"
    },
    "correctAnswer": "C",
    "explanation": "Software as a Service (SaaS) provides complete, end-user applications delivered over the internet via a web browser or thin client, requiring zero hardware or code management by the user.",
    "whyCorrect": "Google Workspace, Salesforce, Microsoft 365, and Dropbox are turnkey SaaS software products accessed directly by end-users.",
    "whyOthersIncorrect": "Amazon EC2 and Azure Virtual Machines are IaaS; Google Kubernetes Engine is PaaS / CaaS (Container as a Service).",
    "interviewTip": "If you don't write code and don't manage an OS\u2014you just log in and use it\u2014it is SaaS."
  },
  {
    "id": 24,
    "type": "regular",
    "topic": "Virtualization",
    "subtopic": "Hypervisor Types",
    "difficulty": "Easy",
    "targetCompanies": [
      "Cognizant",
      "Accenture",
      "TCS"
    ],
    "question": "What is the primary difference between a Type-1 (Bare-Metal) Hypervisor and a Type-2 (Hosted) Hypervisor?",
    "options": {
      "A": "Type-1 runs directly on the bare physical hardware without an underlying OS, while Type-2 runs on top of an existing host operating system.",
      "B": "Type-1 only supports Linux guests, while Type-2 only supports Windows guests.",
      "C": "Type-1 is used for containers, while Type-2 is used for virtual machines.",
      "D": "Type-1 is slower than Type-2 because of added software layers."
    },
    "correctAnswer": "A",
    "explanation": "Type-1 hypervisors (e.g., VMware ESXi, KVM, Xen, Hyper-V) run directly on the host's physical hardware to control hardware and manage guest operating systems. Type-2 hypervisors (e.g., VMware Workstation, Oracle VirtualBox) run as an application inside an existing host OS.",
    "whyCorrect": "Type-1 hypervisors offer superior performance, lower latency, and higher security because there is no intermediary host OS overhead.",
    "whyOthersIncorrect": "Both hypervisor types support diverse guest OS types; containers do not use hypervisors; Type-1 is faster, not slower, than Type-2.",
    "interviewTip": "Enterprise enterprise cloud data centers (AWS, Azure, GCP) rely strictly on Type-1 (Bare-Metal) hypervisors."
  },
  {
    "id": 25,
    "type": "regular",
    "topic": "Virtualization",
    "subtopic": "Virtual Machines vs Physical Servers",
    "difficulty": "Easy",
    "targetCompanies": [
      "Capgemini",
      "Wipro",
      "Infosys"
    ],
    "question": "What core benefit did server virtualization bring to enterprise data centers that led to the creation of cloud computing?",
    "options": {
      "A": "It allowed physical servers to be completely replaced by paper documentation",
      "B": "It consolidated workloads by allowing multiple isolated virtual operating systems to run concurrently on a single physical host, boosting hardware utilization from ~15% to over 80%",
      "C": "It eliminated the need for electrical power in data centers",
      "D": "It converted all network cables into wireless Bluetooth connections"
    },
    "correctAnswer": "B",
    "explanation": "Before virtualization, traditional servers dedicated an entire physical box to a single app, resulting in massive underutilization (typically 10-15%). Virtualization enables server consolidation, driving utilization to 70-80%+ and drastically cutting costs.",
    "whyCorrect": "High-density consolidation and rapid programmatic provisioning of virtual hardware made modern multi-tenant cloud computing commercially viable.",
    "whyOthersIncorrect": "Virtualization does not eliminate electricity or hardware; it virtualizes hardware execution.",
    "interviewTip": "Virtualization is the foundational technology that enables cloud computing."
  },
  {
    "id": 26,
    "type": "regular",
    "topic": "Cloud Storage",
    "subtopic": "Storage Tiers",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Cognizant"
    ],
    "question": "An enterprise needs to retain regulatory compliance data for 7 years. The data is rarely ever accessed (perhaps once a year), but storage costs must be kept at the absolute minimum possible. Which storage class should be selected?",
    "options": {
      "A": "Standard Object Storage",
      "B": "Low-Latency In-Memory Storage",
      "C": "Archive / Cold Storage (e.g., AWS S3 Glacier Deep Archive / Azure Archive)",
      "D": "Provisioned IOPS Block Storage"
    },
    "correctAnswer": "C",
    "explanation": "Archive storage tiers (like Glacier Deep Archive) offer the lowest storage cost per gigabyte (often fractions of a cent) in exchange for retrieval times that range from several minutes to hours.",
    "whyCorrect": "For compliance data that is accessed rarely or never, archive storage delivers up to 90%+ cost savings compared to Standard storage tiers.",
    "whyOthersIncorrect": "Standard storage is optimized for frequent access and is significantly more expensive; In-memory storage is the most expensive storage tier; Provisioned IOPS is designed for high-performance databases.",
    "interviewTip": "Hot Storage = Frequent access, high cost. Cool Storage = Infrequent access. Cold / Archive Storage = Rare access, lowest cost, hours retrieval delay."
  },
  {
    "id": 27,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "VPC Fundamentals",
    "difficulty": "Easy",
    "targetCompanies": [
      "Infosys",
      "TCS",
      "Capgemini"
    ],
    "question": "What is a Virtual Private Cloud (VPC)?",
    "options": {
      "A": "A dedicated physical fiber cable laid between a company office and the cloud provider",
      "B": "A logically isolated virtual network dedicated to your cloud account where you define IP address ranges, subnets, and route tables",
      "C": "A software program that replaces web browsers",
      "D": "A database that stores encryption passwords"
    },
    "correctAnswer": "B",
    "explanation": "A VPC is a private, isolated section of the cloud provider's network where customers can launch resources in a virtual network that they define, complete with custom IP address ranges (CIDR), subnets, and network gateways.",
    "whyCorrect": "VPCs provide network-level isolation, ensuring customer workloads do not interfere with or have visibility into other customers' traffic.",
    "whyOthersIncorrect": "Dedicated physical cables are called Direct Connect / ExpressRoute; VPC is a virtual network, not a browser or database.",
    "interviewTip": "Think of a VPC as your own isolated virtual data center in the cloud."
  },
  {
    "id": 28,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "Public vs Private Subnet",
    "difficulty": "Easy",
    "targetCompanies": [
      "Wipro",
      "Cognizant",
      "Accenture"
    ],
    "question": "What specifically differentiates a 'Public Subnet' from a 'Private Subnet' inside a cloud VPC?",
    "options": {
      "A": "A public subnet has a route to an Internet Gateway (IGW), allowing direct internet communication, whereas a private subnet does not.",
      "B": "Public subnets use IPv4, while private subnets only use IPv6.",
      "C": "Public subnets are free of charge, while private subnets charge hourly fees.",
      "D": "Public subnets can only contain Linux machines."
    },
    "correctAnswer": "A",
    "explanation": "A subnet is classified as public if its associated route table contains a route to an Internet Gateway (0.0.0.0/0 -> igw). A private subnet lacks a direct route to an Internet Gateway.",
    "whyCorrect": "The presence of an Internet Gateway route in the subnet route table is the technical definition that makes a subnet public in cloud networking.",
    "whyOthersIncorrect": "Both public and private subnets support both IPv4 and IPv6; subnets themselves do not have differing charges based on routing; OS type is completely independent of subnet type.",
    "interviewTip": "Golden rule of cloud networking: Route to Internet Gateway = Public Subnet. No direct route to Internet Gateway = Private Subnet."
  },
  {
    "id": 29,
    "type": "regular",
    "topic": "Cloud Economics",
    "subtopic": "CapEx vs OpEx",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Infosys"
    ],
    "question": "Migrating from a traditional on-premises data center to a public cloud typically shifts financial expenditure from which model to which model?",
    "options": {
      "A": "From OpEx (Operational Expenditure) to CapEx (Capital Expenditure)",
      "B": "From CapEx (Capital Expenditure) to OpEx (Operational Expenditure)",
      "C": "From Free Software to Paid Software",
      "D": "From Tax-deductible to Non-deductible"
    },
    "correctAnswer": "B",
    "explanation": "On-premises infrastructure requires heavy upfront Capital Expenditures (CapEx) for physical servers, real estate, cooling, and network gear. Cloud computing shifts this to Operational Expenditure (OpEx), paying monthly for only what is consumed.",
    "whyCorrect": "Cloud computing replaces large upfront capital investments with variable, ongoing pay-as-you-go operational expenses.",
    "whyOthersIncorrect": "Option A reverses the fundamental economic driver of cloud adoption.",
    "interviewTip": "CapEx = Buy upfront (servers, data centers). OpEx = Pay as you go (monthly utility billing). Cloud is OpEx-centric."
  },
  {
    "id": 30,
    "type": "regular",
    "topic": "High Availability & SLAs",
    "subtopic": "Four Nines Availability",
    "difficulty": "Easy",
    "targetCompanies": [
      "Capgemini",
      "Cognizant",
      "Wipro"
    ],
    "question": "A cloud service provider guarantees an SLA of '99.99% availability' (commonly called 'four nines') over the course of a full year. Approximately how much total downtime is permitted per year under this agreement?",
    "options": {
      "A": "Around 8.76 hours",
      "B": "Around 52.6 minutes",
      "C": "Around 3.65 days",
      "D": "Around 5.2 seconds"
    },
    "correctAnswer": "B",
    "explanation": "There are 8,760 hours in a standard year (365 days * 24 hours = 525,600 minutes). An SLA of 99.99% allows 0.01% downtime: 525,600 * 0.0001 = 52.56 minutes per year.",
    "whyCorrect": "99.9% (Three Nines) = ~8.76 hours/year. 99.99% (Four Nines) = ~52.6 minutes/year. 99.999% (Five Nines) = ~5.26 minutes/year.",
    "whyOthersIncorrect": "8.76 hours is 99.9%; 3.65 days is 99%; 5.2 seconds is ~99.9999% (six nines).",
    "interviewTip": "Frequently asked in technical rounds! Remember: 99.9% = ~8.7 hours/yr, 99.99% = ~52 minutes/yr, 99.999% = ~5 minutes/yr."
  },
  {
    "id": 31,
    "type": "regular",
    "topic": "Cloud Security & IAM",
    "subtopic": "MFA Security",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Cognizant"
    ],
    "question": "Why is enabling Multi-Factor Authentication (MFA) on cloud root and administrator accounts considered a mandatory baseline security practice?",
    "options": {
      "A": "It speeds up network data transfer rates by 50%",
      "B": "It prevents unauthorized access even if the administrator's password is leaked, stolen, or compromised",
      "C": "It automatically backs up the database every hour",
      "D": "It eliminates the need to pay for cloud computing resources"
    },
    "correctAnswer": "B",
    "explanation": "Multi-Factor Authentication (MFA) requires two or more verification factors (something you know: password; and something you have: authenticator app / hardware key) to gain access.",
    "whyCorrect": "Even if an attacker obtains the password via phishing or brute-force, they cannot access the account without the second temporary token from the physical MFA device.",
    "whyOthersIncorrect": "MFA is an authentication security control; it has no relationship to network speed, database backups, or billing waivers.",
    "interviewTip": "MFA combines something you know (password) + something you have (token/device) + something you are (biometrics)."
  },
  {
    "id": 32,
    "type": "regular",
    "topic": "Cloud Architecture",
    "subtopic": "Loose Coupling & Message Queues",
    "difficulty": "Easy",
    "targetCompanies": [
      "Infosys",
      "Capgemini",
      "Wipro"
    ],
    "question": "In cloud architecture, what is the primary purpose of introducing an asynchronous message queue (e.g., AWS SQS, RabbitMQ, Azure Service Bus) between a frontend web tier and a backend worker tier?",
    "options": {
      "A": "To tightly couple the services so that if the backend crashes, the frontend immediately crashes too",
      "B": "To decouple the tiers so that traffic spikes are buffered and the backend can process jobs at its own pace without dropping requests",
      "C": "To format images into PDF files",
      "D": "To replace the need for an operating system"
    },
    "correctAnswer": "B",
    "explanation": "Decoupling (loose coupling) via message queues isolates components. If incoming requests surge, messages accumulate safely in the queue instead of overwhelming or crashing backend workers.",
    "whyCorrect": "Message queues provide buffer capacity, fault tolerance, and independent scalability for both producer and consumer tiers.",
    "whyOthersIncorrect": "Tight coupling is an anti-pattern in cloud architecture; message queues transport messages, not format PDFs or replace OSs.",
    "interviewTip": "A core pillar of the Cloud Well-Architected Framework is 'Loose Coupling' using queues, pub/sub, and asynchronous messaging."
  },
  {
    "id": 33,
    "type": "regular",
    "topic": "Cloud Security",
    "subtopic": "Encryption at Rest vs in Transit",
    "difficulty": "Easy",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Cognizant"
    ],
    "question": "What is the difference between 'Encryption at Rest' and 'Encryption in Transit' in cloud data security?",
    "options": {
      "A": "Encryption at Rest protects data stored on physical disks/databases, while Encryption in Transit protects data moving across networks via protocols like TLS/HTTPS.",
      "B": "Encryption at Rest is done by the user, while Encryption in Transit is illegal.",
      "C": "Encryption at Rest is only for tape drives, while Encryption in Transit is only for satellite links.",
      "D": "There is no difference; they are identical concepts."
    },
    "correctAnswer": "A",
    "explanation": "Data at rest refers to static data housed in databases, block volumes, or object storage (protected with AES-256). Data in transit refers to packets moving across the wire or internet (protected with TLS/SSL).",
    "whyCorrect": "Comprehensive cloud security requires encrypting both stored data (at rest) and communicated packets (in transit).",
    "whyOthersIncorrect": "Both forms of encryption are legal, recommended standards across all modern cloud architectures.",
    "interviewTip": "At Rest = on disk/storage (AES-256). In Transit = across network/wire (SSL/TLS/HTTPS)."
  },
  {
    "id": 34,
    "type": "regular",
    "topic": "Cloud Management",
    "subtopic": "CloudWatch & Monitoring",
    "difficulty": "Easy",
    "targetCompanies": [
      "TCS",
      "Infosys",
      "Wipro"
    ],
    "question": "What role does a cloud monitoring service (such as Amazon CloudWatch, Azure Monitor, or Google Cloud Operations) serve in a production environment?",
    "options": {
      "A": "It automatically writes application code for software developers",
      "B": "It collects metrics, logs, and traces, generates alarms when thresholds are breached, and triggers automated auto-scaling actions",
      "C": "It physical cleans dust inside the cloud provider's data center fans",
      "D": "It mines cryptocurrency during idle server hours"
    },
    "correctAnswer": "B",
    "explanation": "Cloud monitoring tools gather telemetry (CPU usage, network I/O, error rates, application logs) and trigger alarms or auto-scaling policies when predefined performance thresholds are exceeded.",
    "whyCorrect": "Monitoring provides operational visibility and automated self-healing triggers (such as launching an extra instance when CPU exceeds 75%).",
    "whyOthersIncorrect": "Monitoring tools observe infrastructure health; they do not write software, clean fans, or mine crypto.",
    "interviewTip": "You can't manage what you don't measure. Metrics + Alarms + Actions = Cloud Monitoring."
  },
  {
    "id": 35,
    "type": "regular",
    "topic": "Cloud Service Models",
    "subtopic": "PaaS Characteristics",
    "difficulty": "Medium",
    "targetCompanies": [
      "Cognizant",
      "Capgemini",
      "Accenture"
    ],
    "question": "Which of the following layers of the technology stack is typically managed by the CUSTOMER in a Platform as a Service (PaaS) model?",
    "options": {
      "A": "Physical Servers and Storage Hardware",
      "B": "Virtualization and Hypervisor",
      "C": "Operating System and Runtime",
      "D": "Application Code and Data"
    },
    "correctAnswer": "D",
    "explanation": "In PaaS, the provider handles everything from physical facilities up through operating systems, runtime environments, and middleware. The customer is solely responsible for managing Application Code and Data.",
    "whyCorrect": "The hallmark of PaaS is that developers focus on business logic (code) and datasets, leaving OS patches, runtime versions, and hardware to the cloud platform.",
    "whyOthersIncorrect": "Physical servers, virtualization, OS, and runtimes are all abstracted and managed by the PaaS provider.",
    "interviewTip": "PaaS customer responsibility = Application & Data. Everything underneath is managed by the cloud vendor."
  },
  {
    "id": 36,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "Security Groups vs Network ACLs",
    "difficulty": "Medium",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Capgemini",
      "Infosys"
    ],
    "question": "In cloud networking security (such as AWS VPC), what is the key fundamental difference between a Security Group and a Network Access Control List (NACL)?",
    "options": {
      "A": "Security Groups are stateless and operate at the subnet level; NACLs are stateful and operate at the instance level.",
      "B": "Security Groups are stateful and operate at the virtual instance (ENI) level; NACLs are stateless and operate at the subnet boundary level.",
      "C": "Security Groups can only block IP addresses; NACLs can only allow IP addresses.",
      "D": "Security Groups are hardware firewalls; NACLs are software firewalls."
    },
    "correctAnswer": "B",
    "explanation": "Security Groups act as a stateful virtual firewall for instances (if outbound traffic is sent, the return traffic is automatically allowed regardless of inbound rules). NACLs are stateless firewalls at the subnet level (requiring explicit inbound AND outbound allow rules).",
    "whyCorrect": "Security Groups = Stateful + Instance level. NACLs = Stateless + Subnet level. Furthermore, Security Groups only support 'Allow' rules, whereas NACLs support both 'Allow' and 'Deny' rules.",
    "whyOthersIncorrect": "Option A inverts the definitions; Option C is incorrect as Security Groups evaluate allow rules while NACLs evaluate ordered allow/deny rules.",
    "interviewTip": "A top-tier placement question! SG = Stateful & Instance level. NACL = Stateless & Subnet level."
  },
  {
    "id": 37,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "CIDR Notation",
    "difficulty": "Medium",
    "targetCompanies": [
      "Cognizant",
      "Wipro",
      "Infosys"
    ],
    "question": "A cloud architect creates a VPC with the IPv4 CIDR block '10.0.0.0/16'. How many total IP addresses are theoretically available within this network range?",
    "options": {
      "A": "256",
      "B": "1,024",
      "C": "65,536",
      "D": "16,777,216"
    },
    "correctAnswer": "C",
    "explanation": "IPv4 addresses have 32 bits. A /16 network prefix leaves 32 - 16 = 16 bits for host addressing. 2^16 = 65,536 total IP addresses.",
    "whyCorrect": "Using the formula 2^(32 - prefix): 2^(32 - 16) = 2^16 = 65,536 IP addresses.",
    "whyOthersIncorrect": "256 addresses corresponds to a /24 subnet; 1,024 corresponds to a /22; 16.7 million corresponds to a /8 network.",
    "interviewTip": "Remember standard powers of 2: /24 = 256 IPs, /20 = 4,096 IPs, /16 = 65,536 IPs. (Note: Cloud providers like AWS reserve 5 IPs in each subnet)."
  },
  {
    "id": 38,
    "type": "regular",
    "topic": "Virtualization & Containers",
    "subtopic": "Container Architecture",
    "difficulty": "Medium",
    "targetCompanies": [
      "Capgemini",
      "Accenture",
      "TCS"
    ],
    "question": "Which Linux kernel features make container isolation possible without requiring a guest operating system?",
    "options": {
      "A": "BIOS and UEFI firmware",
      "B": "Namespaces (for process isolation) and Control Groups / cgroups (for resource limiting)",
      "C": "NTFS and FAT32 file systems",
      "D": "Hyper-V and Xen drivers"
    },
    "correctAnswer": "B",
    "explanation": "Containers are built upon two primary Linux kernel primitives: Namespaces (which isolate what a process can SEE, including PID, network, mounts, and IPC) and Cgroups (which limit what a process can USE, such as CPU, RAM, and I/O).",
    "whyCorrect": "Namespaces provide process and network isolation, while cgroups enforce resource quotas, giving container processes the illusion of running on a dedicated machine.",
    "whyOthersIncorrect": "BIOS/UEFI are hardware boot firmware; NTFS/FAT32 are disk formats; Hyper-V/Xen are hypervisors used for virtual machines.",
    "interviewTip": "Placement interviewers love asking: 'What are the two core Linux technologies underlying Docker?' Answer: Namespaces and Cgroups."
  },
  {
    "id": 39,
    "type": "regular",
    "topic": "Cloud Migration",
    "subtopic": "The 6 R's Strategy",
    "difficulty": "Medium",
    "targetCompanies": [
      "Infosys",
      "TCS",
      "Cognizant"
    ],
    "question": "In cloud migration terminology, what does the 'Refactoring' (or Re-architecting) strategy involve?",
    "options": {
      "A": "Moving the application to virtual machines without making any code changes",
      "B": "Completely redesigning and rewriting the application using cloud-native features (such as serverless, microservices, and managed DBs) to maximize scalability",
      "C": "Canceling the project and decommissioning the application",
      "D": "Purchasing an off-the-shelf SaaS alternative"
    },
    "correctAnswer": "B",
    "explanation": "Refactoring/Re-architecting involves fundamentally redesigning the application to exploit cloud-native features that are not available in a traditional on-premises environment.",
    "whyCorrect": "Refactoring transforms monolithic apps into decoupled microservices, containers, or serverless architectures to maximize cloud elasticity and resilience.",
    "whyOthersIncorrect": "Moving with zero code changes is Rehosting (Lift & Shift); Decommissioning is Retiring; Buying off-the-shelf software is Repurchasing.",
    "interviewTip": "Rehost = Fastest, least cloud benefits. Refactor = Slowest and most expensive, but yields maximum cloud-native benefits."
  },
  {
    "id": 40,
    "type": "regular",
    "topic": "Cloud Storage",
    "subtopic": "Storage Types Comparison",
    "difficulty": "Medium",
    "targetCompanies": [
      "Wipro",
      "Accenture",
      "Capgemini"
    ],
    "question": "Which cloud storage type allows multiple compute instances to mount and share the exact same storage volume simultaneously using standard network protocols like NFS (Network File System) or SMB?",
    "options": {
      "A": "Block Storage",
      "B": "File Storage (e.g., AWS EFS, Azure Files)",
      "C": "Ephemeral Instance Store",
      "D": "Tape Drive Archive"
    },
    "correctAnswer": "B",
    "explanation": "Cloud File Storage provides shared hierarchical file access over network protocols (NFS for Linux, SMB for Windows), allowing hundreds of VMs to read and write to the same shared directory concurrently.",
    "whyCorrect": "File storage systems are purpose-built for shared file systems, legacy enterprise apps, content management systems (WordPress), and big data analytics.",
    "whyOthersIncorrect": "Standard block storage can typically only be attached to a single VM at a time; Ephemeral store is temporary local disk; Tape archive is offline storage.",
    "interviewTip": "Need shared multi-instance read/write file access? Choose Cloud File Storage (NFS/SMB)."
  },
  {
    "id": 41,
    "type": "regular",
    "topic": "Serverless & Microservices",
    "subtopic": "Cold Starts",
    "difficulty": "Medium",
    "targetCompanies": [
      "TCS",
      "Cognizant",
      "Infosys"
    ],
    "question": "What is meant by the term 'Cold Start' in Serverless / Function as a Service (FaaS) computing?",
    "options": {
      "A": "The time it takes to cool down physical servers using refrigeration",
      "B": "The initial latency delay experienced when a serverless function is invoked after being idle, because the provider must provision a container and initialize runtime dependencies",
      "C": "Running cloud code during the winter season",
      "D": "A crash that occurs when serverless code reaches absolute zero temperature"
    },
    "correctAnswer": "B",
    "explanation": "When a serverless function is called for the first time or after a period of inactivity, the cloud platform must allocate an execution environment, download the code, and launch the runtime. This initialization overhead is called a Cold Start.",
    "whyCorrect": "Subsequent calls while the container is 'warm' execute immediately with sub-millisecond setup. Cold starts only occur on initial or scaled-out invocations.",
    "whyOthersIncorrect": "Cold start has nothing to do with weather, physical refrigeration, or temperature crashes.",
    "interviewTip": "Languages with heavy runtimes (like Java JVM or .NET) typically have longer cold start times than lightweight languages like Node.js or Python."
  },
  {
    "id": 42,
    "type": "regular",
    "topic": "Cloud Economics",
    "subtopic": "Pricing Models",
    "difficulty": "Medium",
    "targetCompanies": [
      "Accenture",
      "Capgemini",
      "Wipro"
    ],
    "question": "A company has steady-state database servers that must run 24/7/365 for the next three years without interruption. Which cloud purchasing option offers the highest discount (often up to 60-72% off standard on-demand pricing)?",
    "options": {
      "A": "On-Demand Instances",
      "B": "Spot / Preemptible Instances",
      "C": "Reserved Instances / Savings Plans (1 or 3 year commitment)",
      "D": "Pay-as-you-go per second billing"
    },
    "correctAnswer": "C",
    "explanation": "Reserved Instances (and Savings Plans) require committing to a consistent volume of compute usage for a 1-year or 3-year term in exchange for steep discounts over standard On-Demand pricing.",
    "whyCorrect": "Because the company knows the database will run non-stop for 3 years, committing via Reserved Instances locks in maximum cost savings without risking interruption.",
    "whyOthersIncorrect": "On-demand is flexible but most expensive; Spot instances offer high discounts but can be terminated by the provider at any moment with 2 minutes notice (unsuitable for production DBs).",
    "interviewTip": "Predictable steady workloads = Reserved Instances. Unpredictable or short workloads = On-Demand. Fault-tolerant batch processing = Spot Instances."
  },
  {
    "id": 43,
    "type": "regular",
    "topic": "Cloud Governance",
    "subtopic": "Audit Logging",
    "difficulty": "Medium",
    "targetCompanies": [
      "TCS",
      "Cognizant",
      "Infosys"
    ],
    "question": "A security auditor needs to investigate an incident where a production virtual machine was mysteriously terminated at 3:00 AM on Sunday. Which cloud service provides governance, compliance, and history of all API calls made within the cloud account?",
    "options": {
      "A": "AWS CloudTrail / Azure Activity Log / GCP Cloud Audit Logs",
      "B": "Amazon CloudFront",
      "C": "Elastic Load Balancing",
      "D": "AWS Simple Email Service (SES)"
    },
    "correctAnswer": "A",
    "explanation": "Cloud audit logging services (like CloudTrail or Azure Activity Log) record every API activity, capturing who made the API call, from what IP address, at what timestamp, and with what parameters.",
    "whyCorrect": "Audit logs record all management console logins and programmatic CLI/SDK commands, allowing auditors to identify exactly which IAM user or role issued the 'TerminateInstances' call.",
    "whyOthersIncorrect": "CloudFront is a CDN; ELB distributes traffic; SES sends emails.",
    "interviewTip": "Remember the distinction: CloudWatch = Performance Metrics & Alarms (What is the CPU?). CloudTrail = User & API Activity Auditing (Who did what?)."
  },
  {
    "id": 44,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "DNS & Anycast",
    "difficulty": "Medium",
    "targetCompanies": [
      "Capgemini",
      "Wipro",
      "Accenture"
    ],
    "question": "What role does a managed cloud DNS service (such as AWS Route 53 or Azure DNS) perform in routing traffic to web applications?",
    "options": {
      "A": "It converts human-friendly domain names (e.g., example.com) into machine-routable IP addresses and can route traffic based on latency, geolocation, or health checks.",
      "B": "It replaces the need for database storage.",
      "C": "It acts as a physical router inside the customer's home office.",
      "D": "It encrypts hard drives automatically."
    },
    "correctAnswer": "A",
    "explanation": "Domain Name System (DNS) translates human names to IP addresses. Cloud-managed DNS also provides advanced routing policies such as Geolocation routing, Latency-based routing, and Weighted failover.",
    "whyCorrect": "Cloud DNS services route global users to the nearest healthy application endpoint based on latency and real-time health checks.",
    "whyOthersIncorrect": "DNS does not manage database storage, physical home hardware, or disk encryption.",
    "interviewTip": "Cloud DNS routing policies: Simple, Weighted, Latency-based, Failover (Active-Passive), Geolocation, and Multi-value."
  },
  {
    "id": 45,
    "type": "regular",
    "topic": "Disaster Recovery",
    "subtopic": "DR Strategies",
    "difficulty": "Medium",
    "targetCompanies": [
      "Infosys",
      "TCS",
      "Cognizant"
    ],
    "question": "Which of the following disaster recovery strategies represents the lowest recovery time (lowest RTO) and lowest data loss (lowest RPO), but carries the highest operational cost?",
    "options": {
      "A": "Backup and Restore",
      "B": "Pilot Light",
      "C": "Warm Standby",
      "D": "Multi-Site Active-Active"
    },
    "correctAnswer": "D",
    "explanation": "Multi-Site Active-Active runs fully provisioned and synchronized production stacks in two or more geographic regions simultaneously, serving traffic from both at all times.",
    "whyCorrect": "If one region fails completely, all traffic is instantly absorbed by the other region with zero downtime and near-zero data loss.",
    "whyOthersIncorrect": "Backup and Restore has the highest RTO/RPO but is cheapest; Pilot Light keeps only core data replicated and provisions compute after disaster; Warm Standby is scaled-down.",
    "interviewTip": "DR Spectrum from cheapest/slowest to costliest/fastest: Backup & Restore -> Pilot Light -> Warm Standby -> Multi-Site Active-Active."
  },
  {
    "id": 46,
    "type": "regular",
    "topic": "Cloud Security",
    "subtopic": "DDoS Protection",
    "difficulty": "Medium",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Capgemini"
    ],
    "question": "A web application is hit by a massive Distributed Denial of Service (DDoS) SYN flood attack attempting to consume all network bandwidth. Which cloud services are designed to absorb and mitigate such large-scale Layer 3/4 and Layer 7 attacks?",
    "options": {
      "A": "Cloud WAF (Web Application Firewall) & DDoS Shielding Services (e.g., AWS Shield, Cloudflare)",
      "B": "Relational Database Service (RDS)",
      "C": "Simple Queue Service (SQS)",
      "D": "CodeCommit Repository"
    },
    "correctAnswer": "A",
    "explanation": "DDoS protection services (like AWS Shield, Azure DDoS Protection, and Cloudflare) leverage massive global edge networks to scrub malicious traffic, while WAFs inspect Layer 7 HTTP requests for SQLi, XSS, and bot flood patterns.",
    "whyCorrect": "DDoS scrubbing centers and WAF rules filter out malicious volumetric and application-layer attacks before traffic ever hits origin web servers.",
    "whyOthersIncorrect": "Databases, queues, and code repositories are internal resources that would be overwhelmed if exposed to unmitigated DDoS attacks.",
    "interviewTip": "Layer 3/4 DDoS = SYN floods, UDP amplification (mitigated by Shield/CDN). Layer 7 DDoS = HTTP flood, SQL Injection (mitigated by WAF)."
  },
  {
    "id": 47,
    "type": "regular",
    "topic": "Cloud Economics",
    "subtopic": "Total Cost of Ownership (TCO)",
    "difficulty": "Medium",
    "targetCompanies": [
      "Cognizant",
      "Wipro",
      "Infosys"
    ],
    "question": "When calculating the Total Cost of Ownership (TCO) of an on-premises data center compared to public cloud, which often-overlooked 'indirect/hidden costs' must be factored in?",
    "options": {
      "A": "Only the purchase cost of the Dell or HP server boxes",
      "B": "Facility real estate, electricity, HVAC cooling systems, physical security guards, hardware depreciation, and IT administration staff salaries",
      "C": "The cost of mouse pads and keyboards only",
      "D": "The cloud provider's stock market value"
    },
    "correctAnswer": "B",
    "explanation": "TCO includes direct costs (hardware, licenses) and substantial indirect operational costs: power, cooling (HVAC), floor space, rack infrastructure, network connectivity, backup power generators, and systems engineering headcount.",
    "whyCorrect": "Comparing cloud purely to server purchase invoices is flawed; on-premises data centers incur massive facilities, cooling, power, and operational overhead.",
    "whyOthersIncorrect": "Focusing only on box purchase prices misses the majority of operational expense; mouse pads and stock values are irrelevant.",
    "interviewTip": "TCO = Direct costs (servers, network gear) + Indirect costs (power, cooling, real estate, physical security, staff administration)."
  },
  {
    "id": 48,
    "type": "regular",
    "topic": "Cloud Architecture",
    "subtopic": "Statelessness",
    "difficulty": "Medium",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Infosys"
    ],
    "question": "Why is 'Stateless Architecture' strongly recommended for web tier servers in cloud applications?",
    "options": {
      "A": "Because stateless servers do not store user session data locally on their own disks or memory, allowing any server to handle any request and enabling seamless auto-scaling and replacement",
      "B": "Because stateful applications are illegal under cloud regulations",
      "C": "Because stateless servers do not require an IP address",
      "D": "Because stateless servers never consume CPU power"
    },
    "correctAnswer": "A",
    "explanation": "In a stateless architecture, session state is offloaded to a shared external store (like Redis or DynamoDB). Any instance can handle any incoming request, allowing instances to be created or terminated dynamically without breaking user sessions.",
    "whyCorrect": "Statelessness is the cornerstone of horizontal elasticity. If instance #3 crashes or scales in, no user's shopping cart or login session is lost.",
    "whyOthersIncorrect": "Stateful apps are common but harder to scale; stateless servers still need IP addresses and consume CPU power.",
    "interviewTip": "To make web applications truly elastic: make the compute layer stateless and externalize state to caching (Redis) or distributed databases."
  },
  {
    "id": 49,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "VPC Peering vs Transit Gateway",
    "difficulty": "Hard",
    "targetCompanies": [
      "Capgemini",
      "Cognizant",
      "TCS"
    ],
    "question": "An enterprise has grown to 50 distinct VPCs across different departments and needs all VPCs to communicate with one another. Why does direct point-to-point VPC Peering become impractical at this scale, and what cloud networking component should be deployed instead?",
    "options": {
      "A": "VPC Peering requires a mesh of N*(N-1)/2 connections (1,225 peering connections for 50 VPCs) and lacks transitive routing; a Cloud Transit Gateway acts as a central hub-and-spoke router.",
      "B": "VPC Peering is limited to only 2 VPCs maximum across an entire company.",
      "C": "VPC Peering can only be configured between different cloud providers like AWS and Google Cloud.",
      "D": "VPC Peering slows data transmission to dial-up speeds."
    },
    "correctAnswer": "A",
    "explanation": "VPC Peering is non-transitive (if A peers with B, and B peers with C, A cannot talk to C through B). Fully interconnecting 50 VPCs requires 1,225 separate peering connections. A Transit Gateway acts as a centralized cloud router connecting thousands of VPCs in a clean hub-and-spoke topology.",
    "whyCorrect": "Transit Gateway simplifies complex multi-VPC routing by providing transitive routing through a centralized regional gateway hub.",
    "whyOthersIncorrect": "VPC peering does not slow traffic to dial-up, can support dozens of connections, and is designed for intra-provider VPCs.",
    "interviewTip": "Key concept: 'VPC Peering is NOT transitive'. For complex multi-VPC networks, the answer is Transit Gateway."
  },
  {
    "id": 50,
    "type": "regular",
    "topic": "Cloud Storage",
    "subtopic": "Consistency Models",
    "difficulty": "Hard",
    "targetCompanies": [
      "Accenture",
      "Infosys",
      "Wipro"
    ],
    "question": "What does the CAP Theorem state regarding distributed cloud data stores?",
    "options": {
      "A": "A distributed system can guarantee at most two of the following three properties simultaneously: Consistency, Availability, and Partition Tolerance.",
      "B": "Cloud Applications must always prioritize Cost, Agility, and Performance.",
      "C": "Any cloud storage can deliver 100% Consistency, 100% Availability, and 100% Partition Tolerance at all times.",
      "D": "CPU, Architecture, and Power are equally distributed across all servers."
    },
    "correctAnswer": "A",
    "explanation": "Formulated by Eric Brewer, the CAP Theorem proves that in an asynchronous network subject to network partitions (P), a distributed data store can achieve either Consistency (C) or Availability (A), but cannot achieve both simultaneously.",
    "whyCorrect": "Because network cuts (partitions) are inevitable in large-scale distributed systems, architects must choose between CP (Consistency over Availability) or AP (Availability over Consistency / Eventual Consistency).",
    "whyOthersIncorrect": "Option C is scientifically impossible according to Brewer's proof; Options B and D confuse CAP acronyms.",
    "interviewTip": "Relational DBs typically choose Consistency (CP), while distributed NoSQL DBs (like Cassandra, DynamoDB) often choose Availability and Eventual Consistency (AP)."
  },
  {
    "id": 51,
    "type": "regular",
    "topic": "Virtualization",
    "subtopic": "Hypervisor Architecture & Overcommit",
    "difficulty": "Medium",
    "targetCompanies": [
      "TCS",
      "Cognizant",
      "Capgemini"
    ],
    "question": "In cloud virtualization infrastructure, what is 'CPU and Memory Overcommitment' (or oversubscription)?",
    "options": {
      "A": "A software bug where the CPU overheats beyond safe limits",
      "B": "Allocating more virtual compute resources (vCPUs/vRAM) to guest virtual machines than the physical host actually possesses, relying on the fact that not all VMs peak simultaneously",
      "C": "Signing an illegal multi-year cloud contract with two different vendors",
      "D": "Encrypting RAM memory twice with two different keys"
    },
    "correctAnswer": "B",
    "explanation": "Overcommitment leverages statistical multiplexing: because VMs rarely consume 100% of their allocated CPU or memory concurrently, the hypervisor allocates more virtual capacity than physical capacity, dramatically improving host utilization.",
    "whyCorrect": "Hypervisors manage memory ballooning and CPU scheduling so that multiple VMs share physical cores efficiently without physical resource waste.",
    "whyOthersIncorrect": "It is not a bug or contractual violation; it is a standard virtualization technique.",
    "interviewTip": "Overcommitment is why dedicated host instances exist for workloads requiring guaranteed, non-shared physical execution."
  },
  {
    "id": 52,
    "type": "regular",
    "topic": "Cloud Security",
    "subtopic": "IAM Policy Evaluation Logic",
    "difficulty": "Hard",
    "targetCompanies": [
      "Infosys",
      "Accenture",
      "TCS"
    ],
    "question": "When an IAM service evaluates access permissions for an incoming API request that matches multiple policies, what is the default decision logic?",
    "options": {
      "A": "Default Allow, unless an Explicit Deny exists",
      "B": "Default Deny; an Explicit Deny always overrides any Explicit Allow; and an action is permitted only if an Explicit Allow exists with no Explicit Deny",
      "C": "The oldest policy created in the account always takes precedence",
      "D": "Whichever policy has the most characters in its JSON definition wins"
    },
    "correctAnswer": "B",
    "explanation": "IAM follows a strict evaluation algorithm: 1. By default, all requests are denied (implicit deny). 2. An explicit allow in any policy overrides the default deny. 3. An explicit deny in ANY applicable policy always overrides all allows.",
    "whyCorrect": "The golden rule of cloud IAM policy evaluation is: 'Explicit Deny always wins, otherwise you need an Explicit Allow, else it defaults to Deny.'",
    "whyOthersIncorrect": "Cloud IAM never defaults to allow; timestamp or JSON character length has no influence on security evaluation.",
    "interviewTip": "Crucial IAM exam rule: Explicit Deny > Explicit Allow > Default (Implicit) Deny."
  },
  {
    "id": 53,
    "type": "regular",
    "topic": "Serverless & Microservices",
    "subtopic": "Event-Driven Microservices",
    "difficulty": "Hard",
    "targetCompanies": [
      "Capgemini",
      "Wipro",
      "Cognizant"
    ],
    "question": "What is the primary advantage of adopting an Event-Driven Architecture (EDA) using an Event Bus (like AWS EventBridge or Azure Event Grid) in enterprise cloud systems?",
    "options": {
      "A": "It forces all microservices to use the same database table",
      "B": "Publishers emit events without knowing who is listening, allowing services to remain decoupled, independently deployable, and easily extendable with new subscribers without code modification",
      "C": "It removes the need for JSON or XML data serialization",
      "D": "It guarantees that all network packets travel at the speed of light in vacuum"
    },
    "correctAnswer": "B",
    "explanation": "In an Event-Driven Architecture, producers publish events to an event router without awareness of consumers. New microservices can subscribe to events at any time without altering the producer's implementation.",
    "whyCorrect": "Decoupled publisher/subscriber relationships eliminate point-to-point synchronous API dependencies, preventing cascading failures across microservices.",
    "whyOthersIncorrect": "Microservices should have independent databases; event architectures still use JSON schemas; physics laws cannot be changed by software.",
    "interviewTip": "Event-driven systems replace rigid point-to-point HTTP calls with asynchronous pub/sub messaging."
  },
  {
    "id": 54,
    "type": "regular",
    "topic": "Cloud Infrastructure",
    "subtopic": "Infrastructure as Code (IaC)",
    "difficulty": "Hard",
    "targetCompanies": [
      "Accenture",
      "TCS",
      "Infosys"
    ],
    "question": "What is the principle of 'Idempotency' in Infrastructure as Code (IaC) tools like Terraform or AWS CloudFormation?",
    "options": {
      "A": "Executing the exact same configuration script multiple times produces the exact same infrastructure state without creating unintended duplicate resources or unexpected side effects",
      "B": "The code can only be executed by a user with administrative root privileges",
      "C": "The configuration code automatically deletes all cloud resources after 24 hours",
      "D": "The IaC files can only be written in Python"
    },
    "correctAnswer": "A",
    "explanation": "Idempotency means that no matter how many times you apply the declarative configuration, the end result is identical. If a resource already exists in the desired state, the IaC tool makes no changes.",
    "whyCorrect": "Idempotence guarantees safe, repeatable, and automated CI/CD deployments without accidentally provisioning duplicate VMs or databases.",
    "whyOthersIncorrect": "Idempotency is a mathematical and computer science property of operations, unrelated to root privilege, auto-deletion, or specific languages.",
    "interviewTip": "IaC relies on declarative configuration and idempotency to ensure reliable and repeatable deployments."
  },
  {
    "id": 55,
    "type": "regular",
    "topic": "Cloud Networking",
    "subtopic": "BGP & Direct Connect",
    "difficulty": "Hard",
    "targetCompanies": [
      "Capgemini",
      "Cognizant",
      "Wipro"
    ],
    "question": "A multinational corporation sets up a dedicated physical private network connection from its corporate headquarters directly to a cloud provider's data center (e.g., AWS Direct Connect or Azure ExpressRoute). Which routing protocol is universally used over this connection to dynamically exchange network routes?",
    "options": {
      "A": "Border Gateway Protocol (BGP)",
      "B": "Routing Information Protocol version 1 (RIPv1)",
      "C": "Address Resolution Protocol (ARP)",
      "D": "Simple Mail Transfer Protocol (SMTP)"
    },
    "correctAnswer": "A",
    "explanation": "Border Gateway Protocol (BGP) with Autonomous System Numbers (ASNs) is the industry standard dynamic routing protocol used to advertise IP prefixes between the enterprise router and the cloud provider router across dedicated links.",
    "whyCorrect": "BGP provides dynamic path selection, automated route failover, and support for redundant physical interconnects.",
    "whyOthersIncorrect": "RIP is an obsolete distance-vector protocol unsuitable for enterprise cloud links; ARP resolves MAC addresses on local LANs; SMTP sends emails.",
    "interviewTip": "Whenever cloud networking asks what routing protocol handles hybrid enterprise interconnects: the answer is always BGP."
  },
  {
    "id": 56,
    "type": "regular",
    "topic": "Cloud Security",
    "subtopic": "Zero Trust Architecture",
    "difficulty": "Hard",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Infosys"
    ],
    "question": "What is the core premise of the 'Zero Trust' security model in modern cloud computing?",
    "options": {
      "A": "Trust everything inside the corporate internal network perimeter, and only inspect external internet traffic",
      "B": "'Never Trust, Always Verify'\u2014treat every request, user, and device as potentially hostile, regardless of whether it originates from inside or outside the network perimeter",
      "C": "Do not trust cloud providers; never store any data in the cloud",
      "D": "Fire all security engineers and rely exclusively on AI"
    },
    "correctAnswer": "B",
    "explanation": "Zero Trust discards the outdated 'castle-and-moat' perimeter model. It assumes breach and requires strict identity verification, mutual TLS (mTLS), least-privilege access, and continuous posture assessment for every single transaction.",
    "whyCorrect": "Zero Trust mandates explicit verification of identity, device health, and context before granting access to any microservice or data store.",
    "whyOthersIncorrect": "Option A describes the obsolete perimeter model that failed against lateral movement; Option C contradicts cloud adoption; Option D is absurd.",
    "interviewTip": "Three pillars of Zero Trust: Verify explicitly, Use least privilege access, and Assume breach."
  },
  {
    "id": 57,
    "type": "regular",
    "topic": "High Availability",
    "subtopic": "Fault Tolerance vs High Availability",
    "difficulty": "Hard",
    "targetCompanies": [
      "Capgemini",
      "Cognizant",
      "Infosys"
    ],
    "question": "What is the subtle technical distinction between 'Fault Tolerance' and 'High Availability' in cloud systems?",
    "options": {
      "A": "Fault tolerance guarantees zero downtime and zero service degradation through fully redundant active duplicate components; High availability minimizes downtime (e.g., brief failover seconds) using automated recovery mechanisms.",
      "B": "Fault tolerance is for software; high availability is for hardware.",
      "C": "High availability is 100% free; fault tolerance is paid.",
      "D": "There is no difference; they are exact synonyms."
    },
    "correctAnswer": "A",
    "explanation": "Fault tolerance ensures seamless continuity with zero degradation (e.g., synchronous mirrored hardware execution). High availability ensures the system remains operational for a high percentage of time, though a brief failover window or momentary degradation may occur.",
    "whyCorrect": "Fault tolerance has 0 downtime and 0 performance loss during failure, making it significantly more complex and expensive than High Availability.",
    "whyOthersIncorrect": "Both concepts apply to both hardware and software; neither is free; they are distinct operational levels.",
    "interviewTip": "Fault Tolerance = 0 downtime, seamless (costly). High Availability = 99.99% uptime with swift automated failover (cost-effective)."
  },
  {
    "id": 58,
    "type": "regular",
    "topic": "Cloud Storage",
    "subtopic": "RAID and Cloud Durability",
    "difficulty": "Hard",
    "targetCompanies": [
      "Wipro",
      "TCS",
      "Accenture"
    ],
    "question": "Why do cloud object storage services (such as AWS S3 or Azure Blob) utilize Erasure Coding across multiple facilities rather than simple local RAID arrays?",
    "options": {
      "A": "Because RAID arrays cannot survive the physical loss of an entire data center facility, whereas Erasure Coding reconstructs objects even if multiple physical drives or entire data centers fail",
      "B": "Because Erasure Coding compresses files into ZIP archives automatically",
      "C": "Because RAID is only compatible with Apple Mac computers",
      "D": "Because Erasure Coding deletes files after 30 days to save space"
    },
    "correctAnswer": "A",
    "explanation": "Erasure coding breaks data into fragments, expands and encodes with redundant data pieces, and stores them across different physical locations. This enables 11 9's (99.999999999%) durability and survival against concurrent facility failures.",
    "whyCorrect": "Local RAID only protects against single disk failures inside a single server enclosure, not against facility-wide floods, fires, or multi-site network outages.",
    "whyOthersIncorrect": "Erasure coding is a data protection mathematical algorithm, not a ZIP compressor or deletion policy; RAID is universal across all hardware platforms.",
    "interviewTip": "Object storage achieves extreme durability (11 9's) through multi-datacenter erasure coding."
  },
  {
    "id": 59,
    "type": "regular",
    "topic": "Cloud Architecture",
    "subtopic": "Circuit Breaker Pattern",
    "difficulty": "Hard",
    "targetCompanies": [
      "Cognizant",
      "Capgemini",
      "Infosys"
    ],
    "question": "In a distributed microservices cloud environment, what problem does the 'Circuit Breaker Pattern' solve?",
    "options": {
      "A": "It physically cuts off the power cable when an electrical surge occurs",
      "B": "It prevents a failing downstream service from causing cascading failures throughout the entire system by immediately failing fast or returning fallback data instead of hanging requests",
      "C": "It decrypts SSL certificates at the load balancer",
      "D": "It switches between IPv4 and IPv6 protocols"
    },
    "correctAnswer": "B",
    "explanation": "If a downstream microservice is timing out or failing, the Circuit Breaker trips to 'Open' state, instantly failing fast or returning cached fallback responses rather than tying up threads and exhausting resources on caller services.",
    "whyCorrect": "The Circuit Breaker pattern isolates failure, protects upstream callers from thread starvation, and gives the struggling downstream service time to recover.",
    "whyOthersIncorrect": "The software Circuit Breaker is an architectural resilience pattern, not a physical electrical switch, SSL decryptor, or IP converter.",
    "interviewTip": "States of a Circuit Breaker: Closed (Normal operation), Open (Failing fast, calls blocked), Half-Open (Testing if downstream has recovered)."
  },
  {
    "id": 60,
    "type": "regular",
    "topic": "Cloud Migration",
    "subtopic": "Application Assessment",
    "difficulty": "Hard",
    "targetCompanies": [
      "TCS",
      "Accenture",
      "Wipro"
    ],
    "question": "During the discovery and assessment phase of enterprise cloud migration, which metric determines how closely coupled an on-premises application is to its underlying hardware and operating system?",
    "options": {
      "A": "Cloud Readiness and Technical Debt Assessment (evaluating hardcoded IPs, legacy OS dependencies, and specialized hardware dongles)",
      "B": "The color of the server rack chassis",
      "C": "The font style used in the developer's IDE",
      "D": "The number of comments in the code"
    },
    "correctAnswer": "A",
    "explanation": "Cloud readiness assessments evaluate technical debt, hardcoded network addresses, dependency on obsolete operating systems, proprietary hardware attachments, and stateful filesystem locks to determine the optimal migration path.",
    "whyCorrect": "Identifying deep hardware and OS dependencies is essential to deciding whether an application can be Rehosted, Replatformed, or must be completely Refactored.",
    "whyOthersIncorrect": "Chassis color, font choices, and comment counts have zero technical relevance to cloud compatibility.",
    "interviewTip": "Migration always starts with Discovery & Assessment: Mapping dependencies, network flows, and technical debt."
  }
];
