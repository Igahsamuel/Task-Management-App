import { useReducer } from "react";
import Button from "./Button";

function reducer(state, action) {
  switch (action.type) {
    case "initialCase": {
      return {
        name: "",
        dueDate: "",
        taskContent: "",
      };
    }
    case "updateSubmit": {
      return { ...state, [action.nameTitle]: action.content };
    }
    default: {
      console.log(action.type);
    }
  }
}

function TaskForm({ addTask }) {
  const [task, dispatch] = useReducer(reducer, {
    name: "",
    dueDate: "",
    taskContent: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    dispatch({ type: "initialCase" });
  };

  const handleChanges = (nameTitle, content) => {
    dispatch({
      type: "updateSubmit",
      nameTitle,
      content,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-white p-[20px] rounded-md shadow-[0_0_5px_rgba-(0,0,0,0.1)] mb-[20px]"
    >
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => handleChanges("name", e.target.value)}
        required
        className="w-full p-[10px] my-[5px] rounded-md border-[#ccc] border-2"
      />
      <textarea
        type="text"
        placeholder="Task Content"
        value={task.taskContent}
        onChange={(e) => handleChanges("taskContent", e.target.value)}
        required
        className="w-full p-[10px] my-[5px] rounded-md border-[#ccc] border-2"
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => handleChanges("dueDate", e.target.value)}
        required
        className="w-full p-[10px] my-[5px] rounded-md border-[#ccc] border-2"
      />
      <Button
      // type="submit"
      >
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;
