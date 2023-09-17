import { useReducer } from "react";
import TaskList from "../src/components/TaskList";
import TaskForm from "../src/components/TaskForm";
import EmptyState from "../src/components/EmptyState";

function reducer(state, action) {
  switch (action.type) {
    case "addTask": {
      return [...state, action.task];
    }
    case "deleteTask": {
      return state.filter((task) => task.id !== action.deleteId);
    }
    default: {
      console.log(action.type);
      return state;
    }
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(reducer, []);
  // Function to add a new task
  const id = crypto.randomUUID();
  const addTask = (task) => {
    const newTask = {
      id: id,
      name: task.name,
      dueDate: task.dueDate,
      taskContent: task.taskContent,
    };
    dispatch({ type: "addTask", task: newTask });
  };

  // Function to delete a task
  const deleteTask = (deleteId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      dispatch({ type: "deleteTask", deleteId: deleteId });
    }
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
