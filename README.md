# ga-project1

README

* What is the game about?

  This is a music-based trivia game. When you click the 'Play' button, a song snippet plays. You choose your answer from a 4 multiple choices.

  If you guess the correct song, the correct scoreboard increases by 1. If you guess the incorrect song, the incorrect scoreboard increases by 1.

  If you answer 7 or more songs correct, you win. If you answer 7 or more songs incorrect, you lose.

* What features did it include?

  The game features a correct and incorrect counter that increases when you answer correct or incorrect, a counter that tracks the question the user is on and increments each round, and event listeners that play audio play on click.

* Were there any particular pain points or unsolved problems you had to manage? (e.g. technological, timing, content, etc.)

  I started populating the questions into my multiple choice buttons manually - hard coding each choice. I was able to figure out how to create the song names and answers as objects and run a loop to populate the multiple choice buttons.

  I also had a problem with my functions interacting and bleeding information into each other. I was moving on to the next round of questions by nesting functions. I would call the 'next round' of questions as a function inside the previous one and continue to do that.

  I resolved this by using helper functions that check if the song name (the string) inside the current multiple choice matches the correctAnswer value inside my object.

  If the song name matches, increment the correctScore counter and call the nextQuestion function that moves to the next round.

  If the song does not match, increment the incorrectScore counter and call the nextQuestion function that moves to the next round.

* List the technologies used

  HTML, CSS, JavaScript

* Describe the approach taken

  My approach was to create a parent container div in HTML and create the rest of the elements inside JavaScript.

  I created my 4 multiple choice buttons and started inputting the song names as innerText individually. I enventually created an object with the song names and populated the buttons using a loop.

  I made song snippets by cutting them in iTunes. In JavaScript, I used the new Audio method and linked them using the filepath name.

  I created functions to check for the correct/incorrect answers, to move on to the next question, and a function to check for the winning and losing conditions.
