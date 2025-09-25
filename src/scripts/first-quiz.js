// #1 Quiz - First set of 30 questions with SY0-701 objective codes
export const firstQuiz = [
  {
    question: "Which technique gathers publicly available data about a target without directly probing its internal network?",
    options: ["Passive Reconnaissance", "Vulnerability Scanning", "Supply Chain Analysis", "Regulatory Audit"],
    answer: "Passive Reconnaissance",
    objective: "Domain 5.5 – Audits & Assessments (Reconnaissance: Passive vs Active)"
  },
  {
    question: "Which email security protocol lets domain owners specify how to handle unauthenticated emails (reject or quarantine)?",
    options: ["SPF", "NAC", "DMARC", "DKIM"],
    answer: "DMARC",
    objective: "Domain 4.6 – Identity & Access Management (Email Security: DMARC/DKIM/SPF)"
  },
  {
    question: "Cyber-attacks motivated primarily by financial gain are most often attributed to which group?",
    options: ["Organized Crime", "Hacktivists", "Nation-State Actors", "Shadow IT"],
    answer: "Organized Crime",
    objective: "Domain 2.1 – Threat Actors & Motivations"
  },
  {
    question: "Which process identifies the underlying cause of a system or security issue?",
    options: ["Root-Cause Analysis", "E-Discovery", "Risk Appetite", "Data Subject"],
    answer: "Root-Cause Analysis",
    objective: "Domain 4.8 – Incident Response / Root Cause Analysis"
  },
  {
    question: "In mission-critical networks such as emergency services, which factor is typically the top priority in terms of security architecture?",
    options: ["Integration Costs", "Patch Availability", "System Availability", "Power Usage"],
    answer: "System Availability",
    objective: "Domain 3.2 – Security Architecture (Resilience & High Availability)"
  },
  {
    question: "Configuring compliance checks and security tasks without manual intervention is achieved through:",
    options: ["Maintenance Windows", "Attestation and Acknowledgment", "Automation", "External Audits"],
    answer: "Automation",
    objective: "Domain 4.7 – Security Operations (Automation & Orchestration)"
  },
  {
    question: "True or False: Operating system security policies can be configured to block actions like using external USB drives.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.1 – Endpoint Security / Hardening"
  },
  {
    question: "Which term refers to requirements enforced by regulatory bodies to ensure compliance?",
    options: ["Regulated", "Trade Secrets", "Obfuscated", "Data in Use"],
    answer: "Regulated",
    objective: "Domain 5.3 – Security Compliance"
  },
  {
    question: "What is authentication through affiliation with an approved external organization called?",
    options: ["802.1X", "Federation", "EAP", "SSO"],
    answer: "Federation",
    objective: "Domain 4.6 – Identity & Access Management (Federation)"
  },
  {
    question: "Which metric defines the maximum acceptable downtime after an incident before unacceptable disruption occurs?",
    options: ["MTBF", "MTTR", "RTO", "RPO"],
    answer: "RTO",
    objective: "Domain 5.1 – Business Continuity & Disaster Recovery (RTO/RPO)"
  },
  {
    question: "Which document outlines specific tasks and deliverables in a contract or project?",
    options: ["SLA", "SOW", "MOA", "NDA"],
    answer: "SOW",
    objective: "Domain 5.4 – Third-Party Risk / Contracts"
  },
  {
    question: "Which principle in the CIA Triad ensures trust in data accuracy and consistency?",
    options: ["Confidentiality", "Availability", "Integrity", "Authentication"],
    answer: "Integrity",
    objective: "Domain 1.2 – General Security Concepts (CIA Triad)"
  },
  {
    question: "Which three make up the CIA Triad?",
    options: ["Confidentiality, Integrity, Authentication", "Confidentiality, Integrity, Availability", "Confidentiality, Authentication, Availability", "Integrity, Authentication, Availability"],
    answer: "Confidentiality, Integrity, Availability",
    objective: "Domain 1.2 – General Security Concepts (CIA Triad)"
  },
  {
    question: "Which term best describes a timing or synchronization flaw that could cause a boot-loop?",
    options: ["Memory Injection", "Race Condition", "Malicious Update", "Resource Consumption"],
    answer: "Race Condition",
    objective: "Domain 2.3 – Vulnerabilities (Race Conditions)"
  },
  {
    question: "True or False: Platform diversity can help mitigate risks associated with monolithic system architectures.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.4 – Security Architecture (Resilience & Diversity)"
  },
  {
    question: "True or False: Key escrow involves a trusted third party storing and managing digital encryption keys.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (Key Management / Escrow)"
  },
  {
    question: "True or False: Record-level encryption encrypts individual database records, while column-level encryption encrypts specific fields.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (Data Protection Levels)"
  },
  {
    question: "When recovering from a corrupted database, which is best for restoring the most recent transactions?",
    options: ["Off-Site Backups", "Journaling", "Replication Copies", "RAID Data Files"],
    answer: "Journaling",
    objective: "Domain 3.4 – Resilience (Backups, Replication, Journaling)"
  },
  {
    question: "Which technology is used to manage security policies for mobile devices in a corporate environment?",
    options: ["Segmentation", "Biometrics", "COPE", "MDM"],
    answer: "MDM",
    objective: "Domain 4.1 – Mobile Device Security (MDM)"
  },
  {
    question: "Which term defines a situation where a problem exists but is not detected by a security control?",
    options: ["False Positive", "False Negative", "True Positive", "True Negative"],
    answer: "False Negative",
    objective: "Domain 4.3 – Vulnerability Management (False Positives/Negatives)"
  },
  {
    question: "True or False: 802.1X requires an authentication server to validate devices or users before granting network access.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Architecture & Access Control (802.1X)"
  },
  {
    question: "Which of the following is a wireless security protocol providing stronger encryption?",
    options: ["PSK - Pre-Shared Key", "WPA3 - Wi-Fi Protected Access 3", "WEP - Wired Equivalent Privacy", "WPA - Wi-Fi Protected Access"],
    answer: "WPA3 - Wi-Fi Protected Access 3",
    objective: "Domain 4.1 – Wireless Security (WPA3)"
  },
  {
    question: "An access control method that evaluates multiple user or resource attributes to make authorization decisions is called:",
    options: ["Role-Based Access Control", "Attribute-Based Access Control", "Mandatory Access Control", "Discretionary Access Control"],
    answer: "Attribute-Based Access Control",
    objective: "Domain 4.6 – Access Control Models (ABAC)"
  },
  {
    question: "True or False: Smishing is a form of phishing that uses SMS text messages.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.2 – Social Engineering Threats (Phishing/Smishing)"
  },
  {
    question: "True or False: DNS poisoning can redirect users to malicious destinations.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.4 – Network Attacks (DNS Poisoning)"
  },
  {
    question: "True or False: A hybrid cloud model can introduce mismatches in network protections.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Cloud & Virtualization Security (Hybrid Cloud Risks)"
  },
  {
    question: "Which attack reuses captured authentication data to gain unauthorized access?",
    options: ["SQL Injection", "Replay Attack", "Cross-Site Scripting", "Buffer Overflow"],
    answer: "Replay Attack",
    objective: "Domain 2.4 – Attack Types (Replay Attacks)"
  },
  {
    question: "True or False: Jailbreaking (iOS) or rooting (Android) a mobile device allows access to OS features not normally available to users.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.3 – Mobile Device Vulnerabilities (Jailbreaking/Rooting)"
  },
  {
    question: "Which of the following is an example of a disaster recovery exercise?",
    options: ["Business Impact Analysis", "Capacity Planning", "Tabletop Exercise", "Continuity of Operations"],
    answer: "Tabletop Exercise",
    objective: "Domain 3.4 – Resilience & Recovery (Testing / Exercises)"
  },
  {
    question: "True or False: Data masking can hide sensitive data using substitution, shuffling, or encryption.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography / Data Protection (Masking)"
  }
];


//OLD
// #1 Quiz - First set of 30 questions
// export const firstQuiz = [
// {
// question: "Which technique gathers public data about a target without accessing its internal network?",
// options: ["Passive Reconnaissance", "Vulnerability Scanning", "Supply Chain Analysis", "Regulatory Audit"],
// answer: "Passive Reconnaissance"
// },
// {
// question: "Which email security protocol is used to assign a policy to unauthorized emails from external sources?",
// options: ["SPF (Sender Policy Framework)", "NAC (Network Access Control)", "DMARC (Domain-based Message Authentication Reporting and Conformance)", "DKIM (Domain Keys Identified Mail)"],
// answer: "DMARC (Domain-based Message Authentication Reporting and Conformance)"
// },
// {
// question: "Cyber-attacks that are driven by financial gain are usually associated with which group?",
// options: ["Organized Crime", "Hacktivist", "Nation State", "Shadow I.T"],
// answer: "Organized Crime"
// },
// {
// question: "Which represents the precise cause of a computer issue?",
// options: ["Root-Cause Analysis", "E-Discovery", "Risk Appetite", "Data Subject"],
// answer: "Root-Cause Analysis"
// },
// {
// question: "What is considered the highest priority in IT networks for emergency services?",
// options: ["Integration Costs", "Patch Availability", "System Availability", "Power Usage"],
// answer: "System Availability"
// },
// {
// question: "Configuring compliance checks without the need for manual interaction is possible through what?",
// options: ["Maintenance Window", "Attestation and Acknowledgment", "Automation", "External Audit"],
// answer: "Automation"
// },
// {
// question: "Can configuration of an operating system's security policies prevent actions like using external USB drives?",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "What term refers to legally enforced quality control checking?",
// options: ["Regulated", "Trade Secrets", "Obfuscated", "Data in Use"],
// answer: "Regulated"
// },
// {
// question: "What is authentication through affiliation with an approved organization called?",
// options: ["802.1X", "Federation", "EAP", "SSO"],
// answer: "Federation"
// },
// {
// question: "What is the maximum acceptable amount of downtime after an incident before unacceptable disruption occurs?",
// options: ["MTBF - Mean Time Between Failures", "MTTR - Mean Time to Repair", "RTO - Recovery Time Objective", "RPO - Recovery Point Objective"],
// answer: "RTO - Recovery Time Objective"
// },
// {
// question: "Which document lists specific tasks required for internal systems and operations?",
// options: ["SLA - Service Level Agreement", "SOW - Statement Of Work", "MOA - Memorandum of Agreement", "NDA - Non Disclosure Agreement"],
// answer: "SOW - Statement Of Work"
// },
// {
// question: "Which principle in the CIA Triad refers to trust in data accuracy and consistency?",
// options: ["Confidentiality", "Availability", "Integrity", "Authentication"],
// answer: "Integrity"
// },
// {
// question: "Which three make up the CIA Triad?",
// options: ["Confidentiality, Integrity, Authentication", "Confidentiality, Integrity, Availability"],
// answer: "Confidentiality, Integrity, Availability"
// },
// {
// question: "Which term could describe a boot-loop caused by a synchronization issue?",
// options: ["Memory Injection", "Race Condition", "Malicious Update", "Resource Consumption"],
// answer: "Race Condition"
// },
// {
// question: "Platform diversity can help mitigate issues associated with monolithic system architectures.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Key escrow is the storing and management of digital keys by a third party.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Record-level encryption allows only specific database fields or columns to be encrypted.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "In the event of a corrupted database, which is the best source to recover related data?",
// options: ["RAID data files", "Off-Site Backups", "Journaling", "Replication copies"],
// answer: "Journaling"
// },
// {
// question: "Which framework is used to manage security policies for mobile devices in corporate environments?",
// options: ["Segmentation", "Biometrics", "COPE - Corporate Owned Personally Enabled", "MDM - Mobile Device Management"],
// answer: "MDM - Mobile Device Management"
// },
// {
// question: "Which term defines a situation where an issue is not detected when it actually exists?",
// options: ["False Positive", "False Negative"],
// answer: "False Negative"
// },
// {
// question: "Does 802.1X implement an authentication server?",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Which is considered an encryption protocol?",
// options: ["PSK - Pre-Shared Key", "WPA3 - Wi-Fi Protected Access 3"],
// answer: "WPA3 - Wi-Fi Protected Access 3"
// },
// {
// question: "An access control that uses multiple parameters to authorize a user is called:",
// options: ["Role-Based", "Attribute-Based", "Mandatory", "Discretionary"],
// answer: "Attribute-Based"
// },
// {
// question: "Smishing is a form of SMS phishing.",
// options: ["False", "True"],
// answer: "True"
// },
// {
// question: "DNS poisoning can redirect users to malicious destinations.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "A hybrid cloud model can have mismatches in network protections.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Replay attacks involve reusing captured authentication data.",
// options: ["SQL Injection", "Replay Attack"],
// answer: "Replay Attack"
// },
// {
// question: "Jailbreaking allows access to OS features not normally available.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Which is an example of a disaster recovery exercise?",
// options: ["Business Impact Analysis", "Capacity Planning", "Tabletop Exercise", "Continuity of Operations"],
// answer: "Tabletop Exercise"
// },
// {
// question: "Data masking hides data using substitution, shuffling, or encryption.",
// options: ["False", "True"],
// answer: "True"
// }];