"use strict";

let N = prompt("Введіть ціле число N: ");

if (N === null) {
  console.log("Дані відсутні");
} else if (N === "" || N === " ") {
  console.log("Дані відсутні");
} else {
  N = Number(N);

  if (isNaN(N)) {
    console.log("Число, що Ви ввели, не є числом");
  } else if (!Number.isInteger(N)) {
    console.log("Число, що Ви ввели, не є цілим");
  } else if (N < 0) {
    console.log("Число N має бути невід'ємним");
  } else {
    console.log(`Числа, квадрат яких не перевищує ${N}: `);

    for (let i = 1; i <= 100; i++) {
      if (i * i <= N) {
        console.log(i);
      }
    }
  }
}
