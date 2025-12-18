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


const chapterOneTotal = document.getElementById('chapter-one-total');
const oneDotOneTotal = document.getElementById('one-dot-one-total');
const oneDotTwoTotal = document.getElementById('one-dot-two-total');
const oneDotThreeTotal = document.getElementById('one-dot-three-total');
const oneDotFourTotal = document.getElementById('one-dot-four-total');

let securityControlsQuizAmount = 0;
let fundamentalSecurityConceptsQuizAmount = 0;
let changeManagementProcessQuizAmount = 0;
let cryptographicQuizAmount = 0;

function getChapterOneTotal() {
 securityControlsQuizAmount = securityControlsQuiz.length - 1; //Minus 2 because zero index is general quiz info.
 fundamentalSecurityConceptsQuizAmount = fundamentalSecurityConceptsQuiz.length - 1;
 changeManagementProcessQuizAmount = changeManagementProcessQuiz.length - 1;
 cryptographicQuizAmount = cryptographicQuiz.length - 1;
 return securityControlsQuizAmount + 
 fundamentalSecurityConceptsQuizAmount + 
 changeManagementProcessQuizAmount + 
 cryptographicQuizAmount; 
}

if (chapterOneTotal) {
    chapterOneTotal.textContent = getChapterOneTotal();
}
if (oneDotOneTotal) {
    oneDotOneTotal.textContent = securityControlsQuizAmount + " Questions";
}
if (oneDotTwoTotal) {
    oneDotTwoTotal.textContent = fundamentalSecurityConceptsQuizAmount + " Questions";
}
if (oneDotThreeTotal) {
    oneDotThreeTotal.textContent = changeManagementProcessQuizAmount + " Questions";
}
if (oneDotFourTotal) {
    oneDotFourTotal.textContent = cryptographicQuizAmount + " Questions";
}




//-------------------------------------------------------------------------------------------------



const chapterTwoTotal = document.getElementById('chapter-two-total');
const twoDotOneTotal = document.getElementById('two-dot-one-total');
const twoDotTwoTotal = document.getElementById('two-dot-two-total');
const twoDotThreeTotal = document.getElementById('two-dot-three-total');
const twoDotFourTotal = document.getElementById('two-dot-four-total');
const twoDotFiveTotal = document.getElementById('two-dot-five-total');

let threatActorsAndMotivationsQuizAmount = 0;
let threatVectorsAndAttackSurfacesQuizAmount = 0;
let vulnerabilitiesQuizAmount = 0;
let indicatorsOfMaliciousActivityQuizAmount = 0;
let mitigationTechniquesQuizAmount = 0;

function getChapterTwoTotal() {
    threatActorsAndMotivationsQuizAmount = threatActorsAndMotivationsQuiz.length - 1;
    threatVectorsAndAttackSurfacesQuizAmount = threatVectorsAndAttackSurfacesQuiz.length - 1;
    vulnerabilitiesQuizAmount = vulnerabilitiesQuiz.length - 1;
    indicatorsOfMaliciousActivityQuizAmount = indicatorsOfMaliciousActivityQuiz.length - 1;
    mitigationTechniquesQuizAmount = mitigationTechniquesQuiz.length - 1;
    return threatActorsAndMotivationsQuizAmount +
    threatVectorsAndAttackSurfacesQuizAmount +
    vulnerabilitiesQuizAmount +
    indicatorsOfMaliciousActivityQuizAmount +
    mitigationTechniquesQuizAmount;
}

if (chapterTwoTotal) {
    chapterTwoTotal.textContent = getChapterTwoTotal();
}
if (twoDotOneTotal) {
    twoDotOneTotal.textContent = threatActorsAndMotivationsQuizAmount + " Questions";
}
if (twoDotTwoTotal) {
    twoDotTwoTotal.textContent = threatVectorsAndAttackSurfacesQuizAmount + " Questions";
}
if (twoDotThreeTotal) {
    twoDotThreeTotal.textContent = vulnerabilitiesQuizAmount + " Questions";
}
if (twoDotFourTotal) {
    twoDotFourTotal.textContent = indicatorsOfMaliciousActivityQuizAmount + " Questions";
}
if (twoDotFiveTotal) {
    twoDotFiveTotal.textContent = mitigationTechniquesQuizAmount + " Questions";
}

// Domain 3 Question Counts
const chapterThreeTotal = document.getElementById('chapter-three-total');
const threeDotOneTotal = document.getElementById('three-dot-one-total');
const threeDotTwoTotal = document.getElementById('three-dot-two-total');
const threeDotThreeTotal = document.getElementById('three-dot-three-total');
const threeDotFourTotal = document.getElementById('three-dot-four-total');

let cloudArchitectureQuizAmount = 0;
let infrastructureVirtualizationQuizAmount = 0;
let specializedSystemsQuizAmount = 0;
let resilienceConsiderationsQuizAmount = 0;

function getChapterThreeTotal() {
    cloudArchitectureQuizAmount = cloudArchitectureQuiz.length - 1;
    infrastructureVirtualizationQuizAmount = infrastructureVirtualizationQuiz.length - 1;
    specializedSystemsQuizAmount = specializedSystemsQuiz.length - 1;
    resilienceConsiderationsQuizAmount = resilienceConsiderationsQuiz.length - 1;
    return cloudArchitectureQuizAmount +
    infrastructureVirtualizationQuizAmount +
    specializedSystemsQuizAmount +
    resilienceConsiderationsQuizAmount;
}

if (chapterThreeTotal) {
    chapterThreeTotal.textContent = getChapterThreeTotal();
}
if (threeDotOneTotal) {
    threeDotOneTotal.textContent = cloudArchitectureQuizAmount + " Questions";
}
if (threeDotTwoTotal) {
    threeDotTwoTotal.textContent = infrastructureVirtualizationQuizAmount + " Questions";
}
if (threeDotThreeTotal) {
    threeDotThreeTotal.textContent = specializedSystemsQuizAmount + " Questions";
}
if (threeDotFourTotal) {
    threeDotFourTotal.textContent = resilienceConsiderationsQuizAmount + " Questions";
}

// Domain 4 Question Counts
const chapterFourTotal = document.getElementById('chapter-four-total');
const fourDotOneTotal = document.getElementById('four-dot-one-total');
const fourDotThreeTotal = document.getElementById('four-dot-three-total');
const fourDotSixTotal = document.getElementById('four-dot-six-total');

let securityTechniquesAndAssetManagementQuizAmount = 0;
let vulnerabilityManagementAndMonitoringQuizAmount = 0;
let identityAccessAndIncidentResponseQuizAmount = 0;

function getChapterFourTotal() {
    securityTechniquesAndAssetManagementQuizAmount = securityTechniquesAndAssetManagementQuiz.length - 1;
    vulnerabilityManagementAndMonitoringQuizAmount = vulnerabilityManagementAndMonitoringQuiz.length - 1;
    identityAccessAndIncidentResponseQuizAmount = identityAccessAndIncidentResponseQuiz.length - 1;
    return securityTechniquesAndAssetManagementQuizAmount +
    vulnerabilityManagementAndMonitoringQuizAmount +
    identityAccessAndIncidentResponseQuizAmount;
}

if (chapterFourTotal) {
    chapterFourTotal.textContent = getChapterFourTotal();
}
if (fourDotOneTotal) {
    fourDotOneTotal.textContent = securityTechniquesAndAssetManagementQuizAmount + " Questions";
}
if (fourDotThreeTotal) {
    fourDotThreeTotal.textContent = vulnerabilityManagementAndMonitoringQuizAmount + " Questions";
}
if (fourDotSixTotal) {
    fourDotSixTotal.textContent = identityAccessAndIncidentResponseQuizAmount + " Questions";
}

// Domain 5 Question Counts
const chapterFiveTotal = document.getElementById('chapter-five-total');
const fiveDotOneTotal = document.getElementById('five-dot-one-total');
const fiveDotThreeTotal = document.getElementById('five-dot-three-total');
const fiveDotFourTotal = document.getElementById('five-dot-four-total');

let governanceAndRiskManagementQuizAmount = 0;
let thirdPartyRiskQuizAmount = 0;
let complianceAuditsAndAwarenessQuizAmount = 0;

function getChapterFiveTotal() {
    governanceAndRiskManagementQuizAmount = governanceAndRiskManagementQuiz.length - 1;
    thirdPartyRiskQuizAmount = thirdPartyRiskQuiz.length - 1;
    complianceAuditsAndAwarenessQuizAmount = complianceAuditsAndAwarenessQuiz.length - 1;
    return governanceAndRiskManagementQuizAmount +
    thirdPartyRiskQuizAmount +
    complianceAuditsAndAwarenessQuizAmount;
}

if (chapterFiveTotal) {
    chapterFiveTotal.textContent = getChapterFiveTotal();
}
if (fiveDotOneTotal) {
    fiveDotOneTotal.textContent = governanceAndRiskManagementQuizAmount + " Questions";
}
if (fiveDotThreeTotal) {
    fiveDotThreeTotal.textContent = thirdPartyRiskQuizAmount + " Questions";
}
if (fiveDotFourTotal) {
    fiveDotFourTotal.textContent = complianceAuditsAndAwarenessQuizAmount + " Questions";
}









