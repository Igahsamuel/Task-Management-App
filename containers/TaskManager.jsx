import { useState } from "react";
import TaskList from "../src/components/TaskList";
import TaskForm from "../src/components/TaskForm";
import EmptyState from "../src/components/EmptyState";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    console.log(newTasks);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) setTasks(newTasks);
  };
  return (
    <div>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
export default TaskManager;
