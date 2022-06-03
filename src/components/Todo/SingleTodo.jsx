import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/actions/todoActions";

const SingleTodo = () => {
  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.data}
          <div>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleTodo;
