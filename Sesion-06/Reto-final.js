var tasks = [];

var Task = function(description, isCompleted) {
  this.description = description;
  this.isCompleted = isCompleted;
}

function addTask(tasks, description, isCompleted = false) {
  var newTasks = [].concat(tasks);

  newTasks.push(new Task(description, isCompleted));

  return newTasks;
}

tasks = addTask(tasks, 'Some task to do');

console.log(tasks[0]);  // { description: 'Some...', isCompleted: false }
