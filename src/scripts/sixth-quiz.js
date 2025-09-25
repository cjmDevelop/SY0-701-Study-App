// #6 Quiz - Set of 30 questions with SY0-701 objective codes (Fixed)
export const sixthQuiz = [
  {
    question: "Encryption transforms data into unreadable ciphertext to protect confidentiality.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (Encryption)"
  },
  {
    question: "Which best describes SCAP (Security Content Automation Protocol)?",
    options: [
      "A protocol that automates vulnerability management and compliance checks",
      "A VPN protocol for remote access",
      "A system monitoring framework",
      "A network encryption standard"
    ],
    answer: "A protocol that automates vulnerability management and compliance checks",
    objective: "Domain 4.3 – Vulnerability Management"
  },
  {
    question: "Who is primarily responsible for managing access permissions to a database?",
    options: ["Data Custodian", "Data Subject", "Data Controller", "Database Administrator (DBA)"],
    answer: "Data Custodian",
    objective: "Domain 5.2 – Governance & Compliance (Data Roles)"
  },
  {
    question: "Designating data as private is part of privacy compliance regulations.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 5.5 – Privacy & Data Protection"
  },
  {
    question: "What does ALE (Annual Loss Expectancy) represent in risk management?",
    options: [
      "The potential annual financial loss from a risk event",
      "The cost of upgrading network switches",
      "The annual cost of security training",
      "The expected annual revenue loss"
    ],
    answer: "The potential annual financial loss from a risk event",
    objective: "Domain 5.1 – Risk Management (Quantitative Analysis)"
  },
  {
    question: "What does RTO (Recovery Time Objective) measure?",
    options: [
      "Maximum time a service can be down before it impacts the business",
      "Maximum size of lost data that is acceptable",
      "Time required to complete a backup",
      "Average response time for help desk tickets"
    ],
    answer: "Maximum time a service can be down before it impacts the business",
    objective: "Domain 3.4 – Business Continuity & Disaster Recovery"
  },
  {
    question: "What does ARO (Annualized Rate of Occurrence) represent?",
    options: [
      "Estimated frequency a threat will occur per year",
      "Rate of bandwidth consumption annually",
      "Annual cost of risk mitigation",
      "Average recovery time per incident"
    ],
    answer: "Estimated frequency a threat will occur per year",
    objective: "Domain 5.1 – Risk Management (Quantitative Analysis)"
  },
  {
    question: "What does SLE (Single Loss Expectancy) represent?",
    options: [
      "Expected cost of one risk event occurrence",
      "Expected cost of risk over one year",
      "Single largest expense in the security budget",
      "Standard loss estimate for insurance claims"
    ],
    answer: "Expected cost of one risk event occurrence",
    objective: "Domain 5.1 – Risk Management (Quantitative Analysis)"
  },
  {
    question: "What is SSL Stripping?",
    options: [
      "An attack that downgrades HTTPS to HTTP to intercept sensitive data",
      "A method to enforce strict encryption rules",
      "A technique to remove SSL certificates from a server",
      "A method to remove metadata from secure connections"
    ],
    answer: "An attack that downgrades HTTPS to HTTP to intercept sensitive data",
    objective: "Domain 2.4 – Network Attacks"
  },
  {
    question: "A logic bomb activates only under specific conditions.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.2 – Malware"
  },
  {
    question: "Keyloggers primarily capture keystrokes and may also monitor other system activities.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.2 – Malware"
  },
  {
    question: "IPsec is used to secure IP communications by authenticating and encrypting data.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Security (VPN Protocols)"
  },
  {
    question: "SPF (Sender Policy Framework) helps prevent email spoofing by verifying sending IP addresses.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.6 – Identity & Access Management (Email Security)"
  },
  {
    question: "DMARC builds upon SPF and DKIM to enforce email security policies.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.6 – Identity & Access Management (Email Security)"
  },
  {
    question: "DKIM (DomainKeys Identified Mail) digitally signs emails to ensure integrity and authenticity.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.6 – Identity & Access Management (Email Security)"
  },
  {
    question: "RTOS is commonly used in embedded systems requiring real-time response.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.3 – Security Architecture (Specialized Systems)"
  },
  {
    question: "Penetration tests are conducted to exploit system vulnerabilities in a controlled environment.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.5 – Security Assessment (Penetration Testing)"
  },
  {
    question: "CRLs are used to revoke digital certificates before their expiration date.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (PKI & Certificates)"
  },
  {
    question: "A Certificate Authority (CA) is responsible for issuing and managing digital certificates.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (PKI & Certificates)"
  },
  {
    question: "A CSR (Certificate Signing Request) includes the public key and identification information sent to a CA.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (PKI & Certificates)"
  },
  {
    question: "MDM (Mobile Device Management) can enforce policies such as encryption, password strength, and app restrictions.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.1 – Mobile Security (Device Security)"
  },
  {
    question: "Preparation is the first step in the NIST incident response lifecycle.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.8 – Incident Response"
  },
  {
    question: "802.1Q allows multiple VLANs to be carried across a single trunk link.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Security (Network Design & Segmentation)"
  },
  {
    question: "Server hardening includes disabling unnecessary services and enforcing secure configurations.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.1 – Endpoint Security (Configuration & Hardening)"
  },
  {
    question: "An IPS (Intrusion Prevention System) actively blocks malicious activity, acting as a preventive control.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Security (Security Devices)"
  },
  {
    question: "Passive reconnaissance avoids direct interaction with the target system.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.1 – Threat Actors & Motivations (Reconnaissance)"
  },
  {
    question: "A partially known environment in testing means the tester has limited information about the system.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.5 – Security Assessment (Penetration Testing)"
  },
  {
    question: "Exfiltration involves unauthorized removal of data from a system.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.4 – Network Attacks (Data Exfiltration)"
  },
  {
    question: "Typosquatting relies on registering misspelled domain names to trick users.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.2 – Social Engineering (Typosquatting)"
  },
  {
    question: "VM escape vulnerabilities allow a guest virtual machine to interact with the host system.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.3 – Vulnerabilities (Virtualization)"
  }
];

//old
// #6 Quiz - Set of 30 questions
// export const sixthQuiz = [ {
// question: "Encryption transforms data into unreadable ciphertext to protect confidentiality.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Which best describes SCAP (Security Content Automation Protocol)?",
// options: [
// "A protocol that automates vulnerability management and compliance checks",
// "A VPN protocol for remote access"
// ],
// answer: "A protocol that automates vulnerability management and compliance checks"
// },
// {
// question: "Who is primarily responsible for managing access permissions to a database?",
// options: ["Data Custodian", "Data Subject", "Data Controller"],
// answer: "Data Custodian"
// },
// {
// question: "Designating data as private is part of privacy compliance regulations.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "What does ALE stand for in risk management?",
// options: ["Annual Loss Expectancy", "Access Level Evaluation"],
// answer: "Annual Loss Expectancy"
// },
// {
// question: "What does RTO stand for?",
// options: ["Recovery Time Objective", "Response Time Optimization"],
// answer: "Recovery Time Objective"
// },
// {
// question: "What does ARO stand for?",
// options: ["Annualized Rate of Occurrence", "Authorized Risk Override"],
// answer: "Annualized Rate of Occurrence"
// },
// {
// question: "What does SLE stand for?",
// options: ["Single Loss Expectancy", "System Logging Event"],
// answer: "Single Loss Expectancy"
// },
// {
// question: "What is SSL Stripping?",
// options: [
// "An attack that downgrades HTTPS to HTTP to intercept sensitive data",
// "A method to enforce strict encryption rules"
// ],
// answer: "An attack that downgrades HTTPS to HTTP to intercept sensitive data"
// },
// {
// question: "A logic bomb activates only under specific conditions.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Keyloggers may capture credentials and could potentially disrupt network activity.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "IPsec is used to secure IP communications by authenticating and encrypting data.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "SPF (Sender Policy Framework) helps prevent email spoofing by verifying sending IPs.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "DMARC builds upon SPF and DKIM to enforce email security policies.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "DKIM digitally signs emails to ensure message integrity and authenticity.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "RTOS is commonly used in embedded systems requiring real-time response.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Penetration tests are conducted to exploit system vulnerabilities in a controlled environment.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "CRLs are used to revoke digital certificates before their expiration date.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "A Certificate Authority (CA) is responsible for issuing and managing digital certificates.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "A CSR (Certificate Signing Request) includes the public key and identification info sent to a CA.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "MDM can enforce policies such as encryption, password strength, and app restrictions.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Preparation is the first step in the NIST incident response lifecycle.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "802.1Q allows multiple VLANs to be carried across a single trunk link.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Server hardening includes disabling unnecessary services and enforcing secure configurations.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "An IPS is primarily a preventive control.",
// options: ["True", "False"],
// answer: "True"  
// },
// {
// question: "Passive reconnaissance avoids direct interaction with the target system.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "A 'Partially Known Environment' in testing means the tester has limited information about the system.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Exfiltration involves unauthorized removal of data from a system.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Typosquatting relies on registering misspelled domain names to trick users.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "VM escape vulnerabilities allow a guest VM to interact with the host system.",
// options: ["True", "False"],
// answer: "True"
// }];