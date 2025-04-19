interface Task {
    id: number;
    title: string;
    description: string;
    status: "pending" | "completed";
  }
  
  let tasks: Task[] = [];
  
  function addTask(task: Task) {
    tasks.push(task);
  }
  
  function completeTask(id: number) {
    const task = tasks.find(t => t.id === id);
    if (task) task.status = "completed";
  }
  
  function deleteTask(id: number) {
    tasks = tasks.filter(t => t.id !== id);
  }
  
  function listTasks() {
    return tasks;
  }
  
  // Example Usage
  addTask({ id: 1, title: "Do Homework", description: "Math problems", status: "pending" });
  completeTask(1);
  console.log(listTasks());
  deleteTask(1);
  console.log(listTasks());
  