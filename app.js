// import functions and grab DOM elements

const userGuess = document.getElementById('user-guess');
const guessResult = document.getElementById('guess-result');
const gameResult = document.getElementById('game-result');

const button = document.getElementById('button');

// initialize global state
let remainingTries = 4;
let randomNum = Math.floor(Math.random()*20)+1;

// set event listeners 
button.addEventListener('click', ()=>{


});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
