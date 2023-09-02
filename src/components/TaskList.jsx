
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={() => deleteTask(index)} />
      ))}
    </div>
  );
}

export default TaskList;
