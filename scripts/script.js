import { firstQuiz } from './first-quiz.js'
import { secondQuiz } from './second-quiz.js'
import { thirdQuiz } from './third-quiz.js'
import { fourthQuiz } from './fourth-quiz.js'
import { fifthQuiz } from './fifth-quiz.js'
import { sixthQuiz } from './sixth-quiz.js'
import { seventhQuiz } from './seventh-quiz.js'

const quizzes = [firstQuiz, secondQuiz, thirdQuiz, fourthQuiz, fifthQuiz, sixthQuiz, seventhQuiz];

const bricks = document.querySelectorAll('.brick');
      bricks.forEach((brick, index) => {
        if(quizzes[index]) {
            brick.textContent = index + 1;
        } else {
            brick.textContent = '';
        }
      });

/** Test Example
const box = document.getElementById('test-click');
const infoBox = document.getElementById('info-box');
let infoShown = false;

box.addEventListener('click', () => {
    if(!infoShown){
        infoBox.style.display = 'block';
        infoBox.textContent = 'This is only a test.'
        infoShown = true;
    } else {
        infoBox.style.display = 'none';
        infoBox.textContent = '';
        infoShown = false;
    }
    
});
*/

