"use strict";

const num = 20406;

function divisionNum(num) {
  const numStr = num.toString();
  const divis = numStr.split("");
  const res = divis.join(" ");
  return res;
}

const division = divisionNum(num);
console.log(division);
