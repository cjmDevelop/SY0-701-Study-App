export const securityArchitectureQuiz = [
      {
    quiz_ID: 3.1,
    quiz_name: "3.1 - Compare and contrast security implications of diffrent architecture models"
  },
  // === CLOUD ARCHITECTURE ===
  
  // Responsibility Matrix
  {
    question: "What is the primary purpose of a cloud responsibility matrix (shared responsibility model)?",
    options: [
      "To clearly define which security tasks are the provider's vs customer's responsibility",
      "To monitor cloud bandwidth usage",
      "To manage firewall configurations only",
      "To store encryption keys centrally"
    ],
    answer: "To clearly define which security tasks are the provider's vs customer's responsibility"
  },
  {
    question: "In an IaaS model, who is responsible for securing the operating system?",
    options: [
      "The customer",
      "The cloud provider",
      "Shared equally",
      "No one"
    ],
    answer: "The customer"
  },
  {
    question: "In a SaaS model, who is typically responsible for application security patches?",
    options: [
      "The cloud provider",
      "The customer",
      "Third-party vendors only",
      "End users"
    ],
    answer: "The cloud provider"
  },
  {
    question: "Compare responsibility: In which model does the customer have the MOST security responsibility?",
    options: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "All are equal"
    ],
    answer: "IaaS (Infrastructure as a Service)"
  },
  {
    question: "A misconfigured S3 bucket exposing data is an example of:",
    options: [
      "Customer responsibility failure in the shared model",
      "Cloud provider security flaw",
      "Unavoidable cloud risk",
      "Third-party vendor issue"
    ],
    answer: "Customer responsibility failure in the shared model"
  },
  
  // Hybrid Considerations
  {
    question: "Which cloud deployment model combines private and public cloud resources?",
    options: [
      "Hybrid cloud",
      "Community cloud",
      "Private cloud only",
      "Multi-cloud"
    ],
    answer: "Hybrid cloud"
  },
  {
    question: "A primary security challenge of hybrid cloud architectures is:",
    options: [
      "Maintaining consistent security policies across different environments",
      "Reduced cost savings",
      "Improved performance everywhere",
      "Eliminating all on-premises systems"
    ],
    answer: "Maintaining consistent security policies across different environments"
  },
  {
    question: "An organization keeps sensitive data on-premises but uses public cloud for web applications. This hybrid approach provides:",
    options: [
      "Data sovereignty and compliance while leveraging cloud scalability",
      "No security benefits",
      "Only cost savings",
      "Complete isolation"
    ],
    answer: "Data sovereignty and compliance while leveraging cloud scalability"
  },
  {
    question: "Hybrid cloud security requires:",
    options: [
      "Secure connectivity between environments and unified identity management",
      "Only on-premises firewalls",
      "No encryption",
      "Separate security teams with no coordination"
    ],
    answer: "Secure connectivity between environments and unified identity management"
  },
  
  // Third-Party Vendors
  {
    question: "What is a major security concern when using third-party cloud vendors?",
    options: [
      "Shared responsibility complexities and limited visibility into their security controls",
      "Too much control over infrastructure",
      "Unlimited disk space",
      "Excessive energy usage"
    ],
    answer: "Shared responsibility complexities and limited visibility into their security controls"
  },
  {
    question: "When using third-party SaaS providers, organizations should:",
    options: [
      "Conduct security assessments and review SOC 2 reports",
      "Assume all security is handled",
      "Disable all monitoring",
      "Avoid any due diligence"
    ],
    answer: "Conduct security assessments and review SOC 2 reports"
  },
  {
    question: "Supply chain risk in cloud environments includes:",
    options: [
      "Vendor compromise affecting multiple customers",
      "Only physical theft",
      "Improved security posture",
      "No security concerns"
    ],
    answer: "Vendor compromise affecting multiple customers"
  },
  {
    question: "Cloud vendor lock-in can create security risks because:",
    options: [
      "Migration to more secure platforms becomes difficult and costly",
      "It improves security automatically",
      "It provides unlimited flexibility",
      "It eliminates all vulnerabilities"
    ],
    answer: "Migration to more secure platforms becomes difficult and costly"
  },
  
  // NEW: Cloud Model Comparisons
  {
    question: "Compare public vs private cloud: Which provides greater control over security configurations?",
    options: [
      "Private cloud",
      "Public cloud",
      "Both are identical",
      "Neither provides control"
    ],
    answer: "Private cloud"
  },
  {
    question: "Public cloud security advantages include:",
    options: [
      "Provider expertise, economy of scale for security tools, and regular security updates",
      "Complete control over infrastructure",
      "No shared responsibility",
      "Physical access to servers"
    ],
    answer: "Provider expertise, economy of scale for security tools, and regular security updates"
  },
  {
    question: "Community cloud is MOST appropriate when:",
    options: [
      "Multiple organizations with similar compliance requirements share infrastructure",
      "Only one organization needs resources",
      "No security requirements exist",
      "Maximum public exposure is desired"
    ],
    answer: "Multiple organizations with similar compliance requirements share infrastructure"
  },
  {
    question: "Multi-cloud strategy security implications include:",
    options: [
      "Increased complexity but reduced vendor lock-in and single point of failure",
      "Simplified security management",
      "No additional overhead",
      "Eliminated security risks"
    ],
    answer: "Increased complexity but reduced vendor lock-in and single point of failure"
  },

  // === INFRASTRUCTURE AS CODE (IaC) ===
  
  {
    question: "What does Infrastructure as Code (IaC) primarily enable?",
    options: [
      "Automated, consistent, and repeatable infrastructure deployment through code",
      "Manual server configuration",
      "Database encryption only",
      "Network traffic monitoring"
    ],
    answer: "Automated, consistent, and repeatable infrastructure deployment through code"
  },
  {
    question: "Security benefits of IaC include:",
    options: [
      "Version control, consistency, and automated security configuration enforcement",
      "Eliminated need for security policies",
      "Slower deployment cycles",
      "Manual configuration only"
    ],
    answer: "Version control, consistency, and automated security configuration enforcement"
  },
  {
    question: "A security risk of IaC is:",
    options: [
      "Hardcoded secrets in code repositories",
      "Too much security",
      "Inability to automate",
      "No configuration management"
    ],
    answer: "Hardcoded secrets in code repositories"
  },
  {
    question: "IaC security best practices include:",
    options: [
      "Scanning templates for misconfigurations, using secrets management, and code review",
      "Storing passwords in plain text",
      "No version control",
      "Manual-only deployments"
    ],
    answer: "Scanning templates for misconfigurations, using secrets management, and code review"
  },
  {
    question: "Tools like Terraform and CloudFormation are used for:",
    options: [
      "Infrastructure as Code provisioning and management",
      "Only database backups",
      "Antivirus scanning",
      "Physical security"
    ],
    answer: "Infrastructure as Code provisioning and management"
  },

  // === SERVERLESS ===
  
  {
    question: "Which architecture removes the need for direct server management?",
    options: [
      "Serverless",
      "On-premises only",
      "Traditional virtualization",
      "Physical infrastructure"
    ],
    answer: "Serverless"
  },
  {
    question: "Serverless architecture security responsibilities:",
    options: [
      "Provider manages infrastructure; customer secures application code and permissions",
      "Customer manages all servers",
      "No security needed",
      "Provider handles everything including code"
    ],
    answer: "Provider manages infrastructure; customer secures application code and permissions"
  },
  {
    question: "Security benefits of serverless include:",
    options: [
      "Reduced attack surface from not managing OS/servers and automatic scaling",
      "Complete control over infrastructure",
      "Physical server access",
      "No patching ever needed"
    ],
    answer: "Reduced attack surface from not managing OS/servers and automatic scaling"
  },
  {
    question: "Serverless security challenges include:",
    options: [
      "Function-level vulnerabilities, over-privileged permissions, and cold start issues",
      "Too much visibility",
      "Hardware management",
      "Physical security"
    ],
    answer: "Function-level vulnerabilities, over-privileged permissions, and cold start issues"
  },
  {
    question: "AWS Lambda and Azure Functions are examples of:",
    options: [
      "Serverless compute platforms",
      "Traditional virtual machines",
      "Physical servers",
      "Network appliances"
    ],
    answer: "Serverless compute platforms"
  },

  // === MICROSERVICES ===
  
  {
    question: "What is a key security advantage of microservices architecture?",
    options: [
      "Component isolation limits blast radius if one service is compromised",
      "All services share the same security context",
      "Centralization of all functions",
      "Reduced number of attack surfaces"
    ],
    answer: "Component isolation limits blast radius if one service is compromised"
  },
  {
    question: "Microservices security challenges include:",
    options: [
      "Securing inter-service communication and managing distributed authentication",
      "Too much simplicity",
      "Single point of failure",
      "No network traffic"
    ],
    answer: "Securing inter-service communication and managing distributed authentication"
  },
  {
    question: "Compare monolithic vs microservices: Which has a larger attack surface?",
    options: [
      "Microservices (more network communication and entry points)",
      "Monolithic always",
      "Both are identical",
      "Neither has attack surfaces"
    ],
    answer: "Microservices (more network communication and entry points)"
  },
  {
    question: "Service mesh technologies (like Istio) in microservices provide:",
    options: [
      "Encrypted inter-service communication, authentication, and traffic management",
      "Physical network cabling",
      "Database storage",
      "User interface design"
    ],
    answer: "Encrypted inter-service communication, authentication, and traffic management"
  },
  {
    question: "API gateway security in microservices architecture should include:",
    options: [
      "Authentication, rate limiting, and input validation",
      "No access controls",
      "Open access to all services",
      "Disabled logging"
    ],
    answer: "Authentication, rate limiting, and input validation"
  },

  // === NETWORK INFRASTRUCTURE ===
  
  // Physical Isolation
  {
    question: "What is a key characteristic of a physically isolated network?",
    options: [
      "Complete absence of physical connectivity to other networks",
      "Only logical separation via VLANs",
      "Cloud-based routing",
      "Software-defined boundaries only"
    ],
    answer: "Complete absence of physical connectivity to other networks"
  },
  {
    question: "Physical isolation provides security by:",
    options: [
      "Preventing network-based attacks from reaching isolated systems",
      "Improving internet speed",
      "Automating updates",
      "Increasing bandwidth"
    ],
    answer: "Preventing network-based attacks from reaching isolated systems"
  },
  
  // Air-Gapped
  {
    question: "An air-gapped network is designed to prevent:",
    options: [
      "Unauthorized data exfiltration and remote attacks",
      "Power surges only",
      "Physical theft only",
      "Software redundancy"
    ],
    answer: "Unauthorized data exfiltration and remote attacks"
  },
  {
    question: "Air-gapped systems are commonly used for:",
    options: [
      "Critical infrastructure, classified data, and high-security environments",
      "Public web servers",
      "Guest Wi-Fi networks",
      "IoT devices"
    ],
    answer: "Critical infrastructure, classified data, and high-security environments"
  },
  {
    question: "Security challenges with air-gapped networks include:",
    options: [
      "Difficulty updating/patching and insider threat risks",
      "Too many network connections",
      "Excessive internet access",
      "Automatic cloud backups"
    ],
    answer: "Difficulty updating/patching and insider threat risks"
  },
  {
    question: "Air gaps can potentially be bridged by:",
    options: [
      "USB devices, acoustic/electromagnetic covert channels, or insider threats",
      "Strong firewalls only",
      "Encryption alone",
      "Network segmentation only"
    ],
    answer: "USB devices, acoustic/electromagnetic covert channels, or insider threats"
  },
  
  // Logical Segmentation
  {
    question: "What is the primary benefit of logical network segmentation?",
    options: [
      "Separating network traffic for security, performance, and compliance",
      "Increasing transmission speed only",
      "Preventing all cyberattacks automatically",
      "Reducing power consumption"
    ],
    answer: "Separating network traffic for security, performance, and compliance"
  },
  {
    question: "VLANs (Virtual LANs) provide logical segmentation by:",
    options: [
      "Creating separate broadcast domains on the same physical infrastructure",
      "Requiring completely separate hardware",
      "Only working with wireless networks",
      "Eliminating need for routers"
    ],
    answer: "Creating separate broadcast domains on the same physical infrastructure"
  },
  {
    question: "Compare physical vs logical segmentation: Which is more flexible?",
    options: [
      "Logical segmentation (software-defined, easy to reconfigure)",
      "Physical segmentation always",
      "Both are equally inflexible",
      "Neither can be changed"
    ],
    answer: "Logical segmentation (software-defined, easy to reconfigure)"
  },
  {
    question: "Micro-segmentation extends logical segmentation by:",
    options: [
      "Creating granular security zones down to individual workloads",
      "Removing all segmentation",
      "Only using physical separation",
      "Combining all network segments"
    ],
    answer: "Creating granular security zones down to individual workloads"
  },
  
  // Software-Defined Networking (SDN)
  {
    question: "What does Software-Defined Networking (SDN) provide?",
    options: [
      "Centralized control and programmability of network behavior through software",
      "Only physical network separation",
      "Wireless encryption exclusively",
      "Hardware-based routing only"
    ],
    answer: "Centralized control and programmability of network behavior through software"
  },
  {
    question: "SDN security benefits include:",
    options: [
      "Dynamic policy enforcement, automated threat response, and visibility",
      "Elimination of all network security needs",
      "Hardware-only protections",
      "No configuration management"
    ],
    answer: "Dynamic policy enforcement, automated threat response, and visibility"
  },
  {
    question: "SDN security risks include:",
    options: [
      "Centralized controller becoming single point of failure if compromised",
      "Too much decentralization",
      "No attack surface",
      "Inability to configure"
    ],
    answer: "Centralized controller becoming single point of failure if compromised"
  },
  {
    question: "SDN separates:",
    options: [
      "Control plane from data plane for programmable network management",
      "Physical networks only",
      "Users from administrators",
      "Hardware from power supplies"
    ],
    answer: "Control plane from data plane for programmable network management"
  },

  // === ON-PREMISES ===
  
  {
    question: "Which deployment model typically provides the highest security control but requires the most maintenance?",
    options: [
      "On-premises",
      "Public cloud",
      "Serverless",
      "SaaS"
    ],
    answer: "On-premises"
  },
  {
    question: "On-premises security advantages include:",
    options: [
      "Complete control over infrastructure, data sovereignty, and customization",
      "No maintenance required",
      "Unlimited scalability without cost",
      "Automatic security updates"
    ],
    answer: "Complete control over infrastructure, data sovereignty, and customization"
  },
  {
    question: "On-premises security challenges include:",
    options: [
      "Full responsibility for security, patching, and infrastructure protection",
      "Too little control",
      "Automatic threat mitigation",
      "No configuration needed"
    ],
    answer: "Full responsibility for security, patching, and infrastructure protection"
  },
  {
    question: "Organizations might choose on-premises over cloud for:",
    options: [
      "Regulatory compliance, data sovereignty, or legacy system requirements",
      "Reduced capital expenditure",
      "Minimal IT staff needs",
      "Unlimited elastic scaling"
    ],
    answer: "Regulatory compliance, data sovereignty, or legacy system requirements"
  },

  // === CENTRALIZED VS DECENTRALIZED ===
  
  {
    question: "Which architectural model distributes processing and data across multiple locations?",
    options: [
      "Decentralized",
      "Centralized",
      "Monolithic only",
      "Serverless only"
    ],
    answer: "Decentralized"
  },
  {
    question: "Centralized architecture security benefits include:",
    options: [
      "Simplified security management, easier monitoring, and consistent policy enforcement",
      "No single point of failure",
      "Geographic distribution",
      "Maximum resilience"
    ],
    answer: "Simplified security management, easier monitoring, and consistent policy enforcement"
  },
  {
    question: "Centralized architecture security risks include:",
    options: [
      "Single point of failure and attractive target for attackers",
      "Too much redundancy",
      "Distributed complexity",
      "Geographic dispersion"
    ],
    answer: "Single point of failure and attractive target for attackers"
  },
  {
    question: "Decentralized architecture (like blockchain) provides:",
    options: [
      "No single point of failure and distributed trust",
      "Simplified management",
      "Single point of control",
      "Centralized authority"
    ],
    answer: "No single point of failure and distributed trust"
  },
  {
    question: "Edge computing is an example of:",
    options: [
      "Decentralized architecture moving compute closer to data sources",
      "Centralized cloud-only processing",
      "Traditional data center model",
      "Serverless functions only"
    ],
    answer: "Decentralized architecture moving compute closer to data sources"
  },

  // === CONTAINERIZATION ===
  
  {
    question: "What does containerization primarily achieve?",
    options: [
      "Application isolation in lightweight, portable, consistent environments",
      "Full hardware virtualization",
      "Physical server separation",
      "Network monitoring"
    ],
    answer: "Application isolation in lightweight, portable, consistent environments"
  },
  {
    question: "Container security concerns include:",
    options: [
      "Shared kernel vulnerabilities, image vulnerabilities, and runtime escape",
      "Too much isolation",
      "No attack surface",
      "Complete separation from host"
    ],
    answer: "Shared kernel vulnerabilities, image vulnerabilities, and runtime escape"
  },
  {
    question: "Docker and Kubernetes are associated with:",
    options: [
      "Containerization and container orchestration",
      "Traditional virtual machines only",
      "Physical server management",
      "Email security"
    ],
    answer: "Containerization and container orchestration"
  },
  {
    question: "Container image scanning should detect:",
    options: [
      "Vulnerabilities, malware, and misconfigurations in container images",
      "Only network issues",
      "Only performance problems",
      "Hardware failures"
    ],
    answer: "Vulnerabilities, malware, and misconfigurations in container images"
  },
  {
    question: "Container security best practices include:",
    options: [
      "Using minimal base images, scanning for vulnerabilities, and runtime protection",
      "Running everything as root",
      "Using untrusted images",
      "Disabling all security controls"
    ],
    answer: "Using minimal base images, scanning for vulnerabilities, and runtime protection"
  },

  // === VIRTUALIZATION ===
  
  {
    question: "What does virtualization enable?",
    options: [
      "Running multiple isolated operating systems on a single physical host",
      "Only physical server consolidation",
      "Automatic encryption",
      "Direct cloud connectivity"
    ],
    answer: "Running multiple isolated operating systems on a single physical host"
  },
  {
    question: "Virtualization security benefits include:",
    options: [
      "Isolation between VMs, snapshots for recovery, and resource optimization",
      "Complete elimination of malware",
      "No patch management needed",
      "Automatic threat removal"
    ],
    answer: "Isolation between VMs, snapshots for recovery, and resource optimization"
  },
  {
    question: "VM escape is a security concern because:",
    options: [
      "Attackers break out of VM isolation to compromise the hypervisor or other VMs",
      "VMs run too fast",
      "It improves security",
      "It only affects performance"
    ],
    answer: "Attackers break out of VM isolation to compromise the hypervisor or other VMs"
  },
  {
    question: "Hypervisor security is critical because:",
    options: [
      "Compromise of the hypervisor affects all hosted virtual machines",
      "It only manages one VM",
      "It has no security responsibilities",
      "VMs are completely independent"
    ],
    answer: "Compromise of the hypervisor affects all hosted virtual machines"
  },
  {
    question: "Compare containers vs VMs: Which has lower resource overhead?",
    options: [
      "Containers (share host OS kernel)",
      "Virtual machines always",
      "Both are identical",
      "Neither uses resources"
    ],
    answer: "Containers (share host OS kernel)"
  },
  {
    question: "Compare containers vs VMs: Which provides stronger isolation?",
    options: [
      "Virtual machines (complete OS isolation)",
      "Containers always",
      "Both are identical",
      "Neither provides isolation"
    ],
    answer: "Virtual machines (complete OS isolation)"
  },

  // === IoT ===
  
  {
    question: "What is a common security challenge with IoT devices?",
    options: [
      "Limited patching capabilities, weak defaults, and constrained resources",
      "Too much processing power",
      "Excessive encryption",
      "Over-engineered security"
    ],
    answer: "Limited patching capabilities, weak defaults, and constrained resources"
  },
  {
    question: "IoT device security risks include:",
    options: [
      "Default credentials, lack of encryption, and firmware vulnerabilities",
      "Too many security features",
      "Excessive monitoring",
      "Strong authentication by default"
    ],
    answer: "Default credentials, lack of encryption, and firmware vulnerabilities"
  },
  {
    question: "IoT devices should be:",
    options: [
      "Segmented on isolated networks with restricted access",
      "Placed on admin networks",
      "Given full internet access",
      "Never monitored"
    ],
    answer: "Segmented on isolated networks with restricted access"
  },
  {
    question: "The Mirai botnet exploited IoT devices primarily through:",
    options: [
      "Default and weak credentials",
      "Zero-day vulnerabilities only",
      "Physical access",
      "Social engineering"
    ],
    answer: "Default and weak credentials"
  },

  // === ICS/SCADA ===
  
  {
    question: "What type of system monitors and controls industrial processes?",
    options: [
      "ICS/SCADA (Industrial Control Systems / Supervisory Control and Data Acquisition)",
      "RTOS only",
      "Standard enterprise OS",
      "Consumer IoT"
    ],
    answer: "ICS/SCADA (Industrial Control Systems / Supervisory Control and Data Acquisition)"
  },
  {
    question: "ICS/SCADA security challenges include:",
    options: [
      "Legacy systems, inability to patch, and operational availability requirements",
      "Too frequent updates",
      "Excessive security features",
      "Modern security by default"
    ],
    answer: "Legacy systems, inability to patch, and operational availability requirements"
  },
  {
    question: "ICS/SCADA environments prioritize:",
    options: [
      "Availability and safety over confidentiality",
      "Confidentiality over availability",
      "Only security, never uptime",
      "Convenience over safety"
    ],
    answer: "Availability and safety over confidentiality"
  },
  {
    question: "Securing ICS/SCADA systems should include:",
    options: [
      "Network segmentation, monitoring, and defense-in-depth",
      "Direct internet connectivity",
      "No access controls",
      "Shared credentials"
    ],
    answer: "Network segmentation, monitoring, and defense-in-depth"
  },
  {
    question: "The Stuxnet attack targeted:",
    options: [
      "ICS/SCADA systems controlling industrial centrifuges",
      "Consumer routers only",
      "Mobile devices",
      "Web applications"
    ],
    answer: "ICS/SCADA systems controlling industrial centrifuges"
  },

  // === RTOS (Real-Time Operating System) ===
  
  {
    question: "What is the main function of a Real-Time Operating System (RTOS)?",
    options: [
      "Processing data deterministically within strict time constraints for time-critical applications",
      "Hosting multiple user applications",
      "Providing web services",
      "Managing cloud workloads"
    ],
    answer: "Processing data deterministically within strict time constraints for time-critical applications"
  },
  {
    question: "RTOS is commonly used in:",
    options: [
      "Medical devices, automotive systems, and industrial automation",
      "Web servers only",
      "Desktop computers",
      "Cloud data centers"
    ],
    answer: "Medical devices, automotive systems, and industrial automation"
  },
  {
    question: "RTOS security challenges include:",
    options: [
      "Limited resources for security features and difficulty patching safety-critical systems",
      "Too many security options",
      "Excessive processing power",
      "Easy patching processes"
    ],
    answer: "Limited resources for security features and difficulty patching safety-critical systems"
  },

  // === EMBEDDED SYSTEMS ===
  
  {
    question: "Embedded systems are typically used for:",
    options: [
      "Running dedicated tasks within specialized devices",
      "General-purpose computing",
      "Hosting virtual machines",
      "Centralized data processing"
    ],
    answer: "Running dedicated tasks within specialized devices"
  },
  {
    question: "Embedded systems security concerns include:",
    options: [
      "Physical access vulnerabilities, limited update mechanisms, and resource constraints",
      "Too much flexibility",
      "Excessive memory",
      "Easy remote patching"
    ],
    answer: "Physical access vulnerabilities, limited update mechanisms, and resource constraints"
  },
  {
    question: "Examples of embedded systems include:",
    options: [
      "Smart thermostats, automotive ECUs, and medical implants",
      "Enterprise servers only",
      "Cloud platforms",
      "Mainframe computers"
    ],
    answer: "Smart thermostats, automotive ECUs, and medical implants"
  },

  // === HIGH AVAILABILITY ===
  
  {
    question: "What is the primary goal of high availability system design?",
    options: [
      "Ensuring minimal downtime and continuous service availability",
      "Reducing encryption overhead",
      "Maximizing bandwidth usage",
      "Simplifying DNS configuration"
    ],
    answer: "Ensuring minimal downtime and continuous service availability"
  },
  {
    question: "High availability techniques include:",
    options: [
      "Redundancy, failover, load balancing, and clustering",
      "Single point of failure design",
      "No backup systems",
      "Manual recovery only"
    ],
    answer: "Redundancy, failover, load balancing, and clustering"
  },
  {
    question: "High availability can create security challenges because:",
    options: [
      "Increased complexity and more components to secure",
      "Simplified architecture",
      "Fewer attack surfaces",
      "No redundancy needed"
    ],
    answer: "Increased complexity and more components to secure"
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

console.log(securityArchitectureQuiz.length);
//152