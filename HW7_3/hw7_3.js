"use strict";

function moreHundred() {
  let num;
  let iter = 0;

  for (let i = 0; i < 10; i++) {
    iter++;
    num = prompt("Введіть число більше 100:");

    if (num === null) {
      console.log("Користувач скасував введення.");
      console.log("Пройдено ітерацій: " + iter);
      return;
    }

    num = Number(num);

    if (isNaN(num)) {
      console.log("Ви ввели не число.");
      console.log("Пройдено ітерацій: " + iter);
      if (confirm("Продовжити введення?")) {
        continue;
      } else {
        console.log("Ви завершили введення чисел");
        return;
      }
    } else if (num > 100) {
      console.log("Останнє введене число: " + num);
      console.log("Пройдено ітерацій: " + iter);
      return;
    } else {
      console.log("Число менше 100. Спробуйте ще раз.");
    }
  }

  console.log("Ви перевищили ліміт спроб.");
  console.log("Пройдено ітерацій: " + iter);
}

moreHundred();
