const quizDataArrays = [
  {
    question: "Which technique gathers public data about a target without accessing its internal network?",
    options: ["Passive Reconnaissance", "Vulnerability Scanning", "Supply Chain Analysis", "Regulatory Audit"],
    answer: "Passive Reconnaissance"
  },
  {
    question: "Which email security protocol is used to assign a policy to unauthorized emails from external sources?",
    options: ["SPF (Sender Policy Framework)", "NAC (Network Access Control)", "DMARC (Domain-based Message Authentication Reporting and Conformance)", "DKIM (Domain Keys Identified Mail)"],
    answer: "DMARC (Domain-based Message Authentication Reporting and Conformance)"
  },
  {
    question: "Cyber-attacks that are driven by financial gain are usually associated with which group?",
    options: ["Organized Crime", "Hacktivist", "Nation State", "Shadow I.T"],
    answer: "Organized Crime"
  },
//   {
//     question: "Which represents the precise cause of a computer issue?",
//     options: ["Root-Cause Analysis", "E-Discovery", "Risk Appetite", "Data Subject"],
//     answer: "Root-Cause Analysis"
//   },
//   {
//     question: "What is considered the highest priority in IT networks for emergency services?",
//     options: ["Integration Costs", "Patch Availability", "System Availability", "Power Usage"],
//     answer: "System Availability"
//   },
//   {
//     question: "Configuring compliance checks without the need for manual interaction is possible through what?",
//     options: ["Maintenance Window", "Attestation and Acknowledgment", "Automation", "External Audit"],
//     answer: "Automation"
//   },
//   {
//     question: "Can configuration of an operating system's security policies prevent actions like using external USB drives?",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "What term refers to legally enforced quality control checking?",
//     options: ["Regulated", "Trade Secrets", "Obfuscated", "Data in Use"],
//     answer: "Regulated"
//   },
//   {
//     question: "What is authentication through affiliation with an approved organization called?",
//     options: ["802.1X", "Federation", "EAP", "SSO"],
//     answer: "Federation"
//   },
//   {
//     question: "What is the maximum acceptable amount of downtime after an incident before unacceptable disruption occurs?",
//     options: ["MTBF - Mean Time Between Failures", "MTTR - Mean Time to Repair", "RTO - Recovery Time Objective", "RPO - Recovery Point Objective"],
//     answer: "RTO - Recovery Time Objective"
//   },
//   {
//     question: "Which document lists specific tasks required for internal systems and operations?",
//     options: ["SLA - Service Level Agreement", "SOW - Statement Of Work", "MOA - Memorandum of Agreement", "NDA - Non Disclosure Agreement"],
//     answer: "SOW - Statement Of Work"
//   },
//   {
//     question: "Which principle in the CIA Triad refers to trust in data accuracy and consistency?",
//     options: ["Confidentiality", "Availability", "Integrity", "Authentication"],
//     answer: "Integrity"
//   },
//   {
//     question: "Which three make up the CIA Triad?",
//     options: ["Confidentiality, Integrity, Authentication", "Confidentiality, Integrity, Availability"],
//     answer: "Confidentiality, Integrity, Availability"
//   },
//   {
//     question: "Which term could describe a boot-loop caused by a synchronization issue?",
//     options: ["Memory Injection", "Race Condition", "Malicious Update", "Resource Consumption"],
//     answer: "Race Condition"
//   },
//   {
//     question: "Platform diversity can help mitigate issues associated with monolithic system architectures.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Key escrow is the storing and management of digital keys by a third party.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Record-level encryption allows only specific database fields or columns to be encrypted.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "In the event of a corrupted database, which is the best source to recover related data?",
//     options: ["RAID data files", "Off-Site Backups", "Journaling", "Replication copies"],
//     answer: "Journaling"
//   },
//   {
//     question: "Which framework is used to manage security policies for mobile devices in corporate environments?",
//     options: ["Segmentation", "Biometrics", "COPE - Corporate Owned Personally Enabled", "MDM - Mobile Device Management"],
//     answer: "MDM - Mobile Device Management"
//   },
//   {
//     question: "Which term defines a situation where an issue is not detected when it actually exists?",
//     options: ["False Positive", "False Negative"],
//     answer: "False Negative"
//   },
//   {
//     question: "Does 802.1X implement an authentication server?",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Which is considered an encryption protocol?",
//     options: ["PSK - Pre-Shared Key", "WPA3 - Wi-Fi Protected Access 3"],
//     answer: "WPA3 - Wi-Fi Protected Access 3"
//   },
//   {
//     question: "An access control that uses multiple parameters to authorize a user is called:",
//     options: ["Role-Based", "Attribute-Based", "Mandatory", "Discretionary"],
//     answer: "Attribute-Based"
//   },
//   {
//     question: "Smishing is a form of SMS phishing.",
//     options: ["False", "True"],
//     answer: "True"
//   },
//   {
//     question: "DNS poisoning can redirect users to malicious destinations.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "A hybrid cloud model can have mismatches in network protections.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Replay attacks involve reusing captured authentication data.",
//     options: ["SQL Injection", "Replay Attack"],
//     answer: "Replay Attack"
//   },
//   {
//     question: "Jailbreaking allows access to OS features not normally available.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Which is an example of a disaster recovery exercise?",
//     options: ["Business Impact Analysis", "Capacity Planning", "Tabletop Exercise", "Continuity of Operations"],
//     answer: "Tabletop Exercise"
//   },
//   {
//     question: "Data masking hides data using substitution, shuffling, or encryption.",
//     options: ["False", "True"],
//     answer: "True"
//   },

//   {
//     question: "What does SCADA stand for in the context of industrial control systems?",
//     options: [
//       "Supervisory Control and Data Analysis",
//       "System Control and Data Acquisition",
//       "Supervisory Control and Data Acquisition",
//       "System Communication and Digital Automation"
//     ],
//     answer: "Supervisory Control and Data Acquisition"
//   },
//   {
//     question: "Password spraying is similar to brute force attacks but limits the number of login attempts to avoid detection.",
//     options: ["False", "True"],
//     answer: "True"
//   },
//   {
//     question: "Which is most related to a downgrade attack?",
//     options: ["Hacking passwords", "Hacking encryption"],
//     answer: "Hacking encryption"
//   },
//   {
//     question: "Blockchain technology provides distributed ledger capabilities.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "A responsibility matrix is often associated with which type of environment?",
//     options: ["Cloud services", "Local services"],
//     answer: "Cloud services"
//   },
//   {
//     question: "A buffer overflow occurs when an attacker sends more data than expected to a program or API.",
//     options: ["False", "True"],
//     answer: "True"
//   },
//   {
//     question: "Can an on-path attack be detected by a host-based firewall?",
//     options: ["False", "True"],
//     answer: "False"
//   },
//   {
//     question: "Which NGFW service optimizes secure remote access to cloud-based services?",
//     options: [
//       "RTOS - Real Time Operating System",
//       "SASE - Secure Access Service Edge",
//       "CRL - Certificate Revocation List",
//       "Zero-Trust"
//     ],
//     answer: "SASE - Secure Access Service Edge"
//   },
//   {
//     question: "A security awareness campaign often includes user-reported incidents.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "In cloud computing, an IaC (Infrastructure as Code) file defines the system architecture.",
//     options: ["False", "True"],
//     answer: "True"
//   },
//   {
//     question: "Change management helps reduce risks from application updates and changes.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Which security technique involves adding random values to data before hashing?",
//     options: ["Salting", "Key Stretching", "Digital Signature", "Obfuscation"],
//     answer: "Salting"
//   },
//   {
//     question: "What is the process of hiding data within another file type (e.g., .txt in .jpg)?",
//     options: ["Hashing", "Steganography"],
//     answer: "Steganography"
//   },
//   {
//     question: "Which technique encrypts data and allows it to be decrypted later?",
//     options: ["Symmetric Encryption", "Hashing"],
//     answer: "Symmetric Encryption"
//   },
//   {
//     question: "Which standard manages vulnerability definitions across all security controls?",
//     options: [
//       "SCAP - Security Content Automation Protocol",
//       "SCAP - Security Control Automation Protocol"
//     ],
//     answer: "SCAP - Security Content Automation Protocol"
//   },
//   {
//     question: "Who is responsible for managing access rights to a database?",
//     options: ["Data Custodian", "Data Processor", "Data Subject"],
//     answer: "Data Custodian"
//   },
//   {
//     question: "Labeling data as private is part of expanded privacy compliance.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "What does HSM stand for?",
//     options: ["Hashing Security Module", "Hardware Security Module"],
//     answer: "Hardware Security Module"
//   },
//   {
//     question: "What does ALE stand for?",
//     options: ["Annual Lease Expectancy", "Annual Loss Expectancy"],
//     answer: "Annual Loss Expectancy"
//   },
//   {
//     question: "What does RTO stand for?",
//     options: ["Repair Time Objective", "Recovery Time Objective"],
//     answer: "Recovery Time Objective"
//   },
//   {
//     question: "What does ARO stand for?",
//     options: ["Annualized Rate of Occupation", "Annualized Rate of Occurrence"],
//     answer: "Annualized Rate of Occurrence"
//   },
//   {
//     question: "What does SLE stand for?",
//     options: ["Single Lease Expectancy", "Single Loss Expectancy"],
//     answer: "Single Loss Expectancy"
//   },
//   {
//     question: "Which is true about SSL stripping?",
//     options: [
//       "It modifies web addresses to disallow access to encrypted data.",
//       "It modifies web addresses to allow access to unencrypted data."
//     ],
//     answer: "It modifies web addresses to allow access to unencrypted data."
//   },
//   {
//     question: "Malware that activates upon a specific event is known as a logic bomb.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "A keylogger may also interfere with network traffic.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Which is true about IPsec?",
//     options: [
//       "IPsec is a protocol suite for authenticating and encrypting network communication.",
//       "IPsec is a protocol suite for confirming a network connection."
//     ],
//     answer: "IPsec is a protocol suite for authenticating and encrypting network communication."
//   },
//   {
//     question: "Which is true about SPF?",
//     options: [
//       "SPF stands for Security Policy Framework.",
//       "SPF stands for Sender Policy Framework."
//     ],
//     answer: "SPF stands for Sender Policy Framework."
//   },
//   {
//     question: "Which is true about DMARC?",
//     options: [
//       "DMARC stands for Domain-based Message Authentication, Reporting and Conformance.",
//       "DMARC stands for Domain-based Message Authentication, Record Keeping and Compliance."
//     ],
//     answer: "DMARC stands for Domain-based Message Authentication, Reporting and Conformance."
//   },
//   {
//     question: "DKIM publishes digital signature keys for all outgoing mail.",
//     options: ["False", "True"],
//     answer: "True"
//   },

//   {
//     question: "Which is true about RTOS?",
//     options: [
//       "RTOS stands for Real Time Operating System.",
//       "RTOS stands for Real Time Objective Service."
//     ],
//     answer: "RTOS stands for Real Time Operating System."
//   },
//   {
//     question: "Penetration tests are designed to expose and exploit system vulnerabilities and should run in what type of environment?",
//     options: [
//       "Testing environment",
//       "Production environment"
//     ],
//     answer: "Testing environment"
//   },
//   {
//     question: "What is a CRL (Certificate Revocation List)?",
//     options: [
//       "A list of trusted certificates",
//       "A list of invalidated certificates"
//     ],
//     answer: "A list of invalidated certificates"
//   },
//   {
//     question: "A Certificate Authority (CA) is responsible for deploying and managing digital certificates.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "CSR stands for Certificate Signing Request and is used to send a public key to a certificate authority.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Which of the following security measures help protect mobile devices?",
//     options: [
//       "Full disk encryption and biometric authentication",
//       "Credential stuffing and port scanning"
//     ],
//     answer: "Full disk encryption and biometric authentication"
//   },
//   {
//     question: "What is the correct order of incident response operations?",
//     options: [
//       "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned",
//       "Detection, Containment, Analysis, Lessons Learned, Recovery, Preparation, Eradication"
//     ],
//     answer: "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned"
//   },
//   {
//     question: "SPF (Sender Policy Framework) is used for email server authentication.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "An 802.1Q trunk link can carry traffic for multiple VLANs.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Server hardening guides are available for most applications and services.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "What type of control is an Intrusion Prevention System (IPS)?",
//     options: ["Compensating", "Directive", "Deterrent", "Detective"],
//     answer: "Detective"
//   },
//   {
//     question: "Which of the following is more commonly associated with malicious intent?",
//     options: ["Passive Reconnaissance", "OSINT (Open Source Intelligence)"],
//     answer: "Passive Reconnaissance"
//   },
//   {
//     question: "A 'partially known environment' describes when an attacker has some knowledge about the system being tested.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Exfiltration refers to unauthorized data transfer from a system.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Typosquatting is when attackers register misspelled domain names to trick users.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "VM escape is a vulnerability that allows communication between a virtual machine and the host or other VMs.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "SDN stands for Software Defined Networking.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "An Amplified DDoS attack increases traffic volume by exploiting services that return large responses.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "In network security, 'accounting' refers to tracking user sessions, login/logout times, and resource usage.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "What does PCI-DSS stand for?",
//     options: [
//       "Payment Card Industry Data Security Standard",
//       "Protocol Control Industry Data Security Standard"
//     ],
//     answer: "Payment Card Industry Data Security Standard"
//   },
//   {
//     question: "Can a firewall operate alongside a VPN concentrator?",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Does a VPN concentrator rely on a central AAA server for user authentication?",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "What does AAA stand for in network security?",
//     options: [
//       "Authentication, Authorization, Accounting",
//       "Authentication, Authorization, Attestation"
//     ],
//     answer: "Authentication, Authorization, Accounting"
//   },
//   {
//     question: "In security, benchmarks refer to best-practice guidelines for system configuration.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "Allowing personal mobile devices on a secure corporate network increases the risk of intellectual property theft.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "A cold site is a disaster recovery location with minimal setup and infrastructure.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "RBAC stands for Role-Based Access Control, used for managing user rights in systems.",
//     options: ["True", "False"],
//     answer: "True"
//   },
//   {
//     question: "What is the main benefit of Software Defined Networking (SDN)?",
//     options: [
//       "It allows centralized control by separating the control and data planes.",
//       "It makes network devices autonomous by integrating control with the data plane."
//     ],
//     answer: "It allows centralized control by separating the control and data planes."
//   },
//   {
//     question: "What does MSP stand for?",
//     options: ["Managed Service Provider", "Managed Security Provider"],
//     answer: "Managed Service Provider"
//   },
//   {
//     question: "What is an MSP?",
//     options: [
//       "A third-party company that remotely manages a customer's IT infrastructure or end-user systems.",
//       "A local department that internally manages an organization's IT support."
//     ],
//     answer: "A third-party company that remotely manages a customer's IT infrastructure or end-user systems."
//   },

//   {
//   question: "Is a Jump Server used in network security?",
//   options: ["Yes", "No"],
//   answer: "Yes"
// },
// {
//   question: "A Jump Server is a highly secured system used to access resources in a separate security zone.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "An HSM (Hardware Security Module) stores cryptographic keys securely.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "NAC (Network Access Control) denies access to systems that don't meet security policies.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Business Impact Analysis helps determine time-sensitive systems and potential disruption impacts.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Which is correct about SIEM?",
//   options: [
//     "SIEM: Security Information and Event Management",
//     "SIEM: Service Identification and Event Management"
//   ],
//   answer: "SIEM: Security Information and Event Management"
// },
// {
//   question: "What does the offboarding process include?",
//   options: [
//     "Load balancing during peak user times",
//     "Procedures for revoking access when an employee leaves"
//   ],
//   answer: "Procedures for revoking access when an employee leaves"
// },
// {
//   question: "Due care refers to reasonable actions taken by an organization to protect systems and data.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Risk acceptance is when an organization acknowledges and retains a risk without further action.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "What is an example of risk transference?",
//   options: [
//     "Disconnecting from the internet entirely",
//     "Purchasing cybersecurity insurance"
//   ],
//   answer: "Purchasing cybersecurity insurance"
// },
// {
//   question: "Risk avoidance can include measures like disconnecting from the internet or not adopting risky technologies.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Which best defines sideloading?",
//   options: [
//     "Installing apps manually without using official app stores",
//     "Automatically pushing apps to users during onboarding"
//   ],
//   answer: "Installing apps manually without using official app stores"
// },
// {
//   question: "Which is correct about Cross-site Scripting (XSS)?",
//   options: [
//     "XSS is used to protect users during web browsing.",
//     "XSS is a vulnerability allowing attackers to inject malicious scripts into trusted websites."
//   ],
//   answer: "XSS is a vulnerability allowing attackers to inject malicious scripts into trusted websites."
// },
// {
//   question: "What is salting?",
//   options: [
//     "Adding random data to a password before hashing to make attacks more difficult",
//     "Compressing data for transmission"
//   ],
//   answer: "Adding random data to a password before hashing to make attacks more difficult"
// },
// {
//   question: "What is steganography?",
//   options: [
//     "Hiding data within other files, like an image or audio file",
//     "Encrypting data using symmetric keys"
//   ],
//   answer: "Hiding data within other files, like an image or audio file"
// },
// {
//   question: "Which best describes encryption?",
//   options: [
//     "Creates a fixed-length representation of data",
//     "Protects data by transforming it into unreadable ciphertext"
//   ],
//   answer: "Protects data by transforming it into unreadable ciphertext"
// },
// {
//   question: "SCAP (Security Content Automation Protocol) helps standardize vulnerability management across systems.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Who manages access control for a database system?",
//   options: ["Data Custodian", "Data Processor", "Data Subject"],
//   answer: "Data Custodian"
// },
// {
//   question: "Classifying data as 'private' is part of privacy compliance.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "What does HSM stand for?",
//   options: ["Hardware Security Module", "Hashed Security Manager"],
//   answer: "Hardware Security Module"
// },
// {
//   question: "What does ALE (Annual Loss Expectancy) represent?",
//   options: [
//     "The potential annual financial loss from a risk event",
//     "The cost of upgrading network switches"
//   ],
//   answer: "The potential annual financial loss from a risk event"
// },
// {
//   question: "What does RTO (Recovery Time Objective) measure?",
//   options: [
//     "Maximum time a service can be down before it impacts the business",
//     "Maximum size of lost data that is acceptable"
//   ],
//   answer: "Maximum time a service can be down before it impacts the business"
// },
// {
//   question: "What does ARO (Annualized Rate of Occurrence) represent?",
//   options: [
//     "Estimated frequency a threat will occur per year",
//     "Rate of bandwidth consumption annually"
//   ],
//   answer: "Estimated frequency a threat will occur per year"
// },
// {
//   question: "What does SLE (Single Loss Expectancy) represent?",
//   options: [
//     "Expected cost of one risk event occurrence",
//     "Expected cost of risk over one year"
//   ],
//   answer: "Expected cost of one risk event occurrence"
// },
// {
//   question: "What is SSL stripping?",
//   options: [
//     "Modifies web traffic to remove HTTPS encryption",
//     "Adds extra encryption to HTTP headers"
//   ],
//   answer: "Modifies web traffic to remove HTTPS encryption"
// },
// {
//   question: "A logic bomb is a piece of code triggered by specific conditions.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Can a keylogger affect network traffic?",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "IPsec is used to authenticate and encrypt network communication.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "What does SPF stand for in email security?",
//   options: ["Sender Policy Framework", "Secure Protection Format"],
//   answer: "Sender Policy Framework"
// },
// {
//   question: "What does DMARC stand for?",
//   options: [
//     "Domain-based Message Authentication, Reporting and Conformance",
//     "Domain-based Mail Authentication, Retention and Compliance"
//   ],
//   answer: "Domain-based Message Authentication, Reporting and Conformance"
// },

// {
//   question: "DKIM (DomainKeys Identified Mail) publishes digital signature keys for outgoing mail.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "RTOS stands for Real Time Operating System.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Penetration tests should be performed in a testing environment, not a production environment.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A CRL (Certificate Revocation List) contains certificates that are no longer valid.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A CA (Certificate Authority) issues and manages digital certificates.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A CSR (Certificate Signing Request) is used to request a digital certificate from a CA.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "MDM (Mobile Device Management) can enforce full disk encryption and biometric authentication.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "What is the correct order of incident response steps?",
//   options: [
//     "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned",
//     "Detection, Containment, Lessons Learned, Analysis, Recovery, Eradication, Preparation"
//   ],
//   answer: "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned"
// },
// {
//   question: "SPF helps prevent spoofed emails by specifying authorized sending IP addresses.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "802.1Q is used to tag VLAN traffic on trunk links.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Server hardening includes applying configuration benchmarks to reduce attack surface.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Which security control type is an IPS (Intrusion Prevention System)?",
//   options: ["Detective", "Deterrent", "Compensating", "Corrective"],
//   answer: "Detective"
// },
// {
//   question: "Which is more likely to be used by attackers than researchers?",
//   options: ["Passive Reconnaissance", "OSINT"],
//   answer: "Passive Reconnaissance"
// },
// {
//   question: "A partially known environment means the tester has limited knowledge of the target system.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Exfiltration refers to unauthorized data transfer from a system to an external destination.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Typosquatting involves registering domain names similar to legitimate ones to deceive users.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A VM escape allows a malicious virtual machine to interact with the host or other VMs.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Software Defined Networking (SDN) separates the control and data planes in a network.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Amplified DDoS attacks exploit services to increase the size of traffic sent to a target.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Accounting in network security tracks user activities like login time, file access, and logout.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "PCI-DSS stands for Payment Card Industry Data Security Standard.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Firewalls and VPN concentrators can be deployed together for enhanced security.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "AAA stands for Authentication, Authorization, and Accounting.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "The offboarding process ensures that departing employees lose access to organizational systems.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Due care refers to taking reasonable precautions to protect assets and data.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Risk transference shifts risk responsibility, such as through cyber insurance.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Risk avoidance may involve disabling high-risk features or services.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Side loading means installing apps outside of an approved app store.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Cross-Site Scripting (XSS) allows attackers to run scripts in the victim's browser.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Salting adds random data to a password before hashing.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Steganography hides data within other files, such as hiding a .txt file in a .jpg.",
//   options: ["True", "False"],
//   answer: "True"
// },

// {
//   question: "Encryption transforms data into unreadable ciphertext to protect confidentiality.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Which best describes SCAP (Security Content Automation Protocol)?",
//   options: [
//     "A protocol that automates vulnerability management and compliance checks",
//     "A VPN protocol for remote access"
//   ],
//   answer: "A protocol that automates vulnerability management and compliance checks"
// },
// {
//   question: "Who is primarily responsible for managing access permissions to a database?",
//   options: ["Data Custodian", "Data Subject", "Data Controller"],
//   answer: "Data Custodian"
// },
// {
//   question: "Designating data as private is part of privacy compliance regulations.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "What does ALE stand for in risk management?",
//   options: ["Annual Loss Expectancy", "Access Level Evaluation"],
//   answer: "Annual Loss Expectancy"
// },
// {
//   question: "What does RTO stand for?",
//   options: ["Recovery Time Objective", "Response Time Optimization"],
//   answer: "Recovery Time Objective"
// },
// {
//   question: "What does ARO stand for?",
//   options: ["Annualized Rate of Occurrence", "Authorized Risk Override"],
//   answer: "Annualized Rate of Occurrence"
// },
// {
//   question: "What does SLE stand for?",
//   options: ["Single Loss Expectancy", "System Logging Event"],
//   answer: "Single Loss Expectancy"
// },
// {
//   question: "What is SSL Stripping?",
//   options: [
//     "An attack that downgrades HTTPS to HTTP to intercept sensitive data",
//     "A method to enforce strict encryption rules"
//   ],
//   answer: "An attack that downgrades HTTPS to HTTP to intercept sensitive data"
// },
// {
//   question: "A logic bomb activates only under specific conditions.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Keyloggers may capture credentials and could potentially disrupt network activity.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "IPsec is used to secure IP communications by authenticating and encrypting data.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "SPF (Sender Policy Framework) helps prevent email spoofing by verifying sending IPs.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "DMARC builds upon SPF and DKIM to enforce email security policies.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "DKIM digitally signs emails to ensure message integrity and authenticity.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "RTOS is commonly used in embedded systems requiring real-time response.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Penetration tests are conducted to exploit system vulnerabilities in a controlled environment.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "CRLs are used to revoke digital certificates before their expiration date.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A Certificate Authority (CA) is responsible for issuing and managing digital certificates.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A CSR (Certificate Signing Request) includes the public key and identification info sent to a CA.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "MDM can enforce policies such as encryption, password strength, and app restrictions.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Preparation is the first step in the NIST incident response lifecycle.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "802.1Q allows multiple VLANs to be carried across a single trunk link.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Server hardening includes disabling unnecessary services and enforcing secure configurations.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "An IPS is primarily a preventive control.",
//   options: ["True", "False"],
//   answer: "True"  
// },
// {
//   question: "Passive reconnaissance avoids direct interaction with the target system.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A 'Partially Known Environment' in testing means the tester has limited information about the system.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Exfiltration involves unauthorized removal of data from a system.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Typosquatting relies on registering misspelled domain names to trick users.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "VM escape vulnerabilities allow a guest VM to interact with the host system.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "SDN enables centralized control of the network, separating the control and data planes.",
//   options: ["True", "False"],
//   answer: "True"
// },

// {
//   question: "Amplified DDoS attacks use vulnerable services to increase the volume of attack traffic.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Accounting logs user activities like logins, file access, and logout events.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "PCI-DSS stands for Payment Card Industry Data Security Standard.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Firewalls can operate alongside VPN concentrators without conflict.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "VPN concentrators typically rely on AAA servers to authenticate users.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "AAA stands for Authentication, Authorization, and Accounting.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Benchmarking in security means applying best practices and standards.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Allowing personal mobile devices on a secured network can risk intellectual property theft.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "A cold site is a backup facility without active hardware, used in disaster recovery.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "(RBAC) Role-Based Access Control manages permissions based on user roles.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Software Defined Networking allows dynamic, centralized network management.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "MSP stands for Managed Service Provider, which manages IT services remotely.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Jump servers provide secure access to isolated network segments.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Hardware Security Modules (HSM) securely store cryptographic keys.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Network Access Control (NAC) enforces security policies to allow or deny device access.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Business Impact Analysis helps identify time-sensitive systems and processes.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "SIEM stands for Security Information and Event Management.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Offboarding processes include policies for terminating user access upon exit.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Due care involves taking reasonable steps to protect assets and data.",
//   options: ["True", "False"],
//   answer: "True"
// },
// {
//   question: "Risk acceptance means an organization knowingly accepts a risk without mitigation.",
//   options: ["True", "False"],
//   answer: "True"
// }
];//quizDataArrays

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const showQuestionNumber = document.getElementById('questionNumber');
const backArrowButton = document.getElementById('back-arrow');
const skipArrowButton = document.getElementById('skip-arrow');
const popupA = document.getElementById('popup-a');
const popupB = document.getElementById('popup-b');

let score = 0;
let currentQuestion = 0;

let correctAnswersAnswered = 0;
let incorrectAnswersAnswered = 0;
let incorrectAnswers = [];

let userAnswers = new Array(quizDataArrays.length).fill(null);


// Shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Display Quiz
function displayQuestion() {
  showQuestionNumber.textContent = currentQuestion + 1;
  const questionData = quizDataArrays[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;
  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';
  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);
  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];
    radio.checked = (userAnswers[currentQuestion] === shuffledOptions[i]);//restore's previous selection
    const optionText = document.createTextNode(shuffledOptions[i]);
    // option.style.backgroundColor = ''; // Reset previous styles
    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }
  quizContainer.innerHTML = '';
  quizContainer.style.display = 'flex';
  quizContainer.style.flexDirection = 'column';
  quizContainer.style.justifyContent = 'center';
  quizContainer.style.alignItems = 'center';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const correct = quizDataArrays[currentQuestion].answer;
  const optionLabels = document.querySelectorAll('.option');
  optionLabels.forEach(label => {
    const input = label.querySelector('input');
    if (input.value === correct) {
      // label.style.backgroundColor = '#80ff00';
    }
    if (input.checked && input.value !== correct) {
      // label.style.backgroundColor = '#ff1313';
    }
    input.disabled = true;
  });
  // Only score if not already answered
  if(userAnswers[currentQuestion] === null) {
  if(!selectedOption){
    incorrectAnswers.push({
      question: quizDataArrays[currentQuestion].question,
      incorrectAnswer: "No answer selected",
      correctAnswer: correct,
    });
    incorrectAnswersAnswered++;
    userAnswers[currentQuestion] = "No answer selected";
  } else {
    const answer = selectedOption.value;
    userAnswers[currentQuestion] = answer;//tracking user's answer incase of hitting back button to change an answer.
    if(answer === correct) {
      score++;
      correctAnswersAnswered++;
    } else {
      incorrectAnswers.push({
        question: quizDataArrays[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: correct,
      });
      incorrectAnswersAnswered++;
    }
  }
}
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizDataArrays.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }, 350);
}

function displayResult() {
  popupA.style.display = 'block';
  popupB.style.display = 'block';
  
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = incorrectAnswersAnswered > 0 ? 'inline-block' : 'none';

  if (score === quizDataArrays.length) {
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizDataArrays.length}!</p>
      <p style="color: green; font-weight: bold; font-size: 1.3rem;">
        🥳🎯🏆💯Perfect score! One step closer to cybersecurity certification! 
      </p>
    `;
  } else {
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizDataArrays.length}.</p>
      <p>Click "Show Answer" to review the questions you missed.</p>
    `;
  }
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  incorrectAnswersAnswered = 0;
  correctAnswersAnswered = 0;
  userAnswers = new Array(quizDataArrays.length).fill(null);
  quizContainer.style.display = 'inline-block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '<div class="review-block">';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
    <div class=review-question">
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br><br>
          <strong>❌ Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br><br>
          <strong>✅ Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
  }
  incorrectAnswersHtml += '</div>';
  resultContainer.innerHTML = incorrectAnswersHtml;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//=====Arrow Functions==========================
backArrowButton.addEventListener('click', function (e){
  e.preventDefault();
  if(currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
});

skipArrowButton.addEventListener('click', function(e) {
  e.preventDefault();
  handleArrowSubmitAndNext();
});

let warnedAboutSkip = false;

function handleArrowSubmitAndNext() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const alreadyAnswered = userAnswers[currentQuestion] !== null;

  const skipWarningEl = document.getElementById('skip-warning');

  if (!selectedOption && !alreadyAnswered) {
    if (!warnedAboutSkip) {
      skipWarningEl.classList.remove('hide');
      warnedAboutSkip = true;
      return;
    }

    // User clicked skip again — confirm the skip
    const correct = quizDataArrays[currentQuestion].answer;
    incorrectAnswers.push({
      question: quizDataArrays[currentQuestion].question,
      incorrectAnswer: "No answer selected",
      correctAnswer: correct,
    });
    incorrectAnswersAnswered++;
    userAnswers[currentQuestion] = "No answer selected";
  }

  // Proceed normally
  skipWarningEl.classList.add('hide');
  warnedAboutSkip = false;

  if (selectedOption) {
    checkAnswer();
    return;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizDataArrays.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }, 650);
}



document.addEventListener('keydown', function(event) {
  const key = event.key;
  const options = document.querySelectorAll('input[name="quiz"]');

  if ((key === 'ArrowDown' || key === 'ArrowUp') && options.length > 0) {
    event.preventDefault();

    let currentIndex = -1;
    options.forEach((option, index) => {
      if (document.activeElement === option) {
        currentIndex = index;
      }
    });

    if (key === 'ArrowDown' && currentIndex < options.length - 1) {
      options[currentIndex + 1].focus();
    }

    if (key === 'ArrowUp' && currentIndex > 0) {
      options[currentIndex - 1].focus();
    }

    // If none focused, focus the first option on ↓
    if (currentIndex === -1 && key === 'ArrowDown') {
      options[0].focus();
    }
  }

  if (key === 'Enter' || key === ' ' || key === 'Space') {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      checkAnswer();
    }
  }

  if (key === 'ArrowRight') {
    skipArrowButton.classList.add('arrow-active');
    setTimeout(() => skipArrowButton.classList.remove('arrow-active'), 150);
    if (currentQuestion < quizDataArrays.length - 1) {
      currentQuestion++;
      displayQuestion();
    }
  }

  if (key === 'ArrowLeft') {
    backArrowButton.classList.add('arrow-active');
    setTimeout(() => backArrowButton.classList.remove('arrow-active'), 150);
    if (currentQuestion > 0) {
      currentQuestion--;
      displayQuestion();
    }
  }
});

//======================================================================================