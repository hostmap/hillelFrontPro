"use strict";

const num = prompt("Введіть тризначне число");

function checkNum(num) {
  if (isNaN(num) || num < 100 || num > 999) {
    console.log("Число треба написати тризначне");
    return;
  }

  const hundrs = Math.floor(num / 100);
  const tens = Math.floor((num % 100) / 10);
  const singles = num % 10;

  switch (true) {
    case hundrs === tens && tens === singles:
      console.log("Всі числа однакові");
      break;
    case hundrs === tens:
      console.log("Сотні та десятки однакові");
      break;
    case hundrs === singles:
      console.log("Сотні та одиниці однакові");
      break;
    case tens === singles:
      console.log("Десятки та одиниці однакові");
      break;
    default:
      console.log("Всі числа різні");
  }
}

checkNum(num);
