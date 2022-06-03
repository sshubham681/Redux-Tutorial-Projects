import React from "react";
import SingleTodo from "./SingleTodo";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  return (
    <div>
      <h1>Todo using Redux</h1>
      <TodoForm />
      <SingleTodo />
    </div>
  );
};

export default TodoApp;
