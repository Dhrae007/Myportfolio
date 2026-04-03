const counter = document.getElementById("task-counter");
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// load tasks when page opens
document.addEventListener("DOMContentLoaded", loadTasks);

button.addEventListener("click", addTask);

function addTask(){
updateCounter();
let taskText = input.value.trim();

if(taskText === ""){
alert("Please enter a task");
return;
}

createTaskElement(taskText);

saveTask(taskText);

input.value = "";
}

function createTaskElement(taskText){

let li = document.createElement("li");

let span = document.createElement("span");
span.innerText = taskText;

span.addEventListener("click", function(){
li.classList.toggle("completed");
});

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "X";

deleteBtn.onclick = function(){
    updateCounter();
li.remove();
removeTask(taskText);
};

li.appendChild(span);
li.appendChild(deleteBtn);

list.appendChild(li);

}

function saveTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks(){
    updateCounter();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
createTaskElement(task);
});

}

function removeTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks = tasks.filter(t => t !== task);

localStorage.setItem("tasks", JSON.stringify(tasks));

}
function updateCounter(){

let tasks = document.querySelectorAll("#todo-list li");

counter.innerText = tasks.length + " tasks remaining";

}