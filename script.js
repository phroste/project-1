console.log("js-linked");

var correctScore;
correctScore = 0;

var incorrectScore;
incorrectScore = 0;

// create the four divs that are the multiple choice answers
// function createDivs() {
//   for (i = 0; i < 4; i++) {
//     var divs = document.createElement("div");
//     selectTitle.appendChild(divs);
//     divs.classList.add("multiChoice");
//     divs.style.backgroundColor = "green";
//   }
// }

// var q1;
// q1 = prompt("What is the name of Rihanna's first album?");
// if (q1 == "Music of the Sun".toLowerCase()) {
//   correctScore++;
//   // alert("Correct! Your score is: " + correctScore);
//   winScoreAlert();
//   winLossCondition();
// } else {
//   incorrectScore++;
//   // alert("Wrong! Your score is: " + correctScore);
//   loseScoreAlert();
//   winLossCondition();
// }

// example of a question. for the game, replace this with a random song clip played on level load
// var q1;
// q1 = document.createElement("p");
// selectTitle.appendChild(q1);
// q1.innerText = "Name one of Rihanna's albums.";

// var q2;
// q2 = prompt("Name one of the 4 members of The Beatles.");
// if (
//   q2 == "John Lennon".toLowerCase() ||
//   q2 == "George Harrison".toLowerCase() ||
//   q2 == "Ringo Starr".toLowerCase() ||
//   q2 == "Paul McCartney".toLowerCase()
// ) {
//   correctScore++;
//   // alert("Correct! Your score is: " + correctScore);
//   winScoreAlert();
//   winLossCondition();
// } else {
//   incorrectScore++;
//   // alert("Wrong! Your score is: " + correctScore);
//   loseScoreAlert();
//   winLossCondition();
// }

var selectTitle = document.querySelector("h1");

// creating the correct answers scoreboard
var createScoreboard1 = document.createElement("h6");
createScoreboard1.innerText = "Correct: " + correctScore;
selectTitle.appendChild(createScoreboard1);

// creating the incorrect answers scoreboard
var createScoreboard2 = document.createElement("h6");
createScoreboard2.innerText = "Incorrect: " + incorrectScore;
selectTitle.appendChild(createScoreboard2);

// create multiple choice answer buttons
function createButtons() {
  for (i = 0; i < 4; i++) {
    var buttons = document.createElement("button");
    selectTitle.appendChild(buttons);
    buttons.classList.add("multiChoice");
  }
}
createButtons();

var selectButtons = document.querySelectorAll(".multiChoice");
selectButtons[0].innerText = "Rihanna";
selectButtons[1].innerText = "Usher";
selectButtons[2].innerText = "The Rolling Stones";
selectButtons[3].innerText = "The Who";

// function that alerts the winning score
function winScoreAlert() {
  alert("Correct! Your score is: " + correctScore);
}

// function that alerts the losing score
function loseScoreAlert() {
  alert("Wrong! Your score is: " + correctScore);
}

// function that checks if there's a winning or losing condition.
// Game win = 10 correct answers. Game loss = 3 incorrect answers
function winLossCondition() {
  if (correctScore == "10") {
    alert("You win!");
  } else if (incorrectScore == "2") {
    alert("You lost! Play again!");
  }
}

// createDivs();
