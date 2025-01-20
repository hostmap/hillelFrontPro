"use stict";

function expZeroNan(arre) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arre.length; i++) {
    if (typeof arre[i] === "number" && arre[i] !== 0 && !isNaN(arre[i])) {
      sum += arre[i];
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

const mixArre = ["Привіт", null, "world", NaN, 10];
const average = expZeroNan(mixArre);
console.log(average);
