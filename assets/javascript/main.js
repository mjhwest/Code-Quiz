// Declare the variables linked to HTML, 
//querySelector(xxxx) allows us to work within that specific selector element i.e wrapper
//documet applies that changes to the entire document 

// var wrapper = document.querySelector(".wrapper");
// var questionContainer = document.querySelector("#questionContainer");
// var timerEl = document.querySelector("#countdown");
// var startEl = document.querySelector("#start")

//Declaring variables to target
var currentQuestionIndex = 0
var startButton = document.querySelector("#start-btn");
// var nextButton = document.querySelector("#next-btn"); //this may not work
var questionContEl = document.querySelector("#question-container");
var questionElement = document.querySelector('#question');
var answerButtonsElement = document.querySelector("#answer-button");
var countdownTimerEl = document.querySelector("#countdown");

var countdown, currentQuestionIndex;
var timeLeft = 75;

//creating an event lister so when you click on the start button it starts quiz and countdown begins
startButton.addEventListener("click", startGame)

startButton.addEventListener("click", function() {
    countdown();
    console.log(countdown)
});

//creating a function that starts the game 
function startGame() {
    // console.log("started")
    startButton.classList.add('hide') //hide the start button onces it selected as the game has started. 
    currentQuestionIndex = 0;
    questionContEl.classList.remove('hide'); //remove the hiden questions in questionContEl so they can be seen
    countdownTimerEl.classList.remove('hide');
    showQuestion(currentQuestionIndex)
}


//setting the countdown timer to 75 seconds 
function countdown() {
    var timeLeft = 75;
    //use 'setinterval; method to call a function to be executed every 1000 milliseconds, i.e 1 second 
    //when time reaches 0, timeInterval is cleared and function ends. 
    var timeInterval = setInterval(function() {
        timeLeft--;
        countdownTimerEl.textContent = timeLeft + "second left to complete quiz"
        if (timeLeft == 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!"
        }
    }, 1000);
}


function showQuestion(currentQuestionIndex) {
    questionElement.innerText = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button);
    });
};

function setNextQuestion() {
    resetState()
    showQuestion[currentQuestionIndex]
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        }) //new here
    if (correct) {
        console.log("correct")

    }

    // nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




























//Creating 4 different questions for the quizz 
var questions = [{
        question: "What does CSS stand for? ",
        answers: [
            { text: "Cool Style Science", correct: false },
            { text: "Cascading Style Sheet", correct: true },
            { text: "Computer Social Status", correct: false },
            { text: "Computer System Security", correct: false }
        ]
    },
    {
        question: "How many milliseconds make up 1 second?",
        answers: [
            { text: "10", correct: false },
            { text: "100.", correct: false },
            { text: "1000", correct: true },
            { text: "10000", correct: false }
        ]
    },
    {
        question: "Which of the following is not primitive value in JavaScript ?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean.", correct: false },
            { text: "Alert", correct: true },
            { text: "Number", correct: false }
        ]
    },
    {
        question: "Is Javascript hard to understand?",
        answers: [
            { text: "No", correct: false },
            { text: "Yes", correct: true }
        ]
    }
];