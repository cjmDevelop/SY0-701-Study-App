// #4 Quiz - Set of 30 questions with SY0-701 objective codes (Fixed)
export const fourthQuiz = [
  {
    question: "A Jump Server is a highly secured system used to access resources in a separate security zone.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Security (Access Controls)"
  },
  {
    question: "An HSM (Hardware Security Module) stores cryptographic keys securely.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 1.4 – Cryptography (Key Management)"
  },
  {
    question: "NAC (Network Access Control) denies access to systems that don't meet security policies.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Security (Access Control)"
  },
  {
    question: "Business Impact Analysis helps determine time-sensitive systems and potential disruption impacts.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.4 – Business Continuity & Disaster Recovery"
  },
  {
    question: "Which is correct about SIEM?",
    options: [
      "SIEM: Security Information and Event Management",
      "SIEM: Service Identification and Event Management",
      "SIEM: System Information and Error Monitoring",
      "SIEM: Secure Infrastructure and Endpoint Management"
    ],
    answer: "SIEM: Security Information and Event Management",
    objective: "Domain 4.7 – Security Operations (SIEM)"
  },
  {
    question: "What does the offboarding process include?",
    options: [
      "Load balancing during peak user times",
      "Procedures for revoking access when an employee leaves",
      "Installing new software on user devices",
      "Backing up user email accounts"
    ],
    answer: "Procedures for revoking access when an employee leaves",
    objective: "Domain 4.6 – Identity & Access Management (Account Management)"
  },
  {
    question: "Due care refers to reasonable actions taken by an organization to protect systems and data.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 5.2 – Governance & Compliance"
  },
  {
    question: "Risk acceptance is when an organization acknowledges and retains a risk without further action.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 5.1 – Risk Management"
  },
  {
    question: "What is an example of risk transference?",
    options: [
      "Disconnecting from the internet entirely",
      "Purchasing cybersecurity insurance",
      "Installing additional firewalls",
      "Training employees on security awareness"
    ],
    answer: "Purchasing cybersecurity insurance",
    objective: "Domain 5.1 – Risk Management (Risk Response)"
  },
  {
    question: "Risk avoidance can include measures like disconnecting from the internet or not adopting risky technologies.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 5.1 – Risk Management (Risk Response)"
  },
  {
    question: "Which best defines sideloading?",
    options: [
      "Installing apps manually without using official app stores",
      "Automatically pushing apps to users during onboarding",
      "Loading apps from a secondary server location",
      "Installing apps through enterprise app catalogs"
    ],
    answer: "Installing apps manually without using official app stores",
    objective: "Domain 4.1 – Mobile Security"
  },
  {
    question: "Which is correct about Cross-site Scripting (XSS)?",
    options: [
      "XSS is used to protect users during web browsing.",
      "XSS is a vulnerability allowing attackers to inject malicious scripts into trusted websites.",
      "XSS is a secure coding standard for web applications.",
      "XSS is a network protocol for secure web communications."
    ],
    answer: "XSS is a vulnerability allowing attackers to inject malicious scripts into trusted websites.",
    objective: "Domain 2.3 – Application Vulnerabilities"
  },
  {
    question: "What is salting?",
    options: [
      "Adding random data to a password before hashing to make attacks more difficult",
      "Compressing data for transmission",
      "Encrypting data using multiple keys",
      "Converting plaintext to ciphertext"
    ],
    answer: "Adding random data to a password before hashing to make attacks more difficult",
    objective: "Domain 1.4 – Cryptography (Hashing & Digital Signatures)"
  },
  {
    question: "What is steganography?",
    options: [
      "Hiding data within other files, like an image or audio file",
      "Encrypting data using symmetric keys",
      "Compressing data for storage efficiency",
      "Converting data to hash values"
    ],
    answer: "Hiding data within other files, like an image or audio file",
    objective: "Domain 1.4 – Cryptography (Data Obfuscation)"
  },
  {
    question: "Which best describes encryption?",
    options: [
      "Creates a fixed-length representation of data",
      "Protects data by transforming it into unreadable ciphertext",
      "Compresses data to reduce storage space",
      "Validates data integrity through checksums"
    ],
    answer: "Protects data by transforming it into unreadable ciphertext",
    objective: "Domain 1.4 – Cryptography (Encryption)"
  },
  {
    question: "SCAP (Security Content Automation Protocol) helps standardize vulnerability management across systems.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.3 – Vulnerability Management"
  },
  {
    question: "Who manages access control for a database system?",
    options: ["Data Custodian", "Data Processor", "Data Subject", "Database Administrator"],
    answer: "Data Custodian",
    objective: "Domain 5.2 – Governance & Compliance (Data Roles)"
  },
  {
    question: "Classifying data as 'private' is part of privacy compliance.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 5.5 – Privacy & Data Protection"
  },
  {
    question: "What does HSM stand for?",
    options: ["Hardware Security Module", "Hashed Security Manager", "Host Security Management", "Hybrid Security Model"],
    answer: "Hardware Security Module",
    objective: "Domain 1.4 – Cryptography (Key Management)"
  },
  {
    question: "What does ALE (Annual Loss Expectancy) represent?",
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
    question: "What is SSL stripping?",
    options: [
      "Modifies web traffic to remove HTTPS encryption",
      "Adds extra encryption to HTTP headers",
      "Removes SSL certificates from web servers",
      "Strips metadata from SSL connections"
    ],
    answer: "Modifies web traffic to remove HTTPS encryption",
    objective: "Domain 2.4 – Network Attacks"
  },
  {
    question: "A logic bomb is a piece of code triggered by specific conditions.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.2 – Malware"
  },
  {
    question: "Keyloggers primarily capture keystrokes and may also monitor other user activities.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 2.2 – Malware"
  },
  {
    question: "IPsec is used to authenticate and encrypt network communication.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 3.1 – Network Security (VPN Protocols)"
  },
  {
    question: "What does SPF stand for in email security?",
    options: ["Sender Policy Framework", "Secure Protection Format", "System Protection Firewall", "Security Policy Filter"],
    answer: "Sender Policy Framework",
    objective: "Domain 4.6 – Identity & Access Management (Email Security)"
  },
  {
    question: "What does DMARC stand for?",
    options: [
      "Domain-based Message Authentication, Reporting and Conformance",
      "Domain-based Mail Authentication, Retention and Compliance",
      "Data Management and Reporting Control",
      "Digital Message Authentication and Record Control"
    ],
    answer: "Domain-based Message Authentication, Reporting and Conformance",
    objective: "Domain 4.6 – Identity & Access Management (Email Security)"
  },
  {
    question: "DKIM (DomainKeys Identified Mail) publishes digital signature keys for outgoing mail.",
    options: ["True", "False"],
    answer: "True",
    objective: "Domain 4.6 – Identity & Access Management (Email Security)"
  }
];

// export const fourthQuiz = [ {
// question: "A Jump Server is a highly secured system used to access resources in a separate security zone.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "An HSM (Hardware Security Module) stores cryptographic keys securely.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "NAC (Network Access Control) denies access to systems that don't meet security policies.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Business Impact Analysis helps determine time-sensitive systems and potential disruption impacts.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Which is correct about SIEM?",
// options: [
// "SIEM: Security Information and Event Management",
// "SIEM: Service Identification and Event Management"
// ],
// answer: "SIEM: Security Information and Event Management"
// },
// {
// question: "What does the offboarding process include?",
// options: [
// "Load balancing during peak user times",
// "Procedures for revoking access when an employee leaves"
// ],
// answer: "Procedures for revoking access when an employee leaves"
// },
// {
// question: "Due care refers to reasonable actions taken by an organization to protect systems and data.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Risk acceptance is when an organization acknowledges and retains a risk without further action.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "What is an example of risk transference?",
// options: [
// "Disconnecting from the internet entirely",
// "Purchasing cybersecurity insurance"
// ],
// answer: "Purchasing cybersecurity insurance"
// },
// {
// question: "Risk avoidance can include measures like disconnecting from the internet or not adopting risky technologies.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Which best defines sideloading?",
// options: [
// "Installing apps manually without using official app stores",
// "Automatically pushing apps to users during onboarding"
// ],
// answer: "Installing apps manually without using official app stores"
// },
// {
// question: "Which is correct about Cross-site Scripting (XSS)?",
// options: [
// "XSS is used to protect users during web browsing.",
// "XSS is a vulnerability allowing attackers to inject malicious scripts into trusted websites."
// ],
// answer: "XSS is a vulnerability allowing attackers to inject malicious scripts into trusted websites."
// },
// {
// question: "What is salting?",
// options: [
// "Adding random data to a password before hashing to make attacks more difficult",
// "Compressing data for transmission"
// ],
// answer: "Adding random data to a password before hashing to make attacks more difficult"
// },
// {
// question: "What is steganography?",
// options: [
// "Hiding data within other files, like an image or audio file",
// "Encrypting data using symmetric keys"
// ],
// answer: "Hiding data within other files, like an image or audio file"
// },
// {
// question: "Which best describes encryption?",
// options: [
// "Creates a fixed-length representation of data",
// "Protects data by transforming it into unreadable ciphertext"
// ],
// answer: "Protects data by transforming it into unreadable ciphertext"
// },
// {
// question: "SCAP (Security Content Automation Protocol) helps standardize vulnerability management across systems.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Who manages access control for a database system?",
// options: ["Data Custodian", "Data Processor", "Data Subject"],
// answer: "Data Custodian"
// },
// {
// question: "Classifying data as 'private' is part of privacy compliance.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "What does HSM stand for?",
// options: ["Hardware Security Module", "Hashed Security Manager"],
// answer: "Hardware Security Module"
// },
// {
// question: "What does ALE (Annual Loss Expectancy) represent?",
// options: [
// "The potential annual financial loss from a risk event",
// "The cost of upgrading network switches"
// ],
// answer: "The potential annual financial loss from a risk event"
// },
// {
// question: "What does RTO (Recovery Time Objective) measure?",
// options: [
// "Maximum time a service can be down before it impacts the business",
// "Maximum size of lost data that is acceptable"
// ],
// answer: "Maximum time a service can be down before it impacts the business"
// },
// {
// question: "What does ARO (Annualized Rate of Occurrence) represent?",
// options: [
// "Estimated frequency a threat will occur per year",
// "Rate of bandwidth consumption annually"
// ],
// answer: "Estimated frequency a threat will occur per year"
// },
// {
// question: "What does SLE (Single Loss Expectancy) represent?",
// options: [
// "Expected cost of one risk event occurrence",
// "Expected cost of risk over one year"
// ],
// answer: "Expected cost of one risk event occurrence"
// },
// {
// question: "What is SSL stripping?",
// options: [
// "Modifies web traffic to remove HTTPS encryption",
// "Adds extra encryption to HTTP headers"
// ],
// answer: "Modifies web traffic to remove HTTPS encryption"
// },
// {
// question: "A logic bomb is a piece of code triggered by specific conditions.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "Can a keylogger affect network traffic?",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "IPsec is used to authenticate and encrypt network communication.",
// options: ["True", "False"],
// answer: "True"
// },
// {
// question: "What does SPF stand for in email security?",
// options: ["Sender Policy Framework", "Secure Protection Format"],
// answer: "Sender Policy Framework"
// },
// {
// question: "What does DMARC stand for?",
// options: [
// "Domain-based Message Authentication, Reporting and Conformance",
// "Domain-based Mail Authentication, Retention and Compliance"
// ],
// answer: "Domain-based Message Authentication, Reporting and Conformance"
// },

// {
// question: "DKIM (DomainKeys Identified Mail) publishes digital signature keys for outgoing mail.",
// options: ["True", "False"],
// answer: "True"
// }];