var turn = 0;
var allQuestions = [
  {
    question: 1,
    song: "audio/babeimgonnaleaveyou.m4a",
    choices: [
      "You Shook Me",
      "How Many More Times",
      "Good Times, Bad Times",
      "Babe, I'm Gonna Leave You"
    ],
    correctAnswer: "Babe, I'm Gonna Leave You"
  },
  {
    question: 2,
    song: "audio/allalongthewatchtower.m4a",
    choices: [
      "Purple Haze",
      "All Along The Watchtower",
      "The Wind Cries Mary",
      "Foxy Lady"
    ],
    correctAnswer: "All Along The Watchtower"
  },
  {
    question: 3,
    song: "audio/drunkinlove.m4a",
    choices: ["Jealous", "Drunk In Love", "Pretty Hurts", "No Angel"],
    correctAnswer: "Drunk In Love"
  },
  {
    question: 4,
    song: "audio/everytearsdisappears.m4a",
    choices: [
      "Every Tears Disappears",
      "Rattlesnake",
      "Bring Me Your Loves",
      "Regret"
    ],
    correctAnswer: "Every Tears Disappears"
  },
  {
    question: 5,
    song: "audio/howlinforyou.m4a",
    choices: ["Tighten Up", "The Only One", "Howlin' For You", "Next Girl"],
    correctAnswer: "Howlin' For You"
  },
  {
    question: 6,
    song: "audio/imnoangel.m4a",
    choices: ["I'm No Angel", "Honestly OK", "Here With Me", "Thank You"],
    correctAnswer: "I'm No Angel"
  },
  {
    question: 7,
    song: "audio/rumine.m4a",
    choices: ["Arabella", "Fireside", "One For The Road", "R U Mine?"],
    correctAnswer: "R U Mine?"
  },
  {
    question: 8,
    song: "audio/sevennationarmy.m4a",
    choices: [
      "Black Math",
      "Seven Nation Army",
      "Everyone Knows About It",
      "Hypnotize"
    ],
    correctAnswer: "Seven Nation Army"
  },
  {
    question: 9,
    song: "audio/sinceivebeenlovingyou.m4a",
    choices: [
      "Friends",
      "Tangerine",
      "Immigrant Song",
      "Since I've Been Loving You"
    ],
    correctAnswer: "Since I've Been Loving You"
  },
  {
    question: 10,
    song: "audio/slowjamz.m4a",
    choices: ["Last Call", "School Spirit", "Slow Jamz", "Through the Wire"],
    correctAnswer: "Slow Jamz"
  }
];

var correctScore;
correctScore = 0;

var incorrectScore;
incorrectScore = 0;

var currentSong = 0;
var didUserMakeAChoice = false;
console.log(didUserMakeAChoice);

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
  "Instructions: You will listen to 9 song snippets. Choose the correct song title 5 times, you win! Choose the wrong song title 5 times, you lose! Ready to play?";
selectParentDiv.appendChild(gameIntro);

// append start button to parent-div
selectParentDiv.appendChild(createStartButton);

// selectStartButton.addEventListener("click", startGame);

// audio files
var audio1 = new Audio(allQuestions[0].song);
var audio2 = new Audio(allQuestions[1].song);
var audio3 = new Audio(allQuestions[2].song);
var audio4 = new Audio(allQuestions[3].song);
var audio5 = new Audio(allQuestions[4].song);
var audio6 = new Audio(allQuestions[5].song);
var audio7 = new Audio(allQuestions[6].song);
var audio8 = new Audio(allQuestions[7].song);
var audio9 = new Audio(allQuestions[8].song);
var audio10 = new Audio(allQuestions[9].song);

var songs = [
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
  audio10
];

createStartButton.addEventListener("click", startGame);

function startGame(e) {
  // createStartButton.style.display = "none";
  // e.target is giving me an error, but is showing the intro start page. not running into any noticeable errors in game
  e.target.style.display = "none";
  var questions = gameIntro;
  // instructions to click audio play button
  questions.innerText = "Click the button to play the song!";

  createAudioButton();
  createButtons1();
}

function createAudioButton() {
  // creating the 'play' button
  var playButton1 = document.createElement("button");
  playButton1.classList.add("play-button");
  playButton1.innerText = "Play";
  selectParentDiv.appendChild(playButton1);

  playButton1.addEventListener("click", playAudio);
}

// play current song
function playAudio() {
  songs[currentSong].play();
}

// create multiple choice answer buttons
function createButtons1() {
  for (i = 0; i < 4; i++) {
    var buttons = document.createElement("button");
    selectParentDiv.appendChild(buttons);
    buttons.classList.add("multiChoice");
  }
  nextQuestion();
}
startGame();

// function check(event) {
//   if (event.target.innerText == event.target.correctAnswer) {

// checks to see if innerText of the multiChoice button matches the correctAnswer. if correct, increment correctScore. if incorrect, increment incorrectScore. then move on to the next question
function check(e) {
  if (e.target.innerText == e.target.correctAnswer) {
    console.log("Correct Answer!");
    songs[currentSong].pause();
    gameIntro.innerText = "Correct";
    correctScore++;
    createScoreboard1.innerText = "Correct: " + correctScore;
    nextQuestion();
  } else {
    console.log("Wrong Answer!");
    songs[currentSong].pause();
    gameIntro.innerText = "Incorrect";
    incorrectScore++;
    createScoreboard2.innerText = "Incorrect: " + incorrectScore;
    nextQuestion();
  }
}
function nextQuestion() {
  turn++;
  gameIntro.innerText = "Click the button to play the next song!";
  currentSong++;
  var multiChoice = document.querySelectorAll(".multiChoice");
  console.log(multiChoice);
  for (var i = 0; i < multiChoice.length; i++) {
    // looping through the 4 multiChoice buttons, accessing the allQuestions object by bracket/dot notation, and populating the buttons with the values from the allQuestions 'choices' key
    multiChoice[i].innerText = allQuestions[turn].choices[i];
    multiChoice[i].correctAnswer = allQuestions[turn].correctAnswer;
    multiChoice[i].addEventListener("click", check);
  }
  checkForWin();
}

function checkForWin() {
  if (turn == 9) {
    if (correctScore > incorrectScore) {
      // alert("You won!");
      selectParentDiv.innerHTML = `You scored ${correctScore} correct out of 9. You Win!`;
    } else {
      // alert("You lost!");
      selectParentDiv.innerHTML = `You scored ${incorrectScore} incorrect out of 9. You Lose!`;
    }
  }
}
