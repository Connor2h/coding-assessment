//variables
var timeLeft = 60;
var timerEl = document.getElementById('countdown');
var startQuizBtn = document.querySelector("#start-quiz");

var body = document.body;
var divEl = document.createElement("div");
var question1El = document.createElement("h1");
var p1El = document.createElement("p");
var question2El = document.createElement("h1");
var startQuizEl = document.createElement("button");
startQuizEl.setAttribute("class", "btn");
startQuizEl.setAttribute("id", "start-quiz");
startQuizEl.setAttribute("type", "submit");

var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");

question1El.textContent = "Coding Quiz Challenge";
p1El.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startQuizEl.textContent = "Start Quiz";

question2El.textContent = "Commonly used data types DO Not Include:";
answer1.textContent = "1. strings";
answer2.textContent = "2. booleans";
answer3.textContent = "3. alerts";
answer4.textContent = "4. numbers";

body.appendChild(divEl);
divEl.appendChild(question1El);//append h1 to body
divEl.appendChild(listEl);
listEl.appendChild(p1El);
listEl.appendChild(startQuizEl);

//set up empty array to hold questions
var questions = [];
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

// main function that runs to start the quiz
function startQuiz(){

    countdown();
    
    if(numberOfQuestions == 0){
        question1El.textContent = "Commonly used data types DO Not Include:";
        listEl.removeChild(p1El);
        listEl.removeChild(startQuizEl);
        body.appendChild(listEl);
        listEl.appendChild(answer1);
        listEl.appendChild(answer2);
        listEl.appendChild(answer3);
        listEl.appendChild(answer4);

        answer3.addEventListener("click", function(){
            p1El.textContent = "Correct";
            listEl.appendChild(p1El);
            numberOfQuestions ++;

        });

        answer1.addEventListener("click", function(){
            timeLeft -= 10
            p1El.textContent = "Incorrect";
            listEl.appendChild(p1El);
            numberOfQuestions ++;
        });

        answer2.addEventListener("click", function(){
            timeLeft -= 10
            p1El.textContent = "Incorrect";
            listEl.appendChild(p1El);
            numberOfQuestions ++;
        });

        answer4.addEventListener("click", function(){
            timeLeft -= 10
            p1El.textContent = "Incorrect";
            listEl.appendChild(p1El);
            numberOfQuestions ++;
        });
    }

    if(numberOfQuestions == 1){
        question1El.textContent = "The condition in an if / else statement is enclosed with ___________";


        listEl.appendChild(answer1);
        listEl.appendChild(answer2);
        listEl.appendChild(answer3);
        listEl.appendChild(answer4);
    }


}

//starts the main function when Start Quiz button is clicked
startQuizEl.addEventListener("click", startQuiz);