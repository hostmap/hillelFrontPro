"use strict";

function remSymb(str, symbRemov) {
  const symbLowCase = symbRemov.toLowerCase();
  const chars = str.split("");
  const fChars = chars.filter(
    (char) => !symbLowCase.includes(char.toLowerCase())
  );
  return fChars.join("");
}

const uStr = prompt("Введіть любий набір символів які потрібно відредагувати");
const symbDel = prompt("Введіть символи які потрібно видалити");

const newStr = remSymb(uStr, symbDel);
console.log(newStr);
