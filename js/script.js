let numberElement = document.querySelector('.number');
let guessInput = document.querySelector('.guess');
let checkButton = document.querySelector('.check');
let messageElement = document.querySelector('.message');
let scoreElement = document.querySelector('.score span');
let highscoreElement = document.querySelector('.highscore');

// O'yin uchun muhim o'zgaruvchilar
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

// Sonni tekshirish funktsiyasi
function checkGuess() {
  let guess = Number(guessInput.value);

  if (!guess) {
    messageElement.textContent = 'Noto\'g\'ri kiritish!';
  } else if (guess === secretNumber) {
    messageElement.textContent = 'To\'g\'ri!';
    numberElement.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageElement.textContent =
        guess > secretNumber ? 'Kichikroq!' : 'Kattaroq!';
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = 'O\'yin tugadi!';
      scoreElement.textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
}

// Qayta urinish tugmasi uchun funktsiya
function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 10;
  scoreElement.textContent = score;
  guessInput.value = '';
  messageElement.textContent = 'Loading...';
  numberElement.textContent = '?';
  document.body.style.backgroundColor = '';
}
checkButton.addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', resetGame);