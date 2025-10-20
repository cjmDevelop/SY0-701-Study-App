export const cryptographicQuiz = [
    {
    quiz_ID: 1.4,
    quiz_name: "Cryptographic Solutions"
  },
  // --- PKI ---
  {
    question: "In a PKI system, which key is distributed publicly and used to encrypt messages or verify digital signatures?",
    options: ["Public key", "Private key", "Session key", "Root key"],
    answer: "Public key"
  },
  {
    question: "Which key in PKI must be kept secret and is used to decrypt messages or create digital signatures?",
    options: ["Private key", "Public key", "Symmetric key", "Master key"],
    answer: "Private key"
  },
  {
    question: "Which PKI concept involves a trusted third party holding copies of encryption keys for authorized recovery purposes?",
    options: ["Key escrow", "Key exchange", "Key stretching", "Key rotation"],
    answer: "Key escrow"
  },
  {
    question: "What is the relationship between a public key and its corresponding private key in PKI?",
    options: [
      "They are mathematically related pairs where one encrypts and the other decrypts",
      "They are identical keys stored in different locations",
      "They are randomly generated with no relationship",
      "They are both publicly shared"
    ],
    answer: "They are mathematically related pairs where one encrypts and the other decrypts"
  },

  // --- Encryption Levels ---
  {
    question: "Which encryption level protects an entire storage device, including the operating system and all data?",
    options: ["Full-disk encryption", "File encryption", "Partition encryption", "Volume encryption"],
    answer: "Full-disk encryption"
  },
  {
    question: "Which encryption level protects only a specific logical section of a hard drive?",
    options: ["Partition encryption", "Full-disk encryption", "File encryption", "Transport encryption"],
    answer: "Partition encryption"
  },
  {
    question: "Which encryption level applies protection to individual files or documents?",
    options: ["File encryption", "Partition encryption", "Volume encryption", "Database encryption"],
    answer: "File encryption"
  },
  {
    question: "Which encryption level protects a logical grouping of storage that may span multiple disks?",
    options: ["Volume encryption", "Partition encryption", "File encryption", "Record encryption"],
    answer: "Volume encryption"
  },
  {
    question: "Which encryption level protects an entire database and all its contents?",
    options: ["Database encryption", "Record encryption", "File encryption", "Volume encryption"],
    answer: "Database encryption"
  },
  {
    question: "Encrypting only specific sensitive fields within database records, such as Social Security Numbers or credit card numbers, is an example of:",
    options: ["Record-level encryption", "File encryption", "Partition encryption", "Transport encryption"],
    answer: "Record-level encryption"
  },
  {
    question: "Which encryption type secures data as it travels across networks between systems?",
    options: ["Transport encryption", "File encryption", "Full-disk encryption", "Partition encryption"],
    answer: "Transport encryption"
  },

  // --- Encryption Types ---
  {
    question: "Which encryption method uses two mathematically related keys: one public and one private?",
    options: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Obfuscation"],
    answer: "Asymmetric encryption"
  },
  {
    question: "Which encryption method uses the same secret key for both encryption and decryption?",
    options: ["Symmetric encryption", "Asymmetric encryption", "Tokenization", "Hashing"],
    answer: "Symmetric encryption"
  },
  {
    question: "Which cryptographic process allows two parties to securely establish a shared secret key over an insecure channel?",
    options: ["Key exchange", "Key escrow", "Key stretching", "Digital signature"],
    answer: "Key exchange"
  },
  {
    question: "Which factor most directly affects the computational difficulty of breaking an encryption algorithm?",
    options: ["Key length", "File type", "Transport protocol", "Hash value"],
    answer: "Key length"
  },
  {
    question: "Which encryption algorithm is a widely-used example of symmetric encryption?",
    options: ["AES (Advanced Encryption Standard)", "RSA", "ECC", "Diffie-Hellman"],
    answer: "AES (Advanced Encryption Standard)"
  },
  {
    question: "Which encryption algorithm is a widely-used example of asymmetric encryption?",
    options: ["RSA", "AES", "3DES", "Blowfish"],
    answer: "RSA"
  },

  // --- Tools ---
  {
    question: "Which hardware security component is integrated into computer motherboards to provide secure cryptographic operations and key storage?",
    options: ["Trusted Platform Module (TPM)", "Secure enclave", "HSM", "Key escrow"],
    answer: "Trusted Platform Module (TPM)"
  },
  {
    question: "Which dedicated hardware device is designed for enterprise-scale key management and cryptographic operations in a tamper-resistant environment?",
    options: ["Hardware Security Module (HSM)", "TPM", "Secure enclave", "Blockchain"],
    answer: "Hardware Security Module (HSM)"
  },
  {
    question: "Which processor-based security feature creates an isolated execution environment for sensitive operations?",
    options: ["Secure enclave", "Key management system", "TPM", "Obfuscation"],
    answer: "Secure enclave"
  },
  {
    question: "Which centralized system is responsible for generating, distributing, storing, rotating, and revoking cryptographic keys across an organization?",
    options: ["Key management system", "TPM", "HSM", "CSR"],
    answer: "Key management system"
  },

  // --- Obfuscation ---
  {
    question: "Which obfuscation technique hides secret messages or data within other non-secret files, such as images or audio?",
    options: ["Steganography", "Tokenization", "Data masking", "Hashing"],
    answer: "Steganography"
  },
  {
    question: "Which obfuscation method replaces sensitive data with non-sensitive substitutes that can be mapped back to the original values?",
    options: ["Tokenization", "Hashing", "Steganography", "Salting"],
    answer: "Tokenization"
  },
  {
    question: "Which obfuscation technique obscures sensitive data by replacing it with fictitious but realistic-looking values?",
    options: ["Data masking", "Steganography", "Key stretching", "Hashing"],
    answer: "Data masking"
  },

  // --- Hashing, Salting, Digital Signatures, Key Stretching ---
  {
    question: "Which cryptographic process converts data into a fixed-length, irreversible output used for integrity verification?",
    options: ["Hashing", "Encryption", "Tokenization", "Obfuscation"],
    answer: "Hashing"
  },
  {
    question: "Which technique adds random data to passwords before hashing to prevent rainbow table attacks?",
    options: ["Salting", "Key exchange", "Digital signature", "Obfuscation"],
    answer: "Salting"
  },
  {
    question: "Which cryptographic mechanism ensures message integrity, authenticity, and non-repudiation by using the sender's private key?",
    options: ["Digital signatures", "Hashing", "Obfuscation", "Tokenization"],
    answer: "Digital signatures"
  },
  {
    question: "Which technique increases the computational work required to derive keys from passwords, making brute-force attacks more difficult?",
    options: ["Key stretching", "Salting", "Tokenization", "Data masking"],
    answer: "Key stretching"
  },
  {
    question: "Which hash algorithm is currently considered secure and widely recommended for modern applications?",
    options: ["SHA-256", "MD5", "SHA-1", "CRC32"],
    answer: "SHA-256"
  },

  // --- Blockchain & Ledger ---
  {
    question: "Blockchain technology is built upon which type of distributed record-keeping system?",
    options: ["Open public ledger", "Key escrow", "Hash table", "Digital signature"],
    answer: "Open public ledger"
  },
  {
    question: "Which distributed ledger technology underpins cryptocurrencies like Bitcoin and provides tamper-resistant transaction records?",
    options: ["Blockchain", "Steganography", "Secure enclave", "TPM"],
    answer: "Blockchain"
  },
  {
    question: "What cryptographic technique links blocks together in a blockchain to ensure data integrity?",
    options: [
      "Each block contains a hash of the previous block",
      "Each block is encrypted with the next block's key",
      "Blocks use symmetric encryption",
      "Blocks are tokenized"
    ],
    answer: "Each block contains a hash of the previous block"
  },

  // --- Certificate Authorities ---
  {
    question: "Which trusted entity issues, manages, and revokes digital certificates in a PKI system?",
    options: ["Certificate Authority (CA)", "Root user", "CSR", "Secure enclave"],
    answer: "Certificate Authority (CA)"
  },
  {
    question: "What is the primary function of a Certificate Authority?",
    options: [
      "To verify identities and bind public keys to entities through digital certificates",
      "To store all private keys centrally",
      "To encrypt all network traffic",
      "To generate passwords for users"
    ],
    answer: "To verify identities and bind public keys to entities through digital certificates"
  },
  {
    question: "What happens if a Certificate Authority is compromised by attackers?",
    options: [
      "All certificates issued by that CA become untrustworthy",
      "Only future certificates are affected",
      "Private keys are automatically rotated",
      "No security impact occurs"
    ],
    answer: "All certificates issued by that CA become untrustworthy"
  },

  // --- Certificate Revocation List (CRL) ---
  {
    question: "Which list, published by a Certificate Authority, identifies certificates that have been revoked before their expiration date?",
    options: ["Certificate Revocation List (CRL)", "OCSP", "CSR", "Root of trust"],
    answer: "Certificate Revocation List (CRL)"
  },
  {
    question: "Why might a certificate be added to a Certificate Revocation List?",
    options: [
      "The private key was compromised or the certificate information is no longer valid",
      "The certificate expired naturally",
      "The certificate was successfully validated",
      "The CA wants to issue a new certificate"
    ],
    answer: "The private key was compromised or the certificate information is no longer valid"
  },
  {
    question: "What is a limitation of using Certificate Revocation Lists for checking certificate validity?",
    options: [
      "CRLs can become large and require periodic downloading, causing delays",
      "CRLs are more secure than other methods",
      "CRLs provide real-time verification",
      "CRLs cannot be used with modern browsers"
    ],
    answer: "CRLs can become large and require periodic downloading, causing delays"
  },

  // --- OCSP (Online Certificate Status Protocol) ---
  {
    question: "Which protocol provides real-time certificate status verification by querying the CA directly?",
    options: ["Online Certificate Status Protocol (OCSP)", "CRL", "Key exchange", "CSR"],
    answer: "Online Certificate Status Protocol (OCSP)"
  },
  {
    question: "What is the primary advantage of OCSP over Certificate Revocation Lists?",
    options: [
      "OCSP provides immediate, real-time certificate status without downloading large lists",
      "OCSP is less secure than CRLs",
      "OCSP requires no network connectivity",
      "OCSP stores all certificates locally"
    ],
    answer: "OCSP provides immediate, real-time certificate status without downloading large lists"
  },
  {
    question: "What information does an OCSP responder provide?",
    options: [
      "Whether a specific certificate is valid, revoked, or unknown",
      "A complete list of all valid certificates",
      "The private key associated with a certificate",
      "Password reset information"
    ],
    answer: "Whether a specific certificate is valid, revoked, or unknown"
  },

  // --- Self-signed Certificates ---
  {
    question: "What type of certificate is signed by its own private key rather than a trusted Certificate Authority?",
    options: ["Self-signed certificate", "Third-party certificate", "Wildcard certificate", "Root certificate"],
    answer: "Self-signed certificate"
  },
  {
    question: "What is the primary security limitation of self-signed certificates?",
    options: [
      "They are not trusted by default because no external authority has verified the identity",
      "They cannot encrypt data",
      "They expire immediately",
      "They are always compromised"
    ],
    answer: "They are not trusted by default because no external authority has verified the identity"
  },
  {
    question: "In which scenario might a self-signed certificate be acceptable?",
    options: [
      "Internal testing environments or closed systems where trust is already established",
      "Public-facing e-commerce websites",
      "Banking applications accessible to customers",
      "Any production environment"
    ],
    answer: "Internal testing environments or closed systems where trust is already established"
  },

  // --- Third-party Certificates ---
  {
    question: "Certificates issued by a trusted external Certificate Authority are known as:",
    options: ["Third-party certificates", "Self-signed certificates", "Wildcard certificates", "Blockchain certificates"],
    answer: "Third-party certificates"
  },
  {
    question: "Why are third-party certificates preferred for public-facing websites?",
    options: [
      "Browsers and systems trust them by default because they are signed by recognized CAs",
      "They are free and require no validation",
      "They never expire",
      "They are easier to create than self-signed certificates"
    ],
    answer: "Browsers and systems trust them by default because they are signed by recognized CAs"
  },

  // --- Root of Trust ---
  {
    question: "In PKI, the ultimate foundation upon which all certificate trust is built is called the:",
    options: ["Root of trust", "Key escrow", "OCSP", "Tokenization"],
    answer: "Root of trust"
  },
  {
    question: "What is a root certificate in a PKI hierarchy?",
    options: [
      "A self-signed certificate from a trusted CA that serves as the anchor for all trust chains",
      "A certificate that has expired",
      "A certificate used only for email",
      "A temporary certificate for testing"
    ],
    answer: "A self-signed certificate from a trusted CA that serves as the anchor for all trust chains"
  },
  {
    question: "What is a certificate chain of trust?",
    options: [
      "A hierarchy where certificates are signed by intermediate CAs, which are signed by root CAs",
      "A list of expired certificates",
      "A blockchain of certificates",
      "A backup of all private keys"
    ],
    answer: "A hierarchy where certificates are signed by intermediate CAs, which are signed by root CAs"
  },

  // --- CSR (Certificate Signing Request) ---
  {
    question: "Which request is generated by an entity and submitted to a CA when they want to obtain a digital certificate?",
    options: ["Certificate Signing Request (CSR)", "CRL", "OCSP", "Key exchange"],
    answer: "Certificate Signing Request (CSR)"
  },
  {
    question: "What information is typically included in a Certificate Signing Request?",
    options: [
      "Public key, organization details, and domain name",
      "Private key and password",
      "Only the domain name",
      "Previous certificates"
    ],
    answer: "Public key, organization details, and domain name"
  },
  {
    question: "Should a private key be included in a Certificate Signing Request?",
    options: [
      "No, only the public key should be included; the private key must remain secret",
      "Yes, the CA needs the private key to issue the certificate",
      "Only for self-signed certificates",
      "Only for wildcard certificates"
    ],
    answer: "No, only the public key should be included; the private key must remain secret"
  },

  // --- Wildcard Certificates ---
  {
    question: "A company wants a single certificate that can secure multiple subdomains under the same domain (e.g., mail.example.com, www.example.com). Which certificate type should they request?",
    options: ["Wildcard certificate", "Self-signed certificate", "CSR", "Root certificate"],
    answer: "Wildcard certificate"
  },
  {
    question: "How is a wildcard certificate typically denoted in the domain name field?",
    options: [
      "Using an asterisk, such as *.example.com",
      "Listing each subdomain separately",
      "Using the word 'wildcard'",
      "Using a question mark"
    ],
    answer: "Using an asterisk, such as *.example.com"
  },
  {
    question: "What is a limitation of wildcard certificates?",
    options: [
      "They typically only cover one level of subdomains, not nested subdomains",
      "They cannot use HTTPS",
      "They expire faster than regular certificates",
      "They are always self-signed"
    ],
    answer: "They typically only cover one level of subdomains, not nested subdomains"
  },

  // --- Scenario-based Questions ---
  {
    question: "A web browser displays a warning that a website's certificate has been revoked. Which system likely detected this issue?",
    options: [
      "OCSP or CRL check",
      "Key stretching",
      "Tokenization",
      "Steganography"
    ],
    answer: "OCSP or CRL check"
  },
  {
    question: "An organization needs to secure internal development servers that are not accessible from the internet. Which certificate type would be most cost-effective?",
    options: [
      "Self-signed certificates",
      "Wildcard certificates from a public CA",
      "Extended validation certificates",
      "Blockchain certificates"
    ],
    answer: "Self-signed certificates"
  },
  {
    question: "A company discovers that an employee's laptop containing a certificate's private key has been stolen. What should they do immediately?",
    options: [
      "Request the CA to revoke the certificate and issue a new one",
      "Change the certificate's password",
      "Wait for the certificate to expire naturally",
      "Update the CRL only"
    ],
    answer: "Request the CA to revoke the certificate and issue a new one"
  },
  {
    question: "An e-commerce website needs a certificate that will be trusted by customer browsers worldwide. What should they obtain?",
    options: [
      "A third-party certificate from a recognized public CA",
      "A self-signed certificate",
      "An internal certificate",
      "A blockchain certificate"
    ],
    answer: "A third-party certificate from a recognized public CA"
  },
  {
    question: "When examining a website's certificate, you see it was issued by an intermediate CA, which was issued by a root CA. This demonstrates:",
    options: [
      "Certificate chain of trust",
      "Certificate revocation",
      "Self-signed validation",
      "Key escrow"
    ],
    answer: "Certificate chain of trust"
  }
]

// console.log(cryptographicQuiz.length);
//59