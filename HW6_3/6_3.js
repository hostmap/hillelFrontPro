"use strict";

function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 5);
console.log(array);
