export const vulnerabilitiesQuiz = [
     {
    quiz_ID: 2.3,
    quiz_name: "Various Types of Vulnerabilities"
  },
{
    question: "What application vulnerability allows attackers to insert malicious code into memory?",
    options: ["Memory injection", "Buffer overflow", "Race condition", "Malicious update"],
    answer: "Memory injection"
  },
  {
    question: "Which vulnerability occurs when a program writes data beyond allocated memory?",
    options: ["Buffer overflow", "Memory injection", "Race condition", "SQLi"],
    answer: "Buffer overflow"
  },
  {
    question: "What vulnerability exploits the timing between checking and using a resource?",
    options: ["Race condition", "Buffer overflow", "Memory injection", "XSS"],
    answer: "Race condition"
  },
  {
    question: "Which race condition term refers to when a security check occurs?",
    options: ["Time-of-check (TOC)", "Time-of-use (TOU)", "Buffer overflow", "Memory injection"],
    answer: "Time-of-check (TOC)"
  },
  {
    question: "What race condition term refers to when a resource is actually used?",
    options: ["Time-of-use (TOU)", "Time-of-check (TOC)", "Buffer overflow", "Race condition"],
    answer: "Time-of-use (TOU)"
  },
  {
    question: "Which vulnerability involves deploying compromised software updates?",
    options: ["Malicious update", "Memory injection", "Buffer overflow", "Race condition"],
    answer: "Malicious update"
  },
  {
    question: "What web-based attack inserts malicious database queries?",
    options: ["SQL injection (SQLi)", "Cross-site scripting (XSS)", "Buffer overflow", "Race condition"],
    answer: "SQL injection (SQLi)"
  },
  {
    question: "Which web-based attack injects malicious scripts into web pages?",
    options: ["Cross-site scripting (XSS)", "SQL injection (SQLi)", "Buffer overflow", "Memory injection"],
    answer: "Cross-site scripting (XSS)"
  },
  {
    question: "What hardware vulnerability exists in the permanent software programmed into devices?",
    options: ["Firmware", "End of life", "Legacy", "Buffer overflow"],
    answer: "Firmware"
  },
  {
    question: "Which term describes hardware that has reached the end of manufacturer support?",
    options: ["End of life", "Legacy", "Firmware", "Deprecated"],
    answer: "End of life"
  },
  {
    question: "What term describes outdated hardware still in use?",
    options: ["Legacy", "End of life", "Firmware", "Deprecated"],
    answer: "Legacy"
  },
  {
    question: "Which virtualization vulnerability allows escaping from a VM to the host?",
    options: ["VM escape", "Resource reuse", "VM sprawl", "Hypervisor attack"],
    answer: "VM escape"
  },
  {
    question: "What virtualization vulnerability involves remnant data from previous VM usage?",
    options: ["Resource reuse", "VM escape", "VM sprawl", "Snapshot vulnerability"],
    answer: "Resource reuse"
  },
  {
    question: "Which supply chain component can introduce vulnerabilities through outsourced services?",
    options: ["Service provider", "Hardware provider", "Software provider", "Internal IT"],
    answer: "Service provider"
  },
  {
    question: "What supply chain vulnerability involves compromised physical equipment?",
    options: ["Hardware provider", "Software provider", "Service provider", "Network provider"],
    answer: "Hardware provider"
  },
  {
    question: "Which supply chain vulnerability involves malicious code in applications?",
    options: ["Software provider", "Hardware provider", "Service provider", "Network provider"],
    answer: "Software provider"
  },
  {
    question: "What mobile device vulnerability involves installing apps from unofficial sources?",
    options: ["Side loading", "Jailbreaking", "Rooting", "Firmware"],
    answer: "Side loading"
  },
  {
    question: "Which mobile device vulnerability removes manufacturer restrictions on iOS devices?",
    options: ["Jailbreaking", "Side loading", "Rooting", "Unlocking"],
    answer: "Jailbreaking"
  },
  {
    question: "What term describes a vulnerability unknown to the vendor with no patch available?",
    options: ["Zero-day", "Legacy", "End of life", "Unpatched"],
    answer: "Zero-day"
  },
  {
    question: "Which vulnerability type involves improper system settings?",
    options: ["Misconfiguration", "Zero-day", "Firmware", "Legacy"],
    answer: "Misconfiguration"
  },
  {
    question: "An attacker exploits the gap between validating file permissions and opening the file. What vulnerability is this?",
    options: ["Race condition", "Buffer overflow", "Memory injection", "SQLi"],
    answer: "Race condition"
  },
  {
    question: "An input field accepts 100 characters but the application only allocates 50 bytes. What vulnerability exists?",
    options: ["Buffer overflow", "Memory injection", "SQLi", "XSS"],
    answer: "Buffer overflow"
  },
  {
    question: "An attacker injects 'OR 1=1--' into a login form to bypass authentication. What attack is this?",
    options: ["SQL injection", "XSS", "Buffer overflow", "Command injection"],
    answer: "SQL injection"
  },
  {
    question: "An attacker injects <script> tags into a comment field that executes in other users' browsers. What is this?",
    options: ["Cross-site scripting (XSS)", "SQL injection", "Buffer overflow", "CSRF"],
    answer: "Cross-site scripting (XSS)"
  },
  {
    question: "A compromised software update installs backdoors on systems. What vulnerability is exploited?",
    options: ["Malicious update", "Supply chain", "Trojan", "Memory injection"],
    answer: "Malicious update"
  },
  {
    question: "An attacker breaks out of a virtual machine to access the hypervisor. What vulnerability is this?",
    options: ["VM escape", "Resource reuse", "Privilege escalation", "Container breakout"],
    answer: "VM escape"
  },
  {
    question: "Sensitive data remains in memory after a VM is deleted and reassigned. What vulnerability is this?",
    options: ["Resource reuse", "VM escape", "Data remnants", "Memory leak"],
    answer: "Resource reuse"
  },
  {
    question: "What vulnerability exists when an organization relies on a single cloud provider?",
    options: ["Cloud-specific", "Vendor lock-in", "Misconfiguration", "Supply chain"],
    answer: "Cloud-specific"
  },
  {
    question: "A router's firmware has a hardcoded backdoor password. What type of vulnerability is this?",
    options: ["Firmware", "Hardware", "Default credentials", "Backdoor"],
    answer: "Firmware"
  },
  {
    question: "A company uses a server that reached end of life 2 years ago. What vulnerability classification is this?",
    options: ["End of life", "Legacy", "Unsupported", "Deprecated"],
    answer: "End of life"
  },
  {
    question: "An Android user removes manufacturer restrictions to gain root access. What is this called?",
    options: ["Rooting", "Jailbreaking", "Side loading", "Unlocking"],
    answer: "Rooting"
  },
  {
    question: "A user installs an app from a third-party website instead of the official app store. What is this?",
    options: ["Side loading", "Jailbreaking", "Rooting", "Unlocking"],
    answer: "Side loading"
  },
  {
    question: "A vulnerability is discovered and actively exploited before a patch is available. What is this called?",
    options: ["Zero-day", "Unpatched", "Exploit", "CVE"],
    answer: "Zero-day"
  },
  {
    question: "Weak encryption algorithms are used in a cryptographic implementation. What type of vulnerability is this?",
    options: ["Cryptographic", "Misconfiguration", "Protocol", "Implementation flaw"],
    answer: "Cryptographic"
  },
  {
    question: "A database server is accidentally left exposed to the internet. What vulnerability is this?",
    options: ["Misconfiguration", "Open port", "Default credentials", "Unsecured"],
    answer: "Misconfiguration"
  },
  {
    question: "Which OS-based vulnerability affects the underlying operating system?",
    options: ["Operating system (OS)-based", "Application", "Firmware", "Hardware"],
    answer: "Operating system (OS)-based"
  },
  {
    question: "A third-party vendor's compromise leads to your organization being breached. What vulnerability is this?",
    options: ["Supply chain", "Third-party risk", "Vendor risk", "External dependency"],
    answer: "Supply chain"
  },
  {
    question: "An application doesn't properly validate user input before processing. This leads to what category of vulnerabilities?",
    options: ["Application", "Input validation", "Web-based", "Logic flaw"],
    answer: "Application"
  },
  {
    question: "Which vulnerability involves outdated systems that are difficult to replace due to dependencies?",
    options: ["Legacy", "End of life", "Deprecated", "Unsupported"],
    answer: "Legacy"
  },
  {
    question: "An attacker targets multitenancy issues in a shared cloud environment. What vulnerability type is this?",
    options: ["Cloud-specific", "Virtualization", "Misconfiguration", "Isolation failure"],
    answer: "Cloud-specific"
  }
]

// console.log(vulnerabilitiesQuiz.length);
//40