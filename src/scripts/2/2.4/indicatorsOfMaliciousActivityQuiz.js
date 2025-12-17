export const indicatorsOfMaliciousActivityQuiz = [
       {
    quiz_ID: 2.4,
    quiz_name: "Indicators of Malicious Activity"
  },

 // 2.4 Indicators of Malicious Activity (45 questions)
  {
    question: "What type of malware encrypts files and demands payment for decryption?",
    options: ["Ransomware", "Trojan", "Worm", "Spyware"],
    answer: "Ransomware"
  },
  {
    question: "Which malware disguises itself as legitimate software?",
    options: ["Trojan", "Worm", "Virus", "Ransomware"],
    answer: "Trojan"
  },
  {
    question: "What malware self-replicates and spreads across networks without user interaction?",
    options: ["Worm", "Virus", "Trojan", "Ransomware"],
    answer: "Worm"
  },
  {
    question: "Which malware secretly monitors and collects user information?",
    options: ["Spyware", "Bloatware", "Virus", "Worm"],
    answer: "Spyware"
  },
  {
    question: "What term describes unwanted pre-installed software that consumes resources?",
    options: ["Bloatware", "Spyware", "Adware", "Trojan"],
    answer: "Bloatware"
  },
  {
    question: "Which malware requires a host file and user action to spread?",
    options: ["Virus", "Worm", "Trojan", "Rootkit"],
    answer: "Virus"
  },
  {
    question: "What malware records keystrokes to steal credentials?",
    options: ["Keylogger", "Spyware", "Trojan", "Virus"],
    answer: "Keylogger"
  },
  {
    question: "Which malware executes when specific conditions are met?",
    options: ["Logic bomb", "Virus", "Worm", "Trojan"],
    answer: "Logic bomb"
  },
  {
    question: "What malware provides privileged access while hiding its presence?",
    options: ["Rootkit", "Trojan", "Virus", "Spyware"],
    answer: "Rootkit"
  },
  {
    question: "Which physical attack tries all possible password combinations?",
    options: ["Brute force", "RFID cloning", "Environmental", "Tampering"],
    answer: "Brute force"
  },
  {
    question: "What physical attack involves copying data from contactless cards?",
    options: ["RFID cloning", "Brute force", "Environmental", "Skimming"],
    answer: "RFID cloning"
  },
  {
    question: "Which attack exploits physical conditions like temperature or power?",
    options: ["Environmental", "Brute force", "RFID cloning", "Tampering"],
    answer: "Environmental"
  },
  {
    question: "What network attack uses multiple systems to overwhelm a target?",
    options: ["Distributed denial-of-service (DDoS)", "DNS attack", "On-path", "Credential replay"],
    answer: "Distributed denial-of-service (DDoS)"
  },
  {
    question: "Which DDoS technique uses third-party servers to increase attack traffic?",
    options: ["Amplified", "Reflected", "Direct", "Distributed"],
    answer: "Amplified"
  },
  {
    question: "What DDoS technique bounces traffic off intermediary systems?",
    options: ["Reflected", "Amplified", "Direct", "Distributed"],
    answer: "Reflected"
  },
  {
    question: "Which attack manipulates domain name resolution?",
    options: ["DNS attack", "DDoS", "On-path", "Credential replay"],
    answer: "DNS attack"
  },
  {
    question: "What attack intercepts and potentially modifies communications between parties?",
    options: ["On-path", "DNS attack", "DDoS", "Wireless attack"],
    answer: "On-path"
  },
  {
    question: "Which attack reuses captured authentication data?",
    options: ["Credential replay", "On-path", "Brute force", "Password spraying"],
    answer: "Credential replay"
  },
  {
    question: "What application attack inserts malicious input into an application?",
    options: ["Injection", "Buffer overflow", "Replay", "Privilege escalation"],
    answer: "Injection"
  },
  {
    question: "Which application attack gains higher access levels than authorized?",
    options: ["Privilege escalation", "Injection", "Buffer overflow", "Forgery"],
    answer: "Privilege escalation"
  },
  {
    question: "What attack creates false requests that appear legitimate?",
    options: ["Forgery", "Replay", "Injection", "Directory traversal"],
    answer: "Forgery"
  },
  {
    question: "Which attack accesses files outside intended directories?",
    options: ["Directory traversal", "Injection", "Buffer overflow", "Privilege escalation"],
    answer: "Directory traversal"
  },
  {
    question: "What cryptographic attack forces use of weaker encryption?",
    options: ["Downgrade", "Collision", "Birthday", "Brute force"],
    answer: "Downgrade"
  },
  {
    question: "Which cryptographic attack finds two inputs producing the same hash?",
    options: ["Collision", "Birthday", "Downgrade", "Brute force"],
    answer: "Collision"
  },
  {
    question: "What attack exploits the probability of hash collisions based on the birthday paradox?",
    options: ["Birthday", "Collision", "Downgrade", "Rainbow table"],
    answer: "Birthday"
  },
  {
    question: "Which password attack tries common passwords across many accounts?",
    options: ["Spraying", "Brute force", "Dictionary", "Rainbow table"],
    answer: "Spraying"
  },
  {
    question: "What indicator suggests repeated failed login attempts?",
    options: ["Account lockout", "Concurrent session usage", "Impossible travel", "Resource consumption"],
    answer: "Account lockout"
  },
  {
    question: "Which indicator shows a user logged in from multiple locations simultaneously?",
    options: ["Concurrent session usage", "Account lockout", "Impossible travel", "Missing logs"],
    answer: "Concurrent session usage"
  },
  {
    question: "What indicator suggests security controls prevented malicious activity?",
    options: ["Blocked content", "Account lockout", "Resource consumption", "Missing logs"],
    answer: "Blocked content"
  },
  {
    question: "Which indicator shows login from geographically distant locations in short time?",
    options: ["Impossible travel", "Concurrent session usage", "Account lockout", "Out-of-cycle logging"],
    answer: "Impossible travel"
  },
  {
    question: "What indicator suggests malware or cryptomining activity?",
    options: ["Resource consumption", "Account lockout", "Blocked content", "Missing logs"],
    answer: "Resource consumption"
  },
  {
    question: "Which indicator shows logging activity outside normal patterns?",
    options: ["Out-of-cycle logging", "Missing logs", "Resource consumption", "Blocked content"],
    answer: "Out-of-cycle logging"
  },
  {
    question: "What indicator refers to known vulnerabilities or exploits in public databases?",
    options: ["Published/documented", "Missing logs", "Out-of-cycle logging", "Blocked content"],
    answer: "Published/documented"
  },
  {
    question: "Which indicator suggests log tampering or system compromise?",
    options: ["Missing logs", "Out-of-cycle logging", "Resource consumption", "Blocked content"],
    answer: "Missing logs"
  },
  {
    question: "Files are encrypted with a .locked extension and a ransom note appears. What malware is this?",
    options: ["Ransomware", "Virus", "Worm", "Trojan"],
    answer: "Ransomware"
  },
  {
    question: "A program appears to be a legitimate game but actually steals passwords. What is this?",
    options: ["Trojan", "Virus", "Worm", "Spyware"],
    answer: "Trojan"
  },
  {
    question: "Malware spreads automatically across the network without any user interaction. What is it?",
    options: ["Worm", "Virus", "Trojan", "Logic bomb"],
    answer: "Worm"
  },
  {
    question: "Every keystroke is recorded and sent to an attacker. What malware is installed?",
    options: ["Keylogger", "Spyware", "Rootkit", "RAT"],
    answer: "Keylogger"
  },
  {
    question: "Malware that executes on a specific date to delete files. What type is this?",
    options: ["Logic bomb", "Virus", "Worm", "Time bomb"],
    answer: "Logic bomb"
  },
  {
    question: "Malware hides at the OS level and cannot be detected by normal antivirus. What is it?",
    options: ["Rootkit", "Virus", "Trojan", "Stealth malware"],
    answer: "Rootkit"
  },
  {
    question: "An attacker uses NTP servers to amplify traffic 100x in a DDoS. What technique is this?",
    options: ["Amplified DDoS", "Reflected DDoS", "Direct DDoS", "Volumetric DDoS"],
    answer: "Amplified DDoS"
  },
  {
    question: "Traffic appears to come from legitimate servers but is actually from the attacker. What DDoS is this?",
    options: ["Reflected DDoS", "Amplified DDoS", "Spoofed DDoS", "Direct DDoS"],
    answer: "Reflected DDoS"
  },
  {
    question: "An attacker intercepts and modifies packets between two communicating systems. What attack is this?",
    options: ["On-path", "Session hijacking", "Replay", "Sniffing"],
    answer: "On-path"
  },
  {
    question: "An attacker captures authentication cookies and reuses them to gain access. What is this?",
    options: ["Credential replay", "Session hijacking", "Cookie theft", "On-path"],
    answer: "Credential replay"
  },
  {
    question: "A user logs in from New York at 2pm and Tokyo at 2:05pm the same day. What indicator is this?",
    options: ["Impossible travel", "Concurrent sessions", "Anomalous activity", "Geo-spoofing"],
    answer: "Impossible travel"
  },
  {
    question: "CPU usage is at 100% and the system is very slow. What indicator might this be?",
    options: ["Resource consumption", "Malware activity", "Performance issue", "System overload"],
    answer: "Resource consumption"
  }
]

// console.log(indicatorsOfMaliciousActivityQuiz.length);
//46