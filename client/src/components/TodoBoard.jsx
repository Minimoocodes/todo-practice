import TodoItem from "./TodoItem";

const TodoList = ({ todoList, toggleComplete, deleteTask }) => {
  return (
    <div className>
      {todoList.length > 0 ? (
        todoList.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <h2>There's nothing to do yet. Chill?</h2>
      )}
    </div>
  );
};

export default TodoList;
