"use strict";

const text = document.getElementById("text");
const button = document.getElementById("button");

let originalColor = text.style.color; 

button.addEventListener("click", () => {
  if (text.style.color === originalColor) {
    text.style.color = "red"; 
  } else {
    text.style.color = originalColor; 
  }
});
