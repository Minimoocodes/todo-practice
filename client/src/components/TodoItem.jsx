const TodoItem = ({ item, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`my-3 flex justify-between items-center p-2 bg-sky-50/50 rounded-md ${
        item.isComplete ? "bg-slate-300" : ""
      }`}
    >
      <h3>{item.task}</h3>
      <div className="flex gap-3">
        <button
          onClick={() => toggleComplete(item._id)}
          className="rounded-md bg-sky-500/50 py-2 px-4 text-white"
        >
          finished
        </button>
        <button
          onClick={() => deleteTask(item._id)}
          className="rounded-md bg-sky-500/50 py-2 px-4 text-white"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
