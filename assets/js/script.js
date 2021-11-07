//variables
var timerEl = document.getElementById('countdown');
var startQuizBtn = document.querySelector("#start-quiz");

//set up empty array to hold questions
var questions = [];

//timer that counts down the seconds
function countdown(){
    var timeLeft = 60;

    var timeInterval = setInterval(function (){
        if(timeLeft >= 1){
            timerEl.textContent = "Timer: " + timeLeft;

            timeLeft--; //decrement timeLeft by 1
        }else{
            //run function to take user to game over screen
        }


    }, 1000)


}

// main function that runs to start the quiz
function startQuiz(){

    countdown();



}

//starts the main function when Start Quiz button is clicked
startQuizBtn.addEventListener("click", startQuiz);