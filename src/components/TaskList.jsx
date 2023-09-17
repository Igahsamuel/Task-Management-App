import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task, id) => (
        <TaskItem
          key={task.id}
          task={task}
          num={id}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
