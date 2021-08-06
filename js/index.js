// Variables and HTML elements
const taskManager = new TaskManager();
const form = document.getElementById("new_task_form");
const taskList = document.querySelector("#task-list");

// Create new task object on submit
form.addEventListener("submit", function (event) {
  // Call addTask with form inputs
  taskManager.addTask(
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value,
    form.elements[3].value
  );
  // call the TaskManager's render method.
  taskManager.render();
  event.preventDefault();
  form.reset();
});

taskList.addEventListener("click", function (event) {
  // Get current task card
  if (event.target.classList.contains("done-button")) {
    parentTask =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  }

  // Get current parentTask's id from DOM
  taskId = Number(parentTask.dataset.task);
  task = taskManager.getTaskById(taskId);
});
