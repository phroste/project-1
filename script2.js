console.log("js-linked");

var allQuestions = [
  {
    song: "audio/babeimgonnaleaveyou.m4a",
    choices: [
      "You Shook Me",
      "How Many More Times",
      "Good Times, Bad Times",
      "Babe, I'm Gonna Leave You"
    ],
    correctAnswer: 3
  },
  {
    song: "audio/allalongthewatchtower.m4a",
    choices: [
      "Purple Haze",
      "All Along The Watchtower",
      "The Wind Cries Mary",
      "Foxy Lady"
    ],
    correctAnswer: 1
  },
  {
    song: "audio/drunkinlove.m4a",
    choices: ["Jealous", "Drunk In Love", "Pretty Hurts", "No Angel"],
    correctAnswer: 1
  },
  {
    song: "audio/everytearsdisappears.m4a",
    choices: [
      "Every Tears Disappears",
      "Rattlesnake",
      "Bring Me Your Loves",
      "Regret"
    ],
    correctAnswer: 0
  },
  {
    song: "audio/howlinforyou.m4a",
    choices: ["Tighten Up", "The Only One", "Howlin' For You", "Next Girl"],
    correctAnswer: 2
  },
  {
    song: "audio/imnoangel.m4a",
    choices: ["I'm No Angel", "Honestly OK", "Here With Me", "Thank You"],
    correctAnswer: 0
  },
  {
    song: "audio/rumine.m4a",
    choices: ["Arabella", "Fireside", "One For The Road", "R U Mine?"],
    correctAnswer: 3
  },
  {
    song: "audio/sevennationarmy.m4a",
    choices: [
      "Black Math",
      "Seven Nation Army",
      "Everyone Knows About It",
      "Hypnotize"
    ],
    correctAnswer: 1
  },
  {
    song: "audio/sinceivebeenlovingyou.m4a",
    choices: [
      "Friends",
      "Tangerine",
      "Immigrant Song",
      "Since I've Been Loving You"
    ],
    correctAnswer: 3
  },
  {
    song: "audio/slowjamz.m4a",
    choices: ["Last Call", "School Spirit", "Slow Jamz", "Through the Wire"],
    correctAnswer: 2
  }
];

// var grid = {
//   rows: [],
//   cols: [],
//   pushToRow: function(val) {
//     this.rows.push(val);
//   }
// };

// grid.rows;
// grid.pushToRow(4);

// var ques = {
//   songs: [],
//   questions: [],
//   pushToQuestions: function(q) {
//     this.questions.push(q);
//   }
// };

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
  "Instructions: You will listen to a 10-second song snippet. Choose the correct song title 10 times, you win! Choose the wrong song title 3 times, you lose! Ready to play?";
selectParentDiv.appendChild(gameIntro);

// append start button to parent-div
selectParentDiv.appendChild(createStartButton);

// selectStartButton.addEventListener("click", startGame);

// audio files
var audio1 = new Audio("audio/babeimgonnaleaveyou.m4a");
var audio2 = new Audio("audio/allalongthewatchtower.m4a");
var audio3 = new Audio("audio/drunkinlove.m4a");
var audio4 = new Audio("audio/everytearsdisappears.m4a");
var audio5 = new Audio("audio/howlinforyou.m4a");
var audio6 = new Audio("audio/imnoangel.m4a");
var audio7 = new Audio("audio/rumine.m4a");
var audio8 = new Audio("audio/sevennationarmy.m4a");
var audio9 = new Audio("audio/sinceivebeenlovingyou.m4a");
var audio10 = new Audio("audio/slowjamz.m4a");

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

function startGame() {
  createStartButton.style.display = "none";
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
  ques1();
}

function ques1() {
  var multiChoice1 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice1.length; i++) {
    // looping through the 4 multiChoice buttons, accessing the allQuestions array object by bracket/dot notation, and populating the buttons with the values from the allObjects 'choices' key
    multiChoice1[i].innerText = allQuestions[0].choices[i];
  }
  multiChoice1[3].classList.add("correct");
  // multiChoice1.forEach(function(e) {
  //   e.addEventListener("click", correctChoice);
  // });
  multiChoice1[0].addEventListener("click", incorrect1);
  multiChoice1[1].addEventListener("click", incorrect1);
  multiChoice1[2].addEventListener("click", incorrect1);
  multiChoice1[3].addEventListener("click", answer1);
}

// i want to say if a 'multiChoice' button has the class 'correct', when clicked, a 'correct' alert appears, you gain 1 'correct' point, and you move on to the next level
// else, an 'incorrect' alert pops up and you earn 1 'incorrect' point and move on to the next level
// function correctChoice() {
//   didUserMakeAChoice = true;
//   console.log(didUserMakeAChoice);
//   alert("Correct!");
//   // gameIntro.innerText = "Correct!";
//   correctScore++;
//   songs[currentSong].pause();
//   songs[currentSong].currentTime = 0;
//   currentSong++;
//   createScoreboard1.innerText = "Correct: " + correctScore;
//   ques2();
// }

// function answer() {
//   this.forEach(function(e) {
//     if (e.contains(".correct")) {
//       alert("correct!");
//     } else {
//       alert("incorrect!");
//     }
//   });
// }

function incorrect1() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;

  ques2();
}

function answer1() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");
  // gameIntro.innerText = "Correct!";
  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques2();
}

function ques2() {
  var playButton = document.querySelector(".play-button");
  var multiChoice2 = document.querySelectorAll(".multiChoice");

  for (i = 0; i < multiChoice2.length; i++) {
    multiChoice2[i].innerText = allQuestions[1].choices[i];
  }
  multiChoice2[0].addEventListener("click", incorrect2);
  multiChoice2[1].addEventListener("click", answer2);
  multiChoice2[2].addEventListener("click", incorrect2);
  multiChoice2[3].addEventListener("click", incorrect2);
  // }
}

function incorrect2() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques3();
}

function answer2() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");
  // gameIntro.innerText = "Correct!";

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques3();
}

function ques3() {
  var playButton = document.querySelector(".play-button");
  var multiChoice3 = document.querySelectorAll(".multiChoice");

  for (i = 0; i < multiChoice3.length; i++) {
    multiChoice3[i].innerText = allQuestions[2].choices[i];
  }
  multiChoice3[0].addEventListener("click", incorrect3);
  multiChoice3[1].addEventListener("click", answer3);
  multiChoice3[2].addEventListener("click", incorrect3);
  multiChoice3[3].addEventListener("click", incorrect3);
  // }
}

function incorrect3() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques4();
}

function answer3() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques4();
}

function ques4() {
  var playButton = document.querySelector(".play-button");
  var multiChoice4 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice4.length; i++) {
    multiChoice4[i].innerText = allQuestions[3].choices[i];

    multiChoice4[0].addEventListener("click", answer4);
    multiChoice4[1].addEventListener("click", incorrect4);
    multiChoice4[2].addEventListener("click", incorrect4);
    multiChoice4[3].addEventListener("click", incorrect4);
  }
}

function incorrect4() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques5();
}

function answer4() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques5();
}

function ques5() {
  var playButton = document.querySelector(".play-button");
  var multiChoice5 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice5.length; i++) {
    multiChoice5[i].innerText = allQuestions[4].choices[i];
  }
  multiChoice5[0].addEventListener("click", incorrect5);
  multiChoice5[1].addEventListener("click", incorrect5);
  multiChoice5[2].addEventListener("click", answer5);
  multiChoice5[3].addEventListener("click", incorrect5);
}

function incorrect5() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques6();
}

function answer5() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques6();
}

function ques6() {
  var playButton = document.querySelector(".play-button");
  var multiChoice6 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice6.length; i++) {
    multiChoice6[i].innerText = allQuestions[5].choices[i];
  }
  multiChoice6[0].addEventListener("click", answer6);
  multiChoice6[1].addEventListener("click", incorrect6);
  multiChoice6[2].addEventListener("click", incorrect6);
  multiChoice6[3].addEventListener("click", incorrect6);
}

function incorrect6() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques7();
}

function answer6() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques7();
}

function ques7() {
  var playButton = document.querySelector(".play-button");
  var multiChoice7 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice7.length; i++) {
    multiChoice7[i].innerText = allQuestions[6].choices[i];
  }
  multiChoice7[0].addEventListener("click", answer7);
  multiChoice7[1].addEventListener("click", incorrect7);
  multiChoice7[2].addEventListener("click", incorrect7);
  multiChoice7[3].addEventListener("click", incorrect7);
}

function incorrect7() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques8();
}

function answer7() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques8();
}

function ques8() {
  var playButton = document.querySelector(".play-button");
  var multiChoice8 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice8.length; i++) {
    multiChoice8[i].innerText = allQuestions[7].choices[i];
  }
  multiChoice8[0].addEventListener("click", answer8);
  multiChoice8[1].addEventListener("click", incorrect8);
  multiChoice8[2].addEventListener("click", incorrect8);
  multiChoice8[3].addEventListener("click", incorrect8);
}

function incorrect8() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques9();
}

function answer8() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques9();
}

function ques9() {
  var playButton = document.querySelector(".play-button");
  var multiChoice9 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice9.length; i++) {
    multiChoice9[i].innerText = allQuestions[8].choices[i];
  }
  multiChoice9[0].addEventListener("click", answer9);
  multiChoice9[1].addEventListener("click", incorrect9);
  multiChoice9[2].addEventListener("click", incorrect9);
  multiChoice9[3].addEventListener("click", incorrect9);
}

function incorrect9() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  ques10();
}

function answer9() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  ques10();
}

function ques10() {
  var playButton = document.querySelector(".play-button");
  var multiChoice10 = document.querySelectorAll(".multiChoice");
  for (i = 0; i < multiChoice10.length; i++) {
    multiChoice10[i].innerText = allQuestions[9].choices[i];
  }
  multiChoice10[0].addEventListener("click", answer10);
  multiChoice10[1].addEventListener("click", incorrect10);
  multiChoice10[2].addEventListener("click", incorrect10);
  multiChoice10[3].addEventListener("click", incorrect10);
}

function incorrect10() {
  alert("Wrong!");
  // gameIntro.innerText = "Wrong!";
  incorrectScore++;
  createScoreboard2.innerText = "Incorrect: " + incorrectScore;
  // ques10();
}

function answer10() {
  didUserMakeAChoice = true;
  console.log(didUserMakeAChoice);
  alert("Correct!");

  correctScore++;
  songs[currentSong].pause();
  songs[currentSong].currentTime = 0;
  currentSong++;
  createScoreboard1.innerText = "Correct: " + correctScore;
  // ques10();
}

// function playAudio1() {
//   audio1.play();
// }
