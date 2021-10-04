// import functions and grab DOM elements

const userGuess = document.getElementById('user-guess');
const result = document.getElementById('result');

const button = document.getElementById('button');

// initialize global state
let remainingTries = 4;
let randomNum = Math.floor(Math.random()*20)+1;


// set event listeners 
button.addEventListener('click', ()=>{
  remainingTries--;

  const userGuessValue = Number(userGuess.value);

  if (userGuessValue === randomNum) {
    result.textContent = 'You got it!'
  }

  else if (remainingTries.value === 0) {
    result.textContent = "Mission failed, you'll get 'em next time"
  } 
  
  else if (userGuessValue > randomNum) {
    result.textContent = 'Guess lower!'
  }

  else if (userGuessValue < randomNum) {
    result.textContent = 'Guess higher!'
  }



  console.log(randomNum);

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
