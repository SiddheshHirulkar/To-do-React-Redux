import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

import ToDoInput from "./components/ToDoInput";
import ToDoItem from "./components/ToDoItems";

export default function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="App my-3">
      <h1>To do List</h1>
      <ToDoInput className />
      <div>
        {todos.map((todo) => {
          return <ToDoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}
