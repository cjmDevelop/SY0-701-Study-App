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

chapterOneTotal.textContent = getChapterOneTotal();
oneDotOneTotal.textContent = securityControlsQuizAmount + " Questions";
oneDotTwoTotal.textContent = fundamentalSecurityConceptsQuizAmount + " Questions"
oneDotThreeTotal.textContent = changeManagementProcessQuizAmount + " Questions";
oneDotFourTotal.textContent = cryptographicQuizAmount + " Questions"




//-------------------------------------------------------------------------------------------------



// const chapterTwoTotal = document.getElementById('chapter-two-total');

// function getChapterTwoTotal() {
//     let threatActorsAndMotivationsQuizTotal = threatActorsAndMotivationsQuiz.length - 1; //Minus 2 because zero index is general quiz info.
//     let threatVectorsAndAttackSurfacesQuizTotal = threatVectorsAndAttackSurfacesQuiz.length - 1;
//     let vulnerabilitiesQuizTotal = vulnerabilitiesQuiz.length - 1;
//     let indicatorsOfMaliciousActivityQuizTotal = indicatorsOfMaliciousActivityQuiz.length - 1;
//     let mitigationTechniquesQuizTotal = mitigationTechniquesQuiz.length - 1;
//     return threatActorsAndMotivationsQuizTotal + threatVectorsAndAttackSurfacesQuizTotal + vulnerabilitiesQuizTotal +
//     indicatorsOfMaliciousActivityQuizTotal + mitigationTechniquesQuizTotal;
// }

// chapterTwoTotal.textContent = getChapterTwoTotal();









