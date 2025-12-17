export const governanceAndRiskManagementQuiz = [
  {
    quiz_ID: "5.1-5.2",
    quiz_name: "Security Governance & Risk Management"
  },

  // 5.1 - Elements of Effective Security Governance

  // Guidelines, Policies, Standards, Procedures
  {
    question: "What is the relationship between policies, standards, procedures, and guidelines?",
    options: [
      "Policies are high-level; standards are specific requirements; procedures are step-by-step; guidelines are recommendations",
      "They are all exactly the same",
      "Guidelines are mandatory; policies are optional",
      "Procedures override policies"
    ],
    answer: "Policies are high-level; standards are specific requirements; procedures are step-by-step; guidelines are recommendations"
  },
  {
    question: "A security policy typically:",
    options: [
      "Defines high-level security objectives and management intent",
      "Provides detailed technical configuration steps",
      "Lists every possible security tool",
      "Contains only recommendations"
    ],
    answer: "Defines high-level security objectives and management intent"
  },
  {
    question: "Standards in security governance:",
    options: [
      "Specify mandatory requirements and technical specifications",
      "Are completely optional suggestions",
      "Only apply to network devices",
      "Cannot be enforced"
    ],
    answer: "Specify mandatory requirements and technical specifications"
  },
  {
    question: "Procedures provide:",
    options: [
      "Step-by-step instructions for completing specific tasks",
      "High-level strategic direction",
      "Optional recommendations",
      "Legal requirements only"
    ],
    answer: "Step-by-step instructions for completing specific tasks"
  },
  {
    question: "Guidelines differ from policies because they are:",
    options: [
      "Recommended best practices but not strictly mandatory",
      "More strict than policies",
      "Legal requirements",
      "Never followed"
    ],
    answer: "Recommended best practices but not strictly mandatory"
  },

  // External Considerations - Regulatory, Legal, Industry, Local/regional, National, Global
  {
    question: "Regulatory compliance requires organizations to:",
    options: [
      "Follow specific security requirements mandated by law or regulation",
      "Ignore all external requirements",
      "Only follow internal policies",
      "Avoid all regulations"
    ],
    answer: "Follow specific security requirements mandated by law or regulation"
  },
  {
    question: "Legal considerations in security governance include:",
    options: [
      "Data protection laws, breach notification requirements, and liability",
      "Only employee hiring decisions",
      "Office decoration choices",
      "Marketing strategies"
    ],
    answer: "Data protection laws, breach notification requirements, and liability"
  },
  {
    question: "Industry-specific regulations (like HIPAA for healthcare or PCI DSS for payment cards):",
    options: [
      "Apply specific security requirements based on the type of data or industry",
      "Apply to all organizations equally",
      "Have no security requirements",
      "Are completely optional"
    ],
    answer: "Apply specific security requirements based on the type of data or industry"
  },
  {
    question: "Local and regional data protection laws may require:",
    options: [
      "Data to be stored within specific geographic boundaries",
      "All data to be public",
      "No data protection",
      "Unlimited data sharing"
    ],
    answer: "Data to be stored within specific geographic boundaries"
  },
  {
    question: "National security considerations may impact:",
    options: [
      "Encryption requirements and data sovereignty rules",
      "Only social media policies",
      "Office hours",
      "Lunch menus"
    ],
    answer: "Encryption requirements and data sovereignty rules"
  },
  {
    question: "Global organizations must navigate:",
    options: [
      "Conflicting requirements from different countries and regions",
      "Only one set of regulations",
      "No regulations at all",
      "Identical laws everywhere"
    ],
    answer: "Conflicting requirements from different countries and regions"
  },

  // Monitoring and Revision, Types of Governance Structures
  {
    question: "Security policies should be reviewed and updated:",
    options: [
      "Regularly and when significant changes occur in the threat landscape or business",
      "Never, they're permanent",
      "Only during audits",
      "Once per decade"
    ],
    answer: "Regularly and when significant changes occur in the threat landscape or business"
  },
  {
    question: "Centralized governance provides:",
    options: [
      "Consistent decision-making and policy enforcement from a central authority",
      "No oversight",
      "Complete autonomy for all departments",
      "Conflicting policies"
    ],
    answer: "Consistent decision-making and policy enforcement from a central authority"
  },
  {
    question: "Decentralized governance allows:",
    options: [
      "Individual business units to make security decisions within overall framework",
      "No security policies at all",
      "Only one person to decide everything",
      "Complete chaos"
    ],
    answer: "Individual business units to make security decisions within overall framework"
  },

  // Roles and Responsibilities
  {
    question: "The Board of Directors' role in security governance includes:",
    options: [
      "Providing oversight and ensuring adequate resources for security",
      "Configuring firewalls",
      "Writing code",
      "Installing patches"
    ],
    answer: "Providing oversight and ensuring adequate resources for security"
  },
  {
    question: "What is the primary responsibility of a Chief Information Security Officer (CISO)?",
    options: [
      "Leading the organization's security strategy and program",
      "Only responding to incidents",
      "Managing payroll",
      "Designing marketing campaigns"
    ],
    answer: "Leading the organization's security strategy and program"
  },
  {
    question: "Data owners are responsible for:",
    options: [
      "Classifying data and determining who should have access",
      "Only storing backups",
      "Physical security of buildings",
      "Network cable installation"
    ],
    answer: "Classifying data and determining who should have access"
  },
  {
    question: "Data controllers (under GDPR) are responsible for:",
    options: [
      "Determining the purposes and means of processing personal data",
      "Only technical implementation",
      "Marketing decisions",
      "Product pricing"
    ],
    answer: "Determining the purposes and means of processing personal data"
  },
  {
    question: "Data processors (under GDPR) are:",
    options: [
      "Entities that process personal data on behalf of the controller",
      "Identical to data owners",
      "Not subject to any regulations",
      "Only government agencies"
    ],
    answer: "Entities that process personal data on behalf of the controller"
  },
  {
    question: "Data custodians are responsible for:",
    options: [
      "Implementing and maintaining technical controls to protect data",
      "Only classifying data",
      "Making business decisions about data use",
      "Marketing the data"
    ],
    answer: "Implementing and maintaining technical controls to protect data"
  },
  {
    question: "Data protection officers (DPOs) are required by:",
    options: [
      "GDPR for certain organizations processing personal data",
      "All organizations globally",
      "No regulations",
      "Only financial institutions"
    ],
    answer: "GDPR for certain organizations processing personal data"
  },

  // 5.2 - Risk Management Process

  // Risk Identification
  {
    question: "Risk identification involves:",
    options: [
      "Discovering and documenting potential threats and vulnerabilities",
      "Ignoring all risks",
      "Only looking at past incidents",
      "Deleting security logs"
    ],
    answer: "Discovering and documenting potential threats and vulnerabilities"
  },
  {
    question: "Common risk identification techniques include:",
    options: [
      "Threat modeling, vulnerability assessments, and reviewing incident history",
      "Random guessing",
      "Ignoring security",
      "Copying competitors"
    ],
    answer: "Threat modeling, vulnerability assessments, and reviewing incident history"
  },

  // Risk Assessment
  {
    question: "Risk assessment evaluates:",
    options: [
      "The likelihood and impact of identified risks",
      "Only financial costs",
      "Employee satisfaction",
      "Office layout"
    ],
    answer: "The likelihood and impact of identified risks"
  },
  {
    question: "Qualitative risk assessment uses:",
    options: [
      "Descriptive scales like high/medium/low rather than numerical values",
      "Only exact numbers",
      "Complex mathematical formulas only",
      "No evaluation criteria"
    ],
    answer: "Descriptive scales like high/medium/low rather than numerical values"
  },
  {
    question: "Quantitative risk assessment involves:",
    options: [
      "Assigning numerical values to calculate potential financial impact",
      "Only subjective opinions",
      "No numbers whatsoever",
      "Random estimates"
    ],
    answer: "Assigning numerical values to calculate potential financial impact"
  },
  {
    question: "What does ALE stand for in risk assessment?",
    options: [
      "Annual Loss Expectancy",
      "Average Level Encryption",
      "Automated Log Evaluation",
      "Access Level Enforcement"
    ],
    answer: "Annual Loss Expectancy"
  },
  {
    question: "Single Loss Expectancy (SLE) represents:",
    options: [
      "The expected monetary loss from a single occurrence of a risk",
      "Total annual losses",
      "Insurance premiums",
      "Employee salaries"
    ],
    answer: "The expected monetary loss from a single occurrence of a risk"
  },
  {
    question: "Annual Rate of Occurrence (ARO) estimates:",
    options: [
      "How many times a risk is expected to occur per year",
      "Employee turnover rate",
      "Server uptime percentage",
      "Budget increases"
    ],
    answer: "How many times a risk is expected to occur per year"
  },
  {
    question: "The formula for ALE is:",
    options: [
      "SLE × ARO",
      "SLE + ARO",
      "SLE - ARO",
      "SLE ÷ ARO"
    ],
    answer: "SLE × ARO"
  },

  // Risk Analysis
  {
    question: "Risk analysis helps organizations:",
    options: [
      "Understand and prioritize risks based on their potential impact",
      "Ignore all risks",
      "Accept every risk",
      "Transfer all responsibilities"
    ],
    answer: "Understand and prioritize risks based on their potential impact"
  },
  {
    question: "Inherent risk is:",
    options: [
      "The level of risk before any controls are applied",
      "Risk after all controls",
      "Eliminated risk",
      "Transferred risk"
    ],
    answer: "The level of risk before any controls are applied"
  },
  {
    question: "Residual risk is:",
    options: [
      "The risk remaining after controls have been implemented",
      "Risk before any controls",
      "Zero risk",
      "Maximum possible risk"
    ],
    answer: "The risk remaining after controls have been implemented"
  },
  {
    question: "Risk appetite refers to:",
    options: [
      "The amount of risk an organization is willing to accept",
      "The maximum possible risk",
      "Zero tolerance for any risk",
      "Ignoring all risks"
    ],
    answer: "The amount of risk an organization is willing to accept"
  },
  {
    question: "Risk tolerance describes:",
    options: [
      "The acceptable level of variation from the risk appetite",
      "Refusing all security measures",
      "Accepting unlimited risk",
      "Having no risk policies"
    ],
    answer: "The acceptable level of variation from the risk appetite"
  },

  // Risk Response and Treatment
  {
    question: "The four main risk response strategies are:",
    options: [
      "Accept, Avoid, Mitigate, Transfer",
      "Ignore, Delete, Hide, Deny",
      "Attack, Defend, Retreat, Surrender",
      "Buy, Sell, Trade, Keep"
    ],
    answer: "Accept, Avoid, Mitigate, Transfer"
  },
  {
    question: "Risk acceptance means:",
    options: [
      "Acknowledging the risk and choosing to proceed without additional controls",
      "Ignoring the risk completely",
      "Eliminating the risk",
      "Blaming others for the risk"
    ],
    answer: "Acknowledging the risk and choosing to proceed without additional controls"
  },
  {
    question: "Risk avoidance involves:",
    options: [
      "Eliminating the risk by not engaging in the risky activity",
      "Accepting all risks",
      "Transferring risk to others",
      "Ignoring the risk"
    ],
    answer: "Eliminating the risk by not engaging in the risky activity"
  },
  {
    question: "Risk mitigation means:",
    options: [
      "Implementing controls to reduce the likelihood or impact of the risk",
      "Doing nothing about the risk",
      "Increasing the risk",
      "Deleting risk assessments"
    ],
    answer: "Implementing controls to reduce the likelihood or impact of the risk"
  },
  {
    question: "Risk transference involves:",
    options: [
      "Shifting the risk to a third party, such as through insurance",
      "Accepting all risks internally",
      "Eliminating the risk completely",
      "Ignoring the risk"
    ],
    answer: "Shifting the risk to a third party, such as through insurance"
  },
  {
    question: "Purchasing cyber insurance is an example of:",
    options: [
      "Risk transference",
      "Risk avoidance",
      "Risk acceptance",
      "Risk mitigation only"
    ],
    answer: "Risk transference"
  },

  // Risk Priorities
  {
    question: "Risk prioritization should consider:",
    options: [
      "Impact, likelihood, cost of mitigation, and business priorities",
      "Only the age of the risk",
      "Random selection",
      "Alphabetical order"
    ],
    answer: "Impact, likelihood, cost of mitigation, and business priorities"
  },
  {
    question: "High-impact, high-likelihood risks should generally be:",
    options: [
      "Addressed first as highest priority",
      "Ignored completely",
      "Addressed last",
      "Deleted from risk register"
    ],
    answer: "Addressed first as highest priority"
  },

  // Business Impact Analysis (BIA)
  {
    question: "A Business Impact Analysis (BIA) identifies:",
    options: [
      "Critical business functions and the impact of their disruption",
      "Only IT systems",
      "Employee skills",
      "Marketing effectiveness"
    ],
    answer: "Critical business functions and the impact of their disruption"
  },
  {
    question: "Recovery Time Objective (RTO) defines:",
    options: [
      "The maximum acceptable time to restore a function after disruption",
      "The time to create backups",
      "Employee work hours",
      "System installation time"
    ],
    answer: "The maximum acceptable time to restore a function after disruption"
  },
  {
    question: "Recovery Point Objective (RPO) defines:",
    options: [
      "The maximum acceptable amount of data loss measured in time",
      "The time to restore systems",
      "Backup storage capacity",
      "Network bandwidth"
    ],
    answer: "The maximum acceptable amount of data loss measured in time"
  },
  {
    question: "If a system has an RPO of 1 hour, the organization can tolerate losing:",
    options: [
      "Up to 1 hour of data",
      "No data at all",
      "All data",
      "1 week of data"
    ],
    answer: "Up to 1 hour of data"
  },
  {
    question: "Mean Time to Repair (MTTR) measures:",
    options: [
      "The average time required to repair a failed component",
      "The time between failures",
      "Total system uptime",
      "Backup duration"
    ],
    answer: "The average time required to repair a failed component"
  },
  {
    question: "Mean Time Between Failures (MTBF) indicates:",
    options: [
      "The average time between system or component failures",
      "The time to fix failures",
      "How often backups run",
      "Employee productivity"
    ],
    answer: "The average time between system or component failures"
  }
]
