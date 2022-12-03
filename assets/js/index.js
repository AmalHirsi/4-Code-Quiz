const Questions = [
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

const quizPage= document.querySelector("#quizbox")
const scorePage = document.querySelector("#core-container")
const highscorePage = document.querySelector("#highscore")

function hidePages() {
    quizPage.setAttribute(hidden, true);
    scorePage.setAttribute(hidden, true);
     highscorePage.setAttribute(hidden, true);
}

function Quiz() {
    hidePages();
    quizPage.removeAttribute("hidden")
}

const question = document.getElementById("question");

time = questions.length * 15;
intervalID = setInterval(countdown, 1000);