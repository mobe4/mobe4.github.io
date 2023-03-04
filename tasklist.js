// Get references to DOM elements
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const clearButton = document.getElementById("clear");
const taskList = document.getElementById("task-list");

// Load task list from local storage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Initialize task list with saved tasks
for (const task of savedTasks) {
	addTask(task);
}

// Add task to list and save to local storage
function addTask(task) {
	// Create new list item
	const li = document.createElement("li");
	li.textContent = task;
	
	// Append new list item to task list
	taskList.appendChild(li);
	
	// Add task to saved tasks and update local storage
	savedTasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(savedTasks));
	
	// Clear task input box
	taskInput.value = "";
}

// Clear task list and local storage
function clearTasks() {
	// Remove all list items from task list
	taskList.innerHTML = "";
	
	// Clear saved tasks and local storage
	savedTasks.length = 0;
	localStorage.removeItem("tasks");
}

// Add task when user clicks "Add Task" button
addButton.addEventListener("click", () => {
	const task = taskInput.value.trim();
	if (task !== "") {
		addTask(task);
	}
});

// Clear tasks when user clicks "
