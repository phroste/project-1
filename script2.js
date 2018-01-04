console.log("js-linked");

var correctScore;
correctScore = 0;

var incorrectScore;
incorrectScore = 0;

// select the parent-div container by id
var selectParentDiv = document.querySelector("#parent-div");

// creating the correct answers scoreboard
var createScoreboard1 = document.createElement("h6");
createScoreboard1.innerText = "Correct: " + correctScore;
selectParentDiv.appendChild(createScoreboard1);

// creating the incorrect answers scoreboard
var createScoreboard2 = document.createElement("h6");
createScoreboard2.innerText = "Incorrect: " + incorrectScore;
selectParentDiv.appendChild(createScoreboard2);

// create, select and give id to start button
var createStartButton = document.createElement("button");
var selectStartButton = document.querySelector("#start");
createStartButton.setAttribute("id", "start");
createStartButton.innerText = "Start Game";

// create and append gameIntro to parent-div container
var gameIntro = document.createElement("p");
gameIntro.innerText =
  "Instructions: You will listen to a 5-second song snippet. Choose the correct song title 10 times, you win! Choose the wrong song title 3 times, you lose! Ready to play?";
selectParentDiv.appendChild(gameIntro);

// append start button to parent-div
selectParentDiv.appendChild(createStartButton);

// selectStartButton.addEventListener("click", startGame);

// var questions = [{
//   question: 'Name a song performed by Rihanna',
//   answer: ['Move Your Body', 'Call Me', 'Love Song', 'S&M'],
//   correctAnswer: 3
// },
// {
//   question: ''
// }
// }]

createStartButton.addEventListener("click", startGame);

function startGame() {
  createStartButton.style.display = "none";
  var questions = gameIntro;
  questions.innerText = "Name a song performed by Rihanna.";
  createButtons();
}

// create multiple choice answer buttons
function createButtons() {
  for (i = 0; i < 4; i++) {
    var buttons = document.createElement("button");
    selectParentDiv.appendChild(buttons);
    buttons.classList.add("multiChoice");
    buttons.addEventListener("click", ques1);
  }
}

function ques1() {
  var multiChoice1 = document.querySelectorAll(".multiChoice");
  multiChoice1[0].innerText = "Rain On Me";
  multiChoice1[1].innerText = "Call Me";
  multiChoice1[2].innerText = "S&M";
  multiChoice1[3].innerText = "Pony";
}
