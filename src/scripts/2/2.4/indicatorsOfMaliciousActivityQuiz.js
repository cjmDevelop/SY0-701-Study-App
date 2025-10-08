export const indicatorsOfMaliciousActivityQuiz = [
       {
    quiz_ID: 2.4,
    quiz_name: "2.4 - Analyze indicators of malicious activity"
  },
  // === MALWARE ATTACKS ===
  
  // Ransomware
  {
    question: "Which type of malware encrypts user data and demands payment for the decryption key?",
    options: ["Ransomware", "Trojan", "Worm", "Rootkit"],
    answer: "Ransomware"
  },
  {
    question: "A user reports all their files have a .encrypted extension and a ransom note demands Bitcoin payment. This indicates:",
    options: ["Ransomware attack", "Spyware infection", "Logic bomb", "Bloatware"],
    answer: "Ransomware"
  },
  {
    question: "Double extortion ransomware attacks involve:",
    options: [
      "Encrypting data AND threatening to publish stolen data if ransom isn't paid",
      "Only encrypting files",
      "Only stealing data",
      "Installing keyloggers"
    ],
    answer: "Encrypting data AND threatening to publish stolen data if ransom isn't paid"
  },
  
  // Trojan
  {
    question: "A Trojan primarily differs from a virus because it:",
    options: [
      "Disguises itself as legitimate software to trick users into installing it",
      "Self-replicates automatically across networks",
      "Requires no user interaction to spread",
      "Overwrites the master boot record"
    ],
    answer: "Disguises itself as legitimate software to trick users into installing it"
  },
  {
    question: "A user downloads a 'free PDF converter' that secretly installs remote access capabilities. This is a:",
    options: ["Trojan", "Worm", "Virus", "Logic bomb"],
    answer: "Trojan"
  },
  {
    question: "Remote Access Trojans (RATs) allow attackers to:",
    options: [
      "Control infected systems remotely without the user's knowledge",
      "Only view web browser history",
      "Automatically encrypt files",
      "Send spam emails only"
    ],
    answer: "Control infected systems remotely without the user's knowledge"
  },
  
  // Worm
  {
    question: "Which malware type spreads automatically across networks without requiring user interaction?",
    options: ["Worm", "Trojan", "Spyware", "Keylogger"],
    answer: "Worm"
  },
  {
    question: "The WannaCry attack spread rapidly using which malware characteristic?",
    options: [
      "Worm-like self-propagation through network vulnerabilities",
      "Required manual email forwarding",
      "Needed physical USB transfer",
      "Only spread through social media"
    ],
    answer: "Worm-like self-propagation through network vulnerabilities"
  },
  {
    question: "A worm differs from a virus in that a worm:",
    options: [
      "Spreads independently without needing to attach to host files",
      "Always requires user interaction",
      "Cannot spread across networks",
      "Only infects mobile devices"
    ],
    answer: "Spreads independently without needing to attach to host files"
  },
  
  // Spyware
  {
    question: "Software designed to secretly collect user activity and transmit it to an attacker is called:",
    options: ["Spyware", "Adware", "Worm", "Rootkit"],
    answer: "Spyware"
  },
  {
    question: "Indicators of spyware infection include:",
    options: [
      "Unexplained network traffic and browser behavior changes",
      "Encrypted file extensions",
      "System running faster than normal",
      "Improved battery life"
    ],
    answer: "Unexplained network traffic and browser behavior changes"
  },
  
  // Bloatware
  {
    question: "Which term refers to pre-installed or unnecessary software that consumes system resources?",
    options: ["Bloatware", "Worm", "Trojan", "Logic bomb"],
    answer: "Bloatware"
  },
  
  // Virus
  {
    question: "A virus differs from a worm in that a virus:",
    options: [
      "Requires user interaction or host file execution to spread",
      "Spreads automatically without user action",
      "Can only infect mobile devices",
      "Operates only in firmware"
    ],
    answer: "Requires user interaction or host file execution to spread"
  },
  {
    question: "A macro virus typically infects:",
    options: [
      "Microsoft Office documents through embedded malicious macros",
      "Only operating system files",
      "Network router firmware",
      "Mobile device apps"
    ],
    answer: "Microsoft Office documents through embedded malicious macros"
  },
  {
    question: "Boot sector viruses are dangerous because they:",
    options: [
      "Load before the operating system and can bypass security controls",
      "Only affect user documents",
      "Are easily removed by antivirus",
      "Cannot persist after reboot"
    ],
    answer: "Load before the operating system and can bypass security controls"
  },
  
  // Keylogger
  {
    question: "A keylogger's primary function is to:",
    options: [
      "Capture and record user keystrokes for credential theft",
      "Encrypt files on the victim's computer",
      "Overload the CPU with requests",
      "Block software updates"
    ],
    answer: "Capture and record user keystrokes for credential theft"
  },
  {
    question: "Indicators that a keylogger may be present include:",
    options: [
      "Unusual keyboard lag and unauthorized account access",
      "Faster typing speed",
      "Improved system performance",
      "Automatic password changes"
    ],
    answer: "Unusual keyboard lag and unauthorized account access"
  },
  
  // Logic Bomb
  {
    question: "A logic bomb triggers malicious activity:",
    options: [
      "When specific conditions or events are met",
      "Immediately upon installation",
      "After every system reboot",
      "Only through manual activation"
    ],
    answer: "When specific conditions or events are met"
  },
  {
    question: "A disgruntled employee embeds code that deletes files if their username is removed from Active Directory. This is a:",
    options: ["Logic bomb", "Worm", "Trojan", "Rootkit"],
    answer: "Logic bomb"
  },
  {
    question: "Logic bombs are particularly difficult to detect because they:",
    options: [
      "Remain dormant until trigger conditions are met",
      "Spread automatically like worms",
      "Always encrypt their payload",
      "Require internet connectivity"
    ],
    answer: "Remain dormant until trigger conditions are met"
  },
  
  // Rootkit
  {
    question: "Which malware type hides its presence by modifying operating system or kernel components?",
    options: ["Rootkit", "Trojan", "Spyware", "Worm"],
    answer: "Rootkit"
  },
  {
    question: "Kernel-mode rootkits are particularly dangerous because they:",
    options: [
      "Operate at the highest privilege level and can hide all malicious activity",
      "Only affect user applications",
      "Are easily detected by antivirus",
      "Cannot persist across reboots"
    ],
    answer: "Operate at the highest privilege level and can hide all malicious activity"
  },
  {
    question: "Indicators of rootkit infection include:",
    options: [
      "Processes that don't appear in task manager and unexplained system behavior",
      "Visible ransom notes",
      "Encrypted file extensions",
      "Obvious performance improvements"
    ],
    answer: "Processes that don't appear in task manager and unexplained system behavior"
  },
  
  // NEW: Malware comparisons
  {
    question: "Compare propagation: Which malware requires the MOST user interaction to spread?",
    options: ["Virus", "Worm", "Rootkit executing automatically", "Self-propagating malware"],
    answer: "Virus"
  },
  {
    question: "Which malware combination is most dangerous for data theft and persistence?",
    options: ["Rootkit hiding a keylogger or spyware", "Bloatware and adware", "Virus and worm together", "Only ransomware"],
    answer: "Rootkit hiding a keylogger or spyware"
  },

  // === PHYSICAL ATTACKS ===
  
  // Brute Force (Physical)
  {
    question: "A physical brute force attack on an access control system involves:",
    options: [
      "Repeatedly attempting all possible combinations to gain physical entry",
      "Cloning RFID badges",
      "Intercepting wireless signals",
      "Tampering with environmental controls"
    ],
    answer: "Repeatedly attempting all possible combinations to gain physical entry"
  },
  {
    question: "An indicator of physical brute force attacks includes:",
    options: [
      "Multiple failed access attempts recorded in physical security logs",
      "Normal badge swipes",
      "Scheduled maintenance entries",
      "Authorized visitor logs"
    ],
    answer: "Multiple failed access attempts recorded in physical security logs"
  },
  
  // RFID Cloning
  {
    question: "RFID cloning is best described as:",
    options: [
      "Copying data from an RFID badge to create unauthorized duplicates",
      "Destroying RFID chips with EMP",
      "Encrypting RFID tag data",
      "Overloading RFID scanners"
    ],
    answer: "Copying data from an RFID badge to create unauthorized duplicates"
  },
  {
    question: "An unauthorized person gains building access using a copied RFID badge. Logs show:",
    options: [
      "Valid badge credentials but unusual access times or locations",
      "Failed authentication attempts",
      "Network intrusion alerts",
      "Malware infections"
    ],
    answer: "Valid badge credentials but unusual access times or locations"
  },
  {
    question: "RFID cloning can be mitigated by:",
    options: [
      "Using encrypted RFID tags and multi-factor physical authentication",
      "Removing all RFID systems",
      "Using only magnetic stripe cards",
      "Disabling all access controls"
    ],
    answer: "Using encrypted RFID tags and multi-factor physical authentication"
  },
  
  // Environmental
  {
    question: "An environmental physical attack could involve:",
    options: [
      "Extreme temperature, humidity, or power disruption to damage systems",
      "SQL injection attacks",
      "Phishing campaigns",
      "Software vulnerability exploitation"
    ],
    answer: "Extreme temperature, humidity, or power disruption to damage systems"
  },
  {
    question: "Indicators of environmental attacks include:",
    options: [
      "Unexpected system shutdowns, hardware failures, or temperature alarms",
      "Increased network bandwidth",
      "More user logins",
      "Software update notifications"
    ],
    answer: "Unexpected system shutdowns, hardware failures, or temperature alarms"
  },

  // === NETWORK ATTACKS ===
  
  // DDoS - General
  {
    question: "A Distributed Denial-of-Service (DDoS) attack aims to:",
    options: [
      "Overwhelm a target system or service with excessive traffic from multiple sources",
      "Steal credentials from databases",
      "Encrypt files for ransom",
      "Install backdoors on servers"
    ],
    answer: "Overwhelm a target system or service with excessive traffic from multiple sources"
  },
  {
    question: "Indicators of an active DDoS attack include:",
    options: [
      "Sudden service unavailability, network saturation, and abnormal traffic patterns",
      "Encrypted file extensions",
      "Stolen credentials",
      "Modified system files"
    ],
    answer: "Sudden service unavailability, network saturation, and abnormal traffic patterns"
  },
  {
    question: "Which DDoS attack targets the application layer (Layer 7)?",
    options: [
      "HTTP flood attacking web application resources",
      "SYN flood only",
      "ICMP flood only",
      "Physical cable cutting"
    ],
    answer: "HTTP flood attacking web application resources"
  },
  
  // DDoS - Amplified
  {
    question: "An amplified DDoS attack uses:",
    options: [
      "Third-party servers to multiply attack traffic volume",
      "Single-source brute force",
      "Encrypted tunnels only",
      "Application layer exploits only"
    ],
    answer: "Third-party servers to multiply attack traffic volume"
  },
  {
    question: "DNS amplification attacks work by:",
    options: [
      "Sending small queries to DNS servers that return much larger responses to the victim",
      "Encrypting DNS traffic",
      "Blocking all DNS queries",
      "Intercepting DNS responses"
    ],
    answer: "Sending small queries to DNS servers that return much larger responses to the victim"
  },
  {
    question: "NTP amplification attacks exploit:",
    options: [
      "Misconfigured NTP servers that respond with large monlist commands",
      "Encrypted time synchronization",
      "Firewall misconfigurations only",
      "Web application vulnerabilities"
    ],
    answer: "Misconfigured NTP servers that respond with large monlist commands"
  },
  
  // DDoS - Reflected
  {
    question: "A reflected DDoS attack typically involves:",
    options: [
      "Spoofing the victim's IP so third-party systems send responses to the target",
      "Direct flooding from attacker to victim",
      "Intercepting packets for replay",
      "Manipulating BGP routing"
    ],
    answer: "Spoofing the victim's IP so third-party systems send responses to the target"
  },
  {
    question: "In a reflected DDoS attack, the attacker benefits by:",
    options: [
      "Hiding their true source IP and using legitimate servers as reflectors",
      "Using their own bandwidth",
      "Revealing their identity",
      "Requiring more resources"
    ],
    answer: "Hiding their true source IP and using legitimate servers as reflectors"
  },
  
  // DNS Attacks
  {
    question: "A DNS poisoning attack manipulates:",
    options: [
      "Domain name resolution to redirect users to malicious sites",
      "File system permissions",
      "Physical network cables",
      "User account passwords"
    ],
    answer: "Domain name resolution to redirect users to malicious sites"
  },
  {
    question: "DNS cache poisoning works by:",
    options: [
      "Injecting false DNS records into a resolver's cache",
      "Encrypting DNS queries",
      "Blocking all DNS traffic",
      "Slowing down DNS responses"
    ],
    answer: "Injecting false DNS records into a resolver's cache"
  },
  {
    question: "DNS tunneling can be used for:",
    options: [
      "Data exfiltration by encoding data in DNS queries and responses",
      "Improving DNS performance",
      "Encrypting web traffic",
      "Blocking malicious domains"
    ],
    answer: "Data exfiltration by encoding data in DNS queries and responses"
  },
  {
    question: "Indicators of DNS attacks include:",
    options: [
      "Unusual DNS query volumes, unexpected domain resolutions, or DNS traffic to suspicious domains",
      "Normal web browsing",
      "Scheduled maintenance",
      "Software updates"
    ],
    answer: "Unusual DNS query volumes, unexpected domain resolutions, or DNS traffic to suspicious domains"
  },
  {
    question: "Domain hijacking involves:",
    options: [
      "Unauthorized transfer of domain registration to attacker control",
      "Blocking DNS queries",
      "Encrypting DNS responses",
      "Improving DNS speed"
    ],
    answer: "Unauthorized transfer of domain registration to attacker control"
  },
  
  // Wireless Attacks
  {
    question: "A deauthentication attack in wireless networks:",
    options: [
      "Forcibly disconnects clients from access points to capture handshakes or cause DoS",
      "Improves wireless signal strength",
      "Encrypts wireless traffic",
      "Updates AP firmware"
    ],
    answer: "Forcibly disconnects clients from access points to capture handshakes or cause DoS"
  },
  {
    question: "An evil twin attack involves:",
    options: [
      "Creating a rogue access point that mimics a legitimate network",
      "Upgrading access point security",
      "Blocking all wireless signals",
      "Installing network cables"
    ],
    answer: "Creating a rogue access point that mimics a legitimate network"
  },
  {
    question: "WPS (Wi-Fi Protected Setup) attacks exploit:",
    options: [
      "Weak PIN implementation to gain unauthorized wireless access",
      "Strong WPA3 encryption",
      "Certificate-based authentication",
      "Enterprise RADIUS servers"
    ],
    answer: "Weak PIN implementation to gain unauthorized wireless access"
  },
  {
    question: "Indicators of wireless attacks include:",
    options: [
      "Unexpected SSIDs, deauthentication frames, or rogue access points detected",
      "Improved wireless performance",
      "Scheduled AP reboots",
      "Normal client connections"
    ],
    answer: "Unexpected SSIDs, deauthentication frames, or rogue access points detected"
  },
  {
    question: "Wireless jamming attacks aim to:",
    options: [
      "Disrupt wireless communications by overwhelming the frequency spectrum",
      "Improve signal quality",
      "Encrypt wireless traffic",
      "Extend wireless range"
    ],
    answer: "Disrupt wireless communications by overwhelming the frequency spectrum"
  },
  {
    question: "IV (Initialization Vector) attacks target:",
    options: [
      "Weak WEP encryption by exploiting repeated or predictable IVs",
      "WPA3 encryption",
      "Certificate authorities",
      "DNS servers"
    ],
    answer: "Weak WEP encryption by exploiting repeated or predictable IVs"
  },
  
  // On-Path (Man-in-the-Middle)
  {
    question: "An on-path attack is also known as:",
    options: ["Man-in-the-middle (MitM)", "Privilege escalation", "Keylogging", "SQL injection"],
    answer: "Man-in-the-middle (MitM)"
  },
  {
    question: "In an on-path attack, the attacker:",
    options: [
      "Intercepts and potentially modifies communications between two parties",
      "Only observes encrypted traffic",
      "Cannot access any data",
      "Only blocks communications"
    ],
    answer: "Intercepts and potentially modifies communications between two parties"
  },
  {
    question: "ARP spoofing is commonly used to facilitate:",
    options: [
      "On-path attacks by redirecting network traffic through the attacker",
      "DNS resolution improvements",
      "Network performance optimization",
      "Firewall rule updates"
    ],
    answer: "On-path attacks by redirecting network traffic through the attacker"
  },
  {
    question: "Indicators of on-path attacks include:",
    options: [
      "Unexpected certificate warnings, ARP cache inconsistencies, or modified data in transit",
      "Improved connection speeds",
      "Normal network latency",
      "Scheduled maintenance"
    ],
    answer: "Unexpected certificate warnings, ARP cache inconsistencies, or modified data in transit"
  },
  
  // Credential Replay
  {
    question: "Credential replay attacks involve:",
    options: [
      "Capturing and reusing authentication credentials or tokens to impersonate users",
      "Guessing weak passwords",
      "Flooding login forms with random data",
      "Encrypting stored passwords"
    ],
    answer: "Capturing and reusing authentication credentials or tokens to impersonate users"
  },
  {
    question: "Pass-the-hash attacks are a type of credential replay that:",
    options: [
      "Use captured password hashes for authentication without cracking them",
      "Require plaintext passwords",
      "Only work on Linux systems",
      "Cannot be used for lateral movement"
    ],
    answer: "Use captured password hashes for authentication without cracking them"
  },
  {
    question: "Indicators of credential replay attacks include:",
    options: [
      "Authentication from unusual locations, concurrent sessions, or reused tokens",
      "Normal user logins",
      "Scheduled password changes",
      "Improved security"
    ],
    answer: "Authentication from unusual locations, concurrent sessions, or reused tokens"
  },
  {
    question: "Which mitigation is most effective against credential replay?",
    options: [
      "Time-limited tokens, session binding, and mutual authentication",
      "Using only passwords",
      "Disabling all authentication",
      "Removing encryption"
    ],
    answer: "Time-limited tokens, session binding, and mutual authentication"
  },
  
  // Malicious Code (Network Context)
  {
    question: "Injecting malicious code into network traffic describes:",
    options: ["Code injection attack", "Privilege escalation", "DDoS", "Phishing"],
    answer: "Code injection attack"
  },
  {
    question: "Drive-by download attacks inject malicious code through:",
    options: [
      "Compromised websites that automatically download malware to visitors",
      "Email attachments only",
      "USB devices only",
      "Physical media only"
    ],
    answer: "Compromised websites that automatically download malware to visitors"
  },

  // === APPLICATION ATTACKS ===
  
  // Injection (General)
  {
    question: "Injection attacks commonly target:",
    options: [
      "Applications that fail to properly validate or sanitize user input",
      "Physical network cables",
      "Server hardware components",
      "Power supplies"
    ],
    answer: "Applications that fail to properly validate or sanitize user input"
  },
  {
    question: "SQL injection allows attackers to:",
    options: [
      "Execute unauthorized database commands by manipulating input queries",
      "Only view public data",
      "Improve database performance",
      "Automatically backup databases"
    ],
    answer: "Execute unauthorized database commands by manipulating input queries"
  },
  {
    question: "An application error message reveals 'SQL syntax error near...' after entering a single quote. This indicates:",
    options: [
      "Potential SQL injection vulnerability",
      "Normal application behavior",
      "Successful login",
      "Encrypted communication"
    ],
    answer: "Potential SQL injection vulnerability"
  },
  {
    question: "LDAP injection targets:",
    options: [
      "Directory service queries to gain unauthorized access or information",
      "Database servers only",
      "Web browsers",
      "Email clients"
    ],
    answer: "Directory service queries to gain unauthorized access or information"
  },
  {
    question: "Command injection allows attackers to:",
    options: [
      "Execute arbitrary operating system commands on the server",
      "Only view web pages",
      "Encrypt files remotely",
      "Improve system performance"
    ],
    answer: "Execute arbitrary operating system commands on the server"
  },
  {
    question: "Cross-site scripting (XSS) injection enables:",
    options: [
      "Injecting malicious scripts into web pages viewed by other users",
      "Server-side database manipulation",
      "Operating system command execution",
      "DNS poisoning"
    ],
    answer: "Injecting malicious scripts into web pages viewed by other users"
  },
  {
    question: "XML injection attacks manipulate:",
    options: [
      "XML parsers to access unauthorized data or execute commands",
      "Only HTML content",
      "Network routing tables",
      "Firewall rules"
    ],
    answer: "XML parsers to access unauthorized data or execute commands"
  },
  
  // Buffer Overflow
  {
    question: "A buffer overflow attack occurs when:",
    options: [
      "More data is written to a memory buffer than it can hold, potentially overwriting adjacent memory",
      "Network bandwidth is exceeded",
      "Disk space is full",
      "Memory is properly encrypted"
    ],
    answer: "More data is written to a memory buffer than it can hold, potentially overwriting adjacent memory"
  },
  {
    question: "Indicators of buffer overflow exploitation include:",
    options: [
      "Application crashes, unexpected behavior, or arbitrary code execution",
      "Improved performance",
      "Normal operation",
      "Scheduled updates"
    ],
    answer: "Application crashes, unexpected behavior, or arbitrary code execution"
  },
  
  // Replay
  {
    question: "A replay attack in application security involves:",
    options: [
      "Intercepting and retransmitting valid authentication or transaction requests",
      "Guessing passwords repeatedly",
      "Overwriting system files",
      "DNS redirection"
    ],
    answer: "Intercepting and retransmitting valid authentication or transaction requests"
  },
  {
    question: "Session replay attacks can be mitigated by:",
    options: [
      "Using nonces, timestamps, and cryptographic sequence numbers",
      "Removing all authentication",
      "Disabling encryption",
      "Using only passwords"
    ],
    answer: "Using nonces, timestamps, and cryptographic sequence numbers"
  },
  
  // Privilege Escalation
  {
    question: "Privilege escalation occurs when:",
    options: [
      "An attacker gains higher access rights than originally granted",
      "A user loses access to resources",
      "Encryption keys are rotated",
      "Accounts are properly restricted"
    ],
    answer: "An attacker gains higher access rights than originally granted"
  },
  {
    question: "Vertical privilege escalation involves:",
    options: [
      "A lower-privileged user gaining administrative or root access",
      "Accessing another user's resources at the same level",
      "Losing privileges",
      "Normal permission assignment"
    ],
    answer: "A lower-privileged user gaining administrative or root access"
  },
  {
    question: "Horizontal privilege escalation allows:",
    options: [
      "Accessing resources of another user at the same privilege level",
      "Gaining root access",
      "Losing all access",
      "Improving security"
    ],
    answer: "Accessing resources of another user at the same privilege level"
  },
  {
    question: "Indicators of privilege escalation include:",
    options: [
      "Unauthorized access to restricted resources, unexpected administrative actions, or suspicious privilege changes",
      "Normal user activity",
      "Scheduled permission updates",
      "Routine access requests"
    ],
    answer: "Unauthorized access to restricted resources, unexpected administrative actions, or suspicious privilege changes"
  },
  
  // Forgery
  {
    question: "Cross-Site Request Forgery (CSRF) attacks exploit:",
    options: [
      "A user's authenticated session to perform unauthorized actions",
      "SQL database vulnerabilities",
      "DNS resolution flaws",
      "Encryption weaknesses"
    ],
    answer: "A user's authenticated session to perform unauthorized actions"
  },
  {
    question: "In a CSRF attack, the attacker tricks the victim into:",
    options: [
      "Submitting malicious requests using their authenticated session",
      "Revealing their password directly",
      "Installing malware knowingly",
      "Disconnecting from the network"
    ],
    answer: "Submitting malicious requests using their authenticated session"
  },
  {
    question: "Server-Side Request Forgery (SSRF) allows attackers to:",
    options: [
      "Make the server send requests to unintended internal or external locations",
      "Only access public websites",
      "Improve server performance",
      "Encrypt server data"
    ],
    answer: "Make the server send requests to unintended internal or external locations"
  },
  {
    question: "CSRF attacks can be mitigated using:",
    options: [
      "Anti-CSRF tokens and same-site cookie attributes",
      "Disabling all forms",
      "Removing authentication",
      "Using only GET requests"
    ],
    answer: "Anti-CSRF tokens and same-site cookie attributes"
  },
  {
    question: "Indicators of CSRF attacks include:",
    options: [
      "Unexpected state changes or transactions performed by authenticated users",
      "Normal user activity",
      "Scheduled system updates",
      "Routine form submissions"
    ],
    answer: "Unexpected state changes or transactions performed by authenticated users"
  },
  
  // Directory Traversal
  {
    question: "A directory traversal attack allows attackers to:",
    options: [
      "Access files and directories outside the intended web root folder",
      "Improve file system organization",
      "Encrypt directory contents",
      "Optimize disk usage"
    ],
    answer: "Access files and directories outside the intended web root folder"
  },
  {
    question: "Directory traversal attacks commonly use:",
    options: [
      "Sequences like ../ or ..\\ to navigate the file system",
      "SQL injection syntax",
      "XSS payloads",
      "DNS queries"
    ],
    answer: "Sequences like ../ or ..\\ to navigate the file system"
  },
  {
    question: "Indicators of directory traversal attempts include:",
    options: [
      "Web logs showing ../ sequences in URLs or unusual file access patterns",
      "Normal web traffic",
      "Standard page requests",
      "Routine downloads"
    ],
    answer: "Web logs showing ../ sequences in URLs or unusual file access patterns"
  },
  {
    question: "Which mitigation prevents directory traversal attacks?",
    options: [
      "Input validation, white-listing allowed paths, and proper access controls",
      "Disabling all file access",
      "Removing web servers",
      "Using only GET requests"
    ],
    answer: "Input validation, white-listing allowed paths, and proper access controls"
  },

  // === CRYPTOGRAPHIC ATTACKS ===
  
  // Downgrade
  {
    question: "A downgrade attack forces a system to:",
    options: [
      "Use weaker encryption protocols or cipher suites than supported",
      "Upgrade to stronger encryption",
      "Disable all encryption",
      "Implement perfect forward secrecy"
    ],
    answer: "Use weaker encryption protocols or cipher suites than supported"
  },
  {
    question: "SSL/TLS downgrade attacks exploit:",
    options: [
      "Protocol negotiation to force use of vulnerable older versions",
      "Certificate validation",
      "Strong cipher suites",
      "Perfect forward secrecy"
    ],
    answer: "Protocol negotiation to force use of vulnerable older versions"
  },
  {
    question: "POODLE is an example of:",
    options: [
      "A downgrade attack forcing SSLv3 usage",
      "A buffer overflow exploit",
      "A SQL injection technique",
      "A wireless attack"
    ],
    answer: "A downgrade attack forcing SSLv3 usage"
  },
  {
    question: "Indicators of downgrade attacks include:",
    options: [
      "Unexpected use of weak protocols or cipher suites in connection logs",
      "Strong encryption everywhere",
      "Perfect forward secrecy enabled",
      "Certificate pinning active"
    ],
    answer: "Unexpected use of weak protocols or cipher suites in connection logs"
  },
  
  // Collision
  {
    question: "A collision attack in cryptography occurs when:",
    options: [
      "Two different inputs produce the same hash output",
      "Encryption keys are mismatched",
      "Ciphertext is successfully decrypted",
      "Two users share identical passwords"
    ],
    answer: "Two different inputs produce the same hash output"
  },
  {
    question: "Hash collision vulnerabilities in MD5 and SHA-1 allow attackers to:",
    options: [
      "Create fraudulent documents or certificates with valid signatures",
      "Decrypt all encrypted data",
      "Bypass firewalls",
      "Gain physical access"
    ],
    answer: "Create fraudulent documents or certificates with valid signatures"
  },
  {
    question: "Collision attacks are most dangerous when used against:",
    options: [
      "Digital signatures and certificate generation",
      "Symmetric encryption only",
      "Physical locks",
      "Network cables"
    ],
    answer: "Digital signatures and certificate generation"
  },
  
  // Birthday
  {
    question: "The birthday attack exploits:",
    options: [
      "Mathematical probability of hash collisions with fewer attempts than brute force",
      "Buffer overflow vulnerabilities",
      "Authentication replay mechanisms",
      "Expired certificates only"
    ],
    answer: "Mathematical probability of hash collisions with fewer attempts than brute force"
  },
  {
    question: "The birthday paradox in cryptography shows that:",
    options: [
      "Collisions occur more frequently than expected due to probability",
      "Hash functions are always secure",
      "Longer hashes are weaker",
      "Encryption prevents all attacks"
    ],
    answer: "Collisions occur more frequently than expected due to probability"
  },
  {
    question: "Birthday attacks are effective against:",
    options: [
      "Hash functions with insufficient output length",
      "Only symmetric encryption",
      "Only asymmetric encryption",
      "Physical security systems"
    ],
    answer: "Hash functions with insufficient output length"
  },
  {
    question: "To defend against birthday attacks, use:",
    options: [
      "Hash functions with larger output sizes like SHA-256 or SHA-3",
      "Shorter hash functions",
      "MD5 only",
      "No hashing at all"
    ],
    answer: "Hash functions with larger output sizes like SHA-256 or SHA-3"
  },

  // === PASSWORD ATTACKS ===
  
  // Spraying
  {
    question: "Password spraying differs from brute force because it:",
    options: [
      "Attempts a few common passwords across many accounts to avoid lockouts",
      "Tries every possible password on one account",
      "Intercepts passwords in transit",
      "Requires keylogger installation"
    ],
    answer: "Attempts a few common passwords across many accounts to avoid lockouts"
  },
  {
    question: "Password spraying is effective because it:",
    options: [
      "Avoids account lockout thresholds by spreading attempts across users",
      "Cracks complex passwords quickly",
      "Requires no network access",
      "Works only on encrypted passwords"
    ],
    answer: "Avoids account lockout thresholds by spreading attempts across users"
  },
  {
    question: "Indicators of password spraying include:",
    options: [
      "Many failed login attempts across multiple accounts with the same password",
      "One account with many attempts",
      "Successful logins only",
      "No authentication logs"
    ],
    answer: "Many failed login attempts across multiple accounts with the same password"
  },
  {
    question: "Common passwords used in spraying attacks include:",
    options: [
      "Password1, Welcome1, Season+Year combinations",
      "Only random 20-character strings",
      "Only special character combinations",
      "Only numeric sequences"
    ],
    answer: "Password1, Welcome1, Season+Year combinations"
  },
  
  // Brute Force
  {
    question: "Brute force password attacks are characterized by:",
    options: [
      "Systematically trying every possible password combination until success",
      "Using precomputed rainbow tables only",
      "Replaying captured tokens",
      "Encrypting password databases"
    ],
    answer: "Systematically trying every possible password combination until success"
  },
  {
    question: "Online brute force attacks differ from offline attacks because:",
    options: [
      "Online attacks attempt authentication against live systems with rate limiting",
      "Offline attacks require network connectivity",
      "Online attacks are always faster",
      "Offline attacks cannot crack passwords"
    ],
    answer: "Online attacks attempt authentication against live systems with rate limiting"
  },
  {
    question: "Offline brute force attacks work by:",
    options: [
      "Obtaining password hashes and computing possible passwords locally",
      "Sending authentication requests to servers",
      "Social engineering users",
      "Physical key duplication"
    ],
    answer: "Obtaining password hashes and computing possible passwords locally"
  },
  {
    question: "Dictionary attacks are a type of brute force that:",
    options: [
      "Uses word lists of common passwords rather than all possible combinations",
      "Tries completely random strings only",
      "Requires no password lists",
      "Works on physical locks"
    ],
    answer: "Uses word lists of common passwords rather than all possible combinations"
  },
  {
    question: "Hybrid attacks combine:",
    options: [
      "Dictionary words with number and symbol variations",
      "Only uppercase letters",
      "Only lowercase letters",
      "Physical and logical attacks"
    ],
    answer: "Dictionary words with number and symbol variations"
  },
  
  // NEW: Password attack comparisons
  {
    question: "Compare password attacks: Which is MOST likely to succeed against an organization with account lockout policies?",
    options: [
      "Password spraying",
      "Brute force on single account",
      "Offline dictionary attack",
      "Rainbow table attack"
    ],
    answer: "Password spraying"
  },
  {
    question: "Which password attack is FASTEST when password hashes have been stolen?",
    options: [
      "Offline brute force or rainbow table attack",
      "Online brute force",
      "Password spraying",
      "Social engineering"
    ],
    answer: "Offline brute force or rainbow table attack"
  },

  // === INDICATORS OF MALICIOUS ACTIVITY ===
  
  // Account Lockout
  {
    question: "Frequent account lockouts across multiple users may indicate:",
    options: [
      "Password spraying or brute force attacks",
      "Normal system maintenance",
      "Software updates",
      "Improved security"
    ],
    answer: "Password spraying or brute force attacks"
  },
  {
    question: "A single user experiencing repeated lockouts could indicate:",
    options: [
      "Targeted brute force attack or credential stuffing",
      "Normal password changes",
      "Scheduled maintenance",
      "Successful authentication"
    ],
    answer: "Targeted brute force attack or credential stuffing"
  },
  {
    question: "Analyzing account lockout patterns, what suggests password spraying vs. brute force?",
    options: [
      "Spraying shows few attempts per account across many accounts; brute force shows many attempts on one account",
      "They produce identical patterns",
      "Spraying only affects one account",
      "Brute force never causes lockouts"
    ],
    answer: "Spraying shows few attempts per account across many accounts; brute force shows many attempts on one account"
  },
  
  // Concurrent Session Usage
  {
    question: "Concurrent session usage for a single account from different locations may indicate:",
    options: [
      "Account compromise or credential theft",
      "Normal user behavior",
      "Session timeout",
      "DNS failure"
    ],
    answer: "Account compromise or credential theft"
  },
  {
    question: "A user is logged in from New York and Beijing simultaneously. This is:",
    options: [
      "Suspicious concurrent session usage requiring investigation",
      "Normal VPN behavior",
      "Expected cloud sync",
      "Routine activity"
    ],
    answer: "Suspicious concurrent session usage requiring investigation"
  },
  {
    question: "Concurrent session indicators can be detected by:",
    options: [
      "Monitoring authentication logs for multiple active sessions per user",
      "Checking DNS logs only",
      "Reviewing firewall rules",
      "Physical security audits"
    ],
    answer: "Monitoring authentication logs for multiple active sessions per user"
  },
  
  // Blocked Content
  {
    question: "Blocked content in web filtering or firewall logs may suggest:",
    options: [
      "Malware attempting outbound connections to C2 servers",
      "Normal system updates",
      "Scheduled backups",
      "User productivity"
    ],
    answer: "Malware attempting outbound connections to C2 servers"
  },
  {
    question: "Repeated attempts to access blocked malicious domains from a workstation indicates:",
    options: [
      "Potential malware infection attempting command and control communication",
      "Normal web browsing",
      "Software updates",
      "Network optimization"
    ],
    answer: "Potential malware infection attempting command and control communication"
  },
  {
    question: "An internal system repeatedly tries to connect to known cryptomining pools. This suggests:",
    options: [
      "Cryptojacking malware consuming resources",
      "Legitimate cryptocurrency transactions",
      "Network misconfiguration",
      "Authorized activity"
    ],
    answer: "Cryptojacking malware consuming resources"
  },
  {
    question: "Blocked content logs showing DGA (Domain Generation Algorithm) patterns indicate:",
    options: [
      "Advanced malware using algorithmic C2 domains",
      "Normal DNS queries",
      "User typos",
      "Network latency"
    ],
    answer: "Advanced malware using algorithmic C2 domains"
  },
  
  // Impossible Travel
  {
    question: "An impossible travel alert occurs when:",
    options: [
      "A user authenticates from geographically distant locations within an impossible timeframe",
      "A VPN connection drops",
      "Network bandwidth spikes",
      "Cloud synchronization occurs"
    ],
    answer: "A user authenticates from geographically distant locations within an impossible timeframe"
  },
  {
    question: "A user logs in from London at 9:00 AM, then from Tokyo at 9:30 AM. This indicates:",
    options: [
      "Impossible travel suggesting credential compromise",
      "Normal business travel",
      "VPN usage",
      "Time zone confusion"
    ],
    answer: "Impossible travel suggesting credential compromise"
  },
  {
    question: "Impossible travel detection relies on:",
    options: [
      "Geolocation data from authentication logs and time calculations",
      "DNS queries only",
      "Firewall rules",
      "Physical security logs"
    ],
    answer: "Geolocation data from authentication logs and time calculations"
  },
  {
    question: "False positives in impossible travel alerts can occur due to:",
    options: [
      "VPN usage, proxy servers, or cloud service authentication",
      "Actual compromise only",
      "Malware infections only",
      "Physical theft only"
    ],
    answer: "VPN usage, proxy servers, or cloud service authentication"
  },
  
  // Resource Consumption
  {
    question: "Unexplained high CPU and memory usage with no clear legitimate process may indicate:",
    options: [
      "Cryptomining malware, botnet activity, or resource-intensive malware",
      "Normal system operation",
      "Scheduled maintenance",
      "Software updates"
    ],
    answer: "Cryptomining malware, botnet activity, or resource-intensive malware"
  },
  {
    question: "Excessive network bandwidth consumption from a workstation could indicate:",
    options: [
      "Data exfiltration, DDoS participation, or malware propagation",
      "Normal web browsing",
      "Email synchronization",
      "Printer usage"
    ],
    answer: "Data exfiltration, DDoS participation, or malware propagation"
  },
  {
    question: "A server's disk I/O suddenly spikes with no scheduled jobs running. This may indicate:",
    options: [
      "Ransomware encrypting files or data theft in progress",
      "Normal caching",
      "Improved performance",
      "Routine indexing"
    ],
    answer: "Ransomware encrypting files or data theft in progress"
  },
  {
    question: "Identifying resource consumption anomalies requires:",
    options: [
      "Baseline performance metrics for comparison",
      "No monitoring needed",
      "Only physical inspection",
      "DNS logs only"
    ],
    answer: "Baseline performance metrics for comparison"
  },
  
  // Out-of-Cycle Logging
  {
    question: "Out-of-cycle logging events may indicate:",
    options: [
      "Unauthorized access, malware activity, or attacker reconnaissance",
      "Normal business hours activity",
      "Scheduled backups",
      "Routine maintenance"
    ],
    answer: "Unauthorized access, malware activity, or attacker reconnaissance"
  },
  {
    question: "Administrative actions logged at 3:00 AM on Sunday with no scheduled maintenance suggest:",
    options: [
      "Potential unauthorized access requiring investigation",
      "Normal administrator work",
      "Automatic system updates",
      "Expected behavior"
    ],
    answer: "Potential unauthorized access requiring investigation"
  },
  {
    question: "Database queries running during non-business hours could indicate:",
    options: [
      "Data exfiltration or unauthorized database access",
      "Normal replication",
      "Scheduled reports",
      "Backup operations"
    ],
    answer: "Data exfiltration or unauthorized database access"
  },
  
  // Published/Documented Indicators
  {
    question: "A published or documented Indicator of Compromise (IoC) is typically sourced from:",
    options: [
      "Threat intelligence feeds, security vendors, or incident response reports",
      "Random user complaints",
      "System error messages",
      "Operating system changelogs"
    ],
    answer: "Threat intelligence feeds, security vendors, or incident response reports"
  },
  {
    question: "Published IoCs commonly include:",
    options: [
      "Malicious IP addresses, file hashes, domain names, and attack signatures",
      "Only website URLs",
      "User passwords",
      "Software version numbers"
    ],
    answer: "Malicious IP addresses, file hashes, domain names, and attack signatures"
  },
  {
    question: "STIX and TAXII are standards used for:",
    options: [
      "Sharing threat intelligence and IoCs between organizations",
      "Encrypting communications",
      "Managing passwords",
      "Physical security"
    ],
    answer: "Sharing threat intelligence and IoCs between organizations"
  },
  {
    question: "When a published IoC matches activity in your environment, you should:",
    options: [
      "Investigate immediately as it indicates known malicious activity",
      "Ignore it completely",
      "Wait for more alerts",
      "Disable all monitoring"
    ],
    answer: "Investigate immediately as it indicates known malicious activity"
  },
  {
    question: "File hash matching against published IoC databases can identify:",
    options: [
      "Known malware files even if renamed or moved",
      "Only encrypted files",
      "Only text documents",
      "Network traffic patterns"
    ],
    answer: "Known malware files even if renamed or moved"
  },
  
  // Missing Logs
  {
    question: "Missing logs or log gaps may indicate:",
    options: [
      "Attacker anti-forensics, log tampering, or covering tracks",
      "Normal log rotation",
      "Proper log management",
      "Improved security"
    ],
    answer: "Attacker anti-forensics, log tampering, or covering tracks"
  },
  {
    question: "Authentication logs showing a gap during suspicious activity periods suggest:",
    options: [
      "Intentional log deletion by an attacker",
      "Normal system behavior",
      "Proper archiving",
      "Security improvements"
    ],
    answer: "Intentional log deletion by an attacker"
  },
  {
    question: "Detecting missing logs requires:",
    options: [
      "Log integrity monitoring and centralized log collection with timestamps",
      "No monitoring infrastructure",
      "Only local log storage",
      "Ignoring log files"
    ],
    answer: "Log integrity monitoring and centralized log collection with timestamps"
  },
  {
    question: "An attacker disabling logging before conducting malicious activity is an example of:",
    options: [
      "Anti-forensics technique to avoid detection",
      "System optimization",
      "Performance improvement",
      "Security enhancement"
    ],
    answer: "Anti-forensics technique to avoid detection"
  },
  {
    question: "Write-once log storage or SIEM forwarding helps prevent:",
    options: [
      "Log tampering and deletion by attackers",
      "Log collection",
      "Log analysis",
      "Log generation"
    ],
    answer: "Log tampering and deletion by attackers"
  },

  // === COMPREHENSIVE SCENARIO-BASED QUESTIONS ===
  
  {
    question: "Users report files are encrypted with .locked extensions and a ransom note appears. CPU usage is normal. This indicates:",
    options: [
      "Ransomware attack that has completed encryption",
      "Active cryptomining",
      "DDoS attack",
      "Phishing campaign"
    ],
    answer: "Ransomware attack that has completed encryption"
  },
  {
    question: "Multiple failed logins across 50 accounts using 'Password123' within 10 minutes. This pattern suggests:",
    options: [
      "Password spraying attack",
      "Brute force on single account",
      "Normal user activity",
      "System malfunction"
    ],
    answer: "Password spraying attack"
  },
  {
    question: "Network monitoring shows thousands of DNS queries for random-looking domains. This indicates:",
    options: [
      "Malware using DGA for C2 communication",
      "Normal DNS traffic",
      "Software updates",
      "Web browsing"
    ],
    answer: "Malware using DGA for C2 communication"
  },
  {
    question: "A web server shows SQL errors in logs after unusual form submissions with special characters. This suggests:",
    options: [
      "SQL injection attack attempts",
      "Normal form processing",
      "User typos",
      "Browser compatibility issues"
    ],
    answer: "SQL injection attack attempts"
  },
  {
    question: "An executive's account shows login from London (normal) and Singapore 1 hour later. Email forwards rules were added. This indicates:",
    options: [
      "Account compromise with impossible travel and data exfiltration setup",
      "Normal business travel",
      "VPN usage",
      "Legitimate account sharing"
    ],
    answer: "Account compromise with impossible travel and data exfiltration setup"
  },
  {
    question: "Firewall logs show workstation attempting connections to 15 different IP addresses on port 445. This suggests:",
    options: [
      "Worm propagation or lateral movement attempts",
      "Normal file sharing",
      "Software updates",
      "Web browsing"
    ],
    answer: "Worm propagation or lateral movement attempts"
  },
  {
    question: "A user's workstation CPU is at 100%, fan running constantly, and unusual process names appear in task manager. This indicates:",
    options: [
      "Cryptomining malware or resource-intensive malware infection",
      "Normal operation",
      "System updates",
      "Disk defragmentation"
    ],
    answer: "Cryptomining malware or resource-intensive malware infection"
  },
  {
    question: "Web application logs show multiple requests with '../../../etc/passwd' in URLs. This indicates:",
    options: [
      "Directory traversal attack attempts",
      "Normal navigation",
      "Search engine indexing",
      "User mistakes"
    ],
    answer: "Directory traversal attack attempts"
  },
  {
    question: "Security logs show 3 AM administrative actions, but the admin confirms no scheduled maintenance. This suggests:",
    options: [
      "Unauthorized access or compromised admin credentials",
      "Forgotten scheduled task",
      "Automatic updates",
      "Normal operations"
    ],
    answer: "Unauthorized access or compromised admin credentials"
  },
  {
    question: "IDS alerts show ARP spoofing and certificate warnings appear on user workstations. This indicates:",
    options: [
      "On-path (MitM) attack in progress",
      "Network maintenance",
      "Switch updates",
      "Normal traffic"
    ],
    answer: "On-path (MitM) attack in progress"
  },
  
  // === FINAL COMPARISON AND ANALYSIS QUESTIONS ===
  
  {
    question: "Which attack type leaves the MOST obvious indicators for quick detection?",
    options: [
      "Ransomware (encrypted files, ransom notes)",
      "Advanced rootkit",
      "Sophisticated APT",
      "Credential replay"
    ],
    answer: "Ransomware (encrypted files, ransom notes)"
  },
  {
    question: "Which indicator is MOST reliable for detecting account compromise?",
    options: [
      "Impossible travel combined with unusual activity",
      "Single failed login",
      "Password change",
      "Normal working hours access"
    ],
    answer: "Impossible travel combined with unusual activity"
  },
  {
    question: "Compare malware propagation: Which spreads FASTEST without user interaction?",
    options: [
      "Worm exploiting network vulnerabilities",
      "Virus requiring file execution",
      "Trojan requiring user installation",
      "Logic bomb waiting for trigger"
    ],
    answer: "Worm exploiting network vulnerabilities"
  },
  {
    question: "Which attack is HARDEST to detect through traditional signature-based methods?",
    options: [
      "Zero-day exploit using unknown techniques",
      "Known ransomware variant",
      "Published malware hashes",
      "Common phishing emails"
    ],
    answer: "Zero-day exploit using unknown techniques"
  },
  {
    question: "Ranking by stealth: Which attack type is MOST covert?",
    options: [
      "Rootkit with kernel-level hiding",
      "Ransomware encryption",
      "DDoS flood",
      "Brute force login attempts"
    ],
    answer: "Rootkit with kernel-level hiding"
  },
  {
    question: "Which indicator combination MOST strongly suggests active data exfiltration?",
    options: [
      "High outbound bandwidth + blocked C2 connections + out-of-cycle activity",
      "Normal web browsing only",
      "Single failed login",
      "Routine software updates"
    ],
    answer: "High outbound bandwidth + blocked C2 connections + out-of-cycle activity"
  },
  {
    question: "To detect advanced persistent threats (APTs), focus on:",
    options: [
      "Behavioral anomalies, long-term pattern analysis, and correlated indicators",
      "Only signature-based detection",
      "Single-point alerts only",
      "Ignoring subtle indicators"
    ],
    answer: "Behavioral anomalies, long-term pattern analysis, and correlated indicators"
  },
  {
    question: "Which requires IMMEDIATE response due to active ongoing damage?",
    options: [
      "Ransomware actively encrypting files",
      "Reconnaissance scanning",
      "Published IoC with no activity",
      "Historical log analysis"
    ],
    answer: "Ransomware actively encrypting files"
  }
]

console.log(indicatorsOfMaliciousActivityQuiz.length);