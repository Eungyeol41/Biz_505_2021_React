import React from "react";
import "../css/Input.css";

import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { textId, todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="todo_input">
      <input
        ref={textId}
        placeholder="오늘 할 일"
        value={todo.t_text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>추가</button>
      <p>{todo.t_text}</p>
    </div>
  );
}

export default TodoInput;
