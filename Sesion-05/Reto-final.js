var task1 = {
    description: 'Some task to do',
    isCompleted: false
  }
  
  var task2 = {
    description: 'Another task to do',
    isCompleted: false
  }
  
  var task3 = {
    description: 'One more task to do',
    isCompleted: false
  }

  var tasks = [
    {
      description: 'Some task to do',
      isCompleted: false
    },
    {
      description: 'Another task to do',
      isCompleted: false
    },
    {
      description: 'One more task to do',
      isCompleted: false
    }
  ]
  var Task = function(description, isCompleted) {
    this.description = description;
    this.isCompleted = isCompleted;
  }

  var tasks = [];

function addTask(description, isCompleted = false) {
  tasks.push(new Task(description, isCompleted));
}

addTask('Some task to do');

console.log(tasks[0]);  // { description: 'Some...', isCompleted: false }

addTask('Completed task', true);

console.log(tasks[1]);  // { description: 'Completed...', isCompleted: true }