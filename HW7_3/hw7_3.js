"use strict";

function moreHundred() {
  let num;
  for (let i = 0; i < 10; i++) {
    num = prompt("Введіть число більше 100:");

    if (num === null) {
      console.log("Користувач скасував введення.");
      return;
    }

    num = Number(num);

    if (isNaN(num)) {
      console.log("Ви ввели не число.");
    } else if (num > 100) {
      console.log("Останнє введене число: " + num);
      return;
    } else {
      console.log("Число менше 100. Спробуйте ще раз.");
    }
  }

  console.log("Ви перевищили ліміт спроб.");
}

moreHundred();
