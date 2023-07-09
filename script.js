'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMesage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMesage('No Number🤦‍♂️');

    // When Player wins
  } else if (guess === secretnumber) {
    displayMesage('🎉correct Number!');
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMesage(guess > secretnumber ? 'To high' : 'To low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesage('You lost the game🧨');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When gueass is too high
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Math.trunc(Math.random() * 20) + 1;
  displayMesage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
