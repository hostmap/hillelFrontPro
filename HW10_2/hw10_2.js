"user strict";

const mixArray = [1, 2, 3, 4, 5, 6, "asas", 7, 8, "8", null, 9, 10];
const valNumber = mixArray.filter((item) => typeof item === "number" && item % 2 === 0);
console.log(valNumber);
