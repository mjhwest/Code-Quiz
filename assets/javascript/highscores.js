//Decalre Variables 
//to show the highscore and to clear the highscores in local storage

var highScore = document.querySelector("#highscorer");
var clear = document.querySelector("#clear-btn");

//To retrive scores from local storage 

// var retrievedObject = localStorage.getItem('userScore');
// console.table('retrievedObject', JSON.parse(retrievedObject));



//To retrive scores from local storage 
var userScore = localStorage.getItem("userScore");
userScore = JSON.parse(userScore);
console.log(userScore) //working






// if (userScore !== null) {
//     for (var i = 0; i < userScore.length; i++) {
//         var creatList = document.createElement("li");
//         createList.textContent = userScore[i].initials = " " + userScore[i].trimLeft;
//         userScore.appendChild(createLi);
//     }
// }

//to clear all previous scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});