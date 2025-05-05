"use strict";

// let countdownTime = 60; // Время в секундах (1 минута = 60 секунд)
// let timerDisplay = document.getElementById('timer');
// let timerInterval;

// function formatTime(seconds) {
//   let minutes = Math.floor(seconds / 60);
//   let remainingSeconds = seconds % 60;
//   return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// function updateTimer() {
//   timerDisplay.textContent = formatTime(countdownTime);
//   if (countdownTime <= 0) {
//     clearInterval(timerInterval);
//     timerDisplay.textContent = "Таймер завершен!";
//   } else {
//     countdownTime--;
//   }
// }

// timerInterval = setInterval(updateTimer, 1000);
// updateTimer(); // Вызов для немедленного отображения начального значения

// let minutes = parseInt(prompt("Введите количество минут:"));
// let seconds = parseInt(prompt("Введите количество секунд:"));
// let countdownTime = minutes * 60 + seconds;
// let timerDisplay = document.getElementById('timer');
// let timerInterval;
// let isRed = true;

// function formatTime(seconds) {
//   let minutes = Math.floor(seconds / 60);
//   let remainingSeconds = seconds % 60;
//   return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
// }

// function updateTimer() {
//   timerDisplay.textContent = formatTime(countdownTime);
//   timerDisplay.style.color = isRed ? 'red' : 'blue';
//   isRed = !isRed;

//   if (countdownTime <= 0) {
//     clearInterval(timerInterval);
//     timerDisplay.textContent = "Таймер завершен!";
//   } else {
//     countdownTime--;
//   }
// }

// if (!isNaN(minutes) && !isNaN(seconds)) {
//   timerInterval = setInterval(updateTimer, 1000);
//   updateTimer(); // Вызов для немедленного отображения начального значения
// } else {
//   timerDisplay.textContent = "Некорректный ввод";
// }
let countdownTime = 0;
let timerDisplay = document.getElementById('timer');
let timerInterval;
let isRed = true;
let isRunning = false;
let startButton = document.getElementById('start');
let setTimerButton = document.getElementById('setTimer');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimer() {
  timerDisplay.textContent = formatTime(countdownTime);
  timerDisplay.style.color = isRed ? 'red' : 'blue';
  isRed = !isRed;

  if (countdownTime <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "Таймер завершен!";
    isRunning = false;
  } else {
    countdownTime--;
  }
}

function startTimer() {
  if (!isRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    isRunning = true;
    updateTimer();
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function setTimer() {
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);
  if (!isNaN(minutes) && !isNaN(seconds)) {
    countdownTime = minutes * 60 + seconds;
    updateTimer();
  } else {
    timerDisplay.textContent = "Некорректный ввод";
  }
}

setTimerButton.addEventListener('click', setTimer);
startButton.addEventListener('click', startTimer);
timerDisplay.addEventListener('click', stopTimer);

// Инициализация таймера с "00:00"
timerDisplay.textContent = "00:00";