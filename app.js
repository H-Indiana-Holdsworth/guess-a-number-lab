// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset-button');

let guessesLeft = document.getElementById('guesses-left');

let button = document.getElementById('button');


// initialize global state
let remainingTries = 4;
let randomNum = Math.floor(Math.random() * 20) + 1;


// set event listeners 
button.addEventListener('click', ()=>{
    remainingTries--;

    guessesLeft.textContent = remainingTries;

    const userGuessValue = Number(userGuess.value);

    if (userGuessValue === randomNum) {
        result.textContent = 'You got it!';
        button = document.getElementById('button').disabled = true;

    }

    else if (remainingTries === 0) {
        result.textContent = `Mission failed, you'll get 'em next time. The correct answer was ${randomNum}.`;
        button = document.getElementById('button').disabled = true;
    
    } 
  
    else if (userGuessValue > randomNum) {
        result.textContent = 'Guess lower!';
    }

    else if (userGuessValue < randomNum) {
        result.textContent = 'Guess higher!';
    }


});

resetButton.addEventListener('click', () => {
    remainingTries = 4;
    guessesLeft.textContent = remainingTries;
    userGuess.value = '';
    randomNum = Math.floor(Math.random() * 20) + 1;
    button = document.getElementById('button').disabled = false;

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
