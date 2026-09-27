/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: CLOUD COMPUTING
   Cloud architecture, service models, resilience, serverless & scenarios
   ========================================================================== */

(function () {
  window.CLOUD_QUESTIONS = [
    {
      id: 'cloud-001',
      question: 'An e-commerce company experiences a 500% surge in user traffic during a Black Friday midnight flash sale. Cloud infrastructure automatically provisions additional virtual machine instances to absorb the spike, and automatically de-provisions them when traffic normalizes the next morning. Which core cloud attribute is demonstrated?',
      codeSnippet: '',
      options: [
        'High Availability',
        'Elasticity',
        'Fault Tolerance',
        'Multi-Tenancy'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'scenario',
      topic: 'Scalability vs Elasticity',
      explanation: 'Elasticity is the ability to dynamically scale computing resources up and down in direct automated response to fluctuating real-time demand, ensuring cost efficiency by paying only for active capacity. Scalability is the broader architectural capacity to handle growth, while elasticity is the dynamic automated adaptation.',
      wrongOptionExplanations: {
        '0': 'High Availability ensures the application remains accessible with minimal downtime, but does not describe the automated scaling up/down.',
        '2': 'Fault Tolerance describes continuing operation without interruption when a hardware component fails completely.',
        '3': 'Multi-tenancy means multiple customers share the same physical hardware resources.'
      },
      realWorldApplication: 'AWS Auto Scaling groups and Kubernetes Horizontal Pod Autoscalers (HPA) implement cloud elasticity to minimize cloud bill expenditures while preserving SLA response times.',
      placementTip: 'MNC distinction: Scalability = ability to grow. Elasticity = ability to grow AND shrink dynamically on demand.'
    },
    {
      id: 'cloud-002',
      question: 'A startup development team wants to deploy a Node.js web application. They want the cloud vendor to completely manage the operating system, runtime patches, hardware virtualization, and web server software, while the team only manages application source code and database configurations. Which cloud service model should they adopt?',
      codeSnippet: '',
      options: [
        'IaaS (Infrastructure as a Service)',
        'PaaS (Platform as a Service)',
        'SaaS (Software as a Service)',
        'BaaS (Backend as a Service)'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Cloud Service Models',
      explanation: 'Platform as a Service (PaaS) (e.g. AWS Elastic Beanstalk, Heroku, Azure App Service) delivers a pre-configured hardware and software runtime environment. Developers upload their application code without having to install, patch, or maintain the underlying operating system or web servers.',
      wrongOptionExplanations: {
        '0': 'IaaS (e.g. AWS EC2) gives raw virtual machines; the customer is responsible for installing OS updates, web servers, and runtime binaries.',
        '2': 'SaaS (e.g. Google Workspace, Salesforce) provides a finished software product directly to end-users without access to code deployment.',
        '3': 'BaaS focuses strictly on API backends like authentication and push notifications.'
      },
      realWorldApplication: 'PaaS enables rapid prototyping and agile release cycles for development teams without needing dedicated systems administration or DevOps operations staff.',
      placementTip: 'Hierarchy to memorize: IaaS = Rent hardware & OS. PaaS = Rent runtime & deploy code. SaaS = Rent completed software.'
    },
    {
      id: 'cloud-003',
      question: 'Under the Cloud Shared Responsibility Model for an Infrastructure as a Service (IaaS) deployment (such as AWS EC2 or Azure VMs), which security task remains the sole responsibility of the customer?',
      codeSnippet: '',
      options: [
        'Decommissioning and physically destroying failed hard drives in data centers',
        'Patching and updating the Guest Operating System and application software',
        'Securing the hypervisor virtualization software',
        'Physical perimeter security and biometric locks at data center facilities'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Cloud Security & IAM',
      explanation: 'Under IaaS, the cloud provider secures the cloud infrastructure (physical facilities, hardware, and hypervisor). The customer is responsible for security "in" the cloud: guest OS installation/patching, firewall rules (security groups), network configuration, user access management (IAM), and application code.',
      wrongOptionExplanations: {
        '0': 'Physical media destruction is strictly the cloud provider\'s responsibility.',
        '2': 'Hypervisor security and virtualization kernel patching are maintained by the cloud provider.',
        '3': 'Data center facilities and physical guards are handled exclusively by the cloud provider.'
      },
      realWorldApplication: 'Unpatched guest operating systems on cloud VMs are a leading cause of ransomware breaches in enterprise cloud infrastructure.',
      placementTip: 'Provider is responsible for Security OF the cloud (hardware, cables, facilities). Customer is responsible for Security IN the cloud (OS, data, apps).'
    },
    {
      id: 'cloud-004',
      question: 'A financial institution requires an RTO (Recovery Time Objective) and RPO (Recovery Point Objective) of near zero for its mission-critical ledger. In the event of an entire geographical datacenter failure, transactions must immediately continue without manual failover. Which architectural deployment fulfills this requirement?',
      codeSnippet: '',
      options: [
        'Single Availability Zone with nightly tape backups',
        'Multi-Region Active-Active deployment with real-time continuous replication',
        'Multi-AZ deployment with cold standby disaster recovery',
        'Pilot light deployment in a single secondary zone'
      ],
      correctAnswer: 1,
      difficulty: 'Hard',
      type: 'scenario',
      topic: 'Disaster Recovery',
      explanation: 'Active-Active Multi-Region deployment serves live traffic simultaneously across two or more geographically separated regions. With continuous synchronous or low-latency asynchronous data replication, if an entire region suffers a catastrophic power grid or natural disaster failure, global DNS (or Anycast routing) routes all requests instantly to the surviving region with near zero downtime (RTO) and near zero data loss (RPO).',
      wrongOptionExplanations: {
        '0': 'Nightly backups have an RPO of up to 24 hours of lost transactions and hours/days of downtime (RTO).',
        '2': 'Cold standby takes minutes or hours to boot up instances and restore states.',
        '3': 'Pilot light requires provisioning core compute before handling full production load.'
      },
      realWorldApplication: 'Global payment networks (Visa, Mastercard, Stripe) rely on multi-region active-active architectures across diverse cloud regions to ensure uninterrupted payment processing.',
      placementTip: 'RTO = Maximum acceptable downtime before service restoration. RPO = Maximum acceptable data loss duration. Near zero RTO/RPO = Active-Active Multi-Region.'
    },
    {
      id: 'cloud-005',
      question: 'Which of the following best characterizes "Serverless" computing (such as AWS Lambda or Azure Functions)?',
      codeSnippet: '',
      options: [
        'Applications run completely without physical server hardware anywhere in the world',
        'Event-driven execution where servers are abstracted away and customers pay only for exact execution time down to milliseconds',
        'Virtual machines that remain permanently powered on and billed on a flat monthly rate',
        'Dedicated bare-metal servers assigned exclusively to a single customer'
      ],
      correctAnswer: 1,
      difficulty: 'Easy',
      type: 'conceptual',
      topic: 'Containers & Serverless',
      explanation: 'Serverless does not mean there are no servers; it means the developer does not manage, configure, or scale servers. Code executes in response to events (HTTP requests, file uploads, database triggers), scales automatically from 0 to thousands of instances, and is billed strictly for the execution duration in milliseconds without paying for idle time.',
      wrongOptionExplanations: {
        '0': 'All software executes on physical computers; "serverless" refers to the abstraction of management from the developer.',
        '2': 'Permanently powered-on virtual machines billed flat are standard IaaS VMs (like EC2 instances).',
        '3': 'Bare metal servers are non-virtualized dedicated hardware, the opposite of serverless.'
      },
      realWorldApplication: 'Serverless architectures power event-driven microservices, thumbnail generation pipelines, asynchronous webhooks, and IoT telemetry data ingestion.',
      placementTip: 'Serverless features: Zero server management, automatic scaling, high availability out-of-the-box, pay-for-value (zero cost when idle).'
    }
  ];
})();
