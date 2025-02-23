"use strict";
let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", addTask);
document
  .getElementById("taskInput")
  .addEventListener("keypress", (e) => e.key === "Enter" && addTask());

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  const task = {
    id: Date.now(),
    text: text,
    created: new Date(),
    completed: null,
    done: false,
  };

  tasks.push(task);
  renderTasks();
  input.value = "";
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = tasks
    .map(
      (task) => `
                <li>
                    <input type="checkbox" data-id="${task.id}">
                    <div class="task-content ${task.done ? "completed" : ""}" 
                         data-id="${task.id}" 
                         style="cursor:pointer;">
                        ${task.text}
                        <div class="task-date">
                            Створено: ${task.created.toLocaleString()}
                            ${
                              task.completed
                                ? `<br>Завершено: ${task.completed.toLocaleString()}`
                                : ""
                            }
                        </div>
                    </div>
                    <button class="delete-btn" data-id="${
                      task.id
                    }">Видалити</button>
                </li>
            `
    )
    .join("");
}

// Обробка подій
document.getElementById("taskList").addEventListener("click", (e) => {
  const taskId = parseInt(e.target.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    tasks = tasks.filter((t) => t.id !== taskId);
    renderTasks();
  } else if (e.target.classList.contains("task-content")) {
    const task = tasks.find((t) => t.id === taskId);
    task.done = !task.done;
    task.completed = task.done ? new Date() : null;
    renderTasks();
  }
});

// Надіслати вибрані
document.getElementById("sendEmailBtn").addEventListener("click", () => {
  const selected = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) =>
    tasks.find((t) => t.id === parseInt(checkbox.dataset.id))
  );

  if (!selected.length) return alert("Виберіть завдання для відправки!");

  const subject = encodeURIComponent("Мій список завдань");
  const body = encodeURIComponent(
    "Вибрані завдання:\n\n" +
      selected
        .map(
          (t) =>
            `${t.done ? "✓" : "◻"} ${t.text}\n` +
            `Створено: ${t.created.toLocaleString()}\n` +
            `${
              t.completed ? `Завершено: ${t.completed.toLocaleString()}\n` : ""
            }`
        )
        .join("\n")
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

// Очистити все
document.getElementById("clearAllBtn").addEventListener("click", () => {
  if (confirm("Видалити всі завдання?")) {
    tasks = [];
    renderTasks();
  }
});

// Додано новий функціонал
let selectedTasks = [];

function openEmailModal() {
  selectedTasks = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => {
    const task = tasks.find((t) => t.id === parseInt(checkbox.dataset.id));
    return { ...task }; // Копіювання об'єкта
  });

  if (!selectedTasks.length) return alert("Виберіть завдання!");

  document.getElementById("previewContent").innerHTML = selectedTasks
    .map(
      (task, index) => `
        <div class="task-edit">
            <input class="edit-field" value="${task.text}" 
                   onchange="updatePreviewTask(${index}, 'text', this.value)">
            <label>Створено: </label>
            <input type="datetime-local" 
                   value="${toDatetimeLocal(task.created)}" 
                   class="edit-field"
                   onchange="updatePreviewTask(${index}, 'created', new Date(this.value))">
            <label>Завершено: </label>
            <input type="datetime-local" 
                   value="${
                     task.completed ? toDatetimeLocal(task.completed) : ""
                   }" 
                   class="edit-field"
                   onchange="updatePreviewTask(${index}, 'completed', this.value ? new Date(this.value) : null)">
        </div>
    `
    )
    .join("");

  document.getElementById("emailModal").style.display = "block";
}

function updatePreviewTask(index, field, value) {
  selectedTasks[index][field] = value;
}

function toDatetimeLocal(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);
}

function sendEmail(provider) {
  const body = selectedTasks
    .map(
      (task) =>
        `Завдання: ${task.text}\n` +
        `Створено: ${task.created.toLocaleString()}\n` +
        `Завершено: ${
          task.completed ? task.completed.toLocaleString() : "Не завершено"
        }\n` +
        `Статус: ${task.done ? "Виконано" : "Не виконано"}`
    )
    .join("\n\n");

  let url;
  switch (provider) {
    case "gmail":
      url = `https://mail.google.com/mail/?view=cm&fs=1&body=${encodeURIComponent(
        body
      )}`;
      break;
    case "ukrnet":
      url = `https://mail.ukr.net/compose/?body=${encodeURIComponent(body)}`;
      break;
  }

  window.open(url, "_blank");
  closeModal();
}

function closeModal() {
  document.getElementById("emailModal").style.display = "none";
}

// Оновлюємо кнопку відправки
document
  .getElementById("sendEmailBtn")
  .addEventListener("click", openEmailModal);
