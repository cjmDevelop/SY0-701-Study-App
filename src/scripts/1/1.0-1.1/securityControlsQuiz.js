export const securityControlsQuiz = [
  // Control Categories (Technical, Managerial, Operational, Physical)
  {
    quiz_ID: 1.1,
    quiz_name: "1.0 - 1.1 General Security Concepts"
  },
  {
    question: "Which of the following is an example of a technical security control?",
    options: ["Security policy", "Firewall", "Security awareness training", "Locked doors"],
    answer: "Firewall"
  },
  {
    question: "Which of the following is an example of a managerial control?",
    options: ["Firewall rules", "Change management policy", "Motion sensors", "Encryption"],
    answer: "Change management policy"
  },
  {
    question: "Which of the following is an operational control?",
    options: ["Security log reviews", "Encryption", "Access badges", "Biometric scanner"],
    answer: "Security log reviews"
  },
  {
    question: "Which of the following best represents a physical control?",
    options: ["Security guard", "Password complexity requirements", "Risk assessment", "Incident response plan"],
    answer: "Security guard"
  },
  
  // Functional Control Types (Preventive, Detective, Corrective, etc.)
  {
    question: "What type of control is primarily designed to prevent a security incident from occurring?",
    options: ["Detective", "Preventive", "Corrective", "Compensating"],
    answer: "Preventive"
  },
  {
    question: "What type of control is designed to identify and alert when a security event has occurred?",
    options: ["Preventive", "Deterrent", "Detective", "Compensating"],
    answer: "Detective"
  },
  {
    question: "Which control type is focused on discouraging potential attackers without physically stopping them?",
    options: ["Deterrent", "Preventive", "Corrective", "Directive"],
    answer: "Deterrent"
  },
  {
    question: "Which control type is implemented to restore systems after a security incident?",
    options: ["Compensating", "Corrective", "Preventive", "Detective"],
    answer: "Corrective"
  },
  {
    question: "Which control type is used as an alternative when the primary security control cannot be implemented?",
    options: ["Corrective", "Compensating", "Directive", "Preventive"],
    answer: "Compensating"
  },
  {
    question: "What type of control provides instructions or guidance on expected behavior?",
    options: ["Directive", "Detective", "Operational", "Deterrent"],
    answer: "Directive"
  },
  
  // Scenario-Based Questions
  {
    question: "A company mandates that all employees complete annual security awareness training. This is an example of what kind of control?",
    options: ["Managerial", "Technical", "Physical", "Detective"],
    answer: "Managerial"
  },
  {
    question: "Requiring two-factor authentication (2FA) for login is best categorized as which type of control?",
    options: ["Preventive technical control", "Detective operational control", "Corrective managerial control", "Directive physical control"],
    answer: "Preventive technical control"
  },
  {
    question: "Placing a 'No Trespassing' sign outside a data center is an example of which control type?",
    options: ["Compensating", "Preventive", "Deterrent", "Corrective"],
    answer: "Deterrent"
  },
  {
    question: "Installing an intrusion detection system (IDS) falls under which category of control?",
    options: ["Detective technical control", "Preventive managerial control", "Corrective physical control", "Directive operational control"],
    answer: "Detective technical control"
  },
  {
    question: "Creating and enforcing a formal incident response plan is an example of which type of control?",
    options: ["Managerial", "Technical", "Physical", "Deterrent"],
    answer: "Managerial"
  },
  
  // Additional Questions - More Scenarios
  {
    question: "Backing up critical data regularly is what type of control?",
    options: ["Preventive", "Detective", "Corrective", "Compensating"],
    answer: "Corrective"
  },
  {
    question: "Installing bollards (security posts) around a building to prevent vehicle attacks is what type of control?",
    options: ["Preventive physical control", "Detective technical control", "Deterrent managerial control", "Corrective operational control"],
    answer: "Preventive physical control"
  },
  {
    question: "A SIEM (Security Information and Event Management) system that aggregates and analyzes logs is primarily what type of control?",
    options: ["Detective technical control", "Preventive technical control", "Corrective operational control", "Deterrent physical control"],
    answer: "Detective technical control"
  },
  {
    question: "Conducting regular vulnerability assessments is an example of which control type?",
    options: ["Detective operational control", "Preventive technical control", "Corrective managerial control", "Deterrent physical control"],
    answer: "Detective operational control"
  },
  {
    question: "Implementing access control lists (ACLs) on a router to block unauthorized traffic is what type of control?",
    options: ["Preventive technical control", "Detective operational control", "Corrective technical control", "Directive managerial control"],
    answer: "Preventive technical control"
  },
  
  // Advanced Scenarios
  {
    question: "A company cannot implement full disk encryption on legacy systems, so they isolate these systems on a separate network segment with additional monitoring. This is an example of what type of control?",
    options: ["Compensating control", "Corrective control", "Deterrent control", "Directive control"],
    answer: "Compensating control"
  },
  {
    question: "Security cameras with motion detection recording capabilities serve as which combination of controls?",
    options: ["Deterrent and detective", "Preventive and corrective", "Directive and compensating", "Detective and corrective"],
    answer: "Deterrent and detective"
  },
  {
    question: "An acceptable use policy (AUP) that employees must sign is what type of control?",
    options: ["Directive managerial control", "Preventive technical control", "Detective operational control", "Corrective physical control"],
    answer: "Directive managerial control"
  },
  {
    question: "Automatically disabling user accounts after 90 days of inactivity is what type of control?",
    options: ["Preventive technical control", "Detective operational control", "Corrective managerial control", "Deterrent physical control"],
    answer: "Preventive technical control"
  },
  {
    question: "A disaster recovery plan that outlines procedures to restore operations after a catastrophic event is what type of control?",
    options: ["Corrective managerial control", "Preventive technical control", "Detective operational control", "Compensating physical control"],
    answer: "Corrective managerial control"
  }
];

// Export for use in other modules
// module.exports = securityControlsQuiz;

// Or for browser environments:
// window.securityControlsQuiz = securityControlsQuiz;

console.log(securityControlsQuiz.length); 
// 24 qustions, zero index is quiz title info. 