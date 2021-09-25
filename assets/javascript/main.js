// Declare the variables linked to HTML, 
//querySelector(xxxx) allows us to work within that specific selector element i.e wrapper
//documet applies that changes to the entire document 

var wrapper = document.querySelector(".wrapper");
var questionContainer = document.querySelector(".questionContainer");
var timerEl = document.querySelector("#countdown");
var startEl = document.querySelector("#start")


//First thing i want to do based on the acceptance criteria is work on the clock /timer

//creating an eventlister for the start button, when it is clicked on the function will enable a countdown timer .
startEl.addEventListener("click", function() {
    countdown();
});

//setting the countdown timer to 75 seconds 
function countdown() {
    var timeLeft = 75;

    //use 'setinterval; method to call a function to be executed every 1000 milliseconds, i.e 1 second 
    //when time reaches 0, timeInterval is cleared and function ends. 
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + "second left in the quiz..."

        if (timeLeft == 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!"
        }
    }, 1000);
}