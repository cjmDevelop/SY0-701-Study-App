export const mitigationTechniquesQuiz = [
  {
    quiz_ID: 2.5,
    quiz_name: "2.5 - Mitigation techniques used to secure the enterprise"
  },

 // 2.5 Mitigation Techniques (30 questions)
  {
    question: "What mitigation technique divides a network into separate zones?",
    options: ["Segmentation", "Isolation", "Encryption", "Monitoring"],
    answer: "Segmentation"
  },
  {
    question: "Which access control mechanism defines rules for network traffic?",
    options: ["Access control list (ACL)", "Permissions", "Allow list", "Encryption"],
    answer: "Access control list (ACL)"
  },
  {
    question: "What defines what users can do with files and resources?",
    options: ["Permissions", "ACL", "Allow list", "Segmentation"],
    answer: "Permissions"
  },
  {
    question: "Which mitigation allows only approved applications to run?",
    options: ["Application allow list", "ACL", "Permissions", "Isolation"],
    answer: "Application allow list"
  },
  {
    question: "What technique completely separates systems or networks?",
    options: ["Isolation", "Segmentation", "Encryption", "Monitoring"],
    answer: "Isolation"
  },
  {
    question: "Which mitigation involves applying security updates?",
    options: ["Patching", "Hardening", "Encryption", "Monitoring"],
    answer: "Patching"
  },
  {
    question: "What mitigation technique converts data into unreadable format?",
    options: ["Encryption", "Hashing", "Segmentation", "Isolation"],
    answer: "Encryption"
  },
  {
    question: "Which mitigation involves continuous observation of systems and networks?",
    options: ["Monitoring", "Patching", "Hardening", "Segmentation"],
    answer: "Monitoring"
  },
  {
    question: "What principle grants only the minimum access needed?",
    options: ["Least privilege", "Segmentation", "Isolation", "Encryption"],
    answer: "Least privilege"
  },
  {
    question: "Which mitigation ensures systems comply with security standards?",
    options: ["Configuration enforcement", "Patching", "Monitoring", "Hardening"],
    answer: "Configuration enforcement"
  },
  {
    question: "What process involves securely removing systems from service?",
    options: ["Decommissioning", "Patching", "Hardening", "Isolation"],
    answer: "Decommissioning"
  },
  {
    question: "Which hardening technique protects data at rest and in transit?",
    options: ["Encryption", "Firewall", "HIPS", "Port disabling"],
    answer: "Encryption"
  },
  {
    question: "What hardening technique involves installing antivirus and anti-malware?",
    options: ["Installation of endpoint protection", "Host-based firewall", "HIPS", "Encryption"],
    answer: "Installation of endpoint protection"
  },
  {
    question: "Which hardening technique filters traffic on individual systems?",
    options: ["Host-based firewall", "HIPS", "Endpoint protection", "Port disabling"],
    answer: "Host-based firewall"
  },
  {
    question: "What system detects and prevents intrusions on individual hosts?",
    options: ["Host-based intrusion prevention system (HIPS)", "Host-based firewall", "Endpoint protection", "ACL"],
    answer: "Host-based intrusion prevention system (HIPS)"
  },
  {
    question: "Which hardening technique closes unnecessary network services?",
    options: ["Disabling ports/protocols", "Host-based firewall", "HIPS", "Encryption"],
    answer: "Disabling ports/protocols"
  },
  {
    question: "What hardening step prevents unauthorized access using factory settings?",
    options: ["Default password changes", "Port disabling", "Software removal", "Encryption"],
    answer: "Default password changes"
  },
  {
    question: "Which hardening technique reduces attack surface by eliminating unused programs?",
    options: ["Removal of unnecessary software", "Port disabling", "Default password changes", "Encryption"],
    answer: "Removal of unnecessary software"
  },
  {
    question: "A company separates its corporate network from its guest Wi-Fi network. What mitigation is this?",
    options: ["Segmentation", "Isolation", "Encryption", "ACL"],
    answer: "Segmentation"
  },
  {
    question: "A database server is completely disconnected from the internet. What mitigation is this?",
    options: ["Isolation", "Segmentation", "Air gap", "Quarantine"],
    answer: "Isolation"
  },
  {
    question: "Only executables approved by IT can run on company computers. What mitigation is this?",
    options: ["Application allow list", "ACL", "Whitelist", "Permissions"],
    answer: "Application allow list"
  },
  {
    question: "Users can only access files they need for their job role. What principle is this?",
    options: ["Least privilege", "Need to know", "Separation of duties", "Defense in depth"],
    answer: "Least privilege"
  },
  {
    question: "A SIEM system monitors all network traffic for suspicious activity. What mitigation is this?",
    options: ["Monitoring", "Detection", "Logging", "Analysis"],
    answer: "Monitoring"
  },
  {
    question: "Installing the latest security updates on all servers. What mitigation is this?",
    options: ["Patching", "Updating", "Hardening", "Maintaining"],
    answer: "Patching"
  },
  {
    question: "All data is encrypted both when stored and when transmitted. What mitigation is this?",
    options: ["Encryption", "Protection", "Confidentiality", "Security"],
    answer: "Encryption"
  },
  {
    question: "Before disposing of a server, all data is wiped and the system is properly retired. What is this?",
    options: ["Decommissioning", "Disposal", "Sanitization", "Retirement"],
    answer: "Decommissioning"
  },
  {
    question: "A firewall on every workstation blocks unauthorized incoming connections. What is this?",
    options: ["Host-based firewall", "Personal firewall", "Software firewall", "Endpoint firewall"],
    answer: "Host-based firewall"
  },
  {
    question: "A system actively blocks detected intrusion attempts on individual computers. What is this?",
    options: ["HIPS", "IPS", "Endpoint protection", "Active defense"],
    answer: "HIPS"
  },
  {
    question: "Telnet (port 23) is disabled on all systems to prevent insecure remote access. What hardening is this?",
    options: ["Disabling ports/protocols", "Port security", "Service hardening", "Protocol restriction"],
    answer: "Disabling ports/protocols"
  },
  {
    question: "All default 'admin' passwords are changed during initial device setup. What hardening is this?",
    options: ["Default password changes", "Credential management", "Access control", "Authentication hardening"],
    answer: "Default password changes"
  }

]

// console.log(mitigationTechniquesQuiz.length);
//30