// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset-button');
const correctGuesses = document.getElementById('correct-guesses');
const incorrectGuesses = document.getElementById('incorrect-guesses');

let guessesLeft = document.getElementById('guesses-left');

let button = document.getElementById('button');

// initialize global state
let remainingTries = 4;
let randomNum = Math.floor(Math.random() * 20) + 1;
let numCorrectGuesses = 0;
let numIncorrectGuesses = 0;

// set event listeners 
button.addEventListener('click', ()=>{
    remainingTries--;

    guessesLeft.textContent = remainingTries;

    const userGuessValue = Number(userGuess.value);

    if (userGuessValue === randomNum) {
        result.textContent = 'You got it!';
        button = document.getElementById('button').disabled = true;
        numCorrectGuesses++;
        correctGuesses.textContent = numCorrectGuesses;
    }

    else if (remainingTries === 0) {
        result.textContent = `Mission failed, you'll get 'em next time. The correct answer was ${randomNum}.`;
        button = document.getElementById('button').disabled = true;
        numIncorrectGuesses++;
        incorrectGuesses.textContent = numIncorrectGuesses;
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
console.log(randomNum);