//Decalre Variables 
//to show the highscore and to clear the highscores in local storage

var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear-btn");

//To retrive scores from local storage 

// var retrievedObject = localStorage.getItem('userScore');
// console.table('retrievedObject', JSON.parse(retrievedObject));



//To retrive scores from local storage 
var userScore = localStorage.getItem("userScore");
userScore = JSON.parse(userScore);
console.log(userScore) //working








//to clear all previous scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});