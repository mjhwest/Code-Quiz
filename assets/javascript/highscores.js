//To retrive scores from local storage 
var retrievedObject = localStorage.getItem('userScore');
// console.table('retrievedObject', JSON.parse(retrievedObject));

const scoreList = document.querySelector("#score-history");
//creating array to store scores 
let scores = [];

//disaply the scores 
function displayScores() {
    //topsscore variable
    var topScores;
    //if statement, if scores length is less than 6, topscores = scores x length, topscores can = 6 scores 
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


//create a function to retrieve the scores and sort them into highest / lowest order 
function init() {
    //retrieing the stored scores using JSON parse, which is the reverse of stringify
    var storedScores = JSON.parse(localStorage.getItem("scoreLog"));
    //a represent intials, b present time left 
    storedScores.sort(function(a, b) {
        //use substring method as it will give you the substring from that point to the end, we also use -2 so it gets both numbers left in the time, -1 would only select one digit
        return a.substring(a.length - 2) - b.substring(b.length - 2)
            //it is currently displaying, low to high, so we reverse it so its high to low 
    }).reverse()
    if (storedScores !== null) {
        scores = storedScores
    };
    console.log(storedScores)
        //displauthe scores 
    displayScores()
};

init();




var clear = document.querySelector("#clear-btn");
//to clear all previous scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});