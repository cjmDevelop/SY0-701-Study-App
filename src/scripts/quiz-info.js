/* Chapters 1.0 - 1.4 */
import { securityControlsQuiz } from './1/1.0-1.1/securityControlsQuiz.js'
import { fundamentalSecurityConceptsQuiz } from './1/1.2/fundamentalSecurityConceptsQuiz.js'
import { changeManagementProcessQuiz } from './1/1.3/changeManagementQuiz.js'
import { cryptographicQuiz } from './1/1.4/cryptographicQuiz.js'

/* Chapters 2.0 - 2.5  */
import { threatActorsAndMotivationsQuiz } from './2/2.0-2.1/threatActorsAndMotivationsQuiz.js'
import { threatVectorsAndAttackSurfacesQuiz } from './2/2.2/threatVectorsAndAttackSurfacesQuiz.js'
import { vulnerabilitiesQuiz } from './2/2.3/vulnerabilitiesQuiz.js'
import { indicatorsOfMaliciousActivityQuiz } from './2/2.4/indicatorsOfMaliciousActivityQuiz.js'
import { mitigationTechniquesQuiz } from './2/2.5/mitigationTechniquesQuiz.js'

/* Chapter 3.0 - Security Architecture */
import { cloudArchitectureQuiz } from './3/3.1/cloudArchitectureQuiz.js'
import { infrastructureVirtualizationQuiz } from './3/3.2/infrastructureVirtualizationQuiz.js'
import { specializedSystemsQuiz } from './3/3.3/specializedSystemsQuiz.js'
import { resilienceConsiderationsQuiz } from './3/3.4/resilienceConsiderationsQuiz.js'

/* Chapter 4.0 - Security Operations */
import { securityTechniquesAndAssetManagementQuiz } from './4/4.1-4.2/securityTechniquesAndAssetManagementQuiz.js'
import { vulnerabilityManagementAndMonitoringQuiz } from './4/4.3-4.5/vulnerabilityManagementAndMonitoringQuiz.js'
import { identityAccessAndIncidentResponseQuiz } from './4/4.6-4.9/identityAccessAndIncidentResponseQuiz.js'

/* Chapter 5.0 - Security Program Management */
import { governanceAndRiskManagementQuiz } from './5/5.1-5.2/governanceAndRiskManagementQuiz.js'
import { thirdPartyRiskQuiz } from './5/5.3/thirdPartyRiskQuiz.js'
import { complianceAuditsAndAwarenessQuiz } from './5/5.4-5.6/complianceAuditsAndAwarenessQuiz.js'



// Domain 1 Quiz Info
const oneDotOneQuizID = document.getElementById('one-dot-one-quiz-id');
if (oneDotOneQuizID) {
    oneDotOneQuizID.textContent = securityControlsQuiz[0].quiz_ID;
}

const oneDotOneQuizName = document.getElementById('one-dot-one-quiz-name');
if (oneDotOneQuizName) {
    oneDotOneQuizName.textContent = securityControlsQuiz[0].quiz_name;
}

const oneDotTwoQuizID = document.getElementById('one-dot-two-quiz-id');
if (oneDotTwoQuizID) {
    oneDotTwoQuizID.textContent = fundamentalSecurityConceptsQuiz[0].quiz_ID;
}

const oneDotTwoQuizName = document.getElementById('one-dot-two-quiz-name');
if (oneDotTwoQuizName) {
    oneDotTwoQuizName.textContent = fundamentalSecurityConceptsQuiz[0].quiz_name;
}

const oneDotThreeQuizID = document.getElementById('one-dot-three-quiz-id');
if (oneDotThreeQuizID) {
    oneDotThreeQuizID.textContent = changeManagementProcessQuiz[0].quiz_ID;
}

const oneDotThreeQuizName = document.getElementById('one-dot-three-quiz-name');
if (oneDotThreeQuizName) {
    oneDotThreeQuizName.textContent = changeManagementProcessQuiz[0].quiz_name;
}

const oneDotFourQuizID = document.getElementById('one-dot-four-quiz-id');
if (oneDotFourQuizID) {
    oneDotFourQuizID.textContent = cryptographicQuiz[0].quiz_ID;
}

const oneDotFourQuizName = document.getElementById('one-dot-four-quiz-name');
if (oneDotFourQuizName) {
    oneDotFourQuizName.textContent = cryptographicQuiz[0].quiz_name;
}

// Domain 2 Quiz Info
const twoDotOneQuizID = document.getElementById('two-dot-one-quiz-id');
if (twoDotOneQuizID) {
    twoDotOneQuizID.textContent = threatActorsAndMotivationsQuiz[0].quiz_ID;
}

const twoDotOneQuizName = document.getElementById('two-dot-one-quiz-name');
if (twoDotOneQuizName) {
    twoDotOneQuizName.textContent = threatActorsAndMotivationsQuiz[0].quiz_name;
}

const twoDotTwoQuizID = document.getElementById('two-dot-two-quiz-id');
if (twoDotTwoQuizID) {
    twoDotTwoQuizID.textContent = threatVectorsAndAttackSurfacesQuiz[0].quiz_ID;
}

const twoDotTwoQuizName = document.getElementById('two-dot-two-quiz-name');
if (twoDotTwoQuizName) {
    twoDotTwoQuizName.textContent = threatVectorsAndAttackSurfacesQuiz[0].quiz_name;
}

const twoDotThreeQuizID = document.getElementById('two-dot-three-quiz-id');
if (twoDotThreeQuizID) {
    twoDotThreeQuizID.textContent = vulnerabilitiesQuiz[0].quiz_ID;
}

const twoDotThreeQuizName = document.getElementById('two-dot-three-quiz-name');
if (twoDotThreeQuizName) {
    twoDotThreeQuizName.textContent = vulnerabilitiesQuiz[0].quiz_name;
}

const twoDotFourQuizID = document.getElementById('two-dot-four-quiz-id');
if (twoDotFourQuizID) {
    twoDotFourQuizID.textContent = indicatorsOfMaliciousActivityQuiz[0].quiz_ID;
}

const twoDotFourQuizName = document.getElementById('two-dot-four-quiz-name');
if (twoDotFourQuizName) {
    twoDotFourQuizName.textContent = indicatorsOfMaliciousActivityQuiz[0].quiz_name;
}

const twoDotFiveQuizID = document.getElementById('two-dot-five-quiz-id');
if (twoDotFiveQuizID) {
    twoDotFiveQuizID.textContent = mitigationTechniquesQuiz[0].quiz_ID;
}

const twoDotFiveQuizName = document.getElementById('two-dot-five-quiz-name');
if (twoDotFiveQuizName) {
    twoDotFiveQuizName.textContent = mitigationTechniquesQuiz[0].quiz_name;
}

// Domain 3 Quiz Info
const threeDotOneQuizID = document.getElementById('three-dot-one-quiz-id');
if (threeDotOneQuizID) {
    threeDotOneQuizID.textContent = cloudArchitectureQuiz[0].quiz_ID;
}

const threeDotOneQuizName = document.getElementById('three-dot-one-quiz-name');
if (threeDotOneQuizName) {
    threeDotOneQuizName.textContent = cloudArchitectureQuiz[0].quiz_name;
}

const threeDotTwoQuizID = document.getElementById('three-dot-two-quiz-id');
if (threeDotTwoQuizID) {
    threeDotTwoQuizID.textContent = infrastructureVirtualizationQuiz[0].quiz_ID;
}

const threeDotTwoQuizName = document.getElementById('three-dot-two-quiz-name');
if (threeDotTwoQuizName) {
    threeDotTwoQuizName.textContent = infrastructureVirtualizationQuiz[0].quiz_name;
}

const threeDotThreeQuizID = document.getElementById('three-dot-three-quiz-id');
if (threeDotThreeQuizID) {
    threeDotThreeQuizID.textContent = specializedSystemsQuiz[0].quiz_ID;
}

const threeDotThreeQuizName = document.getElementById('three-dot-three-quiz-name');
if (threeDotThreeQuizName) {
    threeDotThreeQuizName.textContent = specializedSystemsQuiz[0].quiz_name;
}

const threeDotFourQuizID = document.getElementById('three-dot-four-quiz-id');
if (threeDotFourQuizID) {
    threeDotFourQuizID.textContent = resilienceConsiderationsQuiz[0].quiz_ID;
}

const threeDotFourQuizName = document.getElementById('three-dot-four-quiz-name');
if (threeDotFourQuizName) {
    threeDotFourQuizName.textContent = resilienceConsiderationsQuiz[0].quiz_name;
}

// Domain 4 Quiz Info
const fourDotOneQuizID = document.getElementById('four-dot-one-quiz-id');
if (fourDotOneQuizID) {
    fourDotOneQuizID.textContent = securityTechniquesAndAssetManagementQuiz[0].quiz_ID;
}

const fourDotOneQuizName = document.getElementById('four-dot-one-quiz-name');
if (fourDotOneQuizName) {
    fourDotOneQuizName.textContent = securityTechniquesAndAssetManagementQuiz[0].quiz_name;
}

const fourDotThreeQuizID = document.getElementById('four-dot-three-quiz-id');
if (fourDotThreeQuizID) {
    fourDotThreeQuizID.textContent = vulnerabilityManagementAndMonitoringQuiz[0].quiz_ID;
}

const fourDotThreeQuizName = document.getElementById('four-dot-three-quiz-name');
if (fourDotThreeQuizName) {
    fourDotThreeQuizName.textContent = vulnerabilityManagementAndMonitoringQuiz[0].quiz_name;
}

const fourDotSixQuizID = document.getElementById('four-dot-six-quiz-id');
if (fourDotSixQuizID) {
    fourDotSixQuizID.textContent = identityAccessAndIncidentResponseQuiz[0].quiz_ID;
}

const fourDotSixQuizName = document.getElementById('four-dot-six-quiz-name');
if (fourDotSixQuizName) {
    fourDotSixQuizName.textContent = identityAccessAndIncidentResponseQuiz[0].quiz_name;
}

// Domain 5 Quiz Info
const fiveDotOneQuizID = document.getElementById('five-dot-one-quiz-id');
if (fiveDotOneQuizID) {
    fiveDotOneQuizID.textContent = governanceAndRiskManagementQuiz[0].quiz_ID;
}

const fiveDotOneQuizName = document.getElementById('five-dot-one-quiz-name');
if (fiveDotOneQuizName) {
    fiveDotOneQuizName.textContent = governanceAndRiskManagementQuiz[0].quiz_name;
}

const fiveDotThreeQuizID = document.getElementById('five-dot-three-quiz-id');
if (fiveDotThreeQuizID) {
    fiveDotThreeQuizID.textContent = thirdPartyRiskQuiz[0].quiz_ID;
}

const fiveDotThreeQuizName = document.getElementById('five-dot-three-quiz-name');
if (fiveDotThreeQuizName) {
    fiveDotThreeQuizName.textContent = thirdPartyRiskQuiz[0].quiz_name;
}

const fiveDotFourQuizID = document.getElementById('five-dot-four-quiz-id');
if (fiveDotFourQuizID) {
    fiveDotFourQuizID.textContent = complianceAuditsAndAwarenessQuiz[0].quiz_ID;
}

const fiveDotFourQuizName = document.getElementById('five-dot-four-quiz-name');
if (fiveDotFourQuizName) {
    fiveDotFourQuizName.textContent = complianceAuditsAndAwarenessQuiz[0].quiz_name;
}


