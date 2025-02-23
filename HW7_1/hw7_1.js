"use strict";

const addClose = (() => {
  let closerAdd = 0;
  return (nowAdd) => {
    closerAdd += nowAdd;
    return closerAdd;
  };
})();
console.log(addClose(1));
console.log(addClose(2));
console.log(addClose(3));
console.log(addClose(4));
console.log(addClose(10));
console.log(addClose(5));
