/* Chapters 1.0 - 1.4 */
import { securityControlsQuiz } from './1/1.0-1.1/securityControlsQuiz.js'
import { fundamentalSecurityConceptsQuiz } from './1/1.2/fundamentalSecurityConceptsQuiz.js'
import { changeManagementProcessQuiz } from './1/1.3/changeManagementQuiz.js'
import { cryptographicQuiz } from './1/1.4/cryptographicQuiz.js'

//Get Domain from URL
const urlParams = new URLSearchParams(window.location.search);
const domain = urlParams.get('domain');

//Map domain to quiz data
const quizMap = {
    '1.1': securityControlsQuiz,
    '1.2': fundamentalSecurityConceptsQuiz,
    '1.3': changeManagementProcessQuiz,
    '1.4': cryptographicQuiz
}

function loadQuiz() {
    const currentQuiz = quizMap[domain];

    //Redirect to home if invalid
    // if (!currentQuiz) {
    //     window.location.href = 'index.html'; 
    //     return;
    // }

    // Quiz ID and Quiz Name
    document.getElementById('quiz-id').textContent = "Quiz Id: " + currentQuiz[0].quiz_ID;
    document.getElementById('quiz-title').textContent = currentQuiz[0].quiz_name + " Quiz";

    // Filter for quiz questions
    const questions = currentQuiz.filter(item => item.question);
 
      
    startQuiz(questions);
 
}

let counter = 0;
function startQuiz(questions) {
const questionElement = document.createElement('div');
      questionElement.className = 'question';
      questionElement.innerHTML = questions[counter];


const optionsElement = document.createElement('div');
      optionsElement.className = 'options';

let questionNumber = document.getElementById('question-number');
      questionNumber.textContent = counter + 1;

let quizQuestionsAmount = document.getElementById('quiz-questions-amount');
    quizQuestionsAmount.textContent = questions.length;

}

loadQuiz();