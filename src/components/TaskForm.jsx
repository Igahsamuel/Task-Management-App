import  { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ name: "", dueDate: "", taskContent: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ name: "", dueDate: "", taskContent: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <textarea
        type="text"
        placeholder="Task Content"
        value={task.taskContent}
        onChange={(e) => setTask({ ...task, taskContent: e.target.value })}
        required
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
