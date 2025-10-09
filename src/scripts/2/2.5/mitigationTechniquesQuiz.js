export const mitigationTechniquesQuiz = [
  {
    quiz_ID: 2.5,
    quiz_name: "2.5 - Mitigation techniques used to secure the enterprise"
  },
  // === SEGMENTATION ===
  {
    question: "What is the primary purpose of network segmentation in an enterprise environment?",
    options: [
      "To limit lateral movement and reduce the attack surface",
      "To improve internet download speeds",
      "To increase storage capacity",
      "To simplify software licensing"
    ],
    answer: "To limit lateral movement and reduce the attack surface"
  },
  {
    question: "How does segmentation help contain a security breach?",
    options: [
      "By isolating compromised systems and preventing spread to other network segments",
      "By increasing firewall throughput",
      "By disabling encryption",
      "By removing all user accounts"
    ],
    answer: "By isolating compromised systems and preventing spread to other network segments"
  },
  {
    question: "A company separates its payment processing systems from general office networks. This is an example of:",
    options: [
      "Network segmentation for PCI DSS compliance and security",
      "Network performance optimization",
      "Bandwidth management",
      "Load balancing"
    ],
    answer: "Network segmentation for PCI DSS compliance and security"
  },
  {
    question: "VLANs (Virtual Local Area Networks) are commonly used to:",
    options: [
      "Implement logical network segmentation at Layer 2",
      "Encrypt all network traffic",
      "Replace physical routers",
      "Store backup data"
    ],
    answer: "Implement logical network segmentation at Layer 2"
  },
  {
    question: "Microsegmentation differs from traditional segmentation by:",
    options: [
      "Creating granular security zones down to individual workloads or applications",
      "Using only physical network separation",
      "Requiring no security policies",
      "Eliminating all firewalls"
    ],
    answer: "Creating granular security zones down to individual workloads or applications"
  },
  {
    question: "An organization segments its network into DMZ, internal, and management zones. The PRIMARY benefit is:",
    options: [
      "Defense-in-depth with different security controls per zone",
      "Faster internet speeds",
      "Reduced power consumption",
      "Simplified cabling"
    ],
    answer: "Defense-in-depth with different security controls per zone"
  },
  {
    question: "Zero Trust architecture relies heavily on:",
    options: [
      "Microsegmentation and continuous verification",
      "Perimeter firewalls only",
      "Physical barriers only",
      "Removing all security controls"
    ],
    answer: "Microsegmentation and continuous verification"
  },

  // === ACCESS CONTROL ===
  
  // ACL (Access Control Lists)
  {
    question: "What is an Access Control List (ACL) primarily used for?",
    options: [
      "Defining rules that permit or deny traffic based on specified criteria",
      "Monitoring email content",
      "Encrypting files at rest",
      "Scheduling system backups"
    ],
    answer: "Defining rules that permit or deny traffic based on specified criteria"
  },
  {
    question: "A router ACL that blocks traffic from 192.168.1.0/24 to 10.0.0.5 is an example of:",
    options: [
      "Network-based access control using packet filtering",
      "Application-level encryption",
      "User authentication",
      "Data backup"
    ],
    answer: "Network-based access control using packet filtering"
  },
  {
    question: "Filesystem ACLs differ from network ACLs by:",
    options: [
      "Controlling access to files and directories rather than network traffic",
      "Operating only on routers",
      "Requiring no permissions",
      "Encrypting all data"
    ],
    answer: "Controlling access to files and directories rather than network traffic"
  },
  {
    question: "When configuring ACLs, the principle of 'implicit deny' means:",
    options: [
      "Traffic not explicitly permitted is automatically blocked",
      "All traffic is allowed by default",
      "Only encrypted traffic is blocked",
      "ACLs have no effect"
    ],
    answer: "Traffic not explicitly permitted is automatically blocked"
  },
  {
    question: "Stateful ACLs provide better security than stateless ACLs because they:",
    options: [
      "Track connection state and allow return traffic automatically",
      "Block all traffic regardless of context",
      "Require no configuration",
      "Disable all security features"
    ],
    answer: "Track connection state and allow return traffic automatically"
  },
  {
    question: "An ACL rule denying port 23 (Telnet) from all sources serves to:",
    options: [
      "Prevent insecure remote access attempts",
      "Improve network speed",
      "Enable better encryption",
      "Increase storage capacity"
    ],
    answer: "Prevent insecure remote access attempts"
  },
  
  // Permissions
  {
    question: "NTFS permissions in Windows control:",
    options: [
      "Who can access files/folders and what actions they can perform",
      "Only network traffic flow",
      "Hardware compatibility",
      "Software installation speeds"
    ],
    answer: "Who can access files/folders and what actions they can perform"
  },
  {
    question: "The difference between 'Read' and 'Modify' permissions is:",
    options: [
      "Read allows viewing; Modify allows viewing and changing content",
      "They are identical permissions",
      "Read is more powerful than Modify",
      "Modify only works on encrypted files"
    ],
    answer: "Read allows viewing; Modify allows changing content"
  },
  {
    question: "Linux file permissions 'rwxr-xr--' mean:",
    options: [
      "Owner: read/write/execute; Group: read/execute; Others: read only",
      "Everyone has full access",
      "No one can access the file",
      "Only encryption is allowed"
    ],
    answer: "Owner: read/write/execute; Group: read/execute; Others: read only"
  },
  {
    question: "Inherited permissions in a directory structure:",
    options: [
      "Propagate parent folder permissions to child objects automatically",
      "Block all access to subdirectories",
      "Require manual configuration for each file",
      "Only work with encryption"
    ],
    answer: "Propagate parent folder permissions to child objects automatically"
  },
  {
    question: "Explicit deny permissions take precedence over allow permissions because:",
    options: [
      "Deny rules override allow rules for security-first design",
      "Allow rules are always stronger",
      "Deny rules have no effect",
      "They are identical in function"
    ],
    answer: "Deny rules override allow rules for security-first design"
  },
  {
    question: "Role-Based Access Control (RBAC) assigns permissions based on:",
    options: [
      "User job roles rather than individual user accounts",
      "Random assignment",
      "Physical location only",
      "File encryption status"
    ],
    answer: "User job roles rather than individual user accounts"
  },
  {
    question: "Effective permissions are determined by:",
    options: [
      "Combining all applicable permissions from groups and explicit assignments",
      "Using only the first permission found",
      "Ignoring all group memberships",
      "Random selection"
    ],
    answer: "Combining all applicable permissions from groups and explicit assignments"
  },

  // === APPLICATION ALLOW LIST ===
  
  {
    question: "What is the primary purpose of an application allow list (whitelist)?",
    options: [
      "To permit only approved applications to execute, blocking all others",
      "To block all applications from running",
      "To manage user passwords",
      "To encrypt network communications"
    ],
    answer: "To permit only approved applications to execute, blocking all others"
  },
  {
    question: "Application allow lists are particularly effective against:",
    options: [
      "Zero-day malware and unauthorized software execution",
      "Network congestion",
      "Disk fragmentation",
      "Power outages"
    ],
    answer: "Zero-day malware and unauthorized software execution"
  },
  {
    question: "An allow list can be implemented using:",
    options: [
      "File hashes, digital signatures, or file paths",
      "Only usernames",
      "Only IP addresses",
      "Only timestamps"
    ],
    answer: "File hashes, digital signatures, or file paths"
  },
  {
    question: "The main challenge with application allow lists is:",
    options: [
      "Maintaining the list as legitimate applications are updated",
      "They provide too little security",
      "They improve performance",
      "They require no management"
    ],
    answer: "Maintaining the list as legitimate applications are updated"
  },
  {
    question: "Application allow lists differ from deny lists (blacklists) because:",
    options: [
      "Allow lists permit only known-good; deny lists block only known-bad",
      "They are identical approaches",
      "Deny lists are more secure",
      "Allow lists permit everything"
    ],
    answer: "Allow lists permit only known-good; deny lists block only known-bad"
  },
  {
    question: "Windows AppLocker is an example of:",
    options: [
      "Application control policy enforcement tool",
      "Antivirus software",
      "Firewall configuration tool",
      "Backup utility"
    ],
    answer: "Application control policy enforcement tool"
  },

  // === ISOLATION ===
  
  {
    question: "What is the purpose of isolation in cybersecurity?",
    options: [
      "To separate and contain systems to prevent threat spread",
      "To remove all network connectivity permanently",
      "To encrypt all data",
      "To manage DNS records"
    ],
    answer: "To separate and contain systems to prevent threat spread"
  },
  {
    question: "A compromised workstation is moved to a quarantine VLAN. This is an example of:",
    options: [
      "Network isolation for incident containment",
      "Performance optimization",
      "Backup procedure",
      "Software installation"
    ],
    answer: "Network isolation for incident containment"
  },
  {
    question: "Air-gapped systems provide isolation by:",
    options: [
      "Having no physical or logical network connectivity",
      "Using strong passwords only",
      "Encrypting all files",
      "Installing antivirus software"
    ],
    answer: "Having no physical or logical network connectivity"
  },
  {
    question: "Sandboxing is a form of isolation that:",
    options: [
      "Runs untrusted code in a restricted environment",
      "Permanently deletes files",
      "Backs up all data",
      "Disables all security features"
    ],
    answer: "Runs untrusted code in a restricted environment"
  },
  {
    question: "Virtual machine isolation helps security by:",
    options: [
      "Preventing malware in one VM from affecting the host or other VMs",
      "Improving graphics performance",
      "Increasing hard drive space",
      "Accelerating network speeds"
    ],
    answer: "Preventing malware in one VM from affecting the host or other VMs"
  },
  {
    question: "Process isolation in operating systems:",
    options: [
      "Prevents one process from accessing another process's memory space",
      "Speeds up all applications",
      "Disables user authentication",
      "Removes all security controls"
    ],
    answer: "Prevents one process from accessing another process's memory space"
  },

  // === PATCHING ===
  
  {
    question: "Why is timely patching critical for enterprise security?",
    options: [
      "It remediates known vulnerabilities before they can be exploited",
      "It improves hardware performance",
      "It reduces file sizes",
      "It prevents spam emails"
    ],
    answer: "It remediates known vulnerabilities before they can be exploited"
  },
  {
    question: "Which should typically be patched FIRST in an emergency?",
    options: [
      "Internet-facing systems with critical vulnerabilities",
      "Offline backup systems",
      "Non-networked workstations",
      "Decommissioned servers"
    ],
    answer: "Internet-facing systems with critical vulnerabilities"
  },
  {
    question: "A patch management system should include:",
    options: [
      "Testing, approval workflows, and automated deployment",
      "Only manual installation",
      "No testing procedures",
      "Random patch application"
    ],
    answer: "Testing, approval workflows, and automated deployment"
  },
  {
    question: "Virtual patching provides protection by:",
    options: [
      "Using IPS/WAF rules to block exploits when patches aren't available",
      "Permanently fixing code vulnerabilities",
      "Replacing all affected systems",
      "Disabling affected applications"
    ],
    answer: "Using IPS/WAF rules to block exploits when patches aren't available"
  },
  {
    question: "Patch Tuesday refers to:",
    options: [
      "Microsoft's scheduled monthly security update release day",
      "Linux kernel updates",
      "Physical security inspections",
      "Backup schedules"
    ],
    answer: "Microsoft's scheduled monthly security update release day"
  },
  {
    question: "Emergency (out-of-band) patches are released when:",
    options: [
      "Critical vulnerabilities are actively exploited in the wild",
      "Regularly scheduled updates occur",
      "Minor bugs are found",
      "New features are added"
    ],
    answer: "Critical vulnerabilities are actively exploited in the wild"
  },
  {
    question: "Before deploying patches to production, organizations should:",
    options: [
      "Test in a non-production environment to identify compatibility issues",
      "Apply directly to all systems immediately",
      "Skip testing to save time",
      "Wait until after exploitation occurs"
    ],
    answer: "Test in a non-production environment to identify compatibility issues"
  },

  // === ENCRYPTION ===
  
  {
    question: "What does encryption accomplish for data protection?",
    options: [
      "Transforms data into unreadable format without the correct decryption key",
      "Deletes unnecessary files",
      "Compresses files for storage",
      "Creates automatic backups"
    ],
    answer: "Transforms data into unreadable format without the correct decryption key"
  },
  {
    question: "Encryption at rest protects:",
    options: [
      "Data stored on disks, databases, or backup media",
      "Only data being transmitted",
      "Only data in RAM",
      "Only temporary files"
    ],
    answer: "Data stored on disks, databases, or backup media"
  },
  {
    question: "Encryption in transit protects:",
    options: [
      "Data traveling across networks from interception",
      "Only stored files",
      "Only database records",
      "Only backup tapes"
    ],
    answer: "Data traveling across networks from interception"
  },
  {
    question: "Full-disk encryption (FDE) protects against:",
    options: [
      "Data theft if a device is lost or stolen",
      "Malware infections",
      "Network attacks",
      "Social engineering"
    ],
    answer: "Data theft if a device is lost or stolen"
  },
  {
    question: "TLS/SSL encryption is used to:",
    options: [
      "Secure web traffic and communications between clients and servers",
      "Encrypt local hard drives",
      "Manage user passwords",
      "Perform backups"
    ],
    answer: "Secure web traffic and communications between clients and servers"
  },
  {
    question: "File-level encryption differs from full-disk encryption by:",
    options: [
      "Encrypting individual files/folders rather than entire disk volumes",
      "Being less secure than FDE",
      "Only working on Windows",
      "Requiring no keys"
    ],
    answer: "Encrypting individual files/folders rather than entire disk volumes"
  },
  {
    question: "Database encryption should be used to protect:",
    options: [
      "Sensitive data like PII, PHI, and payment information",
      "Only log files",
      "Only temporary tables",
      "Only database software itself"
    ],
    answer: "Sensitive data like PII, PHI, and payment information"
  },

  // === MONITORING ===
  
  {
    question: "Why is continuous monitoring critical in enterprise security?",
    options: [
      "To detect suspicious activity, anomalies, and security incidents in real-time",
      "To increase CPU performance",
      "To update device drivers",
      "To improve Wi-Fi signal strength"
    ],
    answer: "To detect suspicious activity, anomalies, and security incidents in real-time"
  },
  {
    question: "Security Information and Event Management (SIEM) systems:",
    options: [
      "Aggregate and analyze logs from multiple sources for threat detection",
      "Only monitor physical doors",
      "Replace all firewalls",
      "Manage software licenses"
    ],
    answer: "Aggregate and analyze logs from multiple sources for threat detection"
  },
  {
    question: "Network traffic monitoring can detect:",
    options: [
      "Data exfiltration, malware C2 communication, and unauthorized access",
      "Only hardware failures",
      "Only software updates",
      "Only user login times"
    ],
    answer: "Data exfiltration, malware C2 communication, and unauthorized access"
  },
  {
    question: "File integrity monitoring (FIM) alerts when:",
    options: [
      "Critical system files are modified unexpectedly",
      "Files are accessed normally",
      "Backups complete successfully",
      "Users log in"
    ],
    answer: "Critical system files are modified unexpectedly"
  },
  {
    question: "User and Entity Behavior Analytics (UEBA) monitors:",
    options: [
      "Behavioral patterns to detect insider threats and compromised accounts",
      "Only network bandwidth",
      "Only disk space",
      "Only CPU temperature"
    ],
    answer: "Behavioral patterns to detect insider threats and compromised accounts"
  },
  {
    question: "Log aggregation and retention are important for:",
    options: [
      "Forensic analysis, compliance, and long-term security investigations",
      "Increasing system speed",
      "Reducing storage costs",
      "Improving graphics"
    ],
    answer: "Forensic analysis, compliance, and long-term security investigations"
  },
  {
    question: "Endpoint Detection and Response (EDR) tools provide:",
    options: [
      "Real-time monitoring, threat detection, and incident response on endpoints",
      "Only antivirus scanning",
      "Only firewall protection",
      "Only backup services"
    ],
    answer: "Real-time monitoring, threat detection, and incident response on endpoints"
  },

  // === LEAST PRIVILEGE ===
  
  {
    question: "The principle of least privilege ensures that:",
    options: [
      "Users have only the minimum access rights needed to perform their job functions",
      "All users have administrator access",
      "No one can access any systems",
      "Everyone has the same permissions"
    ],
    answer: "Users have only the minimum access rights needed to perform their job functions"
  },
  {
    question: "What does least privilege help prevent?",
    options: [
      "Excessive access, privilege abuse, and lateral movement after compromise",
      "Software updates",
      "Password changes",
      "Network connectivity"
    ],
    answer: "Excessive access, privilege abuse, and lateral movement after compromise"
  },
  {
    question: "A developer is given read-only access to production databases. This demonstrates:",
    options: [
      "Least privilege by limiting access to what's necessary",
      "Excessive permissions",
      "No security controls",
      "Full administrative access"
    ],
    answer: "Least privilege by limiting access to what's necessary"
  },
  {
    question: "Just-in-Time (JIT) access enhances least privilege by:",
    options: [
      "Granting elevated permissions only when needed for specific timeframes",
      "Providing permanent administrator access",
      "Removing all access controls",
      "Disabling authentication"
    ],
    answer: "Granting elevated permissions only when needed for specific timeframes"
  },
  {
    question: "Privileged Access Management (PAM) solutions:",
    options: [
      "Control, monitor, and audit administrative and privileged account usage",
      "Grant everyone administrator rights",
      "Disable all monitoring",
      "Remove password requirements"
    ],
    answer: "Control, monitor, and audit administrative and privileged account usage"
  },
  {
    question: "Least privilege reduces the blast radius of a compromise because:",
    options: [
      "Attackers gain limited access and cannot easily escalate or move laterally",
      "All systems are equally vulnerable",
      "Encryption is disabled",
      "Firewalls are removed"
    ],
    answer: "Attackers gain limited access and cannot easily escalate or move laterally"
  },
  {
    question: "Implementing least privilege for service accounts means:",
    options: [
      "Granting only permissions required for the service to function",
      "Using Domain Admin for all services",
      "Disabling all service accounts",
      "Sharing passwords across services"
    ],
    answer: "Granting only permissions required for the service to function"
  },

  // === CONFIGURATION ENFORCEMENT ===
  
  {
    question: "What is the purpose of configuration enforcement?",
    options: [
      "To ensure systems comply with security baselines and organizational policies",
      "To monitor email traffic",
      "To increase storage capacity",
      "To enhance video resolution"
    ],
    answer: "To ensure systems comply with security baselines and organizational policies"
  },
  {
    question: "Security baselines define:",
    options: [
      "Minimum security configuration standards for systems",
      "Maximum system performance",
      "Network bandwidth limits",
      "Software license counts"
    ],
    answer: "Minimum security configuration standards for systems"
  },
  {
    question: "Group Policy Objects (GPO) in Active Directory are used to:",
    options: [
      "Enforce configuration settings across Windows systems centrally",
      "Only manage email",
      "Replace firewalls",
      "Perform backups"
    ],
    answer: "Enforce configuration settings across Windows systems centrally"
  },
  {
    question: "Configuration drift occurs when:",
    options: [
      "Systems deviate from approved security baselines over time",
      "Systems are properly maintained",
      "Backups are successful",
      "Patches are applied"
    ],
    answer: "Systems deviate from approved security baselines over time"
  },
  {
    question: "Automated configuration management tools like Ansible, Puppet, or Chef:",
    options: [
      "Enforce consistent configurations and remediate drift automatically",
      "Only monitor network traffic",
      "Replace all security controls",
      "Manage user passwords only"
    ],
    answer: "Enforce consistent configurations and remediate drift automatically"
  },
  {
    question: "CIS Benchmarks and DISA STIGs provide:",
    options: [
      "Industry-standard security configuration guidelines",
      "Software licensing agreements",
      "Hardware specifications",
      "Network cabling standards"
    ],
    answer: "Industry-standard security configuration guidelines"
  },
  {
    question: "Configuration compliance scanning identifies:",
    options: [
      "Systems that don't meet security baseline requirements",
      "Only hardware failures",
      "Only network congestion",
      "Only software licenses"
    ],
    answer: "Systems that don't meet security baseline requirements"
  },
  {
    question: "Immutable infrastructure approaches prevent configuration drift by:",
    options: [
      "Replacing systems entirely rather than modifying them",
      "Allowing unlimited changes",
      "Disabling all security",
      "Removing all automation"
    ],
    answer: "Replacing systems entirely rather than modifying them"
  },

  // === DECOMMISSIONING ===
  
  {
    question: "Why is secure data wiping essential before decommissioning hardware?",
    options: [
      "To prevent data recovery and potential data breaches",
      "To improve system performance",
      "To save storage space",
      "To update firmware"
    ],
    answer: "To prevent data recovery and potential data breaches"
  },
  {
    question: "What should organizations do before decommissioning systems?",
    options: [
      "Securely sanitize data, document the process, and update asset inventory",
      "Simply power off the systems",
      "Donate them immediately",
      "Leave data intact"
    ],
    answer: "Securely sanitize data, document the process, and update asset inventory"
  },
  {
    question: "The purpose of decommissioning in enterprise security is:",
    options: [
      "To securely retire outdated, vulnerable, or end-of-life systems",
      "To temporarily disable systems",
      "To upgrade all hardware",
      "To install more software"
    ],
    answer: "To securely retire outdated, vulnerable, or end-of-life systems"
  },
  {
    question: "Data sanitization methods include:",
    options: [
      "Overwriting, degaussing, and physical destruction",
      "Simply deleting files",
      "Reformatting once",
      "Powering off the device"
    ],
    answer: "Overwriting, degaussing, and physical destruction"
  },
  {
    question: "Certificate revocation should be performed during decommissioning to:",
    options: [
      "Prevent continued use of cryptographic credentials from decommissioned systems",
      "Improve network speed",
      "Increase storage",
      "Enhance graphics"
    ],
    answer: "Prevent continued use of cryptographic credentials from decommissioned systems"
  },
  {
    question: "NIST SP 800-88 provides guidance on:",
    options: [
      "Media sanitization and secure data disposal methods",
      "Network architecture design",
      "Password policies",
      "Firewall configurations"
    ],
    answer: "Media sanitization and secure data disposal methods"
  },
  {
    question: "When decommissioning cloud resources, organizations must:",
    options: [
      "Ensure data deletion, terminate access, and verify no residual data remains",
      "Leave everything configured",
      "Only power off VMs",
      "Keep all credentials active"
    ],
    answer: "Ensure data deletion, terminate access, and verify no residual data remains"
  },

  // === HARDENING TECHNIQUES ===
  
  // Encryption (Hardening Context)
  {
    question: "How does encryption contribute to system hardening?",
    options: [
      "By protecting data confidentiality even if systems are compromised",
      "By blocking all network traffic",
      "By disabling user accounts",
      "By removing software"
    ],
    answer: "By protecting data confidentiality even if systems are compromised"
  },
  {
    question: "BitLocker and FileVault are examples of:",
    options: [
      "Full-disk encryption solutions for Windows and macOS",
      "Antivirus software",
      "Firewall products",
      "Backup utilities"
    ],
    answer: "Full-disk encryption solutions for Windows and macOS"
  },
  
  // Installation of Endpoint Protection
  {
    question: "How does endpoint protection contribute to hardening?",
    options: [
      "By detecting, preventing, and removing malware threats on endpoints",
      "By encrypting all hard drives automatically",
      "By limiting wireless range",
      "By removing user privileges"
    ],
    answer: "By detecting, preventing, and removing malware threats on endpoints"
  },
  {
    question: "Modern endpoint protection platforms (EPP) provide:",
    options: [
      "Antivirus, anti-malware, firewall, and behavioral analysis",
      "Only signature-based scanning",
      "Only network monitoring",
      "Only physical security"
    ],
    answer: "Antivirus, anti-malware, firewall, and behavioral analysis"
  },
  {
    question: "Next-generation antivirus (NGAV) differs from traditional AV by:",
    options: [
      "Using machine learning and behavioral analysis instead of just signatures",
      "Only using signature databases",
      "Being less effective",
      "Requiring no updates"
    ],
    answer: "Using machine learning and behavioral analysis instead of just signatures"
  },
  
  // Host-based Firewall
  {
    question: "A host-based firewall protects by:",
    options: [
      "Filtering inbound and outbound traffic at the individual system level",
      "Only monitoring network switches",
      "Replacing network firewalls entirely",
      "Encrypting all files"
    ],
    answer: "Filtering inbound and outbound traffic at the individual system level"
  },
  {
    question: "Windows Defender Firewall is an example of:",
    options: [
      "Host-based firewall built into the operating system",
      "Network firewall appliance",
      "Antivirus software only",
      "Backup solution"
    ],
    answer: "Host-based firewall built into the operating system"
  },
  {
    question: "Host-based firewalls should be configured to:",
    options: [
      "Block unnecessary inbound connections and restrict outbound traffic",
      "Allow all traffic by default",
      "Disable all network connectivity",
      "Only filter encrypted traffic"
    ],
    answer: "Block unnecessary inbound connections and restrict outbound traffic"
  },
  {
    question: "The advantage of host-based firewalls over network firewalls is:",
    options: [
      "Protection persists even when systems leave the corporate network",
      "They replace all other security controls",
      "They require no configuration",
      "They only work on servers"
    ],
    answer: "Protection persists even when systems leave the corporate network"
  },
  
  // HIPS (Host-based Intrusion Prevention System)
  {
    question: "What is the function of a Host-based Intrusion Prevention System (HIPS)?",
    options: [
      "To detect and actively block suspicious behavior and exploits on hosts",
      "To provide internet connectivity",
      "To manage encryption keys only",
      "To create user accounts"
    ],
    answer: "To detect and actively block suspicious behavior and exploits on hosts"
  },
  {
    question: "HIPS differs from HIDS (Host Intrusion Detection System) because:",
    options: [
      "HIPS actively blocks threats; HIDS only alerts on suspicious activity",
      "They are identical systems",
      "HIDS is more proactive",
      "HIPS only monitors, never blocks"
    ],
    answer: "HIPS actively blocks threats; HIDS only alerts on suspicious activity"
  },
  {
    question: "HIPS can protect against:",
    options: [
      "Buffer overflows, privilege escalation, and zero-day exploits",
      "Only known malware signatures",
      "Only network attacks",
      "Only physical threats"
    ],
    answer: "Buffer overflows, privilege escalation, and zero-day exploits"
  },
  {
    question: "Application control in HIPS works by:",
    options: [
      "Monitoring application behavior and blocking anomalous actions",
      "Installing all applications automatically",
      "Disabling all software",
      "Only scanning files"
    ],
    answer: "Monitoring application behavior and blocking anomalous actions"
  },
  
  // Disabling Ports/Protocols
  {
    question: "Why is disabling unused ports and protocols important for hardening?",
    options: [
      "They represent potential attack vectors that can be exploited",
      "They consume too much RAM",
      "They delete log files automatically",
      "They slow down the network"
    ],
    answer: "They represent potential attack vectors that can be exploited"
  },
  {
    question: "Which protocols should typically be disabled due to security weaknesses?",
    options: [
      "Telnet, FTP, SNMPv1/v2, and SMBv1",
      "HTTPS, SSH, and SFTP",
      "TLS 1.3 and IPSec",
      "DNS and DHCP"
    ],
    answer: "Telnet, FTP, SNMPv1/v2, and SMBv1"
  },
  {
    question: "Disabling SMBv1 helps prevent attacks like:",
    options: [
      "WannaCry and NotPetya ransomware that exploited EternalBlue",
      "SQL injection",
      "Cross-site scripting",
      "Phishing emails"
    ],
    answer: "WannaCry and NotPetya ransomware that exploited EternalBlue"
  },
  {
    question: "Port 23 (Telnet) should be disabled because:",
    options: [
      "It transmits credentials and data in plaintext without encryption",
      "It uses too much bandwidth",
      "It's required for all remote access",
      "It provides the best security"
    ],
    answer: "It transmits credentials and data in plaintext without encryption"
  },
  {
    question: "To identify unnecessary open ports, administrators should:",
    options: [
      "Use port scanning tools and review netstat output regularly",
      "Leave all ports open by default",
      "Never scan systems",
      "Disable all network connectivity"
    ],
    answer: "Use port scanning tools and review netstat output regularly"
  },
  {
    question: "After disabling unnecessary services, what should be verified?",
    options: [
      "That required applications still function correctly",
      "That all services are disabled",
      "That no monitoring occurs",
      "That encryption is removed"
    ],
    answer: "That required applications still function correctly"
  },
  
  // Default Password Changes
  {
    question: "Why must default passwords be changed as a hardening step?",
    options: [
      "Default credentials are publicly known and easily exploited by attackers",
      "They provide the best security",
      "They are randomly generated",
      "They cannot be discovered"
    ],
    answer: "Default credentials are publicly known and easily exploited by attackers"
  },
  {
    question: "Devices most commonly shipped with default passwords include:",
    options: [
      "IoT devices, network equipment, and industrial control systems",
      "Only desktop computers",
      "Only mobile phones",
      "Only software applications"
    ],
    answer: "IoT devices, network equipment, and industrial control systems"
  },
  {
    question: "Common default credentials like 'admin/admin' or 'admin/password' are:",
    options: [
      "Widely documented and used in automated attack tools",
      "Secure and recommended",
      "Unknown to attackers",
      "Randomly generated per device"
    ],
    answer: "Widely documented and used in automated attack tools"
  },
  {
    question: "The Mirai botnet primarily exploited:",
    options: [
      "IoT devices with unchanged default passwords",
      "Zero-day vulnerabilities only",
      "Social engineering attacks",
      "Physical security weaknesses"
    ],
    answer: "IoT devices with unchanged default passwords"
  },
  {
    question: "When changing default passwords, organizations should:",
    options: [
      "Use strong, unique passwords that meet complexity requirements",
      "Use simple passwords for convenience",
      "Keep the default username",
      "Share passwords across devices"
    ],
    answer: "Use strong, unique passwords that meet complexity requirements"
  },
  {
    question: "Default passwords should be changed:",
    options: [
      "Immediately upon initial device configuration before production use",
      "After the first security incident",
      "Never, as they're secure",
      "Only if the device is compromised"
    ],
    answer: "Immediately upon initial device configuration before production use"
  },
  
  // Removal of Unnecessary Software
  {
    question: "How does removing unnecessary software improve security?",
    options: [
      "It reduces the attack surface by eliminating potential vulnerabilities",
      "It increases file transfer speeds",
      "It prevents all hardware failures",
      "It improves graphics performance"
    ],
    answer: "It reduces the attack surface by eliminating potential vulnerabilities"
  },
  {
    question: "Bloatware and pre-installed applications should be removed because:",
    options: [
      "They may contain vulnerabilities and increase the system's attack surface",
      "They always improve performance",
      "They provide essential security",
      "They cannot be exploited"
    ],
    answer: "They may contain vulnerabilities and increase the system's attack surface"
  },
  {
    question: "Unnecessary services running on servers should be:",
    options: [
      "Disabled or uninstalled to minimize exposure",
      "Left running for potential future use",
      "Configured to start automatically",
      "Given administrative privileges"
    ],
    answer: "Disabled or uninstalled to minimize exposure"
  },
  {
    question: "The principle of 'least functionality' means:",
    options: [
      "Systems should only run software and services required for their purpose",
      "All software should be installed",
      "Maximum features should be enabled",
      "Functionality doesn't matter for security"
    ],
    answer: "Systems should only run software and services required for their purpose"
  },
  {
    question: "Before removing software, administrators should:",
    options: [
      "Verify it's not required by critical applications or business processes",
      "Remove everything immediately",
      "Never remove any software",
      "Disable security tools first"
    ],
    answer: "Verify it's not required by critical applications or business processes"
  },
  {
    question: "Removing legacy protocols and unused Windows features helps:",
    options: [
      "Reduce exposure to known vulnerabilities in old code",
      "Improve backwards compatibility",
      "Enable all services",
      "Disable security features"
    ],
    answer: "Reduce exposure to known vulnerabilities in old code"
  },

  // === COMPREHENSIVE SCENARIO-BASED QUESTIONS ===
  
  {
    question: "A company wants to prevent malware from spreading between departments. Which mitigation technique is MOST appropriate?",
    options: [
      "Network segmentation with inter-segment firewall rules",
      "Installing antivirus only",
      "Disabling all network connectivity",
      "Using only encryption"
    ],
    answer: "Network segmentation with inter-segment firewall rules"
  },
  {
    question: "An administrator discovers all workstations run with local administrator rights. Which principle is violated?",
    options: [
      "Least privilege",
      "Encryption",
      "Segmentation",
      "Monitoring"
    ],
    answer: "Least privilege"
  },
  {
    question: "A server allows execution of any uploaded files. Which hardening technique would prevent malicious code execution?",
    options: [
      "Application allow list and file execution policies",
      "Only encryption",
      "Only monitoring",
      "Only patching"
    ],
    answer: "Application allow list and file execution policies"
  },
  {
    question: "Laptops are frequently stolen with sensitive data. Which mitigation provides the BEST protection?",
    options: [
      "Full-disk encryption (FDE)",
      "Application allow lists",
      "Network segmentation",
      "Configuration baselines"
    ],
    answer: "Full-disk encryption (FDE)"
  },
  {
    question: "Systems are deviating from security baselines without detection. Which technique addresses this?",
    options: [
      "Automated configuration enforcement and compliance scanning",
      "Manual checks once per year",
      "Disabling all policies",
      "Removing all baselines"
    ],
    answer: "Automated configuration enforcement and compliance scanning"
  },
  {
    question: "An APT campaign went undetected for months. Which capability was missing?",
    options: [
      "Continuous monitoring and behavioral analytics",
      "Only antivirus",
      "Only firewall rules",
      "Only encryption"
    ],
    answer: "Continuous monitoring and behavioral analytics"
  },
  {
    question: "A vulnerability scanner finds 50 missing patches. How should they be prioritized?",
    options: [
      "Critical vulnerabilities on internet-facing systems first",
      "Apply all simultaneously without testing",
      "Start with non-critical internal systems",
      "Ignore all patches"
    ],
    answer: "Critical vulnerabilities on internet-facing systems first"
  },
  {
    question: "Old servers still run Windows Server 2003 in production. Which two techniques should be combined?",
    options: [
      "Decommissioning (migrate to supported OS) and isolation until migration",
      "Do nothing",
      "Only install antivirus",
      "Open all firewall ports"
    ],
    answer: "Decommissioning (migrate to supported OS) and isolation until migration"
  },
  {
    question: "A malware sample is discovered. Which hardening technique would have BEST prevented initial execution?",
    options: [
      "Application allow list blocking unauthorized executables",
      "Only network segmentation",
      "Only encryption",
      "Only monitoring (detection, not prevention)"
    ],
    answer: "Application allow list blocking unauthorized executables"
  },
  {
    question: "Developers need production database access for troubleshooting. How should access be granted following security best practices?",
    options: [
      "Just-in-Time (JIT) access with read-only permissions and logging",
      "Permanent full administrative access",
      "No access controls",
      "Shared admin passwords"
    ],
    answer: "Just-in-Time (JIT) access with read-only permissions and logging"
  },
  {
    question: "After a breach, forensics reveals the attacker moved from a workstation to servers. Which mitigation would have helped?",
    options: [
      "Network segmentation and least privilege reducing lateral movement",
      "Only endpoint antivirus",
      "Only strong passwords",
      "Only physical security"
    ],
    answer: "Network segmentation and least privilege reducing lateral movement"
  },
  {
    question: "IoT devices on the network have known vulnerabilities with no patches available. Which approach is BEST?",
    options: [
      "Isolate to dedicated VLAN with restricted access and monitoring",
      "Leave on production network",
      "Disable all security controls",
      "Connect directly to the internet"
    ],
    answer: "Isolate to dedicated VLAN with restricted access and monitoring"
  },
  {
    question: "A ransomware incident encrypted critical files. Which combination would have BEST minimized impact?",
    options: [
      "Encryption (FDE), segmentation, and offline backups",
      "Only antivirus",
      "Only firewalls",
      "Only user training"
    ],
    answer: "Encryption (FDE), segmentation, and offline backups"
  },
  {
    question: "An audit finds Telnet, FTP, and SMBv1 enabled across all servers. Which hardening steps are needed?",
    options: [
      "Disable insecure protocols, enable SSH/SFTP, upgrade to SMBv3",
      "Leave everything unchanged",
      "Disable all networking",
      "Remove all encryption"
    ],
    answer: "Disable insecure protocols, enable SSH/SFTP, upgrade to SMBv3"
  },
  {
    question: "Third-party contractors need temporary access to specific systems. Best practice is:",
    options: [
      "Separate contractor accounts with Just-in-Time access and monitoring",
      "Share employee credentials",
      "Grant permanent Domain Admin rights",
      "No access controls"
    ],
    answer: "Separate contractor accounts with Just-in-Time access and monitoring"
  },

  // === COMPARISON AND RELATIONSHIP QUESTIONS ===
  
  {
    question: "Compare segmentation and isolation: What's the key difference?",
    options: [
      "Segmentation divides networks into zones; isolation completely separates systems",
      "They are identical techniques",
      "Isolation is less restrictive",
      "Segmentation provides complete air gaps"
    ],
    answer: "Segmentation divides networks into zones; isolation completely separates systems"
  },
  {
    question: "Which provides STRONGER protection: allow list or deny list?",
    options: [
      "Allow list (permits only known-good vs blocking known-bad)",
      "Deny list",
      "They are equally effective",
      "Neither provides protection"
    ],
    answer: "Allow list (permits only known-good vs blocking known-bad)"
  },
  {
    question: "Encryption at rest vs encryption in transit: When is each needed?",
    options: [
      "At rest for stored data protection; in transit for network communication security",
      "Only at rest is needed",
      "Only in transit is needed",
      "They are the same thing"
    ],
    answer: "At rest for stored data protection; in transit for network communication security"
  },
  {
    question: "Defense-in-depth means:",
    options: [
      "Layering multiple security controls so if one fails, others still protect",
      "Using only one strong security control",
      "Relying solely on perimeter defenses",
      "Disabling all redundant controls"
    ],
    answer: "Layering multiple security controls so if one fails, others still protect"
  },
  {
    question: "Compare host-based firewall vs network firewall: Which provides protection when users work remotely?",
    options: [
      "Host-based firewall (travels with the device)",
      "Network firewall only",
      "Neither works remotely",
      "They are identical"
    ],
    answer: "Host-based firewall (travels with the device)"
  },
  {
    question: "Preventive vs detective controls: Classify these techniques correctly:",
    options: [
      "Preventive: encryption, allow lists, segmentation; Detective: monitoring, logging",
      "All are preventive only",
      "All are detective only",
      "Monitoring prevents and encryption detects"
    ],
    answer: "Preventive: encryption, allow lists, segmentation; Detective: monitoring, logging"
  },
  {
    question: "Which mitigation technique has the LEAST operational overhead?",
    options: [
      "Encryption at rest (once configured, automatic)",
      "Application allow lists (constant updates)",
      "Continuous monitoring (ongoing analysis)",
      "Manual patching (frequent intervention)"
    ],
    answer: "Encryption at rest (once configured, automatic)"
  },
  {
    question: "For Zero Trust architecture, which techniques are MOST critical?",
    options: [
      "Microsegmentation, least privilege, and continuous monitoring",
      "Only perimeter firewalls",
      "Only antivirus",
      "Only encryption"
    ],
    answer: "Microsegmentation, least privilege, and continuous monitoring"
  },
  {
    question: "Rank these by implementation complexity (easiest to hardest):",
    options: [
      "Default password changes → Patching → Segmentation → Application allow lists",
      "All are equally complex",
      "Application allow lists are easiest",
      "Default passwords are hardest"
    ],
    answer: "Default password changes → Patching → Segmentation → Application allow lists"
  },
  {
    question: "Which combination provides the STRONGEST defense against ransomware?",
    options: [
      "Segmentation + allow lists + monitoring + offline backups",
      "Only antivirus",
      "Only firewalls",
      "Only user training"
    ],
    answer: "Segmentation + allow lists + monitoring + offline backups"
  },
  {
    question: "When implementing least privilege, which should be done FIRST?",
    options: [
      "Document current permissions and identify what's actually needed",
      "Remove all permissions immediately",
      "Grant everyone administrator access",
      "Disable all accounts"
    ],
    answer: "Document current permissions and identify what's actually needed"
  },
  {
    question: "Configuration enforcement without monitoring is:",
    options: [
      "Incomplete (can't detect drift or policy violations)",
      "Perfect security",
      "Better than both together",
      "Unnecessary"
    ],
    answer: "Incomplete (can't detect drift or policy violations)"
  },
  {
    question: "Which hardening technique is MOST effective against zero-day exploits?",
    options: [
      "Application allow lists (prevent unauthorized code execution)",
      "Signature-based antivirus only",
      "Patching (no patch exists yet)",
      "Default password changes"
    ],
    answer: "Application allow lists (prevent unauthorized code execution)"
  },
  {
    question: "Effective segmentation requires:",
    options: [
      "Clear zone definitions, firewall rules, and monitoring of inter-zone traffic",
      "Only VLANs with no firewalls",
      "Physical separation only",
      "No access controls"
    ],
    answer: "Clear zone definitions, firewall rules, and monitoring of inter-zone traffic"
  },
  {
    question: "The relationship between least privilege and monitoring is:",
    options: [
      "Complementary: least privilege limits access; monitoring detects misuse",
      "Mutually exclusive",
      "Identical techniques",
      "Conflicting approaches"
    ],
    answer: "Complementary: least privilege limits access; monitoring detects misuse"
  }
]