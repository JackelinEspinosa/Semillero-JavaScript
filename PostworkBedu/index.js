// Definir un array para almacenar las tareas
var tasks = [];

// Función para agregar una nueva tarea
function addTask() {
  // Obtener el elemento de entrada de la tarea
  var taskInput = document.getElementById('taskInput');
  // Obtener la descripción de la nueva tarea
  var newTaskDescription = taskInput.value;
  // Verificar que la descripción no esté vacía antes de agregar la tarea
  if (newTaskDescription.trim() !== '') {
    tasks.push({
      description: newTaskDescription,
      isCompleted: false,
      date: new Date().toLocaleDateString()  
    });
    // Renderizar la lista de tareas actualizada
    renderTasks();
    // Limpiar el campo de entrada de tarea después de agregarla
    taskInput.value = ''; 
  }
}

// Función para cambiar el estado completado/no completado de una tarea
function toggleTaskCompleted(index) {
  if (tasks[index]) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    renderTasks();
  }
}

// Función para eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Función para renderizar la lista de tareas en el documento HTML
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
 