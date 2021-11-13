// //variables
// var startQuizBtn = document.querySelector("#start-btn");
// var timerEl = document.getElementById("countdown");
// var div = document.createElement("div");
// var questionEl = document.createElement("h1");



// //default game values
// var timeLeft = 60;
// var numberOfQuestions = 0;

// var questionsIndex= 0;

// //set up empty array to hold questions
// var questions = [
//     {
//         question: "Commonly used data types DO Not Include:",
//         answers: [
//             {text: "strings", correct: false},
//             {text: "booleans", correct: false},
//             {text: "alerts", correct: true},
//             {text: "numbers", correct: false}
//         ]
//     },
//     {
//         question: "The condition in an if/else statement is enclosed with ________.",
//         answers: [
//             {text: "quotes", correct: false},
//             {text: "curly brackets", correct: false},
//             {text: "parenthesis", correct: true},
//             {text: "square brackets", correct: false}
//         ]
//     },
//     {
//         question: "Arrays in JavaScript can be used to store ________.",
//         answers: [
//             {text: "numbers and strings", correct: false},
//             {text: "other arrays", correct: false},
//             {text: "booleans", correct: false},
//             {text: "all the above", correct: true}
//         ]
//     },
//     {
//         question: "String values must be enclosed within _________ when being assigned to variables.",
//         answers: [
//             {text: "commas", correct: false},
//             {text: "curly brackets", correct: false},
//             {text: "quotes", correct: true},
//             {text: "parenthesis", correct: false}
//         ]
//     }
// ];

// //timer that counts down the seconds
// function countdown(){
    

//     var timeInterval = setInterval(function (){
//         if(timeLeft >= 1){
//             timerEl.textContent = "Timer: " + timeLeft;

//             timeLeft--; //decrement timeLeft by 1
//         }else{
//             //run function to take user to game over screen
//         }

//     }, 1000)

// }

// function createQuestions(){

//     var question = questions[numberOfQuestions].question;
//     question.textContent = questions
// }

// // function createQuestion(){
// //     var question = questions[questionsIndex];
// //     question.textContent  = question.text;
// //     for(var i = 0; i < question.answers.length; i++){

// //         var answer = document.createElement("button");
// //         answer.textContent = question.answers[i].text;
// //         answer.addEventListener("click", verifyAnswer())
// //         li1.appendChild(answer);
        
// //     }
// // }

// function verifyAnswer(event){
//     // verify if answer is correct
//     if(answer[i] == true){
//         questionsIndex ++
//     }

//     createQuestion();
//     //if correct questionIndex ++
//     // call createQuestion();
// }


// // main function that runs to start the quiz
// function startQuiz(){

//     countdown();
//     // createQuestion();

// }

// //starts the main function when Start Quiz button is clicked
// startQuizBtn.addEventListener("click", startQuiz);


var timeLeft = 60;

var startButton = document.getElementById("start-btn");
var headerEl = document.getElementById("header-1");
var pEl = document.getElementById("p-1");
var timerEl = document.getElementById("countdown");
var questionContainerEl = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function countdown(){
    

    var timeInterval = setInterval(function (){
        if(timeLeft >= 1){
            timerEl.textContent = "Timer: " + timeLeft;

            timeLeft--; //decrement timeLeft by 1
        }else{
            //run function to take user to game over screen
        }

    }, 1000)

}

function startGame(){
    console.log("started");
    startButton.classList.add("hide");
    headerEl.classList.add("hide");
    pEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    countdown();

    setNextQuestion();
}

function setNextQuestion(){

}

function selectAnswer(){

}