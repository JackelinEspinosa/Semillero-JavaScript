
var tasks = [];

function addTask() {

  var taskInput = document.getElementById('taskInput');
  var newTaskDescription = taskInput.value;

  if (newTaskDescription.trim() !== '') {
    tasks.push({
      description: newTaskDescription,
      isCompleted: false,
      date: new Date().toLocaleDateString()  
    });
    renderTasks();

    taskInput.value = ''; 
  }
}

function toggleTaskCompleted(index) {
  if (tasks[index]) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    renderTasks();
  }
}
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
function renderTasks() {
  var taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 

  tasks.forEach(function (task, index) {
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="checkbox${index}" ${task.isCompleted ? 'checked' : ''} 
        onchange="toggleTaskCompleted(${index})">
        <label class="custom-control-label" for="checkbox${index}">
          <span>${task.description}</span>
          <small class="text-muted ml-2">${task.date}</small>
        </label>
        <button type="button" class="btn btn-danger btn-sm float-right" onclick="deleteTask(${index})">Eliminar</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}


renderTasks();

// Agregar el event handler al botón
var addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener('click', addTask);
 
