"use strict";

const container = document.getElementById("buttonContainer");
const messageOutput = document.getElementById("messageOutput");

container.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (button) {
    const buttonId = button.id;
    const buttonText = button.textContent;

    const message = `Клікнуто кнопку: 
                ID: ${buttonId}, 
                Текст: "${buttonText}"`;

    messageOutput.textContent = message;

    console.log(message);
  }
});
