//To retrive scores from local storage 
var retrievedObject = localStorage.getItem('userScore');
console.table('retrievedObject', JSON.parse(retrievedObject));

const scoreList = document.querySelector("#score-history");

let scores = [];

function renderScores() {
    var topScores;
    if (scores.length < 6) {
        topScores = scores.length
    } else {
        topScores = 6;
    };

    for (var i = 0; i < topScores; i++) {
        let score = scores[i];
        let li = document.createElement("li");
        li.textContent = score;
        scoreList.appendChild(li);
    };
};

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scoreLog"));
    if (storedScores !== null) {
        scores = storedScores
    };
    console.log(storedSc)

    renderScores()
};

init();




var clear = document.querySelector("#clear-btn");
//to clear all previous scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});