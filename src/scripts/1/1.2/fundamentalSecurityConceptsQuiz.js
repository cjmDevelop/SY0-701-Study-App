export const fundamentalSecurityConceptsQuiz = [
    {
    quiz_ID: 1.2,
    quiz_name: "1.2 - Fundamental Security Concepts"
  },
  // CIA Triad
  {
    question: "Which component of the CIA triad ensures that only authorized users can access sensitive data?",
    options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
    answer: "Confidentiality"
  },
  {
    question: "Which component of the CIA triad ensures that data remains accurate and unaltered?",
    options: ["Integrity", "Availability", "Confidentiality", "Accounting"],
    answer: "Integrity"
  },
  {
    question: "Which component of the CIA triad ensures that information and systems are accessible to authorized users when needed?",
    options: ["Availability", "Integrity", "Non-repudiation", "Authentication"],
    answer: "Availability"
  },

  // Non-repudiation
  {
    question: "Which security principle prevents someone from denying that they performed an action, such as sending an email?",
    options: ["Non-repudiation", "Integrity", "Confidentiality", "Authentication"],
    answer: "Non-repudiation"
  },

  // AAA
  {
    question: "Which AAA component verifies the identity of a user before granting access to a system?",
    options: ["Authentication", "Authorization", "Accounting", "Non-repudiation"],
    answer: "Authentication"
  },
  {
    question: "Which AAA component determines what resources and actions a user is permitted to access?",
    options: ["Authorization", "Authentication", "Accounting", "Confidentiality"],
    answer: "Authorization"
  },
  {
    question: "Which AAA component involves logging and monitoring user activities for auditing purposes?",
    options: ["Accounting", "Authorization", "Authentication", "Integrity"],
    answer: "Accounting"
  },
  {
    question: "When a system requires a username and password before granting access, this is an example of:",
    options: ["Authenticating people", "Authorizing systems", "Accounting", "Non-repudiation"],
    answer: "Authenticating people"
  },
  {
    question: "Using digital certificates to establish trust and verify identity between two servers is an example of:",
    options: ["Authenticating systems", "Authenticating people", "Authorization", "Accounting"],
    answer: "Authenticating systems"
  },
  {
    question: "Role-Based Access Control (RBAC) is primarily an example of which security concept?",
    options: ["Authorization model", "Authentication system", "Accounting tool", "Gap analysis"],
    answer: "Authorization model"
  },

  // Gap Analysis
  {
    question: "What is the primary purpose of a security gap analysis?",
    options: [
      "To compare the current security posture against a desired or required state",
      "To encrypt sensitive information in transit",
      "To implement an authorization model",
      "To detect intrusions in real-time"
    ],
    answer: "To compare the current security posture against a desired or required state"
  },

  // Zero Trust – Control Plane
  {
    question: "In a Zero Trust architecture, which principle requires continuous verification of user identity throughout a session?",
    options: ["Adaptive identity", "Threat scope reduction", "Policy Engine", "Implicit trust zones"],
    answer: "Adaptive identity"
  },
  {
    question: "Minimizing the number of systems and users that have unnecessary access privileges is an example of:",
    options: ["Threat scope reduction", "Policy-driven access control", "Policy Engine", "Accounting"],
    answer: "Threat scope reduction"
  },
  {
    question: "In Zero Trust, access decisions are made based on predefined rules and policies rather than network location. This is called:",
    options: ["Policy-driven access control", "Implicit trust zones", "Honeypot", "Gap analysis"],
    answer: "Policy-driven access control"
  },
  {
    question: "Which Zero Trust component evaluates policies and makes access decisions?",
    options: ["Policy Engine", "Policy Administrator", "Policy Enforcement Point", "Adaptive identity"],
    answer: "Policy Engine"
  },
  {
    question: "Which Zero Trust component receives decisions from the Policy Engine and communicates them to enforcement points?",
    options: ["Policy Administrator", "Policy Enforcement Point", "Threat scope reduction", "Gap analysis"],
    answer: "Policy Administrator"
  },

  // Zero Trust – Data Plane
  {
    question: "Which Zero Trust principle challenges the traditional assumption of trusted internal networks?",
    options: ["Eliminating implicit trust zones", "Policy Engine", "Policy Administrator", "Deception technology"],
    answer: "Eliminating implicit trust zones"
  },
  {
    question: "In Zero Trust architecture, what term describes the user, device, or system requesting access to a resource?",
    options: ["Subject/System", "Policy Enforcement Point", "Policy Administrator", "Gap analysis"],
    answer: "Subject/System"
  },
  {
    question: "Which Zero Trust component is responsible for enforcing access decisions at the data plane level?",
    options: ["Policy Enforcement Point", "Policy Administrator", "Policy Engine", "Adaptive identity"],
    answer: "Policy Enforcement Point"
  },

  // Physical Security
  {
    question: "Which physical security control is specifically designed to prevent vehicle-ramming attacks?",
    options: ["Bollards", "Fencing", "Lighting", "Sensors"],
    answer: "Bollards"
  },
  {
    question: "Which physical security feature uses two interlocking doors to create a controlled entry point, preventing tailgating?",
    options: ["Access control vestibule", "Video surveillance", "Lighting", "Microwave sensors"],
    answer: "Access control vestibule"
  },
  {
    question: "Which physical security measure is most effective for establishing a perimeter boundary?",
    options: ["Fencing", "Lighting", "Access badge", "Infrared sensors"],
    answer: "Fencing"
  },
  {
    question: "Which of the following is classified as a detective physical security control?",
    options: ["Video surveillance", "Bollards", "Access badges", "Vestibules"],
    answer: "Video surveillance"
  },
  {
    question: "Which security personnel role provides direct human oversight and response capability for physical security?",
    options: ["Security guard", "Policy Engine", "Infrared sensor", "Honeyfile"],
    answer: "Security guard"
  },
  {
    question: "Which physical access control mechanism allows authorized individuals to enter restricted areas?",
    options: ["Access badge", "Infrared sensors", "Lighting", "Fencing"],
    answer: "Access badge"
  },
  {
    question: "Which physical security control both deters intruders and improves visibility for surveillance?",
    options: ["Lighting", "Sensors", "Bollards", "Authorization"],
    answer: "Lighting"
  },
  {
    question: "Which type of sensor detects the thermal signatures emitted by people or warm objects?",
    options: ["Infrared", "Pressure", "Microwave", "Ultrasonic"],
    answer: "Infrared"
  },
  {
    question: "Which type of sensor is triggered by changes in weight or force applied to a surface?",
    options: ["Pressure", "Microwave", "Infrared", "Ultrasonic"],
    answer: "Pressure"
  },
  {
    question: "Which type of sensor uses electromagnetic waves in the radio frequency spectrum to detect motion?",
    options: ["Microwave", "Ultrasonic", "Pressure", "Infrared"],
    answer: "Microwave"
  },
  {
    question: "Which type of sensor emits high-frequency sound waves and detects movement based on wave disruption?",
    options: ["Ultrasonic", "Microwave", "Pressure", "Infrared"],
    answer: "Ultrasonic"
  },

  // Deception & Disruption Technology
  {
    question: "Which deception technology consists of a decoy system designed to attract and monitor attacker activity?",
    options: ["Honeypot", "Honeyfile", "Honeytoken", "Honeynet"],
    answer: "Honeypot"
  },
  {
    question: "Which deception technology consists of multiple interconnected decoy systems that simulate an entire network?",
    options: ["Honeynet", "Honeypot", "Honeyfile", "Honeytoken"],
    answer: "Honeynet"
  },
  {
    question: "Which deception technology is a decoy file strategically placed to detect unauthorized access attempts?",
    options: ["Honeyfile", "Honeypot", "Honeynet", "Honeytoken"],
    answer: "Honeyfile"
  },
  {
    question: "Which deception technology uses fake data, such as fabricated credentials, to detect when it is accessed or used?",
    options: ["Honeytoken", "Honeyfile", "Honeypot", "Honeynet"],
    answer: "Honeytoken"
  }
]

console.log(fundamentalSecurityConceptsQuiz.length);
//33