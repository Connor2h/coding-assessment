// variables
const startQuizBtn = document.querySelector('#start-btn');
const timerEl = document.getElementById('countdown');
const div = document.createElement('div');
//const questionEl = document.createElement('h1');
const startButton = document.createElement('start-btn');
const headerEl = document.getElementById('header-1');
const pEl = document.getElementById('p-1');
const questionContainerEl = document.getElementById('question-container');
const gameOverEl = document.getElementById("end-game")
const scoreEl = document.getElementById("score")
const initialEl = document.getElementById("initials")
const butInitialsEl = document.querySelector("save-initials")

const questionEl = document.getElementById("question")
const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")

// default game values
var score = 0;
let startQuizBool = false;
let timeLeft = 60;
const numberOfQuestions = 0;
let questionsIndex = 0;



// set up empty array to hold questions
//some questions are from w3schools javascript quiz
const questions = [
  {
    question: 'Commonly used data types DO Not Include:',
    answers: [
      { text: 'strings', correct: false },
      { text: 'booleans', correct: false },
      { text: 'alerts', correct: true },
      { text: 'numbers', correct: false },
    ],
  },
  {
    question: 'The condition in an if/else statement is enclosed with ________.',
    answers: [
      { text: 'quotes', correct: false },
      { text: 'curly brackets', correct: false },
      { text: 'parenthesis', correct: true },
      { text: 'square brackets', correct: false },
    ],
  },
  {
    question: 'Arrays in JavaScript can be used to store ________.',
    answers: [
      { text: 'numbers and strings', correct: false },
      { text: 'other arrays', correct: false },
      { text: 'booleans', correct: false },
      { text: 'all the above', correct: true },
    ],
  },
  {
    question: 'String values must be enclosed within _________ when being assigned to variables.',
    answers: [
      { text: 'commas', correct: false },
      { text: 'curly brackets', correct: false },
      { text: 'quotes', correct: true },
      { text: 'parenthesis', correct: false },
    ],
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<script>', correct: true },
      { text: '<javascript>', correct: false },
      { text: '<scripting>', correct: false },
      { text: '<js>', correct: false },
    ],
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { text: 'function myFunction()', correct: true },
      { text: 'function:myFunction()', correct: false },
      { text: 'function = myFunction()', correct: false },
      { text: 'function = true', correct: false },
    ],
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    answers: [
      { text: 'if i == 5 then', correct: false },
      { text: 'if (i == 5)', correct: true },
      { text: 'if i = 5 then', correct: false },
      { text: 'if i = 5', correct: false },
    ],
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [
      { text: 'if (i <> 5)', correct: false },
      { text: 'if i =! 5 then', correct: false },
      { text: 'if (i != 5)', correct: true },
      { text: 'if i <> 5', correct: false },
    ],
  },
  {
    question: 'How does a FOR loop start?',
    answers: [
      { text: 'for (i = 0; i <= 5)', correct: false },
      { text: 'for i = 1 to 5', correct: false },
      { text: 'for (i <= 5; i++)', correct: false },
      { text: 'for (i = 0; i <= 5; i++)', correct: true },
    ],
  },
  {
    question: 'How do you round the number 7.25, to the nearest integer?',
    answers: [
      { text: 'Math.round(7.25)', correct: true },
      { text: 'round(7.25)', correct: false },
      { text: 'rnd(7.25)', correct: false },
      { text: 'Math.rnd(7.25)', correct: false },
    ],
  },
];

function setQuestion(activeQuestionIndex){
  console.log(questions[activeQuestionIndex])

  var currentQuestion = questions[activeQuestionIndex];
  questionEl.textContent = currentQuestion.question
  btn1.textContent = currentQuestion.answers[0].text;
  btn2.textContent = currentQuestion.answers[1].text;
  btn3.textContent = currentQuestion.answers[2].text;
  btn4.textContent = currentQuestion.answers[3].text;
}

// timer that counts down the seconds
function countdown() {
  const timeInterval = setInterval(() => {
    if (timeLeft >= 0) {
      timerEl.textContent = `Timer: ${timeLeft}`;

      timeLeft--; // decrement timeLeft by 1
    } else {
      // run function to take user to game over screen
      timeLeft = 0
      endGame();
    }
  }, 1000);
}

//creates the questions and sets their text
function createQuestions() {
  const { question } = questions[numberOfQuestions];
  question.textContent = questions;
  console.log(question);
}

//checks if answers are correct
function verifyAnswer(event) {
  // verify if answer is correct
  if (answer[i] == true) {
    questionsIndex++;
  }

  createQuestion();

}


function submitAnswer(event){

  checkIfCorrect(event.target.innerText, questionsIndex)
  questionsIndex++
  setQuestion(questionsIndex);
}

// compares btnText to the current question's answers. Check if current question is correct then add score
function checkIfCorrect(btnText, currentQuestionIndex){
  for (const currentCheckedAnswer of questions[currentQuestionIndex].answers){
    if(btnText === currentCheckedAnswer.text){
      if(currentCheckedAnswer.correct === true){
        score = score + 10
        alert("correct")

      }else{
        alert("incorrect")
        timeLeft -=10;
      }
    }
  }
}

//saves initials and score to local storage
function saveScores(){
  // // check localStorage for high score, if it's not there, use 0
  // //var highScore = localStorage.getItem("score");
  // var initials = localStorage.getItem("initials")
  // if (highScore === null) {
  //   highScore = 0;
  // }
  

  // // store highscore and initials
  // localStorage.setItem("score", JSON.stringify(score));
  // localStorage.setItem("initials", JSON.stringify(initials)); 
}

function endGame(){
  if( timeLeft <= 0 || questionsIndex === questions.length ){
    timerEl.classList.add("hide")
    questionEl.classList.add("hide")
    btn1.classList.add("hide")
    btn2.classList.add("hide")
    btn3.classList.add("hide")
    btn4.classList.add("hide")
    gameOverEl.classList.remove('hide');
    initialEl.classList.remove('hide');
    scoreEl.textContent = `Your final score is : ` + score;
    //butInitialsEl.addEventListener('click', saveScores())

    var highScore = localStorage.getItem("score");
    var initials = localStorage.getItem("initials")
    if (highScore === null) {
      highScore = 0;
    }
    
  
    // store highscore and initials
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("initials", JSON.stringify(initials));

  }
}

// main function that runs to start the quiz
function startQuiz() {


  startQuizBool = true;

  startQuizBtn.classList.add('hide');
  headerEl.classList.add('hide');
  pEl.classList.add('hide');
  questionContainerEl.classList.remove('hide');

  countdown();

  setQuestion(questionsIndex);

  createQuestions();

  endGame();
}

// starts the main function when Start Quiz button is clicked
startQuizBtn.addEventListener('click', startQuiz);
btn1.addEventListener('click', submitAnswer)
btn2.addEventListener('click', submitAnswer)
btn3.addEventListener('click', submitAnswer)
btn4.addEventListener('click', submitAnswer)


//start endgame function if out of questions or timer is <=0

//hide the questions container
//show high score container where they enter their name
//save to loccal storage when they click stage
//click back button take them back to start quiz screen
// try to implemenet highscore