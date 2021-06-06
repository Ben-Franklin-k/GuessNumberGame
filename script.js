'use strict';

let SECRET_VALUE = Math.floor(Math.random() * 20);
let score = 20;
let highscore = 0;

const displayMsg = function (cls, msg) {
  document.querySelector(`.${cls}`).textContent = msg;
};
const changeBckgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === SECRET_VALUE) {
    displayMsg('message', '👏🏻Correct Number');
    changeBckgroundColor('#60b347');
    displayMsg('number', score);
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== SECRET_VALUE) {
    if (score > 1) {
      displayMsg('message', guess > SECRET_VALUE ? 'Too High' : 'Too Low');
      displayMsg('score', --score);
      changeBckgroundColor('#222');
    } else {
      displayMsg('message', 'You Lost');
      displayMsg('score', 0);
      changeBckgroundColor('red');
    }
  } else if (!guess) {
    displayMsg('message', 'There is no input dude🧐');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMsg('message', 'Start guessing...');
  displayMsg('score', score);
  changeBckgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
  SECRET_VALUE = Math.floor(Math.random() * 20);
  displayMsg('number', '?');
});
