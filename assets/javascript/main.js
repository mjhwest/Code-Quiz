// Declare the variables linked to HTML, 
//querySelector(xxxx) allows us to work within that specific selector element i.e wrapper
//documet applies that changes to the entire document 

// var wrapper = document.querySelector(".wrapper");
// var questionContainer = document.querySelector("#questionContainer");
// var timerEl = document.querySelector("#countdown");
// var startEl = document.querySelector("#start")


//Declaring variables to target
var startButton = document.querySelector("#start-btn");
var questionContEl = document.querySelector("#Question");
var questionElement = document.querySelector('Question');
var answerButtonsElement = document.querySelector('answer-buttons');

//creating an event lister so when you click on the start button it starts quiz
startButton.addEventListener("click", startGame)

//creating a function that starts the game 
function startGame() {
    console.log("started")
    startButton.classList.add('hide') //hide the start button onces it selected as the game has started. 
    currentQuestionIndex = 0;
    questionContEl.classList.remove('hide'); //remove the hiden questions in questionContEl so they can be seen
    showNextQuestion()
}

function showNextQuestion() {
    showQuestion[currentQuestionIndex]
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
}

function selectAnswer() {

}

var questions = [{
    question: 'What is 2 + 2 ',
    answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
    ]
}]












//creating an eventlister for the start button, when it is clicked on the function will enable a countdown timer .
// startEl.addEventListener("click", function() {
//     countdown();
// });

//setting the countdown timer to 75 seconds 
// function countdown() {
//     var timeLeft = 75;

//use 'setinterval; method to call a function to be executed every 1000 milliseconds, i.e 1 second 
//when time reaches 0, timeInterval is cleared and function ends. 


//     var timeInterval = setInterval(function() {
//         timeLeft--;
//         timerEl.textContent = timeLeft + "second left to complete quiz"

//         if (timeLeft == 0) {
//             clearInterval(timeInterval);
//             timerEl.textContent = "Time's Up!"
//         }
//     }, 1000);
// }