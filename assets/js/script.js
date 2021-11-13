//variables
var startQuizBtn = document.querySelector("#start-quiz");
var timerEl = document.getElementById("countdown");

//default game values
var timeLeft = 60;

var questionsIndex= 0;

//set up empty array to hold questions
var questions = [
    {
        text: "Commonly used data types DO Not Include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false}
        ]
    },
    {
        text: "The condition in an if/else statement is enclosed with ________.",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parenthesis", correct: true},
            {text: "square brackets", correct: false}
        ]
    },
    {
        text: "Arrays in JavaScript can be used to store ________.",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all the above", correct: true}
        ]
    },
    {
        text: "String values must be enclosed within _________ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parenthesis", correct: false}
        ]
    }
];
var numberOfQuestions = 0;

//timer that counts down the seconds
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

function createQuestion(){
    var question = questions[questionsIndex];
    question1El.textContent  = question.text;
    for(var i = 0; i < question.answers.length; i++){

        
        var answer = document.createElement("button");
        answer.textContent = question.answers[i].text;
        answer.addEventListener("click", verifyAnswer())
        li1.appendChild(answer);
        
    }
}

function verifyAnswer(event){
    // verify if answer is correct
    if(answer[i] == true){
        questionsIndex ++
    }

    createQuestion();
    //if correct questionIndex ++
    // call createQuestion();
}


// main function that runs to start the quiz
function startQuiz(){

    countdown();

}

//starts the main function when Start Quiz button is clicked
startQuizBtn.addEventListener("click", startQuiz);