// Get references to the input field and todo list
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Initialize the list of todo items
let todos = ['Finish homework', 'Do laundry', 'Clean room'];

// Render the list of todo items
function renderTodos() {
  // Clear the existing list
  todoList.innerHTML = '';

  // Loop through the list of todos and add them to the list
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    li.innerText = todo;
    todoList.appendChild(li);
  }
}

// Add a new todo item to the list
function addTodo() {
  // Get the value of the input field
  const todo = todoInput.value.trim();

  // If the input field is empty, don't add a new todo item
  if (!todo) {
    return;
  }

  // Add the new todo item to the list
  todos.push(todo);

  // Render the updated list of todo items
  renderTodos();

  // Clear the input field
  todoInput.value = '';
}

// Render the initial list of todo items
renderTodos();
