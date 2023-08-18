import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store/store";
import { ITodo, addTodo, deleteTodo } from "./reducers/todoSlice";

const App = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();


  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.todo.value.trim().length=== 0) {
     alert("Add Title");
    }else{
      const text = e.currentTarget.todo.value; 
      const id = Date.now();
      dispatch(addTodo({ id, text }));
      e.currentTarget.todo.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input required = {true} name="todo" className="border" type="text" placeholder="Add title" />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button> 
        </div>
      ))}
    </div>
  );
};

export default App;
