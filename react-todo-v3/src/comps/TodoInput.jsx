import React from "react";
import "../css/Input.css";

import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { todo, onChange, onClick } = useTodoContext();
  return (
    <div className="todo_input">
      <input placeholder="오늘 할 일" onChange />
      <button onClick={onClick}>추가</button>
      <p>{todo.t_text}</p>
    </div>
  );
}

export default TodoInput;
