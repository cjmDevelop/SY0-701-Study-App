// import { firstQuiz } from './_temp/first-quiz.js'
// import { secondQuiz } from './_temp/second-quiz.js'
// import { thirdQuiz } from './_temp/third-quiz.js'
// import { fourthQuiz } from './_temp/fourth-quiz.js'
// import { fifthQuiz } from './_temp/fifth-quiz.js'
// import { sixthQuiz } from './_temp/sixth-quiz.js'
// import { seventhQuiz } from './_temp/seventh-quiz.js'

// const quizzes = [firstQuiz, secondQuiz, thirdQuiz, fourthQuiz, fifthQuiz, sixthQuiz, seventhQuiz];


/* Chapters 1.0 - 1.4 */
import { securityControlsQuiz } from './1/1.0-1.1/securityControlsQuiz.js'
import { fundamentalSecurityConceptsQuiz } from './1/1.2/fundamentalSecurityConceptsQuiz.js'
import { changeManagementProcessQuiz } from './1/1.3/changeManagementQuiz.js'
import { cryptographicQuiz } from './1/1.4/cryptographicQuiz.js'


// const quizDataArrays = [
//   {
//     question: "Which technique gathers public data about a target without accessing its internal network?",
//     options: ["Passive Reconnaissance", "Vulnerability Scanning", "Supply Chain Analysis", "Regulatory Audit"],
//     answer: "Passive Reconnaissance"
//   },
//   {
//     question: "Which email security protocol is used to assign a policy to unauthorized emails from external sources?",
//     options: ["SPF (Sender Policy Framework)", "NAC (Network Access Control)", "DMARC (Domain-based Message Authentication Reporting and Conformance)", "DKIM (Domain Keys Identified Mail)"],
//     answer: "DMARC (Domain-based Message Authentication Reporting and Conformance)"
//   },
//   {
//     question: "Cyber-attacks that are driven by financial gain are usually associated with which group?",
//     options: ["Organized Crime", "Hacktivist", "Nation State", "Shadow I.T"],
//     answer: "Organized Crime"
//   },
// ];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const showQuestionNumber = document.getElementById('question-number');
const backArrowButton = document.getElementById('back-arrow');
const skipArrowButton = document.getElementById('skip-arrow');
const popupA = document.getElementById('popup-a');
const popupB = document.getElementById('popup-b');
const quizNumber = document.getElementById('quiz-number');
const quizQuestionAmount = document.getElementById('quiz-questions-amount');

let score = 0;
let currentQuestion = 0;

let correctAnswersAnswered = 0;
let incorrectAnswersAnswered = 0;
let incorrectAnswers = [];

let userAnswers = new Array(quizDataArrays.length).fill(null);

// Shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let max = 7;
let randomNumber = Math.floor(Math.random() * max);

// console.log(randomNumber);
// console.log(quizzes[randomNumber][randomNumber]);



  for (let i = 0; i < quizzes.length; i++) {
    for (let k = 0; k < quizzes.length; k++) {
      console.log(quizzes[i][k]);
    }
  }




//Display Quiz
function displayQuestion() {
  showQuestionNumber.textContent = currentQuestion + 1; //✅
  quizNumber.textContent = randomNumber + 1; //✅
  quizQuestionAmount.textContent = quizzes[randomNumber].length; //✅
  
  const questionData = quizzes[randomNumber][randomNumber];
  //To do: Get QuestionData needs to go through each question once





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
    radio.checked = (userAnswers[currentQuestion] === shuffledOptions[i]);//restore's previous selection
    const optionText = document.createTextNode(shuffledOptions[i]);
    // option.style.backgroundColor = ''; // Reset previous styles
    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }
  quizContainer.innerHTML = '';
  quizContainer.style.display = 'flex';
  quizContainer.style.flexDirection = 'column';
  quizContainer.style.justifyContent = 'center';
  quizContainer.style.alignItems = 'center';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const correct = quizDataArrays[currentQuestion].answer;
  const optionLabels = document.querySelectorAll('.option');
  optionLabels.forEach(label => {
    const input = label.querySelector('input');
    if (input.value === correct) {
      // label.style.backgroundColor = '#80ff00';
    }
    if (input.checked && input.value !== correct) {
      // label.style.backgroundColor = '#ff1313';
    }
    input.disabled = true;
  });
  // Only score if not already answered
  if(userAnswers[currentQuestion] === null) {
  if(!selectedOption){
    incorrectAnswers.push({
      question: quizDataArrays[currentQuestion].question,
      incorrectAnswer: "No answer selected",
      correctAnswer: correct,
    });
    incorrectAnswersAnswered++;
    userAnswers[currentQuestion] = "No answer selected";
  } else {
    const answer = selectedOption.value;
    userAnswers[currentQuestion] = answer;//tracking user's answer incase of hitting back button to change an answer.
    if(answer === correct) {
      score++;
      correctAnswersAnswered++;
    } else {
      incorrectAnswers.push({
        question: quizDataArrays[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: correct,
      });
      incorrectAnswersAnswered++;
    }
  }
}
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizDataArrays.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }, 350);
}

function displayResult() {
  popupA.style.display = 'block';
  popupB.style.display = 'block';
  
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = incorrectAnswersAnswered > 0 ? 'inline-block' : 'none';

  if (score === quizDataArrays.length) {
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizDataArrays.length}!</p>
      <p style="color: green; font-weight: bold; font-size: 1.3rem;">
        🥳🎯🏆💯Perfect score! One step closer to cybersecurity certification! 
      </p>
    `;
  } else {
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizDataArrays.length}.</p>
      <p>Click "Show Answer" to review the questions you missed.</p>
    `;
  }
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  incorrectAnswersAnswered = 0;
  correctAnswersAnswered = 0;
  userAnswers = new Array(quizDataArrays.length).fill(null);
  quizContainer.style.display = 'inline-block';
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

  let incorrectAnswersHtml = '<div class="review-block">';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
    <div class=review-question">
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br><br>
          <strong>❌ Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br><br>
          <strong>✅ Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
  }
  incorrectAnswersHtml += '</div>';
  resultContainer.innerHTML = incorrectAnswersHtml;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//=====Arrow Functions==========================
backArrowButton.addEventListener('click', function (e){
  e.preventDefault();
  if(currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
});

skipArrowButton.addEventListener('click', function(e) {
  e.preventDefault();
  handleArrowSubmitAndNext();
});

let warnedAboutSkip = false;

function handleArrowSubmitAndNext() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const alreadyAnswered = userAnswers[currentQuestion] !== null;

  const skipWarningEl = document.getElementById('skip-warning');

  if (!selectedOption && !alreadyAnswered) {
    if (!warnedAboutSkip) {
      skipWarningEl.classList.remove('hide');
      warnedAboutSkip = true;
      return;
    }

    // User clicked skip again — confirm the skip
    const correct = quizDataArrays[currentQuestion].answer;
    incorrectAnswers.push({
      question: quizDataArrays[currentQuestion].question,
      incorrectAnswer: "No answer selected",
      correctAnswer: correct,
    });
    incorrectAnswersAnswered++;
    userAnswers[currentQuestion] = "No answer selected";
  }

  // Proceed normally
  skipWarningEl.classList.add('hide');
  warnedAboutSkip = false;

  if (selectedOption) {
    checkAnswer();
    return;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizDataArrays.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }, 650);
}



document.addEventListener('keydown', function(event) {
  const key = event.key;
  const options = document.querySelectorAll('input[name="quiz"]');

  if ((key === 'ArrowDown' || key === 'ArrowUp') && options.length > 0) {
    event.preventDefault();

    let currentIndex = -1;
    options.forEach((option, index) => {
      if (document.activeElement === option) {
        currentIndex = index;
      }
    });

    if (key === 'ArrowDown' && currentIndex < options.length - 1) {
      options[currentIndex + 1].focus();
    }

    if (key === 'ArrowUp' && currentIndex > 0) {
      options[currentIndex - 1].focus();
    }

    // If none focused, focus the first option on ↓
    if (currentIndex === -1 && key === 'ArrowDown') {
      options[0].focus();
    }
  }

  if (key === 'Enter' || key === ' ' || key === 'Space') {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      checkAnswer();
    }
  }

  if (key === 'ArrowRight') {
    skipArrowButton.classList.add('arrow-active');
    setTimeout(() => skipArrowButton.classList.remove('arrow-active'), 150);
    if (currentQuestion < quizDataArrays.length - 1) {
      currentQuestion++;
      displayQuestion();
    }
  }

  if (key === 'ArrowLeft') {
    backArrowButton.classList.add('arrow-active');
    setTimeout(() => backArrowButton.classList.remove('arrow-active'), 150);
    if (currentQuestion > 0) {
      currentQuestion--;
      displayQuestion();
    }
  }
});

//======================================================================================


/**
 * 
 * 
 *  <header>
    <a href="index.html" class="active">
      <img src="/logo-guyana-usa-theme.png" alt="Backyard Builds Logo" />
    </a>
    <nav>
      <a href="index.html" class="active">Home</a>
      <a href="about-us.html">About Us</a>
      <a href="backyard-builds.html">BackyardBuilds</a>
      <a href="contact-us.html">Contact Us</a>
    </nav>
  </header>
 * 
 * 
 * 
 * 
 * • Categories
- Technical
- Managerial - Operational - Physical
 * 
 * 
 */