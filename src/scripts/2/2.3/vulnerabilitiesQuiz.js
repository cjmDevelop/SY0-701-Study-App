export const vulnerabilitiesQuiz = [
     {
    quiz_ID: 2.3,
    quiz_name: "2.3 - Various types of vulnerabilities"
  },
  // === APPLICATION VULNERABILITIES ===
  
  // Memory Injection
  {
    question: "Which type of attack involves injecting malicious code into a program's memory space to alter its execution flow?",
    options: ["Memory injection", "SQL injection", "Cross-site scripting", "Privilege escalation"],
    answer: "Memory injection"
  },
  {
    question: "DLL injection is an example of which vulnerability type?",
    options: ["Memory injection", "Buffer overflow", "Race condition", "SQL injection"],
    answer: "Memory injection"
  },
  
  // Buffer Overflow
  {
    question: "A buffer overflow occurs when:",
    options: [
      "An application writes more data to a buffer than it can hold",
      "A program validates all input before using it",
      "Memory is protected by ASLR",
      "A process waits for another to finish"
    ],
    answer: "An application writes more data to a buffer than it can hold"
  },
  {
    question: "Which mitigation technique helps prevent buffer overflow attacks?",
    options: [
      "Address Space Layout Randomization (ASLR) and Data Execution Prevention (DEP)",
      "Disabling all input validation",
      "Removing memory protections",
      "Using deprecated functions"
    ],
    answer: "Address Space Layout Randomization (ASLR) and Data Execution Prevention (DEP)"
  },
  {
    question: "A stack-based buffer overflow specifically targets:",
    options: [
      "The call stack memory region to overwrite return addresses",
      "Database query strings",
      "Web application cookies",
      "Network packet headers"
    ],
    answer: "The call stack memory region to overwrite return addresses"
  },
  
  // Race Conditions (TOC/TOU)
  {
    question: "A race condition vulnerability occurs when:",
    options: [
      "Two or more processes access shared data concurrently without proper synchronization",
      "An attacker exploits weak passwords",
      "System updates fail due to corruption",
      "The CPU executes instructions too slowly"
    ],
    answer: "Two or more processes access shared data concurrently without proper synchronization"
  },
  {
    question: "In a Time-of-Check to Time-of-Use (TOC/TOU) attack, the attacker exploits:",
    options: [
      "The time gap between validating a resource and actually using it",
      "Buffer memory limits",
      "Improper error handling",
      "Weak encryption algorithms"
    ],
    answer: "The time gap between validating a resource and actually using it"
  },
  {
    question: "A program checks if a user has permission to access a file (TOC), but before the file is opened (TOU), an attacker replaces it with a symbolic link. This is:",
    options: [
      "A TOC/TOU race condition vulnerability",
      "A buffer overflow",
      "SQL injection",
      "Cross-site scripting"
    ],
    answer: "A TOC/TOU race condition vulnerability"
  },
  {
    question: "Which programming practice helps mitigate race condition vulnerabilities?",
    options: [
      "Using proper locks, mutexes, and atomic operations",
      "Disabling all multi-threading",
      "Removing input validation",
      "Using deprecated APIs"
    ],
    answer: "Using proper locks, mutexes, and atomic operations"
  },
  
  // Malicious Update
  {
    question: "A malicious update vulnerability typically occurs when:",
    options: [
      "An attacker compromises a legitimate software update mechanism to distribute malware",
      "A developer misconfigures a web server",
      "Software uses outdated algorithms",
      "Hardware reaches end-of-life"
    ],
    answer: "An attacker compromises a legitimate software update mechanism to distribute malware"
  },
  {
    question: "Which practice helps prevent malicious update attacks?",
    options: [
      "Code signing and verification of update integrity",
      "Disabling all software updates",
      "Using unencrypted update channels",
      "Removing update authentication"
    ],
    answer: "Code signing and verification of update integrity"
  },
  
  // NEW: Application vulnerability comparisons
  {
    question: "Compare buffer overflow and memory injection: What's the key difference?",
    options: [
      "Buffer overflow writes beyond boundaries; memory injection inserts code into running processes",
      "They are identical vulnerabilities",
      "Buffer overflow only affects web apps",
      "Memory injection only affects databases"
    ],
    answer: "Buffer overflow writes beyond boundaries; memory injection inserts code into running processes"
  },

  // === OPERATING SYSTEM (OS)-BASED VULNERABILITIES ===
  
  {
    question: "OS-based vulnerabilities commonly arise from:",
    options: [
      "Unpatched operating systems and misconfigured permissions",
      "Encrypted file systems",
      "Regular patch management",
      "Strong access controls"
    ],
    answer: "Unpatched operating systems and misconfigured permissions"
  },
  {
    question: "Privilege escalation in an OS allows an attacker to:",
    options: [
      "Gain higher-level permissions than originally granted",
      "Reduce system performance",
      "Encrypt user files",
      "Block network traffic"
    ],
    answer: "Gain higher-level permissions than originally granted"
  },
  {
    question: "Which Windows vulnerability allowed attackers to execute code with SYSTEM privileges due to improper token handling?",
    options: [
      "Privilege escalation vulnerability",
      "SQL injection",
      "XSS vulnerability",
      "Buffer overflow in web apps"
    ],
    answer: "Privilege escalation vulnerability"
  },
  {
    question: "Kernel vulnerabilities are particularly dangerous because:",
    options: [
      "They operate at the highest privilege level with full system access",
      "They only affect user applications",
      "They cannot be exploited remotely",
      "They are easily detected by antivirus"
    ],
    answer: "They operate at the highest privilege level with full system access"
  },
  {
    question: "An OS vulnerability that allows reading arbitrary kernel memory (like Meltdown/Spectre) is an example of:",
    options: [
      "OS-based hardware/software interaction vulnerability",
      "Web application vulnerability",
      "Social engineering attack",
      "Physical security breach"
    ],
    answer: "OS-based hardware/software interaction vulnerability"
  },
  {
    question: "Which mitigation is most effective against OS-based vulnerabilities?",
    options: [
      "Regular patching and least privilege access controls",
      "Disabling all OS updates",
      "Removing all user accounts",
      "Disabling network connectivity"
    ],
    answer: "Regular patching and least privilege access controls"
  },

  // === WEB-BASED VULNERABILITIES ===
  
  // SQL Injection (SQLi)
  {
    question: "SQL injection attacks target:",
    options: [
      "Database queries executed by a web application",
      "Operating system kernel memory",
      "Network routing protocols",
      "Hardware firmware"
    ],
    answer: "Database queries executed by a web application"
  },
  {
    question: "An attacker enters ' OR '1'='1 into a login form to bypass authentication. This is:",
    options: [
      "SQL injection attack",
      "Cross-site scripting",
      "Buffer overflow",
      "Race condition"
    ],
    answer: "SQL injection attack"
  },
  {
    question: "Which defense is MOST effective against SQL injection?",
    options: [
      "Parameterized queries and prepared statements",
      "Removing all database access",
      "Disabling web application firewalls",
      "Using client-side validation only"
    ],
    answer: "Parameterized queries and prepared statements"
  },
  {
    question: "Blind SQL injection differs from traditional SQLi because:",
    options: [
      "The attacker cannot see direct output but infers data from application behavior",
      "It only works on Oracle databases",
      "It requires physical access",
      "It cannot extract data"
    ],
    answer: "The attacker cannot see direct output but infers data from application behavior"
  },
  {
    question: "A successful SQL injection attack could allow an attacker to:",
    options: [
      "Read, modify, or delete database contents and potentially execute OS commands",
      "Only view public web pages",
      "Improve database performance",
      "Automatically patch the database"
    ],
    answer: "Read, modify, or delete database contents and potentially execute OS commands"
  },
  
  // Cross-Site Scripting (XSS)
  {
    question: "Cross-site scripting (XSS) allows attackers to:",
    options: [
      "Inject malicious scripts into web pages viewed by other users",
      "Intercept encrypted communications",
      "Modify OS kernel processes",
      "Exploit firmware vulnerabilities"
    ],
    answer: "Inject malicious scripts into web pages viewed by other users"
  },
  {
    question: "Stored XSS differs from reflected XSS because:",
    options: [
      "Stored XSS saves malicious code in the database; reflected XSS executes immediately from URL/input",
      "Stored XSS is less dangerous",
      "Reflected XSS cannot steal cookies",
      "They are exactly the same"
    ],
    answer: "Stored XSS saves malicious code in the database; reflected XSS executes immediately from URL/input"
  },
  {
    question: "DOM-based XSS vulnerabilities occur when:",
    options: [
      "Client-side JavaScript processes untrusted data and updates the DOM insecurely",
      "The database is compromised",
      "The server validates all input",
      "TLS encryption is enabled"
    ],
    answer: "Client-side JavaScript processes untrusted data and updates the DOM insecurely"
  },
  {
    question: "Which HTTP header helps prevent XSS attacks?",
    options: [
      "Content-Security-Policy (CSP)",
      "Authorization",
      "Accept-Language",
      "Cache-Control"
    ],
    answer: "Content-Security-Policy (CSP)"
  },
  {
    question: "The primary mitigation for XSS vulnerabilities is:",
    options: [
      "Input validation and output encoding/escaping",
      "Disabling JavaScript entirely",
      "Using HTTP instead of HTTPS",
      "Removing all user input fields"
    ],
    answer: "Input validation and output encoding/escaping"
  },
  
  // NEW: Web vulnerability comparisons
  {
    question: "Compare SQLi and XSS: Which statement is correct?",
    options: [
      "SQLi targets the database layer; XSS targets the client/browser layer",
      "Both target only the database",
      "SQLi only affects browsers",
      "XSS requires database access"
    ],
    answer: "SQLi targets the database layer; XSS targets the client/browser layer"
  },
  {
    question: "Which web vulnerability would allow an attacker to steal session cookies from other users?",
    options: [
      "Cross-site scripting (XSS)",
      "SQL injection",
      "Buffer overflow",
      "Firmware vulnerability"
    ],
    answer: "Cross-site scripting (XSS)"
  },

  // === HARDWARE VULNERABILITIES ===
  
  // Firmware
  {
    question: "Firmware vulnerabilities are particularly dangerous because:",
    options: [
      "They operate below the OS level and can persist after OS reinstallation",
      "They only affect user applications",
      "They are easily removed by antivirus software",
      "They exist only in volatile memory"
    ],
    answer: "They operate below the OS level and can persist after OS reinstallation"
  },
  {
    question: "A UEFI rootkit is an example of which vulnerability type?",
    options: [
      "Firmware vulnerability",
      "Web-based vulnerability",
      "Application memory injection",
      "Cloud misconfiguration"
    ],
    answer: "Firmware vulnerability"
  },
  {
    question: "Which mitigation helps protect against firmware attacks?",
    options: [
      "Secure Boot and firmware integrity verification",
      "Disabling all BIOS/UEFI settings",
      "Removing firmware updates",
      "Using only legacy BIOS"
    ],
    answer: "Secure Boot and firmware integrity verification"
  },
  
  // End-of-Life
  {
    question: "End-of-life (EOL) hardware increases security risk because:",
    options: [
      "It no longer receives security updates or patches from the vendor",
      "It has stronger encryption than newer hardware",
      "It automatically patches itself",
      "It cannot connect to networks"
    ],
    answer: "It no longer receives security updates or patches from the vendor"
  },
  {
    question: "A network switch that reached EOL 5 years ago should be:",
    options: [
      "Replaced or isolated with compensating controls due to unpatched vulnerabilities",
      "Connected directly to the internet",
      "Used without restrictions",
      "Given administrative privileges"
    ],
    answer: "Replaced or isolated with compensating controls due to unpatched vulnerabilities"
  },
  
  // Legacy
  {
    question: "Legacy hardware is especially vulnerable because:",
    options: [
      "It lacks modern security features and vendor support",
      "It is incompatible with older software",
      "It always runs in virtualized environments",
      "It includes built-in quantum encryption"
    ],
    answer: "It lacks modern security features and vendor support"
  },
  {
    question: "An industrial control system running on 20-year-old hardware represents which vulnerability?",
    options: [
      "Legacy hardware vulnerability",
      "Zero-day vulnerability",
      "XSS vulnerability",
      "SQL injection"
    ],
    answer: "Legacy hardware vulnerability"
  },
  
  // NEW: Hardware vulnerability comparisons
  {
    question: "What distinguishes end-of-life from legacy hardware?",
    options: [
      "EOL has a specific vendor support termination date; legacy refers to older technology still in use",
      "They are identical terms",
      "EOL hardware is newer than legacy",
      "Legacy hardware always receives updates"
    ],
    answer: "EOL has a specific vendor support termination date; legacy refers to older technology still in use"
  },

  // === VIRTUALIZATION VULNERABILITIES ===
  
  // VM Escape
  {
    question: "A virtual machine (VM) escape occurs when:",
    options: [
      "An attacker breaks out of a VM and gains access to the host system or other VMs",
      "The VM consumes excessive CPU resources",
      "The hypervisor shuts down unexpectedly",
      "Guest VMs lose network connectivity"
    ],
    answer: "An attacker breaks out of a VM and gains access to the host system or other VMs"
  },
  {
    question: "VM escape vulnerabilities are critical because:",
    options: [
      "They allow attackers to compromise the hypervisor and all hosted VMs",
      "They only affect a single VM",
      "They cannot be exploited remotely",
      "They improve VM performance"
    ],
    answer: "They allow attackers to compromise the hypervisor and all hosted VMs"
  },
  {
    question: "Which mitigation helps prevent VM escape attacks?",
    options: [
      "Keep hypervisor software patched and properly configure VM isolation",
      "Disable all hypervisor updates",
      "Remove network isolation between VMs",
      "Grant all VMs administrative access to the host"
    ],
    answer: "Keep hypervisor software patched and properly configure VM isolation"
  },
  
  // Resource Reuse
  {
    question: "Resource reuse vulnerabilities in virtualization occur when:",
    options: [
      "Residual data from one VM is accessible to another VM using the same resources",
      "Multiple VMs share CPU cycles efficiently",
      "The hypervisor allocates memory properly",
      "VMs are snapshotted regularly"
    ],
    answer: "Residual data from one VM is accessible to another VM using the same resources"
  },
  {
    question: "Data remanence in virtualization refers to:",
    options: [
      "Sensitive data persisting in memory or storage after a VM is deleted",
      "VM backups stored securely",
      "Encrypted VM snapshots",
      "Proper resource allocation"
    ],
    answer: "Sensitive data persisting in memory or storage after a VM is deleted"
  },
  {
    question: "Which practice mitigates resource reuse vulnerabilities?",
    options: [
      "Properly wiping or zeroing memory and storage before reallocation",
      "Never deleting old VMs",
      "Sharing memory between all VMs",
      "Disabling all encryption"
    ],
    answer: "Properly wiping or zeroing memory and storage before reallocation"
  },
  
  // NEW: Additional virtualization concepts
  {
    question: "VM sprawl can create security vulnerabilities because:",
    options: [
      "Unmanaged and forgotten VMs may remain unpatched and exploitable",
      "Too many VMs improve security",
      "VMs automatically update themselves",
      "VM sprawl prevents attacks"
    ],
    answer: "Unmanaged and forgotten VMs may remain unpatched and exploitable"
  },

  // === CLOUD-SPECIFIC VULNERABILITIES ===
  
  {
    question: "A common cloud-specific vulnerability is:",
    options: [
      "Misconfigured storage buckets and insecure APIs with inadequate access controls",
      "Using encryption for data at rest",
      "Implementing strong identity federation",
      "Enabling multi-factor authentication"
    ],
    answer: "Misconfigured storage buckets and insecure APIs with inadequate access controls"
  },
  {
    question: "An AWS S3 bucket configured with public read access containing sensitive customer data is an example of:",
    options: [
      "Cloud misconfiguration vulnerability",
      "Buffer overflow",
      "SQL injection",
      "VM escape"
    ],
    answer: "Cloud misconfiguration vulnerability"
  },
  {
    question: "Insecure cloud APIs pose risks because:",
    options: [
      "They can expose sensitive data and allow unauthorized access if not properly secured",
      "They automatically encrypt all data",
      "They prevent all attacks",
      "They require no authentication"
    ],
    answer: "They can expose sensitive data and allow unauthorized access if not properly secured"
  },
  {
    question: "Which shared responsibility model issue creates cloud vulnerabilities?",
    options: [
      "Organizations misconfiguring resources they're responsible for securing",
      "Cloud providers patching their infrastructure",
      "Using cloud-native encryption",
      "Implementing proper IAM policies"
    ],
    answer: "Organizations misconfiguring resources they're responsible for securing"
  },
  {
    question: "Inadequate cloud identity and access management (IAM) can lead to:",
    options: [
      "Privilege escalation and unauthorized access to cloud resources",
      "Improved security posture",
      "Automatic vulnerability patching",
      "Enhanced encryption"
    ],
    answer: "Privilege escalation and unauthorized access to cloud resources"
  },
  {
    question: "Account hijacking in cloud environments is particularly dangerous because:",
    options: [
      "Attackers can access multiple resources and services with a single compromised account",
      "It only affects one virtual machine",
      "It cannot lead to data breaches",
      "It improves account security"
    ],
    answer: "Attackers can access multiple resources and services with a single compromised account"
  },
  {
    question: "Which tool helps identify cloud misconfigurations?",
    options: [
      "Cloud Security Posture Management (CSPM) solutions",
      "Text editors",
      "Web browsers only",
      "Antivirus software"
    ],
    answer: "Cloud Security Posture Management (CSPM) solutions"
  },
  {
    question: "Serverless computing vulnerabilities can include:",
    options: [
      "Function-level access control issues and injection flaws in function code",
      "Physical server access",
      "Hardware firmware vulnerabilities",
      "Legacy OS issues"
    ],
    answer: "Function-level access control issues and injection flaws in function code"
  },

  // === SUPPLY CHAIN VULNERABILITIES ===
  
  {
    question: "A supply chain vulnerability occurs when:",
    options: [
      "A trusted third-party vendor introduces risk through compromised software, hardware, or services",
      "A company uses strong encryption internally",
      "Systems are isolated from all vendors",
      "An employee works from home"
    ],
    answer: "A trusted third-party vendor introduces risk through compromised software, hardware, or services"
  },
  
  // Service Provider
  {
    question: "A compromised managed service provider (MSP) distributing malware through remote management tools is an example of:",
    options: [
      "Supply chain vulnerability through service provider",
      "Direct malware infection",
      "XSS attack",
      "Buffer overflow"
    ],
    answer: "Supply chain vulnerability through service provider"
  },
  {
    question: "Cloud service provider vulnerabilities can impact customers through:",
    options: [
      "Shared infrastructure compromises and inadequate tenant isolation",
      "Customer-only misconfigurations",
      "Improved security controls",
      "Enhanced encryption"
    ],
    answer: "Shared infrastructure compromises and inadequate tenant isolation"
  },
  {
    question: "Which supply chain risk is specific to SaaS providers?",
    options: [
      "Application-level vulnerabilities affecting all tenant data",
      "Physical hardware tampering only",
      "Client-side XSS only",
      "Local buffer overflows"
    ],
    answer: "Application-level vulnerabilities affecting all tenant data"
  },
  
  // Hardware Provider
  {
    question: "A hardware supply chain attack might involve:",
    options: [
      "Installing backdoors or malicious firmware during manufacturing",
      "Properly testing all components",
      "Using certified suppliers only",
      "Encrypting hardware shipments"
    ],
    answer: "Installing backdoors or malicious firmware during manufacturing"
  },
  {
    question: "Counterfeit hardware in the supply chain poses risks because:",
    options: [
      "It may contain substandard components or hidden malicious functionality",
      "It is always more secure",
      "It comes with better warranties",
      "It receives more frequent updates"
    ],
    answer: "It may contain substandard components or hidden malicious functionality"
  },
  {
    question: "Hardware implants discovered in server components represent which vulnerability?",
    options: [
      "Supply chain hardware provider vulnerability",
      "Software vulnerability only",
      "Web application vulnerability",
      "User error"
    ],
    answer: "Supply chain hardware provider vulnerability"
  },
  
  // Software Provider
  {
    question: "The SolarWinds Orion attack (2020) is a prime example of:",
    options: [
      "Supply chain vulnerability through software provider",
      "Simple phishing attack",
      "SQL injection",
      "Physical breach"
    ],
    answer: "Supply chain vulnerability through software provider"
  },
  {
    question: "A malicious update pushed through a software vendor's update mechanism is an example of:",
    options: [
      "Supply chain software provider vulnerability",
      "Cloud misconfiguration",
      "Race condition",
      "XSS attack"
    ],
    answer: "Supply chain software provider vulnerability"
  },
  {
    question: "Open-source software supply chain attacks can occur when:",
    options: [
      "Malicious code is inserted into widely-used libraries or dependencies",
      "Code is properly reviewed",
      "All dependencies are verified",
      "Software is compiled securely"
    ],
    answer: "Malicious code is inserted into widely-used libraries or dependencies"
  },
  {
    question: "Which practice helps mitigate software supply chain risks?",
    options: [
      "Software Composition Analysis (SCA) and dependency verification",
      "Installing all software without verification",
      "Disabling all updates",
      "Using only deprecated libraries"
    ],
    answer: "Software Composition Analysis (SCA) and dependency verification"
  },
  
  // NEW: Supply chain comparisons
  {
    question: "Compare supply chain vulnerability sources: Which has the widest potential impact?",
    options: [
      "Software provider compromise affecting widely-deployed applications",
      "Single hardware device compromise",
      "Individual service provider issue",
      "Single customer misconfiguration"
    ],
    answer: "Software provider compromise affecting widely-deployed applications"
  },

  // === CRYPTOGRAPHIC VULNERABILITIES ===
  
  {
    question: "Cryptographic vulnerabilities commonly arise from:",
    options: [
      "Weak encryption algorithms, poor key management, or improper implementation",
      "Using strong encryption standards",
      "Implementing perfect forward secrecy",
      "Using long key lengths"
    ],
    answer: "Weak encryption algorithms, poor key management, or improper implementation"
  },
  {
    question: "Using deprecated cryptographic algorithms like DES or MD5 creates which vulnerability?",
    options: [
      "Cryptographic vulnerability due to weak/broken algorithms",
      "Buffer overflow",
      "SQL injection",
      "XSS vulnerability"
    ],
    answer: "Cryptographic vulnerability due to weak/broken algorithms"
  },
  {
    question: "Hardcoded encryption keys in source code represent:",
    options: [
      "Cryptographic vulnerability due to poor key management",
      "Strong security practice",
      "VM escape risk",
      "Hardware vulnerability"
    ],
    answer: "Cryptographic vulnerability due to poor key management"
  },
  {
    question: "Using insufficient key lengths (e.g., 512-bit RSA) creates which risk?",
    options: [
      "Cryptographic vulnerability allowing brute-force attacks",
      "Improved performance",
      "Better security",
      "SQL injection risk"
    ],
    answer: "Cryptographic vulnerability allowing brute-force attacks"
  },
  {
    question: "Improper certificate validation in applications can lead to:",
    options: [
      "Man-in-the-middle attacks due to cryptographic implementation flaws",
      "Enhanced encryption",
      "Automatic patching",
      "Hardware failures"
    ],
    answer: "Man-in-the-middle attacks due to cryptographic implementation flaws"
  },
  {
    question: "SSL/TLS downgrade attacks exploit which cryptographic vulnerability?",
    options: [
      "Protocol negotiation weaknesses allowing older, insecure cipher suites",
      "Strong encryption enforcement",
      "Perfect forward secrecy",
      "Certificate pinning"
    ],
    answer: "Protocol negotiation weaknesses allowing older, insecure cipher suites"
  },
  {
    question: "Predictable or weak random number generators (RNGs) in cryptography can compromise:",
    options: [
      "Key generation, making encrypted data vulnerable to attacks",
      "Only application performance",
      "Database integrity",
      "Network routing"
    ],
    answer: "Key generation, making encrypted data vulnerable to attacks"
  },
  {
    question: "Which cryptographic vulnerability allows attackers to decrypt data by exploiting implementation flaws without breaking the algorithm itself?",
    options: [
      "Side-channel attacks (timing, power analysis)",
      "SQL injection",
      "XSS attacks",
      "Buffer overflows"
    ],
    answer: "Side-channel attacks (timing, power analysis)"
  },

  // === MISCONFIGURATION VULNERABILITIES ===
  
  {
    question: "Which is an example of a misconfiguration vulnerability?",
    options: [
      "Leaving default administrative credentials enabled on systems",
      "Using regularly updated firmware",
      "Implementing principle of least privilege",
      "Following patching schedules"
    ],
    answer: "Leaving default administrative credentials enabled on systems"
  },
  {
    question: "Open directory listings on a web server represent which vulnerability?",
    options: [
      "Misconfiguration allowing information disclosure",
      "SQL injection",
      "Buffer overflow",
      "Race condition"
    ],
    answer: "Misconfiguration allowing information disclosure"
  },
  {
    question: "Disabled security logging and monitoring is an example of:",
    options: [
      "Security misconfiguration reducing detection capabilities",
      "Best security practice",
      "Hardware vulnerability",
      "Cryptographic flaw"
    ],
    answer: "Security misconfiguration reducing detection capabilities"
  },
  {
    question: "Unnecessary services running on production systems create which vulnerability?",
    options: [
      "Misconfiguration expanding the attack surface",
      "Improved performance",
      "Enhanced security",
      "Better redundancy"
    ],
    answer: "Misconfiguration expanding the attack surface"
  },
  {
    question: "Permissive firewall rules allowing all traffic is a:",
    options: [
      "Network misconfiguration vulnerability",
      "SQL injection vulnerability",
      "Application bug",
      "Hardware defect"
    ],
    answer: "Network misconfiguration vulnerability"
  },
  {
    question: "Excessive user permissions violating least privilege is a:",
    options: [
      "Access control misconfiguration",
      "Cryptographic vulnerability",
      "VM escape",
      "Zero-day exploit"
    ],
    answer: "Access control misconfiguration"
  },
  {
    question: "Verbose error messages revealing system details represent:",
    options: [
      "Information disclosure through misconfiguration",
      "Proper debugging configuration",
      "Required security feature",
      "Hardware vulnerability"
    ],
    answer: "Information disclosure through misconfiguration"
  },
  {
    question: "Which practice helps identify misconfiguration vulnerabilities?",
    options: [
      "Regular security configuration audits and baseline compliance checks",
      "Disabling all security tools",
      "Removing all access controls",
      "Using only default settings"
    ],
    answer: "Regular security configuration audits and baseline compliance checks"
  },

  // === MOBILE DEVICE VULNERABILITIES ===
  
  // Side Loading
  {
    question: "Sideloading on a mobile device refers to:",
    options: [
      "Installing applications from unofficial sources outside the official app store",
      "Disabling mobile data usage",
      "Encrypting the entire device",
      "Using only the official app store"
    ],
    answer: "Installing applications from unofficial sources outside the official app store"
  },
  {
    question: "The primary risk of sideloading apps is:",
    options: [
      "Installing malicious or unverified applications that bypass security checks",
      "Improving device performance",
      "Enhancing battery life",
      "Automatic security updates"
    ],
    answer: "Installing malicious or unverified applications that bypass security checks"
  },
  {
    question: "Which mobile platform has more restrictive controls against sideloading by default?",
    options: [
      "iOS (iPhone/iPad)",
      "Android",
      "Both allow sideloading equally",
      "Neither allows sideloading"
    ],
    answer: "iOS (iPhone/iPad)"
  },
  
  // Jailbreaking
  {
    question: "Jailbreaking an iPhone or rooting an Android device increases security risk because:",
    options: [
      "It removes built-in security controls and OS-level protections",
      "It enables automatic system patching",
      "It restricts application access",
      "It locks the device to a single carrier"
    ],
    answer: "It removes built-in security controls and OS-level protections"
  },
  {
    question: "After jailbreaking/rooting, a mobile device becomes vulnerable to:",
    options: [
      "Malware that exploits removed security restrictions and unauthorized system access",
      "Automatic security improvements",
      "Enhanced encryption",
      "Better vendor support"
    ],
    answer: "Malware that exploits removed security restrictions and unauthorized system access"
  },
  {
    question: "Which security feature is typically bypassed when a device is jailbroken or rooted?",
    options: [
      "Application sandboxing and code signing verification",
      "Screen brightness controls",
      "Bluetooth connectivity",
      "Wi-Fi capabilities"
    ],
    answer: "Application sandboxing and code signing verification"
  },
  {
    question: "Organizations can detect jailbroken/rooted devices using:",
    options: [
      "Mobile Device Management (MDM) solutions with integrity checks",
      "Standard web browsers",
      "Email clients only",
      "Physical inspection only"
    ],
    answer: "Mobile Device Management (MDM) solutions with integrity checks"
  },
  
  // NEW: Mobile device comparisons
  {
    question: "Compare sideloading vs. jailbreaking: What's the key difference?",
    options: [
      "Sideloading installs unofficial apps; jailbreaking removes OS restrictions entirely",
      "They are identical processes",
      "Sideloading is more dangerous than jailbreaking",
      "Jailbreaking only affects app installation"
    ],
    answer: "Sideloading installs unofficial apps; jailbreaking removes OS restrictions entirely"
  },

  // === ZERO-DAY VULNERABILITIES ===
  
  {
    question: "A zero-day vulnerability is best described as:",
    options: [
      "A flaw unknown to the vendor with no available patch or fix",
      "A vulnerability that has been patched for zero days",
      "A denial-of-service attack",
      "A vulnerability found on day zero of deployment"
    ],
    answer: "A flaw unknown to the vendor with no available patch or fix"
  },
  {
    question: "Zero-day exploits are particularly dangerous because:",
    options: [
      "No patch exists and defenders have zero days to prepare",
      "They only affect old systems",
      "They are easy to detect",
      "Antivirus can always block them"
    ],
    answer: "No patch exists and defenders have zero days to prepare"
  },
  {
    question: "Which defensive strategy is MOST effective against zero-day vulnerabilities?",
    options: [
      "Defense-in-depth with behavioral detection and network segmentation",
      "Installing patches immediately",
      "Disabling all systems",
      "Using only signature-based antivirus"
    ],
    answer: "Defense-in-depth with behavioral detection and network segmentation"
  },
  {
    question: "The term 'zero-day' refers to:",
    options: [
      "Zero days since the vulnerability became publicly known before exploitation",
      "The vulnerability existing for zero days",
      "Zero patches available in general",
      "Zero systems affected"
    ],
    answer: "Zero days since the vulnerability became publicly known before exploitation"
  },
  {
    question: "After a zero-day vulnerability is discovered and patched, it becomes:",
    options: [
      "A known vulnerability with available mitigation",
      "More dangerous than before",
      "Impossible to exploit",
      "A different type of vulnerability"
    ],
    answer: "A known vulnerability with available mitigation"
  },
  {
    question: "Organizations may defend against zero-day exploits by:",
    options: [
      "Using intrusion detection systems, anomaly detection, and application whitelisting",
      "Waiting for attacks to occur",
      "Disabling all security tools",
      "Removing all software updates"
    ],
    answer: "Using intrusion detection systems, anomaly detection, and application whitelisting"
  },

  // === COMPREHENSIVE SCENARIO-BASED QUESTIONS ===
  
  {
    question: "An attacker exploits an integer overflow in image processing code to execute arbitrary code. This is primarily which vulnerability type?",
    options: [
      "Application vulnerability (buffer overflow variant)",
      "Web-based vulnerability",
      "Hardware vulnerability",
      "Cloud misconfiguration"
    ],
    answer: "Application vulnerability (buffer overflow variant)"
  },
  {
    question: "A web application doesn't validate user input before inserting it into HTML output, allowing script injection. This is:",
    options: [
      "Cross-site scripting (XSS) vulnerability",
      "SQL injection",
      "Buffer overflow",
      "Firmware vulnerability"
    ],
    answer: "Cross-site scripting (XSS) vulnerability"
  },
  {
    question: "An application checks file permissions, but an attacker replaces the file between the check and access. This exploits:",
    options: [
      "TOC/TOU race condition",
      "SQL injection",
      "XSS vulnerability",
      "Cloud misconfiguration"
    ],
    answer: "TOC/TOU race condition"
  },
  {
    question: "A hypervisor vulnerability allows a guest VM to read memory from other VMs. This is:",
    options: [
      "VM escape / virtualization vulnerability",
      "Web application vulnerability",
      "Mobile device vulnerability",
      "Cryptographic vulnerability"
    ],
    answer: "VM escape / virtualization vulnerability"
  },
  {
    question: "An S3 bucket is configured with world-readable permissions, exposing customer PII. This is:",
    options: [
      "Cloud-specific misconfiguration vulnerability",
      "SQL injection",
      "Buffer overflow",
      "Zero-day exploit"
    ],
    answer: "Cloud-specific misconfiguration vulnerability"
  },
  {
    question: "A software update server is compromised and distributes malware to thousands of customers. This represents:",
    options: [
      "Supply chain software provider vulnerability with malicious update",
      "Only a single-system compromise",
      "Hardware vulnerability",
      "Mobile device vulnerability"
    ],
    answer: "Supply chain software provider vulnerability with malicious update"
  },
  {
    question: "An app uses MD5 for password hashing. This is which vulnerability?",
    options: [
      "Cryptographic vulnerability (weak algorithm)",
      "SQL injection",
      "XSS vulnerability",
      "Buffer overflow"
    ],
    answer: "Cryptographic vulnerability (weak algorithm)"
  },
  {
    question: "A production server has FTP, Telnet, and unnecessary database ports open to the internet. This is:",
    options: [
      "Misconfiguration vulnerability (unnecessary services/ports)",
      "Zero-day vulnerability",
      "SQL injection",
      "Firmware vulnerability"
    ],
    answer: "Misconfiguration vulnerability (unnecessary services/ports)"
  },
  {
    question: "A user installs a cracked version of an app from a third-party site on their phone. This exploits:",
    options: [
      "Mobile sideloading vulnerability",
      "OS kernel vulnerability",
      "Web vulnerability",
      "Hardware vulnerability"
    ],
    answer: "Mobile sideloading vulnerability"
  },
  {
    question: "Attackers exploit an unknown flaw in a widely-used SSL library before vendors can respond. This is:",
    options: [
      "Zero-day vulnerability",
      "Misconfiguration",
      "Social engineering",
      "Physical security breach"
    ],
    answer: "Zero-day vulnerability"
  },
  
  // === FINAL COMPARISON AND RANKING QUESTIONS ===
  
  {
    question: "Rank these by typical remediation difficulty (easiest to hardest): misconfiguration, zero-day, unpatched known vulnerability",
    options: [
      "Misconfiguration → Unpatched known vulnerability → Zero-day",
      "Zero-day → Unpatched known vulnerability → Misconfiguration",
      "All are equally difficult",
      "Unpatched known vulnerability → Zero-day → Misconfiguration"
    ],
    answer: "Misconfiguration → Unpatched known vulnerability → Zero-day"
  },
  {
    question: "Which vulnerability type is MOST dependent on user behavior for exploitation?",
    options: [
      "Mobile device vulnerabilities (sideloading/jailbreaking)",
      "Buffer overflow",
      "Race conditions",
      "Firmware vulnerabilities"
    ],
    answer: "Mobile device vulnerabilities (sideloading/jailbreaking)"
  },
  {
    question: "Which vulnerability typically requires the MOST sophisticated attacker?",
    options: [
      "Zero-day exploitation",
      "Exploiting default credentials",
      "Basic misconfiguration",
      "Using publicly available exploits"
    ],
    answer: "Zero-day exploitation"
  },
  {
    question: "Which vulnerability class can affect systems even after OS reinstallation?",
    options: [
      "Firmware/hardware vulnerabilities",
      "Application vulnerabilities only",
      "Web-based vulnerabilities only",
      "Memory injection only"
    ],
    answer: "Firmware/hardware vulnerabilities"
  },
  {
    question: "Compare impact scope: Which vulnerability type can potentially affect the MOST systems simultaneously?",
    options: [
      "Supply chain software provider vulnerability",
      "Single application buffer overflow",
      "Individual mobile device jailbreak",
      "Single misconfigured server"
    ],
    answer: "Supply chain software provider vulnerability"
  }
]

console.log(vulnerabilitiesQuiz.length);
//109