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
var questionContEl = document.querySelector("#question-container");
var questionElement = document.querySelector('#question');
var answerButtonsElement = document.querySelector("#answer-button");
var countdownTimerEl = document.querySelector("#countdown");
var userDetailEl = document.querySelector("#user-container");

//i need to make an initial var  and a submit initial var
var submitScoreButton = document.querySelector("#submit");
var userInitials = document.querySelector("#initials");

var countdown, currentQuestionIndex;
var timeLeft = 60;

//Submitting the users initials in the form, 
submitScoreButton.addEventListener("click", function(event) {
    //preventing the form from running its default behavour 
    event.preventDefault();
    // create object for storage using user initials and timeLeft in countdown
    const userScore = {
        initials: userInitials.value.trim(),
        score: timeLeft
    };
    console.log(userScore)

    // setting the new submissin to local storage.  
    localStorage.setItem("userScore", JSON.stringify(userScore));

});




//creating an event lister so when you click on the start button it starts quiz and countdown begins
startButton.addEventListener("click", startGame)
startButton.addEventListener("click", function() {
    countdown();
    console.log(countdown)
});


//end the game and move to a submit form 
function gameFin() {
    clearInterval(timeInterval); //stop the time 
    questionContEl.classList.add('hide'); // hide the question container 
    countdownTimerEl.classList.add('hide'); //hide the clock
    userDetailEl.classList.remove('hide'); //allow userdetails cointainer to appear 
}



//creating a function that starts the game 
function startGame() {
    // console.log("started")
    startButton.classList.add('hide') //hide the start button onces it selected as the game has started. 
    currentQuestionIndex = 0;
    questionContEl.classList.remove('hide'); //remove the hiden questions in questionContEl so they can be seen
    countdownTimerEl.classList.remove('hide');
    showQuestion(currentQuestionIndex);
}

//setting the countdown timer to 75 seconds 
function countdown() {
    //use 'setinterval; method to call a function to be executed every 1000 milliseconds, i.e 1 second 
    //when time reaches 0, timeInterval is cleared and function ends. 
    timeInterval = setInterval(function() {
        timeLeft--;
        countdownTimerEl.textContent = timeLeft + " second left to complete quiz!"
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            countdownTimerEl.textContent = "Time's Up!"
            gameFin();
        }
    }, 1000);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
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

function selectAnswer(e) {
    const selectedAnswer = e.target
    const correct = selectedAnswer.dataset.correct;
    if (correct) {
        console.log("correct answer"); //working till here 
        selectedAnswer.classList.add('correct');
        if (currentQuestionIndex < (questions.length - 1)) {
            currentQuestionIndex++;
            reset();
            showQuestion();
        } else {
            console.log("no more questions");
            gameFin();
        };
    } else {
        console.log("incorrect");
        selectedAnswer.classList.add('wrong');
        countdownTimerEl.classList.add('wrong');
        timeLeft = timeLeft - 10;
        if (currentQuestionIndex < (questions.length - 1)) {
            currentQuestionIndex++;
            reset();
            showQuestion();
        } else {
            console.log("incorrect, no more questions");
            gameFin();
            console.log("no more games")
        };

    }
}


function setNextQuestion() {
    resetState()
    if (currentQuestionIndex < question.length - 1) {
        showQuestion[currentQuestionIndex]
    }
}

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
        question: "Is Javascript difficult to learn? ",
        answers: [
            { text: "No", correct: false },
            { text: "Yes", correct: true }
        ]
    }
];