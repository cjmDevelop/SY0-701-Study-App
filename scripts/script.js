import { firstQuiz } from './first-quiz.js'
import { secondQuiz } from './second-quiz.js'
import { thirdQuiz } from './third-quiz.js'
import { fourthQuiz } from './fourth-quiz.js'
import { fifthQuiz } from './fifth-quiz.js'
import { sixthQuiz } from './sixth-quiz.js'
import { seventhQuiz } from './seventh-quiz.js'

const quizzes = [firstQuiz, secondQuiz, thirdQuiz, fourthQuiz, fifthQuiz, sixthQuiz, seventhQuiz];


function startQuiz(index) {
    const quiz = quizzes[index];
     if(!quiz) {
        console.warn(`No quiz found at index ${index}`);
        return;
     }
     console.log("Starting quiz:", index);
     console.log(quiz);
}
window.startQuiz = startQuiz;

