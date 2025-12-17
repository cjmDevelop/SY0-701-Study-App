export const specializedSystemsQuiz = [
  {
    quiz_ID: "3.3",
    quiz_name: "Specialized & Embedded Systems"
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
  }
]
