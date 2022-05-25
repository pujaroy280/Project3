let checkBtn = document.getElementById('check');
let output = document.getElementById('outputtext');
let guessSlot = document.getElementById('guesses');
let remaining = document.getElementById('remaining');
let restart = document.getElementById('restart');
let score = document.getElementById('score');
let img = document.getElementById('img');
let numGuessesLeft = 10
let highScore = 10
let hScore = 0
let randomNumber = parseInt((Math.random()*100)+1)

let usedValues = [];
checkBtn.addEventListener('click', function(){
let input = document.getElementById('userInput').value;



if (isNaN(input)){
    output.innerHTML = 'Please enter a valid number.'
} else if (input < 1) {
    output.innerHTML = 'Please enter a number greater than 1!'
} else if (input > 100){
    output.innerHTML = 'Please enter a number less than 100!'
} else if (usedValues.includes(input)){
    output.innerHTML = 'You already used this number!'
} else {
    usedValues.push(input);
    if (input == randomNumber){
      checkBtn.style.display = "none";
      img.src = "https://cdn-icons-png.flaticon.com/512/3076/3076886.png"
      output.innerHTML = `Congrats! you guessed right, your number was ${randomNumber}.`
      guessSlot.innerHTML += `${input} `;
      restart.innerHTML = 'Play Again';
      hScore = 10-numGuessesLeft+1;
      if (hScore < highScore) {
        highScore = hScore
      };
      score.innerHTML = `${highScore} attempts used.`
    } else if (input < randomNumber){
      output.innerHTML = "You guessed too low!"
      guessSlot.innerHTML += `${input} `;
      numGuessesLeft--
      remaining.innerHTML = `${numGuessesLeft}`
    }; if (input > randomNumber){
      output.innerHTML = "You guessed too high!"
      guessSlot.innerHTML += `${input} `;
      numGuessesLeft--
      remaining.innerHTML = `${numGuessesLeft}`
    }; if (numGuessesLeft === 0) {
      img.src = "https://cdn-icons-png.flaticon.com/512/3076/3076989.png"
      output.innerHTML = `Game Over! The number was ${randomNumber}.`
      checkBtn.style.display = "none";
      restart.innerHTML = 'Try Again';
    }
  }
});


restart.addEventListener('click', function(){
  randomNumber = parseInt((Math.random()*100)+1)
  img.src = "https://cdn-icons-png.flaticon.com/128/7386/7386708.png"
  usedValues = [];
  remaining.innerHTML = `10`
  restart.innerHTML = 'Restart';
  checkBtn.style.display = "";
  guessSlot.innerHTML = '';
  output.innerHTML = 'Enter a number below';
  numGuessesLeft = 10
})
