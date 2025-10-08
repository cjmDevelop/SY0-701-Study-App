export const threatActorsAndMotivationsQuiz = [
    {
    quiz_ID: 2.1,
    quiz_name: "2.0 - 2.1 Common threat actors and motivations"
  },
  // --- Threat Actors ---
  {
    question: "Which threat actor is typically backed by significant resources and often targets other governments or critical infrastructure?",
    options: ["Nation-state", "Hacktivist", "Insider threat", "Organized crime"],
    answer: "Nation-state"
  },
  {
    question: "Which type of attacker usually has limited technical skills and relies on pre-made tools or scripts?",
    options: ["Unskilled attacker", "Insider threat", "Nation-state", "Organized crime"],
    answer: "Unskilled attacker"
  },
  {
    question: "Which group is motivated by political or social causes and may deface websites to spread their message?",
    options: ["Hacktivist", "Organized crime", "Insider threat", "Shadow IT"],
    answer: "Hacktivist"
  },
  {
    question: "Which threat originates from employees or contractors within an organization?",
    options: ["Insider threat", "Nation-state", "Hacktivist", "Organized crime"],
    answer: "Insider threat"
  },
  {
    question: "Which group is often well-funded, operates like a business, and engages in activities such as ransomware and fraud?",
    options: ["Organized crime", "Hacktivist", "Shadow IT", "Unskilled attacker"],
    answer: "Organized crime"
  },
  {
    question: "What term describes employees deploying unauthorized systems or applications outside of IT control?",
    options: ["Shadow IT", "Insider threat", "Hacktivist", "Nation-state"],
    answer: "Shadow IT"
  },

  // --- Attributes of Actors ---
  {
    question: "An external attacker from outside an organization launches a phishing campaign. Which attribute best describes them?",
    options: ["External", "Internal", "Shadow IT", "Insider"],
    answer: "External"
  },
  {
    question: "Which type of threat actor usually has the most resources and funding?",
    options: ["Nation-state", "Hacktivist", "Unskilled attacker", "Insider threat"],
    answer: "Nation-state"
  },
  {
    question: "A well-funded cybercriminal group uses advanced malware to avoid detection. Which attribute best describes them?",
    options: ["High sophistication", "Low sophistication", "Unskilled", "Ethical"],
    answer: "High sophistication"
  },
  {
    question: "An employee using unauthorized cloud storage for company data is an example of:",
    options: ["Internal actor", "External actor", "Nation-state", "Hacktivist"],
    answer: "Internal actor"
  },

  // --- NEW: Enhanced Attributes Questions ---
  {
    question: "Compare threat actor sophistication: Which actor typically has the LOWEST level of technical capability?",
    options: ["Unskilled attacker", "Nation-state", "Organized crime", "Insider threat"],
    answer: "Unskilled attacker"
  },
  {
    question: "Which threat actor can be either internal OR external to an organization?",
    options: ["Insider threat can be internal; organized crime is typically external", "Nation-states are always internal", "Hacktivists are always internal", "Shadow IT is always external"],
    answer: "Insider threat can be internal; organized crime is typically external"
  },
  {
    question: "Contrast these actors by resources: Which has MORE funding and resources than a typical hacktivist group?",
    options: ["Organized crime", "Unskilled attacker", "Shadow IT", "Individual insider"],
    answer: "Organized crime"
  },
  {
    question: "A contractor with legitimate access credentials exfiltrates data. Which attribute classification applies?",
    options: ["Internal threat with authorized access", "External threat with no access", "Shadow IT with partial access", "Nation-state with stolen access"],
    answer: "Internal threat with authorized access"
  },
  {
    question: "Compare sophistication levels: Which pairing correctly matches actors from LEAST to MOST sophisticated?",
    options: ["Unskilled attacker → Hacktivist → Organized crime → Nation-state", "Nation-state → Organized crime → Hacktivist → Unskilled attacker", "Hacktivist → Unskilled attacker → Nation-state → Organized crime", "Insider threat → Shadow IT → Nation-state → Hacktivist"],
    answer: "Unskilled attacker → Hacktivist → Organized crime → Nation-state"
  },
  {
    question: "Which threat actor typically operates with the LEAST amount of funding?",
    options: ["Unskilled attacker", "Organized crime", "Nation-state", "Well-funded hacktivist groups"],
    answer: "Unskilled attacker"
  },
  {
    question: "An attack uses zero-day exploits and custom malware that evades all detection. This indicates which sophistication level?",
    options: ["High sophistication/advanced capability", "Low sophistication/basic capability", "Moderate sophistication", "No sophistication required"],
    answer: "High sophistication/advanced capability"
  },
  {
    question: "Shadow IT differs from insider threats primarily because Shadow IT:",
    options: ["May not have malicious intent, just bypasses IT controls", "Always has malicious intent to harm the organization", "Originates from external actors only", "Requires nation-state level resources"],
    answer: "May not have malicious intent, just bypasses IT controls"
  },

  // --- Motivations ---
  {
    question: "An attacker steals sensitive customer data and sells it on the dark web. This motivation is:",
    options: ["Financial gain", "Revenge", "Chaos", "Ethical"],
    answer: "Financial gain"
  },
  {
    question: "A nation-state infiltrates a competitor's government systems to gain classified information. This is an example of:",
    options: ["Espionage", "Service disruption", "Revenge", "Blackmail"],
    answer: "Espionage"
  },
  {
    question: "Hackers overwhelm a bank's website with traffic, making it unavailable to customers. This motivation is:",
    options: ["Service disruption", "Espionage", "Data exfiltration", "Blackmail"],
    answer: "Service disruption"
  },
  {
    question: "An attacker encrypts a victim's files and demands payment to restore access. This motivation is:",
    options: ["Blackmail", "Espionage", "Philosophical beliefs", "Ethical hacking"],
    answer: "Blackmail"
  },
  {
    question: "Hackers breach a company and steal intellectual property. This motivation is:",
    options: ["Data exfiltration", "Revenge", "Disruption", "Financial gain"],
    answer: "Data exfiltration"
  },
  {
    question: "A hacktivist group defaces a company's website to protest environmental policies. This motivation is:",
    options: ["Philosophical/political beliefs", "Revenge", "Financial gain", "Chaos"],
    answer: "Philosophical/political beliefs"
  },
  {
    question: "An ethical hacker is hired to find vulnerabilities before malicious actors exploit them. Their motivation is:",
    options: ["Ethical", "Financial gain", "Espionage", "Chaos"],
    answer: "Ethical"
  },
  {
    question: "A disgruntled ex-employee deletes important company files after being fired. This motivation is:",
    options: ["Revenge", "Ethical", "Blackmail", "Espionage"],
    answer: "Revenge"
  },
  {
    question: "An attacker launches random attacks against networks without any clear purpose, just to cause trouble. This motivation is:",
    options: ["Disruption/chaos", "Financial gain", "Espionage", "Service disruption"],
    answer: "Disruption/chaos"
  },
  {
    question: "During a conflict, a nation-state launches cyberattacks to damage another country's infrastructure. This motivation is:",
    options: ["War", "Blackmail", "Revenge", "Chaos"],
    answer: "War"
  },

  // --- NEW: Enhanced Motivation Comparison Questions ---
  {
    question: "Compare motivations: What distinguishes 'data exfiltration' from 'espionage'?",
    options: ["Espionage specifically targets intelligence/secrets for strategic advantage; data exfiltration is broader theft", "They are identical terms", "Data exfiltration only applies to nation-states", "Espionage is always ethical"],
    answer: "Espionage specifically targets intelligence/secrets for strategic advantage; data exfiltration is broader theft"
  },
  {
    question: "Which motivation is MOST commonly associated with organized crime groups?",
    options: ["Financial gain", "Philosophical/political beliefs", "Ethical concerns", "War"],
    answer: "Financial gain"
  },
  {
    question: "Contrast these motivations: 'Service disruption' vs 'Disruption/chaos'. What's the key difference?",
    options: ["Service disruption targets specific services; chaos is random/widespread disruption", "Service disruption is ethical; chaos is not", "They mean exactly the same thing", "Service disruption is less serious"],
    answer: "Service disruption targets specific services; chaos is random/widespread disruption"
  },
  {
    question: "Which threat actor is LEAST likely to be motivated by financial gain?",
    options: ["Hacktivist", "Organized crime", "Unskilled attacker seeking money", "Ransomware operator"],
    answer: "Hacktivist"
  },
  {
    question: "A nation-state actor could have multiple motivations. Which combination is MOST likely?",
    options: ["Espionage + War + Service disruption", "Financial gain + Ethical + Revenge", "Chaos + Blackmail + Shadow IT", "Revenge + Philosophical beliefs + Ethical"],
    answer: "Espionage + War + Service disruption"
  }
]