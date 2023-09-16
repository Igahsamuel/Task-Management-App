export default function Button({ children, onDelete }) {
  return (
    <>
      <button
        onClick={onDelete}
        className="bg-[#007bff] text-[#fff]  rounded-md py-[10px] px-[20px] cursor-pointer my-4 hover:bg-[#0056b3]"
      >
        {children}
      </button>
    </>
  );
}
