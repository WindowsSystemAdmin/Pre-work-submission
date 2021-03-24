// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [3, 1, 4, 3, 2, 1, 2, 4, 3, 1, 4, 3, 2, 1, 2, 4];
pattern[1] = Math.floor(Math.random() * 8 + 1);
pattern[2] = Math.floor(Math.random() * 8 + 1);
pattern[3] = Math.floor(Math.random() * 8 + 1);
pattern[4] = Math.floor(Math.random() * 8 + 1);
pattern[5] = Math.floor(Math.random() * 8 + 1);
pattern[6] = Math.floor(Math.random() * 8 + 1);
pattern[7] = Math.floor(Math.random() * 8 + 1);
pattern[8] = Math.floor(Math.random() * 8 + 1);
pattern[9] = Math.floor(Math.random() * 8 + 1);
pattern[10] = Math.floor(Math.random() * 8 + 1);
pattern[11] = Math.floor(Math.random() * 8 + 1);
pattern[12] = Math.floor(Math.random() * 8 + 1);
pattern[13] = Math.floor(Math.random() * 8 + 1);
pattern[14] = Math.floor(Math.random() * 8 + 1);
pattern[15] = Math.floor(Math.random() * 8 + 1);
pattern[16] = Math.floor(Math.random() * 8 + 1);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 185.0,
  2: 207.65,
  3: 233.08,
  4: 246.94,
  5: 277.18,
  6: 311.13,
  7: 349.23,
  8: 369.99
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}
function loseGame() {
  stopGame();
  console.log("Game Over. You lost.");
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  console.log("Game Over. You won!");
  alert("Game Over. You won!");
}
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  volume = this.value / 100;
};
