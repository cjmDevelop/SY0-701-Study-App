export const securityTechniquesAndAssetManagementQuiz = [
  {
    quiz_ID: "4.1-4.2",
    quiz_name: "Security Techniques & Asset Management"
  },

  // 4.1 - Apply common security techniques to computing resources

  // Secure Baselines
  {
    question: "What is a secure baseline in the context of system configuration?",
    options: [
      "A documented minimum security configuration standard for systems",
      "The maximum performance setting for servers",
      "A backup of system files",
      "A network bandwidth measurement"
    ],
    answer: "A documented minimum security configuration standard for systems"
  },
  {
    question: "Why are secure baselines important for an organization?",
    options: [
      "They ensure consistent security configurations across all systems",
      "They increase system processing speed",
      "They eliminate the need for antivirus software",
      "They prevent all cyberattacks"
    ],
    answer: "They ensure consistent security configurations across all systems"
  },
  {
    question: "A system administrator deploys new servers using a hardened image. This is an example of implementing:",
    options: [
      "Secure baseline configuration",
      "Patch management",
      "Incident response",
      "Data loss prevention"
    ],
    answer: "Secure baseline configuration"
  },

  // Hardening Targets - Mobile devices, Workstations, Switches, Routers, Cloud infrastructure, Servers, ICS/SCADA, Embedded systems, RTOS, IoT
  {
    question: "Which hardening technique restricts mobile device features like camera or USB to prevent data leakage?",
    options: [
      "Disabling unnecessary features and ports",
      "Full disk encryption only",
      "Password complexity",
      "Network segmentation"
    ],
    answer: "Disabling unnecessary features and ports"
  },
  {
    question: "Hardening a workstation includes which of the following practices?",
    options: [
      "Removing unnecessary software, enabling firewall, and applying latest patches",
      "Installing all available software packages",
      "Disabling antivirus to improve performance",
      "Allowing all inbound connections"
    ],
    answer: "Removing unnecessary software, enabling firewall, and applying latest patches"
  },
  {
    question: "What is the primary security concern when hardening network switches?",
    options: [
      "Disabling unused ports and securing management interfaces",
      "Maximizing bandwidth usage",
      "Installing gaming software",
      "Enabling all protocols"
    ],
    answer: "Disabling unused ports and securing management interfaces"
  },
  {
    question: "Router hardening should include:",
    options: [
      "Changing default credentials, disabling unnecessary services, and enabling logging",
      "Enabling all routing protocols",
      "Using default passwords for convenience",
      "Disabling encryption"
    ],
    answer: "Changing default credentials, disabling unnecessary services, and enabling logging"
  },
  {
    question: "Which cloud infrastructure hardening practice is most critical?",
    options: [
      "Properly configuring security groups and access controls",
      "Allowing public access to all resources",
      "Disabling encryption to improve speed",
      "Sharing credentials across teams"
    ],
    answer: "Properly configuring security groups and access controls"
  },
  {
    question: "Server hardening best practices include:",
    options: [
      "Removing unnecessary services, implementing least privilege, and regular patching",
      "Installing all available services for functionality",
      "Granting administrative access to all users",
      "Disabling logging to save disk space"
    ],
    answer: "Removing unnecessary services, implementing least privilege, and regular patching"
  },
  {
    question: "What unique security challenge exists for Industrial Control Systems (ICS) and SCADA?",
    options: [
      "They often run legacy systems that cannot be easily patched or updated",
      "They have no security vulnerabilities",
      "They are immune to cyberattacks",
      "They require no hardening"
    ],
    answer: "They often run legacy systems that cannot be easily patched or updated"
  },
  {
    question: "Hardening embedded systems is challenging because:",
    options: [
      "They have limited resources and may lack security update mechanisms",
      "They are always connected to the internet",
      "They require no security measures",
      "They use the same OS as desktop computers"
    ],
    answer: "They have limited resources and may lack security update mechanisms"
  },
  {
    question: "What is a Real-Time Operating System (RTOS) and why is hardening important?",
    options: [
      "An OS designed for time-critical applications; hardening is critical because they control critical infrastructure",
      "A gaming operating system with no security needs",
      "A mobile phone OS",
      "A system that only runs at night"
    ],
    answer: "An OS designed for time-critical applications; hardening is critical because they control critical infrastructure"
  },
  {
    question: "IoT device hardening should prioritize:",
    options: [
      "Changing default credentials, disabling unnecessary services, and network segmentation",
      "Maximizing internet connectivity",
      "Keeping default passwords",
      "Disabling all security features"
    ],
    answer: "Changing default credentials, disabling unnecessary services, and network segmentation"
  },

  // Wireless Devices - Installation considerations
  {
    question: "When installing wireless access points, what security measure helps prevent unauthorized physical access?",
    options: [
      "Placing them in secure, monitored locations",
      "Installing them outside the building",
      "Making them easily accessible to everyone",
      "Hiding them in public areas"
    ],
    answer: "Placing them in secure, monitored locations"
  },
  {
    question: "What wireless security protocol should be used for modern enterprise networks?",
    options: [
      "WPA3-Enterprise",
      "WEP",
      "WPA",
      "Open network with no encryption"
    ],
    answer: "WPA3-Enterprise"
  },
  {
    question: "Site surveys for wireless network installation help identify:",
    options: [
      "Coverage areas, interference sources, and optimal AP placement",
      "Only the cost of equipment",
      "Employee lunch preferences",
      "Building architectural details only"
    ],
    answer: "Coverage areas, interference sources, and optimal AP placement"
  },

  // Mobile Solutions - Mobile device management (MDM), Deployment models (BYOD, COPE, CYOD)
  {
    question: "What does Mobile Device Management (MDM) allow organizations to do?",
    options: [
      "Centrally manage, configure, and secure mobile devices",
      "Only track device location",
      "Increase battery life",
      "Provide free data plans"
    ],
    answer: "Centrally manage, configure, and secure mobile devices"
  },
  {
    question: "In a BYOD (Bring Your Own Device) model, who owns the device?",
    options: [
      "The employee",
      "The organization",
      "The mobile carrier",
      "The device manufacturer"
    ],
    answer: "The employee"
  },
  {
    question: "What does COPE stand for in mobile deployment models?",
    options: [
      "Corporate Owned, Personally Enabled",
      "Company Operating Personal Equipment",
      "Centralized Online Privacy Enforcement",
      "Customer Owned Private Equipment"
    ],
    answer: "Corporate Owned, Personally Enabled"
  },
  {
    question: "CYOD (Choose Your Own Device) allows employees to:",
    options: [
      "Select from a list of approved corporate-owned devices",
      "Bring any personal device without restrictions",
      "Use only desktop computers",
      "Share devices with other employees"
    ],
    answer: "Select from a list of approved corporate-owned devices"
  },
  {
    question: "Which mobile deployment model provides the organization with the MOST control over security?",
    options: [
      "COPE (Corporate Owned, Personally Enabled)",
      "BYOD (Bring Your Own Device)",
      "Personal devices with no MDM",
      "Unmanaged devices"
    ],
    answer: "COPE (Corporate Owned, Personally Enabled)"
  },

  // Wireless Security Settings
  {
    question: "What wireless security setting prevents the SSID from being broadcast?",
    options: [
      "SSID suppression/hiding",
      "MAC filtering",
      "WPA3 encryption",
      "Channel selection"
    ],
    answer: "SSID suppression/hiding"
  },
  {
    question: "While hiding the SSID may seem like a security measure, why is it not considered strong security?",
    options: [
      "The SSID can still be discovered through packet sniffing and probe requests",
      "It provides military-grade encryption",
      "It completely prevents all attacks",
      "It's the only security measure needed"
    ],
    answer: "The SSID can still be discovered through packet sniffing and probe requests"
  },
  {
    question: "What does MAC filtering do on a wireless network?",
    options: [
      "Allows or blocks devices based on their hardware address",
      "Filters out spam emails",
      "Increases wireless signal strength",
      "Changes the network password daily"
    ],
    answer: "Allows or blocks devices based on their hardware address"
  },
  {
    question: "Why is MAC filtering alone insufficient for wireless security?",
    options: [
      "MAC addresses can be spoofed by attackers",
      "It provides perfect security",
      "It cannot be configured",
      "It slows down the network too much"
    ],
    answer: "MAC addresses can be spoofed by attackers"
  },

  // Application Security - Input validation, Secure cookies, Static code analysis, Code signing
  {
    question: "What application security technique prevents SQL injection and XSS attacks?",
    options: [
      "Input validation",
      "Code signing",
      "Static analysis",
      "Secure cookies"
    ],
    answer: "Input validation"
  },
  {
    question: "Secure cookie attributes include HttpOnly and Secure flags. What do these protect against?",
    options: [
      "HttpOnly prevents JavaScript access; Secure ensures transmission only over HTTPS",
      "They increase cookie storage capacity",
      "They make cookies taste better",
      "They disable all cookies"
    ],
    answer: "HttpOnly prevents JavaScript access; Secure ensures transmission only over HTTPS"
  },
  {
    question: "What is static code analysis?",
    options: [
      "Examining source code for vulnerabilities without executing it",
      "Running the application to find bugs",
      "Deleting all code comments",
      "Compiling code faster"
    ],
    answer: "Examining source code for vulnerabilities without executing it"
  },
  {
    question: "Code signing ensures:",
    options: [
      "The software comes from a verified publisher and hasn't been tampered with",
      "The code runs faster",
      "The application has no bugs",
      "Free distribution rights"
    ],
    answer: "The software comes from a verified publisher and hasn't been tampered with"
  },

  // Sandboxing
  {
    question: "What is sandboxing in application security?",
    options: [
      "Running applications in an isolated environment to prevent system-wide damage",
      "Building applications at the beach",
      "Storing data in sand",
      "A type of malware"
    ],
    answer: "Running applications in an isolated environment to prevent system-wide damage"
  },
  {
    question: "Web browsers use sandboxing to:",
    options: [
      "Isolate tabs so a compromised tab cannot affect the entire system",
      "Increase browsing speed",
      "Download files faster",
      "Block all websites"
    ],
    answer: "Isolate tabs so a compromised tab cannot affect the entire system"
  },

  // Monitoring
  {
    question: "What type of monitoring examines computing resources for security events and anomalies?",
    options: [
      "Security monitoring",
      "Performance monitoring only",
      "Financial monitoring",
      "Social media monitoring"
    ],
    answer: "Security monitoring"
  },

  // 4.2 - Security implications of proper hardware, software, and data asset management

  // Acquisition/Procurement
  {
    question: "Why is security important during the acquisition and procurement process?",
    options: [
      "To ensure purchased hardware and software meet security requirements and are from trusted sources",
      "Only to get the lowest price",
      "Security is not relevant to procurement",
      "To purchase as quickly as possible"
    ],
    answer: "To ensure purchased hardware and software meet security requirements and are from trusted sources"
  },
  {
    question: "What should be included in procurement security requirements?",
    options: [
      "Vendor security assessments, compliance certifications, and security features",
      "Only the product color",
      "No security requirements needed",
      "Just the warranty period"
    ],
    answer: "Vendor security assessments, compliance certifications, and security features"
  },

  // Assignment/Accounting
  {
    question: "Asset assignment and accounting involves:",
    options: [
      "Tracking which assets are assigned to which users or departments",
      "Only counting money",
      "Ignoring hardware locations",
      "Disposing of all assets"
    ],
    answer: "Tracking which assets are assigned to which users or departments"
  },
  {
    question: "Why is proper asset assignment important for security?",
    options: [
      "It establishes accountability and helps track devices if they're lost or compromised",
      "It has no security benefit",
      "It only helps with budgeting",
      "It slows down operations"
    ],
    answer: "It establishes accountability and helps track devices if they're lost or compromised"
  },

  // Monitoring/Asset Tracking
  {
    question: "Asset tracking systems help organizations:",
    options: [
      "Maintain an inventory of all hardware and software assets and their locations",
      "Only track employee attendance",
      "Monitor social media activity",
      "Track customer purchases"
    ],
    answer: "Maintain an inventory of all hardware and software assets and their locations"
  },
  {
    question: "What security benefit does asset monitoring provide?",
    options: [
      "Detecting unauthorized devices and identifying missing or stolen equipment",
      "Increasing internet speed",
      "Providing free software",
      "No security benefits"
    ],
    answer: "Detecting unauthorized devices and identifying missing or stolen equipment"
  },

  // Enumeration
  {
    question: "In asset management, enumeration refers to:",
    options: [
      "Creating a comprehensive list of all IT assets in the organization",
      "Deleting all assets",
      "Counting office supplies only",
      "Numbering employees"
    ],
    answer: "Creating a comprehensive list of all IT assets in the organization"
  },
  {
    question: "Why is complete asset enumeration critical for security?",
    options: [
      "You cannot protect what you don't know exists; unknown assets create security blind spots",
      "It's only for financial reporting",
      "It has no security value",
      "It slows down the network"
    ],
    answer: "You cannot protect what you don't know exists; unknown assets create security blind spots"
  },

  // Disposal/Decommissioning
  {
    question: "What is the primary security concern when disposing of old hard drives?",
    options: [
      "Ensuring all data is securely erased or destroyed to prevent data leakage",
      "Getting the best resale value",
      "Recycling for environmental reasons only",
      "Disposal has no security implications"
    ],
    answer: "Ensuring all data is securely erased or destroyed to prevent data leakage"
  },
  {
    question: "Which method provides the highest assurance that data cannot be recovered from a hard drive?",
    options: [
      "Physical destruction (shredding, degaussing, or incineration)",
      "Deleting files and emptying recycle bin",
      "Quick format",
      "Removing the drive label"
    ],
    answer: "Physical destruction (shredding, degaussing, or incineration)"
  },
  {
    question: "What is degaussing?",
    options: [
      "Using a powerful magnetic field to erase data from magnetic storage media",
      "A type of encryption",
      "A backup method",
      "A network protocol"
    ],
    answer: "Using a powerful magnetic field to erase data from magnetic storage media"
  },
  {
    question: "Before decommissioning a server, what should be done?",
    options: [
      "Securely wipe all data, remove from inventory, and document the decommissioning",
      "Just unplug it",
      "Throw it away immediately",
      "Sell it with all data intact"
    ],
    answer: "Securely wipe all data, remove from inventory, and document the decommissioning"
  },
  {
    question: "What is a certificate of destruction?",
    options: [
      "Documentation proving that assets were properly destroyed according to security standards",
      "A warranty document",
      "An insurance policy",
      "A purchase receipt"
    ],
    answer: "Documentation proving that assets were properly destroyed according to security standards"
  },

  // Classification
  {
    question: "Data classification helps organizations:",
    options: [
      "Categorize data based on sensitivity and apply appropriate security controls",
      "Delete all data",
      "Share all data publicly",
      "Ignore data security"
    ],
    answer: "Categorize data based on sensitivity and apply appropriate security controls"
  },
  {
    question: "Common data classification levels in order from most to least sensitive typically include:",
    options: [
      "Top Secret, Secret, Confidential, Public",
      "Public, Internal, Secret, Public again",
      "Low, Medium, High, Very High",
      "Red, Yellow, Green, Blue"
    ],
    answer: "Top Secret, Secret, Confidential, Public"
  },
  {
    question: "Why is data classification important for security?",
    options: [
      "It ensures sensitive data receives stronger protection than public data",
      "It makes all data public",
      "It has no security purpose",
      "It only helps with file naming"
    ],
    answer: "It ensures sensitive data receives stronger protection than public data"
  },
  {
    question: "In a corporate environment, proprietary business plans would typically be classified as:",
    options: [
      "Confidential or Secret",
      "Public",
      "Unclassified",
      "Declassified"
    ],
    answer: "Confidential or Secret"
  }
]
