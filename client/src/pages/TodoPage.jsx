import React from "react";
import { useState, useEffect, useRef } from "react";
import TodoBoard from "../components/TodoBoard";
import api from "../utils/api";

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const todoRef = useRef();

  const getTasks = async () => {
    const response = await api.get("/tasks");
    setTodoList(response.data.data);
    console.log("rrr", todoList);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/tasks", {
        task: todoRef.current.value,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("success");
        console.log(todoRef.current.value, "is added");
        todoRef.current.value = "";
        getTasks();
      } else {
        throw new Error("task cannot be added");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = todoList.find((item) => item._id == id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task.isComplete,
      });
      if (response.status === 200) {
        console.log("success");
        getTasks();
      }
    } catch (err) {
      console.log("error is", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (err) {
      console.log("error is", err);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-cyan-500 my-10 text-center">
        What do you have to do today?
      </h1>
      <div className="max-w-5xl border-2 rounded-md p-10">
        <form className="mb-5" onSubmit={addTask}>
          <input
            className="py-2 px-4 mr-10 rounded-md w-[25rem]"
            placeholder="type your tasks here"
            ref={todoRef}
          />
          <button
            className="rounded-md bg-sky-500/50 py-2 px-4 text-white"
            onClick={addTask}
          >
            Add
          </button>
        </form>
        <TodoBoard
          todoList={todoList}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default TodoPage;
