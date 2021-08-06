const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
  const html = `
        <div class="col" data-task="${id}">
            <div class="card shadow-sm">
                <img src="https://picsum.photos/400" alt="" width="100%" aria-label="Placeholder: Thumbnail">
                <div class="card-body">
                    <ul class="list-group pb-3">
                        <li class="list-group-item text-muted"><img class="m-2" src="./resources/images/plant.svg" width="16px" height="16px" alt="plant icon"> Plant Name: <span class="text-body h6">${name}</span></li>
                        <li class="list-group-item text-muted"><img class="m-2" src="./resources/images/description.svg" width="14px" height="14px" alt="description icon"> Description: <p class="text-body">${description}</p></li>
                        <li class="list-group-item text-muted"><img class="m-2" src="./resources/images/person.svg" width="13px" height="13px" alt="person icon"> Assigned to: <span class="text-body">${assignedTo}</span></li>
                        <li class="list-group-item text-muted"><img class="m-2" src="./resources/images/calendar.svg" width="16px" height="16px" alt="calendar icon"> Due Date: <span class="text-body">${dueDate}</span></li>
                    </ul>
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-success done-button">Mark Complete</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate, status = "TODO") {
    this.tasks.push({
      id: this.currentId,
      name,
      description,
      assignedTo,
      dueDate,
      status,
    });
    this.currentId++;
  }

  render() {
    const tasksHtmlList = [];

    for (let task of this.tasks) {
      // Format Date
      let date = new Date(task.dueDate);
      let formattedDate = `${date.getUTCMonth()}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
      console.log(formattedDate);

      // Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.
      let taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status,
        task.id
      );

      // push the taskHtml into the tasksHtmlList array.
      tasksHtmlList.push(taskHtml);
    }

    // After looping through each task, create a tasksHtml variable, set the variable to a string of HTML of all the tasks by joining the tasksHtmlList array together, separating each task's html with a newline.
    let tasksHtml = tasksHtmlList.join("\n");

    //Select the tasks list element and set its innerHTML to the tasksHtml.
    document.getElementById("task-list").innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    // variables
    let foundTask;

    // Loop over tasks, comparing current task's id with taskId
    for (let task of this.tasks) {
      if (task.id === taskId) {
        foundTask = task;
      }
    }

    return foundTask;
  }
}
