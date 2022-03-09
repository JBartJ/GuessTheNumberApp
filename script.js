'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let alreadyWon = false;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess > 20 || guess < 0) {
    displayMessage('👁‍🗨Choose a number between 1 and 20');
  } else if (score === 1) {
    displayMessage('🔴 You lost !');
    document.querySelector('.score').textContent = 0;
  } else if (alreadyWon !== true) {
    if (!guess) {
      displayMessage('⛔ No number !');
    } else if (guess === secretNumber) {
      displayMessage('🟢 Correct Number!');
      document.querySelector('.number').textContent = guess;
      alreadyWon = true;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;

      if (guess > secretNumber) {
        displayMessage('⬆ Too high !');
        document.querySelector('body').style.backgroundColor = 'maroon';
      } else if (guess < secretNumber) {
        displayMessage('⬇ Too low !');
        document.querySelector('body').style.backgroundColor = 'darkcyan';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  alreadyWon = false;
});
