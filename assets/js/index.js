const questions = [
    {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<javascript>", "<js>", "<main>"],
    answer: "<script>",
    },

    {
    title: " Which of the following is not a reserved word in JavaScript?",
    choices: ["binterface", "throws", "program", "short"],
    answer: "program",
    },   

    {
     title: "The external JavaScript file must contain the <script> tag",
     choices: ["true", "false"],
    answer: "false",
     },

     {
     title: "How do you call a function named myFunction?",
    choices: ["call myFunction ()", "Function()", "myFunction()"],
    answer: "myFunction()",
     }
];
const startBox = document.querySelector("#start_box")
const  startbutton = document.querySelector("#start_quiz")
const  quizEl = document.querySelector("#quiz");
const  questionEl = document.querySelector("#question");
const  answersEl = document.querySelector("#choices");
const  scoreBox = document.querySelector("#score_box")
const  quizScore = document.querySelector("#score");
const  submitInitialsButton = document.querySelector("initial_button");
const  initialsEl = document.querySelector("#initial_input");
const  highscoreEl= document.querySelector("#highscore");
const  scoreEl = document.querySelector("#finalscore");
const  backButton = document.querySelector("back_button");
const  clearScoreButton = document.querySelector("#clear-button");

const  viewHighscore = document.querySelector("#viewhighscore");
const  timerEl = document.querySelector("#time");
var score = 0;
var thisQuestion = 0;
var highScores = [];
var interval;
var timeGiven = 90;
var timeLeft = 0;

function startTimer() {
    timerEl.textContent = timeGiven;
       interval = setInterval(function () {
        timeLeft++;
        timerEl.textContent = timeGiven - timeLeft;
        if (timeLeft >= questions.length); {
            thisQuestion = questions.length;
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);

}

startbutton.addEventListener("click", function () {
    hide(startBox);
    startTimer();
    renderQuestion() 
    show(quiz);
});

function nextQuestion() {
   thisQuestion++;
    if (thisQuestion <questionEl.length) {
       showQuestion();
    }
    else {
        stopTimer();
        if ((timeGiven - timeLeft) > 0)
        score += (timeGiven - timeLeft);
        ScoreEl.textContent = score;
        hide(quizEl);
        show(scoreEl);
        timerEl.textContent = 0;
    }
 }

 function checkAnswer(answer) {
    if (question[thisQuestion].asnwer == questions[thisQuestion].choices[asnwer.id]) {
        score +=5;
        displayMessage("That is the correct answer!");
    }
    else {
        timeLeft += 10;
        displayMessage("I'm sorry");
    }
    }
 


function showQuestion() {
   question.textContent = questions[thisQuestion].title;
   for (i = 0; i < answersEl.children.length; i++) {
    answersEl.children(i).children[0].textContent = '${(i +1)}: ${questions[thisQuestion].choices[i]}'
    }
}

function showHighScores() {
    scoreEl.innerHTML = "";
    show(highscoreEl);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < highScores.length; i++) {
        let scoreItem = document.createElement("div");
        scoreItem.className += "row mb-3 p-2";
        console.log(scoreItem)
        scoreItem.textContent = '${(i + 10)}. ${highScores[i].username} - ${highScores[i].userScore}';
        scoreEl.appendChild(scoreItem);
    }
}


answersEl.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        checkAnswers(e.target);
        nextQuestion();
    }
});

submitInitialsButton.addEventListener("click", function () {
    let initValue = initialsEl.ariaValueMax.trim();
    if (initValue) {
        let userScore = { username: initValue, userScore: score };
        initialsEl.value = '';
        highscoreEl = JSON.parse(localStorage.getItem("scores")) || [];
        hide(ScoreEl);
        showHighScores();
        reset();
        }
    });

    backButton.addEventListener("click", function () {
        hide(highScore);
        show(startBox);
    });

    clearScoreButton.addEventListener("click", function () {
        highScores = [];
        localStorage.setItem("scores", JSON.stringify(higscores));
        showHighScores();
    });


                                              