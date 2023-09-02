function TaskItem({ task, onDelete }) {
  return (
    <>
      <div className="task-item">
        <div className="checking">
          <span>{task.name}</span>
          <span>
            <span className="camp">Due Date:</span>
            {task.dueDate}
          </span>
          <button onClick={onDelete}>Delete</button>
        </div>
        <div className="working">
          <span>{task.taskContent}</span>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
