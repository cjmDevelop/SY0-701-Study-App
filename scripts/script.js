const quizDataArrays = [

  //################## TEST [A] ##################################################################
  {
    question: "Which accumulate's public data from a target without access to it's internal networks?",
    options: ['Passive Reconnaissance', 'Vulnerability Scanning', 'Supply Chain Analysis', 'Regulatory Audit'],
    answer: 'Passive Reconnaissance',
  },
  {
    question: 'Assigning a disposition to unauthorized emails received from external third parties.',
    options: ['SPF', 'NAC', 'DMARC', 'DKIM'],
    answer: 'DMARC',
  },
  {
    question: 'Cyber-attacks that are driven by financial gain?',
    options: ['Organized Crime', 'Hacktivist', 'Nation State', 'Shadow I.T'],
    answer: 'Organized Crime',
  },
  {
    question: "Which represents the precise cause of a computer issue?",
    options: ['Root-Cause Analysis', 'E-Discovery', 'Risk Appetite', 'Data Subject'],
    answer: 'Root-Cause Analysis',
  },
  {
    question: 'What is considered the highest priority in IT networks for emergency services?',
    options: [
      'Integration Costs',
      'Patch Availability',
      'System Availability',
      'Power Usage',
    ],
    answer: 'System Availability',
  },
  {
    question: 'Configure compliance checks without the need for manual interaction is possible through..?',
    options: ['Maitenance Window', 'Attestaion and Acknowledgment', 'Automation', 'External Audit'],
    answer: 'Automation',
  },
  {
    question: 'Configuration of an operating system security policies can prevent actions like utilizing external usb drives?',
    options: [
      'False',
      'True',
    ],
    answer: 'True',
  },
  {
    question: 'Legally enforced quality control checking?',
    options: ['Regulated', 'Trade Secrets', 'Obfuscated', 'Data in use'],
    answer: 'Regulated',
  },
  {
    question: 'Authentication through affiliation from an approved organization.',
    options: [
      '802.1X',
      'Federation',
      'EAP',
      'SSO',
    ],
    answer: 'Federation',
  },
  {
    question: 'Maximum acceptable amount of time that a system or service can be down after an incident before causing unacceptable disruption to the business',
    options: ['MTBF - Mean Time Between Failures', 'MTTR - Mean Time to Repair', 'RTO - Recovery Time Objective', 'RPO - Recovery Point Objective'],
    answer: 'RTO - Recovery Time Objective',
  },
  {
    question: 'Which is a specific list of tasks documented as required to be completed associated with various internal systems and operations.',
    options: ['SLA - Service Level Agreement', 'SOW - Statement Of Work', 'MOA - Memorandum of Agreement', 'NDA - Non Disclosure Agreement'],
    answer: 'SOW - Statement Of Work',
  },
  {
    question: 'Which refers to the trust level associated to certain kinds of data?',
    options: ['Confidentiality', 'Availability', 'Integrity', 'Authentication'],
    answer: 'Integrity',
  },
  {
    question: 'Which of the three make up the CIA Triad?',
    options: ['Confidentiality Integrity Authentication', 'Confidentiality Integrity Availability'],
    answer: 'Confidentiality Integrity Authentication',
  },
  {
    question: 'Which could possibly describe a boot-loop caused by a synchronization issue?',
    options: ['Memory Injection', 'Race Condition', 'Malicious Update', 'Resource Consumption'],
    answer: 'Race Condition',
  },
  {
    question: 'Platform Diversity can help mitigate issues associated with monolithic system architectures?',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: 'Key-Escrow is the storing and management of digital keys by a third party?',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: 'Record encryption is used with databases to encrypt only certain columns of data?',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: 'In the event of a corrupted database, where is the next best source to retrieve the related database information?',
    options: ['Raid data files', 'Off-Site Backups', 'Journaling', 'Replication copies'],
    answer: 'Journaling',
  },
  {
    question: 'Which framework is considered the established way to manage security policies for mobile devices used in corporate enviorments?',
    options: ['Segmentation', 'Biometrics', 'COPE - Corporatley Owned Personally Enabled', 'MDM - Mobile Device Manager'],
    answer: 'MDM - Mobile Device Manager',
  },
  {
    question: 'Which defines a result that fails to detect an issue when one actually exists?',
    options: ['False Positive', 'False Negative'],
    answer: 'False Negative',
  },
  {
    question: 'Does 802.1x implement an authentication server ?',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: 'Which is considered an encryption protocol ? ',
    options: ['PSK - Pre Shared Key', 'WPA3 - WiFi Protected Access 3'],
    answer: 'WPA3 - WiFi Protected Access 3',
  },
  {
    question: 'An Access Control that combines several diffrent parameters to verify authorization of a user...',
    options: ['Role-Based', 'Attribute-Based', 'Mandatory', 'Discretionary'],
    answer: 'Attribute-Based',
  },
  {
    question: 'Smishing is also known as (Short Message Service Phishing)?',
    options: ['False', 'True'],
    answer: 'True',
  },
  {
    question: 'DNS Poisoning is a way that hackers can direct client computers to any destination IP address?',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: 'A Hybrid Cloud model can sometimes contain Network Protection mismatches? ',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: 'Captured information reused to commit cyber attacks..',
    options: ['SQL Injection', 'Replay Attack'],
    answer: 'Replay Attack',
  },
  {
    question: "Jailbreaking circumvents firmware on a device to gain access to features not normally available in an operating system ?",
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: "Which is considered a disaster recovery exercise?",
    options: ['Business Impact Analysis', 'Capacity Planning', 'Tabletop Excercise', 'Continuity of Operations'],
    answer: 'Tabletop Excercise',
  },
  {
    question: "Data-Masking hides data by substitution, shuffling, encryption, and other methods?",
    options: ['False', 'True'],
    answer: 'True',
  },

  {
    question: "What does SCADA stand for in the context of industrial control systems?",
    options: ['Supervisory Control and Data Analysis', 'System Control and Data Acquisition', 'Supervisory Control and Data Acquisition', 'System Communication and Digital Automation'],
    answer: 'Supervisory Control and Data Acquisition',
  },

  {
    question: "Spraying is similar to a brute force attack, but spraying limits the number of sign-in attempts?",
    options: ['False', 'True'],
    answer: 'True',
  },

  {
    question: "Which is most related to a Downgrade attack?",
    options: ['hacking passwords', 'hacking encyption'],
    answer: 'hacking encyption',
  },

  {
    question: "Blockchain technology provides ledger capabilities?",
    options: ['True', 'False'],
    answer: 'True',
  },

  {
    question: "A Responsibility-Matrix is related to...",
    options: ['Cloud services', 'Local services'],
    answer: 'Cloud services',
  },

  {
    question: "A Buffer-Overflow consist of an attackker sending larger then expected payloads of data in an API call for malicious purposes?",
    options: ['False', 'True'],
    answer: 'True',
  },

  {
    question: "An On-Path attack is dectable by a host-based firewall?",
    options: ['False', 'True'],
    answer: 'False',
  },

  {
    question: "Which is a NGFW service designed to optimize secure remote communications to cloud-based services?",
    options: ['RTOS - Real Time Operating Sysytem', 'SASE - Secure Access Service Edge', 'CRL - Certificate Revocation List', 'Zero-Trust'],
    answer: 'SASE - Secure Access Service Edge',
  },

  {
    question: "A Security Awareness Campaign often contains end-user reports?",
    options: ['True', 'False'],
    answer: 'True',
  },

  {
    question: "An IAC (Infastructure as Code) file defines system architecture in cloud-based systems?",
    options: ['False', 'True'],
    answer: 'True',
  },

  {
    question: "Change-Management is a process that deals with mitigating security issues caused by application changes and upgrades?",
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: "Which security measure deals with adding randomization to data?",
    options: ['Salting', 'Key Stretching', 'Digital Signature', 'Obfuscation'],
    answer: 'Salting',
  },
  {
    question: "Which is the act of hiding data into another data file, for example hiding a .txt file into a .jpg file?",
    options: ['Hashing', 'Steganography'],
    answer: 'Steganography',
  },
  {
    question: "Which technique is associated with encrypting data rather than creating a fixed data representation?  ",
    options: ['Symmetric Encryption', 'Hashing'],
    answer: ''
  },
  {
    question: "Within an entire system, which refers to the standardization of vulnerability management accross all security controls ranging from physical to logical?",
    options: ['SCAP - Security Content Automation Protocol', 'SCAP - Security Control Automation Protocol'],
    answer: 'SCAP - Security Content Automation Protocol',
  },
  {
    question: "Which is responsible for the managment of access rights to a database?",
    options: ['Data-Custodian', 'Data-Processor', 'Data-Subject'],
    answer: 'Data-Custodian',
  },
  {
    question: "Classifying data as private can be considered an act of Expanded Privacy Compliance?",
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: "What does HSM stand for?",
    options: ['Hashing Security Module', 'Hardware Security Measure'],
    answer: 'Hardware Security Measure',
  },
  {
    question: "What does ALE stand for?",
    options: ['Annual Lease Expectancy', 'Annual Loss Expectancy'],
    answer: 'Annual Loss Expectancy',
  },
  {
    question: "What does RTO stand for?",
    options: ['Repair Time Objective', 'Recovery Time Objective'],
    answer: 'Recovery Time Objective',
  },
  {
    question: "What does ARO stand for?",
    options: ['Annualized Rate of Occupation', 'Annualized Rate of Occurrence'],
    answer: 'Annualized Rate of Occurrence',
  },
  {
    question: "What does SLE stand for?",
    options: ['Single Lease Expectancy', 'Single Loss Expectancy'],
    answer: 'Annual Loss Expectancy',
  },
  {
    question: "Which is true?",
    options: ['SSL Stripping modifies web addresses to disallow access to encrypted data', 'SSL Stripping modifies web addresses to allow access to encrypted data'],
    answer: 'SSL Stripping modifies web addresses to allow access to encrypted data',
  },

  {
    question: "Malware that sits dormant until a particular action occurs is called a Logic-Bomb?",
    options: ['True', 'False'],
    answer: 'True',
  },

  {
    question: "A Key-Logger attack can sometimes interrupt network traffic?",
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    question: "Which is true?",
    options: ['IPsec (Internet Protocol Security) is a protocol suite for authenticating and encrypting network communication.', 'IPsec (Internet Protocol Security) is a protocol suite for confirming a network connection.'],
    answer: 'IPsec (Internet Protocol Security) is a protocol suite for authenticating and encrypting network communication.',
  },
  {
    question: "Which is true?",
    options: ['SPF stands for Security Policy framework', 'SPF stands for Sender Policy Framework'],
    answer: 'SPF stands for Sender Policy Framework',
  },
  {
    question: "Which is true?",
    options: ['DMARC stands for Domain-based Message Authentication, Reporting and Conformance', 'DMARC stands for Domain-based Message Authentication, Record keeping and Compliance'],
    answer: 'DMARC stands for Domain-based Message Authentication, Reporting and Conformance',
  },
  {
    question: "DKIM (Domain Keys Identified Mail) publishes digital signature keys for all outgoing mail ?",
    options: ['False', 'True'],
    answer: 'True',
  },
  {
    question: "Which is true?",
    options: ['RTOS - stands for Real Time Operating System.', 'RTOS - stands for Real Time Objective Service.'],
    answer: 'RTOS, stands for Real Time Operating System.',
  },
  {
    question: "Which is true?",
    options: ["Penetration Test are meant to expose and exploit vulnerabilities in a system, and should operate within a testing enviorment.", "Penetration Test are meant to expose and exploit vulnerabilities in a system, and should operate within a production enviorment."],
    answer: "Penetration Test are meant to expose and exploit vulnerabilities in a system, and should operate within a testing enviorment.",
  },

  // //################## TEST [B] ##################################################################
  {
    question: "Which is true?",
    options: ["CRL (Certificate Registry list) - A list of invalidated certificates.", "CRL (Certificate Revocation liST) - A list of invalidated certificates."],
    answer: "CRL (Certificate Revocation liST) - A list of invalidated certificates.",
  },
  {
    question: "CA (Certificate Authority) - Deploy and manage certificates.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which is true?",
    options: ["CSR (Certificate Source Registry) - The browser checks for a revoked certificate.", "CSR (Certificate Signing Request) - Send the public key to be signed."],
    answer: "CSR (Certificate Signing Request) - Send the public key to be signed.",
  },
  {
    question: "MDM (Mobile Device Manager), full disk encryptrion and biometric authentication helps protect mobile devices? ",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which is the correct order of operations?",
    options: ["Detection, Containment, Analysis, Lessons Learned, Preperation, Recovery, Eradication", "Preperation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned"],
    answer: "Preperation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned",
  },
  {
    question: "SPF stands for Sender Policy Framework and specializes in email server authentication.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "An 802.1Q trunk is a type of network link that carries traffic for multiple VLANs.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Many applications and services provide Server-Hardening configuration guides.",
    options: ["False", "True"],
    answer: "True",
  },
  {
    question: "Which Security Control is associated with an IPS (Intrusion Prevention System)?",
    options: ["Compensating", "Directive", "Deterrent", "Detective"],
    answer: "Detective",
  },
  {
    question: "Which is more commonly associated with malicious intent?",
    options: ["Passive Reconnaisance", "OSINT (Open Source Intelligence)"],
    answer: "Passive Reconnaisance",
  },
  {
    question: "A 'Partially Known Enviorment' describes how well an attacker knows a test?",
    options: ["False", "True"],
    answer: "True",
  },
  {
    question: "Exfiltration does not mean theft of data?",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "Typosquatting uses a mispelling of a domain name in order to lure users to a malicious website.",
    options: ["False", "True"],
    answer: "True",
  },
  {
    question: "A VM 'escape' is a vulnerability that allows communication between VM instances.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "SDN stands for Software Defined Networking.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "An 'Amplified DDoS attack' increase's the volume of traffic to a target by exploiting services that generate large responses.",
    options: ["False", "True"],
    answer: "True",
  },

  {
    question: "Accounting is a network security term which contains information like: user sessions, login times, file transfers and logout times.",
    options: ["True", "False"],
    answer: "True",
  },

  {
    question: "Which is correct?",
    options: ["PCI-DSS: Payment Card Industry Data Security Standard", "PCI-DSS: Protocol Control Industry Data Security Standard"],
    answer: "PCI-DSS: Payment Card Industry Data Security Standard",
  },
  {
    question: "Can a firewall operate alongside a VPN concentrator?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which is Correct?",
    options: [
      "When Authenticating to a VPN Concentrator/Firewall, the VPN Concentrator itself does not contain any user login information due to that data being placed on a central-server, which is also known as an AAA-Server?",
      "When Authenticating to a VPN Concentrator/Firewall, the VPN Concentrator contain's user credential data, which is verified by data held on a 'Central Server', which is finally verified by a AAA-Server?"],
    answer:
      "When Authenticating to a VPN Concentrator/Firewall, the VPN Concentrator itself does not contain any user login information due to that data being placed on a central-server, which is also known as an AAA-Server?",
  },
  {
    question: "A Central-Server is also known as a AAA-Server?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "which is correct?",
    options: ["AAA-Server: Authentication, Authorization, Accounting; manages user access and tracks user activity.",
      "AAA-Server: Authentication, Authorization, Attestation; manages user access and tracks user activity."],
    answer: "AAA-Server: Authentication, Authorization, Accounting; manages user access and tracks user activity.",
  },
  , {
    question: "Benchmarks is a term in network security which defines a set of best practices to apply to a service?",
    options: ["True", "False"],
    answer: "True",
  }, {
    question: "Personal mobile devices allowed to operate in a security controlled network poses a primary risk for intellectual property theft.",
    options: ["False", "True"],
    answer: "True",
  }, {
    question: "A Cold-Site is commonly used for disaster recovery",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which is correct?",
    options: ["(RBAC) Role-Based Authentication Control - Manages rights and permissions to a server?"],
    answer: "(RBAC) Role-Based Access Control - Manages rights and permissions in a operating system?",
  },
  {
    question: "What is the primary function of Software Defined Networking (SDN)?",
    options: ["It integrates the control and data planes, making network devices more autonomous and self-configuring.", " It decouples the network's control plane from the data plane, allowing centralized management and more dynamic network configurations."],
    answer: "It decouples the network's control plane from the data plane, allowing centralized management and more dynamic network configurations.",
  },
  {
    question: "What does MSP stand for?",
    options: ["Managed Service Provider", "Managed Security Provider"],
    answer: "Managed Service Provider",
  }, {
    question: "What is a MSP?",
    options: ["A MSP is a third-party company that remotely manages a customer's IT infrastructure, and/or end-user systems."],
    answer: "A MSP is a local department that internally manages an IT infrastructure, and/or end-user systems.",
  },
  {
    question: "Is a Jump-Server related to network security?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "A Jump-Server is a highly secured device used to access secure areas of another network.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "A HSM (Hardware Security Module) contains backups of cryptographic keys.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "NAC (Network Access Control) will deny access to devices that do not meet minimum security requirments.",
    options: ["False", "True"],
    answer: "True",
  },
  {
    question: "Business Impact Analysis deals with time sensitive system issues?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which is correct?",
    options: ["SIEM (Security Information and Event Management)", "SIEM (Service Identification and Event Management)"],
    answer: "SIEM (Security Information and Event Management)",
  },
  {
    question: "Which is correct?",
    options: ["The Offboarding-Process describes the polocies and procedures associated with someone leaving an organization.", "The Offboarding-Process describes the Load-Balacing events during times of high user activity."],
    answer: "The Offboarding-Process describes the polocies and procedures associated with someone leaving an organization.",
  },
  {
    question: "Due-Care commonly refers to internal activities?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Risk Acceptance is a business decision that places the responsibility of security risks on the organization itself.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "Which is correct?",
    options: ["Transference is when organizations may purchase insurance for network security risks.", "Risk-Avoidance is when organizations may purchase insurance for network security risks."],
    answer: "Transference is when organizations may purchase insurance for network security risks.",
  },
  {
    question: "Risk-Avoidance is when an organization may completely disconnect from the internet and disable all possible exposures to cyber-attacks.",
    options: ["False", "True"],
    answer: "True",
  },
  {
    question: "Which is correct",
    options: ["Side Loading - Installing apps manually by circumventing a managed app store.", "Side Loading - Automating the instillation process for app updates."],
    answer: "Side Loading - Installing apps manually by circumventing a managed app store.",
  },
  {
    question: "Which is correct?",
    options: [
      "Cross-site scripting (xss) are scripts meant to protect clients and servers during web application usage.",

      "Cross-site scripting (XSS) is a security vulnerability in web applications that allows attackers to inject"
      + "malicious scripts exploiting web-application vulnerabilities and manipulating the trust a browser has to the"
      + "web-application, this attack can result in stolen: cookies & session-tokens."
    ],
    answer:
      "Cross-site scripting (XSS) is a security vulnerability in web applications that allows attackers to inject"
      + "malicious scripts exploiting web-application vulnerabilities and manipulating the trust a browser has to the"
      + "web-application, this attack can result in stolen: cookies, session-tokens, etc."
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
  {
    question: "",
    options: [""],
    answer: "",
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizDataArrays[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizDataArrays[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizDataArrays[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizDataArrays[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizDataArrays.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'div';
  submitButton.style.display = 'div';
  retryButton.style.display = 'div';
  showAnswerButton.style.display = 'div';
  resultContainer.innerHTML = `You scored ${score} out of ${quizDataArrays.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
  }

  resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizDataArrays.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

//-------------------------------------------------------------------------


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}