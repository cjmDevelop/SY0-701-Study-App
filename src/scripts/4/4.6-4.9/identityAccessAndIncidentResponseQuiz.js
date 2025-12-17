export const identityAccessAndIncidentResponseQuiz = [
  {
    quiz_ID: "4.6-4.9",
    quiz_name: "Identity, Access, Automation & Incident Response"
  },

  // 4.6 - Identity and Access Management

  // Provisioning/De-provisioning
  {
    question: "What is user provisioning?",
    options: [
      "Creating user accounts and granting appropriate access rights",
      "Deleting all user accounts",
      "Monitoring user activity only",
      "Changing passwords"
    ],
    answer: "Creating user accounts and granting appropriate access rights"
  },
  {
    question: "De-provisioning should occur:",
    options: [
      "Immediately when an employee leaves the organization",
      "Several months after termination",
      "Never, keep all accounts active",
      "Only if requested by the user"
    ],
    answer: "Immediately when an employee leaves the organization"
  },
  {
    question: "Automated provisioning based on role helps ensure:",
    options: [
      "Users receive appropriate access quickly and consistently",
      "Everyone gets administrative access",
      "No one has any access",
      "Random access assignment"
    ],
    answer: "Users receive appropriate access quickly and consistently"
  },

  // Permission Auditing and Review
  {
    question: "Why is regular permission auditing important?",
    options: [
      "To identify and remove unnecessary or excessive permissions (privilege creep)",
      "To grant more permissions",
      "Only for compliance documentation",
      "It's not important"
    ],
    answer: "To identify and remove unnecessary or excessive permissions (privilege creep)"
  },
  {
    question: "What is privilege creep?",
    options: [
      "Accumulation of excessive permissions over time as users change roles",
      "A type of malware",
      "Faster network speeds",
      "A programming language"
    ],
    answer: "Accumulation of excessive permissions over time as users change roles"
  },
  {
    question: "Access reviews should be conducted:",
    options: [
      "Regularly (e.g., quarterly or annually) to ensure access remains appropriate",
      "Never",
      "Only once when hired",
      "Only during security incidents"
    ],
    answer: "Regularly (e.g., quarterly or annually) to ensure access remains appropriate"
  },

  // Multifactor Authentication (MFA)
  {
    question: "Multifactor authentication requires:",
    options: [
      "Two or more different types of authentication factors",
      "Only a username",
      "Multiple passwords from the same category",
      "No authentication"
    ],
    answer: "Two or more different types of authentication factors"
  },
  {
    question: "The three categories of authentication factors are:",
    options: [
      "Something you know, something you have, something you are",
      "Password, PIN, passphrase (all knowledge)",
      "Username, email, phone number",
      "Red, blue, green"
    ],
    answer: "Something you know, something you have, something you are"
  },
  {
    question: "Using a password AND a fingerprint scan is an example of:",
    options: [
      "Multifactor authentication",
      "Single-factor authentication",
      "No authentication",
      "Weak authentication"
    ],
    answer: "Multifactor authentication"
  },
  {
    question: "Using a password AND a security question is:",
    options: [
      "NOT true multifactor authentication because both are knowledge factors",
      "True multifactor authentication",
      "Three-factor authentication",
      "Biometric authentication"
    ],
    answer: "NOT true multifactor authentication because both are knowledge factors"
  },

  // Federation and Single Sign-On (SSO)
  {
    question: "Single Sign-On (SSO) allows users to:",
    options: [
      "Authenticate once and access multiple applications",
      "Use only one application",
      "Avoid authentication entirely",
      "Change passwords daily"
    ],
    answer: "Authenticate once and access multiple applications"
  },
  {
    question: "What is identity federation?",
    options: [
      "Trusting and sharing identity information between different organizations or systems",
      "Creating new identities",
      "Deleting all user accounts",
      "A type of malware"
    ],
    answer: "Trusting and sharing identity information between different organizations or systems"
  },
  {
    question: "SAML (Security Assertion Markup Language) is used for:",
    options: [
      "Exchanging authentication and authorization data between identity providers and service providers",
      "Sending email",
      "File storage",
      "Encrypting hard drives"
    ],
    answer: "Exchanging authentication and authorization data between identity providers and service providers"
  },
  {
    question: "OAuth 2.0 is primarily used for:",
    options: [
      "Granting limited access to resources without sharing passwords (authorization)",
      "Password hashing",
      "File encryption",
      "Network routing"
    ],
    answer: "Granting limited access to resources without sharing passwords (authorization)"
  },
  {
    question: "OpenID Connect (OIDC) builds on OAuth 2.0 to provide:",
    options: [
      "Authentication layer in addition to authorization",
      "Only file sharing",
      "Email services",
      "Video streaming"
    ],
    answer: "Authentication layer in addition to authorization"
  },

  // Interoperability
  {
    question: "Interoperability in identity management means:",
    options: [
      "Different systems and platforms can work together using common standards",
      "Systems cannot communicate",
      "Only one vendor is supported",
      "No standards are needed"
    ],
    answer: "Different systems and platforms can work together using common standards"
  },

  // Attestation and Access Control
  {
    question: "Attestation in security context refers to:",
    options: [
      "Verifying the identity and integrity of a user, device, or system",
      "Deleting accounts",
      "Creating backups",
      "Monitoring bandwidth"
    ],
    answer: "Verifying the identity and integrity of a user, device, or system"
  },
  {
    question: "Access control models determine:",
    options: [
      "Who can access which resources and what actions they can perform",
      "Network bandwidth allocation",
      "File storage locations only",
      "Email routing"
    ],
    answer: "Who can access which resources and what actions they can perform"
  },

  // 4.7 - Automation and Orchestration

  // Use Cases
  {
    question: "Security automation helps organizations:",
    options: [
      "Perform repetitive security tasks faster and more consistently than manual processes",
      "Eliminate all security staff",
      "Slow down operations",
      "Ignore security issues"
    ],
    answer: "Perform repetitive security tasks faster and more consistently than manual processes"
  },
  {
    question: "User and resource provisioning automation can:",
    options: [
      "Reduce errors and ensure consistent application of security policies",
      "Grant everyone admin access",
      "Delete all accounts randomly",
      "Slow down onboarding"
    ],
    answer: "Reduce errors and ensure consistent application of security policies"
  },
  {
    question: "Automated guard rails in security provide:",
    options: [
      "Preventive controls that stop dangerous actions before they occur",
      "Physical barriers around servers",
      "No security benefit",
      "Manual intervention requirements"
    ],
    answer: "Preventive controls that stop dangerous actions before they occur"
  },
  {
    question: "Security group automation in cloud environments can:",
    options: [
      "Dynamically apply firewall rules based on defined policies",
      "Disable all firewalls",
      "Allow all traffic",
      "Delete resources"
    ],
    answer: "Dynamically apply firewall rules based on defined policies"
  },
  {
    question: "Automated ticket creation for security events helps:",
    options: [
      "Ensure incidents are tracked and assigned for resolution",
      "Ignore security events",
      "Delete all alerts",
      "Slow down response"
    ],
    answer: "Ensure incidents are tracked and assigned for resolution"
  },
  {
    question: "Automated escalation in incident response ensures:",
    options: [
      "Critical issues receive appropriate attention when not addressed within SLAs",
      "All issues are ignored",
      "Only low priority items are handled",
      "Response is delayed"
    ],
    answer: "Critical issues receive appropriate attention when not addressed within SLAs"
  },

  // Benefits of Automation
  {
    question: "What is a primary benefit of security automation?",
    options: [
      "Faster response times to security events",
      "Increased manual workload",
      "Slower incident response",
      "More errors"
    ],
    answer: "Faster response times to security events"
  },
  {
    question: "Automation helps with enforcing baselines by:",
    options: [
      "Consistently applying configuration standards across all systems",
      "Allowing configuration drift",
      "Ignoring standards",
      "Manual configuration only"
    ],
    answer: "Consistently applying configuration standards across all systems"
  },
  {
    question: "Automation provides standard infrastructure configurations through:",
    options: [
      "Infrastructure as Code (IaC) and configuration management tools",
      "Manual typing",
      "Random settings",
      "Guesswork"
    ],
    answer: "Infrastructure as Code (IaC) and configuration management tools"
  },

  // Other Considerations
  {
    question: "When implementing automation, organizations must consider:",
    options: [
      "Complexity of implementation, testing requirements, and integration with existing systems",
      "Only the initial cost",
      "Automation solves everything without planning",
      "No testing needed"
    ],
    answer: "Complexity of implementation, testing requirements, and integration with existing systems"
  },
  {
    question: "Single point of failure in automation occurs when:",
    options: [
      "The automated system itself becomes critical and has no redundancy",
      "Multiple systems share the load",
      "Backups are in place",
      "Manual processes exist as fallback"
    ],
    answer: "The automated system itself becomes critical and has no redundancy"
  },
  {
    question: "Technical debt in automation refers to:",
    options: [
      "Shortcuts taken that require future rework or create maintenance burden",
      "Financial loans for technology",
      "Server hardware costs",
      "Internet bills"
    ],
    answer: "Shortcuts taken that require future rework or create maintenance burden"
  },
  {
    question: "Ongoing supportability of automation requires:",
    options: [
      "Documentation, skilled personnel, and regular updates",
      "No maintenance after deployment",
      "Ignoring updates",
      "Deleting documentation"
    ],
    answer: "Documentation, skilled personnel, and regular updates"
  },

  // 4.8 - Incident Response Activities

  // Preparation
  {
    question: "The preparation phase of incident response includes:",
    options: [
      "Developing policies, training team members, and acquiring necessary tools",
      "Waiting for an incident to occur",
      "Ignoring security completely",
      "Only purchasing insurance"
    ],
    answer: "Developing policies, training team members, and acquiring necessary tools"
  },
  {
    question: "An incident response plan should define:",
    options: [
      "Roles, responsibilities, communication procedures, and escalation paths",
      "Only the team members' phone numbers",
      "No specific procedures",
      "Social media policies only"
    ],
    answer: "Roles, responsibilities, communication procedures, and escalation paths"
  },

  // Detection and Analysis
  {
    question: "Detection and analysis involves:",
    options: [
      "Identifying potential security incidents and determining their scope and impact",
      "Ignoring all alerts",
      "Only looking at logs once per year",
      "Deleting all security logs"
    ],
    answer: "Identifying potential security incidents and determining their scope and impact"
  },
  {
    question: "Indicators of Compromise (IoCs) help with:",
    options: [
      "Detecting and identifying security incidents",
      "Improving network speed",
      "Reducing costs",
      "Managing payroll"
    ],
    answer: "Detecting and identifying security incidents"
  },

  // Containment, Eradication, and Recovery
  {
    question: "The containment phase aims to:",
    options: [
      "Limit the damage and prevent the incident from spreading",
      "Delete all affected systems immediately",
      "Ignore the incident",
      "Publish details to social media"
    ],
    answer: "Limit the damage and prevent the incident from spreading"
  },
  {
    question: "Short-term containment might include:",
    options: [
      "Isolating affected systems from the network",
      "Shutting down the entire business",
      "Doing nothing",
      "Granting attackers more access"
    ],
    answer: "Isolating affected systems from the network"
  },
  {
    question: "Eradication involves:",
    options: [
      "Removing the threat from the environment completely",
      "Letting the threat remain",
      "Ignoring malware",
      "Installing more malware"
    ],
    answer: "Removing the threat from the environment completely"
  },
  {
    question: "The recovery phase includes:",
    options: [
      "Restoring systems to normal operation and verifying they're clean",
      "Leaving systems offline permanently",
      "Ignoring affected systems",
      "Deleting all data"
    ],
    answer: "Restoring systems to normal operation and verifying they're clean"
  },

  // Post-Incident Activity
  {
    question: "Post-incident activities should include:",
    options: [
      "Lessons learned sessions, updating procedures, and documenting the incident",
      "Forgetting everything that happened",
      "Blaming individuals without learning",
      "Ignoring future prevention"
    ],
    answer: "Lessons learned sessions, updating procedures, and documenting the incident"
  },
  {
    question: "A lessons learned meeting after an incident helps:",
    options: [
      "Identify what worked well and what needs improvement for future incidents",
      "Assign blame to individuals",
      "Delete all incident records",
      "Avoid discussing the incident"
    ],
    answer: "Identify what worked well and what needs improvement for future incidents"
  },

  // Training and Testing
  {
    question: "Tabletop exercises are:",
    options: [
      "Discussion-based simulations where team members walk through incident scenarios",
      "Physical furniture setup",
      "Gaming tournaments",
      "Employee lunch meetings"
    ],
    answer: "Discussion-based simulations where team members walk through incident scenarios"
  },
  {
    question: "Why is incident response training important?",
    options: [
      "To ensure team members know their roles and can respond effectively under pressure",
      "Only for compliance checkboxes",
      "Training is not necessary",
      "To waste time"
    ],
    answer: "To ensure team members know their roles and can respond effectively under pressure"
  },

  // 4.9 - Use Data Sources to Support an Investigation

  // Log Data
  {
    question: "What types of logs are valuable for security investigations?",
    options: [
      "Firewall, IDS/IPS, system, application, authentication, and network device logs",
      "Only email logs",
      "Social media posts",
      "No logs are useful"
    ],
    answer: "Firewall, IDS/IPS, system, application, authentication, and network device logs"
  },
  {
    question: "Why is log correlation important in investigations?",
    options: [
      "It helps piece together events across multiple systems to understand the full attack",
      "It deletes unnecessary logs",
      "It only stores logs",
      "Correlation is not useful"
    ],
    answer: "It helps piece together events across multiple systems to understand the full attack"
  },

  // Network Traffic and Packet Captures
  {
    question: "Packet captures (PCAPs) during investigations can reveal:",
    options: [
      "Detailed information about network communications including malicious payloads",
      "Only bandwidth usage",
      "Future predictions",
      "Nothing useful"
    ],
    answer: "Detailed information about network communications including malicious payloads"
  },
  {
    question: "Network flow data helps investigators:",
    options: [
      "Identify communication patterns and connections between systems",
      "Only measure speed",
      "Delete network traffic",
      "Block all traffic"
    ],
    answer: "Identify communication patterns and connections between systems"
  },

  // Endpoint Data
  {
    question: "Endpoint forensics may involve examining:",
    options: [
      "File systems, registry entries, running processes, and memory contents",
      "Only the desktop wallpaper",
      "Screen brightness settings",
      "Keyboard preferences"
    ],
    answer: "File systems, registry entries, running processes, and memory contents"
  },
  {
    question: "Memory forensics can help investigators:",
    options: [
      "Discover malware running only in RAM and encryption keys in memory",
      "Only see hard drive contents",
      "Delete all data",
      "Format drives"
    ],
    answer: "Discover malware running only in RAM and encryption keys in memory"
  },

  // Metadata
  {
    question: "File metadata in investigations can provide:",
    options: [
      "Creation dates, modification times, author information, and file access history",
      "Only file size",
      "Nothing useful",
      "Future predictions"
    ],
    answer: "Creation dates, modification times, author information, and file access history"
  },
  {
    question: "Email metadata helps investigators understand:",
    options: [
      "Sender, recipient, routing path, timestamps, and attachments",
      "Only the subject line",
      "Future emails",
      "Nothing"
    ],
    answer: "Sender, recipient, routing path, timestamps, and attachments"
  },

  // Automated Reports and Dashboards
  {
    question: "Automated security reports help investigations by:",
    options: [
      "Providing quick visibility into security events and trends",
      "Hiding security information",
      "Deleting data",
      "Slowing down analysis"
    ],
    answer: "Providing quick visibility into security events and trends"
  },
  {
    question: "Security dashboards should display:",
    options: [
      "Real-time security metrics, alerts, and key performance indicators",
      "Only historical data from years ago",
      "Employee birthdays",
      "Random numbers"
    ],
    answer: "Real-time security metrics, alerts, and key performance indicators"
  }
]
