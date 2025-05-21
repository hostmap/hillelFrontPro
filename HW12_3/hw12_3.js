"use strict";

document.getElementById("addTask").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", event => {
  if (event.key === "Enter") addTask();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
                    ${taskText}
                    <button class="delete-btn">×</button>
                `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

document.getElementById("taskList").addEventListener("click", event => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
