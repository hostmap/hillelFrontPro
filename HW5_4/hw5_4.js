"use strict";

const num = Number(prompt("Введіть ціле число:"));

if (isNaN(num) || num <= 1 || !Number.isInteger(num)) {
  console.log(`Введене значення не є цілим числом, більшим за 1.`);
} else {
  let oneNum = true;

  if (num === 2) {
    oneNum = true;
  } else if (num % 2 === 0) {
    oneNum = false;
  } else {
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
      if (num % i === 0) {
        oneNum = false;
        break;
      }
    }
  }

  if (oneNum) {
    console.log(`${num} є простим числом.`);
  } else {
    console.log(`${num} не є простим числом.`);
  }
}
