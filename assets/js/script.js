// variables
const startQuizBtn = document.querySelector('#start-btn');
const timerEl = document.getElementById('countdown');
const div = document.createElement('div');
//const questionEl = document.createElement('h1');
const startButton = document.createElement('start-btn');
const headerEl = document.getElementById('header-1');
const pEl = document.getElementById('p-1');
const questionContainerEl = document.getElementById('question-container');

const questionEl = document.getElementById("question")
const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")

// default game values
let score = 0;
let startQuizBool = false;
let timeLeft = 60;
// var lastQuestionIndex = questions.length -1;
const numberOfQuestions = 0;

let questionsIndex = 0;



// set up empty array to hold questions
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
];

function testDelete(){
  // for(var i = 0; i < questions.length ; i++){
  //   console.log("This is the current question ", questions[i])
  // }
  console.log("testDelete")
  for(const currentQuestions of questions){
    console.log(currentQuestions)
  }
}

testDelete()

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
    if (timeLeft >= 1) {
      timerEl.textContent = `Timer: ${timeLeft}`;

      timeLeft--; // decrement timeLeft by 1
    } else {
      // run function to take user to game over screen
    }
  }, 1000);
}

function createQuestions() {
  const { question } = questions[numberOfQuestions];
  question.textContent = questions;
  console.log(question);
}

// function createQuestion(){
//     var question = questions[questionsIndex];
//     question.textContent  = question.text;
//     for(var i = 0; i < question.answers.length; i++){

//         var answer = document.createElement("button");
//         answer.textContent = question.answers[i].text;
//         answer.addEventListener("click", verifyAnswer())
//         li1.appendChild(answer);

//     }
// }

function verifyAnswer(event) {
  // verify if answer is correct
  if (answer[i] == true) {
    questionsIndex++;
  }

  createQuestion();
  // if correct questionIndex ++
  // call createQuestion();
}

function submitAnswer(event){
  console.log(event)

  checkIfCorrect(event.target.innerText, questionsIndex)
  questionsIndex++
  setQuestion(questionsIndex);
}

// compares btnText to the current question's answers. Check if current question is correct then add score
function checkIfCorrect(btnText, currentQuestionIndex){
  for (const currentCheckedAnswer of questions[currentQuestionIndex].answers){
    if(btnText === currentCheckedAnswer.text){
      if(currentCheckedAnswer.correct === true){
        score += 10;
      }else{
        timeLeft -=10;
      }
    }
  }
}

function endGame(){

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

  testDelete();

  createQuestions();
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
