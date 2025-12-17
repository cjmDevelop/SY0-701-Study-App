export const cloudArchitectureQuiz = [
  {
    quiz_ID: "3.1",
    quiz_name: "Cloud & Modern Architecture Models"
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

  // Cloud Model Comparisons
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
  }
]
