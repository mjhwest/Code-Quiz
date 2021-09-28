//To retrive scores from local storage 
var retrievedObject = localStorage.getItem('userScore');
console.table('retrievedObject', JSON.parse(retrievedObject));

const scoreList = document.querySelector("#score-history");
//creating array to store scores 
let scores = [];

//render the scores 
function renderScores() {
    //topsscore variable
    var topScores;
    //if statement allowing 6 top scores
    if (scores.length < 6) {
        topScores = scores.length
    } else {
        topScores = 6;
    };
    //running a for loop for scores variable, adding 1 more score until scores is full, ie 6 socres 
    for (var i = 0; i < topScores; i++) {
        let score = scores[i];
        let li = document.createElement("li");
        //textconet to display the score 
        li.textContent = score;
        //appending scorelist
        scoreList.appendChild(li);
    };
};

function init() {
    //retrieing the stored scores using JSON parse, which is the reverse of stringify
    var storedScores = JSON.parse(localStorage.getItem("scoreLog"));
    if (storedScores !== null) {
        scores = storedScores
    };
    console.log(storedScores)

    renderScores()
};

init();




var clear = document.querySelector("#clear-btn");
//to clear all previous scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});