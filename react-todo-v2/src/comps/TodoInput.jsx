import React from "react";
import "../css/Input.css";

import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { todo, onChange, onClick, onKeyPress } = useTodoContext();

  return (
    <div className="todo_input">
      <input
        value={todo.t_text}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="오늘 할 일"
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}

export default TodoInput;
