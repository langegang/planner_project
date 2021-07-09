// Variables
const myTasks = new TaskManager();
let form = document.getElementById("new_task_form");

// Test task
// myTasks.addTask('Water cactus', '2 years old', 'Mom', 'Yesterday');

// Create new task object on submit
form.addEventListener("submit", function(event){
    // Call addTask with form inputs
    myTasks.addTask(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value,
        form.elements[3].value
    )
    console.log(myTasks.tasks);
    event.preventDefault();
    form.reset();
});