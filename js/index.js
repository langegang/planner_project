let form = document.getElementById("new_task_submit")
const myTask = new TaskManager();
myTask.addTask('Water cactus', '2 years old', 'Mom', 'Yesterday');
console.log(myTask.tasks);
form.addEventListener("submit", function(event){
    console.log(form.elements[0].value);
    event.preventDefault()
});