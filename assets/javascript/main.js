//Declaring variables to target
var currentQuestionIndex = 0
var startButton = document.querySelector("#start-btn");
var questionContEl = document.querySelector("#question-container");
var questionElement = document.querySelector('#question');
var answerButtonsElement = document.querySelector("#answer-button");
var countdownTimerEl = document.querySelector("#countdown");
var userDetailEl = document.querySelector("#user-container");
var scoreArray = localStorage.getItem("highScores") || [];
var gameInstEl = document.querySelector("#user-instructions-container");
var submitScoreButton = document.querySelector("#submit");
var userInitials = document.querySelector("#initials");
//setting time left to 75 seconds. 
var timeLeft = 75;


//creating an event lister so when you click on the start button it starts quiz and countdown begins
startButton.addEventListener("click", startGame)
startButton.addEventListener("click", function() {
    countdown();
    // console.log(countdown)
});

//creating a function that starts the game 
function startGame() {
    // console.log("started")
    startButton.classList.add('hide') //hide the start button onces it selected as the game has started. 
    gameInstEl.classList.add('hide') //hide the quiz instructions when the start starGame function begins
    currentQuestionIndex = 0;
    questionContEl.classList.remove('hide'); //remove the hidden questions in questionContEl so they can be seen
    countdownTimerEl.classList.remove('hide'); //remove the hidden countdownTimerEl so user can see time left
    showQuestion(currentQuestionIndex); //show  question. 
}


//function for countdown timer 
function countdown() {
    timeInterval = setInterval(function() {
        //if more than 1 second left display seconds left plus message
        if (timeLeft > 1) {
            countdownTimerEl.textContent = timeLeft + ' seconds left!';
            //decrement operator, taking away 1 second 
            timeLeft--;
            //else if statement to change message if 1 second change message, use of === is a strict equality comparison operator. 
        } else if (timeLeft === 1) {
            countdownTimerEl.textContent = timeLeft + ' second left!';
            timeLeft--;
            //same principle as above, but if 0 time left, clear and gameFinished. 
        } else if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameFin();
        }
        //speed at which seconds are counted, 1000 miliseconds = 1 second
    }, 1000);
}



//show the question once the event has started, 
//questions are based on the variable questoins. 
function showQuestion() {
    //const question is based on the questions number in array
    const question = questions[currentQuestionIndex];
    //the question is written in the question container 
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


//selecting answer function 
function selectAnswer(e) {
    //targetting the selectedAnswer element
    const selectedAnswer = e.target
        //storing data for correct answers 
    const correct = selectedAnswer.dataset.correct;
    //if the correct answer is seclcted
    if (correct) {
        // console.log("correct answer");
        selectedAnswer.classList.add('correct');
        if (currentQuestionIndex < (questions.length - 1)) { //reduce the number of questions by 1
            currentQuestionIndex++; //add one more question
            reset(); //rest data
            showQuestion(); //show question
        } else { //no more questions to show game fin
            // console.log("no more questions");
            gameFin();
        };
    } else {
        // if a sellected answer is wrong, countdown timer adds -10 seconds to time left 
        selectedAnswer.classList.add('wrong');
        countdownTimerEl.classList.add('wrong');
        timeLeft = timeLeft - 10;
        if (currentQuestionIndex < (questions.length - 1)) {
            currentQuestionIndex++; //same principles as above
            reset();
            showQuestion();
        } else {
            // console.log("incorrect, no more questions");
            gameFin();
            // console.log("no more games")
        };

    }
}

//display the next question. 
function setNextQuestion() {
    resetState()
    if (currentQuestionIndex < question.length - 1) {
        showQuestion[currentQuestionIndex]
    }
}
//rest function to remove all elements
function reset() {
    countdownTimerEl.classList.remove('wrong');
    // if there are answers we want to remove them
    while (answerButtonsElement.firstChild) {
        // remove the answers
        answerButtonsElement.removeChild
            // check if there are still answers
            (answerButtonsElement.firstChild)
    }
};

//end the game and move to a submit form 
function gameFin() {
    clearInterval(timeInterval); //stop the time 
    questionContEl.classList.add('hide'); // hide the question container 
    countdownTimerEl.classList.add('hide'); //hide the clock
    userDetailEl.classList.remove('hide'); //allow userdetails cointainer to appear 
}

//Submitting the users initials in the form, 
submitScoreButton.addEventListener("click", function(event) {
    //preventing the form from running its default behavour 
    event.preventDefault();
    // create object for storage using user initials and timeLeft in countdown
    scoreLog.push(` name : ${userInitials.value.trim()} -  time left: ${timeLeft}`);
    //stored in locoal storaged 
    localStorage.setItem('scoreLog', JSON.stringify(scoreLog));
    //replaced at highscorehtml
    window.location.replace('highscores.html')
});

var scoreLog = [];

function init() {
    var storedScores = JSON.parse(localStorage.getItem('scoreLog'));
    if (storedScores !== null) {
        scoreLog = storedScores
    };
};
init();


//submit button is inside the user container which is now unhidden due to gameFin
var submitButton = document.querySelector("highscores");
//when button is clicked on the function starts
submitScoreButton.addEventListener("click", function() {
    //taken to highscore page
    document.location.href = "highscores.html";
});




//Creating 4 different questions for the quizz 
var questions = [{
        question: "Which of the following is not an undefined vale in Javascript? ",
        answers: [
            { text: "Variable used in the code dosent exist", correct: false },
            { text: "Variable is defined by a secret vale", correct: true },
            { text: "Property does not exist", correct: false },
            { text: "Variable is not assigned to any value", correct: false }
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
        question: "Which of the following are not JavaScript data types?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean.", correct: false },
            { text: "Alert", correct: true },
            { text: "Number", correct: false }
        ]
    },
    {
        question: "Which of the following is not a type of error in Javascript?",
        answers: [
            { text: "Load Time Errors", correct: false },
            { text: "Duplicate Errors", correct: true },
            { text: "Runtime Errors ", correct: false },
            { text: "Logical Errors", correct: false }
        ]
    },
    {
        question: "What does the method 'addEventLister' do ?",
        answers: [
            { text: "Attaches an event handler to an element", correct: true },
            { text: "Listens for a voice command", correct: false },
            { text: "Allows a microphone to work within your landing page", correct: false },
        ]
    },
    {
        question: "Inside which HTML element do we put the Javascript? ",
        answers: [
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: true },
            { text: "<scripting> ", correct: false },
            { text: "<script>", correct: true },
        ]
    }
];