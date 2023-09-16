import TaskManager from "../containers/TaskManager";

export default function App() {
  return (
    <div className="p-[20px] text-center ">
      <h1 className="text-black mb-[20px] text-[24px]">Task Management App</h1>
      <TaskManager />
    </div>
  );
}
