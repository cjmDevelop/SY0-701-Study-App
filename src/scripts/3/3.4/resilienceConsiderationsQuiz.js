export const resilienceConsiderationsQuiz = [
  {
    quiz_ID: "3.4",
    quiz_name: "Resilience, Recovery & Architecture Considerations"
  },

  // === CONSIDERATIONS ===

  // Availability
  {
    question: "Availability as an architectural consideration focuses on:",
    options: [
      "Ensuring systems and data are accessible when needed",
      "Only cost reduction",
      "Maximum encryption",
      "Eliminating all redundancy"
    ],
    answer: "Ensuring systems and data are accessible when needed"
  },
  {
    question: "High availability systems trade off security for availability when:",
    options: [
      "Security controls might cause downtime or performance degradation",
      "Security is always prioritized",
      "Availability is ignored",
      "No compromises are needed"
    ],
    answer: "Security controls might cause downtime or performance degradation"
  },

  // Resilience
  {
    question: "Resilience refers to a system's ability to:",
    options: [
      "Recover quickly from failures, attacks, or disruptions",
      "Never experience any issues",
      "Reduce initial costs",
      "Increase bandwidth"
    ],
    answer: "Recover quickly from failures, attacks, or disruptions"
  },
  {
    question: "Resilient architecture includes:",
    options: [
      "Redundancy, graceful degradation, and automated recovery",
      "Single point of failure",
      "No backup plans",
      "Manual-only recovery"
    ],
    answer: "Redundancy, graceful degradation, and automated recovery"
  },

  // Cost
  {
    question: "Security architecture cost considerations include:",
    options: [
      "Balancing security investment with risk reduction and business value",
      "Spending unlimited funds",
      "Ignoring security entirely",
      "Only choosing the cheapest option"
    ],
    answer: "Balancing security investment with risk reduction and business value"
  },
  {
    question: "Cloud computing can reduce security costs by:",
    options: [
      "Leveraging provider's security expertise and economy of scale",
      "Eliminating all security needs",
      "Removing security controls",
      "Ignoring compliance"
    ],
    answer: "Leveraging provider's security expertise and economy of scale"
  },

  // Responsiveness
  {
    question: "Responsiveness as an architectural consideration refers to:",
    options: [
      "How quickly systems can respond to requests, changes, or threats",
      "Only network latency",
      "Cost reduction only",
      "Physical size of servers"
    ],
    answer: "How quickly systems can respond to requests, changes, or threats"
  },
  {
    question: "Security controls can impact responsiveness when:",
    options: [
      "Encryption, inspection, or authentication processes add latency",
      "They always improve performance",
      "No impact ever occurs",
      "Systems become faster"
    ],
    answer: "Encryption, inspection, or authentication processes add latency"
  },

  // Scalability
  {
    question: "Scalability ensures systems can:",
    options: [
      "Grow or shrink capacity based on demand",
      "Only operate at fixed capacity",
      "Never change size",
      "Reduce functionality over time"
    ],
    answer: "Grow or shrink capacity based on demand"
  },
  {
    question: "Horizontal scaling involves:",
    options: [
      "Adding more machines/instances to distribute load",
      "Upgrading single machine resources only",
      "Reducing capacity",
      "Removing redundancy"
    ],
    answer: "Adding more machines/instances to distribute load"
  },
  {
    question: "Vertical scaling involves:",
    options: [
      "Adding resources (CPU, RAM) to existing machines",
      "Adding more machines",
      "Reducing resources",
      "Removing servers"
    ],
    answer: "Adding resources (CPU, RAM) to existing machines"
  },
  {
    question: "Security implications of scalability include:",
    options: [
      "Ensuring security controls scale with infrastructure growth",
      "Security becomes unnecessary at scale",
      "Removing all controls when scaling",
      "No security considerations"
    ],
    answer: "Ensuring security controls scale with infrastructure growth"
  },

  // Ease of Deployment
  {
    question: "Ease of deployment refers to:",
    options: [
      "How quickly and simply systems can be provisioned and configured",
      "Only physical installation",
      "Ignoring automation",
      "Manual-only processes"
    ],
    answer: "How quickly and simply systems can be provisioned and configured"
  },
  {
    question: "Infrastructure as Code improves ease of deployment by:",
    options: [
      "Automating provisioning with consistent, repeatable configurations",
      "Requiring manual setup",
      "Eliminating documentation",
      "Preventing standardization"
    ],
    answer: "Automating provisioning with consistent, repeatable configurations"
  },
  {
    question: "Security challenges with easy deployment include:",
    options: [
      "Potential for rapid misconfiguration and shadow IT",
      "Too much control",
      "Impossible unauthorized deployments",
      "No flexibility"
    ],
    answer: "Potential for rapid misconfiguration and shadow IT"
  },

  // Risk Transference
  {
    question: "Risk transference typically involves:",
    options: [
      "Shifting certain risks to third parties like cloud providers or insurers",
      "Eliminating all risk completely",
      "Ignoring risk entirely",
      "Accepting all risk internally"
    ],
    answer: "Shifting certain risks to third parties like cloud providers or insurers"
  },
  {
    question: "Using a cloud provider transfers risk of:",
    options: [
      "Physical infrastructure security and some operational responsibilities",
      "All security responsibilities",
      "No risks are transferred",
      "Application code vulnerabilities"
    ],
    answer: "Physical infrastructure security and some operational responsibilities"
  },
  {
    question: "Cyber insurance is an example of:",
    options: [
      "Risk transference to an insurance provider",
      "Risk elimination",
      "Risk acceptance only",
      "Risk avoidance"
    ],
    answer: "Risk transference to an insurance provider"
  },
  {
    question: "Risk transference does NOT eliminate:",
    options: [
      "The organization's ultimate responsibility and liability",
      "Any risk whatsoever",
      "Need for security controls",
      "Compliance obligations"
    ],
    answer: "The organization's ultimate responsibility and liability"
  },

  // Ease of Recovery
  {
    question: "Ease of recovery refers to:",
    options: [
      "How quickly and simply systems can be restored after failures or incidents",
      "Initial deployment speed only",
      "Cost reduction strategies",
      "Network bandwidth"
    ],
    answer: "How quickly and simply systems can be restored after failures or incidents"
  },
  {
    question: "Architecture features that improve ease of recovery include:",
    options: [
      "Automated backups, snapshots, and disaster recovery automation",
      "No backup systems",
      "Manual-only recovery",
      "Single point of failure"
    ],
    answer: "Automated backups, snapshots, and disaster recovery automation"
  },
  {
    question: "Cloud architectures often provide easier recovery through:",
    options: [
      "Snapshot/backup automation, geographic redundancy, and quick provisioning",
      "Manual tape restoration only",
      "Physical server replacement",
      "No recovery capabilities"
    ],
    answer: "Snapshot/backup automation, geographic redundancy, and quick provisioning"
  },
  {
    question: "Recovery Time Objective (RTO) measures:",
    options: [
      "Maximum acceptable downtime after a disruption",
      "Cost of recovery operations",
      "Number of backup copies",
      "Physical distance to DR site"
    ],
    answer: "Maximum acceptable downtime after a disruption"
  },

  // Patch Availability
  {
    question: "Why is patch availability an important architectural consideration?",
    options: [
      "It determines how quickly vulnerabilities can be mitigated",
      "It affects only network latency",
      "It improves encryption strength",
      "It increases storage capacity"
    ],
    answer: "It determines how quickly vulnerabilities can be mitigated"
  },
  {
    question: "Systems with regular patch availability are:",
    options: [
      "Easier to keep secure with vendor-supported updates",
      "More vulnerable than unsupported systems",
      "Impossible to secure",
      "Automatically exploit-free"
    ],
    answer: "Easier to keep secure with vendor-supported updates"
  },
  {
    question: "When evaluating architecture, patch availability should consider:",
    options: [
      "Vendor support lifecycle, update frequency, and deployment mechanisms",
      "Only initial cost",
      "Physical appearance",
      "Marketing materials"
    ],
    answer: "Vendor support lifecycle, update frequency, and deployment mechanisms"
  },

  // Inability to Patch
  {
    question: "What is the main risk of systems with inability to patch?",
    options: [
      "They remain vulnerable to known exploits indefinitely",
      "They consume too much power",
      "They slow down networks",
      "They automatically delete logs"
    ],
    answer: "They remain vulnerable to known exploits indefinitely"
  },
  {
    question: "Systems unable to be patched include:",
    options: [
      "Legacy ICS/SCADA, end-of-life hardware, and embedded systems",
      "Modern cloud platforms",
      "Current generation servers",
      "Regularly updated workstations"
    ],
    answer: "Legacy ICS/SCADA, end-of-life hardware, and embedded systems"
  },
  {
    question: "Compensating controls for unpatchable systems include:",
    options: [
      "Network segmentation, monitoring, and restrictive access controls",
      "Direct internet connectivity",
      "Removing all security controls",
      "Ignoring vulnerabilities"
    ],
    answer: "Network segmentation, monitoring, and restrictive access controls"
  },
  {
    question: "Medical devices often cannot be patched due to:",
    options: [
      "FDA certification requirements and safety validation processes",
      "Too much available funding",
      "Lack of vulnerabilities",
      "No vendor support exists"
    ],
    answer: "FDA certification requirements and safety validation processes"
  },

  // Power
  {
    question: "Power as an architectural consideration includes:",
    options: [
      "Energy consumption, cooling requirements, and power redundancy",
      "Only computational speed",
      "Network bandwidth only",
      "Storage capacity only"
    ],
    answer: "Energy consumption, cooling requirements, and power redundancy"
  },
  {
    question: "Data center power security considerations include:",
    options: [
      "UPS systems, redundant power supplies, and generator backups",
      "Only single power source",
      "No backup power needed",
      "Manual power management only"
    ],
    answer: "UPS systems, redundant power supplies, and generator backups"
  },
  {
    question: "Edge computing and IoT architectures must consider power because:",
    options: [
      "Devices may have limited power sources or battery constraints",
      "Unlimited power is always available",
      "Power has no impact on security",
      "Energy is infinite"
    ],
    answer: "Devices may have limited power sources or battery constraints"
  },
  {
    question: "Power failures can create security risks through:",
    options: [
      "Ungraceful shutdowns, data corruption, and security system failures",
      "Improved security posture",
      "Automatic patching",
      "Enhanced encryption"
    ],
    answer: "Ungraceful shutdowns, data corruption, and security system failures"
  },

  // Compute
  {
    question: "Compute as an architectural consideration refers to:",
    options: [
      "Processing power, CPU resources, and computational capacity",
      "Only storage capacity",
      "Only network bandwidth",
      "Only physical size"
    ],
    answer: "Processing power, CPU resources, and computational capacity"
  },
  {
    question: "Insufficient compute resources can impact security by:",
    options: [
      "Preventing encryption, limiting monitoring, or delaying security processing",
      "Improving all security controls",
      "Eliminating vulnerabilities",
      "Automatic threat removal"
    ],
    answer: "Preventing encryption, limiting monitoring, or delaying security processing"
  },
  {
    question: "IoT and embedded systems often have limited compute, which means:",
    options: [
      "Security features must be lightweight and resource-efficient",
      "Full enterprise security can be deployed",
      "No security is possible",
      "Unlimited security processing"
    ],
    answer: "Security features must be lightweight and resource-efficient"
  },
  {
    question: "Cloud computing provides elastic compute, allowing:",
    options: [
      "Dynamic resource scaling to meet security processing demands",
      "Only fixed resource allocation",
      "No scalability options",
      "Manual hardware upgrades only"
    ],
    answer: "Dynamic resource scaling to meet security processing demands"
  },

  // === COMPREHENSIVE SCENARIO-BASED QUESTIONS ===

  {
    question: "A healthcare organization needs to store PHI with complete control and air-gap critical systems. Which architecture is MOST appropriate?",
    options: [
      "On-premises with physically isolated networks for critical systems",
      "Public cloud only",
      "Serverless architecture",
      "Fully internet-connected systems"
    ],
    answer: "On-premises with physically isolated networks for critical systems"
  },
  {
    question: "A startup needs rapid scaling, minimal infrastructure management, and global reach. Which model is BEST?",
    options: [
      "Public cloud with serverless components",
      "On-premises data center",
      "Air-gapped network",
      "Physical isolation only"
    ],
    answer: "Public cloud with serverless components"
  },
  {
    question: "A financial institution must meet strict compliance, maintain control, but needs cloud scalability. Which approach is BEST?",
    options: [
      "Hybrid cloud keeping sensitive data on-premises with cloud for applications",
      "Public cloud for everything",
      "Only on-premises",
      "No cloud usage"
    ],
    answer: "Hybrid cloud keeping sensitive data on-premises with cloud for applications"
  },
  {
    question: "An application needs independent scaling of components and isolated failure domains. Which architecture fits BEST?",
    options: [
      "Microservices architecture",
      "Monolithic application",
      "Single-server deployment",
      "Tightly coupled systems"
    ],
    answer: "Microservices architecture"
  },
  {
    question: "A manufacturing facility runs 20-year-old ICS systems that cannot be patched. Which security approach is BEST?",
    options: [
      "Network segmentation, air-gap from corporate network, and monitoring",
      "Direct internet connectivity",
      "No security controls",
      "Replace immediately with cloud"
    ],
    answer: "Network segmentation, air-gap from corporate network, and monitoring"
  },
  {
    question: "A company needs to deploy identical infrastructure across dev, test, and production quickly. Which approach is BEST?",
    options: [
      "Infrastructure as Code with version control",
      "Manual configuration each time",
      "No standardization",
      "Different configurations per environment"
    ],
    answer: "Infrastructure as Code with version control"
  },
  {
    question: "An e-commerce site experiences seasonal traffic spikes (10x normal load). Which architecture consideration is MOST important?",
    options: [
      "Scalability with elastic cloud resources",
      "Fixed on-premises capacity",
      "No load balancing",
      "Single server deployment"
    ],
    answer: "Scalability with elastic cloud resources"
  },
  {
    question: "Critical infrastructure requires 99.999% uptime and instant failover. Which consideration is paramount?",
    options: [
      "High availability with redundancy and automated failover",
      "Cost reduction only",
      "Single point of failure design",
      "Manual recovery processes"
    ],
    answer: "High availability with redundancy and automated failover"
  },
  {
    question: "IoT sensors have limited battery and cannot be easily accessed for updates. Primary concerns are:",
    options: [
      "Power consumption, inability to patch, and physical security",
      "Unlimited compute resources",
      "Easy remote patching",
      "No security considerations"
    ],
    answer: "Power consumption, inability to patch, and physical security"
  },
  {
    question: "A breach occurred. Attacker moved from web tier to database tier. Which architectural control was missing?",
    options: [
      "Logical network segmentation with firewalls between tiers",
      "Strong passwords only",
      "Antivirus software",
      "Physical locks"
    ],
    answer: "Logical network segmentation with firewalls between tiers"
  },
  {
    question: "Development team needs to test security configurations before production. Which approach is BEST?",
    options: [
      "IaC with separate environments and automated testing",
      "Test in production only",
      "No testing needed",
      "Manual changes without testing"
    ],
    answer: "IaC with separate environments and automated testing"
  },
  {
    question: "Multiple containers compromised on same host. Which security concern is this?",
    options: [
      "Container escape or shared kernel vulnerability",
      "VM escape",
      "Physical breach",
      "Social engineering"
    ],
    answer: "Container escape or shared kernel vulnerability"
  },
  {
    question: "Organization wants to reduce infrastructure costs but maintain security control. Which approach balances both?",
    options: [
      "Hybrid cloud with sensitive workloads on-premises, commodity in public cloud",
      "All public cloud immediately",
      "All on-premises forever",
      "No cost considerations"
    ],
    answer: "Hybrid cloud with sensitive workloads on-premises, commodity in public cloud"
  },
  {
    question: "Medical devices must remain operational during updates with zero downtime. Which approach is BEST?",
    options: [
      "Blue-green deployment or rolling updates with high availability",
      "Take everything offline for updates",
      "Never update",
      "Manual one-by-one updates"
    ],
    answer: "Blue-green deployment or rolling updates with high availability"
  },
  {
    question: "Legacy SCADA system cannot use modern authentication. Which compensating control is BEST?",
    options: [
      "Network segmentation with jump box and multi-factor authentication at perimeter",
      "Direct internet access",
      "Shared passwords",
      "No access controls"
    ],
    answer: "Network segmentation with jump box and multi-factor authentication at perimeter"
  },

  // === COMPARISON AND RELATIONSHIP QUESTIONS ===

  {
    question: "Compare IaaS vs PaaS vs SaaS: Which gives customer the MOST security control?",
    options: [
      "IaaS (customer controls OS and above)",
      "PaaS (customer controls apps only)",
      "SaaS (provider controls everything)",
      "All are equal"
    ],
    answer: "IaaS (customer controls OS and above)"
  },
  {
    question: "Compare serverless vs containers: Which abstracts more infrastructure management?",
    options: [
      "Serverless (no server management at all)",
      "Containers (still manage orchestration)",
      "Both are identical",
      "Neither abstracts anything"
    ],
    answer: "Serverless (no server management at all)"
  },
  {
    question: "Compare physical isolation vs logical segmentation: Which is more secure?",
    options: [
      "Physical isolation (complete separation)",
      "Logical segmentation always",
      "Both are identical in security",
      "Neither provides security"
    ],
    answer: "Physical isolation (complete separation)"
  },
  {
    question: "Compare physical isolation vs logical segmentation: Which is more flexible?",
    options: [
      "Logical segmentation (software-defined, easy to change)",
      "Physical isolation always",
      "Both are equally inflexible",
      "Neither can be changed"
    ],
    answer: "Logical segmentation (software-defined, easy to change)"
  },
  {
    question: "Compare centralized vs decentralized: Which has simpler security management?",
    options: [
      "Centralized (single point of policy enforcement)",
      "Decentralized always",
      "Both are equally complex",
      "Neither can be managed"
    ],
    answer: "Centralized (single point of policy enforcement)"
  },
  {
    question: "Compare centralized vs decentralized: Which is more resilient to single-point failures?",
    options: [
      "Decentralized (distributed with no single point of failure)",
      "Centralized always",
      "Both fail equally",
      "Neither provides resilience"
    ],
    answer: "Decentralized (distributed with no single point of failure)"
  },
  {
    question: "Compare containers vs VMs: Which starts faster?",
    options: [
      "Containers (seconds vs minutes for VMs)",
      "Virtual machines always",
      "Both take hours",
      "Neither can start"
    ],
    answer: "Containers (seconds vs minutes for VMs)"
  },
  {
    question: "Ranking security control by strength: Order from STRONGEST to WEAKEST separation",
    options: [
      "Air-gap → Physical isolation → Logical segmentation → VLANs",
      "VLANs → Logical → Physical → Air-gap",
      "All are equally strong",
      "No separation provides security"
    ],
    answer: "Air-gap → Physical isolation → Logical segmentation → VLANs"
  },
  {
    question: "Ranking by deployment speed: Order from FASTEST to SLOWEST",
    options: [
      "Serverless → Containers → VMs → Physical servers",
      "Physical → VMs → Containers → Serverless",
      "All take the same time",
      "Reverse order"
    ],
    answer: "Serverless → Containers → VMs → Physical servers"
  },
  {
    question: "Trade-off analysis: High availability often conflicts with:",
    options: [
      "Cost (redundancy is expensive) and complexity (more to secure)",
      "Security only",
      "Performance only",
      "Nothing - no conflicts exist"
    ],
    answer: "Cost (redundancy is expensive) and complexity (more to secure)"
  },
  {
    question: "Trade-off analysis: Ease of deployment can conflict with:",
    options: [
      "Security (rapid deployment may bypass controls)",
      "Scalability only",
      "Cost only",
      "Nothing - no conflicts exist"
    ],
    answer: "Security (rapid deployment may bypass controls)"
  },
  {
    question: "When should you choose on-premises over cloud?",
    options: [
      "Regulatory requirements, data sovereignty, or unpatchable legacy systems",
      "Always choose on-premises",
      "Never choose on-premises",
      "Only for cost savings"
    ],
    answer: "Regulatory requirements, data sovereignty, or unpatchable legacy systems"
  },
  {
    question: "When should you choose public cloud over on-premises?",
    options: [
      "Need for rapid scaling, global reach, or minimal infrastructure management",
      "Always choose cloud",
      "Never choose cloud",
      "Only for small companies"
    ],
    answer: "Need for rapid scaling, global reach, or minimal infrastructure management"
  },
  {
    question: "Microservices vs monolithic: When are microservices BETTER?",
    options: [
      "Need independent scaling, resilience through isolation, or rapid updates",
      "Always better regardless of context",
      "Never better",
      "Only for small applications"
    ],
    answer: "Need independent scaling, resilience through isolation, or rapid updates"
  },
  {
    question: "Architecture decision framework: Which consideration should typically be evaluated FIRST?",
    options: [
      "Security and compliance requirements (non-negotiable constraints)",
      "Cost only",
      "Ease of deployment only",
      "Vendor preferences"
    ],
    answer: "Security and compliance requirements (non-negotiable constraints)"
  }
]
