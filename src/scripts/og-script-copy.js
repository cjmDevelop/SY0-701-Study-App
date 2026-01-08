/* Chapters 1.0 - 1.4 */
import { securityControlsQuiz } from './1/1.0-1.1/securityControlsQuiz.js'
import { fundamentalSecurityConceptsQuiz } from './1/1.2/fundamentalSecurityConceptsQuiz.js'
import { changeManagementProcessQuiz } from './1/1.3/changeManagementQuiz.js'
import { cryptographicQuiz } from './1/1.4/cryptographicQuiz.js'

/* Chapters 2.0 - 2.5 */
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

//Get Domain and Mode from URL
const urlParams = new URLSearchParams(window.location.search);
const domain = urlParams.get('domain');
const timedMode = urlParams.get('timed') === 'true';

//Map domain to quiz data
const quizMap = {
    '1.1': securityControlsQuiz,
    '1.2': fundamentalSecurityConceptsQuiz,
    '1.3': changeManagementProcessQuiz,
    '1.4': cryptographicQuiz,
    '2.1': threatActorsAndMotivationsQuiz,
    '2.2': threatVectorsAndAttackSurfacesQuiz,
    '2.3': vulnerabilitiesQuiz,
    '2.4': indicatorsOfMaliciousActivityQuiz,
    '2.5': mitigationTechniquesQuiz,
    '3.1': cloudArchitectureQuiz,
    '3.2': infrastructureVirtualizationQuiz,
    '3.3': specializedSystemsQuiz,
    '3.4': resilienceConsiderationsQuiz,
    '4.1': securityTechniquesAndAssetManagementQuiz,
    '4.3': vulnerabilityManagementAndMonitoringQuiz,
    '4.6': identityAccessAndIncidentResponseQuiz,
    '5.1': governanceAndRiskManagementQuiz,
    '5.3': thirdPartyRiskQuiz,
    '5.4': complianceAuditsAndAwarenessQuiz
}

// DOM Elements - Will be initialized when DOM is ready
let quizContainer;
let resultContainer;
let submitButton;
let retryButton;
let showAnswerButton;
let backToMenuButton;
let backArrowButton;
let skipArrowButton;
let popupA;
let popupB;
let skipWarning;

// Quiz state variables
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let correctAnswersAnswered = 0;
let incorrectAnswersAnswered = 0;
let incorrectAnswers = [];
let userAnswers = [];
let timerInterval;
let timerSeconds = 0;
let timeLimit = 0; // Time limit in seconds for timed mode
let hasSkippedOnce = false;

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Timer functions
function startTimer() {
  if (timedMode) {
    // Countdown timer for timed mode
    const questionCount = currentQuiz.length - 1; // Minus 1 for metadata
    timeLimit = Math.ceil(questionCount * 1.0 * 60); // 1.0 minute per question in seconds
    timerSeconds = timeLimit;

    timerInterval = setInterval(() => {
      timerSeconds--;
      const minutes = Math.floor(timerSeconds / 60);
      const seconds = timerSeconds % 60;
      const timerElement = document.getElementById('timer');
      timerElement.textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      // Visual warnings
      if (timerSeconds <= 120) { // 2 minutes
        timerElement.style.color = '#ff4444';
        timerElement.style.fontWeight = 'bold';
      } else if (timerSeconds <= 300) { // 5 minutes
        timerElement.style.color = '#ffaa00';
      }

      // Time's up!
      if (timerSeconds <= 0) {
        stopTimer();
        handleTimeExpired();
      }
    }, 1000);
  } else {
    // Count-up timer for practice mode
    timerSeconds = 0;
    timerInterval = setInterval(() => {
      timerSeconds++;
      const minutes = Math.floor(timerSeconds / 60);
      const seconds = timerSeconds % 60;
      document.getElementById('timer').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

function handleTimeExpired() {
  // Play buzzer sound (browser beep)
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 440; // A4 note
    oscillator.type = 'square';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5); // 0.5 second beep
  } catch (e) {
    console.log('Audio not supported');
  }

  // Show time's up alert
  alert("⏰ TIME'S UP! Your quiz will be submitted automatically.");

  // Auto-submit quiz (mark unanswered as wrong)
  displayResult();
}

function loadQuiz() {
    currentQuiz = quizMap[domain];

    // Redirect to home if invalid
    if (!currentQuiz) {
        window.location.href = 'index.html';
        return;
    }

    // Initialize user answers array
    userAnswers = new Array(currentQuiz.length - 1).fill(null);

    // Quiz ID and Quiz Name
    document.getElementById('quiz-id').textContent = "Quiz Id: " + currentQuiz[0].quiz_ID;
    document.getElementById('quiz-title').textContent = currentQuiz[0].quiz_name;

    // Start timer
    startTimer();

    // Display first question
    displayQuestion();
}

function displayQuestion() {
  // Hide skip warning
  skipWarning.classList.add('hide');
  hasSkippedOnce = false;

  // Update question counter (adding 1 because currentQuestion is 0-indexed, and skipping first item which is quiz info)
  document.getElementById('question-number').textContent = currentQuestion + 1;
  document.getElementById('quiz-question-amount').textContent = currentQuiz.length - 1;

  // Get current question data (offset by 1 because index 0 is quiz metadata)
  const questionData = currentQuiz[currentQuestion + 1];

  // Create question element
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  // Create options element
  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  // Shuffle options
  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  // Create option elements
  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];
    radio.checked = (userAnswers[currentQuestion] === shuffledOptions[i]);

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  // Clear and populate quiz container
  quizContainer.innerHTML = '';
  quizContainer.style.display = 'flex';
  quizContainer.style.flexDirection = 'column';
  quizContainer.style.justifyContent = 'center';
  quizContainer.style.alignItems = 'center';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);

  // Update back arrow visibility
  backArrowButton.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const correct = currentQuiz[currentQuestion + 1].answer;
  const optionLabels = document.querySelectorAll('.option');

  // Highlight correct and incorrect answers
  optionLabels.forEach(label => {
    const input = label.querySelector('input');
    if (input.value === correct) {
      label.style.backgroundColor = '#80ff00';
    }
    if (input.checked && input.value !== correct) {
      label.style.backgroundColor = '#ff1313';
    }
    input.disabled = true;
  });

  // Only score if not already answered
  if (userAnswers[currentQuestion] === null) {
    if (!selectedOption) {
      incorrectAnswers.push({
        question: currentQuiz[currentQuestion + 1].question,
        incorrectAnswer: "No answer selected",
        correctAnswer: correct,
      });
      incorrectAnswersAnswered++;
      userAnswers[currentQuestion] = "No answer selected";
    } else {
      const answer = selectedOption.value;
      userAnswers[currentQuestion] = answer;
      if (answer === correct) {
        score++;
        correctAnswersAnswered++;
      } else {
        incorrectAnswers.push({
          question: currentQuiz[currentQuestion + 1].question,
          incorrectAnswer: answer,
          correctAnswer: correct,
        });
        incorrectAnswersAnswered++;
      }
    }
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length - 1) {
      displayQuestion();
    } else {
      displayResult();
    }
  }, 350);
}

function displayResult() {
  stopTimer();

  popupA.style.display = 'block';
  popupB.style.display = 'block';

  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = incorrectAnswersAnswered > 0 ? 'inline-block' : 'none';
  backToMenuButton.style.display = 'inline-block';
  backArrowButton.style.visibility = 'hidden';
  skipArrowButton.style.visibility = 'hidden';

  const totalQuestions = currentQuiz.length - 1;
  const percentage = Math.round((score / totalQuestions) * 100);

  if (score === totalQuestions) {
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${totalQuestions}!</p>
      <p style="color: green; font-weight: bold; font-size: 1.3rem;">
        Perfect score! One step closer to cybersecurity certification!
      </p>
      <p>Time: ${document.getElementById('timer').textContent}</p>
    `;
  } else {
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${totalQuestions} (${percentage}%).</p>
      <p>Time: ${document.getElementById('timer').textContent}</p>
      <p>Click "Show Answers" to review the questions you missed.</p>
    `;
  }

  // Save quiz result to backend if user is authenticated
  saveQuizResult(totalQuestions, score, timerSeconds);
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  incorrectAnswersAnswered = 0;
  correctAnswersAnswered = 0;
  userAnswers = new Array(currentQuiz.length - 1).fill(null);

  popupA.style.display = 'none';
  popupB.style.display = 'none';
  quizContainer.style.display = 'inline-block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  backToMenuButton.style.display = 'none';
  skipArrowButton.style.visibility = 'visible';
  resultContainer.innerHTML = '';

  startTimer();
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';
  backToMenuButton.style.display = 'inline-block';

  let incorrectAnswersHtml = '<div class="review-block">';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <div class="review-question">
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br><br>
          <strong style="color: #ff1313;">Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br><br>
          <strong style="color: #80ff00;">Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      </div>
    `;
  }
  incorrectAnswersHtml += '</div>';
  resultContainer.innerHTML = incorrectAnswersHtml;
}

function backToQuizMenu() {
  // Extract the domain number (first character) to determine which sub-menu to navigate to
  const domainNumber = domain.charAt(0);

  // Map domain number to the appropriate sub-menu page
  const subMenuMap = {
    '1': 'sub-menu.html',
    '2': 'sub-menu-2.html',
    '3': 'sub-menu-3.html',
    '4': 'sub-menu-4.html',
    '5': 'sub-menu-5.html'
  };

  // Navigate to the appropriate sub-menu page
  const targetPage = subMenuMap[domainNumber] || 'quiz-menu.html'; // Fallback to main menu if domain not found
  window.location.href = targetPage;
}

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

function skipQuestion() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (!selectedOption && !hasSkippedOnce) {
    // Show warning on first skip attempt
    skipWarning.classList.remove('hide');
    hasSkippedOnce = true;
  } else {
    // Proceed to next question
    checkAnswer();
  }
}

// Initialize quiz when DOM is ready
function initQuiz() {
  // Get DOM elements
  quizContainer = document.getElementById('quiz');
  resultContainer = document.getElementById('result');
  submitButton = document.getElementById('submit');
  retryButton = document.getElementById('retry');
  showAnswerButton = document.getElementById('showAnswer');
  backToMenuButton = document.getElementById('backToMenu');
  backArrowButton = document.getElementById('back-arrow');
  skipArrowButton = document.getElementById('skip-arrow');
  popupA = document.getElementById('popup-a');
  popupB = document.getElementById('popup-b');
  skipWarning = document.getElementById('skip-warning');

  // Event listeners - Only add if elements exist (quiz page only)
  if (submitButton && retryButton && showAnswerButton && backToMenuButton && backArrowButton && skipArrowButton) {
    submitButton.addEventListener('click', checkAnswer);
    retryButton.addEventListener('click', retryQuiz);
    showAnswerButton.addEventListener('click', showAnswer);
    backToMenuButton.addEventListener('click', backToQuizMenu);
    backArrowButton.addEventListener('click', goBack);
    skipArrowButton.addEventListener('click', skipQuestion);

    // Initialize quiz
    loadQuiz();
  }
}

// Save quiz result to backend or localStorage
async function saveQuizResult(totalQuestions, correctAnswers, timeTakenSeconds) {
  const accessToken = localStorage.getItem('accessToken');
  const percentage = (correctAnswers / totalQuestions) * 100;
  const passed = percentage >= 70;

  const resultData = {
    quizDomain: domain,
    totalQuestions: totalQuestions,
    correctAnswers: correctAnswers,
    percentage: percentage,
    passed: passed,
    timeTakenSeconds: timeLimit - timeTakenSeconds,
    isTimed: timedMode,
    completedAt: new Date().toISOString()
  };

  // If user is authenticated, save to backend
  if (accessToken) {
    const API_BASE_URL = 'https://auth-microservice-stuf.onrender.com/api';

    try {
      const response = await fetch(`${API_BASE_URL}/quiz-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(resultData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Quiz result saved to backend:', data);
      } else {
        console.error('Failed to save quiz result to backend:', response.status);
      }
    } catch (error) {
      console.error('Error saving quiz result to backend:', error);
    }
  } else {
    // User not authenticated, save to localStorage
    saveQuizResultToLocalStorage(resultData);
    console.log('Quiz result saved to localStorage:', resultData);
  }
}

// Save quiz result to localStorage for non-authenticated users
function saveQuizResultToLocalStorage(resultData) {
  // Get existing results from localStorage
  let localResults = JSON.parse(localStorage.getItem('localQuizResults') || '[]');

  // Add new result
  localResults.push(resultData);

  // Keep only the best result for each quiz domain
  const resultsByDomain = {};
  localResults.forEach(result => {
    const existing = resultsByDomain[result.quizDomain];
    if (!existing || result.percentage > existing.percentage) {
      resultsByDomain[result.quizDomain] = result;
    }
  });

  // Convert back to array
  const bestResults = Object.values(resultsByDomain);

  // Save to localStorage
  localStorage.setItem('localQuizResults', JSON.stringify(bestResults));
}

// Run initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuiz);
} else {
  initQuiz();
}