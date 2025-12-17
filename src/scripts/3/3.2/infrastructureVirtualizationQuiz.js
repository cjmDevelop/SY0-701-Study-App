export const infrastructureVirtualizationQuiz = [
  {
    quiz_ID: "3.2",
    quiz_name: "Infrastructure & Virtualization"
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
  }
]
