export const threatVectorsAndAttackSurfacesQuiz = [
     {
    quiz_ID: 2.2,
    quiz_name: "2.2 - Common threat vectors and attack surfaces"
  },
  // === MESSAGE-BASED VECTORS ===
  
  // Email
  {
    question: "Which message-based vector is most commonly used to deliver phishing attacks and malicious attachments?",
    options: ["Email", "Bluetooth", "Removable device", "Watering hole"],
    answer: "Email"
  },
  {
    question: "An employee receives an email with a malicious Excel macro that executes when opened. Which attack vector is this?",
    options: ["Email-based file delivery", "SMS phishing", "Voice call scam", "Bluetooth exploit"],
    answer: "Email-based file delivery"
  },
  
  // SMS (Smishing)
  {
    question: "Which message-based vector uses text messages to deliver phishing links or malicious content?",
    options: ["SMS (smishing)", "IM", "Email", "Typosquatting"],
    answer: "SMS (smishing)"
  },
  {
    question: "A text message claims 'Your package is delayed, click here to reschedule delivery.' This is an example of:",
    options: ["Smishing", "Vishing", "Email phishing", "Pretexting only"],
    answer: "Smishing"
  },
  
  // Instant Messaging (IM)
  {
    question: "Which communication channel allows attackers to deliver malicious files or links in real-time through platforms like Slack, Teams, or Discord?",
    options: ["Instant messaging (IM)", "SMS", "Voice call", "Removable device"],
    answer: "Instant messaging (IM)"
  },
  {
    question: "An attacker compromises a corporate Teams account and sends malicious links to coworkers. This exploits which vector?",
    options: ["Instant messaging (IM)", "Email", "Bluetooth", "Open service ports"],
    answer: "Instant messaging (IM)"
  },
  
  // NEW: Message-based comparisons
  {
    question: "Compare message-based vectors: What makes SMS attacks (smishing) potentially MORE dangerous than email phishing?",
    options: ["SMS has higher open/click rates and less filtering than email", "SMS messages are always encrypted end-to-end", "SMS cannot contain malicious links", "Email is never used for phishing"],
    answer: "SMS has higher open/click rates and less filtering than email"
  },
  {
    question: "Which message-based vector typically has the LEAST security filtering and inspection?",
    options: ["Instant messaging (IM)", "Corporate email", "SMS", "All have equal filtering"],
    answer: "Instant messaging (IM)"
  },

  // === IMAGE-BASED VECTORS ===
  
  {
    question: "An attacker embeds malicious code within an image file that executes when the image is processed. This attack vector is called:",
    options: ["Image-based attack", "Vishing", "Typosquatting", "Watering hole"],
    answer: "Image-based attack"
  },
  {
    question: "Which technique hides malicious data or commands within image file metadata or uses steganography?",
    options: ["Image-based malware", "Smishing", "Bluetooth attack", "Pretexting"],
    answer: "Image-based malware"
  },
  {
    question: "Steganography in image files is most commonly used for:",
    options: ["Hiding malicious payloads or exfiltrating data covertly", "Encrypting email messages", "Securing Bluetooth connections", "Managing certificates"],
    answer: "Hiding malicious payloads or exfiltrating data covertly"
  },

  // === FILE-BASED VECTORS ===
  
  {
    question: "Delivering malware through a malicious PDF or Office document download is an example of which vector?",
    options: ["File-based", "Vishing", "Supply chain", "Default credentials"],
    answer: "File-based"
  },
  {
    question: "Which file-based threat involves enabling macros in Microsoft Office documents to execute malicious code?",
    options: ["Malicious document macros", "Typosquatting", "Brand impersonation", "Watering hole"],
    answer: "Malicious document macros"
  },
  {
    question: "A user downloads what appears to be a legitimate software installer that actually contains ransomware. This is a:",
    options: ["File-based attack", "Vishing attack", "Bluetooth exploit", "Open port exploitation"],
    answer: "File-based attack"
  },
  
  // NEW: File-based enhancements
  {
    question: "Which file types are commonly exploited in file-based attacks? (Select the MOST comprehensive answer)",
    options: ["PDFs, Office documents (Word/Excel), executables, and scripts", "Only .exe files", "Only image files", "Only text files"],
    answer: "PDFs, Office documents (Word/Excel), executables, and scripts"
  },

  // === VOICE CALL VECTORS ===
  
  {
    question: "Using phone calls to manipulate victims into revealing credentials or transferring money is called:",
    options: ["Vishing", "Smishing", "Phishing", "Pretexting"],
    answer: "Vishing"
  },
  {
    question: "An attacker calls pretending to be from the IT help desk and requests the user's password for 'system maintenance.' This is:",
    options: ["Vishing", "Smishing", "Email phishing", "Typosquatting"],
    answer: "Vishing"
  },
  {
    question: "Which technology do attackers commonly abuse during vishing attacks to appear legitimate?",
    options: ["Caller ID spoofing", "Email headers", "USB autorun", "Bluetooth pairing"],
    answer: "Caller ID spoofing"
  },

  // === REMOVABLE DEVICE VECTORS ===
  
  {
    question: "An attacker leaves USB drives labeled 'Employee Salary Info' in a parking lot, hoping someone will plug them in. This exploits which vector?",
    options: ["Removable device", "IM attack", "Email phishing", "Typosquatting"],
    answer: "Removable device"
  },
  {
    question: "A USB stick with autorun malware is plugged into a workstation and immediately executes ransomware. This is a:",
    options: ["Removable device attack", "Smishing attack", "Vishing attack", "Typosquatting attack"],
    answer: "Removable device attack"
  },
  {
    question: "Which mitigation BEST reduces removable device attack risk?",
    options: ["Disable AutoRun/AutoPlay and use USB device controls", "Enable all service ports", "Use default credentials", "Disable antivirus software"],
    answer: "Disable AutoRun/AutoPlay and use USB device controls"
  },

  // === VULNERABLE SOFTWARE ===
  
  // Client-based vs Agentless
  {
    question: "A vulnerability management system that requires installing software agents on endpoints to perform scans is:",
    options: ["Client-based", "Agentless", "Typosquatting", "Vishing"],
    answer: "Client-based"
  },
  {
    question: "Which scanning approach inspects systems remotely without installing any software on target devices?",
    options: ["Agentless", "Client-based", "Smishing", "Watering hole"],
    answer: "Agentless"
  },
  {
    question: "Running outdated browser versions or unpatched applications on endpoints creates which risk?",
    options: ["Exploitation through vulnerable software", "OCSP failures", "Certificate revocation issues", "Typosquatting"],
    answer: "Exploitation through vulnerable software"
  },
  
  // NEW: Client-based vs Agentless comparisons
  {
    question: "Compare vulnerability scanning approaches: What is an ADVANTAGE of client-based scanning over agentless?",
    options: ["More detailed visibility into local configurations and installed software", "No software installation required", "Works without credentials", "Faster deployment"],
    answer: "More detailed visibility into local configurations and installed software"
  },
  {
    question: "What is an ADVANTAGE of agentless scanning over client-based scanning?",
    options: ["No agent maintenance, updates, or endpoint resource consumption", "Provides deeper endpoint visibility", "Can scan offline systems", "More accurate results"],
    answer: "No agent maintenance, updates, or endpoint resource consumption"
  },

  // === UNSUPPORTED SYSTEMS AND APPLICATIONS ===
  
  {
    question: "Why do unsupported systems and applications pose a significant security risk?",
    options: ["They no longer receive security patches or updates", "They run faster than supported systems", "They use stronger encryption", "They have better performance"],
    answer: "They no longer receive security patches or updates"
  },
  {
    question: "A company still runs Windows Server 2008 R2, which reached end-of-life in 2020. This creates which vulnerability?",
    options: ["Unsupported system with no security patches", "Open service ports", "Default credentials", "Supply chain risk"],
    answer: "Unsupported system with no security patches"
  },
  {
    question: "Which strategy BEST mitigates risks from unsupported applications?",
    options: ["Upgrade to supported versions or decommission the systems", "Use default credentials", "Open all firewall ports", "Disable logging"],
    answer: "Upgrade to supported versions or decommission the systems"
  },
  
  // NEW: Enhanced unsupported systems
  {
    question: "If an organization MUST continue using an unsupported system, which compensating controls should be implemented?",
    options: ["Network segmentation, enhanced monitoring, and restricted access", "Connect directly to the internet for updates", "Use default passwords for convenience", "Disable all security controls"],
    answer: "Network segmentation, enhanced monitoring, and restricted access"
  },

  // === UNSECURE NETWORKS ===
  
  // Wireless
  {
    question: "An attacker sets up a fake Wi-Fi access point with the same name as a legitimate network to intercept traffic. This is called:",
    options: ["Evil twin / Rogue access point", "Typosquatting", "Vishing", "File-based attack"],
    answer: "Evil twin / Rogue access point"
  },
  {
    question: "Which wireless attack involves an attacker creating a malicious hotspot to capture credentials from connecting users?",
    options: ["Rogue access point attack", "Smishing", "Image-based attack", "Watering hole"],
    answer: "Rogue access point attack"
  },
  {
    question: "Connecting to an open, unencrypted Wi-Fi network at a coffee shop exposes users to which primary risk?",
    options: ["Traffic interception and man-in-the-middle attacks", "Typosquatting", "Supply chain compromise", "Default credentials"],
    answer: "Traffic interception and man-in-the-middle attacks"
  },
  
  // Wired
  {
    question: "An attacker connects to an unsecured switch port and uses ARP spoofing to intercept network traffic. This is:",
    options: ["Man-in-the-middle on wired network", "Smishing", "Image-based attack", "Watering hole"],
    answer: "Man-in-the-middle on wired network"
  },
  {
    question: "Which wired network vulnerability allows attackers with physical access to connect unauthorized devices?",
    options: ["Unsecured switch ports", "Weak Wi-Fi passwords", "Bluetooth vulnerabilities", "SMS interception"],
    answer: "Unsecured switch ports"
  },
  
  // Bluetooth
  {
    question: "Which short-range wireless technology can be exploited to exfiltrate data from nearby devices or inject malicious commands?",
    options: ["Bluetooth", "Email", "SMS", "File-based attacks"],
    answer: "Bluetooth"
  },
  {
    question: "An attacker uses Bluetooth to connect to a device without authorization and extract contact lists. This attack is called:",
    options: ["Bluesnarfing", "Smishing", "Vishing", "Typosquatting"],
    answer: "Bluesnarfing"
  },
  {
    question: "Which Bluetooth attack involves sending unsolicited messages to nearby devices?",
    options: ["Bluejacking", "Phishing", "Pretexting", "Watering hole"],
    answer: "Bluejacking"
  },
  
  // NEW: Network comparisons
  {
    question: "Compare network attack surfaces: Which network type typically has the MOST security controls and monitoring?",
    options: ["Wired corporate networks", "Public Wi-Fi", "Bluetooth connections", "Open wireless networks"],
    answer: "Wired corporate networks"
  },

  // === OPEN SERVICE PORTS ===
  
  {
    question: "Exposed open service ports on internet-facing systems primarily increase the risk of:",
    options: ["Remote exploitation and unauthorized access", "Typosquatting", "Smishing", "Email phishing"],
    answer: "Remote exploitation and unauthorized access"
  },
  {
    question: "A server has ports 21 (FTP), 23 (Telnet), and 3389 (RDP) open to the internet. This creates which attack surface?",
    options: ["Open service ports vulnerable to exploitation", "Removable device risk", "Supply chain compromise", "Image-based attacks"],
    answer: "Open service ports vulnerable to exploitation"
  },
  {
    question: "Which mitigation strategy BEST reduces risk from unnecessary open ports?",
    options: ["Close unused ports and implement firewall rules", "Use self-signed certificates", "Enable default credentials", "Disable all logging"],
    answer: "Close unused ports and implement firewall rules"
  },
  
  // NEW: Open ports enhancement
  {
    question: "An attacker scans a network and finds port 445 (SMB) open. If this service is unpatched, which famous attack could be launched?",
    options: ["EternalBlue/WannaCry-style ransomware", "Phishing attack", "Vishing attack", "Typosquatting"],
    answer: "EternalBlue/WannaCry-style ransomware"
  },

  // === DEFAULT CREDENTIALS ===
  
  {
    question: "Why are devices with factory default credentials a significant security vulnerability?",
    options: ["Attackers can easily find and use default passwords to gain access", "They use stronger encryption", "They automatically close all ports", "They require agentless scanning"],
    answer: "Attackers can easily find and use default passwords to gain access"
  },
  {
    question: "An IoT camera is deployed with username 'admin' and password 'admin' unchanged. This creates which vulnerability?",
    options: ["Default credentials exploitation", "Supply chain attack", "Image-based attack", "Typosquatting"],
    answer: "Default credentials exploitation"
  },
  {
    question: "Which security practice prevents exploitation of default credentials?",
    options: ["Change all default passwords before deployment", "Disable logging", "Use self-signed certificates", "Open all firewall ports"],
    answer: "Change all default passwords before deployment"
  },
  
  // NEW: Default credentials enhancement
  {
    question: "Default credentials are most commonly exploited in which types of devices?",
    options: ["IoT devices, network equipment, and embedded systems", "Only desktop computers", "Only mobile phones", "Only email servers"],
    answer: "IoT devices, network equipment, and embedded systems"
  },

  // === SUPPLY CHAIN ===
  
  {
    question: "A threat actor compromises a software vendor and injects malware into a legitimate software update. This is a:",
    options: ["Supply chain attack", "Smishing attack", "Vishing attack", "Typosquatting attack"],
    answer: "Supply chain attack"
  },
  
  // Managed Service Providers (MSPs)
  {
    question: "Which third-party entity typically has privileged access to multiple customer networks, making them a high-value target?",
    options: ["Managed Service Provider (MSP)", "Typosquatter", "Brand impersonator", "Bluetooth attacker"],
    answer: "Managed Service Provider (MSP)"
  },
  {
    question: "An MSP's systems are compromised, giving attackers access to all their clients' networks. This demonstrates which risk?",
    options: ["Supply chain risk through MSP compromise", "Default credentials", "Open service ports", "Removable device attack"],
    answer: "Supply chain risk through MSP compromise"
  },
  
  // Vendors and Suppliers
  {
    question: "A hardware vendor's firmware update contains a backdoor that was inserted during manufacturing. This is an example of:",
    options: ["Supply chain attack through vendor compromise", "Phishing", "Vishing", "Typosquatting"],
    answer: "Supply chain attack through vendor compromise"
  },
  {
    question: "Which practice BEST reduces supply chain risk from vendors and suppliers?",
    options: ["Conduct vendor security assessments and verify code integrity", "Use default credentials", "Enable device autorun", "Disable all security logging"],
    answer: "Conduct vendor security assessments and verify code integrity"
  },
  
  // NEW: Supply chain enhancements
  {
    question: "The SolarWinds attack (2020) is a famous example of which supply chain vector?",
    options: ["Vendor software update compromise", "MSP credential theft only", "Hardware tampering only", "Phishing campaign"],
    answer: "Vendor software update compromise"
  },
  {
    question: "Compare supply chain risks: Which represents the GREATEST blast radius when compromised?",
    options: ["Widely-used software library or component", "Single supplier's hardware", "Individual vendor relationship", "One MSP customer"],
    answer: "Widely-used software library or component"
  },

  // === HUMAN VECTORS / SOCIAL ENGINEERING ===
  
  // Phishing
  {
    question: "An email tricks employees into entering credentials on a fake login page that harvests their information. This is:",
    options: ["Phishing", "Vishing", "Typosquatting", "Watering hole"],
    answer: "Phishing"
  },
  {
    question: "Which controls BEST reduce phishing attack success rates?",
    options: ["Email filtering, user awareness training, and MFA", "Leaving ports open", "Using default passwords", "Disabling all authentication"],
    answer: "Email filtering, user awareness training, and MFA"
  },
  {
    question: "Spear phishing differs from general phishing because it:",
    options: ["Targets specific individuals with personalized content", "Uses only SMS messages", "Never uses email", "Only targets companies, not individuals"],
    answer: "Targets specific individuals with personalized content"
  },
  
  // Vishing (already covered above, adding one more)
  {
    question: "An attacker calls claiming to be from the bank's fraud department and requests account verification. This social engineering technique is:",
    options: ["Vishing", "Smishing", "Email phishing", "Watering hole"],
    answer: "Vishing"
  },
  
  // Smishing (already covered above)
  
  // Misinformation / Disinformation
  {
    question: "Deliberately spreading false information to manipulate public opinion or behavior is called:",
    options: ["Disinformation", "Misinformation", "Phishing", "Vishing"],
    answer: "Disinformation"
  },
  {
    question: "False information that is spread unintentionally without malicious intent is called:",
    options: ["Misinformation", "Disinformation", "Typosquatting", "Pretexting"],
    answer: "Misinformation"
  },
  {
    question: "What distinguishes disinformation from misinformation?",
    options: ["Disinformation is intentionally false; misinformation may be unintentional", "They are exactly the same", "Misinformation is always criminal", "Disinformation is always legal"],
    answer: "Disinformation is intentionally false; misinformation may be unintentional"
  },
  
  // Impersonation / Business Email Compromise (BEC)
  {
    question: "An attacker spoofs the CEO's email to request an urgent wire transfer to a fraudulent account. This is:",
    options: ["Business Email Compromise (BEC)", "Smishing", "Typosquatting", "Watering hole"],
    answer: "Business Email Compromise (BEC)"
  },
  {
    question: "Which email security technologies help detect impersonation and spoofing attempts?",
    options: ["DMARC, DKIM, and SPF", "USB controls", "Bluetooth filtering", "Open port scanning"],
    answer: "DMARC, DKIM, and SPF"
  },
  {
    question: "BEC attacks are particularly effective because they:",
    options: ["Exploit trust in executive authority and bypass technical controls", "Use only text messages", "Require physical access", "Only target individuals, not businesses"],
    answer: "Exploit trust in executive authority and bypass technical controls"
  },
  
  // Pretexting
  {
    question: "An attacker creates a believable scenario claiming to be a vendor requiring urgent system access. This technique is:",
    options: ["Pretexting", "Typosquatting", "Watering hole", "Image-based attack"],
    answer: "Pretexting"
  },
  {
    question: "Pretexting is most effective when combined with:",
    options: ["Detailed research and impersonation of trusted entities", "Random email blasts", "Bluetooth attacks", "File-based malware only"],
    answer: "Detailed research and impersonation of trusted entities"
  },
  
  // Watering Hole
  {
    question: "Attackers compromise a website frequently visited by employees of a target organization to infect visitors. This is a:",
    options: ["Watering hole attack", "Phishing attack", "Brand impersonation", "Typosquatting"],
    answer: "Watering hole attack"
  },
  {
    question: "Watering hole attacks are effective because they:",
    options: ["Compromise trusted websites that victims regularly visit", "Use email exclusively", "Only work via SMS", "Require no technical sophistication"],
    answer: "Compromise trusted websites that victims regularly visit"
  },
  
  // Brand Impersonation
  {
    question: "Creating a fake website that looks identical to a legitimate bank to steal login credentials is:",
    options: ["Brand impersonation", "Vishing", "Smishing", "Bluetooth attack"],
    answer: "Brand impersonation"
  },
  {
    question: "Brand impersonation attacks commonly target which types of organizations?",
    options: ["Financial institutions, tech companies, and popular online services", "Only government agencies", "Only small businesses", "Only educational institutions"],
    answer: "Financial institutions, tech companies, and popular online services"
  },
  
  // Typosquatting
  {
    question: "Registering domain names like 'amaz0n.com' or 'gooogle.com' to trick users is called:",
    options: ["Typosquatting", "Watering hole", "Smishing", "Vishing"],
    answer: "Typosquatting"
  },
  {
    question: "Typosquatting exploits which user behavior?",
    options: ["Common typing mistakes when entering URLs", "Clicking email links only", "Answering phone calls", "Using USB drives"],
    answer: "Common typing mistakes when entering URLs"
  },

  // === COMBINED / SCENARIO-BASED QUESTIONS ===
  
  {
    question: "A user receives a text message with a shortened URL claiming to be from their bank; clicking it leads to a fake login page. Which vectors are combined?",
    options: ["Smishing + Brand impersonation", "Vishing + Typosquatting", "Image-based + Bluetooth", "Email + File-based"],
    answer: "Smishing + Brand impersonation"
  },
  {
    question: "A USB drive labeled 'Executive Bonuses' is found in the parking lot and plugged in, installing ransomware that spreads via an unpatched SMB vulnerability. Which attack vectors are present?",
    options: ["Removable device + Vulnerable software + Open service port", "Vishing + Smishing + Typosquatting", "Image-based + Email + Bluetooth", "Only removable device"],
    answer: "Removable device + Vulnerable software + Open service port"
  },
  {
    question: "An employee uses an unauthorized cloud storage app to share confidential files; that SaaS provider is later breached. This illustrates which combined risks?",
    options: ["Shadow IT + Supply chain risk", "Typosquatting + Vishing", "Smishing + Watering hole", "Only supply chain risk"],
    answer: "Shadow IT + Supply chain risk"
  },
  {
    question: "Which defense strategy BEST addresses multiple human-based social engineering vectors (phishing, pretexting, BEC)?",
    options: ["Security awareness training, MFA, and verification procedures", "Open all ports, use default passwords, disable logging", "Use self-signed certificates and enable autorun", "Remove all security patches"],
    answer: "Security awareness training, MFA, and verification procedures"
  },
  {
    question: "An attacker sends an email with an infected Word document containing macros, pretending to be from HR. Which vectors are combined?",
    options: ["Email + File-based + Phishing/Impersonation", "SMS + Vishing + Bluetooth", "Wireless + Wired + Open ports", "Only email"],
    answer: "Email + File-based + Phishing/Impersonation"
  },
  {
    question: "A company's MSP is compromised via a phishing attack, giving attackers access to all client environments. This demonstrates:",
    options: ["Supply chain (MSP) + Phishing attack combination", "Only phishing", "Only supply chain risk", "Default credentials issue"],
    answer: "Supply chain (MSP) + Phishing attack combination"
  },
  
  // NEW: Advanced scenario-based
  {
    question: "An attacker calls an employee (vishing), convinces them to visit a typosquatting domain, which downloads malware. How many attack vectors are combined?",
    options: ["Three: Voice call + Typosquatting + File-based", "One: Only vishing", "Two: Only voice and typosquatting", "Four: Voice + typo + file + email"],
    answer: "Three: Voice call + Typosquatting + File-based"
  },
  {
    question: "Which attack surface is MOST difficult to secure with technical controls alone?",
    options: ["Human vectors/social engineering", "Open service ports", "Default credentials", "Unsupported systems"],
    answer: "Human vectors/social engineering"
  },
  {
    question: "A penetration tester successfully chains: rogue Wi-Fi AP → captured credentials → VPN access → lateral movement via open SMB ports. This demonstrates:",
    options: ["Multiple attack surfaces creating an attack path", "Only wireless vulnerability", "Only network vulnerability", "Only credential vulnerability"],
    answer: "Multiple attack surfaces creating an attack path"
  },
  {
    question: "Ranking attack vectors by typical user awareness: Which has the LOWEST user recognition rate?",
    options: ["Business Email Compromise (BEC)", "Obvious phishing emails", "SMS from unknown numbers", "Suspicious USB drives"],
    answer: "Business Email Compromise (BEC)"
  }
]

console.log(threatVectorsAndAttackSurfacesQuiz.length);
//81