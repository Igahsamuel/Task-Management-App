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
      const changes = [...state];
      changes.splice(action.index, 1);
      return changes;
    }
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(reducer, []);
  // Function to add a new task
  const addTask = (task) => {
    dispatch({ type: "addTask", task });
  };

  // Function to delete a task
  const deleteTask = (index) => {
    dispatch({ type: "deleteTask", index });
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) dispatch({ type: "deleteTask", index });
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
