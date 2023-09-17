import Button from "./Button";
function TaskItem({ task, onDelete, num }) {
  return (
    <>
      <div className="bg-[#fff] p-[10px] my-[10px] border-1 border-[#ccc] rounded shadow-[0_2px_4px_rgba-(0,0,0,0.1)]">
        <div className="flex justify-center md:justify-between md:flex-row flex-col items-center flex-1">
          <span>{num < 9 ? `0${num + 1}` : num + 1}</span>
          <span className="md:ml-[150px]">Task Title: {task.name}</span>
          <span>
            <span>Due Date:</span>
            {task.dueDate}
          </span>
        </div>
        <div className="my-[20px]">
          <span className="flex flex-wrap px-4 justify-center">
            {task.taskContent}
          </span>
        </div>
        <Button onDelete={onDelete}>Delete</Button>
      </div>
    </>
  );
}

export default TaskItem;
