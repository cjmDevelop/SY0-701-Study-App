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



const oneDotOneQuizID = document.getElementById('one-dot-one-quiz-id');
      oneDotOneQuizID.textContent = securityControlsQuiz[0].quiz_ID;

const oneDotOneQuizName = document.getElementById('one-dot-one-quiz-name');
      oneDotOneQuizName.textContent = securityControlsQuiz[0].quiz_name;

const oneDotTwoQuizID = document.getElementById('one-dot-two-quiz-id');
      oneDotTwoQuizID.textContent = fundamentalSecurityConceptsQuiz[0].quiz_ID;
      
const oneDotTwoQuizName = document.getElementById('one-dot-two-quiz-name');
      oneDotTwoQuizName.textContent = fundamentalSecurityConceptsQuiz[0].quiz_name;

const oneDotThreeQuizID = document.getElementById('one-dot-three-quiz-id');
      oneDotThreeQuizID.textContent = changeManagementProcessQuiz[0].quiz_ID;

const oneDotThreeQuizName = document.getElementById('one-dot-three-quiz-name');
      oneDotThreeQuizName.textContent = changeManagementProcessQuiz[0].quiz_name;

const oneDotFourQuizID = document.getElementById('one-dot-four-quiz-id');
      oneDotFourQuizID.textContent = cryptographicQuiz[0].quiz_ID;

const oneDotFourQuizName = document.getElementById('one-dot-four-quiz-name');
      oneDotFourQuizName.textContent = cryptographicQuiz[0].quiz_name;


